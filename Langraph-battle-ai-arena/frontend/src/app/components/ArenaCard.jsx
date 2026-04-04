import SolutionCard from "./SolutionCard.jsx";
import JudgePanel from "./JudgePanel.jsx";

function ArenaCard({ entry, index, animationDelay }) {
  const { data } = entry;
  const score1 = data.judge.solution_1_score;
  const score2 = data.judge.solution_2_score;
  const winner = score1 === score2 ? null : score1 > score2 ? 1 : 2;

  return (
    <article
      id={`arena-${entry.id}`}
      className="arena-entry panel-surface rounded-3xl p-5 lg:p-6"
      style={{ animationDelay }}
    >
      <div className="mb-5 border-b border-[var(--border-soft)] pb-5">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-xs uppercase tracking-[0.12em] text-[var(--text-muted)]">
            Arena #{String(index + 1).padStart(2, "0")}
          </p>
          <span className="rounded-full border border-[var(--border-soft)] bg-[color-mix(in_srgb,var(--surface-overlay)_70%,transparent)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-[var(--text-muted)]">
            Side-by-side evaluation
          </span>
        </div>
        <h2 className="mt-2 font-display text-2xl font-semibold leading-tight text-[var(--text-primary)]">
          {data.problem}
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-[var(--text-muted)]">
          Two models produced independent responses. Compare quality,
          correctness, and implementation readiness before accepting a winner.
        </p>
      </div>

      <div
        id={`arena-solutions-${entry.id}`}
        className="grid gap-4 md:grid-cols-2"
      >
        <SolutionCard
          title="Solution 1"
          content={data["solution 1"]}
          isWinner={winner === 1}
        />
        <SolutionCard
          title="Solution 2"
          content={data["solution 2"]}
          isWinner={winner === 2}
        />
      </div>

      <JudgePanel judge={data.judge} winner={winner} />
    </article>
  );
}

export default ArenaCard;
