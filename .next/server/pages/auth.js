"use strict";
(() => {
var exports = {};
exports.id = 473;
exports.ids = [473];
exports.modules = {

/***/ 740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ auth)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
;// CONCATENATED MODULE: external "styled-jsx/style"
const style_namespaceObject = require("styled-jsx/style");
var style_default = /*#__PURE__*/__webpack_require__.n(style_namespaceObject);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./components/user.js





const user = props => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
  className: "jsx-1350756874",
  children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
    className: "jsx-1350756874",
    children: props.name
  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
    className: "jsx-1350756874",
    children: ["Age: ", props.age]
  }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
    id: "1350756874",
    children: ["div.jsx-1350756874{border:1px solid #eee;box-shadow:0 2px 3px #ccc;padding:20px;text-align:center;}"]
  })]
});

/* harmony default export */ const components_user = (user);
;// CONCATENATED MODULE: ./pages/auth/index.js





const authIndexPage = props => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
    children: ["The Auth Index Page - ", props.appName]
  }), /*#__PURE__*/jsx_runtime_.jsx(components_user, {
    name: "Daniel",
    age: 24
  })]
});

authIndexPage.getInitialProps = async ctx => {
  console.log(ctx);
  const promise = await {
    appName: 'Super App (Auth)'
  };
  return promise;
};

/* harmony default export */ const auth = (authIndexPage);

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(740));
module.exports = __webpack_exports__;

})();