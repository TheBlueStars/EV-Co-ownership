// src/pages/co-owner/Register.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageHeader from "../../components/PageHeader.jsx";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirm: "",
  });

  const onChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    // TODO: gọi API thật ở đây (vd: await apiPost("/api/auth/register", form))
    // Điều hướng về trang đăng nhập sau khi đăng ký thành công:
    alert("Đăng ký thành công!");
    navigate("/login");
  };

  return (
    <main className="min-h-screen bg-[#f1f2f4]">
      {/* Header dùng chung */}
      <PageHeader />

      {/* Logo + tiêu đề nhỏ */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex flex-col items-center">
          <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-sky-600 to-emerald-500 grid place-items-center text-white">
            <CarLogo className="h-6 w-6" />
          </div>
          <h1 className="mt-2 text-xl font-bold text-slate-800">
            EV <span className="text-sky-600">Co-</span>
            <span className="text-emerald-600">ownership</span>
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Quản lý đồng sở hữu xe điện thông minh
          </p>
        </div>
      </div>

      {/* Card form */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-8">
        <div className="mx-auto mt-6 w-full max-w-2xl rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
          {/* Heading + Tabs */}
          <div className="px-6 pt-6">
            <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900">
              Chào mừng bạn
            </h2>

            <div className="mt-4 grid grid-cols-2 gap-2 rounded-full bg-slate-100 p-1">
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="rounded-full py-2 text-sm font-medium text-slate-700 hover:bg-white hover:shadow-sm"
              >
                Đăng nhập
              </button>
              <button
                type="button"
                className="rounded-full bg-white py-2 text-sm font-semibold shadow-sm"
              >
                Đăng ký
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="px-6 pb-6 pt-3">
            <Field
              label="Họ & tên"
              name="fullName"
              placeholder="Nguyễn Văn A"
              icon={<UserIcon />}
              value={form.fullName}
              onChange={onChange}
            />

            <Field
              label="Email"
              type="email"
              name="email"
              placeholder="email@example.com"
              icon={<MailIcon />}
              value={form.email}
              onChange={onChange}
            />

            <Field
              label="Số điện thoại"
              name="phone"
              placeholder="+84 123 456 789"
              icon={<PhoneIcon />}
              value={form.phone}
              onChange={onChange}
            />

            <Field
              label="Mật khẩu"
              type="password"
              name="password"
              placeholder="••••••••"
              icon={<LockIcon />}
              value={form.password}
              onChange={onChange}
            />

            <Field
              label="Xác nhận mật khẩu"
              type="password"
              name="confirm"
              placeholder="••••••••"
              icon={<LockIcon />}
              value={form.confirm}
              onChange={onChange}
            />

            <button
              type="submit"
              className="mt-2 w-full rounded-xl bg-[#1976f2] py-3 text-sm font-semibold text-white hover:bg-[#1565d8]"
            >
              Đăng ký tài khoản
            </button>

            {/* Divider */}
            <div className="mt-4 flex items-center gap-3">
              <div className="h-px flex-1 bg-slate-200" />
              <span className="text-[11px] tracking-wider text-slate-400">
                HOẶC
              </span>
              <div className="h-px flex-1 bg-slate-200" />
            </div>

            {/* Google */}
            <button
              type="button"
              className="mt-3 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-slate-200 py-3 text-sm font-medium text-slate-800 hover:bg-slate-300"
              onClick={() => alert("Google OAuth (demo)")}
            >
              <GoogleG className="h-5 w-5" />
              Đăng ký với Google
            </button>

            {/* Back link */}
            <div className="mt-5 text-center">
              <Link
                to="/dashboard"
                className="inline-flex items-center text-xs text-slate-500 hover:text-slate-700"
              >
                <ArrowLeft className="mr-1 h-4 w-4" />
                Quay lại trang chủ
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

/* ---------- Components nhỏ ---------- */

function Field({ label, icon, name, value, onChange, placeholder, type = "text" }) {
  return (
    <label className="mt-4 block">
      <div className="mb-1 text-sm font-medium text-slate-700">{label}</div>
      <div className="relative">
        <span className="absolute inset-y-0 left-0 grid w-11 place-items-center text-slate-400">
          {icon}
        </span>
        <input
          name={name}
          value={value}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          autoComplete="off"
          className="w-full rounded-xl bg-slate-100 pl-11 pr-3 py-3 text-sm outline-none ring-1 ring-slate-200 focus:bg-white focus:ring-2 focus:ring-sky-400"
        />
      </div>
    </label>
  );
}

/* ---------- SVG icons (nhỏ gọn, cố định kích thước tránh phóng to) ---------- */
function CarLogo({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="2" y="6" width="20" height="12" rx="3" fill="currentColor" />
      <circle cx="8" cy="12" r="2.3" fill="#fff" />
      <circle cx="16" cy="12" r="2.3" fill="#fff" />
    </svg>
  );
}
function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-5 0-9 2.6-9 5.6V22h18v-2.4C21 16.6 17 14 12 14Z"
        fill="currentColor"
      />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <rect x="3" y="6" width="18" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="m3 7 9 7 9-7" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1.5 1.5 0 0 1 1.6-.36 10 10 0 0 0 3.2.52 1.5 1.5 0 0 1 1.5 1.5V20a1.5 1.5 0 0 1-1.5 1.5A18.5 18.5 0 0 1 3 6.5 1.5 1.5 0 0 1 4.5 5H7A1.5 1.5 0 0 1 8.5 6.5a10 10 0 0 0 .52 3.2 1.5 1.5 0 0 1-.36 1.6Z"
        fill="currentColor"
      />
    </svg>
  );
}
function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <rect x="4" y="10" width="16" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 10V8a4 4 0 0 1 8 0v2" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
function GoogleG({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M21.35 11.1h-9.18v2.97h5.27c-.23 1.3-1.58 3.82-5.27 3.82-3.17 0-5.76-2.62-5.76-5.86s2.59-5.86 5.76-5.86a5 5 0 0 1 3.54 1.38l2.42-2.32A8.28 8.28 0 0 0 12.41 3C7.86 3 4.17 6.69 4.17 11.23S7.86 19.46 12.41 19.46c7 0 8.41-6.11 7.94-8.36Z"
        fill="currentColor"
      />
    </svg>
  );
}
function ArrowLeft({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M4 12h16M10 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  );
}
