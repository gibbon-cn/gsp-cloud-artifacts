webpackJsonp(["login.module"],{

/***/ "./src/app/login_module/component/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "/* .login-logo-name {\r\n    font-size: 140px;\r\n    font-weight: 800;\r\n    letter-spacing: -10px;\r\n}\r\n.middle-box  {\r\n    width: 300px;\r\n    max-width: 400px;\r\n    z-index: 100;\r\n    margin: 0 auto;\r\n    padding-top: 40px;\r\n}\r\n\r\n.more-sign h6 {\r\n    position: relative;\r\n    margin: 0 0 10px;\r\n    font-size: 16px;\r\n    color: #b5b5b5;\r\n    text-align: center;\r\n    line-height: 24px;\r\n}\r\n\r\n.more-sign h6:before {\r\n    left: 30px\r\n}\r\n\r\n.more-sign h6:after,.more-sign h6:before {\r\n    content: \"\";\r\n    border-top: 1px solid #b5b5b5;\r\n    display: block;\r\n    position: absolute;\r\n    width: 80px;\r\n    top: 10px;\r\n}\r\n.auth-login-area{\r\n  border:1px solid #ddd;\r\n} */\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/login_module/component/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-form-container\">\r\n  <div class=\"row m-0\">\r\n    <div class=\"col-12 col-md-6 p-0 d-flex login-log-container\">\r\n      <div class=\"login-logo align-self-center position-relative\">\r\n        <h1  [ngClass]='{\"logo-en\":languageType==\"en\"}'>{{languageText[languageType][\"logoText\"]}}</h1>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-12 col-md-6 p-0\">\r\n      <section class=\" login-section\">\r\n          <form class=\"login-form\" action=\"#\" [formGroup]=\"myForm\">  \r\n           <h2>{{languageText[languageType][\"loginText\"]}}</h2>\r\n              <div class=\"login-lg-area\">\r\n                <span class=\"login-lg-text mr-2\">Language / 语言</span>\r\n                <div class=\"btn-group login-lg-dropdown\">\r\n                    <button type=\"button\" class=\"btn p-0 m-0 bg-transparent dropdown-toggle\" (click)='languageDropdown=true;'>\r\n                      <span class=\"login-lg\" [ngClass]='{\"lg-zh-cn\":languageType==\"zh-CHS\",\"lg-en\":languageType==\"en\"}'></span>\r\n                    </button>\r\n                    <div class=\"dropdown-menu p-1\" [ngClass]='{\"d-block\":languageDropdown}' (mouseleave)='languageDropdown=false;'>\r\n                      <a class=\"dropdown-item border-bottom px-3\" (click)='changeLanguage(\"zh-CHS\")'>\r\n                          <span class=\"login-lg lg-zh-cn align-middle mr-2\"></span>中文\r\n                      </a>\r\n                      <a class=\"dropdown-item px-3\" (click)='changeLanguage(\"en\")'>\r\n                          <span class=\"login-lg lg-en align-middle mr-2\"></span>EngLish\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n              </div>\r\n              <select class=\"custom-select w-100\" formControlName=\"Tenant\" [(ngModel)] = 'curtTenantId'>\r\n                  <option *ngFor=\"let item of tenants\" [value]=\"item.id\">{{item.name}}</option>\r\n              </select> \r\n              <input type=\"text\" class=\"form-control\" placeholder='{{languageText[languageType][\"nameRemind\"]}}' autocomplete=\"off\" required   id=\"userName\" name=\"userName\" [formControl]=\"myForm.get('userName')\" />\r\n              <input type=\"password\" class=\"form-control\" placeholder='{{languageText[languageType][\"passwordRemind\"]}}' autocomplete=\"off\" required   id=\"passWord\" name=\"passWord\" [formControl]=\"myForm.get('passWord')\" />       \r\n              <div class=\"clearfix\">\r\n                  <div class=\"form-check float-left remember-info\">\r\n                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"rememberInfo\">\r\n                      <label class=\"form-check-label p-0\" for=\"rememberInfo\">{{languageText[languageType][\"rememberInfo\"]}}</label>\r\n                    </div>\r\n                  <a class=\"float-right\">{{languageText[languageType][\"recoverPassword\"]}}</a>\r\n              </div>\r\n              \r\n              <div class=\"form-actions\">\r\n                <button type=\"button\" class=\"btn btn-login block w-100\" (click)=\"handleLogin()\">{{languageText[languageType][\"loginBtn\"]}}</button>              \r\n                <p class=\"text-center btn-regist\">\r\n                    <a href=\"\">{{languageText[languageType][\"regist\"]}}</a>\r\n                </p>\r\n                <label>------------------ {{languageText[languageType][\"inspurId\"]}}------------------</label>\r\n                <p class=\"text-center btn-regist\">\r\n                  <a href=\"{{redirectUri}}\">\r\n                    <img src=\"assets/img/InspurId.png\" width=\"32\" height=\"32\">\r\n                  </a>\r\n                </p>\r\n                <div  *ngIf=\"errorMessage\" class=\"alert alert-warning p-1  login-tips\">\r\n                   {{languageText[languageType][\"errorRemind\"]}}\r\n                </div>\r\n                \r\n              </div>\r\n            </form>\r\n      </section>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login_module/component/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_authservice_auth_service__ = __webpack_require__("./src/app/services/authservice/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_rtf_common__ = __webpack_require__("./src/app/rtf-common.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, authService, functionService, router) {
        this.fb = fb;
        this.functionService = functionService;
        this.router = router;
        // 是否显示下拉
        this.languageDropdown = false;
        this.languageType = 'zh-CHS';
        this.languageText = {
            'zh-CHS': {
                'logoText': '企业数字化创新云平台',
                'loginText': '登录',
                'loginBtn': '登录',
                'rememberInfo': '记录登录信息',
                'recoverPassword': '找回密码',
                'nameRemind': '请输入用户或者邮箱',
                'passwordRemind': '请输入密码',
                'regist': '注册',
                'errorRemind': '用户名或密码错误',
                'tenantlst': ['浪潮集团', '鲁能集团', '铁塔公司'],
                'inspurId': '合作网站账号登录',
                'domainPath': '请输入域名'
            },
            'en': {
                'logoText': 'Cloud Platform for Digtal Business',
                'loginText': 'Log On',
                'loginBtn': 'Logon',
                'rememberInfo': 'Remember me',
                'recoverPassword': 'Forget password?',
                'nameRemind': 'User Name or Email',
                'passwordRemind': 'Password',
                'regist': 'Register',
                'errorRemind': 'Wrong user name or password',
                'tenantlst': ['Inspur', 'luneng', 'tieta'],
                'inspurId': 'Partner Website Login',
                'domainPath': 'DomainPath'
            }
        };
        this.submitted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.myForm = this.fb.group({
            'language': ['zh-CHS', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            'userName': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            'passWord': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            'Tenant': [this.curtTenantId, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        });
        this.authenService = authService;
    }
    Object.defineProperty(LoginComponent.prototype, "pending", {
        set: function (isPending) {
            if (typeof isPending === 'boolean' && isPending === true) {
                this.myForm.disable();
            }
            else {
                this.myForm.enable();
            }
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!__WEBPACK_IMPORTED_MODULE_4__environments_environment__["environment"].local) {
            this.authenService.GetSupportedLanguage().subscribe(function (res) {
                _this.languages = res;
                _this.curLanguage = _this.languages.find(function (l) { return l.code === 'zh-CHS'; });
                console.log('languages =' + res);
            });
            // this.tenants = [{
            //   'code': '10000',
            //   'createdTime' : '2018-08-23T09:41:55.059849',
            //   'id' : 10000,
            //   'name' : '浪潮集团'
            // }];
            // this.curTenant = this.tenants[0];
            // this.curtTenantId = 10000;
            this.authenService.GetTenantList().subscribe(function (ts) {
                _this.tenants = ts;
                console.log('tenant =' + ts);
                _this.curTenant = _this.tenants[0];
                _this.curtTenantId = _this.curTenant['id'];
            });
            this.authenService.GetClientSecurity().subscribe(function (cs) {
                _this.clientId = cs.ClientId;
                var uri = window.location.host;
                _this.redirectUri =
                    'https://id.inspuronline.com/oauth2.0/authorize?response_type=code&client_id=' + _this.clientId + '&redirect_uri=http://' + uri + '/api/runtime/sys/v1.0/Authentication/InspurIdClient';
                console.log(cs);
            });
        }
        // this.tenants = this.languageText[this.languageType]['tenantlst'];
        // this.curTenant = this.tenants[0];
    };
    LoginComponent.prototype.handleLogin = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["environment"].local) {
            this.functionService.loadApps()
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function () {
                _this.router.navigate(['/main/home']);
            })).subscribe();
            return;
        }
        this.myForm.value.language = this.curLanguage['code'];
        if (this.myForm.valid) {
            this.submitted.emit(this.myForm.value);
        }
    };
    LoginComponent.prototype.test = function () {
        console.log('mouseout');
    };
    LoginComponent.prototype.changeLanguage = function (type) {
        switch (type) {
            case 'zh-CHS':
                this.curLanguage = this.languages.find(function (l) { return l['code'] === 'zh-CHS'; });
                break;
            case 'en':
                this.curLanguage = this.languages.find(function (l) { return l['code'] === 'en'; });
                break;
        }
        this.changeTenant(this.curLanguage['code']);
        this.myForm.value.language = this.curLanguage['code'];
        this.languageType = type;
        this.languageDropdown = false;
    };
    LoginComponent.prototype.changeTenant = function (languagecode) {
        var _this = this;
        this.authenService.Geti18nTenant(languagecode).subscribe(function (it) {
            _this.tenants = it;
            console.log('tenant =' + it);
            _this.curTenant = _this.tenants[0];
            _this.curtTenantId = _this.curTenant['id'];
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], LoginComponent.prototype, "pending", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], LoginComponent.prototype, "errorMessage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "submitted", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login_module/component/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login_module/component/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_5__services_authservice_auth_service__["AuthService"], __WEBPACK_IMPORTED_MODULE_6__app_rtf_common__["FuncsService"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login_module/containers/login/login.container.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login_module/containers/login/login.container.component.html":
/***/ (function(module, exports) {

module.exports = "<app-login\r\n  (submitted)=\"onSubmit($event)\"\r\n  [pending]=\"pending\"\r\n  [errorMessage]=\"error\">\r\n</app-login>\r\n"

/***/ }),

/***/ "./src/app/login_module/containers/login/login.container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginContainerComponent", function() { return LoginContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_rtf_common__ = __webpack_require__("./src/app/rtf-common.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authservice_auth_service__ = __webpack_require__("./src/app/services/authservice/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginContainerComponent = /** @class */ (function () {
    function LoginContainerComponent(auth, router, cache) {
        this.auth = auth;
        this.router = router;
        this.cache = cache;
    }
    LoginContainerComponent.prototype.ngOnInit = function () {
    };
    LoginContainerComponent.prototype.onSubmit = function (obj) {
        var _this = this;
        this.pending = true;
        this.error = null;
        this.auth.Login(obj).subscribe(function (value) {
            _this.pending = false;
            _this.error = null;
            _this.cache.remove('currentAppID');
            _this.cache.remove('activeItemID');
            _this.cache.remove('activatedItemID');
            // let redirect = this.cache.get('redirect')
            // console.log(redirect.redirectUrl + redirect.User)
            // if(redirect.redirectUrl !== "false"){
            //     console.log(redirect.redirectUrl + '#/ssologin/token/'+ redirect.User)
            //     window.location.href = redirect.redirectUrl + '#/ssologin/token/'+ redirect.User;
            // }
            // else{
            //   return this.router.navigateByUrl('/ssologin/token/'+redirect.User);
            // }
            return _this.router.navigate(['/main/home']);
        }, function (error) {
            _this.pending = false;
            _this.error = error;
            _this.router.navigate(['/login']);
        });
    };
    LoginContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login-container',
            template: __webpack_require__("./src/app/login_module/containers/login/login.container.component.html"),
            styles: [__webpack_require__("./src/app/login_module/containers/login/login.container.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_authservice_auth_service__["AuthService"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__app_rtf_common__["CacheService"]])
    ], LoginContainerComponent);
    return LoginContainerComponent;
}());



/***/ }),

/***/ "./src/app/login_module/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_login_login_component__ = __webpack_require__("./src/app/login_module/component/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__containers_login_login_container_component__ = __webpack_require__("./src/app/login_module/containers/login/login.container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_route__ = __webpack_require__("./src/app/login_module/login.route.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__login_route__["LoginRootingModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__component_login_login_component__["LoginComponent"],
                __WEBPACK_IMPORTED_MODULE_4__containers_login_login_container_component__["LoginContainerComponent"]
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/login_module/login.route.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRootingModule", function() { return LoginRootingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_login_login_container_component__ = __webpack_require__("./src/app/login_module/containers/login/login.container.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__containers_login_login_container_component__["LoginContainerComponent"] },
];
var LoginRootingModule = /** @class */ (function () {
    function LoginRootingModule() {
    }
    LoginRootingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
            ]
        })
    ], LoginRootingModule);
    return LoginRootingModule;
}());



/***/ })

});
//# sourceMappingURL=login.module.chunk.js.map