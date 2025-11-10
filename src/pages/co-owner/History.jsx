import OwnerSideNav from "../../components/OwnerSideNav";

function Stat({ label }) {
  return (
    <div className="flex-1 text-center">
      <div className="text-sky-600 text-lg font-bold">—</div>
      <div className="text-xs text-slate-500 mt-1">{label}</div>
    </div>
  );
}

function TripItem() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white px-4 py-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm font-semibold text-slate-900">—</div>
          <div className="text-xs text-slate-500 mt-1">—</div>
        </div>
        <div className="text-sm font-semibold text-slate-900">—</div>
      </div>
    </div>
  );
}

export default function History() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-6">
          <OwnerSideNav />

          <section className="flex-1">
            <h1 className="text-2xl font-bold text-slate-900">
              Lịch sử & Phân tích
            </h1>
            <p className="mt-1 text-slate-500 text-sm">
              Xem chi tiết lịch sử sử dụng và phân tích
            </p>

            {/* Lịch sử hành trình */}
            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
              <div className="flex items-center gap-2 text-[15px] font-semibold text-slate-900">
                <span className="text-sky-600">🗒️</span> Lịch sử hành trình
              </div>

              {/* 3 stats */}
              <div className="mt-4 rounded-xl border border-slate-200">
                <div className="grid grid-cols-3 divide-x divide-slate-200">
                  <Stat label="Tổng km" />
                  <Stat label="Chuyến đi" />
                  <Stat label="Chi phí" />
                </div>
              </div>

              {/* Khuyến nghị / mức sử dụng */}
              <div className="mt-4 rounded-xl border bg-white/80 border-slate-200">
                <div className="rounded-xl bg-emerald-50/70 px-4 py-3 text-sm text-slate-700">
                  Hệ thống sẽ tự động phân tích khi có dữ liệu thực tế.
                </div>
              </div>

              {/* Chuyến đi gần đây */}
              <div className="mt-6">
                <div className="text-[15px] font-semibold text-slate-900 mb-3">
                  Chuyến đi gần đây
                </div>

                <div className="space-y-3">
                  <TripItem />
                  <TripItem />
                  <TripItem />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
