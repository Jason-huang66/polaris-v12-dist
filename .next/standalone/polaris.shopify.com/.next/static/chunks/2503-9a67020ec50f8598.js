"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2503],{98036:function(e,t,n){n.d(t,{X:function(){return d}});var a=n(27378),i=n(20368),o=n(39627),l=n(36444),r={Checkbox:"Polaris-Checkbox",ChoiceLabel:"Polaris-Checkbox__ChoiceLabel",Backdrop:"Polaris-Checkbox__Backdrop",Input:"Polaris-Checkbox__Input","Input-indeterminate":"Polaris-Checkbox__Input--indeterminate",Icon:"Polaris-Checkbox__Icon",animated:"Polaris-Checkbox--animated",toneMagic:"Polaris-Checkbox--toneMagic",hover:"Polaris-Checkbox--hover",error:"Polaris-Checkbox--error",checked:"Polaris-Checkbox--checked",pathAnimation:"Polaris-Checkbox--pathAnimation"},c=n(14049),s=n(20938),u=n(89219);let d=(0,a.forwardRef)(function({ariaControls:e,ariaDescribedBy:t,label:n,labelHidden:d,checked:p=!1,helpText:f,disabled:x,id:v,name:C,value:h,error:E,onChange:k,onFocus:g,onBlur:P,labelClassName:L,fill:A,bleed:N,bleedBlockStart:_,bleedBlockEnd:I,bleedInlineStart:y,bleedInlineEnd:w,tone:O},D){let S=(0,a.useRef)(null),T=(0,a.useId)(),F=v??T,H=(0,a.useContext)(l.ol);(0,a.useImperativeHandle)(D,()=>({focus(){S.current&&S.current.focus()}}));let B=()=>{P&&P()},K=()=>{null==k||null==S.current||x||(k(S.current.checked,F),S.current.focus())},R=[];E&&"boolean"!=typeof E&&R.push((0,s.e)(F)),f&&R.push((0,c.N)(F)),t&&R.push(t);let j=R.length?R.join(" "):void 0,M=(0,o.AK)(r.Checkbox,E&&r.error),W="indeterminate"===p,G=!W&&Boolean(p),J=a.createElement("svg",{viewBox:"0 0 16 16",shapeRendering:"geometricPrecision",textRendering:"geometricPrecision"},a.createElement("path",{className:(0,o.AK)(p&&r.checked),d:"M1.5,5.5L3.44655,8.22517C3.72862,8.62007,4.30578,8.64717,4.62362,8.28044L10.5,1.5",transform:"translate(2 2.980376)",opacity:"0",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",pathLength:"1"})),X=(0,o.AK)(r.Input,W&&r["Input-indeterminate"],O&&r[(0,o.OZ)("tone",O)]);return a.createElement(c.L,Object.assign({id:F,label:n,labelHidden:d,disabled:x,labelClassName:(0,o.AK)(r.ChoiceLabel,L),fill:A,tone:O},{helpText:f,error:E,bleed:N,bleedBlockStart:_,bleedBlockEnd:I,bleedInlineStart:y,bleedInlineEnd:w}),a.createElement("span",{className:M},a.createElement("input",Object.assign({ref:S,id:F,name:C,value:h,type:"checkbox",checked:G,disabled:x,className:X,onBlur:B,onChange:b,onClick:K,onFocus:g,"aria-invalid":null!=E,"aria-controls":e,"aria-describedby":j,role:H?"presentation":"checkbox"},W?{indeterminate:"true","aria-checked":"mixed"}:{"aria-checked":G})),a.createElement("span",{className:r.Backdrop,onClick:m,onKeyUp:m}),a.createElement("span",{className:(0,o.AK)(r.Icon,!W&&r.animated)},W?a.createElement(u.J,{source:i.S}):J)))});function b(){}function m(e){e.stopPropagation()}},14049:function(e,t,n){n.d(t,{L:function(){return c},N:function(){return s}});var a=n(27378),i=n(39627),o={Choice:"Polaris-Choice",labelHidden:"Polaris-Choice--labelHidden",Label:"Polaris-Choice__Label",Control:"Polaris-Choice__Control",disabled:"Polaris-Choice--disabled",toneMagic:"Polaris-Choice--toneMagic",Descriptions:"Polaris-Choice__Descriptions",HelpText:"Polaris-Choice__HelpText"},l=n(88470),r=n(20938);function c({id:e,label:t,disabled:n,error:c,children:u,labelHidden:d,helpText:b,onClick:m,labelClassName:p,fill:f,bleed:x,bleedBlockStart:v,bleedBlockEnd:C,bleedInlineStart:h,bleedInlineEnd:E,tone:k}){let g=(0,i.AK)(o.Choice,d&&o.labelHidden,n&&o.disabled,k&&o[(0,i.OZ)("tone",k)],p),P={...(0,i.jD)("choice","bleed-block-end","space",C||x),...(0,i.jD)("choice","bleed-block-start","space",v||x),...(0,i.jD)("choice","bleed-inline-start","space",h||x),...(0,i.jD)("choice","bleed-inline-end","space",E||x),...Object.fromEntries(Object.entries((0,i.OX)("choice","fill",f)).map(([e,t])=>[e,t?"100%":"auto"]))},L=a.createElement("label",{className:g,htmlFor:e,onClick:m,style:(0,i.vW)(P)},a.createElement("span",{className:o.Control},u),a.createElement("span",{className:o.Label},a.createElement("span",null,t))),A=b?a.createElement("div",{className:o.HelpText,id:s(e)},a.createElement(l.x,{as:"span",tone:n?void 0:"subdued"},b)):null,N=c&&"boolean"!=typeof c&&a.createElement("div",{className:o.Error},a.createElement(r.b,{message:c,fieldID:e})),_=A||N?a.createElement("div",{className:o.Descriptions},N,A):null;return _?a.createElement("div",null,L,_):L}function s(e){return`${e}HelpText`}},62503:function(e,t,n){let a;n.d(t,{G:function(){return a},R:function(){return j}});var i,o=n(27378),l=n(88491),r=n(95336),c=n(9686),s=n(4967),u={Listbox:"Polaris-Listbox"},d=n(48281),b=n(36444),m=n(48715),p=n(39627),f=n(5089),x={TextOption:"Polaris-Listbox-TextOption",allowMultiple:"Polaris-Listbox-TextOption--allowMultiple",isAction:"Polaris-Listbox-TextOption--isAction",disabled:"Polaris-Listbox-TextOption--disabled",selected:"Polaris-Listbox-TextOption--selected",Content:"Polaris-Listbox-TextOption__Content",Checkbox:"Polaris-Listbox-TextOption__Checkbox"},v=n(98036),C=n(58330),h=n(39355),E=n(89219);let k=(0,o.memo)(function({children:e,selected:t,disabled:n}){let{allowMultiple:a}=(0,o.useContext)(f.AF),i=(0,o.useContext)(b.fW),l=(0,p.AK)(x.TextOption,t&&!a&&x.selected,n&&x.disabled,a&&x.allowMultiple,i&&x.isAction),r=t?o.createElement(C.x,{width:"100%"},o.createElement(h.g,{wrap:!1,align:"space-between",gap:"200"},e,o.createElement(h.g,{align:"end"},o.createElement(E.J,{source:m.S})))):o.createElement(o.Fragment,null,e);return o.createElement("div",{className:l},o.createElement("div",{className:x.Content},a&&!i?o.createElement("div",{className:x.Checkbox},o.createElement(v.X,{disabled:n,checked:t,label:e})):r))});var g={ListItem:"Polaris-Listbox-Loading__ListItem",Loading:"Polaris-Listbox-Loading"};function P(){let e=(0,o.useContext)(b.RK);if(!e)throw Error("No Listbox was provided. Listbox components must be wrapped in a Listbox");return e}var L=n(73778);let A=(0,o.memo)(function({children:e,accessibilityLabel:t}){let{setLoading:n}=P();return(0,o.useEffect)(()=>(n(t),()=>{n(void 0)}),[t,n]),o.createElement("li",{className:g.ListItem,role:"presentation"},e||o.createElement("div",{className:g.Loading},o.createElement(L.$,{size:"small",accessibilityLabel:t})))}),N={props:{"data-polaris-listbox-section-item":!0},selector:"[data-polaris-listbox-section-item]"},_={attribute:"data-polaris-listbox-within-section-item"},I=(0,o.createContext)(null);var y={SectionGroup:"Polaris-Listbox-Section__SectionGroup",noDivider:"Polaris-Listbox-Section--noDivider"};function w(){let e=(0,o.useContext)(I);return e}var O=n(88470),D={Action:"Polaris-Listbox-Action",ActionDivider:"Polaris-Listbox-Action__ActionDivider",Icon:"Polaris-Listbox-Action__Icon"},S={Option:"Polaris-Listbox-Option",divider:"Polaris-Listbox-Option--divider"},T=n(14951),F=n(66048);let H=(0,o.memo)(function({value:e,children:t,selected:n,disabled:a=!1,accessibilityLabel:i,divider:l}){let{onOptionSelect:r}=P(),c=(0,o.useContext)(b.fW),{role:s,url:u,external:d,onAction:m,destructive:f}=(0,o.useContext)(T.O),x=(0,o.useRef)(null),v=(0,o.useId)(),C=w(),h=Boolean(C),E=(0,o.useCallback)(t=>{t.preventDefault(),t.stopPropagation(),m&&m(),x.current&&!m&&r({domId:v,value:e,element:x.current,disabled:a})},[v,r,e,a,m]),g=e=>{e.preventDefault()},L="string"==typeof t?o.createElement(k,{selected:n,disabled:a},t):t,A={[_.attribute]:h},N=u?o.createElement(F.H,{url:u,external:d},L):L;return o.createElement("li",Object.assign({},A,{"data-listbox-option":!0,"data-listbox-option-action":c,"data-listbox-option-value":e,"data-listbox-option-destructive":f,"data-within-section":h,className:(0,p.AK)(S.Option,l&&S.divider),id:v,ref:x,tabIndex:-1,role:s||"option","aria-label":i,"aria-selected":n,"aria-disabled":a,onClick:a?void 0:E,onKeyDown:a?void 0:E,onMouseDown:g}),N)});var B=n(81894);(i=a||(a={})).FirstSelected="FIRST_SELECTED",i.First="FIRST",i.None="NONE";let K="data-listbox-option-value",R="data-focused";function j({children:e,autoSelection:t=a.FirstSelected,enableKeyboardControl:n,accessibilityLabel:i,customListId:m,onSelect:p,onActiveOptionChange:f}){let[x,v]=(0,o.useState)(),[C,h]=(0,o.useState)(),[E,k]=(0,o.useState)(!1),[g,P]=(0,o.useState)([]),{value:L,setTrue:A,setFalse:N}=(0,r.O)(Boolean(n)),_=(0,o.useId)(),I=m||_,y=(0,o.useRef)(null),w=(0,o.useRef)(null),{listboxId:D,textFieldLabelId:S,textFieldFocused:T,willLoadMoreOptions:F,setActiveOptionId:H,setListboxId:j,onOptionSelected:M,onKeyToBottom:W}=(0,d.f)(),G=Boolean(H);(0,o.useEffect)(()=>{j&&!D&&j(I)},[j,D,I]);let J=(0,o.useCallback)(()=>w.current?[...new Set(w.current.querySelectorAll("[data-listbox-option]"))]:[],[]),X=(0,o.useCallback)(e=>{let n=e.some(e=>"true"===e.getAttribute("aria-selected")),i=0,o=e.find((e,o)=>{let l;let r="true"!==e.getAttribute("aria-disabled");if(n&&t===a.FirstSelected){let c="true"===e.getAttribute("aria-selected");l=c&&r}else l=r;return l&&(i=o),l});if(o)return{element:o,index:i}},[t]),q=(0,o.useCallback)(e=>{let{current:t}=y;t&&function(e,t){let n=t.scrollTop,a=n+t.clientHeight,{offsetHeight:i}=e,{offsetTop:o}=e,l=o+i;if(!(o>n&&l<a)){let r=0;l>a?r=l+.85*i-a:o<n&&(r=o-.15*i-n),requestAnimationFrame(()=>{t.scrollBy({top:r,behavior:"auto"})})}}(e.element,t)},[]),U=(0,l.D)(q,50),Z=(0,o.useCallback)(()=>{if(W)return k(!0),Promise.resolve(W())},[W]),$=(0,o.useCallback)(e=>{if(!e)return h(void 0);C?.element.removeAttribute(R),e.element.setAttribute(R,"true"),U(e),h(e),H?.(e.domId),f?.(e.value,e.domId)},[C,H,f,U]),z=(0,o.useCallback)((e,t)=>({element:e,index:t,domId:e.id,value:e.getAttribute(K)||"",disabled:"true"===e.getAttribute("aria-disabled"),isAction:"true"===e.getAttribute("data-listbox-option-action")}),[]),Y=(0,o.useCallback)(()=>{let e;let t=J(),n=X(t);if(0===t.length&&g.length>0){P(t),$();return}if(n){let{element:a,index:i}=n;e=z(a,i)}let o=void 0!==C&&e?.domId===C?.domId,l=C?.isAction&&e?.isAction&&e?.value!==C?.value,r=g.map(e=>e.getAttribute(K)),c=t.map(e=>e.getAttribute(K)),s=c.length===r.length&&c.every((e,t)=>r[t]===e),u=0!==r.length&&c.length>r.length&&r.every((e,t)=>c[t]===e);if(s){o&&l&&(P(t),$(e));return}if(u){P(t);return}if(P(t),E){k(!1);return}$(e)},[E,g,C,X,J,z,$]);(0,o.useEffect)(()=>{t!==a.None&&!x&&e&&o.Children.count(e)>0&&Y()},[e,t,C,x,Y]),(0,o.useEffect)(()=>{w.current&&(y.current=w.current.closest(s.fm.selector))},[]),(0,o.useEffect)(()=>{n&&!L&&A()},[n,L,A]);let Q=(0,o.useCallback)(e=>{$(e),M&&M(),p&&p(e.value)},[$,p,M]),V=(0,o.useCallback)((e,t,n)=>"down"===n?e===t?F?e+1:0:e+1:0===e?t:e-1,[F]),ee=(0,o.useCallback)(async e=>{let n=g.length-1,i=C?.index||0,o=0,l=C?.element,r=-1;if(!C&&t===a.None){let c=J(),s=X(c);return P(c),{element:s?.element,nextIndex:s?.index||0}}for(;r++<n;){l=g[o=V(i,n,e)];let u=o>=n,d="true"===l?.getAttribute("aria-disabled");if(u&&F&&await Z(),d){i=o,l=void 0;continue}break}return{element:l,nextIndex:o}},[t,g,C,F,V,Z,X,J]),et=(0,o.useCallback)(async(e,t)=>{t.preventDefault();let{element:n,nextIndex:a}=await ee(e);if(!n)return;let i=z(n,a);$(i)},[z,ee,$]),en=(0,o.useCallback)(e=>{et("down",e)},[et]),ea=(0,o.useCallback)(e=>{et("up",e)},[et]),ei=(0,o.useCallback)(e=>{e.preventDefault(),e.stopPropagation(),C&&Q(C)},[C,Q]),eo=(0,o.useCallback)(()=>{n||A()},[n,A]),el=(0,o.useCallback)(e=>{if(e.stopPropagation(),L){let t=X(g);if(t){let{element:a,index:i}=t,o=z(a,i);$(o)}}n||N()},[n,g,L,N,X,z,$]),er=L||T?o.createElement(o.Fragment,null,o.createElement(B.n,{keyEvent:"keydown",keyCode:c.s.DownArrow,handler:en}),o.createElement(B.n,{keyEvent:"keydown",keyCode:c.s.UpArrow,handler:ea}),o.createElement(B.n,{keyEvent:"keydown",keyCode:c.s.Enter,handler:ei})):null,ec=(0,o.useMemo)(()=>({onOptionSelect:Q,setLoading:v}),[Q]);return o.createElement(o.Fragment,null,er,o.createElement(O.x,{as:"span",visuallyHidden:!0},o.createElement("div",{"aria-live":"polite"},x||null)),o.createElement(b.RK.Provider,{value:ec},o.createElement(b.ol.Provider,{value:!0},e?o.createElement("ul",{tabIndex:0,role:"listbox",className:u.Listbox,"aria-label":G?void 0:i,"aria-labelledby":S,"aria-busy":Boolean(x),"aria-activedescendant":C&&C.domId,id:I,onFocus:G?void 0:eo,onBlur:G?void 0:el,ref:w},e):null)))}j.Option=H,j.TextOption=k,j.Loading=A,j.Section=function({children:e,divider:t=!0,title:n}){let a=(0,o.useId)();return o.createElement(I.Provider,{value:a},o.createElement("li",Object.assign({role:"presentation"},N.props),n,o.createElement("ul",{role:"group","aria-labelledby":a,className:(0,p.AK)(y.SectionGroup,!t&&y.noDivider)},e)))},j.Header=function({children:e}){let t=w()||"",n="string"==typeof e?o.createElement(C.x,{paddingBlockStart:"200",paddingInlineStart:"400",paddingBlockEnd:"200",paddingInlineEnd:"400"},o.createElement(O.x,{as:"span",variant:"headingSm",tone:"subdued"},e)):e;return o.createElement("div",{"aria-hidden":!0,id:t},n)},j.Action=function(e){let{selected:t,disabled:n,children:a,icon:i,divider:l}=e,r=i&&o.createElement("div",{className:D.Icon},o.createElement(E.J,{tone:"subdued",source:i})),c=(0,p.AK)(D.Action,l&&D.ActionDivider);return o.createElement(b.fW.Provider,{value:!0},o.createElement(H,e,o.createElement("div",{className:c},o.createElement(k,{selected:t,disabled:n},r,a))))}},14951:function(e,t,n){n.d(t,{O:function(){return i}});var a=n(27378);let i=(0,a.createContext)({})},5089:function(e,t,n){n.d(t,{AF:function(){return l},HN:function(){return i},ml:function(){return o}});var a=n(27378);let i=(0,a.createContext)(void 0),o=(0,a.createContext)({}),l=(0,a.createContext)({})},48281:function(e,t,n){n.d(t,{f:function(){return l},i:function(){return o}});var a=n(27378),i=n(5089);function o(){let e=(0,a.useContext)(i.HN);if(!e)throw Error("No Combobox was provided. Your component must be wrapped in a <Combobox> component.");return e}function l(){let e=(0,a.useContext)(i.ml);return e}},36444:function(e,t,n){n.d(t,{RK:function(){return i},fW:function(){return l},ol:function(){return o}});var a=n(27378);let i=(0,a.createContext)(void 0),o=(0,a.createContext)(!1),l=(0,a.createContext)(!1)}}]);