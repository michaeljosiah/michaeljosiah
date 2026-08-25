import React from 'react';
import {Icon} from '../core/Icon';
export function ValueCard({icon,title,lines=[],style,...rest}){
  return <div {...rest} style={{display:'flex',flexDirection:'column',alignItems:'center',textAlign:'center',gap:'12px',padding:'var(--sp-6) var(--sp-4)',...style}}>
    <Icon name={icon} size={26} style={{color:'var(--gold-400)'}}/>
    <div style={{font:'var(--fw-medium) var(--fs-label)/1 var(--font-display)',letterSpacing:'var(--ls-caps-wide)',textTransform:'uppercase',color:'var(--text-heading)'}}>{title}</div>
    <div style={{font:'var(--fw-regular) var(--fs-body-sm)/var(--lh-body) var(--font-body)',color:'var(--text-muted)'}}>
      {lines.map((l,i)=><div key={i}>{l}</div>)}
    </div>
  </div>;
}