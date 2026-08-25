import React from 'react';
import {Icon} from '../core/Icon';
export function Select({label,value,options=[],onChange,style,...rest}){
  const [open,setOpen]=React.useState(false);
  return <div {...rest} style={{position:'relative',display:'inline-flex',alignItems:'center',gap:'10px',...style}}>
    {label&&<span style={{font:'var(--fw-medium) var(--fs-micro)/1 var(--font-display)',letterSpacing:'var(--ls-caps)',textTransform:'uppercase',color:'var(--text-muted)'}}>{label}</span>}
    <button onClick={()=>setOpen(!open)} style={{display:'inline-flex',alignItems:'center',gap:'8px',background:'none',border:0,cursor:'pointer',font:'var(--fw-medium) var(--fs-micro)/1 var(--font-display)',letterSpacing:'var(--ls-caps)',textTransform:'uppercase',color:'var(--text-accent)'}}>
      {value}<Icon name="chevron-down" size={14} style={{transform:open?'rotate(180deg)':'none',transition:'transform var(--dur-fast) var(--ease-out)'}}/></button>
    {open&&<div style={{position:'absolute',top:'calc(100% + 8px)',right:0,zIndex:20,minWidth:170,background:'var(--surface-raised)',border:'1px solid var(--line-soft)',borderRadius:'var(--radius-sm)',boxShadow:'var(--shadow-panel)',padding:'4px 0'}}>
      {options.map(o=><button key={o} onClick={()=>{onChange&&onChange(o);setOpen(false);}} style={{display:'block',width:'100%',textAlign:'left',padding:'9px 14px',background:'none',border:0,cursor:'pointer',font:'var(--fw-medium) var(--fs-micro)/1 var(--font-display)',letterSpacing:'var(--ls-caps)',textTransform:'uppercase',color:o===value?'var(--text-accent)':'var(--text-body)'}}>{o}</button>)}
    </div>}
  </div>;
}