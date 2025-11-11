import { createContext, useContext, useEffect, useState } from 'react'
const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)

  useEffect(() => {
    const t = localStorage.getItem('token')
    const u = localStorage.getItem('user')
    if (t) setToken(t)
    if (u) setUser(JSON.parse(u))
  }, [])

  const login = (tk, u) => {
    setToken(tk); setUser(u)
    localStorage.setItem('token', tk)
    localStorage.setItem('user', JSON.stringify(u))
  }
  const logout = () => {
    setToken(null); setUser(null)
    localStorage.removeItem('token'); localStorage.removeItem('user')
  }
  return <AuthContext.Provider value={{ user, token, login, logout }}>{children}</AuthContext.Provider>
}
export function useAuth(){ return useContext(AuthContext) }
