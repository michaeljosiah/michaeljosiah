import React from 'react';
const BASE='https://unpkg.com/lucide-static@0.436.0/icons/';
const CACHE=new Map();
export function Icon({name,size=20,strokeColor,style,...rest}){
  const [svg,setSvg]=React.useState(()=>CACHE.get(name)||null);
  React.useEffect(()=>{
    let live=true;
    if(CACHE.has(name)){setSvg(CACHE.get(name));return;}
    fetch(BASE+name+'.svg').then(r=>r.ok?r.text():'').then(t=>{
      const cleaned=t.replace(/<\?xml[^>]*>/,'').replace(/width="24"/,'width="100%"').replace(/height="24"/,'height="100%"');
      CACHE.set(name,cleaned);
      if(live)setSvg(cleaned);
    }).catch(()=>{});
    return()=>{live=false;};
  },[name]);
  return <span aria-hidden="true" {...rest}
    style={{display:'inline-flex',alignItems:'center',justifyContent:'center',flex:'none',width:size,height:size,color:strokeColor||'currentColor',...style}}
    dangerouslySetInnerHTML={svg?{__html:svg}:undefined}/>;
}