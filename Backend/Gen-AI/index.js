import "dotenv/config";
import readline from "readline/promises";
import { ChatMistralAI } from "@langchain/mistralai";
import { HumanMessage, tool, createAgent } from "langchain";
import { sendEmail } from "./mail.services.js";
import * as z from "zod";

const emailTool = tool(sendEmail, {
  name: "emailTool",
  description: "Use this tool to send an email",
  schema: z.object({
    to: z.string().describe("The recipient's email address"),
    html: z.string().describe("The HTML content of the email"),
    subject: z.string().describe("The subject of the email"),
  }),
});

const rl = readline.createInterface({
  // helps take input from the user and print output to the console.
  input: process.stdin,
  output: process.stdout,
});

const model = new ChatMistralAI({
  model: "mistral-small-latest",
  temperature: 0,
});

const agent = createAgent({
  model,
  tools: [emailTool],
});

const messages = [];

while (true) {
  const userInput = await rl.question("\x1b[32mYou:\x1b[0m ");

  messages.push(new HumanMessage(userInput));

  const response = await agent.invoke({ input: userInput });

  messages.push(response);

  console.log(response)
}

rl.close();
