import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from "@google/generative-ai";

const safetySettings = [
    {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.HARM_LOW_AND_ABOVE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.HARM_LOW_AND_ABOVE,
    }
]
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_PUBLICKEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash", safetySettings, });

export default model;