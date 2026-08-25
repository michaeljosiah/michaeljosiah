import React from 'react';
import {Icon} from '../core/Icon';
export function SocialRail({links=[],style,...rest}){
  return <div {...rest} style={{width:'var(--rail-width)',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'var(--sp-6)',borderRight:'1px solid var(--line-hairline)',background:'var(--surface-shell)',...style}}>
    {links.map(l=><a key={l.icon} href={l.href||'#'} aria-label={l.label} style={{color:'var(--text-muted)',display:'grid',placeItems:'center',transition:'color var(--dur-fast) var(--ease-out)'}}
      onMouseEnter={e=>e.currentTarget.style.color='var(--text-accent)'} onMouseLeave={e=>e.currentTarget.style.color='var(--text-muted)'}>
      <Icon name={l.icon} size={17}/></a>)}
  </div>;
}