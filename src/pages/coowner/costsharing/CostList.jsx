// src/pages/coowner/costsharing/CostList.jsx
import { WalletCards, Fuel, Wrench, ShieldCheck, Sparkles } from "lucide-react";

const costCards = [
  { label: "Sạc điện", mode: "Theo sử dụng", amount: "1.250.000đ", icon: Fuel },
  { label: "Bảo dưỡng", mode: "Theo % sở hữu", amount: "3.500.000đ", icon: Wrench },
  { label: "Bảo hiểm", mode: "Theo % sở hữu", amount: "8.500.000đ", icon: ShieldCheck },
  { label: "Vệ sinh", mode: "Theo sử dụng", amount: "300.000đ", icon: Sparkles },
];

const history = [
  { month: "Tháng 3", amount: "2.450.000đ", status: "Đã thanh toán", date: "15/03/2024" },
  { month: "Tháng 2", amount: "2.680.000đ", status: "Đã thanh toán", date: "15/02/2024" },
  { month: "Tháng 1", amount: "2.329.000đ", status: "Đã thanh toán", date: "15/01/2024" },
];

export default function CostList() {
  return (
    <section className="bg-slate-100">
      <div className="mx-auto max-w-[1200px] px-6 py-8 md:px-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-emerald-600">
              EV Co-ownership • Đồng sở hữu
            </p>
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">
              Chi phí & Thanh toán
            </h1>
            <p className="mt-1 text-sm text-slate-600">
              Theo dõi và quản lý chi phí sử dụng xe. Hệ thống tự động chia theo % sở hữu hoặc mức sử dụng.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1.2fr)]">
          {/* OVERVIEW */}
          <div className="space-y-4">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h2 className="text-base md:text-lg font-semibold text-slate-900">
                    Chi phí tháng này
                  </h2>
                  <p className="mt-1 text-xs text-slate-500">
                    Tổng chi phí nhóm & phần của bạn (40% sở hữu)
                  </p>
                </div>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <WalletCards className="h-5 w-5" />
                </span>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="text-xs font-medium text-slate-500">Tổng chi phí nhóm</div>
                  <div className="mt-1 text-2xl font-extrabold text-slate-900">
                    13.550.000₫
                  </div>
                </div>
                <div className="rounded-2xl bg-emerald-50/80 p-4">
                  <div className="text-xs font-medium text-emerald-700">Phần của bạn (40%)</div>
                  <div className="mt-1 text-2xl font-extrabold text-emerald-700">
                    5.420.000₫
                  </div>
                  <div className="mt-1 text-xs text-emerald-800">Trạng thái: Đã thanh toán</div>
                </div>
              </div>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {costCards.map(({ label, mode, amount, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-3 py-3"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm">
                      <Icon className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-semibold text-slate-900">
                          {label}
                        </span>
                        <span className="font-semibold text-slate-900">
                          {amount}
                        </span>
                      </div>
                      <div className="text-xs text-slate-500">{mode}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* HISTORY */}
          <div className="space-y-4">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-base font-semibold text-slate-900">
                Lịch sử thanh toán
              </h2>
              <div className="mt-3 space-y-3 text-sm">
                {history.map((item) => (
                  <div
                    key={item.month}
                    className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <div className="font-semibold text-slate-900">
                          Chi phí {item.month}
                        </div>
                        <div className="text-xs text-slate-500">
                          Thanh toán: {item.date}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-slate-900">
                          {item.amount}
                        </div>
                        <div className="text-xs text-emerald-700">
                          {item.status}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-3 w-full rounded-xl border border-slate-200 bg-slate-50 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100">
                Xem chi tiết từng khoản
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
