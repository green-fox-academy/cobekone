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

eval("const kids = [\r\n    { petName: \"Wattled crane\", owner: \"Bryant\" },\r\n    { petName: \"Devil, tasmanian\", owner: \"Alejandro\" },\r\n    { petName: \"Mynah, common\", owner: \"Nelie\" },\r\n    { petName: \"Dolphin, common\", owner: \"Mariele\" },\r\n    { petName: \"Gray duiker\", owner: \"Maddalena\" },\r\n    { petName: \"Crab (unidentified)\", owner: \"Lucine\" },\r\n    { petName: \"Ant (unidentified)\", owner: \"Lorianna\" },\r\n    { petName: \"Bison, american\", owner: \"Tommie\" },\r\n    { petName: \"Yellow mongoose\", owner: \"Vivyan\" },\r\n    { petName: \"Carpet snake\", owner: \"Veda\" },\r\n    { petName: \"Lesser mouse lemur\", owner: \"Isidor\" },\r\n];\r\nfor (let i = 0; i < kids.length; i++) {\r\n    let article = document.createElement(\"article\");\r\n    let h3 = document.createElement(\"h3\");\r\n    let p = document.createElement(\"p\");\r\n    h3.innerHTML = kids[i].owner;\r\n    p.innerHTML = kids[i].petName;\r\n    article.appendChild(h3);\r\n    article.appendChild(p);\r\n    document.querySelector(\"main\").appendChild(article);\r\n}\r\n\n\n//# sourceURL=webpack://-y/./src/index.ts?");

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