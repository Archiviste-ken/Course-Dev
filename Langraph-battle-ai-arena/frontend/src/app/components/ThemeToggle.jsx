const options = [
  { id: "system", label: "Auto" },
  { id: "light", label: "Light" },
  { id: "dark", label: "Dark" },
];

function ThemeToggle({ themeMode, resolvedTheme, onThemeChange }) {
  return (
    <div className="flex items-center gap-1.5 rounded-xl border border-[var(--border-soft)] bg-[color-mix(in_srgb,var(--surface-card)_76%,transparent)] p-1 dark:bg-[color-mix(in_srgb,var(--surface-overlay)_65%,transparent)]">
      {options.map((option) => {
        const selected = themeMode === option.id;

        return (
          <button
            key={option.id}
            type="button"
            onClick={() => onThemeChange(option.id)}
            className={`rounded-lg px-2.5 py-1 text-xs font-semibold tracking-[0.01em] transition-all duration-200 ${
              selected
                ? "bg-[linear-gradient(130deg,color-mix(in_srgb,var(--accent-main)_45%,transparent),color-mix(in_srgb,var(--accent-vivid)_35%,transparent))] text-[var(--text-primary)] shadow-[0_8px_18px_-12px_color-mix(in_srgb,var(--accent-main)_65%,transparent)]"
                : "text-[var(--text-muted)] hover:bg-[color-mix(in_srgb,var(--surface-overlay)_70%,transparent)] hover:text-[var(--text-primary)]"
            }`}
          >
            {option.label}
          </button>
        );
      })}
      <span className="sr-only">Current theme: {resolvedTheme}</span>
    </div>
  );
}

export default ThemeToggle;
