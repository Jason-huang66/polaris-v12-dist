(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9423],{17805:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/tabs-default",function(){return a(12479)}])},12479:function(e,t,a){"use strict";a.r(t);var n=a(24246),i=a(18133),r=a(29324),l=a(27378),c=a(64515);t.default=(0,c.y)(function(){let[e,t]=(0,l.useState)(0),a=(0,l.useCallback)(e=>t(e),[]),c=[{id:"all-customers-1",content:"All",accessibilityLabel:"All customers",panelID:"all-customers-content-1"},{id:"accepts-marketing-1",content:"Accepts marketing",panelID:"accepts-marketing-content-1"},{id:"repeat-customers-1",content:"Repeat customers",panelID:"repeat-customers-content-1"},{id:"prospects-1",content:"Prospects",panelID:"prospects-content-1"}];return(0,n.jsx)(i.m,{tabs:c,selected:e,onSelect:a,children:(0,n.jsx)(r.z.Section,{title:c[e].content,children:(0,n.jsxs)("p",{children:["Tab ",e," selected"]})})})})},84879:function(e,t,a){"use strict";a.d(t,{h:function(){return s}});var n=a(27378),i=a(39627),r=a(26482),l={ButtonGroup:"Polaris-ButtonGroup",Item:"Polaris-ButtonGroup__Item","Item-plain":"Polaris-ButtonGroup__Item--plain",variantSegmented:"Polaris-ButtonGroup--variantSegmented","Item-focused":"Polaris-ButtonGroup__Item--focused",fullWidth:"Polaris-ButtonGroup--fullWidth",extraTight:"Polaris-ButtonGroup--extraTight",tight:"Polaris-ButtonGroup--tight",loose:"Polaris-ButtonGroup--loose",noWrap:"Polaris-ButtonGroup--noWrap"},c=a(95336);function o({button:e}){let{value:t,setTrue:a,setFalse:r}=(0,c.O)(!1),o=(0,i.AK)(l.Item,t&&l["Item-focused"],"plain"===e.props.variant&&l["Item-plain"]);return n.createElement("div",{className:o,onFocus:a,onBlur:r},e)}function s({children:e,gap:t,variant:a,fullWidth:c,connectedTop:s,noWrap:u}){let d=(0,i.AK)(l.ButtonGroup,t&&l[t],a&&l[(0,i.OZ)("variant",a)],c&&l.fullWidth,u&&l.noWrap),g=(0,r.gD)(e).map((e,t)=>n.createElement(o,{button:e,key:t}));return n.createElement("div",{className:d,"data-buttongroup-variant":a,"data-buttongroup-connected-top":s,"data-buttongroup-full-width":c,"data-buttongroup-no-wrap":u},g)}},29324:function(e,t,a){"use strict";a.d(t,{z:function(){return h}});var n=a(27378),i=a(39627),r=a(95336),l=a(10952),c={LegacyCard:"Polaris-LegacyCard",Section:"Polaris-LegacyCard__Section",subdued:"Polaris-LegacyCard--subdued","Section-hideOnPrint":"Polaris-LegacyCard__Section--hideOnPrint",hideOnPrint:"Polaris-LegacyCard--hideOnPrint",Header:"Polaris-LegacyCard__Header","Section-fullWidth":"Polaris-LegacyCard__Section--fullWidth","Section-flush":"Polaris-LegacyCard__Section--flush","Section-subdued":"Polaris-LegacyCard__Section--subdued",SectionHeader:"Polaris-LegacyCard__SectionHeader",Subsection:"Polaris-LegacyCard__Subsection",Footer:"Polaris-LegacyCard__Footer",LeftJustified:"Polaris-LegacyCard__LeftJustified",FirstSectionPadding:"Polaris-LegacyCard__FirstSectionPadding",LastSectionPadding:"Polaris-LegacyCard__LastSectionPadding"},o=a(76928),s=a(84879),u=a(39355),d=a(88470);function g({children:e,title:t,actions:a}){let i=a?n.createElement(s.h,null,(0,o.B)(a,{variant:"plain"})):null,r=(0,n.isValidElement)(t)?t:n.createElement(d.x,{variant:"headingSm",as:"h2"},t),l=i||e?n.createElement(u.g,{wrap:!1,gap:"200",align:"space-between",blockAlign:"center"},r,n.createElement(u.g,{wrap:!1,gap:"400",blockAlign:"center"},i,e)):r;return n.createElement("div",{className:c.Header},l)}var m=a(97661);function p({children:e,title:t,subdued:a,flush:r,fullWidth:l,actions:u,hideOnPrint:g}){let p=(0,i.AK)(c.Section,r&&c["Section-flush"],a&&c["Section-subdued"],l&&c["Section-fullWidth"],g&&c["Section-hideOnPrint"]),S=u?n.createElement(s.h,null,(0,o.B)(u,{variant:"plain"})):null,f="string"==typeof t?n.createElement(d.x,{variant:"headingSm",as:"h3",fontWeight:"medium"},t):t,P=f||S?n.createElement("div",{className:c.SectionHeader},S?n.createElement(m.D,{alignment:"baseline"},n.createElement(m.D.Item,{fill:!0},f),S):f):null;return n.createElement("div",{className:p},P,e)}var S=a(57963),f=a(43389),P=a(33121),L=a(47693);let h=function({children:e,hideOnPrint:t,title:a,subdued:u,sectioned:d,actions:m,primaryFooterAction:h,secondaryFooterActions:b,secondaryFooterActionsDisclosureText:_,footerActionAlignment:E="right"}){let v=(0,S.Q)(),{value:k,toggle:C}=(0,r.O)(!1),I=function(){let e=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let t,a;let n=e.current;if(n){let i=()=>{let e;y(t,"top",!1),y(a,"bottom",!1);let i=n.querySelectorAll(`.${c.Section}, .${c.Header}, .${c.Footer}`);if(!i?.length)return;let r=i[0],l=(e=i[0],i.forEach(t=>{e.contains(t)||(e=t)}),e);n.firstChild?.contains(r)&&y(t=r,"top",!0),n.lastChild?.contains(l)&&y(a=l,"bottom",!0)};i();let r=new MutationObserver(i);return r.observe(n,{childList:!0,subtree:!0}),()=>{y(t,"top",!1),y(a,"bottom",!1),r.disconnect()}}},[]),e}(),B=(0,i.AK)(c.LegacyCard,u&&c.subdued,t&&c.hideOnPrint),N=a||m?n.createElement(g,{actions:m,title:a}):null,O=d?n.createElement(p,null,e):e,F=h?(0,o.h)(h,{variant:"primary"}):null,T=null;b&&b.length&&(T=1===b.length?(0,o.h)(b[0]):n.createElement(n.Fragment,null,n.createElement(f.J,{active:k,activator:n.createElement(P.z,{disclosure:!0,onClick:C},_||v.translate("Polaris.Common.more")),onClose:C},n.createElement(L.S,{items:b}))));let w=F||T?n.createElement("div",{className:(0,i.AK)(c.Footer,"left"===E&&c.LeftJustified)},"right"===E?n.createElement(s.h,null,T,F):n.createElement(s.h,null,F,T)):null;return n.createElement(l.O.Provider,{value:!0},n.createElement("div",{className:B,ref:I},N,O,w))};function y(e,t,a){if(!(!e||e.className.includes(c["Section-flush"])))switch(t){case"top":e.classList.toggle(c.FirstSectionPadding,a);return;case"bottom":e.classList.toggle(c.LastSectionPadding,a)}}h.Header=g,h.Section=p,h.Subsection=function({children:e}){return n.createElement("div",{className:c.Subsection},e)}},97661:function(e,t,a){"use strict";a.d(t,{D:function(){return o}});var n=a(27378),i=a(39627),r=a(26482),l={LegacyStack:"Polaris-LegacyStack",Item:"Polaris-LegacyStack__Item",noWrap:"Polaris-LegacyStack--noWrap",spacingNone:"Polaris-LegacyStack--spacingNone",spacingExtraTight:"Polaris-LegacyStack--spacingExtraTight",spacingTight:"Polaris-LegacyStack--spacingTight",spacingBaseTight:"Polaris-LegacyStack--spacingBaseTight",spacingLoose:"Polaris-LegacyStack--spacingLoose",spacingExtraLoose:"Polaris-LegacyStack--spacingExtraLoose",distributionLeading:"Polaris-LegacyStack--distributionLeading",distributionTrailing:"Polaris-LegacyStack--distributionTrailing",distributionCenter:"Polaris-LegacyStack--distributionCenter",distributionEqualSpacing:"Polaris-LegacyStack--distributionEqualSpacing",distributionFill:"Polaris-LegacyStack--distributionFill",distributionFillEvenly:"Polaris-LegacyStack--distributionFillEvenly",alignmentLeading:"Polaris-LegacyStack--alignmentLeading",alignmentTrailing:"Polaris-LegacyStack--alignmentTrailing",alignmentCenter:"Polaris-LegacyStack--alignmentCenter",alignmentFill:"Polaris-LegacyStack--alignmentFill",alignmentBaseline:"Polaris-LegacyStack--alignmentBaseline",vertical:"Polaris-LegacyStack--vertical","Item-fill":"Polaris-LegacyStack__Item--fill"};function c({children:e,fill:t}){let a=(0,i.AK)(l.Item,t&&l["Item-fill"]);return n.createElement("div",{className:a},e)}let o=(0,n.memo)(function({children:e,vertical:t,spacing:a,distribution:o,alignment:s,wrap:u}){let d=(0,i.AK)(l.LegacyStack,t&&l.vertical,a&&l[(0,i.OZ)("spacing",a)],o&&l[(0,i.OZ)("distribution",o)],s&&l[(0,i.OZ)("alignment",s)],!1===u&&l.noWrap),g=(0,r.gD)(e).map((e,t)=>(0,r.oh)(e,c,{key:t}));return n.createElement("div",{className:d},g)});o.Item=c},10952:function(e,t,a){"use strict";a.d(t,{O:function(){return i}});var n=a(27378);let i=(0,n.createContext)(!1)}},function(e){e.O(0,[7162,4515,3121,7298,2131,8073,7693,5293,8133,9774,2888,179],function(){return e(e.s=17805)}),_N_E=e.O()}]);