const statCards = [
  { label: "Arenas Run", value: "42", tone: "hero-stat-cyan" },
  { label: "Avg Confidence", value: "92%", tone: "hero-stat-indigo" },
  { label: "Judge Latency", value: "1.3s", tone: "hero-stat-emerald" },
];

function ArenaHero({ totalArenas }) {
  return (
    <section className="arena-hero panel-surface mb-6 overflow-hidden rounded-3xl p-5 md:p-6">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="text-xs uppercase tracking-[0.16em] text-[var(--text-muted)]">
            Arena Protocol
          </p>
          <h2 className="mt-2 font-display text-2xl font-semibold leading-tight text-[var(--text-primary)] md:text-[2rem]">
            Ship decisions faster with structured dual-solution judging.
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-[var(--text-secondary)] md:text-base">
            Turn one prompt into two competing solutions, then inspect
            transparent scores and reasoning designed for production engineering
            workflows.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="hero-pill">S1 vs S2</span>
            <span className="hero-pill">Markdown + code aware</span>
            <span className="hero-pill">Transparent verdict</span>
          </div>
        </div>

        <div className="hero-duel">
          <div className="hero-duel-node hero-duel-left">
            <span className="hero-duel-title">S1</span>
            <span className="hero-duel-sub">Solution 1</span>
          </div>
          <div className="hero-duel-core" aria-hidden="true" />
          <div className="hero-duel-node hero-duel-right">
            <span className="hero-duel-title">S2</span>
            <span className="hero-duel-sub">Solution 2</span>
          </div>

          <div className="hero-duel-caption">
            <p className="font-display text-base font-semibold text-[var(--text-primary)]">
              Arena Ready
            </p>
            <p className="text-xs text-[var(--text-muted)]">
              Balanced comparison and clear judging path
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {statCards.map((stat) => (
          <div key={stat.label} className={`hero-stat-card ${stat.tone}`}>
            <p className="text-xs uppercase tracking-[0.08em] text-[var(--text-muted)]">
              {stat.label}
            </p>
            <p className="mt-1 text-xl font-semibold text-[var(--text-primary)]">
              {stat.label === "Arenas Run" ? totalArenas : stat.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ArenaHero;
