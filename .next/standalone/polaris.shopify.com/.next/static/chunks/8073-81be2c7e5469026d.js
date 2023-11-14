"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8073],{58330:function(e,t,r){r.d(t,{x:function(){return a}});var n=r(27378),o=r(39627),i={listReset:"Polaris-Box--listReset",Box:"Polaris-Box",visuallyHidden:"Polaris-Box--visuallyHidden",printHidden:"Polaris-Box--printHidden"};let a=(0,n.forwardRef)(({as:e="div",background:t,borderColor:r,borderStyle:a,borderWidth:s,borderBlockStartWidth:l,borderBlockEndWidth:c,borderInlineStartWidth:d,borderInlineEndWidth:u,borderRadius:p,borderEndStartRadius:v,borderEndEndRadius:h,borderStartStartRadius:f,borderStartEndRadius:b,children:P,color:m,id:x,minHeight:E,minWidth:g,maxWidth:y,overflowX:C,overflowY:_,outlineColor:k,outlineStyle:O,outlineWidth:w,padding:S,paddingBlockStart:I,paddingBlockEnd:T,paddingInlineStart:N,paddingInlineEnd:A,role:$,shadow:F,tabIndex:R,width:B,printHidden:H,visuallyHidden:j,position:K,insetBlockStart:D,insetBlockEnd:W,insetInlineStart:L,insetInlineEnd:U,zIndex:M,opacity:V,...z},J)=>{let q={"--pc-box-color":m?`var(--p-color-${m})`:void 0,"--pc-box-background":t?`var(--p-color-${t})`:void 0,"--pc-box-border-color":r?"transparent"===r?"transparent":`var(--p-color-${r})`:void 0,"--pc-box-border-style":a||(r||s||l||c||d||u?"solid":void 0),"--pc-box-border-radius":p?`var(--p-border-radius-${p})`:void 0,"--pc-box-border-end-start-radius":v?`var(--p-border-radius-${v})`:void 0,"--pc-box-border-end-end-radius":h?`var(--p-border-radius-${h})`:void 0,"--pc-box-border-start-start-radius":f?`var(--p-border-radius-${f})`:void 0,"--pc-box-border-start-end-radius":b?`var(--p-border-radius-${b})`:void 0,"--pc-box-border-width":s?`var(--p-border-width-${s})`:void 0,"--pc-box-border-block-start-width":l?`var(--p-border-width-${l})`:void 0,"--pc-box-border-block-end-width":c?`var(--p-border-width-${c})`:void 0,"--pc-box-border-inline-start-width":d?`var(--p-border-width-${d})`:void 0,"--pc-box-border-inline-end-width":u?`var(--p-border-width-${u})`:void 0,"--pc-box-min-height":E,"--pc-box-min-width":g,"--pc-box-max-width":y,"--pc-box-outline-color":k?`var(--p-color-${k})`:void 0,"--pc-box-outline-style":O||(k||w?"solid":void 0),"--pc-box-outline-width":w?`var(--p-border-width-${w})`:void 0,"--pc-box-overflow-x":C,"--pc-box-overflow-y":_,...(0,o.jD)("box","padding-block-end","space",T||S),...(0,o.jD)("box","padding-block-start","space",I||S),...(0,o.jD)("box","padding-inline-start","space",N||S),...(0,o.jD)("box","padding-inline-end","space",A||S),"--pc-box-shadow":F?`var(--p-shadow-${F})`:void 0,"--pc-box-width":B,position:K,"--pc-box-inset-block-start":D?`var(--p-space-${D})`:void 0,"--pc-box-inset-block-end":W?`var(--p-space-${W})`:void 0,"--pc-box-inset-inline-start":L?`var(--p-space-${L})`:void 0,"--pc-box-inset-inline-end":U?`var(--p-space-${U})`:void 0,zIndex:M,opacity:V},Y=(0,o.AK)(i.Box,j&&i.visuallyHidden,H&&i.printHidden,"ul"===e&&i.listReset);return n.createElement(e,{className:Y,id:x,ref:J,style:(0,o.vW)(q),role:$,tabIndex:R,...z},P)});a.displayName="Box"},39355:function(e,t,r){r.d(t,{g:function(){return a}});var n=r(27378),o=r(39627),i={InlineStack:"Polaris-InlineStack"};let a=function({align:e,blockAlign:t,gap:r,wrap:a=!0,children:s}){let l={"--pc-inline-stack-align":e,"--pc-inline-stack-block-align":t,"--pc-inline-stack-wrap":a?"wrap":"nowrap",...(0,o.jD)("inline-stack","gap","space",r)};return n.createElement("div",{className:i.InlineStack,style:l},s)}},81894:function(e,t,r){r.d(t,{n:function(){return i}});var n=r(27378),o=r(46381);function i({keyCode:e,handler:t,keyEvent:r="keyup",options:i,useCapture:a}){let s=(0,n.useRef)({handler:t,keyCode:e});(0,o.L)(()=>{s.current={handler:t,keyCode:e}},[t,e]);let l=(0,n.useCallback)(e=>{let{handler:t,keyCode:r}=s.current;e.keyCode===r&&t(e)},[]);return(0,n.useEffect)(()=>(document.addEventListener(r,l,a||i),()=>{document.removeEventListener(r,l,a||i)}),[r,l,a,i]),null}},43389:function(e,t,r){let n;r.d(t,{J:function(){return I}});var o,i,a,s=r(27378),l=r(84079),c=r(4967),d=r(53571),u=r(39627),p=r(26482),v=r(9686),h={Popover:"Polaris-Popover",PopoverOverlay:"Polaris-Popover__PopoverOverlay","PopoverOverlay-entering":"Polaris-Popover__PopoverOverlay--entering","PopoverOverlay-open":"Polaris-Popover__PopoverOverlay--open",measuring:"Polaris-Popover--measuring","PopoverOverlay-exiting":"Polaris-Popover__PopoverOverlay--exiting",fullWidth:"Polaris-Popover--fullWidth",Content:"Polaris-Popover__Content",positionedAbove:"Polaris-Popover--positionedAbove",ContentContainer:"Polaris-Popover__ContentContainer","Content-fullHeight":"Polaris-Popover__Content--fullHeight","Content-fluidContent":"Polaris-Popover__Content--fluidContent",Pane:"Polaris-Popover__Pane","Pane-fixed":"Polaris-Popover__Pane--fixed","Pane-subdued":"Polaris-Popover__Pane--subdued","Pane-captureOverscroll":"Polaris-Popover__Pane--captureOverscroll",Section:"Polaris-Popover__Section",FocusTracker:"Polaris-Popover__FocusTracker","PopoverOverlay-hideOnPrint":"Polaris-Popover__PopoverOverlay--hideOnPrint"},f=r(58330);function b({children:e}){return s.createElement("div",{className:h.Section},s.createElement(f.x,{paddingInlineStart:"300",paddingInlineEnd:"300",paddingBlockStart:"200",paddingBlockEnd:"150"},e))}var P=r(85142);function m({captureOverscroll:e=!1,fixed:t,sectioned:r,children:n,height:o,subdued:i,onScrolledToBottom:a}){let l=(0,u.AK)(h.Pane,t&&h["Pane-fixed"],i&&h["Pane-subdued"],e&&h["Pane-captureOverscroll"]),c=r?(0,p.oh)(n,b,{}):n,d=o?{height:o,maxHeight:o,minHeight:o}:void 0;return t?s.createElement("div",{style:d,className:l},c):s.createElement(P.R,{shadow:!0,className:l,style:d,onScrolledToBottom:a},c)}var x=r(84448),E=r(93283),g=r(81894),y=r(82125);(o=n||(n={}))[o.Click=0]="Click",o[o.EscapeKeypress=1]="EscapeKeypress",o[o.FocusOut=2]="FocusOut",o[o.ScrollOut=3]="ScrollOut",(i=a||(a={})).Entering="entering",i.Entered="entered",i.Exiting="exiting",i.Exited="exited";class C extends s.PureComponent{constructor(e){super(e),this.state={transitionStatus:this.props.active?a.Entering:a.Exited},this.contentNode=(0,s.createRef)(),this.renderPopover=e=>{let{measuring:t,desiredHeight:r,positioning:n}=e,{id:o,children:i,sectioned:a,fullWidth:l,fullHeight:d,fluidContent:f,hideOnPrint:b,autofocusTarget:P,captureOverscroll:x}=this.props,y=(0,u.AK)(h.Popover,"above"===n&&h.positionedAbove,l&&h.fullWidth,t&&h.measuring,b&&h["PopoverOverlay-hideOnPrint"]),C=(0,u.AK)(h.Content,d&&h["Content-fullHeight"],f&&h["Content-fluidContent"]);return s.createElement("div",Object.assign({className:y},c.IJ.props),s.createElement(E.h,{event:"click",handler:this.handleClick}),s.createElement(E.h,{event:"touchstart",handler:this.handleClick}),s.createElement(g.n,{keyCode:v.s.Escape,handler:this.handleEscape}),s.createElement("div",{className:h.FocusTracker,tabIndex:0,onFocus:this.handleFocusFirstItem}),s.createElement("div",{className:h.ContentContainer},s.createElement("div",{id:o,tabIndex:"none"===P?void 0:-1,className:C,style:t?void 0:{height:r},ref:this.contentNode},function(e,t){let r=s.Children.toArray(e);return(0,p.Mc)(r[0],m)?r:(0,p.oh)(r,m,t)}(i,{captureOverscroll:x,sectioned:a}))),s.createElement("div",{className:h.FocusTracker,tabIndex:0,onFocus:this.handleFocusLastItem}))},this.handleClick=e=>{var t;let r=e.target,{contentNode:o,props:{activator:i,onClose:s,preventCloseOnChildOverlayClick:l}}=this,c=e.composedPath(),d=l?(t=this.context.container,c.some(e=>e instanceof Node&&t?.contains(e))):k(c,o),u=_(i,r);d||u||this.state.transitionStatus!==a.Entered||s(n.Click)},this.handleScrollOut=()=>{this.props.onClose(n.ScrollOut)},this.handleEscape=e=>{let t=e.target,{contentNode:r,props:{activator:o}}=this,i=e.composedPath(),a=k(i,r),s=_(o,t);(a||s)&&this.props.onClose(n.EscapeKeypress)},this.handleFocusFirstItem=()=>{this.props.onClose(n.FocusOut)},this.handleFocusLastItem=()=>{this.props.onClose(n.FocusOut)},this.overlayRef=(0,s.createRef)()}forceUpdatePosition(){this.overlayRef.current?.forceUpdatePosition()}changeTransitionStatus(e,t){this.setState({transitionStatus:e},t),this.contentNode.current&&this.contentNode.current.getBoundingClientRect()}componentDidMount(){this.props.active&&(this.focusContent(),this.changeTransitionStatus(a.Entered))}componentDidUpdate(e){this.props.active&&!e.active&&(this.focusContent(),this.changeTransitionStatus(a.Entering,()=>{this.clearTransitionTimeout(),this.enteringTimer=window.setTimeout(()=>{this.setState({transitionStatus:a.Entered})},parseInt(d.rv.motion["motion-duration-100"],10))})),!this.props.active&&e.active&&(this.clearTransitionTimeout(),this.setState({transitionStatus:a.Exited}))}componentWillUnmount(){this.clearTransitionTimeout()}render(){let{active:e,activator:t,fullWidth:r,preferredPosition:n="below",preferredAlignment:o="center",preferInputActivator:i=!0,fixed:l,zIndexOverride:c}=this.props,{transitionStatus:d}=this.state;if(d===a.Exited&&!e)return null;let p=(0,u.AK)(h.PopoverOverlay,d===a.Entering&&h["PopoverOverlay-entering"],d===a.Entered&&h["PopoverOverlay-open"],d===a.Exiting&&h["PopoverOverlay-exiting"]);return s.createElement(y.u,{ref:this.overlayRef,fullWidth:r,active:e,activator:t,preferInputActivator:i,preferredPosition:n,preferredAlignment:o,render:this.renderPopover.bind(this),fixed:l,onScrollOut:this.handleScrollOut,classNames:p,zIndexOverride:c})}clearTransitionTimeout(){this.enteringTimer&&window.clearTimeout(this.enteringTimer)}focusContent(){let{autofocusTarget:e="container"}=this.props;"none"!==e&&null!=this.contentNode&&requestAnimationFrame(()=>{if(null==this.contentNode.current)return;let t=(0,l.Y_)(this.contentNode.current);t&&"first-node"===e?t.focus({preventScroll:!1}):this.contentNode.current.focus({preventScroll:!1})})}}function _(e,t){if(e===t)return!0;let r=t.parentNode;for(;null!=r;){if(r===e)return!0;r=r.parentNode}return!1}function k(e,t){return null!=t.current&&e.includes(t.current)}C.contextType=x.j;var O=r(55482);let w=(0,s.forwardRef)(function({activatorWrapper:e="div",children:t,onClose:r,activator:o,preventFocusOnClose:i,active:a,fixed:c,ariaHaspopup:d,preferInputActivator:u=!0,zIndexOverride:p,...v},h){let[f,b]=(0,s.useState)(),P=(0,s.useRef)(null),m=(0,s.useRef)(null),x=(0,s.useId)();function E(){P.current?.forceUpdatePosition()}(0,s.useImperativeHandle)(h,()=>({forceUpdatePosition:E}));let g=(0,s.useCallback)(()=>{if(null==m.current)return;let e=(0,l.IT)(m.current),t=e||m.current,r="disabled"in t&&Boolean(t.disabled);!function(e,{id:t,active:r=!1,ariaHaspopup:n,activatorDisabled:o=!1}){o||(e.tabIndex=e.tabIndex||0),e.setAttribute("aria-controls",t),e.setAttribute("aria-owns",t),e.setAttribute("aria-expanded",String(r)),null!=n&&e.setAttribute("aria-haspopup",String(n))}(t,{id:x,active:a,ariaHaspopup:d,activatorDisabled:r})},[x,a,d]),y=e=>{if(r(e),null!=m.current&&!i){if(e===n.FocusOut&&f){let t=(0,l.IT)(f)||(0,l.IT)(m.current)||m.current;(0,l.v)(t,S)||t.focus()}else if(e===n.EscapeKeypress&&f){let o=(0,l.IT)(f)||(0,l.IT)(m.current)||m.current;o?o.focus():(0,l.v)(o,S)}}};(0,s.useEffect)(()=>{!f&&m.current?b(m.current.firstElementChild):f&&m.current&&!m.current.contains(f)&&b(m.current.firstElementChild),g()},[f,g]),(0,s.useEffect)(()=>{f&&m.current&&b(m.current.firstElementChild),g()},[f,g]);let _=f?s.createElement(O.h,{idPrefix:"popover"},s.createElement(C,Object.assign({ref:P,id:x,activator:f,preferInputActivator:u,onClose:y,active:a,fixed:c,zIndexOverride:p},v),t)):null;return s.createElement(e,{ref:m},s.Children.only(o),_)});function S(e){let t=e.parentElement;for(;t;){if(t.matches(c.l4.selector))return!1;t=t.parentElement}return!0}let I=Object.assign(w,{Pane:m,Section:b})},26482:function(e,t,r){r.d(t,{M2:function(){return l},Mc:function(){return a},Vr:function(){return c},gD:function(){return s},oh:function(){return o}});var n=r(27378);function o(e,t,r){return null==e?null:a(e,t)?e:n.createElement(t,r,e)}let i=(e,t)=>e===t;function a(e,t){if(null==e||!(0,n.isValidElement)(e)||"string"==typeof e.type)return!1;let{type:r}=e,o=e.props?.__type__,a=o||r,s=Array.isArray(t)?t:[t];return s.some(e=>"string"!=typeof a&&i(e,a))}function s(e,t=()=>!0){return n.Children.toArray(e).filter(e=>(0,n.isValidElement)(e)&&t(e))}function l({condition:e,wrapper:t,children:r}){return e?t(r):r}function c({condition:e,children:t}){return e?t:null}}}]);