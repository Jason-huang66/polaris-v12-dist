(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7764],{47291:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/thumbnail-extra-small",function(){return n(36014)}])},36014:function(e,t,n){"use strict";n.r(t);var r=n(24246),o=n(74906);n(27378);var a=n(64515);t.default=(0,a.y)(function(){return(0,r.jsx)(o.p,{source:"https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg",size:"extraSmall",alt:"Black choker necklace"})})},89219:function(e,t,n){"use strict";n.d(t,{J:function(){return l}});var r=n(27378),o=n(39627),a={Icon:"Polaris-Icon",applyColor:"Polaris-Icon--applyColor",toneBase:"Polaris-Icon--toneBase",toneSubdued:"Polaris-Icon--toneSubdued",toneCaution:"Polaris-Icon--toneCaution",toneWarning:"Polaris-Icon--toneWarning",toneCritical:"Polaris-Icon--toneCritical",toneInteractive:"Polaris-Icon--toneInteractive",toneInfo:"Polaris-Icon--toneInfo",toneSuccess:"Polaris-Icon--toneSuccess",tonePrimary:"Polaris-Icon--tonePrimary",toneEmphasis:"Polaris-Icon--toneEmphasis",toneMagic:"Polaris-Icon--toneMagic",toneTextCaution:"Polaris-Icon--toneTextCaution",toneTextWarning:"Polaris-Icon--toneTextWarning",toneTextCritical:"Polaris-Icon--toneTextCritical",toneTextInfo:"Polaris-Icon--toneTextInfo",toneTextPrimary:"Polaris-Icon--toneTextPrimary",toneTextSuccess:"Polaris-Icon--toneTextSuccess",toneTextMagic:"Polaris-Icon--toneTextMagic",Svg:"Polaris-Icon__Svg",Img:"Polaris-Icon__Img",Placeholder:"Polaris-Icon__Placeholder"},i=n(88470);function l({source:e,tone:t,accessibilityLabel:n}){let l=(0,o.AK)(a.Icon,t&&a[(0,o.OZ)("tone",t)],t&&a.applyColor),s={function:r.createElement(e,{className:a.Svg,focusable:"false","aria-hidden":"true"}),placeholder:r.createElement("div",{className:a.Placeholder}),external:r.createElement("img",{className:a.Img,src:`data:image/svg+xml;utf8,${e}`,alt:"","aria-hidden":"true"})};return r.createElement("span",{className:l},r.createElement(i.x,{as:"span",visuallyHidden:!0},n),s["function"==typeof e?"function":"placeholder"===e?"placeholder":"external"])}},17017:function(e,t,n){"use strict";n.d(t,{E:function(){return o}});var r=n(27378);function o({alt:e,sourceSet:t,source:n,crossOrigin:o,onLoad:a,className:i,...l}){let s=t?t.map(({source:e,descriptor:t})=>`${e} ${t}`).join(","):null,c=(0,r.useCallback)(()=>{a&&a()},[a]);return r.createElement("img",Object.assign({alt:e,src:n,crossOrigin:o,className:i,onLoad:c},s?{srcSet:s}:{},l))}},88470:function(e,t,n){"use strict";n.d(t,{x:function(){return i}});var r=n(27378),o=n(39627),a={root:"Polaris-Text--root",block:"Polaris-Text--block",truncate:"Polaris-Text--truncate",visuallyHidden:"Polaris-Text--visuallyHidden",start:"Polaris-Text--start",center:"Polaris-Text--center",end:"Polaris-Text--end",justify:"Polaris-Text--justify",success:"Polaris-Text--success",critical:"Polaris-Text--critical",caution:"Polaris-Text--caution",subdued:"Polaris-Text--subdued","text-inverse":"Polaris-Text__text--inverse",headingSm:"Polaris-Text--headingSm",headingMd:"Polaris-Text--headingMd",headingLg:"Polaris-Text--headingLg",headingXl:"Polaris-Text--headingXl",heading2xl:"Polaris-Text--heading2xl",heading3xl:"Polaris-Text--heading3xl",bodyXs:"Polaris-Text--bodyXs",bodySm:"Polaris-Text--bodySm",bodyMd:"Polaris-Text--bodyMd",bodyLg:"Polaris-Text--bodyLg",regular:"Polaris-Text--regular",medium:"Polaris-Text--medium",semibold:"Polaris-Text--semibold",bold:"Polaris-Text--bold",break:"Polaris-Text--break",numeric:"Polaris-Text--numeric","line-through":"Polaris-Text__line--through"};let i=({alignment:e,as:t,breakWord:n,children:i,tone:l,fontWeight:s,id:c,numeric:u=!1,truncate:d=!1,variant:m,visuallyHidden:P=!1,textDecorationLine:x})=>{let f=(0,o.AK)(a.root,m&&a[m],s&&a[s],(e||d)&&a.block,e&&a[e],n&&a.break,l&&a[l],u&&a.numeric,d&&a.truncate,P&&a.visuallyHidden,x&&a[x]);return r.createElement(t||(P?"span":"p"),Object.assign({className:f},c&&{id:c}),i)}},74906:function(e,t,n){"use strict";n.d(t,{p:function(){return s}});var r=n(27378),o=n(39627),a={Thumbnail:"Polaris-Thumbnail",sizeExtraSmall:"Polaris-Thumbnail--sizeExtraSmall",sizeSmall:"Polaris-Thumbnail--sizeSmall",sizeMedium:"Polaris-Thumbnail--sizeMedium",sizeLarge:"Polaris-Thumbnail--sizeLarge",transparent:"Polaris-Thumbnail--transparent"},i=n(17017),l=n(89219);function s({source:e,alt:t,size:n="medium",transparent:s}){let c=(0,o.AK)(a.Thumbnail,n&&a[(0,o.OZ)("size",n)],s&&a.transparent),u="string"==typeof e?r.createElement(i.E,{alt:t,source:e}):r.createElement(l.J,{accessibilityLabel:t,source:e});return r.createElement("span",{className:c},u)}},39627:function(e,t,n){"use strict";n.d(t,{AK:function(){return a},OX:function(){return c},OZ:function(){return i},jD:function(){return s},vW:function(){return l}});var r=n(53571),o=n(24528);function a(...e){return e.filter(Boolean).join(" ")}function i(e,t){return`${e}${t.charAt(0).toUpperCase()}${t.slice(1)}`}function l(e){let t=Object.entries(e).filter(([e,t])=>null!=t);return t.length?Object.fromEntries(t):void 0}function s(e,t,n,a){return a?Object.fromEntries(Object.entries((0,o.K)(a)?Object.fromEntries(Object.entries(a).map(([e,t])=>[e,`var(--p-${n}-${t})`])):{[r.vi[0]]:`var(--p-${n}-${a})`}).map(([n,r])=>[`--pc-${e}-${t}-${n}`,r])):{}}function c(e,t,n){return n?(0,o.K)(n)?Object.fromEntries(Object.entries(n).map(([n,r])=>[`--pc-${e}-${t}-${n}`,r])):{[`--pc-${e}-${t}-${r.vi[0]}`]:n}:{}}},24528:function(e,t,n){"use strict";function r(e){let t=typeof e;return null!=e&&("object"===t||"function"===t)}n.d(t,{K:function(){return r}})}},function(e){e.O(0,[4515,9774,2888,179],function(){return e(e.s=47291)}),_N_E=e.O()}]);