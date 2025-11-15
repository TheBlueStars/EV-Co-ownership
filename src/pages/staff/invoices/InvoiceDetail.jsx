// src/pages/staff/invoices/InvoiceDetail.jsx
import { Receipt, WalletCards, Download, Mail } from "lucide-react";

export default function InvoiceDetail() {
  return (
    <section className="bg-slate-100">
      <div className="mx-auto max-w-[800px] px-4 py-6 md:px-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900 text-white">
              <Receipt className="h-5 w-5" />
            </span>
            <div>
              <h1 className="text-xl font-extrabold text-slate-900">
                Hóa đơn kỳ 10/2025 – Nguyễn Văn A
              </h1>
              <p className="text-xs text-slate-600">
                Mã: <span className="font-mono">INV-202510-001</span> • Ngày
                tạo: 05/11/2025
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 text-xs">
            <button className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-slate-700 hover:bg-slate-50">
              <Download className="h-3.5 w-3.5" />
              Tải PDF
            </button>
            <button className="inline-flex items-center gap-1 rounded-xl bg-emerald-600 px-3 py-1.5 font-medium text-white hover:bg-emerald-700 active:translate-y-[1px]">
              <Mail className="h-3.5 w-3.5" />
              Gửi email
            </button>
          </div>
        </div>

        <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm text-sm">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Người được xuất hóa đơn
              </h2>
              <p className="mt-1 text-sm text-slate-800">
                Nguyễn Văn A
                <br />
                Nhóm EV-Group-01
              </p>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Thông tin thanh toán
              </h2>
              <p className="mt-1 text-sm text-slate-800">
                Tổng tiền: <span className="font-semibold">5.420.000đ</span>
                <br />
                Trạng thái:{" "}
                <span className="font-semibold text-emerald-700">
                  Đã thanh toán
                </span>
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Chi tiết chi phí
            </h2>
            <div className="mt-2 space-y-2 text-sm text-slate-700">
              <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2">
                <span>Sạc điện (theo sử dụng)</span>
                <span>1.250.000đ</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2">
                <span>Bảo dưỡng (theo % sở hữu)</span>
                <span>2.800.000đ</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2">
                <span>Bảo hiểm (theo % sở hữu)</span>
                <span>1.200.000đ</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2">
                <span>Vệ sinh xe (theo sử dụng)</span>
                <span>170.000đ</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-emerald-50 p-3 text-xs text-emerald-900">
            <div className="flex items-center gap-2">
              <WalletCards className="h-3.5 w-3.5" />
              <span className="font-semibold">Ghi chú:</span>
            </div>
            <p className="mt-1">
              Hóa đơn đã được thanh toán qua cổng thanh toán online vào
              06/11/2025. Mọi thắc mắc, vui lòng liên hệ hotline hỗ trợ.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
