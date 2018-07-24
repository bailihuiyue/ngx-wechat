(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pages/chat-detail/chat-detail.module": [
		"./src/app/pages/chat-detail/chat-detail.module.ts",
		"pages-chat-detail-chat-detail-module"
	],
	"./pages/contacts/contacts.module": [
		"./src/app/pages/contacts/contacts.module.ts"
	],
	"./pages/discover/discover.module": [
		"./src/app/pages/discover/discover.module.ts",
		"pages-discover-discover-module"
	],
	"./pages/me/me.module": [
		"./src/app/pages/me/me.module.ts",
		"pages-me-me-module"
	],
	"./pages/moments/moments.module": [
		"./src/app/pages/moments/moments.module.ts",
		"pages-moments-moments-module"
	],
	"./pages/red-envelope/red-envelope.module": [
		"./src/app/pages/red-envelope/red-envelope.module.ts",
		"pages-red-envelope-red-envelope-module"
	],
	"./pages/search/search.module": [
		"./src/app/pages/search/search.module.ts",
		"pages-search-search-module"
	],
	"./pages/user-detail/user-detail.module": [
		"./src/app/pages/user-detail/user-detail.module.ts",
		"pages-user-detail-user-detail-module"
	],
	"./pages/user-setting/user-setting.module": [
		"./src/app/pages/user-setting/user-setting.module.ts",
		"pages-user-setting-user-setting-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/anim/fade.ts":
/*!******************************!*\
  !*** ./src/app/anim/fade.ts ***!
  \******************************/
/*! exports provided: fadeIn, maskFade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeIn", function() { return fadeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maskFade", function() { return maskFade; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var fadeIn = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeIn', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0)', opacity: 1 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
        ])
    ]),
]);
var maskFade = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('maskFade', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0.4 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0.4 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0.4 })),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0)', opacity: 0.4 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
        ])
    ]),
]);


/***/ }),

/***/ "./src/app/anim/scale.ts":
/*!*******************************!*\
  !*** ./src/app/anim/scale.ts ***!
  \*******************************/
/*! exports provided: scaleTopRightAnimation, chat, scaleAndFade, scaleTopLeftAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleTopRightAnimation", function() { return scaleTopRightAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chat", function() { return chat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleAndFade", function() { return scaleAndFade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleTopLeftAnimation", function() { return scaleTopLeftAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var scaleTopRightAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('scaleTPAnim', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        'opacity': 0,
        "transform": "scale(0)",
        "transform-origin": "top right"
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        'opacity': 1,
        "transform": "scale(1)"
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        'opacity': 0,
        "transform": "scale(0)"
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms'))
]);
var chat = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('chat', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: "absolute", 'width': '100%', 'height': '100%' })),
    // * 表示任何状态
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: "absolute", 'width': '100%', 'height': '100%' })),
    // 进场动画
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))
    ]),
    // 出场动画
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate(0)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
    ])
]);
var scaleAndFade = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('scaleAndFade', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: "absolute", 'width': '100%', 'height': '100%' })),
    // * 表示任何状态
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: "absolute", 'width': '100%', 'height': '100%' })),
    // 进场动画
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(0)', opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1)', opacity: 1 }))
    ]),
    // 出场动画
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1)', opacity: 1 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(0)', opacity: 0 }))
    ])
]);
var scaleTopLeftAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('scaleTLAnim', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        'opacity': 0,
        "transform": "scale(0)",
        "transform-origin": "60px 100px"
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        'opacity': 1,
        "transform": "scale(1)"
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        'opacity': 0,
        "transform": "scale(0)"
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms'))
]);


/***/ }),

/***/ "./src/app/anim/translateX.ts":
/*!************************************!*\
  !*** ./src/app/anim/translateX.ts ***!
  \************************************/
/*! exports provided: horLeft, horRight, rightInLeftLeave, leftInRightLeave, changeCheckBoxStatus, changeCheckBoxBtnStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "horLeft", function() { return horLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "horRight", function() { return horRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rightInLeftLeave", function() { return rightInLeftLeave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leftInRightLeave", function() { return leftInRightLeave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeCheckBoxStatus", function() { return changeCheckBoxStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeCheckBoxBtnStatus", function() { return changeCheckBoxBtnStatus; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var horLeft = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('horLeft', [
    //TODO:注意:想让transform: 'translateX(0)'生效,state必须加上position: 'fixed'或者absolute
    //让页面浮动起来,因为他的子元素也绝对定位了,父元素不绝对定位会导致高度塌陷从而动画失效
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: "absolute", 'width': '100%', 'height': '100%' })),
    // * 表示任何状态
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: "absolute", 'width': '100%', 'height': '100%' })),
    // 进场动画
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0)' }))
    ]),
    // 出场动画
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate(0)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
    ])
]);
var horRight = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('horRight', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: "absolute", 'width': '100%', 'height': '100%' })),
    // * 表示任何状态
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: "absolute", 'width': '100%', 'height': '100%' })),
    // 进场动画
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate(-100%)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0)' }))
    ]),
    // 出场动画
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))
    ])
]);
var rightInLeftLeave = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('rightInLeftLeave', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: "absolute", 'width': '100%', 'height': '100%' })),
    // * 表示任何状态
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: "absolute", 'width': '100%', 'height': '100%' })),
    // 进场动画
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate(-100%)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0)' }))
    ]),
    // 出场动画
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
    ])
]);
var leftInRightLeave = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('leftInRightLeave', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: "absolute", 'width': '100%', 'height': '100%' })),
    // * 表示任何状态
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: "absolute", 'width': '100%', 'height': '100%' })),
    // 进场动画
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate(100%)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0)' }))
    ]),
    // 出场动画
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))
    ])
]);
var changeCheckBoxStatus = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('changeCheckBoxStatus', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('uncheck', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ "backgroundColor": "#989898" })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('checked', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ "backgroundColor": "#1AAC19" })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('uncheck => checked', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.chat-btn', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(150, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'transform': 'translateX(25px)' })), { optional: true }),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('checked => uncheck', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.chat-btn', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(150, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'transform': 'translateX(0)' })), { optional: true }),
    ])
]);
// TODO:bug:解决angular 无法保持query出来的元素状态的问题:https://github.com/angular/angular/issues/18775
//Allow state queries within animations: state('x', query(...))
//目前angular动画是靠state保持的最终状态,而transition只是过渡动画,动画完后会还原到动画之前的状态
//但是query的元素无法保持状态因为state只能支持style而无法支持query 尴尬啊
var changeCheckBoxBtnStatus = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('changeCheckBoxBtnStatus', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('uncheck', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'transform': 'translateX(0px)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('checked', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'transform': 'translateX(25px)' })),
]);


/***/ }),

/***/ "./src/app/anim/translateY.ts":
/*!************************************!*\
  !*** ./src/app/anim/translateY.ts ***!
  \************************************/
/*! exports provided: sildeUp, sildeDown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sildeUp", function() { return sildeUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sildeDown", function() { return sildeDown; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var sildeUp = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('sildeUp', [
    // state('void', style({ position: "absolute", 'width': '100%', 'height': '100%' })),
    // // * 表示任何状态
    // state('*', style({ position: "absolute", 'width': '100%', 'height': '100%' })),
    // 进场动画
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0)' }))
    ]),
    // 出场动画
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)' }))
    ])
]);
var sildeDown = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('sildeDown', [
    // state('void', style({ position: "absolute", 'width': '100%', 'height': '100%' })),
    // // * 表示任何状态
    // state('*', style({ position: "absolute", 'width': '100%', 'height': '100%' })),
    // 进场动画
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-100%)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0)' }))
    ]),
    // 出场动画
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-100%)' }))
    ])
]);


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet>\r\n</router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
// import { filter } from 'rxjs/operators';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        // 记录路由历史记录,等价于window.history,故使用原生js
        // this.router.events.pipe(
        //   filter((event) => event instanceof NavigationEnd)
        // ).subscribe((event: NavigationEnd) => {
        //   console.log(event);
        // });
        // 系统启动时清除上次的未读数据
        localStorage.removeItem("unread");
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.router */ "./src/app/app.router.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/index */ "./src/app/components/index.ts");
/* harmony import */ var _pages_contacts_contacts_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/contacts/contacts.module */ "./src/app/pages/contacts/contacts.module.ts");
/* harmony import */ var _pages_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/index */ "./src/app/pages/index.ts");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/index */ "./src/app/services/index.ts");
/* harmony import */ var _redux_currentPage_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./redux/currentPage.redux */ "./src/app/redux/currentPage.redux.ts");
/* harmony import */ var _redux_indexMenu_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./redux/indexMenu.redux */ "./src/app/redux/indexMenu.redux.ts");
/* harmony import */ var _redux_mask_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./redux/mask.redux */ "./src/app/redux/mask.redux.ts");
/* harmony import */ var _pages_no_match_no_match_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/no-match/no-match.component */ "./src/app/pages/no-match/no-match.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ].concat(_pages_index__WEBPACK_IMPORTED_MODULE_10__["default"], [
                _pages_no_match_no_match_component__WEBPACK_IMPORTED_MODULE_15__["NoMatchComponent"],
            ]),
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_router__WEBPACK_IMPORTED_MODULE_3__["RoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot({
                    currentPageReducer: _redux_currentPage_redux__WEBPACK_IMPORTED_MODULE_12__["currentPageReducer"],
                    DisplayIndexMenuReducer: _redux_indexMenu_redux__WEBPACK_IMPORTED_MODULE_13__["DisplayIndexMenuReducer"],
                    maskStatusReducer: _redux_mask_redux__WEBPACK_IMPORTED_MODULE_14__["maskStatusReducer"]
                }),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__["StoreDevtoolsModule"].instrument(),
                _components_index__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _pages_contacts_contacts_module__WEBPACK_IMPORTED_MODULE_9__["ContactsModule"]
            ],
            providers: _services_index__WEBPACK_IMPORTED_MODULE_11__["default"].concat([
                {
                    provide: 'BASE_CONFIG',
                    useValue: {
                        imgUrl: './assets/images/avatar/',
                        imgRedEnvelope: './assets/images/redEnvelope/',
                        imgBaseUrl: './assets/images/'
                    }
                }
            ]),
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.router.ts":
/*!*******************************!*\
  !*** ./src/app/app.router.ts ***!
  \*******************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_index_page_index_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/index-page/index-page.component */ "./src/app/pages/index-page/index-page.component.ts");
/* harmony import */ var _components_headers_index_menu_index_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/headers/index-menu/index-menu.component */ "./src/app/components/headers/index-menu/index-menu.component.ts");
/* harmony import */ var _components_chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/chat-list/chat-list.component */ "./src/app/components/chat-list/chat-list.component.ts");
/* harmony import */ var _pages_no_match_no_match_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/no-match/no-match.component */ "./src/app/pages/no-match/no-match.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var router = [
    { path: '', redirectTo: '/index/chatList', pathMatch: 'full' },
    { path: 'index', redirectTo: '/index/chatList', pathMatch: 'full' },
    {
        path: 'index',
        component: _pages_index_page_index_page_component__WEBPACK_IMPORTED_MODULE_2__["IndexPageComponent"],
        children: [
            { path: 'menu', component: _components_headers_index_menu_index_menu_component__WEBPACK_IMPORTED_MODULE_3__["IndexMenuComponent"] },
            { path: 'chatList', component: _components_chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_4__["ChatListComponent"], data: { state: 'INDEX' } },
            //如果懒加载中有公用的组件,必须将组件变成模块再进行导入导出,否则父子模块引用同一组件会报重复引入的问题
            { path: 'contacts', loadChildren: './pages/contacts/contacts.module#ContactsModule', data: { state: 'CONTACTS' } },
            { path: 'discover', loadChildren: './pages/discover/discover.module#DiscoverModule', data: { state: 'DISCOVER' } },
            { path: 'me', loadChildren: './pages/me/me.module#MeModule', data: { state: 'ME' } }
        ]
    },
    { path: 'search', loadChildren: './pages/search/search.module#SearchModule', data: { state: 'SEARCH' } },
    { path: 'chatDetail/:id/:uname/:avatar/:unread', loadChildren: './pages/chat-detail/chat-detail.module#ChatDetailModule', data: { state: 'CHAT_DETAIL' } },
    { path: 'redEnvelope', loadChildren: './pages/red-envelope/red-envelope.module#RedEnvelopeModule', data: { state: 'RED_ENVELOPE' } },
    { path: 'userDetail/:id/:name/:avatar', loadChildren: './pages/user-detail/user-detail.module#UserDetailModule', data: { state: 'USER_DETAIL' } },
    { path: 'moments/:id/:name/:avatar', loadChildren: './pages/moments/moments.module#MomentsModule', data: { state: 'MOMENT' } },
    { path: 'userSetting/:id/:name/:avatar', loadChildren: './pages/user-setting/user-setting.module#UserSettingModule', data: { state: 'USER_SETTING' } },
    { path: '**', component: _pages_no_match_no_match_component__WEBPACK_IMPORTED_MODULE_5__["NoMatchComponent"], data: { state: 'noMatch' } }
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(router)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/app/components/chat-list/chat-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/chat-list/chat-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"chat-list index-pages-content\">\r\n        <a *ngFor=\"let user of userList; let i = index;\" class=\"chat-item\" [ngClass]=\"{'zhiding':user.zhiding}\" [routerLink]=\"['/chatDetail',user.id,user.name,user.avatar,user.unread]\">\r\n            <div class=\"clearfix item-core\" (touchstart)=\"changeBackground($event)\" (touchend)=\"backgroundNormal($event)\">\r\n                <div [hidden]=\"user.unread<=0||user.miandarao\" class=\"unread-tip\">{{user.unread}}</div>\r\n                <div [hidden]=\"user.unread<=0||!user.miandarao\" class=\"unread-small\"></div>\r\n                <img src=\"{{imgUrl}}{{user.avatar}}\" alt=\"\">\r\n                <div class=\"chat-row\">\r\n                    <div class=\"font-18 bold black-font\">{{user.name}}</div>\r\n                    <div class=\"grey-font font-14\">{{user.text}}</div>\r\n                </div>\r\n                <div class=\"chat-time grey-font\">{{user.time}}</div>\r\n            </div>\r\n        </a>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/chat-list/chat-list.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/chat-list/chat-list.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chat-list .zhiding {\n  background-color: #F1F1F1; }\n\n.chat-list .chat-item {\n  width: 100%;\n  border-bottom: 1px solid #F0F0F0;\n  display: block; }\n\n.chat-list .chat-item img {\n    width: 50px;\n    float: left;\n    border-radius: 5px;\n    margin-right: 10px; }\n\n.chat-list .chat-item .chat-row {\n    float: left;\n    width: 40%; }\n\n.chat-list .chat-item .chat-time {\n    float: right; }\n\n.chat-list .chat-item hr {\n    width: 100%;\n    margin-top: 10px;\n    height: 1px; }\n\n.chat-list .chat-item .clearfix {\n    padding: 10px; }\n\n.chat-list .chat-item .item-core {\n    position: relative; }\n"

/***/ }),

/***/ "./src/app/components/chat-list/chat-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/chat-list/chat-list.component.ts ***!
  \*************************************************************/
/*! exports provided: ChatListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatListComponent", function() { return ChatListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_get_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/get-users.service */ "./src/app/services/get-users.service.ts");
/* harmony import */ var _anim_translateX__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../anim/translateX */ "./src/app/anim/translateX.ts");
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



var ChatListComponent = /** @class */ (function () {
    function ChatListComponent(config, usersService$) {
        this.config = config;
        this.usersService$ = usersService$;
        this.imgUrl = "";
    }
    ChatListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.imgUrl = this.config.imgUrl;
        //TODO:info:如果只是取数据的话在模板页面使用| async管道也是可以的
        var zhidingList = localStorage.getItem("zhiding");
        var miandaraoList = localStorage.getItem("miandarao");
        this.usersService$.getUsers().subscribe(function (data) {
            var zhidingArr = [];
            var nozhidingArr = [];
            //计算出所有的未读消息数用于底部按钮显示
            var allUnread = 0;
            //要消除的未读id
            var delUnread = localStorage.getItem("unread");
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var user = data_1[_i];
                if (delUnread && delUnread.indexOf(user.id) >= 0) {
                    user.unread = 0;
                }
                //开启置顶的用户列表
                if (zhidingList && zhidingList.indexOf(user.id) >= 0) {
                    user.zhiding = true;
                    zhidingArr.push(user);
                }
                else {
                    nozhidingArr.push(user);
                }
                //开启免打扰的用户列表
                if (miandaraoList && miandaraoList.indexOf(user.id) >= 0) {
                    user.miandarao = true;
                }
                if (user.unread > 0 && !user.miandarao) {
                    allUnread += user.unread;
                }
            }
            if (allUnread > 0) {
                //懒得使用jquery进行redux通知了,使用jquery直接操作dom
                $(".unread-tip").css("display", "block").text(allUnread);
                localStorage.setItem("allUnread", allUnread.toString());
            }
            _this.userList = zhidingArr.concat(nozhidingArr);
        });
    };
    ChatListComponent.prototype.changeBackground = function (e) {
        e.currentTarget.style.backgroundColor = "#D8D8D8";
    };
    ChatListComponent.prototype.backgroundNormal = function (e) {
        e.currentTarget.style.backgroundColor = "transparent";
    };
    ChatListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat-list',
            template: __webpack_require__(/*! ./chat-list.component.html */ "./src/app/components/chat-list/chat-list.component.html"),
            styles: [__webpack_require__(/*! ./chat-list.component.scss */ "./src/app/components/chat-list/chat-list.component.scss")],
            animations: [_anim_translateX__WEBPACK_IMPORTED_MODULE_2__["rightInLeftLeave"]],
            host: { '[@rightInLeftLeave]': '' }
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_CONFIG')),
        __metadata("design:paramtypes", [Object, _services_get_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]])
    ], ChatListComponent);
    return ChatListComponent;
}());



/***/ }),

/***/ "./src/app/components/chekbox/chekbox.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/chekbox/chekbox.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"check-box\" (touchend)=\"changeStatus($event)\" [@changeCheckBoxStatus]=\"triggerStr\">\n  <div class=\"chat-btn\" [@changeCheckBoxBtnStatus]=\"triggerStr\" ></div>\n</div>"

/***/ }),

/***/ "./src/app/components/chekbox/chekbox.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/chekbox/chekbox.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".check-box {\n  width: 55px;\n  height: 30px;\n  border-radius: 50px;\n  background-color: #989898;\n  padding: 3px;\n  position: relative; }\n  .check-box .chat-btn {\n    width: 24px;\n    height: 24px;\n    background-color: #fff;\n    border-radius: 50%;\n    position: relative; }\n"

/***/ }),

/***/ "./src/app/components/chekbox/chekbox.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/chekbox/chekbox.component.ts ***!
  \*********************************************************/
/*! exports provided: ChekboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChekboxComponent", function() { return ChekboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _anim_translateX__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../anim/translateX */ "./src/app/anim/translateX.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChekboxComponent = /** @class */ (function () {
    function ChekboxComponent() {
        this.triggerStr = "uncheck";
        this.operate = "";
        this.uid = "";
    }
    ChekboxComponent.prototype.ngOnInit = function () {
        //练习一下localStorage
        var userList = localStorage.getItem(this.operate);
        if (userList && userList.indexOf(this.uid) >= 0) {
            this.triggerStr = "checked";
        }
    };
    ChekboxComponent.prototype.changeStatus = function (e) {
        var userList = localStorage.getItem(this.operate);
        if (!userList) {
            userList = "";
        }
        var userArr = userList.split(";");
        var userTempArr = [];
        if (this.triggerStr === "checked") {
            this.triggerStr = "uncheck";
            for (var _i = 0, userArr_1 = userArr; _i < userArr_1.length; _i++) {
                var user = userArr_1[_i];
                if (user !== this.uid) {
                    userTempArr.push(user);
                }
            }
            if (userTempArr.length > 0) {
                localStorage.setItem(this.operate, userTempArr.join(";"));
            }
        }
        else {
            this.triggerStr = "checked";
            if (userArr.indexOf(this.uid) < 0) {
                userList = this.uid + ";" + userList;
                localStorage.setItem(this.operate, userList);
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ChekboxComponent.prototype, "operate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ChekboxComponent.prototype, "uid", void 0);
    ChekboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chekbox',
            template: __webpack_require__(/*! ./chekbox.component.html */ "./src/app/components/chekbox/chekbox.component.html"),
            styles: [__webpack_require__(/*! ./chekbox.component.scss */ "./src/app/components/chekbox/chekbox.component.scss")],
            animations: [_anim_translateX__WEBPACK_IMPORTED_MODULE_1__["changeCheckBoxStatus"], _anim_translateX__WEBPACK_IMPORTED_MODULE_1__["changeCheckBoxBtnStatus"]]
        }),
        __metadata("design:paramtypes", [])
    ], ChekboxComponent);
    return ChekboxComponent;
}());



/***/ }),

/***/ "./src/app/components/footers/index-footer/index-footer.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/footers/index-footer/index-footer.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\r\n  <a class=\"page\" (click)=\"showPage('chatList',$event)\">\r\n    <div>\r\n      <div class=\"unread-wrap\">\r\n        <div class=\"unread-tip\" style=\"display:none\" [ngStyle]=\"{'display':unread>0?'block':'none'}\">{{unread}}</div>\r\n        <img src=\"./assets/images/footer/index/chat{{indexPage === 'chatList' ? '-active' : ''}}.png\" alt=\"\">\r\n      </div>\r\n    </div>\r\n    <div class=\"grey-font\" [ngStyle]=\"{'color':indexPage === 'chatList' ? '#0ABA07' : '' }\">微信</div>\r\n  </a>\r\n  <a class=\"page\" (click)=\"showPage('contacts',$event)\">\r\n    <div>\r\n      <img src=\"./assets/images/footer/index/contacts{{indexPage === 'contacts' ? '-active' : ''}}.png\" alt=\"\">\r\n    </div>\r\n    <div class=\"grey-font\" [ngStyle]=\"{'color':indexPage === 'contacts' ? '#0ABA07' : '' }\">通讯录</div>\r\n  </a>\r\n  <a class=\"page\" (click)=\"showPage('discover',$event)\">\r\n    <div>\r\n      <img src=\"./assets/images/footer/index/discover{{indexPage === 'discover' ? '-active' : ''}}.png\" alt=\"\">\r\n    </div>\r\n    <div class=\"grey-font\" [ngStyle]=\"{'color':indexPage === 'discover' ? '#0ABA07' : '' }\">发现</div>\r\n  </a>\r\n  <a class=\"page\" (click)=\"showPage('me',$event)\">\r\n    <div>\r\n      <img src=\"./assets/images/footer/index/me{{indexPage === 'me' ? '-active' : ''}}.png\" alt=\"\">\r\n    </div>\r\n    <div class=\"grey-font\" [ngStyle]=\"{'color':indexPage === 'me' ? '#0ABA07' : '' }\">我</div>\r\n  </a>\r\n</div>"

/***/ }),

/***/ "./src/app/components/footers/index-footer/index-footer.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/footers/index-footer/index-footer.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  width: 100%;\n  height: 65px;\n  position: fixed;\n  z-index: 1;\n  bottom: 0;\n  border-top: 1px solid #BABABA;\n  background-color: white; }\n  .footer .page {\n    width: 25%;\n    float: left;\n    text-align: center; }\n  .footer img {\n    height: 30px;\n    line-height: 40px;\n    margin-top: 5px; }\n  .footer .page > div {\n    height: 35px; }\n  .footer .unread-wrap {\n    position: relative;\n    display: inline; }\n  .footer .unread-wrap .unread-tip {\n      top: -15px;\n      left: 20px; }\n"

/***/ }),

/***/ "./src/app/components/footers/index-footer/index-footer.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/footers/index-footer/index-footer.component.ts ***!
  \***************************************************************************/
/*! exports provided: IndexFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexFooterComponent", function() { return IndexFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
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



var IndexFooterComponent = /** @class */ (function () {
    function IndexFooterComponent(store, router, routeInfo) {
        this.store = store;
        this.router = router;
        this.routeInfo = routeInfo;
        this.indexPage = "";
        this.unread = 0;
    }
    IndexFooterComponent.prototype.ngOnInit = function () {
        var url = this.router.routerState.snapshot.url.split("/");
        this.indexPage = url[url.length - 1];
        this.unread = parseInt(localStorage.getItem("allUnread"));
    };
    IndexFooterComponent.prototype.showPage = function (page) {
        this.indexPage = page;
        this.router.navigate([page], { relativeTo: this.routeInfo });
    };
    IndexFooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index-footer',
            template: __webpack_require__(/*! ./index-footer.component.html */ "./src/app/components/footers/index-footer/index-footer.component.html"),
            styles: [__webpack_require__(/*! ./index-footer.component.scss */ "./src/app/components/footers/index-footer/index-footer.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], IndexFooterComponent);
    return IndexFooterComponent;
}());



/***/ }),

/***/ "./src/app/components/footers/red-envelope-footer/red-envelope-footer.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/footers/red-envelope-footer/red-envelope-footer.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">未领取的红包,将于24小时后发起退款</div>"

/***/ }),

/***/ "./src/app/components/footers/red-envelope-footer/red-envelope-footer.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/footers/red-envelope-footer/red-envelope-footer.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  width: 100%;\n  height: 50px;\n  position: absolute;\n  background-color: #F1F1F1;\n  text-align: center;\n  line-height: 50px;\n  color: #929292;\n  bottom: 0;\n  font-size: 16px; }\n"

/***/ }),

/***/ "./src/app/components/footers/red-envelope-footer/red-envelope-footer.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/footers/red-envelope-footer/red-envelope-footer.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: RedEnvelopeFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedEnvelopeFooterComponent", function() { return RedEnvelopeFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RedEnvelopeFooterComponent = /** @class */ (function () {
    function RedEnvelopeFooterComponent() {
    }
    RedEnvelopeFooterComponent.prototype.ngOnInit = function () {
    };
    RedEnvelopeFooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-red-envelope-footer',
            template: __webpack_require__(/*! ./red-envelope-footer.component.html */ "./src/app/components/footers/red-envelope-footer/red-envelope-footer.component.html"),
            styles: [__webpack_require__(/*! ./red-envelope-footer.component.scss */ "./src/app/components/footers/red-envelope-footer/red-envelope-footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RedEnvelopeFooterComponent);
    return RedEnvelopeFooterComponent;
}());



/***/ }),

/***/ "./src/app/components/headers/header-button/header-button.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/headers/header-button/header-button.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-button\" \r\n(touchstart)=\"touched($event)\" \r\n(touchend)=\"normal($event)\"\r\n[ngStyle]=\"style\">\r\n    <img [src]=\"imgSrc\"/>\r\n</div>"

/***/ }),

/***/ "./src/app/components/headers/header-button/header-button.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/headers/header-button/header-button.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-button {\n  width: 50px;\n  height: 50px;\n  background-color: #1D1C1F;\n  padding: 10px; }\n  .header-button img {\n    width: 100%; }\n"

/***/ }),

/***/ "./src/app/components/headers/header-button/header-button.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/headers/header-button/header-button.component.ts ***!
  \*****************************************************************************/
/*! exports provided: HeaderButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderButtonComponent", function() { return HeaderButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderButtonComponent = /** @class */ (function () {
    function HeaderButtonComponent(router, store) {
        this.router = router;
        this.store = store;
        this.style = { position: "absolute", top: 0, left: 0 };
        this.btnColor = "";
        this.status = false;
        //控制底部菜单的显示与隐藏
        this.maskHidden = true;
        //maskMenu的数据
        this.maskMenuName = "";
    }
    HeaderButtonComponent.prototype.onClick = function () {
        var _this = this;
        if (this.href === "back") {
            window.history.back();
        }
        else if (this.href === "showMenu") {
            if (this.status) {
                this.store.dispatch({ type: "HIDE" /* Hide */ });
            }
            else {
                this.store.dispatch({ type: "SHOW" /* Show */ });
            }
            //获取redux/store的值
            this.store.select('DisplayIndexMenuReducer').subscribe(function (data) { return _this.status = data; });
        }
        else if (this.href === "redMore") {
            this.store.dispatch({ type: "SHOW" /* Show */ });
            this.maskMenuName = "redEnvelope";
        }
        else if (this.href === "userDetailMore") {
            this.store.dispatch({ type: "SHOW" /* Show */ });
            this.maskMenuName = "userDetailMore";
        }
        else if (this.href === "others") {
            alert('敬请期待');
        }
        else {
            this.router.navigate([this.href]);
        }
    };
    ;
    HeaderButtonComponent.prototype.ngOnInit = function () {
    };
    HeaderButtonComponent.prototype.touched = function (e) {
        var color = "black";
        if (this.btnColor === "red") {
            color = "#F4AF9C";
        }
        else if (this.btnColor === "transparent") {
            color = "#ffffff40";
        }
        e.currentTarget.style.backgroundColor = color;
    };
    HeaderButtonComponent.prototype.normal = function (e) {
        var color = "#1D1C1F";
        if (this.btnColor === "red") {
            color = "#D85940";
        }
        else if (this.btnColor === "transparent") {
            color = "transparent";
            e.currentTarget.style.opacity = "1";
        }
        e.currentTarget.style.backgroundColor = color;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeaderButtonComponent.prototype, "imgSrc", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeaderButtonComponent.prototype, "href", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderButtonComponent.prototype, "style", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeaderButtonComponent.prototype, "btnColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HeaderButtonComponent.prototype, "onClick", null);
    HeaderButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header-button',
            template: __webpack_require__(/*! ./header-button.component.html */ "./src/app/components/headers/header-button/header-button.component.html"),
            styles: [__webpack_require__(/*! ./header-button.component.scss */ "./src/app/components/headers/header-button/header-button.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], HeaderButtonComponent);
    return HeaderButtonComponent;
}());



/***/ }),

/***/ "./src/app/components/headers/index-header/index-header.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/headers/index-header/index-header.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n  <div class=\"weixin\">微信</div>\r\n  <app-header-button [imgSrc]=\"imgAdd\" [href]=\"addHref\" [style]=\"addStyle\"></app-header-button>\r\n  <app-header-button [imgSrc]=\"imgSearch\" [href]=\"SearchHref\" [style]=\"SearchStyle\"></app-header-button>\r\n  <app-index-menu></app-index-menu>\r\n  <a class=\"icon-header find\" routerLink=\"/search\" (mousedown)=\"changeBlack($event)\" (touchstart)=\"changeBlack($event)\"></a>\r\n</div>"

/***/ }),

/***/ "./src/app/components/headers/index-header/index-header.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/headers/index-header/index-header.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon-header {\n  width: 50px;\n  height: 50px;\n  color: white;\n  background-size: 60%;\n  background-repeat: no-repeat;\n  line-height: 50px;\n  background-position: 10px;\n  border: none;\n  background-color: #1D1C1F; }\n\n.icon-header.find {\n  float: right;\n  background-image: url(\"/./assets/images/find.svg\"); }\n\n.icon-header.add {\n  float: right;\n  background-image: url(\"/./assets/images/add.svg\");\n  margin: 0 10px; }\n\n.weixin {\n  float: left;\n  color: white;\n  font-size: 18px;\n  line-height: 50px;\n  margin-left: 10px; }\n"

/***/ }),

/***/ "./src/app/components/headers/index-header/index-header.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/headers/index-header/index-header.component.ts ***!
  \***************************************************************************/
/*! exports provided: IndexHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexHeaderComponent", function() { return IndexHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IndexHeaderComponent = /** @class */ (function () {
    function IndexHeaderComponent(router) {
        this.router = router;
        this.is_index = true;
        this.imgAdd = "./assets/images/add.svg";
        this.addHref = "showMenu";
        this.addStyle = { 'position': 'absolute', 'top': '0', 'right': '0px' };
        this.imgSearch = "./assets/images/find.svg";
        this.SearchHref = "/search";
        this.SearchStyle = { 'position': 'absolute', 'top': '0', 'right': '55px' };
    }
    IndexHeaderComponent.prototype.ngOnInit = function () {
    };
    IndexHeaderComponent.prototype.changeBlack = function (e) {
        e.target.style.backgroundColor = "black";
    };
    IndexHeaderComponent.prototype.changeNormal = function (e) {
        e.target.style.backgroundColor = "#1D1C1F";
    };
    IndexHeaderComponent.prototype.showMenu = function () {
        if (this.is_index) {
            this.router.navigateByUrl("/index/menu");
            this.is_index = false;
        }
        else {
            this.router.navigateByUrl("/index");
            this.is_index = true;
        }
    };
    IndexHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index-header',
            template: __webpack_require__(/*! ./index-header.component.html */ "./src/app/components/headers/index-header/index-header.component.html"),
            styles: [__webpack_require__(/*! ./index-header.component.scss */ "./src/app/components/headers/index-header/index-header.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], IndexHeaderComponent);
    return IndexHeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/headers/index-menu/index-menu.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/headers/index-menu/index-menu.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"index-menu\" [@scaleTPAnim]='' *ngIf=\"show\">\r\n  <li class=\"icon-chat\">发起群聊</li>\r\n  <li class=\"icon-add_friend\">添加朋友</li>\r\n  <li class=\"icon-sao\">扫一扫</li>\r\n  <li class=\"icon-recevie\">收付款</li>\r\n  <li class=\"icon-help\">帮助与反馈</li>\r\n</ul>"

/***/ }),

/***/ "./src/app/components/headers/index-menu/index-menu.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/headers/index-menu/index-menu.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".index-menu {\n  width: 50%;\n  position: absolute;\n  z-index: 2;\n  background-color: #1D1C1F;\n  right: 10px;\n  top: 50px;\n  list-style-type: none;\n  color: #fff; }\n  .index-menu li {\n    border-bottom: 1px solid black;\n    padding-left: 40px;\n    height: 40px;\n    line-height: 40px;\n    background-position: 5px 9px;\n    background-size: 25px;\n    background-repeat: no-repeat; }\n  .index-menu .icon-chat {\n    background-image: url(\"/./assetshseaders/chat.png\"); }\n  .index-menu .icon-add_friend {\n    background-image: url(\"/./assetsheaders/add_friend.png\"); }\n  .index-menu .icon-sao {\n    background-image: url(\"/./assetsheaders/sao.png\"); }\n  .index-menu .icon-recevie {\n    background-image: url(\"/./assetsheaders/recevie.png\"); }\n  .index-menu .icon-help {\n    background-image: url(\"/./assetsheaders/help.png\"); }\n"

/***/ }),

/***/ "./src/app/components/headers/index-menu/index-menu.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/headers/index-menu/index-menu.component.ts ***!
  \***********************************************************************/
/*! exports provided: IndexMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexMenuComponent", function() { return IndexMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _anim_scale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../anim/scale */ "./src/app/anim/scale.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IndexMenuComponent = /** @class */ (function () {
    function IndexMenuComponent(store) {
        this.store = store;
        this.show = false;
    }
    IndexMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select('DisplayIndexMenuReducer').subscribe(function (data) { return _this.show = data; });
        //目前不会给redux添加默认值,故在此添加下
        this.store.dispatch({ type: "HIDE" /* Hide */ });
    };
    IndexMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index-menu',
            template: __webpack_require__(/*! ./index-menu.component.html */ "./src/app/components/headers/index-menu/index-menu.component.html"),
            styles: [__webpack_require__(/*! ./index-menu.component.scss */ "./src/app/components/headers/index-menu/index-menu.component.scss")],
            animations: [_anim_scale__WEBPACK_IMPORTED_MODULE_1__["scaleTopRightAnimation"]]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], IndexMenuComponent);
    return IndexMenuComponent;
}());



/***/ }),

/***/ "./src/app/components/headers/red-envelope-header/red-envelope-header.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/headers/red-envelope-header/red-envelope-header.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"red-envelope-header\">\n    <app-header-button [imgSrc]=\"imgBack\" [href]=\"backHref\" [style]=\"s\" [btnColor]=\"red\"></app-header-button>\n    <div class=\"title\">发红包</div>\n    <app-header-button [imgSrc]=\"imgMore\" [href]=\"hrefMore\" [style]=\"styleMore\" [btnColor]=\"red\"></app-header-button>\n</div>"

/***/ }),

/***/ "./src/app/components/headers/red-envelope-header/red-envelope-header.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/headers/red-envelope-header/red-envelope-header.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".red-envelope-header {\n  background-color: #D85940; }\n  .red-envelope-header .title {\n    position: absolute;\n    top: 0;\n    left: 50px;\n    color: white;\n    line-height: 50px;\n    font-size: 26px;\n    color: #FFF2BE; }\n"

/***/ }),

/***/ "./src/app/components/headers/red-envelope-header/red-envelope-header.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/headers/red-envelope-header/red-envelope-header.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: RedEnvelopeHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedEnvelopeHeaderComponent", function() { return RedEnvelopeHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RedEnvelopeHeaderComponent = /** @class */ (function () {
    function RedEnvelopeHeaderComponent() {
        this.imgBack = "./assets/images/headers/red/back.png";
        this.backHref = "back";
        this.s = { 'background-color': '#D85940' };
        this.imgMore = "./assets/images/headers/red/more.png";
        this.hrefMore = "redMore";
        this.red = "red";
        this.styleMore = { 'position': 'absolute', 'top': '0', 'right': '0px', 'background-color': '#D85940' };
    }
    RedEnvelopeHeaderComponent.prototype.ngOnInit = function () {
    };
    RedEnvelopeHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-red-envelope-header',
            template: __webpack_require__(/*! ./red-envelope-header.component.html */ "./src/app/components/headers/red-envelope-header/red-envelope-header.component.html"),
            styles: [__webpack_require__(/*! ./red-envelope-header.component.scss */ "./src/app/components/headers/red-envelope-header/red-envelope-header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RedEnvelopeHeaderComponent);
    return RedEnvelopeHeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/index.ts":
/*!*************************************!*\
  !*** ./src/app/components/index.ts ***!
  \*************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-list/chat-list.component */ "./src/app/components/chat-list/chat-list.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _headers_index_header_index_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./headers/index-header/index-header.component */ "./src/app/components/headers/index-header/index-header.component.ts");
/* harmony import */ var _footers_index_footer_index_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footers/index-footer/index-footer.component */ "./src/app/components/footers/index-footer/index-footer.component.ts");
/* harmony import */ var _headers_header_button_header_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./headers/header-button/header-button.component */ "./src/app/components/headers/header-button/header-button.component.ts");
/* harmony import */ var _headers_index_menu_index_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./headers/index-menu/index-menu.component */ "./src/app/components/headers/index-menu/index-menu.component.ts");
/* harmony import */ var _headers_red_envelope_header_red_envelope_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./headers/red-envelope-header/red-envelope-header.component */ "./src/app/components/headers/red-envelope-header/red-envelope-header.component.ts");
/* harmony import */ var _footers_red_envelope_footer_red_envelope_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footers/red-envelope-footer/red-envelope-footer.component */ "./src/app/components/footers/red-envelope-footer/red-envelope-footer.component.ts");
/* harmony import */ var _mask_mask_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mask/mask.component */ "./src/app/components/mask/mask.component.ts");
/* harmony import */ var _chekbox_chekbox_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./chekbox/chekbox.component */ "./src/app/components/chekbox/chekbox.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_3__["ChatListComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
                _headers_index_header_index_header_component__WEBPACK_IMPORTED_MODULE_5__["IndexHeaderComponent"],
                _footers_index_footer_index_footer_component__WEBPACK_IMPORTED_MODULE_6__["IndexFooterComponent"],
                _headers_header_button_header_button_component__WEBPACK_IMPORTED_MODULE_7__["HeaderButtonComponent"],
                _headers_index_menu_index_menu_component__WEBPACK_IMPORTED_MODULE_8__["IndexMenuComponent"],
                _headers_red_envelope_header_red_envelope_header_component__WEBPACK_IMPORTED_MODULE_9__["RedEnvelopeHeaderComponent"],
                _footers_red_envelope_footer_red_envelope_footer_component__WEBPACK_IMPORTED_MODULE_10__["RedEnvelopeFooterComponent"],
                _mask_mask_component__WEBPACK_IMPORTED_MODULE_11__["MaskComponent"],
                _chekbox_chekbox_component__WEBPACK_IMPORTED_MODULE_12__["ChekboxComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            exports: [
                _chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_3__["ChatListComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
                _headers_index_header_index_header_component__WEBPACK_IMPORTED_MODULE_5__["IndexHeaderComponent"],
                _footers_index_footer_index_footer_component__WEBPACK_IMPORTED_MODULE_6__["IndexFooterComponent"],
                _headers_header_button_header_button_component__WEBPACK_IMPORTED_MODULE_7__["HeaderButtonComponent"],
                _headers_index_menu_index_menu_component__WEBPACK_IMPORTED_MODULE_8__["IndexMenuComponent"],
                _headers_red_envelope_header_red_envelope_header_component__WEBPACK_IMPORTED_MODULE_9__["RedEnvelopeHeaderComponent"],
                _footers_red_envelope_footer_red_envelope_footer_component__WEBPACK_IMPORTED_MODULE_10__["RedEnvelopeFooterComponent"],
                _mask_mask_component__WEBPACK_IMPORTED_MODULE_11__["MaskComponent"],
                _chekbox_chekbox_component__WEBPACK_IMPORTED_MODULE_12__["ChekboxComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/components/main/main.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/main/main.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/main/main.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/main/main.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/main/main.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/components/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/components/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/components/mask/mask.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/mask/mask.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mask-wrap\" (touchend)=\"hideMask($event)\">\r\n  <div class=\"mask\" *ngIf=\"!maskHidden\" [@maskFade]></div>\r\n  <div class=\"menuList\" *ngIf=\"!maskHidden\" [@sildeUp]>\r\n    <div class=\"scroll-wrap\">\r\n      <div class=\"list\" *ngFor=\"let d of maskData\" (touchstart)=\"touched($event)\" (touchend)=\"normal($event)\">\r\n        <div class=\"text\">\r\n          <img src=\"{{imgBaseUrl}}/chat-detail/{{d[1]}}.png\" alt=\"\">\r\n          <span>{{d[0]}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/mask/mask.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/mask/mask.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mask-wrap .mask {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #000;\n  opacity: 0.4;\n  z-index: 3; }\n\n.mask-wrap .menuList {\n  position: fixed;\n  width: 100%;\n  bottom: 0;\n  z-index: 4;\n  background-color: #fff;\n  max-height: 70%;\n  overflow-y: scroll; }\n\n.mask-wrap .menuList .list {\n    width: 100%;\n    height: 60px;\n    line-height: 60px; }\n\n.mask-wrap .menuList .list .text {\n      padding-left: 20px; }\n\n.mask-wrap .menuList .list .text span {\n        color: #7A7A7A;\n        font-size: 17px;\n        vertical-align: middle; }\n\n.mask-wrap .menuList .list .text img {\n        vertical-align: middle;\n        width: 22px;\n        margin-right: 20px; }\n"

/***/ }),

/***/ "./src/app/components/mask/mask.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/mask/mask.component.ts ***!
  \***************************************************/
/*! exports provided: MaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskComponent", function() { return MaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _anim_fade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../anim/fade */ "./src/app/anim/fade.ts");
/* harmony import */ var _anim_translateY__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../anim/translateY */ "./src/app/anim/translateY.ts");
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




var MaskComponent = /** @class */ (function () {
    function MaskComponent(config, store) {
        this.config = config;
        this.store = store;
        this.imgBaseUrl = "";
    }
    //imgRedEnvelope
    MaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.imgBaseUrl = this.config.imgBaseUrl;
        //使用juqery获取dom来判断当前页面类型,达到快速获取状态的效果,也可使用redux完成同样功能
        if ($(".red-envelope-body").length > 0) {
            this.maskData = [
                ["红包记录"],
                ["帮助中心"]
            ];
        }
        else if ($(".user-detail-body").length > 0) {
            this.maskData = [
                ["设置备注及标签", "beizhu"],
                ["标星朋友", "xing"],
                ["设置朋友圈权限", "pengyouquan"],
                ["发送该名片", "fasong"],
                ["投诉", "tousu"],
                ["加入黑名单", "heimingdan"],
                ["删除", "shanchu"],
                ["添加到桌面", "tianjia"],
            ];
        }
        //初始化redux值
        this.store.dispatch({ type: "HIDE" /* Hide */ });
        this.store.select('maskStatusReducer').subscribe(function (data) { return _this.maskHidden = data; });
    };
    MaskComponent.prototype.hideMask = function (e) {
        this.store.dispatch({ type: "HIDE" /* Hide */ });
        //用来阻止冒泡
        this.stopPropagation(e);
    };
    //TODO:warning:代码重复,可重构
    MaskComponent.prototype.touched = function (e) {
        e.currentTarget.style.backgroundColor = "#F0F0F0";
        this.stopPropagation(e);
    };
    MaskComponent.prototype.normal = function (e) {
        e.currentTarget.style.backgroundColor = "#fff";
        this.stopPropagation(e);
        alert("敬请期待");
    };
    MaskComponent.prototype.stopPropagation = function (e) {
        e.stopPropagation();
        e.preventDefault();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MaskComponent.prototype, "maskMenuName", void 0);
    MaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mask',
            template: __webpack_require__(/*! ./mask.component.html */ "./src/app/components/mask/mask.component.html"),
            styles: [__webpack_require__(/*! ./mask.component.scss */ "./src/app/components/mask/mask.component.scss")],
            //忘记加这句话会报错 Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.
            animations: [_anim_fade__WEBPACK_IMPORTED_MODULE_2__["maskFade"], _anim_translateY__WEBPACK_IMPORTED_MODULE_3__["sildeUp"]]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_CONFIG')),
        __metadata("design:paramtypes", [Object, _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], MaskComponent);
    return MaskComponent;
}());



/***/ }),

/***/ "./src/app/pages/contacts/contacts.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/contacts/contacts.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"index-pages-content\">\r\n    <div class=\"contact\">\r\n        <div class=\"sec1\" id=\"↑\">\r\n            <div class=\"alone xindepengyou section\" (touchstart)=\"grey($event)\"\r\n            (touchend)=\"normal($event)\">\r\n                <img src=\"{{imgBaseUrl}}contacts/xindepengyou.png\" alt=\"\">\r\n                <span class=\"text\">新的朋友</span>\r\n                <hr>\r\n            </div>\r\n            <div class=\"qunliao section\" (touchstart)=\"grey($event)\"\r\n            (touchend)=\"normal($event)\">\r\n                <img src=\"{{imgBaseUrl}}contacts/qunliao.png\" alt=\"\">\r\n                <span class=\"text\">群聊</span>\r\n                <hr>\r\n            </div>\r\n            <div class=\"biaoqian section\" (touchstart)=\"grey($event)\"\r\n            (touchend)=\"normal($event)\">\r\n                <img src=\"{{imgBaseUrl}}contacts/biaoqian.png\" alt=\"\">\r\n                <span class=\"text\">标签</span>\r\n                <hr>\r\n            </div>\r\n            <div class=\"gongzhonghao section\" (touchstart)=\"grey($event)\"\r\n            (touchend)=\"normal($event)\">\r\n                <img src=\"{{imgBaseUrl}}contacts/gongzhonghao.png\" alt=\"\">\r\n                <span class=\"text\">公众号</span>\r\n                <hr>\r\n            </div>\r\n        </div>\r\n        <div *ngFor=\"let usr of contact\">\r\n            <div class=\"label\" id=\"{{usr[0]}}\">{{usr[0]}}</div>\r\n            <div routerLink=\"/userDetail/{{u.id}}/{{u.name}}/{{u.avatar}}\" *ngFor=\"let u of usr[1]\" class=\"clearfix user-wrap\" (touchstart)=\"grey($event)\"\r\n                (touchend)=\"normal($event)\">\r\n                <img class=\"avatar\" src=\"{{imgBaseUrl}}avatar/{{u.avatar}}\">\r\n                <span class=\"name\">{{u.name}}</span>\r\n                <hr/>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"touchbar\" (touchstart)=\"showLetter($event)\" (touchmove)=\"moveTouchbar($event)\" (touchend)=\"jumpToLetter($event)\">\r\n        <a name=\"↑\">↑</a>\r\n        <a name=\"{{anchor}}\" *ngFor=\"let anchor of anchors\">{{anchor}}</a>\r\n    </div>\r\n    <div [hidden]=\"hideLetterMask\" class=\"letter\">{{letter}}</div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/contacts/contacts.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/contacts/contacts.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.index-pages-content {\n  background-color: #F1F1F1;\n  /*媒体查询解决iphone4,5的a-z按钮栏过大导致显示不全问题*/ }\n.index-pages-content .contact {\n    width: 100%; }\n.index-pages-content .contact hr {\n      border: none;\n      padding: 0;\n      height: 0px;\n      border-top: 1px solid #D8D8D8; }\n.index-pages-content .contact .section {\n      padding: 0 20px;\n      line-height: 50px;\n      background-color: #fff; }\n.index-pages-content .contact .section img {\n        width: 40px;\n        vertical-align: middle; }\n.index-pages-content .contact .section .text {\n        margin-left: 20px;\n        vertical-align: middle; }\n.index-pages-content .contact .label {\n      height: 30px;\n      line-height: 30px;\n      margin: 0 20px; }\n.index-pages-content .contact .user-wrap {\n      background-color: #fff; }\n.index-pages-content .contact .user-wrap .avatar {\n        width: 40px;\n        margin: 10px 20px;\n        vertical-align: middle; }\n.index-pages-content .contact .user-wrap .name {\n        vertical-align: middle; }\n.index-pages-content .contact .user-wrap hr {\n        margin: 0 20px;\n        border: none;\n        padding: 0;\n        height: 0px;\n        border-top: 1px solid #D8D8D8; }\n.index-pages-content .touchbar {\n    position: fixed;\n    right: 0;\n    top: 50%;\n    width: 20px;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n.index-pages-content .touchbar a {\n      color: #000;\n      display: block;\n      font-size: 12px;\n      text-align: center;\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none; }\n@media screen and (max-height: 568px) {\n    .index-pages-content .touchbar {\n      -webkit-transform: translateY(-50%) scale(0.86);\n              transform: translateY(-50%) scale(0.86);\n      -webkit-transform-origin: \"top right\";\n              transform-origin: \"top right\";\n      width: 40px; } }\n@media screen and (max-height: 480px) {\n    .index-pages-content .touchbar {\n      -webkit-transform: translateY(-50%) scale(0.7);\n              transform: translateY(-50%) scale(0.7); } }\n.index-pages-content .letter {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    background: #000;\n    color: #fff;\n    font-size: 50px;\n    text-align: center;\n    width: 80px;\n    height: 80px;\n    line-height: 80px;\n    border-radius: 5px;\n    opacity: 0.6; }\n"

/***/ }),

/***/ "./src/app/pages/contacts/contacts.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/contacts/contacts.component.ts ***!
  \******************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _anim_translateX__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../anim/translateX */ "./src/app/anim/translateX.ts");
/* harmony import */ var _services_contacts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/contacts.service */ "./src/app/services/contacts.service.ts");
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



var ContactsComponent = /** @class */ (function () {
    function ContactsComponent(config, contactsService$) {
        this.config = config;
        this.contactsService$ = contactsService$;
        this.contact = [];
        this.imgBaseUrl = "";
        this.anchors = [];
        this.letter = "";
        this.hideLetterMask = true;
    }
    ContactsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.imgBaseUrl = this.config.imgBaseUrl;
        this.contactsService$.getUContact().subscribe(function (data) {
            _this.contact = data;
        });
        for (var i = 0; i < 26; i++) {
            this.anchors.push(String.fromCharCode((65 + i)));
        }
    };
    ContactsComponent.prototype.grey = function (e) {
        e.target.style.backgroundColor = "#E2E2E2";
    };
    ContactsComponent.prototype.normal = function (e) {
        e.target.style.backgroundColor = "#FFFFFF";
    };
    ContactsComponent.prototype.showLetter = function (e) {
        e.currentTarget.style.backgroundColor = "#dedede";
        e.currentTarget.style.opacity = "0.8";
        this.letter = $(e.target).attr("name").replace("#", "");
        this.hideLetterMask = false;
    };
    ContactsComponent.prototype.moveTouchbar = function (e) {
        //TODO:info:Touchmove获取当前触摸的Dom节点 百度查到的代码
        var touchedLocation = e.changedTouches[0];
        var realTarget = document.elementFromPoint(touchedLocation.clientX, touchedLocation.clientY);
        this.scroll(realTarget);
    };
    ContactsComponent.prototype.jumpToLetter = function (e) {
        //TODO:bug:应该用锚点实现,但是发现angular锚点和路由有冲突
        //目前没有谷歌到方法
        e.currentTarget.style.backgroundColor = "transparent";
        e.currentTarget.style.opacity = "1";
        this.hideLetterMask = true;
        this.scroll(e.target);
    };
    ContactsComponent.prototype.scroll = function (ele) {
        if ($(ele).is("a")) {
            var letter = $(ele).attr("name").replace("#", "");
            this.letter = letter;
            if ($("#" + letter).length > 0) {
                var postion = $("#" + letter).position().top + $('.index-pages-content').scrollTop();
                $(".index-pages-content").scrollTop(postion);
            }
        }
    };
    ContactsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__(/*! ./contacts.component.html */ "./src/app/pages/contacts/contacts.component.html"),
            styles: [__webpack_require__(/*! ./contacts.component.scss */ "./src/app/pages/contacts/contacts.component.scss")],
            animations: [_anim_translateX__WEBPACK_IMPORTED_MODULE_1__["leftInRightLeave"]],
            host: { '[@leftInRightLeave]': '' }
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_CONFIG')),
        __metadata("design:paramtypes", [Object, _services_contacts_service__WEBPACK_IMPORTED_MODULE_2__["ContactsService"]])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/pages/contacts/contacts.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/contacts/contacts.module.ts ***!
  \***************************************************/
/*! exports provided: ContactsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsModule", function() { return ContactsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _contacts_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contacts.component */ "./src/app/pages/contacts/contacts.component.ts");
/* harmony import */ var _contacts_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contacts.routing.module */ "./src/app/pages/contacts/contacts.routing.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//import {SharedModule} from '../../components/index';
var ContactsModule = /** @class */ (function () {
    function ContactsModule() {
    }
    ContactsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _contacts_routing_module__WEBPACK_IMPORTED_MODULE_2__["ContactsRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
                //SharedModule,
            ],
            declarations: [
                _contacts_component__WEBPACK_IMPORTED_MODULE_1__["ContactsComponent"]
            ],
            exports: [
                _contacts_component__WEBPACK_IMPORTED_MODULE_1__["ContactsComponent"]
            ]
        })
    ], ContactsModule);
    return ContactsModule;
}());



/***/ }),

/***/ "./src/app/pages/contacts/contacts.routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/contacts/contacts.routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ContactsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsRoutingModule", function() { return ContactsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contacts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contacts.component */ "./src/app/pages/contacts/contacts.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _contacts_component__WEBPACK_IMPORTED_MODULE_2__["ContactsComponent"] }
];
var ContactsRoutingModule = /** @class */ (function () {
    function ContactsRoutingModule() {
    }
    ContactsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], ContactsRoutingModule);
    return ContactsRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/index-page/index-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/index-page/index-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@fadeIn]=\"\">\r\n    <!-- TODO:目前还没有找到可以在 router-outlet上添加动画的方法,\r\n        这样就不需要在每个页面都加入动画了\r\n        估计应该使用query方法,但是不管用\r\n    -->\r\n    <app-index-header></app-index-header>\r\n    <router-outlet></router-outlet>\r\n    <app-index-footer></app-index-footer>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/index-page/index-page.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/index-page/index-page.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/index-page/index-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/index-page/index-page.component.ts ***!
  \**********************************************************/
/*! exports provided: IndexPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPageComponent", function() { return IndexPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _anim_fade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../anim/fade */ "./src/app/anim/fade.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IndexPageComponent = /** @class */ (function () {
    //()里面的是trigger名,引入的是方法名
    //   @HostBinding('@horLeft') get chat() {
    //     return 'void';
    //  }
    function IndexPageComponent(router, routeInfo, store) {
        this.router = router;
        this.routeInfo = routeInfo;
        this.store = store;
        //index-page的全局路由
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                // 每次路由跳转改变状态
            }
        });
    }
    IndexPageComponent.prototype.ngOnInit = function () {
        //练习redux的代码,没什么用
        // this.store.select('currentPageReducer');
        // this.routeInfo.url.subscribe(() => {
        //   this.indexPage = this.routeInfo.snapshot.firstChild?this.routeInfo.snapshot.firstChild.data.state:"";
        //   this.store.dispatch({ type: this.indexPage });
        //   console.log(this.indexPage);
        //  });
    };
    IndexPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index-page',
            template: __webpack_require__(/*! ./index-page.component.html */ "./src/app/pages/index-page/index-page.component.html"),
            styles: [__webpack_require__(/*! ./index-page.component.scss */ "./src/app/pages/index-page/index-page.component.scss")],
            animations: [_anim_fade__WEBPACK_IMPORTED_MODULE_1__["fadeIn"]],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], IndexPageComponent);
    return IndexPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/index.ts":
/*!********************************!*\
  !*** ./src/app/pages/index.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_page_index_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-page/index-page.component */ "./src/app/pages/index-page/index-page.component.ts");

/* harmony default export */ __webpack_exports__["default"] = ([
    _index_page_index_page_component__WEBPACK_IMPORTED_MODULE_0__["IndexPageComponent"]
]);


/***/ }),

/***/ "./src/app/pages/no-match/no-match.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/no-match/no-match.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  no-match works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/no-match/no-match.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/no-match/no-match.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/no-match/no-match.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/no-match/no-match.component.ts ***!
  \******************************************************/
/*! exports provided: NoMatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoMatchComponent", function() { return NoMatchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NoMatchComponent = /** @class */ (function () {
    function NoMatchComponent() {
    }
    NoMatchComponent.prototype.ngOnInit = function () {
    };
    NoMatchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-no-match',
            template: __webpack_require__(/*! ./no-match.component.html */ "./src/app/pages/no-match/no-match.component.html"),
            styles: [__webpack_require__(/*! ./no-match.component.scss */ "./src/app/pages/no-match/no-match.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NoMatchComponent);
    return NoMatchComponent;
}());



/***/ }),

/***/ "./src/app/redux/currentPage.redux.ts":
/*!********************************************!*\
  !*** ./src/app/redux/currentPage.redux.ts ***!
  \********************************************/
/*! exports provided: currentPageReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentPageReducer", function() { return currentPageReducer; });
function currentPageReducer(state, action) {
    switch (action.type) {
        case "INDEX" /* Index */:
            return 'index';
        case "CONTACTS" /* Contacts */:
            return 'addr';
        case "SEARCH" /* Search */:
            return 'search';
        case "RESET" /* RESET */:
            return 0;
        default:
            return "unknow page";
    }
}


/***/ }),

/***/ "./src/app/redux/indexMenu.redux.ts":
/*!******************************************!*\
  !*** ./src/app/redux/indexMenu.redux.ts ***!
  \******************************************/
/*! exports provided: DisplayIndexMenuReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayIndexMenuReducer", function() { return DisplayIndexMenuReducer; });
function DisplayIndexMenuReducer(state, action) {
    if (state === void 0) { state = false; }
    switch (action.type) {
        case "SHOW" /* Show */:
            return true;
        case "HIDE" /* Hide */:
            return false;
        default:
            return "unknow show/hide";
    }
}


/***/ }),

/***/ "./src/app/redux/mask.redux.ts":
/*!*************************************!*\
  !*** ./src/app/redux/mask.redux.ts ***!
  \*************************************/
/*! exports provided: maskStatusReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maskStatusReducer", function() { return maskStatusReducer; });
function maskStatusReducer(state, action) {
    switch (action.type) {
        case "SHOW" /* Show */:
            return false;
        case "HIDE" /* Hide */:
            return true;
        default:
            return "unknow maskStatus";
    }
}


/***/ }),

/***/ "./src/app/services/contacts.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/contacts.service.ts ***!
  \**********************************************/
/*! exports provided: ContactsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsService", function() { return ContactsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactsService = /** @class */ (function () {
    function ContactsService(http) {
        this.http = http;
    }
    ContactsService.prototype.getUContact = function () {
        return this.http.
            get("./assets/data/contact.json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])('getContact error:' + error); }));
    };
    ContactsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"]])
    ], ContactsService);
    return ContactsService;
}());



/***/ }),

/***/ "./src/app/services/get-users.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/get-users.service.ts ***!
  \***********************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersService = /** @class */ (function () {
    function UsersService(http) {
        this.http = http;
    }
    UsersService.prototype.getUsers = function () {
        return this.http.
            get("./assets/data/userData.json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])('getUsers error:' + error); }));
    };
    UsersService.prototype.getChatDetail = function () {
        return this.http.
            get("./assets/data/chatDetail.json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])('getChatDetail error:' + error); }));
    };
    UsersService.prototype.getUserDetail = function () {
        return this.http.
            get("./assets/data/userDetail.json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])('getChatDetail error:' + error); }));
    };
    UsersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/app/services/index.ts":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-users.service */ "./src/app/services/get-users.service.ts");
/* harmony import */ var _contacts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contacts.service */ "./src/app/services/contacts.service.ts");
/* harmony import */ var _moments_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moments.service */ "./src/app/services/moments.service.ts");



/* harmony default export */ __webpack_exports__["default"] = ([
    _get_users_service__WEBPACK_IMPORTED_MODULE_0__["UsersService"],
    _contacts_service__WEBPACK_IMPORTED_MODULE_1__["ContactsService"],
    _moments_service__WEBPACK_IMPORTED_MODULE_2__["MomentsService"]
]);


/***/ }),

/***/ "./src/app/services/moments.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/moments.service.ts ***!
  \*********************************************/
/*! exports provided: MomentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MomentsService", function() { return MomentsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MomentsService = /** @class */ (function () {
    function MomentsService(http) {
        this.http = http;
    }
    MomentsService.prototype.getMoments = function () {
        return this.http.
            get("./assets/data/moments.json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])('getMoments error:' + error); }));
    };
    MomentsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"]])
    ], MomentsService);
    return MomentsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Administrator\Desktop\ngx-wechat\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map