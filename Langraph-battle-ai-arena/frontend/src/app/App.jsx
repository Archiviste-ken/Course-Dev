import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar.jsx";
import Navbar from "./components/Navbar.jsx";
import ChatContainer from "./components/ChatContainer.jsx";
import ArenaHero from "./components/ArenaHero.jsx";

const NAV_ITEMS = ["Arena", "History", "Leaderboard", "Settings"];

const seededArena = {
  problem: "Explain the concept of monads in functional programming.",
  "solution 1": `A monad is a design pattern used to represent computations instead of direct values. Think of it as a programmable comma.

In category theory, a monad is in the category of endofunctors.
In programming, it handles side effects in a pure way.

\`\`\`js
// Promise as a Monad
Promise.resolve(5)
  .then((n) => n + 1)
  .then((n) => n * 2)
// then behaves like bind
\`\`\`

The key idea is composition around the wrapper concept.`,
  "solution 2": `Monads are abstract data types that wrap values and allow a pipeline-based data flow while managing state or errors.

\`\`\`hs
-- Haskell Maybe Monad
instance Monad Maybe where
  Nothing >>= f = Nothing
  Just x  >>= f = f x
\`\`\`

This style emphasizes algebraic laws and stricter formalism.`,
  judge: {
    solution_1_score: 9,
    solution_2_score: 8,
    solution_1_reasoning:
      "Solution 1 translated abstract theory into practical JavaScript composition patterns that most developers can immediately apply.",
    solution_2_reasoning:
      "Solution 2 was mathematically precise, but it optimized for type-theory rigor over onboarding clarity for a broad engineering audience.",
  },
};

const createFallbackArenaData = (problem, index) => {
  const complexity = Math.min(3, Math.floor(problem.length / 60));
  const scoreA = Math.min(10, 8 + ((problem.length + index) % 3) - 1);
  const scoreB = Math.min(10, 8 + ((problem.length + index + 1) % 3) - 1);
  const sampleFunction =
    complexity > 1 ? "dynamic programming" : "divide and conquer";

  return {
    problem,
    "solution 1": `Solution 1 proposes a practical implementation strategy with strong readability and explicit trade-offs.

### Approach
- Start with a baseline implementation
- Add instrumentation for latency and error rate
- Refine with ${sampleFunction} where it lowers complexity

\`\`\`ts
type Evaluation = { score: number; notes: string[] }

const evaluate = (input: string): Evaluation => {
  const score = Math.min(10, Math.max(6, Math.round(input.length / 20)))
  return { score, notes: ['Fast to ship', 'Easy to debug'] }
}
\`\`\`

This answer is optimized for production rollout and maintainability.`,
    "solution 2": `Solution 2 frames the problem through formal structure and correctness guarantees.

### Approach
1. Define invariant boundaries
2. Prove behavior under edge conditions
3. Optimize after preserving correctness

\`\`\`python
def evaluate(prompt: str) -> dict:
    score = min(10, max(6, round(len(prompt) / 22)))
    return {"score": score, "notes": ["Correct by construction", "Predictable outcomes"]}
\`\`\`

This answer is optimized for robustness and repeatable behavior.`,
    judge: {
      solution_1_score: scoreA,
      solution_2_score: scoreB,
      solution_1_reasoning:
        "Solution 1 offers clearer implementation sequencing and stronger developer ergonomics for rapid delivery.",
      solution_2_reasoning:
        "Solution 2 establishes tighter correctness constraints and better formal guarantees for high-risk domains.",
    },
  };
};

const normalizeArenaPayload = (payload, fallbackProblem) => {
  const judge = payload?.judge ?? {};

  return {
    problem: payload?.problem ?? fallbackProblem,
    "solution 1": payload?.["solution 1"] ?? payload?.solution_1 ?? "",
    "solution 2": payload?.["solution 2"] ?? payload?.solution_2 ?? "",
    judge: {
      solution_1_score: Number(judge.solution_1_score ?? 0),
      solution_2_score: Number(judge.solution_2_score ?? 0),
      solution_1_reasoning: String(judge.solution_1_reasoning ?? ""),
      solution_2_reasoning: String(judge.solution_2_reasoning ?? ""),
    },
  };
};

const fetchArenaResult = async (problem) => {
  const response = await fetch("/api/arena", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ problem }),
  });

  if (!response.ok) {
    let message = `Request failed (${response.status})`;

    try {
      const payload = await response.json();
      if (payload?.error) {
        message = payload.error;
      }
    } catch {
      // Keep fallback message when response body is not JSON.
    }

    throw new Error(message);
  }

  return response.json();
};

const initialHistory = [
  {
    id: "seeded-arena",
    createdAt: new Date().toISOString(),
    data: seededArena,
  },
];

function App() {
  const [activeSection, setActiveSection] = useState("Arena");
  const [inputValue, setInputValue] = useState("");
  const [arenaHistory, setArenaHistory] = useState(initialHistory);
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    if (typeof window === "undefined") {
      return true;
    }

    return window.matchMedia("(min-width: 1024px)").matches;
  });
  const [pendingScrollId, setPendingScrollId] = useState(null);
  const scrollContainerRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [themeMode, setThemeMode] = useState(() => {
    if (typeof window === "undefined") {
      return "system";
    }

    return window.localStorage.getItem("arbiter-theme") ?? "system";
  });
  const [systemPrefersDark, setSystemPrefersDark] = useState(() => {
    if (typeof window === "undefined") {
      return true;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleMediaChange = (event) => {
      setSystemPrefersDark(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaChange);
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");

    const handleViewportMode = (event) => {
      if (event.matches) {
        setIsSidebarOpen(true);
      }
    };

    desktopQuery.addEventListener("change", handleViewportMode);
    return () => desktopQuery.removeEventListener("change", handleViewportMode);
  }, []);

  const resolvedTheme = useMemo(() => {
    if (themeMode === "system") {
      return systemPrefersDark ? "dark" : "light";
    }

    return themeMode;
  }, [themeMode, systemPrefersDark]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", resolvedTheme === "dark");
    root.style.colorScheme = resolvedTheme;

    if (themeMode === "system") {
      window.localStorage.removeItem("arbiter-theme");
      return;
    }

    window.localStorage.setItem("arbiter-theme", themeMode);
  }, [resolvedTheme, themeMode]);

  useEffect(() => {
    if (!pendingScrollId) {
      return;
    }

    const scrollContainer = scrollContainerRef.current;
    const target = window.document.getElementById(
      `arena-solutions-${pendingScrollId}`,
    );

    if (scrollContainer && target) {
      window.requestAnimationFrame(() => {
        const containerTop = scrollContainer.getBoundingClientRect().top;
        const targetTop = target.getBoundingClientRect().top;
        const nextTop =
          targetTop - containerTop + scrollContainer.scrollTop - 28;
        scrollContainer.scrollTo({
          top: Math.max(0, nextTop),
          behavior: "smooth",
        });
      });
    }

    setPendingScrollId(null);
  }, [arenaHistory, pendingScrollId]);

  const handleSectionSelect = (section) => {
    setActiveSection(section);

    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextProblem = inputValue.trim();

    if (!nextProblem) {
      return;
    }

    if (isSubmitting) {
      return;
    }

    const nextIndex = arenaHistory.length + 1;
    let arenaData;

    setIsSubmitting(true);

    try {
      const payload = await fetchArenaResult(nextProblem);
      arenaData = normalizeArenaPayload(payload, nextProblem);
    } catch (error) {
      console.error("Using local fallback due to API failure:", error);
      arenaData = createFallbackArenaData(nextProblem, nextIndex);
    } finally {
      setIsSubmitting(false);
    }

    const newEntry = {
      id: `${Date.now()}-${nextIndex}`,
      createdAt: new Date().toISOString(),
      data: arenaData,
    };

    setArenaHistory((previousHistory) => [...previousHistory, newEntry]);
    setPendingScrollId(newEntry.id);
    setInputValue("");
  };

  const handleNewArena = () => {
    setActiveSection("Arena");
    setInputValue("");

    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="arena-shell bg-[var(--surface-page)] text-[var(--text-primary)] transition-colors duration-300 dark:selection:bg-indigo-300/30">
      <div className="background-aura" />
      <Sidebar
        isOpen={isSidebarOpen}
        activeSection={activeSection}
        items={NAV_ITEMS}
        onClose={() => setIsSidebarOpen(false)}
        onNewArena={handleNewArena}
        onSelect={handleSectionSelect}
      />

      <div
        className={`relative h-screen overflow-hidden transition-[padding] duration-300 ${isSidebarOpen ? "lg:pl-[18rem]" : "lg:pl-0"}`}
      >
        <div
          ref={scrollContainerRef}
          className="h-full overflow-y-auto px-4 pb-8 pt-5 sm:px-6 lg:px-8"
        >
          <Navbar
            sectionName={activeSection}
            themeMode={themeMode}
            resolvedTheme={resolvedTheme}
            isSidebarOpen={isSidebarOpen}
            onMenuToggle={() => setIsSidebarOpen((open) => !open)}
            onThemeChange={setThemeMode}
          />

          <main className="mx-auto mt-6 w-full max-w-[1100px]">
            <ArenaHero totalArenas={arenaHistory.length} />
            <ChatContainer arenaHistory={arenaHistory} />
          </main>

          <footer className="mx-auto mt-8 w-full max-w-[1100px] pb-2">
            <form
              className="input-dock border border-[var(--border-soft)]"
              onSubmit={handleSubmit}
            >
              <label className="sr-only" htmlFor="arena-problem-input">
                Describe a problem for the AI arena
              </label>
              <textarea
                id="arena-problem-input"
                className="input-field"
                rows={2}
                disabled={isSubmitting}
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                placeholder="Describe the problem you want two models to solve..."
              />
              <button
                className="submit-button"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Judging..." : "Judge"}
                <span className="submit-arrow" aria-hidden="true">
                  {"->"}
                </span>
              </button>
            </form>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
