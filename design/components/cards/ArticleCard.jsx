import React from 'react';
import {Panel} from './Panel';import {MetaLine} from '../core/MetaLine';
export function ArticleCard({image,date,category,categoryTone='story',title,blurb,readTime,layout='horizontal',onOpen,style,...rest}){
  const body=<div style={{padding:'var(--pad-card)',display:'flex',flexDirection:'column',gap:'8px',flex:1,minWidth:0}}>
    <MetaLine date={date} category={category} categoryTone={categoryTone}/>
    <div style={{font:'var(--fw-medium) var(--fs-h3)/var(--lh-tight) var(--font-body)',color:'var(--text-heading)'}}>{title}</div>
    {blurb&&<p style={{font:'var(--fw-regular) var(--fs-body-sm)/var(--lh-body) var(--font-body)',color:'var(--text-muted)'}}>{blurb}</p>}
    {readTime&&<MetaLine readTime={readTime} style={{marginTop:'auto',paddingTop:'8px'}}/>}
  </div>;
  return <Panel hoverable padded={false} onClick={onOpen} style={{overflow:'hidden',cursor:'pointer',display:'flex',flexDirection:layout==='horizontal'?'row':'column',...style}} {...rest}>
    <div style={{flex:'none',width:layout==='horizontal'?128:'auto',height:layout==='horizontal'?'auto':104,minHeight:layout==='horizontal'?104:0,background:image?'url('+image+') center/cover':'var(--surface-raised)'}}/>
    {body}
  </Panel>;
}