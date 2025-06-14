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

/***/ "./js/entryScripts/faq.js":
/*!********************************!*\
  !*** ./js/entryScripts/faq.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shared_modal_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/modal/modal */ \"./js/shared/modal/modal.js\");\n/* harmony import */ var _faqPage_accordion_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../faqPage/accordion/accordion */ \"./js/faqPage/accordion/accordion.js\");\n/* harmony import */ var _shared_floatingButtons_floatingButtons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/floatingButtons/floatingButtons */ \"./js/shared/floatingButtons/floatingButtons.js\");\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  (0,_shared_modal_modal__WEBPACK_IMPORTED_MODULE_0__.modal)()\n  ;(0,_faqPage_accordion_accordion__WEBPACK_IMPORTED_MODULE_1__.accordion)()\n  ;(0,_shared_floatingButtons_floatingButtons__WEBPACK_IMPORTED_MODULE_2__.floatingButtons)()\n})\n\n\n//# sourceURL=webpack://comfort-themes/./js/entryScripts/faq.js?");

/***/ }),

/***/ "./js/faqPage/accordion/accordion.js":
/*!*******************************************!*\
  !*** ./js/faqPage/accordion/accordion.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   accordion: () => (/* binding */ accordion)\n/* harmony export */ });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var accordionjs_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! accordionjs/accordion */ \"./node_modules/accordionjs/accordion.js\");\n/* harmony import */ var accordionjs_accordion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(accordionjs_accordion__WEBPACK_IMPORTED_MODULE_1__);\n// import 'accordionjs/accordion.css'\n\n\n\nconst accordion = () => {\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#accordion').accordionjs({\n    // Allow self close.(data-close-able)\n    closeAble   : true,\n\n    // Close other sections.(data-close-other)\n    closeOther  : true,\n\n    // Animation Speed.(data-slide-speed)\n    slideSpeed  : 150,\n\n    // The section open on first init. A number from 1 to X or false.(data-active-index)\n    activeIndex : 1,\n\n    // Callback when a section is open\n    openSection: function( section ){},\n\n    // Callback before a section is open\n    beforeOpenSection: function( section ){},\n  });\n}\n\n\n//# sourceURL=webpack://comfort-themes/./js/faqPage/accordion/accordion.js?");

/***/ }),

/***/ "./js/shared/floatingButtons/floatingButtons.js":
/*!******************************************************!*\
  !*** ./js/shared/floatingButtons/floatingButtons.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   floatingButtons: () => (/* binding */ floatingButtons)\n/* harmony export */ });\nconst floatingButtons = () => {\r\n    const contactButton = document.getElementsByClassName(\"hiddenButtons__contactButtonContainer__button\")[0]\r\n    const scrollButton = document.getElementsByClassName(\"hiddenButtons__scrollToTopButton\")[0]\r\n\r\n    const controller = new ScrollMagic.Controller();\r\n\r\n    var scene = new ScrollMagic.Scene({\r\n        triggerElement: \"#trigger\"\r\n    }).setClassToggle(\".hiddenButtons\", \"_visible\")\r\n    controller.addScene(scene);\r\n\r\n    //contact button event\r\n    contactButton.addEventListener(\"click\", () => {\r\n        document.getElementsByClassName(\"hiddenButtons__contactButtonContainer\")[0].classList.toggle(\"_active\")\r\n        document.getElementsByClassName(\"hiddenButtons__contactButtonContainer__panel\")[0].classList.toggle(\"_active\")\r\n        contactButton.classList.toggle(\"_active\")\r\n    })\r\n    scrollButton.addEventListener(\"click\", () => {\r\n        window.scrollTo({top: 0, behavior: 'smooth'})\r\n    })\r\n}\n\n//# sourceURL=webpack://comfort-themes/./js/shared/floatingButtons/floatingButtons.js?");

/***/ }),

/***/ "./js/shared/modal/modal.js":
/*!**********************************!*\
  !*** ./js/shared/modal/modal.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   modal: () => (/* binding */ modal)\n/* harmony export */ });\nconst modal = () => {\n  const onBurgerButtonClick = async () => {\n    const burgerModal = document.getElementsByClassName(\"burgerMenuModal\")[0]\n    const panel = document.getElementsByClassName(\"burgerMenuModal__panel\")[0]\n    const burgerMenuButton = document.getElementsByClassName(\"modalButton__icon\")[0]\n    burgerModal.classList.toggle(\"_active\")\n    panel.classList.toggle(\"_active\")\n    burgerMenuButton.classList.toggle(\"_active\")\n  }\n\n  const burgerMenuButton = document.getElementsByClassName(\"modalButton\")[0]\n  const burgerMenuModal = document.getElementsByClassName(\"burgerMenuModal\")[0]\n  burgerMenuButton.addEventListener(\"click\", onBurgerButtonClick)\n  burgerMenuModal.addEventListener(\"click\", (event) => {\n    if (event.target !== burgerMenuModal) {return}\n    onBurgerButtonClick()\n  })\n}\n\n\n//# sourceURL=webpack://comfort-themes/./js/shared/modal/modal.js?");

/***/ }),

/***/ "./node_modules/accordionjs/accordion.js":
/*!***********************************************!*\
  !*** ./node_modules/accordionjs/accordion.js ***!
  \***********************************************/
/***/ (() => {

eval("/**\r\n * Plugin Name : Accordion.JS\r\n * Version     : 2.1.1\r\n * Author      : ZeroWP Team\r\n * Author URL  : http://zerowp.com/\r\n * Plugin URL  : http://accordionjs.zerowp.com/\r\n * License     : MIT\r\n */\r\n;(function ( $ ) {\r\n\r\n\t\"use strict\";\r\n\r\n\t$.fn.accordionjs = function( options ) {\r\n\r\n\t\t// Select all accordions that match a CSS selector\r\n\t\tif (this.length > 1){\r\n\t\t\tthis.each(function() {\r\n\t\t\t\t$(this).accordionjs(options);\r\n\t\t\t});\r\n\t\t\treturn this;\r\n\t\t}\r\n\r\n\t\t// Current accordion instance\r\n\t\tvar accordion = this;\r\n\r\n\t\t// Setup utility functions\r\n\t\tvar util = {\r\n\r\n\t\t\t/**\r\n\t\t\t * Is integer\r\n\t\t\t *\r\n\t\t\t * Check if a value is a valid integer number\r\n\t\t\t *\r\n\t\t\t * @param {number} value\r\n\t\t\t * @return {bool}\r\n\t\t\t */\r\n\t\t\tisInteger:  function(value) {\r\n\t\t\t\treturn typeof value === 'number' &&\r\n\t\t\t\t\tisFinite(value) &&\r\n\t\t\t\t\tMath.floor(value) === value;\r\n\t\t\t},\r\n\r\n\t\t\t//------------------------------------//--------------------------------------//\r\n\r\n\t\t\t/**\r\n\t\t\t * Is array\r\n\t\t\t *\r\n\t\t\t * Check if a value is a valid array.\r\n\t\t\t *\r\n\t\t\t * @param {Array} arg\r\n\t\t\t * @return {bool}\r\n\t\t\t */\r\n\t\t\tisArray: function(arg) {\r\n\t\t\t\treturn Object.prototype.toString.call(arg) === '[object Array]';\r\n\t\t\t},\r\n\r\n\t\t\t//------------------------------------//--------------------------------------//\r\n\r\n\t\t\t/**\r\n\t\t\t * Is object\r\n\t\t\t *\r\n\t\t\t * Check if a value is a valid object.\r\n\t\t\t *\r\n\t\t\t * @param {Object} arg\r\n\t\t\t * @return {bool}\r\n\t\t\t */\r\n\t\t\tisObject: function isObject(arg) {\r\n\t\t\t\treturn Object.prototype.toString.call(arg) === '[object Object]';\r\n\t\t\t},\r\n\r\n\t\t\t//------------------------------------//--------------------------------------//\r\n\r\n\t\t\t/**\r\n\t\t\t * Sections is open\r\n\t\t\t *\r\n\t\t\t * Check if a section from current accordion is open.\r\n\t\t\t *\r\n\t\t\t * @param {Object}(jQuery) section\r\n\t\t\t * @return {bool}\r\n\t\t\t */\r\n\t\t\tsectionIsOpen: function( section ){\r\n\t\t\t\treturn section.hasClass( 'acc_active' );\r\n\t\t\t},\r\n\r\n\r\n\t\t\t//------------------------------------//--------------------------------------//\r\n\r\n\t\t\t/**\r\n\t\t\t * Get hash\r\n\t\t\t *\r\n\t\t\t * Get hash substring without # or false if the window does not have one.\r\n\t\t\t *\r\n\t\t\t * @return {string|bool(false)}\r\n\t\t\t */\r\n\t\t\tgetHash: function(){\r\n\t\t\t\tif(window.location.hash) {\r\n\t\t\t\t\treturn window.location.hash.substring(1);\r\n\t\t\t\t}\r\n\r\n\t\t\t\treturn false;\r\n\t\t\t},\r\n\t\t};\r\n\r\n\t\t/* Setup options\r\n\t\t---------------------*/\r\n\t\tvar settings = $.extend({\r\n\t\t\t// Allow self close.\r\n\t\t\tcloseAble   : false,\r\n\r\n\t\t\t// Close other sections.\r\n\t\t\tcloseOther  : true,\r\n\r\n\t\t\t// Animation Speed.\r\n\t\t\tslideSpeed  : 150,\r\n\r\n\t\t\t// The section open on first init. A number from 1 to X or false.\r\n\t\t\tactiveIndex : 1,\r\n\r\n\t\t\t// Callback when a section is open\r\n\t\t\topenSection: false, // function( section ){}\r\n\r\n\t\t\t// Callback before a section is open\r\n\t\t\tbeforeOpenSection: false, // function( section ){}\r\n\t\t}, options );\r\n\r\n\t\t// Assign to accordion options data-* attributes if they exists\r\n\t\t$.each(settings, function( option ) {\r\n\t\t\tvar data_attr = option.replace(/([A-Z])/g, '-$1').toLowerCase().toString(), //`optionsName` becomes `option-name`\r\n\t\t\tnew_val       =  accordion.data( data_attr );\r\n\r\n\t\t\tif( new_val || false === new_val ){\r\n\t\t\t\tsettings[ option ] = new_val;\r\n\t\t\t}\r\n\t\t});\r\n\r\n\t\t/*\r\n\t\tIf the activeIndex is false then all sections are closed by default.\r\n\t\tIf the closeOther is false then other section will not be closed when\r\n\t\tthis is opened. That means, in both cases, sections should be able\r\n\t\tto be closed independently.\r\n\t\t*/\r\n\t\tif( settings.activeIndex === false || settings.closeOther === false ){\r\n\t\t\tsettings.closeAble = true;\r\n\t\t}\r\n\r\n\t\t//------------------------------------//--------------------------------------//\r\n\r\n\t\t/**\r\n\t\t * \"Constructor\"\r\n\t\t *\r\n\t\t * @return void\r\n\t\t */\r\n\t\tvar init = function() {\r\n\t\t\taccordion.create();\r\n\t\t\taccordion.openOnClick();\r\n\r\n\t\t\t$(window).on( 'load', function(){\r\n\t\t\t\taccordion.openOnHash();\r\n\t\t\t});\r\n\r\n\t\t\t$(window).on( 'hashchange', function(){\r\n\t\t\t\taccordion.openOnHash();\r\n\t\t\t});\r\n\t\t};\r\n\r\n\t\t//------------------------------------//--------------------------------------//\r\n\r\n\t\t/**\r\n\t\t * Open section\r\n\t\t *\r\n\t\t * Open a single section.\r\n\t\t *\r\n\t\t * @param {Object}(jQuery) section The section to open\r\n\t\t * @param {number} speed\r\n\t\t * @return void\r\n\t\t */\r\n\t\tthis.openSection = function(section, speed){\r\n\t\t\t// Event before a section is opened\r\n\t\t\t$(document).trigger('accjs_before_open_section', [\r\n\t\t\t\tsection,\r\n\t\t\t]);\r\n\r\n\t\t\t// Callback before a section is opened\r\n\t\t\tif( typeof settings.beforeOpenSection === \"function\" ){\r\n\t\t\t\tsettings.beforeOpenSection.call(this, section);\r\n\t\t\t}\r\n\r\n\t\t\t// Setup the collapse speed\r\n\t\t\tspeed = ( speed >= 0 ) ? speed : settings.slideSpeed;\r\n\r\n\t\t\t// Get the section content\r\n\t\t\tvar section_content = section.children().eq(1); // .acc_content\r\n\r\n\t\t\t// Open the section\r\n\t\t\tsection_content.slideDown( speed, function(){\r\n\t\t\t\t// Event when a section is opened\r\n\t\t\t\t$(document).trigger('accjs_open_section', [\r\n\t\t\t\t\tsection,\r\n\t\t\t\t]);\r\n\r\n\t\t\t\t// Callback when a section is opened\r\n\t\t\t\tif( typeof settings.openSection === \"function\" ){\r\n\t\t\t\t\tsettings.openSection.call(this, section);\r\n\t\t\t\t}\r\n\t\t\t} );\r\n\r\n\t\t\t// Make active\r\n\t\t\tsection.addClass('acc_active');\r\n\t\t};\r\n\r\n\t\t//------------------------------------//--------------------------------------//\r\n\r\n\t\t/**\r\n\t\t * Close section\r\n\t\t *\r\n\t\t * Close a single section.\r\n\t\t *\r\n\t\t * @param {Object}(jQuery) section The section to close\r\n\t\t * @param {number} speed\r\n\t\t * @return void\r\n\t\t */\r\n\t\tthis.closeSection = function(section, speed){\r\n\t\t\t// Event before a section is closed\r\n\t\t\t$(document).trigger('accjs_before_close_section', [\r\n\t\t\t\tsection,\r\n\t\t\t]);\r\n\r\n\t\t\t// Callback before a section is closed\r\n\t\t\tif( typeof settings.beforeCloseSection === \"function\" ){\r\n\t\t\t\tsettings.beforeCloseSection.call(this, section);\r\n\t\t\t}\r\n\r\n\t\t\t// Setup the collapse speed\r\n\t\t\tspeed = ( speed >= 0 ) ? speed : settings.slideSpeed;\r\n\r\n\t\t\t// Get the section content\r\n\t\t\tvar section_content = section.children().eq(1); // .acc_content\r\n\r\n\t\t\t// Open the section\r\n\t\t\tsection_content.slideUp( speed, function(){\r\n\t\t\t\t// Event when a section is closed\r\n\t\t\t\t$(document).trigger('accjs_close_section', [\r\n\t\t\t\t\tsection,\r\n\t\t\t\t]);\r\n\r\n\t\t\t\t// Callback when a section is closed\r\n\t\t\t\tif( typeof settings.closeSection === \"function\" ){\r\n\t\t\t\t\tsettings.closeSection.call(this, section);\r\n\t\t\t\t}\r\n\r\n\t\t\t} );\r\n\r\n\t\t\t// Make inactive\r\n\t\t\tsection.removeClass('acc_active');\r\n\r\n\t\t};\r\n\r\n\t\t//------------------------------------//--------------------------------------//\r\n\r\n\t\t/**\r\n\t\t * Close other sections except this one\r\n\t\t *\r\n\t\t * @param {Object}(jQuery) section The section to exclude\r\n\t\t * @param {number} speed\r\n\t\t * @return void\r\n\t\t */\r\n\t\tthis.closeOtherSections = function(section, speed){\r\n\t\t\tvar this_acc = section.closest('.accordionjs').children();\r\n\t\t\t$(this_acc).each(function() {\r\n\t\t\t\taccordion.closeSection( $(this).not(section), speed );\r\n\t\t\t});\r\n\t\t};\r\n\r\n\t\t//------------------------------------//--------------------------------------//\r\n\r\n\t\t/**\r\n\t\t * Create the accordion\r\n\t\t *\r\n\t\t * Create the accordion structure. Add the necessary CSS classes and other stuff.\r\n\t\t *\r\n\t\t * @return void\r\n\t\t */\r\n\t\tthis.create = function() {\r\n\r\n\t\t\t//Add Main CSS Class\r\n\t\t\taccordion.addClass('accordionjs');\r\n\r\n\t\t\t// Get all current accordion sections\r\n\t\t\tvar accordion_sections = accordion.children();\r\n\r\n\t\t\t//Add classes to accordion head and content for each section\r\n\t\t\t$.each( accordion_sections, function(index, elem){\r\n\t\t\t\taccordion.createSingleSection( $(elem) );\r\n\t\t\t});\r\n\r\n\t\t\t// //Active index\r\n\t\t\tif( util.isArray( settings.activeIndex ) ){\r\n\t\t\t\tvar indexes = settings.activeIndex;\r\n\t\t\t\tfor (var i = 0; i < indexes.length; i++) {\r\n\t\t\t\t\taccordion.openSection( accordion_sections.eq( indexes[i] - 1 ), 0 );\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\telse if( settings.activeIndex > 1 ){\r\n\t\t\t\taccordion.openSection( accordion_sections.eq( settings.activeIndex - 1 ), 0 );\r\n\t\t\t}\r\n\t\t\telse if( false !== settings.activeIndex ){\r\n\t\t\t\taccordion.openSection( accordion_sections.eq( 0 ), 0 );\r\n\t\t\t}\r\n\r\n\t\t};\r\n\r\n\t\t//------------------------------------//--------------------------------------//\r\n\r\n\t\t/**\r\n\t\t * Create a single section\r\n\t\t *\r\n\t\t * Create the structure of a single section by adding the necessary CSS classes.\r\n\t\t *\r\n\t\t * @param {string} section The section to create. jQuery object.\r\n\t\t * @return void\r\n\t\t */\r\n\t\tthis.createSingleSection = function( section ) {\r\n\t\t\tvar childs = section.children();\r\n\r\n\t\t\t// Create sections if they were not created already\r\n\t\t\tsection.addClass('acc_section');\r\n\r\n\t\t\t// Add the necessary CSS classes\r\n\t\t\t$(childs[0]).addClass('acc_head');\r\n\t\t\t$(childs[1]).addClass('acc_content');\r\n\r\n\t\t\t// Collapse section content.\r\n\t\t\t// Only if it does not have `.acc_active` CSS class set by default.\r\n\t\t\tif( ! section.hasClass('acc_active') ) {\r\n\t\t\t\tsection.children('.acc_content').hide();\r\n\t\t\t}\r\n\t\t};\r\n\r\n\t\t//------------------------------------//--------------------------------------//\r\n\r\n\t\t/**\r\n\t\t * Open on click\r\n\t\t *\r\n\t\t * Open a section when its header get a click.\r\n\t\t *\r\n\t\t * @return void\r\n\t\t */\r\n\t\tthis.openOnClick = function() {\r\n\r\n\t\t\taccordion.on('click', '.acc_head', function( event ){\r\n\t\t\t\tevent.stopImmediatePropagation();\r\n\r\n\t\t\t\tvar section = $(this).closest('.acc_section');\r\n\t\t\t\tif( util.sectionIsOpen( section ) ) {\r\n\r\n\t\t\t\t\t// If closeAble, then close this section but do not touch other.\r\n\t\t\t\t\tif( settings.closeAble ) {\r\n\t\t\t\t\t\taccordion.closeSection( section );\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t// If the accordion contains only one section, act like a toggle.\r\n\t\t\t\t\telse if( accordion.children().length === 1 ) {\r\n\t\t\t\t\t\taccordion.closeSection( section );\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t}\r\n\r\n\t\t\t\t// Section is closed\r\n\t\t\t\telse {\r\n\t\t\t\t\t// If closeOther, then close other sections when this is opened.\r\n\t\t\t\t\tif( settings.closeOther ) {\r\n\t\t\t\t\t\taccordion.closeOtherSections( section );\r\n\t\t\t\t\t\taccordion.openSection( section );\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t// Else open only this section and do not touch other sections.\r\n\t\t\t\t\telse {\r\n\t\t\t\t\t\taccordion.openSection( section );\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t});\r\n\r\n\t\t};\r\n\r\n\t\t//------------------------------------//--------------------------------------//\r\n\r\n\t\t/**\r\n\t\t * Open a section if a hash is present in URL and scroll to it.\r\n\t\t *\r\n\t\t * @return void\r\n\t\t */\r\n\t\tthis.openOnHash = function() {\r\n\t\t\tif( util.getHash() ) {\r\n\t\t\t\tvar section = $( '#' + util.getHash() );\r\n\t\t\t\tif( section.hasClass('acc_section') ) {\r\n\t\t\t\t\taccordion.openSection( section );\r\n\t\t\t\t\tif( settings.closeOther ) {\r\n\t\t\t\t\t\taccordion.closeOtherSections( section );\r\n\t\t\t\t\t}\r\n\t\t\t\t\t$(\"html, body\").animate({\r\n\t\t\t\t\t\tscrollTop: parseInt( section.offset().top ) - 50,\r\n\t\t\t\t\t}, 150);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t};\r\n\r\n\t\t//\"Constructor\" init\r\n\t\tinit();\r\n\t\treturn this;\r\n\r\n\t};\r\n\r\n}( jQuery ));\r\n\n\n//# sourceURL=webpack://comfort-themes/./node_modules/accordionjs/accordion.js?");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = jQuery;

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/entryScripts/faq.js");
/******/ 	
/******/ })()
;