import React, { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import { apiGet, apiPost } from "../lib/api";
import { useToast } from "../lib/toast";
import FormModal from "../components/FormModal.jsx";

const EMPTY = {
  model: "",
  plateNumber: "",
  groupName: "",
  owners: 0,
  revenueMonth: 0,
  status: "available",
};

const toArray = (x) => (Array.isArray(x) ? x : (x && Array.isArray(x.items) ? x.items : []));

export default function Vehicles() {
  const { push } = useToast();
  const [list, setList] = useState([]);
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(null);
  const [form, setForm] = useState(EMPTY);

  const load = async () => {
    try {
      const res = await apiGet("/api/vehicles", { search: q, page: 1, pageSize: 60 });
      setList(toArray(res.items ?? res));
    } catch (e) {
      setList([]);
    }
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q]);

  const openCreate = () => {
    setEdit(null);
    setForm(EMPTY);
    setOpen(true);
  };

  const openEdit = (v) => {
    setEdit(v);
    setForm({
      model: v.model || "",
      plateNumber: v.plateNumber || "",
      groupName: v.groupName || "",
      owners: v.owners || 0,
      revenueMonth: v.revenueMonth || 0,
      status: v.status || "available",
    });
    setOpen(true);
  };

  const save = async () => {
    try {
      if (edit) {
        await apiPost(`/api/vehicles/${edit.id}`, form);
      } else {
        await apiPost("/api/vehicles", form);
      }
      push(edit ? "Đã cập nhật xe" : "Đã thêm xe", "success");
      setOpen(false);
      load();
    } catch (e) {
      push("Lỗi lưu xe", "error");
    }
  };

  const remove = async (v) => {
    if (!confirm(`Xóa xe ${v.plateNumber}?`)) return;
    try {
      await apiPost(`/api/vehicles/${v.id}/delete`, {});
      push("Đã xóa", "success");
      load();
    } catch (e) {
      push("Lỗi xóa", "error");
    }
  };

  const filtered = toArray(list).filter((v) =>
    (v.model + v.plateNumber + (v.groupName || "")).toLowerCase().includes(q.toLowerCase())
  );

  return (
    <>
      <PageHeader title="Quản lí tất cả xe" subtitle="Tổng quan về tất cả xe trong hệ thống" />

      <div className="card" style={{ marginBottom: 12 }}>
        <div className="toolbar">
          <input
            className="input"
            placeholder="Tìm theo model, biển số, nhóm..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          <div style={{ flex: 1 }} />
          <button className="btn btn-primary" onClick={openCreate}>
            + Thêm xe mới
          </button>
        </div>

        <div className="grid-cards">
          {filtered.map((v) => (
            <div key={v.id} className="v-card">
              <div className="v-row">
                <div>
                  <div className="v-title">{v.model}</div>
                  <div className="v-sub">{v.plateNumber}</div>
                </div>
                <span className="v-badge">
                  {v.status === "available" ? "Hoạt động" : "Bảo dưỡng"}
                </span>
              </div>

              <div className="v-row">
                <div className="meta">Nhóm:</div>
                <div className="name">{v.groupName || "—"}</div>
              </div>
              <div className="v-row">
                <div className="meta">Đồng sở hữu:</div>
                <div className="name">{v.owners || 0} người</div>
              </div>
              <div className="v-row">
                <div className="meta">Doanh thu/tháng:</div>
                <div className="name">
                  {(v.revenueMonth || 0).toLocaleString("vi-VN")} đ
                </div>
              </div>

              <div className="v-actions">
                <button className="btn" onClick={() => openEdit(v)}>
                  Sửa
                </button>
                <button className="btn" onClick={() => remove(v)}>
                  Xóa
                </button>
              </div>
            </div>
          ))}

          {!filtered.length && <div className="meta">Không có dữ liệu phù hợp.</div>}
        </div>
      </div>

      <FormModal
        title={edit ? "Sửa xe" : "Thêm xe"}
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={save}
        submitText={edit ? "Cập nhật" : "Tạo mới"}
      >
        <label>
          Model
          <input
            className="input"
            value={form.model}
            onChange={(e) => setForm({ ...form, model: e.target.value })}
            required
          />
        </label>
        <label>
          Biển số
          <input
            className="input"
            value={form.plateNumber}
            onChange={(e) => setForm({ ...form, plateNumber: e.target.value })}
            required
          />
        </label>
        <label>
          Nhóm
          <input
            className="input"
            value={form.groupName}
            onChange={(e) => setForm({ ...form, groupName: e.target.value })}
          />
        </label>
        <label>
          Đồng sở hữu
          <input
            className="input"
            type="number"
            value={form.owners}
            onChange={(e) => setForm({ ...form, owners: +e.target.value })}
          />
        </label>
        <label>
          Doanh thu/tháng (đ)
          <input
            className="input"
            type="number"
            value={form.revenueMonth}
            onChange={(e) => setForm({ ...form, revenueMonth: +e.target.value })}
          />
        </label>
        <label>
          Trạng thái
          <select
            className="input"
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
          >
            <option value="available">Hoạt động</option>
            <option value="maintenance">Bảo dưỡng</option>
          </select>
        </label>
      </FormModal>
    </>
  );
}
