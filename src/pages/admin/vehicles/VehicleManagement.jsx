// src/pages/admin/vehicles/VehicleManagement.jsx
import { Car, TruckElectric, Wrench } from "lucide-react";

const vehicles = [
  {
    name: "Tesla Model 3",
    plate: "30A-123.45",
    group: "EV-Group-01",
    status: "Đang hoạt động",
  },
  {
    name: "VinFast VF8",
    plate: "51H-678.90",
    group: "EV-Group-02",
    status: "Đang hoạt động",
  },
  {
    name: "Hyundai Ioniq 5",
    plate: "30H-999.88",
    group: "EV-Group-03",
    status: "Đang bảo dưỡng",
  },
];

export default function VehicleManagement() {
  return (
    <section className="bg-slate-100">
      <div className="mx-auto max-w-[1100px] px-4 py-6 md:px-6">
        <div className="mb-4 flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-white">
            <TruckElectric className="h-4 w-4" />
          </span>
          <div>
            <h1 className="text-lg md:text-xl font-extrabold text-slate-900">
              Quản lý danh mục xe
            </h1>
            <p className="text-xs text-slate-600">
              Admin quản lý toàn bộ xe trong hệ thống và mapping vào nhóm đồng
              sở hữu.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <table className="min-w-full text-xs md:text-sm">
            <thead className="bg-slate-50 text-[11px] uppercase text-slate-500">
              <tr>
                <th className="px-3 py-3 text-left">Xe</th>
                <th className="px-3 py-3 text-left">Biển số</th>
                <th className="px-3 py-3 text-left">Nhóm</th>
                <th className="px-3 py-3 text-left">Trạng thái</th>
                <th className="px-3 py-3 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {vehicles.map((v, idx) => (
                <tr
                  key={v.plate}
                  className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"}
                >
                  <td className="px-3 py-3 text-slate-900">{v.name}</td>
                  <td className="px-3 py-3 text-slate-700">{v.plate}</td>
                  <td className="px-3 py-3 text-slate-700">{v.group}</td>
                  <td className="px-3 py-3">
                    <span
                      className={
                        "inline-flex rounded-full px-2.5 py-1 text-[11px] font-medium " +
                        (v.status === "Đang hoạt động"
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-amber-50 text-amber-700")
                      }
                    >
                      {v.status}
                    </span>
                  </td>
                  <td className="px-3 py-3 text-right">
                    <button className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-medium text-slate-800 hover:bg-slate-50">
                      <Wrench className="mr-1 h-3.5 w-3.5 inline" />
                      Chỉnh sửa
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
