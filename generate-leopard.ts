import { GoogleGenAI } from "@google/genai";
import fs from "fs";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function main() {
  try {
    const prompt = "Leopard 2 tank firing in desert battlefield, explosion hitting enemy tank, cinematic lighting, ultra realistic, 4k";
    console.log("Generating image...");
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
        const buffer = Buffer.from(part.inlineData.data, 'base64');
        fs.writeFileSync('./public/leopard2.png', buffer);
        console.log("Saved to public/leopard2.png");
        return;
      }
    }
    console.log("No image data returned");
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
