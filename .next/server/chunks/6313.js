exports.id = 6313;
exports.ids = [6313];
exports.modules = {

/***/ 65131:
/***/ ((module) => {

// Exports
module.exports = {
	"Breadcrumbs": "Breadcrumbs_Breadcrumbs__HlBDV"
};


/***/ }),

/***/ 88364:
/***/ ((module) => {

// Exports
module.exports = {
	"Page": "Page_Page__k_goF",
	"Post": "Page_Post__zBRzR",
	"PostContent": "Page_PostContent__UCVTC",
	"Footer": "Page_Footer__97FKe",
	"TOCWrapper": "Page_TOCWrapper__1EwAV"
};


/***/ }),

/***/ 67799:
/***/ ((module) => {

// Exports
module.exports = {
	"TOC": "TOC_TOC__caAZ_",
	"isNested": "TOC_isNested__bV6Bz",
	"Link": "TOC_Link__7eZBF",
	"Header": "TOC_Header__7UuAd",
	"Item": "TOC_Item__u4K8I",
	"active": "TOC_active__n1Lqs",
	"TOCItemMaxWidth": "TOC_TOCItemMaxWidth__ermSl",
	"Toggle": "TOC_Toggle__wiUL0"
};


/***/ }),

/***/ 76437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Breadcrumbs)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: ../node_modules/next/link.js
var next_link = __webpack_require__(79894);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(71853);
// EXTERNAL MODULE: ./.cache/nav.json
var nav = __webpack_require__(97236);
// EXTERNAL MODULE: external "lodash.get"
var external_lodash_get_ = __webpack_require__(1043);
var external_lodash_get_default = /*#__PURE__*/__webpack_require__.n(external_lodash_get_);
// EXTERNAL MODULE: ./src/components/Breadcrumbs/Breadcrumbs.module.scss
var Breadcrumbs_module = __webpack_require__(65131);
var Breadcrumbs_module_default = /*#__PURE__*/__webpack_require__.n(Breadcrumbs_module);
// EXTERNAL MODULE: ./src/utils/various.ts + 1 modules
var various = __webpack_require__(79233);
;// CONCATENATED MODULE: ./src/components/Breadcrumbs/Breadcrumbs.tsx







const Breadcrumbs_nav = nav;
function Breadcrumbs() {
    const { asPath  } = (0,router_.useRouter)();
    if (asPath === "/") return null;
    const segments = [
        {
            url: "/",
            text: "Home"
        }
    ];
    const pathChunks = asPath.replace(/[#\?].+$/, "").slice(1).split("/");
    pathChunks.forEach((chunk, i)=>{
        const objectPath = `children.${pathChunks.slice(0, i + 1).join(".children.")}`;
        const navItem = external_lodash_get_default()(Breadcrumbs_nav, objectPath);
        segments.push({
            url: `/${pathChunks.slice(0, i + 1).join("/")}`,
            text: navItem ? navItem.title : (0,various/* deslugify */.rT)(chunk)
        });
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: (Breadcrumbs_module_default()).Breadcrumbs,
        "aria-label": "Breadcrumb",
        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
            children: segments.map(({ url , text  }, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                    "aria-current": segments.length == i + 1 ? "page" : "false",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: url,
                        children: text
                    })
                }, url))
        })
    });
}
/* harmony default export */ const Breadcrumbs_Breadcrumbs = (Breadcrumbs);

;// CONCATENATED MODULE: ./src/components/Breadcrumbs/index.ts

/* harmony default export */ const components_Breadcrumbs = (Breadcrumbs_Breadcrumbs);


/***/ }),

/***/ 24324:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39293);
/* harmony import */ var _utils_various__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79233);
/* harmony import */ var _Longform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87654);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41227);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88272);
/* harmony import */ var _Page_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(88364);
/* harmony import */ var _Page_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Page_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _TOC__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(70795);
/* harmony import */ var _Breadcrumbs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(76437);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(79894);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_TOC__WEBPACK_IMPORTED_MODULE_6__]);
_TOC__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











function Layout({ title , isContentPage =false , showTOC =isContentPage , collapsibleTOC =false , editPageLinkPath , children  }) {
    const [tocItems] = (0,_utils_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useTOC */ .GD)(children);
    const { asPath  } = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const githubIssueSubject = `[polaris.shopify.com] Feedback (on ${asPath})`;
    const feedbackUrl = `https://github.com/shopify/polaris/issues/new?title=${encodeURIComponent(githubIssueSubject)}&amp;labels=polaris.shopify.com`;
    const editOnGithubUrl = editPageLinkPath ? `https://github.com/Shopify/polaris/tree/main${editPageLinkPath}` : "";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        className: (0,_utils_various__WEBPACK_IMPORTED_MODULE_2__/* .className */ .ok)((_Page_module_scss__WEBPACK_IMPORTED_MODULE_10___default().Page), showTOC && (_Page_module_scss__WEBPACK_IMPORTED_MODULE_10___default().showTOC)),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Box__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .x, {
                as: "article",
                className: [
                    (_Page_module_scss__WEBPACK_IMPORTED_MODULE_10___default().Post),
                    isContentPage && (_Page_module_scss__WEBPACK_IMPORTED_MODULE_10___default().PostContent)
                ],
                id: "main",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Breadcrumbs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                    title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Longform__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            children: title
                        })
                    }),
                    children,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
                        className: (_Page_module_scss__WEBPACK_IMPORTED_MODULE_10___default().Footer),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                editOnGithubUrl && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                    href: editOnGithubUrl,
                                    children: "Edit this page"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                    href: feedbackUrl,
                                    children: "Leave feedback"
                                })
                            ]
                        })
                    })
                ]
            }),
            showTOC && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_Page_module_scss__WEBPACK_IMPORTED_MODULE_10___default().TOCWrapper),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TOC__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    items: tocItems,
                    collapsibleTOC: collapsibleTOC
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 35709:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24324);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Page__WEBPACK_IMPORTED_MODULE_0__]);
_Page__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Page__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 68668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_PageMeta)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(40968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./src/components/PageMeta/PageMeta.tsx


function PageMeta({ title , description , noIndex =false  }) {
    let siteName = "Shopify Polaris";
    if (title) {
        siteName = `${title} — ${siteName}`;
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: siteName
            }),
            noIndex ? /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "robots",
                content: "noindex"
            }) : null,
            description && /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "description",
                content: description
            })
        ]
    });
}
/* harmony default export */ const PageMeta_PageMeta = (PageMeta);

;// CONCATENATED MODULE: ./src/components/PageMeta/index.ts

/* harmony default export */ const components_PageMeta = (PageMeta_PageMeta);


/***/ }),

/***/ 50153:
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
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88272);
/* harmony import */ var _utils_various__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79233);
/* harmony import */ var _TOC_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67799);
/* harmony import */ var _TOC_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_TOC_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_4__]);
framer_motion__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function getContentTopMargin() {
    const rootStyles = getComputedStyle(document.documentElement);
    const headerHeight = rootStyles.getPropertyValue("--header-height");
    const headerThreshold = parseInt(headerHeight);
    return headerThreshold;
}
function scanPageForCurrentHeading() {
    const contentTopMargin = getContentTopMargin();
    const headings = document.querySelectorAll("#main h2, #main h3");
    let currentHeading = null;
    // Scan the headings from the bottom. The heading that comes first
    // after the "content top margin" is the current heading.
    for(let i = headings.length - 1; i >= 0; i--){
        const heading = headings[i];
        const { top  } = heading.getBoundingClientRect();
        currentHeading = heading;
        if (top < contentTopMargin) {
            break;
        }
    }
    if (!currentHeading && headings.length > 0) {
        currentHeading = headings[0];
    }
    if (currentHeading) {
        const id = currentHeading.getAttribute("id");
        if (id) {
            return id;
        }
    }
}
function TOC({ items , collapsibleTOC =false  }) {
    const isNested = !!items.find((item)=>item.children.length > 0);
    const [idOfCurrentHeading, setIdOfCurrentHeading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const temporarilyIgnoreScrolling = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
    const lastScrollY = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
    const [manuallyExpandedSections, setManuallyExpandedSections] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const manuallyToggleSection = (id, expanded)=>{
        setManuallyExpandedSections({
            ...manuallyExpandedSections,
            [id]: expanded
        });
    };
    function waitForScrollToStop() {
        function checkIfStillScrolling() {
            if (lastScrollY.current !== window.scrollY) {
                // Don't check too often (e.g. using animationFrame)
                // because the scrollY diff between frames might be
                // less than 1 if rounded.
                setTimeout(checkIfStillScrolling, 100);
            } else {
                temporarilyIgnoreScrolling.current = false;
            }
            lastScrollY.current = window.scrollY;
        }
        // Give browser some time to start scrolling
        setTimeout(checkIfStillScrolling, 100);
    }
    function scrollIntoView(id) {
        setIdOfCurrentHeading(id);
        const contentTopMargin = getContentTopMargin();
        const targetEl = document.getElementById(id);
        if (targetEl) {
            const { top: distanceFromViewportTop  } = targetEl.getBoundingClientRect();
            let newScrollY = window.scrollY + distanceFromViewportTop - contentTopMargin + 1;
            const isAlmostAtTheTopOfThePage = newScrollY < contentTopMargin * 1.25;
            if (isAlmostAtTheTopOfThePage) {
                newScrollY = 0;
            }
            history.pushState({}, "", `#${id}`);
            temporarilyIgnoreScrolling.current = true;
            window.scrollTo({
                top: newScrollY,
                behavior: "smooth"
            });
            waitForScrollToStop();
        }
    }
    function detectCurrentHeading() {
        if (temporarilyIgnoreScrolling.current) return;
        const id = scanPageForCurrentHeading();
        if (id) {
            setIdOfCurrentHeading(id);
        }
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        detectCurrentHeading();
        window.addEventListener("scroll", detectCurrentHeading);
        return ()=>window.removeEventListener("scroll", detectCurrentHeading);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>detectCurrentHeading(), [
        items
    ]);
    const Link = ({ toId , linkText , collapsibleButton  })=>{
        const activeLink = toId === idOfCurrentHeading;
        const className = (0,_utils_various__WEBPACK_IMPORTED_MODULE_3__/* .className */ .ok)((_TOC_module_scss__WEBPACK_IMPORTED_MODULE_5___default().Link), activeLink && (_TOC_module_scss__WEBPACK_IMPORTED_MODULE_5___default().active));
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            className: className,
            href: `#${toId}`,
            onClick: (evt)=>{
                scrollIntoView(toId);
                evt.preventDefault();
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (0,_utils_various__WEBPACK_IMPORTED_MODULE_3__/* .className */ .ok)(Boolean(collapsibleButton) && (_TOC_module_scss__WEBPACK_IMPORTED_MODULE_5___default().TOCItemMaxWidth)),
                    children: linkText
                }),
                collapsibleButton
            ]
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (0,_utils_various__WEBPACK_IMPORTED_MODULE_3__/* .className */ .ok)((_TOC_module_scss__WEBPACK_IMPORTED_MODULE_5___default().TOC), isNested && (_TOC_module_scss__WEBPACK_IMPORTED_MODULE_5___default().isNested)),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Box__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .x, {
                    style: {
                        paddingInlineStart: "var(--p-space-200)",
                        paddingInlineEnd: "var(--p-space-200)",
                        paddingBlockEnd: "var(--p-space-200)"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: (_TOC_module_scss__WEBPACK_IMPORTED_MODULE_5___default().Header),
                        children: "On this page"
                    })
                }),
                items.map(({ title , id , children  })=>{
                    const isExpanded = manuallyExpandedSections[id] === true;
                    const tocAriaId = `toc-${id}`;
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                        className: (_TOC_module_scss__WEBPACK_IMPORTED_MODULE_5___default().Item),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Link, {
                                toId: id,
                                linkText: title,
                                collapsibleButton: children.length > 0 && collapsibleTOC ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: (_TOC_module_scss__WEBPACK_IMPORTED_MODULE_5___default().Toggle),
                                    onClick: (evt)=>{
                                        evt.preventDefault();
                                        evt.stopPropagation();
                                        manuallyToggleSection(id, !isExpanded);
                                    },
                                    "aria-label": "Toggle section",
                                    "aria-expanded": isExpanded,
                                    "aria-controls": isExpanded ? tocAriaId : undefined
                                }) : null
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {
                                initial: false,
                                children: children.length > 0 && (isExpanded || !collapsibleTOC) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.ul, {
                                    initial: {
                                        opacity: 0,
                                        height: 0
                                    },
                                    animate: {
                                        opacity: 1,
                                        scale: 1,
                                        height: "auto"
                                    },
                                    exit: {
                                        opacity: 0,
                                        height: 0
                                    },
                                    transition: {
                                        ease: "easeInOut",
                                        duration: 0.15
                                    },
                                    id: tocAriaId,
                                    children: children.map((child)=>{
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Link, {
                                                toId: child.id,
                                                linkText: child.title
                                            })
                                        }, child.title);
                                    })
                                })
                            })
                        ]
                    }, title);
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TOC);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 70795:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TOC__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50153);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_TOC__WEBPACK_IMPORTED_MODULE_0__]);
_TOC__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_TOC__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;