import{T as N}from"./Task-CCYw5x5N.js";import{I as V,v as x}from"./preview-errors-Dg5lG0lC.js";import"./vue.esm-bundler-DIx4Hmil.js";import"./index-DrFu-skq.js";const{addons:L}=__STORYBOOK_MODULE_PREVIEW_API__,{global:h}=__STORYBOOK_MODULE_GLOBAL__;var W="storybook/actions",C=`${W}/action-event`,Y={depth:10,clearOnStoryChange:!0,limit:50},R=(t,a)=>{let e=Object.getPrototypeOf(t);return!e||a(e)?e:R(e,a)},z=t=>!!(typeof t=="object"&&t&&R(t,a=>/^Synthetic(?:Base)?Event$/.test(a.constructor.name))&&typeof t.persist=="function"),F=t=>{if(z(t)){let a=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));a.persist();let e=Object.getOwnPropertyDescriptor(a,"view"),r=e==null?void 0:e.value;return typeof r=="object"&&(r==null?void 0:r.constructor.name)==="Window"&&Object.defineProperty(a,"view",{...e,value:Object.create(r.constructor.prototype)}),a}return t},M=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?x():Date.now().toString(36)+Math.random().toString(36).substring(2);function _(t,a={}){let e={...Y,...a},r=function(...p){var d,g;if(a.implicit){let u=(d="__STORYBOOK_PREVIEW__"in h?h.__STORYBOOK_PREVIEW__:void 0)==null?void 0:d.storyRenders.find(n=>n.phase==="playing"||n.phase==="rendering");if(u){let n=!((g=window==null?void 0:window.FEATURES)!=null&&g.disallowImplicitActionsInRenderV8),m=new V({phase:u.phase,name:t,deprecated:n});if(n)console.warn(m);else throw m}}let P=L.getChannel(),b=M(),K=5,l=p.map(F),j=p.length>1?l:l[0],B={id:b,count:0,data:{name:t,args:j},options:{...e,maxDepth:K+(e.depth||3),allowFunction:e.allowFunction||!1}};P.emit(C,B)};return r.isAction=!0,r}const q={component:N,title:"Task",tags:["autodocs"],argTypes:{onPinTask:{},onArchiveTask:{}},excludeStories:/.*Data$/},J={onPinTask:_("pin-task"),onArchiveTask:_("archive-task")},s={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},o={args:{task:{...s.args.task,state:"TASK_PINNED"}}},i={args:{task:{...s.args.task,state:"TASK_ARCHIVED"}}},U="This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!",c={args:{task:{...s.args.task,title:U}}};var T,f,O;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX'
    }
  }
}`,...(O=(f=s.parameters)==null?void 0:f.docs)==null?void 0:O.source}}};var k,y,D;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED'
    }
  }
}`,...(D=(y=o.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var S,A,I;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED'
    }
  }
}`,...(I=(A=i.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var E,v,w;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      title: longTitleString
    }
  }
}`,...(w=(v=c.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const Q=["actionsData","Default","Pinned","Archived","LongTitle"];export{i as Archived,s as Default,c as LongTitle,o as Pinned,Q as __namedExportsOrder,J as actionsData,q as default};
