(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7970],{15959:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/drop-zone-accepts-only-svg-files",function(){return n(92092)}])},92092:function(e,t,n){"use strict";n.r(t);var r=n(24246),a=n(97661),i=n(74906),l=n(88470),o=n(18350),s=n(21248),c=n(31011),u=n(27378),d=n(64515);t.default=(0,d.y)(function(){let[e,t]=(0,u.useState)([]),[n,d]=(0,u.useState)([]),p=n.length>0,g=(0,u.useCallback)((e,n,r)=>{t(e=>[...e,...n]),d(r)},[]),m=e.length>0&&(0,r.jsx)(a.D,{vertical:!0,children:e.map((e,t)=>(0,r.jsxs)(a.D,{alignment:"center",children:[(0,r.jsx)(i.p,{size:"small",alt:e.name,source:window.URL.createObjectURL(e)}),(0,r.jsxs)("div",{children:[e.name," ",(0,r.jsxs)(l.x,{variant:"bodySm",as:"p",children:[e.size," bytes"]})]})]},t))}),f=p&&(0,r.jsx)(o.jL,{title:"The following images couldn’t be uploaded:",tone:"critical",children:(0,r.jsx)(s.a,{type:"bullet",children:n.map((e,t)=>(0,r.jsx)(s.a.Item,{children:'"'.concat(e.name,'" is not supported. File type must be .svg.')},t))})});return(0,r.jsxs)(a.D,{vertical:!0,children:[f,(0,r.jsx)(c.r,{accept:"image/svg+xml",type:"image",errorOverlayText:"File type must be .svg",onDrop:g,children:m})]})})},18350:function(e,t,n){"use strict";n.d(t,{jL:function(){return w}});var r=n(27378),a=n(45422),i=n(53700),l=n(10952),o=n(39627),s=n(99127),c=n(63671),u={Banner:"Polaris-Banner",keyFocused:"Polaris-Banner--keyFocused",withinContentContainer:"Polaris-Banner--withinContentContainer",withinPage:"Polaris-Banner--withinPage",DismissIcon:"Polaris-Banner__DismissIcon","text-success-on-bg-fill":"Polaris-Banner--textSuccessOnBgFill","text-success":"Polaris-Banner__text--success","text-warning-on-bg-fill":"Polaris-Banner--textWarningOnBgFill","text-warning":"Polaris-Banner__text--warning","text-critical-on-bg-fill":"Polaris-Banner--textCriticalOnBgFill","text-critical":"Polaris-Banner__text--critical","text-info-on-bg-fill":"Polaris-Banner--textInfoOnBgFill","text-info":"Polaris-Banner__text--info","icon-secondary":"Polaris-Banner__icon--secondary"},d=n(48715),p=n(44125),g=n(7293),m=n(89108);let f={success:{withinPage:{background:"bg-fill-success",text:"text-success-on-bg-fill",icon:"text-success-on-bg-fill"},withinContentContainer:{background:"bg-surface-success",text:"text-success",icon:"text-success"},icon:d.S},warning:{withinPage:{background:"bg-fill-warning",text:"text-warning-on-bg-fill",icon:"text-warning-on-bg-fill"},withinContentContainer:{background:"bg-surface-warning",text:"text-warning",icon:"text-warning"},icon:p.S},critical:{withinPage:{background:"bg-fill-critical",text:"text-critical-on-bg-fill",icon:"text-critical-on-bg-fill"},withinContentContainer:{background:"bg-surface-critical",text:"text-critical",icon:"text-critical"},icon:g.S},info:{withinPage:{background:"bg-fill-info",text:"text-info-on-bg-fill",icon:"text-info-on-bg-fill"},withinContentContainer:{background:"bg-surface-info",text:"text-info",icon:"text-info"},icon:m.S}};var b=n(57963),v=n(88470),x=n(89219),E=n(84879),h=n(33121),P=n(58330),k=n(73260),y=n(39355);let w=(0,r.forwardRef)(function(e,t){let{tone:n,stopAnnouncements:a}=e,s=(0,r.useContext)(l.O),{wrapperRef:c,handleKeyUp:d,handleBlur:p,handleMouseUp:g,shouldShowFocus:m}=function(e){let t=(0,r.useRef)(null),[n,a]=(0,r.useState)(!1);(0,r.useImperativeHandle)(e,()=>({focus(){t.current?.focus(),a(!0)}}),[]);let i=e=>{e.target===t.current&&a(!0)},l=()=>a(!1),o=e=>{e.currentTarget.blur(),a(!1)};return{wrapperRef:t,handleKeyUp:i,handleBlur:l,handleMouseUp:o,shouldShowFocus:n}}(t),f=(0,o.AK)(u.Banner,m&&u.keyFocused,s?u.withinContentContainer:u.withinPage);return r.createElement(i.D.Provider,{value:!0},r.createElement("div",{className:f,tabIndex:0,ref:c,role:"warning"===n||"critical"===n?"alert":"status","aria-live":a?"off":"polite",onMouseUp:g,onKeyUp:d,onBlur:p},r.createElement(L,e)))});function L({tone:e="info",icon:t,hideIcon:n,onDismiss:i,action:o,secondaryAction:s,title:c,children:d}){let p=(0,b.Q)(),g=(0,r.useContext)(l.O),m=!c&&!g,P=Object.keys(f).includes(e)?e:"info",k=f[P][g?"withinContentContainer":"withinPage"],y={backgroundColor:k.background,textColor:k.text,bannerTitle:c?r.createElement(v.x,{as:"h2",variant:"headingSm",breakWord:!0},c):null,bannerIcon:n?null:r.createElement("span",{className:u[k.icon]},r.createElement(x.J,{source:t??f[P].icon})),actionButtons:o||s?r.createElement(E.h,null,o&&r.createElement(h.z,Object.assign({onClick:o.onAction},o),o.content),s&&r.createElement(h.z,Object.assign({onClick:s.onAction},s),s.content)):null,dismissButton:i?r.createElement(h.z,{variant:"tertiary",icon:r.createElement("span",{className:u[m?"icon-secondary":k.icon]},r.createElement(x.J,{source:a.S})),onClick:i,accessibilityLabel:p.translate("Polaris.Banner.dismissButton")}):null};return g?r.createElement(C,y,d):m?r.createElement(_,y,d):r.createElement(S,y,d)}function S({backgroundColor:e,textColor:t,bannerTitle:n,bannerIcon:a,actionButtons:i,dismissButton:l,children:o}){let{smUp:c}=(0,s.kC)(),u=o||i;return r.createElement(P.x,{width:"100%"},r.createElement(k.E,{align:"space-between"},r.createElement(P.x,{background:e,color:t,borderStartStartRadius:c?"300":void 0,borderStartEndRadius:c?"300":void 0,borderEndStartRadius:!u&&c?"300":void 0,borderEndEndRadius:!u&&c?"300":void 0,padding:"300"},r.createElement(y.g,{align:"space-between",blockAlign:"center",gap:"200",wrap:!1},r.createElement(y.g,{gap:"100",wrap:!1},a,n),l)),u&&r.createElement(P.x,{padding:{xs:"300",md:"400"},paddingBlockStart:"300"},r.createElement(k.E,{gap:"200"},r.createElement("div",null,o),i))))}function _({backgroundColor:e,bannerIcon:t,actionButtons:n,dismissButton:a,children:i}){let[l,o]=(0,r.useState)("center"),s=(0,r.useRef)(null),d=(0,r.useRef)(null),p=(0,r.useRef)(null),g=(0,r.useCallback)(()=>{let e=s.current?.offsetHeight,t=d.current?.offsetHeight||p.current?.offsetHeight;e&&t&&(e>t?o("start"):o("center"))},[]);return(0,r.useEffect)(()=>g(),[g]),(0,c.O)("resize",g),r.createElement(P.x,{width:"100%",padding:"300",borderRadius:"300"},r.createElement(y.g,{align:"space-between",blockAlign:l,wrap:!1},r.createElement(P.x,{width:"100%"},r.createElement(y.g,{gap:"200",wrap:!1,blockAlign:l},t?r.createElement("div",{ref:d},r.createElement(P.x,{background:e,borderRadius:"200",padding:"100"},t)):null,r.createElement(P.x,{ref:s,width:"100%"},r.createElement(k.E,{gap:"200"},r.createElement("div",null,i),n)))),r.createElement("div",{ref:p,className:u.DismissIcon},a)))}function C({backgroundColor:e,textColor:t,bannerTitle:n,bannerIcon:a,actionButtons:i,dismissButton:l,children:o}){return r.createElement(P.x,{width:"100%",background:e,padding:"200",borderRadius:"200",color:t},r.createElement(y.g,{align:"space-between",blockAlign:"start",wrap:!1,gap:"200"},r.createElement(y.g,{gap:"150",wrap:!1},a,r.createElement(P.x,{width:"100%"},r.createElement(k.E,{gap:"200"},r.createElement(k.E,{gap:"050"},n,r.createElement("div",null,o)),i))),l))}},73260:function(e,t,n){"use strict";n.d(t,{E:function(){return l}});var r=n(27378),a=n(39627),i={BlockStack:"Polaris-BlockStack",listReset:"Polaris-BlockStack--listReset",fieldsetReset:"Polaris-BlockStack--fieldsetReset"};let l=({as:e="div",children:t,align:n,inlineAlign:l,gap:o,id:s,reverseOrder:c=!1,...u})=>{let d=(0,a.AK)(i.BlockStack,("ul"===e||"ol"===e)&&i.listReset,"fieldset"===e&&i.fieldsetReset),p={"--pc-block-stack-align":n?`${n}`:null,"--pc-block-stack-inline-align":l?`${l}`:null,"--pc-block-stack-order":c?"column-reverse":"column",...(0,a.jD)("block-stack","gap","space",o)};return r.createElement(e,{className:d,style:(0,a.vW)(p),...u},t)}},58330:function(e,t,n){"use strict";n.d(t,{x:function(){return l}});var r=n(27378),a=n(39627),i={listReset:"Polaris-Box--listReset",Box:"Polaris-Box",visuallyHidden:"Polaris-Box--visuallyHidden",printHidden:"Polaris-Box--printHidden"};let l=(0,r.forwardRef)(({as:e="div",background:t,borderColor:n,borderStyle:l,borderWidth:o,borderBlockStartWidth:s,borderBlockEndWidth:c,borderInlineStartWidth:u,borderInlineEndWidth:d,borderRadius:p,borderEndStartRadius:g,borderEndEndRadius:m,borderStartStartRadius:f,borderStartEndRadius:b,children:v,color:x,id:E,minHeight:h,minWidth:P,maxWidth:k,overflowX:y,overflowY:w,outlineColor:L,outlineStyle:S,outlineWidth:_,padding:C,paddingBlockStart:B,paddingBlockEnd:D,paddingInlineStart:O,paddingInlineEnd:A,role:I,shadow:T,tabIndex:N,width:$,printHidden:Z,visuallyHidden:R,position:F,insetBlockStart:j,insetBlockEnd:z,insetInlineStart:W,insetInlineEnd:U,zIndex:K,opacity:H,...G},M)=>{let J={"--pc-box-color":x?`var(--p-color-${x})`:void 0,"--pc-box-background":t?`var(--p-color-${t})`:void 0,"--pc-box-border-color":n?"transparent"===n?"transparent":`var(--p-color-${n})`:void 0,"--pc-box-border-style":l||(n||o||s||c||u||d?"solid":void 0),"--pc-box-border-radius":p?`var(--p-border-radius-${p})`:void 0,"--pc-box-border-end-start-radius":g?`var(--p-border-radius-${g})`:void 0,"--pc-box-border-end-end-radius":m?`var(--p-border-radius-${m})`:void 0,"--pc-box-border-start-start-radius":f?`var(--p-border-radius-${f})`:void 0,"--pc-box-border-start-end-radius":b?`var(--p-border-radius-${b})`:void 0,"--pc-box-border-width":o?`var(--p-border-width-${o})`:void 0,"--pc-box-border-block-start-width":s?`var(--p-border-width-${s})`:void 0,"--pc-box-border-block-end-width":c?`var(--p-border-width-${c})`:void 0,"--pc-box-border-inline-start-width":u?`var(--p-border-width-${u})`:void 0,"--pc-box-border-inline-end-width":d?`var(--p-border-width-${d})`:void 0,"--pc-box-min-height":h,"--pc-box-min-width":P,"--pc-box-max-width":k,"--pc-box-outline-color":L?`var(--p-color-${L})`:void 0,"--pc-box-outline-style":S||(L||_?"solid":void 0),"--pc-box-outline-width":_?`var(--p-border-width-${_})`:void 0,"--pc-box-overflow-x":y,"--pc-box-overflow-y":w,...(0,a.jD)("box","padding-block-end","space",D||C),...(0,a.jD)("box","padding-block-start","space",B||C),...(0,a.jD)("box","padding-inline-start","space",O||C),...(0,a.jD)("box","padding-inline-end","space",A||C),"--pc-box-shadow":T?`var(--p-shadow-${T})`:void 0,"--pc-box-width":$,position:F,"--pc-box-inset-block-start":j?`var(--p-space-${j})`:void 0,"--pc-box-inset-block-end":z?`var(--p-space-${z})`:void 0,"--pc-box-inset-inline-start":W?`var(--p-space-${W})`:void 0,"--pc-box-inset-inline-end":U?`var(--p-space-${U})`:void 0,zIndex:K,opacity:H},q=(0,a.AK)(i.Box,R&&i.visuallyHidden,Z&&i.printHidden,"ul"===e&&i.listReset);return r.createElement(e,{className:q,id:E,ref:M,style:(0,a.vW)(J),role:I,tabIndex:N,...G},v)});l.displayName="Box"},76928:function(e,t,n){"use strict";n.d(t,{B:function(){return i},h:function(){return l}});var r=n(27378),a=n(33121);function i(e,t={}){return Array.isArray(e)?e.map((e,n)=>l(e,t,n)):l(e,t)}function l({content:e,onAction:t,plain:n,destructive:i,...l},o,s){let c=!o?.tone&&i?"critical":o?.tone;return r.createElement(a.z,Object.assign({key:s,onClick:t,tone:c,variant:(n?"plain":void 0)||(i?"primary":void 0)},l,o),e)}},84879:function(e,t,n){"use strict";n.d(t,{h:function(){return c}});var r=n(27378),a=n(39627),i=n(26482),l={ButtonGroup:"Polaris-ButtonGroup",Item:"Polaris-ButtonGroup__Item","Item-plain":"Polaris-ButtonGroup__Item--plain",variantSegmented:"Polaris-ButtonGroup--variantSegmented","Item-focused":"Polaris-ButtonGroup__Item--focused",fullWidth:"Polaris-ButtonGroup--fullWidth",extraTight:"Polaris-ButtonGroup--extraTight",tight:"Polaris-ButtonGroup--tight",loose:"Polaris-ButtonGroup--loose",noWrap:"Polaris-ButtonGroup--noWrap"},o=n(95336);function s({button:e}){let{value:t,setTrue:n,setFalse:i}=(0,o.O)(!1),s=(0,a.AK)(l.Item,t&&l["Item-focused"],"plain"===e.props.variant&&l["Item-plain"]);return r.createElement("div",{className:s,onFocus:n,onBlur:i},e)}function c({children:e,gap:t,variant:n,fullWidth:o,connectedTop:c,noWrap:u}){let d=(0,a.AK)(l.ButtonGroup,t&&l[t],n&&l[(0,a.OZ)("variant",n)],o&&l.fullWidth,u&&l.noWrap),p=(0,i.gD)(e).map((e,t)=>r.createElement(s,{button:e,key:t}));return r.createElement("div",{className:d,"data-buttongroup-variant":n,"data-buttongroup-connected-top":c,"data-buttongroup-full-width":o,"data-buttongroup-no-wrap":u},p)}},31011:function(e,t,n){"use strict";n.d(t,{r:function(){return w}});var r=n(27378),a=n(42547),i=n(35723),l=n(88491),o=n(39627);function s(e=""){let t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}var c=n(59012),u=n(18891),d=n(95336),p=n(63671);let g=["dragover","dragenter","drop"];function m(e){if(g.indexOf(e.type)>0&&e.dataTransfer){let t=e.dataTransfer;if(t.files&&t.files.length)return Array.from(t.files);if(t.items&&t.items.length)return Array.from(t.items)}else if(Object.prototype.hasOwnProperty.call(e,"target")&&e.target.files)return Array.from(e.target.files);return[]}function f(e){return e?"allowMultiple":"single"}let b=(0,r.createContext)({disabled:!1,focused:!1,size:"extraLarge",type:"file",measuring:!1,allowMultiple:!0});var v={DropZone:"Polaris-DropZone",focused:"Polaris-DropZone--focused",hasOutline:"Polaris-DropZone--hasOutline",isDisabled:"Polaris-DropZone--isDisabled",isDragging:"Polaris-DropZone--isDragging",sizeLarge:"Polaris-DropZone--sizeLarge",sizeMedium:"Polaris-DropZone--sizeMedium",sizeSmall:"Polaris-DropZone--sizeSmall",measuring:"Polaris-DropZone--measuring",Container:"Polaris-DropZone__Container",Overlay:"Polaris-DropZone__Overlay",hasError:"Polaris-DropZone--hasError"},x={FileUpload:"Polaris-DropZone-FileUpload",large:"Polaris-DropZone-FileUpload--large",small:"Polaris-DropZone-FileUpload--small",Action:"Polaris-DropZone-FileUpload__Action",disabled:"Polaris-DropZone-FileUpload--disabled",ActionTitle:"Polaris-DropZone-FileUpload__ActionTitle","ActionTitle-disabled":"Polaris-DropZone-FileUpload__ActionTitle--disabled","ActionTitle-focused":"Polaris-DropZone-FileUpload__ActionTitle--focused",UploadIcon:"Polaris-DropZone-FileUpload__UploadIcon"},E=n(57963),h=n(89219),P=n(73260),k=n(88470),y=n(86844);let w=function({dropOnPage:e,label:t,labelAction:n,labelHidden:g,children:x,disabled:w=!1,outline:S=!0,accept:_,active:C,overlay:B=!0,allowMultiple:D=!0,overlayText:O,errorOverlayText:A,id:I,type:T="file",onClick:N,error:$,openFileDialog:Z,variableHeight:R,onFileDialogClose:F,customValidator:j,onDrop:z,onDropAccepted:W,onDropRejected:U,onDragEnter:K,onDragOver:H,onDragLeave:G}){let M=(0,r.useRef)(null),J=(0,r.useRef)(null),q=(0,r.useRef)([]),Q=(0,r.useCallback)((0,l.D)(()=>{if(!M.current)return;if(R){eo(!1);return}let e="large",t=M.current.getBoundingClientRect().width;t<100?e="small":t<160&&(e="medium"),ei(e),el&&eo(!1)},50,{trailing:!0}),[]),[V,X]=(0,r.useState)(!1),[Y,ee]=(0,r.useState)(!1),{value:et,setTrue:en,setFalse:er}=(0,d.O)(!1),[ea,ei]=(0,r.useState)("large"),[el,eo]=(0,r.useState)(!0),es=(0,E.Q)(),ec=(0,r.useCallback)(e=>{let t=[],n=[];return Array.from(e).forEach(e=>{("application/x-moz-file"===e.type||function(e,t){if(e&&t){let n=e.name||"",r=e.type||"",a=r.replace(/\/.*$/,""),i=Array.isArray(t)?t:t.split(",");return i.some(e=>{let t=e.trim();return t.startsWith(".")?n.toLowerCase().endsWith(t.toLowerCase()):t.endsWith("/*")?a===t.replace(/\/.*$/,""):r===t})}return!0}(e,_))&&(!j||j(e))?t.push(e):n.push(e)}),D||(t.splice(1,t.length),n.push(...t.slice(1))),{files:e,acceptedFiles:t,rejectedFiles:n}},[_,D,j]),eu=(0,r.useCallback)(e=>{if(L(e),w)return;let t=m(e),{files:n,acceptedFiles:r,rejectedFiles:a}=ec(t);q.current=[],X(!1),ee(a.length>0),z&&z(n,r,a),W&&r.length&&W(r),U&&a.length&&U(a),e.target&&"value"in e.target&&(e.target.value="")},[w,ec,z,W,U]),ed=(0,r.useCallback)(e=>{if(L(e),w)return;let t=m(e);if(e.target&&!q.current.includes(e.target)&&q.current.push(e.target),V)return;let{rejectedFiles:n}=ec(t);X(!0),ee(n.length>0),K&&K()},[w,V,ec,K]),ep=(0,r.useCallback)(e=>{L(e),!w&&H&&H()},[w,H]),eg=(0,r.useCallback)(t=>{t.preventDefault(),w||(q.current=q.current.filter(n=>{let r=e&&!c.s?document:M.current;return n!==t.target&&r&&r.contains(n)}),!(q.current.length>0)&&(X(!1),ee(!1),G&&G()))},[e,w,G]),em=e&&!c.s?document:M.current;(0,p.O)("drop",eu,em),(0,p.O)("dragover",ep,em),(0,p.O)("dragenter",ed,em),(0,p.O)("dragleave",eg,em),(0,p.O)("resize",Q,c.s?null:window),(0,u.J)(()=>{Q()});let ef=(0,r.useId)(),eb=I??ef,ev=s(T),ex=f(D),eE=void 0===O?es.translate(`Polaris.DropZone.${ex}.overlayText${ev}`):O,eh=void 0===A?es.translate(`Polaris.DropZone.errorOverlayText${ev}`):A,eP=t||es.translate(`Polaris.DropZone.${ex}.label${ev}`),ek=(0,o.AK)(v.DropZone,S&&v.hasOutline,et&&v.focused,(C||V)&&v.isDragging,w&&v.isDisabled,(Y||$)&&v.hasError,!R&&v[(0,o.OZ)("size",ea)],el&&v.measuring),ey=(C||V)&&!Y&&!$&&B&&eC(a.S,eE),ew=V&&(Y||$)&&eC(i.S,eh,"critical"),eL=(0,r.useMemo)(()=>({disabled:w,focused:et,size:ea,type:T||"file",measuring:el,allowMultiple:D}),[w,et,el,ea,T,D]),eS=(0,r.useCallback)(()=>{J.current&&J.current.click()},[J]),e_=(0,r.useCallback)(()=>{eS(),F?.()},[eS,F]);function eC(e,t,n){return r.createElement("div",{className:v.Overlay},r.createElement(P.E,{gap:"200",inlineAlign:"center"},"small"===ea&&r.createElement(h.J,{source:e,tone:n}),("medium"===ea||"large"===ea)&&r.createElement(k.x,{variant:"bodySm",as:"p",fontWeight:"bold"},t)))}return(0,r.useEffect)(()=>{Z&&e_()},[Z,e_]),r.createElement(b.Provider,{value:eL},r.createElement(y.jN,{id:eb,label:eP,action:n,labelHidden:!t||g},r.createElement("div",{ref:M,className:ek,"aria-disabled":w,onClick:function(e){if(!w)return N?N(e):eS()},onDragStart:L},ey,ew,r.createElement(k.x,{variant:"bodySm",as:"span",visuallyHidden:!0},r.createElement("input",{id:eb,accept:_,disabled:w,multiple:D,onChange:eu,onFocus:en,onBlur:er,type:"file",ref:J,autoComplete:"off"})),r.createElement("div",{className:v.Container},x))))};function L(e){e.preventDefault(),e.stopPropagation()}w.FileUpload=function(e){let t;let n=(0,E.Q)(),{size:i,measuring:l,type:c,disabled:u,allowMultiple:d}=(0,r.useContext)(b),p=s(c),g=f(d),{actionTitle:m=n.translate(`Polaris.DropZone.${g}.actionTitle${p}`),actionHint:v}=e,y=(0,o.AK)(x.Action,u&&x.disabled),w=r.createElement("div",{className:y},m),L=(0,o.AK)(x.FileUpload,l&&x.measuring,"large"===i&&x.large,"small"===i&&x.small),S=v&&r.createElement(k.x,{variant:"bodySm",as:"p",tone:"subdued"},v);switch(i){case"large":case"medium":t=r.createElement(P.E,{inlineAlign:"center",gap:"200"},w,S);break;case"small":t=r.createElement("div",{className:(0,o.AK)(x.UploadIcon,u&&x.disabled)},r.createElement(h.J,{source:a.S}))}return r.createElement("div",{className:L},t)}},17017:function(e,t,n){"use strict";n.d(t,{E:function(){return a}});var r=n(27378);function a({alt:e,sourceSet:t,source:n,crossOrigin:a,onLoad:i,className:l,...o}){let s=t?t.map(({source:e,descriptor:t})=>`${e} ${t}`).join(","):null,c=(0,r.useCallback)(()=>{i&&i()},[i]);return r.createElement("img",Object.assign({alt:e,src:n,crossOrigin:a,className:l,onLoad:c},s?{srcSet:s}:{},o))}},20938:function(e,t,n){"use strict";n.d(t,{b:function(){return o},e:function(){return s}});var r=n(27378),a=n(35723),i={InlineError:"Polaris-InlineError",Icon:"Polaris-InlineError__Icon"},l=n(89219);function o({message:e,fieldID:t}){return e?r.createElement("div",{id:s(t),className:i.InlineError},r.createElement("div",{className:i.Icon},r.createElement(l.J,{source:a.S})),e):null}function s(e){return`${e}Error`}},39355:function(e,t,n){"use strict";n.d(t,{g:function(){return l}});var r=n(27378),a=n(39627),i={InlineStack:"Polaris-InlineStack"};let l=function({align:e,blockAlign:t,gap:n,wrap:l=!0,children:o}){let s={"--pc-inline-stack-align":e,"--pc-inline-stack-block-align":t,"--pc-inline-stack-wrap":l?"wrap":"nowrap",...(0,a.jD)("inline-stack","gap","space",n)};return r.createElement("div",{className:i.InlineStack,style:s},o)}},40553:function(e,t,n){"use strict";n.d(t,{_:function(){return o},n:function(){return l}});var r=n(27378),a=n(39627),i={Label:"Polaris-Label",hidden:"Polaris-Label--hidden",Text:"Polaris-Label__Text",RequiredIndicator:"Polaris-Label__RequiredIndicator"};function l(e){return`${e}Label`}function o({children:e,id:t,hidden:n,requiredIndicator:o}){let s=(0,a.AK)(i.Label,n&&i.hidden);return r.createElement("div",{className:s},r.createElement("label",{id:l(t),htmlFor:t,className:(0,a.AK)(i.Text,o&&i.RequiredIndicator)},e))}},86844:function(e,t,n){"use strict";n.d(t,{jN:function(){return u},Nh:function(){return d}});var r=n(27378),a=n(39627),i={hidden:"Polaris-Labelled--hidden",LabelWrapper:"Polaris-Labelled__LabelWrapper",disabled:"Polaris-Labelled--disabled",HelpText:"Polaris-Labelled__HelpText",readOnly:"Polaris-Labelled--readOnly",Error:"Polaris-Labelled__Error",Action:"Polaris-Labelled__Action"},l=n(20938),o=n(40553),s=n(76928),c=n(88470);function u({id:e,label:t,error:n,action:u,helpText:p,children:g,labelHidden:m,requiredIndicator:f,disabled:b,readOnly:v,...x}){let E=(0,a.AK)(m&&i.hidden,b&&i.disabled,v&&i.readOnly),h=u?r.createElement("div",{className:i.Action},(0,s.h)(u,{variant:"plain"})):null,P=p?r.createElement("div",{className:i.HelpText,id:d(e),"aria-disabled":b},r.createElement(c.x,{as:"span",tone:"subdued",breakWord:!0},p)):null,k=n&&"boolean"!=typeof n&&r.createElement("div",{className:i.Error},r.createElement(l.b,{message:n,fieldID:e})),y=t?r.createElement("div",{className:i.LabelWrapper},r.createElement(o._,Object.assign({id:e,requiredIndicator:f},x,{hidden:!1}),t),h):null;return r.createElement("div",{className:E},y,g,k,P)}function d(e){return`${e}HelpText`}},97661:function(e,t,n){"use strict";n.d(t,{D:function(){return s}});var r=n(27378),a=n(39627),i=n(26482),l={LegacyStack:"Polaris-LegacyStack",Item:"Polaris-LegacyStack__Item",noWrap:"Polaris-LegacyStack--noWrap",spacingNone:"Polaris-LegacyStack--spacingNone",spacingExtraTight:"Polaris-LegacyStack--spacingExtraTight",spacingTight:"Polaris-LegacyStack--spacingTight",spacingBaseTight:"Polaris-LegacyStack--spacingBaseTight",spacingLoose:"Polaris-LegacyStack--spacingLoose",spacingExtraLoose:"Polaris-LegacyStack--spacingExtraLoose",distributionLeading:"Polaris-LegacyStack--distributionLeading",distributionTrailing:"Polaris-LegacyStack--distributionTrailing",distributionCenter:"Polaris-LegacyStack--distributionCenter",distributionEqualSpacing:"Polaris-LegacyStack--distributionEqualSpacing",distributionFill:"Polaris-LegacyStack--distributionFill",distributionFillEvenly:"Polaris-LegacyStack--distributionFillEvenly",alignmentLeading:"Polaris-LegacyStack--alignmentLeading",alignmentTrailing:"Polaris-LegacyStack--alignmentTrailing",alignmentCenter:"Polaris-LegacyStack--alignmentCenter",alignmentFill:"Polaris-LegacyStack--alignmentFill",alignmentBaseline:"Polaris-LegacyStack--alignmentBaseline",vertical:"Polaris-LegacyStack--vertical","Item-fill":"Polaris-LegacyStack__Item--fill"};function o({children:e,fill:t}){let n=(0,a.AK)(l.Item,t&&l["Item-fill"]);return r.createElement("div",{className:n},e)}let s=(0,r.memo)(function({children:e,vertical:t,spacing:n,distribution:s,alignment:c,wrap:u}){let d=(0,a.AK)(l.LegacyStack,t&&l.vertical,n&&l[(0,a.OZ)("spacing",n)],s&&l[(0,a.OZ)("distribution",s)],c&&l[(0,a.OZ)("alignment",c)],!1===u&&l.noWrap),p=(0,i.gD)(e).map((e,t)=>(0,i.oh)(e,o,{key:t}));return r.createElement("div",{className:d},p)});s.Item=o},21248:function(e,t,n){"use strict";n.d(t,{a:function(){return l}});var r=n(27378),a=n(39627),i={List:"Polaris-List",typeNumber:"Polaris-List--typeNumber",Item:"Polaris-List__Item",spacingLoose:"Polaris-List--spacingLoose"};let l=function({children:e,gap:t="loose",type:n="bullet"}){let l=(0,a.AK)(i.List,t&&i[(0,a.OZ)("spacing",t)],n&&i[(0,a.OZ)("type",n)]);return r.createElement("bullet"===n?"ul":"ol",{className:l},e)};l.Item=function({children:e}){return r.createElement("li",{className:i.Item},e)}},74906:function(e,t,n){"use strict";n.d(t,{p:function(){return s}});var r=n(27378),a=n(39627),i={Thumbnail:"Polaris-Thumbnail",sizeExtraSmall:"Polaris-Thumbnail--sizeExtraSmall",sizeSmall:"Polaris-Thumbnail--sizeSmall",sizeMedium:"Polaris-Thumbnail--sizeMedium",sizeLarge:"Polaris-Thumbnail--sizeLarge",transparent:"Polaris-Thumbnail--transparent"},l=n(17017),o=n(89219);function s({source:e,alt:t,size:n="medium",transparent:s}){let c=(0,a.AK)(i.Thumbnail,n&&i[(0,a.OZ)("size",n)],s&&i.transparent),u="string"==typeof e?r.createElement(l.E,{alt:t,source:e}):r.createElement(o.J,{accessibilityLabel:t,source:e});return r.createElement("span",{className:c},u)}},53700:function(e,t,n){"use strict";n.d(t,{D:function(){return a}});var r=n(27378);let a=(0,r.createContext)(!1)},26482:function(e,t,n){"use strict";n.d(t,{M2:function(){return s},Mc:function(){return l},Vr:function(){return c},gD:function(){return o},oh:function(){return a}});var r=n(27378);function a(e,t,n){return null==e?null:l(e,t)?e:r.createElement(t,n,e)}let i=(e,t)=>e===t;function l(e,t){if(null==e||!(0,r.isValidElement)(e)||"string"==typeof e.type)return!1;let{type:n}=e,a=e.props?.__type__,l=a||n,o=Array.isArray(t)?t:[t];return o.some(e=>"string"!=typeof l&&i(e,l))}function o(e,t=()=>!0){return r.Children.toArray(e).filter(e=>(0,r.isValidElement)(e)&&t(e))}function s({condition:e,wrapper:t,children:n}){return e?t(n):n}function c({condition:e,children:t}){return e?t:null}},18891:function(e,t,n){"use strict";n.d(t,{J:function(){return i}});var r=n(27378),a=n(72606);function i(e){let t=(0,a.u)(),n=(0,r.useRef)(!1);if(t&&!n.current)return n.current=!0,e()}},63671:function(e,t,n){"use strict";n.d(t,{O:function(){return i}});var r=n(27378),a=n(46381);function i(e,t,n,i){let l=(0,r.useRef)(t),o=(0,r.useRef)(i);(0,a.L)(()=>{l.current=t},[t]),(0,a.L)(()=>{o.current=i},[i]),(0,r.useEffect)(()=>{let t;if(!("string"==typeof e&&null!==n))return;if(void 0===n)t=window;else if("current"in n){if(null===n.current)return;t=n.current}else t=n;let r=o.current,a=e=>l.current(e);return t.addEventListener(e,a,r),()=>{t.removeEventListener(e,a,r)}},[e,n])}},95336:function(e,t,n){"use strict";n.d(t,{O:function(){return a}});var r=n(27378);function a(e){let[t,n]=(0,r.useState)(e);return{value:t,toggle:(0,r.useCallback)(()=>n(e=>!e),[]),setTrue:(0,r.useCallback)(()=>n(!0),[]),setFalse:(0,r.useCallback)(()=>n(!1),[])}}},10952:function(e,t,n){"use strict";n.d(t,{O:function(){return a}});var r=n(27378);let a=(0,r.createContext)(!1)}},function(e){e.O(0,[4515,3121,9774,2888,179],function(){return e(e.s=15959)}),_N_E=e.O()}]);