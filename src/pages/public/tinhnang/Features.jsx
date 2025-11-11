import { Handshake, CalendarRange, BadgeDollarSign, Car, ShieldCheck, Users } from "lucide-react";

export default function Features() {
  const items = [
    { Icon: Handshake,    tone: "text-blue-600",    title: "Đồng sở hữu linh hoạt",  desc: "Quản lý tỷ lệ sở hữu, quyền ưu tiên, e-contract." },
    { Icon: CalendarRange, tone: "text-indigo-600",  title: "Lịch thông minh",        desc: "AI tối ưu booking, tránh xung đột, thống kê." },
    { Icon: BadgeDollarSign, tone: "text-sky-600",   title: "Chia chi phí minh bạch", desc: "Theo % sở hữu hoặc theo mức dùng, đối soát tự động." },
    { Icon: Car,           tone: "text-emerald-600", title: "Tình trạng & bảo dưỡng",  desc: "Mốc bảo dưỡng, cảnh báo, lịch thay thế vật tư." },
    { Icon: Users,         tone: "text-violet-600",  title: "Biểu quyết & quỹ chung",  desc: "Tạo vote, thu-chi quỹ, báo cáo công khai." },
    { Icon: ShieldCheck,   tone: "text-teal-600",    title: "Bảo mật & nhật ký",       desc: "JWT, RBAC đa vai trò, audit log theo hành động." },
  ];

  return (
    <section className="bg-slate-100">
      <div className="mx-auto max-w-[1200px] rounded-3xl border border-slate-200 bg-white px-6 py-12 md:px-8">
        <header className="mb-8">
          <p className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm text-emerald-700 ring-1 ring-emerald-100">
            Giải pháp hoàn chỉnh
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-slate-900">
            Bộ tính năng{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-sky-500 bg-clip-text text-transparent">đầy đủ</span>{" "}
            cho đồng sở hữu
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Tập trung trải nghiệm, chúng tôi lo mọi thứ về lịch trình, chi phí và minh bạch.
          </p>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ Icon: IconComp, tone, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_16px_40px_rgba(2,6,23,.06)] transition hover:-translate-y-[2px] hover:shadow-[0_24px_60px_rgba(2,6,23,.10)]"
            >
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-slate-50 p-2">
                  <IconComp className={`h-6 w-6 ${tone}`} />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{title}</div>
                  <div className="mt-1 text-sm text-slate-600">{desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA section gradient */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-r from-emerald-500 to-sky-500 p-6 text-white shadow-[0_16px_40px_rgba(2,6,23,.12)]">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="text-lg font-medium">Sẵn sàng bắt đầu?</div>
            <div className="flex gap-3">
              <a href="/dangky" className="rounded-xl bg-white/95 px-5 py-2.5 text-slate-900 hover:brightness-110">
                Đăng ký ngay
              </a>
              <a href="/lienhe" className="rounded-xl border border-white/50 bg-transparent px-5 py-2.5 text-white hover:bg-white/10">
                Tư vấn miễn phí
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
