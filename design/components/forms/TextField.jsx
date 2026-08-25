import React from 'react';
import {Icon} from '../core/Icon';
export function TextField({placeholder,icon,value,onChange,type='text',multiline=false,rows=4,style,...rest}){
  const [foc,setFoc]=React.useState(false);
  const input={width:'100%',background:'transparent',border:0,outline:'none',color:'var(--text-heading)',font:'var(--type-body)',resize:'none'};
  return <div {...rest} style={{display:'flex',alignItems:multiline?'flex-start':'center',gap:'12px',padding:'13px 14px',background:'var(--surface-inset)',border:'1px solid '+(foc?'var(--line-gold)':'var(--line-soft)'),borderRadius:'var(--radius-sm)',transition:'border-color var(--dur-fast) var(--ease-out)',...style}}>
    {multiline
      ?<textarea rows={rows} placeholder={placeholder} value={value} onChange={onChange} onFocus={()=>setFoc(true)} onBlur={()=>setFoc(false)} style={input}/>
      :<input type={type} placeholder={placeholder} value={value} onChange={onChange} onFocus={()=>setFoc(true)} onBlur={()=>setFoc(false)} style={input}/>}
    {icon&&<Icon name={icon} size={15} style={{color:foc?'var(--text-accent)':'var(--text-faint)'}}/>}
  </div>;
}