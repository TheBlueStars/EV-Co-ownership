import PageHeader from "../../components/PageHeader";
import Skeleton from "../../components/Skeleton";

export default function Dashboard(){
  return (
    <div className="grid">
      <PageHeader title="Tổng quan hệ thống" subtitle="Dashboard tổng hợp cho quản trị viên" />
      <div className="kpi-row">
        <Kpi active title="Tổng người dùng" />
        <Kpi title="Tổng số xe" />
        <Kpi title="Nhóm đồng sở hữu" />
        <Kpi title="Doanh thu tháng" />
      </div>

      <div className="grid-2">
        <div className="card-white">
          <div className="section-title">Xu hướng người dùng</div>
          <Skeleton h={260} />
        </div>
        <div className="card-white">
          <div className="section-title">Hoạt động gần đây</div>
          <div className="qa">
            <Skeleton h={40}/><Skeleton h={40}/><Skeleton h={40}/><Skeleton h={40}/>
          </div>
        </div>
      </div>
    </div>
  );
}
function Kpi({ title, active }) {
  return (
    <div className={`kpi ${active?"kpi--active":""}`}>
      <div className="title">{title}</div>
      <div className="big"><Skeleton h={22} w="60%"/></div>
      <div className="chip"><Skeleton h={12} w="80px" r={999}/></div>
    </div>
  );
}
