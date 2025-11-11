import api from './api'; export const listUsers=()=>api.get('/users'); export const updateUser=(id,d)=>api.put(/users/,d);
