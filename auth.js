// assets/auth.js
const KEY = 'ev_token';
export function saveToken(t){ localStorage.setItem(KEY, t); }
export function getToken(){ return localStorage.getItem(KEY); }
export function clearToken(){ localStorage.removeItem(KEY); }
export function isAuthed(){ return !!getToken(); }
export function requireAuth(){
  if(!isAuthed()){ location.href='login.html?next='+encodeURIComponent(location.pathname); }
}
export function logout(){ clearToken(); location.href='login.html'; }
