(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4967],{99177:function(t,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/button-group-default",function(){return r(27404)}])},27404:function(t,n,r){"use strict";r.r(n);var e=r(24246),u=r(84879),o=r(33121);r(27378);var a=r(64515);n.default=(0,a.y)(function(){return(0,e.jsxs)(u.h,{children:[(0,e.jsx)(o.z,{children:"Cancel"}),(0,e.jsx)(o.z,{variant:"primary",children:"Save"})]})})},84879:function(t,n,r){"use strict";r.d(n,{h:function(){return s}});var e=r(27378),u=r(39627),o=r(26482),a={ButtonGroup:"Polaris-ButtonGroup",Item:"Polaris-ButtonGroup__Item","Item-plain":"Polaris-ButtonGroup__Item--plain",variantSegmented:"Polaris-ButtonGroup--variantSegmented","Item-focused":"Polaris-ButtonGroup__Item--focused",fullWidth:"Polaris-ButtonGroup--fullWidth",extraTight:"Polaris-ButtonGroup--extraTight",tight:"Polaris-ButtonGroup--tight",loose:"Polaris-ButtonGroup--loose",noWrap:"Polaris-ButtonGroup--noWrap"},i=r(95336);function l({button:t}){let{value:n,setTrue:r,setFalse:o}=(0,i.O)(!1),l=(0,u.AK)(a.Item,n&&a["Item-focused"],"plain"===t.props.variant&&a["Item-plain"]);return e.createElement("div",{className:l,onFocus:r,onBlur:o},t)}function s({children:t,gap:n,variant:r,fullWidth:i,connectedTop:s,noWrap:c}){let p=(0,u.AK)(a.ButtonGroup,n&&a[n],r&&a[(0,u.OZ)("variant",r)],i&&a.fullWidth,c&&a.noWrap),f=(0,o.gD)(t).map((t,n)=>e.createElement(l,{button:t,key:n}));return e.createElement("div",{className:p,"data-buttongroup-variant":r,"data-buttongroup-connected-top":s,"data-buttongroup-full-width":i,"data-buttongroup-no-wrap":c},f)}},26482:function(t,n,r){"use strict";r.d(n,{M2:function(){return l},Mc:function(){return a},Vr:function(){return s},gD:function(){return i},oh:function(){return u}});var e=r(27378);function u(t,n,r){return null==t?null:a(t,n)?t:e.createElement(n,r,t)}let o=(t,n)=>t===n;function a(t,n){if(null==t||!(0,e.isValidElement)(t)||"string"==typeof t.type)return!1;let{type:r}=t,u=t.props?.__type__,a=u||r,i=Array.isArray(n)?n:[n];return i.some(t=>"string"!=typeof a&&o(t,a))}function i(t,n=()=>!0){return e.Children.toArray(t).filter(t=>(0,e.isValidElement)(t)&&n(t))}function l({condition:t,wrapper:n,children:r}){return t?n(r):r}function s({condition:t,children:n}){return t?n:null}},95336:function(t,n,r){"use strict";r.d(n,{O:function(){return u}});var e=r(27378);function u(t){let[n,r]=(0,e.useState)(t);return{value:n,toggle:(0,e.useCallback)(()=>r(t=>!t),[]),setTrue:(0,e.useCallback)(()=>r(!0),[]),setFalse:(0,e.useCallback)(()=>r(!1),[])}}}},function(t){t.O(0,[4515,3121,9774,2888,179],function(){return t(t.s=99177)}),_N_E=t.O()}]);