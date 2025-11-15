import { useEffect, useState } from "react";
import { Bell, Check } from "lucide-react";
import { listNotifications } from "../../../services/notifyService";

export default function Notifications() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await listNotifications(); // [{id,title,desc,read,createdAt}]
        setItems(res?.data ?? [
          { id: 1, title: "Lịch mới", desc: "Bạn đã đặt xe 19:00-21:00", read: false, createdAt: "Hôm nay" },
          { id: 2, title: "Chia phí", desc: "Hoá đơn tháng 11 đã phát hành", read: true, createdAt: "Hôm qua" },
        ]);
      } catch {
        setItems([
          { id: 1, title: "Lịch mới", desc: "Bạn đã đặt xe 19:00-21:00", read: false, createdAt: "Hôm nay" },
          { id: 2, title: "Chia phí", desc: "Hoá đơn tháng 11 đã phát hành", read: true, createdAt: "Hôm qua" },
        ]);
      }
    })();
  }, []);

  const markRead = (id) => setItems(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));

  return (
    <section>
      <h1 className="mb-4 text-2xl font-bold text-slate-900">Thông báo</h1>

      <div className="divide-y rounded-2xl border border-slate-200 bg-white">
        {items.map(n => (
          <div key={n.id} className="flex items-start gap-3 p-4">
            <div className="rounded-xl bg-slate-50 p-2">
              <Bell className={`h-5 w-5 ${n.read ? "text-slate-400" : "text-sky-600"}`} />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div className="font-medium text-slate-900">{n.title}</div>
                <div className="text-xs text-slate-500">{n.createdAt}</div>
              </div>
              <div className="mt-1 text-sm text-slate-600">{n.desc}</div>
            </div>
            {!n.read && (
              <button onClick={() => markRead(n.id)} className="rounded-xl border border-slate-200 px-3 py-1.5 text-sm">
                <Check className="mr-1 inline h-4 w-4" /> Đã đọc
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
