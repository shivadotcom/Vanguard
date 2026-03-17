import { GoogleGenAI } from "@google/genai";

let aiClient: GoogleGenAI | null = null;

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function withRetry<T>(fn: () => Promise<T>, retries = 5, backoff = 5000): Promise<T> {
  try {
    return await fn();
  } catch (error: any) {
    const isRateLimit = error?.status === 'RESOURCE_EXHAUSTED' || error?.message?.includes('429') || error?.message?.includes('quota');
    if (retries > 0 && isRateLimit) {
      console.warn(`Rate limit hit. Retrying in ${backoff/1000}s... (${retries} retries left)`);
      await delay(backoff);
      return withRetry(fn, retries - 1, backoff * 2);
    }
    throw error;
  }
}

function getAiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn("GEMINI_API_KEY is not set. AI features will not work.");
    }
    aiClient = new GoogleGenAI({ apiKey: apiKey || 'dummy-key-to-prevent-crash' });
  }
  return aiClient;
}

export async function generateVehicleScene(vehicleName: string, sceneInput: string) {
  try {
    const ai = getAiClient();
    const prompt = `You are a military visualization AI.

Your job is to generate:
1. A short cinematic description
2. A highly detailed image prompt

User Input:
Vehicle: {{${vehicleName}}}
Scene: {{${sceneInput}}}

Rules:
- The vehicle must be accurate and realistic
- The scene must match the environment
- No random elements
- Make it cinematic and powerful
- Focus on action (battle, movement, explosions if relevant)

Image Prompt Rules:
- Ultra detailed
- Realistic military style
- Include environment, lighting, atmosphere
- Mention camera angle (optional but preferred)
- Must clearly show the vehicle

Output format:

Title: ([Title])

Description:
([Description])

Image Prompt:
([Image Prompt])`;

    const response = await withRetry(() => ai.models.generateContent({
      model: 'gemini-3.1-pro-preview',
      contents: prompt,
    }));

    const text = response.text || '';
    
    const titleMatch = text.match(/Title:\s*\((.*?)\)/i);
    const descMatch = text.match(/Description:\s*\((.*?)\)/is);
    const promptMatch = text.match(/Image Prompt:\s*\((.*?)\)/is);

    return {
      title: titleMatch ? titleMatch[1].trim() : vehicleName,
      description: descMatch ? descMatch[1].trim() : '',
      imagePrompt: promptMatch ? promptMatch[1].trim() : sceneInput,
    };
  } catch (error) {
    console.error("Error generating scene:", error);
    throw error;
  }
}

export async function generateVehicleImage(name: string, type: string, description: string, customPrompt?: string) {
  try {
    const ai = getAiClient();
    const prompt = customPrompt || `Generate a highly detailed, cinematic, tactical military photograph of a ${name} (${type}). 
    Context: ${description}. 
    Style: Professional military photography, dramatic lighting, realistic textures, 4k resolution, bokeh background, battlefield environment.`;

    const response = await withRetry(() => ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: [{ parts: [{ text: prompt }] }],
      config: {
        imageConfig: {
          aspectRatio: "16:9",
        },
      },
    }));

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    throw new Error("No image data returned from Gemini");
  } catch (error) {
    console.error("Error generating image:", error);
    throw error;
  }
}
