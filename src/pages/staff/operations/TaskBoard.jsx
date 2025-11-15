// src/pages/staff/operations/TaskBoard.jsx
import { ClipboardList, AlertTriangle, CheckCircle2 } from "lucide-react";

const tasks = [
  {
    title: "Xác nhận booking BK-20251109-DFF250",
    priority: "Cao",
    status: "Đang thực hiện",
  },
  {
    title: "Gọi khách nhóm EV-Group-02 xác nhận giờ lấy xe",
    priority: "Trung bình",
    status: "Chưa làm",
  },
  {
    title: "Cập nhật trạng thái xe VF8 sau bảo dưỡng",
    priority: "Thấp",
    status: "Hoàn thành",
  },
];

export default function TaskBoard() {
  return (
    <section className="bg-slate-100">
      <div className="mx-auto max-w-[900px] px-4 py-6 md:px-6">
        <div className="mb-4 flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-white">
            <ClipboardList className="h-4 w-4" />
          </span>
          <div>
            <h1 className="text-lg md:text-xl font-extrabold text-slate-900">
              Bảng công việc trong ngày
            </h1>
            <p className="text-xs text-slate-600">
              Staff theo dõi các việc cần xử lý liên quan đến booking, khách
              hàng và xe.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {tasks.map((t, idx) => (
            <div
              key={idx}
              className="flex items-start justify-between gap-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm text-sm"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5">
                  {t.priority === "Cao" ? (
                    <AlertTriangle className="h-4 w-4 text-rose-600" />
                  ) : t.status === "Hoàn thành" ? (
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  ) : (
                    <ClipboardList className="h-4 w-4 text-slate-500" />
                  )}
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{t.title}</div>
                  <div className="mt-1 flex flex-wrap gap-2 text-xs text-slate-500">
                    <span
                      className={
                        "inline-flex rounded-full px-2.5 py-1 font-medium " +
                        (t.priority === "Cao"
                          ? "bg-rose-50 text-rose-700"
                          : t.priority === "Trung bình"
                          ? "bg-amber-50 text-amber-700"
                          : "bg-slate-50 text-slate-600")
                      }
                    >
                      Ưu tiên: {t.priority}
                    </span>
                    <span
                      className={
                        "inline-flex rounded-full px-2.5 py-1 " +
                        (t.status === "Hoàn thành"
                          ? "bg-emerald-50 text-emerald-700"
                          : t.status === "Đang thực hiện"
                          ? "bg-sky-50 text-sky-700"
                          : "bg-slate-50 text-slate-600")
                      }
                    >
                      {t.status}
                    </span>
                  </div>
                </div>
              </div>

              <button className="mt-1 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50">
                Cập nhật
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
