import React, { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import DataTable from "../../components/DataTable";
import FormModal from "../../components/FormModal";
import { useToast } from "../../lib/toast";
import { apiGet, apiPost, apiDel } from "../../lib/api";

export default function Users(){
  const { push } = useToast();
  const [loading] = useState(false); // TODO: set true khi gọi API
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(null);
  const [form, setForm] = useState({ fullName:"", email:"", role:"co-owner", active:true });

  useEffect(()=>{
    const load = async ()=>{
      try{
        const res = await apiGet("/api/users");
        setItems(Array.isArray(res)? res : (res.items||[]));
      }catch(err){ push(err?.message||"Không tải được danh sách người dùng","error"); }
    };
    load();
  },[push]);

  const onNew = ()=>{ setEdit(null); setForm({ fullName:"", email:"", role:"co-owner", active:true }); setOpen(true); };
  const onEdit = (row)=>{ setEdit(row); setForm(row); setOpen(true); };

  const save = async ()=>{ 
    try{
      if(edit){ await apiPost(`/api/users/${edit.id}`, form); }
      else { await apiPost("/api/users", form); }
      push(edit?"Đã cập nhật người dùng":"Đã thêm người dùng","success");
      setOpen(false);
      const res = await apiGet("/api/users");
      setItems(Array.isArray(res)? res : (res.items||[]));
    }catch(err){ push(err?.message||"Lưu thất bại","error"); }
  };
  const remove = async (row)=>{ 
    try{
      await apiDel(`/api/users/${row.id}`);
      push("Đã xóa","success");
      const res = await apiGet("/api/users");
      setItems(Array.isArray(res)? res : (res.items||[]));
    }catch(err){ push(err?.message||"Xóa thất bại","error"); }
  };

  const cols = [
    { key:"fullName", title:"Họ tên" },
    { key:"email", title:"Email" },
    { key:"role", title:"Vai trò" },
    { key:"active", title:"Trạng thái" },
    { key:"joinedAt", title:"Tham gia" },
    { key:"id", title:"Hành động", render:(_,r)=>(
      <div style={{display:"flex", gap:6}}>
        <button className="btn" onClick={(e)=>{e.stopPropagation();onEdit(r);}}>Sửa</button>
        <button className="btn btn-danger" onClick={(e)=>{e.stopPropagation();remove(r);}}>Xóa</button>
      </div>
    )}
  ];

  return (
    <div className="grid">
      <PageHeader title="Quản lý người dùng" subtitle="Danh sách tất cả người dùng trong hệ thống"
                  right={<button className="btn btn-primary" onClick={onNew}>+ Thêm người dùng</button>} />
      <div className="card-white">
        {loading ? <div style={{padding:12}}>Đang tải...</div> :
          <DataTable columns={cols} data={items} onRowClick={onEdit}/>}
      </div>

      <FormModal open={open} title={edit?"Cập nhật người dùng":"Thêm người dùng"} onClose={()=>setOpen(false)} onSubmit={save}>
        <label>Họ tên<input className="input" value={form.fullName} onChange={e=>setForm({...form,fullName:e.target.value})}/></label>
        <label>Email<input className="input" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/></label>
        <div className="grid-3">
          <label>Vai trò
            <select className="input" value={form.role} onChange={e=>setForm({...form,role:e.target.value})}>
              <option value="co-owner">Co-owner</option>
              <option value="staff">Staff</option>
              <option value="admin">Admin</option>
            </select>
          </label>
          <label>Trạng thái
            <select className="input" value={form.active?"1":"0"} onChange={e=>setForm({...form,active:e.target.value==="1"})}>
              <option value="1">Active</option>
              <option value="0">Inactive</option>
            </select>
          </label>
          <div/>
        </div>
      </FormModal>
    </div>
  );
}
