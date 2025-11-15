// Format tiền (VNĐ)
export function formatCurrency(value, currency = "VND", locale = "vi-VN") {
  if (value == null || isNaN(Number(value))) return "0 ₫";
  try {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      maximumFractionDigits: currency === "VND" ? 0 : 2,
    }).format(Number(value));
  } catch {
    return `${Number(value).toLocaleString(locale)} ₫`;
  }
}

// Format phần trăm
export function formatPercent(value, digits = 0) {
  if (value == null || isNaN(Number(value))) return "0%";
  return `${Number(value).toFixed(digits)}%`;
}

// Format date (dùng Intl – backend trả ISO string)
export function formatDate(date) {
  if (!date) return "";
  const d = typeof date === "string" ? new Date(date) : date;
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("vi-VN");
}

// Format date + time
export function formatDateTime(date) {
  if (!date) return "";
  const d = typeof date === "string" ? new Date(date) : date;
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleString("vi-VN");
}

// Lấy tên viết tắt (dùng cho avatar)
export function initials(name = "") {
  return name
    .trim()
    .split(/\s+/)
    .slice(-2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}
