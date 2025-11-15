// src/models/user.js
import { ROLES } from "../utils/constants";

export function mapUser(raw = {}) {
  return {
    id: raw.id ?? null,
    name: raw.name ?? "",
    email: raw.email ?? "",
    phone: raw.phone ?? "",
    role: raw.role ?? ROLES.CO_OWNER,
    avatarUrl: raw.avatarUrl ?? "",
    active: raw.active ?? true,
  };
}
