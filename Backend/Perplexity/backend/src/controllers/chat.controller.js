import { generateResponse, generateChatTitle } from "../services/ai.services.js";

export async function sendMessage(req, res) {
  const { message } = req.body;

  const result = await generateResponse(message);

  res.json({ aiMessage: result });
}

export async function generateChatTitle(req, res) {
  const { message } = req.body;

  const title = await generateChatTitle(message);

  res.json({ chatTitle: title });
}
