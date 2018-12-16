webpackJsonp(["main"],{

/***/ "./src/$$_lazy_require_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__, use_webpack_require) {

	
function webpackAsyncContext(req) {
	var moduleInfos = req.split("#");
	var filePath = moduleInfos[0];
	var moduleName = moduleInfos[1];
	if(!filePath) {
		return Promise.reject(new Error("FilePath can not be empty."));
	}
	if(!moduleName) {
		return Promise.reject(new Error("Module name can not be empty."));
	}
	var getModuleName = function() {
		return moduleName;
	}

	return __webpack_require__.lazy(filePath).then(function() {
		return __webpack_require__(getModuleName());
	});
}
webpackAsyncContext.id = "./src/$$_lazy_require_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./login_module/login.module": [
		"./src/app/login_module/login.module.ts",
		"login.module"
	],
	"./ssologin/ssologin.module": [
		"./src/app/ssologin/ssologin.module.ts",
		"ssologin.module"
	],
	"./submodule/home/home.module": [
		"./src/app/submodule/home/home.module.ts",
		"home.module"
	],
	"./submodule/userinfo/userinfo.module": [
		"./src/app/submodule/userinfo/userinfo.module.ts",
		"userinfo.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__component_footer_footer_component__ = __webpack_require__("./src/app/component/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__component_layout_layout_component__ = __webpack_require__("./src/app/component/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__component_workarea_workarea_component__ = __webpack_require__("./src/app/component/workarea/workarea.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__component_header_header_component__ = __webpack_require__("./src/app/component/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__component_topnavbar_topnavbar_component__ = __webpack_require__("./src/app/component/topnavbar/topnavbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__component_userinfomenu_userinfomenu_component__ = __webpack_require__("./src/app/component/userinfomenu/userinfomenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__component_messagenotification_messagenotification_component__ = __webpack_require__("./src/app/component/messagenotification/messagenotification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__component_systemsettings_systemsettings_component__ = __webpack_require__("./src/app/component/systemsettings/systemsettings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__component_systemhelp_systemhelp_component__ = __webpack_require__("./src/app/component/systemhelp/systemhelp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__component_createmenu_createmenu_component__ = __webpack_require__("./src/app/component/createmenu/createmenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__component_collectionmenu_collectionmenu_component__ = __webpack_require__("./src/app/component/collectionmenu/collectionmenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__component_pageheader_pageheader_component__ = __webpack_require__("./src/app/component/pageheader/pageheader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__component_applicationmanager_applicationmanager_component__ = __webpack_require__("./src/app/component/applicationmanager/applicationmanager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__containers_layout_layout_container_component__ = __webpack_require__("./src/app/containers/layout/layout.container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__component_app_group_app_group_component__ = __webpack_require__("./src/app/component/app-group/app-group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__component_app_info_widget_app_info_widget_component__ = __webpack_require__("./src/app/component/app-info-widget/app-info-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__app_routing_module__ = __webpack_require__("./src/app/app.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_authservice_auth_service__ = __webpack_require__("./src/app/services/authservice/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__app_rtf_common__ = __webpack_require__("./src/app/rtf-common.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__component_common_modal__ = __webpack_require__("./src/app/component/common/modal/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__component_common_collapse__ = __webpack_require__("./src/app/component/common/collapse/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__component_common_dropdown__ = __webpack_require__("./src/app/component/common/dropdown/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__component_common_general_drawer_general_drawer_component__ = __webpack_require__("./src/app/component/common/general-drawer/general-drawer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__farris_drawer__ = __webpack_require__("./node_modules/@farris/drawer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__farris_drawer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_32__farris_drawer__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// import { BsDropdownModule, TabsModule, ModalModule, CollapseModule } from 'ngx-bootstrap';
// components

















// root route

// services







// ng2-cache




// 抽屉

// import { GeneralDrawerRelatedComponent } from './component/common/general-drawer-related/general-drawer-related.component';

var AppModule = /** @class */ (function () {
    function AppModule(router, compiler, frmservice, cache) {
        var _this = this;
        this.router = router;
        this.compiler = compiler;
        this.frmservice = frmservice;
        this.cache = cache;
        // 截获路由事件
        router.events
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["filter"])(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_5__angular_router__["NavigationStart"]; }))
            .subscribe(function (event) {
            // 读取当前路由Url地址
            var routerUrl = event.url;
            // 判断是否拦截当前路由
            if (window.hasOwnProperty('funcsRouterMap') &&
                _this.matchUrl(routerUrl)) {
                // 读取异步路由资源模块url地址
                var moduleUrl_1 = _this.findModuleUrl;
                // 截取导航路径，导航路径为url地址去掉第一个字符'/'
                var navigationPath_1 = _this.findUrl.substr(6, routerUrl.length - 1);
                // 读取顶级路由配置对象集合
                var routerConfigs = _this.router.config;
                var mainRouterConfigs = _this.router.config[1]['children'];
                // 如果未配置此url地址路由，则创建异步路由配置，并记录到路由配置集合
                if (!mainRouterConfigs.find(function (routerConfig) { return routerConfig.path === navigationPath_1; })) {
                    mainRouterConfigs.push({
                        path: navigationPath_1 + '/:funcid',
                        // 定义异步路由方法，调用loadModule加载异步路由模块。
                        loadChildren: function () { return _this.loadModule(moduleUrl_1); },
                        resolve: {
                            funcParam: __WEBPACK_IMPORTED_MODULE_27__app_rtf_common__["FunctionResolver"]
                        }
                    });
                    // 重置路由配置
                    _this.router.resetConfig(routerConfigs);
                }
            }
        });
    }
    AppModule.prototype.matchUrl = function (url) {
        var hasUrl = false;
        var len = window['funcsRouterMap'].length;
        url = url.substr(0, url.lastIndexOf('/'));
        for (var i = 0; i < len; i++) {
            var path = window['funcsRouterMap'][i]['url'];
            if (path === url) {
                hasUrl = true;
                this.findUrl = window['funcsRouterMap'][i]['url'];
                this.findModuleUrl = window['funcsRouterMap'][i]['path'];
                this.curFuncid = window['funcsRouterMap'][i]['fid'];
                break;
            }
        }
        return hasUrl;
    };
    /**
     * 加载异步路由模块
     * @param url 异步路由资源模块url地址
     */
    AppModule.prototype.loadModule = function (url) {
        // 截取异步路由资源模块url地址，获取模块加载信息。
        // tslint:disable-next-line:prefer-const
        var _a = url.split('#'), moduleName = _a[0], moduleKey = _a[1], exportName = _a[2];
        // 如果未指定导出模块，默认使用default。
        if (exportName === undefined) {
            exportName = 'default';
        }
        // 异步加载资源模块
        return __webpack_require__("./src/$$_lazy_require_resource lazy recursive")(url)
            .then(function (module) {
            return module[exportName];
        })
            .then(function (type) { return checkNotEmpty(type, moduleName, exportName); });
        // .then((type: any) => this.compiler.compileModuleAsync(type));
    };
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["AppComponent"],
                __WEBPACK_IMPORTED_MODULE_9__component_footer_footer_component__["FooterComponent"],
                __WEBPACK_IMPORTED_MODULE_13__component_topnavbar_topnavbar_component__["TopnavbarComponent"],
                __WEBPACK_IMPORTED_MODULE_10__component_layout_layout_component__["LayoutComponent"],
                __WEBPACK_IMPORTED_MODULE_12__component_header_header_component__["HeaderComponent"],
                __WEBPACK_IMPORTED_MODULE_14__component_userinfomenu_userinfomenu_component__["UserInfoMenuComponent"],
                __WEBPACK_IMPORTED_MODULE_15__component_messagenotification_messagenotification_component__["MessageNotificationComponent"],
                __WEBPACK_IMPORTED_MODULE_16__component_systemsettings_systemsettings_component__["SystemSettingsComponent"],
                __WEBPACK_IMPORTED_MODULE_17__component_systemhelp_systemhelp_component__["SystemHelpComponent"],
                __WEBPACK_IMPORTED_MODULE_18__component_createmenu_createmenu_component__["CreateMenuComponent"],
                __WEBPACK_IMPORTED_MODULE_19__component_collectionmenu_collectionmenu_component__["CollectionMenuComponent"],
                __WEBPACK_IMPORTED_MODULE_20__component_pageheader_pageheader_component__["PageheaderComponent"],
                __WEBPACK_IMPORTED_MODULE_21__component_applicationmanager_applicationmanager_component__["ApplicationManagerComponent"],
                __WEBPACK_IMPORTED_MODULE_11__component_workarea_workarea_component__["WorkAreaComponent"],
                __WEBPACK_IMPORTED_MODULE_22__containers_layout_layout_container_component__["LayoutContainerComponent"],
                __WEBPACK_IMPORTED_MODULE_23__component_app_group_app_group_component__["AppGroupComponent"],
                __WEBPACK_IMPORTED_MODULE_24__component_app_info_widget_app_info_widget_component__["AppInfoWidgetComponent"],
                __WEBPACK_IMPORTED_MODULE_31__component_common_general_drawer_general_drawer_component__["GeneralDrawerComponent"]
            ],
            imports: [
                // Angular modules
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__["BrowserAnimationsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["HttpClientModule"],
                __WEBPACK_IMPORTED_MODULE_25__app_routing_module__["AppRoutingModule"],
                // BsDropdownModule.forRoot(),
                // TabsModule.forRoot(),
                __WEBPACK_IMPORTED_MODULE_28__component_common_modal__["ModalModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_29__component_common_collapse__["CollapseModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_30__component_common_dropdown__["BsDropdownModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_32__farris_drawer__["DrawerModule"].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_27__app_rtf_common__["CacheService"],
                __WEBPACK_IMPORTED_MODULE_26__services_authservice_auth_service__["AuthService"],
                __WEBPACK_IMPORTED_MODULE_27__app_rtf_common__["FuncsService"],
                __WEBPACK_IMPORTED_MODULE_27__app_rtf_common__["HttpService"],
                __WEBPACK_IMPORTED_MODULE_27__app_rtf_common__["DrawerService"],
                __WEBPACK_IMPORTED_MODULE_27__app_rtf_common__["FrameworkService"],
                __WEBPACK_IMPORTED_MODULE_27__app_rtf_common__["FunctionResolver"],
                __WEBPACK_IMPORTED_MODULE_27__app_rtf_common__["FrmEventBus"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["AppComponent"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Compiler"], __WEBPACK_IMPORTED_MODULE_27__app_rtf_common__["FrameworkService"], __WEBPACK_IMPORTED_MODULE_27__app_rtf_common__["CacheService"]])
    ], AppModule);
    return AppModule;
}());

function checkNotEmpty(value, modulePath, exportName) {
    if (!value) {
        throw new Error("Cannot find '" + exportName + "' in '" + modulePath + "'");
    }
    return value;
}


/***/ }),

/***/ "./src/app/app.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_layout_layout_container_component__ = __webpack_require__("./src/app/containers/layout/layout.container.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'login', loadChildren: './login_module/login.module#LoginModule', data: { title: 'Login' } },
    {
        path: 'main', component: __WEBPACK_IMPORTED_MODULE_2__containers_layout_layout_container_component__["LayoutContainerComponent"], data: { title: 'Home' },
        children: [
            { path: 'home', loadChildren: './submodule/home/home.module#HomeModule' },
            // { path: 'funcs', loadChildren: './tile_module/tile.module#TileModule' },
            // { path: 'pages', loadChildren: './submodule/pages/pages.module#PagesModule' },
            { path: 'userinfo', loadChildren: './submodule/userinfo/userinfo.module#UserinfoModule' }
            // { path: 'contract', loadChildren: './submodule/contract-pages/contract-pages.module#ContractPagesModule' }
        ]
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'ssologin', loadChildren: './ssologin/ssologin.module#SsologinModule', data: { title: 'SsoLogin' } }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forRoot(routes, { useHash: true, enableTracing: false })
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/component/app-group/app-group.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/app-group/app-group.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"esapplication-body-group\">\r\n    <a (click)=\"isCollapsed = !isCollapsed\">\r\n      <i *ngIf=\"!isCollapsed\" class=\"material-icons align-middle\">keyboard_arrow_up</i>\r\n      <i *ngIf=\"isCollapsed\" class=\"material-icons align-middle\">keyboard_arrow_down</i>\r\n      &nbsp;&nbsp;{{ funcList[groupId].Name}}\r\n    </a>\r\n    <div class=\"esapplication-divider\"></div>\r\n    <div class=\"card card-header border-none collapse\" [ngClass]=\"{'in show':!isCollapsed}\">\r\n      <section class=\"row apps-container\"> \r\n        <app-app-info-widget *ngFor=\"let item of funcList[groupId].Child\" (appInfoWidgetClick)=\"handleWidgetClick($event)\"  [info]=\"funcList[item]\" >\r\n        </app-app-info-widget>\r\n      </section>\r\n    </div>\r\n  </div>\r\n\r\n"

/***/ }),

/***/ "./src/app/component/app-group/app-group.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppGroupComponent", function() { return AppGroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_rtf_common__ = __webpack_require__("./src/app/rtf-common.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppGroupComponent = /** @class */ (function () {
    function AppGroupComponent(router, frmservice, cache, feb) {
        this.router = router;
        this.frmservice = frmservice;
        this.cache = cache;
        this.feb = feb;
        this.appInfoWidgetClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isCollapsed = false;
    }
    AppGroupComponent.prototype.ngOnInit = function () {
        this.ssid = this.cache.get('session');
    };
    AppGroupComponent.prototype.handleWidgetClick = function (appId) {
        var _this = this;
        var path = this.funcList[appId]['InvokingConfig']['Url'];
        this.frmservice.openFunc(appId, path, this.ssid).subscribe(function (data) {
            _this.feb.post('frmopenfunc', null);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AppGroupComponent.prototype, "funcList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AppGroupComponent.prototype, "groupId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], AppGroupComponent.prototype, "appInfoWidgetClick", void 0);
    AppGroupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-app-group',
            template: __webpack_require__("./src/app/component/app-group/app-group.component.html"),
            styles: [__webpack_require__("./src/app/component/app-group/app-group.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__app_rtf_common__["FrameworkService"], __WEBPACK_IMPORTED_MODULE_2__app_rtf_common__["CacheService"], __WEBPACK_IMPORTED_MODULE_2__app_rtf_common__["FrmEventBus"]])
    ], AppGroupComponent);
    return AppGroupComponent;
}());



/***/ }),

/***/ "./src/app/component/app-info-widget/app-info-widget.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/app-info-widget/app-info-widget.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"apps-item-box\">\r\n  <div class=\"apps-item-overview\">\r\n        <span class=\"apps-item-icon only-img\">\r\n          <i class=\"material-icons align-middle\">layers</i>\r\n        </span>\r\n    <a class=\"apps-item-title text-truncate\">{{info.Name}}</a>\r\n    <span class=\"state\"></span>\r\n    <span class=\"close-on\">\r\n      <i class=\"material-icons align-middle\">close</i>\r\n    </span>\r\n  </div>\r\n  <div class=\"apps-item-detail\">\r\n    <ul>\r\n      <li>\r\n        <span class=\"badge badge-light\">{{i18n_app[languageCode][\"unrunning\"]}}</span>\r\n      </li>\r\n      <li>{{i18n_app[languageCode][\"fname\"]}}：{{info.Name}}</li>\r\n      <li>{{i18n_app[languageCode][\"desc\"]}}：{{info.Description}}</li>\r\n    </ul>\r\n  </div>\r\n  <a class=\"delete-container\">\r\n    <span>\r\n      <i class=\"material-icons align-middle\">delete</i>\r\n    </span>\r\n  </a>\r\n</div>"

/***/ }),

/***/ "./src/app/component/app-info-widget/app-info-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInfoWidgetComponent", function() { return AppInfoWidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_mock_i18n_model__ = __webpack_require__("./src/app/models/mock.i18n.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_rtf_common__ = __webpack_require__("./src/app/rtf-common.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppInfoWidgetComponent = /** @class */ (function () {
    function AppInfoWidgetComponent(cache) {
        this.cache = cache;
        this.appInfoWidgetClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.i18n_app = __WEBPACK_IMPORTED_MODULE_1__models_mock_i18n_model__["i18n_apps"];
        this.languageCode = 'zh-CHS';
        if (this.cache.exists('languageCode')) {
            this.languageCode = this.cache.get('languageCode');
        }
        // this.i18n = i18n_apps;
    }
    AppInfoWidgetComponent.prototype.onClick = function (event) {
        this.appInfoWidgetClick.emit(this.info['Id']);
    };
    AppInfoWidgetComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AppInfoWidgetComponent.prototype, "info", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], AppInfoWidgetComponent.prototype, "appInfoWidgetClick", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AppInfoWidgetComponent.prototype, "onClick", null);
    AppInfoWidgetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-app-info-widget',
            template: __webpack_require__("./src/app/component/app-info-widget/app-info-widget.component.html"),
            styles: [__webpack_require__("./src/app/component/app-info-widget/app-info-widget.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_rtf_common__["CacheService"]])
    ], AppInfoWidgetComponent);
    return AppInfoWidgetComponent;
}());



/***/ }),

/***/ "./src/app/component/applicationmanager/applicationmanager.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/applicationmanager/applicationmanager.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"float-left application-manager-icon-all\">\r\n  <button class=\"btn bg-transparent\" type=\"button\" (click)=\"staticModal.show()\">\r\n    <i class=\"material-icons align-middle\">apps</i>\r\n  </button>\r\n  <!-- btn-outline-light  {{funcList[currentAppID]?.name}}-->\r\n</div>\r\n<div class=\"modal inmodal\" bsModal #staticModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header px-2 pt-3 pb-0 text-left\" style=\"height:80px;\">\r\n        <button type=\"button\" class=\"close float-right mr-1\" aria-label=\"Close\" (click)=\"reset();staticModal.hide()\" style=\"color:#fff;\">\r\n          <i class=\"material-icons\">close</i>\r\n        </button>\r\n        <i class=\"material-icons esapplication-modal-icon\">desktop_mac</i>\r\n        <span class=\"position-absolute ml-5\">{{I18n[languageCode][\"applicationmanager_AllFuncs\"]}}</span>\r\n        <div class=\"navbar-header\">\r\n          <div class=\"custome-search\">\r\n            <div class=\"input-group\">\r\n              <span class=\"input-group-addon search-control\">\r\n                <i class=\"material-icons\">search</i>\r\n              </span>\r\n              <input type=\"text\" placeholder=\"\" class=\"form-control search-control\" name=\"top-search\" id=\"top-search\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-body esapplication-body pt-0\" id=\"appContainer\" style=\"overflow:auto;\">\r\n        <div class=\"esapplication-body-group\" [ngClass]=\"{'d-none':removeappHT&&removeappTB&&removeappGG&&removeappBX}\">\r\n          <div class=\"clearfix\">\r\n            <a (click)=\"isCollapsedOn = !isCollapsedOn\">\r\n              <i *ngIf=\"!isCollapsedOn\" class=\"material-icons align-middle\">keyboard_arrow_up</i>\r\n              <i *ngIf=\"isCollapsedOn\" class=\"material-icons align-middle\">keyboard_arrow_down</i>\r\n              &nbsp;&nbsp;{{I18n[languageCode][\"applicationmanager_Run_Func\"]}}\r\n            </a>\r\n          </div>\r\n          <div class=\"esapplication-divider\"></div>\r\n          <div [collapse]=\"isCollapsedOn\" class=\"card card-block card-header gray-bg border-none\">\r\n            <section class=\"row apps-container\">              \r\n              <div class=\"apps-item-box state-on\" [ngClass]=\"{'can-delete':actionType=='remove','d-none':removeappTB}\">\r\n                <div class=\"apps-item-overview\">\r\n                  <span class=\"apps-item-icon\">\r\n                    <i class=\"material-icons align-middle\">event_note</i>\r\n                  </span>\r\n                  <a class=\"apps-item-title text-truncate\">{{apps_resource[languageCode][\"work_diary\"]}}</a>\r\n                  <span class=\"state\"></span>\r\n                  <span class=\"close-on\" (click)=\"$event.stopPropagation();removeappTB=true;\">\r\n                    <i class=\"material-icons align-middle\">close</i>\r\n                  </span>\r\n                </div>\r\n                <div class=\"apps-item-detail\">\r\n                  <ul>\r\n                    <li>\r\n                      <span class=\"badge badge-light\">{{apps_resource[languageCode][\"running\"]}}</span>\r\n                    </li>\r\n                    <li>{{apps_resource[languageCode][\"name\"]}}</li>\r\n                    <li>{{apps_resource[languageCode][\"description\"]}}</li>\r\n                  </ul>\r\n                </div>\r\n                <a class=\"delete-container\">\r\n                  <span>\r\n                    <i class=\"material-icons align-middle\">delete</i>\r\n                  </span>\r\n                </a>\r\n              </div>\r\n              <div class=\"apps-item-box  state-on\" [ngClass]=\"{'can-delete':actionType=='remove','d-none':removeappGG}\">\r\n                <div class=\"apps-item-overview\">\r\n                  <span class=\"apps-item-icon only-img\">\r\n                    <img src=\"assets/img/analytics-40.png\" />\r\n                  </span>\r\n                  <a class=\"apps-item-title text-truncate\">{{apps_resource[languageCode][\"notice_Info\"]}}</a>\r\n                  <span class=\"state\"></span>\r\n                  <span class=\"close-on\" (click)=\"$event.stopPropagation();removeappGG=true\">\r\n                    <i class=\"material-icons align-middle\">close</i>\r\n                  </span>\r\n                </div>\r\n                <div class=\"apps-item-detail\">\r\n                  <ul>\r\n                    <li>\r\n                      <span class=\"badge badge-light\">{{apps_resource[languageCode][\"running\"]}}</span>\r\n                    </li>\r\n                    <li>{{apps_resource[languageCode][\"notice_name\"]}}</li>\r\n                    <li>{{apps_resource[languageCode][\"notice_desc\"]}}</li>\r\n                  </ul>\r\n                </div>\r\n                <a class=\"delete-container\">\r\n                  <span>\r\n                    <i class=\"material-icons align-middle\">delete</i>\r\n                  </span>\r\n                </a>\r\n              </div>\r\n              <div class=\"apps-item-box  state-on\" [ngClass]=\"{'can-delete':actionType=='remove','d-none':removeappBX}\">\r\n                <div class=\"apps-item-overview\">\r\n                  <span class=\"apps-item-icon only-img\">\r\n                    <img src=\"assets/img/analytics-44.png\" />\r\n                  </span>\r\n                  <a class=\"apps-item-title text-truncate\">{{apps_resource[languageCode][\"dispatch\"]}}</a>\r\n                  <span class=\"state\"></span>\r\n                  <span class=\"close-on\" (click)=\"$event.stopPropagation();removeappBX=true\">\r\n                    <i class=\"material-icons align-middle\">close</i>\r\n                  </span>\r\n                </div>\r\n                <div class=\"apps-item-detail\">\r\n                  <ul>\r\n                    <li>\r\n                      <span class=\"badge badge-light\">{{apps_resource[languageCode][\"running\"]}}</span>\r\n                    </li>\r\n                    <li>{{apps_resource[languageCode][\"name_dispatch\"]}}</li>\r\n                    <li>{{apps_resource[languageCode][\"desc_dispatch\"]}}</li>\r\n                  </ul>\r\n                </div>\r\n                <a class=\"delete-container\">\r\n                  <span>\r\n                    <i class=\"material-icons align-middle\">delete</i>\r\n                  </span>\r\n                </a>\r\n              </div>\r\n            </section>\r\n          </div>\r\n        </div>\r\n        <div class=\"esapplication-body-group\">\r\n          <div class=\"clearfix\">\r\n            <a (click)=\"isCollapsedCom = !isCollapsedCom\">\r\n              <i *ngIf=\"!isCollapsedCom\" class=\"material-icons align-middle\">keyboard_arrow_up</i>\r\n              <i *ngIf=\"isCollapsedCom\" class=\"material-icons align-middle\">keyboard_arrow_down</i>\r\n              &nbsp;&nbsp;{{I18n[languageCode][\"applicationmanager_Common_Application\"]}}\r\n            </a>\r\n          </div>\r\n          <div class=\"esapplication-divider\"></div>\r\n          <div [collapse]=\"isCollapsedCom\" class=\"card card-block card-header gray-bg border-none\">\r\n              <section class=\"row apps-container\">                     \r\n                  <div class=\"apps-item-box\" [ngClass]=\"{'can-delete':actionType=='remove'}\">\r\n                      <div class=\"apps-item-overview\">\r\n                        <span class=\"apps-item-icon only-img\">\r\n                            <img src=\"assets/img/analytics-42.png\" />\r\n                        </span>\r\n                        <a class=\"apps-item-title text-truncate\">{{apps_resource[languageCode][\"my_agent\"]}}</a>\r\n                        <span class=\"state\"></span>\r\n                    </div>\r\n                    <div class=\"apps-item-detail\">\r\n                       <ul>\r\n                         <li><span class=\"badge badge-light\">{{apps_resource[languageCode][\"unavailable\"]}}</span></li>\r\n                         <li>{{apps_resource[languageCode][\"notice_name\"]}</li>\r\n                         <li>{{apps_resource[languageCode][\"notice_desc\"]}</li>\r\n                       </ul>\r\n                    </div> <a class=\"delete-container\">\r\n                            <span><i class=\"material-icons align-middle\">delete</i></span>\r\n                        </a>\r\n                  </div>                 \r\n                  <div class=\"apps-item-box\"  [ngClass]=\"{'can-delete':actionType=='remove','d-none':removeapp}\">\r\n                      <div class=\"apps-item-overview\">\r\n                        <span class=\"apps-item-icon\"><i class=\"material-icons align-middle\">event_note</i></span>\r\n                        <a class=\"apps-item-title text-truncate\">{{apps_resource[languageCode][\"work_diary\"]}}</a>\r\n                        <span class=\"state\"></span>\r\n                        <span class=\"close-on\" (click)=\"removeapp=true\">\r\n                            <i class=\"material-icons align-middle\">close</i>\r\n                        </span>\r\n                    </div>\r\n                    <div class=\"apps-item-detail\">\r\n                       <ul>\r\n                         <li><span class=\"badge badge-light\"><span [ngClass]=\"{'d-none':removeappTB}\">{{apps_resource[languageCode][\"running\"]}}</span><span [ngClass]=\"{'d-none':!removeappTB}\">{{apps_resource[languageCode][\"unrunning\"]}}</span></span></li>\r\n                         <li>{{apps_resource[languageCode][\"name\"]}}</li>\r\n                         <li>{{apps_resource[languageCode][\"description\"]}}</li>\r\n                       </ul>\r\n                    </div>   \r\n                    <a class=\"delete-container\">\r\n                            <span><i class=\"material-icons align-middle\">delete</i></span>\r\n                        </a>                      \r\n                  </div>\r\n                  <div class=\"apps-item-box\"  [ngClass]=\"{'can-delete':actionType=='remove'}\">\r\n                      <div class=\"apps-item-overview\">\r\n                        <span class=\"apps-item-icon only-img\">\r\n                            <img src=\"assets/img/analytics-40.png\" />\r\n                        </span>\r\n                        <a class=\"apps-item-title text-truncate\">{{apps_resource[languageCode][\"notice_Info\"]}}</a>\r\n                        <span class=\"state\"></span>\r\n                    </div>\r\n                    <div class=\"apps-item-detail\">\r\n                       <ul>\r\n                         <li><span class=\"badge badge-light\"><span [ngClass]=\"{'d-none':removeappGG}\">{{apps_resource[languageCode][\"running\"]}}</span><span [ngClass]=\"{'d-none':!removeappGG}\">未运行</span></span></li>\r\n                         <li>{{apps_resource[languageCode][\"notice_name\"]}}</li>\r\n                         <li>{{apps_resource[languageCode][\"notice_desc\"]}}</li>\r\n                       </ul>\r\n                    </div> <a class=\"delete-container\">\r\n                            <span><i class=\"material-icons align-middle\">delete</i></span>\r\n                        </a>\r\n                  </div>\r\n                  <div class=\"apps-item-box\" [ngClass]=\"{'can-delete':actionType=='remove'}\">\r\n                      <div class=\"apps-item-overview\">\r\n                          <span class=\"apps-item-icon only-img\">\r\n                              <img src=\"assets/img/analytics-44.png\" />\r\n                          </span>\r\n                        <a class=\"apps-item-title text-truncate\">{{apps_resource[languageCode][\"dispatch\"]}}</a>\r\n                        <span class=\"state\"></span>\r\n                    </div>\r\n                    <div class=\"apps-item-detail\">\r\n                       <ul>\r\n                         <li><span class=\"badge badge-light\"><span [ngClass]=\"{'d-none':removeappBX}\">{{apps_resource[languageCode][\"running\"]}}</span><span [ngClass]=\"{'d-none':!removeappBX}\">{{apps_resource[languageCode][\"unrunning\"]}}</span></span></li>\r\n                         <li>{{apps_resource[languageCode][\"name_dispatch\"]}}</li>\r\n                         <li>{{apps_resource[languageCode][\"desc_dispatch\"]}}</li>\r\n                       </ul>\r\n                    </div> <a class=\"delete-container\">\r\n                            <span><i class=\"material-icons align-middle\">delete</i></span>\r\n                        </a>\r\n                  </div>\r\n                  <div class=\"apps-item-box\" [ngClass]=\"{'can-delete':actionType=='remove'}\">\r\n                        <div class=\"apps-item-overview\">\r\n                            <span class=\"apps-item-icon only-img\">\r\n                                <img src=\"assets/img/analytics-44.png\" />\r\n                            </span>\r\n                          <a class=\"apps-item-title text-truncate\">HCM</a>\r\n                          <span class=\"state\"></span>\r\n                      </div>\r\n                      <div class=\"apps-item-detail\">\r\n                         <ul>\r\n                           <li><span class=\"badge badge-light\">{{apps_resource[languageCode][\"unrunning\"]}}</span></li>\r\n                           <li>{{apps_resource[languageCode][\"hcm\"]}}</li>\r\n                           <li>{{apps_resource[languageCode][\"desc_hcm\"]}}</li>\r\n                         </ul>\r\n                      </div> <a class=\"delete-container\">\r\n                              <span><i class=\"material-icons align-middle\">delete</i></span>\r\n                          </a>\r\n                    </div>\r\n                  <div class=\"apps-itemm-addapp text-center\">\r\n                        <span><i class=\"material-icons align-middle\">add</i></span>\r\n                  </div>\r\n             </section>\r\n          </div>\r\n        </div>\r\n        <app-app-group *ngFor=\"let item of idList\" [funcList]=\"funcList\" [groupId]=\"item\" (appInfoWidgetClick)=\"handleAppClick($event)\"></app-app-group>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/component/applicationmanager/applicationmanager.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationManagerComponent", function() { return ApplicationManagerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_rtf_i18n_model__ = __webpack_require__("./src/app/models/rtf.i18n.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_rtf_common__ = __webpack_require__("./src/app/rtf-common.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_modal__ = __webpack_require__("./src/app/component/common/modal/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_mock_i18n_model__ = __webpack_require__("./src/app/models/mock.i18n.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { ModalDirective } from 'ngx-bootstrap';





var ApplicationManagerComponent = /** @class */ (function () {
    function ApplicationManagerComponent(element, renderer, router, cache) {
        this.renderer = renderer;
        this.router = router;
        this.cache = cache;
        this.idList = [];
        this.funcList = {};
        this.appClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.moduleClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.tempAppClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isCollapsedOn = false;
        this.isCollapsedCom = false;
        this.isCollapsedHT = false;
        this.isCollapsedGYL = false;
        this.actionType = '';
        this.closeRuning = false;
        this.appinstall = false;
        this.removeapp = false;
        this.removeappHT = false;
        this.removeappTB = false;
        this.removeappGG = false;
        this.removeappBX = false;
        this.languageCode = 'zh-CHS';
        this.element = element.nativeElement;
    }
    ApplicationManagerComponent.prototype.ngOnInit = function () {
        this.I18n = __WEBPACK_IMPORTED_MODULE_2__models_rtf_i18n_model__["I18n_frm"];
        this.dashboard_resource = __WEBPACK_IMPORTED_MODULE_5__models_mock_i18n_model__["i18n_dashboard"];
        this.apps_resource = __WEBPACK_IMPORTED_MODULE_5__models_mock_i18n_model__["i18n_apps"];
        if (this.cache.exists('languageCode')) {
            this.languageCode = this.cache.get('languageCode');
        }
    };
    ApplicationManagerComponent.prototype.changeAction = function (event, type) {
        var actionWrapDom = this.element.querySelector('.allapp-search-down-action');
        var curActiveDom = actionWrapDom.querySelector('.active');
        if (curActiveDom) {
            this.renderer.removeClass(curActiveDom, 'active');
        }
        if (type === this.actionType) {
            this.actionType = '';
            this.closeRuning = false;
            return;
        }
        var targetDom = event.currentTarget;
        this.renderer.addClass(targetDom, 'active');
        this.actionType = type;
        if (type === 'running') {
            this.closeRuning = false;
        }
    };
    ApplicationManagerComponent.prototype.reset = function () {
        // this.closeRuning = false;
        // const actionWrapDom = this.element.querySelector('.allapp-search-down-action');
        // const curActiveDom = actionWrapDom.querySelector('.active') as HTMLElement;
        // if (curActiveDom) {
        //   this.renderer.removeClass(curActiveDom, 'active');
        // }
        this.actionType = '';
        this.appinstall = false;
        this.removeapp = false;
        this.removeappHT = false;
        this.removeappTB = false;
        this.removeappGG = false;
        this.removeappBX = false;
    };
    // 向导
    ApplicationManagerComponent.prototype.navigateTo = function (url) {
        this.reset();
        this.staticModal.hide();
        this.tempAppClick.emit('');
        this.router.navigateByUrl(url);
    };
    // 处理AppGroupComponent下app的Click
    ApplicationManagerComponent.prototype.handleWidgetClick = function (appId) {
        this.reset();
        this.staticModal.hide();
        this.tempAppClick.emit('');
    };
    ApplicationManagerComponent.prototype.handleAppClick = function (id) {
        this.reset();
        this.staticModal.hide();
        this.appClick.emit(id);
    };
    ApplicationManagerComponent.prototype.handleModuleClick = function (id) {
        this.reset();
        this.staticModal.hide();
        this.moduleClick.emit(id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('staticModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__common_modal__["ModalDirective"])
    ], ApplicationManagerComponent.prototype, "staticModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ApplicationManagerComponent.prototype, "idList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ApplicationManagerComponent.prototype, "funcList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ApplicationManagerComponent.prototype, "currentAppID", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ApplicationManagerComponent.prototype, "currentModuleID", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ApplicationManagerComponent.prototype, "appClick", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ApplicationManagerComponent.prototype, "moduleClick", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ApplicationManagerComponent.prototype, "tempAppClick", void 0);
    ApplicationManagerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-applicationmanager',
            template: __webpack_require__("./src/app/component/applicationmanager/applicationmanager.component.html"),
            styles: [__webpack_require__("./src/app/component/applicationmanager/applicationmanager.component.css")],
            host: {
                class: 'gw-page-header-applicationmanager'
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_3__app_rtf_common__["CacheService"]])
    ], ApplicationManagerComponent);
    return ApplicationManagerComponent;
}());



/***/ }),

/***/ "./src/app/component/collectionmenu/collectionmenu.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/collectionmenu/collectionmenu.component.html":
/***/ (function(module, exports) {

module.exports = "<span dropdown>\r\n  <a dropdownToggle class=\"count-info\">\r\n    <i class=\"material-icons\">grade</i>\r\n    <span class=\"label label-warning\">16</span>\r\n  </a>\r\n  <!-- <ul *dropdownMenu class=\"dropdown-menu dropdown-tasks\">\r\n        <li>\r\n            <a href=\"mailbox.html\">\r\n                <div>\r\n                    <i class=\"fa fa-envelope fa-fw\"></i> You have 16 messages\r\n                    <span class=\"float-right text-muted small\">4 minutes ago</span>\r\n                </div>\r\n            </a>\r\n        </li>\r\n        <li class=\"divider\"></li>\r\n        <li>\r\n            <a href=\"profile.html\">\r\n                <div>\r\n                    <i class=\"fa fa-twitter fa-fw\"></i> 3 New Followers\r\n                    <span class=\"float-right text-muted small\">12 minutes ago</span>\r\n                </div>\r\n            </a>\r\n        </li>\r\n    </ul> -->\r\n</span>\r\n"

/***/ }),

/***/ "./src/app/component/collectionmenu/collectionmenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionMenuComponent", function() { return CollectionMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CollectionMenuComponent = /** @class */ (function () {
    function CollectionMenuComponent() {
    }
    CollectionMenuComponent.prototype.ngOnInit = function () {
    };
    CollectionMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-collectionmenu',
            template: __webpack_require__("./src/app/component/collectionmenu/collectionmenu.component.html"),
            styles: [__webpack_require__("./src/app/component/collectionmenu/collectionmenu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CollectionMenuComponent);
    return CollectionMenuComponent;
}());



/***/ }),

/***/ "./src/app/component/common/collapse/collapse.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapseDirective", function() { return CollapseDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// todo: add animations when https://github.com/angular/angular/issues/9947 solved

var CollapseDirective = /** @class */ (function () {
    function CollapseDirective(_el, _renderer) {
        this._el = _el;
        this._renderer = _renderer;
        /** This event fires as soon as content collapses */
        this.collapsed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** This event fires as soon as content becomes visible */
        this.expanded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        // shown
        this.isExpanded = true;
        // hidden
        this.isCollapsed = false;
        // stale state
        this.isCollapse = true;
        // animation state
        this.isCollapsing = false;
    }
    Object.defineProperty(CollapseDirective.prototype, "collapse", {
        get: function () {
            return this.isExpanded;
        },
        /** A flag indicating visibility of content (shown or hidden) */
        set: function (value) {
            this.isExpanded = value;
            this.toggle();
        },
        enumerable: true,
        configurable: true
    });
    /** allows to manually toggle content visibility */
    CollapseDirective.prototype.toggle = function () {
        if (this.isExpanded) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    /** allows to manually hide content */
    CollapseDirective.prototype.hide = function () {
        this.isCollapse = false;
        this.isCollapsing = true;
        this.isExpanded = false;
        this.isCollapsed = true;
        this.isCollapse = true;
        this.isCollapsing = false;
        this.display = 'none';
        this.collapsed.emit(this);
    };
    /** allows to manually show collapsed content */
    CollapseDirective.prototype.show = function () {
        this.isCollapse = false;
        this.isCollapsing = true;
        this.isExpanded = true;
        this.isCollapsed = false;
        this.display = 'block';
        // this.height = 'auto';
        this.isCollapse = true;
        this.isCollapsing = false;
        this._renderer.setStyle(this._el.nativeElement, 'overflow', 'visible');
        this._renderer.setStyle(this._el.nativeElement, 'height', 'auto');
        this.expanded.emit(this);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], CollapseDirective.prototype, "collapsed", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], CollapseDirective.prototype, "expanded", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('style.display'),
        __metadata("design:type", String)
    ], CollapseDirective.prototype, "display", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.in'),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.show'),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('attr.aria-expanded'),
        __metadata("design:type", Object)
    ], CollapseDirective.prototype, "isExpanded", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('attr.aria-hidden'),
        __metadata("design:type", Object)
    ], CollapseDirective.prototype, "isCollapsed", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.collapse'),
        __metadata("design:type", Object)
    ], CollapseDirective.prototype, "isCollapse", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.collapsing'),
        __metadata("design:type", Object)
    ], CollapseDirective.prototype, "isCollapsing", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], CollapseDirective.prototype, "collapse", null);
    CollapseDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[collapse]',
            exportAs: 'bs-collapse',
            host: {
                '[class.collapse]': 'true'
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]])
    ], CollapseDirective);
    return CollapseDirective;
}());



/***/ }),

/***/ "./src/app/component/common/collapse/collapse.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapseModule", function() { return CollapseModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__collapse_directive__ = __webpack_require__("./src/app/component/common/collapse/collapse.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CollapseModule = /** @class */ (function () {
    function CollapseModule() {
    }
    CollapseModule_1 = CollapseModule;
    CollapseModule.forRoot = function () {
        return { ngModule: CollapseModule_1, providers: [] };
    };
    var CollapseModule_1;
    CollapseModule = CollapseModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__collapse_directive__["CollapseDirective"]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__collapse_directive__["CollapseDirective"]]
        })
    ], CollapseModule);
    return CollapseModule;
}());



/***/ }),

/***/ "./src/app/component/common/collapse/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__collapse_directive__ = __webpack_require__("./src/app/component/common/collapse/collapse.directive.ts");
/* unused harmony reexport CollapseDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__collapse_module__ = __webpack_require__("./src/app/component/common/collapse/collapse.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CollapseModule", function() { return __WEBPACK_IMPORTED_MODULE_1__collapse_module__["CollapseModule"]; });




/***/ }),

/***/ "./src/app/component/common/component-loader/component-loader.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentLoader", function() { return ComponentLoader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_triggers__ = __webpack_require__("./src/app/component/common/utils/triggers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__content_ref_class__ = __webpack_require__("./src/app/component/common/component-loader/content-ref.class.ts");
// tslint:disable:max-file-line-count
// todo: add delay support
// todo: merge events onShow, onShown, etc...
// todo: add global positioning configuration?



var ComponentLoader = /** @class */ (function () {
    /**
     * Do not use this directly, it should be instanced via
     * `ComponentLoadFactory.attach`
     * @internal
     */
    // tslint:disable-next-line
    function ComponentLoader(_viewContainerRef, _renderer, _elementRef, _injector, _componentFactoryResolver, _ngZone, _applicationRef, _posService) {
        this._viewContainerRef = _viewContainerRef;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._injector = _injector;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._applicationRef = _applicationRef;
        this._posService = _posService;
        this.onBeforeShow = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onShown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onBeforeHide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onHidden = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._providers = [];
        this._isHiding = false;
        this._listenOpts = {};
        this._globalListener = Function.prototype;
    }
    Object.defineProperty(ComponentLoader.prototype, "isShown", {
        get: function () {
            if (this._isHiding) {
                return false;
            }
            return !!this._componentRef;
        },
        enumerable: true,
        configurable: true
    });
    ComponentLoader.prototype.attach = function (compType) {
        this._componentFactory = this._componentFactoryResolver
            .resolveComponentFactory(compType);
        return this;
    };
    // todo: add behaviour: to target element, `body`, custom element
    ComponentLoader.prototype.to = function (container) {
        this.container = container || this.container;
        return this;
    };
    ComponentLoader.prototype.position = function (opts) {
        this.attachment = opts.attachment || this.attachment;
        this._elementRef = opts.target || this._elementRef;
        return this;
    };
    ComponentLoader.prototype.provide = function (provider) {
        this._providers.push(provider);
        return this;
    };
    // todo: appendChild to element or document.querySelector(this.container)
    ComponentLoader.prototype.show = function (opts) {
        if (opts === void 0) { opts = {}; }
        this._subscribePositioning();
        this._innerComponent = null;
        if (!this._componentRef) {
            this.onBeforeShow.emit();
            this._contentRef = this._getContentRef(opts.content, opts.context, opts.initialState);
            var injector = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ReflectiveInjector"].resolveAndCreate(this._providers, this._injector);
            this._componentRef = this._componentFactory.create(injector, this._contentRef.nodes);
            this._applicationRef.attachView(this._componentRef.hostView);
            // this._componentRef = this._viewContainerRef
            //   .createComponent(this._componentFactory, 0, injector, this._contentRef.nodes);
            this.instance = this._componentRef.instance;
            Object.assign(this._componentRef.instance, opts);
            if (this.container instanceof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) {
                this.container.nativeElement.appendChild(this._componentRef.location.nativeElement);
            }
            if (this.container === 'body' && typeof document !== 'undefined') {
                document
                    .querySelector(this.container)
                    .appendChild(this._componentRef.location.nativeElement);
            }
            if (!this.container &&
                this._elementRef &&
                this._elementRef.nativeElement.parentElement) {
                this._elementRef.nativeElement.parentElement.appendChild(this._componentRef.location.nativeElement);
            }
            // we need to manually invoke change detection since events registered
            // via
            // Renderer::listen() are not picked up by change detection with the
            // OnPush strategy
            if (this._contentRef.componentRef) {
                this._innerComponent = this._contentRef.componentRef.instance;
                this._contentRef.componentRef.changeDetectorRef.markForCheck();
                this._contentRef.componentRef.changeDetectorRef.detectChanges();
            }
            this._componentRef.changeDetectorRef.markForCheck();
            this._componentRef.changeDetectorRef.detectChanges();
            this.onShown.emit(this._componentRef.instance);
        }
        this._registerOutsideClick();
        return this._componentRef;
    };
    ComponentLoader.prototype.hide = function () {
        if (!this._componentRef) {
            return this;
        }
        this.onBeforeHide.emit(this._componentRef.instance);
        var componentEl = this._componentRef.location.nativeElement;
        componentEl.parentNode.removeChild(componentEl);
        if (this._contentRef.componentRef) {
            this._contentRef.componentRef.destroy();
        }
        this._componentRef.destroy();
        if (this._viewContainerRef && this._contentRef.viewRef) {
            this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
        }
        if (this._contentRef.viewRef) {
            this._contentRef.viewRef.destroy();
        }
        // this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._componentRef.hostView));
        //
        // if (this._contentRef.viewRef && this._viewContainerRef.indexOf(this._contentRef.viewRef) !== -1) {
        //   this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
        // }
        this._contentRef = null;
        this._componentRef = null;
        this._removeGlobalListener();
        this.onHidden.emit();
        return this;
    };
    ComponentLoader.prototype.toggle = function () {
        if (this.isShown) {
            this.hide();
            return;
        }
        this.show();
    };
    ComponentLoader.prototype.dispose = function () {
        if (this.isShown) {
            this.hide();
        }
        this._unsubscribePositioning();
        if (this._unregisterListenersFn) {
            this._unregisterListenersFn();
        }
    };
    ComponentLoader.prototype.listen = function (listenOpts) {
        var _this = this;
        this.triggers = listenOpts.triggers || this.triggers;
        this._listenOpts.outsideClick = listenOpts.outsideClick;
        listenOpts.target = listenOpts.target || this._elementRef.nativeElement;
        var hide = (this._listenOpts.hide = function () {
            return listenOpts.hide ? listenOpts.hide() : void _this.hide();
        });
        var show = (this._listenOpts.show = function (registerHide) {
            listenOpts.show ? listenOpts.show(registerHide) : _this.show(registerHide);
            registerHide();
        });
        var toggle = function (registerHide) {
            _this.isShown ? hide() : show(registerHide);
        };
        this._unregisterListenersFn = Object(__WEBPACK_IMPORTED_MODULE_1__utils_triggers__["listenToTriggersV2"])(this._renderer, {
            target: listenOpts.target,
            triggers: listenOpts.triggers,
            show: show,
            hide: hide,
            toggle: toggle
        });
        return this;
    };
    ComponentLoader.prototype._removeGlobalListener = function () {
        if (this._globalListener) {
            this._globalListener();
            this._globalListener = null;
        }
    };
    ComponentLoader.prototype.attachInline = function (vRef, template) {
        this._inlineViewRef = vRef.createEmbeddedView(template);
        return this;
    };
    ComponentLoader.prototype._registerOutsideClick = function () {
        var _this = this;
        if (!this._componentRef || !this._componentRef.location) {
            return;
        }
        // why: should run after first event bubble
        if (this._listenOpts.outsideClick) {
            var target_1 = this._componentRef.location.nativeElement;
            setTimeout(function () {
                _this._globalListener = Object(__WEBPACK_IMPORTED_MODULE_1__utils_triggers__["registerOutsideClick"])(_this._renderer, {
                    targets: [target_1, _this._elementRef.nativeElement],
                    outsideClick: _this._listenOpts.outsideClick,
                    hide: function () { return _this._listenOpts.hide(); }
                });
            });
        }
    };
    ComponentLoader.prototype.getInnerComponent = function () {
        return this._innerComponent;
    };
    ComponentLoader.prototype._subscribePositioning = function () {
        var _this = this;
        if (this._zoneSubscription || !this.attachment) {
            return;
        }
        this._zoneSubscription = this._ngZone.onStable.subscribe(function () {
            if (!_this._componentRef) {
                return;
            }
            _this._posService.position({
                element: _this._componentRef.location,
                target: _this._elementRef,
                attachment: _this.attachment,
                appendToBody: _this.container === 'body'
            });
        });
    };
    ComponentLoader.prototype._unsubscribePositioning = function () {
        if (!this._zoneSubscription) {
            return;
        }
        this._zoneSubscription.unsubscribe();
        this._zoneSubscription = null;
    };
    ComponentLoader.prototype._getContentRef = function (content, context, initialState) {
        if (!content) {
            return new __WEBPACK_IMPORTED_MODULE_2__content_ref_class__["ContentRef"]([]);
        }
        if (content instanceof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) {
            if (this._viewContainerRef) {
                var _viewRef = this._viewContainerRef
                    .createEmbeddedView(content, context);
                _viewRef.markForCheck();
                return new __WEBPACK_IMPORTED_MODULE_2__content_ref_class__["ContentRef"]([_viewRef.rootNodes], _viewRef);
            }
            var viewRef = content.createEmbeddedView({});
            this._applicationRef.attachView(viewRef);
            return new __WEBPACK_IMPORTED_MODULE_2__content_ref_class__["ContentRef"]([viewRef.rootNodes], viewRef);
        }
        if (typeof content === 'function') {
            var contentCmptFactory = this._componentFactoryResolver.resolveComponentFactory(content);
            var modalContentInjector = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ReflectiveInjector"].resolveAndCreate(this._providers.slice(), this._injector);
            var componentRef = contentCmptFactory.create(modalContentInjector);
            Object.assign(componentRef.instance, initialState);
            this._applicationRef.attachView(componentRef.hostView);
            return new __WEBPACK_IMPORTED_MODULE_2__content_ref_class__["ContentRef"]([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
        }
        return new __WEBPACK_IMPORTED_MODULE_2__content_ref_class__["ContentRef"]([[this._renderer.createText("" + content)]]);
    };
    return ComponentLoader;
}());



/***/ }),

/***/ "./src/app/component/common/component-loader/component-loader.factory.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentLoaderFactory", function() { return ComponentLoaderFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_loader_class__ = __webpack_require__("./src/app/component/common/component-loader/component-loader.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__positioning_index__ = __webpack_require__("./src/app/component/common/positioning/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComponentLoaderFactory = /** @class */ (function () {
    function ComponentLoaderFactory(_componentFactoryResolver, _ngZone, _injector, _posService, _applicationRef) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._injector = _injector;
        this._posService = _posService;
        this._applicationRef = _applicationRef;
    }
    /**
     *
     * @param _elementRef
     * @param _viewContainerRef
     * @param _renderer
     * @returns {ComponentLoader}
     */
    ComponentLoaderFactory.prototype.createLoader = function (_elementRef, _viewContainerRef, _renderer) {
        return new __WEBPACK_IMPORTED_MODULE_1__component_loader_class__["ComponentLoader"](_viewContainerRef, _renderer, _elementRef, this._injector, this._componentFactoryResolver, this._ngZone, this._applicationRef, this._posService);
    };
    ComponentLoaderFactory = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"],
            __WEBPACK_IMPORTED_MODULE_2__positioning_index__["PositioningService"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"]])
    ], ComponentLoaderFactory);
    return ComponentLoaderFactory;
}());



/***/ }),

/***/ "./src/app/component/common/component-loader/content-ref.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentRef", function() { return ContentRef; });
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
var ContentRef = /** @class */ (function () {
    function ContentRef(nodes, viewRef, componentRef) {
        this.nodes = nodes;
        this.viewRef = viewRef;
        this.componentRef = componentRef;
    }
    return ContentRef;
}());



/***/ }),

/***/ "./src/app/component/common/component-loader/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component_loader_class__ = __webpack_require__("./src/app/component/common/component-loader/component-loader.class.ts");
/* unused harmony reexport ComponentLoader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_loader_factory__ = __webpack_require__("./src/app/component/common/component-loader/component-loader.factory.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentLoaderFactory", function() { return __WEBPACK_IMPORTED_MODULE_1__component_loader_factory__["ComponentLoaderFactory"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__content_ref_class__ = __webpack_require__("./src/app/component/common/component-loader/content-ref.class.ts");
/* unused harmony reexport ContentRef */





/***/ }),

/***/ "./src/app/component/common/dropdown/bs-dropdown-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownContainerComponent", function() { return BsDropdownContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bs_dropdown_state__ = __webpack_require__("./src/app/component/common/dropdown/bs-dropdown.state.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_theme_provider__ = __webpack_require__("./src/app/component/common/utils/theme-provider.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BsDropdownContainerComponent = /** @class */ (function () {
    function BsDropdownContainerComponent(_state, cd, _renderer, _element) {
        var _this = this;
        this._state = _state;
        this.cd = cd;
        this._renderer = _renderer;
        this.isOpen = false;
        this._subscription = _state.isOpenChange.subscribe(function (value) {
            _this.isOpen = value;
            var dropdown = _element.nativeElement.querySelector('.dropdown-menu');
            if (dropdown && !Object(__WEBPACK_IMPORTED_MODULE_2__utils_theme_provider__["isBs3"])()) {
                _this._renderer.addClass(dropdown, 'show');
                if (dropdown.classList.contains('dropdown-menu-right')) {
                    _this._renderer.setStyle(dropdown, 'left', 'auto');
                    _this._renderer.setStyle(dropdown, 'right', '0');
                }
                if (_this.direction === 'up') {
                    _this._renderer.setStyle(dropdown, 'top', 'auto');
                    _this._renderer.setStyle(dropdown, 'transform', 'translateY(-101%)');
                }
            }
            _this.cd.markForCheck();
            _this.cd.detectChanges();
        });
    }
    Object.defineProperty(BsDropdownContainerComponent.prototype, "direction", {
        get: function () {
            return this._state.direction;
        },
        enumerable: true,
        configurable: true
    });
    BsDropdownContainerComponent.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    BsDropdownContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'bs-dropdown-container',
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            host: {
                style: 'display:block;position: absolute;'
            },
            template: "\n    <div [class.dropup]=\"direction === 'up'\"\n         [class.dropdown]=\"direction === 'down'\"\n         [class.show]=\"isOpen\"\n         [class.open]=\"isOpen\"><ng-content></ng-content></div>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__bs_dropdown_state__["BsDropdownState"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], BsDropdownContainerComponent);
    return BsDropdownContainerComponent;
}());



/***/ }),

/***/ "./src/app/component/common/dropdown/bs-dropdown-menu.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownMenuDirective", function() { return BsDropdownMenuDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bs_dropdown_state__ = __webpack_require__("./src/app/component/common/dropdown/bs-dropdown.state.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BsDropdownMenuDirective = /** @class */ (function () {
    function BsDropdownMenuDirective(_state, _viewContainer, _templateRef) {
        _state.resolveDropdownMenu({
            templateRef: _templateRef,
            viewContainer: _viewContainer
        });
    }
    BsDropdownMenuDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[bsDropdownMenu],[dropdownMenu]',
            exportAs: 'bs-dropdown-menu'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__bs_dropdown_state__["BsDropdownState"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]])
    ], BsDropdownMenuDirective);
    return BsDropdownMenuDirective;
}());



/***/ }),

/***/ "./src/app/component/common/dropdown/bs-dropdown-toggle.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownToggleDirective", function() { return BsDropdownToggleDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bs_dropdown_state__ = __webpack_require__("./src/app/component/common/dropdown/bs-dropdown.state.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BsDropdownToggleDirective = /** @class */ (function () {
    function BsDropdownToggleDirective(_state, _element) {
        var _this = this;
        this._state = _state;
        this._element = _element;
        this.isDisabled = null;
        this._subscriptions = [];
        // sync is open value with state
        this._subscriptions.push(this._state.isOpenChange.subscribe(function (value) { return (_this.isOpen = value); }));
        // populate disabled state
        this._subscriptions.push(this._state.isDisabledChange.subscribe(function (value) { return (_this.isDisabled = value || null); }));
    }
    BsDropdownToggleDirective.prototype.onClick = function () {
        if (this.isDisabled) {
            return;
        }
        this._state.toggleClick.emit(true);
    };
    BsDropdownToggleDirective.prototype.onDocumentClick = function (event) {
        if (this._state.autoClose &&
            event.button !== 2 &&
            !this._element.nativeElement.contains(event.target)) {
            this._state.toggleClick.emit(false);
        }
    };
    BsDropdownToggleDirective.prototype.onEsc = function () {
        if (this._state.autoClose) {
            this._state.toggleClick.emit(false);
        }
    };
    BsDropdownToggleDirective.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this._subscriptions; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('attr.disabled'),
        __metadata("design:type", Boolean)
    ], BsDropdownToggleDirective.prototype, "isDisabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('attr.aria-expanded'),
        __metadata("design:type", Boolean)
    ], BsDropdownToggleDirective.prototype, "isOpen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BsDropdownToggleDirective.prototype, "onClick", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], BsDropdownToggleDirective.prototype, "onDocumentClick", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('keyup.esc'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BsDropdownToggleDirective.prototype, "onEsc", null);
    BsDropdownToggleDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[bsDropdownToggle],[dropdownToggle]',
            exportAs: 'bs-dropdown-toggle',
            host: {
                '[attr.aria-haspopup]': 'true'
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__bs_dropdown_state__["BsDropdownState"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], BsDropdownToggleDirective);
    return BsDropdownToggleDirective;
}());



/***/ }),

/***/ "./src/app/component/common/dropdown/bs-dropdown.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownConfig", function() { return BsDropdownConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/** Default dropdown configuration */
var BsDropdownConfig = /** @class */ (function () {
    function BsDropdownConfig() {
        /** default dropdown auto closing behavior */
        this.autoClose = true;
    }
    BsDropdownConfig = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], BsDropdownConfig);
    return BsDropdownConfig;
}());



/***/ }),

/***/ "./src/app/component/common/dropdown/bs-dropdown.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownDirective", function() { return BsDropdownDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_loader_index__ = __webpack_require__("./src/app/component/common/component-loader/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bs_dropdown_config__ = __webpack_require__("./src/app/component/common/dropdown/bs-dropdown.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bs_dropdown_container_component__ = __webpack_require__("./src/app/component/common/dropdown/bs-dropdown-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bs_dropdown_state__ = __webpack_require__("./src/app/component/common/dropdown/bs-dropdown.state.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_theme_provider__ = __webpack_require__("./src/app/component/common/utils/theme-provider.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// tslint:disable:max-file-line-count







var BsDropdownDirective = /** @class */ (function () {
    function BsDropdownDirective(_elementRef, _renderer, _viewContainerRef, _cis, _config, _state) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._viewContainerRef = _viewContainerRef;
        this._cis = _cis;
        this._config = _config;
        this._state = _state;
        // todo: move to component loader
        this._isInlineOpen = false;
        this._subscriptions = [];
        this._isInited = false;
        // set initial dropdown state from config
        this._state.autoClose = this._config.autoClose;
        // create dropdown component loader
        this._dropdown = this._cis
            .createLoader(this._elementRef, this._viewContainerRef, this._renderer)
            .provide({ provide: __WEBPACK_IMPORTED_MODULE_5__bs_dropdown_state__["BsDropdownState"], useValue: this._state });
        this.onShown = this._dropdown.onShown;
        this.onHidden = this._dropdown.onHidden;
        this.isOpenChange = this._state.isOpenChange;
    }
    Object.defineProperty(BsDropdownDirective.prototype, "autoClose", {
        get: function () {
            return this._state.autoClose;
        },
        /**
         * Indicates that dropdown will be closed on item or document click,
         * and after pressing ESC
         */
        set: function (value) {
            this._state.autoClose = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isDisabled", {
        get: function () {
            return this._isDisabled;
        },
        /**
         * Disables dropdown toggle and hides dropdown menu if opened
         */
        set: function (value) {
            this._isDisabled = value;
            this._state.isDisabledChange.emit(value);
            if (value) {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the popover is currently being shown
         */
        get: function () {
            if (this._showInline) {
                return this._isInlineOpen;
            }
            return this._dropdown.isShown;
        },
        set: function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isBs4", {
        get: function () {
            return !Object(__WEBPACK_IMPORTED_MODULE_6__utils_theme_provider__["isBs3"])();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "_showInline", {
        get: function () {
            return !this.container;
        },
        enumerable: true,
        configurable: true
    });
    BsDropdownDirective.prototype.ngOnInit = function () {
        var _this = this;
        // fix: seems there are an issue with `routerLinkActive`
        // which result in duplicated call ngOnInit without call to ngOnDestroy
        // read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
        if (this._isInited) {
            return;
        }
        this._isInited = true;
        // attach DOM listeners
        this._dropdown.listen({
            // because of dropdown inline mode
            outsideClick: false,
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
        // toggle visibility on toggle element click
        this._subscriptions.push(this._state.toggleClick.subscribe(function (value) { return _this.toggle(value); }));
        // hide dropdown if set disabled while opened
        this._subscriptions.push(this._state.isDisabledChange
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["filter"])(function (value) { return value; }))
            .subscribe(function (value) { return _this.hide(); }));
    };
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    BsDropdownDirective.prototype.show = function () {
        var _this = this;
        if (this.isOpen || this.isDisabled) {
            return;
        }
        if (this._showInline) {
            if (!this._inlinedMenu) {
                this._state.dropdownMenu.then(function (dropdownMenu) {
                    _this._dropdown.attachInline(dropdownMenu.viewContainer, dropdownMenu.templateRef);
                    _this._inlinedMenu = _this._dropdown._inlineViewRef;
                    _this.addBs4Polyfills();
                })
                    // swallow errors
                    .catch();
            }
            this.addBs4Polyfills();
            this._isInlineOpen = true;
            this.onShown.emit(true);
            this._state.isOpenChange.emit(true);
            return;
        }
        this._state.dropdownMenu.then(function (dropdownMenu) {
            // check direction in which dropdown should be opened
            var _dropup = _this.dropup ||
                (typeof _this.dropup !== 'undefined' && _this.dropup);
            _this._state.direction = _dropup ? 'up' : 'down';
            var _placement = _this.placement || (_dropup ? 'top left' : 'bottom left');
            // show dropdown
            _this._dropdown
                .attach(__WEBPACK_IMPORTED_MODULE_4__bs_dropdown_container_component__["BsDropdownContainerComponent"])
                .to(_this.container)
                .position({ attachment: _placement })
                .show({
                content: dropdownMenu.templateRef,
                placement: _placement
            });
            _this._state.isOpenChange.emit(true);
        })
            // swallow error
            .catch();
    };
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    BsDropdownDirective.prototype.hide = function () {
        if (!this.isOpen) {
            return;
        }
        if (this._showInline) {
            this.removeShowClass();
            this.removeDropupStyles();
            this._isInlineOpen = false;
            this.onHidden.emit(true);
        }
        else {
            this._dropdown.hide();
        }
        this._state.isOpenChange.emit(false);
    };
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover. With parameter <code>true</code> allows toggling, with parameter <code>false</code>
     * only hides opened dropdown. Parameter usage will be removed in ngx-bootstrap v3
     */
    BsDropdownDirective.prototype.toggle = function (value) {
        if (this.isOpen || !value) {
            return this.hide();
        }
        return this.show();
    };
    BsDropdownDirective.prototype.ngOnDestroy = function () {
        // clean up subscriptions and destroy dropdown
        for (var _i = 0, _a = this._subscriptions; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
        this._dropdown.dispose();
    };
    BsDropdownDirective.prototype.addBs4Polyfills = function () {
        if (!Object(__WEBPACK_IMPORTED_MODULE_6__utils_theme_provider__["isBs3"])()) {
            this.addShowClass();
            this.checkRightAlignment();
            this.addDropupStyles();
        }
    };
    BsDropdownDirective.prototype.addShowClass = function () {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            this._renderer.addClass(this._inlinedMenu.rootNodes[0], 'show');
        }
    };
    BsDropdownDirective.prototype.removeShowClass = function () {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            this._renderer.removeClass(this._inlinedMenu.rootNodes[0], 'show');
        }
    };
    BsDropdownDirective.prototype.checkRightAlignment = function () {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            var isRightAligned = this._inlinedMenu.rootNodes[0].classList.contains('dropdown-menu-right');
            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'left', isRightAligned ? 'auto' : '0');
            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'right', isRightAligned ? '0' : 'auto');
        }
    };
    BsDropdownDirective.prototype.addDropupStyles = function () {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            // a little hack to not break support of bootstrap 4 beta
            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'top', this.dropup ? 'auto' : '100%');
            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'transform', this.dropup ? 'translateY(-101%)' : 'translateY(0)');
        }
    };
    BsDropdownDirective.prototype.removeDropupStyles = function () {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], 'top');
            this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], 'transform');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], BsDropdownDirective.prototype, "placement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], BsDropdownDirective.prototype, "triggers", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], BsDropdownDirective.prototype, "container", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], BsDropdownDirective.prototype, "dropup", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], BsDropdownDirective.prototype, "autoClose", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], BsDropdownDirective.prototype, "isDisabled", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], BsDropdownDirective.prototype, "isOpen", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], BsDropdownDirective.prototype, "isOpenChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], BsDropdownDirective.prototype, "onShown", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], BsDropdownDirective.prototype, "onHidden", void 0);
    BsDropdownDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[bsDropdown],[dropdown]',
            exportAs: 'bs-dropdown',
            providers: [__WEBPACK_IMPORTED_MODULE_5__bs_dropdown_state__["BsDropdownState"]],
            host: {
                '[class.dropup]': 'dropup',
                '[class.open]': 'isOpen',
                '[class.show]': 'isOpen && isBs4'
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"],
            __WEBPACK_IMPORTED_MODULE_2__component_loader_index__["ComponentLoaderFactory"],
            __WEBPACK_IMPORTED_MODULE_3__bs_dropdown_config__["BsDropdownConfig"],
            __WEBPACK_IMPORTED_MODULE_5__bs_dropdown_state__["BsDropdownState"]])
    ], BsDropdownDirective);
    return BsDropdownDirective;
}());



/***/ }),

/***/ "./src/app/component/common/dropdown/bs-dropdown.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownModule", function() { return BsDropdownModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_loader_index__ = __webpack_require__("./src/app/component/common/component-loader/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__positioning_index__ = __webpack_require__("./src/app/component/common/positioning/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bs_dropdown_container_component__ = __webpack_require__("./src/app/component/common/dropdown/bs-dropdown-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bs_dropdown_menu_directive__ = __webpack_require__("./src/app/component/common/dropdown/bs-dropdown-menu.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bs_dropdown_toggle_directive__ = __webpack_require__("./src/app/component/common/dropdown/bs-dropdown-toggle.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bs_dropdown_config__ = __webpack_require__("./src/app/component/common/dropdown/bs-dropdown.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bs_dropdown_directive__ = __webpack_require__("./src/app/component/common/dropdown/bs-dropdown.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__bs_dropdown_state__ = __webpack_require__("./src/app/component/common/dropdown/bs-dropdown.state.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var BsDropdownModule = /** @class */ (function () {
    function BsDropdownModule() {
    }
    BsDropdownModule_1 = BsDropdownModule;
    BsDropdownModule.forRoot = function (config) {
        return {
            ngModule: BsDropdownModule_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__component_loader_index__["ComponentLoaderFactory"],
                __WEBPACK_IMPORTED_MODULE_2__positioning_index__["PositioningService"],
                __WEBPACK_IMPORTED_MODULE_8__bs_dropdown_state__["BsDropdownState"],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_6__bs_dropdown_config__["BsDropdownConfig"],
                    useValue: config ? config : { autoClose: true }
                }
            ]
        };
    };
    var BsDropdownModule_1;
    BsDropdownModule = BsDropdownModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__bs_dropdown_menu_directive__["BsDropdownMenuDirective"],
                __WEBPACK_IMPORTED_MODULE_5__bs_dropdown_toggle_directive__["BsDropdownToggleDirective"],
                __WEBPACK_IMPORTED_MODULE_3__bs_dropdown_container_component__["BsDropdownContainerComponent"],
                __WEBPACK_IMPORTED_MODULE_7__bs_dropdown_directive__["BsDropdownDirective"]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__bs_dropdown_menu_directive__["BsDropdownMenuDirective"],
                __WEBPACK_IMPORTED_MODULE_5__bs_dropdown_toggle_directive__["BsDropdownToggleDirective"],
                __WEBPACK_IMPORTED_MODULE_7__bs_dropdown_directive__["BsDropdownDirective"]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_3__bs_dropdown_container_component__["BsDropdownContainerComponent"]]
        })
    ], BsDropdownModule);
    return BsDropdownModule;
}());



/***/ }),

/***/ "./src/app/component/common/dropdown/bs-dropdown.state.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownState", function() { return BsDropdownState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BsDropdownState = /** @class */ (function () {
    function BsDropdownState() {
        var _this = this;
        this.direction = 'down';
        this.isOpenChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isDisabledChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.toggleClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dropdownMenu = new Promise(function (resolve) {
            _this.resolveDropdownMenu = resolve;
        });
    }
    BsDropdownState = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], BsDropdownState);
    return BsDropdownState;
}());



/***/ }),

/***/ "./src/app/component/common/dropdown/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bs_dropdown_directive__ = __webpack_require__("./src/app/component/common/dropdown/bs-dropdown.directive.ts");
/* unused harmony reexport BsDropdownDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bs_dropdown_menu_directive__ = __webpack_require__("./src/app/component/common/dropdown/bs-dropdown-menu.directive.ts");
/* unused harmony reexport BsDropdownMenuDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bs_dropdown_toggle_directive__ = __webpack_require__("./src/app/component/common/dropdown/bs-dropdown-toggle.directive.ts");
/* unused harmony reexport BsDropdownToggleDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bs_dropdown_container_component__ = __webpack_require__("./src/app/component/common/dropdown/bs-dropdown-container.component.ts");
/* unused harmony reexport BsDropdownContainerComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bs_dropdown_state__ = __webpack_require__("./src/app/component/common/dropdown/bs-dropdown.state.ts");
/* unused harmony reexport BsDropdownState */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bs_dropdown_config__ = __webpack_require__("./src/app/component/common/dropdown/bs-dropdown.config.ts");
/* unused harmony reexport BsDropdownConfig */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bs_dropdown_module__ = __webpack_require__("./src/app/component/common/dropdown/bs-dropdown.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownModule", function() { return __WEBPACK_IMPORTED_MODULE_6__bs_dropdown_module__["BsDropdownModule"]; });









/***/ }),

/***/ "./src/app/component/common/general-drawer/general-drawer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralDrawerComponent", function() { return GeneralDrawerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_rtf_common__ = __webpack_require__("./src/app/rtf-common.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GeneralDrawerComponent = /** @class */ (function () {
    function GeneralDrawerComponent(drawerSer) {
        var _this = this;
        this.drawerSer = drawerSer;
        this.closeState = false;
        // 默认不显示
        this.hideState = true;
        this.drawerSer.getDrawerClose().subscribe({
            next: function (value) {
                _this.closeState = value;
            }
        });
        this.drawerSer.getDrawerData().subscribe({
            next: function (data) {
                _this.drawerData = data;
            }
        });
        this.drawerSer.getDrawerHide().subscribe({
            next: function (value) {
                _this.hideState = value;
            }
        });
    }
    GeneralDrawerComponent.prototype.ngOnInit = function () { };
    GeneralDrawerComponent.prototype.ngOnChanges = function (changes) { };
    GeneralDrawerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-general-drawer',
            template: "\n  <app-drawer [datas]=\"drawerData\" [customClass]=\"'general-drawer'\" [close]=\"closeState\" [hide]=\"hideState\"></app-drawer>\n  ",
            host: {
                class: 'd-flex'
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_rtf_common__["DrawerService"]])
    ], GeneralDrawerComponent);
    return GeneralDrawerComponent;
}());



/***/ }),

/***/ "./src/app/component/common/modal/bs-modal-ref.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsModalRef", function() { return BsModalRef; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BsModalRef = /** @class */ (function () {
    function BsModalRef() {
        /**
         * Hides the modal
         */
        this.hide = Function;
    }
    BsModalRef = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], BsModalRef);
    return BsModalRef;
}());



/***/ }),

/***/ "./src/app/component/common/modal/bs-modal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsModalService", function() { return BsModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_loader_component_loader_factory__ = __webpack_require__("./src/app/component/common/component-loader/component-loader.factory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_backdrop_component__ = __webpack_require__("./src/app/component/common/modal/modal-backdrop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_container_component__ = __webpack_require__("./src/app/component/common/modal/modal-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_options_class__ = __webpack_require__("./src/app/component/common/modal/modal-options.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bs_modal_ref_service__ = __webpack_require__("./src/app/component/common/modal/bs-modal-ref.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BsModalService = /** @class */ (function () {
    function BsModalService(rendererFactory, clf) {
        this.clf = clf;
        // constructor props
        this.config = __WEBPACK_IMPORTED_MODULE_4__modal_options_class__["modalConfigDefaults"];
        this.onShow = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onShown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onHide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onHidden = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.modalsCount = 0;
        this.lastDismissReason = '';
        this.loaders = [];
        this._backdropLoader = this.clf.createLoader(null, null, null);
        this._renderer = rendererFactory.createRenderer(null, null);
    }
    /** Shows a modal */
    BsModalService.prototype.show = function (content, config) {
        this.modalsCount++;
        this._createLoaders();
        this.config = Object.assign({}, __WEBPACK_IMPORTED_MODULE_4__modal_options_class__["modalConfigDefaults"], config);
        this._showBackdrop();
        this.lastDismissReason = null;
        return this._showModal(content);
    };
    BsModalService.prototype.hide = function (level) {
        var _this = this;
        if (this.modalsCount === 1) {
            this._hideBackdrop();
            this.resetScrollbar();
        }
        this.modalsCount = this.modalsCount >= 1 ? this.modalsCount - 1 : 0;
        setTimeout(function () {
            _this._hideModal(level);
            _this.removeLoaders(level);
        }, this.config.animated ? __WEBPACK_IMPORTED_MODULE_4__modal_options_class__["TRANSITION_DURATIONS"].BACKDROP : 0);
    };
    BsModalService.prototype._showBackdrop = function () {
        var isBackdropEnabled = this.config.backdrop || this.config.backdrop === 'static';
        var isBackdropInDOM = !this.backdropRef || !this.backdropRef.instance.isShown;
        if (this.modalsCount === 1) {
            this.removeBackdrop();
            if (isBackdropEnabled && isBackdropInDOM) {
                this._backdropLoader
                    .attach(__WEBPACK_IMPORTED_MODULE_2__modal_backdrop_component__["ModalBackdropComponent"])
                    .to('body')
                    .show({ isAnimated: this.config.animated });
                this.backdropRef = this._backdropLoader._componentRef;
            }
        }
    };
    BsModalService.prototype._hideBackdrop = function () {
        var _this = this;
        if (!this.backdropRef) {
            return;
        }
        this.backdropRef.instance.isShown = false;
        var duration = this.config.animated ? __WEBPACK_IMPORTED_MODULE_4__modal_options_class__["TRANSITION_DURATIONS"].BACKDROP : 0;
        setTimeout(function () { return _this.removeBackdrop(); }, duration);
    };
    BsModalService.prototype._showModal = function (content) {
        var modalLoader = this.loaders[this.loaders.length - 1];
        var bsModalRef = new __WEBPACK_IMPORTED_MODULE_5__bs_modal_ref_service__["BsModalRef"]();
        var modalContainerRef = modalLoader
            .provide({ provide: __WEBPACK_IMPORTED_MODULE_4__modal_options_class__["ModalOptions"], useValue: this.config })
            .provide({ provide: __WEBPACK_IMPORTED_MODULE_5__bs_modal_ref_service__["BsModalRef"], useValue: bsModalRef })
            .attach(__WEBPACK_IMPORTED_MODULE_3__modal_container_component__["ModalContainerComponent"])
            .to('body')
            .show({ content: content, isAnimated: this.config.animated, initialState: this.config.initialState, bsModalService: this });
        modalContainerRef.instance.level = this.getModalsCount();
        bsModalRef.hide = function () {
            modalContainerRef.instance.hide();
        };
        bsModalRef.content = modalLoader.getInnerComponent() || null;
        return bsModalRef;
    };
    BsModalService.prototype._hideModal = function (level) {
        var modalLoader = this.loaders[level - 1];
        if (modalLoader) {
            modalLoader.hide();
        }
    };
    BsModalService.prototype.getModalsCount = function () {
        return this.modalsCount;
    };
    BsModalService.prototype.setDismissReason = function (reason) {
        this.lastDismissReason = reason;
    };
    BsModalService.prototype.removeBackdrop = function () {
        this._backdropLoader.hide();
        this.backdropRef = null;
    };
    /** AFTER PR MERGE MODAL.COMPONENT WILL BE USING THIS CODE */
    /** Scroll bar tricks */
    /** @internal */
    BsModalService.prototype.checkScrollbar = function () {
        this.isBodyOverflowing = document.body.clientWidth < window.innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    };
    BsModalService.prototype.setScrollbar = function () {
        if (!document) {
            return;
        }
        this.originalBodyPadding = parseInt(window
            .getComputedStyle(document.body)
            .getPropertyValue('padding-right') || '0', 10);
        if (this.isBodyOverflowing) {
            document.body.style.paddingRight = this.originalBodyPadding +
                this.scrollbarWidth + "px";
        }
    };
    BsModalService.prototype.resetScrollbar = function () {
        document.body.style.paddingRight = this.originalBodyPadding + "px";
    };
    // thx d.walsh
    BsModalService.prototype.getScrollbarWidth = function () {
        var scrollDiv = this._renderer.createElement('div');
        this._renderer.addClass(scrollDiv, __WEBPACK_IMPORTED_MODULE_4__modal_options_class__["CLASS_NAME"].SCROLLBAR_MEASURER);
        this._renderer.appendChild(document.body, scrollDiv);
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this._renderer.removeChild(document.body, scrollDiv);
        return scrollbarWidth;
    };
    BsModalService.prototype._createLoaders = function () {
        var loader = this.clf.createLoader(null, null, null);
        this.copyEvent(loader.onBeforeShow, this.onShow);
        this.copyEvent(loader.onShown, this.onShown);
        this.copyEvent(loader.onBeforeHide, this.onHide);
        this.copyEvent(loader.onHidden, this.onHidden);
        this.loaders.push(loader);
    };
    BsModalService.prototype.removeLoaders = function (level) {
        this.loaders.splice(level - 1, 1);
        this.loaders.forEach(function (loader, i) {
            loader.instance.level = i + 1;
        });
    };
    BsModalService.prototype.copyEvent = function (from, to) {
        var _this = this;
        from.subscribe(function () {
            to.emit(_this.lastDismissReason);
        });
    };
    BsModalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["RendererFactory2"], __WEBPACK_IMPORTED_MODULE_1__component_loader_component_loader_factory__["ComponentLoaderFactory"]])
    ], BsModalService);
    return BsModalService;
}());



/***/ }),

/***/ "./src/app/component/common/modal/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bs_modal_ref_service__ = __webpack_require__("./src/app/component/common/modal/bs-modal-ref.service.ts");
/* unused harmony reexport BsModalRef */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_backdrop_options__ = __webpack_require__("./src/app/component/common/modal/modal-backdrop.options.ts");
/* unused harmony reexport ModalBackdropOptions */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_container_component__ = __webpack_require__("./src/app/component/common/modal/modal-container.component.ts");
/* unused harmony reexport ModalContainerComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_backdrop_component__ = __webpack_require__("./src/app/component/common/modal/modal-backdrop.component.ts");
/* unused harmony reexport ModalBackdropComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_options_class__ = __webpack_require__("./src/app/component/common/modal/modal-options.class.ts");
/* unused harmony reexport ModalOptions */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_directive__ = __webpack_require__("./src/app/component/common/modal/modal.directive.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDirective", function() { return __WEBPACK_IMPORTED_MODULE_5__modal_directive__["ModalDirective"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modal_module__ = __webpack_require__("./src/app/component/common/modal/modal.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return __WEBPACK_IMPORTED_MODULE_6__modal_module__["ModalModule"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bs_modal_service__ = __webpack_require__("./src/app/component/common/modal/bs-modal.service.ts");
/* unused harmony reexport BsModalService */










/***/ }),

/***/ "./src/app/component/common/modal/modal-backdrop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBackdropComponent", function() { return ModalBackdropComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_options_class__ = __webpack_require__("./src/app/component/common/modal/modal-options.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_theme_provider__ = __webpack_require__("./src/app/component/common/utils/theme-provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_utils_class__ = __webpack_require__("./src/app/component/common/utils/utils.class.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/** This component will be added as background layout for modals if enabled */
var ModalBackdropComponent = /** @class */ (function () {
    function ModalBackdropComponent(element, renderer) {
        this._isShown = false;
        this.element = element;
        this.renderer = renderer;
    }
    Object.defineProperty(ModalBackdropComponent.prototype, "isAnimated", {
        get: function () {
            return this._isAnimated;
        },
        set: function (value) {
            this._isAnimated = value;
            // this.renderer.setElementClass(this.element.nativeElement, `${ClassName.FADE}`, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalBackdropComponent.prototype, "isShown", {
        get: function () {
            return this._isShown;
        },
        set: function (value) {
            this._isShown = value;
            if (value) {
                this.renderer.addClass(this.element.nativeElement, "" + __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["CLASS_NAME"].IN);
            }
            else {
                this.renderer.removeClass(this.element.nativeElement, "" + __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["CLASS_NAME"].IN);
            }
            if (!Object(__WEBPACK_IMPORTED_MODULE_2__utils_theme_provider__["isBs3"])()) {
                if (value) {
                    this.renderer.addClass(this.element.nativeElement, "" + __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["CLASS_NAME"].SHOW);
                }
                else {
                    this.renderer.removeClass(this.element.nativeElement, "" + __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["CLASS_NAME"].SHOW);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    ModalBackdropComponent.prototype.ngOnInit = function () {
        if (this.isAnimated) {
            this.renderer.addClass(this.element.nativeElement, "" + __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["CLASS_NAME"].FADE);
            __WEBPACK_IMPORTED_MODULE_3__utils_utils_class__["Utils"].reflow(this.element.nativeElement);
        }
        this.isShown = true;
    };
    ModalBackdropComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'bs-modal-backdrop',
            template: ' ',
            host: { class: __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["CLASS_NAME"].BACKDROP }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]])
    ], ModalBackdropComponent);
    return ModalBackdropComponent;
}());



/***/ }),

/***/ "./src/app/component/common/modal/modal-backdrop.options.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ModalBackdropOptions */
var ModalBackdropOptions = /** @class */ (function () {
    function ModalBackdropOptions(options) {
        this.animate = true;
        Object.assign(this, options);
    }
    return ModalBackdropOptions;
}());



/***/ }),

/***/ "./src/app/component/common/modal/modal-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalContainerComponent", function() { return ModalContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_options_class__ = __webpack_require__("./src/app/component/common/modal/modal-options.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_theme_provider__ = __webpack_require__("./src/app/component/common/utils/theme-provider.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModalContainerComponent = /** @class */ (function () {
    function ModalContainerComponent(options, _element, _renderer) {
        this._element = _element;
        this._renderer = _renderer;
        this.isShown = false;
        this.isModalHiding = false;
        this.config = Object.assign({}, options);
    }
    ModalContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.isAnimated) {
            this._renderer.addClass(this._element.nativeElement, __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["CLASS_NAME"].FADE);
        }
        this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
        setTimeout(function () {
            _this.isShown = true;
            _this._renderer.addClass(_this._element.nativeElement, Object(__WEBPACK_IMPORTED_MODULE_2__utils_theme_provider__["isBs3"])() ? __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["CLASS_NAME"].IN : __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["CLASS_NAME"].SHOW);
        }, this.isAnimated ? __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["TRANSITION_DURATIONS"].BACKDROP : 0);
        if (document && document.body) {
            if (this.bsModalService.getModalsCount() === 1) {
                this.bsModalService.checkScrollbar();
                this.bsModalService.setScrollbar();
            }
            this._renderer.addClass(document.body, __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["CLASS_NAME"].OPEN);
        }
        if (this._element.nativeElement) {
            this._element.nativeElement.focus();
        }
    };
    ModalContainerComponent.prototype.onClick = function (event) {
        if (this.config.ignoreBackdropClick ||
            this.config.backdrop === 'static' ||
            event.target !== this._element.nativeElement) {
            return;
        }
        this.bsModalService.setDismissReason(__WEBPACK_IMPORTED_MODULE_1__modal_options_class__["DISMISS_REASONS"].BACKRDOP);
        this.hide();
    };
    ModalContainerComponent.prototype.onEsc = function (event) {
        if (!this.isShown) {
            return;
        }
        if (event.keyCode === 27) {
            event.preventDefault();
        }
        if (this.config.keyboard &&
            this.level === this.bsModalService.getModalsCount()) {
            this.bsModalService.setDismissReason(__WEBPACK_IMPORTED_MODULE_1__modal_options_class__["DISMISS_REASONS"].ESC);
            this.hide();
        }
    };
    ModalContainerComponent.prototype.ngOnDestroy = function () {
        if (this.isShown) {
            this.hide();
        }
    };
    ModalContainerComponent.prototype.hide = function () {
        var _this = this;
        if (this.isModalHiding || !this.isShown) {
            return;
        }
        this.isModalHiding = true;
        this._renderer.removeClass(this._element.nativeElement, Object(__WEBPACK_IMPORTED_MODULE_2__utils_theme_provider__["isBs3"])() ? __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["CLASS_NAME"].IN : __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["CLASS_NAME"].SHOW);
        setTimeout(function () {
            _this.isShown = false;
            if (document &&
                document.body &&
                _this.bsModalService.getModalsCount() === 1) {
                _this._renderer.removeClass(document.body, __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["CLASS_NAME"].OPEN);
            }
            _this.bsModalService.hide(_this.level);
            _this.isModalHiding = false;
        }, this.isAnimated ? __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["TRANSITION_DURATIONS"].MODAL : 0);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ModalContainerComponent.prototype, "onClick", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:keydown.esc', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ModalContainerComponent.prototype, "onEsc", null);
    ModalContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'modal-container',
            template: "\n    <div [class]=\"'modal-dialog' + (config.class ? ' ' + config.class : '')\" role=\"document\">\n      <div class=\"modal-content\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  ",
            host: {
                class: 'modal',
                role: 'dialog',
                tabindex: '-1',
                '[attr.aria-modal]': 'true'
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__modal_options_class__["ModalOptions"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]])
    ], ModalContainerComponent);
    return ModalContainerComponent;
}());



/***/ }),

/***/ "./src/app/component/common/modal/modal-options.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalOptions", function() { return ModalOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalConfigDefaults", function() { return modalConfigDefaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_NAME", function() { return CLASS_NAME; });
/* unused harmony export SELECTOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSITION_DURATIONS", function() { return TRANSITION_DURATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISMISS_REASONS", function() { return DISMISS_REASONS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ModalOptions = /** @class */ (function () {
    function ModalOptions() {
    }
    ModalOptions = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], ModalOptions);
    return ModalOptions;
}());

var modalConfigDefaults = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: false,
    ignoreBackdropClick: false,
    class: '',
    animated: true,
    initialState: {}
};
var CLASS_NAME = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    IN: 'in',
    SHOW: 'show' // bs4
};
var SELECTOR = {
    DIALOG: '.modal-dialog',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed'
};
var TRANSITION_DURATIONS = {
    MODAL: 300,
    BACKDROP: 150
};
var DISMISS_REASONS = {
    BACKRDOP: 'backdrop-click',
    ESC: 'esc'
};


/***/ }),

/***/ "./src/app/component/common/modal/modal.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDirective", function() { return ModalDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__ = __webpack_require__("./src/app/component/common/utils/facade/browser.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_theme_provider__ = __webpack_require__("./src/app/component/common/utils/theme-provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_utils_class__ = __webpack_require__("./src/app/component/common/utils/utils.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_backdrop_component__ = __webpack_require__("./src/app/component/common/modal/modal-backdrop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_options_class__ = __webpack_require__("./src/app/component/common/modal/modal-options.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_loader_component_loader_factory__ = __webpack_require__("./src/app/component/common/component-loader/component-loader.factory.ts");
/* tslint:disable:max-file-line-count */
// todo: should we support enforce focus in?
// todo: in original bs there are was a way to prevent modal from showing
// todo: original modal had resize events
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TRANSITION_DURATION = 300;
var BACKDROP_TRANSITION_DURATION = 150;
/** Mark any code with directive to show it's content in modal */
var ModalDirective = /** @class */ (function () {
    function ModalDirective(_element, _viewContainerRef, _renderer, clf) {
        this._element = _element;
        this._renderer = _renderer;
        /** This event fires immediately when the `show` instance method is called. */
        this.onShow = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** This event is fired when the modal has been made visible to the user
         * (will wait for CSS transitions to complete)
         */
        this.onShown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** This event is fired immediately when
         * the hide instance method has been called.
         */
        this.onHide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** This event is fired when the modal has finished being
         * hidden from the user (will wait for CSS transitions to complete).
         */
        this.onHidden = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._isShown = false;
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.timerHideModal = 0;
        this.timerRmBackDrop = 0;
        this.isNested = false;
        this._backdrop = clf.createLoader(_element, _viewContainerRef, _renderer);
    }
    Object.defineProperty(ModalDirective.prototype, "config", {
        get: function () {
            return this._config;
        },
        /** allows to set modal configuration via element property */
        set: function (conf) {
            this._config = this.getConfig(conf);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalDirective.prototype, "isShown", {
        get: function () {
            return this._isShown;
        },
        enumerable: true,
        configurable: true
    });
    ModalDirective.prototype.onClick = function (event) {
        if (this.config.ignoreBackdropClick ||
            this.config.backdrop === 'static' ||
            event.target !== this._element.nativeElement) {
            return;
        }
        this.dismissReason = __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["DISMISS_REASONS"].BACKRDOP;
        this.hide(event);
    };
    // todo: consider preventing default and stopping propagation
    ModalDirective.prototype.onEsc = function (event) {
        if (!this._isShown) {
            return;
        }
        if (event.keyCode === 27) {
            event.preventDefault();
        }
        if (this.config.keyboard) {
            this.dismissReason = __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["DISMISS_REASONS"].ESC;
            this.hide();
        }
    };
    ModalDirective.prototype.ngOnDestroy = function () {
        this.config = void 0;
        if (this._isShown) {
            this._isShown = false;
            this.hideModal();
            this._backdrop.dispose();
        }
    };
    ModalDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._config = this._config || this.getConfig();
        setTimeout(function () {
            if (_this._config.show) {
                _this.show();
            }
        }, 0);
    };
    /* Public methods */
    /** Allows to manually toggle modal visibility */
    ModalDirective.prototype.toggle = function () {
        return this._isShown ? this.hide() : this.show();
    };
    /** Allows to manually open modal */
    ModalDirective.prototype.show = function () {
        var _this = this;
        this.dismissReason = null;
        this.onShow.emit(this);
        if (this._isShown) {
            return;
        }
        clearTimeout(this.timerHideModal);
        clearTimeout(this.timerRmBackDrop);
        this._isShown = true;
        this.checkScrollbar();
        this.setScrollbar();
        if (__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["document"] && __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["document"].body) {
            if (__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["document"].body.classList.contains(__WEBPACK_IMPORTED_MODULE_5__modal_options_class__["CLASS_NAME"].OPEN)) {
                this.isNested = true;
            }
            else {
                this._renderer.addClass(__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["document"].body, __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["CLASS_NAME"].OPEN);
            }
        }
        this.showBackdrop(function () {
            _this.showElement();
        });
    };
    /** Allows to manually close modal */
    ModalDirective.prototype.hide = function (event) {
        var _this = this;
        if (event) {
            event.preventDefault();
        }
        this.onHide.emit(this);
        // todo: add an option to prevent hiding
        if (!this._isShown) {
            return;
        }
        clearTimeout(this.timerHideModal);
        clearTimeout(this.timerRmBackDrop);
        this._isShown = false;
        this._renderer.removeClass(this._element.nativeElement, __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["CLASS_NAME"].IN);
        if (!Object(__WEBPACK_IMPORTED_MODULE_2__utils_theme_provider__["isBs3"])()) {
            this._renderer.removeClass(this._element.nativeElement, __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["CLASS_NAME"].SHOW);
        }
        // this._addClassIn = false;
        if (this._config.animated) {
            this.timerHideModal = setTimeout(function () { return _this.hideModal(); }, TRANSITION_DURATION);
        }
        else {
            this.hideModal();
        }
    };
    /** Private methods @internal */
    ModalDirective.prototype.getConfig = function (config) {
        return Object.assign({}, __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["modalConfigDefaults"], config);
    };
    /**
     *  Show dialog
     *  @internal
     */
    ModalDirective.prototype.showElement = function () {
        var _this = this;
        // todo: replace this with component loader usage
        if (!this._element.nativeElement.parentNode ||
            this._element.nativeElement.parentNode.nodeType !== Node.ELEMENT_NODE) {
            // don't move modals dom position
            if (__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["document"] && __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["document"].body) {
                __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["document"].body.appendChild(this._element.nativeElement);
            }
        }
        this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'false');
        this._renderer.setAttribute(this._element.nativeElement, 'aria-modal', 'true');
        this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
        this._renderer.setProperty(this._element.nativeElement, 'scrollTop', 0);
        if (this._config.animated) {
            __WEBPACK_IMPORTED_MODULE_3__utils_utils_class__["Utils"].reflow(this._element.nativeElement);
        }
        // this._addClassIn = true;
        this._renderer.addClass(this._element.nativeElement, __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["CLASS_NAME"].IN);
        if (!Object(__WEBPACK_IMPORTED_MODULE_2__utils_theme_provider__["isBs3"])()) {
            this._renderer.addClass(this._element.nativeElement, __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["CLASS_NAME"].SHOW);
        }
        var transitionComplete = function () {
            if (_this._config.focus) {
                _this._element.nativeElement.focus();
            }
            _this.onShown.emit(_this);
        };
        if (this._config.animated) {
            setTimeout(transitionComplete, TRANSITION_DURATION);
        }
        else {
            transitionComplete();
        }
    };
    /** @internal */
    ModalDirective.prototype.hideModal = function () {
        var _this = this;
        this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'true');
        this._renderer.setStyle(this._element.nativeElement, 'display', 'none');
        this.showBackdrop(function () {
            if (!_this.isNested) {
                if (__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["document"] && __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["document"].body) {
                    _this._renderer.removeClass(__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["document"].body, __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["CLASS_NAME"].OPEN);
                }
                _this.resetScrollbar();
            }
            _this.resetAdjustments();
            _this.focusOtherModal();
            _this.onHidden.emit(_this);
        });
    };
    // todo: original show was calling a callback when done, but we can use
    // promise
    /** @internal */
    ModalDirective.prototype.showBackdrop = function (callback) {
        var _this = this;
        if (this._isShown &&
            this.config.backdrop &&
            (!this.backdrop || !this.backdrop.instance.isShown)) {
            this.removeBackdrop();
            this._backdrop
                .attach(__WEBPACK_IMPORTED_MODULE_4__modal_backdrop_component__["ModalBackdropComponent"])
                .to('body')
                .show({ isAnimated: this._config.animated });
            this.backdrop = this._backdrop._componentRef;
            if (!callback) {
                return;
            }
            if (!this._config.animated) {
                callback();
                return;
            }
            setTimeout(callback, BACKDROP_TRANSITION_DURATION);
        }
        else if (!this._isShown && this.backdrop) {
            this.backdrop.instance.isShown = false;
            var callbackRemove = function () {
                _this.removeBackdrop();
                if (callback) {
                    callback();
                }
            };
            if (this.backdrop.instance.isAnimated) {
                this.timerRmBackDrop = setTimeout(callbackRemove, BACKDROP_TRANSITION_DURATION);
            }
            else {
                callbackRemove();
            }
        }
        else if (callback) {
            callback();
        }
    };
    /** @internal */
    ModalDirective.prototype.removeBackdrop = function () {
        this._backdrop.hide();
    };
    /** Events tricks */
    // no need for it
    // protected setEscapeEvent():void {
    //   if (this._isShown && this._config.keyboard) {
    //     $(this._element).on(Event.KEYDOWN_DISMISS, (event) => {
    //       if (event.which === 27) {
    //         this.hide()
    //       }
    //     })
    //
    //   } else if (!this._isShown) {
    //     $(this._element).off(Event.KEYDOWN_DISMISS)
    //   }
    // }
    // protected setResizeEvent():void {
    // console.log(this.renderer.listenGlobal('', Event.RESIZE));
    // if (this._isShown) {
    //   $(window).on(Event.RESIZE, $.proxy(this._handleUpdate, this))
    // } else {
    //   $(window).off(Event.RESIZE)
    // }
    // }
    ModalDirective.prototype.focusOtherModal = function () {
        if (this._element.nativeElement.parentElement == null)
            return;
        var otherOpenedModals = this._element.nativeElement.parentElement.querySelectorAll('.in[bsModal]');
        if (!otherOpenedModals.length) {
            return;
        }
        otherOpenedModals[otherOpenedModals.length - 1].focus();
    };
    /** @internal */
    ModalDirective.prototype.resetAdjustments = function () {
        this._renderer.setStyle(this._element.nativeElement, 'paddingLeft', '');
        this._renderer.setStyle(this._element.nativeElement, 'paddingRight', '');
    };
    /** Scroll bar tricks */
    /** @internal */
    ModalDirective.prototype.checkScrollbar = function () {
        this.isBodyOverflowing = __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["document"].body.clientWidth < __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["window"].innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    };
    ModalDirective.prototype.setScrollbar = function () {
        if (!__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["document"]) {
            return;
        }
        this.originalBodyPadding = parseInt(__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["window"]
            .getComputedStyle(__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["document"].body)
            .getPropertyValue('padding-right') || 0, 10);
        if (this.isBodyOverflowing) {
            __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["document"].body.style.paddingRight = this.originalBodyPadding +
                this.scrollbarWidth + "px";
        }
    };
    ModalDirective.prototype.resetScrollbar = function () {
        __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["document"].body.style.paddingRight = this.originalBodyPadding + 'px';
    };
    // thx d.walsh
    ModalDirective.prototype.getScrollbarWidth = function () {
        var scrollDiv = this._renderer.createElement('div');
        this._renderer.addClass(scrollDiv, __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["CLASS_NAME"].SCROLLBAR_MEASURER);
        this._renderer.appendChild(__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["document"].body, scrollDiv);
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this._renderer.removeChild(__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["document"].body, scrollDiv);
        return scrollbarWidth;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["ModalOptions"]),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__modal_options_class__["ModalOptions"]])
    ], ModalDirective.prototype, "config", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ModalDirective.prototype, "onShow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ModalDirective.prototype, "onShown", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ModalDirective.prototype, "onHide", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ModalDirective.prototype, "onHidden", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ModalDirective.prototype, "onClick", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('keydown.esc', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ModalDirective.prototype, "onEsc", null);
    ModalDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[bsModal]',
            exportAs: 'bs-modal'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"],
            __WEBPACK_IMPORTED_MODULE_6__component_loader_component_loader_factory__["ComponentLoaderFactory"]])
    ], ModalDirective);
    return ModalDirective;
}());



/***/ }),

/***/ "./src/app/component/common/modal/modal.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return ModalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_backdrop_component__ = __webpack_require__("./src/app/component/common/modal/modal-backdrop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_directive__ = __webpack_require__("./src/app/component/common/modal/modal.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__positioning_index__ = __webpack_require__("./src/app/component/common/positioning/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_loader_index__ = __webpack_require__("./src/app/component/common/component-loader/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_container_component__ = __webpack_require__("./src/app/component/common/modal/modal-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bs_modal_service__ = __webpack_require__("./src/app/component/common/modal/bs-modal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ModalModule = /** @class */ (function () {
    function ModalModule() {
    }
    ModalModule_1 = ModalModule;
    ModalModule.forRoot = function () {
        return {
            ngModule: ModalModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_6__bs_modal_service__["BsModalService"], __WEBPACK_IMPORTED_MODULE_4__component_loader_index__["ComponentLoaderFactory"], __WEBPACK_IMPORTED_MODULE_3__positioning_index__["PositioningService"]]
        };
    };
    var ModalModule_1;
    ModalModule = ModalModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__modal_backdrop_component__["ModalBackdropComponent"],
                __WEBPACK_IMPORTED_MODULE_2__modal_directive__["ModalDirective"],
                __WEBPACK_IMPORTED_MODULE_5__modal_container_component__["ModalContainerComponent"]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__modal_backdrop_component__["ModalBackdropComponent"], __WEBPACK_IMPORTED_MODULE_2__modal_directive__["ModalDirective"]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_1__modal_backdrop_component__["ModalBackdropComponent"], __WEBPACK_IMPORTED_MODULE_5__modal_container_component__["ModalContainerComponent"]]
        })
    ], ModalModule);
    return ModalModule;
}());



/***/ }),

/***/ "./src/app/component/common/positioning/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ng_positioning__ = __webpack_require__("./src/app/component/common/positioning/ng-positioning.ts");
/* unused harmony reexport positionElements */
/* unused harmony reexport Positioning */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__positioning_service__ = __webpack_require__("./src/app/component/common/positioning/positioning.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PositioningService", function() { return __WEBPACK_IMPORTED_MODULE_1__positioning_service__["PositioningService"]; });




/***/ }),

/***/ "./src/app/component/common/positioning/ng-positioning.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Positioning */
/* harmony export (immutable) */ __webpack_exports__["positionElements"] = positionElements;
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
// tslint:disable
var Positioning = /** @class */ (function () {
    function Positioning() {
    }
    Positioning.prototype.position = function (element, round) {
        if (round === void 0) { round = true; }
        var elPosition;
        var parentOffset = {
            width: 0,
            height: 0,
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        };
        if (this.getStyle(element, 'position') === 'fixed') {
            var bcRect = element.getBoundingClientRect();
            elPosition = {
                width: bcRect.width,
                height: bcRect.height,
                top: bcRect.top,
                bottom: bcRect.bottom,
                left: bcRect.left,
                right: bcRect.right
            };
        }
        else {
            var offsetParentEl = this.offsetParent(element);
            elPosition = this.offset(element, false);
            if (offsetParentEl !== document.documentElement) {
                parentOffset = this.offset(offsetParentEl, false);
            }
            parentOffset.top += offsetParentEl.clientTop;
            parentOffset.left += offsetParentEl.clientLeft;
        }
        elPosition.top -= parentOffset.top;
        elPosition.bottom -= parentOffset.top;
        elPosition.left -= parentOffset.left;
        elPosition.right -= parentOffset.left;
        if (round) {
            elPosition.top = Math.round(elPosition.top);
            elPosition.bottom = Math.round(elPosition.bottom);
            elPosition.left = Math.round(elPosition.left);
            elPosition.right = Math.round(elPosition.right);
        }
        return elPosition;
    };
    Positioning.prototype.offset = function (element, round) {
        if (round === void 0) { round = true; }
        var elBcr = element.getBoundingClientRect();
        var viewportOffset = {
            top: window.pageYOffset - document.documentElement.clientTop,
            left: window.pageXOffset - document.documentElement.clientLeft
        };
        var elOffset = {
            height: elBcr.height || element.offsetHeight,
            width: elBcr.width || element.offsetWidth,
            top: elBcr.top + viewportOffset.top,
            bottom: elBcr.bottom + viewportOffset.top,
            left: elBcr.left + viewportOffset.left,
            right: elBcr.right + viewportOffset.left
        };
        if (round) {
            elOffset.height = Math.round(elOffset.height);
            elOffset.width = Math.round(elOffset.width);
            elOffset.top = Math.round(elOffset.top);
            elOffset.bottom = Math.round(elOffset.bottom);
            elOffset.left = Math.round(elOffset.left);
            elOffset.right = Math.round(elOffset.right);
        }
        return elOffset;
    };
    Positioning.prototype.positionElements = function (hostElement, targetElement, placement, appendToBody) {
        var hostElPosition = appendToBody
            ? this.offset(hostElement, false)
            : this.position(hostElement, false);
        var targetElStyles = this.getAllStyles(targetElement);
        var shiftWidth = {
            left: hostElPosition.left,
            center: hostElPosition.left +
                hostElPosition.width / 2 -
                targetElement.offsetWidth / 2,
            right: hostElPosition.left + hostElPosition.width
        };
        var shiftHeight = {
            top: hostElPosition.top,
            center: hostElPosition.top +
                hostElPosition.height / 2 -
                targetElement.offsetHeight / 2,
            bottom: hostElPosition.top + hostElPosition.height
        };
        var targetElBCR = targetElement.getBoundingClientRect();
        var placementPrimary = placement.split(' ')[0] || 'top';
        var placementSecondary = placement.split(' ')[1] || 'center';
        var targetElPosition = {
            height: targetElBCR.height || targetElement.offsetHeight,
            width: targetElBCR.width || targetElement.offsetWidth,
            top: 0,
            bottom: targetElBCR.height || targetElement.offsetHeight,
            left: 0,
            right: targetElBCR.width || targetElement.offsetWidth
        };
        if (placementPrimary === 'auto') {
            var newPlacementPrimary = this.autoPosition(targetElPosition, hostElPosition, targetElement, placementSecondary);
            if (!newPlacementPrimary)
                newPlacementPrimary = this.autoPosition(targetElPosition, hostElPosition, targetElement);
            if (newPlacementPrimary)
                placementPrimary = newPlacementPrimary;
            targetElement.classList.add(placementPrimary);
        }
        switch (placementPrimary) {
            case 'top':
                targetElPosition.top =
                    hostElPosition.top -
                        (targetElement.offsetHeight +
                            parseFloat(targetElStyles.marginBottom));
                targetElPosition.bottom +=
                    hostElPosition.top - targetElement.offsetHeight;
                targetElPosition.left = shiftWidth[placementSecondary];
                targetElPosition.right += shiftWidth[placementSecondary];
                break;
            case 'bottom':
                targetElPosition.top = shiftHeight[placementPrimary];
                targetElPosition.bottom += shiftHeight[placementPrimary];
                targetElPosition.left = shiftWidth[placementSecondary];
                targetElPosition.right += shiftWidth[placementSecondary];
                break;
            case 'left':
                targetElPosition.top = shiftHeight[placementSecondary];
                targetElPosition.bottom += shiftHeight[placementSecondary];
                targetElPosition.left =
                    hostElPosition.left -
                        (targetElement.offsetWidth + parseFloat(targetElStyles.marginRight));
                targetElPosition.right +=
                    hostElPosition.left - targetElement.offsetWidth;
                break;
            case 'right':
                targetElPosition.top = shiftHeight[placementSecondary];
                targetElPosition.bottom += shiftHeight[placementSecondary];
                targetElPosition.left = shiftWidth[placementPrimary];
                targetElPosition.right += shiftWidth[placementPrimary];
                break;
        }
        targetElPosition.top = Math.round(targetElPosition.top);
        targetElPosition.bottom = Math.round(targetElPosition.bottom);
        targetElPosition.left = Math.round(targetElPosition.left);
        targetElPosition.right = Math.round(targetElPosition.right);
        return targetElPosition;
    };
    Positioning.prototype.autoPosition = function (targetElPosition, hostElPosition, targetElement, preferredPosition) {
        if ((!preferredPosition || preferredPosition === 'right') &&
            targetElPosition.left + hostElPosition.left - targetElement.offsetWidth <
                0) {
            return 'right';
        }
        else if ((!preferredPosition || preferredPosition === 'top') &&
            targetElPosition.bottom +
                hostElPosition.bottom +
                targetElement.offsetHeight >
                window.innerHeight) {
            return 'top';
        }
        else if ((!preferredPosition || preferredPosition === 'bottom') &&
            targetElPosition.top + hostElPosition.top - targetElement.offsetHeight < 0) {
            return 'bottom';
        }
        else if ((!preferredPosition || preferredPosition === 'left') &&
            targetElPosition.right +
                hostElPosition.right +
                targetElement.offsetWidth >
                window.innerWidth) {
            return 'left';
        }
        return null;
    };
    Positioning.prototype.getAllStyles = function (element) {
        return window.getComputedStyle(element);
    };
    Positioning.prototype.getStyle = function (element, prop) {
        return this.getAllStyles(element)[prop];
    };
    Positioning.prototype.isStaticPositioned = function (element) {
        return (this.getStyle(element, 'position') || 'static') === 'static';
    };
    Positioning.prototype.offsetParent = function (element) {
        var offsetParentEl = element.offsetParent || document.documentElement;
        while (offsetParentEl &&
            offsetParentEl !== document.documentElement &&
            this.isStaticPositioned(offsetParentEl)) {
            offsetParentEl = offsetParentEl.offsetParent;
        }
        return offsetParentEl || document.documentElement;
    };
    return Positioning;
}());

var positionService = new Positioning();
function positionElements(hostElement, targetElement, placement, appendToBody) {
    var pos = positionService.positionElements(hostElement, targetElement, placement, appendToBody);
    targetElement.style.top = pos.top + "px";
    targetElement.style.left = pos.left + "px";
}


/***/ }),

/***/ "./src/app/component/common/positioning/positioning.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositioningService", function() { return PositioningService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_positioning__ = __webpack_require__("./src/app/component/common/positioning/ng-positioning.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PositioningService = /** @class */ (function () {
    function PositioningService() {
    }
    PositioningService.prototype.position = function (options) {
        var element = options.element, target = options.target, attachment = options.attachment, appendToBody = options.appendToBody;
        Object(__WEBPACK_IMPORTED_MODULE_1__ng_positioning__["positionElements"])(_getHtmlElement(target), _getHtmlElement(element), attachment, appendToBody);
    };
    PositioningService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], PositioningService);
    return PositioningService;
}());

function _getHtmlElement(element) {
    // it means that we got a selector
    if (typeof element === 'string') {
        return document.querySelector(element);
    }
    if (element instanceof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) {
        return element.nativeElement;
    }
    return element;
}


/***/ }),

/***/ "./src/app/component/common/utils/facade/browser.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "window", function() { return win; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "document", function() { return document; });
/* unused harmony export location */
/* unused harmony export gc */
/* unused harmony export performance */
/* unused harmony export Event */
/* unused harmony export MouseEvent */
/* unused harmony export KeyboardEvent */
/* unused harmony export EventTarget */
/* unused harmony export History */
/* unused harmony export Location */
/* unused harmony export EventListener */
/*tslint:disable */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * JS version of browser APIs. This library can only run in the browser.
 */
var win = (typeof window !== 'undefined' && window) || {};

var document = win.document;
var location = win.location;
var gc = win['gc'] ? function () { return win['gc'](); } : function () { return null; };
var performance = win['performance'] ? win['performance'] : null;
var Event = win['Event'];
var MouseEvent = win['MouseEvent'];
var KeyboardEvent = win['KeyboardEvent'];
var EventTarget = win['EventTarget'];
var History = win['History'];
var Location = win['Location'];
var EventListener = win['EventListener'];


/***/ }),

/***/ "./src/app/component/common/utils/theme-provider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export setTheme */
/* harmony export (immutable) */ __webpack_exports__["isBs3"] = isBs3;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_browser__ = __webpack_require__("./src/app/component/common/utils/facade/browser.ts");

var guessedVersion;
function _guessBsVersion() {
    if (typeof document === 'undefined') {
        return null;
    }
    var spanEl = document.createElement('span');
    spanEl.innerText = 'test bs version';
    document.body.appendChild(spanEl);
    spanEl.classList.add('d-none');
    var rect = spanEl.getBoundingClientRect();
    document.body.removeChild(spanEl);
    if (!rect) {
        return 'bs3';
    }
    return rect.top === 0 ? 'bs4' : 'bs3';
}
function setTheme(theme) {
    guessedVersion = theme;
}
// todo: in ngx-bootstrap, bs4 will became a default one
function isBs3() {
    if (typeof __WEBPACK_IMPORTED_MODULE_0__facade_browser__["window"] === 'undefined') {
        return true;
    }
    if (typeof __WEBPACK_IMPORTED_MODULE_0__facade_browser__["window"].__theme === 'undefined') {
        if (guessedVersion) {
            return guessedVersion === 'bs3';
        }
        guessedVersion = _guessBsVersion();
        return guessedVersion === 'bs3';
    }
    return __WEBPACK_IMPORTED_MODULE_0__facade_browser__["window"].__theme !== 'bs4';
}


/***/ }),

/***/ "./src/app/component/common/utils/trigger.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trigger", function() { return Trigger; });
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
var Trigger = /** @class */ (function () {
    function Trigger(open, close) {
        this.open = open;
        this.close = close || open;
    }
    Trigger.prototype.isManual = function () {
        return this.open === 'manual' || this.close === 'manual';
    };
    return Trigger;
}());



/***/ }),

/***/ "./src/app/component/common/utils/triggers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export parseTriggers */
/* unused harmony export listenToTriggers */
/* harmony export (immutable) */ __webpack_exports__["listenToTriggersV2"] = listenToTriggersV2;
/* harmony export (immutable) */ __webpack_exports__["registerOutsideClick"] = registerOutsideClick;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__trigger_class__ = __webpack_require__("./src/app/component/common/utils/trigger.class.ts");

var DEFAULT_ALIASES = {
    hover: ['mouseover', 'mouseout'],
    focus: ['focusin', 'focusout']
};
function parseTriggers(triggers, aliases) {
    if (aliases === void 0) { aliases = DEFAULT_ALIASES; }
    var trimmedTriggers = (triggers || '').trim();
    if (trimmedTriggers.length === 0) {
        return [];
    }
    var parsedTriggers = trimmedTriggers
        .split(/\s+/)
        .map(function (trigger) { return trigger.split(':'); })
        .map(function (triggerPair) {
        var alias = aliases[triggerPair[0]] || triggerPair;
        return new __WEBPACK_IMPORTED_MODULE_0__trigger_class__["Trigger"](alias[0], alias[1]);
    });
    var manualTriggers = parsedTriggers.filter(function (triggerPair) {
        return triggerPair.isManual();
    });
    if (manualTriggers.length > 1) {
        throw new Error('Triggers parse error: only one manual trigger is allowed');
    }
    if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
        throw new Error('Triggers parse error: manual trigger can\'t be mixed with other triggers');
    }
    return parsedTriggers;
}
function listenToTriggers(renderer, target, triggers, showFn, hideFn, toggleFn) {
    var parsedTriggers = parseTriggers(triggers);
    var listeners = [];
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return Function.prototype;
    }
    parsedTriggers.forEach(function (trigger) {
        if (trigger.open === trigger.close) {
            listeners.push(renderer.listen(target, trigger.open, toggleFn));
            return;
        }
        listeners.push(renderer.listen(target, trigger.open, showFn), renderer.listen(target, trigger.close, hideFn));
    });
    return function () {
        listeners.forEach(function (unsubscribeFn) { return unsubscribeFn(); });
    };
}
function listenToTriggersV2(renderer, options) {
    var parsedTriggers = parseTriggers(options.triggers);
    var target = options.target;
    // do nothing
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return Function.prototype;
    }
    // all listeners
    var listeners = [];
    // lazy listeners registration
    var _registerHide = [];
    var registerHide = function () {
        // add hide listeners to unregister array
        _registerHide.forEach(function (fn) { return listeners.push(fn()); });
        // register hide events only once
        _registerHide.length = 0;
    };
    // register open\close\toggle listeners
    parsedTriggers.forEach(function (trigger) {
        var useToggle = trigger.open === trigger.close;
        var showFn = useToggle ? options.toggle : options.show;
        if (!useToggle) {
            _registerHide.push(function () {
                return renderer.listen(target, trigger.close, options.hide);
            });
        }
        listeners.push(renderer.listen(target, trigger.open, function () { return showFn(registerHide); }));
    });
    return function () {
        listeners.forEach(function (unsubscribeFn) { return unsubscribeFn(); });
    };
}
function registerOutsideClick(renderer, options) {
    if (!options.outsideClick) {
        return Function.prototype;
    }
    return renderer.listen('document', 'click', function (event) {
        if (options.target && options.target.contains(event.target)) {
            return;
        }
        if (options.targets &&
            options.targets.some(function (target) { return target.contains(event.target); })) {
            return;
        }
        options.hide();
    });
}


/***/ }),

/***/ "./src/app/component/common/utils/utils.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_browser__ = __webpack_require__("./src/app/component/common/utils/facade/browser.ts");

var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.reflow = function (element) {
        (function (bs) { return bs; })(element.offsetHeight);
    };
    // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
    Utils.getStyles = function (elem) {
        // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
        // IE throws on elements created in popups
        // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
        var view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
            view = __WEBPACK_IMPORTED_MODULE_0__facade_browser__["window"];
        }
        return view.getComputedStyle(elem);
    };
    return Utils;
}());



/***/ }),

/***/ "./src/app/component/createmenu/createmenu.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/createmenu/createmenu.component.html":
/***/ (function(module, exports) {

module.exports = "<span dropdown>\r\n    <a dropdownToggle class=\"count-info\">\r\n        <i class=\"material-icons\">add_circle</i>\r\n    </a>\r\n    <!-- <ul *dropdownMenu class=\"dropdown-menu dropdown-tasks\">\r\n        <li>\r\n            <a href=\"mailbox.html\">\r\n                <div>\r\n                    <i class=\"fa fa-envelope fa-fw\"></i> You have 16 messages\r\n                    <span class=\"float-right text-muted small\">4 minutes ago</span>\r\n                </div>\r\n            </a>\r\n        </li>\r\n        <li class=\"divider\"></li>\r\n        <li>\r\n            <a href=\"profile.html\">\r\n                <div>\r\n                    <i class=\"fa fa-twitter fa-fw\"></i> 3 New Followers\r\n                    <span class=\"float-right text-muted small\">12 minutes ago</span>\r\n                </div>\r\n            </a>\r\n        </li>\r\n    </ul> -->\r\n</span>\r\n"

/***/ }),

/***/ "./src/app/component/createmenu/createmenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateMenuComponent", function() { return CreateMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreateMenuComponent = /** @class */ (function () {
    function CreateMenuComponent() {
    }
    CreateMenuComponent.prototype.ngOnInit = function () {
    };
    CreateMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-createmenu',
            template: __webpack_require__("./src/app/component/createmenu/createmenu.component.html"),
            styles: [__webpack_require__("./src/app/component/createmenu/createmenu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CreateMenuComponent);
    return CreateMenuComponent;
}());



/***/ }),

/***/ "./src/app/component/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\r\n  <div class=\"float-right\">\r\n      10GB of <strong>250GB</strong> Free.\r\n  </div>\r\n  <div>\r\n      <strong>Copyright</strong> Example Company &copy; 2014-2017\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/component/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/component/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/component/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/component/header/header.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/component/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <nav class=\"navbar bg-white full-width\">\r\n    <div class=\"navbar-header pl-0\">\r\n      <span class=\"g-pointer float-left pl-1 pr-2 gw-header-icon-home\" (click)=\"navigateTo('main/home')\"><i  class=\"material-icons\">home</i></span>\r\n      <i class=\"material-icons  gw-header-icon-cloud\">cloud_done</i>\r\n      <span class=\"custome-font\">GSPCloud</span>\r\n    </div>\r\n    <app-topnavbar (seachClick)=\"fromSearchIconClick()\" (onAppClick)=\"fromShowAllAPP()\" [hasOnApp]=\"hasOnApp\"  ></app-topnavbar>\r\n  </nav>\r\n</div>\r\n<!--header顶部，正在运行应用下拉-->\r\n<div class=\"topheader-on-app\" [ngClass]=\"{'d-none':!hasOnApp ,'showlist':appdialogshow}\" (mouseenter)=\"showHideOnAppDialog(true)\" (mouseleave)=\"showHideOnAppDialog(false)\">\r\n  <div class=\"text-center topheader-on-app-header\">\r\n      <span>销售订单</span>\r\n      <span class=\"toac-icon g-pointer\"><i class=\"material-icons align-middle\">arrow_drop_down</i></span>\r\n  </div>\r\n  <div class=\"topheader-on-app-content\">\r\n      <ul class=\"topheader-on-app-list\"> \r\n          <li class=\"topl-item border-bottom close-others text-right\">\r\n              <span class=\"topl-item-text text-truncate text-primary\">关闭其他[5]</span>\r\n          </li>\r\n          <li class=\"topl-item text-truncate border-bottom\" [ngClass]=\"{'d-none':removeRuningApp}\">\r\n              <span class=\"topl-item-icon\" (click)=\"removeRuningApp=true\"><i class=\"material-icons align-middle\">close</i></span><span (click)=\"navigateTo('main/contract')\" class=\"topl-item-text\">合同管理</span>\r\n          </li>\r\n          <li class=\"topl-item text-truncate  border-bottom\">\r\n              <span class=\"topl-item-icon\"><i class=\"material-icons align-middle\">close</i></span><span class=\"topl-item-text\">报销</span>\r\n          </li>\r\n          <li class=\"topl-item  text-truncate border-bottom\">\r\n              <span class=\"topl-item-icon\"><i class=\"material-icons align-middle\">close</i></span><span class=\"topl-item-text\">HCM</span>\r\n          </li>\r\n          <li class=\"topl-item  text-truncate border-bottom\">\r\n              <span class=\"topl-item-icon\"><i class=\"material-icons align-middle\">close</i></span><span class=\"topl-item-text\">日志填报</span>\r\n          </li>\r\n          <li class=\"topl-item text-truncate border-0\">\r\n              <span class=\"topl-item-icon\"><i class=\"material-icons align-middle\">close</i></span><span class=\"topl-item-text\">公告信息</span>\r\n          </li>\r\n        </ul>\r\n  </div>\r\n</div>\r\n<!--header顶部，点击搜索框弹出内容-->\r\n<div class=\"fullscreen-show-search d-none\">\r\n  <button class=\"close p-2\" style=\"color:#fff\" (click)=\"closeSearchPanel()\">\r\n    <i class=\"material-icons\">close</i>\r\n  </button>\r\n  <div class=\"fullscreen-search-panel\">\r\n    <div class=\"input-group\">\r\n      <span class=\"input-group-addon search-control\">\r\n        <i class=\"material-icons\">search</i>\r\n      </span>\r\n      <!-- (focus)=\"focusSearch($event)\"   (ngModelChange)=\"searchChange($event)\"-->\r\n       <input type=\"text\" placeholder='{{I18n[languageCode][\"SearchTips\"]}}' class=\"form-control search-control\" name=\"top-search\" id=\"top-search\" [(ngModel)]=\"searchText\" (ngModelChange)=\"searchChange($event)\" />\r\n  \r\n    </div>\r\n  </div>\r\n\r\n  <section class=\"topheader-search-panel\">\r\n    <div class=\"topheader-search-default-panel\">\r\n      <div class=\"search-bg\">\r\n        <b class=\"topheader-search-classify-title\">{{I18n[languageCode][\"TopheaderSearch_Classification\"]}}</b>\r\n        <ul class=\"d-flex topheader-search-tab\">\r\n          <li class=\"tst-item\" type=\"function\" (click)=\"choose($event)\">\r\n            <span class=\"topheader-search-icon\">\r\n              <i class=\"material-icons\">apps</i>\r\n            </span>\r\n            <span class=\"topheader-search-text\">{{I18n[languageCode][\"TopheaderSearch_App\"]}}</span>\r\n          </li>\r\n          <li class=\"tst-item\" type=\"webform\" (click)=\"choose($event)\">\r\n            <span class=\"topheader-search-icon\">\r\n              <i class=\"material-icons\">web</i>\r\n            </span>\r\n            <span class=\"topheader-search-text\">{{I18n[languageCode][\"TopheaderSearch_Form\"]}}</span>\r\n          </li>\r\n          <li class=\"tst-item\" type=\"gspask\" (click)=\"choose($event)\">\r\n            <span class=\"topheader-search-icon\">\r\n              <i class=\"material-icons\">group</i>\r\n            </span>\r\n            <span class=\"topheader-search-text\">{{I18n[languageCode][\"TopheaderSearch_Community\"]}}</span>\r\n          </li>\r\n          <li class=\"tst-item topheader-search-add\" type=\"\" (click)=\"choose($event)\"></li>\r\n        </ul>\r\n        <div class=\"topheader-search-classify\">\r\n          <ul class=\"d-flex topheader-search-tab border-0\">\r\n            <li class=\"tst-item\" type=\"cloudapp\" (click)=\"addTab($event)\">\r\n              <span class=\"topheader-search-icon\">\r\n                <i class=\"material-icons\">cloud_queue</i>\r\n              </span>\r\n              <span class=\"topheader-search-text\">{{I18n[languageCode][\"TopheaderSearch_CloudApp\"]}}</span>\r\n            </li>\r\n            <li class=\"tst-item\" type=\"web\" (click)=\"addTab($event)\">\r\n              <span class=\"topheader-search-icon\">\r\n                <i class=\"material-icons\">language</i>\r\n              </span>\r\n              <span class=\"topheader-search-text\">{{I18n[languageCode][\"TopheaderSearch_Networking\"]}}</span>\r\n            </li>\r\n            <li class=\"tst-item\" type=\"label-1\" (click)=\"addTab($event)\">\r\n              <span class=\"topheader-search-icon\">\r\n                <i class=\"material-icons\">keyboard_voice</i>\r\n              </span>\r\n              <span class=\"topheader-search-text\">{{I18n[languageCode][\"TopheaderSearch_Lable\"]}}</span>\r\n            </li>\r\n            <li class=\"tst-item\" type=\"label-2\" (click)=\"addTab($event)\">\r\n              <span class=\"topheader-search-icon\">\r\n                <i class=\"material-icons\">camera</i>\r\n              </span>\r\n              <span class=\"topheader-search-text\">{{I18n[languageCode][\"TopheaderSearch_Lable\"]}}</span>\r\n            </li>\r\n            <li class=\"tst-item\" type=\"label-3\" (click)=\"addTab($event)\">\r\n              <span class=\"topheader-search-icon\">\r\n                <i class=\"material-icons\">chat_bubble</i>\r\n              </span>\r\n              <span class=\"topheader-search-text\">{{I18n[languageCode][\"TopheaderSearch_Lable\"]}}</span>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"search-bg topheader-search-history-panel\" style=\"min-height:133px;\">\r\n        <div class=\"clearfix\">\r\n          <b class=\"topheader-search-classify-title\">{{I18n[languageCode][\"TopheaderSearch_SearchHistory\"]}}</b>\r\n          <span class=\"topheader-search-dropicon float-right\">\r\n            <i class=\"material-icons\" style=\"font-size:20px;\">delete</i>\r\n          </span>\r\n        </div>\r\n        <div class=\"topheader-search-history\">\r\n          <a class=\"tsh-item text-truncate\">{{I18n[languageCode][\"TopheaderSearch_BusinessTrip\"]}}</a>\r\n          <a class=\"tsh-item text-truncate\">{{I18n[languageCode][\"TopheaderSearch_Reimbursement\"]}}</a>\r\n          <a class=\"tsh-item text-truncate\">\r\n            <span class=\"tsh-item-icon\">\r\n              <i class=\"material-icons\">filter_none</i>\r\n            </span>{{I18n[languageCode][\"TopheaderSearch_SubmissionErr\"]}}</a>\r\n          <a class=\"tsh-item text-truncate\">{{I18n[languageCode][\"TopheaderSearch_AttachUpload\"]}}</a>\r\n          <a class=\"tsh-item text-truncate\">\r\n            <span class=\"tsh-item-icon\">\r\n              <i class=\"material-icons\">filter_none</i>\r\n            </span>{{I18n[languageCode][\"TopheaderSearch_PrintEx\"]}}</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"topheader-search-result d-none\">\r\n      <h6 class=\"text-center\">搜索结果</h6>\r\n      <div class=\"search-bg \">\r\n        <ng-container *ngIf=\"activeIndex<0\">\r\n          <b class=\"topheader-search-classify-title\">应用</b>\r\n          <div class=\"topheader-search-history\">\r\n            <a class=\"tsh-item text-truncate\">网上报销</a>\r\n          </div>\r\n          <div>\r\n            <b class=\"topheader-search-classify-title\">表单</b>\r\n          </div>\r\n          <div class=\"topheader-search-history\">\r\n            <a class=\"tsh-item text-truncate\">差旅费报销单列表</a>\r\n            <a class=\"tsh-item text-truncate\">通讯费报销单列表</a>\r\n          </div>\r\n          <div>\r\n            <b class=\"topheader-search-classify-title\">社区</b>\r\n          </div>\r\n          <div class=\"topheader-search-history\">\r\n            <a class=\"tsh-item text-truncate\">报销单列表自动更新</a>\r\n            <a class=\"tsh-item text-truncate\">报销单列表附件配置</a>\r\n          </div>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"activeIndex>-1\">\r\n          <div>\r\n            <b class=\"topheader-search-classify-title\">{{fixedSearchText[activeIndex]}}</b>\r\n          </div>\r\n          <div class=\"topheader-search-history\" style=\"height:200px;\">\r\n            <a class=\"tsh-item text-truncate\">网上报销</a>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/component/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_rtf_i18n_model__ = __webpack_require__("./src/app/models/rtf.i18n.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_rtf_common__ = __webpack_require__("./src/app/rtf-common.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(element, renderer, router, cache) {
        this.renderer = renderer;
        this.router = router;
        this.cache = cache;
        this.hasOnApp = false;
        this.searchText = '';
        this.appdialogshow = false;
        this.showfullscreenonapp = false;
        this.closeRuning = false;
        this.removeRuningApp = false;
        this.fixedSearchType = ['function', 'webform', 'gspask'];
        this.fixedSearchText = ['应用', '表单', '社区'];
        this.activeIndex = -1;
        this.languageCode = 'zh-CHS';
        this.element = element.nativeElement;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.I18n = __WEBPACK_IMPORTED_MODULE_2__models_rtf_i18n_model__["I18n_frm"];
        if (this.cache.get('languageCode')) {
            this.languageCode = this.cache.get('languageCode');
        }
    };
    // 向导
    HeaderComponent.prototype.navigateTo = function (url) {
        this.showfullscreenonapp = false;
        this.router.navigateByUrl(url);
    };
    HeaderComponent.prototype.classifyPanel = function (type) {
        var classifyPanel = this.element.querySelector('.topheader-search-classify');
        var defaultPanel = this.element.querySelector('.topheader-search-default-panel');
        if (type === 1) {
            this.renderer.removeClass(classifyPanel, 'd-none');
            this.renderer.addClass(defaultPanel, 'd-none');
        }
        else {
            this.renderer.removeClass(defaultPanel, 'd-none');
            this.renderer.addClass(classifyPanel, 'd-none');
        }
    };
    HeaderComponent.prototype._setIndex = function (type) {
        var len = this.fixedSearchType.length;
        var curIndex;
        for (var i = 0; i < len; i++) {
            if (this.fixedSearchType[i] === type) {
                curIndex = i;
                break;
            }
        }
        this.activeIndex = curIndex;
    };
    HeaderComponent.prototype.addTab = function (event) {
        if (!event) {
            var searchTab = this.element.querySelector('.topheader-search-tab');
            if (searchTab.querySelector('.active')) {
                this.renderer.removeClass(searchTab.querySelector('.active'), 'active');
            }
            this.activeIndex = -1;
            return;
        }
        var targetDom = event.currentTarget;
        var targetType = targetDom.getAttribute('type');
        var findDome;
        // 不存在
        if (this.fixedSearchType.join('|').indexOf(targetType + '|') < 0) {
            // 增加
            var addtext = targetDom.querySelector('.topheader-search-icon').innerHTML;
            addtext = ' <span class="topheader-search-icon">' + addtext + '</span>';
            var targetText = targetDom.querySelector('.topheader-search-text').innerText;
            addtext += '<span class="topheader-search-text">' + targetText + '</span>';
            findDome = this.element.querySelector('.topheader-search-tab').querySelector('.topheader-search-add');
            findDome.innerHTML = addtext;
            findDome.setAttribute('type', targetType);
            this.fixedSearchType.splice(2, 1, targetType);
            this.fixedSearchText.splice(2, 1, targetText);
        }
        else { // 已存在
            // 添加样式
            var itemDoms = this.element.querySelectorAll('.tst-item');
            var notFound_1 = true;
            [].forEach.call(itemDoms, function (itemDom) {
                if (notFound_1 && itemDom.getAttribute('type') === targetType) {
                    notFound_1 = false;
                    findDome = itemDom;
                }
            });
        }
        this._choose(findDome);
        // this.classifyPanel(0);
    };
    HeaderComponent.prototype.choose = function (event) {
        this._choose(event.currentTarget);
    };
    HeaderComponent.prototype._choose = function (targetDom) {
        var searchTab = this.element.querySelector('.topheader-search-tab');
        if (searchTab.querySelector('.active')) {
            this.renderer.removeClass(searchTab.querySelector('.active'), 'active');
        }
        this.renderer.addClass(targetDom, 'active');
        var text = targetDom.querySelector('.topheader-search-text').innerText;
        var search = this.element.querySelector('#top-search');
        if (this.activeIndex > -1) {
            this.searchText = text + ':' + this.searchText.replace(this.fixedSearchText[this.activeIndex], '');
        }
        else {
            this.searchText = text + ':' + this.searchText;
        }
        this._setIndex(targetDom.getAttribute('type'));
    };
    HeaderComponent.prototype.searchChange = function (searchCon) {
        var panel = this.element.querySelector('.topheader-search-panel');
        if (searchCon) {
            this.renderer.addClass(panel.querySelector('.topheader-search-default-panel'), 'd-none');
            this.renderer.removeClass(panel.querySelector('.topheader-search-result'), 'd-none');
        }
        else {
            this.renderer.removeClass(panel.querySelector('.topheader-search-default-panel'), 'd-none');
            this.renderer.addClass(panel.querySelector('.topheader-search-result'), 'd-none');
        }
    };
    HeaderComponent.prototype.fromSearchIconClick = function () {
        var panel = this.element.querySelector('.fullscreen-show-search');
        this.renderer.removeClass(panel, 'd-none');
        this.renderer.removeClass(panel.querySelector('.topheader-search-default-panel'), 'd-none');
        this.renderer.addClass(panel.querySelector('.topheader-search-result'), 'd-none');
        this.addTab(null);
    };
    HeaderComponent.prototype.closeSearchPanel = function () {
        var panel = this.element.querySelector('.fullscreen-show-search');
        this.renderer.addClass(panel, 'd-none');
    };
    HeaderComponent.prototype.showHideOnAppDialog = function (show) {
        this.appdialogshow = show;
        this.removeRuningApp = false;
    };
    HeaderComponent.prototype.fromShowAllAPP = function () {
        this.showfullscreenonapp = true;
        this.closeRuning = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "hasOnApp", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/component/header/header.component.html"),
            styles: [__webpack_require__("./src/app/component/header/header.component.css")],
            host: {
                'class': 'gw-header-top'
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_3__app_rtf_common__["CacheService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/component/layout/layout.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/layout/layout.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Wrapper-->\r\n<div id=\"wrapper\" class=\"full-width scrollbar-x-hidden\">\r\n\r\n  <!-- Main page wrapper -->\r\n  <div id=\"page-wrapper\" class=\"gray-bg gray-bg d-flex flex-column gw-page-wrapper\">\r\n        <!-- Top navigation -->\r\n        <div class=\"d-flex gw-page-header-container\">\r\n            <app-pageheader [result]=\"result\" [funcs]=\"funcs\" (tempAppClicked)=\"tempAppClickFunc()\"></app-pageheader>\r\n            <app-header class=\"flex-auto\" [hasOnApp]=\"hasOnAPP\"></app-header>\r\n        </div>\r\n       \r\n       \r\n\r\n        <!-- PageHeader Tabs\r\n        <app-pageheader [result]=\"result\" [funcs]=\"funcs\"></app-pageheader> -->\r\n\r\n        <div class=\"wrapper wrapper-content flex-auto\">\r\n\r\n          <!-- Main view/routes wrapper-->\r\n          <app-workarea></app-workarea>\r\n\r\n        </div>\r\n        <!-- Footer 移除 <app-footer></app-footer> -->\r\n  </div>\r\n  <!-- End page wrapper-->\r\n\r\n</div>\r\n<!-- End wrapper-->\r\n"

/***/ }),

/***/ "./src/app/component/layout/layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
        this.hasOnAPP = false;
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent.prototype.tempAppClickFunc = function () {
        this.hasOnAPP = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LayoutComponent.prototype, "result", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LayoutComponent.prototype, "funcs", void 0);
    LayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__("./src/app/component/layout/layout.component.html"),
            styles: [__webpack_require__("./src/app/component/layout/layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/component/messagenotification/messagenotification.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/messagenotification/messagenotification.component.html":
/***/ (function(module, exports) {

module.exports = "<span dropdown>\r\n    <a dropdownToggle class=\"count-info\">\r\n        <i class=\"material-icons\">add_alert</i><span class=\"label label-primary\">8</span>\r\n    </a>\r\n    <!-- <ul *dropdownMenu class=\"dropdown-menu dropdown-alerts\">\r\n        <li>\r\n            <a href=\"mailbox.html\">\r\n                <div>\r\n                    <i class=\"fa fa-envelope fa-fw\"></i> You have 16 messages\r\n                    <span class=\"float-right text-muted small\">4 minutes ago</span>\r\n                </div>\r\n            </a>\r\n        </li>\r\n        <li class=\"divider\"></li>\r\n        <li>\r\n            <a href=\"profile.html\">\r\n                <div>\r\n                    <i class=\"fa fa-twitter fa-fw\"></i> 3 New Followers\r\n                    <span class=\"float-right text-muted small\">12 minutes ago</span>\r\n                </div>\r\n            </a>\r\n        </li>\r\n        <li>\r\n            <div class=\"text-center link-block\">\r\n                <a href=\"notifications.html\">\r\n                    <strong>更多消息...</strong>\r\n                    <i class=\"fa fa-angle-right\"></i>\r\n                </a>\r\n            </div>\r\n        </li>\r\n    </ul> -->\r\n</span>\r\n"

/***/ }),

/***/ "./src/app/component/messagenotification/messagenotification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageNotificationComponent", function() { return MessageNotificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessageNotificationComponent = /** @class */ (function () {
    function MessageNotificationComponent() {
    }
    MessageNotificationComponent.prototype.ngOnInit = function () {
    };
    MessageNotificationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-messagenotification',
            template: __webpack_require__("./src/app/component/messagenotification/messagenotification.component.html"),
            styles: [__webpack_require__("./src/app/component/messagenotification/messagenotification.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MessageNotificationComponent);
    return MessageNotificationComponent;
}());



/***/ }),

/***/ "./src/app/component/pageheader/pageheader.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/pageheader/pageheader.component.html":
/***/ (function(module, exports) {

module.exports = "<!--3月27日-->\r\n<app-applicationmanager (moduleClick)=\"handleModuleClick($event)\" (appClick)=\"handleAppClick($event)\" [currentAppID]=\"currentAppID\" [idList]=\"result\" [funcList]=\"funcs\" (tempAppClick)=\"tempAppClickNavigate()\"></app-applicationmanager>\r\n"

/***/ }),

/***/ "./src/app/component/pageheader/pageheader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageheaderComponent", function() { return PageheaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_rtf_common__ = __webpack_require__("./src/app/rtf-common.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageheaderComponent = /** @class */ (function () {
    function PageheaderComponent(cache) {
        this.cache = cache;
        this.tempAppClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        // this.initTabItems();
    }
    PageheaderComponent.prototype.ngOnInit = function () {
        // if (!this.currentAppID) {
        //   this.currentAppID = this.result[0];
        //   if (!this.currentModuleID) {
        //     // this.currentModuleID = this.funcs[this.currentAppID].children[0];
        //     this.currentModuleID = 'dashboad';
        //   }
        // }
    };
    PageheaderComponent.prototype.ngDoCheck = function () {
        // if (this.cache.get('currentAppID')) {
        //   this.currentAppID = this.cache.get('currentAppID');
        // }
        // if (this.cache.get('activeItemID')) {
        //   this.currentModuleID = this.cache.get('activeItemID');
        // }
    };
    PageheaderComponent.prototype.handleAppClick = function (id) {
        // this.initTabItems();
        // this.currentAppID = id;
        // // this.currentModuleID = this.funcs[this.currentAppID].children[0];
        // this.currentModuleID = 'dashboad';
        // this.cache.set('currentAppID', this.currentAppID);
        // this.cache.set('activeItemID', this.currentModuleID);
    };
    PageheaderComponent.prototype.handleModuleClick = function (id) {
        // this.currentModuleID = id;
        // this.cache.set('currentAppID', this.currentAppID);
        // this.cache.set('activeItemID', this.currentModuleID);
        // this.tabItems.push({
        //   id: id,
        //   tabName: this.funcs[id].name,
        //   routePath: '/main/home/contract'
        // });
    };
    PageheaderComponent.prototype.initTabItems = function () {
        // this.tabItems = [];
        // this.tabItems.push({
        //   id: 'dashboad',
        //   tabName: '首页',
        //   routePath: '/main/home'
        // });
    };
    PageheaderComponent.prototype.tempAppClickNavigate = function () {
        // this.tempAppClicked.emit('');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PageheaderComponent.prototype, "result", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PageheaderComponent.prototype, "funcs", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], PageheaderComponent.prototype, "tempAppClicked", void 0);
    PageheaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pageheader',
            template: __webpack_require__("./src/app/component/pageheader/pageheader.component.html"),
            styles: [__webpack_require__("./src/app/component/pageheader/pageheader.component.css")],
            host: {
                'class': 'gw-page-header'
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_rtf_common__["CacheService"]])
    ], PageheaderComponent);
    return PageheaderComponent;
}());



/***/ }),

/***/ "./src/app/component/systemhelp/systemhelp.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/systemhelp/systemhelp.component.html":
/***/ (function(module, exports) {

module.exports = "<span dropdown>\r\n    <a dropdownToggle class=\"count-info\">\r\n        <i class=\"material-icons\">help</i>\r\n    </a>\r\n    <!-- <ul *dropdownMenu class=\"dropdown-menu dropdown-tasks\">\r\n        <li>\r\n            <a href=\"mailbox.html\">\r\n                <div>\r\n                    <i class=\"fa fa-envelope fa-fw\"></i> You have 16 messages\r\n                    <span class=\"float-right text-muted small\">4 minutes ago</span>\r\n                </div>\r\n            </a>\r\n        </li>\r\n        <li class=\"divider\"></li>\r\n        <li>\r\n            <a href=\"profile.html\">\r\n                <div>\r\n                    <i class=\"fa fa-twitter fa-fw\"></i> 3 New Followers\r\n                    <span class=\"float-right text-muted small\">12 minutes ago</span>\r\n                </div>\r\n            </a>\r\n        </li>\r\n    </ul> -->\r\n</span>\r\n"

/***/ }),

/***/ "./src/app/component/systemhelp/systemhelp.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemHelpComponent", function() { return SystemHelpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SystemHelpComponent = /** @class */ (function () {
    function SystemHelpComponent() {
    }
    SystemHelpComponent.prototype.ngOnInit = function () {
    };
    SystemHelpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-systemhelp',
            template: __webpack_require__("./src/app/component/systemhelp/systemhelp.component.html"),
            styles: [__webpack_require__("./src/app/component/systemhelp/systemhelp.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SystemHelpComponent);
    return SystemHelpComponent;
}());



/***/ }),

/***/ "./src/app/component/systemsettings/systemsettings.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/systemsettings/systemsettings.component.html":
/***/ (function(module, exports) {

module.exports = "<span dropdown>\r\n    <a dropdownToggle class=\"count-info\">\r\n        <i class=\"material-icons\">settings</i>\r\n    </a>\r\n    <!-- <ul *dropdownMenu class=\"dropdown-menu dropdown-tasks\">\r\n        <li>\r\n            <a href=\"mailbox.html\">\r\n                <div>\r\n                    <i class=\"fa fa-envelope fa-fw\"></i> You have 16 messages\r\n                    <span class=\"float-right text-muted small\">4 minutes ago</span>\r\n                </div>\r\n            </a>\r\n        </li>\r\n        <li class=\"divider\"></li>\r\n        <li>\r\n            <a href=\"profile.html\">\r\n                <div>\r\n                    <i class=\"fa fa-twitter fa-fw\"></i> 3 New Followers\r\n                    <span class=\"float-right text-muted small\">12 minutes ago</span>\r\n                </div>\r\n            </a>\r\n        </li>\r\n    </ul> -->\r\n</span>\r\n"

/***/ }),

/***/ "./src/app/component/systemsettings/systemsettings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemSettingsComponent", function() { return SystemSettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SystemSettingsComponent = /** @class */ (function () {
    function SystemSettingsComponent() {
    }
    SystemSettingsComponent.prototype.ngOnInit = function () {
    };
    SystemSettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-systemsettings',
            template: __webpack_require__("./src/app/component/systemsettings/systemsettings.component.html"),
            styles: [__webpack_require__("./src/app/component/systemsettings/systemsettings.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SystemSettingsComponent);
    return SystemSettingsComponent;
}());



/***/ }),

/***/ "./src/app/component/topnavbar/topnavbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/topnavbar/topnavbar.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<span style=\"float: left;\" (click)=\"clickOnApp()\"  [ngClass]=\"{'d-none':!hasOnApp}\">\r\n        <a class=\"count-info\" >\r\n          <i class=\"material-icons\">view_module</i>\r\n        </a>\r\n      </span>-->\r\n<span style=\"float: left;\" (click)=\"clickSearch()\">\r\n  <a class=\"count-info\" >\r\n    <i class=\"material-icons\">search</i>\r\n  </a>\r\n</span>\r\n<ul class=\"nav\">\r\n    <li class=\"dropdown\">\r\n        <app-collectionmenu></app-collectionmenu>\r\n    </li>\r\n    <li class=\"dropdown\">\r\n        <app-createmenu></app-createmenu>\r\n    </li>\r\n    <li class=\"dropdown\">\r\n        <app-systemhelp></app-systemhelp>\r\n    </li>\r\n    <li class=\"dropdown\">\r\n        <app-systemsettings></app-systemsettings>\r\n    </li>\r\n    <li class=\"dropdown\">\r\n        <app-messagenotification></app-messagenotification>\r\n    </li>\r\n    <li class=\"dropdown\">\r\n        <app-userinfomenu></app-userinfomenu>\r\n    </li>\r\n</ul>"

/***/ }),

/***/ "./src/app/component/topnavbar/topnavbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopnavbarComponent", function() { return TopnavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { EventEmitter } from 'protractor';
var TopnavbarComponent = /** @class */ (function () {
    function TopnavbarComponent() {
        this.hasOnApp = false;
        this.seachClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onAppClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TopnavbarComponent.prototype.ngOnInit = function () {
    };
    TopnavbarComponent.prototype.clickSearch = function () {
        this.seachClick.emit('click');
        // console.log('click');
    };
    TopnavbarComponent.prototype.clickOnApp = function () {
        this.onAppClick.emit('click');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TopnavbarComponent.prototype, "hasOnApp", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], TopnavbarComponent.prototype, "seachClick", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], TopnavbarComponent.prototype, "onAppClick", void 0);
    TopnavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-topnavbar',
            template: __webpack_require__("./src/app/component/topnavbar/topnavbar.component.html"),
            styles: [__webpack_require__("./src/app/component/topnavbar/topnavbar.component.css")],
            host: {
                'class': 'gw-topnavbar'
            }
        }),
        __metadata("design:paramtypes", [])
    ], TopnavbarComponent);
    return TopnavbarComponent;
}());



/***/ }),

/***/ "./src/app/component/userinfomenu/userinfomenu.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/userinfomenu/userinfomenu.component.html":
/***/ (function(module, exports) {

module.exports = "<span dropdown>\r\n  <a dropdownToggle class=\"count-info\">\r\n    <i class=\"material-icons\">person</i>\r\n  </a>\r\n  <ul *dropdownMenu class=\"dropdown-menu leftMenu\">\r\n    <li>\r\n      <a  (click)=\"navigateTo('main/userinfo')\">\r\n        <div class=\"px-2\">\r\n          <i class=\"material-icons align-middle mr-2\">account_circle</i>{{I18n[languageCode][\"Userinfo_Setting\"]}}\r\n        </div>\r\n      </a>\r\n    </li>\r\n    <li class=\"divider dropdown-divider\"></li>\r\n    <li>\r\n      <a>\r\n        <div class=\"px-2\">\r\n          <i class=\"material-icons align-middle  mr-2\">edit</i> {{I18n[languageCode][\"Userinfo_ChangePwd\"]}}\r\n        </div>\r\n      </a>\r\n    </li>\r\n    <li class=\"divider dropdown-divider\"></li>\r\n    <li>\r\n      <a  (click)=\"navigateTo('login')\">\r\n        <div class=\"px-2\">\r\n          <i class=\"material-icons align-middle  mr-2\">cancel\r\n          </i> {{I18n[languageCode][\"Userinfo_Logout\"]}}\r\n        </div>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</span>\r\n"

/***/ }),

/***/ "./src/app/component/userinfomenu/userinfomenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoMenuComponent", function() { return UserInfoMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_rtf_i18n_model__ = __webpack_require__("./src/app/models/rtf.i18n.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_rtf_common__ = __webpack_require__("./src/app/rtf-common.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_authservice_auth_service__ = __webpack_require__("./src/app/services/authservice/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserInfoMenuComponent = /** @class */ (function () {
    function UserInfoMenuComponent(router, cache, service) {
        this.router = router;
        this.cache = cache;
        this.service = service;
        this.languageCode = 'zh-CHS';
    }
    UserInfoMenuComponent.prototype.ngOnInit = function () {
        this.I18n = __WEBPACK_IMPORTED_MODULE_2__models_rtf_i18n_model__["I18n_frm"];
        if (this.cache.get('languageCode')) {
            this.languageCode = this.cache.get('languageCode');
        }
    };
    UserInfoMenuComponent.prototype.navigateTo = function (url) {
        if (url === 'login') {
            var res = window.confirm('是否确定注销？');
            if (res === true) {
                this.service.Logout().subscribe(function (res) { });
                this.router.navigateByUrl(url);
            }
        }
        else {
            this.router.navigateByUrl(url);
        }
    };
    UserInfoMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-userinfomenu',
            template: __webpack_require__("./src/app/component/userinfomenu/userinfomenu.component.html"),
            styles: [__webpack_require__("./src/app/component/userinfomenu/userinfomenu.component.css")],
            host: {
                'class': 'gw-userinfo-menu'
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_3__app_rtf_common__["CacheService"], __WEBPACK_IMPORTED_MODULE_4__services_authservice_auth_service__["AuthService"]])
    ], UserInfoMenuComponent);
    return UserInfoMenuComponent;
}());



/***/ }),

/***/ "./src/app/component/workarea/workarea.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/workarea/workarea.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-row  g-main\" style=\"overflow:hidden;\">\r\n    <app-general-drawer></app-general-drawer>\r\n    <div class=\"col container-fluid p-0\" style=\"overflow:hidden;\">\r\n            <router-outlet></router-outlet>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/component/workarea/workarea.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkAreaComponent", function() { return WorkAreaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WorkAreaComponent = /** @class */ (function () {
    function WorkAreaComponent() {
    }
    WorkAreaComponent.prototype.ngOnInit = function () {
    };
    WorkAreaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-workarea',
            template: __webpack_require__("./src/app/component/workarea/workarea.component.html"),
            styles: [__webpack_require__("./src/app/component/workarea/workarea.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WorkAreaComponent);
    return WorkAreaComponent;
}());



/***/ }),

/***/ "./src/app/containers/layout/layout.container.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/containers/layout/layout.container.component.html":
/***/ (function(module, exports) {

module.exports = "<app-layout\r\n  [result]=\"result\"\r\n  [funcs]=\"funcs\">\r\n</app-layout>\r\n"

/***/ }),

/***/ "./src/app/containers/layout/layout.container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutContainerComponent", function() { return LayoutContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_rtf_common__ = __webpack_require__("./src/app/rtf-common.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LayoutContainerComponent = /** @class */ (function () {
    function LayoutContainerComponent(cache) {
        var _this = this;
        this.cache = cache;
        this.result = [];
        this.funcs = [];
        window['funcsRouterMap'] = [];
        if (this.cache.exists('funcs')) {
            //const res = this.cache.get('funcs').result;
            this.funcs = this.cache.get('funcs').entities.funcs;
            Object.values(this.funcs).map(function (item) {
                if (item['InvokingConfig']['Url']) {
                    window['funcsRouterMap'].push({
                        fid: item['Id'],
                        url: '/main/' + item['InvokingConfig']['Url'],
                        path: item['InvokingConfig']['Path']
                    });
                }
                if (item['FuncType'] === '1') {
                    _this.result.push(item['Id']);
                }
            });
        }
    }
    LayoutContainerComponent.prototype.ngOnInit = function () { };
    LayoutContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-layout-container',
            template: __webpack_require__("./src/app/containers/layout/layout.container.component.html"),
            styles: [__webpack_require__("./src/app/containers/layout/layout.container.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_rtf_common__["CacheService"]])
    ], LayoutContainerComponent);
    return LayoutContainerComponent;
}());



/***/ }),

/***/ "./src/app/models/mock.i18n.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i18n_dashboard", function() { return i18n_dashboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i18n_apps", function() { return i18n_apps; });
var i18n_dashboard = {
    'zh-CHS': {
        syamanager: '系统管理',
        title: '主题、消息、测速',
        groups: '所在组成员',
        employees_leave: '员工请假',
        holiday: '年假 事假 病假 补签',
        engineering_management: '报工管理',
        my_working: '我的报工',
        Week: '本周',
        Fill_rate: '填报率 ',
        Submission_rate: '填报提交率',
        Approval_rate: '审批通过率',
        Fill_this_week: '本周填报',
        sales_order: '销售订单',
        state: '审批状态：制单',
        month: '本月',
        delivery: '交货安排',
        Purchase_Request: '采购申请',
        approval_statusapproval_status: '审批状态',
        prepare_document: '制单',
        Approval_failed: '审批未通过',
        Approval_success: '审批已通过',
        contract_approve: '合同审批',
        marketing_contract_management: '销售合同管理',
        Service_contract: '服务合同',
        IDE: '启用 GSP Web IDE',
        IDE_Title: '开启在线编码之旅',
        taskcenter_title: '任务中心',
        task_approval_category: '待审批',
        task_approval_1: '手机费报销',
        task_approval_2: '差旅费报销',
        task_approval_3: '业务申请',
        task_notapproval_category: '待办理',
        task_notapproval_1: '待稽核',
        task_notapproval_2: '共享业务',
    },
    en: {
        syamanager: 'SysManager',
        title: 'Subject Message Velocity',
        groups: 'Group Members ',
        employees_leave: 'Employees leave',
        holiday: 'Annual leave and personal leave sick leave supplement',
        engineering_management: 'Engineering management',
        my_working: 'My Working',
        Week: 'This Week',
        Fill_rate: 'Fill rate ',
        Submission_rate: 'Submission Rate',
        Approval_rate: 'Approval rate',
        Fill_this_week: 'Fill this week',
        applicationmanager_Run_Func: 'Running Functions',
        sales_order: 'Sales Order',
        state: 'Approval status: making documents',
        month: 'this month',
        delivery: 'delivery',
        Purchase_Request: 'Purchase Request',
        approval_status: 'approval status',
        prepare_document: 'prepare document',
        Approval_failed: 'Approval failed',
        Approval_success: 'Approval_Success',
        contract_approve: 'contract approve',
        marketing_contract_management: 'marketing contract management',
        Service_contract: 'Service contract',
        IDE: 'Start GSP Web IDE',
        IDE_Title: 'Open an online coding tour',
        taskcenter_title: 'Task Center',
        task_approval_category: 'Approving',
        task_approval_1: 'Phone Exp',
        task_approval_2: 'Travail Exp',
        task_approval_3: 'BUNI',
        task_notapproval_category: 'Handling',
        task_notapproval_1: 'Auditing',
        task_notapproval_2: 'Shared Biz',
    }
};
var i18n_apps = {
    'zh-CHS': {
        searching: '搜索...',
        work_diary: '日志填报',
        running: '正在运行',
        unrunning: '未运行',
        name: '名称：日志填报',
        description: '描述：记录每日工作，提交审批。记入部门考核。',
        notice_name: '名称：公告信息',
        notice_desc: '描述：最新通知消息',
        dispatch: '报销',
        name_dispatch: '名称：报销',
        desc_dispatch: '描述：提交报销单，话费报销、交通费报销等',
        my_agent: '我的代办',
        unavailable: '暂不可用',
        hcm: '名称：HCM',
        desc_hcm: '描述：移动签到、通讯互联',
        fname: '名称',
        desc: '描述',
        notice_Info: '公告信息'
    },
    en: {
        searching: 'Searching...',
        work_diary: 'Work Diary',
        running: 'Running',
        unrunning: 'UnRunning',
        name: 'Name：Work Diary',
        description: 'Description：Record daily work',
        notice_name: 'Name：Notice Info',
        notice_desc: 'Description：New Message',
        dispatch: 'Dispatch',
        name_dispatch: 'Name：Dispatch',
        desc_dispatch: 'Description：Submit an expense account',
        my_agent: 'My Agent',
        unavailable: 'Unavailable',
        hcm: 'Name：HCM',
        desc_hcm: 'Description:Mobile check-in and communication interconnection',
        fname: 'Name',
        desc: 'Description',
        notice_Info: 'Notice Info'
    }
};


/***/ }),

/***/ "./src/app/models/rtf.i18n.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export I18n_login */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18n_frm", function() { return I18n_frm; });
var I18n_login = {
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
        'tenantlst': ['浪潮集团', '鲁能集团', '铁塔公司']
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
        'tenantlst': ['Inspur', 'luneng', 'tieta']
    }
};
var I18n_frm = {
    'zh-CHS': {
        'dashboardTitle': '常用功能',
        'Userinfo_Setting': '用户设置',
        'Userinfo_ChangePwd': '修改密码',
        'Userinfo_Logout': '注销',
        'Userinfo_BasicInfo': '基本信息',
        'Userinfo_UserName': '用户名',
        'Userinfo_Email': '邮  箱',
        'Userinfo_PhoneNum': '手机号',
        'Userinfo_DefaultTenant': '默认租户',
        'Userinfo_CurrentTenant': '当前租户',
        'Userinfo_ChangeTenant': '切换租户',
        'Userinfo_DefaultLanguage': '默认语言',
        'Userinfo_CurrentLanguage': '当前语言',
        'Userinfo_ChangeLanguage': '切换语言',
        'Userinfo_RegionSetting': '区域设置',
        'Userinfo_InternationalArea': '国际地区',
        'Userinfo_TenantChangedInfo': '切换租户后系统将重新登录，是否继续?',
        'Userinfo_LanguageChangedInfo': '切换语言后系统将重新登录，是否继续?',
        'applicationmanager_AllFuncs': '所有功能',
        'applicationmanager_Run_Func': '正在运行',
        'applicationmanager_Common_Application': '常用应用',
        'applicationmanager_Search': '搜索',
        'TopheaderSearch_Classification': '选择分类',
        'TopheaderSearch_App': '应用',
        'TopheaderSearch_Form': '表单',
        'TopheaderSearch_Community': '社区',
        'TopheaderSearch_CloudApp': '云应用',
        'TopheaderSearch_Networking': '联网',
        'TopheaderSearch_Lable': '标签',
        'TopheaderSearch_SearchHistory': '搜索历史',
        'TopheaderSearch_BusinessTrip': '出差',
        'TopheaderSearch_Reimbursement': '报销',
        'TopheaderSearch_SubmissionErr': '点击提交审批找不到流程',
        'TopheaderSearch_AttachUpload': '附件上传',
        'TopheaderSearch_PrintEx': '打印异常',
        'SearchTips': '搜索...'
    },
    'en': {
        'dashboardTitle': 'Common Function',
        'Userinfo_Setting': 'User Setting',
        'Userinfo_ChangePwd': 'Change Password',
        'Userinfo_Logout': 'Logout',
        'Userinfo_BasicInfo': 'Basic Information',
        'Userinfo_UserName': 'User Name',
        'Userinfo_Email': 'Email',
        'Userinfo_PhoneNum': 'Phone Number',
        'Userinfo_DefaultTenant': 'Default Tenant',
        'Userinfo_CurrentTenant': 'Current Tenant',
        'Userinfo_ChangeTenant': 'Change Tenant',
        'Userinfo_DefaultLanguage': 'Default Language',
        'Userinfo_CurrentLanguage': 'Current Language',
        'Userinfo_ChangeLanguage': 'Change Language',
        'Userinfo_RegionSetting': 'Region Setting',
        'Userinfo_InternationalArea': 'International Area',
        'Userinfo_TenantChangedInfo': 'Is it sure to re-logon?',
        'Userinfo_LanguageChangedInfo': 'Is it sure to re-logon?',
        'applicationmanager_AllFuncs': 'All Functions',
        'applicationmanager_Run_Func': 'Running Functions',
        'applicationmanager_Common_Application': 'Common Applications',
        'applicationmanager_Search': 'Search',
        'TopheaderSearch_Classification': 'Classification',
        'TopheaderSearch_App': 'Application',
        'TopheaderSearch_Form': 'Form',
        'TopheaderSearch_Community': 'Community',
        'TopheaderSearch_CloudApp': 'Cloud Application',
        'TopheaderSearch_Networking': 'Networking',
        'TopheaderSearch_Lable': 'Lable',
        'TopheaderSearch_SearchHistory': 'Search History',
        'TopheaderSearch_BusinessTrip': 'A Business Trip',
        'TopheaderSearch_Reimbursement': 'Reimbursement',
        'TopheaderSearch_SubmissionErr': 'Submission approval can not find the process',
        'TopheaderSearch_AttachUpload': 'Attachments Upload',
        'TopheaderSearch_PrintEx': 'Print Exception',
        'SearchTips': 'Search...'
    }
};


/***/ }),

/***/ "./src/app/rtf-common.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gsp_sys_rtf_common__ = __webpack_require__("./node_modules/@gsp-sys/rtf-common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gsp_sys_rtf_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__gsp_sys_rtf_common__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__gsp_sys_rtf_common__, "CacheService")) __webpack_require__.d(__webpack_exports__, "CacheService", function() { return __WEBPACK_IMPORTED_MODULE_0__gsp_sys_rtf_common__["CacheService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__gsp_sys_rtf_common__, "DrawerResolve")) __webpack_require__.d(__webpack_exports__, "DrawerResolve", function() { return __WEBPACK_IMPORTED_MODULE_0__gsp_sys_rtf_common__["DrawerResolve"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__gsp_sys_rtf_common__, "DrawerService")) __webpack_require__.d(__webpack_exports__, "DrawerService", function() { return __WEBPACK_IMPORTED_MODULE_0__gsp_sys_rtf_common__["DrawerService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__gsp_sys_rtf_common__, "FrameworkService")) __webpack_require__.d(__webpack_exports__, "FrameworkService", function() { return __WEBPACK_IMPORTED_MODULE_0__gsp_sys_rtf_common__["FrameworkService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__gsp_sys_rtf_common__, "FrmEventBus")) __webpack_require__.d(__webpack_exports__, "FrmEventBus", function() { return __WEBPACK_IMPORTED_MODULE_0__gsp_sys_rtf_common__["FrmEventBus"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__gsp_sys_rtf_common__, "FuncsService")) __webpack_require__.d(__webpack_exports__, "FuncsService", function() { return __WEBPACK_IMPORTED_MODULE_0__gsp_sys_rtf_common__["FuncsService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__gsp_sys_rtf_common__, "FunctionResolver")) __webpack_require__.d(__webpack_exports__, "FunctionResolver", function() { return __WEBPACK_IMPORTED_MODULE_0__gsp_sys_rtf_common__["FunctionResolver"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__gsp_sys_rtf_common__, "HttpService")) __webpack_require__.d(__webpack_exports__, "HttpService", function() { return __WEBPACK_IMPORTED_MODULE_0__gsp_sys_rtf_common__["HttpService"]; });
// export * from '../common-shared/index';



/***/ }),

/***/ "./src/app/services/authservice/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_rtf_common__ = __webpack_require__("./src/app/rtf-common.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AuthService = /** @class */ (function () {
    function AuthService(http, cache, funcs) {
        this.http = http;
        this.cache = cache;
        this.funcs = funcs;
        this.API_PATH = '/api/runtime/sys/v1.0/Authentication/inspurId';
        this.Api_Language = '/api/runtime/sys/v1.0/login-infos?infoType=supportedLanguage';
        this.Api_Token = '/api/runtime/sys/v1.0/login-states/ExternalLoginWithToken';
        this.Api_UserLogin = '/api/runtime/sys/v1.0/login-states/UserLogin';
        this.Api_UserLogout = '/api/runtime/sys/v1.0/login-states/UserLogout';
        this.Api_TenantList = '/api/runtime/sys/v1.0/login-infos?infoType=tenants';
        this.Api_AutehTypeList = '/api/runtime/sys/v1.0/login-infos?infoType=authenTypes';
        this.Api_ClientSecurity = '/api/runtime/sys/v1.0/Authentication/InspurIDInfo';
        this.Api_i18nTenant = '/api/runtime/sys/v1.0/login-infos?infoType=i18nTenants';
        if (!__WEBPACK_IMPORTED_MODULE_4__environments_environment__["environment"].production) {
            this.API_PATH = 'http://localhost:5000/api/runtime/sys/v1.0/login-states/ExternalLogin';
            this.Api_UserLogin = 'http://localhost:5000/api/runtime/sys/v1.0/login-states/UserLogin';
            this.Api_UserLogout = 'http://localhost:5000/api/runtime/sys/v1.0/login-states/UserLogout';
            this.API_PATH = 'http://localhost:5000/api/runtime/sys/v1.0/Authentication/inspurId'; // 认证登录分离模式
            this.Api_Language = 'http://localhost:5000/api/runtime/sys/v1.0/login-infos?infoType=supportedLanguage';
            this.Api_Token = 'http://localhost:5000/api/runtime/sys/v1.0/login-states/ExternalLoginWithToken';
            this.Api_TenantList = 'http://localhost:5000/api/runtime/sys/v1.0/login-infos?infoType=tenants';
            this.Api_AutehTypeList = 'http://localhost:5000/api/runtime/sys/v1.0/login-infos?infoType=authenTypes';
            this.Api_ClientSecurity = 'http://localhost:5000/api/runtime/sys/v1.0/Authentication/InspurIDInfo';
            this.Api_i18nTenant = 'http://localhost:5000/api/runtime/sys/v1.0/login-infos?infoType=i18nTenants';
        }
    }
    // 作为portal的登录模式
    // Login(body: any) {
    //     // 也可以根据环境变量，再开发环境下获取本地的JSON,跳过验证
    //     return this.http.post(this.API_PATH, body)
    //       .exhaustMap(v => {
    //         this.cache.set('redirect', v);
    //         return '1';
    //       });
    // }
    // 二级域名不跳转的登录模式
    AuthService.prototype.Login = function (body) {
        var _this = this;
        // 也可以根据环境变量，再开发环境下获取本地的JSON,跳过验证
        return this.http.post(this.Api_UserLogin, body)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["exhaustMap"])(function (v) {
            _this.cache.set('session', v['sessionId']);
            _this.cache.set('languageCode', v['lanCode']);
            localStorage.setItem('sessionId', v['sessionId']);
            return _this.funcs.loadApps()
                .map(function (funcList) { return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["of"])(funcList); });
        }));
    };
    AuthService.prototype.LoginWithToken = function () {
        // 也可以根据环境变量，再开发环境下获取本地的JSON,跳过验证
        return this.funcs.loadApps()
            .map(function (funcList) { return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["of"])(funcList); });
    };
    //   LoginWithToken(body: any) {
    //     // 也可以根据环境变量，再开发环境下获取本地的JSON,跳过验证
    //     return this.http.post(this.Api_Token, body)
    //       .exhaustMap(v => {
    //         this.cache.set('session', v);
    //         return this.funcs.loadApps()
    //           .map(funcList => of(funcList))
    //           .catch(error => of(error));
    //       });
    // }
    AuthService.prototype.GetSupportedLanguage = function () {
        return this.http.get(this.Api_Language);
    };
    AuthService.prototype.GetTenantList = function () {
        return this.http.get(this.Api_TenantList);
    };
    AuthService.prototype.GetAuthenTypeList = function () {
        return this.http.get(this.Api_AutehTypeList);
    };
    AuthService.prototype.GetClientSecurity = function () {
        return this.http.get(this.Api_ClientSecurity);
    };
    AuthService.prototype.Geti18nTenant = function (languagecode) {
        var path = this.Api_i18nTenant + '&&languagecode=' + languagecode;
        return this.http.get(path);
    };
    // 注销
    AuthService.prototype.Logout = function () {
        return this.http.post(this.Api_UserLogout, null);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__app_rtf_common__["HttpService"],
            __WEBPACK_IMPORTED_MODULE_3__app_rtf_common__["CacheService"],
            __WEBPACK_IMPORTED_MODULE_3__app_rtf_common__["FuncsService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    local: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["environment"].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["platformBrowserDynamic"])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map