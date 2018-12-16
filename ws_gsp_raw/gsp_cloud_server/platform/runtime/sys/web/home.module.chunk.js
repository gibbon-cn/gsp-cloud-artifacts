webpackJsonp(["home.module"],{

/***/ "./src/app/submodule/home/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid pt-2\" style=\"overflow-y:auto;\">\r\n  <div class=\"border-bottom text-muted px-2 pb-1 mb-2\">\r\n    <a (click)=\"collapse_01 = !collapse_01\">\r\n      <i *ngIf=\"!collapse_01\" class=\"material-icons align-middle\">keyboard_arrow_up</i>\r\n      <i *ngIf=\"collapse_01\" class=\"material-icons align-middle\">keyboard_arrow_down</i>\r\n      {{title}}</a>\r\n  </div>\r\n  <div class=\"clearfix mb-2\" [collapse]=\"collapse_01\">\r\n    <div class=\"card gtile float-left mt-2 ml-2 g-pointer\" (click)=\"gotoIDE()\">\r\n      <div class=\"card-header bg-transparent border-0\">\r\n        <h5 class=\"card-title g-text-maxline\">{{i18n[languageCode][\"syamanager\"]}}</h5>\r\n        <p class=\"card-subtitle\">{{i18n[languageCode][\"title\"]}}</p>\r\n      </div>\r\n      <div class=\"card-body gtile-img-content\">\r\n        <div class=\"gtile-img-content-icon\">\r\n          <i class=\"material-icons font-size-lg text-primary-lighten\">settings</i>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-footer bg-transparent border-0\"></div>\r\n      <div class=\"gtile-withoutimg-hover-overlay\"></div>\r\n      <div class=\"gtile-focus-overlay\"></div>\r\n    </div>\r\n    <div class=\"card gtile float-left mt-2 ml-2 g-pointer\" (click)=\"gotoIDE()\">\r\n      <div class=\"card-header bg-transparent border-0\">\r\n        <h5 class=\"card-title g-text-maxline\">{{i18n[languageCode][\"IDE\"]}}</h5>\r\n        <p class=\"card-subtitle\">{{i18n[languageCode][\"IDE_Title\"]}}</p>\r\n      </div>\r\n      <div class=\"card-body gtile-img-content\">\r\n        <img src=\"assets/img/web-ide.png\" class=\"gtile-img-content-icon\" />\r\n      </div>\r\n      <div class=\"card-footer bg-transparent border-0\"></div>\r\n      <div class=\"gtile-withoutimg-hover-overlay\"></div>\r\n      <div class=\"gtile-focus-overlay\"></div>\r\n    </div>\r\n    <div class=\"card gtile float-left mt-2 ml-2 g-pointer\">\r\n      <div class=\"card-header bg-transparent border-0\">\r\n        <h5 class=\"card-title g-text-maxline\">{{i18n[languageCode][\"groups\"]}}</h5>\r\n      </div>\r\n      <div class=\"card-body gtile-img-content\">\r\n        <img src=\"assets/img/analytics-44.png\" class=\"gtile-img-content-icon\" />\r\n      </div>\r\n      <div class=\"card-footer bg-transparent border-0 text-truncate text-right\">12名</div>\r\n      <div class=\"gtile-withoutimg-hover-overlay\"></div>\r\n      <div class=\"gtile-focus-overlay\"></div>\r\n    </div>\r\n    <div class=\"card gtile float-left mt-2 ml-2 g-pointer \">\r\n      <div class=\"card-header bg-transparent border-0\">\r\n        <h5 class=\"card-title g-text-maxline\">{{i18n[languageCode][\"employees_leave\"]}}</h5>\r\n        <p class=\"card-subtitle\">{{i18n[languageCode][\"holiday\"]}}</p>\r\n      </div>\r\n      <div class=\"card-body gtile-img-content\">\r\n        <div class=\"gtile-img-content-icon\">\r\n          <i class=\"material-icons text-primary-lighten font-size-lg\">date_range</i>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-footer bg-transparent border-0\"></div>\r\n      <div class=\"gtile-withoutimg-hover-overlay\"></div>\r\n      <div class=\"gtile-focus-overlay\"></div>\r\n    </div>\r\n  </div>\r\n  <!-- 任务中心 -->\r\n  <div class=\"border-bottom text-muted px-2 pb-1 mb-2\">\r\n    <a (click)=\"collapse_05 = !collapse_05\">\r\n      <i *ngIf=\"!collapse_05\" class=\"material-icons align-middle\">keyboard_arrow_up</i>\r\n      <i *ngIf=\"collapse_05\" class=\"material-icons align-middle\">keyboard_arrow_down</i>{{i18n[languageCode][\"taskcenter_title\"]}}</a>\r\n  </div>\r\n  <div class=\"clearfix mb-2\" [collapse]=\"collapse_05\">\r\n    <!-- 任务统计 -->\r\n    <!--<div class=\"card gtile  float-left mt-2 ml-2 g-pointer\" (click)=\"navigateTo('main/taskcenter')\">\r\n        <div class=\"card-header bg-transparent border-0\">\r\n          <h5 class=\"card-title g-text-maxline\">{{i18n[languageCode][\"Service_contract\"]}}</h5>\r\n          <p class=\"card-subtitle\">{{i18n[languageCode][\"state\"]}}</p>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"gtile-numicon text-gray-neutral\">2</div>\r\n        </div>\r\n        <div class=\"card-footer bg-transparent border-0\"></div>\r\n        <div class=\"gtile-withoutimg-hover-overlay\"></div>\r\n        <div class=\"gtile-focus-overlay\"></div>\r\n      </div>-->\r\n    <!-- 审批类任务 -->\r\n    <div class=\"card gtile gtile-contentlistmode  float-left mt-2 ml-2 g-pointer\" (click)=\"navigateTo('main/taskcenter')\">\r\n      <div class=\"card-header bg-transparent border-0\">\r\n        <h5 class=\"card-title g-text-maxline\">{{i18n[languageCode][\"task_approval_category\"]}}</h5>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <ul class=\"list-group text-muted\">\r\n          <li class=\"list-group-item d-flex justify-content-between align-items-center p-2\">\r\n            {{i18n[languageCode][\"task_approval_1\"]}}\r\n            <span class=\"badge badge-info badge-pill\">6</span>\r\n          </li>\r\n          <li class=\"list-group-item d-flex justify-content-between align-items-center p-2\">\r\n            {{i18n[languageCode][\"task_approval_2\"]}}\r\n            <span class=\"badge badge-warning badge-pill\">2</span>\r\n          </li>\r\n          <li class=\"list-group-item d-flex justify-content-between align-items-center p-2\">\r\n            {{i18n[languageCode][\"task_approval_3\"]}}\r\n            <span class=\"badge badge-success badge-pill\">10</span>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"card-footer bg-transparent border-0 text-truncate text-right\"></div>\r\n      <div class=\"gtile-withoutimg-hover-overlay\"></div>\r\n      <div class=\"gtile-focus-overlay\"></div>\r\n    </div>\r\n    <!-- 任务列表 -->\r\n    <div class=\"card gtile gtile-contentlistmode  float-left mt-2 ml-2 g-pointer\" (click)=\"navigateTo('main/taskcenter')\">\r\n      <div class=\"card-header bg-transparent border-0\">\r\n        <h5 class=\"card-title g-text-maxline\">{{i18n[languageCode][\"task_notapproval_category\"]}}</h5>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <ul class=\"list-group text-muted\">\r\n          <li class=\"list-group-item d-flex justify-content-between align-items-center p-2\">\r\n            {{i18n[languageCode][\"task_notapproval_1\"]}}\r\n            <span class=\"badge badge-warning badge-pill\">7</span>\r\n          </li>\r\n          <li class=\"list-group-item d-flex justify-content-between align-items-center p-2\">\r\n            {{i18n[languageCode][\"task_notapproval_2\"]}}\r\n            <span class=\"badge badge-info badge-pill\">12</span>\r\n          </li>\r\n  \r\n  \r\n        </ul>\r\n      </div>\r\n      <div class=\"card-footer bg-transparent border-0 text-truncate text-right\"></div>\r\n      <div class=\"gtile-withoutimg-hover-overlay\"></div>\r\n      <div class=\"gtile-focus-overlay\"></div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"border-bottom text-muted px-2 pb-1 mb-2\">\r\n    <a (click)=\"collapse_02 = !collapse_02\">\r\n      <i *ngIf=\"!collapse_02\" class=\"material-icons align-middle\">keyboard_arrow_up</i>\r\n      <i *ngIf=\"collapse_02\" class=\"material-icons align-middle\">keyboard_arrow_down</i>{{i18n[languageCode][\"engineering_management\"]}}</a>\r\n  </div>\r\n  <div class=\"clearfix mb-2\" [collapse]=\"collapse_02\">\r\n    <div class=\"card gtile gtile-2n1  float-left mt-2 ml-2\">\r\n      <div class=\"card-header bg-transparent border-0\">\r\n        <span class=\"float-left mr-2\">\r\n          <i class=\"material-icons font-size-lg text-primary-lighten\" style=\"font-size:36px;\">access_time</i>\r\n        </span>\r\n        <h5 class=\"card-title g-text-maxline\">{{i18n[languageCode][\"my_working\"]}}</h5>\r\n        <p class=\"card-subtitle\">{{i18n[languageCode][\"Week\"]}}</p>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"row text-center\">\r\n          <div class=\"col-4 border-right\">\r\n            <p class=\"mb-0 h4\">100%</p>\r\n            <span class=\"card-text text-muted\">{{i18n[languageCode][\"Fill_rate\"]}}</span>\r\n          </div>\r\n          <div class=\"col-4 border-right text-warning\">\r\n            <p class=\"mb-0 h4\">80%</p>\r\n            <span class=\"text-muted card-text\">{{i18n[languageCode][\"Submission_rate\"]}}</span>\r\n          </div>\r\n          <div class=\"col-4\">\r\n            <p class=\"mb-0 h4\">100%</p>\r\n            <span class=\"text-muted card-text\">{{i18n[languageCode][\"Approval_rate\"]}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-footer bg-transparent border-0 text-truncate text-right\">2018.1.25</div>\r\n      <div class=\"gtile-withoutimg-hover-overlay\"></div>\r\n      <div class=\"gtile-focus-overlay\"></div>\r\n    </div>\r\n    <div class=\"card gtile  float-left mt-2 ml-2 g-pointer\">\r\n      <div class=\"card-header bg-transparent border-0\">\r\n        <h5 class=\"card-title g-text-maxline\">{{i18n[languageCode][\"my_working\"]}}</h5>\r\n        <p class=\"card-subtitle\">{{i18n[languageCode][\"Fill_this_week\"]}}</p>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"gtile-numicon text-gray-neutral\">18</div>\r\n      </div>\r\n      <div class=\"card-footer bg-transparent border-0 text-truncate text-right\">小时</div>\r\n      <div class=\"gtile-withoutimg-hover-overlay\"></div>\r\n      <div class=\"gtile-focus-overlay\"></div>\r\n    </div>\r\n    <div class=\"card gtile gtile-contentlistmode float-left mt-2 ml-2\">\r\n      <div class=\"card-header bg-transparent border-0\">\r\n        <h5 class=\"card-title g-text-maxline\">{{i18n[languageCode][\"my_working\"]}}</h5>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <ul class=\"list-group\">\r\n          <li class=\"list-group-item d-flex justify-content-between align-items-center p-1\">\r\n            <span class=\"card-text text-muted\">{{i18n[languageCode][\"Fill_rate\"]}}</span>\r\n            <span class=\"h5 m-0 mr-2\">100%</span>\r\n          </li>\r\n          <li class=\"list-group-item d-flex justify-content-between align-items-center p-1\">\r\n            <span class=\"card-text text-muted\"> {{i18n[languageCode][\"Submission_rate\"]}}</span>\r\n            <span class=\"h5 text-warning m-0 mr-2\">80%</span>\r\n          </li>\r\n          <li class=\"list-group-item d-flex justify-content-between align-items-center p-1\">\r\n            <span class=\"card-text text-muted\">{{i18n[languageCode][\"Approval_rate\"]}}</span>\r\n            <span class=\"h5 m-0 mr-2\">100%</span>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"card-footer bg-transparent border-0  text-truncate text-right\">2018.1.25</div>\r\n      <div class=\"gtile-withoutimg-hover-overlay\"></div>\r\n      <div class=\"gtile-focus-overlay\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"border-bottom text-muted px-2 pb-1 mb-2\">\r\n    <a (click)=\"collapse_03 = !collapse_03\">\r\n      <i *ngIf=\"!collapse_03\" class=\"material-icons align-middle\">keyboard_arrow_up</i>\r\n      <i *ngIf=\"collapse_03\" class=\"material-icons align-middle\">keyboard_arrow_down</i>{{i18n[languageCode][\"sales_order\"]}}</a>\r\n  </div>\r\n  <div class=\"clearfix mb-2\" [collapse]=\"collapse_03\">\r\n    <div class=\"card gtile float-left mt-2 ml-2 g-pointer \" (click)=\"navigateTo('main/fullsalesorder')\">\r\n      <div class=\"card-header bg-transparent border-0\">\r\n        <h5 class=\"card-title g-text-maxline\">{{i18n[languageCode][\"sales_order\"]}}</h5>\r\n        <p class=\"card-subtitle\">{{i18n[languageCode][\"state\"]}}</p>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"gtile-numicon text-gray-neutral\">8</div>\r\n      </div>\r\n      <div class=\"card-footer bg-transparent border-0 text-right\">{{i18n[languageCode][\"month\"]}}</div>\r\n      <div class=\"gtile-withoutimg-hover-overlay\"></div>\r\n      <div class=\"gtile-focus-overlay\"></div>\r\n    </div>\r\n    <div class=\"card gtile  float-left mt-2 ml-2 g-pointer\" (click)=\"navigateTo('main/fullsalesorder')\">\r\n      <div class=\"card-header bg-transparent border-0\">\r\n        <h5 class=\"card-title g-text-maxline\">{{i18n[languageCode][\"delivery\"]}}</h5>\r\n        <p class=\"card-subtitle\">{{i18n[languageCode][\"state\"]}}</p>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"gtile-numicon text-gray-neutral\">3</div>\r\n      </div>\r\n      <div class=\"card-footer bg-transparent border-0 text-right\">{{i18n[languageCode][\"month\"]}}</div>\r\n      <div class=\"gtile-withoutimg-hover-overlay\"></div>\r\n      <div class=\"gtile-focus-overlay\"></div>\r\n    </div>\r\n    <div class=\"card gtile  float-left mt-2 ml-2 g-pointer\" (click)=\"navigateTo('main/fullsalesorder')\">\r\n      <div class=\"card-header bg-transparent border-0\">\r\n        <h5 class=\"card-title g-text-maxline\">{{i18n[languageCode][\"Purchase_Request\"]}}</h5>\r\n        <p class=\"card-subtitle\">{{i18n[languageCode][\"state\"]}}</p>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"gtile-numicon text-gray-neutral\">6</div>\r\n      </div>\r\n      <div class=\"card-footer bg-transparent border-0 text-right\">{{i18n[languageCode][\"month\"]}}</div>\r\n      <div class=\"gtile-withoutimg-hover-overlay\"></div>\r\n      <div class=\"gtile-focus-overlay\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"border-bottom text-muted px-2 pb-1 mb-2\">\r\n    <a (click)=\"collapse_04 = !collapse_04\">\r\n      <i *ngIf=\"!collapse_04\" class=\"material-icons align-middle\">keyboard_arrow_up</i>\r\n      <i *ngIf=\"collapse_04\" class=\"material-icons align-middle\">keyboard_arrow_down</i>{{i18n[languageCode][\"contract_approve\"]}}</a>\r\n  </div>\r\n  <div class=\"clearfix mb-2\" [collapse]=\"collapse_04\">\r\n    <div class=\"card gtile float-left mt-2 ml-2 g-pointer \" (click)=\"navigateTo('main/contract')\">\r\n      <div class=\"card-header bg-transparent border-0\">\r\n        <h5 class=\"card-title g-text-maxline\">{{i18n[languageCode][\"marketing_contract_management\"]}}</h5>\r\n        <p class=\"card-subtitle\">{{i18n[languageCode][\"state\"]}}</p>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"gtile-numicon text-gray-neutral\">8</div>\r\n      </div>\r\n      <div class=\"card-footer bg-transparent border-0\"></div>\r\n      <div class=\"gtile-withoutimg-hover-overlay\"></div>\r\n      <div class=\"gtile-focus-overlay\"></div>\r\n    </div>\r\n    <div class=\"card gtile  float-left mt-2 ml-2 g-pointer\" (click)=\"navigateTo('main/contract')\">\r\n      <div class=\"card-header bg-transparent border-0\">\r\n        <h5 class=\"card-title g-text-maxline\">{{i18n[languageCode][\"Service_contract\"]}}</h5>\r\n        <p class=\"card-subtitle\">{{i18n[languageCode][\"state\"]}}</p>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"gtile-numicon text-gray-neutral\">2</div>\r\n      </div>\r\n      <div class=\"card-footer bg-transparent border-0\"></div>\r\n      <div class=\"gtile-withoutimg-hover-overlay\"></div>\r\n      <div class=\"gtile-focus-overlay\"></div>\r\n    </div>\r\n  </div>\r\n  \r\n</div>"

/***/ }),

/***/ "./src/app/submodule/home/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_rtf_i18n_model__ = __webpack_require__("./src/app/models/rtf.i18n.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_rtf_common__ = __webpack_require__("./src/app/rtf-common.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_mock_i18n_model__ = __webpack_require__("./src/app/models/mock.i18n.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, cache) {
        this.router = router;
        this.cache = cache;
        // 临时用于折叠
        this.collapse_01 = false;
        this.collapse_02 = false;
        this.collapse_03 = false;
        this.collapse_04 = false;
        this.collapse_05 = false;
        this.languageCode = 'zh-CHS';
    }
    DashboardComponent.prototype.ngOnInit = function () {
        if (this.cache.exists('languageCode')) {
            this.languageCode = this.cache.get('languageCode');
        }
        this.changeLanguage(this.languageCode);
        this.i18n = __WEBPACK_IMPORTED_MODULE_4__models_mock_i18n_model__["i18n_dashboard"];
    };
    DashboardComponent.prototype.navigateTo = function (url) {
        this.router.navigateByUrl(url);
    };
    DashboardComponent.prototype.changeLanguage = function (lanCode) {
        this.title = __WEBPACK_IMPORTED_MODULE_2__models_rtf_i18n_model__["I18n_frm"][lanCode]['dashboardTitle'];
    };
    DashboardComponent.prototype.gotoIDE = function () {
        var ssid = this.cache.get('session');
        var ideUrl = '/platform/dev/main/web/webide/index.html#/ssologin?ssid=' + ssid;
        window.open(ideUrl, '_blank');
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/submodule/home/dashboard/dashboard.component.html"),
            // styleUrls: ['./dashboard.component.css'],
            host: {
                class: 'd-flex flex-column g-main'
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_3__app_rtf_common__["CacheService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/submodule/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_routes__ = __webpack_require__("./src/app/submodule/home/home.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("./src/app/submodule/home/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component_common_collapse__ = __webpack_require__("./src/app/component/common/collapse/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_rtf_common__ = __webpack_require__("./src/app/rtf-common.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule.entry = __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["DashboardComponent"];
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_4__app_component_common_collapse__["CollapseModule"].forRoot(), __WEBPACK_IMPORTED_MODULE_2__home_routes__["HomeRoots"]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["DashboardComponent"]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["DashboardComponent"]],
            providers: [__WEBPACK_IMPORTED_MODULE_5__app_rtf_common__["DrawerResolve"]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/submodule/home/home.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoots", function() { return HomeRoots; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard_component__ = __webpack_require__("./src/app/submodule/home/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_rtf_common__ = __webpack_require__("./src/app/rtf-common.ts");



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard_component__["DashboardComponent"],
        resolve: {
            drawer: __WEBPACK_IMPORTED_MODULE_2__app_rtf_common__["DrawerResolve"] // 配置是否显示抽屉
        }
    }
];
var HomeRoots = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes);


/***/ })

});
//# sourceMappingURL=home.module.chunk.js.map