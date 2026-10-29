import type { LoginResponse } from '../types/Auth';

const API_URL = import.meta.env.VITE_API_URL;

export async function login(
  username: string,
  password: string,
): Promise<LoginResponse> {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  if (response.status === 401) {
    throw new Error('Usuario o contraseña incorrectos');
  } else if (!response.ok) {
    throw new Error(`Error al iniciar sesión: HTTP ${response.status}`);
  }

  return response.json();
}
