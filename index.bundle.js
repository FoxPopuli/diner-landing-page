/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/img/sushi.jpg */ "./src/img/sushi.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --link-visited: #ca9c5e;\n    --default-font: Arial, sans-serif;\n    --icon-radius: 10px;\n    --large-icon-size: 40px;\n    --medium-icon-size: 30px;\n    --small-icon-size: 20px;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: var(--default-font);\n    color: white;\n}\n\nbody {\n    display: flex;\n    justify-content: center;\n    max-width: 100vw;\n    /* max-height: 100vh; */\n    background-size: cover;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-color: black;\n    background-position: center top;\n}\n\n.main {\n    display: flex;\n    flex-direction: column;\n    width: 80%;\n}\n\n/* Header Styles */\n\nheader {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    width: 80vw;\n    flex-wrap: wrap;\n}\n\nheader a, .side-nav a {\n    font-family: var(--default-font);\n    text-decoration: none;\n    color: white;\n    padding: 5px;\n}\n\na:hover, a:active {\n    color: var(--link-visited);\n}\n\nheader img {\n    width: var(--large-icon-size);\n    margin: 10px;\n    filter: invert(100%)\n}\n\n.social-links {\n    display: flex;\n}\n\nheader ul {\n    display: none;\n    list-style: none;\n}\n\nheader button {\n    display: block;\n}\n\nli {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 20px;\n}\n\n.side-nav {\n    display: flex;\n    flex-direction: column;\n    width: 80vw;\n    /* background-color: #000; */\n    align-items: center;\n}\n\n.side-nav ul li {\n    font-size: 30px;\n}\n\n/* Content Styles */\n.block1 {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: space-between;\n    height: 100%;\n}\n\n.block1 * {\n    display: flex;\n    justify-content: center;\n    text-align: center;\n}\n\nh1 {\n    font-size: 60px;\n}\n\n.block1 h1, .block1 h2 {\n    margin: 20px;\n}\n\n.block1 .button-div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: 10px;\n    \n}\n\n.button-div div {\n    margin: 30px 20px 30px 20px;\n    border-radius: 5px;\n    border-top: 2px solid var(--link-visited);\n    border-bottom: 2px solid var(--link-visited);\n    width: 150px;\n    height: 50px;\n    /* padding: 20px; */\n    padding: 20px 0 20px 0;\n    display: flex;\n    align-items: center;\n    align-self: center;\n\n    transition-property: padding, color, margin;\n    transition-duration: 0.25s;\n}\n\n.button-div div:hover {\n    /* height: 60px; */\n    margin: 20px;\n    padding: 30px 0 30px 0;\n    color: var(--link-visited)\n}\n/* Tablet Styles */\n@media only screen and (min-width: 780px) and (max-width: 960px) {\n\n    header .menu-button {\n        display: none;\n    }\n\n    header img {\n        width: var(--medium-icon-size);\n    }\n\n    header ul {\n        display: flex;\n    }\n\n    .block1 .button-div {\n        flex-direction: row;\n    }\n\n}\n\n/* Desktop Styles */\n@media only screen and (min-width: 961px) {\n\n    header .menu-button {\n        display: none;\n    }\n\n    header img {\n        width: var(--small-icon-size);\n    }\n\n    header ul {\n        display: flex;\n    }\n\n    header ul li {\n        margin: 0 10px 0 10px;\n    }\n\n    .block1 .button-div {\n        flex-direction: row;\n    }\n}\n\n/* Toggles */\n.invis {\n    display: none\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;IACvB,iCAAiC;IACjC,mBAAmB;IACnB,uBAAuB;IACvB,wBAAwB;IACxB,uBAAuB;AAC3B;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,gCAAgC;IAChC,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,gBAAgB;IAChB,uBAAuB;IACvB,sBAAsB;IACtB,yDAA6C;IAC7C,4BAA4B;IAC5B,uBAAuB;IACvB,+BAA+B;AACnC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;AACd;;AAEA,kBAAkB;;AAElB;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,gCAAgC;IAChC,qBAAqB;IACrB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,6BAA6B;IAC7B,YAAY;IACZ;AACJ;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,4BAA4B;IAC5B,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA,mBAAmB;AACnB;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,0BAA0B;IAC1B,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,aAAa;;AAEjB;;AAEA;IACI,2BAA2B;IAC3B,kBAAkB;IAClB,yCAAyC;IACzC,4CAA4C;IAC5C,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,sBAAsB;IACtB,aAAa;IACb,mBAAmB;IACnB,kBAAkB;;IAElB,2CAA2C;IAC3C,0BAA0B;AAC9B;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,sBAAsB;IACtB;AACJ;AACA,kBAAkB;AAClB;;IAEI;QACI,aAAa;IACjB;;IAEA;QACI,8BAA8B;IAClC;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,mBAAmB;IACvB;;AAEJ;;AAEA,mBAAmB;AACnB;;IAEI;QACI,aAAa;IACjB;;IAEA;QACI,6BAA6B;IACjC;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,qBAAqB;IACzB;;IAEA;QACI,mBAAmB;IACvB;AACJ;;AAEA,YAAY;AACZ;IACI;AACJ","sourcesContent":[":root {\n    --link-visited: #ca9c5e;\n    --default-font: Arial, sans-serif;\n    --icon-radius: 10px;\n    --large-icon-size: 40px;\n    --medium-icon-size: 30px;\n    --small-icon-size: 20px;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: var(--default-font);\n    color: white;\n}\n\nbody {\n    display: flex;\n    justify-content: center;\n    max-width: 100vw;\n    /* max-height: 100vh; */\n    background-size: cover;\n    background-image: url('../src/img/sushi.jpg');\n    background-repeat: no-repeat;\n    background-color: black;\n    background-position: center top;\n}\n\n.main {\n    display: flex;\n    flex-direction: column;\n    width: 80%;\n}\n\n/* Header Styles */\n\nheader {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    width: 80vw;\n    flex-wrap: wrap;\n}\n\nheader a, .side-nav a {\n    font-family: var(--default-font);\n    text-decoration: none;\n    color: white;\n    padding: 5px;\n}\n\na:hover, a:active {\n    color: var(--link-visited);\n}\n\nheader img {\n    width: var(--large-icon-size);\n    margin: 10px;\n    filter: invert(100%)\n}\n\n.social-links {\n    display: flex;\n}\n\nheader ul {\n    display: none;\n    list-style: none;\n}\n\nheader button {\n    display: block;\n}\n\nli {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 20px;\n}\n\n.side-nav {\n    display: flex;\n    flex-direction: column;\n    width: 80vw;\n    /* background-color: #000; */\n    align-items: center;\n}\n\n.side-nav ul li {\n    font-size: 30px;\n}\n\n/* Content Styles */\n.block1 {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: space-between;\n    height: 100%;\n}\n\n.block1 * {\n    display: flex;\n    justify-content: center;\n    text-align: center;\n}\n\nh1 {\n    font-size: 60px;\n}\n\n.block1 h1, .block1 h2 {\n    margin: 20px;\n}\n\n.block1 .button-div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: 10px;\n    \n}\n\n.button-div div {\n    margin: 30px 20px 30px 20px;\n    border-radius: 5px;\n    border-top: 2px solid var(--link-visited);\n    border-bottom: 2px solid var(--link-visited);\n    width: 150px;\n    height: 50px;\n    /* padding: 20px; */\n    padding: 20px 0 20px 0;\n    display: flex;\n    align-items: center;\n    align-self: center;\n\n    transition-property: padding, color, margin;\n    transition-duration: 0.25s;\n}\n\n.button-div div:hover {\n    /* height: 60px; */\n    margin: 20px;\n    padding: 30px 0 30px 0;\n    color: var(--link-visited)\n}\n/* Tablet Styles */\n@media only screen and (min-width: 780px) and (max-width: 960px) {\n\n    header .menu-button {\n        display: none;\n    }\n\n    header img {\n        width: var(--medium-icon-size);\n    }\n\n    header ul {\n        display: flex;\n    }\n\n    .block1 .button-div {\n        flex-direction: row;\n    }\n\n}\n\n/* Desktop Styles */\n@media only screen and (min-width: 961px) {\n\n    header .menu-button {\n        display: none;\n    }\n\n    header img {\n        width: var(--small-icon-size);\n    }\n\n    header ul {\n        display: flex;\n    }\n\n    header ul li {\n        margin: 0 10px 0 10px;\n    }\n\n    .block1 .button-div {\n        flex-direction: row;\n    }\n}\n\n/* Toggles */\n.invis {\n    display: none\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/content1.js":
/*!*************************!*\
  !*** ./src/content1.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "content1": () => (/* binding */ content1)
/* harmony export */ });
/* harmony import */ var _elementFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementFactory */ "./src/elementFactory.js");

// OT 392 410 26
// 086 007 0000
// 012 336 3823 
// 6201285188080
const content1 = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'div',
    className: 'block1'
})

const h1 = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'h1',
    textContent: 'Flavour, precision and perfection'
})

const h2 = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'h2',
    textContent: "Jane Doe's Diner is a diner owned by Jane Doe. We serve food and drinks."
})

const mainMenuButton = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'div',
    textContent: 'VIEW MAIN MENU'
})


mainMenuButton.addEventListener('click', (e) => {
    console.log('mainMenuButton clicked')
    console.log(e.target)
    console.log(undefined)
    if (e.target.closest('')) {
        console.log('ayyy')
    }
})

// mainMenuButton.addEventListener('click', menuClic)

const orderOnlineButton = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'div',
    textContent: 'ORDER ONLINE'
})

const buttonEle = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'div',
    className: 'button-div'
})

buttonEle.appendChild(mainMenuButton)
buttonEle.appendChild(orderOnlineButton)


content1.appendChild(h1);
content1.appendChild(h2);
content1.appendChild(buttonEle);


/***/ }),

/***/ "./src/elementFactory.js":
/*!*******************************!*\
  !*** ./src/elementFactory.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Generates an element based on the argument object
// all props besides type must be valid properties of a DOM element (href, textContent...)
// the children property must be a DOM element (recursion to fix?)
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((obj) => {
    const {type, ...rest} = obj;

    const ele = document.createElement(type);
    for (let prop in rest) {
        if (typeof ele[prop] === 'function') {
            ele[prop](rest[prop]);
        } else {
            ele[prop] = rest[prop];
        }
    }

    return ele;    
});

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "header": () => (/* binding */ header)
/* harmony export */ });
/* harmony import */ var _elementFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementFactory */ "./src/elementFactory.js");
/* harmony import */ var _img_fb_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/fb-icon.svg */ "./src/img/fb-icon.svg");
/* harmony import */ var _img_insta_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/insta-icon.svg */ "./src/img/insta-icon.svg");
/* harmony import */ var _img_restaurant_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/restaurant-logo.svg */ "./src/img/restaurant-logo.svg");
/* harmony import */ var _img_menu_icon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/menu-icon.svg */ "./src/img/menu-icon.svg");
/* harmony import */ var _paths__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paths */ "./src/paths.js");
/* harmony import */ var _listFactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listFactory */ "./src/listFactory.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebar */ "./src/sidebar.js");











const header = document.createElement('header');

// Logo

const logoEle = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'a',
    href: _paths__WEBPACK_IMPORTED_MODULE_5__.paths.home,
})

const logoImg = new Image();  
logoImg.src = _img_restaurant_logo_svg__WEBPACK_IMPORTED_MODULE_3__;

logoEle.appendChild(logoImg);

// Nav links
const nav1 = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'a',
    href: _paths__WEBPACK_IMPORTED_MODULE_5__.paths.home,
    textContent: 'Home'
})

const nav2 = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'a',
    href: _paths__WEBPACK_IMPORTED_MODULE_5__.paths.about,
    textContent: 'About'
})

const nav3 = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'a',
    href: _paths__WEBPACK_IMPORTED_MODULE_5__.paths.menues,
    textContent: 'Our Menus'
})

const nav4 = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'a',
    href: _paths__WEBPACK_IMPORTED_MODULE_5__.paths.reservations,
    textContent: 'Reservations'
})

const nav5 = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'a',
    href: _paths__WEBPACK_IMPORTED_MODULE_5__.paths.contact,
    textContent: 'Contact'
})

const regularLinks = [nav1, nav2, nav3, nav4, nav5];
const regularList = (0,_listFactory__WEBPACK_IMPORTED_MODULE_6__.listFactory)(regularLinks);

// Social Media Links
// facebook
const fbEle = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'a',
    href: _paths__WEBPACK_IMPORTED_MODULE_5__.paths.facebook,
});

const fbImg = document.createElement('img');
fbImg.src = _img_fb_icon_svg__WEBPACK_IMPORTED_MODULE_1__;

fbEle.appendChild(fbImg);


// Instagram
const instaEle = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'a',
    href: _paths__WEBPACK_IMPORTED_MODULE_5__.paths.instagram
})

const instaImg = document.createElement('img');
instaImg.src = _img_insta_icon_svg__WEBPACK_IMPORTED_MODULE_2__;

instaEle.appendChild(instaImg);

// Side nav button
const sideNavButton = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'img',
    className: 'menu-button',
    src: _img_menu_icon_svg__WEBPACK_IMPORTED_MODULE_4__
})

sideNavButton.addEventListener('click', () => {
    _sidebar__WEBPACK_IMPORTED_MODULE_7__.sideBar.classList.toggle('invis');
})

// Media div
const socialLinks = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'div',
    className: 'social-links'
})

socialLinks.appendChild(fbEle);
socialLinks.appendChild(instaEle);
socialLinks.appendChild(sideNavButton);


// Append
header.appendChild(logoEle)
header.appendChild(regularList);
header.appendChild(socialLinks);






/***/ }),

/***/ "./src/listFactory.js":
/*!****************************!*\
  !*** ./src/listFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listFactory": () => (/* binding */ listFactory)
/* harmony export */ });
const listFactory = (items) => {
    const list = document.createElement('ul');
    
    items.forEach( item => {
        const li = document.createElement('li');
        li.appendChild(item);
        list.appendChild(li); 
    })

    return list;
}

/***/ }),

/***/ "./src/pageState.js":
/*!**************************!*\
  !*** ./src/pageState.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getState": () => (/* binding */ getState)
/* harmony export */ });
const getState = () => {
    let isMobile = window.matchMedia('(max-width: 780px)');
    let isTablet = window.matchMedia('(min-width: 781px) and (max-width: 960px)');
    let isDesktop = window.matchMedia('(min-width: 961px)');
    
    if (isMobile.matches) return 'mobile';
    if (isTablet.matches) return 'tablet';
    if (isDesktop.matches) return 'desktop';
}


/***/ }),

/***/ "./src/paths.js":
/*!**********************!*\
  !*** ./src/paths.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "paths": () => (/* binding */ paths)
/* harmony export */ });
const paths = {
    home:           '#',
    menues:         '#',
    about:          '#',
    reservations:   '#',
    contact:        '#',
    facebook:       '#',
    instagram:      '#'     
}

/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sideBar": () => (/* binding */ sideBar)
/* harmony export */ });
/* harmony import */ var _elementFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementFactory */ "./src/elementFactory.js");
/* harmony import */ var _listFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listFactory */ "./src/listFactory.js");
/* harmony import */ var _paths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paths */ "./src/paths.js");
/* harmony import */ var _pageState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pageState */ "./src/pageState.js");





const nav1 = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'a',
    href: _paths__WEBPACK_IMPORTED_MODULE_2__.paths.home,
    textContent: 'Home'
})

const nav2 = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'a',
    href: _paths__WEBPACK_IMPORTED_MODULE_2__.paths.about,
    textContent: 'About'
})

const nav3 = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'a',
    href: _paths__WEBPACK_IMPORTED_MODULE_2__.paths.menues,
    textContent: 'Our Menus'
})

const nav4 = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'a',
    href: _paths__WEBPACK_IMPORTED_MODULE_2__.paths.reservations,
    textContent: 'Reservations'
})

const nav5 = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'a',
    href: _paths__WEBPACK_IMPORTED_MODULE_2__.paths.contact,
    textContent: 'Contact'
})

const regularLinks = [nav1, nav2, nav3, nav4, nav5];
const regularList = (0,_listFactory__WEBPACK_IMPORTED_MODULE_1__.listFactory)(regularLinks);

const sideBar = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'div',
    className: 'side-nav invis'
})

// Closes
window.addEventListener('resize', () =>{

    if ((0,_pageState__WEBPACK_IMPORTED_MODULE_3__.getState)() !== 'mobile') {
        sideBar.classList.add('invis');
    }
})

// Closes mobile menu when an out of bounds click is detected
document.addEventListener('click', (e) => {

    if (!e.target.closest('.side-nav')) {
        if (e.target.closest('.menu-button')) {
            return
        } else if (!sideBar.classList.contains('invis')) {
            sideBar.classList.add('invis')
        }
    }
})

sideBar.appendChild(regularList)

/***/ }),

/***/ "./src/img/fb-icon.svg":
/*!*****************************!*\
  !*** ./src/img/fb-icon.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6784b16b137b86060b65.svg";

/***/ }),

/***/ "./src/img/insta-icon.svg":
/*!********************************!*\
  !*** ./src/img/insta-icon.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6ed2cb5264b2240800b4.svg";

/***/ }),

/***/ "./src/img/menu-icon.svg":
/*!*******************************!*\
  !*** ./src/img/menu-icon.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0156bc9d241205ffb222.svg";

/***/ }),

/***/ "./src/img/restaurant-logo.svg":
/*!*************************************!*\
  !*** ./src/img/restaurant-logo.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ca6c102456ff1d9349cc.svg";

/***/ }),

/***/ "./src/img/sushi.jpg":
/*!***************************!*\
  !*** ./src/img/sushi.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "91e8dc6f7140e39f3542.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "main": () => (/* binding */ main)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar */ "./src/sidebar.js");
/* harmony import */ var _content1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content1 */ "./src/content1.js");
/* harmony import */ var _img_sushi_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/sushi.jpg */ "./src/img/sushi.jpg");







const main = document.createElement('div');
main.className = 'main';
main.appendChild(_header__WEBPACK_IMPORTED_MODULE_1__.header);
main.appendChild(_sidebar__WEBPACK_IMPORTED_MODULE_2__.sideBar);
main.appendChild(_content1__WEBPACK_IMPORTED_MODULE_3__.content1);

const bgImg = new Image();
bgImg.src = _img_sushi_jpg__WEBPACK_IMPORTED_MODULE_4__;
bgImg.classList.add('bg-img')

// document.body.style.backgroundImage = "url('../src/img/sushi.jpg')";
// document.body.style.height = '100%'
document.body.style.backgroundImage = bgImg;





document.body.appendChild(main);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eEIsaUJBQWlCLCtDQUFROztBQUV6QjtBQUNBLFlBQVksMkNBQVM7QUFDckI7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUFNQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9jb250ZW50MS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvZWxlbWVudEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvbGlzdEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL3BhZ2VTdGF0ZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvcGF0aHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL3NyYy9pbWcvc3VzaGkuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWxpbmstdmlzaXRlZDogI2NhOWM1ZTtcXG4gICAgLS1kZWZhdWx0LWZvbnQ6IEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICAtLWljb24tcmFkaXVzOiAxMHB4O1xcbiAgICAtLWxhcmdlLWljb24tc2l6ZTogNDBweDtcXG4gICAgLS1tZWRpdW0taWNvbi1zaXplOiAzMHB4O1xcbiAgICAtLXNtYWxsLWljb24tc2l6ZTogMjBweDtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWRlZmF1bHQtZm9udCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xcbiAgICAvKiBtYXgtaGVpZ2h0OiAxMDB2aDsgKi9cXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XFxufVxcblxcbi5tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLyogSGVhZGVyIFN0eWxlcyAqL1xcblxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IDgwdnc7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuaGVhZGVyIGEsIC5zaWRlLW5hdiBhIHtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWRlZmF1bHQtZm9udCk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbmE6aG92ZXIsIGE6YWN0aXZlIHtcXG4gICAgY29sb3I6IHZhcigtLWxpbmstdmlzaXRlZCk7XFxufVxcblxcbmhlYWRlciBpbWcge1xcbiAgICB3aWR0aDogdmFyKC0tbGFyZ2UtaWNvbi1zaXplKTtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKVxcbn1cXG5cXG4uc29jaWFsLWxpbmtzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuaGVhZGVyIHVsIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuaGVhZGVyIGJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5saSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5zaWRlLW5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA4MHZ3O1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwOyAqL1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2lkZS1uYXYgdWwgbGkge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxufVxcblxcbi8qIENvbnRlbnQgU3R5bGVzICovXFxuLmJsb2NrMSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogc3BhY2UtYmV0d2VlbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uYmxvY2sxICoge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogNjBweDtcXG59XFxuXFxuLmJsb2NrMSBoMSwgLmJsb2NrMSBoMiB7XFxuICAgIG1hcmdpbjogMjBweDtcXG59XFxuXFxuLmJsb2NrMSAuYnV0dG9uLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBcXG59XFxuXFxuLmJ1dHRvbi1kaXYgZGl2IHtcXG4gICAgbWFyZ2luOiAzMHB4IDIwcHggMzBweCAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1saW5rLXZpc2l0ZWQpO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tbGluay12aXNpdGVkKTtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIC8qIHBhZGRpbmc6IDIwcHg7ICovXFxuICAgIHBhZGRpbmc6IDIwcHggMCAyMHB4IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogcGFkZGluZywgY29sb3IsIG1hcmdpbjtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4yNXM7XFxufVxcblxcbi5idXR0b24tZGl2IGRpdjpob3ZlciB7XFxuICAgIC8qIGhlaWdodDogNjBweDsgKi9cXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAzMHB4IDAgMzBweCAwO1xcbiAgICBjb2xvcjogdmFyKC0tbGluay12aXNpdGVkKVxcbn1cXG4vKiBUYWJsZXQgU3R5bGVzICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3ODBweCkgYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XFxuXFxuICAgIGhlYWRlciAubWVudS1idXR0b24ge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICBoZWFkZXIgaW1nIHtcXG4gICAgICAgIHdpZHRoOiB2YXIoLS1tZWRpdW0taWNvbi1zaXplKTtcXG4gICAgfVxcblxcbiAgICBoZWFkZXIgdWwge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgfVxcblxcbiAgICAuYmxvY2sxIC5idXR0b24tZGl2IHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIH1cXG5cXG59XFxuXFxuLyogRGVza3RvcCBTdHlsZXMgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MXB4KSB7XFxuXFxuICAgIGhlYWRlciAubWVudS1idXR0b24ge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICBoZWFkZXIgaW1nIHtcXG4gICAgICAgIHdpZHRoOiB2YXIoLS1zbWFsbC1pY29uLXNpemUpO1xcbiAgICB9XFxuXFxuICAgIGhlYWRlciB1bCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB9XFxuXFxuICAgIGhlYWRlciB1bCBsaSB7XFxuICAgICAgICBtYXJnaW46IDAgMTBweCAwIDEwcHg7XFxuICAgIH1cXG5cXG4gICAgLmJsb2NrMSAuYnV0dG9uLWRpdiB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICB9XFxufVxcblxcbi8qIFRvZ2dsZXMgKi9cXG4uaW52aXMge1xcbiAgICBkaXNwbGF5OiBub25lXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsaUNBQWlDO0lBQ2pDLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLGdDQUFnQztJQUNoQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0Qix5REFBNkM7SUFDN0MsNEJBQTRCO0lBQzVCLHVCQUF1QjtJQUN2QiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7QUFDZDs7QUFFQSxrQkFBa0I7O0FBRWxCO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFlBQVk7SUFDWjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLDRCQUE0QjtJQUM1QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBLG1CQUFtQjtBQUNuQjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGFBQWE7O0FBRWpCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQix5Q0FBeUM7SUFDekMsNENBQTRDO0lBQzVDLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjs7SUFFbEIsMkNBQTJDO0lBQzNDLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCO0FBQ0o7QUFDQSxrQkFBa0I7QUFDbEI7O0lBRUk7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksOEJBQThCO0lBQ2xDOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLG1CQUFtQjtJQUN2Qjs7QUFFSjs7QUFFQSxtQkFBbUI7QUFDbkI7O0lBRUk7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksNkJBQTZCO0lBQ2pDOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLHFCQUFxQjtJQUN6Qjs7SUFFQTtRQUNJLG1CQUFtQjtJQUN2QjtBQUNKOztBQUVBLFlBQVk7QUFDWjtJQUNJO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWxpbmstdmlzaXRlZDogI2NhOWM1ZTtcXG4gICAgLS1kZWZhdWx0LWZvbnQ6IEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICAtLWljb24tcmFkaXVzOiAxMHB4O1xcbiAgICAtLWxhcmdlLWljb24tc2l6ZTogNDBweDtcXG4gICAgLS1tZWRpdW0taWNvbi1zaXplOiAzMHB4O1xcbiAgICAtLXNtYWxsLWljb24tc2l6ZTogMjBweDtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWRlZmF1bHQtZm9udCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xcbiAgICAvKiBtYXgtaGVpZ2h0OiAxMDB2aDsgKi9cXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9zcmMvaW1nL3N1c2hpLmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogODAlO1xcbn1cXG5cXG4vKiBIZWFkZXIgU3R5bGVzICovXFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB3aWR0aDogODB2dztcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG5oZWFkZXIgYSwgLnNpZGUtbmF2IGEge1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZGVmYXVsdC1mb250KTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuYTpob3ZlciwgYTphY3RpdmUge1xcbiAgICBjb2xvcjogdmFyKC0tbGluay12aXNpdGVkKTtcXG59XFxuXFxuaGVhZGVyIGltZyB7XFxuICAgIHdpZHRoOiB2YXIoLS1sYXJnZS1pY29uLXNpemUpO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpXFxufVxcblxcbi5zb2NpYWwtbGlua3Mge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5oZWFkZXIgdWwge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5oZWFkZXIgYnV0dG9uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmxpIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLnNpZGUtbmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDgwdnc7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICMwMDA7ICovXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zaWRlLW5hdiB1bCBsaSB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLyogQ29udGVudCBTdHlsZXMgKi9cXG4uYmxvY2sxIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5ibG9jazEgKiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiA2MHB4O1xcbn1cXG5cXG4uYmxvY2sxIGgxLCAuYmxvY2sxIGgyIHtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG4uYmxvY2sxIC5idXR0b24tZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIFxcbn1cXG5cXG4uYnV0dG9uLWRpdiBkaXYge1xcbiAgICBtYXJnaW46IDMwcHggMjBweCAzMHB4IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLWxpbmstdmlzaXRlZCk7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1saW5rLXZpc2l0ZWQpO1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgLyogcGFkZGluZzogMjBweDsgKi9cXG4gICAgcGFkZGluZzogMjBweCAwIDIwcHggMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcblxcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBwYWRkaW5nLCBjb2xvciwgbWFyZ2luO1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjI1cztcXG59XFxuXFxuLmJ1dHRvbi1kaXYgZGl2OmhvdmVyIHtcXG4gICAgLyogaGVpZ2h0OiA2MHB4OyAqL1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICAgIHBhZGRpbmc6IDMwcHggMCAzMHB4IDA7XFxuICAgIGNvbG9yOiB2YXIoLS1saW5rLXZpc2l0ZWQpXFxufVxcbi8qIFRhYmxldCBTdHlsZXMgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc4MHB4KSBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcXG5cXG4gICAgaGVhZGVyIC5tZW51LWJ1dHRvbiB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIGhlYWRlciBpbWcge1xcbiAgICAgICAgd2lkdGg6IHZhcigtLW1lZGl1bS1pY29uLXNpemUpO1xcbiAgICB9XFxuXFxuICAgIGhlYWRlciB1bCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB9XFxuXFxuICAgIC5ibG9jazEgLmJ1dHRvbi1kaXYge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgfVxcblxcbn1cXG5cXG4vKiBEZXNrdG9wIFN0eWxlcyAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYxcHgpIHtcXG5cXG4gICAgaGVhZGVyIC5tZW51LWJ1dHRvbiB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIGhlYWRlciBpbWcge1xcbiAgICAgICAgd2lkdGg6IHZhcigtLXNtYWxsLWljb24tc2l6ZSk7XFxuICAgIH1cXG5cXG4gICAgaGVhZGVyIHVsIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG5cXG4gICAgaGVhZGVyIHVsIGxpIHtcXG4gICAgICAgIG1hcmdpbjogMCAxMHB4IDAgMTBweDtcXG4gICAgfVxcblxcbiAgICAuYmxvY2sxIC5idXR0b24tZGl2IHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIH1cXG59XFxuXFxuLyogVG9nZ2xlcyAqL1xcbi5pbnZpcyB7XFxuICAgIGRpc3BsYXk6IG5vbmVcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBlbGVtZW50RmFjdG9yeSBmcm9tIFwiLi9lbGVtZW50RmFjdG9yeVwiO1xuLy8gT1QgMzkyIDQxMCAyNlxuLy8gMDg2IDAwNyAwMDAwXG4vLyAwMTIgMzM2IDM4MjMgXG4vLyA2MjAxMjg1MTg4MDgwXG5leHBvcnQgY29uc3QgY29udGVudDEgPSBlbGVtZW50RmFjdG9yeSh7XG4gICAgdHlwZTogJ2RpdicsXG4gICAgY2xhc3NOYW1lOiAnYmxvY2sxJ1xufSlcblxuY29uc3QgaDEgPSBlbGVtZW50RmFjdG9yeSh7XG4gICAgdHlwZTogJ2gxJyxcbiAgICB0ZXh0Q29udGVudDogJ0ZsYXZvdXIsIHByZWNpc2lvbiBhbmQgcGVyZmVjdGlvbidcbn0pXG5cbmNvbnN0IGgyID0gZWxlbWVudEZhY3Rvcnkoe1xuICAgIHR5cGU6ICdoMicsXG4gICAgdGV4dENvbnRlbnQ6IFwiSmFuZSBEb2UncyBEaW5lciBpcyBhIGRpbmVyIG93bmVkIGJ5IEphbmUgRG9lLiBXZSBzZXJ2ZSBmb29kIGFuZCBkcmlua3MuXCJcbn0pXG5cbmNvbnN0IG1haW5NZW51QnV0dG9uID0gZWxlbWVudEZhY3Rvcnkoe1xuICAgIHR5cGU6ICdkaXYnLFxuICAgIHRleHRDb250ZW50OiAnVklFVyBNQUlOIE1FTlUnXG59KVxuXG5cbm1haW5NZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZygnbWFpbk1lbnVCdXR0b24gY2xpY2tlZCcpXG4gICAgY29uc29sZS5sb2coZS50YXJnZXQpXG4gICAgY29uc29sZS5sb2codGhpcylcbiAgICBpZiAoZS50YXJnZXQuY2xvc2VzdCgnJykpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2F5eXknKVxuICAgIH1cbn0pXG5cbi8vIG1haW5NZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWVudUNsaWMpXG5cbmNvbnN0IG9yZGVyT25saW5lQnV0dG9uID0gZWxlbWVudEZhY3Rvcnkoe1xuICAgIHR5cGU6ICdkaXYnLFxuICAgIHRleHRDb250ZW50OiAnT1JERVIgT05MSU5FJ1xufSlcblxuY29uc3QgYnV0dG9uRWxlID0gZWxlbWVudEZhY3Rvcnkoe1xuICAgIHR5cGU6ICdkaXYnLFxuICAgIGNsYXNzTmFtZTogJ2J1dHRvbi1kaXYnXG59KVxuXG5idXR0b25FbGUuYXBwZW5kQ2hpbGQobWFpbk1lbnVCdXR0b24pXG5idXR0b25FbGUuYXBwZW5kQ2hpbGQob3JkZXJPbmxpbmVCdXR0b24pXG5cblxuY29udGVudDEuYXBwZW5kQ2hpbGQoaDEpO1xuY29udGVudDEuYXBwZW5kQ2hpbGQoaDIpO1xuY29udGVudDEuYXBwZW5kQ2hpbGQoYnV0dG9uRWxlKTtcbiIsIi8vIEdlbmVyYXRlcyBhbiBlbGVtZW50IGJhc2VkIG9uIHRoZSBhcmd1bWVudCBvYmplY3Rcbi8vIGFsbCBwcm9wcyBiZXNpZGVzIHR5cGUgbXVzdCBiZSB2YWxpZCBwcm9wZXJ0aWVzIG9mIGEgRE9NIGVsZW1lbnQgKGhyZWYsIHRleHRDb250ZW50Li4uKVxuLy8gdGhlIGNoaWxkcmVuIHByb3BlcnR5IG11c3QgYmUgYSBET00gZWxlbWVudCAocmVjdXJzaW9uIHRvIGZpeD8pXG5leHBvcnQgZGVmYXVsdCAob2JqKSA9PiB7XG4gICAgY29uc3Qge3R5cGUsIC4uLnJlc3R9ID0gb2JqO1xuXG4gICAgY29uc3QgZWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICBmb3IgKGxldCBwcm9wIGluIHJlc3QpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbGVbcHJvcF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGVsZVtwcm9wXShyZXN0W3Byb3BdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZVtwcm9wXSA9IHJlc3RbcHJvcF07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZWxlOyAgICBcbn0iLCJpbXBvcnQgZWxlbWVudEZhY3RvcnkgZnJvbSBcIi4vZWxlbWVudEZhY3RvcnlcIjtcbmltcG9ydCBmYkljb24gZnJvbSAnLi9pbWcvZmItaWNvbi5zdmcnO1xuaW1wb3J0IGluc3RhSWNvbiBmcm9tICcuL2ltZy9pbnN0YS1pY29uLnN2Zyc7XG5pbXBvcnQgbG9nb0ljb24gZnJvbSAnLi9pbWcvcmVzdGF1cmFudC1sb2dvLnN2Zyc7XG5pbXBvcnQgbWVudUljb24gZnJvbSAnLi9pbWcvbWVudS1pY29uLnN2Zyc7XG5pbXBvcnQgeyBwYXRocyB9IGZyb20gJy4vcGF0aHMnO1xuaW1wb3J0IHsgbGlzdEZhY3RvcnkgfSBmcm9tIFwiLi9saXN0RmFjdG9yeVwiO1xuaW1wb3J0IHsgc2lkZUJhciB9IGZyb20gXCIuL3NpZGViYXJcIjtcblxuXG5cbmV4cG9ydCBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcblxuLy8gTG9nb1xuXG5jb25zdCBsb2dvRWxlID0gZWxlbWVudEZhY3Rvcnkoe1xuICAgIHR5cGU6ICdhJyxcbiAgICBocmVmOiBwYXRocy5ob21lLFxufSlcblxuY29uc3QgbG9nb0ltZyA9IG5ldyBJbWFnZSgpOyAgXG5sb2dvSW1nLnNyYyA9IGxvZ29JY29uO1xuXG5sb2dvRWxlLmFwcGVuZENoaWxkKGxvZ29JbWcpO1xuXG4vLyBOYXYgbGlua3NcbmNvbnN0IG5hdjEgPSBlbGVtZW50RmFjdG9yeSh7XG4gICAgdHlwZTogJ2EnLFxuICAgIGhyZWY6IHBhdGhzLmhvbWUsXG4gICAgdGV4dENvbnRlbnQ6ICdIb21lJ1xufSlcblxuY29uc3QgbmF2MiA9IGVsZW1lbnRGYWN0b3J5KHtcbiAgICB0eXBlOiAnYScsXG4gICAgaHJlZjogcGF0aHMuYWJvdXQsXG4gICAgdGV4dENvbnRlbnQ6ICdBYm91dCdcbn0pXG5cbmNvbnN0IG5hdjMgPSBlbGVtZW50RmFjdG9yeSh7XG4gICAgdHlwZTogJ2EnLFxuICAgIGhyZWY6IHBhdGhzLm1lbnVlcyxcbiAgICB0ZXh0Q29udGVudDogJ091ciBNZW51cydcbn0pXG5cbmNvbnN0IG5hdjQgPSBlbGVtZW50RmFjdG9yeSh7XG4gICAgdHlwZTogJ2EnLFxuICAgIGhyZWY6IHBhdGhzLnJlc2VydmF0aW9ucyxcbiAgICB0ZXh0Q29udGVudDogJ1Jlc2VydmF0aW9ucydcbn0pXG5cbmNvbnN0IG5hdjUgPSBlbGVtZW50RmFjdG9yeSh7XG4gICAgdHlwZTogJ2EnLFxuICAgIGhyZWY6IHBhdGhzLmNvbnRhY3QsXG4gICAgdGV4dENvbnRlbnQ6ICdDb250YWN0J1xufSlcblxuY29uc3QgcmVndWxhckxpbmtzID0gW25hdjEsIG5hdjIsIG5hdjMsIG5hdjQsIG5hdjVdO1xuY29uc3QgcmVndWxhckxpc3QgPSBsaXN0RmFjdG9yeShyZWd1bGFyTGlua3MpO1xuXG4vLyBTb2NpYWwgTWVkaWEgTGlua3Ncbi8vIGZhY2Vib29rXG5jb25zdCBmYkVsZSA9IGVsZW1lbnRGYWN0b3J5KHtcbiAgICB0eXBlOiAnYScsXG4gICAgaHJlZjogcGF0aHMuZmFjZWJvb2ssXG59KTtcblxuY29uc3QgZmJJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbmZiSW1nLnNyYyA9IGZiSWNvbjtcblxuZmJFbGUuYXBwZW5kQ2hpbGQoZmJJbWcpO1xuXG5cbi8vIEluc3RhZ3JhbVxuY29uc3QgaW5zdGFFbGUgPSBlbGVtZW50RmFjdG9yeSh7XG4gICAgdHlwZTogJ2EnLFxuICAgIGhyZWY6IHBhdGhzLmluc3RhZ3JhbVxufSlcblxuY29uc3QgaW5zdGFJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbmluc3RhSW1nLnNyYyA9IGluc3RhSWNvbjtcblxuaW5zdGFFbGUuYXBwZW5kQ2hpbGQoaW5zdGFJbWcpO1xuXG4vLyBTaWRlIG5hdiBidXR0b25cbmNvbnN0IHNpZGVOYXZCdXR0b24gPSBlbGVtZW50RmFjdG9yeSh7XG4gICAgdHlwZTogJ2ltZycsXG4gICAgY2xhc3NOYW1lOiAnbWVudS1idXR0b24nLFxuICAgIHNyYzogbWVudUljb25cbn0pXG5cbnNpZGVOYXZCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc2lkZUJhci5jbGFzc0xpc3QudG9nZ2xlKCdpbnZpcycpO1xufSlcblxuLy8gTWVkaWEgZGl2XG5jb25zdCBzb2NpYWxMaW5rcyA9IGVsZW1lbnRGYWN0b3J5KHtcbiAgICB0eXBlOiAnZGl2JyxcbiAgICBjbGFzc05hbWU6ICdzb2NpYWwtbGlua3MnXG59KVxuXG5zb2NpYWxMaW5rcy5hcHBlbmRDaGlsZChmYkVsZSk7XG5zb2NpYWxMaW5rcy5hcHBlbmRDaGlsZChpbnN0YUVsZSk7XG5zb2NpYWxMaW5rcy5hcHBlbmRDaGlsZChzaWRlTmF2QnV0dG9uKTtcblxuXG4vLyBBcHBlbmRcbmhlYWRlci5hcHBlbmRDaGlsZChsb2dvRWxlKVxuaGVhZGVyLmFwcGVuZENoaWxkKHJlZ3VsYXJMaXN0KTtcbmhlYWRlci5hcHBlbmRDaGlsZChzb2NpYWxMaW5rcyk7XG5cblxuXG5cbiIsImV4cG9ydCBjb25zdCBsaXN0RmFjdG9yeSA9IChpdGVtcykgPT4ge1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIFxuICAgIGl0ZW1zLmZvckVhY2goIGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGxpKTsgXG4gICAgfSlcblxuICAgIHJldHVybiBsaXN0O1xufSIsImV4cG9ydCBjb25zdCBnZXRTdGF0ZSA9ICgpID0+IHtcbiAgICBsZXQgaXNNb2JpbGUgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNzgwcHgpJyk7XG4gICAgbGV0IGlzVGFibGV0ID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDc4MXB4KSBhbmQgKG1heC13aWR0aDogOTYwcHgpJyk7XG4gICAgbGV0IGlzRGVza3RvcCA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiA5NjFweCknKTtcbiAgICBcbiAgICBpZiAoaXNNb2JpbGUubWF0Y2hlcykgcmV0dXJuICdtb2JpbGUnO1xuICAgIGlmIChpc1RhYmxldC5tYXRjaGVzKSByZXR1cm4gJ3RhYmxldCc7XG4gICAgaWYgKGlzRGVza3RvcC5tYXRjaGVzKSByZXR1cm4gJ2Rlc2t0b3AnO1xufVxuIiwiZXhwb3J0IGNvbnN0IHBhdGhzID0ge1xuICAgIGhvbWU6ICAgICAgICAgICAnIycsXG4gICAgbWVudWVzOiAgICAgICAgICcjJyxcbiAgICBhYm91dDogICAgICAgICAgJyMnLFxuICAgIHJlc2VydmF0aW9uczogICAnIycsXG4gICAgY29udGFjdDogICAgICAgICcjJyxcbiAgICBmYWNlYm9vazogICAgICAgJyMnLFxuICAgIGluc3RhZ3JhbTogICAgICAnIycgICAgIFxufSIsImltcG9ydCBlbGVtZW50RmFjdG9yeSBmcm9tICcuL2VsZW1lbnRGYWN0b3J5JztcbmltcG9ydCB7IGxpc3RGYWN0b3J5IH0gZnJvbSAnLi9saXN0RmFjdG9yeSc7XG5pbXBvcnQgeyBwYXRocyB9IGZyb20gJy4vcGF0aHMnO1xuaW1wb3J0IHsgZ2V0U3RhdGUgfSBmcm9tICcuL3BhZ2VTdGF0ZSc7XG5cbmNvbnN0IG5hdjEgPSBlbGVtZW50RmFjdG9yeSh7XG4gICAgdHlwZTogJ2EnLFxuICAgIGhyZWY6IHBhdGhzLmhvbWUsXG4gICAgdGV4dENvbnRlbnQ6ICdIb21lJ1xufSlcblxuY29uc3QgbmF2MiA9IGVsZW1lbnRGYWN0b3J5KHtcbiAgICB0eXBlOiAnYScsXG4gICAgaHJlZjogcGF0aHMuYWJvdXQsXG4gICAgdGV4dENvbnRlbnQ6ICdBYm91dCdcbn0pXG5cbmNvbnN0IG5hdjMgPSBlbGVtZW50RmFjdG9yeSh7XG4gICAgdHlwZTogJ2EnLFxuICAgIGhyZWY6IHBhdGhzLm1lbnVlcyxcbiAgICB0ZXh0Q29udGVudDogJ091ciBNZW51cydcbn0pXG5cbmNvbnN0IG5hdjQgPSBlbGVtZW50RmFjdG9yeSh7XG4gICAgdHlwZTogJ2EnLFxuICAgIGhyZWY6IHBhdGhzLnJlc2VydmF0aW9ucyxcbiAgICB0ZXh0Q29udGVudDogJ1Jlc2VydmF0aW9ucydcbn0pXG5cbmNvbnN0IG5hdjUgPSBlbGVtZW50RmFjdG9yeSh7XG4gICAgdHlwZTogJ2EnLFxuICAgIGhyZWY6IHBhdGhzLmNvbnRhY3QsXG4gICAgdGV4dENvbnRlbnQ6ICdDb250YWN0J1xufSlcblxuY29uc3QgcmVndWxhckxpbmtzID0gW25hdjEsIG5hdjIsIG5hdjMsIG5hdjQsIG5hdjVdO1xuY29uc3QgcmVndWxhckxpc3QgPSBsaXN0RmFjdG9yeShyZWd1bGFyTGlua3MpO1xuXG5leHBvcnQgY29uc3Qgc2lkZUJhciA9IGVsZW1lbnRGYWN0b3J5KHtcbiAgICB0eXBlOiAnZGl2JyxcbiAgICBjbGFzc05hbWU6ICdzaWRlLW5hdiBpbnZpcydcbn0pXG5cbi8vIENsb3Nlc1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+e1xuXG4gICAgaWYgKGdldFN0YXRlKCkgIT09ICdtb2JpbGUnKSB7XG4gICAgICAgIHNpZGVCYXIuY2xhc3NMaXN0LmFkZCgnaW52aXMnKTtcbiAgICB9XG59KVxuXG4vLyBDbG9zZXMgbW9iaWxlIG1lbnUgd2hlbiBhbiBvdXQgb2YgYm91bmRzIGNsaWNrIGlzIGRldGVjdGVkXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cbiAgICBpZiAoIWUudGFyZ2V0LmNsb3Nlc3QoJy5zaWRlLW5hdicpKSB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KCcubWVudS1idXR0b24nKSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH0gZWxzZSBpZiAoIXNpZGVCYXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnZpcycpKSB7XG4gICAgICAgICAgICBzaWRlQmFyLmNsYXNzTGlzdC5hZGQoJ2ludmlzJylcbiAgICAgICAgfVxuICAgIH1cbn0pXG5cbnNpZGVCYXIuYXBwZW5kQ2hpbGQocmVndWxhckxpc3QpIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7aGVhZGVyfSBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQge3NpZGVCYXJ9IGZyb20gJy4vc2lkZWJhcic7XG5pbXBvcnQge2NvbnRlbnQxfSBmcm9tICcuL2NvbnRlbnQxJztcbmltcG9ydCBiZ0ltZ1BhdGggZnJvbSAnLi9pbWcvc3VzaGkuanBnJztcblxuXG5leHBvcnQgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubWFpbi5jbGFzc05hbWUgPSAnbWFpbic7XG5tYWluLmFwcGVuZENoaWxkKGhlYWRlcik7XG5tYWluLmFwcGVuZENoaWxkKHNpZGVCYXIpO1xubWFpbi5hcHBlbmRDaGlsZChjb250ZW50MSk7XG5cbmNvbnN0IGJnSW1nID0gbmV3IEltYWdlKCk7XG5iZ0ltZy5zcmMgPSBiZ0ltZ1BhdGg7XG5iZ0ltZy5jbGFzc0xpc3QuYWRkKCdiZy1pbWcnKVxuXG4vLyBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcuLi9zcmMvaW1nL3N1c2hpLmpwZycpXCI7XG4vLyBkb2N1bWVudC5ib2R5LnN0eWxlLmhlaWdodCA9ICcxMDAlJ1xuZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBiZ0ltZztcblxuXG5cblxuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW4pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9