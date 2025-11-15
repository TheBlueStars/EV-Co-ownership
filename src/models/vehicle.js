// src/models/vehicle.js

export function mapVehicle(raw = {}) {
  return {
    id: raw.id ?? null,
    name: raw.name ?? raw.vehicleName ?? "",
    numberPlate: raw.numberPlate ?? raw.plate ?? "",
    brand: raw.brand ?? "",
    model: raw.model ?? "",
    batteryCapacity: raw.batteryCapacity ?? null,
    status: raw.status ?? "ACTIVE",
  };
}
