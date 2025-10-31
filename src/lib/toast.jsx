import React, { createContext, useContext, useRef, useState } from "react";
const ToastCtx = createContext(null);
export const useToast = () => useContext(ToastCtx) ?? { push: () => {} };

export function ToastHost() {
  const [items, set] = useState([]);
  const id = useRef(0);
  const push = (msg, type = "success") => {
    const tid = ++id.current;
    set((s) => [...s, { id: tid, msg, type }]);
    setTimeout(() => set((s) => s.filter((x) => x.id !== tid)), 2600);
  };
  return (
    <ToastCtx.Provider value={{ push }}>
      <div id="toast-container">
        {items.map((t) => (
          <div key={t.id} className={`toast ${t.type}`}>{t.msg}</div>
        ))}
      </div>
    </ToastCtx.Provider>
  );
}
