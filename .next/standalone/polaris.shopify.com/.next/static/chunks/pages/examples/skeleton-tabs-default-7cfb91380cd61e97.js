(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[419],{44892:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/skeleton-tabs-default",function(){return a(7250)}])},7250:function(e,t,a){"use strict";a.r(t);var n=a(24246),i=a(29324),r=a(86167);a(27378);var l=a(64515);t.default=(0,l.y)(function(){return(0,n.jsx)(i.z,{children:(0,n.jsx)(r.S,{})})})},84879:function(e,t,a){"use strict";a.d(t,{h:function(){return s}});var n=a(27378),i=a(39627),r=a(26482),l={ButtonGroup:"Polaris-ButtonGroup",Item:"Polaris-ButtonGroup__Item","Item-plain":"Polaris-ButtonGroup__Item--plain",variantSegmented:"Polaris-ButtonGroup--variantSegmented","Item-focused":"Polaris-ButtonGroup__Item--focused",fullWidth:"Polaris-ButtonGroup--fullWidth",extraTight:"Polaris-ButtonGroup--extraTight",tight:"Polaris-ButtonGroup--tight",loose:"Polaris-ButtonGroup--loose",noWrap:"Polaris-ButtonGroup--noWrap"},o=a(95336);function c({button:e}){let{value:t,setTrue:a,setFalse:r}=(0,o.O)(!1),c=(0,i.AK)(l.Item,t&&l["Item-focused"],"plain"===e.props.variant&&l["Item-plain"]);return n.createElement("div",{className:c,onFocus:a,onBlur:r},e)}function s({children:e,gap:t,variant:a,fullWidth:o,connectedTop:s,noWrap:u}){let d=(0,i.AK)(l.ButtonGroup,t&&l[t],a&&l[(0,i.OZ)("variant",a)],o&&l.fullWidth,u&&l.noWrap),g=(0,r.gD)(e).map((e,t)=>n.createElement(c,{button:e,key:t}));return n.createElement("div",{className:d,"data-buttongroup-variant":a,"data-buttongroup-connected-top":s,"data-buttongroup-full-width":o,"data-buttongroup-no-wrap":u},g)}},29324:function(e,t,a){"use strict";a.d(t,{z:function(){return h}});var n=a(27378),i=a(39627),r=a(95336),l=a(10952),o={LegacyCard:"Polaris-LegacyCard",Section:"Polaris-LegacyCard__Section",subdued:"Polaris-LegacyCard--subdued","Section-hideOnPrint":"Polaris-LegacyCard__Section--hideOnPrint",hideOnPrint:"Polaris-LegacyCard--hideOnPrint",Header:"Polaris-LegacyCard__Header","Section-fullWidth":"Polaris-LegacyCard__Section--fullWidth","Section-flush":"Polaris-LegacyCard__Section--flush","Section-subdued":"Polaris-LegacyCard__Section--subdued",SectionHeader:"Polaris-LegacyCard__SectionHeader",Subsection:"Polaris-LegacyCard__Subsection",Footer:"Polaris-LegacyCard__Footer",LeftJustified:"Polaris-LegacyCard__LeftJustified",FirstSectionPadding:"Polaris-LegacyCard__FirstSectionPadding",LastSectionPadding:"Polaris-LegacyCard__LastSectionPadding"},c=a(76928),s=a(84879),u=a(39355),d=a(88470);function g({children:e,title:t,actions:a}){let i=a?n.createElement(s.h,null,(0,c.B)(a,{variant:"plain"})):null,r=(0,n.isValidElement)(t)?t:n.createElement(d.x,{variant:"headingSm",as:"h2"},t),l=i||e?n.createElement(u.g,{wrap:!1,gap:"200",align:"space-between",blockAlign:"center"},r,n.createElement(u.g,{wrap:!1,gap:"400",blockAlign:"center"},i,e)):r;return n.createElement("div",{className:o.Header},l)}var m=a(97661);function S({children:e,title:t,subdued:a,flush:r,fullWidth:l,actions:u,hideOnPrint:g}){let S=(0,i.AK)(o.Section,r&&o["Section-flush"],a&&o["Section-subdued"],l&&o["Section-fullWidth"],g&&o["Section-hideOnPrint"]),f=u?n.createElement(s.h,null,(0,c.B)(u,{variant:"plain"})):null,P="string"==typeof t?n.createElement(d.x,{variant:"headingSm",as:"h3",fontWeight:"medium"},t):t,p=P||f?n.createElement("div",{className:o.SectionHeader},f?n.createElement(m.D,{alignment:"baseline"},n.createElement(m.D.Item,{fill:!0},P),f):P):null;return n.createElement("div",{className:S},p,e)}var f=a(57963),P=a(43389),p=a(33121),y=a(47693);let h=function({children:e,hideOnPrint:t,title:a,subdued:u,sectioned:d,actions:m,primaryFooterAction:h,secondaryFooterActions:L,secondaryFooterActionsDisclosureText:_,footerActionAlignment:E="right"}){let k=(0,f.Q)(),{value:v,toggle:T}=(0,r.O)(!1),C=function(){let e=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let t,a;let n=e.current;if(n){let i=()=>{let e;b(t,"top",!1),b(a,"bottom",!1);let i=n.querySelectorAll(`.${o.Section}, .${o.Header}, .${o.Footer}`);if(!i?.length)return;let r=i[0],l=(e=i[0],i.forEach(t=>{e.contains(t)||(e=t)}),e);n.firstChild?.contains(r)&&b(t=r,"top",!0),n.lastChild?.contains(l)&&b(a=l,"bottom",!0)};i();let r=new MutationObserver(i);return r.observe(n,{childList:!0,subtree:!0}),()=>{b(t,"top",!1),b(a,"bottom",!1),r.disconnect()}}},[]),e}(),B=(0,i.AK)(o.LegacyCard,u&&o.subdued,t&&o.hideOnPrint),N=a||m?n.createElement(g,{actions:m,title:a}):null,x=d?n.createElement(S,null,e):e,I=h?(0,c.h)(h,{variant:"primary"}):null,O=null;L&&L.length&&(O=1===L.length?(0,c.h)(L[0]):n.createElement(n.Fragment,null,n.createElement(P.J,{active:v,activator:n.createElement(p.z,{disclosure:!0,onClick:T},_||k.translate("Polaris.Common.more")),onClose:T},n.createElement(y.S,{items:L}))));let F=I||O?n.createElement("div",{className:(0,i.AK)(o.Footer,"left"===E&&o.LeftJustified)},"right"===E?n.createElement(s.h,null,O,I):n.createElement(s.h,null,I,O)):null;return n.createElement(l.O.Provider,{value:!0},n.createElement("div",{className:B,ref:C},N,x,F))};function b(e,t,a){if(!(!e||e.className.includes(o["Section-flush"])))switch(t){case"top":e.classList.toggle(o.FirstSectionPadding,a);return;case"bottom":e.classList.toggle(o.LastSectionPadding,a)}}h.Header=g,h.Section=S,h.Subsection=function({children:e}){return n.createElement("div",{className:o.Subsection},e)}},97661:function(e,t,a){"use strict";a.d(t,{D:function(){return c}});var n=a(27378),i=a(39627),r=a(26482),l={LegacyStack:"Polaris-LegacyStack",Item:"Polaris-LegacyStack__Item",noWrap:"Polaris-LegacyStack--noWrap",spacingNone:"Polaris-LegacyStack--spacingNone",spacingExtraTight:"Polaris-LegacyStack--spacingExtraTight",spacingTight:"Polaris-LegacyStack--spacingTight",spacingBaseTight:"Polaris-LegacyStack--spacingBaseTight",spacingLoose:"Polaris-LegacyStack--spacingLoose",spacingExtraLoose:"Polaris-LegacyStack--spacingExtraLoose",distributionLeading:"Polaris-LegacyStack--distributionLeading",distributionTrailing:"Polaris-LegacyStack--distributionTrailing",distributionCenter:"Polaris-LegacyStack--distributionCenter",distributionEqualSpacing:"Polaris-LegacyStack--distributionEqualSpacing",distributionFill:"Polaris-LegacyStack--distributionFill",distributionFillEvenly:"Polaris-LegacyStack--distributionFillEvenly",alignmentLeading:"Polaris-LegacyStack--alignmentLeading",alignmentTrailing:"Polaris-LegacyStack--alignmentTrailing",alignmentCenter:"Polaris-LegacyStack--alignmentCenter",alignmentFill:"Polaris-LegacyStack--alignmentFill",alignmentBaseline:"Polaris-LegacyStack--alignmentBaseline",vertical:"Polaris-LegacyStack--vertical","Item-fill":"Polaris-LegacyStack__Item--fill"};function o({children:e,fill:t}){let a=(0,i.AK)(l.Item,t&&l["Item-fill"]);return n.createElement("div",{className:a},e)}let c=(0,n.memo)(function({children:e,vertical:t,spacing:a,distribution:c,alignment:s,wrap:u}){let d=(0,i.AK)(l.LegacyStack,t&&l.vertical,a&&l[(0,i.OZ)("spacing",a)],c&&l[(0,i.OZ)("distribution",c)],s&&l[(0,i.OZ)("alignment",s)],!1===u&&l.noWrap),g=(0,r.gD)(e).map((e,t)=>(0,r.oh)(e,o,{key:t}));return n.createElement("div",{className:d},g)});c.Item=o},55207:function(e,t,a){"use strict";a.d(t,{j:function(){return r}});var n=a(27378),i={SkeletonBodyTextContainer:"Polaris-SkeletonBodyText__SkeletonBodyTextContainer",SkeletonBodyText:"Polaris-SkeletonBodyText"};function r({lines:e=3}){let t=[];for(let a=0;a<e;a++)t.push(n.createElement("div",{className:i.SkeletonBodyText,key:a}));return n.createElement("div",{className:i.SkeletonBodyTextContainer},t)}},86167:function(e,t,a){"use strict";a.d(t,{S:function(){return o}});var n=a(27378),i=a(39627),r={Tabs:"Polaris-SkeletonTabs__Tabs",Tab:"Polaris-SkeletonTabs__Tab","Tab-short":"Polaris-SkeletonTabs__Tab--short","Tab-long":"Polaris-SkeletonTabs__Tab--long"},l=a(55207);function o({count:e=2}){return n.createElement("div",{className:r.Tabs},[...Array(e).keys()].map(e=>{let t=e%2==0?r["Tab-short"]:r["Tab-long"];return n.createElement("div",{key:e,className:(0,i.AK)(r.Tab,t)},n.createElement(l.j,{lines:1}))}))}},10952:function(e,t,a){"use strict";a.d(t,{O:function(){return i}});var n=a(27378);let i=(0,n.createContext)(!1)}},function(e){e.O(0,[4515,3121,7298,2131,8073,7693,9774,2888,179],function(){return e(e.s=44892)}),_N_E=e.O()}]);