import React from 'react';
import {Icon} from './Icon';
const PAD={sm:'8px 16px',md:'12px 22px',lg:'14px 26px'};
const FS={sm:'var(--fs-micro)',md:'var(--fs-label)',lg:'var(--fs-body-sm)'};
export function Button({children,variant='primary',size='md',icon='arrow-right',showIcon=true,disabled,href,onClick,style,...rest}){
  const [h,setH]=React.useState(false);
  const base={display:'inline-flex',alignItems:'center',justifyContent:'center',gap:'10px',font:'var(--fw-semibold) '+FS[size]+'/1 var(--font-display)',letterSpacing:'var(--ls-caps)',textTransform:'uppercase',padding:PAD[size],borderRadius:'var(--radius-sm)',border:'1px solid transparent',cursor:disabled?'not-allowed':'pointer',textDecoration:'none',transition:'background var(--dur-fast) var(--ease-out),border-color var(--dur-fast) var(--ease-out),color var(--dur-fast) var(--ease-out),box-shadow var(--dur-base) var(--ease-out)',opacity:disabled?.4:1};
  const skin=variant==='primary'
    ?{background:h&&!disabled?'var(--action-primary-hover)':'var(--action-primary)',color:'var(--text-on-gold)',boxShadow:h&&!disabled?'var(--glow-gold)':'none'}
    :variant==='secondary'
    ?{background:'transparent',color:'var(--text-heading)',borderColor:h&&!disabled?'var(--action-ghost-border-hover)':'var(--line-strong)'}
    :variant==='outline-gold'
    ?{background:h&&!disabled?'var(--surface-gold-wash)':'transparent',color:'var(--text-accent)',borderColor:h&&!disabled?'var(--line-gold-strong)':'var(--line-gold)'}
    :{background:'transparent',color:'var(--text-accent)',padding:0,borderRadius:0};
  const Tag=href?'a':'button';
  return <Tag href={href} onClick={disabled?undefined:onClick} disabled={Tag==='button'?disabled:undefined} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{...base,...skin,...style}} {...rest}>
    {children}
    {showIcon&&icon&&<Icon name={icon} size={size==='sm'?13:15} style={{transform:h&&!disabled?'translateX(3px)':'none',transition:'transform var(--dur-fast) var(--ease-out)'}}/>}
  </Tag>;
}