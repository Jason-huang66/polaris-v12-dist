(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3083],{35649:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/index-table-small-screen",function(){return l(32859)}])},32859:function(e,t,l){"use strict";l.r(t);var s=l(24246),n=l(30324),r=l(36042),i=l(24115),a=l(73260),u=l(88470),d=l(39355),c=l(29324);l(27378);var o=l(64515);t.default=(0,o.y)(function(){let e=[{id:"1020",order:"#1020",date:"Jul 20 at 4:34pm",customer:"Jaydon Stanton",total:"$969.44",paymentStatus:(0,s.jsx)(n.C,{progress:"complete",children:"Paid"}),fulfillmentStatus:(0,s.jsx)(n.C,{progress:"incomplete",children:"Unfulfilled"})},{id:"1019",order:"#1019",date:"Jul 20 at 3:46pm",customer:"Ruben Westerfelt",total:"$701.19",paymentStatus:(0,s.jsx)(n.C,{progress:"partiallyComplete",children:"Partially paid"}),fulfillmentStatus:(0,s.jsx)(n.C,{progress:"incomplete",children:"Unfulfilled"})},{id:"1018",order:"#1018",date:"Jul 20 at 3.44pm",customer:"Leo Carder",total:"$798.24",paymentStatus:(0,s.jsx)(n.C,{progress:"complete",children:"Paid"}),fulfillmentStatus:(0,s.jsx)(n.C,{progress:"incomplete",children:"Unfulfilled"})}],{selectedResources:t,allResourcesSelected:l,handleSelectionChange:o}=(0,r.T)(e),p=e.map((e,l)=>{let{id:n,order:r,date:c,customer:o,total:p,paymentStatus:f,fulfillmentStatus:m}=e;return(0,s.jsx)(i.m.Row,{id:n,selected:t.includes(n),position:l,children:(0,s.jsx)("div",{style:{padding:"12px 16px",width:"100%"},children:(0,s.jsxs)(a.E,{gap:"100",children:[(0,s.jsxs)(u.x,{as:"span",variant:"bodySm",tone:"subdued",children:[r," • ",c]}),(0,s.jsxs)(d.g,{align:"space-between",children:[(0,s.jsx)(u.x,{as:"span",variant:"bodyMd",fontWeight:"semibold",children:o}),(0,s.jsx)(u.x,{as:"span",variant:"bodyMd",children:p})]}),(0,s.jsxs)(d.g,{align:"start",gap:"100",children:[f,m]})]})})},n)});return(0,s.jsx)("div",{style:{width:"430px"},children:(0,s.jsx)(c.z,{children:(0,s.jsx)(i.m,{resourceName:{singular:"order",plural:"orders"},itemCount:e.length,selectedItemsCount:l?"All":t.length,condensed:!0,onSelectionChange:o,headings:[{title:"Order"},{title:"Date"},{title:"Customer"},{title:"Total",alignment:"end"},{title:"Payment status"},{title:"Fulfillment status"}],children:p})})})})},36042:function(e,t,l){"use strict";let s;l.d(t,{T:function(){return a}});var n,r=l(27378);function i(e){if("id"in e)return e.id;throw Error("Your resource does not directly contain an `id`. Pass a `resourceIDResolver` to `useIndexResourceState`")}function a(e,{selectedResources:t=[],allResourcesSelected:l=!1,resourceIDResolver:n=i,resourceFilter:a}={selectedResources:[],allResourcesSelected:!1,resourceIDResolver:i,resourceFilter:void 0}){let[u,d]=(0,r.useState)(t),[c,o]=(0,r.useState)(l),p=(0,r.useCallback)((t,l,r,i)=>{switch(t===s.All?o(l):c&&o(!1),t){case s.Single:d(e=>l?[...e,r]:e.filter(e=>e!==r));break;case s.All:case s.Page:if(a){let p=e.filter(a);d(l&&u.length<p.length?p.map(n):[])}else d(l?e.map(n):[]);break;case s.Multi:if(!r)break;d(t=>{let s=[],i=a?e.filter(a):e;for(let u=r[0];u<=r[1];u++)if(i.includes(e[u])){let d=n(e[u]);(l&&!t.includes(d)||!l&&t.includes(d))&&s.push(d)}return l?[...t,...s]:t.filter(e=>!s.includes(e))});break;case s.Range:if(!r)break;d(t=>{let s=a?e.filter(a):e,i=s.map(n),d=i.slice(Number(r[0]),Number(r[1])+1),c=d.some(e=>u.includes(e)),o=d.every(e=>u.includes(e)),p=!o&&(l||c)?[...new Set([...t,...d]).values()]:t.filter(e=>!d.includes(e));return p})}},[c,a,u,e,n]),f=(0,r.useCallback)(()=>{d([]),o(!1)},[]),m=(0,r.useCallback)(e=>{let t=[...u],l=t.filter(t=>!e.includes(t));d(l),0===l.length&&o(!1)},[u]);return{selectedResources:u,allResourcesSelected:c,handleSelectionChange:p,clearSelection:f,removeSelectedResources:m}}(n=s||(s={})).All="all",n.Page="page",n.Multi="multi",n.Single="single",n.Range="range"}},function(e){e.O(0,[7162,4515,3121,7298,2131,8073,7693,1472,1538,4115,9774,2888,179],function(){return e(e.s=35649)}),_N_E=e.O()}]);