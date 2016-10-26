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
	            bcKeys: '=',
	            bcMethod: '&',
	            bcKeys2: '=?',
	            bcMethod2: '&?',
	            bcKeys3: '=?',
	            bcMethod3: '&?'
	        },
	        link: linkFunction,
	        controller: _keybind.KeybindController,
	        controllerAs: 'vm'
	    };
	
	    return directive;
	
	    /**
	     * Link
	     */
	    function linkFunction($scope, $element, $attrs, $ctrl) {
	
	        // Trigger the ctrl logic on every keydown event
	        $element.bind('keydown', function (event) {
	            $ctrl.checkAndFire(event);
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
	        _classCallCheck(this, KeybindController);
	
	        console.log('test');
	    }
	
	    /**
	     * If the key matches a key code, fire the appropriate event
	     *
	     * @param {Object} event
	     */
	
	
	    _createClass(KeybindController, [{
	        key: 'checkAndFire',
	        value: function checkAndFire(event) {
	            var DELAY = 500;
	
	            var key = (typeof event.which === 'undefined' ? event.keyCode : event.which).toString();
	
	            if (this.bcKeys && this.bcKeys.length > 0) {
	                if (this._triggerMatchesInput(key, this.bcKeys)) {
	                    this.bcMethod()(event);
	                }
	            }
	
	            if (this.bcKeys2 && this.bcKeys2.length > 0) {
	                if (this._triggerMatchesInput(key, this.bcKeys2)) {
	                    this.bcMethod2()(event);
	                }
	            }
	
	            if (this.bcKeys3 && this.bcKeys3.length > 0) {
	                if (this._triggerMatchesInput(key, this.bcKeys3)) {
	                    this.bcMethod3()(event);
	                }
	            }
	        }
	
	        /**
	         * Determine if a key is found in an array of keys
	         *
	         * @param {String} key
	         * @param {Array} keys
	         * @return {Bool} found
	         */
	
	    }, {
	        key: '_triggerMatchesInput',
	        value: function _triggerMatchesInput(key, keys) {
	            // Check to see if the key matches one in our array
	            var correctKeypress = keys.findIndex(function (item) {
	                return key === item;
	            });
	
	            return correctKeypress >= 0 ? true : false;
	        }
	    }]);
	
	    return KeybindController;
	}();

/***/ }
/******/ ])
});
;
//# sourceMappingURL=angular-keybind.js.map