(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2709],{80954:function(l,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/grid-two-column",function(){return n(75601)}])},75601:function(l,e,n){"use strict";n.r(e);var t=n(24246),a=n(94800),i=n(67009),r=n(29324);n(27378);var o=n(64515);e.default=(0,o.y)(function(){return(0,t.jsx)(a.T,{fullWidth:!0,children:(0,t.jsxs)(i.r,{children:[(0,t.jsx)(i.r.Cell,{columnSpan:{xs:6,sm:3,md:3,lg:6,xl:6},children:(0,t.jsx)(r.z,{title:"Sales",sectioned:!0,children:(0,t.jsx)("p",{children:"View a summary of your online store’s sales."})})}),(0,t.jsx)(i.r.Cell,{columnSpan:{xs:6,sm:3,md:3,lg:6,xl:6},children:(0,t.jsx)(r.z,{title:"Orders",sectioned:!0,children:(0,t.jsx)("p",{children:"View a summary of your online store’s orders."})})})]})})})},84879:function(l,e,n){"use strict";n.d(e,{h:function(){return s}});var t=n(27378),a=n(39627),i=n(26482),r={ButtonGroup:"Polaris-ButtonGroup",Item:"Polaris-ButtonGroup__Item","Item-plain":"Polaris-ButtonGroup__Item--plain",variantSegmented:"Polaris-ButtonGroup--variantSegmented","Item-focused":"Polaris-ButtonGroup__Item--focused",fullWidth:"Polaris-ButtonGroup--fullWidth",extraTight:"Polaris-ButtonGroup--extraTight",tight:"Polaris-ButtonGroup--tight",loose:"Polaris-ButtonGroup--loose",noWrap:"Polaris-ButtonGroup--noWrap"},o=n(95336);function c({button:l}){let{value:e,setTrue:n,setFalse:i}=(0,o.O)(!1),c=(0,a.AK)(r.Item,e&&r["Item-focused"],"plain"===l.props.variant&&r["Item-plain"]);return t.createElement("div",{className:c,onFocus:n,onBlur:i},l)}function s({children:l,gap:e,variant:n,fullWidth:o,connectedTop:s,noWrap:u}){let m=(0,a.AK)(r.ButtonGroup,e&&r[e],n&&r[(0,a.OZ)("variant",n)],o&&r.fullWidth,u&&r.noWrap),d=(0,i.gD)(l).map((l,e)=>t.createElement(c,{button:l,key:e}));return t.createElement("div",{className:m,"data-buttongroup-variant":n,"data-buttongroup-connected-top":s,"data-buttongroup-full-width":o,"data-buttongroup-no-wrap":u},d)}},67009:function(l,e,n){"use strict";n.d(e,{r:function(){return o}});var t=n(27378),a={Grid:"Polaris-Grid"},i=n(39627),r={Cell:"Polaris-Grid-Cell","Cell-1-column-xs":"Polaris-Grid-Cell--cell_1ColumnXs","Cell-2-column-xs":"Polaris-Grid-Cell--cell_2ColumnXs","Cell-3-column-xs":"Polaris-Grid-Cell--cell_3ColumnXs","Cell-4-column-xs":"Polaris-Grid-Cell--cell_4ColumnXs","Cell-5-column-xs":"Polaris-Grid-Cell--cell_5ColumnXs","Cell-6-column-xs":"Polaris-Grid-Cell--cell_6ColumnXs","Cell-1-column-sm":"Polaris-Grid-Cell--cell_1ColumnSm","Cell-2-column-sm":"Polaris-Grid-Cell--cell_2ColumnSm","Cell-3-column-sm":"Polaris-Grid-Cell--cell_3ColumnSm","Cell-4-column-sm":"Polaris-Grid-Cell--cell_4ColumnSm","Cell-5-column-sm":"Polaris-Grid-Cell--cell_5ColumnSm","Cell-6-column-sm":"Polaris-Grid-Cell--cell_6ColumnSm","Cell-1-column-md":"Polaris-Grid-Cell--cell_1ColumnMd","Cell-2-column-md":"Polaris-Grid-Cell--cell_2ColumnMd","Cell-3-column-md":"Polaris-Grid-Cell--cell_3ColumnMd","Cell-4-column-md":"Polaris-Grid-Cell--cell_4ColumnMd","Cell-5-column-md":"Polaris-Grid-Cell--cell_5ColumnMd","Cell-6-column-md":"Polaris-Grid-Cell--cell_6ColumnMd","Cell-1-column-lg":"Polaris-Grid-Cell--cell_1ColumnLg","Cell-2-column-lg":"Polaris-Grid-Cell--cell_2ColumnLg","Cell-3-column-lg":"Polaris-Grid-Cell--cell_3ColumnLg","Cell-4-column-lg":"Polaris-Grid-Cell--cell_4ColumnLg","Cell-5-column-lg":"Polaris-Grid-Cell--cell_5ColumnLg","Cell-6-column-lg":"Polaris-Grid-Cell--cell_6ColumnLg","Cell-7-column-lg":"Polaris-Grid-Cell--cell_7ColumnLg","Cell-8-column-lg":"Polaris-Grid-Cell--cell_8ColumnLg","Cell-9-column-lg":"Polaris-Grid-Cell--cell_9ColumnLg","Cell-10-column-lg":"Polaris-Grid-Cell--cell_10ColumnLg","Cell-11-column-lg":"Polaris-Grid-Cell--cell_11ColumnLg","Cell-12-column-lg":"Polaris-Grid-Cell--cell_12ColumnLg","Cell-1-column-xl":"Polaris-Grid-Cell--cell_1ColumnXl","Cell-2-column-xl":"Polaris-Grid-Cell--cell_2ColumnXl","Cell-3-column-xl":"Polaris-Grid-Cell--cell_3ColumnXl","Cell-4-column-xl":"Polaris-Grid-Cell--cell_4ColumnXl","Cell-5-column-xl":"Polaris-Grid-Cell--cell_5ColumnXl","Cell-6-column-xl":"Polaris-Grid-Cell--cell_6ColumnXl","Cell-7-column-xl":"Polaris-Grid-Cell--cell_7ColumnXl","Cell-8-column-xl":"Polaris-Grid-Cell--cell_8ColumnXl","Cell-9-column-xl":"Polaris-Grid-Cell--cell_9ColumnXl","Cell-10-column-xl":"Polaris-Grid-Cell--cell_10ColumnXl","Cell-11-column-xl":"Polaris-Grid-Cell--cell_11ColumnXl","Cell-12-column-xl":"Polaris-Grid-Cell--cell_12ColumnXl"};let o=function({gap:l,areas:e,children:n,columns:i}){let r={"--pc-grid-gap-xs":l?.xs,"--pc-grid-gap-sm":l?.sm,"--pc-grid-gap-md":l?.md,"--pc-grid-gap-lg":l?.lg,"--pc-grid-gap-xl":l?.xl,"--pc-grid-columns-xs":i?.xs,"--pc-grid-columns-sm":i?.sm,"--pc-grid-columns-md":i?.md,"--pc-grid-columns-lg":i?.lg,"--pc-grid-columns-xl":i?.xl,"--pc-grid-areas-xs":c(e?.xs),"--pc-grid-areas-sm":c(e?.sm),"--pc-grid-areas-md":c(e?.md),"--pc-grid-areas-lg":c(e?.lg),"--pc-grid-areas-xl":c(e?.xl)};return t.createElement("div",{className:a.Grid,style:r},n)};function c(l){if(l)return`'${l?.join("' '")}'`}o.Cell=function({area:l,column:e,columnSpan:n,row:a,children:o}){let c=(0,i.AK)(r.Cell,n?.xs&&r[`Cell-${n.xs}-column-xs`],n?.sm&&r[`Cell-${n.sm}-column-sm`],n?.md&&r[`Cell-${n.md}-column-md`],n?.lg&&r[`Cell-${n.lg}-column-lg`],n?.xl&&r[`Cell-${n.xl}-column-xl`]),s={gridArea:l,"--pc-column-xs":e?.xs,"--pc-column-sm":e?.sm,"--pc-column-md":e?.md,"--pc-column-lg":e?.lg,"--pc-column-xl":e?.xl,"--pc-row-xs":a?.xs,"--pc-row-sm":a?.sm,"--pc-row-md":a?.md,"--pc-row-lg":a?.lg,"--pc-row-xl":a?.xl};return t.createElement("div",{className:c,style:s},o)}},29324:function(l,e,n){"use strict";n.d(e,{z:function(){return S}});var t=n(27378),a=n(39627),i=n(95336),r=n(10952),o={LegacyCard:"Polaris-LegacyCard",Section:"Polaris-LegacyCard__Section",subdued:"Polaris-LegacyCard--subdued","Section-hideOnPrint":"Polaris-LegacyCard__Section--hideOnPrint",hideOnPrint:"Polaris-LegacyCard--hideOnPrint",Header:"Polaris-LegacyCard__Header","Section-fullWidth":"Polaris-LegacyCard__Section--fullWidth","Section-flush":"Polaris-LegacyCard__Section--flush","Section-subdued":"Polaris-LegacyCard__Section--subdued",SectionHeader:"Polaris-LegacyCard__SectionHeader",Subsection:"Polaris-LegacyCard__Subsection",Footer:"Polaris-LegacyCard__Footer",LeftJustified:"Polaris-LegacyCard__LeftJustified",FirstSectionPadding:"Polaris-LegacyCard__FirstSectionPadding",LastSectionPadding:"Polaris-LegacyCard__LastSectionPadding"},c=n(76928),s=n(84879),u=n(39355),m=n(88470);function d({children:l,title:e,actions:n}){let a=n?t.createElement(s.h,null,(0,c.B)(n,{variant:"plain"})):null,i=(0,t.isValidElement)(e)?e:t.createElement(m.x,{variant:"headingSm",as:"h2"},e),r=a||l?t.createElement(u.g,{wrap:!1,gap:"200",align:"space-between",blockAlign:"center"},i,t.createElement(u.g,{wrap:!1,gap:"400",blockAlign:"center"},a,l)):i;return t.createElement("div",{className:o.Header},r)}var g=n(97661);function C({children:l,title:e,subdued:n,flush:i,fullWidth:r,actions:u,hideOnPrint:d}){let C=(0,a.AK)(o.Section,i&&o["Section-flush"],n&&o["Section-subdued"],r&&o["Section-fullWidth"],d&&o["Section-hideOnPrint"]),p=u?t.createElement(s.h,null,(0,c.B)(u,{variant:"plain"})):null,P="string"==typeof e?t.createElement(m.x,{variant:"headingSm",as:"h3",fontWeight:"medium"},e):e,f=P||p?t.createElement("div",{className:o.SectionHeader},p?t.createElement(g.D,{alignment:"baseline"},t.createElement(g.D.Item,{fill:!0},P),p):P):null;return t.createElement("div",{className:C},f,l)}var p=n(57963),P=n(43389),f=n(33121),_=n(47693);let S=function({children:l,hideOnPrint:e,title:n,subdued:u,sectioned:m,actions:g,primaryFooterAction:S,secondaryFooterActions:x,secondaryFooterActionsDisclosureText:E,footerActionAlignment:h="right"}){let b=(0,p.Q)(),{value:y,toggle:v}=(0,i.O)(!1),G=function(){let l=(0,t.useRef)(null);return(0,t.useEffect)(()=>{let e,n;let t=l.current;if(t){let a=()=>{let l;L(e,"top",!1),L(n,"bottom",!1);let a=t.querySelectorAll(`.${o.Section}, .${o.Header}, .${o.Footer}`);if(!a?.length)return;let i=a[0],r=(l=a[0],a.forEach(e=>{l.contains(e)||(l=e)}),l);t.firstChild?.contains(i)&&L(e=i,"top",!0),t.lastChild?.contains(r)&&L(n=r,"bottom",!0)};a();let i=new MutationObserver(a);return i.observe(t,{childList:!0,subtree:!0}),()=>{L(e,"top",!1),L(n,"bottom",!1),i.disconnect()}}},[]),l}(),k=(0,a.AK)(o.LegacyCard,u&&o.subdued,e&&o.hideOnPrint),w=n||g?t.createElement(d,{actions:g,title:n}):null,B=m?t.createElement(C,null,l):l,N=S?(0,c.h)(S,{variant:"primary"}):null,I=null;x&&x.length&&(I=1===x.length?(0,c.h)(x[0]):t.createElement(t.Fragment,null,t.createElement(P.J,{active:y,activator:t.createElement(f.z,{disclosure:!0,onClick:v},E||b.translate("Polaris.Common.more")),onClose:v},t.createElement(_.S,{items:x}))));let T=N||I?t.createElement("div",{className:(0,a.AK)(o.Footer,"left"===h&&o.LeftJustified)},"right"===h?t.createElement(s.h,null,I,N):t.createElement(s.h,null,N,I)):null;return t.createElement(r.O.Provider,{value:!0},t.createElement("div",{className:k,ref:G},w,B,T))};function L(l,e,n){if(!(!l||l.className.includes(o["Section-flush"])))switch(e){case"top":l.classList.toggle(o.FirstSectionPadding,n);return;case"bottom":l.classList.toggle(o.LastSectionPadding,n)}}S.Header=d,S.Section=C,S.Subsection=function({children:l}){return t.createElement("div",{className:o.Subsection},l)}},97661:function(l,e,n){"use strict";n.d(e,{D:function(){return c}});var t=n(27378),a=n(39627),i=n(26482),r={LegacyStack:"Polaris-LegacyStack",Item:"Polaris-LegacyStack__Item",noWrap:"Polaris-LegacyStack--noWrap",spacingNone:"Polaris-LegacyStack--spacingNone",spacingExtraTight:"Polaris-LegacyStack--spacingExtraTight",spacingTight:"Polaris-LegacyStack--spacingTight",spacingBaseTight:"Polaris-LegacyStack--spacingBaseTight",spacingLoose:"Polaris-LegacyStack--spacingLoose",spacingExtraLoose:"Polaris-LegacyStack--spacingExtraLoose",distributionLeading:"Polaris-LegacyStack--distributionLeading",distributionTrailing:"Polaris-LegacyStack--distributionTrailing",distributionCenter:"Polaris-LegacyStack--distributionCenter",distributionEqualSpacing:"Polaris-LegacyStack--distributionEqualSpacing",distributionFill:"Polaris-LegacyStack--distributionFill",distributionFillEvenly:"Polaris-LegacyStack--distributionFillEvenly",alignmentLeading:"Polaris-LegacyStack--alignmentLeading",alignmentTrailing:"Polaris-LegacyStack--alignmentTrailing",alignmentCenter:"Polaris-LegacyStack--alignmentCenter",alignmentFill:"Polaris-LegacyStack--alignmentFill",alignmentBaseline:"Polaris-LegacyStack--alignmentBaseline",vertical:"Polaris-LegacyStack--vertical","Item-fill":"Polaris-LegacyStack__Item--fill"};function o({children:l,fill:e}){let n=(0,a.AK)(r.Item,e&&r["Item-fill"]);return t.createElement("div",{className:n},l)}let c=(0,t.memo)(function({children:l,vertical:e,spacing:n,distribution:c,alignment:s,wrap:u}){let m=(0,a.AK)(r.LegacyStack,e&&r.vertical,n&&r[(0,a.OZ)("spacing",n)],c&&r[(0,a.OZ)("distribution",c)],s&&r[(0,a.OZ)("alignment",s)],!1===u&&r.noWrap),d=(0,i.gD)(l).map((l,e)=>(0,i.oh)(l,o,{key:e}));return t.createElement("div",{className:m},d)});c.Item=o},65895:function(l,e,n){"use strict";n.d(e,{t:function(){return _}});var t,a,i=n(22276),r=n(90349),o=n(27378);(t=a||(a={})).Input="INPUT",t.Textarea="TEXTAREA",t.Select="SELECT",t.ContentEditable="contenteditable";var c=n(39627),s={Pagination:"Polaris-Pagination",table:"Polaris-Pagination--table"},u=n(57963),m=n(81894),d=n(58330),g=n(39355),C=n(84879),p=n(43697),P=n(88470),f=n(33121);function _({hasNext:l,hasPrevious:e,nextURL:n,previousURL:t,onNext:a,onPrevious:_,nextTooltip:E,previousTooltip:h,nextKeys:b,previousKeys:y,accessibilityLabel:v,accessibilityLabels:G,label:k,type:w="page"}){let B=(0,u.Q)(),N=(0,o.createRef)(),I=v||B.translate("Polaris.Pagination.pagination"),T=G?.previous||B.translate("Polaris.Pagination.previous"),X=G?.next||B.translate("Polaris.Pagination.next"),O=o.createElement(f.z,{icon:i.S,accessibilityLabel:T,url:t,onClick:_,disabled:!e,id:"previousURL"}),W=h&&e?o.createElement(p.u,{activatorWrapper:"span",content:h,preferredPosition:"below"},O):O,A=o.createElement(f.z,{icon:r.S,accessibilityLabel:X,url:n,onClick:a,disabled:!l,id:"nextURL"}),F=E&&l?o.createElement(p.u,{activatorWrapper:"span",content:E,preferredPosition:"below"},A):A,$=_||x,j=y&&(t||_)&&e&&y.map(l=>o.createElement(m.n,{key:l,keyCode:l,handler:t?L(S("previousURL",N)):L($)})),K=a||x,H=b&&(n||a)&&l&&b.map(l=>o.createElement(m.n,{key:l,keyCode:l,handler:n?L(S("nextURL",N)):L(K)}));if("table"===w){let M=k?o.createElement(P.x,{as:"span",variant:"bodySm",fontWeight:"medium"},k):null;return o.createElement("nav",{"aria-label":I,ref:N,className:(0,c.AK)(s.Pagination,s.table)},j,H,o.createElement(d.x,{background:"bg-surface-secondary",paddingBlockStart:"150",paddingBlockEnd:"150",paddingInlineStart:"300",paddingInlineEnd:"200"},o.createElement(g.g,{align:M?"space-between":"end",blockAlign:"center"},M,o.createElement(C.h,{variant:"segmented"},W,F))))}let R=l&&e?o.createElement("span",null,k):o.createElement(P.x,{tone:"subdued",as:"span"},k),z=k?o.createElement(d.x,{padding:"300",paddingBlockStart:"0",paddingBlockEnd:"0"},o.createElement("div",{"aria-live":"polite"},R)):null;return o.createElement("nav",{"aria-label":I,ref:N,className:s.Pagination},j,H,o.createElement(C.h,{variant:"segmented"},W,z,F))}function S(l,e){return()=>{if(null==e.current)return;let n=e.current.querySelector(`#${l}`);n&&n.click()}}function L(l){return()=>{!function(){if(null==document||null==document.activeElement)return!1;let{tagName:l}=document.activeElement;return l===a.Input||l===a.Textarea||l===a.Select||document.activeElement.hasAttribute(a.ContentEditable)}()&&l()}}function x(){}},10952:function(l,e,n){"use strict";n.d(e,{O:function(){return a}});var t=n(27378);let a=(0,t.createContext)(!1)}},function(l){l.O(0,[4515,3121,7298,2131,8073,7693,4800,9774,2888,179],function(){return l(l.s=80954)}),_N_E=l.O()}]);