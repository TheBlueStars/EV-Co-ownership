import Navbar from '../components/common/Navbar.jsx'
import Footer from '../components/common/Footer.jsx'
import { Outlet } from 'react-router-dom'
import ProtectedRoute from '../components/common/ProtectedRoute.jsx'
export default function PrivateLayout(){
  return (
    <ProtectedRoute>
      <div className='app-shell'><Navbar/><main className='container'><Outlet/></main><Footer/></div>
    </ProtectedRoute>
  )
}
