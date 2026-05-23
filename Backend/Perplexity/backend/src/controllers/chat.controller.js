import {
  generateResponse,
  generateChatTitle,
} from "../services/ai.services.js";
import chatModel from "../models/chat.model.js";
import messageModel from "../models/message.model.js";

export async function sendMessage(req, res) {
  const { message } = req.body;

  const title = await generateChatTitle(message);

  const result = await generateResponse(message);

  console.log(req.user);

  const chat = await chatModel.create({
    user: req.user.id,
    title,
  });

  const userMessage = await messageModel.create({
    chat: chat._id,
    content: message,
    role: "user",
  });

  const aiMessage = await messageModel.create({
    chat: chat._id,
    content: result,
    role: "ai",
  });

  res.json({ aiMessage: result, title, user });
}
