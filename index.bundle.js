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
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar */ "./src/sidebar.js");
/* harmony import */ var _content1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content1 */ "./src/content1.js");





const main = document.createElement('div');
main.className = 'main';
main.appendChild(_header__WEBPACK_IMPORTED_MODULE_1__.header);
main.appendChild(_sidebar__WEBPACK_IMPORTED_MODULE_2__.sideBar);
main.appendChild(_content1__WEBPACK_IMPORTED_MODULE_3__.content1);

document.body.appendChild(main);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNXO0FBQ0U7QUFDRTs7QUFFN0I7QUFDUDtBQUNBLGlCQUFpQiwyQ0FBTTtBQUN2QixpQkFBaUIsNkNBQU87QUFDeEIsaUJBQWlCLCtDQUFROztBQUV6QiIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvY29udGVudDEuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL2VsZW1lbnRGYWN0b3J5LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL2xpc3RGYWN0b3J5LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9wYWdlU3RhdGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL3BhdGhzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9zaWRlYmFyLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tbGluay12aXNpdGVkOiAjY2E5YzVlO1xcbiAgICAtLWRlZmF1bHQtZm9udDogQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAgIC0taWNvbi1yYWRpdXM6IDEwcHg7XFxuICAgIC0tbGFyZ2UtaWNvbi1zaXplOiA0MHB4O1xcbiAgICAtLW1lZGl1bS1pY29uLXNpemU6IDMwcHg7XFxuICAgIC0tc21hbGwtaWNvbi1zaXplOiAyMHB4O1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZGVmYXVsdC1mb250KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA4MCU7XFxufVxcblxcbi8qIEhlYWRlciBTdHlsZXMgKi9cXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHdpZHRoOiA4MHZ3O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbmhlYWRlciBhLCAuc2lkZS1uYXYgYSB7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1kZWZhdWx0LWZvbnQpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG5hOmhvdmVyLCBhOmFjdGl2ZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1saW5rLXZpc2l0ZWQpO1xcbn1cXG5cXG5oZWFkZXIgaW1nIHtcXG4gICAgd2lkdGg6IHZhcigtLWxhcmdlLWljb24tc2l6ZSk7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSlcXG59XFxuXFxuLnNvY2lhbC1saW5rcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmhlYWRlciB1bCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmhlYWRlciBidXR0b24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxubGkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uc2lkZS1uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogODB2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNpZGUtbmF2IHVsIGxpIHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4vKiBDb250ZW50IFN0eWxlcyAqL1xcbi5ibG9jazEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IHNwYWNlLWJldHdlZW47XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmJsb2NrMSAqIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDYwcHg7XFxufVxcblxcbi5ibG9jazEgaDEsIC5ibG9jazEgaDIge1xcbiAgICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi5ibG9jazEgLmJ1dHRvbi1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgXFxufVxcblxcbi5idXR0b24tZGl2IGRpdiB7XFxuICAgIG1hcmdpbjogMzBweCAyMHB4IDMwcHggMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tbGluay12aXNpdGVkKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWxpbmstdmlzaXRlZCk7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAvKiBwYWRkaW5nOiAyMHB4OyAqL1xcbiAgICBwYWRkaW5nOiAyMHB4IDAgMjBweCAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHBhZGRpbmcsIGNvbG9yLCBtYXJnaW47XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMjVzO1xcbn1cXG5cXG4uYnV0dG9uLWRpdiBkaXY6aG92ZXIge1xcbiAgICAvKiBoZWlnaHQ6IDYwcHg7ICovXFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgcGFkZGluZzogMzBweCAwIDMwcHggMDtcXG4gICAgY29sb3I6IHZhcigtLWxpbmstdmlzaXRlZClcXG59XFxuLyogVGFibGV0IFN0eWxlcyAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzgwcHgpIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xcblxcbiAgICBoZWFkZXIgLm1lbnUtYnV0dG9uIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgaGVhZGVyIGltZyB7XFxuICAgICAgICB3aWR0aDogdmFyKC0tbWVkaXVtLWljb24tc2l6ZSk7XFxuICAgIH1cXG5cXG4gICAgaGVhZGVyIHVsIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG5cXG4gICAgLmJsb2NrMSAuYnV0dG9uLWRpdiB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICB9XFxuXFxufVxcblxcbi8qIERlc2t0b3AgU3R5bGVzICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjFweCkge1xcblxcbiAgICBoZWFkZXIgLm1lbnUtYnV0dG9uIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgaGVhZGVyIGltZyB7XFxuICAgICAgICB3aWR0aDogdmFyKC0tc21hbGwtaWNvbi1zaXplKTtcXG4gICAgfVxcblxcbiAgICBoZWFkZXIgdWwge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgfVxcblxcbiAgICBoZWFkZXIgdWwgbGkge1xcbiAgICAgICAgbWFyZ2luOiAwIDEwcHggMCAxMHB4O1xcbiAgICB9XFxuXFxuICAgIC5ibG9jazEgLmJ1dHRvbi1kaXYge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgfVxcbn1cXG5cXG4vKiBUb2dnbGVzICovXFxuLmludmlzIHtcXG4gICAgZGlzcGxheTogbm9uZVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGlDQUFpQztJQUNqQyxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixnQ0FBZ0M7SUFDaEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVTtBQUNkOztBQUVBLGtCQUFrQjs7QUFFbEI7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUEsbUJBQW1CO0FBQ25CO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsYUFBYTs7QUFFakI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLHlDQUF5QztJQUN6Qyw0Q0FBNEM7SUFDNUMsWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCOztJQUVsQiwyQ0FBMkM7SUFDM0MsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixzQkFBc0I7SUFDdEI7QUFDSjtBQUNBLGtCQUFrQjtBQUNsQjs7SUFFSTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSw4QkFBOEI7SUFDbEM7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCOztBQUVKOztBQUVBLG1CQUFtQjtBQUNuQjs7SUFFSTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSw2QkFBNkI7SUFDakM7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0kscUJBQXFCO0lBQ3pCOztJQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0FBQ0o7O0FBRUEsWUFBWTtBQUNaO0lBQ0k7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tbGluay12aXNpdGVkOiAjY2E5YzVlO1xcbiAgICAtLWRlZmF1bHQtZm9udDogQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAgIC0taWNvbi1yYWRpdXM6IDEwcHg7XFxuICAgIC0tbGFyZ2UtaWNvbi1zaXplOiA0MHB4O1xcbiAgICAtLW1lZGl1bS1pY29uLXNpemU6IDMwcHg7XFxuICAgIC0tc21hbGwtaWNvbi1zaXplOiAyMHB4O1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZGVmYXVsdC1mb250KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA4MCU7XFxufVxcblxcbi8qIEhlYWRlciBTdHlsZXMgKi9cXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHdpZHRoOiA4MHZ3O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbmhlYWRlciBhLCAuc2lkZS1uYXYgYSB7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1kZWZhdWx0LWZvbnQpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG5hOmhvdmVyLCBhOmFjdGl2ZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1saW5rLXZpc2l0ZWQpO1xcbn1cXG5cXG5oZWFkZXIgaW1nIHtcXG4gICAgd2lkdGg6IHZhcigtLWxhcmdlLWljb24tc2l6ZSk7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSlcXG59XFxuXFxuLnNvY2lhbC1saW5rcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmhlYWRlciB1bCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmhlYWRlciBidXR0b24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxubGkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uc2lkZS1uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogODB2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNpZGUtbmF2IHVsIGxpIHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4vKiBDb250ZW50IFN0eWxlcyAqL1xcbi5ibG9jazEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IHNwYWNlLWJldHdlZW47XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmJsb2NrMSAqIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDYwcHg7XFxufVxcblxcbi5ibG9jazEgaDEsIC5ibG9jazEgaDIge1xcbiAgICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi5ibG9jazEgLmJ1dHRvbi1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgXFxufVxcblxcbi5idXR0b24tZGl2IGRpdiB7XFxuICAgIG1hcmdpbjogMzBweCAyMHB4IDMwcHggMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tbGluay12aXNpdGVkKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWxpbmstdmlzaXRlZCk7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAvKiBwYWRkaW5nOiAyMHB4OyAqL1xcbiAgICBwYWRkaW5nOiAyMHB4IDAgMjBweCAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHBhZGRpbmcsIGNvbG9yLCBtYXJnaW47XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMjVzO1xcbn1cXG5cXG4uYnV0dG9uLWRpdiBkaXY6aG92ZXIge1xcbiAgICAvKiBoZWlnaHQ6IDYwcHg7ICovXFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgcGFkZGluZzogMzBweCAwIDMwcHggMDtcXG4gICAgY29sb3I6IHZhcigtLWxpbmstdmlzaXRlZClcXG59XFxuLyogVGFibGV0IFN0eWxlcyAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzgwcHgpIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xcblxcbiAgICBoZWFkZXIgLm1lbnUtYnV0dG9uIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgaGVhZGVyIGltZyB7XFxuICAgICAgICB3aWR0aDogdmFyKC0tbWVkaXVtLWljb24tc2l6ZSk7XFxuICAgIH1cXG5cXG4gICAgaGVhZGVyIHVsIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG5cXG4gICAgLmJsb2NrMSAuYnV0dG9uLWRpdiB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICB9XFxuXFxufVxcblxcbi8qIERlc2t0b3AgU3R5bGVzICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjFweCkge1xcblxcbiAgICBoZWFkZXIgLm1lbnUtYnV0dG9uIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgaGVhZGVyIGltZyB7XFxuICAgICAgICB3aWR0aDogdmFyKC0tc21hbGwtaWNvbi1zaXplKTtcXG4gICAgfVxcblxcbiAgICBoZWFkZXIgdWwge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgfVxcblxcbiAgICBoZWFkZXIgdWwgbGkge1xcbiAgICAgICAgbWFyZ2luOiAwIDEwcHggMCAxMHB4O1xcbiAgICB9XFxuXFxuICAgIC5ibG9jazEgLmJ1dHRvbi1kaXYge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgfVxcbn1cXG5cXG4vKiBUb2dnbGVzICovXFxuLmludmlzIHtcXG4gICAgZGlzcGxheTogbm9uZVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgZWxlbWVudEZhY3RvcnkgZnJvbSBcIi4vZWxlbWVudEZhY3RvcnlcIjtcbi8vIE9UIDM5MiA0MTAgMjZcbi8vIDA4NiAwMDcgMDAwMFxuLy8gMDEyIDMzNiAzODIzIFxuLy8gNjIwMTI4NTE4ODA4MFxuZXhwb3J0IGNvbnN0IGNvbnRlbnQxID0gZWxlbWVudEZhY3Rvcnkoe1xuICAgIHR5cGU6ICdkaXYnLFxuICAgIGNsYXNzTmFtZTogJ2Jsb2NrMSdcbn0pXG5cbmNvbnN0IGgxID0gZWxlbWVudEZhY3Rvcnkoe1xuICAgIHR5cGU6ICdoMScsXG4gICAgdGV4dENvbnRlbnQ6ICdGbGF2b3VyLCBwcmVjaXNpb24gYW5kIHBlcmZlY3Rpb24nXG59KVxuXG5jb25zdCBoMiA9IGVsZW1lbnRGYWN0b3J5KHtcbiAgICB0eXBlOiAnaDInLFxuICAgIHRleHRDb250ZW50OiBcIkphbmUgRG9lJ3MgRGluZXIgaXMgYSBkaW5lciBvd25lZCBieSBKYW5lIERvZS4gV2Ugc2VydmUgZm9vZCBhbmQgZHJpbmtzLlwiXG59KVxuXG5jb25zdCBtYWluTWVudUJ1dHRvbiA9IGVsZW1lbnRGYWN0b3J5KHtcbiAgICB0eXBlOiAnZGl2JyxcbiAgICB0ZXh0Q29udGVudDogJ1ZJRVcgTUFJTiBNRU5VJ1xufSlcblxuXG5tYWluTWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ21haW5NZW51QnV0dG9uIGNsaWNrZWQnKVxuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KVxuICAgIGNvbnNvbGUubG9nKHRoaXMpXG4gICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJycpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdheXl5JylcbiAgICB9XG59KVxuXG4vLyBtYWluTWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1lbnVDbGljKVxuXG5jb25zdCBvcmRlck9ubGluZUJ1dHRvbiA9IGVsZW1lbnRGYWN0b3J5KHtcbiAgICB0eXBlOiAnZGl2JyxcbiAgICB0ZXh0Q29udGVudDogJ09SREVSIE9OTElORSdcbn0pXG5cbmNvbnN0IGJ1dHRvbkVsZSA9IGVsZW1lbnRGYWN0b3J5KHtcbiAgICB0eXBlOiAnZGl2JyxcbiAgICBjbGFzc05hbWU6ICdidXR0b24tZGl2J1xufSlcblxuYnV0dG9uRWxlLmFwcGVuZENoaWxkKG1haW5NZW51QnV0dG9uKVxuYnV0dG9uRWxlLmFwcGVuZENoaWxkKG9yZGVyT25saW5lQnV0dG9uKVxuXG5cbmNvbnRlbnQxLmFwcGVuZENoaWxkKGgxKTtcbmNvbnRlbnQxLmFwcGVuZENoaWxkKGgyKTtcbmNvbnRlbnQxLmFwcGVuZENoaWxkKGJ1dHRvbkVsZSk7XG4iLCIvLyBHZW5lcmF0ZXMgYW4gZWxlbWVudCBiYXNlZCBvbiB0aGUgYXJndW1lbnQgb2JqZWN0XG4vLyBhbGwgcHJvcHMgYmVzaWRlcyB0eXBlIG11c3QgYmUgdmFsaWQgcHJvcGVydGllcyBvZiBhIERPTSBlbGVtZW50IChocmVmLCB0ZXh0Q29udGVudC4uLilcbi8vIHRoZSBjaGlsZHJlbiBwcm9wZXJ0eSBtdXN0IGJlIGEgRE9NIGVsZW1lbnQgKHJlY3Vyc2lvbiB0byBmaXg/KVxuZXhwb3J0IGRlZmF1bHQgKG9iaikgPT4ge1xuICAgIGNvbnN0IHt0eXBlLCAuLi5yZXN0fSA9IG9iajtcblxuICAgIGNvbnN0IGVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgZm9yIChsZXQgcHJvcCBpbiByZXN0KSB7XG4gICAgICAgIGlmICh0eXBlb2YgZWxlW3Byb3BdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBlbGVbcHJvcF0ocmVzdFtwcm9wXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVbcHJvcF0gPSByZXN0W3Byb3BdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZTsgICAgXG59IiwiaW1wb3J0IGVsZW1lbnRGYWN0b3J5IGZyb20gXCIuL2VsZW1lbnRGYWN0b3J5XCI7XG5pbXBvcnQgZmJJY29uIGZyb20gJy4vaW1nL2ZiLWljb24uc3ZnJztcbmltcG9ydCBpbnN0YUljb24gZnJvbSAnLi9pbWcvaW5zdGEtaWNvbi5zdmcnO1xuaW1wb3J0IGxvZ29JY29uIGZyb20gJy4vaW1nL3Jlc3RhdXJhbnQtbG9nby5zdmcnO1xuaW1wb3J0IG1lbnVJY29uIGZyb20gJy4vaW1nL21lbnUtaWNvbi5zdmcnO1xuaW1wb3J0IHsgcGF0aHMgfSBmcm9tICcuL3BhdGhzJztcbmltcG9ydCB7IGxpc3RGYWN0b3J5IH0gZnJvbSBcIi4vbGlzdEZhY3RvcnlcIjtcbmltcG9ydCB7IHNpZGVCYXIgfSBmcm9tIFwiLi9zaWRlYmFyXCI7XG5cblxuXG5leHBvcnQgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5cbi8vIExvZ29cblxuY29uc3QgbG9nb0VsZSA9IGVsZW1lbnRGYWN0b3J5KHtcbiAgICB0eXBlOiAnYScsXG4gICAgaHJlZjogcGF0aHMuaG9tZSxcbn0pXG5cbmNvbnN0IGxvZ29JbWcgPSBuZXcgSW1hZ2UoKTsgIFxubG9nb0ltZy5zcmMgPSBsb2dvSWNvbjtcblxubG9nb0VsZS5hcHBlbmRDaGlsZChsb2dvSW1nKTtcblxuLy8gTmF2IGxpbmtzXG5jb25zdCBuYXYxID0gZWxlbWVudEZhY3Rvcnkoe1xuICAgIHR5cGU6ICdhJyxcbiAgICBocmVmOiBwYXRocy5ob21lLFxuICAgIHRleHRDb250ZW50OiAnSG9tZSdcbn0pXG5cbmNvbnN0IG5hdjIgPSBlbGVtZW50RmFjdG9yeSh7XG4gICAgdHlwZTogJ2EnLFxuICAgIGhyZWY6IHBhdGhzLmFib3V0LFxuICAgIHRleHRDb250ZW50OiAnQWJvdXQnXG59KVxuXG5jb25zdCBuYXYzID0gZWxlbWVudEZhY3Rvcnkoe1xuICAgIHR5cGU6ICdhJyxcbiAgICBocmVmOiBwYXRocy5tZW51ZXMsXG4gICAgdGV4dENvbnRlbnQ6ICdPdXIgTWVudXMnXG59KVxuXG5jb25zdCBuYXY0ID0gZWxlbWVudEZhY3Rvcnkoe1xuICAgIHR5cGU6ICdhJyxcbiAgICBocmVmOiBwYXRocy5yZXNlcnZhdGlvbnMsXG4gICAgdGV4dENvbnRlbnQ6ICdSZXNlcnZhdGlvbnMnXG59KVxuXG5jb25zdCBuYXY1ID0gZWxlbWVudEZhY3Rvcnkoe1xuICAgIHR5cGU6ICdhJyxcbiAgICBocmVmOiBwYXRocy5jb250YWN0LFxuICAgIHRleHRDb250ZW50OiAnQ29udGFjdCdcbn0pXG5cbmNvbnN0IHJlZ3VsYXJMaW5rcyA9IFtuYXYxLCBuYXYyLCBuYXYzLCBuYXY0LCBuYXY1XTtcbmNvbnN0IHJlZ3VsYXJMaXN0ID0gbGlzdEZhY3RvcnkocmVndWxhckxpbmtzKTtcblxuLy8gU29jaWFsIE1lZGlhIExpbmtzXG4vLyBmYWNlYm9va1xuY29uc3QgZmJFbGUgPSBlbGVtZW50RmFjdG9yeSh7XG4gICAgdHlwZTogJ2EnLFxuICAgIGhyZWY6IHBhdGhzLmZhY2Vib29rLFxufSk7XG5cbmNvbnN0IGZiSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5mYkltZy5zcmMgPSBmYkljb247XG5cbmZiRWxlLmFwcGVuZENoaWxkKGZiSW1nKTtcblxuXG4vLyBJbnN0YWdyYW1cbmNvbnN0IGluc3RhRWxlID0gZWxlbWVudEZhY3Rvcnkoe1xuICAgIHR5cGU6ICdhJyxcbiAgICBocmVmOiBwYXRocy5pbnN0YWdyYW1cbn0pXG5cbmNvbnN0IGluc3RhSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5pbnN0YUltZy5zcmMgPSBpbnN0YUljb247XG5cbmluc3RhRWxlLmFwcGVuZENoaWxkKGluc3RhSW1nKTtcblxuLy8gU2lkZSBuYXYgYnV0dG9uXG5jb25zdCBzaWRlTmF2QnV0dG9uID0gZWxlbWVudEZhY3Rvcnkoe1xuICAgIHR5cGU6ICdpbWcnLFxuICAgIGNsYXNzTmFtZTogJ21lbnUtYnV0dG9uJyxcbiAgICBzcmM6IG1lbnVJY29uXG59KVxuXG5zaWRlTmF2QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNpZGVCYXIuY2xhc3NMaXN0LnRvZ2dsZSgnaW52aXMnKTtcbn0pXG5cbi8vIE1lZGlhIGRpdlxuY29uc3Qgc29jaWFsTGlua3MgPSBlbGVtZW50RmFjdG9yeSh7XG4gICAgdHlwZTogJ2RpdicsXG4gICAgY2xhc3NOYW1lOiAnc29jaWFsLWxpbmtzJ1xufSlcblxuc29jaWFsTGlua3MuYXBwZW5kQ2hpbGQoZmJFbGUpO1xuc29jaWFsTGlua3MuYXBwZW5kQ2hpbGQoaW5zdGFFbGUpO1xuc29jaWFsTGlua3MuYXBwZW5kQ2hpbGQoc2lkZU5hdkJ1dHRvbik7XG5cblxuLy8gQXBwZW5kXG5oZWFkZXIuYXBwZW5kQ2hpbGQobG9nb0VsZSlcbmhlYWRlci5hcHBlbmRDaGlsZChyZWd1bGFyTGlzdCk7XG5oZWFkZXIuYXBwZW5kQ2hpbGQoc29jaWFsTGlua3MpO1xuXG5cblxuXG4iLCJleHBvcnQgY29uc3QgbGlzdEZhY3RvcnkgPSAoaXRlbXMpID0+IHtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBcbiAgICBpdGVtcy5mb3JFYWNoKCBpdGVtID0+IHtcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBsaS5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChsaSk7IFxuICAgIH0pXG5cbiAgICByZXR1cm4gbGlzdDtcbn0iLCJleHBvcnQgY29uc3QgZ2V0U3RhdGUgPSAoKSA9PiB7XG4gICAgbGV0IGlzTW9iaWxlID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDc4MHB4KScpO1xuICAgIGxldCBpc1RhYmxldCA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiA3ODFweCkgYW5kIChtYXgtd2lkdGg6IDk2MHB4KScpO1xuICAgIGxldCBpc0Rlc2t0b3AgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogOTYxcHgpJyk7XG4gICAgXG4gICAgaWYgKGlzTW9iaWxlLm1hdGNoZXMpIHJldHVybiAnbW9iaWxlJztcbiAgICBpZiAoaXNUYWJsZXQubWF0Y2hlcykgcmV0dXJuICd0YWJsZXQnO1xuICAgIGlmIChpc0Rlc2t0b3AubWF0Y2hlcykgcmV0dXJuICdkZXNrdG9wJztcbn1cbiIsImV4cG9ydCBjb25zdCBwYXRocyA9IHtcbiAgICBob21lOiAgICAgICAgICAgJyMnLFxuICAgIG1lbnVlczogICAgICAgICAnIycsXG4gICAgYWJvdXQ6ICAgICAgICAgICcjJyxcbiAgICByZXNlcnZhdGlvbnM6ICAgJyMnLFxuICAgIGNvbnRhY3Q6ICAgICAgICAnIycsXG4gICAgZmFjZWJvb2s6ICAgICAgICcjJyxcbiAgICBpbnN0YWdyYW06ICAgICAgJyMnICAgICBcbn0iLCJpbXBvcnQgZWxlbWVudEZhY3RvcnkgZnJvbSAnLi9lbGVtZW50RmFjdG9yeSc7XG5pbXBvcnQgeyBsaXN0RmFjdG9yeSB9IGZyb20gJy4vbGlzdEZhY3RvcnknO1xuaW1wb3J0IHsgcGF0aHMgfSBmcm9tICcuL3BhdGhzJztcbmltcG9ydCB7IGdldFN0YXRlIH0gZnJvbSAnLi9wYWdlU3RhdGUnO1xuXG5jb25zdCBuYXYxID0gZWxlbWVudEZhY3Rvcnkoe1xuICAgIHR5cGU6ICdhJyxcbiAgICBocmVmOiBwYXRocy5ob21lLFxuICAgIHRleHRDb250ZW50OiAnSG9tZSdcbn0pXG5cbmNvbnN0IG5hdjIgPSBlbGVtZW50RmFjdG9yeSh7XG4gICAgdHlwZTogJ2EnLFxuICAgIGhyZWY6IHBhdGhzLmFib3V0LFxuICAgIHRleHRDb250ZW50OiAnQWJvdXQnXG59KVxuXG5jb25zdCBuYXYzID0gZWxlbWVudEZhY3Rvcnkoe1xuICAgIHR5cGU6ICdhJyxcbiAgICBocmVmOiBwYXRocy5tZW51ZXMsXG4gICAgdGV4dENvbnRlbnQ6ICdPdXIgTWVudXMnXG59KVxuXG5jb25zdCBuYXY0ID0gZWxlbWVudEZhY3Rvcnkoe1xuICAgIHR5cGU6ICdhJyxcbiAgICBocmVmOiBwYXRocy5yZXNlcnZhdGlvbnMsXG4gICAgdGV4dENvbnRlbnQ6ICdSZXNlcnZhdGlvbnMnXG59KVxuXG5jb25zdCBuYXY1ID0gZWxlbWVudEZhY3Rvcnkoe1xuICAgIHR5cGU6ICdhJyxcbiAgICBocmVmOiBwYXRocy5jb250YWN0LFxuICAgIHRleHRDb250ZW50OiAnQ29udGFjdCdcbn0pXG5cbmNvbnN0IHJlZ3VsYXJMaW5rcyA9IFtuYXYxLCBuYXYyLCBuYXYzLCBuYXY0LCBuYXY1XTtcbmNvbnN0IHJlZ3VsYXJMaXN0ID0gbGlzdEZhY3RvcnkocmVndWxhckxpbmtzKTtcblxuZXhwb3J0IGNvbnN0IHNpZGVCYXIgPSBlbGVtZW50RmFjdG9yeSh7XG4gICAgdHlwZTogJ2RpdicsXG4gICAgY2xhc3NOYW1lOiAnc2lkZS1uYXYgaW52aXMnXG59KVxuXG4vLyBDbG9zZXNcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PntcblxuICAgIGlmIChnZXRTdGF0ZSgpICE9PSAnbW9iaWxlJykge1xuICAgICAgICBzaWRlQmFyLmNsYXNzTGlzdC5hZGQoJ2ludmlzJyk7XG4gICAgfVxufSlcblxuLy8gQ2xvc2VzIG1vYmlsZSBtZW51IHdoZW4gYW4gb3V0IG9mIGJvdW5kcyBjbGljayBpcyBkZXRlY3RlZFxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXG4gICAgaWYgKCFlLnRhcmdldC5jbG9zZXN0KCcuc2lkZS1uYXYnKSkge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xvc2VzdCgnLm1lbnUtYnV0dG9uJykpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9IGVsc2UgaWYgKCFzaWRlQmFyLmNsYXNzTGlzdC5jb250YWlucygnaW52aXMnKSkge1xuICAgICAgICAgICAgc2lkZUJhci5jbGFzc0xpc3QuYWRkKCdpbnZpcycpXG4gICAgICAgIH1cbiAgICB9XG59KVxuXG5zaWRlQmFyLmFwcGVuZENoaWxkKHJlZ3VsYXJMaXN0KSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7aGVhZGVyfSBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQge3NpZGVCYXJ9IGZyb20gJy4vc2lkZWJhcic7XG5pbXBvcnQge2NvbnRlbnQxfSBmcm9tICcuL2NvbnRlbnQxJztcblxuZXhwb3J0IGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm1haW4uY2xhc3NOYW1lID0gJ21haW4nO1xubWFpbi5hcHBlbmRDaGlsZChoZWFkZXIpO1xubWFpbi5hcHBlbmRDaGlsZChzaWRlQmFyKTtcbm1haW4uYXBwZW5kQ2hpbGQoY29udGVudDEpO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW4pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9