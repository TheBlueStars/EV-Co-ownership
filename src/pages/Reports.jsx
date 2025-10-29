import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import { apiGet } from "../lib/api";
import { downloadFromGET } from "../lib/download";

import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend
);

// đảm bảo luôn có array để .map không lỗi
const toArray = (x) =>
  Array.isArray(x) ? x : (x && Array.isArray(x.items) ? x.items : []);

export default function Reports() {
  // chuỗi thời gian
  const [series, setSeries] = useState({
    labels: [],
    revenue: [],
    cost: [],
    profit: [],
  });

  // top nhóm theo lợi nhuận
  const [top, setTop] = useState([]);

  // bộ lọc/kỳ xuất báo cáo
  const now = new Date();
  const [month, setMonth] = useState(
    `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`
  );
  const [groupId, setGroupId] = useState("");

  // tải dữ liệu
  useEffect(() => {
    (async () => {
      const s = await apiGet("/api/reports/series").catch(() => ({}));
      setSeries({
        labels: toArray(s.labels ?? []),
        revenue: toArray(s.revenue ?? []),
        cost: toArray(s.cost ?? []),
        profit: toArray(s.profit ?? []),
      });

      const t = await apiGet("/api/groups/top").catch(() => []);
      setTop(toArray(t));
    })();
  }, []);

  // export
  const exportMonth = async () => {
    await downloadFromGET(
      "/api/reports/export",
      { period: month },
      `bao-cao-${month}.csv`
    );
  };

  const exportByGroup = async () => {
    if (!groupId) {
      alert("Chọn nhóm để xuất báo cáo");
      return;
    }
    await downloadFromGET(
      "/api/reports/export-group",
      { groupId, period: month },
      `bao-cao-nhom-${groupId}-${month}.csv`
    );
  };

  // style chart lấy theo token CSS đang dùng trong theme
  const css = getComputedStyle(document.documentElement);
  const options = {
    responsive: true,
    plugins: { legend: { position: "bottom" } },
    scales: {
      x: { grid: { color: css.getPropertyValue("--chart-grid") } },
      y: { grid: { color: css.getPropertyValue("--chart-grid") } },
    },
  };

  return (
    <>
      <PageHeader
        title="Báo cáo minh bạch"
        subtitle="Biểu đồ Doanh thu/Chi phí/Lợi nhuận và Top nhóm"
      />

      {/* Thanh công cụ xuất báo cáo */}
      <div className="card" style={{ marginBottom: 12 }}>
        <div className="toolbar" style={{ gap: 8 }}>
          <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span className="meta">Kỳ báo cáo</span>
            <input
              type="month"
              className="input"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            />
          </label>

          <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span className="meta">Nhóm</span>
            <select
              className="input"
              value={groupId}
              onChange={(e) => setGroupId(e.target.value)}
            >
              <option value="">-- Chọn nhóm --</option>
              {toArray(top).map((g) => (
                <option key={g.id ?? g.groupId} value={g.id ?? g.groupId}>
                  {g.name}
                </option>
              ))}
            </select>
          </label>

          <div style={{ flex: 1 }} />

          <button className="btn btn-primary" onClick={exportMonth}>
            Xuất báo cáo tháng
          </button>
          <button className="btn" onClick={exportByGroup}>
            Xuất theo nhóm
          </button>
        </div>
      </div>

      {/* Khu vực biểu đồ */}
      <div className="two-col">
        <div className="card">
          <div className="section-title">Doanh thu / Chi phí / Lợi nhuận</div>
          <Line
            data={{
              labels: series.labels,
              datasets: [
                {
                  label: "Doanh thu",
                  data: series.revenue,
                  borderColor: css.getPropertyValue("--chart-revenue"),
                  fill: false,
                },
                {
                  label: "Chi phí",
                  data: series.cost,
                  borderColor: css.getPropertyValue("--chart-cost"),
                  fill: false,
                },
                {
                  label: "Lợi nhuận",
                  data: series.profit,
                  borderColor: css.getPropertyValue("--chart-profit"),
                  fill: false,
                },
              ],
            }}
            options={options}
          />
        </div>

        <div className="card">
          <div className="section-title">Top nhóm (lợi nhuận)</div>
          <Bar
            data={{
              labels: toArray(top).map((g) => g.name),
              datasets: [
                {
                  label: "Lợi nhuận",
                  data: toArray(top).map((g) => g.profit),
                  backgroundColor: css.getPropertyValue("--chart-profit"),
                },
              ],
            }}
            options={{ ...options, indexAxis: "y" }}
          />
        </div>
      </div>
    </>
  );
}
