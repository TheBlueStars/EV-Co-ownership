// src/services/scheduleService.js
import api from "./api";

export const getCalendar = (params) =>
  api.get("/v1/schedule", { params });
