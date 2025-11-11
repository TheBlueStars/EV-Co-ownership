export default function Button({children,...p}){return <button className={'btn '+(p.variant==='primary'?'btn-primary':'')} {...p}>{children}</button>}
