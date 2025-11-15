// src/services/fundService.js
import api from "./api";

// Lấy tổng quan quỹ (số dư, tổng thu, tổng chi)
export const getFund = () => api.get("/v1/fund");

// Alias để sau này nếu bạn muốn dùng tên khác vẫn ok
export const getFundOverview = getFund;

// Lấy danh sách giao dịch quỹ
export const getFundTransactions = (params) =>
  api.get("/v1/fund/transactions", { params });

// Tạo giao dịch (nạp quỹ / chi quỹ)
export const createFundTransaction = (payload) =>
  api.post("/v1/fund/transactions", payload);

// Export default nếu bạn muốn import dạng: import fundService from "...";
const fundService = {
  getFund,
  getFundOverview,
  getFundTransactions,
  createFundTransaction,
};

export default fundService;
