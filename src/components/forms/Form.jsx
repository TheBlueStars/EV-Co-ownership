// src/components/forms/Form.jsx
// Wrapper đơn giản cho form
export default function Form({ title, description, children, onSubmit }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white px-5 py-5 shadow-[0_18px_60px_rgba(15,23,42,.08)]">
      {title && (
        <header className="mb-4">
          <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
          {description && (
            <p className="mt-1 text-xs text-slate-500">{description}</p>
          )}
        </header>
      )}
      <form
        onSubmit={onSubmit}
        className="space-y-4"
      >
        {children}
      </form>
    </section>
  );
}
