import { useState } from "react";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Login() {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ email: "", password: "", remember: false });
  const [err, setErr] = useState("");

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((s) => ({ ...s, [name]: type === "checkbox" ? checked : value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setErr("");
    if (!form.email || !form.password) {
      setErr("Vui lòng nhập đầy đủ Email và Mật khẩu.");
      return;
    }
    // TODO: gọi API đăng nhập
    console.log("login payload:", form);
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
                <div className="text-lg font-semibold text-slate-900">Đăng nhập</div>
                <Link to="/dangky" className="text-sm text-[#1e90ff] hover:underline">Đăng ký</Link>
              </div>

              {err && <div className="mb-3 rounded-xl bg-red-50 px-3 py-2 text-sm text-red-700">{err}</div>}

              <form className="space-y-4" onSubmit={onSubmit}>
                {/* Email */}
                <label className="block">
                  <span className="text-sm text-slate-700">Email</span>
                  <div className="mt-1 flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 focus-within:ring-4 ring-slate-300/40">
                    <Mail className="h-5 w-5 text-slate-400" />
                    <input
                      name="email" type="email" value={form.email} onChange={onChange}
                      className="w-full outline-none" placeholder="email@sample.com"
                    />
                  </div>
                </label>

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

                {/* options */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 text-sm text-slate-700">
                    <input type="checkbox" name="remember" checked={form.remember} onChange={onChange} />
                    Ghi nhớ tôi
                  </label>
                  <a className="text-sm text-slate-500 hover:text-slate-700" href="#">Quên mật khẩu?</a>
                </div>

                <button className="w-full rounded-xl bg-[#1e90ff] px-5 py-2.5 text-white hover:brightness-110">
                  Đăng nhập
                </button>

                <button type="button"
                  className="w-full rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-slate-800 hover:bg-slate-50">
                  Đăng nhập với Google
                </button>
              </form>

              <p className="mt-3 text-center text-sm text-slate-600">
                Chưa có tài khoản?{" "}
                <Link to="/dangky" className="text-[#1e90ff] hover:underline">Tạo ngay</Link>
              </p>
            </div>

            {/* Bên phải: tips/benefits */}
            <div className="hidden md:block rounded-2xl border border-slate-200 bg-gradient-to-br from-sky-50 to-white p-6">
              <h3 className="text-lg font-semibold text-slate-900">Lợi ích khi tham gia</h3>
              <ul className="mt-3 list-disc pl-5 text-sm text-slate-600 space-y-2">
                <li>Đặt lịch thông minh, tránh xung đột.</li>
                <li>Chia chi phí minh bạch theo mức sử dụng.</li>
                <li>Biểu quyết, quỹ chung, đối soát tự động.</li>
                <li>Audit log & phân quyền nhiều vai trò.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
