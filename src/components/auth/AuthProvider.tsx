import { createContext, useState, ReactNode } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

interface AuthUser {
  firstName: string;
  lastName: string;
  email: string;
}

interface LoginInfo {
  email: string;
  password: string;
}

interface AuthContextType {
  user: AuthUser | null;
  login: (user: LoginInfo) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);

  const login = async (userInfo: LoginInfo) => {
    const { data, error } = await supabase.auth.signInWithPassword(userInfo);
    if (error) {
      console.log({ error });
      return;
    }
    setUser(data);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
