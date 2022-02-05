/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/button-functions.ts":
/*!*********************************!*\
  !*** ./src/button-functions.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.deleter = exports.adder = exports.stepDown = exports.stepUp = exports.toggleSelectedClass = exports.currentlySelected = void 0;\r\nconst _1 = __webpack_require__(/*! . */ \"./src/index.ts\");\r\nexports.currentlySelected = 0;\r\nfunction toggleSelectedClass() {\r\n    try {\r\n        _1.listHtmlElements[exports.currentlySelected].classList.toggle(\"selected\");\r\n    }\r\n    catch (error) { }\r\n}\r\nexports.toggleSelectedClass = toggleSelectedClass;\r\nfunction stepUp() {\r\n    if (exports.currentlySelected == 0) {\r\n        return;\r\n    }\r\n    else {\r\n        toggleSelectedClass();\r\n        exports.currentlySelected--;\r\n        toggleSelectedClass();\r\n    }\r\n}\r\nexports.stepUp = stepUp;\r\nfunction stepDown() {\r\n    if (exports.currentlySelected == _1.listHtmlElements.length - 1) {\r\n        return;\r\n    }\r\n    else {\r\n        toggleSelectedClass();\r\n        exports.currentlySelected++;\r\n        toggleSelectedClass();\r\n    }\r\n}\r\nexports.stepDown = stepDown;\r\nfunction adder() {\r\n    if (_1.listHtmlElements.length == 0) {\r\n        return;\r\n    }\r\n    let itemToAdd = _1.listHtmlElements[exports.currentlySelected];\r\n    _1.choosenList.push(itemToAdd.innerHTML);\r\n    itemToAdd.className = \"list-div\";\r\n    itemToAdd.innerHTML = `${_1.listHtmlElements[exports.currentlySelected].innerHTML}`;\r\n    document.querySelectorAll(\".small-div\")[2].appendChild(itemToAdd);\r\n    (0, _1.updateListHtmlElements)();\r\n    exports.currentlySelected = 0;\r\n    toggleSelectedClass();\r\n}\r\nexports.adder = adder;\r\nfunction deleter() {\r\n    if (_1.listHtmlElements.length == 0) {\r\n        return;\r\n    }\r\n    _1.listHtmlElements[exports.currentlySelected].remove();\r\n    (0, _1.updateListHtmlElements)();\r\n    exports.currentlySelected = 0;\r\n    toggleSelectedClass();\r\n}\r\nexports.deleter = deleter;\r\n\n\n//# sourceURL=webpack://-y/./src/button-functions.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.updateListHtmlElements = exports.listHtmlElements = exports.choosenList = void 0;\r\nconst button_functions_1 = __webpack_require__(/*! ./button-functions */ \"./src/button-functions.ts\");\r\nlet list = [\"bread\", \"milk\", \"orange\", \"tomato\"];\r\nlet buttonText = [\"Up\", \">\", \"X\", \"Down\"];\r\nexports.choosenList = [];\r\nlet newContainerDiv = document.createElement(\"div\");\r\nnewContainerDiv.className = \"container\";\r\ndocument.querySelector(\"body\").appendChild(newContainerDiv);\r\nfor (let i = 0; i < 3; i++) {\r\n    let newDiv = document.createElement(\"div\");\r\n    newDiv.className = \"small-div\";\r\n    document.querySelector(\".container\").appendChild(newDiv);\r\n}\r\nfunction listDrawer() {\r\n    for (let i = 0; i < list.length; i++) {\r\n        let newDiv = document.createElement(\"div\");\r\n        newDiv.className = \"list-div\";\r\n        newDiv.innerHTML = `${list[i]}`;\r\n        document.querySelectorAll(\".small-div\")[0].appendChild(newDiv);\r\n    }\r\n}\r\nlistDrawer();\r\nfor (let i = 0; i < 4; i++) {\r\n    let newButton = document.createElement(\"button\");\r\n    newButton.innerHTML = `${buttonText[i]}`;\r\n    document.querySelectorAll(\".small-div\")[1].appendChild(newButton);\r\n}\r\ndocument.querySelectorAll(\".small-div\")[1].style.border =\r\n    \"none\";\r\nlet buttonHtmlElements = document.querySelectorAll(\"button\");\r\nexports.listHtmlElements = document.querySelectorAll(\".small-div\")[0].querySelectorAll(\".list-div\");\r\nfunction updateListHtmlElements() {\r\n    exports.listHtmlElements = document.querySelectorAll(\".small-div\")[0].querySelectorAll(\".list-div\");\r\n}\r\nexports.updateListHtmlElements = updateListHtmlElements;\r\nbuttonHtmlElements[0].addEventListener(\"click\", button_functions_1.stepUp);\r\nbuttonHtmlElements[1].addEventListener(\"click\", button_functions_1.adder);\r\nbuttonHtmlElements[2].addEventListener(\"click\", button_functions_1.deleter);\r\nbuttonHtmlElements[3].addEventListener(\"click\", button_functions_1.stepDown);\r\n(0, button_functions_1.toggleSelectedClass)();\r\n\n\n//# sourceURL=webpack://-y/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;