import axios from 'axios'
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api',
  timeout: 15000
})
api.interceptors.request.use((cfg)=>{
  const t = localStorage.getItem('token')
  if (t) cfg.headers.Authorization = Bearer 
  return cfg
})
export default api
