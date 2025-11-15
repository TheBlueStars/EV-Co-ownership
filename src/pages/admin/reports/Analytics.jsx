// src/pages/admin/reports/Analytics.jsx
import { BarChart2, TrendingUp, Users, Car } from "lucide-react";

export default function Analytics() {
  return (
    <section className="bg-slate-100">
      <div className="mx-auto max-w-[1100px] px-4 py-6 md:px-6">
        <div className="mb-4 flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-white">
            <BarChart2 className="h-4 w-4" />
          </span>
          <div>
            <h1 className="text-lg md:text-xl font-extrabold text-slate-900">
              Thống kê & phân tích hệ thống
            </h1>
            <p className="text-xs text-slate-600">
              Admin xem overview: số nhóm, số xe, tần suất sử dụng, doanh thu.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <StatCard label="Nhóm đồng sở hữu" value="15" Icon={Users} />
          <StatCard label="Số xe EV" value="23" Icon={Car} />
          <StatCard label="Booking/tháng" value="180" Icon={TrendingUp} />
          <StatCard label="Doanh thu/tháng" value="250tr" Icon={BarChart2} />
        </div>

        <div className="mt-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm text-xs text-slate-600">
          <p>
            Đây là mock chart: khi có backend, Admin có thể hiển thị biểu đồ
            (line/bar) bằng chart library (Recharts, v.v.).
          </p>
        </div>
      </div>
    </section>
  );
}

function StatCard({ label, value, Icon }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm text-sm">
      <div className="flex items-center justify-between">
        <span className="text-xs text-slate-500">{label}</span>
        <Icon className="h-4 w-4 text-slate-500" />
      </div>
      <div className="mt-2 text-xl font-extrabold text-slate-900">{value}</div>
    </div>
  );
}
