(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3965],{97107:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/autocomplete-with-wrapping-action",function(){return l(92562)}])},92562:function(e,t,l){"use strict";l.r(t);var a=l(24246),n=l(39324),i=l(89219),o=l(20569),u=l(79365),s=l(27378),c=l(64515);t.default=(0,c.y)(function(){let e=(0,s.useMemo)(()=>[{value:"rustic",label:"Rustic"},{value:"antique",label:"Antique"},{value:"vinyl",label:"Vinyl"},{value:"vintage",label:"Vintage"},{value:"refurbished",label:"Refurbished"}],[]),[t,l]=(0,s.useState)([]),[c,r]=(0,s.useState)(""),[p,d]=(0,s.useState)(e),[f,h]=(0,s.useState)(!1),b=(0,s.useCallback)(t=>{r(t),f||h(!0),setTimeout(()=>{if(""===t){d(e),h(!1);return}let l=RegExp(t,"i"),a=p.filter(e=>e.label.match(l));d(a),h(!1)},300)},[e,f,p]),w=(0,s.useCallback)(e=>{let t=e.map(e=>{let t=p.find(t=>t.value.match(e));return t&&t.label});l(e),r(t[0]||"")},[p]),g=(0,a.jsx)(n.F.TextField,{onChange:b,label:"Tags",value:c,prefix:(0,a.jsx)(i.J,{source:o.S}),placeholder:"Search",autoComplete:"off"});return(0,a.jsx)("div",{style:{height:"225px"},children:(0,a.jsx)(n.F,{actionBefore:{accessibilityLabel:"Action label",badge:{tone:"new",content:"New!"},content:"Action with long name that will need to wrap on small display in order to have a nice display",ellipsis:!0,helpText:"Help text",icon:u.S,wrapOverflow:!0,onAction(){console.log("actionBefore clicked!")}},options:p,selected:t,onSelect:w,listTitle:"Suggested tags",loading:f,textField:g})})})}},function(e){e.O(0,[4515,3121,7298,2131,8073,2503,9324,9774,2888,179],function(){return e(e.s=97107)}),_N_E=e.O()}]);