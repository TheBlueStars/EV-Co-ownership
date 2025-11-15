// src/pages/coowner/contracts/ContractDetail.jsx
import { FileText, FileSignature, Users, ShieldCheck, Download } from "lucide-react";

export default function ContractDetail() {
  return (
    <section className="bg-slate-100">
      <div className="mx-auto max-w-[900px] px-6 py-8 md:px-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900 text-white">
              <FileText className="h-5 w-5" />
            </span>
            <div>
              <h1 className="text-2xl font-extrabold text-slate-900">
                Hợp đồng đồng sở hữu EV - Lần 1
              </h1>
              <p className="text-sm text-slate-600">
                Mã: <span className="font-mono">CT-2024-01</span> • Phiên bản{" "}
                <span className="font-semibold">v1.0</span> • Hiệu lực từ{" "}
                <span className="font-semibold">01/01/2024</span>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <button className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-800 hover:bg-slate-50">
              <Download className="h-3.5 w-3.5" />
              Tải PDF
            </button>
            <button className="inline-flex items-center gap-1 rounded-xl bg-emerald-600 px-3 py-2 text-xs font-medium text-white hover:bg-emerald-700 active:translate-y-[1px]">
              <FileSignature className="h-3.5 w-3.5" />
              Xem lịch sử chỉnh sửa
            </button>
          </div>
        </div>

        <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm text-sm">
          <div className="flex flex-wrap gap-3 text-xs text-slate-600">
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 font-medium text-emerald-700">
              <ShieldCheck className="h-3.5 w-3.5" />
              Đang hiệu lực
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-3 py-1">
              Bản điện tử (e-contract)
            </span>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Các bên tham gia
            </h2>
            <div className="mt-2 flex flex-wrap gap-4 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-slate-500" />
                <span>A – 40% sở hữu</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-slate-500" />
                <span>B – 30% sở hữu</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-slate-500" />
                <span>C – 30% sở hữu</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Tóm tắt điều khoản chính
            </h2>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
              <li>Quy định tỉ lệ sở hữu: A 40% – B 30% – C 30%.</li>
              <li>
                Cơ chế sử dụng xe: đặt lịch trước trên hệ thống, ưu tiên dựa
                trên tỉ lệ sở hữu và lịch sử sử dụng.
              </li>
              <li>
                Chia sẻ chi phí: sạc điện theo mức sử dụng, bảo dưỡng & bảo hiểm
                theo tỉ lệ sở hữu.
              </li>
              <li>Cơ chế giải quyết tranh chấp và điều chỉnh hợp đồng.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Lịch sử phiên bản
            </h2>
            <div className="mt-2 space-y-2 text-xs text-slate-600">
              <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2">
                <span>v1.0 – Ký lần đầu</span>
                <span>01/01/2024</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2">
                <span>v0.9 – Draft nội bộ</span>
                <span>20/12/2023</span>
              </div>
            </div>
          </div>

          <p className="mt-2 text-xs text-slate-500">
            Màn hình này chỉ là mockup UI. Khi kết nối backend, nội dung hợp
            đồng sẽ được render từ dữ liệu thật (HTML/PDF).
          </p>
        </div>
      </div>
    </section>
  );
}
