(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6645],{70818:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/index-filters-with-no-search-or-filters",function(){return l(82646)}])},82646:function(e,t,l){"use strict";l.r(t);var a=l(24246),n=l(18963),i=l(88470),r=l(30324),s=l(36042),o=l(24115),d=l(29324),c=l(26974),u=l(27378),m=l(64515);t.default=(0,m.y)(function(){let e=e=>new Promise(t=>setTimeout(t,e)),[t,l]=(0,u.useState)(["All","Unpaid","Open","Closed","Local delivery","Local pickup"]),m=e=>{let a=[...t];a.splice(e,1),l(a),b(0)},p=async a=>(l([...t,a]),b(t.length),await e(1),!0),h=t.map((t,a)=>({content:t,index:a,onAction(){},id:"".concat(t,"-").concat(a),isLocked:0===a,actions:0===a?[]:[{type:"rename",onAction(){},async onPrimaryAction(t){let n=h.map((e,l)=>l===a?t:e.content);return await e(1),l(n),!0}},{type:"duplicate",onPrimaryAction:async t=>(await e(1),p(t),!0)},{type:"edit"},{type:"delete",onPrimaryAction:async()=>(await e(1),m(a),!0)}]})),[y,b]=(0,u.useState)(0),f=async a=>(await e(500),l([...t,a]),b(t.length),!0),[C,g]=(0,u.useState)(["order asc"]),{mode:x,setMode:j}=(0,n.B)(),w=()=>{},A=async()=>(await e(1),!0),v=[{id:"1020",order:(0,a.jsx)(i.x,{as:"span",variant:"bodyMd",fontWeight:"semibold",children:"#1020"}),date:"Jul 20 at 4:34pm",customer:"Jaydon Stanton",total:"$969.44",paymentStatus:(0,a.jsx)(r.C,{progress:"complete",children:"Paid"}),fulfillmentStatus:(0,a.jsx)(r.C,{progress:"incomplete",children:"Unfulfilled"})},{id:"1019",order:(0,a.jsx)(i.x,{as:"span",variant:"bodyMd",fontWeight:"semibold",children:"#1019"}),date:"Jul 20 at 3:46pm",customer:"Ruben Westerfelt",total:"$701.19",paymentStatus:(0,a.jsx)(r.C,{progress:"partiallyComplete",children:"Partially paid"}),fulfillmentStatus:(0,a.jsx)(r.C,{progress:"incomplete",children:"Unfulfilled"})},{id:"1018",order:(0,a.jsx)(i.x,{as:"span",variant:"bodyMd",fontWeight:"semibold",children:"#1018"}),date:"Jul 20 at 3.44pm",customer:"Leo Carder",total:"$798.24",paymentStatus:(0,a.jsx)(r.C,{progress:"complete",children:"Paid"}),fulfillmentStatus:(0,a.jsx)(r.C,{progress:"incomplete",children:"Unfulfilled"})}],{selectedResources:S,allResourcesSelected:L,handleSelectionChange:_}=(0,s.T)(v),P=v.map((e,t)=>{let{id:l,order:n,date:r,customer:s,total:d,paymentStatus:c,fulfillmentStatus:u}=e;return(0,a.jsxs)(o.m.Row,{id:l,selected:S.includes(l),position:t,children:[(0,a.jsx)(o.m.Cell,{children:(0,a.jsx)(i.x,{variant:"bodyMd",fontWeight:"bold",as:"span",children:n})}),(0,a.jsx)(o.m.Cell,{children:r}),(0,a.jsx)(o.m.Cell,{children:s}),(0,a.jsx)(o.m.Cell,{children:d}),(0,a.jsx)(o.m.Cell,{children:c}),(0,a.jsx)(o.m.Cell,{children:u})]},l)});return(0,a.jsxs)(d.z,{children:[(0,a.jsx)(c.S,{sortOptions:[{label:"Order",value:"order asc",directionLabel:"Ascending"},{label:"Order",value:"order desc",directionLabel:"Descending"},{label:"Customer",value:"customer asc",directionLabel:"A-Z"},{label:"Customer",value:"customer desc",directionLabel:"Z-A"},{label:"Date",value:"date asc",directionLabel:"A-Z"},{label:"Date",value:"date desc",directionLabel:"Z-A"},{label:"Total",value:"total asc",directionLabel:"Ascending"},{label:"Total",value:"total desc",directionLabel:"Descending"}],sortSelected:C,queryValue:"",queryPlaceholder:"Searching in all",onQueryChange(){},onQueryClear(){},onSort:g,primaryAction:0===y?{type:"save-as",onAction:f,disabled:!1,loading:!1}:{type:"save",onAction:A,disabled:!1,loading:!1},cancelAction:{onAction:w,disabled:!1,loading:!1},tabs:h,selected:y,onSelect:b,canCreateNewView:!0,onCreateNewView:f,filters:[],appliedFilters:[],onClearAll(){},mode:x,setMode:j,hideFilters:!0,hideQueryField:!0}),(0,a.jsx)(o.m,{resourceName:{singular:"order",plural:"orders"},itemCount:v.length,selectedItemsCount:L?"All":S.length,onSelectionChange:_,headings:[{title:"Order"},{title:"Date"},{title:"Customer"},{title:"Total",alignment:"end"},{title:"Payment status"},{title:"Fulfillment status"}],children:P})]})})}},function(e){e.O(0,[7162,4515,3121,7298,2131,8073,7693,1472,1538,5293,4115,8133,1738,1248,9774,2888,179],function(){return e(e.s=70818)}),_N_E=e.O()}]);