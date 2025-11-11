import api from '../services/api'
export const login = (payload)=>api.post('/auth/login', payload)
export const register = (payload)=>api.post('/auth/register', payload)