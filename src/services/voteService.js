// src/services/voteService.js
import api from "./api";

export const listVotes = (params) =>
  api.get("/v1/votes", { params });

export const getVoteById = (id) =>
  api.get(`/v1/votes/${id}`);

export const createVote = (payload) =>
  api.post("/v1/votes", payload);

export const submitVote = (id, payload) =>
  api.post(`/v1/votes/${id}/submit`, payload);
