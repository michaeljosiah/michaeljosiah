import React from 'react';

const TONES={story:'var(--tag-story)',ai:'var(--tag-ai)',engineering:'var(--tag-engineering)',experiment:'var(--tag-experiment)',life:'var(--tag-life)'};
export function Tag({children,tone='story',filled=false,style,...rest}){
  const c=TONES[tone]||tone;
  return <span {...rest} style={{display:'inline-block',font:'var(--fw-medium) var(--fs-micro)/1 var(--font-display)',letterSpacing:'var(--ls-caps)',textTransform:'uppercase',color:filled?'var(--text-on-gold)':c,background:filled?c:'transparent',padding:filled?'5px 9px':0,borderRadius:filled?'var(--radius-xs)':0,...style}}>{children}</span>;
}