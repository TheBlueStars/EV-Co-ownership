// src/components/ui/Table.jsx
export default function Table({ columns = [], data = [], rowKey }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase text-slate-500">
            <tr>
              {columns.map((col) => (
                <th key={col.key} className="px-4 py-2 font-semibold">
                  {col.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {data.length === 0 && (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-4 py-4 text-center text-xs text-slate-500"
                >
                  Không có dữ liệu
                </td>
              </tr>
            )}
            {data.map((row, idx) => (
              <tr key={rowKey ? row[rowKey] : idx} className="hover:bg-slate-50">
                {columns.map((col) => (
                  <td key={col.key} className="px-4 py-2 align-top">
                    {col.render ? col.render(row[col.dataIndex], row) : row[col.dataIndex]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
