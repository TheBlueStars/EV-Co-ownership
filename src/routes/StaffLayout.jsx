// src/routes/StaffLayout.jsx
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const getUser = () => {
  try {
    const raw = localStorage.getItem("user");
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

export default function StaffLayout() {
  const navigate = useNavigate();
  const user = getUser();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/dangnhap", { replace: true });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,.3),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(15,23,42,1),_rgba(15,23,42,1))]" />
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* HEADER */}
        <header className="border-b border-slate-800/70 bg-slate-950/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-sky-500 text-xs font-bold text-slate-950 shadow-[0_10px_40px_rgba(56,189,248,.7)]">
                EV
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                  Staff workspace
                </div>
                <div className="text-sm font-semibold text-slate-50">
                  Vận hành đồng sở hữu xe điện
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs">
              {user && (
                <div className="text-right">
                  <div className="font-semibold text-slate-50">
                    {user.name || "Staff"}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {user.email || "staff@gmail.com"}
                  </div>
                </div>
              )}
              <span className="rounded-full bg-sky-400/10 px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-sky-200 ring-1 ring-sky-300/40">
                Staff
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
          <aside className="hidden w-[250px] shrink-0 md:block">
            <div className="sticky top-24 rounded-3xl border border-slate-800 bg-slate-900/70 p-3 shadow-[0_22px_80px_rgba(15,23,42,.9)] backdrop-blur">
              <div className="mb-3">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Điều hướng
                </div>
                <div className="mt-1 text-[11px] text-slate-400">
                  Tập trung vào lịch đặt, bàn giao & xử lý sự cố.
                </div>
              </div>

              <nav className="space-y-1 text-sm">
                <SideLink to="/staff" label="Tổng quan hôm nay" />
                <SideLink
                  to="/staff/operations/bookings"
                  label="Lịch đặt & hành trình"
                />
                <SideLink
                  to="/staff/operations/vehicles"
                  label="Đội xe & tình trạng"
                />
                <SideLink
                  to="/staff/operations/tasks"
                  label="Bảng công việc"
                />
                <SideLink to="/staff/coowners" label="Nhóm đồng sở hữu" />
                <SideLink to="/staff/invoices" label="Hóa đơn & thanh toán" />
              </nav>

              <div className="mt-4 rounded-2xl bg-slate-800/80 p-3 text-[11px] text-slate-300">
                <div className="mb-1 font-semibold text-slate-100">
                  ⚙️ Nhắc nhanh
                </div>
                <p>
                  Luôn xác nhận tình trạng xe khi bàn giao/nhận xe; log sự cố
                  vào hệ thống để Admin & Co-owner cùng theo dõi.
                </p>
              </div>
            </div>
          </aside>

          {/* CONTENT */}
          <section className="min-w-0 flex-1">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <div>
                <h1 className="text-sm font-semibold text-slate-50">
                  Bảng điều khiển vận hành
                </h1>
                <p className="text-[11px] text-slate-400">
                  Staff theo dõi lịch đặt, tình trạng xe và các công việc trong
                  ngày.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-4 shadow-[0_22px_80px_rgba(15,23,42,.85)]">
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
      <span className="ml-2 h-1.5 w-1.5 rounded-full bg-sky-400" />
    </NavLink>
  );
}
