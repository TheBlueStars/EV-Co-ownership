// src/pages/coowner/costsharing/ShareCalculator.jsx
import { Calculator } from "lucide-react";

export default function ShareCalculator() {
  return (
    <section className="bg-slate-100">
      <div className="mx-auto max-w-[800px] px-6 py-8 md:px-8">
        <div className="mb-6 flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900 text-white">
            <Calculator className="h-5 w-5" />
          </span>
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900">
              Bộ tính chia sẻ chi phí
            </h1>
            <p className="text-sm text-slate-600">
              Nhập tổng chi phí, tỉ lệ sở hữu và mức sử dụng để ước tính phần đóng góp của từng thành viên.
            </p>
          </div>
        </div>

        <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm text-sm">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Tổng chi phí
              </label>
              <input
                type="number"
                placeholder="13550000"
                className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 outline-none focus:border-emerald-500 focus:bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Đơn vị
              </label>
              <input
                type="text"
                disabled
                value="VNĐ"
                className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-slate-500 outline-none"
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {["Nguyễn Văn A (40%)", "Trần Thị B (30%)", "Lê Văn C (30%)"].map(
              (name) => (
                <div key={name}>
                  <label className="block text-xs font-medium text-slate-700">
                    {name}
                  </label>
                  <input
                    type="number"
                    placeholder="km / số chuyến"
                    className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs outline-none focus:border-emerald-500 focus:bg-white"
                  />
                </div>
              )
            )}
          </div>

          <button className="mt-2 w-full rounded-xl bg-emerald-600 py-2.5 text-sm font-medium text-white hover:bg-emerald-700 active:translate-y-[1px]">
            Tính thử phân bổ (mock)
          </button>

          <p className="mt-2 text-xs text-slate-500">
            Màn hình này chỉ là mô phỏng UI theo thiết kế. Khi kết nối backend, 
            bạn có thể gửi dữ liệu lên API để tính toán tự động.
          </p>
        </div>
      </div>
    </section>
  );
}
