(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1293],{18937:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/choice-list-with-multi-choice",function(){return n(54402)}])},54402:function(e,t,n){"use strict";n.r(t);var o=n(24246),r=n(96233),i=n(27378),a=n(64515);t.default=(0,a.y)(function(){let[e,t]=(0,i.useState)(["hidden"]),n=(0,i.useCallback)(e=>t(e),[]);return(0,o.jsx)(r.X,{allowMultiple:!0,title:"While the customer is checking out",choices:[{label:"Use the shipping address as the billing address by default",value:"shipping",helpText:"Reduces the number of fields required to check out. The billing address can still be edited."},{label:"Require a confirmation step",value:"confirmation",helpText:"Customers must review their order details before purchasing."}],selected:e,onChange:n})})},2358:function(e,t,n){"use strict";n.d(t,{z:function(){return a}});var o=n(27378),r=n(39627),i={Bleed:"Polaris-Bleed"};let a=({marginInline:e,marginBlock:t,marginBlockStart:n,marginBlockEnd:a,marginInlineStart:l,marginInlineEnd:c,children:s})=>{let d=o=>{let r={marginBlockStart:n,marginBlockEnd:a,marginInlineStart:l,marginInlineEnd:c,marginInline:e,marginBlock:t};return r[o]?r[o]:["marginInlineStart","marginInlineEnd"].includes(o)&&e?r.marginInline:["marginBlockStart","marginBlockEnd"].includes(o)&&t?r.marginBlock:void 0},u=d("marginBlockStart"),b=d("marginBlockEnd"),p=d("marginInlineStart"),m=d("marginInlineEnd"),h={...(0,r.jD)("bleed","margin-block-start","space",u),...(0,r.jD)("bleed","margin-block-end","space",b),...(0,r.jD)("bleed","margin-inline-start","space",p),...(0,r.jD)("bleed","margin-inline-end","space",m)};return o.createElement("div",{className:i.Bleed,style:(0,r.vW)(h)},s)}},73260:function(e,t,n){"use strict";n.d(t,{E:function(){return a}});var o=n(27378),r=n(39627),i={BlockStack:"Polaris-BlockStack",listReset:"Polaris-BlockStack--listReset",fieldsetReset:"Polaris-BlockStack--fieldsetReset"};let a=({as:e="div",children:t,align:n,inlineAlign:a,gap:l,id:c,reverseOrder:s=!1,...d})=>{let u=(0,r.AK)(i.BlockStack,("ul"===e||"ol"===e)&&i.listReset,"fieldset"===e&&i.fieldsetReset),b={"--pc-block-stack-align":n?`${n}`:null,"--pc-block-stack-inline-align":a?`${a}`:null,"--pc-block-stack-order":s?"column-reverse":"column",...(0,r.jD)("block-stack","gap","space",l)};return o.createElement(e,{className:u,style:(0,r.vW)(b),...d},t)}},58330:function(e,t,n){"use strict";n.d(t,{x:function(){return a}});var o=n(27378),r=n(39627),i={listReset:"Polaris-Box--listReset",Box:"Polaris-Box",visuallyHidden:"Polaris-Box--visuallyHidden",printHidden:"Polaris-Box--printHidden"};let a=(0,o.forwardRef)(({as:e="div",background:t,borderColor:n,borderStyle:a,borderWidth:l,borderBlockStartWidth:c,borderBlockEndWidth:s,borderInlineStartWidth:d,borderInlineEndWidth:u,borderRadius:b,borderEndStartRadius:p,borderEndEndRadius:m,borderStartStartRadius:h,borderStartEndRadius:x,children:f,color:v,id:P,minHeight:g,minWidth:k,maxWidth:E,overflowX:C,overflowY:I,outlineColor:T,outlineStyle:_,outlineWidth:y,padding:B,paddingBlockStart:$,paddingBlockEnd:j,paddingInlineStart:N,paddingInlineEnd:w,role:S,shadow:R,tabIndex:O,width:D,printHidden:L,visuallyHidden:H,position:K,insetBlockStart:M,insetBlockEnd:A,insetInlineStart:W,insetInlineEnd:X,zIndex:Z,opacity:F,...J},U)=>{let q={"--pc-box-color":v?`var(--p-color-${v})`:void 0,"--pc-box-background":t?`var(--p-color-${t})`:void 0,"--pc-box-border-color":n?"transparent"===n?"transparent":`var(--p-color-${n})`:void 0,"--pc-box-border-style":a||(n||l||c||s||d||u?"solid":void 0),"--pc-box-border-radius":b?`var(--p-border-radius-${b})`:void 0,"--pc-box-border-end-start-radius":p?`var(--p-border-radius-${p})`:void 0,"--pc-box-border-end-end-radius":m?`var(--p-border-radius-${m})`:void 0,"--pc-box-border-start-start-radius":h?`var(--p-border-radius-${h})`:void 0,"--pc-box-border-start-end-radius":x?`var(--p-border-radius-${x})`:void 0,"--pc-box-border-width":l?`var(--p-border-width-${l})`:void 0,"--pc-box-border-block-start-width":c?`var(--p-border-width-${c})`:void 0,"--pc-box-border-block-end-width":s?`var(--p-border-width-${s})`:void 0,"--pc-box-border-inline-start-width":d?`var(--p-border-width-${d})`:void 0,"--pc-box-border-inline-end-width":u?`var(--p-border-width-${u})`:void 0,"--pc-box-min-height":g,"--pc-box-min-width":k,"--pc-box-max-width":E,"--pc-box-outline-color":T?`var(--p-color-${T})`:void 0,"--pc-box-outline-style":_||(T||y?"solid":void 0),"--pc-box-outline-width":y?`var(--p-border-width-${y})`:void 0,"--pc-box-overflow-x":C,"--pc-box-overflow-y":I,...(0,r.jD)("box","padding-block-end","space",j||B),...(0,r.jD)("box","padding-block-start","space",$||B),...(0,r.jD)("box","padding-inline-start","space",N||B),...(0,r.jD)("box","padding-inline-end","space",w||B),"--pc-box-shadow":R?`var(--p-shadow-${R})`:void 0,"--pc-box-width":D,position:K,"--pc-box-inset-block-start":M?`var(--p-space-${M})`:void 0,"--pc-box-inset-block-end":A?`var(--p-space-${A})`:void 0,"--pc-box-inset-inline-start":W?`var(--p-space-${W})`:void 0,"--pc-box-inset-inline-end":X?`var(--p-space-${X})`:void 0,zIndex:Z,opacity:F},z=(0,r.AK)(i.Box,H&&i.visuallyHidden,L&&i.printHidden,"ul"===e&&i.listReset);return o.createElement(e,{className:z,id:P,ref:U,style:(0,r.vW)(q),role:S,tabIndex:O,...J},f)});a.displayName="Box"},98036:function(e,t,n){"use strict";n.d(t,{X:function(){return u}});var o=n(27378),r=n(20368),i=n(39627),a=n(36444),l={Checkbox:"Polaris-Checkbox",ChoiceLabel:"Polaris-Checkbox__ChoiceLabel",Backdrop:"Polaris-Checkbox__Backdrop",Input:"Polaris-Checkbox__Input","Input-indeterminate":"Polaris-Checkbox__Input--indeterminate",Icon:"Polaris-Checkbox__Icon",animated:"Polaris-Checkbox--animated",toneMagic:"Polaris-Checkbox--toneMagic",hover:"Polaris-Checkbox--hover",error:"Polaris-Checkbox--error",checked:"Polaris-Checkbox--checked",pathAnimation:"Polaris-Checkbox--pathAnimation"},c=n(14049),s=n(20938),d=n(89219);let u=(0,o.forwardRef)(function({ariaControls:e,ariaDescribedBy:t,label:n,labelHidden:u,checked:m=!1,helpText:h,disabled:x,id:f,name:v,value:P,error:g,onChange:k,onFocus:E,onBlur:C,labelClassName:I,fill:T,bleed:_,bleedBlockStart:y,bleedBlockEnd:B,bleedInlineStart:$,bleedInlineEnd:j,tone:N},w){let S=(0,o.useRef)(null),R=(0,o.useId)(),O=f??R,D=(0,o.useContext)(a.ol);(0,o.useImperativeHandle)(w,()=>({focus(){S.current&&S.current.focus()}}));let L=()=>{C&&C()},H=()=>{null==k||null==S.current||x||(k(S.current.checked,O),S.current.focus())},K=[];g&&"boolean"!=typeof g&&K.push((0,s.e)(O)),h&&K.push((0,c.N)(O)),t&&K.push(t);let M=K.length?K.join(" "):void 0,A=(0,i.AK)(l.Checkbox,g&&l.error),W="indeterminate"===m,X=!W&&Boolean(m),Z=o.createElement("svg",{viewBox:"0 0 16 16",shapeRendering:"geometricPrecision",textRendering:"geometricPrecision"},o.createElement("path",{className:(0,i.AK)(m&&l.checked),d:"M1.5,5.5L3.44655,8.22517C3.72862,8.62007,4.30578,8.64717,4.62362,8.28044L10.5,1.5",transform:"translate(2 2.980376)",opacity:"0",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",pathLength:"1"})),F=(0,i.AK)(l.Input,W&&l["Input-indeterminate"],N&&l[(0,i.OZ)("tone",N)]);return o.createElement(c.L,Object.assign({id:O,label:n,labelHidden:u,disabled:x,labelClassName:(0,i.AK)(l.ChoiceLabel,I),fill:T,tone:N},{helpText:h,error:g,bleed:_,bleedBlockStart:y,bleedBlockEnd:B,bleedInlineStart:$,bleedInlineEnd:j}),o.createElement("span",{className:A},o.createElement("input",Object.assign({ref:S,id:O,name:v,value:P,type:"checkbox",checked:X,disabled:x,className:F,onBlur:L,onChange:b,onClick:H,onFocus:E,"aria-invalid":null!=g,"aria-controls":e,"aria-describedby":M,role:D?"presentation":"checkbox"},W?{indeterminate:"true","aria-checked":"mixed"}:{"aria-checked":X})),o.createElement("span",{className:l.Backdrop,onClick:p,onKeyUp:p}),o.createElement("span",{className:(0,i.AK)(l.Icon,!W&&l.animated)},W?o.createElement(d.J,{source:r.S}):Z)))});function b(){}function p(e){e.stopPropagation()}},14049:function(e,t,n){"use strict";n.d(t,{L:function(){return c},N:function(){return s}});var o=n(27378),r=n(39627),i={Choice:"Polaris-Choice",labelHidden:"Polaris-Choice--labelHidden",Label:"Polaris-Choice__Label",Control:"Polaris-Choice__Control",disabled:"Polaris-Choice--disabled",toneMagic:"Polaris-Choice--toneMagic",Descriptions:"Polaris-Choice__Descriptions",HelpText:"Polaris-Choice__HelpText"},a=n(88470),l=n(20938);function c({id:e,label:t,disabled:n,error:c,children:d,labelHidden:u,helpText:b,onClick:p,labelClassName:m,fill:h,bleed:x,bleedBlockStart:f,bleedBlockEnd:v,bleedInlineStart:P,bleedInlineEnd:g,tone:k}){let E=(0,r.AK)(i.Choice,u&&i.labelHidden,n&&i.disabled,k&&i[(0,r.OZ)("tone",k)],m),C={...(0,r.jD)("choice","bleed-block-end","space",v||x),...(0,r.jD)("choice","bleed-block-start","space",f||x),...(0,r.jD)("choice","bleed-inline-start","space",P||x),...(0,r.jD)("choice","bleed-inline-end","space",g||x),...Object.fromEntries(Object.entries((0,r.OX)("choice","fill",h)).map(([e,t])=>[e,t?"100%":"auto"]))},I=o.createElement("label",{className:E,htmlFor:e,onClick:p,style:(0,r.vW)(C)},o.createElement("span",{className:i.Control},d),o.createElement("span",{className:i.Label},o.createElement("span",null,t))),T=b?o.createElement("div",{className:i.HelpText,id:s(e)},o.createElement(a.x,{as:"span",tone:n?void 0:"subdued"},b)):null,_=c&&"boolean"!=typeof c&&o.createElement("div",{className:i.Error},o.createElement(l.b,{message:c,fieldID:e})),y=T||_?o.createElement("div",{className:i.Descriptions},_,T):null;return y?o.createElement("div",null,I,y):I}function s(e){return`${e}HelpText`}},96233:function(e,t,n){"use strict";n.d(t,{X:function(){return u}});var o=n(27378),r={ChoiceChildren:"Polaris-ChoiceList__ChoiceChildren"},i=n(2358),a=n(37407),l=n(58330),c=n(20938),s=n(73260),d=n(98036);function u({title:e,titleHidden:t,allowMultiple:n,choices:u,selected:p,onChange:m=b,error:h,disabled:x=!1,name:f,tone:v}){let P=n?d.X:a.E,g=(0,o.useId)(),k=f??g,E=n?`${k}[]`:k,C=e?o.createElement(l.x,{as:"legend",paddingBlockEnd:{xs:"500",md:"100"},visuallyHidden:t},e):null,I=u.map(e=>{let{value:t,id:a,label:s,helpText:d,disabled:u,describedByError:b}=e,f=function({value:e},t){return t.includes(e)}(e,p),g=e.renderChildren?e.renderChildren(f):null,C=g?o.createElement("div",{className:r.ChoiceChildren},o.createElement(l.x,{paddingBlockStart:{xs:"400",md:"0"}},g)):null;return o.createElement("li",{key:t},o.createElement(i.z,{marginBlockEnd:d?{xs:"100",md:"0"}:{xs:"0"}},o.createElement(P,{name:E,value:t,id:a,label:s,disabled:u||x,fill:{xs:!0,sm:!1},checked:function({value:e},t){return t.includes(e)}(e,p),helpText:d,onChange:function(t){m(function({value:e},t,n,o=!1){return t?o?[...n,e]:[e]:n.filter(t=>t!==e)}(e,t,p,n),k)},ariaDescribedBy:h&&b?(0,c.e)(E):null,tone:v}),C))}),T=h&&o.createElement(l.x,{paddingBlockStart:{xs:"0",md:"100"},paddingBlockEnd:"200"},o.createElement(c.b,{message:h,fieldID:E}));return o.createElement(s.E,{as:"fieldset",gap:{xs:"400",md:"0"},"aria-invalid":null!=h,id:E},C,o.createElement(s.E,{as:"ul",gap:{xs:"400",md:"0"}},I),T)}function b(){}},89219:function(e,t,n){"use strict";n.d(t,{J:function(){return l}});var o=n(27378),r=n(39627),i={Icon:"Polaris-Icon",applyColor:"Polaris-Icon--applyColor",toneBase:"Polaris-Icon--toneBase",toneSubdued:"Polaris-Icon--toneSubdued",toneCaution:"Polaris-Icon--toneCaution",toneWarning:"Polaris-Icon--toneWarning",toneCritical:"Polaris-Icon--toneCritical",toneInteractive:"Polaris-Icon--toneInteractive",toneInfo:"Polaris-Icon--toneInfo",toneSuccess:"Polaris-Icon--toneSuccess",tonePrimary:"Polaris-Icon--tonePrimary",toneEmphasis:"Polaris-Icon--toneEmphasis",toneMagic:"Polaris-Icon--toneMagic",toneTextCaution:"Polaris-Icon--toneTextCaution",toneTextWarning:"Polaris-Icon--toneTextWarning",toneTextCritical:"Polaris-Icon--toneTextCritical",toneTextInfo:"Polaris-Icon--toneTextInfo",toneTextPrimary:"Polaris-Icon--toneTextPrimary",toneTextSuccess:"Polaris-Icon--toneTextSuccess",toneTextMagic:"Polaris-Icon--toneTextMagic",Svg:"Polaris-Icon__Svg",Img:"Polaris-Icon__Img",Placeholder:"Polaris-Icon__Placeholder"},a=n(88470);function l({source:e,tone:t,accessibilityLabel:n}){let l=(0,r.AK)(i.Icon,t&&i[(0,r.OZ)("tone",t)],t&&i.applyColor),c={function:o.createElement(e,{className:i.Svg,focusable:"false","aria-hidden":"true"}),placeholder:o.createElement("div",{className:i.Placeholder}),external:o.createElement("img",{className:i.Img,src:`data:image/svg+xml;utf8,${e}`,alt:"","aria-hidden":"true"})};return o.createElement("span",{className:l},o.createElement(a.x,{as:"span",visuallyHidden:!0},n),c["function"==typeof e?"function":"placeholder"===e?"placeholder":"external"])}},20938:function(e,t,n){"use strict";n.d(t,{b:function(){return l},e:function(){return c}});var o=n(27378),r=n(35723),i={InlineError:"Polaris-InlineError",Icon:"Polaris-InlineError__Icon"},a=n(89219);function l({message:e,fieldID:t}){return e?o.createElement("div",{id:c(t),className:i.InlineError},o.createElement("div",{className:i.Icon},o.createElement(a.J,{source:r.S})),e):null}function c(e){return`${e}Error`}},37407:function(e,t,n){"use strict";n.d(t,{E:function(){return l}});var o=n(27378),r=n(39627),i={RadioButton:"Polaris-RadioButton",Input:"Polaris-RadioButton__Input",Backdrop:"Polaris-RadioButton__Backdrop",ChoiceLabel:"Polaris-RadioButton__ChoiceLabel",toneMagic:"Polaris-RadioButton--toneMagic"},a=n(14049);function l({ariaDescribedBy:e,label:t,labelHidden:n,helpText:l,checked:c,disabled:s,onChange:d,onFocus:u,onBlur:b,id:p,name:m,value:h,fill:x,bleed:f,bleedBlockStart:v,bleedBlockEnd:P,bleedInlineStart:g,bleedInlineEnd:k,tone:E}){let C=(0,o.useId)(),I=p??C,T=(0,o.useRef)(null),_=()=>{b&&b()},y=[];l&&y.push((0,a.N)(I)),e&&y.push(e);let B=y.length?y.join(" "):void 0,$=(0,r.AK)(i.Input,E&&i[(0,r.OZ)("tone",E)]);return o.createElement(a.L,Object.assign({label:t,labelHidden:n,disabled:s,id:I,labelClassName:i.ChoiceLabel,fill:x},{helpText:l,bleed:f,bleedBlockStart:v,bleedBlockEnd:P,bleedInlineStart:g,bleedInlineEnd:k},c?{tone:E}:{}),o.createElement("span",{className:i.RadioButton},o.createElement("input",{id:I,name:m||I,value:h,type:"radio",checked:c,disabled:s,className:$,onChange:function({currentTarget:e}){d&&d(e.checked,I)},onFocus:u,onBlur:_,"aria-describedby":B,ref:T}),o.createElement("span",{className:i.Backdrop})))}},88470:function(e,t,n){"use strict";n.d(t,{x:function(){return a}});var o=n(27378),r=n(39627),i={root:"Polaris-Text--root",block:"Polaris-Text--block",truncate:"Polaris-Text--truncate",visuallyHidden:"Polaris-Text--visuallyHidden",start:"Polaris-Text--start",center:"Polaris-Text--center",end:"Polaris-Text--end",justify:"Polaris-Text--justify",success:"Polaris-Text--success",critical:"Polaris-Text--critical",caution:"Polaris-Text--caution",subdued:"Polaris-Text--subdued","text-inverse":"Polaris-Text__text--inverse",headingSm:"Polaris-Text--headingSm",headingMd:"Polaris-Text--headingMd",headingLg:"Polaris-Text--headingLg",headingXl:"Polaris-Text--headingXl",heading2xl:"Polaris-Text--heading2xl",heading3xl:"Polaris-Text--heading3xl",bodyXs:"Polaris-Text--bodyXs",bodySm:"Polaris-Text--bodySm",bodyMd:"Polaris-Text--bodyMd",bodyLg:"Polaris-Text--bodyLg",regular:"Polaris-Text--regular",medium:"Polaris-Text--medium",semibold:"Polaris-Text--semibold",bold:"Polaris-Text--bold",break:"Polaris-Text--break",numeric:"Polaris-Text--numeric","line-through":"Polaris-Text__line--through"};let a=({alignment:e,as:t,breakWord:n,children:a,tone:l,fontWeight:c,id:s,numeric:d=!1,truncate:u=!1,variant:b,visuallyHidden:p=!1,textDecorationLine:m})=>{let h=(0,r.AK)(i.root,b&&i[b],c&&i[c],(e||u)&&i.block,e&&i[e],n&&i.break,l&&i[l],d&&i.numeric,u&&i.truncate,p&&i.visuallyHidden,m&&i[m]);return o.createElement(t||(p?"span":"p"),Object.assign({className:h},s&&{id:s}),a)}},39627:function(e,t,n){"use strict";n.d(t,{AK:function(){return i},OX:function(){return s},OZ:function(){return a},jD:function(){return c},vW:function(){return l}});var o=n(53571),r=n(24528);function i(...e){return e.filter(Boolean).join(" ")}function a(e,t){return`${e}${t.charAt(0).toUpperCase()}${t.slice(1)}`}function l(e){let t=Object.entries(e).filter(([e,t])=>null!=t);return t.length?Object.fromEntries(t):void 0}function c(e,t,n,i){return i?Object.fromEntries(Object.entries((0,r.K)(i)?Object.fromEntries(Object.entries(i).map(([e,t])=>[e,`var(--p-${n}-${t})`])):{[o.vi[0]]:`var(--p-${n}-${i})`}).map(([n,o])=>[`--pc-${e}-${t}-${n}`,o])):{}}function s(e,t,n){return n?(0,r.K)(n)?Object.fromEntries(Object.entries(n).map(([n,o])=>[`--pc-${e}-${t}-${n}`,o])):{[`--pc-${e}-${t}-${o.vi[0]}`]:n}:{}}},24528:function(e,t,n){"use strict";function o(e){let t=typeof e;return null!=e&&("object"===t||"function"===t)}n.d(t,{K:function(){return o}})},36444:function(e,t,n){"use strict";n.d(t,{RK:function(){return r},fW:function(){return a},ol:function(){return i}});var o=n(27378);let r=(0,o.createContext)(void 0),i=(0,o.createContext)(!1),a=(0,o.createContext)(!1)}},function(e){e.O(0,[4515,9774,2888,179],function(){return e(e.s=18937)}),_N_E=e.O()}]);