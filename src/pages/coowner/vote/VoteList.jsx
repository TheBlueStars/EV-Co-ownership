// src/pages/coowner/vote/VoteList.jsx
import { Vote, Users, Clock } from "lucide-react";

const votes = [
  {
    id: "VOTE-001",
    title: "Nâng cấp pin xe",
    endDate: "25/10/2025, 23:59",
    youVoted: true,
    result: "Đang diễn ra",
  },
  {
    id: "VOTE-002",
    title: "Thay đổi lịch bảo dưỡng định kỳ",
    endDate: "10/09/2025",
    youVoted: true,
    result: "Đã thông qua",
  },
  {
    id: "VOTE-003",
    title: "Bổ sung gói vệ sinh nội thất",
    endDate: "05/08/2025",
    youVoted: false,
    result: "Không được thông qua",
  },
];

export default function VoteList() {
  return (
    <section className="bg-slate-100">
      <div className="mx-auto max-w-[1000px] px-6 py-8 md:px-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-emerald-600">
              EV Co-ownership • Biểu quyết
            </p>
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">
              Biểu quyết & quyết định chung
            </h1>
            <p className="mt-1 text-sm text-slate-600">
              Các quyết định quan trọng của nhóm sẽ được biểu quyết dựa trên{" "}
              <span className="font-semibold">tỉ lệ sở hữu</span>.
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-3 text-xs text-slate-500">
            Bạn đã tham gia{" "}
            <span className="font-semibold text-slate-900">
              2/3
            </span>{" "}
            cuộc biểu quyết gần đây.
          </div>

          <div className="space-y-3 text-sm">
            {votes.map((v) => (
              <div
                key={v.id}
                className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-violet-50 text-violet-600">
                      <Vote className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="font-semibold text-slate-900">
                        {v.title}
                      </div>
                      <div className="mt-0.5 flex flex-wrap items-center gap-3 text-xs text-slate-600">
                        <span className="inline-flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          Hạn: {v.endDate}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Users className="h-3.5 w-3.5" />
                          ID: {v.id}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:flex-col md:items-end">
                  <span
                    className={
                      "inline-flex items-center justify-center rounded-full px-2.5 py-1 text-xs font-medium " +
                      (v.result === "Đang diễn ra"
                        ? "bg-amber-50 text-amber-700"
                        : v.result === "Đã thông qua"
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-rose-50 text-rose-700")
                    }
                  >
                    {v.result}
                  </span>
                  <span className="text-xs text-slate-500">
                    {v.youVoted ? "Bạn đã bỏ phiếu" : "Bạn chưa bỏ phiếu"}
                  </span>
                  <button className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-800 hover:bg-slate-50">
                    Xem chi tiết
                  </button>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-3 text-xs text-slate-500">
            Khi kết nối backend, mỗi dòng sẽ dẫn tới /vote/:id và hiển thị chi
            tiết tỉ lệ phiếu, comment, lịch sử biểu quyết.
          </p>
        </div>
      </div>
    </section>
  );
}
