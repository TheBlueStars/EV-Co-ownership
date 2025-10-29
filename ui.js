// assets/ui.js
export function toast(msg, ms=2000){
  let t = document.querySelector('.toast'); if(!t){ t=document.createElement('div'); t.className='toast'; document.body.appendChild(t);}
  t.textContent = msg; t.style.display='block'; setTimeout(()=> t.style.display='none', ms);
}

export function $(s,root=document){ return root.querySelector(s); }
export function $all(s,root=document){ return [...root.querySelectorAll(s)]; }

export function drawBar(canvas, labels=[], values=[]){
  const ctx = canvas.getContext('2d'); const W = canvas.width = canvas.clientWidth; const H = canvas.height = 220;
  ctx.clearRect(0,0,W,H); const max = Math.max(1, ...values); const pad=30; const barW = (W - pad*2) / values.length * .7;
  values.forEach((v,i)=>{
    const x = pad + i*((W - pad*2)/values.length) + ((W - pad*2)/values.length - barW)/2;
    const h = (H - pad*2) * (v/max); const y = H - pad - h;
    ctx.fillStyle = '#22d3ee'; ctx.fillRect(x,y,barW,h);
    ctx.fillStyle = '#e5e7eb'; ctx.font = '12px sans-serif'; ctx.fillText(labels[i], x, H-10);
  });
}

export function drawDonut(canvas, segments){ 
  // segments: [{label, value, color?}]
  const ctx = canvas.getContext('2d'); const W = canvas.width = canvas.clientWidth; const H = canvas.height = 220;
  ctx.clearRect(0,0,W,H); const cx=W/2, cy=H/2, r=Math.min(W,H)/3, r2=r*0.6;
  const total = segments.reduce((a,b)=>a+b.value,0)||1; let start= -Math.PI/2;
  segments.forEach((s,idx)=>{
    const ang = 2*Math.PI * (s.value/total);
    ctx.beginPath(); ctx.moveTo(cx,cy); ctx.arc(cx,cy,r,start,start+ang); ctx.closePath();
    ctx.fillStyle = s.color || ['#22d3ee','#7dd3fc','#10b981','#f59e0b','#ef4444'][idx%5]; ctx.fill();
    start += ang;
  });
  // hole
  ctx.globalCompositeOperation='destination-out'; ctx.beginPath(); ctx.arc(cx,cy,r2,0,2*Math.PI); ctx.fill();
  ctx.globalCompositeOperation='source-over';
  ctx.fillStyle='#e5e7eb'; ctx.font='13px sans-serif'; ctx.textAlign='center';
  ctx.fillText('Chi phí', cx, cy+4);
}
