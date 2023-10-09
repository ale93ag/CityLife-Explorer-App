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

/***/ "./src/JS/index.js":
/*!*************************!*\
  !*** ./src/JS/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   carouselInner: () => (/* binding */ carouselInner),\n/* harmony export */   currentImageIndex: () => (/* binding */ currentImageIndex),\n/* harmony export */   images: () => (/* binding */ images),\n/* harmony export */   showNextImage: () => (/* binding */ showNextImage)\n/* harmony export */ });\n//index.js\r\n// Aggiungo qui gli URL delle  immagini\r\nconst carouselInner = document.querySelector('.carousel-inner');\r\nconst images = [\r\n    './src/Img/citta1.jpg',\r\n    './src/Img/citta2.jpg',\r\n    './src/Img/citta3.jpg',\r\n    './src/Img/citta4.jpg',\r\n    './src/Img/citta5.jpg',\r\n    './src/Img/citta6.jpg',\r\n    './src/Img/citta7.jpg',\r\n    './src/Img/citta8.jpg',\r\n    './src/Img/citta9.jpg',\r\n    './src/Img/citta10.jpg',\r\n    './src/Img/citta11.jpg'\r\n];\r\nlet currentImageIndex = 0;\r\n\r\nfunction showNextImage() {\r\n    // Rimuove l'immagine attuale dal carosello\r\n    carouselInner.innerHTML = '';\r\n\r\n    // Creo un nuovo elemento img e lo aggiungo al carosello\r\n    const image = document.createElement('img');\r\n    image.src = images[currentImageIndex];\r\n    image.alt = 'Città';\r\n\r\n    carouselInner.appendChild(image);\r\n\r\n    currentImageIndex = (currentImageIndex + 1) % images.length;\r\n}\r\n\r\n// Eseguo la funzione showNextImage ogni 5 secondi\r\nsetInterval(showNextImage, 3500);\r\n\r\n// Eseguo la funzione showNextImage una volta all'inizio\r\nshowNextImage();\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://app-per-stile-di-vita-e-viaggi/./src/JS/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/JS/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;