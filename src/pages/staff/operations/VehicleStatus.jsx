// src/pages/staff/operations/VehicleStatus.jsx
import { Car, BatteryMedium, Wrench, Activity } from "lucide-react";

const vehicles = [
  {
    name: "Tesla Model 3",
    plate: "30A-123.45",
    battery: "78%",
    status: "Sẵn sàng",
  },
  {
    name: "VinFast VF8",
    plate: "51H-678.90",
    battery: "35%",
    status: "Cần sạc",
  },
  {
    name: "Hyundai Ioniq 5",
    plate: "30H-999.88",
    battery: "Đang bảo dưỡng",
    status: "Đang bảo dưỡng",
  },
];

export default function VehicleStatus() {
  return (
    <section className="bg-slate-100">
      <div className="mx-auto max-w-[1000px] px-4 py-6 md:px-6">
        <div className="mb-4 flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-white">
            <Car className="h-4 w-4" />
          </span>
          <div>
            <h1 className="text-lg md:text-xl font-extrabold text-slate-900">
              Trạng thái đội xe
            </h1>
            <p className="text-xs text-slate-600">
              Staff xem nhanh tình trạng pin, bảo dưỡng, khả năng sẵn sàng.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {vehicles.map((v) => (
            <div
              key={v.plate}
              className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm text-sm"
            >
              <div className="flex items-center justify-between gap-2">
                <div>
                  <div className="text-sm font-semibold text-slate-900">
                    {v.name}
                  </div>
                  <div className="text-xs text-slate-500">{v.plate}</div>
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 text-slate-700">
                  <Activity className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-3 space-y-1 text-xs text-slate-600">
                <div className="flex items-center gap-1">
                  <BatteryMedium className="h-3.5 w-3.5" />
                  <span>
                    Pin:{" "}
                    <span className="font-semibold text-slate-900">
                      {v.battery}
                    </span>
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Wrench className="h-3.5 w-3.5" />
                  <span>Trạng thái: {v.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
