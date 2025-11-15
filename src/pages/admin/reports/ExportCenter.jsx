// src/pages/admin/reports/ExportCenter.jsx
import { Download, FileText, Receipt, Users } from "lucide-react";

export default function ExportCenter() {
  return (
    <section className="bg-slate-100">
      <div className="mx-auto max-w-[800px] px-4 py-6 md:px-6">
        <div className="mb-4 flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-white">
            <Download className="h-4 w-4" />
          </span>
          <div>
            <h1 className="text-lg md:text-xl font-extrabold text-slate-900">
              Trung tâm xuất báo cáo
            </h1>
            <p className="text-xs text-slate-600">
              Admin xuất CSV/PDF các dữ liệu chính: user, nhóm, hóa đơn.
            </p>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <ExportCard
            icon={Users}
            title="Danh sách người dùng"
            description="Xuất toàn bộ account (Co-owner, Staff, Admin)"
          />
          <ExportCard
            icon={Receipt}
            title="Hóa đơn & thanh toán"
            description="Xuất lịch sử hóa đơn theo kỳ"
          />
          <ExportCard
            icon={FileText}
            title="Hợp đồng & phụ lục"
            description="Xuất danh sách hợp đồng (metadata)"
          />
        </div>
      </div>
    </section>
  );
}

function ExportCard({ icon: Icon, title, description }) {
  return (
    <div className="flex items-start justify-between gap-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm text-sm">
      <div>
        <div className="flex items-center gap-2">
          <Icon className="h-4 w-4 text-slate-600" />
          <div className="font-semibold text-slate-900">{title}</div>
        </div>
        <p className="mt-1 text-xs text-slate-600">{description}</p>
      </div>
      <button className="mt-1 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-800 hover:bg-slate-50">
        <Download className="mr-1 h-3.5 w-3.5 inline" />
        Xuất (mock)
      </button>
    </div>
  );
}
