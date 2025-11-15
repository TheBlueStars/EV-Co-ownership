// Roles trong hệ thống
export const ROLES = {
  ADMIN: "ADMIN",
  STAFF: "STAFF",
  CO_OWNER: "CO_OWNER",
};

// Trạng thái booking
export const BOOKING_STATUS = {
  PENDING: "PENDING",
  APPROVED: "APPROVED",
  REJECTED: "REJECTED",
  IN_PROGRESS: "IN_PROGRESS",
  COMPLETED: "COMPLETED",
  CANCELLED: "CANCELLED",
};

// Mode chia chi phí
export const COST_SPLIT_MODE = {
  BY_OWNERSHIP: "BY_OWNERSHIP", // theo % sở hữu
  BY_USAGE: "BY_USAGE", // theo km / số lần sử dụng
};

// Trạng thái quỹ
export const FUND_TYPE = {
  CONTRIBUTION: "CONTRIBUTION",
  EXPENSE: "EXPENSE",
};

// Loại thông báo
export const NOTIFY_TYPE = {
  SYSTEM: "SYSTEM",
  BOOKING: "BOOKING",
  COST: "COST",
  VOTE: "VOTE",
};

export const PAGE_SIZE_DEFAULT = 10;

export const DATE_FORMAT = "DD/MM/YYYY";
export const DATE_TIME_FORMAT = "DD/MM/YYYY HH:mm";

// Đường dẫn mặc định dùng trong frontend
export const FRONTEND_ROUTES = {
  LOGIN: "/dangnhap",
  DASHBOARD: "/dashboard",
  ADMIN_HOME: "/admin",
  STAFF_HOME: "/staff",
  CO_OWNER_HOME: "/coowner/bookings",
};
