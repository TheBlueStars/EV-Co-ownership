import PageHeader from "../../components/PageHeader";
import Skeleton from "../../components/Skeleton";
import React, { useEffect, useState } from "react";
import { apiGet } from "../../lib/api";

export default function StaffDashboard(){
  const [m,setM] = useState({ requests:0, openTasks:0, monthCost:0, incidents:0 });
  useEffect(()=>{ (async()=>{
    const res = await apiGet("/api/staff/metrics");
    setM({
      requests: res?.requests ?? 0,
      openTasks: res?.openTasks ?? 0,
      monthCost: res?.monthCost ?? 0,
      incidents: res?.incidents ?? 0,
    });
  })(); },[]);
  return (
    <div className="grid">
      <PageHeader title="Staff Dashboard" subtitle="Tổng quan công việc vận hành"/>
      <div className="kpi-row">
        <S title="Requests" value={m.requests}/><S title="Open Tasks" value={m.openTasks}/><S title="Chi phí tháng" value={m.monthCost}/><S title="Sự cố" value={m.incidents}/>
      </div>
      <div className="grid-2">
        <div className="card-white"><div className="section-title">Cost Distribution</div><Skeleton h={260}/></div>
        <div className="card-white"><div className="section-title">Maintenance Workload</div><Skeleton h={260}/></div>
      </div>
      <div className="grid-2">
        <div className="card-white">
          <div className="section-title">Recent Requests</div>
          <Skeleton h={40}/><Skeleton h={40}/><Skeleton h={40}/>
        </div>
        <div className="card-white">
          <div className="section-title">Quick Actions</div>
          <div className="qa"><QA/><QA/><QA/><QA/></div>
        </div>
      </div>
    </div>
  );
}
function S({title, value}){return(<div className="kpi"><div className="title">{title}</div><div className="big">{value===0?0:(value|| <Skeleton h={22} w="50%"/>)}</div></div>)}
function QA(){return(<div className="qa-item"><span><Skeleton h={14} w="180px"/></span><button className="btn btn-primary">Thực hiện</button></div>)}
