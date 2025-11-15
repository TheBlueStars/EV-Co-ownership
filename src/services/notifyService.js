// src/services/notifyService.js
import api from "./api";

export const listNotifications = (params) =>
  api.get("/v1/notifications", { params });

export const markNotificationRead = (id) =>
  api.post(`/v1/notifications/${id}/read`);

export const markAllNotificationsRead = () =>
  api.post("/v1/notifications/read-all");
