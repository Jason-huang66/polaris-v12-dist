(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5827],{26250:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/resource-list-with-bulk-actions",function(){return n(31938)}])},31938:function(t,e,n){"use strict";n.r(e);var i=n(24246),o=n(29324),r=n(76515),a=n(43073),s=n(67421),l=n(88470),u=n(27378),c=n(64515);e.default=(0,c.y)(function(){let[t,e]=(0,u.useState)([]);return(0,i.jsx)(o.z,{children:(0,i.jsx)(r.D,{resourceName:{singular:"customer",plural:"customers"},items:[{id:"103",url:"#",name:"Mae Jemison",location:"Decatur, USA"},{id:"203",url:"#",name:"Ellen Ochoa",location:"Los Angeles, USA"}],renderItem:function(t){let{id:e,url:n,name:o,location:r}=t,u=(0,i.jsx)(a.q,{customer:!0,size:"md",name:o});return(0,i.jsxs)(s.L,{id:e,url:n,media:u,accessibilityLabel:"View details for ".concat(o),children:[(0,i.jsx)(l.x,{variant:"bodyMd",fontWeight:"bold",as:"h3",children:o}),(0,i.jsx)("div",{children:r})]})},selectedItems:t,onSelectionChange:e,promotedBulkActions:[{content:"Edit customers",onAction:()=>console.log("Todo: implement bulk edit")}],bulkActions:[{content:"Add tags",onAction:()=>console.log("Todo: implement bulk add tags")},{content:"Remove tags",onAction:()=>console.log("Todo: implement bulk remove tags")},{content:"Delete customers",onAction:()=>console.log("Todo: implement bulk delete")}]})})})},42802:function(t,e,n){"use strict";n.d(e,{ZP:function(){return E}});var i=n(30808),o=n(40351),r=n(27378),a=n(31542),s={disabled:!1},l=n(16897),u="unmounted",c="exited",d="entering",p="entered",f="exiting",h=function(t){function e(e,n){i=t.call(this,e,n)||this;var i,o,r=n&&!n.isMounting?e.enter:e.appear;return i.appearStatus=null,e.in?r?(o=c,i.appearStatus=d):o=p:o=e.unmountOnExit||e.mountOnEnter?u:c,i.state={status:o},i.nextCallback=null,i}(0,o.Z)(e,t),e.getDerivedStateFromProps=function(t,e){return t.in&&e.status===u?{status:c}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?n!==d&&n!==p&&(e=d):(n===d||n===p)&&(e=f)}this.updateStatus(!1,e)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var t,e,n,i=this.props.timeout;return t=e=n=i,null!=i&&"number"!=typeof i&&(t=i.exit,e=i.enter,n=void 0!==i.appear?i.appear:e),{exit:t,enter:e,appear:n}},n.updateStatus=function(t,e){void 0===t&&(t=!1),null!==e?(this.cancelNextCallback(),e===d?this.performEnter(t):this.performExit()):this.props.unmountOnExit&&this.state.status===c&&this.setState({status:u})},n.performEnter=function(t){var e=this,n=this.props.enter,i=this.context?this.context.isMounting:t,o=this.props.nodeRef?[i]:[a.findDOMNode(this),i],r=o[0],l=o[1],u=this.getTimeouts(),c=i?u.appear:u.enter;if(!t&&!n||s.disabled){this.safeSetState({status:p},function(){e.props.onEntered(r)});return}this.props.onEnter(r,l),this.safeSetState({status:d},function(){e.props.onEntering(r,l),e.onTransitionEnd(c,function(){e.safeSetState({status:p},function(){e.props.onEntered(r,l)})})})},n.performExit=function(){var t=this,e=this.props.exit,n=this.getTimeouts(),i=this.props.nodeRef?void 0:a.findDOMNode(this);if(!e||s.disabled){this.safeSetState({status:c},function(){t.props.onExited(i)});return}this.props.onExit(i),this.safeSetState({status:f},function(){t.props.onExiting(i),t.onTransitionEnd(n.exit,function(){t.safeSetState({status:c},function(){t.props.onExited(i)})})})},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},n.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(i){n&&(n=!1,e.nextCallback=null,t(i))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(t,e){this.setNextCallback(e);var n=this.props.nodeRef?this.props.nodeRef.current:a.findDOMNode(this),i=null==t&&!this.props.addEndListener;if(!n||i){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],r=o[0],s=o[1];this.props.addEndListener(r,s)}null!=t&&setTimeout(this.nextCallback,t)},n.render=function(){var t=this.state.status;if(t===u)return null;var e=this.props,n=e.children,o=(e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef,(0,i.Z)(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return r.createElement(l.Z.Provider,{value:null},"function"==typeof n?n(t,o):r.cloneElement(r.Children.only(n),o))},e}(r.Component);function m(){}h.contextType=l.Z,h.propTypes={},h.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:m,onEntering:m,onEntered:m,onExit:m,onExiting:m,onExited:m},h.UNMOUNTED=u,h.EXITED=c,h.ENTERING=d,h.ENTERED=p,h.EXITING=f;var E=h},16897:function(t,e,n){"use strict";var i=n(27378);e.Z=i.createContext(null)},43073:function(t,e,n){"use strict";n.d(e,{q:function(){return f}});var i,o,r=n(27378),a=n(39627),s=n(72606),l={Avatar:"Polaris-Avatar",imageHasLoaded:"Polaris-Avatar--imageHasLoaded",Text:"Polaris-Avatar__Text",long:"Polaris-Avatar--long",hidden:"Polaris-Avatar--hidden",sizeXs:"Polaris-Avatar--sizeXs",sizeSm:"Polaris-Avatar--sizeSm",sizeMd:"Polaris-Avatar--sizeMd",sizeLg:"Polaris-Avatar--sizeLg",sizeXl:"Polaris-Avatar--sizeXl",styleOne:"Polaris-Avatar--styleOne",styleTwo:"Polaris-Avatar--styleTwo",styleThree:"Polaris-Avatar--styleThree",styleFour:"Polaris-Avatar--styleFour",styleFive:"Polaris-Avatar--styleFive",Image:"Polaris-Avatar__Image",Initials:"Polaris-Avatar__Initials",Svg:"Polaris-Avatar__Svg"},u=n(57963),c=n(17017);(i=o||(o={})).Pending="PENDING",i.Loaded="LOADED",i.Errored="ERRORED";let d=["one","two","three","four","five"],p={xs:"3",sm:"2.5",md:"2.5",lg:"2.5",xl:"2"};function f({name:t,source:e,onError:n,initials:i,customer:f,size:h="md",accessibilityLabel:m}){var E;let x;let v=(0,u.Q)(),g=(0,s.u)(),[b,k]=(0,r.useState)(o.Pending);(0,r.useEffect)(()=>{k(o.Pending)},[e]);let C=(0,r.useCallback)(()=>{k(o.Errored),n&&n()},[n]),A=(0,r.useCallback)(()=>{k(o.Loaded)},[]),S=e&&b!==o.Errored;if(m)x=m;else if(t)x=t;else if(i){let P=i.split("").join(" ");x=v.translate("Polaris.Avatar.labelWithInitials",{initials:P})}let O=(0,a.AK)(l.Avatar,h&&l[(0,a.OZ)("size",h)],S&&b===o.Loaded&&l.imageHasLoaded,!f&&!e&&l[(0,a.OZ)("style",(E=t||i)?d[function(t){let e=0;for(let n of t)e^=n.charCodeAt(0);return e}(E)%d.length]:d[0])]),y=(0,a.AK)(l.Text,(i?.length||0)>2&&l.long),N=(0,a.AK)(l.Image,b!==o.Loaded&&l.hidden),T=e&&g&&b!==o.Errored?r.createElement(c.E,{className:N,source:e,alt:"",role:"presentation",onLoad:A,onError:C}):null,_=r.createElement(r.Fragment,null,r.createElement("path",{fill:"none",d:"M25.5 13.5C25.5 16.5376 23.0376 19 20 19C16.9624 19 14.5 16.5376 14.5 13.5C14.5 10.4624 16.9624 8 20 8C23.0376 8 25.5 10.4624 25.5 13.5Z",stroke:"currentColor",strokeWidth:p[h]}),r.createElement("path",{fill:"none",d:"M10.3433 29.682L9.47 31.254C9.03481 32.0373 9.60125 33 10.4974 33H29.5026C30.3988 33 30.9652 32.0373 30.53 31.254L29.6567 29.682C27.7084 26.175 24.0119 24 20 24C15.9882 24 12.2916 26.175 10.3433 29.682Z",stroke:"currentColor",strokeWidth:p[h],strokeLinecap:"round",strokeLinejoin:"round"})),L=f||!i?_:r.createElement("text",{className:y,x:"50%",y:"50%",dy:"0.35em",fill:"currentColor",textAnchor:"middle"},i),D=S?null:r.createElement("span",{className:l.Initials},r.createElement("svg",{className:l.Svg,viewBox:"0 0 40 40"},L));return r.createElement("span",{"aria-label":x,role:x?"img":"presentation",className:O},D,T)}},40351:function(t,e,n){"use strict";function i(t,e){return(i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,i(t,e)}n.d(e,{Z:function(){return o}})},30808:function(t,e,n){"use strict";function i(t,e){if(null==t)return{};var n,i,o={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}n.d(e,{Z:function(){return i}})}},function(t){t.O(0,[4515,3121,7298,2131,8073,7693,1472,1538,6515,9774,2888,179],function(){return t(t.s=26250)}),_N_E=t.O()}]);