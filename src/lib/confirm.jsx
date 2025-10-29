import React, { useState } from "react";

export function useConfirm(){
  const [state, set] = useState(null); // { text, resolve }
  const confirm = (text) => new Promise(resolve => set({ text, resolve }));
  const Modal = state ? (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Xác nhận</h3>
        <p>{state.text}</p>
        <div className="modal-actions">
          <button className="btn" onClick={()=>{state.resolve(false);set(null);}}>Hủy</button>
          <button className="btn btn-primary" onClick={()=>{state.resolve(true);set(null);}}>Đồng ý</button>
        </div>
      </div>
    </div>
  ) : null;
  return { confirm, Modal };
}
