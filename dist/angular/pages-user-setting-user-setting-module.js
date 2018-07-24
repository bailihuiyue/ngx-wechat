(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-setting-user-setting-module"],{

/***/ "./src/app/pages/user-setting/user-setting.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/user-setting/user-setting.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-setting\">\n  <div class=\"header\">\n    <app-header-button [imgSrc]=\"imgBack\" [href]=\"backHref\"></app-header-button>\n    <div class=\"title\">详细资料</div>\n  </div>\n  <div class=\"body\" (touchstart)=\"grey($event)\" (touchend)=\"normal($event)\">\n    <div class=\"userSetting clearfix section alone\">\n      <div class=\"left avatar-wrap\">\n        <img  class=\"avatar\" src=\"{{imgBaseUrl}}avatar/{{avatar}}\" routerLink=\"/userDetail/{{id}}/{{name}}/{{avatar}}\" />\n        <div class=\"name\">{{name}}</div>\n      </div>\n      <img class=\"left add\" src=\"{{imgBaseUrl}}add.svg\" alt=\"\">\n    </div>\n    <div class=\"alone section\">\n      <span class=\"text\">聊天小程序</span>\n      <span class=\"right xiaochengxu clearfix\">\n        <img class=\"x1\" src=\"{{imgBaseUrl}}userSetting/taobao.png\" alt=\"\">\n        <img class=\"x2\" src=\"{{imgBaseUrl}}userSetting/eleme.png\" alt=\"\">\n        <img class=\"x3\" src=\"{{imgBaseUrl}}userSetting/wangyi.png\" alt=\"\">\n      </span>\n    </div>\n    <div class=\"alone section\">\n      <span class=\"text\">查找聊天记录</span>\n    </div>\n    <div class=\"section\">\n      <span class=\"text\">置顶聊天</span>\n      <app-chekbox [operate]=\"'zhiding'\" [uid]=\"id\"></app-chekbox>\n      <hr>\n    </div>\n    <div class=\"section\">\n      <span class=\"text\">消息免打扰</span>\n      <app-chekbox [operate]=\"'miandarao'\" [uid]=\"id\"></app-chekbox>\n    </div>\n    <div class=\"alone section\">\n      <span class=\"text\">设置当前聊天背景</span>\n    </div>\n    <div class=\"alone section\">\n      <span class=\"text\">清空聊天记录</span>\n    </div>\n    <div class=\"alone section\">\n        <span class=\"text\">投诉</span>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/user-setting/user-setting.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/user-setting/user-setting.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.user-setting {\n  position: absolute;\n  top: 50px;\n  width: 100%;\n  background-color: #F1F1F1; }\n.user-setting .header .title {\n    position: absolute;\n    top: 0;\n    left: 50px;\n    line-height: 50px;\n    font-size: 26px;\n    color: #fff; }\n.user-setting .body {\n    height: 100%;\n    /*TODO:info:解决子元素margin-top影响父元素的问题*/\n    padding: 1px 0; }\n.user-setting .body .userSetting {\n      height: 100px; }\n.user-setting .body .userSetting .avatar, .user-setting .body .userSetting .add {\n        width: 60px;\n        margin-top: 10px;\n        margin-right: 20px;\n        border: 1px solid #D8D8D8;\n        display: block; }\n.user-setting .body .userSetting .add {\n        padding: 10px; }\n.user-setting .body .userSetting .avatar-wrap {\n        height: 100%; }\n.user-setting .body .userSetting .name {\n        height: 25px;\n        font-size: 14px;\n        line-height: 25px;\n        text-align: center;\n        width: 60px;\n        color: #878787; }\n.user-setting .body hr {\n      border: none;\n      padding: 0;\n      height: 0px;\n      border-top: 1px solid #D8D8D8; }\n.user-setting .body .alone {\n      margin: 20px 0; }\n.user-setting .body .section {\n      padding: 0 20px;\n      line-height: 50px;\n      background-color: #fff; }\n.user-setting .body .section .text {\n        vertical-align: middle;\n        font-size: 16px; }\n.user-setting .body .section app-chekbox {\n        float: right;\n        margin-top: 13px; }\n.user-setting .body .xiaochengxu {\n      position: relative; }\n.user-setting .body .xiaochengxu img {\n        width: 27px;\n        padding: 3px;\n        border-radius: 50%;\n        position: absolute;\n        top: 13px;\n        background-color: #fff; }\n.user-setting .body .xiaochengxu .x1 {\n        right: 0px; }\n.user-setting .body .xiaochengxu .x2 {\n        right: 15px; }\n.user-setting .body .xiaochengxu .x3 {\n        right: 30px; }\n"

/***/ }),

/***/ "./src/app/pages/user-setting/user-setting.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/user-setting/user-setting.component.ts ***!
  \**************************************************************/
/*! exports provided: UserSettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSettingComponent", function() { return UserSettingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _anim_translateX__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../anim/translateX */ "./src/app/anim/translateX.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var UserSettingComponent = /** @class */ (function () {
    function UserSettingComponent(config, router, activatedRoute) {
        this.config = config;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.imgBack = "../../../assets/images/headers/back.png";
        this.backHref = "back";
        this.imgBaseUrl = "";
        this.id = "";
        this.name = "";
        this.avatar = "";
    }
    UserSettingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.imgBaseUrl = this.config.imgBaseUrl;
        this.activatedRoute.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.name = params['name'];
            _this.avatar = params['avatar'];
        });
    };
    UserSettingComponent.prototype.grey = function (e) {
        if (e.target.className.indexOf("section") >= 0) {
            e.target.style.backgroundColor = "#E2E2E2";
        }
    };
    UserSettingComponent.prototype.normal = function (e) {
        if (e.target.className.indexOf("section") >= 0) {
            e.target.style.backgroundColor = "#FFFFFF";
        }
    };
    UserSettingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-setting',
            template: __webpack_require__(/*! ./user-setting.component.html */ "./src/app/pages/user-setting/user-setting.component.html"),
            styles: [__webpack_require__(/*! ./user-setting.component.scss */ "./src/app/pages/user-setting/user-setting.component.scss")],
            animations: [_anim_translateX__WEBPACK_IMPORTED_MODULE_1__["leftInRightLeave"]],
            host: { '[@leftInRightLeave]': '' }
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_CONFIG')),
        __metadata("design:paramtypes", [Object, _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], UserSettingComponent);
    return UserSettingComponent;
}());



/***/ }),

/***/ "./src/app/pages/user-setting/user-setting.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/user-setting/user-setting.module.ts ***!
  \***********************************************************/
/*! exports provided: UserSettingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSettingModule", function() { return UserSettingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_setting_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-setting.component */ "./src/app/pages/user-setting/user-setting.component.ts");
/* harmony import */ var _user_setting_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-setting.routing.module */ "./src/app/pages/user-setting/user-setting.routing.module.ts");
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/index */ "./src/app/components/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var UserSettingModule = /** @class */ (function () {
    function UserSettingModule() {
    }
    UserSettingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _user_setting_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserSettingRoutingModule"],
                _components_index__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [_user_setting_component__WEBPACK_IMPORTED_MODULE_2__["UserSettingComponent"]]
        })
    ], UserSettingModule);
    return UserSettingModule;
}());



/***/ }),

/***/ "./src/app/pages/user-setting/user-setting.routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/user-setting/user-setting.routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: UserSettingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSettingRoutingModule", function() { return UserSettingRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_setting_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-setting.component */ "./src/app/pages/user-setting/user-setting.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _user_setting_component__WEBPACK_IMPORTED_MODULE_2__["UserSettingComponent"] }
];
var UserSettingRoutingModule = /** @class */ (function () {
    function UserSettingRoutingModule() {
    }
    UserSettingRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], UserSettingRoutingModule);
    return UserSettingRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-user-setting-user-setting-module.js.map