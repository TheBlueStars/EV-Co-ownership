// src/models/cost.js
import { COST_SPLIT_MODE } from "../utils/constants";

export function createEmptyCost() {
  return {
    id: null,
    label: "",
    amount: 0,
    date: new Date().toISOString(),
    splitMode: COST_SPLIT_MODE.BY_OWNERSHIP,
    note: "",
  };
}

export function mapCost(raw = {}) {
  return {
    id: raw.id ?? null,
    label: raw.label ?? raw.description ?? "",
    amount: Number(raw.amount ?? 0),
    date: raw.date ?? raw.createdAt,
    splitMode: raw.splitMode ?? COST_SPLIT_MODE.BY_OWNERSHIP,
    note: raw.note ?? "",
  };
}
