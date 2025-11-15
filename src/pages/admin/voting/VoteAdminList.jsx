// src/pages/admin/voting/VoteAdminList.jsx
import { Vote, BarChart2 } from "lucide-react";

const adminVotes = [
  {
    title: "Nâng cấp pin xe",
    period: "10/2025",
    status: "Đang diễn ra",
    yes: "70%",
    no: "30%",
  },
  {
    title: "Thay đổi lịch bảo dưỡng",
    period: "09/2025",
    status: "Đã kết thúc",
    yes: "60%",
    no: "40%",
  },
];

export default function VoteAdminList() {
  return (
    <section className="bg-slate-100">
      <div className="mx-auto max-w-[900px] px-4 py-6 md:px-6">
        <div className="mb-4 flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-white">
            <Vote className="h-4 w-4" />
          </span>
          <div>
            <h1 className="text-lg md:text-xl font-extrabold text-slate-900">
              Danh sách biểu quyết toàn hệ thống
            </h1>
            <p className="text-xs text-slate-600">
              Admin theo dõi kết quả voting giữa các nhóm đồng sở hữu.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {adminVotes.map((v, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between gap-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm text-sm"
            >
              <div>
                <div className="font-semibold text-slate-900">{v.title}</div>
                <div className="mt-1 text-xs text-slate-500">
                  Kỳ: {v.period} • Trạng thái: {v.status}
                </div>
              </div>
              <div className="text-right text-xs text-slate-600">
                <div className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 font-semibold text-emerald-700">
                  Yes {v.yes}
                </div>
                <div className="mt-1 inline-flex items-center gap-1 rounded-full bg-rose-50 px-2.5 py-1 font-semibold text-rose-700">
                  No {v.no}
                </div>
                <div className="mt-1 flex justify-end">
                  <BarChart2 className="h-4 w-4 text-slate-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
