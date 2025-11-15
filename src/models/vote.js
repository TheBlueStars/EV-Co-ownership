// src/models/vote.js

export function mapVote(raw = {}) {
  return {
    id: raw.id ?? null,
    title: raw.title ?? "",
    description: raw.description ?? "",
    options: raw.options ?? [],
    status: raw.status ?? "OPEN",
    deadline: raw.deadline ?? null,
  };
}
