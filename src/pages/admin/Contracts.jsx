import React, { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import DataTable from "../../components/DataTable";
import { useToast } from "../../lib/toast";

export default function Contracts(){
  const { push } = useToast();
  const [loading] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(()=>{ /* TODO: load contracts -> setItems */ },[]);

  const act = async (row, action)=>{ 
    // TODO: approve/reject
    push(action==="approve"?"Đã duyệt hợp đồng":"Đã từ chối","success");
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
      <div className="card-white">{loading ? "Đang tải..." : <DataTable columns={cols} data={items}/>}</div>
    </div>
  );
}
