(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2579],{61783:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/legacy-card-with-subdued-for-secondary-content",function(){return a(15423)}])},15423:function(e,t,a){"use strict";a.r(t);var i=a(24246),n=a(29324),r=a(21248);a(27378);var l=a(64515);t.default=(0,l.y)(function(){return(0,i.jsx)(n.z,{title:"Deactivated staff accounts",sectioned:!0,subdued:!0,children:(0,i.jsxs)(r.a,{children:[(0,i.jsx)(r.a.Item,{children:"Felix Crafford"}),(0,i.jsx)(r.a.Item,{children:"Ezequiel Manno"})]})})})},84879:function(e,t,a){"use strict";a.d(t,{h:function(){return s}});var i=a(27378),n=a(39627),r=a(26482),l={ButtonGroup:"Polaris-ButtonGroup",Item:"Polaris-ButtonGroup__Item","Item-plain":"Polaris-ButtonGroup__Item--plain",variantSegmented:"Polaris-ButtonGroup--variantSegmented","Item-focused":"Polaris-ButtonGroup__Item--focused",fullWidth:"Polaris-ButtonGroup--fullWidth",extraTight:"Polaris-ButtonGroup--extraTight",tight:"Polaris-ButtonGroup--tight",loose:"Polaris-ButtonGroup--loose",noWrap:"Polaris-ButtonGroup--noWrap"},o=a(95336);function c({button:e}){let{value:t,setTrue:a,setFalse:r}=(0,o.O)(!1),c=(0,n.AK)(l.Item,t&&l["Item-focused"],"plain"===e.props.variant&&l["Item-plain"]);return i.createElement("div",{className:c,onFocus:a,onBlur:r},e)}function s({children:e,gap:t,variant:a,fullWidth:o,connectedTop:s,noWrap:u}){let d=(0,n.AK)(l.ButtonGroup,t&&l[t],a&&l[(0,n.OZ)("variant",a)],o&&l.fullWidth,u&&l.noWrap),g=(0,r.gD)(e).map((e,t)=>i.createElement(c,{button:e,key:t}));return i.createElement("div",{className:d,"data-buttongroup-variant":a,"data-buttongroup-connected-top":s,"data-buttongroup-full-width":o,"data-buttongroup-no-wrap":u},g)}},29324:function(e,t,a){"use strict";a.d(t,{z:function(){return h}});var i=a(27378),n=a(39627),r=a(95336),l=a(10952),o={LegacyCard:"Polaris-LegacyCard",Section:"Polaris-LegacyCard__Section",subdued:"Polaris-LegacyCard--subdued","Section-hideOnPrint":"Polaris-LegacyCard__Section--hideOnPrint",hideOnPrint:"Polaris-LegacyCard--hideOnPrint",Header:"Polaris-LegacyCard__Header","Section-fullWidth":"Polaris-LegacyCard__Section--fullWidth","Section-flush":"Polaris-LegacyCard__Section--flush","Section-subdued":"Polaris-LegacyCard__Section--subdued",SectionHeader:"Polaris-LegacyCard__SectionHeader",Subsection:"Polaris-LegacyCard__Subsection",Footer:"Polaris-LegacyCard__Footer",LeftJustified:"Polaris-LegacyCard__LeftJustified",FirstSectionPadding:"Polaris-LegacyCard__FirstSectionPadding",LastSectionPadding:"Polaris-LegacyCard__LastSectionPadding"},c=a(76928),s=a(84879),u=a(39355),d=a(88470);function g({children:e,title:t,actions:a}){let n=a?i.createElement(s.h,null,(0,c.B)(a,{variant:"plain"})):null,r=(0,i.isValidElement)(t)?t:i.createElement(d.x,{variant:"headingSm",as:"h2"},t),l=n||e?i.createElement(u.g,{wrap:!1,gap:"200",align:"space-between",blockAlign:"center"},r,i.createElement(u.g,{wrap:!1,gap:"400",blockAlign:"center"},n,e)):r;return i.createElement("div",{className:o.Header},l)}var m=a(97661);function f({children:e,title:t,subdued:a,flush:r,fullWidth:l,actions:u,hideOnPrint:g}){let f=(0,n.AK)(o.Section,r&&o["Section-flush"],a&&o["Section-subdued"],l&&o["Section-fullWidth"],g&&o["Section-hideOnPrint"]),p=u?i.createElement(s.h,null,(0,c.B)(u,{variant:"plain"})):null,P="string"==typeof t?i.createElement(d.x,{variant:"headingSm",as:"h3",fontWeight:"medium"},t):t,L=P||p?i.createElement("div",{className:o.SectionHeader},p?i.createElement(m.D,{alignment:"baseline"},i.createElement(m.D.Item,{fill:!0},P),p):P):null;return i.createElement("div",{className:f},L,e)}var p=a(57963),P=a(43389),L=a(33121),S=a(47693);let h=function({children:e,hideOnPrint:t,title:a,subdued:u,sectioned:d,actions:m,primaryFooterAction:h,secondaryFooterActions:_,secondaryFooterActionsDisclosureText:b,footerActionAlignment:E="right"}){let v=(0,p.Q)(),{value:k,toggle:C}=(0,r.O)(!1),I=function(){let e=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let t,a;let i=e.current;if(i){let n=()=>{let e;y(t,"top",!1),y(a,"bottom",!1);let n=i.querySelectorAll(`.${o.Section}, .${o.Header}, .${o.Footer}`);if(!n?.length)return;let r=n[0],l=(e=n[0],n.forEach(t=>{e.contains(t)||(e=t)}),e);i.firstChild?.contains(r)&&y(t=r,"top",!0),i.lastChild?.contains(l)&&y(a=l,"bottom",!0)};n();let r=new MutationObserver(n);return r.observe(i,{childList:!0,subtree:!0}),()=>{y(t,"top",!1),y(a,"bottom",!1),r.disconnect()}}},[]),e}(),N=(0,n.AK)(o.LegacyCard,u&&o.subdued,t&&o.hideOnPrint),B=a||m?i.createElement(g,{actions:m,title:a}):null,O=d?i.createElement(f,null,e):e,F=h?(0,c.h)(h,{variant:"primary"}):null,x=null;_&&_.length&&(x=1===_.length?(0,c.h)(_[0]):i.createElement(i.Fragment,null,i.createElement(P.J,{active:k,activator:i.createElement(L.z,{disclosure:!0,onClick:C},b||v.translate("Polaris.Common.more")),onClose:C},i.createElement(S.S,{items:_}))));let T=F||x?i.createElement("div",{className:(0,n.AK)(o.Footer,"left"===E&&o.LeftJustified)},"right"===E?i.createElement(s.h,null,x,F):i.createElement(s.h,null,F,x)):null;return i.createElement(l.O.Provider,{value:!0},i.createElement("div",{className:N,ref:I},B,O,T))};function y(e,t,a){if(!(!e||e.className.includes(o["Section-flush"])))switch(t){case"top":e.classList.toggle(o.FirstSectionPadding,a);return;case"bottom":e.classList.toggle(o.LastSectionPadding,a)}}h.Header=g,h.Section=f,h.Subsection=function({children:e}){return i.createElement("div",{className:o.Subsection},e)}},97661:function(e,t,a){"use strict";a.d(t,{D:function(){return c}});var i=a(27378),n=a(39627),r=a(26482),l={LegacyStack:"Polaris-LegacyStack",Item:"Polaris-LegacyStack__Item",noWrap:"Polaris-LegacyStack--noWrap",spacingNone:"Polaris-LegacyStack--spacingNone",spacingExtraTight:"Polaris-LegacyStack--spacingExtraTight",spacingTight:"Polaris-LegacyStack--spacingTight",spacingBaseTight:"Polaris-LegacyStack--spacingBaseTight",spacingLoose:"Polaris-LegacyStack--spacingLoose",spacingExtraLoose:"Polaris-LegacyStack--spacingExtraLoose",distributionLeading:"Polaris-LegacyStack--distributionLeading",distributionTrailing:"Polaris-LegacyStack--distributionTrailing",distributionCenter:"Polaris-LegacyStack--distributionCenter",distributionEqualSpacing:"Polaris-LegacyStack--distributionEqualSpacing",distributionFill:"Polaris-LegacyStack--distributionFill",distributionFillEvenly:"Polaris-LegacyStack--distributionFillEvenly",alignmentLeading:"Polaris-LegacyStack--alignmentLeading",alignmentTrailing:"Polaris-LegacyStack--alignmentTrailing",alignmentCenter:"Polaris-LegacyStack--alignmentCenter",alignmentFill:"Polaris-LegacyStack--alignmentFill",alignmentBaseline:"Polaris-LegacyStack--alignmentBaseline",vertical:"Polaris-LegacyStack--vertical","Item-fill":"Polaris-LegacyStack__Item--fill"};function o({children:e,fill:t}){let a=(0,n.AK)(l.Item,t&&l["Item-fill"]);return i.createElement("div",{className:a},e)}let c=(0,i.memo)(function({children:e,vertical:t,spacing:a,distribution:c,alignment:s,wrap:u}){let d=(0,n.AK)(l.LegacyStack,t&&l.vertical,a&&l[(0,n.OZ)("spacing",a)],c&&l[(0,n.OZ)("distribution",c)],s&&l[(0,n.OZ)("alignment",s)],!1===u&&l.noWrap),g=(0,r.gD)(e).map((e,t)=>(0,r.oh)(e,o,{key:t}));return i.createElement("div",{className:d},g)});c.Item=o},21248:function(e,t,a){"use strict";a.d(t,{a:function(){return l}});var i=a(27378),n=a(39627),r={List:"Polaris-List",typeNumber:"Polaris-List--typeNumber",Item:"Polaris-List__Item",spacingLoose:"Polaris-List--spacingLoose"};let l=function({children:e,gap:t="loose",type:a="bullet"}){let l=(0,n.AK)(r.List,t&&r[(0,n.OZ)("spacing",t)],a&&r[(0,n.OZ)("type",a)]);return i.createElement("bullet"===a?"ul":"ol",{className:l},e)};l.Item=function({children:e}){return i.createElement("li",{className:r.Item},e)}},10952:function(e,t,a){"use strict";a.d(t,{O:function(){return n}});var i=a(27378);let n=(0,i.createContext)(!1)}},function(e){e.O(0,[4515,3121,7298,2131,8073,7693,9774,2888,179],function(){return e(e.s=61783)}),_N_E=e.O()}]);