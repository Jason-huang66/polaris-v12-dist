(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7785],{41227:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(24246),s=n(79233),i=n(81423),o=n.n(i),a=function(e){let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,s.ok)(o().Container,t),...n})}},87654:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(24246),s=n(79233),i=n(51781),o=n.n(i),a=function(e){let{firstParagraphIsLede:t=!0,children:n}=e;return(0,r.jsx)("div",{className:o().Longform,children:(0,r.jsx)("div",{className:(0,s.ok)(o().Content,t&&o().firstParagraphIsLede),children:n})})}},8167:function(e,t,n){"use strict";n.d(t,{Z:function(){return P}});var r=n(24246),s=n(39293),i=n(79233),o=n(87654),a=n(41227),l=n(88272),c=n(48934),u=n.n(c),d=n(27378),h=n(83152),_=n.n(h),m=n(45783),f=n(10777);function p(){let e=getComputedStyle(document.documentElement),t=e.getPropertyValue("--header-height"),n=parseInt(t);return n}var x=function(e){let{items:t,collapsibleTOC:n=!1}=e,s=!!t.find(e=>e.children.length>0),[o,a]=(0,d.useState)(),c=(0,d.useRef)(!1),u=(0,d.useRef)(0),[h,x]=(0,d.useState)({}),g=(e,t)=>{x({...h,[e]:t})};function j(){if(c.current)return;let e=function(){let e=p(),t=document.querySelectorAll("#main h2, #main h3"),n=null;for(let r=t.length-1;r>=0;r--){let s=t[r],{top:i}=s.getBoundingClientRect();if(n=s,i<e)break}if(!n&&t.length>0&&(n=t[0]),n){let o=n.getAttribute("id");if(o)return o}}();e&&a(e)}(0,d.useEffect)(()=>(j(),window.addEventListener("scroll",j),()=>window.removeEventListener("scroll",j)),[]),(0,d.useEffect)(()=>j(),[t]);let T=e=>{let{toId:t,linkText:n,collapsibleButton:s}=e,l=(0,i.ok)(_().Link,t===o&&_().active);return(0,r.jsxs)("a",{className:l,href:"#".concat(t),onClick(e){!function(e){a(e);let t=p(),n=document.getElementById(e);if(n){let{top:r}=n.getBoundingClientRect(),s=window.scrollY+r-t+1,i=s<1.25*t;i&&(s=0),history.pushState({},"","#".concat(e)),c.current=!0,window.scrollTo({top:s,behavior:"smooth"}),setTimeout(function e(){u.current!==window.scrollY?setTimeout(e,100):c.current=!1,u.current=window.scrollY},100)}}(t),e.preventDefault()},children:[(0,r.jsx)("span",{className:(0,i.ok)(Boolean(s)&&_().TOCItemMaxWidth),children:n}),s]})};return(0,r.jsx)("div",{className:(0,i.ok)(_().TOC,s&&_().isNested),children:(0,r.jsxs)("ul",{children:[(0,r.jsx)(l.x,{style:{paddingInlineStart:"var(--p-space-200)",paddingInlineEnd:"var(--p-space-200)",paddingBlockEnd:"var(--p-space-200)"},children:(0,r.jsx)("h2",{className:_().Header,children:"On this page"})}),t.map(e=>{let{title:t,id:s,children:i}=e,o=!0===h[s],a="toc-".concat(s);return(0,r.jsxs)("li",{className:_().Item,children:[(0,r.jsx)(T,{toId:s,linkText:t,collapsibleButton:i.length>0&&n?(0,r.jsx)("button",{className:_().Toggle,onClick(e){e.preventDefault(),e.stopPropagation(),g(s,!o)},"aria-label":"Toggle section","aria-expanded":o,"aria-controls":o?a:void 0}):null}),(0,r.jsx)(m.M,{initial:!1,children:i.length>0&&(o||!n)&&(0,r.jsx)(f.E.ul,{initial:{opacity:0,height:0},animate:{opacity:1,scale:1,height:"auto"},exit:{opacity:0,height:0},transition:{ease:"easeInOut",duration:.15},id:a,children:i.map(e=>(0,r.jsx)("li",{children:(0,r.jsx)(T,{toId:e.id,linkText:e.title})},e.title))})})]},t)})]})})},g=n(79894),j=n.n(g),T=n(86677),k=n(97236),C=n(53201),v=n.n(C),b=n(20627),N=n.n(b),w=function(){let{asPath:e}=(0,T.useRouter)();if("/"===e)return null;let t=[{url:"/",text:"Home"}],n=e.replace(/[#\?].+$/,"").slice(1).split("/");return n.forEach((e,r)=>{let s="children.".concat(n.slice(0,r+1).join(".children.")),o=v()(k,s);t.push({url:"/".concat(n.slice(0,r+1).join("/")),text:o?o.title:(0,i.rT)(e)})}),(0,r.jsx)("nav",{className:N().Breadcrumbs,"aria-label":"Breadcrumb",children:(0,r.jsx)("ul",{children:t.map((e,n)=>{let{url:s,text:i}=e;return(0,r.jsx)("li",{"aria-current":t.length==n+1?"page":"false",children:(0,r.jsx)(j(),{href:s,children:i})},s)})})})},P=function(e){let{title:t,isContentPage:n=!1,showTOC:c=n,collapsibleTOC:d=!1,editPageLinkPath:h,children:_}=e,[m]=(0,s.GD)(_),{asPath:f}=(0,T.useRouter)(),p="https://github.com/shopify/polaris/issues/new?title=".concat(encodeURIComponent("[polaris.shopify.com] Feedback (on ".concat(f,")")),"&amp;labels=polaris.shopify.com"),g=h?"https://github.com/Shopify/polaris/tree/main".concat(h):"";return(0,r.jsxs)(a.Z,{className:(0,i.ok)(u().Page,c&&u().showTOC),children:[(0,r.jsxs)(l.x,{as:"article",className:[u().Post,n&&u().PostContent],id:"main",children:[(0,r.jsx)(w,{}),t&&(0,r.jsx)(o.Z,{children:(0,r.jsx)("h1",{children:t})}),_,(0,r.jsx)("footer",{className:u().Footer,children:(0,r.jsxs)("p",{children:[g&&(0,r.jsx)(j(),{href:g,children:"Edit this page"}),(0,r.jsx)(j(),{href:p,children:"Leave feedback"})]})})]}),c&&(0,r.jsx)("div",{className:u().TOCWrapper,children:(0,r.jsx)(x,{items:m,collapsibleTOC:d})})]})}},68668:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(24246),s=n(88038),i=n.n(s),o=function(e){let{title:t,description:n,noIndex:s=!1}=e,o="Shopify Polaris";return t&&(o="".concat(t," — ").concat(o)),(0,r.jsxs)(i(),{children:[(0,r.jsx)("title",{children:o}),s?(0,r.jsx)("meta",{name:"robots",content:"noindex"}):null,n&&(0,r.jsx)("meta",{name:"description",content:n})]})}},47727:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r=n(24246),s=n(6101),i=n.n(s),o=n(18187),a=n.n(o),l=n(53571),c=n(98940),u=n(79894),d=n.n(u),h=n(79233),_=n(86677),m=n(8167);let f=[{title:"Border",url:"/tokens/border"},{title:"Breakpoints",url:"/tokens/breakpoints"},{title:"Color",url:"/tokens/color"},{title:"Font",url:"/tokens/font"},{title:"Height",url:"/tokens/height"},{title:"Motion",url:"/tokens/motion"},{title:"Shadow",url:"/tokens/shadow"},{title:"Space",url:"/tokens/space"},{title:"Text",url:"/tokens/text"},{title:"Width",url:"/tokens/width"},{title:"Z-Index",url:"/tokens/z-index"}];function p(e,t){return Object.entries(t).filter(t=>{let[n]=t;return n.toLowerCase().includes(e.toLowerCase())}).map(e=>{let[t,n]=e;return{name:t,...n}})}var x=function(e){let{tokenGroup:t}=e,n=(0,_.useRouter)(),s={border:p("",l.TY.border),breakpoints:p("",l.TY.breakpoints),color:p("",l.TY.color),font:p("",l.TY.font),height:p("",l.TY.height),motion:p("",l.TY.motion),shadow:p("",l.TY.shadow),space:p("",l.TY.space),text:p("",l.TY.text),width:p("",l.TY.width),zIndex:p("",l.TY.zIndex)},o=s.motion.filter(e=>{let{name:t}=e;return t.includes("keyframes")}).map(e=>{let{name:t,value:n}=e;return"@keyframes ".concat(t," ").concat(n)}).join("\n");return(0,r.jsx)(m.Z,{children:(0,r.jsxs)("div",{className:"jsx-".concat(o.__hash)+" "+(a().TokensPage||""),children:[(0,r.jsx)("div",{className:"jsx-".concat(o.__hash)+" "+(a().Banner||""),children:(0,r.jsx)("h1",{className:"jsx-".concat(o.__hash),children:"Tokens"})}),(0,r.jsxs)("div",{className:"jsx-".concat(o.__hash)+" "+(a().Tokens||""),children:[(0,r.jsx)("nav",{className:"jsx-".concat(o.__hash)+" "+(a().TokensNav||""),children:(0,r.jsx)("ul",{className:"jsx-".concat(o.__hash),children:f.map(e=>{if(!e.url)return null;let t=n.asPath.endsWith((0,h.lV)(e.title));return(0,r.jsx)("li",{className:"jsx-".concat(o.__hash),children:(0,r.jsx)(d(),{href:e.url,"aria-current":t?"page":void 0,children:e.title})},e.title)})})}),(0,r.jsx)(c.Z,{children:s[t].sort(e=>e.name.includes("ease")||e.name.includes("linear")?-1:1).map(e=>(0,r.jsx)(c.Z.Item,{category:t,token:e},e.name))})]}),(0,r.jsx)(i(),{id:o.__hash,children:o})]})})}},20627:function(e){e.exports={Breadcrumbs:"Breadcrumbs_Breadcrumbs__HlBDV"}},81423:function(e){e.exports={Container:"Container_Container__G2fbY"}},51781:function(e){e.exports={Longform:"Longform_Longform__qNwjb","usage-list":"Longform_usage-list__iWBiB",Content:"Longform_Content__Q1ZR9",firstParagraphIsLede:"Longform_firstParagraphIsLede__iB9hY"}},48934:function(e){e.exports={Page:"Page_Page__k_goF",Post:"Page_Post__zBRzR",PostContent:"Page_PostContent__UCVTC",Footer:"Page_Footer__97FKe",TOCWrapper:"Page_TOCWrapper__1EwAV"}},83152:function(e){e.exports={TOC:"TOC_TOC__caAZ_",isNested:"TOC_isNested__bV6Bz",Link:"TOC_Link__7eZBF",Header:"TOC_Header__7UuAd",Item:"TOC_Item__u4K8I",active:"TOC_active__n1Lqs",TOCItemMaxWidth:"TOC_TOCItemMaxWidth__ermSl",Toggle:"TOC_Toggle__wiUL0"}},18187:function(e){e.exports={TokensPage:"TokensPage_TokensPage__fh0Me",Banner:"TokensPage_Banner__rCdx7",TokensNav:"TokensPage_TokensNav__RHJfN"}}}]);