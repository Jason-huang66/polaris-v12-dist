(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1041],{57352:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/media-card-video-card",function(){return t(68945)}])},68945:function(e,n,t){"use strict";t.r(n);var o=t(24246),a=t(62193),i=t(2194);t(27378);var r=t(64515);n.default=(0,r.y)(function(){return(0,o.jsx)(a.P,{title:"Turn your side-project into a business",primaryAction:{content:"Learn more",onAction(){}},description:"In this course, you’ll learn how the Kular family turned their mom’s recipe book into a global business.",popoverActions:[{content:"Dismiss",onAction(){}}],children:(0,o.jsx)(i.u,{videoLength:80,thumbnailUrl:"https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850",onClick:()=>console.log("clicked")})})})},2194:function(e,n,t){"use strict";t.d(n,{u:function(){return h}});var o=t(27378),a=t(36086);function i(e){return e>9?String(e):`0${e}`}function r(e){return{hours:Math.floor(e/3600),minutes:Math.floor(e%3600/60),seconds:e%60}}var s={Thumbnail:"Polaris-VideoThumbnail__Thumbnail",ThumbnailContainer:"Polaris-VideoThumbnail__ThumbnailContainer",PlayButton:"Polaris-VideoThumbnail__PlayButton",Timestamp:"Polaris-VideoThumbnail__Timestamp",PlayIcon:"Polaris-VideoThumbnail__PlayIcon",Progress:"Polaris-VideoThumbnail__Progress",Indicator:"Polaris-VideoThumbnail__Indicator",ProgressBar:"Polaris-VideoThumbnail__ProgressBar",Label:"Polaris-VideoThumbnail__Label"},l=t(57963),u=t(17227),c=t(97661),d=t(89219),m=t(88470);function h({thumbnailUrl:e,videoLength:n=0,videoProgress:t=0,showVideoProgress:h=!1,accessibilityLabel:p,onClick:b,onBeforeStartPlaying:f}){let _;let P=(0,l.Q)(),{isNavigationCollapsed:y}=(0,u.a)();if(p)_=p;else if(n){let{hours:T,minutes:g,seconds:E}=r(n);_=P.translate("Polaris.VideoThumbnail.playButtonA11yLabel.defaultWithDuration",{duration:P.translate(function(e){let{hours:n,minutes:t,seconds:o}=r(e),a="Polaris.VideoThumbnail.playButtonA11yLabel.duration";return n?(a+=`.hours.${n>1?"other":"one"}`,o?t>1?a+=`${o>1?".minutesAndSeconds":".minutesAndSecond"}`:1===t?a+=`${o>1?".minuteAndSeconds":".minuteAndSecond"}`:a+=`${o>1?".andSeconds":".andSecond"}`:t?a+=`${t>1?".andMinutes":".andMinute"}`:a+=".only"):t?(a+=`.minutes.${t>1?"other":"one"}`,o?a+=`${o>1?".andSeconds":".andSecond"}`:a+=".only"):o&&(a+=o>1?".seconds.other":".seconds.one"),a}(n),{hourCount:T,minuteCount:g,secondCount:E})})}else _=P.translate("Polaris.VideoThumbnail.playButtonA11yLabel.default");let v=n?o.createElement("div",{className:s.Timestamp},o.createElement(c.D,{alignment:"center",spacing:"extraTight"},o.createElement("span",{className:s.PlayIcon},o.createElement(d.J,{source:a.S})),o.createElement(m.x,{variant:y?"bodyLg":"bodyMd",as:"p",fontWeight:"semibold"},function(e){let{hours:n,minutes:t,seconds:o}=r(e),a=e>3600,s=a?`${n}:`:"",l=`${a?i(t):t}:`,u=`${i(o)}`;return`${s}${l}${u}`}(n)))):null,$=null;if(h){let N=function(e,n){if(n>0&&e>0){let t=parseFloat((n/e).toFixed(2));return t>1?1:t}return 0}(n,t),w=Math.round(100*N);$=o.createElement("div",{className:s.Progress},o.createElement("progress",{className:s.ProgressBar,value:w,max:"100"}),o.createElement("div",{className:s.Indicator,style:{transform:`scaleX(${N})`}},o.createElement("span",{className:s.Label},w,"%")))}return o.createElement("div",{className:s.ThumbnailContainer},o.createElement("div",{className:s.Thumbnail,style:{backgroundImage:`url(${e})`}}),o.createElement("button",{type:"button",className:s.PlayButton,"aria-label":_,onClick:b,onMouseEnter:f,onFocus:f,onTouchStart:f},v),$)}},17227:function(e,n,t){"use strict";t.d(n,{a:function(){return i}});var o=t(27378),a=t(62791);function i(){let e=(0,o.useContext)(a.o);if(!e)throw Error("No mediaQuery was provided. Your application must be wrapped in an <AppProvider> component. See https://polaris.shopify.com/components/app-provider for implementation instructions.");return e}}},function(e){e.O(0,[4515,3121,7298,2131,8073,7693,8344,9774,2888,179],function(){return e(e.s=57352)}),_N_E=e.O()}]);