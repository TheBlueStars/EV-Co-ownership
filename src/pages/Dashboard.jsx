import { useEffect, useState } from "react";
import { apiGet } from "../lib/api";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const toArr = (v, field) => Array.isArray(v) ? v : (v && Array.isArray(v[field]) ? v[field] : []);

export default function Dashboard(){
  const [kpi, setKpi] = useState({ users:0, vehicles:0, groups:0, revenue:0, deltas:{} });
  const [series, setSeries] = useState({ labels:[], users:[] });
  const [activity, setActivity] = useState([]);

  useEffect(()=>{ (async()=>{
    const u  = await apiGet("/api/users/count").catch(()=>({}));
    const v  = await apiGet("/api/vehicles/count").catch(()=>({}));
    const g  = await apiGet("/api/groups/count").catch(()=>({}));
    const s  = await apiGet("/api/reports/summary").catch(()=>({}));
    const ts = await apiGet("/api/reports/users-trend").catch(()=>({}));
    const ac = await apiGet("/api/reports/activity").catch(()=>([]));

    setKpi({
      users:u.total||0, vehicles:v.total||0, groups:g.total||0, revenue:s.revenue||0,
      deltas:{ users:u.deltaPct||0, vehicles:v.deltaPct||0, groups:g.deltaPct||0, revenue:s.revenueDeltaPct||0 }
    });
    setSeries({ labels:toArr(ts,"labels"), users:toArr(ts,"users") });
    setActivity(toArr(ac,"items"));
  })(); },[]);

  const css = getComputedStyle(document.documentElement);
  const options = {
    responsive:true, maintainAspectRatio:false, plugins:{ legend:{display:false} },
    scales:{ x:{grid:{color:css.getPropertyValue("--chart-grid")}},
            y:{grid:{color:css.getPropertyValue("--chart-grid")}} }
  };

  const Kpi = ({title,value,delta,accent})=>(
    <div className={`kpi-mini ${accent?"accent":""}`}>
      <div className="kpi-mini-title">{title}</div>
      <div className="kpi-mini-value">{value}</div>
      <div className="kpi-mini-delta">{(delta>=0?`+${delta}`:delta)||0}% so với tháng trước</div>
    </div>
  );

  return (
    <>
      <div className="page-head">
        <h1>Tổng quan hệ thống</h1>
        <p>Dashboard tổng hợp cho quản trị viên</p>
      </div>

      <div className="kpi-row">
        <Kpi title="Tổng người dùng" value={kpi.users.toLocaleString("vi-VN")} delta={kpi.deltas.users} accent/>
        <Kpi title="Tổng số xe" value={kpi.vehicles.toLocaleString("vi-VN")} delta={kpi.deltas.vehicles}/>
        <Kpi title="Nhóm đồng sở hữu" value={kpi.groups.toLocaleString("vi-VN")} delta={kpi.deltas.groups}/>
        <Kpi title="Doanh thu tháng" value={(kpi.revenue||0).toLocaleString("vi-VN")+" đ"} delta={kpi.deltas.revenue}/>
      </div>

      <div className="two-col">
        <div className="card">
          <div className="section-title">Xu hướng người dùng</div>
          <div style={{position:"relative",height:300}}>
            <Line data={{
              labels: series.labels,
              datasets:[{
                label:"Người dùng mới", data:series.users, tension:.35,
                borderColor:css.getPropertyValue("--chart-revenue"),
                backgroundColor:css.getPropertyValue("--chart-revenue")
              }]
            }} options={options}/>
          </div>
        </div>

        <div className="card">
          <div className="section-title">Hoạt động gần đây</div>
          <ul className="list" style={{gap:10}}>
            {activity.length ? activity.map((a,i)=>(
              <li key={i} className="list-item" style={{padding:"10px 12px"}}>
                <div className="l-left">
                  <span className="avatar" style={{width:10,height:10,borderRadius:999,background:"#2563EB"}}></span>
                  <div className="name" style={{fontWeight:600}}>{a.text}</div>
                </div>
                <div className="meta">{a.ago}</div>
              </li>
            )) : <li className="meta">Chưa có sự kiện.</li>}
          </ul>
        </div>
      </div>
    </>
  );
}
