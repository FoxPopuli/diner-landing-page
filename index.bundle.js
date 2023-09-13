/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

const content1 = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])({
  type: 'div',
  className: 'block1'
});
const h1 = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])({
  type: 'h1',
  textContent: 'Flavour, precision and perfection'
});
const h2 = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])({
  type: 'h2',
  textContent: "Jane Doe's Diner is a diner owned by Jane Doe. We serve food and drinks."
});
const mainMenuButton = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])({
  type: 'div',
  textContent: 'VIEW MAIN MENU'
});
const orderOnlineButton = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])({
  type: 'div',
  textContent: 'ORDER ONLINE'
});
const buttonEle = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])({
  type: 'div',
  className: 'button-div'
});
buttonEle.appendChild(mainMenuButton);
buttonEle.appendChild(orderOnlineButton);
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (obj => {
  const {
    type,
    ...rest
  } = obj;
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
  href: _paths__WEBPACK_IMPORTED_MODULE_5__.paths.home
});
const logoImg = new Image();
logoImg.src = _img_restaurant_logo_svg__WEBPACK_IMPORTED_MODULE_3__;
logoEle.appendChild(logoImg);

// Nav links
const nav1 = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])({
  type: 'a',
  href: _paths__WEBPACK_IMPORTED_MODULE_5__.paths.home,
  textContent: 'Home'
});
const nav2 = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])({
  type: 'a',
  href: _paths__WEBPACK_IMPORTED_MODULE_5__.paths.about,
  textContent: 'About'
});
const nav3 = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])({
  type: 'a',
  href: _paths__WEBPACK_IMPORTED_MODULE_5__.paths.menues,
  textContent: 'Our Menus'
});
const nav4 = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])({
  type: 'a',
  href: _paths__WEBPACK_IMPORTED_MODULE_5__.paths.reservations,
  textContent: 'Reservations'
});
const nav5 = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])({
  type: 'a',
  href: _paths__WEBPACK_IMPORTED_MODULE_5__.paths.contact,
  textContent: 'Contact'
});
const regularLinks = [nav1, nav2, nav3, nav4, nav5];
const regularList = (0,_listFactory__WEBPACK_IMPORTED_MODULE_6__.listFactory)(regularLinks);

// Social Media Links
// facebook
const fbEle = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])({
  type: 'a',
  href: _paths__WEBPACK_IMPORTED_MODULE_5__.paths.facebook
});
const fbImg = document.createElement('img');
fbImg.src = _img_fb_icon_svg__WEBPACK_IMPORTED_MODULE_1__;
fbEle.appendChild(fbImg);

// Instagram
const instaEle = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])({
  type: 'a',
  href: _paths__WEBPACK_IMPORTED_MODULE_5__.paths.instagram
});
const instaImg = document.createElement('img');
instaImg.src = _img_insta_icon_svg__WEBPACK_IMPORTED_MODULE_2__;
instaEle.appendChild(instaImg);

// Side nav button
const sideNavButton = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])({
  type: 'img',
  className: 'menu-button',
  src: _img_menu_icon_svg__WEBPACK_IMPORTED_MODULE_4__
});
sideNavButton.addEventListener('click', () => {
  _sidebar__WEBPACK_IMPORTED_MODULE_7__.sideBar.classList.toggle('invis');
});

// Media div
const socialLinks = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])({
  type: 'div',
  className: 'social-links'
});
socialLinks.appendChild(fbEle);
socialLinks.appendChild(instaEle);
socialLinks.appendChild(sideNavButton);

// Append
header.appendChild(logoEle);
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
const listFactory = items => {
  const list = document.createElement('ul');
  items.forEach(item => {
    const li = document.createElement('li');
    li.appendChild(item);
    list.appendChild(li);
  });
  return list;
};

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
};

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
  home: '#',
  menues: '#',
  about: '#',
  reservations: '#',
  contact: '#',
  facebook: '#',
  instagram: '#'
};

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
});
const nav2 = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])({
  type: 'a',
  href: _paths__WEBPACK_IMPORTED_MODULE_2__.paths.about,
  textContent: 'About'
});
const nav3 = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])({
  type: 'a',
  href: _paths__WEBPACK_IMPORTED_MODULE_2__.paths.menues,
  textContent: 'Our Menus'
});
const nav4 = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])({
  type: 'a',
  href: _paths__WEBPACK_IMPORTED_MODULE_2__.paths.reservations,
  textContent: 'Reservations'
});
const nav5 = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])({
  type: 'a',
  href: _paths__WEBPACK_IMPORTED_MODULE_2__.paths.contact,
  textContent: 'Contact'
});
const regularLinks = [nav1, nav2, nav3, nav4, nav5];
const regularList = (0,_listFactory__WEBPACK_IMPORTED_MODULE_1__.listFactory)(regularLinks);
const sideBar = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])({
  type: 'div',
  className: 'side-nav invis'
});
window.addEventListener('resize', () => {
  if ((0,_pageState__WEBPACK_IMPORTED_MODULE_3__.getState)() !== 'mobile') {
    sideBar.classList.add('invis');
  }
});

// Closes mobile menu when an out of bounds click is detected
document.addEventListener('click', e => {
  if (!e.target.closest('.side-nav')) {
    if (e.target.closest('.menu-button')) {
      return;
    } else if (!sideBar.classList.contains('invis')) {
      sideBar.classList.add('invis');
    }
  }
});
sideBar.appendChild(regularList);

/***/ }),

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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/CenturyGothic.ttf */ "./src/fonts/CenturyGothic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/sushi.jpg */ "./src/img/sushi.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: \"CenturyGothic\";\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n:root {\n    --link-visited: #ca9c5e;\n    --default-font: CenturyGothic;\n    --icon-radius: 10px;\n    --large-icon-size: 40px;\n    --medium-icon-size: 30px;\n    --small-icon-size: 30px;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: var(--default-font);\n    color: white;\n}\n\nhtml { \n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center center fixed; \n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n}\n\nbody {\n    display: flex;\n    justify-content: center;\n    max-width: 100vw;\n    max-height: 100vh;\n}\n\n.main {\n    display: flex;\n    flex-direction: column;\n    width: 80%;\n    height: 100vh;\n    align-items: center;\n}\n\n/* Header Styles */\n\nheader {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    width: 80vw;\n    flex-wrap: wrap;\n    max-width: 1100px;\n    margin-top: 50px;\n}\n\nheader a, .side-nav a {\n    font-family: var(--default-font);\n    text-decoration: none;\n    color: white;\n    padding: 5px;\n}\n\na:hover, a:active {\n    color: var(--link-visited);\n}\n\nheader img {\n    width: var(--large-icon-size);\n    margin: 10px;\n    filter: invert(100%)\n}\n\n.social-links {\n    display: flex;\n}\n\nheader ul {\n    display: none;\n    list-style: none;\n}\n\nheader button {\n    display: block;\n}\n\nli {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 20px;\n}\n\n.side-nav {\n    display: flex;\n    flex-direction: column;\n    width: 80vw;\n    align-items: center;\n}\n\n.side-nav ul li {\n    font-size: 30px;\n}\n\n/* Content Styles */\n.block1 {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: space-between;\n    height: 100%;\n}\n\n.block1 * {\n    display: flex;\n    justify-content: center;\n    text-align: center;\n    margin: 20px;\n}\n\nh1 {\n    font-size: 60px;\n}\n\n.block1 h1, .block1 h2 {\n    font-weight: 400;\n    margin: 20px;\n}\n\n.bloc\n\n.block1 .button-div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: 10px;\n    \n}\n\n.button-div div {\n    margin: 10px 20px 10px 20px;\n    border-radius: 5px;\n    border-top: 2px solid var(--link-visited);\n    border-bottom: 2px solid var(--link-visited);\n    width: 150px;\n    height: 50px;\n    padding: 20px 0 20px 0;\n    display: flex;\n    align-items: center;\n    align-self: center;\n\n    transition-property: padding, color, margin;\n    transition-duration: 0.25s;\n}\n\n.button-div div:hover {\n    margin-top: 0;\n    margin-bottom: 0;\n    padding: 30px 0 30px 0;\n    color: var(--link-visited)\n}\n/* Tablet Styles */\n@media only screen and (min-width: 780px) and (max-width: 960px) {\n\n    header .menu-button {\n        display: none;\n    }\n\n    header img {\n        width: var(--medium-icon-size);\n    }\n\n    header ul {\n        display: flex;\n    }\n\n    .block1 .button-div {\n        flex-direction: row;\n    }\n\n}\n\n/* Desktop Styles */\n@media only screen and (min-width: 961px) {\n\n    header .menu-button {\n        display: none;\n    }\n\n    header img {\n        width: var(--small-icon-size);\n    }\n\n    header ul {\n        display: flex;\n    }\n\n    header ul li {\n        margin: 0 10px 0 10px;\n    }\n\n    .block1 .button-div {\n        flex-direction: row;\n    }\n}\n\n/* Toggles */\n.invis {\n    display: none\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,4BAA4B;IAC5B,4CAAqC;AACzC;;AAEA;IACI,uBAAuB;IACvB,6BAA6B;IAC7B,mBAAmB;IACnB,uBAAuB;IACvB,wBAAwB;IACxB,uBAAuB;AAC3B;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,gCAAgC;IAChC,YAAY;AAChB;;AAEA;IACI,iFAAgE;IAChE,8BAA8B;IAC9B,2BAA2B;IAC3B,yBAAyB;IACzB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,aAAa;IACb,mBAAmB;AACvB;;AAEA,kBAAkB;;AAElB;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,WAAW;IACX,eAAe;IACf,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,gCAAgC;IAChC,qBAAqB;IACrB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,6BAA6B;IAC7B,YAAY;IACZ;AACJ;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA,mBAAmB;AACnB;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,0BAA0B;IAC1B,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,YAAY;AAChB;;AAEA;;;IAGI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,aAAa;;AAEjB;;AAEA;IACI,2BAA2B;IAC3B,kBAAkB;IAClB,yCAAyC;IACzC,4CAA4C;IAC5C,YAAY;IACZ,YAAY;IACZ,sBAAsB;IACtB,aAAa;IACb,mBAAmB;IACnB,kBAAkB;;IAElB,2CAA2C;IAC3C,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,sBAAsB;IACtB;AACJ;AACA,kBAAkB;AAClB;;IAEI;QACI,aAAa;IACjB;;IAEA;QACI,8BAA8B;IAClC;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,mBAAmB;IACvB;;AAEJ;;AAEA,mBAAmB;AACnB;;IAEI;QACI,aAAa;IACjB;;IAEA;QACI,6BAA6B;IACjC;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,qBAAqB;IACzB;;IAEA;QACI,mBAAmB;IACvB;AACJ;;AAEA,YAAY;AACZ;IACI;AACJ","sourcesContent":["@font-face {\n    font-family: \"CenturyGothic\";\n    src: url('./fonts/CenturyGothic.ttf');\n}\n\n:root {\n    --link-visited: #ca9c5e;\n    --default-font: CenturyGothic;\n    --icon-radius: 10px;\n    --large-icon-size: 40px;\n    --medium-icon-size: 30px;\n    --small-icon-size: 30px;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: var(--default-font);\n    color: white;\n}\n\nhtml { \n    background: url('./img/sushi.jpg') no-repeat center center fixed; \n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n}\n\nbody {\n    display: flex;\n    justify-content: center;\n    max-width: 100vw;\n    max-height: 100vh;\n}\n\n.main {\n    display: flex;\n    flex-direction: column;\n    width: 80%;\n    height: 100vh;\n    align-items: center;\n}\n\n/* Header Styles */\n\nheader {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    width: 80vw;\n    flex-wrap: wrap;\n    max-width: 1100px;\n    margin-top: 50px;\n}\n\nheader a, .side-nav a {\n    font-family: var(--default-font);\n    text-decoration: none;\n    color: white;\n    padding: 5px;\n}\n\na:hover, a:active {\n    color: var(--link-visited);\n}\n\nheader img {\n    width: var(--large-icon-size);\n    margin: 10px;\n    filter: invert(100%)\n}\n\n.social-links {\n    display: flex;\n}\n\nheader ul {\n    display: none;\n    list-style: none;\n}\n\nheader button {\n    display: block;\n}\n\nli {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 20px;\n}\n\n.side-nav {\n    display: flex;\n    flex-direction: column;\n    width: 80vw;\n    align-items: center;\n}\n\n.side-nav ul li {\n    font-size: 30px;\n}\n\n/* Content Styles */\n.block1 {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: space-between;\n    height: 100%;\n}\n\n.block1 * {\n    display: flex;\n    justify-content: center;\n    text-align: center;\n    margin: 20px;\n}\n\nh1 {\n    font-size: 60px;\n}\n\n.block1 h1, .block1 h2 {\n    font-weight: 400;\n    margin: 20px;\n}\n\n.bloc\n\n.block1 .button-div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: 10px;\n    \n}\n\n.button-div div {\n    margin: 10px 20px 10px 20px;\n    border-radius: 5px;\n    border-top: 2px solid var(--link-visited);\n    border-bottom: 2px solid var(--link-visited);\n    width: 150px;\n    height: 50px;\n    padding: 20px 0 20px 0;\n    display: flex;\n    align-items: center;\n    align-self: center;\n\n    transition-property: padding, color, margin;\n    transition-duration: 0.25s;\n}\n\n.button-div div:hover {\n    margin-top: 0;\n    margin-bottom: 0;\n    padding: 30px 0 30px 0;\n    color: var(--link-visited)\n}\n/* Tablet Styles */\n@media only screen and (min-width: 780px) and (max-width: 960px) {\n\n    header .menu-button {\n        display: none;\n    }\n\n    header img {\n        width: var(--medium-icon-size);\n    }\n\n    header ul {\n        display: flex;\n    }\n\n    .block1 .button-div {\n        flex-direction: row;\n    }\n\n}\n\n/* Desktop Styles */\n@media only screen and (min-width: 961px) {\n\n    header .menu-button {\n        display: none;\n    }\n\n    header img {\n        width: var(--small-icon-size);\n    }\n\n    header ul {\n        display: flex;\n    }\n\n    header ul li {\n        margin: 0 10px 0 10px;\n    }\n\n    .block1 .button-div {\n        flex-direction: row;\n    }\n}\n\n/* Toggles */\n.invis {\n    display: none\n}"],"sourceRoot":""}]);
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

/***/ "./src/fonts/CenturyGothic.ttf":
/*!*************************************!*\
  !*** ./src/fonts/CenturyGothic.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b1b792bab1bff8f27ba7.ttf";

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




// import background from './img/sushi.jpg'

const main = document.createElement('div');
main.className = 'main';
main.appendChild(_header__WEBPACK_IMPORTED_MODULE_1__.header);
main.appendChild(_sidebar__WEBPACK_IMPORTED_MODULE_2__.sideBar);
main.appendChild(_content1__WEBPACK_IMPORTED_MODULE_3__.content1);
document.body.appendChild(main);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNXO0FBQ0U7QUFDRTtBQUNwQzs7QUFFTyxNQUFNNkIsSUFBSSxHQUFHeEQsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0FBRWpEdUQsSUFBSSxDQUFDbkUsU0FBUyxHQUFHLE1BQU07QUFDdkJtRSxJQUFJLENBQUM1RCxXQUFXLENBQUNjLDJDQUFNLENBQUM7QUFDeEI4QyxJQUFJLENBQUM1RCxXQUFXLENBQUNhLDZDQUFPLENBQUM7QUFDekIrQyxJQUFJLENBQUM1RCxXQUFXLENBQUNULCtDQUFRLENBQUM7QUFFMUJhLFFBQVEsQ0FBQ3lELElBQUksQ0FBQzdELFdBQVcsQ0FBQzRELElBQUksQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL2NvbnRlbnQxLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9lbGVtZW50RmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9saXN0RmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvcGFnZVN0YXRlLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9wYXRocy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZWxlbWVudEZhY3RvcnkgZnJvbSBcIi4vZWxlbWVudEZhY3RvcnlcIjtcblxuZXhwb3J0IGNvbnN0IGNvbnRlbnQxID0gZWxlbWVudEZhY3Rvcnkoe1xuICAgIHR5cGU6ICdkaXYnLFxuICAgIGNsYXNzTmFtZTogJ2Jsb2NrMSdcbn0pXG5cbmNvbnN0IGgxID0gZWxlbWVudEZhY3Rvcnkoe1xuICAgIHR5cGU6ICdoMScsXG4gICAgdGV4dENvbnRlbnQ6ICdGbGF2b3VyLCBwcmVjaXNpb24gYW5kIHBlcmZlY3Rpb24nXG59KVxuXG5jb25zdCBoMiA9IGVsZW1lbnRGYWN0b3J5KHtcbiAgICB0eXBlOiAnaDInLFxuICAgIHRleHRDb250ZW50OiBcIkphbmUgRG9lJ3MgRGluZXIgaXMgYSBkaW5lciBvd25lZCBieSBKYW5lIERvZS4gV2Ugc2VydmUgZm9vZCBhbmQgZHJpbmtzLlwiXG59KVxuXG5jb25zdCBtYWluTWVudUJ1dHRvbiA9IGVsZW1lbnRGYWN0b3J5KHtcbiAgICB0eXBlOiAnZGl2JyxcbiAgICB0ZXh0Q29udGVudDogJ1ZJRVcgTUFJTiBNRU5VJ1xufSlcblxuXG5jb25zdCBvcmRlck9ubGluZUJ1dHRvbiA9IGVsZW1lbnRGYWN0b3J5KHtcbiAgICB0eXBlOiAnZGl2JyxcbiAgICB0ZXh0Q29udGVudDogJ09SREVSIE9OTElORSdcbn0pXG5cbmNvbnN0IGJ1dHRvbkVsZSA9IGVsZW1lbnRGYWN0b3J5KHtcbiAgICB0eXBlOiAnZGl2JyxcbiAgICBjbGFzc05hbWU6ICdidXR0b24tZGl2J1xufSlcblxuYnV0dG9uRWxlLmFwcGVuZENoaWxkKG1haW5NZW51QnV0dG9uKVxuYnV0dG9uRWxlLmFwcGVuZENoaWxkKG9yZGVyT25saW5lQnV0dG9uKVxuXG5cbmNvbnRlbnQxLmFwcGVuZENoaWxkKGgxKTtcbmNvbnRlbnQxLmFwcGVuZENoaWxkKGgyKTtcbmNvbnRlbnQxLmFwcGVuZENoaWxkKGJ1dHRvbkVsZSk7XG4iLCIvLyBHZW5lcmF0ZXMgYW4gZWxlbWVudCBiYXNlZCBvbiB0aGUgYXJndW1lbnQgb2JqZWN0XG4vLyBhbGwgcHJvcHMgYmVzaWRlcyB0eXBlIG11c3QgYmUgdmFsaWQgcHJvcGVydGllcyBvZiBhIERPTSBlbGVtZW50IChocmVmLCB0ZXh0Q29udGVudC4uLilcbi8vIHRoZSBjaGlsZHJlbiBwcm9wZXJ0eSBtdXN0IGJlIGEgRE9NIGVsZW1lbnQgKHJlY3Vyc2lvbiB0byBmaXg/KVxuZXhwb3J0IGRlZmF1bHQgKG9iaikgPT4ge1xuICAgIGNvbnN0IHt0eXBlLCAuLi5yZXN0fSA9IG9iajtcblxuICAgIGNvbnN0IGVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgZm9yIChsZXQgcHJvcCBpbiByZXN0KSB7XG4gICAgICAgIGlmICh0eXBlb2YgZWxlW3Byb3BdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBlbGVbcHJvcF0ocmVzdFtwcm9wXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVbcHJvcF0gPSByZXN0W3Byb3BdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZTsgICAgXG59IiwiaW1wb3J0IGVsZW1lbnRGYWN0b3J5IGZyb20gXCIuL2VsZW1lbnRGYWN0b3J5XCI7XG5pbXBvcnQgZmJJY29uIGZyb20gJy4vaW1nL2ZiLWljb24uc3ZnJztcbmltcG9ydCBpbnN0YUljb24gZnJvbSAnLi9pbWcvaW5zdGEtaWNvbi5zdmcnO1xuaW1wb3J0IGxvZ29JY29uIGZyb20gJy4vaW1nL3Jlc3RhdXJhbnQtbG9nby5zdmcnO1xuaW1wb3J0IG1lbnVJY29uIGZyb20gJy4vaW1nL21lbnUtaWNvbi5zdmcnO1xuaW1wb3J0IHsgcGF0aHMgfSBmcm9tICcuL3BhdGhzJztcbmltcG9ydCB7IGxpc3RGYWN0b3J5IH0gZnJvbSBcIi4vbGlzdEZhY3RvcnlcIjtcbmltcG9ydCB7IHNpZGVCYXIgfSBmcm9tIFwiLi9zaWRlYmFyXCI7XG5cblxuXG5leHBvcnQgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5cbi8vIExvZ29cblxuY29uc3QgbG9nb0VsZSA9IGVsZW1lbnRGYWN0b3J5KHtcbiAgICB0eXBlOiAnYScsXG4gICAgaHJlZjogcGF0aHMuaG9tZSxcbn0pXG5cbmNvbnN0IGxvZ29JbWcgPSBuZXcgSW1hZ2UoKTsgIFxubG9nb0ltZy5zcmMgPSBsb2dvSWNvbjtcblxubG9nb0VsZS5hcHBlbmRDaGlsZChsb2dvSW1nKTtcblxuLy8gTmF2IGxpbmtzXG5jb25zdCBuYXYxID0gZWxlbWVudEZhY3Rvcnkoe1xuICAgIHR5cGU6ICdhJyxcbiAgICBocmVmOiBwYXRocy5ob21lLFxuICAgIHRleHRDb250ZW50OiAnSG9tZSdcbn0pXG5cbmNvbnN0IG5hdjIgPSBlbGVtZW50RmFjdG9yeSh7XG4gICAgdHlwZTogJ2EnLFxuICAgIGhyZWY6IHBhdGhzLmFib3V0LFxuICAgIHRleHRDb250ZW50OiAnQWJvdXQnXG59KVxuXG5jb25zdCBuYXYzID0gZWxlbWVudEZhY3Rvcnkoe1xuICAgIHR5cGU6ICdhJyxcbiAgICBocmVmOiBwYXRocy5tZW51ZXMsXG4gICAgdGV4dENvbnRlbnQ6ICdPdXIgTWVudXMnXG59KVxuXG5jb25zdCBuYXY0ID0gZWxlbWVudEZhY3Rvcnkoe1xuICAgIHR5cGU6ICdhJyxcbiAgICBocmVmOiBwYXRocy5yZXNlcnZhdGlvbnMsXG4gICAgdGV4dENvbnRlbnQ6ICdSZXNlcnZhdGlvbnMnXG59KVxuXG5jb25zdCBuYXY1ID0gZWxlbWVudEZhY3Rvcnkoe1xuICAgIHR5cGU6ICdhJyxcbiAgICBocmVmOiBwYXRocy5jb250YWN0LFxuICAgIHRleHRDb250ZW50OiAnQ29udGFjdCdcbn0pXG5cbmNvbnN0IHJlZ3VsYXJMaW5rcyA9IFtuYXYxLCBuYXYyLCBuYXYzLCBuYXY0LCBuYXY1XTtcbmNvbnN0IHJlZ3VsYXJMaXN0ID0gbGlzdEZhY3RvcnkocmVndWxhckxpbmtzKTtcblxuLy8gU29jaWFsIE1lZGlhIExpbmtzXG4vLyBmYWNlYm9va1xuY29uc3QgZmJFbGUgPSBlbGVtZW50RmFjdG9yeSh7XG4gICAgdHlwZTogJ2EnLFxuICAgIGhyZWY6IHBhdGhzLmZhY2Vib29rLFxufSk7XG5cbmNvbnN0IGZiSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5mYkltZy5zcmMgPSBmYkljb247XG5cbmZiRWxlLmFwcGVuZENoaWxkKGZiSW1nKTtcblxuXG4vLyBJbnN0YWdyYW1cbmNvbnN0IGluc3RhRWxlID0gZWxlbWVudEZhY3Rvcnkoe1xuICAgIHR5cGU6ICdhJyxcbiAgICBocmVmOiBwYXRocy5pbnN0YWdyYW1cbn0pXG5cbmNvbnN0IGluc3RhSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5pbnN0YUltZy5zcmMgPSBpbnN0YUljb247XG5cbmluc3RhRWxlLmFwcGVuZENoaWxkKGluc3RhSW1nKTtcblxuLy8gU2lkZSBuYXYgYnV0dG9uXG5jb25zdCBzaWRlTmF2QnV0dG9uID0gZWxlbWVudEZhY3Rvcnkoe1xuICAgIHR5cGU6ICdpbWcnLFxuICAgIGNsYXNzTmFtZTogJ21lbnUtYnV0dG9uJyxcbiAgICBzcmM6IG1lbnVJY29uXG59KVxuXG5zaWRlTmF2QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNpZGVCYXIuY2xhc3NMaXN0LnRvZ2dsZSgnaW52aXMnKTtcbn0pXG5cbi8vIE1lZGlhIGRpdlxuY29uc3Qgc29jaWFsTGlua3MgPSBlbGVtZW50RmFjdG9yeSh7XG4gICAgdHlwZTogJ2RpdicsXG4gICAgY2xhc3NOYW1lOiAnc29jaWFsLWxpbmtzJ1xufSlcblxuc29jaWFsTGlua3MuYXBwZW5kQ2hpbGQoZmJFbGUpO1xuc29jaWFsTGlua3MuYXBwZW5kQ2hpbGQoaW5zdGFFbGUpO1xuc29jaWFsTGlua3MuYXBwZW5kQ2hpbGQoc2lkZU5hdkJ1dHRvbik7XG5cblxuLy8gQXBwZW5kXG5oZWFkZXIuYXBwZW5kQ2hpbGQobG9nb0VsZSlcbmhlYWRlci5hcHBlbmRDaGlsZChyZWd1bGFyTGlzdCk7XG5oZWFkZXIuYXBwZW5kQ2hpbGQoc29jaWFsTGlua3MpO1xuXG5cblxuXG4iLCJleHBvcnQgY29uc3QgbGlzdEZhY3RvcnkgPSAoaXRlbXMpID0+IHtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBcbiAgICBpdGVtcy5mb3JFYWNoKCBpdGVtID0+IHtcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBsaS5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChsaSk7IFxuICAgIH0pXG5cbiAgICByZXR1cm4gbGlzdDtcbn0iLCJleHBvcnQgY29uc3QgZ2V0U3RhdGUgPSAoKSA9PiB7XG4gICAgbGV0IGlzTW9iaWxlID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDc4MHB4KScpO1xuICAgIGxldCBpc1RhYmxldCA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiA3ODFweCkgYW5kIChtYXgtd2lkdGg6IDk2MHB4KScpO1xuICAgIGxldCBpc0Rlc2t0b3AgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogOTYxcHgpJyk7XG4gICAgXG4gICAgaWYgKGlzTW9iaWxlLm1hdGNoZXMpIHJldHVybiAnbW9iaWxlJztcbiAgICBpZiAoaXNUYWJsZXQubWF0Y2hlcykgcmV0dXJuICd0YWJsZXQnO1xuICAgIGlmIChpc0Rlc2t0b3AubWF0Y2hlcykgcmV0dXJuICdkZXNrdG9wJztcbn1cbiIsImV4cG9ydCBjb25zdCBwYXRocyA9IHtcbiAgICBob21lOiAgICAgICAgICAgJyMnLFxuICAgIG1lbnVlczogICAgICAgICAnIycsXG4gICAgYWJvdXQ6ICAgICAgICAgICcjJyxcbiAgICByZXNlcnZhdGlvbnM6ICAgJyMnLFxuICAgIGNvbnRhY3Q6ICAgICAgICAnIycsXG4gICAgZmFjZWJvb2s6ICAgICAgICcjJyxcbiAgICBpbnN0YWdyYW06ICAgICAgJyMnICAgICBcbn0iLCJpbXBvcnQgZWxlbWVudEZhY3RvcnkgZnJvbSAnLi9lbGVtZW50RmFjdG9yeSc7XG5pbXBvcnQgeyBsaXN0RmFjdG9yeSB9IGZyb20gJy4vbGlzdEZhY3RvcnknO1xuaW1wb3J0IHsgcGF0aHMgfSBmcm9tICcuL3BhdGhzJztcbmltcG9ydCB7IGdldFN0YXRlIH0gZnJvbSAnLi9wYWdlU3RhdGUnO1xuXG5jb25zdCBuYXYxID0gZWxlbWVudEZhY3Rvcnkoe1xuICAgIHR5cGU6ICdhJyxcbiAgICBocmVmOiBwYXRocy5ob21lLFxuICAgIHRleHRDb250ZW50OiAnSG9tZSdcbn0pXG5cbmNvbnN0IG5hdjIgPSBlbGVtZW50RmFjdG9yeSh7XG4gICAgdHlwZTogJ2EnLFxuICAgIGhyZWY6IHBhdGhzLmFib3V0LFxuICAgIHRleHRDb250ZW50OiAnQWJvdXQnXG59KVxuXG5jb25zdCBuYXYzID0gZWxlbWVudEZhY3Rvcnkoe1xuICAgIHR5cGU6ICdhJyxcbiAgICBocmVmOiBwYXRocy5tZW51ZXMsXG4gICAgdGV4dENvbnRlbnQ6ICdPdXIgTWVudXMnXG59KVxuXG5jb25zdCBuYXY0ID0gZWxlbWVudEZhY3Rvcnkoe1xuICAgIHR5cGU6ICdhJyxcbiAgICBocmVmOiBwYXRocy5yZXNlcnZhdGlvbnMsXG4gICAgdGV4dENvbnRlbnQ6ICdSZXNlcnZhdGlvbnMnXG59KVxuXG5jb25zdCBuYXY1ID0gZWxlbWVudEZhY3Rvcnkoe1xuICAgIHR5cGU6ICdhJyxcbiAgICBocmVmOiBwYXRocy5jb250YWN0LFxuICAgIHRleHRDb250ZW50OiAnQ29udGFjdCdcbn0pXG5cbmNvbnN0IHJlZ3VsYXJMaW5rcyA9IFtuYXYxLCBuYXYyLCBuYXYzLCBuYXY0LCBuYXY1XTtcbmNvbnN0IHJlZ3VsYXJMaXN0ID0gbGlzdEZhY3RvcnkocmVndWxhckxpbmtzKTtcblxuZXhwb3J0IGNvbnN0IHNpZGVCYXIgPSBlbGVtZW50RmFjdG9yeSh7XG4gICAgdHlwZTogJ2RpdicsXG4gICAgY2xhc3NOYW1lOiAnc2lkZS1uYXYgaW52aXMnXG59KVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT57XG5cbiAgICBpZiAoZ2V0U3RhdGUoKSAhPT0gJ21vYmlsZScpIHtcbiAgICAgICAgc2lkZUJhci5jbGFzc0xpc3QuYWRkKCdpbnZpcycpO1xuICAgIH1cbn0pXG5cbi8vIENsb3NlcyBtb2JpbGUgbWVudSB3aGVuIGFuIG91dCBvZiBib3VuZHMgY2xpY2sgaXMgZGV0ZWN0ZWRcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblxuICAgIGlmICghZS50YXJnZXQuY2xvc2VzdCgnLnNpZGUtbmF2JykpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJy5tZW51LWJ1dHRvbicpKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfSBlbHNlIGlmICghc2lkZUJhci5jbGFzc0xpc3QuY29udGFpbnMoJ2ludmlzJykpIHtcbiAgICAgICAgICAgIHNpZGVCYXIuY2xhc3NMaXN0LmFkZCgnaW52aXMnKVxuICAgICAgICB9XG4gICAgfVxufSlcblxuc2lkZUJhci5hcHBlbmRDaGlsZChyZWd1bGFyTGlzdCkiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9DZW50dXJ5R290aGljLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1nL3N1c2hpLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJDZW50dXJ5R290aGljXFxcIjtcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tbGluay12aXNpdGVkOiAjY2E5YzVlO1xcbiAgICAtLWRlZmF1bHQtZm9udDogQ2VudHVyeUdvdGhpYztcXG4gICAgLS1pY29uLXJhZGl1czogMTBweDtcXG4gICAgLS1sYXJnZS1pY29uLXNpemU6IDQwcHg7XFxuICAgIC0tbWVkaXVtLWljb24tc2l6ZTogMzBweDtcXG4gICAgLS1zbWFsbC1pY29uLXNpemU6IDMwcHg7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1kZWZhdWx0LWZvbnQpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmh0bWwgeyBcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDsgXFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogMTAwdnc7XFxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIEhlYWRlciBTdHlsZXMgKi9cXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHdpZHRoOiA4MHZ3O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIG1heC13aWR0aDogMTEwMHB4O1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5cXG5oZWFkZXIgYSwgLnNpZGUtbmF2IGEge1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZGVmYXVsdC1mb250KTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuYTpob3ZlciwgYTphY3RpdmUge1xcbiAgICBjb2xvcjogdmFyKC0tbGluay12aXNpdGVkKTtcXG59XFxuXFxuaGVhZGVyIGltZyB7XFxuICAgIHdpZHRoOiB2YXIoLS1sYXJnZS1pY29uLXNpemUpO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpXFxufVxcblxcbi5zb2NpYWwtbGlua3Mge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5oZWFkZXIgdWwge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5oZWFkZXIgYnV0dG9uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmxpIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLnNpZGUtbmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDgwdnc7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zaWRlLW5hdiB1bCBsaSB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLyogQ29udGVudCBTdHlsZXMgKi9cXG4uYmxvY2sxIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5ibG9jazEgKiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMjBweDtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDYwcHg7XFxufVxcblxcbi5ibG9jazEgaDEsIC5ibG9jazEgaDIge1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi5ibG9jXFxuXFxuLmJsb2NrMSAuYnV0dG9uLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBcXG59XFxuXFxuLmJ1dHRvbi1kaXYgZGl2IHtcXG4gICAgbWFyZ2luOiAxMHB4IDIwcHggMTBweCAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1saW5rLXZpc2l0ZWQpO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tbGluay12aXNpdGVkKTtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHggMCAyMHB4IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogcGFkZGluZywgY29sb3IsIG1hcmdpbjtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4yNXM7XFxufVxcblxcbi5idXR0b24tZGl2IGRpdjpob3ZlciB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIHBhZGRpbmc6IDMwcHggMCAzMHB4IDA7XFxuICAgIGNvbG9yOiB2YXIoLS1saW5rLXZpc2l0ZWQpXFxufVxcbi8qIFRhYmxldCBTdHlsZXMgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc4MHB4KSBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcXG5cXG4gICAgaGVhZGVyIC5tZW51LWJ1dHRvbiB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIGhlYWRlciBpbWcge1xcbiAgICAgICAgd2lkdGg6IHZhcigtLW1lZGl1bS1pY29uLXNpemUpO1xcbiAgICB9XFxuXFxuICAgIGhlYWRlciB1bCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB9XFxuXFxuICAgIC5ibG9jazEgLmJ1dHRvbi1kaXYge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgfVxcblxcbn1cXG5cXG4vKiBEZXNrdG9wIFN0eWxlcyAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYxcHgpIHtcXG5cXG4gICAgaGVhZGVyIC5tZW51LWJ1dHRvbiB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIGhlYWRlciBpbWcge1xcbiAgICAgICAgd2lkdGg6IHZhcigtLXNtYWxsLWljb24tc2l6ZSk7XFxuICAgIH1cXG5cXG4gICAgaGVhZGVyIHVsIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG5cXG4gICAgaGVhZGVyIHVsIGxpIHtcXG4gICAgICAgIG1hcmdpbjogMCAxMHB4IDAgMTBweDtcXG4gICAgfVxcblxcbiAgICAuYmxvY2sxIC5idXR0b24tZGl2IHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIH1cXG59XFxuXFxuLyogVG9nZ2xlcyAqL1xcbi5pbnZpcyB7XFxuICAgIGRpc3BsYXk6IG5vbmVcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDRCQUE0QjtJQUM1Qiw0Q0FBcUM7QUFDekM7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLGdDQUFnQztJQUNoQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUZBQWdFO0lBQ2hFLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUEsa0JBQWtCOztBQUVsQjtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQSxtQkFBbUI7QUFDbkI7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7OztJQUdJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGFBQWE7O0FBRWpCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQix5Q0FBeUM7SUFDekMsNENBQTRDO0lBQzVDLFlBQVk7SUFDWixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCOztJQUVsQiwyQ0FBMkM7SUFDM0MsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEI7QUFDSjtBQUNBLGtCQUFrQjtBQUNsQjs7SUFFSTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSw4QkFBOEI7SUFDbEM7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCOztBQUVKOztBQUVBLG1CQUFtQjtBQUNuQjs7SUFFSTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSw2QkFBNkI7SUFDakM7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0kscUJBQXFCO0lBQ3pCOztJQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0FBQ0o7O0FBRUEsWUFBWTtBQUNaO0lBQ0k7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJDZW50dXJ5R290aGljXFxcIjtcXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvQ2VudHVyeUdvdGhpYy50dGYnKTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWxpbmstdmlzaXRlZDogI2NhOWM1ZTtcXG4gICAgLS1kZWZhdWx0LWZvbnQ6IENlbnR1cnlHb3RoaWM7XFxuICAgIC0taWNvbi1yYWRpdXM6IDEwcHg7XFxuICAgIC0tbGFyZ2UtaWNvbi1zaXplOiA0MHB4O1xcbiAgICAtLW1lZGl1bS1pY29uLXNpemU6IDMwcHg7XFxuICAgIC0tc21hbGwtaWNvbi1zaXplOiAzMHB4O1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZGVmYXVsdC1mb250KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5odG1sIHsgXFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi9pbWcvc3VzaGkuanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7IFxcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBIZWFkZXIgU3R5bGVzICovXFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB3aWR0aDogODB2dztcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBtYXgtd2lkdGg6IDExMDBweDtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG59XFxuXFxuaGVhZGVyIGEsIC5zaWRlLW5hdiBhIHtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWRlZmF1bHQtZm9udCk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbmE6aG92ZXIsIGE6YWN0aXZlIHtcXG4gICAgY29sb3I6IHZhcigtLWxpbmstdmlzaXRlZCk7XFxufVxcblxcbmhlYWRlciBpbWcge1xcbiAgICB3aWR0aDogdmFyKC0tbGFyZ2UtaWNvbi1zaXplKTtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKVxcbn1cXG5cXG4uc29jaWFsLWxpbmtzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuaGVhZGVyIHVsIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuaGVhZGVyIGJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5saSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5zaWRlLW5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA4MHZ3O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2lkZS1uYXYgdWwgbGkge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxufVxcblxcbi8qIENvbnRlbnQgU3R5bGVzICovXFxuLmJsb2NrMSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogc3BhY2UtYmV0d2VlbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uYmxvY2sxICoge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IDIwcHg7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiA2MHB4O1xcbn1cXG5cXG4uYmxvY2sxIGgxLCAuYmxvY2sxIGgyIHtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG4uYmxvY1xcblxcbi5ibG9jazEgLmJ1dHRvbi1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgXFxufVxcblxcbi5idXR0b24tZGl2IGRpdiB7XFxuICAgIG1hcmdpbjogMTBweCAyMHB4IDEwcHggMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tbGluay12aXNpdGVkKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWxpbmstdmlzaXRlZCk7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4IDAgMjBweCAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHBhZGRpbmcsIGNvbG9yLCBtYXJnaW47XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMjVzO1xcbn1cXG5cXG4uYnV0dG9uLWRpdiBkaXY6aG92ZXIge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICBwYWRkaW5nOiAzMHB4IDAgMzBweCAwO1xcbiAgICBjb2xvcjogdmFyKC0tbGluay12aXNpdGVkKVxcbn1cXG4vKiBUYWJsZXQgU3R5bGVzICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3ODBweCkgYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XFxuXFxuICAgIGhlYWRlciAubWVudS1idXR0b24ge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICBoZWFkZXIgaW1nIHtcXG4gICAgICAgIHdpZHRoOiB2YXIoLS1tZWRpdW0taWNvbi1zaXplKTtcXG4gICAgfVxcblxcbiAgICBoZWFkZXIgdWwge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgfVxcblxcbiAgICAuYmxvY2sxIC5idXR0b24tZGl2IHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIH1cXG5cXG59XFxuXFxuLyogRGVza3RvcCBTdHlsZXMgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MXB4KSB7XFxuXFxuICAgIGhlYWRlciAubWVudS1idXR0b24ge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICBoZWFkZXIgaW1nIHtcXG4gICAgICAgIHdpZHRoOiB2YXIoLS1zbWFsbC1pY29uLXNpemUpO1xcbiAgICB9XFxuXFxuICAgIGhlYWRlciB1bCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB9XFxuXFxuICAgIGhlYWRlciB1bCBsaSB7XFxuICAgICAgICBtYXJnaW46IDAgMTBweCAwIDEwcHg7XFxuICAgIH1cXG5cXG4gICAgLmJsb2NrMSAuYnV0dG9uLWRpdiB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICB9XFxufVxcblxcbi8qIFRvZ2dsZXMgKi9cXG4uaW52aXMge1xcbiAgICBkaXNwbGF5OiBub25lXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHtoZWFkZXJ9IGZyb20gJy4vaGVhZGVyJztcbmltcG9ydCB7c2lkZUJhcn0gZnJvbSAnLi9zaWRlYmFyJztcbmltcG9ydCB7Y29udGVudDF9IGZyb20gJy4vY29udGVudDEnO1xuLy8gaW1wb3J0IGJhY2tncm91bmQgZnJvbSAnLi9pbWcvc3VzaGkuanBnJ1xuXG5leHBvcnQgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5tYWluLmNsYXNzTmFtZSA9ICdtYWluJztcbm1haW4uYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbm1haW4uYXBwZW5kQ2hpbGQoc2lkZUJhcik7XG5tYWluLmFwcGVuZENoaWxkKGNvbnRlbnQxKTtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluKTtcbiJdLCJuYW1lcyI6WyJlbGVtZW50RmFjdG9yeSIsImNvbnRlbnQxIiwidHlwZSIsImNsYXNzTmFtZSIsImgxIiwidGV4dENvbnRlbnQiLCJoMiIsIm1haW5NZW51QnV0dG9uIiwib3JkZXJPbmxpbmVCdXR0b24iLCJidXR0b25FbGUiLCJhcHBlbmRDaGlsZCIsIm9iaiIsInJlc3QiLCJlbGUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJwcm9wIiwiZmJJY29uIiwiaW5zdGFJY29uIiwibG9nb0ljb24iLCJtZW51SWNvbiIsInBhdGhzIiwibGlzdEZhY3RvcnkiLCJzaWRlQmFyIiwiaGVhZGVyIiwibG9nb0VsZSIsImhyZWYiLCJob21lIiwibG9nb0ltZyIsIkltYWdlIiwic3JjIiwibmF2MSIsIm5hdjIiLCJhYm91dCIsIm5hdjMiLCJtZW51ZXMiLCJuYXY0IiwicmVzZXJ2YXRpb25zIiwibmF2NSIsImNvbnRhY3QiLCJyZWd1bGFyTGlua3MiLCJyZWd1bGFyTGlzdCIsImZiRWxlIiwiZmFjZWJvb2siLCJmYkltZyIsImluc3RhRWxlIiwiaW5zdGFncmFtIiwiaW5zdGFJbWciLCJzaWRlTmF2QnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInNvY2lhbExpbmtzIiwiaXRlbXMiLCJsaXN0IiwiZm9yRWFjaCIsIml0ZW0iLCJsaSIsImdldFN0YXRlIiwiaXNNb2JpbGUiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwiaXNUYWJsZXQiLCJpc0Rlc2t0b3AiLCJtYXRjaGVzIiwiYWRkIiwiZSIsInRhcmdldCIsImNsb3Nlc3QiLCJjb250YWlucyIsIm1haW4iLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==