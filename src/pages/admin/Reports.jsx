import PageHeader from "../../components/PageHeader";
import Skeleton from "../../components/Skeleton";

export default function Reports(){
  return (
    <div className="grid">
      <PageHeader title="Báo cáo tài chính" subtitle="Tổng quan tài chính toàn hệ thống" />
      <div className="kpi-row">
        <K title="Doanh thu tháng này"/><K title="Chi phí vận hành"/><K title="Lợi nhuận ròng"/><div className="kpi"/><div className="kpi"/>
      </div>
      <div className="card-white">
        <div className="section-title">Doanh thu theo nhóm (Top 10)</div>
        <Skeleton h={220}/>
      </div>
    </div>
  );
}
function K({title}){return(<div className="kpi"><div className="title">{title}</div><div className="big"><Skeleton h={22} w="60%"/></div><div className="chip"><Skeleton h={12} w="80px" r={999}/></div></div>)}
