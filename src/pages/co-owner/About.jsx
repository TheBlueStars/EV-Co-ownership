import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader.jsx";
import Footer from "../../components/Footer.jsx";

/* ====== tiny icons (inline) ====== */
const EyeIcon = ({ color }) => (
  <svg
    viewBox="0 0 24 24"
    className={`h-6 w-6 ${color}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const MissionIcon = ({ color }) => (
  <svg
    viewBox="0 0 24 24"
    className={`h-6 w-6 ${color}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 3v18M5 7h14M5 12h14M5 17h14" />
  </svg>
);

const ValuesIcon = ({ color }) => (
  <svg
    viewBox="0 0 24 24"
    className={`h-6 w-6 ${color}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 21l-8-8 8-8 8 8-8 8Z" />
    <path d="M12 8v8M8 12h8" />
  </svg>
);

export default function About() {
  const stats = [
    { k: "500+", v: "Người dùng", color: "text-sky-500" },
    { k: "100+", v: "Nhóm xe", color: "text-emerald-500" },
    { k: "50M+", v: "Giao dịch/ tháng", color: "text-sky-600" },
    { k: "99.9%", v: "Uptime", color: "text-emerald-600" },
  ];

  const values = [
    {
      title: "Sứ mệnh",
      desc: "Tạo nền tảng quản lý đồng sở hữu xe điện minh bạch, công bằng và hiệu quả nhất cho người Việt Nam.",
      icon: <MissionIcon color="text-sky-500" />,
    },
    {
      title: "Tầm nhìn",
      desc: "Trở thành giải pháp hàng đầu cho mô hình sở hữu xe điện chia sẻ tại Việt Nam và khu vực Đông Nam Á.",
      icon: <EyeIcon color="text-emerald-500" />,
    },
    {
      title: "Giá trị cốt lõi",
      desc: "Minh bạch • Công bằng • Hiệu quả • An toàn • Bền vững.",
      icon: <ValuesIcon color="text-sky-500" />,
    },
  ];

  const team = [
    { k: "15+", v: "Kỹ sư phát triển", sub: "Engineering", color: "text-sky-500" },
    { k: "5+", v: "Chuyên gia sản phẩm", sub: "Product", color: "text-emerald-500" },
    { k: "24/7", v: "Hỗ trợ khách hàng", sub: "Support", color: "text-sky-600" },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      <PageHeader />

      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-100 to-slate-50" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-10 pb-10">
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-sky-500" />
              Về chúng tôi
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center">
            Đi đầu trong{" "}
            <span className="bg-gradient-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent">
              tương lai xanh
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-center text-slate-600">
            EV Co-ownership ra đời với mục tiêu giúp mọi người dễ dàng tiếp cận và sở hữu xe
            điện thông qua mô hình đồng sở hữu thông minh và bền vững.
          </p>

          {/* STATS */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white ring-1 ring-slate-200 p-6 text-center shadow-sm"
              >
                <div className={`text-3xl font-extrabold ${s.color}`}>{s.k}</div>
                <div className="mt-1 text-sm text-slate-600">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 text-center">
            Giá trị cốt lõi của chúng tôi
          </h2>
          <p className="mt-3 text-center text-slate-600">
            Những giá trị định hướng mọi quyết định và hành động của chúng tôi
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm text-center"
              >
                <div className="flex justify-center">
                  <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>
                <h3 className="mt-4 font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-slate-100/80">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            Câu chuyện của chúng tôi
          </h2>
          <div className="mt-4 rounded-2xl bg-white ring-1 ring-slate-200 p-6 sm:p-8 leading-relaxed text-slate-700 shadow-sm">
            <p>
              Năm 2024, khi xu hướng xe điện phát triển mạnh mẽ, chúng tôi nhìn thấy thách thức:
              chi phí cao và việc chia sẻ sử dụng thiếu minh bạch. Từ đó, ý tưởng về một nền tảng
              đồng sở hữu xe điện ra đời.
            </p>
            <p className="mt-3">
              EV Co-ownership giải quyết các vấn đề về phân bổ chi phí, lịch sử dụng và niềm tin
              giữa các thành viên bằng công nghệ AI và dữ liệu chuỗi. Hệ thống giúp quản lý thông
              minh, tự động và minh bạch hoàn toàn.
            </p>
            <p className="mt-4 font-semibold text-slate-900">
              Hôm nay, chúng tôi tự hào là nền tảng đi đầu trong việc kết nối những người yêu thích
              xe điện, tạo nên một cộng đồng chia sẻ hướng tới tương lai xanh bền vững.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 text-center">
            Đội ngũ chuyên nghiệp
          </h2>
          <p className="mt-3 text-center text-slate-600">
            Những chuyên gia đam mê công nghệ và môi trường
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {team.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white ring-1 ring-slate-200 p-6 text-center shadow-sm"
              >
                <div className={`text-3xl font-extrabold ${t.color}`}>{t.k}</div>
                <div className="mt-1 font-semibold text-slate-900">{t.v}</div>
                <div className="text-sm text-slate-600">{t.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
