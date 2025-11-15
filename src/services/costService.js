// src/services/costService.js
import api from "./api";

export const listCosts = (params) =>
  api.get("/v1/costs", { params });

export const getCostById = (id) =>
  api.get(`/v1/costs/${id}`);

export const createCost = (payload) =>
  api.post("/v1/costs", payload);

export const updateCost = (id, payload) =>
  api.put(`/v1/costs/${id}`, payload);

export const deleteCost = (id) =>
  api.delete(`/v1/costs/${id}`);
