import dotenv from "dotenv";
dotenv.config();

export const GEMINI_CONFIG = {
    API_KEY: process.env.GEMINI_API_KEY,
    MODEL: "gemini-pro",
    BASE_URL: "https://generativelanguage.googleapis.com/v1beta/models"
};
