import { config } from "dotenv";

config();

/**
 *  GOOGLE_API_KEY: The API key for accessing the Google API.
 *  MISTRAL_API_KEY: The API key for accessing the Mistral API.
 *  COHERE_API_KEY: The API key for accessing the Cohere API.
 */

type CONFIG = {
  readonly GOOGLE_API_KEY: string;
  readonly MISTRAL_API_KEY: string;
  readonly  COHERE_API_KEY: string;
};

const Config: CONFIG = {
  GOOGLE_API_KEY: process.env.GOOGLE_API_KEY || "",
  MISTRAL_API_KEY: process.env.MISTRAL_API_KEY || "",
  COHERE_API_KEY: process.env.COHERE_API_KEY || "",
};

export default Config;
