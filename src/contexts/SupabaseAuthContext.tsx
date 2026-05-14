/**
 * Supabase Auth Context - Authentication provider using Supabase Auth
 *
 * DO NOT MODIFY THIS FILE - Part of Episolo template.
 *
 * Drop-in replacement for AuthContext when Supabase mode is enabled.
 * Provides the same useAuth() hook interface so components work unchanged.
 */

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { getSupabase } from "@/lib/supabase-client";
import type { User as SupabaseUser, Session } from "@supabase/supabase-js";

export interface User {
  userId: string;
  username: string;
  email?: string;
  [key: string]: any;
}

interface AuthResult {
  success: boolean;
  error?: string;
  user?: User;
  message?: string;
}

interface PasswordResetResult {
  success: boolean;
  error?: string;
  message?: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<AuthResult>;
  register: (userData: {
    username: string;
    email?: string;
    password: string;
    [key: string]: any;
  }) => Promise<AuthResult>;
  logout: () => void;
  isAuthenticated: () => boolean;
  requestPasswordReset: (email: string) => Promise<PasswordResetResult>;
  verifyResetToken: (token: string) => Promise<PasswordResetResult>;
  resetPassword: (token: string, newPassword: string) => Promise<AuthResult>;
}

const SupabaseAuthContext = createContext<AuthContextType | null>(null);

function mapSupabaseUser(sbUser: SupabaseUser): User {
  return {
    userId: sbUser.id,
    username:
      sbUser.user_metadata?.username ||
      sbUser.email?.split("@")[0] ||
      sbUser.id,
    email: sbUser.email,
    ...sbUser.user_metadata,
  };
}

interface SupabaseAuthProviderProps {
  children: ReactNode;
}

export const SupabaseAuthProvider: React.FC<SupabaseAuthProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const supabase = getSupabase();

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ? mapSupabaseUser(session.user) : null);
      setIsLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (_event: string, session: Session | null) => {
        setUser(session?.user ? mapSupabaseUser(session.user) : null);
      },
    );

    return () => subscription.unsubscribe();
  }, []);

  const login = async (email: string, password: string): Promise<AuthResult> => {
    try {
      const supabase = getSupabase();
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) return { success: false, error: error.message };
      if (!data.user) return { success: false, error: "Login failed" };
      const mapped = mapSupabaseUser(data.user);
      setUser(mapped);
      return { success: true, user: mapped };
    } catch (err) {
      return { success: false, error: "Login failed" };
    }
  };

  const register = async (userData: {
    username: string;
    email?: string;
    password: string;
    [key: string]: any;
  }): Promise<AuthResult> => {
    try {
      const supabase = getSupabase();
      if (!userData.email) {
        return { success: false, error: "Email is required for Supabase auth" };
      }
      const { password, email, username, ...rest } = userData;
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { username, ...rest } },
      });
      if (error) return { success: false, error: error.message };
      if (!data.user) return { success: false, error: "Registration failed" };
      const mapped = mapSupabaseUser(data.user);
      setUser(mapped);
      return { success: true, user: mapped };
    } catch (err) {
      return { success: false, error: "Registration failed" };
    }
  };

  const logout = () => {
    const supabase = getSupabase();
    supabase.auth.signOut();
    setUser(null);
  };

  const isAuthenticated = (): boolean => user !== null;

  const requestPasswordReset = async (
    email: string,
  ): Promise<PasswordResetResult> => {
    try {
      const supabase = getSupabase();
      const { error } = await supabase.auth.resetPasswordForEmail(email);
      if (error) return { success: false, error: error.message };
      return {
        success: true,
        message: "If an account exists, a reset link has been sent",
      };
    } catch {
      return { success: false, error: "Failed to request password reset" };
    }
  };

  const verifyResetToken = async (
    _token: string,
  ): Promise<PasswordResetResult> => {
    // Supabase handles token verification via the magic link redirect
    return { success: true, message: "Token handled by Supabase redirect" };
  };

  const resetPassword = async (
    _token: string,
    newPassword: string,
  ): Promise<AuthResult> => {
    try {
      const supabase = getSupabase();
      const { error } = await supabase.auth.updateUser({
        password: newPassword,
      });
      if (error) return { success: false, error: error.message };
      return { success: true, message: "Password updated successfully" };
    } catch {
      return { success: false, error: "Failed to reset password" };
    }
  };

  const value: AuthContextType = {
    user,
    isLoading,
    login,
    register,
    logout,
    isAuthenticated,
    requestPasswordReset,
    verifyResetToken,
    resetPassword,
  };

  return (
    <SupabaseAuthContext.Provider value={value}>
      {children}
    </SupabaseAuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(SupabaseAuthContext);
  if (!context) {
    throw new Error(
      "useAuth must be used within a SupabaseAuthProvider",
    );
  }
  return context;
};
