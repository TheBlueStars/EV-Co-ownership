// src/pages/admin/system/AuditLogs.jsx
import { ScrollText } from "lucide-react";

const logs = [
  {
    time: "09/11/2025 10:15",
    actor: "admin@example.com",
    action: "Cập nhật phân quyền cho staff01@example.com",
  },
  {
    time: "08/11/2025 22:03",
    actor: "admin@example.com",
    action: "Thêm xe mới: VinFast VF8",
  },
];

export default function AuditLogs() {
  return (
    <section className="bg-slate-100">
      <div className="mx-auto max-w-[900px] px-4 py-6 md:px-6">
        <div className="mb-4 flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-white">
            <ScrollText className="h-4 w-4" />
          </span>
          <div>
            <h1 className="text-lg md:text-xl font-extrabold text-slate-900">
              Audit logs – Nhật ký hệ thống
            </h1>
            <p className="text-xs text-slate-600">
              Ghi lại các thao tác quan trọng của Admin để đảm bảo truy vết.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <table className="min-w-full text-xs md:text-sm">
            <thead className="bg-slate-50 text-[11px] uppercase text-slate-500">
              <tr>
                <th className="px-3 py-3 text-left">Thời gian</th>
                <th className="px-3 py-3 text-left">Tài khoản</th>
                <th className="px-3 py-3 text-left">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((l, idx) => (
                <tr
                  key={l.time + l.actor}
                  className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"}
                >
                  <td className="px-3 py-3 text-slate-700">{l.time}</td>
                  <td className="px-3 py-3 text-slate-700">{l.actor}</td>
                  <td className="px-3 py-3 text-slate-800">{l.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-3 text-xs text-slate-500">
          Sau này có thể thêm filter theo khoảng thời gian, loại hành động, user.
        </p>
      </div>
    </section>
  );
}
