import RoleGuard from '../components/common/RoleGuard.jsx'
import Sidebar from '../components/common/Sidebar.jsx'
import { Outlet } from 'react-router-dom'
export default function CoOwnerLayout(){
  return (
    <RoleGuard allow={['CO_OWNER','ADMIN']}>
      <div className='grid' style={{gridTemplateColumns:'260px 1fr', gap:16}}>
        <Sidebar/><div><Outlet/></div>
      </div>
    </RoleGuard>
  )
}
