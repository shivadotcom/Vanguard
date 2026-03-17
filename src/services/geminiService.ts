import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function generateVehicleScene(vehicleName: string, sceneInput: string) {
  try {
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

    const response = await ai.models.generateContent({
      model: 'gemini-3.1-pro-preview',
      contents: prompt,
    });

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
    const prompt = customPrompt || `Generate a highly detailed, cinematic, tactical military photograph of a ${name} (${type}). 
    Context: ${description}. 
    Style: Professional military photography, dramatic lighting, realistic textures, 4k resolution, bokeh background, battlefield environment.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: [{ parts: [{ text: prompt }] }],
      config: {
        imageConfig: {
          aspectRatio: "16:9",
        },
      },
    });

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
