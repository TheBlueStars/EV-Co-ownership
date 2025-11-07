import PageHeader from "../../components/PageHeader";
import DataTable from "../../components/DataTable";
import React, { useEffect, useState } from "react";
import { apiGet, apiPost } from "../../lib/api";
export default function StaffCosts(){
  const cols = [
    {key:"id", title:"#"},
    {key:"category", title:"Hạng mục"},
    {key:"vehicle", title:"Xe"},
    {key:"amount", title:"Số tiền"},
    {key:"status", title:"Trạng thái"},
    {key:"created", title:"Ngày tạo"},
  ];
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{ (async()=>{
    try{ const res = await apiGet("/api/costs"); setRows(Array.isArray(res)? res : (res.items||[])); }
    finally{ setLoading(false); }
  })(); },[]);

  const approve = async (row)=>{
    await apiPost(`/api/costs/${row.id}/approve`);
    const res = await apiGet("/api/costs");
    setRows(Array.isArray(res)? res : (res.items||[]));
  };

  return (
    <div className="grid">
      <PageHeader title="Cost Approvals" subtitle="Kiểm duyệt chi phí vận hành"/>
      <div className="kpi-row"><B/><B/><B/><div className="kpi"/></div>
      <div className="card-white">{loading? "Đang tải...": <DataTable columns={cols} data={rows}/>}</div>
    </div>
  );
}
function B(){return(<div className="kpi"><div className="title"><span /></div><div className="big">—</div></div>)}
