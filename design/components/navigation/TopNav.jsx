import React from 'react';
import {Icon} from '../core/Icon';
export function TopNav({items=[],active,onNavigate,logoSrc,brand='Michael Josiah',onToggleTheme,style,...rest}){
  return <header {...rest} style={{display:'flex',alignItems:'center',gap:'var(--sp-7)',height:'var(--nav-height)',padding:'0 var(--pad-shell)',background:'var(--surface-shell)',borderBottom:'1px solid var(--line-hairline)',...style}}>
    <a href="#" onClick={e=>{e.preventDefault();onNavigate&&onNavigate(items[0]);}} style={{display:'flex',alignItems:'center',gap:'14px',textDecoration:'none'}}>
      {logoSrc?<img src={logoSrc} alt="" style={{height:30}}/>:null}
      <span style={{font:'var(--fw-regular) var(--fs-h3)/1 var(--font-display)',letterSpacing:'var(--ls-caps-wide)',textTransform:'uppercase',color:'var(--text-heading)'}}>{brand}</span>
    </a>
    <nav style={{display:'flex',alignItems:'center',gap:'var(--sp-7)',marginLeft:'auto'}}>
      {items.map(it=>{const on=it===active;return <a key={it} href="#" onClick={e=>{e.preventDefault();onNavigate&&onNavigate(it);}}
        style={{font:'var(--fw-medium) var(--fs-label)/1 var(--font-display)',letterSpacing:'var(--ls-nav)',textTransform:'uppercase',color:on?'var(--text-accent)':'var(--text-body)',textDecoration:'none',padding:'6px 0',borderBottom:'2px solid '+(on?'var(--line-gold-strong)':'transparent'),transition:'color var(--dur-fast) var(--ease-out)'}}>{it}</a>;})}
    </nav>
    <button onClick={onToggleTheme} aria-label="Toggle theme" style={{width:34,height:34,display:'grid',placeItems:'center',borderRadius:'var(--radius-pill)',background:'var(--surface-raised)',border:'1px solid var(--line-hairline)',color:'var(--text-accent)',cursor:'pointer'}}>
      <Icon name="sun" size={16}/>
    </button>
  </header>;
}