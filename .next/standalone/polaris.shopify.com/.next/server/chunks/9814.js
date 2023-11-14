exports.id = 9814;
exports.ids = [9814];
exports.modules = {

/***/ 47687:
/***/ ((module) => {

// Exports
module.exports = {
	"Button": "Button_Button__AqDze",
	"small": "Button_small__XCqD1",
	"pill": "Button_pill__VwTeO",
	"fill": "Button_fill__HjRr9",
	"primary": "Button_primary___XGO6"
};


/***/ }),

/***/ 26582:
/***/ ((module) => {

// Exports
module.exports = {
	"Container": "SandboxContainer_Container__AuOJ6"
};


/***/ }),

/***/ 79599:
/***/ ((module) => {

// Exports
module.exports = {
	"Header": "SandboxHeader_Header__SLLRT",
	"Buttons": "SandboxHeader_Buttons__TtcX2",
	"Logo": "SandboxHeader_Logo__kUxRF"
};


/***/ }),

/***/ 18115:
/***/ ((module) => {

// Exports
module.exports = {
	"DialogPanel": "SandboxHelpDialog_DialogPanel__iTx21",
	"SandboxVideo": "SandboxHelpDialog_SandboxVideo__wLsRB",
	"PreventBackgroundInteractions": "SandboxHelpDialog_PreventBackgroundInteractions__TrGP5"
};


/***/ }),

/***/ 81442:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Button)
});

// UNUSED EXPORTS: LinkButton

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ../node_modules/next/link.js
var next_link = __webpack_require__(79894);
// EXTERNAL MODULE: ./src/utils/various.ts + 1 modules
var various = __webpack_require__(79233);
// EXTERNAL MODULE: ./src/components/Button/Button.module.scss
var Button_module = __webpack_require__(47687);
var Button_module_default = /*#__PURE__*/__webpack_require__.n(Button_module);
;// CONCATENATED MODULE: ./src/components/Button/Button.tsx





const Button = /*#__PURE__*/ (0,external_react_.forwardRef)(({ small , pill , primary , fill , children , className: classNameProp , ...rest }, ref)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        className: (0,various/* className */.ok)((Button_module_default()).Button, small && (Button_module_default()).small, pill && (Button_module_default()).pill, primary && (Button_module_default()).primary, fill && (Button_module_default()).fill, classNameProp),
        ...rest,
        type: "button",
        ref: ref,
        children: children
    });
});
Button.displayName = "Button";
function LinkButton({ small , pill , href , primary , download , fill , children , ...rest }) {
    return /*#__PURE__*/ _jsx(Link, {
        href: href,
        className: className(styles.Button, small && styles.small, pill && styles.pill, primary && styles.primary, fill && styles.fill),
        download: download,
        ...rest,
        children: children
    });
}
/* harmony default export */ const Button_Button = (Button);

;// CONCATENATED MODULE: ./src/components/Button/index.ts


/* harmony default export */ const components_Button = (Button_Button);


/***/ }),

/***/ 5909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_SandboxContainer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./src/components/SandboxContainer/SandboxContainer.module.scss
var SandboxContainer_module = __webpack_require__(26582);
var SandboxContainer_module_default = /*#__PURE__*/__webpack_require__.n(SandboxContainer_module);
// EXTERNAL MODULE: ./src/utils/various.ts + 1 modules
var various = __webpack_require__(79233);
;// CONCATENATED MODULE: ./src/components/SandboxContainer/SandboxContainer.tsx




function SandboxContainer({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (0,various/* className */.ok)("styles-for-site-but-not-polaris-examples", (SandboxContainer_module_default()).Container),
        children: children
    });
}
/* harmony default export */ const SandboxContainer_SandboxContainer = (SandboxContainer);

;// CONCATENATED MODULE: ./src/components/SandboxContainer/index.ts

/* harmony default export */ const components_SandboxContainer = (SandboxContainer_SandboxContainer);


/***/ }),

/***/ 80182:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79894);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38579);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(42736);
/* harmony import */ var _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8403);
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39293);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1996);
/* harmony import */ var _SandboxHelpDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67371);
/* harmony import */ var _SandboxHeader_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(79599);
/* harmony import */ var _SandboxHeader_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_SandboxHeader_module_scss__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SandboxHelpDialog__WEBPACK_IMPORTED_MODULE_6__]);
_SandboxHelpDialog__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const MS_DELAY_BEFORE_SHOW_ONBOARDING = 500;
function SandboxHeader({ copyUrl , editUrl  }) {
    const [copy, didJustCopy] = (0,_utils_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useCopyToClipboard */ .m9)(copyUrl);
    const [isHelpOpen, setHelpIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // After the page has rendered at least once, we might show the help dialog
    // (so it animates onto the screen nicely)
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const helpTimeout = setTimeout(()=>{
            const hasAlreadyBeenOnboarded = localStorage.getItem("onboarded");
            if (hasAlreadyBeenOnboarded) {
                return;
            }
            localStorage.setItem("onboarded", "true");
            setHelpIsOpen(true);
        }, MS_DELAY_BEFORE_SHOW_ONBOARDING);
        return ()=>clearTimeout(helpTimeout);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_SandboxHeader_module_scss__WEBPACK_IMPORTED_MODULE_7___default().Header),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "/",
                        className: (_SandboxHeader_module_scss__WEBPACK_IMPORTED_MODULE_7___default().Logo),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                src: "/images/shopify-logo.svg",
                                width: 24,
                                height: 24,
                                alt: "Shopify logo"
                            }),
                            "Polaris Sandbox"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_SandboxHeader_module_scss__WEBPACK_IMPORTED_MODULE_7___default().Buttons),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>setHelpIsOpen(true),
                                children: "Learn more"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                className: (_SandboxHeader_module_scss__WEBPACK_IMPORTED_MODULE_7___default().CopyURLButton),
                                onClick: copy,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        source: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_8__.S,
                                        width: "1em",
                                        height: "1em"
                                    }),
                                    didJustCopy ? "Copied!" : "Copy URL"
                                ]
                            }),
                            editUrl ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: editUrl,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        source: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_9__.S,
                                        width: "1em",
                                        height: "1em"
                                    }),
                                    "Edit"
                                ]
                            }) : null
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SandboxHelpDialog__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                isOpen: isHelpOpen,
                setIsOpen: setHelpIsOpen
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SandboxHeader);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 52658:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SandboxHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80182);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SandboxHeader__WEBPACK_IMPORTED_MODULE_0__]);
_SandboxHeader__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_SandboxHeader__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 11735:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61185);
/* harmony import */ var _SandboxHelpDialog_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18115);
/* harmony import */ var _SandboxHelpDialog_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_SandboxHelpDialog_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81442);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function SandboxHelpDialog({ isOpen , setIsOpen  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Dialog, {
        open: isOpen,
        onClose: ()=>setIsOpen(false),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_SandboxHelpDialog_module_scss__WEBPACK_IMPORTED_MODULE_3___default().PreventBackgroundInteractions)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "styles-for-site-but-not-polaris-examples light-mode",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Dialog.Panel, {
                    className: (_SandboxHelpDialog_module_scss__WEBPACK_IMPORTED_MODULE_3___default().DialogPanel),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_SandboxHelpDialog_module_scss__WEBPACK_IMPORTED_MODULE_3___default().SandboxVideo),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                                muted: true,
                                loop: true,
                                autoPlay: true,
                                playsInline: true,
                                width: 1000,
                                height: 1500,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                                    src: "/images/sandbox-usage.mp4",
                                    type: "video/mp4"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Dialog.Title, {
                                    children: [
                                        "Effortless",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        " prototyping with",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        " Polaris components."
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: "No setup required"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: "Polaris components autocomplete and React hooks are fully supported"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: "Preview breakpoints automatically"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: "Share your compositions via a shareable URL"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    children: [
                                        "Tell us what functionality you’d like the sandbox to have.",
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "https://github.com/Shopify/polaris/issues/new?assignees=&labels=Feature+request%2C+untriaged&template=FEATURE_REQUEST.md&title=%5BSandbox%5D%20",
                                            children: "Submit a GitHub issue with your idea"
                                        }),
                                        "."
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    primary: true,
                                    className: (_SandboxHelpDialog_module_scss__WEBPACK_IMPORTED_MODULE_3___default().CloseButton),
                                    onClick: ()=>setIsOpen(false),
                                    children: "Get started"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SandboxHelpDialog);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 67371:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SandboxHelpDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11735);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SandboxHelpDialog__WEBPACK_IMPORTED_MODULE_0__]);
_SandboxHelpDialog__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_SandboxHelpDialog__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;