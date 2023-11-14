exports.id = 8214;
exports.ids = [8214];
exports.modules = {

/***/ 88086:
/***/ ((module) => {

// Exports
module.exports = {
	"Container": "Container_Container__G2fbY"
};


/***/ }),

/***/ 52319:
/***/ ((module) => {

// Exports
module.exports = {
	"Longform": "Longform_Longform__qNwjb",
	"usage-list": "Longform_usage-list__iWBiB",
	"Content": "Longform_Content__Q1ZR9",
	"firstParagraphIsLede": "Longform_firstParagraphIsLede__iB9hY"
};


/***/ }),

/***/ 41227:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Container)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: ./src/utils/various.ts + 1 modules
var various = __webpack_require__(79233);
// EXTERNAL MODULE: ./src/components/Container/Container.module.scss
var Container_module = __webpack_require__(88086);
var Container_module_default = /*#__PURE__*/__webpack_require__.n(Container_module);
;// CONCATENATED MODULE: ./src/components/Container/Container.tsx



function Container({ className , ...rest }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (0,various/* className */.ok)((Container_module_default()).Container, className),
        ...rest
    });
}
/* harmony default export */ const Container_Container = (Container);

;// CONCATENATED MODULE: ./src/components/Container/index.ts

/* harmony default export */ const components_Container = (Container_Container);


/***/ }),

/***/ 87654:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Longform)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: ./src/utils/various.ts + 1 modules
var various = __webpack_require__(79233);
// EXTERNAL MODULE: ./src/components/Longform/Longform.module.scss
var Longform_module = __webpack_require__(52319);
var Longform_module_default = /*#__PURE__*/__webpack_require__.n(Longform_module);
;// CONCATENATED MODULE: ./src/components/Longform/Longform.tsx



function Longform({ firstParagraphIsLede =true , children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Longform_module_default()).Longform,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (0,various/* className */.ok)((Longform_module_default()).Content, firstParagraphIsLede && (Longform_module_default()).firstParagraphIsLede),
            children: children
        })
    });
}
/* harmony default export */ const Longform_Longform = (Longform);

;// CONCATENATED MODULE: ./src/components/Longform/index.ts

/* harmony default export */ const components_Longform = (Longform_Longform);


/***/ })

};
;