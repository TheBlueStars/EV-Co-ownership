// src/components/forms/Upload.jsx
export default function Upload({
  label,
  error,
  helperText,
  onFileChange,
  className = "",
  ...props
}) {
  const handleChange = (e) => {
    const file = e.target.files?.[0];
    onFileChange?.(file);
  };

  return (
    <label className={`block text-sm ${className}`}>
      {label && (
        <div className="mb-1 text-xs font-medium text-slate-700">
          {label}
        </div>
      )}
      <div
        className={`flex items-center justify-between rounded-xl border px-3 py-2 text-sm
        border-dashed border-slate-300 bg-slate-50 hover:border-slate-500 cursor-pointer
        ${error ? "border-rose-400 bg-rose-50" : ""}`}
      >
        <span className="text-xs text-slate-600">
          Chọn file từ máy của bạn
        </span>
        <span className="rounded-lg bg-slate-900 px-3 py-1 text-[11px] font-medium text-white">
          Tải lên
        </span>
        <input
          type="file"
          className="hidden"
          onChange={handleChange}
          {...props}
        />
      </div>
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
