import { NavLink } from "react-router-dom";

export default function OwnerSideNav() {
  const base =
    "flex items-center gap-3 rounded-xl px-4 py-3 text-[15px] transition-colors";
  const active =
    "bg-sky-600 text-white shadow-sm";
  const inactive =
    "text-slate-700 hover:bg-slate-100";

  return (
    <aside className="hidden md:block w-[240px] shrink-0">
      <div className="sticky top-16">
        <div className="rounded-2xl border border-slate-200 bg-white p-3 space-y-1">
          <div className="px-3 py-2 text-slate-400 text-sm font-medium">
            Đồng sở hữu
          </div>

          <NavLink
            to="/owner/overview"
            className={({ isActive }) =>
              `${base} ${isActive ? active : inactive}`
            }
          >
            <span>📊</span>
            <span>Tổng quan</span>
          </NavLink>

          <NavLink
            to="/owner/booking"
            className={({ isActive }) =>
              `${base} ${isActive ? active : inactive}`
            }
          >
            <span>📅</span>
            <span>Đặt lịch xe</span>
          </NavLink>

          <NavLink
            to="/owner/costs"
            className={({ isActive }) =>
              `${base} ${isActive ? active : inactive}`
            }
          >
            <span>💲</span>
            <span>Chi phí</span>
          </NavLink>

          <NavLink
            to="/owner/group"
            className={({ isActive }) =>
              `${base} ${isActive ? active : inactive}`
            }
          >
            <span>👥</span>
            <span>Nhóm sở hữu</span>
          </NavLink>

          <NavLink
            to="/owner/contracts"
            className={({ isActive }) =>
              `${base} ${isActive ? active : inactive}`
            }
          >
            <span>📄</span>
            <span>Hợp đồng</span>
          </NavLink>

          <NavLink
            to="/owner/history"
            className={({ isActive }) =>
              `${base} ${isActive ? active : inactive}`
            }
          >
            <span>🚗</span>
            <span>Lịch sử</span>
          </NavLink>
        </div>
      </div>
    </aside>
  );
}
