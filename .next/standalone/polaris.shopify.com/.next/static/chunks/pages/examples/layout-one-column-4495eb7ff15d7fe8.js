(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2300],{19958:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/layout-one-column",function(){return n(42163)}])},42163:function(e,t,n){"use strict";n.r(t);var a=n(24246),i=n(94800),r=n(53199),l=n(29324);n(27378);var o=n(64515);t.default=(0,o.y)(function(){return(0,a.jsx)(i.T,{fullWidth:!0,children:(0,a.jsx)(r.A,{children:(0,a.jsx)(r.A.Section,{children:(0,a.jsx)(l.z,{title:"Online store dashboard",sectioned:!0,children:(0,a.jsx)("p",{children:"View a summary of your online store’s performance."})})})})})})},84879:function(e,t,n){"use strict";n.d(t,{h:function(){return s}});var a=n(27378),i=n(39627),r=n(26482),l={ButtonGroup:"Polaris-ButtonGroup",Item:"Polaris-ButtonGroup__Item","Item-plain":"Polaris-ButtonGroup__Item--plain",variantSegmented:"Polaris-ButtonGroup--variantSegmented","Item-focused":"Polaris-ButtonGroup__Item--focused",fullWidth:"Polaris-ButtonGroup--fullWidth",extraTight:"Polaris-ButtonGroup--extraTight",tight:"Polaris-ButtonGroup--tight",loose:"Polaris-ButtonGroup--loose",noWrap:"Polaris-ButtonGroup--noWrap"},o=n(95336);function c({button:e}){let{value:t,setTrue:n,setFalse:r}=(0,o.O)(!1),c=(0,i.AK)(l.Item,t&&l["Item-focused"],"plain"===e.props.variant&&l["Item-plain"]);return a.createElement("div",{className:c,onFocus:n,onBlur:r},e)}function s({children:e,gap:t,variant:n,fullWidth:o,connectedTop:s,noWrap:u}){let d=(0,i.AK)(l.ButtonGroup,t&&l[t],n&&l[(0,i.OZ)("variant",n)],o&&l.fullWidth,u&&l.noWrap),g=(0,r.gD)(e).map((e,t)=>a.createElement(c,{button:e,key:t}));return a.createElement("div",{className:d,"data-buttongroup-variant":n,"data-buttongroup-connected-top":s,"data-buttongroup-full-width":o,"data-buttongroup-no-wrap":u},g)}},53199:function(e,t,n){"use strict";n.d(t,{A:function(){return u}});var a=n(27378),i={Layout:"Polaris-Layout",Section:"Polaris-Layout__Section","Section-fullWidth":"Polaris-Layout__Section--fullWidth","Section-oneHalf":"Polaris-Layout__Section--oneHalf","Section-oneThird":"Polaris-Layout__Section--oneThird",AnnotatedSection:"Polaris-Layout__AnnotatedSection",AnnotationWrapper:"Polaris-Layout__AnnotationWrapper",AnnotationContent:"Polaris-Layout__AnnotationContent",Annotation:"Polaris-Layout__Annotation"},r=n(43774),l=n(88470),o=n(58330),c=n(39627);function s({children:e,variant:t}){let n=(0,c.AK)(i.Section,i[`Section-${t}`]);return a.createElement("div",{className:n},e)}let u=function({sectioned:e,children:t}){let n=e?a.createElement(s,null,t):t;return a.createElement("div",{className:i.Layout},n)};u.AnnotatedSection=function({children:e,title:t,description:n,id:c}){let s="string"==typeof n?a.createElement(l.x,{as:"p",variant:"bodyMd"},n):n;return a.createElement("div",{className:i.AnnotatedSection},a.createElement("div",{className:i.AnnotationWrapper},a.createElement("div",{className:i.Annotation},a.createElement(r.l,{spacing:"tight"},a.createElement(l.x,{id:c,variant:"headingMd",as:"h2"},t),s&&a.createElement(o.x,{color:"text-secondary"},s))),a.createElement("div",{className:i.AnnotationContent},e)))},u.Section=s},29324:function(e,t,n){"use strict";n.d(t,{z:function(){return L}});var a=n(27378),i=n(39627),r=n(95336),l=n(10952),o={LegacyCard:"Polaris-LegacyCard",Section:"Polaris-LegacyCard__Section",subdued:"Polaris-LegacyCard--subdued","Section-hideOnPrint":"Polaris-LegacyCard__Section--hideOnPrint",hideOnPrint:"Polaris-LegacyCard--hideOnPrint",Header:"Polaris-LegacyCard__Header","Section-fullWidth":"Polaris-LegacyCard__Section--fullWidth","Section-flush":"Polaris-LegacyCard__Section--flush","Section-subdued":"Polaris-LegacyCard__Section--subdued",SectionHeader:"Polaris-LegacyCard__SectionHeader",Subsection:"Polaris-LegacyCard__Subsection",Footer:"Polaris-LegacyCard__Footer",LeftJustified:"Polaris-LegacyCard__LeftJustified",FirstSectionPadding:"Polaris-LegacyCard__FirstSectionPadding",LastSectionPadding:"Polaris-LegacyCard__LastSectionPadding"},c=n(76928),s=n(84879),u=n(39355),d=n(88470);function g({children:e,title:t,actions:n}){let i=n?a.createElement(s.h,null,(0,c.B)(n,{variant:"plain"})):null,r=(0,a.isValidElement)(t)?t:a.createElement(d.x,{variant:"headingSm",as:"h2"},t),l=i||e?a.createElement(u.g,{wrap:!1,gap:"200",align:"space-between",blockAlign:"center"},r,a.createElement(u.g,{wrap:!1,gap:"400",blockAlign:"center"},i,e)):r;return a.createElement("div",{className:o.Header},l)}var m=n(97661);function p({children:e,title:t,subdued:n,flush:r,fullWidth:l,actions:u,hideOnPrint:g}){let p=(0,i.AK)(o.Section,r&&o["Section-flush"],n&&o["Section-subdued"],l&&o["Section-fullWidth"],g&&o["Section-hideOnPrint"]),f=u?a.createElement(s.h,null,(0,c.B)(u,{variant:"plain"})):null,P="string"==typeof t?a.createElement(d.x,{variant:"headingSm",as:"h3",fontWeight:"medium"},t):t,S=P||f?a.createElement("div",{className:o.SectionHeader},f?a.createElement(m.D,{alignment:"baseline"},a.createElement(m.D.Item,{fill:!0},P),f):P):null;return a.createElement("div",{className:p},S,e)}var f=n(57963),P=n(43389),S=n(33121),E=n(47693);let L=function({children:e,hideOnPrint:t,title:n,subdued:u,sectioned:d,actions:m,primaryFooterAction:L,secondaryFooterActions:y,secondaryFooterActionsDisclosureText:v,footerActionAlignment:b="right"}){let _=(0,f.Q)(),{value:k,toggle:C}=(0,r.O)(!1),x=function(){let e=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let t,n;let a=e.current;if(a){let i=()=>{let e;h(t,"top",!1),h(n,"bottom",!1);let i=a.querySelectorAll(`.${o.Section}, .${o.Header}, .${o.Footer}`);if(!i?.length)return;let r=i[0],l=(e=i[0],i.forEach(t=>{e.contains(t)||(e=t)}),e);a.firstChild?.contains(r)&&h(t=r,"top",!0),a.lastChild?.contains(l)&&h(n=l,"bottom",!0)};i();let r=new MutationObserver(i);return r.observe(a,{childList:!0,subtree:!0}),()=>{h(t,"top",!1),h(n,"bottom",!1),r.disconnect()}}},[]),e}(),A=(0,i.AK)(o.LegacyCard,u&&o.subdued,t&&o.hideOnPrint),T=n||m?a.createElement(g,{actions:m,title:n}):null,N=d?a.createElement(p,null,e):e,B=L?(0,c.h)(L,{variant:"primary"}):null,I=null;y&&y.length&&(I=1===y.length?(0,c.h)(y[0]):a.createElement(a.Fragment,null,a.createElement(P.J,{active:k,activator:a.createElement(S.z,{disclosure:!0,onClick:C},v||_.translate("Polaris.Common.more")),onClose:C},a.createElement(E.S,{items:y}))));let W=B||I?a.createElement("div",{className:(0,i.AK)(o.Footer,"left"===b&&o.LeftJustified)},"right"===b?a.createElement(s.h,null,I,B):a.createElement(s.h,null,B,I)):null;return a.createElement(l.O.Provider,{value:!0},a.createElement("div",{className:A,ref:x},T,N,W))};function h(e,t,n){if(!(!e||e.className.includes(o["Section-flush"])))switch(t){case"top":e.classList.toggle(o.FirstSectionPadding,n);return;case"bottom":e.classList.toggle(o.LastSectionPadding,n)}}L.Header=g,L.Section=p,L.Subsection=function({children:e}){return a.createElement("div",{className:o.Subsection},e)}},97661:function(e,t,n){"use strict";n.d(t,{D:function(){return c}});var a=n(27378),i=n(39627),r=n(26482),l={LegacyStack:"Polaris-LegacyStack",Item:"Polaris-LegacyStack__Item",noWrap:"Polaris-LegacyStack--noWrap",spacingNone:"Polaris-LegacyStack--spacingNone",spacingExtraTight:"Polaris-LegacyStack--spacingExtraTight",spacingTight:"Polaris-LegacyStack--spacingTight",spacingBaseTight:"Polaris-LegacyStack--spacingBaseTight",spacingLoose:"Polaris-LegacyStack--spacingLoose",spacingExtraLoose:"Polaris-LegacyStack--spacingExtraLoose",distributionLeading:"Polaris-LegacyStack--distributionLeading",distributionTrailing:"Polaris-LegacyStack--distributionTrailing",distributionCenter:"Polaris-LegacyStack--distributionCenter",distributionEqualSpacing:"Polaris-LegacyStack--distributionEqualSpacing",distributionFill:"Polaris-LegacyStack--distributionFill",distributionFillEvenly:"Polaris-LegacyStack--distributionFillEvenly",alignmentLeading:"Polaris-LegacyStack--alignmentLeading",alignmentTrailing:"Polaris-LegacyStack--alignmentTrailing",alignmentCenter:"Polaris-LegacyStack--alignmentCenter",alignmentFill:"Polaris-LegacyStack--alignmentFill",alignmentBaseline:"Polaris-LegacyStack--alignmentBaseline",vertical:"Polaris-LegacyStack--vertical","Item-fill":"Polaris-LegacyStack__Item--fill"};function o({children:e,fill:t}){let n=(0,i.AK)(l.Item,t&&l["Item-fill"]);return a.createElement("div",{className:n},e)}let c=(0,a.memo)(function({children:e,vertical:t,spacing:n,distribution:c,alignment:s,wrap:u}){let d=(0,i.AK)(l.LegacyStack,t&&l.vertical,n&&l[(0,i.OZ)("spacing",n)],c&&l[(0,i.OZ)("distribution",c)],s&&l[(0,i.OZ)("alignment",s)],!1===u&&l.noWrap),g=(0,r.gD)(e).map((e,t)=>(0,r.oh)(e,o,{key:t}));return a.createElement("div",{className:d},g)});c.Item=o},65895:function(e,t,n){"use strict";n.d(t,{t:function(){return E}});var a,i,r=n(22276),l=n(90349),o=n(27378);(a=i||(i={})).Input="INPUT",a.Textarea="TEXTAREA",a.Select="SELECT",a.ContentEditable="contenteditable";var c=n(39627),s={Pagination:"Polaris-Pagination",table:"Polaris-Pagination--table"},u=n(57963),d=n(81894),g=n(58330),m=n(39355),p=n(84879),f=n(43697),P=n(88470),S=n(33121);function E({hasNext:e,hasPrevious:t,nextURL:n,previousURL:a,onNext:i,onPrevious:E,nextTooltip:v,previousTooltip:b,nextKeys:_,previousKeys:k,accessibilityLabel:C,accessibilityLabels:x,label:A,type:T="page"}){let N=(0,u.Q)(),B=(0,o.createRef)(),I=C||N.translate("Polaris.Pagination.pagination"),W=x?.previous||N.translate("Polaris.Pagination.previous"),O=x?.next||N.translate("Polaris.Pagination.next"),w=o.createElement(S.z,{icon:r.S,accessibilityLabel:W,url:a,onClick:E,disabled:!t,id:"previousURL"}),F=b&&t?o.createElement(f.u,{activatorWrapper:"span",content:b,preferredPosition:"below"},w):w,G=o.createElement(S.z,{icon:l.S,accessibilityLabel:O,url:n,onClick:i,disabled:!e,id:"nextURL"}),H=v&&e?o.createElement(f.u,{activatorWrapper:"span",content:v,preferredPosition:"below"},G):G,K=E||y,R=k&&(a||E)&&t&&k.map(e=>o.createElement(d.n,{key:e,keyCode:e,handler:a?h(L("previousURL",B)):h(K)})),j=i||y,z=_&&(n||i)&&e&&_.map(e=>o.createElement(d.n,{key:e,keyCode:e,handler:n?h(L("nextURL",B)):h(j)}));if("table"===T){let D=A?o.createElement(P.x,{as:"span",variant:"bodySm",fontWeight:"medium"},A):null;return o.createElement("nav",{"aria-label":I,ref:B,className:(0,c.AK)(s.Pagination,s.table)},R,z,o.createElement(g.x,{background:"bg-surface-secondary",paddingBlockStart:"150",paddingBlockEnd:"150",paddingInlineStart:"300",paddingInlineEnd:"200"},o.createElement(m.g,{align:D?"space-between":"end",blockAlign:"center"},D,o.createElement(p.h,{variant:"segmented"},F,H))))}let U=e&&t?o.createElement("span",null,A):o.createElement(P.x,{tone:"subdued",as:"span"},A),Z=A?o.createElement(g.x,{padding:"300",paddingBlockStart:"0",paddingBlockEnd:"0"},o.createElement("div",{"aria-live":"polite"},U)):null;return o.createElement("nav",{"aria-label":I,ref:B,className:s.Pagination},R,z,o.createElement(p.h,{variant:"segmented"},F,Z,H))}function L(e,t){return()=>{if(null==t.current)return;let n=t.current.querySelector(`#${e}`);n&&n.click()}}function h(e){return()=>{!function(){if(null==document||null==document.activeElement)return!1;let{tagName:e}=document.activeElement;return e===i.Input||e===i.Textarea||e===i.Select||document.activeElement.hasAttribute(i.ContentEditable)}()&&e()}}function y(){}},43774:function(e,t,n){"use strict";n.d(t,{l:function(){return l}});var a=n(27378),i=n(39627),r={TextContainer:"Polaris-TextContainer",spacingTight:"Polaris-TextContainer--spacingTight",spacingLoose:"Polaris-TextContainer--spacingLoose"};function l({spacing:e,children:t}){let n=(0,i.AK)(r.TextContainer,e&&r[(0,i.OZ)("spacing",e)]);return a.createElement("div",{className:n},t)}},10952:function(e,t,n){"use strict";n.d(t,{O:function(){return i}});var a=n(27378);let i=(0,a.createContext)(!1)}},function(e){e.O(0,[4515,3121,7298,2131,8073,7693,4800,9774,2888,179],function(){return e(e.s=19958)}),_N_E=e.O()}]);