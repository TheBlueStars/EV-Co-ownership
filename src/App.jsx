import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, NavLink, Outlet, useNavigate } from "react-router-dom";
import RouteTransition from "./components/RouteTransition.jsx";
import { ToastHost } from "./lib/toast";
import { apiGet } from "./lib/api";

/* ===== Public pages  ===== */
import Register from "./pages/co-owner/Register.jsx";
import Login from "./pages/co-owner/Login.jsx";
import Home from "./pages/co-owner/Home.jsx";
import Features from "./pages/co-owner/Features.jsx";
import About from "./pages/co-owner/About.jsx";
import Contact from "./pages/co-owner/Contact.jsx";

/* ===== Admin pages ===== */
import AdminDashboard from "./pages/admin/Dashboard.jsx";
import AdminUsers from "./pages/admin/Users.jsx";
import AdminVehicles from "./pages/admin/Vehicles.jsx";
import AdminContracts from "./pages/admin/Contracts.jsx";
import AdminReports from "./pages/admin/Reports.jsx";
import AdminSystem from "./pages/admin/System.jsx";

/* ===== Staff pages ===== */
import StaffDashboard from "./pages/staff/StaffDashboard.jsx";
import StaffMaintenance from "./pages/staff/StaffMaintenance.jsx";
import StaffCosts from "./pages/staff/StaffCosts.jsx";
import StaffIncidents from "./pages/staff/StaffIncidents.jsx";
import StaffVehicles from "./pages/staff/StaffVehicles.jsx";
import StaffSettings from "./pages/staff/StaffSettings.jsx";

/* ===== Optional public home (không dùng làm trang chủ) ===== */
// import Home from "./pages/co-owner/Home.jsx";
import Footer from "./components/Footer.jsx";
import OwnerOverview from "./pages/co-owner/OwnerOverview.jsx";
import OwnerBooking from "./pages/co-owner/OwnerBooking.jsx";
import OwnerCosts from "./pages/co-owner/OwnerCosts.jsx";
import OwnerGroup from "./pages/co-owner/OwnerGroup.jsx";
import Contracts from "./pages/co-owner/Contracts.jsx";
import History from "./pages/co-owner/History.jsx";

/* ---------------- Top Bar (giữ nguyên của bạn) ---------------- */
function TopBar({ role, staff }) {
  const navigate = useNavigate();
  const [openNotif, setOpenNotif] = useState(false);
  const [notifs, setNotifs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!openNotif) return;
    (async () => {
      try {
        setLoading(true);
        const res = await apiGet("/api/notifications");
        setNotifs(Array.isArray(res) ? res : (res.items || []));
      } catch { /* ignore */ } finally { setLoading(false); }
    })();
  }, [openNotif]);

  return (
    <header className="topbar">
      <div className="brand">
        <span className={`logo-dot ${staff ? "s" : ""}`} />
        <b>EV Co-ownership</b>
        <span className="role">{role}</span>
      </div>
      <div className="actions" style={{ position: "relative" }}>
        <input className="search" placeholder="Tìm kiếm nhanh..." />
        <button className="icon-btn" title="Thông báo" onClick={() => setOpenNotif(o => !o)}>
          <span className="msr">notifications</span>
        </button>
        {openNotif && (
          <div className="popover" style={{ right: 0, top: 42, minWidth: 300 }}>
            <div className="section-title">Thông báo</div>
            <div className="notif-list">
              {loading && <div className="meta" style={{ padding: 8 }}>Đang tải...</div>}
              {!loading && notifs.length === 0 && <div className="meta" style={{ padding: 8 }}>Chưa có thông báo</div>}
              {!loading && notifs.map((n, i) => (
                <div key={n.id || i} className="notif-item">
                  <span className="dot" style={{ background: n.unread ? "var(--c-blue)" : "#e5e7eb" }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600 }}>{n.title || "Thông báo"}</div>
                    <div className="meta">{n.message || "—"}</div>
                  </div>
                  <div className="meta">{n.time || ""}</div>
                </div>
              ))}
            </div>
          </div>
        )}
        <button className="icon-btn" title="Cài đặt" onClick={() => navigate(staff ? "/staff/settings" : "/system")}>
          <span className="msr">settings</span>
        </button>
        <button className="icon-btn" title="Tài khoản"><span className="msr">account_circle</span></button>
        <button className="btn btn-ghost"><span className="msr" style={{ marginRight: 6 }}>logout</span>Đăng xuất</button>
      </div>
    </header>
  );
}

/* ---------------- Admin Layout ---------------- */
function AdminLayout() {
  const nav = [
    { to: "/dashboard", label: "Tổng quan", icon: <span className="msr">dashboard</span> },
    { to: "/users", label: "Người dùng", icon: <span className="msr">group</span> },
    { to: "/vehicles", label: "Quản lí xe", icon: <span className="msr">directions_car</span> },
    { to: "/contracts", label: "Hợp đồng", icon: <span className="msr">description</span> },
    { to: "/reports", label: "Báo cáo", icon: <span className="msr">bar_chart</span> },
  ];
  return (
    <div className="app-shell">
      <TopBar role="Quản trị viên" />
      <aside className="sidebar">
        <nav>{nav.map(n => (
          <NavLink key={n.to} to={n.to} className="nav-item">
            <span className="ico">{n.icon}</span><span>{n.label}</span>
          </NavLink>
        ))}</nav>
      </aside>
      <main className="content">
        <RouteTransition><Outlet /></RouteTransition>
      </main>
    </div>
  );
}

/* ---------------- Staff Layout ---------------- */
function StaffLayout() {
  const nav = [
    { to: "/staff/dashboard", label: "Dashboard", icon: <span className="msr">dashboard</span> },
    { to: "/staff/maintenance", label: "Maintenance", icon: <span className="msr">build</span> },
    { to: "/staff/costs", label: "Chi phí", icon: <span className="msr">receipt_long</span> },
    { to: "/staff/incidents", label: "Sự cố", icon: <span className="msr">report</span> },
    { to: "/staff/vehicles", label: "Xe", icon: <span className="msr">directions_car</span> },
    { to: "/staff/settings", label: "Cài đặt", icon: <span className="msr">settings</span> },
  ];
  return (
    <div className="app-shell app-shell--staff">
      <TopBar role="Nhân viên" staff />
      <aside className="sidebar sidebar--staff">
        <nav>{nav.map(n => (
          <NavLink key={n.to} to={n.to} className="nav-item">
            <span className="ico">{n.icon}</span><span>{n.label}</span>
          </NavLink>
        ))}</nav>
      </aside>
      <main className="content">
        <RouteTransition><Outlet /></RouteTransition>
      </main>
    </div>
  );
}

/* ---------------- Public Layout (nếu cần Home + Footer) ---------------- */
function PublicLayout() {
  return (
    <>
      <RouteTransition><Outlet /></RouteTransition>
      <Footer />
    </>
  );
}

/* ---------------- App Router ---------------- */
export default function App() {
  return (
    <>
      <ToastHost />
      <Routes>
        {/* ===== PUBLIC ===== */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />         
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />


        {/* ===== ADMIN ===== */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="vehicles" element={<AdminVehicles />} />
          <Route path="contracts" element={<AdminContracts />} />
          <Route path="reports" element={<AdminReports />} />
          <Route path="system" element={<AdminSystem />} />
        </Route>

        {/* ===== STAFF ===== */}
        <Route path="/staff" element={<StaffLayout />}>
          <Route index element={<Navigate to="/staff/dashboard" replace />} />
          <Route path="dashboard" element={<StaffDashboard />} />
          <Route path="maintenance" element={<StaffMaintenance />} />
          <Route path="costs" element={<StaffCosts />} />
          <Route path="incidents" element={<StaffIncidents />} />
          <Route path="vehicles" element={<StaffVehicles />} />
          <Route path="settings" element={<StaffSettings />} />
        </Route>

        {/* ===== FALLBACK ===== */}
        <Route path="*" element={<Navigate to="/home" replace />} />

        {/* ===== ADMIN SETTINGS ===== */}
        <Route path="/system" element={<AdminSystem />} />

        {/* ===== FEATURES ===== */}
        <Route path="/features" element={<Features />} />

        {/* ===== FALLBACK ===== */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />

        <Route path="/owner/overview" element={<OwnerOverview />} />

        <Route path="/owner/booking" element={<OwnerBooking />} />

        <Route path="/owner/costs" element={<OwnerCosts />} />

        <Route path="/owner/group" element={<OwnerGroup />} />

        <Route path="/owner/contracts" element={<Contracts />} />

        <Route path="/owner/history" element={<History />} />

      </Routes>
    </>
  );
}
