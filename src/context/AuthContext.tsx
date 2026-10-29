import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { LoginResponse, User } from '../types/Auth';

interface AuthContextValue {
  user: User | null;
  token: string | null;
  saveSession: (data: LoginResponse) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

// Lee la sesion guardada para no perderla al recargar la pagi
function readStoredUser(): User | null {
  const stored = localStorage.getItem('user');
  if (stored) {
    return JSON.parse(stored);
  } else {
    return null;
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(readStoredUser());
  const [token, setToken] = useState<string | null>(
    localStorage.getItem('token'),
  );

  function saveSession(data: LoginResponse) {
    localStorage.setItem('token', data.accessToken);
    localStorage.setItem('user', JSON.stringify(data.user));
    setToken(data.accessToken);
    setUser(data.user);
  }

  function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, token, saveSession, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook para usar lasesion desde cualquier componente
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error('useAuth debe usarse dentro de AuthProvider');
  }
  return context;
}
