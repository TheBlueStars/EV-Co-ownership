import CoOwnerHeader from "../../components/CoOwnerHeader";
import OwnerSideNav from "../../components/OwnerSideNav";

export default function OwnerCosts() {
  return (
    <main className="min-h-screen bg-slate-50">
      <CoOwnerHeader />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 pb-12 flex gap-6">
        <OwnerSideNav />

        <section className="flex-1">
          <h1 className="text-2xl font-semibold text-slate-900">Chi phí & Thanh toán</h1>
          <p className="mt-1 text-slate-500">
            Theo dõi và quản lý chi phí sử dụng xe
          </p>

          {/* Khối “Chi phí tháng này” */}
          <div className="mt-6 rounded-2xl border bg-white p-4 sm:p-5">
            <div className="flex items-center gap-2">
              <span className="text-xl">💲</span>
              <h2 className="text-lg font-semibold">Chi phí tháng này</h2>
            </div>

            <div className="mt-4 space-y-3">
              {/* Item rỗng – sau này bind API */}
              <div className="rounded-xl border p-3 sm:p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-50 text-sky-600">⚡</span>
                    <div>
                      <div className="font-medium">Sạc điện</div>
                      <div className="text-xs text-slate-400">Theo sử dụng</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-slate-900">—</div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border p-3 sm:p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">🛠️</span>
                    <div>
                      <div className="font-medium">Bảo dưỡng</div>
                      <div className="text-xs text-slate-400">Theo % sở hữu</div>
                    </div>
                  </div>
                  <div className="font-semibold text-slate-900">—</div>
                </div>
              </div>

              <div className="rounded-xl border p-3 sm:p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">🛡️</span>
                    <div>
                      <div className="font-medium">Bảo hiểm</div>
                      <div className="text-xs text-slate-400">Theo % sở hữu</div>
                    </div>
                  </div>
                  <div className="font-semibold text-slate-900">—</div>
                </div>
              </div>

              <div className="rounded-xl border p-3 sm:p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-50 text-amber-600">🧼</span>
                    <div>
                      <div className="font-medium">Vệ sinh</div>
                      <div className="text-xs text-slate-400">Theo sử dụng</div>
                    </div>
                  </div>
                  <div className="font-semibold text-slate-900">—</div>
                </div>
              </div>

              {/* Tổng & trạng thái */}
              <div className="mt-4 border-t pt-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Phần của bạn (40%)</span>
                  <span className="font-semibold text-slate-900">—</span>
                </div>

                <button
                  type="button"
                  className="mt-3 w-full rounded-xl bg-emerald-500 px-4 py-2 text-white hover:bg-emerald-600"
                >
                  Trạng thái thanh toán
                </button>
              </div>
            </div>
          </div>

          {/* Lịch sử thanh toán – rỗng */}
          <div className="mt-6 rounded-2xl border bg-white p-4 sm:p-5">
            <h2 className="text-lg font-semibold">Lịch sử thanh toán</h2>
            <div className="mt-3 space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-xl border p-3 sm:p-4 flex items-center justify-between">
                  <div className="text-sm">
                    <div className="font-medium">Kỳ phí {i}</div>
                    <div className="text-xs text-slate-400">Ngày … / … / …</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-slate-900">—</span>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                      Đã thanh toán
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
