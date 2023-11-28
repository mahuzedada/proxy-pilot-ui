import { createContext, useState, ReactNode, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

interface LoginInfo {
  email: string;
  password: string;
}

interface AuthContextType {
  session: any | null;
  authErrorMessage: string | null;
  updatePassword: (password: string) => void;
  resetPasswordForEmail: (email: string) => void;
  login: (user: LoginInfo) => void;
  signup: (user: LoginInfo) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<any | null>(null);
  const [authErrorMessage, setAuthErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log('session1: ', session);
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log('session2: ', session);
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const login = async (userInfo: LoginInfo) => {
    const { error } = await supabase.auth.signInWithPassword(userInfo);
    if (error) {
      setAuthErrorMessage(error.message);
      return;
    }
  };

  const signup = async (userInfo: LoginInfo) => {
    const { error } = await supabase.auth.signUp({
      ...userInfo,
      options: {
        emailRedirectTo: 'http//localhost:5173/preferences',
      },
    });
    if (error) {
      setAuthErrorMessage(error.message);
      return;
    }
  };

  const updatePassword = async (password: string) => {
    await supabase.auth.updateUser({ password });
  };

  const resetPasswordForEmail = async (email: string) => {
    await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: 'http://localhost:5173/auth-callback?next=/new-password',
    });
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setSession(null);
  };

  return (
    <AuthContext.Provider
      value={{
        session,
        login,
        signup,
        logout,
        updatePassword,
        authErrorMessage,
        resetPasswordForEmail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
