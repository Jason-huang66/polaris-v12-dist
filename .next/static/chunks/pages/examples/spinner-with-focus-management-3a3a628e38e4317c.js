(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6079],{75123:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/spinner-with-focus-management",function(){return a(71239)}])},71239:function(e,t,a){"use strict";a.r(t);var n=a(24246),i=a(73778),l=a(54629),r=a(76447),c=a(27298),o=a(33121),s=a(29324),u=a(18133),d=a(27378),g=a(64515);t.default=(0,g.y)(function(){let e=(0,d.useRef)([{id:"all-customers",content:"All",accessibilityLabel:"All customers",panelID:"all-customers-content"},{id:"accepts-marketing",content:"Accepts marketing",panelID:"accepts-marketing-content"}]),[t,a]=(0,d.useState)(0),[g,m]=(0,d.useState)(!1),[f,p]=(0,d.useState)(""),[S,P]=(0,d.useState)(!1);(0,d.useEffect)(()=>{P(!g)},[g]);let h=(0,d.useCallback)(e=>{m(!0),a(e),setTimeout(()=>(p(""),m(!1)),1500)},[]),L=(0,d.useCallback)(e=>p(e),[]),b=(0,d.useCallback)(()=>p(""),[]),y=g?(0,n.jsx)(i.$,{accessibilityLabel:"Loading form field",hasFocusableParent:!1}):(0,n.jsx)(l.l,{noValidate:!0,onSubmit:b,children:(0,n.jsxs)(r.l,{children:[(0,n.jsx)(c.n,{value:f,focused:S,onChange:L,label:t?"Marketing":"Customers",autoComplete:"off"}),(0,n.jsx)(o.z,{submit:!0,children:"Submit"})]})});return(0,n.jsx)(s.z,{children:(0,n.jsx)(u.m,{tabs:e.current,selected:t,onSelect:h,children:(0,n.jsx)(s.z.Section,{title:e.current[t].content,children:y})})})})},84879:function(e,t,a){"use strict";a.d(t,{h:function(){return s}});var n=a(27378),i=a(39627),l=a(26482),r={ButtonGroup:"Polaris-ButtonGroup",Item:"Polaris-ButtonGroup__Item","Item-plain":"Polaris-ButtonGroup__Item--plain",variantSegmented:"Polaris-ButtonGroup--variantSegmented","Item-focused":"Polaris-ButtonGroup__Item--focused",fullWidth:"Polaris-ButtonGroup--fullWidth",extraTight:"Polaris-ButtonGroup--extraTight",tight:"Polaris-ButtonGroup--tight",loose:"Polaris-ButtonGroup--loose",noWrap:"Polaris-ButtonGroup--noWrap"},c=a(95336);function o({button:e}){let{value:t,setTrue:a,setFalse:l}=(0,c.O)(!1),o=(0,i.AK)(r.Item,t&&r["Item-focused"],"plain"===e.props.variant&&r["Item-plain"]);return n.createElement("div",{className:o,onFocus:a,onBlur:l},e)}function s({children:e,gap:t,variant:a,fullWidth:c,connectedTop:s,noWrap:u}){let d=(0,i.AK)(r.ButtonGroup,t&&r[t],a&&r[(0,i.OZ)("variant",a)],c&&r.fullWidth,u&&r.noWrap),g=(0,l.gD)(e).map((e,t)=>n.createElement(o,{button:e,key:t}));return n.createElement("div",{className:d,"data-buttongroup-variant":a,"data-buttongroup-connected-top":s,"data-buttongroup-full-width":c,"data-buttongroup-no-wrap":u},g)}},29324:function(e,t,a){"use strict";a.d(t,{z:function(){return L}});var n=a(27378),i=a(39627),l=a(95336),r=a(10952),c={LegacyCard:"Polaris-LegacyCard",Section:"Polaris-LegacyCard__Section",subdued:"Polaris-LegacyCard--subdued","Section-hideOnPrint":"Polaris-LegacyCard__Section--hideOnPrint",hideOnPrint:"Polaris-LegacyCard--hideOnPrint",Header:"Polaris-LegacyCard__Header","Section-fullWidth":"Polaris-LegacyCard__Section--fullWidth","Section-flush":"Polaris-LegacyCard__Section--flush","Section-subdued":"Polaris-LegacyCard__Section--subdued",SectionHeader:"Polaris-LegacyCard__SectionHeader",Subsection:"Polaris-LegacyCard__Subsection",Footer:"Polaris-LegacyCard__Footer",LeftJustified:"Polaris-LegacyCard__LeftJustified",FirstSectionPadding:"Polaris-LegacyCard__FirstSectionPadding",LastSectionPadding:"Polaris-LegacyCard__LastSectionPadding"},o=a(76928),s=a(84879),u=a(39355),d=a(88470);function g({children:e,title:t,actions:a}){let i=a?n.createElement(s.h,null,(0,o.B)(a,{variant:"plain"})):null,l=(0,n.isValidElement)(t)?t:n.createElement(d.x,{variant:"headingSm",as:"h2"},t),r=i||e?n.createElement(u.g,{wrap:!1,gap:"200",align:"space-between",blockAlign:"center"},l,n.createElement(u.g,{wrap:!1,gap:"400",blockAlign:"center"},i,e)):l;return n.createElement("div",{className:c.Header},r)}var m=a(97661);function f({children:e,title:t,subdued:a,flush:l,fullWidth:r,actions:u,hideOnPrint:g}){let f=(0,i.AK)(c.Section,l&&c["Section-flush"],a&&c["Section-subdued"],r&&c["Section-fullWidth"],g&&c["Section-hideOnPrint"]),p=u?n.createElement(s.h,null,(0,o.B)(u,{variant:"plain"})):null,S="string"==typeof t?n.createElement(d.x,{variant:"headingSm",as:"h3",fontWeight:"medium"},t):t,P=S||p?n.createElement("div",{className:c.SectionHeader},p?n.createElement(m.D,{alignment:"baseline"},n.createElement(m.D.Item,{fill:!0},S),p):S):null;return n.createElement("div",{className:f},P,e)}var p=a(57963),S=a(43389),P=a(33121),h=a(47693);let L=function({children:e,hideOnPrint:t,title:a,subdued:u,sectioned:d,actions:m,primaryFooterAction:L,secondaryFooterActions:y,secondaryFooterActionsDisclosureText:_,footerActionAlignment:E="right"}){let v=(0,p.Q)(),{value:k,toggle:C}=(0,l.O)(!1),B=function(){let e=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let t,a;let n=e.current;if(n){let i=()=>{let e;b(t,"top",!1),b(a,"bottom",!1);let i=n.querySelectorAll(`.${c.Section}, .${c.Header}, .${c.Footer}`);if(!i?.length)return;let l=i[0],r=(e=i[0],i.forEach(t=>{e.contains(t)||(e=t)}),e);n.firstChild?.contains(l)&&b(t=l,"top",!0),n.lastChild?.contains(r)&&b(a=r,"bottom",!0)};i();let l=new MutationObserver(i);return l.observe(n,{childList:!0,subtree:!0}),()=>{b(t,"top",!1),b(a,"bottom",!1),l.disconnect()}}},[]),e}(),I=(0,i.AK)(c.LegacyCard,u&&c.subdued,t&&c.hideOnPrint),x=a||m?n.createElement(g,{actions:m,title:a}):null,N=d?n.createElement(f,null,e):e,F=L?(0,o.h)(L,{variant:"primary"}):null,O=null;y&&y.length&&(O=1===y.length?(0,o.h)(y[0]):n.createElement(n.Fragment,null,n.createElement(S.J,{active:k,activator:n.createElement(P.z,{disclosure:!0,onClick:C},_||v.translate("Polaris.Common.more")),onClose:C},n.createElement(h.S,{items:y}))));let T=F||O?n.createElement("div",{className:(0,i.AK)(c.Footer,"left"===E&&c.LeftJustified)},"right"===E?n.createElement(s.h,null,O,F):n.createElement(s.h,null,F,O)):null;return n.createElement(r.O.Provider,{value:!0},n.createElement("div",{className:I,ref:B},x,N,T))};function b(e,t,a){if(!(!e||e.className.includes(c["Section-flush"])))switch(t){case"top":e.classList.toggle(c.FirstSectionPadding,a);return;case"bottom":e.classList.toggle(c.LastSectionPadding,a)}}L.Header=g,L.Section=f,L.Subsection=function({children:e}){return n.createElement("div",{className:c.Subsection},e)}},97661:function(e,t,a){"use strict";a.d(t,{D:function(){return o}});var n=a(27378),i=a(39627),l=a(26482),r={LegacyStack:"Polaris-LegacyStack",Item:"Polaris-LegacyStack__Item",noWrap:"Polaris-LegacyStack--noWrap",spacingNone:"Polaris-LegacyStack--spacingNone",spacingExtraTight:"Polaris-LegacyStack--spacingExtraTight",spacingTight:"Polaris-LegacyStack--spacingTight",spacingBaseTight:"Polaris-LegacyStack--spacingBaseTight",spacingLoose:"Polaris-LegacyStack--spacingLoose",spacingExtraLoose:"Polaris-LegacyStack--spacingExtraLoose",distributionLeading:"Polaris-LegacyStack--distributionLeading",distributionTrailing:"Polaris-LegacyStack--distributionTrailing",distributionCenter:"Polaris-LegacyStack--distributionCenter",distributionEqualSpacing:"Polaris-LegacyStack--distributionEqualSpacing",distributionFill:"Polaris-LegacyStack--distributionFill",distributionFillEvenly:"Polaris-LegacyStack--distributionFillEvenly",alignmentLeading:"Polaris-LegacyStack--alignmentLeading",alignmentTrailing:"Polaris-LegacyStack--alignmentTrailing",alignmentCenter:"Polaris-LegacyStack--alignmentCenter",alignmentFill:"Polaris-LegacyStack--alignmentFill",alignmentBaseline:"Polaris-LegacyStack--alignmentBaseline",vertical:"Polaris-LegacyStack--vertical","Item-fill":"Polaris-LegacyStack__Item--fill"};function c({children:e,fill:t}){let a=(0,i.AK)(r.Item,t&&r["Item-fill"]);return n.createElement("div",{className:a},e)}let o=(0,n.memo)(function({children:e,vertical:t,spacing:a,distribution:o,alignment:s,wrap:u}){let d=(0,i.AK)(r.LegacyStack,t&&r.vertical,a&&r[(0,i.OZ)("spacing",a)],o&&r[(0,i.OZ)("distribution",o)],s&&r[(0,i.OZ)("alignment",s)],!1===u&&r.noWrap),g=(0,l.gD)(e).map((e,t)=>(0,l.oh)(e,c,{key:t}));return n.createElement("div",{className:d},g)});o.Item=c},10952:function(e,t,a){"use strict";a.d(t,{O:function(){return i}});var n=a(27378);let i=(0,n.createContext)(!1)}},function(e){e.O(0,[7162,4515,3121,7298,2131,8073,7693,5293,8133,9774,2888,179],function(){return e(e.s=75123)}),_N_E=e.O()}]);