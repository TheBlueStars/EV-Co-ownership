// src/pages/admin/finance/FundConfig.jsx
import { PiggyBank, Settings } from "lucide-react";

export default function FundConfig() {
  return (
    <section className="bg-slate-100">
      <div className="mx-auto max-w-[800px] px-4 py-6 md:px-6">
        <div className="mb-4 flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-white">
            <PiggyBank className="h-4 w-4" />
          </span>
          <div>
            <h1 className="text-lg md:text-xl font-extrabold text-slate-900">
              Cấu hình quỹ chung
            </h1>
            <p className="text-xs text-slate-600">
              Định nghĩa cách đóng góp định kỳ và các giới hạn cho quỹ chung.
            </p>
          </div>
        </div>

        <div className="space-y-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm text-sm">
          <div>
            <div className="flex items-center justify-between">
              <span>Mức nạp định kỳ tối thiểu</span>
              <span className="font-semibold text-slate-900">
                1.000.000đ/tháng
              </span>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <span>Số dư cảnh báo thấp</span>
              <span className="font-semibold text-slate-900">
                5.000.000đ
              </span>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <span>Chi tối đa / 1 giao dịch</span>
              <span className="font-semibold text-slate-900">
                10.000.000đ
              </span>
            </div>
          </div>

          <button className="mt-3 inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-800 hover:bg-slate-50">
            <Settings className="h-3.5 w-3.5" />
            Cập nhật cấu hình (mock)
          </button>
        </div>
      </div>
    </section>
  );
}
