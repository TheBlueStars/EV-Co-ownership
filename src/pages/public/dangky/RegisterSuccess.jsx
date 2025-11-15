// src/pages/public/dangky/RegisterSuccess.jsx
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function RegisterSuccess() {
  return (
    <section className="bg-slate-100 min-h-[60vh]">
      <div className="mx-auto flex max-w-[560px] flex-col items-center px-6 py-16 text-center">
        <CheckCircle2 className="h-14 w-14 text-emerald-500" />
        <h1 className="mt-4 text-2xl md:text-3xl font-extrabold text-slate-900">
          Đăng ký tài khoản thành công!
        </h1>
        <p className="mt-2 text-sm md:text-base text-slate-600">
          Chào mừng bạn đến với{" "}
          <span className="font-semibold text-emerald-600">EV Co-ownership</span>.
          Bây giờ bạn có thể đăng nhập để quản lý nhóm đồng sở hữu và đặt lịch xe điện.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href="/dangnhap"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-emerald-700 active:translate-y-[1px]"
          >
            Đăng nhập ngay
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-50"
          >
            Về trang chủ
          </a>
        </div>

        <p className="mt-4 text-xs text-slate-500">
          Nếu bạn không nhận được email xác nhận, hãy kiểm tra hộp thư rác hoặc liên hệ đội hỗ trợ.
        </p>
      </div>
    </section>
  );
}
