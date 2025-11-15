// src/pages/admin/contracts/ContractVersioning.jsx
import { FileSignature, Clock } from "lucide-react";

const versions = [
  { version: "v1.1", date: "15/03/2024", note: "Cập nhật cách chia phí bảo dưỡng" },
  { version: "v1.0", date: "01/01/2024", note: "Phiên bản chính thức đầu tiên" },
  { version: "v0.9", date: "20/12/2023", note: "Bản draft nội bộ" },
];

export default function ContractVersioning() {
  return (
    <section className="bg-slate-100">
      <div className="mx-auto max-w-[800px] px-4 py-6 md:px-6">
        <div className="mb-4 flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-white">
            <FileSignature className="h-4 w-4" />
          </span>
          <div>
            <h1 className="text-lg md:text-xl font-extrabold text-slate-900">
              Lịch sử phiên bản hợp đồng EV
            </h1>
            <p className="text-xs text-slate-600">
              Admin theo dõi các lần chỉnh sửa để đảm bảo minh bạch pháp lý.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {versions.map((v) => (
            <div
              key={v.version}
              className="flex items-center justify-between gap-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm text-sm"
            >
              <div>
                <div className="font-semibold text-slate-900">
                  Phiên bản {v.version}
                </div>
                <div className="mt-1 text-xs text-slate-500">{v.note}</div>
              </div>
              <div className="text-xs text-slate-600">
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-2.5 py-1">
                  <Clock className="h-3.5 w-3.5" />
                  {v.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
