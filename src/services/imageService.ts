import { GoogleGenAI } from "@google/genai";
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

// Keep track of ongoing generation promises to avoid duplicate calls
const generationPromises = new Map<string, Promise<string>>();

// Keep a single cache in memory to avoid redundant DB calls and flickering
export const memoryCache = new Map<string, string>();

interface QueueItem {
  vehicle: Vehicle;
  resolve: (url: string) => void;
  reject: (error: any) => void;
}

const generationQueue: QueueItem[] = [];
let isProcessingQueue = false;

async function processQueue() {
  if (isProcessingQueue || generationQueue.length === 0) return;
  
  isProcessingQueue = true;
  
  while (generationQueue.length > 0) {
    const item = generationQueue.shift();
    if (!item) continue;
    
    try {
      const imageUrl = await generateAndStoreImage(item.vehicle);
      item.resolve(imageUrl);
    } catch (error) {
      item.reject(error);
    }
    
    // Wait 4.5 seconds before next request to stay under 15 RPM free tier limit
    if (generationQueue.length > 0) {
      await new Promise(resolve => setTimeout(resolve, 4500));
    }
  }
  
  isProcessingQueue = false;
}

export async function getOrGenerateVehicleImage(vehicle: Vehicle): Promise<string> {
  // 1. Check memory cache
  if (memoryCache.has(vehicle.id)) {
    return memoryCache.get(vehicle.id)!;
  }

  // 2. Check local IndexedDB storage (cache layer)
  const storedImage = await getStoredImage(vehicle.id);
  if (storedImage) {
    memoryCache.set(vehicle.id, storedImage);
    return storedImage;
  }

  // 3. Check if already generating/fetching
  if (generationPromises.has(vehicle.id)) {
    return generationPromises.get(vehicle.id)!;
  }

  // 4. Create a promise that handles the full Cloud -> Gemini -> Cloud flow
  const fetchOrGeneratePromise = new Promise<string>(async (resolve, reject) => {
    try {
      // Check Cloudinary first (global storage)
      const cloudUrl = await checkCloudImageExists(vehicle.id);
      if (cloudUrl) {
        await storeImage(vehicle.id, cloudUrl); // Cache locally
        resolve(cloudUrl);
        return;
      }

      // If not in cloud, queue for Gemini generation
      generationQueue.push({ vehicle, resolve, reject });
      processQueue();
    } catch (error) {
      reject(error);
    }
  });
  
  generationPromises.set(vehicle.id, fetchOrGeneratePromise);

  try {
    const result = await fetchOrGeneratePromise;
    memoryCache.set(vehicle.id, result);
    return result;
  } finally {
    generationPromises.delete(vehicle.id);
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

async function generateAndStoreImage(vehicle: Vehicle): Promise<string> {
  try {
    const apiKey = process.env.GEMINI_API_KEY || (import.meta as any).env?.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("API key not found. Set VITE_GEMINI_API_KEY in Vercel.");
    }

    const ai = new GoogleGenAI({ apiKey });
    const prompt = `Realistic high-detail image of a ${vehicle.name}, ${vehicle.type}, used by ${vehicle.country}, modern military style, cinematic lighting, neutral background`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: { parts: [{ text: prompt }] },
      config: {
        imageConfig: {
          aspectRatio: "16:9",
          imageSize: "1K"
        }
      }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        const base64EncodeString = part.inlineData.data;
        const imageUrl = `data:${part.inlineData.mimeType || 'image/png'};base64,${base64EncodeString}`;
        
        // Compress the image before storing/uploading
        const compressedImageUrl = await compressImage(imageUrl);
        
        // Upload to Cloudinary
        const cloudUrl = await uploadToCloudinary(vehicle.id, compressedImageUrl);
        
        // Store the Cloudinary URL in local IndexedDB cache
        await storeImage(vehicle.id, cloudUrl);
        return cloudUrl;
      }
    }

    throw new Error("No image data returned from Gemini");
  } catch (error) {
    console.error("Failed to generate/upload image for", vehicle.name, error);
    throw error;
  }
}
