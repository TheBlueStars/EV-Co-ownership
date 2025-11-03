import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, NavLink, Outlet, useNavigate } from "react-router-dom";
import RouteTransition from "./components/RouteTransition.jsx";
import { ToastHost } from "./lib/toast";
import { apiGet } from "./lib/api";

import AdminDashboard from "./pages/admin/Dashboard.jsx";
import AdminUsers from "./pages/admin/Users.jsx";
import AdminVehicles from "./pages/admin/Vehicles.jsx";
import AdminContracts from "./pages/admin/Contracts.jsx";
import AdminReports from "./pages/admin/Reports.jsx";
import AdminSystem from "./pages/admin/System.jsx";

import StaffDashboard from "./pages/staff/StaffDashboard.jsx";
import StaffMaintenance from "./pages/staff/StaffMaintenance.jsx";
import StaffCosts from "./pages/staff/StaffCosts.jsx";
import StaffIncidents from "./pages/staff/StaffIncidents.jsx";
import StaffVehicles from "./pages/staff/StaffVehicles.jsx";
import StaffSettings from "./pages/staff/StaffSettings.jsx";

function TopBar({ role, staff }) {
  const navigate = useNavigate();
  const [openNotif, setOpenNotif] = useState(false);
  const [notifs, setNotifs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    if(!openNotif) return;
    (async()=>{
      try{
        setLoading(true);
        const res = await apiGet("/api/notifications");
        setNotifs(Array.isArray(res)? res : (res.items||[]));
      }catch{ /* ignore */ } finally { setLoading(false); }
    })();
  },[openNotif]);
  return (
    <header className="topbar">
      <div className="brand">
        <span className={`logo-dot ${staff ? "s" : ""}`} />
        <b>EV Co-ownership</b>
        <span className="role">{role}</span>
      </div>
      <div className="actions" style={{position:"relative"}}>
        <input className="search" placeholder="Tìm kiếm nhanh..." />
        <button className="icon-btn" title="Thông báo" onClick={()=>setOpenNotif(o=>!o)}><span className="msr">notifications</span></button>
        {openNotif && (
          <div className="popover" style={{right:0, top:42, minWidth:300}}>
            <div className="section-title">Thông báo</div>
            <div className="notif-list">
              {loading && <div className="meta" style={{padding:8}}>Đang tải...</div>}
              {!loading && notifs.length===0 && <div className="meta" style={{padding:8}}>Chưa có thông báo</div>}
              {!loading && notifs.map((n,i)=>(
                <div key={n.id||i} className="notif-item">
                  <span className="dot" style={{background:n.unread?"var(--c-blue)":"#e5e7eb"}}/>
                  <div style={{flex:1}}>
                    <div style={{fontWeight:600}}>{n.title||"Thông báo"}</div>
                    <div className="meta">{n.message||"—"}</div>
                  </div>
                  <div className="meta">{n.time||""}</div>
                </div>
              ))}
            </div>
          </div>
        )}
        <button className="icon-btn" title="Cài đặt" onClick={()=>navigate(staff? "/staff/settings" : "/system")}> 
          <span className="msr">settings</span>
        </button>
        <button className="icon-btn" title="Tài khoản"><span className="msr">account_circle</span></button>
        <button className="btn btn-ghost"><span className="msr" style={{marginRight:6}}>logout</span>Đăng xuất</button>
      </div>
    </header>
  );
}

/* Layout Admin */
function AdminLayout(){
  const nav = [
    {to:"/dashboard", label:"Tổng quan", icon:<span className="msr">dashboard</span>},
    {to:"/users",     label:"Người dùng", icon:<span className="msr">group</span>},
    {to:"/vehicles",  label:"Quản lí xe", icon:<span className="msr">directions_car</span>},
    {to:"/contracts", label:"Hợp đồng", icon:<span className="msr">description</span>},
    {to:"/reports",   label:"Báo cáo", icon:<span className="msr">bar_chart</span>},
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
    {to:"/staff/dashboard",    label:"Dashboard",   icon:<span className="msr">dashboard</span>},
    {to:"/staff/maintenance",  label:"Maintenance", icon:<span className="msr">build</span>},
    {to:"/staff/costs",        label:"Chi phí",     icon:<span className="msr">receipt_long</span>},
    {to:"/staff/incidents",    label:"Sự cố",       icon:<span className="msr">report</span>},
    {to:"/staff/vehicles",     label:"Xe",          icon:<span className="msr">directions_car</span>},
    {to:"/staff/settings",     label:"Cài đặt",     icon:<span className="msr">settings</span>},
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

        {/* ADMIN SETTINGS */}
        <Route path="/system" element={<AdminSystem/>}/>

        <Route path="*" element={<Navigate to="/dashboard" replace/>}/>
      </Routes>
    </>
  );
}
