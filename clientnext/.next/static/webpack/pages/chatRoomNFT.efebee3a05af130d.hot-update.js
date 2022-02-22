"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chatRoomNFT",{

/***/ "./pages/chatRoomNFT.js":
/*!******************************!*\
  !*** ./pages/chatRoomNFT.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatRoomNFT; }\n/* harmony export */ });\n/* harmony import */ var _Users_aozdmr_Documents_chatnew_chat2_clientnext_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_aozdmr_Documents_chatnew_chat2_clientnext_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_aozdmr_Documents_chatnew_chat2_clientnext_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nvar socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_3__.io)(\"http://localhost:8000\", {\n    transports: [\n        \"websocket\"\n    ]\n});\nfunction ChatRoomNFT() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), name = ref[0], setName = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), room = ref1[0], setRoom = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), list = ref2[0], setList = ref2[1];\n    var query = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)().query;\n    var username = query.username;\n    var handlepost = function() {\n        var _ref = _asyncToGenerator(_Users_aozdmr_Documents_chatnew_chat2_clientnext_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            return _Users_aozdmr_Documents_chatnew_chat2_clientnext_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        e.preventDefault();\n                        socket.emit(\"room\", {\n                            room: 1,\n                            username: username,\n                            post: name\n                        });\n                    case 2:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handlepost(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    socket.on(\"message\", function(data) {\n        setList(_toConsumableArray(list).concat([\n            data\n        ]));\n    });\n    //   socket.on('channel', channel => {\n    //     let channels = this.state.channels;\n    //     channels.forEach(c => {\n    //         if (c.id === channel.id) {\n    //             c.participants = channel.participants;\n    //         }\n    //     });\n    //     this.setState({ channels });\n    // });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"chat-container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"header\", {\n                    className: \"chat-header\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"i\", {\n                                    className: \"fas fa-smile\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoomNFT.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 11\n                                }, this),\n                                \" ChatCord\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoomNFT.js\",\n                            lineNumber: 43,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                            id: \"leave-btn\",\n                            className: \"btn\",\n                            children: \"Leave Room\"\n                        }, void 0, false, {\n                            fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoomNFT.js\",\n                            lineNumber: 46,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoomNFT.js\",\n                    lineNumber: 42,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                    className: \"chat-main\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"chat-sidebar\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"i\", {\n                                            className: \"fas fa-comments\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoomNFT.js\",\n                                            lineNumber: 53,\n                                            columnNumber: 13\n                                        }, this),\n                                        \" Room Name:\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoomNFT.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                    id: \"roomName\",\n                                    children: \"Why NFT?\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoomNFT.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"i\", {\n                                            className: \"fas fa-users\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoomNFT.js\",\n                                            lineNumber: 59,\n                                            columnNumber: 13\n                                        }, this),\n                                        \" Users\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoomNFT.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                                    id: \"users\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoomNFT.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoomNFT.js\",\n                            lineNumber: 51,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"chat-messages\",\n                            children: list.filter(function(message) {\n                                return message.room == 1;\n                            }).map(function(p) {\n                                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"message\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                            className: \"meta\",\n                                            children: p.username\n                                        }, void 0, false, {\n                                            fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoomNFT.js\",\n                                            lineNumber: 69,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                            children: p.post\n                                        }, void 0, false, {\n                                            fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoomNFT.js\",\n                                            lineNumber: 70,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoomNFT.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 15\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoomNFT.js\",\n                            lineNumber: 63,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoomNFT.js\",\n                    lineNumber: 50,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"chat-form-container\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                        id: \"chat-form\",\n                        onSubmit: handlepost,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                id: \"msg\",\n                                type: \"text\",\n                                placeholder: \"Enter Message\",\n                                required: true,\n                                onChange: function(e) {\n                                    return setName(e.target.value);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoomNFT.js\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                children: \"send comment\"\n                            }, void 0, false, {\n                                fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoomNFT.js\",\n                                lineNumber: 84,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoomNFT.js\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoomNFT.js\",\n                    lineNumber: 75,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoomNFT.js\",\n            lineNumber: 41,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoomNFT.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this));\n};\n_s(ChatRoomNFT, \"BoPY07Wdy1MSaIBcyr2h483wCjQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = ChatRoomNFT;\nvar _c;\n$RefreshReg$(_c, \"ChatRoomNFT\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN6QixJQUFJLElBQUksQ0FBQzs0QkFDMUIsQ0FBQyxFQUFFMEIsR0FBRyxDQUFDLFFBQVEsQ0FBUEMsQ0FBQzs4Q0FDUCxNQUFNLCtEQUFMZCxDQUFHO29DQUFDQyxTQUFTLEVBQUMsQ0FBUzs7b0hBQ3JCYSxDQUFDOzRDQUFDYixTQUFTLEVBQUMsQ0FBTTtzREFBRWEsQ0FBQyxDQUFDdEIsUUFBUTs7Ozs7O29IQUM5QnNCLENBQUM7c0RBQUVBLENBQUMsQ0FBQ2pCLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0RkFLbkJHLENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUFxQjswR0FDakNjLENBQUk7d0JBQUNULEVBQUUsRUFBQyxDQUFXO3dCQUFDVSxRQUFRLEVBQUV2QixVQUFVOzt3R0FDdEN3QixDQUFLO2dDQUNKWCxFQUFFLEVBQUMsQ0FBSztnQ0FDUlksSUFBSSxFQUFDLENBQU07Z0NBQ1hDLFdBQVcsRUFBQyxDQUFlO2dDQUMzQkMsUUFBUTtnQ0FDUkMsUUFBUSxFQUFFLFFBQVEsQ0FBUDNCLENBQUM7b0NBQUtSLE1BQU0sQ0FBTkEsT0FBTyxDQUFDUSxDQUFDLENBQUM0QixNQUFNLENBQUNDLEtBQUs7Ozs7Ozs7d0dBRXhDQyxDQUFNOzBDQUFDLENBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhOUIsQ0FBQztHQTNGdUJ4QyxXQUFXOztRQUlmSCxrREFBUzs7O0tBSkxHLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhdFJvb21ORlQuanM/YzM3NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGlvIH0gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmNvbnN0IHNvY2tldCA9IGlvKFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwXCIsIHsgdHJhbnNwb3J0czogW1wid2Vic29ja2V0XCJdIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGF0Um9vbU5GVCgpIHtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtyb29tLCBzZXRSb29tXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IHVzZXJuYW1lID0gcXVlcnkudXNlcm5hbWU7XG5cblxuXG5cbiAgY29uc3QgaGFuZGxlcG9zdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNvY2tldC5lbWl0KFwicm9vbVwiLCB7IHJvb206IDEsIHVzZXJuYW1lOiB1c2VybmFtZSwgcG9zdDogbmFtZSB9KTtcbiAgfTtcblxuXG4gIHNvY2tldC5vbihcIm1lc3NhZ2VcIiwgKGRhdGEpID0+IHtcbiAgICBzZXRMaXN0KFsuLi5saXN0LCBkYXRhXSk7XG4gIH0pO1xuXG4vLyAgIHNvY2tldC5vbignY2hhbm5lbCcsIGNoYW5uZWwgPT4ge1xuICAgICAgICAgICAgXG4vLyAgICAgbGV0IGNoYW5uZWxzID0gdGhpcy5zdGF0ZS5jaGFubmVscztcbi8vICAgICBjaGFubmVscy5mb3JFYWNoKGMgPT4ge1xuLy8gICAgICAgICBpZiAoYy5pZCA9PT0gY2hhbm5lbC5pZCkge1xuLy8gICAgICAgICAgICAgYy5wYXJ0aWNpcGFudHMgPSBjaGFubmVsLnBhcnRpY2lwYW50cztcbi8vICAgICAgICAgfVxuLy8gICAgIH0pO1xuLy8gICAgIHRoaXMuc2V0U3RhdGUoeyBjaGFubmVscyB9KTtcbi8vIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LWNvbnRhaW5lclwiPlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJjaGF0LWhlYWRlclwiPlxuICAgICAgICA8aDE+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNtaWxlXCI+PC9pPiBDaGF0Q29yZFxuICAgICAgICA8L2gxPlxuICAgICAgICA8YSBpZD1cImxlYXZlLWJ0blwiIGNsYXNzTmFtZT1cImJ0blwiPlxuICAgICAgICAgIExlYXZlIFJvb21cbiAgICAgICAgPC9hPlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJjaGF0LW1haW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LXNpZGViYXJcIj5cbiAgICAgICAgICA8aDM+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY29tbWVudHNcIj48L2k+IFJvb20gTmFtZTpcbiAgICAgICAgICA8L2gzPlxuICAgICAgICAgIDxoMiBpZD1cInJvb21OYW1lXCI+XG4gICAgICAgICAgICAgIFdoeSBORlQ/XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8aDM+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlcnNcIj48L2k+IFVzZXJzXG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgICA8dWwgaWQ9XCJ1c2Vyc1wiPjwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtbWVzc2FnZXNcIj5cbiAgICAgICAgICBcbiAgICAgICAgICB7bGlzdC5maWx0ZXIoZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2Uucm9vbSA9PSAxO1xuICAgICAgICAgICAgfSkubWFwKChwKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1ldGFcIj57cC51c2VybmFtZX08L3A+XG4gICAgICAgICAgICAgICAgPHA+e3AucG9zdH08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LWZvcm0tY29udGFpbmVyXCI+XG4gICAgICAgIDxmb3JtIGlkPVwiY2hhdC1mb3JtXCIgb25TdWJtaXQ9e2hhbmRsZXBvc3R9PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9XCJtc2dcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBNZXNzYWdlXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvbj5zZW5kIGNvbW1lbnQ8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICB7LyogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX0gLz4gKi99XG4gICAgICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuXG5cblxuXG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImlvIiwidXNlUm91dGVyIiwic29ja2V0IiwidHJhbnNwb3J0cyIsIkNoYXRSb29tTkZUIiwibmFtZSIsInNldE5hbWUiLCJyb29tIiwic2V0Um9vbSIsImxpc3QiLCJzZXRMaXN0IiwicXVlcnkiLCJ1c2VybmFtZSIsImhhbmRsZXBvc3QiLCJlIiwicHJldmVudERlZmF1bHQiLCJlbWl0IiwicG9zdCIsIm9uIiwiZGF0YSIsImRpdiIsImNsYXNzTmFtZSIsImhlYWRlciIsImgxIiwiaSIsImEiLCJpZCIsIm1haW4iLCJoMyIsImgyIiwidWwiLCJmaWx0ZXIiLCJtZXNzYWdlIiwibWFwIiwicCIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/chatRoomNFT.js\n");

/***/ })

});