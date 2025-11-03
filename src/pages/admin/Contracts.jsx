import React, { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import DataTable from "../../components/DataTable";
import { useToast } from "../../lib/toast";
import { apiGet, apiPost } from "../../lib/api";

export default function Contracts(){
  const { push } = useToast();
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(()=>{
    const load = async ()=>{
      try{
        setLoading(true);
        const res = await apiGet("/api/contracts");
        setItems(Array.isArray(res)? res : (res.items||[]));
      }catch(err){
        push(err?.message || "Không tải được danh sách hợp đồng","error");
      }finally{
        setLoading(false);
      }
    };
    load();
  },[push]);

  const act = async (row, action)=>{ 
    try{
      if(action==="approve"){
        await apiPost(`/api/contracts/${row.id}/sign`);
        push("Ký hợp đồng thành công","success");
      } else {
        await apiPost(`/api/contracts/${row.id}/reject`);
        push("Đã từ chối hợp đồng","success");
      }
      // refresh
      const res = await apiGet("/api/contracts");
      setItems(Array.isArray(res)? res : (res.items||[]));
    }catch(err){
      push(err?.message || "Thao tác thất bại","error");
    }
  };

  const cols = [
    { key:"id", title:"#"},
    { key:"vehicle", title:"Xe"},
    { key:"group", title:"Nhóm"},
    { key:"amount", title:"Giá trị"},
    { key:"status", title:"Trạng thái"},
    { key:"created", title:"Ngày tạo"},
    { key:"id", title:"Hành động", render:(_,r)=>(
      <div style={{display:"flex", gap:6}}>
        <button className="btn btn-primary" onClick={(e)=>{e.stopPropagation(); act(r,"approve");}}>Duyệt</button>
        <button className="btn btn-danger"  onClick={(e)=>{e.stopPropagation(); act(r,"reject");}}>Từ chối</button>
      </div>
    )}
  ];

  return (
    <div className="grid">
      <PageHeader title="Hợp đồng" subtitle="Duyệt/ký hợp đồng minh bạch, có log rõ ràng" />
      <div className="card-white">{loading ? <div style={{padding:12}}>Đang tải...</div> : <DataTable columns={cols} data={items}/>}</div>
    </div>
  );
}
