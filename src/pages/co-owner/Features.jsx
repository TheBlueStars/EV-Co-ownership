// src/pages/co-owner/Features.jsx
import React from "react";
import PageHeader from "../../components/PageHeader.jsx";
import Footer from "../../components/Footer.jsx";
import { Link } from "react-router-dom";

/* ================== Small icon set (inline SVG) ================== */
const IconUsers = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm10 10v-2a4 4 0 0 0-3-3M17 3a4 4 0 0 1 0 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const IconCalendar = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M16 3v4M8 3v4M3 11h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const IconDollar = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 1v22M17 6a4 4 0 0 0-4-3H9a3 3 0 0 0 0 6h6a3 3 0 1 1 0 6H10a4 4 0 0 0-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const IconContract = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M8 3h7l4 4v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M15 3v5h5" stroke="currentColor" strokeWidth="2"/>
    <path d="M9 13h6M9 17h6M9 9h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const IconVotes = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 11h8M8 15h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M15 3H9l-2 4h10l-2-4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);
const IconFund = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="2" y="7" width="20" height="12" rx="3" stroke="currentColor" strokeWidth="2"/>
    <path d="M16 13a2 2 0 1 0 0-4H8a2 2 0 0 0 0 4h8Z" stroke="currentColor" strokeWidth="2"/>
  </svg>
);
const IconAI = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 8h8v8H8z" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const IconChart = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2"/>
    <path d="M7 16v-5M12 16V7M17 16v-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

/* ================== Reusable card ================== */
const FeatureCard = ({ icon, title, desc, bullets = [] }) => (
  <div className="rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm p-5 sm:p-6 hover:shadow-md transition">
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600 ring-1 ring-sky-100">
        {icon}
      </div>
      <h3 className="text-slate-900 font-semibold">{title}</h3>
    </div>
    <p className="mt-3 text-sm text-slate-600">{desc}</p>
    {bullets.length > 0 && (
      <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-300" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default function Features() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <PageHeader />

      {/* ===== Hero ===== */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12">
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-100">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Tính năng toàn diện
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-slate-900 max-w-3xl">
          Giải pháp{" "}
          <span className="bg-gradient-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent">
            hoàn chỉnh
          </span>{" "}
          cho đồng sở hữu xe điện
        </h1>

        <p className="mt-4 text-slate-600 max-w-3xl">
          Hệ thống quản lý toàn diện từ đăng ký, phân bổ chi phí đến lịch sử dụng và giải quyết
          tranh chấp.
        </p>
      </section>

      {/* ===== Feature grid ===== */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 pt-8 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          <FeatureCard
            icon={<IconUsers className="h-5 w-5" />}
            title="Quản lý đồng sở hữu"
            desc="Thiết lập & quản lý tỷ lệ sở hữu linh hoạt cho mỗi thành viên; tự động tính quyền lợi & nghĩa vụ."
            bullets={["KYC điện tử (CCCD, GPLX)", "Hợp đồng điện tử với chữ ký số", "Quản lý nhóm & phân quyền"]}
          />
          <FeatureCard
            icon={<IconCalendar className="h-5 w-5" />}
            title="Lịch thông minh"
            desc="Đặt/Quản lý lịch dùng xe công bằng với AI tối ưu."
            bullets={["Check-in/out bằng QR", "AI gợi ý slot công bằng", "Theo dõi lịch sử hành trình"]}
          />
          <FeatureCard
            icon={<IconDollar className="h-5 w-5" />}
            title="Chi phí minh bạch"
            desc="Tự động phân bổ chi phí theo tỷ lệ hoặc mức sử dụng; thanh toán trực tuyến & đối soát chi tiết."
            bullets={["Phân bổ tự động", "Statement tháng/quý", "Thanh toán e-wallet/banking"]}
          />
          <FeatureCard
            icon={<IconContract className="h-5 w-5" />}
            title="Hợp đồng điện tử"
            desc="Ký kết & lưu trữ an toàn với chữ ký số hợp pháp. Tra cứu mọi lúc."
            bullets={["Chữ ký số hợp pháp", "Lưu trữ an toàn", "Truy cập mọi nơi"]}
          />
          <FeatureCard
            icon={<IconVotes className="h-5 w-5" />}
            title="Bỏ phiếu nhóm"
            desc="Ra quyết định minh bạch qua bỏ phiếu online."
            bullets={["Trong số theo % sở hữu", "Bỏ phiếu trực tuyến", "Kết quả minh bạch"]}
          />
          <FeatureCard
            icon={<IconFund className="h-5 w-5" />}
            title="Quỹ chung minh bạch"
            desc="Quản lý quỹ chung/chi phí chi tiết; mọi giao dịch được lưu dấu & kiểm tra."
            bullets={["Sổ quỹ chi tiết", "Giao dịch minh bạch", "Báo cáo định kỳ"]}
          />
          <FeatureCard
            icon={<IconAI className="h-5 w-5" />}
            title="AI Tối ưu hóa"
            desc="AI gợi ý lịch công bằng, cảnh báo trùng lịch & tối ưu chi phí dựa trên thói quen."
            bullets={["Gợi ý lịch thông minh", "Cảnh báo trùng lịch", "Tối ưu chi phí"]}
          />
          <FeatureCard
            icon={<IconChart className="h-5 w-5" />}
            title="Báo cáo & Phân tích"
            desc="Dashboard trực quan, so sánh chi phí & tỷ lệ sở hữu; xuất báo cáo."
            bullets={["Dashboard trực quan", "Xuất PDF/Excel", "Audit log đầy đủ"]}
          />
        </div>
      </section>

      {/* ===== CTA gradient ===== */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-sky-500 via-sky-500/70 to-emerald-500 text-white">
          <h2 className="text-2xl sm:text-3xl font-extrabold">Sẵn sàng bắt đầu?</h2>
          <p className="mt-2 text-white/90">
            Tham gia cùng hàng trăm người dùng đang quản lý xe điện thông minh và hiệu quả.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <Link
              to="/register"
              className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-5 py-3 text-sm font-semibold hover:bg-slate-100"
            >
              Đăng ký ngay
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-xl ring-1 ring-white/60 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
            >
              Tìm hiểu thêm
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
