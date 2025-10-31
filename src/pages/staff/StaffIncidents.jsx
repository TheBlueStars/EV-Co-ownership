import PageHeader from "../../components/PageHeader";
import DataTable from "../../components/DataTable";

export default function StaffIncidents(){
  const cols = [
    {key:"id", title:"#"},
    {key:"vehicle", title:"Xe"},
    {key:"severity", title:"Mức độ"},
    {key:"status", title:"Trạng thái"},
    {key:"created", title:"Thời gian"},
  ];
  return (
    <div className="grid">
      <PageHeader title="Incident Reports" subtitle="Báo cáo sự cố & trạng thái xử lý"/>
      <div className="card-white"><DataTable columns={cols} data={[]}/></div>
    </div>
  );
}
