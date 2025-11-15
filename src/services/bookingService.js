// src/services/bookingService.js
import api from "./api";

export const listBookings = (params) =>
  api.get("/v1/bookings", { params });

export const getBookingById = (id) =>
  api.get(`/v1/bookings/${id}`);

export const createBooking = (payload) =>
  api.post("/v1/bookings", payload);

export const updateBooking = (id, payload) =>
  api.put(`/v1/bookings/${id}`, payload);

export const cancelBooking = (id) =>
  api.post(`/v1/bookings/${id}/cancel`);

export const approveBooking = (id) =>
  api.post(`/v1/bookings/${id}/approve`);
