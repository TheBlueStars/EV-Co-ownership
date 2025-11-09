// src/components/PageHeader.jsx
import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function PageHeader() {
  return (
    <header role="banner" className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        {/* Brand */}
        <Link to="/dashboard" className="flex items-center gap-2 shrink-0">
          <BrandIcon />
          <span className="font-semibold text-sm sm:text-base">
            EV <span className="text-sky-600">Co-</span>
            <span className="text-emerald-600">ownership</span>
          </span>
        </Link>

        {/* Center nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {/* 1) Viết 1 helper cho class của NavLink */}
          {(() => {
            const navCls = ({ isActive }) =>
              `relative px-1 transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-sky-500 after:transition-all
       ${isActive
                ? "text-sky-600 font-semibold after:w-full"
                : "text-slate-600 hover:text-slate-900 after:w-0 hover:after:w-full"}`;

            return (
              <>
                <NavLink to="/home" className={navCls}>
                  Trang chủ
                </NavLink>
                <NavLink to="/features" className={navCls}>
                  Tính năng
                </NavLink>
                <NavLink to="/about" className={navCls}>
                  Về chúng tôi
                </NavLink>
                <NavLink to="/contact" className={navCls}>
                  Liên hệ
                </NavLink>
              </>
            );
          })()}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <NavLink
            to="/login"
            className="hidden sm:inline-flex items-center rounded-lg px-3 py-2 text-sm ring-1 ring-slate-300 hover:bg-slate-50"
          >
            Đăng nhập
          </NavLink>
          <NavLink
            to="/register"
            className="inline-flex items-center rounded-lg px-3.5 py-2 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700"
          >
            Đăng ký ngay
          </NavLink>
        </div>
      </div>
    </header>
  );
}

function BrandIcon() {
  // Cố định kích thước để tránh mọi CSS global làm phóng to
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="shrink-0"
    >
      <rect x="2" y="6" width="20" height="12" rx="3" className="fill-sky-600" />
      <path d="M4 12h6M14 12h6" stroke="#fff" strokeWidth="1.6" />
      <circle cx="8" cy="12" r="2.3" fill="#fff" />
      <circle cx="16" cy="12" r="2.3" fill="#fff" />
    </svg>
  );
}
