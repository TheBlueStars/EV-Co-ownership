// src/models/fund.js

export function mapFundOverview(raw = {}) {
  return {
    balance: Number(raw.balance ?? 0),
    totalContribution: Number(raw.totalContribution ?? 0),
    totalExpense: Number(raw.totalExpense ?? 0),
  };
}

export function mapFundTransaction(raw = {}) {
  return {
    id: raw.id ?? null,
    type: raw.type ?? "CONTRIBUTION",
    label: raw.label ?? "",
    amount: Number(raw.amount ?? 0),
    date: raw.date ?? raw.createdAt,
    createdBy: raw.createdBy ?? null,
  };
}
