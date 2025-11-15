// src/components/ui/Filters.jsx
export default function Filters({ children, className = "" }) {
  return (
    <div
      className={`mb-3 flex flex-wrap items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2 text-xs ${className}`}
    >
      {children}
    </div>
  );
}
