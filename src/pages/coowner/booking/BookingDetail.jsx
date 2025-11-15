// src/pages/coowner/booking/BookingDetail.jsx
import { CalendarRange, MapPin, User, Car, Clock, BadgeCheck } from "lucide-react";

export default function BookingDetail() {
  return (
    <section className="bg-slate-100">
      <div className="mx-auto max-w-[800px] px-6 py-8 md:px-8">
        <div className="mb-6 flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
            <BadgeCheck className="h-5 w-5" />
          </span>
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900">
              Chi tiết lịch đặt xe
            </h1>
            <p className="text-sm text-slate-600">
              Mã đặt chỗ: <span className="font-mono">BK-20251109-DFF250</span>
            </p>
          </div>
        </div>

        <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Thông tin chuyến đi
              </h2>
              <div className="text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <Car className="h-4 w-4 text-slate-500" />
                  <span className="font-medium text-slate-900">Tesla Model 3</span>
                  <span className="ml-2 text-xs text-slate-500">(VIN123ABC)</span>
                </div>
                <div className="mt-1 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-slate-500" />
                  <span>Hà Nội → Hải Phòng</span>
                </div>
                <div className="mt-1 flex items-center gap-2">
                  <User className="h-4 w-4 text-slate-500" />
                  <span>Người đặt: Nguyễn Văn A (40% sở hữu)</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Thời gian
              </h2>
              <div className="text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <CalendarRange className="h-4 w-4 text-slate-500" />
                  <span>20/10/2025</span>
                </div>
                <div className="mt-1 flex items-center gap-2">
                  <Clock className="h-4 w-4 text-slate-500" />
                  <span>8:00 - 12:00</span>
                </div>
                <div className="mt-1">
                  Trạng thái:{" "}
                  <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
                    Đã xác nhận
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Ghi chú
            </h2>
            <p className="mt-1 text-sm text-slate-700">
              Chuyến đi công tác, ưu tiên sạc đầy trước 7:30, thời gian di chuyển dự kiến khoảng 2 giờ.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50">
              Quay lại danh sách
            </button>
            <button className="rounded-xl bg-rose-50 px-4 py-2 text-sm font-medium text-rose-700 hover:bg-rose-100">
              Hủy lịch (nếu được phép)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
