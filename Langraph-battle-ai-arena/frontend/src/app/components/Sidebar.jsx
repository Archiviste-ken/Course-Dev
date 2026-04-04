const navIcons = {
  Arena: (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4">
      <rect
        x="3"
        y="4"
        width="14"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M7 8h6M7 12h4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  History: (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4">
      <circle cx="10" cy="10" r="6.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M10 7v3l2 1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  Leaderboard: (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4">
      <path
        d="M4 16v-6m6 6V6m6 10V9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <rect
        x="2.5"
        y="3"
        width="15"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  ),
  Settings: (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4">
      <path
        d="M10 5.25a4.75 4.75 0 100 9.5 4.75 4.75 0 000-9.5z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M10 2.75v1.5m0 11.5v1.5M4.5 5l1.05 1.05m8.9 8.9L15.5 16M2.75 10h1.5m11.5 0h1.5M4.5 15l1.05-1.05m8.9-8.9L15.5 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
};

function Sidebar({
  activeSection,
  isOpen,
  items,
  onClose,
  onNewArena,
  onSelect,
}) {
  return (
    <>
      {isOpen ? (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-[color-mix(in_srgb,#03050d_65%,transparent)] lg:hidden"
          onClick={onClose}
          aria-label="Close sidebar overlay"
        />
      ) : null}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[17rem] flex-col border-r border-[var(--border-soft)] bg-[var(--surface-sidebar)]/96 px-5 py-6 shadow-[0_16px_42px_-28px_color-mix(in_srgb,var(--accent-main)_35%,black)] backdrop-blur transition-transform duration-300 dark:bg-[var(--surface-sidebar)]/93 ${
          isOpen ? "translate-x-0" : "-translate-x-[105%]"
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl border border-[var(--border-soft)] bg-[color-mix(in_srgb,var(--accent-main)_35%,transparent)] text-xs font-bold uppercase tracking-[0.08em] text-[var(--text-primary)]">
              AI
            </div>
            <div>
              <p className="font-display text-base font-semibold text-[var(--text-primary)]">
                The Arbiter
              </p>
              <p className="text-xs tracking-[0.1em] text-[var(--text-muted)]">
                Elite Rank
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="grid h-8 w-8 place-items-center rounded-lg border border-[var(--border-soft)] text-[var(--text-muted)] transition hover:text-[var(--text-primary)] lg:hidden"
            aria-label="Close sidebar"
          >
            x
          </button>
        </div>

        <button
          type="button"
          onClick={onNewArena}
          className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[color-mix(in_srgb,var(--accent-main)_45%,transparent)] bg-[linear-gradient(135deg,color-mix(in_srgb,var(--accent-main)_72%,transparent),color-mix(in_srgb,var(--accent-soft)_70%,transparent))] px-4 py-2.5 text-sm font-semibold text-white transition hover:brightness-110 active:translate-y-[1px]"
        >
          <span className="text-base leading-none">+</span>
          New Arena
        </button>

        <nav className="mt-8 space-y-1.5">
          {items.map((item) => {
            const isActive = activeSection === item;

            return (
              <button
                key={item}
                type="button"
                onClick={() => onSelect(item)}
                className={`group flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                  isActive
                    ? "bg-[linear-gradient(120deg,color-mix(in_srgb,var(--accent-main)_24%,transparent),color-mix(in_srgb,var(--accent-vivid)_16%,transparent))] text-[var(--text-primary)]"
                    : "text-[var(--text-muted)] hover:bg-[color-mix(in_srgb,var(--surface-overlay)_72%,transparent)] hover:text-[var(--text-primary)]"
                }`}
              >
                <span
                  className={`h-5 w-0.5 rounded-full transition ${
                    isActive
                      ? "bg-[var(--accent-vivid)] opacity-100"
                      : "bg-transparent opacity-0"
                  }`}
                  aria-hidden="true"
                />
                <span className="text-current">{navIcons[item]}</span>
                <span>{item}</span>
              </button>
            );
          })}
        </nav>

        <div className="mt-auto rounded-2xl border border-[var(--border-soft)] bg-[color-mix(in_srgb,var(--surface-overlay)_75%,transparent)] p-3">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-full bg-[color-mix(in_srgb,var(--accent-main)_35%,transparent)] text-xs font-bold text-[var(--text-primary)]">
              JA
            </div>
            <div>
              <p className="text-sm font-semibold text-[var(--text-primary)]">
                Chief Justice
              </p>
              <p className="text-xs text-[var(--text-muted)]">Admin Level 4</p>
            </div>
          </div>
          <button
            type="button"
            className="mt-3 w-full rounded-lg border border-[var(--border-soft)] bg-[var(--surface-card)] px-3 py-1.5 text-xs font-semibold text-[var(--text-primary)] transition hover:border-[color-mix(in_srgb,var(--accent-main)_45%,transparent)]"
          >
            View Profile
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
