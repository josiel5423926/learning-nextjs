"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/integracao1",{

/***/ "./src/pages/integracao1.jsx":
/*!***********************************!*\
  !*** ./src/pages/integracao1.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Integracao; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\nfunction Integracao() {\n    var obterCLiente = function obterCLiente() {\n        fetch(\"http://localhost:3000/api/clientes/999\").then(function(resp) {\n            return resp.json();\n        }).then(function(dados) {\n            return setCliente(dados);\n        });\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}), cliente = ref[0], setCliente = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1), codigo = ref1[0], setCodigo = ref1[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        titulo: \"Consumindo dados da api\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        value: codigo,\n                        onChange: function(e) {\n                            return setCodigo(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/josiel/Documentos/Projetos/Projetos-pessoais/site/src/pages/integracao1.jsx\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: obterCLiente,\n                        children: \"Obter Cliente\"\n                    }, void 0, false, {\n                        fileName: \"/home/josiel/Documentos/Projetos/Projetos-pessoais/site/src/pages/integracao1.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/josiel/Documentos/Projetos/Projetos-pessoais/site/src/pages/integracao1.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        style: {\n                            padding: \"20px \",\n                            margin: \"12px\"\n                        },\n                        children: [\n                            \"C\\xf3digo:\",\n                            cliente.Id\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/josiel/Documentos/Projetos/Projetos-pessoais/site/src/pages/integracao1.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        style: {\n                            padding: \"20px \",\n                            margin: \"12px\"\n                        },\n                        children: [\n                            \"Nome:\",\n                            cliente.nome\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/josiel/Documentos/Projetos/Projetos-pessoais/site/src/pages/integracao1.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        style: {\n                            padding: \"20px \",\n                            margin: \"12px\"\n                        },\n                        children: [\n                            \"Email:\",\n                            cliente.email\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/josiel/Documentos/Projetos/Projetos-pessoais/site/src/pages/integracao1.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/josiel/Documentos/Projetos/Projetos-pessoais/site/src/pages/integracao1.jsx\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/josiel/Documentos/Projetos/Projetos-pessoais/site/src/pages/integracao1.jsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this));\n};\n_s(Integracao, \"xigpiNZpDlllOMsAdssiHpQIess=\");\n_c = Integracao;\nvar _c;\n$RefreshReg$(_c, \"Integracao\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW50ZWdyYWNhbzEuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBeUM7QUFDVDs7QUFFakIsUUFBUSxDQUFDRSxVQUFVLEdBQUcsQ0FBQztRQUkzQkMsWUFBWSxHQUFyQixRQUFRLENBQUNBLFlBQVksR0FBRyxDQUFDO1FBQ3ZCQyxLQUFLLENBQUMsQ0FBd0MseUNBQzNDQyxJQUFJLENBQUMsUUFBUSxDQUFQQyxJQUFJO1lBQUtBLE1BQU0sQ0FBTkEsSUFBSSxDQUFDQyxJQUFJO1dBQ3hCRixJQUFJLENBQUMsUUFBUSxDQUFQRyxLQUFLO1lBQUtDLE1BQU0sQ0FBTkEsVUFBVSxDQUFDRCxLQUFLOztJQUNyQyxDQUFDOztJQVBELEdBQUssQ0FBeUJQLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsR0FBbENTLE9BQU8sR0FBZ0JULEdBQVksS0FBMUJRLFVBQVUsR0FBSVIsR0FBWTtJQUMxQyxHQUFLLENBQXVCQSxJQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxHQUEvQlUsTUFBTSxHQUFlVixJQUFXLEtBQXhCVyxTQUFTLEdBQUlYLElBQVc7SUFRdkMsTUFBTSw2RUFDSEQsMERBQU07UUFBQ2EsTUFBTSxFQUFDLENBQXlCOzt3RkFDckNDLENBQUc7O2dHQUdDQyxDQUFLO3dCQUFDQyxJQUFJLEVBQUMsQ0FBUTt3QkFBQ0MsS0FBSyxFQUFFTixNQUFNO3dCQUFFTyxRQUFRLEVBQUVDLFFBQVEsQ0FBUkEsQ0FBQzs0QkFBSVAsTUFBTSxDQUFOQSxTQUFTLENBQUNPLENBQUMsQ0FBQ0MsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7O2dHQUcxRUksQ0FBTTt3QkFBQ0MsT0FBTyxFQUFFbkIsWUFBWTtrQ0FBRSxDQUFhOzs7Ozs7Ozs7Ozs7d0ZBRTdDb0IsQ0FBRTs7Z0dBQ0FDLENBQUU7d0JBQ0RDLEtBQUssRUFBRSxDQUFDOzRCQUNOQyxPQUFPLEVBQUUsQ0FBTzs0QkFDaEJDLE1BQU0sRUFBRSxDQUFNO3dCQUNoQixDQUFDOzs0QkFDRixDQUNROzRCQUFDakIsT0FBTyxDQUFDa0IsRUFBRTs7Ozs7OztnR0FHbkJKLENBQUU7d0JBQ0RDLEtBQUssRUFBRSxDQUFDOzRCQUNOQyxPQUFPLEVBQUUsQ0FBTzs0QkFDaEJDLE1BQU0sRUFBRSxDQUFNO3dCQUNoQixDQUFDOzs0QkFDRixDQUNNOzRCQUFDakIsT0FBTyxDQUFDbUIsSUFBSTs7Ozs7OztnR0FFbkJMLENBQUU7d0JBQ0RDLEtBQUssRUFBRSxDQUFDOzRCQUNOQyxPQUFPLEVBQUUsQ0FBTzs0QkFDaEJDLE1BQU0sRUFBRSxDQUFNO3dCQUNoQixDQUFDOzs0QkFDRixDQUNPOzRCQUFDakIsT0FBTyxDQUFDb0IsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1oQyxDQUFDO0dBbER1QjVCLFVBQVU7S0FBVkEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW50ZWdyYWNhbzEuanN4P2E5MjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEludGVncmFjYW8oKSB7XG4gIGNvbnN0IFtjbGllbnRlLCBzZXRDbGllbnRlXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW2NvZGlnbywgc2V0Q29kaWdvXSA9IHVzZVN0YXRlKDEpO1xuICAgIFxuICBmdW5jdGlvbiBvYnRlckNMaWVudGUoKSB7XG4gICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2NsaWVudGVzLzk5OVwiKVxuICAgICAgLnRoZW4oKHJlc3ApID0+IHJlc3AuanNvbigpKVxuICAgICAgLnRoZW4oKGRhZG9zKSA9PiBzZXRDbGllbnRlKGRhZG9zKSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgdGl0dWxvPVwiQ29uc3VtaW5kbyBkYWRvcyBkYSBhcGlcIj5cbiAgICAgIDxkaXZcbiAgICAgIC8vQW8gY2xpY2FyIG5vIGJvdMOjbyB2YWkgY2hhbWFyIGFmdW7Dp8OjbyAgb2J0ZXJDbGllbnRlIHF1ZSB2YWkgdHJhemVyIGFzIGluZm9ybWHDp8O1ZXMgZGEgYXBpXG4gICAgICA+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17Y29kaWdvfSBvbkNoYW5nZT17ZSA9PiBzZXRDb2RpZ28oZS50YXJnZXQudmFsdWUpfS8+XG5cbiAgICAgICAgICBcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29idGVyQ0xpZW50ZX0+T2J0ZXIgQ2xpZW50ZTwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjIwcHggXCIsXG4gICAgICAgICAgICAgIG1hcmdpbjogXCIxMnB4XCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEPDs2RpZ286e2NsaWVudGUuSWR9XG4gICAgICAgICAgPC9saT5cblxuICAgICAgICAgIDxsaVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcGFkZGluZzogXCIyMHB4IFwiLFxuICAgICAgICAgICAgICBtYXJnaW46IFwiMTJweFwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBOb21lOntjbGllbnRlLm5vbWV9XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGlcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiMjBweCBcIixcbiAgICAgICAgICAgICAgbWFyZ2luOiBcIjEycHhcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgRW1haWw6e2NsaWVudGUuZW1haWx9XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiBcbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJ1c2VTdGF0ZSIsIkludGVncmFjYW8iLCJvYnRlckNMaWVudGUiLCJmZXRjaCIsInRoZW4iLCJyZXNwIiwianNvbiIsImRhZG9zIiwic2V0Q2xpZW50ZSIsImNsaWVudGUiLCJjb2RpZ28iLCJzZXRDb2RpZ28iLCJ0aXR1bG8iLCJkaXYiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ1bCIsImxpIiwic3R5bGUiLCJwYWRkaW5nIiwibWFyZ2luIiwiSWQiLCJub21lIiwiZW1haWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/integracao1.jsx\n");

/***/ })

});