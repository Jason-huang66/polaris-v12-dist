"use strict";
(() => {
var exports = {};
exports.id = 2681;
exports.ids = [2681];
exports.modules = {

/***/ 33110:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var endent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34258);
/* harmony import */ var endent__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(endent__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vfile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96107);
/* harmony import */ var _src_components_Markdown_serialize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83480);
/* harmony import */ var _src_components_TokensPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52418);
/* harmony import */ var _src_components_PageMeta__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(68668);
/* harmony import */ var _src_components_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41227);
/* harmony import */ var _src_components_Longform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87654);
/* harmony import */ var _src_components_Markdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(83443);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([vfile__WEBPACK_IMPORTED_MODULE_3__, _src_components_Markdown_serialize__WEBPACK_IMPORTED_MODULE_4__, _src_components_TokensPage__WEBPACK_IMPORTED_MODULE_5__, _src_components_Markdown__WEBPACK_IMPORTED_MODULE_9__]);
([vfile__WEBPACK_IMPORTED_MODULE_3__, _src_components_Markdown_serialize__WEBPACK_IMPORTED_MODULE_4__, _src_components_TokensPage__WEBPACK_IMPORTED_MODULE_5__, _src_components_Markdown__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const getStaticProps = async ()=>{
    const file = new vfile__WEBPACK_IMPORTED_MODULE_3__.VFile({
        value: (endent__WEBPACK_IMPORTED_MODULE_2___default())`
    <p id="usage" role="heading" aria-level="2">Usage in Media Queries</p>

    ### Sass variables

    A transform takes the above values and generates Sass variables (which can be
    used in media conditions) for each breakpoint in \`up\`, \`down\`, and \`only\` directions.
    While we currently support \`down\` media conditions, we encourage developers to
    adopt a mobile first strategy and use \`up\` wherever possible.

    Example of generated output for \`breakpoints-md\`:
    \`\`\`scss
    @media #{$p-breakpoints-md-up} {/*...*/}
    @media #{$p-breakpoints-md-down} {/*...*/}
    @media #{$p-breakpoints-md-only} {/*...*/}
    \`\`\`

    To use these Sass variables you will need to import the \`media-queries.scss\`
    file from \`@shopify/polaris-tokens\` in your project:

    \`\`\`scss
    @import 'path/to/node_modules/@shopify/polaris-tokens/dist/scss/media-queries';
    \`\`\`

    ### Media query variables

    A collection of all Sass variables for applying responsive styles at a given breakpoint alias.

    \`\`\`scss
    $p-breakpoints-xs-up: '(min-width: 0em)';
    $p-breakpoints-xs-down: '(max-width: -0.0025em)';
    $p-breakpoints-xs-only: '(min-width: 0em) and (max-width: 30.6225em)';

    $p-breakpoints-sm-up: '(min-width: 30.625em)';
    $p-breakpoints-sm-down: '(max-width: 30.6225em)';
    $p-breakpoints-sm-only: '(min-width: 30.625em) and (max-width: 47.9975em)';

    $p-breakpoints-md-up: '(min-width: 48em)';
    $p-breakpoints-md-down: '(max-width: 47.9975em)';
    $p-breakpoints-md-only: '(min-width: 48em) and (max-width: 64.9975em)';

    $p-breakpoints-lg-up: '(min-width: 65em)';
    $p-breakpoints-lg-down: '(max-width: 64.9975em)';
    $p-breakpoints-lg-only: '(min-width: 65em) and (max-width: 89.9975em)';

    $p-breakpoints-xl-up: '(min-width: 90em)';
    $p-breakpoints-xl-down: '(max-width: 89.9975em)';
    $p-breakpoints-xl-only: '(min-width: 90em)';
    \`\`\`
  `,
        path: "/tokens/breakpoints"
    });
    const [mdx] = await (0,_src_components_Markdown_serialize__WEBPACK_IMPORTED_MODULE_4__/* .serializeMdx */ .R)(file);
    return {
        props: {
            mdx
        }
    };
};
const Components = ({ mdx  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_PageMeta__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                title: "Breakpoints"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_TokensPage__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                tokenGroup: "breakpoints"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Longform__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Markdown__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP, {
                            ...mdx
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Components);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 34258:
/***/ ((module) => {

module.exports = require("endent");

/***/ }),

/***/ 1043:
/***/ ((module) => {

module.exports = require("lodash.get");

/***/ }),

/***/ 38622:
/***/ ((module) => {

module.exports = require("lodash.throttle");

/***/ }),

/***/ 53918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 45732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 92796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 34014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 64486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 50744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 35843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 99552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 78524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 78020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 64406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 24964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 11751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 46220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 10299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 23938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 29565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 35789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 28854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 91292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 34567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 80979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 93297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 36052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 84226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 95052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 82470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 40618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 40968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 71853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 86340:
/***/ ((module) => {

module.exports = require("playroom");

/***/ }),

/***/ 9284:
/***/ ((module) => {

module.exports = require("prettier/parser-babel");

/***/ }),

/***/ 87413:
/***/ ((module) => {

module.exports = require("prettier/standalone");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 66405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 20258:
/***/ ((module) => {

module.exports = require("react-fast-compare");

/***/ }),

/***/ 90727:
/***/ ((module) => {

module.exports = require("react-syntax-highlighter");

/***/ }),

/***/ 84466:
/***/ ((module) => {

module.exports = require("react-transition-group");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 99816:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ 91017:
/***/ ((module) => {

module.exports = import("@floating-ui/react-dom-interactions");;

/***/ }),

/***/ 61185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ }),

/***/ 66197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ 45611:
/***/ ((module) => {

module.exports = import("nanoid");;

/***/ }),

/***/ 39961:
/***/ ((module) => {

module.exports = import("next-mdx-remote");;

/***/ }),

/***/ 4818:
/***/ ((module) => {

module.exports = import("next-mdx-remote/serialize");;

/***/ }),

/***/ 48230:
/***/ ((module) => {

module.exports = import("react-merge-refs");;

/***/ }),

/***/ 15414:
/***/ ((module) => {

module.exports = import("remark-definition-list");;

/***/ }),

/***/ 66809:
/***/ ((module) => {

module.exports = import("remark-gfm");;

/***/ }),

/***/ 9071:
/***/ ((module) => {

module.exports = import("remark-slug");;

/***/ }),

/***/ 18438:
/***/ ((module) => {

module.exports = import("remark-unwrap-images");;

/***/ }),

/***/ 56016:
/***/ ((module) => {

module.exports = import("unist-util-visit");;

/***/ }),

/***/ 46555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ }),

/***/ 96107:
/***/ ((module) => {

module.exports = import("vfile");;

/***/ }),

/***/ 71866:
/***/ ((module) => {

module.exports = import("vfile-is");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [579,3057,16,4939,2582,9839,9233,9564,9293,1240,5697,6119,5247,1611,4984,5199,8597,5740,8214,7007,5993,6313,2418,7468,5615], () => (__webpack_exec__(33110)));
module.exports = __webpack_exports__;

})();