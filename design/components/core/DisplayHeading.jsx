import React from 'react';

const SZ={1:'var(--fs-display-1)',2:'var(--fs-display-2)',3:'var(--fs-display-3)'};
export function DisplayHeading({lines,level=2,as='h1',color='var(--text-display)',style,...rest}){
  const Tag=as;
  return <Tag {...rest} style={{font:'var(--fw-bold) '+SZ[level]+'/var(--lh-display) var(--font-display)',letterSpacing:'var(--ls-display)',textTransform:'uppercase',color,margin:0,...style}}>
    {(Array.isArray(lines)?lines:[lines]).map((l,i)=><div key={i}>{l}</div>)}
  </Tag>;
}