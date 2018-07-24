(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-search-search-module"],{

/***/ "./src/app/pages/search/search.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/search/search.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ss<div class=\"search-page\">\r\n  <div class=\"search-header\">\r\n    <div class=\"back\" (click)=\"runBack()\" (touchstart)=\"changeGrey($event)\">\r\n      <img src=\"./assets/images/back.png\" alt=\"\">\r\n    </div>\r\n    <div class=\"search\">\r\n      <input type=\"text\" placeholder=\"搜索\" />\r\n    </div>\r\n  </div>\r\n  <div class=\"body\">\r\n    <div class=\"tip\">搜索指定内容</div>\r\n    <div class=\"row\">\r\n      <div class=\"col-4\">朋友圈</div>\r\n      <div class=\"col-4\">文章</div>\r\n      <div class=\"col-4\">公众号</div>\r\n      <div class=\"col-4\">小说</div>\r\n      <div class=\"col-4\">音乐</div>\r\n      <div class=\"col-4\">表情</div>\r\n      <div class=\"col-4\" (touchend)=\"reset()\">重置</div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/search/search.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/search/search.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-page {\n  background-color: #F2F2F2;\n  height: 100%;\n  position: absolute;\n  width: 100%; }\n  .search-page .search-header {\n    width: 100%;\n    height: 50px;\n    margin-top: 10px; }\n  .search-page .search-header .back {\n      width: 15%;\n      float: left;\n      height: 41px;\n      text-align: center; }\n  .search-page .search-header .back img {\n        height: 80%; }\n  .search-page .search-header .search {\n      width: 85%;\n      float: right; }\n  .search-page .search-header .search input {\n        width: 100%;\n        border: none;\n        height: 35px;\n        border-bottom: 1px solid #29B228;\n        font-size: 24px;\n        outline: none;\n        padding-left: 5px;\n        line-height: 30px;\n        padding-bottom: 5px;\n        background-color: #F2F2F2;\n        background-image: url(\"/./assetsmicrophone.png\");\n        background-repeat: no-repeat;\n        background-size: 40px;\n        background-position: 96%; }\n  .search-page .search-header .search input::-webkit-input-placeholder {\n        color: #D4D4D4; }\n  .search-page .search-header .search input::-moz-placeholder {\n        /* Mozilla Firefox 19+ */\n        color: #D4D4D4; }\n  .search-page .search-header .search input:-moz-placeholder {\n        /* Mozilla Firefox 4 to 18 */\n        color: #D4D4D4; }\n  .search-page .search-header .search input:-ms-input-placeholder {\n        /* Internet Explorer 10-11 */\n        color: #D4D4D4; }\n  .search-page .body {\n    text-align: center;\n    margin-top: 50px; }\n  .search-page .body .tip {\n      width: 100%;\n      font-size: 22px;\n      color: #B6B6B6; }\n  .search-page .body .row {\n      margin-top: 10px; }\n  .search-page .body .row .col-4 {\n        float: left;\n        width: 33.333%;\n        color: #29B228;\n        text-align: center;\n        padding: 20px 0;\n        font-size: 20px; }\n"

/***/ }),

/***/ "./src/app/pages/search/search.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/search/search.component.ts ***!
  \**************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _anim_fade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../anim/fade */ "./src/app/anim/fade.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchComponent = /** @class */ (function () {
    function SearchComponent(routeInfo, store) {
        this.routeInfo = routeInfo;
        this.store = store;
    }
    SearchComponent.prototype.ngOnInit = function () {
        //TODO:检测redux是否生效
        this.store.dispatch({ type: this.routeInfo.snapshot["data"]["state"] });
    };
    SearchComponent.prototype.runBack = function () {
        window.history.back();
    };
    SearchComponent.prototype.changeGrey = function (e) {
        e.target.style.backgroundColor = "#B6B6B6";
    };
    SearchComponent.prototype.reset = function () {
        localStorage.removeItem("unread");
        localStorage.removeItem("zhiding");
        localStorage.removeItem("miandarao");
        $("input").css("color", "red").val("所有操作已重置");
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/pages/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/pages/search/search.component.scss")],
            animations: [_anim_fade__WEBPACK_IMPORTED_MODULE_3__["fadeIn"]],
            host: { '[@fadeIn]': '' }
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/pages/search/search.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/search/search.module.ts ***!
  \***********************************************/
/*! exports provided: SearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.routing.module */ "./src/app/pages/search/search.routing.module.ts");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.component */ "./src/app/pages/search/search.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchModule = /** @class */ (function () {
    function SearchModule() {
    }
    SearchModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _search_routing_module__WEBPACK_IMPORTED_MODULE_1__["SearchRoutingModule"]
            ],
            declarations: [
                _search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"]
            ]
        })
    ], SearchModule);
    return SearchModule;
}());



/***/ }),

/***/ "./src/app/pages/search/search.routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/search/search.routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SearchRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRoutingModule", function() { return SearchRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.component */ "./src/app/pages/search/search.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"] }
];
var SearchRoutingModule = /** @class */ (function () {
    function SearchRoutingModule() {
    }
    SearchRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], SearchRoutingModule);
    return SearchRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-search-search-module.js.map