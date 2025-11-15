// src/routes/PrivateLayout.jsx
import { Outlet, Navigate, useLocation } from "react-router-dom";

/**
 * Hàm lấy thông tin user từ localStorage
 * Bạn có thể thay bằng JWT hoặc Redux tùy dự án
 */
const getUser = () => {
  try {
    const raw = localStorage.getItem("user");
    return raw ? JSON.parse(raw) : null;
  } catch (err) {
    console.warn("Cannot parse user from localStorage:", err);
    return null;
  }
};

export default function PrivateLayout() {
  const location = useLocation();
  const user = getUser();

  // Chưa đăng nhập → quay về trang login & giữ lại URL cũ để redirect sau
  if (!user) {
    return <Navigate to="/dangnhap" replace state={{ from: location }} />;
  }

  // Nếu đã đăng nhập → cho phép các route con tiếp tục (CoOwnerLayout / StaffLayout / AdminLayout)
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <Outlet />
    </div>
  );
}
