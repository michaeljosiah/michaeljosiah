import React from 'react';
import {Icon} from '../core/Icon';
export function RoleList({roles=[],style,...rest}){
  return <div {...rest} style={{display:'flex',flexDirection:'column',gap:'var(--sp-6)',...style}}>
    {roles.map(r=><div key={r.title} style={{display:'flex',gap:'12px',alignItems:'flex-start'}}>
      <Icon name={r.icon} size={18} style={{color:'var(--gold-400)',marginTop:2}}/>
      <div>
        <div style={{font:'var(--fw-medium) var(--fs-h4)/1 var(--font-display)',letterSpacing:'var(--ls-caps)',textTransform:'uppercase',color:'var(--text-accent)'}}>{r.title}</div>
        <div style={{marginTop:'8px',font:'var(--fw-regular) var(--fs-body-sm)/1.5 var(--font-display)',letterSpacing:'var(--ls-caps)',textTransform:'uppercase',color:'var(--text-body)'}}>
          {(r.lines||[]).map((l,i)=><div key={i}>{l}</div>)}
        </div>
      </div>
    </div>)}
  </div>;
}