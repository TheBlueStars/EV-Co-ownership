// src/App.jsx
import { Routes, Route } from "react-router-dom";

// ===== Layouts =====
import PublicLayout from "./routes/PublicLayout.jsx";
import PrivateLayout from "./routes/PrivateLayout.jsx";
import CoOwnerLayout from "./routes/CoOwnerLayout.jsx";
import StaffLayout from "./routes/StaffLayout.jsx";
import AdminLayout from "./routes/AdminLayout.jsx";

// ===== Public pages =====
import Home from "./pages/public/trangchu/Home.jsx";
import Features from "./pages/public/tinhnang/Features.jsx";
import AboutCoOwnership from "./pages/public/vechungsohuu/AboutCoOwnership.jsx";
import Contact from "./pages/public/lienhe/Contact.jsx";
import Register from "./pages/public/dangky/Register.jsx";
import Login from "./pages/public/dangnhap/Login.jsx";

// ===== Shared dashboard =====
import Dashboard from "./pages/shared/dashboard/Dashboard.jsx";

/* ===================== CO-OWNER PAGES ===================== */
import BookingList from "./pages/coowner/booking/BookingList.jsx";
import BookingDetail from "./pages/coowner/booking/BookingDetail.jsx";
import CreateBooking from "./pages/coowner/booking/CreateBooking.jsx";

import CostList from "./pages/coowner/costsharing/CostList.jsx";
import CostDetail from "./pages/coowner/costsharing/CostDetail.jsx";
import ShareCalculator from "./pages/coowner/costsharing/ShareCalculator.jsx";

import FundOverview from "./pages/coowner/fund/FundOverview.jsx";
import FundTransaction from "./pages/coowner/fund/FundTransaction.jsx";

import ContractList from "./pages/coowner/contracts/ContractList.jsx";
import ContractDetail from "./pages/coowner/contracts/ContractDetail.jsx";

import CalendarView from "./pages/coowner/schedule/CalendarView.jsx";

import VoteList from "./pages/coowner/vote/VoteList.jsx";
import VoteDetail from "./pages/coowner/vote/VoteDetail.jsx";

/* ===================== STAFF PAGES ===================== */
import StaffCoOwnerList from "./pages/staff/customers/CoOwnerList.jsx";
import StaffCoOwnerDetail from "./pages/staff/customers/CoOwnerDetail.jsx";

import StaffInvoiceList from "./pages/staff/invoices/InvoiceList.jsx";
import StaffInvoiceDetail from "./pages/staff/invoices/InvoiceDetail.jsx";

import BookingMonitor from "./pages/staff/operations/BookingMonitor.jsx";
import TaskBoard from "./pages/staff/operations/TaskBoard.jsx";
import VehicleStatus from "./pages/staff/operations/VehicleStatus.jsx";

import DailyOpsReport from "./pages/staff/reports/DailyOpsReport.jsx";

/* ===================== ADMIN PAGES ===================== */
import UserManagement from "./pages/admin/users/UserManagement.jsx";
import RolePermission from "./pages/admin/users/RolePermission.jsx";

import VehicleManagement from "./pages/admin/vehicles/VehicleManagement.jsx";
import MaintenancePlan from "./pages/admin/vehicles/MaintenancePlan.jsx";

import ContractTemplate from "./pages/admin/contracts/ContractTemplate.jsx";
import ContractVersioning from "./pages/admin/contracts/ContractVersioning.jsx";

import CostRules from "./pages/admin/finance/CostRules.jsx";
import FundConfig from "./pages/admin/finance/FundConfig.jsx";
import Settlement from "./pages/admin/finance/Settlement.jsx";

import Analytics from "./pages/admin/reports/Analytics.jsx";
import ExportCenter from "./pages/admin/reports/ExportCenter.jsx";

import SystemSettings from "./pages/admin/system/Settings.jsx";
import AuditLogs from "./pages/admin/system/AuditLogs.jsx";

import CreateVote from "./pages/admin/voting/CreateVote.jsx";
import VoteAdminList from "./pages/admin/voting/VoteAdminList.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <Routes>
        {/* ========== PUBLIC (Navbar + Footer trong PublicLayout) ========== */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/tinhnang" element={<Features />} />
          <Route path="/vechungsohuu" element={<AboutCoOwnership />} />
          <Route path="/lienhe" element={<Contact />} />
          <Route path="/dangnhap" element={<Login />} />
          <Route path="/dangky" element={<Register />} />
        </Route>

        {/* ========== PRIVATE (cần login) ========== */}
        <Route element={<PrivateLayout />}>
          {/* dashboard dùng chung */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* ---------------- CO-OWNER ---------------- */}
          <Route path="/coowner" element={<CoOwnerLayout />}>
            <Route path="bookings" element={<BookingList />} />
            <Route path="bookings/new" element={<CreateBooking />} />
            <Route path="bookings/:bookingId" element={<BookingDetail />} />

            <Route path="costs" element={<CostList />} />
            <Route path="costs/:costId" element={<CostDetail />} />
            <Route
              path="costs/share-calculator"
              element={<ShareCalculator />}
            />

            <Route path="fund" element={<FundOverview />} />
            <Route
              path="fund/transactions"
              element={<FundTransaction />}
            />

            <Route path="contracts" element={<ContractList />} />
            <Route
              path="contracts/:contractId"
              element={<ContractDetail />}
            />

            <Route path="schedule" element={<CalendarView />} />

            <Route path="votes" element={<VoteList />} />
            <Route path="votes/:voteId" element={<VoteDetail />} />
          </Route>

          {/* ---------------- STAFF ---------------- */}
          <Route path="/staff" element={<StaffLayout />}>
            <Route index element={<DailyOpsReport />} />

            <Route path="coowners" element={<StaffCoOwnerList />} />
            <Route
              path="coowners/:coOwnerId"
              element={<StaffCoOwnerDetail />}
            />

            <Route path="invoices" element={<StaffInvoiceList />} />
            <Route
              path="invoices/:invoiceId"
              element={<StaffInvoiceDetail />}
            />

            <Route
              path="operations/bookings"
              element={<BookingMonitor />}
            />
            <Route path="operations/tasks" element={<TaskBoard />} />
            <Route
              path="operations/vehicles"
              element={<VehicleStatus />}
            />

            <Route path="reports/daily" element={<DailyOpsReport />} />
          </Route>

          {/* ---------------- ADMIN ---------------- */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Analytics />} />

            {/* Users & roles */}
            <Route path="users" element={<UserManagement />} />
            <Route path="users/roles" element={<RolePermission />} />

            {/* Vehicles */}
            <Route path="vehicles" element={<VehicleManagement />} />
            <Route
              path="vehicles/maintenance"
              element={<MaintenancePlan />}
            />

            {/* Contracts */}
            <Route
              path="contracts/templates"
              element={<ContractTemplate />}
            />
            <Route
              path="contracts/versions"
              element={<ContractVersioning />}
            />

            {/* Finance */}
            <Route path="finance/rules" element={<CostRules />} />
            <Route path="finance/fund" element={<FundConfig />} />
            <Route
              path="finance/settlement"
              element={<Settlement />}
            />

            {/* Reports */}
            <Route
              path="reports/analytics"
              element={<Analytics />}
            />
            <Route
              path="reports/export"
              element={<ExportCenter />}
            />

            {/* System */}
            <Route path="system/settings" element={<SystemSettings />} />
            <Route path="system/audit-logs" element={<AuditLogs />} />

            {/* Voting */}
            <Route path="voting" element={<VoteAdminList />} />
            <Route path="voting/create" element={<CreateVote />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}
