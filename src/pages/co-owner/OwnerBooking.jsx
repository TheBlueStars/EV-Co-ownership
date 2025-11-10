import CoOwnerHeader from "../../components/CoOwnerHeader";
import OwnerSideNav from "../../components/OwnerSideNav";

export default function OwnerBooking() {
  return (
    <main className="min-h-screen bg-[#f7f9fb]">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex gap-6">
          <OwnerSideNav active="booking" />

          <div className="flex-1">
            <h1 className="text-[22px] font-semibold text-slate-900">Đặt lịch & Sử dụng xe</h1>
            <p className="mt-1 text-sm text-slate-600">
              Quản lý lịch trình và đặt chỗ cho xe của bạn.
            </p>

            {/* Lịch sử dụng */}
            <section className="mt-6 rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <header className="flex items-center justify-between px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-sky-50 text-sky-600 ring-1 ring-sky-100">
                    🗓
                  </span>
                  <h2 className="text-[15px] font-semibold text-slate-900">Lịch sử dụng</h2>
                </div>
                <button className="rounded-lg bg-sky-600 px-3 py-1.5 text-white text-xs font-medium hover:bg-sky-700">
                  Đặt lịch mới
                </button>
              </header>

              <div className="px-5 pb-5 space-y-3">
                {/* item 1 */}
                <div className="rounded-xl bg-emerald-50/70 ring-1 ring-emerald-100 p-4">
                  <div className="text-[13px] text-slate-700">08:00–12:00 • Đã xác nhận</div>
                  <div className="mt-1 text-[13px] text-slate-700">Nguyễn Văn A</div>
                  <div className="mt-1 text-[13px] text-slate-700">
                    <span className="mr-1">📍</span>Hà Nội → Hải Phòng
                  </div>
                </div>
                {/* item 2 */}
                <div className="rounded-xl bg-sky-50 ring-1 ring-sky-100 p-4">
                  <div className="text-[13px] text-slate-700">14:00–18:00 • Đang giữ chỗ</div>
                  <div className="mt-1 text-[13px] text-slate-700">Trần Thị B</div>
                  <div className="mt-1 text-[13px] text-slate-700">
                    <span className="mr-1">📍</span>Nội thành
                  </div>
                </div>
                {/* item 3 */}
                <div className="rounded-xl bg-emerald-50/70 ring-1 ring-emerald-100 p-4">
                  <div className="text-[13px] text-slate-700">09:00–17:00 • Đã xác nhận</div>
                  <div className="mt-1 text-[13px] text-slate-700">Lê Văn C</div>
                  <div className="mt-1 text-[13px] text-slate-700">
                    <span className="mr-1">📍</span>Hà Nội → Ninh Bình
                  </div>
                </div>

                <div className="rounded-lg bg-amber-50 text-amber-700 ring-1 ring-amber-200 px-3 py-2 text-xs">
                  💡 AI đề xuất slot phù hợp dựa trên tỉ lệ sở hữu & lịch sử sử dụng.
                </div>
              </div>
            </section>

            {/* Hệ thống ưu tiên thông minh */}
            <section className="mt-6 rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 p-5">
              <h3 className="text-[15px] font-semibold text-slate-900">
                Hệ thống ưu tiên thông minh
              </h3>
              <p className="mt-1 text-xs text-slate-600">
                AI tự động phân bổ lịch công bằng dựa trên tỉ lệ sở hữu & lịch sử.
              </p>

              <div className="mt-5 space-y-5">
                {/* Tỉ lệ sử dụng của bạn */}
                <div>
                  <div className="flex justify-between text-xs text-slate-600">
                    <span>Tỉ lệ sử dụng của bạn</span>
                    <span>35%</span>
                  </div>
                  <div className="mt-2 h-2 w-full rounded-full bg-slate-100">
                    <div className="h-2 w-[35%] rounded-full bg-sky-500" />
                  </div>
                </div>

                {/* Tỉ lệ sở hữu */}
                <div>
                  <div className="flex justify-between text-xs text-slate-600">
                    <span>Tỉ lệ sở hữu</span>
                    <span>40%</span>
                  </div>
                  <div className="mt-2 h-2 w-full rounded-full bg-slate-100">
                    <div className="h-2 w-[40%] rounded-full bg-emerald-500" />
                  </div>
                </div>

                <div className="rounded-lg bg-slate-50 text-slate-600 ring-1 ring-slate-200 px-3 py-2 text-xs">
                  Bạn đang sử dụng ít hơn tỉ lệ sở hữu. Hệ thống sẽ ưu tiên bạn trong các lịch đặt tiếp theo.
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
