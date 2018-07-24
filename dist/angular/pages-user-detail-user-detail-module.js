(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-detail-user-detail-module"],{

/***/ "./src/app/pages/user-detail/user-detail.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/user-detail/user-detail.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-detail\">\r\n  <div class=\"header\">\r\n    <app-header-button [imgSrc]=\"imgBack\" [href]=\"userDetailHref\"></app-header-button>\r\n    <div class=\"title\">详细资料</div>\r\n    <app-header-button [imgSrc]=\"imgMore\" [href]=\"hrefMore\" [style]=\"styleMore\"></app-header-button>\r\n  </div>\r\n  <div class=\"body user-detail-body\">\r\n    <div class=\"content content1 clearfix\">\r\n      <div class=\"avatar\" (touchend)=\"showLargeAvatar()\">\r\n        <img class=\"\" src=\"{{imgUrl}}{{avatar}}\" alt=\"\">\r\n      </div>\r\n      <div class=\"info-wrap\">\r\n        <div class=\"info1\">\r\n          <span>{{name}}</span>\r\n          <img src=\"{{imgBaseUrl}}sex/{{userDetail?'male':'female'}}.png\" alt=\"\" class=\"sex\">\r\n        </div>\r\n        <div class=\"info2\">微信号: {{userDetail.weChatNo}}</div>\r\n        <div class=\"info3\">昵称: {{userDetail.nickName}}</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"content content2\">\r\n      <div class=\"info-wrap\" *ngIf=\"userDetail.label&&userDetail.phone else elsetpl\">\r\n        <div class=\"phone\">\r\n          <span>电话号码</span>{{userDetail.phone}}</div>\r\n        <hr>\r\n        <div class=\"label\">\r\n          <span>标签</span>{{userDetail.label}}</div>\r\n      </div>\r\n      <ng-template #elsetpl>\r\n        <div class=\"remarks\">设置备注和标签</div>\r\n      </ng-template>\r\n    </div>\r\n    <div class=\"content content3\">\r\n      <div class=\"area\">\r\n        <span>地区</span>{{userDetail.area}}</div>\r\n      <hr>\r\n      <div (touchstart)=\"touched($event)\" (touchend)=\"normal($event)\" class=\"album\">\r\n        <span>个人相册</span>\r\n        <div class=\"img-wrap\">\r\n          <img src=\"{{imgBaseUrl}}moments/{{img}}\" alt=\"\" *ngFor=\"let img of userDetail.album;let i=index\" [hidden]=\"i>2\">\r\n        </div>\r\n      </div>\r\n      <hr>\r\n      <div class=\"more\">\r\n        <span>更多</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"content4\">\r\n      <a (touchstart)=\"touched($event)\" (touchend)=\"normal($event)\" class=\"sendMsg\">发消息</a>\r\n      <a (touchstart)=\"touched($event)\" (touchend)=\"normal($event)\" class=\"call\">视频通话</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div [@scaleTLAnim] class=\"largeAvatar\" *ngIf=\"showAvatar\" (touchend)=\"closeLargeAvatar()\">\r\n  <img src=\"{{imgUrl}}{{avatar}}\" alt=\"\">\r\n</div>\r\n<app-mask></app-mask>"

/***/ }),

/***/ "./src/app/pages/user-detail/user-detail.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/user-detail/user-detail.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-detail {\n  background-color: #1D1C1F; }\n  .user-detail hr {\n    border: none;\n    padding: 0;\n    margin: 0;\n    height: 0px;\n    border-top: 1px solid #D8D8D8; }\n  .user-detail .header .title {\n    position: absolute;\n    top: 0;\n    left: 50px;\n    line-height: 50px;\n    font-size: 26px;\n    color: #fff; }\n  .user-detail .body {\n    position: absolute;\n    top: 50px;\n    background-color: #EBEBEB;\n    width: 100%;\n    bottom: 0; }\n  .user-detail .body .content {\n      background-color: #fff;\n      margin-top: 30px; }\n  .user-detail .body .content1 .avatar {\n      height: 70px;\n      width: 70px;\n      margin: 10px;\n      float: left; }\n  .user-detail .body .content1 .avatar img {\n        width: 100%; }\n  .user-detail .body .content1 .info-wrap {\n      float: left;\n      margin: 10px 0 0 20px; }\n  .user-detail .body .content1 .info-wrap .info1 {\n        font-size: 17px;\n        font-weight: bold; }\n  .user-detail .body .content1 .info-wrap .info1 .sex {\n          width: 20px;\n          margin-left: 10px; }\n  .user-detail .body .content1 .info-wrap .info1 span, .user-detail .body .content1 .info-wrap .info1 img {\n          vertical-align: middle; }\n  .user-detail .body .content1 .info-wrap .info2 {\n        color: #ACACAC;\n        font-size: 14px; }\n  .user-detail .body .content1 .info-wrap .info3 {\n        color: #ACACAC;\n        font-size: 14px; }\n  .user-detail .body .content2 .info-wrap {\n      margin: 0 10px; }\n  .user-detail .body .content2 .info-wrap .phone {\n        color: #54688B; }\n  .user-detail .body .content2 .info-wrap .label {\n        color: #A9A9A9; }\n  .user-detail .body .content2 .info-wrap .phone, .user-detail .body .content2 .info-wrap .label {\n        padding: 10px 0;\n        font-size: 18px; }\n  .user-detail .body .content2 .info-wrap .phone span, .user-detail .body .content2 .info-wrap .label span {\n          font-weight: bold;\n          margin-right: 10px;\n          display: inline-block;\n          width: 100px;\n          color: #000; }\n  .user-detail .body .content2 .remarks {\n      font-weight: bold;\n      display: inline-block;\n      color: #000;\n      padding: 10px 0;\n      margin: 0 10px; }\n  .user-detail .body .content3 .area, .user-detail .body .content3 .album, .user-detail .body .content3 .more {\n      font-weight: bold;\n      color: #A9A9A9;\n      padding: 10px 0;\n      margin: 0 10px;\n      font-size: 16px;\n      font-weight: 400; }\n  .user-detail .body .content3 .album {\n      width: 100%;\n      margin: 0;\n      padding-left: 10px;\n      min-height: 80px;\n      position: relative; }\n  .user-detail .body .content3 .album .img-wrap {\n        position: relative;\n        left: 110px;\n        top: 5px; }\n  .user-detail .body .content3 .album .img-wrap img {\n          width: 18%;\n          margin-right: 10px; }\n  .user-detail .body .content3 .album span {\n        position: absolute;\n        top: 50%;\n        -webkit-transform: translateY(-50%);\n                transform: translateY(-50%); }\n  .user-detail .body .content3 span {\n      color: #000;\n      display: inline-block;\n      width: 100px;\n      font-size: 18px;\n      font-weight: bold;\n      margin-right: 10px; }\n  .user-detail .body .content4 {\n      text-align: center;\n      background-color: #EBEBEB;\n      padding: 20px 0; }\n  .user-detail .body .content4 a {\n        height: 50px;\n        margin: 20px 10px;\n        display: block;\n        border-radius: 5px;\n        line-height: 50px;\n        font-size: 18px;\n        -webkit-user-select: none;\n           -moz-user-select: none;\n            -ms-user-select: none;\n                user-select: none; }\n  .user-detail .body .content4 .sendMsg {\n        background-color: #1AAC19;\n        color: #fff; }\n  .user-detail .body .content4 .call {\n        background-color: #fff;\n        color: #000; }\n  .largeAvatar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #000;\n  z-index: 1; }\n  .largeAvatar img {\n    width: 100%;\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n"

/***/ }),

/***/ "./src/app/pages/user-detail/user-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/user-detail/user-detail.component.ts ***!
  \************************************************************/
/*! exports provided: UserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function() { return UserDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _anim_translateX__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../anim/translateX */ "./src/app/anim/translateX.ts");
/* harmony import */ var _services_get_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/get-users.service */ "./src/app/services/get-users.service.ts");
/* harmony import */ var _anim_scale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../anim/scale */ "./src/app/anim/scale.ts");
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





var UserDetailComponent = /** @class */ (function () {
    function UserDetailComponent(config, router, activatedRoute, userService$) {
        this.config = config;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.userService$ = userService$;
        //app-header-button
        this.imgBack = "/assets/images/headers/back.png";
        this.userDetailHref = "back";
        this.imgMore = "/assets/images/headers/more.png";
        this.hrefMore = "userDetailMore";
        this.styleMore = { 'position': 'absolute', 'top': '0', 'right': '0px' };
        this.id = "";
        this.name = "";
        this.avatar = "";
        this.imgUrl = "";
        this.userDetail = {};
        //放大头像
        this.showAvatar = false;
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.imgUrl = this.config.imgUrl;
        this.imgBaseUrl = this.config.imgBaseUrl;
        this.activatedRoute.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.name = params['name'];
            _this.avatar = params['avatar'];
            //userService取值为异步取值,所以在这行下面写log()打印出来的只能是undefined
            _this.userService$.getUserDetail().subscribe(function (data) {
                if (data[_this.id]) {
                    _this.userDetail = data[_this.id];
                }
                else {
                    _this.userDetail = data['default'];
                }
            });
        });
    };
    UserDetailComponent.prototype.touched = function (e) {
        var ele = $(e.currentTarget), color, fontColor;
        if (ele.is(".album")) {
            color = "#F0F0F0";
        }
        else if (ele.is(".sendMsg")) {
            //TODO:info:a标签一般使用:active即可,可是chrome pc浏览器模拟时发现了延迟,故用js实现
            color = "#268609";
            fontColor = "#E2E2E2";
        }
        else if (ele.is(".call")) {
            color = "#E2E2E2";
            fontColor = "#878787";
        }
        $(ele).css({ "backgroundColor": color, "color": fontColor });
    };
    UserDetailComponent.prototype.normal = function (e) {
        var ele = $(e.currentTarget), color, fontColor;
        if (ele.is(".album")) {
            color = "#FFFFFF";
            this.router.navigateByUrl("/moments/" + this.id + "/" + this.name + "/" + this.avatar);
        }
        else if (ele.is(".sendMsg")) {
            color = "#1AAC19";
            fontColor = "#fff";
            if (this.id === "me") {
                this.router.navigateByUrl("userDetail/" + this.id + "/" + this.name + "/" + this.avatar);
            }
            else {
                this.router.navigateByUrl("chatDetail/" + this.id + "/" + this.name + "/" + this.avatar + "/0");
            }
        }
        else if (ele.is(".call")) {
            color = "#fff";
            fontColor = "#000";
            alert("敬请期待");
        }
        $(ele).css({ "backgroundColor": color, "color": fontColor });
    };
    UserDetailComponent.prototype.showLargeAvatar = function () {
        this.showAvatar = true;
    };
    UserDetailComponent.prototype.closeLargeAvatar = function () {
        this.showAvatar = false;
    };
    UserDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-detail',
            template: __webpack_require__(/*! ./user-detail.component.html */ "./src/app/pages/user-detail/user-detail.component.html"),
            styles: [__webpack_require__(/*! ./user-detail.component.scss */ "./src/app/pages/user-detail/user-detail.component.scss")],
            animations: [_anim_translateX__WEBPACK_IMPORTED_MODULE_2__["leftInRightLeave"], _anim_scale__WEBPACK_IMPORTED_MODULE_4__["scaleTopLeftAnimation"]],
            host: { '[@leftInRightLeave]': '' }
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_CONFIG')),
        __metadata("design:paramtypes", [Object, _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_get_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]])
    ], UserDetailComponent);
    return UserDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/user-detail/user-detail.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/user-detail/user-detail.module.ts ***!
  \*********************************************************/
/*! exports provided: UserDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailModule", function() { return UserDetailModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-detail.component */ "./src/app/pages/user-detail/user-detail.component.ts");
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/index */ "./src/app/components/index.ts");
/* harmony import */ var _user_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-detail.routing.module */ "./src/app/pages/user-detail/user-detail.routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var UserDetailModule = /** @class */ (function () {
    function UserDetailModule() {
    }
    UserDetailModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _user_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__["ChatDetailRoutingModule"],
                _components_index__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ],
            declarations: [_user_detail_component__WEBPACK_IMPORTED_MODULE_2__["UserDetailComponent"]]
        })
    ], UserDetailModule);
    return UserDetailModule;
}());



/***/ }),

/***/ "./src/app/pages/user-detail/user-detail.routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/user-detail/user-detail.routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ChatDetailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatDetailRoutingModule", function() { return ChatDetailRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-detail.component */ "./src/app/pages/user-detail/user-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _user_detail_component__WEBPACK_IMPORTED_MODULE_2__["UserDetailComponent"] }
];
var ChatDetailRoutingModule = /** @class */ (function () {
    function ChatDetailRoutingModule() {
    }
    ChatDetailRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], ChatDetailRoutingModule);
    return ChatDetailRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-user-detail-user-detail-module.js.map