import { Vote, CalendarRange, Users } from "lucide-react";

export default function CreateVote() {
  return (
    <section className="bg-slate-100">
      <div className="mx-auto max-w-[800px] px-4 py-6 md:px-6">
        <div className="mb-4 flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-white">
            <Vote className="h-4 w-4" />
          </span>
          <div>
            <h1 className="text-lg md:text-xl font-extrabold text-slate-900">
              Tạo cuộc biểu quyết mới
            </h1>
            <p className="text-xs text-slate-600">
              Admin khởi tạo voting cho một nhóm hoặc nhiều nhóm.
            </p>
          </div>
        </div>

        <form className="space-y-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm text-sm">
          <div>
            <label className="block text-xs font-medium text-slate-700">
              Tiêu đề
            </label>
            <input
              type="text"
              placeholder="Nâng cấp pin xe"
              className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:bg-white"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700">
              Mô tả / nội dung
            </label>
            <textarea
              rows={3}
              placeholder="Mô tả chi tiết đề xuất..."
              className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:bg-white"
            />
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            <div>
              <label className="block text-xs font-medium text-slate-700">
                Hạn biểu quyết
              </label>
              <div className="mt-1 flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                <CalendarRange className="h-4 w-4 text-slate-500" />
                <input
                  type="datetime-local"
                  className="w-full bg-transparent text-sm outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-700">
                Nhóm áp dụng
              </label>
              <div className="mt-1 flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                <Users className="h-4 w-4 text-slate-500" />
                <select className="w-full bg-transparent text-sm outline-none">
                  <option>EV-Group-01</option>
                  <option>EV-Group-02</option>
                  <option>Tất cả nhóm</option>
                </select>
              </div>
            </div>
          </div>

          <button className="mt-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-medium text-white hover:bg-emerald-700 active:translate-y-[1px]">
            Tạo biểu quyết (mock)
          </button>
        </form>
      </div>
    </section>
  );
}
