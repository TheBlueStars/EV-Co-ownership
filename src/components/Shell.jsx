import { Link, useLocation } from "react-router-dom";

function NavItem({ to, label }){
  const { pathname } = useLocation();
  const active = pathname === to || (to !== "/dashboard" && pathname.startsWith(to));
  return (
    <Link to={to} className={`side-item ${active ? "active" : ""}`}>
      <span>{label}</span>
      {active && <span className="active-rail" />}
    </Link>
  );
}

export default function Shell({ children }){
  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <div className="dot" />
          <div>
            <div className="brand-title">EV Co-ownership</div>
            <div className="brand-sub">Quản trị viên</div>
          </div>
        </div>
        <nav className="side-nav">
          <NavItem to="/dashboard" label="Tổng quan" />
          <NavItem to="/users" label="Người dùng" />
          <NavItem to="/vehicles" label="Quản lý xe" />
          <NavItem to="/reports" label="Báo cáo" />
          <NavItem to="/contracts" label="Hợp đồng" />
          <NavItem to="/system" label="Hệ thống" />
        </nav>
        <div style={{flex:1}}/>
      </aside>

      <div className="main">
        <header className="topbar">
          <div />
          <div>
            <button className="btn btn-ghost">Đăng xuất</button>
          </div>
        </header>
        <main className="content">{children}</main>
      </div>
    </div>
  );
}
