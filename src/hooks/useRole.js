// src/hooks/useRole.js
import useAuth from "./useAuth";
import { ROLES } from "../utils/constants";

export default function useRole() {
  const { user } = useAuth();
  const role = user?.role ?? null;

  return {
    role,
    isAdmin: role === ROLES.ADMIN,
    isStaff: role === ROLES.STAFF,
    isCoOwner: role === ROLES.CO_OWNER,
  };
}
