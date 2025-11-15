// src/contexts/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { FRONTEND_ROUTES, ROLES } from "../utils/constants";

const AuthContext = createContext();

const MOCK_USERS = [
  {
    id: 1,
    name: "Admin User",
    email: "admin@gmail.com",
    password: "123456",
    role: ROLES.ADMIN,
  },
  {
    id: 2,
    name: "Staff User",
    email: "staff@gmail.com",
    password: "123456",
    role: ROLES.STAFF,
  },
  {
    id: 3,
    name: "Co-owner User",
    email: "coowner@gmail.com",
    password: "123456",
    role: ROLES.CO_OWNER,
  },
];

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Load từ localStorage
  useEffect(() => {
    const cached = localStorage.getItem("mock_user");
    if (cached) {
      try {
        setUser(JSON.parse(cached));
      } catch {
        localStorage.removeItem("mock_user");
      }
    }
  }, []);

  // mock login
  const login = async (email, password) => {
    const found = MOCK_USERS.find(
      (u) => u.email === email && u.password === password,
    );
    if (!found) {
      throw new Error("Sai email hoặc mật khẩu");
    }

    const { password: _pw, ...userData } = found;
    localStorage.setItem("mock_user", JSON.stringify(userData));
    setUser(userData);
    return userData;
  };

  const logout = () => {
    localStorage.removeItem("mock_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
        FRONTEND_ROUTES,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
