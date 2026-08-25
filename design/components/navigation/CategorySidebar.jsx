import React from 'react';
import {Icon} from '../core/Icon';
export function CategorySidebar({items=[],active,onSelect,style,...rest}){
  return <nav {...rest} style={{display:'flex',flexDirection:'column',...style}}>
    {items.map(it=>{const on=it.label===active;return <button key={it.label} onClick={()=>onSelect&&onSelect(it.label)}
      style={{display:'flex',alignItems:'center',gap:'12px',width:'100%',textAlign:'left',cursor:'pointer',padding:'13px 16px',background:on?'var(--surface-gold-wash)':'transparent',border:0,borderLeft:'2px solid '+(on?'var(--line-gold-strong)':'transparent'),color:on?'var(--text-accent)':'var(--text-body)',font:'var(--fw-medium) var(--fs-label)/1 var(--font-display)',letterSpacing:'var(--ls-caps)',textTransform:'uppercase',transition:'background var(--dur-fast) var(--ease-out),color var(--dur-fast) var(--ease-out)'}}>
      <Icon name={it.icon} size={16}/><span>{it.label}</span>
      <span style={{marginLeft:'auto',color:on?'var(--text-accent)':'var(--text-faint)'}}>{it.count}</span></button>;})}
  </nav>;
}