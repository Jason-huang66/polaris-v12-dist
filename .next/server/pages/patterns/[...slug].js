(() => {
var exports = {};
exports.id = 8707;
exports.ids = [8707];
exports.modules = {

/***/ 37579:
/***/ ((module) => {

// Exports
module.exports = {
	"Heading": "PatternPage_Heading__x42gv",
	"TabGroup": "PatternPage_TabGroup__Rqnbs",
	"InfoLine": "PatternPage_InfoLine__eyFq4",
	"InfoLineLink": "PatternPage_InfoLineLink__tKPCw",
	"TabPanel": "PatternPage_TabPanel__d9Rex",
	"Variant": "PatternPage_Variant__q7QLF",
	"TabList": "PatternPage_TabList__qJX9v",
	"Tab": "PatternPage_Tab__fSh6_",
	"HowItHelps": "PatternPage_HowItHelps__s4FvX",
	"ImageWrapper": "PatternPage_ImageWrapper__77XEu",
	"UsefulToKnow": "PatternPage_UsefulToKnow__2crqF",
	"Accordion": "PatternPage_Accordion__z8MHS",
	"Checkbox": "PatternPage_Checkbox__z0ghY",
	"DefinitionTable": "PatternPage_DefinitionTable__IhuUc",
	"DefinitionList": "PatternPage_DefinitionList__8vQeW",
	"List": "PatternPage_List__uTgGY",
	"UnorderedList": "PatternPage_UnorderedList__3kk56",
	"OrderedList": "PatternPage_OrderedList__wiAZR"
};


/***/ }),

/***/ 23566:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71423);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73292);
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_components_PatternPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88681);
/* harmony import */ var _src_components_ComingSoon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9306);
/* harmony import */ var _src_components_Markdown_serialize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(83480);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_components_PatternPage__WEBPACK_IMPORTED_MODULE_4__, _src_components_ComingSoon__WEBPACK_IMPORTED_MODULE_5__, _src_components_Markdown_serialize__WEBPACK_IMPORTED_MODULE_6__]);
([_src_components_PatternPage__WEBPACK_IMPORTED_MODULE_4__, _src_components_ComingSoon__WEBPACK_IMPORTED_MODULE_5__, _src_components_Markdown_serialize__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const getDirectories = async (source)=>(await (0,fs_promises__WEBPACK_IMPORTED_MODULE_3__.readdir)(source, {
        withFileTypes: true
    })).filter((dirent)=>dirent.isDirectory()).map((dirent)=>dirent.name);
const isUnique = (arr)=>arr.length === Array.from(new Set(arr)).length;
const patternsContentAbsoluteDir = path__WEBPACK_IMPORTED_MODULE_2___default().resolve(process.cwd(), `content/patterns`);
function load(filePath) {
    return fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(filePath, "utf-8");
}
async function loadPatternAndVariants(slug) {
    const markdownFilePath = path__WEBPACK_IMPORTED_MODULE_2___default().resolve(patternsContentAbsoluteDir, `${slug}/index.mdx`);
    const [pattern] = await (0,_src_components_Markdown_serialize__WEBPACK_IMPORTED_MODULE_6__/* .serializeMdx */ .R)(markdownFilePath, {
        load
    });
    const variants = await Promise.all((pattern.frontmatter.variants || []).map(async (variantPath)=>{
        const variantAbsolutePath = path__WEBPACK_IMPORTED_MODULE_2___default().resolve(patternsContentAbsoluteDir, `${slug}/${variantPath}`);
        // TODO: Optimize this so we're only sending down the compiled MDX for
        // variants which we're actually viewing
        const [variant] = await (0,_src_components_Markdown_serialize__WEBPACK_IMPORTED_MODULE_6__/* .serializeMdx */ .R)(variantAbsolutePath, {
            load
        });
        return variant;
    }));
    return {
        ...pattern,
        frontmatter: {
            ...pattern.frontmatter,
            variants
        }
    };
}
const getStaticProps = async ({ params  })=>{
    const patternSlug = params?.slug;
    if (!patternSlug) {
        throw new Error("Expected params.pattern to be defined (as string[])");
    }
    if (patternSlug.length > 2) {
        // Only handle /[slug] & /[slug]/[variant]
        return {
            notFound: true
        };
    }
    const slug = patternSlug[0];
    const variant = patternSlug[1];
    let pattern;
    try {
        pattern = await loadPatternAndVariants(slug);
    } catch (error) {
        console.error(error);
        // Fail gracefully
        return {
            notFound: true
        };
    }
    // Hitting the root pattern page when theres more than one variant redirects
    // to the first variant
    if (pattern.frontmatter.variants.length > 1 && !variant) {
        return {
            redirect: {
                destination: `/patterns/${slug}/${pattern.frontmatter.variants[0].frontmatter.slug}`,
                permanent: false
            }
        };
    }
    // console.log('DATA VARIANTS', JSON.stringify(data.variants, null, 2));
    // console.log('DATA VARIANTS', JSON.stringify(data.variants, null, 2));
    // console.log('mdxVariants', JSON.stringify(mdxVariants, null, 2));
    // console.log('VARIANTS', JSON.stringify(mdxVariants, null, 2));
    // console.log('DATA.VARIANTS', JSON.stringify(data.variants, null, 2));
    return {
        props: {
            pattern: {
                ...pattern,
                frontmatter: {
                    ...pattern.frontmatter,
                    draft: pattern.frontmatter.draft || false
                }
            }
        }
    };
};
const getStaticPaths = async ()=>{
    const directories = await getDirectories(patternsContentAbsoluteDir);
    const paths = await Promise.all(directories.map(async (slug)=>{
        if (!slug) {
            throw new Error("");
        }
        const pattern = await loadPatternAndVariants(slug);
        // When there's zero or 1 variant, it's just the pattern path, no variant
        // slug
        if (pattern.frontmatter.variants.length < 2) {
            return [
                {
                    params: {
                        slug: [
                            slug
                        ]
                    }
                }
            ];
        }
        // title and slug are required and must be unique when multiple variants
        // are specified
        if (!isUnique(pattern.frontmatter.variants.map(({ frontmatter: { slug  }  })=>slug)) || !isUnique(pattern.frontmatter.variants.map(({ frontmatter: { title  }  })=>title))) {
            throw new Error("Variants must have unique title & slug front matter");
        }
        // Note that we do not provide the pattern's root path here; we need it to
        // trigger a redirect in getStaticProps, but that can't be done at build
        // time. The later "fallback: 'blocking'" will ensure if that route is hit,
        // it'll be running getStaticProps in a node process where it CAN perform
        // a redirect.
        return pattern.frontmatter.variants.map((variant)=>({
                params: {
                    slug: [
                        slug,
                        variant.frontmatter.slug
                    ]
                }
            }));
    }));
    return {
        paths: paths.flat(),
        // We have some redirects that have to happen in a node server, not at
        // pre-render time, so we need to "fallback" here.
        fallback: "blocking"
    };
};
const PatternsPage = (props)=>{
    if (props.pattern.frontmatter.draft && "production" === "production") return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_ComingSoon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {});
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_PatternPage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        ...props
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PatternsPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9306:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ComingSoon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35709);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Page__WEBPACK_IMPORTED_MODULE_1__]);
_Page__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function ComingSoon() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Page__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        children: "Coming Soon"
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 41157:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PatternPage)
/* harmony export */ });
/* unused harmony export Variants */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61185);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79894);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _PageMeta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68668);
/* harmony import */ var _Stack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27375);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88272);
/* harmony import */ var _Lede__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(67463);
/* harmony import */ var _Heading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8353);
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(35709);
/* harmony import */ var _PatternPage_module_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(37579);
/* harmony import */ var _PatternPage_module_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_PatternPage_module_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Markdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(83443);
/* harmony import */ var _Markdown_components_SideBySide__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(30125);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__, _Page__WEBPACK_IMPORTED_MODULE_10__, _Markdown__WEBPACK_IMPORTED_MODULE_11__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__, _Page__WEBPACK_IMPORTED_MODULE_10__, _Markdown__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const SingleVariant = ({ children , variants  })=>children(variants[0]);
const TabbedVariants = ({ children , variants  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    let exampleIndex = variants.findIndex(({ frontmatter: { slug  }  })=>slug === router.query.slug?.[1]);
    if (exampleIndex === -1) {
        exampleIndex = 0;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Tab.Group, {
        defaultIndex: 0,
        selectedIndex: exampleIndex,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_PatternPage_module_scss__WEBPACK_IMPORTED_MODULE_13___default().TabGroup),
            "data-selected": exampleIndex,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Tab.List, {
                    className: (_PatternPage_module_scss__WEBPACK_IMPORTED_MODULE_13___default().TabList),
                    id: "examples",
                    children: variants.map((variant)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Tab, {
                            as: (next_link__WEBPACK_IMPORTED_MODULE_3___default()),
                            href: `/patterns/${router.query.slug?.[0]}/${variant.frontmatter.slug}`,
                            shallow: true,
                            className: (_PatternPage_module_scss__WEBPACK_IMPORTED_MODULE_13___default().Tab),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: variant.frontmatter.title
                            })
                        }, `${variant.frontmatter.slug}-tab`))
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Tab.Panels, {
                    children: variants.map((variant)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Tab.Panel, {
                            className: (_PatternPage_module_scss__WEBPACK_IMPORTED_MODULE_13___default().TabPanel),
                            children: children(variant)
                        }, `${variant.frontmatter.slug}-panel`))
                })
            ]
        })
    });
};
const Variants = ({ variants  })=>{
    if (!variants?.length) {
        return null;
    }
    const Container = variants.length > 1 ? TabbedVariants : SingleVariant;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Container, {
        variants: variants,
        children: (variant)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Stack__WEBPACK_IMPORTED_MODULE_6__/* .Stack */ .K, {
                gap: "800",
                className: (_PatternPage_module_scss__WEBPACK_IMPORTED_MODULE_13___default().Variant),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PatternMarkdown, {
                    ...variant
                })
            })
    });
};
const BaseMarkdown = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Markdown__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP, {
        ...props,
        // TODO: FIXME is this the correct scope to pass in?
        scope: {
            ...props.scope,
            data: props.frontmatter
        },
        components: {
            ...props.components,
            strong: ({ children  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Box__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .x, {
                    as: "strong",
                    style: {
                        // TODO: FIXME: Why does patterns page have a heavier weight for
                        // strong text?
                        fontWeight: "var(--font-weight-700)",
                        color: "var(--text-strong)"
                    },
                    children: children
                })
        }
    });
};
const defaultMdxComponents = {
    Stack: ({ gap , children  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Stack__WEBPACK_IMPORTED_MODULE_6__/* .Stack */ .K, {
            gap: gap,
            children: children
        }),
    Hero: ({ children  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Box__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .x, {
            className: (_PatternPage_module_scss__WEBPACK_IMPORTED_MODULE_13___default().Hero),
            children: children
        }),
    HowItHelps: ({ children  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Stack__WEBPACK_IMPORTED_MODULE_6__/* .Stack */ .K, {
            gap: "400",
            className: (_PatternPage_module_scss__WEBPACK_IMPORTED_MODULE_13___default().HowItHelps),
            children: children
        }),
    Usage: ({ children  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Stack__WEBPACK_IMPORTED_MODULE_6__/* .Stack */ .K, {
            gap: "400",
            className: (_PatternPage_module_scss__WEBPACK_IMPORTED_MODULE_13___default().Usage),
            children: children
        }),
    UsefulToKnow: ({ children  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Markdown_components_SideBySide__WEBPACK_IMPORTED_MODULE_12__/* .SideBySide */ .q, {
            className: (_PatternPage_module_scss__WEBPACK_IMPORTED_MODULE_13___default().UsefulToKnow),
            children: children
        }),
    DefinitionTable: ({ children  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Box__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .x, {
            className: (_PatternPage_module_scss__WEBPACK_IMPORTED_MODULE_13___default().DefinitionTable),
            children: children
        }),
    p: ({ children  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Box__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .x, {
            as: "p",
            children: children
        }),
    h2: ({ children , id  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Markdown__WEBPACK_IMPORTED_MODULE_11__/* .HeadingWithCopyButton */ .dz, {
            id: id,
            as: "h2",
            className: [
                (_PatternPage_module_scss__WEBPACK_IMPORTED_MODULE_13___default()["Heading-h2"])
            ],
            children: children
        }),
    h3: ({ children , id  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Markdown__WEBPACK_IMPORTED_MODULE_11__/* .HeadingWithCopyButton */ .dz, {
            id: id,
            as: "h3",
            className: (_PatternPage_module_scss__WEBPACK_IMPORTED_MODULE_13___default()["Heading-h3"]),
            children: children
        }),
    dl: ({ children  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Box__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .x, {
            as: "dl",
            className: (_PatternPage_module_scss__WEBPACK_IMPORTED_MODULE_13___default().DefinitionList),
            children: children
        })
};
const PatternMarkdown = (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BaseMarkdown, {
        ...props,
        components: {
            ...props.components,
            ...defaultMdxComponents,
            Variants
        }
    });
function PatternPage({ pattern  }) {
    const [showCode, toggleCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // When rendering a new pattern, default the code to visible.
        // However, when moving between variants within a pattern, retain the
        // current code toggle setting.
        toggleCode(true);
    }, [
        pattern.frontmatter
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PageMeta__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                title: pattern.frontmatter.title,
                description: pattern.frontmatter.description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Page__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                isContentPage: true,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Stack__WEBPACK_IMPORTED_MODULE_6__/* .Stack */ .K, {
                    gap: "800",
                    className: "margin-considered-harmful",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Stack__WEBPACK_IMPORTED_MODULE_6__/* .Stack */ .K, {
                            gap: "400",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Heading__WEBPACK_IMPORTED_MODULE_9__/* .Heading */ .X, {
                                    as: "h1",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Box__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .x, {
                                        className: (_PatternPage_module_scss__WEBPACK_IMPORTED_MODULE_13___default().Heading),
                                        children: pattern.frontmatter.title
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Lede__WEBPACK_IMPORTED_MODULE_8__/* .Lede */ .a, {
                                    className: (_PatternPage_module_scss__WEBPACK_IMPORTED_MODULE_13___default().NoMargin),
                                    children: pattern.frontmatter.lede
                                }),
                                pattern.frontmatter.githubDiscussionsLink ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: (_PatternPage_module_scss__WEBPACK_IMPORTED_MODULE_13___default().InfoLine),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        className: (_PatternPage_module_scss__WEBPACK_IMPORTED_MODULE_13___default().InfoLineLink),
                                        href: pattern.frontmatter.githubDiscussionsLink,
                                        children: "Discuss on GitHub"
                                    })
                                }) : null
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Markdown__WEBPACK_IMPORTED_MODULE_11__/* .CodeVisibilityProvider */ .Zk, {
                            showCode: showCode,
                            setShowCode: (...args)=>{
                                toggleCode(...args);
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PatternMarkdown, {
                                ...pattern
                            })
                        })
                    ]
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 88681:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PatternPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41157);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_PatternPage__WEBPACK_IMPORTED_MODULE_0__]);
_PatternPage__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_PatternPage__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 34258:
/***/ ((module) => {

"use strict";
module.exports = require("endent");

/***/ }),

/***/ 1043:
/***/ ((module) => {

"use strict";
module.exports = require("lodash.get");

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

/***/ 71423:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 86340:
/***/ ((module) => {

"use strict";
module.exports = require("playroom");

/***/ }),

/***/ 9284:
/***/ ((module) => {

"use strict";
module.exports = require("prettier/parser-babel");

/***/ }),

/***/ 87413:
/***/ ((module) => {

"use strict";
module.exports = require("prettier/standalone");

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

/***/ 20258:
/***/ ((module) => {

"use strict";
module.exports = require("react-fast-compare");

/***/ }),

/***/ 90727:
/***/ ((module) => {

"use strict";
module.exports = require("react-syntax-highlighter");

/***/ }),

/***/ 84466:
/***/ ((module) => {

"use strict";
module.exports = require("react-transition-group");

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

/***/ 45611:
/***/ ((module) => {

"use strict";
module.exports = import("nanoid");;

/***/ }),

/***/ 39961:
/***/ ((module) => {

"use strict";
module.exports = import("next-mdx-remote");;

/***/ }),

/***/ 4818:
/***/ ((module) => {

"use strict";
module.exports = import("next-mdx-remote/serialize");;

/***/ }),

/***/ 48230:
/***/ ((module) => {

"use strict";
module.exports = import("react-merge-refs");;

/***/ }),

/***/ 15414:
/***/ ((module) => {

"use strict";
module.exports = import("remark-definition-list");;

/***/ }),

/***/ 66809:
/***/ ((module) => {

"use strict";
module.exports = import("remark-gfm");;

/***/ }),

/***/ 9071:
/***/ ((module) => {

"use strict";
module.exports = import("remark-slug");;

/***/ }),

/***/ 18438:
/***/ ((module) => {

"use strict";
module.exports = import("remark-unwrap-images");;

/***/ }),

/***/ 56016:
/***/ ((module) => {

"use strict";
module.exports = import("unist-util-visit");;

/***/ }),

/***/ 46555:
/***/ ((module) => {

"use strict";
module.exports = import("uuid");;

/***/ }),

/***/ 96107:
/***/ ((module) => {

"use strict";
module.exports = import("vfile");;

/***/ }),

/***/ 71866:
/***/ ((module) => {

"use strict";
module.exports = import("vfile-is");;

/***/ }),

/***/ 57147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 73292:
/***/ ((module) => {

"use strict";
module.exports = require("fs/promises");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [579,3057,16,4939,2582,9839,9233,9564,9293,1240,5697,6119,5247,1611,4984,5199,8597,5740,8214,7007,5993,6313,7468,5615], () => (__webpack_exec__(23566)));
module.exports = __webpack_exports__;

})();