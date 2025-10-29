import React from "react";

export default function FormModal({
  title,
  open,
  onClose,
  onSubmit,
  children,
  submitText = "Lưu",
}) {
  if (!open) return null;
  const submit = (e) => { e.preventDefault(); onSubmit?.(e); };

  return (
    <div className="modal-overlay">
      <form className="modal" onSubmit={submit}>
        <h3 style={{ marginTop: 0 }}>{title}</h3>
        <div style={{ display: "grid", gap: 10 }}>{children}</div>
        <div className="modal-actions">
          <button type="button" className="btn" onClick={onClose}>Hủy</button>
          <button type="submit" className="btn btn-primary">{submitText}</button>
        </div>
      </form>
    </div>
  );
}