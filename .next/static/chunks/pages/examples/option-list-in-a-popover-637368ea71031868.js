(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9333],{67072:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/option-list-in-a-popover",function(){return a(36e3)}])},36e3:function(e,t,a){"use strict";a.r(t);var n=a(24246),r=a(33121),l=a(43389),o=a(69116),c=a(27378),u=a(64515);t.default=(0,u.y)(function(){let[e,t]=(0,c.useState)([]),[a,u]=(0,c.useState)(!0),s=(0,c.useCallback)(()=>u(e=>!e),[]),i=(0,n.jsx)(r.z,{onClick:s,disclosure:!0,children:"Options"});return(0,n.jsx)("div",{style:{height:"275px"},children:(0,n.jsx)(l.J,{active:a,activator:i,onClose:s,children:(0,n.jsx)(o.X,{title:"Inventory Location",onChange:t,options:[{value:"byward_market",label:"Byward Market",active:!0},{value:"centretown",label:"Centretown"},{value:"hintonburg",label:"Hintonburg",active:!0},{value:"westboro",label:"Westboro"},{value:"downtown",label:"Downtown"}],selected:e})})})})},73260:function(e,t,a){"use strict";a.d(t,{E:function(){return o}});var n=a(27378),r=a(39627),l={BlockStack:"Polaris-BlockStack",listReset:"Polaris-BlockStack--listReset",fieldsetReset:"Polaris-BlockStack--fieldsetReset"};let o=({as:e="div",children:t,align:a,inlineAlign:o,gap:c,id:u,reverseOrder:s=!1,...i})=>{let y=(0,r.AK)(l.BlockStack,("ul"===e||"ol"===e)&&l.listReset,"fieldset"===e&&l.fieldsetReset),K={"--pc-block-stack-align":a?`${a}`:null,"--pc-block-stack-inline-align":o?`${o}`:null,"--pc-block-stack-order":s?"column-reverse":"column",...(0,r.jD)("block-stack","gap","space",c)};return n.createElement(e,{className:y,style:(0,r.vW)(K),...i},t)}},20938:function(e,t,a){"use strict";a.d(t,{b:function(){return c},e:function(){return u}});var n=a(27378),r=a(35723),l={InlineError:"Polaris-InlineError",Icon:"Polaris-InlineError__Icon"},o=a(89219);function c({message:e,fieldID:t}){return e?n.createElement("div",{id:u(t),className:l.InlineError},n.createElement("div",{className:l.Icon},n.createElement(o.J,{source:r.S})),e):null}function u(e){return`${e}Error`}},9686:function(e,t,a){"use strict";var n;let r;a.d(t,{s:function(){return r}}),(n=r||(r={}))[n.Backspace=8]="Backspace",n[n.Tab=9]="Tab",n[n.Enter=13]="Enter",n[n.Shift=16]="Shift",n[n.Ctrl=17]="Ctrl",n[n.Alt=18]="Alt",n[n.Pause=19]="Pause",n[n.CapsLock=20]="CapsLock",n[n.Escape=27]="Escape",n[n.Space=32]="Space",n[n.PageUp=33]="PageUp",n[n.PageDown=34]="PageDown",n[n.End=35]="End",n[n.Home=36]="Home",n[n.LeftArrow=37]="LeftArrow",n[n.UpArrow=38]="UpArrow",n[n.RightArrow=39]="RightArrow",n[n.DownArrow=40]="DownArrow",n[n.Insert=45]="Insert",n[n.Delete=46]="Delete",n[n.Key0=48]="Key0",n[n.Key1=49]="Key1",n[n.Key2=50]="Key2",n[n.Key3=51]="Key3",n[n.Key4=52]="Key4",n[n.Key5=53]="Key5",n[n.Key6=54]="Key6",n[n.Key7=55]="Key7",n[n.Key8=56]="Key8",n[n.Key9=57]="Key9",n[n.KeyA=65]="KeyA",n[n.KeyB=66]="KeyB",n[n.KeyC=67]="KeyC",n[n.KeyD=68]="KeyD",n[n.KeyE=69]="KeyE",n[n.KeyF=70]="KeyF",n[n.KeyG=71]="KeyG",n[n.KeyH=72]="KeyH",n[n.KeyI=73]="KeyI",n[n.KeyJ=74]="KeyJ",n[n.KeyK=75]="KeyK",n[n.KeyL=76]="KeyL",n[n.KeyM=77]="KeyM",n[n.KeyN=78]="KeyN",n[n.KeyO=79]="KeyO",n[n.KeyP=80]="KeyP",n[n.KeyQ=81]="KeyQ",n[n.KeyR=82]="KeyR",n[n.KeyS=83]="KeyS",n[n.KeyT=84]="KeyT",n[n.KeyU=85]="KeyU",n[n.KeyV=86]="KeyV",n[n.KeyW=87]="KeyW",n[n.KeyX=88]="KeyX",n[n.KeyY=89]="KeyY",n[n.KeyZ=90]="KeyZ",n[n.LeftMeta=91]="LeftMeta",n[n.RightMeta=92]="RightMeta",n[n.Select=93]="Select",n[n.Numpad0=96]="Numpad0",n[n.Numpad1=97]="Numpad1",n[n.Numpad2=98]="Numpad2",n[n.Numpad3=99]="Numpad3",n[n.Numpad4=100]="Numpad4",n[n.Numpad5=101]="Numpad5",n[n.Numpad6=102]="Numpad6",n[n.Numpad7=103]="Numpad7",n[n.Numpad8=104]="Numpad8",n[n.Numpad9=105]="Numpad9",n[n.Multiply=106]="Multiply",n[n.Add=107]="Add",n[n.Subtract=109]="Subtract",n[n.Decimal=110]="Decimal",n[n.Divide=111]="Divide",n[n.F1=112]="F1",n[n.F2=113]="F2",n[n.F3=114]="F3",n[n.F4=115]="F4",n[n.F5=116]="F5",n[n.F6=117]="F6",n[n.F7=118]="F7",n[n.F8=119]="F8",n[n.F9=120]="F9",n[n.F10=121]="F10",n[n.F11=122]="F11",n[n.F12=123]="F12",n[n.NumLock=144]="NumLock",n[n.ScrollLock=145]="ScrollLock",n[n.Semicolon=186]="Semicolon",n[n.Equals=187]="Equals",n[n.Comma=188]="Comma",n[n.Dash=189]="Dash",n[n.Period=190]="Period",n[n.ForwardSlash=191]="ForwardSlash",n[n.GraveAccent=192]="GraveAccent",n[n.OpenBracket=219]="OpenBracket",n[n.BackSlash=220]="BackSlash",n[n.CloseBracket=221]="CloseBracket",n[n.SingleQuote=222]="SingleQuote"},95336:function(e,t,a){"use strict";a.d(t,{O:function(){return r}});var n=a(27378);function r(e){let[t,a]=(0,n.useState)(e);return{value:t,toggle:(0,n.useCallback)(()=>a(e=>!e),[]),setTrue:(0,n.useCallback)(()=>a(!0),[]),setFalse:(0,n.useCallback)(()=>a(!1),[])}}}},function(e){e.O(0,[4515,3121,2131,8073,9116,9774,2888,179],function(){return e(e.s=67072)}),_N_E=e.O()}]);