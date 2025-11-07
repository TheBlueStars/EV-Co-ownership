import PageHeader from "../../components/PageHeader";
import DataTable from "../../components/DataTable";

export default function StaffMaintenance(){
  const columns = [
    {key:"id", title:"#"},
    {key:"vehicle", title:"Xe"},
    {key:"type", title:"Loại"},
    {key:"assignee", title:"Người phụ trách"},
    {key:"time", title:"Thời gian"},
    {key:"status", title:"Trạng thái"},
  ];
  const data = []; // TODO: /api/maintenance
  return (
    <div className="grid">
      <PageHeader title="Maintenance Management" subtitle="Lịch trình & trạng thái bảo dưỡng"
        right={<button className="btn btn-primary">+ Lịch bảo dưỡng</button>}/>
      <div className="card-white"><DataTable columns={columns} data={data}/></div>
    </div>
  );
}
