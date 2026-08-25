import React from 'react';

export function FilterTabs({items=[],active,onChange,style,...rest}){
  return <div {...rest} style={{display:'flex',alignItems:'center',gap:'var(--sp-6)',...style}}>
    {items.map(it=>{const on=it===active;return <button key={it} onClick={()=>onChange&&onChange(it)}
      style={{background:'none',border:0,padding:'8px 0',cursor:'pointer',font:'var(--fw-medium) var(--fs-label)/1 var(--font-display)',letterSpacing:'var(--ls-nav)',textTransform:'uppercase',color:on?'var(--text-accent)':'var(--text-muted)',borderBottom:'2px solid '+(on?'var(--line-gold-strong)':'transparent'),transition:'color var(--dur-fast) var(--ease-out)'}}>{it}</button>;})}
  </div>;
}