import "dotenv/config";
import readline from "readline";
import { ChatMistralAI } from "@langchain/mistralai";

const rl = readline.createInterface({   // helps take input from the user and print output to the console.
  input: process.stdin,
  output: process.stdout,
});

const model = new ChatMistralAI({
  model: "mistral-small-latest",
  temperature: 0,
  apiKey: process.env.MISTRAL_API_KEY,
});

const resonse = await model.invoke("What is the capital of Russia?");

console.log(resonse.text);

rl.close();
