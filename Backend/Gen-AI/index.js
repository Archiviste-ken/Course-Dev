import "dotenv/config";
import readline from "readline/promises";
import { ChatMistralAI } from "@langchain/mistralai";
import { HumanMessage } from "langchain";
import { sendEmail } from "./mail.services.js";

const rl = readline.createInterface({
  // helps take input from the user and print output to the console.
  input: process.stdin,
  output: process.stdout,
});

const model = new ChatMistralAI({
  model: "mistral-small-latest",
  temperature: 0,
});

const messages = [];

while (true) {
  const userInput = await rl.question("\x1b[32mYou:\x1b[0m ");

  messages.push(new HumanMessage(userInput));

  const response = await model.invoke(messages);

  messages.push(response);

  console.log("AI: ", response.text);
}

rl.close();
