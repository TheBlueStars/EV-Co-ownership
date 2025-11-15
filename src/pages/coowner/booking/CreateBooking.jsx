// src/pages/coowner/booking/CreateBooking.jsx
import { CalendarRange, MapPin, Car, Clock } from "lucide-react";

export default function CreateBooking() {
  return (
    <section className="bg-slate-100">
      <div className="mx-auto max-w-[800px] px-6 py-8 md:px-8">
        <div className="mb-6 flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
            <CalendarRange className="h-5 w-5" />
          </span>
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900">Đặt lịch mới</h1>
            <p className="text-sm text-slate-600">
              Chọn thời gian và mục đích chuyến đi. Hệ thống sẽ kiểm tra xung đột và ưu tiên công bằng.
            </p>
          </div>
        </div>

        <form className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Xe
              </label>
              <div className="mt-1 flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm">
                <Car className="h-4 w-4 text-slate-500" />
                <select className="w-full bg-transparent outline-none">
                  <option>Tesla Model 3</option>
                  <option>VinFast VF8</option>
                  <option>Hyundai Ioniq 5</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Mục đích chuyến đi
              </label>
              <input
                type="text"
                placeholder="Ví dụ: Hà Nội → Hải Phòng"
                className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:bg-white"
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Thời gian bắt đầu
              </label>
              <div className="mt-1 flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm">
                <Clock className="h-4 w-4 text-slate-500" />
                <input
                  type="datetime-local"
                  className="w-full bg-transparent outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Thời gian kết thúc
              </label>
              <div className="mt-1 flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm">
                <Clock className="h-4 w-4 text-slate-500" />
                <input
                  type="datetime-local"
                  className="w-full bg-transparent outline-none"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">
              Ghi chú cho nhóm
            </label>
            <textarea
              rows={3}
              placeholder="Thông tin thêm cho các đồng sở hữu (nếu có)..."
              className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:bg-white"
            />
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <button
              type="submit"
              className="rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-emerald-700 active:translate-y-[1px]"
            >
              Gửi yêu cầu đặt lịch
            </button>
            <a
              href="/coowner/booking"
              className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-50"
            >
              Hủy
            </a>
          </div>

          <p className="mt-2 text-xs text-slate-500">
            Hệ thống sẽ kiểm tra trùng lịch với các thành viên khác và thông báo kết quả.
          </p>
        </form>
      </div>
    </section>
  );
}
