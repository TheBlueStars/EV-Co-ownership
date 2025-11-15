// src/pages/coowner/costsharing/CostDetail.jsx
import { WalletCards } from "lucide-react";

export default function CostDetail() {
  return (
    <section className="bg-slate-100">
      <div className="mx-auto max-w-[800px] px-6 py-8 md:px-8">
        <div className="mb-6 flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
            <WalletCards className="h-5 w-5" />
          </span>
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900">
              Chi tiết chi phí tháng 3/2024
            </h1>
            <p className="text-sm text-slate-600">
              Tách từng khoản chi và phần đóng góp của bạn (40% sở hữu).
            </p>
          </div>
        </div>

        <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm text-sm">
          <div className="flex items-center justify-between">
            <span>Tổng chi phí nhóm</span>
            <span className="font-semibold text-slate-900">13.550.000đ</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Phần bạn phải trả (40%)</span>
            <span className="font-semibold text-slate-900">5.420.000đ</span>
          </div>

          <hr className="my-2 border-slate-200" />

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span>Sạc điện (theo sử dụng)</span>
              <span>1.250.000đ</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Bảo dưỡng (theo % sở hữu)</span>
              <span>3.500.000đ</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Bảo hiểm (theo % sở hữu)</span>
              <span>8.500.000đ</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Vệ sinh xe (theo sử dụng)</span>
              <span>300.000đ</span>
            </div>
          </div>

          <p className="mt-2 text-xs text-slate-500">
            Các khoản “theo sử dụng” được phân bổ dựa trên km & số chuyến đi của từng thành viên. 
            Các khoản “theo % sở hữu” chia theo tỉ lệ 40% - 30% - 30%.
          </p>
        </div>
      </div>
    </section>
  );
}
