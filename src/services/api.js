export const API_URL = "http://localhost:4000";

export async function apiPost(path, body) {
  const res = await fetch(API_URL + path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error("Erro na requisição");
  return res.json();
}

export async function apiGet(path, token) {
  const res = await fetch(API_URL + path, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
  if (!res.ok) throw new Error("Erro na requisição GET");
  return res.json();
}
