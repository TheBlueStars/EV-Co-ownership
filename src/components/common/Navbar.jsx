import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-[1200px] px-4 py-3">
        <div className="h-12 rounded-2xl border border-slate-200/80 bg-white/90 px-4 backdrop-blur flex items-center justify-between shadow-[0_8px_30px_rgba(2,6,23,.06)]">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2 font-semibold text-slate-900">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-blue-100 text-[#1e90ff]">🚗</span>
            EV Co-ownership
          </Link>

          {/* Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <TopLink to="/" end>Trang chủ</TopLink>
            <TopLink to="/tinhnang">Tính năng</TopLink>
            <TopLink to="/vechungsohuu">Về chúng tôi</TopLink>
            <TopLink to="/lienhe">Liên hệ</TopLink>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link to="/dangnhap" className="rounded-xl border border-slate-200 bg-white px-4 py-1.5 text-slate-800 hover:bg-slate-50">
              Đăng nhập
            </Link>
            <Link to="/dangky" className="rounded-xl bg-[#1e90ff] px-4 py-1.5 text-white hover:brightness-110">
              Đăng ký ngay
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function TopLink({ to, end, children }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `relative py-1 after:absolute after:-bottom-[6px] after:left-0 after:h-[2px] after:w-0 after:bg-[#1e90ff] after:transition-all hover:text-slate-900 hover:after:w-full ${
          isActive ? "text-[#1e90ff] font-medium after:w-full" : "text-slate-600"
        }`
      }
    >
      {children}
    </NavLink>
  );
}
