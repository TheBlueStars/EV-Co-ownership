// src/routes/RequireRole.jsx
import { Navigate } from "react-router-dom";

const getUser = () => {
  try {
    const raw = localStorage.getItem("user");
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

export default function RequireRole({ allow, children }) {
  const user = getUser();

  if (!user) {
    return <Navigate to="/dangnhap" replace />;
  }

  if (!allow.includes(user.role)) {
    // login rồi mà không có quyền khu vực này → về dashboard chung
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}
