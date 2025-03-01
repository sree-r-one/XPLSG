import React, { useContext, useEffect, createContext, useState } from "react";

type User = {
  id?: string;
  name?: string;
  email: string;
};

// Define Auth Context Type
interface AuthContextType {
  isAuthenticated: boolean;
  token: string | null;
  user: User | null;
  login: (token: string, userData: User) => void;
  logout: () => void;
}

// Create Auth Context
const AuthContext = createContext<AuthContextType | null>(null);

// Create Auth Provider
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Define Auth State
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  //   Load token and user data from local storage
  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    const storedUser = localStorage.getItem("authUser");

    if (storedToken && storedUser) {
      try {
        setToken(storedToken);
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.log("Failed to parse user data", error);
      }
    }
  }, []);

  // Login function
  const login = (newToken: string, userData: User) => {
    setToken(newToken);
    setUser(userData);

    localStorage.setItem("authToken", newToken); // Store token in local storage
    localStorage.setItem("authUser", JSON.stringify(userData)); // Store user data in local storage
  };

  // Logout function (clear token and user data from local storage)
  const logout = () => {
    setToken(null);
    setUser(null);

    localStorage.removeItem("authToken");
    localStorage.removeItem("authUser");
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!token, user, token, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook for Using AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
