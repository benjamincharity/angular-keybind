(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("angular-keybind", [], factory);
	else if(typeof exports === 'object')
		exports["angular-keybind"] = factory();
	else
		root["angular-keybind"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _keybind = __webpack_require__(1);
	
	angular.module('bc.AngularKeybind', []).directive('bcKeybind', _keybind.KeybindDirective);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.KeybindDirective = KeybindDirective;
	
	var _keybind = __webpack_require__(2);
	
	function KeybindDirective() {
	    'ngInject';
	
	    var directive = {
	        restrict: 'A',
	        replace: true,
	        scope: {},
	        bindToController: {
	            bcMethod1: '&',
	            bcKeys1: '@',
	            bcMethod2: '&',
	            bcKeys2: '@'
	        },
	        link: linkFunction,
	        controller: _keybind.KeybindController,
	        controllerAs: 'vm'
	    };
	
	    return directive;
	
	    /**
	     * Link
	     */
	    function linkFunction($scope, $element, $attrs, vm) {
	        $element.bind('keydown keypress', function (event) {
	            var key = typeof event.which === 'undefined' ? event.keyCode : event.which;
	            console.log('key: ', key);
	            //const correctKeypress = bcKeys1.filter((item) => {
	
	            //});
	            /*
	             *if (event.which === 13) {
	             *    $scope.$apply(() => {
	             *        $scope.$eval($attrs.myEnter);
	             *    });
	             *    event.preventDefault();
	             *}
	             */
	        });
	    }
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var KeybindController = exports.KeybindController = function () {
	    function KeybindController() {
	        'ngInject';
	
	        _classCallCheck(this, KeybindController);
	
	        this._activate();
	    }
	
	    _createClass(KeybindController, [{
	        key: '_activate',
	        value: function _activate() {}
	    }]);
	
	    return KeybindController;
	}();

/***/ }
/******/ ])
});
;
//# sourceMappingURL=angular-keybind.js.map