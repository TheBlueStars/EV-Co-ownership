// src/pages/admin/finance/Settlement.jsx
import { ArrowRightLeft, WalletCards } from "lucide-react";

const settlements = [
  {
    period: "10/2025",
    from: "Nguyễn Văn A",
    to: "Trần Thị B",
    amount: "350.000đ",
    reason: "Cân bằng mức sử dụng cao/thấp",
  },
];

export default function Settlement() {
  return (
    <section className="bg-slate-100">
      <div className="mx-auto max-w-[900px] px-4 py-6 md:px-6">
        <div className="mb-4 flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-white">
            <ArrowRightLeft className="h-4 w-4" />
          </span>
          <div>
            <h1 className="text-lg md:text-xl font-extrabold text-slate-900">
              Đối soát & bù trừ chi phí
            </h1>
            <p className="text-xs text-slate-600">
              Khi mức sử dụng lệch nhiều so với tỉ lệ sở hữu, hệ thống đề xuất
              bù trừ giữa các thành viên.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {settlements.map((s, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm text-sm"
            >
              <div className="flex items-center justify-between gap-2">
                <div>
                  <div className="text-xs text-slate-500">
                    Kỳ: {s.period}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-slate-900">
                    {s.from} ➝ {s.to}
                  </div>
                  <div className="text-xs text-slate-500">{s.reason}</div>
                </div>
                <div className="text-right">
                  <div className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    <WalletCards className="h-3.5 w-3.5" />
                    {s.amount}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
