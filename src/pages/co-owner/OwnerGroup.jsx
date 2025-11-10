import CoOwnerHeader from "../../components/CoOwnerHeader";
import OwnerSideNav from "../../components/OwnerSideNav";
import { Link } from "react-router-dom";

export default function OwnerGroup() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header khu vực đồng sở hữu */}
      <CoOwnerHeader />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 pb-12 flex gap-6">
        {/* Sidebar */}
        <OwnerSideNav active="group" />

        {/* Content */}
        <section className="flex-1 space-y-6">
          <header>
            <h1 className="text-2xl font-semibold text-slate-900">
              Quản lý nhóm đồng sở hữu
            </h1>
            <p className="mt-1 text-slate-500">
              Quản lý thành viên và quỹ chung của nhóm
            </p>
          </header>

          {/* Tỷ lệ sở hữu (empty state) */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-50">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-sky-600" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 11a4 4 0 10-8 0" />
                  <path d="M12 15v6M8 21h8" />
                </svg>
              </span>
              <h2 className="text-lg font-medium text-slate-900">Tỷ lệ sở hữu</h2>
            </div>

            {/* Empty */}
            <div className="mt-4 rounded-xl border border-dashed border-slate-300 p-6 text-center">
              <p className="text-slate-600">Chưa có dữ liệu tỷ lệ sở hữu.</p>
              <div className="mt-4">
                <Link
                  to="#"
                  className="inline-flex items-center rounded-xl bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-700"
                >
                  Cập nhật tỷ lệ
                </Link>
              </div>
            </div>
          </div>

          {/* Quỹ chung (empty state, không số liệu) */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-medium text-slate-900">Quỹ chung</h2>

            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-slate-200 p-4">
                <p className="text-sm text-slate-500">Số dư hiện tại</p>
                <p className="mt-1 text-xl font-semibold text-slate-900">—</p>
              </div>
              <div className="rounded-xl border border-slate-200 p-4">
                <p className="text-sm text-slate-500">Đã chi tháng này</p>
                <p className="mt-1 text-xl font-semibold text-slate-900">—</p>
              </div>
              <div className="rounded-xl border border-slate-200 p-4">
                <p className="text-sm text-slate-500">Dự kiến chi tiếp</p>
                <p className="mt-1 text-xl font-semibold text-slate-900">—</p>
              </div>
            </div>

            {/* progress placeholder */}
            <div className="mt-4">
              <div className="h-2 w-full rounded-full bg-slate-100" />
            </div>
          </div>

          {/* Biểu quyết & Quyết định (empty) */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-medium text-slate-900">
              Biểu quyết & Quyết định chung
            </h2>

            <div className="mt-4 rounded-xl border border-dashed border-slate-300 p-6 text-center">
              <p className="text-slate-600">Chưa có đề xuất nào.</p>
              <div className="mt-4">
                <Link
                  to="#"
                  className="inline-flex items-center rounded-xl ring-1 ring-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  Tạo đề xuất
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
