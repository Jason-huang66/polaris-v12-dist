(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2964],{81107:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/collapsible-default",function(){return n(30296)}])},30296:function(e,t,n){"use strict";n.r(t);var i=n(24246),a=n(29324),r=n(97661),l=n(33121),o=n(7258),c=n(43774),s=n(99653),u=n(27378),d=n(64515);t.default=(0,d.y)(function(){let[e,t]=(0,u.useState)(!0),n=(0,u.useCallback)(()=>t(e=>!e),[]);return(0,i.jsx)("div",{style:{height:"200px"},children:(0,i.jsx)(a.z,{sectioned:!0,children:(0,i.jsxs)(r.D,{vertical:!0,children:[(0,i.jsx)(l.z,{onClick:n,ariaExpanded:e,ariaControls:"basic-collapsible",children:"Toggle"}),(0,i.jsx)(o.z,{open:e,id:"basic-collapsible",transition:{duration:"500ms",timingFunction:"ease-in-out"},expandOnPrint:!0,children:(0,i.jsxs)(c.l,{children:[(0,i.jsx)("p",{children:"Your mailing list lets you contact customers or visitors who have shown an interest in your store. Reach out to them with exclusive offers or updates about your products."}),(0,i.jsx)(s.r,{url:"#",children:"Test link"})]})})]})})})})},84879:function(e,t,n){"use strict";n.d(t,{h:function(){return s}});var i=n(27378),a=n(39627),r=n(26482),l={ButtonGroup:"Polaris-ButtonGroup",Item:"Polaris-ButtonGroup__Item","Item-plain":"Polaris-ButtonGroup__Item--plain",variantSegmented:"Polaris-ButtonGroup--variantSegmented","Item-focused":"Polaris-ButtonGroup__Item--focused",fullWidth:"Polaris-ButtonGroup--fullWidth",extraTight:"Polaris-ButtonGroup--extraTight",tight:"Polaris-ButtonGroup--tight",loose:"Polaris-ButtonGroup--loose",noWrap:"Polaris-ButtonGroup--noWrap"},o=n(95336);function c({button:e}){let{value:t,setTrue:n,setFalse:r}=(0,o.O)(!1),c=(0,a.AK)(l.Item,t&&l["Item-focused"],"plain"===e.props.variant&&l["Item-plain"]);return i.createElement("div",{className:c,onFocus:n,onBlur:r},e)}function s({children:e,gap:t,variant:n,fullWidth:o,connectedTop:s,noWrap:u}){let d=(0,a.AK)(l.ButtonGroup,t&&l[t],n&&l[(0,a.OZ)("variant",n)],o&&l.fullWidth,u&&l.noWrap),g=(0,r.gD)(e).map((e,t)=>i.createElement(c,{button:e,key:t}));return i.createElement("div",{className:d,"data-buttongroup-variant":n,"data-buttongroup-connected-top":s,"data-buttongroup-full-width":o,"data-buttongroup-no-wrap":u},g)}},7258:function(e,t,n){"use strict";n.d(t,{z:function(){return l}});var i=n(27378),a=n(39627),r={Collapsible:"Polaris-Collapsible",isFullyClosed:"Polaris-Collapsible--isFullyClosed",expandOnPrint:"Polaris-Collapsible--expandOnPrint"};function l({id:e,expandOnPrint:t,open:n,transition:l=!0,children:c,onAnimationEnd:s}){let[u,d]=(0,i.useState)(0),[g,m]=(0,i.useState)(n),[p,f]=(0,i.useState)("idle"),h=(0,i.useRef)(null),P="idle"===p&&n&&g,S="idle"===p&&!n&&!g,L=(0,a.AK)(r.Collapsible,S&&r.isFullyClosed,t&&r.expandOnPrint),b=function(e){if("boolean"==typeof e)return!e;let{duration:t}=e;return!!(t&&o.test(t.trim()))}(l),y="object"==typeof l&&{transitionDuration:l.duration,transitionTimingFunction:l.timingFunction},v={...y,maxHeight:P?"none":`${u}px`,overflow:P?"visible":"hidden"},E=(0,i.useCallback)(({target:e})=>{e===h.current&&(f("idle"),m(n),s&&s())},[s,n]),C=(0,i.useCallback)(()=>{b?(m(n),f("idle"),n&&h.current?d(h.current.scrollHeight):d(0)):f("measuring")},[n,b]);return(0,i.useEffect)(()=>{n!==g&&C()},[n,g]),(0,i.useEffect)(()=>{n&&h.current&&d(h.current.scrollHeight)},[]),(0,i.useEffect)(()=>{if(h.current)switch(p){case"idle":break;case"measuring":d(h.current.scrollHeight),f("animating");break;case"animating":d(n?h.current.scrollHeight:0)}},[p,n,g]),i.createElement("div",{id:e,style:v,ref:h,className:L,onTransitionEnd:E,"aria-hidden":!n},t||!S?c:null)}let o=/^0(ms|s)$/},29324:function(e,t,n){"use strict";n.d(t,{z:function(){return L}});var i=n(27378),a=n(39627),r=n(95336),l=n(10952),o={LegacyCard:"Polaris-LegacyCard",Section:"Polaris-LegacyCard__Section",subdued:"Polaris-LegacyCard--subdued","Section-hideOnPrint":"Polaris-LegacyCard__Section--hideOnPrint",hideOnPrint:"Polaris-LegacyCard--hideOnPrint",Header:"Polaris-LegacyCard__Header","Section-fullWidth":"Polaris-LegacyCard__Section--fullWidth","Section-flush":"Polaris-LegacyCard__Section--flush","Section-subdued":"Polaris-LegacyCard__Section--subdued",SectionHeader:"Polaris-LegacyCard__SectionHeader",Subsection:"Polaris-LegacyCard__Subsection",Footer:"Polaris-LegacyCard__Footer",LeftJustified:"Polaris-LegacyCard__LeftJustified",FirstSectionPadding:"Polaris-LegacyCard__FirstSectionPadding",LastSectionPadding:"Polaris-LegacyCard__LastSectionPadding"},c=n(76928),s=n(84879),u=n(39355),d=n(88470);function g({children:e,title:t,actions:n}){let a=n?i.createElement(s.h,null,(0,c.B)(n,{variant:"plain"})):null,r=(0,i.isValidElement)(t)?t:i.createElement(d.x,{variant:"headingSm",as:"h2"},t),l=a||e?i.createElement(u.g,{wrap:!1,gap:"200",align:"space-between",blockAlign:"center"},r,i.createElement(u.g,{wrap:!1,gap:"400",blockAlign:"center"},a,e)):r;return i.createElement("div",{className:o.Header},l)}var m=n(97661);function p({children:e,title:t,subdued:n,flush:r,fullWidth:l,actions:u,hideOnPrint:g}){let p=(0,a.AK)(o.Section,r&&o["Section-flush"],n&&o["Section-subdued"],l&&o["Section-fullWidth"],g&&o["Section-hideOnPrint"]),f=u?i.createElement(s.h,null,(0,c.B)(u,{variant:"plain"})):null,h="string"==typeof t?i.createElement(d.x,{variant:"headingSm",as:"h3",fontWeight:"medium"},t):t,P=h||f?i.createElement("div",{className:o.SectionHeader},f?i.createElement(m.D,{alignment:"baseline"},i.createElement(m.D.Item,{fill:!0},h),f):h):null;return i.createElement("div",{className:p},P,e)}var f=n(57963),h=n(43389),P=n(33121),S=n(47693);let L=function({children:e,hideOnPrint:t,title:n,subdued:u,sectioned:d,actions:m,primaryFooterAction:L,secondaryFooterActions:y,secondaryFooterActionsDisclosureText:v,footerActionAlignment:E="right"}){let C=(0,f.Q)(),{value:k,toggle:_}=(0,r.O)(!1),x=function(){let e=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let t,n;let i=e.current;if(i){let a=()=>{let e;b(t,"top",!1),b(n,"bottom",!1);let a=i.querySelectorAll(`.${o.Section}, .${o.Header}, .${o.Footer}`);if(!a?.length)return;let r=a[0],l=(e=a[0],a.forEach(t=>{e.contains(t)||(e=t)}),e);i.firstChild?.contains(r)&&b(t=r,"top",!0),i.lastChild?.contains(l)&&b(n=l,"bottom",!0)};a();let r=new MutationObserver(a);return r.observe(i,{childList:!0,subtree:!0}),()=>{b(t,"top",!1),b(n,"bottom",!1),r.disconnect()}}},[]),e}(),T=(0,a.AK)(o.LegacyCard,u&&o.subdued,t&&o.hideOnPrint),F=n||m?i.createElement(g,{actions:m,title:n}):null,N=d?i.createElement(p,null,e):e,O=L?(0,c.h)(L,{variant:"primary"}):null,B=null;y&&y.length&&(B=1===y.length?(0,c.h)(y[0]):i.createElement(i.Fragment,null,i.createElement(h.J,{active:k,activator:i.createElement(P.z,{disclosure:!0,onClick:_},v||C.translate("Polaris.Common.more")),onClose:_},i.createElement(S.S,{items:y}))));let w=O||B?i.createElement("div",{className:(0,a.AK)(o.Footer,"left"===E&&o.LeftJustified)},"right"===E?i.createElement(s.h,null,B,O):i.createElement(s.h,null,O,B)):null;return i.createElement(l.O.Provider,{value:!0},i.createElement("div",{className:T,ref:x},F,N,w))};function b(e,t,n){if(!(!e||e.className.includes(o["Section-flush"])))switch(t){case"top":e.classList.toggle(o.FirstSectionPadding,n);return;case"bottom":e.classList.toggle(o.LastSectionPadding,n)}}L.Header=g,L.Section=p,L.Subsection=function({children:e}){return i.createElement("div",{className:o.Subsection},e)}},97661:function(e,t,n){"use strict";n.d(t,{D:function(){return c}});var i=n(27378),a=n(39627),r=n(26482),l={LegacyStack:"Polaris-LegacyStack",Item:"Polaris-LegacyStack__Item",noWrap:"Polaris-LegacyStack--noWrap",spacingNone:"Polaris-LegacyStack--spacingNone",spacingExtraTight:"Polaris-LegacyStack--spacingExtraTight",spacingTight:"Polaris-LegacyStack--spacingTight",spacingBaseTight:"Polaris-LegacyStack--spacingBaseTight",spacingLoose:"Polaris-LegacyStack--spacingLoose",spacingExtraLoose:"Polaris-LegacyStack--spacingExtraLoose",distributionLeading:"Polaris-LegacyStack--distributionLeading",distributionTrailing:"Polaris-LegacyStack--distributionTrailing",distributionCenter:"Polaris-LegacyStack--distributionCenter",distributionEqualSpacing:"Polaris-LegacyStack--distributionEqualSpacing",distributionFill:"Polaris-LegacyStack--distributionFill",distributionFillEvenly:"Polaris-LegacyStack--distributionFillEvenly",alignmentLeading:"Polaris-LegacyStack--alignmentLeading",alignmentTrailing:"Polaris-LegacyStack--alignmentTrailing",alignmentCenter:"Polaris-LegacyStack--alignmentCenter",alignmentFill:"Polaris-LegacyStack--alignmentFill",alignmentBaseline:"Polaris-LegacyStack--alignmentBaseline",vertical:"Polaris-LegacyStack--vertical","Item-fill":"Polaris-LegacyStack__Item--fill"};function o({children:e,fill:t}){let n=(0,a.AK)(l.Item,t&&l["Item-fill"]);return i.createElement("div",{className:n},e)}let c=(0,i.memo)(function({children:e,vertical:t,spacing:n,distribution:c,alignment:s,wrap:u}){let d=(0,a.AK)(l.LegacyStack,t&&l.vertical,n&&l[(0,a.OZ)("spacing",n)],c&&l[(0,a.OZ)("distribution",c)],s&&l[(0,a.OZ)("alignment",s)],!1===u&&l.noWrap),g=(0,r.gD)(e).map((e,t)=>(0,r.oh)(e,o,{key:t}));return i.createElement("div",{className:d},g)});c.Item=o},99653:function(e,t,n){"use strict";n.d(t,{r:function(){return c}});var i=n(27378),a=n(53700),r=n(39627),l={Link:"Polaris-Link",monochrome:"Polaris-Link--monochrome",removeUnderline:"Polaris-Link--removeUnderline"},o=n(66048);function c({url:e,children:t,onClick:n,external:c,target:s,id:u,monochrome:d,removeUnderline:g,accessibilityLabel:m,dataPrimaryLink:p}){return i.createElement(a.D.Consumer,null,a=>{let f=(0,r.AK)(l.Link,(d||a)&&l.monochrome,g&&l.removeUnderline);return e?i.createElement(o.H,{onClick:n,className:f,url:e,external:c,target:s,id:u,"aria-label":m,"data-primary-link":p},t):i.createElement("button",{type:"button",onClick:n,className:f,id:u,"aria-label":m,"data-primary-link":p},t)})}},43774:function(e,t,n){"use strict";n.d(t,{l:function(){return l}});var i=n(27378),a=n(39627),r={TextContainer:"Polaris-TextContainer",spacingTight:"Polaris-TextContainer--spacingTight",spacingLoose:"Polaris-TextContainer--spacingLoose"};function l({spacing:e,children:t}){let n=(0,a.AK)(r.TextContainer,e&&r[(0,a.OZ)("spacing",e)]);return i.createElement("div",{className:n},t)}},53700:function(e,t,n){"use strict";n.d(t,{D:function(){return a}});var i=n(27378);let a=(0,i.createContext)(!1)},10952:function(e,t,n){"use strict";n.d(t,{O:function(){return a}});var i=n(27378);let a=(0,i.createContext)(!1)}},function(e){e.O(0,[4515,3121,7298,2131,8073,7693,9774,2888,179],function(){return e(e.s=81107)}),_N_E=e.O()}]);