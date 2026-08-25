import React from 'react';
import {Panel} from './Panel';import {Tag} from '../core/Tag';import {Button} from '../core/Button';import {Icon} from '../core/Icon';
export function ProjectCard({image,category,categoryTone='story',title,blurb,markIcon,onOpen,style,...rest}){
  return <Panel hoverable padded={false} onClick={onOpen} style={{overflow:'hidden',cursor:'pointer',display:'flex',flexDirection:'column',...style}} {...rest}>
    <div style={{position:'relative',height:130,background:image?'url('+image+') center/cover':'var(--surface-raised)'}}>
      <div style={{position:'absolute',inset:0,background:'var(--scrim-card)'}}/>
      {markIcon&&<Icon name={markIcon} size={24} style={{position:'absolute',top:12,right:12,color:'var(--tag-'+categoryTone+')',opacity:.9}}/>}
    </div>
    <div style={{padding:'var(--pad-card)',display:'flex',flexDirection:'column',gap:'10px',flex:1}}>
      <Tag tone={categoryTone}>{category}</Tag>
      <div style={{font:'var(--fw-semibold) var(--fs-h2)/var(--lh-tight) var(--font-display)',letterSpacing:'.01em',textTransform:'uppercase',color:'var(--text-display)'}}>{title}</div>
      <p style={{font:'var(--fw-regular) var(--fs-body-sm)/var(--lh-body) var(--font-body)',color:'var(--text-muted)',flex:1}}>{blurb}</p>
      <Button variant="text" size="sm" style={{marginTop:'4px'}}>View project</Button>
    </div>
  </Panel>;
}