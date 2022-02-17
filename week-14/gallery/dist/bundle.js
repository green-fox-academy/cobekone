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

/***/ "./src/image-data.ts":
/*!***************************!*\
  !*** ./src/image-data.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.imageData = void 0;\r\nexports.imageData = [\r\n    {\r\n        url: \"https://cdn.pixabay.com/photo/2016/03/27/22/22/fox-1284512_960_720.jpg\",\r\n        title: \"Fox in the woods\",\r\n        description: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique enim eu odio rhoncus, consequat ultrices eros eleifend. Maecenas tristique auctor nulla, vel finibus metus consectetur ut.\",\r\n    },\r\n    {\r\n        url: \"https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg\",\r\n        title: \"Island in the lake\",\r\n        description: \"Nulla in lectus at risus condimentum dapibus. Praesent id vestibulum leo. Maecenas ac lectus hendrerit, auctor nibh in, lacinia leo. Donec imperdiet nunc id lacus tempus, quis gravida ligula sagittis.\",\r\n    },\r\n    {\r\n        url: \"https://cdn.pixabay.com/photo/2015/11/16/16/28/bird-1045954_960_720.jpg\",\r\n        title: \"Flyin\",\r\n        description: \"Mauris scelerisque eleifend tincidunt. Quisque id laoreet est. Donec in nibh erat.\",\r\n    },\r\n    {\r\n        url: \"https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_960_720.jpg\",\r\n        title: \"Palm leaves and sun\",\r\n        description: \"Quisque in est ullamcorper, interdum nunc ac, venenatis odio. Aenean dapibus venenatis tellus eu tincidunt. Maecenas dapibus, elit at porttitor mattis, nisl eros sagittis ipsum, a dictum est lorem ac turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\",\r\n    },\r\n    {\r\n        url: \"https://cdn.pixabay.com/photo/2018/08/21/23/29/forest-3622519_960_720.jpg\",\r\n        title: \"Fog\",\r\n        description: \"Cras dignissim arcu eget placerat ultrices. Nunc diam sapien, vehicula et scelerisque eget, ultrices quis odio. Nunc ac lectus ac ipsum tincidunt faucibus eget in dolor.\",\r\n    },\r\n    {\r\n        url: \"https://cdn.pixabay.com/photo/2017/06/07/10/47/elephant-2380009_960_720.jpg\",\r\n        title: \"Helping the younger\",\r\n        description: \"Sed dictum sollicitudin lorem, tristique pharetra nisl bibendum eu. Aenean tincidunt velit quam, sed viverra lacus aliquam ac.\",\r\n    },\r\n];\r\n\n\n//# sourceURL=webpack://-y/./src/image-data.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst image_data_1 = __webpack_require__(/*! ./image-data */ \"./src/image-data.ts\");\r\nfor (let i = 0; i < image_data_1.imageData.length; i++) {\r\n    let newDiv = document.createElement(\"div\");\r\n    newDiv.className = \"small-images\";\r\n    newDiv.id = \"id\" + `${i}`;\r\n    newDiv.style.backgroundImage = `url(\"${image_data_1.imageData[i].url}\")`;\r\n    document.querySelector(\".small-image-container\").appendChild(newDiv);\r\n}\r\nlet currentlySelected = 0;\r\nlet currentlySelectedId = 0;\r\nlet currentlyHovered = 0;\r\nlet currentlyHoveredId = 0;\r\nfunction applyCurrentlySelected() {\r\n    document.querySelector(\".current-image\").style.backgroundImage = `url(\"${image_data_1.imageData[currentlySelected].url}\")`;\r\n    document.querySelector(\".title-of-image\").innerHTML = `${image_data_1.imageData[currentlySelected].title}`;\r\n    document.querySelector(\".description-of-image\").innerHTML = `${image_data_1.imageData[currentlySelected].description}`;\r\n}\r\napplyCurrentlySelected();\r\nfunction imageClicked(event) {\r\n    currentlySelected = event.target.id.split(\"id\").join(\"\");\r\n    currentlySelectedId = \"id\" + currentlySelected;\r\n    console.log(currentlySelected);\r\n    if (currentlySelected) {\r\n        applyCurrentlySelected();\r\n    }\r\n}\r\ndocument\r\n    .querySelector(\".small-image-container\")\r\n    .addEventListener(\"click\", imageClicked);\r\ndocument.querySelector(\"#go-right\").addEventListener(\"click\", goRight);\r\ndocument.querySelector(\"#go-left\").addEventListener(\"click\", goLeft);\r\nfunction goRight() {\r\n    if (currentlySelected == image_data_1.imageData.length - 1) {\r\n        return;\r\n    }\r\n    currentlySelected++;\r\n    applyCurrentlySelected();\r\n}\r\nfunction goLeft() {\r\n    if (currentlySelected == 0) {\r\n        return;\r\n    }\r\n    currentlySelected--;\r\n    applyCurrentlySelected();\r\n}\r\nfor (let i = 0; i < image_data_1.imageData.length; i++) {\r\n    document\r\n        .querySelector(`#id${i}`)\r\n        .addEventListener(\"mouseenter\", imageHovered);\r\n}\r\nfunction imageHovered(event) {\r\n    currentlyHoveredId = event.target.id;\r\n    currentlyHovered = event.target.id.split(\"id\").join(\"\");\r\n    console.log(currentlyHoveredId);\r\n    if (currentlyHoveredId) {\r\n        let leftCoord = document.querySelector(`#${currentlyHoveredId}`).offsetLeft;\r\n        console.log(leftCoord);\r\n        document.querySelector(\".hovering-title-block\").style.marginLeft = `${leftCoord}px`;\r\n        console.log(\"hoverelve van: \" + currentlyHovered);\r\n        document.querySelector(\".hovering-title-block\").style.visibility = \"visible\";\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://-y/./src/index.ts?");

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