export default function AboutCoOwnership() {
  const stats = [
    ["500+", "Người dùng"], ["100+", "Nhóm xe"], ["50M+", "Giao dịch/tháng"], ["99.9%", "Uptime"],
  ];
  const values = [
    ["Sứ mệnh", "Tạo nền tảng quản lý đồng sở hữu an toàn, minh bạch, dễ dùng cho người Việt Nam."],
    ["Tầm nhìn", "Hệ thống phổ biến nhất cho nhóm đi chung xe & sở hữu xe điện ở Việt Nam & khu vực."],
    ["Giá trị cốt lõi", "Minh bạch, Công bằng, Hiệu quả. AI & Dữ liệu là vũ khí để tối ưu chi phí & trải nghiệm."],
  ];

  return (
    <section className="bg-slate-100">
      <div className="mx-auto max-w-[1200px] rounded-3xl border border-slate-200 bg-white px-6 py-12 md:px-8">
        <header className="mb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm text-emerald-700 ring-1 ring-emerald-100">Về chúng tôi</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-slate-900">
            Đi đầu trong <span className="text-[#1e90ff]">tương lai xanh</span>
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            EV Co-ownership với sứ mệnh giúp mọi người dễ dàng sở hữu và sử dụng xe điện chung qua nền tảng minh bạch & bền vững.
          </p>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map(([n, t]) => (
            <div key={t} className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-[0_16px_40px_rgba(2,6,23,.06)]">
              <div className="text-3xl font-extrabold text-slate-900">{n}</div>
              <div className="mt-1 text-sm text-slate-600">{t}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <h3 className="mt-10 text-2xl font-extrabold text-slate-900">Giá trị cốt lõi của chúng tôi</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {values.map(([title, desc]) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(2,6,23,.06)]">
              <div className="text-lg font-semibold text-slate-900">{title}</div>
              <div className="mt-2 text-sm text-slate-600">{desc}</div>
            </div>
          ))}
        </div>

        {/* Story */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
          <h4 className="text-xl font-semibold text-slate-900">Câu chuyện của chúng tôi</h4>
          <p className="mt-3 text-slate-600">
            Bắt đầu từ nhu cầu thực tế của các nhóm bạn, gia đình hay đội xe đi chung—chúng tôi xây dựng một hệ thống
            giúp đặt lịch, chia chi phí và theo dõi minh bạch. Từ đó, mọi người có thể tập trung tận hưởng hành trình xanh.
          </p>
        </div>
      </div>
    </section>
  );
}
