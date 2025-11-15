import api from "./api";

export const login = (payload) => api.post("/auth/login", payload);

export const register = (payload) => api.post("/auth/register", payload);

// Lấy thông tin user hiện tại
export const me = () => api.get("/me");

// Refresh token (nếu backend có)
export const refreshToken = () => api.post("/auth/refresh");

// Logout phía server (nếu có)
export const logoutApi = () => api.post("/auth/logout");
