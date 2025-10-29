export const API_BASE_URL = ""; // ví dụ "http://localhost:8080" nếu khác origin

const parse = async (res) => {
  const text = await res.text();
  try { return JSON.parse(text || "{}"); } catch { return { message: text }; }
};

export async function apiGet(path, params = {}) {
  const url = new URL((API_BASE_URL || "") + path, window.location.origin);
  Object.entries(params).forEach(([k,v]) => (v!==undefined && v!=="") && url.searchParams.set(k,v));
  const res = await fetch(url, { credentials: "include" });
  const data = await parse(res);
  if (!res.ok) throw new Error(data.message || res.statusText);
  return data;
}

export async function apiPost(path, body = {}) {
  const res = await fetch((API_BASE_URL || "") + path, {
    method:"POST",
    headers:{ "Content-Type":"application/json" },
    credentials:"include",
    body: JSON.stringify(body)
  });
  const data = await parse(res);
  if (!res.ok) throw new Error(data.message || res.statusText);
  return data;
}
