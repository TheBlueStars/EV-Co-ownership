// src/pages/staff/invoices/InvoiceList.jsx
import { Receipt, Filter, Search } from "lucide-react";

const invoices = [
  {
    code: "INV-202510-001",
    coOwner: "Nguyễn Văn A",
    month: "10/2025",
    amount: "5.420.000đ",
    status: "Đã thanh toán",
  },
  {
    code: "INV-202510-002",
    coOwner: "Trần Thị B",
    month: "10/2025",
    amount: "4.050.000đ",
    status: "Chờ thanh toán",
  },
];

export default function InvoiceList() {
  return (
    <section className="bg-slate-100">
      <div className="mx-auto max-w-[1100px] px-4 py-6 md:px-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-white">
              <Receipt className="h-4 w-4" />
            </span>
            <div>
              <h1 className="text-lg md:text-xl font-extrabold text-slate-900">
                Hóa đơn & thanh toán
              </h1>
              <p className="text-xs text-slate-600">
                Staff theo dõi trạng thái hóa đơn hàng tháng của các nhóm.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 text-xs">
            <button className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-slate-700 hover:bg-slate-50">
              <Search className="h-3.5 w-3.5" />
              Tìm theo mã / tên
            </button>
            <button className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-slate-700 hover:bg-slate-50">
              <Filter className="h-3.5 w-3.5" />
              Bộ lọc trạng thái
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <table className="min-w-full text-xs md:text-sm">
            <thead className="bg-slate-50 text-[11px] uppercase text-slate-500">
              <tr>
                <th className="px-3 py-3 text-left">Mã hóa đơn</th>
                <th className="px-3 py-3 text-left">Đồng sở hữu</th>
                <th className="px-3 py-3 text-left">Kỳ</th>
                <th className="px-3 py-3 text-left">Số tiền</th>
                <th className="px-3 py-3 text-left">Trạng thái</th>
                <th className="px-3 py-3 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((i, idx) => (
                <tr
                  key={i.code}
                  className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"}
                >
                  <td className="px-3 py-3 font-mono text-xs text-slate-800">
                    {i.code}
                  </td>
                  <td className="px-3 py-3 text-slate-900">{i.coOwner}</td>
                  <td className="px-3 py-3 text-slate-700">{i.month}</td>
                  <td className="px-3 py-3 text-slate-900 font-semibold">
                    {i.amount}
                  </td>
                  <td className="px-3 py-3">
                    <span
                      className={
                        "inline-flex rounded-full px-2.5 py-1 text-[11px] font-medium " +
                        (i.status === "Đã thanh toán"
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-amber-50 text-amber-700")
                      }
                    >
                      {i.status}
                    </span>
                  </td>
                  <td className="px-3 py-3 text-right">
                    <button className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-medium text-slate-800 hover:bg-slate-50">
                      Xem chi tiết
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-3 text-xs text-slate-500">
          Có thể bổ sung export PDF, gửi email nhắc thanh toán ngay từ màn hình
          này.
        </p>
      </div>
    </section>
  );
}
