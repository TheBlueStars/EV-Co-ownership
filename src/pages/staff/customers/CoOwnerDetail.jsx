// src/pages/staff/customers/CoOwnerDetail.jsx
import { Users, Phone, Mail, Car, WalletCards, CalendarRange } from "lucide-react";

export default function CoOwnerDetail() {
  return (
    <section className="bg-slate-100">
      <div className="mx-auto max-w-[1000px] px-4 py-6 md:px-6">
        <div className="mb-4 flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900 text-white">
            <Users className="h-5 w-5" />
          </span>
          <div>
            <h1 className="text-xl font-extrabold text-slate-900">
              Hồ sơ đồng sở hữu – Nguyễn Văn A
            </h1>
            <p className="text-xs text-slate-600">
              Thành viên nhóm EV-Group-01 • 40% sở hữu Tesla Model 3
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)]">
          <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm text-sm">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Thông tin liên hệ
            </h2>
            <div className="mt-2 space-y-2 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-slate-500" />
                <span>0901 234 567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-slate-500" />
                <span>nguyenvana@example.com</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarRange className="h-4 w-4 text-slate-500" />
                <span>Tham gia từ: 01/2024</span>
              </div>
            </div>

            <h2 className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
              Tỉ lệ sở hữu & trạng thái
            </h2>
            <div className="mt-2 text-sm text-slate-700">
              <div className="flex items-center justify-between">
                <span>Tỉ lệ sở hữu</span>
                <span className="font-semibold text-slate-900">40%</span>
              </div>
              <div className="mt-1 h-2 rounded-full bg-slate-100">
                <div className="h-2 w-[40%] rounded-full bg-emerald-500" />
              </div>
              <p className="mt-2 text-xs text-slate-500">
                Trạng thái tài khoản:{" "}
                <span className="font-semibold text-emerald-700">
                  Đang hoạt động
                </span>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm text-sm">
              <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Xe đồng sở hữu
              </h2>
              <div className="mt-2 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <Car className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">
                    Tesla Model 3
                  </div>
                  <div className="text-xs text-slate-500">
                    Biển số: 30A-123.45 • Vin: TESLA-001
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm text-sm">
              <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Tóm tắt sử dụng & chi phí
              </h2>
              <div className="mt-2 grid gap-3 md:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-3">
                  <div className="text-[11px] text-slate-500">
                    Mức sử dụng tháng này
                  </div>
                  <div className="text-lg font-extrabold text-slate-900">
                    38%
                  </div>
                </div>
                <div className="rounded-2xl bg-slate-50 p-3">
                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span>Chi phí đã thanh toán</span>
                    <WalletCards className="h-3.5 w-3.5 text-slate-500" />
                  </div>
                  <div className="text-lg font-extrabold text-slate-900">
                    5.420.000đ
                  </div>
                </div>
              </div>
              <p className="mt-2 text-xs text-slate-500">
                Staff có thể xem chi tiết booking, hóa đơn, lịch sử thanh toán
                ở các màn khác.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
