import { useSelector } from "react-redux";
import { useChat } from "../hooks/useChat";
import { useEffect } from "react";

const Dashboard = () => {
  const chat = useChat();
  const { user } = useSelector((state) => state.auth);

  const { initializeSocket } = useChat();

  useEffect(() => {
    chat.initializeSocket();
  }, []);

console.log(user);


  return (
    <main className="min-h-screen w-full bg-[#0B1220] text-slate-100">
      <div className="flex min-h-screen flex-col lg:flex-row">
        <aside className="flex w-full flex-col border-b border-white/10 bg-[#0B1424] p-5 sm:p-6 lg:w-80 lg:border-b-0 lg:border-r">
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/40 to-blue-500/40 text-sm font-semibold">
              P
            </div>
            <div>
              <p className="text-sm font-semibold tracking-wide">Perplexity</p>
              <p className="text-xs text-slate-400">Pro Intelligence</p>
            </div>
          </div>

          <button className="mt-6 w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:brightness-110">
            + New Thread
          </button>

          <nav className="mt-6 flex flex-wrap gap-2 text-sm text-slate-300 sm:mt-8 md:block md:space-y-2">
            {["Home", "Discover", "Library", "Collections", "Personal"].map(
              (item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl px-3 py-2 transition hover:bg-white/5"
                >
                  <span className="h-2 w-2 rounded-full bg-cyan-400/60"></span>
                  <span>{item}</span>
                </div>
              ),
            )}
          </nav>

          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Recent Threads
            </p>
            <div className="mt-4 grid gap-3 text-sm text-slate-300 sm:grid-cols-2 lg:grid-cols-1">
              {[
                "Quantum Computing Basics",
                "React Component Architecture",
                "Dinner recipe ideas",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2"
                >
                  {item}
                </div>
              ))}
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
            <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-6">
                <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 shadow-2xl shadow-cyan-500/10 sm:p-8">
                  <p className="text-sm text-slate-300">Assistant</p>
                  <h2 className="mt-3 text-lg font-semibold sm:text-xl">
                    Can you explain functional programming and how it differs from OOP? Keep it concise.
                  </h2>
                  <div className="mt-6 space-y-4 text-sm text-slate-200">
                    <div className="rounded-2xl bg-white/5 p-4">
                      <p className="font-semibold text-cyan-300">Functional Programming</p>
                      <ul className="mt-2 space-y-2 text-slate-300">
                        <li>Pure functions and predictable outputs.</li>
                        <li>Immutable data and declarative composition.</li>
                        <li>Focuses on what to compute, not how.</li>
                      </ul>
                    </div>
                    <div className="rounded-2xl bg-white/5 p-4">
                      <p className="font-semibold text-blue-300">Object-Oriented Programming</p>
                      <ul className="mt-2 space-y-2 text-slate-300">
                        <li>Encapsulated state within objects.</li>
                        <li>Behavior and data grouped together.</li>
                        <li>Focuses on modeling real-world entities.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <p className="text-sm text-slate-400">Next prompt</p>
                  <p className="mt-2 text-base text-slate-200">
                    Give me a very simple Python example showing the difference.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <p className="text-sm text-slate-400">Today</p>
                  <div className="mt-4 space-y-3">
                    {[
                      "3 new conversations",
                      "12 saved insights",
                      "2 shared workspaces",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 p-6">
                  <p className="text-sm text-slate-400">Suggested actions</p>
                  <div className="mt-4 space-y-3 text-sm text-slate-200">
                    <div className="rounded-2xl bg-white/5 px-4 py-3">
                      Draft a product brief
                    </div>
                    <div className="rounded-2xl bg-white/5 px-4 py-3">
                      Summarize a research paper
                    </div>
                    <div className="rounded-2xl bg-white/5 px-4 py-3">
                      Explore onboarding flows
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-center">
                <label className="flex-1">
                  <span className="sr-only">Message Perplexity</span>
                  <textarea
                    className="h-24 w-full resize-none rounded-2xl border border-white/10 bg-[#0B1220] px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/60 md:h-14"
                    placeholder="Message Perplexity..."
                  />
                </label>
                <button className="w-full rounded-2xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/30 transition hover:brightness-110 md:w-auto">
                  Send
                </button>
              </div>
              <p className="mt-3 text-xs text-slate-500">
                AI can make mistakes. Consider verifying critical information.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Dashboard;
