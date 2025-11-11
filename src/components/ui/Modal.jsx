import { useEffect } from 'react'
export default function Modal({open,onClose,children}){
  useEffect(()=>{ const onK=(e)=>e.key==='Escape'&&onClose&&onClose(); window.addEventListener('keydown',onK); return ()=>window.removeEventListener('keydown',onK)},[onClose])
  if(!open) return null
  return (<div style={{position:'fixed',inset:0,background:'rgba(0,0,0,.25)'}} onClick={onClose}><div className='card' style={{maxWidth:520,margin:'10% auto',background:'#fff'}} onClick={(e)=>e.stopPropagation()}>{children}</div></div>)
}
