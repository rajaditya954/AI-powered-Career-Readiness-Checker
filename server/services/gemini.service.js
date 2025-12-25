import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

// Ensure you are using the 'new' keyword
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const analyzeWithGemini = async (resumeText, role) => {
    // We will try the most current stable model for 2025
    // If 'gemini-1.5-flash' failed, 'gemini-2.5-flash' is the correct successor.
    const MODEL_NAME = "gemini-2.5-flash";

    try {
        console.log(`Starting analysis with model: ${MODEL_NAME}`);
        const model = genAI.getGenerativeModel({ model: MODEL_NAME });

        const prompt = `
            Analyze the following resume for the role of: ${role}.
            
            Provide:
            1. Readiness score (0-100)
            2. Strengths
            3. Missing skills
            4. 3 improvement suggestions

            Resume Content:
            ${resumeText}
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        return response.text();

    } catch (error) {
        console.error("Gemini API Error:", error.message);

        // Final Fallback: If 2.5 fails, try the absolute 'latest' alias
        if (error.message.includes("404")) {
            console.log("Attempting fallback to 'gemini-flash-latest'...");
            try {
                const fallbackModel = genAI.getGenerativeModel({ model: "gemini-flash-latest" });
                const fallbackResult = await fallbackModel.generateContent(resumeText);
                return fallbackResult.response.text();
            } catch (err) {
                throw new Error("All Gemini models returned 404. Please check: 1. API Key is enabled for 'Generative Language API' in Google Cloud. 2. Billing is linked (even for free tier).");
            }
        }
        throw error;
    }
};

export default analyzeWithGemini;