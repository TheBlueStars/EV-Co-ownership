// src/pages/admin/finance/CostRules.jsx
import { WalletCards, Settings } from "lucide-react";

const rules = [
  {
    type: "Sạc điện",
    mode: "Theo mức sử dụng (km / kWh)",
    note: "Phân bổ dựa trên số km từng thành viên sử dụng trong kỳ.",
  },
  {
    type: "Bảo dưỡng",
    mode: "Theo % sở hữu",
    note: "Chia theo tỉ lệ 40% - 30% - 30.",
  },
  {
    type: "Bảo hiểm",
    mode: "Theo % sở hữu",
    note: "Tương tự bảo dưỡng, áp dụng cho phí bảo hiểm năm.",
  },
];

export default function CostRules() {
  return (
    <section className="bg-slate-100">
      <div className="mx-auto max-w-[900px] px-4 py-6 md:px-6">
        <div className="mb-4 flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-white">
            <WalletCards className="h-4 w-4" />
          </span>
          <div>
            <h1 className="text-lg md:text-xl font-extrabold text-slate-900">
              Quy tắc chia sẻ chi phí
            </h1>
            <p className="text-xs text-slate-600">
              Cấu hình cách chia cho từng loại chi phí giữa các đồng sở hữu.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {rules.map((r) => (
            <div
              key={r.type}
              className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm text-sm"
            >
              <div className="flex items-center justify-between gap-2">
                <div>
                  <div className="font-semibold text-slate-900">{r.type}</div>
                  <div className="text-xs text-slate-500">{r.mode}</div>
                </div>
                <button className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-800 hover:bg-slate-50">
                  <Settings className="mr-1 h-3.5 w-3.5 inline" />
                  Chỉnh sửa
                </button>
              </div>
              <p className="mt-2 text-xs text-slate-600">{r.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
