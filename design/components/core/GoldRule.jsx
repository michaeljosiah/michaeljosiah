import React from 'react';

export function GoldRule({width=40,thickness=3,style,...rest}){
  return <div {...rest} style={{width,height:thickness,background:'var(--rule-accent)',flex:'none',...style}}/>;
}