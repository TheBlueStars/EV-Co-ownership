import React, { useMemo, useState } from "react";

export default function DataTable({ columns, data = [], pageSize = 8, onRowClick }) {
  const [q, setQ] = useState("");
  const [sort, setSort] = useState({ key: null, dir: 1 });
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const kw = q.trim().toLowerCase();
    let rows = !kw ? data : data.filter((r) =>
      Object.values(r).some((v) => String(v ?? "").toLowerCase().includes(kw))
    );
    if (sort.key) {
      rows = rows.slice().sort((a,b)=>{
        const x=a[sort.key], y=b[sort.key];
        return (x>y?1:x<y?-1:0)*sort.dir;
      });
    }
    return rows;
  }, [data, q, sort]);

  const total = Math.max(1, Math.ceil(filtered.length / pageSize));
  const view = filtered.slice((page-1)*pageSize, page*pageSize);

  return (
    <div>
      <div className="toolbar">
        <input className="input" placeholder="Tìm kiếm..." value={q}
               onChange={(e)=>{ setQ(e.target.value); setPage(1); }}/>
        <div style={{flex:1}}/>
        <div className="meta">Tổng: {filtered.length}</div>
      </div>

      <table className="table">
        <thead>
          <tr>
            {columns.map(c=>(
              <th key={c.key} onClick={()=>setSort(s=>({ key:c.key, dir: s.key===c.key? -s.dir : 1 }))}
                  style={{cursor:"pointer"}}>
                {c.title}{sort.key===c.key ? (sort.dir>0?" ▲":" ▼") : ""}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {view.map((r,i)=>(
            <tr key={r.id ?? i} onClick={()=>onRowClick?.(r)} style={{cursor:onRowClick?"pointer":"default"}}>
              {columns.map(c=>(
                <td key={c.key}>{c.render? c.render(r[c.key], r) : r[c.key]}</td>
              ))}
            </tr>
          ))}
          {view.length===0 && (
            <tr><td colSpan={columns.length} style={{padding:22, textAlign:"center", color:"var(--muted)"}}>
              Chưa có dữ liệu
            </td></tr>
          )}
        </tbody>
      </table>

      <div className="toolbar" style={{justifyContent:"flex-end"}}>
        <button className="btn" disabled={page<=1} onClick={()=>setPage(p=>p-1)}>« Trước</button>
        <div className="meta">Trang {page}/{total}</div>
        <button className="btn" disabled={page>=total} onClick={()=>setPage(p=>p+1)}>Sau »</button>
      </div>
    </div>
  );
}
