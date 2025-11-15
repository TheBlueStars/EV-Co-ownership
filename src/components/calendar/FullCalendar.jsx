// src/components/calendar/FullCalendar.jsx
import { useMemo, useState } from "react";
import { formatDate } from "../../utils/formatters";

/**
 * Props:
 *  - events: [{ id, title, start, end }]
 *  - onDayClick(date)
 *  - onEventClick(event)
 *  - initialDate: Date | string
 */
export default function FullCalendar({
  events = [],
  onDayClick,
  onEventClick,
  initialDate,
}) {
  const [current, setCurrent] = useState(
    initialDate ? new Date(initialDate) : new Date(),
  );

  const year = current.getFullYear();
  const month = current.getMonth();

  const { weeks, monthLabel } = useMemo(() => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const startWeekDay = firstDay.getDay(); // 0-6 (CN -> T7)
    const daysInMonth = lastDay.getDate();

    const cells = [];

    // ngày ở tháng trước để fill đầu tuần
    for (let i = 0; i < startWeekDay; i++) {
      const d = new Date(year, month, i - startWeekDay + 1);
      cells.push({ date: d, inCurrentMonth: false });
    }

    // ngày trong tháng hiện tại
    for (let d = 1; d <= daysInMonth; d++) {
      cells.push({ date: new Date(year, month, d), inCurrentMonth: true });
    }

    // thêm ngày tháng sau cho đủ bội số 7
    const remaining = 7 - (cells.length % 7 || 7);
    for (let i = 1; i <= remaining; i++) {
      const d = new Date(year, month + 1, i);
      cells.push({ date: d, inCurrentMonth: false });
    }

    const weeks = [];
    for (let i = 0; i < cells.length; i += 7) {
      weeks.push(cells.slice(i, i + 7));
    }

    const monthLabel = current.toLocaleDateString("vi-VN", {
      month: "long",
      year: "numeric",
    });

    return { weeks, monthLabel };
  }, [current, month, year]);

  const eventsByDate = useMemo(() => {
    const map = {};
    events.forEach((ev) => {
      if (!ev.start) return;
      const d = new Date(ev.start);
      const key = d.toISOString().slice(0, 10); // yyyy-mm-dd
      if (!map[key]) map[key] = [];
      map[key].push(ev);
    });
    return map;
  }, [events]);

  const todayKey = new Date().toISOString().slice(0, 10);

  const gotoPrevMonth = () => {
    setCurrent((d) => new Date(d.getFullYear(), d.getMonth() - 1, 1));
  };

  const gotoNextMonth = () => {
    setCurrent((d) => new Date(d.getFullYear(), d.getMonth() + 1, 1));
  };

  const gotoToday = () => {
    setCurrent(new Date());
  };

  const handleDayClick = (date) => {
    onDayClick?.(date);
  };

  const handleEventClick = (event, e) => {
    e.stopPropagation();
    onEventClick?.(event);
  };

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-[0_18px_60px_rgba(15,23,42,.08)]">
      {/* Header */}
      <div className="mb-3 flex items-center justify-between gap-2">
        <div>
          <h2 className="text-sm font-semibold text-slate-900">
            Lịch sử dụng xe
          </h2>
          <p className="text-xs text-slate-500">{monthLabel}</p>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <button
            onClick={gotoPrevMonth}
            className="rounded-xl border border-slate-200 bg-slate-50 px-2 py-1 hover:border-slate-400"
          >
            ← Tháng trước
          </button>
          <button
            onClick={gotoToday}
            className="rounded-xl border border-slate-900 bg-slate-900 px-3 py-1 font-medium text-white hover:bg-slate-800"
          >
            Hôm nay
          </button>
          <button
            onClick={gotoNextMonth}
            className="rounded-xl border border-slate-200 bg-slate-50 px-2 py-1 hover:border-slate-400"
          >
            Tháng sau →
          </button>
        </div>
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-px rounded-2xl bg-slate-200 text-[11px]">
        {/* Weekday header */}
        {["CN", "T2", "T3", "T4", "T5", "T6", "T7"].map((w) => (
          <div
            key={w}
            className="bg-slate-50 py-2 text-center font-semibold uppercase text-slate-500"
          >
            {w}
          </div>
        ))}

        {weeks.map((week, wi) =>
          week.map(({ date, inCurrentMonth }, di) => {
            const key = date.toISOString().slice(0, 10);
            const dayEvents = eventsByDate[key] || [];
            const isToday = key === todayKey;

            return (
              <button
                key={`${wi}-${di}`}
                type="button"
                onClick={() => handleDayClick(date)}
                className={`flex min-h-[84px] flex-col items-stretch bg-white p-1.5 text-left align-top transition hover:bg-slate-50 ${
                  !inCurrentMonth ? "bg-slate-50 text-slate-400" : ""
                } ${isToday ? "ring-2 ring-slate-900/70 ring-offset-2 ring-offset-slate-100" : ""}`}
              >
                <div className="mb-1 flex items-center justify-between text-[11px]">
                  <span
                    className={`inline-flex h-5 w-5 items-center justify-center rounded-full ${
                      isToday
                        ? "bg-slate-900 text-white"
                        : "text-slate-600"
                    }`}
                  >
                    {date.getDate()}
                  </span>
                  {dayEvents.length > 0 && (
                    <span className="rounded-full bg-emerald-50 px-1.5 py-0.5 text-[10px] font-medium text-emerald-700">
                      {dayEvents.length} lịch
                    </span>
                  )}
                </div>

                <div className="space-y-1">
                  {dayEvents.slice(0, 3).map((ev) => (
                    <div
                      key={ev.id}
                      onClick={(e) => handleEventClick(ev, e)}
                      className="cursor-pointer truncate rounded-lg bg-slate-900/90 px-1.5 py-0.5 text-[10px] text-white hover:bg-slate-900"
                    >
                      {ev.title}
                    </div>
                  ))}
                  {dayEvents.length > 3 && (
                    <div className="text-[10px] text-slate-500">
                      +{dayEvents.length - 3} lịch khác
                    </div>
                  )}
                </div>
              </button>
            );
          }),
        )}
      </div>

      {/* Legend / info */}
      <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500">
        <span>Nhấn vào ngày để tạo / xem chi tiết lịch đặt.</span>
        <span>Mock calendar – kết nối API scheduleService sau.</span>
      </div>
    </section>
  );
}
