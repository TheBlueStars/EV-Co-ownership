import { useEffect, useState } from "react";
import { updateUser } from "../../../services/userService";
import { me } from "../../../services/authService";

export default function ProfileEdit() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [msg, setMsg] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await me();
        const u = res?.data ?? { name: "Bạn", email: "you@example.com", phone: "" };
        setForm({ name: u.name, email: u.email, phone: u.phone ?? "" });
      } catch {}
    })();
  }, []);

  const onChange = (e) => setForm(s => ({ ...s, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    try {
      await updateUser("me", form); // tuỳ backend, có thể là id của user
      setMsg("Đã lưu thay đổi.");
    } catch {
      setMsg("Lưu tạm ở client (mock).");
    }
  };

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">Chỉnh sửa hồ sơ</h1>
      <form onSubmit={onSubmit} className="grid gap-4 md:max-w-xl">
        <Field label="Họ và tên">
          <input name="name" value={form.name} onChange={onChange} className="w-full outline-none" placeholder="Nguyễn Văn A" />
        </Field>
        <Field label="Email">
          <input type="email" name="email" value={form.email} onChange={onChange} className="w-full outline-none" placeholder="you@example.com" />
        </Field>
        <Field label="Số điện thoại">
          <input name="phone" value={form.phone} onChange={onChange} className="w-full outline-none" placeholder="0900 000 000" />
        </Field>
        <div className="flex items-center gap-3">
          <button className="rounded-xl bg-[#1e90ff] px-5 py-2.5 text-white">Lưu lại</button>
          {msg && <span className="text-sm text-slate-600">{msg}</span>}
        </div>
      </form>
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
