// src/pages/staff/reports/DailyOpsReport.jsx
import { BarChart2, Activity, Car, Users } from "lucide-react";

export default function DailyOpsReport() {
  return (
    <section className="bg-slate-100">
      <div className="mx-auto max-w-[1000px] px-4 py-6 md:px-6">
        <div className="mb-4 flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-white">
            <BarChart2 className="h-4 w-4" />
          </span>
          <div>
            <h1 className="text-lg md:text-xl font-extrabold text-slate-900">
              Báo cáo vận hành trong ngày
            </h1>
            <p className="text-xs text-slate-600">
              Tóm tắt số booking, hành trình, sự cố (nếu có).
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500">Booking hôm nay</span>
              <CalendarIcon />
            </div>
            <div className="mt-2 text-2xl font-extrabold text-slate-900">
              8
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500">Xe đang chạy</span>
              <Car className="h-4 w-4 text-slate-500" />
            </div>
            <div className="mt-2 text-2xl font-extrabold text-slate-900">
              3
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500">Nhóm đang hoạt động</span>
              <Users className="h-4 w-4 text-slate-500" />
            </div>
            <div className="mt-2 text-2xl font-extrabold text-slate-900">
              5
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <Activity className="h-4 w-4 text-slate-500" />
            <span className="font-semibold text-slate-800">
              Ghi chú vận hành:
            </span>
          </div>
          <p className="mt-1">
            Không ghi nhận sự cố lớn. Một số booking trễ giờ trả xe ~10 phút,
            đã liên hệ khách hàng để nhắc nhở.
          </p>
        </div>
      </div>
    </section>
  );
}

// icon nhỏ cho thẻ đầu tiên
function CalendarIcon() {
  return (
    <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-slate-50 text-slate-500">
      <Activity className="h-4 w-4" />
    </div>
  );
}
