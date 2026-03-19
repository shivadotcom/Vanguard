import { GoogleGenAI } from "@google/genai";
import { Vehicle } from "../types";

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

export async function storeImage(vehicleId: string, base64Image: string): Promise<void> {
  const db = await getDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readwrite");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.put(base64Image, vehicleId);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve();
  });
}

// Keep track of ongoing generation promises to avoid duplicate calls
const generationPromises = new Map<string, Promise<string>>();

// Keep a single cache in memory to avoid redundant DB calls and flickering
export const memoryCache = new Map<string, string>();

export async function getOrGenerateVehicleImage(vehicle: Vehicle): Promise<string> {
  // 1. Check memory cache
  if (memoryCache.has(vehicle.id)) {
    return memoryCache.get(vehicle.id)!;
  }

  // 2. Check storage
  const storedImage = await getStoredImage(vehicle.id);
  if (storedImage) {
    memoryCache.set(vehicle.id, storedImage);
    return storedImage;
  }

  // 3. Check if already generating
  if (generationPromises.has(vehicle.id)) {
    return generationPromises.get(vehicle.id)!;
  }

  // 4. Generate
  const generationPromise = generateAndStoreImage(vehicle);
  generationPromises.set(vehicle.id, generationPromise);

  try {
    const result = await generationPromise;
    memoryCache.set(vehicle.id, result);
    return result;
  } finally {
    generationPromises.delete(vehicle.id);
  }
}

async function generateAndStoreImage(vehicle: Vehicle): Promise<string> {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("Gemini API key not found");
    }

    const ai = new GoogleGenAI({ apiKey });
    const prompt = `Realistic high-detail image of a ${vehicle.name}, ${vehicle.type}, used by ${vehicle.country}, modern military style, cinematic lighting, neutral background`;

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
        }
      }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        const base64EncodeString = part.inlineData.data;
        const imageUrl = `data:${part.inlineData.mimeType || 'image/png'};base64,${base64EncodeString}`;
        
        // Store it
        await storeImage(vehicle.id, imageUrl);
        return imageUrl;
      }
    }

    throw new Error("No image data returned from Gemini");
  } catch (error) {
    console.error("Failed to generate image for", vehicle.name, error);
    throw error;
  }
}
