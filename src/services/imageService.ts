import { Vehicle } from "../types";
import { checkCloudImageExists, uploadToCloudinary } from "./cloudinaryService";

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

export async function getVehicleImage(vehicle: Vehicle): Promise<string | null> {
  if (memoryCache.has(vehicle.id)) {
    return memoryCache.get(vehicle.id)!;
  }

  const storedImage = await getStoredImage(vehicle.id);
  if (storedImage) {
    memoryCache.set(vehicle.id, storedImage);
    return storedImage;
  }

  try {
    const cloudUrl = await checkCloudImageExists(vehicle.id);
    if (cloudUrl) {
      await storeImage(vehicle.id, cloudUrl);
      memoryCache.set(vehicle.id, cloudUrl);
      return cloudUrl;
    }
  } catch (e) {
    console.error("Failed to check cloud image:", e);
  }

  return null;
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
    // Shortened prompt to avoid URL length limits and complex filter triggers
    const prompt = `${vehicle.name} ${vehicle.type} military`;
    const seed = Math.floor(Math.random() * 1000000);
    
    // Using Pollinations.ai - completely free, no API key required
    const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=800&height=450&nologo=true&seed=${seed}`;
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`AI service returned ${response.status} ${response.statusText}`);
    }

    const blob = await response.blob();
    
    // If the blob is tiny, it's probably an error message disguised as an image
    if (blob.size < 5000) {
       throw new Error("Generated image is invalid or too small.");
    }

    const base64String = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = () => reject(new Error("Failed to read blob"));
      reader.readAsDataURL(blob);
    });
    
    // Compress the image before storing/uploading
    const compressedImageUrl = await compressImage(base64String);
    
    // Upload to Cloudinary
    let cloudUrl = await uploadToCloudinary(vehicle.id, compressedImageUrl);
    cloudUrl = `${cloudUrl}?t=${Date.now()}`;
    
    // Store the Cloudinary URL in local IndexedDB cache
    await storeImage(vehicle.id, cloudUrl);
    memoryCache.set(vehicle.id, cloudUrl);
    
    return cloudUrl;
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
                    
                    // Upload the Wikipedia URL directly to Cloudinary
                    let cloudUrl = await uploadToCloudinary(vehicle.id, wikiImgUrl);
                    cloudUrl = `${cloudUrl}?t=${Date.now()}`;
                    await storeImage(vehicle.id, cloudUrl);
                    memoryCache.set(vehicle.id, cloudUrl);
                    return cloudUrl;
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
  
  let cloudUrl = await uploadToCloudinary(vehicle.id, dataToUpload);
  cloudUrl = `${cloudUrl}?t=${Date.now()}`;
  await storeImage(vehicle.id, cloudUrl);
  memoryCache.set(vehicle.id, cloudUrl);
  return cloudUrl;
}
