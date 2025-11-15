// src/pages/admin/system/Settings.jsx
import { Settings, Bell } from "lucide-react";

export default function SystemSettings() {
  return (
    <section className="bg-slate-100">
      <div className="mx-auto max-w-[800px] px-4 py-6 md:px-6">
        <div className="mb-4 flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-white">
            <Settings className="h-4 w-4" />
          </span>
          <div>
            <h1 className="text-lg md:text-xl font-extrabold text-slate-900">
              Cấu hình hệ thống
            </h1>
            <p className="text-xs text-slate-600">
              Các thiết lập chung: ngôn ngữ, timezone, email, thông báo.
            </p>
          </div>
        </div>

        <div className="space-y-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm text-sm">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Ngôn ngữ & múi giờ
            </div>
            <div className="mt-2 grid gap-3 md:grid-cols-2">
              <SettingRow label="Ngôn ngữ mặc định" value="Tiếng Việt" />
              <SettingRow label="Múi giờ" value="Asia/Ho_Chi_Minh (+07)" />
            </div>
          </div>

          <div>
            <div className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
              Thông báo
            </div>
            <div className="mt-2 space-y-2 text-xs text-slate-700">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1">
                  <Bell className="h-3.5 w-3.5" />
                  Email khi có booking mới
                </span>
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-700">
                  ON
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Email nhắc thanh toán</span>
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-700">
                  ON
                </span>
              </div>
            </div>
          </div>

          <button className="mt-3 inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-800 hover:bg-slate-50">
            Lưu cấu hình (mock)
          </button>
        </div>
      </div>
    </section>
  );
}

function SettingRow({ label, value }) {
  return (
    <div className="flex items-center justify-between text-xs">
      <span className="text-slate-600">{label}</span>
      <span className="font-semibold text-slate-900">{value}</span>
    </div>
  );
}
