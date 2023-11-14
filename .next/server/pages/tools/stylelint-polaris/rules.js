"use strict";
(() => {
var exports = {};
exports.id = 3543;
exports.ids = [3543];
exports.modules = {

/***/ 47620:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71423);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var globby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23059);
/* harmony import */ var globby__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(globby__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_components_Longform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87654);
/* harmony import */ var _src_components_Markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83443);
/* harmony import */ var _src_components_Page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35709);
/* harmony import */ var _src_components_PageMeta__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(68668);
/* harmony import */ var _src_utils_various__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(79233);
/* harmony import */ var _src_utils_markdown_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(21074);
/* harmony import */ var _src_components_Markdown_serialize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(83480);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_components_Markdown__WEBPACK_IMPORTED_MODULE_5__, _src_components_Page__WEBPACK_IMPORTED_MODULE_6__, _src_utils_markdown_mjs__WEBPACK_IMPORTED_MODULE_9__, _src_components_Markdown_serialize__WEBPACK_IMPORTED_MODULE_10__]);
([_src_components_Markdown__WEBPACK_IMPORTED_MODULE_5__, _src_components_Page__WEBPACK_IMPORTED_MODULE_6__, _src_utils_markdown_mjs__WEBPACK_IMPORTED_MODULE_9__, _src_components_Markdown_serialize__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const FoundationsCategory = ({ title , description , mdx  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_PageMeta__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                description: description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Page__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                isContentPage: true,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components_Longform__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            children: title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: description
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Markdown__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {
                            ...mdx
                        })
                    ]
                })
            })
        ]
    });
};
const getStaticProps = async ()=>{
    const { title , description  } = indexPageMetadata();
    const [mdx] = await (0,_src_components_Markdown_serialize__WEBPACK_IMPORTED_MODULE_10__/* .serializeMdx */ .R)(path__WEBPACK_IMPORTED_MODULE_2___default().resolve(process.cwd(), rulesPath), {
        load: ruleListMarkdown
    });
    return {
        props: {
            title,
            description,
            mdx
        }
    };
};
const rulesPath = "content/tools/stylelint-polaris/rules";
function indexPageMetadata() {
    const markdownPath = path__WEBPACK_IMPORTED_MODULE_2___default().resolve(process.cwd(), `${rulesPath}/index.mdx`);
    const markdown = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(markdownPath, "utf-8");
    const { frontMatter: { title , description  }  } = (0,_src_utils_markdown_mjs__WEBPACK_IMPORTED_MODULE_9__/* .parseMarkdown */ .e)(markdown);
    return {
        title,
        description
    };
}
function ruleListMarkdown(directory) {
    const globPath = [
        `${directory}/*.mdx`
    ];
    const rulePagePaths = globby__WEBPACK_IMPORTED_MODULE_3___default().sync(globPath).filter((path)=>!path.endsWith(`${rulesPath}/index.mdx`));
    const content = {};
    rulePagePaths.forEach((markdownFilePath)=>{
        if (fs__WEBPACK_IMPORTED_MODULE_1___default().existsSync(markdownFilePath)) {
            const markdown = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(markdownFilePath, "utf-8");
            const { frontMatter: { title , description  }  } = (0,_src_utils_markdown_mjs__WEBPACK_IMPORTED_MODULE_9__/* .parseMarkdown */ .e)(markdown);
            const url = markdownFilePath.replace(`${process.cwd()}/content`, "").replace("/index", "").replace(/\.mdx$/, "");
            const category = (0,_src_utils_various__WEBPACK_IMPORTED_MODULE_8__/* .uppercaseFirst */ .AB)(title.split("/")[0]).replace("Media-queries", "Media queries");
            if (!(category in content)) {
                content[category] = [
                    "",
                    `## ${category}`,
                    ""
                ];
            }
            // Temporary removal of layout rules until it is re-enabled
            // https://github.com/Shopify/polaris/issues/8188
            if (title.includes("layout/declaration-property-value-disallowed-list") || title.includes("layout/property-disallowed-list")) {
                return;
            }
            content[category].push(`- [${title}](${url}): ${description}`);
        }
    });
    const ruleList = Object.keys(content).reduce((prev, key)=>[
            ...prev,
            ...content[key]
        ], []);
    return ruleList.join("\n");
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FoundationsCategory);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 34258:
/***/ ((module) => {

module.exports = require("endent");

/***/ }),

/***/ 23059:
/***/ ((module) => {

module.exports = require("globby");

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

/***/ 71423:
/***/ ((module) => {

module.exports = require("path");

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

/***/ 73772:
/***/ ((module) => {

module.exports = import("js-yaml");;

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

/***/ }),

/***/ 57147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 21074:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ parseMarkdown)
/* harmony export */ });
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73772);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_yaml__WEBPACK_IMPORTED_MODULE_0__]);
js_yaml__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const parseMarkdown = (inputMarkdown)=>{
    const readmeSections = inputMarkdown.split("---");
    const frontMatterSection = readmeSections[1];
    const readmeSection = readmeSections.slice(2).join("---");
    // Extract front matter
    const frontMatter = js_yaml__WEBPACK_IMPORTED_MODULE_0__["default"].load(frontMatterSection);
    // Extract the content of the first paragraph
    const description = readmeSection.split("\n\n").find((paragraph)=>{
        const content = paragraph.trim().split("\n").join(" ");
        if (paragraph.startsWith("<!--")) {
            return false;
        }
        if (content.length > 0 && content[0] !== "#") {
            return content;
        }
        return false;
    });
    let markdown = readmeSection;
    // Add some custom HTML to <!-- dodont --> tags
    const dodontRegex = /<!-- (dodont) -->(.*?)<!-- end -->/gis;
    if (markdown.match(dodontRegex)) {
        markdown = markdown.replace(dodontRegex, (match)=>{
            const matchWithoutComments = match.replace(/^<!-- dodont -->/, "").replace(/<!-- end -->$/, "");
            let i = 0;
            const matchWithColumns = matchWithoutComments.replace(/#### ([^\n]+)/g, (match, captured)=>{
                if (i === 1) {
                    const type = match.trim().startsWith("#### Don") ? "dont" : "do";
                    return `</div><div class="dodont-part" data-type="${type}">\n\n#### ${captured}`;
                }
                i++;
                return match;
            });
            const type = matchWithoutComments.trim().startsWith("#### Don") ? "dont" : "do";
            return `<div class="dodont"><div class="dodont-part" data-type="${type}">${matchWithColumns}</div></div>`;
        });
    }
    // Add some custom HTML to <!-- tip --> tags
    const tipRegex = /<!-- (tip) -->(.*?)<!-- end -->/gis;
    if (markdown.match(tipRegex)) {
        markdown = markdown.replace(tipRegex, (match)=>{
            const matchWithoutComments = match.replace(/^<!-- tip -->/, "").replace(/<!-- end -->$/, "");
            return `<div class="tip-banner"><div class="tip-banner__header"><div><span class="Polaris-Icon Polaris-Icon--colorHighlight Polaris-Icon--applyColor"><span class="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--regular Polaris-Text--visuallyHidden"></span><svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true"><path fill-rule="evenodd" d="M18 10a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-9 3a1 1 0 1 0 2 0v-2a1 1 0 1 0-2 0v2zm0-6a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"></path></svg></span></div> <h4>Tip</h4></div>${matchWithoutComments}</div>`;
        });
    }
    const out = {
        frontMatter,
        description,
        readme: markdown
    };
    return out;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [579,3057,16,4939,2582,9839,9233,9564,9293,1240,5697,6119,5247,1611,4984,5199,8597,5740,8214,7007,5993,6313,7468,5615], () => (__webpack_exec__(47620)));
module.exports = __webpack_exports__;

})();