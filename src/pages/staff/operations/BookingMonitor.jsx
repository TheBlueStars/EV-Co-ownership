// src/pages/staff/operations/BookingMonitor.jsx
import { CalendarRange, Activity, Clock, Car, Users } from "lucide-react";

const bookings = [
  {
    code: "BK-20251109-DFF250",
    time: "08:00 - 12:00",
    vehicle: "Tesla Model 3",
    group: "EV-Group-01",
    status: "Đang diễn ra",
  },
  {
    code: "BK-20251109-XYZ123",
    time: "14:00 - 18:00",
    vehicle: "VinFast VF8",
    group: "EV-Group-02",
    status: "Sắp tới",
  },
  {
    code: "BK-20251108-AAA111",
    time: "09:00 - 11:00",
    vehicle: "Tesla Model 3",
    group: "EV-Group-01",
    status: "Đã hoàn thành",
  },
];

export default function BookingMonitor() {
  return (
    <section className="bg-slate-100">
      <div className="mx-auto max-w-[1100px] px-4 py-6 md:px-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-white">
              <Activity className="h-4 w-4" />
            </span>
            <div>
              <h1 className="text-lg md:text-xl font-extrabold text-slate-900">
                Giám sát lịch đặt & hành trình
              </h1>
              <p className="text-xs text-slate-600">
                Staff theo dõi các booking trong ngày, trạng thái xe và nhóm.
              </p>
            </div>
          </div>

          <button className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-800 hover:bg-slate-50">
            <CalendarRange className="h-3.5 w-3.5" />
            Hôm nay, 09/11/2025
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {bookings.map((b) => (
            <div
              key={b.code}
              className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm text-sm"
            >
              <div className="flex items-center justify-between gap-2">
                <div>
                  <div className="font-mono text-xs text-slate-500">
                    {b.code}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-slate-900">
                    {b.vehicle}
                  </div>
                  <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-slate-600">
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {b.time}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Users className="h-3.5 w-3.5" />
                      {b.group}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span
                    className={
                      "inline-flex items-center justify-center rounded-full px-2.5 py-1 text-[11px] font-medium " +
                      (b.status === "Đang diễn ra"
                        ? "bg-emerald-50 text-emerald-700"
                        : b.status === "Sắp tới"
                        ? "bg-amber-50 text-amber-700"
                        : "bg-slate-50 text-slate-600")
                    }
                  >
                    {b.status}
                  </span>
                  <div className="mt-2 flex justify-end">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                      <Car className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <button className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 font-medium text-slate-800 hover:bg-slate-50">
                  Xem chi tiết
                </button>
                <button className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-slate-700 hover:bg-slate-50">
                  Gọi hỗ trợ
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
