// src/pages/admin/vehicles/MaintenancePlan.jsx
import { Wrench, CalendarRange, Car } from "lucide-react";

const plans = [
  {
    vehicle: "Tesla Model 3",
    plate: "30A-123.45",
    next: "20/11/2025",
    type: "Bảo dưỡng định kỳ 10.000km",
  },
  {
    vehicle: "VinFast VF8",
    plate: "51H-678.90",
    next: "05/12/2025",
    type: "Kiểm tra phanh & lốp",
  },
];

export default function MaintenancePlan() {
  return (
    <section className="bg-slate-100">
      <div className="mx-auto max-w-[900px] px-4 py-6 md:px-6">
        <div className="mb-4 flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-white">
            <Wrench className="h-4 w-4" />
          </span>
          <div>
            <h1 className="text-lg md:text-xl font-extrabold text-slate-900">
              Kế hoạch bảo dưỡng đội xe
            </h1>
            <p className="text-xs text-slate-600">
              Định nghĩa lịch bảo dưỡng giúp Staff/Co-owner chủ động sắp xếp
              lịch sử dụng.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {plans.map((p) => (
            <div
              key={p.plate}
              className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm text-sm"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 text-slate-700">
                    <Car className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">
                      {p.vehicle}
                    </div>
                    <div className="text-xs text-slate-500">{p.plate}</div>
                  </div>
                </div>
                <div className="text-right text-xs text-slate-600">
                  <div className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-emerald-700">
                    <CalendarRange className="h-3.5 w-3.5" />
                    {p.next}
                  </div>
                  <div className="mt-1">{p.type}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
