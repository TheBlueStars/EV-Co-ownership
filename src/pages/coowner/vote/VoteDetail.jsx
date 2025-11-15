// src/pages/coowner/vote/VoteDetail.jsx
import { Vote, Users, CheckCircle2, XCircle, BarChart2 } from "lucide-react";

export default function VoteDetail() {
  return (
    <section className="bg-slate-100">
      <div className="mx-auto max-w-[900px] px-6 py-8 md:px-8">
        <div className="mb-6 flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
            <Vote className="h-5 w-5" />
          </span>
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900">
              Nâng cấp pin xe
            </h1>
            <p className="text-sm text-slate-600">
              Mã: <span className="font-mono">VOTE-001</span> • Hạn biểu quyết:{" "}
              <span className="font-semibold">25/10/2025, 23:59</span>
            </p>
          </div>
        </div>

        <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm text-sm">
          <div className="flex flex-wrap gap-3 text-xs text-slate-600">
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 font-medium text-amber-700">
              Đang diễn ra
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-3 py-1">
              3/3 thành viên đã bỏ phiếu
            </span>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Nội dung đề xuất
            </h2>
            <p className="mt-2 text-sm text-slate-700">
              Đề xuất nâng cấp pin xe để tăng quãng đường di chuyển từ ~350km
              lên ~450km mỗi lần sạc, đồng thời giảm thời gian sạc từ 60 phút
              xuống còn 40 phút.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-emerald-50 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-700" />
                  <span className="text-xs font-semibold text-emerald-800">
                    Đồng ý
                  </span>
                </div>
                <span className="text-sm font-extrabold text-emerald-800">
                  70%
                </span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-emerald-100">
                <div className="h-2 w-[70%] rounded-full bg-emerald-600" />
              </div>
              <p className="mt-2 text-xs text-emerald-900">
                Tương ứng A (40%) + B (30%) bỏ phiếu đồng ý.
              </p>
            </div>

            <div className="rounded-2xl bg-rose-50 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <XCircle className="h-4 w-4 text-rose-700" />
                  <span className="text-xs font-semibold text-rose-800">
                    Không đồng ý
                  </span>
                </div>
                <span className="text-sm font-extrabold text-rose-800">
                  30%
                </span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-rose-100">
                <div className="h-2 w-[30%] rounded-full bg-rose-600" />
              </div>
              <p className="mt-2 text-xs text-rose-900">
                C (30%) bỏ phiếu không đồng ý.
              </p>
            </div>
          </div>

          <div>
            <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-500">
              <BarChart2 className="h-4 w-4" />
              Chi tiết theo thành viên
            </h2>
            <div className="mt-2 space-y-2 text-xs text-slate-700">
              <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2">
                <div className="flex items-center gap-2">
                  <Users className="h-3.5 w-3.5 text-slate-500" />
                  <span>Nguyễn Văn A</span>
                </div>
                <span className="font-medium text-emerald-700">Đồng ý (40%)</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2">
                <div className="flex items-center gap-2">
                  <Users className="h-3.5 w-3.5 text-slate-500" />
                  <span>Trần Thị B</span>
                </div>
                <span className="font-medium text-emerald-700">Đồng ý (30%)</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2">
                <div className="flex items-center gap-2">
                  <Users className="h-3.5 w-3.5 text-slate-500" />
                  <span>Lê Văn C</span>
                </div>
                <span className="font-medium text-rose-700">
                  Không đồng ý (30%)
                </span>
              </div>
            </div>
          </div>

          <p className="mt-2 text-xs text-slate-500">
            Sau khi hết hạn biểu quyết, trạng thái sẽ chuyển sang “Đã thông qua”
            hoặc “Không thông qua” dựa trên tổng % sở hữu đồng ý.
          </p>
        </div>
      </div>
    </section>
  );
}
