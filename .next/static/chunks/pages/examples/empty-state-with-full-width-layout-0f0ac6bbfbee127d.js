(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3239],{52488:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/empty-state-with-full-width-layout",function(){return a(51931)}])},51931:function(e,t,a){"use strict";a.r(t);var n=a(24246),i=a(29324),r=a(53828);a(27378);var l=a(64515);t.default=(0,l.y)(function(){return(0,n.jsx)(i.z,{sectioned:!0,children:(0,n.jsx)(r.u,{heading:"Upload a file to get started",action:{content:"Upload files"},image:"https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png",fullWidth:!0,children:(0,n.jsx)("p",{children:"You can use the Files section to upload images, videos, and other documents. This example shows the content with a centered layout and full width."})})})})},84879:function(e,t,a){"use strict";a.d(t,{h:function(){return s}});var n=a(27378),i=a(39627),r=a(26482),l={ButtonGroup:"Polaris-ButtonGroup",Item:"Polaris-ButtonGroup__Item","Item-plain":"Polaris-ButtonGroup__Item--plain",variantSegmented:"Polaris-ButtonGroup--variantSegmented","Item-focused":"Polaris-ButtonGroup__Item--focused",fullWidth:"Polaris-ButtonGroup--fullWidth",extraTight:"Polaris-ButtonGroup--extraTight",tight:"Polaris-ButtonGroup--tight",loose:"Polaris-ButtonGroup--loose",noWrap:"Polaris-ButtonGroup--noWrap"},o=a(95336);function c({button:e}){let{value:t,setTrue:a,setFalse:r}=(0,o.O)(!1),c=(0,i.AK)(l.Item,t&&l["Item-focused"],"plain"===e.props.variant&&l["Item-plain"]);return n.createElement("div",{className:c,onFocus:a,onBlur:r},e)}function s({children:e,gap:t,variant:a,fullWidth:o,connectedTop:s,noWrap:u}){let d=(0,i.AK)(l.ButtonGroup,t&&l[t],a&&l[(0,i.OZ)("variant",a)],o&&l.fullWidth,u&&l.noWrap),g=(0,r.gD)(e).map((e,t)=>n.createElement(c,{button:e,key:t}));return n.createElement("div",{className:d,"data-buttongroup-variant":a,"data-buttongroup-connected-top":s,"data-buttongroup-full-width":o,"data-buttongroup-no-wrap":u},g)}},53828:function(e,t,a){"use strict";a.d(t,{u:function(){return g}});var n=a(27378),i=a(39627),r={imageContained:"Polaris-EmptyState--imageContained"},l=a(76928),o=a(58330),c=a(73260),s=a(17017),u=a(88470),d=a(39355);function g({children:e,heading:t,image:a,largeImage:g,imageContained:m,fullWidth:p=!1,action:f,secondaryAction:h,footerContent:S}){let E=(0,i.AK)(m&&r.imageContained),P=g?n.createElement(s.E,{alt:"",role:"presentation",source:g,className:E,sourceSet:[{source:a,descriptor:"568w"},{source:g,descriptor:"1136w"}],sizes:"(max-width: 568px) 60vw"}):n.createElement(s.E,{className:E,role:"presentation",alt:"",source:a}),L=h?(0,l.h)(h,{}):null,y=S?n.createElement(o.x,{paddingBlockStart:"400"},n.createElement(u.x,{as:"span",alignment:"center",variant:"bodySm"},S)):null,v=f?(0,l.h)(f,{variant:"primary",size:"medium"}):null,_=t?n.createElement(o.x,{paddingBlockEnd:"150"},n.createElement(u.x,{variant:"headingMd",as:"p",alignment:"center"},t)):null,b=e?n.createElement(u.x,{as:"span",alignment:"center",variant:"bodySm"},e):null,k=_||e?n.createElement(o.x,{paddingBlockEnd:"400"},_,b):null,C=v||L?n.createElement(d.g,{align:"center",gap:"200"},L,v):null,x=k||C||y?n.createElement(o.x,{maxWidth:p?"100%":"400px"},n.createElement(c.E,{inlineAlign:"center"},k,C,y)):null;return n.createElement(o.x,{paddingInlineStart:"0",paddingInlineEnd:"0",paddingBlockStart:"500",paddingBlockEnd:"1600"},n.createElement(c.E,{inlineAlign:"center"},P,x))}},17017:function(e,t,a){"use strict";a.d(t,{E:function(){return i}});var n=a(27378);function i({alt:e,sourceSet:t,source:a,crossOrigin:i,onLoad:r,className:l,...o}){let c=t?t.map(({source:e,descriptor:t})=>`${e} ${t}`).join(","):null,s=(0,n.useCallback)(()=>{r&&r()},[r]);return n.createElement("img",Object.assign({alt:e,src:a,crossOrigin:i,className:l,onLoad:s},c?{srcSet:c}:{},o))}},29324:function(e,t,a){"use strict";a.d(t,{z:function(){return P}});var n=a(27378),i=a(39627),r=a(95336),l=a(10952),o={LegacyCard:"Polaris-LegacyCard",Section:"Polaris-LegacyCard__Section",subdued:"Polaris-LegacyCard--subdued","Section-hideOnPrint":"Polaris-LegacyCard__Section--hideOnPrint",hideOnPrint:"Polaris-LegacyCard--hideOnPrint",Header:"Polaris-LegacyCard__Header","Section-fullWidth":"Polaris-LegacyCard__Section--fullWidth","Section-flush":"Polaris-LegacyCard__Section--flush","Section-subdued":"Polaris-LegacyCard__Section--subdued",SectionHeader:"Polaris-LegacyCard__SectionHeader",Subsection:"Polaris-LegacyCard__Subsection",Footer:"Polaris-LegacyCard__Footer",LeftJustified:"Polaris-LegacyCard__LeftJustified",FirstSectionPadding:"Polaris-LegacyCard__FirstSectionPadding",LastSectionPadding:"Polaris-LegacyCard__LastSectionPadding"},c=a(76928),s=a(84879),u=a(39355),d=a(88470);function g({children:e,title:t,actions:a}){let i=a?n.createElement(s.h,null,(0,c.B)(a,{variant:"plain"})):null,r=(0,n.isValidElement)(t)?t:n.createElement(d.x,{variant:"headingSm",as:"h2"},t),l=i||e?n.createElement(u.g,{wrap:!1,gap:"200",align:"space-between",blockAlign:"center"},r,n.createElement(u.g,{wrap:!1,gap:"400",blockAlign:"center"},i,e)):r;return n.createElement("div",{className:o.Header},l)}var m=a(97661);function p({children:e,title:t,subdued:a,flush:r,fullWidth:l,actions:u,hideOnPrint:g}){let p=(0,i.AK)(o.Section,r&&o["Section-flush"],a&&o["Section-subdued"],l&&o["Section-fullWidth"],g&&o["Section-hideOnPrint"]),f=u?n.createElement(s.h,null,(0,c.B)(u,{variant:"plain"})):null,h="string"==typeof t?n.createElement(d.x,{variant:"headingSm",as:"h3",fontWeight:"medium"},t):t,S=h||f?n.createElement("div",{className:o.SectionHeader},f?n.createElement(m.D,{alignment:"baseline"},n.createElement(m.D.Item,{fill:!0},h),f):h):null;return n.createElement("div",{className:p},S,e)}var f=a(57963),h=a(43389),S=a(33121),E=a(47693);let P=function({children:e,hideOnPrint:t,title:a,subdued:u,sectioned:d,actions:m,primaryFooterAction:P,secondaryFooterActions:y,secondaryFooterActionsDisclosureText:v,footerActionAlignment:_="right"}){let b=(0,f.Q)(),{value:k,toggle:C}=(0,r.O)(!1),x=function(){let e=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let t,a;let n=e.current;if(n){let i=()=>{let e;L(t,"top",!1),L(a,"bottom",!1);let i=n.querySelectorAll(`.${o.Section}, .${o.Header}, .${o.Footer}`);if(!i?.length)return;let r=i[0],l=(e=i[0],i.forEach(t=>{e.contains(t)||(e=t)}),e);n.firstChild?.contains(r)&&L(t=r,"top",!0),n.lastChild?.contains(l)&&L(a=l,"bottom",!0)};i();let r=new MutationObserver(i);return r.observe(n,{childList:!0,subtree:!0}),()=>{L(t,"top",!1),L(a,"bottom",!1),r.disconnect()}}},[]),e}(),B=(0,i.AK)(o.LegacyCard,u&&o.subdued,t&&o.hideOnPrint),w=a||m?n.createElement(g,{actions:m,title:a}):null,N=d?n.createElement(p,null,e):e,I=P?(0,c.h)(P,{variant:"primary"}):null,O=null;y&&y.length&&(O=1===y.length?(0,c.h)(y[0]):n.createElement(n.Fragment,null,n.createElement(h.J,{active:k,activator:n.createElement(S.z,{disclosure:!0,onClick:C},v||b.translate("Polaris.Common.more")),onClose:C},n.createElement(E.S,{items:y}))));let F=I||O?n.createElement("div",{className:(0,i.AK)(o.Footer,"left"===_&&o.LeftJustified)},"right"===_?n.createElement(s.h,null,O,I):n.createElement(s.h,null,I,O)):null;return n.createElement(l.O.Provider,{value:!0},n.createElement("div",{className:B,ref:x},w,N,F))};function L(e,t,a){if(!(!e||e.className.includes(o["Section-flush"])))switch(t){case"top":e.classList.toggle(o.FirstSectionPadding,a);return;case"bottom":e.classList.toggle(o.LastSectionPadding,a)}}P.Header=g,P.Section=p,P.Subsection=function({children:e}){return n.createElement("div",{className:o.Subsection},e)}},97661:function(e,t,a){"use strict";a.d(t,{D:function(){return c}});var n=a(27378),i=a(39627),r=a(26482),l={LegacyStack:"Polaris-LegacyStack",Item:"Polaris-LegacyStack__Item",noWrap:"Polaris-LegacyStack--noWrap",spacingNone:"Polaris-LegacyStack--spacingNone",spacingExtraTight:"Polaris-LegacyStack--spacingExtraTight",spacingTight:"Polaris-LegacyStack--spacingTight",spacingBaseTight:"Polaris-LegacyStack--spacingBaseTight",spacingLoose:"Polaris-LegacyStack--spacingLoose",spacingExtraLoose:"Polaris-LegacyStack--spacingExtraLoose",distributionLeading:"Polaris-LegacyStack--distributionLeading",distributionTrailing:"Polaris-LegacyStack--distributionTrailing",distributionCenter:"Polaris-LegacyStack--distributionCenter",distributionEqualSpacing:"Polaris-LegacyStack--distributionEqualSpacing",distributionFill:"Polaris-LegacyStack--distributionFill",distributionFillEvenly:"Polaris-LegacyStack--distributionFillEvenly",alignmentLeading:"Polaris-LegacyStack--alignmentLeading",alignmentTrailing:"Polaris-LegacyStack--alignmentTrailing",alignmentCenter:"Polaris-LegacyStack--alignmentCenter",alignmentFill:"Polaris-LegacyStack--alignmentFill",alignmentBaseline:"Polaris-LegacyStack--alignmentBaseline",vertical:"Polaris-LegacyStack--vertical","Item-fill":"Polaris-LegacyStack__Item--fill"};function o({children:e,fill:t}){let a=(0,i.AK)(l.Item,t&&l["Item-fill"]);return n.createElement("div",{className:a},e)}let c=(0,n.memo)(function({children:e,vertical:t,spacing:a,distribution:c,alignment:s,wrap:u}){let d=(0,i.AK)(l.LegacyStack,t&&l.vertical,a&&l[(0,i.OZ)("spacing",a)],c&&l[(0,i.OZ)("distribution",c)],s&&l[(0,i.OZ)("alignment",s)],!1===u&&l.noWrap),g=(0,r.gD)(e).map((e,t)=>(0,r.oh)(e,o,{key:t}));return n.createElement("div",{className:d},g)});c.Item=o},10952:function(e,t,a){"use strict";a.d(t,{O:function(){return i}});var n=a(27378);let i=(0,n.createContext)(!1)}},function(e){e.O(0,[4515,3121,7298,2131,8073,7693,9774,2888,179],function(){return e(e.s=52488)}),_N_E=e.O()}]);