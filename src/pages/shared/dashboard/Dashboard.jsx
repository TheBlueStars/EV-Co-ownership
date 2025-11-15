import { useEffect, useState } from "react";
import { CalendarDays, Users, DollarSign, Car } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { listBookings } from "../../../services/bookingService";
import { listCosts } from "../../../services/costService";
import { getFund } from "../../../services/fundService";

export default function Dashboard() {
  const [stats, setStats] = useState({ bookings: 0, coowners: 0, cost: 0, vehicles: 0 });
  const [series, setSeries] = useState([
    { day: "T2", value: 3 },
    { day: "T3", value: 6 },
    { day: "T4", value: 5 },
    { day: "T5", value: 8 },
    { day: "T6", value: 7 },
    { day: "T7", value: 9 },
    { day: "CN", value: 4 }
  ]);
  const [fund, setFund] = useState({ balance: 0 });

  useEffect(() => {
    (async () => {
      try {
        const [b, c, f] = await Promise.all([
          listBookings().catch(() => ({ data: { length: 12 } })),
          listCosts().catch(() => ({ data: { total: 1234500 } })),
          getFund().catch(() => ({ data: { balance: 5600000 } })),
        ]);
        setStats(s => ({
          ...s,
          bookings: b?.data?.length ?? 12,
          cost: c?.data?.total ?? 1234500,
          coowners: 6, // TODO: map từ API nhóm/people
          vehicles: 2,  // TODO: map từ API vehicles
        }));
        setFund(f?.data ?? { balance: 5600000 });
      } catch {}
    })();
  }, []);

  const cards = [
    { icon: <CalendarDays className="h-5 w-5 text-sky-600" />, label: "Lịch đã đặt", value: stats.bookings },
    { icon: <Users className="h-5 w-5 text-violet-600" />, label: "Thành viên", value: stats.coowners },
    { icon: <DollarSign className="h-5 w-5 text-emerald-600" />, label: "Chi phí tháng", value: stats.cost.toLocaleString() + " đ" },
    { icon: <Car className="h-5 w-5 text-indigo-600" />, label: "Xe đang quản lý", value: stats.vehicles },
  ];

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">Tổng quan</h1>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map(c => (
          <div key={c.label} className="rounded-2xl border border-slate-200 bg-white p-4">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-slate-50 p-2">{c.icon}</div>
              <div>
                <div className="text-sm text-slate-500">{c.label}</div>
                <div className="text-lg font-semibold text-slate-900">{c.value}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 lg:col-span-2">
          <div className="mb-3 font-semibold text-slate-900">Xu hướng sử dụng (7 ngày)</div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={series}>
                <defs>
                  <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.6}/>
                    <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#0ea5e9" fill="url(#g)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <div className="mb-3 font-semibold text-slate-900">Quỹ chung</div>
          <div className="text-3xl font-extrabold text-emerald-600">{fund.balance.toLocaleString()} đ</div>
          <p className="mt-2 text-sm text-slate-600">Số dư hiện tại của nhóm đồng sở hữu.</p>
          <div className="mt-4 flex gap-2">
            <button className="rounded-xl bg-emerald-600 px-4 py-2 text-white">Nạp quỹ</button>
            <button className="rounded-xl border border-slate-200 px-4 py-2">Xem giao dịch</button>
          </div>
        </div>
      </div>
    </section>
  );
}
