"use strict";
(() => {
var exports = {};
exports.id = 1010;
exports.ids = [1010];
exports.modules = {

/***/ 73289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tokens___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88581);

const getGithubUrl = (file)=>{
    const fileName = `${file}.ts`;
    const githubUrl = "https://github.com/Shopify/polaris/blob";
    const filePath = `/main/polaris-tokens/src/themes/base/${fileName}`;
    return `${githubUrl}${filePath}`;
};
const html = `
<!DOCTYPE>
<html>
    <head>
        <meta charset="utf-8">
        <title>API - Shopify Polaris</title>
        <style>
            td, th {
                border: 1px solid #dddddd;
                text-align: left;
                padding: 8px;
            }

            tr:nth-child(even) {
                background-color: #dddddd;
            }
        </style>
    </head>
    <body>
        <h1>Polaris Token API</h1>
        <p>
            This API allows users to query for and build applications with the <a href="https://polaris.shopify.com/tokens/getting-started-with-tokens">Polaris Tokens</a>.
        </p>
        <h2>Usage</h2>
        <ul>
            <li>
                <a href="/api/v0/tokens">/api/v0/tokens</a> - Overview
            </li>
            <li>
                <a href="/api/tokens/v0/all">/api/tokens/v0/all</a> - Contains all available tokens
            </li>
            <li>
                <a href="/api/tokens/v0/colors">/api/tokens/v0/colors</a> - Contains the color tokens for a desired color scheme
            </li>
            <li>
                /api/tokens/v0/:token-group - Information for a single token group
            </li>
            <li>
                Format Query Param - Updates the format that you receive. Defaults to json. Ex: /all?format=css, /colors?format=json, /:token-group?format=json
            </li>
            <li>
                Scheme Query Param - Updates the color scheme that you receive. Defaults to light. Ex: /all?scheme=dark, /colors?scheme=light
            </li>
        </ul>

        <h2>Token Groups</h2>
        <table>
            <thead>
                <tr>
                    <td>Token Group</td>
                    <td>JSON</td>
                    <td>CSS</td>
                    <td>Github</td>
                </tr>
            </thead>
            <tbody>
            ${_tokens___WEBPACK_IMPORTED_MODULE_0__.tokenGroupNames.map((tokenGroupName)=>{
    const url = `/api/tokens/v0/${tokenGroupName}`;
    const cssUrl = `${url}?format=css`;
    return `
                    <tr>
                        <td>${tokenGroupName}</td>
                        <td>
                            <a href="${url}">${url}</a>
                        </td>
                        <td>
                            <a href="${cssUrl}">${cssUrl}</a>
                        </td>
                        <td>
                            <a href="${getGithubUrl(tokenGroupName)}">File</a>
                        </td>
                    </tr>
                `;
}).join("\n")}
            </tbody>
        </table>
    </body>
</html>
`;
const handler = async (_, res)=>{
    res.setHeader("content-type", "text/html");
    res.send(html);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9679,5904,8581], () => (__webpack_exec__(73289)));
module.exports = __webpack_exports__;

})();