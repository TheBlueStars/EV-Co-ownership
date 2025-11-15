// src/components/forms/Select.jsx
export default function Select({
  label,
  error,
  helperText,
  children,
  className = "",
  ...props
}) {
  return (
    <label className={`block text-sm ${className}`}>
      {label && (
        <div className="mb-1 text-xs font-medium text-slate-700">
          {label}
        </div>
      )}
      <select
        className={`w-full rounded-xl border px-3 py-2 text-sm outline-none transition
        border-slate-200 bg-slate-50 focus:border-slate-900 focus:bg-white
        ${error ? "border-rose-400 bg-rose-50" : ""}`}
        {...props}
      >
        {children}
      </select>
      {(error || helperText) && (
        <div
          className={`mt-1 text-[11px] ${
            error ? "text-rose-600" : "text-slate-500"
          }`}
        >
          {error || helperText}
        </div>
      )}
    </label>
  );
}
