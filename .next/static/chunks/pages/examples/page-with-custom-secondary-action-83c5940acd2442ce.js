(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1902],{88209:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/page-with-custom-secondary-action",function(){return n(55315)}])},55315:function(e,t,n){"use strict";n.r(t);var a=n(24246),r=n(94800),i=n(33121);n(27378);var o=n(64515);t.default=(0,o.y)(function(){return(0,a.jsx)(r.T,{title:"General",secondaryActions:(0,a.jsx)(i.z,{children:"Save"}),children:(0,a.jsx)("p",{children:"Page content"})})})},84879:function(e,t,n){"use strict";n.d(t,{h:function(){return c}});var a=n(27378),r=n(39627),i=n(26482),o={ButtonGroup:"Polaris-ButtonGroup",Item:"Polaris-ButtonGroup__Item","Item-plain":"Polaris-ButtonGroup__Item--plain",variantSegmented:"Polaris-ButtonGroup--variantSegmented","Item-focused":"Polaris-ButtonGroup__Item--focused",fullWidth:"Polaris-ButtonGroup--fullWidth",extraTight:"Polaris-ButtonGroup--extraTight",tight:"Polaris-ButtonGroup--tight",loose:"Polaris-ButtonGroup--loose",noWrap:"Polaris-ButtonGroup--noWrap"},l=n(95336);function u({button:e}){let{value:t,setTrue:n,setFalse:i}=(0,l.O)(!1),u=(0,r.AK)(o.Item,t&&o["Item-focused"],"plain"===e.props.variant&&o["Item-plain"]);return a.createElement("div",{className:u,onFocus:n,onBlur:i},e)}function c({children:e,gap:t,variant:n,fullWidth:l,connectedTop:c,noWrap:s}){let d=(0,r.AK)(o.ButtonGroup,t&&o[t],n&&o[(0,r.OZ)("variant",n)],l&&o.fullWidth,s&&o.noWrap),p=(0,i.gD)(e).map((e,t)=>a.createElement(u,{button:e,key:t}));return a.createElement("div",{className:d,"data-buttongroup-variant":n,"data-buttongroup-connected-top":c,"data-buttongroup-full-width":l,"data-buttongroup-no-wrap":s},p)}},65895:function(e,t,n){"use strict";n.d(t,{t:function(){return v}});var a,r,i=n(22276),o=n(90349),l=n(27378);(a=r||(r={})).Input="INPUT",a.Textarea="TEXTAREA",a.Select="SELECT",a.ContentEditable="contenteditable";var u=n(39627),c={Pagination:"Polaris-Pagination",table:"Polaris-Pagination--table"},s=n(57963),d=n(81894),p=n(58330),m=n(39355),g=n(84879),f=n(43697),E=n(88470),b=n(33121);function v({hasNext:e,hasPrevious:t,nextURL:n,previousURL:a,onNext:r,onPrevious:v,nextTooltip:_,previousTooltip:B,nextKeys:x,previousKeys:I,accessibilityLabel:y,accessibilityLabels:G,label:S,type:w="page"}){let T=(0,s.Q)(),N=(0,l.createRef)(),C=y||T.translate("Polaris.Pagination.pagination"),W=G?.previous||T.translate("Polaris.Pagination.previous"),A=G?.next||T.translate("Polaris.Pagination.next"),L=l.createElement(b.z,{icon:i.S,accessibilityLabel:W,url:a,onClick:v,disabled:!t,id:"previousURL"}),R=B&&t?l.createElement(f.u,{activatorWrapper:"span",content:B,preferredPosition:"below"},L):L,U=l.createElement(b.z,{icon:o.S,accessibilityLabel:A,url:n,onClick:r,disabled:!e,id:"nextURL"}),O=_&&e?l.createElement(f.u,{activatorWrapper:"span",content:_,preferredPosition:"below"},U):U,j=v||k,z=I&&(a||v)&&t&&I.map(e=>l.createElement(d.n,{key:e,keyCode:e,handler:a?h(P("previousURL",N)):h(j)})),K=r||k,X=x&&(n||r)&&e&&x.map(e=>l.createElement(d.n,{key:e,keyCode:e,handler:n?h(P("nextURL",N)):h(K)}));if("table"===w){let F=S?l.createElement(E.x,{as:"span",variant:"bodySm",fontWeight:"medium"},S):null;return l.createElement("nav",{"aria-label":C,ref:N,className:(0,u.AK)(c.Pagination,c.table)},z,X,l.createElement(p.x,{background:"bg-surface-secondary",paddingBlockStart:"150",paddingBlockEnd:"150",paddingInlineStart:"300",paddingInlineEnd:"200"},l.createElement(m.g,{align:F?"space-between":"end",blockAlign:"center"},F,l.createElement(g.h,{variant:"segmented"},R,O))))}let q=e&&t?l.createElement("span",null,S):l.createElement(E.x,{tone:"subdued",as:"span"},S),D=S?l.createElement(p.x,{padding:"300",paddingBlockStart:"0",paddingBlockEnd:"0"},l.createElement("div",{"aria-live":"polite"},q)):null;return l.createElement("nav",{"aria-label":C,ref:N,className:c.Pagination},z,X,l.createElement(g.h,{variant:"segmented"},R,D,O))}function P(e,t){return()=>{if(null==t.current)return;let n=t.current.querySelector(`#${e}`);n&&n.click()}}function h(e){return()=>{!function(){if(null==document||null==document.activeElement)return!1;let{tagName:e}=document.activeElement;return e===r.Input||e===r.Textarea||e===r.Select||document.activeElement.hasAttribute(r.ContentEditable)}()&&e()}}function k(){}}},function(e){e.O(0,[4515,3121,7298,2131,8073,7693,4800,9774,2888,179],function(){return e(e.s=88209)}),_N_E=e.O()}]);