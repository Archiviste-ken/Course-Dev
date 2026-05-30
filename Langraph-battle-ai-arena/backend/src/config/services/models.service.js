import { chatGoogle } from "@langchain/google";
import config from "../config/config.js";

export const geminiModel = new ChatGoogle({
  model: "gemini-flash-latest",
  apiKey: config.GOOGLE_API_KEY,
});

export const mistralModel = new ChatMistral({
  model: "mistral-medium-latest",
  apiKey: config.MISTRAL_API_KEY,
});

export const cohereModel = new ChatCohere({
  model: "command-r-08-2024",
  apiKey: config.COHERE_API_KEY,
});
