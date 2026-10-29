//basado en el LoginResponse del backend
export interface User {
  id: number;
  username: string;
  email: string;
  roles: string[];
}

export interface LoginResponse {
  accessToken: string;
  tokenType: string;
  expiresIn: number;
  user: User;
}
