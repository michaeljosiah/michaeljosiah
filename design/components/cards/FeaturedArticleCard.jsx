import React from 'react';
import {Panel} from './Panel';import {Tag} from '../core/Tag';import {MetaLine} from '../core/MetaLine';import {Button} from '../core/Button';
export function FeaturedArticleCard({image,badge='Featured',date,category,categoryTone='story',title,blurb,onOpen,style,...rest}){
  return <Panel hoverable padded={false} onClick={onOpen} style={{overflow:'hidden',cursor:'pointer',display:'flex',flexDirection:'column',...style}} {...rest}>
    <div style={{position:'relative',flex:1,minHeight:190,background:image?'url('+image+') center/cover':'var(--surface-raised)'}}>
      <div style={{position:'absolute',inset:0,background:'var(--scrim-card)'}}/>
      {badge&&<Tag tone="story" filled style={{position:'absolute',top:12,left:12}}>{badge}</Tag>}
    </div>
    <div style={{padding:'var(--pad-card)',display:'flex',flexDirection:'column',gap:'10px'}}>
      <MetaLine date={date} category={category} categoryTone={categoryTone}/>
      <div style={{font:'var(--fw-medium) var(--fs-h1)/var(--lh-tight) var(--font-body)',color:'var(--text-display)'}}>{title}</div>
      <p style={{font:'var(--fw-regular) var(--fs-body-sm)/var(--lh-body) var(--font-body)',color:'var(--text-muted)'}}>{blurb}</p>
      <Button variant="text" size="sm" style={{marginTop:'4px'}}>Read article</Button>
    </div>
  </Panel>;
}