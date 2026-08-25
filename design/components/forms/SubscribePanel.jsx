import React from 'react';
import {Icon} from '../core/Icon';import {Button} from '../core/Button';
export function SubscribePanel({title='Stay in the loop',blurb='Get new articles and insights delivered to your inbox.',placeholder='Your email address',onSubscribe,style,...rest}){
  const [v,setV]=React.useState('');
  return <div {...rest} style={{display:'flex',alignItems:'center',gap:'var(--sp-6)',padding:'var(--pad-panel)',background:'var(--surface-card)',border:'1px solid var(--line-hairline)',borderRadius:'var(--radius-md)',boxShadow:'var(--shadow-card)',...style}}>
    <Icon name="mail-open" size={38} style={{color:'var(--gold-400)'}}/>
    <div style={{flex:1,minWidth:0}}>
      <div style={{font:'var(--fw-medium) var(--fs-h2)/var(--lh-tight) var(--font-body)',color:'var(--text-heading)'}}>{title}</div>
      <div style={{marginTop:'6px',font:'var(--fw-regular) var(--fs-body-sm)/var(--lh-body) var(--font-body)',color:'var(--text-muted)'}}>{blurb}</div>
    </div>
    <div style={{display:'flex',alignItems:'stretch',gap:'12px',flex:'none'}}>
      <input value={v} onChange={e=>setV(e.target.value)} placeholder={placeholder} style={{width:180,padding:'11px 13px',background:'var(--surface-inset)',border:'1px solid var(--line-soft)',borderRadius:'var(--radius-sm)',outline:'none',color:'var(--text-heading)',font:'var(--fw-regular) var(--fs-body-sm)/1.4 var(--font-body)'}}/>
      <Button onClick={()=>onSubscribe&&onSubscribe(v)}>Subscribe</Button>
    </div>
  </div>;
}