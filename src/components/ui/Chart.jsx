// src/components/ui/Chart.jsx
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function Chart({ data = [], xKey = "label", yKey = "value", height = 260 }) {
  return (
    <div className="h-[260px] rounded-3xl border border-slate-200 bg-white p-4 shadow-[0_12px_40px_rgba(15,23,42,.08)]">
      <ResponsiveContainer width="100%" height={height - 16}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0f172a" stopOpacity={0.9} />
              <stop offset="100%" stopColor="#0f172a" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey={xKey} tick={{ fontSize: 11 }} />
          <YAxis tick={{ fontSize: 11 }} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey={yKey}
            stroke="#0f172a"
            fill="url(#chartColor)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
