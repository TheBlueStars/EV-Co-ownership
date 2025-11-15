// src/hooks/useAuth.js
// Hook nhỏ wrap AuthContext – để import cho tiện
import { useAuth as useAuthContext } from "../contexts/AuthContext.jsx";

export default function useAuth() {
  return useAuthContext();
}
