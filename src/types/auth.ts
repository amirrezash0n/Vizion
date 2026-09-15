export interface User {
  id: number;
  fullName: string;
  email: string;
  avatar: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;

  login: (user: User, token: string) => void;
  logout: () => void;
}

export interface SignupForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
