"use strict";
exports.id = 8581;
exports.ids = [8581];
exports.modules = {

/***/ 88581:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "tokenGroupNames": () => (/* binding */ tokenGroupNames)
/* harmony export */ });
/* harmony import */ var _shopify_polaris_tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35904);

const tokenGroupNames = Object.keys(_shopify_polaris_tokens__WEBPACK_IMPORTED_MODULE_0__/* .themeDefault */ .rv);
const formats = [
    "json",
    "css"
];
function isFormat(format) {
    return formats.includes(format);
}
function isTokenGroupName(key) {
    return tokenGroupNames.includes(key);
}
/**
 * Format the token data into: css or json
 */ const formatTokenGroup = (tokenGroup, format)=>{
    const tokenValues = Object.fromEntries(Object.entries(tokenGroup).map(([token, value])=>[
            token,
            value
        ]));
    if (format === "css") {
        return Object.keys(tokenValues).reduce((result, tokenName)=>{
            if (!(0,_shopify_polaris_tokens__WEBPACK_IMPORTED_MODULE_0__/* .isTokenName */ .du)(tokenName)) {
                throw new Error(`Invalid token name: ${tokenName}`);
            }
            const cssVariable = `${(0,_shopify_polaris_tokens__WEBPACK_IMPORTED_MODULE_0__/* .createVarName */ .Mb)(tokenName)}: ${tokenValues[tokenName]};`;
            result.push(cssVariable);
            return result;
        }, []).join("\n");
    }
    return tokenValues;
};
const handler = async (req, res)=>{
    const formatParam = isFormat(req.query.format) ? req.query.format : "json";
    if (typeof formatParam === "string") {
        const tokenGroupParam = req.query.tokens || "";
        let tokenData = {};
        // Determine which list(s) we are querying for based on the token param
        if (tokenGroupParam === "all") {
            tokenGroupNames.forEach((tokenGroupName)=>{
                const tokenGroup = _shopify_polaris_tokens__WEBPACK_IMPORTED_MODULE_0__/* .themeDefault */ .rv[tokenGroupName];
                tokenData = {
                    ...tokenData,
                    ...tokenGroup
                };
            });
        }
        if (isTokenGroupName(tokenGroupParam)) {
            const tokenGroup = _shopify_polaris_tokens__WEBPACK_IMPORTED_MODULE_0__/* .themeDefault */ .rv[tokenGroupParam];
            tokenData = {
                ...tokenData,
                ...tokenGroup
            };
        }
        if (Object.keys(tokenData).length === 0) {
            res.status(400);
            res.json({
                error: true,
                status: 400
            });
            return;
        }
        const formattedTokenData = formatTokenGroup(tokenData, formatParam);
        if (formatParam === "css") {
            res.setHeader("content-type", "text/plain");
            res.setHeader("Access-Control-Allow-Credentials", "true");
            res.setHeader("Access-Control-Allow-Origin", "true");
            res.setHeader("Access-Control-Allow-Methods", "true");
            res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
            res.send(formattedTokenData);
        } else {
            res.json(formattedTokenData);
        }
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;