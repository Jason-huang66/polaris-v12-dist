exports.id = 5993;
exports.ids = [5993];
exports.modules = {

/***/ 30257:
/***/ ((module) => {

// Exports
module.exports = {
	"ComponentThumbnail": "ComponentThumbnail_ComponentThumbnail__vf0bc"
};


/***/ }),

/***/ 58460:
/***/ ((module) => {

// Exports
module.exports = {
	"FoundationsThumbnail": "FoundationsThumbnail_FoundationsThumbnail__fOoHd"
};


/***/ }),

/***/ 19256:
/***/ ((module) => {

// Exports
module.exports = {
	"ToggleButton": "GlobalSearch_ToggleButton__PMalg",
	"KeyboardShortcutHint": "GlobalSearch_KeyboardShortcutHint__b5uqe",
	"Header": "GlobalSearch_Header__lKvGv",
	"SearchIcon": "GlobalSearch_SearchIcon__jlXQn",
	"MobileCloseButton": "GlobalSearch_MobileCloseButton__nrmLp",
	"Results": "GlobalSearch_Results__nkmYY",
	"search-results-enter": "GlobalSearch_search-results-enter__F20b1",
	"ResultsInner": "GlobalSearch_ResultsInner__0dznF",
	"ResultsGroup": "GlobalSearch_ResultsGroup__ybdEj",
	"ResultsGroupName": "GlobalSearch_ResultsGroupName__WPQGB",
	"PreventBackgroundInteractions": "GlobalSearch_PreventBackgroundInteractions__dPxJA"
};


/***/ }),

/***/ 29485:
/***/ ((module) => {

// Exports
module.exports = {
	"Grid": "Grid_Grid__K7R26",
	"condensed": "Grid_condensed__a0Y6F",
	"GridItem": "Grid_GridItem___NGNb",
	"Preview": "Grid_Preview__dszGD"
};


/***/ }),

/***/ 67316:
/***/ ((module) => {

// Exports
module.exports = {
	"IconGrid": "IconGrid_IconGrid__hQh4l",
	"IconGridInner": "IconGrid_IconGridInner__oLslj",
	"Icon": "IconGrid_Icon__1Yduj",
	"isSelected": "IconGrid_isSelected__LxiNQ",
	"SectionHeading": "IconGrid_SectionHeading__6dehm"
};


/***/ }),

/***/ 65719:
/***/ ((module) => {

// Exports
module.exports = {
	"SearchResultHighlight": "SearchResultHighlight_SearchResultHighlight__Af__6",
	"onEdge": "SearchResultHighlight_onEdge__pWsjO",
	"fade-in": "SearchResultHighlight_fade-in__3p08l"
};


/***/ }),

/***/ 39757:
/***/ ((module) => {

// Exports
module.exports = {
	"StatusBadge": "StatusBadge_StatusBadge__0tTyU"
};


/***/ }),

/***/ 17140:
/***/ ((module) => {

// Exports
module.exports = {
	"ThumbnailPreview": "ThumbnailPreview_ThumbnailPreview__LyEWt"
};


/***/ }),

/***/ 91404:
/***/ ((module) => {

// Exports
module.exports = {
	"TokenList": "TokenList_TokenList___ZiZF",
	"TokenName": "TokenList_TokenName__MsBPR",
	"Value": "TokenList_Value__jvg5f",
	"FigmaUsage": "TokenList_FigmaUsage__4wnR_",
	"TokenContainer": "TokenList_TokenContainer__H7bIR",
	"TokenClipboard": "TokenList_TokenClipboard__Dx07e",
	"TokenDescription": "TokenList_TokenDescription__PlQMe",
	"ClickableItemLink": "TokenList_ClickableItemLink__62ch0",
	"Frame": "TokenList_Frame__dZpWQ",
	"slide": "TokenList_slide____xgb",
	"Playhead": "TokenList_Playhead__W92I_"
};


/***/ }),

/***/ 75318:
/***/ ((module) => {

// Exports
module.exports = {
	"Tooltip": "Tooltip_Tooltip__XebHC",
	"Content": "Tooltip_Content__vIHBS"
};


/***/ }),

/***/ 94839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_ComponentThumbnail)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: ./src/components/ComponentThumbnail/ComponentThumbnail.module.scss
var ComponentThumbnail_module = __webpack_require__(30257);
var ComponentThumbnail_module_default = /*#__PURE__*/__webpack_require__.n(ComponentThumbnail_module);
// EXTERNAL MODULE: ./src/components/ThumbnailPreview/index.tsx
var ThumbnailPreview = __webpack_require__(96990);
// EXTERNAL MODULE: ./src/utils/various.ts + 1 modules
var various = __webpack_require__(79233);
;// CONCATENATED MODULE: ./src/components/ComponentThumbnail/ComponentThumbnail.tsx




function ComponentThumbnail({ title , group  }) {
    const imageSrc = group ? `/images/components/${group}/${(0,various/* slugify */.lV)(title)}.png` : `/images/components/${(0,various/* slugify */.lV)(title)}.png`;
    return /*#__PURE__*/ jsx_runtime_.jsx(ThumbnailPreview/* default */.Z, {
        src: imageSrc,
        className: (ComponentThumbnail_module_default()).ComponentThumbnail,
        alt: `Screenshot of the ${title} component`
    });
}
/* harmony default export */ const ComponentThumbnail_ComponentThumbnail = (ComponentThumbnail);

;// CONCATENATED MODULE: ./src/components/ComponentThumbnail/index.ts

/* harmony default export */ const components_ComponentThumbnail = (ComponentThumbnail_ComponentThumbnail);


/***/ }),

/***/ 26188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_FoundationsThumbnail)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: ../polaris-icons/dist/index.mjs + 531 modules
var dist = __webpack_require__(85237);
// EXTERNAL MODULE: ./src/components/Icon/index.ts + 1 modules
var Icon = __webpack_require__(1996);
// EXTERNAL MODULE: ./src/components/FoundationsThumbnail/FoundationsThumbnail.module.scss
var FoundationsThumbnail_module = __webpack_require__(58460);
var FoundationsThumbnail_module_default = /*#__PURE__*/__webpack_require__.n(FoundationsThumbnail_module);
;// CONCATENATED MODULE: ./src/components/FoundationsThumbnail/FoundationsThumbnail.tsx




function FoundationsThumbnail({ icon , category  }) {
    let iconSource = dist[icon];
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (FoundationsThumbnail_module_default()).FoundationsThumbnail,
        ...category && {
            "data-category": category
        },
        children: iconSource && /*#__PURE__*/ jsx_runtime_.jsx(Icon/* default */.Z, {
            source: iconSource
        })
    });
}
/* harmony default export */ const FoundationsThumbnail_FoundationsThumbnail = (FoundationsThumbnail);

;// CONCATENATED MODULE: ./src/components/FoundationsThumbnail/index.ts

/* harmony default export */ const components_FoundationsThumbnail = (FoundationsThumbnail_FoundationsThumbnail);



/***/ }),

/***/ 25993:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "v": () => (/* binding */ useGlobalSearchResult)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39293);
/* harmony import */ var _GlobalSearch_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(19256);
/* harmony import */ var _GlobalSearch_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_GlobalSearch_module_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _IconGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6592);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94878);
/* harmony import */ var _TokenList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88516);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(61185);
/* harmony import */ var _FoundationsThumbnail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26188);
/* harmony import */ var _ThumbnailPreview__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(96990);
/* harmony import */ var _ComponentThumbnail__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(94839);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(46555);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_IconGrid__WEBPACK_IMPORTED_MODULE_4__, _Grid__WEBPACK_IMPORTED_MODULE_5__, _TokenList__WEBPACK_IMPORTED_MODULE_6__, _headlessui_react__WEBPACK_IMPORTED_MODULE_7__, uuid__WEBPACK_IMPORTED_MODULE_11__]);
([_IconGrid__WEBPACK_IMPORTED_MODULE_4__, _Grid__WEBPACK_IMPORTED_MODULE_5__, _TokenList__WEBPACK_IMPORTED_MODULE_6__, _headlessui_react__WEBPACK_IMPORTED_MODULE_7__, uuid__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const CATEGORY_NAMES = {
    components: "Components",
    foundations: "Foundations",
    patterns: "Patterns",
    tokens: "Tokens",
    icons: "Icons"
};

const SearchContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    id: "",
    currentItemId: ""
});
function useGlobalSearchResult() {
    const searchContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SearchContext);
    if (!searchContext.id) return null;
    const { id , currentItemId  } = searchContext;
    return {
        id,
        "data-is-global-search-result": true,
        "data-is-current-result": currentItemId === id,
        tabIndex: -1
    };
}
function scrollToTop() {
    const overflowEl = document.querySelector(`.${(_GlobalSearch_module_scss__WEBPACK_IMPORTED_MODULE_12___default().ResultsInner)}`);
    overflowEl?.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
function captureSearchClick(searchUuid, searchTerm, resultRank, gid, selectedResult) {
    // if we don't meet the minimum search query length, bail
    if (searchTerm.length < 3) return;
    const payload = {
        searchUuid,
        query: searchTerm,
        locale: document.documentElement.lang,
        gid,
        url: selectedResult,
        rank: resultRank
    };
    callServiceEndpoint("searchClick", payload);
}
function captureSearchQuery(searchUuid, searchTerm, results) {
    if (searchTerm.length < 3) return;
    const payload = {
        searchUuid,
        query: searchTerm,
        locale: document.documentElement.lang
    };
    results?.slice(0, 10).forEach((result, index)=>{
        payload[`gid${index}`] = result.id;
        payload[`url${index}`] = result.url;
    });
    callServiceEndpoint("searchQuery", payload);
}
function callServiceEndpoint(id, payload) {
    fetch(`/api/service`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id,
            payload
        })
    });
}
function scrollIntoView() {
    const overflowEl = document.querySelector(`.${(_GlobalSearch_module_scss__WEBPACK_IMPORTED_MODULE_12___default().ResultsInner)}`);
    const highlightedEl = document.querySelector('#search-results [data-is-current-result="true"]');
    if (overflowEl && highlightedEl) {
        const overflowElBounds = overflowEl.getBoundingClientRect();
        const highlightedElBounds = highlightedEl.getBoundingClientRect();
        const isCloseToTop = highlightedElBounds.top - overflowElBounds.top < 100;
        const isCloseToBottom = highlightedElBounds.top + highlightedElBounds.height > overflowElBounds.top + overflowElBounds.height - 100;
        if (isCloseToTop || isCloseToBottom) {
            highlightedEl.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    }
}
function GlobalSearch() {
    const [searchResults, setSearchResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [currentResultIndex, setCurrentResultIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [uuid, setUuid] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    let resultsInRenderedOrder = [];
    searchResults.forEach((group)=>{
        resultsInRenderedOrder = [
            ...resultsInRenderedOrder,
            ...group.results
        ];
    });
    const searchResultsCount = resultsInRenderedOrder.length;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const listener = (event)=>{
            let isSlashKey = event.key === "/";
            if (isSlashKey) {
                event.preventDefault();
                setIsOpen(true);
            }
        };
        document.addEventListener("keydown", listener);
        return ()=>document.removeEventListener("keydown", listener);
    }, []);
    const throttledSearch = (0,_utils_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useThrottle */ .fB)(()=>{
        fetch(`/api/search/v0?q=${encodeURIComponent(searchTerm)}`).then((data)=>data.json()).then((json)=>{
            const { results  } = json;
            setSearchResults(results);
        });
        captureSearchQuery(uuid, searchTerm, resultsInRenderedOrder);
        setCurrentResultIndex(0);
        scrollToTop();
    }, 400);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(throttledSearch, [
        searchTerm,
        throttledSearch
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>scrollIntoView(), [
        currentResultIndex
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handler = ()=>setIsOpen(false);
        router.events.on("beforeHistoryChange", handler);
        router.events.on("hashChangeComplete", handler);
        return ()=>{
            router.events.off("beforeHistoryChange", handler);
            router.events.off("hashChangeComplete", handler);
        };
    }, [
        setIsOpen,
        router.events
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!isOpen) {
            setSearchTerm("");
            setUuid("");
        } else {
            setUuid((0,uuid__WEBPACK_IMPORTED_MODULE_11__.v4)());
        }
    }, [
        isOpen
    ]);
    const handleKeyboardNavigation = (evt)=>{
        switch(evt.code){
            case "ArrowDown":
                if (currentResultIndex < searchResultsCount - 1) {
                    setCurrentResultIndex(currentResultIndex + 1);
                    evt.preventDefault();
                }
                break;
            case "ArrowUp":
                if (currentResultIndex > 0) {
                    setCurrentResultIndex(currentResultIndex - 1);
                    evt.preventDefault();
                }
                break;
            case "Enter":
                if (resultsInRenderedOrder.length > 0) {
                    setIsOpen(false);
                    const rank = currentResultIndex + 1;
                    const url = resultsInRenderedOrder[currentResultIndex].url;
                    const id = resultsInRenderedOrder[currentResultIndex].id;
                    captureSearchClick(uuid, searchTerm, rank, id, url);
                    router.push(url);
                }
                break;
        }
    };
    const currentItemId = resultsInRenderedOrder[currentResultIndex]?.id || "";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                className: (_GlobalSearch_module_scss__WEBPACK_IMPORTED_MODULE_12___default().ToggleButton),
                onClick: ()=>setIsOpen(true),
                "aria-label": "Search",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchIcon, {}),
                    "Search ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: (_GlobalSearch_module_scss__WEBPACK_IMPORTED_MODULE_12___default().KeyboardShortcutHint),
                        children: "/"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.Dialog, {
                open: isOpen,
                onClose: ()=>{
                    setIsOpen(false);
                    // on close we want to capture that no search result was selected
                    captureSearchClick(uuid, searchTerm, 0);
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_GlobalSearch_module_scss__WEBPACK_IMPORTED_MODULE_12___default().PreventBackgroundInteractions)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "dark-mode styles-for-site-but-not-polaris-examples",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.Dialog.Panel, {
                            className: (_GlobalSearch_module_scss__WEBPACK_IMPORTED_MODULE_12___default().Results),
                            children: [
                                isOpen && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_GlobalSearch_module_scss__WEBPACK_IMPORTED_MODULE_12___default().Header),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_GlobalSearch_module_scss__WEBPACK_IMPORTED_MODULE_12___default().SearchIcon),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchIcon, {})
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "search",
                                            value: searchTerm,
                                            onChange: (evt)=>setSearchTerm(evt.target.value),
                                            role: "combobox",
                                            "aria-controls": "search-results",
                                            "aria-expanded": searchResultsCount > 0,
                                            "aria-activedescendant": currentItemId,
                                            onKeyUp: handleKeyboardNavigation,
                                            autoComplete: "off",
                                            autoCorrect: "off",
                                            autoCapitalize: "off",
                                            spellCheck: false,
                                            placeholder: "Search"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: (_GlobalSearch_module_scss__WEBPACK_IMPORTED_MODULE_12___default().MobileCloseButton),
                                            onClick: ()=>setIsOpen(false),
                                            children: "Close"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_GlobalSearch_module_scss__WEBPACK_IMPORTED_MODULE_12___default().ResultsInner),
                                    id: "search-results",
                                    role: "listbox",
                                    "aria-label": "Search results",
                                    children: searchResults && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchResults, {
                                        searchResults: searchResults,
                                        currentItemId: currentItemId,
                                        searchTerm: searchTerm,
                                        resultsInRenderedOrder: resultsInRenderedOrder,
                                        uuid: uuid
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
function SearchResults({ searchResults , currentItemId , searchTerm , resultsInRenderedOrder , uuid  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: searchResults.map(({ category , results  })=>{
            if (results.length === 0) return null;
            switch(category){
                case "foundations":
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ResultsGroup, {
                        category: category,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Grid */ .r, {
                            children: results.map(({ id , url , meta  })=>{
                                if (!meta.foundations) return null;
                                const { title , description , icon , category  } = meta.foundations;
                                const resultIndex = resultsInRenderedOrder.findIndex((r)=>{
                                    return r.id === id;
                                });
                                const rank = resultIndex + 1; // zero-indexed
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchContext.Provider, {
                                    value: {
                                        currentItemId,
                                        id
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .GridItem */ .P, {
                                        title: title,
                                        description: description,
                                        url: url,
                                        customOnClick: ()=>searchTerm && captureSearchClick(uuid, searchTerm, rank, id, url),
                                        renderPreview: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FoundationsThumbnail__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                icon: icon,
                                                category: category
                                            })
                                    })
                                }, title);
                            })
                        })
                    }, category);
                case "patterns":
                    {
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ResultsGroup, {
                            category: category,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Grid */ .r, {
                                children: results.map(({ id , url , meta  })=>{
                                    if (!meta.patterns) return null;
                                    const { title , description , previewImg  } = meta.patterns;
                                    const resultIndex = resultsInRenderedOrder.findIndex((r)=>{
                                        return r.id === id;
                                    });
                                    const rank = resultIndex + 1;
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchContext.Provider, {
                                        value: {
                                            currentItemId,
                                            id
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .GridItem */ .P, {
                                            url: url,
                                            description: description,
                                            title: title,
                                            customOnClick: ()=>searchTerm && captureSearchClick(uuid, searchTerm, rank, id, url),
                                            renderPreview: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ThumbnailPreview__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                    alt: title,
                                                    src: previewImg
                                                })
                                        })
                                    }, id);
                                })
                            })
                        }, category);
                    }
                case "components":
                    {
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ResultsGroup, {
                            category: category,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Grid */ .r, {
                                children: results.map(({ id , url , meta  })=>{
                                    if (!meta.components) return null;
                                    const { title , description , status , group  } = meta.components;
                                    const resultIndex = resultsInRenderedOrder.findIndex((r)=>{
                                        return r.id === id;
                                    });
                                    const rank = resultIndex + 1;
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchContext.Provider, {
                                        value: {
                                            currentItemId,
                                            id
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .GridItem */ .P, {
                                            url: url,
                                            description: description,
                                            title: title,
                                            status: status,
                                            customOnClick: ()=>searchTerm && captureSearchClick(uuid, searchTerm, rank, id, url),
                                            renderPreview: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ComponentThumbnail__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                    title: title,
                                                    group: group
                                                })
                                        })
                                    }, id);
                                })
                            })
                        }, category);
                    }
                case "tokens":
                    {
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ResultsGroup, {
                            category: category,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TokenList__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                showTableHeading: false,
                                columns: {
                                    preview: true,
                                    name: true,
                                    figmaUsage: false,
                                    value: false,
                                    description: true
                                },
                                children: results.map(({ id , meta  })=>{
                                    if (!meta.tokens) return null;
                                    const { token , category  } = meta.tokens;
                                    const resultIndex = resultsInRenderedOrder.findIndex((r)=>{
                                        return r.id === id;
                                    });
                                    const rank = resultIndex + 1;
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchContext.Provider, {
                                        value: {
                                            currentItemId,
                                            id
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TokenList__WEBPACK_IMPORTED_MODULE_6__/* ["default"].Item */ .Z.Item, {
                                            category: category,
                                            token: token,
                                            uuid: uuid,
                                            customOnClick: captureSearchClick,
                                            searchTerm: searchTerm,
                                            rank: rank
                                        })
                                    }, id);
                                })
                            })
                        }, category);
                    }
                case "icons":
                    {
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ResultsGroup, {
                            category: category,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_IconGrid__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                children: results.map(({ id , meta  })=>{
                                    if (!meta.icons) return null;
                                    const { icon  } = meta.icons;
                                    const resultIndex = resultsInRenderedOrder.findIndex((r)=>{
                                        return r.id === id;
                                    });
                                    const rank = resultIndex + 1;
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchContext.Provider, {
                                        value: {
                                            currentItemId,
                                            id
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_IconGrid__WEBPACK_IMPORTED_MODULE_4__/* ["default"].Item */ .Z.Item, {
                                            icon: icon,
                                            uuid: uuid,
                                            customOnClick: captureSearchClick,
                                            searchTerm: searchTerm,
                                            rank: rank
                                        })
                                    }, id);
                                })
                            })
                        }, category);
                    }
                default:
                    return [];
            }
        })
    });
}
function SearchIcon() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        viewBox: "0 0 20 20",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M2 8c0-3.309 2.691-6 6-6s6 2.691 6 6-2.691 6-6 6-6-2.691-6-6zm17.707 10.293l-5.395-5.396A7.946 7.946 0 0016 8c0-4.411-3.589-8-8-8S0 3.589 0 8s3.589 8 8 8a7.954 7.954 0 004.897-1.688l5.396 5.395A.998.998 0 0020 19a1 1 0 00-.293-.707z",
            fill: "currentColor"
        })
    });
}
function ResultsGroup({ category , children  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_GlobalSearch_module_scss__WEBPACK_IMPORTED_MODULE_12___default().ResultsGroup),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: (_GlobalSearch_module_scss__WEBPACK_IMPORTED_MODULE_12___default().ResultsGroupName),
                children: CATEGORY_NAMES[category]
            }),
            children
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalSearch);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 63341:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ GridItem),
/* harmony export */   "r": () => (/* binding */ Grid)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79894);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_various__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79233);
/* harmony import */ var _GlobalSearch_GlobalSearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25993);
/* harmony import */ var _Grid_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29485);
/* harmony import */ var _Grid_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Grid_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _SearchResultHighlight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72431);
/* harmony import */ var _StatusBadge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28595);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88272);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_GlobalSearch_GlobalSearch__WEBPACK_IMPORTED_MODULE_4__]);
_GlobalSearch_GlobalSearch__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const Grid = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(({ as ="ul" , gap , gapX =gap , gapY =gap , itemMinWidth , condensed , className , ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Box__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .x, {
        as: as,
        ref: ref,
        style: {
            "--props-grid-gap": typeof gap !== "undefined" ? `var(--p-space-${gap})` : undefined,
            "--props-grid-gap-x": typeof gapX !== "undefined" ? `var(--p-space-${gapX})` : undefined,
            "--props-grid-gap-y": typeof gapY !== "undefined" ? `var(--p-space-${gapY})` : undefined,
            "--props-grid-item-min-width": itemMinWidth
        },
        className: [
            (_Grid_module_scss__WEBPACK_IMPORTED_MODULE_8___default().Grid),
            condensed && (_Grid_module_scss__WEBPACK_IMPORTED_MODULE_8___default().condensed),
            className
        ],
        ...props
    }));
Grid.displayName = "Grid";
const GridItem = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(({ as ="li" , title , description , url , renderPreview , status , customOnClick  }, ref)=>{
    const searchAttributes = (0,_GlobalSearch_GlobalSearch__WEBPACK_IMPORTED_MODULE_4__/* .useGlobalSearchResult */ .v)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Box__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .x, {
        as: as,
        ref: ref,
        className: (_Grid_module_scss__WEBPACK_IMPORTED_MODULE_8___default().GridItem),
        ...searchAttributes,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            legacyBehavior: true,
            href: url,
            className: (_Grid_module_scss__WEBPACK_IMPORTED_MODULE_8___default().Text),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                onClick: customOnClick,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SearchResultHighlight__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                    renderPreview && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_Grid_module_scss__WEBPACK_IMPORTED_MODULE_8___default().Preview),
                        children: renderPreview()
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                        children: [
                            title,
                            " ",
                            status && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_StatusBadge__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                status: status
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: (0,_utils_various__WEBPACK_IMPORTED_MODULE_3__/* .stripMarkdownLinks */ .wl)(description || "")
                    })
                ]
            })
        })
    });
});
GridItem.displayName = "GridItem";

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 94878:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* reexport safe */ _Grid__WEBPACK_IMPORTED_MODULE_0__.P),
/* harmony export */   "r": () => (/* reexport safe */ _Grid__WEBPACK_IMPORTED_MODULE_0__.r)
/* harmony export */ });
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63341);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Grid__WEBPACK_IMPORTED_MODULE_0__]);
_Grid__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 14134:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GlobalSearch_GlobalSearch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25993);
/* harmony import */ var _utils_various__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79233);
/* harmony import */ var _IconGrid_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67316);
/* harmony import */ var _IconGrid_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_IconGrid_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79894);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1996);
/* harmony import */ var _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85237);
/* harmony import */ var _SearchResultHighlight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72431);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_GlobalSearch_GlobalSearch__WEBPACK_IMPORTED_MODULE_1__]);
_GlobalSearch_GlobalSearch__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function IconGrid({ title , children  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            title ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: (_IconGrid_module_scss__WEBPACK_IMPORTED_MODULE_6___default().SectionHeading),
                children: title
            }) : null,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_IconGrid_module_scss__WEBPACK_IMPORTED_MODULE_6___default().IconGrid),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: (_IconGrid_module_scss__WEBPACK_IMPORTED_MODULE_6___default().IconGridInner),
                    children: children
                })
            })
        ]
    });
}
function IconGridItem({ icon , activeIcon , query , customOnClick , rank , searchTerm , uuid  }) {
    const { id , name  } = icon;
    const searchAttributes = (0,_GlobalSearch_GlobalSearch__WEBPACK_IMPORTED_MODULE_1__/* .useGlobalSearchResult */ .v)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
            legacyBehavior: true,
            passHref: true,
            href: {
                pathname: "/icons",
                query: {
                    icon: id,
                    ...query === "" ? {} : {
                        q: query
                    }
                }
            },
            scroll: false,
            id: icon.id,
            ...searchAttributes,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                className: (0,_utils_various__WEBPACK_IMPORTED_MODULE_2__/* .className */ .ok)((_IconGrid_module_scss__WEBPACK_IMPORTED_MODULE_6___default().Icon), activeIcon === id && (_IconGrid_module_scss__WEBPACK_IMPORTED_MODULE_6___default().isSelected)),
                onClick: ()=>uuid && customOnClick && customOnClick(uuid, searchTerm, rank, id, `/icons?icon=${id}`),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SearchResultHighlight__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        source: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_7__[id]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: name
                    })
                ]
            })
        })
    }, id);
}
IconGrid.Item = IconGridItem;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconGrid);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6592:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IconGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14134);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_IconGrid__WEBPACK_IMPORTED_MODULE_0__]);
_IconGrid__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_IconGrid__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 72431:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_SearchResultHighlight)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: ./src/utils/various.ts + 1 modules
var various = __webpack_require__(79233);
// EXTERNAL MODULE: ./src/components/SearchResultHighlight/SearchResultHighlight.module.scss
var SearchResultHighlight_module = __webpack_require__(65719);
var SearchResultHighlight_module_default = /*#__PURE__*/__webpack_require__.n(SearchResultHighlight_module);
;// CONCATENATED MODULE: ./src/components/SearchResultHighlight/SearchResultHighlight.tsx



function SearchResultHighlight({ marginY ="outside"  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (0,various/* className */.ok)((SearchResultHighlight_module_default()).SearchResultHighlight, marginY === "edge" && (SearchResultHighlight_module_default()).onEdge)
    });
}
/* harmony default export */ const SearchResultHighlight_SearchResultHighlight = (SearchResultHighlight);

;// CONCATENATED MODULE: ./src/components/SearchResultHighlight/index.ts

/* harmony default export */ const components_SearchResultHighlight = (SearchResultHighlight_SearchResultHighlight);


/***/ }),

/***/ 28595:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_StatusBadge)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: ./src/components/StatusBadge/StatusBadge.module.scss
var StatusBadge_module = __webpack_require__(39757);
var StatusBadge_module_default = /*#__PURE__*/__webpack_require__.n(StatusBadge_module);
;// CONCATENATED MODULE: ./src/components/StatusBadge/StatusBadge.tsx


function StatusBadge({ status  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (StatusBadge_module_default()).StatusBadge,
        "data-value": status.toLowerCase(),
        children: status
    });
}
/* harmony default export */ const StatusBadge_StatusBadge = (StatusBadge);

;// CONCATENATED MODULE: ./src/components/StatusBadge/index.ts

/* harmony default export */ const components_StatusBadge = (StatusBadge_StatusBadge);


/***/ }),

/***/ 96990:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38579);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88272);
/* harmony import */ var _ThumbnailPreview_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17140);
/* harmony import */ var _ThumbnailPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ThumbnailPreview_module_scss__WEBPACK_IMPORTED_MODULE_3__);




const Preview = ({ src , alt ="" , aspectRatio , className  })=>{
    const aspectRatios = {
        ["1:1"]: {
            width: 900,
            height: 900
        },
        ["3:1"]: {
            width: 900,
            height: 300
        },
        ["4:3"]: {
            width: 900,
            height: 675
        },
        ["16:9"]: {
            width: 900,
            height: 506
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Box__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .x, {
        className: [
            (_ThumbnailPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default().ThumbnailPreview),
            className
        ],
        children: src ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
            alt: alt,
            src: src,
            fill: !aspectRatio,
            ...aspectRatio && aspectRatios[aspectRatio],
            style: {
                objectFit: aspectRatio ? "contain" : "cover",
                width: "100%",
                height: "100%"
            }
        }) : null
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Preview);


/***/ }),

/***/ 70593:
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_various__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79233);
/* harmony import */ var _TokenList_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(91404);
/* harmony import */ var _TokenList_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_TokenList_module_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39293);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1996);
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92841);
/* harmony import */ var _data_figmaColorNames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59211);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(79894);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _GlobalSearch_GlobalSearch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(25993);
/* harmony import */ var _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(42736);
/* harmony import */ var _SearchResultHighlight__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(72431);
/* harmony import */ var _shopify_polaris_tokens__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(53571);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Tooltip__WEBPACK_IMPORTED_MODULE_6__, _GlobalSearch_GlobalSearch__WEBPACK_IMPORTED_MODULE_9__]);
([_Tooltip__WEBPACK_IMPORTED_MODULE_6__, _GlobalSearch_GlobalSearch__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const defaultColumnsConfig = {
    preview: true,
    name: true,
    value: true,
    figmaUsage: false,
    description: true
};
const TokenListContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({
    columns: defaultColumnsConfig
});
function TokenList({ showTableHeading =true , columns =defaultColumnsConfig , children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TokenListContext.Provider, {
        value: {
            columns
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "jsx-80dc4fa2190c5e4" + " " + ((_TokenList_module_scss__WEBPACK_IMPORTED_MODULE_12___default().TokenList) || ""),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                    className: "jsx-80dc4fa2190c5e4",
                    children: [
                        showTableHeading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                            className: "jsx-80dc4fa2190c5e4",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                className: "jsx-80dc4fa2190c5e4",
                                children: [
                                    columns.preview && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "jsx-80dc4fa2190c5e4"
                                    }),
                                    columns.name && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "jsx-80dc4fa2190c5e4",
                                        children: "Name"
                                    }),
                                    columns.value && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "jsx-80dc4fa2190c5e4",
                                        children: "Value"
                                    }),
                                    columns.figmaUsage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "jsx-80dc4fa2190c5e4",
                                        children: "Figma"
                                    }),
                                    columns.description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "jsx-80dc4fa2190c5e4",
                                        children: "Description"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                            className: "jsx-80dc4fa2190c5e4",
                            children: children
                        })
                    ]
                }),
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                    id: "80dc4fa2190c5e4",
                    children: "@-webkit-keyframes slide{to{-webkit-transform:translatex(2400%);transform:translatex(2400%)}}@-moz-keyframes slide{to{-moz-transform:translatex(2400%);transform:translatex(2400%)}}@-o-keyframes slide{to{-o-transform:translatex(2400%);transform:translatex(2400%)}}@keyframes slide{to{-webkit-transform:translatex(2400%);-moz-transform:translatex(2400%);-o-transform:translatex(2400%);transform:translatex(2400%)}}@-webkit-keyframes spin{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-moz-keyframes spin{from{-moz-transform:rotate(0deg);transform:rotate(0deg)}to{-moz-transform:rotate(360deg);transform:rotate(360deg)}}@-o-keyframes spin{from{-o-transform:rotate(0deg);transform:rotate(0deg)}to{-o-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{from{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}"
                })
            ]
        })
    });
}
function getFigmaUsageForToken(name, value) {
    let usage = "—";
    const REM = 16;
    if (value.startsWith("rgba")) {
        usage = _data_figmaColorNames__WEBPACK_IMPORTED_MODULE_7__/* .figmaColorNames */ .q[name] ? `Use ${_data_figmaColorNames__WEBPACK_IMPORTED_MODULE_7__/* .figmaColorNames */ .q[name]}` : "—";
    } else if (name.startsWith("shadow")) {
        usage = "Use shadow styles from UI kit";
    } else if (name.includes("breakpoint")) {
        const artboardWidth = parseFloat(value) * REM;
        if (artboardWidth > 0) {
            usage = `Set frame width to ${artboardWidth}+ pixels`;
        }
    } else if (name.includes("border-radius-half")) {
        usage = "Use a circle";
    } else if (name.includes("radius")) {
        const radius = parseFloat(value) * REM;
        usage = `Use a radius of ${radius} pixels`;
    } else if (name.includes("font") || name.includes("line-height")) {
        usage = "Use typography styles from UI kit";
    } else if (name.includes("space")) {
        const spacing = parseFloat(value) * REM;
        usage = `Use a spacing of ${spacing} pixels`;
    } else if (name.includes("duration")) {
        usage = `Set duration to ${value.slice(0, -2)} ms`;
    } else if (name.includes("ease")) {
        let easing = value;
        easing = easing.slice(13, -1);
        usage = `Set custom bezier to ${easing}`;
    } else if (name.includes("linear")) {
        usage = `Set easing to Linear`;
    }
    return usage;
}
function TokenListItem({ category , token: { name , value , description  } , customOnClick , searchTerm , rank , uuid  }) {
    const figmaUsage = getFigmaUsageForToken(name, value);
    const tokenNameWithPrefix = `--p-${name}`;
    const [copy, didJustCopy] = (0,_utils_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useCopyToClipboard */ .m9)(tokenNameWithPrefix);
    const searchAttributes = (0,_GlobalSearch_GlobalSearch__WEBPACK_IMPORTED_MODULE_9__/* .useGlobalSearchResult */ .v)();
    const isClickableSearchResult = !!searchAttributes?.tabIndex;
    const url = `/tokens/${category}#${searchAttributes?.id}`;
    const customOnClickHandler = ()=>{
        uuid && customOnClick && customOnClick(uuid, searchTerm, rank, searchAttributes?.id, url);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TokenListContext.Consumer, {
        children: ({ columns  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                className: (0,_utils_various__WEBPACK_IMPORTED_MODULE_3__/* .className */ .ok)((_TokenList_module_scss__WEBPACK_IMPORTED_MODULE_12___default().TokenListItem)),
                id: (0,_utils_various__WEBPACK_IMPORTED_MODULE_3__/* .slugify */ .lV)(name),
                ...searchAttributes,
                children: [
                    columns.preview && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SearchResultHighlight__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                marginY: "edge"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TokenPreview, {
                                name: name,
                                value: value
                            }),
                            isClickableSearchResult && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                                href: url,
                                className: (_TokenList_module_scss__WEBPACK_IMPORTED_MODULE_12___default().ClickableItemLink),
                                tabIndex: -1,
                                legacyBehavior: true,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    onClick: customOnClickHandler,
                                    children: "View token"
                                })
                            })
                        ]
                    }),
                    columns.name && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: (_TokenList_module_scss__WEBPACK_IMPORTED_MODULE_12___default().TokenContainer),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_TokenList_module_scss__WEBPACK_IMPORTED_MODULE_12___default().TokenName),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: tokenNameWithPrefix
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_TokenList_module_scss__WEBPACK_IMPORTED_MODULE_12___default().TokenClipboard),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tooltip__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        ariaLabel: "Copy to clipboard",
                                        renderContent: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_TokenList_module_scss__WEBPACK_IMPORTED_MODULE_12___default().TokenToolTip),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: didJustCopy ? "Copied!" : "Copy to clipboard"
                                                })
                                            }),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            onClick: ()=>{
                                                copy();
                                                customOnClickHandler();
                                            },
                                            tabIndex: searchAttributes?.tabIndex,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                source: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_13__.S,
                                                width: 14,
                                                height: 14
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    columns.value && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                        className: (_TokenList_module_scss__WEBPACK_IMPORTED_MODULE_12___default().Value),
                        children: (0,_shopify_polaris_tokens__WEBPACK_IMPORTED_MODULE_11__/* .toPxs */ .Zs)(value)
                    }),
                    columns.figmaUsage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                        className: (_TokenList_module_scss__WEBPACK_IMPORTED_MODULE_12___default().FigmaUsage),
                        children: figmaUsage || "—"
                    }),
                    columns.description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                        className: (_TokenList_module_scss__WEBPACK_IMPORTED_MODULE_12___default().TokenDescription),
                        children: description || "—"
                    })
                ]
            }, name)
    });
}
TokenList.Item = TokenListItem;
function TokenPreview({ name , value  }) {
    const previewDivAttributes = {
        className: (_TokenList_module_scss__WEBPACK_IMPORTED_MODULE_12___default().Preview)
    };
    // Colors
    if (value.startsWith("rgba") || value.includes("color-")) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            ...previewDivAttributes,
            style: {
                background: value,
                minHeight: 52,
                borderRadius: "var(--border-radius-400)"
            }
        });
    } else if (name.includes("border-radius")) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            ...previewDivAttributes,
            style: {
                display: "flex"
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    width: 50,
                    aspectRatio: "1 / 1",
                    borderRadius: value,
                    background: "var(--text)"
                }
            })
        });
    } else if (name.includes("border-width")) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            ...previewDivAttributes,
            style: {
                background: "transparent",
                display: "flex"
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    minHeight: value,
                    background: "var(--text)",
                    flex: 1
                }
            })
        });
    } else if (name.includes("border")) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            ...previewDivAttributes,
            style: {
                display: "flex",
                background: "var(--surface-subdued)"
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    minHeight: 0,
                    borderTop: value,
                    flex: 1
                }
            })
        });
    } else if (name.includes("space") || name.includes("width")) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            ...previewDivAttributes,
            style: {
                display: "flex",
                alignItems: "center"
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: {
                        aspectRatio: "1/1",
                        borderRadius: 100,
                        minHeight: "10px",
                        background: "var(--text)"
                    }
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: {
                        width: value,
                        minHeight: "30px",
                        background: "var(--text)",
                        opacity: 0.15
                    }
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: {
                        aspectRatio: "1/1",
                        borderRadius: 100,
                        minHeight: "10px",
                        background: "var(--text)"
                    }
                })
            ]
        });
    } else if (name.includes("height") && !name.includes("line-height")) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            ...previewDivAttributes,
            style: {
                display: "flex",
                alignItems: "flex-start"
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                ...previewDivAttributes,
                style: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            aspectRatio: "1/1",
                            borderRadius: 100,
                            minHeight: "10px",
                            background: "var(--text)"
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            minWidth: "30px",
                            height: value,
                            background: "var(--text)",
                            opacity: 0.15
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            aspectRatio: "1/1",
                            borderRadius: 100,
                            minHeight: "10px",
                            background: "var(--text)"
                        }
                    })
                ]
            })
        });
    } else if (name.includes("font-family")) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            ...previewDivAttributes,
            style: {
                display: "flex",
                fontFamily: value,
                background: "transparent"
            },
            children: "Commerce"
        });
    } else if (name.includes("font-size")) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            ...previewDivAttributes,
            style: {
                display: "flex",
                fontSize: value,
                background: "transparent"
            },
            children: "Aa"
        });
    } else if (name.includes("font-weight")) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            ...previewDivAttributes,
            style: {
                display: "flex",
                fontWeight: value,
                background: "transparent"
            },
            children: "Aa"
        });
    } else if (name.includes("line-height")) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            ...previewDivAttributes,
            style: {
                display: "flex",
                lineHeight: value,
                background: "transparent"
            },
            children: [
                "Hello",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                "World"
            ]
        });
    } else if (name.includes("letter-spacing")) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            ...previewDivAttributes,
            style: {
                display: "flex",
                letterSpacing: value,
                background: "transparent"
            },
            children: "Entrepreneurs"
        });
    } else if (name.includes("breakpoints")) {
        const width = parseInt(value.replace("rem", "")) / 120 * 100;
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            ...previewDivAttributes,
            style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 50
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    minWidth: 4,
                    maxWidth: width,
                    width: "100%",
                    minHeight: 50,
                    boxShadow: "inset 0 0 0 3px var(--text), inset 0 -10px var(--text)",
                    borderRadius: 4
                }
            })
        });
    } else if (name.includes("shadow")) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            ...previewDivAttributes,
            style: {
                display: "flex",
                background: "var(--p-color-bg)",
                borderRadius: "var(--p-border-radius-200)",
                padding: "var(--p-space-400)"
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    width: "100%",
                    minWidth: 50,
                    minHeight: 50,
                    background: "white",
                    boxShadow: value,
                    borderRadius: 8
                }
            })
        });
    } else if (name.includes("duration")) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            ...previewDivAttributes,
            style: {
                display: "flex",
                background: "transparent"
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    minHeight: "0%",
                    width: "10%",
                    paddingBottom: "10%",
                    background: "var(--text)",
                    animation: `spin ${value} infinite both linear`
                }
            })
        });
    } else if (name.includes("ease") || name.includes("linear")) {
        const fps = 60;
        const duration = 600;
        const easing = value;
        const delayIncrement = -1000 / fps;
        const count = duration / 1000 * fps + 1;
        const lastPosition = -(duration - 0.000001);
        const frames = Array.from({
            length: count
        });
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            ...previewDivAttributes,
            style: {
                position: "relative",
                background: "transparent",
                marginBottom: "3%"
            },
            children: [
                frames.map((_, i)=>//TODO replace with component
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_TokenList_module_scss__WEBPACK_IMPORTED_MODULE_12___default().Frame),
                        style: {
                            animationName: "slide",
                            animationDuration: duration + "ms",
                            animationTimingFunction: easing,
                            animationDelay: (i === frames.length - 1 ? lastPosition : delayIncrement * i) + "ms"
                        }
                    }, i)),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `${(_TokenList_module_scss__WEBPACK_IMPORTED_MODULE_12___default().Frame)} ${(_TokenList_module_scss__WEBPACK_IMPORTED_MODULE_12___default().Playhead)}`,
                    style: {
                        animationName: "slide",
                        animationDuration: duration + "ms",
                        animationTimingFunction: easing
                    }
                })
            ]
        });
    } else if (name.includes("keyframes")) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            ...previewDivAttributes,
            style: {
                display: "flex",
                background: "transparent"
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    minHeight: "0%",
                    width: "10%",
                    paddingBottom: "10%",
                    background: "var(--text)",
                    boxShadow: value,
                    animation: `${name} 1s infinite both`
                }
            })
        });
    } else if (name.includes("z-index-")) {
        const layerCount = 12;
        const number = parseInt(name.replace("z-index-", ""));
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            ...previewDivAttributes,
            style: {
                display: "flex",
                flexDirection: "column-reverse",
                justifyContent: "center",
                gap: 2
            },
            children: [
                ...Array(layerCount)
            ].map((_, n)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: {
                        minHeight: 2.5,
                        background: "var(--text)",
                        opacity: n + 1 === number ? 1 : 0.08,
                        borderRadius: 2
                    }
                }, n))
        });
    }
    return null;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TokenList);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 88516:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TokenList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70593);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_TokenList__WEBPACK_IMPORTED_MODULE_0__]);
_TokenList__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_TokenList__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 72380:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export Tooltip */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _floating_ui_react_dom_interactions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91017);
/* harmony import */ var _Tooltip_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75318);
/* harmony import */ var _Tooltip_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Tooltip_module_scss__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_floating_ui_react_dom_interactions__WEBPACK_IMPORTED_MODULE_2__]);
_floating_ui_react_dom_interactions__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Tooltip = ({ children , ariaLabel , renderContent  })=>{
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { x , y , reference , floating , strategy , context , placement  } = (0,_floating_ui_react_dom_interactions__WEBPACK_IMPORTED_MODULE_2__.useFloating)({
        placement: "top",
        open,
        onOpenChange: setOpen,
        middleware: [
            (0,_floating_ui_react_dom_interactions__WEBPACK_IMPORTED_MODULE_2__.offset)(5),
            (0,_floating_ui_react_dom_interactions__WEBPACK_IMPORTED_MODULE_2__.flip)(),
            (0,_floating_ui_react_dom_interactions__WEBPACK_IMPORTED_MODULE_2__.shift)({
                padding: 8
            })
        ],
        whileElementsMounted: _floating_ui_react_dom_interactions__WEBPACK_IMPORTED_MODULE_2__.autoUpdate
    });
    const { getReferenceProps , getFloatingProps  } = (0,_floating_ui_react_dom_interactions__WEBPACK_IMPORTED_MODULE_2__.useInteractions)([
        (0,_floating_ui_react_dom_interactions__WEBPACK_IMPORTED_MODULE_2__.useHover)(context),
        (0,_floating_ui_react_dom_interactions__WEBPACK_IMPORTED_MODULE_2__.useFocus)(context),
        (0,_floating_ui_react_dom_interactions__WEBPACK_IMPORTED_MODULE_2__.useRole)(context, {
            role: "tooltip"
        }),
        (0,_floating_ui_react_dom_interactions__WEBPACK_IMPORTED_MODULE_2__.useDismiss)(context)
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(children, getReferenceProps({
                ref: reference,
                ...children.props
            })),
            open && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                ...getFloatingProps({
                    ref: floating,
                    className: (_Tooltip_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Tooltip),
                    style: {
                        position: strategy,
                        top: y ?? "",
                        left: x ?? ""
                    }
                }),
                "data-placement": placement,
                "aria-label": ariaLabel,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_Tooltip_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Content),
                    children: renderContent()
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tooltip);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 92841:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72380);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Tooltip__WEBPACK_IMPORTED_MODULE_0__]);
_Tooltip__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Tooltip__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 59211:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ figmaColorNames)
/* harmony export */ });
const figmaColorNames = {
    background: "Background/Default",
    "background-hovered": "Background/Hovered",
    "background-pressed": "Background/Pressed",
    "background-selected": "Background/Selected",
    "focused-default": "Focused/Default",
    "surface-neutral": "Surface Neutral/Default",
    "surface-neutral-hovered": "Surface Neutral/Hovered",
    "surface-neutral-pressed": "Surface Neutral/Pressed",
    "surface-neutral-disabled": "Surface Neutral/Disabled",
    "surface-neutral-subdued": "Surface Neutral/Subdued",
    "surface-subdued": "Surface/Subdued",
    "surface-disabled": "Surface/Disabled",
    "surface-hovered": "Surface/Hovered",
    "surface-pressed": "Surface/Pressed",
    "surface-depressed": "Surface/Depressed",
    "surface-search-field": "Surface/SearchField",
    "shadow-from-dim-light": "Shadow/From dim light",
    "shadow-from-ambient-light": "Shadow/From ambient light",
    "shadow-from-direct-light": "Shadow/From direct light",
    "hint-from-direct-light": "Hint/From direct light",
    "border-neutral-subdued": "Border Neutral/Subdued",
    "border-hovered": "Border/Hovered",
    "border-disabled": "Border/Disabled",
    "border-subdued": "Border/Subdued",
    "border-depressed": "Border/Depressed",
    "border-shadow": "BorderShadow",
    "border-shadow-subdued": "BorderShadow/Subdued",
    "icon-hovered": "Icon/Hovered",
    "icon-pressed": "Icon/Pressed",
    "icon-disabled": "Icon/Disabled",
    "icon-subdued": "Icon/Subdued",
    "text-disabled": "Text/Disabled",
    "text-subdued": "Text/Subdued",
    "interactive-disabled": "Interactive/Disabled",
    "interactive-hovered": "Interactive/Hovered",
    "interactive-pressed": "Interactive/Pressed",
    "icon-interactive": "Icon/Interactive",
    "surface-selected": "Surface Selected/Default",
    "surface-selected-hovered": "Surface Selected/Hovered",
    "surface-selected-pressed": "Surface Selected/Pressed",
    "icon-on-interactive": "Icon On/Interactive",
    "text-on-interactive": "Text On/Interactive",
    "action-secondary": "Action Secondary/Default",
    "action-secondary-disabled": "Action Secondary/Disabled",
    "action-secondary-hovered": "Action Secondary/Hovered",
    "action-secondary-pressed": "Action Secondary/Pressed",
    "action-secondary-depressed": "Action Secondary/Depressed",
    "action-primary": "Action Primary/Default",
    "action-primary-disabled": "Action Primary/Disabled",
    "action-primary-hovered": "Action Primary/Hovered",
    "action-primary-pressed": "Action Primary/Pressed",
    "action-primary-depressed": "Action Primary/Depressed",
    "icon-on-primary": "Icon On/Primary",
    "text-on-primary": "Text On/Primary",
    "text-primary": "Text Primary/Default",
    "text-primary-hovered": "Text Primary/hover",
    "text-primary-pressed": "Text Primary/Pressed",
    "surface-primary-selected": "Surface Primary/Selected",
    "surface-primary-selected-hovered": "Surface Primary/Selected Hovered",
    "surface-primary-selected-pressed": "Surface Primary/Selected Pressed",
    "border-critical": "Border Critical/Default",
    "border-critical-subdued": "Border Critical/Subdued",
    "border-critical-disabled": "Border Critical/Disabled",
    "icon-critical": "Icon/Critical",
    "surface-critical": "Surface Critical/Default",
    "surface-critical-subdued": "Surface Critical/Subdued",
    "surface-critical-subdued-hovered": "Surface Critical/Subdued Hovered",
    "surface-critical-subdued-pressed": "Surface Critical/Subdued Pressed",
    "surface-critical-subdued-depressed": "Surface Critical/Subdued Depressed",
    "text-critical": "Text/Critical",
    "action-critical": "Action Critical/Default",
    "action-critical-disabled": "Action Critical/Disabled",
    "action-critical-hovered": "Action Critical/Hovered",
    "action-critical-pressed": "Action Critical/Pressed",
    "action-critical-depressed": "Action Critical/Depressed",
    "icon-on-critical": "Icon On/Critical",
    "text-on-critical": "Text On/Critical",
    "interactive-critical": "Interactive/Critical",
    "interactive-critical-disabled": "Interactive/Critical Disabled",
    "interactive-critical-hovered": "Interactive/Critical Hovered",
    "interactive-critical-pressed": "Interactive/Critical Pressed",
    "border-warning": "Border Warning/Default",
    "border-warning-subdued": "Border Warning/Subdued",
    "icon-warning": "Icon/Warning",
    "surface-warning": "Surface Warning/Default",
    "surface-warning-subdued": "Surface Warning/Subdued",
    "surface-warning-subdued-hovered": "Surface Warning/Subdued Hovered",
    "surface-warning-subdued-pressed": "Surface Warning/Subdued Pressed",
    "text-warning": "Text/Warning",
    "border-highlight": "Border Highlight/Default",
    "border-highlight-subdued": "Border Highlight/Subdued",
    "icon-highlight": "Icon/Highlight",
    "surface-highlight": "Surface Highlight/Default",
    "surface-highlight-subdued": "Surface Highlight/Subdued",
    "surface-highlight-subdued-hovered": "Surface Highlight/Subdued Hovered",
    "surface-highlight-subdued-pressed": "Surface Highlight/Subdued Pressed",
    "text-highlight": "Text/Highlight",
    "border-success": "Border Success/Default",
    "border-success-subdued": "Border Success/Subdued",
    "icon-success": "Icon/Success",
    "surface-success": "Surface Success/Default",
    "surface-success-subdued": "Surface Success/Subdued",
    "surface-success-subdued-hovered": "Surface Success/Subdued Hovered",
    "surface-success-subdued-pressed": "Surface Success/Subdued Pressed",
    "text-success": "Text/Success",
    "decorative-one-icon": "Decorative/Icon/One",
    "decorative-one-surface": "Decorative/Surface/One",
    "decorative-one-text": "Decorative/Text/One",
    "decorative-two-icon": "Decorative/Icon/Two",
    "decorative-two-surface": "Decorative/Surface/Two",
    "decorative-two-text": "Decorative/Text/Two",
    "decorative-three-icon": "Decorative/Icon/Three",
    "decorative-three-surface": "Decorative/Surface/Three",
    "decorative-three-text": "Decorative/Text/Three",
    "decorative-four-icon": "Decorative/Icon/Four",
    "decorative-four-surface": "Decorative/Surface/Four",
    "decorative-four-text": "Decorative/Text/Four",
    "decorative-five-icon": "Decorative/Icon/Five",
    "decorative-five-surface": "Decorative/Surface/Five",
    "decorative-five-text": "Decorative/Text/Five"
};


/***/ }),

/***/ 65357:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SvgArrowDownMinor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);


var SvgArrowDownMinor = function SvgArrowDownMinor(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 3.5a.75.75 0 0 1 .75.75v9.69l2.72-2.72a.75.75 0 0 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 1.06-1.06l2.72 2.72v-9.69a.75.75 0 0 1 .75-.75Z"
  }));
};
SvgArrowDownMinor.displayName = "ArrowDownMinor";




/***/ }),

/***/ 95931:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SvgBehaviorMajor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);


var SvgBehaviorMajor = function SvgBehaviorMajor(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M10.5 3.75a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0v-2.5Z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M14.28 6.28a.75.75 0 0 0-1.06-1.06l-1 1a.75.75 0 0 0 1.06 1.06l1-1Z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M7.28 13.28a.75.75 0 0 0-1.06-1.06l-1 1a.75.75 0 1 0 1.06 1.06l1-1Z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M7 9.75a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h2.5a.75.75 0 0 1 .75.75Z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M5.97 7.03a.75.75 0 0 0 1.06-1.06l-1.75-1.75a.75.75 0 0 0-1.06 1.06l1.75 1.75Z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M8.22 8.22a.75.75 0 0 1 .767-.181l7.5 2.5a.75.75 0 0 1 .293 1.241l-1.97 1.97 1.97 1.97a.75.75 0 1 1-1.06 1.06l-1.97-1.97-1.97 1.97a.75.75 0 0 1-1.241-.293l-2.5-7.5a.75.75 0 0 1 .18-.767Zm6.642 3.358-4.926-1.642 1.642 4.926 3.284-3.284Z"
  }));
};
SvgBehaviorMajor.displayName = "BehaviorMajor";




/***/ }),

/***/ 16129:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SvgCancelSmallMinor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);


var SvgCancelSmallMinor = function SvgCancelSmallMinor(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M12.72 13.78a.75.75 0 1 0 1.06-1.06l-2.72-2.72 2.72-2.72a.75.75 0 0 0-1.06-1.06l-2.72 2.72-2.72-2.72a.75.75 0 0 0-1.06 1.06l2.72 2.72-2.72 2.72a.75.75 0 1 0 1.06 1.06l2.72-2.72 2.72 2.72Z"
  }));
};
SvgCancelSmallMinor.displayName = "CancelSmallMinor";




/***/ }),

/***/ 23591:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SvgCaretDownMinor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);


var SvgCaretDownMinor = function SvgCaretDownMinor(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M6.24 8.2a.75.75 0 0 1 1.06.04l2.7 2.908 2.7-2.908a.75.75 0 1 1 1.1 1.02l-3.25 3.5a.75.75 0 0 1-1.1 0l-3.25-3.5a.75.75 0 0 1 .04-1.06Z"
  }));
};
SvgCaretDownMinor.displayName = "CaretDownMinor";




/***/ }),

/***/ 703:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SvgCaretUpMinor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);


var SvgCaretUpMinor = function SvgCaretUpMinor(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M6.24 11.8a.75.75 0 0 0 1.06-.04l2.7-2.908 2.7 2.908a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0l-3.25 3.5a.75.75 0 0 0 .04 1.06Z"
  }));
};
SvgCaretUpMinor.displayName = "CaretUpMinor";




/***/ }),

/***/ 46852:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SvgChevronDownMinor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);


var SvgChevronDownMinor = function SvgChevronDownMinor(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M5.72 8.47a.75.75 0 0 1 1.06 0l3.47 3.47 3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06Z"
  }));
};
SvgChevronDownMinor.displayName = "ChevronDownMinor";




/***/ }),

/***/ 90349:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SvgChevronRightMinor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);


var SvgChevronRightMinor = function SvgChevronRightMinor(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M7.72 14.53a.75.75 0 0 1 0-1.06l3.47-3.47-3.47-3.47a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0Z"
  }));
};
SvgChevronRightMinor.displayName = "ChevronRightMinor";




/***/ }),

/***/ 35723:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SvgCircleAlertMajor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);


var SvgCircleAlertMajor = function SvgCircleAlertMajor(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M10 6a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5a.75.75 0 0 1 .75-.75Z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M11 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
  }));
};
SvgCircleAlertMajor.displayName = "CircleAlertMajor";




/***/ }),

/***/ 39131:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SvgCircleInformationMajor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);


var SvgCircleInformationMajor = function SvgCircleInformationMajor(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M10 14a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 1 1.5 0v3.5a.75.75 0 0 1-.75.75Z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M9 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
  }));
};
SvgCircleInformationMajor.displayName = "CircleInformationMajor";




/***/ }),

/***/ 93195:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SvgCircleMinusOutlineMinor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);


var SvgCircleMinusOutlineMinor = function SvgCircleMinusOutlineMinor(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M7 9.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-6Z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
  }));
};
SvgCircleMinusOutlineMinor.displayName = "CircleMinusOutlineMinor";




/***/ }),

/***/ 79365:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SvgCirclePlusMinor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);


var SvgCirclePlusMinor = function SvgCirclePlusMinor(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M6.25 10a.75.75 0 0 1 .75-.75h2.25v-2.25a.75.75 0 0 1 1.5 0v2.25h2.25a.75.75 0 0 1 0 1.5h-2.25v2.25a.75.75 0 0 1-1.5 0v-2.25h-2.25a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"
  }));
};
SvgCirclePlusMinor.displayName = "CirclePlusMinor";




/***/ }),

/***/ 55789:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SvgExternalMinor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);


var SvgExternalMinor = function SvgExternalMinor(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M11.75 3.5a.75.75 0 0 0 0 1.5h2.19l-4.97 4.97a.75.75 0 1 0 1.06 1.06l4.97-4.97v2.19a.75.75 0 0 0 1.5 0v-4a.75.75 0 0 0-.75-.75h-4Z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M15 10.967a.75.75 0 0 0-1.5 0v2.783c0 .69-.56 1.25-1.25 1.25h-6c-.69 0-1.25-.56-1.25-1.25v-6c0-.69.56-1.25 1.25-1.25h2.783a.75.75 0 0 0 0-1.5h-2.783a2.75 2.75 0 0 0-2.75 2.75v6a2.75 2.75 0 0 0 2.75 2.75h6a2.75 2.75 0 0 0 2.75-2.75v-2.783Z"
  }));
};
SvgExternalMinor.displayName = "ExternalMinor";




/***/ }),

/***/ 13256:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SvgFlagMajor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);


var SvgFlagMajor = function SvgFlagMajor(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "m4.964 4.02.237-.127a4.808 4.808 0 0 1 5.392.592 2.09 2.09 0 0 0 2.25.304l.844-.397a1.973 1.973 0 0 1 2.813 1.786v5.044a2.37 2.37 0 0 1-1.361 2.145l-1.363.64a4.093 4.093 0 0 1-4.406-.595 2.832 2.832 0 0 0-3.176-.349l-1.194.637v2.05a.75.75 0 0 1-1.5 0v-11.5a.75.75 0 0 1 1.464-.23Zm.943 1.196a3.308 3.308 0 0 1 3.71.408 3.59 3.59 0 0 0 3.865.522l.843-.397a.473.473 0 0 1 .675.429v5.044a.87.87 0 0 1-.5.787l-1.362.642a2.593 2.593 0 0 1-2.792-.378 4.332 4.332 0 0 0-4.858-.533l-.488.26v-6.115a.31.31 0 0 1 .163-.272l.744-.397Z"
  }));
};
SvgFlagMajor.displayName = "FlagMajor";




/***/ }),

/***/ 89108:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SvgInfoMinor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);


var SvgInfoMinor = function SvgInfoMinor(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M11 6.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M10.75 9.25a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0v-4.5Z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"
  }));
};
SvgInfoMinor.displayName = "InfoMinor";




/***/ }),

/***/ 43341:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SvgMaximizeMinor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);


var SvgMaximizeMinor = function SvgMaximizeMinor(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M12.75 3.5a.75.75 0 0 0 0 1.5h1.19l-3.22 3.22a.75.75 0 0 0 1.06 1.06l3.22-3.22v1.19a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-.75-.75h-3Z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M7.25 16.5a.75.75 0 0 0 0-1.5h-1.19l3.22-3.22a.75.75 0 1 0-1.06-1.06l-3.22 3.22v-1.19a.75.75 0 0 0-1.5 0v3c0 .414.336.75.75.75h3Z"
  }));
};
SvgMaximizeMinor.displayName = "MaximizeMinor";




/***/ }),

/***/ 51878:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SvgMinimizeMinor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);


var SvgMinimizeMinor = function SvgMinimizeMinor(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M13.75 9.5a.75.75 0 0 0 0-1.5h-.69l3.22-3.22a.75.75 0 0 0-1.06-1.06l-3.22 3.22v-.69a.75.75 0 0 0-1.5 0v2.5c0 .414.336.75.75.75h2.5Z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M6.25 10.5a.75.75 0 0 0 0 1.5h.69l-3.22 3.22a.75.75 0 1 0 1.06 1.06l3.22-3.22v.69a.75.75 0 0 0 1.5 0v-2.5a.75.75 0 0 0-.75-.75h-2.5Z"
  }));
};
SvgMinimizeMinor.displayName = "MinimizeMinor";




/***/ }),

/***/ 27002:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SvgMobileCancelMajor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);


var SvgMobileCancelMajor = function SvgMobileCancelMajor(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M12.72 13.78a.75.75 0 1 0 1.06-1.06l-2.72-2.72 2.72-2.72a.75.75 0 0 0-1.06-1.06l-2.72 2.72-2.72-2.72a.75.75 0 0 0-1.06 1.06l2.72 2.72-2.72 2.72a.75.75 0 1 0 1.06 1.06l2.72-2.72 2.72 2.72Z"
  }));
};
SvgMobileCancelMajor.displayName = "MobileCancelMajor";




/***/ }),

/***/ 10924:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SvgNoteMinor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);


var SvgNoteMinor = function SvgNoteMinor(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M6.55 7.25a.7.7 0 0 1 .7-.7h5.5a.7.7 0 0 1 0 1.4h-5.5a.7.7 0 0 1-.7-.7Z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M7 9.05a.7.7 0 0 0 0 1.4h2.25a.7.7 0 1 0 0-1.4h-2.25Z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M3.5 6.25a2.75 2.75 0 0 1 2.75-2.75h7.5a2.75 2.75 0 0 1 2.75 2.75v5.5a.75.75 0 0 1-.22.53l-4 4a.75.75 0 0 1-.53.22h-5.5a2.75 2.75 0 0 1-2.75-2.75v-7.5Zm2.75-1.25c-.69 0-1.25.56-1.25 1.25v7.5c0 .69.56 1.25 1.25 1.25h4.75v-2.25c0-.966.784-1.75 1.75-1.75h2.25v-4.75c0-.69-.56-1.25-1.25-1.25h-7.5Zm7.69 7.5h-1.19a.25.25 0 0 0-.25.25v1.19l1.44-1.44Z"
  }));
};
SvgNoteMinor.displayName = "NoteMinor";




/***/ }),

/***/ 2502:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SvgPlusMinor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);


var SvgPlusMinor = function SvgPlusMinor(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M10.75 6.75a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z"
  }));
};
SvgPlusMinor.displayName = "PlusMinor";




/***/ }),

/***/ 69003:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SvgQuestionMarkMajor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);


var SvgQuestionMarkMajor = function SvgQuestionMarkMajor(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 7.25c-.69 0-1.25.56-1.25 1.25a.75.75 0 0 1-1.5 0 2.75 2.75 0 1 1 3.758 2.56.61.61 0 0 0-.226.147.154.154 0 0 0-.032.046.75.75 0 0 1-1.5-.003c0-.865.696-1.385 1.208-1.586a1.25 1.25 0 0 0-.458-2.414Z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M10 14.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"
  }));
};
SvgQuestionMarkMajor.displayName = "QuestionMarkMajor";




/***/ }),

/***/ 65929:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SvgRiskMajor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);


var SvgRiskMajor = function SvgRiskMajor(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M10 6.75a.75.75 0 0 1 .75.75v3.5a.75.75 0 1 1-1.5 0v-3.5a.75.75 0 0 1 .75-.75Z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M11 13.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 3.5c-1.045 0-1.784.702-2.152 1.447a449.26 449.26 0 0 1-2.005 3.847l-.028.052a403.426 403.426 0 0 0-2.008 3.856c-.372.752-.478 1.75.093 2.614.57.863 1.542 1.184 2.464 1.184h7.272c.922 0 1.895-.32 2.464-1.184.57-.864.465-1.862.093-2.614-.21-.424-1.113-2.147-2.004-3.847l-.032-.061a429.497 429.497 0 0 1-2.005-3.847c-.368-.745-1.107-1.447-2.152-1.447Zm-.808 2.112c.404-.816 1.212-.816 1.616 0 .202.409 1.112 2.145 2.022 3.88a418.904 418.904 0 0 1 2.018 3.875c.404.817 0 1.633-1.212 1.633h-7.272c-1.212 0-1.617-.816-1.212-1.633.202-.408 1.113-2.147 2.023-3.883a421.932 421.932 0 0 0 2.017-3.872Z"
  }));
};
SvgRiskMajor.displayName = "RiskMajor";




/***/ }),

/***/ 54900:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SvgSearchMajor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);


var SvgSearchMajor = function SvgSearchMajor(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M12.323 13.383a5.5 5.5 0 1 1 1.06-1.06l2.897 2.897a.75.75 0 1 1-1.06 1.06l-2.897-2.897Zm.677-4.383a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
  }));
};
SvgSearchMajor.displayName = "SearchMajor";




/***/ }),

/***/ 20569:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SvgSearchMinor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);


var SvgSearchMinor = function SvgSearchMinor(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M12.323 13.383a5.5 5.5 0 1 1 1.06-1.06l2.897 2.897a.75.75 0 1 1-1.06 1.06l-2.897-2.897Zm.677-4.383a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
  }));
};
SvgSearchMinor.displayName = "SearchMinor";




/***/ }),

/***/ 57901:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SvgTickSmallMinor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);


var SvgTickSmallMinor = function SvgTickSmallMinor(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M14.03 7.22a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.06l1.72 1.72 3.97-3.97a.75.75 0 0 1 1.06 0Z"
  }));
};
SvgTickSmallMinor.displayName = "TickSmallMinor";




/***/ }),

/***/ 85237:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "AbandonedCartFilledMajor": () => (/* reexport */ SvgAbandonedCartFilledMajor),
  "AbandonedCartMajor": () => (/* reexport */ SvgAbandonedCartMajor),
  "AccessibilityMajor": () => (/* reexport */ SvgAccessibilityMajor),
  "ActivitiesMajor": () => (/* reexport */ SvgActivitiesMajor),
  "AddCodeMajor": () => (/* reexport */ SvgAddCodeMajor),
  "AddImageMajor": () => (/* reexport */ SvgAddImageMajor),
  "AddMajor": () => (/* reexport */ SvgAddMajor),
  "AddNoteMajor": () => (/* reexport */ SvgAddNoteMajor),
  "AddProductMajor": () => (/* reexport */ SvgAddProductMajor),
  "AdjustMinor": () => (/* reexport */ SvgAdjustMinor),
  "AffiliateMajor": () => (/* reexport */ SvgAffiliateMajor),
  "AlertMinor": () => (/* reexport */ SvgAlertMinor),
  "AnalyticsBarHorizontalMinor": () => (/* reexport */ SvgAnalyticsBarHorizontalMinor),
  "AnalyticsBarStackedMinor": () => (/* reexport */ SvgAnalyticsBarStackedMinor),
  "AnalyticsCohortMinor": () => (/* reexport */ SvgAnalyticsCohortMinor),
  "AnalyticsDonutMinor": () => (/* reexport */ SvgAnalyticsDonutMinor),
  "AnalyticsFilledMinor": () => (/* reexport */ SvgAnalyticsFilledMinor),
  "AnalyticsFunnelMinor": () => (/* reexport */ SvgAnalyticsFunnelMinor),
  "AnalyticsLineMinor": () => (/* reexport */ SvgAnalyticsLineMinor),
  "AnalyticsMajor": () => (/* reexport */ SvgAnalyticsMajor),
  "AnalyticsMinor": () => (/* reexport */ SvgAnalyticsMinor),
  "AnalyticsTableMinor": () => (/* reexport */ SvgAnalyticsTableMinor),
  "AnyClickModelMinor": () => (/* reexport */ SvgAnyClickModelMinor),
  "AppExtensionMinor": () => (/* reexport */ SvgAppExtensionMinor),
  "AppsFilledMajor": () => (/* reexport */ SvgAppsFilledMajor),
  "AppsMajor": () => (/* reexport */ SvgAppsMajor),
  "AppsMinor": () => (/* reexport */ SvgAppsMinor),
  "ArchiveMajor": () => (/* reexport */ SvgArchiveMajor),
  "ArchiveMinor": () => (/* reexport */ ArchiveMinor_svg.S),
  "ArrowDownMinor": () => (/* reexport */ ArrowDownMinor_svg.S),
  "ArrowLeftMinor": () => (/* reexport */ ArrowLeftMinor_svg.S),
  "ArrowRightMinor": () => (/* reexport */ SvgArrowRightMinor),
  "ArrowUpMinor": () => (/* reexport */ SvgArrowUpMinor),
  "AttachmentFilledMajor": () => (/* reexport */ SvgAttachmentFilledMajor),
  "AttachmentMajor": () => (/* reexport */ SvgAttachmentMajor),
  "AutomationFilledMajor": () => (/* reexport */ SvgAutomationFilledMajor),
  "AutomationMajor": () => (/* reexport */ SvgAutomationMajor),
  "BackspaceMajor": () => (/* reexport */ SvgBackspaceMajor),
  "BalanceFilledMajor": () => (/* reexport */ SvgBalanceFilledMajor),
  "BalanceMajor": () => (/* reexport */ SvgBalanceMajor),
  "BankFilledMajor": () => (/* reexport */ SvgBankFilledMajor),
  "BankMajor": () => (/* reexport */ SvgBankMajor),
  "BarcodeMajor": () => (/* reexport */ SvgBarcodeMajor),
  "BehaviorFilledMajor": () => (/* reexport */ SvgBehaviorFilledMajor),
  "BehaviorMajor": () => (/* reexport */ BehaviorMajor_svg.S),
  "BehaviorMinor": () => (/* reexport */ SvgBehaviorMinor),
  "BillingStatementDollarFilledMajor": () => (/* reexport */ SvgBillingStatementDollarFilledMajor),
  "BillingStatementDollarMajor": () => (/* reexport */ SvgBillingStatementDollarMajor),
  "BillingStatementEuroFilledMajor": () => (/* reexport */ SvgBillingStatementEuroFilledMajor),
  "BillingStatementEuroMajor": () => (/* reexport */ SvgBillingStatementEuroMajor),
  "BillingStatementPoundFilledMajor": () => (/* reexport */ SvgBillingStatementPoundFilledMajor),
  "BillingStatementPoundMajor": () => (/* reexport */ SvgBillingStatementPoundMajor),
  "BillingStatementRupeeFilledMajor": () => (/* reexport */ SvgBillingStatementRupeeFilledMajor),
  "BillingStatementRupeeMajor": () => (/* reexport */ SvgBillingStatementRupeeMajor),
  "BillingStatementYenFilledMajor": () => (/* reexport */ SvgBillingStatementYenFilledMajor),
  "BillingStatementYenMajor": () => (/* reexport */ SvgBillingStatementYenMajor),
  "BlockMinor": () => (/* reexport */ SvgBlockMinor),
  "BlockquoteMajor": () => (/* reexport */ SvgBlockquoteMajor),
  "BlogMajor": () => (/* reexport */ SvgBlogMajor),
  "BoldMajor": () => (/* reexport */ SvgBoldMajor),
  "BoldMinor": () => (/* reexport */ SvgBoldMinor),
  "BugMajor": () => (/* reexport */ SvgBugMajor),
  "ButtonCornerPillMajor": () => (/* reexport */ SvgButtonCornerPillMajor),
  "ButtonCornerRoundedMajor": () => (/* reexport */ SvgButtonCornerRoundedMajor),
  "ButtonCornerSquareMajor": () => (/* reexport */ SvgButtonCornerSquareMajor),
  "ButtonMinor": () => (/* reexport */ SvgButtonMinor),
  "BuyButtonButtonLayoutMajor": () => (/* reexport */ SvgBuyButtonButtonLayoutMajor),
  "BuyButtonHorizontalLayoutMajor": () => (/* reexport */ SvgBuyButtonHorizontalLayoutMajor),
  "BuyButtonMajor": () => (/* reexport */ SvgBuyButtonMajor),
  "BuyButtonVerticalLayoutMajor": () => (/* reexport */ SvgBuyButtonVerticalLayoutMajor),
  "CalendarMajor": () => (/* reexport */ SvgCalendarMajor),
  "CalendarMinor": () => (/* reexport */ SvgCalendarMinor),
  "CalendarTickMajor": () => (/* reexport */ SvgCalendarTickMajor),
  "CalendarTimeMinor": () => (/* reexport */ SvgCalendarTimeMinor),
  "CameraMajor": () => (/* reexport */ SvgCameraMajor),
  "CancelMajor": () => (/* reexport */ SvgCancelMajor),
  "CancelMinor": () => (/* reexport */ SvgCancelMinor),
  "CancelSmallMinor": () => (/* reexport */ CancelSmallMinor_svg.S),
  "CapitalFilledMajor": () => (/* reexport */ SvgCapitalFilledMajor),
  "CapitalMajor": () => (/* reexport */ SvgCapitalMajor),
  "CapturePaymentMinor": () => (/* reexport */ SvgCapturePaymentMinor),
  "CardReaderChipMajor": () => (/* reexport */ SvgCardReaderChipMajor),
  "CardReaderMajor": () => (/* reexport */ SvgCardReaderMajor),
  "CardReaderTapMajor": () => (/* reexport */ SvgCardReaderTapMajor),
  "CaretDownMinor": () => (/* reexport */ CaretDownMinor_svg.S),
  "CaretUpMinor": () => (/* reexport */ CaretUpMinor_svg.S),
  "CartDownFilledMajor": () => (/* reexport */ SvgCartDownFilledMajor),
  "CartDownMajor": () => (/* reexport */ SvgCartDownMajor),
  "CartFilledMajor": () => (/* reexport */ SvgCartFilledMajor),
  "CartMajor": () => (/* reexport */ SvgCartMajor),
  "CartUpMajor": () => (/* reexport */ SvgCartUpMajor),
  "CashDollarFilledMajor": () => (/* reexport */ SvgCashDollarFilledMajor),
  "CashDollarMajor": () => (/* reexport */ SvgCashDollarMajor),
  "CashDollarMinor": () => (/* reexport */ SvgCashDollarMinor),
  "CashEuroMajor": () => (/* reexport */ SvgCashEuroMajor),
  "CashPoundMajor": () => (/* reexport */ SvgCashPoundMajor),
  "CashRupeeMajor": () => (/* reexport */ SvgCashRupeeMajor),
  "CashYenMajor": () => (/* reexport */ SvgCashYenMajor),
  "CategoriesMajor": () => (/* reexport */ SvgCategoriesMajor),
  "ChannelsMajor": () => (/* reexport */ SvgChannelsMajor),
  "ChatMajor": () => (/* reexport */ SvgChatMajor),
  "ChecklistAlternateMajor": () => (/* reexport */ SvgChecklistAlternateMajor),
  "ChecklistMajor": () => (/* reexport */ SvgChecklistMajor),
  "CheckoutMajor": () => (/* reexport */ SvgCheckoutMajor),
  "ChevronDownMinor": () => (/* reexport */ ChevronDownMinor_svg.S),
  "ChevronLeftMinor": () => (/* reexport */ SvgChevronLeftMinor),
  "ChevronRightMinor": () => (/* reexport */ ChevronRightMinor_svg.S),
  "ChevronUpMinor": () => (/* reexport */ SvgChevronUpMinor),
  "CircleAlertMajor": () => (/* reexport */ CircleAlertMajor_svg.S),
  "CircleCancelMajor": () => (/* reexport */ SvgCircleCancelMajor),
  "CircleCancelMinor": () => (/* reexport */ SvgCircleCancelMinor),
  "CircleChevronDownMinor": () => (/* reexport */ SvgCircleChevronDownMinor),
  "CircleChevronLeftMinor": () => (/* reexport */ SvgCircleChevronLeftMinor),
  "CircleChevronRightMinor": () => (/* reexport */ SvgCircleChevronRightMinor),
  "CircleChevronUpMinor": () => (/* reexport */ SvgCircleChevronUpMinor),
  "CircleDisableMinor": () => (/* reexport */ SvgCircleDisableMinor),
  "CircleDisabledMajor": () => (/* reexport */ SvgCircleDisabledMajor),
  "CircleDotsMajor": () => (/* reexport */ SvgCircleDotsMajor),
  "CircleDownMajor": () => (/* reexport */ SvgCircleDownMajor),
  "CircleInformationMajor": () => (/* reexport */ CircleInformationMajor_svg.S),
  "CircleLeftMajor": () => (/* reexport */ SvgCircleLeftMajor),
  "CircleMinusMajor": () => (/* reexport */ SvgCircleMinusMajor),
  "CircleMinusMinor": () => (/* reexport */ SvgCircleMinusMinor),
  "CircleMinusOutlineMinor": () => (/* reexport */ CircleMinusOutlineMinor_svg.S),
  "CirclePlusMajor": () => (/* reexport */ SvgCirclePlusMajor),
  "CirclePlusMinor": () => (/* reexport */ CirclePlusMinor_svg.S),
  "CirclePlusOutlineMinor": () => (/* reexport */ CirclePlusOutlineMinor_svg.S),
  "CircleRightMajor": () => (/* reexport */ SvgCircleRightMajor),
  "CircleTickMajor": () => (/* reexport */ SvgCircleTickMajor),
  "CircleTickMinor": () => (/* reexport */ SvgCircleTickMinor),
  "CircleTickOutlineMinor": () => (/* reexport */ SvgCircleTickOutlineMinor),
  "CircleUpMajor": () => (/* reexport */ SvgCircleUpMajor),
  "ClipboardMinor": () => (/* reexport */ ClipboardMinor_svg.S),
  "ClockMajor": () => (/* reexport */ SvgClockMajor),
  "ClockMinor": () => (/* reexport */ SvgClockMinor),
  "CodeMajor": () => (/* reexport */ SvgCodeMajor),
  "CodeMinor": () => (/* reexport */ SvgCodeMinor),
  "CollectionReferenceMinor": () => (/* reexport */ SvgCollectionReferenceMinor),
  "CollectionsFilledMajor": () => (/* reexport */ SvgCollectionsFilledMajor),
  "CollectionsMajor": () => (/* reexport */ SvgCollectionsMajor),
  "ColorNoneMinor": () => (/* reexport */ SvgColorNoneMinor),
  "ColorsMajor": () => (/* reexport */ SvgColorsMajor),
  "Column1Major": () => (/* reexport */ SvgColumn1Major),
  "ColumnWithTextMajor": () => (/* reexport */ SvgColumnWithTextMajor),
  "Columns2Major": () => (/* reexport */ SvgColumns2Major),
  "Columns3Major": () => (/* reexport */ SvgColumns3Major),
  "Columns3Minor": () => (/* reexport */ SvgColumns3Minor),
  "ComposeMajor": () => (/* reexport */ SvgComposeMajor),
  "ConfettiMajor": () => (/* reexport */ SvgConfettiMajor),
  "ConnectMinor": () => (/* reexport */ SvgConnectMinor),
  "ContentFilledMinor": () => (/* reexport */ SvgContentFilledMinor),
  "ContentMinor": () => (/* reexport */ SvgContentMinor),
  "ConversationMinor": () => (/* reexport */ ConversationMinor_svg.S),
  "CreditCardCancelMajor": () => (/* reexport */ SvgCreditCardCancelMajor),
  "CreditCardMajor": () => (/* reexport */ SvgCreditCardMajor),
  "CreditCardPercentMajor": () => (/* reexport */ SvgCreditCardPercentMajor),
  "CreditCardSecureMajor": () => (/* reexport */ SvgCreditCardSecureMajor),
  "CurrencyConvertMinor": () => (/* reexport */ SvgCurrencyConvertMinor),
  "CustomerMinusMajor": () => (/* reexport */ SvgCustomerMinusMajor),
  "CustomerPlusMajor": () => (/* reexport */ SvgCustomerPlusMajor),
  "CustomersFilledMinor": () => (/* reexport */ SvgCustomersFilledMinor),
  "CustomersMajor": () => (/* reexport */ CustomersMajor_svg.S),
  "CustomersMinor": () => (/* reexport */ CustomersMinor_svg.S),
  "DataDrivenModelMinor": () => (/* reexport */ SvgDataDrivenModelMinor),
  "DataVisualizationMajor": () => (/* reexport */ SvgDataVisualizationMajor),
  "DecimalMinor": () => (/* reexport */ SvgDecimalMinor),
  "DeleteMajor": () => (/* reexport */ SvgDeleteMajor),
  "DeleteMinor": () => (/* reexport */ DeleteMinor_svg.S),
  "DesktopMajor": () => (/* reexport */ SvgDesktopMajor),
  "DetailedPopUpMajor": () => (/* reexport */ SvgDetailedPopUpMajor),
  "DiamondAlertMajor": () => (/* reexport */ SvgDiamondAlertMajor),
  "DiamondAlertMinor": () => (/* reexport */ SvgDiamondAlertMinor),
  "DigitalMediaReceiverMajor": () => (/* reexport */ SvgDigitalMediaReceiverMajor),
  "DiscountAutomaticMajor": () => (/* reexport */ SvgDiscountAutomaticMajor),
  "DiscountCodeMajor": () => (/* reexport */ SvgDiscountCodeMajor),
  "DiscountsFilledMinor": () => (/* reexport */ SvgDiscountsFilledMinor),
  "DiscountsMajor": () => (/* reexport */ SvgDiscountsMajor),
  "DiscountsMinor": () => (/* reexport */ SvgDiscountsMinor),
  "DisputeMinor": () => (/* reexport */ SvgDisputeMinor),
  "DnsSettingsMajor": () => (/* reexport */ SvgDnsSettingsMajor),
  "DockFloatingMajor": () => (/* reexport */ SvgDockFloatingMajor),
  "DockSideMajor": () => (/* reexport */ SvgDockSideMajor),
  "DomainNewMajor": () => (/* reexport */ SvgDomainNewMajor),
  "DomainRedirectMinor": () => (/* reexport */ SvgDomainRedirectMinor),
  "DomainsFilledMajor": () => (/* reexport */ SvgDomainsFilledMajor),
  "DomainsMajor": () => (/* reexport */ SvgDomainsMajor),
  "DraftOrdersFilledMajor": () => (/* reexport */ SvgDraftOrdersFilledMajor),
  "DraftOrdersMajor": () => (/* reexport */ SvgDraftOrdersMajor),
  "DragDropMajor": () => (/* reexport */ SvgDragDropMajor),
  "DragHandleMinor": () => (/* reexport */ SvgDragHandleMinor),
  "DropdownMinor": () => (/* reexport */ SvgDropdownMinor),
  "DuplicateMinor": () => (/* reexport */ DuplicateMinor_svg.S),
  "DynamicSourceMajor": () => (/* reexport */ SvgDynamicSourceMajor),
  "DynamicSourceMinor": () => (/* reexport */ SvgDynamicSourceMinor),
  "EditMajor": () => (/* reexport */ SvgEditMajor),
  "EditMinor": () => (/* reexport */ EditMinor_svg.S),
  "EmailMajor": () => (/* reexport */ SvgEmailMajor),
  "EmailNewsletterMajor": () => (/* reexport */ SvgEmailNewsletterMajor),
  "EmbedMinor": () => (/* reexport */ SvgEmbedMinor),
  "EnableSelectionMinor": () => (/* reexport */ SvgEnableSelectionMinor),
  "EnterMajor": () => (/* reexport */ SvgEnterMajor),
  "EnvelopeMajor": () => (/* reexport */ SvgEnvelopeMajor),
  "ExchangeMajor": () => (/* reexport */ SvgExchangeMajor),
  "ExistingInventoryMajor": () => (/* reexport */ SvgExistingInventoryMajor),
  "ExitMajor": () => (/* reexport */ SvgExitMajor),
  "ExploreImagesMajor": () => (/* reexport */ SvgExploreImagesMajor),
  "ExportMinor": () => (/* reexport */ ExportMinor_svg.S),
  "ExtendMajor": () => (/* reexport */ SvgExtendMajor),
  "ExtendMinor": () => (/* reexport */ SvgExtendMinor),
  "ExternalMinor": () => (/* reexport */ ExternalMinor_svg.S),
  "ExternalSmallMinor": () => (/* reexport */ SvgExternalSmallMinor),
  "EyeDropperMinor": () => (/* reexport */ SvgEyeDropperMinor),
  "FacebookMinor": () => (/* reexport */ SvgFacebookMinor),
  "FaviconMajor": () => (/* reexport */ SvgFaviconMajor),
  "FavoriteMajor": () => (/* reexport */ SvgFavoriteMajor),
  "FeaturedCollectionMajor": () => (/* reexport */ SvgFeaturedCollectionMajor),
  "FeaturedContentMajor": () => (/* reexport */ SvgFeaturedContentMajor),
  "FileFilledMinor": () => (/* reexport */ SvgFileFilledMinor),
  "FileMinor": () => (/* reexport */ SvgFileMinor),
  "FilterMajor": () => (/* reexport */ SvgFilterMajor),
  "FilterMinor": () => (/* reexport */ SvgFilterMinor),
  "FinancesMajor": () => (/* reexport */ SvgFinancesMajor),
  "FinancesMinor": () => (/* reexport */ SvgFinancesMinor),
  "FirstClickModelMinor": () => (/* reexport */ SvgFirstClickModelMinor),
  "FirstOrderMajor": () => (/* reexport */ SvgFirstOrderMajor),
  "FirstVisitMajor": () => (/* reexport */ SvgFirstVisitMajor),
  "FlagMajor": () => (/* reexport */ FlagMajor_svg.S),
  "FlipCameraMajor": () => (/* reexport */ SvgFlipCameraMajor),
  "FolderDownMajor": () => (/* reexport */ SvgFolderDownMajor),
  "FolderMajor": () => (/* reexport */ SvgFolderMajor),
  "FolderMinusMajor": () => (/* reexport */ SvgFolderMinusMajor),
  "FolderPlusMajor": () => (/* reexport */ SvgFolderPlusMajor),
  "FolderUpMajor": () => (/* reexport */ SvgFolderUpMajor),
  "FollowUpEmailMajor": () => (/* reexport */ SvgFollowUpEmailMajor),
  "FoodMajor": () => (/* reexport */ SvgFoodMajor),
  "FooterMajor": () => (/* reexport */ SvgFooterMajor),
  "FormsMajor": () => (/* reexport */ SvgFormsMajor),
  "FraudProtectMajor": () => (/* reexport */ SvgFraudProtectMajor),
  "FraudProtectMinor": () => (/* reexport */ SvgFraudProtectMinor),
  "FraudProtectPendingMajor": () => (/* reexport */ SvgFraudProtectPendingMajor),
  "FraudProtectPendingMinor": () => (/* reexport */ SvgFraudProtectPendingMinor),
  "FraudProtectUnprotectedMajor": () => (/* reexport */ SvgFraudProtectUnprotectedMajor),
  "FraudProtectUnprotectedMinor": () => (/* reexport */ SvgFraudProtectUnprotectedMinor),
  "FulfillmentFulfilledMajor": () => (/* reexport */ SvgFulfillmentFulfilledMajor),
  "FulfillmentOnHoldMajor": () => (/* reexport */ SvgFulfillmentOnHoldMajor),
  "GamesConsoleMajor": () => (/* reexport */ SvgGamesConsoleMajor),
  "GaugeMajor": () => (/* reexport */ SvgGaugeMajor),
  "GaugeMinor": () => (/* reexport */ SvgGaugeMinor),
  "GiftCardFilledMinor": () => (/* reexport */ SvgGiftCardFilledMinor),
  "GiftCardMajor": () => (/* reexport */ SvgGiftCardMajor),
  "GiftCardMinor": () => (/* reexport */ SvgGiftCardMinor),
  "GlobeMajor": () => (/* reexport */ SvgGlobeMajor),
  "GlobeMinor": () => (/* reexport */ SvgGlobeMinor),
  "GrammarMajor": () => (/* reexport */ SvgGrammarMajor),
  "HashtagMajor": () => (/* reexport */ SvgHashtagMajor),
  "HashtagMinor": () => (/* reexport */ SvgHashtagMinor),
  "HeaderMajor": () => (/* reexport */ SvgHeaderMajor),
  "HeartMajor": () => (/* reexport */ SvgHeartMajor),
  "HideKeyboardMajor": () => (/* reexport */ SvgHideKeyboardMajor),
  "HideMinor": () => (/* reexport */ SvgHideMinor),
  "HintMajor": () => (/* reexport */ SvgHintMajor),
  "HomeFilledMinor": () => (/* reexport */ SvgHomeFilledMinor),
  "HomeMajor": () => (/* reexport */ HomeMajor_svg.S),
  "HomeMinor": () => (/* reexport */ HomeMinor_svg.S),
  "HorizontalDotsMinor": () => (/* reexport */ SvgHorizontalDotsMinor),
  "IconsFilledMajor": () => (/* reexport */ SvgIconsFilledMajor),
  "IconsMajor": () => (/* reexport */ SvgIconsMajor),
  "IdentityCardFilledMajor": () => (/* reexport */ SvgIdentityCardFilledMajor),
  "IdentityCardMajor": () => (/* reexport */ SvgIdentityCardMajor),
  "IllustrationMajor": () => (/* reexport */ SvgIllustrationMajor),
  "ImageAltMajor": () => (/* reexport */ SvgImageAltMajor),
  "ImageAltMinor": () => (/* reexport */ SvgImageAltMinor),
  "ImageMajor": () => (/* reexport */ SvgImageMajor),
  "ImageWithTextMajor": () => (/* reexport */ SvgImageWithTextMajor),
  "ImageWithTextOverlayMajor": () => (/* reexport */ SvgImageWithTextOverlayMajor),
  "ImagesMajor": () => (/* reexport */ SvgImagesMajor),
  "ImportMinor": () => (/* reexport */ ImportMinor_svg.S),
  "ImportStoreMajor": () => (/* reexport */ SvgImportStoreMajor),
  "InactiveLocationMajor": () => (/* reexport */ SvgInactiveLocationMajor),
  "InactiveLocationMinor": () => (/* reexport */ SvgInactiveLocationMinor),
  "IncomingMajor": () => (/* reexport */ SvgIncomingMajor),
  "IndentMajor": () => (/* reexport */ SvgIndentMajor),
  "IndentMinor": () => (/* reexport */ SvgIndentMinor),
  "InfoMinor": () => (/* reexport */ InfoMinor_svg.S),
  "InsertDynamicSourceMajor": () => (/* reexport */ SvgInsertDynamicSourceMajor),
  "InsertDynamicSourceMinor": () => (/* reexport */ SvgInsertDynamicSourceMinor),
  "InstagramMinor": () => (/* reexport */ SvgInstagramMinor),
  "InstallMinor": () => (/* reexport */ SvgInstallMinor),
  "InventoryFilledMajor": () => (/* reexport */ SvgInventoryFilledMajor),
  "InventoryMajor": () => (/* reexport */ SvgInventoryMajor),
  "InviteMinor": () => (/* reexport */ SvgInviteMinor),
  "IqMajor": () => (/* reexport */ SvgIqMajor),
  "ItalicMajor": () => (/* reexport */ SvgItalicMajor),
  "ItalicMinor": () => (/* reexport */ SvgItalicMinor),
  "JobsFilledMajor": () => (/* reexport */ SvgJobsFilledMajor),
  "JobsMajor": () => (/* reexport */ SvgJobsMajor),
  "KeyMajor": () => (/* reexport */ SvgKeyMajor),
  "KeyboardMajor": () => (/* reexport */ SvgKeyboardMajor),
  "KeyboardMinor": () => (/* reexport */ SvgKeyboardMinor),
  "LabelPrinterMajor": () => (/* reexport */ SvgLabelPrinterMajor),
  "LandingPageMajor": () => (/* reexport */ SvgLandingPageMajor),
  "LanguageFilledMinor": () => (/* reexport */ SvgLanguageFilledMinor),
  "LanguageMinor": () => (/* reexport */ SvgLanguageMinor),
  "LastClickModelMinor": () => (/* reexport */ SvgLastClickModelMinor),
  "LastNonDirectClickModelMinor": () => (/* reexport */ SvgLastNonDirectClickModelMinor),
  "LegalFilledMajor": () => (/* reexport */ SvgLegalFilledMajor),
  "LegalMajor": () => (/* reexport */ SvgLegalMajor),
  "LinearModelMinor": () => (/* reexport */ SvgLinearModelMinor),
  "LinkMinor": () => (/* reexport */ SvgLinkMinor),
  "ListFilledMajor": () => (/* reexport */ SvgListFilledMajor),
  "ListMajor": () => (/* reexport */ SvgListMajor),
  "ListMinor": () => (/* reexport */ SvgListMinor),
  "LiveViewFilledMajor": () => (/* reexport */ SvgLiveViewFilledMajor),
  "LiveViewMajor": () => (/* reexport */ SvgLiveViewMajor),
  "LocationFilledMajor": () => (/* reexport */ SvgLocationFilledMajor),
  "LocationMajor": () => (/* reexport */ SvgLocationMajor),
  "LocationsMinor": () => (/* reexport */ SvgLocationsMinor),
  "LockFilledMajor": () => (/* reexport */ SvgLockFilledMajor),
  "LockMajor": () => (/* reexport */ SvgLockMajor),
  "LockMinor": () => (/* reexport */ SvgLockMinor),
  "LogOutMinor": () => (/* reexport */ SvgLogOutMinor),
  "LogoBlockMajor": () => (/* reexport */ SvgLogoBlockMajor),
  "MagicMajor": () => (/* reexport */ SvgMagicMajor),
  "MagicMinor": () => (/* reexport */ SvgMagicMinor),
  "ManagedStoreMajor": () => (/* reexport */ SvgManagedStoreMajor),
  "MarkFulfilledMinor": () => (/* reexport */ SvgMarkFulfilledMinor),
  "MarkPaidMinor": () => (/* reexport */ SvgMarkPaidMinor),
  "MarketingFilledMinor": () => (/* reexport */ SvgMarketingFilledMinor),
  "MarketingMajor": () => (/* reexport */ SvgMarketingMajor),
  "MarketingMinor": () => (/* reexport */ MarketingMinor_svg.S),
  "MarketsFilledMajor": () => (/* reexport */ SvgMarketsFilledMajor),
  "MarketsMajor": () => (/* reexport */ SvgMarketsMajor),
  "MaximizeMajor": () => (/* reexport */ SvgMaximizeMajor),
  "MaximizeMinor": () => (/* reexport */ MaximizeMinor_svg.S),
  "MeasurementMinor": () => (/* reexport */ SvgMeasurementMinor),
  "MentionMajor": () => (/* reexport */ SvgMentionMajor),
  "MergeMinor": () => (/* reexport */ SvgMergeMinor),
  "MetafieldsFilledMinor": () => (/* reexport */ SvgMetafieldsFilledMinor),
  "MetafieldsMajor": () => (/* reexport */ SvgMetafieldsMajor),
  "MetafieldsMinor": () => (/* reexport */ SvgMetafieldsMinor),
  "MetaobjectMinor": () => (/* reexport */ SvgMetaobjectMinor),
  "MetaobjectReferenceMinor": () => (/* reexport */ SvgMetaobjectReferenceMinor),
  "MicrophoneMajor": () => (/* reexport */ SvgMicrophoneMajor),
  "MinimizeMajor": () => (/* reexport */ SvgMinimizeMajor),
  "MinimizeMinor": () => (/* reexport */ MinimizeMinor_svg.S),
  "MinusMajor": () => (/* reexport */ SvgMinusMajor),
  "MinusMinor": () => (/* reexport */ SvgMinusMinor),
  "MobileAcceptMajor": () => (/* reexport */ SvgMobileAcceptMajor),
  "MobileBackArrowMajor": () => (/* reexport */ SvgMobileBackArrowMajor),
  "MobileCancelMajor": () => (/* reexport */ MobileCancelMajor_svg.S),
  "MobileChevronMajor": () => (/* reexport */ SvgMobileChevronMajor),
  "MobileHamburgerMajor": () => (/* reexport */ SvgMobileHamburgerMajor),
  "MobileHorizontalDotsMajor": () => (/* reexport */ SvgMobileHorizontalDotsMajor),
  "MobileMajor": () => (/* reexport */ SvgMobileMajor),
  "MobilePlusMajor": () => (/* reexport */ SvgMobilePlusMajor),
  "MobileVerticalDotsMajor": () => (/* reexport */ SvgMobileVerticalDotsMajor),
  "MonerisMajor": () => (/* reexport */ SvgMonerisMajor),
  "MoneyFilledMinor": () => (/* reexport */ SvgMoneyFilledMinor),
  "MoneyMinor": () => (/* reexport */ SvgMoneyMinor),
  "NatureMajor": () => (/* reexport */ SvgNatureMajor),
  "NavigationMajor": () => (/* reexport */ SvgNavigationMajor),
  "NoteMajor": () => (/* reexport */ SvgNoteMajor),
  "NoteMinor": () => (/* reexport */ NoteMinor_svg.S),
  "NotificationFilledMajor": () => (/* reexport */ SvgNotificationFilledMajor),
  "NotificationMajor": () => (/* reexport */ SvgNotificationMajor),
  "OnlineStoreMajor": () => (/* reexport */ SvgOnlineStoreMajor),
  "OnlineStoreMinor": () => (/* reexport */ OnlineStoreMinor_svg.S),
  "OrderStatusMinor": () => (/* reexport */ SvgOrderStatusMinor),
  "OrderedListMajor": () => (/* reexport */ SvgOrderedListMajor),
  "OrderedListMinor": () => (/* reexport */ SvgOrderedListMinor),
  "OrdersFilledMinor": () => (/* reexport */ SvgOrdersFilledMinor),
  "OrdersMajor": () => (/* reexport */ OrdersMajor_svg.S),
  "OrdersMinor": () => (/* reexport */ OrdersMinor_svg.S),
  "OrganizationMajor": () => (/* reexport */ SvgOrganizationMajor),
  "OutdentMajor": () => (/* reexport */ SvgOutdentMajor),
  "OutdentMinor": () => (/* reexport */ SvgOutdentMinor),
  "OutgoingMajor": () => (/* reexport */ SvgOutgoingMajor),
  "PackageFilledMajor": () => (/* reexport */ SvgPackageFilledMajor),
  "PackageMajor": () => (/* reexport */ SvgPackageMajor),
  "PageDownMajor": () => (/* reexport */ SvgPageDownMajor),
  "PageMajor": () => (/* reexport */ SvgPageMajor),
  "PageMinusMajor": () => (/* reexport */ SvgPageMinusMajor),
  "PagePlusMajor": () => (/* reexport */ SvgPagePlusMajor),
  "PageReferenceMinor": () => (/* reexport */ SvgPageReferenceMinor),
  "PageUpMajor": () => (/* reexport */ SvgPageUpMajor),
  "PaginationEndMinor": () => (/* reexport */ SvgPaginationEndMinor),
  "PaginationStartMinor": () => (/* reexport */ SvgPaginationStartMinor),
  "PaintBrushMajor": () => (/* reexport */ SvgPaintBrushMajor),
  "PaperCheckMajor": () => (/* reexport */ SvgPaperCheckMajor),
  "PaperCheckMinor": () => (/* reexport */ SvgPaperCheckMinor),
  "PasskeyFilledMinor": () => (/* reexport */ SvgPasskeyFilledMinor),
  "PasskeyMajor": () => (/* reexport */ SvgPasskeyMajor),
  "PasskeyMinor": () => (/* reexport */ SvgPasskeyMinor),
  "PauseCircleMajor": () => (/* reexport */ SvgPauseCircleMajor),
  "PauseMajor": () => (/* reexport */ SvgPauseMajor),
  "PauseMinor": () => (/* reexport */ SvgPauseMinor),
  "PaymentsFilledMajor": () => (/* reexport */ SvgPaymentsFilledMajor),
  "PaymentsMajor": () => (/* reexport */ SvgPaymentsMajor),
  "PersonalizedTextMajor": () => (/* reexport */ SvgPersonalizedTextMajor),
  "PhoneInMajor": () => (/* reexport */ SvgPhoneInMajor),
  "PhoneMajor": () => (/* reexport */ SvgPhoneMajor),
  "PhoneOutMajor": () => (/* reexport */ SvgPhoneOutMajor),
  "PinMajor": () => (/* reexport */ SvgPinMajor),
  "PinMinor": () => (/* reexport */ SvgPinMinor),
  "PinUnfilledMajor": () => (/* reexport */ SvgPinUnfilledMajor),
  "PinUnfilledMinor": () => (/* reexport */ SvgPinUnfilledMinor),
  "PintrestMinor": () => (/* reexport */ SvgPintrestMinor),
  "PlanFilledMinor": () => (/* reexport */ SvgPlanFilledMinor),
  "PlanMajor": () => (/* reexport */ SvgPlanMajor),
  "PlanMinor": () => (/* reexport */ SvgPlanMinor),
  "PlayCircleMajor": () => (/* reexport */ SvgPlayCircleMajor),
  "PlayMajor": () => (/* reexport */ SvgPlayMajor),
  "PlayMinor": () => (/* reexport */ SvgPlayMinor),
  "PlusMinor": () => (/* reexport */ PlusMinor_svg.S),
  "PointOfSaleMajor": () => (/* reexport */ SvgPointOfSaleMajor),
  "PopularMajor": () => (/* reexport */ SvgPopularMajor),
  "PositionBasedModelMinor": () => (/* reexport */ SvgPositionBasedModelMinor),
  "PriceLookupMinor": () => (/* reexport */ SvgPriceLookupMinor),
  "PrintMajor": () => (/* reexport */ SvgPrintMajor),
  "PrintMinor": () => (/* reexport */ SvgPrintMinor),
  "ProductCostMajor": () => (/* reexport */ SvgProductCostMajor),
  "ProductReferenceMinor": () => (/* reexport */ SvgProductReferenceMinor),
  "ProductReturnsMinor": () => (/* reexport */ SvgProductReturnsMinor),
  "ProductsFilledMinor": () => (/* reexport */ SvgProductsFilledMinor),
  "ProductsMajor": () => (/* reexport */ ProductsMajor_svg.S),
  "ProductsMinor": () => (/* reexport */ ProductsMinor_svg.S),
  "ProfileMajor": () => (/* reexport */ SvgProfileMajor),
  "ProfileMinor": () => (/* reexport */ SvgProfileMinor),
  "PromoteFilledMinor": () => (/* reexport */ SvgPromoteFilledMinor),
  "PromoteMinor": () => (/* reexport */ SvgPromoteMinor),
  "QuestionMarkInverseMajor": () => (/* reexport */ SvgQuestionMarkInverseMajor),
  "QuestionMarkInverseMinor": () => (/* reexport */ SvgQuestionMarkInverseMinor),
  "QuestionMarkMajor": () => (/* reexport */ QuestionMarkMajor_svg.S),
  "QuestionMarkMinor": () => (/* reexport */ SvgQuestionMarkMinor),
  "QuickSaleMajor": () => (/* reexport */ SvgQuickSaleMajor),
  "ReadTimeMinor": () => (/* reexport */ SvgReadTimeMinor),
  "ReceiptMajor": () => (/* reexport */ SvgReceiptMajor),
  "RecentSearchesMajor": () => (/* reexport */ SvgRecentSearchesMajor),
  "RedoMajor": () => (/* reexport */ SvgRedoMajor),
  "ReferralCodeMajor": () => (/* reexport */ SvgReferralCodeMajor),
  "ReferralMajor": () => (/* reexport */ SvgReferralMajor),
  "RefreshMajor": () => (/* reexport */ SvgRefreshMajor),
  "RefreshMinor": () => (/* reexport */ SvgRefreshMinor),
  "RefundMajor": () => (/* reexport */ SvgRefundMajor),
  "RefundMinor": () => (/* reexport */ SvgRefundMinor),
  "RemoveProductMajor": () => (/* reexport */ SvgRemoveProductMajor),
  "RepeatOrderMajor": () => (/* reexport */ SvgRepeatOrderMajor),
  "ReplaceMajor": () => (/* reexport */ SvgReplaceMajor),
  "ReplayMinor": () => (/* reexport */ SvgReplayMinor),
  "ReportFilledMinor": () => (/* reexport */ SvgReportFilledMinor),
  "ReportMinor": () => (/* reexport */ SvgReportMinor),
  "ReportsMajor": () => (/* reexport */ SvgReportsMajor),
  "ResetMinor": () => (/* reexport */ SvgResetMinor),
  "ResourcesMajor": () => (/* reexport */ SvgResourcesMajor),
  "ReturnMinor": () => (/* reexport */ SvgReturnMinor),
  "ReturnsMajor": () => (/* reexport */ SvgReturnsMajor),
  "RichTextMinor": () => (/* reexport */ SvgRichTextMinor),
  "RiskMajor": () => (/* reexport */ RiskMajor_svg.S),
  "RiskMinor": () => (/* reexport */ SvgRiskMinor),
  "Rows2Major": () => (/* reexport */ SvgRows2Major),
  "SandboxMajor": () => (/* reexport */ SvgSandboxMajor),
  "SaveMinor": () => (/* reexport */ SvgSaveMinor),
  "SearchMajor": () => (/* reexport */ SearchMajor_svg.S),
  "SearchMinor": () => (/* reexport */ SearchMinor_svg.S),
  "SectionMajor": () => (/* reexport */ SvgSectionMajor),
  "SecureMajor": () => (/* reexport */ SvgSecureMajor),
  "SelectMinor": () => (/* reexport */ SvgSelectMinor),
  "SendMajor": () => (/* reexport */ SvgSendMajor),
  "SettingsFilledMinor": () => (/* reexport */ SvgSettingsFilledMinor),
  "SettingsMajor": () => (/* reexport */ SvgSettingsMajor),
  "SettingsMinor": () => (/* reexport */ SvgSettingsMinor),
  "ShareIosMinor": () => (/* reexport */ SvgShareIosMinor),
  "ShareMinor": () => (/* reexport */ SvgShareMinor),
  "ShipmentFilledMajor": () => (/* reexport */ SvgShipmentFilledMajor),
  "ShipmentMajor": () => (/* reexport */ SvgShipmentMajor),
  "ShopcodesMajor": () => (/* reexport */ SvgShopcodesMajor),
  "SidebarLeftMajor": () => (/* reexport */ SvgSidebarLeftMajor),
  "SidebarRightMajor": () => (/* reexport */ SvgSidebarRightMajor),
  "SidekickMajor": () => (/* reexport */ SvgSidekickMajor),
  "SimplifyMajor": () => (/* reexport */ SvgSimplifyMajor),
  "SimplifyMinor": () => (/* reexport */ SvgSimplifyMinor),
  "SlideshowMajor": () => (/* reexport */ SvgSlideshowMajor),
  "SmileyHappyMajor": () => (/* reexport */ SvgSmileyHappyMajor),
  "SmileyJoyMajor": () => (/* reexport */ SvgSmileyJoyMajor),
  "SmileyNeutralMajor": () => (/* reexport */ SvgSmileyNeutralMajor),
  "SmileySadMajor": () => (/* reexport */ SvgSmileySadMajor),
  "SnapchatMinor": () => (/* reexport */ SvgSnapchatMinor),
  "SocialAdMajor": () => (/* reexport */ SvgSocialAdMajor),
  "SocialPostMajor": () => (/* reexport */ SvgSocialPostMajor),
  "SoftPackMajor": () => (/* reexport */ SvgSoftPackMajor),
  "SortAscendingMajor": () => (/* reexport */ SvgSortAscendingMajor),
  "SortDescendingMajor": () => (/* reexport */ SvgSortDescendingMajor),
  "SortMinor": () => (/* reexport */ SvgSortMinor),
  "SoundMajor": () => (/* reexport */ SvgSoundMajor),
  "StarFilledMinor": () => (/* reexport */ SvgStarFilledMinor),
  "StarOutlineMinor": () => (/* reexport */ SvgStarOutlineMinor),
  "StatusActiveMajor": () => (/* reexport */ SvgStatusActiveMajor),
  "StopMajor": () => (/* reexport */ SvgStopMajor),
  "StoreDetailsFilledMinor": () => (/* reexport */ SvgStoreDetailsFilledMinor),
  "StoreDetailsMinor": () => (/* reexport */ SvgStoreDetailsMinor),
  "StoreFilledMinor": () => (/* reexport */ SvgStoreFilledMinor),
  "StoreMajor": () => (/* reexport */ SvgStoreMajor),
  "StoreMinor": () => (/* reexport */ SvgStoreMinor),
  "StoreStatusMajor": () => (/* reexport */ SvgStoreStatusMajor),
  "TabletMajor": () => (/* reexport */ SvgTabletMajor),
  "TapChipMajor": () => (/* reexport */ SvgTapChipMajor),
  "TaxFilledMajor": () => (/* reexport */ SvgTaxFilledMajor),
  "TaxMajor": () => (/* reexport */ SvgTaxMajor),
  "TeamMajor": () => (/* reexport */ SvgTeamMajor),
  "TemplateMajor": () => (/* reexport */ SvgTemplateMajor),
  "TemplateMinor": () => (/* reexport */ SvgTemplateMinor),
  "TextAlignmentCenterMajor": () => (/* reexport */ SvgTextAlignmentCenterMajor),
  "TextAlignmentLeftMajor": () => (/* reexport */ SvgTextAlignmentLeftMajor),
  "TextAlignmentRightMajor": () => (/* reexport */ SvgTextAlignmentRightMajor),
  "TextBlockMajor": () => (/* reexport */ SvgTextBlockMajor),
  "TextColorMajor": () => (/* reexport */ SvgTextColorMajor),
  "TextColorMinor": () => (/* reexport */ SvgTextColorMinor),
  "TextMajor": () => (/* reexport */ SvgTextMajor),
  "ThemeEditMajor": () => (/* reexport */ SvgThemeEditMajor),
  "ThemeStoreMajor": () => (/* reexport */ SvgThemeStoreMajor),
  "ThemesMajor": () => (/* reexport */ SvgThemesMajor),
  "ThumbsDownMajor": () => (/* reexport */ SvgThumbsDownMajor),
  "ThumbsDownMinor": () => (/* reexport */ SvgThumbsDownMinor),
  "ThumbsUpMajor": () => (/* reexport */ SvgThumbsUpMajor),
  "ThumbsUpMinor": () => (/* reexport */ SvgThumbsUpMinor),
  "TickMinor": () => (/* reexport */ SvgTickMinor),
  "TickSmallMinor": () => (/* reexport */ TickSmallMinor_svg.S),
  "TiktokMinor": () => (/* reexport */ SvgTiktokMinor),
  "TimeDecayModelMinor": () => (/* reexport */ SvgTimeDecayModelMinor),
  "TimelineAttachmentMajor": () => (/* reexport */ SvgTimelineAttachmentMajor),
  "TipsMajor": () => (/* reexport */ SvgTipsMajor),
  "TitleMinor": () => (/* reexport */ SvgTitleMinor),
  "ToggleMinor": () => (/* reexport */ SvgToggleMinor),
  "ToolsMajor": () => (/* reexport */ SvgToolsMajor),
  "TransactionFeeDollarMajor": () => (/* reexport */ SvgTransactionFeeDollarMajor),
  "TransactionFeeEuroMajor": () => (/* reexport */ SvgTransactionFeeEuroMajor),
  "TransactionFeePoundMajor": () => (/* reexport */ SvgTransactionFeePoundMajor),
  "TransactionFeeRupeeMajor": () => (/* reexport */ SvgTransactionFeeRupeeMajor),
  "TransactionFeeYenMajor": () => (/* reexport */ SvgTransactionFeeYenMajor),
  "TransactionMajor": () => (/* reexport */ SvgTransactionMajor),
  "TransferFilledMajor": () => (/* reexport */ SvgTransferFilledMajor),
  "TransferInMajor": () => (/* reexport */ SvgTransferInMajor),
  "TransferMajor": () => (/* reexport */ SvgTransferMajor),
  "TransferOutMajor": () => (/* reexport */ SvgTransferOutMajor),
  "TransferWithinShopifyMajor": () => (/* reexport */ SvgTransferWithinShopifyMajor),
  "TranslateMajor": () => (/* reexport */ SvgTranslateMajor),
  "TransportMajor": () => (/* reexport */ SvgTransportMajor),
  "TroubleshootMajor": () => (/* reexport */ SvgTroubleshootMajor),
  "TumblrMinor": () => (/* reexport */ SvgTumblrMinor),
  "TwitchMinor": () => (/* reexport */ SvgTwitchMinor),
  "TwitterMinor": () => (/* reexport */ SvgTwitterMinor),
  "TypeMajor": () => (/* reexport */ SvgTypeMajor),
  "TypeMinor": () => (/* reexport */ SvgTypeMinor),
  "UnderlineMajor": () => (/* reexport */ SvgUnderlineMajor),
  "UnderlineMinor": () => (/* reexport */ SvgUnderlineMinor),
  "UndoMajor": () => (/* reexport */ SvgUndoMajor),
  "UnfulfilledMajor": () => (/* reexport */ SvgUnfulfilledMajor),
  "UnknownDeviceMajor": () => (/* reexport */ SvgUnknownDeviceMajor),
  "UpdateInventoryMajor": () => (/* reexport */ SvgUpdateInventoryMajor),
  "UploadMajor": () => (/* reexport */ SvgUploadMajor),
  "VariantMajor": () => (/* reexport */ SvgVariantMajor),
  "ViewMajor": () => (/* reexport */ SvgViewMajor),
  "ViewMinor": () => (/* reexport */ ViewMinor_svg.S),
  "ViewportNarrowMajor": () => (/* reexport */ SvgViewportNarrowMajor),
  "ViewportShortMajor": () => (/* reexport */ SvgViewportShortMajor),
  "ViewportTallMajor": () => (/* reexport */ SvgViewportTallMajor),
  "ViewportWideMajor": () => (/* reexport */ SvgViewportWideMajor),
  "VimeoMinor": () => (/* reexport */ SvgVimeoMinor),
  "VocabularyMajor": () => (/* reexport */ SvgVocabularyMajor),
  "VolumeMinor": () => (/* reexport */ SvgVolumeMinor),
  "WandMajor": () => (/* reexport */ SvgWandMajor),
  "WandMinor": () => (/* reexport */ WandMinor_svg.S),
  "WearableMajor": () => (/* reexport */ SvgWearableMajor),
  "WeightMinor": () => (/* reexport */ SvgWeightMinor),
  "WholesaleMajor": () => (/* reexport */ SvgWholesaleMajor),
  "WifiMajor": () => (/* reexport */ SvgWifiMajor),
  "YoutubeMinor": () => (/* reexport */ SvgYoutubeMinor)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
;// CONCATENATED MODULE: ../polaris-icons/dist/icons/AbandonedCartFilledMajor.svg.mjs


var SvgAbandonedCartFilledMajor = function SvgAbandonedCartFilledMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M2.5 3.75a.75.75 0 0 1 .75-.75h1.612a1.75 1.75 0 0 1 1.732 1.5h9.656a.75.75 0 0 1 .748.808l-.358 4.653a2.75 2.75 0 0 1-2.742 2.539h-6.351l.093.78a.25.25 0 0 0 .248.22h6.362a.75.75 0 0 1 0 1.5h-6.362a1.75 1.75 0 0 1-1.738-1.543l-1.04-8.737a.25.25 0 0 0-.248-.22h-1.612a.75.75 0 0 1-.75-.75Zm6.708 2.458a.625.625 0 0 0 0 .884l1.408 1.408-1.408 1.408a.625.625 0 1 0 .884.884l1.408-1.408 1.408 1.408a.625.625 0 1 0 .884-.884l-1.408-1.408 1.408-1.408a.625.625 0 0 0-.884-.884l-1.408 1.408-1.408-1.408a.625.625 0 0 0-.884 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }));
};
SvgAbandonedCartFilledMajor.displayName = "AbandonedCartFilledMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/AbandonedCartMajor.svg.mjs


var SvgAbandonedCartMajor = function SvgAbandonedCartMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M3.25 3a.75.75 0 0 0 0 1.5h1.612a.25.25 0 0 1 .248.22l1.04 8.737a1.75 1.75 0 0 0 1.738 1.543h6.362a.75.75 0 0 0 0-1.5h-6.362a.25.25 0 0 1-.248-.22l-.093-.78h6.35a2.75 2.75 0 0 0 2.743-2.54l.358-4.652a.75.75 0 0 0-1.496-.116l-.358 4.654a1.25 1.25 0 0 1-1.246 1.154h-6.53l-.768-6.457a1.75 1.75 0 0 0-1.738-1.543h-1.612Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M8.87 5.12a.75.75 0 0 0 0 1.06l1.32 1.32-1.32 1.32a.75.75 0 1 0 1.06 1.06l1.32-1.32 1.32 1.32a.75.75 0 0 0 1.06-1.06l-1.32-1.32 1.32-1.32a.75.75 0 0 0-1.06-1.06l-1.32 1.32-1.32-1.32a.75.75 0 0 0-1.06 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M15 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }));
};
SvgAbandonedCartMajor.displayName = "AbandonedCartMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/AccessibilityMajor.svg.mjs


var SvgAccessibilityMajor = function SvgAccessibilityMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M4.779 9.165c-.221.453-.279.753-.279.835 0 .082.058.382.279.835.21.427.533.925.983 1.398.89.937 2.264 1.767 4.238 1.767a.75.75 0 0 1 0 1.5c-2.444 0-4.196-1.045-5.325-2.233a7.204 7.204 0 0 1-1.243-1.773c-.26-.532-.432-1.076-.432-1.494 0-.418.171-.962.432-1.494a7.205 7.205 0 0 1 1.243-1.773c1.13-1.188 2.88-2.233 5.325-2.233 2.432 0 4.12.972 5.224 2.1 1.083 1.107 1.6 2.355 1.754 2.968a.75.75 0 0 1-1.456.364c-.096-.387-.495-1.389-1.37-2.282-.853-.872-2.166-1.65-4.152-1.65-1.974 0-3.348.83-4.238 1.767-.45.472-.774.971-.983 1.398Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M18.28 12.78a.75.75 0 1 0-1.06-1.06l-2.97 2.97-1.22-1.22a.75.75 0 1 0-1.06 1.06l1.75 1.75a.75.75 0 0 0 1.06 0l3.5-3.5Z"
  }));
};
SvgAccessibilityMajor.displayName = "AccessibilityMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ActivitiesMajor.svg.mjs


var SvgActivitiesMajor = function SvgActivitiesMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M2.76 9.882a.756.756 0 0 0-.008.179 7.25 7.25 0 1 0 14.495 0 .762.762 0 0 0-.006-.179 7.25 7.25 0 0 0-14.482 0Zm3.518-4.015a5.726 5.726 0 0 1 2.972-1.319v4.702h-1.77a7.471 7.471 0 0 0-1.202-3.383Zm-1.044 1.165a5.717 5.717 0 0 0-.897 2.218h1.634a5.98 5.98 0 0 0-.737-2.218Zm.737 3.718h-1.7c.078.9.363 1.742.808 2.476a5.98 5.98 0 0 0 .892-2.476Zm.092 3.691a5.73 5.73 0 0 0 3.187 1.51v-5.201h-1.77a7.468 7.468 0 0 1-1.417 3.691Zm9.6-5.191a5.718 5.718 0 0 0-.887-2.203 5.98 5.98 0 0 0-.73 2.203h1.617Zm-3.126 0a7.472 7.472 0 0 1 1.197-3.373 5.726 5.726 0 0 0-2.984-1.329v4.702h1.787Zm-1.787 1.5h1.787a7.47 7.47 0 0 0 1.41 3.681 5.731 5.731 0 0 1-3.197 1.52v-5.201Zm4.979 0a5.715 5.715 0 0 1-.8 2.461 5.975 5.975 0 0 1-.882-2.461h1.682Z"
  }));
};
SvgActivitiesMajor.displayName = "ActivitiesMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/AddCodeMajor.svg.mjs


var SvgAddCodeMajor = function SvgAddCodeMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M7.03 7.28a.75.75 0 0 0-1.06-1.06l-3.25 3.25a.75.75 0 0 0 0 1.06l3.25 3.25a.75.75 0 0 0 1.06-1.06l-2.72-2.72 2.72-2.72Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.97 13.78a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 0 0 0-1.06l-3.25-3.25a.75.75 0 1 0-1.06 1.06l2.72 2.72-2.72 2.72a.75.75 0 0 0 0 1.06Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10 6.75a.75.75 0 0 1 .75.75v1.75h1.75a.75.75 0 0 1 0 1.5h-1.75v1.75a.75.75 0 0 1-1.5 0v-1.75h-1.75a.75.75 0 0 1 0-1.5h1.75v-1.75a.75.75 0 0 1 .75-.75Z"
  }));
};
SvgAddCodeMajor.displayName = "AddCodeMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/AddImageMajor.svg.mjs


var SvgAddImageMajor = function SvgAddImageMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M9.018 3.5h1.964c.813 0 1.469 0 2 .043.546.045 1.026.14 1.47.366a3.75 3.75 0 0 1 1.64 1.639c.226.444.32.924.365 1.47.043.531.043 1.187.043 2v.232a.75.75 0 0 1-1.5 0v-.2c0-.852 0-1.447-.038-1.91-.037-.453-.107-.714-.207-.911a2.25 2.25 0 0 0-.984-.984c-.197-.1-.458-.17-.912-.207-.462-.037-1.056-.038-1.909-.038h-1.9c-.852 0-1.447 0-1.91.038-.453.037-.714.107-.911.207a2.25 2.25 0 0 0-.984.984c-.1.197-.17.458-.207.912-.037.462-.038 1.057-.038 1.909v1.39l1.013-1.013a1.75 1.75 0 0 1 2.474 0l2.763 2.762 1.47-1.47a.75.75 0 1 1 1.06 1.061l-2 2a.75.75 0 0 1-1.06 0l-3.293-3.293a.25.25 0 0 0-.354 0l-2.054 2.055c.005.113.011.218.02.317.036.454.106.715.206.912.216.424.56.768.984.984.197.1.458.17.912.207.462.037 1.057.038 1.909.038h1.2a.75.75 0 0 1 0 1.5h-1.232c-.813 0-1.469 0-2-.043-.546-.045-1.026-.14-1.47-.366a3.75 3.75 0 0 1-1.64-1.639c-.226-.444-.32-.924-.365-1.47a11.671 11.671 0 0 1-.03-.597.754.754 0 0 1-.006-.234c-.007-.348-.007-.736-.007-1.169v-1.964c0-.813 0-1.469.043-2 .045-.546.14-1.026.366-1.47a3.75 3.75 0 0 1 1.639-1.64c.444-.226.924-.32 1.47-.365.531-.043 1.187-.043 2-.043Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M15.75 11.25a.75.75 0 0 1 .75.75v1.75h1.75a.75.75 0 0 1 0 1.5h-1.75v1.75a.75.75 0 0 1-1.5 0v-1.75h-1.75a.75.75 0 0 1 0-1.5h1.75v-1.75a.75.75 0 0 1 .75-.75Z"
  }));
};
SvgAddImageMajor.displayName = "AddImageMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/AddMajor.svg.mjs


var SvgAddMajor = function SvgAddMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10.75 6.75a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z"
  }));
};
SvgAddMajor.displayName = "AddMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/AddNoteMajor.svg.mjs


var SvgAddNoteMajor = function SvgAddNoteMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M3.5 6.25a2.75 2.75 0 0 1 2.75-2.75h7.5a2.75 2.75 0 0 1 2.75 2.75v4.52a.75.75 0 0 1-1.5 0v-4.52c0-.69-.56-1.25-1.25-1.25h-7.5c-.69 0-1.25.56-1.25 1.25v7.5c0 .69.56 1.25 1.25 1.25h4.92a.75.75 0 0 1 0 1.5h-4.92a2.75 2.75 0 0 1-2.75-2.75v-7.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M15.75 12.5a.75.75 0 0 1 .75.75v1.25h1.25a.75.75 0 0 1 0 1.5h-1.25v1.25a.75.75 0 0 1-1.5 0v-1.25h-1.25a.75.75 0 0 1 0-1.5h1.25v-1.25a.75.75 0 0 1 .75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.55 7.25a.7.7 0 0 1 .7-.7h5.5a.7.7 0 1 1 0 1.4h-5.5a.7.7 0 0 1-.7-.7Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M7 9.05a.7.7 0 1 0 0 1.4h2.25a.7.7 0 1 0 0-1.4h-2.25Z"
  }));
};
SvgAddNoteMajor.displayName = "AddNoteMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/AddProductMajor.svg.mjs


var SvgAddProductMajor = function SvgAddProductMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11.276 3.5a3.75 3.75 0 0 0-2.701 1.149l-4.254 4.417a2.75 2.75 0 0 0 .036 3.852l2.898 2.898a2.5 2.5 0 0 0 3.502.033l.45-.434a.75.75 0 1 0-1.04-1.08l-.45.434a1 1 0 0 1-1.401-.014l-2.898-2.898a1.25 1.25 0 0 1-.016-1.75l4.253-4.418a2.25 2.25 0 0 1 1.62-.689h1.975c.966 0 1.75.784 1.75 1.75v2.371c0 .358-.146.7-.403.948a.75.75 0 1 0 1.04 1.08 2.81 2.81 0 0 0 .863-2.028v-2.371a3.25 3.25 0 0 0-3.25-3.25h-1.974Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14.75 12a.75.75 0 0 1 .75.75v1.25h1.25a.75.75 0 0 1 0 1.5h-1.25v1.25a.75.75 0 0 1-1.5 0v-1.25h-1.25a.75.75 0 0 1 0-1.5h1.25v-1.25a.75.75 0 0 1 .75-.75Z"
  }));
};
SvgAddProductMajor.displayName = "AddProductMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/AdjustMinor.svg.mjs


var SvgAdjustMinor = function SvgAdjustMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M9.095 6.25a3.001 3.001 0 0 1 5.81 0h1.345a.75.75 0 0 1 0 1.5h-1.345a3.001 3.001 0 0 1-5.81 0h-5.345a.75.75 0 0 1 0-1.5h5.345Zm1.405.75a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M8 16a3.001 3.001 0 0 0 2.905-2.25h5.345a.75.75 0 0 0 0-1.5h-5.345a3.001 3.001 0 0 0-5.81 0h-1.345a.75.75 0 0 0 0 1.5h1.345a3.001 3.001 0 0 0 2.905 2.25Zm1.5-3a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
  }));
};
SvgAdjustMinor.displayName = "AdjustMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/AffiliateMajor.svg.mjs


var SvgAffiliateMajor = function SvgAffiliateMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M16.5 6a2.5 2.5 0 0 1-3.656 2.217l-2.896 2.896c.35.544.552 1.192.552 1.887v.023l1.148.128a2.501 2.501 0 1 1-.062 1.502l-1.419-.158v-.005a3.5 3.5 0 1 1-4.372-4.777l-.17-1.24a2.5 2.5 0 1 1 1.483-.231l.173 1.27a3.48 3.48 0 0 1 1.606.54l2.896-2.896a2.5 2.5 0 1 1 4.717-1.156Zm-1.5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-8 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm7 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-7-9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }));
};
SvgAffiliateMajor.displayName = "AffiliateMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/AlertMinor.svg.mjs


var SvgAlertMinor = function SvgAlertMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11 13.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10.75 6.25a.75.75 0 0 0-1.5 0v4.5a.75.75 0 1 0 1.5 0v-4.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"
  }));
};
SvgAlertMinor.displayName = "AlertMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/AnalyticsBarHorizontalMinor.svg.mjs


var SvgAnalyticsBarHorizontalMinor = function SvgAnalyticsBarHorizontalMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M11 5.452v.096c0 .182 0 .371-.034.544a1.75 1.75 0 0 1-1.375 1.374 2.824 2.824 0 0 1-.543.034h-3.596c-.182 0-.371 0-.543-.034a1.75 1.75 0 0 1-1.375-1.375 2.825 2.825 0 0 1-.034-.543v-.096c0-.182 0-.371.034-.543a1.75 1.75 0 0 1 1.375-1.375c.172-.035.361-.034.543-.034h3.596c.182 0 .371 0 .543.034a1.75 1.75 0 0 1 1.375 1.375c.035.172.034.361.034.543Zm-1.505-.253a.25.25 0 0 0-.194-.194 8.216 8.216 0 0 0-.3-.005h-3.501a8.216 8.216 0 0 0-.3.005.25.25 0 0 0-.195.194 8.217 8.217 0 0 0-.005.3 8.216 8.216 0 0 0 .005.302.25.25 0 0 0 .194.194l.053.003c.055.002.127.002.248.002h3.5a8.207 8.207 0 0 0 .3-.005.25.25 0 0 0 .195-.194 8.216 8.216 0 0 0 .005-.3 8.217 8.217 0 0 0-.005-.302Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M16.5 9.952v.096c0 .182 0 .371-.034.543a1.75 1.75 0 0 1-1.375 1.376 2.825 2.825 0 0 1-.543.033h-9.096c-.182 0-.371 0-.543-.034a1.75 1.75 0 0 1-1.375-1.374 2.826 2.826 0 0 1-.034-.544v-.096c0-.182 0-.371.034-.543a1.75 1.75 0 0 1 1.375-1.375c.172-.035.361-.034.543-.034h9.096c.182 0 .371 0 .543.034a1.75 1.75 0 0 1 1.375 1.375c.035.172.034.361.034.543Zm-1.505-.253a.25.25 0 0 0-.194-.194 8.221 8.221 0 0 0-.3-.005h-9.001a8.216 8.216 0 0 0-.3.005.25.25 0 0 0-.195.194 8.217 8.217 0 0 0-.005.3 8.221 8.221 0 0 0 .005.302.25.25 0 0 0 .194.194l.053.003c.055.002.127.002.248.002h9c.121 0 .193 0 .248-.002l.053-.003a.25.25 0 0 0 .194-.194l.003-.053a8.05 8.05 0 0 0 .002-.248c0-.121 0-.193-.002-.248l-.003-.053Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M14 14.5v-.048c0-.182 0-.371-.034-.543a1.75 1.75 0 0 0-1.375-1.375c-.172-.035-.361-.034-.543-.034h-6.596c-.182 0-.371 0-.543.034a1.75 1.75 0 0 0-1.375 1.375 2.826 2.826 0 0 0-.034.543v.096c0 .182 0 .371.034.543a1.75 1.75 0 0 0 1.375 1.376c.172.034.361.033.543.033h6.596c.182 0 .371 0 .543-.034a1.75 1.75 0 0 0 1.375-1.375c.035-.172.034-.36.034-.543v-.048Zm-1.7-.495a.25.25 0 0 1 .195.194l.003.053c.002.055.002.127.002.248s0 .194-.002.248l-.003.053a.25.25 0 0 1-.194.194l-.053.003a8.05 8.05 0 0 1-.248.002h-6.5c-.121 0-.193 0-.248-.002l-.053-.003a.25.25 0 0 1-.194-.194 8.221 8.221 0 0 1-.005-.3 8.217 8.217 0 0 1 .005-.302.25.25 0 0 1 .194-.194l.053-.003c.055-.002.127-.002.248-.002h6.5a8.05 8.05 0 0 1 .3.005h-.001.002Z"
  }));
};
SvgAnalyticsBarHorizontalMinor.displayName = "AnalyticsBarHorizontalMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/AnalyticsBarStackedMinor.svg.mjs


var SvgAnalyticsBarStackedMinor = function SvgAnalyticsBarStackedMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M5.25 5.75a2.25 2.25 0 0 0-2.25 2.25v4a2.25 2.25 0 0 0 2.25 2.25h9.5a2.25 2.25 0 0 0 2.25-2.25v-4a2.25 2.25 0 0 0-2.25-2.25h-9.5Zm-.75 2.25a.75.75 0 0 1 .75-.75h4.75v5.5h-4.75a.75.75 0 0 1-.75-.75v-4Zm8.5 4.75h1.75a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 0-.75-.75h-1.75v5.5Z"
  }));
};
SvgAnalyticsBarStackedMinor.displayName = "AnalyticsBarStackedMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/AnalyticsCohortMinor.svg.mjs


var SvgAnalyticsCohortMinor = function SvgAnalyticsCohortMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M4.5 3.25c-.69 0-1.25.56-1.25 1.25v11c0 .69.56 1.25 1.25 1.25h3c.69 0 1.25-.56 1.25-1.25v-2.75h2.75c.69 0 1.25-.56 1.25-1.25v-2.75h2.75c.69 0 1.25-.56 1.25-1.25v-3c0-.69-.56-1.25-1.25-1.25h-11Zm4.25 8h2.5v-2.5h-2.5v2.5Zm-4 1.5v2.5h2.5v-2.5h-2.5Zm0-1.5h2.5v-2.5h-2.5v2.5Zm6.5-4h-2.5v-2.5h2.5v2.5Zm-6.5 0h2.5v-2.5h-2.5v2.5Zm10.5 0h-2.5v-2.5h2.5v2.5Z"
  }));
};
SvgAnalyticsCohortMinor.displayName = "AnalyticsCohortMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/AnalyticsDonutMinor.svg.mjs


var SvgAnalyticsDonutMinor = function SvgAnalyticsDonutMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M17.938 9.003c.068.547-.386.997-.938.997a7 7 0 1 1-7-7v1.5a5.5 5.5 0 1 0 5.5 5.5h-2.5a3 3 0 1 1-3-3v-4c0-.552.45-1.007.997-.938a8 8 0 0 1 6.94 6.94Zm-1.613-.503a6.503 6.503 0 0 0-4.825-4.825v3.612a3.099 3.099 0 0 1 1.213 1.213h3.612Zm-6.325 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
  }));
};
SvgAnalyticsDonutMinor.displayName = "AnalyticsDonutMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/AnalyticsFilledMinor.svg.mjs


var SvgAnalyticsFilledMinor = function SvgAnalyticsFilledMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M9.983 4c-.101 0-.212 0-.308.006a1.262 1.262 0 0 0-.403.09 1.25 1.25 0 0 0-.677.676 1.262 1.262 0 0 0-.088.403 4.73 4.73 0 0 0-.007.308v10.034c0 .101 0 .212.007.308.007.108.025.25.088.403.127.307.37.55.677.677.152.063.295.081.403.088.096.007.206.007.308.007h.034c.101 0 .212 0 .308-.006a1.246 1.246 0 0 0 1.08-.766c.063-.152.081-.295.088-.403.007-.096.007-.207.007-.308v-10.034c0-.101 0-.212-.007-.308a1.266 1.266 0 0 0-.088-.403 1.25 1.25 0 0 0-.677-.677 1.262 1.262 0 0 0-.403-.088 4.728 4.728 0 0 0-.308-.007h-.034Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M5.483 9c-.101 0-.212 0-.308.007a1.262 1.262 0 0 0-.403.088 1.25 1.25 0 0 0-.677.677 1.263 1.263 0 0 0-.088.403 4.728 4.728 0 0 0-.007.308v5.034c0 .101 0 .212.006.308a1.246 1.246 0 0 0 .766 1.08c.152.063.295.081.403.088.096.007.207.007.308.007h.034c.101 0 .212 0 .308-.006a1.246 1.246 0 0 0 1.08-.766 1.28 1.28 0 0 0 .089-.403c.006-.096.006-.207.006-.308v-5.034c0-.101 0-.212-.006-.308a1.263 1.263 0 0 0-.09-.403 1.25 1.25 0 0 0-.676-.677 1.262 1.262 0 0 0-.403-.088 4.73 4.73 0 0 0-.308-.007h-.034Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14.483 6c-.101 0-.212 0-.308.006a1.262 1.262 0 0 0-.403.09 1.25 1.25 0 0 0-.677.676 1.264 1.264 0 0 0-.088.403c-.007.096-.007.207-.007.308v8.034c0 .101 0 .212.007.308.007.108.025.25.088.403.127.307.37.55.677.677.152.063.296.081.403.088.096.007.207.007.308.007h.034c.101 0 .212 0 .308-.006a1.246 1.246 0 0 0 1.08-.766c.063-.152.081-.295.088-.403.007-.096.007-.207.007-.308v-8.034c0-.101 0-.212-.007-.308a1.266 1.266 0 0 0-.088-.403 1.25 1.25 0 0 0-.677-.677 1.262 1.262 0 0 0-.403-.088 4.728 4.728 0 0 0-.308-.007h-.034Z"
  }));
};
SvgAnalyticsFilledMinor.displayName = "AnalyticsFilledMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/AnalyticsFunnelMinor.svg.mjs


var SvgAnalyticsFunnelMinor = function SvgAnalyticsFunnelMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M3.758 6.681a2.75 2.75 0 0 1 2.588-3.681h7.308a2.75 2.75 0 0 1 2.588 3.681l-3.06 8.5a2.75 2.75 0 0 1-2.588 1.819h-1.188a2.75 2.75 0 0 1-2.588-1.819l-3.06-8.5Zm2.588-2.181a1.25 1.25 0 0 0-1.176 1.673l.297.827h9.066l.298-.827a1.25 1.25 0 0 0-1.177-1.673h-7.308Zm.651 6.75-.99-2.75h7.986l-.99 2.75h-6.006Zm.54 1.5.693 1.923a1.25 1.25 0 0 0 1.176.827h1.188c.527 0 .998-.33 1.177-.827l.692-1.923h-4.926Z"
  }));
};
SvgAnalyticsFunnelMinor.displayName = "AnalyticsFunnelMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/AnalyticsLineMinor.svg.mjs


var SvgAnalyticsLineMinor = function SvgAnalyticsLineMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M8.447 4.5a.923.923 0 0 0-.908.757l-1.002 5.487a2.75 2.75 0 0 1-2.705 2.256h-.082a.75.75 0 0 1 0-1.5h.082a1.25 1.25 0 0 0 1.23-1.025l1.001-5.487a2.423 2.423 0 0 1 4.8.255l.716 9.612a.697.697 0 0 0 1.383.063l.52-3.12a2.75 2.75 0 0 1 2.712-2.298h.056a.75.75 0 0 1 0 1.5h-.056a1.25 1.25 0 0 0-1.233 1.044l-.52 3.12a2.197 2.197 0 0 1-4.358-.198l-.716-9.612a.923.923 0 0 0-.92-.854Z"
  }));
};
SvgAnalyticsLineMinor.displayName = "AnalyticsLineMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/AnalyticsMajor.svg.mjs


var SvgAnalyticsMajor = function SvgAnalyticsMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M9.952 3.5h.096c.182 0 .371 0 .543.034a1.75 1.75 0 0 1 1.375 1.375c.035.172.034.361.034.543v9.096c0 .182 0 .371-.034.543a1.75 1.75 0 0 1-1.375 1.376 2.825 2.825 0 0 1-.543.033h-.096c-.182 0-.371 0-.543-.034a1.75 1.75 0 0 1-1.375-1.375 2.825 2.825 0 0 1-.034-.543v-9.096c0-.182 0-.371.034-.543a1.75 1.75 0 0 1 1.375-1.375c.172-.035.361-.034.543-.034Zm-.253 1.505a.25.25 0 0 0-.194.194 8.217 8.217 0 0 0-.005.3v9.001a8.221 8.221 0 0 0 .005.3.25.25 0 0 0 .194.195l.053.003c.055.002.127.002.248.002s.193 0 .248-.002l.053-.003a.25.25 0 0 0 .194-.194l.003-.053a8.05 8.05 0 0 0 .002-.248v-9c0-.121 0-.193-.002-.248l-.003-.053a.25.25 0 0 0-.194-.194 8.217 8.217 0 0 0-.3-.005 8.216 8.216 0 0 0-.302.005Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M5.452 9h.096c.182 0 .371 0 .543.034a1.75 1.75 0 0 1 1.375 1.375c.035.172.034.361.034.543v3.596c0 .182 0 .371-.034.543a1.75 1.75 0 0 1-1.375 1.376 2.825 2.825 0 0 1-.543.033h-.096c-.182 0-.371 0-.543-.034a1.75 1.75 0 0 1-1.375-1.375 2.825 2.825 0 0 1-.034-.543v-3.596c0-.182 0-.371.034-.543a1.75 1.75 0 0 1 1.375-1.375c.172-.035.361-.034.543-.034Zm-.253 1.505a.25.25 0 0 0-.194.194 8.217 8.217 0 0 0-.005.3v3.501a8.221 8.221 0 0 0 .005.3.25.25 0 0 0 .194.195l.053.003c.055.002.127.002.248.002s.193 0 .248-.002l.053-.003a.25.25 0 0 0 .194-.194l.003-.053c.002-.054.002-.127.002-.248v-3.5a8.217 8.217 0 0 0-.005-.3.25.25 0 0 0-.194-.195 8.045 8.045 0 0 0-.3-.005 8.045 8.045 0 0 0-.302.005Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M14.5 6h-.048c-.182 0-.371 0-.543.034a1.75 1.75 0 0 0-1.375 1.375 2.825 2.825 0 0 0-.034.543v6.596c0 .182 0 .371.034.543a1.75 1.75 0 0 0 1.375 1.376c.172.034.361.033.543.033h.096c.182 0 .371 0 .543-.034a1.75 1.75 0 0 0 1.375-1.375c.035-.172.034-.36.034-.543v-6.596c0-.182 0-.371-.034-.543a1.75 1.75 0 0 0-1.375-1.375c-.172-.035-.361-.034-.543-.034h-.048Zm-.495 1.7a.25.25 0 0 1 .194-.195 8.217 8.217 0 0 1 .3-.005 8.221 8.221 0 0 1 .302.005.25.25 0 0 1 .194.194l.003.053c.002.055.002.127.002.248v6.5c0 .121 0 .194-.002.248l-.003.053a.25.25 0 0 1-.194.194l-.053.003a8.05 8.05 0 0 1-.248.002c-.121 0-.193 0-.248-.002l-.053-.003a.25.25 0 0 1-.194-.194l-.003-.053a8.05 8.05 0 0 1-.002-.248v-6.5c0-.121 0-.193.002-.248l.003-.053v.002-.002Z"
  }));
};
SvgAnalyticsMajor.displayName = "AnalyticsMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/AnalyticsMinor.svg.mjs


var SvgAnalyticsMinor = function SvgAnalyticsMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M9.952 3.5h.096c.182 0 .371 0 .543.034a1.75 1.75 0 0 1 1.375 1.375c.035.172.034.361.034.543v9.096c0 .182 0 .371-.034.543a1.75 1.75 0 0 1-1.375 1.375c-.172.035-.361.034-.543.034h-.096c-.182 0-.371 0-.543-.034a1.75 1.75 0 0 1-1.375-1.375 2.824 2.824 0 0 1-.034-.543v-9.096c0-.182 0-.371.034-.543a1.75 1.75 0 0 1 1.375-1.375c.172-.035.361-.034.543-.034Zm-.253 1.505a.25.25 0 0 0-.194.194 8.216 8.216 0 0 0-.005.3v9.001a8.217 8.217 0 0 0 .005.3.25.25 0 0 0 .194.195l.053.003c.055.002.127.002.248.002a8.046 8.046 0 0 0 .3-.005.25.25 0 0 0 .195-.194l.003-.053c.002-.055.002-.127.002-.248v-9a8.046 8.046 0 0 0-.005-.3.25.25 0 0 0-.194-.195 8.217 8.217 0 0 0-.3-.005 8.216 8.216 0 0 0-.302.005Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M5.452 9h.096c.182 0 .371 0 .543.034a1.75 1.75 0 0 1 1.375 1.375c.035.172.034.361.034.543v3.596c0 .182 0 .371-.034.543a1.75 1.75 0 0 1-1.375 1.375c-.172.035-.361.034-.543.034h-.096c-.182 0-.371 0-.543-.034a1.75 1.75 0 0 1-1.375-1.375 2.824 2.824 0 0 1-.034-.543v-3.596c0-.182 0-.371.034-.543a1.75 1.75 0 0 1 1.375-1.375c.172-.035.361-.034.543-.034Zm-.253 1.505a.25.25 0 0 0-.194.194 8.221 8.221 0 0 0-.005.3v3.501a8.217 8.217 0 0 0 .005.3.25.25 0 0 0 .194.195l.053.003c.055.002.127.002.248.002a8.045 8.045 0 0 0 .3-.005.25.25 0 0 0 .195-.194l.003-.053c.002-.055.002-.127.002-.248v-3.5a8.212 8.212 0 0 0-.005-.3.25.25 0 0 0-.194-.195l-.053-.003a8.045 8.045 0 0 0-.248-.002c-.121 0-.193 0-.248.002l-.053.003Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M14.5 6h-.048c-.182 0-.371 0-.543.034a1.75 1.75 0 0 0-1.375 1.375 2.825 2.825 0 0 0-.034.543v6.596c0 .182 0 .371.034.543a1.75 1.75 0 0 0 1.375 1.375c.172.035.361.034.543.034h.096c.182 0 .371 0 .543-.034a1.75 1.75 0 0 0 1.375-1.375c.035-.172.034-.361.034-.543v-6.596c0-.182 0-.371-.034-.543a1.75 1.75 0 0 0-1.375-1.375 2.824 2.824 0 0 0-.543-.034h-.048Zm-.495 1.7a.25.25 0 0 1 .194-.195 8.221 8.221 0 0 1 .3-.005 8.217 8.217 0 0 1 .302.005.25.25 0 0 1 .194.194l.003.053c.002.055.002.127.002.248v6.5a8.046 8.046 0 0 1-.005.3.25.25 0 0 1-.194.195 8.046 8.046 0 0 1-.3.005 8.05 8.05 0 0 1-.302-.005.25.25 0 0 1-.194-.194l-.003-.053a8.046 8.046 0 0 1-.002-.248v-6.5c0-.121 0-.193.002-.248l.003-.053v.002-.002Z"
  }));
};
SvgAnalyticsMinor.displayName = "AnalyticsMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/AnalyticsTableMinor.svg.mjs


var SvgAnalyticsTableMinor = function SvgAnalyticsTableMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M5.5 16.5a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-9Zm3.25-11.5h2.5v2h-2.5v-2Zm-1.5 0h-1.75a.5.5 0 0 0-.5.5v1.5h2.25v-2Zm0 3.5h-2.25v6a.5.5 0 0 0 .5.5h1.75v-6.5Zm1.5 6.5v-6.5h2.5v6.5h-2.5Zm4-8v-2h1.75a.5.5 0 0 1 .5.5v1.5h-2.25Zm0 1.5v6.5h1.75a.5.5 0 0 0 .5-.5v-6h-2.25Z"
  }));
};
SvgAnalyticsTableMinor.displayName = "AnalyticsTableMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/AnyClickModelMinor.svg.mjs


var SvgAnyClickModelMinor = function SvgAnyClickModelMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M4.75 4.25a.75.75 0 0 0-1.5 0v11.5a.75.75 0 0 0 1.5 0v-11.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.75 4.25a.75.75 0 0 0-1.5 0v11.5a.75.75 0 0 0 1.5 0v-11.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M8 3.5a.75.75 0 0 1 .75.75v11.5a.75.75 0 0 1-1.5 0v-11.5a.75.75 0 0 1 .75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M16.75 4.25a.75.75 0 0 0-1.5 0v11.5a.75.75 0 0 0 1.5 0v-11.5Z"
  }));
};
SvgAnyClickModelMinor.displayName = "AnyClickModelMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/AppExtensionMinor.svg.mjs


var SvgAppExtensionMinor = function SvgAppExtensionMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.28 8.78a.75.75 0 0 1-1.06-1.06l3.22-3.22h-1.19a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 .75.75v3a.75.75 0 1 1-1.5 0v-1.19l-3.22 3.22Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M5.75 3.5a2.25 2.25 0 0 0-2.25 2.25v2.75a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2.75Zm-.75 2.25a.75.75 0 0 1 .75-.75h2.25v3h-3v-2.25Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M3.5 14.25a2.25 2.25 0 0 0 2.25 2.25h2.75a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v2.75Zm2.25.75a.75.75 0 0 1-.75-.75v-2.25h3v3h-2.25Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M14.25 16.5a2.25 2.25 0 0 0 2.25-2.25v-2.75a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2.75Zm.75-2.25a.75.75 0 0 1-.75.75h-2.25v-3h3v2.25Z"
  }));
};
SvgAppExtensionMinor.displayName = "AppExtensionMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/AppsFilledMajor.svg.mjs


var SvgAppsFilledMajor = function SvgAppsFilledMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13.5 3.25a1 1 0 0 1 1 1v1.25h1.25a1 1 0 1 1 0 2h-1.25v1.25a1 1 0 1 1-2 0v-1.25h-1.25a1 1 0 1 1 0-2h1.25v-1.25a1 1 0 0 1 1-1Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M5.75 4a1.75 1.75 0 0 0-1.75 1.75v2.75a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-2.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M5.75 16a1.75 1.75 0 0 1-1.75-1.75v-2.75a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-2.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14.25 16a1.75 1.75 0 0 0 1.75-1.75v-2.75a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h2.75Z"
  }));
};
SvgAppsFilledMajor.displayName = "AppsFilledMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/AppsMajor.svg.mjs


var SvgAppsMajor = function SvgAppsMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M3.5 5.75a2.25 2.25 0 0 1 2.25-2.25h2.75a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2.75Zm2.25-.75a.75.75 0 0 0-.75.75v2.25h3v-3h-2.25Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M3.5 14.25a2.25 2.25 0 0 0 2.25 2.25h2.75a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v2.75Zm2.25.75a.75.75 0 0 1-.75-.75v-2.25h3v3h-2.25Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M14.25 16.5a2.25 2.25 0 0 0 2.25-2.25v-2.75a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2.75Zm.75-2.25a.75.75 0 0 1-.75.75h-2.25v-3h3v2.25Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13.5 3.5a.75.75 0 0 1 .75.75v1.5h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5a.75.75 0 0 1-1.5 0v-1.5h-1.5a.75.75 0 0 1 0-1.5h1.5v-1.5a.75.75 0 0 1 .75-.75Z"
  }));
};
SvgAppsMajor.displayName = "AppsMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/AppsMinor.svg.mjs


var SvgAppsMinor = function SvgAppsMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M3.5 5.75a2.25 2.25 0 0 1 2.25-2.25h2.75a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2.75Zm2.25-.75a.75.75 0 0 0-.75.75v2.25h3v-3h-2.25Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M3.5 14.25a2.25 2.25 0 0 0 2.25 2.25h2.75a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v2.75Zm2.25.75a.75.75 0 0 1-.75-.75v-2.25h3v3h-2.25Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M14.25 16.5a2.25 2.25 0 0 0 2.25-2.25v-2.75a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2.75Zm.75-2.25a.75.75 0 0 1-.75.75h-2.25v-3h3v2.25Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13.5 3.5a.75.75 0 0 1 .75.75v1.5h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5a.75.75 0 0 1-1.5 0v-1.5h-1.5a.75.75 0 0 1 0-1.5h1.5v-1.5a.75.75 0 0 1 .75-.75Z"
  }));
};
SvgAppsMinor.displayName = "AppsMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ArchiveMajor.svg.mjs


var SvgArchiveMajor = function SvgArchiveMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M8.25 10.75a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M5.25 3.5a1.75 1.75 0 0 0-1.75 1.75v2c0 .595.297 1.12.75 1.436v5.064a2.75 2.75 0 0 0 2.75 2.75h6a2.75 2.75 0 0 0 2.75-2.75v-5.064c.453-.316.75-.841.75-1.436v-2a1.75 1.75 0 0 0-1.75-1.75h-9.5Zm9 5.5h-8.5v4.75c0 .69.56 1.25 1.25 1.25h6c.69 0 1.25-.56 1.25-1.25v-4.75Zm-9.25-3.75a.25.25 0 0 1 .25-.25h9.5a.25.25 0 0 1 .25.25v2a.25.25 0 0 1-.25.25h-9.5a.25.25 0 0 1-.25-.25v-2Z"
  }));
};
SvgArchiveMajor.displayName = "ArchiveMajor";



// EXTERNAL MODULE: ../polaris-icons/dist/icons/ArchiveMinor.svg.mjs
var ArchiveMinor_svg = __webpack_require__(87256);
// EXTERNAL MODULE: ../polaris-icons/dist/icons/ArrowDownMinor.svg.mjs
var ArrowDownMinor_svg = __webpack_require__(65357);
// EXTERNAL MODULE: ../polaris-icons/dist/icons/ArrowLeftMinor.svg.mjs
var ArrowLeftMinor_svg = __webpack_require__(50979);
;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ArrowRightMinor.svg.mjs


var SvgArrowRightMinor = function SvgArrowRightMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M3.5 10a.75.75 0 0 1 .75-.75h9.69l-2.72-2.72a.75.75 0 1 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06-1.06l2.72-2.72h-9.69a.75.75 0 0 1-.75-.75Z"
  }));
};
SvgArrowRightMinor.displayName = "ArrowRightMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ArrowUpMinor.svg.mjs


var SvgArrowUpMinor = function SvgArrowUpMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M10 16.5a.75.75 0 0 1-.75-.75v-9.69l-2.72 2.72a.75.75 0 1 1-1.06-1.06l4-4a.75.75 0 0 1 1.06 0l4 4a.75.75 0 1 1-1.06 1.06l-2.72-2.72v9.69a.75.75 0 0 1-.75.75Z"
  }));
};
SvgArrowUpMinor.displayName = "ArrowUpMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/AttachmentFilledMajor.svg.mjs


var SvgAttachmentFilledMajor = function SvgAttachmentFilledMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M4.666 9.677a4 4 0 0 0 0 5.657l.147.146a3.793 3.793 0 0 0 5.364 0 1 1 0 0 0-1.414-1.414c-.7.7-1.836.7-2.536 0l-.146-.146a2 2 0 0 1 0-2.829l5.015-5.015a1.993 1.993 0 1 1 2.819 2.82l-2.286 2.285a.567.567 0 1 1-.801-.801l2.25-2.25a1 1 0 1 0-1.414-1.415l-2.25 2.25a2.567 2.567 0 0 0 3.63 3.63l2.285-2.285a3.993 3.993 0 1 0-5.648-5.648l-5.015 5.015Z"
  }));
};
SvgAttachmentFilledMajor.displayName = "AttachmentFilledMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/AttachmentMajor.svg.mjs


var SvgAttachmentMajor = function SvgAttachmentMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M4.843 9.854a3.75 3.75 0 0 0 0 5.303l.147.147a3.543 3.543 0 0 0 5.01 0 .75.75 0 0 0-1.06-1.061 2.043 2.043 0 0 1-2.89 0l-.146-.146a2.25 2.25 0 0 1 0-3.182l5.015-5.015a2.244 2.244 0 0 1 3.173 3.172l-2.286 2.286a.817.817 0 1 1-1.155-1.155l2.25-2.25a.75.75 0 1 0-1.06-1.061l-2.25 2.25a2.317 2.317 0 0 0 3.275 3.277l2.286-2.286a3.744 3.744 0 0 0-5.294-5.294l-5.015 5.015Z"
  }));
};
SvgAttachmentMajor.displayName = "AttachmentMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/AutomationFilledMajor.svg.mjs


var SvgAutomationFilledMajor = function SvgAutomationFilledMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M8.013 4.389c0-.767.621-1.389 1.389-1.389h1.196c.767 0 1.39.622 1.39 1.389v.66c0 .153.101.33.307.436.141.074.278.155.411.241.196.128.402.13.536.052l.576-.332a1.389 1.389 0 0 1 1.897.508l.599 1.037a1.389 1.389 0 0 1-.509 1.897l-.621.359c-.131.075-.232.249-.225.477a5.135 5.135 0 0 1-.004.427c-.012.233.09.412.223.489l.627.362c.543.313.794.937.66 1.517l-2.048-1.26a1.75 1.75 0 0 0-2.667 1.491v3.528c-.25.37-.672.612-1.152.612h-1.196a1.389 1.389 0 0 1-1.39-1.389v-.778c0-.153-.102-.33-.307-.437a4.96 4.96 0 0 1-.325-.185c-.194-.121-.395-.12-.526-.045l-.672.388a1.389 1.389 0 0 1-1.898-.508l-.598-1.037a1.389 1.389 0 0 1 .509-1.897l.627-.362c.133-.077.235-.256.223-.49a5.04 5.04 0 0 1-.004-.426c.007-.228-.094-.401-.225-.477l-.622-.359a1.389 1.389 0 0 1-.508-1.897l.598-1.037a1.389 1.389 0 0 1 1.898-.508l.576.332c.133.078.34.076.535-.052a4.96 4.96 0 0 1 .412-.24c.205-.108.308-.284.308-.437v-.66Zm1.987 7.611a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "m13.762 12.324 3.25 2a.5.5 0 0 1 0 .852l-3.25 2a.5.5 0 0 1-.762-.426v-4a.5.5 0 0 1 .762-.426Z"
  }));
};
SvgAutomationFilledMajor.displayName = "AutomationFilledMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/AutomationMajor.svg.mjs


var SvgAutomationMajor = function SvgAutomationMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M9.377 2.5c-.926 0-1.676.75-1.676 1.676v.688c0 .056-.043.17-.198.251-.153.08-.303.168-.448.262-.147.097-.268.076-.318.048l-.6-.346a1.676 1.676 0 0 0-2.29.613l-.622 1.08a1.676 1.676 0 0 0 .613 2.289l.648.374c.048.028.124.12.119.29a5.484 5.484 0 0 0 .005.465c.009.175-.07.27-.119.299l-.653.377a1.676 1.676 0 0 0-.613 2.29l.623 1.08a1.676 1.676 0 0 0 2.29.613l.7-.405c.048-.028.166-.048.312.043.115.071.233.139.353.202.155.08.198.195.198.251v.811c0 .926.75 1.676 1.676 1.676h.873a.75.75 0 0 0 0-1.5h-.873a.176.176 0 0 1-.176-.176v-.81c0-.73-.462-1.3-1.003-1.582a3.873 3.873 0 0 1-.255-.146c-.514-.32-1.23-.428-1.855-.068l-.7.405a.176.176 0 0 1-.241-.065l-.623-1.08a.176.176 0 0 1 .064-.24l.653-.377c.637-.368.899-1.062.867-1.677a3.97 3.97 0 0 1-.004-.337c.02-.604-.245-1.278-.868-1.638l-.648-.374a.176.176 0 0 1-.064-.24l.623-1.08a.176.176 0 0 1 .24-.064l.6.346c.638.368 1.37.247 1.888-.09a3.85 3.85 0 0 1 .323-.19c.54-.282 1.003-.852 1.003-1.58v-.688c0-.097.078-.176.176-.176h1.246c.097 0 .176.079.176.176v.688c0 .728.462 1.298 1.003 1.58.11.058.219.122.323.19.517.337 1.25.458 1.888.09l.6-.346a.176.176 0 0 1 .24.064l.623 1.08a.176.176 0 0 1-.064.24l-.648.374c-.623.36-.888 1.034-.868 1.638v.073l.001.155v.248a.75.75 0 0 0 1.5 0c0-.042 0-.458-.002-.524-.005-.171.07-.263.12-.291l.647-.374a1.676 1.676 0 0 0 .613-2.29l-.623-1.079a1.676 1.676 0 0 0-2.29-.613l-.6.346c-.049.028-.17.048-.318-.048a5.4 5.4 0 0 0-.448-.262c-.155-.081-.197-.195-.197-.251v-.688c0-.926-.75-1.676-1.676-1.676h-1.246Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M12.5 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-1.5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.874 12.101a.75.75 0 0 1 .748-.002l3.5 2a.75.75 0 0 1 0 1.302l-3.5 2a.75.75 0 0 1-1.122-.651v-4a.75.75 0 0 1 .374-.649Z"
  }));
};
SvgAutomationMajor.displayName = "AutomationMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/BackspaceMajor.svg.mjs


var SvgBackspaceMajor = function SvgBackspaceMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14.03 7.47a.75.75 0 0 1 0 1.06l-1.47 1.47 1.47 1.47a.75.75 0 1 1-1.06 1.06l-1.47-1.47-1.47 1.47a.75.75 0 1 1-1.06-1.06l1.47-1.47-1.47-1.47a.75.75 0 0 1 1.06-1.06l1.47 1.47 1.47-1.47a.75.75 0 0 1 1.06 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M5.553 5.083a2.75 2.75 0 0 1 2.188-1.083h6.509a2.75 2.75 0 0 1 2.75 2.75v6.5a2.75 2.75 0 0 1-2.75 2.75h-6.51a2.75 2.75 0 0 1-2.187-1.083l-2.476-3.25a2.75 2.75 0 0 1 0-3.334l2.476-3.25Zm2.188.417c-.39 0-.758.182-.995.492l-2.476 3.25a1.25 1.25 0 0 0 0 1.516l2.476 3.25c.237.31.604.492.995.492h6.509c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25h-6.51Z"
  }));
};
SvgBackspaceMajor.displayName = "BackspaceMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/BalanceFilledMajor.svg.mjs


var SvgBalanceFilledMajor = function SvgBalanceFilledMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M3.5 5.75v8.5a2.25 2.25 0 0 0 2.25 2.25h8.25a2.25 2.25 0 0 0 2.25-2.25v-.854a1.25 1.25 0 0 0 .75-1.146v-2a1.25 1.25 0 0 0-.75-1.146v-.604a2.25 2.25 0 0 0-2.25-2.25h-.5v-.5a2.25 2.25 0 0 0-2.25-2.25h-5.5a2.25 2.25 0 0 0-2.25 2.25Zm2.25-.75a.75.75 0 0 0-.75.75v.5h7v-.5a.75.75 0 0 0-.75-.75h-5.5Zm9.75 5.5h-3.75v1.5h3.75v-1.5Z"
  }));
};
SvgBalanceFilledMajor.displayName = "BalanceFilledMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/BalanceMajor.svg.mjs


var SvgBalanceMajor = function SvgBalanceMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M3.5 5.75v8.5a2.25 2.25 0 0 0 2.25 2.25h8.5a2.25 2.25 0 0 0 2.25-2.25v-1c.304-.228.5-.591.5-1v-2c0-.409-.196-.772-.5-1v-.75a2.25 2.25 0 0 0-2.25-2.25h-.75v-.5a2.25 2.25 0 0 0-2.25-2.25h-5.5a2.25 2.25 0 0 0-2.25 2.25Zm2.25-.75a.75.75 0 0 0-.75.75v.5h7v-.5a.75.75 0 0 0-.75-.75h-5.5Zm9.75 5.5h-3.75v1.5h3.75v-1.5Zm-.5-1.5v-.5a.75.75 0 0 0-.75-.75h-9.25v6.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-.75h-3.5c-.69 0-1.25-.56-1.25-1.25v-2c0-.69.56-1.25 1.25-1.25h3.5Z"
  }));
};
SvgBalanceMajor.displayName = "BalanceMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/BankFilledMajor.svg.mjs


var SvgBankFilledMajor = function SvgBankFilledMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M10.54 3.177a1.25 1.25 0 0 0-1.08 0l-5.25 2.51a1.25 1.25 0 0 0-.71 1.128v1.185c0 .69.56 1.25 1.25 1.25v3h-.25a1 1 0 0 0-1 1v1.5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-1.5a1 1 0 0 0-1-1h-.25v-3c.69 0 1.25-.56 1.25-1.25v-1.185c0-.481-.276-.92-.71-1.128l-5.25-2.51Zm1.71 6.073h1.5v3h-1.5v-3Zm-3 0h1.5v3h-1.5v-3Zm-3 0h1.5v3h-1.5v-3Z"
  }));
};
SvgBankFilledMajor.displayName = "BankFilledMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/BankMajor.svg.mjs


var SvgBankMajor = function SvgBankMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M10.54 3.177a1.25 1.25 0 0 0-1.08 0l-5.25 2.51a1.25 1.25 0 0 0-.71 1.128v1.185c0 .69.56 1.25 1.25 1.25v2.75h-.25a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-.25v-2.75c.69 0 1.25-.56 1.25-1.25v-1.185c0-.481-.276-.92-.71-1.128l-5.25-2.51Zm3.21 8.823v-2.75h-1.5v2.75h1.5Zm-3 0v-2.75h-1.5v2.75h1.5Zm-3 0v-2.75h-1.5v2.75h1.5Zm-2.75-5.027 5-2.392 5 2.392v.777h-10v-.777Zm0 7.527v-1h10v1h-10Z"
  }));
};
SvgBankMajor.displayName = "BankMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/BarcodeMajor.svg.mjs


var SvgBarcodeMajor = function SvgBarcodeMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M4.5 6.25a.75.75 0 0 1 .75-.75h.487a.75.75 0 1 0 0-1.5h-.487a2.25 2.25 0 0 0-2.25 2.25v.5a.75.75 0 0 0 1.5 0v-.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M4.5 13.76c0 .414.336.75.75.75h.5a.75.75 0 0 1 0 1.5h-.5a2.25 2.25 0 0 1-2.25-2.25v-.5a.75.75 0 0 1 1.5 0v.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14.75 5.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 0 1.5 0v-.5a2.25 2.25 0 0 0-2.25-2.25h-.5a.75.75 0 0 0 0 1.5h.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M15.5 13.76a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 0 0 1.5h.5a2.25 2.25 0 0 0 2.25-2.25v-.5a.75.75 0 0 0-1.5 0v.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6 7.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0v-5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10.5 7a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M8 7.625a.625.625 0 1 1 1.25 0v4.75a.625.625 0 1 1-1.25 0v-4.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13 7a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1Z"
  }));
};
SvgBarcodeMajor.displayName = "BarcodeMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/BehaviorFilledMajor.svg.mjs


var SvgBehaviorFilledMajor = function SvgBehaviorFilledMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M9.75 3a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14.28 5.22a.75.75 0 0 1 0 1.06l-1 1a.75.75 0 1 1-1.06-1.06l1-1a.75.75 0 0 1 1.06 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M7.28 12.22a.75.75 0 0 1 0 1.06l-1 1a.75.75 0 0 1-1.06-1.06l1-1a.75.75 0 0 1 1.06 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.25 10.5a.75.75 0 0 0 0-1.5h-2.5a.75.75 0 0 0 0 1.5h2.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M7.03 7.03a.75.75 0 0 1-1.06 0l-1.75-1.75a.75.75 0 0 1 1.06-1.06l1.75 1.75a.75.75 0 0 1 0 1.06Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M8.22 8.22a.75.75 0 0 1 .767-.181l7.5 2.5a.75.75 0 0 1 .293 1.241l-1.97 1.97 1.97 1.97a.75.75 0 1 1-1.06 1.06l-1.97-1.97-1.97 1.97a.75.75 0 0 1-1.241-.293l-2.5-7.5a.75.75 0 0 1 .18-.767Z"
  }));
};
SvgBehaviorFilledMajor.displayName = "BehaviorFilledMajor";



// EXTERNAL MODULE: ../polaris-icons/dist/icons/BehaviorMajor.svg.mjs
var BehaviorMajor_svg = __webpack_require__(95931);
;// CONCATENATED MODULE: ../polaris-icons/dist/icons/BehaviorMinor.svg.mjs


var SvgBehaviorMinor = function SvgBehaviorMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10.5 3.75a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0v-2.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14.28 6.28a.75.75 0 0 0-1.06-1.06l-1 1a.75.75 0 0 0 1.06 1.06l1-1Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M7.28 13.28a.75.75 0 0 0-1.06-1.06l-1 1a.75.75 0 1 0 1.06 1.06l1-1Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M7 9.75a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h2.5a.75.75 0 0 1 .75.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M5.97 7.03a.75.75 0 0 0 1.06-1.06l-1.75-1.75a.75.75 0 0 0-1.06 1.06l1.75 1.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M8.22 8.22a.75.75 0 0 1 .767-.181l7.5 2.5a.75.75 0 0 1 .293 1.241l-1.97 1.97 1.97 1.97a.75.75 0 1 1-1.06 1.06l-1.97-1.97-1.97 1.97a.75.75 0 0 1-1.241-.293l-2.5-7.5a.75.75 0 0 1 .18-.767Zm4.998 5.001.002-.001.001-.002 1.64-1.64-4.925-1.642 1.642 4.926 1.64-1.64Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10.5 3.75a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0v-2.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14.28 6.28a.75.75 0 0 0-1.06-1.06l-1 1a.75.75 0 0 0 1.06 1.06l1-1Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M7.28 13.28a.75.75 0 0 0-1.06-1.06l-1 1a.75.75 0 1 0 1.06 1.06l1-1Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M7 9.75a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h2.5a.75.75 0 0 1 .75.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M5.97 7.03a.75.75 0 0 0 1.06-1.06l-1.75-1.75a.75.75 0 0 0-1.06 1.06l1.75 1.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M8.22 8.22a.75.75 0 0 1 .767-.181l7.5 2.5a.75.75 0 0 1 .293 1.241l-1.97 1.97 1.97 1.97a.75.75 0 1 1-1.06 1.06l-1.97-1.97-1.97 1.97a.75.75 0 0 1-1.241-.293l-2.5-7.5a.75.75 0 0 1 .18-.767Zm4.998 5.001.002-.001.001-.002 1.64-1.64-4.925-1.642 1.642 4.926 1.64-1.64Z"
  }));
};
SvgBehaviorMinor.displayName = "BehaviorMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/BillingStatementDollarFilledMajor.svg.mjs


var SvgBillingStatementDollarFilledMajor = function SvgBillingStatementDollarFilledMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M5.32 16.467a.5.5 0 0 1-.32-.467v-11a1.5 1.5 0 0 1 1.5-1.5h7a1.5 1.5 0 0 1 1.5 1.5v11a.5.5 0 0 1-.872.334l-1.506-1.674a.495.495 0 0 0-.3-.16h-.144a.495.495 0 0 0-.3.16l-1.506 1.674a.5.5 0 0 1-.744 0l-1.506-1.674a.495.495 0 0 0-.3-.16h-.144a.495.495 0 0 0-.3.16l-1.506 1.674a.5.5 0 0 1-.551.133Zm4.18-10.717a.75.75 0 0 1 1.5 0v.25h.75a.75.75 0 0 1 0 1.5h-2.25a.5.5 0 0 0 0 1h1a2 2 0 1 1 0 4v.25a.75.75 0 0 1-1.5 0v-.25h-.75a.75.75 0 0 1 0-1.5h2.25a.5.5 0 0 0 0-1h-1a2 2 0 1 1 0-4v-.25Z"
  }));
};
SvgBillingStatementDollarFilledMajor.displayName = "BillingStatementDollarFilledMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/BillingStatementDollarMajor.svg.mjs


var SvgBillingStatementDollarMajor = function SvgBillingStatementDollarMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M4.963 17.4a1.5 1.5 0 0 1-.963-1.4v-11a2.5 2.5 0 0 1 2.5-2.5h7a2.5 2.5 0 0 1 2.5 2.5v11a1.5 1.5 0 0 1-2.615 1.003l-1.135-1.26-1.135 1.26a1.5 1.5 0 0 1-2.23 0l-1.135-1.26-1.135 1.26a1.5 1.5 0 0 1-1.652.397Zm7.388-3.4h-.203a.995.995 0 0 0-.641.326l-1.507 1.674-1.507-1.674a.995.995 0 0 0-.641-.326h-.204a.995.995 0 0 0-.641.326l-1.507 1.674v-11a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v11l-1.507-1.674a.995.995 0 0 0-.642-.326Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10.25 5a.75.75 0 0 0-.75.75v.25a2 2 0 1 0 0 4h1a.5.5 0 0 1 0 1h-2.25a.75.75 0 0 0 0 1.5h.75v.25a.75.75 0 0 0 1.5 0v-.25a2 2 0 1 0 0-4h-1a.5.5 0 0 1 0-1h2.25a.75.75 0 0 0 0-1.5h-.75v-.25a.75.75 0 0 0-.75-.75Z"
  }));
};
SvgBillingStatementDollarMajor.displayName = "BillingStatementDollarMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/BillingStatementEuroFilledMajor.svg.mjs


var SvgBillingStatementEuroFilledMajor = function SvgBillingStatementEuroFilledMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M5.32 16.467a.5.5 0 0 1-.32-.467v-11a1.5 1.5 0 0 1 1.5-1.5h7a1.5 1.5 0 0 1 1.5 1.5v11a.5.5 0 0 1-.872.334l-1.506-1.674a.494.494 0 0 0-.3-.16h-.144a.494.494 0 0 0-.3.16l-1.506 1.674a.5.5 0 0 1-.744 0l-1.506-1.674a.495.495 0 0 0-.3-.16h-.144a.495.495 0 0 0-.3.16l-1.506 1.674a.5.5 0 0 1-.551.133Zm4.94-9.074c-.248.15-.579.534-.707 1.357h1.697a.75.75 0 0 1 0 1.5h-1.697c.128.823.46 1.208.708 1.357.309.185.684.137.959-.137a.75.75 0 1 1 1.06 1.06c-.725.726-1.85.928-2.79.363-.788-.472-1.304-1.385-1.449-2.643h-.291a.75.75 0 0 1 0-1.5h.291c.145-1.258.661-2.171 1.448-2.643.941-.565 2.066-.363 2.791.363a.75.75 0 0 1-1.06 1.06c-.275-.274-.65-.322-.96-.137Z"
  }));
};
SvgBillingStatementEuroFilledMajor.displayName = "BillingStatementEuroFilledMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/BillingStatementEuroMajor.svg.mjs


var SvgBillingStatementEuroMajor = function SvgBillingStatementEuroMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10.26 7.393c-.248.15-.579.534-.707 1.357h1.697a.75.75 0 0 1 0 1.5h-1.697c.128.823.46 1.208.708 1.357.309.185.684.137.959-.137a.75.75 0 1 1 1.06 1.06c-.725.726-1.85.928-2.79.363-.788-.472-1.304-1.385-1.449-2.643h-.291a.75.75 0 1 1 0-1.5h.291c.145-1.258.661-2.171 1.448-2.643.941-.565 2.066-.363 2.791.363a.75.75 0 0 1-1.06 1.06c-.275-.274-.65-.322-.96-.137Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M4 16a1.5 1.5 0 0 0 2.615 1.003l1.135-1.26 1.135 1.26a1.5 1.5 0 0 0 2.23 0l1.135-1.26 1.135 1.26a1.5 1.5 0 0 0 2.615-1.003v-11a2.5 2.5 0 0 0-2.5-2.5h-7a2.5 2.5 0 0 0-2.5 2.5v11Zm8.149-2h.202a.995.995 0 0 1 .642.326l1.507 1.674v-11a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v11l1.507-1.674a.995.995 0 0 1 .642-.326h.202a.995.995 0 0 1 .642.326l1.507 1.674 1.507-1.674a.995.995 0 0 1 .642-.326Z"
  }));
};
SvgBillingStatementEuroMajor.displayName = "BillingStatementEuroMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/BillingStatementPoundFilledMajor.svg.mjs


var SvgBillingStatementPoundFilledMajor = function SvgBillingStatementPoundFilledMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M5.32 16.467a.5.5 0 0 1-.32-.467v-11a1.5 1.5 0 0 1 1.5-1.5h7a1.5 1.5 0 0 1 1.5 1.5v11a.5.5 0 0 1-.872.334l-1.506-1.674a.495.495 0 0 0-.3-.16h-.144a.495.495 0 0 0-.3.16l-1.506 1.674a.5.5 0 0 1-.744 0l-1.506-1.674a.495.495 0 0 0-.3-.16h-.144a.495.495 0 0 0-.3.16l-1.506 1.674a.5.5 0 0 1-.551.133Zm4.93-11.467a1.75 1.75 0 0 0-1.75 1.75v2h-.75a.75.75 0 0 0 0 1.5h.75v1.5h-.75a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-2.25v-1.5h.75a.75.75 0 0 0 0-1.5h-.75v-2a.25.25 0 0 1 .25-.25h.75v1a.75.75 0 0 0 1.5 0v-1.25c0-.69-.56-1.25-1.25-1.25h-1Z"
  }));
};
SvgBillingStatementPoundFilledMajor.displayName = "BillingStatementPoundFilledMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/BillingStatementPoundMajor.svg.mjs


var SvgBillingStatementPoundMajor = function SvgBillingStatementPoundMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10.25 5a1.75 1.75 0 0 0-1.75 1.75v2h-.75a.75.75 0 0 0 0 1.5h.75v1.5h-.75a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-2.25v-1.5h.75a.75.75 0 0 0 0-1.5h-.75v-2a.25.25 0 0 1 .25-.25h.75v1a.75.75 0 0 0 1.5 0v-1.25c0-.69-.56-1.25-1.25-1.25h-1Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M4 16a1.5 1.5 0 0 0 2.615 1.003l1.135-1.26 1.135 1.26a1.5 1.5 0 0 0 2.23 0l1.135-1.26 1.135 1.26a1.5 1.5 0 0 0 2.615-1.003v-11a2.5 2.5 0 0 0-2.5-2.5h-7a2.5 2.5 0 0 0-2.5 2.5v11Zm8.149-2h.203a.995.995 0 0 1 .641.326l1.507 1.674v-11a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v11l1.507-1.674a.995.995 0 0 1 .641-.326h.204a.995.995 0 0 1 .641.326l1.507 1.674 1.507-1.674a.995.995 0 0 1 .642-.326Z"
  }));
};
SvgBillingStatementPoundMajor.displayName = "BillingStatementPoundMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/BillingStatementRupeeFilledMajor.svg.mjs


var SvgBillingStatementRupeeFilledMajor = function SvgBillingStatementRupeeFilledMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M5.32 16.467a.5.5 0 0 1-.32-.467v-11a1.5 1.5 0 0 1 1.5-1.5h7a1.5 1.5 0 0 1 1.5 1.5v11a.5.5 0 0 1-.872.334l-1.506-1.674a.495.495 0 0 0-.3-.16h-.144a.495.495 0 0 0-.3.16l-1.506 1.674a.5.5 0 0 1-.744 0l-1.506-1.674a.495.495 0 0 0-.3-.16h-.144a.495.495 0 0 0-.3.16l-1.506 1.674a.5.5 0 0 1-.551.133Zm6.569-3.324a.75.75 0 0 0-.246-1.032l-1.713-1.054a2.485 2.485 0 0 0 1.07-2.045v-.012h1.25a.75.75 0 0 0 0-1.5h-1.25v-1h1.25a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5h1.75v1h-1.75a.75.75 0 0 0 0 1.5h1.75v.012a.988.988 0 0 1-.988.988c-.903 0-1.238 1.184-.47 1.657l2.815 1.732a.75.75 0 0 0 1.032-.246Z"
  }));
};
SvgBillingStatementRupeeFilledMajor.displayName = "BillingStatementRupeeFilledMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/BillingStatementRupeeMajor.svg.mjs


var SvgBillingStatementRupeeMajor = function SvgBillingStatementRupeeMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11.889 13.143a.75.75 0 0 0-.246-1.032l-1.713-1.054a2.485 2.485 0 0 0 1.07-2.045v-.012h1.25a.75.75 0 0 0 0-1.5h-1.25v-1h1.25a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5h1.75v1h-1.75a.75.75 0 0 0 0 1.5h1.75v.012a.988.988 0 0 1-.988.988c-.903 0-1.238 1.184-.47 1.657l2.815 1.732a.75.75 0 0 0 1.032-.246Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M4 16a1.5 1.5 0 0 0 2.615 1.003l1.135-1.26 1.135 1.26a1.5 1.5 0 0 0 2.23 0l1.135-1.26 1.135 1.26a1.5 1.5 0 0 0 2.615-1.003v-11a2.5 2.5 0 0 0-2.5-2.5h-7a2.5 2.5 0 0 0-2.5 2.5v11Zm8.149-2h.203a.995.995 0 0 1 .641.326l1.507 1.674v-11a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v11l1.507-1.674a.995.995 0 0 1 .641-.326h.204a.995.995 0 0 1 .641.326l1.507 1.674 1.507-1.674a.995.995 0 0 1 .642-.326Z"
  }));
};
SvgBillingStatementRupeeMajor.displayName = "BillingStatementRupeeMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/BillingStatementYenFilledMajor.svg.mjs


var SvgBillingStatementYenFilledMajor = function SvgBillingStatementYenFilledMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M5.32 16.467a.5.5 0 0 1-.32-.467v-11a1.5 1.5 0 0 1 1.5-1.5h7a1.5 1.5 0 0 1 1.5 1.5v11a.5.5 0 0 1-.872.334l-1.506-1.674a.495.495 0 0 0-.3-.16h-.144a.495.495 0 0 0-.3.16l-1.506 1.674a.5.5 0 0 1-.744 0l-1.506-1.674a.495.495 0 0 0-.3-.16h-.144a.495.495 0 0 0-.3.16l-1.506 1.674a.5.5 0 0 1-.551.133Zm2.116-10.96a.75.75 0 0 1 1.058-.071l1.506 1.317 1.506-1.317a.75.75 0 0 1 .988 1.128l-1.744 1.526v.41h1.25a.75.75 0 0 1 0 1.5h-1.25v.5h1.25a.75.75 0 0 1 0 1.5h-1.25v.5a.75.75 0 0 1-1.5 0v-.5h-1.25a.75.75 0 0 1 0-1.5h1.25v-.5h-1.25a.75.75 0 1 1 0-1.5h1.25v-.41l-1.744-1.526a.75.75 0 0 1-.07-1.058Z"
  }));
};
SvgBillingStatementYenFilledMajor.displayName = "BillingStatementYenFilledMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/BillingStatementYenMajor.svg.mjs


var SvgBillingStatementYenMajor = function SvgBillingStatementYenMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M7.436 5.506a.75.75 0 0 1 1.058-.07l1.506 1.317 1.506-1.317a.75.75 0 0 1 .988 1.128l-1.744 1.526v.41h1.25a.75.75 0 0 1 0 1.5h-1.25v.5h1.25a.75.75 0 0 1 0 1.5h-1.25v.5a.75.75 0 0 1-1.5 0v-.5h-1.25a.75.75 0 0 1 0-1.5h1.25v-.5h-1.25a.75.75 0 1 1 0-1.5h1.25v-.41l-1.744-1.526a.75.75 0 0 1-.07-1.058Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M4 16a1.5 1.5 0 0 0 2.615 1.003l1.135-1.26 1.135 1.26a1.5 1.5 0 0 0 2.23 0l1.135-1.26 1.135 1.26a1.5 1.5 0 0 0 2.615-1.003v-11a2.5 2.5 0 0 0-2.5-2.5h-7a2.5 2.5 0 0 0-2.5 2.5v11Zm8.149-2h.203a.995.995 0 0 1 .641.326l1.507 1.674v-11a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v11l1.507-1.674a.995.995 0 0 1 .641-.326h.204a.995.995 0 0 1 .641.326l1.507 1.674 1.507-1.674a.995.995 0 0 1 .642-.326Z"
  }));
};
SvgBillingStatementYenMajor.displayName = "BillingStatementYenMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/BlockMinor.svg.mjs


var SvgBlockMinor = function SvgBlockMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M5 6.25c0-.69.56-1.25 1.25-1.25h2a.75.75 0 0 0 0-1.5h-2a2.75 2.75 0 0 0-2.75 2.75v2a.75.75 0 0 0 1.5 0v-2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13.75 5c.69 0 1.25.56 1.25 1.25v2a.75.75 0 0 0 1.5 0v-2a2.75 2.75 0 0 0-2.75-2.75h-2a.75.75 0 0 0 0 1.5h2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13.75 15c.69 0 1.25-.56 1.25-1.25v-2a.75.75 0 0 1 1.5 0v2a2.75 2.75 0 0 1-2.75 2.75h-2a.75.75 0 0 1 0-1.5h2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.25 15c-.69 0-1.25-.56-1.25-1.25v-2a.75.75 0 0 0-1.5 0v2a2.75 2.75 0 0 0 2.75 2.75h2a.75.75 0 0 0 0-1.5h-2Z"
  }));
};
SvgBlockMinor.displayName = "BlockMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/BlockquoteMajor.svg.mjs


var SvgBlockquoteMajor = function SvgBlockquoteMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11.75 4a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11 8.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M3.75 11a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5h-12.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M3.75 14.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M3 8.75a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-.5v-1a.25.25 0 0 1 .25-.25.75.75 0 0 0 0-1.5 1.75 1.75 0 0 0-1.75 1.75v3Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M8.5 6.75v-1a.25.25 0 0 1 .25-.25.75.75 0 0 0 0-1.5 1.75 1.75 0 0 0-1.75 1.75v3a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-.5Z"
  }));
};
SvgBlockquoteMajor.displayName = "BlockquoteMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/BlogMajor.svg.mjs


var SvgBlogMajor = function SvgBlogMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M16.746 3.104a.5.5 0 0 0 0-.707l-1.06-1.061a.5.5 0 0 0-.707 0l-.957.957 1.767 1.768.957-.957Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "m15.082 4.768-1.768-1.768-3.699 3.7a2 2 0 0 0-.585 1.406l-.003.698a.25.25 0 0 0 .251.251l.698-.002a2 2 0 0 0 1.407-.586l3.7-3.7Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M5.5 4.75c0-.69.56-1.25 1.25-1.25h3.25a.75.75 0 0 0 0-1.5h-3.25a2.75 2.75 0 0 0-2.75 2.75v10.5a2.75 2.75 0 0 0 2.75 2.75h6.5a2.75 2.75 0 0 0 2.75-2.75v-7.25a.75.75 0 0 0-1.5 0v7.25c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-10.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M7.75 10.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M7 14.25a.75.75 0 0 1 .75-.75h2.75a.75.75 0 0 1 0 1.5h-2.75a.75.75 0 0 1-.75-.75Z"
  }));
};
SvgBlogMajor.displayName = "BlogMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/BoldMajor.svg.mjs


var SvgBoldMajor = function SvgBoldMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M7 3c-.83 0-1.5.67-1.5 1.5v10.46c0 .85.69 1.54 1.54 1.54h4.46a4 4 0 0 0 2.32-7.26 4 4 0 0 0-3.32-6.24h-3.5Zm3.5 5.5a1.5 1.5 0 0 0 0-3h-2.5v3h2.5Zm-2.5 2.5v3h3.5a1.5 1.5 0 0 0 0-3h-3.5Z"
  }));
};
SvgBoldMajor.displayName = "BoldMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/BoldMinor.svg.mjs


var SvgBoldMinor = function SvgBoldMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M7 3c-.83 0-1.5.67-1.5 1.5v10.46c0 .85.69 1.54 1.54 1.54h4.46a4 4 0 0 0 2.32-7.26 4 4 0 0 0-3.32-6.24h-3.5Zm3.5 5.5a1.5 1.5 0 0 0 0-3h-2.5v3h2.5Zm-2.5 2.5v3h3.5a1.5 1.5 0 0 0 0-3h-3.5Z"
  }));
};
SvgBoldMinor.displayName = "BoldMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/BugMajor.svg.mjs


var SvgBugMajor = function SvgBugMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M13.28 3.97a.75.75 0 0 1 0 1.06l-.793.794c.4.475.667 1.067.742 1.717.349.073.663.241.914.477l1.157-.868a.75.75 0 1 1 .9 1.2l-1.45 1.088v1.312h1.5a.75.75 0 0 1 0 1.5h-1.605a4.717 4.717 0 0 1-.33.987l1.885 1.413a.75.75 0 1 1-.9 1.2l-1.821-1.366a4.737 4.737 0 0 1-3.479 1.516 4.737 4.737 0 0 1-3.479-1.516l-1.821 1.366a.75.75 0 1 1-.9-1.2l1.884-1.413a4.712 4.712 0 0 1-.329-.987h-1.605a.75.75 0 0 1 0-1.5h1.5v-1.313l-1.45-1.087a.75.75 0 1 1 .9-1.2l1.157.868c.25-.236.565-.404.914-.477a3.24 3.24 0 0 1 .742-1.717l-.793-.794a.75.75 0 0 1 1.06-1.06l.953.953a3.24 3.24 0 0 1 1.267-.256c.45 0 .877.09 1.267.256l.953-.953a.75.75 0 0 1 1.06 0Zm-6.53 6.78v.5a3.251 3.251 0 0 0 2.5 3.163v-5.413h-2.083a.417.417 0 0 0-.417.417v1.333Zm6.5-1.333v1.833a3.251 3.251 0 0 1-2.5 3.163v-5.413h2.083c.23 0 .417.187.417.417Zm-3.25-3.25a1.75 1.75 0 0 1 1.7 1.333h-3.4a1.75 1.75 0 0 1 1.7-1.333Z"
  }));
};
SvgBugMajor.displayName = "BugMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ButtonCornerPillMajor.svg.mjs


var SvgButtonCornerPillMajor = function SvgButtonCornerPillMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M12.25 5a7.25 7.25 0 0 0-7.25 7.25v3.5a.75.75 0 0 1-1.5 0v-3.5a8.75 8.75 0 0 1 8.75-8.75h3.5a.75.75 0 0 1 0 1.5h-3.5Z"
  }));
};
SvgButtonCornerPillMajor.displayName = "ButtonCornerPillMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ButtonCornerRoundedMajor.svg.mjs


var SvgButtonCornerRoundedMajor = function SvgButtonCornerRoundedMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M8.25 5a3.25 3.25 0 0 0-3.25 3.25v7.5a.75.75 0 0 1-1.5 0v-7.5a4.75 4.75 0 0 1 4.75-4.75h7.5a.75.75 0 0 1 0 1.5h-7.5Z"
  }));
};
SvgButtonCornerRoundedMajor.displayName = "ButtonCornerRoundedMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ButtonCornerSquareMajor.svg.mjs


var SvgButtonCornerSquareMajor = function SvgButtonCornerSquareMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M5.25 5a.25.25 0 0 0-.25.25v10.5a.75.75 0 0 1-1.5 0v-10.5c0-.966.784-1.75 1.75-1.75h10.5a.75.75 0 0 1 0 1.5h-10.5Z"
  }));
};
SvgButtonCornerSquareMajor.displayName = "ButtonCornerSquareMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ButtonMinor.svg.mjs


var SvgButtonMinor = function SvgButtonMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.75 4a3.75 3.75 0 0 0-3.75 3.75v2.5a3.75 3.75 0 0 0 3.75 3.75h1.5a.75.75 0 0 0 0-1.5h-1.5a2.25 2.25 0 0 1-2.25-2.25v-2.5a2.25 2.25 0 0 1 2.25-2.25h6.5a2.25 2.25 0 0 1 2.25 2.25v.5a.75.75 0 0 0 1.5 0v-.5a3.75 3.75 0 0 0-3.75-3.75h-6.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M9.464 8.464a.75.75 0 0 1 .78-.176l6.01 2.12a.75.75 0 0 1 .281 1.238l-1.237 1.238 1.414 1.414a.75.75 0 0 1 0 1.06l-.353.354a.75.75 0 0 1-1.06 0l-1.415-1.414-1.238 1.238a.75.75 0 0 1-1.237-.281l-2.121-6.01a.75.75 0 0 1 .176-.78Z"
  }));
};
SvgButtonMinor.displayName = "ButtonMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/BuyButtonButtonLayoutMajor.svg.mjs


var SvgBuyButtonButtonLayoutMajor = function SvgBuyButtonButtonLayoutMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M3.5 5.25c0-.966.784-1.75 1.75-1.75h1a.75.75 0 0 1 0 1.5h-1a.25.25 0 0 0-.25.25v1a.75.75 0 0 1-1.5 0v-1Zm1.75 11.25a1.75 1.75 0 0 1-1.75-1.75v-1a.75.75 0 0 1 1.5 0v1c0 .138.112.25.25.25h1a.75.75 0 0 1 0 1.5h-1Zm11.25-11.25a1.75 1.75 0 0 0-1.75-1.75h-1a.75.75 0 0 0 0 1.5h1a.25.25 0 0 1 .25.25v1a.75.75 0 0 0 1.5 0v-1Zm0 9.5a1.75 1.75 0 0 1-1.75 1.75h-1a.75.75 0 0 1 0-1.5h1a.25.25 0 0 0 .25-.25v-1a.75.75 0 0 1 1.5 0v1Zm-5.5-9.75a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 0 0 1.5h2Zm.75 10.75a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75Zm-5.75-8.25a2.5 2.5 0 0 0 0 5h8a2.5 2.5 0 0 0 0-5h-8Zm-1 2.5a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1Z"
  }));
};
SvgBuyButtonButtonLayoutMajor.displayName = "BuyButtonButtonLayoutMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/BuyButtonHorizontalLayoutMajor.svg.mjs


var SvgBuyButtonHorizontalLayoutMajor = function SvgBuyButtonHorizontalLayoutMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M3.5 5.25c0-.966.784-1.75 1.75-1.75h1a.75.75 0 0 1 0 1.5h-1a.25.25 0 0 0-.25.25v1a.75.75 0 0 1-1.5 0v-1Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M6.5 7a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2Zm2 1.5h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11 8.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11.75 10.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M3.5 14.75c0 .966.784 1.75 1.75 1.75h1a.75.75 0 0 0 0-1.5h-1a.25.25 0 0 1-.25-.25v-1a.75.75 0 0 0-1.5 0v1Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14.75 3.5c.966 0 1.75.784 1.75 1.75v1a.75.75 0 0 1-1.5 0v-1a.25.25 0 0 0-.25-.25h-1a.75.75 0 0 1 0-1.5h1Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14.75 16.5a1.75 1.75 0 0 0 1.75-1.75v-1a.75.75 0 0 0-1.5 0v1a.25.25 0 0 1-.25.25h-1a.75.75 0 0 0 0 1.5h1Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11.75 4.25a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11 16.5a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 0 0 1.5h2Z"
  }));
};
SvgBuyButtonHorizontalLayoutMajor.displayName = "BuyButtonHorizontalLayoutMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/BuyButtonMajor.svg.mjs


var SvgBuyButtonMajor = function SvgBuyButtonMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M5.75 2.5a1.75 1.75 0 0 0-1.75 1.75v3.5c0 .966.784 1.75 1.75 1.75a.75.75 0 0 0 0-1.5.25.25 0 0 1-.25-.25v-3.5a.25.25 0 0 1 .25-.25h8.5a.25.25 0 0 1 .25.25v3.5a.25.25 0 0 1-.25.25h-.5a.75.75 0 0 0 0 1.5h.5a1.75 1.75 0 0 0 1.75-1.75v-3.5a1.75 1.75 0 0 0-1.75-1.75h-8.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M9.75 5a2.25 2.25 0 0 0-2.25 2.25v3.58l-.57-.258a1.75 1.75 0 0 0-2.429 1.216l-.07.312a2.25 2.25 0 0 0 .497 1.962l2.456 2.834a1.75 1.75 0 0 0 1.323.604h4.465a1.75 1.75 0 0 0 1.72-1.423l.67-3.523a1.75 1.75 0 0 0-1.267-2.018l-2.295-.612v-2.674a2.25 2.25 0 0 0-2.25-2.25Zm-.75 2.25a.75.75 0 0 1 1.5 0v3.25c0 .34.229.637.557.725l2.851.76a.25.25 0 0 1 .181.288l-.67 3.524a.25.25 0 0 1-.247.203h-4.465a.25.25 0 0 1-.19-.086l-2.456-2.835a.75.75 0 0 1-.165-.654l.07-.312a.25.25 0 0 1 .346-.173l1.63.735a.75.75 0 0 0 1.058-.684v-4.741Z"
  }));
};
SvgBuyButtonMajor.displayName = "BuyButtonMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/BuyButtonVerticalLayoutMajor.svg.mjs


var SvgBuyButtonVerticalLayoutMajor = function SvgBuyButtonVerticalLayoutMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M5.25 3.5a1.75 1.75 0 0 0-1.75 1.75v1a.75.75 0 0 0 1.5 0v-1a.25.25 0 0 1 .25-.25h1a.75.75 0 0 0 0-1.5h-1Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M16.5 5.25a1.75 1.75 0 0 0-1.75-1.75h-1a.75.75 0 0 0 0 1.5h1a.25.25 0 0 1 .25.25v1a.75.75 0 0 0 1.5 0v-1Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M16.5 14.75a1.75 1.75 0 0 1-1.75 1.75h-1a.75.75 0 0 1 0-1.5h1a.25.25 0 0 0 .25-.25v-1a.75.75 0 0 1 1.5 0v1Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M3.5 14.75c0 .966.784 1.75 1.75 1.75h1a.75.75 0 0 0 0-1.5h-1a.25.25 0 0 1-.25-.25v-1a.75.75 0 0 0-1.5 0v1Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M15.75 11.75a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M3.5 11a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-1.5 0v2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M9 5.5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2Zm2 1.5h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M7.75 13a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5Z"
  }));
};
SvgBuyButtonVerticalLayoutMajor.displayName = "BuyButtonVerticalLayoutMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CalendarMajor.svg.mjs


var SvgCalendarMajor = function SvgCalendarMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M7.75 3.5a.75.75 0 0 0-1.5 0v.407a3.075 3.075 0 0 0-.702.252 3.75 3.75 0 0 0-1.64 1.639c-.226.444-.32.924-.365 1.47-.043.531-.043 1.187-.043 2v1.464c0 .813 0 1.469.043 2 .045.546.14 1.026.366 1.47a3.75 3.75 0 0 0 1.639 1.64c.444.226.924.32 1.47.365.531.043 1.187.043 2 .043h3.383c.323 0 .542 0 .735-.02a3.75 3.75 0 0 0 3.344-3.344c.02-.193.02-.412.02-.735v-2.883c0-.813 0-1.469-.043-2-.045-.546-.14-1.026-.366-1.47a3.75 3.75 0 0 0-1.639-1.64 3.076 3.076 0 0 0-.702-.251v-.407a.75.75 0 0 0-1.5 0v.259c-.373-.009-.794-.009-1.268-.009h-1.964c-.474 0-.895 0-1.268.009v-.259Zm-1.521 1.995c.197-.1.458-.17.912-.207.462-.037 1.057-.038 1.909-.038h1.9c.853 0 1.447 0 1.91.038.453.037.714.107.912.207.423.216.767.56.983.984.1.197.17.458.207.912.014.18.024.38.029.609h-9.982c.006-.228.015-.429.03-.61.036-.453.106-.714.206-.911a2.25 2.25 0 0 1 .984-.984Zm-1.229 4.005v1.2c0 .853 0 1.447.038 1.91.037.453.107.714.207.912.216.423.56.767.984.983.197.1.458.17.912.207.462.037 1.057.038 1.909.038h3.306c.385 0 .52-.001.626-.012a2.25 2.25 0 0 0 2.006-2.006c.011-.106.012-.241.012-.626v-2.606h-10Z"
  }));
};
SvgCalendarMajor.displayName = "CalendarMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CalendarMinor.svg.mjs


var SvgCalendarMinor = function SvgCalendarMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M7.75 3.5a.75.75 0 0 0-1.5 0v.407a3.075 3.075 0 0 0-.702.252 3.75 3.75 0 0 0-1.64 1.639c-.226.444-.32.924-.365 1.47-.043.531-.043 1.187-.043 2v1.464c0 .813 0 1.469.043 2 .045.546.14 1.026.366 1.47a3.75 3.75 0 0 0 1.639 1.64c.444.226.924.32 1.47.365.531.043 1.187.043 2 .043h3.383c.323 0 .542 0 .735-.02a3.75 3.75 0 0 0 3.344-3.344c.02-.193.02-.412.02-.735v-2.883c0-.813 0-1.469-.043-2-.045-.546-.14-1.026-.366-1.47a3.75 3.75 0 0 0-1.639-1.64 3.076 3.076 0 0 0-.702-.251v-.407a.75.75 0 0 0-1.5 0v.259c-.373-.009-.794-.009-1.268-.009h-1.964c-.474 0-.895 0-1.268.009v-.259Zm-1.521 1.995c.197-.1.458-.17.912-.207.462-.037 1.057-.038 1.909-.038h1.9c.853 0 1.447 0 1.91.038.453.037.714.107.912.207.423.216.767.56.983.984.1.197.17.458.207.912.014.18.024.38.029.609h-9.982c.006-.228.015-.429.03-.61.036-.453.106-.714.206-.911a2.25 2.25 0 0 1 .984-.984Zm-1.229 4.005v1.2c0 .853 0 1.447.038 1.91.037.453.107.714.207.912.216.423.56.767.984.983.197.1.458.17.912.207.462.037 1.057.038 1.909.038h3.306c.385 0 .52-.001.626-.012a2.25 2.25 0 0 0 2.006-2.006c.011-.106.012-.241.012-.626v-2.606h-10Z"
  }));
};
SvgCalendarMinor.displayName = "CalendarMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CalendarTickMajor.svg.mjs


var SvgCalendarTickMajor = function SvgCalendarTickMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M7.75 3.5a.75.75 0 0 0-1.5 0v.407a3.075 3.075 0 0 0-.702.252 3.75 3.75 0 0 0-1.64 1.639c-.226.444-.32.924-.365 1.47-.043.531-.043 1.187-.043 2v1.513c0 .79 0 1.428.041 1.944.042.532.131 1 .346 1.434a3.75 3.75 0 0 0 1.704 1.704c.435.215.902.304 1.434.346.517.041 1.154.041 1.944.041h.031a.75.75 0 0 0 0-1.5c-.829 0-1.406 0-1.856-.036-.442-.035-.696-.1-.89-.196a2.25 2.25 0 0 1-1.022-1.023c-.095-.193-.16-.447-.196-.889-.035-.45-.036-1.027-.036-1.856v-1.25h10v1.5a.75.75 0 0 0 1.5 0v-1.732c0-.813 0-1.469-.043-2-.045-.546-.14-1.026-.366-1.47a3.75 3.75 0 0 0-1.639-1.64 3.076 3.076 0 0 0-.702-.251v-.407a.75.75 0 0 0-1.5 0v.259c-.373-.009-.794-.009-1.268-.009h-1.964c-.474 0-.895 0-1.268.009v-.259Zm7.241 4.5a10.674 10.674 0 0 0-.03-.61c-.037-.453-.106-.714-.206-.911a2.25 2.25 0 0 0-.984-.984c-.197-.1-.458-.17-.912-.207-.462-.037-1.056-.038-1.909-.038h-1.9c-.852 0-1.447 0-1.91.038-.453.037-.714.107-.911.207a2.25 2.25 0 0 0-.984.984c-.1.197-.17.458-.207.912-.014.18-.023.38-.03.609h9.983Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M17.28 12.72a.75.75 0 0 1 0 1.06l-3.5 3.5a.75.75 0 0 1-1.06 0l-1.75-1.75a.75.75 0 1 1 1.06-1.06l1.22 1.22 2.97-2.97a.75.75 0 0 1 1.06 0Z"
  }));
};
SvgCalendarTickMajor.displayName = "CalendarTickMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CalendarTimeMinor.svg.mjs


var SvgCalendarTimeMinor = function SvgCalendarTimeMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M6 1.75a.75.75 0 0 1 .75.75v.528c.487-.028 1.07-.028 1.768-.028h2.482v-.5a.75.75 0 0 1 1.5 0v.604a3.041 3.041 0 0 1 2.25 2.936c0 .835-.678 1.513-1.513 1.513h-8.733c-.004.288-.004.617-.004.997v2.468c0 1.233 1 2.232 2.232 2.232a.75.75 0 0 1 0 1.5 3.732 3.732 0 0 1-3.732-3.732v-2.5c0-.813 0-1.469.043-2 .045-.546.14-1.026.366-1.47a3.75 3.75 0 0 1 1.841-1.733v-.815a.75.75 0 0 1 .75-.75Zm7.237 4.303h-8.61c.033-.13.072-.234.118-.324a2.25 2.25 0 0 1 .984-.984c.197-.1.458-.17.912-.207.462-.037 1.057-.038 1.909-.038h3.16c.85 0 1.54.69 1.54 1.54v.005a.015.015 0 0 1-.004.004.015.015 0 0 1-.004.003h-.005Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14.25 12a.75.75 0 0 0-1.5 0v1.293c0 .331.132.65.366.884l.854.853a.75.75 0 1 0 1.06-1.06l-.78-.78v-1.19Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M13.5 18a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0-1.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
  }));
};
SvgCalendarTimeMinor.displayName = "CalendarTimeMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CameraMajor.svg.mjs


var SvgCameraMajor = function SvgCameraMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M10 7.25a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5Zm-1.75 3.25a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M8.584 4a2.75 2.75 0 0 0-2.435 1.472l-.346.658a.691.691 0 0 1-.612.37c-1.21 0-2.191.981-2.191 2.191v4.559a2.75 2.75 0 0 0 2.75 2.75h8.5a2.75 2.75 0 0 0 2.75-2.75v-4.559c0-1.21-.981-2.191-2.191-2.191a.691.691 0 0 1-.612-.37l-.346-.658a2.75 2.75 0 0 0-2.435-1.472h-2.832Zm-1.107 2.169a1.25 1.25 0 0 1 1.107-.669h2.832c.465 0 .89.258 1.107.669l.345.658a2.191 2.191 0 0 0 1.94 1.173c.383 0 .692.31.692.691v4.559c0 .69-.56 1.25-1.25 1.25h-8.5c-.69 0-1.25-.56-1.25-1.25v-4.559c0-.381.31-.691.691-.691a2.19 2.19 0 0 0 1.94-1.173l.346-.658Z"
  }));
};
SvgCameraMajor.displayName = "CameraMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CancelMajor.svg.mjs


var SvgCancelMajor = function SvgCancelMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13.97 15.03a.75.75 0 1 0 1.06-1.06l-3.97-3.97 3.97-3.97a.75.75 0 0 0-1.06-1.06l-3.97 3.97-3.97-3.97a.75.75 0 0 0-1.06 1.06l3.97 3.97-3.97 3.97a.75.75 0 1 0 1.06 1.06l3.97-3.97 3.97 3.97Z"
  }));
};
SvgCancelMajor.displayName = "CancelMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CancelMinor.svg.mjs


var SvgCancelMinor = function SvgCancelMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13.97 15.03a.75.75 0 1 0 1.06-1.06l-3.97-3.97 3.97-3.97a.75.75 0 0 0-1.06-1.06l-3.97 3.97-3.97-3.97a.75.75 0 0 0-1.06 1.06l3.97 3.97-3.97 3.97a.75.75 0 1 0 1.06 1.06l3.97-3.97 3.97 3.97Z"
  }));
};
SvgCancelMinor.displayName = "CancelMinor";



// EXTERNAL MODULE: ../polaris-icons/dist/icons/CancelSmallMinor.svg.mjs
var CancelSmallMinor_svg = __webpack_require__(16129);
;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CapitalFilledMajor.svg.mjs


var SvgCapitalFilledMajor = function SvgCapitalFilledMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10.749 11.957c2.545-.294 4.501-2.066 4.501-4.207 0-2.347-2.35-4.25-5.25-4.25s-5.25 1.903-5.25 4.25c0 2.141 1.956 3.913 4.501 4.207a.763.763 0 0 0-.001.043v4.25a.75.75 0 0 0 1.5 0v-4.25l-.001-.043Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M5 11.5c-.446 0-.872.083-1.265.235a3.5 3.5 0 0 0 4.53 4.53 3.5 3.5 0 0 0-3.265-4.765Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M15 11.5c.446 0 .872.083 1.265.235a3.5 3.5 0 0 1-4.53 4.53 3.5 3.5 0 0 1 3.265-4.765Z"
  }));
};
SvgCapitalFilledMajor.displayName = "CapitalFilledMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CapitalMajor.svg.mjs


var SvgCapitalMajor = function SvgCapitalMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M10.749 11.957c2.545-.294 4.501-2.066 4.501-4.207 0-2.347-2.35-4.25-5.25-4.25s-5.25 1.903-5.25 4.25c0 2.141 1.956 3.913 4.501 4.207a.763.763 0 0 0-.001.043v4.25a.75.75 0 0 0 1.5 0v-4.25l-.001-.043Zm-.749-1.457c2.383 0 3.75-1.512 3.75-2.75s-1.367-2.75-3.75-2.75-3.75 1.512-3.75 2.75 1.367 2.75 3.75 2.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M8.5 15c0 .446-.083.872-.235 1.265a3.5 3.5 0 0 1-4.53-4.53 3.5 3.5 0 0 1 4.765 3.265Zm-3.5-2a2 2 0 0 1 2 2 2 2 0 0 1-2-2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M11.5 15c0 .446.083.872.235 1.265a3.5 3.5 0 0 0 4.53-4.53 3.5 3.5 0 0 0-4.765 3.265Zm3.5-2a2 2 0 0 0-2 2 2 2 0 0 0 2-2Z"
  }));
};
SvgCapitalMajor.displayName = "CapitalMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CapturePaymentMinor.svg.mjs


var SvgCapturePaymentMinor = function SvgCapturePaymentMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M10.75 3.25a.75.75 0 0 0-1.5 0v2.097l-.756-.661a.75.75 0 1 0-.988 1.128l2 1.75a.75.75 0 0 0 .988 0l2-1.75a.75.75 0 0 0-.988-1.128l-.756.661v-2.097Zm1.682 4.781a2.27 2.27 0 0 1 4.115 1.917l-1.528 3.333a4.75 4.75 0 0 1-2.194 2.27l-2.24 1.12a.75.75 0 0 1-.67-1.342l2.24-1.12a3.25 3.25 0 0 0 1.5-1.553l1.528-3.333a.77.77 0 0 0-1.396-.65l-1.002 2.116a3.75 3.75 0 0 1-1.656 1.72c-.195.119-.41.21-.641.267l-1.806.452-.013.003-.987.247a.75.75 0 0 1-.364-1.456l2.624-.656c.155-.038.303-.093.444-.162a.827.827 0 0 0-.557-1.506l-.822.095a4.25 4.25 0 0 0-3.733 3.715l-.28 2.331a.75.75 0 1 1-1.489-.178l.28-2.331a5.75 5.75 0 0 1 5.05-5.027l.822-.095a2.325 2.325 0 0 1 2.206 1.025l.569-1.202Z"
  }));
};
SvgCapturePaymentMinor.displayName = "CapturePaymentMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CardReaderChipMajor.svg.mjs


var SvgCardReaderChipMajor = function SvgCardReaderChipMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M8.121 3.5h3.758c.395 0 .736 0 1.017.023.297.024.592.078.875.222.424.216.768.56.984.984.144.283.198.578.222.875.023.28.023.622.023 1.017v3.816a2.751 2.751 0 0 1 1.75 2.563v2a1.75 1.75 0 0 1-1.75 1.75h-10a1.75 1.75 0 0 1-1.75-1.75v-2a2.75 2.75 0 0 1 1.75-2.563v-3.816c0-.395 0-.736.023-1.017a2.29 2.29 0 0 1 .222-.875 2.25 2.25 0 0 1 .984-.984 2.29 2.29 0 0 1 .875-.222c.28-.023.622-.023 1.017-.023Zm.029 1.5h1.85v5h-3.5v-3.35c0-.432 0-.712.018-.924.017-.204.045-.28.064-.316a.75.75 0 0 1 .328-.328c.037-.02.112-.047.316-.064.212-.017.492-.018.924-.018Zm3.85 0v5h1.5v-3.35c0-.432 0-.712-.018-.924-.017-.204-.045-.28-.064-.316a.75.75 0 0 0-.327-.328c-.038-.02-.113-.047-.317-.064a10.44 10.44 0 0 0-.774-.018Zm-7.25 8c0-.69.56-1.25 1.25-1.25h8c.69 0 1.25.56 1.25 1.25v2a.25.25 0 0 1-.25.25h-10a.25.25 0 0 1-.25-.25v-2Z"
  }));
};
SvgCardReaderChipMajor.displayName = "CardReaderChipMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CardReaderMajor.svg.mjs


var SvgCardReaderMajor = function SvgCardReaderMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M5.75 3.5a2.25 2.25 0 0 0-2.25 2.25v4.75a2.25 2.25 0 0 0 2.25 2.25h.32c-.046.243-.07.494-.07.75v.75a1 1 0 0 0 1 1h2.25v.75a.75.75 0 0 0 1.5 0v-.75h2.25a1 1 0 0 0 1-1v-.75a4.02 4.02 0 0 0-.07-.75h.32a2.25 2.25 0 0 0 2.25-2.25v-4.75a2.25 2.25 0 0 0-2.25-2.25h-8.5Zm6.75 10.25v-.25a2.5 2.5 0 0 0-5 0v.25h5Zm-2.5-4.25a3.996 3.996 0 0 0-3.308 1.75h-.942a.75.75 0 0 1-.75-.75v-2.25h10v2.25a.75.75 0 0 1-.75.75h-.942a3.996 3.996 0 0 0-3.308-1.75Zm5-3.25v-.5a.75.75 0 0 0-.75-.75h-8.5a.75.75 0 0 0-.75.75v.5h10Z"
  }));
};
SvgCardReaderMajor.displayName = "CardReaderMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CardReaderTapMajor.svg.mjs


var SvgCardReaderTapMajor = function SvgCardReaderTapMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10 4.25a3.25 3.25 0 0 0-3.25 3.25.75.75 0 0 1-1.5 0 4.75 4.75 0 0 1 9.5 0 .75.75 0 0 1-1.5 0 3.25 3.25 0 0 0-3.25-3.25Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M6.75 9a2.25 2.25 0 0 0-2.25 2.25v5c0 .414.336.75.75.75h9.5a.75.75 0 0 0 .75-.75v-5a2.25 2.25 0 0 0-2.25-2.25h-6.5Zm1.25 6.5h-2v-4.25a.75.75 0 0 1 .75-.75h1.25v5Zm2 0v-5h3.25a.75.75 0 0 1 .75.75v4.25h-4Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M9.25 7.5a.75.75 0 0 1 1.5 0 .75.75 0 0 0 1.5 0 2.25 2.25 0 0 0-4.5 0 .75.75 0 0 0 1.5 0Z"
  }));
};
SvgCardReaderTapMajor.displayName = "CardReaderTapMajor";



// EXTERNAL MODULE: ../polaris-icons/dist/icons/CaretDownMinor.svg.mjs
var CaretDownMinor_svg = __webpack_require__(23591);
// EXTERNAL MODULE: ../polaris-icons/dist/icons/CaretUpMinor.svg.mjs
var CaretUpMinor_svg = __webpack_require__(703);
;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CartDownFilledMajor.svg.mjs


var SvgCartDownFilledMajor = function SvgCartDownFilledMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M3.25 3a.75.75 0 0 0 0 1.5h1.612a.25.25 0 0 1 .248.22l1.04 8.737a1.75 1.75 0 0 0 1.738 1.543h6.362a.75.75 0 0 0 0-1.5h-6.362a.25.25 0 0 1-.248-.22l-.093-.78h6.35a2.75 2.75 0 0 0 2.743-2.54l.358-4.652a.75.75 0 0 0-.748-.808h-4.25v3.94l1.22-1.22a.75.75 0 1 1 1.06 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 0 1 1.06-1.06l1.22 1.22v-3.94h-3.906a1.75 1.75 0 0 0-1.732-1.5h-1.612Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M15 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }));
};
SvgCartDownFilledMajor.displayName = "CartDownFilledMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CartDownMajor.svg.mjs


var SvgCartDownMajor = function SvgCartDownMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M3.25 3a.75.75 0 0 0 0 1.5h1.612a.25.25 0 0 1 .248.22l1.04 8.737a1.75 1.75 0 0 0 1.738 1.543h6.362a.75.75 0 0 0 0-1.5h-6.362a.25.25 0 0 1-.248-.22l-.093-.78h6.35a2.75 2.75 0 0 0 2.743-2.54l.358-4.652a.75.75 0 0 0-1.496-.116l-.358 4.654a1.25 1.25 0 0 1-1.246 1.154h-6.53l-.768-6.457a1.75 1.75 0 0 0-1.738-1.543h-1.612Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12 3.75a.75.75 0 0 0-1.5 0v3.69l-1.22-1.22a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l2.5-2.5a.75.75 0 0 0-1.06-1.06l-1.22 1.22v-3.69Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M15 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }));
};
SvgCartDownMajor.displayName = "CartDownMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CartFilledMajor.svg.mjs


var SvgCartFilledMajor = function SvgCartFilledMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M3.25 3a.75.75 0 0 0 0 1.5h1.612a.25.25 0 0 1 .248.22l1.04 8.737a1.75 1.75 0 0 0 1.738 1.543h6.362a.75.75 0 0 0 0-1.5h-6.362a.25.25 0 0 1-.248-.22l-.093-.78h6.35a2.75 2.75 0 0 0 2.743-2.54l.358-4.652a.75.75 0 0 0-.748-.808h-9.656a1.75 1.75 0 0 0-1.732-1.5h-1.612Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M9 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M15 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }));
};
SvgCartFilledMajor.displayName = "CartFilledMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CartMajor.svg.mjs


var SvgCartMajor = function SvgCartMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M2.5 3.75a.75.75 0 0 1 .75-.75h1.612a1.75 1.75 0 0 1 1.732 1.5h9.656a.75.75 0 0 1 .748.808l-.358 4.653a2.75 2.75 0 0 1-2.742 2.539h-6.351l.093.78a.25.25 0 0 0 .248.22h6.362a.75.75 0 0 1 0 1.5h-6.362a1.75 1.75 0 0 1-1.738-1.543l-1.04-8.737a.25.25 0 0 0-.248-.22h-1.612a.75.75 0 0 1-.75-.75Zm4.868 7.25h6.53a1.25 1.25 0 0 0 1.246-1.154l.296-3.846h-8.667l.595 5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M15 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }));
};
SvgCartMajor.displayName = "CartMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CartUpMajor.svg.mjs


var SvgCartUpMajor = function SvgCartUpMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M3.25 3a.75.75 0 0 0 0 1.5h1.612a.25.25 0 0 1 .248.22l1.04 8.737a1.75 1.75 0 0 0 1.738 1.543h6.362a.75.75 0 0 0 0-1.5h-6.362a.25.25 0 0 1-.248-.22l-.093-.78h6.35a2.75 2.75 0 0 0 2.743-2.54l.358-4.652a.75.75 0 0 0-1.496-.116l-.358 4.654a1.25 1.25 0 0 1-1.246 1.154h-6.53l-.768-6.457a1.75 1.75 0 0 0-1.738-1.543h-1.612Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12 9.25a.75.75 0 0 1-1.5 0v-3.69l-1.22 1.22a.75.75 0 0 1-1.06-1.06l2.5-2.5a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 0 1-1.06 1.06l-1.22-1.22v3.69Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M15 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }));
};
SvgCartUpMajor.displayName = "CartUpMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CashDollarFilledMajor.svg.mjs


var SvgCashDollarFilledMajor = function SvgCashDollarFilledMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm-.5-10.5a.75.75 0 0 1 1.5 0v.25h.75a.75.75 0 0 1 0 1.5h-2.25a.5.5 0 0 0 0 1h1a2 2 0 1 1 0 4v.25a.75.75 0 0 1-1.5 0v-.25h-.75a.75.75 0 0 1 0-1.5h2.25a.5.5 0 0 0 0-1h-1a2 2 0 1 1 0-4v-.25Z"
  }));
};
SvgCashDollarFilledMajor.displayName = "CashDollarFilledMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CashDollarMajor.svg.mjs


var SvgCashDollarMajor = function SvgCashDollarMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M9.5 6.5a.75.75 0 0 1 1.5 0v.25h.75a.75.75 0 0 1 0 1.5h-2.25a.5.5 0 0 0 0 1h1a2 2 0 1 1 0 4v.25a.75.75 0 0 1-1.5 0v-.25h-.75a.75.75 0 0 1 0-1.5h2.25a.5.5 0 0 0 0-1h-1a2 2 0 1 1 0-4v-.25Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
  }));
};
SvgCashDollarMajor.displayName = "CashDollarMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CashDollarMinor.svg.mjs


var SvgCashDollarMinor = function SvgCashDollarMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M9.5 6.5a.75.75 0 0 1 1.5 0v.25h.75a.75.75 0 0 1 0 1.5h-2.25a.5.5 0 0 0 0 1h1a2 2 0 1 1 0 4v.25a.75.75 0 0 1-1.5 0v-.25h-.75a.75.75 0 0 1 0-1.5h2.25a.5.5 0 0 0 0-1h-1a2 2 0 1 1 0-4v-.25Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
  }));
};
SvgCashDollarMinor.displayName = "CashDollarMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CashEuroMajor.svg.mjs


var SvgCashEuroMajor = function SvgCashEuroMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M9.76 7.893c-.248.149-.579.533-.707 1.357h1.697a.75.75 0 0 1 0 1.5h-1.697c.128.823.46 1.207.708 1.357.309.185.684.137.959-.138a.75.75 0 1 1 1.06 1.061c-.725.726-1.85.927-2.79.363-.788-.472-1.304-1.385-1.449-2.643h-.291a.75.75 0 1 1 0-1.5h.291c.145-1.258.661-2.171 1.448-2.643.941-.565 2.066-.363 2.791.362a.75.75 0 0 1-1.06 1.061c-.275-.274-.65-.323-.96-.137Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm-5.5 7a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Z"
  }));
};
SvgCashEuroMajor.displayName = "CashEuroMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CashPoundMajor.svg.mjs


var SvgCashPoundMajor = function SvgCashPoundMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10 6a1.75 1.75 0 0 0-1.75 1.75v1.5h-.75a.75.75 0 0 0 0 1.5h.75v1h-.75a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-2.25v-1h.75a.75.75 0 0 0 0-1.5h-.75v-1.5a.25.25 0 0 1 .25-.25h.75v.5a.75.75 0 0 0 1.5 0v-.75c0-.69-.56-1.25-1.25-1.25h-1Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm-5.5 7a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Z"
  }));
};
SvgCashPoundMajor.displayName = "CashPoundMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CashRupeeMajor.svg.mjs


var SvgCashRupeeMajor = function SvgCashRupeeMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11.889 13.893a.75.75 0 0 0-.246-1.032l-1.713-1.054a2.487 2.487 0 0 0 1.059-1.807h1.261a.75.75 0 0 0 0-1.5h-1.25v-.75h1.25a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 1 0 0 1.5h1.75v.75h-1.75a.75.75 0 0 0 0 1.5h1.721a.989.989 0 0 1-.96.75c-.902 0-1.237 1.184-.468 1.657l2.814 1.732a.75.75 0 0 0 1.032-.246Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm-5.5 7a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Z"
  }));
};
SvgCashRupeeMajor.displayName = "CashRupeeMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CashYenMajor.svg.mjs


var SvgCashYenMajor = function SvgCashYenMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M7.436 6.506a.75.75 0 0 1 1.058-.07l1.506 1.317 1.506-1.317a.75.75 0 0 1 .988 1.128l-1.744 1.526v.41h1.25a.75.75 0 0 1 0 1.5h-1.25v.5h1.25a.75.75 0 0 1 0 1.5h-1.25v.5a.75.75 0 0 1-1.5 0v-.5h-1.25a.75.75 0 0 1 0-1.5h1.25v-.5h-1.25a.75.75 0 0 1 0-1.5h1.25v-.41l-1.744-1.526a.75.75 0 0 1-.07-1.058Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm-5.5 7a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Z"
  }));
};
SvgCashYenMajor.displayName = "CashYenMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CategoriesMajor.svg.mjs


var SvgCategoriesMajor = function SvgCategoriesMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M7.25 3.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M5 6.5a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M3.5 10.75a2.75 2.75 0 0 1 2.75-2.75h7.5a2.75 2.75 0 0 1 2.75 2.75v3a2.75 2.75 0 0 1-2.75 2.75h-7.5a2.75 2.75 0 0 1-2.75-2.75v-3Zm2.75-1.25c-.69 0-1.25.56-1.25 1.25v3c0 .69.56 1.25 1.25 1.25h7.5c.69 0 1.25-.56 1.25-1.25v-3c0-.69-.56-1.25-1.25-1.25h-7.5Z"
  }));
};
SvgCategoriesMajor.displayName = "CategoriesMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ChannelsMajor.svg.mjs


var SvgChannelsMajor = function SvgChannelsMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M6.25 3.5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.25v1.5h-.25a2.75 2.75 0 0 0-2.75 2.75v2a2.75 2.75 0 0 0 2.75 2.75h2a2.75 2.75 0 0 0 2.75-2.75v-.25h1.5v.25a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.25h-1.5v-.25c0-.487-.127-.944-.348-1.34l2.909-2.91h1.939a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v1.94l-2.91 2.908a2.738 2.738 0 0 0-1.34-.348h-.25v-1.5h.25a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2Zm.5 1.5v1h1v-1h-1Zm-.5 5.5c-.69 0-1.25.56-1.25 1.25v2c0 .69.56 1.25 1.25 1.25h2c.69 0 1.25-.56 1.25-1.25v-2c0-.69-.56-1.25-1.25-1.25h-2Zm7.75-4.5v-1h1v1h-1Zm0 6.25v1h1v-1h-1Z"
  }));
};
SvgChannelsMajor.displayName = "ChannelsMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ChatMajor.svg.mjs


var SvgChatMajor = function SvgChatMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6 8a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.75 9.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M3 8.75a4.75 4.75 0 0 1 4.75-4.75h4.5a4.75 4.75 0 0 1 4.75 4.75v.75a4.75 4.75 0 0 1-4.75 4.75h-1.626l-3.178 2.353a.75.75 0 0 1-1.196-.603v-1.992a4.751 4.751 0 0 1-3.25-4.508v-.75Zm4.75-3.25a3.25 3.25 0 0 0-3.25 3.25v.75a3.251 3.251 0 0 0 2.64 3.193.75.75 0 0 1 .61.737v1.082l2.18-1.615a.75.75 0 0 1 .447-.147h1.873a3.25 3.25 0 0 0 3.25-3.25v-.75a3.25 3.25 0 0 0-3.25-3.25h-4.5Z"
  }));
};
SvgChatMajor.displayName = "ChatMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ChecklistAlternateMajor.svg.mjs


var SvgChecklistAlternateMajor = function SvgChecklistAlternateMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M8.75 10.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M7.75 14.25a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M9.75 10.25a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10.5 12.5a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5h-2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M6.515 4.75a2 2 0 0 1 1.985-1.75h3a2 2 0 0 1 1.985 1.75h.265a2.25 2.25 0 0 1 2.25 2.25v7.75a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-7.75a2.25 2.25 0 0 1 2.25-2.25h.265Zm1.985-.25h3a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Zm-2.25 1.75h.265a2 2 0 0 0 1.985 1.75h3a2 2 0 0 0 1.985-1.75h.265a.75.75 0 0 1 .75.75v7.75a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75v-7.75a.75.75 0 0 1 .75-.75Z"
  }));
};
SvgChecklistAlternateMajor.displayName = "ChecklistAlternateMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ChecklistMajor.svg.mjs


var SvgChecklistMajor = function SvgChecklistMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13.28 9.22a.75.75 0 0 1 0 1.06l-3.5 3.5a.75.75 0 0 1-1.06 0l-1.75-1.75a.75.75 0 1 1 1.06-1.06l1.22 1.22 2.97-2.97a.75.75 0 0 1 1.06 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M6.515 4.75a2 2 0 0 1 1.985-1.75h3a2 2 0 0 1 1.985 1.75h.265a2.25 2.25 0 0 1 2.25 2.25v7.75a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-7.75a2.25 2.25 0 0 1 2.25-2.25h.265Zm1.985-.25h3a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Zm-1.987 1.73.002.02h-.265a.75.75 0 0 0-.75.75v7.75c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75v-7.75a.75.75 0 0 0-.75-.75h-.265a2 2 0 0 1-1.985 1.75h-3a2 2 0 0 1-1.987-1.77Z"
  }));
};
SvgChecklistMajor.displayName = "ChecklistMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CheckoutMajor.svg.mjs


var SvgCheckoutMajor = function SvgCheckoutMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M2.5 3.75a.75.75 0 0 1 .75-.75h1.612a1.75 1.75 0 0 1 1.732 1.5h9.656a.75.75 0 0 1 .748.808l-.358 4.653a2.75 2.75 0 0 1-2.742 2.539h-6.351l.093.78a.25.25 0 0 0 .248.22h6.362a.75.75 0 0 1 0 1.5h-6.362a1.75 1.75 0 0 1-1.738-1.543l-1.04-8.737a.25.25 0 0 0-.248-.22h-1.612a.75.75 0 0 1-.75-.75Zm4.868 7.25h6.53a1.25 1.25 0 0 0 1.246-1.154l.296-3.846h-8.667l.595 5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M15 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }));
};
SvgCheckoutMajor.displayName = "CheckoutMajor";



// EXTERNAL MODULE: ../polaris-icons/dist/icons/ChevronDownMinor.svg.mjs
var ChevronDownMinor_svg = __webpack_require__(46852);
;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ChevronLeftMinor.svg.mjs


var SvgChevronLeftMinor = function SvgChevronLeftMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M11.78 5.47a.75.75 0 0 1 0 1.06l-3.47 3.47 3.47 3.47a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 0Z"
  }));
};
SvgChevronLeftMinor.displayName = "ChevronLeftMinor";



// EXTERNAL MODULE: ../polaris-icons/dist/icons/ChevronRightMinor.svg.mjs
var ChevronRightMinor_svg = __webpack_require__(90349);
;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ChevronUpMinor.svg.mjs


var SvgChevronUpMinor = function SvgChevronUpMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M14.53 12.28a.75.75 0 0 1-1.06 0l-3.47-3.47-3.47 3.47a.75.75 0 0 1-1.06-1.06l4-4a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06Z"
  }));
};
SvgChevronUpMinor.displayName = "ChevronUpMinor";



// EXTERNAL MODULE: ../polaris-icons/dist/icons/CircleAlertMajor.svg.mjs
var CircleAlertMajor_svg = __webpack_require__(35723);
;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CircleCancelMajor.svg.mjs


var SvgCircleCancelMajor = function SvgCircleCancelMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M10 15.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Zm0 1.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm3.03-10.03a.75.75 0 0 1 0 1.06l-1.97 1.97 1.97 1.97a.75.75 0 1 1-1.06 1.06l-1.97-1.97-1.97 1.97a.75.75 0 0 1-1.06-1.06l1.97-1.97-1.97-1.97a.75.75 0 0 1 1.06-1.06l1.97 1.97 1.97-1.97a.75.75 0 0 1 1.06 0Z"
  }));
};
SvgCircleCancelMajor.displayName = "CircleCancelMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CircleCancelMinor.svg.mjs


var SvgCircleCancelMinor = function SvgCircleCancelMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13.03 6.97a.75.75 0 0 1 0 1.06l-1.97 1.97 1.97 1.97a.75.75 0 1 1-1.06 1.06l-1.97-1.97-1.97 1.97a.75.75 0 0 1-1.06-1.06l1.97-1.97-1.97-1.97a.75.75 0 0 1 1.06-1.06l1.97 1.97 1.97-1.97a.75.75 0 0 1 1.06 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"
  }));
};
SvgCircleCancelMinor.displayName = "CircleCancelMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CircleChevronDownMinor.svg.mjs


var SvgCircleChevronDownMinor = function SvgCircleChevronDownMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M7.53 8.22a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0-1.06-1.06l-2.47 2.47-2.47-2.47Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
  }));
};
SvgCircleChevronDownMinor.displayName = "CircleChevronDownMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CircleChevronLeftMinor.svg.mjs


var SvgCircleChevronLeftMinor = function SvgCircleChevronLeftMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M11.78 6.47a.75.75 0 0 1 0 1.06l-2.47 2.47 2.47 2.47a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M10 15.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Zm0 1.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"
  }));
};
SvgCircleChevronLeftMinor.displayName = "CircleChevronLeftMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CircleChevronRightMinor.svg.mjs


var SvgCircleChevronRightMinor = function SvgCircleChevronRightMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M8.22 12.47a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 .001-1.06l-3-3.012a.75.75 0 0 0-1.062 1.059l2.472 2.482-2.471 2.47Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
  }));
};
SvgCircleChevronRightMinor.displayName = "CircleChevronRightMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CircleChevronUpMinor.svg.mjs


var SvgCircleChevronUpMinor = function SvgCircleChevronUpMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.47 11.78a.75.75 0 1 0 1.06-1.06l-3-3a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l2.47-2.47 2.47 2.47Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
  }));
};
SvgCircleChevronUpMinor.displayName = "CircleChevronUpMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CircleDisableMinor.svg.mjs


var SvgCircleDisableMinor = function SvgCircleDisableMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-3.677 4.383a5.5 5.5 0 0 1-7.706-7.706l7.706 7.706Zm1.06-1.06-7.706-7.706a5.5 5.5 0 0 1 7.706 7.706Z"
  }));
};
SvgCircleDisableMinor.displayName = "CircleDisableMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CircleDisabledMajor.svg.mjs


var SvgCircleDisabledMajor = function SvgCircleDisabledMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-3.677 4.383a5.5 5.5 0 0 1-7.706-7.706l7.706 7.706Zm1.06-1.06-7.706-7.706a5.5 5.5 0 0 1 7.706 7.706Z"
  }));
};
SvgCircleDisabledMajor.displayName = "CircleDisabledMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CircleDotsMajor.svg.mjs


var SvgCircleDotsMajor = function SvgCircleDotsMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.5 11.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10 11.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14.75 10a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
  }));
};
SvgCircleDotsMajor.displayName = "CircleDotsMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CircleDownMajor.svg.mjs


var SvgCircleDownMajor = function SvgCircleDownMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10.75 6.5a.75.75 0 0 0-1.5 0v5.19l-1.22-1.22a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l2.5-2.5a.75.75 0 1 0-1.06-1.06l-1.22 1.22v-5.19Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
  }));
};
SvgCircleDownMajor.displayName = "CircleDownMajor";



// EXTERNAL MODULE: ../polaris-icons/dist/icons/CircleInformationMajor.svg.mjs
var CircleInformationMajor_svg = __webpack_require__(39131);
;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CircleLeftMajor.svg.mjs


var SvgCircleLeftMajor = function SvgCircleLeftMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M15.5 10a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm1.5 0a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-3.5.75a.75.75 0 0 0 0-1.5h-5.19l1.22-1.22a.75.75 0 0 0-1.06-1.06l-2.5 2.5a.75.75 0 0 0 0 1.06l2.5 2.5a.75.75 0 0 0 1.06-1.06l-1.22-1.22h5.19Z"
  }));
};
SvgCircleLeftMajor.displayName = "CircleLeftMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CircleMinusMajor.svg.mjs


var SvgCircleMinusMajor = function SvgCircleMinusMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M7 9.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-6Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
  }));
};
SvgCircleMinusMajor.displayName = "CircleMinusMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CircleMinusMinor.svg.mjs


var SvgCircleMinusMinor = function SvgCircleMinusMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M7 9.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-6Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
  }));
};
SvgCircleMinusMinor.displayName = "CircleMinusMinor";



// EXTERNAL MODULE: ../polaris-icons/dist/icons/CircleMinusOutlineMinor.svg.mjs
var CircleMinusOutlineMinor_svg = __webpack_require__(93195);
;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CirclePlusMajor.svg.mjs


var SvgCirclePlusMajor = function SvgCirclePlusMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.25 10a.75.75 0 0 1 .75-.75h2.25v-2.25a.75.75 0 0 1 1.5 0v2.25h2.25a.75.75 0 0 1 0 1.5h-2.25v2.25a.75.75 0 0 1-1.5 0v-2.25h-2.25a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"
  }));
};
SvgCirclePlusMajor.displayName = "CirclePlusMajor";



// EXTERNAL MODULE: ../polaris-icons/dist/icons/CirclePlusMinor.svg.mjs
var CirclePlusMinor_svg = __webpack_require__(79365);
// EXTERNAL MODULE: ../polaris-icons/dist/icons/CirclePlusOutlineMinor.svg.mjs
var CirclePlusOutlineMinor_svg = __webpack_require__(62832);
;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CircleRightMajor.svg.mjs


var SvgCircleRightMajor = function SvgCircleRightMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.5 9.25a.75.75 0 0 0 0 1.5h5.19l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 1 0-1.06 1.06l1.22 1.22h-5.19Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
  }));
};
SvgCircleRightMajor.displayName = "CircleRightMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CircleTickMajor.svg.mjs


var SvgCircleTickMajor = function SvgCircleTickMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13.28 9.03a.75.75 0 0 0-1.06-1.06l-2.97 2.97-1.22-1.22a.75.75 0 0 0-1.06 1.06l1.75 1.75a.75.75 0 0 0 1.06 0l3.5-3.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
  }));
};
SvgCircleTickMajor.displayName = "CircleTickMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CircleTickMinor.svg.mjs


var SvgCircleTickMinor = function SvgCircleTickMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13.28 9.03a.75.75 0 0 0-1.06-1.06l-2.97 2.97-1.22-1.22a.75.75 0 0 0-1.06 1.06l1.75 1.75a.75.75 0 0 0 1.06 0l3.5-3.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
  }));
};
SvgCircleTickMinor.displayName = "CircleTickMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CircleTickOutlineMinor.svg.mjs


var SvgCircleTickOutlineMinor = function SvgCircleTickOutlineMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13.28 9.03a.75.75 0 0 0-1.06-1.06l-2.97 2.97-1.22-1.22a.75.75 0 0 0-1.06 1.06l1.75 1.75a.75.75 0 0 0 1.06 0l3.5-3.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
  }));
};
SvgCircleTickOutlineMinor.displayName = "CircleTickOutlineMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CircleUpMajor.svg.mjs


var SvgCircleUpMajor = function SvgCircleUpMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10.75 13.5a.75.75 0 0 1-1.5 0v-5.19l-1.22 1.22a.75.75 0 0 1-1.06-1.06l2.5-2.5a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 0 1-1.06 1.06l-1.22-1.22v5.19Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
  }));
};
SvgCircleUpMajor.displayName = "CircleUpMajor";



// EXTERNAL MODULE: ../polaris-icons/dist/icons/ClipboardMinor.svg.mjs
var ClipboardMinor_svg = __webpack_require__(42736);
;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ClockMajor.svg.mjs


var SvgClockMajor = function SvgClockMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10.75 6a.75.75 0 0 0-1.5 0v4c0 .199.079.39.22.53l2 2a.75.75 0 1 0 1.06-1.06l-1.78-1.78v-3.69Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
  }));
};
SvgClockMajor.displayName = "ClockMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ClockMinor.svg.mjs


var SvgClockMinor = function SvgClockMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10.75 6a.75.75 0 0 0-1.5 0v4c0 .199.079.39.22.53l2 2a.75.75 0 1 0 1.06-1.06l-1.78-1.78v-3.69Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
  }));
};
SvgClockMinor.displayName = "ClockMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CodeMajor.svg.mjs


var SvgCodeMajor = function SvgCodeMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.221 4.956a.75.75 0 0 0-1.442-.412l-3 10.5a.75.75 0 1 0 1.442.412l3-10.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M7.03 6.22a.75.75 0 0 1 0 1.06l-2.72 2.72 2.72 2.72a.75.75 0 0 1-1.06 1.06l-3.25-3.25a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.97 13.78a.75.75 0 0 1 0-1.06l2.72-2.72-2.72-2.72a.75.75 0 0 1 1.06-1.06l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0Z"
  }));
};
SvgCodeMajor.displayName = "CodeMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CodeMinor.svg.mjs


var SvgCodeMinor = function SvgCodeMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.221 4.956a.75.75 0 0 0-1.442-.412l-3 10.5a.75.75 0 1 0 1.442.412l3-10.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M7.03 6.22a.75.75 0 0 1 0 1.06l-2.72 2.72 2.72 2.72a.75.75 0 0 1-1.06 1.06l-3.25-3.25a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.97 13.78a.75.75 0 0 1 0-1.06l2.72-2.72-2.72-2.72a.75.75 0 0 1 1.06-1.06l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0Z"
  }));
};
SvgCodeMinor.displayName = "CodeMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CollectionReferenceMinor.svg.mjs


var SvgCollectionReferenceMinor = function SvgCollectionReferenceMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.5 6.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M10.169 3a3.75 3.75 0 0 0-2.652 1.098l-3.883 3.883a2.75 2.75 0 0 0 0 3.89l2.672 2.672a2.5 2.5 0 0 0 3.536 0l4.206-4.206a3.25 3.25 0 0 0 .952-2.298v-2.289a2.75 2.75 0 0 0-2.75-2.75h-2.081Zm-1.591 2.159a2.25 2.25 0 0 1 1.59-.659h2.082c.69 0 1.25.56 1.25 1.25v2.289c0 .464-.184.909-.513 1.237l-4.206 4.206a1 1 0 0 1-1.414 0l-2.672-2.672a1.25 1.25 0 0 1 0-1.768l3.883-3.883Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M17.5 6.25a.75.75 0 0 0-1.5 0v2.964c0 .465-.184.91-.513 1.238l-.017.018a.75.75 0 1 0 1.06 1.06l.018-.017a3.25 3.25 0 0 0 .952-2.299v-2.964Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M17.53 16.47a.75.75 0 0 1-1.06 1.06l-2.22-2.22v1.19a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75h3a.75.75 0 1 1 0 1.5h-1.19l2.22 2.22Z"
  }));
};
SvgCollectionReferenceMinor.displayName = "CollectionReferenceMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CollectionsFilledMajor.svg.mjs


var SvgCollectionsFilledMajor = function SvgCollectionsFilledMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M7.517 4.348a3.75 3.75 0 0 1 2.652-1.098h1.831a2.75 2.75 0 0 1 2.75 2.75v2.039a3.25 3.25 0 0 1-.952 2.298l-3.956 3.956a2.5 2.5 0 0 1-3.536 0l-2.422-2.422a2.75 2.75 0 0 1 0-3.89l3.633-3.633Zm3.983 3.152a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M17.5 6.25a.75.75 0 0 0-1.5 0v3.029c0 .468-.188.917-.521 1.245l-4.756 4.692a.75.75 0 1 0 1.054 1.068l4.755-4.692a3.25 3.25 0 0 0 .968-2.313v-3.029Z"
  }));
};
SvgCollectionsFilledMajor.displayName = "CollectionsFilledMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CollectionsMajor.svg.mjs


var SvgCollectionsMajor = function SvgCollectionsMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11.5 7.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M7.517 4.098a3.75 3.75 0 0 1 2.652-1.098h2.081a2.75 2.75 0 0 1 2.75 2.75v2.289a3.25 3.25 0 0 1-.952 2.298l-4.206 4.206a2.5 2.5 0 0 1-3.536 0l-2.672-2.672a2.75 2.75 0 0 1 0-3.89l3.883-3.883Zm2.652.402a2.25 2.25 0 0 0-1.591.659l-3.883 3.883a1.25 1.25 0 0 0 0 1.768l2.672 2.672a1 1 0 0 0 1.414 0l4.206-4.206a1.75 1.75 0 0 0 .513-1.237v-2.289c0-.69-.56-1.25-1.25-1.25h-2.081Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M16.75 5.5a.75.75 0 0 1 .75.75v3.029a3.25 3.25 0 0 1-.968 2.313l-4.755 4.692a.75.75 0 1 1-1.054-1.068l4.756-4.692a1.75 1.75 0 0 0 .521-1.245v-3.029a.75.75 0 0 1 .75-.75Z"
  }));
};
SvgCollectionsMajor.displayName = "CollectionsMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ColorNoneMinor.svg.mjs


var SvgColorNoneMinor = function SvgColorNoneMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M15.64 5.853a6.968 6.968 0 0 1 1.36 4.147 1.75 1.75 0 0 1-1.75 1.75h-1.5a2 2 0 0 0-2 2v1.5a1.75 1.75 0 0 1-1.75 1.75 6.968 6.968 0 0 1-4.147-1.36l-1.015 1.014a.75.75 0 0 1-1.066-1.055l.005-.005 11.253-11.253.005-.005a.75.75 0 0 1 1.056 1.066l-.451.45Zm-.39 4.397h-1.5a3.5 3.5 0 0 0-3.5 3.5v1.5a.25.25 0 0 1-.25.25 5.474 5.474 0 0 1-3.071-.937l7.634-7.634a5.47 5.47 0 0 1 .937 3.071.25.25 0 0 1-.25.25Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13.38 3.869a7 7 0 0 0-9.512 9.512l1.118-1.117a5.5 5.5 0 0 1 7.278-7.278l1.117-1.117Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10.975 6.275a1 1 0 1 0-1.2 1.2l1.2-1.2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M8 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }));
};
SvgColorNoneMinor.displayName = "ColorNoneMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ColorsMajor.svg.mjs


var SvgColorsMajor = function SvgColorsMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11 6.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M7 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M8 11.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M10 3a7 7 0 0 0 0 14 1.75 1.75 0 0 0 1.75-1.75v-1.5a2 2 0 0 1 2-2h1.5a1.75 1.75 0 0 0 1.75-1.75 7 7 0 0 0-7-7Zm3.75 7.25h1.5a.25.25 0 0 0 .25-.25 5.5 5.5 0 1 0-5.5 5.5.25.25 0 0 0 .25-.25v-1.5a3.5 3.5 0 0 1 3.5-3.5Z"
  }));
};
SvgColorsMajor.displayName = "ColorsMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/Column1Major.svg.mjs


var SvgColumn1Major = function SvgColumn1Major(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M13 4.5h-6a1.5 1.5 0 0 0-1.5 1.5v8a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5v-8a1.5 1.5 0 0 0-1.5-1.5Zm-6-1.5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3h-6Z"
  }));
};
SvgColumn1Major.displayName = "Column1Major";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ColumnWithTextMajor.svg.mjs


var SvgColumnWithTextMajor = function SvgColumnWithTextMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M3 5.75c0-.966.784-1.75 1.75-1.75h3.25c.966 0 1.75.784 1.75 1.75v3a1.75 1.75 0 0 1-1.75 1.75h-3.25a1.75 1.75 0 0 1-1.75-1.75v-3Zm1.75-.25a.25.25 0 0 0-.25.25v3c0 .138.112.25.25.25h3.25a.25.25 0 0 0 .25-.25v-3a.25.25 0 0 0-.25-.25h-3.25Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M3 12.5a.75.75 0 0 1 .75-.75h5.25a.75.75 0 0 1 0 1.5h-5.25a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M3.75 14.5a.75.75 0 0 0 0 1.5h2.625a.75.75 0 0 0 0-1.5h-2.625Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11 14.5a.75.75 0 0 0 0 1.5h2.625a.75.75 0 0 0 0-1.5h-2.625Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11 11.75a.75.75 0 0 0 0 1.5h5.25a.75.75 0 0 0 0-1.5h-5.25Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M12 4a1.75 1.75 0 0 0-1.75 1.75v3c0 .966.784 1.75 1.75 1.75h3.25a1.75 1.75 0 0 0 1.75-1.75v-3a1.75 1.75 0 0 0-1.75-1.75h-3.25Zm-.25 1.75a.25.25 0 0 1 .25-.25h3.25a.25.25 0 0 1 .25.25v3a.25.25 0 0 1-.25.25h-3.25a.25.25 0 0 1-.25-.25v-3Z"
  }));
};
SvgColumnWithTextMajor.displayName = "ColumnWithTextMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/Columns2Major.svg.mjs


var SvgColumns2Major = function SvgColumns2Major(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3v-8Zm7.75-1.5h3.25a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5h-3.25v-11Zm-1.5 0h-3.25a1.5 1.5 0 0 0-1.5 1.5v8a1.5 1.5 0 0 0 1.5 1.5h3.25v-11Z"
  }));
};
SvgColumns2Major.displayName = "Columns2Major";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/Columns3Major.svg.mjs


var SvgColumns3Major = function SvgColumns3Major(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3h-8Zm5.25 1.5h-2.5v11h2.5v-11Zm1.5 0v11h1.25a1.5 1.5 0 0 0 1.5-1.5v-8a1.5 1.5 0 0 0-1.5-1.5h-1.25Zm-6.75 0h1.25v11h-1.25a1.5 1.5 0 0 1-1.5-1.5v-8a1.5 1.5 0 0 1 1.5-1.5Z"
  }));
};
SvgColumns3Major.displayName = "Columns3Major";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/Columns3Minor.svg.mjs


var SvgColumns3Minor = function SvgColumns3Minor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3h-8Zm5.25 1.5h-2.5v11h2.5v-11Zm1.5 0v11h1.25a1.5 1.5 0 0 0 1.5-1.5v-8a1.5 1.5 0 0 0-1.5-1.5h-1.25Zm-6.75 0h1.25v11h-1.25a1.5 1.5 0 0 1-1.5-1.5v-8a1.5 1.5 0 0 1 1.5-1.5Z"
  }));
};
SvgColumns3Minor.displayName = "Columns3Minor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ComposeMajor.svg.mjs


var SvgComposeMajor = function SvgComposeMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14.666 3.603a.5.5 0 0 1 .707 0l1.06 1.061a.5.5 0 0 1 0 .707l-.957.957-1.767-1.767.957-.958Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "m13.002 5.268 1.767 1.767-3.83 3.831a2 2 0 0 1-1.348.585l-.772.025a.25.25 0 0 1-.258-.258l.025-.772a2 2 0 0 1 .585-1.348l3.83-3.83Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M5 7.25a2.25 2.25 0 0 1 2.25-2.25h1.83a.75.75 0 1 0 0-1.5h-1.83a3.75 3.75 0 0 0-3.75 3.75v5.5a3.75 3.75 0 0 0 3.75 3.75h5.5a3.75 3.75 0 0 0 3.75-3.75v-1.83a.75.75 0 0 0-1.5 0v1.83a2.25 2.25 0 0 1-2.25 2.25h-5.5a2.25 2.25 0 0 1-2.25-2.25v-5.5Z"
  }));
};
SvgComposeMajor.displayName = "ComposeMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ConfettiMajor.svg.mjs


var SvgConfettiMajor = function SvgConfettiMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10.029 3.033a.75.75 0 0 1 .5.935l-.703 2.313a.75.75 0 0 1-1.436-.436l.703-2.313a.75.75 0 0 1 .936-.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M16 3.75a.75.75 0 0 0-1.5 0v.25h-.25a.75.75 0 0 0 0 1.5h.25v.25a.75.75 0 0 0 1.5 0v-.25h.25a.75.75 0 0 0 0-1.5h-.25v-.25Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M8.306 7.746a1.75 1.75 0 0 0-2.834.521l-2.093 4.669a2.75 2.75 0 0 0 .565 3.07l.051.05a2.75 2.75 0 0 0 3.07.565l4.668-2.093a1.75 1.75 0 0 0 .521-2.834l-3.948-3.948Zm-1.465 1.135a.25.25 0 0 1 .405-.074l3.948 3.947a.25.25 0 0 1-.075.405l-4.668 2.093a1.25 1.25 0 0 1-1.395-.257l-.051-.05a1.25 1.25 0 0 1-.257-1.396l2.093-4.668Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M5.75 3a.75.75 0 0 1 .75.75v.25h.25a.75.75 0 1 1 0 1.5h-.25v.25a.75.75 0 0 1-1.5 0v-.25h-.25a.75.75 0 0 1 0-1.5h.25v-.25a.75.75 0 0 1 .75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M16 13.25a.75.75 0 0 0-1.5 0v.25h-.25a.75.75 0 0 0 0 1.5h.25v.25a.75.75 0 0 0 1.5 0v-.25h.25a.75.75 0 0 0 0-1.5h-.25v-.25Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13.53 7.53a.75.75 0 0 0-1.06-1.06l-1 1a.75.75 0 0 0 1.06 1.06l1-1Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M16.578 11.032a.75.75 0 1 0-.413-1.442l-2.343.672a.75.75 0 1 0 .413 1.442l2.343-.672Z"
  }));
};
SvgConfettiMajor.displayName = "ConfettiMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ConnectMinor.svg.mjs


var SvgConnectMinor = function SvgConnectMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10.95 11a1.5 1.5 0 1 1 0 1.5h-4.7a2.75 2.75 0 0 1-2.75-2.75v-3.5a2.75 2.75 0 0 1 2.75-2.75h5.5a.75.75 0 0 1 0 1.5h-5.5c-.69 0-1.25.56-1.25 1.25v3.5c0 .69.56 1.25 1.25 1.25h4.7Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14 16.25a2.75 2.75 0 0 0 2.75-2.75v-3.5a2.75 2.75 0 0 0-2.75-2.75h-4.7a1.5 1.5 0 1 0 0 1.5h4.7c.69 0 1.25.56 1.25 1.25v3.5c0 .69-.56 1.25-1.25 1.25h-5.5a.75.75 0 0 0 0 1.5h5.5Z"
  }));
};
SvgConnectMinor.displayName = "ConnectMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ContentFilledMinor.svg.mjs


var SvgContentFilledMinor = function SvgContentFilledMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M7.42 3.5h5.16c.535 0 .98 0 1.345.03.38.03.736.098 1.073.27a2.75 2.75 0 0 1 1.202 1.202c.172.337.24.693.27 1.073.03.365.03.81.03 1.345v1.91c0 .535 0 .98-.03 1.345-.03.38-.098.736-.27 1.073a2.751 2.751 0 0 1-1.201 1.202c-.338.172-.694.24-1.074.27a6.052 6.052 0 0 1-.288.017.744.744 0 0 1-.137.013h-6.08c-.535 0-.98 0-1.345-.03-.38-.03-.736-.098-1.073-.27a2.75 2.75 0 0 1-1.047-.934.75.75 0 0 1-.176-.31c-.157-.324-.22-.667-.25-1.031-.029-.365-.029-.81-.029-1.345v-1.91c0-.535 0-.98.03-1.345.03-.38.098-.736.27-1.073a2.75 2.75 0 0 1 1.202-1.202c.337-.172.693-.24 1.073-.27.365-.03.81-.03 1.345-.03Zm7.58 5.8-.001.533-.135-.192a1.75 1.75 0 0 0-2.778-.116l-1.086 1.303-2.411-2.893a1.75 1.75 0 0 0-2.68-.01l-.909 1.073v-1.548c0-.572 0-.957.025-1.253.023-.287.065-.424.111-.514a1.25 1.25 0 0 1 .547-.547c.09-.046.227-.088.514-.111.296-.024.68-.025 1.253-.025h5.1c.572 0 .957 0 1.252.025.288.023.425.065.516.111.235.12.426.311.546.547.046.09.088.227.111.514.024.296.025.68.025 1.253v1.85Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M4 15.75a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.75 15a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z"
  }));
};
SvgContentFilledMinor.displayName = "ContentFilledMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ContentMinor.svg.mjs


var SvgContentMinor = function SvgContentMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M7.42 3.5h5.16c.535 0 .98 0 1.345.03.38.03.736.098 1.073.27a2.75 2.75 0 0 1 1.202 1.202c.172.337.24.693.27 1.073.03.365.03.81.03 1.345v1.91c0 .535 0 .98-.03 1.345-.03.38-.098.736-.27 1.073a2.751 2.751 0 0 1-1.201 1.202c-.338.172-.694.24-1.074.27-.365.03-.81.03-1.345.03h-5.16c-.535 0-.98 0-1.345-.03-.38-.03-.736-.098-1.073-.27a2.75 2.75 0 0 1-1.202-1.201c-.172-.338-.24-.694-.27-1.074-.03-.365-.03-.81-.03-1.345v-1.91c0-.535 0-.98.03-1.345.03-.38.098-.736.27-1.073a2.75 2.75 0 0 1 1.202-1.202c.337-.172.693-.24 1.073-.27.365-.03.81-.03 1.345-.03Zm-1.223 1.525c-.287.023-.424.065-.514.111a1.25 1.25 0 0 0-.547.547c-.046.09-.088.227-.111.514-.024.296-.025.68-.025 1.253v1.548l.908-1.073a1.75 1.75 0 0 1 2.68.01l2.412 2.894 1.086-1.304a1.75 1.75 0 0 1 2.778.116l.135.192.001-.533v-1.85c0-.572 0-.957-.025-1.253-.023-.287-.065-.424-.111-.514a1.25 1.25 0 0 0-.546-.547c-.091-.046-.228-.088-.515-.111-.296-.024-.68-.025-1.253-.025h-5.1c-.572 0-.957 0-1.253.025Zm-.514 6.589a1.25 1.25 0 0 1-.516-.49l1.886-2.23a.25.25 0 0 1 .383.001l2.38 2.855h-2.366c-.572 0-.957 0-1.253-.025-.287-.023-.424-.065-.514-.111Zm6.867.136h-.365l1.054-1.265a.25.25 0 0 1 .397.017l.751 1.073a1.274 1.274 0 0 1-.07.039c-.09.046-.227.088-.514.111-.296.024-.68.025-1.253.025Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M4 15.75a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.75 15a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z"
  }));
};
SvgContentMinor.displayName = "ContentMinor";



// EXTERNAL MODULE: ../polaris-icons/dist/icons/ConversationMinor.svg.mjs
var ConversationMinor_svg = __webpack_require__(34589);
;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CreditCardCancelMajor.svg.mjs


var SvgCreditCardCancelMajor = function SvgCreditCardCancelMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M2.75 7.25a2.75 2.75 0 0 1 2.75-2.75h9.5a2.75 2.75 0 0 1 2.75 2.75v2.5a.75.75 0 0 1-1.5 0v-.5h-12v3.5c0 .69.56 1.25 1.25 1.25h5.02a.75.75 0 0 1 0 1.5h-5.02a2.75 2.75 0 0 1-2.75-2.75v-5.5Zm12.25-1.25c.69 0 1.25.56 1.25 1.25h-12c0-.69.56-1.25 1.25-1.25h9.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.25 11.25a.75.75 0 0 0 0 1.5h2.75a.75.75 0 0 0 0-1.5h-2.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M16.78 11.72a.75.75 0 0 1 0 1.06l-.97.97.97.97a.75.75 0 1 1-1.06 1.06l-.97-.97-.97.97a.75.75 0 1 1-1.06-1.06l.97-.97-.97-.97a.75.75 0 1 1 1.06-1.06l.97.97.97-.97a.75.75 0 0 1 1.06 0Z"
  }));
};
SvgCreditCardCancelMajor.displayName = "CreditCardCancelMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CreditCardMajor.svg.mjs


var SvgCreditCardMajor = function SvgCreditCardMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.25 11.25a.75.75 0 0 0 0 1.5h2.75a.75.75 0 0 0 0-1.5h-2.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M2.5 7.25a2.75 2.75 0 0 1 2.75-2.75h9.5a2.75 2.75 0 0 1 2.75 2.75v5.5a2.75 2.75 0 0 1-2.75 2.75h-9.5a2.75 2.75 0 0 1-2.75-2.75v-5.5Zm12.25-1.25c.69 0 1.25.56 1.25 1.25h-12c0-.69.56-1.25 1.25-1.25h9.5Zm1.25 3.25h-12v3.5c0 .69.56 1.25 1.25 1.25h9.5c.69 0 1.25-.56 1.25-1.25v-3.5Z"
  }));
};
SvgCreditCardMajor.displayName = "CreditCardMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CreditCardPercentMajor.svg.mjs


var SvgCreditCardPercentMajor = function SvgCreditCardPercentMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M5.25 4a2.75 2.75 0 0 0-2.75 2.75v6.5a2.75 2.75 0 0 0 2.75 2.75h5.104a.75.75 0 0 0 0-1.5h-5.104c-.69 0-1.25-.56-1.25-1.25v-4h12a.75.75 0 0 0 1.5 0v-2.5a2.75 2.75 0 0 0-2.75-2.75h-9.5Zm10.75 3.25v-.5c0-.69-.56-1.25-1.25-1.25h-9.5c-.69 0-1.25.56-1.25 1.25v.5h12Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M16.47 11.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 1 1-1.06-1.06l4-4Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M18 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.25 11.25a.75.75 0 0 0 0 1.5h2.75a.75.75 0 0 0 0-1.5h-2.75Z"
  }));
};
SvgCreditCardPercentMajor.displayName = "CreditCardPercentMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CreditCardSecureMajor.svg.mjs


var SvgCreditCardSecureMajor = function SvgCreditCardSecureMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M2.5 6.75a2.75 2.75 0 0 1 2.75-2.75h9.5a2.75 2.75 0 0 1 2.75 2.75v1.25a.75.75 0 0 1-1.5 0v-1.25c0-.69-.56-1.25-1.25-1.25h-9.5c-.69 0-1.25.56-1.25 1.25v.5h8a1 1 0 1 1 0 2h-8v4c0 .69.56 1.25 1.25 1.25h4.052a.75.75 0 0 1 0 1.5h-4.052a2.75 2.75 0 0 1-2.75-2.75v-6.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M5.75 11.5a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5h-2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M13 12.25a1 1 0 0 0-1 1v2.75a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2.75a1 1 0 0 0-1-1v-.75a2 2 0 1 0-4 0v.75Zm2.5 0v-.75a.5.5 0 0 0-1 0v.75h1Z"
  }));
};
SvgCreditCardSecureMajor.displayName = "CreditCardSecureMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CurrencyConvertMinor.svg.mjs


var SvgCurrencyConvertMinor = function SvgCurrencyConvertMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10.25 7a.75.75 0 0 1 .75-.75h3.69l-.72-.72a.75.75 0 0 1 1.06-1.06l2 2a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l.72-.72h-3.69a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M7.25 5.25a.75.75 0 0 0-1.5 0v.75h-.375a2.375 2.375 0 0 0 0 4.75h1.28a.875.875 0 1 1 0 1.75h-2.905a.75.75 0 0 0 0 1.5h1v.75a.75.75 0 0 0 1.5 0v-.75h.404a2.375 2.375 0 0 0 0-4.75h-1.279a.875.875 0 0 1 0-1.75h2.904a.75.75 0 1 0 0-1.5h-1.029v-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.81 13.75h3.69a.75.75 0 0 0 0-1.5h-3.69l.72-.72a.75.75 0 1 0-1.06-1.06l-2 2a.75.75 0 0 0 0 1.06l2 2a.75.75 0 1 0 1.06-1.06l-.72-.72Z"
  }));
};
SvgCurrencyConvertMinor.displayName = "CurrencyConvertMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CustomerMinusMajor.svg.mjs


var SvgCustomerMinusMajor = function SvgCustomerMinusMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13.75 2a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M5.5 6.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0Zm3.5-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M9 11a6.273 6.273 0 0 1 5.484 3.227l.437.786a1.338 1.338 0 0 1-1.17 1.987h-9.502a1.338 1.338 0 0 1-1.17-1.987l.437-.786a6.273 6.273 0 0 1 5.484-3.227Zm0 1.5c-1.734 0-3.33.94-4.173 2.455l-.302.545h8.95l-.302-.545a4.773 4.773 0 0 0-4.173-2.455Z"
  }));
};
SvgCustomerMinusMajor.displayName = "CustomerMinusMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CustomerPlusMajor.svg.mjs


var SvgCustomerPlusMajor = function SvgCustomerPlusMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M16.25 1.75a.75.75 0 0 0-1.5 0v1h-1a.75.75 0 0 0 0 1.5h1v1a.75.75 0 0 0 1.5 0v-1h1a.75.75 0 0 0 0-1.5h-1v-1Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M9 3a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-2 3.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M14.484 14.227a6.273 6.273 0 0 0-10.968 0l-.437.786a1.338 1.338 0 0 0 1.17 1.987h9.502a1.338 1.338 0 0 0 1.17-1.987l-.437-.786Zm-9.657.728a4.773 4.773 0 0 1 8.346 0l.302.545h-8.95l.302-.545Z"
  }));
};
SvgCustomerPlusMajor.displayName = "CustomerPlusMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/CustomersFilledMinor.svg.mjs


var SvgCustomersFilledMinor = function SvgCustomersFilledMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10 9.75a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10 11.5c-1.968 0-3.815.95-4.959 2.552l-.561.786a1.05 1.05 0 0 0 .855 1.662h9.33a1.05 1.05 0 0 0 .855-1.662l-.561-.786a6.094 6.094 0 0 0-4.959-2.552Z"
  }));
};
SvgCustomersFilledMinor.displayName = "CustomersFilledMinor";



// EXTERNAL MODULE: ../polaris-icons/dist/icons/CustomersMajor.svg.mjs
var CustomersMajor_svg = __webpack_require__(10232);
// EXTERNAL MODULE: ../polaris-icons/dist/icons/CustomersMinor.svg.mjs
var CustomersMinor_svg = __webpack_require__(43812);
;// CONCATENATED MODULE: ../polaris-icons/dist/icons/DataDrivenModelMinor.svg.mjs


var SvgDataDrivenModelMinor = function SvgDataDrivenModelMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M9.952 3.5h.096c.182 0 .371 0 .543.034a1.75 1.75 0 0 1 1.375 1.375c.035.172.034.361.034.543v9.096c0 .182 0 .371-.034.543a1.75 1.75 0 0 1-1.375 1.376 2.825 2.825 0 0 1-.543.033h-.096c-.182 0-.371 0-.543-.034a1.75 1.75 0 0 1-1.375-1.375 2.824 2.824 0 0 1-.034-.543v-9.096c0-.182 0-.371.034-.543a1.75 1.75 0 0 1 1.375-1.375c.172-.035.361-.034.543-.034Zm-.253 1.505a.25.25 0 0 0-.194.194 8.217 8.217 0 0 0-.005.3v9.001a8.221 8.221 0 0 0 .005.3.25.25 0 0 0 .194.195l.053.003c.055.002.127.002.248.002s.193 0 .248-.002l.053-.003a.25.25 0 0 0 .194-.194l.003-.053a8.05 8.05 0 0 0 .002-.248v-9a8.046 8.046 0 0 0-.005-.3.25.25 0 0 0-.194-.195 8.217 8.217 0 0 0-.3-.005 8.216 8.216 0 0 0-.302.005Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M5.452 9h.096c.182 0 .371 0 .543.034a1.75 1.75 0 0 1 1.375 1.375c.035.172.034.361.034.543v3.596c0 .182 0 .371-.034.543a1.75 1.75 0 0 1-1.375 1.376 2.825 2.825 0 0 1-.543.033h-.096c-.182 0-.371 0-.543-.034a1.75 1.75 0 0 1-1.375-1.375 2.824 2.824 0 0 1-.034-.543v-3.596c0-.182 0-.371.034-.543a1.75 1.75 0 0 1 1.375-1.375c.172-.035.361-.034.543-.034Zm-.253 1.505a.25.25 0 0 0-.194.194 8.217 8.217 0 0 0-.005.3v3.501a8.221 8.221 0 0 0 .005.3.25.25 0 0 0 .194.195l.053.003c.055.002.127.002.248.002s.193 0 .248-.002l.053-.003a.25.25 0 0 0 .194-.194l.003-.053c.002-.054.002-.127.002-.248v-3.5a8.208 8.208 0 0 0-.005-.3.25.25 0 0 0-.194-.195 8.045 8.045 0 0 0-.3-.005 8.045 8.045 0 0 0-.302.005Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M14.5 6h-.048c-.182 0-.371 0-.543.034a1.75 1.75 0 0 0-1.375 1.375 2.825 2.825 0 0 0-.034.543v6.596c0 .182 0 .371.034.543a1.75 1.75 0 0 0 1.375 1.376c.172.034.361.033.543.033h.096c.182 0 .371 0 .543-.034a1.75 1.75 0 0 0 1.375-1.375c.035-.172.034-.36.034-.543v-6.596c0-.182 0-.371-.034-.543a1.75 1.75 0 0 0-1.375-1.375c-.172-.035-.361-.034-.543-.034h-.048Zm-.495 1.7a.25.25 0 0 1 .194-.195 8.221 8.221 0 0 1 .3-.005 8.217 8.217 0 0 1 .302.005.25.25 0 0 1 .194.194l.003.053c.002.055.002.127.002.248v6.5a8.05 8.05 0 0 1-.005.3.25.25 0 0 1-.194.195l-.053.003a8.046 8.046 0 0 1-.248.002c-.121 0-.193 0-.248-.002l-.053-.003a.25.25 0 0 1-.194-.194l-.003-.053a8.05 8.05 0 0 1-.002-.248v-6.5c0-.121 0-.193.002-.248l.003-.053v.002-.002Z"
  }));
};
SvgDataDrivenModelMinor.displayName = "DataDrivenModelMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/DataVisualizationMajor.svg.mjs


var SvgDataVisualizationMajor = function SvgDataVisualizationMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13.5 6.75a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 1.5 0v-3.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M7.25 8.5a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10.75 8a.75.75 0 0 0-1.5 0v2.25a.75.75 0 0 0 1.5 0v-2.25Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M3.25 4.25a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5v6a3 3 0 0 1-2.877 2.998l.588 1.765a.75.75 0 1 1-1.422.474l-.746-2.237h-3.086l-.746 2.237a.75.75 0 1 1-1.423-.474l.589-1.765a3 3 0 0 1-2.877-2.998v-6a.75.75 0 0 1-.75-.75Zm2.25.75h9v6a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5v-6Z"
  }));
};
SvgDataVisualizationMajor.displayName = "DataVisualizationMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/DecimalMinor.svg.mjs


var SvgDecimalMinor = function SvgDecimalMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M13.629 3.511a.75.75 0 0 1 .61.868l-.413 2.371h2.174a.75.75 0 0 1 0 1.5h-2.434l-.61 3.5h2.544a.75.75 0 0 1 0 1.5h-2.804l-.457 2.629a.75.75 0 1 1-1.478-.257l.413-2.372h-3.478l-.457 2.629a.75.75 0 1 1-1.478-.257l.413-2.372h-2.174a.75.75 0 0 1 0-1.5h2.434l.61-3.5h-2.544a.75.75 0 0 1 0-1.5h2.804l.457-2.628a.75.75 0 1 1 1.478.257l-.413 2.371h3.478l.457-2.628a.75.75 0 0 1 .868-.61Zm-2.195 8.239h-3.477l.609-3.5h3.477l-.609 3.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M15.5 17a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
  }));
};
SvgDecimalMinor.displayName = "DecimalMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/DeleteMajor.svg.mjs


var SvgDeleteMajor = function SvgDeleteMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11.5 8.25a.75.75 0 0 1 .75.75v4.25a.75.75 0 0 1-1.5 0v-4.25a.75.75 0 0 1 .75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M9.25 9a.75.75 0 0 0-1.5 0v4.25a.75.75 0 0 0 1.5 0v-4.25Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M7.25 5.25a2.75 2.75 0 0 1 5.5 0h3a.75.75 0 0 1 0 1.5h-.75v5.45c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311c-.642.327-1.482.327-3.162.327h-.4c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311c-.327-.642-.327-1.482-.327-3.162v-5.45h-.75a.75.75 0 0 1 0-1.5h3Zm1.5 0a1.25 1.25 0 1 1 2.5 0h-2.5Zm-2.25 1.5h7v5.45c0 .865-.001 1.423-.036 1.848-.033.408-.09.559-.128.633a1.5 1.5 0 0 1-.655.655c-.074.038-.225.095-.633.128-.425.035-.983.036-1.848.036h-.4c-.865 0-1.423-.001-1.848-.036-.408-.033-.559-.09-.633-.128a1.5 1.5 0 0 1-.656-.655c-.037-.074-.094-.225-.127-.633-.035-.425-.036-.983-.036-1.848v-5.45Z"
  }));
};
SvgDeleteMajor.displayName = "DeleteMajor";



// EXTERNAL MODULE: ../polaris-icons/dist/icons/DeleteMinor.svg.mjs
var DeleteMinor_svg = __webpack_require__(17905);
;// CONCATENATED MODULE: ../polaris-icons/dist/icons/DesktopMajor.svg.mjs


var SvgDesktopMajor = function SvgDesktopMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M3.5 6.25a2.75 2.75 0 0 1 2.75-2.75h7.5a2.75 2.75 0 0 1 2.75 2.75v4.5a2.75 2.75 0 0 1-2.75 2.75h-1.25v1.5h.75a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h.75v-1.5h-1.25a2.75 2.75 0 0 1-2.75-2.75v-4.5Zm5.5 7.25h2v1.5h-2v-1.5Zm-2.75-8.5c-.69 0-1.25.56-1.25 1.25v3.25h10v-3.25c0-.69-.56-1.25-1.25-1.25h-7.5Zm8.725 6c-.116.57-.62 1-1.225 1h-7.5a1.25 1.25 0 0 1-1.225-1h9.95Z"
  }));
};
SvgDesktopMajor.displayName = "DesktopMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/DetailedPopUpMajor.svg.mjs


var SvgDetailedPopUpMajor = function SvgDetailedPopUpMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M5.25 3.5a1.75 1.75 0 0 0-1.75 1.75v1.5a.75.75 0 0 0 1.5 0v-1.5a.25.25 0 0 1 .25-.25h1.5a.75.75 0 0 0 0-1.5h-1.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M11.25 3.5a2.75 2.75 0 0 0-2.75 2.75v2.5a2.75 2.75 0 0 0 2.75 2.75h2.5a2.75 2.75 0 0 0 2.75-2.75v-2.5a2.75 2.75 0 0 0-2.75-2.75h-2.5Zm-1.25 2.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25v2.5c0 .69-.56 1.25-1.25 1.25h-2.5c-.69 0-1.25-.56-1.25-1.25v-2.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M4.25 12.5a.75.75 0 0 1 .75.75v1.5c0 .138.112.25.25.25h1.5a.75.75 0 0 1 0 1.5h-1.5a1.75 1.75 0 0 1-1.75-1.75v-1.5a.75.75 0 0 1 .75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M16.5 13.25a.75.75 0 0 0-1.5 0v1.5a.25.25 0 0 1-.25.25h-1.5a.75.75 0 0 0 0 1.5h1.5a1.75 1.75 0 0 0 1.75-1.75v-1.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M4.25 8.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M9 15a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5h-2Z"
  }));
};
SvgDetailedPopUpMajor.displayName = "DetailedPopUpMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/DiamondAlertMajor.svg.mjs


var SvgDiamondAlertMajor = function SvgDiamondAlertMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10 6a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5a.75.75 0 0 1 .75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M11.237 3.177a1.75 1.75 0 0 0-2.474 0l-5.586 5.585a1.75 1.75 0 0 0 0 2.475l5.586 5.586a1.75 1.75 0 0 0 2.474 0l5.586-5.586a1.75 1.75 0 0 0 0-2.475l-5.586-5.585Zm-1.414 1.06a.25.25 0 0 1 .354 0l5.586 5.586a.25.25 0 0 1 0 .354l-5.586 5.585a.25.25 0 0 1-.354 0l-5.586-5.585a.25.25 0 0 1 0-.354l5.586-5.586Z"
  }));
};
SvgDiamondAlertMajor.displayName = "DiamondAlertMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/DiamondAlertMinor.svg.mjs


var SvgDiamondAlertMinor = function SvgDiamondAlertMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10 6a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5a.75.75 0 0 1 .75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M11.237 3.177a1.75 1.75 0 0 0-2.474 0l-5.586 5.585a1.75 1.75 0 0 0 0 2.475l5.586 5.586a1.75 1.75 0 0 0 2.474 0l5.586-5.586a1.75 1.75 0 0 0 0-2.475l-5.586-5.585Zm-1.414 1.06a.25.25 0 0 1 .354 0l5.586 5.586a.25.25 0 0 1 0 .354l-5.586 5.585a.25.25 0 0 1-.354 0l-5.586-5.585a.25.25 0 0 1 0-.354l5.586-5.586Z"
  }));
};
SvgDiamondAlertMinor.displayName = "DiamondAlertMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/DigitalMediaReceiverMajor.svg.mjs


var SvgDigitalMediaReceiverMajor = function SvgDigitalMediaReceiverMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M9.25 4a.75.75 0 0 1 .75-.75 5.75 5.75 0 0 1 5.75 5.75.75.75 0 0 1-1.5 0 4.25 4.25 0 0 0-4.25-4.25.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.75 12.75a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5h-2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M10 8.25a.75.75 0 0 1 .75.75v1.499h4c.966 0 1.75.784 1.75 1.75v2.5a1.75 1.75 0 0 1-1.75 1.75h-9.5a1.75 1.75 0 0 1-1.75-1.75v-2.5c0-.966.784-1.75 1.75-1.75h4v-1.499a.75.75 0 0 1 .75-.75Zm-4.75 3.749a.25.25 0 0 0-.25.25v2.5c0 .139.112.25.25.25h9.5a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25h-9.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10 5.75a.75.75 0 0 0 0 1.5 1.75 1.75 0 0 1 1.75 1.75.75.75 0 0 0 1.5 0 3.25 3.25 0 0 0-3.25-3.25Z"
  }));
};
SvgDigitalMediaReceiverMajor.displayName = "DigitalMediaReceiverMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/DiscountAutomaticMajor.svg.mjs


var SvgDiscountAutomaticMajor = function SvgDiscountAutomaticMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M3.25 3a.75.75 0 0 0 0 1.5h1.612a.25.25 0 0 1 .248.22l1.04 8.737a1.75 1.75 0 0 0 1.738 1.543h6.362a.75.75 0 0 0 0-1.5h-6.362a.25.25 0 0 1-.248-.22l-.093-.78h6.35a2.75 2.75 0 0 0 2.743-2.54l.358-4.652a.75.75 0 0 0-1.496-.116l-.358 4.654a1.25 1.25 0 0 1-1.246 1.154h-6.53l-.768-6.457a1.75 1.75 0 0 0-1.738-1.543h-1.612Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M9 6.25a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13.28 6.03a.75.75 0 0 0-1.06-1.06l-3.5 3.5a.75.75 0 0 0 1.06 1.06l3.5-3.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14 9.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M15 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }));
};
SvgDiscountAutomaticMajor.displayName = "DiscountAutomaticMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/DiscountCodeMajor.svg.mjs


var SvgDiscountCodeMajor = function SvgDiscountCodeMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M3.25 5c0-.966.784-1.75 1.75-1.75h.5a.75.75 0 0 1 0 1.5h-.5a.25.25 0 0 0-.25.25v.5a.75.75 0 0 1-1.5 0v-.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.78 7.22a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l4.5-4.5a.75.75 0 0 1 1.06 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M9 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M3.25 15c0 .966.784 1.75 1.75 1.75h.5a.75.75 0 0 0 0-1.5h-.5a.25.25 0 0 1-.25-.25v-.5a.75.75 0 0 0-1.5 0v.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M16.75 15a1.75 1.75 0 0 1-1.75 1.75h-.5a.75.75 0 0 1 0-1.5h.5a.25.25 0 0 0 .25-.25v-.5a.75.75 0 0 1 1.5 0v.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M16.75 5a1.75 1.75 0 0 0-1.75-1.75h-.5a.75.75 0 0 0 0 1.5h.5a.25.25 0 0 1 .25.25v.5a.75.75 0 0 0 1.5 0v-.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M16 8.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11 16.75a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 0 0 1.5h2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M4 8.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11 4.75a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 0 0 1.5h2Z"
  }));
};
SvgDiscountCodeMajor.displayName = "DiscountCodeMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/DiscountsFilledMinor.svg.mjs


var SvgDiscountsFilledMinor = function SvgDiscountsFilledMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M11.527 3.327c-.6-1.306-2.455-1.306-3.054 0a1.68 1.68 0 0 1-2.112.874c-1.347-.5-2.66.813-2.16 2.16a1.68 1.68 0 0 1-.874 2.112c-1.306.6-1.306 2.455 0 3.054a1.68 1.68 0 0 1 .874 2.112c-.5 1.347.813 2.659 2.16 2.16a1.68 1.68 0 0 1 2.112.874c.6 1.306 2.455 1.306 3.054 0a1.68 1.68 0 0 1 2.112-.874c1.347.499 2.66-.813 2.16-2.16a1.68 1.68 0 0 1 .874-2.112c1.306-.6 1.306-2.455 0-3.054a1.68 1.68 0 0 1-.874-2.112c.5-1.347-.813-2.66-2.16-2.16a1.68 1.68 0 0 1-2.112-.874Zm-2.527 4.923a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3.53.53-4 4a.75.75 0 1 1-1.06-1.06l4-4a.75.75 0 1 1 1.06 1.06Zm.47 3.47a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }));
};
SvgDiscountsFilledMinor.displayName = "DiscountsFilledMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/DiscountsMajor.svg.mjs


var SvgDiscountsMajor = function SvgDiscountsMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.78 8.28a.75.75 0 0 0-1.06-1.06l-4.5 4.5a.75.75 0 1 0 1.06 1.06l4.5-4.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M9 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M12.094 3.514c-.822-1.79-3.366-1.79-4.188 0a.804.804 0 0 1-1.011.42c-1.848-.686-3.647 1.113-2.962 2.96a.804.804 0 0 1-.419 1.012c-1.79.822-1.79 3.366 0 4.188a.805.805 0 0 1 .42 1.011c-.686 1.848 1.113 3.647 2.96 2.962a.805.805 0 0 1 1.012.419c.822 1.79 3.366 1.79 4.188 0a.805.805 0 0 1 1.011-.42c1.848.686 3.647-1.113 2.962-2.96a.805.805 0 0 1 .419-1.012c1.79-.822 1.79-3.366 0-4.188a.805.805 0 0 1-.42-1.011c.686-1.848-1.113-3.647-2.96-2.962a.805.805 0 0 1-1.012-.419Zm-2.825.626a.804.804 0 0 1 1.462 0 2.305 2.305 0 0 0 2.896 1.2.804.804 0 0 1 1.034 1.034 2.304 2.304 0 0 0 1.199 2.895.804.804 0 0 1 0 1.462 2.305 2.305 0 0 0-1.2 2.896.805.805 0 0 1-1.034 1.034 2.305 2.305 0 0 0-2.895 1.199.804.804 0 0 1-1.462 0 2.304 2.304 0 0 0-2.896-1.2.804.804 0 0 1-1.033-1.034 2.305 2.305 0 0 0-1.2-2.895.804.804 0 0 1 0-1.462 2.304 2.304 0 0 0 1.2-2.896.804.804 0 0 1 1.034-1.033 2.304 2.304 0 0 0 2.895-1.2Z"
  }));
};
SvgDiscountsMajor.displayName = "DiscountsMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/DiscountsMinor.svg.mjs


var SvgDiscountsMinor = function SvgDiscountsMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.78 8.28a.75.75 0 0 0-1.06-1.06l-4.5 4.5a.75.75 0 1 0 1.06 1.06l4.5-4.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M9 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M12.094 3.514c-.822-1.79-3.366-1.79-4.188 0a.804.804 0 0 1-1.011.42c-1.848-.686-3.647 1.113-2.962 2.96a.804.804 0 0 1-.419 1.012c-1.79.822-1.79 3.366 0 4.188a.805.805 0 0 1 .42 1.011c-.686 1.848 1.113 3.647 2.96 2.962a.805.805 0 0 1 1.012.419c.822 1.79 3.366 1.79 4.188 0a.805.805 0 0 1 1.011-.42c1.848.686 3.647-1.113 2.962-2.96a.805.805 0 0 1 .419-1.012c1.79-.822 1.79-3.366 0-4.188a.805.805 0 0 1-.42-1.011c.686-1.848-1.113-3.647-2.96-2.962a.805.805 0 0 1-1.012-.419Zm-2.825.626a.804.804 0 0 1 1.462 0 2.304 2.304 0 0 0 2.896 1.2.804.804 0 0 1 1.034 1.034 2.304 2.304 0 0 0 1.199 2.895.804.804 0 0 1 0 1.462 2.304 2.304 0 0 0-1.2 2.896.805.805 0 0 1-1.034 1.034 2.304 2.304 0 0 0-2.895 1.199.804.804 0 0 1-1.462 0 2.304 2.304 0 0 0-2.896-1.2.804.804 0 0 1-1.033-1.034 2.305 2.305 0 0 0-1.2-2.895.804.804 0 0 1 0-1.462 2.304 2.304 0 0 0 1.2-2.896.804.804 0 0 1 1.033-1.033 2.304 2.304 0 0 0 2.896-1.2Z"
  }));
};
SvgDiscountsMinor.displayName = "DiscountsMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/DisputeMinor.svg.mjs


var SvgDisputeMinor = function SvgDisputeMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10 6a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M3.5 8.25a4.75 4.75 0 0 1 4.75-4.75h3.5a4.75 4.75 0 0 1 4.75 4.75v2.5a4.75 4.75 0 0 1-4.573 4.747l-1.335 1.714a.75.75 0 0 1-1.189-.006l-1.3-1.707a4.75 4.75 0 0 1-4.603-4.748v-2.5Zm4.75-3.25a3.25 3.25 0 0 0-3.25 3.25v2.5a3.25 3.25 0 0 0 3.25 3.25h.226a.75.75 0 0 1 .597.296l.934 1.225.96-1.232a.75.75 0 0 1 .591-.289h.192a3.25 3.25 0 0 0 3.25-3.25v-2.5a3.25 3.25 0 0 0-3.25-3.25h-3.5Z"
  }));
};
SvgDisputeMinor.displayName = "DisputeMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/DnsSettingsMajor.svg.mjs


var SvgDnsSettingsMajor = function SvgDnsSettingsMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M8 6.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M3.5 5.25c0-.966.783-1.75 1.75-1.75h9.5c.966 0 1.75.784 1.75 1.75v2.5a1.75 1.75 0 0 1-1.75 1.75h-9.5a1.75 1.75 0 0 1-1.75-1.75v-2.5Zm1.75-.25a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25h-9.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M5.25 12a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h5a.75.75 0 0 1 0 1.5h-5a1.75 1.75 0 0 1-1.75-1.75v-2.5c0-.966.783-1.75 1.75-1.75h6.75a.75.75 0 0 1 0 1.5h-6.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M7 14.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M16.878 13.839a2.257 2.257 0 0 1 0 .822l.327.19a.75.75 0 0 1-.75 1.298l-.328-.189a2.245 2.245 0 0 1-.712.412v.378a.75.75 0 0 1-1.5 0v-.378a2.248 2.248 0 0 1-.712-.412l-.328.19a.75.75 0 0 1-.75-1.3l.328-.188a2.26 2.26 0 0 1 0-.824l-.328-.189a.75.75 0 0 1 .75-1.299l.328.19a2.25 2.25 0 0 1 .712-.412v-.378a.75.75 0 0 1 1.5 0v.378c.263.093.504.234.712.412l.328-.19a.75.75 0 0 1 .75 1.3l-.327.189Zm-2.963.411c0-.133.035-.258.096-.367l.005-.008.004-.008a.75.75 0 0 1 1.289-.002l.006.01.006.01a.747.747 0 0 1 0 .73l-.006.01-.006.01a.75.75 0 0 1-1.29-.002l-.003-.008-.005-.008a.747.747 0 0 1-.096-.367Z"
  }));
};
SvgDnsSettingsMajor.displayName = "DnsSettingsMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/DockFloatingMajor.svg.mjs


var SvgDockFloatingMajor = function SvgDockFloatingMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11 10a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M7.25 3.5a3.75 3.75 0 0 0-3.75 3.75v5.5a3.75 3.75 0 0 0 3.75 3.75h5.5a3.75 3.75 0 0 0 3.75-3.75v-5.5a3.75 3.75 0 0 0-3.75-3.75h-5.5Zm-2.25 3.75a2.25 2.25 0 0 1 2.25-2.25h5.5a2.25 2.25 0 0 1 2.25 2.25v5.5a2.25 2.25 0 0 1-2.25 2.25h-5.5a2.25 2.25 0 0 1-2.25-2.25v-5.5Z"
  }));
};
SvgDockFloatingMajor.displayName = "DockFloatingMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/DockSideMajor.svg.mjs


var SvgDockSideMajor = function SvgDockSideMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11 6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M7.25 3.5a3.75 3.75 0 0 0-3.75 3.75v5.5a3.75 3.75 0 0 0 3.75 3.75h5.5a3.75 3.75 0 0 0 3.75-3.75v-5.5a3.75 3.75 0 0 0-3.75-3.75h-5.5Zm-2.25 3.75a2.25 2.25 0 0 1 2.25-2.25h5.5a2.25 2.25 0 0 1 2.25 2.25v5.5a2.25 2.25 0 0 1-2.25 2.25h-5.5a2.25 2.25 0 0 1-2.25-2.25v-5.5Z"
  }));
};
SvgDockSideMajor.displayName = "DockSideMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/DomainNewMajor.svg.mjs


var SvgDomainNewMajor = function SvgDomainNewMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M11.973 8.948c.018.34.027.692.027 1.052a.75.75 0 0 0 1.5 0c0-.397-.01-.79-.032-1.173.876-.096 1.664-.234 2.32-.417.138.507.212 1.04.212 1.59a.75.75 0 0 0 1.5 0 7.5 7.5 0 1 0-7.5 7.5.75.75 0 0 0 0-1.5c-.396 0-.907-.332-1.347-1.493a8.863 8.863 0 0 1-.412-1.547c.566.027 1.155.04 1.759.04a.75.75 0 1 0 0-1.5c-.678 0-1.331-.018-1.947-.052a19.852 19.852 0 0 1-.025-2.5c.634.035 1.296.052 1.972.052a36 36 0 0 0 1.973-.052Zm-1.973-4.948c-.396 0-.907.332-1.347 1.493-.207.546-.369 1.21-.48 1.96a35.3 35.3 0 0 0 3.654.001c-.111-.751-.273-1.415-.48-1.961-.44-1.161-.95-1.493-1.347-1.493Zm-3.325 3.334c.124-.88.315-1.686.576-2.373.047-.125.098-.25.153-.372a6.026 6.026 0 0 0-2.61 2.425c.522.132 1.157.24 1.881.32Zm-2.462 1.076c.655.183 1.443.32 2.319.417a21.308 21.308 0 0 0 .008 2.492 20.112 20.112 0 0 1-.314-.04c-.947-.127-1.683-.302-2.176-.5a6.057 6.057 0 0 1 .163-2.369Zm10.992-1.396c-.52.132-1.156.24-1.88.32-.124-.88-.315-1.686-.576-2.373a6.776 6.776 0 0 0-.153-.372 6.026 6.026 0 0 1 2.61 2.425Zm-7.8 8.397a6.024 6.024 0 0 1-2.863-2.915c.455.11.955.199 1.484.27.218.03.444.056.676.08.124.81.306 1.553.549 2.193.047.125.098.25.153.372Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14.75 11.75a.75.75 0 0 1 .75.75v1.5h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5a.75.75 0 0 1-1.5 0v-1.5h-1.5a.75.75 0 0 1 0-1.5h1.5v-1.5a.75.75 0 0 1 .75-.75Z"
  }));
};
SvgDomainNewMajor.displayName = "DomainNewMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/DomainRedirectMinor.svg.mjs


var SvgDomainRedirectMinor = function SvgDomainRedirectMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M11.943 11.448c-.615.034-1.267.052-1.943.052-.676 0-1.328-.018-1.943-.052a18.314 18.314 0 0 1-.028-2.5c.63.035 1.291.052 1.971.052a.75.75 0 0 0 0-1.5 34.96 34.96 0 0 1-1.811-.045c.11-.678.265-1.279.46-1.776.434-1.102.94-1.429 1.351-1.429a.75.75 0 0 0 0-1.5 7.25 7.25 0 0 0-.003 14.5h.003a7.25 7.25 0 0 0 7.25-7.25.75.75 0 0 0-1.5 0c0 .298-.023.59-.066.876-.478.158-1.12.297-1.91.403-.104.014-.21.028-.317.04.029-.43.043-.87.043-1.319a.75.75 0 0 0-1.5 0c0 .503-.02.988-.057 1.448Zm-.593 2.873c-.433 1.1-.937 1.428-1.349 1.429h-.001c-.412 0-.917-.327-1.35-1.429a8.037 8.037 0 0 1-.386-1.36 36.907 36.907 0 0 0 3.473 0c-.102.51-.232.967-.387 1.36Zm-4.096-9.192c-.253.642-.44 1.39-.565 2.207a20.09 20.09 0 0 1-.384-.046c-.47-.061-.89-.134-1.256-.216a5.777 5.777 0 0 1 2.302-2.179 6.594 6.594 0 0 0-.097.234Zm-1.142 3.648a14.74 14.74 0 0 1-1.658-.302 5.756 5.756 0 0 0-.138 2.4c.478.16 1.12.298 1.91.404.104.014.21.028.317.04a19.597 19.597 0 0 1-.009-2.491 21.63 21.63 0 0 1-.422-.05Zm7.17 4.07a10.07 10.07 0 0 1-.536 2.024 6.709 6.709 0 0 1-.097.234 5.775 5.775 0 0 0 2.498-2.538c-.369.078-.762.144-1.173.199-.223.03-.455.057-.692.081Zm-8.429-.28a5.775 5.775 0 0 0 2.498 2.538 6.688 6.688 0 0 1-.097-.234 10.098 10.098 0 0 1-.536-2.024 21.862 21.862 0 0 1-.692-.081c-.41-.055-.804-.121-1.173-.2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.012 6.97a.75.75 0 1 0 1.061 1.06l2.47-2.47v1.19a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0 0 1.5h1.19l-2.47 2.47Z"
  }));
};
SvgDomainRedirectMinor.displayName = "DomainRedirectMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/DomainsFilledMajor.svg.mjs


var SvgDomainsFilledMajor = function SvgDomainsFilledMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M8.265 9.21a19.92 19.92 0 0 0 .022 2c.545.026 1.12.04 1.713.04a1 1 0 1 1 0 2 40.4 40.4 0 0 1-1.453-.027c.094.445.208.846.34 1.195.433 1.141.884 1.332 1.113 1.332a1 1 0 1 1 0 2 7.75 7.75 0 1 1 7.75-7.75 1 1 0 1 1-2 0c0-.441-.05-.87-.144-1.283-.555.139-1.188.249-1.876.332.013.313.02.63.02.951a1 1 0 1 1-2 0c0-.269-.005-.532-.015-.79a37.233 37.233 0 0 1-3.47 0Zm-3.871-.493a5.768 5.768 0 0 0-.113 1.881c.46.167 1.125.319 1.978.433l.015.002a21.735 21.735 0 0 1-.004-1.984 15.535 15.535 0 0 1-1.876-.332Zm.795-1.868c.376.08.804.15 1.275.209.108-.692.26-1.337.455-1.914a5.78 5.78 0 0 0-1.73 1.705Zm6.347.369a35.356 35.356 0 0 1-3.072 0 8.839 8.839 0 0 1 .423-1.636c.433-1.141.884-1.332 1.113-1.332.23 0 .68.19 1.113 1.332a8.81 8.81 0 0 1 .423 1.636Zm2-.16c.471-.058.899-.128 1.275-.209a5.78 5.78 0 0 0-1.73-1.705c.195.577.347 1.222.455 1.914Zm-6.617 7.798a5.779 5.779 0 0 1-1.912-2.003 16.878 16.878 0 0 0 1.478.22c.107.643.251 1.243.434 1.783Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13.065 12.46a.5.5 0 0 0-.606.605l1.122 4.51a.5.5 0 0 0 .838.234l1.165-1.165.84.841a.5.5 0 0 0 .708 0l.353-.353a.5.5 0 0 0 0-.707l-.84-.841 1.163-1.165a.5.5 0 0 0-.232-.838l-4.51-1.122Z"
  }));
};
SvgDomainsFilledMajor.displayName = "DomainsFilledMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/DomainsMajor.svg.mjs


var SvgDomainsMajor = function SvgDomainsMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M8.027 8.948a19.856 19.856 0 0 0 .026 2.5c.616.034 1.269.052 1.947.052a.75.75 0 0 1 0 1.5c-.604 0-1.193-.014-1.759-.04.106.582.244 1.103.412 1.547.44 1.161.95 1.493 1.347 1.493a.75.75 0 0 1 0 1.5 7.5 7.5 0 1 1 7.5-7.5.75.75 0 0 1-1.5 0c0-.55-.074-1.083-.213-1.59-.655.183-1.443.32-2.319.417.021.384.032.776.032 1.173a.75.75 0 0 1-1.5 0c0-.36-.01-.711-.027-1.052a36 36 0 0 1-1.973.052 36 36 0 0 1-1.973-.052Zm-3.814-.537a6.006 6.006 0 0 0-.163 2.367c.493.199 1.229.374 2.176.501l.314.04a21.132 21.132 0 0 1-.008-2.492c-.876-.096-1.664-.234-2.32-.416Zm.582-1.397c.52.132 1.156.24 1.88.32.124-.88.315-1.686.576-2.373.047-.125.098-.25.153-.372a6.026 6.026 0 0 0-2.61 2.425Zm7.032.44c-.577.03-1.19.046-1.827.046a35.3 35.3 0 0 1-1.827-.046c.111-.751.273-1.415.48-1.961.44-1.161.95-1.493 1.347-1.493.396 0 .907.332 1.347 1.493.207.546.369 1.21.48 1.96Zm1.498-.12c.724-.08 1.36-.188 1.88-.32a6.026 6.026 0 0 0-2.61-2.425c.056.122.107.247.154.372.26.687.452 1.493.576 2.373Zm-5.92 8.077a6.024 6.024 0 0 1-2.863-2.915c.455.11.955.199 1.484.27.218.03.444.056.676.08.124.81.306 1.553.549 2.193.047.125.098.25.153.372Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13.065 12.46a.5.5 0 0 0-.606.605l1.122 4.51a.5.5 0 0 0 .838.234l1.165-1.165.84.841a.5.5 0 0 0 .708 0l.353-.353a.5.5 0 0 0 0-.707l-.84-.841 1.163-1.165a.5.5 0 0 0-.232-.838l-4.51-1.122Z"
  }));
};
SvgDomainsMajor.displayName = "DomainsMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/DraftOrdersFilledMajor.svg.mjs


var SvgDraftOrdersFilledMajor = function SvgDraftOrdersFilledMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M16.704 1.104a.5.5 0 0 0-.707 0l-.957.957 1.768 1.767.957-.957a.5.5 0 0 0 0-.707l-1.06-1.06Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "m16.1 4.536-1.767-1.768-3.83 3.83a2 2 0 0 0-.585 1.348l-.026.772a.25.25 0 0 0 .258.258l.772-.025a2 2 0 0 0 1.348-.585l3.83-3.83Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M5.739 6.067a1.25 1.25 0 0 1 1.237-1.067h3.774a.75.75 0 0 0 0-1.5h-3.774a2.75 2.75 0 0 0-2.72 2.347l-.662 4.46a8.75 8.75 0 0 0-.094 1.282v1.661a3.25 3.25 0 0 0 3.25 3.25h6.5a3.25 3.25 0 0 0 3.25-3.25v-1.66c0-.43-.032-.858-.095-1.283l-.413-2.792a.75.75 0 0 0-1.484.22l.336 2.265h-2.484a1.25 1.25 0 0 0-1.185.855l-.159.474a.25.25 0 0 1-.237.171h-1.558a.25.25 0 0 1-.237-.17l-.159-.475a1.25 1.25 0 0 0-1.185-.855h-2.484l.583-3.933Z"
  }));
};
SvgDraftOrdersFilledMajor.displayName = "DraftOrdersFilledMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/DraftOrdersMajor.svg.mjs


var SvgDraftOrdersMajor = function SvgDraftOrdersMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M15.997 1.104a.5.5 0 0 1 .707 0l1.06 1.06a.5.5 0 0 1 0 .707l-.956.957-1.768-1.767.957-.957Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "m14.333 2.768 1.768 1.768-3.831 3.83a2 2 0 0 1-1.348.585l-.772.025a.25.25 0 0 1-.258-.258l.026-.772a2 2 0 0 1 .584-1.348l3.83-3.83Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M6.976 5a1.25 1.25 0 0 0-1.237 1.067l-.583 3.933h2.484a1.25 1.25 0 0 1 1.185.855l.159.474a.25.25 0 0 0 .237.171h1.558a.25.25 0 0 0 .237-.17l.159-.475a1.25 1.25 0 0 1 1.185-.855h2.484l-.336-2.265a.75.75 0 1 1 1.484-.22l.413 2.792c.063.425.095.853.095 1.282v1.661a3.25 3.25 0 0 1-3.25 3.25h-6.5a3.25 3.25 0 0 1-3.25-3.25v-1.66c0-.43.032-.858.094-1.283l.661-4.46a2.75 2.75 0 0 1 2.72-2.347h3.775a.75.75 0 0 1 0 1.5h-3.774Zm-1.976 6.59v-.09h2.46l.1.303a1.75 1.75 0 0 0 1.66 1.197h1.56a1.75 1.75 0 0 0 1.66-1.197l.1-.303h2.46v1.75a1.75 1.75 0 0 1-1.75 1.75h-6.5a1.75 1.75 0 0 1-1.75-1.75v-1.66Z"
  }));
};
SvgDraftOrdersMajor.displayName = "DraftOrdersMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/DragDropMajor.svg.mjs


var SvgDragDropMajor = function SvgDragDropMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.25 3.5a2.75 2.75 0 0 0-2.75 2.75.75.75 0 0 0 1.5 0c0-.69.56-1.25 1.25-1.25a.75.75 0 0 0 0-1.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M3.5 13.75a2.75 2.75 0 0 0 2.75 2.75.75.75 0 0 0 0-1.5c-.69 0-1.25-.56-1.25-1.25a.75.75 0 0 0-1.5 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13.75 3.5a2.75 2.75 0 0 1 2.75 2.75.75.75 0 0 1-1.5 0c0-.69-.56-1.25-1.25-1.25a.75.75 0 0 1 0-1.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M5 9a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11.75 4.25a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M7.75 6a1.75 1.75 0 0 0-1.75 1.75v4.5c0 .966.784 1.75 1.75 1.75h1.25a.75.75 0 0 0 0-1.5h-1.25a.25.25 0 0 1-.25-.25v-4.5a.25.25 0 0 1 .25-.25h4.5a.25.25 0 0 1 .25.25v1.25a.75.75 0 0 0 1.5 0v-1.25a1.75 1.75 0 0 0-1.75-1.75h-4.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11.065 10.46a.5.5 0 0 0-.606.605l1.122 4.51a.5.5 0 0 0 .838.234l1.165-1.165.84.841a.5.5 0 0 0 .708 0l.353-.353a.5.5 0 0 0 0-.707l-.84-.841 1.164-1.165a.5.5 0 0 0-.233-.838l-4.51-1.122Z"
  }));
};
SvgDragDropMajor.displayName = "DragDropMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/DragHandleMinor.svg.mjs


var SvgDragHandleMinor = function SvgDragHandleMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.75 3.5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-1Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.75 8.5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-1Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M5.75 14.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.25 3.5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-1Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11.25 9.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.25 13.5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-1Z"
  }));
};
SvgDragHandleMinor.displayName = "DragHandleMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/DropdownMinor.svg.mjs


var SvgDropdownMinor = function SvgDropdownMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M6.24 8.2a.75.75 0 0 1 1.06.04l2.7 2.908 2.7-2.908a.75.75 0 1 1 1.1 1.02l-3.25 3.5a.75.75 0 0 1-1.1 0l-3.25-3.5a.75.75 0 0 1 .04-1.06Z"
  }));
};
SvgDropdownMinor.displayName = "DropdownMinor";



// EXTERNAL MODULE: ../polaris-icons/dist/icons/DuplicateMinor.svg.mjs
var DuplicateMinor_svg = __webpack_require__(84144);
;// CONCATENATED MODULE: ../polaris-icons/dist/icons/DynamicSourceMajor.svg.mjs


var SvgDynamicSourceMajor = function SvgDynamicSourceMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M5.217 6.2c-.197.186-.217.305-.217.35 0 .045.02.164.217.35.2.189.528.393.996.58.931.373 2.27.62 3.787.62s2.855-.247 3.787-.62c.468-.187.797-.391.996-.58.197-.186.217-.305.217-.35 0-.045-.02-.164-.217-.35-.2-.189-.528-.393-.996-.58-.932-.373-2.27-.62-3.787-.62s-2.856.247-3.787.62c-.468.187-.797.391-.996.58Zm9.783 2.367a6.104 6.104 0 0 1-.656.306c-1.149.46-2.685.727-4.344.727-1.659 0-3.195-.268-4.344-.727a6.099 6.099 0 0 1-.656-.306v1.413c0 .045.02.163.217.35.2.189.528.393.996.58.931.373 2.27.62 3.787.62s2.855-.247 3.787-.62c.468-.187.797-.391.996-.58.197-.187.217-.305.217-.35v-1.413Zm0 3.43a6.104 6.104 0 0 1-.656.306c-1.149.46-2.685.727-4.344.727-1.659 0-3.195-.268-4.344-.727a6.099 6.099 0 0 1-.656-.306v1.453c0 .045.02.164.217.35.2.189.528.393.996.58.931.373 2.27.62 3.787.62s2.855-.247 3.787-.62c.468-.187.797-.391.996-.58.197-.187.217-.305.217-.35v-1.453Zm1.5 1.453c0 .59-.302 1.077-.687 1.44-.382.362-.896.654-1.469.883-1.149.46-2.685.727-4.344.727-1.659 0-3.195-.268-4.344-.727-.573-.23-1.087-.52-1.47-.883-.384-.363-.686-.85-.686-1.44v-6.9c0-.59.302-1.077.687-1.44.382-.362.896-.654 1.469-.883 1.149-.46 2.685-.727 4.344-.727 1.659 0 3.195.268 4.344.727.573.23 1.087.52 1.47.883.384.363.686.85.686 1.44v6.9Z"
  }));
};
SvgDynamicSourceMajor.displayName = "DynamicSourceMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/DynamicSourceMinor.svg.mjs


var SvgDynamicSourceMinor = function SvgDynamicSourceMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M5.217 6.2c-.197.186-.217.305-.217.35 0 .045.02.164.217.35.2.189.528.393.996.58.931.373 2.27.62 3.787.62s2.855-.247 3.787-.62c.468-.187.797-.391.996-.58.197-.186.217-.305.217-.35 0-.045-.02-.164-.217-.35-.2-.189-.528-.393-.996-.58-.932-.373-2.27-.62-3.787-.62s-2.856.247-3.787.62c-.468.187-.797.391-.996.58Zm9.783 2.367a6.104 6.104 0 0 1-.656.306c-1.149.46-2.685.727-4.344.727-1.659 0-3.195-.268-4.344-.727a6.099 6.099 0 0 1-.656-.306v1.413c0 .045.02.163.217.35.2.189.528.393.996.58.931.373 2.27.62 3.787.62s2.855-.247 3.787-.62c.468-.187.797-.391.996-.58.197-.187.217-.305.217-.35v-1.413Zm0 3.43a6.104 6.104 0 0 1-.656.306c-1.149.46-2.685.727-4.344.727-1.659 0-3.195-.268-4.344-.727a6.099 6.099 0 0 1-.656-.306v1.453c0 .045.02.164.217.35.2.189.528.393.996.58.931.373 2.27.62 3.787.62s2.855-.247 3.787-.62c.468-.187.797-.391.996-.58.197-.187.217-.305.217-.35v-1.453Zm1.5 1.453c0 .59-.302 1.077-.687 1.44-.382.362-.896.654-1.469.883-1.149.46-2.685.727-4.344.727-1.659 0-3.195-.268-4.344-.727-.573-.23-1.087-.52-1.47-.883-.384-.363-.686-.85-.686-1.44v-6.9c0-.59.302-1.077.687-1.44.382-.362.896-.654 1.469-.883 1.149-.46 2.685-.727 4.344-.727 1.659 0 3.195.268 4.344.727.573.23 1.087.52 1.47.883.384.363.686.85.686 1.44v6.9Z"
  }));
};
SvgDynamicSourceMinor.displayName = "DynamicSourceMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/EditMajor.svg.mjs


var SvgEditMajor = function SvgEditMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M15.655 4.344a2.695 2.695 0 0 0-3.81 0l-.599.599-.009-.009-1.06 1.06.008.01-5.88 5.88a2.75 2.75 0 0 0-.805 1.944v1.922a.75.75 0 0 0 .75.75h1.922a2.75 2.75 0 0 0 1.944-.806l7.54-7.539a2.695 2.695 0 0 0 0-3.81Zm-4.409 2.72-5.88 5.88a1.25 1.25 0 0 0-.366.884v1.172h1.172c.331 0 .65-.132.883-.366l5.88-5.88-1.689-1.69Zm2.75.629.599-.599a1.195 1.195 0 1 0-1.69-1.689l-.598.599 1.69 1.689Z"
  }));
};
SvgEditMajor.displayName = "EditMajor";



// EXTERNAL MODULE: ../polaris-icons/dist/icons/EditMinor.svg.mjs
var EditMinor_svg = __webpack_require__(8403);
;// CONCATENATED MODULE: ../polaris-icons/dist/icons/EmailMajor.svg.mjs


var SvgEmailMajor = function SvgEmailMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.567 7.57a.75.75 0 0 0-.634 1.36l3.538 1.651a1.25 1.25 0 0 0 1.058 0l3.538-1.651a.75.75 0 0 0-.634-1.36l-3.433 1.603-3.433-1.602Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M6.75 4.5a3.75 3.75 0 0 0-3.75 3.75v3.5a3.75 3.75 0 0 0 3.75 3.75h6.5a3.75 3.75 0 0 0 3.75-3.75v-3.5a3.75 3.75 0 0 0-3.75-3.75h-6.5Zm-2.25 3.75a2.25 2.25 0 0 1 2.25-2.25h6.5a2.25 2.25 0 0 1 2.25 2.25v3.5a2.25 2.25 0 0 1-2.25 2.25h-6.5a2.25 2.25 0 0 1-2.25-2.25v-3.5Z"
  }));
};
SvgEmailMajor.displayName = "EmailMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/EmailNewsletterMajor.svg.mjs


var SvgEmailNewsletterMajor = function SvgEmailNewsletterMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M8.5 6.5a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M8 3.5a2.75 2.75 0 0 0-2.75 2.75v.5h-1.75a1 1 0 0 0-1 1v6a2.75 2.75 0 0 0 2.75 2.75h9.5a2.75 2.75 0 0 0 2.75-2.75v-6a1 1 0 0 0-1-1h-1.75v-.5a2.75 2.75 0 0 0-2.75-2.75h-4Zm2 7.849-3.25-2.167v-2.932c0-.69.56-1.25 1.25-1.25h4c.69 0 1.25.56 1.25 1.25v2.932l-3.25 2.167Zm6-2.198v4.599c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-4.599l6 4 6-4Z"
  }));
};
SvgEmailNewsletterMajor.displayName = "EmailNewsletterMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/EmbedMinor.svg.mjs


var SvgEmbedMinor = function SvgEmbedMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.221 4.956a.75.75 0 0 0-1.442-.412l-3 10.5a.75.75 0 1 0 1.442.412l3-10.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M7.03 6.22a.75.75 0 0 1 0 1.06l-2.72 2.72 2.72 2.72a.75.75 0 0 1-1.06 1.06l-3.25-3.25a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.97 13.78a.75.75 0 0 1 0-1.06l2.72-2.72-2.72-2.72a.75.75 0 0 1 1.06-1.06l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0Z"
  }));
};
SvgEmbedMinor.displayName = "EmbedMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/EnableSelectionMinor.svg.mjs


var SvgEnableSelectionMinor = function SvgEnableSelectionMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13.28 8.78a.75.75 0 0 0-1.06-1.06l-2.97 2.97-1.22-1.22a.75.75 0 0 0-1.06 1.06l1.75 1.75a.75.75 0 0 0 1.06 0l3.5-3.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M6.25 3.5a2.75 2.75 0 0 0-2.75 2.75v7.5a2.75 2.75 0 0 0 2.75 2.75h7.5a2.75 2.75 0 0 0 2.75-2.75v-7.5a2.75 2.75 0 0 0-2.75-2.75h-7.5Zm-1.25 2.75c0-.69.56-1.25 1.25-1.25h7.5c.69 0 1.25.56 1.25 1.25v7.5c0 .69-.56 1.25-1.25 1.25h-7.5c-.69 0-1.25-.56-1.25-1.25v-7.5Z"
  }));
};
SvgEnableSelectionMinor.displayName = "EnableSelectionMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/EnterMajor.svg.mjs


var SvgEnterMajor = function SvgEnterMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M9.75 3a2.25 2.25 0 0 0-2.25 2.25.75.75 0 0 0 1.5 0 .75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v9.5a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75.75.75 0 0 0-1.5 0 2.25 2.25 0 0 0 2.25 2.25h4a2.25 2.25 0 0 0 2.25-2.25v-9.5a2.25 2.25 0 0 0-2.25-2.25h-4Zm-5 6.25a.75.75 0 0 0 0 1.5h5.69l-.97.97a.75.75 0 1 0 1.06 1.06l2.25-2.25a.75.75 0 0 0 0-1.06l-2.25-2.25a.75.75 0 1 0-1.06 1.06l.97.97h-5.69Z"
  }));
};
SvgEnterMajor.displayName = "EnterMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/EnvelopeMajor.svg.mjs


var SvgEnvelopeMajor = function SvgEnvelopeMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6 9.5a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5h-1Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M5.25 12.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M5.25 4a2.75 2.75 0 0 0-2.75 2.75v6.5a2.75 2.75 0 0 0 2.75 2.75h9.5a2.75 2.75 0 0 0 2.75-2.75v-6.5a2.75 2.75 0 0 0-2.75-2.75h-9.5Zm7.184 1.5h-7.184c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h7.184l-.5-.273a2.75 2.75 0 0 1-1.434-2.414v-3.626a2.75 2.75 0 0 1 1.433-2.414l.5-.273Zm3.566 7.552v-6.104a1 1 0 0 0-1.479-.878l-1.87 1.02a1.25 1.25 0 0 0-.651 1.097v3.626c0 .457.25.878.651 1.097l1.87 1.02a1 1 0 0 0 1.479-.878Z"
  }));
};
SvgEnvelopeMajor.displayName = "EnvelopeMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ExchangeMajor.svg.mjs


var SvgExchangeMajor = function SvgExchangeMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M15.5 11.364a2.501 2.501 0 1 1-1.5 0v-2.364a2.25 2.25 0 0 0-2.25-2.25h-.44l.47.47a.75.75 0 0 1-1.06 1.06l-1.75-1.75a.75.75 0 0 1 0-1.06l1.75-1.75a.75.75 0 1 1 1.06 1.06l-.47.47h.44a3.75 3.75 0 0 1 3.75 3.75v2.364Zm.25 2.386a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M6 11v-2.364a2.501 2.501 0 1 0-1.5 0v2.364a3.75 3.75 0 0 0 3.75 3.75h.44l-.47.47a.75.75 0 1 0 1.06 1.06l1.75-1.75a.75.75 0 0 0 0-1.06l-1.75-1.75a.75.75 0 0 0-1.06 1.06l.47.47h-.44a2.25 2.25 0 0 1-2.25-2.25Zm.25-4.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }));
};
SvgExchangeMajor.displayName = "ExchangeMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ExistingInventoryMajor.svg.mjs


var SvgExistingInventoryMajor = function SvgExistingInventoryMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11.265 2.952a2.25 2.25 0 0 0-2.53 0l-4.094 2.783a3.75 3.75 0 0 0-1.641 3.101v7.413a.75.75 0 0 0 1.5 0v-7.413c0-.745.369-1.441.985-1.86l4.093-2.784a.75.75 0 0 1 .844 0l4.093 2.784a2.25 2.25 0 0 1 .985 1.86v7.413a.75.75 0 0 0 1.5 0v-7.413a3.75 3.75 0 0 0-1.641-3.1l-4.094-2.784Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M10 16.968a1 1 0 0 1-.25.031h-3a1 1 0 0 1-1-1v-3.5a1 1 0 0 1 1-1h.75v-3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3h.75a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1h-3a1 1 0 0 1-.25-.031Zm.75-3.969v2.5h2v-2.5h-2Zm-1.5 2.5v-2.5h-2v2.5h2Zm1.75-4v-2.5h-2v2.5h2Z"
  }));
};
SvgExistingInventoryMajor.displayName = "ExistingInventoryMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ExitMajor.svg.mjs


var SvgExitMajor = function SvgExitMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M9.75 3a2.25 2.25 0 0 0-2.25 2.25.75.75 0 0 0 1.5 0 .75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v9.5a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75.75.75 0 0 0-1.5 0 2.25 2.25 0 0 0 2.25 2.25h4a2.25 2.25 0 0 0 2.25-2.25v-9.5a2.25 2.25 0 0 0-2.25-2.25h-4Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.25 10.75a.75.75 0 0 0 0-1.5h-5.69l.97-.97a.75.75 0 0 0-1.06-1.06l-2.25 2.25a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 0 0 1.06-1.06l-.97-.97h5.69Z"
  }));
};
SvgExitMajor.displayName = "ExitMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ExploreImagesMajor.svg.mjs


var SvgExploreImagesMajor = function SvgExploreImagesMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M9.018 3.5h1.964c.813 0 1.469 0 2 .043.546.045 1.026.14 1.47.366a3.75 3.75 0 0 1 1.64 1.639c.226.444.32.924.365 1.47.043.531.043 1.187.043 2v.232a.75.75 0 0 1-1.5 0v-.2c0-.852 0-1.447-.038-1.91-.037-.453-.107-.714-.207-.911a2.25 2.25 0 0 0-.984-.984c-.197-.1-.458-.17-.912-.207-.462-.037-1.056-.038-1.909-.038h-1.9c-.852 0-1.447 0-1.91.038-.453.037-.714.107-.911.207a2.25 2.25 0 0 0-.984.984c-.1.197-.17.458-.207.912-.037.462-.038 1.057-.038 1.909v1.428l.723-.867a1.75 1.75 0 0 1 2.582-.117l1.225 1.226a.75.75 0 0 1-1.06 1.06l-1.226-1.225a.25.25 0 0 0-.369.016l-1.799 2.16a.746.746 0 0 1-.044.047l.006.081c.037.454.107.715.207.912.216.424.56.768.984.984.197.1.458.17.912.207.462.037 1.057.038 1.909.038h.2a.75.75 0 0 1 0 1.5h-.232c-.813 0-1.469 0-2-.043-.546-.045-1.026-.14-1.47-.366a3.75 3.75 0 0 1-1.64-1.639c-.226-.444-.32-.924-.365-1.47-.043-.531-.043-1.187-.043-2v-1.964c0-.813 0-1.469.043-2 .045-.546.14-1.026.366-1.47a3.75 3.75 0 0 1 1.639-1.64c.444-.226.924-.32 1.47-.365.531-.043 1.187-.043 2-.043Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M10.25 13a2.75 2.75 0 1 1 5.152 1.34l1.128 1.13a.75.75 0 0 1-1.06 1.06l-1.13-1.129a2.75 2.75 0 0 1-4.09-2.402Zm2.75-1.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z"
  }));
};
SvgExploreImagesMajor.displayName = "ExploreImagesMajor";



// EXTERNAL MODULE: ../polaris-icons/dist/icons/ExportMinor.svg.mjs
var ExportMinor_svg = __webpack_require__(58220);
;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ExtendMajor.svg.mjs


var SvgExtendMajor = function SvgExtendMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13.25 8a.75.75 0 0 0 0-1.5h-7.19l1.22-1.22a.75.75 0 0 0-1.06-1.06l-2.5 2.5a.75.75 0 0 0 0 1.06l2.5 2.5a.75.75 0 1 0 1.06-1.06l-1.22-1.22h7.19Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.75 13.5a.75.75 0 0 1 0-1.5h7.19l-1.22-1.22a.75.75 0 1 1 1.06-1.06l2.5 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 1 1-1.06-1.06l1.22-1.22h-7.19Z"
  }));
};
SvgExtendMajor.displayName = "ExtendMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ExtendMinor.svg.mjs


var SvgExtendMinor = function SvgExtendMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13.25 8a.75.75 0 0 0 0-1.5h-7.19l1.22-1.22a.75.75 0 0 0-1.06-1.06l-2.5 2.5a.75.75 0 0 0 0 1.06l2.5 2.5a.75.75 0 1 0 1.06-1.06l-1.22-1.22h7.19Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.75 13.5a.75.75 0 0 1 0-1.5h7.19l-1.22-1.22a.75.75 0 1 1 1.06-1.06l2.5 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 1 1-1.06-1.06l1.22-1.22h-7.19Z"
  }));
};
SvgExtendMinor.displayName = "ExtendMinor";



// EXTERNAL MODULE: ../polaris-icons/dist/icons/ExternalMinor.svg.mjs
var ExternalMinor_svg = __webpack_require__(55789);
;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ExternalSmallMinor.svg.mjs


var SvgExternalSmallMinor = function SvgExternalSmallMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11.75 4.5a.75.75 0 0 0 0 1.5h1.19l-2.72 2.72a.75.75 0 1 0 1.06 1.06l2.72-2.72v1.19a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-.75-.75h-3Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M15 11.25a.75.75 0 0 0-1.5 0v1c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25v-4.5c0-.69.56-1.25 1.25-1.25h1a.75.75 0 0 0 0-1.5h-1a2.75 2.75 0 0 0-2.75 2.75v4.5a2.75 2.75 0 0 0 2.75 2.75h4.5a2.75 2.75 0 0 0 2.75-2.75v-1Z"
  }));
};
SvgExternalSmallMinor.displayName = "ExternalSmallMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/EyeDropperMinor.svg.mjs


var SvgEyeDropperMinor = function SvgEyeDropperMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "m14.42 9.116 1.401-1.401a2.5 2.5 0 0 0-3.535-3.536l-.743.743-.007.007-.652.652-1.06-1.06a.75.75 0 1 0-1.061 1.06l1.06 1.06-5.644 5.645a2.5 2.5 0 1 0 3.535 3.535l5.645-5.644 1.06 1.06a.75.75 0 0 0 1.061-1.06l-1.06-1.06Zm-2.122 0-5.644 5.645a1 1 0 0 1-1.414-1.415l5.644-5.644 1.414 1.414Z"
  }));
};
SvgEyeDropperMinor.displayName = "EyeDropperMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/FacebookMinor.svg.mjs


var SvgFacebookMinor = function SvgFacebookMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10 3c-3.866 0-7 3.154-7 7.045 0 3.506 2.544 6.414 5.875 6.955v-4.187h-1.875v-2.186h1.875v-1.666c0-1.895 1.103-2.942 2.79-2.942.808 0 1.653.148 1.653.148v1.86h-.931c-.918 0-1.204.584-1.204 1.182v1.418h2.048l-.327 2.186h-1.72v4.177c3.302-.566 5.816-3.46 5.816-6.945 0-3.89-3.134-7.045-7-7.045Z"
  }));
};
SvgFacebookMinor.displayName = "FacebookMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/FaviconMajor.svg.mjs


var SvgFaviconMajor = function SvgFaviconMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.5 8.5a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0v-3Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M9.5 9.25a.75.75 0 0 0 0 1.5.75.75 0 0 1 0 1.5 2.25 2.25 0 0 1 0-4.5.75.75 0 0 1 0 1.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M13 7.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-.75 2.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M13.58 4.5h-7.16c-.535 0-.98 0-1.345.03-.38.03-.736.098-1.073.27a2.75 2.75 0 0 0-1.202 1.202c-.172.337-.24.693-.27 1.073-.03.365-.03.81-.03 1.345v3.16c0 .535 0 .98.03 1.345.03.38.098.736.27 1.073a2.75 2.75 0 0 0 1.202 1.202c.337.172.693.24 1.073.27.365.03.81.03 1.345.03h7.16c.535 0 .98 0 1.345-.03.38-.03.736-.098 1.073-.27a2.751 2.751 0 0 0 1.202-1.201c.172-.338.24-.694.27-1.074.03-.365.03-.81.03-1.345v-3.16c0-.535 0-.98-.03-1.345-.03-.38-.098-.736-.27-1.073a2.75 2.75 0 0 0-1.201-1.202c-.338-.172-.694-.24-1.074-.27-.365-.03-.81-.03-1.345-.03Zm-8.897 1.636c.09-.046.227-.088.514-.111.296-.024.68-.025 1.253-.025h7.1c.572 0 .957 0 1.252.025.288.023.425.065.516.111.235.12.426.311.546.547.046.09.088.227.111.514.024.296.025.68.025 1.253v3.1c0 .572 0 .957-.025 1.252-.023.288-.065.425-.111.516a1.25 1.25 0 0 1-.546.546c-.091.046-.228.088-.515.111-.296.024-.68.025-1.253.025h-7.1c-.572 0-.957 0-1.253-.025-.287-.023-.424-.065-.514-.111a1.25 1.25 0 0 1-.547-.546c-.046-.091-.088-.228-.111-.515-.024-.296-.025-.68-.025-1.253v-3.1c0-.572 0-.957.025-1.253.023-.287.065-.424.111-.514a1.25 1.25 0 0 1 .547-.547Z"
  }));
};
SvgFaviconMajor.displayName = "FaviconMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/FavoriteMajor.svg.mjs


var SvgFavoriteMajor = function SvgFavoriteMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M8.872 4.123c.453-.95 1.803-.95 2.256 0l1.39 2.912 3.199.421c1.042.138 1.46 1.422.697 2.146l-2.34 2.222.587 3.172c.192 1.034-.901 1.828-1.825 1.327l-2.836-1.54-2.836 1.54c-.924.501-2.017-.293-1.825-1.327l.587-3.172-2.34-2.222c-.762-.724-.345-2.008.697-2.146l3.2-.421 1.389-2.912Zm1.128 1.119-1.222 2.561a1.25 1.25 0 0 1-.965.701l-2.814.371 2.058 1.954c.307.292.446.718.369 1.134l-.517 2.791 2.495-1.354a1.25 1.25 0 0 1 1.192 0l2.495 1.354-.517-2.79a1.25 1.25 0 0 1 .369-1.135l2.058-1.954-2.814-.37a1.25 1.25 0 0 1-.965-.702l-1.222-2.561Z"
  }));
};
SvgFavoriteMajor.displayName = "FavoriteMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/FeaturedCollectionMajor.svg.mjs


var SvgFeaturedCollectionMajor = function SvgFeaturedCollectionMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.5 6.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M10.169 3a3.75 3.75 0 0 0-2.652 1.098l-3.883 3.883a2.75 2.75 0 0 0 0 3.89l2.672 2.672a2.5 2.5 0 0 0 3.536 0l4.206-4.206a3.25 3.25 0 0 0 .952-2.298v-2.289a2.75 2.75 0 0 0-2.75-2.75h-2.081Zm-1.591 2.159a2.25 2.25 0 0 1 1.59-.659h2.082c.69 0 1.25.56 1.25 1.25v2.289c0 .464-.184.909-.513 1.237l-4.206 4.206a1 1 0 0 1-1.414 0l-2.672-2.672a1.25 1.25 0 0 1 0-1.768l3.883-3.883Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M17.5 6.25a.75.75 0 0 0-1.5 0v3.029c0 .468-.188.917-.521 1.245l-.63.623a.75.75 0 0 0 1.053 1.067l.63-.622a3.25 3.25 0 0 0 .968-2.313v-3.029Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M11.825 13.556a1.964 1.964 0 0 1 2.575-.142 1.964 1.964 0 0 1 2.575.142 1.9 1.9 0 0 1 0 2.724l-1.7 1.664a1.25 1.25 0 0 1-1.75 0l-1.7-1.664a1.9 1.9 0 0 1 0-2.724Zm1.05 1.072a.463.463 0 0 1 .639 0l.362.354a.75.75 0 0 0 1.049 0l.361-.354a.463.463 0 0 1 .64 0 .4.4 0 0 1 0 .58l-1.526 1.493-1.526-1.493a.4.4 0 0 1 0-.58Z"
  }));
};
SvgFeaturedCollectionMajor.displayName = "FeaturedCollectionMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/FeaturedContentMajor.svg.mjs


var SvgFeaturedContentMajor = function SvgFeaturedContentMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M5.5 5.25c0-.69.56-1.25 1.25-1.25h2.25v3.75c0 .966.784 1.75 1.75 1.75h3.75v1.75a.75.75 0 0 0 1.5 0v-2.5a.75.75 0 0 0-.22-.53l-5.5-5.5a.75.75 0 0 0-.53-.22h-3a2.75 2.75 0 0 0-2.75 2.75v9.5a2.75 2.75 0 0 0 2.75 2.75h1.25a.75.75 0 0 0 0-1.5h-1.25c-.69 0-1.25-.56-1.25-1.25v-9.5Zm7.94 2.75-2.94-2.94v2.69c0 .138.112.25.25.25h2.69Zm-2.228 6.464a.766.766 0 0 1 1.061 0l.453.442a.75.75 0 0 0 1.048 0l.453-.442a.766.766 0 0 1 1.061 0 .688.688 0 0 1 0 .992l-2.038 1.995-2.038-1.995a.688.688 0 0 1 0-.992Zm2.038-1.14a2.266 2.266 0 0 0-3.087.068 2.188 2.188 0 0 0 0 3.137l2.213 2.165a1.25 1.25 0 0 0 1.748 0l2.213-2.165a2.188 2.188 0 0 0 0-3.137 2.266 2.266 0 0 0-3.087-.068Z"
  }));
};
SvgFeaturedContentMajor.displayName = "FeaturedContentMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/FileFilledMinor.svg.mjs


var SvgFileFilledMinor = function SvgFileFilledMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M9 3h-2.75a1.75 1.75 0 0 0-1.75 1.75v10.5c0 .966.784 1.75 1.75 1.75h7.5a1.75 1.75 0 0 0 1.75-1.75v-5.795h-4.87a1.625 1.625 0 0 1-1.626-1.624l-.003-4.831Zm-1.975 11c0-.483.392-.875.875-.875h4.2a.875.875 0 0 1 0 1.75h-4.2a.875.875 0 0 1-.875-.875Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M15.35 8.205h-4.72a.375.375 0 0 1-.376-.375l-.003-4.699c.212.087.407.216.572.382l4.164 4.164c.154.154.276.333.363.528Z"
  }));
};
SvgFileFilledMinor.displayName = "FileFilledMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/FileMinor.svg.mjs


var SvgFileMinor = function SvgFileMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M8 12.5a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M6.75 2.5a2.75 2.75 0 0 0-2.75 2.75v9.5a2.75 2.75 0 0 0 2.75 2.75h6.5a2.75 2.75 0 0 0 2.75-2.75v-6a.75.75 0 0 0-.22-.53l-5.5-5.5a.75.75 0 0 0-.53-.22h-3Zm-1.25 2.75c0-.69.56-1.25 1.25-1.25h2.25v3.75c0 .966.784 1.75 1.75 1.75h3.75v5.25c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-9.5Zm7.94 2.75-2.94-2.94v2.69c0 .138.112.25.25.25h2.69Z"
  }));
};
SvgFileMinor.displayName = "FileMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/FilterMajor.svg.mjs


var SvgFilterMajor = function SvgFilterMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M3 6a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5h-12.5a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.75 14a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M5.5 9.25a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-9Z"
  }));
};
SvgFilterMajor.displayName = "FilterMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/FilterMinor.svg.mjs


var SvgFilterMinor = function SvgFilterMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M3 6a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5h-12.5a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.75 14a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M5.5 9.25a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-9Z"
  }));
};
SvgFilterMinor.displayName = "FilterMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/FinancesMajor.svg.mjs


var SvgFinancesMajor = function SvgFinancesMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M13.08 4h-3.66c-.535 0-.98 0-1.345.03-.38.03-.736.098-1.073.27a2.75 2.75 0 0 0-1.202 1.202c-.172.337-.24.693-.27 1.073-.017.21-.025.446-.028.711-.352.034-.685.103-1 .264a2.75 2.75 0 0 0-1.202 1.202c-.172.337-.24.693-.27 1.073-.03.365-.03.81-.03 1.345v.91c0 .535 0 .98.03 1.345.03.38.098.736.27 1.073a2.75 2.75 0 0 0 1.202 1.202c.337.172.693.24 1.073.27.365.03.81.03 1.344.03h3.662c.534 0 .98 0 1.344-.03.38-.03.736-.098 1.073-.27a2.751 2.751 0 0 0 1.202-1.201c.172-.338.24-.694.27-1.074.017-.21.025-.446.028-.711.352-.034.685-.103 1-.264a2.751 2.751 0 0 0 1.202-1.201c.172-.338.24-.694.27-1.074.03-.365.03-.81.03-1.345v-.91c0-.535 0-.98-.03-1.345-.03-.38-.098-.736-.27-1.073a2.75 2.75 0 0 0-1.201-1.202c-.338-.172-.694-.24-1.074-.27-.365-.03-.81-.03-1.345-.03Zm-4.331 3.25h-1.746c.003-.218.01-.397.022-.553.023-.287.065-.424.111-.514a1.25 1.25 0 0 1 .547-.547c.09-.046.227-.088.514-.111.296-.024.68-.025 1.253-.025h3.6c.572 0 .957 0 1.252.025.288.023.425.065.516.111.235.12.426.311.546.547.046.09.088.227.111.514.024.296.025.68.025 1.253v.85c0 .572 0 .957-.025 1.252-.023.288-.065.425-.111.516a1.25 1.25 0 0 1-.546.546 1.009 1.009 0 0 1-.318.09v-.035c0-.534 0-.98-.03-1.344-.03-.38-.098-.736-.27-1.073a2.75 2.75 0 0 0-1.201-1.202c-.338-.172-.694-.24-1.074-.27-.365-.03-.81-.03-1.345-.03h-1.831Zm-2.072 1.5c-.426 0-.733.005-.98.025-.287.023-.424.065-.514.111a1.25 1.25 0 0 0-.547.547c-.046.09-.088.227-.111.514-.024.296-.025.68-.025 1.253v.85c0 .572 0 .957.025 1.252.023.288.065.425.111.516.12.235.311.426.547.546.09.046.227.088.514.111.247.02.554.024.98.025-.422-.769-.677-1.774-.677-2.875 0-1.1.255-2.106.677-2.875Zm4.146 5.75c.426 0 .733-.005.98-.025.287-.023.424-.065.514-.111a1.25 1.25 0 0 0 .547-.546c.046-.091.088-.228.111-.515.024-.296.025-.68.025-1.253v-.85c0-.572 0-.957-.025-1.253-.023-.287-.065-.424-.111-.514a1.25 1.25 0 0 0-.546-.547c-.091-.046-.228-.088-.515-.111-.247-.02-.554-.024-.98-.025.422.769.677 1.775.677 2.875s-.255 2.106-.677 2.875Zm-2.073-5.75c-.06 0-.337.043-.675.58-.325.517-.575 1.325-.575 2.295s.25 1.778.575 2.295c.338.538.615.58.675.58.06 0 .337-.042.675-.58.325-.517.575-1.325.575-2.295s-.25-1.778-.575-2.295c-.338-.537-.614-.58-.675-.58Z"
  }));
};
SvgFinancesMajor.displayName = "FinancesMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/FinancesMinor.svg.mjs


var SvgFinancesMinor = function SvgFinancesMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M9.755 3.145a1.25 1.25 0 0 1 1.008.015l5.654 2.591a1 1 0 0 1 .583.91v.59a1 1 0 0 1-1 1h-.5v3.749h.25a.75.75 0 0 1 0 1.5h-11.5a.75.75 0 0 1 0-1.5h.25v-3.75h-.5a1 1 0 0 1-1-1v-.584a1 1 0 0 1 .61-.921l6.145-2.6Zm.483 1.425-5.154 2.18h9.911l-4.757-2.18Zm3.762 7.43v-3.75h-1.5v3.75h1.5Zm-5-3.75h2v3.75h-2v-3.75Zm-1.5 3.75v-3.75h-1.5v3.75h1.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M3.5 15.25a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 0 1.5h-11.5a.75.75 0 0 1-.75-.75Z"
  }));
};
SvgFinancesMinor.displayName = "FinancesMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/FirstClickModelMinor.svg.mjs


var SvgFirstClickModelMinor = function SvgFirstClickModelMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M4.75 4.25a.75.75 0 0 0-1.5 0v11.5a.75.75 0 0 0 1.5 0v-11.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M8 9a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.75 9.75a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0v-6Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M16.75 9.75a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0v-6Z"
  }));
};
SvgFirstClickModelMinor.displayName = "FirstClickModelMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/FirstOrderMajor.svg.mjs


var SvgFirstOrderMajor = function SvgFirstOrderMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M5.72 4.28a.75.75 0 0 1 1.06-1.06l.5.5a.75.75 0 0 1-1.06 1.06l-.5-.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M4.013 7.462a.75.75 0 1 1 .474-1.424l1.5.5a.75.75 0 1 1-.474 1.424l-1.5-.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14.28 3.22a.75.75 0 0 1 0 1.06l-.5.5a.75.75 0 1 1-1.06-1.06l.5-.5a.75.75 0 0 1 1.06 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M16.462 6.513a.75.75 0 0 1-.475.949l-1.5.5a.75.75 0 0 1-.474-1.424l1.5-.5a.75.75 0 0 1 .949.475Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "m9.751 5.687-.493 3.457a.75.75 0 0 0 1.485.212l.715-5.01c.107-.75-.745-1.255-1.351-.801l-1.807 1.355a.75.75 0 0 0 .9 1.2l.551-.413Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "m5.156 10 .132-.89a.75.75 0 1 0-1.484-.22l-.21 1.417a8.749 8.749 0 0 0-.094 1.282v1.661a3.25 3.25 0 0 0 3.25 3.25h6.5a3.25 3.25 0 0 0 3.25-3.25v-1.66c0-.43-.032-.858-.095-1.283l-.21-1.417a.75.75 0 0 0-1.483.22l.132.89h-2.484a1.25 1.25 0 0 0-1.185.855l-.159.474a.25.25 0 0 1-.237.171h-1.558a.25.25 0 0 1-.237-.17l-.159-.475a1.25 1.25 0 0 0-1.185-.855h-2.484Zm-.155 1.5-.001.09v1.66c0 .967.784 1.75 1.75 1.75h6.5a1.75 1.75 0 0 0 1.75-1.75v-1.75h-2.46l-.1.303a1.75 1.75 0 0 1-1.66 1.197h-1.56a1.75 1.75 0 0 1-1.66-1.197l-.1-.303h-2.46Z"
  }));
};
SvgFirstOrderMajor.displayName = "FirstOrderMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/FirstVisitMajor.svg.mjs


var SvgFirstVisitMajor = function SvgFirstVisitMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "m8.8 8.69.7-.3v3.11h-1a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-1v-3.5c0-.89-.92-1.5-1.74-1.14l-1.06.44a.75.75 0 0 0 .6 1.38Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M10 4a7.63 7.63 0 0 0-5.58 2.53 9.27 9.27 0 0 0-1.77 2.74c-.08.23-.15.49-.15.73s.07.5.15.73c.09.24.21.52.37.82.32.58.79 1.27 1.4 1.92a7.63 7.63 0 0 0 5.58 2.53 7.63 7.63 0 0 0 5.58-2.53 9.26 9.26 0 0 0 1.77-2.74c.08-.23.15-.49.15-.73s-.07-.5-.15-.73a9.27 9.27 0 0 0-1.77-2.74 7.63 7.63 0 0 0-5.58-2.53Zm-6 6 .07-.23a7.77 7.77 0 0 1 1.45-2.21 6.14 6.14 0 0 1 4.48-2.06c1.94 0 3.44.96 4.49 2.06a7.77 7.77 0 0 1 1.44 2.21l.07.23-.07.23a7.77 7.77 0 0 1-1.45 2.21 6.14 6.14 0 0 1-4.48 2.06 6.14 6.14 0 0 1-4.49-2.06 7.77 7.77 0 0 1-1.44-2.21l-.07-.23Z"
  }));
};
SvgFirstVisitMajor.displayName = "FirstVisitMajor";



// EXTERNAL MODULE: ../polaris-icons/dist/icons/FlagMajor.svg.mjs
var FlagMajor_svg = __webpack_require__(13256);
;// CONCATENATED MODULE: ../polaris-icons/dist/icons/FlipCameraMajor.svg.mjs


var SvgFlipCameraMajor = function SvgFlipCameraMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M9.47 6.22a.75.75 0 0 1 1.06 0l1.5 1.5a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l.185-.186a1.75 1.75 0 0 0 .345 3.466h.294c.804 0 1.456-.652 1.456-1.456a.75.75 0 0 1 1.5 0 2.956 2.956 0 0 1-2.956 2.956h-.294a3.25 3.25 0 0 1-.297-6.487l-.233-.233a.75.75 0 0 1 0-1.06Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M6.149 5.472a2.75 2.75 0 0 1 2.435-1.472h2.832a2.75 2.75 0 0 1 2.435 1.472l.346.658a.69.69 0 0 0 .612.37c1.21 0 2.191.981 2.191 2.191v4.559a2.75 2.75 0 0 1-2.75 2.75h-8.5a2.75 2.75 0 0 1-2.75-2.75v-4.559c0-1.21.981-2.191 2.191-2.191a.691.691 0 0 0 .612-.37l.346-.658Zm2.435.028c-.465 0-.89.258-1.107.669l-.346.658a2.191 2.191 0 0 1-1.94 1.173.691.691 0 0 0-.691.691v4.559c0 .69.56 1.25 1.25 1.25h8.5c.69 0 1.25-.56 1.25-1.25v-4.559a.691.691 0 0 0-.691-.691 2.191 2.191 0 0 1-1.94-1.173l-.346-.658a1.25 1.25 0 0 0-1.107-.669h-2.832Z"
  }));
};
SvgFlipCameraMajor.displayName = "FlipCameraMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/FolderDownMajor.svg.mjs


var SvgFolderDownMajor = function SvgFolderDownMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M4.5 6.75c0-.69.56-1.25 1.25-1.25h1.514c.473 0 .906.268 1.118.691l.17.342a1.75 1.75 0 0 0 1.566.967h4.132c.69 0 1.25.56 1.25 1.25v.5a.75.75 0 0 0 1.5 0v-.5a2.75 2.75 0 0 0-2.75-2.75h-4.132a.25.25 0 0 1-.224-.138l-.17-.342a2.75 2.75 0 0 0-2.46-1.52h-1.514a2.75 2.75 0 0 0-2.75 2.75v6.5a2.75 2.75 0 0 0 2.75 2.75h5a.75.75 0 0 0 0-1.5h-5c-.69 0-1.25-.56-1.25-1.25v-6.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M16 11.5a.75.75 0 0 0-1.5 0v2.94l-.72-.72a.75.75 0 1 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l2-2a.75.75 0 1 0-1.06-1.06l-.72.72v-2.94Z"
  }));
};
SvgFolderDownMajor.displayName = "FolderDownMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/FolderMajor.svg.mjs


var SvgFolderMajor = function SvgFolderMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M5.75 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h8.5c.69 0 1.25-.56 1.25-1.25v-4.5c0-.69-.56-1.25-1.25-1.25h-3.382a1.75 1.75 0 0 1-1.565-.967l-.171-.342a1.25 1.25 0 0 0-1.118-.691h-2.264Zm-2.75 1.25a2.75 2.75 0 0 1 2.75-2.75h2.264a2.75 2.75 0 0 1 2.46 1.52l.17.342a.25.25 0 0 0 .224.138h3.382a2.75 2.75 0 0 1 2.75 2.75v4.5a2.75 2.75 0 0 1-2.75 2.75h-8.5a2.75 2.75 0 0 1-2.75-2.75v-6.5Z"
  }));
};
SvgFolderMajor.displayName = "FolderMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/FolderMinusMajor.svg.mjs


var SvgFolderMinusMajor = function SvgFolderMinusMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M4.5 6.75c0-.69.56-1.25 1.25-1.25h1.514c.473 0 .906.268 1.118.691l.17.342a1.75 1.75 0 0 0 1.566.967h4.132c.69 0 1.25.56 1.25 1.25v.5a.75.75 0 0 0 1.5 0v-.5a2.75 2.75 0 0 0-2.75-2.75h-4.132a.25.25 0 0 1-.224-.138l-.17-.342a2.75 2.75 0 0 0-2.46-1.52h-1.514a2.75 2.75 0 0 0-2.75 2.75v6.5a2.75 2.75 0 0 0 2.75 2.75h7a.75.75 0 0 0 0-1.5h-7c-.69 0-1.25-.56-1.25-1.25v-6.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.75 11.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5Z"
  }));
};
SvgFolderMinusMajor.displayName = "FolderMinusMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/FolderPlusMajor.svg.mjs


var SvgFolderPlusMajor = function SvgFolderPlusMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M5.75 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h5.5a.75.75 0 0 1 0 1.5h-5.5a2.75 2.75 0 0 1-2.75-2.75v-6.5a2.75 2.75 0 0 1 2.75-2.75h1.514a2.75 2.75 0 0 1 2.46 1.52l.17.342a.25.25 0 0 0 .224.138h4.132a2.75 2.75 0 0 1 2.75 2.75v1.5a.75.75 0 0 1-1.5 0v-1.5c0-.69-.56-1.25-1.25-1.25h-4.132a1.75 1.75 0 0 1-1.565-.967l-.171-.342a1.25 1.25 0 0 0-1.118-.691h-1.514Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13 14.5a.75.75 0 0 1 .75-.75h1v-1a.75.75 0 0 1 1.5 0v1h1a.75.75 0 0 1 0 1.5h-1v1a.75.75 0 0 1-1.5 0v-1h-1a.75.75 0 0 1-.75-.75Z"
  }));
};
SvgFolderPlusMajor.displayName = "FolderPlusMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/FolderUpMajor.svg.mjs


var SvgFolderUpMajor = function SvgFolderUpMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M4.5 6.75c0-.69.56-1.25 1.25-1.25h1.514c.473 0 .906.268 1.118.691l.17.342a1.75 1.75 0 0 0 1.566.967h4.132c.69 0 1.25.56 1.25 1.25a.75.75 0 0 0 1.5 0 2.75 2.75 0 0 0-2.75-2.75h-4.132a.25.25 0 0 1-.224-.138l-.17-.342a2.75 2.75 0 0 0-2.46-1.52h-1.514a2.75 2.75 0 0 0-2.75 2.75v6.5a2.75 2.75 0 0 0 2.75 2.75h6a.75.75 0 0 0 0-1.5h-6c-.69 0-1.25-.56-1.25-1.25v-6.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M16.75 13.31v2.94a.75.75 0 0 1-1.5 0v-2.94l-.72.72a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-.72-.72Z"
  }));
};
SvgFolderUpMajor.displayName = "FolderUpMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/FollowUpEmailMajor.svg.mjs


var SvgFollowUpEmailMajor = function SvgFollowUpEmailMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M3 7.25a2.75 2.75 0 0 1 2.75-2.75h8.5a2.75 2.75 0 0 1 2.75 2.75v2.5a.75.75 0 0 1-1.5 0v-2.5c0-.69-.56-1.25-1.25-1.25h-8.5c-.69 0-1.25.56-1.25 1.25v5.5c0 .69.56 1.25 1.25 1.25h4.25a.75.75 0 0 1 0 1.5h-4.25a2.75 2.75 0 0 1-2.75-2.75v-5.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11.75 14.25a.75.75 0 0 1 .75-.75h2.94l-.72-.72a.75.75 0 1 1 1.06-1.06l2 2a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l.72-.72h-2.94a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.567 7.57a.75.75 0 0 0-.634 1.36l3.538 1.651a1.25 1.25 0 0 0 1.058 0l3.538-1.651a.75.75 0 0 0-.634-1.36l-3.433 1.603-3.433-1.602Z"
  }));
};
SvgFollowUpEmailMajor.displayName = "FollowUpEmailMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/FoodMajor.svg.mjs


var SvgFoodMajor = function SvgFoodMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M7.25 4a.75.75 0 0 1 .75-.75c.592 0 1.1.11 1.52.344.429.238.716.576.9.946.142.282.223.585.269.877l.478-.192a4.07 4.07 0 0 1 5.583 3.78v.852c0 1.511-.288 3.008-.85 4.411l-.143.36a3.377 3.377 0 0 1-4.646 1.766l-.186-.093a2.069 2.069 0 0 0-1.85 0l-.186.093a3.377 3.377 0 0 1-4.646-1.767l-.121-.303a12.187 12.187 0 0 1-.872-4.527v-1.135a3.75 3.75 0 0 1 4.936-3.557l.976.325a1.214 1.214 0 0 0-.083-.22.676.676 0 0 0-.287-.304c-.142-.08-.384-.156-.792-.156a.75.75 0 0 1-.75-.75Zm.462 2.528a2.25 2.25 0 0 0-2.962 2.134v1.135c0 1.36.26 2.707.764 3.97l.122.303a1.877 1.877 0 0 0 2.582.982l.186-.093a3.568 3.568 0 0 1 3.192 0l.185.093a1.877 1.877 0 0 0 2.583-.982l.144-.359c.49-1.226.742-2.534.742-3.854v-.852a2.57 2.57 0 0 0-3.525-2.387l-1.447.578a.75.75 0 0 1-.515.016l-2.051-.684Z"
  }));
};
SvgFoodMajor.displayName = "FoodMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/FooterMajor.svg.mjs


var SvgFooterMajor = function SvgFooterMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M3.5 5.25c0-.966.784-1.75 1.75-1.75h.5a.75.75 0 0 1 0 1.5h-.5a.25.25 0 0 0-.25.25v.5a.75.75 0 0 1-1.5 0v-.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M3.5 13.25c0-.966.784-1.75 1.75-1.75h9.5c.966 0 1.75.784 1.75 1.75v1.5a1.75 1.75 0 0 1-1.75 1.75h-9.5a1.75 1.75 0 0 1-1.75-1.75v-1.5Zm1.75-.25a.25.25 0 0 0-.25.25v1.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25v-1.5a.25.25 0 0 0-.25-.25h-9.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M3.5 8.75c0 .966.784 1.75 1.75 1.75h.5a.75.75 0 0 0 0-1.5h-.5a.25.25 0 0 1-.25-.25v-.5a.75.75 0 0 0-1.5 0v.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14.75 3.5c.966 0 1.75.784 1.75 1.75v.5a.75.75 0 0 1-1.5 0v-.5a.25.25 0 0 0-.25-.25h-.5a.75.75 0 0 1 0-1.5h.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14.75 10.5a1.75 1.75 0 0 0 1.75-1.75v-.5a.75.75 0 0 0-1.5 0v.5a.25.25 0 0 1-.25.25h-.5a.75.75 0 0 0 0 1.5h.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11.75 4.25a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11 10.5a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 0 0 1.5h2Z"
  }));
};
SvgFooterMajor.displayName = "FooterMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/FormsMajor.svg.mjs


var SvgFormsMajor = function SvgFormsMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14 4.5a.75.75 0 0 1 0 1.5c-.906 0-1.412.17-1.665.296-.032.016-.06.031-.085.046v7.343a.86.86 0 0 0 .068.034c.257.12.77.281 1.682.281a.75.75 0 0 1 0 1.5c-1.088 0-1.825-.191-2.318-.422a2.972 2.972 0 0 1-.182-.093 2.972 2.972 0 0 1-.182.093c-.493.23-1.23.422-2.318.422a.75.75 0 0 1 0-1.5c.912 0 1.425-.16 1.682-.28l.068-.035v-7.343a1.447 1.447 0 0 0-.085-.046c-.253-.127-.76-.296-1.665-.296a.75.75 0 0 1 0-1.5c1.094 0 1.838.205 2.335.454.059.03.114.06.165.089.051-.03.106-.06.165-.089.497-.248 1.24-.454 2.335-.454Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M4.5 9.25c0-.69.56-1.25 1.25-1.25h3.25a.75.75 0 0 0 0-1.5h-3.25a2.75 2.75 0 0 0-2.75 2.75v1.5a2.75 2.75 0 0 0 2.75 2.75h3.25a.75.75 0 0 0 0-1.5h-3.25c-.69 0-1.25-.56-1.25-1.25v-1.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14.125 6.5a.75.75 0 0 0 0 1.5h.125c.69 0 1.25.56 1.25 1.25v1.5c0 .69-.56 1.25-1.25 1.25h-.125a.75.75 0 0 0 0 1.5h.125a2.75 2.75 0 0 0 2.75-2.75v-1.5a2.75 2.75 0 0 0-2.75-2.75h-.125Z"
  }));
};
SvgFormsMajor.displayName = "FormsMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/FraudProtectMajor.svg.mjs


var SvgFraudProtectMajor = function SvgFraudProtectMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11.093 2.915a1.75 1.75 0 0 0-2.186 0l-.317.253a15.25 15.25 0 0 1-3.217 1.976l-.847.384a1.71 1.71 0 0 0-1.01 1.628c.166 3.719 1.692 6.229 3.191 7.805a11.209 11.209 0 0 0 2.035 1.692 8.9 8.9 0 0 0 .874.496l.058.027.017.008.006.003h.002s.002.001.301-.686l-.299.687a.75.75 0 0 0 .599-1.375l-.005-.002a2.582 2.582 0 0 1-.18-.09 7.378 7.378 0 0 1-.56-.329 9.71 9.71 0 0 1-1.76-1.464c-1.29-1.357-2.633-3.536-2.781-6.84-.003-.067.037-.15.133-.194l.846-.385a16.75 16.75 0 0 0 3.534-2.17l.317-.253a.25.25 0 0 1 .312 0l.354.283a16.75 16.75 0 0 0 3.445 2.129l.9.415c.095.045.134.128.131.194a12.111 12.111 0 0 1-.203 1.752.75.75 0 1 0 1.473.284c.118-.617.198-1.272.229-1.97a1.709 1.709 0 0 0-1.002-1.621l-.9-.416a15.249 15.249 0 0 1-3.136-1.938l-.354-.283Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M15.5 12.25a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14.018 14.75h-.036a2.768 2.768 0 0 0-2.454 1.488.692.692 0 0 0 .614 1.012h3.716c.52 0 .854-.551.614-1.012a2.768 2.768 0 0 0-2.455-1.487Z"
  }));
};
SvgFraudProtectMajor.displayName = "FraudProtectMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/FraudProtectMinor.svg.mjs


var SvgFraudProtectMinor = function SvgFraudProtectMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M8.907 2.915a1.75 1.75 0 0 1 2.186 0l.354.283a15.27 15.27 0 0 0 3.136 1.938l.9.416a1.709 1.709 0 0 1 1.002 1.622 13.42 13.42 0 0 1-.23 1.969.75.75 0 0 1-1.472-.284c.105-.544.176-1.127.204-1.752a.213.213 0 0 0-.132-.194l-.9-.415a16.75 16.75 0 0 1-3.445-2.129l-.354-.283a.25.25 0 0 0-.312 0l-.317.254a16.75 16.75 0 0 1-3.534 2.17l-.846.384c-.096.043-.136.127-.133.195.148 3.303 1.49 5.482 2.78 6.839a9.71 9.71 0 0 0 1.76 1.464 7.378 7.378 0 0 0 .741.42l.005.001a.75.75 0 0 1-.599 1.375l.299-.687-.299.687h-.002l-.002-.001-.006-.003-.017-.008a5.893 5.893 0 0 1-.256-.127 8.9 8.9 0 0 1-.676-.396 11.209 11.209 0 0 1-2.035-1.692c-1.499-1.576-3.025-4.086-3.192-7.805a1.71 1.71 0 0 1 1.011-1.628l.847-.384a15.25 15.25 0 0 0 3.217-1.976l.317-.253Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14.018 14.75h-.036a2.768 2.768 0 0 0-2.454 1.488.692.692 0 0 0 .614 1.012h3.716c.52 0 .854-.551.614-1.012a2.768 2.768 0 0 0-2.455-1.487Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14 13.75a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
  }));
};
SvgFraudProtectMinor.displayName = "FraudProtectMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/FraudProtectPendingMajor.svg.mjs


var SvgFraudProtectPendingMajor = function SvgFraudProtectPendingMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14.25 11.75a.75.75 0 0 0-1.5 0v1.647a1 1 0 0 0 .293.707l.677.677a.75.75 0 1 0 1.06-1.06l-.53-.531v-1.44Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M11.093 2.915a1.75 1.75 0 0 0-2.186 0l-.317.253a15.25 15.25 0 0 1-3.217 1.976l-.847.384a1.71 1.71 0 0 0-1.01 1.628c.28 6.25 4.38 9.048 5.732 9.802.443.247.97.26 1.423.042a4.5 4.5 0 1 0 5.433-7.17c.202-.806.338-1.69.381-2.655a1.71 1.71 0 0 0-1.002-1.623l-.9-.416a15.249 15.249 0 0 1-3.136-1.938l-.354-.283Zm-2.093 10.585c0 .626.128 1.221.358 1.762-1.472-1.004-4.132-3.455-4.344-8.173-.003-.068.037-.152.133-.195l.846-.385a16.75 16.75 0 0 0 3.534-2.17l.317-.253a.25.25 0 0 1 .312 0l.354.283a16.749 16.749 0 0 0 3.445 2.129l.9.415a.213.213 0 0 1 .131.195 11.927 11.927 0 0 1-.268 2.06 4.504 4.504 0 0 0-5.718 4.333Zm4.5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
  }));
};
SvgFraudProtectPendingMajor.displayName = "FraudProtectPendingMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/FraudProtectPendingMinor.svg.mjs


var SvgFraudProtectPendingMinor = function SvgFraudProtectPendingMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14.25 11.75a.75.75 0 0 0-1.5 0v1.647a1 1 0 0 0 .293.707l.677.677a.75.75 0 1 0 1.06-1.06l-.53-.531v-1.44Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M11.093 2.915a1.75 1.75 0 0 0-2.186 0l-.317.253a15.25 15.25 0 0 1-3.217 1.976l-.847.384a1.71 1.71 0 0 0-1.01 1.628c.28 6.25 4.38 9.048 5.732 9.802.443.247.97.26 1.423.042a4.5 4.5 0 1 0 5.433-7.17c.202-.806.338-1.69.381-2.655a1.71 1.71 0 0 0-1.002-1.623l-.9-.416a15.249 15.249 0 0 1-3.136-1.938l-.354-.283Zm-2.093 10.585c0 .626.128 1.221.358 1.762-1.472-1.004-4.132-3.455-4.344-8.173-.003-.068.037-.152.133-.195l.846-.385a16.75 16.75 0 0 0 3.534-2.17l.317-.253a.25.25 0 0 1 .312 0l.354.283a16.75 16.75 0 0 0 3.445 2.129l.9.415a.213.213 0 0 1 .131.195 11.927 11.927 0 0 1-.268 2.06 4.504 4.504 0 0 0-5.718 4.333Zm4.5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
  }));
};
SvgFraudProtectPendingMinor.displayName = "FraudProtectPendingMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/FraudProtectUnprotectedMajor.svg.mjs


var SvgFraudProtectUnprotectedMajor = function SvgFraudProtectUnprotectedMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.506 3.973a15.26 15.26 0 0 1-1.059-.775l-.354-.283a1.75 1.75 0 0 0-2.186 0l-.317.253a15.25 15.25 0 0 1-3.217 1.976l-.847.384a1.71 1.71 0 0 0-1.01 1.628c.083 1.865.507 3.422 1.096 4.71l1.146-1.145c-.401-1.025-.681-2.228-.744-3.632-.003-.068.037-.152.133-.195l.846-.385a16.75 16.75 0 0 0 3.534-2.17l.317-.253a.25.25 0 0 1 .312 0l.354.283c.298.238.603.466.916.683l1.08-1.08Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M4.553 14.046a.75.75 0 0 0 1.066 1.056l.64-.64a11.092 11.092 0 0 0 2.99 2.496 1.533 1.533 0 0 0 1.502 0c1.352-.753 5.454-3.55 5.734-9.783a1.71 1.71 0 0 0-1.002-1.623l-.215-.1.604-.603a.75.75 0 1 0-1.06-1.06l-10.254 10.252a2.489 2.489 0 0 1-.005.005Zm5.426 1.602a9.544 9.544 0 0 1-2.655-2.251l6.814-6.814.717.33a.213.213 0 0 1 .131.195c-.246 5.489-3.827 7.906-4.965 8.54a.043.043 0 0 1-.02.006c-.005 0-.012 0-.022-.006Z"
  }));
};
SvgFraudProtectUnprotectedMajor.displayName = "FraudProtectUnprotectedMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/FraudProtectUnprotectedMinor.svg.mjs


var SvgFraudProtectUnprotectedMinor = function SvgFraudProtectUnprotectedMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.506 3.973a15.26 15.26 0 0 1-1.059-.775l-.354-.283a1.75 1.75 0 0 0-2.186 0l-.317.253a15.25 15.25 0 0 1-3.217 1.976l-.847.384a1.71 1.71 0 0 0-1.01 1.628c.083 1.865.507 3.422 1.096 4.71l1.146-1.145c-.401-1.025-.681-2.228-.744-3.632-.003-.068.037-.152.133-.195l.846-.385a16.75 16.75 0 0 0 3.534-2.17l.317-.253a.25.25 0 0 1 .312 0l.354.283c.298.238.603.466.916.683l1.08-1.08Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M4.553 14.046a.75.75 0 0 0 1.066 1.056l.64-.64a11.092 11.092 0 0 0 2.99 2.496 1.533 1.533 0 0 0 1.502 0c1.352-.753 5.454-3.55 5.734-9.783a1.71 1.71 0 0 0-1.002-1.623l-.215-.1.604-.603a.75.75 0 1 0-1.06-1.06l-10.254 10.252a2.489 2.489 0 0 1-.005.005Zm5.426 1.602a9.544 9.544 0 0 1-2.655-2.251l6.814-6.814.717.33a.213.213 0 0 1 .131.195c-.246 5.489-3.827 7.906-4.965 8.54a.043.043 0 0 1-.02.006c-.005 0-.012 0-.022-.006Z"
  }));
};
SvgFraudProtectUnprotectedMinor.displayName = "FraudProtectUnprotectedMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/FulfillmentFulfilledMajor.svg.mjs


var SvgFulfillmentFulfilledMajor = function SvgFulfillmentFulfilledMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M5 8v6.75c0 .138.112.25.25.25h4a.75.75 0 0 1 0 1.5h-4a1.75 1.75 0 0 1-1.75-1.75v-6.863c0-.57.177-1.125.506-1.59l1.309-1.848a2.25 2.25 0 0 1 1.836-.949h5.796a2.25 2.25 0 0 1 1.872 1.002l1.22 1.828c.3.452.461.983.461 1.526v3.644a.75.75 0 0 1-1.5 0v-3.5h-10Zm1.539-2.684a.75.75 0 0 1 .612-.316h2.099v1.5h-3.55l.839-1.184Zm7.81 1.184-.778-1.166a.75.75 0 0 0-.624-.334h-2.197v1.5h3.599Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M6 10a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-3Zm1.5.5v2h3v-2h-3Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M17.78 13.22a.75.75 0 0 1 0 1.06l-3.5 3.5a.75.75 0 0 1-1.06 0l-1.75-1.75a.75.75 0 1 1 1.06-1.06l1.22 1.22 2.97-2.97a.75.75 0 0 1 1.06 0Z"
  }));
};
SvgFulfillmentFulfilledMajor.displayName = "FulfillmentFulfilledMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/FulfillmentOnHoldMajor.svg.mjs


var SvgFulfillmentOnHoldMajor = function SvgFulfillmentOnHoldMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M15 8v2.75a.75.75 0 0 0 1.5 0v-2.894a2.75 2.75 0 0 0-.462-1.526l-1.219-1.828a2.25 2.25 0 0 0-1.872-1.002h-5.796a2.25 2.25 0 0 0-1.836.95l-1.31 1.847a2.75 2.75 0 0 0-.505 1.59v6.863c0 .966.784 1.75 1.75 1.75h6a.75.75 0 0 0 0-1.5h-6a.25.25 0 0 1-.25-.25v-6.75h10Zm-7.85-3a.75.75 0 0 0-.611.316l-.839 1.184h3.55v-1.5h-2.1Zm3.6 1.5h3.599l-.778-1.166a.75.75 0 0 0-.624-.334h-2.197v1.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M7 9a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-4Zm.5 3.5v-2h3v2h-3Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M16.75 12.5a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14.5 13.25a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0v-4Z"
  }));
};
SvgFulfillmentOnHoldMajor.displayName = "FulfillmentOnHoldMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/GamesConsoleMajor.svg.mjs


var SvgGamesConsoleMajor = function SvgGamesConsoleMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13 8.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13.75 11.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M7.25 7.25a.75.75 0 0 1 .75.75v.5h.5a.75.75 0 0 1 0 1.5h-.5v.5a.75.75 0 0 1-1.5 0v-.5h-.5a.75.75 0 0 1 0-1.5h.5v-.5a.75.75 0 0 1 .75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M12 3.75c-.69 0-1.25.56-1.25 1.25h1.5a4.75 4.75 0 0 1 4.75 4.75v3.343a2.907 2.907 0 0 1-5.685.855l-.332-1.077a.17.17 0 0 0-.163-.121h-1.64a.17.17 0 0 0-.163.12l-.332 1.078a2.907 2.907 0 0 1-5.685-.855v-3.343a4.75 4.75 0 0 1 4.75-4.75h1.5a2.75 2.75 0 0 1 2.75-2.75v1.5Zm-4.25 2.75a3.25 3.25 0 0 0-3.25 3.25v3.343a1.407 1.407 0 0 0 2.752.414l.331-1.078a1.67 1.67 0 0 1 1.597-1.179h1.64a1.67 1.67 0 0 1 1.597 1.18l.331 1.077a1.407 1.407 0 0 0 2.752-.414v-3.343a3.25 3.25 0 0 0-3.25-3.25h-4.5Z"
  }));
};
SvgGamesConsoleMajor.displayName = "GamesConsoleMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/GaugeMajor.svg.mjs


var SvgGaugeMajor = function SvgGaugeMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M4.5 11.5a5.5 5.5 0 0 1 7.434-5.15l.456-.981a1.5 1.5 0 0 1 .234-.36 7 7 0 0 0-8.766 9.852.75.75 0 0 0 1.315-.722 5.472 5.472 0 0 1-.673-2.639Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "m15.084 6.689-.695 1.496a5.475 5.475 0 0 1 1.111 3.315c0 .958-.244 1.857-.673 2.64a.75.75 0 1 0 1.315.72 6.972 6.972 0 0 0 .858-3.36 6.976 6.976 0 0 0-1.916-4.811Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M10 16a2 2 0 0 0 1.485-3.34l2.945-6.344a.75.75 0 1 0-1.36-.632l-2.935 6.32a2 2 0 1 0-.135 3.995Zm0-1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
  }));
};
SvgGaugeMajor.displayName = "GaugeMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/GaugeMinor.svg.mjs


var SvgGaugeMinor = function SvgGaugeMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M4.5 11.5a5.5 5.5 0 0 1 7.434-5.15l.456-.981a1.5 1.5 0 0 1 .234-.36 7 7 0 0 0-8.766 9.852.75.75 0 0 0 1.315-.722 5.472 5.472 0 0 1-.673-2.639Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "m15.084 6.689-.695 1.496a5.475 5.475 0 0 1 1.111 3.315c0 .958-.244 1.857-.673 2.64a.75.75 0 1 0 1.315.72 6.972 6.972 0 0 0 .858-3.36 6.976 6.976 0 0 0-1.916-4.811Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M10 16a2 2 0 0 0 1.485-3.34l2.945-6.344a.75.75 0 1 0-1.36-.632l-2.935 6.32a2 2 0 1 0-.135 3.995Zm0-1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
  }));
};
SvgGaugeMinor.displayName = "GaugeMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/GiftCardFilledMinor.svg.mjs


var SvgGiftCardFilledMinor = function SvgGiftCardFilledMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10.25 9.125h.75a.375.375 0 1 0-.3-.6l-.45.6zm-3.25 0h.75l-.45-.6a.375.375 0 1 0-.3.6z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M8.375 4.5h-3.875a2 2 0 0 0-2 2v2.625h1.5a.625.625 0 1 1 0 1.25h-1.5v3.125a2 2 0 0 0 2 2h3.875v-1.75a.625.625 0 1 1 1.25 0v1.75h5.875a2 2 0 0 0 2-2v-3.125h-3.5a.625.625 0 1 1 0-1.25h3.5v-2.625a2 2 0 0 0-2-2h-5.875v1.25a.625.625 0 1 1-1.25 0v-1.25zm1.325 3.275a1.625 1.625 0 1 1 1.3 2.6h-.79c.032.038.065.076.1.114.503.563 1.127 1.05 1.778 1.142a.625.625 0 0 1-.176 1.238c-1.1-.157-1.975-.921-2.534-1.546a7.831 7.831 0 0 1-.378-.457c-.11.145-.237.3-.378.457-.56.625-1.435 1.389-2.534 1.546a.625.625 0 1 1-.176-1.238c.65-.093 1.275-.579 1.778-1.142.035-.038.068-.076.1-.114h-.79a1.625 1.625 0 1 1 1.3-2.6v-.002l.608.813.092.122.092-.122.607-.813.001.002z"
  }));
};
SvgGiftCardFilledMinor.displayName = "GiftCardFilledMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/GiftCardMajor.svg.mjs


var SvgGiftCardMajor = function SvgGiftCardMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M10.1 7.45a1.75 1.75 0 1 1 1.74 2.767c.17.136.335.277.489.42.32.294.653.65.842 1.028a.75.75 0 1 1-1.342.67c-.062-.123-.227-.329-.517-.596a10.704 10.704 0 0 0-.94-.757 19.415 19.415 0 0 0-.872-.596c-.233.15-.546.359-.871.596-.332.24-.665.503-.94.757-.29.268-.457.473-.518.596a.75.75 0 1 1-1.342-.67c.189-.377.523-.734.842-1.029.155-.142.32-.283.488-.42a1.75 1.75 0 1 1 1.741-2.766l.6.8.6-.8Zm.9 1.3h.5a.25.25 0 1 0-.2-.4l-.3.4Zm-3.5 0h.5l-.3-.4a.25.25 0 1 0-.2.4Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M5.25 4.5a2.75 2.75 0 0 0-2.75 2.75v5.5a2.75 2.75 0 0 0 2.75 2.75h9.5a2.75 2.75 0 0 0 2.75-2.75v-5.5a2.75 2.75 0 0 0-2.75-2.75h-9.5Zm-1.25 2.75c0-.69.56-1.25 1.25-1.25h3.5v.25a.75.75 0 0 0 1.5 0v-.25h4.5c.69 0 1.25.56 1.25 1.25v2h-1.75a.75.75 0 0 0 0 1.5h1.75v2c0 .69-.56 1.25-1.25 1.25h-4.5v-1.5a.75.75 0 0 0-1.5 0v1.5h-3.5c-.69 0-1.25-.56-1.25-1.25v-2h.75a.75.75 0 0 0 0-1.5h-.75v-2Z"
  }));
};
SvgGiftCardMajor.displayName = "GiftCardMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/GiftCardMinor.svg.mjs


var SvgGiftCardMinor = function SvgGiftCardMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M7.125 10.5h.636c-.48.513-1.045.926-1.617 1.008a.75.75 0 0 0 .212 1.485c1.144-.164 2.044-.955 2.61-1.587.102-.114.197-.228.284-.337.087.11.182.223.285.337.565.632 1.465 1.423 2.609 1.586a.75.75 0 0 0 .212-1.485c-.572-.081-1.137-.494-1.617-1.007h.636c1.036 0 1.875-.84 1.875-1.875a1.883 1.883 0 0 0-1.885-1.875 1.9 1.9 0 0 0-1.577.842l-.538.806-.538-.806a1.9 1.9 0 0 0-1.577-.842 1.883 1.883 0 0 0-1.885 1.875c0 1.036.84 1.875 1.875 1.875Zm-.375-1.875c0-.199.17-.375.385-.375a.4.4 0 0 1 .33.174l.384.576h-.724a.375.375 0 0 1-.375-.375Zm4.625.375h-.724l.385-.576a.4.4 0 0 1 .33-.174c.215 0 .384.176.384.375a.375.375 0 0 1-.375.375Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M17.5 6v8a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2Zm-7.5-.5h5.5a.5.5 0 0 1 .5.5v3h-1.75a.75.75 0 0 0 0 1.5h1.75v3.5a.5.5 0 0 1-.5.5h-5.5v-.75a.75.75 0 0 0-1.5 0v.75h-4a.5.5 0 0 1-.5-.5v-3.5h.25a.75.75 0 0 0 0-1.5h-.25v-3a.5.5 0 0 1 .5-.5h4v.25a.75.75 0 0 0 1.5 0v-.25Z"
  }));
};
SvgGiftCardMinor.displayName = "GiftCardMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/GlobeMajor.svg.mjs


var SvgGlobeMajor = function SvgGlobeMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M10 17.25a7.25 7.25 0 1 0 .006-14.5 7.25 7.25 0 0 0-.009 14.5h.003Zm.001-1.5c.412 0 .916-.329 1.35-1.429a8.03 8.03 0 0 0 .385-1.36 36.907 36.907 0 0 1-3.472 0c.101.51.23.967.386 1.36.433 1.102.938 1.429 1.35 1.429h.001Zm0-4.25c.675 0 1.327-.018 1.942-.052a18.268 18.268 0 0 0 .028-2.5c-.63.035-1.291.052-1.971.052-.68 0-1.34-.017-1.97-.051a18.314 18.314 0 0 0 .027 2.499c.615.034 1.267.052 1.943.052Zm-1.812-4.045c.11-.678.265-1.279.46-1.776.434-1.102.94-1.429 1.351-1.429.412 0 .917.327 1.35 1.429.196.497.352 1.098.461 1.776a35.02 35.02 0 0 1-1.811.045 34.96 34.96 0 0 1-1.811-.045Zm5.277 1.373a19.758 19.758 0 0 1-.01 2.491c.108-.012.214-.026.318-.04.79-.106 1.432-.245 1.91-.403a5.796 5.796 0 0 0-.138-2.401c-.5.125-1.06.225-1.657.302-.139.018-.28.035-.423.05Zm1.485-1.754a14.15 14.15 0 0 1-1.256.216c-.125.016-.253.031-.384.046-.125-.816-.312-1.565-.565-2.207a6.615 6.615 0 0 0-.097-.234 5.776 5.776 0 0 1 2.302 2.18Zm-8.262.262a20.09 20.09 0 0 1-.384-.046c-.47-.061-.89-.134-1.256-.216a5.777 5.777 0 0 1 2.302-2.179 6.594 6.594 0 0 0-.097.234c-.253.642-.44 1.39-.565 2.207Zm-2.235 1.139c.501.125 1.061.225 1.658.302.138.018.279.035.422.05a19.775 19.775 0 0 0 .01 2.492 19.253 19.253 0 0 1-.318-.04c-.79-.106-1.432-.245-1.91-.403a5.797 5.797 0 0 1 .138-2.401Zm8.292 6.396a10.07 10.07 0 0 0 .536-2.024c.237-.024.469-.051.692-.081.41-.055.804-.121 1.173-.2a5.775 5.775 0 0 1-2.498 2.539c.034-.077.066-.155.097-.234Zm-5.395.234a5.775 5.775 0 0 1-2.498-2.538c.369.078.762.144 1.173.199.224.03.455.057.692.081.124.746.302 1.43.536 2.024.031.079.063.157.097.234Z"
  }));
};
SvgGlobeMajor.displayName = "GlobeMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/GlobeMinor.svg.mjs


var SvgGlobeMinor = function SvgGlobeMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M10 17.25a7.25 7.25 0 1 0 .006-14.5 7.25 7.25 0 0 0-.009 14.5h.003Zm.001-1.5c.412 0 .916-.329 1.35-1.429a8.03 8.03 0 0 0 .385-1.36 36.907 36.907 0 0 1-3.472 0c.101.51.23.967.386 1.36.433 1.102.938 1.429 1.35 1.429h.001Zm0-4.25c.675 0 1.327-.018 1.942-.052a18.268 18.268 0 0 0 .028-2.5c-.63.035-1.291.052-1.971.052-.68 0-1.34-.017-1.97-.051a18.314 18.314 0 0 0 .027 2.499c.615.034 1.267.052 1.943.052Zm-1.812-4.045c.11-.678.265-1.279.46-1.776.434-1.102.94-1.429 1.351-1.429.412 0 .917.327 1.35 1.429.196.497.352 1.098.461 1.776a35.02 35.02 0 0 1-1.811.045 34.96 34.96 0 0 1-1.811-.045Zm5.277 1.373a19.758 19.758 0 0 1-.01 2.491c.108-.012.214-.026.318-.04.79-.106 1.432-.245 1.91-.403a5.796 5.796 0 0 0-.138-2.401c-.5.125-1.06.225-1.657.302-.139.018-.28.035-.423.05Zm1.485-1.754a14.15 14.15 0 0 1-1.256.216c-.125.016-.253.031-.384.046-.125-.816-.312-1.565-.565-2.207a6.615 6.615 0 0 0-.097-.234 5.776 5.776 0 0 1 2.302 2.18Zm-8.262.262a20.09 20.09 0 0 1-.384-.046c-.47-.061-.89-.134-1.256-.216a5.777 5.777 0 0 1 2.302-2.179 6.594 6.594 0 0 0-.097.234c-.253.642-.44 1.39-.565 2.207Zm-2.235 1.139c.501.125 1.061.225 1.658.302.138.018.279.035.422.05a19.775 19.775 0 0 0 .01 2.492 19.253 19.253 0 0 1-.318-.04c-.79-.106-1.432-.245-1.91-.403a5.797 5.797 0 0 1 .138-2.401Zm8.292 6.396a10.07 10.07 0 0 0 .536-2.024c.237-.024.469-.051.692-.081.41-.055.804-.121 1.173-.2a5.775 5.775 0 0 1-2.498 2.539c.034-.077.066-.155.097-.234Zm-5.395.234a5.775 5.775 0 0 1-2.498-2.538c.369.078.762.144 1.173.199.224.03.455.057.692.081.124.746.302 1.43.536 2.024.031.079.063.157.097.234Z"
  }));
};
SvgGlobeMinor.displayName = "GlobeMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/GrammarMajor.svg.mjs


var SvgGrammarMajor = function SvgGrammarMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M7.695 3.717a.75.75 0 0 0-1.39 0l-2.75 6.75a.75.75 0 0 0 1.39.566l.624-1.533h2.681c.06 0 .117-.007.173-.02l.632 1.553a.75.75 0 1 0 1.39-.566l-2.75-6.75Zm-.695 2.27.82 2.013h-1.64l.82-2.012Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M3.5 13.25a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5h-10a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M3.5 15.75a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M13.5 5.5c.574 0 1.11.161 1.566.44a.75.75 0 0 1 1.434.31v4.5a.75.75 0 0 1-1.434.31 3 3 0 1 1-1.566-5.56Zm1.5 3a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M17.78 14.28a.75.75 0 1 0-1.06-1.06l-2.97 2.97-1.22-1.22a.75.75 0 1 0-1.06 1.06l1.75 1.75a.75.75 0 0 0 1.06 0l3.5-3.5Z"
  }));
};
SvgGrammarMajor.displayName = "GrammarMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/HashtagMajor.svg.mjs


var SvgHashtagMajor = function SvgHashtagMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M14.239 4.379a.75.75 0 1 0-1.478-.257l-.457 2.628h-3.478l.413-2.371a.75.75 0 0 0-1.478-.257l-.457 2.628h-2.804a.75.75 0 0 0 0 1.5h2.543l-.609 3.5h-2.434a.75.75 0 0 0 0 1.5h2.174l-.413 2.372a.75.75 0 1 0 1.478.257l.457-2.629h3.478l-.413 2.372a.75.75 0 1 0 1.478.257l.457-2.629h2.804a.75.75 0 0 0 0-1.5h-2.543l.609-3.5h2.434a.75.75 0 0 0 0-1.5h-2.174l.413-2.371Zm-6.282 7.371h3.477l.61-3.5h-3.478l-.61 3.5Z"
  }));
};
SvgHashtagMajor.displayName = "HashtagMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/HashtagMinor.svg.mjs


var SvgHashtagMinor = function SvgHashtagMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M14.239 4.379a.75.75 0 1 0-1.478-.257l-.457 2.628h-3.478l.413-2.371a.75.75 0 0 0-1.478-.257l-.457 2.628h-2.804a.75.75 0 0 0 0 1.5h2.543l-.609 3.5h-2.434a.75.75 0 0 0 0 1.5h2.174l-.413 2.372a.75.75 0 1 0 1.478.257l.457-2.629h3.478l-.413 2.372a.75.75 0 1 0 1.478.257l.457-2.629h2.804a.75.75 0 0 0 0-1.5h-2.543l.609-3.5h2.434a.75.75 0 0 0 0-1.5h-2.174l.413-2.371Zm-6.282 7.371h3.477l.61-3.5h-3.478l-.61 3.5Z"
  }));
};
SvgHashtagMinor.displayName = "HashtagMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/HeaderMajor.svg.mjs


var SvgHeaderMajor = function SvgHeaderMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M3.5 5.25c0-.966.784-1.75 1.75-1.75h9.5c.966 0 1.75.784 1.75 1.75v1.5a1.75 1.75 0 0 1-1.75 1.75h-9.5a1.75 1.75 0 0 1-1.75-1.75v-1.5Zm1.75-.25a.25.25 0 0 0-.25.25v1.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25v-1.5a.25.25 0 0 0-.25-.25h-9.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M3.5 11.25c0-.966.784-1.75 1.75-1.75h.5a.75.75 0 0 1 0 1.5h-.5a.25.25 0 0 0-.25.25v.5a.75.75 0 0 1-1.5 0v-.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M3.5 14.75c0 .966.784 1.75 1.75 1.75h.5a.75.75 0 0 0 0-1.5h-.5a.25.25 0 0 1-.25-.25v-.5a.75.75 0 0 0-1.5 0v.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14.75 9.5c.966 0 1.75.784 1.75 1.75v.5a.75.75 0 0 1-1.5 0v-.5a.25.25 0 0 0-.25-.25h-.5a.75.75 0 0 1 0-1.5h.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14.75 16.5a1.75 1.75 0 0 0 1.75-1.75v-.5a.75.75 0 0 0-1.5 0v.5a.25.25 0 0 1-.25.25h-.5a.75.75 0 0 0 0 1.5h.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11.75 10.25a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11 16.5a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 0 0 1.5h2Z"
  }));
};
SvgHeaderMajor.displayName = "HeaderMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/HeartMajor.svg.mjs


var SvgHeartMajor = function SvgHeartMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M8.469 5.785c-.966-1.047-2.505-1.047-3.47 0-.998 1.081-.998 2.857 0 3.939l5.001 5.42 5.002-5.42c.997-1.082.997-2.858 0-3.939-.966-1.047-2.505-1.047-3.47 0l-.98 1.062a.75.75 0 0 1-1.103 0l-.98-1.062Zm-4.573-1.017c1.56-1.69 4.115-1.69 5.675 0l.429.464.429-.464c1.56-1.69 4.115-1.69 5.675 0 1.528 1.656 1.528 4.317 0 5.973l-5.185 5.62a1.25 1.25 0 0 1-1.838 0l-5.185-5.62c-1.528-1.656-1.528-4.317 0-5.973Z"
  }));
};
SvgHeartMajor.displayName = "HeartMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/HideKeyboardMajor.svg.mjs


var SvgHideKeyboardMajor = function SvgHideKeyboardMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "m4.24 12.487-1.043 1.044a.81.81 0 0 0-.022.023 2.74 2.74 0 0 1-.675-1.804v-3.5a2.75 2.75 0 0 1 2.75-2.75h5.978l-1.5 1.5h-4.478c-.69 0-1.25.56-1.25 1.25v3.5c0 .276.09.53.24.737Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "m8.728 8-1.127 1.127a.75.75 0 0 1 .649-1.127h.478Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.5 11.25a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14.25 8a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M14.598 4.25a.276.276 0 0 1-.006.007l-10.335 10.335-.006.006a.75.75 0 0 0 1.066 1.055l1.154-1.153h8.279a2.75 2.75 0 0 0 2.75-2.75v-3.5a2.751 2.751 0 0 0-2.105-2.674l.258-.259a.75.75 0 0 0-1.055-1.066Zm.152 8.75h-6.78l1-1h2.28a.75.75 0 0 0 0-1.5h-.78l1-1h.28a.75.75 0 0 0 .71-.99l1.51-1.51h.78c.69 0 1.25.56 1.25 1.25v3.5c0 .69-.56 1.25-1.25 1.25Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M5.25 8a.75.75 0 1 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5Z"
  }));
};
SvgHideKeyboardMajor.displayName = "HideKeyboardMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/HideMinor.svg.mjs


var SvgHideMinor = function SvgHideMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11.977 4.751a7.598 7.598 0 0 0-1.977-.251c-2.444 0-4.196 1.045-5.325 2.233a7.188 7.188 0 0 0-1.243 1.773c-.26.532-.432 1.076-.432 1.494 0 .418.171.962.432 1.493.172.354.4.734.687 1.116l1.074-1.074a5.388 5.388 0 0 1-.414-.7c-.221-.453-.279-.753-.279-.835 0-.082.058-.382.279-.835a5.71 5.71 0 0 1 .983-1.398c.89-.937 2.264-1.767 4.238-1.767.24 0 .471.012.693.036l1.284-1.285Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M4.25 14.6a.75.75 0 0 0 1.067 1.053l1.062-1.061c.975.543 2.177.908 3.621.908 2.45 0 4.142-1.05 5.24-2.242 1.078-1.17 1.588-2.476 1.738-3.076a.749.749 0 0 0 0-.364c-.15-.6-.66-1.906-1.738-3.076a7.245 7.245 0 0 0-.51-.502l.923-.923a.75.75 0 0 0-1.053-1.068l-.008.008-10.335 10.336-.008.007Zm5.75-.6c-.978 0-1.809-.204-2.506-.523l1.108-1.109a2.75 2.75 0 0 0 3.766-3.766l1.3-1.299c.169.147.325.3.469.455a6.387 6.387 0 0 1 1.332 2.242 6.387 6.387 0 0 1-1.332 2.242c-.86.933-2.17 1.758-4.137 1.758Zm0-2.75c-.087 0-.172-.01-.254-.026l1.478-1.478a1.25 1.25 0 0 1-1.224 1.504Z"
  }));
};
SvgHideMinor.displayName = "HideMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/HintMajor.svg.mjs


var SvgHintMajor = function SvgHintMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10 2a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 .75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M5.58 4.167a.75.75 0 0 0-1.06 1.06l.353.354a.75.75 0 1 0 1.061-1.06l-.353-.354Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M2 9.75a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M16 9.75a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M15.657 5.404a.75.75 0 0 0-1.06-1.06l-.354.353a.75.75 0 1 0 1.06 1.06l.354-.353Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M6.474 5.998a4.987 4.987 0 0 1 7.052 0c.95.95 1.46 2.103 1.46 3.298 0 1.194-.51 2.348-1.46 3.297a4.45 4.45 0 0 1-.053.053c-.473.455-.723.866-.723 1.24v1.114a2.5 2.5 0 0 1-2.5 2.5h-.5a2.5 2.5 0 0 1-2.5-2.5v-1.114c0-.374-.25-.785-.722-1.24a4.312 4.312 0 0 1-.054-.053c-.95-.95-1.46-2.103-1.46-3.297 0-1.195.51-2.349 1.46-3.298Zm5.992 1.06a3.487 3.487 0 0 0-4.932 0c-.705.707-1.02 1.492-1.02 2.238 0 .745.315 1.53 1.02 2.236l.034.033c.366.353.788.836 1.015 1.435h2.834c.227-.6.649-1.082 1.015-1.435l.034-.033c.705-.706 1.02-1.491 1.02-2.236 0-.746-.315-1.531-1.02-2.237Zm-1.216 7.442h-2.5v.5a1 1 0 0 0 1 1h.5a1 1 0 0 0 1-1v-.5Z"
  }));
};
SvgHintMajor.displayName = "HintMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/HomeFilledMinor.svg.mjs


var SvgHomeFilledMinor = function SvgHomeFilledMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14 16h-2a1 1 0 0 1-1-1v-2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v2.5a1 1 0 0 1-1 1h-2a2 2 0 0 1-2-2v-4.257a3 3 0 0 1 .879-2.122l3.707-3.707a2 2 0 0 1 2.828 0l3.707 3.707a3 3 0 0 1 .879 2.122v4.257a2 2 0 0 1-2 2Z"
  }));
};
SvgHomeFilledMinor.displayName = "HomeFilledMinor";



// EXTERNAL MODULE: ../polaris-icons/dist/icons/HomeMajor.svg.mjs
var HomeMajor_svg = __webpack_require__(3300);
// EXTERNAL MODULE: ../polaris-icons/dist/icons/HomeMinor.svg.mjs
var HomeMinor_svg = __webpack_require__(42697);
;// CONCATENATED MODULE: ../polaris-icons/dist/icons/HorizontalDotsMinor.svg.mjs


var SvgHorizontalDotsMinor = function SvgHorizontalDotsMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M15.5 11.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
  }));
};
SvgHorizontalDotsMinor.displayName = "HorizontalDotsMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/IconsFilledMajor.svg.mjs


var SvgIconsFilledMajor = function SvgIconsFilledMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M15.219 14.708c.47-.314.781-.85.781-1.458v-6.5a1.75 1.75 0 0 0-1.75-1.75h-4.587a3.5 3.5 0 1 0-5.663 3.95v4.3c0 .966.784 1.75 1.75 1.75h2.36l-.508.872a.75.75 0 0 0 .648 1.128h7a.75.75 0 0 0 .648-1.128l-.68-1.164Zm-5.219-8.208a3.5 3.5 0 0 1-4.5 3.355v3.395c0 .138.112.25.25.25h3.236l2.116-3.628a.75.75 0 0 1 1.296 0l2.055 3.524a.248.248 0 0 0 .047-.146v-6.5a.25.25 0 0 0-.25-.25h-4.25Z"
  }));
};
SvgIconsFilledMajor.displayName = "IconsFilledMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/IconsMajor.svg.mjs


var SvgIconsMajor = function SvgIconsMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M8.11 15h-2.36a1.75 1.75 0 0 1-1.75-1.75v-4.3a3.5 3.5 0 1 1 5.663-3.95h4.587c.966 0 1.75.784 1.75 1.75v6.5a1.75 1.75 0 0 1-.781 1.458l.679 1.164a.75.75 0 0 1-.648 1.128h-7a.75.75 0 0 1-.648-1.128l.509-.872Zm-1.61-6.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 1.5a3.5 3.5 0 0 0 3.5-3.5h4.25a.25.25 0 0 1 .25.25v6.5a.248.248 0 0 1-.047.146l-2.055-3.524a.75.75 0 0 0-1.296 0l-2.116 3.628h-3.236a.25.25 0 0 1-.25-.25v-3.395a3.5 3.5 0 0 0 1 .145Zm5.25 1.739 2.194 3.761h-4.388l2.194-3.761Z"
  }));
};
SvgIconsMajor.displayName = "IconsMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/IdentityCardFilledMajor.svg.mjs


var SvgIdentityCardFilledMajor = function SvgIdentityCardFilledMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M8.528 4.25h2.944c.822 0 1.469 0 1.99.043.53.043.974.133 1.377.338a3.5 3.5 0 0 1 1.53 1.53c.205.403.295.847.338 1.378.043.52.043 1.168.043 1.989v.944c0 .822 0 1.469-.043 1.99-.043.53-.133.974-.338 1.377a3.5 3.5 0 0 1-1.53 1.53c-.403.205-.847.295-1.378.338-.52.043-1.168.043-1.989.043h-2.944c-.821 0-1.468 0-1.99-.043-.53-.043-.974-.133-1.377-.339a3.5 3.5 0 0 1-1.53-1.529c-.205-.403-.295-.847-.338-1.378-.043-.52-.043-1.168-.043-1.989v-.944c0-.821 0-1.468.043-1.99.043-.53.133-.974.338-1.377a3.5 3.5 0 0 1 1.53-1.53c.403-.205.847-.295 1.378-.338.52-.043 1.168-.043 1.989-.043Zm4.097 10.244a5.748 5.748 0 0 0-7.478-.665c.169.171.365.315.582.426.197.1.458.17.912.207.462.037 1.057.038 1.909.038h2.9c.46 0 .845 0 1.175-.006Zm-4.125-3.994a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3.25-1.75a.75.75 0 0 1 .75-.75h1.25a.75.75 0 0 1 0 1.5h-1.25a.75.75 0 0 1-.75-.75Zm0 2.25a.75.75 0 0 1 .75-.75h1.25a.75.75 0 0 1 0 1.5h-1.25a.75.75 0 0 1-.75-.75Z"
  }));
};
SvgIdentityCardFilledMajor.displayName = "IdentityCardFilledMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/IdentityCardMajor.svg.mjs


var SvgIdentityCardMajor = function SvgIdentityCardMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11.75 11a.75.75 0 0 1 .75-.75h1.25a.75.75 0 0 1 0 1.5h-1.25a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.5 8a.75.75 0 0 0 0 1.5h1.25a.75.75 0 0 0 0-1.5h-1.25Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M8.5 11.25a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0-1.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M8.518 4h2.964c.813 0 1.469 0 2 .043.546.045 1.026.14 1.47.366a3.75 3.75 0 0 1 1.64 1.639c.226.444.32.924.365 1.47.043.531.043 1.187.043 2v.964c0 .813 0 1.469-.043 2-.045.546-.14 1.026-.366 1.47a3.75 3.75 0 0 1-1.639 1.64c-.444.226-.924.32-1.47.365-.531.043-1.187.043-2 .043h-2.964c-.813 0-1.469 0-2-.043-.546-.045-1.026-.14-1.47-.366a3.75 3.75 0 0 1-1.64-1.638c-.226-.445-.32-.925-.365-1.471-.043-.531-.043-1.187-.043-2v-.964c0-.813 0-1.469.043-2 .045-.546.14-1.026.366-1.47a3.75 3.75 0 0 1 1.639-1.64c.444-.226.924-.32 1.47-.365.531-.043 1.187-.043 2-.043Zm-1.877 1.538c-.454.037-.715.107-.912.207a2.25 2.25 0 0 0-.984.984c-.1.197-.17.458-.207.912-.037.462-.038 1.057-.038 1.909v.9c0 .853 0 1.447.038 1.91.034.41.094.663.18.854a6.5 6.5 0 0 1 8.858 1.226c.324-.04.532-.102.695-.185a2.25 2.25 0 0 0 .984-.984c.1-.197.17-.458.207-.912.037-.462.038-1.056.038-1.909v-.9c0-.852 0-1.447-.038-1.91-.037-.453-.107-.714-.207-.911a2.25 2.25 0 0 0-.984-.984c-.197-.1-.458-.17-.912-.207-.462-.037-1.056-.038-1.909-.038h-2.9c-.852 0-1.447 0-1.91.038Zm4.859 8.962a4.989 4.989 0 0 0-2.313-.953 4.999 4.999 0 0 0-3.384.743c.189.082.439.139.838.172.462.037 1.057.038 1.909.038h2.95Z"
  }));
};
SvgIdentityCardMajor.displayName = "IdentityCardMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/IllustrationMajor.svg.mjs


var SvgIllustrationMajor = function SvgIllustrationMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M16.155 3.844a2.079 2.079 0 0 0-2.831-.1l-6.354 5.506a3.75 3.75 0 0 0-3.72 3.75v3c0 .414.336.75.75.75h3a3.75 3.75 0 0 0 3.75-3.72l5.506-6.354a2.08 2.08 0 0 0-.1-2.832Zm-5.841 7.399 4.809-5.55a.579.579 0 0 0-.817-.816l-5.549 4.81a3.768 3.768 0 0 1 1.557 1.556Zm-3.314-.493a2.25 2.25 0 0 1 0 4.5h-2.25v-2.25a2.25 2.25 0 0 1 2.25-2.25Z"
  }));
};
SvgIllustrationMajor.displayName = "IllustrationMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ImageAltMajor.svg.mjs


var SvgImageAltMajor = function SvgImageAltMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M6.678 6.929a.75.75 0 0 0-1.356 0l-2.25 4.75a.75.75 0 0 0 1.356.642l.389-.821h2.366l.39.821a.75.75 0 0 0 1.355-.642l-2.25-4.75Zm-.205 3.071-.473-.998-.473.998h.946Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10.25 6.75a.75.75 0 0 1 .75.75v3.75h1.5a.75.75 0 0 1 0 1.5h-2.25a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 .75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13 6.75a.75.75 0 0 0 0 1.5h1v3.75a.75.75 0 0 0 1.5 0v-3.75h1a.75.75 0 0 0 0-1.5h-3.5Z"
  }));
};
SvgImageAltMajor.displayName = "ImageAltMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ImageAltMinor.svg.mjs


var SvgImageAltMinor = function SvgImageAltMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M6.678 6.929a.75.75 0 0 0-1.356 0l-2.25 4.75a.75.75 0 0 0 1.356.642l.389-.821h2.366l.39.821a.75.75 0 0 0 1.355-.642l-2.25-4.75Zm-.205 3.071-.473-.998-.473.998h.946Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10.25 6.75a.75.75 0 0 1 .75.75v3.75h1.5a.75.75 0 0 1 0 1.5h-2.25a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 .75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13 6.75a.75.75 0 0 0 0 1.5h1v3.75a.75.75 0 0 0 1.5 0v-3.75h1a.75.75 0 0 0 0-1.5h-3.5Z"
  }));
};
SvgImageAltMinor.displayName = "ImageAltMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ImageMajor.svg.mjs


var SvgImageMajor = function SvgImageMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M9.018 3.5h1.964c.813 0 1.469 0 2 .043.546.045 1.026.14 1.47.366a3.75 3.75 0 0 1 1.64 1.639c.226.444.32.924.365 1.47.043.531.043 1.187.043 2v1.964c0 .813 0 1.469-.043 2-.045.546-.14 1.026-.366 1.47a3.75 3.75 0 0 1-1.639 1.64c-.444.226-.924.32-1.47.365-.531.043-1.187.043-2 .043h-1.964c-.813 0-1.469 0-2-.043-.546-.045-1.026-.14-1.47-.366a3.75 3.75 0 0 1-1.64-1.639c-.226-.444-.32-.924-.365-1.47-.043-.531-.043-1.187-.043-2v-1.964c0-.813 0-1.469.043-2 .045-.546.14-1.026.366-1.47a3.75 3.75 0 0 1 1.639-1.64c.444-.226.924-.32 1.47-.365.531-.043 1.187-.043 2-.043Zm-1.877 1.538c-.454.037-.715.107-.912.207a2.25 2.25 0 0 0-.984.984c-.1.197-.17.458-.207.912-.037.462-.038 1.057-.038 1.909v1.428l.723-.867a1.75 1.75 0 0 1 2.582-.117l2.695 2.695 1.18-1.18a1.75 1.75 0 0 1 2.604.145l.216.27v-2.374c0-.852 0-1.447-.038-1.91-.037-.453-.107-.714-.207-.911a2.25 2.25 0 0 0-.984-.984c-.197-.1-.458-.17-.912-.207-.462-.037-1.056-.038-1.909-.038h-1.9c-.852 0-1.447 0-1.91.038Zm-2.103 7.821a7.12 7.12 0 0 1-.006-.08.746.746 0 0 0 .044-.049l1.8-2.159a.25.25 0 0 1 .368-.016l3.226 3.225a.75.75 0 0 0 1.06 0l1.71-1.71a.25.25 0 0 1 .372.021l1.213 1.516c-.021.06-.045.114-.07.165-.216.423-.56.767-.984.983-.197.1-.458.17-.912.207-.462.037-1.056.038-1.909.038h-1.9c-.852 0-1.447 0-1.91-.038-.453-.037-.714-.107-.911-.207a2.25 2.25 0 0 1-.984-.984c-.1-.197-.17-.458-.207-.912Z"
  }));
};
SvgImageMajor.displayName = "ImageMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ImageWithTextMajor.svg.mjs


var SvgImageWithTextMajor = function SvgImageWithTextMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M5.5 3.5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2h-3Zm3 1.5h-3a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M3.5 15.75a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M4.25 11.5a.75.75 0 0 0 0 1.5h11.5a.75.75 0 0 0 0-1.5h-11.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11.25 8.75a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5h-3.75a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12 4.5a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5h-3.75Z"
  }));
};
SvgImageWithTextMajor.displayName = "ImageWithTextMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ImageWithTextOverlayMajor.svg.mjs


var SvgImageWithTextOverlayMajor = function SvgImageWithTextOverlayMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M9.018 3.5h1.964c.813 0 1.469 0 2 .043.546.045 1.026.14 1.47.366a3.75 3.75 0 0 1 1.64 1.639c.226.444.32.924.365 1.47.043.531.043 1.187.043 2v1.792a.75.75 0 0 1-1.5 0v-1.76c0-.852 0-1.447-.038-1.91-.037-.453-.107-.714-.207-.911a2.25 2.25 0 0 0-.984-.984c-.197-.1-.458-.17-.912-.207-.462-.037-1.056-.038-1.909-.038h-1.9c-.852 0-1.447 0-1.91.038-.453.037-.714.107-.911.207a2.25 2.25 0 0 0-.984.984c-.1.197-.17.458-.207.912-.037.462-.038 1.057-.038 1.909v1.428l.723-.867a1.75 1.75 0 0 1 2.582-.117l3.225 3.226a.75.75 0 0 1-1.06 1.06l-3.226-3.225a.25.25 0 0 0-.369.016l-1.799 2.16a.746.746 0 0 1-.044.047l.006.081c.037.454.107.715.207.912.216.424.56.768.984.984.197.1.458.17.912.207.462.037 1.057.038 1.909.038h1.68a.75.75 0 0 1 0 1.5h-1.712c-.813 0-1.469 0-2-.043-.546-.045-1.026-.14-1.47-.366a3.75 3.75 0 0 1-1.64-1.639c-.226-.444-.32-.924-.365-1.47-.043-.531-.043-1.187-.043-2v-1.964c0-.813 0-1.469.043-2 .045-.546.14-1.026.366-1.47a3.75 3.75 0 0 1 1.639-1.64c.444-.226.924-.32 1.47-.365.531-.043 1.187-.043 2-.043Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.5 13.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13.25 15a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5h-2Z"
  }));
};
SvgImageWithTextOverlayMajor.displayName = "ImageWithTextOverlayMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ImagesMajor.svg.mjs


var SvgImagesMajor = function SvgImagesMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10.75 10.25a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M6.01 6.01a2.75 2.75 0 0 1 2.74-2.51h5a2.75 2.75 0 0 1 2.75 2.75v5a2.75 2.75 0 0 1-2.51 2.74 2.75 2.75 0 0 1-2.74 2.51h-5a2.75 2.75 0 0 1-2.75-2.75v-5a2.75 2.75 0 0 1 2.51-2.74Zm-1.01 7.74v-.978l1.625-1.95a.25.25 0 0 1 .369-.017l3.226 3.225a.75.75 0 0 0 1.06 0l1.22-1.22v.94c0 .69-.56 1.25-1.25 1.25h-5c-.69 0-1.25-.56-1.25-1.25Zm7.5-5v1.94l-1.75 1.75-2.695-2.696a1.75 1.75 0 0 0-2.582.117l-.473.567v-1.678c0-.69.56-1.25 1.25-1.25h5c.69 0 1.25.56 1.25 1.25Zm-4.975-2.75h3.725a2.75 2.75 0 0 1 2.75 2.75v3.725c.57-.116 1-.62 1-1.225v-5c0-.69-.56-1.25-1.25-1.25h-5c-.605 0-1.11.43-1.225 1Z"
  }));
};
SvgImagesMajor.displayName = "ImagesMajor";



// EXTERNAL MODULE: ../polaris-icons/dist/icons/ImportMinor.svg.mjs
var ImportMinor_svg = __webpack_require__(3405);
;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ImportStoreMajor.svg.mjs


var SvgImportStoreMajor = function SvgImportStoreMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10.75 2.75a.75.75 0 0 0-1.5 0v2.69l-.47-.47a.75.75 0 0 0-1.06 1.06l1.75 1.75a.75.75 0 0 0 1.06 0l1.75-1.75a.75.75 0 0 0-1.06-1.06l-.47.47v-2.69Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M5.893 4.822a.75.75 0 0 1 .36.998l-.753 1.598v1.082a1 1 0 0 0 2 0v-.25a.75.75 0 0 1 1.5 0v.25a1 1 0 0 0 2 0v-.25a.75.75 0 0 1 1.5 0v.25a1 1 0 0 0 2 0v-1.082l-.752-1.598a.75.75 0 1 1 1.357-.64l.776 1.65c.078.166.119.348.119.532v1.138c0 .563-.186 1.083-.5 1.5v5.25a1.75 1.75 0 0 1-1.75 1.75h-7.5a1.75 1.75 0 0 1-1.75-1.75v-5.25a2.489 2.489 0 0 1-.5-1.5v-1.138c0-.184.04-.366.119-.532l.776-1.65a.75.75 0 0 1 .998-.358Zm4.107 6.178c.681 0 1.299-.273 1.75-.715a2.492 2.492 0 0 0 2.25.665v4.3a.25.25 0 0 1-.25.25h-2.25v-1.5a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1.5h-2.25a.25.25 0 0 1-.25-.25v-4.3a2.511 2.511 0 0 0 2.25-.665 2.493 2.493 0 0 0 1.75.715Z"
  }));
};
SvgImportStoreMajor.displayName = "ImportStoreMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/InactiveLocationMajor.svg.mjs


var SvgInactiveLocationMajor = function SvgInactiveLocationMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13.34 3.888a6.591 6.591 0 0 0-3.34-.888c-3.314 0-6 2.35-6 5.25 0 1.481.398 2.823.992 3.986l1.125-1.126a7.111 7.111 0 0 1-.617-2.86c0-1.89 1.82-3.75 4.5-3.75.84 0 1.595.183 2.236.492l1.104-1.104Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10.845 6.382a2.75 2.75 0 0 0-3.463 3.463l3.463-3.463Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M4.086 15.264a.75.75 0 0 0 1.066 1.055l1.593-1.594c1.341 1.45 2.77 2.275 3.255 2.275 1 0 6-3.5 6-8.75 0-.793-.2-1.545-.56-2.219l1.379-1.38a.75.75 0 1 0-1.06-1.06l-11.668 11.667-.005.006Zm10.414-7.014c0 2.136-1.02 3.982-2.241 5.342a9.67 9.67 0 0 1-1.737 1.535 4.805 4.805 0 0 1-.522.31 4.816 4.816 0 0 1-.522-.31 9.613 9.613 0 0 1-1.671-1.463l6.495-6.496c.13.351.198.716.198 1.082Zm-4.688 7.27a.064.064 0 0 0-.006.001l.006-.001Zm.381.001h.002-.002Z"
  }));
};
SvgInactiveLocationMajor.displayName = "InactiveLocationMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/InactiveLocationMinor.svg.mjs


var SvgInactiveLocationMinor = function SvgInactiveLocationMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13.34 3.888a6.591 6.591 0 0 0-3.34-.888c-3.314 0-6 2.35-6 5.25 0 1.481.398 2.823.992 3.986l1.125-1.126a7.111 7.111 0 0 1-.617-2.86c0-1.89 1.82-3.75 4.5-3.75.84 0 1.595.183 2.236.492l1.104-1.104Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10.845 6.382a2.75 2.75 0 0 0-3.463 3.463l3.463-3.463Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M4.086 15.264a.75.75 0 0 0 1.066 1.055l1.593-1.594c1.341 1.45 2.77 2.275 3.255 2.275 1 0 6-3.5 6-8.75 0-.793-.2-1.545-.56-2.219l1.379-1.38a.75.75 0 1 0-1.06-1.06l-11.668 11.667-.005.006Zm10.414-7.014c0 2.136-1.02 3.982-2.241 5.342a9.67 9.67 0 0 1-1.737 1.535 4.805 4.805 0 0 1-.522.31 4.816 4.816 0 0 1-.522-.31 9.613 9.613 0 0 1-1.671-1.463l6.495-6.496c.13.351.198.716.198 1.082Zm-4.688 7.27a.064.064 0 0 0-.006.001l.006-.001Zm.381.001h.002-.002Z"
  }));
};
SvgInactiveLocationMinor.displayName = "InactiveLocationMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/IncomingMajor.svg.mjs


var SvgIncomingMajor = function SvgIncomingMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M3.5 10.25a.75.75 0 0 1 1.5 0v3.5c0 .69.56 1.25 1.25 1.25h7.5c.69 0 1.25-.56 1.25-1.25v-7.5c0-.69-.56-1.25-1.25-1.25h-3.5a.75.75 0 0 1 0-1.5h3.5a2.75 2.75 0 0 1 2.75 2.75v7.5a2.75 2.75 0 0 1-2.75 2.75h-7.5a2.75 2.75 0 0 1-2.75-2.75v-3.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.75 11.5a.75.75 0 0 1 0-1.5h2.19l-4.97-4.97a.75.75 0 0 1 1.06-1.06l4.97 4.97v-2.19a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-.75.75h-4Z"
  }));
};
SvgIncomingMajor.displayName = "IncomingMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/IndentMajor.svg.mjs


var SvgIndentMajor = function SvgIndentMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M3 4.75a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5h-12.5a.75.75 0 0 1-.75-.75Zm7 3.5a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Zm0 3.5a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Zm-7 3.5a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5h-12.5a.75.75 0 0 1-.75-.75Zm.96-2.35c-.41.262-.96-.02-.96-.493v-4.814c0-.473.55-.755.96-.493l3.765 2.408a.579.579 0 0 1 0 .985l-3.765 2.407Z"
  }));
};
SvgIndentMajor.displayName = "IndentMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/IndentMinor.svg.mjs


var SvgIndentMinor = function SvgIndentMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M3 4.75a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5h-12.5a.75.75 0 0 1-.75-.75Zm7 3.5a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Zm0 3.5a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Zm-7 3.5a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5h-12.5a.75.75 0 0 1-.75-.75Zm.96-2.35c-.41.262-.96-.02-.96-.493v-4.814c0-.473.55-.755.96-.493l3.765 2.408a.579.579 0 0 1 0 .985l-3.765 2.407Z"
  }));
};
SvgIndentMinor.displayName = "IndentMinor";



// EXTERNAL MODULE: ../polaris-icons/dist/icons/InfoMinor.svg.mjs
var InfoMinor_svg = __webpack_require__(89108);
;// CONCATENATED MODULE: ../polaris-icons/dist/icons/InsertDynamicSourceMajor.svg.mjs


var SvgInsertDynamicSourceMajor = function SvgInsertDynamicSourceMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M5 11.997c.206.112.426.214.656.306 1.149.46 2.685.727 4.344.727 1.659 0 3.195-.268 4.344-.727.573-.23 1.087-.52 1.47-.883.384-.363.686-.85.686-1.44v-3.43c0-.59-.302-1.077-.687-1.44-.382-.362-.896-.654-1.469-.883-1.149-.46-2.685-.727-4.344-.727-1.659 0-3.195.268-4.344.727-.573.23-1.087.52-1.47.883-.384.363-.686.85-.686 1.44v6.9c0 .59.302 1.077.687 1.44.382.362.896.654 1.469.883 1.149.46 2.685.727 4.344.727a.75.75 0 0 0 0-1.5c-1.517 0-2.856-.247-3.787-.62-.468-.187-.797-.391-.996-.58-.197-.187-.217-.305-.217-.35v-1.453Zm.217-5.797c-.197.186-.217.305-.217.35 0 .045.02.164.217.35.2.189.528.393.996.58.931.373 2.27.62 3.787.62s2.855-.247 3.787-.62c.468-.187.797-.391.996-.58.197-.186.217-.305.217-.35 0-.045-.02-.164-.217-.35-.2-.189-.528-.393-.996-.58-.932-.373-2.27-.62-3.787-.62s-2.856.247-3.787.62c-.468.187-.797.391-.996.58Zm9.783 2.367a6.104 6.104 0 0 1-.656.306c-1.149.46-2.685.727-4.344.727-1.659 0-3.195-.268-4.344-.727a6.099 6.099 0 0 1-.656-.306v1.413c0 .045.02.163.217.35.2.189.528.393.996.58.931.373 2.27.62 3.787.62s2.855-.247 3.787-.62c.468-.187.797-.391.996-.58.197-.187.217-.305.217-.35v-1.413Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.5 15.25a.75.75 0 0 1 .75-.75h1.25v-1.25a.75.75 0 0 1 1.5 0v1.25h1.25a.75.75 0 0 1 0 1.5h-1.25v1.25a.75.75 0 0 1-1.5 0v-1.25h-1.25a.75.75 0 0 1-.75-.75Z"
  }));
};
SvgInsertDynamicSourceMajor.displayName = "InsertDynamicSourceMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/InsertDynamicSourceMinor.svg.mjs


var SvgInsertDynamicSourceMinor = function SvgInsertDynamicSourceMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M5 11.997c.206.112.426.214.656.306 1.149.46 2.685.727 4.344.727 1.659 0 3.195-.268 4.344-.727.573-.23 1.087-.52 1.47-.883.384-.363.686-.85.686-1.44v-3.43c0-.59-.302-1.077-.687-1.44-.382-.362-.896-.654-1.469-.883-1.149-.46-2.685-.727-4.344-.727-1.659 0-3.195.268-4.344.727-.573.23-1.087.52-1.47.883-.384.363-.686.85-.686 1.44v6.9c0 .59.302 1.077.687 1.44.382.362.896.654 1.469.883 1.149.46 2.685.727 4.344.727a.75.75 0 0 0 0-1.5c-1.517 0-2.856-.247-3.787-.62-.468-.187-.797-.391-.996-.58-.197-.187-.217-.305-.217-.35v-1.453Zm.217-5.797c-.197.186-.217.305-.217.35 0 .045.02.164.217.35.2.189.528.393.996.58.931.373 2.27.62 3.787.62s2.855-.247 3.787-.62c.468-.187.797-.391.996-.58.197-.186.217-.305.217-.35 0-.045-.02-.164-.217-.35-.2-.189-.528-.393-.996-.58-.932-.373-2.27-.62-3.787-.62s-2.856.247-3.787.62c-.468.187-.797.391-.996.58Zm9.783 2.367a6.104 6.104 0 0 1-.656.306c-1.149.46-2.685.727-4.344.727-1.659 0-3.195-.268-4.344-.727a6.099 6.099 0 0 1-.656-.306v1.413c0 .045.02.163.217.35.2.189.528.393.996.58.931.373 2.27.62 3.787.62s2.855-.247 3.787-.62c.468-.187.797-.391.996-.58.197-.187.217-.305.217-.35v-1.413Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.5 15.25a.75.75 0 0 1 .75-.75h1.25v-1.25a.75.75 0 0 1 1.5 0v1.25h1.25a.75.75 0 0 1 0 1.5h-1.25v1.25a.75.75 0 0 1-1.5 0v-1.25h-1.25a.75.75 0 0 1-.75-.75Z"
  }));
};
SvgInsertDynamicSourceMinor.displayName = "InsertDynamicSourceMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/InstagramMinor.svg.mjs


var SvgInstagramMinor = function SvgInstagramMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M6 10.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0Zm1 0a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13.25 7.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M12.5 17h-6a3.5 3.5 0 0 1-3.5-3.5v-6a3.5 3.5 0 0 1 3.5-3.5h6a3.5 3.5 0 0 1 3.5 3.5v6a3.5 3.5 0 0 1-3.5 3.5Zm-8.5-9.5a2.5 2.5 0 0 1 2.5-2.5h6a2.5 2.5 0 0 1 2.5 2.5v6a2.5 2.5 0 0 1-2.5 2.5h-6a2.5 2.5 0 0 1-2.5-2.5v-6Z"
  }));
};
SvgInstagramMinor.displayName = "InstagramMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/InstallMinor.svg.mjs


var SvgInstallMinor = function SvgInstallMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10.75 4.25a.75.75 0 0 0-1.5 0v6.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72v-6.69Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M16.5 13.75a.75.75 0 0 0-1.5 0v.8a.75.75 0 0 1-.75.75h-8.5a.75.75 0 0 1-.75-.75v-.8a.75.75 0 0 0-1.5 0v.8a2.25 2.25 0 0 0 2.25 2.25h8.5a2.25 2.25 0 0 0 2.25-2.25v-.8Z"
  }));
};
SvgInstallMinor.displayName = "InstallMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/InventoryFilledMajor.svg.mjs


var SvgInventoryFilledMajor = function SvgInventoryFilledMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M8.77 3.406a2.25 2.25 0 0 1 2.46 0l3.569 2.328a3.75 3.75 0 0 1 1.701 3.141v6.875c0 .69-.56 1.25-1.25 1.25h-10.5c-.69 0-1.25-.56-1.25-1.25v-6.875a3.75 3.75 0 0 1 1.702-3.141l3.569-2.328Zm2.73 4.594a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5v2.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2.5Zm-2 4.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5v2.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2.5Zm3.5-.5a.5.5 0 0 1 .5.5v2.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.5a.5.5 0 0 1 .5-.5h2Z"
  }));
};
SvgInventoryFilledMajor.displayName = "InventoryFilledMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/InventoryMajor.svg.mjs


var SvgInventoryMajor = function SvgInventoryMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11.265 2.953a2.25 2.25 0 0 0-2.53 0l-4.094 2.784a3.75 3.75 0 0 0-1.641 3.1v7.413a.75.75 0 0 0 1.5 0v-7.412c0-.745.369-1.442.985-1.86l4.093-2.784a.75.75 0 0 1 .844 0l4.093 2.783a2.25 2.25 0 0 1 .985 1.86v7.413a.75.75 0 0 0 1.5 0v-7.412a3.75 3.75 0 0 0-1.641-3.101l-4.094-2.784Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M10 16.968a1 1 0 0 1-.25.032h-3a1 1 0 0 1-1-1v-3.5a1 1 0 0 1 1-1h.75v-3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3h.75a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1h-3a1 1 0 0 1-.25-.032Zm.75-3.968v2.5h2v-2.5h-2Zm-1.5 2.5v-2.5h-2v2.5h2Zm1.75-4v-2.5h-2v2.5h2Z"
  }));
};
SvgInventoryMajor.displayName = "InventoryMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/InviteMinor.svg.mjs


var SvgInviteMinor = function SvgInviteMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.567 7.57a.75.75 0 0 0-.634 1.36l3.538 1.651a1.25 1.25 0 0 0 1.058 0l3.538-1.651a.75.75 0 0 0-.634-1.36l-3.433 1.603-3.433-1.602Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M6.75 4.5a3.75 3.75 0 0 0-3.75 3.75v3.5a3.75 3.75 0 0 0 3.75 3.75h6.5a3.75 3.75 0 0 0 3.75-3.75v-3.5a3.75 3.75 0 0 0-3.75-3.75h-6.5Zm-2.25 3.75a2.25 2.25 0 0 1 2.25-2.25h6.5a2.25 2.25 0 0 1 2.25 2.25v3.5a2.25 2.25 0 0 1-2.25 2.25h-6.5a2.25 2.25 0 0 1-2.25-2.25v-3.5Z"
  }));
};
SvgInviteMinor.displayName = "InviteMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/IqMajor.svg.mjs


var SvgIqMajor = function SvgIqMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14.5 5.25a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M10.128 12.5h-2.128a4.5 4.5 0 0 1-4.5-4.5v-.25a4.25 4.25 0 0 1 4.25-4.25h4a.75.75 0 0 1 0 1.5h-4a2.75 2.75 0 0 0-2.75 2.75v.25a3 3 0 0 0 3 3h2.128a2.251 2.251 0 1 1 0 1.5Zm1.372-.75a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M12.25 16.25a4.5 4.5 0 1 0 0-9h-2.128a2.251 2.251 0 1 0 0 1.5h2.128a3 3 0 1 1 0 6h-3.75a.75.75 0 0 0 0 1.5h3.75Zm-4.25-9a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.75 15.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }));
};
SvgIqMajor.displayName = "IqMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ItalicMajor.svg.mjs


var SvgItalicMajor = function SvgItalicMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M7.5 4.25c0-.41.34-.75.75-.75h6a.75.75 0 0 1 0 1.5h-2.34l-2.28 10h2.12a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1 0-1.5h2.34l2.28-10h-2.12a.75.75 0 0 1-.75-.75Z"
  }));
};
SvgItalicMajor.displayName = "ItalicMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ItalicMinor.svg.mjs


var SvgItalicMinor = function SvgItalicMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M7.5 4.25c0-.41.34-.75.75-.75h6a.75.75 0 0 1 0 1.5h-2.34l-2.28 10h2.12a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1 0-1.5h2.34l2.28-10h-2.12a.75.75 0 0 1-.75-.75Z"
  }));
};
SvgItalicMinor.displayName = "ItalicMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/JobsFilledMajor.svg.mjs


var SvgJobsFilledMajor = function SvgJobsFilledMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M6.5 4.75v.75h-.5a3 3 0 0 0-2.967 2.555.748.748 0 0 1 .234.152l.002.001.014.014.074.064c.068.058.175.145.319.251.288.213.724.503 1.298.794 1.147.582 2.844 1.169 5.026 1.169 2.181 0 3.878-.587 5.026-1.169a9.19 9.19 0 0 0 1.298-.794 6.039 6.039 0 0 0 .392-.315l.016-.014v-.001a.747.747 0 0 1 .235-.152 3 3 0 0 0-2.967-2.555h-.5v-.75a1.75 1.75 0 0 0-1.75-1.75h-3.5a1.75 1.75 0 0 0-1.75 1.75Zm1.75-.25a.25.25 0 0 0-.25.25v.75h4v-.75a.25.25 0 0 0-.25-.25h-3.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M17 9.898c-.33.23-.763.5-1.296.77a12.428 12.428 0 0 1-4.704 1.295v.037a1 1 0 1 1-2 0v-.037a12.428 12.428 0 0 1-4.704-1.294 10.92 10.92 0 0 1-1.296-.77v4.101a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-4.102Z"
  }));
};
SvgJobsFilledMajor.displayName = "JobsFilledMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/JobsMajor.svg.mjs


var SvgJobsMajor = function SvgJobsMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M6.5 4.75v.75h-.5a3 3 0 0 0-3 3.018v5.482a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-5.5a3 3 0 0 0-3-3h-.5v-.75a1.75 1.75 0 0 0-1.75-1.75h-3.5a1.75 1.75 0 0 0-1.75 1.75Zm1.75-.25a.25.25 0 0 0-.25.25v.75h4v-.75a.25.25 0 0 0-.25-.25h-3.5Zm5.75 2.5h-8a1.5 1.5 0 0 0-1.476 1.233c.044.045.096.095.154.151.247.232.617.546 1.104.861a7.707 7.707 0 0 0 4.218 1.255 7.707 7.707 0 0 0 4.217-1.255 7.783 7.783 0 0 0 1.26-1.012 1.5 1.5 0 0 0-1.477-1.233Zm-9.5 3.182a9.243 9.243 0 0 0 4.5 1.764v.054a1 1 0 1 0 2 0v-.054a9.241 9.241 0 0 0 4.5-1.764v3.818a1.5 1.5 0 0 1-1.5 1.5h-8a1.5 1.5 0 0 1-1.5-1.5v-3.818Z"
  }));
};
SvgJobsMajor.displayName = "JobsMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/KeyMajor.svg.mjs


var SvgKeyMajor = function SvgKeyMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10 7.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M8.85 2.75a4.35 4.35 0 0 0-4.35 4.35 3.401 3.401 0 0 0 2.5 3.28v3.435a2 2 0 0 0 .481 1.302l1.07 1.247a2 2 0 0 0 2.746.277l1.309-1.018a2.002 2.002 0 0 0 .376-2.776 2.004 2.004 0 0 0 .002-2.463 3.401 3.401 0 0 0 2.516-3.284 4.35 4.35 0 0 0-4.35-4.35h-2.3Zm2.835 11.69a.5.5 0 0 0-.042-.82l-.637-.397a.5.5 0 0 1 .041-.872l.582-.29a.5.5 0 0 0 .13-.802l-.613-.613a.5.5 0 0 1-.146-.353v-.793a.5.5 0 0 1 .5-.5h.6a1.9 1.9 0 0 0 1.9-1.9 2.85 2.85 0 0 0-2.85-2.85h-2.3a2.85 2.85 0 0 0-2.85 2.85c0 1.05.85 1.9 1.9 1.9h.1a.5.5 0 0 1 .5.5v4.315a.5.5 0 0 0 .12.325l1.07 1.248a.5.5 0 0 0 .686.07l1.31-1.019Z"
  }));
};
SvgKeyMajor.displayName = "KeyMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/KeyboardMajor.svg.mjs


var SvgKeyboardMajor = function SvgKeyboardMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M8.75 10.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.5 11.25a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.25 10.5a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M4.5 8.75a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M8.25 8a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10.5 8.75a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14.25 8a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M5.25 5.5a2.75 2.75 0 0 0-2.75 2.75v3.5a2.75 2.75 0 0 0 2.75 2.75h9.5a2.75 2.75 0 0 0 2.75-2.75v-3.5a2.75 2.75 0 0 0-2.75-2.75h-9.5Zm-1.25 2.75c0-.69.56-1.25 1.25-1.25h9.5c.69 0 1.25.56 1.25 1.25v3.5c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-3.5Z"
  }));
};
SvgKeyboardMajor.displayName = "KeyboardMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/KeyboardMinor.svg.mjs


var SvgKeyboardMinor = function SvgKeyboardMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M8.75 10.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.5 11.25a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.25 10.5a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M4.5 8.75a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M8.25 8a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10.5 8.75a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14.25 8a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M5.25 5.5a2.75 2.75 0 0 0-2.75 2.75v3.5a2.75 2.75 0 0 0 2.75 2.75h9.5a2.75 2.75 0 0 0 2.75-2.75v-3.5a2.75 2.75 0 0 0-2.75-2.75h-9.5Zm-1.25 2.75c0-.69.56-1.25 1.25-1.25h9.5c.69 0 1.25.56 1.25 1.25v3.5c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-3.5Z"
  }));
};
SvgKeyboardMinor.displayName = "KeyboardMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/LabelPrinterMajor.svg.mjs


var SvgLabelPrinterMajor = function SvgLabelPrinterMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14 6.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.75 5.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M8.5 13.5a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M9.25 10.25a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M14 13.989v.511a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-.511a2.75 2.75 0 0 1-2.5-2.739v-5a2.75 2.75 0 0 1 2.75-2.75h7.5a2.75 2.75 0 0 1 2.75 2.75v5a2.75 2.75 0 0 1-2.5 2.739Zm-7.75-8.989c-.69 0-1.25.56-1.25 1.25v5c0 .605.43 1.11 1 1.225v-2.475a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2.475c.57-.116 1-.62 1-1.225v-5c0-.69-.56-1.25-1.25-1.25h-7.5Zm1.75 4.5h4a.5.5 0 0 1 .5.5v4.5a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-4.5a.5.5 0 0 1 .5-.5Z"
  }));
};
SvgLabelPrinterMajor.displayName = "LabelPrinterMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/LandingPageMajor.svg.mjs


var SvgLandingPageMajor = function SvgLandingPageMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M12 10c0-.36-.01-.711-.027-1.051-.635.034-1.297.051-1.973.051-.676 0-1.338-.017-1.973-.051a19.856 19.856 0 0 0 .026 2.499c.616.034 1.269.052 1.947.052a.75.75 0 1 1 0 1.5c-.604 0-1.193-.013-1.759-.04.106.582.244 1.103.412 1.547.44 1.161.95 1.493 1.347 1.493a.75.75 0 0 1 0 1.5 7.5 7.5 0 1 1 7.5-7.5.75.75 0 0 1-1.5 0c0-.55-.074-1.083-.213-1.59-.655.183-1.443.321-2.319.418.021.383.032.775.032 1.172a.75.75 0 0 1-1.5 0Zm-3.347-4.507c.44-1.161.95-1.493 1.347-1.493.396 0 .907.332 1.347 1.493.207.546.369 1.21.48 1.961-.577.03-1.19.046-1.827.046a35.3 35.3 0 0 1-1.827-.046c.111-.75.273-1.415.48-1.961Zm-1.402-.532c-.26.687-.452 1.493-.576 2.373-.724-.08-1.36-.188-1.88-.32a6.026 6.026 0 0 1 2.61-2.425 6.784 6.784 0 0 0-.154.372Zm-.72 3.867c-.875-.097-1.663-.235-2.318-.417a6.007 6.007 0 0 0-.163 2.367c.493.2 1.229.374 2.176.501l.314.04a21.13 21.13 0 0 1-.008-2.491Zm6.794-1.494c.724-.08 1.36-.188 1.88-.32a6.027 6.027 0 0 0-2.61-2.425c.056.122.107.247.154.372.26.687.452 1.493.576 2.373Zm-8.783 5.162a6.024 6.024 0 0 0 2.862 2.915 6.807 6.807 0 0 1-.153-.372c-.243-.64-.425-1.383-.55-2.193-.231-.024-.457-.05-.675-.08a14.799 14.799 0 0 1-1.484-.27Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "m14.81 13.75 2.47 2.47a.75.75 0 1 1-1.06 1.06l-2.47-2.47v1.19a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-1.19Z"
  }));
};
SvgLandingPageMajor.displayName = "LandingPageMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/LanguageFilledMinor.svg.mjs


var SvgLanguageFilledMinor = function SvgLanguageFilledMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "m7.744 9.625-.744-2.046-.744 2.046h1.488Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.712 10.656c.301-.354.519-.737.679-1.109a5.454 5.454 0 0 0 .388-1.422h-2.134l.021.143c.054.339.16.798.368 1.28.16.37.377.754.678 1.108Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M10.518 15.5h3.982a3.25 3.25 0 0 0 3.25-3.25v-6a3.25 3.25 0 0 0-3.25-3.25h-9a3.25 3.25 0 0 0-3.25 3.25v6a3.25 3.25 0 0 0 3.25 3.25h1.25v.75a1.25 1.25 0 0 0 2.134.884l1.634-1.634Zm-2.93-9.964a.625.625 0 0 0-1.175 0l-2 5.5a.625.625 0 0 0 1.174.428l.225-.618c.06.019.122.029.188.029h2.199l.214.589a.625.625 0 0 0 1.174-.428l-2-5.5Zm5.162-.161a.625.625 0 0 0-.625.625v.875h-1.875a.625.625 0 1 0 0 1.25h.136a6.711 6.711 0 0 0 .499 1.916c.202.47.484.964.874 1.423a4.399 4.399 0 0 1-1.166.481.625.625 0 1 0 .314 1.21 5.517 5.517 0 0 0 1.805-.82 5.518 5.518 0 0 0 1.805.82.625.625 0 1 0 .314-1.21 4.399 4.399 0 0 1-1.166-.48c.39-.46.672-.954.874-1.424a6.708 6.708 0 0 0 .499-1.916h.212a.625.625 0 1 0 0-1.25h-1.875v-.875a.625.625 0 0 0-.625-.625Z"
  }));
};
SvgLanguageFilledMinor.displayName = "LanguageFilledMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/LanguageMinor.svg.mjs


var SvgLanguageMinor = function SvgLanguageMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M7.705 5.494a.75.75 0 0 0-1.41 0l-2 5.5a.75.75 0 1 0 1.41.512l.187-.514a.743.743 0 0 0 .108.008h2.111l.184.506a.75.75 0 1 0 1.41-.512l-2-5.5Zm-.705 2.45.566 1.556h-1.132l.566-1.555Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M15.25 8.25h-.1a6.831 6.831 0 0 1-.495 1.84 5.808 5.808 0 0 1-.795 1.334c.295.164.631.3 1.016.4a.75.75 0 0 1-.377 1.452 5.665 5.665 0 0 1-1.78-.793 5.666 5.666 0 0 1-1.78.793.75.75 0 1 1-.377-1.452c.385-.1.721-.236 1.016-.4a5.808 5.808 0 0 1-.794-1.334 6.831 6.831 0 0 1-.496-1.84h-.038a.75.75 0 1 1 0-1.5h1.75v-.75a.75.75 0 0 1 1.5 0v.75h1.75a.75.75 0 0 1 0 1.5Zm-3.447 0c.053.331.157.779.359 1.248.136.318.316.644.557.952.24-.308.42-.634.557-.952a5.38 5.38 0 0 0 .359-1.248h-1.832Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M14.5 15.75h-3.879l-1.56 1.56a1.5 1.5 0 0 1-2.561-1.06v-.5h-1a3.5 3.5 0 0 1-3.5-3.5v-6a3.5 3.5 0 0 1 3.5-3.5h9a3.5 3.5 0 0 1 3.5 3.5v6a3.5 3.5 0 0 1-3.5 3.5Zm-6.5.5 2-2h4.5a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-9a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2.5v2Z"
  }));
};
SvgLanguageMinor.displayName = "LanguageMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/LastClickModelMinor.svg.mjs


var SvgLastClickModelMinor = function SvgLastClickModelMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M4 9.5a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M12 9.5a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M8 9.5a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M16 3a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-1.5 0v-12.5a.75.75 0 0 1 .75-.75Z"
  }));
};
SvgLastClickModelMinor.displayName = "LastClickModelMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/LastNonDirectClickModelMinor.svg.mjs


var SvgLastNonDirectClickModelMinor = function SvgLastNonDirectClickModelMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M4 9.5a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M16 9.5a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M8 9.5a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M12 3a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-1.5 0v-12.5a.75.75 0 0 1 .75-.75Z"
  }));
};
SvgLastNonDirectClickModelMinor.displayName = "LastNonDirectClickModelMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/LegalFilledMajor.svg.mjs


var SvgLegalFilledMajor = function SvgLegalFilledMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M5.75 3.75a2.25 2.25 0 0 0-2.25 2.25v3.5c0 .414.336.75.75.75h2.25v4.5a2 2 0 0 0 1.567 1.953c.196-.128.43-.203.683-.203a.75.75 0 0 0 .75-.75v-1c0-.69.56-1.25 1.25-1.25h5.25v-8.25a1.5 1.5 0 0 0-1.5-1.5h-8.75Zm.75 2.25a.75.75 0 0 0-1.5 0v2.75h1.5v-2.75Zm2.625 1.5c0-.345.28-.625.625-.625h3a.625.625 0 1 1 0 1.25h-3a.625.625 0 0 1-.625-.625Zm.625 2.375a.625.625 0 1 0 0 1.25h3a.625.625 0 1 0 0-1.25h-3Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10.605 16.5a2 2 0 0 1-1.855 1.25h7.75a1.5 1.5 0 0 0 1.5-1.5v-1.5h-7.25v1c0 .265-.052.518-.145.75Z"
  }));
};
SvgLegalFilledMajor.displayName = "LegalFilledMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/LegalMajor.svg.mjs


var SvgLegalMajor = function SvgLegalMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M8 7.5a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M8.75 9.75a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M2.5 5.75a2 2 0 0 1 2-2h8.5a2 2 0 0 1 2 2v7.5h2a.75.75 0 0 1 .75.75v1.5a2.25 2.25 0 0 1-2.25 2.25h-7.75a2.75 2.75 0 0 1-2.75-2.75v-4.75h-1.75a.75.75 0 0 1-.75-.75v-3.75Zm5.25 10.5c.69 0 1.25-.56 1.25-1.25v-1a.75.75 0 0 1 .75-.75h3.75v-7.5a.5.5 0 0 0-.5-.5h-6.563a1.982 1.982 0 0 1 .063.5v9.25c0 .69.56 1.25 1.25 1.25Zm2.75-1.5v.25c0 .45-.108.875-.3 1.25h5.3a.75.75 0 0 0 .75-.75v-.75h-5.75Zm-6.5-9a.5.5 0 0 1 .498-.5h.002a.5.5 0 0 1 .5.5v3h-1v-3Z"
  }));
};
SvgLegalMajor.displayName = "LegalMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/LinearModelMinor.svg.mjs


var SvgLinearModelMinor = function SvgLinearModelMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M4 9.5a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M16 9.5a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M8 9.5a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M12 9.5a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75Z"
  }));
};
SvgLinearModelMinor.displayName = "LinearModelMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/LinkMinor.svg.mjs


var SvgLinkMinor = function SvgLinkMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M15.842 4.175a3.746 3.746 0 0 0-5.298 0l-2.116 2.117a3.75 3.75 0 0 0 .01 5.313l.338.336a.75.75 0 1 0 1.057-1.064l-.339-.337a2.25 2.25 0 0 1-.005-3.187l2.116-2.117a2.246 2.246 0 1 1 3.173 3.18l-1.052 1.047a.75.75 0 0 0 1.058 1.064l1.052-1.047a3.746 3.746 0 0 0 .006-5.305Zm-11.664 11.67a3.75 3.75 0 0 0 5.304 0l2.121-2.121a3.75 3.75 0 0 0 0-5.303l-.362-.362a.75.75 0 0 0-1.06 1.06l.362.362a2.25 2.25 0 0 1 0 3.182l-2.122 2.122a2.25 2.25 0 1 1-3.182-3.182l1.07-1.07a.75.75 0 1 0-1.062-1.06l-1.069 1.069a3.75 3.75 0 0 0 0 5.303Z"
  }));
};
SvgLinkMinor.displayName = "LinkMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ListFilledMajor.svg.mjs


var SvgListFilledMajor = function SvgListFilledMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M4 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M4 11.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M5.5 15a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M7.5 4a1 1 0 0 0 0 2h8.5a1 1 0 1 0 0-2h-8.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.5 10a1 1 0 0 1 1-1h8.5a1 1 0 1 1 0 2h-8.5a1 1 0 0 1-1-1Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M7.5 14a1 1 0 1 0 0 2h8.5a1 1 0 1 0 0-2h-8.5Z"
  }));
};
SvgListFilledMajor.displayName = "ListFilledMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ListMajor.svg.mjs


var SvgListMajor = function SvgListMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M4 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M4 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M5 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M7.25 4.25a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-9Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.5 10a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M7.25 14.25a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-9Z"
  }));
};
SvgListMajor.displayName = "ListMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ListMinor.svg.mjs


var SvgListMinor = function SvgListMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M4 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M4 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M5 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M7.25 4.25a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-9Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.5 10a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M7.25 14.25a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-9Z"
  }));
};
SvgListMinor.displayName = "ListMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/LiveViewFilledMajor.svg.mjs


var SvgLiveViewFilledMajor = function SvgLiveViewFilledMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M4.523 6.28a5.25 5.25 0 0 0 0 7.425.75.75 0 1 1-1.06 1.06 6.75 6.75 0 0 1 0-9.545.75.75 0 0 1 1.06 1.06Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10 7.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M15.462 13.705a5.25 5.25 0 0 0 0-7.425.75.75 0 1 1 1.061-1.06 6.75 6.75 0 0 1 0 9.546.75.75 0 0 1-1.06-1.061Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.79 8.048a2.75 2.75 0 0 0 0 3.89.75.75 0 1 1-1.06 1.06 4.25 4.25 0 0 1 0-6.01.75.75 0 1 1 1.06 1.06Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13.194 11.937a2.75 2.75 0 0 0 0-3.889.75.75 0 1 1 1.061-1.06 4.25 4.25 0 0 1 0 6.01.75.75 0 0 1-1.06-1.06Z"
  }));
};
SvgLiveViewFilledMajor.displayName = "LiveViewFilledMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/LiveViewMajor.svg.mjs


var SvgLiveViewMajor = function SvgLiveViewMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M4.523 6.28a5.25 5.25 0 0 0 0 7.425.75.75 0 1 1-1.06 1.06 6.75 6.75 0 0 1 0-9.545.75.75 0 0 1 1.06 1.06Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M7.25 10a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0Zm2.75-1.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M15.462 13.705a5.25 5.25 0 0 0 0-7.425.75.75 0 1 1 1.061-1.06 6.75 6.75 0 0 1 0 9.546.75.75 0 0 1-1.06-1.061Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.79 8.048a2.75 2.75 0 0 0 0 3.89.75.75 0 1 1-1.06 1.06 4.25 4.25 0 0 1 0-6.01.75.75 0 1 1 1.06 1.06Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13.194 11.937a2.75 2.75 0 0 0 0-3.889.75.75 0 1 1 1.061-1.06 4.25 4.25 0 0 1 0 6.01.75.75 0 0 1-1.06-1.06Z"
  }));
};
SvgLiveViewMajor.displayName = "LiveViewMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/LocationFilledMajor.svg.mjs


var SvgLocationFilledMajor = function SvgLocationFilledMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M11.194 16c1.524-1.373 3.806-4.484 3.806-8.106 0-2.703-2.239-4.894-5-4.894s-5 2.191-5 4.894c0 3.622 2.282 6.733 3.806 8.106h-3.056a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-3.056Zm.806-8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
  }));
};
SvgLocationFilledMajor.displayName = "LocationFilledMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/LocationMajor.svg.mjs


var SvgLocationMajor = function SvgLocationMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M10 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0-1.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M4.25 8.227c0-3.166 2.578-5.727 5.75-5.727s5.75 2.56 5.75 5.727c0 2.699-1.128 4.985-2.34 6.581-.341.449-.692.848-1.033 1.192h1.873a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5h1.873a11.997 11.997 0 0 1-1.033-1.192c-1.212-1.596-2.34-3.882-2.34-6.581Zm5.75-4.227c-2.35 0-4.25 1.896-4.25 4.227 0 2.277.955 4.253 2.035 5.674a9.605 9.605 0 0 0 1.554 1.634c.23.186.424.316.569.396.038.021.068.036.092.047.024-.01.054-.026.092-.047.145-.08.34-.21.57-.396a9.606 9.606 0 0 0 1.553-1.634c1.08-1.421 2.035-3.397 2.035-5.674 0-2.331-1.9-4.227-4.25-4.227Z"
  }));
};
SvgLocationMajor.displayName = "LocationMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/LocationsMinor.svg.mjs


var SvgLocationsMinor = function SvgLocationsMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M10 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0-1.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M4.25 8.227c0-3.166 2.578-5.727 5.75-5.727s5.75 2.56 5.75 5.727c0 2.699-1.128 4.985-2.34 6.581-.341.449-.692.848-1.033 1.192h1.873a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5h1.873a11.997 11.997 0 0 1-1.033-1.192c-1.212-1.596-2.34-3.882-2.34-6.581Zm5.75-4.227c-2.35 0-4.25 1.896-4.25 4.227 0 2.277.955 4.253 2.035 5.674a9.605 9.605 0 0 0 1.554 1.634c.23.186.424.316.569.396.038.021.068.036.092.047.024-.01.054-.026.092-.047.145-.08.34-.21.57-.396a9.606 9.606 0 0 0 1.553-1.634c1.08-1.421 2.035-3.397 2.035-5.674 0-2.331-1.9-4.227-4.25-4.227Z"
  }));
};
SvgLocationsMinor.displayName = "LocationsMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/LockFilledMajor.svg.mjs


var SvgLockFilledMajor = function SvgLockFilledMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M6.25 6.75v.345a3.001 3.001 0 0 0-2.25 2.905v4a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-4a3.001 3.001 0 0 0-2.25-2.905v-.345a3.75 3.75 0 1 0-7.5 0Zm3.75-2.25a2.25 2.25 0 0 0-2.25 2.25v.25h4.5v-.25a2.25 2.25 0 0 0-2.25-2.25Zm1.5 7.25a1.5 1.5 0 0 1-.75 1.3v.45a.75.75 0 0 1-1.5 0v-.45a1.5 1.5 0 1 1 2.25-1.3Z"
  }));
};
SvgLockFilledMajor.displayName = "LockFilledMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/LockMajor.svg.mjs


var SvgLockMajor = function SvgLockMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10.75 13.05a1.5 1.5 0 1 0-1.5 0v.45a.75.75 0 0 0 1.5 0v-.45Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M6.25 7.095v-.345a3.75 3.75 0 1 1 7.5 0v.345a3.001 3.001 0 0 1 2.25 2.905v4a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3v-4a3 3 0 0 1 2.25-2.905Zm1.5-.345a2.25 2.25 0 0 1 4.5 0v.25h-4.5v-.25Zm-2.25 3.25a1.5 1.5 0 0 1 1.5-1.5h6a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5v-4Z"
  }));
};
SvgLockMajor.displayName = "LockMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/LockMinor.svg.mjs


var SvgLockMinor = function SvgLockMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10.75 13.05a1.5 1.5 0 1 0-1.5 0v.45a.75.75 0 0 0 1.5 0v-.45Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M6.25 7.095v-.345a3.75 3.75 0 1 1 7.5 0v.345a3.001 3.001 0 0 1 2.25 2.905v4a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3v-4a3 3 0 0 1 2.25-2.905Zm1.5-.345a2.25 2.25 0 0 1 4.5 0v.25h-4.5v-.25Zm-2.25 3.25a1.5 1.5 0 0 1 1.5-1.5h6a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5v-4Z"
  }));
};
SvgLockMinor.displayName = "LockMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/LogOutMinor.svg.mjs


var SvgLogOutMinor = function SvgLogOutMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M9.75 3a2.25 2.25 0 0 0-2.25 2.25.75.75 0 0 0 1.5 0 .75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v9.5a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75.75.75 0 0 0-1.5 0 2.25 2.25 0 0 0 2.25 2.25h4a2.25 2.25 0 0 0 2.25-2.25v-9.5a2.25 2.25 0 0 0-2.25-2.25h-4Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.25 10.75a.75.75 0 0 0 0-1.5h-5.69l.97-.97a.75.75 0 0 0-1.06-1.06l-2.25 2.25a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 0 0 1.06-1.06l-.97-.97h5.69Z"
  }));
};
SvgLogOutMinor.displayName = "LogOutMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/LogoBlockMajor.svg.mjs


var SvgLogoBlockMajor = function SvgLogoBlockMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M3.5 6.25a2.75 2.75 0 0 1 2.75-2.75.75.75 0 0 1 0 1.5c-.69 0-1.25.56-1.25 1.25a.75.75 0 0 1-1.5 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.25 16.5a2.75 2.75 0 0 1-2.75-2.75.75.75 0 0 1 1.5 0c0 .69.56 1.25 1.25 1.25a.75.75 0 0 1 0 1.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M16.5 6.25a2.75 2.75 0 0 0-2.75-2.75.75.75 0 0 0 0 1.5c.69 0 1.25.56 1.25 1.25a.75.75 0 0 0 1.5 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M16.5 13.75a2.75 2.75 0 0 1-2.75 2.75.75.75 0 0 1 0-1.5c.69 0 1.25-.56 1.25-1.25a.75.75 0 0 1 1.5 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M5 9a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M15.75 8.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11 5a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 0 0 1.5h2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11.75 15.75a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M6 9a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3v-2Zm3-1.5h2a1.5 1.5 0 0 1 1.5 1.5v2a1.5 1.5 0 0 1-1.5 1.5h-2a1.5 1.5 0 0 1-1.5-1.5v-2a1.5 1.5 0 0 1 1.5-1.5Z"
  }));
};
SvgLogoBlockMajor.displayName = "LogoBlockMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/MagicMajor.svg.mjs


var SvgMagicMajor = function SvgMagicMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M5.702 4.253a.625.625 0 0 1 1.096 0l.196.358c.207.378.517.688.895.895l.358.196a.625.625 0 0 1 0 1.097l-.358.196a2.25 2.25 0 0 0-.895.894l-.196.359a.625.625 0 0 1-1.096 0l-.196-.359a2.25 2.25 0 0 0-.895-.894l-.358-.196a.625.625 0 0 1 0-1.097l.358-.196a2.25 2.25 0 0 0 .895-.895l.196-.358Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M12.948 7.89c-.18-1.167-1.852-1.19-2.064-.029l-.03.164a3.756 3.756 0 0 1-3.088 3.031c-1.15.189-1.173 1.833-.03 2.054l.105.02a3.824 3.824 0 0 1 3.029 3.029l.032.165c.233 1.208 1.963 1.208 2.196 0l.025-.129a3.836 3.836 0 0 1 3.077-3.045c1.184-.216 1.12-1.928-.071-2.107a3.789 3.789 0 0 1-3.18-3.154Zm-.944 6.887a5.34 5.34 0 0 1 2.542-2.647 5.305 5.305 0 0 1-2.628-2.548 5.262 5.262 0 0 1-2.488 2.508 5.329 5.329 0 0 1 2.574 2.687Z"
  }));
};
SvgMagicMajor.displayName = "MagicMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/MagicMinor.svg.mjs


var SvgMagicMinor = function SvgMagicMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M5.702 4.253a.625.625 0 0 1 1.096 0l.196.358c.207.378.517.688.895.895l.358.196a.625.625 0 0 1 0 1.097l-.358.196a2.25 2.25 0 0 0-.895.894l-.196.359a.625.625 0 0 1-1.096 0l-.196-.359a2.25 2.25 0 0 0-.895-.894l-.358-.196a.625.625 0 0 1 0-1.097l.358-.196a2.25 2.25 0 0 0 .895-.895l.196-.358Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M12.948 7.89c-.18-1.167-1.852-1.19-2.064-.029l-.03.164a3.756 3.756 0 0 1-3.088 3.031c-1.15.189-1.173 1.833-.03 2.054l.105.02a3.824 3.824 0 0 1 3.029 3.029l.032.165c.233 1.208 1.963 1.208 2.196 0l.025-.129a3.836 3.836 0 0 1 3.077-3.045c1.184-.216 1.12-1.928-.071-2.107a3.789 3.789 0 0 1-3.18-3.154Zm-.944 6.887a5.34 5.34 0 0 1 2.542-2.647 5.305 5.305 0 0 1-2.628-2.548 5.262 5.262 0 0 1-2.488 2.508 5.329 5.329 0 0 1 2.574 2.687Z"
  }));
};
SvgMagicMinor.displayName = "MagicMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ManagedStoreMajor.svg.mjs


var SvgManagedStoreMajor = function SvgManagedStoreMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13.03 12.03a.75.75 0 1 0-1.06-1.06l-2.47 2.47-.97-.97a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.06 0l3-3Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M13.96 2.5h-7.92c-.448 0-.863.24-1.085.63l-1.79 3.133a1.25 1.25 0 0 0-.165.62v.867a2.75 2.75 0 0 0 1.5 2.45v5.55c0 .966.784 1.75 1.75 1.75h7.5a1.75 1.75 0 0 0 1.75-1.75v-5.55a2.75 2.75 0 0 0 1.5-2.45v-.867a1.25 1.25 0 0 0-.165-.62l-1.79-3.133a1.25 1.25 0 0 0-1.085-.63Zm-7.775 1.5h7.63l1.685 2.95v.8c0 .69-.56 1.25-1.25 1.25h-.25c-.69 0-1.25-.56-1.25-1.25v-.5a.75.75 0 0 0-1.5 0v.5a1.25 1.25 0 1 1-2.5 0v-.5a.75.75 0 0 0-1.5 0v.5c0 .69-.56 1.25-1.25 1.25h-.25c-.69 0-1.25-.56-1.25-1.25v-.8l1.685-2.95Zm5.815 5.637a2.742 2.742 0 0 0 2 .863v5.25a.25.25 0 0 1-.25.25h-7.5a.25.25 0 0 1-.25-.25v-5.25c.788 0 1.499-.331 2-.863a2.742 2.742 0 0 0 2 .863c.788 0 1.499-.331 2-.863Z"
  }));
};
SvgManagedStoreMajor.displayName = "ManagedStoreMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/MarkFulfilledMinor.svg.mjs


var SvgMarkFulfilledMinor = function SvgMarkFulfilledMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13.28 4.78a.75.75 0 0 0-1.06-1.06l-2.97 2.97-1.22-1.22a.75.75 0 0 0-1.06 1.06l1.75 1.75a.75.75 0 0 0 1.06 0l3.5-3.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M4.86 6.883a.75.75 0 0 1 .632.852l-.336 2.265h2.484a1.25 1.25 0 0 1 1.185.855l.159.474a.25.25 0 0 0 .237.171h1.558a.25.25 0 0 0 .237-.17l.159-.475a1.25 1.25 0 0 1 1.185-.855h2.484l-.336-2.265a.75.75 0 1 1 1.484-.22l.413 2.792c.063.425.095.853.095 1.282v1.661a3.25 3.25 0 0 1-3.25 3.25h-6.5a3.25 3.25 0 0 1-3.25-3.25v-1.66c0-.43.032-.858.094-1.283l.414-2.792a.75.75 0 0 1 .852-.632Zm.14 4.706v-.089h2.46l.1.303a1.75 1.75 0 0 0 1.66 1.197h1.56a1.75 1.75 0 0 0 1.66-1.197l.1-.303h2.46v1.75a1.75 1.75 0 0 1-1.75 1.75h-6.5a1.75 1.75 0 0 1-1.75-1.75v-1.66Z"
  }));
};
SvgMarkFulfilledMinor.displayName = "MarkFulfilledMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/MarkPaidMinor.svg.mjs


var SvgMarkPaidMinor = function SvgMarkPaidMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13.28 7.78a.75.75 0 0 0-1.06-1.06l-2.97 2.97-1.22-1.22a.75.75 0 0 0-1.06 1.06l1.75 1.75a.75.75 0 0 0 1.06 0l3.5-3.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M4 16a1.5 1.5 0 0 0 2.615 1.003l1.135-1.26 1.135 1.26a1.5 1.5 0 0 0 2.23 0l1.135-1.26 1.135 1.26a1.5 1.5 0 0 0 2.615-1.003v-11a2.5 2.5 0 0 0-2.5-2.5h-7a2.5 2.5 0 0 0-2.5 2.5v11Zm2.5-12a1 1 0 0 0-1 1v11l1.507-1.674a1 1 0 0 1 1.486 0l1.507 1.674 1.507-1.674a1 1 0 0 1 1.486 0l1.507 1.674v-11a1 1 0 0 0-1-1h-7Z"
  }));
};
SvgMarkPaidMinor.displayName = "MarkPaidMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/MarketingFilledMinor.svg.mjs


var SvgMarketingFilledMinor = function SvgMarketingFilledMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M5 10a5 5 0 0 1 10 0 1 1 0 1 0 2 0 7 7 0 1 0-7 7 1 1 0 1 0 0-2 5 5 0 0 1-5-5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11.29 9.84a1 1 0 0 0 1.98-.278 3.25 3.25 0 1 0-3.782 3.653 1 1 0 1 0 .347-1.97 1.25 1.25 0 1 1 1.455-1.405Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11.611 10.973a.5.5 0 0 0-.638.638l2.121 6.01a.5.5 0 0 0 .871.135l1.172-1.558 1.038 1.037a.5.5 0 0 0 .707 0l.353-.353a.5.5 0 0 0 0-.707l-1.037-1.038 1.558-1.172a.5.5 0 0 0-.135-.87l-6.01-2.122Z"
  }));
};
SvgMarketingFilledMinor.displayName = "MarketingFilledMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/MarketingMajor.svg.mjs


var SvgMarketingMajor = function SvgMarketingMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M4.75 10a5.25 5.25 0 0 1 10.5 0 .75.75 0 0 0 1.5 0 6.75 6.75 0 1 0-6.75 6.75.75.75 0 0 0 0-1.5 5.25 5.25 0 0 1-5.25-5.25Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11.537 9.805a.75.75 0 0 0 1.486-.208 3 3 0 1 0-3.492 3.372.75.75 0 1 0 .26-1.478 1.5 1.5 0 1 1 1.746-1.686Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11.61 10.973a.5.5 0 0 0-.637.638l2.121 6.01a.5.5 0 0 0 .871.135l1.172-1.558 1.038 1.037a.5.5 0 0 0 .707 0l.353-.353a.5.5 0 0 0 0-.707l-1.037-1.038 1.558-1.171a.5.5 0 0 0-.135-.872l-6.01-2.12Z"
  }));
};
SvgMarketingMajor.displayName = "MarketingMajor";



// EXTERNAL MODULE: ../polaris-icons/dist/icons/MarketingMinor.svg.mjs
var MarketingMinor_svg = __webpack_require__(55119);
;// CONCATENATED MODULE: ../polaris-icons/dist/icons/MarketsFilledMajor.svg.mjs


var SvgMarketsFilledMajor = function SvgMarketsFilledMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M8.887 5.582c.433-1.141.884-1.332 1.113-1.332.172 0 .432.084.747.58.321.502.6 1.295.781 2.341a1 1 0 1 0 1.97-.342 11.25 11.25 0 0 0-.417-1.685 5.776 5.776 0 0 1 2.072 2.301 1 1 0 0 0 1.79-.89 7.75 7.75 0 1 0-6.944 11.195 1 1 0 1 0 .001-2c-.23 0-.68-.19-1.113-1.332a8.077 8.077 0 0 1-.34-1.195c.472.018.958.027 1.453.027a1 1 0 1 0 0-2 35.04 35.04 0 0 1-1.713-.04 19.384 19.384 0 0 1-.022-2c.564.027 1.145.04 1.735.04a1 1 0 1 0 0-2 35.86 35.86 0 0 1-1.536-.032 8.839 8.839 0 0 1 .423-1.636Zm-1.968-.438a11.591 11.591 0 0 0-.455 1.914 14.585 14.585 0 0 1-1.275-.209 5.78 5.78 0 0 1 1.73-1.705Zm-.649 3.905a15.535 15.535 0 0 1-1.876-.332 5.768 5.768 0 0 0-.113 1.881c.46.167 1.125.319 1.978.433l.015.002a21.735 21.735 0 0 1-.004-1.984Zm-1.263 3.804a5.779 5.779 0 0 0 1.912 2.003 11.45 11.45 0 0 1-.434-1.782 16.878 16.878 0 0 1-1.478-.22Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M15.25 16h-2a.75.75 0 0 0 0 1.5h.75v.25a.75.75 0 0 0 1.5 0v-.264a2.25 2.25 0 0 0-.25-4.486h-.5a.75.75 0 0 1 0-1.5h2a.75.75 0 0 0 0-1.5h-.75v-.75a.75.75 0 0 0-1.5 0v.764a2.25 2.25 0 0 0 .25 4.486h.5a.75.75 0 0 1 0 1.5Z"
  }));
};
SvgMarketsFilledMajor.displayName = "MarketsFilledMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/MarketsMajor.svg.mjs


var SvgMarketsMajor = function SvgMarketsMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M8.653 5.493c.44-1.161.95-1.493 1.347-1.493.289 0 .616.159.958.695.346.542.632 1.37.816 2.433a.75.75 0 0 0 1.478-.256c-.146-.84-.36-1.621-.656-2.283a6.025 6.025 0 0 1 2.78 2.745.75.75 0 0 0 1.344-.668 7.5 7.5 0 1 0-6.72 10.834.75.75 0 0 0 0-1.5c-.396 0-.907-.332-1.347-1.493a8.862 8.862 0 0 1-.412-1.548c.566.027 1.155.041 1.759.041a.75.75 0 1 0 0-1.5c-.678 0-1.331-.018-1.947-.053a19.855 19.855 0 0 1-.025-2.499c.634.035 1.296.052 1.972.052a.75.75 0 0 0 0-1.5 35.3 35.3 0 0 1-1.827-.046c.111-.751.273-1.415.48-1.961Zm-1.402-.532c-.26.687-.452 1.493-.576 2.373-.724-.08-1.36-.188-1.88-.32a6.026 6.026 0 0 1 2.61-2.425 6.784 6.784 0 0 0-.154.372Zm-.72 3.866c-.875-.096-1.663-.234-2.318-.416a6.006 6.006 0 0 0-.163 2.367c.493.199 1.229.374 2.176.501l.314.04a21.132 21.132 0 0 1-.008-2.492Zm-1.989 3.67a6.024 6.024 0 0 0 2.862 2.914 6.807 6.807 0 0 1-.153-.372c-.243-.64-.425-1.383-.55-2.194-.231-.023-.457-.05-.675-.08a14.828 14.828 0 0 1-1.484-.269Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M15.25 16h-2a.75.75 0 0 0 0 1.5h.75v.25a.75.75 0 0 0 1.5 0v-.264a2.25 2.25 0 0 0-.25-4.486h-.5a.75.75 0 0 1 0-1.5h2a.75.75 0 0 0 0-1.5h-.75v-.75a.75.75 0 0 0-1.5 0v.764a2.25 2.25 0 0 0 .25 4.486h.5a.75.75 0 0 1 0 1.5Z"
  }));
};
SvgMarketsMajor.displayName = "MarketsMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/MaximizeMajor.svg.mjs


var SvgMaximizeMajor = function SvgMaximizeMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.75 3.5a.75.75 0 0 0 0 1.5h1.19l-3.22 3.22a.75.75 0 0 0 1.06 1.06l3.22-3.22v1.19a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-.75-.75h-3Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M7.25 16.5a.75.75 0 0 0 0-1.5h-1.19l3.22-3.22a.75.75 0 1 0-1.06-1.06l-3.22 3.22v-1.19a.75.75 0 0 0-1.5 0v3c0 .414.336.75.75.75h3Z"
  }));
};
SvgMaximizeMajor.displayName = "MaximizeMajor";



// EXTERNAL MODULE: ../polaris-icons/dist/icons/MaximizeMinor.svg.mjs
var MaximizeMinor_svg = __webpack_require__(43341);
;// CONCATENATED MODULE: ../polaris-icons/dist/icons/MeasurementMinor.svg.mjs


var SvgMeasurementMinor = function SvgMeasurementMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11.75 5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5h1.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M15.75 6.5a.75.75 0 0 1-.75-.75v-.5a.25.25 0 0 0-.25-.25h-.5a.75.75 0 0 1 0-1.5h.5c.966 0 1.75.784 1.75 1.75v.5a.75.75 0 0 1-.75.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M15.75 7.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.25 12a.75.75 0 0 1-.75-.75v-5.19l-.97.97a.75.75 0 0 1-1.06-1.06l2.25-2.25a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1-1.06 1.06l-.97-.97v5.19a.75.75 0 0 1-.75.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M8.75 13a.75.75 0 0 0 0 1.5h5.19l-.97.97a.75.75 0 1 0 1.06 1.06l2.25-2.25a.75.75 0 0 0 0-1.06l-2.25-2.25a.75.75 0 1 0-1.06 1.06l.97.97h-5.19Z"
  }));
};
SvgMeasurementMinor.displayName = "MeasurementMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/MentionMajor.svg.mjs


var SvgMentionMajor = function SvgMentionMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M7.738 4.987a5.5 5.5 0 0 1 7.762 5.013c0 .874-.227 1.44-.5 1.773a1.255 1.255 0 0 1-1 .477c-.639 0-.96-.222-1.162-.523-.236-.355-.374-.93-.374-1.727v-2.571a.75.75 0 0 0-1.28-.531c-.438-.3-1.012-.505-1.755-.505-1.159 0-1.952.6-2.422 1.352-.45.72-.614 1.58-.614 2.255 0 .674.164 1.536.614 2.255.47.752 1.263 1.352 2.422 1.352.95 0 1.655-.467 2.119-.937l.069-.072c.515.745 1.326 1.152 2.383 1.152.824 0 1.6-.347 2.157-1.023.55-.668.843-1.601.843-2.727a7 7 0 1 0-3.01 5.751.75.75 0 1 0-.854-1.232 5.5 5.5 0 1 1-5.398-9.532Zm3.276 5.877a7.04 7.04 0 0 1-.05-.864v-.976l-.033-.075c-.09-.204-.173-.392-.352-.598-.2-.228-.522-.458-1.15-.458-.556 0-.906.256-1.15.647-.265.424-.386.991-.386 1.46s.121 1.036.386 1.46c.244.39.594.647 1.15.647.42 0 .763-.199 1.052-.491a3.16 3.16 0 0 0 .534-.752Z"
  }));
};
SvgMentionMajor.displayName = "MentionMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/MergeMinor.svg.mjs


var SvgMergeMinor = function SvgMergeMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M5.75 17a.75.75 0 0 1-.75-.75v-1.695a3.75 3.75 0 0 1 1.587-3.064l2.134-1.506a1.25 1.25 0 0 0 .529-1.021v-4.001l-1.991 1.838a.75.75 0 1 1-1.018-1.102l3.25-3a.75.75 0 0 1 1.018 0l3.25 3a.75.75 0 1 1-1.018 1.102l-1.991-1.838v4a2.75 2.75 0 0 1-1.164 2.247l-2.134 1.506a2.25 2.25 0 0 0-.952 1.839v1.695a.75.75 0 0 1-.75.75Zm8.5 0a.75.75 0 0 1-.75-.75v-1.695a2.25 2.25 0 0 0-.953-1.839l-.854-.603a.75.75 0 1 1 .864-1.226l.856.604a3.75 3.75 0 0 1 1.587 3.064v1.695a.75.75 0 0 1-.75.75Z"
  }));
};
SvgMergeMinor.displayName = "MergeMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/MetafieldsFilledMinor.svg.mjs


var SvgMetafieldsFilledMinor = function SvgMetafieldsFilledMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M4.5 6.25a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1.25h3v-1.25a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1.25h1a1 1 0 0 1 1 1v6a.5.5 0 0 1-.5.5h-14a.5.5 0 0 1-.5-.5v-6a1 1 0 0 1 1-1h1v-1.25z"
  }));
};
SvgMetafieldsFilledMinor.displayName = "MetafieldsFilledMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/MetafieldsMajor.svg.mjs


var SvgMetafieldsMajor = function SvgMetafieldsMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M3 6.75a2.75 2.75 0 0 1 2.75-2.75h.25a.75.75 0 0 1 0 1.5h-.25c-.69 0-1.25.56-1.25 1.25v2.25a.75.75 0 0 1-.22.53l-.47.47.47.47c.141.14.22.331.22.53v2.25c0 .69.56 1.25 1.25 1.25h.25a.75.75 0 0 1 0 1.5h-.25a2.75 2.75 0 0 1-2.75-2.75v-1.94l-.78-.78a.75.75 0 0 1 0-1.06l.78-.78v-1.94Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M17 13.25a2.75 2.75 0 0 1-2.75 2.75h-.25a.75.75 0 0 1 0-1.5h.25c.69 0 1.25-.56 1.25-1.25v-2.25a.75.75 0 0 1 .22-.53l.47-.47-.47-.47a.75.75 0 0 1-.22-.53v-2.25c0-.69-.56-1.25-1.25-1.25h-.25a.75.75 0 0 1 0-1.5h.25a2.75 2.75 0 0 1 2.75 2.75v1.94l.78.78a.75.75 0 0 1 0 1.06l-.78.78v1.94Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.913 6.101a.75.75 0 1 0-1.326-.702l-4.5 8.5a.75.75 0 0 0 1.326.702l4.5-8.5Z"
  }));
};
SvgMetafieldsMajor.displayName = "MetafieldsMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/MetafieldsMinor.svg.mjs


var SvgMetafieldsMinor = function SvgMetafieldsMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M4 6v1.5h-.5a1 1 0 0 0-1 1v6a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5v-6a1 1 0 0 0-1-1h-.5v-1.5a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v1.5h-2v-1.5a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1zm1.5.5v1h2v-1h-2zm7 1h2v-1h-2v1zm-8.5 1.5v4.5h12v-4.5h-12z"
  }));
};
SvgMetafieldsMinor.displayName = "MetafieldsMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/MetaobjectMinor.svg.mjs


var SvgMetaobjectMinor = function SvgMetaobjectMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M4 6.5v-1.5a1 1 0 0 1 1-1h2.5a1 1 0 0 1 1 1v1.5h.5a1 1 0 0 1 1 1v3.5h1.5v-1.5a1 1 0 0 1 1-1h2.5a1 1 0 0 1 1 1v1.5h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1v-4c0-.086.01-.17.031-.25a1.002 1.002 0 0 1-.031-.25v-4a1 1 0 0 1 1-1h.5Zm1.5 0v-1h1.5v1h-1.5Zm-1.5 1.5v3h4.5v-3h-4.5Zm10.5 3h-1.5v-1h1.5v1Zm1.5 1.5v3h-12v-3h12Z"
  }));
};
SvgMetaobjectMinor.displayName = "MetaobjectMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/MetaobjectReferenceMinor.svg.mjs


var SvgMetaobjectReferenceMinor = function SvgMetaobjectReferenceMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M4 3.5v1.5h-.5a1 1 0 0 0-1 1v4c0 .086.01.17.031.25-.02.08-.031.164-.031.25v.75a.75.75 0 0 0 1.5 0v-.25h12v3.75h-6.25a.75.75 0 0 0 0 1.5h6.75a1 1 0 0 0 1-1v-4.75a1 1 0 0 0-1-1h-.5v-1.5a1 1 0 0 0-1-1h-2.5a1 1 0 0 0-1 1v1.5h-1.5v-3.5a1 1 0 0 0-1-1h-.5v-1.5a1 1 0 0 0-1-1h-2.5a1 1 0 0 0-1 1Zm1.5.5v1h1.5v-1h-1.5Zm3 2.5v3h-4.5v-3h4.5Zm4.5 3h1.5v-1h-1.5v1Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M4 15c-.69 0-1.25.56-1.25 1.25v.5a.75.75 0 0 1-1.5 0v-.5a2.75 2.75 0 0 1 2.75-2.75h1.44l-.47-.47a.75.75 0 1 1 1.06-1.06l1.75 1.75a.75.75 0 0 1 0 1.06l-1.75 1.75a.75.75 0 0 1-1.06-1.06l.47-.47h-1.44Z"
  }));
};
SvgMetaobjectReferenceMinor.displayName = "MetaobjectReferenceMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/MicrophoneMajor.svg.mjs


var SvgMicrophoneMajor = function SvgMicrophoneMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M10 3a3.25 3.25 0 0 0-3.25 3.25v2a3.25 3.25 0 0 0 6.5 0v-2a3.25 3.25 0 0 0-3.25-3.25Zm1.75 5.25a1.75 1.75 0 1 1-3.5 0v-2a1.75 1.75 0 1 1 3.5 0v2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M5.5 8a.75.75 0 0 0-1.5 0v.25c0 3.06 2.29 5.585 5.25 5.954v1.546h-1.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-1.25v-1.546a6.001 6.001 0 0 0 5.25-5.954v-.25a.75.75 0 0 0-1.5 0v.25a4.5 4.5 0 1 1-9 0v-.25Z"
  }));
};
SvgMicrophoneMajor.displayName = "MicrophoneMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/MinimizeMajor.svg.mjs


var SvgMinimizeMajor = function SvgMinimizeMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13.75 9.5a.75.75 0 0 0 0-1.5h-.69l3.22-3.22a.75.75 0 0 0-1.06-1.06l-3.22 3.22v-.69a.75.75 0 0 0-1.5 0v2.5c0 .414.336.75.75.75h2.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.25 10.5a.75.75 0 0 0 0 1.5h.69l-3.22 3.22a.75.75 0 1 0 1.06 1.06l3.22-3.22v.69a.75.75 0 0 0 1.5 0v-2.5a.75.75 0 0 0-.75-.75h-2.5Z"
  }));
};
SvgMinimizeMajor.displayName = "MinimizeMajor";



// EXTERNAL MODULE: ../polaris-icons/dist/icons/MinimizeMinor.svg.mjs
var MinimizeMinor_svg = __webpack_require__(51878);
;// CONCATENATED MODULE: ../polaris-icons/dist/icons/MinusMajor.svg.mjs


var SvgMinusMajor = function SvgMinusMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M6 10a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Z"
  }));
};
SvgMinusMajor.displayName = "MinusMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/MinusMinor.svg.mjs


var SvgMinusMinor = function SvgMinusMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M6 10a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Z"
  }));
};
SvgMinusMinor.displayName = "MinusMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/MobileAcceptMajor.svg.mjs


var SvgMobileAcceptMajor = function SvgMobileAcceptMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M15.78 5.97a.75.75 0 0 1 0 1.06l-6.5 6.5a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 1 1 1.06-1.06l2.72 2.72 5.97-5.97a.75.75 0 0 1 1.06 0Z"
  }));
};
SvgMobileAcceptMajor.displayName = "MobileAcceptMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/MobileBackArrowMajor.svg.mjs


var SvgMobileBackArrowMajor = function SvgMobileBackArrowMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M16.5 10a.75.75 0 0 1-.75.75h-9.69l2.72 2.72a.75.75 0 0 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 1 1 1.06 1.06l-2.72 2.72h9.69a.75.75 0 0 1 .75.75Z"
  }));
};
SvgMobileBackArrowMajor.displayName = "MobileBackArrowMajor";



// EXTERNAL MODULE: ../polaris-icons/dist/icons/MobileCancelMajor.svg.mjs
var MobileCancelMajor_svg = __webpack_require__(27002);
;// CONCATENATED MODULE: ../polaris-icons/dist/icons/MobileChevronMajor.svg.mjs


var SvgMobileChevronMajor = function SvgMobileChevronMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M11.764 5.204a.75.75 0 0 1 .032 1.06l-3.516 3.736 3.516 3.736a.75.75 0 1 1-1.092 1.028l-4-4.25a.75.75 0 0 1 0-1.028l4-4.25a.75.75 0 0 1 1.06-.032Z"
  }));
};
SvgMobileChevronMajor.displayName = "MobileChevronMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/MobileHamburgerMajor.svg.mjs


var SvgMobileHamburgerMajor = function SvgMobileHamburgerMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M3 4.75a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5h-12.5a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M3 10a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5h-12.5a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M3 15.25a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5h-12.5a.75.75 0 0 1-.75-.75Z"
  }));
};
SvgMobileHamburgerMajor.displayName = "MobileHamburgerMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/MobileHorizontalDotsMajor.svg.mjs


var SvgMobileHorizontalDotsMajor = function SvgMobileHorizontalDotsMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M17 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
  }));
};
SvgMobileHorizontalDotsMajor.displayName = "MobileHorizontalDotsMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/MobileMajor.svg.mjs


var SvgMobileMajor = function SvgMobileMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M8.5 13a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M7.5 3a2.75 2.75 0 0 0-2.75 2.75v8.5a2.75 2.75 0 0 0 2.75 2.75h5a2.75 2.75 0 0 0 2.75-2.75v-8.5a2.75 2.75 0 0 0-2.75-2.75h-5Zm-1.25 2.75c0-.69.56-1.25 1.25-1.25h5c.69 0 1.25.56 1.25 1.25v8.5c0 .69-.56 1.25-1.25 1.25h-5c-.69 0-1.25-.56-1.25-1.25v-8.5Z"
  }));
};
SvgMobileMajor.displayName = "MobileMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/MobilePlusMajor.svg.mjs


var SvgMobilePlusMajor = function SvgMobilePlusMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10.75 6.75a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z"
  }));
};
SvgMobilePlusMajor.displayName = "MobilePlusMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/MobileVerticalDotsMajor.svg.mjs


var SvgMobileVerticalDotsMajor = function SvgMobileVerticalDotsMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11.5 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11.5 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
  }));
};
SvgMobileVerticalDotsMajor.displayName = "MobileVerticalDotsMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/MonerisMajor.svg.mjs


var SvgMonerisMajor = function SvgMonerisMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M6.5 6.25a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-3Zm1.5 2.5v-2h4v2h-4Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.5 11.75a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11.25 11a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.5 14a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11.25 13.25a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M6.75 3a2.75 2.75 0 0 0-2.75 2.75v8.5a2.75 2.75 0 0 0 2.75 2.75h6.5a2.75 2.75 0 0 0 2.75-2.75v-8.5a2.75 2.75 0 0 0-2.75-2.75h-6.5Zm-1.25 2.75c0-.69.56-1.25 1.25-1.25h6.5c.69 0 1.25.56 1.25 1.25v8.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-8.5Z"
  }));
};
SvgMonerisMajor.displayName = "MonerisMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/MoneyFilledMinor.svg.mjs


var SvgMoneyFilledMinor = function SvgMoneyFilledMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M7.871 4h7.008c.395 0 .736 0 1.017.023.297.024.592.078.875.222.424.216.768.56.984.984.144.283.198.578.222.875.023.28.023.622.023 1.017v2.758c0 .395 0 .736-.023 1.017a2.29 2.29 0 0 1-.222.875 2.25 2.25 0 0 1-.983.984c-.284.144-.58.198-.876.222-.12.01-.253.016-.396.019 0 .346-.002.647-.023.9a2.29 2.29 0 0 1-.222.875 2.25 2.25 0 0 1-.984.984 2.29 2.29 0 0 1-.875.222c-.28.023-.622.023-1.017.023h-7.258c-.395 0-.736 0-1.017-.023a2.29 2.29 0 0 1-.875-.222 2.25 2.25 0 0 1-.984-.984 2.29 2.29 0 0 1-.222-.875c-.023-.28-.023-.622-.023-1.017v-2.758c0-.395 0-.736.023-1.017a2.29 2.29 0 0 1 .222-.875 2.25 2.25 0 0 1 .984-.984 2.29 2.29 0 0 1 .875-.222c.189-.015.405-.02.646-.022 0-.345.002-.645.023-.897a2.29 2.29 0 0 1 .222-.875 2.25 2.25 0 0 1 .984-.984 2.29 2.29 0 0 1 .875-.222c.28-.023.622-.023 1.017-.023Zm7.903 7.482c-.08.007-.17.01-.274.013v-1.374c0-.395 0-.736-.023-1.017a2.29 2.29 0 0 0-.222-.875 2.25 2.25 0 0 0-.984-.984 2.29 2.29 0 0 0-.875-.222c-.28-.023-.622-.023-1.017-.023h-6.129c0-.349.003-.587.018-.774.017-.204.045-.28.064-.316a.75.75 0 0 1 .328-.328c.037-.02.112-.047.316-.064.212-.017.492-.018.924-.018h6.95c.432 0 .712 0 .924.018.204.017.28.045.316.064a.75.75 0 0 1 .328.328c.02.037.047.112.064.316.017.212.018.492.018.924v2.7c0 .432 0 .712-.018.924-.017.204-.045.28-.064.317a.75.75 0 0 1-.328.327c-.037.02-.112.047-.316.064Zm-6.15 2.368c.356-.536.626-1.362.626-2.35s-.27-1.814-.627-2.35c-.364-.546-.702-.65-.873-.65-.17 0-.51.104-.873.65-.357.536-.627 1.362-.627 2.35s.27 1.814.627 2.35c.364.546.702.65.873.65.17 0 .51-.104.873-.65Z"
  }));
};
SvgMoneyFilledMinor.displayName = "MoneyFilledMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/MoneyMinor.svg.mjs


var SvgMoneyMinor = function SvgMoneyMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M14.879 4h-7.008c-.395 0-.736 0-1.017.023a2.29 2.29 0 0 0-.875.222 2.25 2.25 0 0 0-.984.984 2.29 2.29 0 0 0-.222.875c-.02.252-.023.552-.023.897a8.922 8.922 0 0 0-.646.022 2.29 2.29 0 0 0-.875.222 2.25 2.25 0 0 0-.984.984 2.29 2.29 0 0 0-.222.875c-.023.28-.023.622-.023 1.017v2.758c0 .395 0 .736.023 1.017.024.297.078.592.222.875.216.424.56.768.984.984.283.144.578.198.875.222.28.023.622.023 1.017.023h7.258c.395 0 .736 0 1.017-.023a2.29 2.29 0 0 0 .875-.222 2.25 2.25 0 0 0 .984-.984 2.29 2.29 0 0 0 .222-.875c.02-.253.023-.554.023-.9.143-.003.275-.009.396-.019a2.29 2.29 0 0 0 .875-.222 2.25 2.25 0 0 0 .984-.984 2.29 2.29 0 0 0 .222-.875c.023-.28.023-.622.023-1.017v-2.758c0-.395 0-.736-.023-1.017a2.29 2.29 0 0 0-.222-.875 2.25 2.25 0 0 0-.983-.984 2.304 2.304 0 0 0-.876-.222c-.28-.023-.622-.023-1.017-.023Zm-6.13 3h-2.499c0-.349.003-.587.018-.774.017-.204.045-.28.064-.316a.75.75 0 0 1 .328-.328c.037-.02.112-.047.316-.064.212-.017.492-.018.924-.018h6.95c.432 0 .712 0 .924.018.204.017.28.045.316.064a.75.75 0 0 1 .328.328c.02.037.047.112.064.316.017.212.018.492.018.924v2.7c0 .432 0 .712-.018.924-.017.204-.045.28-.064.317a.75.75 0 0 1-.328.327c-.037.02-.112.047-.316.064-.08.007-.17.01-.274.013v-1.374c0-.395 0-.736-.023-1.017a2.29 2.29 0 0 0-.222-.875 2.25 2.25 0 0 0-.984-.984 2.29 2.29 0 0 0-.875-.222c-.28-.023-.622-.023-1.017-.023h-3.631Zm-2.235 1.5h-1.364c-.432 0-.712 0-.924.018-.204.017-.28.045-.316.064a.75.75 0 0 0-.328.328c-.02.037-.047.112-.064.316-.017.212-.018.492-.018.924v2.7c0 .432 0 .712.018.924.017.204.045.28.064.317a.75.75 0 0 0 .328.327c.037.02.112.047.316.064.212.017.492.018.924.018h1.364c-.475-.796-.764-1.848-.764-3s.289-2.204.764-3Zm4.472 6h1.364c.432 0 .712 0 .924-.018.204-.017.28-.045.317-.064a.75.75 0 0 0 .327-.327c.02-.038.047-.113.064-.317.017-.212.018-.492.018-.924v-2.7c0-.432 0-.712-.018-.924-.017-.204-.045-.28-.064-.316a.75.75 0 0 0-.327-.328c-.038-.02-.113-.047-.317-.064a12.753 12.753 0 0 0-.924-.018h-1.364c.475.796.764 1.848.764 3s-.289 2.204-.764 3Zm-2.237-6h.002c.171 0 .509.105.872.65.357.536.627 1.362.627 2.35s-.27 1.814-.627 2.35c-.364.546-.702.65-.873.65-.17 0-.51-.104-.873-.65-.357-.536-.627-1.362-.627-2.35s.27-1.814.627-2.35c.363-.545.7-.65.872-.65Z"
  }));
};
SvgMoneyMinor.displayName = "MoneyMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/NatureMajor.svg.mjs


var SvgNatureMajor = function SvgNatureMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M7.75 3.5a4.25 4.25 0 0 0-3.606 6.5 4.25 4.25 0 0 0 5.856 5.856 4.25 4.25 0 0 0 5.856-5.856 4.25 4.25 0 0 0-5.856-5.856 4.233 4.233 0 0 0-2.25-.644Zm-2.75 4.25a2.75 2.75 0 0 1 4.25-2.305v1.909a2.756 2.756 0 0 0-1.896 1.896h-1.91a2.734 2.734 0 0 1-.444-1.5Zm.445 3a2.75 2.75 0 0 0 3.805 3.805v-1.909a2.756 2.756 0 0 1-1.896-1.896h-1.91Zm3.305-.75a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0Zm2 4.555v-1.909a2.756 2.756 0 0 0 1.896-1.896h1.91a2.75 2.75 0 0 1-3.805 3.805Zm3.805-5.305a2.75 2.75 0 0 0-3.805-3.805v1.909c.916.259 1.637.98 1.896 1.896h1.91Z"
  }));
};
SvgNatureMajor.displayName = "NatureMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/NavigationMajor.svg.mjs


var SvgNavigationMajor = function SvgNavigationMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M13.28 6.72a.75.75 0 0 1 .19.742l-1.25 4.25a.75.75 0 0 1-.508.508l-4.25 1.25a.75.75 0 0 1-.932-.932l1.25-4.25a.75.75 0 0 1 .508-.508l4.25-1.25a.75.75 0 0 1 .742.19Zm-4.176 2.384-.747 2.539 2.539-.747-1.792-1.792Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M3 10a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-5.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z"
  }));
};
SvgNavigationMajor.displayName = "NavigationMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/NoteMajor.svg.mjs


var SvgNoteMajor = function SvgNoteMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.55 7.25a.7.7 0 0 1 .7-.7h5.5a.7.7 0 0 1 0 1.4h-5.5a.7.7 0 0 1-.7-.7Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M7 9.05a.7.7 0 0 0 0 1.4h2.25a.7.7 0 1 0 0-1.4h-2.25Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M3.5 6.25a2.75 2.75 0 0 1 2.75-2.75h7.5a2.75 2.75 0 0 1 2.75 2.75v5.5a.75.75 0 0 1-.22.53l-4 4a.75.75 0 0 1-.53.22h-5.5a2.75 2.75 0 0 1-2.75-2.75v-7.5Zm2.75-1.25c-.69 0-1.25.56-1.25 1.25v7.5c0 .69.56 1.25 1.25 1.25h4.75v-2.25c0-.966.784-1.75 1.75-1.75h2.25v-4.75c0-.69-.56-1.25-1.25-1.25h-7.5Zm7.69 7.5h-1.19a.25.25 0 0 0-.25.25v1.19l1.44-1.44Z"
  }));
};
SvgNoteMajor.displayName = "NoteMajor";



// EXTERNAL MODULE: ../polaris-icons/dist/icons/NoteMinor.svg.mjs
var NoteMinor_svg = __webpack_require__(10924);
;// CONCATENATED MODULE: ../polaris-icons/dist/icons/NotificationFilledMajor.svg.mjs


var SvgNotificationFilledMajor = function SvgNotificationFilledMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "m7.252 14.424-2.446-.281c-1.855-.213-2.38-2.659-.778-3.616l.065-.038a2.887 2.887 0 0 0 1.407-2.48v-.509a4.5 4.5 0 0 1 9 0v.51c0 1.016.535 1.958 1.408 2.479l.065.038c1.602.957 1.076 3.403-.778 3.616l-2.543.292v.365a2.7 2.7 0 0 1-5.4 0v-.376Zm3.9.076h-2.4v.3a1.2 1.2 0 0 0 2.4 0v-.3Z"
  }));
};
SvgNotificationFilledMajor.displayName = "NotificationFilledMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/NotificationMajor.svg.mjs


var SvgNotificationMajor = function SvgNotificationMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "m7.252 14.424-2.446-.281c-1.855-.213-2.38-2.659-.778-3.616l.065-.038a2.887 2.887 0 0 0 1.407-2.48v-.509a4.5 4.5 0 0 1 9 0v.51c0 1.016.535 1.958 1.408 2.479l.065.038c1.602.957 1.076 3.403-.778 3.616l-2.543.292v.365a2.7 2.7 0 0 1-5.4 0v-.376Zm3.9.076h-2.4v.3a1.2 1.2 0 0 0 2.4 0v-.3Zm-3.152-1.5h4l3.024-.348a.452.452 0 0 0 .18-.837l-.065-.038a4.414 4.414 0 0 1-.747-.562 4.387 4.387 0 0 1-1.392-3.205v-.51a3 3 0 0 0-6 0v.51a4.387 4.387 0 0 1-2.138 3.767l-.065.038a.452.452 0 0 0 .18.838l3.023.347Z"
  }));
};
SvgNotificationMajor.displayName = "NotificationMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/OnlineStoreMajor.svg.mjs


var SvgOnlineStoreMajor = function SvgOnlineStoreMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M13.96 2.5c.448 0 .863.24 1.085.63l1.79 3.133c.108.188.165.402.165.62v.867c0 .965-.497 1.815-1.25 2.305v1.445a2.75 2.75 0 0 1-2.75 2.75h-.5v1.25h.75a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h.75v-1.25h-.5a2.75 2.75 0 0 1-2.75-2.75v-1.445a2.748 2.748 0 0 1-1.25-2.305v-.867c0-.218.057-.432.165-.62l1.79-3.133a1.25 1.25 0 0 1 1.085-.63h7.92Zm-7.775 1.5-1.685 2.95v.8c0 .69.56 1.25 1.25 1.25h.25c.69 0 1.25-.56 1.25-1.25v-.5a.75.75 0 0 1 1.5 0v.5a1.25 1.25 0 1 0 2.5 0v-.5a.75.75 0 0 1 1.5 0v.5c0 .69.56 1.25 1.25 1.25h.25c.69 0 1.25-.56 1.25-1.25v-.8l-1.685-2.95h-7.63Zm8.065 6.5h-.25a2.742 2.742 0 0 1-2-.863 2.742 2.742 0 0 1-2 .863 2.742 2.742 0 0 1-2-.863 2.742 2.742 0 0 1-2 .863h-.25v1c0 .69.56 1.25 1.25 1.25h6c.69 0 1.25-.56 1.25-1.25v-1Zm-5.25 5v-1.25h2v1.25h-2Z"
  }));
};
SvgOnlineStoreMajor.displayName = "OnlineStoreMajor";



// EXTERNAL MODULE: ../polaris-icons/dist/icons/OnlineStoreMinor.svg.mjs
var OnlineStoreMinor_svg = __webpack_require__(62197);
;// CONCATENATED MODULE: ../polaris-icons/dist/icons/OrderStatusMinor.svg.mjs


var SvgOrderStatusMinor = function SvgOrderStatusMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "m8.579 5.615-.867 1.409a1 1 0 0 1-.852.476h-1.86a.75.75 0 1 1 0-1.5h1.58l1.428-2.32c.486-.79 1.693-.55 1.84.367l.59 3.694.864-1.296a1 1 0 0 1 .832-.445h2.866a.75.75 0 0 1 0 1.5h-2.599l-1.423 2.135c-.505.757-1.676.501-1.82-.397l-.58-3.623Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "m5.156 10 .132-.89a.75.75 0 1 0-1.484-.22l-.21 1.417a8.75 8.75 0 0 0-.094 1.282v1.661a3.25 3.25 0 0 0 3.25 3.25h6.5a3.25 3.25 0 0 0 3.25-3.25v-1.66c0-.43-.032-.858-.095-1.283l-.21-1.417a.75.75 0 0 0-1.483.22l.132.89h-2.484a1.25 1.25 0 0 0-1.185.855l-.159.474a.25.25 0 0 1-.237.171h-1.558a.25.25 0 0 1-.237-.17l-.159-.475a1.25 1.25 0 0 0-1.185-.855h-2.484Zm-.155 1.5-.001.09v1.66c0 .967.784 1.75 1.75 1.75h6.5a1.75 1.75 0 0 0 1.75-1.75v-1.75h-2.46l-.1.303a1.75 1.75 0 0 1-1.66 1.197h-1.56a1.75 1.75 0 0 1-1.66-1.197l-.1-.303h-2.46Z"
  }));
};
SvgOrderStatusMinor.displayName = "OrderStatusMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/OrderedListMajor.svg.mjs


var SvgOrderedListMajor = function SvgOrderedListMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M7 5a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75Zm0 5a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75Zm0 5a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "m3.75 3.38-.2.15a.5.5 0 1 1-.6-.8l.6-.45a.75.75 0 0 1 1.2.6v3h.5a.5.5 0 0 1 0 1h-2a.5.5 0 1 1 0-1h.5v-2.5Zm-1 5.87a1.5 1.5 0 1 1 3 0v.05a1.5 1.5 0 0 1-.503 1.122l-.932.828h.935a.5.5 0 0 1 0 1h-1.592c-.69 0-1.014-.852-.499-1.31l1.423-1.265a.5.5 0 0 0 .168-.375v-.05a.5.5 0 0 0-1 0 .5.5 0 0 1-1 0Zm.5 3.88a.5.5 0 0 0 0 1h1.188a.32.32 0 0 1 .312.32.506.506 0 0 1-.24.43h-.76a.5.5 0 0 0 0 1h.76c.145.088.24.252.24.43a.32.32 0 0 1-.312.32h-1.188a.5.5 0 0 0 0 1h1.188a1.32 1.32 0 0 0 1.312-1.32 1.51 1.51 0 0 0-.321-.93 1.51 1.51 0 0 0 .321-.93 1.32 1.32 0 0 0-1.312-1.32h-1.188Z"
  }));
};
SvgOrderedListMajor.displayName = "OrderedListMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/OrderedListMinor.svg.mjs


var SvgOrderedListMinor = function SvgOrderedListMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M7 5a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75Zm0 5a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75Zm0 5a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "m3.75 3.38-.2.15a.5.5 0 1 1-.6-.8l.6-.45a.75.75 0 0 1 1.2.6v3h.5a.5.5 0 0 1 0 1h-2a.5.5 0 1 1 0-1h.5v-2.5Zm-1 5.87a1.5 1.5 0 1 1 3 0v.05a1.5 1.5 0 0 1-.503 1.122l-.932.828h.935a.5.5 0 0 1 0 1h-1.592c-.69 0-1.014-.852-.499-1.31l1.423-1.265a.5.5 0 0 0 .168-.375v-.05a.5.5 0 0 0-1 0 .5.5 0 0 1-1 0Zm.5 3.88a.5.5 0 0 0 0 1h1.188a.32.32 0 0 1 .312.32.506.506 0 0 1-.24.43h-.76a.5.5 0 0 0 0 1h.76c.145.088.24.252.24.43a.32.32 0 0 1-.312.32h-1.188a.5.5 0 0 0 0 1h1.188a1.32 1.32 0 0 0 1.312-1.32 1.51 1.51 0 0 0-.321-.93 1.51 1.51 0 0 0 .321-.93 1.32 1.32 0 0 0-1.312-1.32h-1.188Z"
  }));
};
SvgOrderedListMinor.displayName = "OrderedListMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/OrdersFilledMinor.svg.mjs


var SvgOrdersFilledMinor = function SvgOrdersFilledMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M4.255 5.847a2.75 2.75 0 0 1 2.72-2.347h6.05a2.75 2.75 0 0 1 2.72 2.347l.66 4.46c.063.425.095.853.095 1.282v1.661a3.25 3.25 0 0 1-3.25 3.25h-6.5a3.25 3.25 0 0 1-3.25-3.25v-1.66c0-.43.032-.858.094-1.283l.661-4.46Zm2.72-.847a1.25 1.25 0 0 0-1.236 1.067l-.583 3.933h2.484a1.25 1.25 0 0 1 1.185.855l.159.474a.25.25 0 0 0 .237.171h1.558a.25.25 0 0 0 .237-.17l.159-.475a1.25 1.25 0 0 1 1.185-.855h2.484l-.583-3.933a1.25 1.25 0 0 0-1.236-1.067h-6.05Z"
  }));
};
SvgOrdersFilledMinor.displayName = "OrdersFilledMinor";



// EXTERNAL MODULE: ../polaris-icons/dist/icons/OrdersMajor.svg.mjs
var OrdersMajor_svg = __webpack_require__(48720);
// EXTERNAL MODULE: ../polaris-icons/dist/icons/OrdersMinor.svg.mjs
var OrdersMinor_svg = __webpack_require__(1468);
;// CONCATENATED MODULE: ../polaris-icons/dist/icons/OrganizationMajor.svg.mjs


var SvgOrganizationMajor = function SvgOrganizationMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.75 9a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M8.75 9.75a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M9.5 6.5a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6 7.25a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M3.5 5.25c0-.966.784-1.75 1.75-1.75h6.25c.966 0 1.75.784 1.75 1.75v1.75h1.5c.966 0 1.75.784 1.75 1.75v6a1.75 1.75 0 0 1-1.75 1.75h-9.5a1.75 1.75 0 0 1-1.75-1.75v-9.5Zm4.25 9.75h1.25v-1.25a.25.25 0 0 0-.25-.25h-.75a.25.25 0 0 0-.25.25v1.25Zm2.75 0v-1.25a1.75 1.75 0 0 0-1.75-1.75h-.75a1.75 1.75 0 0 0-1.75 1.75v1.25h-1a.25.25 0 0 1-.25-.25v-9.5a.25.25 0 0 1 .25-.25h6.25a.25.25 0 0 1 .25.25v9.5a.25.25 0 0 1-.25.25h-1Zm2.75-.25v-6.25h1.5a.25.25 0 0 1 .25.25v6a.25.25 0 0 1-.25.25h-1.518a1.72 1.72 0 0 0 .018-.25Z"
  }));
};
SvgOrganizationMajor.displayName = "OrganizationMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/OutdentMajor.svg.mjs


var SvgOutdentMajor = function SvgOutdentMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M3.75 4a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5h-12.5Zm7 3.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5Zm-.75 4.25a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Zm-6.25 2.75a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5h-12.5Zm4.25-2.093c0 .473-.55.755-.96.493l-3.765-2.408a.579.579 0 0 1 0-.985l3.765-2.407c.41-.262.96.02.96.493v4.814Z"
  }));
};
SvgOutdentMajor.displayName = "OutdentMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/OutdentMinor.svg.mjs


var SvgOutdentMinor = function SvgOutdentMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M3.75 4a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5h-12.5Zm7 3.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5Zm-.75 4.25a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Zm-6.25 2.75a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5h-12.5Zm4.25-2.093c0 .473-.55.755-.96.493l-3.765-2.408a.579.579 0 0 1 0-.985l3.765-2.407c.41-.262.96.02.96.493v4.814Z"
  }));
};
SvgOutdentMinor.displayName = "OutdentMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/OutgoingMajor.svg.mjs


var SvgOutgoingMajor = function SvgOutgoingMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13.22 4.03a.75.75 0 0 1 1.06-1.06l2.5 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 1 1-1.06-1.06l1.22-1.22h-1.44a2.25 2.25 0 0 0-2.25 2.25v3.75a.75.75 0 0 1-1.5 0v-3.75a3.75 3.75 0 0 1 3.75-3.75h1.44l-1.22-1.22Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M15.75 13.25a.75.75 0 0 1 .75.75v.51a2.25 2.25 0 0 1-2.25 2.25h-8.5a2.25 2.25 0 0 1-2.25-2.25v-.51a.75.75 0 0 1 1.5 0v.51c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-.51a.75.75 0 0 1 .75-.75Z"
  }));
};
SvgOutgoingMajor.displayName = "OutgoingMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/PackageFilledMajor.svg.mjs


var SvgPackageFilledMajor = function SvgPackageFilledMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M15.884 6.625a2.75 2.75 0 0 0-.434-.858l-.8-1.067c-.33-.44-.85-.7-1.4-.7h-2.625v2.625h5.259Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M9.375 4h-2.524a1.75 1.75 0 0 0-1.358.646l-.877 1.08a2.75 2.75 0 0 0-.486.899h5.245v-2.625Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M4 7.875h12v6.375a1.75 1.75 0 0 1-1.75 1.75h-8.5a1.75 1.75 0 0 1-1.75-1.75v-6.375Zm2.5 4.875v-2a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75Z"
  }));
};
SvgPackageFilledMajor.displayName = "PackageFilledMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/PackageMajor.svg.mjs


var SvgPackageMajor = function SvgPackageMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M7 9a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-4Zm.5 3.5v-2h3v2h-3Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M5.315 4.45a2.25 2.25 0 0 1 1.836-.95h5.796a2.25 2.25 0 0 1 1.872 1.002l1.22 1.828c.3.452.461.983.461 1.526v6.894a1.75 1.75 0 0 1-1.75 1.75h-9.5a1.75 1.75 0 0 1-1.75-1.75v-6.863c0-.57.177-1.125.506-1.59l1.309-1.848Zm1.836.55a.75.75 0 0 0-.612.316l-.839 1.184h3.55v-1.5h-2.1Zm3.599 1.5h3.599l-.778-1.166a.75.75 0 0 0-.624-.334h-2.197v1.5Zm4.25 1.5h-10v6.75c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25v-6.75Z"
  }));
};
SvgPackageMajor.displayName = "PackageMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/PageDownMajor.svg.mjs


var SvgPageDownMajor = function SvgPageDownMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M5.5 5.75c0-.69.56-1.25 1.25-1.25h2.75v3.25c0 .966.784 1.75 1.75 1.75h3.25v.75a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-.22-.53l-5-5a.75.75 0 0 0-.53-.22h-3.5a2.75 2.75 0 0 0-2.75 2.75v8.5a2.75 2.75 0 0 0 2.75 2.75h3.25a.75.75 0 0 0 0-1.5h-3.25c-.69 0-1.25-.56-1.25-1.25v-8.5Zm7.94 2.25-2.44-2.44v2.19c0 .138.112.25.25.25h2.19Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M15 12.5a.75.75 0 0 0-1.5 0v2.94l-.72-.72a.75.75 0 1 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l2-2a.75.75 0 1 0-1.06-1.06l-.72.72v-2.94Z"
  }));
};
SvgPageDownMajor.displayName = "PageDownMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/PageMajor.svg.mjs


var SvgPageMajor = function SvgPageMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M6.75 4.5c-.69 0-1.25.56-1.25 1.25v8.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25v-4.75h-3.25a1.75 1.75 0 0 1-1.75-1.75v-3.25h-2.75Zm4.25 1.06 2.44 2.44h-2.19a.25.25 0 0 1-.25-.25v-2.19Zm-7 .19a2.75 2.75 0 0 1 2.75-2.75h3.5a.75.75 0 0 1 .53.22l5 5c.141.14.22.331.22.53v5.5a2.75 2.75 0 0 1-2.75 2.75h-6.5a2.75 2.75 0 0 1-2.75-2.75v-8.5Z"
  }));
};
SvgPageMajor.displayName = "PageMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/PageMinusMajor.svg.mjs


var SvgPageMinusMajor = function SvgPageMinusMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M5.5 5.75c0-.69.56-1.25 1.25-1.25h2.75v3.25c0 .966.784 1.75 1.75 1.75h3.25v1.75a.75.75 0 0 0 1.5 0v-2.5a.75.75 0 0 0-.22-.53l-5-5a.75.75 0 0 0-.53-.22h-3.5a2.75 2.75 0 0 0-2.75 2.75v8.5a2.75 2.75 0 0 0 2.75 2.75h4.25a.75.75 0 0 0 0-1.5h-4.25c-.69 0-1.25-.56-1.25-1.25v-8.5Zm7.94 2.25-2.44-2.44v2.19c0 .138.112.25.25.25h2.19Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.25 13.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4Z"
  }));
};
SvgPageMinusMajor.displayName = "PageMinusMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/PagePlusMajor.svg.mjs


var SvgPagePlusMajor = function SvgPagePlusMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M5.5 5.75c0-.69.56-1.25 1.25-1.25h2.75v3.25c0 .966.784 1.75 1.75 1.75h3.25v1.25a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-.22-.53l-5-5a.75.75 0 0 0-.53-.22h-3.5a2.75 2.75 0 0 0-2.75 2.75v8.5a2.75 2.75 0 0 0 2.75 2.75h4.25a.75.75 0 0 0 0-1.5h-4.25c-.69 0-1.25-.56-1.25-1.25v-8.5Zm7.94 2.25-2.44-2.44v2.19c0 .138.112.25.25.25h2.19Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14.5 13.25a.75.75 0 0 1 1.5 0v1.25h1.25a.75.75 0 0 1 0 1.5h-1.25v1.25a.75.75 0 0 1-1.5 0v-1.25h-1.25a.75.75 0 0 1 0-1.5h1.25v-1.25Z"
  }));
};
SvgPagePlusMajor.displayName = "PagePlusMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/PageReferenceMinor.svg.mjs


var SvgPageReferenceMinor = function SvgPageReferenceMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M5.5 5.75c0-.69.56-1.25 1.25-1.25h2.75v3.25c0 .966.784 1.75 1.75 1.75h3.25v1.25a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-.22-.53l-5-5a.75.75 0 0 0-.53-.22h-3.5a2.75 2.75 0 0 0-2.75 2.75v8.5a2.75 2.75 0 0 0 2.75 2.75h3.25a.75.75 0 0 0 0-1.5h-3.25c-.69 0-1.25-.56-1.25-1.25v-8.5Zm7.94 2.25-2.44-2.44v2.19c0 .138.112.25.25.25h2.19Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M15.22 17.28a.75.75 0 0 0 1.06-1.06l-1.97-1.97h.94a.75.75 0 0 0 0-1.5h-2.75a.75.75 0 0 0-.75.75v2.75a.75.75 0 0 0 1.5 0v-.94l1.97 1.97Z"
  }));
};
SvgPageReferenceMinor.displayName = "PageReferenceMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/PageUpMajor.svg.mjs


var SvgPageUpMajor = function SvgPageUpMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M5.5 5.75c0-.69.56-1.25 1.25-1.25h2.75v3.25c0 .966.784 1.75 1.75 1.75h3.25v.75a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-.22-.53l-5-5a.75.75 0 0 0-.53-.22h-3.5a2.75 2.75 0 0 0-2.75 2.75v8.5a2.75 2.75 0 0 0 2.75 2.75h3.75a.75.75 0 0 0 0-1.5h-3.75c-.69 0-1.25-.56-1.25-1.25v-8.5Zm7.94 2.25-2.44-2.44v2.19c0 .138.112.25.25.25h2.19Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M15 14.31v2.94a.75.75 0 0 1-1.5 0v-2.94l-.72.72a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-.72-.72Z"
  }));
};
SvgPageUpMajor.displayName = "PageUpMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/PaginationEndMinor.svg.mjs


var SvgPaginationEndMinor = function SvgPaginationEndMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M5.454 13.736a.75.75 0 1 0 1.092 1.028l4-4.25a.75.75 0 0 0 0-1.028l-4-4.25a.75.75 0 1 0-1.092 1.028l3.516 3.736-3.516 3.736Zm9.296-7.986a.75.75 0 0 0-1.5 0v8.5a.75.75 0 0 0 1.5 0v-8.5Z"
  }));
};
SvgPaginationEndMinor.displayName = "PaginationEndMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/PaginationStartMinor.svg.mjs


var SvgPaginationStartMinor = function SvgPaginationStartMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M6.75 5.75a.75.75 0 0 0-1.5 0v8.5a.75.75 0 0 0 1.5 0v-8.5Zm7.796.514a.75.75 0 1 0-1.092-1.028l-4 4.25a.75.75 0 0 0 0 1.028l4 4.25a.75.75 0 1 0 1.092-1.028l-3.516-3.736 3.516-3.736Z"
  }));
};
SvgPaginationStartMinor.displayName = "PaginationStartMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/PaintBrushMajor.svg.mjs


var SvgPaintBrushMajor = function SvgPaintBrushMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M11.677 4.737a.25.25 0 0 0-.354 0l-2.836 2.836a.25.25 0 0 0 0 .354l3.586 3.585a.25.25 0 0 0 .353.001l2.837-2.836a.25.25 0 0 0 0-.354l-1.763-1.762-.47.47a.75.75 0 0 1-1.06-1.061l.47-.47-.763-.763Zm-1.414-1.06-4.586 4.585a1.75 1.75 0 0 0 0 2.475l.262.263-1.97 1.97a2.164 2.164 0 0 0 3.061 3.06l1.97-1.97.263.263a1.75 1.75 0 0 0 2.474 0l4.586-4.586a1.75 1.75 0 0 0 0-2.475l-3.586-3.585a1.75 1.75 0 0 0-2.474 0Zm-3.526 5.646.526-.525c.049.066.104.13.164.19l3.586 3.585c.06.06.123.115.189.164l-.525.525a.25.25 0 0 1-.354 0l-3.586-3.585a.25.25 0 0 1 0-.354Zm.263 2.737-1.97 1.97a.664.664 0 1 0 .94.94l1.97-1.97-.94-.94Z"
  }));
};
SvgPaintBrushMajor.displayName = "PaintBrushMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/PaperCheckMajor.svg.mjs


var SvgPaperCheckMajor = function SvgPaperCheckMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13.496 5.354a.5.5 0 0 0 0-.707l-1.06-1.061a.5.5 0 0 0-.707 0l-.957.957 1.767 1.768.957-.957Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "m11.832 7.018-1.768-1.768-2.449 2.45a2 2 0 0 0-.585 1.406l-.003.698a.25.25 0 0 0 .251.251l.698-.002a2 2 0 0 0 1.407-.586l2.45-2.45Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M4.25 9.25c0-.69.56-1.25 1.25-1.25h.25a.75.75 0 1 0 0-1.5h-.25a2.75 2.75 0 0 0-2.75 2.75v4a2.75 2.75 0 0 0 2.75 2.75h9a2.75 2.75 0 0 0 2.75-2.75v-4.25a2.5 2.5 0 0 0-2.5-2.5.75.75 0 0 0 0 1.5 1 1 0 0 1 1 1v4.25c0 .69-.56 1.25-1.25 1.25h-9c-.69 0-1.25-.56-1.25-1.25v-4Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.5 11.5a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.25 12.25a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"
  }));
};
SvgPaperCheckMajor.displayName = "PaperCheckMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/PaperCheckMinor.svg.mjs


var SvgPaperCheckMinor = function SvgPaperCheckMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13.496 5.354a.5.5 0 0 0 0-.707l-1.06-1.061a.5.5 0 0 0-.707 0l-.957.957 1.767 1.768.957-.957Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "m11.832 7.018-1.768-1.768-2.449 2.45a2 2 0 0 0-.585 1.406l-.003.698a.25.25 0 0 0 .251.251l.698-.002a2 2 0 0 0 1.407-.586l2.45-2.45Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M4.25 9.25c0-.69.56-1.25 1.25-1.25h.25a.75.75 0 1 0 0-1.5h-.25a2.75 2.75 0 0 0-2.75 2.75v4a2.75 2.75 0 0 0 2.75 2.75h9a2.75 2.75 0 0 0 2.75-2.75v-4.25a2.5 2.5 0 0 0-2.5-2.5.75.75 0 0 0 0 1.5 1 1 0 0 1 1 1v4.25c0 .69-.56 1.25-1.25 1.25h-9c-.69 0-1.25-.56-1.25-1.25v-4Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.5 11.5a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.25 12.25a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"
  }));
};
SvgPaperCheckMinor.displayName = "PaperCheckMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/PasskeyFilledMinor.svg.mjs


var SvgPasskeyFilledMinor = function SvgPasskeyFilledMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.25 6.5a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.75 16.5h-8.415a1.05 1.05 0 0 1-.855-1.662l.561-.786a6.094 6.094 0 0 1 7.459-2.016v.864c0 .9.506 1.683 1.25 2.077v1.523Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M15.125 9a2.625 2.625 0 0 0-2.625 2.625v1.275a1.35 1.35 0 0 0 1.25 1.346v2.605a1 1 0 0 0 .163.548l.422.644a1 1 0 0 0 1.495.206l.552-.482a1 1 0 0 0-.026-1.53l-.119-.096a.936.936 0 0 0 .276-1.414l-.331-.405v-.072h.218a1.35 1.35 0 0 0 1.35-1.35v-1.275a2.625 2.625 0 0 0-2.625-2.625Zm.875 2.625a.875.875 0 1 1-1.75 0 .875.875 0 0 1 1.75 0Z"
  }));
};
SvgPasskeyFilledMinor.displayName = "PasskeyFilledMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/PasskeyMajor.svg.mjs


var SvgPasskeyMajor = function SvgPasskeyMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M9 3a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-2 3.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M4.827 14.955a4.773 4.773 0 0 1 4.173-2.455.75.75 0 0 0 0-1.5 6.273 6.273 0 0 0-5.484 3.227l-.437.786a1.338 1.338 0 0 0 1.17 1.987h6.001a.75.75 0 0 0 0-1.5h-5.725l.302-.545Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M15.125 12.5a.875.875 0 1 0 0-1.75.875.875 0 0 0 0 1.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M17.674 14.875a2.348 2.348 0 0 0 1.076-1.975v-1.275a3.625 3.625 0 0 0-7.25 0v1.275c0 .9.506 1.683 1.25 2.077v1.874a2 2 0 0 0 .327 1.095l.422.645a2 2 0 0 0 2.988.411l.553-.482a2 2 0 0 0 .494-2.362c.189-.395.242-.85.14-1.283Zm-3.471-.914a.4.4 0 0 0-.353-.211.85.85 0 0 1-.85-.85v-1.275a2.125 2.125 0 0 1 4.25 0v1.275c0 .47-.38.85-.85.85h-.218a.5.5 0 0 0-.5.5v.072a.5.5 0 0 0 .113.316l.331.405a.439.439 0 0 1 .093.206.437.437 0 0 1-.266.474.439.439 0 0 0-.11.742l.198.16a.5.5 0 0 1 .012.765l-.552.482a.5.5 0 0 1-.747-.102l-.422-.645a.5.5 0 0 1-.082-.274v-2.701a.399.399 0 0 0-.047-.19Z"
  }));
};
SvgPasskeyMajor.displayName = "PasskeyMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/PasskeyMinor.svg.mjs


var SvgPasskeyMinor = function SvgPasskeyMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M9 3a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-2 3.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M4.827 14.955a4.773 4.773 0 0 1 4.173-2.455.75.75 0 0 0 0-1.5 6.273 6.273 0 0 0-5.484 3.227l-.437.786a1.338 1.338 0 0 0 1.17 1.987h6.001a.75.75 0 0 0 0-1.5h-5.725l.302-.545Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M15.125 12.5a.875.875 0 1 0 0-1.75.875.875 0 0 0 0 1.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M17.674 14.875a2.348 2.348 0 0 0 1.076-1.975v-1.275a3.625 3.625 0 0 0-7.25 0v1.275c0 .9.506 1.683 1.25 2.077v1.874a2 2 0 0 0 .327 1.095l.422.645a2 2 0 0 0 2.988.411l.553-.482a2 2 0 0 0 .494-2.362c.189-.395.242-.85.14-1.283Zm-3.471-.914a.4.4 0 0 0-.353-.211.85.85 0 0 1-.85-.85v-1.275a2.125 2.125 0 0 1 4.25 0v1.275c0 .47-.38.85-.85.85h-.218a.5.5 0 0 0-.5.5v.072a.5.5 0 0 0 .113.316l.331.405a.439.439 0 0 1 .093.206.437.437 0 0 1-.266.474.439.439 0 0 0-.11.742l.198.16a.5.5 0 0 1 .012.765l-.552.482a.5.5 0 0 1-.747-.102l-.422-.645a.5.5 0 0 1-.082-.274v-2.701a.399.399 0 0 0-.047-.19Z"
  }));
};
SvgPasskeyMinor.displayName = "PasskeyMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/PauseCircleMajor.svg.mjs


var SvgPauseCircleMajor = function SvgPauseCircleMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M8 7.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.75 8a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0v-4Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"
  }));
};
SvgPauseCircleMajor.displayName = "PauseCircleMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/PauseMajor.svg.mjs


var SvgPauseMajor = function SvgPauseMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M8 7.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.75 8a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0v-4Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"
  }));
};
SvgPauseMajor.displayName = "PauseMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/PauseMinor.svg.mjs


var SvgPauseMinor = function SvgPauseMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M8 7.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.75 8a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0v-4Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"
  }));
};
SvgPauseMinor.displayName = "PauseMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/PaymentsFilledMajor.svg.mjs


var SvgPaymentsFilledMajor = function SvgPaymentsFilledMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.75 10.227v-2.227c-.778 0-1.044.005-1.283.062a2.25 2.25 0 0 0-.65.27c-.21.128-.398.31-.943.854l-.594.594a.75.75 0 0 1-1.06-1.06l.654-.655c.46-.46.78-.78 1.16-1.012a3.75 3.75 0 0 1 1.083-.45c.433-.103.888-.103 1.546-.103h.087v1.48h11v1.62c0 .84 0 1.26-.163 1.581a1.5 1.5 0 0 1-.656.655c-.32.164-.74.164-1.581.164h-2.705a1.92 1.92 0 0 1-.61.73l-2.73 1.965c-.566.407-.93.67-1.336.859-.358.167-.736.29-1.125.363-.44.083-.889.083-1.586.083h-1.508a.75.75 0 0 1 0-1.5h1.436c.794 0 1.095-.003 1.379-.057.266-.05.524-.134.77-.248.261-.122.508-.296 1.152-.76l2.67-1.923a.423.423 0 0 0-.35-.753l-4.875 1.219a.75.75 0 0 1-.364-1.456l1.182-.295Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M17.587 5.069c.152.298.162.683.163 1.411h-11c0-.728.011-1.113.163-1.411a1.5 1.5 0 0 1 .656-.656c.32-.163.74-.163 1.581-.163h6.2c.84 0 1.26 0 1.581.163a1.5 1.5 0 0 1 .655.656Z"
  }));
};
SvgPaymentsFilledMajor.displayName = "PaymentsFilledMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/PaymentsMajor.svg.mjs


var SvgPaymentsMajor = function SvgPaymentsMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M9.621 4h5.258c.395 0 .736 0 1.017.023.297.024.592.078.875.222.424.216.768.56.984.984.144.283.198.578.222.875.023.28.023.622.023 1.017v2.258c0 .395 0 .736-.023 1.017a2.29 2.29 0 0 1-.222.875 2.25 2.25 0 0 1-.983.984c-.284.144-.58.198-.876.222-.28.023-.622.023-1.017.023h-2.58c-.08.083-.169.16-.265.23l-2.73 1.965c-.565.407-.93.67-1.335.859-.358.167-.736.29-1.125.363-.44.083-.889.083-1.586.083h-1.508a.75.75 0 0 1 0-1.5h1.436c.794 0 1.095-.003 1.379-.057.266-.05.524-.134.77-.248.261-.122.508-.296 1.152-.76l2.67-1.923a.423.423 0 0 0-.35-.753l-4.875 1.219a.75.75 0 0 1-.364-1.456l.932-.233v-2.289c-.59.002-.821.011-1.033.062a2.25 2.25 0 0 0-.65.27c-.21.128-.398.31-.943.854l-.594.594a.75.75 0 0 1-1.06-1.06l.654-.655c.46-.46.78-.78 1.16-1.012a3.75 3.75 0 0 1 1.083-.45c.397-.095.813-.103 1.387-.103a6.79 6.79 0 0 1 .019-.396 2.29 2.29 0 0 1 .222-.875 2.25 2.25 0 0 1 .984-.984 2.29 2.29 0 0 1 .875-.222c.28-.023.622-.023 1.017-.023Zm5.229 7h-2.024a1.925 1.925 0 0 0-2.382-1.697l-2.444.611v-1.414h8.5v.85c0 .432 0 .712-.018.924-.017.204-.045.28-.064.317a.75.75 0 0 1-.328.327c-.037.02-.112.047-.316.064-.212.017-.492.018-.924.018Zm1.645-4.5h-8.49c.002-.104.006-.194.013-.274.017-.204.045-.28.064-.316a.75.75 0 0 1 .328-.328c.037-.02.112-.047.316-.064.212-.017.492-.018.924-.018h5.2c.432 0 .712 0 .924.018.204.017.28.045.316.064a.75.75 0 0 1 .328.328c.02.037.047.112.064.316.007.08.01.17.013.274Z"
  }));
};
SvgPaymentsMajor.displayName = "PaymentsMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/PersonalizedTextMajor.svg.mjs


var SvgPersonalizedTextMajor = function SvgPersonalizedTextMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M5.75 4a2.75 2.75 0 0 0-2.75 2.75v1.94l-.78.78a.75.75 0 0 0 0 1.06l.78.78v1.94a2.75 2.75 0 0 0 2.75 2.75h.25a.75.75 0 0 0 0-1.5h-.25c-.69 0-1.25-.56-1.25-1.25v-2.25a.75.75 0 0 0-.22-.53l-.47-.47.47-.47a.75.75 0 0 0 .22-.53v-2.25c0-.69.56-1.25 1.25-1.25h.25a.75.75 0 0 0 0-1.5h-.25Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14.25 16a2.75 2.75 0 0 0 2.75-2.75v-1.94l.78-.78a.75.75 0 0 0 0-1.06l-.78-.78v-1.94a2.75 2.75 0 0 0-2.75-2.75h-.25a.75.75 0 0 0 0 1.5h.25c.69 0 1.25.56 1.25 1.25v2.25c0 .199.079.39.22.53l.47.47-.47.47a.75.75 0 0 0-.22.53v2.25c0 .69-.56 1.25-1.25 1.25h-.25a.75.75 0 0 0 0 1.5h.25Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M7.75 7.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Zm2.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M8.163 13.368a2.069 2.069 0 0 1 3.674 0l.247.477a.75.75 0 1 0 1.332-.69l-.246-.476a3.569 3.569 0 0 0-6.34 0l-.246.476a.75.75 0 1 0 1.332.69l.247-.477Z"
  }));
};
SvgPersonalizedTextMajor.displayName = "PersonalizedTextMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/PhoneInMajor.svg.mjs


var SvgPhoneInMajor = function SvgPhoneInMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M6.751 3c-2.03 0-3.861 1.681-3.527 3.855.42 2.737 1.442 5.012 3.12 6.715 1.68 1.705 3.962 2.78 6.801 3.216 2.174.334 3.854-1.497 3.854-3.527v-.727a1.75 1.75 0 0 0-1.306-1.693l-1.9-.498a1.75 1.75 0 0 0-1.276.153l-1.067.576c-.352.19-.663.165-.85.034a7.184 7.184 0 0 1-1.694-1.71c-.133-.192-.155-.509.036-.86l.572-1.05.001-.002c.211-.39.266-.846.153-1.276l-.498-1.9a1.75 1.75 0 0 0-1.693-1.306h-.726Zm-2.045 3.627c-.169-1.102.76-2.127 2.045-2.127h.726a.25.25 0 0 1 .242.187l.498 1.9a.252.252 0 0 1-.022.182l-.57 1.047c-.378.693-.496 1.64.045 2.428a8.678 8.678 0 0 0 2.071 2.09c.784.548 1.731.429 2.422.056l1.067-.576a.25.25 0 0 1 .182-.022l1.9.498a.25.25 0 0 1 .187.242v.727c0 1.284-1.025 2.213-2.126 2.044-2.587-.397-4.55-1.356-5.96-2.786-1.41-1.431-2.323-3.392-2.707-5.89Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14.749 9.01a.75.75 0 0 0 0-1.5h-1.19l2.72-2.72a.75.75 0 0 0-1.06-1.06l-2.72 2.72v-1.19a.75.75 0 0 0-1.5 0v3c0 .414.336.75.75.75h3Z"
  }));
};
SvgPhoneInMajor.displayName = "PhoneInMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/PhoneMajor.svg.mjs


var SvgPhoneMajor = function SvgPhoneMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M6.75 4.5c-1.283 0-2.213 1.025-2.044 2.127.384 2.498 1.296 4.459 2.707 5.89 1.41 1.43 3.373 2.389 5.96 2.786 1.101.17 2.126-.76 2.126-2.044v-.727a.25.25 0 0 0-.187-.242l-1.9-.498a.25.25 0 0 0-.182.022l-1.067.576c-.69.373-1.638.492-2.422-.056a8.678 8.678 0 0 1-2.071-2.09c-.542-.787-.423-1.735-.045-2.428l.57-1.047a.252.252 0 0 0 .022-.182l-.498-1.9a.25.25 0 0 0-.242-.187h-.726Zm-3.526 2.355c-.334-2.174 1.497-3.856 3.527-3.855h.726a1.75 1.75 0 0 1 1.693 1.306l.498 1.9c.113.43.058.885-.153 1.276l-.001.002-.572 1.05c-.191.351-.169.668-.036.86a7.184 7.184 0 0 0 1.694 1.71c.187.13.498.156.85-.034l1.067-.576a1.75 1.75 0 0 1 1.276-.153l1.9.498a1.75 1.75 0 0 1 1.306 1.693v.727c0 2.03-1.68 3.86-3.854 3.527-2.838-.436-5.12-1.511-6.8-3.216-1.68-1.703-2.701-3.978-3.121-6.715Z"
  }));
};
SvgPhoneMajor.displayName = "PhoneMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/PhoneOutMajor.svg.mjs


var SvgPhoneOutMajor = function SvgPhoneOutMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M6.75 4.5c-1.283 0-2.213 1.025-2.044 2.127.384 2.498 1.296 4.459 2.707 5.89 1.41 1.43 3.373 2.389 5.96 2.786 1.101.17 2.126-.76 2.126-2.044v-.727a.25.25 0 0 0-.187-.242l-1.9-.498a.25.25 0 0 0-.182.022l-1.067.576c-.69.373-1.638.492-2.422-.056a8.678 8.678 0 0 1-2.071-2.09c-.542-.787-.423-1.735-.045-2.428l.57-1.047a.252.252 0 0 0 .022-.182l-.498-1.9a.25.25 0 0 0-.242-.187h-.726Zm-3.526 2.355c-.334-2.174 1.497-3.856 3.527-3.855h.726a1.75 1.75 0 0 1 1.693 1.306l.498 1.9c.113.43.058.885-.153 1.276l-.001.002-.572 1.05c-.191.351-.169.668-.036.86a7.184 7.184 0 0 0 1.694 1.71c.187.13.498.156.85-.034l1.067-.576a1.75 1.75 0 0 1 1.276-.153l1.9.498a1.75 1.75 0 0 1 1.306 1.693v.727c0 2.03-1.68 3.86-3.854 3.527-2.838-.436-5.12-1.511-6.8-3.216-1.68-1.703-2.701-3.978-3.121-6.715Zm8.775-2.595a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-1.19l-2.72 2.72a.75.75 0 0 1-1.06-1.06l2.72-2.72h-1.19a.75.75 0 0 1-.75-.75Z"
  }));
};
SvgPhoneOutMajor.displayName = "PhoneOutMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/PinMajor.svg.mjs


var SvgPinMajor = function SvgPinMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M6.5 5v.5c0 .495.24.934.61 1.207.22.163.374.436.294.698l-.838 2.741a.5.5 0 0 1-.478.354h-.088a1.5 1.5 0 0 0-1.5 1.5v1a1.5 1.5 0 0 0 1.5 1.5h8a1.5 1.5 0 0 0 1.5-1.5v-1a1.5 1.5 0 0 0-1.5-1.5h-.088a.5.5 0 0 1-.479-.354l-.837-2.74c-.08-.263.074-.536.295-.7.37-.272.609-.711.609-1.206v-.5a1.5 1.5 0 0 0-1.5-1.5h-4a1.5 1.5 0 0 0-1.5 1.5z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M8 5v.5c0-.001 0-.001 0 0 .489.362 1.18 1.227.839 2.343l-.839 2.741a2 2 0 0 1-1.912 1.416h-.088v1h8v-1h-.088a2 2 0 0 1-1.913-1.416l-.838-2.74c-.34-1.117.35-1.982.838-2.343l.001-.001v-.5h-4zm0 .502zm-1.5-.002v-.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5v.5c0 .495-.24.934-.61 1.207-.22.163-.374.436-.294.698l.838 2.741a.5.5 0 0 0 .478.354h.088a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-8a1.5 1.5 0 0 1-1.5-1.5v-1a1.5 1.5 0 0 1 1.5-1.5h.088a.5.5 0 0 0 .478-.354l.838-2.74c.08-.263-.074-.536-.295-.7a1.498 1.498 0 0 1-.609-1.206z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M8.928 13.265a.75.75 0 0 1 .572-.265h1a.75.75 0 0 1 .74.873l-.5 3a.75.75 0 0 1-1.48 0l-.5-3a.75.75 0 0 1 .168-.608z"
  }));
};
SvgPinMajor.displayName = "PinMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/PinMinor.svg.mjs


var SvgPinMinor = function SvgPinMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M6.5 5v.5c0 .495.24.934.61 1.207.22.163.374.436.294.698l-.838 2.741a.5.5 0 0 1-.478.354h-.088a1.5 1.5 0 0 0-1.5 1.5v1a1.5 1.5 0 0 0 1.5 1.5h8a1.5 1.5 0 0 0 1.5-1.5v-1a1.5 1.5 0 0 0-1.5-1.5h-.088a.5.5 0 0 1-.479-.354l-.837-2.74c-.08-.263.074-.536.295-.7.37-.272.609-.711.609-1.206v-.5a1.5 1.5 0 0 0-1.5-1.5h-4a1.5 1.5 0 0 0-1.5 1.5z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M8 5v.5c0-.001 0-.001 0 0 .489.362 1.18 1.227.839 2.343l-.839 2.741a2 2 0 0 1-1.912 1.416h-.088v1h8v-1h-.088a2 2 0 0 1-1.913-1.416l-.838-2.74c-.34-1.117.35-1.982.838-2.343l.001-.001v-.5h-4zm0 .502zm-1.5-.002v-.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5v.5c0 .495-.24.934-.61 1.207-.22.163-.374.436-.294.698l.838 2.741a.5.5 0 0 0 .478.354h.088a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-8a1.5 1.5 0 0 1-1.5-1.5v-1a1.5 1.5 0 0 1 1.5-1.5h.088a.5.5 0 0 0 .478-.354l.838-2.74c.08-.263-.074-.536-.295-.7a1.498 1.498 0 0 1-.609-1.206z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M8.928 13.265a.75.75 0 0 1 .572-.265h1a.75.75 0 0 1 .74.873l-.5 3a.75.75 0 0 1-1.48 0l-.5-3a.75.75 0 0 1 .168-.608z"
  }));
};
SvgPinMinor.displayName = "PinMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/PinUnfilledMajor.svg.mjs


var SvgPinUnfilledMajor = function SvgPinUnfilledMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "m8.763 6.48-1.108 4.988-1.17.032a.5.5 0 0 0-.485.5v.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-.5a.5.5 0 0 0-.485-.5l-1.17-.032-1.108-4.988.999-.539a.5.5 0 0 0 .264-.441v-.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5v.5a.5.5 0 0 0 .264.441l1 .539zm4.184.782a2 2 0 0 0 1.053-1.762v-.5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v.5a2 2 0 0 0 1.053 1.762l-.609 2.739a2 2 0 0 0-1.944 1.999v.5a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-.5a2 2 0 0 0-1.944-2l-.609-2.738z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M8.928 13.265a.75.75 0 0 1 .572-.265h1a.75.75 0 0 1 .74.873l-.5 3a.75.75 0 0 1-1.48 0l-.5-3a.75.75 0 0 1 .168-.608zm-2.178-3.265h2.5a.75.75 0 0 1 0 1.5h-2.5v-1.5z"
  }));
};
SvgPinUnfilledMajor.displayName = "PinUnfilledMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/PinUnfilledMinor.svg.mjs


var SvgPinUnfilledMinor = function SvgPinUnfilledMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M6.5 14.5h2.35l.408 2.856a.75.75 0 0 0 1.485 0l.407-2.856h2.35a2 2 0 0 0 2-2v-.5a2 2 0 0 0-1.944-2l-.609-2.738a2 2 0 0 0 1.053-1.762v-.5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v.5a2 2 0 0 0 1.053 1.762l-.609 2.739a2 2 0 0 0-1.944 1.999v.5a2 2 0 0 0 2 2Zm1.481-4.5h1.269a.75.75 0 0 1 0 1.5h-2.5v-.007l-.265.007a.5.5 0 0 0-.485.5v.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-.5a.5.5 0 0 0-.485-.5l-1.17-.032-1.108-4.988.999-.539a.5.5 0 0 0 .264-.441v-.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5v.5a.5.5 0 0 0 .264.441l1 .539-.783 3.52Z"
  }));
};
SvgPinUnfilledMinor.displayName = "PinUnfilledMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/PintrestMinor.svg.mjs


var SvgPintrestMinor = function SvgPintrestMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M4 8.347c0-2.787 2.153-5.347 6.208-5.347 3.26 0 5.792 2.184 5.792 5.103 0 3.045-2.042 5.495-4.875 5.495-.953 0-1.847-.465-2.153-1.014l-.586 2.1c-.212.767-.784 1.73-1.168 2.316a9.717 9.717 0 0 1-.643-.22c-.082-.699-.155-1.768.034-2.528.17-.69 1.101-4.392 1.101-4.392s-.28-.53-.28-1.311c0-1.23.756-2.146 1.699-2.146.802 0 1.188.566 1.188 1.244 0 .485-.21 1.123-.43 1.795-.124.378-.252.768-.348 1.147-.221.88.47 1.597 1.391 1.597 1.67 0 2.954-1.656 2.954-4.046 0-2.115-1.616-3.595-3.924-3.595-2.673 0-4.242 1.886-4.242 3.835 0 .76.31 1.573.7 2.016.076.088.087.164.064.254-.043.169-.118.456-.178.683l-.083.319c-.04.162-.136.195-.314.118-1.173-.514-1.907-2.127-1.907-3.423Z"
  }));
};
SvgPintrestMinor.displayName = "PintrestMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/PlanFilledMinor.svg.mjs


var SvgPlanFilledMinor = function SvgPlanFilledMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "m14.208 4.688 1.533-2.3a.25.25 0 0 0-.208-.388h-3.066a.25.25 0 0 0-.208.389l1.533 2.299a.25.25 0 0 0 .416 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M11.25 7c0-.69.56-1.25 1.25-1.25h3.25c.69 0 1.25.56 1.25 1.25v8.75c0 .69-.56 1.25-1.25 1.25h-11.5c-.69 0-1.25-.56-1.25-1.25v-2.75c0-.69.56-1.25 1.25-1.25h2.75v-1.75c0-.69.56-1.25 1.25-1.25h3v-1.75Zm1.5.25v2.25h1.5v-2.25h-1.5Zm-4.25 3h1.5v2.25h-1.5v-2.25Zm-4 3h1.5v2.25h-1.5v-2.25Z"
  }));
};
SvgPlanFilledMinor.displayName = "PlanFilledMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/PlanMajor.svg.mjs


var SvgPlanMajor = function SvgPlanMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "m14.208 4.688 1.533-2.3a.25.25 0 0 0-.208-.388h-3.066a.25.25 0 0 0-.208.389l1.533 2.299a.25.25 0 0 0 .416 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M11.25 7c0-.69.56-1.25 1.25-1.25h3.25c.69 0 1.25.56 1.25 1.25v8.75c0 .69-.56 1.25-1.25 1.25h-11.5c-.69 0-1.25-.56-1.25-1.25v-2.75c0-.69.56-1.25 1.25-1.25h2.75v-1.75c0-.69.56-1.25 1.25-1.25h3v-1.75Zm2.25 2.5v-2.25h2v8.25h-10.25v-2.25h3.25a.75.75 0 0 0 .75-.75v-2.25h3.5a.75.75 0 0 0 .75-.75Z"
  }));
};
SvgPlanMajor.displayName = "PlanMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/PlanMinor.svg.mjs


var SvgPlanMinor = function SvgPlanMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "m14.208 4.688 1.533-2.3a.25.25 0 0 0-.208-.388h-3.066a.25.25 0 0 0-.208.389l1.533 2.299a.25.25 0 0 0 .416 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M11.25 7c0-.69.56-1.25 1.25-1.25h3.25c.69 0 1.25.56 1.25 1.25v8.75c0 .69-.56 1.25-1.25 1.25h-11.5c-.69 0-1.25-.56-1.25-1.25v-2.75c0-.69.56-1.25 1.25-1.25h2.75v-1.75c0-.69.56-1.25 1.25-1.25h3v-1.75Zm2.25 2.5v-2.25h2v8.25h-10.25v-2.25h3.25a.75.75 0 0 0 .75-.75v-2.25h3.5a.75.75 0 0 0 .75-.75Z"
  }));
};
SvgPlanMinor.displayName = "PlanMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/PlayCircleMajor.svg.mjs


var SvgPlayCircleMajor = function SvgPlayCircleMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M13.875 10.65a.75.75 0 0 0 0-1.3l-5.25-3.03a.75.75 0 0 0-1.125.649v6.062a.75.75 0 0 0 1.125.65l5.25-3.032Zm-4.875 1.082v-3.464l3 1.732-3 1.732Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm-5.5 7a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Z"
  }));
};
SvgPlayCircleMajor.displayName = "PlayCircleMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/PlayMajor.svg.mjs


var SvgPlayMajor = function SvgPlayMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M15.375 8.485c1.167.674 1.167 2.358 0 3.031l-7.5 4.33c-1.167.674-2.625-.168-2.625-1.515v-8.66c0-1.348 1.458-2.19 2.625-1.516l7.5 4.33Zm-.75 1.732a.25.25 0 0 0 0-.433l-7.5-4.33a.25.25 0 0 0-.375.217v8.66a.25.25 0 0 0 .375.216l7.5-4.33Z"
  }));
};
SvgPlayMajor.displayName = "PlayMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/PlayMinor.svg.mjs


var SvgPlayMinor = function SvgPlayMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M15.375 8.485c1.167.674 1.167 2.358 0 3.031l-7.5 4.33c-1.167.674-2.625-.168-2.625-1.515v-8.66c0-1.348 1.458-2.19 2.625-1.516l7.5 4.33Zm-.75 1.732a.25.25 0 0 0 0-.433l-7.5-4.33a.25.25 0 0 0-.375.217v8.66a.25.25 0 0 0 .375.216l7.5-4.33Z"
  }));
};
SvgPlayMinor.displayName = "PlayMinor";



// EXTERNAL MODULE: ../polaris-icons/dist/icons/PlusMinor.svg.mjs
var PlusMinor_svg = __webpack_require__(2502);
;// CONCATENATED MODULE: ../polaris-icons/dist/icons/PointOfSaleMajor.svg.mjs


var SvgPointOfSaleMajor = function SvgPointOfSaleMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M9.5 13.5a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5h-1Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M4.604 4.907a1.75 1.75 0 0 1 1.716-1.407h7.36a1.75 1.75 0 0 1 1.716 1.407l.6 3a1.75 1.75 0 0 1-1.716 2.093h-1.272l.688 1.722.011.028h1.293c.966 0 1.75.784 1.75 1.75v1.5a1.75 1.75 0 0 1-1.75 1.75h-10a1.75 1.75 0 0 1-1.75-1.75v-1.5c0-.966.784-1.75 1.75-1.75h1.293a.728.728 0 0 1 .01-.028l.69-1.722h-1.273a1.75 1.75 0 0 1-1.716-2.093l.6-3Zm7.488 6.843h-4.184l.7-1.75h2.784l.7 1.75Zm-5.772-6.75a.25.25 0 0 0-.245.201l-.6 3a.25.25 0 0 0 .245.299h8.56a.25.25 0 0 0 .245-.299l-.6-3a.25.25 0 0 0-.245-.201h-7.36Zm-1.32 8.25a.25.25 0 0 0-.25.25v1.5c0 .138.112.25.25.25h10a.25.25 0 0 0 .25-.25v-1.5a.25.25 0 0 0-.25-.25h-10Z"
  }));
};
SvgPointOfSaleMajor.displayName = "PointOfSaleMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/PopularMajor.svg.mjs


var SvgPopularMajor = function SvgPopularMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M14.452 3.5h.096c.182 0 .371 0 .543.034a1.75 1.75 0 0 1 1.375 1.375c.035.172.034.361.034.543v9.096c0 .182 0 .371-.034.543a1.75 1.75 0 0 1-1.375 1.376 2.825 2.825 0 0 1-.543.033h-.096c-.182 0-.371 0-.543-.034a1.75 1.75 0 0 1-1.375-1.375 2.825 2.825 0 0 1-.034-.543v-9.096c0-.182 0-.371.034-.543a1.75 1.75 0 0 1 1.375-1.375c.172-.035.361-.034.543-.034Zm-.253 1.505a.25.25 0 0 0-.194.194l-.003.053a8.046 8.046 0 0 0-.002.248v9c0 .121 0 .194.002.248l.003.053a.25.25 0 0 0 .194.194l.053.003c.055.002.127.002.248.002s.193 0 .248-.002l.053-.003a.25.25 0 0 0 .194-.194l.003-.053a8.05 8.05 0 0 0 .002-.248v-9a8.046 8.046 0 0 0-.005-.3.25.25 0 0 0-.194-.195 8.217 8.217 0 0 0-.3-.005 8.221 8.221 0 0 0-.302.005Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M5.452 9h.096c.182 0 .371 0 .543.034a1.75 1.75 0 0 1 1.375 1.375c.035.172.034.361.034.543v3.596c0 .182 0 .371-.034.543a1.75 1.75 0 0 1-1.375 1.376 2.825 2.825 0 0 1-.543.033h-.096c-.182 0-.371 0-.543-.034a1.75 1.75 0 0 1-1.375-1.375 2.824 2.824 0 0 1-.034-.543v-3.596c0-.182 0-.371.034-.543a1.75 1.75 0 0 1 1.375-1.375c.172-.035.361-.034.543-.034Zm-.253 1.505a.25.25 0 0 0-.194.194 8.217 8.217 0 0 0-.005.3v3.501a8.221 8.221 0 0 0 .005.3.25.25 0 0 0 .194.195l.053.003c.055.002.127.002.248.002s.193 0 .248-.002l.053-.003a.25.25 0 0 0 .194-.194l.003-.053c.002-.054.002-.127.002-.248v-3.5a8.208 8.208 0 0 0-.005-.3.25.25 0 0 0-.194-.195 8.045 8.045 0 0 0-.3-.005 8.045 8.045 0 0 0-.302.005Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M10 6h-.048c-.182 0-.371 0-.543.034a1.75 1.75 0 0 0-1.375 1.375 2.824 2.824 0 0 0-.034.543v6.596c0 .182 0 .371.034.543a1.75 1.75 0 0 0 1.375 1.376c.172.034.361.033.543.033h.096c.182 0 .371 0 .543-.034a1.75 1.75 0 0 0 1.375-1.375c.035-.172.034-.36.034-.543v-6.596c0-.182 0-.371-.034-.543a1.75 1.75 0 0 0-1.375-1.375c-.172-.035-.361-.034-.543-.034h-.048Zm-.495 1.7a.25.25 0 0 1 .194-.195 8.216 8.216 0 0 1 .3-.005 8.217 8.217 0 0 1 .302.005.25.25 0 0 1 .194.194l.003.053c.002.055.002.127.002.248v6.5a8.05 8.05 0 0 1-.005.3.25.25 0 0 1-.194.195l-.053.003a8.046 8.046 0 0 1-.248.002c-.121 0-.193 0-.248-.002l-.053-.003a.25.25 0 0 1-.194-.194 8.221 8.221 0 0 1-.005-.3v-6.5a8.217 8.217 0 0 1 .005-.302v.002-.002Z"
  }));
};
SvgPopularMajor.displayName = "PopularMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/PositionBasedModelMinor.svg.mjs


var SvgPositionBasedModelMinor = function SvgPositionBasedModelMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M4.75 4.25a.75.75 0 0 0-1.5 0v11.5a.75.75 0 0 0 1.5 0v-11.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M16.75 4.25a.75.75 0 0 0-1.5 0v11.5a.75.75 0 0 0 1.5 0v-11.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M8 9a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.75 9.75a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0v-6Z"
  }));
};
SvgPositionBasedModelMinor.displayName = "PositionBasedModelMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/PriceLookupMinor.svg.mjs


var SvgPriceLookupMinor = function SvgPriceLookupMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M5.5 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M13.189 14.25a4.001 4.001 0 0 1-5.648-2h-.791a.75.75 0 0 1 0-1.5h.5c0-.729.195-1.412.535-2h-1.035a.75.75 0 0 1 0-1.5h2.562a4 4 0 0 1 5.033 6.034l1.935 1.936a.75.75 0 1 1-1.06 1.06l-2.031-2.03Zm.561-3.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M4.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M5.5 11.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.75 3.75a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Z"
  }));
};
SvgPriceLookupMinor.displayName = "PriceLookupMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/PrintMajor.svg.mjs


var SvgPrintMajor = function SvgPrintMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M8.2 5h3.6c.585 0 .933.001 1.191.022.158.013.224.03.242.036a.5.5 0 0 1 .21.209c.005.018.022.084.035.242.01.133.016.29.019.491h-6.994c.003-.201.008-.358.02-.491.012-.158.03-.224.035-.242a.5.5 0 0 1 .209-.21c.018-.005.084-.022.242-.035.258-.02.606-.022 1.191-.022Zm6.797 1 .001.08a1.6 1.6 0 0 1 .41.138 2 2 0 0 1 .874.874c.218.428.218.988.218 2.108v.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874c-.237.121-.516.175-.908.199v.46c0 .244 0 .509-.019.738-.02.26-.073.602-.254.956a2.5 2.5 0 0 1-1.092 1.092c-.354.18-.697.233-.956.254-.23.02-.494.02-.739.019h-2.88c-.245 0-.51 0-.739-.019a2.518 2.518 0 0 1-.956-.254 2.5 2.5 0 0 1-1.093-1.092 2.518 2.518 0 0 1-.253-.956c-.02-.23-.02-.494-.019-.739v-.46c-.392-.023-.67-.077-.908-.198a2 2 0 0 1-.874-.874c-.218-.428-.218-.988-.218-2.108v-.6c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874 1.6 1.6 0 0 1 .41-.139v-.079c.01-.675.049-1.08.216-1.408a2 2 0 0 1 .874-.874c.428-.218.988-.218 2.108-.218h3.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.167.328.206.733.215 1.408Zm-8.297 1.5h6.6c.585 0 .933.001 1.191.022.158.013.224.03.242.036a.5.5 0 0 1 .21.209c.005.018.022.084.035.242.02.258.022.606.022 1.191v.6c0 .585-.001.933-.022 1.191-.013.158-.03.224-.036.242a.5.5 0 0 1-.209.21 1.23 1.23 0 0 1-.233.034v-.591c0-.053 0-.165-.008-.272a1.753 1.753 0 0 0-.183-.658 1.75 1.75 0 0 0-.764-.765 1.752 1.752 0 0 0-.659-.183c-.106-.008-.22-.008-.272-.008h-5.227c-.054 0-.167 0-.273.008a1.752 1.752 0 0 0-.658.183 1.75 1.75 0 0 0-.765.765c-.14.273-.172.523-.183.658-.008.106-.008.22-.008.272v.591a1.23 1.23 0 0 1-.233-.035.5.5 0 0 1-.21-.209 1.255 1.255 0 0 1-.035-.242c-.02-.258-.022-.606-.022-1.191v-.6c0-.585.001-.933.022-1.191.013-.158.03-.224.036-.242a.5.5 0 0 1 .209-.21c.018-.005.084-.022.242-.035.258-.02.606-.022 1.191-.022Zm6.538-2.44-.003-.002.003.001Zm.203.202v.003-.003Zm-6.882 0v.003-.003Zm.203-.203h.003-.003Zm.265 5.577c-.027.054-.027.124-.027.264v2.5c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437c.214.109.494.109 1.054.109h2.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437c.109-.214.109-.494.109-1.054v-2.5c0-.14 0-.21-.027-.264a.251.251 0 0 0-.11-.109c-.053-.027-.123-.027-.263-.027h-5.2c-.14 0-.21 0-.264.027a.25.25 0 0 0-.109.11Zm.973 3.114a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm6.738-6.19Zm.203.202v.003-.003Zm0 3.476v-.003a.012.012 0 0 1 0 .003Zm-.203.203h-.003.003Zm-9.476 0h.003-.003Zm-.203-.203v-.003.003Zm0-3.476v.003-.003Zm.203-.203Zm3.238 3.691a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Z"
  }));
};
SvgPrintMajor.displayName = "PrintMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/PrintMinor.svg.mjs


var SvgPrintMinor = function SvgPrintMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M8 13.75a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M8.5 11.25a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "m14.997 6 .001.08a1.6 1.6 0 0 1 .41.138 2 2 0 0 1 .874.874c.218.428.218.988.218 2.108v.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874c-.237.121-.516.175-.908.199v.46c0 .244 0 .509-.019.738-.02.26-.073.602-.254.956a2.5 2.5 0 0 1-1.092 1.092c-.354.18-.697.233-.956.254-.23.02-.494.02-.739.019h-2.88c-.245 0-.51 0-.739-.019a2.518 2.518 0 0 1-.956-.254 2.5 2.5 0 0 1-1.093-1.092 2.518 2.518 0 0 1-.253-.956c-.02-.23-.02-.494-.019-.739v-.46c-.392-.023-.67-.077-.908-.198a2 2 0 0 1-.874-.874c-.218-.428-.218-.988-.218-2.108v-.6c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874 1.6 1.6 0 0 1 .41-.139v-.079c.01-.675.049-1.08.216-1.408a2 2 0 0 1 .874-.874c.428-.218.988-.218 2.108-.218h3.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.167.328.206.733.215 1.408Zm-6.797-1h3.6c.585 0 .933.001 1.191.022.158.013.224.03.242.036a.5.5 0 0 1 .21.209c.005.018.022.084.035.242.01.133.016.29.019.491h-6.994c.003-.201.008-.358.02-.491.012-.158.03-.224.035-.242a.5.5 0 0 1 .209-.21c.018-.005.084-.022.242-.035.258-.02.606-.022 1.191-.022Zm-1.5 2.5h6.6c.585 0 .933.001 1.191.022.158.013.224.03.242.036a.5.5 0 0 1 .21.209c.005.018.022.084.035.242.02.258.022.606.022 1.191v.6c0 .585-.001.933-.022 1.191-.013.158-.03.224-.036.242a.5.5 0 0 1-.209.21 1.23 1.23 0 0 1-.233.034v-.591c0-.053 0-.165-.008-.272a1.753 1.753 0 0 0-.183-.658 1.75 1.75 0 0 0-.764-.765 1.752 1.752 0 0 0-.659-.183c-.106-.008-.22-.008-.272-.008h-5.227c-.054 0-.167 0-.273.008a1.752 1.752 0 0 0-.658.183 1.75 1.75 0 0 0-.765.765c-.14.273-.172.523-.183.658-.008.106-.008.22-.008.272v.591a1.23 1.23 0 0 1-.233-.035.5.5 0 0 1-.21-.209 1.255 1.255 0 0 1-.035-.242c-.02-.258-.022-.606-.022-1.191v-.6c0-.585.001-.933.022-1.191.013-.158.03-.224.036-.242a.5.5 0 0 1 .209-.21c.018-.005.084-.022.242-.035.258-.02.606-.022 1.191-.022Zm6.538-2.44-.003-.002.003.001Zm.203.202v.003-.003Zm-6.882 0v.003-.003Zm.203-.203h.003-.003Zm.265 5.577c-.027.054-.027.124-.027.264v2.5c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437c.214.109.494.109 1.054.109h2.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437c.109-.214.109-.494.109-1.054v-2.5c0-.14 0-.21-.027-.264a.251.251 0 0 0-.11-.109c-.053-.027-.123-.027-.263-.027h-5.2c-.14 0-.21 0-.264.027a.25.25 0 0 0-.109.11Zm7.711-3.077Zm.203.203v.003-.003Zm0 3.476v-.003a.012.012 0 0 1 0 .003Zm-.203.203h-.003.003Zm-9.476 0h.003-.003Zm-.203-.203v-.003.003Zm0-3.476v.003-.003Zm.203-.203Z"
  }));
};
SvgPrintMinor.displayName = "PrintMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ProductCostMajor.svg.mjs


var SvgProductCostMajor = function SvgProductCostMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M8.575 4.649a3.75 3.75 0 0 1 2.7-1.149h1.975a3.25 3.25 0 0 1 3.25 3.25v2.5a.75.75 0 0 1-1.5 0v-2.5a1.75 1.75 0 0 0-1.75-1.75h-1.974a2.25 2.25 0 0 0-1.62.69l-4.254 4.417a1.25 1.25 0 0 0 .016 1.75l2.898 2.898a1 1 0 0 0 1.4.014l.451-.434a.75.75 0 1 1 1.04 1.08l-.45.434a2.5 2.5 0 0 1-3.502-.033l-2.898-2.898a2.75 2.75 0 0 1-.036-3.852l4.254-4.417Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13.25 11.357a1.876 1.876 0 0 0 .625 3.643h.75a.375.375 0 0 1 0 .75h-1.875a.75.75 0 0 0 0 1.5h.5v.25a.75.75 0 0 0 1.5 0v-.254a1.875 1.875 0 0 0-.125-3.746h-.75a.375.375 0 0 1 0-.75h1.875a.75.75 0 0 0 0-1.5h-1v-.25a.75.75 0 0 0-1.5 0v.357Z"
  }));
};
SvgProductCostMajor.displayName = "ProductCostMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ProductReferenceMinor.svg.mjs


var SvgProductReferenceMinor = function SvgProductReferenceMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M8.575 4.649a3.75 3.75 0 0 1 2.7-1.149h1.975a3.25 3.25 0 0 1 3.25 3.25v2.371c0 .766-.311 1.498-.863 2.029a.75.75 0 1 1-1.04-1.08c.258-.249.403-.591.403-.949v-2.371a1.75 1.75 0 0 0-1.75-1.75h-1.974a2.25 2.25 0 0 0-1.62.69l-4.254 4.417a1.25 1.25 0 0 0 .016 1.75l2.898 2.898a1 1 0 0 0 1.4.014l.451-.434a.75.75 0 1 1 1.04 1.08l-.45.434a2.5 2.5 0 0 1-3.502-.033l-2.898-2.898a2.75 2.75 0 0 1-.036-3.852l4.254-4.417Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M16.78 15.72a.75.75 0 0 1-1.06 1.06l-2.22-2.22v1.19a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75h3a.75.75 0 1 1 0 1.5h-1.19l2.22 2.22Z"
  }));
};
SvgProductReferenceMinor.displayName = "ProductReferenceMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ProductReturnsMinor.svg.mjs


var SvgProductReturnsMinor = function SvgProductReturnsMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M8.575 4.649a3.75 3.75 0 0 1 2.7-1.149h1.975a3.25 3.25 0 0 1 3.25 3.25v2.371c0 .766-.311 1.498-.863 2.029a.75.75 0 1 1-1.04-1.08c.258-.249.403-.591.403-.949v-2.371a1.75 1.75 0 0 0-1.75-1.75h-1.974a2.25 2.25 0 0 0-1.62.69l-4.254 4.417a1.25 1.25 0 0 0 .016 1.75l4.112 4.113a.75.75 0 1 1-1.06 1.06l-4.113-4.112a2.75 2.75 0 0 1-.036-3.852l4.254-4.417Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M17.25 12a.75.75 0 0 0-1.5 0v.5a1.75 1.75 0 0 1-1.75 1.75h-.94l.22-.22a.75.75 0 1 0-1.06-1.06l-1.5 1.5a.75.75 0 0 0 0 1.06l1.5 1.5a.75.75 0 1 0 1.06-1.06l-.22-.22h.94a3.25 3.25 0 0 0 3.25-3.25v-.5Z"
  }));
};
SvgProductReturnsMinor.displayName = "ProductReturnsMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ProductsFilledMinor.svg.mjs


var SvgProductsFilledMinor = function SvgProductsFilledMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M11.025 4h1.725a3.25 3.25 0 0 1 3.25 3.25v1.938a2.5 2.5 0 0 1-.765 1.8l-4.468 4.308a2.5 2.5 0 0 1-3.503-.032l-2.528-2.528a2.5 2.5 0 0 1-.032-3.503l4.161-4.315a3 3 0 0 1 2.16-.918Zm1.975 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }));
};
SvgProductsFilledMinor.displayName = "ProductsFilledMinor";



// EXTERNAL MODULE: ../polaris-icons/dist/icons/ProductsMajor.svg.mjs
var ProductsMajor_svg = __webpack_require__(21075);
// EXTERNAL MODULE: ../polaris-icons/dist/icons/ProductsMinor.svg.mjs
var ProductsMinor_svg = __webpack_require__(22399);
;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ProfileMajor.svg.mjs


var SvgProfileMajor = function SvgProfileMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M7 8.25a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M15.168 15.435a7.5 7.5 0 1 1-10.336-10.87 7.5 7.5 0 0 1 10.336 10.87Zm-9.83-1.659a6 6 0 1 1 9.326 0 7.03 7.03 0 0 0-4.664-1.776 7.03 7.03 0 0 0-4.663 1.776Zm1.086 1.043a5.973 5.973 0 0 0 3.576 1.181c1.34 0 2.577-.44 3.576-1.181a5.53 5.53 0 0 0-3.576-1.319 5.53 5.53 0 0 0-3.576 1.319Z"
  }));
};
SvgProfileMajor.displayName = "ProfileMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ProfileMinor.svg.mjs


var SvgProfileMinor = function SvgProfileMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M7 8.25a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M15.168 15.435a7.5 7.5 0 1 1-10.336-10.87 7.5 7.5 0 0 1 10.336 10.87Zm-9.83-1.659a6 6 0 1 1 9.326 0 7.03 7.03 0 0 0-4.664-1.776 7.03 7.03 0 0 0-4.663 1.776Zm1.086 1.043a5.973 5.973 0 0 0 3.576 1.181c1.34 0 2.577-.44 3.576-1.181a5.53 5.53 0 0 0-3.576-1.319 5.53 5.53 0 0 0-3.576 1.319Z"
  }));
};
SvgProfileMinor.displayName = "ProfileMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/PromoteFilledMinor.svg.mjs


var SvgPromoteFilledMinor = function SvgPromoteFilledMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M4.997 7.64a2.114 2.114 0 0 0 0 4.22l4.131.23a1 1 0 0 1 .57.218l4.115 3.292a.5.5 0 0 0 .812-.39v-10.92a.5.5 0 0 0-.812-.39l-4.115 3.292a1 1 0 0 1-.57.218l-4.131.23Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.5 13.196v2.804a1 1 0 0 0 1 1h.595a1 1 0 0 0 .995-.9l.248-2.479-.359-.287-2.479-.138Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M17.5 9.75a2 2 0 0 1-1.5 1.937v-3.874a2 2 0 0 1 1.5 1.937Z"
  }));
};
SvgPromoteFilledMinor.displayName = "PromoteFilledMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/PromoteMinor.svg.mjs


var SvgPromoteMinor = function SvgPromoteMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M3 9.75a2.643 2.643 0 0 1 2.496-2.639l3.793-.21a1 1 0 0 0 .492-.162l4.546-2.976a1 1 0 0 1 1.548.837v3.185a2 2 0 0 1 0 3.93v3.185a1 1 0 0 1-1.548.837l-4.189-2.742-.29 2.46a1.75 1.75 0 0 1-1.737 1.545h-.361a1.75 1.75 0 0 1-1.75-1.75v-2.833l-.504-.028a2.643 2.643 0 0 1-2.496-2.639Zm2.58-1.141a1.143 1.143 0 0 0 0 2.282l3.792.21c.438.025.863.164 1.23.405l3.773 2.47v-8.451l-3.773 2.469a2.5 2.5 0 0 1-1.23.404l-3.793.211Zm1.92 3.891v2.75c0 .138.112.25.25.25h.36a.25.25 0 0 0 .249-.22l.32-2.714-1.179-.066Z"
  }));
};
SvgPromoteMinor.displayName = "PromoteMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/QuestionMarkInverseMajor.svg.mjs


var SvgQuestionMarkInverseMajor = function SvgQuestionMarkInverseMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M10 7.25c-.69 0-1.25.56-1.25 1.25a.75.75 0 0 1-1.5 0 2.75 2.75 0 1 1 3.758 2.56.61.61 0 0 0-.226.147.154.154 0 0 0-.032.046.75.75 0 0 1-1.5-.003c0-.865.696-1.385 1.208-1.586a1.25 1.25 0 0 0-.458-2.414Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10 14.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"
  }));
};
SvgQuestionMarkInverseMajor.displayName = "QuestionMarkInverseMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/QuestionMarkInverseMinor.svg.mjs


var SvgQuestionMarkInverseMinor = function SvgQuestionMarkInverseMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M10 7.25c-.69 0-1.25.56-1.25 1.25a.75.75 0 0 1-1.5 0 2.75 2.75 0 1 1 3.758 2.56.61.61 0 0 0-.226.147.154.154 0 0 0-.032.046.75.75 0 0 1-1.5-.003c0-.865.696-1.385 1.208-1.586a1.25 1.25 0 0 0-.458-2.414Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10 14.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"
  }));
};
SvgQuestionMarkInverseMinor.displayName = "QuestionMarkInverseMinor";



// EXTERNAL MODULE: ../polaris-icons/dist/icons/QuestionMarkMajor.svg.mjs
var QuestionMarkMajor_svg = __webpack_require__(69003);
;// CONCATENATED MODULE: ../polaris-icons/dist/icons/QuestionMarkMinor.svg.mjs


var SvgQuestionMarkMinor = function SvgQuestionMarkMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M10 7.25c-.69 0-1.25.56-1.25 1.25a.75.75 0 0 1-1.5 0 2.75 2.75 0 1 1 3.758 2.56.61.61 0 0 0-.226.147.154.154 0 0 0-.032.046.75.75 0 0 1-1.5-.003c0-.865.696-1.385 1.208-1.586a1.25 1.25 0 0 0-.458-2.414Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10 14.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"
  }));
};
SvgQuestionMarkMinor.displayName = "QuestionMarkMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/QuickSaleMajor.svg.mjs


var SvgQuickSaleMajor = function SvgQuickSaleMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M4.25 3a.75.75 0 0 0 0 1.5h1.612a.25.25 0 0 1 .248.22l1.04 8.737a1.75 1.75 0 0 0 1.738 1.543h5.362a.75.75 0 0 0 0-1.5h-5.362a.25.25 0 0 1-.248-.22l-.093-.78h5.35a2.75 2.75 0 0 0 2.743-2.54l.358-4.652a.75.75 0 0 0-.748-.808h-8.656a1.75 1.75 0 0 0-1.732-1.5h-1.612Zm9.648 8h-5.53l-.595-5h7.667l-.296 3.846a1.25 1.25 0 0 1-1.246 1.154Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M2.75 6.5a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M2.75 9.5a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M2 13.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M15 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }));
};
SvgQuickSaleMajor.displayName = "QuickSaleMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ReadTimeMinor.svg.mjs


var SvgReadTimeMinor = function SvgReadTimeMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10.25 6a.75.75 0 0 0 0 1.5h2.5a.75.75 0 1 0 0-1.5h-2.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M9.5 9.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M5.75 3a1.75 1.75 0 0 0-1.75 1.75v10a2.25 2.25 0 0 0 2.25 2.25h9a.75.75 0 0 0 0-1.5h-.25v-1.668c.591-.281 1-.884 1-1.582v-7.5a1.75 1.75 0 0 0-1.75-1.75h-8.5Zm1.25 1.5h-1.25a.25.25 0 0 0-.25.25v7.878c.235-.083.487-.128.75-.128h.75v-8Zm1.5 8v-8h5.75a.25.25 0 0 1 .25.25v7.5a.25.25 0 0 1-.25.25h-5.75Zm-2.25 3a.75.75 0 0 1 0-1.5h7.25v1.5h-7.25Z"
  }));
};
SvgReadTimeMinor.displayName = "ReadTimeMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ReceiptMajor.svg.mjs


var SvgReceiptMajor = function SvgReceiptMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M7.75 5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 1 0 0-1.5h-4.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M7 8.75a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M7.75 11a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11 8.75a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11.75 11a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M4 16a1.5 1.5 0 0 0 2.615 1.003l1.135-1.26 1.135 1.26a1.5 1.5 0 0 0 2.23 0l1.135-1.26 1.135 1.26a1.5 1.5 0 0 0 2.615-1.003v-11a2.5 2.5 0 0 0-2.5-2.5h-7a2.5 2.5 0 0 0-2.5 2.5v11Zm2.5-12a1 1 0 0 0-1 1v11l1.507-1.674a1 1 0 0 1 1.486 0l1.507 1.674 1.507-1.674a1 1 0 0 1 1.486 0l1.507 1.674v-11a1 1 0 0 0-1-1h-7Z"
  }));
};
SvgReceiptMajor.displayName = "ReceiptMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/RecentSearchesMajor.svg.mjs


var SvgRecentSearchesMajor = function SvgRecentSearchesMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M9.75 6.5a.75.75 0 0 0-1.5 0v2.5c0 .284.16.544.415.67l1.5.75a.75.75 0 1 0 .67-1.34l-1.085-.544v-2.036Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M9 14.5c1.248 0 2.4-.416 3.323-1.117l2.897 2.897a.75.75 0 1 0 1.06-1.06l-2.897-2.897a5.5 5.5 0 1 0-4.383 2.177Zm0-1.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
  }));
};
SvgRecentSearchesMajor.displayName = "RecentSearchesMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/RedoMajor.svg.mjs


var SvgRedoMajor = function SvgRedoMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.53 3.72a.75.75 0 1 0-1.06 1.06l1.72 1.72h-3.94a5 5 0 0 0 0 10h1.5a.75.75 0 0 0 0-1.5h-1.5a3.5 3.5 0 1 1 0-7h3.94l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3Z"
  }));
};
SvgRedoMajor.displayName = "RedoMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ReferralCodeMajor.svg.mjs


var SvgReferralCodeMajor = function SvgReferralCodeMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M3 7.25a.75.75 0 0 0 0 1.5h.25v3.25a.75.75 0 0 0 1.5 0v-3.25a1.5 1.5 0 0 0-1.5-1.5h-.25Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M7 7.25a.75.75 0 0 0 0 1.5h.818l-.993 2.111a1.5 1.5 0 0 0 1.357 2.139h.818a.75.75 0 0 0 0-1.5h-.818l.993-2.111a1.5 1.5 0 0 0-1.357-2.139h-.818Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14.25 12.25a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11 7.25a.75.75 0 0 0 0 1.5h.818l-.31.66a1.5 1.5 0 0 0 .131 1.504l.414.586h-1.303a.75.75 0 0 0 0 1.5h1.303c1.216 0 1.926-1.371 1.225-2.365l-.414-.586.311-.66a1.5 1.5 0 0 0-1.357-2.139h-.818Z"
  }));
};
SvgReferralCodeMajor.displayName = "ReferralCodeMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ReferralMajor.svg.mjs


var SvgReferralMajor = function SvgReferralMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M4.5 8.75a3.25 3.25 0 0 1 3.25-3.25h3.75a.75.75 0 0 0 0-1.5h-3.75a4.75 4.75 0 0 0-4.75 4.75v.75c0 2.1 1.362 3.88 3.25 4.508v1.992a.75.75 0 0 0 1.196.603l3.178-2.353h1.626a4.75 4.75 0 0 0 4.75-4.75.75.75 0 0 0-1.5 0 3.25 3.25 0 0 1-3.25 3.25h-1.873a.75.75 0 0 0-.447.147l-2.18 1.614v-1.081a.75.75 0 0 0-.61-.737 3.251 3.251 0 0 1-2.64-3.193v-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13.75 4a.75.75 0 0 0 0 1.5h.69l-3.22 3.22a.75.75 0 0 0 1.06 1.06l3.22-3.22v.69a.75.75 0 0 0 1.5 0v-2.5a.75.75 0 0 0-.75-.75h-2.5Z"
  }));
};
SvgReferralMajor.displayName = "ReferralMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/RefreshMajor.svg.mjs


var SvgRefreshMajor = function SvgRefreshMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M3.5 9.25a.75.75 0 0 0 1.5 0 3 3 0 0 1 3-3h6.566l-1.123 1.248a.75.75 0 1 0 1.114 1.004l2.25-2.5a.75.75 0 0 0-.027-1.032l-2.25-2.25a.75.75 0 1 0-1.06 1.06l.97.97h-6.44a4.5 4.5 0 0 0-4.5 4.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M16.5 10.75a.75.75 0 0 0-1.5 0 3 3 0 0 1-3 3h-6.566l1.123-1.248a.75.75 0 1 0-1.114-1.004l-2.25 2.5a.75.75 0 0 0 .027 1.032l2.25 2.25a.75.75 0 0 0 1.06-1.06l-.97-.97h6.44a4.5 4.5 0 0 0 4.5-4.5Z"
  }));
};
SvgRefreshMajor.displayName = "RefreshMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/RefreshMinor.svg.mjs


var SvgRefreshMinor = function SvgRefreshMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M3.5 9.25a.75.75 0 0 0 1.5 0 3 3 0 0 1 3-3h6.566l-1.123 1.248a.75.75 0 1 0 1.114 1.004l2.25-2.5a.75.75 0 0 0-.027-1.032l-2.25-2.25a.75.75 0 1 0-1.06 1.06l.97.97h-6.44a4.5 4.5 0 0 0-4.5 4.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M16.5 10.75a.75.75 0 0 0-1.5 0 3 3 0 0 1-3 3h-6.566l1.123-1.248a.75.75 0 1 0-1.114-1.004l-2.25 2.5a.75.75 0 0 0 .027 1.032l2.25 2.25a.75.75 0 0 0 1.06-1.06l-.97-.97h6.44a4.5 4.5 0 0 0 4.5-4.5Z"
  }));
};
SvgRefreshMinor.displayName = "RefreshMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/RefundMajor.svg.mjs


var SvgRefundMajor = function SvgRefundMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13.25 11.25a.75.75 0 0 1-1.5 0v-.5a1.75 1.75 0 0 0-1.75-1.75h-.94l.72.72a.75.75 0 0 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06l2-2a.75.75 0 0 1 1.06 1.06l-.72.72h.94a3.25 3.25 0 0 1 3.25 3.25v.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M4 16a1.5 1.5 0 0 0 2.615 1.003l1.135-1.26 1.135 1.26a1.5 1.5 0 0 0 2.23 0l1.135-1.26 1.135 1.26a1.5 1.5 0 0 0 2.615-1.003v-11a2.5 2.5 0 0 0-2.5-2.5h-7a2.5 2.5 0 0 0-2.5 2.5v11Zm2.5-12a1 1 0 0 0-1 1v11l1.507-1.674a1 1 0 0 1 1.486 0l1.507 1.674 1.507-1.674a1 1 0 0 1 1.486 0l1.507 1.674v-11a1 1 0 0 0-1-1h-7Z"
  }));
};
SvgRefundMajor.displayName = "RefundMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/RefundMinor.svg.mjs


var SvgRefundMinor = function SvgRefundMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13.25 11.25a.75.75 0 0 1-1.5 0v-.5a1.75 1.75 0 0 0-1.75-1.75h-.94l.72.72a.75.75 0 0 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06l2-2a.75.75 0 0 1 1.06 1.06l-.72.72h.94a3.25 3.25 0 0 1 3.25 3.25v.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M4 16a1.5 1.5 0 0 0 2.615 1.003l1.135-1.26 1.135 1.26a1.5 1.5 0 0 0 2.23 0l1.135-1.26 1.135 1.26a1.5 1.5 0 0 0 2.615-1.003v-11a2.5 2.5 0 0 0-2.5-2.5h-7a2.5 2.5 0 0 0-2.5 2.5v11Zm2.5-12a1 1 0 0 0-1 1v11l1.507-1.674a1 1 0 0 1 1.486 0l1.507 1.674 1.507-1.674a1 1 0 0 1 1.486 0l1.507 1.674v-11a1 1 0 0 0-1-1h-7Z"
  }));
};
SvgRefundMinor.displayName = "RefundMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/RemoveProductMajor.svg.mjs


var SvgRemoveProductMajor = function SvgRemoveProductMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M8.575 4.649a3.75 3.75 0 0 1 2.7-1.149h1.975a3.25 3.25 0 0 1 3.25 3.25v2.371c0 .766-.311 1.498-.863 2.029a.75.75 0 1 1-1.04-1.08c.258-.249.403-.591.403-.949v-2.371a1.75 1.75 0 0 0-1.75-1.75h-1.974a2.25 2.25 0 0 0-1.62.69l-4.254 4.417a1.25 1.25 0 0 0 .016 1.75l2.898 2.898a1 1 0 0 0 1.4.014l.451-.434a.75.75 0 1 1 1.04 1.08l-.45.434a2.5 2.5 0 0 1-3.502-.033l-2.898-2.898a2.75 2.75 0 0 1-.036-3.852l4.254-4.417Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.25 12.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4Z"
  }));
};
SvgRemoveProductMajor.displayName = "RemoveProductMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/RepeatOrderMajor.svg.mjs


var SvgRepeatOrderMajor = function SvgRepeatOrderMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13 3.25a.75.75 0 0 1 .75-.75h.5a2.75 2.75 0 1 1 0 5.5h-3.94l.72.72a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06l2-2a.75.75 0 1 1 1.06 1.06l-.72.72h3.94a1.25 1.25 0 1 0 0-2.5h-.5a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M5.739 6.067a1.25 1.25 0 0 1 1.237-1.067h.274a.75.75 0 0 0 0-1.5h-.274a2.75 2.75 0 0 0-2.72 2.347l-.662 4.46a8.75 8.75 0 0 0-.094 1.282v1.661a3.25 3.25 0 0 0 3.25 3.25h6.5a3.25 3.25 0 0 0 3.25-3.25v-1.66c0-.43-.032-.858-.095-1.283l-.122-.828a.75.75 0 0 0-1.484.22l.045.301h-2.484a1.25 1.25 0 0 0-1.185.855l-.159.474a.25.25 0 0 1-.237.171h-1.558a.25.25 0 0 1-.237-.17l-.159-.475a1.25 1.25 0 0 0-1.185-.855h-2.484l.583-3.933Zm-.738 5.433-.001.09v1.66c0 .966.784 1.75 1.75 1.75h6.5a1.75 1.75 0 0 0 1.75-1.75v-1.75h-2.46l-.1.303a1.75 1.75 0 0 1-1.66 1.197h-1.56a1.75 1.75 0 0 1-1.66-1.197l-.1-.303h-2.46Z"
  }));
};
SvgRepeatOrderMajor.displayName = "RepeatOrderMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ReplaceMajor.svg.mjs


var SvgReplaceMajor = function SvgReplaceMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M13.324 3.5h.852c.258 0 .494 0 .692.016.213.018.446.057.676.175.33.168.598.435.765.765.118.23.157.463.175.676.016.198.016.434.016.692v.852c0 .258 0 .494-.016.692a1.775 1.775 0 0 1-.175.676 1.75 1.75 0 0 1-.765.765 1.77 1.77 0 0 1-.676.175c-.198.016-.434.016-.692.016h-.852c-.258 0-.494 0-.692-.016a1.774 1.774 0 0 1-.676-.175 1.75 1.75 0 0 1-.765-.765 1.775 1.775 0 0 1-.175-.676c-.016-.198-.016-.434-.016-.692v-.852c0-.258 0-.494.016-.692a1.77 1.77 0 0 1 .175-.676 1.75 1.75 0 0 1 .764-.765c.23-.118.464-.157.677-.175.198-.016.434-.016.692-.016Zm-.693 1.53h.001Zm.002-.001a.626.626 0 0 1 .121-.018c.13-.01.304-.011.596-.011h.8c.292 0 .467 0 .596.011a.626.626 0 0 1 .12.018.25.25 0 0 1 .105.104.638.638 0 0 1 .018.121c.01.13.011.304.011.596v.8c0 .292 0 .467-.011.596a.638.638 0 0 1-.018.12.25.25 0 0 1-.104.105.626.626 0 0 1-.121.018c-.13.01-.304.011-.596.011h-.8c-.292 0-.467 0-.596-.011a.626.626 0 0 1-.12-.018.25.25 0 0 1-.105-.104.638.638 0 0 1-.018-.121 8.374 8.374 0 0 1-.011-.596v-.8c0-.292 0-.467.011-.596a.638.638 0 0 1 .018-.12.25.25 0 0 1 .104-.105Zm-.103.102v.001Zm0 2.238v-.001Zm.1.101h.002Zm2.24 0h-.002Zm.1-.1v-.002Zm0-2.24v.002Zm-.102-.1h.001Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M6.676 16.5h-.852c-.258 0-.494 0-.692-.016a1.775 1.775 0 0 1-.676-.175 1.75 1.75 0 0 1-.765-.765 1.774 1.774 0 0 1-.175-.676c-.016-.198-.016-.434-.016-.692v-.852c0-.258 0-.494.016-.692a1.77 1.77 0 0 1 .175-.676 1.75 1.75 0 0 1 .765-.765c.23-.118.463-.158.676-.175.198-.016.434-.016.692-.016h.852c.258 0 .494 0 .692.016.213.018.446.057.676.175.33.167.597.435.765.764.118.23.157.464.175.677.016.198.016.434.016.692v.852c0 .258 0 .494-.016.692a1.774 1.774 0 0 1-.175.676 1.75 1.75 0 0 1-.765.765 1.77 1.77 0 0 1-.676.175c-.198.016-.434.016-.692.016Zm.693-1.53h-.001Zm-.002.001a.638.638 0 0 1-.121.018c-.13.01-.304.011-.596.011h-.8c-.292 0-.467 0-.596-.011a.638.638 0 0 1-.12-.018.25.25 0 0 1-.105-.104.626.626 0 0 1-.018-.121 8.337 8.337 0 0 1-.011-.596v-.8c0-.292 0-.467.011-.596a.626.626 0 0 1 .018-.12.25.25 0 0 1 .104-.105.638.638 0 0 1 .121-.018c.13-.01.304-.011.596-.011h.8c.292 0 .467 0 .596.011a.638.638 0 0 1 .12.018.25.25 0 0 1 .105.104.626.626 0 0 1 .018.121c.01.13.011.304.011.596v.8c0 .292 0 .467-.011.596a.626.626 0 0 1-.018.12.25.25 0 0 1-.104.105Zm.103-.102v-.001Zm0-2.238v.001Zm-.1-.101h-.002Zm-2.24 0h.002Zm-.1.1v.002Zm0 2.24v-.002Zm.102.1h-.001Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.97 4.53a.75.75 0 1 1 1.06-1.06l1.995 1.994a.758.758 0 0 1 .225.536v.007a.75.75 0 0 1-.22.523l-2 2a.75.75 0 0 1-1.06-1.06l.72-.72h-.24c-.572 0-.957 0-1.253.025-.287.023-.424.065-.514.111a1.25 1.25 0 0 0-.547.547c-.046.09-.088.227-.111.514-.024.296-.025.68-.025 1.253v.3a.75.75 0 0 1-1.5 0v-.33c0-.535 0-.98.03-1.345.03-.38.098-.736.27-1.073a2.75 2.75 0 0 1 1.202-1.202c.337-.172.693-.24 1.073-.27.365-.03.81-.03 1.345-.03h.27l-.72-.72Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13.803 13.225c-.296.024-.68.025-1.253.025h-.24l.72-.72a.75.75 0 0 0-1.06-1.06l-2 2a.748.748 0 0 0 .005 1.066l1.995 1.994a.75.75 0 1 0 1.06-1.06l-.72-.72h.27c.535 0 .98 0 1.345-.03.38-.03.736-.098 1.073-.27a2.751 2.751 0 0 0 1.202-1.201c.172-.338.24-.694.27-1.074.03-.365.03-.81.03-1.345v-.33a.75.75 0 0 0-1.5 0v.3c0 .572 0 .957-.025 1.252-.023.288-.065.425-.111.516a1.25 1.25 0 0 1-.546.546c-.091.046-.228.088-.515.111Z"
  }));
};
SvgReplaceMajor.displayName = "ReplaceMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ReplayMinor.svg.mjs


var SvgReplayMinor = function SvgReplayMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11.53 3.47a.75.75 0 1 0-1.06 1.06l1.72 1.72h-2.69a5 5 0 0 0 0 10h.5a4.75 4.75 0 0 0 4.75-4.75.75.75 0 0 0-1.5 0 3.25 3.25 0 0 1-3.25 3.25h-.5a3.5 3.5 0 1 1 0-7h2.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3Z"
  }));
};
SvgReplayMinor.displayName = "ReplayMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ReportFilledMinor.svg.mjs


var SvgReportFilledMinor = function SvgReportFilledMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M9 3h-2.75a1.75 1.75 0 0 0-1.75 1.75v10.5c0 .966.784 1.75 1.75 1.75h7.5a1.75 1.75 0 0 0 1.75-1.75v-5.795h-4.87a1.625 1.625 0 0 1-1.626-1.624l-.003-4.831Zm-1.25 9a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm4.5 0a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm-2.25-1.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5a.75.75 0 0 1 .75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M15.35 8.205h-4.72a.375.375 0 0 1-.376-.375l-.003-4.699c.212.087.407.216.572.382l4.164 4.164c.154.154.276.333.363.528Z"
  }));
};
SvgReportFilledMinor.displayName = "ReportFilledMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ReportMinor.svg.mjs


var SvgReportMinor = function SvgReportMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M8.5 12.25a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.25 11.5a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10.75 14.25v-3.5a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 1.5 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M6.75 2.5a2.75 2.75 0 0 0-2.75 2.75v9.5a2.75 2.75 0 0 0 2.75 2.75h6.5a2.75 2.75 0 0 0 2.75-2.75v-6.25a.75.75 0 0 0-.22-.53l-5.25-5.25a.75.75 0 0 0-.53-.22h-3.25Zm-1.25 2.75c0-.69.56-1.25 1.25-1.25h2.5v3.5c0 .966.784 1.75 1.75 1.75h3.5v5.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-9.5Zm7.94 2.5-2.69-2.69v2.44c0 .138.112.25.25.25h2.44Z"
  }));
};
SvgReportMinor.displayName = "ReportMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ReportsMajor.svg.mjs


var SvgReportsMajor = function SvgReportsMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M8.5 12.25a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.25 11.5a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10.75 14.25v-3.5a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 1.5 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M6.75 2.5a2.75 2.75 0 0 0-2.75 2.75v9.5a2.75 2.75 0 0 0 2.75 2.75h6.5a2.75 2.75 0 0 0 2.75-2.75v-6.25a.75.75 0 0 0-.22-.53l-5.25-5.25a.75.75 0 0 0-.53-.22h-3.25Zm-1.25 2.75c0-.69.56-1.25 1.25-1.25h2.5v3.5c0 .966.784 1.75 1.75 1.75h3.5v5.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-9.5Zm7.94 2.5-2.69-2.69v2.44c0 .138.112.25.25.25h2.44Z"
  }));
};
SvgReportsMajor.displayName = "ReportsMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ResetMinor.svg.mjs


var SvgResetMinor = function SvgResetMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M17 9.25a.75.75 0 0 1-1.5 0 3 3 0 0 0-3-3h-6.566l1.123 1.248a.75.75 0 1 1-1.114 1.004l-2.25-2.5a.75.75 0 0 1 .027-1.032l2.25-2.25a.75.75 0 0 1 1.06 1.06l-.97.97h6.44a4.5 4.5 0 0 1 4.5 4.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M3 10.75a.75.75 0 0 1 1.5 0 3 3 0 0 0 3 3h6.566l-1.123-1.248a.75.75 0 1 1 1.114-1.004l2.25 2.5a.75.75 0 0 1-.027 1.032l-2.25 2.25a.75.75 0 1 1-1.06-1.06l.97-.97h-6.44a4.5 4.5 0 0 1-4.5-4.5Z"
  }));
};
SvgResetMinor.displayName = "ResetMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ResourcesMajor.svg.mjs


var SvgResourcesMajor = function SvgResourcesMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M13.47 5.03a.75.75 0 0 1 1.06-1.06l1.267 1.267c.265.264.438.607.494.978l.709 4.73v1.805a3.25 3.25 0 0 1-6.5 0v-.462a3.993 3.993 0 0 0-1 0v.462a3.25 3.25 0 0 1-6.5 0v-1.806l.712-4.718a1.75 1.75 0 0 1 .496-.995l1.262-1.261a.75.75 0 0 1 1.06 1.06l-1.261 1.262a.25.25 0 0 0-.071.143l-.002.01-.574 3.805h3.128c.52 0 .988.227 1.308.588a5.494 5.494 0 0 1 1.884 0c.32-.36.787-.588 1.308-.588h3.13l-.573-3.813a.25.25 0 0 0-.07-.14l-1.267-1.267Zm-1.22 6.72h3.25v1a1.75 1.75 0 1 1-3.5 0v-.75a.25.25 0 0 1 .25-.25Zm-4.5 0h-3.25v1a1.75 1.75 0 1 0 3.5 0v-.75a.25.25 0 0 0-.25-.25Z"
  }));
};
SvgResourcesMajor.displayName = "ResourcesMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ReturnMinor.svg.mjs


var SvgReturnMinor = function SvgReturnMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10.75 12c.241 0 .334 0 .41-.004a3.25 3.25 0 0 0 3.086-3.087c.004-.075.004-.168.004-.409 0-.241 0-.334-.004-.41a3.25 3.25 0 0 0-3.087-3.086 9.616 9.616 0 0 0-.409-.004h-1.5a.75.75 0 0 1 0-1.5h1.524c.21 0 .342 0 .46.006a4.75 4.75 0 0 1 4.51 4.51c.006.118.006.25.006.46v.048c0 .21 0 .342-.006.46a4.75 4.75 0 0 1-4.51 4.51c-.118.006-.25.006-.46.006h-3.963l1.72 1.72a.75.75 0 1 1-1.061 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 1.06l-1.72 1.72h3.94Z"
  }));
};
SvgReturnMinor.displayName = "ReturnMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ReturnsMajor.svg.mjs


var SvgReturnsMajor = function SvgReturnsMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M15 11.25v-3.25h-10v6.75c0 .138.112.25.25.25h4a.75.75 0 0 1 0 1.5h-4a1.75 1.75 0 0 1-1.75-1.75v-6.863c0-.57.177-1.125.506-1.59l1.309-1.848a2.25 2.25 0 0 1 1.836-.949h5.796a2.25 2.25 0 0 1 1.872 1.002l1.22 1.828c.3.452.461.983.461 1.526v3.394a.75.75 0 0 1-1.5 0Zm-8.461-5.934a.75.75 0 0 1 .612-.316h2.099v1.5h-3.55l.839-1.184Zm7.81 1.184h-3.599v-1.5h2.197a.75.75 0 0 1 .624.334l.778 1.166Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M6 10a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-3Zm1.5.5v2h3v-2h-3Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M17.5 13a.75.75 0 0 0-1.5 0v.5a1.75 1.75 0 0 1-1.75 1.75h-.94l.22-.22a.75.75 0 1 0-1.06-1.06l-1.5 1.5a.75.75 0 0 0 0 1.06l1.5 1.5a.75.75 0 1 0 1.06-1.06l-.22-.22h.94a3.25 3.25 0 0 0 3.25-3.25v-.5Z"
  }));
};
SvgReturnsMajor.displayName = "ReturnsMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/RichTextMinor.svg.mjs


var SvgRichTextMinor = function SvgRichTextMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M5.5 3.5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2h-3Zm3 1.5h-3a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M3.5 15.75a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M4.25 11.5a.75.75 0 0 0 0 1.5h11.5a.75.75 0 0 0 0-1.5h-11.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11.25 8.75a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5h-3.75a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12 4.5a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5h-3.75Z"
  }));
};
SvgRichTextMinor.displayName = "RichTextMinor";



// EXTERNAL MODULE: ../polaris-icons/dist/icons/RiskMajor.svg.mjs
var RiskMajor_svg = __webpack_require__(65929);
;// CONCATENATED MODULE: ../polaris-icons/dist/icons/RiskMinor.svg.mjs


var SvgRiskMinor = function SvgRiskMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10 6.75a.75.75 0 0 1 .75.75v3.5a.75.75 0 1 1-1.5 0v-3.5a.75.75 0 0 1 .75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11 13.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M10 3.5c-1.045 0-1.784.702-2.152 1.447a449.26 449.26 0 0 1-2.005 3.847l-.028.052a403.426 403.426 0 0 0-2.008 3.856c-.372.752-.478 1.75.093 2.614.57.863 1.542 1.184 2.464 1.184h7.272c.922 0 1.895-.32 2.464-1.184.57-.864.465-1.862.093-2.614-.21-.424-1.113-2.147-2.004-3.847l-.032-.061a429.497 429.497 0 0 1-2.005-3.847c-.368-.745-1.107-1.447-2.152-1.447Zm-.808 2.112c.404-.816 1.212-.816 1.616 0 .202.409 1.112 2.145 2.022 3.88a418.904 418.904 0 0 1 2.018 3.875c.404.817 0 1.633-1.212 1.633h-7.272c-1.212 0-1.617-.816-1.212-1.633.202-.408 1.113-2.147 2.023-3.883a421.932 421.932 0 0 0 2.017-3.872Z"
  }));
};
SvgRiskMinor.displayName = "RiskMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/Rows2Major.svg.mjs


var SvgRows2Major = function SvgRows2Major(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M7.25 3.5a3.75 3.75 0 0 0-3.75 3.75v5.5a3.75 3.75 0 0 0 3.75 3.75h5.5a3.75 3.75 0 0 0 3.75-3.75v-5.5a3.75 3.75 0 0 0-3.75-3.75h-5.5Zm-2.25 7.25v2a2.25 2.25 0 0 0 2.25 2.25h5.5a2.25 2.25 0 0 0 2.25-2.25v-2h-10Zm10-1.5v-2a2.25 2.25 0 0 0-2.25-2.25h-5.5a2.25 2.25 0 0 0-2.25 2.25v2h10Z"
  }));
};
SvgRows2Major.displayName = "Rows2Major";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/SandboxMajor.svg.mjs


var SvgSandboxMajor = function SvgSandboxMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M9.605 3.362a.75.75 0 0 1 .79 0l5.25 3.25a.75.75 0 0 1 .345.763c.006.04.01.082.01.125v5.5a.75.75 0 0 1-.355.638l-5.25 3.25a.75.75 0 0 1-.79 0l-5.25-3.25a.75.75 0 0 1-.355-.638v-5.5c0-.043.004-.085.01-.125a.75.75 0 0 1 .345-.763l5.25-3.25Zm1.145 7.556 3.75-2.322v3.986l-3.75 2.322v-3.986Zm-1.5 0-3.75-2.322v3.986l3.75 2.322v-3.986Zm-3.075-3.668 3.825 2.368 3.825-2.368-3.825-2.368-3.825 2.368Z"
  }));
};
SvgSandboxMajor.displayName = "SandboxMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/SaveMinor.svg.mjs


var SvgSaveMinor = function SvgSaveMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M16.5 6.26a.75.75 0 0 1-1.5 0v-.51a.75.75 0 0 0-.75-.75h-8.5a.75.75 0 0 0-.75.75v.51a.75.75 0 0 1-1.5 0v-.51a2.25 2.25 0 0 1 2.25-2.25h8.5a2.25 2.25 0 0 1 2.25 2.25v.51Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10.75 7.51a.75.75 0 0 0-1.5 0v6.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72v-6.69Z"
  }));
};
SvgSaveMinor.displayName = "SaveMinor";



// EXTERNAL MODULE: ../polaris-icons/dist/icons/SearchMajor.svg.mjs
var SearchMajor_svg = __webpack_require__(54900);
// EXTERNAL MODULE: ../polaris-icons/dist/icons/SearchMinor.svg.mjs
var SearchMinor_svg = __webpack_require__(20569);
;// CONCATENATED MODULE: ../polaris-icons/dist/icons/SectionMajor.svg.mjs


var SvgSectionMajor = function SvgSectionMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M3.5 5.25c0-.966.784-1.75 1.75-1.75h1a.75.75 0 0 1 0 1.5h-1a.25.25 0 0 0-.25.25v1a.75.75 0 0 1-1.5 0v-1Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M3.5 9.25c0-.966.784-1.75 1.75-1.75h9.5c.966 0 1.75.784 1.75 1.75v1.5a1.75 1.75 0 0 1-1.75 1.75h-9.5a1.75 1.75 0 0 1-1.75-1.75v-1.5Zm1.75-.25a.25.25 0 0 0-.25.25v1.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25v-1.5a.25.25 0 0 0-.25-.25h-9.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M3.5 14.75c0 .966.784 1.75 1.75 1.75h1a.75.75 0 0 0 0-1.5h-1a.25.25 0 0 1-.25-.25v-1a.75.75 0 0 0-1.5 0v1Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14.75 3.5c.966 0 1.75.784 1.75 1.75v1a.75.75 0 0 1-1.5 0v-1a.25.25 0 0 0-.25-.25h-1a.75.75 0 0 1 0-1.5h1Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14.75 16.5a1.75 1.75 0 0 0 1.75-1.75v-1a.75.75 0 0 0-1.5 0v1a.25.25 0 0 1-.25.25h-1a.75.75 0 0 0 0 1.5h1Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11.75 4.25a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11 16.5a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 0 0 1.5h2Z"
  }));
};
SvgSectionMajor.displayName = "SectionMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/SecureMajor.svg.mjs


var SvgSecureMajor = function SvgSecureMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M8.28 8.683a.75.75 0 0 0-1.06 1.06l1.548 1.548a.75.75 0 0 0 1.06 0l2.963-2.962a.75.75 0 0 0-1.06-1.06l-2.433 2.431-1.018-1.017Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M11.093 2.914a1.75 1.75 0 0 0-2.186 0l-.317.253a15.25 15.25 0 0 1-3.217 1.976l-.847.384a1.71 1.71 0 0 0-1.01 1.628c.28 6.25 4.38 9.048 5.732 9.802.47.262 1.034.262 1.503 0 1.352-.753 5.454-3.55 5.734-9.783a1.71 1.71 0 0 0-1.002-1.623l-.9-.416a15.249 15.249 0 0 1-3.136-1.938l-.354-.283Zm-1.25 1.171a.25.25 0 0 1 .313 0l.354.283a16.749 16.749 0 0 0 3.445 2.129l.9.415a.213.213 0 0 1 .131.195c-.246 5.489-3.827 7.906-4.965 8.54a.042.042 0 0 1-.02.006c-.005 0-.012 0-.022-.006-1.136-.634-4.718-3.053-4.965-8.56-.003-.066.037-.15.133-.194l.846-.385a16.75 16.75 0 0 0 3.534-2.17l.317-.253Z"
  }));
};
SvgSecureMajor.displayName = "SecureMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/SelectMinor.svg.mjs


var SvgSelectMinor = function SvgSelectMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10.884 4.323a1.25 1.25 0 0 0-1.768 0l-2.646 2.647a.75.75 0 0 0 1.06 1.06l2.47-2.47 2.47 2.47a.75.75 0 1 0 1.06-1.06l-2.646-2.647Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "m13.53 13.03-2.646 2.647a1.25 1.25 0 0 1-1.768 0l-2.646-2.647a.75.75 0 0 1 1.06-1.06l2.47 2.47 2.47-2.47a.75.75 0 0 1 1.06 1.06Z"
  }));
};
SvgSelectMinor.displayName = "SelectMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/SendMajor.svg.mjs


var SvgSendMajor = function SvgSendMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "m4.798 9.657-1.964-5.374c-.306-.84.557-1.629 1.365-1.248l12.878 6.06a1 1 0 0 1 0 1.81l-12.878 6.06c-.808.38-1.671-.41-1.365-1.248l1.964-5.374a1 1 0 0 0 0-.686Zm1.409-.515-1.547-4.233 9.224 4.341h-7.64a2.507 2.507 0 0 0-.037-.108Zm.036 1.608a2.5 2.5 0 0 1-.036.108l-1.547 4.232 9.223-4.34h-7.64Z"
  }));
};
SvgSendMajor.displayName = "SendMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/SettingsFilledMinor.svg.mjs


var SvgSettingsFilledMinor = function SvgSettingsFilledMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M8.013 4.389c0-.767.621-1.389 1.389-1.389h1.196c.767 0 1.39.622 1.39 1.389v.66c0 .153.101.33.307.436.141.074.278.155.411.241.196.128.402.13.536.052l.576-.332a1.389 1.389 0 0 1 1.897.508l.599 1.037a1.39 1.39 0 0 1-.509 1.897l-.621.359c-.131.075-.232.249-.225.477a5.135 5.135 0 0 1-.004.427c-.012.233.09.412.223.489l.627.362c.665.384.892 1.233.509 1.897l-.599 1.037a1.39 1.39 0 0 1-1.897.508l-.672-.388c-.132-.076-.332-.076-.526.045a4.928 4.928 0 0 1-.325.185c-.206.108-.308.284-.308.437v.778a1.39 1.39 0 0 1-1.389 1.39h-1.196a1.389 1.389 0 0 1-1.39-1.39v-.778c0-.153-.102-.33-.307-.437a4.96 4.96 0 0 1-.325-.185c-.194-.121-.395-.12-.526-.045l-.672.388a1.39 1.39 0 0 1-1.898-.508l-.598-1.037a1.389 1.389 0 0 1 .509-1.897l.627-.362c.133-.077.235-.256.223-.49a5.03 5.03 0 0 1-.004-.426c.007-.228-.094-.401-.225-.477l-.621-.359a1.389 1.389 0 0 1-.509-1.897l.598-1.037a1.389 1.389 0 0 1 1.898-.508l.576.332c.133.078.34.076.535-.052a4.81 4.81 0 0 1 .412-.24c.205-.108.308-.284.308-.437v-.66Zm1.987 7.611a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
  }));
};
SvgSettingsFilledMinor.displayName = "SettingsFilledMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/SettingsMajor.svg.mjs


var SvgSettingsMajor = function SvgSettingsMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M12.5 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-1.5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M9.377 2.5c-.926 0-1.676.75-1.676 1.676v.688c0 .056-.043.17-.198.251-.153.08-.303.168-.448.262-.147.097-.268.076-.318.048l-.6-.346a1.676 1.676 0 0 0-2.29.613l-.622 1.08a1.676 1.676 0 0 0 .613 2.289l.648.374c.048.028.124.12.119.29a5.484 5.484 0 0 0 .005.465c.009.175-.07.27-.119.299l-.653.377a1.676 1.676 0 0 0-.613 2.29l.623 1.08a1.676 1.676 0 0 0 2.29.613l.7-.405c.048-.028.166-.048.312.043.115.071.233.139.353.202.155.08.198.195.198.251v.811c0 .926.75 1.676 1.676 1.676h1.246c.926 0 1.676-.75 1.676-1.676v-.81c0-.057.042-.171.197-.252.121-.063.239-.13.354-.202.146-.091.264-.07.312-.043l.7.405a1.676 1.676 0 0 0 2.29-.614l.623-1.08a1.676 1.676 0 0 0-.613-2.289l-.653-.377c-.05-.029-.128-.123-.119-.3a5.494 5.494 0 0 0 .005-.463c-.005-.171.07-.263.12-.291l.647-.374a1.676 1.676 0 0 0 .613-2.29l-.623-1.079a1.676 1.676 0 0 0-2.29-.613l-.6.346c-.049.028-.17.048-.318-.048a5.4 5.4 0 0 0-.448-.262c-.155-.081-.197-.195-.197-.251v-.688c0-.926-.75-1.676-1.676-1.676h-1.246Zm-.176 1.676c0-.097.078-.176.176-.176h1.246c.097 0 .176.079.176.176v.688c0 .728.462 1.298 1.003 1.58.11.058.219.122.323.19.517.337 1.25.458 1.888.09l.6-.346a.176.176 0 0 1 .24.064l.623 1.08a.176.176 0 0 1-.064.24l-.648.374c-.623.36-.888 1.034-.868 1.638a4.184 4.184 0 0 1-.004.337c-.032.615.23 1.31.867 1.677l.653.377a.176.176 0 0 1 .064.24l-.623 1.08a.176.176 0 0 1-.24.065l-.701-.405c-.624-.36-1.341-.251-1.855.069a3.91 3.91 0 0 1-.255.145c-.54.283-1.003.853-1.003 1.581v.811a.176.176 0 0 1-.176.176h-1.246a.176.176 0 0 1-.176-.176v-.81c0-.73-.462-1.3-1.003-1.582a3.873 3.873 0 0 1-.255-.146c-.514-.32-1.23-.428-1.855-.068l-.7.405a.176.176 0 0 1-.241-.065l-.623-1.08a.176.176 0 0 1 .064-.24l.653-.377c.637-.368.899-1.062.867-1.677a3.97 3.97 0 0 1-.004-.337c.02-.604-.245-1.278-.868-1.638l-.648-.374a.176.176 0 0 1-.064-.24l.623-1.08a.176.176 0 0 1 .24-.064l.6.346c.638.368 1.37.247 1.888-.09a3.85 3.85 0 0 1 .323-.19c.54-.282 1.003-.852 1.003-1.58v-.688Z"
  }));
};
SvgSettingsMajor.displayName = "SettingsMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/SettingsMinor.svg.mjs


var SvgSettingsMinor = function SvgSettingsMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M12.5 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-1.5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M9.377 2.5c-.926 0-1.676.75-1.676 1.676v.688c0 .056-.043.17-.198.251-.153.08-.303.168-.448.262-.147.097-.268.076-.318.048l-.6-.346a1.676 1.676 0 0 0-2.29.613l-.622 1.08a1.676 1.676 0 0 0 .613 2.289l.648.374c.048.028.124.12.119.29a5.484 5.484 0 0 0 .005.465c.009.175-.07.27-.119.299l-.653.377a1.676 1.676 0 0 0-.613 2.29l.623 1.08a1.676 1.676 0 0 0 2.29.613l.7-.405c.048-.028.166-.048.312.043.115.071.233.139.353.202.155.08.198.195.198.251v.811c0 .926.75 1.676 1.676 1.676h1.246c.926 0 1.676-.75 1.676-1.676v-.81c0-.057.042-.171.197-.252.121-.063.239-.13.354-.202.146-.091.264-.07.312-.043l.7.405a1.676 1.676 0 0 0 2.29-.614l.623-1.08a1.676 1.676 0 0 0-.613-2.289l-.653-.377c-.05-.029-.128-.123-.119-.3a5.494 5.494 0 0 0 .005-.463c-.005-.171.07-.263.12-.291l.647-.374a1.676 1.676 0 0 0 .613-2.29l-.623-1.079a1.676 1.676 0 0 0-2.29-.613l-.6.346c-.049.028-.17.048-.318-.048a5.4 5.4 0 0 0-.448-.262c-.155-.081-.197-.195-.197-.251v-.688c0-.926-.75-1.676-1.676-1.676h-1.246Zm-.176 1.676c0-.097.078-.176.176-.176h1.246c.097 0 .176.079.176.176v.688c0 .728.462 1.298 1.003 1.58.11.058.219.122.323.19.517.337 1.25.458 1.888.09l.6-.346a.176.176 0 0 1 .24.064l.623 1.08a.176.176 0 0 1-.064.24l-.648.374c-.623.36-.888 1.034-.868 1.638a4.184 4.184 0 0 1-.004.337c-.032.615.23 1.31.867 1.677l.653.377a.176.176 0 0 1 .064.24l-.623 1.08a.176.176 0 0 1-.24.065l-.701-.405c-.624-.36-1.341-.251-1.855.069a3.91 3.91 0 0 1-.255.145c-.54.283-1.003.853-1.003 1.581v.811a.176.176 0 0 1-.176.176h-1.246a.176.176 0 0 1-.176-.176v-.81c0-.73-.462-1.3-1.003-1.582a3.873 3.873 0 0 1-.255-.146c-.514-.32-1.23-.428-1.855-.068l-.7.405a.176.176 0 0 1-.241-.065l-.623-1.08a.176.176 0 0 1 .064-.24l.653-.377c.637-.368.899-1.062.867-1.677a3.97 3.97 0 0 1-.004-.337c.02-.604-.245-1.278-.868-1.638l-.648-.374a.176.176 0 0 1-.064-.24l.623-1.08a.176.176 0 0 1 .24-.064l.6.346c.638.368 1.37.247 1.888-.09a3.85 3.85 0 0 1 .323-.19c.54-.282 1.003-.852 1.003-1.58v-.688Z"
  }));
};
SvgSettingsMinor.displayName = "SettingsMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ShareIosMinor.svg.mjs


var SvgShareIosMinor = function SvgShareIosMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10.75 12.75a.75.75 0 0 1-1.5 0v-6.69l-1.22 1.22a.75.75 0 0 1-1.06-1.06l2.5-2.5a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 0 1-1.06 1.06l-1.22-1.22v6.69Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M16.5 10.25a2.25 2.25 0 0 0-2.25-2.25h-.07a.75.75 0 0 0 0 1.5h.07a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75h-8.5a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 .75-.75h.07a.75.75 0 0 0 0-1.5h-.07a2.25 2.25 0 0 0-2.25 2.25v4a2.25 2.25 0 0 0 2.25 2.25h8.5a2.25 2.25 0 0 0 2.25-2.25v-4Z"
  }));
};
SvgShareIosMinor.displayName = "ShareIosMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ShareMinor.svg.mjs


var SvgShareMinor = function SvgShareMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10.75 12.75a.75.75 0 0 1-1.5 0v-6.69l-1.22 1.22a.75.75 0 0 1-1.06-1.06l2.5-2.5a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 0 1-1.06 1.06l-1.22-1.22v6.69Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M16.5 10.25a2.25 2.25 0 0 0-2.25-2.25h-.07a.75.75 0 0 0 0 1.5h.07a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75h-8.5a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 .75-.75h.07a.75.75 0 0 0 0-1.5h-.07a2.25 2.25 0 0 0-2.25 2.25v4a2.25 2.25 0 0 0 2.25 2.25h8.5a2.25 2.25 0 0 0 2.25-2.25v-4Z"
  }));
};
SvgShareMinor.displayName = "ShareMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ShipmentFilledMajor.svg.mjs


var SvgShipmentFilledMajor = function SvgShipmentFilledMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M4.75 5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 0 0 1.5h3a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 0 0 1.5h.458a2.5 2.5 0 1 0 4.78.75h3.024a2.5 2.5 0 1 0 4.955-.153 1.75 1.75 0 0 0 1.033-1.597v-1.22a1.75 1.75 0 0 0-1.326-1.697l-1.682-.42a.283.283 0 0 1-.195-.195 20.21 20.21 0 0 0-.344-.979l-.026-.07c-.41-1.1-1.448-1.919-2.686-1.919h-6.991Zm1.75 7.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm8 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }));
};
SvgShipmentFilledMajor.displayName = "ShipmentFilledMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ShipmentMajor.svg.mjs


var SvgShipmentMajor = function SvgShipmentMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M4 5.25a.75.75 0 0 1 .75-.75h6.991a2.75 2.75 0 0 1 2.645 1.995l.427 1.494a.25.25 0 0 0 .18.173l1.681.421a1.75 1.75 0 0 1 1.326 1.698v1.219a1.75 1.75 0 0 1-1.032 1.597 2.5 2.5 0 1 1-4.955.153h-3.025a2.5 2.5 0 1 1-4.78-.75h-.458a.75.75 0 0 1 0-1.5h2.5c.03 0 .06.002.088.005a2.493 2.493 0 0 1 1.947.745h4.43a2.493 2.493 0 0 1 1.785-.75c.698 0 1.33.286 1.783.748a.25.25 0 0 0 .217-.248v-1.22a.25.25 0 0 0-.19-.242l-1.682-.42a1.75 1.75 0 0 1-1.258-1.217l-.427-1.494a1.25 1.25 0 0 0-1.202-.907h-6.991a.75.75 0 0 1-.75-.75Zm2.5 9.25a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M3.25 8a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-5Z"
  }));
};
SvgShipmentMajor.displayName = "ShipmentMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ShopcodesMajor.svg.mjs


var SvgShopcodesMajor = function SvgShopcodesMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M5.75 6.25a.5.5 0 0 1 .5-.5h.5a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.5v-.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M3.5 5.25c0-.966.784-1.75 1.75-1.75h2.5c.966 0 1.75.784 1.75 1.75v2.5a1.75 1.75 0 0 1-1.75 1.75h-2.5a1.75 1.75 0 0 1-1.75-1.75v-2.5Zm1.75-.25a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h2.5a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25h-2.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.25 12.75a.5.5 0 0 0-.5.5v.5a.5.5 0 0 0 .5.5h.5a.5.5 0 0 0 .5-.5v-.5a.5.5 0 0 0-.5-.5h-.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M3.5 12.25c0-.966.784-1.75 1.75-1.75h2.5c.966 0 1.75.784 1.75 1.75v2.5a1.75 1.75 0 0 1-1.75 1.75h-2.5a1.75 1.75 0 0 1-1.75-1.75v-2.5Zm1.75-.25a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h2.5a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25h-2.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.75 6.25a.5.5 0 0 1 .5-.5h.5a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.5v-.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M12.25 3.5a1.75 1.75 0 0 0-1.75 1.75v2.5c0 .966.784 1.75 1.75 1.75h2.5a1.75 1.75 0 0 0 1.75-1.75v-2.5a1.75 1.75 0 0 0-1.75-1.75h-2.5Zm-.25 1.75a.25.25 0 0 1 .25-.25h2.5a.25.25 0 0 1 .25.25v2.5a.25.25 0 0 1-.25.25h-2.5a.25.25 0 0 1-.25-.25v-2.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11 10.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10.5 15a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M15 10.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14.5 15a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13 12.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z"
  }));
};
SvgShopcodesMajor.displayName = "ShopcodesMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/SidebarLeftMajor.svg.mjs


var SvgSidebarLeftMajor = function SvgSidebarLeftMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M5.25 16.5a1.75 1.75 0 0 1-1.75-1.75v-9.5c0-.966.784-1.75 1.75-1.75h1.5c.966 0 1.75.784 1.75 1.75v9.5a1.75 1.75 0 0 1-1.75 1.75h-1.5Zm-.25-1.75c0 .138.112.25.25.25h1.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25h-1.5a.25.25 0 0 0-.25.25v9.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11.25 16.5a1.75 1.75 0 0 1-1.75-1.75v-.5a.75.75 0 0 1 1.5 0v.5c0 .138.112.25.25.25h.5a.75.75 0 0 1 0 1.5h-.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14.75 16.5a1.75 1.75 0 0 0 1.75-1.75v-.5a.75.75 0 0 0-1.5 0v.5a.25.25 0 0 1-.25.25h-.5a.75.75 0 0 0 0 1.5h.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M9.5 5.25c0-.966.784-1.75 1.75-1.75h.5a.75.75 0 0 1 0 1.5h-.5a.25.25 0 0 0-.25.25v.5a.75.75 0 0 1-1.5 0v-.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M16.5 5.25a1.75 1.75 0 0 0-1.75-1.75h-.5a.75.75 0 0 0 0 1.5h.5a.25.25 0 0 1 .25.25v.5a.75.75 0 0 0 1.5 0v-.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10.25 8.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M16.5 9a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2Z"
  }));
};
SvgSidebarLeftMajor.displayName = "SidebarLeftMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/SidebarRightMajor.svg.mjs


var SvgSidebarRightMajor = function SvgSidebarRightMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M13.75 16.5a1.75 1.75 0 0 1-1.75-1.75v-9.5c0-.966.784-1.75 1.75-1.75h1.5c.966 0 1.75.784 1.75 1.75v9.5a1.75 1.75 0 0 1-1.75 1.75h-1.5Zm-.25-1.75c0 .138.112.25.25.25h1.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25h-1.5a.25.25 0 0 0-.25.25v9.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M5.25 16.5a1.75 1.75 0 0 1-1.75-1.75v-.5a.75.75 0 0 1 1.5 0v.5c0 .138.112.25.25.25h.5a.75.75 0 0 1 0 1.5h-.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M8.75 16.5a1.75 1.75 0 0 0 1.75-1.75v-.5a.75.75 0 0 0-1.5 0v.5a.25.25 0 0 1-.25.25h-.5a.75.75 0 0 0 0 1.5h.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M3.5 5.25c0-.966.784-1.75 1.75-1.75h.5a.75.75 0 0 1 0 1.5h-.5a.25.25 0 0 0-.25.25v.5a.75.75 0 0 1-1.5 0v-.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10.5 5.25a1.75 1.75 0 0 0-1.75-1.75h-.5a.75.75 0 0 0 0 1.5h.5a.25.25 0 0 1 .25.25v.5a.75.75 0 0 0 1.5 0v-.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M4.25 8.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10.5 9a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2Z"
  }));
};
SvgSidebarRightMajor.displayName = "SidebarRightMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/SidekickMajor.svg.mjs


var SvgSidekickMajor = function SvgSidekickMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "m11.052 14.65-.003.002c-.783.377-1.57.248-2.363-.112-.27-.122-.57-.09-.764.083a.505.505 0 0 0-.174.362.59.59 0 0 0 .157.405 2.875 2.875 0 0 0 2.095.99c.887.037 1.71-.447 2.173-1.147a.582.582 0 0 0 .103-.412.486.486 0 0 0-.217-.331c-.212-.14-.507-.126-.75.022-.087.053-.172.1-.257.139z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M2.42 5.968c-.063.21-.218.875-.218 1.774-.135.781-.083 1.559-.135 2.907l-.063 1.673c-.104 2.73 1.878 5.695 4.583 6.07 2.078.289 4.185.3 6.266.031l.233-.03c.258-.033.41-.053.546-.077 2.503-.455 4.333-3.219 4.368-5.762.002-.137-.004-.292-.014-.55l-.053-1.382c-.03-.774-.052-1.375-.105-1.877l.007-.151c.032-.696.025-.796-.054-1.254a5.99 5.99 0 0 0-.542-1.627c-.294-.56-.77-1.13-1.509-1.13l-.2-.207c-1.603-1.661-2.35-2.032-5.797-2.368-1.955-.062-2.872.245-4.078.835-1.148.562-2.317 1.335-2.734 1.906-.297.407-.403.9-.5 1.22zm10.428.345c.762.073 1.462.139 2.018.054 0 0 .304.84 1.047 1.586.085.085.165.163.24.236.165.16.305.297.42.437.018.13.034.276.047.44a2.443 2.443 0 0 0-.762-.215c-1.139-.081-2.03.36-2.944.813-.876.434-1.772.878-2.926.878-1.153 0-2.049-.444-2.925-.878-.913-.452-1.805-.894-2.945-.813a2.476 2.476 0 0 0-.735.203c.037-.441.088-.744.176-1.011a4.084 4.084 0 0 1 1.263-1.86 2.51 2.51 0 0 1 .24-.084l.442.015c-.054 1.412.288 2.35.493 2.41.168.047.406-.275.72-.701.114-.153.236-.32.37-.487.158-.199.548-.488 1.074-.79.099.716.3 1.157.438 1.196.167.048.405-.274.72-.7.113-.153.236-.32.37-.487.102-.13.237-.25.405-.358h.095c.295 0 .619.003.957.006.58.004 1.157.059 1.702.11zm-9.28 7.962c.55 1.448 1.733 2.694 3.189 2.897 1.97.273 3.966.282 5.938.028l.213-.027c.284-.037.504-.07.504-.07 1.36-.247 2.463-1.454 3-2.83a3.094 3.094 0 0 1-.809.32c-.735.184-1.747-.081-2.871-.67-.39-.204-.689-.443-.968-.668-.51-.409-.956-.767-1.776-.767-.82 0-1.265.358-1.775.767-.28.225-.578.464-.968.669-1.124.588-2.136.853-2.871.67a3.094 3.094 0 0 1-.806-.32zm1.966-1.22a1.334 1.334 0 1 0 0-2.667 1.334 1.334 0 0 0 0 2.668zm7.398-1.333a1.334 1.334 0 1 0 2.668 0 1.334 1.334 0 0 0-2.668 0z"
  }));
};
SvgSidekickMajor.displayName = "SidekickMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/SimplifyMajor.svg.mjs


var SvgSimplifyMajor = function SvgSimplifyMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M16.25 8.25a.75.75 0 0 0 0-1.5h-4.69l1.22-1.22a.75.75 0 0 0-1.06-1.06l-2.5 2.5a.75.75 0 0 0 0 1.06l2.5 2.5a.75.75 0 1 0 1.06-1.06l-1.22-1.22h4.69Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M3.75 11.75a.75.75 0 0 0 0 1.5h4.69l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 1.06l1.22 1.22h-4.69Z"
  }));
};
SvgSimplifyMajor.displayName = "SimplifyMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/SimplifyMinor.svg.mjs


var SvgSimplifyMinor = function SvgSimplifyMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M16.25 8.25a.75.75 0 0 0 0-1.5h-4.69l1.22-1.22a.75.75 0 0 0-1.06-1.06l-2.5 2.5a.75.75 0 0 0 0 1.06l2.5 2.5a.75.75 0 1 0 1.06-1.06l-1.22-1.22h4.69Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M3.75 11.75a.75.75 0 0 0 0 1.5h4.69l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 1.06l1.22 1.22h-4.69Z"
  }));
};
SvgSimplifyMinor.displayName = "SimplifyMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/SlideshowMajor.svg.mjs


var SvgSlideshowMajor = function SvgSlideshowMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13.5 7a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M11.031 3.25h-2.062c-.79 0-1.427 0-1.944.041-.532.042-1 .131-1.434.346a3.75 3.75 0 0 0-1.704 1.704c-.215.435-.304.902-.346 1.434-.041.517-.041 1.154-.041 1.944v.062c0 .79 0 1.428.041 1.944.042.532.131 1 .346 1.434a3.75 3.75 0 0 0 1.704 1.704c.435.215.902.304 1.434.346.517.041 1.154.041 1.944.041h2.062c.79 0 1.428 0 1.944-.041.532-.042 1-.131 1.434-.346a3.75 3.75 0 0 0 1.704-1.704c.215-.435.304-.902.346-1.434.041-.516.041-1.154.041-1.944v-.062c0-.79 0-1.427-.041-1.944-.042-.532-.131-1-.346-1.434a3.75 3.75 0 0 0-1.704-1.704c-.435-.215-.902-.304-1.434-.346-.516-.041-1.154-.041-1.944-.041Zm-4.776 1.732c.193-.095.447-.16.889-.196.45-.035 1.027-.036 1.856-.036h2c.829 0 1.406 0 1.856.036.442.035.696.1.89.196.443.22.803.579 1.022 1.023.095.193.16.447.196.889.035.45.036 1.027.036 1.856 0 .348 0 .652-.003.92l-.213-.266a1.75 1.75 0 0 0-2.604-.144l-1.18 1.18-2.695-2.696a1.75 1.75 0 0 0-2.582.117l-.723.868c0-.818 0-1.389.036-1.835.035-.442.1-.696.196-.89a2.25 2.25 0 0 1 1.023-1.022Zm-1.176 5.994a1.8 1.8 0 0 0 .153.52c.22.443.579.803 1.023 1.022.193.095.447.16.889.196.45.035 1.027.036 1.856.036h2c.829 0 1.406 0 1.856-.036.442-.035.696-.1.89-.196a2.25 2.25 0 0 0 .927-.85l-1.06-1.327a.25.25 0 0 0-.373-.02l-1.71 1.71a.75.75 0 0 1-1.06 0l-3.226-3.226a.25.25 0 0 0-.369.016l-1.796 2.155Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }));
};
SvgSlideshowMajor.displayName = "SlideshowMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/SmileyHappyMajor.svg.mjs


var SvgSmileyHappyMajor = function SvgSmileyHappyMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11.5 7a.75.75 0 0 0-.75.75v1.5a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M7.75 7.75a.75.75 0 0 1 1.5 0v1.5a.75.75 0 0 1-1.5 0v-1.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11.522 11.983a2.5 2.5 0 0 1-3.937-1.336.75.75 0 1 0-1.449.388 4 4 0 0 0 7.728 0 .75.75 0 0 0-1.45-.388 2.5 2.5 0 0 1-.892 1.336Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
  }));
};
SvgSmileyHappyMajor.displayName = "SmileyHappyMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/SmileyJoyMajor.svg.mjs


var SvgSmileyJoyMajor = function SvgSmileyJoyMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M8.28 6.97a.75.75 0 0 0-1.06 0l-1 1a.75.75 0 0 0 1.06 1.06l.47-.47.47.47a.75.75 0 0 0 1.06-1.06l-1-1Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11.72 6.97a.75.75 0 0 1 1.06 0l1 1a.75.75 0 0 1-1.06 1.06l-.47-.47-.47.47a.75.75 0 1 1-1.06-1.06l1-1Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13.876 10.99c.136-.536-.324-.99-.876-.99h-6c-.552 0-1.012.454-.876.99a4 4 0 0 0 7.752 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
  }));
};
SvgSmileyJoyMajor.displayName = "SmileyJoyMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/SmileyNeutralMajor.svg.mjs


var SvgSmileyNeutralMajor = function SvgSmileyNeutralMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M7.5 11.75a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10.75 7.75a.75.75 0 0 1 1.5 0v1.5a.75.75 0 0 1-1.5 0v-1.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M8.5 7a.75.75 0 0 0-.75.75v1.5a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
  }));
};
SvgSmileyNeutralMajor.displayName = "SmileyNeutralMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/SmileySadMajor.svg.mjs


var SvgSmileySadMajor = function SvgSmileySadMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M15.5 10a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm1.5 0a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-7.957 2.69a2.5 2.5 0 0 1 2.725.542.75.75 0 1 0 1.06-1.06 3.998 3.998 0 0 0-5.656 0 .75.75 0 1 0 1.06 1.06 2.5 2.5 0 0 1 .811-.542Zm1.707-4.94a.75.75 0 0 1 1.5 0v1.5a.75.75 0 0 1-1.5 0v-1.5Zm-2.25-.75a.75.75 0 0 0-.75.75v1.5a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-.75-.75Z"
  }));
};
SvgSmileySadMajor.displayName = "SmileySadMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/SnapchatMinor.svg.mjs


var SvgSnapchatMinor = function SvgSnapchatMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M13.907 7.292c-.113-1.671-.702-3.792-3.765-3.792s-3.651 2.12-3.765 3.792c-.04.597-.502.92-1.1.949-.31.015-1.093-.377-1.093.134 0 1.083 2.166 1.083 2.166 2.167 0 1.083-1.625 2.708-2.708 3.25-1.083.541.344.713 1.083 1.083.74.37 1.018 1.466 2.167 1.083 1.15-.383 2.167.542 3.25.542 1.083 0 2.101-.925 3.25-.542 1.15.383 1.427-.713 2.167-1.083.74-.37 2.166-.542 1.083-1.083-1.083-.542-2.708-2.167-2.708-3.25 0-1.084 2.166-1.084 2.166-2.167 0-.51-.782-.119-1.093-.134-.598-.03-1.06-.352-1.1-.949Z"
  }));
};
SvgSnapchatMinor.displayName = "SnapchatMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/SocialAdMajor.svg.mjs


var SvgSocialAdMajor = function SvgSocialAdMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.5 3a.75.75 0 0 1 .75.75v1.25a.75.75 0 0 1-1.5 0v-1.25a.75.75 0 0 1 .75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M16.03 5.03a.75.75 0 0 0-1.06-1.06l-1 1a.75.75 0 0 0 1.06 1.06l1-1Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M5.5 7c0-.69.56-1.25 1.25-1.25h3.25a.75.75 0 0 0 0-1.5h-3.25a2.75 2.75 0 0 0-2.75 2.75v7.25a2.75 2.75 0 0 0 2.75 2.75h6.5a2.75 2.75 0 0 0 2.75-2.75v-3.625a.75.75 0 0 0-1.5 0v3.625c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-7.25Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M7.25 12.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M6.25 7.25a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75v-3Zm1.5.75v1.5h4.5v-1.5h-4.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M16.5 8.25a.75.75 0 0 0 0-1.5h-1.25a.75.75 0 0 0 0 1.5h1.25Z"
  }));
};
SvgSocialAdMajor.displayName = "SocialAdMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/SocialPostMajor.svg.mjs


var SvgSocialPostMajor = function SvgSocialPostMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14.25 2.5a.75.75 0 0 1 .75.75v1.25a.75.75 0 0 1-1.5 0v-1.25a.75.75 0 0 1 .75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "m16.78 5.53 1-1a.75.75 0 0 0-1.06-1.06l-1 1a.75.75 0 0 0 1.06 1.06Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M4.5 8.75a3.25 3.25 0 0 1 3.25-3.25h4a.75.75 0 0 0 0-1.5h-4a4.75 4.75 0 0 0-4.75 4.75v.75c0 2.1 1.362 3.88 3.25 4.508v1.992a.75.75 0 0 0 1.196.603l3.178-2.353h1.626a4.75 4.75 0 0 0 4.75-4.75.75.75 0 0 0-1.5 0 3.25 3.25 0 0 1-3.25 3.25h-1.873a.75.75 0 0 0-.447.147l-2.18 1.614v-1.081a.75.75 0 0 0-.61-.737 3.251 3.251 0 0 1-2.64-3.193v-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.75 7.25a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6 10.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M18.25 7.75a.75.75 0 0 0 0-1.5h-1.25a.75.75 0 0 0 0 1.5h1.25Z"
  }));
};
SvgSocialPostMajor.displayName = "SocialPostMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/SoftPackMajor.svg.mjs


var SvgSoftPackMajor = function SvgSoftPackMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M8.75 6a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.5 11.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M7.25 13a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M6.75 3a2.75 2.75 0 0 0-2.75 2.75v8.5a2.75 2.75 0 0 0 2.75 2.75h6.5a2.75 2.75 0 0 0 2.75-2.75v-8.5a2.75 2.75 0 0 0-2.75-2.75h-6.5Zm-1.25 4.5h.75a.75.75 0 0 0 0-1.5h-.75v-.25c0-.69.56-1.25 1.25-1.25h6.5c.69 0 1.25.56 1.25 1.25v.25h-.75a.75.75 0 0 0 0 1.5h.75v6.75c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-6.75Z"
  }));
};
SvgSoftPackMajor.displayName = "SoftPackMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/SortAscendingMajor.svg.mjs


var SvgSortAscendingMajor = function SvgSortAscendingMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M9.116 4.323a1.25 1.25 0 0 1 1.768 0l2.646 2.647a.75.75 0 0 1-1.06 1.06l-2.47-2.47-2.47 2.47a.75.75 0 1 1-1.06-1.06l2.646-2.647Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillOpacity: 0.33,
    fillRule: "evenodd",
    d: "M9.116 15.677a1.25 1.25 0 0 0 1.768 0l2.646-2.647a.75.75 0 0 0-1.06-1.06l-2.47 2.47-2.47-2.47a.75.75 0 0 0-1.06 1.06l2.646 2.647Z"
  }));
};
SvgSortAscendingMajor.displayName = "SortAscendingMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/SortDescendingMajor.svg.mjs


var SvgSortDescendingMajor = function SvgSortDescendingMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillOpacity: 0.33,
    fillRule: "evenodd",
    d: "M9.116 4.823a1.25 1.25 0 0 1 1.768 0l2.646 2.647a.75.75 0 0 1-1.06 1.06l-2.47-2.47-2.47 2.47a.75.75 0 1 1-1.06-1.06l2.646-2.647Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M9.116 15.177a1.25 1.25 0 0 0 1.768 0l2.646-2.647a.75.75 0 0 0-1.06-1.06l-2.47 2.47-2.47-2.47a.75.75 0 0 0-1.06 1.06l2.646 2.647Z"
  }));
};
SvgSortDescendingMajor.displayName = "SortDescendingMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/SortMinor.svg.mjs


var SvgSortMinor = function SvgSortMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M7.75 6.06v7.69a.75.75 0 0 1-1.5 0v-7.69l-1.72 1.72a.75.75 0 0 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0l3 3a.75.75 0 1 1-1.06 1.06l-1.72-1.72Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13.75 6.25a.75.75 0 0 0-1.5 0v7.69l-1.72-1.72a.75.75 0 1 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72v-7.69Z"
  }));
};
SvgSortMinor.displayName = "SortMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/SoundMajor.svg.mjs


var SvgSoundMajor = function SvgSoundMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M8.866 4.324c.788-.788 2.134-.23 2.134.884v9.585c0 1.114-1.346 1.672-2.134.884l-2.603-2.603a.25.25 0 0 0-.177-.073h-1.336a1.75 1.75 0 0 1-1.75-1.75v-2.5c0-.967.784-1.75 1.75-1.75h1.336a.25.25 0 0 0 .177-.074l2.603-2.603Zm.634 1.487-2.177 2.177a1.75 1.75 0 0 1-1.237.512h-1.336a.25.25 0 0 0-.25.25v2.5c0 .139.112.25.25.25h1.336c.464 0 .909.185 1.237.513l2.177 2.177v-8.379Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11.907 7.345a.75.75 0 0 1 1.047-.166 4.152 4.152 0 0 1 .496 6.294.75.75 0 0 1-1.061-1.06 2.65 2.65 0 0 0-.316-4.02.75.75 0 0 1-.166-1.048Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14.62 4.886a.75.75 0 0 0-.881 1.214 5.486 5.486 0 0 1 .654 8.317.75.75 0 1 0 1.06 1.061 6.986 6.986 0 0 0-.833-10.592Z"
  }));
};
SvgSoundMajor.displayName = "SoundMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/StarFilledMinor.svg.mjs


var SvgStarFilledMinor = function SvgStarFilledMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11.128 4.123c-.453-.95-1.803-.95-2.256 0l-1.39 2.912-3.199.421c-1.042.138-1.46 1.422-.697 2.146l2.34 2.222-.587 3.172c-.192 1.034.901 1.828 1.825 1.327l2.836-1.54 2.836 1.54c.924.501 2.017-.293 1.825-1.327l-.587-3.172 2.34-2.222c.762-.724.345-2.008-.697-2.146l-3.2-.421-1.389-2.912Z"
  }));
};
SvgStarFilledMinor.displayName = "StarFilledMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/StarOutlineMinor.svg.mjs


var SvgStarOutlineMinor = function SvgStarOutlineMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M8.872 4.123c.453-.95 1.803-.95 2.256 0l1.39 2.912 3.199.421c1.042.138 1.46 1.422.697 2.146l-2.34 2.222.587 3.172c.192 1.034-.901 1.828-1.825 1.327l-2.836-1.54-2.836 1.54c-.924.501-2.017-.293-1.825-1.327l.587-3.172-2.34-2.222c-.762-.724-.345-2.008.697-2.146l3.2-.421 1.389-2.912Zm1.128 1.119-1.222 2.561a1.25 1.25 0 0 1-.965.701l-2.814.371 2.058 1.954c.307.292.446.718.369 1.134l-.517 2.791 2.495-1.354a1.25 1.25 0 0 1 1.192 0l2.495 1.354-.517-2.79a1.25 1.25 0 0 1 .369-1.135l2.058-1.954-2.814-.37a1.25 1.25 0 0 1-.965-.702l-1.222-2.561Z"
  }));
};
SvgStarOutlineMinor.displayName = "StarOutlineMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/StatusActiveMajor.svg.mjs


var SvgStatusActiveMajor = function SvgStatusActiveMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M4.63 8.81a5.5 5.5 0 0 1 6.56-4.18.75.75 0 0 0 .325-1.464 7 7 0 1 0 5.32 8.35.75.75 0 0 0-1.465-.325 5.5 5.5 0 1 1-10.74-2.38Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M16.03 6.78a.75.75 0 0 0-1.06-1.06l-4.97 4.97-2.22-2.22a.75.75 0 0 0-1.06 1.06l2.75 2.75a.75.75 0 0 0 1.06 0l5.5-5.5Z"
  }));
};
SvgStatusActiveMajor.displayName = "StatusActiveMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/StopMajor.svg.mjs


var SvgStopMajor = function SvgStopMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M8.25 7.25a1 1 0 0 0-1 1v3.5a1 1 0 0 0 1 1h3.5a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1h-3.5Zm.5 4v-2.5h2.5v2.5h-2.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
  }));
};
SvgStopMajor.displayName = "StopMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/StoreDetailsFilledMinor.svg.mjs


var SvgStoreDetailsFilledMinor = function SvgStoreDetailsFilledMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M5 3.25a1.75 1.75 0 0 0-1.75 1.75v2c0 .966.784 1.75 1.75 1.75h2a1.75 1.75 0 0 0 1.75-1.75v-2a1.75 1.75 0 0 0-1.75-1.75h-2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M5 11.25a1.75 1.75 0 0 0-1.75 1.75v2c0 .966.784 1.75 1.75 1.75h2a1.75 1.75 0 0 0 1.75-1.75v-2a1.75 1.75 0 0 0-1.75-1.75h-2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10 4.75a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10.75 6.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10 12.75a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10.75 14.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5Z"
  }));
};
SvgStoreDetailsFilledMinor.displayName = "StoreDetailsFilledMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/StoreDetailsMinor.svg.mjs


var SvgStoreDetailsMinor = function SvgStoreDetailsMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M5 3a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2Zm-.5 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M5 11a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2Zm-.5 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10 4.75a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10.75 6.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10 12.75a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10.75 14.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5Z"
  }));
};
SvgStoreDetailsMinor.displayName = "StoreDetailsMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/StoreFilledMinor.svg.mjs


var SvgStoreFilledMinor = function SvgStoreFilledMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13.714 3.176a.5.5 0 0 0-.38-.176h-6.668a.5.5 0 0 0-.38.176l-2.31 2.713a2 2 0 0 0-.476 1.296v.815a1.5 1.5 0 0 0 1.5 1.5 1.75 1.75 0 0 0 1.75-1.75.75.75 0 0 1 1.5 0 1.75 1.75 0 1 0 3.5 0 .75.75 0 0 1 1.5 0c0 .966.784 1.75 1.75 1.75a1.5 1.5 0 0 0 1.5-1.5v-.815a2 2 0 0 0-.477-1.296l-2.309-2.713Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M15.125 11h-.125a3.243 3.243 0 0 1-2.5-1.173 3.243 3.243 0 0 1-2.5 1.173 3.243 3.243 0 0 1-2.5-1.173 3.243 3.243 0 0 1-2.5 1.173h-.125v4.75c0 .621.504 1.125 1.125 1.125h8c.621 0 1.125-.504 1.125-1.125v-4.75Zm-2.125 2.25a1 1 0 0 0-1-1h-.5a1 1 0 0 0-1 1v2.75h2.5v-2.75Z"
  }));
};
SvgStoreFilledMinor.displayName = "StoreFilledMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/StoreMajor.svg.mjs


var SvgStoreMajor = function SvgStoreMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M13.482 3.5c.418 0 .809.209 1.04.557l1.768 2.651c.137.205.21.447.21.693v.849c0 .854-.39 1.617-1 2.121v4.379a1.75 1.75 0 0 1-1.75 1.75h-7.5a1.75 1.75 0 0 1-1.75-1.75v-4.379c-.61-.504-1-1.267-1-2.121v-.849c0-.246.073-.488.21-.693l1.768-2.651a1.25 1.25 0 0 1 1.04-.557h6.964Zm-6.83 1.5-1.652 2.477v.773a1.25 1.25 0 1 0 2.5 0v-.5a.75.75 0 0 1 1.5 0v.75a1 1 0 0 0 2 0v-.75a.75.75 0 0 1 1.5 0v.5a1.25 1.25 0 1 0 2.5 0v-.773l-1.651-2.477h-6.698Zm7.348 5.989a2.741 2.741 0 0 1-2.178-.777 2.493 2.493 0 0 1-1.822.788 2.493 2.493 0 0 1-1.822-.789 2.741 2.741 0 0 1-2.178.778v3.761c0 .138.112.25.25.25h2.25v-2a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v2h2.25a.25.25 0 0 0 .25-.25v-3.761Z"
  }));
};
SvgStoreMajor.displayName = "StoreMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/StoreMinor.svg.mjs


var SvgStoreMinor = function SvgStoreMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M13.257 3h-6.514a1.25 1.25 0 0 0-.983.478l-2.386 3.037a1.75 1.75 0 0 0-.374 1.08v.655a2.75 2.75 0 0 0 1.5 2.45v4.55c0 .966.784 1.75 1.75 1.75h7.5a1.75 1.75 0 0 0 1.75-1.75v-4.55a2.75 2.75 0 0 0 1.5-2.45v-.481c0-.504-.17-.994-.48-1.39l-2.28-2.901a1.25 1.25 0 0 0-.983-.478Zm-.257 12.5h.75a.25.25 0 0 0 .25-.25v-4.25a2.742 2.742 0 0 1-2-.863 2.742 2.742 0 0 1-2 .863 2.742 2.742 0 0 1-2-.863 2.742 2.742 0 0 1-2 .863v4.25c0 .138.112.25.25.25h3.75v-2.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v2.5Zm-7-6h-.25c-.69 0-1.25-.56-1.25-1.25v-.654a.25.25 0 0 1 .053-.155l2.312-2.941h6.27l2.205 2.805a.75.75 0 0 1 .16.464v.481c0 .69-.56 1.25-1.25 1.25h-.25c-.69 0-1.25-.56-1.25-1.25v-.5a.75.75 0 0 0-1.5 0v.5a1.25 1.25 0 1 1-2.5 0v-.5a.75.75 0 0 0-1.5 0v.5c0 .69-.56 1.25-1.25 1.25Z"
  }));
};
SvgStoreMinor.displayName = "StoreMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/StoreStatusMajor.svg.mjs


var SvgStoreStatusMajor = function SvgStoreStatusMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M9.25 4.55a5.501 5.501 0 1 0 6.25 5.45.75.75 0 0 1 1.5 0 7 7 0 1 1-7-7 .75.75 0 0 1 .75.75v4.95a1.5 1.5 0 1 1-1.5 0v-1.346a2.751 2.751 0 1 0 3.5 2.646.75.75 0 0 1 1.5 0 4.25 4.25 0 1 1-5-4.184v-1.265Z"
  }));
};
SvgStoreStatusMajor.displayName = "StoreStatusMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/TabletMajor.svg.mjs


var SvgTabletMajor = function SvgTabletMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M8.5 13a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M6.75 3a2.75 2.75 0 0 0-2.75 2.75v8.5a2.75 2.75 0 0 0 2.75 2.75h6.5a2.75 2.75 0 0 0 2.75-2.75v-8.5a2.75 2.75 0 0 0-2.75-2.75h-6.5Zm-1.25 2.75c0-.69.56-1.25 1.25-1.25h6.5c.69 0 1.25.56 1.25 1.25v8.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-8.5Z"
  }));
};
SvgTabletMajor.displayName = "TabletMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/TapChipMajor.svg.mjs


var SvgTapChipMajor = function SvgTapChipMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M10 4.25a3.25 3.25 0 0 0-3.25 3.25.75.75 0 0 1-1.5 0 4.75 4.75 0 0 1 9.5 0 .75.75 0 0 1-1.5 0 3.25 3.25 0 0 0-3.25-3.25Zm-4 11.25v-4.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 .75.75v4.25h-8Zm-1.5-4.25v5c0 .414.336.75.75.75h9.5a.75.75 0 0 0 .75-.75v-5a2.25 2.25 0 0 0-2.25-2.25h-6.5a2.25 2.25 0 0 0-2.25 2.25Zm3.5 2a1 1 0 1 0 2 0v-.75a1 1 0 1 0-2 0v.75Zm1.25-5.75a.75.75 0 0 1 1.5 0 .75.75 0 0 0 1.5 0 2.25 2.25 0 0 0-4.5 0 .75.75 0 0 0 1.5 0Z"
  }));
};
SvgTapChipMajor.displayName = "TapChipMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/TaxFilledMajor.svg.mjs


var SvgTaxFilledMajor = function SvgTaxFilledMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M7.085 3.627c-.25-.564.227-1.127.844-1.127h4.142c.617 0 1.094.563.844 1.127-.416.936-1.124 1.65-1.973 1.957a5.307 5.307 0 0 1 4.06 3.45l1.108 3.13c.922 2.604-1.008 5.336-3.77 5.336h-4.68c-2.762 0-4.692-2.732-3.77-5.335l1.108-3.13a5.307 5.307 0 0 1 4.06-3.451c-.85-.308-1.557-1.02-1.973-1.957Zm.915 7.373a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm.692-5.692a.625.625 0 0 1 0 .884l-4.5 4.5a.625.625 0 1 1-.884-.884l4.5-4.5a.625.625 0 0 1 .884 0Z"
  }));
};
SvgTaxFilledMajor.displayName = "TaxFilledMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/TaxMajor.svg.mjs


var SvgTaxMajor = function SvgTaxMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M9 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.78 9.22a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l4.5-4.5a.75.75 0 0 1 1.06 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M7.59 2c-.736 0-1.434.695-1.172 1.545a4.586 4.586 0 0 0 1.198 1.97 5.773 5.773 0 0 0-3.033 3.258l-1.046 2.83c-1.146 3.102 1.149 6.397 4.456 6.397h4.014c3.307 0 5.602-3.295 4.456-6.397l-1.046-2.83a5.774 5.774 0 0 0-3.033-3.258 4.585 4.585 0 0 0 1.198-1.97c.261-.85-.436-1.545-1.172-1.545h-4.82Zm2.41 3c-.788 0-1.573-.546-2-1.5h4c-.427.954-1.212 1.5-2 1.5Zm0 1.5a4.275 4.275 0 0 0-4.01 2.793l-1.046 2.83c-.784 2.123.786 4.377 3.049 4.377h4.014c2.263 0 3.833-2.254 3.049-4.377l-1.046-2.83a4.275 4.275 0 0 0-4.01-2.793Z"
  }));
};
SvgTaxMajor.displayName = "TaxMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/TeamMajor.svg.mjs


var SvgTeamMajor = function SvgTeamMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M6 4a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-.75 2.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M10 7a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-.75 2.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M11.75 6.25a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Zm2.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14 9a.75.75 0 0 0 0 1.5h.75c.69 0 1.25.56 1.25 1.25v1.5a.75.75 0 0 0 1.5 0v-1.5a2.75 2.75 0 0 0-2.75-2.75h-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.75 9.75a.75.75 0 0 0-.75-.75h-.75a2.75 2.75 0 0 0-2.75 2.75v1.5a.75.75 0 0 0 1.5 0v-1.5c0-.69.56-1.25 1.25-1.25h.75a.75.75 0 0 0 .75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10.75 12a2.75 2.75 0 0 1 2.75 2.75v1a.75.75 0 0 1-1.5 0v-1c0-.69-.56-1.25-1.25-1.25h-1.5c-.69 0-1.25.56-1.25 1.25v1a.75.75 0 0 1-1.5 0v-1a2.75 2.75 0 0 1 2.75-2.75h1.5Z"
  }));
};
SvgTeamMajor.displayName = "TeamMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/TemplateMajor.svg.mjs


var SvgTemplateMajor = function SvgTemplateMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M3.5 7.25a3.75 3.75 0 0 1 3.75-3.75h5.5a3.75 3.75 0 0 1 3.75 3.75v5.5a3.75 3.75 0 0 1-3.75 3.75h-5.5a3.75 3.75 0 0 1-3.75-3.75v-5.5Zm3.75-2.25a2.25 2.25 0 0 0-2.25 2.25v.5h10v-.5a2.25 2.25 0 0 0-2.25-2.25h-5.5Zm3.75 4.25h-6v3.5a2.25 2.25 0 0 0 2.25 2.25h3.75v-5.75Zm1.5 5.75v-5.75h2.5v3.5a2.25 2.25 0 0 1-2.25 2.25h-.25Z"
  }));
};
SvgTemplateMajor.displayName = "TemplateMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/TemplateMinor.svg.mjs


var SvgTemplateMinor = function SvgTemplateMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M3.5 7.25a3.75 3.75 0 0 1 3.75-3.75h5.5a3.75 3.75 0 0 1 3.75 3.75v5.5a3.75 3.75 0 0 1-3.75 3.75h-5.5a3.75 3.75 0 0 1-3.75-3.75v-5.5Zm3.75-2.25a2.25 2.25 0 0 0-2.25 2.25v.5h10v-.5a2.25 2.25 0 0 0-2.25-2.25h-5.5Zm3.75 4.25h-6v3.5a2.25 2.25 0 0 0 2.25 2.25h3.75v-5.75Zm1.5 5.75v-5.75h2.5v3.5a2.25 2.25 0 0 1-2.25 2.25h-.25Z"
  }));
};
SvgTemplateMinor.displayName = "TemplateMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/TextAlignmentCenterMajor.svg.mjs


var SvgTextAlignmentCenterMajor = function SvgTextAlignmentCenterMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M3 4.75a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5h-12.5a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M5.25 8.25a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M3 11.75a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5h-12.5a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M5.25 15.25a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1-.75-.75Z"
  }));
};
SvgTextAlignmentCenterMajor.displayName = "TextAlignmentCenterMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/TextAlignmentLeftMajor.svg.mjs


var SvgTextAlignmentLeftMajor = function SvgTextAlignmentLeftMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M3.75 4a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5h-12.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M4 7.5a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5h-8Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M3 11.75a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5h-12.5a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M4 14.5a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5h-8Z"
  }));
};
SvgTextAlignmentLeftMajor.displayName = "TextAlignmentLeftMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/TextAlignmentRightMajor.svg.mjs


var SvgTextAlignmentRightMajor = function SvgTextAlignmentRightMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M3.75 4a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5h-12.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M8.25 7.5a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5h-8Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M3 11.75a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5h-12.5a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M8.25 14.5a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5h-8Z"
  }));
};
SvgTextAlignmentRightMajor.displayName = "TextAlignmentRightMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/TextBlockMajor.svg.mjs


var SvgTextBlockMajor = function SvgTextBlockMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M7.25 6.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.5 10a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M7.25 12a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M7.25 3.5a3.75 3.75 0 0 0-3.75 3.75v5.5a3.75 3.75 0 0 0 3.75 3.75h5.5a3.75 3.75 0 0 0 3.75-3.75v-5.5a3.75 3.75 0 0 0-3.75-3.75h-5.5Zm-2.25 3.75a2.25 2.25 0 0 1 2.25-2.25h5.5a2.25 2.25 0 0 1 2.25 2.25v5.5a2.25 2.25 0 0 1-2.25 2.25h-5.5a2.25 2.25 0 0 1-2.25-2.25v-5.5Z"
  }));
};
SvgTextBlockMajor.displayName = "TextBlockMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/TextColorMajor.svg.mjs


var SvgTextColorMajor = function SvgTextColorMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M10 3a.75.75 0 0 1 .686.447l4.2 9.5a.75.75 0 1 1-1.372.606l-1.35-3.053h-4.328l-1.35 3.053a.75.75 0 0 1-1.372-.606l4.2-9.5a.75.75 0 0 1 .686-.447Zm-1.5 6h3l-1.5-3.395-1.5 3.395Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M3.075 16.25a.75.75 0 0 1 .75-.75h12.35a.75.75 0 0 1 0 1.5h-12.35a.75.75 0 0 1-.75-.75Z"
  }));
};
SvgTextColorMajor.displayName = "TextColorMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/TextColorMinor.svg.mjs


var SvgTextColorMinor = function SvgTextColorMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M10 3a.75.75 0 0 1 .686.447l4.2 9.5a.75.75 0 1 1-1.372.606l-1.35-3.053h-4.328l-1.35 3.053a.75.75 0 0 1-1.372-.606l4.2-9.5a.75.75 0 0 1 .686-.447Zm-1.5 6h3l-1.5-3.395-1.5 3.395Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M3.075 16.25a.75.75 0 0 1 .75-.75h12.35a.75.75 0 0 1 0 1.5h-12.35a.75.75 0 0 1-.75-.75Z"
  }));
};
SvgTextColorMinor.displayName = "TextColorMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/TextMajor.svg.mjs


var SvgTextMajor = function SvgTextMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M7 3.25a.75.75 0 0 1 .695.467l2.75 6.75a.75.75 0 0 1-1.39.566l-.632-1.553a.752.752 0 0 1-.173.02h-2.68l-.625 1.533a.75.75 0 1 1-1.39-.566l2.75-6.75a.75.75 0 0 1 .695-.467Zm.82 4.75-.82-2.012-.82 2.012h1.64Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M4.25 12.5a.75.75 0 0 0 0 1.5h11.5a.75.75 0 0 0 0-1.5h-11.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M4.25 15a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5h-7Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M15.066 5.94a3 3 0 1 0 0 5.118.75.75 0 0 0 1.434-.308v-4.5a.75.75 0 0 0-1.434-.31Zm-1.566 4.06a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
  }));
};
SvgTextMajor.displayName = "TextMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ThemeEditMajor.svg.mjs


var SvgThemeEditMajor = function SvgThemeEditMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M7.25 3.5a3.75 3.75 0 0 0-3.75 3.75v5.5a3.75 3.75 0 0 0 3.75 3.75h1a.75.75 0 0 0 0-1.5h-1a2.25 2.25 0 0 1-2.25-2.25v-3.25h5.5v2.75a.75.75 0 0 0 1.5 0v-7.25h.75a2.25 2.25 0 0 1 2.25 2.25v1a.75.75 0 0 0 1.5 0v-1a3.75 3.75 0 0 0-3.75-3.75h-5.5Zm3.25 1.5v3h-5.5v-.75a2.25 2.25 0 0 1 2.25-2.25h3.25Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M17.03 12.371a.5.5 0 0 0 0-.707l-1.06-1.06a.5.5 0 0 0-.708 0l-.957.957 1.768 1.767.957-.957Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "m15.366 14.035-1.768-1.767-2.45 2.449a2 2 0 0 0-.585 1.407l-.002.698a.25.25 0 0 0 .25.25l.698-.002a2 2 0 0 0 1.408-.586l2.449-2.449Z"
  }));
};
SvgThemeEditMajor.displayName = "ThemeEditMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ThemeStoreMajor.svg.mjs


var SvgThemeStoreMajor = function SvgThemeStoreMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M7.25 3.5a3.75 3.75 0 0 0-3.75 3.75v5.5a3.75 3.75 0 0 0 3.75 3.75h4a.75.75 0 0 0 .75-.75v-10.75h.75a2.25 2.25 0 0 1 2.25 2.25v1a.75.75 0 0 0 1.5 0v-1a3.75 3.75 0 0 0-3.75-3.75h-5.5Zm3.25 6v5.5h-3.25a2.25 2.25 0 0 1-2.25-2.25v-3.25h5.5Zm0-4.5v3h-5.5v-.75a2.25 2.25 0 0 1 2.25-2.25h3.25Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14 11.107a1.876 1.876 0 0 0 .625 3.643h.75a.375.375 0 0 1 0 .75h-1.875a.75.75 0 0 0 0 1.5h.5v.25a.75.75 0 0 0 1.5 0v-.254a1.875 1.875 0 0 0-.125-3.746h-.75a.375.375 0 0 1 0-.75h1.875a.75.75 0 0 0 0-1.5h-1v-.25a.75.75 0 0 0-1.5 0v.357Z"
  }));
};
SvgThemeStoreMajor.displayName = "ThemeStoreMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ThemesMajor.svg.mjs


var SvgThemesMajor = function SvgThemesMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M7.25 3.5a3.75 3.75 0 0 0-3.75 3.75v5.5a3.75 3.75 0 0 0 3.75 3.75h5.5a3.75 3.75 0 0 0 3.75-3.75v-5.5a3.75 3.75 0 0 0-3.75-3.75h-5.5Zm-2.25 3.75a2.25 2.25 0 0 1 2.25-2.25h3.25v3h-5.5v-.75Zm7-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v3.75h-3v-6Zm0 7.5v2.5h.75a2.25 2.25 0 0 0 2.25-2.25v-.25h-3Zm-1.5-3v5.5h-3.25a2.25 2.25 0 0 1-2.25-2.25v-3.25h5.5Z"
  }));
};
SvgThemesMajor.displayName = "ThemesMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ThumbsDownMajor.svg.mjs


var SvgThumbsDownMajor = function SvgThumbsDownMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M12.16 4.904a10.75 10.75 0 0 0-4.735-.974l-.391.01a3.75 3.75 0 0 0-3.626 3.236l-.337 2.448a2.75 2.75 0 0 0 2.724 3.126h1.594a.25.25 0 0 1 .249.276l-.133 1.26a2.91 2.91 0 0 0 2.894 3.214h.364c.5 0 .928-.358 1.017-.85l.055-.302a4.989 4.989 0 0 1 1.915-3.098h2c.69 0 1.25-.56 1.25-1.25v-5.5c0-.69-.56-1.25-1.25-1.25h-2.345a2.25 2.25 0 0 1-.938-.205l-.307-.14Zm-4.699.525a9.25 9.25 0 0 1 4.074.839l.307.14a3.75 3.75 0 0 0 1.158.32v5.223c-.052.03-.102.062-.15.098a6.49 6.49 0 0 0-2.475 3.95 1.41 1.41 0 0 1-1.378-1.557l.133-1.26a1.75 1.75 0 0 0-1.74-1.932h-1.595a1.25 1.25 0 0 1-1.238-1.421l.337-2.448a2.25 2.25 0 0 1 2.176-1.942l.391-.01Zm7.039 6.32h1v-5h-1v5Z"
  }));
};
SvgThumbsDownMajor.displayName = "ThumbsDownMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ThumbsDownMinor.svg.mjs


var SvgThumbsDownMinor = function SvgThumbsDownMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M12.16 4.904a10.75 10.75 0 0 0-4.735-.974l-.391.01a3.75 3.75 0 0 0-3.626 3.236l-.337 2.448a2.75 2.75 0 0 0 2.724 3.126h1.594a.25.25 0 0 1 .249.276l-.133 1.26a2.91 2.91 0 0 0 2.894 3.214h.364c.5 0 .928-.358 1.017-.85l.055-.302a4.989 4.989 0 0 1 1.915-3.098h2c.69 0 1.25-.56 1.25-1.25v-5.5c0-.69-.56-1.25-1.25-1.25h-2.345a2.25 2.25 0 0 1-.938-.205l-.307-.14Zm-4.699.525a9.25 9.25 0 0 1 4.074.839l.307.14a3.75 3.75 0 0 0 1.158.32v5.223c-.052.03-.102.062-.15.098a6.49 6.49 0 0 0-2.475 3.95 1.41 1.41 0 0 1-1.378-1.557l.133-1.26a1.75 1.75 0 0 0-1.74-1.932h-1.595a1.25 1.25 0 0 1-1.238-1.421l.337-2.448a2.25 2.25 0 0 1 2.176-1.942l.391-.01Zm7.039 6.32h1v-5h-1v5Z"
  }));
};
SvgThumbsDownMinor.displayName = "ThumbsDownMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ThumbsUpMajor.svg.mjs


var SvgThumbsUpMajor = function SvgThumbsUpMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M12.539 14.57a9.249 9.249 0 0 1-4.074-.838l-.307-.14a3.751 3.751 0 0 0-1.158-.32v-5.223a1.5 1.5 0 0 0 .15-.098 6.489 6.489 0 0 0 2.475-3.95 1.41 1.41 0 0 1 1.378 1.557l-.133 1.26a1.75 1.75 0 0 0 1.74 1.932h1.595c.758 0 1.342.67 1.239 1.421l-.338 2.448a2.25 2.25 0 0 1-2.176 1.942l-.391.01Zm-7.039-6.32h-1v5h1v-5Zm2.34 6.846a10.75 10.75 0 0 0 4.735.974l.391-.01a3.75 3.75 0 0 0 3.626-3.236l.337-2.448a2.75 2.75 0 0 0-2.724-3.126h-1.594a.25.25 0 0 1-.249-.276l.133-1.26a2.91 2.91 0 0 0-2.894-3.214h-.364c-.5 0-.928.358-1.017.85l-.055.302a4.989 4.989 0 0 1-1.915 3.098h-2c-.69 0-1.25.56-1.25 1.25v5.5c0 .69.56 1.25 1.25 1.25h2.345c.324 0 .644.07.938.205l.307.14Z"
  }));
};
SvgThumbsUpMajor.displayName = "ThumbsUpMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ThumbsUpMinor.svg.mjs


var SvgThumbsUpMinor = function SvgThumbsUpMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M12.539 14.57a9.25 9.25 0 0 1-4.074-.838l-.307-.141a3.751 3.751 0 0 0-1.158-.32v-5.222a1.5 1.5 0 0 0 .15-.099 6.489 6.489 0 0 0 2.475-3.95 1.41 1.41 0 0 1 1.378 1.557l-.133 1.26a1.75 1.75 0 0 0 1.74 1.933h1.595c.758 0 1.342.67 1.239 1.42l-.338 2.449a2.25 2.25 0 0 1-2.176 1.942l-.391.01Zm-7.039-6.32h-1v5h1v-5Zm2.34 6.845a10.75 10.75 0 0 0 4.735.975l.391-.01a3.75 3.75 0 0 0 3.626-3.236l.337-2.448a2.75 2.75 0 0 0-2.724-3.126h-1.594a.25.25 0 0 1-.249-.276l.133-1.26a2.91 2.91 0 0 0-2.894-3.214h-.364c-.5 0-.928.357-1.017.849l-.055.303a4.989 4.989 0 0 1-1.915 3.098h-2c-.69 0-1.25.56-1.25 1.25v5.5c0 .69.56 1.25 1.25 1.25h2.345c.324 0 .644.07.938.205l.307.14Z"
  }));
};
SvgThumbsUpMinor.displayName = "ThumbsUpMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/TickMinor.svg.mjs


var SvgTickMinor = function SvgTickMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M15.78 5.97a.75.75 0 0 1 0 1.06l-6.5 6.5a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 1 1 1.06-1.06l2.72 2.72 5.97-5.97a.75.75 0 0 1 1.06 0Z"
  }));
};
SvgTickMinor.displayName = "TickMinor";



// EXTERNAL MODULE: ../polaris-icons/dist/icons/TickSmallMinor.svg.mjs
var TickSmallMinor_svg = __webpack_require__(57901);
;// CONCATENATED MODULE: ../polaris-icons/dist/icons/TiktokMinor.svg.mjs


var SvgTiktokMinor = function SvgTiktokMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M16 6.295c-1.92-.121-3.028-1.306-3.263-3.295l-2.306.008v8.367c.349 4.465-3.839 3.789-4.166 1.503-.167-1.192.432-1.875 1.502-2.232.153-.052.312-.098.473-.14.213-.054.427-.099.636-.133v-2.362c-4.796.167-5.715 4.473-4.22 6.918 2.322 3.804 8.112 2.148 8.112-3.167v-4.176c1.138.683 2.117 1.048 3.232.942v-2.233Z"
  }));
};
SvgTiktokMinor.displayName = "TiktokMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/TimeDecayModelMinor.svg.mjs


var SvgTimeDecayModelMinor = function SvgTimeDecayModelMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M16.75 4.25a.75.75 0 0 0-1.5 0v11.5a.75.75 0 0 0 1.5 0v-11.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M4.75 13.25a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0v-2.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M8 10a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.75 7.75a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.5 0v-8Z"
  }));
};
SvgTimeDecayModelMinor.displayName = "TimeDecayModelMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/TimelineAttachmentMajor.svg.mjs


var SvgTimelineAttachmentMajor = function SvgTimelineAttachmentMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M6.75 4c-.69 0-1.25.56-1.25 1.25v9.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25v-9a.75.75 0 0 1 1.5 0v9a2.75 2.75 0 0 1-2.75 2.75h-6.5a2.75 2.75 0 0 1-2.75-2.75v-9.5a2.75 2.75 0 0 1 2.75-2.75h3a2.75 2.75 0 0 1 2.75 2.75v6.25a2.5 2.5 0 0 1-5 0v-5.5a.75.75 0 0 1 1.5 0v5.5a1 1 0 1 0 2 0v-6.25c0-.69-.56-1.25-1.25-1.25h-3Z"
  }));
};
SvgTimelineAttachmentMajor.displayName = "TimelineAttachmentMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/TipsMajor.svg.mjs


var SvgTipsMajor = function SvgTipsMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M9.375 7.25a1.875 1.875 0 0 0 0 3.75h1.25a.375.375 0 0 1 0 .75h-2.375a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 1.5 0h.125a1.875 1.875 0 0 0 0-3.75h-1.25a.375.375 0 1 1 0-.75h2.375a.75.75 0 0 0 0-1.5h-.75a.75.75 0 0 0-1.5 0h-.125Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M5.75 5.77c0-.187.022-.368.065-.542a1 1 0 0 1 .685-1.728h7a1 1 0 0 1 .685 1.728c.042.174.065.355.065.542a.77.77 0 0 0 .289.6l.055.044a2.42 2.42 0 0 1 .906 1.886v5.45a2.75 2.75 0 0 1-2.75 2.75h-5.5a2.75 2.75 0 0 1-2.75-2.75v-5.45c0-.733.334-1.427.906-1.886l.055-.043a.77.77 0 0 0 .289-.601Zm1.5 0c0-.095.017-.186.049-.27h5.402a.768.768 0 0 1 .049.27c0 .69.313 1.341.852 1.772l.054.044a.915.915 0 0 1 .344.714v5.45c0 .69-.56 1.25-1.25 1.25h-5.5c-.69 0-1.25-.56-1.25-1.25v-5.45c0-.278.126-.54.344-.714l.054-.044a2.27 2.27 0 0 0 .852-1.772Z"
  }));
};
SvgTipsMajor.displayName = "TipsMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/TitleMinor.svg.mjs


var SvgTitleMinor = function SvgTitleMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M4 4.75a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-.75h-3.5v8.75h1.25a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5h1.25v-8.75h-3.5v.75a.75.75 0 0 1-1.5 0v-1.5Z"
  }));
};
SvgTitleMinor.displayName = "TitleMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ToggleMinor.svg.mjs


var SvgToggleMinor = function SvgToggleMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M8 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M8 4.5a5.5 5.5 0 1 0 0 11h4a5.5 5.5 0 1 0 0-11h-4Zm-4 5.5a4 4 0 0 1 4-4h4a4 4 0 0 1 0 8h-4a4 4 0 0 1-4-4Z"
  }));
};
SvgToggleMinor.displayName = "ToggleMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ToolsMajor.svg.mjs


var SvgToolsMajor = function SvgToolsMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M6.52 3.83a4.768 4.768 0 0 1 6.423 5.374l2.783 2.782a2.644 2.644 0 0 1-3.74 3.74l-2.782-2.782a4.768 4.768 0 0 1-5.373-6.424.75.75 0 0 1 1.228-.256l1.646 1.647a.853.853 0 0 0 1.206-1.206l-1.646-1.646a.75.75 0 0 1 .256-1.228Zm1.809 1.17.643.644a2.353 2.353 0 1 1-3.327 3.327l-.644-.644a3.268 3.268 0 0 0 4.216 3.069.75.75 0 0 1 .748.187l3.082 3.082a1.144 1.144 0 1 0 1.618-1.618l-3.082-3.082a.75.75 0 0 1-.187-.748 3.268 3.268 0 0 0-3.067-4.217Z"
  }));
};
SvgToolsMajor.displayName = "ToolsMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/TransactionFeeDollarMajor.svg.mjs


var SvgTransactionFeeDollarMajor = function SvgTransactionFeeDollarMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M4 5.25a2.25 2.25 0 0 1 4.372-.75h3.256a2.251 2.251 0 1 1 0 1.5h-2.878v5.25c0 .69.56 1.25 1.25 1.25h.25a.75.75 0 0 1 0 1.5h-.25a2.75 2.75 0 0 1-2.75-2.75v-3.984a2.25 2.25 0 0 1-3.25-2.016Zm2.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm7.5 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13.25 10.107a1.876 1.876 0 0 0 .625 3.643h.75a.375.375 0 0 1 0 .75h-1.875a.75.75 0 0 0 0 1.5h.5v.25a.75.75 0 0 0 1.5 0v-.254a1.875 1.875 0 0 0-.125-3.746h-.75a.375.375 0 0 1 0-.75h1.875a.75.75 0 0 0 0-1.5h-1v-.25a.75.75 0 0 0-1.5 0v.357Z"
  }));
};
SvgTransactionFeeDollarMajor.displayName = "TransactionFeeDollarMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/TransactionFeeEuroMajor.svg.mjs


var SvgTransactionFeeEuroMajor = function SvgTransactionFeeEuroMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M4 5.25a2.25 2.25 0 0 1 4.372-.75h3.256a2.251 2.251 0 1 1 0 1.5h-2.878v5.25c0 .69.56 1.25 1.25 1.25h.25a.75.75 0 0 1 0 1.5h-.25a2.75 2.75 0 0 1-2.75-2.75v-3.984a2.25 2.25 0 0 1-3.25-2.016Zm2.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm7.5 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14.053 12.468c.128-.823.46-1.207.708-1.357.309-.185.684-.136.959.138a.75.75 0 1 0 1.06-1.06c-.725-.727-1.85-.928-2.79-.364-.788.472-1.304 1.385-1.449 2.643h-.291a.75.75 0 0 0 0 1.5h.291c.145 1.258.661 2.172 1.448 2.644.941.564 2.066.363 2.791-.363a.75.75 0 0 0-1.06-1.06c-.275.273-.65.322-.96.136-.248-.149-.579-.533-.707-1.357h1.697a.75.75 0 0 0 0-1.5h-1.697Z"
  }));
};
SvgTransactionFeeEuroMajor.displayName = "TransactionFeeEuroMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/TransactionFeePoundMajor.svg.mjs


var SvgTransactionFeePoundMajor = function SvgTransactionFeePoundMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M4 5.25a2.25 2.25 0 0 1 4.372-.75h3.256a2.251 2.251 0 1 1 0 1.5h-2.878v5.25c0 .69.56 1.25 1.25 1.25h.25a.75.75 0 0 1 0 1.5h-.25a2.75 2.75 0 0 1-2.75-2.75v-3.984a2.25 2.25 0 0 1-3.25-2.016Zm2.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm7.5 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M15 8.75a1.75 1.75 0 0 0-1.75 1.75v2h-.5a.75.75 0 0 0 0 1.5h.5v1.5h-.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-1.5v-1.5h.5a.75.75 0 0 0 0-1.5h-.5v-2a.25.25 0 0 1 .25-.25h.5v1a.75.75 0 0 0 1.5 0v-1.25c0-.69-.56-1.25-1.25-1.25h-.75Z"
  }));
};
SvgTransactionFeePoundMajor.displayName = "TransactionFeePoundMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/TransactionFeeRupeeMajor.svg.mjs


var SvgTransactionFeeRupeeMajor = function SvgTransactionFeeRupeeMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M6.25 3a2.25 2.25 0 1 0 1 4.266v3.984a2.75 2.75 0 0 0 2.75 2.75h.25a.75.75 0 0 0 0-1.5h-.25c-.69 0-1.25-.56-1.25-1.25v-5.25h2.878a2.251 2.251 0 1 0 0-1.5h-3.256a2.25 2.25 0 0 0-2.122-1.5Zm-.75 2.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Zm7.5 0a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M16.143 15.611a.75.75 0 0 1-.786 1.278l-2.814-1.732c-.769-.473-.433-1.657.469-1.657.463 0 .852-.32.96-.75h-1.222a.75.75 0 0 1 0-1.5h1.25v-.75h-1.25a.75.75 0 0 1 0-1.5h3.5a.75.75 0 0 1 0 1.5h-.75v.75h.75a.75.75 0 0 1 0 1.5h-.761a2.487 2.487 0 0 1-1.06 1.807l1.714 1.054Z"
  }));
};
SvgTransactionFeeRupeeMajor.displayName = "TransactionFeeRupeeMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/TransactionFeeYenMajor.svg.mjs


var SvgTransactionFeeYenMajor = function SvgTransactionFeeYenMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M6.25 3a2.25 2.25 0 1 0 1 4.266v3.984a2.75 2.75 0 0 0 2.75 2.75h.25a.75.75 0 0 0 0-1.5h-.25c-.69 0-1.25-.56-1.25-1.25v-5.25h2.878a2.251 2.251 0 1 0 0-1.5h-3.256a2.25 2.25 0 0 0-2.122-1.5Zm-.75 2.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Zm7.5 0a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.994 9.186a.75.75 0 0 0-.988 1.128l1.744 1.526v.41h-1a.75.75 0 0 0 0 1.5h1v.5h-1a.75.75 0 0 0 0 1.5h1v.5a.75.75 0 0 0 1.5 0v-.5h1a.75.75 0 0 0 0-1.5h-1v-.5h1a.75.75 0 0 0 0-1.5h-1v-.41l1.744-1.526a.75.75 0 1 0-.988-1.128l-1.506 1.317-1.506-1.317Z"
  }));
};
SvgTransactionFeeYenMajor.displayName = "TransactionFeeYenMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/TransactionMajor.svg.mjs


var SvgTransactionMajor = function SvgTransactionMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M4.5 4.75a.75.75 0 0 0-1.5 0v10.5a.75.75 0 0 0 1.5 0v-6.75h6.94l-.72.72a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06l-2-2a.75.75 0 1 0-1.06 1.06l.72.72h-6.94v-2.25Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M17 4.75a.75.75 0 0 0-1.5 0v7.25h-6.94l.72-.72a.75.75 0 1 0-1.06-1.06l-2 2a.75.75 0 0 0 0 1.06l2 2a.75.75 0 0 0 1.06-1.06l-.72-.72h6.94v1.75a.75.75 0 0 0 1.5 0v-10.5Z"
  }));
};
SvgTransactionMajor.displayName = "TransactionMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/TransferFilledMajor.svg.mjs


var SvgTransferFilledMajor = function SvgTransferFilledMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M4 4a1 1 0 0 1 1 1v4h5.336l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414l1.293-1.293h-5.336v4a1 1 0 1 1-2 0v-10a1 1 0 0 1 1-1Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M16 4a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0v-10a1 1 0 0 1 1-1Z"
  }));
};
SvgTransferFilledMajor.displayName = "TransferFilledMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/TransferInMajor.svg.mjs


var SvgTransferInMajor = function SvgTransferInMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M16.5 4.25a.75.75 0 0 0-1.5 0v11.5a.75.75 0 0 0 1.5 0v-11.5Zm-12.25 6.5a.75.75 0 0 1 0-1.5h6.94l-1.72-1.72a.75.75 0 0 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72h-6.94Z"
  }));
};
SvgTransferInMajor.displayName = "TransferInMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/TransferMajor.svg.mjs


var SvgTransferMajor = function SvgTransferMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M3.75 4a.75.75 0 0 1 .75.75v4.5h6.69l-1.72-1.72a.75.75 0 0 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72h-6.69v4.5a.75.75 0 0 1-1.5 0v-10.5a.75.75 0 0 1 .75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M16.25 4a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-1.5 0v-10.5a.75.75 0 0 1 .75-.75Z"
  }));
};
SvgTransferMajor.displayName = "TransferMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/TransferOutMajor.svg.mjs


var SvgTransferOutMajor = function SvgTransferOutMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M16.5 4.25a.75.75 0 0 0-1.5 0v11.5a.75.75 0 0 0 1.5 0v-11.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13 10.75a.75.75 0 0 0 0-1.5h-6.94l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06l-1.72-1.72h6.94Z"
  }));
};
SvgTransferOutMajor.displayName = "TransferOutMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/TransferWithinShopifyMajor.svg.mjs


var SvgTransferWithinShopifyMajor = function SvgTransferWithinShopifyMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M6.25 3.5a2.75 2.75 0 0 0-2.75 2.75v7.5a2.75 2.75 0 0 0 2.75 2.75h7.5a2.75 2.75 0 0 0 2.75-2.75v-7.5a2.75 2.75 0 0 0-2.75-2.75h-7.5Zm-1.25 7h6.44l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 1 0-1.06 1.06l1.22 1.22h-6.44v-2.75c0-.69.56-1.25 1.25-1.25h.5v2a.75.75 0 0 0 1.5 0v-2h5.5c.69 0 1.25.56 1.25 1.25v7.5c0 .69-.56 1.25-1.25 1.25h-5.5v-2a.75.75 0 0 0-1.5 0v2h-.5c-.69 0-1.25-.56-1.25-1.25v-3.25Z"
  }));
};
SvgTransferWithinShopifyMajor.displayName = "TransferWithinShopifyMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/TranslateMajor.svg.mjs


var SvgTranslateMajor = function SvgTranslateMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M6.955 3.994a.75.75 0 0 0-1.41 0l-2 5.5a.75.75 0 1 0 1.41.512l.187-.514a.756.756 0 0 0 .108.008h2.111l.184.506a.75.75 0 1 0 1.41-.512l-2-5.5Zm-.705 2.45.566 1.556h-1.132l.566-1.555Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14.55 7.75v-1a.25.25 0 0 0-.25-.25h-1.49l.22.22a.75.75 0 1 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06l1.5-1.5a.75.75 0 0 1 1.06 1.06l-.22.22h1.49c.966 0 1.75.783 1.75 1.75v1a.75.75 0 1 1-1.5 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M5.5 12.25v1c0 .138.112.25.25.25h1.49l-.22-.22a.75.75 0 1 1 1.06-1.06l1.5 1.5a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 0 1-1.06-1.06l.22-.22h-1.49a1.75 1.75 0 0 1-1.75-1.75v-1a.75.75 0 1 1 1.5 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M11.002 11.5h-.252a.75.75 0 0 1 0-1.5h1.75v-.25a.75.75 0 0 1 1.5 0v.25h1.75a.75.75 0 0 1 0 1.5h-.312a5.877 5.877 0 0 1-.4 1.945 5.13 5.13 0 0 1-.69 1.227c.293.161.634.3 1.03.402a.75.75 0 0 1-.376 1.452 5.676 5.676 0 0 1-1.782-.788 5.677 5.677 0 0 1-1.782.788.75.75 0 1 1-.376-1.452c.396-.103.737-.24 1.03-.402a5.115 5.115 0 0 1-.69-1.227 5.88 5.88 0 0 1-.4-1.945Zm2.935 0h-1.434a4.381 4.381 0 0 0 .295 1.394c.101.257.237.524.422.782.185-.258.32-.525.422-.782a4.386 4.386 0 0 0 .295-1.394Z"
  }));
};
SvgTranslateMajor.displayName = "TranslateMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/TransportMajor.svg.mjs


var SvgTransportMajor = function SvgTransportMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M14.75 7.75a2.25 2.25 0 0 1 0 4.5h-1.74l-1.583 3.322a.75.75 0 0 1-.677.428h-2.25a.75.75 0 0 1-.742-.856l.413-2.894h-.88l-.684.941a.75.75 0 0 1-.607.309h-2.25a.75.75 0 0 1-.705-1.006l.907-2.494-.907-2.494a.75.75 0 0 1 .705-1.006h2.25a.75.75 0 0 1 .607.309l.684.941h.88l-.413-2.894a.75.75 0 0 1 .742-.856h2.25a.75.75 0 0 1 .677.428l1.582 3.322h1.741Zm.75 2.25a.75.75 0 0 0-.75-.75h-2.214a.75.75 0 0 1-.677-.428l-1.583-3.322h-.911l.413 2.894a.75.75 0 0 1-.742.856h-2.127a.75.75 0 0 1-.606-.309l-.685-.941h-.797l.634 1.744a.75.75 0 0 1 0 .512l-.634 1.744h.797l.685-.941a.75.75 0 0 1 .606-.309h2.127a.75.75 0 0 1 .742.856l-.413 2.894h.911l1.583-3.322a.75.75 0 0 1 .677-.428h2.214a.75.75 0 0 0 .75-.75Z"
  }));
};
SvgTransportMajor.displayName = "TransportMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/TroubleshootMajor.svg.mjs


var SvgTroubleshootMajor = function SvgTroubleshootMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M6.52 3.83a4.768 4.768 0 0 1 6.423 5.374l2.783 2.782a2.644 2.644 0 0 1-3.74 3.74l-2.782-2.782a4.768 4.768 0 0 1-5.373-6.424.75.75 0 0 1 1.228-.256l1.646 1.647a.853.853 0 0 0 1.206-1.206l-1.646-1.646a.75.75 0 0 1 .256-1.228Zm1.809 1.17.643.644a2.353 2.353 0 1 1-3.327 3.327l-.644-.644a3.268 3.268 0 0 0 4.216 3.069.75.75 0 0 1 .748.187l3.082 3.082a1.144 1.144 0 1 0 1.618-1.618l-3.082-3.082a.75.75 0 0 1-.187-.748 3.268 3.268 0 0 0-3.067-4.217Z"
  }));
};
SvgTroubleshootMajor.displayName = "TroubleshootMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/TumblrMinor.svg.mjs


var SvgTumblrMinor = function SvgTumblrMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14.358 13.637a.27.27 0 0 0-.276.012c-.626.411-1.26.62-1.887.62-.337 0-.626-.075-.885-.23-.176-.105-.34-.287-.399-.445-.057-.15-.056-.556-.055-1.117v-3.422h2.846a.27.27 0 0 0 .27-.27v-2.403a.27.27 0 0 0-.27-.27h-2.846v-2.843a.27.27 0 0 0-.27-.269h-1.916a.27.27 0 0 0-.268.237c-.08.658-.23 1.205-.445 1.626-.21.414-.493.775-.843 1.073-.28.239-.761.47-1.428.687a.27.27 0 0 0-.186.256v1.907c0 .148.12.269.27.269h1.56v4.451c0 .656.07 1.15.213 1.51.146.365.406.709.771 1.022.36.308.797.549 1.302.716.49.16.88.246 1.537.246a6.98 6.98 0 0 0 1.575-.171 8.334 8.334 0 0 0 1.617-.589.27.27 0 0 0 .155-.243v-2.123a.27.27 0 0 0-.142-.237Z"
  }));
};
SvgTumblrMinor.displayName = "TumblrMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/TwitchMinor.svg.mjs


var SvgTwitchMinor = function SvgTwitchMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13.5 5.75h-1v3h1v-3Zm-3.75 0h1v3h-1v-3Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "m6.5 3-2.5 2.5v9h3v2.5l2.5-2.5h2l4.5-4.5v-7h-9.5Zm8.5 6.5-2 2h-2l-1.75 1.75v-1.75h-2.25v-7.5h8v5.5Z"
  }));
};
SvgTwitchMinor.displayName = "TwitchMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/TwitterMinor.svg.mjs


var SvgTwitterMinor = function SvgTwitterMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M15 6.25c.584-.071 1.235-.285 1.75-.513-.05.074-.097.145-.142.215-.306.466-.544.827-1.035 1.173.006.121.01.535.01.66 0 3.763-2.883 7.798-8.166 7.798-1.622 0-3.396-.375-4.667-1.18.165.02.277.018.418.015l.165-.001c1.347 0 3.1-.405 4.084-1.167-1.257-.024-3.093-.621-3.458-1.75.89 0 1.26-.15 1.493-.244.062-.025.114-.046.163-.06-1.313-.261-2.282-1.199-2.282-2.58v-.033c.388.21 1.28.57 1.75.584-.771-.512-1.746-1.59-1.746-2.65 0-.52.14-1.013.389-1.434 1.416 1.723 3.69 3.5 6.024 3.5v-1.166c0-1.572 1.107-2.917 2.693-2.917.826 0 1.572.246 2.094.8.655-.126 1.658-.474 2.213-.8-.214.664-1.156 1.398-1.75 1.75Z"
  }));
};
SvgTwitterMinor.displayName = "TwitterMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/TypeMajor.svg.mjs


var SvgTypeMajor = function SvgTypeMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "m7.077 12.5-.978 2.5h.401a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1 0-1.5h.488l4.314-11.023a.75.75 0 0 1 .814-.468 1 1 0 0 1 1.06.613l4.45 10.878h.874a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5h.465l-1.023-2.5h-4.865Zm.587-1.5 1.792-4.578 1.873 4.578h-3.665Z"
  }));
};
SvgTypeMajor.displayName = "TypeMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/TypeMinor.svg.mjs


var SvgTypeMinor = function SvgTypeMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "m7.077 12.5-.978 2.5h.401a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1 0-1.5h.488l4.314-11.023a.75.75 0 0 1 .814-.468 1 1 0 0 1 1.06.613l4.45 10.878h.874a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5h.465l-1.023-2.5h-4.865Zm.587-1.5 1.792-4.578 1.873 4.578h-3.665Z"
  }));
};
SvgTypeMinor.displayName = "TypeMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/UnderlineMajor.svg.mjs


var SvgUnderlineMajor = function SvgUnderlineMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M7.25 3.75a.75.75 0 0 0-1.5 0v6a4.25 4.25 0 0 0 8.5 0v-6a.75.75 0 0 0-1.5 0v6a2.75 2.75 0 1 1-5.5 0v-6Zm-2.5 11.75a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5h-10.5Z"
  }));
};
SvgUnderlineMajor.displayName = "UnderlineMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/UnderlineMinor.svg.mjs


var SvgUnderlineMinor = function SvgUnderlineMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M7.25 3.75a.75.75 0 0 0-1.5 0v6a4.25 4.25 0 0 0 8.5 0v-6a.75.75 0 0 0-1.5 0v6a2.75 2.75 0 1 1-5.5 0v-6Zm-2.5 11.75a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5h-10.5Z"
  }));
};
SvgUnderlineMinor.displayName = "UnderlineMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/UndoMajor.svg.mjs


var SvgUndoMajor = function SvgUndoMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M7.47 3.72a.75.75 0 0 1 1.06 1.06l-1.72 1.72h3.94a5 5 0 0 1 0 10h-1.5a.75.75 0 0 1 0-1.5h1.5a3.5 3.5 0 1 0 0-7h-3.94l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3Z"
  }));
};
SvgUndoMajor.displayName = "UndoMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/UnfulfilledMajor.svg.mjs


var SvgUnfulfilledMajor = function SvgUnfulfilledMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.53 4.78a.75.75 0 0 0-1.06-1.06l-1.47 1.47-1.47-1.47a.75.75 0 0 0-1.06 1.06l1.47 1.47-1.47 1.47a.75.75 0 0 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 1 0 1.06-1.06l-1.47-1.47 1.47-1.47Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "m14.844 10-.336-2.265a.75.75 0 1 1 1.484-.22l.413 2.792c.063.425.095.853.095 1.282v1.661a3.25 3.25 0 0 1-3.25 3.25h-6.5a3.25 3.25 0 0 1-3.25-3.25v-1.66c0-.43.032-.858.094-1.283l.414-2.792a.75.75 0 0 1 1.484.22l-.336 2.265h2.484a1.25 1.25 0 0 1 1.185.855l.159.474a.25.25 0 0 0 .237.171h1.558a.25.25 0 0 0 .237-.17l.159-.475a1.25 1.25 0 0 1 1.185-.855h2.484Zm-9.843 1.5-.001.09v1.66c0 .967.784 1.75 1.75 1.75h6.5a1.75 1.75 0 0 0 1.75-1.75v-1.75h-2.46l-.1.303a1.75 1.75 0 0 1-1.66 1.197h-1.56a1.75 1.75 0 0 1-1.66-1.197l-.1-.303h-2.46Z"
  }));
};
SvgUnfulfilledMajor.displayName = "UnfulfilledMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/UnknownDeviceMajor.svg.mjs


var SvgUnknownDeviceMajor = function SvgUnknownDeviceMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M10 7.25c-.69 0-1.25.56-1.25 1.25a.75.75 0 0 1-1.5 0 2.75 2.75 0 1 1 3.758 2.56.61.61 0 0 0-.226.147.154.154 0 0 0-.032.046.75.75 0 0 1-1.5-.003c0-.865.696-1.385 1.208-1.586a1.25 1.25 0 0 0-.458-2.414Zm.75 4.003v.002-.002Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10 14.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M4 5.75a2.75 2.75 0 0 1 2.75-2.75h6.5a2.75 2.75 0 0 1 2.75 2.75v8.5a2.75 2.75 0 0 1-2.75 2.75h-6.5a2.75 2.75 0 0 1-2.75-2.75v-8.5Zm2.75-1.25c-.69 0-1.25.56-1.25 1.25v8.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25v-8.5c0-.69-.56-1.25-1.25-1.25h-6.5Z"
  }));
};
SvgUnknownDeviceMajor.displayName = "UnknownDeviceMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/UpdateInventoryMajor.svg.mjs


var SvgUpdateInventoryMajor = function SvgUpdateInventoryMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11.265 2.952a2.25 2.25 0 0 0-2.53 0l-4.094 2.783a3.75 3.75 0 0 0-1.641 3.101v7.413a.75.75 0 0 0 1.5 0v-7.413c0-.745.369-1.441.985-1.86l4.093-2.784a.75.75 0 0 1 .844 0l4.093 2.784a2.25 2.25 0 0 1 .985 1.86v7.413a.75.75 0 0 0 1.5 0v-7.413a3.75 3.75 0 0 0-1.641-3.1l-4.094-2.784Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M13.28 10.28a.75.75 0 0 0-1.06-1.061l-2.97 2.97-1.22-1.22a.75.75 0 1 0-1.06 1.06l1.75 1.75a.75.75 0 0 0 1.06 0l3.5-3.5Z"
  }));
};
SvgUpdateInventoryMajor.displayName = "UpdateInventoryMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/UploadMajor.svg.mjs


var SvgUploadMajor = function SvgUploadMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M16.5 6.26a.75.75 0 0 1-1.5 0v-.51a.75.75 0 0 0-.75-.75h-8.5a.75.75 0 0 0-.75.75v.51a.75.75 0 0 1-1.5 0v-.51a2.25 2.25 0 0 1 2.25-2.25h8.5a2.25 2.25 0 0 1 2.25 2.25v.51Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10.75 16.01a.75.75 0 0 1-1.5 0v-6.69l-1.72 1.72a.75.75 0 1 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0l3 3a.75.75 0 1 1-1.06 1.06l-1.72-1.72v6.69Z"
  }));
};
SvgUploadMajor.displayName = "UploadMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/VariantMajor.svg.mjs


var SvgVariantMajor = function SvgVariantMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M6.01 6.01a2.75 2.75 0 0 1 2.74-2.51h5a2.75 2.75 0 0 1 2.75 2.75v5a2.75 2.75 0 0 1-2.51 2.74 2.75 2.75 0 0 1-2.74 2.51h-5a2.739 2.739 0 0 1-1.771-.646 1.001 1.001 0 0 1-.333-.333 2.739 2.739 0 0 1-.646-1.771v-5a2.75 2.75 0 0 1 2.51-2.74Zm1.515-.01h3.725c.675 0 1.293.243 1.771.646a1.003 1.003 0 0 1 .333.333c.403.478.646 1.096.646 1.771v3.725c.57-.116 1-.62 1-1.225v-5c0-.69-.56-1.25-1.25-1.25h-5c-.605 0-1.11.43-1.225 1Zm-1.275 1.5h4.836l-6.086 6.086v-4.836c0-.69.56-1.25 1.25-1.25Zm5 7.5h-4.836l6.086-6.086v4.836c0 .69-.56 1.25-1.25 1.25Z"
  }));
};
SvgVariantMajor.displayName = "VariantMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ViewMajor.svg.mjs


var SvgViewMajor = function SvgViewMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M13 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-1.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M10 4c-2.476 0-4.348 1.23-5.577 2.532a9.266 9.266 0 0 0-1.4 1.922 5.98 5.98 0 0 0-.37.818c-.082.227-.153.488-.153.728s.071.501.152.728c.088.246.213.524.371.818.317.587.784 1.27 1.4 1.922 1.229 1.302 3.1 2.532 5.577 2.532 2.476 0 4.348-1.23 5.577-2.532a9.265 9.265 0 0 0 1.4-1.922 5.98 5.98 0 0 0 .37-.818c.082-.227.153-.488.153-.728s-.071-.501-.152-.728a5.984 5.984 0 0 0-.371-.818 9.269 9.269 0 0 0-1.4-1.922c-1.229-1.302-3.1-2.532-5.577-2.532Zm-5.999 6.002v-.004c.004-.02.017-.09.064-.223a4.5 4.5 0 0 1 .278-.608 7.768 7.768 0 0 1 1.17-1.605c1.042-1.104 2.545-2.062 4.487-2.062 1.942 0 3.445.958 4.486 2.062a7.77 7.77 0 0 1 1.17 1.605c.13.24.221.447.279.608.047.132.06.203.064.223v.004c-.004.02-.017.09-.064.223a4.503 4.503 0 0 1-.278.608 7.768 7.768 0 0 1-1.17 1.605c-1.042 1.104-2.545 2.062-4.487 2.062-1.942 0-3.445-.958-4.486-2.062a7.766 7.766 0 0 1-1.17-1.605 4.5 4.5 0 0 1-.279-.608c-.047-.132-.06-.203-.064-.223Z"
  }));
};
SvgViewMajor.displayName = "ViewMajor";



// EXTERNAL MODULE: ../polaris-icons/dist/icons/ViewMinor.svg.mjs
var ViewMinor_svg = __webpack_require__(1151);
;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ViewportNarrowMajor.svg.mjs


var SvgViewportNarrowMajor = function SvgViewportNarrowMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M7.75 5c0-.966.784-1.75 1.75-1.75h1c.966 0 1.75.784 1.75 1.75v1.76a.75.75 0 0 1-1.5 0v-1.76a.25.25 0 0 0-.25-.25h-1a.25.25 0 0 0-.25.25v1.76a.75.75 0 0 1-1.5 0v-1.76Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M8.5 12.49a.75.75 0 0 1 .75.75v1.76c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25v-1.76a.75.75 0 0 1 1.5 0v1.76a1.75 1.75 0 0 1-1.75 1.75h-1a1.75 1.75 0 0 1-1.75-1.75v-1.76a.75.75 0 0 1 .75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M4 10c0 .414.336.75.75.75h2.44l-.72.72a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06l-2-2a.75.75 0 1 0-1.06 1.06l.72.72h-2.44a.75.75 0 0 0-.75.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M15.25 10.75a.75.75 0 0 0 0-1.5h-2.44l.72-.72a.75.75 0 0 0-1.06-1.06l-2 2a.75.75 0 0 0 0 1.06l2 2a.75.75 0 1 0 1.06-1.06l-.72-.72h2.44Z"
  }));
};
SvgViewportNarrowMajor.displayName = "ViewportNarrowMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ViewportShortMajor.svg.mjs


var SvgViewportShortMajor = function SvgViewportShortMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10 4a.75.75 0 0 0-.75.75v2.44l-.72-.72a.75.75 0 1 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l2-2a.75.75 0 0 0-1.06-1.06l-.72.72v-2.44a.75.75 0 0 0-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M4.75 12.25a1.75 1.75 0 0 1-1.75-1.75v-1c0-.966.784-1.75 1.75-1.75h1.875a.75.75 0 0 1 0 1.5h-1.875a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25h1.875a.75.75 0 0 1 0 1.5h-1.875Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.625 11.5a.75.75 0 0 1 .75-.75h1.875a.25.25 0 0 0 .25-.25v-1a.25.25 0 0 0-.25-.25h-1.875a.75.75 0 0 1 0-1.5h1.875c.966 0 1.75.784 1.75 1.75v1a1.75 1.75 0 0 1-1.75 1.75h-1.875a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M9.25 15.25a.75.75 0 0 0 1.5 0v-2.44l.72.72a.75.75 0 0 0 1.06-1.06l-2-2a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 1 0 1.06 1.06l.72-.72v2.44Z"
  }));
};
SvgViewportShortMajor.displayName = "ViewportShortMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ViewportTallMajor.svg.mjs


var SvgViewportTallMajor = function SvgViewportTallMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M9.25 9v-2.44l-.72.72a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1-1.06 1.06l-.72-.72v2.44a.75.75 0 0 1-1.5 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M5.75 16a2.75 2.75 0 0 1-2.75-2.75v-6.5a2.75 2.75 0 0 1 2.75-2.75h.875a.75.75 0 0 1 0 1.5h-.875c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h.875a.75.75 0 0 1 0 1.5h-.875Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.625 15.25a.75.75 0 0 1 .75-.75h.875c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25h-.875a.75.75 0 0 1 0-1.5h.875a2.75 2.75 0 0 1 2.75 2.75v6.5a2.75 2.75 0 0 1-2.75 2.75h-.875a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M9.25 13.44v-2.44a.75.75 0 0 1 1.5 0v2.44l.72-.72a.75.75 0 0 1 1.06 1.06l-2 2.001a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72Z"
  }));
};
SvgViewportTallMajor.displayName = "ViewportTallMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/ViewportWideMajor.svg.mjs


var SvgViewportWideMajor = function SvgViewportWideMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M4 5.75a2.75 2.75 0 0 1 2.75-2.75h6.5a2.75 2.75 0 0 1 2.75 2.75v.875a.75.75 0 0 1-1.5 0v-.875c0-.69-.56-1.25-1.25-1.25h-6.5c-.69 0-1.25.56-1.25 1.25v.875a.75.75 0 0 1-1.5 0v-.875Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M4.75 12.625a.75.75 0 0 1 .75.75v.875c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25v-.875a.75.75 0 0 1 1.5 0v.875a2.75 2.75 0 0 1-2.75 2.75h-6.5a2.75 2.75 0 0 1-2.75-2.75v-.875a.75.75 0 0 1 .75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M9.75 10a.75.75 0 0 1-.75.75h-2.44l.72.72a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06l2-2a.75.75 0 1 1 1.06 1.06l-.72.72h2.44a.75.75 0 0 1 .75.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M11 10.75a.75.75 0 0 1 0-1.5h2.44l-.72-.72a.75.75 0 0 1 1.06-1.06l2 2a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l.72-.72h-2.44Z"
  }));
};
SvgViewportWideMajor.displayName = "ViewportWideMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/VimeoMinor.svg.mjs


var SvgVimeoMinor = function SvgVimeoMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M16.922 5.189c-.247-1.028-1.406-1.319-2.577-1.14-.6.094-2.628 1-3.32 3.171 1.223-.096 1.864.089 1.747 1.451-.05.57-.333 1.195-.652 1.794-.366.692-1.055 2.047-1.957 1.07-.812-.88-.75-2.561-.935-3.682-.105-.63-.214-1.413-.418-2.06-.174-.557-.576-1.226-1.068-1.373-.528-.155-1.18.09-1.563.319-1.192.707-2.084 1.682-3.107 2.522-.13.131-.053.242-.01.34.147.23.204.369.484.41.728.108 1.42-.686 1.901.142.295.504.387 1.056.575 1.6.25.727.445 1.516.651 2.35.35 1.411.776 3.52 1.982 4.04.614.262 1.538-.09 2.006-.371 1.268-.76 2.299-1.828 3.101-2.984 2.089-3.005 3.09-6.025 3.199-6.6.077-.417.027-.761-.04-.999Z"
  }));
};
SvgVimeoMinor.displayName = "VimeoMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/VocabularyMajor.svg.mjs


var SvgVocabularyMajor = function SvgVocabularyMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.75 6a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.75 9a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.75 12a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12 6.75a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M12 9.75a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M7.586 3.5c.87 0 1.714.273 2.414.771a4.164 4.164 0 0 1 2.414-.771h2.336c.966 0 1.75.784 1.75 1.75v9.5a1.75 1.75 0 0 1-1.75 1.75h-.238a9.25 9.25 0 0 0-3.161.557l-1.095.398a.75.75 0 0 1-.493.007l-1.46-.487a9.25 9.25 0 0 0-2.926-.475h-.127a1.75 1.75 0 0 1-1.75-1.75v-9.5c0-.966.784-1.75 1.75-1.75h2.336Zm-2.586 1.75a.25.25 0 0 1 .25-.25h2.336c.608 0 1.194.208 1.664.584v10.125l-.473-.157a10.75 10.75 0 0 0-3.4-.552h-.127a.25.25 0 0 1-.25-.25v-9.5Zm5.75 10.43v-10.096a2.664 2.664 0 0 1 1.664-.584h2.336a.25.25 0 0 1 .25.25v9.5a.25.25 0 0 1-.25.25h-.238a10.75 10.75 0 0 0-3.674.647l-.088.032Z"
  }));
};
SvgVocabularyMajor.displayName = "VocabularyMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/VolumeMinor.svg.mjs


var SvgVolumeMinor = function SvgVolumeMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M13.5 5v3.042a3 3 0 0 0 .137.895l1.552 4.966a2 2 0 0 1-1.91 2.597h-6.559a2 2 0 0 1-1.909-2.597l1.552-4.966a3 3 0 0 0 .137-.895v-3.042h-.5a.75.75 0 0 1 0-1.5h8a.75.75 0 0 1 0 1.5h-.5Zm-5.5 3.042v-3.042h4v2.25h-.75a.75.75 0 0 0 0 1.5h.806c.034.214.084.427.149.634l.27.866h-4.95l.27-.866a4.5 4.5 0 0 0 .205-1.342Zm-.944 3.708h5.888l.813 2.6a.5.5 0 0 1-.477.65h-6.56a.5.5 0 0 1-.477-.65l.813-2.6Z"
  }));
};
SvgVolumeMinor.displayName = "VolumeMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/WandMajor.svg.mjs


var SvgWandMajor = function SvgWandMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M14.737 3.677a1.75 1.75 0 0 0-2.474 0l-8.586 8.585a1.75 1.75 0 0 0 0 2.475l1.586 1.586a1.75 1.75 0 0 0 2.474 0l6.784-6.784.01-.009.008-.009 1.784-1.784a1.75 1.75 0 0 0 0-2.475l-1.586-1.585Zm-.737 4.262 1.263-1.262a.25.25 0 0 0 0-.354l-1.586-1.586a.25.25 0 0 0-.354 0l-1.262 1.263 1.939 1.94Zm-3-.878-6.263 6.262a.25.25 0 0 0 0 .354l1.586 1.585a.25.25 0 0 0 .354 0l6.262-6.262-1.94-1.94Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14.25 12a.75.75 0 0 1 .75.75v.75h.75a.75.75 0 0 1 0 1.5h-.75v.75a.75.75 0 0 1-1.5 0v-.75h-.75a.75.75 0 0 1 0-1.5h.75v-.75a.75.75 0 0 1 .75-.75Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.5 4.25a.75.75 0 0 0-1.5 0v.75h-.75a.75.75 0 0 0 0 1.5h.75v.75a.75.75 0 0 0 1.5 0v-.75h.75a.75.75 0 0 0 0-1.5h-.75v-.75Z"
  }));
};
SvgWandMajor.displayName = "WandMajor";



// EXTERNAL MODULE: ../polaris-icons/dist/icons/WandMinor.svg.mjs
var WandMinor_svg = __webpack_require__(97007);
;// CONCATENATED MODULE: ../polaris-icons/dist/icons/WearableMajor.svg.mjs


var SvgWearableMajor = function SvgWearableMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M10.75 8.75a.75.75 0 0 0-1.5 0v1.25c0 .199.079.39.22.53l1.25 1.25a.75.75 0 1 0 1.06-1.06l-1.03-1.03v-.94Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M9 3a1.75 1.75 0 0 0-1.75 1.75v.933a3.75 3.75 0 0 0-2 3.317v2a3.75 3.75 0 0 0 2 3.318v.932c0 .966.784 1.75 1.75 1.75h2a1.75 1.75 0 0 0 1.75-1.75v-.932a3.75 3.75 0 0 0 2-3.318v-2a3.75 3.75 0 0 0-2-3.317v-.933a1.75 1.75 0 0 0-1.75-1.75h-2Zm0 2.25c-.084 0-.167.003-.25.008v-.508a.25.25 0 0 1 .25-.25h2a.25.25 0 0 1 .25.25v.508a3.805 3.805 0 0 0-.25-.008h-2Zm-.25 10v-.508c.083.005.166.008.25.008h2c.084 0 .167-.003.25-.008v.508a.25.25 0 0 1-.25.25h-2a.25.25 0 0 1-.25-.25Zm.25-8.5a2.25 2.25 0 0 0-2.25 2.25v2a2.25 2.25 0 0 0 2.25 2.25h2a2.25 2.25 0 0 0 2.25-2.25v-2a2.25 2.25 0 0 0-2.25-2.25h-2Z"
  }));
};
SvgWearableMajor.displayName = "WearableMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/WeightMinor.svg.mjs


var SvgWeightMinor = function SvgWeightMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M4.75 3.75a.75.75 0 0 0-1.5 0c0 .966.784 1.75 1.75 1.75h4.25v1.5h-3.5a2.25 2.25 0 0 0-2.25 2.25v5a2.25 2.25 0 0 0 2.25 2.25h8.5a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-3.5v-1.5h4.25a1.75 1.75 0 0 0 1.75-1.75.75.75 0 0 0-1.5 0 .25.25 0 0 1-.25.25h-10a.25.25 0 0 1-.25-.25Zm.25 5.5a.75.75 0 0 1 .75-.75h4.25a3 3 0 1 0 0 6 3 3 0 0 0 0-6h4.25a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75h-8.5a.75.75 0 0 1-.75-.75v-5Zm5 3.75a1.5 1.5 0 0 0 1.478-1.756l-.998.832a.75.75 0 1 1-.96-1.152l.998-.832a1.5 1.5 0 1 0-.518 2.908Z"
  }));
};
SvgWeightMinor.displayName = "WeightMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/WholesaleMajor.svg.mjs


var SvgWholesaleMajor = function SvgWholesaleMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M15 4.25a.75.75 0 0 0-1.5 0v3.98l-.8-2.001a2.75 2.75 0 0 0-2.554-1.729h-3.396a.75.75 0 0 0-.75.75v3.25h-1.75a.75.75 0 0 0-.75.75v3.159a2.5 2.5 0 1 0 4.636 1.841h2.479a2.501 2.501 0 0 0 4.835-1.25h1.8a.75.75 0 0 0 0-1.5h-2.25v-7.25Zm-8.589 10a.998.998 0 0 0 0-1.5.996.996 0 0 0-1.322 0 .998.998 0 0 0 0 1.5.996.996 0 0 0 1.322 0Zm-1.411-3.136a2.501 2.501 0 0 1 3.136 1.636h2.479a2.502 2.502 0 0 1 2.135-1.738v-.012h-3.25a.75.75 0 0 1-.256-.045l-2.626-.955h-1.618v1.114Zm7.338 1.636a1 1 0 1 1 1.323 1.498 1 1 0 0 1-1.322-1.498Zm-2.706-3.25h2.76l-1.085-2.714a1.25 1.25 0 0 0-1.161-.786h-2.646v2.725l2.132.775Z"
  }));
};
SvgWholesaleMajor.displayName = "WholesaleMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/WifiMajor.svg.mjs


var SvgWifiMajor = function SvgWifiMajor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M2.25 7.218a.75.75 0 0 0 1.06 1.06 9.5 9.5 0 0 1 13.435 0 .75.75 0 1 0 1.061-1.06c-4.296-4.296-11.26-4.296-15.556 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M4.725 10.753a.75.75 0 0 1 0-1.06 7.5 7.5 0 0 1 10.606 0 .75.75 0 1 1-1.06 1.06 6 6 0 0 0-8.486 0 .75.75 0 0 1-1.06 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.846 11.814a.75.75 0 0 0 1.06 1.06 3 3 0 0 1 4.243 0 .75.75 0 1 0 1.06-1.06 4.5 4.5 0 0 0-6.363 0Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M8.967 13.936a1.5 1.5 0 1 0 2.122 2.121 1.5 1.5 0 0 0-2.122-2.121Z"
  }));
};
SvgWifiMajor.displayName = "WifiMajor";



;// CONCATENATED MODULE: ../polaris-icons/dist/icons/YoutubeMinor.svg.mjs


var SvgYoutubeMinor = function SvgYoutubeMinor(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/external_react_.createElement("path", {
    d: "M16.86 7s-.14-.97-.56-1.4c-.53-.56-1.13-.56-1.4-.6-1.96-.14-4.9-.14-4.9-.14s-2.94 0-4.9.14c-.28.04-.87.04-1.4.6-.43.43-.56 1.4-.56 1.4s-.14 1.14-.14 2.28v1.07c0 1.14.14 2.28.14 2.28s.14.98.55 1.4c.54.56 1.24.55 1.55.6 1.12.11 4.76.15 4.76.15s2.94 0 4.9-.15c.27-.03.87-.04 1.4-.6.42-.42.56-1.4.56-1.4s.14-1.14.14-2.28v-1.07c0-1.14-.14-2.28-.14-2.28Zm-8.31 4.65v-3.96l3.78 1.98-3.78 1.98Z"
  }));
};
SvgYoutubeMinor.displayName = "YoutubeMinor";



;// CONCATENATED MODULE: ../polaris-icons/dist/index.mjs




































































































































































































































































































































































































































































































































































































/***/ })

};
;