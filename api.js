// assets/api.js
import { getToken, clearToken } from './auth.js';
import { toast } from './ui.js';

const BASE = 'https://api.your-backend.com'; // TODO: đổi theo BE thật

async function request(path, {method='GET', body, headers}={}){
  const h = {'Content-Type':'application/json', ...(headers||{})};
  const t = getToken(); if(t) h['Authorization'] = `Bearer ${t}`;
  const res = await fetch(BASE + path, { method, headers:h, body: body? JSON.stringify(body) : undefined });
  if(res.status===401){ toast('Phiên đăng nhập hết hạn (401). Vui lòng đăng nhập lại.'); clearToken(); setTimeout(()=> location.href='login.html', 1200); throw new Error('401'); }
  if(res.status===403){ toast('Bạn không đủ quyền (403).'); throw new Error('403'); }
  if(!res.ok){ const txt = await res.text().catch(()=> ''); toast(`Lỗi ${res.status}: ${txt||res.statusText}`); throw new Error(txt||res.statusText); }
  if(res.status===204) return null;
  return res.json();
}

// Auth
export const AuthAPI = {
  login: (email,password)=> request('/api/auth/login',{method:'POST', body:{email,password}}),
  register: (payload)=> request('/api/auth/register',{method:'POST', body:payload}),
  me: ()=> request('/api/users/me'),
};

// Bookings
export const BookingAPI = {
  available: (from,to)=> request(`/api/bookings/available?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`),
  create: (payload)=> request('/api/bookings',{method:'POST', body:payload}),
  listMine: ()=> request('/api/bookings?scope=mine'),
  checkin: (id)=> request(`/api/bookings/${id}/checkin`,{method:'POST'}),
  checkout: (id)=> request(`/api/bookings/${id}/checkout`,{method:'POST'}),
};

// Costs/Settlements/Payments
export const CostAPI = {
  mySettlements: ()=> request('/api/settlements/my'),
  listPayments: ()=> request('/api/payments?scope=mine'),
  pay: (payload)=> request('/api/payments',{method:'POST', body:payload}),
};
