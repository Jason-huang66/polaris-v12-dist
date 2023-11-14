(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4123],{10875:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/setting-toggle-with-primitive-components",function(){return n(27006)}])},27006:function(e,t,n){"use strict";n.r(t),n.d(t,{WithPrimitiveComponents:function(){return v}});var a=n(24246),r=n(99127),o=n(30324),i=n(33121),s=n(39355),l=n(88470),c=n(58330),d=n(73260),p=n(19678),g=n(39131),u=n(27378),b=n(64515);function v(){let[e,t]=(0,u.useState)(!0),n=(0,u.useCallback)(()=>t(e=>!e),[]),b="setting-toggle-uuid",{mdDown:v}=(0,r.kC)(),x=e?"On":"Off",h="Test mode",m=(0,a.jsx)(o.C,{tone:e?"success":void 0,toneAndProgressLabelOverride:"Setting is ".concat(x),children:x}),P=(0,a.jsx)(i.z,{variant:"plain",icon:g.S,accessibilityLabel:"Learn more"}),B=h?(0,a.jsx)(s.g,{gap:"200",wrap:!1,children:(0,a.jsxs)(s.g,{gap:"200",align:"start",blockAlign:"baseline",children:[(0,a.jsx)("label",{htmlFor:b,children:(0,a.jsx)(l.x,{variant:"headingMd",as:"h6",children:h})}),(0,a.jsxs)(s.g,{gap:"200",align:"center",blockAlign:"center",children:[m,P]})]})}):null,w=(0,a.jsx)(i.z,{role:"switch",id:b,ariaChecked:e?"true":"false",onClick:n,size:"slim",children:e?"Turn off":"Turn on"}),f=(0,a.jsx)(c.x,{width:"100%",children:(0,a.jsxs)(s.g,{gap:"1200",align:"space-between",blockAlign:"start",wrap:!1,children:[B,v?null:(0,a.jsx)(c.x,{minWidth:"fit-content",children:(0,a.jsx)(s.g,{align:"end",children:w})})]})}),k=(0,a.jsxs)(d.E,{gap:"400",children:[(0,a.jsx)(l.x,{id:"setting-toggle-description-uuid",variant:"bodyMd",as:"p",tone:"subdued",children:"Simulate transactions to test your checkout and order flows. When test mode is on, checkout does not accept real credit cards."}),v?(0,a.jsx)(c.x,{width:"100%",children:(0,a.jsx)(s.g,{align:"start",children:w})}):null]});return(0,a.jsx)(p.Z,{children:(0,a.jsxs)(d.E,{gap:{xs:"400",sm:"500"},children:[(0,a.jsx)(c.x,{width:"100%",children:(0,a.jsxs)(d.E,{gap:{xs:"200",sm:"400"},children:[f,k]})}),(0,a.jsx)(l.x,{variant:"bodyMd",as:"p",children:"Your checkout is only accepting test payments."})]})})}t.default=(0,b.y)(v)},30324:function(e,t,n){"use strict";let a,r;n.d(t,{C:function(){return m}});var o,i,s=n(27378),l=n(39627),c=n(44155),d={Badge:"Polaris-Badge",toneSuccess:"Polaris-Badge--toneSuccess","toneSuccess-strong":"Polaris-Badge__toneSuccess--strong",toneInfo:"Polaris-Badge--toneInfo","toneInfo-strong":"Polaris-Badge__toneInfo--strong",toneAttention:"Polaris-Badge--toneAttention","toneAttention-strong":"Polaris-Badge__toneAttention--strong",toneWarning:"Polaris-Badge--toneWarning","toneWarning-strong":"Polaris-Badge__toneWarning--strong",toneCritical:"Polaris-Badge--toneCritical","toneCritical-strong":"Polaris-Badge__toneCritical--strong",toneNew:"Polaris-Badge--toneNew","toneRead-only":"Polaris-Badge__toneRead--only",toneEnabled:"Polaris-Badge--toneEnabled",sizeLarge:"Polaris-Badge--sizeLarge",withinFilter:"Polaris-Badge--withinFilter",Icon:"Polaris-Badge__Icon",PipContainer:"Polaris-Badge__PipContainer"};function p(e,t,n){let o="",i="";if(!t&&!n)return"";switch(t){case r.Incomplete:o=e.translate("Polaris.Badge.PROGRESS_LABELS.incomplete");break;case r.PartiallyComplete:o=e.translate("Polaris.Badge.PROGRESS_LABELS.partiallyComplete");break;case r.Complete:o=e.translate("Polaris.Badge.PROGRESS_LABELS.complete")}switch(n){case a.Info:case a.InfoStrong:i=e.translate("Polaris.Badge.TONE_LABELS.info");break;case a.Success:case a.SuccessStrong:i=e.translate("Polaris.Badge.TONE_LABELS.success");break;case a.Warning:case a.WarningStrong:i=e.translate("Polaris.Badge.TONE_LABELS.warning");break;case a.Critical:case a.CriticalStrong:i=e.translate("Polaris.Badge.TONE_LABELS.critical");break;case a.Attention:case a.AttentionStrong:i=e.translate("Polaris.Badge.TONE_LABELS.attention");break;case a.New:i=e.translate("Polaris.Badge.TONE_LABELS.new");break;case a.ReadOnly:i=e.translate("Polaris.Badge.TONE_LABELS.readOnly");break;case a.Enabled:i=e.translate("Polaris.Badge.TONE_LABELS.enabled")}return!n&&t?o:n&&!t?i:e.translate("Polaris.Badge.progressAndTone",{progressLabel:o,toneLabel:i})}(o=a||(a={})).Info="info",o.Success="success",o.Warning="warning",o.Critical="critical",o.Attention="attention",o.New="new",o.InfoStrong="info-strong",o.SuccessStrong="success-strong",o.WarningStrong="warning-strong",o.CriticalStrong="critical-strong",o.AttentionStrong="attention-strong",o.ReadOnly="read-only",o.Enabled="enabled",(i=r||(r={})).Incomplete="incomplete",i.PartiallyComplete="partiallyComplete",i.Complete="complete";var g={Pip:"Polaris-Badge-Pip",toneInfo:"Polaris-Badge-Pip--toneInfo",toneSuccess:"Polaris-Badge-Pip--toneSuccess",toneNew:"Polaris-Badge-Pip--toneNew",toneAttention:"Polaris-Badge-Pip--toneAttention",toneWarning:"Polaris-Badge-Pip--toneWarning",toneCritical:"Polaris-Badge-Pip--toneCritical",progressIncomplete:"Polaris-Badge-Pip--progressIncomplete",progressPartiallyComplete:"Polaris-Badge-Pip--progressPartiallyComplete",progressComplete:"Polaris-Badge-Pip--progressComplete"},u=n(57963),b=n(88470),v=n(89219);let x="medium",h={complete:()=>s.createElement("svg",{viewBox:"0 0 20 20"},s.createElement("path",{d:"M6 10c0-.93 0-1.395.102-1.776a3 3 0 0 1 2.121-2.122C8.605 6 9.07 6 10 6c.93 0 1.395 0 1.776.102a3 3 0 0 1 2.122 2.122C14 8.605 14 9.07 14 10s0 1.395-.102 1.777a3 3 0 0 1-2.122 2.12C11.395 14 10.93 14 10 14s-1.395 0-1.777-.102a3 3 0 0 1-2.12-2.121C6 11.395 6 10.93 6 10Z"})),partiallyComplete:()=>s.createElement("svg",{viewBox:"0 0 20 20"},s.createElement("path",{fillRule:"evenodd",d:"m8.888 6.014-.017-.018-.02.02c-.253.013-.45.038-.628.086a3 3 0 0 0-2.12 2.122C6 8.605 6 9.07 6 10s0 1.395.102 1.777a3 3 0 0 0 2.121 2.12C8.605 14 9.07 14 10 14c.93 0 1.395 0 1.776-.102a3 3 0 0 0 2.122-2.121C14 11.395 14 10.93 14 10c0-.93 0-1.395-.102-1.776a3 3 0 0 0-2.122-2.122C11.395 6 10.93 6 10 6c-.475 0-.829 0-1.112.014ZM8.446 7.34a1.75 1.75 0 0 0-1.041.94l4.314 4.315c.443-.2.786-.576.941-1.042L8.446 7.34Zm4.304 2.536L10.124 7.25c.908.001 1.154.013 1.329.06a1.75 1.75 0 0 1 1.237 1.237c.047.175.059.42.06 1.329ZM8.547 12.69c.182.05.442.06 1.453.06h.106L7.25 9.894V10c0 1.01.01 1.27.06 1.453a1.75 1.75 0 0 0 1.237 1.237Z"})),incomplete:()=>s.createElement("svg",{viewBox:"0 0 20 20"},s.createElement("path",{fillRule:"evenodd",d:"M8.547 12.69c.183.05.443.06 1.453.06s1.27-.01 1.453-.06a1.75 1.75 0 0 0 1.237-1.237c.05-.182.06-.443.06-1.453s-.01-1.27-.06-1.453a1.75 1.75 0 0 0-1.237-1.237c-.182-.05-.443-.06-1.453-.06s-1.27.01-1.453.06A1.75 1.75 0 0 0 7.31 8.547c-.05.183-.06.443-.06 1.453s.01 1.27.06 1.453a1.75 1.75 0 0 0 1.237 1.237ZM6.102 8.224C6 8.605 6 9.07 6 10s0 1.395.102 1.777a3 3 0 0 0 2.122 2.12C8.605 14 9.07 14 10 14s1.395 0 1.777-.102a3 3 0 0 0 2.12-2.121C14 11.395 14 10.93 14 10c0-.93 0-1.395-.102-1.776a3 3 0 0 0-2.121-2.122C11.395 6 10.93 6 10 6c-.93 0-1.395 0-1.776.102a3 3 0 0 0-2.122 2.122Z"}))};function m({children:e,tone:t,progress:n,icon:a,size:r=x,toneAndProgressLabelOverride:o}){let i=(0,u.Q)(),g=(0,s.useContext)(c.k),m=(0,l.AK)(d.Badge,t&&d[(0,l.OZ)("tone",t)],r&&r!==x&&d[(0,l.OZ)("size",r)],g&&d.withinFilter),P=o||p(i,n,t),B=Boolean(P)&&s.createElement(b.x,{as:"span",visuallyHidden:!0},P);return n&&!a&&(B=s.createElement("span",{className:d.Icon},s.createElement(v.J,{accessibilityLabel:P,source:h[n]}))),s.createElement("span",{className:m},B,a&&s.createElement("span",{className:d.Icon},s.createElement(v.J,{source:a})),e&&s.createElement(b.x,{as:"span",variant:"bodySm",fontWeight:"new"===t?"medium":void 0},e))}m.Pip=function({tone:e,progress:t="complete",accessibilityLabelOverride:n}){let a=(0,u.Q)(),r=(0,l.AK)(g.Pip,e&&g[(0,l.OZ)("tone",e)],t&&g[(0,l.OZ)("progress",t)]),o=n||p(a,t,e);return s.createElement("span",{className:r},s.createElement(b.x,{as:"span",visuallyHidden:!0},o))}},73260:function(e,t,n){"use strict";n.d(t,{E:function(){return i}});var a=n(27378),r=n(39627),o={BlockStack:"Polaris-BlockStack",listReset:"Polaris-BlockStack--listReset",fieldsetReset:"Polaris-BlockStack--fieldsetReset"};let i=({as:e="div",children:t,align:n,inlineAlign:i,gap:s,id:l,reverseOrder:c=!1,...d})=>{let p=(0,r.AK)(o.BlockStack,("ul"===e||"ol"===e)&&o.listReset,"fieldset"===e&&o.fieldsetReset),g={"--pc-block-stack-align":n?`${n}`:null,"--pc-block-stack-inline-align":i?`${i}`:null,"--pc-block-stack-order":c?"column-reverse":"column",...(0,r.jD)("block-stack","gap","space",s)};return a.createElement(e,{className:p,style:(0,r.vW)(g),...d},t)}},58330:function(e,t,n){"use strict";n.d(t,{x:function(){return i}});var a=n(27378),r=n(39627),o={listReset:"Polaris-Box--listReset",Box:"Polaris-Box",visuallyHidden:"Polaris-Box--visuallyHidden",printHidden:"Polaris-Box--printHidden"};let i=(0,a.forwardRef)(({as:e="div",background:t,borderColor:n,borderStyle:i,borderWidth:s,borderBlockStartWidth:l,borderBlockEndWidth:c,borderInlineStartWidth:d,borderInlineEndWidth:p,borderRadius:g,borderEndStartRadius:u,borderEndEndRadius:b,borderStartStartRadius:v,borderStartEndRadius:x,children:h,color:m,id:P,minHeight:B,minWidth:w,maxWidth:f,overflowX:k,overflowY:E,outlineColor:S,outlineStyle:C,outlineWidth:_,padding:y,paddingBlockStart:A,paddingBlockEnd:L,paddingInlineStart:O,paddingInlineEnd:j,role:N,shadow:$,tabIndex:R,width:I,printHidden:W,visuallyHidden:T,position:Z,insetBlockStart:H,insetBlockEnd:z,insetInlineStart:M,insetInlineEnd:D,zIndex:X,opacity:F,...K},G)=>{let J={"--pc-box-color":m?`var(--p-color-${m})`:void 0,"--pc-box-background":t?`var(--p-color-${t})`:void 0,"--pc-box-border-color":n?"transparent"===n?"transparent":`var(--p-color-${n})`:void 0,"--pc-box-border-style":i||(n||s||l||c||d||p?"solid":void 0),"--pc-box-border-radius":g?`var(--p-border-radius-${g})`:void 0,"--pc-box-border-end-start-radius":u?`var(--p-border-radius-${u})`:void 0,"--pc-box-border-end-end-radius":b?`var(--p-border-radius-${b})`:void 0,"--pc-box-border-start-start-radius":v?`var(--p-border-radius-${v})`:void 0,"--pc-box-border-start-end-radius":x?`var(--p-border-radius-${x})`:void 0,"--pc-box-border-width":s?`var(--p-border-width-${s})`:void 0,"--pc-box-border-block-start-width":l?`var(--p-border-width-${l})`:void 0,"--pc-box-border-block-end-width":c?`var(--p-border-width-${c})`:void 0,"--pc-box-border-inline-start-width":d?`var(--p-border-width-${d})`:void 0,"--pc-box-border-inline-end-width":p?`var(--p-border-width-${p})`:void 0,"--pc-box-min-height":B,"--pc-box-min-width":w,"--pc-box-max-width":f,"--pc-box-outline-color":S?`var(--p-color-${S})`:void 0,"--pc-box-outline-style":C||(S||_?"solid":void 0),"--pc-box-outline-width":_?`var(--p-border-width-${_})`:void 0,"--pc-box-overflow-x":k,"--pc-box-overflow-y":E,...(0,r.jD)("box","padding-block-end","space",L||y),...(0,r.jD)("box","padding-block-start","space",A||y),...(0,r.jD)("box","padding-inline-start","space",O||y),...(0,r.jD)("box","padding-inline-end","space",j||y),"--pc-box-shadow":$?`var(--p-shadow-${$})`:void 0,"--pc-box-width":I,position:Z,"--pc-box-inset-block-start":H?`var(--p-space-${H})`:void 0,"--pc-box-inset-block-end":z?`var(--p-space-${z})`:void 0,"--pc-box-inset-inline-start":M?`var(--p-space-${M})`:void 0,"--pc-box-inset-inline-end":D?`var(--p-space-${D})`:void 0,zIndex:X,opacity:F},Q=(0,r.AK)(o.Box,T&&o.visuallyHidden,W&&o.printHidden,"ul"===e&&o.listReset);return a.createElement(e,{className:Q,id:P,ref:G,style:(0,r.vW)(J),role:N,tabIndex:R,...K},h)});i.displayName="Box"},19678:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var a=n(27378),r=n(99127),o=n(10952),i=n(39627),s={ShadowBevel:"Polaris-ShadowBevel"};function l(e){let{as:t="div",bevel:n=!0,borderRadius:r,boxShadow:o,children:l,zIndex:d="0"}=e;return a.createElement(t,{className:s.ShadowBevel,style:{"--pc-shadow-bevel-z-index":d,...(0,i.OX)("shadow-bevel","content",c(n,e=>e?'""':"none")),...(0,i.OX)("shadow-bevel","box-shadow",c(n,e=>e?`var(--p-shadow-${o})`:"none")),...(0,i.OX)("shadow-bevel","border-radius",c(n,e=>e?`var(--p-border-radius-${r})`:"var(--p-border-radius-0)"))}},l)}function c(e,t){return"boolean"==typeof e?t(e):Object.fromEntries(Object.entries(e).map(([e,n])=>[e,t(n)]))}var d=n(58330);let p=({children:e,background:t="bg-surface",padding:n={xs:"400"},roundedAbove:i})=>{let s=(0,r.kC)(),c=!i;return i&&s[`${i}Up`]&&(c=!0),a.createElement(o.O.Provider,{value:!0},a.createElement(l,{boxShadow:"100",borderRadius:c?"300":"0",zIndex:"32"},a.createElement(d.x,{background:t,padding:n,overflowX:"hidden",overflowY:"hidden",minHeight:"100%"},e)))}},39355:function(e,t,n){"use strict";n.d(t,{g:function(){return i}});var a=n(27378),r=n(39627),o={InlineStack:"Polaris-InlineStack"};let i=function({align:e,blockAlign:t,gap:n,wrap:i=!0,children:s}){let l={"--pc-inline-stack-align":e,"--pc-inline-stack-block-align":t,"--pc-inline-stack-wrap":i?"wrap":"nowrap",...(0,r.jD)("inline-stack","gap","space",n)};return a.createElement("div",{className:o.InlineStack,style:l},s)}},10952:function(e,t,n){"use strict";n.d(t,{O:function(){return r}});var a=n(27378);let r=(0,a.createContext)(!1)},44155:function(e,t,n){"use strict";n.d(t,{k:function(){return r}});var a=n(27378);let r=(0,a.createContext)(!1)}},function(e){e.O(0,[4515,3121,9774,2888,179],function(){return e(e.s=10875)}),_N_E=e.O()}]);