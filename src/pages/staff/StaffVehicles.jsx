import PageHeader from "../../components/PageHeader";
export default function StaffVehicles(){
  return (
    <div className="grid">
      <PageHeader title="Vehicle Management" subtitle="Theo dõi tiến độ & phân công theo xe"
        right={<button className="btn btn-primary">+ Add Vehicle</button>}/>
      <div className="v-grid">
        {/* TODO: render thẻ xe từ /api/vehicles */}
        <div style={{gridColumn:"1/-1", padding:16, color:"var(--muted)"}}>Chưa có dữ liệu</div>
      </div>
    </div>
  );
}
