(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6729],{44177:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/banner-informational",function(){return n(62238)}])},62238:function(e,t,n){"use strict";n.r(t);var r=n(24246),i=n(18350);n(27378);var o=n(64515);t.default=(0,o.y)(function(){return(0,r.jsx)(i.jL,{title:"USPS has updated their rates",action:{content:"Update rates",url:""},secondaryAction:{content:"Learn more"},tone:"info",onDismiss(){},children:(0,r.jsx)("p",{children:"Make sure you know how these changes affect your store."})})})},18350:function(e,t,n){"use strict";n.d(t,{jL:function(){return P}});var r=n(27378),i=n(45422),o=n(53700),a=n(10952),c=n(39627),l=n(99127),s=n(63671),u={Banner:"Polaris-Banner",keyFocused:"Polaris-Banner--keyFocused",withinContentContainer:"Polaris-Banner--withinContentContainer",withinPage:"Polaris-Banner--withinPage",DismissIcon:"Polaris-Banner__DismissIcon","text-success-on-bg-fill":"Polaris-Banner--textSuccessOnBgFill","text-success":"Polaris-Banner__text--success","text-warning-on-bg-fill":"Polaris-Banner--textWarningOnBgFill","text-warning":"Polaris-Banner__text--warning","text-critical-on-bg-fill":"Polaris-Banner--textCriticalOnBgFill","text-critical":"Polaris-Banner__text--critical","text-info-on-bg-fill":"Polaris-Banner--textInfoOnBgFill","text-info":"Polaris-Banner__text--info","icon-secondary":"Polaris-Banner__icon--secondary"},d=n(48715),p=n(44125),b=n(7293),f=n(89108);let g={success:{withinPage:{background:"bg-fill-success",text:"text-success-on-bg-fill",icon:"text-success-on-bg-fill"},withinContentContainer:{background:"bg-surface-success",text:"text-success",icon:"text-success"},icon:d.S},warning:{withinPage:{background:"bg-fill-warning",text:"text-warning-on-bg-fill",icon:"text-warning-on-bg-fill"},withinContentContainer:{background:"bg-surface-warning",text:"text-warning",icon:"text-warning"},icon:p.S},critical:{withinPage:{background:"bg-fill-critical",text:"text-critical-on-bg-fill",icon:"text-critical-on-bg-fill"},withinContentContainer:{background:"bg-surface-critical",text:"text-critical",icon:"text-critical"},icon:b.S},info:{withinPage:{background:"bg-fill-info",text:"text-info-on-bg-fill",icon:"text-info-on-bg-fill"},withinContentContainer:{background:"bg-surface-info",text:"text-info",icon:"text-info"},icon:f.S}};var x=n(57963),v=n(88470),m=n(89219),w=n(84879),k=n(33121),h=n(58330),E=n(73260),B=n(39355);let P=(0,r.forwardRef)(function(e,t){let{tone:n,stopAnnouncements:i}=e,l=(0,r.useContext)(a.O),{wrapperRef:s,handleKeyUp:d,handleBlur:p,handleMouseUp:b,shouldShowFocus:f}=function(e){let t=(0,r.useRef)(null),[n,i]=(0,r.useState)(!1);(0,r.useImperativeHandle)(e,()=>({focus(){t.current?.focus(),i(!0)}}),[]);let o=e=>{e.target===t.current&&i(!0)},a=()=>i(!1),c=e=>{e.currentTarget.blur(),i(!1)};return{wrapperRef:t,handleKeyUp:o,handleBlur:a,handleMouseUp:c,shouldShowFocus:n}}(t),g=(0,c.AK)(u.Banner,f&&u.keyFocused,l?u.withinContentContainer:u.withinPage);return r.createElement(o.D.Provider,{value:!0},r.createElement("div",{className:g,tabIndex:0,ref:s,role:"warning"===n||"critical"===n?"alert":"status","aria-live":i?"off":"polite",onMouseUp:b,onKeyUp:d,onBlur:p},r.createElement(y,e)))});function y({tone:e="info",icon:t,hideIcon:n,onDismiss:o,action:c,secondaryAction:l,title:s,children:d}){let p=(0,x.Q)(),b=(0,r.useContext)(a.O),f=!s&&!b,h=Object.keys(g).includes(e)?e:"info",E=g[h][b?"withinContentContainer":"withinPage"],B={backgroundColor:E.background,textColor:E.text,bannerTitle:s?r.createElement(v.x,{as:"h2",variant:"headingSm",breakWord:!0},s):null,bannerIcon:n?null:r.createElement("span",{className:u[E.icon]},r.createElement(m.J,{source:t??g[h].icon})),actionButtons:c||l?r.createElement(w.h,null,c&&r.createElement(k.z,Object.assign({onClick:c.onAction},c),c.content),l&&r.createElement(k.z,Object.assign({onClick:l.onAction},l),l.content)):null,dismissButton:o?r.createElement(k.z,{variant:"tertiary",icon:r.createElement("span",{className:u[f?"icon-secondary":E.icon]},r.createElement(m.J,{source:i.S})),onClick:o,accessibilityLabel:p.translate("Polaris.Banner.dismissButton")}):null};return b?r.createElement(S,B,d):f?r.createElement(_,B,d):r.createElement(C,B,d)}function C({backgroundColor:e,textColor:t,bannerTitle:n,bannerIcon:i,actionButtons:o,dismissButton:a,children:c}){let{smUp:s}=(0,l.kC)(),u=c||o;return r.createElement(h.x,{width:"100%"},r.createElement(E.E,{align:"space-between"},r.createElement(h.x,{background:e,color:t,borderStartStartRadius:s?"300":void 0,borderStartEndRadius:s?"300":void 0,borderEndStartRadius:!u&&s?"300":void 0,borderEndEndRadius:!u&&s?"300":void 0,padding:"300"},r.createElement(B.g,{align:"space-between",blockAlign:"center",gap:"200",wrap:!1},r.createElement(B.g,{gap:"100",wrap:!1},i,n),a)),u&&r.createElement(h.x,{padding:{xs:"300",md:"400"},paddingBlockStart:"300"},r.createElement(E.E,{gap:"200"},r.createElement("div",null,c),o))))}function _({backgroundColor:e,bannerIcon:t,actionButtons:n,dismissButton:i,children:o}){let[a,c]=(0,r.useState)("center"),l=(0,r.useRef)(null),d=(0,r.useRef)(null),p=(0,r.useRef)(null),b=(0,r.useCallback)(()=>{let e=l.current?.offsetHeight,t=d.current?.offsetHeight||p.current?.offsetHeight;e&&t&&(e>t?c("start"):c("center"))},[]);return(0,r.useEffect)(()=>b(),[b]),(0,s.O)("resize",b),r.createElement(h.x,{width:"100%",padding:"300",borderRadius:"300"},r.createElement(B.g,{align:"space-between",blockAlign:a,wrap:!1},r.createElement(h.x,{width:"100%"},r.createElement(B.g,{gap:"200",wrap:!1,blockAlign:a},t?r.createElement("div",{ref:d},r.createElement(h.x,{background:e,borderRadius:"200",padding:"100"},t)):null,r.createElement(h.x,{ref:l,width:"100%"},r.createElement(E.E,{gap:"200"},r.createElement("div",null,o),n)))),r.createElement("div",{ref:p,className:u.DismissIcon},i)))}function S({backgroundColor:e,textColor:t,bannerTitle:n,bannerIcon:i,actionButtons:o,dismissButton:a,children:c}){return r.createElement(h.x,{width:"100%",background:e,padding:"200",borderRadius:"200",color:t},r.createElement(B.g,{align:"space-between",blockAlign:"start",wrap:!1,gap:"200"},r.createElement(B.g,{gap:"150",wrap:!1},i,r.createElement(h.x,{width:"100%"},r.createElement(E.E,{gap:"200"},r.createElement(E.E,{gap:"050"},n,r.createElement("div",null,c)),o))),a))}},73260:function(e,t,n){"use strict";n.d(t,{E:function(){return a}});var r=n(27378),i=n(39627),o={BlockStack:"Polaris-BlockStack",listReset:"Polaris-BlockStack--listReset",fieldsetReset:"Polaris-BlockStack--fieldsetReset"};let a=({as:e="div",children:t,align:n,inlineAlign:a,gap:c,id:l,reverseOrder:s=!1,...u})=>{let d=(0,i.AK)(o.BlockStack,("ul"===e||"ol"===e)&&o.listReset,"fieldset"===e&&o.fieldsetReset),p={"--pc-block-stack-align":n?`${n}`:null,"--pc-block-stack-inline-align":a?`${a}`:null,"--pc-block-stack-order":s?"column-reverse":"column",...(0,i.jD)("block-stack","gap","space",c)};return r.createElement(e,{className:d,style:(0,i.vW)(p),...u},t)}},58330:function(e,t,n){"use strict";n.d(t,{x:function(){return a}});var r=n(27378),i=n(39627),o={listReset:"Polaris-Box--listReset",Box:"Polaris-Box",visuallyHidden:"Polaris-Box--visuallyHidden",printHidden:"Polaris-Box--printHidden"};let a=(0,r.forwardRef)(({as:e="div",background:t,borderColor:n,borderStyle:a,borderWidth:c,borderBlockStartWidth:l,borderBlockEndWidth:s,borderInlineStartWidth:u,borderInlineEndWidth:d,borderRadius:p,borderEndStartRadius:b,borderEndEndRadius:f,borderStartStartRadius:g,borderStartEndRadius:x,children:v,color:m,id:w,minHeight:k,minWidth:h,maxWidth:E,overflowX:B,overflowY:P,outlineColor:y,outlineStyle:C,outlineWidth:_,padding:S,paddingBlockStart:R,paddingBlockEnd:$,paddingInlineStart:I,paddingInlineEnd:O,role:A,shadow:D,tabIndex:j,width:N,printHidden:G,visuallyHidden:F,position:H,insetBlockStart:W,insetBlockEnd:L,insetInlineStart:T,insetInlineEnd:K,zIndex:z,opacity:M,...U},V)=>{let J={"--pc-box-color":m?`var(--p-color-${m})`:void 0,"--pc-box-background":t?`var(--p-color-${t})`:void 0,"--pc-box-border-color":n?"transparent"===n?"transparent":`var(--p-color-${n})`:void 0,"--pc-box-border-style":a||(n||c||l||s||u||d?"solid":void 0),"--pc-box-border-radius":p?`var(--p-border-radius-${p})`:void 0,"--pc-box-border-end-start-radius":b?`var(--p-border-radius-${b})`:void 0,"--pc-box-border-end-end-radius":f?`var(--p-border-radius-${f})`:void 0,"--pc-box-border-start-start-radius":g?`var(--p-border-radius-${g})`:void 0,"--pc-box-border-start-end-radius":x?`var(--p-border-radius-${x})`:void 0,"--pc-box-border-width":c?`var(--p-border-width-${c})`:void 0,"--pc-box-border-block-start-width":l?`var(--p-border-width-${l})`:void 0,"--pc-box-border-block-end-width":s?`var(--p-border-width-${s})`:void 0,"--pc-box-border-inline-start-width":u?`var(--p-border-width-${u})`:void 0,"--pc-box-border-inline-end-width":d?`var(--p-border-width-${d})`:void 0,"--pc-box-min-height":k,"--pc-box-min-width":h,"--pc-box-max-width":E,"--pc-box-outline-color":y?`var(--p-color-${y})`:void 0,"--pc-box-outline-style":C||(y||_?"solid":void 0),"--pc-box-outline-width":_?`var(--p-border-width-${_})`:void 0,"--pc-box-overflow-x":B,"--pc-box-overflow-y":P,...(0,i.jD)("box","padding-block-end","space",$||S),...(0,i.jD)("box","padding-block-start","space",R||S),...(0,i.jD)("box","padding-inline-start","space",I||S),...(0,i.jD)("box","padding-inline-end","space",O||S),"--pc-box-shadow":D?`var(--p-shadow-${D})`:void 0,"--pc-box-width":N,position:H,"--pc-box-inset-block-start":W?`var(--p-space-${W})`:void 0,"--pc-box-inset-block-end":L?`var(--p-space-${L})`:void 0,"--pc-box-inset-inline-start":T?`var(--p-space-${T})`:void 0,"--pc-box-inset-inline-end":K?`var(--p-space-${K})`:void 0,zIndex:z,opacity:M},X=(0,i.AK)(o.Box,F&&o.visuallyHidden,G&&o.printHidden,"ul"===e&&o.listReset);return r.createElement(e,{className:X,id:w,ref:V,style:(0,i.vW)(J),role:A,tabIndex:j,...U},v)});a.displayName="Box"},84879:function(e,t,n){"use strict";n.d(t,{h:function(){return s}});var r=n(27378),i=n(39627),o=n(26482),a={ButtonGroup:"Polaris-ButtonGroup",Item:"Polaris-ButtonGroup__Item","Item-plain":"Polaris-ButtonGroup__Item--plain",variantSegmented:"Polaris-ButtonGroup--variantSegmented","Item-focused":"Polaris-ButtonGroup__Item--focused",fullWidth:"Polaris-ButtonGroup--fullWidth",extraTight:"Polaris-ButtonGroup--extraTight",tight:"Polaris-ButtonGroup--tight",loose:"Polaris-ButtonGroup--loose",noWrap:"Polaris-ButtonGroup--noWrap"},c=n(95336);function l({button:e}){let{value:t,setTrue:n,setFalse:o}=(0,c.O)(!1),l=(0,i.AK)(a.Item,t&&a["Item-focused"],"plain"===e.props.variant&&a["Item-plain"]);return r.createElement("div",{className:l,onFocus:n,onBlur:o},e)}function s({children:e,gap:t,variant:n,fullWidth:c,connectedTop:s,noWrap:u}){let d=(0,i.AK)(a.ButtonGroup,t&&a[t],n&&a[(0,i.OZ)("variant",n)],c&&a.fullWidth,u&&a.noWrap),p=(0,o.gD)(e).map((e,t)=>r.createElement(l,{button:e,key:t}));return r.createElement("div",{className:d,"data-buttongroup-variant":n,"data-buttongroup-connected-top":s,"data-buttongroup-full-width":c,"data-buttongroup-no-wrap":u},p)}},39355:function(e,t,n){"use strict";n.d(t,{g:function(){return a}});var r=n(27378),i=n(39627),o={InlineStack:"Polaris-InlineStack"};let a=function({align:e,blockAlign:t,gap:n,wrap:a=!0,children:c}){let l={"--pc-inline-stack-align":e,"--pc-inline-stack-block-align":t,"--pc-inline-stack-wrap":a?"wrap":"nowrap",...(0,i.jD)("inline-stack","gap","space",n)};return r.createElement("div",{className:o.InlineStack,style:l},c)}},53700:function(e,t,n){"use strict";n.d(t,{D:function(){return i}});var r=n(27378);let i=(0,r.createContext)(!1)},26482:function(e,t,n){"use strict";n.d(t,{M2:function(){return l},Mc:function(){return a},Vr:function(){return s},gD:function(){return c},oh:function(){return i}});var r=n(27378);function i(e,t,n){return null==e?null:a(e,t)?e:r.createElement(t,n,e)}let o=(e,t)=>e===t;function a(e,t){if(null==e||!(0,r.isValidElement)(e)||"string"==typeof e.type)return!1;let{type:n}=e,i=e.props?.__type__,a=i||n,c=Array.isArray(t)?t:[t];return c.some(e=>"string"!=typeof a&&o(e,a))}function c(e,t=()=>!0){return r.Children.toArray(e).filter(e=>(0,r.isValidElement)(e)&&t(e))}function l({condition:e,wrapper:t,children:n}){return e?t(n):n}function s({condition:e,children:t}){return e?t:null}},63671:function(e,t,n){"use strict";n.d(t,{O:function(){return o}});var r=n(27378),i=n(46381);function o(e,t,n,o){let a=(0,r.useRef)(t),c=(0,r.useRef)(o);(0,i.L)(()=>{a.current=t},[t]),(0,i.L)(()=>{c.current=o},[o]),(0,r.useEffect)(()=>{let t;if(!("string"==typeof e&&null!==n))return;if(void 0===n)t=window;else if("current"in n){if(null===n.current)return;t=n.current}else t=n;let r=c.current,i=e=>a.current(e);return t.addEventListener(e,i,r),()=>{t.removeEventListener(e,i,r)}},[e,n])}},95336:function(e,t,n){"use strict";n.d(t,{O:function(){return i}});var r=n(27378);function i(e){let[t,n]=(0,r.useState)(e);return{value:t,toggle:(0,r.useCallback)(()=>n(e=>!e),[]),setTrue:(0,r.useCallback)(()=>n(!0),[]),setFalse:(0,r.useCallback)(()=>n(!1),[])}}},10952:function(e,t,n){"use strict";n.d(t,{O:function(){return i}});var r=n(27378);let i=(0,r.createContext)(!1)}},function(e){e.O(0,[4515,3121,9774,2888,179],function(){return e(e.s=44177)}),_N_E=e.O()}]);