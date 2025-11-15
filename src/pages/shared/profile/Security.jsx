import { useState } from "react";
import { Eye, EyeOff, Shield } from "lucide-react";

export default function Security() {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ oldPass: "", newPass: "", confirm: "", twoFA: false });
  const [msg, setMsg] = useState("");

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((s) => ({ ...s, [name]: type === "checkbox" ? checked : value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.newPass.length < 6) return setMsg("Mật khẩu tối thiểu 6 ký tự.");
    if (form.newPass !== form.confirm) return setMsg("Xác nhận mật khẩu chưa khớp.");
    setMsg("Đã đổi mật khẩu (mock).");
  };

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">Bảo mật</h1>

      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <div className="mb-3 flex items-center gap-3">
          <Shield className="h-5 w-5 text-emerald-600" />
          <div className="font-semibold">Đổi mật khẩu</div>
        </div>
        <form className="grid gap-3 md:max-w-md" onSubmit={onSubmit}>
          <Field label="Mật khẩu hiện tại">
            <input name="oldPass" type="password" value={form.oldPass} onChange={onChange} className="w-full outline-none" />
          </Field>
          <Field label="Mật khẩu mới">
            <div className="flex items-center gap-2">
              <input name="newPass" type={show ? "text" : "password"} value={form.newPass} onChange={onChange} className="w-full outline-none" />
              <button type="button" onClick={() => setShow(s => !s)} className="text-slate-400 hover:text-slate-600">
                {show ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </Field>
          <Field label="Xác nhận mật khẩu">
            <input name="confirm" type="password" value={form.confirm} onChange={onChange} className="w-full outline-none" />
          </Field>
          <label className="mt-2 flex items-center gap-2 text-sm">
            <input type="checkbox" name="twoFA" checked={form.twoFA} onChange={onChange} />
            Bật xác thực 2 lớp (2FA)
          </label>
          <div className="mt-2 flex items-center gap-3">
            <button className="rounded-xl bg-[#1e90ff] px-5 py-2.5 text-white">Lưu</button>
            {msg && <span className="text-sm text-slate-600">{msg}</span>}
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <div className="mb-1 text-sm text-slate-600">{label}</div>
      <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 focus-within:ring-4 ring-slate-300/40">
        {children}
      </div>
    </label>
  );
}
