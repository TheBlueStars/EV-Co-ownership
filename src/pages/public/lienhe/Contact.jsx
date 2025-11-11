export default function Contact() {
  const faqs = [
    ["Làm thế nào để bắt đầu sử dụng EV Co-ownership?", "Đăng ký tài khoản, tạo nhóm sở hữu, thêm xe & mời thành viên. Hệ thống sẽ hướng dẫn chi tiết từng bước."],
    ["Chi phí sử dụng tính thế nào?", "Có gói miễn phí và gói nâng cao theo tháng. Ngoài ra chi phí sử dụng xe có thể chia theo % hoặc theo mức dùng."],
    ["Hệ thống có hỗ trợ thanh toán trực tuyến không?", "Có. Hỗ trợ chuyển khoản/QR nội địa, thẻ, và ví điện tử phổ biến tại Việt Nam."],
  ];

  return (
    <section className="bg-slate-100">
      <div className="mx-auto max-w-[1200px] rounded-3xl border border-slate-200 bg-white px-6 py-12 md:px-8">
        <header className="mb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm text-emerald-700 ring-1 ring-emerald-100">Liên hệ tư vấn</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-slate-900">Chúng tôi sẵn sàng <span className="text-[#1e90ff]">hỗ trợ bạn</span></h2>
          <p className="mt-3 max-w-2xl text-slate-600">Đội ngũ kỹ thuật & hỗ trợ luôn sẵn sàng 24/7.</p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Form */}
          <form className="rounded-2xl border border-slate-200 bg-white p-6 space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Input label="Họ và tên" />
              <Input label="Email" type="email" />
              <Input label="Số điện thoại" />
              <Input label="Chủ đề" />
            </div>
            <div>
              <label className="text-sm text-slate-700">Nội dung</label>
              <textarea rows={6} className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none focus:ring-4 ring-slate-300/40" />
            </div>
            <div className="flex gap-3">
              <button className="rounded-xl bg-[#1e90ff] px-5 py-2.5 text-white hover:brightness-110">Gửi tin nhắn</button>
              <button type="reset" className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-slate-800 hover:bg-slate-50">Xóa</button>
            </div>
          </form>

          {/* Info + Map */}
          <div className="space-y-4">
            <InfoCard title="Địa chỉ văn phòng" value="123 Đường ABC, Quận 1, TP.HCM" />
            <InfoCard title="Điện thoại" value="+84 123 456 789" />
            <InfoCard title="Email" value="support@ev-coownership.vn" />
            <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-sky-50 to-white p-6">
              <div className="text-sm text-slate-700">Bản đồ văn phòng</div>
              <div className="mt-3 h-48 w-full rounded-xl bg-[linear-gradient(135deg,#e2e8f0_25%,transparent_25%,transparent_50%,#e2e8f0_50%,#e2e8f0_75%,transparent_75%,transparent)] bg-[length:20px_20px]" />
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-8 space-y-3">
          {faqs.map(([q, a]) => (
            <details key={q} className="group rounded-2xl border border-slate-200 bg-white p-5">
              <summary className="cursor-pointer list-none font-semibold text-slate-900 marker:content-['']">
                {q}
                <span className="float-right text-slate-400 transition group-open:rotate-180">▾</span>
              </summary>
              <p className="mt-2 text-sm text-slate-600">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Input({ label, type = "text" }) {
  return (
    <div>
      <label className="text-sm text-slate-700">{label}</label>
      <input type={type} className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none focus:ring-4 ring-slate-300/40" />
    </div>
  );
}
function InfoCard({ title, value }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="text-sm text-slate-700">{title}</div>
      <div className="mt-1 font-medium text-slate-900">{value}</div>
    </div>
  );
}
