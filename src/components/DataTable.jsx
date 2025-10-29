import { useEffect, useMemo, useState } from "react";

export default function DataTable({
  columns, fetcher, pageSize = 10, defaultSort = "createdAt", defaultOrder = "desc", reloadKey = ""
}){
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(defaultSort);
  const [order, setOrder] = useState(defaultOrder);
  const [rows, setRows] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const query = useMemo(() => ({ page, pageSize, search, sort, order }), [page, pageSize, search, sort, order]);

  useEffect(() => {
    let alive = true; setLoading(true);
    fetcher(query)
      .then(({ items, total }) => { if(!alive) return; setRows(items || []); setTotal(total || 0); })
      .catch(() => {})
      .finally(() => alive && setLoading(false));
    return () => { alive = false; };
  }, [fetcher, query, reloadKey]);

  const from = (page - 1) * pageSize + 1;
  const to = Math.min(page * pageSize, total);

  return (
    <>
      <div className="toolbar">
        <input className="input" placeholder="Tìm kiếm..." value={search}
          onChange={e => { setPage(1); setSearch(e.target.value.trimStart()); }} />
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              {columns.map(c => (
                <th key={c.key}
                  onClick={() => c.sortable && (setPage(1), setSort(c.key), setOrder(o => sort === c.key ? (o === "asc" ? "desc" : "asc") : "asc"))}
                >
                  {c.label}{c.sortable && sort === c.key ? (order === "asc" ? " ▲" : " ▼") : ""}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={columns.length}>Đang tải…</td></tr>
            ) : rows.length ? rows.map((r, i) => (
              <tr key={r.id || i}>
                {columns.map(c => (
                  <td key={c.key} dangerouslySetInnerHTML={{ __html: c.render ? c.render(r) : (r[c.key] ?? "") }} />
                ))}
              </tr>
            )) : (
              <tr><td colSpan={columns.length}>Không có dữ liệu</td></tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <button className="btn" onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page <= 1}>‹</button>
        <span>{total ? `${from}-${to}/${total}` : "0/0"}</span>
        <button className="btn" onClick={() => setPage(p => p * pageSize < total ? p + 1 : p)} disabled={page * pageSize >= total}>›</button>
      </div>
    </>
  );
}
