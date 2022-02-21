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
exports.id = "pages/api/hello";
exports.ids = ["pages/api/hello"];
exports.modules = {

/***/ "(api)/./src/pages/api/hello.js":
/*!********************************!*\
  !*** ./src/pages/api/hello.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Handler)\n/* harmony export */ });\n/* export default function Handler(req, res){\n    res.status(200).json({\n        name: 'Teste API',\n        metodo: req.method\n    })\n}\n */ //para acessar parâmetros passado pela url no navegador, basta passar http://localhost:3000/api/hello?nome=Josiel&idade=45\n// e colocar na rota esse código params: JSON.stringify(req.query) indicao no passo 1\n//ese por acaso quiser pegar pela varável: \n//as informações vem no formato String, no caso de idade, para transformar em numero passa o sinal de +\n//no passo 2 = idade:+ req.query.idade\nfunction Handler(req, res) {\n    res.status(200).json({\n        name: 'Teste API',\n        metodo: req.method,\n        params: JSON.stringify(req.query),\n        nome: req.query.nome,\n        idade: +req.query.idade,\n        idade: req.query.idade\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2hlbGxvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxFQU1HOzs7Ozs7Q0FBQSxHQUVILEVBQTBIO0FBQ3pILEVBQW9GO0FBQ3BGLEVBQTBDO0FBQzFDLEVBQXNHO0FBQ3ZHLEVBQXNDO0FBQ3ZCLFFBQVEsQ0FBQ0EsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBQyxDQUFDO0lBQ3RDQSxHQUFHLENBQUNDLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO1FBQ2xCQyxJQUFJLEVBQUUsQ0FBVztRQUNqQkMsTUFBTSxFQUFFTCxHQUFHLENBQUNNLE1BQU07UUFDbEJDLE1BQU0sRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNULEdBQUcsQ0FBQ1UsS0FBSztRQUNoQ0MsSUFBSSxFQUFDWCxHQUFHLENBQUNVLEtBQUssQ0FBQ0MsSUFBSTtRQUNuQkMsS0FBSyxHQUFHWixHQUFHLENBQUNVLEtBQUssQ0FBQ0UsS0FBSztRQUN2QkEsS0FBSyxFQUFFWixHQUFHLENBQUNVLEtBQUssQ0FBQ0UsS0FBSztJQUMxQixDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NpdGUvLi9zcmMvcGFnZXMvYXBpL2hlbGxvLmpzPzdmODAiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGFuZGxlcihyZXEsIHJlcyl7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICBuYW1lOiAnVGVzdGUgQVBJJyxcbiAgICAgICAgbWV0b2RvOiByZXEubWV0aG9kXG4gICAgfSlcbn1cbiAqL1xuXG4vL3BhcmEgYWNlc3NhciBwYXLDom1ldHJvcyBwYXNzYWRvIHBlbGEgdXJsIG5vIG5hdmVnYWRvciwgYmFzdGEgcGFzc2FyIGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvaGVsbG8/bm9tZT1Kb3NpZWwmaWRhZGU9NDVcbi8vIGUgY29sb2NhciBuYSByb3RhIGVzc2UgY8OzZGlnbyBwYXJhbXM6IEpTT04uc3RyaW5naWZ5KHJlcS5xdWVyeSkgaW5kaWNhbyBubyBwYXNzbyAxXG4vL2VzZSBwb3IgYWNhc28gcXVpc2VyIHBlZ2FyIHBlbGEgdmFyw6F2ZWw6IFxuLy9hcyBpbmZvcm1hw6fDtWVzIHZlbSBubyBmb3JtYXRvIFN0cmluZywgbm8gY2FzbyBkZSBpZGFkZSwgcGFyYSB0cmFuc2Zvcm1hciBlbSBudW1lcm8gcGFzc2EgbyBzaW5hbCBkZSArXG4vL25vIHBhc3NvIDIgPSBpZGFkZTorIHJlcS5xdWVyeS5pZGFkZVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGFuZGxlcihyZXEsIHJlcyl7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICBuYW1lOiAnVGVzdGUgQVBJJyxcbiAgICAgICAgbWV0b2RvOiByZXEubWV0aG9kLFxuICAgICAgICBwYXJhbXM6IEpTT04uc3RyaW5naWZ5KHJlcS5xdWVyeSksLy9wYXNzbyAxLFxuICAgICAgICBub21lOnJlcS5xdWVyeS5ub21lLFxuICAgICAgICBpZGFkZTogK3JlcS5xdWVyeS5pZGFkZSwvL3Bhc3NvIDJcbiAgICAgICAgaWRhZGU6IHJlcS5xdWVyeS5pZGFkZVxuICAgIH0pXG59Il0sIm5hbWVzIjpbIkhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzdGF0dXMiLCJqc29uIiwibmFtZSIsIm1ldG9kbyIsIm1ldGhvZCIsInBhcmFtcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJxdWVyeSIsIm5vbWUiLCJpZGFkZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/hello.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/hello.js"));
module.exports = __webpack_exports__;

})();