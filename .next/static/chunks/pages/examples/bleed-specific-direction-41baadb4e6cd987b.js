(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8802],{56422:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/bleed-specific-direction",function(){return t(44039)}])},44039:function(e,r,t){"use strict";t.r(r);var i=t(24246);t(27378);var n=t(73260),o=t(19678),a=t(2358),l=t(39355),d=t(88470),s=t(64515);let c=e=>{let{label:r="",height:t="auto",width:n="auto"}=e;return(0,i.jsx)("div",{style:{background:"var(--p-color-text-info)",padding:"14px var(--p-space-200)",height:t,width:n},children:(0,i.jsx)(l.g,{gap:"400",align:"center",children:(0,i.jsx)("div",{style:{color:"var(--p-color-text-info-on-bg-fill)"},children:(0,i.jsx)(d.x,{as:"h2",variant:"bodyMd",fontWeight:"regular",children:r})})})})};r.default=(0,s.y)(function(){return(0,i.jsxs)(n.E,{gap:"600",children:[(0,i.jsx)(o.Z,{children:(0,i.jsx)(a.z,{marginInlineStart:"800",children:(0,i.jsx)(c,{label:"marginInlineStart"})})}),(0,i.jsx)(o.Z,{children:(0,i.jsx)(a.z,{marginInlineEnd:"800",children:(0,i.jsx)(c,{label:"marginInlineEnd"})})}),(0,i.jsx)(o.Z,{children:(0,i.jsx)(a.z,{marginBlockStart:"800",children:(0,i.jsx)(c,{label:"marginBlockStart"})})}),(0,i.jsx)(o.Z,{children:(0,i.jsx)(a.z,{marginBlockEnd:"800",children:(0,i.jsx)(c,{label:"marginBlockEnd"})})})]})})},2358:function(e,r,t){"use strict";t.d(r,{z:function(){return a}});var i=t(27378),n=t(39627),o={Bleed:"Polaris-Bleed"};let a=({marginInline:e,marginBlock:r,marginBlockStart:t,marginBlockEnd:a,marginInlineStart:l,marginInlineEnd:d,children:s})=>{let c=i=>{let n={marginBlockStart:t,marginBlockEnd:a,marginInlineStart:l,marginInlineEnd:d,marginInline:e,marginBlock:r};return n[i]?n[i]:["marginInlineStart","marginInlineEnd"].includes(i)&&e?n.marginInline:["marginBlockStart","marginBlockEnd"].includes(i)&&r?n.marginBlock:void 0},u=c("marginBlockStart"),b=c("marginBlockEnd"),p=c("marginInlineStart"),x=c("marginInlineEnd"),v={...(0,n.jD)("bleed","margin-block-start","space",u),...(0,n.jD)("bleed","margin-block-end","space",b),...(0,n.jD)("bleed","margin-inline-start","space",p),...(0,n.jD)("bleed","margin-inline-end","space",x)};return i.createElement("div",{className:o.Bleed,style:(0,n.vW)(v)},s)}},73260:function(e,r,t){"use strict";t.d(r,{E:function(){return a}});var i=t(27378),n=t(39627),o={BlockStack:"Polaris-BlockStack",listReset:"Polaris-BlockStack--listReset",fieldsetReset:"Polaris-BlockStack--fieldsetReset"};let a=({as:e="div",children:r,align:t,inlineAlign:a,gap:l,id:d,reverseOrder:s=!1,...c})=>{let u=(0,n.AK)(o.BlockStack,("ul"===e||"ol"===e)&&o.listReset,"fieldset"===e&&o.fieldsetReset),b={"--pc-block-stack-align":t?`${t}`:null,"--pc-block-stack-inline-align":a?`${a}`:null,"--pc-block-stack-order":s?"column-reverse":"column",...(0,n.jD)("block-stack","gap","space",l)};return i.createElement(e,{className:u,style:(0,n.vW)(b),...c},r)}},58330:function(e,r,t){"use strict";t.d(r,{x:function(){return a}});var i=t(27378),n=t(39627),o={listReset:"Polaris-Box--listReset",Box:"Polaris-Box",visuallyHidden:"Polaris-Box--visuallyHidden",printHidden:"Polaris-Box--printHidden"};let a=(0,i.forwardRef)(({as:e="div",background:r,borderColor:t,borderStyle:a,borderWidth:l,borderBlockStartWidth:d,borderBlockEndWidth:s,borderInlineStartWidth:c,borderInlineEndWidth:u,borderRadius:b,borderEndStartRadius:p,borderEndEndRadius:x,borderStartStartRadius:v,borderStartEndRadius:h,children:g,color:f,id:m,minHeight:k,minWidth:j,maxWidth:P,overflowX:w,overflowY:$,outlineColor:T,outlineStyle:y,outlineWidth:E,padding:B,paddingBlockStart:S,paddingBlockEnd:O,paddingInlineStart:_,paddingInlineEnd:I,role:D,shadow:R,tabIndex:X,width:H,printHidden:N,visuallyHidden:z,position:K,insetBlockStart:Z,insetBlockEnd:A,insetInlineStart:C,insetInlineEnd:M,zIndex:W,opacity:L,...U},Y)=>{let q={"--pc-box-color":f?`var(--p-color-${f})`:void 0,"--pc-box-background":r?`var(--p-color-${r})`:void 0,"--pc-box-border-color":t?"transparent"===t?"transparent":`var(--p-color-${t})`:void 0,"--pc-box-border-style":a||(t||l||d||s||c||u?"solid":void 0),"--pc-box-border-radius":b?`var(--p-border-radius-${b})`:void 0,"--pc-box-border-end-start-radius":p?`var(--p-border-radius-${p})`:void 0,"--pc-box-border-end-end-radius":x?`var(--p-border-radius-${x})`:void 0,"--pc-box-border-start-start-radius":v?`var(--p-border-radius-${v})`:void 0,"--pc-box-border-start-end-radius":h?`var(--p-border-radius-${h})`:void 0,"--pc-box-border-width":l?`var(--p-border-width-${l})`:void 0,"--pc-box-border-block-start-width":d?`var(--p-border-width-${d})`:void 0,"--pc-box-border-block-end-width":s?`var(--p-border-width-${s})`:void 0,"--pc-box-border-inline-start-width":c?`var(--p-border-width-${c})`:void 0,"--pc-box-border-inline-end-width":u?`var(--p-border-width-${u})`:void 0,"--pc-box-min-height":k,"--pc-box-min-width":j,"--pc-box-max-width":P,"--pc-box-outline-color":T?`var(--p-color-${T})`:void 0,"--pc-box-outline-style":y||(T||E?"solid":void 0),"--pc-box-outline-width":E?`var(--p-border-width-${E})`:void 0,"--pc-box-overflow-x":w,"--pc-box-overflow-y":$,...(0,n.jD)("box","padding-block-end","space",O||B),...(0,n.jD)("box","padding-block-start","space",S||B),...(0,n.jD)("box","padding-inline-start","space",_||B),...(0,n.jD)("box","padding-inline-end","space",I||B),"--pc-box-shadow":R?`var(--p-shadow-${R})`:void 0,"--pc-box-width":H,position:K,"--pc-box-inset-block-start":Z?`var(--p-space-${Z})`:void 0,"--pc-box-inset-block-end":A?`var(--p-space-${A})`:void 0,"--pc-box-inset-inline-start":C?`var(--p-space-${C})`:void 0,"--pc-box-inset-inline-end":M?`var(--p-space-${M})`:void 0,zIndex:W,opacity:L},F=(0,n.AK)(o.Box,z&&o.visuallyHidden,N&&o.printHidden,"ul"===e&&o.listReset);return i.createElement(e,{className:F,id:m,ref:Y,style:(0,n.vW)(q),role:D,tabIndex:X,...U},g)});a.displayName="Box"},19678:function(e,r,t){"use strict";t.d(r,{Z:function(){return u}});var i=t(27378),n=t(99127),o=t(10952),a=t(39627),l={ShadowBevel:"Polaris-ShadowBevel"};function d(e){let{as:r="div",bevel:t=!0,borderRadius:n,boxShadow:o,children:d,zIndex:c="0"}=e;return i.createElement(r,{className:l.ShadowBevel,style:{"--pc-shadow-bevel-z-index":c,...(0,a.OX)("shadow-bevel","content",s(t,e=>e?'""':"none")),...(0,a.OX)("shadow-bevel","box-shadow",s(t,e=>e?`var(--p-shadow-${o})`:"none")),...(0,a.OX)("shadow-bevel","border-radius",s(t,e=>e?`var(--p-border-radius-${n})`:"var(--p-border-radius-0)"))}},d)}function s(e,r){return"boolean"==typeof e?r(e):Object.fromEntries(Object.entries(e).map(([e,t])=>[e,r(t)]))}var c=t(58330);let u=({children:e,background:r="bg-surface",padding:t={xs:"400"},roundedAbove:a})=>{let l=(0,n.kC)(),s=!a;return a&&l[`${a}Up`]&&(s=!0),i.createElement(o.O.Provider,{value:!0},i.createElement(d,{boxShadow:"100",borderRadius:s?"300":"0",zIndex:"32"},i.createElement(c.x,{background:r,padding:t,overflowX:"hidden",overflowY:"hidden",minHeight:"100%"},e)))}},39355:function(e,r,t){"use strict";t.d(r,{g:function(){return a}});var i=t(27378),n=t(39627),o={InlineStack:"Polaris-InlineStack"};let a=function({align:e,blockAlign:r,gap:t,wrap:a=!0,children:l}){let d={"--pc-inline-stack-align":e,"--pc-inline-stack-block-align":r,"--pc-inline-stack-wrap":a?"wrap":"nowrap",...(0,n.jD)("inline-stack","gap","space",t)};return i.createElement("div",{className:o.InlineStack,style:d},l)}},88470:function(e,r,t){"use strict";t.d(r,{x:function(){return a}});var i=t(27378),n=t(39627),o={root:"Polaris-Text--root",block:"Polaris-Text--block",truncate:"Polaris-Text--truncate",visuallyHidden:"Polaris-Text--visuallyHidden",start:"Polaris-Text--start",center:"Polaris-Text--center",end:"Polaris-Text--end",justify:"Polaris-Text--justify",success:"Polaris-Text--success",critical:"Polaris-Text--critical",caution:"Polaris-Text--caution",subdued:"Polaris-Text--subdued","text-inverse":"Polaris-Text__text--inverse",headingSm:"Polaris-Text--headingSm",headingMd:"Polaris-Text--headingMd",headingLg:"Polaris-Text--headingLg",headingXl:"Polaris-Text--headingXl",heading2xl:"Polaris-Text--heading2xl",heading3xl:"Polaris-Text--heading3xl",bodyXs:"Polaris-Text--bodyXs",bodySm:"Polaris-Text--bodySm",bodyMd:"Polaris-Text--bodyMd",bodyLg:"Polaris-Text--bodyLg",regular:"Polaris-Text--regular",medium:"Polaris-Text--medium",semibold:"Polaris-Text--semibold",bold:"Polaris-Text--bold",break:"Polaris-Text--break",numeric:"Polaris-Text--numeric","line-through":"Polaris-Text__line--through"};let a=({alignment:e,as:r,breakWord:t,children:a,tone:l,fontWeight:d,id:s,numeric:c=!1,truncate:u=!1,variant:b,visuallyHidden:p=!1,textDecorationLine:x})=>{let v=(0,n.AK)(o.root,b&&o[b],d&&o[d],(e||u)&&o.block,e&&o[e],t&&o.break,l&&o[l],c&&o.numeric,u&&o.truncate,p&&o.visuallyHidden,x&&o[x]);return i.createElement(r||(p?"span":"p"),Object.assign({className:v},s&&{id:s}),a)}},39627:function(e,r,t){"use strict";t.d(r,{AK:function(){return o},OX:function(){return s},OZ:function(){return a},jD:function(){return d},vW:function(){return l}});var i=t(53571),n=t(24528);function o(...e){return e.filter(Boolean).join(" ")}function a(e,r){return`${e}${r.charAt(0).toUpperCase()}${r.slice(1)}`}function l(e){let r=Object.entries(e).filter(([e,r])=>null!=r);return r.length?Object.fromEntries(r):void 0}function d(e,r,t,o){return o?Object.fromEntries(Object.entries((0,n.K)(o)?Object.fromEntries(Object.entries(o).map(([e,r])=>[e,`var(--p-${t}-${r})`])):{[i.vi[0]]:`var(--p-${t}-${o})`}).map(([t,i])=>[`--pc-${e}-${r}-${t}`,i])):{}}function s(e,r,t){return t?(0,n.K)(t)?Object.fromEntries(Object.entries(t).map(([t,i])=>[`--pc-${e}-${r}-${t}`,i])):{[`--pc-${e}-${r}-${i.vi[0]}`]:t}:{}}},24528:function(e,r,t){"use strict";function i(e){let r=typeof e;return null!=e&&("object"===r||"function"===r)}t.d(r,{K:function(){return i}})},10952:function(e,r,t){"use strict";t.d(r,{O:function(){return n}});var i=t(27378);let n=(0,i.createContext)(!1)}},function(e){e.O(0,[4515,9774,2888,179],function(){return e(e.s=56422)}),_N_E=e.O()}]);