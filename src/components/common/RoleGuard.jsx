import { Navigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext.jsx'
export default function RoleGuard({ allow = [], children }) {
  const { user } = useAuth()
  if (!user) return <Navigate to='/dangnhap' replace />
  const roles = user?.roles || []
  const ok = allow.length === 0 || roles.some(r => allow.includes(r))
  return ok ? children : <Navigate to='/dashboard' replace />
}
