(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3727],{90630:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/combobox-with-manual-selection",function(){return t(63159)}])},63159:function(e,a,t){"use strict";t.r(a);var i=t(24246),l=t(72905),n=t(62503),s=t(45536),o=t(89219),r=t(43774),c=t(97661),u=t(20569),g=t(27378),d=t(64515);a.default=(0,d.y)(function(){let e=(0,g.useMemo)(()=>[{value:"rustic",label:"Rustic"},{value:"antique",label:"Antique"},{value:"vinyl",label:"Vinyl"},{value:"vintage",label:"Vintage"},{value:"refurbished",label:"Refurbished"}],[]),[a,t]=(0,g.useState)([]),[d,m]=(0,g.useState)(""),[b,p]=(0,g.useState)(e),k=(0,g.useCallback)(a=>{if(m(a),""===a){p(e);return}let t=RegExp(a,"i"),i=e.filter(e=>e.label.match(t));p(i)},[e]),T=(0,g.useCallback)(e=>{a.includes(e)?t(a.filter(a=>a!==e)):t([...a,e]),k("")},[a,k]),f=(0,g.useCallback)(e=>()=>{let i=[...a];i.splice(i.indexOf(e),1),t(i)},[a]),v=a.map(e=>(0,i.jsx)(l.V,{onRemove:f(e),children:e},"option-".concat(e))),L=b.length>0?b.map(e=>{let{label:t,value:l}=e;return(0,i.jsx)(n.R.Option,{value:l,selected:a.includes(l),accessibilityLabel:t,children:t},"".concat(l))}):null;return(0,i.jsxs)("div",{style:{height:"225px"},children:[(0,i.jsx)(s.h,{allowMultiple:!0,activator:(0,i.jsx)(s.h.TextField,{prefix:(0,i.jsx)(o.J,{source:u.S}),onChange:k,label:"Search tags",labelHidden:!0,value:d,placeholder:"Search tags",autoComplete:"off"}),children:L?(0,i.jsx)(n.R,{autoSelection:n.G.None,onSelect:T,children:L}):null}),(0,i.jsx)(r.l,{children:(0,i.jsx)(c.D,{children:v})})]})})},45536:function(e,a,t){"use strict";t.d(a,{h:function(){return u}});var i=t(27378),l={Listbox:"Polaris-Combobox__Listbox"},n=t(5089),s=t(48281),o=t(40553),r=t(27298),c=t(43389);function u({activator:e,allowMultiple:a,children:t,preferredPosition:s="below",willLoadMoreOptions:o,height:r,onScrolledToBottom:u,onClose:g}){let[d,m]=(0,i.useState)(!1),[b,p]=(0,i.useState)(),[k,T]=(0,i.useState)(),[f,v]=(0,i.useState)(),[L,P]=(0,i.useState)(!1),h=Boolean(!d&&i.Children.count(t)>0),x=(0,i.useRef)(null),S=(0,i.useCallback)(()=>{m(!1),g?.(),p(void 0)},[g]),y=(0,i.useCallback)(()=>{m(!0),p(void 0)},[]),C=(0,i.useCallback)(()=>{if(!a){S(),p(void 0);return}x.current?.forceUpdatePosition()},[a,S]),E=(0,i.useCallback)(()=>{h&&y()},[h,y]),_=(0,i.useCallback)(()=>{h&&y()},[h,y]),N=(0,i.useCallback)(()=>{d&&S()},[d,S]),F=(0,i.useMemo)(()=>({activeOptionId:b,expanded:d,listboxId:f,setTextFieldFocused:P,setTextFieldLabelId:T,onTextFieldFocus:E,onTextFieldChange:_,onTextFieldBlur:N}),[b,d,f,P,T,E,_,N]),B=(0,i.useMemo)(()=>({allowMultiple:a}),[a]),A=(0,i.useMemo)(()=>({listboxId:f,textFieldLabelId:k,textFieldFocused:L,willLoadMoreOptions:o,onOptionSelected:C,setActiveOptionId:p,setListboxId:v,onKeyToBottom:u}),[f,k,L,o,C,p,v,u]);return i.createElement(c.J,{ref:x,active:d,activator:i.createElement(n.HN.Provider,{value:F},e),autofocusTarget:"none",preventFocusOnClose:!0,fullWidth:!0,preferInputActivator:!1,preferredPosition:s,onClose:S},i.Children.count(t)>0?i.createElement(c.J.Pane,{onScrolledToBottom:u,height:r},i.createElement(n.ml.Provider,{value:A},i.createElement(n.AF.Provider,{value:B},i.createElement("div",{className:l.Listbox},t)))):null)}u.TextField=function({value:e,id:a,type:t="text",ariaAutocomplete:l="list",onFocus:n,onBlur:c,onChange:u,...g}){let d=(0,s.i)(),{activeOptionId:m,listboxId:b,expanded:p,setTextFieldFocused:k,setTextFieldLabelId:T,onTextFieldFocus:f,onTextFieldChange:v,onTextFieldBlur:L}=d,P=(0,i.useId)(),h=(0,i.useMemo)(()=>a||P,[P,a]),x=(0,i.useMemo)(()=>(0,o.n)(a||P),[P,a]);(0,i.useEffect)(()=>{T&&T(x)},[x,T]);let S=(0,i.useCallback)(e=>{n&&n(e),f&&f(),k&&k(!0)},[n,f,k]),y=(0,i.useCallback)(e=>{c&&c(e),L&&L(),k&&k(!1)},[c,L,k]),C=(0,i.useCallback)((e,a)=>{u&&u(e,a),v&&v(e)},[u,v]);return i.createElement(r.n,Object.assign({},g,{value:e,id:h,type:t,ariaAutocomplete:l,"aria-haspopup":"listbox",ariaActiveDescendant:m,ariaControls:b,role:"combobox",ariaExpanded:p,onFocus:S,onBlur:y,onChange:C}))}},97661:function(e,a,t){"use strict";t.d(a,{D:function(){return r}});var i=t(27378),l=t(39627),n=t(26482),s={LegacyStack:"Polaris-LegacyStack",Item:"Polaris-LegacyStack__Item",noWrap:"Polaris-LegacyStack--noWrap",spacingNone:"Polaris-LegacyStack--spacingNone",spacingExtraTight:"Polaris-LegacyStack--spacingExtraTight",spacingTight:"Polaris-LegacyStack--spacingTight",spacingBaseTight:"Polaris-LegacyStack--spacingBaseTight",spacingLoose:"Polaris-LegacyStack--spacingLoose",spacingExtraLoose:"Polaris-LegacyStack--spacingExtraLoose",distributionLeading:"Polaris-LegacyStack--distributionLeading",distributionTrailing:"Polaris-LegacyStack--distributionTrailing",distributionCenter:"Polaris-LegacyStack--distributionCenter",distributionEqualSpacing:"Polaris-LegacyStack--distributionEqualSpacing",distributionFill:"Polaris-LegacyStack--distributionFill",distributionFillEvenly:"Polaris-LegacyStack--distributionFillEvenly",alignmentLeading:"Polaris-LegacyStack--alignmentLeading",alignmentTrailing:"Polaris-LegacyStack--alignmentTrailing",alignmentCenter:"Polaris-LegacyStack--alignmentCenter",alignmentFill:"Polaris-LegacyStack--alignmentFill",alignmentBaseline:"Polaris-LegacyStack--alignmentBaseline",vertical:"Polaris-LegacyStack--vertical","Item-fill":"Polaris-LegacyStack__Item--fill"};function o({children:e,fill:a}){let t=(0,l.AK)(s.Item,a&&s["Item-fill"]);return i.createElement("div",{className:t},e)}let r=(0,i.memo)(function({children:e,vertical:a,spacing:t,distribution:r,alignment:c,wrap:u}){let g=(0,l.AK)(s.LegacyStack,a&&s.vertical,t&&s[(0,l.OZ)("spacing",t)],r&&s[(0,l.OZ)("distribution",r)],c&&s[(0,l.OZ)("alignment",c)],!1===u&&s.noWrap),d=(0,n.gD)(e).map((e,a)=>(0,n.oh)(e,o,{key:a}));return i.createElement("div",{className:g},d)});r.Item=o},72905:function(e,a,t){"use strict";t.d(a,{V:function(){return u}});var i=t(27378),l=t(16129),n=t(39627),s=t(84079),o={Tag:"Polaris-Tag",disabled:"Polaris-Tag--disabled",clickable:"Polaris-Tag--clickable",linkable:"Polaris-Tag--linkable",removable:"Polaris-Tag--removable",TagText:"Polaris-Tag__TagText",Button:"Polaris-Tag__Button",Link:"Polaris-Tag__Link",LinkText:"Polaris-Tag__LinkText",segmented:"Polaris-Tag--segmented"},r=t(57963),c=t(89219);function u({children:e,disabled:a=!1,onClick:t,onRemove:u,accessibilityLabel:g,url:d}){let m=(0,r.Q)(),b=u&&d,p=(0,n.AK)(o.Tag,a&&o.disabled,t&&o.clickable,u&&o.removable,d&&!a&&o.linkable,b&&o.segmented);if(t)return i.createElement("button",{type:"button",disabled:a,className:p,onClick:t},e);let k=g;k||(k="string"==typeof e?e:void 0);let T=m.translate("Polaris.Tag.ariaLabel",{children:k||""}),f=u?i.createElement("button",{type:"button","aria-label":T,className:(0,n.AK)(o.Button,b&&o.segmented),onClick:u,onMouseUp:s.i8,disabled:a},i.createElement(c.J,{source:l.S})):null,v=d&&!a?i.createElement("a",{className:(0,n.AK)(o.Link,b&&o.segmented),href:d},i.createElement("span",{title:k,className:o.LinkText},e)):i.createElement("span",{title:k,className:o.TagText},e);return i.createElement("span",{className:p,"aria-disabled":a},v,f)}},43774:function(e,a,t){"use strict";t.d(a,{l:function(){return s}});var i=t(27378),l=t(39627),n={TextContainer:"Polaris-TextContainer",spacingTight:"Polaris-TextContainer--spacingTight",spacingLoose:"Polaris-TextContainer--spacingLoose"};function s({spacing:e,children:a}){let t=(0,l.AK)(n.TextContainer,e&&n[(0,l.OZ)("spacing",e)]);return i.createElement("div",{className:t},a)}}},function(e){e.O(0,[4515,3121,7298,2131,8073,2503,9774,2888,179],function(){return e(e.s=90630)}),_N_E=e.O()}]);