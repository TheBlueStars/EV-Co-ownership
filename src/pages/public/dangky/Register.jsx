import { useState } from "react";
import { Eye, EyeOff, Lock, Mail, User, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Register() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", password: "", confirm: ""
  });
  const [err, setErr] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setErr("");
    if (!form.name || !form.email || !form.password) {
      setErr("Vui lòng nhập đầy đủ Họ tên, Email và Mật khẩu.");
      return;
    }
    if (form.password.length < 6) {
      setErr("Mật khẩu tối thiểu 6 ký tự.");
      return;
    }
    if (form.password !== form.confirm) {
      setErr("Xác nhận mật khẩu chưa khớp.");
      return;
    }
    // TODO: gọi API đăng ký
    console.log("register payload:", form);
  };

  return (
    <section className="min-h-[calc(100vh-64px)] bg-slate-100 flex items-center">
      <div className="mx-auto max-w-[1200px] w-full px-4 py-10">
        <div className="mx-auto max-w-[880px]">
          {/* Head */}
          <div className="mb-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm text-emerald-700 ring-1 ring-emerald-100">
              EV Co-ownership
            </div>
            <h1 className="mt-3 text-3xl md:text-4xl font-extrabold text-slate-900">Chào mừng bạn</h1>
          </div>

          {/* Card */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white/90 backdrop-blur p-6 shadow-[0_16px_40px_rgba(2,6,23,.08)]">
              <div className="mb-4 flex items-center justify-between">
                <div className="text-lg font-semibold text-slate-900">Đăng ký</div>
                <Link to="/dangnhap" className="text-sm text-[#1e90ff] hover:underline">Đăng nhập</Link>
              </div>

              {err && <div className="mb-3 rounded-xl bg-red-50 px-3 py-2 text-sm text-red-700">{err}</div>}

              <form className="space-y-4" onSubmit={onSubmit}>
                {/* Name */}
                <Field icon={<User className="h-5 w-5 text-slate-400" />} label="Họ và tên">
                  <input name="name" value={form.name} onChange={onChange}
                         className="w-full outline-none" placeholder="Nguyễn Văn A" />
                </Field>

                {/* Email */}
                <Field icon={<Mail className="h-5 w-5 text-slate-400" />} label="Email">
                  <input type="email" name="email" value={form.email} onChange={onChange}
                         className="w-full outline-none" placeholder="email@sample.com" />
                </Field>

                {/* Phone */}
                <Field icon={<Phone className="h-5 w-5 text-slate-400" />} label="Số điện thoại">
                  <input name="phone" value={form.phone} onChange={onChange}
                         className="w-full outline-none" placeholder="0987 654 321" />
                </Field>

                {/* Password */}
                <label className="block">
                  <span className="text-sm text-slate-700">Mật khẩu</span>
                  <div className="mt-1 flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 focus-within:ring-4 ring-slate-300/40">
                    <Lock className="h-5 w-5 text-slate-400" />
                    <input
                      name="password" type={show ? "text" : "password"} value={form.password} onChange={onChange}
                      className="w-full outline-none" placeholder="••••••••"
                    />
                    <button type="button" onClick={() => setShow((s) => !s)} className="text-slate-400 hover:text-slate-600">
                      {show ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </label>

                {/* Confirm */}
                <label className="block">
                  <span className="text-sm text-slate-700">Xác nhận mật khẩu</span>
                  <div className="mt-1 flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 focus-within:ring-4 ring-slate-300/40">
                    <Lock className="h-5 w-5 text-slate-400" />
                    <input
                      name="confirm" type={show2 ? "text" : "password"} value={form.confirm} onChange={onChange}
                      className="w-full outline-none" placeholder="••••••••"
                    />
                    <button type="button" onClick={() => setShow2((s) => !s)} className="text-slate-400 hover:text-slate-600">
                      {show2 ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </label>

                <button className="w-full rounded-xl bg-[#1e90ff] px-5 py-2.5 text-white hover:brightness-110">
                  Đăng ký tài khoản
                </button>

                <button type="button"
                  className="w-full rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-slate-800 hover:bg-slate-50">
                  Đăng ký với Google
                </button>
              </form>

              <p className="mt-3 text-center text-sm text-slate-600">
                Đã có tài khoản?{" "}
                <Link to="/dangnhap" className="text-[#1e90ff] hover:underline">Đăng nhập</Link>
              </p>
            </div>

            {/* Bên phải: mô tả */}
            <div className="hidden md:block rounded-2xl border border-slate-200 bg-gradient-to-br from-emerald-50 to-white p-6">
              <h3 className="text-lg font-semibold text-slate-900">Bắt đầu thật nhanh</h3>
              <ol className="mt-3 list-decimal pl-5 text-sm text-slate-600 space-y-2">
                <li>Tạo tài khoản & xác thực email.</li>
                <li>Tạo nhóm đồng sở hữu hoặc tham gia nhóm có sẵn.</li>
                <li>Thêm xe, tạo quy tắc chia chi phí & đặt lịch đầu tiên.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ icon, label, children }) {
  return (
    <label className="block">
      <span className="text-sm text-slate-700">{label}</span>
      <div className="mt-1 flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 focus-within:ring-4 ring-slate-300/40">
        {icon}
        {children}
      </div>
    </label>
  );
}
