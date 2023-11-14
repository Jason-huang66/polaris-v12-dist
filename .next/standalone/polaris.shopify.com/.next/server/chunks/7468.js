exports.id = 7468;
exports.ids = [7468];
exports.modules = {

/***/ 99123:
/***/ ((module) => {

// Exports
module.exports = {
	"Code": "Code_Code__EM5CC",
	"TopBar": "Code_TopBar__2nQ5k",
	"Tabs": "Code_Tabs__kfTvA",
	"Tab": "Code_Tab__OlJDp",
	"CopyButton": "Code_CopyButton__W2O1C",
	"ActualCode": "Code_ActualCode__QPVrq",
	"LineNumber": "Code_LineNumber__OEvNl",
	"InlineCode": "Code_InlineCode__9eNji"
};


/***/ }),

/***/ 99112:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZM": () => (/* binding */ InlineCode),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export CopyButton */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(42736);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61185);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90727);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88272);
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39293);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1996);
/* harmony import */ var _Code_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(99123);
/* harmony import */ var _Code_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Code_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92841);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__, _Tooltip__WEBPACK_IMPORTED_MODULE_7__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__, _Tooltip__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function Code({ code  }) {
    const [selectedIndex, setSelectedIndex] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_Code_module_scss__WEBPACK_IMPORTED_MODULE_8___default().Code),
        children: Array.isArray(code) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Tab.Group, {
            selectedIndex: selectedIndex,
            onChange: setSelectedIndex,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_Code_module_scss__WEBPACK_IMPORTED_MODULE_8___default().TopBar),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Tab.List, {
                            className: (_Code_module_scss__WEBPACK_IMPORTED_MODULE_8___default().Tabs),
                            children: code.map(({ title  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Tab, {
                                    className: (_Code_module_scss__WEBPACK_IMPORTED_MODULE_8___default().Tab),
                                    children: title
                                }, title))
                        }),
                        code[selectedIndex] && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CopyButton, {
                            code: code[selectedIndex].code
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Tab.Panels, {
                    children: code.map(({ title , code , className  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Tab.Panel, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HighlightedCode, {
                                code: code,
                                className: className
                            })
                        }, title))
                })
            ]
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_Code_module_scss__WEBPACK_IMPORTED_MODULE_8___default().TopBar),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_Code_module_scss__WEBPACK_IMPORTED_MODULE_8___default().Tabs),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_Code_module_scss__WEBPACK_IMPORTED_MODULE_8___default().Tab),
                                children: code.title
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CopyButton, {
                            code: code.code
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HighlightedCode, {
                    code: code.code,
                    className: code.className
                })
            ]
        })
    });
}
function HighlightedCode({ code , className  }) {
    const match = /language-(\w+)/.exec(className || "");
    const lang = match ? match[1] : "javascript";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__.Prism, {
        // eslint-disable-next-line react/no-children-prop
        children: String(code).replace(/\n$/, ""),
        language: lang,
        codeTagProps: {
            className: (_Code_module_scss__WEBPACK_IMPORTED_MODULE_8___default().ActualCode)
        },
        useInlineStyles: false,
        wrapLongLines: true
    });
}
function CopyButton({ code  }) {
    const [copy, didJustCopy] = (0,_utils_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useCopyToClipboard */ .m9)(code);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_Code_module_scss__WEBPACK_IMPORTED_MODULE_8___default().CopyButtonWrapper),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tooltip__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            ariaLabel: "Copy to clipboard",
            renderContent: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: didJustCopy ? "Copied" : "Copy"
                }),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                type: "button",
                className: (_Code_module_scss__WEBPACK_IMPORTED_MODULE_8___default().CopyButton),
                onClick: copy,
                "aria-label": "Copy to clipboard",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    source: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_9__.S,
                    width: 16,
                    height: 16
                })
            })
        })
    });
}
const InlineCode = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(({ as ="span" , className , ...props }, forwardedRef)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Box__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .x, {
        ...props,
        as: as,
        className: [
            (_Code_module_scss__WEBPACK_IMPORTED_MODULE_8___default().InlineCode),
            className
        ],
        ref: forwardedRef
    }));
InlineCode.displayName = "InlineCode";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Code);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 67468:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZM": () => (/* reexport safe */ _Code__WEBPACK_IMPORTED_MODULE_0__.ZM),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99112);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Code__WEBPACK_IMPORTED_MODULE_0__]);
_Code__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Code__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;