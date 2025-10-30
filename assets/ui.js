export const $ = (sel) => document.querySelector(sel);

export function toast(msg, type = 'info') {
  const el = document.createElement('div');
  el.className = 'toast';
  el.textContent = msg;
  if (type === 'error') el.style.background = '#e74c3c';
  if (type === 'success') el.style.background = '#2ecc71';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 3000);
}
