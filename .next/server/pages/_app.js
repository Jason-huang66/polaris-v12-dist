(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 48585:
/***/ ((module) => {

// Exports
module.exports = {
	"Header": "Frame_Header__ADK22",
	"NavAndContent": "Frame_NavAndContent__Zsneu",
	"PageContent": "Frame_PageContent__LP9lk",
	"Nav": "Frame_Nav__6ospS",
	"newSection": "Frame_newSection__KUb1F",
	"NavItem": "Frame_NavItem__0Bbo0",
	"isCurrent": "Frame_isCurrent__EePN_",
	"isVisible": "Frame_isVisible__tdfK6",
	"fade-in": "Frame_fade-in__LAQ5k",
	"Toggle": "Frame_Toggle__Ks3iQ",
	"NavToggle": "Frame_NavToggle__NCniE",
	"CloseButton": "Frame_CloseButton__z2r_d",
	"Logo": "Frame_Logo__PanQr",
	"SkipToContentLink": "Frame_SkipToContentLink__E3k31",
	"DarkModeToggle": "Frame_DarkModeToggle__pQNF8",
	"LightModeIcon": "Frame_LightModeIcon__K7m0C",
	"slide-up": "Frame_slide-up__h1PaS",
	"DarkModeIcon": "Frame_DarkModeIcon__cgpO8",
	"slide-down": "Frame_slide-down__z0MeN"
};


/***/ }),

/***/ 13936:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43218);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var use_dark_mode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9256);
/* harmony import */ var use_dark_mode__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(use_dark_mode__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shopify_polaris_build_esm_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72660);
/* harmony import */ var _shopify_polaris_build_esm_styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris_build_esm_styles_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_utils_various__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(79233);
/* harmony import */ var _src_components_Frame__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47531);
/* harmony import */ var _src_styles_globals_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(93053);
/* harmony import */ var _src_styles_globals_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_src_styles_globals_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _src_components_ViewTransition__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(67419);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_components_Frame__WEBPACK_IMPORTED_MODULE_8__]);
_src_components_Frame__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const PUBLIC_GA_ID = "UA-49178120-32";
const gaPageView = (url)=>{
    window.gtag("config", PUBLIC_GA_ID, {
        page_path: url,
        custom_map: {
            metric1: "search_term",
            metric2: "result_rank",
            metric3: "selected_result"
        }
    });
};
// Remove dark mode flicker. Minified version of https://github.com/donavon/use-dark-mode/blob/develop/noflash.js.txt
const noflash = `!function(){var b="darkMode",g="dark-mode",j="light-mode";function d(a){document.body.classList.add(a?g:j),document.body.classList.remove(a?j:g)}var e="(prefers-color-scheme: dark)",c=window.matchMedia(e),h=c.media===e,a=null;try{a=localStorage.getItem(b)}catch(k){}var f=null!==a;if(f&&(a=JSON.parse(a)),f)d(a);else if(h)d(c.matches),localStorage.setItem(b,c.matches);else{var i=document.body.classList.contains(g);localStorage.setItem(b,JSON.stringify(i))}}()`;
function MyApp({ Component , pageProps  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const isProd = "production" === "production";
    const darkMode = use_dark_mode__WEBPACK_IMPORTED_MODULE_5___default()(false);
    // We're using router.pathname here to check for a specific incoming route to render in a Fragment instead of
    // the Page component. This will work fine for statically generated assets / pages
    // Any SSR pages may break due to router sometimes being undefined on first render.
    // see https://stackoverflow.com/questions/61040790/userouter-withrouter-receive-undefined-on-query-in-first-render
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (!isProd) return;
        const handleRouteChange = (url)=>{
            gaPageView(url);
        };
        router.events.on("routeChangeComplete", handleRouteChange);
        router.events.on("hashChangeComplete", handleRouteChange);
        return ()=>{
            router.events.off("routeChangeComplete", handleRouteChange);
            router.events.off("hashChangeComplete", handleRouteChange);
        };
    }, [
        router.events,
        isProd
    ]);
    const ogImagePath = `/og-images${router.asPath === "/" ? "/home" : router.asPath}.png`;
    const isPolarisExample = router.asPath.startsWith("/examples");
    const isPolarisSandbox = router.asPath.startsWith("/sandbox");
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        document.documentElement.style.setProperty("color-scheme", darkMode.value ? "dark" : "light");
    }, [
        darkMode.value
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            isProd ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {
                        async: true,
                        src: `https://www.googletagmanager.com/gtag/js?id=${PUBLIC_GA_ID}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {
                        id: "gtag-init",
                        strategy: "afterInteractive",
                        dangerouslySetInnerHTML: {
                            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${PUBLIC_GA_ID}', {
                page_path: window.location.pathname,
              });
            `
                        }
                    })
                ]
            }) : null,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                dangerouslySetInnerHTML: {
                    __html: noflash
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1, width=device-width"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "shortcut icon",
                        href: "/images/favicon.png"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:image",
                        content: ogImagePath
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    background: isPolarisExample ? "#fafafa" : "unset"
                },
                className: (0,_src_utils_various__WEBPACK_IMPORTED_MODULE_7__/* .className */ .ok)(!isPolarisExample && "styles-for-site-but-not-polaris-examples"),
                children: isPolarisExample || isPolarisSandbox ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Frame__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    darkMode: darkMode,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_ViewTransition__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_3__.StrictMode, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                ...pageProps
                            })
                        })
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3733:
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
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66197);
/* harmony import */ var _GlobalSearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40666);
/* harmony import */ var _cache_nav_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97236);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49027);
/* harmony import */ var _Frame_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(48585);
/* harmony import */ var _Frame_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Frame_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils_various__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(79233);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _StatusBadge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(28595);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_4__, _GlobalSearch__WEBPACK_IMPORTED_MODULE_5__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_4__, _GlobalSearch__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const NAV_ID = "nav";
const nav = _cache_nav_json__WEBPACK_IMPORTED_MODULE_6__;
function Frame({ darkMode , children  }) {
    const [showSkipToContentLink, setShowSkipToContentLink] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [navIsVisible, setNavIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const menuButtonRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const closeButtonRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { asPath  } = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    const [isMounted, setIsMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>setIsMounted(true), []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const mainContent = document.querySelector("#main");
        setShowSkipToContentLink(mainContent !== null);
    }, [
        asPath
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        function hideSideNavOnResize() {
            if (window.innerWidth > _types__WEBPACK_IMPORTED_MODULE_7__/* .Breakpoints.Desktop */ .u3.Desktop && navIsVisible) {
                setNavIsVisible(false);
            }
        }
        window.addEventListener("resize", hideSideNavOnResize);
        return ()=>window.removeEventListener("resize", hideSideNavOnResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleOnKeyDown = (e)=>{
            if (e.key === "Escape") {
                setNavIsVisible(false);
            }
        };
        if (navIsVisible) {
            document.addEventListener("keydown", handleOnKeyDown);
            focusFirstItemInNav();
        }
        return ()=>document.removeEventListener("keydown", handleOnKeyDown);
    }, [
        navIsVisible
    ]);
    const focusFirstItemInNav = ()=>{
        const selector = `#${NAV_ID} a`;
        const firstLinkInNav = document.querySelector(selector);
        firstLinkInNav && firstLinkInNav.focus();
    };
    const handleCloseMenu = ()=>{
        setNavIsVisible(false);
        menuButtonRef.current?.focus();
    };
    const handleShiftTabPress = (evt)=>{
        if (evt.key === "Tab" && evt.shiftKey) {
            evt.preventDefault();
            const closeButton = closeButtonRef.current;
            closeButton instanceof HTMLElement && closeButton.focus();
        }
    };
    const handleCloseButtonKeyDown = (e)=>{
        if (e.key === "Tab" && !e.shiftKey) {
            e.preventDefault();
            focusFirstItemInNav();
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_Frame_module_scss__WEBPACK_IMPORTED_MODULE_11___default().Header),
                children: [
                    showSkipToContentLink && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: (_Frame_module_scss__WEBPACK_IMPORTED_MODULE_11___default().SkipToContentLink),
                        href: "#main",
                        children: "Skip to content"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        id: "menu-button",
                        "aria-label": "Open menu",
                        "aria-controls": NAV_ID,
                        "aria-expanded": navIsVisible,
                        onClick: ()=>setNavIsVisible(true),
                        ref: menuButtonRef,
                        className: (_Frame_module_scss__WEBPACK_IMPORTED_MODULE_11___default().NavToggle),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavToggleIcon, {})
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "/",
                        className: (_Frame_module_scss__WEBPACK_IMPORTED_MODULE_11___default().Logo),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                alt: "Shopify logo",
                                src: "/images/shopify-logo.svg",
                                width: 24,
                                height: 24
                            }),
                            "Polaris"
                        ]
                    }),
                    isMounted && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: (_Frame_module_scss__WEBPACK_IMPORTED_MODULE_11___default().DarkModeToggle),
                        onClick: darkMode.toggle,
                        children: darkMode.value ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_Frame_module_scss__WEBPACK_IMPORTED_MODULE_11___default().LightModeIcon),
                            children: "\uD83D\uDCA1"
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_Frame_module_scss__WEBPACK_IMPORTED_MODULE_11___default().DarkModeIcon),
                            children: "\uD83C\uDF19"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_GlobalSearch__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_Frame_module_scss__WEBPACK_IMPORTED_MODULE_11___default().NavAndContent),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                        className: (0,_utils_various__WEBPACK_IMPORTED_MODULE_8__/* .className */ .ok)((_Frame_module_scss__WEBPACK_IMPORTED_MODULE_11___default().Nav), navIsVisible && (_Frame_module_scss__WEBPACK_IMPORTED_MODULE_11___default().isVisible)),
                        id: NAV_ID,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavItem, {
                                    nav: nav,
                                    level: 0,
                                    handleLinkClick: ()=>setNavIsVisible(false),
                                    handleShiftTabOnFirstLink: handleShiftTabPress
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                ref: closeButtonRef,
                                "aria-label": "Close menu",
                                className: (_Frame_module_scss__WEBPACK_IMPORTED_MODULE_11___default().CloseButton),
                                onClick: handleCloseMenu,
                                onKeyDown: handleCloseButtonKeyDown,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CloseIcon, {})
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_Frame_module_scss__WEBPACK_IMPORTED_MODULE_11___default().PageContent),
                        children: children
                    })
                ]
            })
        ]
    });
}
function NavItem({ nav , level , handleLinkClick , handleShiftTabOnFirstLink  }) {
    const [manuallyExpandedSections, setManuallyExpandedSections] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { asPath  } = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    const manuallyToggleSection = (slug, expanded)=>{
        setManuallyExpandedSections({
            ...manuallyExpandedSections,
            [slug]: expanded
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>setManuallyExpandedSections({}), [
        asPath
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: nav.children && !nav.hideFromNav && Object.entries(nav.children).filter(([, child])=>!child.hideFromNav).sort((_a, _b)=>{
            const [, a] = _a;
            const [, b] = _b;
            return a.title && b.title ? a.title.localeCompare(b.title) : 0;
        }).sort((_a, _b)=>{
            const [, a] = _a;
            const [, b] = _b;
            return (typeof a.order !== "undefined" ? a.order : 1000) - (typeof b.order !== "undefined" ? b.order : 1000);
        }).map((entry, i)=>{
            const [key, child] = entry;
            if (!child.slug) return null;
            const isExpandable = child.children && !child.hideChildren;
            const id = (child.slug || key).replace(/\//g, "");
            const navAriaId = `nav-${id}`;
            const segments = asPath.slice(1).split("/");
            const keyAndLevelMatchUrl = !!(segments[level] === key);
            const manuallyExpandedStatus = manuallyExpandedSections[key];
            const isExpanded = child.expanded ? child.expanded : manuallyExpandedStatus === undefined ? keyAndLevelMatchUrl : manuallyExpandedStatus;
            const removeParams = (path)=>path.replace(/\?.+$/gi, "");
            const isCurrent = removeParams(asPath) === child.slug;
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                className: (0,_utils_various__WEBPACK_IMPORTED_MODULE_8__/* .className */ .ok)(child.newSection && (_Frame_module_scss__WEBPACK_IMPORTED_MODULE_11___default().newSection)),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: (0,_utils_various__WEBPACK_IMPORTED_MODULE_8__/* .className */ .ok)((_Frame_module_scss__WEBPACK_IMPORTED_MODULE_11___default().NavItem), isCurrent && (_Frame_module_scss__WEBPACK_IMPORTED_MODULE_11___default().isCurrent)),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: child.slug,
                                onClick: handleLinkClick,
                                "aria-current": isCurrent ? "page" : "false",
                                onKeyDown: (evt)=>{
                                    if (level === 0 && i === 0) {
                                        handleShiftTabOnFirstLink(evt);
                                    }
                                },
                                children: [
                                    child.title,
                                    child.status && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_StatusBadge__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                        status: child.status
                                    })
                                ]
                            }),
                            isExpandable && !child.expanded && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: (_Frame_module_scss__WEBPACK_IMPORTED_MODULE_11___default().Toggle),
                                onClick: ()=>manuallyToggleSection(key, !isExpanded),
                                "aria-label": "Toggle section",
                                "aria-expanded": isExpanded,
                                "aria-controls": isExpanded ? navAriaId : undefined
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {
                        initial: false,
                        children: isExpandable && isExpanded && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.ul, {
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
                            id: navAriaId,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavItem, {
                                nav: child,
                                level: level + 1,
                                handleLinkClick: handleLinkClick,
                                handleShiftTabOnFirstLink: handleShiftTabOnFirstLink
                            })
                        })
                    })
                ]
            }, child.slug);
        })
    });
}
function CloseIcon() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        viewBox: "0 0 20 20",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "m11.414 10 6.293-6.293a1 1 0 1 0-1.414-1.414l-6.293 6.293-6.293-6.293a1 1 0 0 0-1.414 1.414l6.293 6.293-6.293 6.293a1 1 0 1 0 1.414 1.414l6.293-6.293 6.293 6.293a.998.998 0 0 0 1.707-.707.999.999 0 0 0-.293-.707l-6.293-6.293z"
        })
    });
}
function NavToggleIcon() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        viewBox: "0 0 20 20",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M19 11h-18a1 1 0 0 1 0-2h18a1 1 0 1 1 0 2zm0-7h-18a1 1 0 0 1 0-2h18a1 1 0 1 1 0 2zm0 14h-18a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2z"
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Frame);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 47531:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Frame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3733);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Frame__WEBPACK_IMPORTED_MODULE_0__]);
_Frame__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Frame__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 40666:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GlobalSearch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25993);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_GlobalSearch__WEBPACK_IMPORTED_MODULE_0__]);
_GlobalSearch__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_GlobalSearch__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 67419:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_ViewTransition)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
;// CONCATENATED MODULE: ./src/components/ViewTransition/ViewTransition.jsx

// import {useRouter} from 'next/router';
function ViewTransition({ children  }) {
    // const router = useRouter();
    (0,external_react_.useEffect)(()=>{
        const handler = ()=>{
            if (document.startViewTransition !== undefined) {
                return document.startViewTransition(async ()=>{
                    return await new Promise((resolve)=>{
                        return resolve(true);
                    });
                });
            }
        };
        // router.events.on('routeChangeStart', handler);
        return ()=>{
        // router.events.off('routeChangeStart', handler);
        };
    }, []);
    return children;
}

;// CONCATENATED MODULE: ./src/components/ViewTransition/index.ts

/* harmony default export */ const components_ViewTransition = (ViewTransition);


/***/ }),

/***/ 49027:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "iy": () => (/* binding */ StatusName),
/* harmony export */   "u3": () => (/* binding */ Breakpoints)
/* harmony export */ });
/* unused harmony exports foundationsCategories, searchResultCategories */
// TODO: Why does this differ from searchResultCategoris below?
const foundationsCategories = (/* unused pure expression or super */ null && ([
    "foundations",
    "design",
    "content",
    "patterns",
    "tools"
]));
const searchResultCategories = (/* unused pure expression or super */ null && ([
    "foundations",
    "components",
    "patterns",
    "tokens",
    "icons"
]));
var Breakpoints;
(function(Breakpoints) {
    Breakpoints[Breakpoints["Mobile"] = 500] = "Mobile";
    Breakpoints[Breakpoints["Tablet"] = 768] = "Tablet";
    Breakpoints[Breakpoints["Desktop"] = 1400] = "Desktop";
    Breakpoints[Breakpoints["DesktopLarge"] = 1600] = "DesktopLarge";
})(Breakpoints || (Breakpoints = {}));
var StatusName;
(function(StatusName) {
    StatusName["New"] = "New";
    StatusName["Deprecated"] = "Deprecated";
    StatusName["Alpha"] = "Alpha";
    StatusName["Beta"] = "Beta";
    StatusName["Information"] = "Information";
    StatusName["Legacy"] = "Legacy";
    StatusName["Warning"] = "Warning";
})(StatusName || (StatusName = {}));


/***/ }),

/***/ 72660:
/***/ (() => {



/***/ }),

/***/ 93053:
/***/ (() => {



/***/ }),

/***/ 43218:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(41197)


/***/ }),

/***/ 38622:
/***/ ((module) => {

"use strict";
module.exports = require("lodash.throttle");

/***/ }),

/***/ 53918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 45732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 92796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 34014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 64486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 50744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 35843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 99552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 78524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 78020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 64406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 24964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 11751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 46220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 10299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 23938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 29565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 35789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 28854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 91292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 34567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 80979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 93297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 36052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 84226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 95052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 82470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 40618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 40968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 71853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 16689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 66405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 20997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 99816:
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/style");

/***/ }),

/***/ 9256:
/***/ ((module) => {

"use strict";
module.exports = require("use-dark-mode");

/***/ }),

/***/ 91017:
/***/ ((module) => {

"use strict";
module.exports = import("@floating-ui/react-dom-interactions");;

/***/ }),

/***/ 61185:
/***/ ((module) => {

"use strict";
module.exports = import("@headlessui/react");;

/***/ }),

/***/ 66197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ }),

/***/ 46555:
/***/ ((module) => {

"use strict";
module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [579,3057,16,4939,9839,9233,9564,9293,1240,5697,6119,5247,1611,4984,5199,8597,5740,7007,5993], () => (__webpack_exec__(13936)));
module.exports = __webpack_exports__;

})();