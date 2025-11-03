import PageHeader from "../../components/PageHeader";
import React, { useEffect, useState } from "react";
import { apiGet } from "../../lib/api";
export default function StaffVehicles(){
  return (
    <div className="grid">
      <PageHeader title="Vehicle Management" subtitle="Theo dõi tiến độ & phân công theo xe"
        right={<button className="btn btn-primary">+ Add Vehicle</button>}/>
      <VehicleGrid/>
    </div>
  );
}

function VehicleGrid(){
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    const load = async ()=>{
      try{
        const res = await apiGet("/api/vehicles");
        setItems(Array.isArray(res)? res : (res.items||[]));
      }finally{ setLoading(false); }
    };
    load();
  },[]);
  if(loading) return <div className="v-grid">{Array.from({length:6}).map((_,i)=>(<div key={i} className="v-card" style={{height:120}}/>))}</div>;
  if(items.length===0) return <div className="v-grid"><div style={{gridColumn:"1/-1", padding:16, color:"var(--muted)"}}>Chưa có dữ liệu</div></div>;
  return (
    <div className="v-grid">
      {items.map(v=>(
        <div className="v-card" key={v.id}>
          <div className="v-title">{v.name}</div>
          <div className="meta">{v.vin}</div>
          <div style={{height:10}}/>
          <div className="grid-3">
            <div><div className="meta">Nhóm:</div><b>{v.group}</b></div>
            <div><div className="meta">Đồng sở hữu:</div><b>{v.owners} người</b></div>
            <div><div className="meta">Doanh thu/tháng:</div><b>{v.revenue}</b></div>
          </div>
          <div style={{height:10}}/>
          <div className="v-meter"><div style={{width:`${v.utilization||70}%`}}/></div>
        </div>
      ))}
    </div>
  );
}
