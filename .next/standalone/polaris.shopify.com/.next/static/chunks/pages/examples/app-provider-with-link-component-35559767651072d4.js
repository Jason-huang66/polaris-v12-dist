(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4806],{35362:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/app-provider-with-link-component",function(){return n(29883)}])},29883:function(e,t,n){"use strict";n.r(t);var a=n(24246),r=n(46739),o=n(94800);n(27378);var i=n(64515);t.default=(0,i.y)(function(){let e=e=>{let{children:t,url:n,...r}=e;return(0,a.jsx)("a",{href:n,onClick:()=>console.log("Custom link clicked"),...r,children:t})};return(0,a.jsx)(r.w,{linkComponent:e,i18n:{Polaris:{Page:{Header:{rollupButton:"Actions"}}}},children:(0,a.jsx)(o.T,{backAction:{content:"Products",url:"#"},title:"Jar With Lock-Lid",primaryAction:{content:"Save",disabled:!0},secondaryActions:[{content:"Duplicate",url:"#"},{content:"View on your store",url:"#"}],children:(0,a.jsx)("p",{children:"Page content"})})})})},84879:function(e,t,n){"use strict";n.d(t,{h:function(){return c}});var a=n(27378),r=n(39627),o=n(26482),i={ButtonGroup:"Polaris-ButtonGroup",Item:"Polaris-ButtonGroup__Item","Item-plain":"Polaris-ButtonGroup__Item--plain",variantSegmented:"Polaris-ButtonGroup--variantSegmented","Item-focused":"Polaris-ButtonGroup__Item--focused",fullWidth:"Polaris-ButtonGroup--fullWidth",extraTight:"Polaris-ButtonGroup--extraTight",tight:"Polaris-ButtonGroup--tight",loose:"Polaris-ButtonGroup--loose",noWrap:"Polaris-ButtonGroup--noWrap"},l=n(95336);function u({button:e}){let{value:t,setTrue:n,setFalse:o}=(0,l.O)(!1),u=(0,r.AK)(i.Item,t&&i["Item-focused"],"plain"===e.props.variant&&i["Item-plain"]);return a.createElement("div",{className:u,onFocus:n,onBlur:o},e)}function c({children:e,gap:t,variant:n,fullWidth:l,connectedTop:c,noWrap:s}){let d=(0,r.AK)(i.ButtonGroup,t&&i[t],n&&i[(0,r.OZ)("variant",n)],l&&i.fullWidth,s&&i.noWrap),p=(0,o.gD)(e).map((e,t)=>a.createElement(u,{button:e,key:t}));return a.createElement("div",{className:d,"data-buttongroup-variant":n,"data-buttongroup-connected-top":c,"data-buttongroup-full-width":l,"data-buttongroup-no-wrap":s},p)}},65895:function(e,t,n){"use strict";n.d(t,{t:function(){return P}});var a,r,o=n(22276),i=n(90349),l=n(27378);(a=r||(r={})).Input="INPUT",a.Textarea="TEXTAREA",a.Select="SELECT",a.ContentEditable="contenteditable";var u=n(39627),c={Pagination:"Polaris-Pagination",table:"Polaris-Pagination--table"},s=n(57963),d=n(81894),p=n(58330),m=n(39355),g=n(84879),f=n(43697),E=n(88470),b=n(33121);function P({hasNext:e,hasPrevious:t,nextURL:n,previousURL:a,onNext:r,onPrevious:P,nextTooltip:B,previousTooltip:_,nextKeys:x,previousKeys:w,accessibilityLabel:y,accessibilityLabels:I,label:S,type:C="page"}){let G=(0,s.Q)(),T=(0,l.createRef)(),A=y||G.translate("Polaris.Pagination.pagination"),N=I?.previous||G.translate("Polaris.Pagination.previous"),W=I?.next||G.translate("Polaris.Pagination.next"),L=l.createElement(b.z,{icon:o.S,accessibilityLabel:N,url:a,onClick:P,disabled:!t,id:"previousURL"}),R=_&&t?l.createElement(f.u,{activatorWrapper:"span",content:_,preferredPosition:"below"},L):L,U=l.createElement(b.z,{icon:i.S,accessibilityLabel:W,url:n,onClick:r,disabled:!e,id:"nextURL"}),j=B&&e?l.createElement(f.u,{activatorWrapper:"span",content:B,preferredPosition:"below"},U):U,O=P||k,K=w&&(a||P)&&t&&w.map(e=>l.createElement(d.n,{key:e,keyCode:e,handler:a?h(v("previousURL",T)):h(O)})),X=r||k,z=x&&(n||r)&&e&&x.map(e=>l.createElement(d.n,{key:e,keyCode:e,handler:n?h(v("nextURL",T)):h(X)}));if("table"===C){let D=S?l.createElement(E.x,{as:"span",variant:"bodySm",fontWeight:"medium"},S):null;return l.createElement("nav",{"aria-label":A,ref:T,className:(0,u.AK)(c.Pagination,c.table)},K,z,l.createElement(p.x,{background:"bg-surface-secondary",paddingBlockStart:"150",paddingBlockEnd:"150",paddingInlineStart:"300",paddingInlineEnd:"200"},l.createElement(m.g,{align:D?"space-between":"end",blockAlign:"center"},D,l.createElement(g.h,{variant:"segmented"},R,j))))}let F=e&&t?l.createElement("span",null,S):l.createElement(E.x,{tone:"subdued",as:"span"},S),q=S?l.createElement(p.x,{padding:"300",paddingBlockStart:"0",paddingBlockEnd:"0"},l.createElement("div",{"aria-live":"polite"},F)):null;return l.createElement("nav",{"aria-label":A,ref:T,className:c.Pagination},K,z,l.createElement(g.h,{variant:"segmented"},R,q,j))}function v(e,t){return()=>{if(null==t.current)return;let n=t.current.querySelector(`#${e}`);n&&n.click()}}function h(e){return()=>{!function(){if(null==document||null==document.activeElement)return!1;let{tagName:e}=document.activeElement;return e===r.Input||e===r.Textarea||e===r.Select||document.activeElement.hasAttribute(r.ContentEditable)}()&&e()}}function k(){}}},function(e){e.O(0,[4515,3121,7298,2131,8073,7693,4800,9774,2888,179],function(){return e(e.s=35362)}),_N_E=e.O()}]);