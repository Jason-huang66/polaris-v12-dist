(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7236],{29182:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/avatar-initials",function(){return r(57217)}])},57217:function(e,t,r){"use strict";r.r(t);var n=r(24246),a=r(43073);r(27378);var i=r(64515);t.default=(0,i.y)(function(){return(0,n.jsx)(a.q,{initials:"WW",name:"Woluwayemisi Weun-Jung"})})},43073:function(e,t,r){"use strict";r.d(t,{q:function(){return m}});var n,a,i=r(27378),o=r(39627),s=r(72606),l={Avatar:"Polaris-Avatar",imageHasLoaded:"Polaris-Avatar--imageHasLoaded",Text:"Polaris-Avatar__Text",long:"Polaris-Avatar--long",hidden:"Polaris-Avatar--hidden",sizeXs:"Polaris-Avatar--sizeXs",sizeSm:"Polaris-Avatar--sizeSm",sizeMd:"Polaris-Avatar--sizeMd",sizeLg:"Polaris-Avatar--sizeLg",sizeXl:"Polaris-Avatar--sizeXl",styleOne:"Polaris-Avatar--styleOne",styleTwo:"Polaris-Avatar--styleTwo",styleThree:"Polaris-Avatar--styleThree",styleFour:"Polaris-Avatar--styleFour",styleFive:"Polaris-Avatar--styleFive",Image:"Polaris-Avatar__Image",Initials:"Polaris-Avatar__Initials",Svg:"Polaris-Avatar__Svg"},u=r(57963),c=r(17017);(n=a||(a={})).Pending="PENDING",n.Loaded="LOADED",n.Errored="ERRORED";let d=["one","two","three","four","five"],f={xs:"3",sm:"2.5",md:"2.5",lg:"2.5",xl:"2"};function m({name:e,source:t,onError:r,initials:n,customer:m,size:v="md",accessibilityLabel:p}){var E;let A;let g=(0,u.Q)(),P=(0,s.u)(),[h,O]=(0,i.useState)(a.Pending);(0,i.useEffect)(()=>{O(a.Pending)},[t]);let $=(0,i.useCallback)(()=>{O(a.Errored),r&&r()},[r]),_=(0,i.useCallback)(()=>{O(a.Loaded)},[]),C=t&&h!==a.Errored;if(p)A=p;else if(e)A=e;else if(n){let b=n.split("").join(" ");A=g.translate("Polaris.Avatar.labelWithInitials",{initials:b})}let y=(0,o.AK)(l.Avatar,v&&l[(0,o.OZ)("size",v)],C&&h===a.Loaded&&l.imageHasLoaded,!m&&!t&&l[(0,o.OZ)("style",(E=e||n)?d[function(e){let t=0;for(let r of e)t^=r.charCodeAt(0);return t}(E)%d.length]:d[0])]),j=(0,o.AK)(l.Text,(n?.length||0)>2&&l.long),L=(0,o.AK)(l.Image,h!==a.Loaded&&l.hidden),w=t&&P&&h!==a.Errored?i.createElement(c.E,{className:L,source:t,alt:"",role:"presentation",onLoad:_,onError:$}):null,N=i.createElement(i.Fragment,null,i.createElement("path",{fill:"none",d:"M25.5 13.5C25.5 16.5376 23.0376 19 20 19C16.9624 19 14.5 16.5376 14.5 13.5C14.5 10.4624 16.9624 8 20 8C23.0376 8 25.5 10.4624 25.5 13.5Z",stroke:"currentColor",strokeWidth:f[v]}),i.createElement("path",{fill:"none",d:"M10.3433 29.682L9.47 31.254C9.03481 32.0373 9.60125 33 10.4974 33H29.5026C30.3988 33 30.9652 32.0373 30.53 31.254L29.6567 29.682C27.7084 26.175 24.0119 24 20 24C15.9882 24 12.2916 26.175 10.3433 29.682Z",stroke:"currentColor",strokeWidth:f[v],strokeLinecap:"round",strokeLinejoin:"round"})),k=m||!n?N:i.createElement("text",{className:j,x:"50%",y:"50%",dy:"0.35em",fill:"currentColor",textAnchor:"middle"},n),x=C?null:i.createElement("span",{className:l.Initials},i.createElement("svg",{className:l.Svg,viewBox:"0 0 40 40"},k));return i.createElement("span",{"aria-label":A,role:A?"img":"presentation",className:y},x,w)}},17017:function(e,t,r){"use strict";r.d(t,{E:function(){return a}});var n=r(27378);function a({alt:e,sourceSet:t,source:r,crossOrigin:a,onLoad:i,className:o,...s}){let l=t?t.map(({source:e,descriptor:t})=>`${e} ${t}`).join(","):null,u=(0,n.useCallback)(()=>{i&&i()},[i]);return n.createElement("img",Object.assign({alt:e,src:r,crossOrigin:a,className:o,onLoad:u},l?{srcSet:l}:{},s))}},39627:function(e,t,r){"use strict";r.d(t,{AK:function(){return i},OX:function(){return u},OZ:function(){return o},jD:function(){return l},vW:function(){return s}});var n=r(53571),a=r(24528);function i(...e){return e.filter(Boolean).join(" ")}function o(e,t){return`${e}${t.charAt(0).toUpperCase()}${t.slice(1)}`}function s(e){let t=Object.entries(e).filter(([e,t])=>null!=t);return t.length?Object.fromEntries(t):void 0}function l(e,t,r,i){return i?Object.fromEntries(Object.entries((0,a.K)(i)?Object.fromEntries(Object.entries(i).map(([e,t])=>[e,`var(--p-${r}-${t})`])):{[n.vi[0]]:`var(--p-${r}-${i})`}).map(([r,n])=>[`--pc-${e}-${t}-${r}`,n])):{}}function u(e,t,r){return r?(0,a.K)(r)?Object.fromEntries(Object.entries(r).map(([r,n])=>[`--pc-${e}-${t}-${r}`,n])):{[`--pc-${e}-${t}-${n.vi[0]}`]:r}:{}}},54696:function(e,t,r){"use strict";r.d(t,{U:function(){return n}});class n extends Error{constructor(e=""){super(`${e?`${e} `:e}Your application must be wrapped in an <AppProvider> component. See https://polaris.shopify.com/components/app-provider for implementation instructions.`),this.name="MissingAppProviderError"}}},57963:function(e,t,r){"use strict";r.d(t,{Q:function(){return o}});var n=r(27378),a=r(54696),i=r(37623);function o(){let e=(0,n.useContext)(i.O);if(!e)throw new a.U("No i18n was provided.");return e}},24528:function(e,t,r){"use strict";function n(e){let t=typeof e;return null!=e&&("object"===t||"function"===t)}r.d(t,{K:function(){return n}})}},function(e){e.O(0,[4515,9774,2888,179],function(){return e(e.s=29182)}),_N_E=e.O()}]);