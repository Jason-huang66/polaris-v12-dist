(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9500],{69955:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/index-filters-with-filtering-mode",function(){return l(17332)}])},17332:function(e,t,l){"use strict";l.r(t);var a=l(24246),n=l(18963),i=l(33989),s=l(96233),o=l(27298),r=l(30517),c=l(88470),d=l(30324),u=l(36042),p=l(24115),m=l(29324),b=l(26974),h=l(27378),y=l(64515);t.default=(0,y.y)(function(){let e=e=>new Promise(t=>setTimeout(t,e)),[t,l]=(0,h.useState)(["All","Unpaid","Open","Closed","Local delivery","Local pickup"]),y=e=>{let a=[...t];a.splice(e,1),l(a),v(0)},g=async a=>(l([...t,a]),v(t.length),await e(1),!0),f=t.map((t,a)=>({content:t,index:a,onAction(){},id:"".concat(t,"-").concat(a),isLocked:0===a,actions:0===a?[]:[{type:"rename",onAction(){},async onPrimaryAction(t){let n=f.map((e,l)=>l===a?t:e.content);return await e(1),l(n),!0}},{type:"duplicate",onPrimaryAction:async t=>(await e(1),g(t),!0)},{type:"edit"},{type:"delete",onPrimaryAction:async()=>(await e(1),y(a),!0)}]})),[C,v]=(0,h.useState)(0),x=async a=>(await e(500),l([...t,a]),v(t.length),!0),[w,S]=(0,h.useState)(["order asc"]),{mode:j,setMode:A}=(0,n.B)(i.H.Filtering),k=()=>{},L=async()=>(await e(1),!0),[_,P]=(0,h.useState)(void 0),[T,M]=(0,h.useState)(void 0),[N,W]=(0,h.useState)(""),[O,D]=(0,h.useState)(""),E=(0,h.useCallback)(e=>P(e),[]),$=(0,h.useCallback)(e=>M(e),[]),R=(0,h.useCallback)(e=>W(e),[]),U=(0,h.useCallback)(e=>D(e),[]),H=(0,h.useCallback)(()=>P(void 0),[]),J=(0,h.useCallback)(()=>M(void 0),[]),Z=(0,h.useCallback)(()=>W(""),[]),F=(0,h.useCallback)(()=>D(""),[]),V=(0,h.useCallback)(()=>{H(),J(),Z(),F()},[H,J,F,Z]),X=[{key:"accountStatus",label:"Account status",filter:(0,a.jsx)(s.X,{title:"Account status",titleHidden:!0,choices:[{label:"Enabled",value:"enabled"},{label:"Not invited",value:"not invited"},{label:"Invited",value:"invited"},{label:"Declined",value:"declined"}],selected:_||[],onChange:E,allowMultiple:!0}),shortcut:!0},{key:"taggedWith",label:"Tagged with",filter:(0,a.jsx)(o.n,{label:"Tagged with",value:N,onChange:R,autoComplete:"off",labelHidden:!0}),shortcut:!0},{key:"moneySpent",label:"Money spent",filter:(0,a.jsx)(r.U,{label:"Money spent is between",labelHidden:!0,value:T||[0,500],prefix:"$",output:!0,min:0,max:2e3,step:1,onChange:$})}],q=[];if(_&&!el(_)){let I="accountStatus";q.push({key:I,label:et(I,_),onRemove:H})}if(T){let Q="moneySpent";q.push({key:Q,label:et(Q,T),onRemove:J})}if(!el(N)){let z="taggedWith";q.push({key:z,label:et(z,N),onRemove:Z})}let B=[{id:"1020",order:(0,a.jsx)(c.x,{as:"span",variant:"bodyMd",fontWeight:"semibold",children:"#1020"}),date:"Jul 20 at 4:34pm",customer:"Jaydon Stanton",total:"$969.44",paymentStatus:(0,a.jsx)(d.C,{progress:"complete",children:"Paid"}),fulfillmentStatus:(0,a.jsx)(d.C,{progress:"incomplete",children:"Unfulfilled"})},{id:"1019",order:(0,a.jsx)(c.x,{as:"span",variant:"bodyMd",fontWeight:"semibold",children:"#1019"}),date:"Jul 20 at 3:46pm",customer:"Ruben Westerfelt",total:"$701.19",paymentStatus:(0,a.jsx)(d.C,{progress:"partiallyComplete",children:"Partially paid"}),fulfillmentStatus:(0,a.jsx)(d.C,{progress:"incomplete",children:"Unfulfilled"})},{id:"1018",order:(0,a.jsx)(c.x,{as:"span",variant:"bodyMd",fontWeight:"semibold",children:"#1018"}),date:"Jul 20 at 3.44pm",customer:"Leo Carder",total:"$798.24",paymentStatus:(0,a.jsx)(d.C,{progress:"complete",children:"Paid"}),fulfillmentStatus:(0,a.jsx)(d.C,{progress:"incomplete",children:"Unfulfilled"})}],{selectedResources:G,allResourcesSelected:K,handleSelectionChange:Y}=(0,u.T)(B),ee=B.map((e,t)=>{let{id:l,order:n,date:i,customer:s,total:o,paymentStatus:r,fulfillmentStatus:d}=e;return(0,a.jsxs)(p.m.Row,{id:l,selected:G.includes(l),position:t,children:[(0,a.jsx)(p.m.Cell,{children:(0,a.jsx)(c.x,{variant:"bodyMd",fontWeight:"bold",as:"span",children:n})}),(0,a.jsx)(p.m.Cell,{children:i}),(0,a.jsx)(p.m.Cell,{children:s}),(0,a.jsx)(p.m.Cell,{children:o}),(0,a.jsx)(p.m.Cell,{children:r}),(0,a.jsx)(p.m.Cell,{children:d})]},l)});return(0,a.jsxs)(m.z,{children:[(0,a.jsx)(b.S,{sortOptions:[{label:"Order",value:"order asc",directionLabel:"Ascending"},{label:"Order",value:"order desc",directionLabel:"Descending"},{label:"Customer",value:"customer asc",directionLabel:"A-Z"},{label:"Customer",value:"customer desc",directionLabel:"Z-A"},{label:"Date",value:"date asc",directionLabel:"A-Z"},{label:"Date",value:"date desc",directionLabel:"Z-A"},{label:"Total",value:"total asc",directionLabel:"Ascending"},{label:"Total",value:"total desc",directionLabel:"Descending"}],sortSelected:w,queryValue:O,queryPlaceholder:"Searching in all",onQueryChange:U,onQueryClear:()=>D(""),onSort:S,primaryAction:0===C?{type:"save-as",onAction:x,disabled:!1,loading:!1}:{type:"save",onAction:L,disabled:!1,loading:!1},cancelAction:{onAction:k,disabled:!1,loading:!1},tabs:f,selected:C,onSelect:v,canCreateNewView:!0,onCreateNewView:x,filters:X,appliedFilters:q,onClearAll:V,mode:j,setMode:A}),(0,a.jsx)(p.m,{resourceName:{singular:"order",plural:"orders"},itemCount:B.length,selectedItemsCount:K?"All":G.length,onSelectionChange:Y,headings:[{title:"Order"},{title:"Date"},{title:"Customer"},{title:"Total",alignment:"end"},{title:"Payment status"},{title:"Fulfillment status"}],children:ee})]});function et(e,t){switch(e){case"moneySpent":return"Money spent is between $".concat(t[0]," and $").concat(t[1]);case"taggedWith":return"Tagged with ".concat(t);case"accountStatus":return t.map(e=>"Customer ".concat(e)).join(", ");default:return t}}function el(e){return Array.isArray(e)?0===e.length:""===e||null==e}})}},function(e){e.O(0,[7162,4515,3121,7298,2131,8073,7693,1472,1538,5293,4115,517,8133,1738,1248,9774,2888,179],function(){return e(e.s=69955)}),_N_E=e.O()}]);