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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatRoomNFT; }\n/* harmony export */ });\n/* harmony import */ var _Users_aozdmr_Documents_chatnew_chat2_clientnext_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_aozdmr_Documents_chatnew_chat2_clientnext_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_aozdmr_Documents_chatnew_chat2_clientnext_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nvar socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_3__.io)(\"http://localhost:8000\", {\n    transports: [\n        \"websocket\"\n    ]\n});\nfunction ChatRoomNFT() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), name = ref[0], setName = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), room = ref1[0], setRoom = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), list = ref2[0], setList = ref2[1];\n    var query = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)().query;\n    var username = query.username;\n    var handlepost = function() {\n        var _ref = _asyncToGenerator(_Users_aozdmr_Documents_chatnew_chat2_clientnext_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            return _Users_aozdmr_Documents_chatnew_chat2_clientnext_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        e.preventDefault();\n                        // socket.emit('send-message', { room_id, name, senderName: socket.id, id: Date.now() });\n                        socket.emit(\"room\", {\n                            room: 1,\n                            username: username,\n                            post: name\n                        });\n                    case 2:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handlepost(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    socket.on(\"message\", function(data) {\n        setList(_toConsumableArray(list).concat([\n            data\n        ]));\n    });\n    //   socket.on('channel', channel => {\n    //     let channels = this.state.channels;\n    //     channels.forEach(c => {\n    //         if (c.id === channel.id) {\n    //             c.participants = channel.participants;\n    //         }\n    //     });\n    //     this.setState({ channels });\n    // });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            \"test\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"chat-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"header\", {\n                        className: \"chat-header\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"i\", {\n                                        className: \"fas fa-smile\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoomNFT.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 11\n                                    }, this),\n                                    \" ChatCord\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoomNFT.js\",\n                                lineNumber: 51,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                id: \"leave-btn\",\n                                className: \"btn\",\n                                children: \"Leave Room\"\n                            }, void 0, false, {\n                                fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoomNFT.js\",\n                                lineNumber: 54,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoomNFT.js\",\n                        lineNumber: 50,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                        className: \"chat-main\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"chat-sidebar\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"i\", {\n                                                className: \"fas fa-comments\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoomNFT.js\",\n                                                lineNumber: 61,\n                                                columnNumber: 13\n                                            }, this),\n                                            \" Room Name:\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoomNFT.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                        id: \"roomName\",\n                                        children: \"Why NFT?\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoomNFT.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"i\", {\n                                                className: \"fas fa-users\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoomNFT.js\",\n                                                lineNumber: 67,\n                                                columnNumber: 13\n                                            }, this),\n                                            \" Users\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoomNFT.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                                        id: \"users\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoomNFT.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 11\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoomNFT.js\",\n                                lineNumber: 59,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"chat-messages\",\n                                children: list.filter(function(message) {\n                                    return message.room == 1;\n                                }).map(function(p) {\n                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"message\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                                className: \"meta\",\n                                                children: p.username\n                                            }, void 0, false, {\n                                                fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoomNFT.js\",\n                                                lineNumber: 77,\n                                                columnNumber: 17\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                                children: p.post\n                                            }, void 0, false, {\n                                                fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoomNFT.js\",\n                                                lineNumber: 78,\n                                                columnNumber: 17\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoomNFT.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 15\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoomNFT.js\",\n                                lineNumber: 71,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoomNFT.js\",\n                        lineNumber: 58,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"chat-form-container\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                            id: \"chat-form\",\n                            onSubmit: handlepost,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                    id: \"msg\",\n                                    type: \"text\",\n                                    placeholder: \"Enter Message\",\n                                    required: true,\n                                    onChange: function(e) {\n                                        return setName(e.target.value);\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoomNFT.js\",\n                                    lineNumber: 85,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    children: \"send comment\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoomNFT.js\",\n                                    lineNumber: 92,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoomNFT.js\",\n                            lineNumber: 84,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoomNFT.js\",\n                        lineNumber: 83,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoomNFT.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/aozdmr/Documents/chatnew/chat2/clientnext/pages/chatRoomNFT.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this));\n};\n_s(ChatRoomNFT, \"BoPY07Wdy1MSaIBcyr2h483wCjQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = ChatRoomNFT;\nvar _c;\n$RefreshReg$(_c, \"ChatRoomNFT\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jaGF0Um9vbU5GVC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDRjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNyQyxHQUFLLENBQUNJLE1BQU0sR0FBR0Ysb0RBQUUsQ0FBQyxDQUF1Qix3QkFBRSxDQUFDO0lBQUNHLFVBQVUsRUFBRSxDQUFDO1FBQUEsQ0FBVztJQUFBLENBQUM7QUFBQyxDQUFDO0FBRXpELFFBQVEsQ0FBQ0MsV0FBVyxHQUFHLENBQUM7OztJQUNyQyxHQUFLLENBQW1CTCxHQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUE1Qk0sSUFBSSxHQUFhTixHQUFZLEtBQXZCTyxPQUFPLEdBQUlQLEdBQVk7SUFDcEMsR0FBSyxDQUFtQkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBNUJRLElBQUksR0FBYVIsSUFBWSxLQUF2QlMsT0FBTyxHQUFJVCxJQUFZO0lBQ3BDLEdBQUssQ0FBbUJBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsR0FBNUJVLElBQUksR0FBYVYsSUFBWSxLQUF2QlcsT0FBTyxHQUFJWCxJQUFZO0lBQ3BDLEdBQUssQ0FBR1ksS0FBSyxHQUFLVixzREFBUyxHQUFuQlUsS0FBSztJQUViLEdBQUssQ0FBQ0MsUUFBUSxHQUFHRCxLQUFLLENBQUNDLFFBQVE7SUFLL0IsR0FBSyxDQUFDQyxVQUFVO2lNQUFHLFFBQVEsU0FBREMsQ0FBQyxFQUFLLENBQUM7Ozs7d0JBQy9CQSxDQUFDLENBQUNDLGNBQWM7d0JBQ2hCLEVBQXlGO3dCQUN6RmIsTUFBTSxDQUFDYyxJQUFJLENBQUMsQ0FBTSxPQUFFLENBQUM7NEJBQUNULElBQUksRUFBRSxDQUFDOzRCQUFFSyxRQUFRLEVBQUVBLFFBQVE7NEJBQUVLLElBQUksRUFBRVosSUFBSTt3QkFBQyxDQUFDOzs7Ozs7UUFDakUsQ0FBQzt3QkFKS1EsVUFBVSxDQUFVQyxDQUFDOzs7O0lBTzNCWixNQUFNLENBQUNnQixFQUFFLENBQUMsQ0FBUyxVQUFFLFFBQVEsQ0FBUEMsSUFBSSxFQUFLLENBQUM7UUFDOUJULE9BQU8sb0JBQUtELElBQUksU0FBUixDQUFDO1lBQVNVLElBQUk7UUFBQSxDQUFDO0lBQ3pCLENBQUM7SUFFSCxFQUFzQztJQUV0QyxFQUEwQztJQUMxQyxFQUE4QjtJQUM5QixFQUFxQztJQUNyQyxFQUFxRDtJQUNyRCxFQUFZO0lBQ1osRUFBVTtJQUNWLEVBQW1DO0lBQ25DLEVBQU07SUFFSixNQUFNLDZFQUNIQyxDQUFHOztZQUFDLENBRUg7d0ZBT0NBLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFnQjs7Z0dBQzlCQyxDQUFNO3dCQUFDRCxTQUFTLEVBQUMsQ0FBYTs7d0dBQzVCRSxDQUFFOztnSEFDQUMsQ0FBQzt3Q0FBQ0gsU0FBUyxFQUFDLENBQWM7Ozs7OztvQ0FBSyxDQUNsQzs7Ozs7Ozt3R0FDQ0ksQ0FBQztnQ0FBQ0MsRUFBRSxFQUFDLENBQVc7Z0NBQUNMLFNBQVMsRUFBQyxDQUFLOzBDQUFDLENBRWxDOzs7Ozs7Ozs7Ozs7Z0dBRURNLENBQUk7d0JBQUNOLFNBQVMsRUFBQyxDQUFXOzt3R0FDeEJELENBQUc7Z0NBQUNDLFNBQVMsRUFBQyxDQUFjOztnSEFDMUJPLENBQUU7O3dIQUNBSixDQUFDO2dEQUFDSCxTQUFTLEVBQUMsQ0FBaUI7Ozs7Ozs0Q0FBSyxDQUNyQzs7Ozs7OztnSEFDQ1EsQ0FBRTt3Q0FBQ0gsRUFBRSxFQUFDLENBQVU7a0RBQUMsQ0FFbEI7Ozs7OztnSEFDQ0UsQ0FBRTs7d0hBQ0FKLENBQUM7Z0RBQUNILFNBQVMsRUFBQyxDQUFjOzs7Ozs7NENBQUssQ0FDbEM7Ozs7Ozs7Z0hBQ0NTLENBQUU7d0NBQUNKLEVBQUUsRUFBQyxDQUFPOzs7Ozs7Ozs7Ozs7d0dBRWZOLENBQUc7Z0NBQUNDLFNBQVMsRUFBQyxDQUFlOzBDQUUzQlosSUFBSSxDQUFDc0IsTUFBTSxDQUFDLFFBQVEsQ0FBRUMsT0FBTyxFQUFFLENBQUM7b0NBQzdCLE1BQU0sQ0FBQ0EsT0FBTyxDQUFDekIsSUFBSSxJQUFJLENBQUM7Z0NBQzFCLENBQUMsRUFBRTBCLEdBQUcsQ0FBQyxRQUFRLENBQVBDLENBQUM7a0RBQ1AsTUFBTSwrREFBTGQsQ0FBRzt3Q0FBQ0MsU0FBUyxFQUFDLENBQVM7O3dIQUNyQmEsQ0FBQztnREFBQ2IsU0FBUyxFQUFDLENBQU07MERBQUVhLENBQUMsQ0FBQ3RCLFFBQVE7Ozs7Ozt3SEFDOUJzQixDQUFDOzBEQUFFQSxDQUFDLENBQUNqQixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0dBS25CRyxDQUFHO3dCQUFDQyxTQUFTLEVBQUMsQ0FBcUI7OEdBQ2pDYyxDQUFJOzRCQUFDVCxFQUFFLEVBQUMsQ0FBVzs0QkFBQ1UsUUFBUSxFQUFFdkIsVUFBVTs7NEdBQ3RDd0IsQ0FBSztvQ0FDSlgsRUFBRSxFQUFDLENBQUs7b0NBQ1JZLElBQUksRUFBQyxDQUFNO29DQUNYQyxXQUFXLEVBQUMsQ0FBZTtvQ0FDM0JDLFFBQVE7b0NBQ1JDLFFBQVEsRUFBRSxRQUFRLENBQVAzQixDQUFDO3dDQUFLUixNQUFNLENBQU5BLE9BQU8sQ0FBQ1EsQ0FBQyxDQUFDNEIsTUFBTSxDQUFDQyxLQUFLOzs7Ozs7OzRHQUV4Q0MsQ0FBTTs4Q0FBQyxDQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWE5QixDQUFDO0dBbkd1QnhDLFdBQVc7O1FBSWZILGtEQUFTOzs7S0FKTEcsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jaGF0Um9vbU5GVC5qcz9jMzc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgaW8gfSBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuY29uc3Qgc29ja2V0ID0gaW8oXCJodHRwOi8vbG9jYWxob3N0OjgwMDBcIiwgeyB0cmFuc3BvcnRzOiBbXCJ3ZWJzb2NrZXRcIl0gfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXRSb29tTkZUKCkge1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Jvb20sIHNldFJvb21dID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgeyBxdWVyeSB9ID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgdXNlcm5hbWUgPSBxdWVyeS51c2VybmFtZTtcblxuXG5cblxuICBjb25zdCBoYW5kbGVwb3N0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gc29ja2V0LmVtaXQoJ3NlbmQtbWVzc2FnZScsIHsgcm9vbV9pZCwgbmFtZSwgc2VuZGVyTmFtZTogc29ja2V0LmlkLCBpZDogRGF0ZS5ub3coKSB9KTtcbiAgICBzb2NrZXQuZW1pdChcInJvb21cIiwgeyByb29tOiAxLCB1c2VybmFtZTogdXNlcm5hbWUsIHBvc3Q6IG5hbWUgfSk7XG4gIH07XG5cblxuICBzb2NrZXQub24oXCJtZXNzYWdlXCIsIChkYXRhKSA9PiB7XG4gICAgc2V0TGlzdChbLi4ubGlzdCwgZGF0YV0pO1xuICB9KTtcblxuLy8gICBzb2NrZXQub24oJ2NoYW5uZWwnLCBjaGFubmVsID0+IHtcbiAgICAgICAgICAgIFxuLy8gICAgIGxldCBjaGFubmVscyA9IHRoaXMuc3RhdGUuY2hhbm5lbHM7XG4vLyAgICAgY2hhbm5lbHMuZm9yRWFjaChjID0+IHtcbi8vICAgICAgICAgaWYgKGMuaWQgPT09IGNoYW5uZWwuaWQpIHtcbi8vICAgICAgICAgICAgIGMucGFydGljaXBhbnRzID0gY2hhbm5lbC5wYXJ0aWNpcGFudHM7XG4vLyAgICAgICAgIH1cbi8vICAgICB9KTtcbi8vICAgICB0aGlzLnNldFN0YXRlKHsgY2hhbm5lbHMgfSk7XG4vLyB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB0ZXN0XG4gICAgICB7LyogPGJyIC8+XG4gICAgICBcbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlcG9zdH0+c2VuZCBjb21tZW50PC9idXR0b24+XG4gICAgICB7SlNPTi5zdHJpbmdpZnkobGlzdCl9ICovfVxuXG5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LWNvbnRhaW5lclwiPlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJjaGF0LWhlYWRlclwiPlxuICAgICAgICA8aDE+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNtaWxlXCI+PC9pPiBDaGF0Q29yZFxuICAgICAgICA8L2gxPlxuICAgICAgICA8YSBpZD1cImxlYXZlLWJ0blwiIGNsYXNzTmFtZT1cImJ0blwiPlxuICAgICAgICAgIExlYXZlIFJvb21cbiAgICAgICAgPC9hPlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJjaGF0LW1haW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LXNpZGViYXJcIj5cbiAgICAgICAgICA8aDM+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY29tbWVudHNcIj48L2k+IFJvb20gTmFtZTpcbiAgICAgICAgICA8L2gzPlxuICAgICAgICAgIDxoMiBpZD1cInJvb21OYW1lXCI+XG4gICAgICAgICAgICAgIFdoeSBORlQ/XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8aDM+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlcnNcIj48L2k+IFVzZXJzXG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgICA8dWwgaWQ9XCJ1c2Vyc1wiPjwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtbWVzc2FnZXNcIj5cbiAgICAgICAgICBcbiAgICAgICAgICB7bGlzdC5maWx0ZXIoZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2Uucm9vbSA9PSAxO1xuICAgICAgICAgICAgfSkubWFwKChwKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1ldGFcIj57cC51c2VybmFtZX08L3A+XG4gICAgICAgICAgICAgICAgPHA+e3AucG9zdH08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LWZvcm0tY29udGFpbmVyXCI+XG4gICAgICAgIDxmb3JtIGlkPVwiY2hhdC1mb3JtXCIgb25TdWJtaXQ9e2hhbmRsZXBvc3R9PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9XCJtc2dcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBNZXNzYWdlXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvbj5zZW5kIGNvbW1lbnQ8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICB7LyogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX0gLz4gKi99XG4gICAgICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuXG5cblxuXG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImlvIiwidXNlUm91dGVyIiwic29ja2V0IiwidHJhbnNwb3J0cyIsIkNoYXRSb29tTkZUIiwibmFtZSIsInNldE5hbWUiLCJyb29tIiwic2V0Um9vbSIsImxpc3QiLCJzZXRMaXN0IiwicXVlcnkiLCJ1c2VybmFtZSIsImhhbmRsZXBvc3QiLCJlIiwicHJldmVudERlZmF1bHQiLCJlbWl0IiwicG9zdCIsIm9uIiwiZGF0YSIsImRpdiIsImNsYXNzTmFtZSIsImhlYWRlciIsImgxIiwiaSIsImEiLCJpZCIsIm1haW4iLCJoMyIsImgyIiwidWwiLCJmaWx0ZXIiLCJtZXNzYWdlIiwibWFwIiwicCIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/chatRoomNFT.js\n");

/***/ })

});