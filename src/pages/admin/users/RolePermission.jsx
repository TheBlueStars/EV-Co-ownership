// src/pages/admin/users/RolePermission.jsx
import { ShieldCheck, Settings } from "lucide-react";

const permissions = [
  { module: "Đặt lịch & booking", coOwner: "Có", staff: "Có", admin: "Có" },
  { module: "Quản lý chi phí", coOwner: "Có", staff: "Có", admin: "Có" },
  { module: "Quản lý hợp đồng", coOwner: "Chỉ xem", staff: "Không", admin: "Toàn quyền" },
  { module: "Cấu hình hệ thống", coOwner: "Không", staff: "Không", admin: "Toàn quyền" },
];

export default function RolePermission() {
  return (
    <section className="bg-slate-100">
      <div className="mx-auto max-w-[900px] px-4 py-6 md:px-6">
        <div className="mb-4 flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-white">
            <ShieldCheck className="h-4 w-4" />
          </span>
          <div>
            <h1 className="text-lg md:text-xl font-extrabold text-slate-900">
              Ma trận phân quyền vai trò
            </h1>
            <p className="text-xs text-slate-600">
              Định nghĩa quyền cho Co-owner, Staff và Admin trên từng module.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <table className="min-w-full text-xs md:text-sm">
            <thead className="bg-slate-50 text-[11px] uppercase text-slate-500">
              <tr>
                <th className="px-3 py-3 text-left">Module</th>
                <th className="px-3 py-3 text-left">Co-owner</th>
                <th className="px-3 py-3 text-left">Staff</th>
                <th className="px-3 py-3 text-left">Admin</th>
              </tr>
            </thead>
            <tbody>
              {permissions.map((p, idx) => (
                <tr
                  key={p.module}
                  className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"}
                >
                  <td className="px-3 py-3 text-slate-900">{p.module}</td>
                  <td className="px-3 py-3 text-slate-700">{p.coOwner}</td>
                  <td className="px-3 py-3 text-slate-700">{p.staff}</td>
                  <td className="px-3 py-3 text-slate-700">{p.admin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button className="mt-3 inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-800 hover:bg-slate-50">
          <Settings className="h-3.5 w-3.5" />
          Chỉnh sửa cấu hình phân quyền (mock)
        </button>
      </div>
    </section>
  );
}
