import Navbar from '../components/common/Navbar.jsx'
import Footer from '../components/common/Footer.jsx'
import { Outlet } from 'react-router-dom'
export default function PublicLayout(){
  return (<div className='app-shell'><Navbar/><main className='container'><Outlet/></main><Footer/></div>)
}
