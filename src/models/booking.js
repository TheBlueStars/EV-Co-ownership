// src/models/booking.js
import { BOOKING_STATUS } from "../utils/constants";

// Tạo object booking trống cho form
export function createEmptyBooking() {
  const now = new Date();
  return {
    id: null,
    code: "",
    vehicleId: null,
    vehicleName: "",
    vehicleNumber: "",
    startTime: now.toISOString(),
    endTime: new Date(now.getTime() + 60 * 60 * 1000).toISOString(),
    status: BOOKING_STATUS.PENDING,
    note: "",
  };
}

// Map dữ liệu API -> frontend
export function mapBooking(raw = {}) {
  return {
    id: raw.id ?? raw.bookingId ?? null,
    code: raw.code ?? raw.bookingCode ?? "",
    vehicleId: raw.vehicleId ?? null,
    vehicleName: raw.vehicleName ?? "",
    vehicleNumber: raw.vehicleNumber ?? "",
    startTime: raw.scheduleStartTime ?? raw.startTime,
    endTime: raw.scheduleEndTime ?? raw.endTime,
    status: raw.status ?? BOOKING_STATUS.PENDING,
    note: raw.note ?? "",
  };
}
