(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9590],{63468:function(e,l,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/index-table-with-disabled-rows",function(){return t(33678)}])},33678:function(e,l,t){"use strict";t.r(l);var r=t(24246),s=t(30324),i=t(36042),n=t(24115),a=t(88470),u=t(29324);t(27378);var d=t(64515);l.default=(0,d.y)(function(){let e=[{id:"1020",order:"#1020",date:"Jul 20 at 4:34pm",customer:"Jaydon Stanton",total:"$969.44",paymentStatus:(0,r.jsx)(s.C,{progress:"complete",children:"Paid"}),fulfillmentStatus:(0,r.jsx)(s.C,{progress:"incomplete",children:"Unfulfilled"}),disabled:!1},{id:"1019",order:"#1019",date:"Jul 20 at 3:46pm",customer:"Ruben Westerfelt",total:"$701.19",paymentStatus:(0,r.jsx)(s.C,{progress:"partiallyComplete",children:"Partially paid"}),fulfillmentStatus:(0,r.jsx)(s.C,{progress:"incomplete",children:"Unfulfilled"}),disabled:!0},{id:"1018",order:"#1018",date:"Jul 20 at 3.44pm",customer:"Leo Carder",total:"$798.24",paymentStatus:(0,r.jsx)(s.C,{progress:"complete",children:"Paid"}),fulfillmentStatus:(0,r.jsx)(s.C,{progress:"incomplete",children:"Unfulfilled"}),disabled:!1}],l=e.filter(e=>!e.disabled),{selectedResources:t,allResourcesSelected:d,handleSelectionChange:c}=(0,i.T)(l),o=e.map((e,l)=>{let{id:s,order:i,date:u,customer:d,total:c,paymentStatus:o,fulfillmentStatus:f,disabled:m}=e;return(0,r.jsxs)(n.m.Row,{id:s,selected:t.includes(s),position:l,disabled:m,children:[(0,r.jsx)(n.m.Cell,{children:(0,r.jsx)(a.x,{variant:"bodyMd",fontWeight:"bold",as:"span",children:i})}),(0,r.jsx)(n.m.Cell,{children:u}),(0,r.jsx)(n.m.Cell,{children:d}),(0,r.jsx)(n.m.Cell,{children:c}),(0,r.jsx)(n.m.Cell,{children:o}),(0,r.jsx)(n.m.Cell,{children:f})]},s)});return(0,r.jsx)(u.z,{children:(0,r.jsx)(n.m,{resourceName:{singular:"order",plural:"orders"},itemCount:l.length,selectedItemsCount:d?"All":t.length,onSelectionChange:c,headings:[{title:"Order"},{title:"Date"},{title:"Customer"},{title:"Total",alignment:"end"},{title:"Payment status"},{title:"Fulfillment status"}],children:o})})})},36042:function(e,l,t){"use strict";let r;t.d(l,{T:function(){return a}});var s,i=t(27378);function n(e){if("id"in e)return e.id;throw Error("Your resource does not directly contain an `id`. Pass a `resourceIDResolver` to `useIndexResourceState`")}function a(e,{selectedResources:l=[],allResourcesSelected:t=!1,resourceIDResolver:s=n,resourceFilter:a}={selectedResources:[],allResourcesSelected:!1,resourceIDResolver:n,resourceFilter:void 0}){let[u,d]=(0,i.useState)(l),[c,o]=(0,i.useState)(t),f=(0,i.useCallback)((l,t,i,n)=>{switch(l===r.All?o(t):c&&o(!1),l){case r.Single:d(e=>t?[...e,i]:e.filter(e=>e!==i));break;case r.All:case r.Page:if(a){let f=e.filter(a);d(t&&u.length<f.length?f.map(s):[])}else d(t?e.map(s):[]);break;case r.Multi:if(!i)break;d(l=>{let r=[],n=a?e.filter(a):e;for(let u=i[0];u<=i[1];u++)if(n.includes(e[u])){let d=s(e[u]);(t&&!l.includes(d)||!t&&l.includes(d))&&r.push(d)}return t?[...l,...r]:l.filter(e=>!r.includes(e))});break;case r.Range:if(!i)break;d(l=>{let r=a?e.filter(a):e,n=r.map(s),d=n.slice(Number(i[0]),Number(i[1])+1),c=d.some(e=>u.includes(e)),o=d.every(e=>u.includes(e)),f=!o&&(t||c)?[...new Set([...l,...d]).values()]:l.filter(e=>!d.includes(e));return f})}},[c,a,u,e,s]),m=(0,i.useCallback)(()=>{d([]),o(!1)},[]),p=(0,i.useCallback)(e=>{let l=[...u],t=l.filter(l=>!e.includes(l));d(t),0===t.length&&o(!1)},[u]);return{selectedResources:u,allResourcesSelected:c,handleSelectionChange:f,clearSelection:m,removeSelectedResources:p}}(s=r||(r={})).All="all",s.Page="page",s.Multi="multi",s.Single="single",s.Range="range"}},function(e){e.O(0,[7162,4515,3121,7298,2131,8073,7693,1472,1538,4115,9774,2888,179],function(){return e(e.s=63468)}),_N_E=e.O()}]);