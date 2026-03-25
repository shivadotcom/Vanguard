import { Vehicle } from "../types";
import { checkCloudImageExists, uploadToCloudinary } from "./cloudinaryService";
import { GoogleGenAI } from "@google/genai";

let aiClient: GoogleGenAI | null = null;
function getAiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    aiClient = new GoogleGenAI({ apiKey: apiKey || 'dummy-key-to-prevent-crash' });
  }
  return aiClient;
}

const DB_NAME = "VanguardImageDB";
const STORE_NAME = "vehicleImages";
const DB_VERSION = 1;

let dbPromise: Promise<IDBDatabase> | null = null;

function getDB(): Promise<IDBDatabase> {
  if (!dbPromise) {
    dbPromise = new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME);
        }
      };
    });
  }
  return dbPromise;
}

export async function getStoredImage(vehicleId: string): Promise<string | null> {
  const db = await getDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readonly");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.get(vehicleId);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result || null);
  });
}

export async function storeImage(vehicleId: string, imageUrlOrBase64: string): Promise<void> {
  const db = await getDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readwrite");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.put(imageUrlOrBase64, vehicleId);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve();
  });
}

export async function deleteImageCache(vehicleId: string): Promise<void> {
  memoryCache.delete(vehicleId);
  const db = await getDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readwrite");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.delete(vehicleId);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve();
  });
}

export const memoryCache = new Map<string, string>();

// --- Queue System & Generation Lock ---
const generationLocks = new Set<string>();
const generatedCache = new Set<string>();

interface QueueTask {
  vehicle: Vehicle;
  priority: number;
  resolve: (url: string | null) => void;
  reject: (err: any) => void;
}

let activeGenerations = 0;
const MAX_CONCURRENT = 50;
const generationQueue: QueueTask[] = [];

export function cancelVehicleImageGeneration(vehicleId: string) {
  const index = generationQueue.findIndex(t => t.vehicle.id === vehicleId);
  if (index !== -1) {
    generationQueue[index].resolve(null);
    generationQueue.splice(index, 1);
    generationLocks.delete(vehicleId);
  }
}

export async function getVehicleImage(vehicle: Vehicle, priority: number = 0): Promise<string | null> {
  // 6. Caching: Once an image is generated, never regenerate it again
  if (generatedCache.has(vehicle.id) || memoryCache.has(vehicle.id)) {
    return memoryCache.get(vehicle.id) || null;
  }

  const storedImage = await getStoredImage(vehicle.id);
  if (storedImage) {
    memoryCache.set(vehicle.id, storedImage);
    generatedCache.add(vehicle.id);
    return storedImage;
  }

  // 3. Generation Lock: Prevent duplicate API calls
  if (generationLocks.has(vehicle.id)) {
    return new Promise((resolve) => {
      const existingTask = generationQueue.find(t => t.vehicle.id === vehicle.id);
      if (existingTask) {
        existingTask.priority = Math.max(existingTask.priority, priority);
        generationQueue.sort((a, b) => b.priority - a.priority);
        
        const originalResolve = existingTask.resolve;
        existingTask.resolve = (url) => {
          originalResolve(url);
          resolve(url);
        };
      } else {
        // It's currently processing. Wait for the event.
        const handler = (e: any) => {
          if (e.detail.vehicleId === vehicle.id && e.detail.action === 'update') {
            window.removeEventListener('vehicle-image-updated', handler);
            resolve(e.detail.src);
          }
        };
        window.addEventListener('vehicle-image-updated', handler);
        // Fallback timeout to prevent memory leaks if processing fails
        setTimeout(() => {
          window.removeEventListener('vehicle-image-updated', handler);
          resolve(null);
        }, 30000);
      }
    });
  }

  return new Promise((resolve, reject) => {
    generationLocks.add(vehicle.id);
    generationQueue.push({ vehicle, priority, resolve, reject });
    // 7. Performance: Prioritize currently visible cards
    generationQueue.sort((a, b) => b.priority - a.priority);
    
    processGenerationQueue();
  });
}

async function processGenerationQueue() {
  if (activeGenerations >= MAX_CONCURRENT || generationQueue.length === 0) return;
  
  activeGenerations++;
  const task = generationQueue.shift()!;
  
  // Start the next one immediately if under limit
  processGenerationQueue();
  
  try {
    let url = null;
    try {
      url = await checkCloudImageExists(task.vehicle.id);
    } catch (e) {
      console.error("Failed to check cloud image:", e);
    }
    
    // If not in Cloudinary, generate via AI
    if (!url) {
      url = await generateVehicleImageAI(task.vehicle);
    } else {
      await storeImage(task.vehicle.id, url);
      memoryCache.set(task.vehicle.id, url);
    }
    
    if (url) {
      generatedCache.add(task.vehicle.id);
      window.dispatchEvent(new CustomEvent('vehicle-image-updated', { 
        detail: { vehicleId: task.vehicle.id, action: 'update', src: url } 
      }));
    }
    task.resolve(url);
  } catch (error) {
    console.error(`Error processing image for ${task.vehicle.id}:`, error);
    task.resolve(null);
  } finally {
    generationLocks.delete(task.vehicle.id);
    activeGenerations--;
    processGenerationQueue();
  }
}

async function compressImage(dataUrl: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      let width = img.width;
      let height = img.height;

      const MAX_WIDTH = 800;
      if (width > MAX_WIDTH) {
        height = Math.round((height * MAX_WIDTH) / width);
        width = MAX_WIDTH;
      }

      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext('2d');
      if (!ctx) {
        reject(new Error("Failed to get canvas context"));
        return;
      }

      ctx.drawImage(img, 0, 0, width, height);

      const quality = 0.8;
      
      const processBlob = (blob: Blob | null) => {
        if (!blob) {
          reject(new Error("Failed to compress image"));
          return;
        }
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = () => reject(new Error("Failed to read blob"));
        reader.readAsDataURL(blob);
      };

      canvas.toBlob(processBlob, "image/webp", quality);
    };
    img.onerror = () => reject(new Error("Failed to load image for compression"));
    img.src = dataUrl;
  });
}

export async function generateVehicleImageAI(vehicle: Vehicle): Promise<string> {
  try {
    const prompt = `Generate a highly realistic photograph of a ${vehicle.name}, a ${vehicle.type} used by ${vehicle.country}.

Requirements:

* Real-world military photography style
* No illustration, no CGI, no cartoon, no digital art
* Natural lighting, realistic textures, accurate proportions
* Captured like a real defense photography shot
* Neutral or battlefield background
* High detail, sharp focus

Strictly avoid:

* cartoon style
* painting style
* concept art
* futuristic or fictional designs`;
    
    const ai = getAiClient();
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: prompt,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "16:9",
          imageSize: "1K"
        },
      },
    });

    let base64String = '';
    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        base64String = `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
        break;
      }
    }

    if (!base64String) {
      throw new Error("AI service did not return an image.");
    }
    
    // Compress the image before storing/uploading
    const compressedImageUrl = await compressImage(base64String);
    
    let finalImageUrl = compressedImageUrl;
    try {
      // Upload to Cloudinary
      let cloudUrl = await uploadToCloudinary(vehicle.id, compressedImageUrl);
      finalImageUrl = `${cloudUrl}?t=${Date.now()}`;
    } catch (uploadError: any) {
      console.warn("Cloudinary upload failed, using local image:", uploadError.message);
    }
    
    // Store the URL in local IndexedDB cache
    await storeImage(vehicle.id, finalImageUrl);
    memoryCache.set(vehicle.id, finalImageUrl);
    
    return finalImageUrl;
  } catch (error: any) {
    console.error("Failed to generate/upload image for", vehicle.name, error);
    
    // FALLBACK: Try to find a real image on Wikipedia
    try {
        console.log(`Falling back to Wikipedia for ${vehicle.name}...`);
        const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(vehicle.name)}&utf8=&format=json&origin=*`;
        const searchRes = await fetch(searchUrl);
        const searchData = await searchRes.json();
        
        if (searchData?.query?.search?.length > 0) {
            const title = searchData.query.search[0].title;
            const imgUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&format=json&pithumbsize=800&origin=*`;
            const imgRes = await fetch(imgUrl);
            const imgData = await imgRes.json();
            
            const pages = imgData?.query?.pages;
            if (pages) {
                const pageId = Object.keys(pages)[0];
                if (pages[pageId]?.thumbnail?.source) {
                    const wikiImgUrl = pages[pageId].thumbnail.source;
                    console.log(`Found Wikipedia image: ${wikiImgUrl}`);
                    
                    let finalImageUrl = wikiImgUrl;
                    try {
                      // Upload the Wikipedia URL directly to Cloudinary
                      let cloudUrl = await uploadToCloudinary(vehicle.id, wikiImgUrl);
                      finalImageUrl = `${cloudUrl}?t=${Date.now()}`;
                    } catch (uploadError: any) {
                      console.warn("Cloudinary upload failed for Wikipedia fallback, using direct Wikipedia URL:", uploadError.message);
                    }
                    
                    await storeImage(vehicle.id, finalImageUrl);
                    memoryCache.set(vehicle.id, finalImageUrl);
                    return finalImageUrl;
                }
            }
        }
    } catch (wikiErr) {
        console.error("Wikipedia fallback failed", wikiErr);
    }

    throw new Error(error.message || "Failed to generate image");
  }
}

export async function uploadCustomVehicleImage(vehicle: Vehicle, fileDataOrUrl: string): Promise<string> {
  let dataToUpload = fileDataOrUrl;
  
  // Only compress if it's a base64 data URL (actual file upload)
  if (fileDataOrUrl.startsWith('data:image')) {
    dataToUpload = await compressImage(fileDataOrUrl);
  }
  
  let finalImageUrl = dataToUpload;
  try {
    let cloudUrl = await uploadToCloudinary(vehicle.id, dataToUpload);
    finalImageUrl = `${cloudUrl}?t=${Date.now()}`;
  } catch (uploadError: any) {
    console.warn("Cloudinary upload failed for custom image, using local image:", uploadError.message);
  }
  
  await storeImage(vehicle.id, finalImageUrl);
  memoryCache.set(vehicle.id, finalImageUrl);
  return finalImageUrl;
}
