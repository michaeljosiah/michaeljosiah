import React from 'react';
import {Icon} from '../core/Icon';
export function CapabilityStrip({label='Built with',items=[],style,...rest}){
  return <div {...rest} style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'var(--sp-8)',padding:'var(--sp-6) 0',...style}}>
    <span style={{font:'var(--fw-medium) var(--fs-micro)/1 var(--font-display)',letterSpacing:'var(--ls-caps-wide)',textTransform:'uppercase',color:'var(--text-muted)'}}>{label}</span>
    {items.map(it=><span key={it.label} style={{display:'inline-flex',alignItems:'center',gap:'9px',color:'var(--text-body)'}}>
      <Icon name={it.icon} size={17}/>
      <span style={{font:'var(--fw-medium) var(--fs-micro)/1 var(--font-display)',letterSpacing:'var(--ls-caps-wide)',textTransform:'uppercase'}}>{it.label}</span></span>)}
  </div>;
}