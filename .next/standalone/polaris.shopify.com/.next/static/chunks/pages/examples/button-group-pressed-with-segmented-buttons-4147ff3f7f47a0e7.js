(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8548],{89958:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/button-group-pressed-with-segmented-buttons",function(){return e(24732)}])},24732:function(t,n,e){"use strict";e.r(n);var r=e(24246),u=e(84879),o=e(33121),i=e(27378),l=e(64515);n.default=(0,l.y)(function(){let[t,n]=(0,i.useState)(0),e=(0,i.useCallback)(e=>{t!==e&&n(e)},[t]);return(0,r.jsxs)(u.h,{variant:"segmented",children:[(0,r.jsx)(o.z,{pressed:0===t,onClick:()=>e(0),children:"Bold"}),(0,r.jsx)(o.z,{pressed:1===t,onClick:()=>e(1),children:"Italic"}),(0,r.jsx)(o.z,{pressed:2===t,onClick:()=>e(2),children:"Underline"})]})})},84879:function(t,n,e){"use strict";e.d(n,{h:function(){return s}});var r=e(27378),u=e(39627),o=e(26482),i={ButtonGroup:"Polaris-ButtonGroup",Item:"Polaris-ButtonGroup__Item","Item-plain":"Polaris-ButtonGroup__Item--plain",variantSegmented:"Polaris-ButtonGroup--variantSegmented","Item-focused":"Polaris-ButtonGroup__Item--focused",fullWidth:"Polaris-ButtonGroup--fullWidth",extraTight:"Polaris-ButtonGroup--extraTight",tight:"Polaris-ButtonGroup--tight",loose:"Polaris-ButtonGroup--loose",noWrap:"Polaris-ButtonGroup--noWrap"},l=e(95336);function a({button:t}){let{value:n,setTrue:e,setFalse:o}=(0,l.O)(!1),a=(0,u.AK)(i.Item,n&&i["Item-focused"],"plain"===t.props.variant&&i["Item-plain"]);return r.createElement("div",{className:a,onFocus:e,onBlur:o},t)}function s({children:t,gap:n,variant:e,fullWidth:l,connectedTop:s,noWrap:c}){let p=(0,u.AK)(i.ButtonGroup,n&&i[n],e&&i[(0,u.OZ)("variant",e)],l&&i.fullWidth,c&&i.noWrap),f=(0,o.gD)(t).map((t,n)=>r.createElement(a,{button:t,key:n}));return r.createElement("div",{className:p,"data-buttongroup-variant":e,"data-buttongroup-connected-top":s,"data-buttongroup-full-width":l,"data-buttongroup-no-wrap":c},f)}},26482:function(t,n,e){"use strict";e.d(n,{M2:function(){return a},Mc:function(){return i},Vr:function(){return s},gD:function(){return l},oh:function(){return u}});var r=e(27378);function u(t,n,e){return null==t?null:i(t,n)?t:r.createElement(n,e,t)}let o=(t,n)=>t===n;function i(t,n){if(null==t||!(0,r.isValidElement)(t)||"string"==typeof t.type)return!1;let{type:e}=t,u=t.props?.__type__,i=u||e,l=Array.isArray(n)?n:[n];return l.some(t=>"string"!=typeof i&&o(t,i))}function l(t,n=()=>!0){return r.Children.toArray(t).filter(t=>(0,r.isValidElement)(t)&&n(t))}function a({condition:t,wrapper:n,children:e}){return t?n(e):e}function s({condition:t,children:n}){return t?n:null}},95336:function(t,n,e){"use strict";e.d(n,{O:function(){return u}});var r=e(27378);function u(t){let[n,e]=(0,r.useState)(t);return{value:n,toggle:(0,r.useCallback)(()=>e(t=>!t),[]),setTrue:(0,r.useCallback)(()=>e(!0),[]),setFalse:(0,r.useCallback)(()=>e(!1),[])}}}},function(t){t.O(0,[4515,3121,9774,2888,179],function(){return t(t.s=89958)}),_N_E=t.O()}]);