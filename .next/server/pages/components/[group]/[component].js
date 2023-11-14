(() => {
var exports = {};
exports.id = 8625;
exports.ids = [8625];
exports.modules = {

/***/ 61716:
/***/ ((module) => {

// Exports
module.exports = {
	"Button": "CodesandboxButton_Button__4Enoo"
};


/***/ }),

/***/ 66845:
/***/ ((module) => {

// Exports
module.exports = {
	"ExamplesList": "ComponentExamples_ExamplesList__Y4pcV",
	"Tab": "ComponentExamples_Tab__FzrI0",
	"selected": "ComponentExamples_selected__G_9Im",
	"ExampleFrame": "ComponentExamples_ExampleFrame__M2N8M",
	"Buttons": "ComponentExamples_Buttons__CX93w",
	"SandboxButton": "ComponentExamples_SandboxButton__RuRhv"
};


/***/ }),

/***/ 86279:
/***/ ((module) => {

// Exports
module.exports = {
	"UnparsablePropsWarning": "PropsTable_UnparsablePropsWarning__7GPhO",
	"TypeTable": "PropsTable_TypeTable__VwXvn",
	"TypeTableHeader": "PropsTable_TypeTableHeader__UzJWZ",
	"Description": "PropsTable_Description__P0yil",
	"RawInterfaceValue": "PropsTable_RawInterfaceValue__LGQ0l",
	"Row": "PropsTable_Row__Dmyba",
	"Key": "PropsTable_Key__V_nBU",
	"ExpandableType": "PropsTable_ExpandableType__gdXkz",
	"MemberName": "PropsTable_MemberName__2Ng0F",
	"isDeprecated": "PropsTable_isDeprecated__yohFc",
	"Valuex": "PropsTable_Valuex__TSgMZ",
	"DeprecationNotice": "PropsTable_DeprecationNotice__YXk1e",
	"SyntaxString": "PropsTable_SyntaxString__dOIZE",
	"SyntaxBoolean": "PropsTable_SyntaxBoolean__cdU8b",
	"SyntaxType": "PropsTable_SyntaxType__UfemH",
	"SyntaxNumber": "PropsTable_SyntaxNumber__x8_Nu"
};


/***/ }),

/***/ 36707:
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
/* harmony import */ var globby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23059);
/* harmony import */ var globby__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(globby__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71423);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96107);
/* harmony import */ var _src_components_ComponentExamples__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42402);
/* harmony import */ var _src_components_Markdown_serialize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(83480);
/* harmony import */ var _src_components_Markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(83443);
/* harmony import */ var _src_components_Page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(35709);
/* harmony import */ var _src_utils_various__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(79233);
/* harmony import */ var _src_components_PageMeta__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(68668);
/* harmony import */ var _src_components_PropsTable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20603);
/* harmony import */ var _scripts_get_props_src_get_props__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(21821);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([vfile__WEBPACK_IMPORTED_MODULE_4__, _src_components_ComponentExamples__WEBPACK_IMPORTED_MODULE_5__, _src_components_Markdown_serialize__WEBPACK_IMPORTED_MODULE_6__, _src_components_Markdown__WEBPACK_IMPORTED_MODULE_7__, _src_components_Page__WEBPACK_IMPORTED_MODULE_8__, _src_components_PropsTable__WEBPACK_IMPORTED_MODULE_11__]);
([vfile__WEBPACK_IMPORTED_MODULE_4__, _src_components_ComponentExamples__WEBPACK_IMPORTED_MODULE_5__, _src_components_Markdown_serialize__WEBPACK_IMPORTED_MODULE_6__, _src_components_Markdown__WEBPACK_IMPORTED_MODULE_7__, _src_components_Page__WEBPACK_IMPORTED_MODULE_8__, _src_components_PropsTable__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const Components = ({ examples , mdx , seoDescription , type , editPageLinkPath  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components_Page__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        editPageLinkPath: editPageLinkPath,
        isContentPage: true,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_PageMeta__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                title: mdx.frontmatter.title,
                description: seoDescription
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Markdown__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
                ...mdx,
                components: {
                    Examples: ()=>Boolean(examples.length) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_ComponentExamples__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            examples: examples,
                            componentTitle: mdx.frontmatter.title
                        }) : null,
                    Props: ({ componentName  })=>type && mdx.frontmatter.status !== "Deprecated" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_PropsTable__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                            componentName: componentName,
                            types: type
                        }) : null
                }
            })
        ]
    });
};
function load(filePath) {
    return fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(filePath, "utf-8");
}
const getStaticProps = async (context)=>{
    const componentSlug = context.params?.component;
    const groupSlug = context.params?.group;
    const relativeMdPath = `content/components/${groupSlug}/${componentSlug}.mdx`;
    const mdFilePath = path__WEBPACK_IMPORTED_MODULE_3___default().resolve(process.cwd(), relativeMdPath);
    const editPageLinkPath = `polaris.shopify.com/${relativeMdPath}`;
    if (fs__WEBPACK_IMPORTED_MODULE_1___default().existsSync(mdFilePath)) {
        const [mdx, data] = await (0,_src_components_Markdown_serialize__WEBPACK_IMPORTED_MODULE_6__/* .serializeMdx */ .R)(mdFilePath, {
            load
        });
        const seoDescription = typeof mdx.frontmatter.seoDescription === "string" ? mdx.frontmatter.seoDescription : data.firstParagraph ?? null;
        const examples = await Promise.all((mdx.frontmatter.examples || []).map(async (example)=>{
            const examplePath = path__WEBPACK_IMPORTED_MODULE_3___default().resolve(process.cwd(), `pages/examples/${example.fileName}`);
            let code = "";
            if (fs__WEBPACK_IMPORTED_MODULE_1___default().existsSync(examplePath)) {
                code = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(examplePath, "utf-8");
                code = code.split("\n").filter((line)=>!line.includes("withPolarisExample")).join("\n");
            }
            let description = null;
            if (example.description) {
                // Since this markdown didn't come from a real file, we use a VFile
                // instead
                [description] = await (0,_src_components_Markdown_serialize__WEBPACK_IMPORTED_MODULE_6__/* .serializeMdx */ .R)(new vfile__WEBPACK_IMPORTED_MODULE_4__.VFile(example.description));
            }
            return {
                ...example,
                description,
                code
            };
        }));
        const propsFilePath = path__WEBPACK_IMPORTED_MODULE_3___default().resolve(process.cwd(), `.cache/props.json`);
        const fileContent = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(propsFilePath, "utf8");
        const allType = JSON.parse(fileContent);
        const componentDirName = (0,_src_utils_various__WEBPACK_IMPORTED_MODULE_9__/* .toPascalCase */ .Mh)(`${mdx.frontmatter.title} `);
        const propName = (0,_src_utils_various__WEBPACK_IMPORTED_MODULE_9__/* .toPascalCase */ .Mh)(`${mdx.frontmatter.title} Props`);
        let type = (0,_scripts_get_props_src_get_props__WEBPACK_IMPORTED_MODULE_12__/* .getRelevantTypes */ .o7)(allType, propName, `polaris-react/src/components/${componentDirName}/${componentDirName}.tsx`, mdx.frontmatter.status || "");
        const props = {
            mdx,
            examples,
            seoDescription,
            type,
            editPageLinkPath
        };
        return {
            props
        };
    } else {
        return {
            notFound: true
        };
    }
};
const getStaticPaths = async ()=>{
    const globPath = path__WEBPACK_IMPORTED_MODULE_3___default().resolve(process.cwd(), "content/components/**/*.mdx");
    const paths = globby__WEBPACK_IMPORTED_MODULE_2___default().sync(globPath).filter((path)=>!path.endsWith("index.mdx")).map((path)=>path.replace(`${process.cwd()}/content`, "").replace(".mdx", ""));
    return {
        paths,
        fallback: false
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Components);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 21821:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "o7": () => (/* binding */ getRelevantTypes)
});

// UNUSED EXPORTS: getProps, normalizePath

;// CONCATENATED MODULE: external "typescript"
const external_typescript_namespaceObject = require("typescript");
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(57147);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(71423);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
// EXTERNAL MODULE: external "globby"
var external_globby_ = __webpack_require__(23059);
var external_globby_default = /*#__PURE__*/__webpack_require__.n(external_globby_);
;// CONCATENATED MODULE: ./scripts/get-props/src/get-props.ts
/* module decorator */ module = __webpack_require__.hmd(module);
//#!/usr/bin/env ts-node




const compilerOptions = {
    target: external_typescript_namespaceObject.ScriptTarget.ES5,
    module: external_typescript_namespaceObject.ModuleKind.CommonJS
};
function normalizePath(path) {
    let normalizedPath = path;
    if (normalizedPath.startsWith(".")) {
        normalizedPath = normalizedPath.replace(/^\.{1,2}\//, "");
    } else if (normalizedPath.includes("/polaris/")) {
        normalizedPath = normalizedPath.split("/polaris/")[1];
    } else if (normalizedPath.startsWith("/")) {
        normalizedPath = normalizedPath.replace("/", "");
    }
    return normalizedPath;
}
function getProps(filePaths) {
    let ast = {};
    let program = external_typescript_namespaceObject.createProgram(filePaths, compilerOptions);
    let checker = program.getTypeChecker();
    let filePath = "";
    for (const sourceFile of program.getSourceFiles()){
        if (!sourceFile.isDeclarationFile) {
            external_typescript_namespaceObject.forEachChild(sourceFile, (child)=>{
                filePath = normalizePath(sourceFile.fileName);
                visit(child);
            });
        }
    }
    return ast;
    function visit(node, level = 0) {
        // Escape hatch
        if (level > 10) {
            return undefined;
        }
        const parserArgs = [
            ast,
            node,
            checker,
            program,
            filePath
        ];
        switch(node.kind){
            case external_typescript_namespaceObject.SyntaxKind.EnumDeclaration:
                parseEnumDeclaration(...parserArgs);
                break;
            case external_typescript_namespaceObject.SyntaxKind.InterfaceDeclaration:
                parseInterfaceDeclaration(...parserArgs);
                break;
            case external_typescript_namespaceObject.SyntaxKind.TypeAliasDeclaration:
                parseTypeAliasDeclaration(...parserArgs);
                break;
        }
    }
}
const parseInterfaceDeclaration = (ast, node, checker, _program, filePath)=>{
    const interfaceDeclaration = node;
    const type = checker.getTypeAtLocation(interfaceDeclaration.name);
    const symbol = checker.getSymbolAtLocation(interfaceDeclaration.name);
    if (!symbol) throw new Error("Expected interface declaration to have symbol");
    const members = [];
    interfaceDeclaration.members.forEach((member)=>{
        if (member.kind === external_typescript_namespaceObject.SyntaxKind.IndexSignature) {
            const indexSignature = member;
            const name = `[${indexSignature.parameters.map((param)=>`${param.name.getText()}: ${param.type?.getText()}`).join(", ")}]`;
            const value = indexSignature.type.getText();
            members.push({
                filePath,
                name,
                value
            });
        }
    });
    for (const prop of type.getProperties()){
        const valueDeclaration = prop.valueDeclaration;
        if (valueDeclaration) {
            const name = prop.getName();
            const description = getSymbolComment(prop, checker);
            const syntaxKind = external_typescript_namespaceObject.SyntaxKind[valueDeclaration.kind];
            const type1 = checker.getTypeOfSymbolAtLocation(prop, valueDeclaration);
            const value = checker.typeToString(type1);
            const { deprecationMessage , defaultValue  } = parseJSDocTags(prop);
            let memberNode = {
                filePath,
                syntaxKind,
                name,
                value,
                description
            };
            if (valueDeclaration.kind === external_typescript_namespaceObject.SyntaxKind.PropertySignature || valueDeclaration.kind === external_typescript_namespaceObject.SyntaxKind.MethodSignature) {
                const signature = valueDeclaration;
                if (signature.questionToken !== undefined) {
                    memberNode.isOptional = true;
                }
            }
            if (deprecationMessage) {
                memberNode.deprecationMessage = deprecationMessage;
            }
            if (defaultValue) {
                memberNode.defaultValue = defaultValue;
            }
            members.push(memberNode);
        }
    }
    const name1 = interfaceDeclaration.name.escapedText.toString();
    const description1 = getSymbolComment(symbol, checker);
    const value1 = interfaceDeclaration.getText();
    if (!ast[name1]) {
        ast[name1] = {};
    }
    ast[name1][filePath] = {
        filePath,
        name: name1,
        description: description1,
        members,
        value: value1
    };
};
const parseTypeAliasDeclaration = (ast, node, checker, _program, filePath)=>{
    const typeAliasDeclaration = node;
    const symbol = checker.getSymbolAtLocation(typeAliasDeclaration.name);
    if (!symbol) {
        throw new Error("Expected type alias declaration to have a symbol");
    }
    const description = getSymbolComment(symbol, checker);
    const name = symbol.escapedName.toString();
    const syntaxKind = external_typescript_namespaceObject.SyntaxKind[typeAliasDeclaration.kind];
    const typeRefNode = typeAliasDeclaration.type;
    let value = typeAliasDeclaration.type.getText();
    for (const typeArg of typeRefNode.typeArguments ?? []){
        if (typeArg.kind === external_typescript_namespaceObject.SyntaxKind.UnionType) {
            value = checker.typeToString(checker.getTypeAtLocation(typeArg));
        }
    }
    if (typeAliasDeclaration.type.kind === external_typescript_namespaceObject.SyntaxKind.UnionType) {
        const unionType = typeAliasDeclaration.type;
        value = unionType.types.map((type)=>type.getText()).join(" | ");
    } else if (typeAliasDeclaration.type.kind === external_typescript_namespaceObject.SyntaxKind.IntersectionType) {
        const unionType1 = typeAliasDeclaration.type;
        value = unionType1.types.map((type)=>type.getText()).join(" & ");
    }
    if (!ast[name]) {
        ast[name] = {};
    }
    ast[name][filePath] = {
        filePath,
        syntaxKind,
        name,
        value,
        description
    };
};
const parseEnumDeclaration = (ast, node, checker, _program, filePath)=>{
    const enumDeclation = node;
    const symbol = checker.getSymbolAtLocation(enumDeclation.name);
    if (!symbol) throw new Error("Expected enum to have a matching symbol");
    const syntaxKind = external_typescript_namespaceObject.SyntaxKind[enumDeclation.kind];
    const name = enumDeclation.name.getText();
    const value = enumDeclation.getText();
    const members = enumDeclation.members.map((member)=>{
        const type = checker.getTypeAtLocation(member.name);
        return {
            filePath,
            name: member.name.getText(),
            value: type.isLiteral() ? type.value.valueOf() : ""
        };
    });
    if (!ast[name]) {
        ast[name] = {};
    }
    ast[name][filePath] = {
        filePath,
        syntaxKind,
        name,
        value,
        members
    };
};
function parseJSDocTags(symbol) {
    const tags = symbol.getJsDocTags();
    let deprecationMessage = undefined;
    let defaultValue = undefined;
    tags.forEach((tag)=>{
        if (tag.name.toLowerCase() === "default" && tag.text) {
            defaultValue = tag.text.map((t)=>t.text).join("");
        }
        if (tag.name.toLowerCase() === "deprecated") {
            deprecationMessage = tag.text ? tag.text.map((t)=>t.text).join("") : "Deprecated";
        }
    });
    return {
        deprecationMessage,
        defaultValue
    };
}
function getSymbolComment(symbol, checker) {
    return symbol.getDocumentationComment(checker).map((comment)=>comment.kind === "text" ? comment.text : "").join("\n");
}
const isExecutedThroughCommandLine = __webpack_require__.c[__webpack_require__.s] === module;
if (isExecutedThroughCommandLine) {
    external_globby_default()([
        "../polaris-react/src/**/*.ts",
        "../polaris-react/src/**/*.tsx"
    ]).then((files)=>{
        let filesWithoutTests = files.filter((file)=>!file.endsWith("test.tsx"));
        const ast = getProps(filesWithoutTests);
        const cacheDir = external_path_default().join(__dirname, "../../../.cache");
        if (!external_fs_.existsSync(cacheDir)) {
            external_fs_.mkdirSync(cacheDir, {
                recursive: true
            });
        }
        external_fs_.writeFileSync(external_path_default().join(cacheDir, "props.json"), JSON.stringify(ast, undefined, 2));
    });
}
const nonPolarisTypes = [
    "React",
    "ReactNode",
    "any",
    "CSSProperties",
    "ElementType",
    "MouseEvent",
    "File",
    "HTMLElement"
];
function getRelevantTypes(ast, name, filePath, status) {
    if (status === "Deprecated") {
        return {};
    }
    let matchingNode = ast[name][filePath];
    if (!matchingNode) {
        matchingNode = Object.values(ast[name])[0];
    }
    if (!matchingNode) {
        throw new Error(`Expected to find a Props definition at ast['${name}']['${filePath}'] or at least Object.values(ast['${name}])[0]`);
    }
    const pascalCaseRegex = /[A-Z]+[a-z]+(?:[A-Z][a-z]+)*/gm;
    let output = {};
    extractTypes(matchingNode);
    function extractTypes(node) {
        output[node.name] = node;
        let typeDefinitionString = node.members ? node.members.map((member)=>member.value.toString()).join(" ") : node.value.toString();
        let detectedTypeDefinitions = typeDefinitionString.match(pascalCaseRegex);
        detectedTypeDefinitions?.forEach((name)=>{
            if (nonPolarisTypes.includes(name)) return;
            if (Object.keys(output).includes(name)) return;
            const typeDefinitionInSameFile = ast[name] ? ast[name][node.filePath] : undefined;
            if (typeDefinitionInSameFile) {
                extractTypes(typeDefinitionInSameFile);
            } else {
                const typeDefinitionsWithSameName = ast[name];
                const typeDefinitionsWithSameNameCount = Object.keys(typeDefinitionsWithSameName || {}).length;
                if (typeDefinitionsWithSameNameCount === 1) {
                    extractTypes(Object.values(typeDefinitionsWithSameName)[0]);
                } else {
                    console.warn(`Found ${typeDefinitionsWithSameNameCount} definitions for type ${name}`);
                }
            }
        });
    }
    return output;
}


/***/ }),

/***/ 76798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_CodesandboxButton)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: external "codesandbox/lib/api/define"
const define_namespaceObject = require("codesandbox/lib/api/define");
// EXTERNAL MODULE: ./src/components/CodesandboxButton/CodesandboxButton.module.scss
var CodesandboxButton_module = __webpack_require__(61716);
var CodesandboxButton_module_default = /*#__PURE__*/__webpack_require__.n(CodesandboxButton_module);
;// CONCATENATED MODULE: ./src/components/CodesandboxButton/CodesandboxButton.tsx



const getAppCode = (code)=>{
    const lineWithFunctionName = code.split("\n").filter((name)=>name.match(/function .*Example/g))?.[0];
    const functionName = lineWithFunctionName ? lineWithFunctionName.replace("function ", "").replace("() {", "") : "Example";
    const exportLine = `export default ${functionName};`;
    let appCode = "";
    appCode += code;
    appCode += "\n";
    appCode += exportLine;
    return appCode;
};
const indexCode = `
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { AppProvider } from "@shopify/polaris";
import en from "@shopify/polaris/locales/en.json";
import "@shopify/polaris/build/esm/styles.css";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <AppProvider i18n={en}>
    <App />
  </AppProvider>
);
`;
const CodesandboxButton = (props)=>{
    const { className , code  } = props;
    const parameters = (0,define_namespaceObject.getParameters)({
        files: {
            "package.json": {
                content: {
                    dependencies: {
                        react: "latest",
                        "react-dom": "latest",
                        "@shopify/polaris": "latest",
                        "@shopify/polaris-icons": "latest"
                    }
                },
                isBinary: false
            },
            "App.tsx": {
                content: getAppCode(code),
                isBinary: false
            },
            "index.tsx": {
                content: indexCode,
                isBinary: false
            },
            "index.html": {
                content: '<div id="root"></div>',
                isBinary: false
            }
        }
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        action: "https://codesandbox.io/api/v1/sandboxes/define",
        method: "POST",
        target: "_blank",
        className: className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "hidden",
                name: "parameters",
                value: parameters
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "hidden",
                name: "query",
                value: "module=App.tsx"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                type: "submit",
                className: (CodesandboxButton_module_default()).Button,
                children: "Edit in CodeSandbox"
            })
        ]
    });
};
/* harmony default export */ const CodesandboxButton_CodesandboxButton = (CodesandboxButton);

;// CONCATENATED MODULE: ./src/components/CodesandboxButton/index.ts

/* harmony default export */ const components_CodesandboxButton = (CodesandboxButton_CodesandboxButton);


/***/ }),

/***/ 69218:
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
/* harmony import */ var _ComponentExamples_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(66845);
/* harmony import */ var _ComponentExamples_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ComponentExamples_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _CodesandboxButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76798);
/* harmony import */ var _utils_various__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79233);
/* harmony import */ var _Code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67468);
/* harmony import */ var _Markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83443);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63662);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Code__WEBPACK_IMPORTED_MODULE_4__, _Markdown__WEBPACK_IMPORTED_MODULE_5__]);
([_Code__WEBPACK_IMPORTED_MODULE_4__, _Markdown__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const exampleIframeId = "example-iframe";
const iframePadding = 192;
// https://stackoverflow.com/a/60338028
function formatHTML(html) {
    const tab = "  ";
    let result = "";
    let indent = "";
    html.split(/>\s*</).forEach((element)=>{
        if (element.match(/^\/\w/)) {
            indent = indent.substring(tab.length);
        }
        result += indent + "<" + element + ">\r\n";
        if (element.match(/^<?\w[^>]*[^\/]$/) && !element.startsWith("input")) {
            indent += tab;
        }
    });
    return result.substring(1, result.length - 3);
}
const ComponentExamples = ({ examples , componentTitle  })=>{
    const [htmlCode, setHTMLCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [iframeHeight, setIframeHeight] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(400);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_7__.useSearchParams)();
    const handleExampleLoad = ()=>{
        let attempts = 0;
        const waitForExampleContentToRender = setInterval(()=>{
            const exampleIframe = document.getElementById(exampleIframeId);
            const exampleIframeDOM = exampleIframe?.contentDocument;
            const exampleWrapper = exampleIframeDOM?.getElementById("polaris-example");
            if (exampleWrapper) {
                const newHeight = iframePadding + exampleWrapper.offsetHeight;
                setIframeHeight(newHeight);
                setHTMLCode(formatHTML(exampleWrapper.innerHTML));
                clearInterval(waitForExampleContentToRender);
            }
            attempts++;
            if (attempts > 10) {
                clearInterval(waitForExampleContentToRender);
            }
        }, 100);
        return ()=>clearInterval(waitForExampleContentToRender);
    };
    // get example names and index
    const defaultExampleName = examples[0].fileName.replace(".tsx", "");
    let exampleName = params.get("example") || defaultExampleName;
    let exampleFilename = (exampleName ? exampleName : defaultExampleName) + ".tsx";
    let exampleIndex = examples.findIndex((obj)=>obj.fileName === exampleFilename);
    // update query param to the selected example
    const updateSelectedExample = (index)=>{
        exampleName = examples[index].fileName.replace(".tsx", "");
        router.replace({
            pathname: router.pathname,
            query: {
                ...router.query,
                example: exampleName
            }
        }, undefined, {
            shallow: true
        });
    };
    // manage keyboard focus for tabs and tabpanels
    const examplesLength = examples.length - 1;
    const setSelectedToPreviousTab = ()=>{
        if (exampleIndex === 0) {
            setSelectedTab(examplesLength);
        } else {
            const index = exampleIndex - 1;
            setSelectedTab(index);
        }
    };
    const setSelectedToNextTab = ()=>{
        if (exampleIndex === examplesLength) {
            setSelectedTab(0);
        } else {
            const index = exampleIndex + 1;
            setSelectedTab(index);
        }
    };
    const setSelectedTab = (index)=>{
        exampleIndex = index;
        updateSelectedExample(index);
    };
    const onKeyDownHandler = (event)=>{
        switch(event.key){
            case "ArrowLeft":
                setSelectedToPreviousTab();
                break;
            case "ArrowRight":
                setSelectedToNextTab();
                break;
            case "Home":
                setSelectedTab(0);
                break;
            case "End":
                setSelectedTab(examplesLength);
                break;
            default:
                break;
        }
    };
    const buttonRefs = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        buttonRefs.current = buttonRefs.current.slice(0, examples.length);
    }, [
        examples
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const currentButtonRef = buttonRefs.current[exampleIndex];
        if (currentButtonRef) {
            currentButtonRef.focus();
        }
    }, [
        exampleIndex
    ]);
    const tablistId = "component-examples-tablist";
    const tabButtons = examples.map((example, index)=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            role: "tab",
            type: "button",
            id: `tab-${index}`,
            onClick: ()=>updateSelectedExample(index),
            "aria-controls": `tabpanel-${index}`,
            tabIndex: index === exampleIndex ? 0 : -1,
            ref: (el)=>buttonRefs.current[index] = el,
            "aria-selected": index === exampleIndex,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: example.title
            })
        }, example.fileName);
    });
    const examplesMarkup = examples.map(({ fileName , description , code  }, index)=>{
        const exampleUrl = `/examples/${fileName.replace(".tsx", "")}`;
        const isSelected = index === exampleIndex ? true : false;
        const classes = (0,_utils_various__WEBPACK_IMPORTED_MODULE_3__/* .className */ .ok)((_ComponentExamples_module_scss__WEBPACK_IMPORTED_MODULE_8___default().Tab), isSelected ? (_ComponentExamples_module_scss__WEBPACK_IMPORTED_MODULE_8___default().selected) : undefined);
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            id: `tabpanel-${index}`,
            role: "tabpanel",
            tabIndex: 0,
            className: classes,
            "aria-labelledby": `tab-${index}`,
            children: [
                description ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Markdown__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {
                    ...description
                }) : null,
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_ComponentExamples_module_scss__WEBPACK_IMPORTED_MODULE_8___default().ExampleFrame),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                            src: exampleUrl,
                            height: iframeHeight,
                            onLoad: handleExampleLoad,
                            id: exampleIframeId
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (0,_utils_various__WEBPACK_IMPORTED_MODULE_3__/* .className */ .ok)((_ComponentExamples_module_scss__WEBPACK_IMPORTED_MODULE_8___default().Buttons), "light-mode"),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CodesandboxButton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                className: (_ComponentExamples_module_scss__WEBPACK_IMPORTED_MODULE_8___default().CodesandboxButton),
                                code: code
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Code__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
                    code: [
                        {
                            title: "React",
                            code: code.trim()
                        },
                        {
                            title: "HTML",
                            code: htmlCode
                        }
                    ]
                })
            ]
        }, fileName);
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                id: tablistId,
                className: "visuallyHidden",
                children: [
                    componentTitle,
                    " component examples"
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                "aria-labelledby": tablistId,
                className: (_ComponentExamples_module_scss__WEBPACK_IMPORTED_MODULE_8___default().ExamplesList),
                id: "examples",
                role: "tablist",
                onKeyDown: onKeyDownHandler,
                children: tabButtons
            }),
            examplesMarkup[exampleIndex]
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComponentExamples);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 42402:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ComponentExamples__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69218);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ComponentExamples__WEBPACK_IMPORTED_MODULE_0__]);
_ComponentExamples__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ComponentExamples__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 33585:
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
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49027);
/* harmony import */ var _PropsTable_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(86279);
/* harmony import */ var _PropsTable_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_PropsTable_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Longform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87654);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66197);
/* harmony import */ var _StatusBadge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28595);
/* harmony import */ var _utils_various__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79233);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_4__]);
framer_motion__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function syntaxKindToDeveloperFriendlyString(syntaxKind) {
    if (syntaxKind === "EnumDeclaration") {
        return `enum`;
    } else if (syntaxKind === "TypeAliasDeclaration") {
        return `type`;
    }
    return `interface`;
}
const endWithPeriod = (str)=>str.trim().endsWith(".") ? str.trim() : `${str.trim()}.`;
const TypeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    types: {}
});
function PropsTable({ types , componentName  }) {
    const feedbackTitle = "[polaris.shopify.com] Props table feedback";
    const feedbackUrl = `https://github.com/shopify/polaris/issues/new?title=${encodeURIComponent(feedbackTitle)}&amp;labels=polaris.shopify.com`;
    const propsName = `${(0,_utils_various__WEBPACK_IMPORTED_MODULE_6__/* .toPascalCase */ .Mh)(componentName).replace(/\s/g, "")}Props`;
    const propsForComponent = types[propsName];
    if (!propsForComponent) throw new Error("Could not find props for component");
    const propsAreDefinedUsingInterface = !!propsForComponent.members;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TypeContext.Provider, {
        value: {
            types
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_PropsTable_module_scss__WEBPACK_IMPORTED_MODULE_7___default().PropsTable),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Longform__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    firstParagraphIsLede: false,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            id: "props",
                            children: "Props"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                "Want to help make this feature better? Please",
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: feedbackUrl,
                                    children: "share your feedback"
                                }),
                                "."
                            ]
                        })
                    ]
                }),
                !propsAreDefinedUsingInterface && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_PropsTable_module_scss__WEBPACK_IMPORTED_MODULE_7___default().UnparsablePropsWarning),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: `This component defines its props in a way that our website can't automatically parse. The type definition is shown below, but it might be hard to read.`
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {
                    initial: false,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TypeTable, {
                        types: types,
                        type: propsForComponent
                    })
                })
            ]
        })
    });
}
const ExpandedTypesContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    expandType: ()=>undefined,
    collapseType: ()=>undefined,
    expandedTypes: [],
    currentMember: null
});
function TypeTable({ types , type , level =0  }) {
    const [expandedTypes, setExpandedTypes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { collapseType  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ExpandedTypesContext);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
        className: (_PropsTable_module_scss__WEBPACK_IMPORTED_MODULE_7___default().TypeTable),
        initial: {
            opacity: 0,
            scale: 0.7,
            height: 0
        },
        animate: {
            opacity: 1,
            scale: 1,
            height: "auto",
            transition: {
                ease: "backOut"
            }
        },
        exit: {
            opacity: 0,
            scale: 0,
            height: 0,
            transition: {
                ease: "backIn"
            }
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_PropsTable_module_scss__WEBPACK_IMPORTED_MODULE_7___default().TypeTableHeader),
                children: [
                    syntaxKindToDeveloperFriendlyString(type.syntaxKind),
                    " ",
                    type.name,
                    " ",
                    typeof level === "number" && level > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>collapseType(type.name),
                        "aria-label": "Collapse",
                        children: "\xd7"
                    })
                ]
            }),
            !type.members && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ExpandedTypesContext.Provider, {
                value: {
                    expandedTypes,
                    expandType: (typeName)=>setExpandedTypes([
                            {
                                typeName,
                                memberName: null
                            },
                            ...expandedTypes
                        ]),
                    collapseType: ()=>undefined,
                    currentMember: null
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_PropsTable_module_scss__WEBPACK_IMPORTED_MODULE_7___default().RawInterfaceValue),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Highlighter, {
                            type: type.value.toString()
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {
                            initial: false,
                            children: expandedTypes.filter((expanded)=>expanded.memberName === null).map((expanded)=>{
                                const typeForExpandedType = types[expanded.typeName];
                                if (!typeForExpandedType) return null;
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TypeTable, {
                                    types: types,
                                    type: typeForExpandedType
                                }, expanded.typeName);
                            })
                        })
                    ]
                })
            }),
            type.members && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dl", {
                children: type.members.map(({ name , isOptional , description , defaultValue , value , deprecationMessage  })=>{
                    const expandType = (typeName)=>{
                        setExpandedTypes([
                            {
                                typeName,
                                memberName: name
                            },
                            ...expandedTypes
                        ]);
                    };
                    const collapseType = (typeName)=>setExpandedTypes((types)=>types.filter((typeInfo)=>!(typeInfo.typeName === typeName && typeInfo.memberName === name)));
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ExpandedTypesContext.Provider, {
                        value: {
                            expandedTypes,
                            expandType,
                            collapseType,
                            currentMember: name
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: (_PropsTable_module_scss__WEBPACK_IMPORTED_MODULE_7___default().Row),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("dt", {
                                    className: (_PropsTable_module_scss__WEBPACK_IMPORTED_MODULE_7___default().Key),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: (0,_utils_various__WEBPACK_IMPORTED_MODULE_6__/* .className */ .ok)((_PropsTable_module_scss__WEBPACK_IMPORTED_MODULE_7___default().MemberName), !!deprecationMessage && (_PropsTable_module_scss__WEBPACK_IMPORTED_MODULE_7___default().isDeprecated)),
                                            children: [
                                                name,
                                                isOptional && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "?"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: (_PropsTable_module_scss__WEBPACK_IMPORTED_MODULE_7___default().Valuex),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Highlighter, {
                                                type: value.toString()
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("dd", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_PropsTable_module_scss__WEBPACK_IMPORTED_MODULE_7___default().Description),
                                            children: [
                                                description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: endWithPeriod(description)
                                                }),
                                                defaultValue && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    children: [
                                                        "Defaults to ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: (_PropsTable_module_scss__WEBPACK_IMPORTED_MODULE_7___default().Default),
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Highlighter, {
                                                                type: defaultValue
                                                            })
                                                        }),
                                                        "."
                                                    ]
                                                }),
                                                deprecationMessage && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_PropsTable_module_scss__WEBPACK_IMPORTED_MODULE_7___default().DeprecationNotice),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_StatusBadge__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                            status: _types__WEBPACK_IMPORTED_MODULE_2__/* .StatusName.Deprecated */ .iy.Deprecated
                                                        }),
                                                        " ",
                                                        endWithPeriod(deprecationMessage)
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {
                                            initial: false,
                                            children: expandedTypes.filter((expanded)=>expanded.memberName === name).map((expanded)=>{
                                                const typeForExpandedType = types[expanded.typeName];
                                                if (!typeForExpandedType) return null;
                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TypeTable, {
                                                    types: types,
                                                    type: typeForExpandedType,
                                                    level: level + 1
                                                }, expanded.typeName);
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }, name);
                })
            })
        ]
    }, type.name);
}
function Highlighter({ type , prev =""  }) {
    const { expandType , expandedTypes , currentMember  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ExpandedTypesContext);
    const { types  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(TypeContext);
    const hasBeenExpanded = expandedTypes.some((expandedType)=>expandedType.typeName === type && expandedType.memberName === currentMember);
    const isString = type === "string" || type.match(/^['][^']+'$/) !== null || type.match(/^["][^"]+"$/) !== null;
    const isType = type.match(/^[A-Z][A-Za-z]+$/) || type === "any" || type === "void";
    if (isString) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: (_PropsTable_module_scss__WEBPACK_IMPORTED_MODULE_7___default().SyntaxString),
            children: type
        });
    } else if (type === "boolean") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: (_PropsTable_module_scss__WEBPACK_IMPORTED_MODULE_7___default().SyntaxBoolean),
            children: type
        });
    } else if (type === "number" || !Number.isNaN(parseInt(type))) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: (_PropsTable_module_scss__WEBPACK_IMPORTED_MODULE_7___default().SyntaxNumber),
            children: type
        });
    } else if (isType) {
        const referencedType = types[type];
        const referencedTypeExists = !!referencedType;
        const typeCanBeExpanded = referencedTypeExists;
        let autoInlinedValue = referencedType && !referencedType.members && typeof referencedType.value === "string" ? referencedType.value : undefined;
        if (autoInlinedValue) {
            const needsParenthesesToMakeSense = prev.includes("&") || prev.includes("|");
            if (needsParenthesesToMakeSense) {
                autoInlinedValue = `(${autoInlinedValue})`;
            }
        }
        if (autoInlinedValue) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Highlighter, {
                type: autoInlinedValue,
                prev: type
            });
        }
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: (_PropsTable_module_scss__WEBPACK_IMPORTED_MODULE_7___default().SyntaxType),
            children: typeCanBeExpanded ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: (_PropsTable_module_scss__WEBPACK_IMPORTED_MODULE_7___default().ExpandableType),
                onClick: ()=>expandType(type),
                disabled: hasBeenExpanded,
                "aria-expanded": hasBeenExpanded,
                children: type
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: type
            })
        });
    } else if (type.match(/^[a-z]+$/gi) !== null) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: (_PropsTable_module_scss__WEBPACK_IMPORTED_MODULE_7___default().SyntaxKeyword),
            children: type
        });
    } else {
        if (prev === type) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: type
        });
        const tokenRegex = /([^a-z0-9'"/-]+)/gi;
        const tokens = type.split(tokenRegex);
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: tokens.map((token, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Highlighter, {
                    type: token,
                    prev: type
                }, prev + token + i))
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PropsTable);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 20603:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PropsTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33585);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_PropsTable__WEBPACK_IMPORTED_MODULE_0__]);
_PropsTable__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_PropsTable__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 34258:
/***/ ((module) => {

"use strict";
module.exports = require("endent");

/***/ }),

/***/ 23059:
/***/ ((module) => {

"use strict";
module.exports = require("globby");

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

/***/ 69274:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context.js");

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

/***/ 3349:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html.js");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [579,3057,16,4939,3662,2582,9839,9233,9564,9293,1240,5697,6119,5247,1611,4984,5199,8597,5740,8214,7007,5993,6313,7468,5615], () => (__webpack_exec__(36707)));
module.exports = __webpack_exports__;

})();