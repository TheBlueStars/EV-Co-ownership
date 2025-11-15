// src/components/ui/Modal.jsx
import { useEffect } from "react";

export default function Modal({ open, onClose, title, children }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4"
      onClick={() => onClose?.()}
    >
      <div
        className="max-h-[90vh] w-full max-w-lg overflow-auto rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_20px_80px_rgba(15,23,42,.7)]"
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <header className="mb-3 flex items-center justify-between gap-2">
            <h2 className="text-sm font-semibold text-slate-900">{title}</h2>
            <button
              className="rounded-full px-2 text-xs text-slate-500 hover:bg-slate-100"
              onClick={() => onClose?.()}
            >
              ✕
            </button>
          </header>
        )}
        {children}
      </div>
    </div>
  );
}
