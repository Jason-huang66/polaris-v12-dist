(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1490],{82889:function(e,l,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/index-table-with-bulk-actions",function(){return t(3662)}])},3662:function(e,l,t){"use strict";t.r(l);var n=t(24246),s=t(30324),r=t(36042),i=t(24115),o=t(88470),a=t(29324);t(27378);var u=t(64515);l.default=(0,u.y)(function(){let e=[{id:"1020",order:"#1020",date:"Jul 20 at 4:34pm",customer:"Jaydon Stanton",total:"$969.44",paymentStatus:(0,n.jsx)(s.C,{progress:"complete",children:"Paid"}),fulfillmentStatus:(0,n.jsx)(s.C,{progress:"incomplete",children:"Unfulfilled"})},{id:"1019",order:"#1019",date:"Jul 20 at 3:46pm",customer:"Ruben Westerfelt",total:"$701.19",paymentStatus:(0,n.jsx)(s.C,{progress:"partiallyComplete",children:"Partially paid"}),fulfillmentStatus:(0,n.jsx)(s.C,{progress:"incomplete",children:"Unfulfilled"})},{id:"1018",order:"#1018",date:"Jul 20 at 3.44pm",customer:"Leo Carder",total:"$798.24",paymentStatus:(0,n.jsx)(s.C,{progress:"complete",children:"Paid"}),fulfillmentStatus:(0,n.jsx)(s.C,{progress:"incomplete",children:"Unfulfilled"})}],{selectedResources:l,allResourcesSelected:t,handleSelectionChange:u}=(0,r.T)(e),c=e.map((e,t)=>{let{id:s,order:r,date:a,customer:u,total:c,paymentStatus:d,fulfillmentStatus:m}=e;return(0,n.jsxs)(i.m.Row,{id:s,selected:l.includes(s),position:t,children:[(0,n.jsx)(i.m.Cell,{children:(0,n.jsx)(o.x,{variant:"bodyMd",fontWeight:"bold",as:"span",children:r})}),(0,n.jsx)(i.m.Cell,{children:a}),(0,n.jsx)(i.m.Cell,{children:u}),(0,n.jsx)(i.m.Cell,{children:c}),(0,n.jsx)(i.m.Cell,{children:d}),(0,n.jsx)(i.m.Cell,{children:m})]},s)});return(0,n.jsx)(a.z,{children:(0,n.jsx)(i.m,{resourceName:{singular:"order",plural:"orders"},itemCount:e.length,selectedItemsCount:t?"All":l.length,onSelectionChange:u,headings:[{title:"Order"},{title:"Date"},{title:"Customer"},{title:"Total",alignment:"end"},{title:"Payment status"},{title:"Fulfillment status"}],bulkActions:[{content:"Add tags",onAction:()=>console.log("Todo: implement bulk add tags")},{content:"Remove tags",onAction:()=>console.log("Todo: implement bulk remove tags")},{content:"Delete orders",onAction:()=>console.log("Todo: implement bulk delete")}],promotedBulkActions:[{content:"Create shipping labels",onAction:()=>console.log("Todo: implement bulk edit")}],children:c})})})},36042:function(e,l,t){"use strict";let n;t.d(l,{T:function(){return o}});var s,r=t(27378);function i(e){if("id"in e)return e.id;throw Error("Your resource does not directly contain an `id`. Pass a `resourceIDResolver` to `useIndexResourceState`")}function o(e,{selectedResources:l=[],allResourcesSelected:t=!1,resourceIDResolver:s=i,resourceFilter:o}={selectedResources:[],allResourcesSelected:!1,resourceIDResolver:i,resourceFilter:void 0}){let[a,u]=(0,r.useState)(l),[c,d]=(0,r.useState)(t),m=(0,r.useCallback)((l,t,r,i)=>{switch(l===n.All?d(t):c&&d(!1),l){case n.Single:u(e=>t?[...e,r]:e.filter(e=>e!==r));break;case n.All:case n.Page:if(o){let m=e.filter(o);u(t&&a.length<m.length?m.map(s):[])}else u(t?e.map(s):[]);break;case n.Multi:if(!r)break;u(l=>{let n=[],i=o?e.filter(o):e;for(let a=r[0];a<=r[1];a++)if(i.includes(e[a])){let u=s(e[a]);(t&&!l.includes(u)||!t&&l.includes(u))&&n.push(u)}return t?[...l,...n]:l.filter(e=>!n.includes(e))});break;case n.Range:if(!r)break;u(l=>{let n=o?e.filter(o):e,i=n.map(s),u=i.slice(Number(r[0]),Number(r[1])+1),c=u.some(e=>a.includes(e)),d=u.every(e=>a.includes(e)),m=!d&&(t||c)?[...new Set([...l,...u]).values()]:l.filter(e=>!u.includes(e));return m})}},[c,o,a,e,s]),f=(0,r.useCallback)(()=>{u([]),d(!1)},[]),p=(0,r.useCallback)(e=>{let l=[...a],t=l.filter(l=>!e.includes(l));u(t),0===t.length&&d(!1)},[a]);return{selectedResources:a,allResourcesSelected:c,handleSelectionChange:m,clearSelection:f,removeSelectedResources:p}}(s=n||(n={})).All="all",s.Page="page",s.Multi="multi",s.Single="single",s.Range="range"}},function(e){e.O(0,[7162,4515,3121,7298,2131,8073,7693,1472,1538,4115,9774,2888,179],function(){return e(e.s=82889)}),_N_E=e.O()}]);