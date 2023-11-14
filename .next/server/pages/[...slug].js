"use strict";
(() => {
var exports = {};
exports.id = 330;
exports.ids = [330];
exports.modules = {

/***/ 72334:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79894);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var globby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23059);
/* harmony import */ var globby__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(globby__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_components_Markdown_serialize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83480);
/* harmony import */ var _src_components_Markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83443);
/* harmony import */ var _src_components_Page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35709);
/* harmony import */ var _src_components_PageMeta__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(68668);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_components_Markdown_serialize__WEBPACK_IMPORTED_MODULE_4__, _src_components_Markdown__WEBPACK_IMPORTED_MODULE_5__, _src_components_Page__WEBPACK_IMPORTED_MODULE_6__]);
([_src_components_Markdown_serialize__WEBPACK_IMPORTED_MODULE_4__, _src_components_Markdown__WEBPACK_IMPORTED_MODULE_5__, _src_components_Page__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function StylelintResourceLink({ category  }) {
    return ({
        border: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                "Polaris ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/tokens/border",
                    children: "shape tokens"
                })
            ]
        }),
        color: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                "Polaris ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/tokens/color",
                    children: "color tokens"
                })
            ]
        }),
        layout: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                "Polaris ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/components",
                    children: "layout components"
                })
            ]
        }),
        "media queries": /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                "Polaris",
                " ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/tokens/breakpoints#sass-variables",
                    children: "breakpoint sass variables"
                })
            ]
        }),
        motion: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                "Polaris ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/tokens/motion",
                    children: "motion tokens"
                })
            ]
        }),
        shadow: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                "Polaris ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/tokens/shadow",
                    children: "depth tokens"
                })
            ]
        }),
        space: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                "Polaris ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/tokens/space",
                    children: "space tokens"
                })
            ]
        }),
        "z-index": /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                "Polaris ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/tokens/z-index",
                    children: "z-index tokens"
                })
            ]
        }),
        typography: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                "Polaris ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/components/typography/text",
                    children: "text component"
                }),
                " ",
                "or ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/tokens/font",
                    children: "font tokens"
                })
            ]
        })
    })[category] ?? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/tokens",
        children: "Polaris tokens"
    });
}
const CatchAllTemplate = ({ mdx , seoDescription , editPageLinkPath , isContentPage , showTOC , collapsibleTOC  })=>{
    const { title , noIndex =false  } = mdx.frontmatter;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components_Page__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        editPageLinkPath: editPageLinkPath,
        isContentPage: isContentPage,
        showTOC: showTOC || isContentPage,
        collapsibleTOC: collapsibleTOC,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_PageMeta__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                title: title,
                description: seoDescription,
                noIndex: noIndex
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Markdown__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {
                ...mdx,
                components: {
                    // @ts-expect-error Dunno how to narrow this type any further ¯\_(ツ)_/¯
                    PresentTenseVerb: ({ children  })=>`${children.slice(-1) === "s" ? "are" : "is"}`,
                    StylelintResourceLink
                }
            })
        ]
    });
};
const DEFAULT_SORT_ORDER = 1000;
const contentDir = "content";
// Grab only the portion of the filepath which is used in the URL into capture
// group $1.
// Examples here: https://regex101.com/r/y3VciS/1
const slugExtracter = new RegExp(`^${contentDir}/(.*?)(/index)?\.mdx$`);
const extractSlugFromPath = (filePath)=>filePath.replace(slugExtracter, "/$1");
function makeSerializable(obj) {
    return Object.entries(obj).reduce((memo, [key, value])=>{
        if (value != null) {
            // @ts-expect-error SShhuussshhh
            memo[key] = value;
        }
        return memo;
    }, {});
}
// NOTE: globby uses minimatch which only accepts posix paths
const getRichCards = async (pathGlob)=>{
    const markdownFiles = globby__WEBPACK_IMPORTED_MODULE_3___default().sync(pathGlob, {
        onlyFiles: true
    });
    return (await Promise.all(markdownFiles.map(async (markdownFilePath)=>{
        // NOTE: `markdownFilePath` will be in posix format from globby (fast-glob internally)
        const mdAbsolutePath = [
            process.cwd(),
            markdownFilePath
        ].join("/");
        const [{ frontmatter  }, data] = await (0,_src_components_Markdown_serialize__WEBPACK_IMPORTED_MODULE_4__/* .serializeMdx */ .R)(mdAbsolutePath, {
            load: (filePath)=>fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(filePath, "utf-8")
        });
        return makeSerializable({
            // Set defaults
            ...{
                url: extractSlugFromPath(markdownFilePath),
                description: data.firstParagraph
            },
            // Set data from frontmatter, overriding defaults if set
            ...frontmatter,
            // Set a default sort order when not set / not a number.
            // Casting to a string because despite what we write in our types, the
            // YAML parser could return _absolutely anything_ in this field.
            ...isNaN(parseInt(frontmatter.order)) && {
                order: DEFAULT_SORT_ORDER
            }
        });
    })))// Don't show 'draft' posts in prod/staging, but show them everywhere else
    .filter(({ draft  })=> false || !draft).sort((a, b)=>// Sort by defined order first
        a.order - b.order || // Then fallback to alphabetical sorting
        a.title.localeCompare(b.title));
};
// Simple middleware-like processor
const middleware = async (wares)=>{
    let index = -1;
    const end = ()=>{
        // If 'end' is called, skip to the end of the array, thereby ending the
        // while loop early
        index = wares.length;
    };
    while(++index < wares.length){
        const middle = wares[index];
        if (Array.isArray(middle)) {
            if (await middle[0]()) {
                await middle[1](end);
            }
        } else {
            await middle(end);
        }
    }
};
const getStaticProps = async ({ params  })=>{
    const slug = params?.slug;
    if (!slug || !Array.isArray(slug)) {
        throw new Error("Expected params.slug to be defined (as string[])");
    }
    // Always use posix paths which are compatible with all of: windows, *nix,
    // MacOS, and URLs
    const slugPath = [
        contentDir,
        ...params.slug
    ].join("/");
    let pathIsDirectory = false;
    let mdRelativePath = `${slugPath}.mdx`;
    // If this exact markdown file doesn't exist, we'll check for a matching
    // directory name with an index.md file instead
    if (!fs__WEBPACK_IMPORTED_MODULE_2___default().existsSync(mdRelativePath)) {
        mdRelativePath = `${slugPath}/index.mdx`;
        if (!fs__WEBPACK_IMPORTED_MODULE_2___default().existsSync(mdRelativePath)) {
            return {
                notFound: true
            };
        }
        pathIsDirectory = true;
    }
    const mdAbsolutePath = [
        process.cwd(),
        mdRelativePath
    ].join("/");
    const editPageLinkPath = `/polaris.shopify.com/${mdRelativePath}`;
    /**
   * scope is passed to the MDX renderer component. The properties
   * of scope are available in markdown .md files to use.
   */ const scope = {};
    await middleware([
        // patterns page needs to know the legacy files also
        [
            ()=>pathIsDirectory && params.slug.length === 1 && params.slug[0] === "patterns",
            async (end)=>{
                scope.posts = await getRichCards(`${slugPath}/*/index.mdx`);
                scope.legacyPatternPosts = await getRichCards(`${contentDir}/patterns-legacy/!(index|_*).mdx`);
                end();
            }
        ],
        // component index page needs to know all of the nested components
        [
            ()=>pathIsDirectory && params.slug.length === 1 && params.slug[0] === "components",
            async (end)=>{
                // Get the groups
                scope.posts = await getRichCards(`${slugPath}/*/index.mdx`);
                // Get the components for each group
                scope.posts = await Promise.all(scope.posts.map(async (group)=>({
                        ...group,
                        children: await getRichCards(`${contentDir}${group.url}/!(index|_*).mdx`)
                    })));
                // Don't process any more middlewares
                end();
            }
        ],
        [
            // design pages need top-level index.md pages in correct order
            ()=>pathIsDirectory && params.slug[0] === "design",
            async (end)=>{
                // Non-recursive search for .md files except index.md
                scope.posts = await getRichCards(`${slugPath}/!(index|_*).mdx`);
                scope.posts = [
                    ...scope.posts,
                    ...await getRichCards(`${slugPath}/*/index.mdx`)
                ];
                scope.posts.sort((a, b)=>{
                    return a.order > b.order ? 1 : -1;
                });
                end();
            }
        ],
        // index pages need to know the files in their folder
        [
            ()=>pathIsDirectory,
            async ()=>{
                // Non-recursive search for .md files except index.md
                scope.posts = await getRichCards(`${slugPath}/!(index|_*).mdx`);
            }
        ]
    ]);
    const [mdx, data] = await (0,_src_components_Markdown_serialize__WEBPACK_IMPORTED_MODULE_4__/* .serializeMdx */ .R)(mdAbsolutePath, {
        scope,
        load: (filePath)=>fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(filePath, "utf-8")
    });
    const seoDescription = typeof mdx.frontmatter.seoDescription === "string" ? mdx.frontmatter.seoDescription : data.firstParagraph ?? null;
    const props = {
        mdx,
        seoDescription,
        editPageLinkPath,
        isContentPage: !pathIsDirectory,
        showTOC: mdx.frontmatter.showTOC || false,
        collapsibleTOC: mdx.frontmatter.collapsibleTOC || false
    };
    return {
        props
    };
};
const catchAllTemplateExcludeList = [
    "/icons",
    "/tokens",
    "/sandbox",
    "/tools/stylelint-polaris/rules"
];
// We want to render component index & group pages, but not the individual
// compoments.
const componentButNotIndexRegex = /\/components\/.+?\/.+?$/;
function fileShouldNotBeRenderedWithCatchAllTemplate(filePath) {
    return !componentButNotIndexRegex.test(filePath) && // We want to render legacy pages & patterns index page, but not new pattern details pages.
    !filePath.startsWith("/patterns/") && !catchAllTemplateExcludeList.includes(filePath);
}
const getStaticPaths = async ()=>{
    const paths = globby__WEBPACK_IMPORTED_MODULE_3___default().sync(`${contentDir}/**/!(_)*.mdx`).map(extractSlugFromPath).filter(fileShouldNotBeRenderedWithCatchAllTemplate);
    return {
        paths,
        fallback: false
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CatchAllTemplate);

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

/***/ }),

/***/ 57147:
/***/ ((module) => {

module.exports = require("fs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [579,3057,16,4939,2582,9839,9233,9564,9293,1240,5697,6119,5247,1611,4984,5199,8597,5740,8214,7007,5993,6313,7468,5615], () => (__webpack_exec__(72334)));
module.exports = __webpack_exports__;

})();