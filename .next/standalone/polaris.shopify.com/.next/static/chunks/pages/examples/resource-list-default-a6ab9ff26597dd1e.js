(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8880],{53465:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/resource-list-default",function(){return n(63903)}])},63903:function(t,e,n){"use strict";n.r(e);var i=n(24246),r=n(29324),a=n(76515),s=n(43073),o=n(67421),l=n(88470);n(27378);var u=n(64515);e.default=(0,u.y)(function(){return(0,i.jsx)(r.z,{children:(0,i.jsx)(a.D,{resourceName:{singular:"customer",plural:"customers"},items:[{id:"100",url:"#",name:"Mae Jemison",location:"Decatur, USA"},{id:"200",url:"#",name:"Ellen Ochoa",location:"Los Angeles, USA"}],renderItem(t){let{id:e,url:n,name:r,location:a}=t,u=(0,i.jsx)(s.q,{customer:!0,size:"md",name:r});return(0,i.jsxs)(o.L,{id:e,url:n,media:u,accessibilityLabel:"View details for ".concat(r),children:[(0,i.jsx)(l.x,{variant:"bodyMd",fontWeight:"bold",as:"h3",children:r}),(0,i.jsx)("div",{children:a})]})}})})})},42802:function(t,e,n){"use strict";n.d(e,{ZP:function(){return m}});var i=n(30808),r=n(40351),a=n(27378),s=n(31542),o={disabled:!1},l=n(16897),u="unmounted",c="exited",d="entering",p="entered",f="exiting",h=function(t){function e(e,n){i=t.call(this,e,n)||this;var i,r,a=n&&!n.isMounting?e.enter:e.appear;return i.appearStatus=null,e.in?a?(r=c,i.appearStatus=d):r=p:r=e.unmountOnExit||e.mountOnEnter?u:c,i.state={status:r},i.nextCallback=null,i}(0,r.Z)(e,t),e.getDerivedStateFromProps=function(t,e){return t.in&&e.status===u?{status:c}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?n!==d&&n!==p&&(e=d):(n===d||n===p)&&(e=f)}this.updateStatus(!1,e)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var t,e,n,i=this.props.timeout;return t=e=n=i,null!=i&&"number"!=typeof i&&(t=i.exit,e=i.enter,n=void 0!==i.appear?i.appear:e),{exit:t,enter:e,appear:n}},n.updateStatus=function(t,e){void 0===t&&(t=!1),null!==e?(this.cancelNextCallback(),e===d?this.performEnter(t):this.performExit()):this.props.unmountOnExit&&this.state.status===c&&this.setState({status:u})},n.performEnter=function(t){var e=this,n=this.props.enter,i=this.context?this.context.isMounting:t,r=this.props.nodeRef?[i]:[s.findDOMNode(this),i],a=r[0],l=r[1],u=this.getTimeouts(),c=i?u.appear:u.enter;if(!t&&!n||o.disabled){this.safeSetState({status:p},function(){e.props.onEntered(a)});return}this.props.onEnter(a,l),this.safeSetState({status:d},function(){e.props.onEntering(a,l),e.onTransitionEnd(c,function(){e.safeSetState({status:p},function(){e.props.onEntered(a,l)})})})},n.performExit=function(){var t=this,e=this.props.exit,n=this.getTimeouts(),i=this.props.nodeRef?void 0:s.findDOMNode(this);if(!e||o.disabled){this.safeSetState({status:c},function(){t.props.onExited(i)});return}this.props.onExit(i),this.safeSetState({status:f},function(){t.props.onExiting(i),t.onTransitionEnd(n.exit,function(){t.safeSetState({status:c},function(){t.props.onExited(i)})})})},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},n.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(i){n&&(n=!1,e.nextCallback=null,t(i))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(t,e){this.setNextCallback(e);var n=this.props.nodeRef?this.props.nodeRef.current:s.findDOMNode(this),i=null==t&&!this.props.addEndListener;if(!n||i){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var r=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],a=r[0],o=r[1];this.props.addEndListener(a,o)}null!=t&&setTimeout(this.nextCallback,t)},n.render=function(){var t=this.state.status;if(t===u)return null;var e=this.props,n=e.children,r=(e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef,(0,i.Z)(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return a.createElement(l.Z.Provider,{value:null},"function"==typeof n?n(t,r):a.cloneElement(a.Children.only(n),r))},e}(a.Component);function E(){}h.contextType=l.Z,h.propTypes={},h.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:E,onEntering:E,onEntered:E,onExit:E,onExiting:E,onExited:E},h.UNMOUNTED=u,h.EXITED=c,h.ENTERING=d,h.ENTERED=p,h.EXITING=f;var m=h},16897:function(t,e,n){"use strict";var i=n(27378);e.Z=i.createContext(null)},43073:function(t,e,n){"use strict";n.d(e,{q:function(){return f}});var i,r,a=n(27378),s=n(39627),o=n(72606),l={Avatar:"Polaris-Avatar",imageHasLoaded:"Polaris-Avatar--imageHasLoaded",Text:"Polaris-Avatar__Text",long:"Polaris-Avatar--long",hidden:"Polaris-Avatar--hidden",sizeXs:"Polaris-Avatar--sizeXs",sizeSm:"Polaris-Avatar--sizeSm",sizeMd:"Polaris-Avatar--sizeMd",sizeLg:"Polaris-Avatar--sizeLg",sizeXl:"Polaris-Avatar--sizeXl",styleOne:"Polaris-Avatar--styleOne",styleTwo:"Polaris-Avatar--styleTwo",styleThree:"Polaris-Avatar--styleThree",styleFour:"Polaris-Avatar--styleFour",styleFive:"Polaris-Avatar--styleFive",Image:"Polaris-Avatar__Image",Initials:"Polaris-Avatar__Initials",Svg:"Polaris-Avatar__Svg"},u=n(57963),c=n(17017);(i=r||(r={})).Pending="PENDING",i.Loaded="LOADED",i.Errored="ERRORED";let d=["one","two","three","four","five"],p={xs:"3",sm:"2.5",md:"2.5",lg:"2.5",xl:"2"};function f({name:t,source:e,onError:n,initials:i,customer:f,size:h="md",accessibilityLabel:E}){var m;let x;let v=(0,u.Q)(),g=(0,o.u)(),[b,C]=(0,a.useState)(r.Pending);(0,a.useEffect)(()=>{C(r.Pending)},[e]);let k=(0,a.useCallback)(()=>{C(r.Errored),n&&n()},[n]),P=(0,a.useCallback)(()=>{C(r.Loaded)},[]),S=e&&b!==r.Errored;if(E)x=E;else if(t)x=t;else if(i){let A=i.split("").join(" ");x=v.translate("Polaris.Avatar.labelWithInitials",{initials:A})}let O=(0,s.AK)(l.Avatar,h&&l[(0,s.OZ)("size",h)],S&&b===r.Loaded&&l.imageHasLoaded,!f&&!e&&l[(0,s.OZ)("style",(m=t||i)?d[function(t){let e=0;for(let n of t)e^=n.charCodeAt(0);return e}(m)%d.length]:d[0])]),y=(0,s.AK)(l.Text,(i?.length||0)>2&&l.long),N=(0,s.AK)(l.Image,b!==r.Loaded&&l.hidden),T=e&&g&&b!==r.Errored?a.createElement(c.E,{className:N,source:e,alt:"",role:"presentation",onLoad:P,onError:k}):null,_=a.createElement(a.Fragment,null,a.createElement("path",{fill:"none",d:"M25.5 13.5C25.5 16.5376 23.0376 19 20 19C16.9624 19 14.5 16.5376 14.5 13.5C14.5 10.4624 16.9624 8 20 8C23.0376 8 25.5 10.4624 25.5 13.5Z",stroke:"currentColor",strokeWidth:p[h]}),a.createElement("path",{fill:"none",d:"M10.3433 29.682L9.47 31.254C9.03481 32.0373 9.60125 33 10.4974 33H29.5026C30.3988 33 30.9652 32.0373 30.53 31.254L29.6567 29.682C27.7084 26.175 24.0119 24 20 24C15.9882 24 12.2916 26.175 10.3433 29.682Z",stroke:"currentColor",strokeWidth:p[h],strokeLinecap:"round",strokeLinejoin:"round"})),L=f||!i?_:a.createElement("text",{className:y,x:"50%",y:"50%",dy:"0.35em",fill:"currentColor",textAnchor:"middle"},i),D=S?null:a.createElement("span",{className:l.Initials},a.createElement("svg",{className:l.Svg,viewBox:"0 0 40 40"},L));return a.createElement("span",{"aria-label":x,role:x?"img":"presentation",className:O},D,T)}},40351:function(t,e,n){"use strict";function i(t,e){return(i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function r(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,i(t,e)}n.d(e,{Z:function(){return r}})},30808:function(t,e,n){"use strict";function i(t,e){if(null==t)return{};var n,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}n.d(e,{Z:function(){return i}})}},function(t){t.O(0,[4515,3121,7298,2131,8073,7693,1472,1538,6515,9774,2888,179],function(){return t(t.s=53465)}),_N_E=t.O()}]);