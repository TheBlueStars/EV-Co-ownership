import { NavLink } from 'react-router-dom'
export default function Sidebar(){
  return (
    <aside className='card' style={{minWidth:260,height:'100%',position:'sticky',top:16}}>
      <nav className='grid'>
        <NavLink to='/dashboard'>Tổng quan</NavLink>
        <NavLink to='/booking'>Đặt lịch</NavLink>
        <NavLink to='/costsharing'>Chia chi phí</NavLink>
        <NavLink to='/vote'>Biểu quyết</NavLink>
        <NavLink to='/fund'>Quỹ chung</NavLink>
        <NavLink to='/admin/users'>Quản trị</NavLink>
      </nav>
    </aside>
  )
}
