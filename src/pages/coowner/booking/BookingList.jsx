// src/pages/coowner/booking/BookingList.jsx
import { CalendarRange, MapPin, User, CheckCircle2, Clock } from "lucide-react";

const upcoming = [
  {
    time: "8:00-12:00",
    owner: "Nguyễn Văn A",
    route: "Hà Nội → Hải Phòng",
    status: "Đã xác nhận",
  },
  {
    time: "14:00-18:00",
    owner: "Trần Thị B",
    route: "Nội thành",
    status: "Đang giữ chỗ",
  },
  {
    time: "09:00-17:00",
    owner: "Lê Văn C",
    route: "Hà Nội → Ninh Bình",
    status: "Đã xác nhận",
  },
];

const historyTrips = [
  { date: "20/10/2025", label: "Hiệu quả cao", km: "245 km", duration: "4h 30m", cost: "180.000đ" },
  { date: "18/10/2025", label: "Bình thường", km: "85 km", duration: "1h 45m", cost: "180.000đ" },
  { date: "15/10/2025", label: "Hiệu quả cao", km: "320 km", duration: "5h 20m", cost: "240.000đ" },
];

export default function BookingList() {
  return (
    <section className="bg-slate-100">
      <div className="mx-auto max-w-[1200px] px-6 py-8 md:px-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-emerald-600">
              EV Co-ownership • Đồng sở hữu
            </p>
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">
              Đặt lịch & Sử dụng xe
            </h1>
            <p className="mt-1 text-sm text-slate-600">
              Quản lý lịch trình và đặt chỗ cho xe của bạn. AI sẽ ưu tiên công bằng dựa trên tỉ lệ sở hữu.
            </p>
          </div>
          <a
            href="/coowner/booking/create"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white shadow hover:bg-emerald-700 active:translate-y-[1px]"
          >
            Đặt lịch mới
            <CalendarRange className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1.1fr)]">
          {/* LỊCH ĐẶT */}
          <div className="space-y-4">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-base md:text-lg font-semibold text-slate-900">
                  Lịch sử dụng hôm nay
                </h2>
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                  <CalendarRange className="h-3.5 w-3.5" />
                  20/10/2025
                </span>
              </div>

              <div className="space-y-3">
                {upcoming.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-900">
                          {item.time}
                        </div>
                        <div className="flex flex-wrap items-center gap-x-4 text-xs text-slate-600">
                          <span className="inline-flex items-center gap-1">
                            <User className="h-3.5 w-3.5" />
                            {item.owner}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" />
                            {item.route}
                          </span>
                        </div>
                      </div>
                    </div>

                    <span
                      className={
                        "rounded-full px-3 py-1 text-xs font-medium " +
                        (item.status === "Đã xác nhận"
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-amber-50 text-amber-700")
                      }
                    >
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-3 text-xs text-slate-500">
                Hệ thống ưu tiên thông minh: nếu bạn dùng ít hơn tỉ lệ sở hữu, các lịch tiếp theo sẽ được ưu tiên.
              </p>
            </div>

            <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-600">
              <p className="font-medium text-slate-800 mb-1">
                Hệ thống ưu tiên thông minh
              </p>
              <p>
                AI tự động phân bổ lịch công bằng dựa trên tỉ lệ sở hữu và lịch sử sử dụng của từng thành viên.
              </p>
            </div>
          </div>

          {/* LỊCH SỬ + % SỬ DỤNG */}
          <div className="space-y-4">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-base font-semibold text-slate-900">
                Lịch sử hành trình
              </h2>
              <div className="mt-3 space-y-3">
                {historyTrips.map((trip, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="font-medium text-slate-900">{trip.date}</div>
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        {trip.label}
                      </span>
                    </div>
                    <div className="mt-1 flex flex-wrap gap-4 text-xs text-slate-600">
                      <span>{trip.km}</span>
                      <span>{trip.duration}</span>
                      <span className="font-semibold text-slate-900">
                        {trip.cost}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-base font-semibold text-slate-900">
                Mức sử dụng so với % sở hữu
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                38% / 40% sở hữu — bạn đang dùng ít hơn phần sở hữu của mình.
              </p>
              <div className="mt-3 space-y-2 text-xs text-slate-600">
                <div className="flex items-center justify-between">
                  <span>Tỉ lệ sử dụng của bạn</span>
                  <span className="font-semibold text-slate-900">38%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-100">
                  <div className="h-2 w-[38%] rounded-full bg-emerald-500" />
                </div>

                <div className="mt-2 flex items-center justify-between">
                  <span>Tỉ lệ sở hữu</span>
                  <span className="font-semibold text-slate-900">40%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-100">
                  <div className="h-2 w-[40%] rounded-full bg-sky-500" />
                </div>
              </div>
              <p className="mt-3 text-xs text-slate-500">
                Hệ thống sẽ ưu tiên bạn trong các lịch đặt tiếp theo để cân bằng quyền lợi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
