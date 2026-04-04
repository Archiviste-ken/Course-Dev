import ThemeToggle from "./ThemeToggle.jsx";

function Navbar({
  sectionName,
  themeMode,
  resolvedTheme,
  isSidebarOpen,
  onMenuToggle,
  onThemeChange,
}) {
  return (
    <header className="z-20 mx-auto flex w-full max-w-[1100px] items-center justify-between rounded-2xl border border-[var(--border-soft)] bg-[color-mix(in_srgb,var(--surface-overlay)_82%,transparent)] px-3.5 py-3 shadow-[0_18px_30px_-28px_color-mix(in_srgb,var(--accent-main)_58%,transparent)] backdrop-blur dark:bg-[color-mix(in_srgb,var(--surface-overlay)_72%,transparent)] sm:px-4 lg:px-5">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenuToggle}
          className="grid h-9 w-9 place-items-center rounded-lg border border-[var(--border-soft)] bg-[color-mix(in_srgb,var(--surface-card)_68%,transparent)] text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]"
          aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
        >
          <span className="sr-only">
            {isSidebarOpen ? "Close sidebar" : "Open sidebar"}
          </span>
          <span className="hamburger-lines" aria-hidden="true" />
        </button>

        <div>
          <p className="text-xs uppercase tracking-[0.12em] text-[var(--text-muted)]">
            Control Surface
          </p>
          <h1 className="font-display text-lg font-semibold text-[var(--text-primary)]">
            {sectionName}
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-3">
       
        <ThemeToggle
          themeMode={themeMode}
          resolvedTheme={resolvedTheme}
          onThemeChange={onThemeChange}
        />
        <div className="grid h-9 w-9 place-items-center rounded-full border border-[var(--border-soft)] bg-[color-mix(in_srgb,var(--surface-card)_74%,transparent)] text-xs font-semibold text-[var(--text-primary)]">
          JA
        </div>
      </div>
    </header>
  );
}

export default Navbar;
