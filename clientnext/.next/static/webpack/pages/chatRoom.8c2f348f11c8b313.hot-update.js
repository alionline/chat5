"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chatRoom",{

/***/ "./pages/chatRoom.js":
/*!***************************!*\
  !*** ./pages/chatRoom.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatRoom; }\n/* harmony export */ });\n/* harmony import */ var _Users_aozdmr_Documents_chatnew_chat2_clientnext_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_aozdmr_Documents_chatnew_chat2_clientnext_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_aozdmr_Documents_chatnew_chat2_clientnext_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nvar socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_3__.io)(\"http://localhost:8000\", {\n    transports: [\n        \"websocket\"\n    ]\n});\nfunction ChatRoom() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), name = ref[0], setName = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), list = ref1[0], setList = ref1[1];\n    var query = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)().query;\n    var room_id = query.id;\n    var handlepost = function() {\n        var _ref = _asyncToGenerator(_Users_aozdmr_Documents_chatnew_chat2_clientnext_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            return _Users_aozdmr_Documents_chatnew_chat2_clientnext_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        e.preventDefault();\n                        socket.emit(\"room\", {\n                            username: 'ali',\n                            post: name\n                        });\n                    case 2:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handlepost(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    socket.on(\"message\", function(data) {\n        setList(_toConsumableArray(list).concat([\n            data\n        ]));\n    });\n    //   socket.on('channel', channel => {\n    //     let channels = this.state.channels;\n    //     channels.forEach(c => {\n    //         if (c.id === channel.id) {\n    //             c.participants = channel.participants;\n    //         }\n    //     });\n    //     this.setState({ channels });\n    // });\n    handleSendMessage = function(channel_id, text) {\n        _this.socket.emit('send-message', {\n            channel_id: channel_id,\n            text: text,\n            senderName: _this.socket.id,\n            id: Date.now()\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            \"test\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"chat-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"header\", {\n                        className: \"chat-header\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"i\", {\n                                        className: \"fas fa-smile\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoom.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 11\n                                    }, this),\n                                    \" ChatCord\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoom.js\",\n                                lineNumber: 52,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                id: \"leave-btn\",\n                                className: \"btn\",\n                                children: \"Leave Room\"\n                            }, void 0, false, {\n                                fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoom.js\",\n                                lineNumber: 55,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoom.js\",\n                        lineNumber: 51,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                        className: \"chat-main\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"chat-sidebar\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"i\", {\n                                                className: \"fas fa-comments\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoom.js\",\n                                                lineNumber: 62,\n                                                columnNumber: 13\n                                            }, this),\n                                            \" Room Name:\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoom.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                        id: \"roomName\",\n                                        children: query.id\n                                    }, void 0, false, {\n                                        fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoom.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"i\", {\n                                                className: \"fas fa-users\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoom.js\",\n                                                lineNumber: 68,\n                                                columnNumber: 13\n                                            }, this),\n                                            \" Users\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoom.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                                        id: \"users\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoom.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 11\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoom.js\",\n                                lineNumber: 60,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"chat-messages\",\n                                children: list.map(function(p) {\n                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"message\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                                className: \"meta\",\n                                                children: p.username\n                                            }, void 0, false, {\n                                                fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoom.js\",\n                                                lineNumber: 76,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                                children: p.post\n                                            }, void 0, false, {\n                                                fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoom.js\",\n                                                lineNumber: 77,\n                                                columnNumber: 15\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoom.js\",\n                                        lineNumber: 75,\n                                        columnNumber: 13\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoom.js\",\n                                lineNumber: 72,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoom.js\",\n                        lineNumber: 59,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"chat-form-container\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                            id: \"chat-form\",\n                            onSubmit: handlepost,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                    id: \"msg\",\n                                    type: \"text\",\n                                    placeholder: \"Enter Message\",\n                                    required: true,\n                                    onChange: function(e) {\n                                        return setName(e.target.value);\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoom.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    children: \"send comment\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoom.js\",\n                                    lineNumber: 91,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoom.js\",\n                            lineNumber: 83,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoom.js\",\n                        lineNumber: 82,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoom.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoom.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this));\n};\n_s(ChatRoom, \"pcb4OMIP4n1wA62/9msjYHpvbiI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = ChatRoom;\nvar _c;\n$RefreshReg$(_c, \"ChatRoom\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUUsRUFBQyxDQUFPOzs7Ozs7Ozs7Ozs7d0dBRWZlLENBQUc7Z0NBQUNDLFNBQVMsRUFBQyxDQUFlOzBDQUUzQnBCLElBQUksQ0FBQzZCLEdBQUcsQ0FBQyxRQUFRLENBQVBDLENBQUM7a0RBQ1YsTUFBTSwrREFBTFgsQ0FBRzt3Q0FBQ0MsU0FBUyxFQUFDLENBQVM7O3dIQUNyQlUsQ0FBQztnREFBQ1YsU0FBUyxFQUFDLENBQU07MERBQUVVLENBQUMsQ0FBQ3JCLFFBQVE7Ozs7Ozt3SEFDOUJxQixDQUFDOzBEQUFFQSxDQUFDLENBQUNwQixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0dBS2pCUyxDQUFHO3dCQUFDQyxTQUFTLEVBQUMsQ0FBcUI7OEdBQ2pDVyxDQUFJOzRCQUFDM0IsRUFBRSxFQUFDLENBQVc7NEJBQUM0QixRQUFRLEVBQUUzQixVQUFVOzs0R0FDdEM0QixDQUFLO29DQUNKN0IsRUFBRSxFQUFDLENBQUs7b0NBQ1I4QixJQUFJLEVBQUMsQ0FBTTtvQ0FDWEMsV0FBVyxFQUFDLENBQWU7b0NBQzNCQyxRQUFRO29DQUNSQyxRQUFRLEVBQUUsUUFBUSxDQUFQL0IsQ0FBQzt3Q0FBS1AsTUFBTSxDQUFOQSxPQUFPLENBQUNPLENBQUMsQ0FBQ2dDLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7Ozs0R0FFeENDLENBQU07OENBQUMsQ0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhOUIsQ0FBQztHQWxHdUIzQyxRQUFROztRQUdaSCxrREFBUzs7O0tBSExHLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhdFJvb20uanM/OGE4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGlvIH0gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmNvbnN0IHNvY2tldCA9IGlvKFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwXCIsIHsgdHJhbnNwb3J0czogW1wid2Vic29ja2V0XCJdIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGF0Um9vbSgpIHtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgeyBxdWVyeSB9ID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3Qgcm9vbV9pZCA9IHF1ZXJ5LmlkO1xuXG5cblxuICBjb25zdCBoYW5kbGVwb3N0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc29ja2V0LmVtaXQoXCJyb29tXCIsIHsgdXNlcm5hbWU6ICdhbGknLCBwb3N0OiBuYW1lIH0pO1xuICB9O1xuXG5cbiAgc29ja2V0Lm9uKFwibWVzc2FnZVwiLCAoZGF0YSkgPT4ge1xuICAgIHNldExpc3QoWy4uLmxpc3QsIGRhdGFdKTtcbiAgfSk7XG5cbi8vICAgc29ja2V0Lm9uKCdjaGFubmVsJywgY2hhbm5lbCA9PiB7XG4gICAgICAgICAgICBcbi8vICAgICBsZXQgY2hhbm5lbHMgPSB0aGlzLnN0YXRlLmNoYW5uZWxzO1xuLy8gICAgIGNoYW5uZWxzLmZvckVhY2goYyA9PiB7XG4vLyAgICAgICAgIGlmIChjLmlkID09PSBjaGFubmVsLmlkKSB7XG4vLyAgICAgICAgICAgICBjLnBhcnRpY2lwYW50cyA9IGNoYW5uZWwucGFydGljaXBhbnRzO1xuLy8gICAgICAgICB9XG4vLyAgICAgfSk7XG4vLyAgICAgdGhpcy5zZXRTdGF0ZSh7IGNoYW5uZWxzIH0pO1xuLy8gfSk7XG5cbmhhbmRsZVNlbmRNZXNzYWdlID0gKGNoYW5uZWxfaWQsIHRleHQpID0+IHtcbiAgICB0aGlzLnNvY2tldC5lbWl0KCdzZW5kLW1lc3NhZ2UnLCB7IGNoYW5uZWxfaWQsIHRleHQsIHNlbmRlck5hbWU6IHRoaXMuc29ja2V0LmlkLCBpZDogRGF0ZS5ub3coKSB9KTtcbn1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB0ZXN0XG4gICAgICB7LyogPGJyIC8+XG4gICAgICBcbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlcG9zdH0+c2VuZCBjb21tZW50PC9idXR0b24+XG4gICAgICB7SlNPTi5zdHJpbmdpZnkobGlzdCl9ICovfVxuXG5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LWNvbnRhaW5lclwiPlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJjaGF0LWhlYWRlclwiPlxuICAgICAgICA8aDE+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNtaWxlXCI+PC9pPiBDaGF0Q29yZFxuICAgICAgICA8L2gxPlxuICAgICAgICA8YSBpZD1cImxlYXZlLWJ0blwiIGNsYXNzTmFtZT1cImJ0blwiPlxuICAgICAgICAgIExlYXZlIFJvb21cbiAgICAgICAgPC9hPlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJjaGF0LW1haW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LXNpZGViYXJcIj5cbiAgICAgICAgICA8aDM+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY29tbWVudHNcIj48L2k+IFJvb20gTmFtZTpcbiAgICAgICAgICA8L2gzPlxuICAgICAgICAgIDxoMiBpZD1cInJvb21OYW1lXCI+XG4gICAgICAgICAgICAgIHtxdWVyeS5pZH1cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS11c2Vyc1wiPjwvaT4gVXNlcnNcbiAgICAgICAgICA8L2gzPlxuICAgICAgICAgIDx1bCBpZD1cInVzZXJzXCI+PC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1tZXNzYWdlc1wiPlxuICAgICAgICAgIFxuICAgICAgICAgIHtsaXN0Lm1hcCgocCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlXCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1ldGFcIj57cC51c2VybmFtZX08L3A+XG4gICAgICAgICAgICAgIDxwPntwLnBvc3R9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtZm9ybS1jb250YWluZXJcIj5cbiAgICAgICAgPGZvcm0gaWQ9XCJjaGF0LWZvcm1cIiBvblN1Ym1pdD17aGFuZGxlcG9zdH0+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBpZD1cIm1zZ1wiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIE1lc3NhZ2VcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uPnNlbmQgY29tbWVudDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIHsvKiA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfSAvPiAqL31cbiAgICAgICAgICBcbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG5cblxuXG5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiaW8iLCJ1c2VSb3V0ZXIiLCJzb2NrZXQiLCJ0cmFuc3BvcnRzIiwiQ2hhdFJvb20iLCJuYW1lIiwic2V0TmFtZSIsImxpc3QiLCJzZXRMaXN0IiwicXVlcnkiLCJyb29tX2lkIiwiaWQiLCJoYW5kbGVwb3N0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZW1pdCIsInVzZXJuYW1lIiwicG9zdCIsIm9uIiwiZGF0YSIsImhhbmRsZVNlbmRNZXNzYWdlIiwiY2hhbm5lbF9pZCIsInRleHQiLCJzZW5kZXJOYW1lIiwiRGF0ZSIsIm5vdyIsImRpdiIsImNsYXNzTmFtZSIsImhlYWRlciIsImgxIiwiaSIsImEiLCJtYWluIiwiaDMiLCJoMiIsInVsIiwibWFwIiwicCIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/chatRoom.js\n");

/***/ })

});