import { chatGoogle } from "@langchain/google";
import config from "../config/config.js";

const geminiModel = new ChatGoogle({
  model: "gemini-flash-latest",
  apiKey: config.GOOGLE_API_KEY,
});

const mistralModel = new ChatMistral({
  model: "mistral-medium-latest",
  apiKey: config.MISTRAL_API_KEY,
});

