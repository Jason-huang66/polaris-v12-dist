(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2581],{54335:function(e){var t="undefined"!=typeof Element,a="function"==typeof Map,n="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,r){try{return function e(r,o){if(r===o)return!0;if(r&&o&&"object"==typeof r&&"object"==typeof o){var s,l,c,u;if(r.constructor!==o.constructor)return!1;if(Array.isArray(r)){if((s=r.length)!=o.length)return!1;for(l=s;0!=l--;)if(!e(r[l],o[l]))return!1;return!0}if(a&&r instanceof Map&&o instanceof Map){if(r.size!==o.size)return!1;for(u=r.entries();!(l=u.next()).done;)if(!o.has(l.value[0]))return!1;for(u=r.entries();!(l=u.next()).done;)if(!e(l.value[1],o.get(l.value[0])))return!1;return!0}if(n&&r instanceof Set&&o instanceof Set){if(r.size!==o.size)return!1;for(u=r.entries();!(l=u.next()).done;)if(!o.has(l.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(r)&&ArrayBuffer.isView(o)){if((s=r.length)!=o.length)return!1;for(l=s;0!=l--;)if(r[l]!==o[l])return!1;return!0}if(r.constructor===RegExp)return r.source===o.source&&r.flags===o.flags;if(r.valueOf!==Object.prototype.valueOf)return r.valueOf()===o.valueOf();if(r.toString!==Object.prototype.toString)return r.toString()===o.toString();if((s=(c=Object.keys(r)).length)!==Object.keys(o).length)return!1;for(l=s;0!=l--;)if(!Object.prototype.hasOwnProperty.call(o,c[l]))return!1;if(t&&r instanceof Element)return!1;for(l=s;0!=l--;)if(("_owner"!==c[l]&&"__v"!==c[l]&&"__o"!==c[l]||!r.$$typeof)&&!e(r[c[l]],o[c[l]]))return!1;return!0}return r!=r&&o!=o}(e,r)}catch(o){if((o.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw o}}},26928:function(e,t,a){"use strict";a.d(t,{R:function(){return X}});var n,i,r=a(27378),o=a(27002),s=a(37162),l=a(39627),c=a(4967),u=a(38852),m=a(77028),d={Frame:"Polaris-Frame",Navigation:"Polaris-Frame__Navigation",hasTopBar:"Polaris-Frame--hasTopBar","Navigation-enter":"Polaris-Frame__Navigation--enter","Navigation-enterActive":"Polaris-Frame__Navigation--enterActive","Navigation-exit":"Polaris-Frame__Navigation--exit","Navigation-exitActive":"Polaris-Frame__Navigation--exitActive",NavigationDismiss:"Polaris-Frame__NavigationDismiss","Navigation-visible":"Polaris-Frame__Navigation--visible",TopBar:"Polaris-Frame__TopBar",ContextualSaveBar:"Polaris-Frame__ContextualSaveBar",Main:"Polaris-Frame__Main",hasNav:"Polaris-Frame--hasNav",Content:"Polaris-Frame__Content",hasSidebar:"Polaris-Frame--hasSidebar",GlobalRibbonContainer:"Polaris-Frame__GlobalRibbonContainer",LoadingBar:"Polaris-Frame__LoadingBar",Skip:"Polaris-Frame__Skip",focused:"Polaris-Frame--focused",pressed:"Polaris-Frame--pressed"},g=a(17227),f={Loading:"Polaris-Frame-Loading",Level:"Polaris-Frame-Loading__Level"},p=a(57963);function h(){let e=(0,p.Q)(),t=function(){let e=(0,r.useRef)(!1);return(0,r.useEffect)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}(),[a,n]=(0,r.useState)(0),[i,o]=(0,r.useState)(!1);(0,r.useEffect)(()=>{a>=99||i||requestAnimationFrame(()=>{t.current&&(o(!0),n(a+Math.max((99-a)/10,1)))})},[a,i,t]);let s={transform:`scaleX(${Math.floor(a)/100})`};return r.createElement("div",{className:f.Loading,"aria-valuenow":a,"aria-valuemin":0,"aria-valuemax":100,role:"progressbar","aria-label":e.translate("Polaris.Loading.label")},r.createElement("div",{className:f.Level,style:s,onTransitionEnd:()=>o(!1)}))}var v={startFade:"Polaris-Frame-CSSAnimation--startFade",endFade:"Polaris-Frame-CSSAnimation--endFade"};function b({in:e,className:t,type:a,children:n}){let[o,s]=(0,r.useState)(e?i.Entering:i.Exited),c=(0,r.useRef)(!1),u=(0,r.useRef)(null);(0,r.useEffect)(()=>{c.current&&o===i.Entering&&g(i.Entered)},[o]),(0,r.useEffect)(()=>{c.current&&(e&&g(i.Entering),e||g(i.Exiting))},[e]),(0,r.useEffect)(()=>{c.current=!0},[]);let m=(0,l.AK)(t,v[(0,l.OZ)("start",a)],e&&v[(0,l.OZ)("end",a)]),d=o!==i.Exited||e?n:null;return r.createElement("div",{className:m,ref:u,onTransitionEnd:function(){o===i.Exiting&&g(i.Exited)}},d);function g(e){s(e),e===i.Entering&&u.current&&u.current.getBoundingClientRect()}}(n=i||(i={})).Entering="entering",n.Entered="entered",n.Exiting="exiting",n.Exited="exited";var E=a(65929),S=a(40372),C=a(95336),P={ContextualSaveBar:"Polaris-Frame-ContextualSaveBar",LogoContainer:"Polaris-Frame-ContextualSaveBar__LogoContainer",ContextControl:"Polaris-Frame-ContextualSaveBar__ContextControl",Contents:"Polaris-Frame-ContextualSaveBar__Contents",fullWidth:"Polaris-Frame-ContextualSaveBar--fullWidth",MessageContainer:"Polaris-Frame-ContextualSaveBar__MessageContainer",ActionContainer:"Polaris-Frame-ContextualSaveBar__ActionContainer",Action:"Polaris-Frame-ContextualSaveBar__Action"},x=a(5293);function y({open:e,onDiscard:t,onCancel:a}){let n=(0,p.Q)();return r.createElement(x.u,{title:n.translate("Polaris.DiscardConfirmationModal.title"),open:e,onClose:a,primaryAction:{content:n.translate("Polaris.DiscardConfirmationModal.primaryAction"),destructive:!0,onAction:t},secondaryActions:[{content:n.translate("Polaris.DiscardConfirmationModal.secondaryAction"),onAction:a}],sectioned:!0},n.translate("Polaris.DiscardConfirmationModal.message"))}var N=a(85216),F=a(33121),_=a(17017),L=a(89219),k=a(88470),A=a(97661);function T({alignContentFlush:e,message:t,saveAction:a,discardAction:n,fullWidth:i,contextControl:o,secondaryMenu:s}){let c;let u=(0,p.Q)(),{logo:m}=(0,N.x)(),{value:d,toggle:g,setFalse:f}=(0,C.O)(!1),h=(0,r.useCallback)(()=>{n&&n.onAction&&n.onAction(),f()},[f,n]),v=n&&n.content?n.content:u.translate("Polaris.ContextualSaveBar.discard");n&&n.discardConfirmationModal?c=g:n&&(c=n.onAction);let b=n&&n.onAction&&n.discardConfirmationModal&&r.createElement(y,{open:d,onCancel:g,onDiscard:h}),x=n&&r.createElement(F.z,{variant:"tertiary",size:"large",url:n.url,onClick:c,loading:n.loading,disabled:n.disabled,accessibilityLabel:n.content},v),T=a&&a.content?a.content:u.translate("Polaris.ContextualSaveBar.save"),B=a&&r.createElement(F.z,{variant:"primary",tone:"success",size:"large",url:a.url,onClick:a.onAction,loading:a.loading,disabled:a.disabled,accessibilityLabel:a.content},T),R=(0,S.d)(m,104),M=m&&r.createElement(_.E,{style:{width:R},source:m.contextualSaveBarSource||"",alt:""}),O=e||o?null:r.createElement("div",{className:P.LogoContainer,style:{width:R}},M),w=o?r.createElement("div",{className:P.ContextControl},o):null,D=(0,l.AK)(P.Contents,i&&P.fullWidth);return r.createElement(r.Fragment,null,r.createElement("div",{className:P.ContextualSaveBar},w,O,r.createElement("div",{className:D},r.createElement("div",{className:P.MessageContainer},r.createElement(L.J,{source:E.S}),t&&r.createElement(k.x,{as:"h2",variant:"headingMd",tone:"text-inverse",truncate:!0},t)),r.createElement("div",{className:P.ActionContainer},r.createElement(A.D,{spacing:"tight",wrap:!1},s,x,B)))),b)}var B=a(84222),R=a(89951),M=a(91912),O={ToastManager:"Polaris-Frame-ToastManager",ToastWrapper:"Polaris-Frame-ToastManager__ToastWrapper","ToastWrapper-enter":"Polaris-Frame-ToastManager__ToastWrapper--enter","ToastWrapper-exit":"Polaris-Frame-ToastManager__ToastWrapper--exit","ToastWrapper-enter-done":"Polaris-Frame-ToastManager--toastWrapperEnterDone"},w=a(16129),D=a(98634),W=a(9686),K={Toast:"Polaris-Frame-Toast",Action:"Polaris-Frame-Toast__Action",error:"Polaris-Frame-Toast--error",CloseButton:"Polaris-Frame-Toast__CloseButton",LeadingIcon:"Polaris-Frame-Toast__LeadingIcon"},z=a(81894),j=a(39355);function I({content:e,onDismiss:t,duration:a,error:n,action:i}){(0,r.useEffect)(()=>{let e=a||5e3;i&&!a?e=1e4:i&&a&&a<1e4&&console.log("Toast with action should persist for at least 10,000 milliseconds to give the merchant enough time to act on it.");let n=setTimeout(t,e);return()=>{clearTimeout(n)}},[i,a,t]);let o=r.createElement("button",{type:"button",className:K.CloseButton,onClick:t},r.createElement(L.J,{source:w.S})),s=i?r.createElement("div",{className:K.Action},r.createElement(F.z,{variant:"monochromePlain",removeUnderline:!0,size:"slim",onClick:i.onAction},i.content)):null,c=n?r.createElement("div",{className:K.LeadingIcon},r.createElement(L.J,{source:D.S,tone:"base"})):null,u=(0,l.AK)(K.Toast,n&&K.error);return r.createElement("div",{className:u,"aria-live":"assertive"},r.createElement(z.n,{keyCode:W.s.Escape,handler:t}),c,r.createElement(j.g,{gap:"400",blockAlign:"center"},r.createElement(k.x,{as:"span",fontWeight:"medium"},e)),s,o)}var G=a(55482),$=a(93283);let H=(0,r.memo)(function({toastMessages:e}){var t,a;let n=[],i=(t=()=>{let t=0;e.forEach((e,a)=>{let i=n[a];i.current&&(t+=i.current.clientHeight,i.current.style.setProperty("--pc-toast-manager-translate-y-in",`-${t}px`),i.current.style.setProperty("--pc-toast-manager-translate-y-out",`${-t+150}px`))})},a=[e,n],(0,r.useCallback)(t,(0,M.E)(a,void 0)));(0,R.H)(()=>{i()},[e]);let o=e.map((e,t)=>{let a=(0,r.createRef)();return n[t]=a,r.createElement(s.Z,{nodeRef:n[t],key:e.id,timeout:{enter:0,exit:400},classNames:Z},r.createElement("div",{ref:a},r.createElement(I,e)))});return r.createElement(G.h,{idPrefix:"toast"},r.createElement($.h,{event:"resize",handler:i}),r.createElement("div",{className:O.ToastManager,"aria-live":"assertive"},r.createElement(B.Z,{component:null},o)))}),Z={enter:(0,l.AK)(O.ToastWrapper,O["ToastWrapper-enter"]),enterDone:(0,l.AK)(O.ToastWrapper,O["ToastWrapper-enter-done"]),exit:(0,l.AK)(O.ToastWrapper,O["ToastWrapper-exit"])};var Q=a(65568),J=a(12287),U=a(69436);let V="AppFrameMain";class Y extends r.PureComponent{constructor(...e){super(...e),this.state={skipFocused:!1,globalRibbonHeight:0,loadingStack:0,toastMessages:[],showContextualSaveBar:!1},this.contextualSaveBar=null,this.globalRibbonContainer=null,this.navigationNode=(0,r.createRef)(),this.setGlobalRibbonHeight=()=>{let{globalRibbonContainer:e}=this;e&&this.setState({globalRibbonHeight:e.offsetHeight},this.setGlobalRibbonRootProperty)},this.setOffset=()=>{let{offset:e="0px"}=this.props;(0,u.v)("--pc-frame-offset",e)},this.setGlobalRibbonRootProperty=()=>{let{globalRibbonHeight:e}=this.state;(0,u.v)("--pc-frame-global-ribbon-height",`${e}px`)},this.showToast=e=>{this.setState(({toastMessages:t})=>{let a=null!=t.find(({id:t})=>t===e.id);return{toastMessages:a?t:[...t,e]}})},this.hideToast=({id:e})=>{this.setState(({toastMessages:t})=>({toastMessages:t.filter(({id:t})=>e!==t)}))},this.setContextualSaveBar=e=>{let{showContextualSaveBar:t}=this.state;this.contextualSaveBar={...e},!0===t?this.forceUpdate():this.setState({showContextualSaveBar:!0})},this.removeContextualSaveBar=()=>{this.contextualSaveBar=null,this.setState({showContextualSaveBar:!1})},this.startLoading=()=>{this.setState(({loadingStack:e})=>({loadingStack:e+1}))},this.stopLoading=()=>{this.setState(({loadingStack:e})=>({loadingStack:Math.max(0,e-1)}))},this.handleResize=()=>{this.props.globalRibbon&&this.setGlobalRibbonHeight()},this.handleFocus=()=>{this.setState({skipFocused:!0})},this.handleBlur=()=>{this.setState({skipFocused:!1})},this.handleClick=e=>{let{skipToContentTarget:t}=this.props;t&&t.current&&(t.current.focus(),e?.preventDefault())},this.handleNavigationDismiss=()=>{let{onNavigationDismiss:e}=this.props;null!=e&&e()},this.setGlobalRibbonContainer=e=>{this.globalRibbonContainer=e},this.handleNavKeydown=e=>{let{key:t}=e,{mediaQuery:{isNavigationCollapsed:a},showMobileNavigation:n}=this.props;a&&n&&"Escape"===t&&this.handleNavigationDismiss()}}componentDidMount(){this.handleResize(),this.props.globalRibbon||(this.setGlobalRibbonRootProperty(),this.setOffset())}componentDidUpdate(e){this.props.globalRibbon!==e.globalRibbon&&this.setGlobalRibbonHeight(),this.setOffset()}render(){let{skipFocused:e,loadingStack:t,toastMessages:a,showContextualSaveBar:n}=this.state,{logo:i,children:u,navigation:g,topBar:f,globalRibbon:p,showMobileNavigation:v=!1,skipToContentTarget:E,i18n:S,sidebar:C,mediaQuery:{isNavigationCollapsed:P}}=this.props,x=(0,l.AK)(d.Navigation,v&&d["Navigation-visible"]),y=P&&!v,N=P&&v,F=N?0:-1,_={...N&&{"aria-modal":!0,role:"dialog"}},k=g?r.createElement(m.UI,null,e=>r.createElement(U.F,{trapping:N},r.createElement(s.Z,{nodeRef:this.navigationNode,appear:P,exit:P,in:v,timeout:parseInt(e.motion["motion-duration-300"],10),classNames:q},r.createElement("div",Object.assign({key:"NavContent"},_,{"aria-label":S.translate("Polaris.Frame.navigationLabel"),ref:this.navigationNode,className:x,onKeyDown:this.handleNavKeydown,id:"AppFrameNav",hidden:y}),g,r.createElement("button",{type:"button",className:d.NavigationDismiss,onClick:this.handleNavigationDismiss,"aria-hidden":y||!P&&!v,"aria-label":S.translate("Polaris.Frame.Navigation.closeMobileNavigationLabel"),tabIndex:F},r.createElement(L.J,{source:o.S})))))):null,A=t>0?r.createElement("div",{className:d.LoadingBar,id:"AppFrameLoadingBar"},r.createElement(h,null)):null,B=f?r.createElement("div",Object.assign({className:d.TopBar},c.EY.props,c.VT.props,{id:"AppFrameTopBar"}),f):null,R=p?r.createElement("div",{className:d.GlobalRibbonContainer,ref:this.setGlobalRibbonContainer},p):null,M=(0,l.AK)(d.Skip,e&&d.focused),O=E?.current?E.current.id:V,w=r.createElement("div",{className:M},r.createElement("a",{href:`#${O}`,onFocus:this.handleFocus,onBlur:this.handleBlur,onClick:this.handleClick},S.translate("Polaris.Frame.skipToContent"))),D=(0,l.AK)(d.Frame,g&&d.hasNav,f&&d.hasTopBar,C&&d.hasSidebar),W=r.createElement(b,{in:n,className:d.ContextualSaveBar,type:"fade"},r.createElement(T,this.contextualSaveBar)),K=v&&P?r.createElement(Q.Y,{belowNavigation:!0,onClick:this.handleNavigationDismiss,onTouchStart:this.handleNavigationDismiss}):null,z={logo:i,showToast:this.showToast,hideToast:this.hideToast,toastMessages:a,startLoading:this.startLoading,stopLoading:this.stopLoading,setContextualSaveBar:this.setContextualSaveBar,removeContextualSaveBar:this.removeContextualSaveBar};return r.createElement(J.l.Provider,{value:z},r.createElement("div",Object.assign({className:D},c.EY.props,g?{"data-has-navigation":!0}:{}),w,B,k,W,A,K,r.createElement("main",{className:d.Main,id:V,"data-has-global-ribbon":Boolean(p)},r.createElement("div",{className:d.Content},u)),r.createElement(H,{toastMessages:a}),R,r.createElement($.h,{event:"resize",handler:this.handleResize})))}}let q={enter:(0,l.AK)(d["Navigation-enter"]),enterActive:(0,l.AK)(d["Navigation-enterActive"]),enterDone:(0,l.AK)(d["Navigation-enterActive"]),exit:(0,l.AK)(d["Navigation-exit"]),exitActive:(0,l.AK)(d["Navigation-exitActive"])};function X(e){let t=(0,p.Q)(),a=(0,g.a)();return r.createElement(Y,Object.assign({},e,{i18n:t,mediaQuery:a}))}},17017:function(e,t,a){"use strict";a.d(t,{E:function(){return i}});var n=a(27378);function i({alt:e,sourceSet:t,source:a,crossOrigin:i,onLoad:r,className:o,...s}){let l=t?t.map(({source:e,descriptor:t})=>`${e} ${t}`).join(","):null,c=(0,n.useCallback)(()=>{r&&r()},[r]);return n.createElement("img",Object.assign({alt:e,src:a,crossOrigin:i,className:o,onLoad:c},l?{srcSet:l}:{},s))}},97661:function(e,t,a){"use strict";a.d(t,{D:function(){return l}});var n=a(27378),i=a(39627),r=a(26482),o={LegacyStack:"Polaris-LegacyStack",Item:"Polaris-LegacyStack__Item",noWrap:"Polaris-LegacyStack--noWrap",spacingNone:"Polaris-LegacyStack--spacingNone",spacingExtraTight:"Polaris-LegacyStack--spacingExtraTight",spacingTight:"Polaris-LegacyStack--spacingTight",spacingBaseTight:"Polaris-LegacyStack--spacingBaseTight",spacingLoose:"Polaris-LegacyStack--spacingLoose",spacingExtraLoose:"Polaris-LegacyStack--spacingExtraLoose",distributionLeading:"Polaris-LegacyStack--distributionLeading",distributionTrailing:"Polaris-LegacyStack--distributionTrailing",distributionCenter:"Polaris-LegacyStack--distributionCenter",distributionEqualSpacing:"Polaris-LegacyStack--distributionEqualSpacing",distributionFill:"Polaris-LegacyStack--distributionFill",distributionFillEvenly:"Polaris-LegacyStack--distributionFillEvenly",alignmentLeading:"Polaris-LegacyStack--alignmentLeading",alignmentTrailing:"Polaris-LegacyStack--alignmentTrailing",alignmentCenter:"Polaris-LegacyStack--alignmentCenter",alignmentFill:"Polaris-LegacyStack--alignmentFill",alignmentBaseline:"Polaris-LegacyStack--alignmentBaseline",vertical:"Polaris-LegacyStack--vertical","Item-fill":"Polaris-LegacyStack__Item--fill"};function s({children:e,fill:t}){let a=(0,i.AK)(o.Item,t&&o["Item-fill"]);return n.createElement("div",{className:a},e)}let l=(0,n.memo)(function({children:e,vertical:t,spacing:a,distribution:l,alignment:c,wrap:u}){let m=(0,i.AK)(o.LegacyStack,t&&o.vertical,a&&o[(0,i.OZ)("spacing",a)],l&&o[(0,i.OZ)("distribution",l)],c&&o[(0,i.OZ)("alignment",c)],!1===u&&o.noWrap),d=(0,r.gD)(e).map((e,t)=>(0,r.oh)(e,s,{key:t}));return n.createElement("div",{className:m},d)});l.Item=s},85216:function(e,t,a){"use strict";a.d(t,{x:function(){return r}});var n=a(27378),i=a(12287);function r(){let e=(0,n.useContext)(i.l);if(!e)throw Error("No Frame context was provided. Your component must be wrapped in a <Frame> component. See https://polaris.shopify.com/components/frame for implementation instructions.");return e}},40372:function(e,t,a){"use strict";a.d(t,{d:function(){return i}});var n=a(24528);function i(e={},t=0,a="width"){let i="number"==typeof e?e:function e(t,a){if(!t)return null;let i=Object.keys(t);for(let r of i){if(r===a)return t[a];if((0,n.K)(t[r])){let o=e(t[r],a);if(o)return o}}return null}(e,a);return i?`${i}px`:`${t}px`}},38852:function(e,t,a){"use strict";function n(e,t,a){if(!document)return;let n=a||document.documentElement;n.style.setProperty(e,t)}a.d(t,{v:function(){return n}})},91912:function(e,t,a){"use strict";a.d(t,{E:function(){return o}});var n=a(27378),i=a(54335),r=a.n(i);function o(e,t=r()){let a=(0,n.useRef)(e);return t(a.current,e)||(a.current=e),a.current}},89951:function(e,t,a){"use strict";a.d(t,{H:function(){return r}});var n=a(27378),i=a(91912);function r(e,t,a){(0,n.useEffect)(e,(0,i.E)(t,a))}},10952:function(e,t,a){"use strict";a.d(t,{O:function(){return i}});var n=a(27378);let i=(0,n.createContext)(!1)}}]);