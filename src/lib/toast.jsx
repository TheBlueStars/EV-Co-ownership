import React, { createContext, useContext, useRef, useState } from "react";

/** mặc định là no-op để không bao giờ null */
const ToastCtx = createContext({ push: () => {} });
export const useToast = () => useContext(ToastCtx);

export function ToastProvider({ children }) {
  const [items, setItems] = useState([]);
  const seq = useRef(0);

  const push = (msg, type = "success", ttl = 2500) => {
    const t = { id: seq.current++, msg, type };
    setItems(v => [...v, t]);
    setTimeout(() => setItems(v => v.filter(x => x.id !== t.id)), ttl);
  };

  return (
    <ToastCtx.Provider value={{ push }}>
      {children}
      <div id="toast">
        {items.map(t => (
          <div key={t.id} className={`toast ${t.type} show`}>{t.msg}</div>
        ))}
      </div>
    </ToastCtx.Provider>
  );
}