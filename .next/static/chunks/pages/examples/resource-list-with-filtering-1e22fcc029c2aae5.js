(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[148],{69961:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/resource-list-with-filtering",function(){return t(49850)}])},49850:function(e,a,t){"use strict";t.r(a);var r=t(24246),l=t(27298),i=t(20286),n=t(33121),o=t(29324),s=t(76515),d=t(43073),u=t(67421),c=t(88470),m=t(27378),v=t(64515);a.default=(0,v.y)(function(){let[e,a]=(0,m.useState)("VIP"),[t,v]=(0,m.useState)(void 0),g=(0,m.useCallback)(e=>a(e),[]),h=(0,m.useCallback)(()=>a(void 0),[]),f=(0,m.useCallback)(()=>v(void 0),[]),p=(0,m.useCallback)(()=>{h(),f()},[f,h]),A=[{key:"taggedWith1",label:"Tagged with",filter:(0,r.jsx)(l.n,{label:"Tagged with",value:e,onChange:g,autoComplete:"off",labelHidden:!0}),shortcut:!0}],C=e&&!(Array.isArray(e)?0===e.length:""===e||null==e)?[{key:"taggedWith1",label:"Tagged with ".concat(e),onRemove:h}]:[],P=(0,r.jsx)(i.b,{queryValue:t,filters:A,appliedFilters:C,onQueryChange:v,onQueryClear:f,onClearAll:p,children:(0,r.jsx)("div",{style:{paddingLeft:"8px"},children:(0,r.jsx)(n.z,{onClick:()=>console.log("New filter saved"),children:"Save"})})});return(0,r.jsx)(o.z,{children:(0,r.jsx)(s.D,{resourceName:{singular:"customer",plural:"customers"},items:[{id:"108",url:"#",name:"Mae Jemison",location:"Decatur, USA"},{id:"208",url:"#",name:"Ellen Ochoa",location:"Los Angeles, USA"}],renderItem:function(e){let{id:a,url:t,name:l,location:i}=e,n=(0,r.jsx)(d.q,{customer:!0,size:"md",name:l});return(0,r.jsxs)(u.L,{id:a,url:t,media:n,children:[(0,r.jsx)(c.x,{variant:"bodyMd",fontWeight:"bold",as:"h3",children:l}),(0,r.jsx)("div",{children:i})]})},filterControl:P})})})},43073:function(e,a,t){"use strict";t.d(a,{q:function(){return v}});var r,l,i=t(27378),n=t(39627),o=t(72606),s={Avatar:"Polaris-Avatar",imageHasLoaded:"Polaris-Avatar--imageHasLoaded",Text:"Polaris-Avatar__Text",long:"Polaris-Avatar--long",hidden:"Polaris-Avatar--hidden",sizeXs:"Polaris-Avatar--sizeXs",sizeSm:"Polaris-Avatar--sizeSm",sizeMd:"Polaris-Avatar--sizeMd",sizeLg:"Polaris-Avatar--sizeLg",sizeXl:"Polaris-Avatar--sizeXl",styleOne:"Polaris-Avatar--styleOne",styleTwo:"Polaris-Avatar--styleTwo",styleThree:"Polaris-Avatar--styleThree",styleFour:"Polaris-Avatar--styleFour",styleFive:"Polaris-Avatar--styleFive",Image:"Polaris-Avatar__Image",Initials:"Polaris-Avatar__Initials",Svg:"Polaris-Avatar__Svg"},d=t(57963),u=t(17017);(r=l||(l={})).Pending="PENDING",r.Loaded="LOADED",r.Errored="ERRORED";let c=["one","two","three","four","five"],m={xs:"3",sm:"2.5",md:"2.5",lg:"2.5",xl:"2"};function v({name:e,source:a,onError:t,initials:r,customer:v,size:g="md",accessibilityLabel:h}){var f;let p;let A=(0,d.Q)(),C=(0,o.u)(),[P,E]=(0,i.useState)(l.Pending);(0,i.useEffect)(()=>{E(l.Pending)},[a]);let y=(0,i.useCallback)(()=>{E(l.Errored),t&&t()},[t]),x=(0,i.useCallback)(()=>{E(l.Loaded)},[]),_=a&&P!==l.Errored;if(h)p=h;else if(e)p=e;else if(r){let k=r.split("").join(" ");p=A.translate("Polaris.Avatar.labelWithInitials",{initials:k})}let b=(0,n.AK)(s.Avatar,g&&s[(0,n.OZ)("size",g)],_&&P===l.Loaded&&s.imageHasLoaded,!v&&!a&&s[(0,n.OZ)("style",(f=e||r)?c[function(e){let a=0;for(let t of e)a^=t.charCodeAt(0);return a}(f)%c.length]:c[0])]),w=(0,n.AK)(s.Text,(r?.length||0)>2&&s.long),L=(0,n.AK)(s.Image,P!==l.Loaded&&s.hidden),N=a&&C&&P!==l.Errored?i.createElement(u.E,{className:L,source:a,alt:"",role:"presentation",onLoad:x,onError:y}):null,z=i.createElement(i.Fragment,null,i.createElement("path",{fill:"none",d:"M25.5 13.5C25.5 16.5376 23.0376 19 20 19C16.9624 19 14.5 16.5376 14.5 13.5C14.5 10.4624 16.9624 8 20 8C23.0376 8 25.5 10.4624 25.5 13.5Z",stroke:"currentColor",strokeWidth:m[g]}),i.createElement("path",{fill:"none",d:"M10.3433 29.682L9.47 31.254C9.03481 32.0373 9.60125 33 10.4974 33H29.5026C30.3988 33 30.9652 32.0373 30.53 31.254L29.6567 29.682C27.7084 26.175 24.0119 24 20 24C15.9882 24 12.2916 26.175 10.3433 29.682Z",stroke:"currentColor",strokeWidth:m[g],strokeLinecap:"round",strokeLinejoin:"round"})),j=v||!r?z:i.createElement("text",{className:w,x:"50%",y:"50%",dy:"0.35em",fill:"currentColor",textAnchor:"middle"},r),S=_?null:i.createElement("span",{className:s.Initials},i.createElement("svg",{className:s.Svg,viewBox:"0 0 40 40"},j));return i.createElement("span",{"aria-label":p,role:p?"img":"presentation",className:b},S,N)}},17227:function(e,a,t){"use strict";t.d(a,{a:function(){return i}});var r=t(27378),l=t(62791);function i(){let e=(0,r.useContext)(l.o);if(!e)throw Error("No mediaQuery was provided. Your application must be wrapped in an <AppProvider> component. See https://polaris.shopify.com/components/app-provider for implementation instructions.");return e}}},function(e){e.O(0,[7162,4515,3121,7298,2131,8073,7693,1472,1538,6515,286,9774,2888,179],function(){return e(e.s=69961)}),_N_E=e.O()}]);