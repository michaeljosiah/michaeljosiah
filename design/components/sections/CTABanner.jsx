import React from 'react';
import {Icon} from '../core/Icon';import {Button} from '../core/Button';
export function CTABanner({icon='compass',title,blurb,cta,onAction,style,...rest}){
  return <div {...rest} style={{display:'flex',alignItems:'center',gap:'var(--sp-6)',padding:'var(--pad-panel)',background:'var(--surface-card)',border:'1px solid var(--line-hairline)',borderRadius:'var(--radius-md)',...style}}>
    {icon&&<Icon name={icon} size={44} style={{color:'var(--gold-500)'}}/>}
    <div style={{flex:1,minWidth:0}}>
      <div style={{font:'var(--fw-medium) var(--fs-h2)/var(--lh-tight) var(--font-body)',color:'var(--text-heading)'}}>{title}</div>
      {blurb&&<div style={{marginTop:'6px',font:'var(--fw-regular) var(--fs-body-sm)/var(--lh-body) var(--font-body)',color:'var(--text-muted)'}}>{blurb}</div>}
    </div>
    {cta&&<Button variant="outline-gold" onClick={onAction} style={{flex:'none'}}>{cta}</Button>}
  </div>;
}