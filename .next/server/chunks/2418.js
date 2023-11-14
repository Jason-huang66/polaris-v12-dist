exports.id = 2418;
exports.ids = [2418];
exports.modules = {

/***/ 83215:
/***/ ((module) => {

// Exports
module.exports = {
	"TokensPage": "TokensPage_TokensPage__fh0Me",
	"Banner": "TokensPage_Banner__rCdx7",
	"TokensNav": "TokensPage_TokensNav__RHJfN"
};


/***/ }),

/***/ 74509:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TokensPage_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(83215);
/* harmony import */ var _TokensPage_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_TokensPage_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shopify_polaris_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53571);
/* harmony import */ var _TokenList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88516);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79894);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_various__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79233);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(35709);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_TokenList__WEBPACK_IMPORTED_MODULE_3__, _Page__WEBPACK_IMPORTED_MODULE_7__]);
([_TokenList__WEBPACK_IMPORTED_MODULE_3__, _Page__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const navItems = [
    {
        title: "Border",
        url: `/tokens/border`
    },
    {
        title: "Breakpoints",
        url: `/tokens/breakpoints`
    },
    {
        title: "Color",
        url: `/tokens/color`
    },
    {
        title: "Font",
        url: `/tokens/font`
    },
    {
        title: "Height",
        url: `/tokens/height`
    },
    {
        title: "Motion",
        url: `/tokens/motion`
    },
    {
        title: "Shadow",
        url: `/tokens/shadow`
    },
    {
        title: "Space",
        url: `/tokens/space`
    },
    {
        title: "Text",
        url: `/tokens/text`
    },
    {
        title: "Width",
        url: `/tokens/width`
    },
    {
        title: "Z-Index",
        url: `/tokens/z-index`
    }
];
function tokensToFilteredArray(filter, tokenGroup) {
    return Object.entries(tokenGroup).filter(([name])=>{
        return name.toLowerCase().includes(filter.toLowerCase());
    }).map(([name, value])=>{
        return {
            name,
            ...value
        };
    });
}
function TokensPage({ tokenGroup  }) {
    const filter = "";
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const tokens = {
        border: tokensToFilteredArray(filter, _shopify_polaris_tokens__WEBPACK_IMPORTED_MODULE_2__/* .metaThemeDefault.border */ .TY.border),
        breakpoints: tokensToFilteredArray(filter, _shopify_polaris_tokens__WEBPACK_IMPORTED_MODULE_2__/* .metaThemeDefault.breakpoints */ .TY.breakpoints),
        color: tokensToFilteredArray(filter, _shopify_polaris_tokens__WEBPACK_IMPORTED_MODULE_2__/* .metaThemeDefault.color */ .TY.color),
        font: tokensToFilteredArray(filter, _shopify_polaris_tokens__WEBPACK_IMPORTED_MODULE_2__/* .metaThemeDefault.font */ .TY.font),
        height: tokensToFilteredArray(filter, _shopify_polaris_tokens__WEBPACK_IMPORTED_MODULE_2__/* .metaThemeDefault.height */ .TY.height),
        motion: tokensToFilteredArray(filter, _shopify_polaris_tokens__WEBPACK_IMPORTED_MODULE_2__/* .metaThemeDefault.motion */ .TY.motion),
        shadow: tokensToFilteredArray(filter, _shopify_polaris_tokens__WEBPACK_IMPORTED_MODULE_2__/* .metaThemeDefault.shadow */ .TY.shadow),
        space: tokensToFilteredArray(filter, _shopify_polaris_tokens__WEBPACK_IMPORTED_MODULE_2__/* .metaThemeDefault.space */ .TY.space),
        text: tokensToFilteredArray(filter, _shopify_polaris_tokens__WEBPACK_IMPORTED_MODULE_2__/* .metaThemeDefault.text */ .TY.text),
        width: tokensToFilteredArray(filter, _shopify_polaris_tokens__WEBPACK_IMPORTED_MODULE_2__/* .metaThemeDefault.width */ .TY.width),
        zIndex: tokensToFilteredArray(filter, _shopify_polaris_tokens__WEBPACK_IMPORTED_MODULE_2__/* .metaThemeDefault.zIndex */ .TY.zIndex)
    };
    const keyframeStyles = tokens["motion"].filter(({ name  })=>name.includes("keyframes")).map(({ name , value  })=>`@keyframes ${name} ${value}`).join("\n");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Page__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `jsx-${keyframeStyles.__hash}` + " " + ((_TokensPage_module_scss__WEBPACK_IMPORTED_MODULE_8___default().TokensPage) || ""),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `jsx-${keyframeStyles.__hash}` + " " + ((_TokensPage_module_scss__WEBPACK_IMPORTED_MODULE_8___default().Banner) || ""),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: `jsx-${keyframeStyles.__hash}`,
                        children: "Tokens"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `jsx-${keyframeStyles.__hash}` + " " + ((_TokensPage_module_scss__WEBPACK_IMPORTED_MODULE_8___default().Tokens) || ""),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                            className: `jsx-${keyframeStyles.__hash}` + " " + ((_TokensPage_module_scss__WEBPACK_IMPORTED_MODULE_8___default().TokensNav) || ""),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                className: `jsx-${keyframeStyles.__hash}`,
                                children: navItems.map((item)=>{
                                    if (!item.url) return null;
                                    const isCurrent = router.asPath.endsWith((0,_utils_various__WEBPACK_IMPORTED_MODULE_5__/* .slugify */ .lV)(item.title));
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: `jsx-${keyframeStyles.__hash}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: item.url,
                                            "aria-current": isCurrent ? "page" : undefined,
                                            children: item.title
                                        })
                                    }, item.title);
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TokenList__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            children: tokens[tokenGroup].sort((token)=>token.name.includes("ease") || token.name.includes("linear") ? -1 : 1).map((token)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TokenList__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Item */ .Z.Item, {
                                    category: tokenGroup,
                                    token: token
                                }, token.name))
                        })
                    ]
                }),
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                    id: keyframeStyles.__hash,
                    children: keyframeStyles
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TokensPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 52418:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TokensPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74509);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_TokensPage__WEBPACK_IMPORTED_MODULE_0__]);
_TokensPage__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_TokensPage__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;