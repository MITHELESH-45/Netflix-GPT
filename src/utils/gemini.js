
import { GoogleGenerativeAI } from "@google/generative-ai";


const apiKey = process.env.REACT_APP_GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(apiKey); 

export default genAI;
