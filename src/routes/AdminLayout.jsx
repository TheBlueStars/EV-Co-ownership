// src/routes/AdminLayout.jsx
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const getUser = () => {
  try {
    const raw = localStorage.getItem("user");
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

export default function AdminLayout() {
  const navigate = useNavigate();
  const user = getUser();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/dangnhap", { replace: true });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,.55),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(15,23,42,1),_rgba(15,23,42,1))]" />
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* HEADER */}
        <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                Admin console
              </div>
              <div className="text-sm font-semibold text-slate-50">
                Cấu hình &amp; giám sát EV Co-ownership
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs">
              {user && (
                <div className="text-right">
                  <div className="font-semibold text-slate-50">
                    {user.name || "Admin"}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {user.email || "admin@gmail.com"}
                  </div>
                </div>
              )}
              <span className="rounded-full bg-indigo-400/10 px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-indigo-200 ring-1 ring-indigo-300/40">
                Admin
              </span>
              <button
                onClick={handleLogout}
                className="rounded-xl border border-slate-700 bg-slate-900 px-3 py-1 text-[11px] font-medium text-slate-100 hover:border-slate-500 hover:bg-slate-800"
              >
                Đăng xuất
              </button>
            </div>
          </div>
        </header>

        {/* BODY */}
        <div className="mx-auto flex w-full max-w-6xl flex-1 gap-5 px-4 py-5">
          {/* SIDEBAR */}
          <aside className="hidden w-[260px] shrink-0 md:block">
            <div className="sticky top-24 rounded-3xl border border-slate-800 bg-slate-900/70 p-3 shadow-[0_24px_80px_rgba(15,23,42,.95)] backdrop-blur">
              <div className="mb-3">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Điều hướng
                </div>
              </div>

              <nav className="space-y-1 text-sm">
                <SideLink to="/admin" label="Tổng quan & Dashboard" />

                <SectionLabel label="Người dùng & quyền" />
                <SideLink to="/admin/users" label="Tài khoản" />
                <SideLink to="/admin/users/roles" label="Phân quyền" />

                <SectionLabel label="Đội xe & bảo dưỡng" />
                <SideLink to="/admin/vehicles" label="Danh mục xe" />
                <SideLink
                  to="/admin/vehicles/maintenance"
                  label="Kế hoạch bảo dưỡng"
                />

                <SectionLabel label="Tài chính & quỹ chung" />
                <SideLink
                  to="/admin/finance/rules"
                  label="Quy tắc chia chi phí"
                />
                <SideLink to="/admin/finance/fund" label="Cấu hình quỹ" />
                <SideLink
                  to="/admin/finance/settlement"
                  label="Đối soát & bù trừ"
                />

                <SectionLabel label="Hợp đồng & biểu quyết" />
                <SideLink
                  to="/admin/contracts/templates"
                  label="Template hợp đồng"
                />
                <SideLink
                  to="/admin/contracts/versions"
                  label="Phiên bản hợp đồng"
                />
                <SideLink to="/admin/voting" label="Danh sách biểu quyết" />
                <SideLink
                  to="/admin/voting/create"
                  label="Tạo đề xuất / biểu quyết"
                />

                <SectionLabel label="Báo cáo & hệ thống" />
                <SideLink
                  to="/admin/reports/analytics"
                  label="Thống kê & biểu đồ"
                />
                <SideLink to="/admin/reports/export" label="Xuất báo cáo" />
                <SideLink
                  to="/admin/system/settings"
                  label="Cấu hình hệ thống"
                />
                <SideLink
                  to="/admin/system/audit-logs"
                  label="Audit logs / lịch sử"
                />
              </nav>

              <div className="mt-4 rounded-2xl bg-slate-800/80 p-3 text-[11px] text-slate-300">
                <div className="mb-1 font-semibold text-slate-100">
                  📊 Vai trò Admin
                </div>
                <p>
                  Thiết lập quy tắc chia chi phí, cấu trúc quyền, đội xe và
                  giám sát hoạt động toàn hệ thống EV Co-ownership.
                </p>
              </div>
            </div>
          </aside>

          {/* CONTENT */}
          <section className="min-w-0 flex-1">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <div>
                <h1 className="text-sm font-semibold text-slate-50">
                  Bảng điều khiển Admin
                </h1>
                <p className="text-[11px] text-slate-400">
                  Tổng quan hệ thống, người dùng, đội xe và tài chính.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-4 shadow-[0_24px_80px_rgba(15,23,42,.95)]">
              <Outlet />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function SideLink({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          "flex items-center justify-between rounded-2xl px-3 py-2 text-xs transition-all",
          isActive
            ? "bg-slate-50 text-slate-950 shadow-[0_20px_60px_rgba(148,163,184,.9)]"
            : "text-slate-200 hover:bg-slate-800/80 hover:text-white",
        ].join(" ")
      }
    >
      <span className="truncate">{label}</span>
      <span className="ml-2 h-1.5 w-1.5 rounded-full bg-indigo-400" />
    </NavLink>
  );
}

function SectionLabel({ label }) {
  return (
    <div className="mt-3 mb-1 px-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
      {label}
    </div>
  );
}
