export async function downloadFromGET(url, params = {}, filename = "report.bin") {
  const u = new URL(url, window.location.origin);
  Object.entries(params).forEach(([k, v]) => v != null && u.searchParams.set(k, v));
  const res = await fetch(u, { credentials: "include" });
  if (!res.ok) throw new Error("Tải file thất bại");
  const blob = await res.blob();
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  URL.revokeObjectURL(a.href);
}
