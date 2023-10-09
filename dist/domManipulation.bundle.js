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

/***/ "./src/JS/domManipulation.js":
/*!***********************************!*\
  !*** ./src/JS/domManipulation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _formatCityName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatCityName.js */ \"./src/JS/formatCityName.js\");\n/* harmony import */ var _fetch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch.js */ \"./src/JS/fetch.js\");\n/* harmony import */ var _loading_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loading.js */ \"./src/JS/loading.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.js */ \"./src/JS/index.js\");\n// domManipulation.js\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet city = \"\";\r\nconst summary = document.querySelector(\".summary\");\r\nconst category = document.querySelector(\".category\");\r\nconst input = document.querySelector(\"input\");\r\nconst score = document.querySelector(\".score\");\r\nconst nameScore = document.querySelector(\".nameScore\");\r\nconst btn = document.querySelector(\"button\");\r\nconst main = document.querySelector(\"main\");\r\n\r\nconst clearCard = () => {\r\n  category.innerHTML = \"\";\r\n  nameScore.innerHTML = \"\";\r\n  score.innerHTML = \"\";\r\n  score.classList.remove(\"pulse\");\r\n};\r\n\r\nconst displayCityInfo = (dataScore) => {\r\n  summary.innerHTML = `<h2><p>${dataScore.summary}</p></h2>`;\r\n  category.innerHTML = \"\";\r\n  nameScore.innerHTML = \"CITY SCORE\";\r\n  score.innerHTML = dataScore.teleport_city_score.toFixed(2);\r\n  score.classList.add(\"pulse\");\r\n\r\n  dataScore.categories.forEach((x) => {\r\n    category.insertAdjacentHTML(\r\n      \"afterbegin\",\r\n      `<h3><span class=\"name\">${x.name}</span> <span class=\"scores\">${x.score_out_of_10.toFixed(1)}</span></h3>`\r\n    );\r\n\r\n    const containerAllElement = document.createElement(\"div\");\r\n    containerAllElement.classList.add(\"containerAllElement\");\r\n    const divScore = document.createElement(\"div\");\r\n    divScore.classList.add(\"divScore\");\r\n    divScore.appendChild(nameScore);\r\n    divScore.appendChild(score);\r\n    const descriptionElement = document.createElement(\"div\");\r\n    descriptionElement.classList.add(\"descriptionElement\");\r\n    descriptionElement.appendChild(summary);\r\n    descriptionElement.appendChild(category);\r\n\r\n    containerAllElement.appendChild(descriptionElement);\r\n    containerAllElement.appendChild(divScore);\r\n\r\n    main.appendChild(containerAllElement);\r\n  });\r\n};\r\n\r\nconst handleInputAndSubmit = async () => {\r\n  city = (0,_formatCityName_js__WEBPACK_IMPORTED_MODULE_0__.formatCityName)(input.value);\r\n\r\n  if (!city) {\r\n    (0,_fetch_js__WEBPACK_IMPORTED_MODULE_1__.handleDataError)(summary, \"<h3>SCRIVI UNA CITTA'</h3\");\r\n    clearCard();\r\n    return;\r\n  }\r\n\r\n  (0,_loading_js__WEBPACK_IMPORTED_MODULE_2__.showLoadingIndicator)();\r\n\r\n  const dataScore = await (0,_fetch_js__WEBPACK_IMPORTED_MODULE_1__.fetchData)(city);\r\n\r\n  (0,_loading_js__WEBPACK_IMPORTED_MODULE_2__.hideLoadingIndicator)();\r\n\r\n  if (dataScore.error) {\r\n    (0,_fetch_js__WEBPACK_IMPORTED_MODULE_1__.handleDataError)(summary, dataScore.error);\r\n    clearCard();\r\n  } else {\r\n    displayCityInfo(dataScore);\r\n  }\r\n};\r\n\r\n\r\nbtn.addEventListener(\"click\", handleInputAndSubmit);\r\n\r\ninput.addEventListener(\"keydown\", function (event) {\r\n  if (event.key === \"Enter\") {\r\n    event.preventDefault();\r\n    handleInputAndSubmit();\r\n  }\r\n});\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n\r\n\r\n\n\n//# sourceURL=webpack://app-per-stile-di-vita-e-viaggi/./src/JS/domManipulation.js?");

/***/ }),

/***/ "./src/JS/fetch.js":
/*!*************************!*\
  !*** ./src/JS/fetch.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchData: () => (/* binding */ fetchData),\n/* harmony export */   handleDataError: () => (/* binding */ handleDataError)\n/* harmony export */ });\n// fetch.js\r\n\r\n// Funzione per gestire la connessione con il backend e ottenere i dati\r\nasync function fetchData(city) {\r\n    try {\r\n      const getScore = await fetch(\r\n        `https://api.teleport.org/api/urban_areas/slug:${city}/scores/`\r\n      );\r\n  \r\n      if (!getScore.ok) {\r\n        return { error: \"<h3>Città non trovata. Controllare se c'è un errore di battitura.Ricordate che dovete usare i nomi delle città in inglese. Se nessuno di questi problemi è presente, forse la città non è presente nel nostro database.</h3>\" };\r\n      }\r\n  \r\n      const dataScore = await getScore.json();\r\n      return dataScore;\r\n    } catch (error) {\r\n      return { error: error.message };\r\n    }\r\n  }\r\n  \r\n  // Funzione per gestire gli errori di dati\r\n  function handleDataError(summary, errorMessage) {\r\n    summary.innerHTML = `<p>${errorMessage}</p>`;\r\n  }\r\n  \r\n  \r\n  \r\n  \r\n  \n\n//# sourceURL=webpack://app-per-stile-di-vita-e-viaggi/./src/JS/fetch.js?");

/***/ }),

/***/ "./src/JS/formatCityName.js":
/*!**********************************!*\
  !*** ./src/JS/formatCityName.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formatCityName: () => (/* binding */ formatCityName)\n/* harmony export */ });\n// formatCityName.js\r\n\r\n// *****funzione per formattare le parole prima della ricerca*****\r\nfunction formatCityName(nome) {\r\n  nome = nome.toLowerCase();\r\n  nome = nome.trim();\r\n  nome = nome.replaceAll(\" \", \"-\");\r\n  return nome;\r\n}\r\n\n\n//# sourceURL=webpack://app-per-stile-di-vita-e-viaggi/./src/JS/formatCityName.js?");

/***/ }),

/***/ "./src/JS/index.js":
/*!*************************!*\
  !*** ./src/JS/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   carouselInner: () => (/* binding */ carouselInner),\n/* harmony export */   currentImageIndex: () => (/* binding */ currentImageIndex),\n/* harmony export */   images: () => (/* binding */ images),\n/* harmony export */   showNextImage: () => (/* binding */ showNextImage)\n/* harmony export */ });\n//index.js\r\n// Aggiungo qui gli URL delle  immagini\r\nconst carouselInner = document.querySelector('.carousel-inner');\r\nconst images = [\r\n    './src/Img/citta1.jpg',\r\n    './src/Img/citta2.jpg',\r\n    './src/Img/citta3.jpg',\r\n    './src/Img/citta4.jpg',\r\n    './src/Img/citta5.jpg',\r\n    './src/Img/citta6.jpg',\r\n    './src/Img/citta7.jpg',\r\n    './src/Img/citta8.jpg',\r\n    './src/Img/citta9.jpg',\r\n    './src/Img/citta10.jpg',\r\n    './src/Img/citta11.jpg'\r\n];\r\nlet currentImageIndex = 0;\r\n\r\nfunction showNextImage() {\r\n    // Rimuove l'immagine attuale dal carosello\r\n    carouselInner.innerHTML = '';\r\n\r\n    // Creo un nuovo elemento img e lo aggiungo al carosello\r\n    const image = document.createElement('img');\r\n    image.src = images[currentImageIndex];\r\n    image.alt = 'Città';\r\n\r\n    carouselInner.appendChild(image);\r\n\r\n    currentImageIndex = (currentImageIndex + 1) % images.length;\r\n}\r\n\r\n// Eseguo la funzione showNextImage ogni 5 secondi\r\nsetInterval(showNextImage, 3500);\r\n\r\n// Eseguo la funzione showNextImage una volta all'inizio\r\nshowNextImage();\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://app-per-stile-di-vita-e-viaggi/./src/JS/index.js?");

/***/ }),

/***/ "./src/JS/loading.js":
/*!***************************!*\
  !*** ./src/JS/loading.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   hideLoadingIndicator: () => (/* binding */ hideLoadingIndicator),\n/* harmony export */   showLoadingIndicator: () => (/* binding */ showLoadingIndicator)\n/* harmony export */ });\n// loading.js\r\n\r\n// All'inizio, nascondi l'indicatore di caricamento\r\nconst loadingIndicator = document.getElementById(\"loading\");\r\n\r\nfunction showLoadingIndicator() {\r\n  loadingIndicator.style.display = \"block\";\r\n}\r\n\r\nfunction hideLoadingIndicator() {\r\n  loadingIndicator.style.display = \"none\";\r\n}\r\n\n\n//# sourceURL=webpack://app-per-stile-di-vita-e-viaggi/./src/JS/loading.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/JS/domManipulation.js");
/******/ 	
/******/ })()
;