_N_E =
(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["pages/_app"],{

/***/ "./css/bootstrap.min.css":
/*!*******************************!*\
  !*** ./css/bootstrap.min.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./bootstrap.min.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./css/bootstrap.min.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./bootstrap.min.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./css/bootstrap.min.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./bootstrap.min.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./css/bootstrap.min.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct */ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js");

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./css/bootstrap.min.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./css/bootstrap.min.css ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@charset \"UTF-8\";/*!\n * Bootstrap v5.0.0-beta1 (https://getbootstrap.com/)\n * Copyright 2011-2020 The Bootstrap Authors\n * Copyright 2011-2020 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */:root{--bs-blue:#0d6efd;--bs-indigo:#6610f2;--bs-purple:#6f42c1;--bs-pink:#d63384;--bs-red:#dc3545;--bs-orange:#fd7e14;--bs-yellow:#ffc107;--bs-green:#198754;--bs-teal:#20c997;--bs-cyan:#0dcaf0;--bs-white:#fff;--bs-gray:#6c757d;--bs-gray-dark:#343a40;--bs-primary:#0d6efd;--bs-secondary:#6c757d;--bs-success:#198754;--bs-info:#0dcaf0;--bs-warning:#ffc107;--bs-danger:#dc3545;--bs-light:#f8f9fa;--bs-dark:#212529;--bs-font-sans-serif:system-ui,-apple-system,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",\"Liberation Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--bs-font-monospace:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;--bs-gradient:linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))}*,::after,::before{-moz-box-sizing:border-box;box-sizing:border-box}@media (prefers-reduced-motion:no-preference){:root{scroll-behavior:smooth}}body{margin:0;font-family:var(--bs-font-sans-serif);font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}[tabindex=\"-1\"]:focus:not(:focus-visible){outline:0!important}hr{margin:1rem 0;color:inherit;background-color:currentColor;border:0;opacity:.25}hr:not([size]){height:1px}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem;font-weight:500;line-height:1.2}.h1,h1{font-size:-moz-calc(1.375rem + 1.5vw);font-size:calc(1.375rem + 1.5vw)}@media (min-width:1200px){.h1,h1{font-size:2.5rem}}.h2,h2{font-size:-moz-calc(1.325rem + .9vw);font-size:calc(1.325rem + .9vw)}@media (min-width:1200px){.h2,h2{font-size:2rem}}.h3,h3{font-size:-moz-calc(1.3rem + .6vw);font-size:calc(1.3rem + .6vw)}@media (min-width:1200px){.h3,h3{font-size:1.75rem}}.h4,h4{font-size:-moz-calc(1.275rem + .3vw);font-size:calc(1.275rem + .3vw)}@media (min-width:1200px){.h4,h4{font-size:1.5rem}}.h5,h5{font-size:1.25rem}.h6,h6{font-size:1rem}p{margin-top:0;margin-bottom:1rem}abbr[data-bs-original-title],abbr[title]{text-decoration:underline;-webkit-text-decoration:underline dotted;-moz-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}address{margin-bottom:1rem;font-style:normal;line-height:inherit}ol,ul{padding-left:2rem}dl,ol,ul{margin-top:0;margin-bottom:1rem}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:bolder}.small,small{font-size:.875em}.mark,mark{padding:.2em;background-color:#fcf8e3}sub,sup{position:relative;font-size:.75em;line-height:0;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}a{color:#0d6efd;text-decoration:underline}a:hover{color:#0a58ca}a:not([href]):not([class]),a:not([href]):not([class]):hover{color:inherit;text-decoration:none}code,kbd,pre,samp{font-family:var(--bs-font-monospace);font-size:1em;direction:ltr;unicode-bidi:bidi-override}pre{display:block;margin-top:0;margin-bottom:1rem;overflow:auto;font-size:.875em}pre code{font-size:inherit;color:inherit;word-break:normal}code{font-size:.875em;color:#d63384;word-wrap:break-word}a>code{color:inherit}kbd{padding:.2rem .4rem;font-size:.875em;color:#fff;background-color:#212529;-moz-border-radius:.2rem;border-radius:.2rem}kbd kbd{padding:0;font-size:1em;font-weight:700}figure{margin:0 0 1rem}img,svg{vertical-align:middle}table{caption-side:bottom;border-collapse:collapse}caption{padding-top:.5rem;padding-bottom:.5rem;color:#6c757d;text-align:left}th{text-align:inherit;text-align:-webkit-match-parent}tbody,td,tfoot,th,thead,tr{border-color:inherit;border-style:solid;border-width:0}label{display:inline-block}button{-moz-border-radius:0;border-radius:0}button:focus{outline:dotted 1px;outline:-webkit-focus-ring-color auto 5px}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,select{text-transform:none}[role=button]{cursor:pointer}select{word-wrap:normal}[list]::-webkit-calendar-picker-indicator{display:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled),button:not(:disabled){cursor:pointer}::-moz-focus-inner{padding:0;border-style:none}textarea{resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{float:left;width:100%;padding:0;margin-bottom:.5rem;font-size:-moz-calc(1.275rem + .3vw);font-size:calc(1.275rem + .3vw);line-height:inherit}@media (min-width:1200px){legend{font-size:1.5rem}}legend+*{clear:left}::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-fields-wrapper,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-text,::-webkit-datetime-edit-year-field{padding:0}::-webkit-inner-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:textfield}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-color-swatch-wrapper{padding:0}::file-selector-button{font:inherit}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}output{display:inline-block}iframe{border:0}summary{display:list-item;cursor:pointer}progress{vertical-align:baseline}[hidden]{display:none!important}.lead{font-size:1.25rem;font-weight:300}.display-1{font-size:-moz-calc(1.625rem + 4.5vw);font-size:calc(1.625rem + 4.5vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-1{font-size:5rem}}.display-2{font-size:-moz-calc(1.575rem + 3.9vw);font-size:calc(1.575rem + 3.9vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-2{font-size:4.5rem}}.display-3{font-size:-moz-calc(1.525rem + 3.3vw);font-size:calc(1.525rem + 3.3vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-3{font-size:4rem}}.display-4{font-size:-moz-calc(1.475rem + 2.7vw);font-size:calc(1.475rem + 2.7vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-4{font-size:3.5rem}}.display-5{font-size:-moz-calc(1.425rem + 2.1vw);font-size:calc(1.425rem + 2.1vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-5{font-size:3rem}}.display-6{font-size:-moz-calc(1.375rem + 1.5vw);font-size:calc(1.375rem + 1.5vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-6{font-size:2.5rem}}.list-unstyled{padding-left:0;list-style:none}.list-inline{padding-left:0;list-style:none}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:.5rem}.initialism{font-size:.875em;text-transform:uppercase}.blockquote{margin-bottom:1rem;font-size:1.25rem}.blockquote>:last-child{margin-bottom:0}.blockquote-footer{margin-top:-1rem;margin-bottom:1rem;font-size:.875em;color:#6c757d}.blockquote-footer::before{content:\"— \"}.img-fluid{max-width:100%;height:auto}.img-thumbnail{padding:.25rem;background-color:#fff;border:1px solid #dee2e6;-moz-border-radius:.25rem;border-radius:.25rem;max-width:100%;height:auto}.figure{display:inline-block}.figure-img{margin-bottom:.5rem;line-height:1}.figure-caption{font-size:.875em;color:#6c757d}.container,.container-fluid,.container-lg,.container-md,.container-sm,.container-xl,.container-xxl{width:100%;padding-right:var(--bs-gutter-x,.75rem);padding-left:var(--bs-gutter-x,.75rem);margin-right:auto;margin-left:auto}@media (min-width:576px){.container,.container-sm{max-width:540px}}@media (min-width:768px){.container,.container-md,.container-sm{max-width:720px}}@media (min-width:992px){.container,.container-lg,.container-md,.container-sm{max-width:960px}}@media (min-width:1200px){.container,.container-lg,.container-md,.container-sm,.container-xl{max-width:1140px}}@media (min-width:1400px){.container,.container-lg,.container-md,.container-sm,.container-xl,.container-xxl{max-width:1320px}}.row{--bs-gutter-x:1.5rem;--bs-gutter-y:0;display:-webkit-flex;display:-moz-box;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;margin-top:-moz-calc(var(--bs-gutter-y) * -1);margin-top:calc(var(--bs-gutter-y) * -1);margin-right:-moz-calc(var(--bs-gutter-x)/ -2);margin-right:calc(var(--bs-gutter-x)/ -2);margin-left:-moz-calc(var(--bs-gutter-x)/ -2);margin-left:calc(var(--bs-gutter-x)/ -2)}.row>*{-webkit-flex-shrink:0;flex-shrink:0;width:100%;max-width:100%;padding-right:-moz-calc(var(--bs-gutter-x)/ 2);padding-right:calc(var(--bs-gutter-x)/ 2);padding-left:-moz-calc(var(--bs-gutter-x)/ 2);padding-left:calc(var(--bs-gutter-x)/ 2);margin-top:var(--bs-gutter-y)}.col{-webkit-flex:1 0;-moz-box-flex:1;flex:1 0}.row-cols-auto>*{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:auto}.row-cols-1>*{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:100%}.row-cols-2>*{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:50%}.row-cols-3>*{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:33.3333333333%}.row-cols-4>*{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:25%}.row-cols-5>*{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:20%}.row-cols-6>*{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:16.6666666667%}.col-auto{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:auto}.col-1{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:8.3333333333%}.col-2{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:16.6666666667%}.col-3{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:25%}.col-4{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:33.3333333333%}.col-5{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:41.6666666667%}.col-6{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:50%}.col-7{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:58.3333333333%}.col-8{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:66.6666666667%}.col-9{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:75%}.col-10{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:83.3333333333%}.col-11{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:91.6666666667%}.col-12{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:100%}.offset-1{margin-left:8.3333333333%}.offset-2{margin-left:16.6666666667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.3333333333%}.offset-5{margin-left:41.6666666667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.3333333333%}.offset-8{margin-left:66.6666666667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.3333333333%}.offset-11{margin-left:91.6666666667%}.g-0,.gx-0{--bs-gutter-x:0}.g-0,.gy-0{--bs-gutter-y:0}.g-1,.gx-1{--bs-gutter-x:0.25rem}.g-1,.gy-1{--bs-gutter-y:0.25rem}.g-2,.gx-2{--bs-gutter-x:0.5rem}.g-2,.gy-2{--bs-gutter-y:0.5rem}.g-3,.gx-3{--bs-gutter-x:1rem}.g-3,.gy-3{--bs-gutter-y:1rem}.g-4,.gx-4{--bs-gutter-x:1.5rem}.g-4,.gy-4{--bs-gutter-y:1.5rem}.g-5,.gx-5{--bs-gutter-x:3rem}.g-5,.gy-5{--bs-gutter-y:3rem}@media (min-width:576px){.col-sm{-webkit-flex:1 0;-moz-box-flex:1;flex:1 0}.row-cols-sm-auto>*{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:auto}.row-cols-sm-1>*{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:100%}.row-cols-sm-2>*{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:50%}.row-cols-sm-3>*{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:33.3333333333%}.row-cols-sm-4>*{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:25%}.row-cols-sm-5>*{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:20%}.row-cols-sm-6>*{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:16.6666666667%}.col-sm-auto{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:auto}.col-sm-1{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:8.3333333333%}.col-sm-2{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:16.6666666667%}.col-sm-3{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:25%}.col-sm-4{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:33.3333333333%}.col-sm-5{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:41.6666666667%}.col-sm-6{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:50%}.col-sm-7{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:58.3333333333%}.col-sm-8{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:66.6666666667%}.col-sm-9{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:75%}.col-sm-10{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:83.3333333333%}.col-sm-11{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:91.6666666667%}.col-sm-12{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:100%}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.3333333333%}.offset-sm-2{margin-left:16.6666666667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.3333333333%}.offset-sm-5{margin-left:41.6666666667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.3333333333%}.offset-sm-8{margin-left:66.6666666667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.3333333333%}.offset-sm-11{margin-left:91.6666666667%}.g-sm-0,.gx-sm-0{--bs-gutter-x:0}.g-sm-0,.gy-sm-0{--bs-gutter-y:0}.g-sm-1,.gx-sm-1{--bs-gutter-x:0.25rem}.g-sm-1,.gy-sm-1{--bs-gutter-y:0.25rem}.g-sm-2,.gx-sm-2{--bs-gutter-x:0.5rem}.g-sm-2,.gy-sm-2{--bs-gutter-y:0.5rem}.g-sm-3,.gx-sm-3{--bs-gutter-x:1rem}.g-sm-3,.gy-sm-3{--bs-gutter-y:1rem}.g-sm-4,.gx-sm-4{--bs-gutter-x:1.5rem}.g-sm-4,.gy-sm-4{--bs-gutter-y:1.5rem}.g-sm-5,.gx-sm-5{--bs-gutter-x:3rem}.g-sm-5,.gy-sm-5{--bs-gutter-y:3rem}}@media (min-width:768px){.col-md{-webkit-flex:1 0;-moz-box-flex:1;flex:1 0}.row-cols-md-auto>*{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:auto}.row-cols-md-1>*{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:100%}.row-cols-md-2>*{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:50%}.row-cols-md-3>*{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:33.3333333333%}.row-cols-md-4>*{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:25%}.row-cols-md-5>*{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:20%}.row-cols-md-6>*{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:16.6666666667%}.col-md-auto{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:auto}.col-md-1{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:8.3333333333%}.col-md-2{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:16.6666666667%}.col-md-3{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:25%}.col-md-4{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:33.3333333333%}.col-md-5{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:41.6666666667%}.col-md-6{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:50%}.col-md-7{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:58.3333333333%}.col-md-8{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:66.6666666667%}.col-md-9{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:75%}.col-md-10{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:83.3333333333%}.col-md-11{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:91.6666666667%}.col-md-12{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:100%}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.3333333333%}.offset-md-2{margin-left:16.6666666667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.3333333333%}.offset-md-5{margin-left:41.6666666667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.3333333333%}.offset-md-8{margin-left:66.6666666667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.3333333333%}.offset-md-11{margin-left:91.6666666667%}.g-md-0,.gx-md-0{--bs-gutter-x:0}.g-md-0,.gy-md-0{--bs-gutter-y:0}.g-md-1,.gx-md-1{--bs-gutter-x:0.25rem}.g-md-1,.gy-md-1{--bs-gutter-y:0.25rem}.g-md-2,.gx-md-2{--bs-gutter-x:0.5rem}.g-md-2,.gy-md-2{--bs-gutter-y:0.5rem}.g-md-3,.gx-md-3{--bs-gutter-x:1rem}.g-md-3,.gy-md-3{--bs-gutter-y:1rem}.g-md-4,.gx-md-4{--bs-gutter-x:1.5rem}.g-md-4,.gy-md-4{--bs-gutter-y:1.5rem}.g-md-5,.gx-md-5{--bs-gutter-x:3rem}.g-md-5,.gy-md-5{--bs-gutter-y:3rem}}@media (min-width:992px){.col-lg{-webkit-flex:1 0;-moz-box-flex:1;flex:1 0}.row-cols-lg-auto>*{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:auto}.row-cols-lg-1>*{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:100%}.row-cols-lg-2>*{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:50%}.row-cols-lg-3>*{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:33.3333333333%}.row-cols-lg-4>*{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:25%}.row-cols-lg-5>*{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:20%}.row-cols-lg-6>*{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:16.6666666667%}.col-lg-auto{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:auto}.col-lg-1{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:8.3333333333%}.col-lg-2{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:16.6666666667%}.col-lg-3{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:25%}.col-lg-4{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:33.3333333333%}.col-lg-5{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:41.6666666667%}.col-lg-6{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:50%}.col-lg-7{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:58.3333333333%}.col-lg-8{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:66.6666666667%}.col-lg-9{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:75%}.col-lg-10{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:83.3333333333%}.col-lg-11{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:91.6666666667%}.col-lg-12{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:100%}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.3333333333%}.offset-lg-2{margin-left:16.6666666667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.3333333333%}.offset-lg-5{margin-left:41.6666666667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.3333333333%}.offset-lg-8{margin-left:66.6666666667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.3333333333%}.offset-lg-11{margin-left:91.6666666667%}.g-lg-0,.gx-lg-0{--bs-gutter-x:0}.g-lg-0,.gy-lg-0{--bs-gutter-y:0}.g-lg-1,.gx-lg-1{--bs-gutter-x:0.25rem}.g-lg-1,.gy-lg-1{--bs-gutter-y:0.25rem}.g-lg-2,.gx-lg-2{--bs-gutter-x:0.5rem}.g-lg-2,.gy-lg-2{--bs-gutter-y:0.5rem}.g-lg-3,.gx-lg-3{--bs-gutter-x:1rem}.g-lg-3,.gy-lg-3{--bs-gutter-y:1rem}.g-lg-4,.gx-lg-4{--bs-gutter-x:1.5rem}.g-lg-4,.gy-lg-4{--bs-gutter-y:1.5rem}.g-lg-5,.gx-lg-5{--bs-gutter-x:3rem}.g-lg-5,.gy-lg-5{--bs-gutter-y:3rem}}@media (min-width:1200px){.col-xl{-webkit-flex:1 0;-moz-box-flex:1;flex:1 0}.row-cols-xl-auto>*{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:auto}.row-cols-xl-1>*{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:100%}.row-cols-xl-2>*{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:50%}.row-cols-xl-3>*{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:33.3333333333%}.row-cols-xl-4>*{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:25%}.row-cols-xl-5>*{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:20%}.row-cols-xl-6>*{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:16.6666666667%}.col-xl-auto{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:auto}.col-xl-1{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:8.3333333333%}.col-xl-2{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:16.6666666667%}.col-xl-3{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:25%}.col-xl-4{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:33.3333333333%}.col-xl-5{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:41.6666666667%}.col-xl-6{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:50%}.col-xl-7{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:58.3333333333%}.col-xl-8{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:66.6666666667%}.col-xl-9{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:75%}.col-xl-10{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:83.3333333333%}.col-xl-11{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:91.6666666667%}.col-xl-12{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:100%}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.3333333333%}.offset-xl-2{margin-left:16.6666666667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.3333333333%}.offset-xl-5{margin-left:41.6666666667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.3333333333%}.offset-xl-8{margin-left:66.6666666667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.3333333333%}.offset-xl-11{margin-left:91.6666666667%}.g-xl-0,.gx-xl-0{--bs-gutter-x:0}.g-xl-0,.gy-xl-0{--bs-gutter-y:0}.g-xl-1,.gx-xl-1{--bs-gutter-x:0.25rem}.g-xl-1,.gy-xl-1{--bs-gutter-y:0.25rem}.g-xl-2,.gx-xl-2{--bs-gutter-x:0.5rem}.g-xl-2,.gy-xl-2{--bs-gutter-y:0.5rem}.g-xl-3,.gx-xl-3{--bs-gutter-x:1rem}.g-xl-3,.gy-xl-3{--bs-gutter-y:1rem}.g-xl-4,.gx-xl-4{--bs-gutter-x:1.5rem}.g-xl-4,.gy-xl-4{--bs-gutter-y:1.5rem}.g-xl-5,.gx-xl-5{--bs-gutter-x:3rem}.g-xl-5,.gy-xl-5{--bs-gutter-y:3rem}}@media (min-width:1400px){.col-xxl{-webkit-flex:1 0;-moz-box-flex:1;flex:1 0}.row-cols-xxl-auto>*{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:auto}.row-cols-xxl-1>*{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:100%}.row-cols-xxl-2>*{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:50%}.row-cols-xxl-3>*{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:33.3333333333%}.row-cols-xxl-4>*{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:25%}.row-cols-xxl-5>*{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:20%}.row-cols-xxl-6>*{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:16.6666666667%}.col-xxl-auto{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:auto}.col-xxl-1{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:8.3333333333%}.col-xxl-2{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:16.6666666667%}.col-xxl-3{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:25%}.col-xxl-4{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:33.3333333333%}.col-xxl-5{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:41.6666666667%}.col-xxl-6{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:50%}.col-xxl-7{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:58.3333333333%}.col-xxl-8{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:66.6666666667%}.col-xxl-9{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:75%}.col-xxl-10{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:83.3333333333%}.col-xxl-11{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:91.6666666667%}.col-xxl-12{-webkit-flex:0 0 auto;-moz-box-flex:0;flex:0 0 auto;width:100%}.offset-xxl-0{margin-left:0}.offset-xxl-1{margin-left:8.3333333333%}.offset-xxl-2{margin-left:16.6666666667%}.offset-xxl-3{margin-left:25%}.offset-xxl-4{margin-left:33.3333333333%}.offset-xxl-5{margin-left:41.6666666667%}.offset-xxl-6{margin-left:50%}.offset-xxl-7{margin-left:58.3333333333%}.offset-xxl-8{margin-left:66.6666666667%}.offset-xxl-9{margin-left:75%}.offset-xxl-10{margin-left:83.3333333333%}.offset-xxl-11{margin-left:91.6666666667%}.g-xxl-0,.gx-xxl-0{--bs-gutter-x:0}.g-xxl-0,.gy-xxl-0{--bs-gutter-y:0}.g-xxl-1,.gx-xxl-1{--bs-gutter-x:0.25rem}.g-xxl-1,.gy-xxl-1{--bs-gutter-y:0.25rem}.g-xxl-2,.gx-xxl-2{--bs-gutter-x:0.5rem}.g-xxl-2,.gy-xxl-2{--bs-gutter-y:0.5rem}.g-xxl-3,.gx-xxl-3{--bs-gutter-x:1rem}.g-xxl-3,.gy-xxl-3{--bs-gutter-y:1rem}.g-xxl-4,.gx-xxl-4{--bs-gutter-x:1.5rem}.g-xxl-4,.gy-xxl-4{--bs-gutter-y:1.5rem}.g-xxl-5,.gx-xxl-5{--bs-gutter-x:3rem}.g-xxl-5,.gy-xxl-5{--bs-gutter-y:3rem}}.table{--bs-table-bg:transparent;--bs-table-striped-color:#212529;--bs-table-striped-bg:rgba(0, 0, 0, 0.05);--bs-table-active-color:#212529;--bs-table-active-bg:rgba(0, 0, 0, 0.1);--bs-table-hover-color:#212529;--bs-table-hover-bg:rgba(0, 0, 0, 0.075);width:100%;margin-bottom:1rem;color:#212529;vertical-align:top;border-color:#dee2e6}.table>:not(caption)>*>*{padding:.5rem .5rem;background-color:var(--bs-table-bg);background-image:-moz-linear-gradient(var(--bs-table-accent-bg),var(--bs-table-accent-bg));background-image:linear-gradient(var(--bs-table-accent-bg),var(--bs-table-accent-bg));border-bottom-width:1px}.table>tbody{vertical-align:inherit}.table>thead{vertical-align:bottom}.table>:not(:last-child)>:last-child>*{border-bottom-color:currentColor}.caption-top{caption-side:top}.table-sm>:not(caption)>*>*{padding:.25rem .25rem}.table-bordered>:not(caption)>*{border-width:1px 0}.table-bordered>:not(caption)>*>*{border-width:0 1px}.table-borderless>:not(caption)>*>*{border-bottom-width:0}.table-striped>tbody>tr:nth-of-type(odd){--bs-table-accent-bg:var(--bs-table-striped-bg);color:var(--bs-table-striped-color)}.table-active{--bs-table-accent-bg:var(--bs-table-active-bg);color:var(--bs-table-active-color)}.table-hover>tbody>tr:hover{--bs-table-accent-bg:var(--bs-table-hover-bg);color:var(--bs-table-hover-color)}.table-primary{--bs-table-bg:#cfe2ff;--bs-table-striped-bg:#c5d7f2;--bs-table-striped-color:#000;--bs-table-active-bg:#bacbe6;--bs-table-active-color:#000;--bs-table-hover-bg:#bfd1ec;--bs-table-hover-color:#000;color:#000;border-color:#bacbe6}.table-secondary{--bs-table-bg:#e2e3e5;--bs-table-striped-bg:#d7d8da;--bs-table-striped-color:#000;--bs-table-active-bg:#cbccce;--bs-table-active-color:#000;--bs-table-hover-bg:#d1d2d4;--bs-table-hover-color:#000;color:#000;border-color:#cbccce}.table-success{--bs-table-bg:#d1e7dd;--bs-table-striped-bg:#c7dbd2;--bs-table-striped-color:#000;--bs-table-active-bg:#bcd0c7;--bs-table-active-color:#000;--bs-table-hover-bg:#c1d6cc;--bs-table-hover-color:#000;color:#000;border-color:#bcd0c7}.table-info{--bs-table-bg:#cff4fc;--bs-table-striped-bg:#c5e8ef;--bs-table-striped-color:#000;--bs-table-active-bg:#badce3;--bs-table-active-color:#000;--bs-table-hover-bg:#bfe2e9;--bs-table-hover-color:#000;color:#000;border-color:#badce3}.table-warning{--bs-table-bg:#fff3cd;--bs-table-striped-bg:#f2e7c3;--bs-table-striped-color:#000;--bs-table-active-bg:#e6dbb9;--bs-table-active-color:#000;--bs-table-hover-bg:#ece1be;--bs-table-hover-color:#000;color:#000;border-color:#e6dbb9}.table-danger{--bs-table-bg:#f8d7da;--bs-table-striped-bg:#eccccf;--bs-table-striped-color:#000;--bs-table-active-bg:#dfc2c4;--bs-table-active-color:#000;--bs-table-hover-bg:#e5c7ca;--bs-table-hover-color:#000;color:#000;border-color:#dfc2c4}.table-light{--bs-table-bg:#f8f9fa;--bs-table-striped-bg:#ecedee;--bs-table-striped-color:#000;--bs-table-active-bg:#dfe0e1;--bs-table-active-color:#000;--bs-table-hover-bg:#e5e6e7;--bs-table-hover-color:#000;color:#000;border-color:#dfe0e1}.table-dark{--bs-table-bg:#212529;--bs-table-striped-bg:#2c3034;--bs-table-striped-color:#fff;--bs-table-active-bg:#373b3e;--bs-table-active-color:#fff;--bs-table-hover-bg:#323539;--bs-table-hover-color:#fff;color:#fff;border-color:#373b3e}.table-responsive{overflow-x:auto;-webkit-overflow-scrolling:touch}@media (max-width:575.98px){.table-responsive-sm{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width:767.98px){.table-responsive-md{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width:991.98px){.table-responsive-lg{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width:1199.98px){.table-responsive-xl{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width:1399.98px){.table-responsive-xxl{overflow-x:auto;-webkit-overflow-scrolling:touch}}.form-label{margin-bottom:.5rem}.col-form-label{padding-top:-moz-calc(.375rem + 1px);padding-top:calc(.375rem + 1px);padding-bottom:-moz-calc(.375rem + 1px);padding-bottom:calc(.375rem + 1px);margin-bottom:0;font-size:inherit;line-height:1.5}.col-form-label-lg{padding-top:-moz-calc(.5rem + 1px);padding-top:calc(.5rem + 1px);padding-bottom:-moz-calc(.5rem + 1px);padding-bottom:calc(.5rem + 1px);font-size:1.25rem}.col-form-label-sm{padding-top:-moz-calc(.25rem + 1px);padding-top:calc(.25rem + 1px);padding-bottom:-moz-calc(.25rem + 1px);padding-bottom:calc(.25rem + 1px);font-size:.875rem}.form-text{margin-top:.25rem;font-size:.875em;color:#6c757d}.form-control{display:block;width:100%;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;-webkit-appearance:none;-moz-appearance:none;appearance:none;-moz-border-radius:.25rem;border-radius:.25rem;-moz-transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out,-moz-box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out,-moz-box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control{-moz-transition:none;transition:none}}.form-control[type=file]{overflow:hidden}.form-control[type=file]:not(:disabled):not([readonly]){cursor:pointer}.form-control:focus{color:#212529;background-color:#fff;border-color:#86b7fe;outline:0;-moz-box-shadow:0 0 0 .25rem rgba(13,110,253,.25);box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.form-control::-webkit-date-and-time-value{height:1.5em}.form-control::-webkit-input-placeholder{color:#6c757d;opacity:1}.form-control:-ms-input-placeholder{color:#6c757d;opacity:1}.form-control::placeholder{color:#6c757d;opacity:1}.form-control:disabled,.form-control[readonly]{background-color:#e9ecef;opacity:1}.form-control::file-selector-button{padding:.375rem .75rem;margin:-.375rem -.75rem;-webkit-margin-end:.75rem;-moz-margin-end:.75rem;margin-inline-end:.75rem;color:#212529;background-color:#e9ecef;pointer-events:none;border-color:inherit;border-style:solid;border-width:0;border-inline-end-width:1px;-moz-border-radius:0;border-radius:0;-moz-transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-moz-box-shadow .15s ease-in-out;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-moz-box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control::file-selector-button{-moz-transition:none;transition:none}}.form-control:hover:not(:disabled):not([readonly])::file-selector-button{background-color:#dde0e3}.form-control::-webkit-file-upload-button{padding:.375rem .75rem;margin:-.375rem -.75rem;-webkit-margin-end:.75rem;margin-inline-end:.75rem;color:#212529;background-color:#e9ecef;pointer-events:none;border-color:inherit;border-style:solid;border-width:0;border-inline-end-width:1px;border-radius:0;-webkit-transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control::-webkit-file-upload-button{-webkit-transition:none;transition:none}}.form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button{background-color:#dde0e3}.form-control-plaintext{display:block;width:100%;padding:.375rem 0;margin-bottom:0;line-height:1.5;color:#212529;background-color:transparent;border:solid transparent;border-width:1px 0}.form-control-plaintext.form-control-lg,.form-control-plaintext.form-control-sm{padding-right:0;padding-left:0}.form-control-sm{min-height:-moz-calc(1.5em + .5rem + 2px);min-height:calc(1.5em + .5rem + 2px);padding:.25rem .5rem;font-size:.875rem;-moz-border-radius:.2rem;border-radius:.2rem}.form-control-sm::file-selector-button{padding:.25rem .5rem;margin:-.25rem -.5rem;-webkit-margin-end:.5rem;-moz-margin-end:.5rem;margin-inline-end:.5rem}.form-control-sm::-webkit-file-upload-button{padding:.25rem .5rem;margin:-.25rem -.5rem;-webkit-margin-end:.5rem;margin-inline-end:.5rem}.form-control-lg{min-height:-moz-calc(1.5em + 1rem + 2px);min-height:calc(1.5em + 1rem + 2px);padding:.5rem 1rem;font-size:1.25rem;-moz-border-radius:.3rem;border-radius:.3rem}.form-control-lg::file-selector-button{padding:.5rem 1rem;margin:-.5rem -1rem;-webkit-margin-end:1rem;-moz-margin-end:1rem;margin-inline-end:1rem}.form-control-lg::-webkit-file-upload-button{padding:.5rem 1rem;margin:-.5rem -1rem;-webkit-margin-end:1rem;margin-inline-end:1rem}textarea.form-control{min-height:-moz-calc(1.5em + .75rem + 2px);min-height:calc(1.5em + .75rem + 2px)}textarea.form-control-sm{min-height:-moz-calc(1.5em + .5rem + 2px);min-height:calc(1.5em + .5rem + 2px)}textarea.form-control-lg{min-height:-moz-calc(1.5em + 1rem + 2px);min-height:calc(1.5em + 1rem + 2px)}.form-control-color{max-width:3rem;height:auto;padding:.375rem}.form-control-color:not(:disabled):not([readonly]){cursor:pointer}.form-control-color::-moz-color-swatch{height:1.5em;-moz-border-radius:.25rem;border-radius:.25rem}.form-control-color::-webkit-color-swatch{height:1.5em;border-radius:.25rem}.form-select{display:block;width:100%;padding:.375rem 1.75rem .375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;vertical-align:middle;background-color:#fff;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right .75rem center;background-size:16px 12px;border:1px solid #ced4da;-moz-border-radius:.25rem;border-radius:.25rem;-webkit-appearance:none;-moz-appearance:none;appearance:none}.form-select:focus{border-color:#86b7fe;outline:0;-moz-box-shadow:0 0 0 .25rem rgba(13,110,253,.25);box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.form-select[multiple],.form-select[size]:not([size=\"1\"]){padding-right:.75rem;background-image:none}.form-select:disabled{color:#6c757d;background-color:#e9ecef}.form-select:-moz-focusring{color:transparent;text-shadow:0 0 0 #212529}.form-select-sm{padding-top:.25rem;padding-bottom:.25rem;padding-left:.5rem;font-size:.875rem}.form-select-lg{padding-top:.5rem;padding-bottom:.5rem;padding-left:1rem;font-size:1.25rem}.form-check{display:block;min-height:1.5rem;padding-left:1.5em;margin-bottom:.125rem}.form-check .form-check-input{float:left;margin-left:-1.5em}.form-check-input{width:1em;height:1em;margin-top:.25em;vertical-align:top;background-color:#fff;background-repeat:no-repeat;background-position:center;background-size:contain;border:1px solid rgba(0,0,0,.25);-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-print-color-adjust:exact;color-adjust:exact;-moz-transition:background-color .15s ease-in-out,background-position .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-moz-box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,background-position .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,background-position .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-moz-box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-check-input{-moz-transition:none;transition:none}}.form-check-input[type=checkbox]{-moz-border-radius:.25em;border-radius:.25em}.form-check-input[type=radio]{-moz-border-radius:50%;border-radius:50%}.form-check-input:active{-webkit-filter:brightness(90%);filter:brightness(90%)}.form-check-input:focus{border-color:#86b7fe;outline:0;-moz-box-shadow:0 0 0 .25rem rgba(13,110,253,.25);box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.form-check-input:checked{background-color:#0d6efd;border-color:#0d6efd}.form-check-input:checked[type=checkbox]{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e\")}.form-check-input:checked[type=radio]{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e\")}.form-check-input[type=checkbox]:indeterminate{background-color:#0d6efd;border-color:#0d6efd;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e\")}.form-check-input:disabled{pointer-events:none;-webkit-filter:none;filter:none;opacity:.5}.form-check-input:disabled~.form-check-label,.form-check-input[disabled]~.form-check-label{opacity:.5}.form-switch{padding-left:2.5em}.form-switch .form-check-input{width:2em;margin-left:-2.5em;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e\");background-position:left center;-moz-border-radius:2em;border-radius:2em}.form-switch .form-check-input:focus{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2386b7fe'/%3e%3c/svg%3e\")}.form-switch .form-check-input:checked{background-position:right center;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")}.form-check-inline{display:inline-block;margin-right:1rem}.btn-check{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.btn-check:disabled+.btn,.btn-check[disabled]+.btn{pointer-events:none;-webkit-filter:none;filter:none;opacity:.65}.form-range{width:100%;height:1.5rem;padding:0;background-color:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none}.form-range:focus{outline:0}.form-range:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .25rem rgba(13,110,253,.25)}.form-range:focus::-moz-range-thumb{-moz-box-shadow:0 0 0 1px #fff,0 0 0 .25rem rgba(13,110,253,.25);box-shadow:0 0 0 1px #fff,0 0 0 .25rem rgba(13,110,253,.25)}.form-range::-moz-focus-outer{border:0}.form-range::-webkit-slider-thumb{width:1rem;height:1rem;margin-top:-.25rem;background-color:#0d6efd;border:0;border-radius:1rem;-webkit-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-webkit-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.form-range::-webkit-slider-thumb{-webkit-transition:none;transition:none}}.form-range::-webkit-slider-thumb:active{background-color:#b6d4fe}.form-range::-webkit-slider-runnable-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.form-range::-moz-range-thumb{width:1rem;height:1rem;background-color:#0d6efd;border:0;-moz-border-radius:1rem;border-radius:1rem;-moz-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-moz-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-moz-box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-moz-box-shadow .15s ease-in-out;-moz-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.form-range::-moz-range-thumb{-moz-transition:none;transition:none}}.form-range::-moz-range-thumb:active{background-color:#b6d4fe}.form-range::-moz-range-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;-moz-border-radius:1rem;border-radius:1rem}.form-range:disabled{pointer-events:none}.form-range:disabled::-webkit-slider-thumb{background-color:#adb5bd}.form-range:disabled::-moz-range-thumb{background-color:#adb5bd}.form-floating{position:relative}.form-floating>.form-control,.form-floating>.form-select{height:-moz-calc(3.5rem + 2px);height:calc(3.5rem + 2px);padding:1rem .75rem}.form-floating>label{position:absolute;top:0;left:0;height:100%;padding:1rem .75rem;pointer-events:none;border:1px solid transparent;-webkit-transform-origin:0 0;-moz-transform-origin:0 0;transform-origin:0 0;transition:opacity .1s ease-in-out,-webkit-transform .1s ease-in-out;-moz-transition:opacity .1s ease-in-out,transform .1s ease-in-out,-moz-transform .1s ease-in-out;transition:opacity .1s ease-in-out,transform .1s ease-in-out;transition:opacity .1s ease-in-out,transform .1s ease-in-out,-webkit-transform .1s ease-in-out,-moz-transform .1s ease-in-out}@media (prefers-reduced-motion:reduce){.form-floating>label{-moz-transition:none;transition:none}}.form-floating>.form-control::-webkit-input-placeholder{color:transparent}.form-floating>.form-control:-ms-input-placeholder{color:transparent}.form-floating>.form-control::placeholder{color:transparent}.form-floating>.form-control:not(:-moz-placeholder-shown){padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-control:focus,.form-floating>.form-control:not(:placeholder-shown){padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-control:-webkit-autofill{padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-select{padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-control:not(:-moz-placeholder-shown)~label{opacity:.65;-moz-transform:scale(.85) translateY(-.5rem) translateX(.15rem);transform:scale(.85) translateY(-.5rem) translateX(.15rem)}.form-floating>.form-control:focus~label,.form-floating>.form-control:not(:placeholder-shown)~label,.form-floating>.form-select~label{opacity:.65;-webkit-transform:scale(.85) translateY(-.5rem) translateX(.15rem);-moz-transform:scale(.85) translateY(-.5rem) translateX(.15rem);transform:scale(.85) translateY(-.5rem) translateX(.15rem)}.form-floating>.form-control:-webkit-autofill~label{opacity:.65;-webkit-transform:scale(.85) translateY(-.5rem) translateX(.15rem);transform:scale(.85) translateY(-.5rem) translateX(.15rem)}.input-group{position:relative;display:-webkit-flex;display:-moz-box;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-items:stretch;-moz-box-align:stretch;align-items:stretch;width:100%}.input-group>.form-control,.input-group>.form-select{position:relative;-webkit-flex:1 1 auto;-moz-box-flex:1;flex:1 1 auto;width:1%;min-width:0}.input-group>.form-control:focus,.input-group>.form-select:focus{z-index:3}.input-group .btn{position:relative;z-index:2}.input-group .btn:focus{z-index:3}.input-group-text{display:-webkit-flex;display:-moz-box;display:flex;-webkit-align-items:center;-moz-box-align:center;align-items:center;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:center;white-space:nowrap;background-color:#e9ecef;border:1px solid #ced4da;-moz-border-radius:.25rem;border-radius:.25rem}.input-group-lg>.btn,.input-group-lg>.form-control,.input-group-lg>.form-select,.input-group-lg>.input-group-text{padding:.5rem 1rem;font-size:1.25rem;-moz-border-radius:.3rem;border-radius:.3rem}.input-group-sm>.btn,.input-group-sm>.form-control,.input-group-sm>.form-select,.input-group-sm>.input-group-text{padding:.25rem .5rem;font-size:.875rem;-moz-border-radius:.2rem;border-radius:.2rem}.input-group-lg>.form-select,.input-group-sm>.form-select{padding-right:1.75rem}.input-group:not(.has-validation)>.dropdown-toggle:nth-last-child(n+3),.input-group:not(.has-validation)>:not(:last-child):not(.dropdown-toggle):not(.dropdown-menu){-moz-border-radius-topright:0;border-top-right-radius:0;-moz-border-radius-bottomright:0;border-bottom-right-radius:0}.input-group.has-validation>.dropdown-toggle:nth-last-child(n+4),.input-group.has-validation>:nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu){-moz-border-radius-topright:0;border-top-right-radius:0;-moz-border-radius-bottomright:0;border-bottom-right-radius:0}.input-group>:not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback){margin-left:-1px;-moz-border-radius-topleft:0;border-top-left-radius:0;-moz-border-radius-bottomleft:0;border-bottom-left-radius:0}.valid-feedback{display:none;width:100%;margin-top:.25rem;font-size:.875em;color:#198754}.valid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;color:#fff;background-color:rgba(25,135,84,.9);-moz-border-radius:.25rem;border-radius:.25rem}.is-valid~.valid-feedback,.is-valid~.valid-tooltip,.was-validated :valid~.valid-feedback,.was-validated :valid~.valid-tooltip{display:block}.form-control.is-valid,.was-validated .form-control:valid{border-color:#198754;padding-right:-moz-calc(1.5em + .75rem);padding-right:calc(1.5em + .75rem);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right -moz-calc(.375em + .1875rem) center;background-position:right calc(.375em + .1875rem) center;background-size:-moz-calc(.75em + .375rem) -moz-calc(.75em + .375rem);background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.form-control.is-valid:focus,.was-validated .form-control:valid:focus{border-color:#198754;-moz-box-shadow:0 0 0 .25rem rgba(25,135,84,.25);box-shadow:0 0 0 .25rem rgba(25,135,84,.25)}.was-validated textarea.form-control:valid,textarea.form-control.is-valid{padding-right:-moz-calc(1.5em + .75rem);padding-right:calc(1.5em + .75rem);background-position:top -moz-calc(.375em + .1875rem) right -moz-calc(.375em + .1875rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.form-select.is-valid,.was-validated .form-select:valid{border-color:#198754;padding-right:-moz-calc(.75em + 2.3125rem);padding-right:calc(.75em + 2.3125rem);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\"),url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");background-position:right .75rem center,center right 1.75rem;background-size:16px 12px,-moz-calc(.75em + .375rem) -moz-calc(.75em + .375rem);background-size:16px 12px,calc(.75em + .375rem) calc(.75em + .375rem)}.form-select.is-valid:focus,.was-validated .form-select:valid:focus{border-color:#198754;-moz-box-shadow:0 0 0 .25rem rgba(25,135,84,.25);box-shadow:0 0 0 .25rem rgba(25,135,84,.25)}.form-check-input.is-valid,.was-validated .form-check-input:valid{border-color:#198754}.form-check-input.is-valid:checked,.was-validated .form-check-input:valid:checked{background-color:#198754}.form-check-input.is-valid:focus,.was-validated .form-check-input:valid:focus{-moz-box-shadow:0 0 0 .25rem rgba(25,135,84,.25);box-shadow:0 0 0 .25rem rgba(25,135,84,.25)}.form-check-input.is-valid~.form-check-label,.was-validated .form-check-input:valid~.form-check-label{color:#198754}.form-check-inline .form-check-input~.valid-feedback{margin-left:.5em}.invalid-feedback{display:none;width:100%;margin-top:.25rem;font-size:.875em;color:#dc3545}.invalid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;color:#fff;background-color:rgba(220,53,69,.9);-moz-border-radius:.25rem;border-radius:.25rem}.is-invalid~.invalid-feedback,.is-invalid~.invalid-tooltip,.was-validated :invalid~.invalid-feedback,.was-validated :invalid~.invalid-tooltip{display:block}.form-control.is-invalid,.was-validated .form-control:invalid{border-color:#dc3545;padding-right:-moz-calc(1.5em + .75rem);padding-right:calc(1.5em + .75rem);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right -moz-calc(.375em + .1875rem) center;background-position:right calc(.375em + .1875rem) center;background-size:-moz-calc(.75em + .375rem) -moz-calc(.75em + .375rem);background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.form-control.is-invalid:focus,.was-validated .form-control:invalid:focus{border-color:#dc3545;-moz-box-shadow:0 0 0 .25rem rgba(220,53,69,.25);box-shadow:0 0 0 .25rem rgba(220,53,69,.25)}.was-validated textarea.form-control:invalid,textarea.form-control.is-invalid{padding-right:-moz-calc(1.5em + .75rem);padding-right:calc(1.5em + .75rem);background-position:top -moz-calc(.375em + .1875rem) right -moz-calc(.375em + .1875rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.form-select.is-invalid,.was-validated .form-select:invalid{border-color:#dc3545;padding-right:-moz-calc(.75em + 2.3125rem);padding-right:calc(.75em + 2.3125rem);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\"),url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");background-position:right .75rem center,center right 1.75rem;background-size:16px 12px,-moz-calc(.75em + .375rem) -moz-calc(.75em + .375rem);background-size:16px 12px,calc(.75em + .375rem) calc(.75em + .375rem)}.form-select.is-invalid:focus,.was-validated .form-select:invalid:focus{border-color:#dc3545;-moz-box-shadow:0 0 0 .25rem rgba(220,53,69,.25);box-shadow:0 0 0 .25rem rgba(220,53,69,.25)}.form-check-input.is-invalid,.was-validated .form-check-input:invalid{border-color:#dc3545}.form-check-input.is-invalid:checked,.was-validated .form-check-input:invalid:checked{background-color:#dc3545}.form-check-input.is-invalid:focus,.was-validated .form-check-input:invalid:focus{-moz-box-shadow:0 0 0 .25rem rgba(220,53,69,.25);box-shadow:0 0 0 .25rem rgba(220,53,69,.25)}.form-check-input.is-invalid~.form-check-label,.was-validated .form-check-input:invalid~.form-check-label{color:#dc3545}.form-check-inline .form-check-input~.invalid-feedback{margin-left:.5em}.btn{display:inline-block;font-weight:400;line-height:1.5;color:#212529;text-align:center;text-decoration:none;vertical-align:middle;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;-moz-border-radius:.25rem;border-radius:.25rem;-moz-transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-moz-box-shadow .15s ease-in-out;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-moz-box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.btn{-moz-transition:none;transition:none}}.btn:hover{color:#212529}.btn-check:focus+.btn,.btn:focus{outline:0;-moz-box-shadow:0 0 0 .25rem rgba(13,110,253,.25);box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.btn.disabled,.btn:disabled,fieldset:disabled .btn{pointer-events:none;opacity:.65}.btn-primary{color:#fff;background-color:#0d6efd;border-color:#0d6efd}.btn-primary:hover{color:#fff;background-color:#0b5ed7;border-color:#0a58ca}.btn-check:focus+.btn-primary,.btn-primary:focus{color:#fff;background-color:#0b5ed7;border-color:#0a58ca;-moz-box-shadow:0 0 0 .25rem rgba(49,132,253,.5);box-shadow:0 0 0 .25rem rgba(49,132,253,.5)}.btn-check:active+.btn-primary,.btn-check:checked+.btn-primary,.btn-primary.active,.btn-primary:active,.show>.btn-primary.dropdown-toggle{color:#fff;background-color:#0a58ca;border-color:#0a53be}.btn-check:active+.btn-primary:focus,.btn-check:checked+.btn-primary:focus,.btn-primary.active:focus,.btn-primary:active:focus,.show>.btn-primary.dropdown-toggle:focus{-moz-box-shadow:0 0 0 .25rem rgba(49,132,253,.5);box-shadow:0 0 0 .25rem rgba(49,132,253,.5)}.btn-primary.disabled,.btn-primary:disabled{color:#fff;background-color:#0d6efd;border-color:#0d6efd}.btn-secondary{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-secondary:hover{color:#fff;background-color:#5c636a;border-color:#565e64}.btn-check:focus+.btn-secondary,.btn-secondary:focus{color:#fff;background-color:#5c636a;border-color:#565e64;-moz-box-shadow:0 0 0 .25rem rgba(130,138,145,.5);box-shadow:0 0 0 .25rem rgba(130,138,145,.5)}.btn-check:active+.btn-secondary,.btn-check:checked+.btn-secondary,.btn-secondary.active,.btn-secondary:active,.show>.btn-secondary.dropdown-toggle{color:#fff;background-color:#565e64;border-color:#51585e}.btn-check:active+.btn-secondary:focus,.btn-check:checked+.btn-secondary:focus,.btn-secondary.active:focus,.btn-secondary:active:focus,.show>.btn-secondary.dropdown-toggle:focus{-moz-box-shadow:0 0 0 .25rem rgba(130,138,145,.5);box-shadow:0 0 0 .25rem rgba(130,138,145,.5)}.btn-secondary.disabled,.btn-secondary:disabled{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-success{color:#fff;background-color:#198754;border-color:#198754}.btn-success:hover{color:#fff;background-color:#157347;border-color:#146c43}.btn-check:focus+.btn-success,.btn-success:focus{color:#fff;background-color:#157347;border-color:#146c43;-moz-box-shadow:0 0 0 .25rem rgba(60,153,110,.5);box-shadow:0 0 0 .25rem rgba(60,153,110,.5)}.btn-check:active+.btn-success,.btn-check:checked+.btn-success,.btn-success.active,.btn-success:active,.show>.btn-success.dropdown-toggle{color:#fff;background-color:#146c43;border-color:#13653f}.btn-check:active+.btn-success:focus,.btn-check:checked+.btn-success:focus,.btn-success.active:focus,.btn-success:active:focus,.show>.btn-success.dropdown-toggle:focus{-moz-box-shadow:0 0 0 .25rem rgba(60,153,110,.5);box-shadow:0 0 0 .25rem rgba(60,153,110,.5)}.btn-success.disabled,.btn-success:disabled{color:#fff;background-color:#198754;border-color:#198754}.btn-info{color:#000;background-color:#0dcaf0;border-color:#0dcaf0}.btn-info:hover{color:#000;background-color:#31d2f2;border-color:#25cff2}.btn-check:focus+.btn-info,.btn-info:focus{color:#000;background-color:#31d2f2;border-color:#25cff2;-moz-box-shadow:0 0 0 .25rem rgba(11,172,204,.5);box-shadow:0 0 0 .25rem rgba(11,172,204,.5)}.btn-check:active+.btn-info,.btn-check:checked+.btn-info,.btn-info.active,.btn-info:active,.show>.btn-info.dropdown-toggle{color:#000;background-color:#3dd5f3;border-color:#25cff2}.btn-check:active+.btn-info:focus,.btn-check:checked+.btn-info:focus,.btn-info.active:focus,.btn-info:active:focus,.show>.btn-info.dropdown-toggle:focus{-moz-box-shadow:0 0 0 .25rem rgba(11,172,204,.5);box-shadow:0 0 0 .25rem rgba(11,172,204,.5)}.btn-info.disabled,.btn-info:disabled{color:#000;background-color:#0dcaf0;border-color:#0dcaf0}.btn-warning{color:#000;background-color:#ffc107;border-color:#ffc107}.btn-warning:hover{color:#000;background-color:#ffca2c;border-color:#ffc720}.btn-check:focus+.btn-warning,.btn-warning:focus{color:#000;background-color:#ffca2c;border-color:#ffc720;-moz-box-shadow:0 0 0 .25rem rgba(217,164,6,.5);box-shadow:0 0 0 .25rem rgba(217,164,6,.5)}.btn-check:active+.btn-warning,.btn-check:checked+.btn-warning,.btn-warning.active,.btn-warning:active,.show>.btn-warning.dropdown-toggle{color:#000;background-color:#ffcd39;border-color:#ffc720}.btn-check:active+.btn-warning:focus,.btn-check:checked+.btn-warning:focus,.btn-warning.active:focus,.btn-warning:active:focus,.show>.btn-warning.dropdown-toggle:focus{-moz-box-shadow:0 0 0 .25rem rgba(217,164,6,.5);box-shadow:0 0 0 .25rem rgba(217,164,6,.5)}.btn-warning.disabled,.btn-warning:disabled{color:#000;background-color:#ffc107;border-color:#ffc107}.btn-danger{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-danger:hover{color:#fff;background-color:#bb2d3b;border-color:#b02a37}.btn-check:focus+.btn-danger,.btn-danger:focus{color:#fff;background-color:#bb2d3b;border-color:#b02a37;-moz-box-shadow:0 0 0 .25rem rgba(225,83,97,.5);box-shadow:0 0 0 .25rem rgba(225,83,97,.5)}.btn-check:active+.btn-danger,.btn-check:checked+.btn-danger,.btn-danger.active,.btn-danger:active,.show>.btn-danger.dropdown-toggle{color:#fff;background-color:#b02a37;border-color:#a52834}.btn-check:active+.btn-danger:focus,.btn-check:checked+.btn-danger:focus,.btn-danger.active:focus,.btn-danger:active:focus,.show>.btn-danger.dropdown-toggle:focus{-moz-box-shadow:0 0 0 .25rem rgba(225,83,97,.5);box-shadow:0 0 0 .25rem rgba(225,83,97,.5)}.btn-danger.disabled,.btn-danger:disabled{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-light{color:#000;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:hover{color:#000;background-color:#f9fafb;border-color:#f9fafb}.btn-check:focus+.btn-light,.btn-light:focus{color:#000;background-color:#f9fafb;border-color:#f9fafb;-moz-box-shadow:0 0 0 .25rem rgba(211,212,213,.5);box-shadow:0 0 0 .25rem rgba(211,212,213,.5)}.btn-check:active+.btn-light,.btn-check:checked+.btn-light,.btn-light.active,.btn-light:active,.show>.btn-light.dropdown-toggle{color:#000;background-color:#f9fafb;border-color:#f9fafb}.btn-check:active+.btn-light:focus,.btn-check:checked+.btn-light:focus,.btn-light.active:focus,.btn-light:active:focus,.show>.btn-light.dropdown-toggle:focus{-moz-box-shadow:0 0 0 .25rem rgba(211,212,213,.5);box-shadow:0 0 0 .25rem rgba(211,212,213,.5)}.btn-light.disabled,.btn-light:disabled{color:#000;background-color:#f8f9fa;border-color:#f8f9fa}.btn-dark{color:#fff;background-color:#212529;border-color:#212529}.btn-dark:hover{color:#fff;background-color:#1c1f23;border-color:#1a1e21}.btn-check:focus+.btn-dark,.btn-dark:focus{color:#fff;background-color:#1c1f23;border-color:#1a1e21;-moz-box-shadow:0 0 0 .25rem rgba(66,70,73,.5);box-shadow:0 0 0 .25rem rgba(66,70,73,.5)}.btn-check:active+.btn-dark,.btn-check:checked+.btn-dark,.btn-dark.active,.btn-dark:active,.show>.btn-dark.dropdown-toggle{color:#fff;background-color:#1a1e21;border-color:#191c1f}.btn-check:active+.btn-dark:focus,.btn-check:checked+.btn-dark:focus,.btn-dark.active:focus,.btn-dark:active:focus,.show>.btn-dark.dropdown-toggle:focus{-moz-box-shadow:0 0 0 .25rem rgba(66,70,73,.5);box-shadow:0 0 0 .25rem rgba(66,70,73,.5)}.btn-dark.disabled,.btn-dark:disabled{color:#fff;background-color:#212529;border-color:#212529}.btn-outline-primary{color:#0d6efd;border-color:#0d6efd}.btn-outline-primary:hover{color:#fff;background-color:#0d6efd;border-color:#0d6efd}.btn-check:focus+.btn-outline-primary,.btn-outline-primary:focus{-moz-box-shadow:0 0 0 .25rem rgba(13,110,253,.5);box-shadow:0 0 0 .25rem rgba(13,110,253,.5)}.btn-check:active+.btn-outline-primary,.btn-check:checked+.btn-outline-primary,.btn-outline-primary.active,.btn-outline-primary.dropdown-toggle.show,.btn-outline-primary:active{color:#fff;background-color:#0d6efd;border-color:#0d6efd}.btn-check:active+.btn-outline-primary:focus,.btn-check:checked+.btn-outline-primary:focus,.btn-outline-primary.active:focus,.btn-outline-primary.dropdown-toggle.show:focus,.btn-outline-primary:active:focus{-moz-box-shadow:0 0 0 .25rem rgba(13,110,253,.5);box-shadow:0 0 0 .25rem rgba(13,110,253,.5)}.btn-outline-primary.disabled,.btn-outline-primary:disabled{color:#0d6efd;background-color:transparent}.btn-outline-secondary{color:#6c757d;border-color:#6c757d}.btn-outline-secondary:hover{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-check:focus+.btn-outline-secondary,.btn-outline-secondary:focus{-moz-box-shadow:0 0 0 .25rem rgba(108,117,125,.5);box-shadow:0 0 0 .25rem rgba(108,117,125,.5)}.btn-check:active+.btn-outline-secondary,.btn-check:checked+.btn-outline-secondary,.btn-outline-secondary.active,.btn-outline-secondary.dropdown-toggle.show,.btn-outline-secondary:active{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-check:active+.btn-outline-secondary:focus,.btn-check:checked+.btn-outline-secondary:focus,.btn-outline-secondary.active:focus,.btn-outline-secondary.dropdown-toggle.show:focus,.btn-outline-secondary:active:focus{-moz-box-shadow:0 0 0 .25rem rgba(108,117,125,.5);box-shadow:0 0 0 .25rem rgba(108,117,125,.5)}.btn-outline-secondary.disabled,.btn-outline-secondary:disabled{color:#6c757d;background-color:transparent}.btn-outline-success{color:#198754;border-color:#198754}.btn-outline-success:hover{color:#fff;background-color:#198754;border-color:#198754}.btn-check:focus+.btn-outline-success,.btn-outline-success:focus{-moz-box-shadow:0 0 0 .25rem rgba(25,135,84,.5);box-shadow:0 0 0 .25rem rgba(25,135,84,.5)}.btn-check:active+.btn-outline-success,.btn-check:checked+.btn-outline-success,.btn-outline-success.active,.btn-outline-success.dropdown-toggle.show,.btn-outline-success:active{color:#fff;background-color:#198754;border-color:#198754}.btn-check:active+.btn-outline-success:focus,.btn-check:checked+.btn-outline-success:focus,.btn-outline-success.active:focus,.btn-outline-success.dropdown-toggle.show:focus,.btn-outline-success:active:focus{-moz-box-shadow:0 0 0 .25rem rgba(25,135,84,.5);box-shadow:0 0 0 .25rem rgba(25,135,84,.5)}.btn-outline-success.disabled,.btn-outline-success:disabled{color:#198754;background-color:transparent}.btn-outline-info{color:#0dcaf0;border-color:#0dcaf0}.btn-outline-info:hover{color:#000;background-color:#0dcaf0;border-color:#0dcaf0}.btn-check:focus+.btn-outline-info,.btn-outline-info:focus{-moz-box-shadow:0 0 0 .25rem rgba(13,202,240,.5);box-shadow:0 0 0 .25rem rgba(13,202,240,.5)}.btn-check:active+.btn-outline-info,.btn-check:checked+.btn-outline-info,.btn-outline-info.active,.btn-outline-info.dropdown-toggle.show,.btn-outline-info:active{color:#000;background-color:#0dcaf0;border-color:#0dcaf0}.btn-check:active+.btn-outline-info:focus,.btn-check:checked+.btn-outline-info:focus,.btn-outline-info.active:focus,.btn-outline-info.dropdown-toggle.show:focus,.btn-outline-info:active:focus{-moz-box-shadow:0 0 0 .25rem rgba(13,202,240,.5);box-shadow:0 0 0 .25rem rgba(13,202,240,.5)}.btn-outline-info.disabled,.btn-outline-info:disabled{color:#0dcaf0;background-color:transparent}.btn-outline-warning{color:#ffc107;border-color:#ffc107}.btn-outline-warning:hover{color:#000;background-color:#ffc107;border-color:#ffc107}.btn-check:focus+.btn-outline-warning,.btn-outline-warning:focus{-moz-box-shadow:0 0 0 .25rem rgba(255,193,7,.5);box-shadow:0 0 0 .25rem rgba(255,193,7,.5)}.btn-check:active+.btn-outline-warning,.btn-check:checked+.btn-outline-warning,.btn-outline-warning.active,.btn-outline-warning.dropdown-toggle.show,.btn-outline-warning:active{color:#000;background-color:#ffc107;border-color:#ffc107}.btn-check:active+.btn-outline-warning:focus,.btn-check:checked+.btn-outline-warning:focus,.btn-outline-warning.active:focus,.btn-outline-warning.dropdown-toggle.show:focus,.btn-outline-warning:active:focus{-moz-box-shadow:0 0 0 .25rem rgba(255,193,7,.5);box-shadow:0 0 0 .25rem rgba(255,193,7,.5)}.btn-outline-warning.disabled,.btn-outline-warning:disabled{color:#ffc107;background-color:transparent}.btn-outline-danger{color:#dc3545;border-color:#dc3545}.btn-outline-danger:hover{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-check:focus+.btn-outline-danger,.btn-outline-danger:focus{-moz-box-shadow:0 0 0 .25rem rgba(220,53,69,.5);box-shadow:0 0 0 .25rem rgba(220,53,69,.5)}.btn-check:active+.btn-outline-danger,.btn-check:checked+.btn-outline-danger,.btn-outline-danger.active,.btn-outline-danger.dropdown-toggle.show,.btn-outline-danger:active{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-check:active+.btn-outline-danger:focus,.btn-check:checked+.btn-outline-danger:focus,.btn-outline-danger.active:focus,.btn-outline-danger.dropdown-toggle.show:focus,.btn-outline-danger:active:focus{-moz-box-shadow:0 0 0 .25rem rgba(220,53,69,.5);box-shadow:0 0 0 .25rem rgba(220,53,69,.5)}.btn-outline-danger.disabled,.btn-outline-danger:disabled{color:#dc3545;background-color:transparent}.btn-outline-light{color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:hover{color:#000;background-color:#f8f9fa;border-color:#f8f9fa}.btn-check:focus+.btn-outline-light,.btn-outline-light:focus{-moz-box-shadow:0 0 0 .25rem rgba(248,249,250,.5);box-shadow:0 0 0 .25rem rgba(248,249,250,.5)}.btn-check:active+.btn-outline-light,.btn-check:checked+.btn-outline-light,.btn-outline-light.active,.btn-outline-light.dropdown-toggle.show,.btn-outline-light:active{color:#000;background-color:#f8f9fa;border-color:#f8f9fa}.btn-check:active+.btn-outline-light:focus,.btn-check:checked+.btn-outline-light:focus,.btn-outline-light.active:focus,.btn-outline-light.dropdown-toggle.show:focus,.btn-outline-light:active:focus{-moz-box-shadow:0 0 0 .25rem rgba(248,249,250,.5);box-shadow:0 0 0 .25rem rgba(248,249,250,.5)}.btn-outline-light.disabled,.btn-outline-light:disabled{color:#f8f9fa;background-color:transparent}.btn-outline-dark{color:#212529;border-color:#212529}.btn-outline-dark:hover{color:#fff;background-color:#212529;border-color:#212529}.btn-check:focus+.btn-outline-dark,.btn-outline-dark:focus{-moz-box-shadow:0 0 0 .25rem rgba(33,37,41,.5);box-shadow:0 0 0 .25rem rgba(33,37,41,.5)}.btn-check:active+.btn-outline-dark,.btn-check:checked+.btn-outline-dark,.btn-outline-dark.active,.btn-outline-dark.dropdown-toggle.show,.btn-outline-dark:active{color:#fff;background-color:#212529;border-color:#212529}.btn-check:active+.btn-outline-dark:focus,.btn-check:checked+.btn-outline-dark:focus,.btn-outline-dark.active:focus,.btn-outline-dark.dropdown-toggle.show:focus,.btn-outline-dark:active:focus{-moz-box-shadow:0 0 0 .25rem rgba(33,37,41,.5);box-shadow:0 0 0 .25rem rgba(33,37,41,.5)}.btn-outline-dark.disabled,.btn-outline-dark:disabled{color:#212529;background-color:transparent}.btn-link{font-weight:400;color:#0d6efd;text-decoration:underline}.btn-link:hover{color:#0a58ca}.btn-link.disabled,.btn-link:disabled{color:#6c757d}.btn-group-lg>.btn,.btn-lg{padding:.5rem 1rem;font-size:1.25rem;-moz-border-radius:.3rem;border-radius:.3rem}.btn-group-sm>.btn,.btn-sm{padding:.25rem .5rem;font-size:.875rem;-moz-border-radius:.2rem;border-radius:.2rem}.fade{-moz-transition:opacity .15s linear;transition:opacity .15s linear}@media (prefers-reduced-motion:reduce){.fade{-moz-transition:none;transition:none}}.fade:not(.show){opacity:0}.collapse:not(.show){display:none}.collapsing{height:0;overflow:hidden;-moz-transition:height .35s ease;transition:height .35s ease}@media (prefers-reduced-motion:reduce){.collapsing{-moz-transition:none;transition:none}}.dropdown,.dropend,.dropstart,.dropup{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.dropdown-toggle:empty::after{margin-left:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;min-width:10rem;padding:.5rem 0;margin:.125rem 0 0;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);-moz-border-radius:.25rem;border-radius:.25rem}.dropdown-menu[style]{right:auto!important}.dropdown-menu-start{--bs-position:start;right:auto;left:0}.dropdown-menu-end{--bs-position:end;right:0;left:auto}@media (min-width:576px){.dropdown-menu-sm-start{--bs-position:start;right:auto;left:0}.dropdown-menu-sm-end{--bs-position:end;right:0;left:auto}}@media (min-width:768px){.dropdown-menu-md-start{--bs-position:start;right:auto;left:0}.dropdown-menu-md-end{--bs-position:end;right:0;left:auto}}@media (min-width:992px){.dropdown-menu-lg-start{--bs-position:start;right:auto;left:0}.dropdown-menu-lg-end{--bs-position:end;right:0;left:auto}}@media (min-width:1200px){.dropdown-menu-xl-start{--bs-position:start;right:auto;left:0}.dropdown-menu-xl-end{--bs-position:end;right:0;left:auto}}@media (min-width:1400px){.dropdown-menu-xxl-start{--bs-position:start;right:auto;left:0}.dropdown-menu-xxl-end{--bs-position:end;right:0;left:auto}}.dropup .dropdown-menu{top:auto;bottom:100%;margin-top:0;margin-bottom:.125rem}.dropup .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.dropup .dropdown-toggle:empty::after{margin-left:0}.dropend .dropdown-menu{top:0;right:auto;left:100%;margin-top:0;margin-left:.125rem}.dropend .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid}.dropend .dropdown-toggle:empty::after{margin-left:0}.dropend .dropdown-toggle::after{vertical-align:0}.dropstart .dropdown-menu{top:0;right:100%;left:auto;margin-top:0;margin-right:.125rem}.dropstart .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\"}.dropstart .dropdown-toggle::after{display:none}.dropstart .dropdown-toggle::before{display:inline-block;margin-right:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent}.dropstart .dropdown-toggle:empty::after{margin-left:0}.dropstart .dropdown-toggle::before{vertical-align:0}.dropdown-divider{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid rgba(0,0,0,.15)}.dropdown-item{display:block;width:100%;padding:.25rem 1rem;clear:both;font-weight:400;color:#212529;text-align:inherit;text-decoration:none;white-space:nowrap;background-color:transparent;border:0}.dropdown-item:focus,.dropdown-item:hover{color:#1e2125;background-color:#f8f9fa}.dropdown-item.active,.dropdown-item:active{color:#fff;text-decoration:none;background-color:#0d6efd}.dropdown-item.disabled,.dropdown-item:disabled{color:#6c757d;pointer-events:none;background-color:transparent}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:.5rem 1rem;margin-bottom:0;font-size:.875rem;color:#6c757d;white-space:nowrap}.dropdown-item-text{display:block;padding:.25rem 1rem;color:#212529}.dropdown-menu-dark{color:#dee2e6;background-color:#343a40;border-color:rgba(0,0,0,.15)}.dropdown-menu-dark .dropdown-item{color:#dee2e6}.dropdown-menu-dark .dropdown-item:focus,.dropdown-menu-dark .dropdown-item:hover{color:#fff;background-color:rgba(255,255,255,.15)}.dropdown-menu-dark .dropdown-item.active,.dropdown-menu-dark .dropdown-item:active{color:#fff;background-color:#0d6efd}.dropdown-menu-dark .dropdown-item.disabled,.dropdown-menu-dark .dropdown-item:disabled{color:#adb5bd}.dropdown-menu-dark .dropdown-divider{border-color:rgba(0,0,0,.15)}.dropdown-menu-dark .dropdown-item-text{color:#dee2e6}.dropdown-menu-dark .dropdown-header{color:#adb5bd}.btn-group,.btn-group-vertical{position:relative;display:-webkit-inline-flex;display:-moz-inline-box;display:inline-flex;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{position:relative;-webkit-flex:1 1 auto;-moz-box-flex:1;flex:1 1 auto}.btn-group-vertical>.btn-check:checked+.btn,.btn-group-vertical>.btn-check:focus+.btn,.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:hover,.btn-group>.btn-check:checked+.btn,.btn-group>.btn-check:focus+.btn,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus,.btn-group>.btn:hover{z-index:1}.btn-toolbar{display:-webkit-flex;display:-moz-box;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-justify-content:flex-start;-moz-box-pack:start;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group>.btn-group:not(:first-child),.btn-group>.btn:not(:first-child){margin-left:-1px}.btn-group>.btn-group:not(:last-child)>.btn,.btn-group>.btn:not(:last-child):not(.dropdown-toggle){-moz-border-radius-topright:0;border-top-right-radius:0;-moz-border-radius-bottomright:0;border-bottom-right-radius:0}.btn-group>.btn-group:not(:first-child)>.btn,.btn-group>.btn:nth-child(n+3),.btn-group>:not(.btn-check)+.btn{-moz-border-radius-topleft:0;border-top-left-radius:0;-moz-border-radius-bottomleft:0;border-bottom-left-radius:0}.dropdown-toggle-split{padding-right:.5625rem;padding-left:.5625rem}.dropdown-toggle-split::after,.dropend .dropdown-toggle-split::after,.dropup .dropdown-toggle-split::after{margin-left:0}.dropstart .dropdown-toggle-split::before{margin-right:0}.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split{padding-right:.375rem;padding-left:.375rem}.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem}.btn-group-vertical{-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;flex-direction:column;-webkit-align-items:flex-start;-moz-box-align:start;align-items:flex-start;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group{width:100%}.btn-group-vertical>.btn-group:not(:first-child),.btn-group-vertical>.btn:not(:first-child){margin-top:-1px}.btn-group-vertical>.btn-group:not(:last-child)>.btn,.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle){-moz-border-radius-bottomright:0;border-bottom-right-radius:0;-moz-border-radius-bottomleft:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:not(:first-child)>.btn,.btn-group-vertical>.btn~.btn{-moz-border-radius-topleft:0;border-top-left-radius:0;-moz-border-radius-topright:0;border-top-right-radius:0}.nav{display:-webkit-flex;display:-moz-box;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:block;padding:.5rem 1rem;text-decoration:none;-moz-transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out}@media (prefers-reduced-motion:reduce){.nav-link{-moz-transition:none;transition:none}}.nav-link.disabled{color:#6c757d;pointer-events:none;cursor:default}.nav-tabs{border-bottom:1px solid #dee2e6}.nav-tabs .nav-link{margin-bottom:-1px;border:1px solid transparent;-moz-border-radius-topleft:.25rem;border-top-left-radius:.25rem;-moz-border-radius-topright:.25rem;border-top-right-radius:.25rem}.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover{border-color:#e9ecef #e9ecef #dee2e6}.nav-tabs .nav-link.disabled{color:#6c757d;background-color:transparent;border-color:transparent}.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active{color:#495057;background-color:#fff;border-color:#dee2e6 #dee2e6 #fff}.nav-tabs .dropdown-menu{margin-top:-1px;-moz-border-radius-topleft:0;border-top-left-radius:0;-moz-border-radius-topright:0;border-top-right-radius:0}.nav-pills .nav-link{-moz-border-radius:.25rem;border-radius:.25rem}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:#fff;background-color:#0d6efd}.nav-fill .nav-item,.nav-fill>.nav-link{-webkit-flex:1 1 auto;-moz-box-flex:1;flex:1 1 auto;text-align:center}.nav-justified .nav-item,.nav-justified>.nav-link{-webkit-flex-basis:0;flex-basis:0;-webkit-flex-grow:1;-moz-box-flex:1;flex-grow:1;text-align:center}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{position:relative;display:-webkit-flex;display:-moz-box;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-justify-content:space-between;-moz-box-pack:justify;justify-content:space-between;padding-top:.5rem;padding-bottom:.5rem}.navbar>.container,.navbar>.container-fluid,.navbar>.container-lg,.navbar>.container-md,.navbar>.container-sm,.navbar>.container-xl,.navbar>.container-xxl{display:-webkit-flex;display:-moz-box;display:flex;-webkit-flex-wrap:inherit;flex-wrap:inherit;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-justify-content:space-between;-moz-box-pack:justify;justify-content:space-between}.navbar-brand{padding-top:.3125rem;padding-bottom:.3125rem;margin-right:1rem;font-size:1.25rem;text-decoration:none;white-space:nowrap}.navbar-nav{display:-webkit-flex;display:-moz-box;display:flex;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .nav-link{padding-right:0;padding-left:0}.navbar-nav .dropdown-menu{position:static}.navbar-text{padding-top:.5rem;padding-bottom:.5rem}.navbar-collapse{-webkit-align-items:center;-moz-box-align:center;align-items:center;width:100%}.navbar-toggler{padding:.25rem .75rem;font-size:1.25rem;line-height:1;background-color:transparent;border:1px solid transparent;-moz-border-radius:.25rem;border-radius:.25rem;-moz-transition:box-shadow .15s ease-in-out, -moz-box-shadow .15s ease-in-out;transition:box-shadow .15s ease-in-out;transition:box-shadow .15s ease-in-out, -moz-box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.navbar-toggler{-moz-transition:none;transition:none}}.navbar-toggler:hover{text-decoration:none}.navbar-toggler:focus{text-decoration:none;outline:0;-moz-box-shadow:0 0 0 .25rem;box-shadow:0 0 0 .25rem}.navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;background-repeat:no-repeat;background-position:center;background-size:100%}@media (min-width:576px){.navbar-expand-sm{-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-justify-content:flex-start;-moz-box-pack:start;justify-content:flex-start}.navbar-expand-sm .navbar-nav{-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-sm .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-sm .navbar-collapse{display:-webkit-flex!important;display:-moz-box!important;display:flex!important}.navbar-expand-sm .navbar-toggler{display:none}}@media (min-width:768px){.navbar-expand-md{-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-justify-content:flex-start;-moz-box-pack:start;justify-content:flex-start}.navbar-expand-md .navbar-nav{-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-md .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-md .navbar-collapse{display:-webkit-flex!important;display:-moz-box!important;display:flex!important}.navbar-expand-md .navbar-toggler{display:none}}@media (min-width:992px){.navbar-expand-lg{-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-justify-content:flex-start;-moz-box-pack:start;justify-content:flex-start}.navbar-expand-lg .navbar-nav{-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-lg .navbar-collapse{display:-webkit-flex!important;display:-moz-box!important;display:flex!important}.navbar-expand-lg .navbar-toggler{display:none}}@media (min-width:1200px){.navbar-expand-xl{-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-justify-content:flex-start;-moz-box-pack:start;justify-content:flex-start}.navbar-expand-xl .navbar-nav{-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xl .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-xl .navbar-collapse{display:-webkit-flex!important;display:-moz-box!important;display:flex!important}.navbar-expand-xl .navbar-toggler{display:none}}@media (min-width:1400px){.navbar-expand-xxl{-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-justify-content:flex-start;-moz-box-pack:start;justify-content:flex-start}.navbar-expand-xxl .navbar-nav{-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;flex-direction:row}.navbar-expand-xxl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xxl .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-xxl .navbar-collapse{display:-webkit-flex!important;display:-moz-box!important;display:flex!important}.navbar-expand-xxl .navbar-toggler{display:none}}.navbar-expand{-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-justify-content:flex-start;-moz-box-pack:start;justify-content:flex-start}.navbar-expand .navbar-nav{-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;flex-direction:row}.navbar-expand .navbar-nav .dropdown-menu{position:absolute}.navbar-expand .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand .navbar-collapse{display:-webkit-flex!important;display:-moz-box!important;display:flex!important}.navbar-expand .navbar-toggler{display:none}.navbar-light .navbar-brand{color:rgba(0,0,0,.9)}.navbar-light .navbar-brand:focus,.navbar-light .navbar-brand:hover{color:rgba(0,0,0,.9)}.navbar-light .navbar-nav .nav-link{color:rgba(0,0,0,.55)}.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover{color:rgba(0,0,0,.7)}.navbar-light .navbar-nav .nav-link.disabled{color:rgba(0,0,0,.3)}.navbar-light .navbar-nav .nav-link.active,.navbar-light .navbar-nav .show>.nav-link{color:rgba(0,0,0,.9)}.navbar-light .navbar-toggler{color:rgba(0,0,0,.55);border-color:rgba(0,0,0,.1)}.navbar-light .navbar-toggler-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")}.navbar-light .navbar-text{color:rgba(0,0,0,.55)}.navbar-light .navbar-text a,.navbar-light .navbar-text a:focus,.navbar-light .navbar-text a:hover{color:rgba(0,0,0,.9)}.navbar-dark .navbar-brand{color:#fff}.navbar-dark .navbar-brand:focus,.navbar-dark .navbar-brand:hover{color:#fff}.navbar-dark .navbar-nav .nav-link{color:rgba(255,255,255,.55)}.navbar-dark .navbar-nav .nav-link:focus,.navbar-dark .navbar-nav .nav-link:hover{color:rgba(255,255,255,.75)}.navbar-dark .navbar-nav .nav-link.disabled{color:rgba(255,255,255,.25)}.navbar-dark .navbar-nav .nav-link.active,.navbar-dark .navbar-nav .show>.nav-link{color:#fff}.navbar-dark .navbar-toggler{color:rgba(255,255,255,.55);border-color:rgba(255,255,255,.1)}.navbar-dark .navbar-toggler-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")}.navbar-dark .navbar-text{color:rgba(255,255,255,.55)}.navbar-dark .navbar-text a,.navbar-dark .navbar-text a:focus,.navbar-dark .navbar-text a:hover{color:#fff}.card{position:relative;display:-webkit-flex;display:-moz-box;display:flex;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,.125);-moz-border-radius:.25rem;border-radius:.25rem}.card>hr{margin-right:0;margin-left:0}.card>.list-group{border-top:inherit;border-bottom:inherit}.card>.list-group:first-child{border-top-width:0;-moz-border-radius-topleft:-moz-calc(.25rem - 1px);border-top-left-radius:calc(.25rem - 1px);-moz-border-radius-topright:-moz-calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.card>.list-group:last-child{border-bottom-width:0;-moz-border-radius-bottomright:-moz-calc(.25rem - 1px);border-bottom-right-radius:calc(.25rem - 1px);-moz-border-radius-bottomleft:-moz-calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.card>.card-header+.list-group,.card>.list-group+.card-footer{border-top:0}.card-body{-webkit-flex:1 1 auto;-moz-box-flex:1;flex:1 1 auto;padding:1rem 1rem}.card-title{margin-bottom:.5rem}.card-subtitle{margin-top:-.25rem;margin-bottom:0}.card-text:last-child{margin-bottom:0}.card-link:hover{text-decoration:none}.card-link+.card-link{margin-left:1rem}.card-header{padding:.5rem 1rem;margin-bottom:0;background-color:rgba(0,0,0,.03);border-bottom:1px solid rgba(0,0,0,.125)}.card-header:first-child{-moz-border-radius:-moz-calc(.25rem - 1px) -moz-calc(.25rem - 1px) 0 0;border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0}.card-footer{padding:.5rem 1rem;background-color:rgba(0,0,0,.03);border-top:1px solid rgba(0,0,0,.125)}.card-footer:last-child{-moz-border-radius:0 0 -moz-calc(.25rem - 1px) -moz-calc(.25rem - 1px);border-radius:0 0 calc(.25rem - 1px) calc(.25rem - 1px)}.card-header-tabs{margin-right:-.5rem;margin-bottom:-.5rem;margin-left:-.5rem;border-bottom:0}.card-header-pills{margin-right:-.5rem;margin-left:-.5rem}.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:1rem;-moz-border-radius:-moz-calc(.25rem - 1px);border-radius:calc(.25rem - 1px)}.card-img,.card-img-bottom,.card-img-top{width:100%}.card-img,.card-img-top{-moz-border-radius-topleft:-moz-calc(.25rem - 1px);border-top-left-radius:calc(.25rem - 1px);-moz-border-radius-topright:-moz-calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.card-img,.card-img-bottom{-moz-border-radius-bottomright:-moz-calc(.25rem - 1px);border-bottom-right-radius:calc(.25rem - 1px);-moz-border-radius-bottomleft:-moz-calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.card-group>.card{margin-bottom:.75rem}@media (min-width:576px){.card-group{display:-webkit-flex;display:-moz-box;display:flex;-webkit-flex-flow:row wrap;-moz-box-orient:horizontal;-moz-box-direction:normal;flex-flow:row wrap}.card-group>.card{-webkit-flex:1 0;-moz-box-flex:1;flex:1 0;margin-bottom:0}.card-group>.card+.card{margin-left:0;border-left:0}.card-group>.card:not(:last-child){-moz-border-radius-topright:0;border-top-right-radius:0;-moz-border-radius-bottomright:0;border-bottom-right-radius:0}.card-group>.card:not(:last-child) .card-header,.card-group>.card:not(:last-child) .card-img-top{-moz-border-radius-topright:0;border-top-right-radius:0}.card-group>.card:not(:last-child) .card-footer,.card-group>.card:not(:last-child) .card-img-bottom{-moz-border-radius-bottomright:0;border-bottom-right-radius:0}.card-group>.card:not(:first-child){-moz-border-radius-topleft:0;border-top-left-radius:0;-moz-border-radius-bottomleft:0;border-bottom-left-radius:0}.card-group>.card:not(:first-child) .card-header,.card-group>.card:not(:first-child) .card-img-top{-moz-border-radius-topleft:0;border-top-left-radius:0}.card-group>.card:not(:first-child) .card-footer,.card-group>.card:not(:first-child) .card-img-bottom{-moz-border-radius-bottomleft:0;border-bottom-left-radius:0}}.accordion-button{position:relative;display:-webkit-flex;display:-moz-box;display:flex;-webkit-align-items:center;-moz-box-align:center;align-items:center;width:100%;padding:1rem 1.25rem;font-size:1rem;color:#212529;background-color:transparent;border:1px solid rgba(0,0,0,.125);-moz-border-radius:0;border-radius:0;overflow-anchor:none;-moz-transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,border-radius .15s ease,-moz-box-shadow .15s ease-in-out,-moz-border-radius .15s ease;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,border-radius .15s ease;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,border-radius .15s ease,-moz-box-shadow .15s ease-in-out,-moz-border-radius .15s ease}@media (prefers-reduced-motion:reduce){.accordion-button{-moz-transition:none;transition:none}}.accordion-button.collapsed{border-bottom-width:0}.accordion-button:not(.collapsed){color:#0c63e4;background-color:#e7f1ff}.accordion-button:not(.collapsed)::after{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%230c63e4'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\");-webkit-transform:rotate(180deg);-moz-transform:rotate(180deg);transform:rotate(180deg)}.accordion-button::after{-webkit-flex-shrink:0;flex-shrink:0;width:1.25rem;height:1.25rem;margin-left:auto;content:\"\";background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-size:1.25rem;transition:-webkit-transform .2s ease-in-out;-moz-transition:transform .2s ease-in-out, -moz-transform .2s ease-in-out;transition:transform .2s ease-in-out;transition:transform .2s ease-in-out, -webkit-transform .2s ease-in-out, -moz-transform .2s ease-in-out}@media (prefers-reduced-motion:reduce){.accordion-button::after{-moz-transition:none;transition:none}}.accordion-button:hover{z-index:2}.accordion-button:focus{z-index:3;border-color:#86b7fe;outline:0;-moz-box-shadow:0 0 0 .25rem rgba(13,110,253,.25);box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.accordion-header{margin-bottom:0}.accordion-item:first-of-type .accordion-button{-moz-border-radius-topleft:.25rem;border-top-left-radius:.25rem;-moz-border-radius-topright:.25rem;border-top-right-radius:.25rem}.accordion-item:last-of-type .accordion-button.collapsed{border-bottom-width:1px;-moz-border-radius-bottomright:.25rem;border-bottom-right-radius:.25rem;-moz-border-radius-bottomleft:.25rem;border-bottom-left-radius:.25rem}.accordion-item:last-of-type .accordion-collapse{border-bottom-width:1px;-moz-border-radius-bottomright:.25rem;border-bottom-right-radius:.25rem;-moz-border-radius-bottomleft:.25rem;border-bottom-left-radius:.25rem}.accordion-collapse{border:solid rgba(0,0,0,.125);border-width:0 1px}.accordion-body{padding:1rem 1.25rem}.accordion-flush .accordion-button{border-right:0;border-left:0;-moz-border-radius:0;border-radius:0}.accordion-flush .accordion-collapse{border-width:0}.accordion-flush .accordion-item:first-of-type .accordion-button{border-top-width:0;-moz-border-radius-topleft:0;border-top-left-radius:0;-moz-border-radius-topright:0;border-top-right-radius:0}.accordion-flush .accordion-item:last-of-type .accordion-button.collapsed{border-bottom-width:0;-moz-border-radius-bottomright:0;border-bottom-right-radius:0;-moz-border-radius-bottomleft:0;border-bottom-left-radius:0}.breadcrumb{display:-webkit-flex;display:-moz-box;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:0 0;margin-bottom:1rem;list-style:none}.breadcrumb-item+.breadcrumb-item{padding-left:.5rem}.breadcrumb-item+.breadcrumb-item::before{float:left;padding-right:.5rem;color:#6c757d;content:var(--bs-breadcrumb-divider, \"/\")}.breadcrumb-item.active{color:#6c757d}.pagination{display:-webkit-flex;display:-moz-box;display:flex;padding-left:0;list-style:none}.page-link{position:relative;display:block;color:#0d6efd;text-decoration:none;background-color:#fff;border:1px solid #dee2e6;-moz-transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-moz-box-shadow .15s ease-in-out;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-moz-box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.page-link{-moz-transition:none;transition:none}}.page-link:hover{z-index:2;color:#0a58ca;background-color:#e9ecef;border-color:#dee2e6}.page-link:focus{z-index:3;color:#0a58ca;background-color:#e9ecef;outline:0;-moz-box-shadow:0 0 0 .25rem rgba(13,110,253,.25);box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.page-item:not(:first-child) .page-link{margin-left:-1px}.page-item.active .page-link{z-index:3;color:#fff;background-color:#0d6efd;border-color:#0d6efd}.page-item.disabled .page-link{color:#6c757d;pointer-events:none;background-color:#fff;border-color:#dee2e6}.page-link{padding:.375rem .75rem}.page-item:first-child .page-link{-moz-border-radius-topleft:.25rem;border-top-left-radius:.25rem;-moz-border-radius-bottomleft:.25rem;border-bottom-left-radius:.25rem}.page-item:last-child .page-link{-moz-border-radius-topright:.25rem;border-top-right-radius:.25rem;-moz-border-radius-bottomright:.25rem;border-bottom-right-radius:.25rem}.pagination-lg .page-link{padding:.75rem 1.5rem;font-size:1.25rem}.pagination-lg .page-item:first-child .page-link{-moz-border-radius-topleft:.3rem;border-top-left-radius:.3rem;-moz-border-radius-bottomleft:.3rem;border-bottom-left-radius:.3rem}.pagination-lg .page-item:last-child .page-link{-moz-border-radius-topright:.3rem;border-top-right-radius:.3rem;-moz-border-radius-bottomright:.3rem;border-bottom-right-radius:.3rem}.pagination-sm .page-link{padding:.25rem .5rem;font-size:.875rem}.pagination-sm .page-item:first-child .page-link{-moz-border-radius-topleft:.2rem;border-top-left-radius:.2rem;-moz-border-radius-bottomleft:.2rem;border-bottom-left-radius:.2rem}.pagination-sm .page-item:last-child .page-link{-moz-border-radius-topright:.2rem;border-top-right-radius:.2rem;-moz-border-radius-bottomright:.2rem;border-bottom-right-radius:.2rem}.badge{display:inline-block;padding:.35em .65em;font-size:.75em;font-weight:700;line-height:1;color:#fff;text-align:center;white-space:nowrap;vertical-align:baseline;-moz-border-radius:.25rem;border-radius:.25rem}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.alert{position:relative;padding:1rem 1rem;margin-bottom:1rem;border:1px solid transparent;-moz-border-radius:.25rem;border-radius:.25rem}.alert-heading{color:inherit}.alert-link{font-weight:700}.alert-dismissible{padding-right:3rem}.alert-dismissible .btn-close{position:absolute;top:0;right:0;z-index:2;padding:1.25rem 1rem}.alert-primary{color:#084298;background-color:#cfe2ff;border-color:#b6d4fe}.alert-primary .alert-link{color:#06357a}.alert-secondary{color:#41464b;background-color:#e2e3e5;border-color:#d3d6d8}.alert-secondary .alert-link{color:#34383c}.alert-success{color:#0f5132;background-color:#d1e7dd;border-color:#badbcc}.alert-success .alert-link{color:#0c4128}.alert-info{color:#055160;background-color:#cff4fc;border-color:#b6effb}.alert-info .alert-link{color:#04414d}.alert-warning{color:#664d03;background-color:#fff3cd;border-color:#ffecb5}.alert-warning .alert-link{color:#523e02}.alert-danger{color:#842029;background-color:#f8d7da;border-color:#f5c2c7}.alert-danger .alert-link{color:#6a1a21}.alert-light{color:#636464;background-color:#fefefe;border-color:#fdfdfe}.alert-light .alert-link{color:#4f5050}.alert-dark{color:#141619;background-color:#d3d3d4;border-color:#bcbebf}.alert-dark .alert-link{color:#101214}@-webkit-keyframes progress-bar-stripes{0%{background-position-x:1rem}}@-moz-keyframes progress-bar-stripes{0%{background-position-x:1rem}}@keyframes progress-bar-stripes{0%{background-position-x:1rem}}.progress{display:-webkit-flex;display:-moz-box;display:flex;height:1rem;overflow:hidden;font-size:.75rem;background-color:#e9ecef;-moz-border-radius:.25rem;border-radius:.25rem}.progress-bar{display:-webkit-flex;display:-moz-box;display:flex;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;flex-direction:column;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;overflow:hidden;color:#fff;text-align:center;white-space:nowrap;background-color:#0d6efd;-moz-transition:width .6s ease;transition:width .6s ease}@media (prefers-reduced-motion:reduce){.progress-bar{-moz-transition:none;transition:none}}.progress-bar-striped{background-image:-moz-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-size:1rem 1rem}.progress-bar-animated{-webkit-animation:1s linear infinite progress-bar-stripes;-moz-animation:1s linear infinite progress-bar-stripes;animation:1s linear infinite progress-bar-stripes}@media (prefers-reduced-motion:reduce){.progress-bar-animated{-webkit-animation:none;-moz-animation:none;animation:none}}.list-group{display:-webkit-flex;display:-moz-box;display:flex;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;flex-direction:column;padding-left:0;margin-bottom:0;-moz-border-radius:.25rem;border-radius:.25rem}.list-group-item-action{width:100%;color:#495057;text-align:inherit}.list-group-item-action:focus,.list-group-item-action:hover{z-index:1;color:#495057;text-decoration:none;background-color:#f8f9fa}.list-group-item-action:active{color:#212529;background-color:#e9ecef}.list-group-item{position:relative;display:block;padding:.5rem 1rem;text-decoration:none;background-color:#fff;border:1px solid rgba(0,0,0,.125)}.list-group-item:first-child{-moz-border-radius-topleft:inherit;border-top-left-radius:inherit;-moz-border-radius-topright:inherit;border-top-right-radius:inherit}.list-group-item:last-child{-moz-border-radius-bottomright:inherit;border-bottom-right-radius:inherit;-moz-border-radius-bottomleft:inherit;border-bottom-left-radius:inherit}.list-group-item.disabled,.list-group-item:disabled{color:#6c757d;pointer-events:none;background-color:#fff}.list-group-item.active{z-index:2;color:#fff;background-color:#0d6efd;border-color:#0d6efd}.list-group-item+.list-group-item{border-top-width:0}.list-group-item+.list-group-item.active{margin-top:-1px;border-top-width:1px}.list-group-horizontal{-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;flex-direction:row}.list-group-horizontal>.list-group-item:first-child{-moz-border-radius-bottomleft:.25rem;border-bottom-left-radius:.25rem;-moz-border-radius-topright:0;border-top-right-radius:0}.list-group-horizontal>.list-group-item:last-child{-moz-border-radius-topright:.25rem;border-top-right-radius:.25rem;-moz-border-radius-bottomleft:0;border-bottom-left-radius:0}.list-group-horizontal>.list-group-item.active{margin-top:0}.list-group-horizontal>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}@media (min-width:576px){.list-group-horizontal-sm{-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;flex-direction:row}.list-group-horizontal-sm>.list-group-item:first-child{-moz-border-radius-bottomleft:.25rem;border-bottom-left-radius:.25rem;-moz-border-radius-topright:0;border-top-right-radius:0}.list-group-horizontal-sm>.list-group-item:last-child{-moz-border-radius-topright:.25rem;border-top-right-radius:.25rem;-moz-border-radius-bottomleft:0;border-bottom-left-radius:0}.list-group-horizontal-sm>.list-group-item.active{margin-top:0}.list-group-horizontal-sm>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-sm>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width:768px){.list-group-horizontal-md{-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;flex-direction:row}.list-group-horizontal-md>.list-group-item:first-child{-moz-border-radius-bottomleft:.25rem;border-bottom-left-radius:.25rem;-moz-border-radius-topright:0;border-top-right-radius:0}.list-group-horizontal-md>.list-group-item:last-child{-moz-border-radius-topright:.25rem;border-top-right-radius:.25rem;-moz-border-radius-bottomleft:0;border-bottom-left-radius:0}.list-group-horizontal-md>.list-group-item.active{margin-top:0}.list-group-horizontal-md>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-md>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width:992px){.list-group-horizontal-lg{-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;flex-direction:row}.list-group-horizontal-lg>.list-group-item:first-child{-moz-border-radius-bottomleft:.25rem;border-bottom-left-radius:.25rem;-moz-border-radius-topright:0;border-top-right-radius:0}.list-group-horizontal-lg>.list-group-item:last-child{-moz-border-radius-topright:.25rem;border-top-right-radius:.25rem;-moz-border-radius-bottomleft:0;border-bottom-left-radius:0}.list-group-horizontal-lg>.list-group-item.active{margin-top:0}.list-group-horizontal-lg>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-lg>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width:1200px){.list-group-horizontal-xl{-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;flex-direction:row}.list-group-horizontal-xl>.list-group-item:first-child{-moz-border-radius-bottomleft:.25rem;border-bottom-left-radius:.25rem;-moz-border-radius-topright:0;border-top-right-radius:0}.list-group-horizontal-xl>.list-group-item:last-child{-moz-border-radius-topright:.25rem;border-top-right-radius:.25rem;-moz-border-radius-bottomleft:0;border-bottom-left-radius:0}.list-group-horizontal-xl>.list-group-item.active{margin-top:0}.list-group-horizontal-xl>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-xl>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width:1400px){.list-group-horizontal-xxl{-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;flex-direction:row}.list-group-horizontal-xxl>.list-group-item:first-child{-moz-border-radius-bottomleft:.25rem;border-bottom-left-radius:.25rem;-moz-border-radius-topright:0;border-top-right-radius:0}.list-group-horizontal-xxl>.list-group-item:last-child{-moz-border-radius-topright:.25rem;border-top-right-radius:.25rem;-moz-border-radius-bottomleft:0;border-bottom-left-radius:0}.list-group-horizontal-xxl>.list-group-item.active{margin-top:0}.list-group-horizontal-xxl>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-xxl>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}.list-group-flush{-moz-border-radius:0;border-radius:0}.list-group-flush>.list-group-item{border-width:0 0 1px}.list-group-flush>.list-group-item:last-child{border-bottom-width:0}.list-group-item-primary{color:#084298;background-color:#cfe2ff}.list-group-item-primary.list-group-item-action:focus,.list-group-item-primary.list-group-item-action:hover{color:#084298;background-color:#bacbe6}.list-group-item-primary.list-group-item-action.active{color:#fff;background-color:#084298;border-color:#084298}.list-group-item-secondary{color:#41464b;background-color:#e2e3e5}.list-group-item-secondary.list-group-item-action:focus,.list-group-item-secondary.list-group-item-action:hover{color:#41464b;background-color:#cbccce}.list-group-item-secondary.list-group-item-action.active{color:#fff;background-color:#41464b;border-color:#41464b}.list-group-item-success{color:#0f5132;background-color:#d1e7dd}.list-group-item-success.list-group-item-action:focus,.list-group-item-success.list-group-item-action:hover{color:#0f5132;background-color:#bcd0c7}.list-group-item-success.list-group-item-action.active{color:#fff;background-color:#0f5132;border-color:#0f5132}.list-group-item-info{color:#055160;background-color:#cff4fc}.list-group-item-info.list-group-item-action:focus,.list-group-item-info.list-group-item-action:hover{color:#055160;background-color:#badce3}.list-group-item-info.list-group-item-action.active{color:#fff;background-color:#055160;border-color:#055160}.list-group-item-warning{color:#664d03;background-color:#fff3cd}.list-group-item-warning.list-group-item-action:focus,.list-group-item-warning.list-group-item-action:hover{color:#664d03;background-color:#e6dbb9}.list-group-item-warning.list-group-item-action.active{color:#fff;background-color:#664d03;border-color:#664d03}.list-group-item-danger{color:#842029;background-color:#f8d7da}.list-group-item-danger.list-group-item-action:focus,.list-group-item-danger.list-group-item-action:hover{color:#842029;background-color:#dfc2c4}.list-group-item-danger.list-group-item-action.active{color:#fff;background-color:#842029;border-color:#842029}.list-group-item-light{color:#636464;background-color:#fefefe}.list-group-item-light.list-group-item-action:focus,.list-group-item-light.list-group-item-action:hover{color:#636464;background-color:#e5e5e5}.list-group-item-light.list-group-item-action.active{color:#fff;background-color:#636464;border-color:#636464}.list-group-item-dark{color:#141619;background-color:#d3d3d4}.list-group-item-dark.list-group-item-action:focus,.list-group-item-dark.list-group-item-action:hover{color:#141619;background-color:#bebebf}.list-group-item-dark.list-group-item-action.active{color:#fff;background-color:#141619;border-color:#141619}.btn-close{-moz-box-sizing:content-box;box-sizing:content-box;width:1em;height:1em;padding:.25em .25em;color:#000;background:transparent url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e\") center/1em auto no-repeat;border:0;-moz-border-radius:.25rem;border-radius:.25rem;opacity:.5}.btn-close:hover{color:#000;text-decoration:none;opacity:.75}.btn-close:focus{outline:0;-moz-box-shadow:0 0 0 .25rem rgba(13,110,253,.25);box-shadow:0 0 0 .25rem rgba(13,110,253,.25);opacity:1}.btn-close.disabled,.btn-close:disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:.25}.btn-close-white{-webkit-filter:invert(1) grayscale(100%) brightness(200%);filter:invert(1) grayscale(100%) brightness(200%)}.toast{width:350px;max-width:100%;font-size:.875rem;pointer-events:auto;background-color:rgba(255,255,255,.85);background-clip:padding-box;border:1px solid rgba(0,0,0,.1);-moz-box-shadow:0 .5rem 1rem rgba(0,0,0,.15);box-shadow:0 .5rem 1rem rgba(0,0,0,.15);-moz-border-radius:.25rem;border-radius:.25rem}.toast:not(.showing):not(.show){opacity:0}.toast.hide{display:none}.toast-container{width:-webkit-max-content;width:-moz-max-content;width:max-content;max-width:100%;pointer-events:none}.toast-container>:not(:last-child){margin-bottom:.75rem}.toast-header{display:-webkit-flex;display:-moz-box;display:flex;-webkit-align-items:center;-moz-box-align:center;align-items:center;padding:.5rem .75rem;color:#6c757d;background-color:rgba(255,255,255,.85);background-clip:padding-box;border-bottom:1px solid rgba(0,0,0,.05);-moz-border-radius-topleft:-moz-calc(.25rem - 1px);border-top-left-radius:calc(.25rem - 1px);-moz-border-radius-topright:-moz-calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.toast-header .btn-close{margin-right:-.375rem;margin-left:.75rem}.toast-body{padding:.75rem}.modal-open{overflow:hidden}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal{position:fixed;top:0;left:0;z-index:1050;display:none;width:100%;height:100%;overflow:hidden;outline:0}.modal-dialog{position:relative;width:auto;margin:.5rem;pointer-events:none}.modal.fade .modal-dialog{transition:-webkit-transform .3s ease-out;-moz-transition:transform .3s ease-out, -moz-transform .3s ease-out;transition:transform .3s ease-out;transition:transform .3s ease-out, -webkit-transform .3s ease-out, -moz-transform .3s ease-out;-webkit-transform:translate(0,-50px);-moz-transform:translate(0,-50px);transform:translate(0,-50px)}@media (prefers-reduced-motion:reduce){.modal.fade .modal-dialog{-moz-transition:none;transition:none}}.modal.show .modal-dialog{-webkit-transform:none;-moz-transform:none;transform:none}.modal.modal-static .modal-dialog{-webkit-transform:scale(1.02);-moz-transform:scale(1.02);transform:scale(1.02)}.modal-dialog-scrollable{height:-moz-calc(100% - 1rem);height:calc(100% - 1rem)}.modal-dialog-scrollable .modal-content{max-height:100%;overflow:hidden}.modal-dialog-scrollable .modal-body{overflow-y:auto}.modal-dialog-centered{display:-webkit-flex;display:-moz-box;display:flex;-webkit-align-items:center;-moz-box-align:center;align-items:center;min-height:-moz-calc(100% - 1rem);min-height:calc(100% - 1rem)}.modal-content{position:relative;display:-webkit-flex;display:-moz-box;display:flex;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;flex-direction:column;width:100%;pointer-events:auto;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);-moz-border-radius:.3rem;border-radius:.3rem;outline:0}.modal-backdrop{position:fixed;top:0;left:0;z-index:1040;width:100vw;height:100vh;background-color:#000}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:.5}.modal-header{display:-webkit-flex;display:-moz-box;display:flex;-webkit-flex-shrink:0;flex-shrink:0;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-justify-content:space-between;-moz-box-pack:justify;justify-content:space-between;padding:1rem 1rem;border-bottom:1px solid #dee2e6;-moz-border-radius-topleft:-moz-calc(.3rem - 1px);border-top-left-radius:calc(.3rem - 1px);-moz-border-radius-topright:-moz-calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.modal-header .btn-close{padding:.5rem .5rem;margin:-.5rem -.5rem -.5rem auto}.modal-title{margin-bottom:0;line-height:1.5}.modal-body{position:relative;-webkit-flex:1 1 auto;-moz-box-flex:1;flex:1 1 auto;padding:1rem}.modal-footer{display:-webkit-flex;display:-moz-box;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-flex-shrink:0;flex-shrink:0;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-justify-content:flex-end;-moz-box-pack:end;justify-content:flex-end;padding:.75rem;border-top:1px solid #dee2e6;-moz-border-radius-bottomright:-moz-calc(.3rem - 1px);border-bottom-right-radius:calc(.3rem - 1px);-moz-border-radius-bottomleft:-moz-calc(.3rem - 1px);border-bottom-left-radius:calc(.3rem - 1px)}.modal-footer>*{margin:.25rem}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media (min-width:576px){.modal-dialog{max-width:500px;margin:1.75rem auto}.modal-dialog-scrollable{height:-moz-calc(100% - 3.5rem);height:calc(100% - 3.5rem)}.modal-dialog-centered{min-height:-moz-calc(100% - 3.5rem);min-height:calc(100% - 3.5rem)}.modal-sm{max-width:300px}}@media (min-width:992px){.modal-lg,.modal-xl{max-width:800px}}@media (min-width:1200px){.modal-xl{max-width:1140px}}.modal-fullscreen{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen .modal-content{height:100%;border:0;-moz-border-radius:0;border-radius:0}.modal-fullscreen .modal-header{-moz-border-radius:0;border-radius:0}.modal-fullscreen .modal-body{overflow-y:auto}.modal-fullscreen .modal-footer{-moz-border-radius:0;border-radius:0}@media (max-width:575.98px){.modal-fullscreen-sm-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-sm-down .modal-content{height:100%;border:0;-moz-border-radius:0;border-radius:0}.modal-fullscreen-sm-down .modal-header{-moz-border-radius:0;border-radius:0}.modal-fullscreen-sm-down .modal-body{overflow-y:auto}.modal-fullscreen-sm-down .modal-footer{-moz-border-radius:0;border-radius:0}}@media (max-width:767.98px){.modal-fullscreen-md-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-md-down .modal-content{height:100%;border:0;-moz-border-radius:0;border-radius:0}.modal-fullscreen-md-down .modal-header{-moz-border-radius:0;border-radius:0}.modal-fullscreen-md-down .modal-body{overflow-y:auto}.modal-fullscreen-md-down .modal-footer{-moz-border-radius:0;border-radius:0}}@media (max-width:991.98px){.modal-fullscreen-lg-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-lg-down .modal-content{height:100%;border:0;-moz-border-radius:0;border-radius:0}.modal-fullscreen-lg-down .modal-header{-moz-border-radius:0;border-radius:0}.modal-fullscreen-lg-down .modal-body{overflow-y:auto}.modal-fullscreen-lg-down .modal-footer{-moz-border-radius:0;border-radius:0}}@media (max-width:1199.98px){.modal-fullscreen-xl-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-xl-down .modal-content{height:100%;border:0;-moz-border-radius:0;border-radius:0}.modal-fullscreen-xl-down .modal-header{-moz-border-radius:0;border-radius:0}.modal-fullscreen-xl-down .modal-body{overflow-y:auto}.modal-fullscreen-xl-down .modal-footer{-moz-border-radius:0;border-radius:0}}@media (max-width:1399.98px){.modal-fullscreen-xxl-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-xxl-down .modal-content{height:100%;border:0;-moz-border-radius:0;border-radius:0}.modal-fullscreen-xxl-down .modal-header{-moz-border-radius:0;border-radius:0}.modal-fullscreen-xxl-down .modal-body{overflow-y:auto}.modal-fullscreen-xxl-down .modal-footer{-moz-border-radius:0;border-radius:0}}.tooltip{position:absolute;z-index:1070;display:block;margin:0;font-family:var(--bs-font-sans-serif);font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;opacity:0}.tooltip.show{opacity:.9}.tooltip .tooltip-arrow{position:absolute;display:block;width:.8rem;height:.4rem}.tooltip .tooltip-arrow::before{position:absolute;content:\"\";border-color:transparent;border-style:solid}.bs-tooltip-auto[data-popper-placement^=top],.bs-tooltip-top{padding:.4rem 0}.bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow,.bs-tooltip-top .tooltip-arrow{bottom:0}.bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow::before,.bs-tooltip-top .tooltip-arrow::before{top:-1px;border-width:.4rem .4rem 0;border-top-color:#000}.bs-tooltip-auto[data-popper-placement^=right],.bs-tooltip-end{padding:0 .4rem}.bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow,.bs-tooltip-end .tooltip-arrow{left:0;width:.4rem;height:.8rem}.bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow::before,.bs-tooltip-end .tooltip-arrow::before{right:-1px;border-width:.4rem .4rem .4rem 0;border-right-color:#000}.bs-tooltip-auto[data-popper-placement^=bottom],.bs-tooltip-bottom{padding:.4rem 0}.bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow,.bs-tooltip-bottom .tooltip-arrow{top:0}.bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow::before,.bs-tooltip-bottom .tooltip-arrow::before{bottom:-1px;border-width:0 .4rem .4rem;border-bottom-color:#000}.bs-tooltip-auto[data-popper-placement^=left],.bs-tooltip-start{padding:0 .4rem}.bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow,.bs-tooltip-start .tooltip-arrow{right:0;width:.4rem;height:.8rem}.bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow::before,.bs-tooltip-start .tooltip-arrow::before{left:-1px;border-width:.4rem 0 .4rem .4rem;border-left-color:#000}.tooltip-inner{max-width:200px;padding:.25rem .5rem;color:#fff;text-align:center;background-color:#000;-moz-border-radius:.25rem;border-radius:.25rem}.popover{position:absolute;top:0;left:0;z-index:1060;display:block;max-width:276px;font-family:var(--bs-font-sans-serif);font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);-moz-border-radius:.3rem;border-radius:.3rem}.popover .popover-arrow{position:absolute;display:block;width:1rem;height:.5rem;margin:0 .3rem}.popover .popover-arrow::after,.popover .popover-arrow::before{position:absolute;display:block;content:\"\";border-color:transparent;border-style:solid}.bs-popover-auto[data-popper-placement^=top],.bs-popover-top{margin-bottom:.5rem!important}.bs-popover-auto[data-popper-placement^=top]>.popover-arrow,.bs-popover-top>.popover-arrow{bottom:-moz-calc(-.5rem - 1px);bottom:calc(-.5rem - 1px)}.bs-popover-auto[data-popper-placement^=top]>.popover-arrow::before,.bs-popover-top>.popover-arrow::before{bottom:0;border-width:.5rem .5rem 0;border-top-color:rgba(0,0,0,.25)}.bs-popover-auto[data-popper-placement^=top]>.popover-arrow::after,.bs-popover-top>.popover-arrow::after{bottom:1px;border-width:.5rem .5rem 0;border-top-color:#fff}.bs-popover-auto[data-popper-placement^=right],.bs-popover-end{margin-left:.5rem!important}.bs-popover-auto[data-popper-placement^=right]>.popover-arrow,.bs-popover-end>.popover-arrow{left:-moz-calc(-.5rem - 1px);left:calc(-.5rem - 1px);width:.5rem;height:1rem;margin:.3rem 0}.bs-popover-auto[data-popper-placement^=right]>.popover-arrow::before,.bs-popover-end>.popover-arrow::before{left:0;border-width:.5rem .5rem .5rem 0;border-right-color:rgba(0,0,0,.25)}.bs-popover-auto[data-popper-placement^=right]>.popover-arrow::after,.bs-popover-end>.popover-arrow::after{left:1px;border-width:.5rem .5rem .5rem 0;border-right-color:#fff}.bs-popover-auto[data-popper-placement^=bottom],.bs-popover-bottom{margin-top:.5rem!important}.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow,.bs-popover-bottom>.popover-arrow{top:-moz-calc(-.5rem - 1px);top:calc(-.5rem - 1px)}.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow::before,.bs-popover-bottom>.popover-arrow::before{top:0;border-width:0 .5rem .5rem .5rem;border-bottom-color:rgba(0,0,0,.25)}.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow::after,.bs-popover-bottom>.popover-arrow::after{top:1px;border-width:0 .5rem .5rem .5rem;border-bottom-color:#fff}.bs-popover-auto[data-popper-placement^=bottom] .popover-header::before,.bs-popover-bottom .popover-header::before{position:absolute;top:0;left:50%;display:block;width:1rem;margin-left:-.5rem;content:\"\";border-bottom:1px solid #f0f0f0}.bs-popover-auto[data-popper-placement^=left],.bs-popover-start{margin-right:.5rem!important}.bs-popover-auto[data-popper-placement^=left]>.popover-arrow,.bs-popover-start>.popover-arrow{right:-moz-calc(-.5rem - 1px);right:calc(-.5rem - 1px);width:.5rem;height:1rem;margin:.3rem 0}.bs-popover-auto[data-popper-placement^=left]>.popover-arrow::before,.bs-popover-start>.popover-arrow::before{right:0;border-width:.5rem 0 .5rem .5rem;border-left-color:rgba(0,0,0,.25)}.bs-popover-auto[data-popper-placement^=left]>.popover-arrow::after,.bs-popover-start>.popover-arrow::after{right:1px;border-width:.5rem 0 .5rem .5rem;border-left-color:#fff}.popover-header{padding:.5rem 1rem;margin-bottom:0;font-size:1rem;background-color:#f0f0f0;border-bottom:1px solid #d8d8d8;-moz-border-radius-topleft:-moz-calc(.3rem - 1px);border-top-left-radius:calc(.3rem - 1px);-moz-border-radius-topright:-moz-calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.popover-header:empty{display:none}.popover-body{padding:1rem 1rem;color:#212529}.carousel{position:relative}.carousel.pointer-event{touch-action:pan-y}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-inner::after{display:block;clear:both;content:\"\"}.carousel-item{position:relative;display:none;float:left;width:100%;margin-right:-100%;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;backface-visibility:hidden;transition:-webkit-transform .6s ease-in-out;-moz-transition:transform .6s ease-in-out, -moz-transform .6s ease-in-out;transition:transform .6s ease-in-out;transition:transform .6s ease-in-out, -webkit-transform .6s ease-in-out, -moz-transform .6s ease-in-out}@media (prefers-reduced-motion:reduce){.carousel-item{-moz-transition:none;transition:none}}.carousel-item-next,.carousel-item-prev,.carousel-item.active{display:block}.active.carousel-item-end,.carousel-item-next:not(.carousel-item-start){-webkit-transform:translateX(100%);-moz-transform:translateX(100%);transform:translateX(100%)}.active.carousel-item-start,.carousel-item-prev:not(.carousel-item-end){-webkit-transform:translateX(-100%);-moz-transform:translateX(-100%);transform:translateX(-100%)}.carousel-fade .carousel-item{opacity:0;-moz-transition-property:opacity;transition-property:opacity;-webkit-transform:none;-moz-transform:none;transform:none}.carousel-fade .carousel-item-next.carousel-item-start,.carousel-fade .carousel-item-prev.carousel-item-end,.carousel-fade .carousel-item.active{z-index:1;opacity:1}.carousel-fade .active.carousel-item-end,.carousel-fade .active.carousel-item-start{z-index:0;opacity:0;-moz-transition:opacity 0s .6s;transition:opacity 0s .6s}@media (prefers-reduced-motion:reduce){.carousel-fade .active.carousel-item-end,.carousel-fade .active.carousel-item-start{-moz-transition:none;transition:none}}.carousel-control-next,.carousel-control-prev{position:absolute;top:0;bottom:0;z-index:1;display:-webkit-flex;display:-moz-box;display:flex;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;width:15%;color:#fff;text-align:center;opacity:.5;-moz-transition:opacity .15s ease;transition:opacity .15s ease}@media (prefers-reduced-motion:reduce){.carousel-control-next,.carousel-control-prev{-moz-transition:none;transition:none}}.carousel-control-next:focus,.carousel-control-next:hover,.carousel-control-prev:focus,.carousel-control-prev:hover{color:#fff;text-decoration:none;outline:0;opacity:.9}.carousel-control-prev{left:0}.carousel-control-next{right:0}.carousel-control-next-icon,.carousel-control-prev-icon{display:inline-block;width:2rem;height:2rem;background-repeat:no-repeat;background-position:50%;background-size:100% 100%}.carousel-control-prev-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e\")}.carousel-control-next-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\")}.carousel-indicators{position:absolute;right:0;bottom:0;left:0;z-index:2;display:-webkit-flex;display:-moz-box;display:flex;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;padding-left:0;margin-right:15%;margin-left:15%;list-style:none}.carousel-indicators li{-moz-box-sizing:content-box;box-sizing:content-box;-webkit-flex:0 1 auto;-moz-box-flex:0;flex:0 1 auto;width:30px;height:3px;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:#fff;background-clip:padding-box;border-top:10px solid transparent;border-bottom:10px solid transparent;opacity:.5;-moz-transition:opacity .6s ease;transition:opacity .6s ease}@media (prefers-reduced-motion:reduce){.carousel-indicators li{-moz-transition:none;transition:none}}.carousel-indicators .active{opacity:1}.carousel-caption{position:absolute;right:15%;bottom:1.25rem;left:15%;padding-top:1.25rem;padding-bottom:1.25rem;color:#fff;text-align:center}.carousel-dark .carousel-control-next-icon,.carousel-dark .carousel-control-prev-icon{-webkit-filter:invert(1) grayscale(100);filter:invert(1) grayscale(100)}.carousel-dark .carousel-indicators li{background-color:#000}.carousel-dark .carousel-caption{color:#000}@-webkit-keyframes spinner-border{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-moz-keyframes spinner-border{to{-moz-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-border{to{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);transform:rotate(360deg)}}.spinner-border{display:inline-block;width:2rem;height:2rem;vertical-align:text-bottom;border:.25em solid currentColor;border-right-color:transparent;-moz-border-radius:50%;border-radius:50%;-webkit-animation:.75s linear infinite spinner-border;-moz-animation:.75s linear infinite spinner-border;animation:.75s linear infinite spinner-border}.spinner-border-sm{width:1rem;height:1rem;border-width:.2em}@-webkit-keyframes spinner-grow{0%{-webkit-transform:scale(0);transform:scale(0)}50%{opacity:1;-webkit-transform:none;transform:none}}@-moz-keyframes spinner-grow{0%{-moz-transform:scale(0);transform:scale(0)}50%{opacity:1;-moz-transform:none;transform:none}}@keyframes spinner-grow{0%{-webkit-transform:scale(0);-moz-transform:scale(0);transform:scale(0)}50%{opacity:1;-webkit-transform:none;-moz-transform:none;transform:none}}.spinner-grow{display:inline-block;width:2rem;height:2rem;vertical-align:text-bottom;background-color:currentColor;-moz-border-radius:50%;border-radius:50%;opacity:0;-webkit-animation:.75s linear infinite spinner-grow;-moz-animation:.75s linear infinite spinner-grow;animation:.75s linear infinite spinner-grow}.spinner-grow-sm{width:1rem;height:1rem}@media (prefers-reduced-motion:reduce){.spinner-border,.spinner-grow{-webkit-animation-duration:1.5s;-moz-animation-duration:1.5s;animation-duration:1.5s}}.clearfix::after{display:block;clear:both;content:\"\"}.link-primary{color:#0d6efd}.link-primary:focus,.link-primary:hover{color:#0a58ca}.link-secondary{color:#6c757d}.link-secondary:focus,.link-secondary:hover{color:#565e64}.link-success{color:#198754}.link-success:focus,.link-success:hover{color:#146c43}.link-info{color:#0dcaf0}.link-info:focus,.link-info:hover{color:#3dd5f3}.link-warning{color:#ffc107}.link-warning:focus,.link-warning:hover{color:#ffcd39}.link-danger{color:#dc3545}.link-danger:focus,.link-danger:hover{color:#b02a37}.link-light{color:#f8f9fa}.link-light:focus,.link-light:hover{color:#f9fafb}.link-dark{color:#212529}.link-dark:focus,.link-dark:hover{color:#1a1e21}.ratio{position:relative;width:100%}.ratio::before{display:block;padding-top:var(--aspect-ratio);content:\"\"}.ratio>*{position:absolute;top:0;left:0;width:100%;height:100%}.ratio-1x1{--aspect-ratio:100%}.ratio-4x3{--aspect-ratio:-moz-calc(3 / 4 * 100%);--aspect-ratio:calc(3 / 4 * 100%)}.ratio-16x9{--aspect-ratio:-moz-calc(9 / 16 * 100%);--aspect-ratio:calc(9 / 16 * 100%)}.ratio-21x9{--aspect-ratio:-moz-calc(9 / 21 * 100%);--aspect-ratio:calc(9 / 21 * 100%)}.fixed-top{position:fixed;top:0;right:0;left:0;z-index:1030}.fixed-bottom{position:fixed;right:0;bottom:0;left:0;z-index:1030}.sticky-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}@media (min-width:576px){.sticky-sm-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}}@media (min-width:768px){.sticky-md-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}}@media (min-width:992px){.sticky-lg-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}}@media (min-width:1200px){.sticky-xl-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}}@media (min-width:1400px){.sticky-xxl-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}}.visually-hidden,.visually-hidden-focusable:not(:focus){position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}.stretched-link::after{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;content:\"\"}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.align-baseline{vertical-align:baseline!important}.align-top{vertical-align:top!important}.align-middle{vertical-align:middle!important}.align-bottom{vertical-align:bottom!important}.align-text-bottom{vertical-align:text-bottom!important}.align-text-top{vertical-align:text-top!important}.float-start{float:left!important}.float-end{float:right!important}.float-none{float:none!important}.overflow-auto{overflow:auto!important}.overflow-hidden{overflow:hidden!important}.overflow-visible{overflow:visible!important}.overflow-scroll{overflow:scroll!important}.d-inline{display:inline!important}.d-inline-block{display:inline-block!important}.d-block{display:block!important}.d-grid{display:grid!important}.d-table{display:table!important}.d-table-row{display:table-row!important}.d-table-cell{display:table-cell!important}.d-flex{display:-webkit-flex!important;display:-moz-box!important;display:flex!important}.d-inline-flex{display:-webkit-inline-flex!important;display:-moz-inline-box!important;display:inline-flex!important}.d-none{display:none!important}.shadow{-moz-box-shadow:0 .5rem 1rem rgba(0,0,0,.15)!important;box-shadow:0 .5rem 1rem rgba(0,0,0,.15)!important}.shadow-sm{-moz-box-shadow:0 .125rem .25rem rgba(0,0,0,.075)!important;box-shadow:0 .125rem .25rem rgba(0,0,0,.075)!important}.shadow-lg{-moz-box-shadow:0 1rem 3rem rgba(0,0,0,.175)!important;box-shadow:0 1rem 3rem rgba(0,0,0,.175)!important}.shadow-none{-moz-box-shadow:none!important;box-shadow:none!important}.position-static{position:static!important}.position-relative{position:relative!important}.position-absolute{position:absolute!important}.position-fixed{position:fixed!important}.position-sticky{position:-webkit-sticky!important;position:sticky!important}.top-0{top:0!important}.top-50{top:50%!important}.top-100{top:100%!important}.bottom-0{bottom:0!important}.bottom-50{bottom:50%!important}.bottom-100{bottom:100%!important}.start-0{left:0!important}.start-50{left:50%!important}.start-100{left:100%!important}.end-0{right:0!important}.end-50{right:50%!important}.end-100{right:100%!important}.translate-middle{-webkit-transform:translate(-50%,-50%)!important;-moz-transform:translate(-50%,-50%)!important;transform:translate(-50%,-50%)!important}.translate-middle-x{-webkit-transform:translateX(-50%)!important;-moz-transform:translateX(-50%)!important;transform:translateX(-50%)!important}.translate-middle-y{-webkit-transform:translateY(-50%)!important;-moz-transform:translateY(-50%)!important;transform:translateY(-50%)!important}.border{border:1px solid #dee2e6!important}.border-0{border:0!important}.border-top{border-top:1px solid #dee2e6!important}.border-top-0{border-top:0!important}.border-end{border-right:1px solid #dee2e6!important}.border-end-0{border-right:0!important}.border-bottom{border-bottom:1px solid #dee2e6!important}.border-bottom-0{border-bottom:0!important}.border-start{border-left:1px solid #dee2e6!important}.border-start-0{border-left:0!important}.border-primary{border-color:#0d6efd!important}.border-secondary{border-color:#6c757d!important}.border-success{border-color:#198754!important}.border-info{border-color:#0dcaf0!important}.border-warning{border-color:#ffc107!important}.border-danger{border-color:#dc3545!important}.border-light{border-color:#f8f9fa!important}.border-dark{border-color:#212529!important}.border-white{border-color:#fff!important}.border-0{border-width:0!important}.border-1{border-width:1px!important}.border-2{border-width:2px!important}.border-3{border-width:3px!important}.border-4{border-width:4px!important}.border-5{border-width:5px!important}.w-25{width:25%!important}.w-50{width:50%!important}.w-75{width:75%!important}.w-100{width:100%!important}.w-auto{width:auto!important}.mw-100{max-width:100%!important}.vw-100{width:100vw!important}.min-vw-100{min-width:100vw!important}.h-25{height:25%!important}.h-50{height:50%!important}.h-75{height:75%!important}.h-100{height:100%!important}.h-auto{height:auto!important}.mh-100{max-height:100%!important}.vh-100{height:100vh!important}.min-vh-100{min-height:100vh!important}.flex-fill{-webkit-flex:1 1 auto!important;-moz-box-flex:1!important;flex:1 1 auto!important}.flex-row{-webkit-flex-direction:row!important;-moz-box-orient:horizontal!important;-moz-box-direction:normal!important;flex-direction:row!important}.flex-column{-webkit-flex-direction:column!important;-moz-box-orient:vertical!important;-moz-box-direction:normal!important;flex-direction:column!important}.flex-row-reverse{-webkit-flex-direction:row-reverse!important;-moz-box-orient:horizontal!important;-moz-box-direction:reverse!important;flex-direction:row-reverse!important}.flex-column-reverse{-webkit-flex-direction:column-reverse!important;-moz-box-orient:vertical!important;-moz-box-direction:reverse!important;flex-direction:column-reverse!important}.flex-grow-0{-webkit-flex-grow:0!important;-moz-box-flex:0!important;flex-grow:0!important}.flex-grow-1{-webkit-flex-grow:1!important;-moz-box-flex:1!important;flex-grow:1!important}.flex-shrink-0{-webkit-flex-shrink:0!important;flex-shrink:0!important}.flex-shrink-1{-webkit-flex-shrink:1!important;flex-shrink:1!important}.flex-wrap{-webkit-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-nowrap{-webkit-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-wrap-reverse{-webkit-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.gap-0{grid-gap:0!important;gap:0!important}.gap-1{grid-gap:.25rem!important;gap:.25rem!important}.gap-2{grid-gap:.5rem!important;gap:.5rem!important}.gap-3{grid-gap:1rem!important;gap:1rem!important}.gap-4{grid-gap:1.5rem!important;gap:1.5rem!important}.gap-5{grid-gap:3rem!important;gap:3rem!important}.justify-content-start{-webkit-justify-content:flex-start!important;-moz-box-pack:start!important;justify-content:flex-start!important}.justify-content-end{-webkit-justify-content:flex-end!important;-moz-box-pack:end!important;justify-content:flex-end!important}.justify-content-center{-webkit-justify-content:center!important;-moz-box-pack:center!important;justify-content:center!important}.justify-content-between{-webkit-justify-content:space-between!important;-moz-box-pack:justify!important;justify-content:space-between!important}.justify-content-around{-webkit-justify-content:space-around!important;justify-content:space-around!important}.justify-content-evenly{-webkit-justify-content:space-evenly!important;-moz-box-pack:space-evenly!important;justify-content:space-evenly!important}.align-items-start{-webkit-align-items:flex-start!important;-moz-box-align:start!important;align-items:flex-start!important}.align-items-end{-webkit-align-items:flex-end!important;-moz-box-align:end!important;align-items:flex-end!important}.align-items-center{-webkit-align-items:center!important;-moz-box-align:center!important;align-items:center!important}.align-items-baseline{-webkit-align-items:baseline!important;-moz-box-align:baseline!important;align-items:baseline!important}.align-items-stretch{-webkit-align-items:stretch!important;-moz-box-align:stretch!important;align-items:stretch!important}.align-content-start{-webkit-align-content:flex-start!important;align-content:flex-start!important}.align-content-end{-webkit-align-content:flex-end!important;align-content:flex-end!important}.align-content-center{-webkit-align-content:center!important;align-content:center!important}.align-content-between{-webkit-align-content:space-between!important;align-content:space-between!important}.align-content-around{-webkit-align-content:space-around!important;align-content:space-around!important}.align-content-stretch{-webkit-align-content:stretch!important;align-content:stretch!important}.align-self-auto{-webkit-align-self:auto!important;align-self:auto!important}.align-self-start{-webkit-align-self:flex-start!important;align-self:flex-start!important}.align-self-end{-webkit-align-self:flex-end!important;align-self:flex-end!important}.align-self-center{-webkit-align-self:center!important;align-self:center!important}.align-self-baseline{-webkit-align-self:baseline!important;align-self:baseline!important}.align-self-stretch{-webkit-align-self:stretch!important;align-self:stretch!important}.order-first{-webkit-order:-1!important;-moz-box-ordinal-group:0!important;order:-1!important}.order-0{-webkit-order:0!important;-moz-box-ordinal-group:1!important;order:0!important}.order-1{-webkit-order:1!important;-moz-box-ordinal-group:2!important;order:1!important}.order-2{-webkit-order:2!important;-moz-box-ordinal-group:3!important;order:2!important}.order-3{-webkit-order:3!important;-moz-box-ordinal-group:4!important;order:3!important}.order-4{-webkit-order:4!important;-moz-box-ordinal-group:5!important;order:4!important}.order-5{-webkit-order:5!important;-moz-box-ordinal-group:6!important;order:5!important}.order-last{-webkit-order:6!important;-moz-box-ordinal-group:7!important;order:6!important}.m-0{margin:0!important}.m-1{margin:.25rem!important}.m-2{margin:.5rem!important}.m-3{margin:1rem!important}.m-4{margin:1.5rem!important}.m-5{margin:3rem!important}.m-auto{margin:auto!important}.mx-0{margin-right:0!important;margin-left:0!important}.mx-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-3{margin-right:1rem!important;margin-left:1rem!important}.mx-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-5{margin-right:3rem!important;margin-left:3rem!important}.mx-auto{margin-right:auto!important;margin-left:auto!important}.my-0{margin-top:0!important;margin-bottom:0!important}.my-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-0{margin-top:0!important}.mt-1{margin-top:.25rem!important}.mt-2{margin-top:.5rem!important}.mt-3{margin-top:1rem!important}.mt-4{margin-top:1.5rem!important}.mt-5{margin-top:3rem!important}.mt-auto{margin-top:auto!important}.me-0{margin-right:0!important}.me-1{margin-right:.25rem!important}.me-2{margin-right:.5rem!important}.me-3{margin-right:1rem!important}.me-4{margin-right:1.5rem!important}.me-5{margin-right:3rem!important}.me-auto{margin-right:auto!important}.mb-0{margin-bottom:0!important}.mb-1{margin-bottom:.25rem!important}.mb-2{margin-bottom:.5rem!important}.mb-3{margin-bottom:1rem!important}.mb-4{margin-bottom:1.5rem!important}.mb-5{margin-bottom:3rem!important}.mb-auto{margin-bottom:auto!important}.ms-0{margin-left:0!important}.ms-1{margin-left:.25rem!important}.ms-2{margin-left:.5rem!important}.ms-3{margin-left:1rem!important}.ms-4{margin-left:1.5rem!important}.ms-5{margin-left:3rem!important}.ms-auto{margin-left:auto!important}.p-0{padding:0!important}.p-1{padding:.25rem!important}.p-2{padding:.5rem!important}.p-3{padding:1rem!important}.p-4{padding:1.5rem!important}.p-5{padding:3rem!important}.px-0{padding-right:0!important;padding-left:0!important}.px-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-3{padding-right:1rem!important;padding-left:1rem!important}.px-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-5{padding-right:3rem!important;padding-left:3rem!important}.py-0{padding-top:0!important;padding-bottom:0!important}.py-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-0{padding-top:0!important}.pt-1{padding-top:.25rem!important}.pt-2{padding-top:.5rem!important}.pt-3{padding-top:1rem!important}.pt-4{padding-top:1.5rem!important}.pt-5{padding-top:3rem!important}.pe-0{padding-right:0!important}.pe-1{padding-right:.25rem!important}.pe-2{padding-right:.5rem!important}.pe-3{padding-right:1rem!important}.pe-4{padding-right:1.5rem!important}.pe-5{padding-right:3rem!important}.pb-0{padding-bottom:0!important}.pb-1{padding-bottom:.25rem!important}.pb-2{padding-bottom:.5rem!important}.pb-3{padding-bottom:1rem!important}.pb-4{padding-bottom:1.5rem!important}.pb-5{padding-bottom:3rem!important}.ps-0{padding-left:0!important}.ps-1{padding-left:.25rem!important}.ps-2{padding-left:.5rem!important}.ps-3{padding-left:1rem!important}.ps-4{padding-left:1.5rem!important}.ps-5{padding-left:3rem!important}.fs-1{font-size:-moz-calc(1.375rem + 1.5vw)!important;font-size:calc(1.375rem + 1.5vw)!important}.fs-2{font-size:-moz-calc(1.325rem + .9vw)!important;font-size:calc(1.325rem + .9vw)!important}.fs-3{font-size:-moz-calc(1.3rem + .6vw)!important;font-size:calc(1.3rem + .6vw)!important}.fs-4{font-size:-moz-calc(1.275rem + .3vw)!important;font-size:calc(1.275rem + .3vw)!important}.fs-5{font-size:1.25rem!important}.fs-6{font-size:1rem!important}.fst-italic{font-style:italic!important}.fst-normal{font-style:normal!important}.fw-light{font-weight:300!important}.fw-lighter{font-weight:lighter!important}.fw-normal{font-weight:400!important}.fw-bold{font-weight:700!important}.fw-bolder{font-weight:bolder!important}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}.text-start{text-align:left!important}.text-end{text-align:right!important}.text-center{text-align:center!important}.text-primary{color:#0d6efd!important}.text-secondary{color:#6c757d!important}.text-success{color:#198754!important}.text-info{color:#0dcaf0!important}.text-warning{color:#ffc107!important}.text-danger{color:#dc3545!important}.text-light{color:#f8f9fa!important}.text-dark{color:#212529!important}.text-white{color:#fff!important}.text-body{color:#212529!important}.text-muted{color:#6c757d!important}.text-black-50{color:rgba(0,0,0,.5)!important}.text-white-50{color:rgba(255,255,255,.5)!important}.text-reset{color:inherit!important}.lh-1{line-height:1!important}.lh-sm{line-height:1.25!important}.lh-base{line-height:1.5!important}.lh-lg{line-height:2!important}.bg-primary{background-color:#0d6efd!important}.bg-secondary{background-color:#6c757d!important}.bg-success{background-color:#198754!important}.bg-info{background-color:#0dcaf0!important}.bg-warning{background-color:#ffc107!important}.bg-danger{background-color:#dc3545!important}.bg-light{background-color:#f8f9fa!important}.bg-dark{background-color:#212529!important}.bg-body{background-color:#fff!important}.bg-white{background-color:#fff!important}.bg-transparent{background-color:transparent!important}.bg-gradient{background-image:var(--bs-gradient)!important}.text-wrap{white-space:normal!important}.text-nowrap{white-space:nowrap!important}.text-decoration-none{text-decoration:none!important}.text-decoration-underline{text-decoration:underline!important}.text-decoration-line-through{text-decoration:line-through!important}.text-break{word-wrap:break-word!important;word-break:break-word!important}.font-monospace{font-family:var(--bs-font-monospace)!important}.user-select-all{-webkit-user-select:all!important;-moz-user-select:all!important;-ms-user-select:all!important;user-select:all!important}.user-select-auto{-webkit-user-select:auto!important;-moz-user-select:auto!important;-ms-user-select:auto!important;user-select:auto!important}.user-select-none{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.pe-none{pointer-events:none!important}.pe-auto{pointer-events:auto!important}.rounded{-moz-border-radius:.25rem!important;border-radius:.25rem!important}.rounded-0{-moz-border-radius:0!important;border-radius:0!important}.rounded-1{-moz-border-radius:.2rem!important;border-radius:.2rem!important}.rounded-2{-moz-border-radius:.25rem!important;border-radius:.25rem!important}.rounded-3{-moz-border-radius:.3rem!important;border-radius:.3rem!important}.rounded-circle{-moz-border-radius:50%!important;border-radius:50%!important}.rounded-pill{-moz-border-radius:50rem!important;border-radius:50rem!important}.rounded-top{-moz-border-radius-topleft:.25rem!important;border-top-left-radius:.25rem!important;-moz-border-radius-topright:.25rem!important;border-top-right-radius:.25rem!important}.rounded-end{-moz-border-radius-topright:.25rem!important;border-top-right-radius:.25rem!important;-moz-border-radius-bottomright:.25rem!important;border-bottom-right-radius:.25rem!important}.rounded-bottom{-moz-border-radius-bottomright:.25rem!important;border-bottom-right-radius:.25rem!important;-moz-border-radius-bottomleft:.25rem!important;border-bottom-left-radius:.25rem!important}.rounded-start{-moz-border-radius-bottomleft:.25rem!important;border-bottom-left-radius:.25rem!important;-moz-border-radius-topleft:.25rem!important;border-top-left-radius:.25rem!important}.visible{visibility:visible!important}.invisible{visibility:hidden!important}@media (min-width:576px){.float-sm-start{float:left!important}.float-sm-end{float:right!important}.float-sm-none{float:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-grid{display:grid!important}.d-sm-table{display:table!important}.d-sm-table-row{display:table-row!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:-webkit-flex!important;display:-moz-box!important;display:flex!important}.d-sm-inline-flex{display:-webkit-inline-flex!important;display:-moz-inline-box!important;display:inline-flex!important}.d-sm-none{display:none!important}.flex-sm-fill{-webkit-flex:1 1 auto!important;-moz-box-flex:1!important;flex:1 1 auto!important}.flex-sm-row{-webkit-flex-direction:row!important;-moz-box-orient:horizontal!important;-moz-box-direction:normal!important;flex-direction:row!important}.flex-sm-column{-webkit-flex-direction:column!important;-moz-box-orient:vertical!important;-moz-box-direction:normal!important;flex-direction:column!important}.flex-sm-row-reverse{-webkit-flex-direction:row-reverse!important;-moz-box-orient:horizontal!important;-moz-box-direction:reverse!important;flex-direction:row-reverse!important}.flex-sm-column-reverse{-webkit-flex-direction:column-reverse!important;-moz-box-orient:vertical!important;-moz-box-direction:reverse!important;flex-direction:column-reverse!important}.flex-sm-grow-0{-webkit-flex-grow:0!important;-moz-box-flex:0!important;flex-grow:0!important}.flex-sm-grow-1{-webkit-flex-grow:1!important;-moz-box-flex:1!important;flex-grow:1!important}.flex-sm-shrink-0{-webkit-flex-shrink:0!important;flex-shrink:0!important}.flex-sm-shrink-1{-webkit-flex-shrink:1!important;flex-shrink:1!important}.flex-sm-wrap{-webkit-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-sm-nowrap{-webkit-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-sm-wrap-reverse{-webkit-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.gap-sm-0{grid-gap:0!important;gap:0!important}.gap-sm-1{grid-gap:.25rem!important;gap:.25rem!important}.gap-sm-2{grid-gap:.5rem!important;gap:.5rem!important}.gap-sm-3{grid-gap:1rem!important;gap:1rem!important}.gap-sm-4{grid-gap:1.5rem!important;gap:1.5rem!important}.gap-sm-5{grid-gap:3rem!important;gap:3rem!important}.justify-content-sm-start{-webkit-justify-content:flex-start!important;-moz-box-pack:start!important;justify-content:flex-start!important}.justify-content-sm-end{-webkit-justify-content:flex-end!important;-moz-box-pack:end!important;justify-content:flex-end!important}.justify-content-sm-center{-webkit-justify-content:center!important;-moz-box-pack:center!important;justify-content:center!important}.justify-content-sm-between{-webkit-justify-content:space-between!important;-moz-box-pack:justify!important;justify-content:space-between!important}.justify-content-sm-around{-webkit-justify-content:space-around!important;justify-content:space-around!important}.justify-content-sm-evenly{-webkit-justify-content:space-evenly!important;-moz-box-pack:space-evenly!important;justify-content:space-evenly!important}.align-items-sm-start{-webkit-align-items:flex-start!important;-moz-box-align:start!important;align-items:flex-start!important}.align-items-sm-end{-webkit-align-items:flex-end!important;-moz-box-align:end!important;align-items:flex-end!important}.align-items-sm-center{-webkit-align-items:center!important;-moz-box-align:center!important;align-items:center!important}.align-items-sm-baseline{-webkit-align-items:baseline!important;-moz-box-align:baseline!important;align-items:baseline!important}.align-items-sm-stretch{-webkit-align-items:stretch!important;-moz-box-align:stretch!important;align-items:stretch!important}.align-content-sm-start{-webkit-align-content:flex-start!important;align-content:flex-start!important}.align-content-sm-end{-webkit-align-content:flex-end!important;align-content:flex-end!important}.align-content-sm-center{-webkit-align-content:center!important;align-content:center!important}.align-content-sm-between{-webkit-align-content:space-between!important;align-content:space-between!important}.align-content-sm-around{-webkit-align-content:space-around!important;align-content:space-around!important}.align-content-sm-stretch{-webkit-align-content:stretch!important;align-content:stretch!important}.align-self-sm-auto{-webkit-align-self:auto!important;align-self:auto!important}.align-self-sm-start{-webkit-align-self:flex-start!important;align-self:flex-start!important}.align-self-sm-end{-webkit-align-self:flex-end!important;align-self:flex-end!important}.align-self-sm-center{-webkit-align-self:center!important;align-self:center!important}.align-self-sm-baseline{-webkit-align-self:baseline!important;align-self:baseline!important}.align-self-sm-stretch{-webkit-align-self:stretch!important;align-self:stretch!important}.order-sm-first{-webkit-order:-1!important;-moz-box-ordinal-group:0!important;order:-1!important}.order-sm-0{-webkit-order:0!important;-moz-box-ordinal-group:1!important;order:0!important}.order-sm-1{-webkit-order:1!important;-moz-box-ordinal-group:2!important;order:1!important}.order-sm-2{-webkit-order:2!important;-moz-box-ordinal-group:3!important;order:2!important}.order-sm-3{-webkit-order:3!important;-moz-box-ordinal-group:4!important;order:3!important}.order-sm-4{-webkit-order:4!important;-moz-box-ordinal-group:5!important;order:4!important}.order-sm-5{-webkit-order:5!important;-moz-box-ordinal-group:6!important;order:5!important}.order-sm-last{-webkit-order:6!important;-moz-box-ordinal-group:7!important;order:6!important}.m-sm-0{margin:0!important}.m-sm-1{margin:.25rem!important}.m-sm-2{margin:.5rem!important}.m-sm-3{margin:1rem!important}.m-sm-4{margin:1.5rem!important}.m-sm-5{margin:3rem!important}.m-sm-auto{margin:auto!important}.mx-sm-0{margin-right:0!important;margin-left:0!important}.mx-sm-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-sm-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-sm-3{margin-right:1rem!important;margin-left:1rem!important}.mx-sm-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-sm-5{margin-right:3rem!important;margin-left:3rem!important}.mx-sm-auto{margin-right:auto!important;margin-left:auto!important}.my-sm-0{margin-top:0!important;margin-bottom:0!important}.my-sm-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-sm-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-sm-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-sm-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-sm-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-sm-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-sm-0{margin-top:0!important}.mt-sm-1{margin-top:.25rem!important}.mt-sm-2{margin-top:.5rem!important}.mt-sm-3{margin-top:1rem!important}.mt-sm-4{margin-top:1.5rem!important}.mt-sm-5{margin-top:3rem!important}.mt-sm-auto{margin-top:auto!important}.me-sm-0{margin-right:0!important}.me-sm-1{margin-right:.25rem!important}.me-sm-2{margin-right:.5rem!important}.me-sm-3{margin-right:1rem!important}.me-sm-4{margin-right:1.5rem!important}.me-sm-5{margin-right:3rem!important}.me-sm-auto{margin-right:auto!important}.mb-sm-0{margin-bottom:0!important}.mb-sm-1{margin-bottom:.25rem!important}.mb-sm-2{margin-bottom:.5rem!important}.mb-sm-3{margin-bottom:1rem!important}.mb-sm-4{margin-bottom:1.5rem!important}.mb-sm-5{margin-bottom:3rem!important}.mb-sm-auto{margin-bottom:auto!important}.ms-sm-0{margin-left:0!important}.ms-sm-1{margin-left:.25rem!important}.ms-sm-2{margin-left:.5rem!important}.ms-sm-3{margin-left:1rem!important}.ms-sm-4{margin-left:1.5rem!important}.ms-sm-5{margin-left:3rem!important}.ms-sm-auto{margin-left:auto!important}.p-sm-0{padding:0!important}.p-sm-1{padding:.25rem!important}.p-sm-2{padding:.5rem!important}.p-sm-3{padding:1rem!important}.p-sm-4{padding:1.5rem!important}.p-sm-5{padding:3rem!important}.px-sm-0{padding-right:0!important;padding-left:0!important}.px-sm-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-sm-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-sm-3{padding-right:1rem!important;padding-left:1rem!important}.px-sm-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-sm-5{padding-right:3rem!important;padding-left:3rem!important}.py-sm-0{padding-top:0!important;padding-bottom:0!important}.py-sm-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-sm-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-sm-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-sm-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-sm-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-sm-0{padding-top:0!important}.pt-sm-1{padding-top:.25rem!important}.pt-sm-2{padding-top:.5rem!important}.pt-sm-3{padding-top:1rem!important}.pt-sm-4{padding-top:1.5rem!important}.pt-sm-5{padding-top:3rem!important}.pe-sm-0{padding-right:0!important}.pe-sm-1{padding-right:.25rem!important}.pe-sm-2{padding-right:.5rem!important}.pe-sm-3{padding-right:1rem!important}.pe-sm-4{padding-right:1.5rem!important}.pe-sm-5{padding-right:3rem!important}.pb-sm-0{padding-bottom:0!important}.pb-sm-1{padding-bottom:.25rem!important}.pb-sm-2{padding-bottom:.5rem!important}.pb-sm-3{padding-bottom:1rem!important}.pb-sm-4{padding-bottom:1.5rem!important}.pb-sm-5{padding-bottom:3rem!important}.ps-sm-0{padding-left:0!important}.ps-sm-1{padding-left:.25rem!important}.ps-sm-2{padding-left:.5rem!important}.ps-sm-3{padding-left:1rem!important}.ps-sm-4{padding-left:1.5rem!important}.ps-sm-5{padding-left:3rem!important}.text-sm-start{text-align:left!important}.text-sm-end{text-align:right!important}.text-sm-center{text-align:center!important}}@media (min-width:768px){.float-md-start{float:left!important}.float-md-end{float:right!important}.float-md-none{float:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-grid{display:grid!important}.d-md-table{display:table!important}.d-md-table-row{display:table-row!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:-webkit-flex!important;display:-moz-box!important;display:flex!important}.d-md-inline-flex{display:-webkit-inline-flex!important;display:-moz-inline-box!important;display:inline-flex!important}.d-md-none{display:none!important}.flex-md-fill{-webkit-flex:1 1 auto!important;-moz-box-flex:1!important;flex:1 1 auto!important}.flex-md-row{-webkit-flex-direction:row!important;-moz-box-orient:horizontal!important;-moz-box-direction:normal!important;flex-direction:row!important}.flex-md-column{-webkit-flex-direction:column!important;-moz-box-orient:vertical!important;-moz-box-direction:normal!important;flex-direction:column!important}.flex-md-row-reverse{-webkit-flex-direction:row-reverse!important;-moz-box-orient:horizontal!important;-moz-box-direction:reverse!important;flex-direction:row-reverse!important}.flex-md-column-reverse{-webkit-flex-direction:column-reverse!important;-moz-box-orient:vertical!important;-moz-box-direction:reverse!important;flex-direction:column-reverse!important}.flex-md-grow-0{-webkit-flex-grow:0!important;-moz-box-flex:0!important;flex-grow:0!important}.flex-md-grow-1{-webkit-flex-grow:1!important;-moz-box-flex:1!important;flex-grow:1!important}.flex-md-shrink-0{-webkit-flex-shrink:0!important;flex-shrink:0!important}.flex-md-shrink-1{-webkit-flex-shrink:1!important;flex-shrink:1!important}.flex-md-wrap{-webkit-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-md-nowrap{-webkit-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-md-wrap-reverse{-webkit-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.gap-md-0{grid-gap:0!important;gap:0!important}.gap-md-1{grid-gap:.25rem!important;gap:.25rem!important}.gap-md-2{grid-gap:.5rem!important;gap:.5rem!important}.gap-md-3{grid-gap:1rem!important;gap:1rem!important}.gap-md-4{grid-gap:1.5rem!important;gap:1.5rem!important}.gap-md-5{grid-gap:3rem!important;gap:3rem!important}.justify-content-md-start{-webkit-justify-content:flex-start!important;-moz-box-pack:start!important;justify-content:flex-start!important}.justify-content-md-end{-webkit-justify-content:flex-end!important;-moz-box-pack:end!important;justify-content:flex-end!important}.justify-content-md-center{-webkit-justify-content:center!important;-moz-box-pack:center!important;justify-content:center!important}.justify-content-md-between{-webkit-justify-content:space-between!important;-moz-box-pack:justify!important;justify-content:space-between!important}.justify-content-md-around{-webkit-justify-content:space-around!important;justify-content:space-around!important}.justify-content-md-evenly{-webkit-justify-content:space-evenly!important;-moz-box-pack:space-evenly!important;justify-content:space-evenly!important}.align-items-md-start{-webkit-align-items:flex-start!important;-moz-box-align:start!important;align-items:flex-start!important}.align-items-md-end{-webkit-align-items:flex-end!important;-moz-box-align:end!important;align-items:flex-end!important}.align-items-md-center{-webkit-align-items:center!important;-moz-box-align:center!important;align-items:center!important}.align-items-md-baseline{-webkit-align-items:baseline!important;-moz-box-align:baseline!important;align-items:baseline!important}.align-items-md-stretch{-webkit-align-items:stretch!important;-moz-box-align:stretch!important;align-items:stretch!important}.align-content-md-start{-webkit-align-content:flex-start!important;align-content:flex-start!important}.align-content-md-end{-webkit-align-content:flex-end!important;align-content:flex-end!important}.align-content-md-center{-webkit-align-content:center!important;align-content:center!important}.align-content-md-between{-webkit-align-content:space-between!important;align-content:space-between!important}.align-content-md-around{-webkit-align-content:space-around!important;align-content:space-around!important}.align-content-md-stretch{-webkit-align-content:stretch!important;align-content:stretch!important}.align-self-md-auto{-webkit-align-self:auto!important;align-self:auto!important}.align-self-md-start{-webkit-align-self:flex-start!important;align-self:flex-start!important}.align-self-md-end{-webkit-align-self:flex-end!important;align-self:flex-end!important}.align-self-md-center{-webkit-align-self:center!important;align-self:center!important}.align-self-md-baseline{-webkit-align-self:baseline!important;align-self:baseline!important}.align-self-md-stretch{-webkit-align-self:stretch!important;align-self:stretch!important}.order-md-first{-webkit-order:-1!important;-moz-box-ordinal-group:0!important;order:-1!important}.order-md-0{-webkit-order:0!important;-moz-box-ordinal-group:1!important;order:0!important}.order-md-1{-webkit-order:1!important;-moz-box-ordinal-group:2!important;order:1!important}.order-md-2{-webkit-order:2!important;-moz-box-ordinal-group:3!important;order:2!important}.order-md-3{-webkit-order:3!important;-moz-box-ordinal-group:4!important;order:3!important}.order-md-4{-webkit-order:4!important;-moz-box-ordinal-group:5!important;order:4!important}.order-md-5{-webkit-order:5!important;-moz-box-ordinal-group:6!important;order:5!important}.order-md-last{-webkit-order:6!important;-moz-box-ordinal-group:7!important;order:6!important}.m-md-0{margin:0!important}.m-md-1{margin:.25rem!important}.m-md-2{margin:.5rem!important}.m-md-3{margin:1rem!important}.m-md-4{margin:1.5rem!important}.m-md-5{margin:3rem!important}.m-md-auto{margin:auto!important}.mx-md-0{margin-right:0!important;margin-left:0!important}.mx-md-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-md-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-md-3{margin-right:1rem!important;margin-left:1rem!important}.mx-md-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-md-5{margin-right:3rem!important;margin-left:3rem!important}.mx-md-auto{margin-right:auto!important;margin-left:auto!important}.my-md-0{margin-top:0!important;margin-bottom:0!important}.my-md-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-md-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-md-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-md-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-md-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-md-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-md-0{margin-top:0!important}.mt-md-1{margin-top:.25rem!important}.mt-md-2{margin-top:.5rem!important}.mt-md-3{margin-top:1rem!important}.mt-md-4{margin-top:1.5rem!important}.mt-md-5{margin-top:3rem!important}.mt-md-auto{margin-top:auto!important}.me-md-0{margin-right:0!important}.me-md-1{margin-right:.25rem!important}.me-md-2{margin-right:.5rem!important}.me-md-3{margin-right:1rem!important}.me-md-4{margin-right:1.5rem!important}.me-md-5{margin-right:3rem!important}.me-md-auto{margin-right:auto!important}.mb-md-0{margin-bottom:0!important}.mb-md-1{margin-bottom:.25rem!important}.mb-md-2{margin-bottom:.5rem!important}.mb-md-3{margin-bottom:1rem!important}.mb-md-4{margin-bottom:1.5rem!important}.mb-md-5{margin-bottom:3rem!important}.mb-md-auto{margin-bottom:auto!important}.ms-md-0{margin-left:0!important}.ms-md-1{margin-left:.25rem!important}.ms-md-2{margin-left:.5rem!important}.ms-md-3{margin-left:1rem!important}.ms-md-4{margin-left:1.5rem!important}.ms-md-5{margin-left:3rem!important}.ms-md-auto{margin-left:auto!important}.p-md-0{padding:0!important}.p-md-1{padding:.25rem!important}.p-md-2{padding:.5rem!important}.p-md-3{padding:1rem!important}.p-md-4{padding:1.5rem!important}.p-md-5{padding:3rem!important}.px-md-0{padding-right:0!important;padding-left:0!important}.px-md-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-md-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-md-3{padding-right:1rem!important;padding-left:1rem!important}.px-md-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-md-5{padding-right:3rem!important;padding-left:3rem!important}.py-md-0{padding-top:0!important;padding-bottom:0!important}.py-md-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-md-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-md-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-md-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-md-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-md-0{padding-top:0!important}.pt-md-1{padding-top:.25rem!important}.pt-md-2{padding-top:.5rem!important}.pt-md-3{padding-top:1rem!important}.pt-md-4{padding-top:1.5rem!important}.pt-md-5{padding-top:3rem!important}.pe-md-0{padding-right:0!important}.pe-md-1{padding-right:.25rem!important}.pe-md-2{padding-right:.5rem!important}.pe-md-3{padding-right:1rem!important}.pe-md-4{padding-right:1.5rem!important}.pe-md-5{padding-right:3rem!important}.pb-md-0{padding-bottom:0!important}.pb-md-1{padding-bottom:.25rem!important}.pb-md-2{padding-bottom:.5rem!important}.pb-md-3{padding-bottom:1rem!important}.pb-md-4{padding-bottom:1.5rem!important}.pb-md-5{padding-bottom:3rem!important}.ps-md-0{padding-left:0!important}.ps-md-1{padding-left:.25rem!important}.ps-md-2{padding-left:.5rem!important}.ps-md-3{padding-left:1rem!important}.ps-md-4{padding-left:1.5rem!important}.ps-md-5{padding-left:3rem!important}.text-md-start{text-align:left!important}.text-md-end{text-align:right!important}.text-md-center{text-align:center!important}}@media (min-width:992px){.float-lg-start{float:left!important}.float-lg-end{float:right!important}.float-lg-none{float:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-grid{display:grid!important}.d-lg-table{display:table!important}.d-lg-table-row{display:table-row!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:-webkit-flex!important;display:-moz-box!important;display:flex!important}.d-lg-inline-flex{display:-webkit-inline-flex!important;display:-moz-inline-box!important;display:inline-flex!important}.d-lg-none{display:none!important}.flex-lg-fill{-webkit-flex:1 1 auto!important;-moz-box-flex:1!important;flex:1 1 auto!important}.flex-lg-row{-webkit-flex-direction:row!important;-moz-box-orient:horizontal!important;-moz-box-direction:normal!important;flex-direction:row!important}.flex-lg-column{-webkit-flex-direction:column!important;-moz-box-orient:vertical!important;-moz-box-direction:normal!important;flex-direction:column!important}.flex-lg-row-reverse{-webkit-flex-direction:row-reverse!important;-moz-box-orient:horizontal!important;-moz-box-direction:reverse!important;flex-direction:row-reverse!important}.flex-lg-column-reverse{-webkit-flex-direction:column-reverse!important;-moz-box-orient:vertical!important;-moz-box-direction:reverse!important;flex-direction:column-reverse!important}.flex-lg-grow-0{-webkit-flex-grow:0!important;-moz-box-flex:0!important;flex-grow:0!important}.flex-lg-grow-1{-webkit-flex-grow:1!important;-moz-box-flex:1!important;flex-grow:1!important}.flex-lg-shrink-0{-webkit-flex-shrink:0!important;flex-shrink:0!important}.flex-lg-shrink-1{-webkit-flex-shrink:1!important;flex-shrink:1!important}.flex-lg-wrap{-webkit-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-lg-nowrap{-webkit-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-lg-wrap-reverse{-webkit-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.gap-lg-0{grid-gap:0!important;gap:0!important}.gap-lg-1{grid-gap:.25rem!important;gap:.25rem!important}.gap-lg-2{grid-gap:.5rem!important;gap:.5rem!important}.gap-lg-3{grid-gap:1rem!important;gap:1rem!important}.gap-lg-4{grid-gap:1.5rem!important;gap:1.5rem!important}.gap-lg-5{grid-gap:3rem!important;gap:3rem!important}.justify-content-lg-start{-webkit-justify-content:flex-start!important;-moz-box-pack:start!important;justify-content:flex-start!important}.justify-content-lg-end{-webkit-justify-content:flex-end!important;-moz-box-pack:end!important;justify-content:flex-end!important}.justify-content-lg-center{-webkit-justify-content:center!important;-moz-box-pack:center!important;justify-content:center!important}.justify-content-lg-between{-webkit-justify-content:space-between!important;-moz-box-pack:justify!important;justify-content:space-between!important}.justify-content-lg-around{-webkit-justify-content:space-around!important;justify-content:space-around!important}.justify-content-lg-evenly{-webkit-justify-content:space-evenly!important;-moz-box-pack:space-evenly!important;justify-content:space-evenly!important}.align-items-lg-start{-webkit-align-items:flex-start!important;-moz-box-align:start!important;align-items:flex-start!important}.align-items-lg-end{-webkit-align-items:flex-end!important;-moz-box-align:end!important;align-items:flex-end!important}.align-items-lg-center{-webkit-align-items:center!important;-moz-box-align:center!important;align-items:center!important}.align-items-lg-baseline{-webkit-align-items:baseline!important;-moz-box-align:baseline!important;align-items:baseline!important}.align-items-lg-stretch{-webkit-align-items:stretch!important;-moz-box-align:stretch!important;align-items:stretch!important}.align-content-lg-start{-webkit-align-content:flex-start!important;align-content:flex-start!important}.align-content-lg-end{-webkit-align-content:flex-end!important;align-content:flex-end!important}.align-content-lg-center{-webkit-align-content:center!important;align-content:center!important}.align-content-lg-between{-webkit-align-content:space-between!important;align-content:space-between!important}.align-content-lg-around{-webkit-align-content:space-around!important;align-content:space-around!important}.align-content-lg-stretch{-webkit-align-content:stretch!important;align-content:stretch!important}.align-self-lg-auto{-webkit-align-self:auto!important;align-self:auto!important}.align-self-lg-start{-webkit-align-self:flex-start!important;align-self:flex-start!important}.align-self-lg-end{-webkit-align-self:flex-end!important;align-self:flex-end!important}.align-self-lg-center{-webkit-align-self:center!important;align-self:center!important}.align-self-lg-baseline{-webkit-align-self:baseline!important;align-self:baseline!important}.align-self-lg-stretch{-webkit-align-self:stretch!important;align-self:stretch!important}.order-lg-first{-webkit-order:-1!important;-moz-box-ordinal-group:0!important;order:-1!important}.order-lg-0{-webkit-order:0!important;-moz-box-ordinal-group:1!important;order:0!important}.order-lg-1{-webkit-order:1!important;-moz-box-ordinal-group:2!important;order:1!important}.order-lg-2{-webkit-order:2!important;-moz-box-ordinal-group:3!important;order:2!important}.order-lg-3{-webkit-order:3!important;-moz-box-ordinal-group:4!important;order:3!important}.order-lg-4{-webkit-order:4!important;-moz-box-ordinal-group:5!important;order:4!important}.order-lg-5{-webkit-order:5!important;-moz-box-ordinal-group:6!important;order:5!important}.order-lg-last{-webkit-order:6!important;-moz-box-ordinal-group:7!important;order:6!important}.m-lg-0{margin:0!important}.m-lg-1{margin:.25rem!important}.m-lg-2{margin:.5rem!important}.m-lg-3{margin:1rem!important}.m-lg-4{margin:1.5rem!important}.m-lg-5{margin:3rem!important}.m-lg-auto{margin:auto!important}.mx-lg-0{margin-right:0!important;margin-left:0!important}.mx-lg-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-lg-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-lg-3{margin-right:1rem!important;margin-left:1rem!important}.mx-lg-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-lg-5{margin-right:3rem!important;margin-left:3rem!important}.mx-lg-auto{margin-right:auto!important;margin-left:auto!important}.my-lg-0{margin-top:0!important;margin-bottom:0!important}.my-lg-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-lg-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-lg-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-lg-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-lg-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-lg-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-lg-0{margin-top:0!important}.mt-lg-1{margin-top:.25rem!important}.mt-lg-2{margin-top:.5rem!important}.mt-lg-3{margin-top:1rem!important}.mt-lg-4{margin-top:1.5rem!important}.mt-lg-5{margin-top:3rem!important}.mt-lg-auto{margin-top:auto!important}.me-lg-0{margin-right:0!important}.me-lg-1{margin-right:.25rem!important}.me-lg-2{margin-right:.5rem!important}.me-lg-3{margin-right:1rem!important}.me-lg-4{margin-right:1.5rem!important}.me-lg-5{margin-right:3rem!important}.me-lg-auto{margin-right:auto!important}.mb-lg-0{margin-bottom:0!important}.mb-lg-1{margin-bottom:.25rem!important}.mb-lg-2{margin-bottom:.5rem!important}.mb-lg-3{margin-bottom:1rem!important}.mb-lg-4{margin-bottom:1.5rem!important}.mb-lg-5{margin-bottom:3rem!important}.mb-lg-auto{margin-bottom:auto!important}.ms-lg-0{margin-left:0!important}.ms-lg-1{margin-left:.25rem!important}.ms-lg-2{margin-left:.5rem!important}.ms-lg-3{margin-left:1rem!important}.ms-lg-4{margin-left:1.5rem!important}.ms-lg-5{margin-left:3rem!important}.ms-lg-auto{margin-left:auto!important}.p-lg-0{padding:0!important}.p-lg-1{padding:.25rem!important}.p-lg-2{padding:.5rem!important}.p-lg-3{padding:1rem!important}.p-lg-4{padding:1.5rem!important}.p-lg-5{padding:3rem!important}.px-lg-0{padding-right:0!important;padding-left:0!important}.px-lg-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-lg-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-lg-3{padding-right:1rem!important;padding-left:1rem!important}.px-lg-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-lg-5{padding-right:3rem!important;padding-left:3rem!important}.py-lg-0{padding-top:0!important;padding-bottom:0!important}.py-lg-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-lg-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-lg-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-lg-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-lg-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-lg-0{padding-top:0!important}.pt-lg-1{padding-top:.25rem!important}.pt-lg-2{padding-top:.5rem!important}.pt-lg-3{padding-top:1rem!important}.pt-lg-4{padding-top:1.5rem!important}.pt-lg-5{padding-top:3rem!important}.pe-lg-0{padding-right:0!important}.pe-lg-1{padding-right:.25rem!important}.pe-lg-2{padding-right:.5rem!important}.pe-lg-3{padding-right:1rem!important}.pe-lg-4{padding-right:1.5rem!important}.pe-lg-5{padding-right:3rem!important}.pb-lg-0{padding-bottom:0!important}.pb-lg-1{padding-bottom:.25rem!important}.pb-lg-2{padding-bottom:.5rem!important}.pb-lg-3{padding-bottom:1rem!important}.pb-lg-4{padding-bottom:1.5rem!important}.pb-lg-5{padding-bottom:3rem!important}.ps-lg-0{padding-left:0!important}.ps-lg-1{padding-left:.25rem!important}.ps-lg-2{padding-left:.5rem!important}.ps-lg-3{padding-left:1rem!important}.ps-lg-4{padding-left:1.5rem!important}.ps-lg-5{padding-left:3rem!important}.text-lg-start{text-align:left!important}.text-lg-end{text-align:right!important}.text-lg-center{text-align:center!important}}@media (min-width:1200px){.float-xl-start{float:left!important}.float-xl-end{float:right!important}.float-xl-none{float:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-grid{display:grid!important}.d-xl-table{display:table!important}.d-xl-table-row{display:table-row!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:-webkit-flex!important;display:-moz-box!important;display:flex!important}.d-xl-inline-flex{display:-webkit-inline-flex!important;display:-moz-inline-box!important;display:inline-flex!important}.d-xl-none{display:none!important}.flex-xl-fill{-webkit-flex:1 1 auto!important;-moz-box-flex:1!important;flex:1 1 auto!important}.flex-xl-row{-webkit-flex-direction:row!important;-moz-box-orient:horizontal!important;-moz-box-direction:normal!important;flex-direction:row!important}.flex-xl-column{-webkit-flex-direction:column!important;-moz-box-orient:vertical!important;-moz-box-direction:normal!important;flex-direction:column!important}.flex-xl-row-reverse{-webkit-flex-direction:row-reverse!important;-moz-box-orient:horizontal!important;-moz-box-direction:reverse!important;flex-direction:row-reverse!important}.flex-xl-column-reverse{-webkit-flex-direction:column-reverse!important;-moz-box-orient:vertical!important;-moz-box-direction:reverse!important;flex-direction:column-reverse!important}.flex-xl-grow-0{-webkit-flex-grow:0!important;-moz-box-flex:0!important;flex-grow:0!important}.flex-xl-grow-1{-webkit-flex-grow:1!important;-moz-box-flex:1!important;flex-grow:1!important}.flex-xl-shrink-0{-webkit-flex-shrink:0!important;flex-shrink:0!important}.flex-xl-shrink-1{-webkit-flex-shrink:1!important;flex-shrink:1!important}.flex-xl-wrap{-webkit-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-xl-nowrap{-webkit-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-xl-wrap-reverse{-webkit-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.gap-xl-0{grid-gap:0!important;gap:0!important}.gap-xl-1{grid-gap:.25rem!important;gap:.25rem!important}.gap-xl-2{grid-gap:.5rem!important;gap:.5rem!important}.gap-xl-3{grid-gap:1rem!important;gap:1rem!important}.gap-xl-4{grid-gap:1.5rem!important;gap:1.5rem!important}.gap-xl-5{grid-gap:3rem!important;gap:3rem!important}.justify-content-xl-start{-webkit-justify-content:flex-start!important;-moz-box-pack:start!important;justify-content:flex-start!important}.justify-content-xl-end{-webkit-justify-content:flex-end!important;-moz-box-pack:end!important;justify-content:flex-end!important}.justify-content-xl-center{-webkit-justify-content:center!important;-moz-box-pack:center!important;justify-content:center!important}.justify-content-xl-between{-webkit-justify-content:space-between!important;-moz-box-pack:justify!important;justify-content:space-between!important}.justify-content-xl-around{-webkit-justify-content:space-around!important;justify-content:space-around!important}.justify-content-xl-evenly{-webkit-justify-content:space-evenly!important;-moz-box-pack:space-evenly!important;justify-content:space-evenly!important}.align-items-xl-start{-webkit-align-items:flex-start!important;-moz-box-align:start!important;align-items:flex-start!important}.align-items-xl-end{-webkit-align-items:flex-end!important;-moz-box-align:end!important;align-items:flex-end!important}.align-items-xl-center{-webkit-align-items:center!important;-moz-box-align:center!important;align-items:center!important}.align-items-xl-baseline{-webkit-align-items:baseline!important;-moz-box-align:baseline!important;align-items:baseline!important}.align-items-xl-stretch{-webkit-align-items:stretch!important;-moz-box-align:stretch!important;align-items:stretch!important}.align-content-xl-start{-webkit-align-content:flex-start!important;align-content:flex-start!important}.align-content-xl-end{-webkit-align-content:flex-end!important;align-content:flex-end!important}.align-content-xl-center{-webkit-align-content:center!important;align-content:center!important}.align-content-xl-between{-webkit-align-content:space-between!important;align-content:space-between!important}.align-content-xl-around{-webkit-align-content:space-around!important;align-content:space-around!important}.align-content-xl-stretch{-webkit-align-content:stretch!important;align-content:stretch!important}.align-self-xl-auto{-webkit-align-self:auto!important;align-self:auto!important}.align-self-xl-start{-webkit-align-self:flex-start!important;align-self:flex-start!important}.align-self-xl-end{-webkit-align-self:flex-end!important;align-self:flex-end!important}.align-self-xl-center{-webkit-align-self:center!important;align-self:center!important}.align-self-xl-baseline{-webkit-align-self:baseline!important;align-self:baseline!important}.align-self-xl-stretch{-webkit-align-self:stretch!important;align-self:stretch!important}.order-xl-first{-webkit-order:-1!important;-moz-box-ordinal-group:0!important;order:-1!important}.order-xl-0{-webkit-order:0!important;-moz-box-ordinal-group:1!important;order:0!important}.order-xl-1{-webkit-order:1!important;-moz-box-ordinal-group:2!important;order:1!important}.order-xl-2{-webkit-order:2!important;-moz-box-ordinal-group:3!important;order:2!important}.order-xl-3{-webkit-order:3!important;-moz-box-ordinal-group:4!important;order:3!important}.order-xl-4{-webkit-order:4!important;-moz-box-ordinal-group:5!important;order:4!important}.order-xl-5{-webkit-order:5!important;-moz-box-ordinal-group:6!important;order:5!important}.order-xl-last{-webkit-order:6!important;-moz-box-ordinal-group:7!important;order:6!important}.m-xl-0{margin:0!important}.m-xl-1{margin:.25rem!important}.m-xl-2{margin:.5rem!important}.m-xl-3{margin:1rem!important}.m-xl-4{margin:1.5rem!important}.m-xl-5{margin:3rem!important}.m-xl-auto{margin:auto!important}.mx-xl-0{margin-right:0!important;margin-left:0!important}.mx-xl-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-xl-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-xl-3{margin-right:1rem!important;margin-left:1rem!important}.mx-xl-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-xl-5{margin-right:3rem!important;margin-left:3rem!important}.mx-xl-auto{margin-right:auto!important;margin-left:auto!important}.my-xl-0{margin-top:0!important;margin-bottom:0!important}.my-xl-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-xl-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-xl-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-xl-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-xl-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-xl-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-xl-0{margin-top:0!important}.mt-xl-1{margin-top:.25rem!important}.mt-xl-2{margin-top:.5rem!important}.mt-xl-3{margin-top:1rem!important}.mt-xl-4{margin-top:1.5rem!important}.mt-xl-5{margin-top:3rem!important}.mt-xl-auto{margin-top:auto!important}.me-xl-0{margin-right:0!important}.me-xl-1{margin-right:.25rem!important}.me-xl-2{margin-right:.5rem!important}.me-xl-3{margin-right:1rem!important}.me-xl-4{margin-right:1.5rem!important}.me-xl-5{margin-right:3rem!important}.me-xl-auto{margin-right:auto!important}.mb-xl-0{margin-bottom:0!important}.mb-xl-1{margin-bottom:.25rem!important}.mb-xl-2{margin-bottom:.5rem!important}.mb-xl-3{margin-bottom:1rem!important}.mb-xl-4{margin-bottom:1.5rem!important}.mb-xl-5{margin-bottom:3rem!important}.mb-xl-auto{margin-bottom:auto!important}.ms-xl-0{margin-left:0!important}.ms-xl-1{margin-left:.25rem!important}.ms-xl-2{margin-left:.5rem!important}.ms-xl-3{margin-left:1rem!important}.ms-xl-4{margin-left:1.5rem!important}.ms-xl-5{margin-left:3rem!important}.ms-xl-auto{margin-left:auto!important}.p-xl-0{padding:0!important}.p-xl-1{padding:.25rem!important}.p-xl-2{padding:.5rem!important}.p-xl-3{padding:1rem!important}.p-xl-4{padding:1.5rem!important}.p-xl-5{padding:3rem!important}.px-xl-0{padding-right:0!important;padding-left:0!important}.px-xl-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-xl-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-xl-3{padding-right:1rem!important;padding-left:1rem!important}.px-xl-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-xl-5{padding-right:3rem!important;padding-left:3rem!important}.py-xl-0{padding-top:0!important;padding-bottom:0!important}.py-xl-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-xl-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-xl-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-xl-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-xl-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-xl-0{padding-top:0!important}.pt-xl-1{padding-top:.25rem!important}.pt-xl-2{padding-top:.5rem!important}.pt-xl-3{padding-top:1rem!important}.pt-xl-4{padding-top:1.5rem!important}.pt-xl-5{padding-top:3rem!important}.pe-xl-0{padding-right:0!important}.pe-xl-1{padding-right:.25rem!important}.pe-xl-2{padding-right:.5rem!important}.pe-xl-3{padding-right:1rem!important}.pe-xl-4{padding-right:1.5rem!important}.pe-xl-5{padding-right:3rem!important}.pb-xl-0{padding-bottom:0!important}.pb-xl-1{padding-bottom:.25rem!important}.pb-xl-2{padding-bottom:.5rem!important}.pb-xl-3{padding-bottom:1rem!important}.pb-xl-4{padding-bottom:1.5rem!important}.pb-xl-5{padding-bottom:3rem!important}.ps-xl-0{padding-left:0!important}.ps-xl-1{padding-left:.25rem!important}.ps-xl-2{padding-left:.5rem!important}.ps-xl-3{padding-left:1rem!important}.ps-xl-4{padding-left:1.5rem!important}.ps-xl-5{padding-left:3rem!important}.text-xl-start{text-align:left!important}.text-xl-end{text-align:right!important}.text-xl-center{text-align:center!important}}@media (min-width:1400px){.float-xxl-start{float:left!important}.float-xxl-end{float:right!important}.float-xxl-none{float:none!important}.d-xxl-inline{display:inline!important}.d-xxl-inline-block{display:inline-block!important}.d-xxl-block{display:block!important}.d-xxl-grid{display:grid!important}.d-xxl-table{display:table!important}.d-xxl-table-row{display:table-row!important}.d-xxl-table-cell{display:table-cell!important}.d-xxl-flex{display:-webkit-flex!important;display:-moz-box!important;display:flex!important}.d-xxl-inline-flex{display:-webkit-inline-flex!important;display:-moz-inline-box!important;display:inline-flex!important}.d-xxl-none{display:none!important}.flex-xxl-fill{-webkit-flex:1 1 auto!important;-moz-box-flex:1!important;flex:1 1 auto!important}.flex-xxl-row{-webkit-flex-direction:row!important;-moz-box-orient:horizontal!important;-moz-box-direction:normal!important;flex-direction:row!important}.flex-xxl-column{-webkit-flex-direction:column!important;-moz-box-orient:vertical!important;-moz-box-direction:normal!important;flex-direction:column!important}.flex-xxl-row-reverse{-webkit-flex-direction:row-reverse!important;-moz-box-orient:horizontal!important;-moz-box-direction:reverse!important;flex-direction:row-reverse!important}.flex-xxl-column-reverse{-webkit-flex-direction:column-reverse!important;-moz-box-orient:vertical!important;-moz-box-direction:reverse!important;flex-direction:column-reverse!important}.flex-xxl-grow-0{-webkit-flex-grow:0!important;-moz-box-flex:0!important;flex-grow:0!important}.flex-xxl-grow-1{-webkit-flex-grow:1!important;-moz-box-flex:1!important;flex-grow:1!important}.flex-xxl-shrink-0{-webkit-flex-shrink:0!important;flex-shrink:0!important}.flex-xxl-shrink-1{-webkit-flex-shrink:1!important;flex-shrink:1!important}.flex-xxl-wrap{-webkit-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-xxl-nowrap{-webkit-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-xxl-wrap-reverse{-webkit-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.gap-xxl-0{grid-gap:0!important;gap:0!important}.gap-xxl-1{grid-gap:.25rem!important;gap:.25rem!important}.gap-xxl-2{grid-gap:.5rem!important;gap:.5rem!important}.gap-xxl-3{grid-gap:1rem!important;gap:1rem!important}.gap-xxl-4{grid-gap:1.5rem!important;gap:1.5rem!important}.gap-xxl-5{grid-gap:3rem!important;gap:3rem!important}.justify-content-xxl-start{-webkit-justify-content:flex-start!important;-moz-box-pack:start!important;justify-content:flex-start!important}.justify-content-xxl-end{-webkit-justify-content:flex-end!important;-moz-box-pack:end!important;justify-content:flex-end!important}.justify-content-xxl-center{-webkit-justify-content:center!important;-moz-box-pack:center!important;justify-content:center!important}.justify-content-xxl-between{-webkit-justify-content:space-between!important;-moz-box-pack:justify!important;justify-content:space-between!important}.justify-content-xxl-around{-webkit-justify-content:space-around!important;justify-content:space-around!important}.justify-content-xxl-evenly{-webkit-justify-content:space-evenly!important;-moz-box-pack:space-evenly!important;justify-content:space-evenly!important}.align-items-xxl-start{-webkit-align-items:flex-start!important;-moz-box-align:start!important;align-items:flex-start!important}.align-items-xxl-end{-webkit-align-items:flex-end!important;-moz-box-align:end!important;align-items:flex-end!important}.align-items-xxl-center{-webkit-align-items:center!important;-moz-box-align:center!important;align-items:center!important}.align-items-xxl-baseline{-webkit-align-items:baseline!important;-moz-box-align:baseline!important;align-items:baseline!important}.align-items-xxl-stretch{-webkit-align-items:stretch!important;-moz-box-align:stretch!important;align-items:stretch!important}.align-content-xxl-start{-webkit-align-content:flex-start!important;align-content:flex-start!important}.align-content-xxl-end{-webkit-align-content:flex-end!important;align-content:flex-end!important}.align-content-xxl-center{-webkit-align-content:center!important;align-content:center!important}.align-content-xxl-between{-webkit-align-content:space-between!important;align-content:space-between!important}.align-content-xxl-around{-webkit-align-content:space-around!important;align-content:space-around!important}.align-content-xxl-stretch{-webkit-align-content:stretch!important;align-content:stretch!important}.align-self-xxl-auto{-webkit-align-self:auto!important;align-self:auto!important}.align-self-xxl-start{-webkit-align-self:flex-start!important;align-self:flex-start!important}.align-self-xxl-end{-webkit-align-self:flex-end!important;align-self:flex-end!important}.align-self-xxl-center{-webkit-align-self:center!important;align-self:center!important}.align-self-xxl-baseline{-webkit-align-self:baseline!important;align-self:baseline!important}.align-self-xxl-stretch{-webkit-align-self:stretch!important;align-self:stretch!important}.order-xxl-first{-webkit-order:-1!important;-moz-box-ordinal-group:0!important;order:-1!important}.order-xxl-0{-webkit-order:0!important;-moz-box-ordinal-group:1!important;order:0!important}.order-xxl-1{-webkit-order:1!important;-moz-box-ordinal-group:2!important;order:1!important}.order-xxl-2{-webkit-order:2!important;-moz-box-ordinal-group:3!important;order:2!important}.order-xxl-3{-webkit-order:3!important;-moz-box-ordinal-group:4!important;order:3!important}.order-xxl-4{-webkit-order:4!important;-moz-box-ordinal-group:5!important;order:4!important}.order-xxl-5{-webkit-order:5!important;-moz-box-ordinal-group:6!important;order:5!important}.order-xxl-last{-webkit-order:6!important;-moz-box-ordinal-group:7!important;order:6!important}.m-xxl-0{margin:0!important}.m-xxl-1{margin:.25rem!important}.m-xxl-2{margin:.5rem!important}.m-xxl-3{margin:1rem!important}.m-xxl-4{margin:1.5rem!important}.m-xxl-5{margin:3rem!important}.m-xxl-auto{margin:auto!important}.mx-xxl-0{margin-right:0!important;margin-left:0!important}.mx-xxl-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-xxl-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-xxl-3{margin-right:1rem!important;margin-left:1rem!important}.mx-xxl-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-xxl-5{margin-right:3rem!important;margin-left:3rem!important}.mx-xxl-auto{margin-right:auto!important;margin-left:auto!important}.my-xxl-0{margin-top:0!important;margin-bottom:0!important}.my-xxl-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-xxl-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-xxl-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-xxl-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-xxl-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-xxl-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-xxl-0{margin-top:0!important}.mt-xxl-1{margin-top:.25rem!important}.mt-xxl-2{margin-top:.5rem!important}.mt-xxl-3{margin-top:1rem!important}.mt-xxl-4{margin-top:1.5rem!important}.mt-xxl-5{margin-top:3rem!important}.mt-xxl-auto{margin-top:auto!important}.me-xxl-0{margin-right:0!important}.me-xxl-1{margin-right:.25rem!important}.me-xxl-2{margin-right:.5rem!important}.me-xxl-3{margin-right:1rem!important}.me-xxl-4{margin-right:1.5rem!important}.me-xxl-5{margin-right:3rem!important}.me-xxl-auto{margin-right:auto!important}.mb-xxl-0{margin-bottom:0!important}.mb-xxl-1{margin-bottom:.25rem!important}.mb-xxl-2{margin-bottom:.5rem!important}.mb-xxl-3{margin-bottom:1rem!important}.mb-xxl-4{margin-bottom:1.5rem!important}.mb-xxl-5{margin-bottom:3rem!important}.mb-xxl-auto{margin-bottom:auto!important}.ms-xxl-0{margin-left:0!important}.ms-xxl-1{margin-left:.25rem!important}.ms-xxl-2{margin-left:.5rem!important}.ms-xxl-3{margin-left:1rem!important}.ms-xxl-4{margin-left:1.5rem!important}.ms-xxl-5{margin-left:3rem!important}.ms-xxl-auto{margin-left:auto!important}.p-xxl-0{padding:0!important}.p-xxl-1{padding:.25rem!important}.p-xxl-2{padding:.5rem!important}.p-xxl-3{padding:1rem!important}.p-xxl-4{padding:1.5rem!important}.p-xxl-5{padding:3rem!important}.px-xxl-0{padding-right:0!important;padding-left:0!important}.px-xxl-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-xxl-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-xxl-3{padding-right:1rem!important;padding-left:1rem!important}.px-xxl-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-xxl-5{padding-right:3rem!important;padding-left:3rem!important}.py-xxl-0{padding-top:0!important;padding-bottom:0!important}.py-xxl-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-xxl-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-xxl-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-xxl-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-xxl-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-xxl-0{padding-top:0!important}.pt-xxl-1{padding-top:.25rem!important}.pt-xxl-2{padding-top:.5rem!important}.pt-xxl-3{padding-top:1rem!important}.pt-xxl-4{padding-top:1.5rem!important}.pt-xxl-5{padding-top:3rem!important}.pe-xxl-0{padding-right:0!important}.pe-xxl-1{padding-right:.25rem!important}.pe-xxl-2{padding-right:.5rem!important}.pe-xxl-3{padding-right:1rem!important}.pe-xxl-4{padding-right:1.5rem!important}.pe-xxl-5{padding-right:3rem!important}.pb-xxl-0{padding-bottom:0!important}.pb-xxl-1{padding-bottom:.25rem!important}.pb-xxl-2{padding-bottom:.5rem!important}.pb-xxl-3{padding-bottom:1rem!important}.pb-xxl-4{padding-bottom:1.5rem!important}.pb-xxl-5{padding-bottom:3rem!important}.ps-xxl-0{padding-left:0!important}.ps-xxl-1{padding-left:.25rem!important}.ps-xxl-2{padding-left:.5rem!important}.ps-xxl-3{padding-left:1rem!important}.ps-xxl-4{padding-left:1.5rem!important}.ps-xxl-5{padding-left:3rem!important}.text-xxl-start{text-align:left!important}.text-xxl-end{text-align:right!important}.text-xxl-center{text-align:center!important}}@media (min-width:1200px){.fs-1{font-size:2.5rem!important}.fs-2{font-size:2rem!important}.fs-3{font-size:1.75rem!important}.fs-4{font-size:1.5rem!important}.fs-sm-1{font-size:2.5rem!important}.fs-sm-2{font-size:2rem!important}.fs-sm-3{font-size:1.75rem!important}.fs-sm-4{font-size:1.5rem!important}.fs-md-1{font-size:2.5rem!important}.fs-md-2{font-size:2rem!important}.fs-md-3{font-size:1.75rem!important}.fs-md-4{font-size:1.5rem!important}.fs-lg-1{font-size:2.5rem!important}.fs-lg-2{font-size:2rem!important}.fs-lg-3{font-size:1.75rem!important}.fs-lg-4{font-size:1.5rem!important}}@media print{.d-print-inline{display:inline!important}.d-print-inline-block{display:inline-block!important}.d-print-block{display:block!important}.d-print-grid{display:grid!important}.d-print-table{display:table!important}.d-print-table-row{display:table-row!important}.d-print-table-cell{display:table-cell!important}.d-print-flex{display:-webkit-flex!important;display:-moz-box!important;display:flex!important}.d-print-inline-flex{display:-webkit-inline-flex!important;display:-moz-inline-box!important;display:inline-flex!important}.d-print-none{display:none!important}}\n/*# sourceMappingURL=bootstrap.min.css.map */", "",{"version":3,"sources":["webpack://css/bootstrap.min.css"],"names":[],"mappings":"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","sourcesContent":["@charset \"UTF-8\";/*!\n * Bootstrap v5.0.0-beta1 (https://getbootstrap.com/)\n * Copyright 2011-2020 The Bootstrap Authors\n * Copyright 2011-2020 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */:root{--bs-blue:#0d6efd;--bs-indigo:#6610f2;--bs-purple:#6f42c1;--bs-pink:#d63384;--bs-red:#dc3545;--bs-orange:#fd7e14;--bs-yellow:#ffc107;--bs-green:#198754;--bs-teal:#20c997;--bs-cyan:#0dcaf0;--bs-white:#fff;--bs-gray:#6c757d;--bs-gray-dark:#343a40;--bs-primary:#0d6efd;--bs-secondary:#6c757d;--bs-success:#198754;--bs-info:#0dcaf0;--bs-warning:#ffc107;--bs-danger:#dc3545;--bs-light:#f8f9fa;--bs-dark:#212529;--bs-font-sans-serif:system-ui,-apple-system,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",\"Liberation Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--bs-font-monospace:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;--bs-gradient:linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))}*,::after,::before{box-sizing:border-box}@media (prefers-reduced-motion:no-preference){:root{scroll-behavior:smooth}}body{margin:0;font-family:var(--bs-font-sans-serif);font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}[tabindex=\"-1\"]:focus:not(:focus-visible){outline:0!important}hr{margin:1rem 0;color:inherit;background-color:currentColor;border:0;opacity:.25}hr:not([size]){height:1px}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem;font-weight:500;line-height:1.2}.h1,h1{font-size:calc(1.375rem + 1.5vw)}@media (min-width:1200px){.h1,h1{font-size:2.5rem}}.h2,h2{font-size:calc(1.325rem + .9vw)}@media (min-width:1200px){.h2,h2{font-size:2rem}}.h3,h3{font-size:calc(1.3rem + .6vw)}@media (min-width:1200px){.h3,h3{font-size:1.75rem}}.h4,h4{font-size:calc(1.275rem + .3vw)}@media (min-width:1200px){.h4,h4{font-size:1.5rem}}.h5,h5{font-size:1.25rem}.h6,h6{font-size:1rem}p{margin-top:0;margin-bottom:1rem}abbr[data-bs-original-title],abbr[title]{text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}address{margin-bottom:1rem;font-style:normal;line-height:inherit}ol,ul{padding-left:2rem}dl,ol,ul{margin-top:0;margin-bottom:1rem}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:bolder}.small,small{font-size:.875em}.mark,mark{padding:.2em;background-color:#fcf8e3}sub,sup{position:relative;font-size:.75em;line-height:0;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}a{color:#0d6efd;text-decoration:underline}a:hover{color:#0a58ca}a:not([href]):not([class]),a:not([href]):not([class]):hover{color:inherit;text-decoration:none}code,kbd,pre,samp{font-family:var(--bs-font-monospace);font-size:1em;direction:ltr;unicode-bidi:bidi-override}pre{display:block;margin-top:0;margin-bottom:1rem;overflow:auto;font-size:.875em}pre code{font-size:inherit;color:inherit;word-break:normal}code{font-size:.875em;color:#d63384;word-wrap:break-word}a>code{color:inherit}kbd{padding:.2rem .4rem;font-size:.875em;color:#fff;background-color:#212529;border-radius:.2rem}kbd kbd{padding:0;font-size:1em;font-weight:700}figure{margin:0 0 1rem}img,svg{vertical-align:middle}table{caption-side:bottom;border-collapse:collapse}caption{padding-top:.5rem;padding-bottom:.5rem;color:#6c757d;text-align:left}th{text-align:inherit;text-align:-webkit-match-parent}tbody,td,tfoot,th,thead,tr{border-color:inherit;border-style:solid;border-width:0}label{display:inline-block}button{border-radius:0}button:focus{outline:dotted 1px;outline:-webkit-focus-ring-color auto 5px}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,select{text-transform:none}[role=button]{cursor:pointer}select{word-wrap:normal}[list]::-webkit-calendar-picker-indicator{display:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled),button:not(:disabled){cursor:pointer}::-moz-focus-inner{padding:0;border-style:none}textarea{resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{float:left;width:100%;padding:0;margin-bottom:.5rem;font-size:calc(1.275rem + .3vw);line-height:inherit}@media (min-width:1200px){legend{font-size:1.5rem}}legend+*{clear:left}::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-fields-wrapper,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-text,::-webkit-datetime-edit-year-field{padding:0}::-webkit-inner-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:textfield}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-color-swatch-wrapper{padding:0}::file-selector-button{font:inherit}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}output{display:inline-block}iframe{border:0}summary{display:list-item;cursor:pointer}progress{vertical-align:baseline}[hidden]{display:none!important}.lead{font-size:1.25rem;font-weight:300}.display-1{font-size:calc(1.625rem + 4.5vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-1{font-size:5rem}}.display-2{font-size:calc(1.575rem + 3.9vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-2{font-size:4.5rem}}.display-3{font-size:calc(1.525rem + 3.3vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-3{font-size:4rem}}.display-4{font-size:calc(1.475rem + 2.7vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-4{font-size:3.5rem}}.display-5{font-size:calc(1.425rem + 2.1vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-5{font-size:3rem}}.display-6{font-size:calc(1.375rem + 1.5vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-6{font-size:2.5rem}}.list-unstyled{padding-left:0;list-style:none}.list-inline{padding-left:0;list-style:none}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:.5rem}.initialism{font-size:.875em;text-transform:uppercase}.blockquote{margin-bottom:1rem;font-size:1.25rem}.blockquote>:last-child{margin-bottom:0}.blockquote-footer{margin-top:-1rem;margin-bottom:1rem;font-size:.875em;color:#6c757d}.blockquote-footer::before{content:\"— \"}.img-fluid{max-width:100%;height:auto}.img-thumbnail{padding:.25rem;background-color:#fff;border:1px solid #dee2e6;border-radius:.25rem;max-width:100%;height:auto}.figure{display:inline-block}.figure-img{margin-bottom:.5rem;line-height:1}.figure-caption{font-size:.875em;color:#6c757d}.container,.container-fluid,.container-lg,.container-md,.container-sm,.container-xl,.container-xxl{width:100%;padding-right:var(--bs-gutter-x,.75rem);padding-left:var(--bs-gutter-x,.75rem);margin-right:auto;margin-left:auto}@media (min-width:576px){.container,.container-sm{max-width:540px}}@media (min-width:768px){.container,.container-md,.container-sm{max-width:720px}}@media (min-width:992px){.container,.container-lg,.container-md,.container-sm{max-width:960px}}@media (min-width:1200px){.container,.container-lg,.container-md,.container-sm,.container-xl{max-width:1140px}}@media (min-width:1400px){.container,.container-lg,.container-md,.container-sm,.container-xl,.container-xxl{max-width:1320px}}.row{--bs-gutter-x:1.5rem;--bs-gutter-y:0;display:flex;flex-wrap:wrap;margin-top:calc(var(--bs-gutter-y) * -1);margin-right:calc(var(--bs-gutter-x)/ -2);margin-left:calc(var(--bs-gutter-x)/ -2)}.row>*{flex-shrink:0;width:100%;max-width:100%;padding-right:calc(var(--bs-gutter-x)/ 2);padding-left:calc(var(--bs-gutter-x)/ 2);margin-top:var(--bs-gutter-y)}.col{flex:1 0 0%}.row-cols-auto>*{flex:0 0 auto;width:auto}.row-cols-1>*{flex:0 0 auto;width:100%}.row-cols-2>*{flex:0 0 auto;width:50%}.row-cols-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-4>*{flex:0 0 auto;width:25%}.row-cols-5>*{flex:0 0 auto;width:20%}.row-cols-6>*{flex:0 0 auto;width:16.6666666667%}.col-auto{flex:0 0 auto;width:auto}.col-1{flex:0 0 auto;width:8.3333333333%}.col-2{flex:0 0 auto;width:16.6666666667%}.col-3{flex:0 0 auto;width:25%}.col-4{flex:0 0 auto;width:33.3333333333%}.col-5{flex:0 0 auto;width:41.6666666667%}.col-6{flex:0 0 auto;width:50%}.col-7{flex:0 0 auto;width:58.3333333333%}.col-8{flex:0 0 auto;width:66.6666666667%}.col-9{flex:0 0 auto;width:75%}.col-10{flex:0 0 auto;width:83.3333333333%}.col-11{flex:0 0 auto;width:91.6666666667%}.col-12{flex:0 0 auto;width:100%}.offset-1{margin-left:8.3333333333%}.offset-2{margin-left:16.6666666667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.3333333333%}.offset-5{margin-left:41.6666666667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.3333333333%}.offset-8{margin-left:66.6666666667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.3333333333%}.offset-11{margin-left:91.6666666667%}.g-0,.gx-0{--bs-gutter-x:0}.g-0,.gy-0{--bs-gutter-y:0}.g-1,.gx-1{--bs-gutter-x:0.25rem}.g-1,.gy-1{--bs-gutter-y:0.25rem}.g-2,.gx-2{--bs-gutter-x:0.5rem}.g-2,.gy-2{--bs-gutter-y:0.5rem}.g-3,.gx-3{--bs-gutter-x:1rem}.g-3,.gy-3{--bs-gutter-y:1rem}.g-4,.gx-4{--bs-gutter-x:1.5rem}.g-4,.gy-4{--bs-gutter-y:1.5rem}.g-5,.gx-5{--bs-gutter-x:3rem}.g-5,.gy-5{--bs-gutter-y:3rem}@media (min-width:576px){.col-sm{flex:1 0 0%}.row-cols-sm-auto>*{flex:0 0 auto;width:auto}.row-cols-sm-1>*{flex:0 0 auto;width:100%}.row-cols-sm-2>*{flex:0 0 auto;width:50%}.row-cols-sm-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-sm-4>*{flex:0 0 auto;width:25%}.row-cols-sm-5>*{flex:0 0 auto;width:20%}.row-cols-sm-6>*{flex:0 0 auto;width:16.6666666667%}.col-sm-auto{flex:0 0 auto;width:auto}.col-sm-1{flex:0 0 auto;width:8.3333333333%}.col-sm-2{flex:0 0 auto;width:16.6666666667%}.col-sm-3{flex:0 0 auto;width:25%}.col-sm-4{flex:0 0 auto;width:33.3333333333%}.col-sm-5{flex:0 0 auto;width:41.6666666667%}.col-sm-6{flex:0 0 auto;width:50%}.col-sm-7{flex:0 0 auto;width:58.3333333333%}.col-sm-8{flex:0 0 auto;width:66.6666666667%}.col-sm-9{flex:0 0 auto;width:75%}.col-sm-10{flex:0 0 auto;width:83.3333333333%}.col-sm-11{flex:0 0 auto;width:91.6666666667%}.col-sm-12{flex:0 0 auto;width:100%}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.3333333333%}.offset-sm-2{margin-left:16.6666666667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.3333333333%}.offset-sm-5{margin-left:41.6666666667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.3333333333%}.offset-sm-8{margin-left:66.6666666667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.3333333333%}.offset-sm-11{margin-left:91.6666666667%}.g-sm-0,.gx-sm-0{--bs-gutter-x:0}.g-sm-0,.gy-sm-0{--bs-gutter-y:0}.g-sm-1,.gx-sm-1{--bs-gutter-x:0.25rem}.g-sm-1,.gy-sm-1{--bs-gutter-y:0.25rem}.g-sm-2,.gx-sm-2{--bs-gutter-x:0.5rem}.g-sm-2,.gy-sm-2{--bs-gutter-y:0.5rem}.g-sm-3,.gx-sm-3{--bs-gutter-x:1rem}.g-sm-3,.gy-sm-3{--bs-gutter-y:1rem}.g-sm-4,.gx-sm-4{--bs-gutter-x:1.5rem}.g-sm-4,.gy-sm-4{--bs-gutter-y:1.5rem}.g-sm-5,.gx-sm-5{--bs-gutter-x:3rem}.g-sm-5,.gy-sm-5{--bs-gutter-y:3rem}}@media (min-width:768px){.col-md{flex:1 0 0%}.row-cols-md-auto>*{flex:0 0 auto;width:auto}.row-cols-md-1>*{flex:0 0 auto;width:100%}.row-cols-md-2>*{flex:0 0 auto;width:50%}.row-cols-md-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-md-4>*{flex:0 0 auto;width:25%}.row-cols-md-5>*{flex:0 0 auto;width:20%}.row-cols-md-6>*{flex:0 0 auto;width:16.6666666667%}.col-md-auto{flex:0 0 auto;width:auto}.col-md-1{flex:0 0 auto;width:8.3333333333%}.col-md-2{flex:0 0 auto;width:16.6666666667%}.col-md-3{flex:0 0 auto;width:25%}.col-md-4{flex:0 0 auto;width:33.3333333333%}.col-md-5{flex:0 0 auto;width:41.6666666667%}.col-md-6{flex:0 0 auto;width:50%}.col-md-7{flex:0 0 auto;width:58.3333333333%}.col-md-8{flex:0 0 auto;width:66.6666666667%}.col-md-9{flex:0 0 auto;width:75%}.col-md-10{flex:0 0 auto;width:83.3333333333%}.col-md-11{flex:0 0 auto;width:91.6666666667%}.col-md-12{flex:0 0 auto;width:100%}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.3333333333%}.offset-md-2{margin-left:16.6666666667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.3333333333%}.offset-md-5{margin-left:41.6666666667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.3333333333%}.offset-md-8{margin-left:66.6666666667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.3333333333%}.offset-md-11{margin-left:91.6666666667%}.g-md-0,.gx-md-0{--bs-gutter-x:0}.g-md-0,.gy-md-0{--bs-gutter-y:0}.g-md-1,.gx-md-1{--bs-gutter-x:0.25rem}.g-md-1,.gy-md-1{--bs-gutter-y:0.25rem}.g-md-2,.gx-md-2{--bs-gutter-x:0.5rem}.g-md-2,.gy-md-2{--bs-gutter-y:0.5rem}.g-md-3,.gx-md-3{--bs-gutter-x:1rem}.g-md-3,.gy-md-3{--bs-gutter-y:1rem}.g-md-4,.gx-md-4{--bs-gutter-x:1.5rem}.g-md-4,.gy-md-4{--bs-gutter-y:1.5rem}.g-md-5,.gx-md-5{--bs-gutter-x:3rem}.g-md-5,.gy-md-5{--bs-gutter-y:3rem}}@media (min-width:992px){.col-lg{flex:1 0 0%}.row-cols-lg-auto>*{flex:0 0 auto;width:auto}.row-cols-lg-1>*{flex:0 0 auto;width:100%}.row-cols-lg-2>*{flex:0 0 auto;width:50%}.row-cols-lg-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-lg-4>*{flex:0 0 auto;width:25%}.row-cols-lg-5>*{flex:0 0 auto;width:20%}.row-cols-lg-6>*{flex:0 0 auto;width:16.6666666667%}.col-lg-auto{flex:0 0 auto;width:auto}.col-lg-1{flex:0 0 auto;width:8.3333333333%}.col-lg-2{flex:0 0 auto;width:16.6666666667%}.col-lg-3{flex:0 0 auto;width:25%}.col-lg-4{flex:0 0 auto;width:33.3333333333%}.col-lg-5{flex:0 0 auto;width:41.6666666667%}.col-lg-6{flex:0 0 auto;width:50%}.col-lg-7{flex:0 0 auto;width:58.3333333333%}.col-lg-8{flex:0 0 auto;width:66.6666666667%}.col-lg-9{flex:0 0 auto;width:75%}.col-lg-10{flex:0 0 auto;width:83.3333333333%}.col-lg-11{flex:0 0 auto;width:91.6666666667%}.col-lg-12{flex:0 0 auto;width:100%}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.3333333333%}.offset-lg-2{margin-left:16.6666666667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.3333333333%}.offset-lg-5{margin-left:41.6666666667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.3333333333%}.offset-lg-8{margin-left:66.6666666667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.3333333333%}.offset-lg-11{margin-left:91.6666666667%}.g-lg-0,.gx-lg-0{--bs-gutter-x:0}.g-lg-0,.gy-lg-0{--bs-gutter-y:0}.g-lg-1,.gx-lg-1{--bs-gutter-x:0.25rem}.g-lg-1,.gy-lg-1{--bs-gutter-y:0.25rem}.g-lg-2,.gx-lg-2{--bs-gutter-x:0.5rem}.g-lg-2,.gy-lg-2{--bs-gutter-y:0.5rem}.g-lg-3,.gx-lg-3{--bs-gutter-x:1rem}.g-lg-3,.gy-lg-3{--bs-gutter-y:1rem}.g-lg-4,.gx-lg-4{--bs-gutter-x:1.5rem}.g-lg-4,.gy-lg-4{--bs-gutter-y:1.5rem}.g-lg-5,.gx-lg-5{--bs-gutter-x:3rem}.g-lg-5,.gy-lg-5{--bs-gutter-y:3rem}}@media (min-width:1200px){.col-xl{flex:1 0 0%}.row-cols-xl-auto>*{flex:0 0 auto;width:auto}.row-cols-xl-1>*{flex:0 0 auto;width:100%}.row-cols-xl-2>*{flex:0 0 auto;width:50%}.row-cols-xl-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-xl-4>*{flex:0 0 auto;width:25%}.row-cols-xl-5>*{flex:0 0 auto;width:20%}.row-cols-xl-6>*{flex:0 0 auto;width:16.6666666667%}.col-xl-auto{flex:0 0 auto;width:auto}.col-xl-1{flex:0 0 auto;width:8.3333333333%}.col-xl-2{flex:0 0 auto;width:16.6666666667%}.col-xl-3{flex:0 0 auto;width:25%}.col-xl-4{flex:0 0 auto;width:33.3333333333%}.col-xl-5{flex:0 0 auto;width:41.6666666667%}.col-xl-6{flex:0 0 auto;width:50%}.col-xl-7{flex:0 0 auto;width:58.3333333333%}.col-xl-8{flex:0 0 auto;width:66.6666666667%}.col-xl-9{flex:0 0 auto;width:75%}.col-xl-10{flex:0 0 auto;width:83.3333333333%}.col-xl-11{flex:0 0 auto;width:91.6666666667%}.col-xl-12{flex:0 0 auto;width:100%}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.3333333333%}.offset-xl-2{margin-left:16.6666666667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.3333333333%}.offset-xl-5{margin-left:41.6666666667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.3333333333%}.offset-xl-8{margin-left:66.6666666667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.3333333333%}.offset-xl-11{margin-left:91.6666666667%}.g-xl-0,.gx-xl-0{--bs-gutter-x:0}.g-xl-0,.gy-xl-0{--bs-gutter-y:0}.g-xl-1,.gx-xl-1{--bs-gutter-x:0.25rem}.g-xl-1,.gy-xl-1{--bs-gutter-y:0.25rem}.g-xl-2,.gx-xl-2{--bs-gutter-x:0.5rem}.g-xl-2,.gy-xl-2{--bs-gutter-y:0.5rem}.g-xl-3,.gx-xl-3{--bs-gutter-x:1rem}.g-xl-3,.gy-xl-3{--bs-gutter-y:1rem}.g-xl-4,.gx-xl-4{--bs-gutter-x:1.5rem}.g-xl-4,.gy-xl-4{--bs-gutter-y:1.5rem}.g-xl-5,.gx-xl-5{--bs-gutter-x:3rem}.g-xl-5,.gy-xl-5{--bs-gutter-y:3rem}}@media (min-width:1400px){.col-xxl{flex:1 0 0%}.row-cols-xxl-auto>*{flex:0 0 auto;width:auto}.row-cols-xxl-1>*{flex:0 0 auto;width:100%}.row-cols-xxl-2>*{flex:0 0 auto;width:50%}.row-cols-xxl-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-xxl-4>*{flex:0 0 auto;width:25%}.row-cols-xxl-5>*{flex:0 0 auto;width:20%}.row-cols-xxl-6>*{flex:0 0 auto;width:16.6666666667%}.col-xxl-auto{flex:0 0 auto;width:auto}.col-xxl-1{flex:0 0 auto;width:8.3333333333%}.col-xxl-2{flex:0 0 auto;width:16.6666666667%}.col-xxl-3{flex:0 0 auto;width:25%}.col-xxl-4{flex:0 0 auto;width:33.3333333333%}.col-xxl-5{flex:0 0 auto;width:41.6666666667%}.col-xxl-6{flex:0 0 auto;width:50%}.col-xxl-7{flex:0 0 auto;width:58.3333333333%}.col-xxl-8{flex:0 0 auto;width:66.6666666667%}.col-xxl-9{flex:0 0 auto;width:75%}.col-xxl-10{flex:0 0 auto;width:83.3333333333%}.col-xxl-11{flex:0 0 auto;width:91.6666666667%}.col-xxl-12{flex:0 0 auto;width:100%}.offset-xxl-0{margin-left:0}.offset-xxl-1{margin-left:8.3333333333%}.offset-xxl-2{margin-left:16.6666666667%}.offset-xxl-3{margin-left:25%}.offset-xxl-4{margin-left:33.3333333333%}.offset-xxl-5{margin-left:41.6666666667%}.offset-xxl-6{margin-left:50%}.offset-xxl-7{margin-left:58.3333333333%}.offset-xxl-8{margin-left:66.6666666667%}.offset-xxl-9{margin-left:75%}.offset-xxl-10{margin-left:83.3333333333%}.offset-xxl-11{margin-left:91.6666666667%}.g-xxl-0,.gx-xxl-0{--bs-gutter-x:0}.g-xxl-0,.gy-xxl-0{--bs-gutter-y:0}.g-xxl-1,.gx-xxl-1{--bs-gutter-x:0.25rem}.g-xxl-1,.gy-xxl-1{--bs-gutter-y:0.25rem}.g-xxl-2,.gx-xxl-2{--bs-gutter-x:0.5rem}.g-xxl-2,.gy-xxl-2{--bs-gutter-y:0.5rem}.g-xxl-3,.gx-xxl-3{--bs-gutter-x:1rem}.g-xxl-3,.gy-xxl-3{--bs-gutter-y:1rem}.g-xxl-4,.gx-xxl-4{--bs-gutter-x:1.5rem}.g-xxl-4,.gy-xxl-4{--bs-gutter-y:1.5rem}.g-xxl-5,.gx-xxl-5{--bs-gutter-x:3rem}.g-xxl-5,.gy-xxl-5{--bs-gutter-y:3rem}}.table{--bs-table-bg:transparent;--bs-table-striped-color:#212529;--bs-table-striped-bg:rgba(0, 0, 0, 0.05);--bs-table-active-color:#212529;--bs-table-active-bg:rgba(0, 0, 0, 0.1);--bs-table-hover-color:#212529;--bs-table-hover-bg:rgba(0, 0, 0, 0.075);width:100%;margin-bottom:1rem;color:#212529;vertical-align:top;border-color:#dee2e6}.table>:not(caption)>*>*{padding:.5rem .5rem;background-color:var(--bs-table-bg);background-image:linear-gradient(var(--bs-table-accent-bg),var(--bs-table-accent-bg));border-bottom-width:1px}.table>tbody{vertical-align:inherit}.table>thead{vertical-align:bottom}.table>:not(:last-child)>:last-child>*{border-bottom-color:currentColor}.caption-top{caption-side:top}.table-sm>:not(caption)>*>*{padding:.25rem .25rem}.table-bordered>:not(caption)>*{border-width:1px 0}.table-bordered>:not(caption)>*>*{border-width:0 1px}.table-borderless>:not(caption)>*>*{border-bottom-width:0}.table-striped>tbody>tr:nth-of-type(odd){--bs-table-accent-bg:var(--bs-table-striped-bg);color:var(--bs-table-striped-color)}.table-active{--bs-table-accent-bg:var(--bs-table-active-bg);color:var(--bs-table-active-color)}.table-hover>tbody>tr:hover{--bs-table-accent-bg:var(--bs-table-hover-bg);color:var(--bs-table-hover-color)}.table-primary{--bs-table-bg:#cfe2ff;--bs-table-striped-bg:#c5d7f2;--bs-table-striped-color:#000;--bs-table-active-bg:#bacbe6;--bs-table-active-color:#000;--bs-table-hover-bg:#bfd1ec;--bs-table-hover-color:#000;color:#000;border-color:#bacbe6}.table-secondary{--bs-table-bg:#e2e3e5;--bs-table-striped-bg:#d7d8da;--bs-table-striped-color:#000;--bs-table-active-bg:#cbccce;--bs-table-active-color:#000;--bs-table-hover-bg:#d1d2d4;--bs-table-hover-color:#000;color:#000;border-color:#cbccce}.table-success{--bs-table-bg:#d1e7dd;--bs-table-striped-bg:#c7dbd2;--bs-table-striped-color:#000;--bs-table-active-bg:#bcd0c7;--bs-table-active-color:#000;--bs-table-hover-bg:#c1d6cc;--bs-table-hover-color:#000;color:#000;border-color:#bcd0c7}.table-info{--bs-table-bg:#cff4fc;--bs-table-striped-bg:#c5e8ef;--bs-table-striped-color:#000;--bs-table-active-bg:#badce3;--bs-table-active-color:#000;--bs-table-hover-bg:#bfe2e9;--bs-table-hover-color:#000;color:#000;border-color:#badce3}.table-warning{--bs-table-bg:#fff3cd;--bs-table-striped-bg:#f2e7c3;--bs-table-striped-color:#000;--bs-table-active-bg:#e6dbb9;--bs-table-active-color:#000;--bs-table-hover-bg:#ece1be;--bs-table-hover-color:#000;color:#000;border-color:#e6dbb9}.table-danger{--bs-table-bg:#f8d7da;--bs-table-striped-bg:#eccccf;--bs-table-striped-color:#000;--bs-table-active-bg:#dfc2c4;--bs-table-active-color:#000;--bs-table-hover-bg:#e5c7ca;--bs-table-hover-color:#000;color:#000;border-color:#dfc2c4}.table-light{--bs-table-bg:#f8f9fa;--bs-table-striped-bg:#ecedee;--bs-table-striped-color:#000;--bs-table-active-bg:#dfe0e1;--bs-table-active-color:#000;--bs-table-hover-bg:#e5e6e7;--bs-table-hover-color:#000;color:#000;border-color:#dfe0e1}.table-dark{--bs-table-bg:#212529;--bs-table-striped-bg:#2c3034;--bs-table-striped-color:#fff;--bs-table-active-bg:#373b3e;--bs-table-active-color:#fff;--bs-table-hover-bg:#323539;--bs-table-hover-color:#fff;color:#fff;border-color:#373b3e}.table-responsive{overflow-x:auto;-webkit-overflow-scrolling:touch}@media (max-width:575.98px){.table-responsive-sm{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width:767.98px){.table-responsive-md{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width:991.98px){.table-responsive-lg{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width:1199.98px){.table-responsive-xl{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width:1399.98px){.table-responsive-xxl{overflow-x:auto;-webkit-overflow-scrolling:touch}}.form-label{margin-bottom:.5rem}.col-form-label{padding-top:calc(.375rem + 1px);padding-bottom:calc(.375rem + 1px);margin-bottom:0;font-size:inherit;line-height:1.5}.col-form-label-lg{padding-top:calc(.5rem + 1px);padding-bottom:calc(.5rem + 1px);font-size:1.25rem}.col-form-label-sm{padding-top:calc(.25rem + 1px);padding-bottom:calc(.25rem + 1px);font-size:.875rem}.form-text{margin-top:.25rem;font-size:.875em;color:#6c757d}.form-control{display:block;width:100%;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control{transition:none}}.form-control[type=file]{overflow:hidden}.form-control[type=file]:not(:disabled):not([readonly]){cursor:pointer}.form-control:focus{color:#212529;background-color:#fff;border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.form-control::-webkit-date-and-time-value{height:1.5em}.form-control::-webkit-input-placeholder{color:#6c757d;opacity:1}.form-control::-moz-placeholder{color:#6c757d;opacity:1}.form-control::placeholder{color:#6c757d;opacity:1}.form-control:disabled,.form-control[readonly]{background-color:#e9ecef;opacity:1}.form-control::file-selector-button{padding:.375rem .75rem;margin:-.375rem -.75rem;-webkit-margin-end:.75rem;margin-inline-end:.75rem;color:#212529;background-color:#e9ecef;pointer-events:none;border-color:inherit;border-style:solid;border-width:0;border-inline-end-width:1px;border-radius:0;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control::file-selector-button{transition:none}}.form-control:hover:not(:disabled):not([readonly])::file-selector-button{background-color:#dde0e3}.form-control::-webkit-file-upload-button{padding:.375rem .75rem;margin:-.375rem -.75rem;-webkit-margin-end:.75rem;margin-inline-end:.75rem;color:#212529;background-color:#e9ecef;pointer-events:none;border-color:inherit;border-style:solid;border-width:0;border-inline-end-width:1px;border-radius:0;-webkit-transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control::-webkit-file-upload-button{-webkit-transition:none;transition:none}}.form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button{background-color:#dde0e3}.form-control-plaintext{display:block;width:100%;padding:.375rem 0;margin-bottom:0;line-height:1.5;color:#212529;background-color:transparent;border:solid transparent;border-width:1px 0}.form-control-plaintext.form-control-lg,.form-control-plaintext.form-control-sm{padding-right:0;padding-left:0}.form-control-sm{min-height:calc(1.5em + .5rem + 2px);padding:.25rem .5rem;font-size:.875rem;border-radius:.2rem}.form-control-sm::file-selector-button{padding:.25rem .5rem;margin:-.25rem -.5rem;-webkit-margin-end:.5rem;margin-inline-end:.5rem}.form-control-sm::-webkit-file-upload-button{padding:.25rem .5rem;margin:-.25rem -.5rem;-webkit-margin-end:.5rem;margin-inline-end:.5rem}.form-control-lg{min-height:calc(1.5em + 1rem + 2px);padding:.5rem 1rem;font-size:1.25rem;border-radius:.3rem}.form-control-lg::file-selector-button{padding:.5rem 1rem;margin:-.5rem -1rem;-webkit-margin-end:1rem;margin-inline-end:1rem}.form-control-lg::-webkit-file-upload-button{padding:.5rem 1rem;margin:-.5rem -1rem;-webkit-margin-end:1rem;margin-inline-end:1rem}textarea.form-control{min-height:calc(1.5em + .75rem + 2px)}textarea.form-control-sm{min-height:calc(1.5em + .5rem + 2px)}textarea.form-control-lg{min-height:calc(1.5em + 1rem + 2px)}.form-control-color{max-width:3rem;height:auto;padding:.375rem}.form-control-color:not(:disabled):not([readonly]){cursor:pointer}.form-control-color::-moz-color-swatch{height:1.5em;border-radius:.25rem}.form-control-color::-webkit-color-swatch{height:1.5em;border-radius:.25rem}.form-select{display:block;width:100%;padding:.375rem 1.75rem .375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;vertical-align:middle;background-color:#fff;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right .75rem center;background-size:16px 12px;border:1px solid #ced4da;border-radius:.25rem;-webkit-appearance:none;-moz-appearance:none;appearance:none}.form-select:focus{border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.form-select[multiple],.form-select[size]:not([size=\"1\"]){padding-right:.75rem;background-image:none}.form-select:disabled{color:#6c757d;background-color:#e9ecef}.form-select:-moz-focusring{color:transparent;text-shadow:0 0 0 #212529}.form-select-sm{padding-top:.25rem;padding-bottom:.25rem;padding-left:.5rem;font-size:.875rem}.form-select-lg{padding-top:.5rem;padding-bottom:.5rem;padding-left:1rem;font-size:1.25rem}.form-check{display:block;min-height:1.5rem;padding-left:1.5em;margin-bottom:.125rem}.form-check .form-check-input{float:left;margin-left:-1.5em}.form-check-input{width:1em;height:1em;margin-top:.25em;vertical-align:top;background-color:#fff;background-repeat:no-repeat;background-position:center;background-size:contain;border:1px solid rgba(0,0,0,.25);-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-print-color-adjust:exact;color-adjust:exact;transition:background-color .15s ease-in-out,background-position .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-check-input{transition:none}}.form-check-input[type=checkbox]{border-radius:.25em}.form-check-input[type=radio]{border-radius:50%}.form-check-input:active{filter:brightness(90%)}.form-check-input:focus{border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.form-check-input:checked{background-color:#0d6efd;border-color:#0d6efd}.form-check-input:checked[type=checkbox]{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e\")}.form-check-input:checked[type=radio]{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e\")}.form-check-input[type=checkbox]:indeterminate{background-color:#0d6efd;border-color:#0d6efd;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e\")}.form-check-input:disabled{pointer-events:none;filter:none;opacity:.5}.form-check-input:disabled~.form-check-label,.form-check-input[disabled]~.form-check-label{opacity:.5}.form-switch{padding-left:2.5em}.form-switch .form-check-input{width:2em;margin-left:-2.5em;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e\");background-position:left center;border-radius:2em}.form-switch .form-check-input:focus{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2386b7fe'/%3e%3c/svg%3e\")}.form-switch .form-check-input:checked{background-position:right center;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")}.form-check-inline{display:inline-block;margin-right:1rem}.btn-check{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.btn-check:disabled+.btn,.btn-check[disabled]+.btn{pointer-events:none;filter:none;opacity:.65}.form-range{width:100%;height:1.5rem;padding:0;background-color:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none}.form-range:focus{outline:0}.form-range:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .25rem rgba(13,110,253,.25)}.form-range:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .25rem rgba(13,110,253,.25)}.form-range::-moz-focus-outer{border:0}.form-range::-webkit-slider-thumb{width:1rem;height:1rem;margin-top:-.25rem;background-color:#0d6efd;border:0;border-radius:1rem;-webkit-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-webkit-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.form-range::-webkit-slider-thumb{-webkit-transition:none;transition:none}}.form-range::-webkit-slider-thumb:active{background-color:#b6d4fe}.form-range::-webkit-slider-runnable-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.form-range::-moz-range-thumb{width:1rem;height:1rem;background-color:#0d6efd;border:0;border-radius:1rem;-moz-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-moz-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.form-range::-moz-range-thumb{-moz-transition:none;transition:none}}.form-range::-moz-range-thumb:active{background-color:#b6d4fe}.form-range::-moz-range-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.form-range:disabled{pointer-events:none}.form-range:disabled::-webkit-slider-thumb{background-color:#adb5bd}.form-range:disabled::-moz-range-thumb{background-color:#adb5bd}.form-floating{position:relative}.form-floating>.form-control,.form-floating>.form-select{height:calc(3.5rem + 2px);padding:1rem .75rem}.form-floating>label{position:absolute;top:0;left:0;height:100%;padding:1rem .75rem;pointer-events:none;border:1px solid transparent;transform-origin:0 0;transition:opacity .1s ease-in-out,transform .1s ease-in-out}@media (prefers-reduced-motion:reduce){.form-floating>label{transition:none}}.form-floating>.form-control::-webkit-input-placeholder{color:transparent}.form-floating>.form-control::-moz-placeholder{color:transparent}.form-floating>.form-control::placeholder{color:transparent}.form-floating>.form-control:not(:-moz-placeholder-shown){padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-control:focus,.form-floating>.form-control:not(:placeholder-shown){padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-control:-webkit-autofill{padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-select{padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-control:not(:-moz-placeholder-shown)~label{opacity:.65;transform:scale(.85) translateY(-.5rem) translateX(.15rem)}.form-floating>.form-control:focus~label,.form-floating>.form-control:not(:placeholder-shown)~label,.form-floating>.form-select~label{opacity:.65;transform:scale(.85) translateY(-.5rem) translateX(.15rem)}.form-floating>.form-control:-webkit-autofill~label{opacity:.65;transform:scale(.85) translateY(-.5rem) translateX(.15rem)}.input-group{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}.input-group>.form-control,.input-group>.form-select{position:relative;flex:1 1 auto;width:1%;min-width:0}.input-group>.form-control:focus,.input-group>.form-select:focus{z-index:3}.input-group .btn{position:relative;z-index:2}.input-group .btn:focus{z-index:3}.input-group-text{display:flex;align-items:center;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:center;white-space:nowrap;background-color:#e9ecef;border:1px solid #ced4da;border-radius:.25rem}.input-group-lg>.btn,.input-group-lg>.form-control,.input-group-lg>.form-select,.input-group-lg>.input-group-text{padding:.5rem 1rem;font-size:1.25rem;border-radius:.3rem}.input-group-sm>.btn,.input-group-sm>.form-control,.input-group-sm>.form-select,.input-group-sm>.input-group-text{padding:.25rem .5rem;font-size:.875rem;border-radius:.2rem}.input-group-lg>.form-select,.input-group-sm>.form-select{padding-right:1.75rem}.input-group:not(.has-validation)>.dropdown-toggle:nth-last-child(n+3),.input-group:not(.has-validation)>:not(:last-child):not(.dropdown-toggle):not(.dropdown-menu){border-top-right-radius:0;border-bottom-right-radius:0}.input-group.has-validation>.dropdown-toggle:nth-last-child(n+4),.input-group.has-validation>:nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu){border-top-right-radius:0;border-bottom-right-radius:0}.input-group>:not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback){margin-left:-1px;border-top-left-radius:0;border-bottom-left-radius:0}.valid-feedback{display:none;width:100%;margin-top:.25rem;font-size:.875em;color:#198754}.valid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;color:#fff;background-color:rgba(25,135,84,.9);border-radius:.25rem}.is-valid~.valid-feedback,.is-valid~.valid-tooltip,.was-validated :valid~.valid-feedback,.was-validated :valid~.valid-tooltip{display:block}.form-control.is-valid,.was-validated .form-control:valid{border-color:#198754;padding-right:calc(1.5em + .75rem);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.form-control.is-valid:focus,.was-validated .form-control:valid:focus{border-color:#198754;box-shadow:0 0 0 .25rem rgba(25,135,84,.25)}.was-validated textarea.form-control:valid,textarea.form-control.is-valid{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.form-select.is-valid,.was-validated .form-select:valid{border-color:#198754;padding-right:calc(.75em + 2.3125rem);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\"),url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");background-position:right .75rem center,center right 1.75rem;background-size:16px 12px,calc(.75em + .375rem) calc(.75em + .375rem)}.form-select.is-valid:focus,.was-validated .form-select:valid:focus{border-color:#198754;box-shadow:0 0 0 .25rem rgba(25,135,84,.25)}.form-check-input.is-valid,.was-validated .form-check-input:valid{border-color:#198754}.form-check-input.is-valid:checked,.was-validated .form-check-input:valid:checked{background-color:#198754}.form-check-input.is-valid:focus,.was-validated .form-check-input:valid:focus{box-shadow:0 0 0 .25rem rgba(25,135,84,.25)}.form-check-input.is-valid~.form-check-label,.was-validated .form-check-input:valid~.form-check-label{color:#198754}.form-check-inline .form-check-input~.valid-feedback{margin-left:.5em}.invalid-feedback{display:none;width:100%;margin-top:.25rem;font-size:.875em;color:#dc3545}.invalid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;color:#fff;background-color:rgba(220,53,69,.9);border-radius:.25rem}.is-invalid~.invalid-feedback,.is-invalid~.invalid-tooltip,.was-validated :invalid~.invalid-feedback,.was-validated :invalid~.invalid-tooltip{display:block}.form-control.is-invalid,.was-validated .form-control:invalid{border-color:#dc3545;padding-right:calc(1.5em + .75rem);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.form-control.is-invalid:focus,.was-validated .form-control:invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .25rem rgba(220,53,69,.25)}.was-validated textarea.form-control:invalid,textarea.form-control.is-invalid{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.form-select.is-invalid,.was-validated .form-select:invalid{border-color:#dc3545;padding-right:calc(.75em + 2.3125rem);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\"),url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");background-position:right .75rem center,center right 1.75rem;background-size:16px 12px,calc(.75em + .375rem) calc(.75em + .375rem)}.form-select.is-invalid:focus,.was-validated .form-select:invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .25rem rgba(220,53,69,.25)}.form-check-input.is-invalid,.was-validated .form-check-input:invalid{border-color:#dc3545}.form-check-input.is-invalid:checked,.was-validated .form-check-input:invalid:checked{background-color:#dc3545}.form-check-input.is-invalid:focus,.was-validated .form-check-input:invalid:focus{box-shadow:0 0 0 .25rem rgba(220,53,69,.25)}.form-check-input.is-invalid~.form-check-label,.was-validated .form-check-input:invalid~.form-check-label{color:#dc3545}.form-check-inline .form-check-input~.invalid-feedback{margin-left:.5em}.btn{display:inline-block;font-weight:400;line-height:1.5;color:#212529;text-align:center;text-decoration:none;vertical-align:middle;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;background-color:transparent;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.btn{transition:none}}.btn:hover{color:#212529}.btn-check:focus+.btn,.btn:focus{outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.btn.disabled,.btn:disabled,fieldset:disabled .btn{pointer-events:none;opacity:.65}.btn-primary{color:#fff;background-color:#0d6efd;border-color:#0d6efd}.btn-primary:hover{color:#fff;background-color:#0b5ed7;border-color:#0a58ca}.btn-check:focus+.btn-primary,.btn-primary:focus{color:#fff;background-color:#0b5ed7;border-color:#0a58ca;box-shadow:0 0 0 .25rem rgba(49,132,253,.5)}.btn-check:active+.btn-primary,.btn-check:checked+.btn-primary,.btn-primary.active,.btn-primary:active,.show>.btn-primary.dropdown-toggle{color:#fff;background-color:#0a58ca;border-color:#0a53be}.btn-check:active+.btn-primary:focus,.btn-check:checked+.btn-primary:focus,.btn-primary.active:focus,.btn-primary:active:focus,.show>.btn-primary.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(49,132,253,.5)}.btn-primary.disabled,.btn-primary:disabled{color:#fff;background-color:#0d6efd;border-color:#0d6efd}.btn-secondary{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-secondary:hover{color:#fff;background-color:#5c636a;border-color:#565e64}.btn-check:focus+.btn-secondary,.btn-secondary:focus{color:#fff;background-color:#5c636a;border-color:#565e64;box-shadow:0 0 0 .25rem rgba(130,138,145,.5)}.btn-check:active+.btn-secondary,.btn-check:checked+.btn-secondary,.btn-secondary.active,.btn-secondary:active,.show>.btn-secondary.dropdown-toggle{color:#fff;background-color:#565e64;border-color:#51585e}.btn-check:active+.btn-secondary:focus,.btn-check:checked+.btn-secondary:focus,.btn-secondary.active:focus,.btn-secondary:active:focus,.show>.btn-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(130,138,145,.5)}.btn-secondary.disabled,.btn-secondary:disabled{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-success{color:#fff;background-color:#198754;border-color:#198754}.btn-success:hover{color:#fff;background-color:#157347;border-color:#146c43}.btn-check:focus+.btn-success,.btn-success:focus{color:#fff;background-color:#157347;border-color:#146c43;box-shadow:0 0 0 .25rem rgba(60,153,110,.5)}.btn-check:active+.btn-success,.btn-check:checked+.btn-success,.btn-success.active,.btn-success:active,.show>.btn-success.dropdown-toggle{color:#fff;background-color:#146c43;border-color:#13653f}.btn-check:active+.btn-success:focus,.btn-check:checked+.btn-success:focus,.btn-success.active:focus,.btn-success:active:focus,.show>.btn-success.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(60,153,110,.5)}.btn-success.disabled,.btn-success:disabled{color:#fff;background-color:#198754;border-color:#198754}.btn-info{color:#000;background-color:#0dcaf0;border-color:#0dcaf0}.btn-info:hover{color:#000;background-color:#31d2f2;border-color:#25cff2}.btn-check:focus+.btn-info,.btn-info:focus{color:#000;background-color:#31d2f2;border-color:#25cff2;box-shadow:0 0 0 .25rem rgba(11,172,204,.5)}.btn-check:active+.btn-info,.btn-check:checked+.btn-info,.btn-info.active,.btn-info:active,.show>.btn-info.dropdown-toggle{color:#000;background-color:#3dd5f3;border-color:#25cff2}.btn-check:active+.btn-info:focus,.btn-check:checked+.btn-info:focus,.btn-info.active:focus,.btn-info:active:focus,.show>.btn-info.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(11,172,204,.5)}.btn-info.disabled,.btn-info:disabled{color:#000;background-color:#0dcaf0;border-color:#0dcaf0}.btn-warning{color:#000;background-color:#ffc107;border-color:#ffc107}.btn-warning:hover{color:#000;background-color:#ffca2c;border-color:#ffc720}.btn-check:focus+.btn-warning,.btn-warning:focus{color:#000;background-color:#ffca2c;border-color:#ffc720;box-shadow:0 0 0 .25rem rgba(217,164,6,.5)}.btn-check:active+.btn-warning,.btn-check:checked+.btn-warning,.btn-warning.active,.btn-warning:active,.show>.btn-warning.dropdown-toggle{color:#000;background-color:#ffcd39;border-color:#ffc720}.btn-check:active+.btn-warning:focus,.btn-check:checked+.btn-warning:focus,.btn-warning.active:focus,.btn-warning:active:focus,.show>.btn-warning.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(217,164,6,.5)}.btn-warning.disabled,.btn-warning:disabled{color:#000;background-color:#ffc107;border-color:#ffc107}.btn-danger{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-danger:hover{color:#fff;background-color:#bb2d3b;border-color:#b02a37}.btn-check:focus+.btn-danger,.btn-danger:focus{color:#fff;background-color:#bb2d3b;border-color:#b02a37;box-shadow:0 0 0 .25rem rgba(225,83,97,.5)}.btn-check:active+.btn-danger,.btn-check:checked+.btn-danger,.btn-danger.active,.btn-danger:active,.show>.btn-danger.dropdown-toggle{color:#fff;background-color:#b02a37;border-color:#a52834}.btn-check:active+.btn-danger:focus,.btn-check:checked+.btn-danger:focus,.btn-danger.active:focus,.btn-danger:active:focus,.show>.btn-danger.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(225,83,97,.5)}.btn-danger.disabled,.btn-danger:disabled{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-light{color:#000;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:hover{color:#000;background-color:#f9fafb;border-color:#f9fafb}.btn-check:focus+.btn-light,.btn-light:focus{color:#000;background-color:#f9fafb;border-color:#f9fafb;box-shadow:0 0 0 .25rem rgba(211,212,213,.5)}.btn-check:active+.btn-light,.btn-check:checked+.btn-light,.btn-light.active,.btn-light:active,.show>.btn-light.dropdown-toggle{color:#000;background-color:#f9fafb;border-color:#f9fafb}.btn-check:active+.btn-light:focus,.btn-check:checked+.btn-light:focus,.btn-light.active:focus,.btn-light:active:focus,.show>.btn-light.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(211,212,213,.5)}.btn-light.disabled,.btn-light:disabled{color:#000;background-color:#f8f9fa;border-color:#f8f9fa}.btn-dark{color:#fff;background-color:#212529;border-color:#212529}.btn-dark:hover{color:#fff;background-color:#1c1f23;border-color:#1a1e21}.btn-check:focus+.btn-dark,.btn-dark:focus{color:#fff;background-color:#1c1f23;border-color:#1a1e21;box-shadow:0 0 0 .25rem rgba(66,70,73,.5)}.btn-check:active+.btn-dark,.btn-check:checked+.btn-dark,.btn-dark.active,.btn-dark:active,.show>.btn-dark.dropdown-toggle{color:#fff;background-color:#1a1e21;border-color:#191c1f}.btn-check:active+.btn-dark:focus,.btn-check:checked+.btn-dark:focus,.btn-dark.active:focus,.btn-dark:active:focus,.show>.btn-dark.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(66,70,73,.5)}.btn-dark.disabled,.btn-dark:disabled{color:#fff;background-color:#212529;border-color:#212529}.btn-outline-primary{color:#0d6efd;border-color:#0d6efd}.btn-outline-primary:hover{color:#fff;background-color:#0d6efd;border-color:#0d6efd}.btn-check:focus+.btn-outline-primary,.btn-outline-primary:focus{box-shadow:0 0 0 .25rem rgba(13,110,253,.5)}.btn-check:active+.btn-outline-primary,.btn-check:checked+.btn-outline-primary,.btn-outline-primary.active,.btn-outline-primary.dropdown-toggle.show,.btn-outline-primary:active{color:#fff;background-color:#0d6efd;border-color:#0d6efd}.btn-check:active+.btn-outline-primary:focus,.btn-check:checked+.btn-outline-primary:focus,.btn-outline-primary.active:focus,.btn-outline-primary.dropdown-toggle.show:focus,.btn-outline-primary:active:focus{box-shadow:0 0 0 .25rem rgba(13,110,253,.5)}.btn-outline-primary.disabled,.btn-outline-primary:disabled{color:#0d6efd;background-color:transparent}.btn-outline-secondary{color:#6c757d;border-color:#6c757d}.btn-outline-secondary:hover{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-check:focus+.btn-outline-secondary,.btn-outline-secondary:focus{box-shadow:0 0 0 .25rem rgba(108,117,125,.5)}.btn-check:active+.btn-outline-secondary,.btn-check:checked+.btn-outline-secondary,.btn-outline-secondary.active,.btn-outline-secondary.dropdown-toggle.show,.btn-outline-secondary:active{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-check:active+.btn-outline-secondary:focus,.btn-check:checked+.btn-outline-secondary:focus,.btn-outline-secondary.active:focus,.btn-outline-secondary.dropdown-toggle.show:focus,.btn-outline-secondary:active:focus{box-shadow:0 0 0 .25rem rgba(108,117,125,.5)}.btn-outline-secondary.disabled,.btn-outline-secondary:disabled{color:#6c757d;background-color:transparent}.btn-outline-success{color:#198754;border-color:#198754}.btn-outline-success:hover{color:#fff;background-color:#198754;border-color:#198754}.btn-check:focus+.btn-outline-success,.btn-outline-success:focus{box-shadow:0 0 0 .25rem rgba(25,135,84,.5)}.btn-check:active+.btn-outline-success,.btn-check:checked+.btn-outline-success,.btn-outline-success.active,.btn-outline-success.dropdown-toggle.show,.btn-outline-success:active{color:#fff;background-color:#198754;border-color:#198754}.btn-check:active+.btn-outline-success:focus,.btn-check:checked+.btn-outline-success:focus,.btn-outline-success.active:focus,.btn-outline-success.dropdown-toggle.show:focus,.btn-outline-success:active:focus{box-shadow:0 0 0 .25rem rgba(25,135,84,.5)}.btn-outline-success.disabled,.btn-outline-success:disabled{color:#198754;background-color:transparent}.btn-outline-info{color:#0dcaf0;border-color:#0dcaf0}.btn-outline-info:hover{color:#000;background-color:#0dcaf0;border-color:#0dcaf0}.btn-check:focus+.btn-outline-info,.btn-outline-info:focus{box-shadow:0 0 0 .25rem rgba(13,202,240,.5)}.btn-check:active+.btn-outline-info,.btn-check:checked+.btn-outline-info,.btn-outline-info.active,.btn-outline-info.dropdown-toggle.show,.btn-outline-info:active{color:#000;background-color:#0dcaf0;border-color:#0dcaf0}.btn-check:active+.btn-outline-info:focus,.btn-check:checked+.btn-outline-info:focus,.btn-outline-info.active:focus,.btn-outline-info.dropdown-toggle.show:focus,.btn-outline-info:active:focus{box-shadow:0 0 0 .25rem rgba(13,202,240,.5)}.btn-outline-info.disabled,.btn-outline-info:disabled{color:#0dcaf0;background-color:transparent}.btn-outline-warning{color:#ffc107;border-color:#ffc107}.btn-outline-warning:hover{color:#000;background-color:#ffc107;border-color:#ffc107}.btn-check:focus+.btn-outline-warning,.btn-outline-warning:focus{box-shadow:0 0 0 .25rem rgba(255,193,7,.5)}.btn-check:active+.btn-outline-warning,.btn-check:checked+.btn-outline-warning,.btn-outline-warning.active,.btn-outline-warning.dropdown-toggle.show,.btn-outline-warning:active{color:#000;background-color:#ffc107;border-color:#ffc107}.btn-check:active+.btn-outline-warning:focus,.btn-check:checked+.btn-outline-warning:focus,.btn-outline-warning.active:focus,.btn-outline-warning.dropdown-toggle.show:focus,.btn-outline-warning:active:focus{box-shadow:0 0 0 .25rem rgba(255,193,7,.5)}.btn-outline-warning.disabled,.btn-outline-warning:disabled{color:#ffc107;background-color:transparent}.btn-outline-danger{color:#dc3545;border-color:#dc3545}.btn-outline-danger:hover{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-check:focus+.btn-outline-danger,.btn-outline-danger:focus{box-shadow:0 0 0 .25rem rgba(220,53,69,.5)}.btn-check:active+.btn-outline-danger,.btn-check:checked+.btn-outline-danger,.btn-outline-danger.active,.btn-outline-danger.dropdown-toggle.show,.btn-outline-danger:active{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-check:active+.btn-outline-danger:focus,.btn-check:checked+.btn-outline-danger:focus,.btn-outline-danger.active:focus,.btn-outline-danger.dropdown-toggle.show:focus,.btn-outline-danger:active:focus{box-shadow:0 0 0 .25rem rgba(220,53,69,.5)}.btn-outline-danger.disabled,.btn-outline-danger:disabled{color:#dc3545;background-color:transparent}.btn-outline-light{color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:hover{color:#000;background-color:#f8f9fa;border-color:#f8f9fa}.btn-check:focus+.btn-outline-light,.btn-outline-light:focus{box-shadow:0 0 0 .25rem rgba(248,249,250,.5)}.btn-check:active+.btn-outline-light,.btn-check:checked+.btn-outline-light,.btn-outline-light.active,.btn-outline-light.dropdown-toggle.show,.btn-outline-light:active{color:#000;background-color:#f8f9fa;border-color:#f8f9fa}.btn-check:active+.btn-outline-light:focus,.btn-check:checked+.btn-outline-light:focus,.btn-outline-light.active:focus,.btn-outline-light.dropdown-toggle.show:focus,.btn-outline-light:active:focus{box-shadow:0 0 0 .25rem rgba(248,249,250,.5)}.btn-outline-light.disabled,.btn-outline-light:disabled{color:#f8f9fa;background-color:transparent}.btn-outline-dark{color:#212529;border-color:#212529}.btn-outline-dark:hover{color:#fff;background-color:#212529;border-color:#212529}.btn-check:focus+.btn-outline-dark,.btn-outline-dark:focus{box-shadow:0 0 0 .25rem rgba(33,37,41,.5)}.btn-check:active+.btn-outline-dark,.btn-check:checked+.btn-outline-dark,.btn-outline-dark.active,.btn-outline-dark.dropdown-toggle.show,.btn-outline-dark:active{color:#fff;background-color:#212529;border-color:#212529}.btn-check:active+.btn-outline-dark:focus,.btn-check:checked+.btn-outline-dark:focus,.btn-outline-dark.active:focus,.btn-outline-dark.dropdown-toggle.show:focus,.btn-outline-dark:active:focus{box-shadow:0 0 0 .25rem rgba(33,37,41,.5)}.btn-outline-dark.disabled,.btn-outline-dark:disabled{color:#212529;background-color:transparent}.btn-link{font-weight:400;color:#0d6efd;text-decoration:underline}.btn-link:hover{color:#0a58ca}.btn-link.disabled,.btn-link:disabled{color:#6c757d}.btn-group-lg>.btn,.btn-lg{padding:.5rem 1rem;font-size:1.25rem;border-radius:.3rem}.btn-group-sm>.btn,.btn-sm{padding:.25rem .5rem;font-size:.875rem;border-radius:.2rem}.fade{transition:opacity .15s linear}@media (prefers-reduced-motion:reduce){.fade{transition:none}}.fade:not(.show){opacity:0}.collapse:not(.show){display:none}.collapsing{height:0;overflow:hidden;transition:height .35s ease}@media (prefers-reduced-motion:reduce){.collapsing{transition:none}}.dropdown,.dropend,.dropstart,.dropup{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.dropdown-toggle:empty::after{margin-left:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;min-width:10rem;padding:.5rem 0;margin:.125rem 0 0;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.dropdown-menu[style]{right:auto!important}.dropdown-menu-start{--bs-position:start;right:auto;left:0}.dropdown-menu-end{--bs-position:end;right:0;left:auto}@media (min-width:576px){.dropdown-menu-sm-start{--bs-position:start;right:auto;left:0}.dropdown-menu-sm-end{--bs-position:end;right:0;left:auto}}@media (min-width:768px){.dropdown-menu-md-start{--bs-position:start;right:auto;left:0}.dropdown-menu-md-end{--bs-position:end;right:0;left:auto}}@media (min-width:992px){.dropdown-menu-lg-start{--bs-position:start;right:auto;left:0}.dropdown-menu-lg-end{--bs-position:end;right:0;left:auto}}@media (min-width:1200px){.dropdown-menu-xl-start{--bs-position:start;right:auto;left:0}.dropdown-menu-xl-end{--bs-position:end;right:0;left:auto}}@media (min-width:1400px){.dropdown-menu-xxl-start{--bs-position:start;right:auto;left:0}.dropdown-menu-xxl-end{--bs-position:end;right:0;left:auto}}.dropup .dropdown-menu{top:auto;bottom:100%;margin-top:0;margin-bottom:.125rem}.dropup .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.dropup .dropdown-toggle:empty::after{margin-left:0}.dropend .dropdown-menu{top:0;right:auto;left:100%;margin-top:0;margin-left:.125rem}.dropend .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid}.dropend .dropdown-toggle:empty::after{margin-left:0}.dropend .dropdown-toggle::after{vertical-align:0}.dropstart .dropdown-menu{top:0;right:100%;left:auto;margin-top:0;margin-right:.125rem}.dropstart .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\"}.dropstart .dropdown-toggle::after{display:none}.dropstart .dropdown-toggle::before{display:inline-block;margin-right:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent}.dropstart .dropdown-toggle:empty::after{margin-left:0}.dropstart .dropdown-toggle::before{vertical-align:0}.dropdown-divider{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid rgba(0,0,0,.15)}.dropdown-item{display:block;width:100%;padding:.25rem 1rem;clear:both;font-weight:400;color:#212529;text-align:inherit;text-decoration:none;white-space:nowrap;background-color:transparent;border:0}.dropdown-item:focus,.dropdown-item:hover{color:#1e2125;background-color:#f8f9fa}.dropdown-item.active,.dropdown-item:active{color:#fff;text-decoration:none;background-color:#0d6efd}.dropdown-item.disabled,.dropdown-item:disabled{color:#6c757d;pointer-events:none;background-color:transparent}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:.5rem 1rem;margin-bottom:0;font-size:.875rem;color:#6c757d;white-space:nowrap}.dropdown-item-text{display:block;padding:.25rem 1rem;color:#212529}.dropdown-menu-dark{color:#dee2e6;background-color:#343a40;border-color:rgba(0,0,0,.15)}.dropdown-menu-dark .dropdown-item{color:#dee2e6}.dropdown-menu-dark .dropdown-item:focus,.dropdown-menu-dark .dropdown-item:hover{color:#fff;background-color:rgba(255,255,255,.15)}.dropdown-menu-dark .dropdown-item.active,.dropdown-menu-dark .dropdown-item:active{color:#fff;background-color:#0d6efd}.dropdown-menu-dark .dropdown-item.disabled,.dropdown-menu-dark .dropdown-item:disabled{color:#adb5bd}.dropdown-menu-dark .dropdown-divider{border-color:rgba(0,0,0,.15)}.dropdown-menu-dark .dropdown-item-text{color:#dee2e6}.dropdown-menu-dark .dropdown-header{color:#adb5bd}.btn-group,.btn-group-vertical{position:relative;display:inline-flex;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{position:relative;flex:1 1 auto}.btn-group-vertical>.btn-check:checked+.btn,.btn-group-vertical>.btn-check:focus+.btn,.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:hover,.btn-group>.btn-check:checked+.btn,.btn-group>.btn-check:focus+.btn,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus,.btn-group>.btn:hover{z-index:1}.btn-toolbar{display:flex;flex-wrap:wrap;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group>.btn-group:not(:first-child),.btn-group>.btn:not(:first-child){margin-left:-1px}.btn-group>.btn-group:not(:last-child)>.btn,.btn-group>.btn:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn-group:not(:first-child)>.btn,.btn-group>.btn:nth-child(n+3),.btn-group>:not(.btn-check)+.btn{border-top-left-radius:0;border-bottom-left-radius:0}.dropdown-toggle-split{padding-right:.5625rem;padding-left:.5625rem}.dropdown-toggle-split::after,.dropend .dropdown-toggle-split::after,.dropup .dropdown-toggle-split::after{margin-left:0}.dropstart .dropdown-toggle-split::before{margin-right:0}.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split{padding-right:.375rem;padding-left:.375rem}.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem}.btn-group-vertical{flex-direction:column;align-items:flex-start;justify-content:center}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group{width:100%}.btn-group-vertical>.btn-group:not(:first-child),.btn-group-vertical>.btn:not(:first-child){margin-top:-1px}.btn-group-vertical>.btn-group:not(:last-child)>.btn,.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:not(:first-child)>.btn,.btn-group-vertical>.btn~.btn{border-top-left-radius:0;border-top-right-radius:0}.nav{display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:block;padding:.5rem 1rem;text-decoration:none;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out}@media (prefers-reduced-motion:reduce){.nav-link{transition:none}}.nav-link.disabled{color:#6c757d;pointer-events:none;cursor:default}.nav-tabs{border-bottom:1px solid #dee2e6}.nav-tabs .nav-link{margin-bottom:-1px;border:1px solid transparent;border-top-left-radius:.25rem;border-top-right-radius:.25rem}.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover{border-color:#e9ecef #e9ecef #dee2e6}.nav-tabs .nav-link.disabled{color:#6c757d;background-color:transparent;border-color:transparent}.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active{color:#495057;background-color:#fff;border-color:#dee2e6 #dee2e6 #fff}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0}.nav-pills .nav-link{border-radius:.25rem}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:#fff;background-color:#0d6efd}.nav-fill .nav-item,.nav-fill>.nav-link{flex:1 1 auto;text-align:center}.nav-justified .nav-item,.nav-justified>.nav-link{flex-basis:0;flex-grow:1;text-align:center}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{position:relative;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;padding-top:.5rem;padding-bottom:.5rem}.navbar>.container,.navbar>.container-fluid,.navbar>.container-lg,.navbar>.container-md,.navbar>.container-sm,.navbar>.container-xl,.navbar>.container-xxl{display:flex;flex-wrap:inherit;align-items:center;justify-content:space-between}.navbar-brand{padding-top:.3125rem;padding-bottom:.3125rem;margin-right:1rem;font-size:1.25rem;text-decoration:none;white-space:nowrap}.navbar-nav{display:flex;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .nav-link{padding-right:0;padding-left:0}.navbar-nav .dropdown-menu{position:static}.navbar-text{padding-top:.5rem;padding-bottom:.5rem}.navbar-collapse{align-items:center;width:100%}.navbar-toggler{padding:.25rem .75rem;font-size:1.25rem;line-height:1;background-color:transparent;border:1px solid transparent;border-radius:.25rem;transition:box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.navbar-toggler{transition:none}}.navbar-toggler:hover{text-decoration:none}.navbar-toggler:focus{text-decoration:none;outline:0;box-shadow:0 0 0 .25rem}.navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;background-repeat:no-repeat;background-position:center;background-size:100%}@media (min-width:576px){.navbar-expand-sm{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-sm .navbar-nav{flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-sm .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-sm .navbar-collapse{display:flex!important}.navbar-expand-sm .navbar-toggler{display:none}}@media (min-width:768px){.navbar-expand-md{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-md .navbar-nav{flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-md .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-md .navbar-collapse{display:flex!important}.navbar-expand-md .navbar-toggler{display:none}}@media (min-width:992px){.navbar-expand-lg{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-lg .navbar-nav{flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-lg .navbar-collapse{display:flex!important}.navbar-expand-lg .navbar-toggler{display:none}}@media (min-width:1200px){.navbar-expand-xl{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-xl .navbar-nav{flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xl .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-xl .navbar-collapse{display:flex!important}.navbar-expand-xl .navbar-toggler{display:none}}@media (min-width:1400px){.navbar-expand-xxl{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-xxl .navbar-nav{flex-direction:row}.navbar-expand-xxl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xxl .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-xxl .navbar-collapse{display:flex!important}.navbar-expand-xxl .navbar-toggler{display:none}}.navbar-expand{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand .navbar-nav{flex-direction:row}.navbar-expand .navbar-nav .dropdown-menu{position:absolute}.navbar-expand .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand .navbar-collapse{display:flex!important}.navbar-expand .navbar-toggler{display:none}.navbar-light .navbar-brand{color:rgba(0,0,0,.9)}.navbar-light .navbar-brand:focus,.navbar-light .navbar-brand:hover{color:rgba(0,0,0,.9)}.navbar-light .navbar-nav .nav-link{color:rgba(0,0,0,.55)}.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover{color:rgba(0,0,0,.7)}.navbar-light .navbar-nav .nav-link.disabled{color:rgba(0,0,0,.3)}.navbar-light .navbar-nav .nav-link.active,.navbar-light .navbar-nav .show>.nav-link{color:rgba(0,0,0,.9)}.navbar-light .navbar-toggler{color:rgba(0,0,0,.55);border-color:rgba(0,0,0,.1)}.navbar-light .navbar-toggler-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")}.navbar-light .navbar-text{color:rgba(0,0,0,.55)}.navbar-light .navbar-text a,.navbar-light .navbar-text a:focus,.navbar-light .navbar-text a:hover{color:rgba(0,0,0,.9)}.navbar-dark .navbar-brand{color:#fff}.navbar-dark .navbar-brand:focus,.navbar-dark .navbar-brand:hover{color:#fff}.navbar-dark .navbar-nav .nav-link{color:rgba(255,255,255,.55)}.navbar-dark .navbar-nav .nav-link:focus,.navbar-dark .navbar-nav .nav-link:hover{color:rgba(255,255,255,.75)}.navbar-dark .navbar-nav .nav-link.disabled{color:rgba(255,255,255,.25)}.navbar-dark .navbar-nav .nav-link.active,.navbar-dark .navbar-nav .show>.nav-link{color:#fff}.navbar-dark .navbar-toggler{color:rgba(255,255,255,.55);border-color:rgba(255,255,255,.1)}.navbar-dark .navbar-toggler-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")}.navbar-dark .navbar-text{color:rgba(255,255,255,.55)}.navbar-dark .navbar-text a,.navbar-dark .navbar-text a:focus,.navbar-dark .navbar-text a:hover{color:#fff}.card{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,.125);border-radius:.25rem}.card>hr{margin-right:0;margin-left:0}.card>.list-group{border-top:inherit;border-bottom:inherit}.card>.list-group:first-child{border-top-width:0;border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.card>.list-group:last-child{border-bottom-width:0;border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.card>.card-header+.list-group,.card>.list-group+.card-footer{border-top:0}.card-body{flex:1 1 auto;padding:1rem 1rem}.card-title{margin-bottom:.5rem}.card-subtitle{margin-top:-.25rem;margin-bottom:0}.card-text:last-child{margin-bottom:0}.card-link:hover{text-decoration:none}.card-link+.card-link{margin-left:1rem}.card-header{padding:.5rem 1rem;margin-bottom:0;background-color:rgba(0,0,0,.03);border-bottom:1px solid rgba(0,0,0,.125)}.card-header:first-child{border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0}.card-footer{padding:.5rem 1rem;background-color:rgba(0,0,0,.03);border-top:1px solid rgba(0,0,0,.125)}.card-footer:last-child{border-radius:0 0 calc(.25rem - 1px) calc(.25rem - 1px)}.card-header-tabs{margin-right:-.5rem;margin-bottom:-.5rem;margin-left:-.5rem;border-bottom:0}.card-header-pills{margin-right:-.5rem;margin-left:-.5rem}.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:1rem;border-radius:calc(.25rem - 1px)}.card-img,.card-img-bottom,.card-img-top{width:100%}.card-img,.card-img-top{border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.card-img,.card-img-bottom{border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.card-group>.card{margin-bottom:.75rem}@media (min-width:576px){.card-group{display:flex;flex-flow:row wrap}.card-group>.card{flex:1 0 0%;margin-bottom:0}.card-group>.card+.card{margin-left:0;border-left:0}.card-group>.card:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.card-group>.card:not(:last-child) .card-header,.card-group>.card:not(:last-child) .card-img-top{border-top-right-radius:0}.card-group>.card:not(:last-child) .card-footer,.card-group>.card:not(:last-child) .card-img-bottom{border-bottom-right-radius:0}.card-group>.card:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.card-group>.card:not(:first-child) .card-header,.card-group>.card:not(:first-child) .card-img-top{border-top-left-radius:0}.card-group>.card:not(:first-child) .card-footer,.card-group>.card:not(:first-child) .card-img-bottom{border-bottom-left-radius:0}}.accordion-button{position:relative;display:flex;align-items:center;width:100%;padding:1rem 1.25rem;font-size:1rem;color:#212529;background-color:transparent;border:1px solid rgba(0,0,0,.125);border-radius:0;overflow-anchor:none;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,border-radius .15s ease}@media (prefers-reduced-motion:reduce){.accordion-button{transition:none}}.accordion-button.collapsed{border-bottom-width:0}.accordion-button:not(.collapsed){color:#0c63e4;background-color:#e7f1ff}.accordion-button:not(.collapsed)::after{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%230c63e4'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\");transform:rotate(180deg)}.accordion-button::after{flex-shrink:0;width:1.25rem;height:1.25rem;margin-left:auto;content:\"\";background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-size:1.25rem;transition:transform .2s ease-in-out}@media (prefers-reduced-motion:reduce){.accordion-button::after{transition:none}}.accordion-button:hover{z-index:2}.accordion-button:focus{z-index:3;border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.accordion-header{margin-bottom:0}.accordion-item:first-of-type .accordion-button{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.accordion-item:last-of-type .accordion-button.collapsed{border-bottom-width:1px;border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.accordion-item:last-of-type .accordion-collapse{border-bottom-width:1px;border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.accordion-collapse{border:solid rgba(0,0,0,.125);border-width:0 1px}.accordion-body{padding:1rem 1.25rem}.accordion-flush .accordion-button{border-right:0;border-left:0;border-radius:0}.accordion-flush .accordion-collapse{border-width:0}.accordion-flush .accordion-item:first-of-type .accordion-button{border-top-width:0;border-top-left-radius:0;border-top-right-radius:0}.accordion-flush .accordion-item:last-of-type .accordion-button.collapsed{border-bottom-width:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.breadcrumb{display:flex;flex-wrap:wrap;padding:0 0;margin-bottom:1rem;list-style:none}.breadcrumb-item+.breadcrumb-item{padding-left:.5rem}.breadcrumb-item+.breadcrumb-item::before{float:left;padding-right:.5rem;color:#6c757d;content:var(--bs-breadcrumb-divider, \"/\")}.breadcrumb-item.active{color:#6c757d}.pagination{display:flex;padding-left:0;list-style:none}.page-link{position:relative;display:block;color:#0d6efd;text-decoration:none;background-color:#fff;border:1px solid #dee2e6;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.page-link{transition:none}}.page-link:hover{z-index:2;color:#0a58ca;background-color:#e9ecef;border-color:#dee2e6}.page-link:focus{z-index:3;color:#0a58ca;background-color:#e9ecef;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.page-item:not(:first-child) .page-link{margin-left:-1px}.page-item.active .page-link{z-index:3;color:#fff;background-color:#0d6efd;border-color:#0d6efd}.page-item.disabled .page-link{color:#6c757d;pointer-events:none;background-color:#fff;border-color:#dee2e6}.page-link{padding:.375rem .75rem}.page-item:first-child .page-link{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.page-item:last-child .page-link{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.pagination-lg .page-link{padding:.75rem 1.5rem;font-size:1.25rem}.pagination-lg .page-item:first-child .page-link{border-top-left-radius:.3rem;border-bottom-left-radius:.3rem}.pagination-lg .page-item:last-child .page-link{border-top-right-radius:.3rem;border-bottom-right-radius:.3rem}.pagination-sm .page-link{padding:.25rem .5rem;font-size:.875rem}.pagination-sm .page-item:first-child .page-link{border-top-left-radius:.2rem;border-bottom-left-radius:.2rem}.pagination-sm .page-item:last-child .page-link{border-top-right-radius:.2rem;border-bottom-right-radius:.2rem}.badge{display:inline-block;padding:.35em .65em;font-size:.75em;font-weight:700;line-height:1;color:#fff;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25rem}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.alert{position:relative;padding:1rem 1rem;margin-bottom:1rem;border:1px solid transparent;border-radius:.25rem}.alert-heading{color:inherit}.alert-link{font-weight:700}.alert-dismissible{padding-right:3rem}.alert-dismissible .btn-close{position:absolute;top:0;right:0;z-index:2;padding:1.25rem 1rem}.alert-primary{color:#084298;background-color:#cfe2ff;border-color:#b6d4fe}.alert-primary .alert-link{color:#06357a}.alert-secondary{color:#41464b;background-color:#e2e3e5;border-color:#d3d6d8}.alert-secondary .alert-link{color:#34383c}.alert-success{color:#0f5132;background-color:#d1e7dd;border-color:#badbcc}.alert-success .alert-link{color:#0c4128}.alert-info{color:#055160;background-color:#cff4fc;border-color:#b6effb}.alert-info .alert-link{color:#04414d}.alert-warning{color:#664d03;background-color:#fff3cd;border-color:#ffecb5}.alert-warning .alert-link{color:#523e02}.alert-danger{color:#842029;background-color:#f8d7da;border-color:#f5c2c7}.alert-danger .alert-link{color:#6a1a21}.alert-light{color:#636464;background-color:#fefefe;border-color:#fdfdfe}.alert-light .alert-link{color:#4f5050}.alert-dark{color:#141619;background-color:#d3d3d4;border-color:#bcbebf}.alert-dark .alert-link{color:#101214}@-webkit-keyframes progress-bar-stripes{0%{background-position-x:1rem}}@keyframes progress-bar-stripes{0%{background-position-x:1rem}}.progress{display:flex;height:1rem;overflow:hidden;font-size:.75rem;background-color:#e9ecef;border-radius:.25rem}.progress-bar{display:flex;flex-direction:column;justify-content:center;overflow:hidden;color:#fff;text-align:center;white-space:nowrap;background-color:#0d6efd;transition:width .6s ease}@media (prefers-reduced-motion:reduce){.progress-bar{transition:none}}.progress-bar-striped{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-size:1rem 1rem}.progress-bar-animated{-webkit-animation:1s linear infinite progress-bar-stripes;animation:1s linear infinite progress-bar-stripes}@media (prefers-reduced-motion:reduce){.progress-bar-animated{-webkit-animation:none;animation:none}}.list-group{display:flex;flex-direction:column;padding-left:0;margin-bottom:0;border-radius:.25rem}.list-group-item-action{width:100%;color:#495057;text-align:inherit}.list-group-item-action:focus,.list-group-item-action:hover{z-index:1;color:#495057;text-decoration:none;background-color:#f8f9fa}.list-group-item-action:active{color:#212529;background-color:#e9ecef}.list-group-item{position:relative;display:block;padding:.5rem 1rem;text-decoration:none;background-color:#fff;border:1px solid rgba(0,0,0,.125)}.list-group-item:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.list-group-item:last-child{border-bottom-right-radius:inherit;border-bottom-left-radius:inherit}.list-group-item.disabled,.list-group-item:disabled{color:#6c757d;pointer-events:none;background-color:#fff}.list-group-item.active{z-index:2;color:#fff;background-color:#0d6efd;border-color:#0d6efd}.list-group-item+.list-group-item{border-top-width:0}.list-group-item+.list-group-item.active{margin-top:-1px;border-top-width:1px}.list-group-horizontal{flex-direction:row}.list-group-horizontal>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal>.list-group-item.active{margin-top:0}.list-group-horizontal>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}@media (min-width:576px){.list-group-horizontal-sm{flex-direction:row}.list-group-horizontal-sm>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-sm>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-sm>.list-group-item.active{margin-top:0}.list-group-horizontal-sm>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-sm>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width:768px){.list-group-horizontal-md{flex-direction:row}.list-group-horizontal-md>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-md>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-md>.list-group-item.active{margin-top:0}.list-group-horizontal-md>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-md>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width:992px){.list-group-horizontal-lg{flex-direction:row}.list-group-horizontal-lg>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-lg>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-lg>.list-group-item.active{margin-top:0}.list-group-horizontal-lg>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-lg>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width:1200px){.list-group-horizontal-xl{flex-direction:row}.list-group-horizontal-xl>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-xl>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-xl>.list-group-item.active{margin-top:0}.list-group-horizontal-xl>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-xl>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width:1400px){.list-group-horizontal-xxl{flex-direction:row}.list-group-horizontal-xxl>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-xxl>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-xxl>.list-group-item.active{margin-top:0}.list-group-horizontal-xxl>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-xxl>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}.list-group-flush{border-radius:0}.list-group-flush>.list-group-item{border-width:0 0 1px}.list-group-flush>.list-group-item:last-child{border-bottom-width:0}.list-group-item-primary{color:#084298;background-color:#cfe2ff}.list-group-item-primary.list-group-item-action:focus,.list-group-item-primary.list-group-item-action:hover{color:#084298;background-color:#bacbe6}.list-group-item-primary.list-group-item-action.active{color:#fff;background-color:#084298;border-color:#084298}.list-group-item-secondary{color:#41464b;background-color:#e2e3e5}.list-group-item-secondary.list-group-item-action:focus,.list-group-item-secondary.list-group-item-action:hover{color:#41464b;background-color:#cbccce}.list-group-item-secondary.list-group-item-action.active{color:#fff;background-color:#41464b;border-color:#41464b}.list-group-item-success{color:#0f5132;background-color:#d1e7dd}.list-group-item-success.list-group-item-action:focus,.list-group-item-success.list-group-item-action:hover{color:#0f5132;background-color:#bcd0c7}.list-group-item-success.list-group-item-action.active{color:#fff;background-color:#0f5132;border-color:#0f5132}.list-group-item-info{color:#055160;background-color:#cff4fc}.list-group-item-info.list-group-item-action:focus,.list-group-item-info.list-group-item-action:hover{color:#055160;background-color:#badce3}.list-group-item-info.list-group-item-action.active{color:#fff;background-color:#055160;border-color:#055160}.list-group-item-warning{color:#664d03;background-color:#fff3cd}.list-group-item-warning.list-group-item-action:focus,.list-group-item-warning.list-group-item-action:hover{color:#664d03;background-color:#e6dbb9}.list-group-item-warning.list-group-item-action.active{color:#fff;background-color:#664d03;border-color:#664d03}.list-group-item-danger{color:#842029;background-color:#f8d7da}.list-group-item-danger.list-group-item-action:focus,.list-group-item-danger.list-group-item-action:hover{color:#842029;background-color:#dfc2c4}.list-group-item-danger.list-group-item-action.active{color:#fff;background-color:#842029;border-color:#842029}.list-group-item-light{color:#636464;background-color:#fefefe}.list-group-item-light.list-group-item-action:focus,.list-group-item-light.list-group-item-action:hover{color:#636464;background-color:#e5e5e5}.list-group-item-light.list-group-item-action.active{color:#fff;background-color:#636464;border-color:#636464}.list-group-item-dark{color:#141619;background-color:#d3d3d4}.list-group-item-dark.list-group-item-action:focus,.list-group-item-dark.list-group-item-action:hover{color:#141619;background-color:#bebebf}.list-group-item-dark.list-group-item-action.active{color:#fff;background-color:#141619;border-color:#141619}.btn-close{box-sizing:content-box;width:1em;height:1em;padding:.25em .25em;color:#000;background:transparent url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e\") center/1em auto no-repeat;border:0;border-radius:.25rem;opacity:.5}.btn-close:hover{color:#000;text-decoration:none;opacity:.75}.btn-close:focus{outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25);opacity:1}.btn-close.disabled,.btn-close:disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:.25}.btn-close-white{filter:invert(1) grayscale(100%) brightness(200%)}.toast{width:350px;max-width:100%;font-size:.875rem;pointer-events:auto;background-color:rgba(255,255,255,.85);background-clip:padding-box;border:1px solid rgba(0,0,0,.1);box-shadow:0 .5rem 1rem rgba(0,0,0,.15);border-radius:.25rem}.toast:not(.showing):not(.show){opacity:0}.toast.hide{display:none}.toast-container{width:-webkit-max-content;width:-moz-max-content;width:max-content;max-width:100%;pointer-events:none}.toast-container>:not(:last-child){margin-bottom:.75rem}.toast-header{display:flex;align-items:center;padding:.5rem .75rem;color:#6c757d;background-color:rgba(255,255,255,.85);background-clip:padding-box;border-bottom:1px solid rgba(0,0,0,.05);border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.toast-header .btn-close{margin-right:-.375rem;margin-left:.75rem}.toast-body{padding:.75rem}.modal-open{overflow:hidden}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal{position:fixed;top:0;left:0;z-index:1050;display:none;width:100%;height:100%;overflow:hidden;outline:0}.modal-dialog{position:relative;width:auto;margin:.5rem;pointer-events:none}.modal.fade .modal-dialog{transition:transform .3s ease-out;transform:translate(0,-50px)}@media (prefers-reduced-motion:reduce){.modal.fade .modal-dialog{transition:none}}.modal.show .modal-dialog{transform:none}.modal.modal-static .modal-dialog{transform:scale(1.02)}.modal-dialog-scrollable{height:calc(100% - 1rem)}.modal-dialog-scrollable .modal-content{max-height:100%;overflow:hidden}.modal-dialog-scrollable .modal-body{overflow-y:auto}.modal-dialog-centered{display:flex;align-items:center;min-height:calc(100% - 1rem)}.modal-content{position:relative;display:flex;flex-direction:column;width:100%;pointer-events:auto;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem;outline:0}.modal-backdrop{position:fixed;top:0;left:0;z-index:1040;width:100vw;height:100vh;background-color:#000}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:.5}.modal-header{display:flex;flex-shrink:0;align-items:center;justify-content:space-between;padding:1rem 1rem;border-bottom:1px solid #dee2e6;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.modal-header .btn-close{padding:.5rem .5rem;margin:-.5rem -.5rem -.5rem auto}.modal-title{margin-bottom:0;line-height:1.5}.modal-body{position:relative;flex:1 1 auto;padding:1rem}.modal-footer{display:flex;flex-wrap:wrap;flex-shrink:0;align-items:center;justify-content:flex-end;padding:.75rem;border-top:1px solid #dee2e6;border-bottom-right-radius:calc(.3rem - 1px);border-bottom-left-radius:calc(.3rem - 1px)}.modal-footer>*{margin:.25rem}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media (min-width:576px){.modal-dialog{max-width:500px;margin:1.75rem auto}.modal-dialog-scrollable{height:calc(100% - 3.5rem)}.modal-dialog-centered{min-height:calc(100% - 3.5rem)}.modal-sm{max-width:300px}}@media (min-width:992px){.modal-lg,.modal-xl{max-width:800px}}@media (min-width:1200px){.modal-xl{max-width:1140px}}.modal-fullscreen{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen .modal-header{border-radius:0}.modal-fullscreen .modal-body{overflow-y:auto}.modal-fullscreen .modal-footer{border-radius:0}@media (max-width:575.98px){.modal-fullscreen-sm-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-sm-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-sm-down .modal-header{border-radius:0}.modal-fullscreen-sm-down .modal-body{overflow-y:auto}.modal-fullscreen-sm-down .modal-footer{border-radius:0}}@media (max-width:767.98px){.modal-fullscreen-md-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-md-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-md-down .modal-header{border-radius:0}.modal-fullscreen-md-down .modal-body{overflow-y:auto}.modal-fullscreen-md-down .modal-footer{border-radius:0}}@media (max-width:991.98px){.modal-fullscreen-lg-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-lg-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-lg-down .modal-header{border-radius:0}.modal-fullscreen-lg-down .modal-body{overflow-y:auto}.modal-fullscreen-lg-down .modal-footer{border-radius:0}}@media (max-width:1199.98px){.modal-fullscreen-xl-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-xl-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-xl-down .modal-header{border-radius:0}.modal-fullscreen-xl-down .modal-body{overflow-y:auto}.modal-fullscreen-xl-down .modal-footer{border-radius:0}}@media (max-width:1399.98px){.modal-fullscreen-xxl-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-xxl-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-xxl-down .modal-header{border-radius:0}.modal-fullscreen-xxl-down .modal-body{overflow-y:auto}.modal-fullscreen-xxl-down .modal-footer{border-radius:0}}.tooltip{position:absolute;z-index:1070;display:block;margin:0;font-family:var(--bs-font-sans-serif);font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;opacity:0}.tooltip.show{opacity:.9}.tooltip .tooltip-arrow{position:absolute;display:block;width:.8rem;height:.4rem}.tooltip .tooltip-arrow::before{position:absolute;content:\"\";border-color:transparent;border-style:solid}.bs-tooltip-auto[data-popper-placement^=top],.bs-tooltip-top{padding:.4rem 0}.bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow,.bs-tooltip-top .tooltip-arrow{bottom:0}.bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow::before,.bs-tooltip-top .tooltip-arrow::before{top:-1px;border-width:.4rem .4rem 0;border-top-color:#000}.bs-tooltip-auto[data-popper-placement^=right],.bs-tooltip-end{padding:0 .4rem}.bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow,.bs-tooltip-end .tooltip-arrow{left:0;width:.4rem;height:.8rem}.bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow::before,.bs-tooltip-end .tooltip-arrow::before{right:-1px;border-width:.4rem .4rem .4rem 0;border-right-color:#000}.bs-tooltip-auto[data-popper-placement^=bottom],.bs-tooltip-bottom{padding:.4rem 0}.bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow,.bs-tooltip-bottom .tooltip-arrow{top:0}.bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow::before,.bs-tooltip-bottom .tooltip-arrow::before{bottom:-1px;border-width:0 .4rem .4rem;border-bottom-color:#000}.bs-tooltip-auto[data-popper-placement^=left],.bs-tooltip-start{padding:0 .4rem}.bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow,.bs-tooltip-start .tooltip-arrow{right:0;width:.4rem;height:.8rem}.bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow::before,.bs-tooltip-start .tooltip-arrow::before{left:-1px;border-width:.4rem 0 .4rem .4rem;border-left-color:#000}.tooltip-inner{max-width:200px;padding:.25rem .5rem;color:#fff;text-align:center;background-color:#000;border-radius:.25rem}.popover{position:absolute;top:0;left:0;z-index:1060;display:block;max-width:276px;font-family:var(--bs-font-sans-serif);font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem}.popover .popover-arrow{position:absolute;display:block;width:1rem;height:.5rem;margin:0 .3rem}.popover .popover-arrow::after,.popover .popover-arrow::before{position:absolute;display:block;content:\"\";border-color:transparent;border-style:solid}.bs-popover-auto[data-popper-placement^=top],.bs-popover-top{margin-bottom:.5rem!important}.bs-popover-auto[data-popper-placement^=top]>.popover-arrow,.bs-popover-top>.popover-arrow{bottom:calc(-.5rem - 1px)}.bs-popover-auto[data-popper-placement^=top]>.popover-arrow::before,.bs-popover-top>.popover-arrow::before{bottom:0;border-width:.5rem .5rem 0;border-top-color:rgba(0,0,0,.25)}.bs-popover-auto[data-popper-placement^=top]>.popover-arrow::after,.bs-popover-top>.popover-arrow::after{bottom:1px;border-width:.5rem .5rem 0;border-top-color:#fff}.bs-popover-auto[data-popper-placement^=right],.bs-popover-end{margin-left:.5rem!important}.bs-popover-auto[data-popper-placement^=right]>.popover-arrow,.bs-popover-end>.popover-arrow{left:calc(-.5rem - 1px);width:.5rem;height:1rem;margin:.3rem 0}.bs-popover-auto[data-popper-placement^=right]>.popover-arrow::before,.bs-popover-end>.popover-arrow::before{left:0;border-width:.5rem .5rem .5rem 0;border-right-color:rgba(0,0,0,.25)}.bs-popover-auto[data-popper-placement^=right]>.popover-arrow::after,.bs-popover-end>.popover-arrow::after{left:1px;border-width:.5rem .5rem .5rem 0;border-right-color:#fff}.bs-popover-auto[data-popper-placement^=bottom],.bs-popover-bottom{margin-top:.5rem!important}.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow,.bs-popover-bottom>.popover-arrow{top:calc(-.5rem - 1px)}.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow::before,.bs-popover-bottom>.popover-arrow::before{top:0;border-width:0 .5rem .5rem .5rem;border-bottom-color:rgba(0,0,0,.25)}.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow::after,.bs-popover-bottom>.popover-arrow::after{top:1px;border-width:0 .5rem .5rem .5rem;border-bottom-color:#fff}.bs-popover-auto[data-popper-placement^=bottom] .popover-header::before,.bs-popover-bottom .popover-header::before{position:absolute;top:0;left:50%;display:block;width:1rem;margin-left:-.5rem;content:\"\";border-bottom:1px solid #f0f0f0}.bs-popover-auto[data-popper-placement^=left],.bs-popover-start{margin-right:.5rem!important}.bs-popover-auto[data-popper-placement^=left]>.popover-arrow,.bs-popover-start>.popover-arrow{right:calc(-.5rem - 1px);width:.5rem;height:1rem;margin:.3rem 0}.bs-popover-auto[data-popper-placement^=left]>.popover-arrow::before,.bs-popover-start>.popover-arrow::before{right:0;border-width:.5rem 0 .5rem .5rem;border-left-color:rgba(0,0,0,.25)}.bs-popover-auto[data-popper-placement^=left]>.popover-arrow::after,.bs-popover-start>.popover-arrow::after{right:1px;border-width:.5rem 0 .5rem .5rem;border-left-color:#fff}.popover-header{padding:.5rem 1rem;margin-bottom:0;font-size:1rem;background-color:#f0f0f0;border-bottom:1px solid #d8d8d8;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.popover-header:empty{display:none}.popover-body{padding:1rem 1rem;color:#212529}.carousel{position:relative}.carousel.pointer-event{touch-action:pan-y}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-inner::after{display:block;clear:both;content:\"\"}.carousel-item{position:relative;display:none;float:left;width:100%;margin-right:-100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:transform .6s ease-in-out}@media (prefers-reduced-motion:reduce){.carousel-item{transition:none}}.carousel-item-next,.carousel-item-prev,.carousel-item.active{display:block}.active.carousel-item-end,.carousel-item-next:not(.carousel-item-start){transform:translateX(100%)}.active.carousel-item-start,.carousel-item-prev:not(.carousel-item-end){transform:translateX(-100%)}.carousel-fade .carousel-item{opacity:0;transition-property:opacity;transform:none}.carousel-fade .carousel-item-next.carousel-item-start,.carousel-fade .carousel-item-prev.carousel-item-end,.carousel-fade .carousel-item.active{z-index:1;opacity:1}.carousel-fade .active.carousel-item-end,.carousel-fade .active.carousel-item-start{z-index:0;opacity:0;transition:opacity 0s .6s}@media (prefers-reduced-motion:reduce){.carousel-fade .active.carousel-item-end,.carousel-fade .active.carousel-item-start{transition:none}}.carousel-control-next,.carousel-control-prev{position:absolute;top:0;bottom:0;z-index:1;display:flex;align-items:center;justify-content:center;width:15%;color:#fff;text-align:center;opacity:.5;transition:opacity .15s ease}@media (prefers-reduced-motion:reduce){.carousel-control-next,.carousel-control-prev{transition:none}}.carousel-control-next:focus,.carousel-control-next:hover,.carousel-control-prev:focus,.carousel-control-prev:hover{color:#fff;text-decoration:none;outline:0;opacity:.9}.carousel-control-prev{left:0}.carousel-control-next{right:0}.carousel-control-next-icon,.carousel-control-prev-icon{display:inline-block;width:2rem;height:2rem;background-repeat:no-repeat;background-position:50%;background-size:100% 100%}.carousel-control-prev-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e\")}.carousel-control-next-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\")}.carousel-indicators{position:absolute;right:0;bottom:0;left:0;z-index:2;display:flex;justify-content:center;padding-left:0;margin-right:15%;margin-left:15%;list-style:none}.carousel-indicators li{box-sizing:content-box;flex:0 1 auto;width:30px;height:3px;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:#fff;background-clip:padding-box;border-top:10px solid transparent;border-bottom:10px solid transparent;opacity:.5;transition:opacity .6s ease}@media (prefers-reduced-motion:reduce){.carousel-indicators li{transition:none}}.carousel-indicators .active{opacity:1}.carousel-caption{position:absolute;right:15%;bottom:1.25rem;left:15%;padding-top:1.25rem;padding-bottom:1.25rem;color:#fff;text-align:center}.carousel-dark .carousel-control-next-icon,.carousel-dark .carousel-control-prev-icon{filter:invert(1) grayscale(100)}.carousel-dark .carousel-indicators li{background-color:#000}.carousel-dark .carousel-caption{color:#000}@-webkit-keyframes spinner-border{to{transform:rotate(360deg)}}@keyframes spinner-border{to{transform:rotate(360deg)}}.spinner-border{display:inline-block;width:2rem;height:2rem;vertical-align:text-bottom;border:.25em solid currentColor;border-right-color:transparent;border-radius:50%;-webkit-animation:.75s linear infinite spinner-border;animation:.75s linear infinite spinner-border}.spinner-border-sm{width:1rem;height:1rem;border-width:.2em}@-webkit-keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}@keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}.spinner-grow{display:inline-block;width:2rem;height:2rem;vertical-align:text-bottom;background-color:currentColor;border-radius:50%;opacity:0;-webkit-animation:.75s linear infinite spinner-grow;animation:.75s linear infinite spinner-grow}.spinner-grow-sm{width:1rem;height:1rem}@media (prefers-reduced-motion:reduce){.spinner-border,.spinner-grow{-webkit-animation-duration:1.5s;animation-duration:1.5s}}.clearfix::after{display:block;clear:both;content:\"\"}.link-primary{color:#0d6efd}.link-primary:focus,.link-primary:hover{color:#0a58ca}.link-secondary{color:#6c757d}.link-secondary:focus,.link-secondary:hover{color:#565e64}.link-success{color:#198754}.link-success:focus,.link-success:hover{color:#146c43}.link-info{color:#0dcaf0}.link-info:focus,.link-info:hover{color:#3dd5f3}.link-warning{color:#ffc107}.link-warning:focus,.link-warning:hover{color:#ffcd39}.link-danger{color:#dc3545}.link-danger:focus,.link-danger:hover{color:#b02a37}.link-light{color:#f8f9fa}.link-light:focus,.link-light:hover{color:#f9fafb}.link-dark{color:#212529}.link-dark:focus,.link-dark:hover{color:#1a1e21}.ratio{position:relative;width:100%}.ratio::before{display:block;padding-top:var(--aspect-ratio);content:\"\"}.ratio>*{position:absolute;top:0;left:0;width:100%;height:100%}.ratio-1x1{--aspect-ratio:100%}.ratio-4x3{--aspect-ratio:calc(3 / 4 * 100%)}.ratio-16x9{--aspect-ratio:calc(9 / 16 * 100%)}.ratio-21x9{--aspect-ratio:calc(9 / 21 * 100%)}.fixed-top{position:fixed;top:0;right:0;left:0;z-index:1030}.fixed-bottom{position:fixed;right:0;bottom:0;left:0;z-index:1030}.sticky-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}@media (min-width:576px){.sticky-sm-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}}@media (min-width:768px){.sticky-md-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}}@media (min-width:992px){.sticky-lg-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}}@media (min-width:1200px){.sticky-xl-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}}@media (min-width:1400px){.sticky-xxl-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}}.visually-hidden,.visually-hidden-focusable:not(:focus){position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}.stretched-link::after{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;content:\"\"}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.align-baseline{vertical-align:baseline!important}.align-top{vertical-align:top!important}.align-middle{vertical-align:middle!important}.align-bottom{vertical-align:bottom!important}.align-text-bottom{vertical-align:text-bottom!important}.align-text-top{vertical-align:text-top!important}.float-start{float:left!important}.float-end{float:right!important}.float-none{float:none!important}.overflow-auto{overflow:auto!important}.overflow-hidden{overflow:hidden!important}.overflow-visible{overflow:visible!important}.overflow-scroll{overflow:scroll!important}.d-inline{display:inline!important}.d-inline-block{display:inline-block!important}.d-block{display:block!important}.d-grid{display:grid!important}.d-table{display:table!important}.d-table-row{display:table-row!important}.d-table-cell{display:table-cell!important}.d-flex{display:flex!important}.d-inline-flex{display:inline-flex!important}.d-none{display:none!important}.shadow{box-shadow:0 .5rem 1rem rgba(0,0,0,.15)!important}.shadow-sm{box-shadow:0 .125rem .25rem rgba(0,0,0,.075)!important}.shadow-lg{box-shadow:0 1rem 3rem rgba(0,0,0,.175)!important}.shadow-none{box-shadow:none!important}.position-static{position:static!important}.position-relative{position:relative!important}.position-absolute{position:absolute!important}.position-fixed{position:fixed!important}.position-sticky{position:-webkit-sticky!important;position:sticky!important}.top-0{top:0!important}.top-50{top:50%!important}.top-100{top:100%!important}.bottom-0{bottom:0!important}.bottom-50{bottom:50%!important}.bottom-100{bottom:100%!important}.start-0{left:0!important}.start-50{left:50%!important}.start-100{left:100%!important}.end-0{right:0!important}.end-50{right:50%!important}.end-100{right:100%!important}.translate-middle{transform:translate(-50%,-50%)!important}.translate-middle-x{transform:translateX(-50%)!important}.translate-middle-y{transform:translateY(-50%)!important}.border{border:1px solid #dee2e6!important}.border-0{border:0!important}.border-top{border-top:1px solid #dee2e6!important}.border-top-0{border-top:0!important}.border-end{border-right:1px solid #dee2e6!important}.border-end-0{border-right:0!important}.border-bottom{border-bottom:1px solid #dee2e6!important}.border-bottom-0{border-bottom:0!important}.border-start{border-left:1px solid #dee2e6!important}.border-start-0{border-left:0!important}.border-primary{border-color:#0d6efd!important}.border-secondary{border-color:#6c757d!important}.border-success{border-color:#198754!important}.border-info{border-color:#0dcaf0!important}.border-warning{border-color:#ffc107!important}.border-danger{border-color:#dc3545!important}.border-light{border-color:#f8f9fa!important}.border-dark{border-color:#212529!important}.border-white{border-color:#fff!important}.border-0{border-width:0!important}.border-1{border-width:1px!important}.border-2{border-width:2px!important}.border-3{border-width:3px!important}.border-4{border-width:4px!important}.border-5{border-width:5px!important}.w-25{width:25%!important}.w-50{width:50%!important}.w-75{width:75%!important}.w-100{width:100%!important}.w-auto{width:auto!important}.mw-100{max-width:100%!important}.vw-100{width:100vw!important}.min-vw-100{min-width:100vw!important}.h-25{height:25%!important}.h-50{height:50%!important}.h-75{height:75%!important}.h-100{height:100%!important}.h-auto{height:auto!important}.mh-100{max-height:100%!important}.vh-100{height:100vh!important}.min-vh-100{min-height:100vh!important}.flex-fill{flex:1 1 auto!important}.flex-row{flex-direction:row!important}.flex-column{flex-direction:column!important}.flex-row-reverse{flex-direction:row-reverse!important}.flex-column-reverse{flex-direction:column-reverse!important}.flex-grow-0{flex-grow:0!important}.flex-grow-1{flex-grow:1!important}.flex-shrink-0{flex-shrink:0!important}.flex-shrink-1{flex-shrink:1!important}.flex-wrap{flex-wrap:wrap!important}.flex-nowrap{flex-wrap:nowrap!important}.flex-wrap-reverse{flex-wrap:wrap-reverse!important}.gap-0{gap:0!important}.gap-1{gap:.25rem!important}.gap-2{gap:.5rem!important}.gap-3{gap:1rem!important}.gap-4{gap:1.5rem!important}.gap-5{gap:3rem!important}.justify-content-start{justify-content:flex-start!important}.justify-content-end{justify-content:flex-end!important}.justify-content-center{justify-content:center!important}.justify-content-between{justify-content:space-between!important}.justify-content-around{justify-content:space-around!important}.justify-content-evenly{justify-content:space-evenly!important}.align-items-start{align-items:flex-start!important}.align-items-end{align-items:flex-end!important}.align-items-center{align-items:center!important}.align-items-baseline{align-items:baseline!important}.align-items-stretch{align-items:stretch!important}.align-content-start{align-content:flex-start!important}.align-content-end{align-content:flex-end!important}.align-content-center{align-content:center!important}.align-content-between{align-content:space-between!important}.align-content-around{align-content:space-around!important}.align-content-stretch{align-content:stretch!important}.align-self-auto{align-self:auto!important}.align-self-start{align-self:flex-start!important}.align-self-end{align-self:flex-end!important}.align-self-center{align-self:center!important}.align-self-baseline{align-self:baseline!important}.align-self-stretch{align-self:stretch!important}.order-first{order:-1!important}.order-0{order:0!important}.order-1{order:1!important}.order-2{order:2!important}.order-3{order:3!important}.order-4{order:4!important}.order-5{order:5!important}.order-last{order:6!important}.m-0{margin:0!important}.m-1{margin:.25rem!important}.m-2{margin:.5rem!important}.m-3{margin:1rem!important}.m-4{margin:1.5rem!important}.m-5{margin:3rem!important}.m-auto{margin:auto!important}.mx-0{margin-right:0!important;margin-left:0!important}.mx-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-3{margin-right:1rem!important;margin-left:1rem!important}.mx-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-5{margin-right:3rem!important;margin-left:3rem!important}.mx-auto{margin-right:auto!important;margin-left:auto!important}.my-0{margin-top:0!important;margin-bottom:0!important}.my-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-0{margin-top:0!important}.mt-1{margin-top:.25rem!important}.mt-2{margin-top:.5rem!important}.mt-3{margin-top:1rem!important}.mt-4{margin-top:1.5rem!important}.mt-5{margin-top:3rem!important}.mt-auto{margin-top:auto!important}.me-0{margin-right:0!important}.me-1{margin-right:.25rem!important}.me-2{margin-right:.5rem!important}.me-3{margin-right:1rem!important}.me-4{margin-right:1.5rem!important}.me-5{margin-right:3rem!important}.me-auto{margin-right:auto!important}.mb-0{margin-bottom:0!important}.mb-1{margin-bottom:.25rem!important}.mb-2{margin-bottom:.5rem!important}.mb-3{margin-bottom:1rem!important}.mb-4{margin-bottom:1.5rem!important}.mb-5{margin-bottom:3rem!important}.mb-auto{margin-bottom:auto!important}.ms-0{margin-left:0!important}.ms-1{margin-left:.25rem!important}.ms-2{margin-left:.5rem!important}.ms-3{margin-left:1rem!important}.ms-4{margin-left:1.5rem!important}.ms-5{margin-left:3rem!important}.ms-auto{margin-left:auto!important}.p-0{padding:0!important}.p-1{padding:.25rem!important}.p-2{padding:.5rem!important}.p-3{padding:1rem!important}.p-4{padding:1.5rem!important}.p-5{padding:3rem!important}.px-0{padding-right:0!important;padding-left:0!important}.px-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-3{padding-right:1rem!important;padding-left:1rem!important}.px-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-5{padding-right:3rem!important;padding-left:3rem!important}.py-0{padding-top:0!important;padding-bottom:0!important}.py-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-0{padding-top:0!important}.pt-1{padding-top:.25rem!important}.pt-2{padding-top:.5rem!important}.pt-3{padding-top:1rem!important}.pt-4{padding-top:1.5rem!important}.pt-5{padding-top:3rem!important}.pe-0{padding-right:0!important}.pe-1{padding-right:.25rem!important}.pe-2{padding-right:.5rem!important}.pe-3{padding-right:1rem!important}.pe-4{padding-right:1.5rem!important}.pe-5{padding-right:3rem!important}.pb-0{padding-bottom:0!important}.pb-1{padding-bottom:.25rem!important}.pb-2{padding-bottom:.5rem!important}.pb-3{padding-bottom:1rem!important}.pb-4{padding-bottom:1.5rem!important}.pb-5{padding-bottom:3rem!important}.ps-0{padding-left:0!important}.ps-1{padding-left:.25rem!important}.ps-2{padding-left:.5rem!important}.ps-3{padding-left:1rem!important}.ps-4{padding-left:1.5rem!important}.ps-5{padding-left:3rem!important}.fs-1{font-size:calc(1.375rem + 1.5vw)!important}.fs-2{font-size:calc(1.325rem + .9vw)!important}.fs-3{font-size:calc(1.3rem + .6vw)!important}.fs-4{font-size:calc(1.275rem + .3vw)!important}.fs-5{font-size:1.25rem!important}.fs-6{font-size:1rem!important}.fst-italic{font-style:italic!important}.fst-normal{font-style:normal!important}.fw-light{font-weight:300!important}.fw-lighter{font-weight:lighter!important}.fw-normal{font-weight:400!important}.fw-bold{font-weight:700!important}.fw-bolder{font-weight:bolder!important}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}.text-start{text-align:left!important}.text-end{text-align:right!important}.text-center{text-align:center!important}.text-primary{color:#0d6efd!important}.text-secondary{color:#6c757d!important}.text-success{color:#198754!important}.text-info{color:#0dcaf0!important}.text-warning{color:#ffc107!important}.text-danger{color:#dc3545!important}.text-light{color:#f8f9fa!important}.text-dark{color:#212529!important}.text-white{color:#fff!important}.text-body{color:#212529!important}.text-muted{color:#6c757d!important}.text-black-50{color:rgba(0,0,0,.5)!important}.text-white-50{color:rgba(255,255,255,.5)!important}.text-reset{color:inherit!important}.lh-1{line-height:1!important}.lh-sm{line-height:1.25!important}.lh-base{line-height:1.5!important}.lh-lg{line-height:2!important}.bg-primary{background-color:#0d6efd!important}.bg-secondary{background-color:#6c757d!important}.bg-success{background-color:#198754!important}.bg-info{background-color:#0dcaf0!important}.bg-warning{background-color:#ffc107!important}.bg-danger{background-color:#dc3545!important}.bg-light{background-color:#f8f9fa!important}.bg-dark{background-color:#212529!important}.bg-body{background-color:#fff!important}.bg-white{background-color:#fff!important}.bg-transparent{background-color:transparent!important}.bg-gradient{background-image:var(--bs-gradient)!important}.text-wrap{white-space:normal!important}.text-nowrap{white-space:nowrap!important}.text-decoration-none{text-decoration:none!important}.text-decoration-underline{text-decoration:underline!important}.text-decoration-line-through{text-decoration:line-through!important}.text-break{word-wrap:break-word!important;word-break:break-word!important}.font-monospace{font-family:var(--bs-font-monospace)!important}.user-select-all{-webkit-user-select:all!important;-moz-user-select:all!important;user-select:all!important}.user-select-auto{-webkit-user-select:auto!important;-moz-user-select:auto!important;user-select:auto!important}.user-select-none{-webkit-user-select:none!important;-moz-user-select:none!important;user-select:none!important}.pe-none{pointer-events:none!important}.pe-auto{pointer-events:auto!important}.rounded{border-radius:.25rem!important}.rounded-0{border-radius:0!important}.rounded-1{border-radius:.2rem!important}.rounded-2{border-radius:.25rem!important}.rounded-3{border-radius:.3rem!important}.rounded-circle{border-radius:50%!important}.rounded-pill{border-radius:50rem!important}.rounded-top{border-top-left-radius:.25rem!important;border-top-right-radius:.25rem!important}.rounded-end{border-top-right-radius:.25rem!important;border-bottom-right-radius:.25rem!important}.rounded-bottom{border-bottom-right-radius:.25rem!important;border-bottom-left-radius:.25rem!important}.rounded-start{border-bottom-left-radius:.25rem!important;border-top-left-radius:.25rem!important}.visible{visibility:visible!important}.invisible{visibility:hidden!important}@media (min-width:576px){.float-sm-start{float:left!important}.float-sm-end{float:right!important}.float-sm-none{float:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-grid{display:grid!important}.d-sm-table{display:table!important}.d-sm-table-row{display:table-row!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:flex!important}.d-sm-inline-flex{display:inline-flex!important}.d-sm-none{display:none!important}.flex-sm-fill{flex:1 1 auto!important}.flex-sm-row{flex-direction:row!important}.flex-sm-column{flex-direction:column!important}.flex-sm-row-reverse{flex-direction:row-reverse!important}.flex-sm-column-reverse{flex-direction:column-reverse!important}.flex-sm-grow-0{flex-grow:0!important}.flex-sm-grow-1{flex-grow:1!important}.flex-sm-shrink-0{flex-shrink:0!important}.flex-sm-shrink-1{flex-shrink:1!important}.flex-sm-wrap{flex-wrap:wrap!important}.flex-sm-nowrap{flex-wrap:nowrap!important}.flex-sm-wrap-reverse{flex-wrap:wrap-reverse!important}.gap-sm-0{gap:0!important}.gap-sm-1{gap:.25rem!important}.gap-sm-2{gap:.5rem!important}.gap-sm-3{gap:1rem!important}.gap-sm-4{gap:1.5rem!important}.gap-sm-5{gap:3rem!important}.justify-content-sm-start{justify-content:flex-start!important}.justify-content-sm-end{justify-content:flex-end!important}.justify-content-sm-center{justify-content:center!important}.justify-content-sm-between{justify-content:space-between!important}.justify-content-sm-around{justify-content:space-around!important}.justify-content-sm-evenly{justify-content:space-evenly!important}.align-items-sm-start{align-items:flex-start!important}.align-items-sm-end{align-items:flex-end!important}.align-items-sm-center{align-items:center!important}.align-items-sm-baseline{align-items:baseline!important}.align-items-sm-stretch{align-items:stretch!important}.align-content-sm-start{align-content:flex-start!important}.align-content-sm-end{align-content:flex-end!important}.align-content-sm-center{align-content:center!important}.align-content-sm-between{align-content:space-between!important}.align-content-sm-around{align-content:space-around!important}.align-content-sm-stretch{align-content:stretch!important}.align-self-sm-auto{align-self:auto!important}.align-self-sm-start{align-self:flex-start!important}.align-self-sm-end{align-self:flex-end!important}.align-self-sm-center{align-self:center!important}.align-self-sm-baseline{align-self:baseline!important}.align-self-sm-stretch{align-self:stretch!important}.order-sm-first{order:-1!important}.order-sm-0{order:0!important}.order-sm-1{order:1!important}.order-sm-2{order:2!important}.order-sm-3{order:3!important}.order-sm-4{order:4!important}.order-sm-5{order:5!important}.order-sm-last{order:6!important}.m-sm-0{margin:0!important}.m-sm-1{margin:.25rem!important}.m-sm-2{margin:.5rem!important}.m-sm-3{margin:1rem!important}.m-sm-4{margin:1.5rem!important}.m-sm-5{margin:3rem!important}.m-sm-auto{margin:auto!important}.mx-sm-0{margin-right:0!important;margin-left:0!important}.mx-sm-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-sm-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-sm-3{margin-right:1rem!important;margin-left:1rem!important}.mx-sm-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-sm-5{margin-right:3rem!important;margin-left:3rem!important}.mx-sm-auto{margin-right:auto!important;margin-left:auto!important}.my-sm-0{margin-top:0!important;margin-bottom:0!important}.my-sm-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-sm-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-sm-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-sm-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-sm-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-sm-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-sm-0{margin-top:0!important}.mt-sm-1{margin-top:.25rem!important}.mt-sm-2{margin-top:.5rem!important}.mt-sm-3{margin-top:1rem!important}.mt-sm-4{margin-top:1.5rem!important}.mt-sm-5{margin-top:3rem!important}.mt-sm-auto{margin-top:auto!important}.me-sm-0{margin-right:0!important}.me-sm-1{margin-right:.25rem!important}.me-sm-2{margin-right:.5rem!important}.me-sm-3{margin-right:1rem!important}.me-sm-4{margin-right:1.5rem!important}.me-sm-5{margin-right:3rem!important}.me-sm-auto{margin-right:auto!important}.mb-sm-0{margin-bottom:0!important}.mb-sm-1{margin-bottom:.25rem!important}.mb-sm-2{margin-bottom:.5rem!important}.mb-sm-3{margin-bottom:1rem!important}.mb-sm-4{margin-bottom:1.5rem!important}.mb-sm-5{margin-bottom:3rem!important}.mb-sm-auto{margin-bottom:auto!important}.ms-sm-0{margin-left:0!important}.ms-sm-1{margin-left:.25rem!important}.ms-sm-2{margin-left:.5rem!important}.ms-sm-3{margin-left:1rem!important}.ms-sm-4{margin-left:1.5rem!important}.ms-sm-5{margin-left:3rem!important}.ms-sm-auto{margin-left:auto!important}.p-sm-0{padding:0!important}.p-sm-1{padding:.25rem!important}.p-sm-2{padding:.5rem!important}.p-sm-3{padding:1rem!important}.p-sm-4{padding:1.5rem!important}.p-sm-5{padding:3rem!important}.px-sm-0{padding-right:0!important;padding-left:0!important}.px-sm-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-sm-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-sm-3{padding-right:1rem!important;padding-left:1rem!important}.px-sm-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-sm-5{padding-right:3rem!important;padding-left:3rem!important}.py-sm-0{padding-top:0!important;padding-bottom:0!important}.py-sm-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-sm-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-sm-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-sm-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-sm-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-sm-0{padding-top:0!important}.pt-sm-1{padding-top:.25rem!important}.pt-sm-2{padding-top:.5rem!important}.pt-sm-3{padding-top:1rem!important}.pt-sm-4{padding-top:1.5rem!important}.pt-sm-5{padding-top:3rem!important}.pe-sm-0{padding-right:0!important}.pe-sm-1{padding-right:.25rem!important}.pe-sm-2{padding-right:.5rem!important}.pe-sm-3{padding-right:1rem!important}.pe-sm-4{padding-right:1.5rem!important}.pe-sm-5{padding-right:3rem!important}.pb-sm-0{padding-bottom:0!important}.pb-sm-1{padding-bottom:.25rem!important}.pb-sm-2{padding-bottom:.5rem!important}.pb-sm-3{padding-bottom:1rem!important}.pb-sm-4{padding-bottom:1.5rem!important}.pb-sm-5{padding-bottom:3rem!important}.ps-sm-0{padding-left:0!important}.ps-sm-1{padding-left:.25rem!important}.ps-sm-2{padding-left:.5rem!important}.ps-sm-3{padding-left:1rem!important}.ps-sm-4{padding-left:1.5rem!important}.ps-sm-5{padding-left:3rem!important}.text-sm-start{text-align:left!important}.text-sm-end{text-align:right!important}.text-sm-center{text-align:center!important}}@media (min-width:768px){.float-md-start{float:left!important}.float-md-end{float:right!important}.float-md-none{float:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-grid{display:grid!important}.d-md-table{display:table!important}.d-md-table-row{display:table-row!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:flex!important}.d-md-inline-flex{display:inline-flex!important}.d-md-none{display:none!important}.flex-md-fill{flex:1 1 auto!important}.flex-md-row{flex-direction:row!important}.flex-md-column{flex-direction:column!important}.flex-md-row-reverse{flex-direction:row-reverse!important}.flex-md-column-reverse{flex-direction:column-reverse!important}.flex-md-grow-0{flex-grow:0!important}.flex-md-grow-1{flex-grow:1!important}.flex-md-shrink-0{flex-shrink:0!important}.flex-md-shrink-1{flex-shrink:1!important}.flex-md-wrap{flex-wrap:wrap!important}.flex-md-nowrap{flex-wrap:nowrap!important}.flex-md-wrap-reverse{flex-wrap:wrap-reverse!important}.gap-md-0{gap:0!important}.gap-md-1{gap:.25rem!important}.gap-md-2{gap:.5rem!important}.gap-md-3{gap:1rem!important}.gap-md-4{gap:1.5rem!important}.gap-md-5{gap:3rem!important}.justify-content-md-start{justify-content:flex-start!important}.justify-content-md-end{justify-content:flex-end!important}.justify-content-md-center{justify-content:center!important}.justify-content-md-between{justify-content:space-between!important}.justify-content-md-around{justify-content:space-around!important}.justify-content-md-evenly{justify-content:space-evenly!important}.align-items-md-start{align-items:flex-start!important}.align-items-md-end{align-items:flex-end!important}.align-items-md-center{align-items:center!important}.align-items-md-baseline{align-items:baseline!important}.align-items-md-stretch{align-items:stretch!important}.align-content-md-start{align-content:flex-start!important}.align-content-md-end{align-content:flex-end!important}.align-content-md-center{align-content:center!important}.align-content-md-between{align-content:space-between!important}.align-content-md-around{align-content:space-around!important}.align-content-md-stretch{align-content:stretch!important}.align-self-md-auto{align-self:auto!important}.align-self-md-start{align-self:flex-start!important}.align-self-md-end{align-self:flex-end!important}.align-self-md-center{align-self:center!important}.align-self-md-baseline{align-self:baseline!important}.align-self-md-stretch{align-self:stretch!important}.order-md-first{order:-1!important}.order-md-0{order:0!important}.order-md-1{order:1!important}.order-md-2{order:2!important}.order-md-3{order:3!important}.order-md-4{order:4!important}.order-md-5{order:5!important}.order-md-last{order:6!important}.m-md-0{margin:0!important}.m-md-1{margin:.25rem!important}.m-md-2{margin:.5rem!important}.m-md-3{margin:1rem!important}.m-md-4{margin:1.5rem!important}.m-md-5{margin:3rem!important}.m-md-auto{margin:auto!important}.mx-md-0{margin-right:0!important;margin-left:0!important}.mx-md-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-md-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-md-3{margin-right:1rem!important;margin-left:1rem!important}.mx-md-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-md-5{margin-right:3rem!important;margin-left:3rem!important}.mx-md-auto{margin-right:auto!important;margin-left:auto!important}.my-md-0{margin-top:0!important;margin-bottom:0!important}.my-md-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-md-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-md-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-md-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-md-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-md-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-md-0{margin-top:0!important}.mt-md-1{margin-top:.25rem!important}.mt-md-2{margin-top:.5rem!important}.mt-md-3{margin-top:1rem!important}.mt-md-4{margin-top:1.5rem!important}.mt-md-5{margin-top:3rem!important}.mt-md-auto{margin-top:auto!important}.me-md-0{margin-right:0!important}.me-md-1{margin-right:.25rem!important}.me-md-2{margin-right:.5rem!important}.me-md-3{margin-right:1rem!important}.me-md-4{margin-right:1.5rem!important}.me-md-5{margin-right:3rem!important}.me-md-auto{margin-right:auto!important}.mb-md-0{margin-bottom:0!important}.mb-md-1{margin-bottom:.25rem!important}.mb-md-2{margin-bottom:.5rem!important}.mb-md-3{margin-bottom:1rem!important}.mb-md-4{margin-bottom:1.5rem!important}.mb-md-5{margin-bottom:3rem!important}.mb-md-auto{margin-bottom:auto!important}.ms-md-0{margin-left:0!important}.ms-md-1{margin-left:.25rem!important}.ms-md-2{margin-left:.5rem!important}.ms-md-3{margin-left:1rem!important}.ms-md-4{margin-left:1.5rem!important}.ms-md-5{margin-left:3rem!important}.ms-md-auto{margin-left:auto!important}.p-md-0{padding:0!important}.p-md-1{padding:.25rem!important}.p-md-2{padding:.5rem!important}.p-md-3{padding:1rem!important}.p-md-4{padding:1.5rem!important}.p-md-5{padding:3rem!important}.px-md-0{padding-right:0!important;padding-left:0!important}.px-md-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-md-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-md-3{padding-right:1rem!important;padding-left:1rem!important}.px-md-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-md-5{padding-right:3rem!important;padding-left:3rem!important}.py-md-0{padding-top:0!important;padding-bottom:0!important}.py-md-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-md-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-md-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-md-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-md-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-md-0{padding-top:0!important}.pt-md-1{padding-top:.25rem!important}.pt-md-2{padding-top:.5rem!important}.pt-md-3{padding-top:1rem!important}.pt-md-4{padding-top:1.5rem!important}.pt-md-5{padding-top:3rem!important}.pe-md-0{padding-right:0!important}.pe-md-1{padding-right:.25rem!important}.pe-md-2{padding-right:.5rem!important}.pe-md-3{padding-right:1rem!important}.pe-md-4{padding-right:1.5rem!important}.pe-md-5{padding-right:3rem!important}.pb-md-0{padding-bottom:0!important}.pb-md-1{padding-bottom:.25rem!important}.pb-md-2{padding-bottom:.5rem!important}.pb-md-3{padding-bottom:1rem!important}.pb-md-4{padding-bottom:1.5rem!important}.pb-md-5{padding-bottom:3rem!important}.ps-md-0{padding-left:0!important}.ps-md-1{padding-left:.25rem!important}.ps-md-2{padding-left:.5rem!important}.ps-md-3{padding-left:1rem!important}.ps-md-4{padding-left:1.5rem!important}.ps-md-5{padding-left:3rem!important}.text-md-start{text-align:left!important}.text-md-end{text-align:right!important}.text-md-center{text-align:center!important}}@media (min-width:992px){.float-lg-start{float:left!important}.float-lg-end{float:right!important}.float-lg-none{float:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-grid{display:grid!important}.d-lg-table{display:table!important}.d-lg-table-row{display:table-row!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:flex!important}.d-lg-inline-flex{display:inline-flex!important}.d-lg-none{display:none!important}.flex-lg-fill{flex:1 1 auto!important}.flex-lg-row{flex-direction:row!important}.flex-lg-column{flex-direction:column!important}.flex-lg-row-reverse{flex-direction:row-reverse!important}.flex-lg-column-reverse{flex-direction:column-reverse!important}.flex-lg-grow-0{flex-grow:0!important}.flex-lg-grow-1{flex-grow:1!important}.flex-lg-shrink-0{flex-shrink:0!important}.flex-lg-shrink-1{flex-shrink:1!important}.flex-lg-wrap{flex-wrap:wrap!important}.flex-lg-nowrap{flex-wrap:nowrap!important}.flex-lg-wrap-reverse{flex-wrap:wrap-reverse!important}.gap-lg-0{gap:0!important}.gap-lg-1{gap:.25rem!important}.gap-lg-2{gap:.5rem!important}.gap-lg-3{gap:1rem!important}.gap-lg-4{gap:1.5rem!important}.gap-lg-5{gap:3rem!important}.justify-content-lg-start{justify-content:flex-start!important}.justify-content-lg-end{justify-content:flex-end!important}.justify-content-lg-center{justify-content:center!important}.justify-content-lg-between{justify-content:space-between!important}.justify-content-lg-around{justify-content:space-around!important}.justify-content-lg-evenly{justify-content:space-evenly!important}.align-items-lg-start{align-items:flex-start!important}.align-items-lg-end{align-items:flex-end!important}.align-items-lg-center{align-items:center!important}.align-items-lg-baseline{align-items:baseline!important}.align-items-lg-stretch{align-items:stretch!important}.align-content-lg-start{align-content:flex-start!important}.align-content-lg-end{align-content:flex-end!important}.align-content-lg-center{align-content:center!important}.align-content-lg-between{align-content:space-between!important}.align-content-lg-around{align-content:space-around!important}.align-content-lg-stretch{align-content:stretch!important}.align-self-lg-auto{align-self:auto!important}.align-self-lg-start{align-self:flex-start!important}.align-self-lg-end{align-self:flex-end!important}.align-self-lg-center{align-self:center!important}.align-self-lg-baseline{align-self:baseline!important}.align-self-lg-stretch{align-self:stretch!important}.order-lg-first{order:-1!important}.order-lg-0{order:0!important}.order-lg-1{order:1!important}.order-lg-2{order:2!important}.order-lg-3{order:3!important}.order-lg-4{order:4!important}.order-lg-5{order:5!important}.order-lg-last{order:6!important}.m-lg-0{margin:0!important}.m-lg-1{margin:.25rem!important}.m-lg-2{margin:.5rem!important}.m-lg-3{margin:1rem!important}.m-lg-4{margin:1.5rem!important}.m-lg-5{margin:3rem!important}.m-lg-auto{margin:auto!important}.mx-lg-0{margin-right:0!important;margin-left:0!important}.mx-lg-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-lg-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-lg-3{margin-right:1rem!important;margin-left:1rem!important}.mx-lg-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-lg-5{margin-right:3rem!important;margin-left:3rem!important}.mx-lg-auto{margin-right:auto!important;margin-left:auto!important}.my-lg-0{margin-top:0!important;margin-bottom:0!important}.my-lg-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-lg-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-lg-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-lg-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-lg-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-lg-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-lg-0{margin-top:0!important}.mt-lg-1{margin-top:.25rem!important}.mt-lg-2{margin-top:.5rem!important}.mt-lg-3{margin-top:1rem!important}.mt-lg-4{margin-top:1.5rem!important}.mt-lg-5{margin-top:3rem!important}.mt-lg-auto{margin-top:auto!important}.me-lg-0{margin-right:0!important}.me-lg-1{margin-right:.25rem!important}.me-lg-2{margin-right:.5rem!important}.me-lg-3{margin-right:1rem!important}.me-lg-4{margin-right:1.5rem!important}.me-lg-5{margin-right:3rem!important}.me-lg-auto{margin-right:auto!important}.mb-lg-0{margin-bottom:0!important}.mb-lg-1{margin-bottom:.25rem!important}.mb-lg-2{margin-bottom:.5rem!important}.mb-lg-3{margin-bottom:1rem!important}.mb-lg-4{margin-bottom:1.5rem!important}.mb-lg-5{margin-bottom:3rem!important}.mb-lg-auto{margin-bottom:auto!important}.ms-lg-0{margin-left:0!important}.ms-lg-1{margin-left:.25rem!important}.ms-lg-2{margin-left:.5rem!important}.ms-lg-3{margin-left:1rem!important}.ms-lg-4{margin-left:1.5rem!important}.ms-lg-5{margin-left:3rem!important}.ms-lg-auto{margin-left:auto!important}.p-lg-0{padding:0!important}.p-lg-1{padding:.25rem!important}.p-lg-2{padding:.5rem!important}.p-lg-3{padding:1rem!important}.p-lg-4{padding:1.5rem!important}.p-lg-5{padding:3rem!important}.px-lg-0{padding-right:0!important;padding-left:0!important}.px-lg-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-lg-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-lg-3{padding-right:1rem!important;padding-left:1rem!important}.px-lg-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-lg-5{padding-right:3rem!important;padding-left:3rem!important}.py-lg-0{padding-top:0!important;padding-bottom:0!important}.py-lg-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-lg-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-lg-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-lg-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-lg-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-lg-0{padding-top:0!important}.pt-lg-1{padding-top:.25rem!important}.pt-lg-2{padding-top:.5rem!important}.pt-lg-3{padding-top:1rem!important}.pt-lg-4{padding-top:1.5rem!important}.pt-lg-5{padding-top:3rem!important}.pe-lg-0{padding-right:0!important}.pe-lg-1{padding-right:.25rem!important}.pe-lg-2{padding-right:.5rem!important}.pe-lg-3{padding-right:1rem!important}.pe-lg-4{padding-right:1.5rem!important}.pe-lg-5{padding-right:3rem!important}.pb-lg-0{padding-bottom:0!important}.pb-lg-1{padding-bottom:.25rem!important}.pb-lg-2{padding-bottom:.5rem!important}.pb-lg-3{padding-bottom:1rem!important}.pb-lg-4{padding-bottom:1.5rem!important}.pb-lg-5{padding-bottom:3rem!important}.ps-lg-0{padding-left:0!important}.ps-lg-1{padding-left:.25rem!important}.ps-lg-2{padding-left:.5rem!important}.ps-lg-3{padding-left:1rem!important}.ps-lg-4{padding-left:1.5rem!important}.ps-lg-5{padding-left:3rem!important}.text-lg-start{text-align:left!important}.text-lg-end{text-align:right!important}.text-lg-center{text-align:center!important}}@media (min-width:1200px){.float-xl-start{float:left!important}.float-xl-end{float:right!important}.float-xl-none{float:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-grid{display:grid!important}.d-xl-table{display:table!important}.d-xl-table-row{display:table-row!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:flex!important}.d-xl-inline-flex{display:inline-flex!important}.d-xl-none{display:none!important}.flex-xl-fill{flex:1 1 auto!important}.flex-xl-row{flex-direction:row!important}.flex-xl-column{flex-direction:column!important}.flex-xl-row-reverse{flex-direction:row-reverse!important}.flex-xl-column-reverse{flex-direction:column-reverse!important}.flex-xl-grow-0{flex-grow:0!important}.flex-xl-grow-1{flex-grow:1!important}.flex-xl-shrink-0{flex-shrink:0!important}.flex-xl-shrink-1{flex-shrink:1!important}.flex-xl-wrap{flex-wrap:wrap!important}.flex-xl-nowrap{flex-wrap:nowrap!important}.flex-xl-wrap-reverse{flex-wrap:wrap-reverse!important}.gap-xl-0{gap:0!important}.gap-xl-1{gap:.25rem!important}.gap-xl-2{gap:.5rem!important}.gap-xl-3{gap:1rem!important}.gap-xl-4{gap:1.5rem!important}.gap-xl-5{gap:3rem!important}.justify-content-xl-start{justify-content:flex-start!important}.justify-content-xl-end{justify-content:flex-end!important}.justify-content-xl-center{justify-content:center!important}.justify-content-xl-between{justify-content:space-between!important}.justify-content-xl-around{justify-content:space-around!important}.justify-content-xl-evenly{justify-content:space-evenly!important}.align-items-xl-start{align-items:flex-start!important}.align-items-xl-end{align-items:flex-end!important}.align-items-xl-center{align-items:center!important}.align-items-xl-baseline{align-items:baseline!important}.align-items-xl-stretch{align-items:stretch!important}.align-content-xl-start{align-content:flex-start!important}.align-content-xl-end{align-content:flex-end!important}.align-content-xl-center{align-content:center!important}.align-content-xl-between{align-content:space-between!important}.align-content-xl-around{align-content:space-around!important}.align-content-xl-stretch{align-content:stretch!important}.align-self-xl-auto{align-self:auto!important}.align-self-xl-start{align-self:flex-start!important}.align-self-xl-end{align-self:flex-end!important}.align-self-xl-center{align-self:center!important}.align-self-xl-baseline{align-self:baseline!important}.align-self-xl-stretch{align-self:stretch!important}.order-xl-first{order:-1!important}.order-xl-0{order:0!important}.order-xl-1{order:1!important}.order-xl-2{order:2!important}.order-xl-3{order:3!important}.order-xl-4{order:4!important}.order-xl-5{order:5!important}.order-xl-last{order:6!important}.m-xl-0{margin:0!important}.m-xl-1{margin:.25rem!important}.m-xl-2{margin:.5rem!important}.m-xl-3{margin:1rem!important}.m-xl-4{margin:1.5rem!important}.m-xl-5{margin:3rem!important}.m-xl-auto{margin:auto!important}.mx-xl-0{margin-right:0!important;margin-left:0!important}.mx-xl-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-xl-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-xl-3{margin-right:1rem!important;margin-left:1rem!important}.mx-xl-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-xl-5{margin-right:3rem!important;margin-left:3rem!important}.mx-xl-auto{margin-right:auto!important;margin-left:auto!important}.my-xl-0{margin-top:0!important;margin-bottom:0!important}.my-xl-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-xl-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-xl-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-xl-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-xl-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-xl-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-xl-0{margin-top:0!important}.mt-xl-1{margin-top:.25rem!important}.mt-xl-2{margin-top:.5rem!important}.mt-xl-3{margin-top:1rem!important}.mt-xl-4{margin-top:1.5rem!important}.mt-xl-5{margin-top:3rem!important}.mt-xl-auto{margin-top:auto!important}.me-xl-0{margin-right:0!important}.me-xl-1{margin-right:.25rem!important}.me-xl-2{margin-right:.5rem!important}.me-xl-3{margin-right:1rem!important}.me-xl-4{margin-right:1.5rem!important}.me-xl-5{margin-right:3rem!important}.me-xl-auto{margin-right:auto!important}.mb-xl-0{margin-bottom:0!important}.mb-xl-1{margin-bottom:.25rem!important}.mb-xl-2{margin-bottom:.5rem!important}.mb-xl-3{margin-bottom:1rem!important}.mb-xl-4{margin-bottom:1.5rem!important}.mb-xl-5{margin-bottom:3rem!important}.mb-xl-auto{margin-bottom:auto!important}.ms-xl-0{margin-left:0!important}.ms-xl-1{margin-left:.25rem!important}.ms-xl-2{margin-left:.5rem!important}.ms-xl-3{margin-left:1rem!important}.ms-xl-4{margin-left:1.5rem!important}.ms-xl-5{margin-left:3rem!important}.ms-xl-auto{margin-left:auto!important}.p-xl-0{padding:0!important}.p-xl-1{padding:.25rem!important}.p-xl-2{padding:.5rem!important}.p-xl-3{padding:1rem!important}.p-xl-4{padding:1.5rem!important}.p-xl-5{padding:3rem!important}.px-xl-0{padding-right:0!important;padding-left:0!important}.px-xl-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-xl-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-xl-3{padding-right:1rem!important;padding-left:1rem!important}.px-xl-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-xl-5{padding-right:3rem!important;padding-left:3rem!important}.py-xl-0{padding-top:0!important;padding-bottom:0!important}.py-xl-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-xl-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-xl-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-xl-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-xl-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-xl-0{padding-top:0!important}.pt-xl-1{padding-top:.25rem!important}.pt-xl-2{padding-top:.5rem!important}.pt-xl-3{padding-top:1rem!important}.pt-xl-4{padding-top:1.5rem!important}.pt-xl-5{padding-top:3rem!important}.pe-xl-0{padding-right:0!important}.pe-xl-1{padding-right:.25rem!important}.pe-xl-2{padding-right:.5rem!important}.pe-xl-3{padding-right:1rem!important}.pe-xl-4{padding-right:1.5rem!important}.pe-xl-5{padding-right:3rem!important}.pb-xl-0{padding-bottom:0!important}.pb-xl-1{padding-bottom:.25rem!important}.pb-xl-2{padding-bottom:.5rem!important}.pb-xl-3{padding-bottom:1rem!important}.pb-xl-4{padding-bottom:1.5rem!important}.pb-xl-5{padding-bottom:3rem!important}.ps-xl-0{padding-left:0!important}.ps-xl-1{padding-left:.25rem!important}.ps-xl-2{padding-left:.5rem!important}.ps-xl-3{padding-left:1rem!important}.ps-xl-4{padding-left:1.5rem!important}.ps-xl-5{padding-left:3rem!important}.text-xl-start{text-align:left!important}.text-xl-end{text-align:right!important}.text-xl-center{text-align:center!important}}@media (min-width:1400px){.float-xxl-start{float:left!important}.float-xxl-end{float:right!important}.float-xxl-none{float:none!important}.d-xxl-inline{display:inline!important}.d-xxl-inline-block{display:inline-block!important}.d-xxl-block{display:block!important}.d-xxl-grid{display:grid!important}.d-xxl-table{display:table!important}.d-xxl-table-row{display:table-row!important}.d-xxl-table-cell{display:table-cell!important}.d-xxl-flex{display:flex!important}.d-xxl-inline-flex{display:inline-flex!important}.d-xxl-none{display:none!important}.flex-xxl-fill{flex:1 1 auto!important}.flex-xxl-row{flex-direction:row!important}.flex-xxl-column{flex-direction:column!important}.flex-xxl-row-reverse{flex-direction:row-reverse!important}.flex-xxl-column-reverse{flex-direction:column-reverse!important}.flex-xxl-grow-0{flex-grow:0!important}.flex-xxl-grow-1{flex-grow:1!important}.flex-xxl-shrink-0{flex-shrink:0!important}.flex-xxl-shrink-1{flex-shrink:1!important}.flex-xxl-wrap{flex-wrap:wrap!important}.flex-xxl-nowrap{flex-wrap:nowrap!important}.flex-xxl-wrap-reverse{flex-wrap:wrap-reverse!important}.gap-xxl-0{gap:0!important}.gap-xxl-1{gap:.25rem!important}.gap-xxl-2{gap:.5rem!important}.gap-xxl-3{gap:1rem!important}.gap-xxl-4{gap:1.5rem!important}.gap-xxl-5{gap:3rem!important}.justify-content-xxl-start{justify-content:flex-start!important}.justify-content-xxl-end{justify-content:flex-end!important}.justify-content-xxl-center{justify-content:center!important}.justify-content-xxl-between{justify-content:space-between!important}.justify-content-xxl-around{justify-content:space-around!important}.justify-content-xxl-evenly{justify-content:space-evenly!important}.align-items-xxl-start{align-items:flex-start!important}.align-items-xxl-end{align-items:flex-end!important}.align-items-xxl-center{align-items:center!important}.align-items-xxl-baseline{align-items:baseline!important}.align-items-xxl-stretch{align-items:stretch!important}.align-content-xxl-start{align-content:flex-start!important}.align-content-xxl-end{align-content:flex-end!important}.align-content-xxl-center{align-content:center!important}.align-content-xxl-between{align-content:space-between!important}.align-content-xxl-around{align-content:space-around!important}.align-content-xxl-stretch{align-content:stretch!important}.align-self-xxl-auto{align-self:auto!important}.align-self-xxl-start{align-self:flex-start!important}.align-self-xxl-end{align-self:flex-end!important}.align-self-xxl-center{align-self:center!important}.align-self-xxl-baseline{align-self:baseline!important}.align-self-xxl-stretch{align-self:stretch!important}.order-xxl-first{order:-1!important}.order-xxl-0{order:0!important}.order-xxl-1{order:1!important}.order-xxl-2{order:2!important}.order-xxl-3{order:3!important}.order-xxl-4{order:4!important}.order-xxl-5{order:5!important}.order-xxl-last{order:6!important}.m-xxl-0{margin:0!important}.m-xxl-1{margin:.25rem!important}.m-xxl-2{margin:.5rem!important}.m-xxl-3{margin:1rem!important}.m-xxl-4{margin:1.5rem!important}.m-xxl-5{margin:3rem!important}.m-xxl-auto{margin:auto!important}.mx-xxl-0{margin-right:0!important;margin-left:0!important}.mx-xxl-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-xxl-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-xxl-3{margin-right:1rem!important;margin-left:1rem!important}.mx-xxl-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-xxl-5{margin-right:3rem!important;margin-left:3rem!important}.mx-xxl-auto{margin-right:auto!important;margin-left:auto!important}.my-xxl-0{margin-top:0!important;margin-bottom:0!important}.my-xxl-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-xxl-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-xxl-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-xxl-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-xxl-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-xxl-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-xxl-0{margin-top:0!important}.mt-xxl-1{margin-top:.25rem!important}.mt-xxl-2{margin-top:.5rem!important}.mt-xxl-3{margin-top:1rem!important}.mt-xxl-4{margin-top:1.5rem!important}.mt-xxl-5{margin-top:3rem!important}.mt-xxl-auto{margin-top:auto!important}.me-xxl-0{margin-right:0!important}.me-xxl-1{margin-right:.25rem!important}.me-xxl-2{margin-right:.5rem!important}.me-xxl-3{margin-right:1rem!important}.me-xxl-4{margin-right:1.5rem!important}.me-xxl-5{margin-right:3rem!important}.me-xxl-auto{margin-right:auto!important}.mb-xxl-0{margin-bottom:0!important}.mb-xxl-1{margin-bottom:.25rem!important}.mb-xxl-2{margin-bottom:.5rem!important}.mb-xxl-3{margin-bottom:1rem!important}.mb-xxl-4{margin-bottom:1.5rem!important}.mb-xxl-5{margin-bottom:3rem!important}.mb-xxl-auto{margin-bottom:auto!important}.ms-xxl-0{margin-left:0!important}.ms-xxl-1{margin-left:.25rem!important}.ms-xxl-2{margin-left:.5rem!important}.ms-xxl-3{margin-left:1rem!important}.ms-xxl-4{margin-left:1.5rem!important}.ms-xxl-5{margin-left:3rem!important}.ms-xxl-auto{margin-left:auto!important}.p-xxl-0{padding:0!important}.p-xxl-1{padding:.25rem!important}.p-xxl-2{padding:.5rem!important}.p-xxl-3{padding:1rem!important}.p-xxl-4{padding:1.5rem!important}.p-xxl-5{padding:3rem!important}.px-xxl-0{padding-right:0!important;padding-left:0!important}.px-xxl-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-xxl-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-xxl-3{padding-right:1rem!important;padding-left:1rem!important}.px-xxl-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-xxl-5{padding-right:3rem!important;padding-left:3rem!important}.py-xxl-0{padding-top:0!important;padding-bottom:0!important}.py-xxl-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-xxl-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-xxl-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-xxl-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-xxl-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-xxl-0{padding-top:0!important}.pt-xxl-1{padding-top:.25rem!important}.pt-xxl-2{padding-top:.5rem!important}.pt-xxl-3{padding-top:1rem!important}.pt-xxl-4{padding-top:1.5rem!important}.pt-xxl-5{padding-top:3rem!important}.pe-xxl-0{padding-right:0!important}.pe-xxl-1{padding-right:.25rem!important}.pe-xxl-2{padding-right:.5rem!important}.pe-xxl-3{padding-right:1rem!important}.pe-xxl-4{padding-right:1.5rem!important}.pe-xxl-5{padding-right:3rem!important}.pb-xxl-0{padding-bottom:0!important}.pb-xxl-1{padding-bottom:.25rem!important}.pb-xxl-2{padding-bottom:.5rem!important}.pb-xxl-3{padding-bottom:1rem!important}.pb-xxl-4{padding-bottom:1.5rem!important}.pb-xxl-5{padding-bottom:3rem!important}.ps-xxl-0{padding-left:0!important}.ps-xxl-1{padding-left:.25rem!important}.ps-xxl-2{padding-left:.5rem!important}.ps-xxl-3{padding-left:1rem!important}.ps-xxl-4{padding-left:1.5rem!important}.ps-xxl-5{padding-left:3rem!important}.text-xxl-start{text-align:left!important}.text-xxl-end{text-align:right!important}.text-xxl-center{text-align:center!important}}@media (min-width:1200px){.fs-1{font-size:2.5rem!important}.fs-2{font-size:2rem!important}.fs-3{font-size:1.75rem!important}.fs-4{font-size:1.5rem!important}.fs-sm-1{font-size:2.5rem!important}.fs-sm-2{font-size:2rem!important}.fs-sm-3{font-size:1.75rem!important}.fs-sm-4{font-size:1.5rem!important}.fs-md-1{font-size:2.5rem!important}.fs-md-2{font-size:2rem!important}.fs-md-3{font-size:1.75rem!important}.fs-md-4{font-size:1.5rem!important}.fs-lg-1{font-size:2.5rem!important}.fs-lg-2{font-size:2rem!important}.fs-lg-3{font-size:1.75rem!important}.fs-lg-4{font-size:1.5rem!important}}@media print{.d-print-inline{display:inline!important}.d-print-inline-block{display:inline-block!important}.d-print-block{display:block!important}.d-print-grid{display:grid!important}.d-print-table{display:table!important}.d-print-table-row{display:table-row!important}.d-print-table-cell{display:table-cell!important}.d-print-flex{display:flex!important}.d-print-inline-flex{display:inline-flex!important}.d-print-none{display:none!important}}\n/*# sourceMappingURL=bootstrap.min.css.map */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object-assign.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var assign=Object.assign.bind(Object);module.exports=assign;module.exports.default=module.exports;
//# sourceMappingURL=object-assign.js.map

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!./":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_app",
      function () {
        return __webpack_require__(/*! private-next-pages/_app.js */ "./pages/_app.js");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


var normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports["default"] = void 0;

var requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  var start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function timeRemaining() {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports["default"] = _default;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _slicedToArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _asyncToGenerator = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports["default"] = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "./node_modules/next/dist/next-server/lib/router/utils/get-asset-path-from-route.js"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


var MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  var entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  var resolver;
  var prom = new Promise(function (resolve) {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(function (value) {
    return resolver(value), value;
  }) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

var canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise(function (res, rej) {
    if (document.querySelector("link[rel=\"prefetch\"][href^=\"".concat(href, "\"]"))) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = "prefetch";
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

var ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise(function (resolve, reject) {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = function () {
      return reject(markAssetError(new Error("Failed to load script: ".concat(src))));
    }; // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise(function (_resolve, reject) {
    return (0, _requestIdleCallback["default"])(function () {
      return setTimeout(function () {
        return reject(err);
      }, ms);
    });
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  var onBuildManifest = new Promise(function (resolve) {
    // Mandatory because this is not concurrent safe:
    var cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = function () {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute["default"])(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(function (manifest) {
    if (!(route in manifest)) {
      throw markAssetError(new Error("Failed to lookup route: ".concat(route)));
    }

    var allFiles = manifest[route].map(function (entry) {
      return assetPrefix + '/_next/' + encodeURI(entry);
    });
    return {
      scripts: allFiles.filter(function (v) {
        return v.endsWith('.js');
      }),
      css: allFiles.filter(function (v) {
        return v.endsWith('.css');
      })
    };
  });
}

function createRouteLoader(assetPrefix) {
  var entrypoints = new Map();
  var loadedScripts = new Map();
  var styleSheets = new Map();
  var routes = new Map();

  function maybeExecuteScript(src) {
    var prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector("script[src^=\"".concat(src, "\"]"))) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    var prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(function (res) {
      if (!res.ok) {
        throw new Error("Failed to load stylesheet: ".concat(href));
      }

      return res.text().then(function (text) {
        return {
          href: href,
          content: text
        };
      });
    })["catch"](function (err) {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint: function whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },
    onEntrypoint: function onEntrypoint(route, execute) {
      Promise.resolve(execute).then(function (fn) {
        return fn();
      }).then(function (exports) {
        return {
          component: exports && exports["default"] || exports,
          exports: exports
        };
      }, function (err) {
        return {
          error: err
        };
      }).then(function (input) {
        var old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },
    loadRoute: function loadRoute(route) {
      var _this = this;

      return withFuture(route, routes, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        var _yield$getFilesForRou, scripts, css, _yield$Promise$all, _yield$Promise$all2, styles, entrypoint, res;

        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return getFilesForRoute(assetPrefix, route);

              case 3:
                _yield$getFilesForRou = _context.sent;
                scripts = _yield$getFilesForRou.scripts;
                css = _yield$getFilesForRou.css;
                _context.next = 8;
                return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);

              case 8:
                _yield$Promise$all = _context.sent;
                _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
                styles = _yield$Promise$all2[1];
                _context.next = 13;
                return Promise.race([_this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error("Route did not complete loading: ".concat(route))))]);

              case 13:
                entrypoint = _context.sent;
                res = Object.assign({
                  styles: styles
                }, entrypoint);
                return _context.abrupt("return", 'error' in entrypoint ? entrypoint : res);

              case 18:
                _context.prev = 18;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", {
                  error: _context.t0
                });

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 18]]);
      })));
    },
    prefetch: function prefetch(route) {
      var _this2 = this;

      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      var cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(function (output) {
        return Promise.all(canPrefetch ? output.scripts.map(function (script) {
          return prefetchViaDom(script, 'script');
        }) : []);
      }).then(function () {
        (0, _requestIdleCallback["default"])(function () {
          return _this2.loadRoute(route);
        });
      })["catch"]( // swallow prefetch errors
      function () {});
    }
  };
}

var _default = createRouteLoader;
exports["default"] = _default;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _construct = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/construct */ "./node_modules/@babel/runtime/helpers/construct.js");

var _s = $RefreshSig$();

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (true) {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on".concat(event.charAt(0).toUpperCase()).concat(event.substring(1));
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          console.error("Error when running the Router event: ".concat(eventField));
          console.error("".concat(err.message, "\n").concat(err.stack));
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  _s();

  return _react["default"].useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


_s(useRouter, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = _construct(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  var _iterator = _createForOfIteratorHelper(urlPropertyFields),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var property = _step.value;

      if (typeof _router[property] === 'object') {
        instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

        continue;
      }

      instance[property] = _router[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  instance.events = _router2["default"].events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react["default"].createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(".concat(name, ")");
  }

  return WithRouterWrapper;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  var detectedLocale; // first item will be empty string from splitting at first char

  var pathnameParts = pathname.split('/');
  (locales || []).some(function (locale) {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname: pathname,
    detectedLocale: detectedLocale
  };
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports["default"] = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  var all = Object.create(null);
  return {
    on: function on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }

      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.RouterContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var RouterContext = /*#__PURE__*/_react["default"].createContext(null);

exports.RouterContext = RouterContext;

if (true) {
  RouterContext.displayName = 'RouterContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _slicedToArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports["default"] = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


var basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : "".concat(prefix).concat(path) : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    var locationOrigin = (0, _utils.getLocationOrigin)();
    var resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  var interpolatedRoute = '';
  var dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  var dynamicGroups = dynamicRegex.groups;
  var dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  var params = Object.keys(dynamicGroups);

  if (!params.every(function (param) {
    var value = dynamicMatches[param] || '';
    var _dynamicGroups$param = dynamicGroups[param],
        repeat = _dynamicGroups$param.repeat,
        optional = _dynamicGroups$param.optional; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    var replaced = "[".concat(repeat ? '...' : '').concat(param, "]");

    if (optional) {
      replaced = "".concat(!value ? '/' : '', "[").concat(replaced, "]");
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters["default"]).join('/') : (0, _escapePathDelimiters["default"])(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params: params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  var filteredQuery = {};
  Object.keys(query).forEach(function (key) {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  var base = new URL(currentPath, 'http://n');
  var urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    var finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    var interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      var query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);

      var _interpolateAs = interpolateAs(finalUrl.pathname, finalUrl.pathname, query),
          result = _interpolateAs.result,
          params = _interpolateAs.params;

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    var resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

var manualScrollRestoration =  false && false;
var SSG_DATA_NOT_FOUND_ERROR = 'SSG Data NOT_FOUND';

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(function (res) {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        // TODO: handle reloading in development from fallback returning 200
        // to on-demand-entry-handler causing it to reload periodically
        throw new Error(SSG_DATA_NOT_FOUND_ERROR);
      }

      throw new Error("Failed to load static props");
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1)["catch"](function (err) {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

var Router = /*#__PURE__*/function () {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  function Router(_pathname, _query, _as, _ref) {
    var _this = this;

    var initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        wrapApp = _ref.wrapApp,
        Component = _ref.Component,
        err = _ref.err,
        subscription = _ref.subscription,
        isFallback = _ref.isFallback,
        locale = _ref.locale,
        locales = _ref.locales,
        defaultLocale = _ref.defaultLocale;

    _classCallCheck(this, Router);

    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = function (e) {
      var state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var _pathname2 = _this.pathname,
            query = _this.query;

        _this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(_pathname2),
          query: query
        }), (0, _utils.getURL)());

        return;
      }

      if (!state.__N) {
        return;
      }

      var url = state.url,
          as = state.as,
          options = state.options;

      var _ref2 = (0, _parseRelativeUrl.parseRelativeUrl)(url),
          pathname = _ref2.pathname; // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (_this.isSsr && as === _this.asPath && pathname === _this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (_this._bps && !_this._bps(state)) {
        return;
      }

      _this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && _this._shallow,
        locale: options.locale || _this.defaultLocale
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component: Component,
        initial: true,
        props: initialProps,
        err: err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (true) {
      // make sure "as" doesn't start with double slashes or else it can
      // throw an error as it's considered invalid
      if (_as.substr(0, 2) !== '//') {
        // in order for `e.state` to work on the `onpopstate` event
        // we have to register the initial route upon initialization
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(_pathname),
          query: _query
        }), (0, _utils.getURL)(), {
          locale: locale
        });
      }

      window.addEventListener('popstate', this.onPopState); // enable custom scroll restoration handling when available
      // otherwise fallback to browser's default handling

      if (false) { var debouncedScrollSave, scrollDebounceTimeout; }
    }
  }

  _createClass(Router, [{
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
    /**
    * Go back in history
    */

  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
    /**
    * Performs a `pushState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */

  }, {
    key: "push",
    value: function push(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      ;

      var _prepareUrlAs = prepareUrlAs(this, url, as);

      url = _prepareUrlAs.url;
      as = _prepareUrlAs.as;
      return this.change('pushState', url, as, options);
    }
    /**
    * Performs a `replaceState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */

  }, {
    key: "replace",
    value: function replace(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      ;

      var _prepareUrlAs2 = prepareUrlAs(this, url, as);

      url = _prepareUrlAs2.url;
      as = _prepareUrlAs2.as;
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function () {
      var _change = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(method, url, as, options) {
        var _this2 = this;

        var localeChange, _this$locales, _require, normalizeLocalePath, parsedAs, localePathResult, cleanedAs, parsed, _parsed, pathname, query, pages, rewrites, _yield, route, _options$shallow, shallow, resolvedAs, potentialHref, _parsedAs, asPathname, routeRegex, routeMatch, shouldInterpolate, interpolatedAs, missingParams, routeInfo, error, props, __N_SSG, __N_SSP, destination, parsedHref, _prepareUrlAs3, newUrl, newAs, appComp;

        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (isLocalURL(url)) {
                  _context.next = 3;
                  break;
                }

                window.location.href = url;
                return _context.abrupt("return", false);

              case 3:
                localeChange = options.locale !== this.locale;

                if (true) {
                  _context.next = 15;
                  break;
                }

                this.locale = options.locale === false ? this.defaultLocale : options.locale || this.locale;

                if (typeof options.locale === 'undefined') {
                  options.locale = this.locale;
                }

                _require = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js"), normalizeLocalePath = _require.normalizeLocalePath;
                parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(hasBasePath(as) ? delBasePath(as) : as);
                localePathResult = normalizeLocalePath(parsedAs.pathname, this.locales);

                if (localePathResult.detectedLocale) {
                  this.locale = localePathResult.detectedLocale;
                  url = addBasePath(localePathResult.pathname);
                } // if the locale isn't configured hard navigate to show 404 page


                if ((_this$locales = this.locales) == null ? void 0 : _this$locales.includes(this.locale)) {
                  _context.next = 15;
                  break;
                }

                parsedAs.pathname = addLocale(parsedAs.pathname, this.locale);
                window.location.href = (0, _utils.formatWithValidation)(parsedAs);
                return _context.abrupt("return", new Promise(function () {}));

              case 15:
                if (!options._h) {
                  this.isSsr = false;
                } // marking route changes as a navigation start entry


                if (_utils.ST) {
                  performance.mark('routeChange');
                }

                if (this._inFlightRoute) {
                  this.abortComponentLoad(this._inFlightRoute);
                }

                as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
                cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
                this._inFlightRoute = as; // If the url change is only related to a hash change
                // We should not proceed. We should only change the state.
                // WARNING: `_h` is an internal option for handing Next.js client-side
                // hydration. Your app should _never_ use this property. It may change at
                // any time without notice.

                if (!(!options._h && this.onlyAHashChange(cleanedAs))) {
                  _context.next = 29;
                  break;
                }

                this.asPath = cleanedAs;
                Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

                this.changeState(method, url, as, options);
                this.scrollToHash(cleanedAs);
                this.notify(this.components[this.route]);
                Router.events.emit('hashChangeComplete', as);
                return _context.abrupt("return", true);

              case 29:
                parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
                _parsed = parsed, pathname = _parsed.pathname, query = _parsed.query; // The build manifest needs to be loaded before auto-static dynamic pages
                // get their query parameters to allow ensuring they can be parsed properly
                // when rewritten to

                _context.prev = 31;
                _context.next = 34;
                return this.pageLoader.getPageList();

              case 34:
                pages = _context.sent;
                _context.next = 37;
                return (0, _routeLoader.getClientBuildManifest)();

              case 37:
                _yield = _context.sent;
                rewrites = _yield.__rewrites;
                _context.next = 45;
                break;

              case 41:
                _context.prev = 41;
                _context.t0 = _context["catch"](31);
                // If we fail to resolve the page list or client-build manifest, we must
                // do a server-side transition:
                window.location.href = as;
                return _context.abrupt("return", false);

              case 45:
                parsed = this._resolveHref(parsed, pages);

                if (parsed.pathname !== pathname) {
                  pathname = parsed.pathname;
                  url = (0, _utils.formatWithValidation)(parsed);
                } // url and as should always be prefixed with basePath by this
                // point by either next/link or router.push/replace so strip the
                // basePath from the pathname to match the pages dir 1-to-1


                pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
                // (not location.reload() but reload getInitialProps and other Next.js stuffs)
                // We also need to set the method = replaceState always
                // as this should not go into the history (That's how browsers work)
                // We should compare the new asPath to the current asPath, not the url

                if (!this.urlIsNew(cleanedAs) && !localeChange) {
                  method = 'replaceState';
                }

                route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
                _options$shallow = options.shallow, shallow = _options$shallow === void 0 ? false : _options$shallow; // we need to resolve the as value using rewrites for dynamic SSG
                // pages to allow building the data URL correctly

                resolvedAs = as;

                if (true) {
                  resolvedAs = (0, _resolveRewrites["default"])((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname, pages, basePath, rewrites, query, function (p) {
                    return _this2._resolveHref({
                      pathname: p
                    }, pages).pathname;
                  });

                  if (resolvedAs !== as) {
                    potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
                      pathname: resolvedAs
                    }), pages, false).pathname); // if this directly matches a page we need to update the href to
                    // allow the correct page chunk to be loaded

                    if (pages.includes(potentialHref)) {
                      route = potentialHref;
                      pathname = potentialHref;
                      parsed.pathname = pathname;
                      url = (0, _utils.formatWithValidation)(parsed);
                    }
                  }
                }

                resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

                if (!(0, _isDynamic.isDynamicRoute)(route)) {
                  _context.next = 69;
                  break;
                }

                _parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
                asPathname = _parsedAs.pathname;
                routeRegex = (0, _routeRegex.getRouteRegex)(route);
                routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
                shouldInterpolate = route === asPathname;
                interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

                if (!(!routeMatch || shouldInterpolate && !interpolatedAs.result)) {
                  _context.next = 68;
                  break;
                }

                missingParams = Object.keys(routeRegex.groups).filter(function (param) {
                  return !query[param];
                });

                if (!(missingParams.length > 0)) {
                  _context.next = 66;
                  break;
                }

                if (true) {
                  console.warn("".concat(shouldInterpolate ? "Interpolating href" : "Mismatching `as` and `href`", " failed to manually provide ") + "the params: ".concat(missingParams.join(', '), " in the `href`'s `query`"));
                }

                throw new Error((shouldInterpolate ? "The provided `href` (".concat(url, ") value is missing query values (").concat(missingParams.join(', '), ") to be interpolated properly. ") : "The provided `as` value (".concat(asPathname, ") is incompatible with the `href` value (").concat(route, "). ")) + "Read more: https://err.sh/vercel/next.js/".concat(shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'));

              case 66:
                _context.next = 69;
                break;

              case 68:
                if (shouldInterpolate) {
                  as = (0, _utils.formatWithValidation)(Object.assign({}, _parsedAs, {
                    pathname: interpolatedAs.result,
                    query: omitParmsFromQuery(query, interpolatedAs.params)
                  }));
                } else {
                  // Merge params into `query`, overwriting any specified in search
                  Object.assign(query, routeMatch);
                }

              case 69:
                Router.events.emit('routeChangeStart', as);
                _context.prev = 70;
                _context.next = 73;
                return this.getRouteInfo(route, pathname, query, as, shallow);

              case 73:
                routeInfo = _context.sent;
                error = routeInfo.error, props = routeInfo.props, __N_SSG = routeInfo.__N_SSG, __N_SSP = routeInfo.__N_SSP; // handle redirect on client-transition

                if (!((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT)) {
                  _context.next = 85;
                  break;
                }

                destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
                // client-navigation if it is falling back to hard navigation if
                // it's not

                if (!destination.startsWith('/')) {
                  _context.next = 83;
                  break;
                }

                parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

                this._resolveHref(parsedHref, pages, false);

                if (!pages.includes(parsedHref.pathname)) {
                  _context.next = 83;
                  break;
                }

                _prepareUrlAs3 = prepareUrlAs(this, destination, destination), newUrl = _prepareUrlAs3.url, newAs = _prepareUrlAs3.as;
                return _context.abrupt("return", this.change(method, newUrl, newAs, options));

              case 83:
                window.location.href = destination;
                return _context.abrupt("return", new Promise(function () {}));

              case 85:
                Router.events.emit('beforeHistoryChange', as);
                this.changeState(method, url, as, options);

                if (true) {
                  appComp = this.components['/_app'].Component;
                  window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
                }

                _context.next = 90;
                return this.set(route, pathname, query, cleanedAs, routeInfo)["catch"](function (e) {
                  if (e.cancelled) error = error || e;else throw e;
                });

              case 90:
                if (!error) {
                  _context.next = 93;
                  break;
                }

                Router.events.emit('routeChangeError', error, cleanedAs);
                throw error;

              case 93:
                if (false) {}

                if (false) {}

                Router.events.emit('routeChangeComplete', as);
                return _context.abrupt("return", true);

              case 99:
                _context.prev = 99;
                _context.t1 = _context["catch"](70);

                if (!_context.t1.cancelled) {
                  _context.next = 103;
                  break;
                }

                return _context.abrupt("return", false);

              case 103:
                throw _context.t1;

              case 104:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[31, 41], [70, 99]]);
      }));

      function change(_x, _x2, _x3, _x4) {
        return _change.apply(this, arguments);
      }

      return change;
    }()
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (true) {
        if (typeof window.history === 'undefined') {
          console.error("Warning: window.history is not available.");
          return;
        }

        if (typeof window.history[method] === 'undefined') {
          console.error("Warning: window.history.".concat(method, " is not available"));
          return;
        }
      }

      if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
        this._shallow = options.shallow;
        window.history[method]({
          url: url,
          as: as,
          options: options,
          __N: true
        }, // Most browsers currently ignores this parameter, although they may use it in the future.
        // Passing the empty string here should be safe against future changes to the method.
        // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
        '', as);
      }
    }
  }, {
    key: "handleRouteInfoError",
    value: function () {
      var _handleRouteInfoError = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(err, pathname, query, as, loadErrorFail) {
        var Component, styleSheets, props, ssg404, mod, _yield$this$fetchComp, _yield$this$fetchComp2, routeInfo;

        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!err.cancelled) {
                  _context2.next = 2;
                  break;
                }

                throw err;

              case 2:
                if (!((0, _routeLoader.isAssetError)(err) || loadErrorFail)) {
                  _context2.next = 6;
                  break;
                }

                Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
                //  1. Page doesn't exists
                //  2. Page does exist in a different zone
                //  3. Internal error while loading the page
                // So, doing a hard reload is the proper way to deal with this.

                window.location.href = as; // Changing the URL doesn't block executing the current code path.
                // So let's throw a cancellation error stop the routing logic.

                throw buildCancellationError();

              case 6:
                _context2.prev = 6;
                ssg404 = err.message === SSG_DATA_NOT_FOUND_ERROR;

                if (!ssg404) {
                  _context2.next = 24;
                  break;
                }

                _context2.prev = 9;
                _context2.next = 12;
                return this.fetchComponent('/404');

              case 12:
                _yield$this$fetchComp = _context2.sent;
                Component = _yield$this$fetchComp.page;
                styleSheets = _yield$this$fetchComp.styleSheets;
                mod = _yield$this$fetchComp.mod;

                if (!(mod && mod.__N_SSG)) {
                  _context2.next = 20;
                  break;
                }

                _context2.next = 19;
                return this._getStaticData(this.pageLoader.getDataHref('/404', '/404', true, this.locale));

              case 19:
                props = _context2.sent;

              case 20:
                _context2.next = 24;
                break;

              case 22:
                _context2.prev = 22;
                _context2.t0 = _context2["catch"](9);

              case 24:
                if (!(typeof Component === 'undefined' || typeof styleSheets === 'undefined')) {
                  _context2.next = 31;
                  break;
                }

                ;
                _context2.next = 28;
                return this.fetchComponent('/_error');

              case 28:
                _yield$this$fetchComp2 = _context2.sent;
                Component = _yield$this$fetchComp2.page;
                styleSheets = _yield$this$fetchComp2.styleSheets;

              case 31:
                routeInfo = {
                  props: props,
                  Component: Component,
                  styleSheets: styleSheets,
                  err: ssg404 ? undefined : err,
                  error: ssg404 ? undefined : err
                };

                if (routeInfo.props) {
                  _context2.next = 43;
                  break;
                }

                _context2.prev = 33;
                _context2.next = 36;
                return this.getInitialProps(Component, {
                  err: err,
                  pathname: pathname,
                  query: query
                });

              case 36:
                routeInfo.props = _context2.sent;
                _context2.next = 43;
                break;

              case 39:
                _context2.prev = 39;
                _context2.t1 = _context2["catch"](33);
                console.error('Error in error page `getInitialProps`: ', _context2.t1);
                routeInfo.props = {};

              case 43:
                return _context2.abrupt("return", routeInfo);

              case 46:
                _context2.prev = 46;
                _context2.t2 = _context2["catch"](6);
                return _context2.abrupt("return", this.handleRouteInfoError(_context2.t2, pathname, query, as, true));

              case 49:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[6, 46], [9, 22], [33, 39]]);
      }));

      function handleRouteInfoError(_x5, _x6, _x7, _x8, _x9) {
        return _handleRouteInfoError.apply(this, arguments);
      }

      return handleRouteInfoError;
    }()
  }, {
    key: "getRouteInfo",
    value: function () {
      var _getRouteInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(route, pathname, query, as) {
        var _this3 = this;

        var shallow,
            existingRouteInfo,
            cachedRouteInfo,
            routeInfo,
            Component,
            __N_SSG,
            __N_SSP,
            _require2,
            isValidElementType,
            dataHref,
            props,
            _args3 = arguments;

        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                shallow = _args3.length > 4 && _args3[4] !== undefined ? _args3[4] : false;
                _context3.prev = 1;
                existingRouteInfo = this.components[route];

                if (!(shallow && existingRouteInfo && this.route === route)) {
                  _context3.next = 5;
                  break;
                }

                return _context3.abrupt("return", existingRouteInfo);

              case 5:
                cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;

                if (!cachedRouteInfo) {
                  _context3.next = 10;
                  break;
                }

                _context3.t0 = cachedRouteInfo;
                _context3.next = 13;
                break;

              case 10:
                _context3.next = 12;
                return this.fetchComponent(route).then(function (res) {
                  return {
                    Component: res.page,
                    styleSheets: res.styleSheets,
                    __N_SSG: res.mod.__N_SSG,
                    __N_SSP: res.mod.__N_SSP
                  };
                });

              case 12:
                _context3.t0 = _context3.sent;

              case 13:
                routeInfo = _context3.t0;
                Component = routeInfo.Component, __N_SSG = routeInfo.__N_SSG, __N_SSP = routeInfo.__N_SSP;

                if (false) {}

                _require2 = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js"), isValidElementType = _require2.isValidElementType;

                if (isValidElementType(Component)) {
                  _context3.next = 19;
                  break;
                }

                throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));

              case 19:
                if (__N_SSG || __N_SSP) {
                  dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
                    pathname: pathname,
                    query: query
                  }), delBasePath(as), __N_SSG, this.locale);
                }

                _context3.next = 22;
                return this._getData(function () {
                  return __N_SSG ? _this3._getStaticData(dataHref) : __N_SSP ? _this3._getServerData(dataHref) : _this3.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
                  {
                    pathname: pathname,
                    query: query,
                    asPath: as
                  });
                });

              case 22:
                props = _context3.sent;
                routeInfo.props = props;
                this.components[route] = routeInfo;
                return _context3.abrupt("return", routeInfo);

              case 28:
                _context3.prev = 28;
                _context3.t1 = _context3["catch"](1);
                return _context3.abrupt("return", this.handleRouteInfoError(_context3.t1, pathname, query, as));

              case 31:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 28]]);
      }));

      function getRouteInfo(_x10, _x11, _x12, _x13) {
        return _getRouteInfo.apply(this, arguments);
      }

      return getRouteInfo;
    }()
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data) {
      this.isFallback = false;
      this.route = route;
      this.pathname = pathname;
      this.query = query;
      this.asPath = as;
      return this.notify(data);
    }
    /**
    * Callback to execute before replacing router state
    * @param cb callback to be executed
    */

  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._bps = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = _slicedToArray(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = _slicedToArray(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = _slicedToArray(_as$split3, 2),
          hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value


      if (hash === '') {
        window.scrollTo(0, 0);
        return;
      } // First we check if the element by id is found


      var idEl = document.getElementById(hash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(hash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      return this.asPath !== asPath;
    }
  }, {
    key: "_resolveHref",
    value: function _resolveHref(parsedHref, pages) {
      var applyBasePath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var pathname = parsedHref.pathname;
      var cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

      if (cleanPathname === '/404' || cleanPathname === '/_error') {
        return parsedHref;
      } // handle resolving href for dynamic routes


      if (!pages.includes(cleanPathname)) {
        // eslint-disable-next-line array-callback-return
        pages.some(function (page) {
          if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
            parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
            return true;
          }
        });
      }

      return parsedHref;
    }
    /**
    * Prefetch page code, you may wait for the data during page rendering.
    * This feature only works in production!
    * @param url the href of prefetched page
    * @param asPath the as path of the prefetched page
    */

  }, {
    key: "prefetch",
    value: function () {
      var _prefetch = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4(url) {
        var _this4 = this;

        var asPath,
            options,
            parsed,
            _parsed2,
            pathname,
            normalizeLocalePath,
            parsedAs,
            localePathResult,
            pages,
            route,
            _args4 = arguments;

        return _regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                asPath = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : url;
                options = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : {};
                parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
                _parsed2 = parsed, pathname = _parsed2.pathname;

                if (false) {}

                _context4.next = 7;
                return this.pageLoader.getPageList();

              case 7:
                pages = _context4.sent;
                parsed = this._resolveHref(parsed, pages, false);

                if (parsed.pathname !== pathname) {
                  pathname = parsed.pathname;
                  url = (0, _utils.formatWithValidation)(parsed);
                } // Prefetch is not supported in development mode because it would trigger on-demand-entries


                if (false) {}

                return _context4.abrupt("return");

              case 12:
                route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
                _context4.next = 15;
                return Promise.all([this.pageLoader._isSsg(url).then(function (isSsg) {
                  return isSsg ? _this4._getStaticData(_this4.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : _this4.locale)) : false;
                }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);

              case 15:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function prefetch(_x14) {
        return _prefetch.apply(this, arguments);
      }

      return prefetch;
    }()
  }, {
    key: "fetchComponent",
    value: function () {
      var _fetchComponent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5(route) {
        var cancelled, cancel, componentResult, error;
        return _regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                cancelled = false;

                cancel = this.clc = function () {
                  cancelled = true;
                };

                _context5.next = 4;
                return this.pageLoader.loadPage(route);

              case 4:
                componentResult = _context5.sent;

                if (!cancelled) {
                  _context5.next = 9;
                  break;
                }

                error = new Error("Abort fetching component for route: \"".concat(route, "\""));
                error.cancelled = true;
                throw error;

              case 9:
                if (cancel === this.clc) {
                  this.clc = null;
                }

                return _context5.abrupt("return", componentResult);

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function fetchComponent(_x15) {
        return _fetchComponent.apply(this, arguments);
      }

      return fetchComponent;
    }()
  }, {
    key: "_getData",
    value: function _getData(fn) {
      var _this5 = this;

      var cancelled = false;

      var cancel = function cancel() {
        cancelled = true;
      };

      this.clc = cancel;
      return fn().then(function (data) {
        if (cancel === _this5.clc) {
          _this5.clc = null;
        }

        if (cancelled) {
          var err = new Error('Loading initial props cancelled');
          err.cancelled = true;
          throw err;
        }

        return data;
      });
    }
  }, {
    key: "_getStaticData",
    value: function _getStaticData(dataHref) {
      var _this6 = this;

      var _URL = new URL(dataHref, window.location.href),
          cacheKey = _URL.href;

      if (false) {}

      return fetchNextData(dataHref, this.isSsr).then(function (data) {
        _this6.sdc[cacheKey] = data;
        return data;
      });
    }
  }, {
    key: "_getServerData",
    value: function _getServerData(dataHref) {
      return fetchNextData(dataHref, this.isSsr);
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(Component, ctx) {
      var App = this.components['/_app'].Component;

      var AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      return (0, _utils.loadGetInitialProps)(App, {
        AppTree: AppTree,
        Component: Component,
        router: this,
        ctx: ctx
      });
    }
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as) {
      if (this.clc) {
        Router.events.emit('routeChangeError', buildCancellationError(), as);
        this.clc();
        this.clc = null;
      }
    }
  }, {
    key: "notify",
    value: function notify(data) {
      return this.sub(data, this.components['/_app'].Component);
    }
  }]);

  return Router;
}();

exports["default"] = Router;
Router.events = (0, _mitt["default"])();

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports["default"] = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, function (_char) {
    return encodeURIComponent(_char);
  });
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


var slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  var auth = urlObj.auth,
      hostname = urlObj.hostname;
  var protocol = urlObj.protocol || '';
  var pathname = urlObj.pathname || '';
  var hash = urlObj.hash || '';
  var query = urlObj.query || '';
  var host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? "[".concat(hostname, "]") : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  var search = urlObj.search || query && "?".concat(query) || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return "".concat(protocol).concat(host).concat(pathname).concat(search).concat(hash);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/get-asset-path-from-route.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/get-asset-path-from-route.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports["default"] = getAssetPathFromRoute; // Translates a logical route into its pages asset path (relative from a common prefix)
// "asset path" being its javascript file, data file, prerendered html,...

function getAssetPathFromRoute(route) {
  var ext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var path = route === '/' ? '/index' : /^\/index(\/|$)/.test(route) ? "/index".concat(route) : "".concat(route);
  return path + ext;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  var globalBase = new URL(false ? undefined : (0, _utils.getLocationOrigin)());
  var resolvedBase = base ? new URL(base, globalBase) : globalBase;

  var _URL = new URL(url, resolvedBase),
      pathname = _URL.pathname,
      searchParams = _URL.searchParams,
      search = _URL.search,
      hash = _URL.hash,
      href = _URL.href,
      origin = _URL.origin;

  if (origin !== globalBase.origin) {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname: pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search: search,
    hash: hash,
    href: href.slice(globalBase.origin.length)
  };
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _defineProperty = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

exports.__esModule = true;
exports.pathToRegexp = exports["default"] = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

var matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

var customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = function _default() {
  var customRoute = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return function (path) {
    var keys = [];
    var matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    var matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return function (pathname, params) {
      var res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        var _iterator = _createForOfIteratorHelper(keys),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var key = _step.value;

            // unnamed params should be removed as they
            // are not allowed to be used in the destination
            if (typeof key.name === 'number') {
              delete res.params[key.name];
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports["default"] = _default;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _defineProperty = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

var _slicedToArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

exports.__esModule = true;
exports.compileNonPath = compileNonPath;
exports["default"] = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function compileNonPath(value, params) {
  if (!value.includes(':')) {
    return value;
  }

  for (var _i = 0, _Object$keys = Object.keys(params); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];

    if (value.includes(":".concat(key))) {
      value = value.replace(new RegExp(":".concat(key, "\\*"), 'g'), ":".concat(key, "--ESCAPED_PARAM_ASTERISKS")).replace(new RegExp(":".concat(key, "\\?"), 'g'), ":".concat(key, "--ESCAPED_PARAM_QUESTION")).replace(new RegExp(":".concat(key, "\\+"), 'g'), ":".concat(key, "--ESCAPED_PARAM_PLUS")).replace(new RegExp(":".concat(key, "(?!\\w)"), 'g'), "--ESCAPED_PARAM_COLON".concat(key));
    }
  }

  value = value.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g, '\\$1').replace(/--ESCAPED_PARAM_PLUS/g, '+').replace(/--ESCAPED_PARAM_COLON/g, ':').replace(/--ESCAPED_PARAM_QUESTION/g, '?').replace(/--ESCAPED_PARAM_ASTERISKS/g, '*'); // the value needs to start with a forward-slash to be compiled
  // correctly

  return pathToRegexp.compile("/".concat(value), {
    validate: false
  })(params).substr(1);
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  var parsedDestination = {}; // clone query so we don't modify the original

  query = Object.assign({}, query);
  var hadLocale = query.__nextLocale;
  delete query.__nextLocale;
  delete query.__nextDefaultLocale;

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    var _URL = new URL(destination),
        pathname = _URL.pathname,
        searchParams = _URL.searchParams,
        hash = _URL.hash,
        hostname = _URL.hostname,
        port = _URL.port,
        protocol = _URL.protocol,
        search = _URL.search,
        href = _URL.href;

    parsedDestination = {
      pathname: pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash: hash,
      protocol: protocol,
      hostname: hostname,
      port: port,
      search: search,
      href: href
    };
  }

  var destQuery = parsedDestination.query;
  var destPath = "".concat(parsedDestination.pathname).concat(parsedDestination.hash || '');
  var destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  var destPathParams = destPathParamKeys.map(function (key) {
    return key.name;
  });
  var destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  var newUrl; // update any params in query values

  for (var _i2 = 0, _Object$entries = Object.entries(destQuery); _i2 < _Object$entries.length; _i2++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
        key = _Object$entries$_i[0],
        strOrArray = _Object$entries$_i[1];

    var value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = compileNonPath(value, params);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  var paramKeys = Object.keys(params); // remove internal param for i18n

  if (hadLocale) {
    paramKeys = paramKeys.filter(function (name) {
      return name !== 'nextInternalLocale';
    });
  }

  if (appendParamsToQuery && !paramKeys.some(function (key) {
    return destPathParams.includes(key);
  })) {
    var _iterator = _createForOfIteratorHelper(paramKeys),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _key = _step.value;

        if (!(_key in destQuery)) {
          destQuery[_key] = params[_key];
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  var shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = "".concat(shouldAddBasePath ? basePath : '').concat(destinationCompiler(params));

    var _newUrl$split = newUrl.split('#'),
        _newUrl$split2 = _slicedToArray(_newUrl$split, 2),
        _pathname = _newUrl$split2[0],
        _hash = _newUrl$split2[1];

    parsedDestination.pathname = _pathname;
    parsedDestination.hash = "".concat(_hash ? '#' : '').concat(_hash || '');
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error("To use a multi-match in the destination you must add `*` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match");
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl: newUrl,
    parsedDestination: parsedDestination
  };
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _slicedToArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  var query = {};
  searchParams.forEach(function (value, key) {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  var result = new URLSearchParams();
  Object.entries(urlQuery).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    if (Array.isArray(value)) {
      value.forEach(function (item) {
        return result.append(key, stringifyUrlQueryParam(item));
      });
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target) {
  for (var _len = arguments.length, searchParamsList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    searchParamsList[_key - 1] = arguments[_key];
  }

  searchParamsList.forEach(function (searchParams) {
    Array.from(searchParams.keys()).forEach(function (key) {
      return target["delete"](key);
    });
    searchParams.forEach(function (value, key) {
      return target.append(key, value);
    });
  });
  return target;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

exports.__esModule = true;
exports["default"] = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var customRouteMatcher = (0, _pathMatch["default"])(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    var _iterator = _createForOfIteratorHelper(rewrites),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var rewrite = _step.value;
        var matcher = customRouteMatcher(rewrite.source);
        var params = matcher(asPath);

        if (params) {
          if (!rewrite.destination) {
            // this is a proxied rewrite which isn't handled on the client
            break;
          }

          var destRes = (0, _prepareDestination["default"])(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
          asPath = destRes.parsedDestination.pathname;
          Object.assign(query, destRes.parsedDestination.query);

          if (pages.includes((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath))) {
            // check if we now match a page as this means we are done
            // resolving the rewrites
            break;
          } // check if we match a dynamic-route, if so we break the rewrites chain


          var resolvedHref = resolveHref(asPath);

          if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
            break;
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  return asPath;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  var re = routeRegex.re,
      groups = routeRegex.groups;
  return function (pathname) {
    var routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    var decode = function decode(param) {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        var err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    var params = {};
    Object.keys(groups).forEach(function (slugName) {
      var g = groups[slugName];
      var m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(function (entry) {
          return decode(entry);
        }) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  var optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  var repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat: repeat,
    optional: optional
  };
}

function getRouteRegex(normalizedRoute) {
  var segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  var groups = {};
  var groupIndex = 1;
  var parameterizedRoute = segments.map(function (segment) {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      var _parseParameter = parseParameter(segment.slice(1, -1)),
          key = _parseParameter.key,
          optional = _parseParameter.optional,
          repeat = _parseParameter.repeat;

      groups[key] = {
        pos: groupIndex++,
        repeat: repeat,
        optional: optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return "/".concat(escapeRegex(segment));
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (false) { var namedParameterizedRoute, routeKeys, getSafeRouteKey, routeKeyCharLength, routeKeyCharCode; }

  return {
    re: new RegExp("^".concat(parameterizedRoute, "(?:/)?$")),
    groups: groups
  };
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");

exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  var used = false;
  var result;
  return function () {
    if (!used) {
      used = true;
      result = fn.apply(void 0, arguments);
    }

    return result;
  };
}

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

function loadGetInitialProps(_x, _x2) {
  return _loadGetInitialProps.apply(this, arguments);
}

function _loadGetInitialProps() {
  _loadGetInitialProps = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(App, ctx) {
    var _App$prototype, message, res, props, _message;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (false) {}

            if (!((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps)) {
              _context.next = 4;
              break;
            }

            message = "\"".concat(getDisplayName(App), ".getInitialProps()\" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.");
            throw new Error(message);

          case 4:
            // when called from _app `ctx` is nested in `ctx`
            res = ctx.res || ctx.ctx && ctx.ctx.res;

            if (App.getInitialProps) {
              _context.next = 12;
              break;
            }

            if (!(ctx.ctx && ctx.Component)) {
              _context.next = 11;
              break;
            }

            _context.next = 9;
            return loadGetInitialProps(ctx.Component, ctx.ctx);

          case 9:
            _context.t0 = _context.sent;
            return _context.abrupt("return", {
              pageProps: _context.t0
            });

          case 11:
            return _context.abrupt("return", {});

          case 12:
            _context.next = 14;
            return App.getInitialProps(ctx);

          case 14:
            props = _context.sent;

            if (!(res && isResSent(res))) {
              _context.next = 17;
              break;
            }

            return _context.abrupt("return", props);

          case 17:
            if (props) {
              _context.next = 20;
              break;
            }

            _message = "\"".concat(getDisplayName(App), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
            throw new Error(_message);

          case 20:
            if (true) {
              if (Object.keys(props).length === 0 && !ctx.ctx) {
                console.warn("".concat(getDisplayName(App), " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps"));
              }
            }

            return _context.abrupt("return", props);

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _loadGetInitialProps.apply(this, arguments);
}

var urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(function (key) {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn("Unknown key passed via urlObject into url.format: ".concat(key));
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

var SP = typeof performance !== 'undefined';
exports.SP = SP;
var ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-dev-runtime.development.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.1
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev

var jsxDEV$1 =  jsxWithValidation ;

exports.jsxDEV = jsxDEV$1;
  })();
}


/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.1
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// TODO: this is special because it gets imported during build.
var ReactVersion = '17.0.1';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
exports.StrictMode = 0xeacc;
exports.Profiler = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
exports.Suspense = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  exports.StrictMode = symbolFor('react.strict_mode');
  exports.Profiler = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  exports.Suspense = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  transition: 0
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var ReactDebugCurrentFrame = {};
var currentExtraStackFrame = null;
function setExtraStackFrame(stack) {
  {
    currentExtraStackFrame = stack;
  }
}

{
  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
    {
      currentExtraStackFrame = stack;
    }
  }; // Stack implementation injected by the current renderer.


  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentExtraStackFrame) {
      stack += currentExtraStackFrame;
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case exports.Profiler:
      return 'Profiler';

    case exports.StrictMode:
      return 'StrictMode';

    case exports.Suspense:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = key.replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return text.replace(userProvidedKeyEscapeRegex, '$&/');
}
/**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getElementKey(element, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof element === 'object' && element !== null && element.key != null) {
    // Explicit key
    return escape('' + element.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    var _child = children;
    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows:

    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

    if (Array.isArray(mappedChild)) {
      var escapedChildKey = '';

      if (childKey != null) {
        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
      }

      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
        return c;
      });
    } else if (mappedChild != null) {
      if (isValidElement(mappedChild)) {
        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
        // traverseAllChildren used to do for objects as children
        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
      }

      array.push(mappedChild);
    }

    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getElementKey(child, i);
      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {
      var iterableChildren = children;

      {
        // Warn about using Maps as children
        if (iteratorFn === iterableChildren.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(iterableChildren);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getElementKey(child, ii++);
        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
      }
    } else if (type === 'object') {
      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). If you meant to render a collection of children, use an array instead." );
        }
      }
    }
  }

  return subtreeCount;
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  var count = 0;
  mapIntoArray(children, result, '', '', function (child) {
    return func.call(context, child, count++);
  });
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  var n = 0;
  mapChildren(children, function () {
    n++; // Don't return anything
  });
  return n;
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  mapChildren(children, function () {
    forEachFunc.apply(this, arguments); // Don't return anything.
  }, forEachContext);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  return mapChildren(children, function (child) {
    return child;
  }) || [];
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;
  var hasWarnedAboutDisplayNameOnConsumer = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      },
      displayName: {
        get: function () {
          return context.displayName;
        },
        set: function (displayName) {
          if (!hasWarnedAboutDisplayNameOnConsumer) {
            warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);

            hasWarnedAboutDisplayNameOnConsumer = true;
          }
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

var Uninitialized = -1;
var Pending = 0;
var Resolved = 1;
var Rejected = 2;

function lazyInitializer(payload) {
  if (payload._status === Uninitialized) {
    var ctor = payload._result;
    var thenable = ctor(); // Transition to the next state.

    var pending = payload;
    pending._status = Pending;
    pending._result = thenable;
    thenable.then(function (moduleObject) {
      if (payload._status === Pending) {
        var defaultExport = moduleObject.default;

        {
          if (defaultExport === undefined) {
            error('lazy: Expected the result of a dynamic import() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
            'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
          }
        } // Transition to the next state.


        var resolved = payload;
        resolved._status = Resolved;
        resolved._result = defaultExport;
      }
    }, function (error) {
      if (payload._status === Pending) {
        // Transition to the next state.
        var rejected = payload;
        rejected._status = Rejected;
        rejected._result = error;
      }
    });
  }

  if (payload._status === Resolved) {
    return payload._result;
  } else {
    throw payload._result;
  }
}

function lazy(ctor) {
  var payload = {
    // We use these fields to store the result.
    _status: -1,
    _result: ctor
  };
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _payload: payload,
    _init: lazyInitializer
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes; // $FlowFixMe

    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  var elementType = {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (render.displayName == null) {
          render.displayName = name;
        }
      }
    });
  }

  return elementType;
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === exports.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports.StrictMode || type === exports.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  var elementType = {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (type.displayName == null) {
          type.displayName = name;
        }
      }
    });
  }

  return elementType;
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://reactjs.org/link/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher$1.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher$1.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case exports.Suspense:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      setExtraStackFrame(stack);
    } else {
      setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  {
    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === exports.Fragment) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    /* eslint-disable no-new */

    new Map([[frozenObject, null]]);
    new Set([frozenObject]);
    /* eslint-enable no-new */
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.PureComponent = PureComponent;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./node_modules/react/jsx-dev-runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react/jsx-dev-runtime.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-dev-runtime.development.js */ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js");
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var K_Next_JS_Tutorial_Bangla_Source_my_first_next_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/bootstrap.min.css */ "./css/bootstrap.min.css");
/* harmony import */ var _css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "K:\\Next-JS-Tutorial-Bangla\\Source\\my-first-next-app\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(K_Next_JS_Tutorial_Bangla_Source_my_first_next_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



function App(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 12
  }, this);
}
_c = App;

var _c;

$RefreshReg$(_c, "App");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 0:
/*!*******************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js ./node_modules/next/dist/client/router.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!./");
module.exports = __webpack_require__(/*! K:\Next-JS-Tutorial-Bangla\Source\my-first-next-app\node_modules\next\dist\client\router.js */"./node_modules/next/dist/client/router.js");


/***/ })

},[[0,"webpack"]]]);