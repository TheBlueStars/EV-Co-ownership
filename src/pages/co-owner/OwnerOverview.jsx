import CoOwnerHeader from "../../components/CoOwnerHeader";
import OwnerSideNav from "../../components/OwnerSideNav";

export default function OwnerOverview() {
  return (
    <main className="min-h-screen bg-[#f7f9fb]">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex gap-6">
          <OwnerSideNav active="overview" />

          <div className="flex-1">
            {/* Chào + mô tả ngắn */}
            <h1 className="text-[22px] font-semibold text-slate-900">
              Xin chào, <span className="text-sky-600">Nguyễn Văn A</span>
            </h1>
            <p className="mt-1 text-sm text-slate-600">
              Chào mừng bạn quay trở lại! Đây là bảng tổng quan của bạn.
            </p>

            {/* Hàng trên: Lịch sử sử dụng + Tỷ lệ sở hữu (sidebar phải) */}
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Lịch sử sử dụng */}
              <section className="lg:col-span-2 rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
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

                <div className="px-5 pb-4 space-y-3">
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

                  <div className="mt-2 rounded-lg bg-amber-50 text-amber-700 ring-1 ring-amber-200 px-3 py-2 text-xs">
                    💡 AI đề xuất slot phù hợp dựa trên tỷ lệ sở hữu và lịch sử.
                  </div>
                </div>
              </section>

              {/* Tỷ lệ sở hữu (mini panel) */}
              <aside className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 p-5">
                <h3 className="text-[15px] font-semibold text-slate-900">Tỷ lệ sở hữu</h3>
                <div className="mt-3 space-y-3">
                  <div>
                    <div className="flex justify-between text-xs text-slate-600">
                      <span>Nguyễn Văn A</span>
                      <span>40%</span>
                    </div>
                    <div className="mt-1 h-2 w-full rounded-full bg-slate-100">
                      <div className="h-2 w-[40%] rounded-full bg-sky-500" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-slate-600">
                      <span>Trần Thị B</span>
                      <span>35%</span>
                    </div>
                    <div className="mt-1 h-2 w-full rounded-full bg-slate-100">
                      <div className="h-2 w-[35%] rounded-full bg-emerald-500" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-slate-600">
                      <span>Lê Văn C</span>
                      <span>25%</span>
                    </div>
                    <div className="mt-1 h-2 w-full rounded-full bg-slate-100">
                      <div className="h-2 w-[25%] rounded-full bg-indigo-500" />
                    </div>
                  </div>
                </div>
              </aside>
            </div>

            {/* Lịch sử hành trình */}
            <section className="mt-6 rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <header className="flex items-center gap-2 px-5 py-4">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-sky-50 text-sky-600 ring-1 ring-sky-100">
                  🧭
                </span>
                <h2 className="text-[15px] font-semibold text-slate-900">Lịch sử hành trình</h2>
              </header>

              {/* Stats row */}
              <div className="px-5 pb-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="rounded-xl ring-1 ring-slate-200 bg-white p-3">
                  <div className="text-xs text-slate-500">Tổng km</div>
                  <div className="mt-1 text-[18px] font-semibold text-slate-900">650</div>
                </div>
                <div className="rounded-xl ring-1 ring-slate-200 bg-white p-3">
                  <div className="text-xs text-slate-500">Chuyến đi</div>
                  <div className="mt-1 text-[18px] font-semibold text-slate-900">3</div>
                </div>
                <div className="rounded-xl ring-1 ring-slate-200 bg-white p-3">
                  <div className="text-xs text-slate-500">Chi phí</div>
                  <div className="mt-1 text-[18px] font-semibold text-slate-900">485.000đ</div>
                </div>
                <div className="rounded-xl ring-1 ring-slate-200 bg-white p-3">
                  <div className="text-xs text-slate-500">Hiệu quả</div>
                  <div className="mt-1 text-[18px] font-semibold text-slate-900">Tốt</div>
                </div>
              </div>

              {/* List trips */}
              <div className="px-5 pb-5 space-y-3">
                {[
                  { date: "20/10/2025", tag: "Hiệu quả cao", km: "245 km • 4h 30m", cost: "180.000đ" },
                  { date: "18/10/2025", tag: "Bình thường", km: "85 km • 1h 45m", cost: "120.000đ" },
                  { date: "15/10/2025", tag: "Hiệu quả cao", km: "320 km • 5h 20m", cost: "240.000đ" },
                ].map((i) => (
                  <div key={i.date} className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4">
                    <div>
                      <div className="text-[13px] text-slate-500">{i.date}</div>
                      <div className="text-xs text-slate-500">{i.km}</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-sky-100 text-sky-700 text-xs px-2 py-1">{i.tag}</span>
                      <div className="font-semibold text-slate-900">{i.cost}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Chi phí tháng này + Tổng chi phí nhóm */}
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Chi phí tháng này */}
              <section className="lg:col-span-2 rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 p-5">
                <h3 className="text-[15px] font-semibold text-slate-900">Chi phí tháng này</h3>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { name: "Sạc điện", money: "1.250.000đ" },
                    { name: "Bảo dưỡng", money: "3.500.000đ" },
                    { name: "Sạc điện", money: "8.500.000đ" },
                  ].map((c) => (
                    <div key={c.name} className="rounded-xl border border-slate-200 bg-white p-4">
                      <div className="text-[13px] text-slate-600">{c.name}</div>
                      <div className="mt-1 font-semibold text-slate-900">{c.money}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Tổng chi phí nhóm */}
              <aside className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 p-5">
                <div className="text-[13px] text-slate-500">Tổng chi phí nhóm</div>
                <div className="mt-1 text-[22px] font-semibold text-slate-900">13.550.000đ</div>
                <div className="mt-4 text-xs text-slate-500">Phần của bạn (40%)</div>
                <div className="text-[18px] font-semibold text-emerald-600">5.420.000đ</div>

                <div className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-center">
                  <span className="rounded-full bg-emerald-600/90 px-3 py-1 text-xs font-medium text-white">
                    Trạng thái thanh toán
                  </span>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
