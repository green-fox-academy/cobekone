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

/***/ "./src/drag-element.ts":
/*!*****************************!*\
  !*** ./src/drag-element.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.mouseDownHandler = exports.ele = void 0;\r\nlet x = 0;\r\nlet y = 0;\r\nexports.ele = document.querySelector(\".moon\");\r\nfunction mouseDownHandler(event) {\r\n    x = event.clientX;\r\n    y = event.clientY;\r\n    document.addEventListener(\"mousemove\", mouseMoveHandler);\r\n    document.addEventListener(\"mouseup\", mouseUpHandler);\r\n}\r\nexports.mouseDownHandler = mouseDownHandler;\r\nfunction mouseMoveHandler(event) {\r\n    const dx = event.clientX - x;\r\n    const dy = event.clientY - y;\r\n    exports.ele.style.top = `${exports.ele.offsetTop + dy}px`;\r\n    exports.ele.style.left = `${exports.ele.offsetLeft + dx}px`;\r\n    x = event.clientX;\r\n    y = event.clientY;\r\n}\r\nconst mouseUpHandler = function () {\r\n    document.removeEventListener(\"mousemove\", mouseMoveHandler);\r\n    document.removeEventListener(\"mouseup\", mouseUpHandler);\r\n};\r\n\n\n//# sourceURL=webpack://-y/./src/drag-element.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst drag_element_1 = __webpack_require__(/*! ./drag-element */ \"./src/drag-element.ts\");\r\nfunction randomPercentage() {\r\n    return Math.random() * 100;\r\n}\r\nfunction randomMilisec() {\r\n    return Math.random() * 5000;\r\n}\r\nlet starCoordinates = [];\r\nfunction addStarCoord(x, y) {\r\n    starCoordinates.push([x, y]);\r\n    console.log(starCoordinates);\r\n}\r\nfunction randomFallenClass() {\r\n    let currentStars = document.querySelectorAll(\".star\");\r\n    let randomStarNumber = Math.floor(Math.random() * currentStars.length);\r\n    currentStars[randomStarNumber].classList.add(\"fallen\");\r\n}\r\nfunction fallingStarsRecursion() {\r\n    setTimeout(() => {\r\n        randomFallenClass();\r\n        if (document.querySelectorAll(\".star\").length == 0) {\r\n            return;\r\n        }\r\n        fallingStarsRecursion();\r\n    }, randomMilisec());\r\n}\r\nfallingStarsRecursion();\r\nfunction drawStar(x, y) {\r\n    let div = document.createElement(\"div\");\r\n    div.className = \"star\";\r\n    div.style.left = `${x}vw`;\r\n    div.style.top = `${y / 2}vw`;\r\n    document.querySelector(\".world\").appendChild(div);\r\n}\r\nfor (let i = 0; i < 10; i++) {\r\n    let div = document.createElement(\"div\");\r\n    div.className = \"star\";\r\n    div.style.left = `${randomPercentage()}vw`;\r\n    div.style.top = `${randomPercentage() / 2}vw`;\r\n    document.querySelector(\".world\").appendChild(div);\r\n}\r\nfunction starPlacer(event) {\r\n    let x = (event.clientX / document.querySelector(\".world\").clientWidth) * 100;\r\n    let y = (event.clientY / document.querySelector(\".world\").clientHeight) * 100;\r\n    drawStar(x, y);\r\n}\r\nlet tree1 = document.querySelector(\".tree.one\");\r\nlet tree2 = document.querySelector(\".tree.two\");\r\ndocument.querySelector(\".world\").addEventListener(\"click\", starPlacer);\r\ndocument.querySelector(\".tree.one\").addEventListener(\"click\", growTree1);\r\ndocument.querySelector(\".tree.two\").addEventListener(\"click\", growTree2);\r\nlet scale1 = 1;\r\nlet scale2 = 1;\r\nfunction growTree1() {\r\n    scale1++;\r\n    tree1.style.top = `-${scale1 * 25 + 25}px`;\r\n    document.querySelector(\".tree.one\").style.transform = `scale(${scale1},${scale1})`;\r\n    console.log(\"the tree should grow now\");\r\n}\r\nfunction growTree2() {\r\n    scale2++;\r\n    tree2.style.top = `-${scale2 * 25 + 30}px`;\r\n    document.querySelector(\".tree.two\").style.transform = `scale(${scale2},${scale2})`;\r\n    console.log(\"the tree should grow now\");\r\n}\r\ndrag_element_1.ele.addEventListener(\"mousedown\", drag_element_1.mouseDownHandler);\r\n\n\n//# sourceURL=webpack://-y/./src/index.ts?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;