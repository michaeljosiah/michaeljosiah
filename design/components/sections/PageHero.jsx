import React from 'react';
import {Eyebrow} from '../core/Eyebrow';
import {DisplayHeading} from '../core/DisplayHeading';
import {GoldRule} from '../core/GoldRule';
export function PageHero({eyebrow,lines,level=2,blurb,image,children,minHeight=280,contentWidth='62%',style,...rest}){
  return <section {...rest} style={{position:'relative',minHeight,overflow:'hidden',background:image?'url('+image+') right center/cover':'var(--surface-page)',...style}}>
    <div style={{position:'absolute',inset:0,background:'var(--scrim-left)'}}/>
    <div style={{position:'relative',padding:'var(--sp-8) var(--pad-shell)',maxWidth:contentWidth,display:'flex',flexDirection:'column',gap:'var(--sp-4)'}}>
      {eyebrow&&<Eyebrow>{eyebrow}</Eyebrow>}
      <DisplayHeading lines={lines} level={level}/>
      <GoldRule/>
      {blurb&&<p style={{font:'var(--fw-regular) var(--fs-body)/var(--lh-body) var(--font-body)',color:'var(--text-body)',maxWidth:'var(--max-prose)'}}>{blurb}</p>}
      {children}
    </div>
  </section>;
}