// src/pages/admin/users/UserManagement.jsx
import { Users, ShieldCheck } from "lucide-react";

const users = [
  {
    name: "Nguyễn Văn A",
    email: "ownerA@example.com",
    role: "CO_OWNER",
    status: "ACTIVE",
  },
  {
    name: "Staff 01",
    email: "staff01@example.com",
    role: "STAFF",
    status: "ACTIVE",
  },
  {
    name: "Admin",
    email: "admin@example.com",
    role: "ADMIN",
    status: "ACTIVE",
  },
];

export default function UserManagement() {
  return (
    <section className="bg-slate-100">
      <div className="mx-auto max-w-[1100px] px-4 py-6 md:px-6">
        <div className="mb-4 flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-white">
            <Users className="h-4 w-4" />
          </span>
          <div>
            <h1 className="text-lg md:text-xl font-extrabold text-slate-900">
              Quản lý tài khoản & phân quyền
            </h1>
            <p className="text-xs text-slate-600">
              Admin quản lý người dùng, phân vai trò Co-owner / Staff / Admin.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <table className="min-w-full text-xs md:text-sm">
            <thead className="bg-slate-50 text-[11px] uppercase text-slate-500">
              <tr>
                <th className="px-3 py-3 text-left">Họ tên</th>
                <th className="px-3 py-3 text-left">Email</th>
                <th className="px-3 py-3 text-left">Vai trò</th>
                <th className="px-3 py-3 text-left">Trạng thái</th>
                <th className="px-3 py-3 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u, idx) => (
                <tr
                  key={u.email}
                  className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"}
                >
                  <td className="px-3 py-3 text-slate-900">{u.name}</td>
                  <td className="px-3 py-3 text-slate-700">{u.email}</td>
                  <td className="px-3 py-3 text-slate-700">{u.role}</td>
                  <td className="px-3 py-3">
                    <span className="inline-flex rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-700">
                      {u.status}
                    </span>
                  </td>
                  <td className="px-3 py-3 text-right">
                    <button className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-medium text-slate-800 hover:bg-slate-50">
                      <ShieldCheck className="mr-1 h-3.5 w-3.5 inline" />
                      Đổi vai trò
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-3 text-xs text-slate-500">
          Khi có backend, có thể thêm search, filter theo role, lock/unlock tài
          khoản.
        </p>
      </div>
    </section>
  );
}
