const BASE_URL = ""; // ví dụ "http://localhost:8080" nếu BE khác origin

async function request(path, options = {}) {
  const res = await fetch(BASE_URL + path, {
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
    credentials: "include",
    ...options,
  });
  if (!res.ok) throw new Error(await res.text().catch(()=>res.statusText));
  const ct = res.headers.get("content-type") || "";
  return ct.includes("application/json") ? res.json() : res.text();
}

export const apiGet  = (p) => request(p);
export const apiPost = (p, body) => request(p, { method: "POST", body: JSON.stringify(body || {}) });
export const apiDel  = (p) => request(p, { method: "DELETE" });
