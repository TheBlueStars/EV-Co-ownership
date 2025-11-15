// src/components/ui/DataGrid.jsx
// Grid card đơn giản – dùng cho danh sách xe, vote...
export default function DataGrid({ items = [], renderItem, emptyText = "Không có dữ liệu" }) {
  if (!items.length) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50 p-6 text-center text-xs text-slate-500">
        {emptyText}
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, idx) => (
        <div key={idx}>{renderItem(item)}</div>
      ))}
    </div>
  );
}
