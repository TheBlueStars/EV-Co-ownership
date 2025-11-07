// src/pages/co-owner/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader.jsx";
import Footer from "../../components/Footer.jsx";
import heroCar from "../../assets/img/hero-car.png";



export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <PageHeader />

      <section className="relative overflow-hidden" aria-label="EV Co-ownership hero">
        {/* 1) Nền gradient */}
        <div className="absolute inset-0 -z-20 bg-gradient-to-b from-sky-50 via-white to-white" />

        {/* 2) Ảnh xe (đặt giữa nền & overlay) */}
        <img
          src={heroCar}
          alt="EV Co-ownership Hero Car"
          className="pointer-events-none select-none absolute right-0 bottom-0 -z-10 w-[1200px] max-w-none"
        />

        {/* 3) Lớp phủ trong suốt (kính mờ) */}
        <div className="absolute inset-0 z-0 bg-white/55 backdrop-blur-[2px]" />

        {/* 4) Nội dung */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 pb-16">
          {/* badge */}
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-100">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Smart EV Co-ownership
          </span>

          {/* title */}
          <h1 className="mt-6 max-w-2xl text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight text-slate-900">
            Share Your{" "}
            <span className="bg-gradient-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent">
              Electric
            </span>
            <br />
            Future
          </h1>

          {/* subtitle */}
          <p className="mt-6 max-w-2xl text-slate-600 text-base sm:text-lg">
            Quản lý đồng sở hữu xe điện thông minh với phân bổ chi phí công bằng,
            lịch trình tối ưu và minh bạch tuyệt đối.
          </p>

          {/* actions */}
          <div className="mt-7 flex items-center gap-4">
            <Link
              to="/register"
              className="inline-flex items-center justify-center rounded-xl bg-sky-600 px-5 py-3 text-white text-sm font-semibold hover:bg-sky-700"
            >
              Bắt đầu ngay
              <svg viewBox="0 0 24 24" className="ml-2 h-4 w-4" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-xl ring-1 ring-slate-300 px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Tìm hiểu thêm
            </Link>
          </div>

          {/* feature pills (glass) */}
          <div className="mt-12 max-w-4xl">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <FeatureCard
                icon={<ShareIcon />}
                title="Đồng sở hữu"
                desc="Quản lý tỷ lệ sở hữu linh hoạt"
              />
              <FeatureCard
                icon={<CalendarIcon />}
                title="Lịch thông minh"
                desc="AI tối ưu hóa booking"
              />
              <FeatureCard
                icon={<DollarIcon />}
                title="Chi phí minh bạch"
                desc="Phân bổ tự động & công bằng"
              />
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </main>
  );
}

/* ---- small components ---- */
function FeatureCard({ icon, title, desc }) {
  return (
    <div className="rounded-2xl bg-white/70 backdrop-blur shadow-sm ring-1 ring-slate-200 p-4">
      <div className="flex items-start gap-3">
        <div className="h-9 w-9 shrink-0 grid place-items-center rounded-xl bg-sky-50 text-sky-600">
          {icon}
        </div>
        <div>
          <div className="font-semibold text-slate-800">{title}</div>
          <div className="text-sm text-slate-500">{desc}</div>
        </div>
      </div>
    </div>
  );
}

function ShareIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path d="M15 7a3 3 0 1 0-3-3 3 3 0 0 0 3 3Zm-9 7a3 3 0 1 0-3-3 3 3 0 0 0 3 3Zm12 7a3 3 0 1 0-3-3 3 3 0 0 0 3 3ZM7.7 10.6l6.6-3.2M7.7 12.8l6.6 3.2" stroke="currentColor" strokeWidth="1.6" fill="none" />
    </svg>
  );
}
function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 3v4M16 3v4M3 10h18" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
function DollarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path d="M12 2v20M16.5 7.5A3.5 3.5 0 1 1 12 11H9.5a3.5 3.5 0 1 0 0 7H15" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
