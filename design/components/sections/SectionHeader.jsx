import React from 'react';
import {Eyebrow} from '../core/Eyebrow';
export function SectionHeader({eyebrow,title,style,...rest}){
  return <div {...rest} style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'var(--sp-4)',...style}}>
    {eyebrow&&<Eyebrow>{eyebrow}</Eyebrow>}
    <div style={{display:'flex',alignItems:'center',gap:'var(--sp-6)',width:'100%'}}>
      <div style={{flex:1,height:1,background:'var(--line-hairline)'}}/>
      <div style={{font:'var(--fw-regular) var(--fs-h1)/1 var(--font-display)',letterSpacing:'var(--ls-caps-wide)',textTransform:'uppercase',color:'var(--text-display)',whiteSpace:'nowrap'}}>{title}</div>
      <div style={{flex:1,height:1,background:'var(--line-hairline)'}}/>
    </div>
  </div>;
}