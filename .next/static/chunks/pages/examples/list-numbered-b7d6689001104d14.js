(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9110],{39821:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/list-numbered",function(){return n(99753)}])},99753:function(t,e,n){"use strict";n.r(e);var r=n(24246),i=n(21248);n(27378);var u=n(64515);e.default=(0,u.y)(function(){return(0,r.jsxs)(i.a,{type:"number",children:[(0,r.jsx)(i.a.Item,{children:"First item"}),(0,r.jsx)(i.a.Item,{children:"Second item"}),(0,r.jsx)(i.a.Item,{children:"Third Item"})]})})},21248:function(t,e,n){"use strict";n.d(e,{a:function(){return c}});var r=n(27378),i=n(39627),u={List:"Polaris-List",typeNumber:"Polaris-List--typeNumber",Item:"Polaris-List__Item",spacingLoose:"Polaris-List--spacingLoose"};let c=function({children:t,gap:e="loose",type:n="bullet"}){let c=(0,i.AK)(u.List,e&&u[(0,i.OZ)("spacing",e)],n&&u[(0,i.OZ)("type",n)]);return r.createElement("bullet"===n?"ul":"ol",{className:c},t)};c.Item=function({children:t}){return r.createElement("li",{className:u.Item},t)}},39627:function(t,e,n){"use strict";n.d(e,{AK:function(){return u},OX:function(){return l},OZ:function(){return c},jD:function(){return o},vW:function(){return s}});var r=n(53571),i=n(24528);function u(...t){return t.filter(Boolean).join(" ")}function c(t,e){return`${t}${e.charAt(0).toUpperCase()}${e.slice(1)}`}function s(t){let e=Object.entries(t).filter(([t,e])=>null!=e);return e.length?Object.fromEntries(e):void 0}function o(t,e,n,u){return u?Object.fromEntries(Object.entries((0,i.K)(u)?Object.fromEntries(Object.entries(u).map(([t,e])=>[t,`var(--p-${n}-${e})`])):{[r.vi[0]]:`var(--p-${n}-${u})`}).map(([n,r])=>[`--pc-${t}-${e}-${n}`,r])):{}}function l(t,e,n){return n?(0,i.K)(n)?Object.fromEntries(Object.entries(n).map(([n,r])=>[`--pc-${t}-${e}-${n}`,r])):{[`--pc-${t}-${e}-${r.vi[0]}`]:n}:{}}},24528:function(t,e,n){"use strict";function r(t){let e=typeof t;return null!=t&&("object"===e||"function"===e)}n.d(e,{K:function(){return r}})}},function(t){t.O(0,[4515,9774,2888,179],function(){return t(t.s=39821)}),_N_E=t.O()}]);