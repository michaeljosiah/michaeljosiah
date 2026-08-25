import React from 'react';

export function Eyebrow({children,color='var(--text-accent)',style,...rest}){
  return <div {...rest} style={{font:'var(--fw-medium) var(--fs-label)/1.2 var(--font-display)',letterSpacing:'var(--ls-caps-wide)',textTransform:'uppercase',color,...style}}>{children}</div>;
}