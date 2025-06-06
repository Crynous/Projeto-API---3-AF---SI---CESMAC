// src/services/api.tsx
const API_URL = "http://127.0.0.1:8000";

export async function loginUser(username: string, password: string) {
  const response = await fetch(`${API_URL}/api/token/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) throw new Error("Login inválido");
  return await response.json();
}

// API Movies
export async function fetchFilmes(token: string) {
  const response = await fetch(`${API_URL}/api/filmes-series/`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) throw new Error("Erro ao buscar filmes/séries");
  return await response.json();
}

export async function createFilme(token: string, filme: any) {
  console.log("Token enviado para o backend:", token); // <- teste de verificação
  
  const response = await fetch(`${API_URL}/api/filmes-series/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(filme),
  });

  if (!response.ok) throw new Error("Erro ao criar filme");
  return await response.json();
}

export async function updateFilme(token: string, id: number, filme: any) {
  const response = await fetch(`${API_URL}/api/filmes-series/${id}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(filme),
  });

  if (!response.ok) throw new Error("Erro ao atualizar filme");
  return await response.json();
}

export async function deleteFilme(token: string, id: number) {
  const response = await fetch(`${API_URL}/api/filmes-series/${id}/`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) throw new Error("Erro ao deletar filme");
}
