(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7084],{39713:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/page-with-destructive-secondary-action",function(){return n(10403)}])},10403:function(e,t,n){"use strict";n.r(t);var a=n(24246),r=n(94800);n(27378);var i=n(64515);t.default=(0,i.y)(function(){return(0,a.jsx)(r.T,{title:"General",secondaryActions:[{content:"Delete",destructive:!0}],children:(0,a.jsx)("p",{children:"Page content"})})})},84879:function(e,t,n){"use strict";n.d(t,{h:function(){return c}});var a=n(27378),r=n(39627),i=n(26482),o={ButtonGroup:"Polaris-ButtonGroup",Item:"Polaris-ButtonGroup__Item","Item-plain":"Polaris-ButtonGroup__Item--plain",variantSegmented:"Polaris-ButtonGroup--variantSegmented","Item-focused":"Polaris-ButtonGroup__Item--focused",fullWidth:"Polaris-ButtonGroup--fullWidth",extraTight:"Polaris-ButtonGroup--extraTight",tight:"Polaris-ButtonGroup--tight",loose:"Polaris-ButtonGroup--loose",noWrap:"Polaris-ButtonGroup--noWrap"},l=n(95336);function u({button:e}){let{value:t,setTrue:n,setFalse:i}=(0,l.O)(!1),u=(0,r.AK)(o.Item,t&&o["Item-focused"],"plain"===e.props.variant&&o["Item-plain"]);return a.createElement("div",{className:u,onFocus:n,onBlur:i},e)}function c({children:e,gap:t,variant:n,fullWidth:l,connectedTop:c,noWrap:s}){let d=(0,r.AK)(o.ButtonGroup,t&&o[t],n&&o[(0,r.OZ)("variant",n)],l&&o.fullWidth,s&&o.noWrap),p=(0,i.gD)(e).map((e,t)=>a.createElement(u,{button:e,key:t}));return a.createElement("div",{className:d,"data-buttongroup-variant":n,"data-buttongroup-connected-top":c,"data-buttongroup-full-width":l,"data-buttongroup-no-wrap":s},p)}},65895:function(e,t,n){"use strict";n.d(t,{t:function(){return v}});var a,r,i=n(22276),o=n(90349),l=n(27378);(a=r||(r={})).Input="INPUT",a.Textarea="TEXTAREA",a.Select="SELECT",a.ContentEditable="contenteditable";var u=n(39627),c={Pagination:"Polaris-Pagination",table:"Polaris-Pagination--table"},s=n(57963),d=n(81894),p=n(58330),m=n(39355),g=n(84879),f=n(43697),E=n(88470),b=n(33121);function v({hasNext:e,hasPrevious:t,nextURL:n,previousURL:a,onNext:r,onPrevious:v,nextTooltip:_,previousTooltip:B,nextKeys:x,previousKeys:I,accessibilityLabel:y,accessibilityLabels:G,label:w,type:S="page"}){let T=(0,s.Q)(),N=(0,l.createRef)(),C=y||T.translate("Polaris.Pagination.pagination"),W=G?.previous||T.translate("Polaris.Pagination.previous"),A=G?.next||T.translate("Polaris.Pagination.next"),L=l.createElement(b.z,{icon:i.S,accessibilityLabel:W,url:a,onClick:v,disabled:!t,id:"previousURL"}),R=B&&t?l.createElement(f.u,{activatorWrapper:"span",content:B,preferredPosition:"below"},L):L,U=l.createElement(b.z,{icon:o.S,accessibilityLabel:A,url:n,onClick:r,disabled:!e,id:"nextURL"}),O=_&&e?l.createElement(f.u,{activatorWrapper:"span",content:_,preferredPosition:"below"},U):U,K=v||k,X=I&&(a||v)&&t&&I.map(e=>l.createElement(d.n,{key:e,keyCode:e,handler:a?h(P("previousURL",N)):h(K)})),j=r||k,z=x&&(n||r)&&e&&x.map(e=>l.createElement(d.n,{key:e,keyCode:e,handler:n?h(P("nextURL",N)):h(j)}));if("table"===S){let D=w?l.createElement(E.x,{as:"span",variant:"bodySm",fontWeight:"medium"},w):null;return l.createElement("nav",{"aria-label":C,ref:N,className:(0,u.AK)(c.Pagination,c.table)},X,z,l.createElement(p.x,{background:"bg-surface-secondary",paddingBlockStart:"150",paddingBlockEnd:"150",paddingInlineStart:"300",paddingInlineEnd:"200"},l.createElement(m.g,{align:D?"space-between":"end",blockAlign:"center"},D,l.createElement(g.h,{variant:"segmented"},R,O))))}let F=e&&t?l.createElement("span",null,w):l.createElement(E.x,{tone:"subdued",as:"span"},w),q=w?l.createElement(p.x,{padding:"300",paddingBlockStart:"0",paddingBlockEnd:"0"},l.createElement("div",{"aria-live":"polite"},F)):null;return l.createElement("nav",{"aria-label":C,ref:N,className:c.Pagination},X,z,l.createElement(g.h,{variant:"segmented"},R,q,O))}function P(e,t){return()=>{if(null==t.current)return;let n=t.current.querySelector(`#${e}`);n&&n.click()}}function h(e){return()=>{!function(){if(null==document||null==document.activeElement)return!1;let{tagName:e}=document.activeElement;return e===r.Input||e===r.Textarea||e===r.Select||document.activeElement.hasAttribute(r.ContentEditable)}()&&e()}}function k(){}}},function(e){e.O(0,[4515,3121,7298,2131,8073,7693,4800,9774,2888,179],function(){return e(e.s=39713)}),_N_E=e.O()}]);