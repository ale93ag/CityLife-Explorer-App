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

/***/ "./src/JS/fetch.js":
/*!*************************!*\
  !*** ./src/JS/fetch.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchData: () => (/* binding */ fetchData),\n/* harmony export */   handleDataError: () => (/* binding */ handleDataError)\n/* harmony export */ });\n// fetch.js\r\n\r\n// Funzione per gestire la connessione con il backend e ottenere i dati\r\nasync function fetchData(city) {\r\n    try {\r\n      const getScore = await fetch(\r\n        `https://api.teleport.org/api/urban_areas/slug:${city}/scores/`\r\n      );\r\n  \r\n      if (!getScore.ok) {\r\n        return { error: \"<h3>Città non trovata. Controllare se c'è un errore di battitura.Ricordate che dovete usare i nomi delle città in inglese. Se nessuno di questi problemi è presente, forse la città non è presente nel nostro database.</h3>\" };\r\n      }\r\n  \r\n      const dataScore = await getScore.json();\r\n      return dataScore;\r\n    } catch (error) {\r\n      return { error: error.message };\r\n    }\r\n  }\r\n  \r\n  // Funzione per gestire gli errori di dati\r\n  function handleDataError(summary, errorMessage) {\r\n    summary.innerHTML = `<p>${errorMessage}</p>`;\r\n  }\r\n  \r\n  \r\n  \r\n  \r\n  \n\n//# sourceURL=webpack://app-per-stile-di-vita-e-viaggi/./src/JS/fetch.js?");

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
/******/ 	__webpack_modules__["./src/JS/fetch.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;