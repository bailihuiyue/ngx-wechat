(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-moments-moments-module"],{

/***/ "./src/app/pages/moments/moments.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/moments/moments.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"moments\">\r\n  <div class=\"header\">\r\n    <app-header-button btnColor=\"transparent\" [imgSrc]=\"imgBack\" [style]='styleBack' [href]=\"backHref\"></app-header-button>\r\n    <app-header-button btnColor=\"transparent\" *ngIf=\"id==='me'\" [imgSrc]=\"imgCamera\" [href]=\"hrefCamera\" [style]=\"styleCamera\"></app-header-button>\r\n  </div>\r\n  <div class=\"body\">\r\n    <img class=\"bg\" src=\"{{imgBaseUrl}}moments/{{moments.bg}}\" alt=\"\">\r\n    <div class=\"user-avatar\">\r\n      <div class=\"nickName\" [ngStyle]=\"{'top':avatarTop-30+'px'}\">{{name}}</div>\r\n      <img src=\"{{imgBaseUrl}}avatar/{{avatar}}\" routerLink=\"/userDetail/{{id}}/{{name}}/{{avatar}}\" alt=\"\" [ngStyle]=\"{'top':avatarTop-50+'px'}\">\r\n    </div>\r\n    <div class=\"moment-items\">\r\n      <div class=\"moment clearfix\" *ngFor=\"let item of moments.moments\">\r\n        <div class=\"clearfix\">\r\n          <div *ngIf=\"id==='me' else elseTemplate\">\r\n            <img class=\"moment-avatar left\" routerLink=\"/userDetail/{{item.id}}/{{item.name}}/{{item.avatar}}\" src=\"{{imgBaseUrl}}avatar/{{item.avatar}}\"\r\n              (touched)=\"jumpToUserDetail()\" />\r\n          </div>\r\n          <ng-template #elseTemplate>\r\n            <div class=\"others left\">\r\n              <div class=\"time\">\r\n                <span class=\"time0\">{{item.time[0]}}</span>\r\n                <span class=\"time1\" *ngIf=\"item.time[1]\">\r\n                    {{item.time[1]}}月\r\n                </span>\r\n              </div>\r\n              <div class=\"area\">{{item.area}}</div>\r\n            </div>\r\n          </ng-template>\r\n          <div class=\"left second\">\r\n            <div class=\"uname\">{{item.name}}</div>\r\n            <!-- TODO:info:这里有一个坑,如果ngSwitchCase的值是一个字符串,那么就要用单引号'包含起来 -->\r\n            <div [ngSwitch]=\"item.type\">\r\n              <div *ngSwitchCase=\"'img'\">\r\n                <img class=\"item-img\" src=\"{{imgBaseUrl}}moments/{{item.item}}\" alt=\"\">\r\n              </div>\r\n              <div *ngSwitchCase=\"'imgs'\" class=\"clearfix\">\r\n                <img class=\"imgGroup\" *ngFor=\"let pic of item.item\" src=\"{{imgBaseUrl}}moments/{{pic}}\" />\r\n              </div>\r\n              <div *ngSwitchCase=\"'text'\" class=\"text\">\r\n                {{item.item}}\r\n              </div>\r\n              <div *ngSwitchCase=\"'news'\" class=\"clearfix news\">\r\n                <img class=\"left\" src=\"{{imgBaseUrl}}moments/{{item.thumb}}\" alt=\"\">\r\n                <div class=\"text left\">{{item.item}}</div>\r\n              </div>\r\n              <div *ngSwitchDefault></div>\r\n            </div>\r\n            <div [hidden]=\"id!=='me'\">\r\n              <div class=\"time left\">{{item.time}}</div>\r\n              <div class=\"button right\">\r\n                <img src=\"{{imgBaseUrl}}moments/comment.png\" alt=\"\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div [hidden]=\"id==='me'\">\r\n            <div style=\"width:100%;height:20px\"></div>\r\n          </div>\r\n        <div [hidden]=\"id!=='me'\">\r\n          <hr>\r\n        </div>\r\n      </div>\r\n      <div [hidden]=\"id=='me'\" class=\"momoent-end\">- 朋友仅展示最近三天的朋友圈 -</div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/moments/moments.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/moments/moments.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".moments .header {\n  background-color: transparent; }\n\n.moments .body .bg {\n  width: 100%; }\n\n.moments .body .user-avatar .nickName {\n  position: absolute;\n  right: 110px;\n  font-weight: bold;\n  color: #fff; }\n\n.moments .body .user-avatar img {\n  width: 80px;\n  padding: 2px;\n  border: 1px solid #C0C0C880;\n  position: absolute;\n  right: 15px;\n  background-color: #fff; }\n\n.moments .body .moment-items {\n  margin-top: 30px; }\n\n.moments .body .moment-items .moment .moment-avatar {\n    width: 15%;\n    margin: 3%; }\n\n.moments .body .moment-items .moment .uname {\n    margin-bottom: 5px;\n    color: #778298;\n    margin-top: 10px;\n    font-size: 18px; }\n\n.moments .body .moment-items .moment .item-img {\n    width: 200px; }\n\n.moments .body .moment-items .moment .second {\n    width: 75%; }\n\n.moments .body .moment-items .moment .time {\n    color: #878787;\n    margin-top: 10px; }\n\n.moments .body .moment-items .moment .button {\n    margin-top: 10px; }\n\n.moments .body .moment-items .moment .button img {\n      width: 20px;\n      vertical-align: middle; }\n\n.moments .body .moment-items .moment .imgGroup {\n    width: 38%;\n    margin: 1%;\n    display: block;\n    float: left; }\n\n.moments .body .moment-items .moment .news {\n    background-color: #f3f3f3;\n    height: 50px; }\n\n.moments .body .moment-items .moment .news img {\n      width: 13%;\n      height: 40px;\n      margin: 2%; }\n\n.moments .body .moment-items .moment .news .text {\n      width: 80%;\n      display: -webkit-box;\n      -webkit-line-clamp: 2;\n      overflow: hidden; }\n\n.moments .body .moment-items .moment .text {\n    background-color: #f3f3f3;\n    font-size: 14px;\n    margin-top: 10px; }\n\n.moments .body .moment-items .moment .others {\n    margin-right: 10px;\n    margin-left: 10px; }\n\n.moments .body .moment-items .moment .others .time {\n      font-size: 20px;\n      color: #000; }\n\n.moments .body .moment-items .moment .others .time span {\n        text-align: left; }\n\n.moments .body .moment-items .moment .others .time .time1 {\n        font-size: 14px; }\n\n.moments .body .moment-items .moment .others .area {\n      font-size: 14px;\n      color: #878787; }\n\n.moments .body .moment-items .momoent-end {\n    text-align: center;\n    font-size: 14px;\n    color: #878787;\n    margin: 20px 0; }\n\n.moments .body .left-section {\n  float: left; }\n\nhr {\n  margin: 10px 0;\n  border: none;\n  padding: 0;\n  height: 0px;\n  border-top: 1px solid #D8D8D8; }\n"

/***/ }),

/***/ "./src/app/pages/moments/moments.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/moments/moments.component.ts ***!
  \****************************************************/
/*! exports provided: MomentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MomentsComponent", function() { return MomentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _anim_translateX__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../anim/translateX */ "./src/app/anim/translateX.ts");
/* harmony import */ var _services_moments_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/moments.service */ "./src/app/services/moments.service.ts");
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




var MomentsComponent = /** @class */ (function () {
    function MomentsComponent(config, router, activatedRoute, momentsService$) {
        this.config = config;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.momentsService$ = momentsService$;
        this.imgBack = "./assets/images/headers/back.png";
        this.backHref = "back";
        this.styleBack = { 'background-color': 'transparent', 'position': 'absolute', 'top': '0', 'left': '0' };
        this.imgCamera = "./assets/images/moments/camera.png";
        this.hrefCamera = "others";
        this.styleCamera = { 'position': 'absolute', 'top': '0', 'right': '0px', "background-color": "transparent" };
        this.id = "";
        this.name = "";
        this.avatar = "";
        this.imgUrl = "";
        this.moments = {};
        //头像高度:图片高度-40px
        this.avatarTop = 0;
    }
    MomentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.imgBaseUrl = this.config.imgBaseUrl;
        this.activatedRoute.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.name = params['name'];
            _this.avatar = params['avatar'];
            _this.momentsService$.getMoments().subscribe(function (data) {
                if (data[_this.id] === "me") {
                    _this.moments = data["me"];
                }
                else if (data[_this.id]) {
                    _this.moments = data[_this.id];
                }
                else {
                    _this.moments = data['other'];
                    _this.id = "other";
                }
                //TODO:bug:不知道如何使用ng监听图片加载完成的事件
                var self = _this;
                setTimeout(function () {
                    self.avatarTop = $(".bg").height();
                }, 120);
            });
        });
    };
    MomentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-moments',
            template: __webpack_require__(/*! ./moments.component.html */ "./src/app/pages/moments/moments.component.html"),
            styles: [__webpack_require__(/*! ./moments.component.scss */ "./src/app/pages/moments/moments.component.scss")],
            animations: [_anim_translateX__WEBPACK_IMPORTED_MODULE_2__["leftInRightLeave"]],
            host: { '[@leftInRightLeave]': '' }
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_CONFIG')),
        __metadata("design:paramtypes", [Object, _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_moments_service__WEBPACK_IMPORTED_MODULE_3__["MomentsService"]])
    ], MomentsComponent);
    return MomentsComponent;
}());



/***/ }),

/***/ "./src/app/pages/moments/moments.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/moments/moments.module.ts ***!
  \*************************************************/
/*! exports provided: MomentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MomentsModule", function() { return MomentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _moments_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moments.component */ "./src/app/pages/moments/moments.component.ts");
/* harmony import */ var _moments_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moments.routing.module */ "./src/app/pages/moments/moments.routing.module.ts");
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/index */ "./src/app/components/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MomentsModule = /** @class */ (function () {
    function MomentsModule() {
    }
    MomentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _moments_routing_module__WEBPACK_IMPORTED_MODULE_3__["MomentsRoutingModule"],
                _components_index__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [_moments_component__WEBPACK_IMPORTED_MODULE_2__["MomentsComponent"]]
        })
    ], MomentsModule);
    return MomentsModule;
}());



/***/ }),

/***/ "./src/app/pages/moments/moments.routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/moments/moments.routing.module.ts ***!
  \*********************************************************/
/*! exports provided: MomentsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MomentsRoutingModule", function() { return MomentsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _moments_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moments.component */ "./src/app/pages/moments/moments.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _moments_component__WEBPACK_IMPORTED_MODULE_2__["MomentsComponent"] }
];
var MomentsRoutingModule = /** @class */ (function () {
    function MomentsRoutingModule() {
    }
    MomentsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], MomentsRoutingModule);
    return MomentsRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-moments-moments-module.js.map