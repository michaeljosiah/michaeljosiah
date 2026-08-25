import React from 'react';
import {Panel} from './Panel';import {Eyebrow} from '../core/Eyebrow';import {Button} from '../core/Button';
export function PillarCard({image,wordmark,sub,eyebrow,eyebrowTone='var(--text-accent)',title,blurb,cta,onOpen,style,...rest}){
  return <Panel hoverable padded={false} onClick={onOpen} style={{overflow:'hidden',cursor:'pointer',display:'flex',flexDirection:'column',...style}} {...rest}>
    <div style={{position:'relative',height:150,background:image?'url('+image+') center/cover':'var(--surface-raised)'}}>
      <div style={{position:'absolute',inset:0,background:'var(--scrim-card)'}}/>
      {wordmark&&<div style={{position:'absolute',left:'var(--pad-card)',top:22}}>
        <div style={{font:'var(--fw-light) 30px/1 var(--font-display)',letterSpacing:'.04em',textTransform:'uppercase',color:'var(--text-display)'}}>{wordmark}</div>
        {sub&&<div style={{marginTop:'6px',font:'var(--fw-light) var(--fs-body-sm)/1 var(--font-display)',letterSpacing:'var(--ls-caps-wide)',textTransform:'uppercase',color:'var(--text-body)'}}>{sub}</div>}
      </div>}
    </div>
    <div style={{padding:'var(--pad-card)',display:'flex',flexDirection:'column',gap:'10px',flex:1}}>
      {eyebrow&&<Eyebrow color={eyebrowTone}>{eyebrow}</Eyebrow>}
      <div style={{font:'var(--fw-medium) var(--fs-h1)/var(--lh-tight) var(--font-body)',color:'var(--text-heading)'}}>{title}</div>
      <p style={{font:'var(--fw-regular) var(--fs-body)/var(--lh-body) var(--font-body)',color:'var(--text-muted)',flex:1}}>{blurb}</p>
      {cta&&<Button variant="text" size="sm" style={{color:eyebrowTone,marginTop:'4px'}}>{cta}</Button>}
    </div>
  </Panel>;
}