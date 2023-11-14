"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7466],{7258:function(e,t,a){a.d(t,{z:function(){return r}});var n=a(27378),i=a(39627),l={Collapsible:"Polaris-Collapsible",isFullyClosed:"Polaris-Collapsible--isFullyClosed",expandOnPrint:"Polaris-Collapsible--expandOnPrint"};function r({id:e,expandOnPrint:t,open:a,transition:r=!0,children:s,onAnimationEnd:c}){let[m,u]=(0,n.useState)(0),[d,g]=(0,n.useState)(a),[v,p]=(0,n.useState)("idle"),I=(0,n.useRef)(null),N="idle"===v&&a&&d,h="idle"===v&&!a&&!d,_=(0,i.AK)(l.Collapsible,h&&l.isFullyClosed,t&&l.expandOnPrint),E=function(e){if("boolean"==typeof e)return!e;let{duration:t}=e;return!!(t&&o.test(t.trim()))}(r),f="object"==typeof r&&{transitionDuration:r.duration,transitionTimingFunction:r.timingFunction},b={...f,maxHeight:N?"none":`${m}px`,overflow:N?"visible":"hidden"},P=(0,n.useCallback)(({target:e})=>{e===I.current&&(p("idle"),g(a),c&&c())},[c,a]),S=(0,n.useCallback)(()=>{E?(g(a),p("idle"),a&&I.current?u(I.current.scrollHeight):u(0)):p("measuring")},[a,E]);return(0,n.useEffect)(()=>{a!==d&&S()},[a,d]),(0,n.useEffect)(()=>{a&&I.current&&u(I.current.scrollHeight)},[]),(0,n.useEffect)(()=>{if(I.current)switch(v){case"idle":break;case"measuring":u(I.current.scrollHeight),p("animating");break;case"animating":u(a?I.current.scrollHeight:0)}},[v,a,d]),n.createElement("div",{id:e,style:b,ref:I,className:_,onTransitionEnd:P,"aria-hidden":!a},t||!h?s:null)}let o=/^0(ms|s)$/},6997:function(e,t,a){a.d(t,{z:function(){return r}});var n=a(27378),i=a(39627),l={Indicator:"Polaris-Indicator",pulseIndicator:"Polaris-Indicator--pulseIndicator"};function r({pulse:e=!0}){let t=(0,i.AK)(l.Indicator,e&&l.pulseIndicator);return n.createElement("span",{className:t})}},7466:function(e,t,a){let n;a.d(t,{W:function(){return H}});var i,l=a(27378),r=a(10952),o=a(39627),s=a(40372);let c=(0,l.createContext)({location:""});var m={Navigation:"Polaris-Navigation",UserMenu:"Polaris-Navigation__UserMenu",ContextControl:"Polaris-Navigation__ContextControl",PrimaryNavigation:"Polaris-Navigation__PrimaryNavigation",LogoContainer:"Polaris-Navigation__LogoContainer",hasLogoSuffix:"Polaris-Navigation--hasLogoSuffix",Logo:"Polaris-Navigation__Logo",LogoLink:"Polaris-Navigation__LogoLink",Item:"Polaris-Navigation__Item","Icon-resized":"Polaris-Navigation__Icon--resized",Badge:"Polaris-Navigation__Badge",ItemInnerWrapper:"Polaris-Navigation__ItemInnerWrapper",ItemWrapper:"Polaris-Navigation__ItemWrapper",ItemInnerDisabled:"Polaris-Navigation__ItemInnerDisabled","ItemInnerWrapper-display-actions-on-hover":"Polaris-Navigation--itemInnerWrapperDisplayActionsOnHover",SecondaryActions:"Polaris-Navigation__SecondaryActions","ItemInnerWrapper-selected":"Polaris-Navigation__ItemInnerWrapper--selected",Text:"Polaris-Navigation__Text","ItemInnerWrapper-open":"Polaris-Navigation__ItemInnerWrapper--open","Item-selected":"Polaris-Navigation__Item--selected","Item-child-active":"Polaris-Navigation--itemChildActive","Item-disabled":"Polaris-Navigation__Item--disabled",Icon:"Polaris-Navigation__Icon","ListItem-hasAction":"Polaris-Navigation__ListItem--hasAction",subNavigationActive:"Polaris-Navigation--subNavigationActive",ListItem:"Polaris-Navigation__ListItem",RollupSection:"Polaris-Navigation__RollupSection",SecondaryNavigation:"Polaris-Navigation__SecondaryNavigation","Text-truncated":"Polaris-Navigation__Text--truncated",ItemWithFloatingActions:"Polaris-Navigation__ItemWithFloatingActions",SecondaryAction:"Polaris-Navigation__SecondaryAction",List:"Polaris-Navigation__List","Item-line":"Polaris-Navigation__Item--line","Item-hover-line":"Polaris-Navigation--itemHoverLine","Item-line-pointer":"Polaris-Navigation--itemLinePointer","Item-hover-pointer":"Polaris-Navigation--itemHoverPointer","SecondaryNavigation-noIcon":"Polaris-Navigation__SecondaryNavigation--noIcon",Section:"Polaris-Navigation__Section","Section-fill":"Polaris-Navigation__Section--fill","Section-withSeparator":"Polaris-Navigation__Section--withSeparator",SectionHeading:"Polaris-Navigation__SectionHeading",Action:"Polaris-Navigation__Action",RollupToggle:"Polaris-Navigation__RollupToggle",Indicator:"Polaris-Navigation__Indicator",SecondaryNavigationOpen:"Polaris-Navigation__SecondaryNavigationOpen","snappy-grow":"Polaris-Navigation__snappy--grow"},u=a(14995),d=a(95336),g=a(46381);(i=n||(n={}))[i.MatchForced=0]="MatchForced",i[i.MatchUrl=1]="MatchUrl",i[i.MatchPaths=2]="MatchPaths",i[i.Excluded=3]="Excluded",i[i.NoMatch=4]="NoMatch";var v=a(54335),p=a.n(v),I=a(7258);function N({ItemComponent:e,icon:t,longestMatch:a,subNavigationItems:n,showExpanded:i,truncateText:r,secondaryNavigationId:s}){let u=(0,l.useId)(),{onNavigationDismiss:d}=(0,l.useContext)(c),[g,v]=(0,l.useState)(),N=n.findIndex(e=>p()(e,a)),h=n.findIndex(e=>p()(e,g));return l.createElement("div",{className:(0,o.AK)(m.SecondaryNavigation,i&&m.SecondaryNavigationOpen,!t&&m["SecondaryNavigation-noIcon"])},l.createElement(I.z,{id:s||u,open:i,transition:!1},l.createElement("ul",{className:m.List},n.map((t,n)=>{let{label:i,...o}=t,s=()=>{d?.(),t.onClick&&t.onClick!==d&&t.onClick()};return l.createElement(e,Object.assign({key:i},o,{label:i,showVerticalLine:n<N,showVerticalHoverPointer:n===h,onMouseEnter:t.disabled?void 0:()=>v(t),onMouseLeave:t.disabled?void 0:()=>v(void 0),matches:p()(t,a),onClick:s,truncateText:r}))}))))}var h=a(57963),_=a(17227),E=a(6997),f=a(89219),b=a(30324),P=a(66048),S=a(84654),y=a(43697);function x({url:e,icon:t,matchedItemIcon:a,label:i,subNavigationItems:r=[],secondaryAction:s,secondaryActions:u,displayActionsOnHover:d,disabled:v,onClick:p,accessibilityLabel:I,selected:S,badge:L,new:A,matches:k,exactMatch:M,matchPaths:F,excludePaths:w,external:H,onToggleExpandedState:T,expanded:O,shouldResizeIcon:K,truncateText:D,showVerticalLine:R,showVerticalHoverPointer:z,onMouseEnter:B,onMouseLeave:U}){let j=(0,h.Q)(),{isNavigationCollapsed:J}=(0,_.a)(),$=(0,l.useId)(),{location:V,onNavigationDismiss:q}=(0,l.useContext)(c),Q=(0,l.useRef)(null),[G,X]=(0,l.useState)(!1);(0,l.useEffect)(()=>{!J&&O&&T?.()},[O,J,T]),(0,g.L)(()=>{let e=Q.current;D&&e&&X(e.scrollHeight>e.clientHeight)},[D]);let Y=v?-1:0,Z=r.filter(e=>e.new).length>0,ee=Z?l.createElement("span",{className:m.Indicator},l.createElement(E.z,{pulse:!0})):null,et=W({url:e,matches:k,exactMatch:M,matchPaths:F,excludePaths:w},V),ea=r.filter(e=>{let t=W(e,V);return t===n.MatchForced||t===n.MatchUrl||t===n.MatchPaths}),en=ea.length>0,ei=null==S?et===n.MatchForced||et===n.MatchUrl||et===n.MatchPaths:S,el=ei||en?a??t:t,er=el?l.createElement("div",{className:(0,o.AK)(m.Icon,K&&m["Icon-resized"])},l.createElement(f.J,{source:el})):null,eo=null;eo=A?l.createElement(b.C,{tone:"new"},j.translate("Polaris.Badge.TONE_LABELS.new")):"string"==typeof L?l.createElement(b.C,{tone:"new"},L):L;let es=null==eo?null:l.createElement("div",{className:m.Badge},eo),ec=l.createElement("span",{className:(0,o.AK)(m.Text,D&&m["Text-truncated"]),ref:Q},i,ee);if(null==e){let em=(0,o.AK)(m.Item,v&&m["Item-disabled"],S&&m["Item-selected"]);return l.createElement("li",{className:m.ListItem},l.createElement("div",{className:m.ItemWrapper},l.createElement("div",{className:(0,o.AK)(m.ItemInnerWrapper,v&&m.ItemInnerDisabled,S&&m["ItemInnerWrapper-selected"])},l.createElement("button",{type:"button",className:em,disabled:v,"aria-disabled":v,"aria-label":I,onClick:ef(p)},er,ec,es))))}let eu=u||s&&[s];eu&&eu.length>2&&(eu.length=2);let ed=eu?.length?l.createElement("span",{className:m.SecondaryActions},eu.map(e=>l.createElement(C,Object.assign({key:e.accessibilityLabel},e,{tabIndex:Y,disabled:v})))):null,eg=l.createElement(l.Fragment,null,er,ec,ed?null:es),ev=l.createElement(l.Fragment,null,ed?es:null),ep=ei||O||en,eI=(0,o.AK)(m.Item,v&&m["Item-disabled"],(ei||en)&&m["Item-selected"],ep&&m.subNavigationActive,en&&m["Item-child-active"],R&&m["Item-line"],k&&m["Item-line-pointer"],z&&m["Item-hover-pointer"]),eN=null;if(r.length>0){let eh=ea.sort(({url:e},{url:t})=>t.length-e.length)[0];eN=l.createElement(N,{ItemComponent:x,icon:el,longestMatch:eh,subNavigationItems:r,showExpanded:ep,truncateText:D,secondaryNavigationId:$})}let e_=(0,o.AK)(m.ListItem,Boolean(eu&&eu.length)&&m["ListItem-hasAction"]),eE=()=>{let t=l.createElement(P.H,Object.assign({url:e,className:eI,external:H,tabIndex:Y,"aria-disabled":v,"aria-label":I,onClick:ef(p)},r.length>0?{"aria-expanded":ep,"aria-controls":$}:void 0),eg);return G?l.createElement(y.u,{hoverDelay:1e3,content:i,preferredPosition:"above"},t):t};return l.createElement("li",{className:e_,onMouseEnter(){B?.(i)},onMouseLeave:U},l.createElement("div",{className:m.ItemWrapper},l.createElement("div",{className:(0,o.AK)(m.ItemInnerWrapper,ei&&en&&m["ItemInnerWrapper-open"]||ei&&!en&&m["ItemInnerWrapper-selected"],d&&m["ItemInnerWrapper-display-actions-on-hover"],v&&m.ItemInnerDisabled)},d&&ed&&es?l.createElement("span",{className:m.ItemWithFloatingActions},eE(),ed):l.createElement(l.Fragment,null,eE(),ed),ev)),eN);function ef(e){return t=>{let{currentTarget:a}=t;if(a.getAttribute("href")===V&&t.preventDefault(),r&&r.length>0&&J)t.preventDefault(),T?.();else if(q){q(),e&&e!==q&&e();return}e&&e()}}}function C({url:e,icon:t,accessibilityLabel:a,tooltip:n,onClick:i,disabled:r,tabIndex:o}){let s=e?l.createElement(P.H,{external:!0,url:e,className:m.SecondaryAction,tabIndex:o,"aria-disabled":r,"aria-label":a,onClick:i},l.createElement(f.J,{source:t})):l.createElement(S.k,{className:m.SecondaryAction,tabIndex:o,disabled:r,accessibilityLabel:a,onClick:i},l.createElement(f.J,{source:t}));return n?l.createElement(y.u,n," ",s," "):s}function L(e){let t=e.split("?")[0].split("#")[0];return t.endsWith("/")?t:`${t}/`}function A(e,t){return L(e).startsWith(L(t))}function W({url:e,matches:t,exactMatch:a,matchPaths:i,excludePaths:l},r){if(null==e)return n.NoMatch;if(t)return n.MatchForced;if(!1===t||l&&l.some(e=>A(r,e)))return n.Excluded;if(i&&i.some(e=>A(r,e)))return n.MatchPaths;let o=a?L(r)===L(e):A(r,e);return o?n.MatchUrl:n.NoMatch}var k=a(88470),M=a(85216),F=a(17017),w=a(85142);let H=function({children:e,contextControl:t,location:a,onDismiss:n,ariaLabelledBy:i,logoSuffix:u}){let{logo:d}=(0,M.x)(),g=(0,s.d)(d,104),v=d?l.createElement("div",{className:(0,o.AK)(m.LogoContainer,u&&m.hasLogoSuffix)},l.createElement(P.H,{url:d.url||"",className:m.LogoLink,style:{width:g}},l.createElement(F.E,{source:d.topBarSource||"",alt:d.accessibilityLabel||"",className:m.Logo,style:{width:g}})),u):null,p=t?l.createElement("div",{className:m.ContextControl},t):v,I=(0,l.useMemo)(()=>({location:a,onNavigationDismiss:n}),[a,n]);return l.createElement(c.Provider,{value:I},l.createElement(r.O.Provider,{value:!0},l.createElement("nav",{className:m.Navigation,"aria-labelledby":i},p,l.createElement(w.R,{className:m.PrimaryNavigation},e))))};H.Item=x,H.Section=function({title:e,fill:t,action:a,items:n,rollup:i,separator:r}){let{value:s,toggle:c,setFalse:g}=(0,d.O)(!1),v=(0,l.useRef)(null),{isNavigationCollapsed:p}=(0,_.a)(),[N,h]=(0,l.useState)(),E=(e,t)=>()=>{e&&e(),v.current&&cancelAnimationFrame(v.current),t&&p||(v.current=requestAnimationFrame(g))};(0,l.useEffect)(()=>()=>{v.current&&cancelAnimationFrame(v.current)});let b=(0,o.AK)(m.Section,r&&m["Section-withSeparator"],t&&m["Section-fill"]),P=a&&l.createElement("button",{type:"button",className:m.Action,"aria-label":a.accessibilityLabel,onClick:a.onClick},l.createElement(f.J,{source:a.icon})),S=a&&(a.tooltip?l.createElement(y.u,a.tooltip,P):P),C=e&&l.createElement("li",{className:m.SectionHeading},l.createElement(k.x,{as:"span",variant:"bodySm",fontWeight:"medium",tone:"subdued"},e),S),L=n.map((e,t)=>{let{onClick:a,label:n,subNavigationItems:i,...r}=e,o=null!=i&&i.length>0,s=()=>{N===t?h(-1):h(t)};return l.createElement(x,Object.assign({key:n},r,{label:n,subNavigationItems:i,onClick:E(a,o),onToggleExpandedState:s,expanded:N===t}))}),A=(0,o.AK)(m.Item,m.RollupToggle),W=i&&(s?i.hide:i.view),M=i&&n.length>i.after&&l.createElement("div",{className:m.ListItem,key:"List Item"},l.createElement("div",{className:m.ItemWrapper},l.createElement("div",{className:m.ItemInnerWrapper},l.createElement("button",{type:"button",className:A,onClick:c,"aria-label":W},l.createElement("span",{className:m.Icon},l.createElement(f.J,{source:u.S})))))),F=n.findIndex(e=>!!i&&(i.activePath===e.url||e.url&&i.activePath.startsWith(e.url)||!!e.subNavigationItems&&e.subNavigationItems.some(({url:e})=>i.activePath.startsWith(e)))),w=i?L.slice(0,i.after):L,H=i?L.slice(i.after):[];i&&-1!==F&&F>i.after-1&&w.push(...H.splice(F-i.after,1));let T=(0,l.useId)(),O=i&&H.length>0&&l.createElement("li",{className:m.RollupSection},l.createElement(I.z,{id:T,open:s},l.createElement("ul",{className:m.List},H)),M);return l.createElement("ul",{className:b},C,w,O)}}}]);