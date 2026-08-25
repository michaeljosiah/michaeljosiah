import React from 'react';
import {Icon} from '../core/Icon';
export function SearchInput({placeholder='Search…',value,onChange,style,...rest}){
  return <div {...rest} style={{display:'flex',alignItems:'center',gap:'10px',padding:'9px 12px',background:'var(--surface-inset)',border:'1px solid var(--line-soft)',borderRadius:'var(--radius-sm)',minWidth:200,...style}}>
    <input placeholder={placeholder} value={value} onChange={onChange} style={{flex:1,background:'transparent',border:0,outline:'none',color:'var(--text-heading)',font:'var(--fw-regular) var(--fs-body-sm)/1.4 var(--font-body)'}}/>
    <Icon name="search" size={14} style={{color:'var(--text-faint)'}}/>
  </div>;
}