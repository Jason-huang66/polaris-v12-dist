(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5025],{73427:function(e,l,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/index-table-with-sticky-last-column",function(){return t(39021)}])},39021:function(e,l,t){"use strict";t.r(l);var r=t(24246),s=t(30324),n=t(36042),i=t(24115),a=t(88470),u=t(29324);t(27378);var c=t(64515);l.default=(0,c.y)(function(){let e=[{id:"1020",order:"#1020",date:"Jul 20 at 4:34pm",customer:"Jaydon Stanton",total:"$969.44",paymentStatus:(0,r.jsx)(s.C,{progress:"complete",children:"Paid"}),fulfillmentStatus:(0,r.jsx)(s.C,{progress:"incomplete",children:"Unfulfilled"})},{id:"1019",order:"#1019",date:"Jul 20 at 3:46pm",customer:"Ruben Westerfelt",total:"$701.19",paymentStatus:(0,r.jsx)(s.C,{progress:"partiallyComplete",children:"Partially paid"}),fulfillmentStatus:(0,r.jsx)(s.C,{progress:"incomplete",children:"Unfulfilled"})},{id:"1018",order:"#1018",date:"Jul 20 at 3.44pm",customer:"Leo Carder",total:"$798.24",paymentStatus:(0,r.jsx)(s.C,{progress:"complete",children:"Paid"}),fulfillmentStatus:(0,r.jsx)(s.C,{progress:"incomplete",children:"Unfulfilled"})}],{selectedResources:l,allResourcesSelected:t,handleSelectionChange:c}=(0,n.T)(e),o=e.map((e,t)=>{let{id:s,order:n,date:u,customer:c,total:o,paymentStatus:d,fulfillmentStatus:m}=e;return(0,r.jsxs)(i.m.Row,{id:s,selected:l.includes(s),position:t,children:[(0,r.jsx)(i.m.Cell,{children:(0,r.jsx)(a.x,{variant:"bodyMd",fontWeight:"bold",as:"span",children:n})}),(0,r.jsx)(i.m.Cell,{children:u}),(0,r.jsx)(i.m.Cell,{children:c}),(0,r.jsx)(i.m.Cell,{children:o}),(0,r.jsx)(i.m.Cell,{children:d}),(0,r.jsx)(i.m.Cell,{children:m})]},s)});return(0,r.jsx)(u.z,{children:(0,r.jsx)(i.m,{resourceName:{singular:"order",plural:"orders"},itemCount:e.length,selectedItemsCount:t?"All":l.length,onSelectionChange:c,headings:[{title:"Order"},{title:"Date"},{title:"Customer"},{title:"Total",alignment:"end"},{title:"Payment status"},{title:"Fulfillment status"}],lastColumnSticky:!0,children:o})})})},36042:function(e,l,t){"use strict";let r;t.d(l,{T:function(){return a}});var s,n=t(27378);function i(e){if("id"in e)return e.id;throw Error("Your resource does not directly contain an `id`. Pass a `resourceIDResolver` to `useIndexResourceState`")}function a(e,{selectedResources:l=[],allResourcesSelected:t=!1,resourceIDResolver:s=i,resourceFilter:a}={selectedResources:[],allResourcesSelected:!1,resourceIDResolver:i,resourceFilter:void 0}){let[u,c]=(0,n.useState)(l),[o,d]=(0,n.useState)(t),m=(0,n.useCallback)((l,t,n,i)=>{switch(l===r.All?d(t):o&&d(!1),l){case r.Single:c(e=>t?[...e,n]:e.filter(e=>e!==n));break;case r.All:case r.Page:if(a){let m=e.filter(a);c(t&&u.length<m.length?m.map(s):[])}else c(t?e.map(s):[]);break;case r.Multi:if(!n)break;c(l=>{let r=[],i=a?e.filter(a):e;for(let u=n[0];u<=n[1];u++)if(i.includes(e[u])){let c=s(e[u]);(t&&!l.includes(c)||!t&&l.includes(c))&&r.push(c)}return t?[...l,...r]:l.filter(e=>!r.includes(e))});break;case r.Range:if(!n)break;c(l=>{let r=a?e.filter(a):e,i=r.map(s),c=i.slice(Number(n[0]),Number(n[1])+1),o=c.some(e=>u.includes(e)),d=c.every(e=>u.includes(e)),m=!d&&(t||o)?[...new Set([...l,...c]).values()]:l.filter(e=>!c.includes(e));return m})}},[o,a,u,e,s]),f=(0,n.useCallback)(()=>{c([]),d(!1)},[]),p=(0,n.useCallback)(e=>{let l=[...u],t=l.filter(l=>!e.includes(l));c(t),0===t.length&&d(!1)},[u]);return{selectedResources:u,allResourcesSelected:o,handleSelectionChange:m,clearSelection:f,removeSelectedResources:p}}(s=r||(r={})).All="all",s.Page="page",s.Multi="multi",s.Single="single",s.Range="range"}},function(e){e.O(0,[7162,4515,3121,7298,2131,8073,7693,1472,1538,4115,9774,2888,179],function(){return e(e.s=73427)}),_N_E=e.O()}]);