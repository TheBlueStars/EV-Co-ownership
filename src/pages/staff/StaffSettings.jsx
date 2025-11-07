import PageHeader from "../../components/PageHeader";
export default function StaffSettings(){
  return (
    <div className="grid">
      <PageHeader title="Cài đặt" subtitle="Quản lý hồ sơ, bảo mật, thông báo & giao diện"/>
      <div className="grid-3">
        <div className="card-white">
          <div className="section-title">Profile Settings</div>
          <label>Họ tên<input className="input" placeholder="—"/></label>
          <label>Email<input className="input" placeholder="—"/></label>
          <button className="btn btn-primary">Lưu thay đổi</button>
        </div>
        <div className="card-white">
          <div className="section-title">Security</div>
          <label>Mật khẩu<input className="input" type="password" placeholder="••••••••"/></label>
          <button className="btn">Cập nhật mật khẩu</button>
        </div>
        <div className="card-white">
          <div className="section-title">Appearance</div>
          <label>Theme<select className="input"><option>Light</option><option>Dark</option></select></label>
          <label>Density<select className="input"><option>Comfortable</option><option>Compact</option></select></label>
        </div>
      </div>
      <div className="card-white">
        <div className="section-title" style={{color:"var(--red)"}}>Danger Zone</div>
        <div className="toolbar">
          <div className="meta">Xoá cache local / reset layout</div>
          <div style={{flex:1}}/>
          <button className="btn btn-danger">Clear Cache</button>
        </div>
      </div>
    </div>
  );
}
