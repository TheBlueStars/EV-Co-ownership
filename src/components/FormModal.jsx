import React from "react";
export default function FormModal({ open, title, onClose, onSubmit, children, submitText="Lưu" }) {
  if (!open) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e)=>e.stopPropagation()}>
        <div className="section-title" style={{marginBottom:10}}>{title}</div>
        {children}
        <div className="modal-actions">
          <button className="btn" onClick={onClose}>Hủy</button>
          <button className="btn btn-primary" onClick={onSubmit}>{submitText}</button>
        </div>
      </div>
    </div>
  );
}
