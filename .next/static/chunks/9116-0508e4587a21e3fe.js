(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9116],{54335:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,o){try{return function e(o,l){if(o===l)return!0;if(o&&l&&"object"==typeof o&&"object"==typeof l){var a,c,s,u;if(o.constructor!==l.constructor)return!1;if(Array.isArray(o)){if((a=o.length)!=l.length)return!1;for(c=a;0!=c--;)if(!e(o[c],l[c]))return!1;return!0}if(n&&o instanceof Map&&l instanceof Map){if(o.size!==l.size)return!1;for(u=o.entries();!(c=u.next()).done;)if(!l.has(c.value[0]))return!1;for(u=o.entries();!(c=u.next()).done;)if(!e(c.value[1],l.get(c.value[0])))return!1;return!0}if(r&&o instanceof Set&&l instanceof Set){if(o.size!==l.size)return!1;for(u=o.entries();!(c=u.next()).done;)if(!l.has(c.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(o)&&ArrayBuffer.isView(l)){if((a=o.length)!=l.length)return!1;for(c=a;0!=c--;)if(o[c]!==l[c])return!1;return!0}if(o.constructor===RegExp)return o.source===l.source&&o.flags===l.flags;if(o.valueOf!==Object.prototype.valueOf)return o.valueOf()===l.valueOf();if(o.toString!==Object.prototype.toString)return o.toString()===l.toString();if((a=(s=Object.keys(o)).length)!==Object.keys(l).length)return!1;for(c=a;0!=c--;)if(!Object.prototype.hasOwnProperty.call(l,s[c]))return!1;if(t&&o instanceof Element)return!1;for(c=a;0!=c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!o.$$typeof)&&!e(o[s[c]],l[s[c]]))return!1;return!0}return o!=o&&l!=l}(e,o)}catch(l){if((l.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw l}}},98036:function(e,t,n){"use strict";n.d(t,{X:function(){return d}});var r=n(27378),i=n(20368),o=n(39627),l=n(36444),a={Checkbox:"Polaris-Checkbox",ChoiceLabel:"Polaris-Checkbox__ChoiceLabel",Backdrop:"Polaris-Checkbox__Backdrop",Input:"Polaris-Checkbox__Input","Input-indeterminate":"Polaris-Checkbox__Input--indeterminate",Icon:"Polaris-Checkbox__Icon",animated:"Polaris-Checkbox--animated",toneMagic:"Polaris-Checkbox--toneMagic",hover:"Polaris-Checkbox--hover",error:"Polaris-Checkbox--error",checked:"Polaris-Checkbox--checked",pathAnimation:"Polaris-Checkbox--pathAnimation"},c=n(14049),s=n(20938),u=n(89219);let d=(0,r.forwardRef)(function({ariaControls:e,ariaDescribedBy:t,label:n,labelHidden:d,checked:b=!1,helpText:h,disabled:m,id:k,name:g,value:O,error:C,onChange:v,onFocus:E,onBlur:x,labelClassName:P,fill:_,bleed:y,bleedBlockStart:L,bleedBlockEnd:A,bleedInlineStart:S,bleedInlineEnd:N,tone:j},I){let B=(0,r.useRef)(null),w=(0,r.useId)(),M=k??w,H=(0,r.useContext)(l.ol);(0,r.useImperativeHandle)(I,()=>({focus(){B.current&&B.current.focus()}}));let $=()=>{x&&x()},D=()=>{null==v||null==B.current||m||(v(B.current.checked,M),B.current.focus())},K=[];C&&"boolean"!=typeof C&&K.push((0,s.e)(M)),h&&K.push((0,c.N)(M)),t&&K.push(t);let R=K.length?K.join(" "):void 0,T=(0,o.AK)(a.Checkbox,C&&a.error),F="indeterminate"===b,W=!F&&Boolean(b),z=r.createElement("svg",{viewBox:"0 0 16 16",shapeRendering:"geometricPrecision",textRendering:"geometricPrecision"},r.createElement("path",{className:(0,o.AK)(b&&a.checked),d:"M1.5,5.5L3.44655,8.22517C3.72862,8.62007,4.30578,8.64717,4.62362,8.28044L10.5,1.5",transform:"translate(2 2.980376)",opacity:"0",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",pathLength:"1"})),X=(0,o.AK)(a.Input,F&&a["Input-indeterminate"],j&&a[(0,o.OZ)("tone",j)]);return r.createElement(c.L,Object.assign({id:M,label:n,labelHidden:d,disabled:m,labelClassName:(0,o.AK)(a.ChoiceLabel,P),fill:_,tone:j},{helpText:h,error:C,bleed:y,bleedBlockStart:L,bleedBlockEnd:A,bleedInlineStart:S,bleedInlineEnd:N}),r.createElement("span",{className:T},r.createElement("input",Object.assign({ref:B,id:M,name:g,value:O,type:"checkbox",checked:W,disabled:m,className:X,onBlur:$,onChange:p,onClick:D,onFocus:E,"aria-invalid":null!=C,"aria-controls":e,"aria-describedby":R,role:H?"presentation":"checkbox"},F?{indeterminate:"true","aria-checked":"mixed"}:{"aria-checked":W})),r.createElement("span",{className:a.Backdrop,onClick:f,onKeyUp:f}),r.createElement("span",{className:(0,o.AK)(a.Icon,!F&&a.animated)},F?r.createElement(u.J,{source:i.S}):z)))});function p(){}function f(e){e.stopPropagation()}},14049:function(e,t,n){"use strict";n.d(t,{L:function(){return c},N:function(){return s}});var r=n(27378),i=n(39627),o={Choice:"Polaris-Choice",labelHidden:"Polaris-Choice--labelHidden",Label:"Polaris-Choice__Label",Control:"Polaris-Choice__Control",disabled:"Polaris-Choice--disabled",toneMagic:"Polaris-Choice--toneMagic",Descriptions:"Polaris-Choice__Descriptions",HelpText:"Polaris-Choice__HelpText"},l=n(88470),a=n(20938);function c({id:e,label:t,disabled:n,error:c,children:u,labelHidden:d,helpText:p,onClick:f,labelClassName:b,fill:h,bleed:m,bleedBlockStart:k,bleedBlockEnd:g,bleedInlineStart:O,bleedInlineEnd:C,tone:v}){let E=(0,i.AK)(o.Choice,d&&o.labelHidden,n&&o.disabled,v&&o[(0,i.OZ)("tone",v)],b),x={...(0,i.jD)("choice","bleed-block-end","space",g||m),...(0,i.jD)("choice","bleed-block-start","space",k||m),...(0,i.jD)("choice","bleed-inline-start","space",O||m),...(0,i.jD)("choice","bleed-inline-end","space",C||m),...Object.fromEntries(Object.entries((0,i.OX)("choice","fill",h)).map(([e,t])=>[e,t?"100%":"auto"]))},P=r.createElement("label",{className:E,htmlFor:e,onClick:f,style:(0,i.vW)(x)},r.createElement("span",{className:o.Control},u),r.createElement("span",{className:o.Label},r.createElement("span",null,t))),_=p?r.createElement("div",{className:o.HelpText,id:s(e)},r.createElement(l.x,{as:"span",tone:n?void 0:"subdued"},p)):null,y=c&&"boolean"!=typeof c&&r.createElement("div",{className:o.Error},r.createElement(a.b,{message:c,fieldID:e})),L=_||y?r.createElement("div",{className:o.Descriptions},y,_):null;return L?r.createElement("div",null,P,L):P}function s(e){return`${e}HelpText`}},69116:function(e,t,n){"use strict";n.d(t,{X:function(){return O}});var r=n(27378),i=n(88583);function o(e,t,n){return e.length===t.length&&e.every((e,r)=>{let i=t[r];return null!=n?n(e,i):e===i})}var l=n(89951),a=n(48715),c=n(95336),s=n(39627),u={Option:"Polaris-OptionList-Option",SingleSelectOption:"Polaris-OptionList-Option__SingleSelectOption",focused:"Polaris-OptionList-Option--focused",active:"Polaris-OptionList-Option--active",disabled:"Polaris-OptionList-Option--disabled",select:"Polaris-OptionList-Option--select",Media:"Polaris-OptionList-Option__Media",Label:"Polaris-OptionList-Option__Label",MultiSelectOption:"Polaris-OptionList-Option__MultiSelectOption",CheckboxLabel:"Polaris-OptionList-Option__CheckboxLabel",verticalAlignTop:"Polaris-OptionList-Option--verticalAlignTop",verticalAlignCenter:"Polaris-OptionList-Option--verticalAlignCenter",verticalAlignBottom:"Polaris-OptionList-Option--verticalAlignBottom",Icon:"Polaris-OptionList-Option__Icon",Checkbox:"Polaris-OptionList-Option__Checkbox"},d=n(98036),p=n(39355),f=n(89219),b=n(85142);function h({label:e,value:t,id:n,select:i,active:o,allowMultiple:l,disabled:h,media:m,onClick:k,section:g,index:O,verticalAlign:C,onPointerEnter:v,onFocus:E}){let{value:x,toggle:P}=(0,c.O)(!1),_=(0,r.useCallback)(()=>{h||k(g,O)},[h,O,k,g]),y=(0,r.useCallback)(()=>{h||v(g,O)},[h,v,g,O]),L=(0,r.useCallback)(()=>{P(),E(g,O)},[P,E,g,O]),A=m?r.createElement("div",{className:u.Media},m):null,S=(0,s.AK)(u.SingleSelectOption,x&&u.focused,h&&u.disabled,i&&u.select,o&&u.active,C&&u[(0,s.OZ)("verticalAlign",C)]),N=(0,s.AK)(u.Label,h&&u.disabled,o&&u.active,i&&u.select,C&&u[(0,s.OZ)("verticalAlign",C)],l&&u.CheckboxLabel,l&&u.MultiSelectOption),j=l?r.createElement("label",{htmlFor:n,className:N},r.createElement("div",{className:u.Checkbox},r.createElement(d.X,{id:n,label:"",ariaDescribedBy:`${n}-label`,value:t,checked:i,disabled:h,onChange:_})),A,r.createElement("span",{id:`${n}-label`},e)):r.createElement("button",{id:n,type:"button",className:S,onClick:_,disabled:h,onFocus:L,onBlur:P,"aria-pressed":o||i},r.createElement(r.Fragment,null,r.createElement(p.g,{wrap:!1,blockAlign:function(e){switch(e){case"top":default:return"start";case"center":return"center";case"bottom":return"end"}}(C)},A,e),(i||o)&&r.createElement("span",{className:u.Icon},r.createElement(f.J,{source:a.S})))),I=o?r.createElement(b.R.ScrollTo,null):null;return r.createElement("li",{key:n,className:u.Option,tabIndex:-1,onPointerEnter:y},I,j)}var m=n(58330),k=n(73260),g=n(88470);function O({options:e,sections:t,title:n,selected:i,allowMultiple:o,role:a,verticalAlign:c,onChange:s,id:u,onPointerEnterOption:d,onFocusOption:p}){let[f,b]=(0,r.useState)(C(e,t,n)),O=(0,r.useId)(),E=u??O;(0,l.H)(()=>{b(C(e||[],t||[],n))},[e,t,n],v);let x=(0,r.useCallback)((e,t)=>{let n=f[e].options[t].value,r=i.indexOf(n);if(o){let l=-1===r?[n,...i]:[...i.slice(0,r),...i.slice(r+1,i.length)];s(l);return}s([n])},[f,i,o,s]),P=(0,r.useCallback)((e,t)=>{if(!d)return;let n=f[e].options[t].value;d(n)},[f,d]),_=(0,r.useCallback)((e,t)=>{if(!p)return;let n=f[e].options[t].value;p(n)},[f,p]),y=f.length>0,L=y?f.map(({title:e,options:n},l)=>{let s=0===l,u=e?r.createElement(m.x,{paddingBlockStart:s?"050":"300",paddingInlineStart:"150",paddingBlockEnd:"100",paddingInlineEnd:"150",borderColor:"border-secondary"},r.createElement(g.x,{as:s?"h2":"h3",variant:"headingSm"},e)):null,d=n&&n.map((e,t)=>{let n=i.includes(e.value),a=e.id||`${E}-${l}-${t}`;return r.createElement(h,Object.assign({key:a},e,{id:a,section:l,index:t,onClick:x,select:n,allowMultiple:o,verticalAlign:c,onPointerEnter:P,onFocus:_}))}),p=r.createElement(m.x,{as:"ul",id:`${E}-${l}`,role:a},d);return r.createElement(m.x,{key:e||`noTitle-${l}`,as:"li",paddingBlockStart:s?e?"100":"0":e?"050":"0"},r.createElement(k.E,{gap:s&&t?void 0:"0"},u,p))}):null;return r.createElement(m.x,{as:"ul",role:a,padding:"150"},L)}function C(e,t,n){return null==e?null==t?[]:[{options:[],title:n},...t]:null==t?[{title:n,options:e}]:[{title:n,options:e},...t]}function v(e,t){return(0,i.W)(e)&&(0,i.W)(t)?o(e,t,E):o(e,t)}function E(e,t){let{options:n}=e,{options:r}=t,i=o(n,r),l=e.title===t.title;return i&&l}},36444:function(e,t,n){"use strict";n.d(t,{RK:function(){return i},fW:function(){return l},ol:function(){return o}});var r=n(27378);let i=(0,r.createContext)(void 0),o=(0,r.createContext)(!1),l=(0,r.createContext)(!1)},88583:function(e,t,n){"use strict";function r(e){return"object"==typeof e[0]&&Object.prototype.hasOwnProperty.call(e[0],"options")}n.d(t,{W:function(){return r}})},91912:function(e,t,n){"use strict";n.d(t,{E:function(){return l}});var r=n(27378),i=n(54335),o=n.n(i);function l(e,t=o()){let n=(0,r.useRef)(e);return t(n.current,e)||(n.current=e),n.current}},89951:function(e,t,n){"use strict";n.d(t,{H:function(){return o}});var r=n(27378),i=n(91912);function o(e,t,n){(0,r.useEffect)(e,(0,i.E)(t,n))}}}]);