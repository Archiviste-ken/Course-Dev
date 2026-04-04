const percentFromScore = (score) =>
  `${Math.max(0, Math.min(100, score * 10))}%`;

function JudgePanel({ judge, winner }) {
  const winnerLabel =
    winner === 1 ? "Solution 1" : winner === 2 ? "Solution 2" : "Tie";

  return (
    <section className="panel-surface mt-5 rounded-2xl p-4 md:p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border-soft)] pb-3">
        <div>
          <p className="text-xs uppercase tracking-[0.12em] text-[var(--text-muted)]">
            Judge Decision
          </p>
          <h3 className="font-display text-lg font-semibold text-[var(--text-primary)]">
            {winnerLabel}
          </h3>
        </div>
        <span className="rounded-full border border-[color-mix(in_srgb,var(--accent-main)_52%,transparent)] bg-[color-mix(in_srgb,var(--accent-main)_20%,transparent)] px-3 py-1 text-xs font-semibold text-[var(--text-primary)]">
          Final Choice
        </span>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div>
          <div className="mb-1 flex items-center justify-between text-sm">
            <span className="text-[var(--text-secondary)]">Solution 1</span>
            <span className="font-semibold text-[var(--text-primary)]">
              {judge.solution_1_score}/10
            </span>
          </div>
          <div className="score-track">
            <div
              className="score-fill"
              style={{
                "--score-value": percentFromScore(judge.solution_1_score),
              }}
            />
          </div>
        </div>

        <div>
          <div className="mb-1 flex items-center justify-between text-sm">
            <span className="text-[var(--text-secondary)]">Solution 2</span>
            <span className="font-semibold text-[var(--text-primary)]">
              {judge.solution_2_score}/10
            </span>
          </div>
          <div className="score-track">
            <div
              className="score-fill"
              style={{
                "--score-value": percentFromScore(judge.solution_2_score),
              }}
            />
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <div className="rounded-xl border border-[var(--border-soft)] bg-[color-mix(in_srgb,var(--surface-overlay)_72%,transparent)] p-3 text-sm leading-relaxed text-[var(--text-secondary)]">
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--text-muted)]">
            Solution 1 Reasoning
          </p>
          <p>{judge.solution_1_reasoning}</p>
        </div>
        <div className="rounded-xl border border-[var(--border-soft)] bg-[color-mix(in_srgb,var(--surface-overlay)_72%,transparent)] p-3 text-sm leading-relaxed text-[var(--text-secondary)]">
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--text-muted)]">
            Solution 2 Reasoning
          </p>
          <p>{judge.solution_2_reasoning}</p>
        </div>
      </div>
    </section>
  );
}

export default JudgePanel;
