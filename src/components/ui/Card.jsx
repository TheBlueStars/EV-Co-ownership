// src/components/ui/Card.jsx
export default function Card({ title, subtitle, extra, children, className = "" }) {
  return (
    <section
      className={`rounded-3xl border border-slate-200 bg-white p-4 shadow-[0_12px_40px_rgba(15,23,42,.08)] ${className}`}
    >
      {(title || extra || subtitle) && (
        <header className="mb-3 flex items-start justify-between gap-2">
          <div>
            {title && (
              <h3 className="text-sm font-semibold text-slate-900">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="mt-0.5 text-xs text-slate-500">{subtitle}</p>
            )}
          </div>
          {extra && <div className="shrink-0">{extra}</div>}
        </header>
      )}
      {children}
    </section>
  );
}
