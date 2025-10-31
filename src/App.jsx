import React from "react";
import { Routes, Route, Navigate, NavLink, Outlet } from "react-router-dom";
import RouteTransition from "./components/RouteTransition.jsx";
import { ToastHost } from "./lib/toast";

import AdminDashboard from "./pages/admin/Dashboard.jsx";
import AdminUsers from "./pages/admin/Users.jsx";
import AdminVehicles from "./pages/admin/Vehicles.jsx";
import AdminContracts from "./pages/admin/Contracts.jsx";
import AdminReports from "./pages/admin/Reports.jsx";

import StaffDashboard from "./pages/staff/StaffDashboard.jsx";
import StaffMaintenance from "./pages/staff/StaffMaintenance.jsx";
import StaffCosts from "./pages/staff/StaffCosts.jsx";
import StaffIncidents from "./pages/staff/StaffIncidents.jsx";
import StaffVehicles from "./pages/staff/StaffVehicles.jsx";
import StaffSettings from "./pages/staff/StaffSettings.jsx";

function TopBar({ role, staff }) {
  return (
    <header className="topbar">
      <div className="brand">
        <span className={`logo-dot ${staff ? "s" : ""}`} />
        <b>EV Co-ownership</b>
        <span className="role">{role}</span>
      </div>
      <div className="actions">
        <input className="search" placeholder="Tìm kiếm nhanh..." />
        <button className="icon-btn" title="Thông báo">🔔</button>
        <button className="icon-btn" title="Tài khoản">👤</button>
        <button className="btn btn-ghost">↦ Đăng xuất</button>
      </div>
    </header>
  );
}

/* Layout Admin */
function AdminLayout(){
  const nav = [
    {to:"/dashboard", label:"Tổng quan", icon:"🏠"},
    {to:"/users",     label:"Người dùng", icon:"👥"},
    {to:"/vehicles",  label:"Quản lí xe", icon:"🚗"},
    {to:"/contracts", label:"Hợp đồng", icon:"📄"},
    {to:"/reports",   label:"Báo cáo", icon:"📊"},
  ];
  return (
    <div className="app-shell">
      <TopBar role="Quản trị viên" />
      <aside className="sidebar">
        <nav>{nav.map(n=>(
          <NavLink key={n.to} to={n.to} className="nav-item"><span className="ico">{n.icon}</span><span>{n.label}</span></NavLink>
        ))}</nav>
      </aside>
      <main className="content">
        <RouteTransition><Outlet/></RouteTransition>
      </main>
    </div>
  );
}

/* Layout Staff */
function StaffLayout(){
  const nav = [
    {to:"/staff/dashboard",    label:"Dashboard",   icon:"📈"},
    {to:"/staff/maintenance",  label:"Maintenance", icon:"🛠️"},
    {to:"/staff/costs",        label:"Chi phí",     icon:"💸"},
    {to:"/staff/incidents",    label:"Sự cố",       icon:"🚨"},
    {to:"/staff/vehicles",     label:"Xe",          icon:"🚗"},
    {to:"/staff/settings",     label:"Cài đặt",     icon:"⚙️"},
  ];
  return (
    <div className="app-shell app-shell--staff">
      <TopBar role="Nhân viên" staff />
      <aside className="sidebar sidebar--staff">
        <nav>{nav.map(n=>(
          <NavLink key={n.to} to={n.to} className="nav-item"><span className="ico">{n.icon}</span><span>{n.label}</span></NavLink>
        ))}</nav>
      </aside>
      <main className="content">
        <RouteTransition><Outlet/></RouteTransition>
      </main>
    </div>
  );
}

export default function App(){
  return (
    <>
      <ToastHost/>
      <Routes>
        {/* ADMIN */}
        <Route element={<AdminLayout/>}>
          <Route index element={<Navigate to="/dashboard" replace/>}/>
          <Route path="/dashboard" element={<AdminDashboard/>}/>
          <Route path="/users" element={<AdminUsers/>}/>
          <Route path="/vehicles" element={<AdminVehicles/>}/>
          <Route path="/contracts" element={<AdminContracts/>}/>
          <Route path="/reports" element={<AdminReports/>}/>
        </Route>

        {/* STAFF */}
        <Route path="/staff" element={<StaffLayout/>}>
          <Route index element={<Navigate to="/staff/dashboard" replace/>}/>
          <Route path="dashboard" element={<StaffDashboard/>}/>
          <Route path="maintenance" element={<StaffMaintenance/>}/>
          <Route path="costs" element={<StaffCosts/>}/>
          <Route path="incidents" element={<StaffIncidents/>}/>
          <Route path="vehicles" element={<StaffVehicles/>}/>
          <Route path="settings" element={<StaffSettings/>}/>
        </Route>

        <Route path="*" element={<Navigate to="/dashboard" replace/>}/>
      </Routes>
    </>
  );
}
