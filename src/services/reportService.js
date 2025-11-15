// src/services/reportService.js
import api from "./api";

export const getDashboardStats = () => api.get("/v1/reports/dashboard");

export const exportCsv = (key, params) =>
  api.get(`/v1/reports/${key}`, {
    params,
    responseType: "blob",
  });
