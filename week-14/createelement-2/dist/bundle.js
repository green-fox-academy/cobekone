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

eval("document.querySelector(\"li\").remove();\r\nconst planetData = [\r\n    {\r\n        category: \"inhabited\",\r\n        content: \"Foxes\",\r\n        asteroid: true,\r\n    },\r\n    {\r\n        category: \"inhabited\",\r\n        content: \"Whales and Rabbits\",\r\n        asteroid: true,\r\n    },\r\n    {\r\n        category: \"uninhabited\",\r\n        content: \"Baobabs and Roses\",\r\n        asteroid: true,\r\n    },\r\n    {\r\n        category: \"inhabited\",\r\n        content: \"Giant monsters\",\r\n        asteroid: false,\r\n    },\r\n    {\r\n        category: \"inhabited\",\r\n        content: \"Sheep\",\r\n        asteroid: true,\r\n    },\r\n];\r\nfor (let i = 0; i < planetData.length; i++) {\r\n    if (planetData[i].asteroid) {\r\n        let newChild = document.createElement(\"li\");\r\n        newChild.className = planetData[i].category;\r\n        newChild.innerHTML = planetData[i].content;\r\n        document.querySelector(\"ul\").appendChild(newChild);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://-y/./src/index.ts?");

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