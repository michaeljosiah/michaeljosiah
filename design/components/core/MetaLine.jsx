import React from 'react';
import {Icon} from './Icon';
export function MetaLine({date,category,categoryTone='story',readTime,style,...rest}){
  const cap={font:'var(--fw-medium) var(--fs-micro)/1 var(--font-display)',letterSpacing:'var(--ls-caps)',textTransform:'uppercase'};
  return <div {...rest} style={{display:'flex',alignItems:'center',gap:'8px',color:'var(--text-muted)',...cap,...style}}>
    {date&&<span>{date}</span>}
    {date&&category&&<span style={{opacity:.55}}>&bull;</span>}
    {category&&<span style={{color:'var(--tag-'+categoryTone+')'}}>{category}</span>}
    {readTime&&<span style={{display:'inline-flex',alignItems:'center',gap:'5px',marginLeft:date||category?'auto':0}}><Icon name="clock" size={12}/>{readTime}</span>}
  </div>;
}