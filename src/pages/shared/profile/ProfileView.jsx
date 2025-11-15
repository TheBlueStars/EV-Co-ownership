import { useEffect, useState } from "react";
import { me } from "../../../services/authService";

export default function ProfileView() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await me();
        setUser(res?.data ?? { name: "Nguyễn Công Trường", email: "you@example.com", phone: "0900 000 000", role: "CO_OWNER" });
      } catch {
        setUser({ name: "Nguyễn Công Trường", email: "you@example.com", phone: "0900 000 000", role: "CO_OWNER" });
      }
    })();
  }, []);

  if (!user) return null;

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">Hồ sơ cá nhân</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <div className="text-sm text-slate-500">Họ tên</div>
          <div className="text-lg font-semibold">{user.name}</div>
          <div className="mt-4 text-sm text-slate-500">Email</div>
          <div className="text-lg font-semibold">{user.email}</div>
          <div className="mt-4 text-sm text-slate-500">Số điện thoại</div>
          <div className="text-lg font-semibold">{user.phone}</div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <div className="text-sm text-slate-500">Vai trò</div>
          <div className="text-lg font-semibold">{user.role}</div>
          <div className="mt-4 text-sm text-slate-500">Trạng thái</div>
          <div className="text-lg font-semibold text-emerald-600">Đang hoạt động</div>
        </div>
      </div>
    </section>
  );
}
