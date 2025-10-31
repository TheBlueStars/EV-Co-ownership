import PageHeader from "../../components/PageHeader";
import DataTable from "../../components/DataTable";
export default function StaffCosts(){
  const cols = [
    {key:"id", title:"#"},
    {key:"category", title:"Hạng mục"},
    {key:"vehicle", title:"Xe"},
    {key:"amount", title:"Số tiền"},
    {key:"status", title:"Trạng thái"},
    {key:"created", title:"Ngày tạo"},
  ];
  return (
    <div className="grid">
      <PageHeader title="Cost Approvals" subtitle="Kiểm duyệt chi phí vận hành"/>
      <div className="kpi-row"><B/><B/><B/><div className="kpi"/><div className="kpi"/></div>
      <div className="card-white"><DataTable columns={cols} data={[]}/></div>
    </div>
  );
}
function B(){return(<div className="kpi"><div className="title"><span /></div><div className="big">—</div></div>)}
