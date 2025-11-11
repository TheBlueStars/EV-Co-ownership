import { Handshake, CalendarRange, BadgeDollarSign } from "lucide-react";
import carImg from "../../../assets/images/hero-car.png";

/** Trang chủ EV Co-ownership – layout khớp mock:
 *  - Thanh hero nền xanh nhạt, khung bo tròn
 *  - Ảnh xe ở giữa & mờ (absolute, không chiếm layout)
 *  - Heading trái với “Electric” gradient xanh lá → xanh dương, “Future” xanh dương
 *  - 2 CTA, thanh 3 thẻ nổi bán trong suốt đè lên ảnh
 */
export default function Home() {
  return (
    <section className="bg-slate-100">
      {/* HERO */}
      <div className="mx-auto max-w-[1200px] relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-b from-sky-50 to-white px-6 pb-12 pt-8 md:px-8 md:pb-16 md:pt-10">
        {/* Ảnh xe giữa + mờ */}
        <div aria-hidden className="pointer-events-none absolute inset-0 flex items-end justify-center">
          <img
            src={carImg}
            alt=""
            draggable={false}
            className="select-none opacity-90 blur-[1.5px] md:w-[1240px] w-[150%] md:translate-y-14 translate-y-10"
          />
        </div>
        {/* Fade chân ảnh */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,.96)_85%)]" />

        {/* Nội dung trái */}
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/75 px-3 py-1 text-sm text-emerald-600 ring-1 ring-emerald-200 backdrop-blur">
            <span className="h-2 w-8 rounded-full bg-emerald-500/90" />
            Smart EV Co-ownership
          </div>

          <h1 className="mt-6 text-[40px] md:text-[56px] leading-[1.05] font-extrabold text-slate-900">
            Share Your{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-sky-500 bg-clip-text text-transparent">
              Electric
            </span>
            <br />
            <span className="text-[#1e90ff]">Future</span>
          </h1>

          <p className="mt-5 max-w-[640px] text-[15px] leading-7 text-slate-600">
            Quản lý đồng sở hữu xe điện thông minh với phân bổ chi phí công bằng,
            lịch trình tối ưu và minh bạch tuyệt đối.
          </p>

          {/* CTA */}
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="/dangky"
              className="rounded-xl bg-[#1e90ff] px-5 py-2.5 text-white shadow hover:brightness-110 active:translate-y-[1px]"
            >
              Bắt đầu ngay →
            </a>
            <a
              href="/tinhnang"
              className="rounded-xl border border-slate-200 bg-white/85 px-5 py-2.5 text-slate-800 backdrop-blur hover:bg-white active:translate-y-[1px]"
            >
              Tìm hiểu thêm
            </a>
          </div>
        </div>

        {/* Thanh 3 thẻ nổi đè lên ảnh */}
        <div className="absolute left-6 right-6 md:left-8 md:right-8 top-[320px] md:top-[360px]">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <FeatureCard
              tone="blue"
              icon={<Handshake className="h-5 w-5" />}
              title="Đồng sở hữu"
              desc="Quản lý tỷ lệ sở hữu linh hoạt"
            />
            <FeatureCard
              tone="indigo"
              icon={<CalendarRange className="h-5 w-5" />}
              title="Lịch thông minh"
              desc="AI tối ưu hoá booking"
            />
            <FeatureCard
              tone="sky"
              icon={<BadgeDollarSign className="h-5 w-5" />}
              title="Chi phí minh bạch"
              desc="Phân bổ tự động & công bằng"
            />
          </div>
        </div>

        {/* Đệm để lộ phần thân xe như mock */}
        <div className="h-[380px]" />
      </div>

      {/* (Footer riêng đã có component; phần này chỉ là hero) */}
    </section>
  );
}

function FeatureCard({ tone, icon, title, desc }) {
  const toneCls =
    tone === "blue"
      ? "bg-blue-50 text-blue-600"
      : tone === "indigo"
      ? "bg-indigo-50 text-indigo-600"
      : "bg-sky-50 text-sky-600";

  return (
    <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white/75 p-4 shadow-[0_20px_60px_rgba(2,6,23,0.06)] backdrop-blur">
      <div className={`rounded-lg p-2 ${toneCls}`}>{icon}</div>
      <div>
        <div className="font-semibold text-slate-900">{title}</div>
        <div className="text-sm text-slate-500">{desc}</div>
      </div>
    </div>
  );
}
