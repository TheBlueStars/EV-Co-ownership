import PageHeader from "../../components/PageHeader";
import Skeleton from "../../components/Skeleton";

export default function StaffDashboard(){
  return (
    <div className="grid">
      <PageHeader title="Staff Dashboard" subtitle="Tổng quan công việc vận hành"/>
      <div className="kpi-row">
        <S title="Requests"/><S title="Open Tasks"/><S title="Chi phí tháng"/><S title="Sự cố"/><div className="kpi"/>
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
function S({title}){return(<div className="kpi"><div className="title">{title}</div><div className="big"><Skeleton h={22} w="50%"/></div></div>)}
function QA(){return(<div className="qa-item"><span><Skeleton h={14} w="180px"/></span><button className="btn btn-primary">Thực hiện</button></div>)}
