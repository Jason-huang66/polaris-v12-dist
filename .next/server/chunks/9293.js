"use strict";
exports.id = 9293;
exports.ids = [9293];
exports.modules = {

/***/ 39293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GD": () => (/* binding */ useTOC),
/* harmony export */   "GS": () => (/* binding */ useMedia),
/* harmony export */   "fB": () => (/* binding */ useThrottle),
/* harmony export */   "m9": () => (/* binding */ useCopyToClipboard)
/* harmony export */ });
/* unused harmony export useQueryParams */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38622);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);



const COPY_TO_CLIPBOARD_TIMEOUT = 2000;
const useThrottle = (cb, delay)=>{
    const cbRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(cb);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        cbRef.current = cb;
    });
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>lodash_throttle__WEBPACK_IMPORTED_MODULE_1___default()((...args)=>cbRef.current(...args), delay, {
            leading: true,
            trailing: true
        }), [
        delay
    ]);
};
const useCopyToClipboard = (stringToCopy)=>{
    const [didJustCopy, setDidJustCopy] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const copy = ()=>{
        if (!didJustCopy) {
            setDidJustCopy(true);
            if (navigator) {
                navigator.clipboard.writeText(stringToCopy);
            }
            const timer = setTimeout(()=>{
                setDidJustCopy(false);
            }, COPY_TO_CLIPBOARD_TIMEOUT);
            return ()=>clearTimeout(timer);
        }
    };
    return [
        copy,
        didJustCopy
    ];
};
const useTOC = (children)=>{
    const [toc, setToc] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        let tocNodes = [];
        let currentNode = null;
        window.requestAnimationFrame(()=>{
            const headings = document.querySelectorAll("h2[id], h3[id]");
            headings.forEach((el, i)=>{
                const id = el.getAttribute("id");
                if (typeof el.textContent === "string" && id) {
                    if (currentNode === null) {
                        if (el.tagName === "H2") {
                            currentNode = {
                                title: el.textContent,
                                id,
                                element: "H2",
                                children: []
                            };
                        }
                    } else {
                        if (el.tagName === "H2") {
                            tocNodes.push(currentNode);
                            currentNode = {
                                title: el.textContent,
                                id,
                                element: "H2",
                                children: []
                            };
                        } else if (el.tagName === "H3") {
                            if (currentNode.element === "H2") {
                                if (el.closest(".usage-list") === null) {
                                    currentNode.children.push({
                                        title: el.textContent,
                                        id,
                                        element: "H3",
                                        children: []
                                    });
                                }
                            }
                        }
                    }
                    const isLastIterationOfLoop = i === headings.length - 1;
                    if (isLastIterationOfLoop) {
                        if (currentNode !== null) {
                            tocNodes.push(currentNode);
                        }
                    }
                }
            });
            setToc(tocNodes);
        });
    }, [
        children
    ]);
    return [
        toc
    ];
};
function useMedia(media) {
    const [isActive, setIsActive] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (false) {}
    }, [
        media
    ]);
    return isActive;
}
function useQueryParams() {
    const router = useRouter();
    const setQueryParams = (queryParams)=>{
        router.push({
            pathname: router.pathname,
            query: {
                ...router.query,
                ...queryParams
            }
        }, undefined, {
            shallow: true
        });
    };
    return {
        routerIsReady: router.isReady,
        currentParams: {
            ...router.query
        },
        setQueryParams
    };
}


/***/ })

};
;