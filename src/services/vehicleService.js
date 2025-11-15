// src/services/vehicleService.js
import api from "./api";

export const listVehicles = (params) =>
  api.get("/vehicles", { params });

export const getVehicleById = (id) =>
  api.get(`/vehicles/${id}`);

export const createVehicle = (payload) =>
  api.post("/vehicles", payload);

export const updateVehicle = (id, payload) =>
  api.put(`/vehicles/${id}`, payload);

export const deleteVehicle = (id) =>
  api.delete(`/vehicles/${id}`);
