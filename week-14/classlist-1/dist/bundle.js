/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("let paragraphs = document.querySelectorAll(\"p\");\r\nif (paragraphs[3].innerHTML == \"dolphin\") {\r\n    document.querySelector(\".apple\").innerHTML = \"pear\";\r\n}\r\nif (paragraphs[0].className == \"apple\") {\r\n    document.querySelector(\".cat\").innerHTML = \"dog\";\r\n}\r\ndocument.querySelector(\".apple\").classList.add(\"red\");\r\ndocument.querySelector(\".balloon\").style.borderRadius = \"0%\";\r\n\n\n//# sourceURL=webpack://-y/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;