// src/pages/admin/contracts/ContractTemplate.jsx
import { FileText, FileSignature } from "lucide-react";

const templates = [
  { name: "Hợp đồng đồng sở hữu EV – Template chuẩn", version: "v1.0", type: "Base" },
  { name: "Phụ lục chia chi phí bảo dưỡng", version: "v1.1", type: "Phụ lục" },
];

export default function ContractTemplate() {
  return (
    <section className="bg-slate-100">
      <div className="mx-auto max-w-[900px] px-4 py-6 md:px-6">
        <div className="mb-4 flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-white">
            <FileText className="h-4 w-4" />
          </span>
          <div>
            <h1 className="text-lg md:text-xl font-extrabold text-slate-900">
              Template hợp đồng & phụ lục
            </h1>
            <p className="text-xs text-slate-600">
              Admin định nghĩa các mẫu hợp đồng dùng chung cho các nhóm đồng
              sở hữu.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {templates.map((t) => (
            <div
              key={t.name}
              className="flex items-center justify-between gap-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm text-sm"
            >
              <div>
                <div className="font-semibold text-slate-900">{t.name}</div>
                <div className="mt-1 text-xs text-slate-500">
                  Loại: {t.type} • Phiên bản {t.version}
                </div>
              </div>
              <button className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-800 hover:bg-slate-50">
                <FileSignature className="h-3.5 w-3.5" />
                Chỉnh sửa mẫu
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
