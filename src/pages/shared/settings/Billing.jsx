import { useState } from "react";
import { CreditCard, Download } from "lucide-react";

export default function Billing() {
  const [cards] = useState([
    { id: "1", brand: "Visa", last4: "4242", exp: "05/27", primary: true },
    { id: "2", brand: "Mastercard", last4: "2200", exp: "11/26", primary: false },
  ]);
  const [invoices] = useState([
    { id: "INV-2025-011", month: "11/2025", amount: 450000 },
    { id: "INV-2025-010", month: "10/2025", amount: 380000 },
  ]);

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">Thanh toán & Hoá đơn</h1>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <div className="mb-3 font-semibold text-slate-900">Phương thức thanh toán</div>
          <div className="space-y-3">
            {cards.map(c => (
              <div key={c.id} className="flex items-center justify-between rounded-xl border border-slate-200 p-3">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-slate-50 p-2"><CreditCard className="h-5 w-5 text-sky-600" /></div>
                  <div>
                    <div className="font-medium">{c.brand} •••• {c.last4}</div>
                    <div className="text-sm text-slate-500">Hết hạn {c.exp}</div>
                  </div>
                </div>
                {c.primary ? (
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs text-emerald-700">Mặc định</span>
                ) : (
                  <button className="text-sm text-[#1e90ff]">Đặt mặc định</button>
                )}
              </div>
            ))}
            <button className="mt-2 rounded-xl border border-slate-200 px-4 py-2">Thêm thẻ</button>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <div className="mb-3 font-semibold text-slate-900">Hoá đơn</div>
          <div className="divide-y rounded-xl border border-slate-200">
            {invoices.map(i => (
              <div key={i.id} className="flex items-center justify-between p-4">
                <div>
                  <div className="font-medium">{i.id}</div>
                  <div className="text-sm text-slate-500">{i.month}</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="font-semibold">{i.amount.toLocaleString()} đ</div>
                  <button className="rounded-xl border border-slate-200 px-3 py-1.5 text-sm">
                    <Download className="mr-1 inline h-4 w-4" /> PDF
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
