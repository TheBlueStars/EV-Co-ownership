// src/pages/public/lienhe/ContactForm.jsx
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactForm() {
  return (
    <section className="bg-slate-100">
      <div className="mx-auto max-w-[1200px] px-6 py-10 md:px-8">
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">
            Liên hệ với chúng tôi
          </h1>
          <p className="mt-2 text-slate-600 max-w-2xl">
            Có câu hỏi hoặc cần hỗ trợ? Đội ngũ EV Co-ownership sẵn sàng hỗ trợ bạn 24/7.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
          {/* FORM */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-7 shadow-sm">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100">
                <Send className="h-3 w-3" />
              </span>
              Gửi tin nhắn cho chúng tôi
            </div>

            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Họ và tên*
                  </label>
                  <input
                    type="text"
                    placeholder="Nguyễn Văn A"
                    className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none ring-0 focus:border-emerald-500 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Số điện thoại
                  </label>
                  <input
                    type="tel"
                    placeholder="+84 123 456 789"
                    className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Email*
                  </label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Chủ đề
                  </label>
                  <input
                    type="text"
                    placeholder="Yêu cầu hỗ trợ"
                    className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Nội dung tin nhắn*
                </label>
                <textarea
                  rows={4}
                  placeholder="Nhập nội dung tin nhắn của bạn..."
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:bg-white"
                />
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-emerald-700 active:translate-y-[1px]"
                >
                  Gửi tin nhắn
                  <Send className="h-4 w-4" />
                </button>
                <button
                  type="reset"
                  className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  Xóa
                </button>
              </div>

              <p className="mt-2 text-xs text-slate-500">
                Chúng tôi sẽ phản hồi trong vòng 24 giờ làm việc.
              </p>
            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="space-y-4">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                Địa chỉ văn phòng
              </h3>
              <div className="mt-2 flex items-start gap-3 text-sm text-slate-600">
                <span className="mt-0.5 rounded-full bg-slate-100 p-1.5">
                  <MapPin className="h-4 w-4 text-emerald-600" />
                </span>
                <p>
                  123 Đường ABC, Quận 1
                  <br />
                  TP. Hồ Chí Minh, Việt Nam
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                Điện thoại
              </h3>
              <div className="mt-2 flex items-start gap-3 text-sm text-slate-600">
                <span className="mt-0.5 rounded-full bg-slate-100 p-1.5">
                  <Phone className="h-4 w-4 text-emerald-600" />
                </span>
                <div>
                  <p>Hotline: +84 123 456 789</p>
                  <p>Hỗ trợ: +84 987 654 321</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">Email</h3>
              <div className="mt-2 flex items-start gap-3 text-sm text-slate-600">
                <span className="mt-0.5 rounded-full bg-slate-100 p-1.5">
                  <Mail className="h-4 w-4 text-emerald-600" />
                </span>
                <div>
                  <p>support@ev-coownership.vn</p>
                  <p>sales@ev-coownership.vn</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-5 text-sm text-slate-600">
              <p className="font-medium text-slate-800 mb-1">
                Câu hỏi thường gặp
              </p>
              <p>
                • Chi phí sử dụng nền tảng như thế nào?
                <br />
                • Hệ thống có hỗ trợ thanh toán trực tuyến không?
                <br />
                • Làm thế nào để bắt đầu sử dụng EV Co-ownership?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
