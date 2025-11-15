// src/pages/coowner/schedule/CalendarView.jsx
import { CalendarRange, Clock, Car, User } from "lucide-react";

const timeSlots = [
  "06:00",
  "08:00",
  "10:00",
  "12:00",
  "14:00",
  "16:00",
  "18:00",
];

const days = ["Th 2", "Th 3", "Th 4", "Th 5", "Th 6", "Th 7", "CN"];

export default function CalendarView() {
  return (
    <section className="bg-slate-100">
      <div className="mx-auto max-w-[1100px] px-6 py-8 md:px-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-emerald-600">
              EV Co-ownership • Lịch dùng xe
            </p>
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">
              Lịch sử dụng xe (tuần)
            </h1>
            <p className="mt-1 text-sm text-slate-600">
              Xem nhanh khung giờ xe đang trống / đã được đặt. Click (sau này)
              để xem chi tiết hoặc đặt lịch.
            </p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-50">
            <CalendarRange className="h-4 w-4" />
            Tuần 20/10 – 26/10
          </button>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="grid grid-cols-[80px_repeat(7,minmax(0,1fr))] border-b border-slate-100 bg-slate-50 text-xs font-medium text-slate-500">
            <div className="px-3 py-2">Giờ</div>
            {days.map((d) => (
              <div key={d} className="px-3 py-2 text-center">
                {d}
              </div>
            ))}
          </div>

          {timeSlots.map((slot, idx) => (
            <div
              key={slot}
              className={
                "grid grid-cols-[80px_repeat(7,minmax(0,1fr))] text-xs " +
                (idx % 2 === 0 ? "bg-white" : "bg-slate-50/60")
              }
            >
              <div className="border-b border-slate-100 px-3 py-2 text-slate-500">
                {slot}
              </div>
              {days.map((d, colIdx) => {
                const isBooked = (idx === 1 && colIdx === 1) || (idx === 2 && colIdx === 3);
                const isYourBooking = idx === 1 && colIdx === 1;
                return (
                  <div
                    key={d}
                    className="border-b border-l border-slate-100 px-1.5 py-2"
                  >
                    {isBooked && (
                      <div
                        className={
                          "rounded-lg px-2 py-1 text-[11px] leading-snug " +
                          (isYourBooking
                            ? "bg-emerald-50 text-emerald-800"
                            : "bg-sky-50 text-sky-800")
                        }
                      >
                        <div className="flex items-center gap-1">
                          <Car className="h-3 w-3" />
                          <span>Tesla Model 3</span>
                        </div>
                        <div className="mt-0.5 flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>+2h</span>
                        </div>
                        <div className="mt-0.5 flex items-center gap-1">
                          <User className="h-3 w-3" />
                          <span className="truncate">
                            {isYourBooking ? "Bạn" : "Trần Thị B"}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        <div className="mt-3 flex flex-wrap gap-3 text-xs text-slate-600">
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Lịch của bạn
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-sky-50 px-3 py-1">
            <span className="h-2 w-2 rounded-full bg-sky-500" />
            Lịch của thành viên khác
          </span>
          <span className="text-slate-500">
            Sau khi có backend, view này có thể chuyển sang calendar thật với drag & drop.
          </span>
        </div>
      </div>
    </section>
  );
}
