import PageHeader from "../../components/PageHeader";
import DataTable from "../../components/DataTable";
import React, { useEffect, useState } from "react";
import { apiGet } from "../../lib/api";

export default function StaffIncidents(){
  const cols = [
    {key:"id", title:"#"},
    {key:"vehicle", title:"Xe"},
    {key:"severity", title:"Mức độ"},
    {key:"status", title:"Trạng thái"},
    {key:"created", title:"Thời gian"},
  ];
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const load = async ()=>{
      try{
        const res = await apiGet("/api/incidents");
        setRows(Array.isArray(res)? res : (res.items||[]));
      }finally{ setLoading(false); }
    };
    load();
  },[]);

  return (
    <div className="grid">
      <PageHeader title="Incident Reports" subtitle="Báo cáo sự cố & trạng thái xử lý"/>
      <div className="card-white">{loading? "Đang tải..." : <DataTable columns={cols} data={rows}/>}</div>
    </div>
  );
}
