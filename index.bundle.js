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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"CenturyGothic\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n:root {\n  --link-visited: #ca9c5e;\n  --default-font: CenturyGothic;\n  --icon-radius: 10px;\n  --large-icon-size: 40px;\n  --medium-icon-size: 30px;\n  --small-icon-size: 30px;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: var(--default-font);\n  color: white;\n}\n\nhtml {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center center fixed;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  max-width: 100vw;\n  max-height: 100vh;\n}\n\n.main {\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  height: 100vh;\n  align-items: center;\n}\n\n/* Header Styles */\n\nheader {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 80vw;\n  flex-wrap: wrap;\n  max-width: 1100px;\n  margin-top: 50px;\n}\n\nheader a,\n.side-nav a {\n  font-family: var(--default-font);\n  text-decoration: none;\n  color: white;\n  padding: 5px;\n}\n\na:hover,\na:active {\n  color: var(--link-visited);\n}\n\nheader img {\n  width: var(--large-icon-size);\n  margin: 10px;\n  filter: invert(100%);\n}\n\n.social-links {\n  display: flex;\n}\n\nheader ul {\n  display: none;\n  list-style: none;\n}\n\nheader button {\n  display: block;\n}\n\nli {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n}\n\n.side-nav {\n  display: flex;\n  flex-direction: column;\n  width: 80vw;\n  align-items: center;\n}\n\n.side-nav ul li {\n  font-size: 30px;\n}\n\n/* Content Styles */\n.block1 {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: space-between;\n  height: 100%;\n}\n\n.block1 * {\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  margin: 20px;\n}\n\nh1 {\n  font-size: 60px;\n}\n\n.block1 h1,\n.block1 h2 {\n  font-weight: 400;\n  margin: 20px;\n}\n\n.bloc .block1 .button-div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 10px;\n}\n\n.button-div div {\n  margin: 10px 20px 10px 20px;\n  border-radius: 5px;\n  border-top: 2px solid var(--link-visited);\n  border-bottom: 2px solid var(--link-visited);\n  width: 150px;\n  height: 50px;\n  padding: 20px 0 20px 0;\n  display: flex;\n  align-items: center;\n  align-self: center;\n\n  transition-property: padding, color, margin;\n  transition-duration: 0.25s;\n}\n\n.button-div div:hover {\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 30px 0 30px 0;\n  color: var(--link-visited);\n  cursor: pointer;\n}\n/* Tablet Styles */\n@media only screen and (min-width: 780px) and (max-width: 960px) {\n  header .menu-button {\n    display: none;\n  }\n\n  header img {\n    width: var(--medium-icon-size);\n  }\n\n  header ul {\n    display: flex;\n  }\n\n  .block1 .button-div {\n    flex-direction: row;\n  }\n}\n\n/* Desktop Styles */\n@media only screen and (min-width: 961px) {\n  header .menu-button {\n    display: none;\n  }\n\n  header img {\n    width: var(--small-icon-size);\n  }\n\n  header ul {\n    display: flex;\n  }\n\n  header ul li {\n    margin: 0 10px 0 10px;\n  }\n\n  .block1 .button-div {\n    flex-direction: row;\n  }\n}\n\n/* Toggles */\n.invis {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,4BAA4B;EAC5B,4CAAqC;AACvC;;AAEA;EACE,uBAAuB;EACvB,6BAA6B;EAC7B,mBAAmB;EACnB,uBAAuB;EACvB,wBAAwB;EACxB,uBAAuB;AACzB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,gCAAgC;EAChC,YAAY;AACd;;AAEA;EACE,iFAAgE;EAChE,8BAA8B;EAC9B,2BAA2B;EAC3B,yBAAyB;EACzB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,aAAa;EACb,mBAAmB;AACrB;;AAEA,kBAAkB;;AAElB;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,WAAW;EACX,eAAe;EACf,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;;EAEE,gCAAgC;EAChC,qBAAqB;EACrB,YAAY;EACZ,YAAY;AACd;;AAEA;;EAEE,0BAA0B;AAC5B;;AAEA;EACE,6BAA6B;EAC7B,YAAY;EACZ,oBAAoB;AACtB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA,mBAAmB;AACnB;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,0BAA0B;EAC1B,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA;;EAEE,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,2BAA2B;EAC3B,kBAAkB;EAClB,yCAAyC;EACzC,4CAA4C;EAC5C,YAAY;EACZ,YAAY;EACZ,sBAAsB;EACtB,aAAa;EACb,mBAAmB;EACnB,kBAAkB;;EAElB,2CAA2C;EAC3C,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,sBAAsB;EACtB,0BAA0B;EAC1B,eAAe;AACjB;AACA,kBAAkB;AAClB;EACE;IACE,aAAa;EACf;;EAEA;IACE,8BAA8B;EAChC;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,mBAAmB;EACrB;AACF;;AAEA,mBAAmB;AACnB;EACE;IACE,aAAa;EACf;;EAEA;IACE,6BAA6B;EAC/B;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,qBAAqB;EACvB;;EAEA;IACE,mBAAmB;EACrB;AACF;;AAEA,YAAY;AACZ;EACE,aAAa;AACf","sourcesContent":["@font-face {\n  font-family: \"CenturyGothic\";\n  src: url(\"./fonts/CenturyGothic.ttf\");\n}\n\n:root {\n  --link-visited: #ca9c5e;\n  --default-font: CenturyGothic;\n  --icon-radius: 10px;\n  --large-icon-size: 40px;\n  --medium-icon-size: 30px;\n  --small-icon-size: 30px;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: var(--default-font);\n  color: white;\n}\n\nhtml {\n  background: url(\"./img/sushi.jpg\") no-repeat center center fixed;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  max-width: 100vw;\n  max-height: 100vh;\n}\n\n.main {\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  height: 100vh;\n  align-items: center;\n}\n\n/* Header Styles */\n\nheader {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 80vw;\n  flex-wrap: wrap;\n  max-width: 1100px;\n  margin-top: 50px;\n}\n\nheader a,\n.side-nav a {\n  font-family: var(--default-font);\n  text-decoration: none;\n  color: white;\n  padding: 5px;\n}\n\na:hover,\na:active {\n  color: var(--link-visited);\n}\n\nheader img {\n  width: var(--large-icon-size);\n  margin: 10px;\n  filter: invert(100%);\n}\n\n.social-links {\n  display: flex;\n}\n\nheader ul {\n  display: none;\n  list-style: none;\n}\n\nheader button {\n  display: block;\n}\n\nli {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n}\n\n.side-nav {\n  display: flex;\n  flex-direction: column;\n  width: 80vw;\n  align-items: center;\n}\n\n.side-nav ul li {\n  font-size: 30px;\n}\n\n/* Content Styles */\n.block1 {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: space-between;\n  height: 100%;\n}\n\n.block1 * {\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  margin: 20px;\n}\n\nh1 {\n  font-size: 60px;\n}\n\n.block1 h1,\n.block1 h2 {\n  font-weight: 400;\n  margin: 20px;\n}\n\n.bloc .block1 .button-div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 10px;\n}\n\n.button-div div {\n  margin: 10px 20px 10px 20px;\n  border-radius: 5px;\n  border-top: 2px solid var(--link-visited);\n  border-bottom: 2px solid var(--link-visited);\n  width: 150px;\n  height: 50px;\n  padding: 20px 0 20px 0;\n  display: flex;\n  align-items: center;\n  align-self: center;\n\n  transition-property: padding, color, margin;\n  transition-duration: 0.25s;\n}\n\n.button-div div:hover {\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 30px 0 30px 0;\n  color: var(--link-visited);\n  cursor: pointer;\n}\n/* Tablet Styles */\n@media only screen and (min-width: 780px) and (max-width: 960px) {\n  header .menu-button {\n    display: none;\n  }\n\n  header img {\n    width: var(--medium-icon-size);\n  }\n\n  header ul {\n    display: flex;\n  }\n\n  .block1 .button-div {\n    flex-direction: row;\n  }\n}\n\n/* Desktop Styles */\n@media only screen and (min-width: 961px) {\n  header .menu-button {\n    display: none;\n  }\n\n  header img {\n    width: var(--small-icon-size);\n  }\n\n  header ul {\n    display: flex;\n  }\n\n  header ul li {\n    margin: 0 10px 0 10px;\n  }\n\n  .block1 .button-div {\n    flex-direction: row;\n  }\n}\n\n/* Toggles */\n.invis {\n  display: none;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDVztBQUNFO0FBQ0U7QUFDcEM7O0FBRU8sTUFBTTZCLElBQUksR0FBR3hELFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztBQUVqRHVELElBQUksQ0FBQ25FLFNBQVMsR0FBRyxNQUFNO0FBQ3ZCbUUsSUFBSSxDQUFDNUQsV0FBVyxDQUFDYywyQ0FBTSxDQUFDO0FBQ3hCOEMsSUFBSSxDQUFDNUQsV0FBVyxDQUFDYSw2Q0FBTyxDQUFDO0FBQ3pCK0MsSUFBSSxDQUFDNUQsV0FBVyxDQUFDVCwrQ0FBUSxDQUFDO0FBRTFCYSxRQUFRLENBQUN5RCxJQUFJLENBQUM3RCxXQUFXLENBQUM0RCxJQUFJLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9jb250ZW50MS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvZWxlbWVudEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvbGlzdEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL3BhZ2VTdGF0ZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvcGF0aHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVsZW1lbnRGYWN0b3J5IGZyb20gXCIuL2VsZW1lbnRGYWN0b3J5XCI7XG5cbmV4cG9ydCBjb25zdCBjb250ZW50MSA9IGVsZW1lbnRGYWN0b3J5KHtcbiAgICB0eXBlOiAnZGl2JyxcbiAgICBjbGFzc05hbWU6ICdibG9jazEnXG59KVxuXG5jb25zdCBoMSA9IGVsZW1lbnRGYWN0b3J5KHtcbiAgICB0eXBlOiAnaDEnLFxuICAgIHRleHRDb250ZW50OiAnRmxhdm91ciwgcHJlY2lzaW9uIGFuZCBwZXJmZWN0aW9uJ1xufSlcblxuY29uc3QgaDIgPSBlbGVtZW50RmFjdG9yeSh7XG4gICAgdHlwZTogJ2gyJyxcbiAgICB0ZXh0Q29udGVudDogXCJKYW5lIERvZSdzIERpbmVyIGlzIGEgZGluZXIgb3duZWQgYnkgSmFuZSBEb2UuIFdlIHNlcnZlIGZvb2QgYW5kIGRyaW5rcy5cIlxufSlcblxuY29uc3QgbWFpbk1lbnVCdXR0b24gPSBlbGVtZW50RmFjdG9yeSh7XG4gICAgdHlwZTogJ2RpdicsXG4gICAgdGV4dENvbnRlbnQ6ICdWSUVXIE1BSU4gTUVOVSdcbn0pXG5cblxuY29uc3Qgb3JkZXJPbmxpbmVCdXR0b24gPSBlbGVtZW50RmFjdG9yeSh7XG4gICAgdHlwZTogJ2RpdicsXG4gICAgdGV4dENvbnRlbnQ6ICdPUkRFUiBPTkxJTkUnXG59KVxuXG5jb25zdCBidXR0b25FbGUgPSBlbGVtZW50RmFjdG9yeSh7XG4gICAgdHlwZTogJ2RpdicsXG4gICAgY2xhc3NOYW1lOiAnYnV0dG9uLWRpdidcbn0pXG5cbmJ1dHRvbkVsZS5hcHBlbmRDaGlsZChtYWluTWVudUJ1dHRvbilcbmJ1dHRvbkVsZS5hcHBlbmRDaGlsZChvcmRlck9ubGluZUJ1dHRvbilcblxuXG5jb250ZW50MS5hcHBlbmRDaGlsZChoMSk7XG5jb250ZW50MS5hcHBlbmRDaGlsZChoMik7XG5jb250ZW50MS5hcHBlbmRDaGlsZChidXR0b25FbGUpO1xuIiwiLy8gR2VuZXJhdGVzIGFuIGVsZW1lbnQgYmFzZWQgb24gdGhlIGFyZ3VtZW50IG9iamVjdFxuLy8gYWxsIHByb3BzIGJlc2lkZXMgdHlwZSBtdXN0IGJlIHZhbGlkIHByb3BlcnRpZXMgb2YgYSBET00gZWxlbWVudCAoaHJlZiwgdGV4dENvbnRlbnQuLi4pXG4vLyB0aGUgY2hpbGRyZW4gcHJvcGVydHkgbXVzdCBiZSBhIERPTSBlbGVtZW50IChyZWN1cnNpb24gdG8gZml4PylcbmV4cG9ydCBkZWZhdWx0IChvYmopID0+IHtcbiAgICBjb25zdCB7dHlwZSwgLi4ucmVzdH0gPSBvYmo7XG5cbiAgICBjb25zdCBlbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIGZvciAobGV0IHByb3AgaW4gcmVzdCkge1xuICAgICAgICBpZiAodHlwZW9mIGVsZVtwcm9wXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgZWxlW3Byb3BdKHJlc3RbcHJvcF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlW3Byb3BdID0gcmVzdFtwcm9wXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlbGU7ICAgIFxufSIsImltcG9ydCBlbGVtZW50RmFjdG9yeSBmcm9tIFwiLi9lbGVtZW50RmFjdG9yeVwiO1xuaW1wb3J0IGZiSWNvbiBmcm9tICcuL2ltZy9mYi1pY29uLnN2Zyc7XG5pbXBvcnQgaW5zdGFJY29uIGZyb20gJy4vaW1nL2luc3RhLWljb24uc3ZnJztcbmltcG9ydCBsb2dvSWNvbiBmcm9tICcuL2ltZy9yZXN0YXVyYW50LWxvZ28uc3ZnJztcbmltcG9ydCBtZW51SWNvbiBmcm9tICcuL2ltZy9tZW51LWljb24uc3ZnJztcbmltcG9ydCB7IHBhdGhzIH0gZnJvbSAnLi9wYXRocyc7XG5pbXBvcnQgeyBsaXN0RmFjdG9yeSB9IGZyb20gXCIuL2xpc3RGYWN0b3J5XCI7XG5pbXBvcnQgeyBzaWRlQmFyIH0gZnJvbSBcIi4vc2lkZWJhclwiO1xuXG5cblxuZXhwb3J0IGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuXG4vLyBMb2dvXG5cbmNvbnN0IGxvZ29FbGUgPSBlbGVtZW50RmFjdG9yeSh7XG4gICAgdHlwZTogJ2EnLFxuICAgIGhyZWY6IHBhdGhzLmhvbWUsXG59KVxuXG5jb25zdCBsb2dvSW1nID0gbmV3IEltYWdlKCk7ICBcbmxvZ29JbWcuc3JjID0gbG9nb0ljb247XG5cbmxvZ29FbGUuYXBwZW5kQ2hpbGQobG9nb0ltZyk7XG5cbi8vIE5hdiBsaW5rc1xuY29uc3QgbmF2MSA9IGVsZW1lbnRGYWN0b3J5KHtcbiAgICB0eXBlOiAnYScsXG4gICAgaHJlZjogcGF0aHMuaG9tZSxcbiAgICB0ZXh0Q29udGVudDogJ0hvbWUnXG59KVxuXG5jb25zdCBuYXYyID0gZWxlbWVudEZhY3Rvcnkoe1xuICAgIHR5cGU6ICdhJyxcbiAgICBocmVmOiBwYXRocy5hYm91dCxcbiAgICB0ZXh0Q29udGVudDogJ0Fib3V0J1xufSlcblxuY29uc3QgbmF2MyA9IGVsZW1lbnRGYWN0b3J5KHtcbiAgICB0eXBlOiAnYScsXG4gICAgaHJlZjogcGF0aHMubWVudWVzLFxuICAgIHRleHRDb250ZW50OiAnT3VyIE1lbnVzJ1xufSlcblxuY29uc3QgbmF2NCA9IGVsZW1lbnRGYWN0b3J5KHtcbiAgICB0eXBlOiAnYScsXG4gICAgaHJlZjogcGF0aHMucmVzZXJ2YXRpb25zLFxuICAgIHRleHRDb250ZW50OiAnUmVzZXJ2YXRpb25zJ1xufSlcblxuY29uc3QgbmF2NSA9IGVsZW1lbnRGYWN0b3J5KHtcbiAgICB0eXBlOiAnYScsXG4gICAgaHJlZjogcGF0aHMuY29udGFjdCxcbiAgICB0ZXh0Q29udGVudDogJ0NvbnRhY3QnXG59KVxuXG5jb25zdCByZWd1bGFyTGlua3MgPSBbbmF2MSwgbmF2MiwgbmF2MywgbmF2NCwgbmF2NV07XG5jb25zdCByZWd1bGFyTGlzdCA9IGxpc3RGYWN0b3J5KHJlZ3VsYXJMaW5rcyk7XG5cbi8vIFNvY2lhbCBNZWRpYSBMaW5rc1xuLy8gZmFjZWJvb2tcbmNvbnN0IGZiRWxlID0gZWxlbWVudEZhY3Rvcnkoe1xuICAgIHR5cGU6ICdhJyxcbiAgICBocmVmOiBwYXRocy5mYWNlYm9vayxcbn0pO1xuXG5jb25zdCBmYkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuZmJJbWcuc3JjID0gZmJJY29uO1xuXG5mYkVsZS5hcHBlbmRDaGlsZChmYkltZyk7XG5cblxuLy8gSW5zdGFncmFtXG5jb25zdCBpbnN0YUVsZSA9IGVsZW1lbnRGYWN0b3J5KHtcbiAgICB0eXBlOiAnYScsXG4gICAgaHJlZjogcGF0aHMuaW5zdGFncmFtXG59KVxuXG5jb25zdCBpbnN0YUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuaW5zdGFJbWcuc3JjID0gaW5zdGFJY29uO1xuXG5pbnN0YUVsZS5hcHBlbmRDaGlsZChpbnN0YUltZyk7XG5cbi8vIFNpZGUgbmF2IGJ1dHRvblxuY29uc3Qgc2lkZU5hdkJ1dHRvbiA9IGVsZW1lbnRGYWN0b3J5KHtcbiAgICB0eXBlOiAnaW1nJyxcbiAgICBjbGFzc05hbWU6ICdtZW51LWJ1dHRvbicsXG4gICAgc3JjOiBtZW51SWNvblxufSlcblxuc2lkZU5hdkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzaWRlQmFyLmNsYXNzTGlzdC50b2dnbGUoJ2ludmlzJyk7XG59KVxuXG4vLyBNZWRpYSBkaXZcbmNvbnN0IHNvY2lhbExpbmtzID0gZWxlbWVudEZhY3Rvcnkoe1xuICAgIHR5cGU6ICdkaXYnLFxuICAgIGNsYXNzTmFtZTogJ3NvY2lhbC1saW5rcydcbn0pXG5cbnNvY2lhbExpbmtzLmFwcGVuZENoaWxkKGZiRWxlKTtcbnNvY2lhbExpbmtzLmFwcGVuZENoaWxkKGluc3RhRWxlKTtcbnNvY2lhbExpbmtzLmFwcGVuZENoaWxkKHNpZGVOYXZCdXR0b24pO1xuXG5cbi8vIEFwcGVuZFxuaGVhZGVyLmFwcGVuZENoaWxkKGxvZ29FbGUpXG5oZWFkZXIuYXBwZW5kQ2hpbGQocmVndWxhckxpc3QpO1xuaGVhZGVyLmFwcGVuZENoaWxkKHNvY2lhbExpbmtzKTtcblxuXG5cblxuIiwiZXhwb3J0IGNvbnN0IGxpc3RGYWN0b3J5ID0gKGl0ZW1zKSA9PiB7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgXG4gICAgaXRlbXMuZm9yRWFjaCggaXRlbSA9PiB7XG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQobGkpOyBcbiAgICB9KVxuXG4gICAgcmV0dXJuIGxpc3Q7XG59IiwiZXhwb3J0IGNvbnN0IGdldFN0YXRlID0gKCkgPT4ge1xuICAgIGxldCBpc01vYmlsZSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA3ODBweCknKTtcbiAgICBsZXQgaXNUYWJsZXQgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogNzgxcHgpIGFuZCAobWF4LXdpZHRoOiA5NjBweCknKTtcbiAgICBsZXQgaXNEZXNrdG9wID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDk2MXB4KScpO1xuICAgIFxuICAgIGlmIChpc01vYmlsZS5tYXRjaGVzKSByZXR1cm4gJ21vYmlsZSc7XG4gICAgaWYgKGlzVGFibGV0Lm1hdGNoZXMpIHJldHVybiAndGFibGV0JztcbiAgICBpZiAoaXNEZXNrdG9wLm1hdGNoZXMpIHJldHVybiAnZGVza3RvcCc7XG59XG4iLCJleHBvcnQgY29uc3QgcGF0aHMgPSB7XG4gICAgaG9tZTogICAgICAgICAgICcjJyxcbiAgICBtZW51ZXM6ICAgICAgICAgJyMnLFxuICAgIGFib3V0OiAgICAgICAgICAnIycsXG4gICAgcmVzZXJ2YXRpb25zOiAgICcjJyxcbiAgICBjb250YWN0OiAgICAgICAgJyMnLFxuICAgIGZhY2Vib29rOiAgICAgICAnIycsXG4gICAgaW5zdGFncmFtOiAgICAgICcjJyAgICAgXG59IiwiaW1wb3J0IGVsZW1lbnRGYWN0b3J5IGZyb20gJy4vZWxlbWVudEZhY3RvcnknO1xuaW1wb3J0IHsgbGlzdEZhY3RvcnkgfSBmcm9tICcuL2xpc3RGYWN0b3J5JztcbmltcG9ydCB7IHBhdGhzIH0gZnJvbSAnLi9wYXRocyc7XG5pbXBvcnQgeyBnZXRTdGF0ZSB9IGZyb20gJy4vcGFnZVN0YXRlJztcblxuY29uc3QgbmF2MSA9IGVsZW1lbnRGYWN0b3J5KHtcbiAgICB0eXBlOiAnYScsXG4gICAgaHJlZjogcGF0aHMuaG9tZSxcbiAgICB0ZXh0Q29udGVudDogJ0hvbWUnXG59KVxuXG5jb25zdCBuYXYyID0gZWxlbWVudEZhY3Rvcnkoe1xuICAgIHR5cGU6ICdhJyxcbiAgICBocmVmOiBwYXRocy5hYm91dCxcbiAgICB0ZXh0Q29udGVudDogJ0Fib3V0J1xufSlcblxuY29uc3QgbmF2MyA9IGVsZW1lbnRGYWN0b3J5KHtcbiAgICB0eXBlOiAnYScsXG4gICAgaHJlZjogcGF0aHMubWVudWVzLFxuICAgIHRleHRDb250ZW50OiAnT3VyIE1lbnVzJ1xufSlcblxuY29uc3QgbmF2NCA9IGVsZW1lbnRGYWN0b3J5KHtcbiAgICB0eXBlOiAnYScsXG4gICAgaHJlZjogcGF0aHMucmVzZXJ2YXRpb25zLFxuICAgIHRleHRDb250ZW50OiAnUmVzZXJ2YXRpb25zJ1xufSlcblxuY29uc3QgbmF2NSA9IGVsZW1lbnRGYWN0b3J5KHtcbiAgICB0eXBlOiAnYScsXG4gICAgaHJlZjogcGF0aHMuY29udGFjdCxcbiAgICB0ZXh0Q29udGVudDogJ0NvbnRhY3QnXG59KVxuXG5jb25zdCByZWd1bGFyTGlua3MgPSBbbmF2MSwgbmF2MiwgbmF2MywgbmF2NCwgbmF2NV07XG5jb25zdCByZWd1bGFyTGlzdCA9IGxpc3RGYWN0b3J5KHJlZ3VsYXJMaW5rcyk7XG5cbmV4cG9ydCBjb25zdCBzaWRlQmFyID0gZWxlbWVudEZhY3Rvcnkoe1xuICAgIHR5cGU6ICdkaXYnLFxuICAgIGNsYXNzTmFtZTogJ3NpZGUtbmF2IGludmlzJ1xufSlcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+e1xuXG4gICAgaWYgKGdldFN0YXRlKCkgIT09ICdtb2JpbGUnKSB7XG4gICAgICAgIHNpZGVCYXIuY2xhc3NMaXN0LmFkZCgnaW52aXMnKTtcbiAgICB9XG59KVxuXG4vLyBDbG9zZXMgbW9iaWxlIG1lbnUgd2hlbiBhbiBvdXQgb2YgYm91bmRzIGNsaWNrIGlzIGRldGVjdGVkXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cbiAgICBpZiAoIWUudGFyZ2V0LmNsb3Nlc3QoJy5zaWRlLW5hdicpKSB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KCcubWVudS1idXR0b24nKSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH0gZWxzZSBpZiAoIXNpZGVCYXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnZpcycpKSB7XG4gICAgICAgICAgICBzaWRlQmFyLmNsYXNzTGlzdC5hZGQoJ2ludmlzJylcbiAgICAgICAgfVxuICAgIH1cbn0pXG5cbnNpZGVCYXIuYXBwZW5kQ2hpbGQocmVndWxhckxpc3QpIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvQ2VudHVyeUdvdGhpYy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltZy9zdXNoaS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkNlbnR1cnlHb3RoaWNcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWxpbmstdmlzaXRlZDogI2NhOWM1ZTtcXG4gIC0tZGVmYXVsdC1mb250OiBDZW50dXJ5R290aGljO1xcbiAgLS1pY29uLXJhZGl1czogMTBweDtcXG4gIC0tbGFyZ2UtaWNvbi1zaXplOiA0MHB4O1xcbiAgLS1tZWRpdW0taWNvbi1zaXplOiAzMHB4O1xcbiAgLS1zbWFsbC1pY29uLXNpemU6IDMwcHg7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogdmFyKC0tZGVmYXVsdC1mb250KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuaHRtbCB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWF4LXdpZHRoOiAxMDB2dztcXG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogSGVhZGVyIFN0eWxlcyAqL1xcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiA4MHZ3O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgbWF4LXdpZHRoOiAxMTAwcHg7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5cXG5oZWFkZXIgYSxcXG4uc2lkZS1uYXYgYSB7XFxuICBmb250LWZhbWlseTogdmFyKC0tZGVmYXVsdC1mb250KTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuYTpob3ZlcixcXG5hOmFjdGl2ZSB7XFxuICBjb2xvcjogdmFyKC0tbGluay12aXNpdGVkKTtcXG59XFxuXFxuaGVhZGVyIGltZyB7XFxuICB3aWR0aDogdmFyKC0tbGFyZ2UtaWNvbi1zaXplKTtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xcbn1cXG5cXG4uc29jaWFsLWxpbmtzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmhlYWRlciB1bCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuaGVhZGVyIGJ1dHRvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxubGkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLnNpZGUtbmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDgwdnc7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2lkZS1uYXYgdWwgbGkge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4vKiBDb250ZW50IFN0eWxlcyAqL1xcbi5ibG9jazEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBzcGFjZS1iZXR3ZWVuO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uYmxvY2sxICoge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDYwcHg7XFxufVxcblxcbi5ibG9jazEgaDEsXFxuLmJsb2NrMSBoMiB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG4uYmxvYyAuYmxvY2sxIC5idXR0b24tZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uYnV0dG9uLWRpdiBkaXYge1xcbiAgbWFyZ2luOiAxMHB4IDIwcHggMTBweCAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLWxpbmstdmlzaXRlZCk7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tbGluay12aXNpdGVkKTtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIHBhZGRpbmc6IDIwcHggMCAyMHB4IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHBhZGRpbmcsIGNvbG9yLCBtYXJnaW47XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjI1cztcXG59XFxuXFxuLmJ1dHRvbi1kaXYgZGl2OmhvdmVyIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgcGFkZGluZzogMzBweCAwIDMwcHggMDtcXG4gIGNvbG9yOiB2YXIoLS1saW5rLXZpc2l0ZWQpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4vKiBUYWJsZXQgU3R5bGVzICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3ODBweCkgYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XFxuICBoZWFkZXIgLm1lbnUtYnV0dG9uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIGhlYWRlciBpbWcge1xcbiAgICB3aWR0aDogdmFyKC0tbWVkaXVtLWljb24tc2l6ZSk7XFxuICB9XFxuXFxuICBoZWFkZXIgdWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcblxcbiAgLmJsb2NrMSAuYnV0dG9uLWRpdiB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB9XFxufVxcblxcbi8qIERlc2t0b3AgU3R5bGVzICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjFweCkge1xcbiAgaGVhZGVyIC5tZW51LWJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICBoZWFkZXIgaW1nIHtcXG4gICAgd2lkdGg6IHZhcigtLXNtYWxsLWljb24tc2l6ZSk7XFxuICB9XFxuXFxuICBoZWFkZXIgdWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcblxcbiAgaGVhZGVyIHVsIGxpIHtcXG4gICAgbWFyZ2luOiAwIDEwcHggMCAxMHB4O1xcbiAgfVxcblxcbiAgLmJsb2NrMSAuYnV0dG9uLWRpdiB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB9XFxufVxcblxcbi8qIFRvZ2dsZXMgKi9cXG4uaW52aXMge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDRCQUE0QjtFQUM1Qiw0Q0FBcUM7QUFDdkM7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGdDQUFnQztFQUNoQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpRkFBZ0U7RUFDaEUsOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQSxrQkFBa0I7O0FBRWxCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLGdDQUFnQztFQUNoQyxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUEsbUJBQW1CO0FBQ25CO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIseUNBQXlDO0VBQ3pDLDRDQUE0QztFQUM1QyxZQUFZO0VBQ1osWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjs7RUFFbEIsMkNBQTJDO0VBQzNDLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLDBCQUEwQjtFQUMxQixlQUFlO0FBQ2pCO0FBQ0Esa0JBQWtCO0FBQ2xCO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7QUFDRjs7QUFFQSxtQkFBbUI7QUFDbkI7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBLFlBQVk7QUFDWjtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ2VudHVyeUdvdGhpY1xcXCI7XFxuICBzcmM6IHVybChcXFwiLi9mb250cy9DZW50dXJ5R290aGljLnR0ZlxcXCIpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWxpbmstdmlzaXRlZDogI2NhOWM1ZTtcXG4gIC0tZGVmYXVsdC1mb250OiBDZW50dXJ5R290aGljO1xcbiAgLS1pY29uLXJhZGl1czogMTBweDtcXG4gIC0tbGFyZ2UtaWNvbi1zaXplOiA0MHB4O1xcbiAgLS1tZWRpdW0taWNvbi1zaXplOiAzMHB4O1xcbiAgLS1zbWFsbC1pY29uLXNpemU6IDMwcHg7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogdmFyKC0tZGVmYXVsdC1mb250KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuaHRtbCB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vaW1nL3N1c2hpLmpwZ1xcXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWF4LXdpZHRoOiAxMDB2dztcXG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogSGVhZGVyIFN0eWxlcyAqL1xcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiA4MHZ3O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgbWF4LXdpZHRoOiAxMTAwcHg7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5cXG5oZWFkZXIgYSxcXG4uc2lkZS1uYXYgYSB7XFxuICBmb250LWZhbWlseTogdmFyKC0tZGVmYXVsdC1mb250KTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuYTpob3ZlcixcXG5hOmFjdGl2ZSB7XFxuICBjb2xvcjogdmFyKC0tbGluay12aXNpdGVkKTtcXG59XFxuXFxuaGVhZGVyIGltZyB7XFxuICB3aWR0aDogdmFyKC0tbGFyZ2UtaWNvbi1zaXplKTtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xcbn1cXG5cXG4uc29jaWFsLWxpbmtzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmhlYWRlciB1bCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuaGVhZGVyIGJ1dHRvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxubGkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLnNpZGUtbmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDgwdnc7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2lkZS1uYXYgdWwgbGkge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4vKiBDb250ZW50IFN0eWxlcyAqL1xcbi5ibG9jazEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBzcGFjZS1iZXR3ZWVuO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uYmxvY2sxICoge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDYwcHg7XFxufVxcblxcbi5ibG9jazEgaDEsXFxuLmJsb2NrMSBoMiB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG4uYmxvYyAuYmxvY2sxIC5idXR0b24tZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uYnV0dG9uLWRpdiBkaXYge1xcbiAgbWFyZ2luOiAxMHB4IDIwcHggMTBweCAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLWxpbmstdmlzaXRlZCk7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tbGluay12aXNpdGVkKTtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIHBhZGRpbmc6IDIwcHggMCAyMHB4IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHBhZGRpbmcsIGNvbG9yLCBtYXJnaW47XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjI1cztcXG59XFxuXFxuLmJ1dHRvbi1kaXYgZGl2OmhvdmVyIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgcGFkZGluZzogMzBweCAwIDMwcHggMDtcXG4gIGNvbG9yOiB2YXIoLS1saW5rLXZpc2l0ZWQpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4vKiBUYWJsZXQgU3R5bGVzICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3ODBweCkgYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XFxuICBoZWFkZXIgLm1lbnUtYnV0dG9uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIGhlYWRlciBpbWcge1xcbiAgICB3aWR0aDogdmFyKC0tbWVkaXVtLWljb24tc2l6ZSk7XFxuICB9XFxuXFxuICBoZWFkZXIgdWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcblxcbiAgLmJsb2NrMSAuYnV0dG9uLWRpdiB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB9XFxufVxcblxcbi8qIERlc2t0b3AgU3R5bGVzICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjFweCkge1xcbiAgaGVhZGVyIC5tZW51LWJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICBoZWFkZXIgaW1nIHtcXG4gICAgd2lkdGg6IHZhcigtLXNtYWxsLWljb24tc2l6ZSk7XFxuICB9XFxuXFxuICBoZWFkZXIgdWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcblxcbiAgaGVhZGVyIHVsIGxpIHtcXG4gICAgbWFyZ2luOiAwIDEwcHggMCAxMHB4O1xcbiAgfVxcblxcbiAgLmJsb2NrMSAuYnV0dG9uLWRpdiB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB9XFxufVxcblxcbi8qIFRvZ2dsZXMgKi9cXG4uaW52aXMge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQge2hlYWRlcn0gZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IHtzaWRlQmFyfSBmcm9tICcuL3NpZGViYXInO1xuaW1wb3J0IHtjb250ZW50MX0gZnJvbSAnLi9jb250ZW50MSc7XG4vLyBpbXBvcnQgYmFja2dyb3VuZCBmcm9tICcuL2ltZy9zdXNoaS5qcGcnXG5cbmV4cG9ydCBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbm1haW4uY2xhc3NOYW1lID0gJ21haW4nO1xubWFpbi5hcHBlbmRDaGlsZChoZWFkZXIpO1xubWFpbi5hcHBlbmRDaGlsZChzaWRlQmFyKTtcbm1haW4uYXBwZW5kQ2hpbGQoY29udGVudDEpO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW4pO1xuIl0sIm5hbWVzIjpbImVsZW1lbnRGYWN0b3J5IiwiY29udGVudDEiLCJ0eXBlIiwiY2xhc3NOYW1lIiwiaDEiLCJ0ZXh0Q29udGVudCIsImgyIiwibWFpbk1lbnVCdXR0b24iLCJvcmRlck9ubGluZUJ1dHRvbiIsImJ1dHRvbkVsZSIsImFwcGVuZENoaWxkIiwib2JqIiwicmVzdCIsImVsZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInByb3AiLCJmYkljb24iLCJpbnN0YUljb24iLCJsb2dvSWNvbiIsIm1lbnVJY29uIiwicGF0aHMiLCJsaXN0RmFjdG9yeSIsInNpZGVCYXIiLCJoZWFkZXIiLCJsb2dvRWxlIiwiaHJlZiIsImhvbWUiLCJsb2dvSW1nIiwiSW1hZ2UiLCJzcmMiLCJuYXYxIiwibmF2MiIsImFib3V0IiwibmF2MyIsIm1lbnVlcyIsIm5hdjQiLCJyZXNlcnZhdGlvbnMiLCJuYXY1IiwiY29udGFjdCIsInJlZ3VsYXJMaW5rcyIsInJlZ3VsYXJMaXN0IiwiZmJFbGUiLCJmYWNlYm9vayIsImZiSW1nIiwiaW5zdGFFbGUiLCJpbnN0YWdyYW0iLCJpbnN0YUltZyIsInNpZGVOYXZCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwic29jaWFsTGlua3MiLCJpdGVtcyIsImxpc3QiLCJmb3JFYWNoIiwiaXRlbSIsImxpIiwiZ2V0U3RhdGUiLCJpc01vYmlsZSIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJpc1RhYmxldCIsImlzRGVza3RvcCIsIm1hdGNoZXMiLCJhZGQiLCJlIiwidGFyZ2V0IiwiY2xvc2VzdCIsImNvbnRhaW5zIiwibWFpbiIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9