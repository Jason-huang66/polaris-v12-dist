"use strict";
(() => {
var exports = {};
exports.id = 4341;
exports.ids = [4341];
exports.modules = {

/***/ 45461:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "captureAnalyticsEvent": () => (/* binding */ captureAnalyticsEvent),
  "default": () => (/* binding */ service)
});

;// CONCATENATED MODULE: external "base-64"
const external_base_64_namespaceObject = require("base-64");
var external_base_64_default = /*#__PURE__*/__webpack_require__.n(external_base_64_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/service/index.tsx

const isProd = "production" === "production";
const enableLogs = process.env.DEBUG_ANALYTICS === "true";
const ANALYTICS_URL = isProd ? "https://polaris.sfe.shopifyinternal.com/analytics" : "http://localhost:3001/analytics"; // local service
class AnalyticsProducer {
    constructor(producer){
        this.produce = producer === "http" ? this.produceHttpRequest : this.produceLog;
    }
    produceLog(event) {
        if (!isProd && enableLogs) {
            console.log("Analytics event logged", event);
        }
    }
    async produceHttpRequest(event) {
        if (isProd) {
            try {
                const response = await fetch(ANALYTICS_URL, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Basic ${process.env.SERVICES_API && external_base_64_default().encode(process.env.SERVICES_API)}`
                    },
                    body: JSON.stringify(event)
                });
                const data = await response.json();
                if (response.status !== 200 || data.error) {
                    logError(`Analytics call failed. Error: ${data.error}`);
                }
            } catch (error) {
                logError(`Analytics call failed. Error: ${error}`);
            }
        }
    }
}
function logError(error) {
    if (enableLogs) {
        console.error(error);
    }
}
async function captureAnalyticsEvent(id, payload) {
    const event = {
        id,
        payload
    };
    const producerType = isProd ? "http" : "log";
    const analysisProducer = new AnalyticsProducer(producerType);
    analysisProducer.produce(event);
}
const handler = async (req, res)=>{
    const { body  } = req;
    if (!body || !body.id || !body.payload) {
        return res.status(400).send({});
    }
    const event = {
        id: body.id,
        payload: body.payload
    };
    const producerType = isProd ? "http" : "log";
    const analytics = new AnalyticsProducer(producerType);
    analytics.produce(event);
    return res.status(200).send({});
};
/* harmony default export */ const service = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(45461));
module.exports = __webpack_exports__;

})();