(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2938],{62589:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/skeleton-page-with-dynamic-content",function(){return n(58834)}])},58834:function(e,t,n){"use strict";n.r(t);var a=n(24246),i=n(99413),l=n(53199),r=n(29324),o=n(55207),c=n(43774),s=n(85397);n(27378);var d=n(64515);t.default=(0,d.y)(function(){return(0,a.jsx)(i.y,{primaryAction:!0,children:(0,a.jsxs)(l.A,{children:[(0,a.jsxs)(l.A.Section,{children:[(0,a.jsx)(r.z,{sectioned:!0,children:(0,a.jsx)(o.j,{})}),(0,a.jsx)(r.z,{sectioned:!0,children:(0,a.jsxs)(c.l,{children:[(0,a.jsx)(s.$,{size:"small"}),(0,a.jsx)(o.j,{})]})}),(0,a.jsx)(r.z,{sectioned:!0,children:(0,a.jsxs)(c.l,{children:[(0,a.jsx)(s.$,{size:"small"}),(0,a.jsx)(o.j,{})]})})]}),(0,a.jsxs)(l.A.Section,{variant:"oneThird",children:[(0,a.jsxs)(r.z,{children:[(0,a.jsx)(r.z.Section,{children:(0,a.jsxs)(c.l,{children:[(0,a.jsx)(s.$,{size:"small"}),(0,a.jsx)(o.j,{lines:2})]})}),(0,a.jsx)(r.z.Section,{children:(0,a.jsx)(o.j,{lines:1})})]}),(0,a.jsxs)(r.z,{subdued:!0,children:[(0,a.jsx)(r.z.Section,{children:(0,a.jsxs)(c.l,{children:[(0,a.jsx)(s.$,{size:"small"}),(0,a.jsx)(o.j,{lines:2})]})}),(0,a.jsx)(r.z.Section,{children:(0,a.jsx)(o.j,{lines:2})})]})]})]})})})},84879:function(e,t,n){"use strict";n.d(t,{h:function(){return s}});var a=n(27378),i=n(39627),l=n(26482),r={ButtonGroup:"Polaris-ButtonGroup",Item:"Polaris-ButtonGroup__Item","Item-plain":"Polaris-ButtonGroup__Item--plain",variantSegmented:"Polaris-ButtonGroup--variantSegmented","Item-focused":"Polaris-ButtonGroup__Item--focused",fullWidth:"Polaris-ButtonGroup--fullWidth",extraTight:"Polaris-ButtonGroup--extraTight",tight:"Polaris-ButtonGroup--tight",loose:"Polaris-ButtonGroup--loose",noWrap:"Polaris-ButtonGroup--noWrap"},o=n(95336);function c({button:e}){let{value:t,setTrue:n,setFalse:l}=(0,o.O)(!1),c=(0,i.AK)(r.Item,t&&r["Item-focused"],"plain"===e.props.variant&&r["Item-plain"]);return a.createElement("div",{className:c,onFocus:n,onBlur:l},e)}function s({children:e,gap:t,variant:n,fullWidth:o,connectedTop:s,noWrap:d}){let u=(0,i.AK)(r.ButtonGroup,t&&r[t],n&&r[(0,i.OZ)("variant",n)],o&&r.fullWidth,d&&r.noWrap),g=(0,l.gD)(e).map((e,t)=>a.createElement(c,{button:e,key:t}));return a.createElement("div",{className:u,"data-buttongroup-variant":n,"data-buttongroup-connected-top":s,"data-buttongroup-full-width":o,"data-buttongroup-no-wrap":d},g)}},53199:function(e,t,n){"use strict";n.d(t,{A:function(){return d}});var a=n(27378),i={Layout:"Polaris-Layout",Section:"Polaris-Layout__Section","Section-fullWidth":"Polaris-Layout__Section--fullWidth","Section-oneHalf":"Polaris-Layout__Section--oneHalf","Section-oneThird":"Polaris-Layout__Section--oneThird",AnnotatedSection:"Polaris-Layout__AnnotatedSection",AnnotationWrapper:"Polaris-Layout__AnnotationWrapper",AnnotationContent:"Polaris-Layout__AnnotationContent",Annotation:"Polaris-Layout__Annotation"},l=n(43774),r=n(88470),o=n(58330),c=n(39627);function s({children:e,variant:t}){let n=(0,c.AK)(i.Section,i[`Section-${t}`]);return a.createElement("div",{className:n},e)}let d=function({sectioned:e,children:t}){let n=e?a.createElement(s,null,t):t;return a.createElement("div",{className:i.Layout},n)};d.AnnotatedSection=function({children:e,title:t,description:n,id:c}){let s="string"==typeof n?a.createElement(r.x,{as:"p",variant:"bodyMd"},n):n;return a.createElement("div",{className:i.AnnotatedSection},a.createElement("div",{className:i.AnnotationWrapper},a.createElement("div",{className:i.Annotation},a.createElement(l.l,{spacing:"tight"},a.createElement(r.x,{id:c,variant:"headingMd",as:"h2"},t),s&&a.createElement(o.x,{color:"text-secondary"},s))),a.createElement("div",{className:i.AnnotationContent},e)))},d.Section=s},29324:function(e,t,n){"use strict";n.d(t,{z:function(){return y}});var a=n(27378),i=n(39627),l=n(95336),r=n(10952),o={LegacyCard:"Polaris-LegacyCard",Section:"Polaris-LegacyCard__Section",subdued:"Polaris-LegacyCard--subdued","Section-hideOnPrint":"Polaris-LegacyCard__Section--hideOnPrint",hideOnPrint:"Polaris-LegacyCard--hideOnPrint",Header:"Polaris-LegacyCard__Header","Section-fullWidth":"Polaris-LegacyCard__Section--fullWidth","Section-flush":"Polaris-LegacyCard__Section--flush","Section-subdued":"Polaris-LegacyCard__Section--subdued",SectionHeader:"Polaris-LegacyCard__SectionHeader",Subsection:"Polaris-LegacyCard__Subsection",Footer:"Polaris-LegacyCard__Footer",LeftJustified:"Polaris-LegacyCard__LeftJustified",FirstSectionPadding:"Polaris-LegacyCard__FirstSectionPadding",LastSectionPadding:"Polaris-LegacyCard__LastSectionPadding"},c=n(76928),s=n(84879),d=n(39355),u=n(88470);function g({children:e,title:t,actions:n}){let i=n?a.createElement(s.h,null,(0,c.B)(n,{variant:"plain"})):null,l=(0,a.isValidElement)(t)?t:a.createElement(u.x,{variant:"headingSm",as:"h2"},t),r=i||e?a.createElement(d.g,{wrap:!1,gap:"200",align:"space-between",blockAlign:"center"},l,a.createElement(d.g,{wrap:!1,gap:"400",blockAlign:"center"},i,e)):l;return a.createElement("div",{className:o.Header},r)}var m=n(97661);function p({children:e,title:t,subdued:n,flush:l,fullWidth:r,actions:d,hideOnPrint:g}){let p=(0,i.AK)(o.Section,l&&o["Section-flush"],n&&o["Section-subdued"],r&&o["Section-fullWidth"],g&&o["Section-hideOnPrint"]),S=d?a.createElement(s.h,null,(0,c.B)(d,{variant:"plain"})):null,h="string"==typeof t?a.createElement(u.x,{variant:"headingSm",as:"h3",fontWeight:"medium"},t):t,P=h||S?a.createElement("div",{className:o.SectionHeader},S?a.createElement(m.D,{alignment:"baseline"},a.createElement(m.D.Item,{fill:!0},h),S):h):null;return a.createElement("div",{className:p},P,e)}var S=n(57963),h=n(43389),P=n(33121),f=n(47693);let y=function({children:e,hideOnPrint:t,title:n,subdued:d,sectioned:u,actions:m,primaryFooterAction:y,secondaryFooterActions:E,secondaryFooterActionsDisclosureText:L,footerActionAlignment:_="right"}){let k=(0,S.Q)(),{value:v,toggle:b}=(0,l.O)(!1),T=function(){let e=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let t,n;let a=e.current;if(a){let i=()=>{let e;x(t,"top",!1),x(n,"bottom",!1);let i=a.querySelectorAll(`.${o.Section}, .${o.Header}, .${o.Footer}`);if(!i?.length)return;let l=i[0],r=(e=i[0],i.forEach(t=>{e.contains(t)||(e=t)}),e);a.firstChild?.contains(l)&&x(t=l,"top",!0),a.lastChild?.contains(r)&&x(n=r,"bottom",!0)};i();let l=new MutationObserver(i);return l.observe(a,{childList:!0,subtree:!0}),()=>{x(t,"top",!1),x(n,"bottom",!1),l.disconnect()}}},[]),e}(),C=(0,i.AK)(o.LegacyCard,d&&o.subdued,t&&o.hideOnPrint),j=n||m?a.createElement(g,{actions:m,title:n}):null,A=u?a.createElement(p,null,e):e,B=y?(0,c.h)(y,{variant:"primary"}):null,N=null;E&&E.length&&(N=1===E.length?(0,c.h)(E[0]):a.createElement(a.Fragment,null,a.createElement(h.J,{active:v,activator:a.createElement(P.z,{disclosure:!0,onClick:b},L||k.translate("Polaris.Common.more")),onClose:b},a.createElement(f.S,{items:E}))));let W=B||N?a.createElement("div",{className:(0,i.AK)(o.Footer,"left"===_&&o.LeftJustified)},"right"===_?a.createElement(s.h,null,N,B):a.createElement(s.h,null,B,N)):null;return a.createElement(r.O.Provider,{value:!0},a.createElement("div",{className:C,ref:T},j,A,W))};function x(e,t,n){if(!(!e||e.className.includes(o["Section-flush"])))switch(t){case"top":e.classList.toggle(o.FirstSectionPadding,n);return;case"bottom":e.classList.toggle(o.LastSectionPadding,n)}}y.Header=g,y.Section=p,y.Subsection=function({children:e}){return a.createElement("div",{className:o.Subsection},e)}},97661:function(e,t,n){"use strict";n.d(t,{D:function(){return c}});var a=n(27378),i=n(39627),l=n(26482),r={LegacyStack:"Polaris-LegacyStack",Item:"Polaris-LegacyStack__Item",noWrap:"Polaris-LegacyStack--noWrap",spacingNone:"Polaris-LegacyStack--spacingNone",spacingExtraTight:"Polaris-LegacyStack--spacingExtraTight",spacingTight:"Polaris-LegacyStack--spacingTight",spacingBaseTight:"Polaris-LegacyStack--spacingBaseTight",spacingLoose:"Polaris-LegacyStack--spacingLoose",spacingExtraLoose:"Polaris-LegacyStack--spacingExtraLoose",distributionLeading:"Polaris-LegacyStack--distributionLeading",distributionTrailing:"Polaris-LegacyStack--distributionTrailing",distributionCenter:"Polaris-LegacyStack--distributionCenter",distributionEqualSpacing:"Polaris-LegacyStack--distributionEqualSpacing",distributionFill:"Polaris-LegacyStack--distributionFill",distributionFillEvenly:"Polaris-LegacyStack--distributionFillEvenly",alignmentLeading:"Polaris-LegacyStack--alignmentLeading",alignmentTrailing:"Polaris-LegacyStack--alignmentTrailing",alignmentCenter:"Polaris-LegacyStack--alignmentCenter",alignmentFill:"Polaris-LegacyStack--alignmentFill",alignmentBaseline:"Polaris-LegacyStack--alignmentBaseline",vertical:"Polaris-LegacyStack--vertical","Item-fill":"Polaris-LegacyStack__Item--fill"};function o({children:e,fill:t}){let n=(0,i.AK)(r.Item,t&&r["Item-fill"]);return a.createElement("div",{className:n},e)}let c=(0,a.memo)(function({children:e,vertical:t,spacing:n,distribution:c,alignment:s,wrap:d}){let u=(0,i.AK)(r.LegacyStack,t&&r.vertical,n&&r[(0,i.OZ)("spacing",n)],c&&r[(0,i.OZ)("distribution",c)],s&&r[(0,i.OZ)("alignment",s)],!1===d&&r.noWrap),g=(0,l.gD)(e).map((e,t)=>(0,l.oh)(e,o,{key:t}));return a.createElement("div",{className:u},g)});c.Item=o},55207:function(e,t,n){"use strict";n.d(t,{j:function(){return l}});var a=n(27378),i={SkeletonBodyTextContainer:"Polaris-SkeletonBodyText__SkeletonBodyTextContainer",SkeletonBodyText:"Polaris-SkeletonBodyText"};function l({lines:e=3}){let t=[];for(let n=0;n<e;n++)t.push(a.createElement("div",{className:i.SkeletonBodyText,key:n}));return a.createElement("div",{className:i.SkeletonBodyTextContainer},t)}},85397:function(e,t,n){"use strict";n.d(t,{$:function(){return r}});var a=n(27378),i=n(39627),l={DisplayText:"Polaris-SkeletonDisplayText__DisplayText",sizeSmall:"Polaris-SkeletonDisplayText--sizeSmall",sizeMedium:"Polaris-SkeletonDisplayText--sizeMedium",sizeLarge:"Polaris-SkeletonDisplayText--sizeLarge",sizeExtraLarge:"Polaris-SkeletonDisplayText--sizeExtraLarge"};function r({size:e="medium"}){let t=(0,i.AK)(l.DisplayText,e&&l[(0,i.OZ)("size",e)]);return a.createElement("div",{className:t})}},99413:function(e,t,n){"use strict";n.d(t,{y:function(){return s}});var a=n(27378),i={Title:"Polaris-SkeletonPage__Title",SkeletonTitle:"Polaris-SkeletonPage__SkeletonTitle"},l=n(57963),r=n(58330),o=n(73260),c=n(39355);function s({children:e,fullWidth:t,narrowWidth:n,primaryAction:s,title:d="",backAction:u}){let g=(0,l.Q)(),m=d?a.createElement("h1",{className:i.Title},d):a.createElement("div",{className:i.SkeletonTitle},a.createElement(r.x,{background:"bg-fill-tertiary",minWidth:"120px",minHeight:"28px",borderRadius:"100"})),p=s?a.createElement(r.x,{id:"SkeletonPage-PrimaryAction",borderRadius:"100",background:"bg-fill-tertiary",minHeight:"2.25rem",minWidth:"6.25rem"}):null,S=u?a.createElement(r.x,{borderRadius:"100",background:"bg-fill-tertiary",minHeight:"2.25rem",minWidth:"2.25rem",maxWidth:"2.25rem"}):null;return a.createElement(o.E,{gap:"400",inlineAlign:"center"},a.createElement(r.x,Object.assign({width:"100%",padding:"0",paddingInlineStart:{sm:"600"},paddingInlineEnd:{sm:"600"},maxWidth:"var(--pc-skeleton-page-max-width)","aria-label":g.translate("Polaris.SkeletonPage.loadingLabel"),role:"status"},n&&{maxWidth:"var(--pc-skeleton-page-max-width-narrow)"},t&&{maxWidth:"none"}),a.createElement(o.E,null,a.createElement(r.x,{paddingBlockStart:{xs:"400",md:"500"},paddingBlockEnd:{xs:"400",md:"500"},paddingInlineStart:{xs:"400",sm:"0"},paddingInlineEnd:{xs:"400",sm:"0"},width:"100%"},a.createElement(c.g,{gap:"400",align:"space-between",blockAlign:"center"},a.createElement(c.g,{gap:"400"},S,a.createElement(r.x,{paddingBlockStart:"100",paddingBlockEnd:"100"},m)),p)),a.createElement(r.x,{paddingBlockEnd:"200",width:"100%"},e))))}},43774:function(e,t,n){"use strict";n.d(t,{l:function(){return r}});var a=n(27378),i=n(39627),l={TextContainer:"Polaris-TextContainer",spacingTight:"Polaris-TextContainer--spacingTight",spacingLoose:"Polaris-TextContainer--spacingLoose"};function r({spacing:e,children:t}){let n=(0,i.AK)(l.TextContainer,e&&l[(0,i.OZ)("spacing",e)]);return a.createElement("div",{className:n},t)}},10952:function(e,t,n){"use strict";n.d(t,{O:function(){return i}});var a=n(27378);let i=(0,a.createContext)(!1)}},function(e){e.O(0,[4515,3121,7298,2131,8073,7693,9774,2888,179],function(){return e(e.s=62589)}),_N_E=e.O()}]);