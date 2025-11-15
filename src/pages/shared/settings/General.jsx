import { useState } from "react";

export default function General() {
  const [cfg, setCfg] = useState({
    lang: "vi",
    theme: "light",
    time24h: true,
    autoSave: true,
  });

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCfg((s) => ({ ...s, [name]: type === "checkbox" ? checked : value }));
  };

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">Cài đặt chung</h1>

      <div className="grid gap-4 md:max-w-2xl">
        <Row label="Ngôn ngữ">
          <select name="lang" value={cfg.lang} onChange={onChange} className="rounded-xl border border-slate-200 bg-white px-3 py-2">
            <option value="vi">Tiếng Việt</option>
            <option value="en">English</option>
          </select>
        </Row>
        <Row label="Giao diện">
          <select name="theme" value={cfg.theme} onChange={onChange} className="rounded-xl border border-slate-200 bg-white px-3 py-2">
            <option value="light">Sáng</option>
            <option value="dark">Tối</option>
            <option value="system">Theo hệ thống</option>
          </select>
        </Row>
        <Row label="Định dạng giờ 24h">
          <input type="checkbox" name="time24h" checked={cfg.time24h} onChange={onChange} />
        </Row>
        <Row label="Tự động lưu biểu mẫu">
          <input type="checkbox" name="autoSave" checked={cfg.autoSave} onChange={onChange} />
        </Row>
      </div>
    </section>
  );
}

function Row({ label, children }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4">
      <div className="font-medium text-slate-900">{label}</div>
      <div>{children}</div>
    </div>
  );
}
