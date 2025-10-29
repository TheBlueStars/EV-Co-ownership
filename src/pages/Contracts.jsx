import React from "react";
import DataTable from "../components/DataTable";
import { apiGet, apiPost } from "../lib/api";
import { useToast } from "../lib/toast";
import { useConfirm } from "../lib/confirm";

const badge = (st)=>{
  const cls = ({ pending:"warn", approved:"success", signed:"gray", cancelled:"gray" }[st]) || "gray";
  const text= ({ pending:"Chờ duyệt", approved:"Đã duyệt", signed:"Đã ký", cancelled:"Hủy" }[st]) || st;
  return `<span class="badge ${cls}">${text}</span>`;
};

export default function Contracts(){
  const { push } = useToast();
  const { confirm, Modal } = useConfirm();
  const [reloadKey, setReloadKey] = React.useState(0);

  React.useEffect(()=>{
    const onClick = async (e)=>{
      const btn = e.target.closest("[data-act]"); if(!btn) return;
      const id = btn.dataset.id, act = btn.dataset.act;
      const ok = await confirm(act==="approve"?"Duyệt hợp đồng này?":"Ký hợp đồng này?"); if(!ok) return;
      try{
        await apiPost(`/api/contracts/${id}/${act}`, {});
        push(act==="approve"?"Đã duyệt hợp đồng":"Đã ký hợp đồng","success");
        setReloadKey(k=>k+1);
      }catch(err){ push(`Lỗi: ${err.message}`,"error"); }
    };
    document.addEventListener("click", onClick);
    return ()=> document.removeEventListener("click", onClick);
  }, [confirm, push]);

  const actions = (r)=>{
    const a = [];
    if(r.status==="pending")  a.push(`<button class="btn btn-primary" data-act="approve" data-id="${r.id}">Duyệt</button>`);
    if(r.status==="approved") a.push(`<button class="btn" data-act="sign" data-id="${r.id}">Ký</button>`);
    a.push(`<a class="btn btn-ghost" href="/api/contracts/${r.id}/download" target="_blank">Tải PDF</a>`);
    return `<div class="actions" style="display:flex;gap:8px">${a.join("")}</div>`;
  };

  return (
    <>
      <div className="card">
        <div className="section-title">Hợp đồng</div>
        <DataTable
          reloadKey={reloadKey}
          columns={[
            { key:"code", label:"Mã", sortable:true },
            { key:"vehiclePlate", label:"Xe", sortable:true },
            { key:"ownerName", label:"Chủ xe", sortable:true },
            { key:"sharePct", label:"Tỷ lệ (%)", sortable:true },
            { key:"status", label:"Trạng thái", sortable:true, render:r=>badge(r.status) },
            { key:"actions", label:"Hành động", render:actions },
          ]}
          fetcher={async (q)=>{ const data = await apiGet("/api/contracts", q); return { items:data.items, total:data.total }; }}
        />
      </div>
      {Modal}
    </>
  );
}
