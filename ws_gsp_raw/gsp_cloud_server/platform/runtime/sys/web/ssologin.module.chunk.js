webpackJsonp(["ssologin.module"],{

/***/ "./src/app/ssologin/component/ssologin/ssologin.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ssologin/component/ssologin/ssologin.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  正在登录请稍后......\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/ssologin/component/ssologin/ssologin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SsologinComponent", function() { return SsologinComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_rtf_common__ = __webpack_require__("./src/app/rtf-common.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authservice_auth_service__ = __webpack_require__("./src/app/services/authservice/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SsologinComponent = /** @class */ (function () {
    function SsologinComponent(auth, router, cache, route) {
        this.auth = auth;
        this.router = router;
        this.cache = cache;
        this.route = route;
    }
    // para ={'userName': 'liyongtr','language': '简体中文','Tenant':'浪潮集团'};
    SsologinComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            if (params.has('id')) {
                _this.token = params.get('id');
                var tokenObj = JSON.parse(_this.token);
                _this.cache.set('session', tokenObj['sessionId']);
                _this.cache.set('languageCode', tokenObj['lanCode']); // todo:语言先临时写死
                console.log("languageCode = " + _this.cache.get('languageCode'));
                _this.auth.LoginWithToken().subscribe(function (value) {
                    _this.cache.remove('currentAppID');
                    _this.cache.remove('activeItemID');
                    _this.cache.remove('activatedItemID');
                    return _this.router.navigate(['/main/home']);
                }, function (error) {
                    _this.router.navigate(['/login']);
                });
            }
            else {
                _this.router.navigate(['/login']);
            }
        });
        // this.auth.Login(this.para).subscribe(
        //   value => {
        //     this.cache.remove('currentAppID');
        //     this.cache.remove('activeItemID');
        //     this.cache.remove('activatedItemID');
        //     return this.router.navigate(['/main']);
        //   },
        //   error => {
        //     this.router.navigate(['/login']);
        //   });
        // this.route.paramMap.subscribe((params: ParamMap) => {
        //   if (params.has('id')) {
        //     this.token = params.get('id');
        //     var tokenObj = JSON.parse(this.token);
        //     this.cache.set('languageCode',tokenObj["Language"]);
        //     console.log(`languageCode = ${this.cache.get('languageCode')}`);
        //     debugger;
        //     this.auth.LoginWithToken(this.token).subscribe(
        //       value => {
        //       this.cache.remove('currentAppID');
        //       this.cache.remove('activeItemID');
        //       this.cache.remove('activatedItemID');
        //       return this.router.navigate(['/main']);
        //     });
        //   }
        //   else{
        //     this.router.navigate(['/login']);
        //   }
        // });
    };
    SsologinComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ssologin',
            template: __webpack_require__("./src/app/ssologin/component/ssologin/ssologin.component.html"),
            styles: [__webpack_require__("./src/app/ssologin/component/ssologin/ssologin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_authservice_auth_service__["AuthService"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_1__app_rtf_common__["CacheService"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"]])
    ], SsologinComponent);
    return SsologinComponent;
}());



/***/ }),

/***/ "./src/app/ssologin/ssologin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SsologinModule", function() { return SsologinModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ssologin_component_ssologin_ssologin_component__ = __webpack_require__("./src/app/ssologin/component/ssologin/ssologin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ssoroute_module__ = __webpack_require__("./src/app/ssologin/ssoroute.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SsologinModule = /** @class */ (function () {
    function SsologinModule() {
    }
    SsologinModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__ssoroute_module__["SsorouteModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__ssologin_component_ssologin_ssologin_component__["SsologinComponent"]]
        })
    ], SsologinModule);
    return SsologinModule;
}());



/***/ }),

/***/ "./src/app/ssologin/ssoroute.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SsorouteModule", function() { return SsorouteModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_ssologin_ssologin_component__ = __webpack_require__("./src/app/ssologin/component/ssologin/ssologin.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'token/:id', component: __WEBPACK_IMPORTED_MODULE_2__component_ssologin_ssologin_component__["SsologinComponent"] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__component_ssologin_ssologin_component__["SsologinComponent"] },
];
var SsorouteModule = /** @class */ (function () {
    function SsorouteModule() {
    }
    SsorouteModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
            ]
        })
    ], SsorouteModule);
    return SsorouteModule;
}());



/***/ })

});
//# sourceMappingURL=ssologin.module.chunk.js.map