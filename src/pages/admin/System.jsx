import { useState } from "react";
import PageHeader from "../../components/PageHeader";
import { apiPost } from "../../lib/api";
import { useToast } from "../../lib/toast";

export default function System(){
  const { push } = useToast();
  const [sec, setSec] = useState({ mfa:false, loginAlert:true });
  const [email, setEmail] = useState({ from:"noreply@ev.app", smtpHost:"smtp.example.com", smtpPort:587, user:"", pass:"" });
  const [pay, setPay] = useState({ provider:"stripe", publicKey:"", secretKey:"" });
  const [ui, setUi]   = useState({ brandName:"EV Co-ownership", primary:"#2563EB" });

  const save = async (key, data)=>{
    try{ await apiPost(`/api/system/${key}`, data); push("Đã lưu cấu hình","success"); }
    catch{ push("Lỗi lưu cấu hình","error"); }
  };

  return (
    <>
      <PageHeader title="Cài đặt hệ thống" subtitle="Quản lí cấu hình và bảo mật" />
      <div className="two-col" style={{gridTemplateColumns:"1fr 1fr"}}>
        {/* Bảo mật */}
        <div className="card">
          <div className="section-title">Bảo mật 🔒</div>
          <div className="list-block">
            <label className="list-item-btn">Quản lí quyền truy cập <span className="meta">Thiết lập vai trò/role</span></label>
            <label className="list-item-btn">Nhật kí hoạt động <span className="meta">Audit log</span></label>
            <div className="list-item-btn">
              <div>Xác thực 2 yếu tố (MFA)</div>
              <input type="checkbox" className="switch" checked={sec.mfa} onChange={e=>setSec({...sec,mfa:e.target.checked})}/>
            </div>
            <div className="list-item-btn">
              <div>Cảnh báo đăng nhập lạ</div>
              <input type="checkbox" className="switch" checked={sec.loginAlert} onChange={e=>setSec({...sec,loginAlert:e.target.checked})}/>
            </div>
            <div style={{textAlign:"right"}}><button className="btn btn-primary" onClick={()=>save("security",sec)}>Lưu bảo mật</button></div>
          </div>
        </div>

        {/* Cấu hình email */}
        <div className="card">
          <div className="section-title">Cấu hình Email 📧</div>
          <div style={{display:"grid",gap:10}}>
            <label>From <input className="input" value={email.from} onChange={e=>setEmail({...email,from:e.target.value})}/></label>
            <label>SMTP Host <input className="input" value={email.smtpHost} onChange={e=>setEmail({...email,smtpHost:e.target.value})}/></label>
            <label>SMTP Port <input className="input" type="number" value={email.smtpPort} onChange={e=>setEmail({...email,smtpPort:+e.target.value})}/></label>
            <label>User <input className="input" value={email.user} onChange={e=>setEmail({...email,user:e.target.value})}/></label>
            <label>Password <input className="input" type="password" value={email.pass} onChange={e=>setEmail({...email,pass:e.target.value})}/></label>
            <div style={{textAlign:"right"}}><button className="btn btn-primary" onClick={()=>save("email",email)}>Lưu email</button></div>
          </div>
        </div>

        {/* Thanh toán */}
        <div className="card">
          <div className="section-title">Thanh toán 💳</div>
          <label>Nhà cung cấp
            <select className="input" value={pay.provider} onChange={e=>setPay({...pay,provider:e.target.value})}>
              <option value="stripe">Stripe</option>
              <option value="paypal">PayPal</option>
              <option value="momo">MoMo</option>
            </select>
          </label>
          <label>Public Key <input className="input" value={pay.publicKey} onChange={e=>setPay({...pay,publicKey:e.target.value})}/></label>
          <label>Secret Key <input className="input" value={pay.secretKey} onChange={e=>setPay({...pay,secretKey:e.target.value})}/></label>
          <div style={{textAlign:"right"}}><button className="btn btn-primary" onClick={()=>save("payment",pay)}>Lưu thanh toán</button></div>
        </div>

        {/* Tùy chỉnh giao diện */}
        <div className="card">
          <div className="section-title">Tùy chỉnh giao diện 🎨</div>
          <label>Tên thương hiệu <input className="input" value={ui.brandName} onChange={e=>setUi({...ui,brandName:e.target.value})}/></label>
          <label>Màu chủ đạo (HEX) <input className="input" value={ui.primary} onChange={e=>setUi({...ui,primary:e.target.value})}/></label>
          <div style={{textAlign:"right"}}><button className="btn btn-primary" onClick={()=>save("ui",ui)}>Lưu giao diện</button></div>
        </div>
      </div>
    </>
  );
}
