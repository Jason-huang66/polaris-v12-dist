(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3546],{53102:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/index-filters-default",function(){return l(84280)}])},84280:function(e,t,l){"use strict";l.r(t);var a=l(24246),n=l(18963),i=l(96233),s=l(27298),o=l(30517),r=l(88470),c=l(30324),d=l(36042),u=l(24115),p=l(29324),m=l(26974),b=l(27378),h=l(64515);t.default=(0,h.y)(function(){let e=e=>new Promise(t=>setTimeout(t,e)),[t,l]=(0,b.useState)(["All","Unpaid","Open","Closed","Local delivery","Local pickup"]),h=e=>{let a=[...t];a.splice(e,1),l(a),C(0)},y=async a=>(l([...t,a]),C(t.length),await e(1),!0),g=t.map((t,a)=>({content:t,index:a,onAction(){},id:"".concat(t,"-").concat(a),isLocked:0===a,actions:0===a?[]:[{type:"rename",onAction(){},async onPrimaryAction(t){let n=g.map((e,l)=>l===a?t:e.content);return await e(1),l(n),!0}},{type:"duplicate",onPrimaryAction:async t=>(await e(1),y(t),!0)},{type:"edit"},{type:"delete",onPrimaryAction:async()=>(await e(1),h(a),!0)}]})),[f,C]=(0,b.useState)(0),v=async a=>(await e(500),l([...t,a]),C(t.length),!0),[x,S]=(0,b.useState)(["order asc"]),{mode:w,setMode:j}=(0,n.B)(),A=()=>{},k=async()=>(await e(1),!0),[L,_]=(0,b.useState)(void 0),[P,T]=(0,b.useState)(void 0),[M,N]=(0,b.useState)(""),[W,O]=(0,b.useState)(""),D=(0,b.useCallback)(e=>_(e),[]),E=(0,b.useCallback)(e=>T(e),[]),$=(0,b.useCallback)(e=>N(e),[]),R=(0,b.useCallback)(e=>O(e),[]),U=(0,b.useCallback)(()=>_(void 0),[]),J=(0,b.useCallback)(()=>T(void 0),[]),Z=(0,b.useCallback)(()=>N(""),[]),H=(0,b.useCallback)(()=>O(""),[]),V=(0,b.useCallback)(()=>{U(),J(),Z(),H()},[U,J,H,Z]),X=[{key:"accountStatus",label:"Account status",filter:(0,a.jsx)(i.X,{title:"Account status",titleHidden:!0,choices:[{label:"Enabled",value:"enabled"},{label:"Not invited",value:"not invited"},{label:"Invited",value:"invited"},{label:"Declined",value:"declined"}],selected:L||[],onChange:D,allowMultiple:!0}),shortcut:!0},{key:"taggedWith",label:"Tagged with",filter:(0,a.jsx)(s.n,{label:"Tagged with",value:M,onChange:$,autoComplete:"off",labelHidden:!0}),shortcut:!0},{key:"moneySpent",label:"Money spent",filter:(0,a.jsx)(o.U,{label:"Money spent is between",labelHidden:!0,value:P||[0,500],prefix:"$",output:!0,min:0,max:2e3,step:1,onChange:E})}],q=[];if(L&&!et(L)){let F="accountStatus";q.push({key:F,label:ee(F,L),onRemove:U})}if(P){let I="moneySpent";q.push({key:I,label:ee(I,P),onRemove:J})}if(!et(M)){let Q="taggedWith";q.push({key:Q,label:ee(Q,M),onRemove:Z})}let z=[{id:"1020",order:(0,a.jsx)(r.x,{as:"span",variant:"bodyMd",fontWeight:"semibold",children:"#1020"}),date:"Jul 20 at 4:34pm",customer:"Jaydon Stanton",total:"$969.44",paymentStatus:(0,a.jsx)(c.C,{progress:"complete",children:"Paid"}),fulfillmentStatus:(0,a.jsx)(c.C,{progress:"incomplete",children:"Unfulfilled"})},{id:"1019",order:(0,a.jsx)(r.x,{as:"span",variant:"bodyMd",fontWeight:"semibold",children:"#1019"}),date:"Jul 20 at 3:46pm",customer:"Ruben Westerfelt",total:"$701.19",paymentStatus:(0,a.jsx)(c.C,{progress:"partiallyComplete",children:"Partially paid"}),fulfillmentStatus:(0,a.jsx)(c.C,{progress:"incomplete",children:"Unfulfilled"})},{id:"1018",order:(0,a.jsx)(r.x,{as:"span",variant:"bodyMd",fontWeight:"semibold",children:"#1018"}),date:"Jul 20 at 3.44pm",customer:"Leo Carder",total:"$798.24",paymentStatus:(0,a.jsx)(c.C,{progress:"complete",children:"Paid"}),fulfillmentStatus:(0,a.jsx)(c.C,{progress:"incomplete",children:"Unfulfilled"})}],{selectedResources:B,allResourcesSelected:G,handleSelectionChange:K}=(0,d.T)(z),Y=z.map((e,t)=>{let{id:l,order:n,date:i,customer:s,total:o,paymentStatus:c,fulfillmentStatus:d}=e;return(0,a.jsxs)(u.m.Row,{id:l,selected:B.includes(l),position:t,children:[(0,a.jsx)(u.m.Cell,{children:(0,a.jsx)(r.x,{variant:"bodyMd",fontWeight:"bold",as:"span",children:n})}),(0,a.jsx)(u.m.Cell,{children:i}),(0,a.jsx)(u.m.Cell,{children:s}),(0,a.jsx)(u.m.Cell,{children:o}),(0,a.jsx)(u.m.Cell,{children:c}),(0,a.jsx)(u.m.Cell,{children:d})]},l)});return(0,a.jsxs)(p.z,{children:[(0,a.jsx)(m.S,{sortOptions:[{label:"Order",value:"order asc",directionLabel:"Ascending"},{label:"Order",value:"order desc",directionLabel:"Descending"},{label:"Customer",value:"customer asc",directionLabel:"A-Z"},{label:"Customer",value:"customer desc",directionLabel:"Z-A"},{label:"Date",value:"date asc",directionLabel:"A-Z"},{label:"Date",value:"date desc",directionLabel:"Z-A"},{label:"Total",value:"total asc",directionLabel:"Ascending"},{label:"Total",value:"total desc",directionLabel:"Descending"}],sortSelected:x,queryValue:W,queryPlaceholder:"Searching in all",onQueryChange:R,onQueryClear:()=>O(""),onSort:S,primaryAction:0===f?{type:"save-as",onAction:v,disabled:!1,loading:!1}:{type:"save",onAction:k,disabled:!1,loading:!1},cancelAction:{onAction:A,disabled:!1,loading:!1},tabs:g,selected:f,onSelect:C,canCreateNewView:!0,onCreateNewView:v,filters:X,appliedFilters:q,onClearAll:V,mode:w,setMode:j}),(0,a.jsx)(u.m,{resourceName:{singular:"order",plural:"orders"},itemCount:z.length,selectedItemsCount:G?"All":B.length,onSelectionChange:K,headings:[{title:"Order"},{title:"Date"},{title:"Customer"},{title:"Total",alignment:"end"},{title:"Payment status"},{title:"Fulfillment status"}],children:Y})]});function ee(e,t){switch(e){case"moneySpent":return"Money spent is between $".concat(t[0]," and $").concat(t[1]);case"taggedWith":return"Tagged with ".concat(t);case"accountStatus":return t.map(e=>"Customer ".concat(e)).join(", ");default:return t}}function et(e){return Array.isArray(e)?0===e.length:""===e||null==e}})}},function(e){e.O(0,[7162,4515,3121,7298,2131,8073,7693,1472,1538,5293,4115,517,8133,1738,1248,9774,2888,179],function(){return e(e.s=53102)}),_N_E=e.O()}]);