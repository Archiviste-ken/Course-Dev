import { initializeSocket } from "../pages/service/chat.socket";
import {
  sendMessage,
  getChats,
  getMessages,
  deleteChat,
} from "../pages/service/chat.api";
import { useDispatch } from "react-redux";
import {
  setChats,
  setCurrentChatId,
  setLoading,
  setError,
} from "../chat.slice";

export const useChat = () => {
  const dispatch = useDispatch();

  async function handleSendMessage(message, chatId) {
    dispatch(setLoading(true));
    const data = await sendMessage(message, chatId);
    const { chat, aiMessage } = data;
    dispatch(
      setChats((prev) => {
        return {
          ...prev,
          [chatId.title]: {
            ...chat,
            messages: [{ content: message, role: "user" }, aiMessage],
          },
        };
      }),
    );

    dispatch(setCurrentChatId(chat._id));
  }


  return {
    initializeSocket,
    sendMessage,
    getChats,
    getMessages,
    deleteChat,
  };
};
