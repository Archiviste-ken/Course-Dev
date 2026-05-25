import { useSelector } from "react-redux";
import { useChat } from "../hooks/useChat";
import { useEffect, useMemo, useState } from "react";

const Dashboard = () => {
  const {
    initializeSocket,
    handleSendMessage,
    handleGetChats,
    handleSelectChat,
  } = useChat();
  const { user } = useSelector((state) => state.auth);
  const chats = useSelector((state) => state.chat.chats);
  const currentChatId = useSelector((state) => state.chat.currentChatId);
  const [message, setMessage] = useState("");

  const chatList = useMemo(() => Object.values(chats ?? {}), [chats]);
  const currentChat = currentChatId ? chats?.[currentChatId] : null;
  const messages = currentChat?.messages ?? [];

  useEffect(() => {
    initializeSocket();
    handleGetChats();
  }, [handleGetChats, initializeSocket]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedMessage = message.trim();
    if (!trimmedMessage) {
      return;
    }
    handleSendMessage(trimmedMessage, currentChatId);
    setMessage("");
  };

  return (
    <main className="min-h-screen w-full bg-[#0B1220] text-slate-100">
      <div className="flex min-h-screen flex-col lg:flex-row">
        <aside className="flex w-full flex-col border-b border-white/10 bg-[#0B1424] p-5 sm:p-6 lg:w-80 lg:border-b-0 lg:border-r">
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-cyan-400/40 to-blue-500/40 text-sm font-semibold">
              P
            </div>
            <div>
              <p className="text-sm font-semibold tracking-wide">Perplexity</p>
              <p className="text-xs text-slate-400">Pro Intelligence</p>
            </div>
          </div>

          <button className="mt-6 w-full rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:brightness-110">
            + New Thread
          </button>

          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Threads
            </p>
            <div className="mt-4 grid gap-3 text-sm text-slate-300 sm:grid-cols-2 lg:grid-cols-1">
              {chatList.length === 0 ? (
                <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-slate-400">
                  No threads yet
                </div>
              ) : (
                chatList.map((chatItem, index) => {
                  const chatId = chatItem?._id ?? chatItem?.id ?? null;
                  const isActive = chatId && chatId === currentChatId;
                  return (
                    <button
                      key={`${chatId ?? "thread"}-${index}`}
                      type="button"
                      onClick={() => chatId && handleSelectChat(chatId)}
                      className={`rounded-xl border px-3 py-2 text-left transition ${
                        isActive
                          ? "border-cyan-400/40 bg-cyan-500/10 text-slate-100"
                          : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
                      }`}
                    >
                      {chatItem.title || chatItem.name || chatId || "Untitled"}
                    </button>
                  );
                })
              )}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between text-xs text-slate-500 lg:mt-auto lg:pt-8">
            <span>Help</span>
            <span>Settings</span>
          </div>
        </aside>

        <section className="flex flex-1 flex-col">
          <header className="flex flex-col gap-4 border-b border-white/10 px-4 py-6 sm:px-6 md:flex-row md:items-center md:justify-between md:px-10">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                Perplexity Workspace
              </p>
              <h1 className="mt-2 text-xl font-semibold sm:text-2xl">
                Conversational Intelligence
              </h1>
            </div>
            <div className="flex w-full items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 md:w-auto">
              <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
              {user?.name ? `Signed in as ${user.name}` : "Ready to assist"}
            </div>
          </header>

          <div className="flex flex-1 flex-col gap-8 px-4 py-8 sm:px-6 md:px-10">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    Conversation
                  </p>
                  <p className="mt-2 text-sm text-slate-300">
                    {currentChatId
                      ? `Active thread: ${currentChatId}`
                      : "No active thread selected"}
                  </p>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-400">
                  {messages.length} messages
                </span>
              </div>

              <div className="mt-6 space-y-4">
                {messages.length === 0 ? (
                  <div className="rounded-2xl border border-dashed border-white/10 bg-[#0B1220] px-4 py-6 text-sm text-slate-400">
                    Send a message to start the conversation.
                  </div>
                ) : (
                  messages.map((msg, index) => (
                    <div
                      key={`${msg.role}-${index}`}
                      className={`flex ${
                        msg.role === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                          msg.role === "user"
                            ? "bg-cyan-500/20 text-slate-100"
                            : "bg-white/5 text-slate-200"
                        }`}
                      >
                        {msg.content}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            <form
              className="rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-5"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center">
                <label className="flex-1">
                  <span className="sr-only">Message Perplexity</span>
                  <textarea
                    className="h-24 w-full resize-none rounded-2xl border border-white/10 bg-[#0B1220] px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/60 md:h-14"
                    placeholder="Message Perplexity..."
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                  />
                </label>
                <button
                  type="submit"
                  className="w-full rounded-2xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/30 transition hover:brightness-110 md:w-auto"
                >
                  Send
                </button>
              </div>
              <p className="mt-3 text-xs text-slate-500">
                AI can make mistakes. Consider verifying critical information.
              </p>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Dashboard;
