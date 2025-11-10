// Header gọn cho khu vực Đồng sở hữu
export default function CoOwnerHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-sky-600 text-white">
            🚗
          </span>
          <span className="font-semibold">
            <span className="text-sky-600">EV </span>
            <span className="text-emerald-600">Co-ownership</span>
          </span>
          <span className="ml-3 text-slate-400 text-sm">Đồng sở hữu</span>
        </div>

        <div className="flex items-center gap-2">
          <button className="h-9 w-9 inline-flex items-center justify-center rounded-xl hover:bg-slate-100">🔔</button>
          <button className="h-9 w-9 inline-flex items-center justify-center rounded-xl hover:bg-slate-100">👤</button>
          <button className="ml-1 rounded-xl border px-3 py-1.5 text-sm hover:bg-slate-50">
            [→] Đăng xuất
          </button>
        </div>
      </div>
    </header>
  );
}
