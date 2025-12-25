import axios from "axios";

const API = axios.create({
    baseURL: "https://ai-powered-career-readiness-checker.onrender.com",
});

export const analyzeResume = (formData) =>
    API.post("/analyze", formData);
