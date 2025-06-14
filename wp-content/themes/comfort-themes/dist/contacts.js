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

/***/ "./js/contactsPage/map/map.js":
/*!************************************!*\
  !*** ./js/contactsPage/map/map.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   yandexMap: () => (/* binding */ yandexMap)\n/* harmony export */ });\nconst yandexMap = () => {\n\n  ymaps.ready(init);\n\n  function init() {\n    // Создание карты.\n    var myMap = new ymaps.Map(\"map\", {\n      center: [48.418, 135.136118],\n      zoom: 14\n    });\n\n    const BalloonContentLayout = ymaps.templateLayoutFactory.createClass(\n      \"<div class='balloonContainer'>\" +\n      \"<p class='balloonText'>Хабаровск,<br>\\n\" +\n      \"ул. Перекопская, 2в ст7</p>\" +\n      \"</div>\", {\n        // Определяем метод getShape, который\n        // будет возвращать размеры макета хинта.\n        // Это необходимо для того, чтобы хинт автоматически\n        // сдвигал позицию при выходе за пределы карты\n      }\n    );\n\n    var myPlacemark = new ymaps.Placemark([48.417540, 135.127118], {}, {\n      balloonLayout: BalloonContentLayout,\n      hideIconOnBalloonOpen: false,\n      balloonOffset: [20, -80]\n    });\n    myMap.controls.remove('searchControl')\n    myMap.controls.remove('rulerControl')\n    myMap.controls.remove('trafficControl')\n    myMap.controls.remove('typeSelector')\n    myMap.controls.remove('fullscreenControl')\n    myMap.controls.remove('zoomControl')\n    // myMap.behaviors.disable(['scrollZoom'])\n    myMap.controls.remove('typeSelector')\n    myMap.geoObjects.add(myPlacemark);\n    // Показываем хинт на карте (без привязки к геообъекту).\n    const el = document.getElementsByClassName(\"ymaps-2-1-79-copyrights-pane\")[0];\n    el.remove()\n    myPlacemark.balloon.open([48.817540, 135.127118]);\n  }\n}\n\n\n//# sourceURL=webpack://comfort-themes/./js/contactsPage/map/map.js?");

/***/ }),

/***/ "./js/entryScripts/contacts.js":
/*!*************************************!*\
  !*** ./js/entryScripts/contacts.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shared_modal_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/modal/modal */ \"./js/shared/modal/modal.js\");\n/* harmony import */ var _contactsPage_map_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contactsPage/map/map */ \"./js/contactsPage/map/map.js\");\n/* harmony import */ var _shared_floatingButtons_floatingButtons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/floatingButtons/floatingButtons */ \"./js/shared/floatingButtons/floatingButtons.js\");\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  (0,_shared_modal_modal__WEBPACK_IMPORTED_MODULE_0__.modal)()\n  ;(0,_contactsPage_map_map__WEBPACK_IMPORTED_MODULE_1__.yandexMap)()\n  ;(0,_shared_floatingButtons_floatingButtons__WEBPACK_IMPORTED_MODULE_2__.floatingButtons)()\n})\n\n\n//# sourceURL=webpack://comfort-themes/./js/entryScripts/contacts.js?");

/***/ }),

/***/ "./js/shared/floatingButtons/floatingButtons.js":
/*!******************************************************!*\
  !*** ./js/shared/floatingButtons/floatingButtons.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   floatingButtons: () => (/* binding */ floatingButtons)\n/* harmony export */ });\nconst floatingButtons = () => {\r\n    const contactButton = document.getElementsByClassName(\"hiddenButtons__contactButtonContainer__button\")[0]\r\n    const scrollButton = document.getElementsByClassName(\"hiddenButtons__scrollToTopButton\")[0]\r\n\r\n    const controller = new ScrollMagic.Controller();\r\n\r\n    var scene = new ScrollMagic.Scene({\r\n        triggerElement: \"#trigger\"\r\n    }).setClassToggle(\".hiddenButtons\", \"_visible\")\r\n    controller.addScene(scene);\r\n\r\n    //contact button event\r\n    contactButton.addEventListener(\"click\", () => {\r\n        document.getElementsByClassName(\"hiddenButtons__contactButtonContainer\")[0].classList.toggle(\"_active\")\r\n        document.getElementsByClassName(\"hiddenButtons__contactButtonContainer__panel\")[0].classList.toggle(\"_active\")\r\n        contactButton.classList.toggle(\"_active\")\r\n    })\r\n    scrollButton.addEventListener(\"click\", () => {\r\n        window.scrollTo({top: 0, behavior: 'smooth'})\r\n    })\r\n}\n\n//# sourceURL=webpack://comfort-themes/./js/shared/floatingButtons/floatingButtons.js?");

/***/ }),

/***/ "./js/shared/modal/modal.js":
/*!**********************************!*\
  !*** ./js/shared/modal/modal.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   modal: () => (/* binding */ modal)\n/* harmony export */ });\nconst modal = () => {\n  const onBurgerButtonClick = async () => {\n    const burgerModal = document.getElementsByClassName(\"burgerMenuModal\")[0]\n    const panel = document.getElementsByClassName(\"burgerMenuModal__panel\")[0]\n    const burgerMenuButton = document.getElementsByClassName(\"modalButton__icon\")[0]\n    burgerModal.classList.toggle(\"_active\")\n    panel.classList.toggle(\"_active\")\n    burgerMenuButton.classList.toggle(\"_active\")\n  }\n\n  const burgerMenuButton = document.getElementsByClassName(\"modalButton\")[0]\n  const burgerMenuModal = document.getElementsByClassName(\"burgerMenuModal\")[0]\n  burgerMenuButton.addEventListener(\"click\", onBurgerButtonClick)\n  burgerMenuModal.addEventListener(\"click\", (event) => {\n    if (event.target !== burgerMenuModal) {return}\n    onBurgerButtonClick()\n  })\n}\n\n\n//# sourceURL=webpack://comfort-themes/./js/shared/modal/modal.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/entryScripts/contacts.js");
/******/ 	
/******/ })()
;