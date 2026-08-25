import React from 'react';

export function StatTriad({stats=[],style,...rest}){
  return <div {...rest} style={{display:'flex',alignItems:'stretch',...style}}>
    {stats.map((s,i)=><div key={i} style={{padding:'0 var(--sp-7)',paddingLeft:i===0?0:'var(--sp-7)',borderLeft:i===0?'none':'1px solid var(--line-hairline)'}}>
      <div style={{font:'var(--fw-semibold) var(--fs-h1)/1 var(--font-display)',color:'var(--gold-400)'}}>{s.value}</div>
      <div style={{marginTop:'8px',font:'var(--fw-medium) var(--fs-micro)/1 var(--font-display)',letterSpacing:'var(--ls-caps-wide)',textTransform:'uppercase',color:'var(--text-muted)'}}>{s.label}</div>
    </div>)}
  </div>;
}