import OwnerSideNav from "../../components/OwnerSideNav";

function ContractItem({ title, status = "Có hiệu lực" }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white px-4 py-4 hover:bg-slate-50 transition">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-sky-600 text-xl">📄</span>
          <div className="text-[15px] font-semibold text-slate-900">{title}</div>
        </div>
        <span className="text-emerald-600 text-sm font-medium">{status}</span>
      </div>
    </div>
  );
}

export default function Contracts() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-6">
          <OwnerSideNav />

          <section className="flex-1">
            <h1 className="text-2xl font-bold text-slate-900">
              Hợp đồng đồng sở hữu
            </h1>
            <p className="mt-1 text-slate-500 text-sm">
              Quản lý hợp đồng và tài liệu pháp lý
            </p>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
              <div className="text-lg font-semibold text-slate-900 mb-4">
                Hợp đồng hiện tại
              </div>

              <div className="space-y-3">
                <ContractItem title="Hợp đồng đồng sở hữu chính" />
                <ContractItem title="Phụ lục bảo hiểm" />
                <ContractItem title="Thỏa thuận sử dụng xe" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
