import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function SolutionCard({ title, content, isWinner }) {
  return (
    <section
      className={`panel-surface solution-card relative overflow-hidden rounded-2xl p-4 md:p-5 ${isWinner ? "winner-glow" : ""}`}
    >
      <span className="solution-card-line" aria-hidden="true" />
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-full border border-[var(--border-soft)] bg-[color-mix(in_srgb,var(--surface-overlay)_82%,transparent)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--text-secondary)]">
          {title}
        </span>
        {isWinner ? (
          <span className="rounded-full border border-[color-mix(in_srgb,var(--accent-main)_52%,transparent)] bg-[color-mix(in_srgb,var(--accent-main)_20%,transparent)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--text-primary)]">
            Winner
          </span>
        ) : null}
      </div>

      <div className="mb-4 flex items-center gap-2 text-[11px] text-[var(--text-muted)]">
        <span className="rounded-md border border-[var(--border-soft)] bg-[color-mix(in_srgb,var(--surface-overlay)_70%,transparent)] px-2 py-1">
          Markdown
        </span>
        <span className="rounded-md border border-[var(--border-soft)] bg-[color-mix(in_srgb,var(--surface-overlay)_70%,transparent)] px-2 py-1">
          Code aware
        </span>
      </div>

      <div className="markdown-body">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({ inline, className, children, ...properties }) {
              if (inline) {
                return (
                  <code className={className} {...properties}>
                    {children}
                  </code>
                );
              }

              return (
                <pre>
                  <code className={className} {...properties}>
                    {children}
                  </code>
                </pre>
              );
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </section>
  );
}

export default SolutionCard;
