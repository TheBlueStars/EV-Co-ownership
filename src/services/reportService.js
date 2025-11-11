import api from './api'; export const exportCsv=(k)=>api.get(/v1/reports/,{responseType:'blob'});
