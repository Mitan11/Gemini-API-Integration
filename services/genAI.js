import { GoogleGenAI } from "@google/genai";

class GenAIService {
    constructor() {
        this.ai = new GoogleGenAI({ apiKey: process.env.apiKey });
    }

    async generate(prompt, model) {
        try {
            
            const response = await this.ai.models.generateContent({
                model: model,
                contents: prompt,
            });

            console.log(response.text);
            
            return response.text;
        } catch (error) {
            
            throw new Error(`GenAI Service Error: ${error.message}`);
            
        }
    }
}

export default GenAIService ;