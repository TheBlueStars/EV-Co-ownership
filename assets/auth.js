import { AuthAPI } from './api.js';
import { toast } from './ui.js';

export function saveToken(token) {
  localStorage.setItem('token', token);
}

export function getToken() {
  return localStorage.getItem('token');
}

export function requireAuth() {
  const token = getToken();
  if (!token) {
    toast('Vui lòng đăng nhập trước');
    setTimeout(() => (location.href = 'login.html'), 1000);
  }
}

export function logout() {
  AuthAPI.logout();
  toast('Đăng xuất thành công');
  setTimeout(() => (location.href = 'login.html'), 800);
}
