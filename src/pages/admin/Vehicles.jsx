import React, { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import FormModal from "../../components/FormModal";
import Skeleton from "../../components/Skeleton";
import { useToast } from "../../lib/toast";
import { apiGet, apiPost, apiDel } from "../../lib/api";

export default function Vehicles(){
  const { push } = useToast();
  const [loading] = useState(false); 
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(null);
  const [form, setForm] = useState({ name:"", vin:"", group:"", owners:0, revenue:"0" });

  useEffect(()=>{
    const load = async ()=>{
      const res = await apiGet("/api/vehicles");
      setItems(Array.isArray(res)? res : (res.items||[]));
    };
    load();
  },[]);

  const onNew = ()=>{ setEdit(null); setForm({ name:"", vin:"", group:"", owners:0, revenue:"0" }); setOpen(true); };
  const onEdit = (v)=>{ setEdit(v); setForm(v); setOpen(true); };
  const save = async ()=>{ 
    if(edit){ await apiPost(`/api/vehicles/${edit.id}`, form); }
    else { await apiPost("/api/vehicles", form); }
    push(edit?"Đã cập nhật xe":"Đã thêm xe","success");
    setOpen(false);
    const res = await apiGet("/api/vehicles");
    setItems(Array.isArray(res)? res : (res.items||[]));
  };
  const remove = async ()=>{ 
    if(!edit) return;
    await apiDel(`/api/vehicles/${edit.id}`);
    push("Đã xóa","success");
    const res = await apiGet("/api/vehicles");
    setItems(Array.isArray(res)? res : (res.items||[]));
  };

  return (
    <div className="grid">
      <PageHeader title="Quản lý tất cả xe" subtitle="Tổng quan về tất cả xe trong hệ thống"
        right={<button className="btn btn-primary" onClick={onNew}>+ Thêm xe mới</button>} />
      <div className="v-grid">
        {loading && Array.from({length:6}).map((_,i)=>(<Skeleton key={i} h={160}/>))}
        {!loading && items.length===0 && <div style={{gridColumn:"1/-1",padding:16,color:"var(--muted)"}}>Chưa có dữ liệu</div>}
        {!loading && items.map(v=>(
          <div className="v-card" key={v.id}>
            <div className="v-title">{v.name}</div>
            <div className="meta">{v.vin}</div>
            <div style={{height:10}}/>
            <div className="grid-3">
              <div><div className="meta">Nhóm:</div><b>{v.group}</b></div>
              <div><div className="meta">Đồng sở hữu:</div><b>{v.owners} người</b></div>
              <div><div className="meta">Doanh thu/tháng:</div><b>{v.revenue}</b></div>
            </div>
            <div style={{height:10}}/>
            <div className="v-meter"><div style={{width:"70%"}}/></div>
            <div className="toolbar" style={{justifyContent:"flex-end"}}>
              <button className="btn" onClick={()=>onEdit(v)}>Sửa</button>
              <button className="btn btn-danger" onClick={remove}>Xóa</button>
            </div>
          </div>
        ))}
      </div>

      <FormModal open={open} title={edit?"Cập nhật xe":"Thêm xe"} onClose={()=>setOpen(false)} onSubmit={save}>
        <label>Tên xe<input className="input" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/></label>
        <label>VIN<input className="input" value={form.vin} onChange={e=>setForm({...form,vin:e.target.value})}/></label>
        <div className="grid-3">
          <label>Nhóm<input className="input" value={form.group} onChange={e=>setForm({...form,group:e.target.value})}/></label>
          <label>Đồng sở hữu<input className="input" type="number" value={form.owners} onChange={e=>setForm({...form,owners:+e.target.value})}/></label>
          <label>Doanh thu/tháng<input className="input" value={form.revenue} onChange={e=>setForm({...form,revenue:e.target.value})}/></label>
        </div>
      </FormModal>
    </div>
  );
}
