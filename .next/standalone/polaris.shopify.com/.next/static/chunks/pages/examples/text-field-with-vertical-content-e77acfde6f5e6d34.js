(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9670],{20031:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/text-field-with-vertical-content",function(){return a(45215)}])},45215:function(e,t,a){"use strict";a.r(t);var i=a(24246),n=a(97661),l=a(72905),r=a(27298),c=a(27378),s=a(64515);t.default=(0,s.y)(function(){let e=["Rustic","Antique","Vinyl","Refurbished"],[t,a]=(0,c.useState)(""),s=(0,c.useCallback)(e=>a(e),[]),o=e.length>0?(0,i.jsx)(n.D,{spacing:"extraTight",alignment:"center",children:e.map(e=>(0,i.jsx)(l.V,{children:e},e))}):null;return(0,i.jsx)(r.n,{label:"Tags",value:t,onChange:s,placeholder:"Search tags",autoComplete:"off",verticalContent:o})})},97661:function(e,t,a){"use strict";a.d(t,{D:function(){return s}});var i=a(27378),n=a(39627),l=a(26482),r={LegacyStack:"Polaris-LegacyStack",Item:"Polaris-LegacyStack__Item",noWrap:"Polaris-LegacyStack--noWrap",spacingNone:"Polaris-LegacyStack--spacingNone",spacingExtraTight:"Polaris-LegacyStack--spacingExtraTight",spacingTight:"Polaris-LegacyStack--spacingTight",spacingBaseTight:"Polaris-LegacyStack--spacingBaseTight",spacingLoose:"Polaris-LegacyStack--spacingLoose",spacingExtraLoose:"Polaris-LegacyStack--spacingExtraLoose",distributionLeading:"Polaris-LegacyStack--distributionLeading",distributionTrailing:"Polaris-LegacyStack--distributionTrailing",distributionCenter:"Polaris-LegacyStack--distributionCenter",distributionEqualSpacing:"Polaris-LegacyStack--distributionEqualSpacing",distributionFill:"Polaris-LegacyStack--distributionFill",distributionFillEvenly:"Polaris-LegacyStack--distributionFillEvenly",alignmentLeading:"Polaris-LegacyStack--alignmentLeading",alignmentTrailing:"Polaris-LegacyStack--alignmentTrailing",alignmentCenter:"Polaris-LegacyStack--alignmentCenter",alignmentFill:"Polaris-LegacyStack--alignmentFill",alignmentBaseline:"Polaris-LegacyStack--alignmentBaseline",vertical:"Polaris-LegacyStack--vertical","Item-fill":"Polaris-LegacyStack__Item--fill"};function c({children:e,fill:t}){let a=(0,n.AK)(r.Item,t&&r["Item-fill"]);return i.createElement("div",{className:a},e)}let s=(0,i.memo)(function({children:e,vertical:t,spacing:a,distribution:s,alignment:o,wrap:g}){let u=(0,n.AK)(r.LegacyStack,t&&r.vertical,a&&r[(0,n.OZ)("spacing",a)],s&&r[(0,n.OZ)("distribution",s)],o&&r[(0,n.OZ)("alignment",o)],!1===g&&r.noWrap),m=(0,l.gD)(e).map((e,t)=>(0,l.oh)(e,c,{key:t}));return i.createElement("div",{className:u},m)});s.Item=c},72905:function(e,t,a){"use strict";a.d(t,{V:function(){return g}});var i=a(27378),n=a(16129),l=a(39627),r=a(84079),c={Tag:"Polaris-Tag",disabled:"Polaris-Tag--disabled",clickable:"Polaris-Tag--clickable",linkable:"Polaris-Tag--linkable",removable:"Polaris-Tag--removable",TagText:"Polaris-Tag__TagText",Button:"Polaris-Tag__Button",Link:"Polaris-Tag__Link",LinkText:"Polaris-Tag__LinkText",segmented:"Polaris-Tag--segmented"},s=a(57963),o=a(89219);function g({children:e,disabled:t=!1,onClick:a,onRemove:g,accessibilityLabel:u,url:m}){let d=(0,s.Q)(),k=g&&m,p=(0,l.AK)(c.Tag,t&&c.disabled,a&&c.clickable,g&&c.removable,m&&!t&&c.linkable,k&&c.segmented);if(a)return i.createElement("button",{type:"button",disabled:t,className:p,onClick:a},e);let f=u;f||(f="string"==typeof e?e:void 0);let y=d.translate("Polaris.Tag.ariaLabel",{children:f||""}),b=g?i.createElement("button",{type:"button","aria-label":y,className:(0,l.AK)(c.Button,k&&c.segmented),onClick:g,onMouseUp:r.i8,disabled:t},i.createElement(o.J,{source:n.S})):null,L=m&&!t?i.createElement("a",{className:(0,l.AK)(c.Link,k&&c.segmented),href:m},i.createElement("span",{title:f,className:c.LinkText},e)):i.createElement("span",{title:f,className:c.TagText},e);return i.createElement("span",{className:p,"aria-disabled":t},L,b)}},26482:function(e,t,a){"use strict";a.d(t,{M2:function(){return s},Mc:function(){return r},Vr:function(){return o},gD:function(){return c},oh:function(){return n}});var i=a(27378);function n(e,t,a){return null==e?null:r(e,t)?e:i.createElement(t,a,e)}let l=(e,t)=>e===t;function r(e,t){if(null==e||!(0,i.isValidElement)(e)||"string"==typeof e.type)return!1;let{type:a}=e,n=e.props?.__type__,r=n||a,c=Array.isArray(t)?t:[t];return c.some(e=>"string"!=typeof r&&l(e,r))}function c(e,t=()=>!0){return i.Children.toArray(e).filter(e=>(0,i.isValidElement)(e)&&t(e))}function s({condition:e,wrapper:t,children:a}){return e?t(a):a}function o({condition:e,children:t}){return e?t:null}}},function(e){e.O(0,[4515,3121,7298,9774,2888,179],function(){return e(e.s=20031)}),_N_E=e.O()}]);