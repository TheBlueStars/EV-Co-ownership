import { useState } from "react";

export default function Preferences() {
  const [pref, setPref] = useState({
    notifBooking: true,
    notifInvoice: true,
    notifVote: true,
    emailDigest: "daily",
  });

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPref((s) => ({ ...s, [name]: type === "checkbox" ? checked : value }));
  };

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">Tùy chọn</h1>

      <div className="grid gap-4 md:max-w-2xl">
        <Item label="Thông báo lịch đặt">
          <input type="checkbox" name="notifBooking" checked={pref.notifBooking} onChange={onChange} />
        </Item>
        <Item label="Thông báo hoá đơn">
          <input type="checkbox" name="notifInvoice" checked={pref.notifInvoice} onChange={onChange} />
        </Item>
        <Item label="Thông báo biểu quyết">
          <input type="checkbox" name="notifVote" checked={pref.notifVote} onChange={onChange} />
        </Item>
        <Item label="Tổng hợp email">
          <select name="emailDigest" value={pref.emailDigest} onChange={onChange} className="rounded-xl border border-slate-200 bg-white px-3 py-2">
            <option value="off">Tắt</option>
            <option value="daily">Hàng ngày</option>
            <option value="weekly">Hàng tuần</option>
          </select>
        </Item>
      </div>
    </section>
  );
}

function Item({ label, children }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4">
      <div className="font-medium text-slate-900">{label}</div>
      <div>{children}</div>
    </div>
  );
}
