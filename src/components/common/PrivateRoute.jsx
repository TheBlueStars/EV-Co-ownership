// src/components/common/PrivateRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function PrivateRoute({
  children,
  adminOnly = false,
  staffOnly = false,
  coOwnerOnly = false,
}) {
  const { user, isAuthenticated } = useAuth();

  // Chưa đăng nhập → đá về trang đăng nhập
  if (!isAuthenticated) {
    return <Navigate to="/dangnhap" replace />;
  }

  // Kiểm tra role (ADMIN / STAFF / CO_OWNER)
  if (adminOnly && user.role !== "ADMIN") {
    return <Navigate to="/dashboard" replace />;
  }

  if (staffOnly && user.role !== "STAFF") {
    return <Navigate to="/dashboard" replace />;
  }

  if (coOwnerOnly && user.role !== "CO_OWNER") {
    return <Navigate to="/dashboard" replace />;
  }

  // Nếu pass hết → render trang con
  return children;
}
