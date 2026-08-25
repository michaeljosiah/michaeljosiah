import React from 'react';
import {Icon} from '../core/Icon';
export function ContactMethod({icon,label,value,style,...rest}){
  return <div {...rest} style={{display:'flex',gap:'14px',alignItems:'flex-start',...style}}>
    <div style={{width:32,height:32,flex:'none',display:'grid',placeItems:'center',border:'1px solid var(--line-gold)',borderRadius:'var(--radius-sm)',color:'var(--gold-400)'}}><Icon name={icon} size={16}/></div>
    <div>
      <div style={{font:'var(--fw-medium) var(--fs-micro)/1 var(--font-display)',letterSpacing:'var(--ls-caps-wide)',textTransform:'uppercase',color:'var(--text-heading)'}}>{label}</div>
      <div style={{marginTop:'6px',font:'var(--fw-regular) var(--fs-body-sm)/var(--lh-body) var(--font-body)',color:'var(--text-muted)'}}>{value}</div>
    </div>
  </div>;
}