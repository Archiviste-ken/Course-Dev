import { initializeSocket } from "../pages/service/chat.socket";
import {
  sendMessage,
  getChats,
  getMessages,
  deleteChat,
} from "../pages/service/chat.api";
import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setChats,
  setCurrentChatId,
  setLoading,
  setError,
} from "../chat.slice";

export const useChat = () => {
  const dispatch = useDispatch();
  const chats = useSelector((state) => state.chat.chats);
  const currentChatId = useSelector((state) => state.chat.currentChatId);

  const handleSendMessage = useCallback(
    async (message, chatId) => {
      dispatch(setLoading(true));
      try {
        const data = await sendMessage(message, chatId);
        const { chat, aiMessage } = data;
        const existingChat = chats?.[chat._id];
        const existingMessages = existingChat?.messages ?? [];

        dispatch(
          setChats({
            ...chats,
            [chat._id]: {
              ...chat,
              messages: [
                ...existingMessages,
                { content: message, role: "user" },
                aiMessage,
              ],
            },
          }),
        );

        dispatch(setCurrentChatId(chat._id));
      } catch (error) {
        dispatch(setError(error?.message ?? "Failed to send message"));
      } finally {
        dispatch(setLoading(false));
      }
    },
    [chats, dispatch],
  );

  const handleGetChats = useCallback(async () => {
    dispatch(setLoading(true));
    try {
      const data = await getChats();
      let normalized = {};

      if (Array.isArray(data)) {
        normalized = data.reduce((acc, chat) => {
          acc[chat._id] = chat;
          return acc;
        }, {});
      } else if (Array.isArray(data?.chats)) {
        normalized = data.chats.reduce((acc, chat) => {
          acc[chat._id] = chat;
          return acc;
        }, {});
      } else if (data && typeof data === "object") {
        normalized = data;
      }

      dispatch(setChats(normalized));

      if (!currentChatId) {
        const firstChatId = Object.keys(normalized)[0];
        if (firstChatId) {
          dispatch(setCurrentChatId(firstChatId));
        }
      }
    } catch (error) {
      dispatch(setError(error?.message ?? "Failed to load chats"));
    } finally {
      dispatch(setLoading(false));
    }
  }, [currentChatId, dispatch]);

  const handleSelectChat = useCallback(
    (chatId) => {
      dispatch(setCurrentChatId(chatId));
    },
    [dispatch],
  );

  return useMemo(
    () => ({
      initializeSocket,
      sendMessage,
      getChats,
      getMessages,
      deleteChat,
      handleSendMessage,
      handleGetChats,
      handleSelectChat,
    }),
    [handleGetChats, handleSelectChat, handleSendMessage],
  );
};
