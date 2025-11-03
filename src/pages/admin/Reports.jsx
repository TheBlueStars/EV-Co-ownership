import PageHeader from "../../components/PageHeader";
import Skeleton from "../../components/Skeleton";
import React, { useEffect, useState } from "react";
import { apiGet } from "../../lib/api";

export default function Reports(){
  const [kpi, setKpi] = useState({ revenue:"—", cost:"—", profit:"—" });
  const [top, setTop] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const load = async ()=>{
      try{
        const m = await apiGet("/api/reports/metrics?period=month");
        setKpi({
          revenue: m?.revenue ?? "—",
          cost: m?.cost ?? "—",
          profit: m?.profit ?? "—",
        });
        const t = await apiGet("/api/reports/top-groups?limit=10");
        setTop(Array.isArray(t)? t : (t.items||[]));
      }finally{ setLoading(false); }
    };
    load();
  },[]);

  return (
    <div className="grid">
      <PageHeader title="Báo cáo tài chính" subtitle="Tổng quan tài chính toàn hệ thống" />
      <div className="kpi-row">
        <K title="Doanh thu tháng này" value={kpi.revenue}/>
        <K title="Chi phí vận hành" value={kpi.cost}/>
        <K title="Lợi nhuận ròng" value={kpi.profit}/>
      </div>
      <div className="card-white">
        <div className="section-title">Doanh thu theo nhóm (Top 10)</div>
        {loading ? <Skeleton h={220}/> : (
          <div style={{display:"grid", gap:8}}>
            {top.map((g,i)=>{
              const pct = Math.max(2, Math.min(100, Math.round((g.percent||0)*100)));
              return (
                <div key={g.id||i} style={{display:"grid", gridTemplateColumns:"160px 1fr 60px", alignItems:"center", gap:10}}>
                  <div>{g.name}</div>
                  <div className="v-meter"><div style={{width:`${pct}%`}}/></div>
                  <div style={{textAlign:"right"}}>{g.amount ?? "—"}</div>
                </div>
              );
            })}
            {top.length===0 && <div className="meta" style={{padding:12}}>Chưa có dữ liệu</div>}
          </div>
        )}
      </div>
    </div>
  );
}
function K({title, value}){return(<div className="kpi"><div className="title">{title}</div><div className="big">{value ?? "—"}</div><div className="chip">{value?"" : <Skeleton h={12} w="80px" r={999}/>}</div></div>)}
