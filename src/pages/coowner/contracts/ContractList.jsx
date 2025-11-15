// src/pages/coowner/contracts/ContractList.jsx
import { FileText, FileSignature, ShieldCheck } from "lucide-react";

const contracts = [
  {
    id: "CT-2024-01",
    name: "Hợp đồng đồng sở hữu EV - Lần 1",
    version: "v1.0",
    effectiveDate: "01/01/2024",
    status: "Đang hiệu lực",
  },
  {
    id: "CT-2024-02",
    name: "Phụ lục phân chia chi phí bảo dưỡng",
    version: "v1.1",
    effectiveDate: "15/03/2024",
    status: "Đang hiệu lực",
  },
  {
    id: "CT-2023-12",
    name: "Hợp đồng đồng sở hữu EV - Bản cũ",
    version: "v0.9",
    effectiveDate: "10/12/2023",
    status: "Đã hết hiệu lực",
  },
];

export default function ContractList() {
  return (
    <section className="bg-slate-100">
      <div className="mx-auto max-w-[1100px] px-6 py-8 md:px-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-emerald-600">
              EV Co-ownership • Hợp đồng
            </p>
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">
              Hợp đồng đồng sở hữu & phụ lục
            </h1>
            <p className="mt-1 text-sm text-slate-600">
              Xem lại các bản hợp đồng, phụ lục, điều khoản quan trọng giữa các
              đồng sở hữu.
            </p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-50">
            <FileSignature className="h-4 w-4" />
            Yêu cầu chỉnh sửa
          </button>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-50 text-xs uppercase text-slate-500">
              <tr>
                <th className="px-4 py-3 text-left">Mã</th>
                <th className="px-4 py-3 text-left">Tên hợp đồng</th>
                <th className="px-4 py-3 text-left">Phiên bản</th>
                <th className="px-4 py-3 text-left">Hiệu lực từ</th>
                <th className="px-4 py-3 text-left">Trạng thái</th>
                <th className="px-4 py-3 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {contracts.map((c, idx) => (
                <tr
                  key={c.id}
                  className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"}
                >
                  <td className="px-4 py-3 font-mono text-xs text-slate-700">
                    {c.id}
                  </td>
                  <td className="px-4 py-3 text-slate-900">{c.name}</td>
                  <td className="px-4 py-3 text-slate-700">{c.version}</td>
                  <td className="px-4 py-3 text-slate-700">
                    {c.effectiveDate}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={
                        "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium " +
                        (c.status === "Đang hiệu lực"
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-slate-100 text-slate-600")
                      }
                    >
                      <ShieldCheck className="h-3.5 w-3.5" />
                      {c.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-800 hover:bg-slate-50">
                      <FileText className="h-3.5 w-3.5" />
                      Xem chi tiết
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-3 text-xs text-slate-500">
          Khi kết nối backend, bảng này sẽ lấy dữ liệu từ API (danh sách hợp
          đồng theo nhóm đồng sở hữu).
        </p>
      </div>
    </section>
  );
}
