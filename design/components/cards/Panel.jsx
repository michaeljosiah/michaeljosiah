import React from 'react';

export function Panel({children,padded=true,hoverable=false,style,...rest}){
  const [h,setH]=React.useState(false);
  return <div {...rest} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
    style={{background:hoverable&&h?'var(--surface-card-hover)':'var(--surface-card)',border:'1px solid '+(hoverable&&h?'var(--line-gold)':'var(--line-hairline)'),borderRadius:'var(--radius-md)',boxShadow:hoverable&&h?'var(--shadow-lift)':'var(--shadow-card)',padding:padded?'var(--pad-card)':0,transition:'background var(--dur-base) var(--ease-out),border-color var(--dur-base) var(--ease-out),box-shadow var(--dur-base) var(--ease-out)',...style}}>{children}</div>;
}