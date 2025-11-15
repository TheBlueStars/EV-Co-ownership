// src/services/auditService.js
import api from "./api";

export const listAuditLogs = (params) =>
  api.get("/v1/audit-logs", { params });
