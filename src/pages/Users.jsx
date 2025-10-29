import React, { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import { apiGet, apiPost } from "../lib/api";
import { useToast } from "../lib/toast";
import FormModal from "../components/FormModal.jsx";

const EMPTY = {
  fullName: "",
  email: "",
  phone: "",
  role: "co-owner",
  active: true,
};

// luôn trả mảng để tránh .map lỗi
const toArray = (x) => (Array.isArray(x) ? x : (x && Array.isArray(x.items) ? x.items : []));

export default function Users() {
  const { push } = useToast();
  const [items, setItems] = useState([]);
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(null);
  const [form, setForm] = useState(EMPTY);

  const load = async () => {
    try {
      const res = await apiGet("/api/users", {
        search: q,
        page,
        pageSize: 10,
      });
      setItems(toArray(res.items ?? res));
      setTotal(res.total ?? toArray(res.items ?? res).length);
    } catch (e) {
      setItems([]);
      setTotal(0);
    }
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q, page]);

  const openCreate = () => {
    setEdit(null);
    setForm(EMPTY);
    setOpen(true);
  };

  const openEdit = (u) => {
    setEdit(u);
    setForm({
      fullName: u.fullName || "",
      email: u.email || "",
      phone: u.phone || "",
      role: u.role || "co-owner",
      active: !!u.active,
    });
    setOpen(true);
  };

  const save = async () => {
    try {
      if (edit) {
        await apiPost(`/api/users/${edit.id}`, form);
      } else {
        await apiPost("/api/users", form);
      }
      push(edit ? "Đã cập nhật người dùng" : "Đã thêm người dùng", "success");
      setOpen(false);
      load();
    } catch (e) {
      push("Lỗi lưu người dùng", "error");
    }
  };

  const remove = async (u) => {
    if (!confirm(`Xóa ${u.fullName}?`)) return;
    try {
      await apiPost(`/api/users/${u.id}/delete`, {});
      push("Đã xóa", "success");
      load();
    } catch (e) {
      push("Lỗi xóa", "error");
    }
  };

  const paged = items; // backend đã phân trang; nếu backend trả toàn bộ thì có thể slice ở đây

  return (
    <>
      <PageHeader title="Quản lý người dùng" subtitle="Danh sách tất cả người dùng trong hệ thống" />

      <div className="card">
        <div className="toolbar">
          <input
            className="input"
            placeholder="Tìm theo tên, email..."
            value={q}
            onChange={(e) => {
              setPage(1);
              setQ(e.target.value);
            }}
          />
          <div style={{ flex: 1 }} />
          <button className="btn btn-primary" onClick={openCreate}>
            + Thêm người dùng
          </button>
        </div>

        <div className="list">
          {toArray(paged).map((u) => (
            <div key={u.id} className="list-item">
              <div className="l-left">
                <div className="avatar">{(u.fullName || "?").slice(0, 1).toUpperCase()}</div>
                <div>
                  <div className="name">{u.fullName}</div>
                  <div className="meta">
                    {u.email} {u.phone ? " · " + u.phone : ""}
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span className="badge">{u.role || "co-owner"}</span>
                <span className={`badge ${u.active ? "success" : ""}`}>{u.active ? "Hoạt động" : "Khoá"}</span>
                <button className="btn" onClick={() => openEdit(u)}>
                  Sửa
                </button>
                <button className="btn" onClick={() => remove(u)}>
                  Xóa
                </button>
              </div>
            </div>
          ))}

          {!toArray(paged).length && <div className="meta">Không có dữ liệu.</div>}
        </div>

        <div className="pagination">
          <button className="btn" disabled={page <= 1} onClick={() => setPage((p) => p - 1)}>
            « Trước
          </button>
          <span className="meta">Trang {page}</span>
          <button
            className="btn"
            disabled={toArray(paged).length < 10 || page * 10 >= total}
            onClick={() => setPage((p) => p + 1)}
          >
            Sau »
          </button>
        </div>
      </div>

      <FormModal
        title={edit ? "Sửa người dùng" : "Thêm người dùng"}
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={save}
        submitText={edit ? "Cập nhật" : "Tạo mới"}
      >
        <label>
          Họ tên
          <input
            className="input"
            value={form.fullName}
            onChange={(e) => setForm({ ...form, fullName: e.target.value })}
            required
          />
        </label>

        <label>
          Email
          <input
            className="input"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
        </label>

        <label>
          Điện thoại
          <input
            className="input"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
        </label>

        <label>
          Vai trò
          <select
            className="input"
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
          >
            <option value="admin">Admin</option>
            <option value="staff">Staff</option>
            <option value="co-owner">Co-owner</option>
          </select>
        </label>

        <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
          Trạng thái
          <input
            type="checkbox"
            className="switch"
            checked={!!form.active}
            onChange={(e) => setForm({ ...form, active: e.target.checked })}
          />
        </label>
      </FormModal>
    </>
  );
}
