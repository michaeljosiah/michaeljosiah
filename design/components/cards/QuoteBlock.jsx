import React from 'react';

export function QuoteBlock({quote,attribution,image,align='left',style,...rest}){
  return <div {...rest} style={{position:'relative',overflow:'hidden',display:'flex',gap:'16px',padding:'var(--pad-panel)',background:image?'url('+image+') right center/cover':'var(--surface-card)',border:'1px solid var(--line-hairline)',borderRadius:'var(--radius-md)',...style}}>
    {image&&<div style={{position:'absolute',inset:0,background:'var(--scrim-left)'}}/>}
    <span style={{position:'relative',fontFamily:'Georgia,serif',fontSize:38,lineHeight:.85,color:'var(--gold-400)',flex:'none'}}>&#10077;</span>
    <div style={{position:'relative',textAlign:align}}>
      <div style={{fontFamily:'var(--font-quote)',fontStyle:'italic',fontSize:'var(--fs-h2)',lineHeight:'var(--lh-tight)',color:'var(--text-heading)',maxWidth:'var(--max-prose)'}}>{quote}</div>
      {attribution&&<div style={{marginTop:'10px',font:'var(--fw-medium) var(--fs-micro)/1 var(--font-display)',letterSpacing:'var(--ls-caps)',textTransform:'uppercase',color:'var(--text-accent)'}}>&mdash; {attribution}</div>}
    </div>
  </div>;
}