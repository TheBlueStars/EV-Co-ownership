// src/pages/coowner/fund/FundOverview.jsx
import { PiggyBank, Users, Vote, ArrowRightLeft } from "lucide-react";

export default function FundOverview() {
  const owners = [
    { name: "Nguyễn Văn A", percent: 40 },
    { name: "Trần Thị B", percent: 30 },
    { name: "Lê Văn C", percent: 30 },
  ];

  return (
    <section className="bg-slate-100">
      <div className="mx-auto max-w-[1200px] px-6 py-8 md:px-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-emerald-600">
              EV Co-ownership • Nhóm sở hữu
            </p>
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">
              Quản lý nhóm đồng sở hữu & quỹ chung
            </h1>
            <p className="mt-1 text-sm text-slate-600">
              Theo dõi tỉ lệ sở hữu, quỹ chung và các đề xuất biểu quyết của nhóm.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.1fr)]">
          {/* LEFT: OWNERS + FUND */}
          <div className="space-y-4">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <Users className="h-5 w-5" />
                  </span>
                  <div>
                    <h2 className="text-base font-semibold text-slate-900">
                      Tỉ lệ sở hữu
                    </h2>
                    <p className="text-xs text-slate-500">Tổng thành viên: 3 người</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {owners.map((o) => (
                  <div key={o.name}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-slate-900">{o.name}</span>
                      <span className="font-semibold text-slate-900">
                        {o.percent}%
                      </span>
                    </div>
                    <div className="mt-1 h-2 rounded-full bg-slate-100">
                      <div
                        className="h-2 rounded-full bg-emerald-500"
                        style={{ width: `${o.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-medium text-slate-500">Quỹ chung</div>
                  <div className="mt-1 text-2xl font-extrabold text-slate-900">
                    15.500.000đ
                  </div>
                  <p className="mt-1 text-xs text-slate-600">
                    Quỹ bảo dưỡng và chi phí dự phòng của nhóm.
                  </p>
                </div>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white">
                  <PiggyBank className="h-5 w-5" />
                </span>
              </div>

              <div className="mt-4 grid gap-3 md:grid-cols-2 text-sm">
                <div className="rounded-2xl bg-slate-50 p-3">
                  <div className="text-xs text-slate-500">Đã chi tháng này</div>
                  <div className="text-base font-semibold text-slate-900">
                    3.200.000đ
                  </div>
                </div>
                <div className="rounded-2xl bg-emerald-50/80 p-3">
                  <div className="text-xs text-emerald-700">Dự kiến chi tiếp</div>
                  <div className="text-base font-semibold text-emerald-800">
                    1.800.000đ
                  </div>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <button className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 font-medium text-slate-800 hover:bg-slate-100">
                  Nạp quỹ
                </button>
                <button className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 font-medium text-slate-800 hover:bg-slate-100">
                  Xem sổ quỹ
                  <ArrowRightLeft className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: VOTING / PROPOSALS */}
          <div className="space-y-4">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-3 flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-violet-50 text-violet-600">
                  <Vote className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="text-base font-semibold text-slate-900">
                    Biểu quyết & quyết định chung
                  </h2>
                  <p className="text-xs text-slate-500">
                    Các vấn đề quan trọng được quyết định theo tỉ lệ sở hữu.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4 text-sm">
                <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Vấn đề đang chờ biểu quyết
                </div>
                <p className="mt-2 font-semibold text-slate-900">
                  Nâng cấp pin xe
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  Đề xuất nâng cấp pin để tăng quãng đường di chuyển và giảm thời gian sạc.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <button className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 active:translate-y-[1px]">
                    Đồng ý
                  </button>
                  <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50">
                    Không đồng ý
                  </button>
                </div>
              </div>

              <p className="mt-3 text-xs text-slate-500">
                Trọng số phiếu được tính theo % sở hữu (40% - 30% - 30%) để đảm bảo công bằng.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
