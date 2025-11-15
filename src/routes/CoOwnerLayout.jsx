// src/routes/CoOwnerLayout.jsx
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const getUser = () => {
  try {
    const raw = localStorage.getItem("user");
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

export default function CoOwnerLayout() {
  const navigate = useNavigate();
  const user = getUser();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/dangnhap", { replace: true });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* lớp background gradient mờ cho đẹp */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,.25),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(15,23,42,1),_rgba(15,23,42,1))]" />

      <div className="relative z-10 flex min-h-screen flex-col">
        {/* HEADER */}
        <header className="border-b border-slate-800/70 bg-slate-950/70 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-sky-400/90 text-xs font-bold text-slate-950 shadow-[0_10px_40px_rgba(56,189,248,.6)]">
                EV
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                  Co-owner workspace
                </div>
                <div className="text-sm font-semibold text-slate-50">
                  EV Co-ownership &amp; Cost-sharing
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs">
              {user && (
                <div className="text-right">
                  <div className="font-semibold text-slate-50">
                    {user.name || "Co-owner"}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {user.email || "coowner@gmail.com"}
                  </div>
                </div>
              )}
              <span className="rounded-full bg-emerald-400/10 px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-200 ring-1 ring-emerald-300/40">
                Co-owner
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
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Điều hướng
                  </div>
                  <div className="mt-1 text-[11px] text-slate-400">
                    Quyền &amp; lịch sử sử dụng theo % sở hữu
                  </div>
                </div>
              </div>

              <nav className="space-y-1 text-sm">
                <SideLink to="/coowner/bookings" label="Lịch đặt xe" />
                <SideLink to="/coowner/schedule" label="Lịch tuần / tháng" />
                <SideLink to="/coowner/costs" label="Chia chi phí" />
                <SideLink to="/coowner/fund" label="Quỹ chung" />
                <SideLink to="/coowner/contracts" label="Hợp đồng" />
                <SideLink to="/coowner/votes" label="Biểu quyết nhóm" />
              </nav>

              <div className="mt-4 rounded-2xl bg-slate-800/80 p-3 text-[11px] text-slate-300">
                <div className="mb-1 font-semibold text-slate-100">
                  💡 Gợi ý sử dụng
                </div>
                <p>
                  Đặt lịch sớm để ưu tiên khung giờ mong muốn. Hệ thống sẽ tự
                  động cân bằng lượt sử dụng giữa các đồng sở hữu.
                </p>
              </div>
            </div>
          </aside>

          {/* CONTENT */}
          <section className="min-w-0 flex-1">
            {/* khối container chung cho các page */}
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <div>
                <h1 className="text-sm font-semibold text-slate-50">
                  Không gian của Co-owner
                </h1>
                <p className="text-[11px] text-slate-400">
                  Quản lý lịch đặt, chi phí và quỹ chung của nhóm sở hữu xe.
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
      <span
        className={`ml-2 h-1.5 w-1.5 rounded-full ${
          Math.random() > 0.5 ? "bg-emerald-400" : "bg-sky-400"
        }`}
      />
    </NavLink>
  );
}
