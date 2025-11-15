// src/pages/coowner/fund/FundTransaction.jsx
import { ArrowDownRight, ArrowUpRight, PiggyBank } from "lucide-react";

const transactions = [
  { id: "FUND-001", type: "Nạp quỹ", amount: "+5.000.000đ", date: "05/10/2025", note: "Nạp quỹ định kỳ", dir: "in" },
  { id: "FUND-002", type: "Chi bảo dưỡng", amount: "-2.000.000đ", date: "10/10/2025", note: "Bảo dưỡng định kỳ", dir: "out" },
  { id: "FUND-003", type: "Chi vệ sinh", amount: "-500.000đ", date: "18/10/2025", note: "Vệ sinh nội thất", dir: "out" },
];

export default function FundTransaction() {
  return (
    <section className="bg-slate-100">
      <div className="mx-auto max-w-[900px] px-6 py-8 md:px-8">
        <div className="mb-6 flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900 text-white">
            <PiggyBank className="h-5 w-5" />
          </span>
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900">
              Sổ quỹ chung
            </h1>
            <p className="text-sm text-slate-600">
              Mọi giao dịch thu/chi đều được ghi nhận để đảm bảo minh bạch.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-50 text-xs uppercase text-slate-500">
              <tr>
                <th className="px-4 py-3 text-left">Mã giao dịch</th>
                <th className="px-4 py-3 text-left">Loại</th>
                <th className="px-4 py-3 text-right">Số tiền</th>
                <th className="px-4 py-3 text-left">Ngày</th>
                <th className="px-4 py-3 text-left">Ghi chú</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((t, idx) => (
                <tr
                  key={t.id}
                  className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"}
                >
                  <td className="px-4 py-3 font-mono text-xs text-slate-700">
                    {t.id}
                  </td>
                  <td className="px-4 py-3 text-slate-800">{t.type}</td>
                  <td
                    className={
                      "px-4 py-3 text-right font-semibold " +
                      (t.dir === "in" ? "text-emerald-700" : "text-rose-700")
                    }
                  >
                    <span className="inline-flex items-center gap-1">
                      {t.dir === "in" ? (
                        <ArrowDownRight className="h-4 w-4" />
                      ) : (
                        <ArrowUpRight className="h-4 w-4" />
                      )}
                      {t.amount}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-700">{t.date}</td>
                  <td className="px-4 py-3 text-slate-500">{t.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-3 text-xs text-slate-500">
          Khi tích hợp backend, màn hình này có thể phân trang, lọc theo ngày, loại giao dịch, và xuất file CSV/PDF.
        </p>
      </div>
    </section>
  );
}
