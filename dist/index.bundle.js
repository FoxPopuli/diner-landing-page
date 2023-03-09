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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --link-visited: #ca9c5e;\n    --default-font: Arial, sans-serif;\n    --icon-radius: 10px;\n    --large-icon-size: 40px;\n    --medium-icon-size: 30px;\n    --small-icon-size: 20px;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: var(--default-font);\n    color: white;\n}\n\nbody {\n    background-color: black;\n    display: flex;\n    justify-content: center;\n    max-width: 100vw;\n}\n\n.main {\n    display: flex;\n    flex-direction: column;\n    width: 80%;\n}\n\n/* Header Styles */\n\nheader {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    width: 80vw;\n    flex-wrap: wrap;\n}\n\nheader a, .side-nav a {\n    font-family: var(--default-font);\n    text-decoration: none;\n    color: white;\n    padding: 5px;\n}\n\na:hover, a:active {\n    color: var(--link-visited);\n}\n\nheader img {\n    width: var(--large-icon-size);\n    margin: 10px;\n    filter: invert(100%)\n}\n\n.social-links {\n    display: flex;\n}\n\nheader ul {\n    display: none;\n    list-style: none;\n}\n\nheader button {\n    display: block;\n}\n\nli {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 20px;\n}\n\n.side-nav {\n    display: flex;\n    flex-direction: column;\n    width: 80vw;\n    background-color: #000;\n    align-items: center;\n}\n\n.side-nav ul li {\n    font-size: 30px;\n}\n\n/* Content Styles */\n.block1 {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: space-between;\n    height: 100%;\n}\n\n.block1 * {\n    display: flex;\n    justify-content: center;\n    text-align: center;\n}\n\nh1 {\n    font-size: 60px;\n}\n\n.block1 h1, .block1 h2 {\n    margin: 20px;\n}\n\n.block1 .button-div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: 10px;\n    \n}\n\n.button-div div {\n    margin: 30px 20px 30px 20px;\n    border-radius: 5px;\n    border-top: 2px solid var(--link-visited);\n    border-bottom: 2px solid var(--link-visited);\n    width: 150px;\n    height: 50px;\n    /* padding: 20px; */\n    padding: 20px 0 20px 0;\n    display: flex;\n    align-items: center;\n    align-self: center;\n\n    transition-property: padding, color, margin;\n    transition-duration: 0.25s;\n}\n\n.button-div div:hover {\n    /* height: 60px; */\n    margin: 20px;\n    padding: 30px 0 30px 0;\n    color: var(--link-visited)\n}\n/* Tablet Styles */\n@media only screen and (min-width: 780px) and (max-width: 960px) {\n\n    header .menu-button {\n        display: none;\n    }\n\n    header img {\n        width: var(--medium-icon-size);\n    }\n\n    header ul {\n        display: flex;\n    }\n\n    .block1 .button-div {\n        flex-direction: row;\n    }\n\n}\n\n/* Desktop Styles */\n@media only screen and (min-width: 961px) {\n\n    header .menu-button {\n        display: none;\n    }\n\n    header img {\n        width: var(--small-icon-size);\n    }\n\n    header ul {\n        display: flex;\n    }\n\n    header ul li {\n        margin: 0 10px 0 10px;\n    }\n\n    .block1 .button-div {\n        flex-direction: row;\n    }\n}\n\n/* Toggles */\n.invis {\n    display: none\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;IACvB,iCAAiC;IACjC,mBAAmB;IACnB,uBAAuB;IACvB,wBAAwB;IACxB,uBAAuB;AAC3B;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,gCAAgC;IAChC,YAAY;AAChB;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;AACd;;AAEA,kBAAkB;;AAElB;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,gCAAgC;IAChC,qBAAqB;IACrB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,6BAA6B;IAC7B,YAAY;IACZ;AACJ;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA,mBAAmB;AACnB;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,0BAA0B;IAC1B,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,aAAa;;AAEjB;;AAEA;IACI,2BAA2B;IAC3B,kBAAkB;IAClB,yCAAyC;IACzC,4CAA4C;IAC5C,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,sBAAsB;IACtB,aAAa;IACb,mBAAmB;IACnB,kBAAkB;;IAElB,2CAA2C;IAC3C,0BAA0B;AAC9B;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,sBAAsB;IACtB;AACJ;AACA,kBAAkB;AAClB;;IAEI;QACI,aAAa;IACjB;;IAEA;QACI,8BAA8B;IAClC;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,mBAAmB;IACvB;;AAEJ;;AAEA,mBAAmB;AACnB;;IAEI;QACI,aAAa;IACjB;;IAEA;QACI,6BAA6B;IACjC;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,qBAAqB;IACzB;;IAEA;QACI,mBAAmB;IACvB;AACJ;;AAEA,YAAY;AACZ;IACI;AACJ","sourcesContent":[":root {\n    --link-visited: #ca9c5e;\n    --default-font: Arial, sans-serif;\n    --icon-radius: 10px;\n    --large-icon-size: 40px;\n    --medium-icon-size: 30px;\n    --small-icon-size: 20px;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: var(--default-font);\n    color: white;\n}\n\nbody {\n    background-color: black;\n    display: flex;\n    justify-content: center;\n    max-width: 100vw;\n}\n\n.main {\n    display: flex;\n    flex-direction: column;\n    width: 80%;\n}\n\n/* Header Styles */\n\nheader {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    width: 80vw;\n    flex-wrap: wrap;\n}\n\nheader a, .side-nav a {\n    font-family: var(--default-font);\n    text-decoration: none;\n    color: white;\n    padding: 5px;\n}\n\na:hover, a:active {\n    color: var(--link-visited);\n}\n\nheader img {\n    width: var(--large-icon-size);\n    margin: 10px;\n    filter: invert(100%)\n}\n\n.social-links {\n    display: flex;\n}\n\nheader ul {\n    display: none;\n    list-style: none;\n}\n\nheader button {\n    display: block;\n}\n\nli {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 20px;\n}\n\n.side-nav {\n    display: flex;\n    flex-direction: column;\n    width: 80vw;\n    background-color: #000;\n    align-items: center;\n}\n\n.side-nav ul li {\n    font-size: 30px;\n}\n\n/* Content Styles */\n.block1 {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: space-between;\n    height: 100%;\n}\n\n.block1 * {\n    display: flex;\n    justify-content: center;\n    text-align: center;\n}\n\nh1 {\n    font-size: 60px;\n}\n\n.block1 h1, .block1 h2 {\n    margin: 20px;\n}\n\n.block1 .button-div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: 10px;\n    \n}\n\n.button-div div {\n    margin: 30px 20px 30px 20px;\n    border-radius: 5px;\n    border-top: 2px solid var(--link-visited);\n    border-bottom: 2px solid var(--link-visited);\n    width: 150px;\n    height: 50px;\n    /* padding: 20px; */\n    padding: 20px 0 20px 0;\n    display: flex;\n    align-items: center;\n    align-self: center;\n\n    transition-property: padding, color, margin;\n    transition-duration: 0.25s;\n}\n\n.button-div div:hover {\n    /* height: 60px; */\n    margin: 20px;\n    padding: 30px 0 30px 0;\n    color: var(--link-visited)\n}\n/* Tablet Styles */\n@media only screen and (min-width: 780px) and (max-width: 960px) {\n\n    header .menu-button {\n        display: none;\n    }\n\n    header img {\n        width: var(--medium-icon-size);\n    }\n\n    header ul {\n        display: flex;\n    }\n\n    .block1 .button-div {\n        flex-direction: row;\n    }\n\n}\n\n/* Desktop Styles */\n@media only screen and (min-width: 961px) {\n\n    header .menu-button {\n        display: none;\n    }\n\n    header img {\n        width: var(--small-icon-size);\n    }\n\n    header ul {\n        display: flex;\n    }\n\n    header ul li {\n        margin: 0 10px 0 10px;\n    }\n\n    .block1 .button-div {\n        flex-direction: row;\n    }\n}\n\n/* Toggles */\n.invis {\n    display: none\n}"],"sourceRoot":""}]);
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
console.log(regularList)

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

window.addEventListener('resize', () =>{

    if ((0,_pageState__WEBPACK_IMPORTED_MODULE_3__.getState)() !== 'mobile') {
        console.log('tyes')
        sideBar.classList.add('invis');
    }
})

// document.addEventListener('click', (e) => {

//     console.log(sideBar.classList.contains('invis'))
//     if (!e.target.closest('.side-nav') && !sideBar.classList.contains('invis')) {
//         // console.log(!e.target.closest('.side-nav'))
//         sideBar.classList.add('invis');
//     }
// })

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
/* harmony import */ var _pageState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageState */ "./src/pageState.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar */ "./src/sidebar.js");
/* harmony import */ var _content1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content1 */ "./src/content1.js");






const main = document.createElement('div');
main.className = 'main';
main.appendChild(_header__WEBPACK_IMPORTED_MODULE_2__.header);
main.appendChild(_sidebar__WEBPACK_IMPORTED_MODULE_3__.sideBar);
main.appendChild(_content1__WEBPACK_IMPORTED_MODULE_4__.content1)



document.body.appendChild(main)

// console.log(getState())
// console.log(test)
// console.log(test.testFunc())
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDZ0I7QUFDTDtBQUNFO0FBQ0U7O0FBRTdCO0FBQ1A7QUFDQSxpQkFBaUIsMkNBQU07QUFDdkIsaUJBQWlCLDZDQUFPO0FBQ3hCLGlCQUFpQiwrQ0FBUTs7OztBQUl6Qjs7QUFFQTtBQUNBO0FBQ0EsK0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL2NvbnRlbnQxLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9lbGVtZW50RmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9saXN0RmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvcGFnZVN0YXRlLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9wYXRocy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWxpbmstdmlzaXRlZDogI2NhOWM1ZTtcXG4gICAgLS1kZWZhdWx0LWZvbnQ6IEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICAtLWljb24tcmFkaXVzOiAxMHB4O1xcbiAgICAtLWxhcmdlLWljb24tc2l6ZTogNDBweDtcXG4gICAgLS1tZWRpdW0taWNvbi1zaXplOiAzMHB4O1xcbiAgICAtLXNtYWxsLWljb24tc2l6ZTogMjBweDtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWRlZmF1bHQtZm9udCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWF4LXdpZHRoOiAxMDB2dztcXG59XFxuXFxuLm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogODAlO1xcbn1cXG5cXG4vKiBIZWFkZXIgU3R5bGVzICovXFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB3aWR0aDogODB2dztcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG5oZWFkZXIgYSwgLnNpZGUtbmF2IGEge1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZGVmYXVsdC1mb250KTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuYTpob3ZlciwgYTphY3RpdmUge1xcbiAgICBjb2xvcjogdmFyKC0tbGluay12aXNpdGVkKTtcXG59XFxuXFxuaGVhZGVyIGltZyB7XFxuICAgIHdpZHRoOiB2YXIoLS1sYXJnZS1pY29uLXNpemUpO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpXFxufVxcblxcbi5zb2NpYWwtbGlua3Mge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5oZWFkZXIgdWwge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5oZWFkZXIgYnV0dG9uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmxpIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLnNpZGUtbmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDgwdnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zaWRlLW5hdiB1bCBsaSB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLyogQ29udGVudCBTdHlsZXMgKi9cXG4uYmxvY2sxIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5ibG9jazEgKiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiA2MHB4O1xcbn1cXG5cXG4uYmxvY2sxIGgxLCAuYmxvY2sxIGgyIHtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG4uYmxvY2sxIC5idXR0b24tZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIFxcbn1cXG5cXG4uYnV0dG9uLWRpdiBkaXYge1xcbiAgICBtYXJnaW46IDMwcHggMjBweCAzMHB4IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLWxpbmstdmlzaXRlZCk7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1saW5rLXZpc2l0ZWQpO1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgLyogcGFkZGluZzogMjBweDsgKi9cXG4gICAgcGFkZGluZzogMjBweCAwIDIwcHggMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcblxcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBwYWRkaW5nLCBjb2xvciwgbWFyZ2luO1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjI1cztcXG59XFxuXFxuLmJ1dHRvbi1kaXYgZGl2OmhvdmVyIHtcXG4gICAgLyogaGVpZ2h0OiA2MHB4OyAqL1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICAgIHBhZGRpbmc6IDMwcHggMCAzMHB4IDA7XFxuICAgIGNvbG9yOiB2YXIoLS1saW5rLXZpc2l0ZWQpXFxufVxcbi8qIFRhYmxldCBTdHlsZXMgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc4MHB4KSBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcXG5cXG4gICAgaGVhZGVyIC5tZW51LWJ1dHRvbiB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIGhlYWRlciBpbWcge1xcbiAgICAgICAgd2lkdGg6IHZhcigtLW1lZGl1bS1pY29uLXNpemUpO1xcbiAgICB9XFxuXFxuICAgIGhlYWRlciB1bCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB9XFxuXFxuICAgIC5ibG9jazEgLmJ1dHRvbi1kaXYge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgfVxcblxcbn1cXG5cXG4vKiBEZXNrdG9wIFN0eWxlcyAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYxcHgpIHtcXG5cXG4gICAgaGVhZGVyIC5tZW51LWJ1dHRvbiB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIGhlYWRlciBpbWcge1xcbiAgICAgICAgd2lkdGg6IHZhcigtLXNtYWxsLWljb24tc2l6ZSk7XFxuICAgIH1cXG5cXG4gICAgaGVhZGVyIHVsIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG5cXG4gICAgaGVhZGVyIHVsIGxpIHtcXG4gICAgICAgIG1hcmdpbjogMCAxMHB4IDAgMTBweDtcXG4gICAgfVxcblxcbiAgICAuYmxvY2sxIC5idXR0b24tZGl2IHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIH1cXG59XFxuXFxuLyogVG9nZ2xlcyAqL1xcbi5pbnZpcyB7XFxuICAgIGRpc3BsYXk6IG5vbmVcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QixpQ0FBaUM7SUFDakMsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsZ0NBQWdDO0lBQ2hDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7QUFDZDs7QUFFQSxrQkFBa0I7O0FBRWxCO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFlBQVk7SUFDWjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBLG1CQUFtQjtBQUNuQjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGFBQWE7O0FBRWpCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQix5Q0FBeUM7SUFDekMsNENBQTRDO0lBQzVDLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjs7SUFFbEIsMkNBQTJDO0lBQzNDLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCO0FBQ0o7QUFDQSxrQkFBa0I7QUFDbEI7O0lBRUk7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksOEJBQThCO0lBQ2xDOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLG1CQUFtQjtJQUN2Qjs7QUFFSjs7QUFFQSxtQkFBbUI7QUFDbkI7O0lBRUk7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksNkJBQTZCO0lBQ2pDOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLHFCQUFxQjtJQUN6Qjs7SUFFQTtRQUNJLG1CQUFtQjtJQUN2QjtBQUNKOztBQUVBLFlBQVk7QUFDWjtJQUNJO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWxpbmstdmlzaXRlZDogI2NhOWM1ZTtcXG4gICAgLS1kZWZhdWx0LWZvbnQ6IEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICAtLWljb24tcmFkaXVzOiAxMHB4O1xcbiAgICAtLWxhcmdlLWljb24tc2l6ZTogNDBweDtcXG4gICAgLS1tZWRpdW0taWNvbi1zaXplOiAzMHB4O1xcbiAgICAtLXNtYWxsLWljb24tc2l6ZTogMjBweDtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWRlZmF1bHQtZm9udCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWF4LXdpZHRoOiAxMDB2dztcXG59XFxuXFxuLm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogODAlO1xcbn1cXG5cXG4vKiBIZWFkZXIgU3R5bGVzICovXFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB3aWR0aDogODB2dztcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG5oZWFkZXIgYSwgLnNpZGUtbmF2IGEge1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZGVmYXVsdC1mb250KTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuYTpob3ZlciwgYTphY3RpdmUge1xcbiAgICBjb2xvcjogdmFyKC0tbGluay12aXNpdGVkKTtcXG59XFxuXFxuaGVhZGVyIGltZyB7XFxuICAgIHdpZHRoOiB2YXIoLS1sYXJnZS1pY29uLXNpemUpO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpXFxufVxcblxcbi5zb2NpYWwtbGlua3Mge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5oZWFkZXIgdWwge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5oZWFkZXIgYnV0dG9uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmxpIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLnNpZGUtbmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDgwdnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zaWRlLW5hdiB1bCBsaSB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLyogQ29udGVudCBTdHlsZXMgKi9cXG4uYmxvY2sxIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5ibG9jazEgKiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiA2MHB4O1xcbn1cXG5cXG4uYmxvY2sxIGgxLCAuYmxvY2sxIGgyIHtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG4uYmxvY2sxIC5idXR0b24tZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIFxcbn1cXG5cXG4uYnV0dG9uLWRpdiBkaXYge1xcbiAgICBtYXJnaW46IDMwcHggMjBweCAzMHB4IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLWxpbmstdmlzaXRlZCk7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1saW5rLXZpc2l0ZWQpO1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgLyogcGFkZGluZzogMjBweDsgKi9cXG4gICAgcGFkZGluZzogMjBweCAwIDIwcHggMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcblxcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBwYWRkaW5nLCBjb2xvciwgbWFyZ2luO1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjI1cztcXG59XFxuXFxuLmJ1dHRvbi1kaXYgZGl2OmhvdmVyIHtcXG4gICAgLyogaGVpZ2h0OiA2MHB4OyAqL1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICAgIHBhZGRpbmc6IDMwcHggMCAzMHB4IDA7XFxuICAgIGNvbG9yOiB2YXIoLS1saW5rLXZpc2l0ZWQpXFxufVxcbi8qIFRhYmxldCBTdHlsZXMgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc4MHB4KSBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcXG5cXG4gICAgaGVhZGVyIC5tZW51LWJ1dHRvbiB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIGhlYWRlciBpbWcge1xcbiAgICAgICAgd2lkdGg6IHZhcigtLW1lZGl1bS1pY29uLXNpemUpO1xcbiAgICB9XFxuXFxuICAgIGhlYWRlciB1bCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB9XFxuXFxuICAgIC5ibG9jazEgLmJ1dHRvbi1kaXYge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgfVxcblxcbn1cXG5cXG4vKiBEZXNrdG9wIFN0eWxlcyAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYxcHgpIHtcXG5cXG4gICAgaGVhZGVyIC5tZW51LWJ1dHRvbiB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIGhlYWRlciBpbWcge1xcbiAgICAgICAgd2lkdGg6IHZhcigtLXNtYWxsLWljb24tc2l6ZSk7XFxuICAgIH1cXG5cXG4gICAgaGVhZGVyIHVsIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG5cXG4gICAgaGVhZGVyIHVsIGxpIHtcXG4gICAgICAgIG1hcmdpbjogMCAxMHB4IDAgMTBweDtcXG4gICAgfVxcblxcbiAgICAuYmxvY2sxIC5idXR0b24tZGl2IHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIH1cXG59XFxuXFxuLyogVG9nZ2xlcyAqL1xcbi5pbnZpcyB7XFxuICAgIGRpc3BsYXk6IG5vbmVcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGVsZW1lbnRGYWN0b3J5IGZyb20gXCIuL2VsZW1lbnRGYWN0b3J5XCI7XG4vLyBPVCAzOTIgNDEwIDI2XG4vLyAwODYgMDA3IDAwMDBcbi8vIDAxMiAzMzYgMzgyMyBcbi8vIDYyMDEyODUxODgwODBcbmV4cG9ydCBjb25zdCBjb250ZW50MSA9IGVsZW1lbnRGYWN0b3J5KHtcbiAgICB0eXBlOiAnZGl2JyxcbiAgICBjbGFzc05hbWU6ICdibG9jazEnXG59KVxuXG5jb25zdCBoMSA9IGVsZW1lbnRGYWN0b3J5KHtcbiAgICB0eXBlOiAnaDEnLFxuICAgIHRleHRDb250ZW50OiAnRmxhdm91ciwgcHJlY2lzaW9uIGFuZCBwZXJmZWN0aW9uJ1xufSlcblxuY29uc3QgaDIgPSBlbGVtZW50RmFjdG9yeSh7XG4gICAgdHlwZTogJ2gyJyxcbiAgICB0ZXh0Q29udGVudDogXCJKYW5lIERvZSdzIERpbmVyIGlzIGEgZGluZXIgb3duZWQgYnkgSmFuZSBEb2UuIFdlIHNlcnZlIGZvb2QgYW5kIGRyaW5rcy5cIlxufSlcblxuY29uc3QgbWFpbk1lbnVCdXR0b24gPSBlbGVtZW50RmFjdG9yeSh7XG4gICAgdHlwZTogJ2RpdicsXG4gICAgdGV4dENvbnRlbnQ6ICdWSUVXIE1BSU4gTUVOVSdcbn0pXG5cblxubWFpbk1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdtYWluTWVudUJ1dHRvbiBjbGlja2VkJylcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldClcbiAgICBjb25zb2xlLmxvZyh0aGlzKVxuICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KCcnKSkge1xuICAgICAgICBjb25zb2xlLmxvZygnYXl5eScpXG4gICAgfVxufSlcblxuLy8gbWFpbk1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtZW51Q2xpYylcblxuY29uc3Qgb3JkZXJPbmxpbmVCdXR0b24gPSBlbGVtZW50RmFjdG9yeSh7XG4gICAgdHlwZTogJ2RpdicsXG4gICAgdGV4dENvbnRlbnQ6ICdPUkRFUiBPTkxJTkUnXG59KVxuXG5jb25zdCBidXR0b25FbGUgPSBlbGVtZW50RmFjdG9yeSh7XG4gICAgdHlwZTogJ2RpdicsXG4gICAgY2xhc3NOYW1lOiAnYnV0dG9uLWRpdidcbn0pXG5cbmJ1dHRvbkVsZS5hcHBlbmRDaGlsZChtYWluTWVudUJ1dHRvbilcbmJ1dHRvbkVsZS5hcHBlbmRDaGlsZChvcmRlck9ubGluZUJ1dHRvbilcblxuXG5jb250ZW50MS5hcHBlbmRDaGlsZChoMSk7XG5jb250ZW50MS5hcHBlbmRDaGlsZChoMik7XG5jb250ZW50MS5hcHBlbmRDaGlsZChidXR0b25FbGUpO1xuIiwiLy8gR2VuZXJhdGVzIGFuIGVsZW1lbnQgYmFzZWQgb24gdGhlIGFyZ3VtZW50IG9iamVjdFxuLy8gYWxsIHByb3BzIGJlc2lkZXMgdHlwZSBtdXN0IGJlIHZhbGlkIHByb3BlcnRpZXMgb2YgYSBET00gZWxlbWVudCAoaHJlZiwgdGV4dENvbnRlbnQuLi4pXG4vLyB0aGUgY2hpbGRyZW4gcHJvcGVydHkgbXVzdCBiZSBhIERPTSBlbGVtZW50IChyZWN1cnNpb24gdG8gZml4PylcbmV4cG9ydCBkZWZhdWx0IChvYmopID0+IHtcbiAgICBjb25zdCB7dHlwZSwgLi4ucmVzdH0gPSBvYmo7XG5cbiAgICBjb25zdCBlbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIGZvciAobGV0IHByb3AgaW4gcmVzdCkge1xuICAgICAgICBpZiAodHlwZW9mIGVsZVtwcm9wXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgZWxlW3Byb3BdKHJlc3RbcHJvcF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlW3Byb3BdID0gcmVzdFtwcm9wXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlbGU7ICAgIFxufSIsImltcG9ydCBlbGVtZW50RmFjdG9yeSBmcm9tIFwiLi9lbGVtZW50RmFjdG9yeVwiO1xuaW1wb3J0IGZiSWNvbiBmcm9tICcuL2ltZy9mYi1pY29uLnN2Zyc7XG5pbXBvcnQgaW5zdGFJY29uIGZyb20gJy4vaW1nL2luc3RhLWljb24uc3ZnJztcbmltcG9ydCBsb2dvSWNvbiBmcm9tICcuL2ltZy9yZXN0YXVyYW50LWxvZ28uc3ZnJztcbmltcG9ydCBtZW51SWNvbiBmcm9tICcuL2ltZy9tZW51LWljb24uc3ZnJztcbmltcG9ydCB7IHBhdGhzIH0gZnJvbSAnLi9wYXRocyc7XG5pbXBvcnQgeyBsaXN0RmFjdG9yeSB9IGZyb20gXCIuL2xpc3RGYWN0b3J5XCI7XG5pbXBvcnQgeyBzaWRlQmFyIH0gZnJvbSBcIi4vc2lkZWJhclwiO1xuXG5cblxuZXhwb3J0IGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuXG4vLyBMb2dvXG5cbmNvbnN0IGxvZ29FbGUgPSBlbGVtZW50RmFjdG9yeSh7XG4gICAgdHlwZTogJ2EnLFxuICAgIGhyZWY6IHBhdGhzLmhvbWUsXG59KVxuXG5jb25zdCBsb2dvSW1nID0gbmV3IEltYWdlKCk7ICBcbmxvZ29JbWcuc3JjID0gbG9nb0ljb247XG5cbmxvZ29FbGUuYXBwZW5kQ2hpbGQobG9nb0ltZyk7XG5cbi8vIE5hdiBsaW5rc1xuY29uc3QgbmF2MSA9IGVsZW1lbnRGYWN0b3J5KHtcbiAgICB0eXBlOiAnYScsXG4gICAgaHJlZjogcGF0aHMuaG9tZSxcbiAgICB0ZXh0Q29udGVudDogJ0hvbWUnXG59KVxuXG5jb25zdCBuYXYyID0gZWxlbWVudEZhY3Rvcnkoe1xuICAgIHR5cGU6ICdhJyxcbiAgICBocmVmOiBwYXRocy5hYm91dCxcbiAgICB0ZXh0Q29udGVudDogJ0Fib3V0J1xufSlcblxuY29uc3QgbmF2MyA9IGVsZW1lbnRGYWN0b3J5KHtcbiAgICB0eXBlOiAnYScsXG4gICAgaHJlZjogcGF0aHMubWVudWVzLFxuICAgIHRleHRDb250ZW50OiAnT3VyIE1lbnVzJ1xufSlcblxuY29uc3QgbmF2NCA9IGVsZW1lbnRGYWN0b3J5KHtcbiAgICB0eXBlOiAnYScsXG4gICAgaHJlZjogcGF0aHMucmVzZXJ2YXRpb25zLFxuICAgIHRleHRDb250ZW50OiAnUmVzZXJ2YXRpb25zJ1xufSlcblxuY29uc3QgbmF2NSA9IGVsZW1lbnRGYWN0b3J5KHtcbiAgICB0eXBlOiAnYScsXG4gICAgaHJlZjogcGF0aHMuY29udGFjdCxcbiAgICB0ZXh0Q29udGVudDogJ0NvbnRhY3QnXG59KVxuXG5jb25zdCByZWd1bGFyTGlua3MgPSBbbmF2MSwgbmF2MiwgbmF2MywgbmF2NCwgbmF2NV07XG5jb25zdCByZWd1bGFyTGlzdCA9IGxpc3RGYWN0b3J5KHJlZ3VsYXJMaW5rcyk7XG5jb25zb2xlLmxvZyhyZWd1bGFyTGlzdClcblxuLy8gU29jaWFsIE1lZGlhIExpbmtzXG4vLyBmYWNlYm9va1xuY29uc3QgZmJFbGUgPSBlbGVtZW50RmFjdG9yeSh7XG4gICAgdHlwZTogJ2EnLFxuICAgIGhyZWY6IHBhdGhzLmZhY2Vib29rLFxufSk7XG5cbmNvbnN0IGZiSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5mYkltZy5zcmMgPSBmYkljb247XG5cbmZiRWxlLmFwcGVuZENoaWxkKGZiSW1nKTtcblxuXG4vLyBJbnN0YWdyYW1cbmNvbnN0IGluc3RhRWxlID0gZWxlbWVudEZhY3Rvcnkoe1xuICAgIHR5cGU6ICdhJyxcbiAgICBocmVmOiBwYXRocy5pbnN0YWdyYW1cbn0pXG5cbmNvbnN0IGluc3RhSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5pbnN0YUltZy5zcmMgPSBpbnN0YUljb247XG5cbmluc3RhRWxlLmFwcGVuZENoaWxkKGluc3RhSW1nKTtcblxuLy8gU2lkZSBuYXYgYnV0dG9uXG5jb25zdCBzaWRlTmF2QnV0dG9uID0gZWxlbWVudEZhY3Rvcnkoe1xuICAgIHR5cGU6ICdpbWcnLFxuICAgIGNsYXNzTmFtZTogJ21lbnUtYnV0dG9uJyxcbiAgICBzcmM6IG1lbnVJY29uXG59KVxuXG5zaWRlTmF2QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNpZGVCYXIuY2xhc3NMaXN0LnRvZ2dsZSgnaW52aXMnKTtcbn0pXG5cbi8vIE1lZGlhIGRpdlxuY29uc3Qgc29jaWFsTGlua3MgPSBlbGVtZW50RmFjdG9yeSh7XG4gICAgdHlwZTogJ2RpdicsXG4gICAgY2xhc3NOYW1lOiAnc29jaWFsLWxpbmtzJ1xufSlcblxuc29jaWFsTGlua3MuYXBwZW5kQ2hpbGQoZmJFbGUpO1xuc29jaWFsTGlua3MuYXBwZW5kQ2hpbGQoaW5zdGFFbGUpO1xuc29jaWFsTGlua3MuYXBwZW5kQ2hpbGQoc2lkZU5hdkJ1dHRvbik7XG5cblxuLy8gQXBwZW5kXG5oZWFkZXIuYXBwZW5kQ2hpbGQobG9nb0VsZSlcbmhlYWRlci5hcHBlbmRDaGlsZChyZWd1bGFyTGlzdCk7XG5oZWFkZXIuYXBwZW5kQ2hpbGQoc29jaWFsTGlua3MpO1xuXG5cblxuXG4iLCJleHBvcnQgY29uc3QgbGlzdEZhY3RvcnkgPSAoaXRlbXMpID0+IHtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBcbiAgICBpdGVtcy5mb3JFYWNoKCBpdGVtID0+IHtcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBsaS5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChsaSk7IFxuICAgIH0pXG5cbiAgICByZXR1cm4gbGlzdDtcbn0iLCJleHBvcnQgY29uc3QgZ2V0U3RhdGUgPSAoKSA9PiB7XG4gICAgbGV0IGlzTW9iaWxlID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDc4MHB4KScpO1xuICAgIGxldCBpc1RhYmxldCA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiA3ODFweCkgYW5kIChtYXgtd2lkdGg6IDk2MHB4KScpO1xuICAgIGxldCBpc0Rlc2t0b3AgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogOTYxcHgpJyk7XG4gICAgXG4gICAgaWYgKGlzTW9iaWxlLm1hdGNoZXMpIHJldHVybiAnbW9iaWxlJztcbiAgICBpZiAoaXNUYWJsZXQubWF0Y2hlcykgcmV0dXJuICd0YWJsZXQnO1xuICAgIGlmIChpc0Rlc2t0b3AubWF0Y2hlcykgcmV0dXJuICdkZXNrdG9wJztcbn1cbiIsImV4cG9ydCBjb25zdCBwYXRocyA9IHtcbiAgICBob21lOiAgICAgICAgICAgJyMnLFxuICAgIG1lbnVlczogICAgICAgICAnIycsXG4gICAgYWJvdXQ6ICAgICAgICAgICcjJyxcbiAgICByZXNlcnZhdGlvbnM6ICAgJyMnLFxuICAgIGNvbnRhY3Q6ICAgICAgICAnIycsXG4gICAgZmFjZWJvb2s6ICAgICAgICcjJyxcbiAgICBpbnN0YWdyYW06ICAgICAgJyMnICAgICBcbn0iLCJpbXBvcnQgZWxlbWVudEZhY3RvcnkgZnJvbSAnLi9lbGVtZW50RmFjdG9yeSc7XG5pbXBvcnQgeyBsaXN0RmFjdG9yeSB9IGZyb20gJy4vbGlzdEZhY3RvcnknO1xuaW1wb3J0IHsgcGF0aHMgfSBmcm9tICcuL3BhdGhzJztcbmltcG9ydCB7IGdldFN0YXRlIH0gZnJvbSAnLi9wYWdlU3RhdGUnO1xuXG5jb25zdCBuYXYxID0gZWxlbWVudEZhY3Rvcnkoe1xuICAgIHR5cGU6ICdhJyxcbiAgICBocmVmOiBwYXRocy5ob21lLFxuICAgIHRleHRDb250ZW50OiAnSG9tZSdcbn0pXG5cbmNvbnN0IG5hdjIgPSBlbGVtZW50RmFjdG9yeSh7XG4gICAgdHlwZTogJ2EnLFxuICAgIGhyZWY6IHBhdGhzLmFib3V0LFxuICAgIHRleHRDb250ZW50OiAnQWJvdXQnXG59KVxuXG5jb25zdCBuYXYzID0gZWxlbWVudEZhY3Rvcnkoe1xuICAgIHR5cGU6ICdhJyxcbiAgICBocmVmOiBwYXRocy5tZW51ZXMsXG4gICAgdGV4dENvbnRlbnQ6ICdPdXIgTWVudXMnXG59KVxuXG5jb25zdCBuYXY0ID0gZWxlbWVudEZhY3Rvcnkoe1xuICAgIHR5cGU6ICdhJyxcbiAgICBocmVmOiBwYXRocy5yZXNlcnZhdGlvbnMsXG4gICAgdGV4dENvbnRlbnQ6ICdSZXNlcnZhdGlvbnMnXG59KVxuXG5jb25zdCBuYXY1ID0gZWxlbWVudEZhY3Rvcnkoe1xuICAgIHR5cGU6ICdhJyxcbiAgICBocmVmOiBwYXRocy5jb250YWN0LFxuICAgIHRleHRDb250ZW50OiAnQ29udGFjdCdcbn0pXG5cbmNvbnN0IHJlZ3VsYXJMaW5rcyA9IFtuYXYxLCBuYXYyLCBuYXYzLCBuYXY0LCBuYXY1XTtcbmNvbnN0IHJlZ3VsYXJMaXN0ID0gbGlzdEZhY3RvcnkocmVndWxhckxpbmtzKTtcblxuZXhwb3J0IGNvbnN0IHNpZGVCYXIgPSBlbGVtZW50RmFjdG9yeSh7XG4gICAgdHlwZTogJ2RpdicsXG4gICAgY2xhc3NOYW1lOiAnc2lkZS1uYXYgaW52aXMnXG59KVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT57XG5cbiAgICBpZiAoZ2V0U3RhdGUoKSAhPT0gJ21vYmlsZScpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3R5ZXMnKVxuICAgICAgICBzaWRlQmFyLmNsYXNzTGlzdC5hZGQoJ2ludmlzJyk7XG4gICAgfVxufSlcblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXG4vLyAgICAgY29uc29sZS5sb2coc2lkZUJhci5jbGFzc0xpc3QuY29udGFpbnMoJ2ludmlzJykpXG4vLyAgICAgaWYgKCFlLnRhcmdldC5jbG9zZXN0KCcuc2lkZS1uYXYnKSAmJiAhc2lkZUJhci5jbGFzc0xpc3QuY29udGFpbnMoJ2ludmlzJykpIHtcbi8vICAgICAgICAgLy8gY29uc29sZS5sb2coIWUudGFyZ2V0LmNsb3Nlc3QoJy5zaWRlLW5hdicpKVxuLy8gICAgICAgICBzaWRlQmFyLmNsYXNzTGlzdC5hZGQoJ2ludmlzJyk7XG4vLyAgICAgfVxuLy8gfSlcblxuc2lkZUJhci5hcHBlbmRDaGlsZChyZWd1bGFyTGlzdCkiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQge2dldFN0YXRlfSBmcm9tICcuL3BhZ2VTdGF0ZSc7XG5pbXBvcnQge2hlYWRlcn0gZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IHtzaWRlQmFyfSBmcm9tICcuL3NpZGViYXInO1xuaW1wb3J0IHtjb250ZW50MX0gZnJvbSAnLi9jb250ZW50MSc7XG5cbmV4cG9ydCBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5tYWluLmNsYXNzTmFtZSA9ICdtYWluJztcbm1haW4uYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbm1haW4uYXBwZW5kQ2hpbGQoc2lkZUJhcik7XG5tYWluLmFwcGVuZENoaWxkKGNvbnRlbnQxKVxuXG5cblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluKVxuXG4vLyBjb25zb2xlLmxvZyhnZXRTdGF0ZSgpKVxuLy8gY29uc29sZS5sb2codGVzdClcbi8vIGNvbnNvbGUubG9nKHRlc3QudGVzdEZ1bmMoKSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=