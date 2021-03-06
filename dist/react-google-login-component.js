(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["react-google-login-component"] = factory(require("react"));
	else
		root["react-google-login-component"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.GoogleLogin = undefined;

	var _GoogleLogin = __webpack_require__(8);

	var _GoogleLogin2 = _interopRequireDefault(_GoogleLogin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.GoogleLogin = _GoogleLogin2.default;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	if (true) {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var emptyFunction = __webpack_require__(2);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if (true) {
	  var printWarning = function printWarning(format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };

	  warning = function warning(condition, format) {
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }

	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }

	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }

	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}

	module.exports = warning;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	if (true) {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;

	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(11)(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = require('./factoryWithThrowingShims')();
	}


/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;


/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var baseStyle = {
	  height: '50px',
	  width: '240px',
	  border: 'none',
	  textAlign: 'center',
	  verticalAlign: 'center',
	  boxShadow: '0 2px 4px 0 rgba(0,0,0,.25)',
	  fontSize: '16px',
	  lineHeight: '48px',
	  display: 'block',
	  borderRadius: '1px',
	  transition: 'background-color .218s, border-color .218s, box-shadow .218s',
	  fontFamily: 'Roboto,arial,sans-serif',
	  cursor: 'pointer'
	};

	var darkStyle = exports.darkStyle = _extends({
	  backgroundColor: '#4285f4',
	  color: '#fff'
	}, baseStyle);

	var lightStyle = exports.lightStyle = _extends({
	  backgroundColor: '#fff',
	  color: 'rgba(0,0,0,.54)'
	}, baseStyle);

	var iconStyle = exports.iconStyle = {
	  width: '48px',
	  height: '48px',
	  textAlign: 'center',
	  verticalAlign: 'center',
	  display: 'block',
	  marginTop: '1px',
	  marginLeft: '1px',
	  float: 'left',
	  backgroundColor: '#fff',
	  borderRadius: '1px',
	  whiteSpace: 'nowrap'
	};

	var svgStyle = exports.svgStyle = {
	  width: '48px',
	  height: '48px',
	  display: 'block'
	};

	var hoverStyle = exports.hoverStyle = {
	  boxShadow: '0 0 3px 3px rgba(66,133,244,.3)',
	  transition: 'background-color .218s, border-color .218s, box-shadow .218s'

	  // export const pressedStyle = {
	  //   backgroundColor: '#3367D6'
	  // }

	};var disabledStyle = exports.disabledStyle = {
	  backgroundColor: 'rgba(37, 5, 5, .08)',
	  color: 'rgba(0, 0, 0, .40)',
	  cursor: 'not-allowed'
	};

	var disabledIconStyle = exports.disabledIconStyle = {
	  backgroundColor: 'transparent'
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactGoogleButton = __webpack_require__(14);

	var _reactGoogleButton2 = _interopRequireDefault(_reactGoogleButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var GoogleLogin = function (_React$Component) {
	  _inherits(GoogleLogin, _React$Component);

	  function GoogleLogin(props) {
	    _classCallCheck(this, GoogleLogin);

	    var _this = _possibleConstructorReturn(this, (GoogleLogin.__proto__ || Object.getPrototypeOf(GoogleLogin)).call(this, props));

	    _this.state = {
	      disabled: true
	    };
	    return _this;
	  }

	  _createClass(GoogleLogin, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      var _props = this.props,
	          socialId = _props.socialId,
	          scope = _props.scope,
	          fetchBasicProfile = _props.fetchBasicProfile;

	      (function (d, s, id, callback) {
	        var js = void 0,
	            gs = d.getElementsByTagName(s)[0];
	        if (d.getElementById(id)) {
	          _this2.setState({
	            disabled: false
	          });
	        } else {
	          js = d.createElement(s);js.id = id;
	          js.src = 'https://apis.google.com/js/platform.js';
	          gs.parentNode.insertBefore(js, gs);
	          js.onload = callback;
	        }
	      })(document, 'script', 'google-platform', function () {
	        gapi.load('auth2', function () {
	          _this2.setState({
	            disabled: false
	          });
	          if (!gapi.auth2.getAuthInstance()) {
	            gapi.auth2.init({
	              client_id: socialId,
	              fetch_basic_profile: fetchBasicProfile,
	              scope: scope
	            });
	          }
	        });
	      });
	    }
	  }, {
	    key: 'checkLoginState',
	    value: function checkLoginState(response) {
	      if (auth2.isSignedIn.get()) {
	        var profile = auth2.currentUser.get().getBasicProfile();
	      } else {
	        if (this.props.responseHandler) {
	          this.props.responseHandler({ status: response.status });
	        }
	      }
	    }
	  }, {
	    key: 'clickHandler',
	    value: function clickHandler() {
	      var _this3 = this;

	      var auth2 = gapi.auth2.getAuthInstance();
	      var options = {
	        prompt: this.props.prompt
	      };
	      auth2.signIn(options).then(function (googleUser) {
	        return _this3.props.responseHandler(googleUser);
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          socialId = _props2.socialId,
	          scope = _props2.scope,
	          fetchBasicProfile = _props2.fetchBasicProfile,
	          responseHandler = _props2.responseHandler,
	          children = _props2.children,
	          buttonText = _props2.buttonText,
	          props = _objectWithoutProperties(_props2, ['socialId', 'scope', 'fetchBasicProfile', 'responseHandler', 'children', 'buttonText']);

	      props.disabled = this.state.disabled || props.disabled;

	      return _react2.default.createElement(
	        _reactGoogleButton2.default,
	        {
	          type: this.props.buttonType || 'light',
	          onClick: this.clickHandler.bind(this)
	        },
	        children,
	        buttonText
	      );
	    }
	  }]);

	  return GoogleLogin;
	}(_react2.default.Component);

	exports.default = GoogleLogin;


	GoogleLogin.defaultProps = {
	  fetchBasicProfile: true,
	  scope: 'profile',
	  prompt: ''
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	if (true) {
	  var invariant = __webpack_require__(3);
	  var warning = __webpack_require__(4);
	  var ReactPropTypesSecret = __webpack_require__(6);
	  var loggedTypeFailures = {};
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (true) {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
	        }
	      }
	    }
	  }
	}

	module.exports = checkPropTypes;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(2);
	var invariant = __webpack_require__(3);
	var warning = __webpack_require__(4);
	var assign = __webpack_require__(9);

	var ReactPropTypesSecret = __webpack_require__(6);
	var checkPropTypes = __webpack_require__(10);

	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (true) {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          invariant(
	            false,
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	        } else if (("development") !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            warning(
	              false,
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `%s` prop on `%s`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
	              propFullName,
	              componentName
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	       true ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	       true ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        warning(
	          false,
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received %s at index %s.',
	          getPostfixForTypeWarning(checker),
	          i
	        );
	        return emptyFunction.thatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(5);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _icons = __webpack_require__(13);

	var _styles = __webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var GoogleButton = function (_PureComponent) {
	  _inherits(GoogleButton, _PureComponent);

	  function GoogleButton() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, GoogleButton);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GoogleButton.__proto__ || Object.getPrototypeOf(GoogleButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      hovered: false
	    }, _this.getStyle = function (propStyles) {
	      var baseStyle = _this.props.type === 'dark' ? _styles.darkStyle : _styles.lightStyle;
	      if (_this.state.hovered) {
	        return _extends({}, baseStyle, _styles.hoverStyle, propStyles);
	      }
	      if (_this.props.disabled) {
	        return _extends({}, baseStyle, _styles.disabledStyle, propStyles);
	      }
	      return _extends({}, baseStyle, propStyles);
	    }, _this.mouseOver = function () {
	      if (!_this.props.disabled) {
	        _this.setState({ hovered: true });
	      }
	    }, _this.mouseOut = function () {
	      if (!_this.props.disabled) {
	        _this.setState({ hovered: false });
	      }
	    }, _this.click = function (e) {
	      if (!_this.props.disabled) {
	        _this.props.onClick(e);
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(GoogleButton, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          label = _props.label,
	          style = _props.style,
	          otherProps = _objectWithoutProperties(_props, ['label', 'style']);

	      return _react2.default.createElement(
	        'div',
	        _extends({}, otherProps, {
	          onClick: this.click,
	          style: this.getStyle(style),
	          onMouseOver: this.mouseOver,
	          onMouseOut: this.mouseOut
	        }),
	        _react2.default.createElement(_icons.GoogleIcon, this.props),
	        _react2.default.createElement(
	          'span',
	          null,
	          label
	        )
	      );
	    }
	  }]);

	  return GoogleButton;
	}(_react.PureComponent);

	GoogleButton.propTypes = {
	  label: _propTypes2.default.string,
	  disabled: _propTypes2.default.bool,
	  onClick: _propTypes2.default.func,
	  type: _propTypes2.default.oneOf(['light', 'dark']),
	  style: _propTypes2.default.object
	};
	GoogleButton.defaultProps = {
	  label: 'Sign in with Google',
	  disabled: false,
	  type: 'dark',
	  onClick: function onClick() {}
	};
	exports.default = GoogleButton;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.GoogleIcon = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(5);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _styles = __webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var darkSvg = _react2.default.createElement(
	  'svg',
	  {
	    version: '1.1',
	    xmlns: 'http://www.w3.org/2000/svg',
	    width: '46px',
	    height: '46px',
	    viewBox: '0 0 46 46',
	    style: _styles.svgStyle
	  },
	  _react2.default.createElement(
	    'defs',
	    null,
	    _react2.default.createElement(
	      'filter',
	      {
	        x: '-50%',
	        y: '-50%',
	        width: '200%',
	        height: '200%',
	        filterUnits: 'objectBoundingBox',
	        id: 'filter-1'
	      },
	      _react2.default.createElement('feOffset', { dx: '0', dy: '1', 'in': 'SourceAlpha', result: 'shadowOffsetOuter1' }),
	      _react2.default.createElement('feGaussianBlur', {
	        stdDeviation: '0.5',
	        'in': 'shadowOffsetOuter1',
	        result: 'shadowBlurOuter1'
	      }),
	      _react2.default.createElement('feColorMatrix', {
	        values: '0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.168 0',
	        'in': 'shadowBlurOuter1',
	        type: 'matrix',
	        result: 'shadowMatrixOuter1'
	      }),
	      _react2.default.createElement('feOffset', { dx: '0', dy: '0', 'in': 'SourceAlpha', result: 'shadowOffsetOuter2' }),
	      _react2.default.createElement('feGaussianBlur', {
	        stdDeviation: '0.5',
	        'in': 'shadowOffsetOuter2',
	        result: 'shadowBlurOuter2'
	      }),
	      _react2.default.createElement('feColorMatrix', {
	        values: '0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.084 0',
	        'in': 'shadowBlurOuter2',
	        type: 'matrix',
	        result: 'shadowMatrixOuter2'
	      }),
	      _react2.default.createElement(
	        'feMerge',
	        null,
	        _react2.default.createElement('feMergeNode', { 'in': 'shadowMatrixOuter1' }),
	        _react2.default.createElement('feMergeNode', { 'in': 'shadowMatrixOuter2' }),
	        _react2.default.createElement('feMergeNode', { 'in': 'SourceGraphic' })
	      )
	    ),
	    _react2.default.createElement('rect', { id: 'path-2', x: '0', y: '0', width: '40', height: '40', rx: '2' }),
	    _react2.default.createElement('rect', { id: 'path-3', x: '5', y: '5', width: '38', height: '38', rx: '1' })
	  ),
	  _react2.default.createElement(
	    'g',
	    {
	      id: 'Google-Button',
	      stroke: 'none',
	      strokeWidth: '1',
	      fill: 'none',
	      fillRule: 'evenodd'
	    },
	    _react2.default.createElement('g', { id: '9-PATCH', transform: 'translate(-608.000000, -219.000000)' }),
	    _react2.default.createElement(
	      'g',
	      {
	        id: 'btn_google_dark_normal',
	        transform: 'translate(-1.000000, -1.000000)'
	      },
	      _react2.default.createElement(
	        'g',
	        {
	          id: 'button',
	          transform: 'translate(4.000000, 4.000000)',
	          filter: 'url(#filter-1)'
	        },
	        _react2.default.createElement(
	          'g',
	          { id: 'button-bg' },
	          _react2.default.createElement('use', { fill: '#4285F4', fillRule: 'evenodd' }),
	          _react2.default.createElement('use', { fill: 'none' }),
	          _react2.default.createElement('use', { fill: 'none' }),
	          _react2.default.createElement('use', { fill: 'none' })
	        )
	      ),
	      _react2.default.createElement(
	        'g',
	        { id: 'button-bg-copy' },
	        _react2.default.createElement('use', { fill: '#FFFFFF', fillRule: 'evenodd' }),
	        _react2.default.createElement('use', { fill: 'none' }),
	        _react2.default.createElement('use', { fill: 'none' }),
	        _react2.default.createElement('use', { fill: 'none' })
	      ),
	      _react2.default.createElement(
	        'g',
	        { id: 'logo_googleg_48dp', transform: 'translate(15.000000, 15.000000)' },
	        _react2.default.createElement('path', {
	          d: 'M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z',
	          id: 'Shape',
	          fill: '#4285F4'
	        }),
	        _react2.default.createElement('path', {
	          d: 'M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z',
	          id: 'Shape',
	          fill: '#34A853'
	        }),
	        _react2.default.createElement('path', {
	          d: 'M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z',
	          id: 'Shape',
	          fill: '#FBBC05'
	        }),
	        _react2.default.createElement('path', {
	          d: 'M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z',
	          id: 'Shape',
	          fill: '#EA4335'
	        }),
	        _react2.default.createElement('path', { d: 'M0,0 L18,0 L18,18 L0,18 L0,0 Z', id: 'Shape' })
	      ),
	      _react2.default.createElement('g', { id: 'handles_square' })
	    )
	  )
	);

	var lightSvg = _react2.default.createElement(
	  'svg',
	  {
	    version: '1.1',
	    xmlns: 'http://www.w3.org/2000/svg',
	    width: '46px',
	    height: '46px',
	    viewBox: '0 0 46 46',
	    style: _styles.svgStyle
	  },
	  _react2.default.createElement(
	    'defs',
	    null,
	    _react2.default.createElement(
	      'filter',
	      {
	        x: '-50%',
	        y: '-50%',
	        width: '200%',
	        height: '200%',
	        filterUnits: 'objectBoundingBox',
	        id: 'filter-1'
	      },
	      _react2.default.createElement('feOffset', { dx: '0', dy: '1', 'in': 'SourceAlpha', result: 'shadowOffsetOuter1' }),
	      _react2.default.createElement('feGaussianBlur', {
	        stdDeviation: '0.5',
	        'in': 'shadowOffsetOuter1',
	        result: 'shadowBlurOuter1'
	      }),
	      _react2.default.createElement('feColorMatrix', {
	        values: '0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.168 0',
	        'in': 'shadowBlurOuter1',
	        type: 'matrix',
	        result: 'shadowMatrixOuter1'
	      }),
	      _react2.default.createElement('feOffset', { dx: '0', dy: '0', 'in': 'SourceAlpha', result: 'shadowOffsetOuter2' }),
	      _react2.default.createElement('feGaussianBlur', {
	        stdDeviation: '0.5',
	        'in': 'shadowOffsetOuter2',
	        result: 'shadowBlurOuter2'
	      }),
	      _react2.default.createElement('feColorMatrix', {
	        values: '0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.084 0',
	        'in': 'shadowBlurOuter2',
	        type: 'matrix',
	        result: 'shadowMatrixOuter2'
	      }),
	      _react2.default.createElement(
	        'feMerge',
	        null,
	        _react2.default.createElement('feMergeNode', { 'in': 'shadowMatrixOuter1' }),
	        _react2.default.createElement('feMergeNode', { 'in': 'shadowMatrixOuter2' }),
	        _react2.default.createElement('feMergeNode', { 'in': 'SourceGraphic' })
	      )
	    ),
	    _react2.default.createElement('rect', { id: 'path-2', x: '0', y: '0', width: '40', height: '40', rx: '2' })
	  ),
	  _react2.default.createElement(
	    'g',
	    {
	      id: 'Google-Button',
	      stroke: 'none',
	      strokeWidth: '1',
	      fill: 'none',
	      fillRule: 'evenodd'
	    },
	    _react2.default.createElement('g', { id: '9-PATCH', transform: 'translate(-608.000000, -160.000000)' }),
	    _react2.default.createElement(
	      'g',
	      {
	        id: 'btn_google_light_normal',
	        transform: 'translate(-1.000000, -1.000000)'
	      },
	      _react2.default.createElement(
	        'g',
	        {
	          id: 'button',
	          transform: 'translate(4.000000, 4.000000)',
	          filter: 'url(#filter-1)'
	        },
	        _react2.default.createElement(
	          'g',
	          { id: 'button-bg' },
	          _react2.default.createElement('use', { fill: '#FFFFFF', fillRule: 'evenodd' }),
	          _react2.default.createElement('use', { fill: 'none' }),
	          _react2.default.createElement('use', { fill: 'none' }),
	          _react2.default.createElement('use', { fill: 'none' })
	        )
	      ),
	      _react2.default.createElement(
	        'g',
	        { id: 'logo_googleg_48dp', transform: 'translate(15.000000, 15.000000)' },
	        _react2.default.createElement('path', {
	          d: 'M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z',
	          id: 'Shape',
	          fill: '#4285F4'
	        }),
	        _react2.default.createElement('path', {
	          d: 'M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z',
	          id: 'Shape',
	          fill: '#34A853'
	        }),
	        _react2.default.createElement('path', {
	          d: 'M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z',
	          id: 'Shape',
	          fill: '#FBBC05'
	        }),
	        _react2.default.createElement('path', {
	          d: 'M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z',
	          id: 'Shape',
	          fill: '#EA4335'
	        }),
	        _react2.default.createElement('path', { d: 'M0,0 L18,0 L18,18 L0,18 L0,0 Z', id: 'Shape' })
	      ),
	      _react2.default.createElement('g', { id: 'handles_square' })
	    )
	  )
	);

	var disabledSvg = _react2.default.createElement(
	  'svg',
	  {
	    width: '46px',
	    height: '46px',
	    viewBox: '0 0 46 46',
	    version: '1.1',
	    xmlns: 'http://www.w3.org/2000/svg',
	    style: _styles.svgStyle
	  },
	  _react2.default.createElement(
	    'defs',
	    null,
	    _react2.default.createElement('rect', { id: 'path-1', x: '0', y: '0', width: '40', height: '40', rx: '2' })
	  ),
	  _react2.default.createElement(
	    'g',
	    {
	      id: 'Google-Button',
	      stroke: 'none',
	      strokeWidth: '1',
	      fill: 'none',
	      fillRule: 'evenodd'
	    },
	    _react2.default.createElement('g', { id: '9-PATCH', transform: 'translate(-788.000000, -219.000000)' }),
	    _react2.default.createElement(
	      'g',
	      {
	        id: 'btn_google_dark_disabled',
	        transform: 'translate(-1.000000, -1.000000)'
	      },
	      _react2.default.createElement(
	        'g',
	        { id: 'button', transform: 'translate(4.000000, 4.000000)' },
	        _react2.default.createElement(
	          'g',
	          { id: 'button-bg' },
	          _react2.default.createElement('use', { fillOpacity: '0.08', fill: '#000000', fillRule: 'evenodd' }),
	          _react2.default.createElement('use', { fill: 'none' }),
	          _react2.default.createElement('use', { fill: 'none' }),
	          _react2.default.createElement('use', { fill: 'none' })
	        )
	      ),
	      _react2.default.createElement('path', {
	        d: 'M24.001,25.71 L24.001,22.362 L32.425,22.362 C32.551,22.929 32.65,23.46 32.65,24.207 C32.65,29.346 29.203,33 24.01,33 C19.042,33 15.01,28.968 15.01,24 C15.01,19.032 19.042,15 24.01,15 C26.44,15 28.474,15.891 30.031,17.349 L27.475,19.833 C26.827,19.221 25.693,18.501 24.01,18.501 C21.031,18.501 18.601,20.976 18.601,24.009 C18.601,27.042 21.031,29.517 24.01,29.517 C27.457,29.517 28.726,27.132 28.96,25.719 L24.001,25.719 L24.001,25.71 Z',
	        id: 'Shape-Copy',
	        fillOpacity: '0.4',
	        fill: '#000000'
	      }),
	      _react2.default.createElement('g', { id: 'handles_square' })
	    )
	  )
	);

	var GoogleIcon = exports.GoogleIcon = function GoogleIcon(_ref) {
	  var disabled = _ref.disabled,
	      type = _ref.type;
	  return _react2.default.createElement(
	    'div',
	    { style: !disabled ? _styles.iconStyle : _extends({}, _styles.iconStyle, _styles.disabledIconStyle) },
	    !disabled ? type === 'dark' ? darkSvg : lightSvg : disabledSvg
	  );
	};

	GoogleIcon.propTypes = {
	  disabled: _propTypes2.default.bool,
	  type: _propTypes2.default.oneOf(['light', 'dark'])
	};

	GoogleIcon.defaultProps = {
	  type: 'dark'
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = exports.GoogleButton = undefined;

	var _GoogleButton = __webpack_require__(12);

	Object.defineProperty(exports, 'GoogleButton', {
	  enumerable: true,
	  get: function get() {
	    return _GoogleButton.GoogleButton;
	  }
	});

	var _GoogleButton2 = _interopRequireDefault(_GoogleButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _GoogleButton2.default;

/***/ }
/******/ ])
});
;