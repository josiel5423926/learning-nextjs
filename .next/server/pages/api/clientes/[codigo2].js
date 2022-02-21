"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/clientes/[codigo2]";
exports.ids = ["pages/api/clientes/[codigo2]"];
exports.modules = {

/***/ "(api)/./src/pages/api/clientes/[codigo2].js":
/*!*********************************************!*\
  !*** ./src/pages/api/clientes/[codigo2].js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nfunction handler(req, res) {\n    const codigo = req.query.codigo2;\n    res.status(200).json({\n        Id: codigo,\n        nome: `Maria ${codigo}`,\n        email: `josiel@gmail.com${codigo}`\n    });\n}; //enviando dados para api\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2NsaWVudGVzL1tjb2RpZ28yXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsUUFBUSxDQUFDQSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFDLENBQUM7SUFDdkMsS0FBSyxDQUFDQyxNQUFNLEdBQUdGLEdBQUcsQ0FBQ0csS0FBSyxDQUFDQyxPQUFPO0lBQy9CSCxHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO1FBQ2xCQyxFQUFFLEVBQUVMLE1BQU07UUFDVk0sSUFBSSxHQUFHLE1BQU0sRUFBRU4sTUFBTTtRQUNyQk8sS0FBSyxHQUFHLGdCQUFnQixFQUFFUCxNQUFNO0lBQ3BDLENBQUM7QUFDTCxDQUFDLENBRUQsQ0FBeUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaXRlLy4vc3JjL3BhZ2VzL2FwaS9jbGllbnRlcy9bY29kaWdvMl0uanM/ZTk3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKXtcbiAgIGNvbnN0IGNvZGlnbyA9IHJlcS5xdWVyeS5jb2RpZ28yIFxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgSWQ6IGNvZGlnbyxcbiAgICAgICAgbm9tZTogYE1hcmlhICR7Y29kaWdvfWAsXG4gICAgICAgIGVtYWlsOiBgam9zaWVsQGdtYWlsLmNvbSR7Y29kaWdvfWBcbiAgICB9KVxufVxuXG4vL2VudmlhbmRvIGRhZG9zIHBhcmEgYXBpIl0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjb2RpZ28iLCJxdWVyeSIsImNvZGlnbzIiLCJzdGF0dXMiLCJqc29uIiwiSWQiLCJub21lIiwiZW1haWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/clientes/[codigo2].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/clientes/[codigo2].js"));
module.exports = __webpack_exports__;

})();