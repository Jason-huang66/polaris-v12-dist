(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9001],{59114:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/banner-warning",function(){return n(40475)}])},40475:function(e,t,n){"use strict";n.r(t);var r=n(24246),i=n(18350),a=n(21248);n(27378);var o=n(64515);t.default=(0,o.y)(function(){return(0,r.jsx)(i.jL,{title:"Before you can purchase a shipping label, this change needs to be made:",action:{content:"Edit address"},tone:"warning",children:(0,r.jsx)(a.a,{children:(0,r.jsx)(a.a.Item,{children:"The name of the city you’re shipping to has characters that aren’t allowed. City name can only include spaces and hyphens."})})})})},18350:function(e,t,n){"use strict";n.d(t,{jL:function(){return P}});var r=n(27378),i=n(45422),a=n(53700),o=n(10952),l=n(39627),c=n(99127),s=n(63671),u={Banner:"Polaris-Banner",keyFocused:"Polaris-Banner--keyFocused",withinContentContainer:"Polaris-Banner--withinContentContainer",withinPage:"Polaris-Banner--withinPage",DismissIcon:"Polaris-Banner__DismissIcon","text-success-on-bg-fill":"Polaris-Banner--textSuccessOnBgFill","text-success":"Polaris-Banner__text--success","text-warning-on-bg-fill":"Polaris-Banner--textWarningOnBgFill","text-warning":"Polaris-Banner__text--warning","text-critical-on-bg-fill":"Polaris-Banner--textCriticalOnBgFill","text-critical":"Polaris-Banner__text--critical","text-info-on-bg-fill":"Polaris-Banner--textInfoOnBgFill","text-info":"Polaris-Banner__text--info","icon-secondary":"Polaris-Banner__icon--secondary"},d=n(48715),p=n(44125),b=n(7293),f=n(89108);let g={success:{withinPage:{background:"bg-fill-success",text:"text-success-on-bg-fill",icon:"text-success-on-bg-fill"},withinContentContainer:{background:"bg-surface-success",text:"text-success",icon:"text-success"},icon:d.S},warning:{withinPage:{background:"bg-fill-warning",text:"text-warning-on-bg-fill",icon:"text-warning-on-bg-fill"},withinContentContainer:{background:"bg-surface-warning",text:"text-warning",icon:"text-warning"},icon:p.S},critical:{withinPage:{background:"bg-fill-critical",text:"text-critical-on-bg-fill",icon:"text-critical-on-bg-fill"},withinContentContainer:{background:"bg-surface-critical",text:"text-critical",icon:"text-critical"},icon:b.S},info:{withinPage:{background:"bg-fill-info",text:"text-info-on-bg-fill",icon:"text-info-on-bg-fill"},withinContentContainer:{background:"bg-surface-info",text:"text-info",icon:"text-info"},icon:f.S}};var x=n(57963),m=n(88470),v=n(89219),w=n(84879),h=n(33121),E=n(58330),k=n(73260),B=n(39355);let P=(0,r.forwardRef)(function(e,t){let{tone:n,stopAnnouncements:i}=e,c=(0,r.useContext)(o.O),{wrapperRef:s,handleKeyUp:d,handleBlur:p,handleMouseUp:b,shouldShowFocus:f}=function(e){let t=(0,r.useRef)(null),[n,i]=(0,r.useState)(!1);(0,r.useImperativeHandle)(e,()=>({focus(){t.current?.focus(),i(!0)}}),[]);let a=e=>{e.target===t.current&&i(!0)},o=()=>i(!1),l=e=>{e.currentTarget.blur(),i(!1)};return{wrapperRef:t,handleKeyUp:a,handleBlur:o,handleMouseUp:l,shouldShowFocus:n}}(t),g=(0,l.AK)(u.Banner,f&&u.keyFocused,c?u.withinContentContainer:u.withinPage);return r.createElement(a.D.Provider,{value:!0},r.createElement("div",{className:g,tabIndex:0,ref:s,role:"warning"===n||"critical"===n?"alert":"status","aria-live":i?"off":"polite",onMouseUp:b,onKeyUp:d,onBlur:p},r.createElement(y,e)))});function y({tone:e="info",icon:t,hideIcon:n,onDismiss:a,action:l,secondaryAction:c,title:s,children:d}){let p=(0,x.Q)(),b=(0,r.useContext)(o.O),f=!s&&!b,E=Object.keys(g).includes(e)?e:"info",k=g[E][b?"withinContentContainer":"withinPage"],B={backgroundColor:k.background,textColor:k.text,bannerTitle:s?r.createElement(m.x,{as:"h2",variant:"headingSm",breakWord:!0},s):null,bannerIcon:n?null:r.createElement("span",{className:u[k.icon]},r.createElement(v.J,{source:t??g[E].icon})),actionButtons:l||c?r.createElement(w.h,null,l&&r.createElement(h.z,Object.assign({onClick:l.onAction},l),l.content),c&&r.createElement(h.z,Object.assign({onClick:c.onAction},c),c.content)):null,dismissButton:a?r.createElement(h.z,{variant:"tertiary",icon:r.createElement("span",{className:u[f?"icon-secondary":k.icon]},r.createElement(v.J,{source:i.S})),onClick:a,accessibilityLabel:p.translate("Polaris.Banner.dismissButton")}):null};return b?r.createElement(S,B,d):f?r.createElement(C,B,d):r.createElement(_,B,d)}function _({backgroundColor:e,textColor:t,bannerTitle:n,bannerIcon:i,actionButtons:a,dismissButton:o,children:l}){let{smUp:s}=(0,c.kC)(),u=l||a;return r.createElement(E.x,{width:"100%"},r.createElement(k.E,{align:"space-between"},r.createElement(E.x,{background:e,color:t,borderStartStartRadius:s?"300":void 0,borderStartEndRadius:s?"300":void 0,borderEndStartRadius:!u&&s?"300":void 0,borderEndEndRadius:!u&&s?"300":void 0,padding:"300"},r.createElement(B.g,{align:"space-between",blockAlign:"center",gap:"200",wrap:!1},r.createElement(B.g,{gap:"100",wrap:!1},i,n),o)),u&&r.createElement(E.x,{padding:{xs:"300",md:"400"},paddingBlockStart:"300"},r.createElement(k.E,{gap:"200"},r.createElement("div",null,l),a))))}function C({backgroundColor:e,bannerIcon:t,actionButtons:n,dismissButton:i,children:a}){let[o,l]=(0,r.useState)("center"),c=(0,r.useRef)(null),d=(0,r.useRef)(null),p=(0,r.useRef)(null),b=(0,r.useCallback)(()=>{let e=c.current?.offsetHeight,t=d.current?.offsetHeight||p.current?.offsetHeight;e&&t&&(e>t?l("start"):l("center"))},[]);return(0,r.useEffect)(()=>b(),[b]),(0,s.O)("resize",b),r.createElement(E.x,{width:"100%",padding:"300",borderRadius:"300"},r.createElement(B.g,{align:"space-between",blockAlign:o,wrap:!1},r.createElement(E.x,{width:"100%"},r.createElement(B.g,{gap:"200",wrap:!1,blockAlign:o},t?r.createElement("div",{ref:d},r.createElement(E.x,{background:e,borderRadius:"200",padding:"100"},t)):null,r.createElement(E.x,{ref:c,width:"100%"},r.createElement(k.E,{gap:"200"},r.createElement("div",null,a),n)))),r.createElement("div",{ref:p,className:u.DismissIcon},i)))}function S({backgroundColor:e,textColor:t,bannerTitle:n,bannerIcon:i,actionButtons:a,dismissButton:o,children:l}){return r.createElement(E.x,{width:"100%",background:e,padding:"200",borderRadius:"200",color:t},r.createElement(B.g,{align:"space-between",blockAlign:"start",wrap:!1,gap:"200"},r.createElement(B.g,{gap:"150",wrap:!1},i,r.createElement(E.x,{width:"100%"},r.createElement(k.E,{gap:"200"},r.createElement(k.E,{gap:"050"},n,r.createElement("div",null,l)),a))),o))}},73260:function(e,t,n){"use strict";n.d(t,{E:function(){return o}});var r=n(27378),i=n(39627),a={BlockStack:"Polaris-BlockStack",listReset:"Polaris-BlockStack--listReset",fieldsetReset:"Polaris-BlockStack--fieldsetReset"};let o=({as:e="div",children:t,align:n,inlineAlign:o,gap:l,id:c,reverseOrder:s=!1,...u})=>{let d=(0,i.AK)(a.BlockStack,("ul"===e||"ol"===e)&&a.listReset,"fieldset"===e&&a.fieldsetReset),p={"--pc-block-stack-align":n?`${n}`:null,"--pc-block-stack-inline-align":o?`${o}`:null,"--pc-block-stack-order":s?"column-reverse":"column",...(0,i.jD)("block-stack","gap","space",l)};return r.createElement(e,{className:d,style:(0,i.vW)(p),...u},t)}},58330:function(e,t,n){"use strict";n.d(t,{x:function(){return o}});var r=n(27378),i=n(39627),a={listReset:"Polaris-Box--listReset",Box:"Polaris-Box",visuallyHidden:"Polaris-Box--visuallyHidden",printHidden:"Polaris-Box--printHidden"};let o=(0,r.forwardRef)(({as:e="div",background:t,borderColor:n,borderStyle:o,borderWidth:l,borderBlockStartWidth:c,borderBlockEndWidth:s,borderInlineStartWidth:u,borderInlineEndWidth:d,borderRadius:p,borderEndStartRadius:b,borderEndEndRadius:f,borderStartStartRadius:g,borderStartEndRadius:x,children:m,color:v,id:w,minHeight:h,minWidth:E,maxWidth:k,overflowX:B,overflowY:P,outlineColor:y,outlineStyle:_,outlineWidth:C,padding:S,paddingBlockStart:I,paddingBlockEnd:R,paddingInlineStart:$,paddingInlineEnd:O,role:N,shadow:A,tabIndex:L,width:j,printHidden:D,visuallyHidden:G,position:F,insetBlockStart:H,insetBlockEnd:W,insetInlineStart:T,insetInlineEnd:K,zIndex:z,opacity:M,...V},Z)=>{let J={"--pc-box-color":v?`var(--p-color-${v})`:void 0,"--pc-box-background":t?`var(--p-color-${t})`:void 0,"--pc-box-border-color":n?"transparent"===n?"transparent":`var(--p-color-${n})`:void 0,"--pc-box-border-style":o||(n||l||c||s||u||d?"solid":void 0),"--pc-box-border-radius":p?`var(--p-border-radius-${p})`:void 0,"--pc-box-border-end-start-radius":b?`var(--p-border-radius-${b})`:void 0,"--pc-box-border-end-end-radius":f?`var(--p-border-radius-${f})`:void 0,"--pc-box-border-start-start-radius":g?`var(--p-border-radius-${g})`:void 0,"--pc-box-border-start-end-radius":x?`var(--p-border-radius-${x})`:void 0,"--pc-box-border-width":l?`var(--p-border-width-${l})`:void 0,"--pc-box-border-block-start-width":c?`var(--p-border-width-${c})`:void 0,"--pc-box-border-block-end-width":s?`var(--p-border-width-${s})`:void 0,"--pc-box-border-inline-start-width":u?`var(--p-border-width-${u})`:void 0,"--pc-box-border-inline-end-width":d?`var(--p-border-width-${d})`:void 0,"--pc-box-min-height":h,"--pc-box-min-width":E,"--pc-box-max-width":k,"--pc-box-outline-color":y?`var(--p-color-${y})`:void 0,"--pc-box-outline-style":_||(y||C?"solid":void 0),"--pc-box-outline-width":C?`var(--p-border-width-${C})`:void 0,"--pc-box-overflow-x":B,"--pc-box-overflow-y":P,...(0,i.jD)("box","padding-block-end","space",R||S),...(0,i.jD)("box","padding-block-start","space",I||S),...(0,i.jD)("box","padding-inline-start","space",$||S),...(0,i.jD)("box","padding-inline-end","space",O||S),"--pc-box-shadow":A?`var(--p-shadow-${A})`:void 0,"--pc-box-width":j,position:F,"--pc-box-inset-block-start":H?`var(--p-space-${H})`:void 0,"--pc-box-inset-block-end":W?`var(--p-space-${W})`:void 0,"--pc-box-inset-inline-start":T?`var(--p-space-${T})`:void 0,"--pc-box-inset-inline-end":K?`var(--p-space-${K})`:void 0,zIndex:z,opacity:M},U=(0,i.AK)(a.Box,G&&a.visuallyHidden,D&&a.printHidden,"ul"===e&&a.listReset);return r.createElement(e,{className:U,id:w,ref:Z,style:(0,i.vW)(J),role:N,tabIndex:L,...V},m)});o.displayName="Box"},84879:function(e,t,n){"use strict";n.d(t,{h:function(){return s}});var r=n(27378),i=n(39627),a=n(26482),o={ButtonGroup:"Polaris-ButtonGroup",Item:"Polaris-ButtonGroup__Item","Item-plain":"Polaris-ButtonGroup__Item--plain",variantSegmented:"Polaris-ButtonGroup--variantSegmented","Item-focused":"Polaris-ButtonGroup__Item--focused",fullWidth:"Polaris-ButtonGroup--fullWidth",extraTight:"Polaris-ButtonGroup--extraTight",tight:"Polaris-ButtonGroup--tight",loose:"Polaris-ButtonGroup--loose",noWrap:"Polaris-ButtonGroup--noWrap"},l=n(95336);function c({button:e}){let{value:t,setTrue:n,setFalse:a}=(0,l.O)(!1),c=(0,i.AK)(o.Item,t&&o["Item-focused"],"plain"===e.props.variant&&o["Item-plain"]);return r.createElement("div",{className:c,onFocus:n,onBlur:a},e)}function s({children:e,gap:t,variant:n,fullWidth:l,connectedTop:s,noWrap:u}){let d=(0,i.AK)(o.ButtonGroup,t&&o[t],n&&o[(0,i.OZ)("variant",n)],l&&o.fullWidth,u&&o.noWrap),p=(0,a.gD)(e).map((e,t)=>r.createElement(c,{button:e,key:t}));return r.createElement("div",{className:d,"data-buttongroup-variant":n,"data-buttongroup-connected-top":s,"data-buttongroup-full-width":l,"data-buttongroup-no-wrap":u},p)}},39355:function(e,t,n){"use strict";n.d(t,{g:function(){return o}});var r=n(27378),i=n(39627),a={InlineStack:"Polaris-InlineStack"};let o=function({align:e,blockAlign:t,gap:n,wrap:o=!0,children:l}){let c={"--pc-inline-stack-align":e,"--pc-inline-stack-block-align":t,"--pc-inline-stack-wrap":o?"wrap":"nowrap",...(0,i.jD)("inline-stack","gap","space",n)};return r.createElement("div",{className:a.InlineStack,style:c},l)}},21248:function(e,t,n){"use strict";n.d(t,{a:function(){return o}});var r=n(27378),i=n(39627),a={List:"Polaris-List",typeNumber:"Polaris-List--typeNumber",Item:"Polaris-List__Item",spacingLoose:"Polaris-List--spacingLoose"};let o=function({children:e,gap:t="loose",type:n="bullet"}){let o=(0,i.AK)(a.List,t&&a[(0,i.OZ)("spacing",t)],n&&a[(0,i.OZ)("type",n)]);return r.createElement("bullet"===n?"ul":"ol",{className:o},e)};o.Item=function({children:e}){return r.createElement("li",{className:a.Item},e)}},53700:function(e,t,n){"use strict";n.d(t,{D:function(){return i}});var r=n(27378);let i=(0,r.createContext)(!1)},26482:function(e,t,n){"use strict";n.d(t,{M2:function(){return c},Mc:function(){return o},Vr:function(){return s},gD:function(){return l},oh:function(){return i}});var r=n(27378);function i(e,t,n){return null==e?null:o(e,t)?e:r.createElement(t,n,e)}let a=(e,t)=>e===t;function o(e,t){if(null==e||!(0,r.isValidElement)(e)||"string"==typeof e.type)return!1;let{type:n}=e,i=e.props?.__type__,o=i||n,l=Array.isArray(t)?t:[t];return l.some(e=>"string"!=typeof o&&a(e,o))}function l(e,t=()=>!0){return r.Children.toArray(e).filter(e=>(0,r.isValidElement)(e)&&t(e))}function c({condition:e,wrapper:t,children:n}){return e?t(n):n}function s({condition:e,children:t}){return e?t:null}},63671:function(e,t,n){"use strict";n.d(t,{O:function(){return a}});var r=n(27378),i=n(46381);function a(e,t,n,a){let o=(0,r.useRef)(t),l=(0,r.useRef)(a);(0,i.L)(()=>{o.current=t},[t]),(0,i.L)(()=>{l.current=a},[a]),(0,r.useEffect)(()=>{let t;if(!("string"==typeof e&&null!==n))return;if(void 0===n)t=window;else if("current"in n){if(null===n.current)return;t=n.current}else t=n;let r=l.current,i=e=>o.current(e);return t.addEventListener(e,i,r),()=>{t.removeEventListener(e,i,r)}},[e,n])}},95336:function(e,t,n){"use strict";n.d(t,{O:function(){return i}});var r=n(27378);function i(e){let[t,n]=(0,r.useState)(e);return{value:t,toggle:(0,r.useCallback)(()=>n(e=>!e),[]),setTrue:(0,r.useCallback)(()=>n(!0),[]),setFalse:(0,r.useCallback)(()=>n(!1),[])}}},10952:function(e,t,n){"use strict";n.d(t,{O:function(){return i}});var r=n(27378);let i=(0,r.createContext)(!1)}},function(e){e.O(0,[4515,3121,9774,2888,179],function(){return e(e.s=59114)}),_N_E=e.O()}]);