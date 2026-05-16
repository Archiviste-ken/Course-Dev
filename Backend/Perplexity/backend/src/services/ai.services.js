import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ChatMistralAI } from "@langchain/mistralai";
import { HumanMessage } from "langchain";

const geminiModel = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash-lite",
  apiKey: process.env.GEMINI_API_KEY,
});

const mistralModel = new ChatMistralAI({
  model: "mistral-small",
  apiKey: process.env.MISTRAL_API_KEY,
});

export async function generateResponse(message) {
  const response = await model.invoke([new HumanMessage(message)]);

  return response.text;
}

export async function generateChatTitle(message) {
  const response = await mistralModel.invoke([
    new SystemMessage(`You are a helpful assistant that generates concise and descriptive titles for chat conversations.
      
      User will provideyou with the first message of a chat conversation, and you will generate a title that captures the essence of the conversation in a 2-4 words. The title should be informative and engaging, giving users a clear idea of what the conversation is about.
      
      `),

    new HumanMessage(
      `Generate a title for a chat conversation based on the following message: "${message}" `,
    ),
  ]);
  return response.text;
}
