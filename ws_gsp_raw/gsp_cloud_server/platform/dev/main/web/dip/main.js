(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _vmsetting_vmsetting_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vmsetting/vmsetting.component */ "./src/app/vmsetting/vmsetting.component.ts");
/* harmony import */ var _valuemapping_definition_valueMapping_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./valuemapping-definition/valueMapping-grid.component */ "./src/app/valuemapping-definition/valueMapping-grid.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/valuemapping', pathMatch: 'full' },
    { path: 'vmsetting', component: _vmsetting_vmsetting_component__WEBPACK_IMPORTED_MODULE_2__["VmsettingComponent"] },
    { path: 'valuemapping', component: _valuemapping_definition_valueMapping_grid_component__WEBPACK_IMPORTED_MODULE_3__["ValueMappingGridComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n#wrap {\r\n  width: 100%;\r\n  height: 100%;\r\n  clear: both;\r\n  margin: 0 auto;\r\n  background: #FFF;\r\n}\r\n\r\n#left_a {\r\n  float: left;\r\n  width: 16%;\r\n  height: 100%;\r\n  min-height: 500px;\r\n}\r\n\r\n#right_a {\r\n  /* float: right; */\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.clear {\r\n  clear: both;\r\n}\r\n\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n  height: 100%;\r\n}\r\n\r\nnav a:visited,\r\na:link {\r\n  color: #607D8B;\r\n}\r\n\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\n\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n\n<!-- <app-vmsetting></app-vmsetting> -->\n\n\n\n<div id=\"wrap\">\n  <div id=\"left_a\">\n    <h1>{{title}}</h1>\n    <nav>\n      <a routerLink=\"/valuemapping\">值映射定义</a>\n      <br>\n      <a routerLink=\"/vmsetting\">值映射设置</a>\n    </nav>\n  </div>\n  <div id=\"right_a\">\n    <router-outlet></router-outlet>\n  </div>\n  <div class=\"clear\"></div>\n</div>\n"

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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = '值映射';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/es/index.js");
/* harmony import */ var _valuemapping_definition_valueMapping_grid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./valuemapping-definition/valueMapping-grid.component */ "./src/app/valuemapping-definition/valueMapping-grid.component.ts");
/* harmony import */ var _valuemapping_definition_baseinfo_valueMapping_baseInfo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./valuemapping-definition/baseinfo/valueMapping-baseInfo.component */ "./src/app/valuemapping-definition/baseinfo/valueMapping-baseInfo.component.ts");
/* harmony import */ var _valuemapping_definition_vmcolumn_vm_src_column_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./valuemapping-definition/vmcolumn/vm-src-column.component */ "./src/app/valuemapping-definition/vmcolumn/vm-src-column.component.ts");
/* harmony import */ var _valuemapping_definition_vmcolumn_vm_tar_column_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./valuemapping-definition/vmcolumn/vm-tar-column.component */ "./src/app/valuemapping-definition/vmcolumn/vm-tar-column.component.ts");
/* harmony import */ var _vmsetting_vmsetting_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./vmsetting/vmsetting.component */ "./src/app/vmsetting/vmsetting.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ "./node_modules/@progress/kendo-angular-buttons/dist/es/index.js");
/* harmony import */ var _progress_kendo_angular_label__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @progress/kendo-angular-label */ "./node_modules/@progress/kendo-angular-label/dist/es/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _valuemapping_definition_valueMapping_grid_component__WEBPACK_IMPORTED_MODULE_7__["ValueMappingGridComponent"],
                _valuemapping_definition_baseinfo_valueMapping_baseInfo_component__WEBPACK_IMPORTED_MODULE_8__["ValueMappingBaseInfoComponent"],
                _valuemapping_definition_vmcolumn_vm_src_column_component__WEBPACK_IMPORTED_MODULE_9__["VmSrcColumnComponent"],
                _valuemapping_definition_vmcolumn_vm_tar_column_component__WEBPACK_IMPORTED_MODULE_10__["VmTarColumnComponent"],
                _vmsetting_vmsetting_component__WEBPACK_IMPORTED_MODULE_11__["VmsettingComponent"]
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_4__["GridModule"],
                _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
                _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_13__["ButtonsModule"],
                _progress_kendo_angular_label__WEBPACK_IMPORTED_MODULE_14__["LabelModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/valuemapping-definition/Service/stateControllor.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/valuemapping-definition/Service/stateControllor.service.ts ***!
  \****************************************************************************/
/*! exports provided: StateControllorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateControllorService", function() { return StateControllorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var StateControllorService = /** @class */ (function () {
    function StateControllorService() {
        // Observable string sources
        // private missionAnnouncedSource = new Subject<string>();
        // private missionConfirmedSource = new Subject<string>();
        this.editStateSub = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.state = true;
        // Observable string streams
        // missionAnnounced$ = this.missionAnnouncedSource.asObservable();
        // missionConfirmed$ = this.missionConfirmedSource.asObservable();
        this.editState$ = this.editStateSub.asObservable();
    }
    // Service message commands
    // announceMission(mission: string) {
    //   this.missionAnnouncedSource.next(mission);
    // }
    //
    // confirmMission(astronaut: string) {
    //   this.missionConfirmedSource.next(astronaut);
    // }
    StateControllorService.prototype.changeState = function () {
        // console.log('stateControl:', this.state);
        return this.state = !this.state;
    };
    StateControllorService.prototype.getState = function () {
        // console.log('stateControlget:', this.state);
        return this.state;
    };
    StateControllorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], StateControllorService);
    return StateControllorService;
}());



/***/ }),

/***/ "./src/app/valuemapping-definition/baseinfo/valueMapping-baseInfo.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/valuemapping-definition/baseinfo/valueMapping-baseInfo.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n  <div class=\"panel-heading\">\r\n    <label>基本信息</label>\r\n  </div>\r\n  <div class=\"panel-body\" *ngIf=\"valueMapping\" style=\"margin-top: 2px;margin-bottom: 2px;\">\r\n    <div style=\"margin-bottom: 5px\">\r\n      <div style=\"position:absolute; width:80px;\">编号:</div>\r\n      <div style=\"margin-left:80px; \">\r\n        <input [(ngModel)]=\"valueMapping.code\" placeholder=\"请输入编号,支持英文数字下划线,不超过32字符\" name=\"vp_code\" [disabled]=\"getState()\" style=\" width: 99%;\">\r\n      </div>\r\n    </div>\r\n    <div style=\"margin-bottom: 5px\">\r\n      <div style=\"position:absolute; width:80px;\">名称:</div>\r\n      <div style=\"margin-left:80px; \">\r\n<input [(ngModel)]=\"valueMapping.name\" placeholder=\"请输入编号,支持中英文数字下划线,不超过64字符\" name=\"vp_name\" [disabled]=\"getState()\" style=\" width: 99%;\">\r\n      </div>\r\n    </div>\r\n    <div style=\"margin-bottom: 5px\">\r\n      <div style=\"position:absolute; width:80px;\">性质:</div>\r\n      <div style=\"margin-left:80px; \">\r\n        <select class=\"form-control\" [(ngModel)]=\"valueMapping.isExact\" placeholder=\"isExact\" [disabled]=\"getState()\">\r\n          <option value=\"false\">模糊值映射</option>\r\n          <option value=\"true\" selected=\"selected\">精确值映射</option>\r\n        </select>\r\n      </div>\r\n      <div style=\"margin-bottom: 5px\">\r\n        <div style=\"position:absolute; width:80px;\">组织:</div>\r\n        <div style=\"margin-left:80px; \">\r\n          <input [(ngModel)]=\"valueMapping.sysOrgId\" placeholder=\"组织\" name=\"vp_org\" disabled style=\" width: 99%;\">\r\n        </div>\r\n      </div>\r\n      <div style=\"margin-bottom: 5px\">\r\n        <div style=\" position:absolute; width:80px;\">说明:</div>\r\n        <div style=\" margin-left:80px; \">\r\n          <textarea [(ngModel)]=\"valueMapping.description\" placeholder=\"description\" name=\"vp_description\" [disabled]=\"getState()\"\r\n            style=\" width: 99%;\"></textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <label>值映射列设置</label>\r\n  <div id=\"vp-src-setting\" style=\"height: 40%\">\r\n    <vm-tar-grid #tarColGrid [tarValueMappingColumns]=\"tarVmcs\"></vm-tar-grid>\r\n  </div>\r\n  <div id=\"vp-tar-setting\" style=\"height: 40%\">\r\n    <vm-src-grid #srcColGrid [srcValueMappingColumns]=\"srcVmcs\" [vmid]=\"valueMapping.id\"></vm-src-grid>\r\n  </div>\r\n\r\n  <div id=\"vp-settingTool\" class=\"col-xs-12 col-sm-12\">\r\n    <span >是否批量映射</span>\r\n    <select [(ngModel)]=\"valueMapping.isBatchMapping\" placeholder=\"isBatchMapping\" [disabled]=\"getState()\">\r\n      <option value=\"false\">否</option>\r\n      <option value=\"true\">是</option>\r\n    </select>\r\n    <span >缺省策略</span>\r\n    <select  id=\"strategy\" [(ngModel)]=\"valueMapping.defaultStrategy\" placeholder=\"defaultStrategy\" [disabled]=\"getState()\">\r\n      <option value=\"0\">抛出异常</option>\r\n      <option value=\"1\">目标列默认值</option>\r\n      <option value=\"2\">空值</option>\r\n      <option value=\"3\">源列值</option>\r\n      <option value=\"4\">缺省值</option>\r\n      <option value=\"5\">提示警告</option>\r\n    </select>\r\n    <span >缺省值</span>\r\n    <input  type=\"text\" [(ngModel)]=\"valueMapping.defaultValue\" placeholder=\"DEFAULTVALUE\" [disabled]=\"getState()\">\r\n    <button class=\"btn\" type=\"button\" (click)=\"addVmColumn()\" [disabled]=\"getState()\">新增行</button>\r\n    <button class=\"btn\" type=\"button\" (click)=\"removeVmColumn()\" [disabled]=\"getState()\">删除行</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/valuemapping-definition/baseinfo/valueMapping-baseInfo.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/valuemapping-definition/baseinfo/valueMapping-baseInfo.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ValueMappingBaseInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueMappingBaseInfoComponent", function() { return ValueMappingBaseInfoComponent; });
/* harmony import */ var _vmcolumn_vm_tar_column_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../vmcolumn/vm-tar-column.component */ "./src/app/valuemapping-definition/vmcolumn/vm-tar-column.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Service_stateControllor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Service/stateControllor.service */ "./src/app/valuemapping-definition/Service/stateControllor.service.ts");
/* harmony import */ var _model_DipValueMappingModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/DipValueMappingModel */ "./src/app/valuemapping-definition/model/DipValueMappingModel.ts");
/* harmony import */ var _model_DipVmColumnModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/DipVmColumnModel */ "./src/app/valuemapping-definition/model/DipVmColumnModel.ts");
/* harmony import */ var _vmcolumn_vm_src_column_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../vmcolumn/vm-src-column.component */ "./src/app/valuemapping-definition/vmcolumn/vm-src-column.component.ts");
/* harmony import */ var _service_dipvaluemappingservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/dipvaluemappingservice.service */ "./src/app/valuemapping-definition/service/dipvaluemappingservice.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ValueMappingBaseInfoComponent = /** @class */ (function () {
    function ValueMappingBaseInfoComponent(stateControllorService, dipValueMappingService) {
        this.stateControllorService = stateControllorService;
        this.dipValueMappingService = dipValueMappingService;
        // public vmid: string;
        this._valueMapping = new _model_DipValueMappingModel__WEBPACK_IMPORTED_MODULE_3__["DipValueMappingModel"];
    }
    Object.defineProperty(ValueMappingBaseInfoComponent.prototype, "valueMapping", {
        get: function () {
            return this._valueMapping;
        },
        set: function (valueMappinng) {
            console.log(111);
            if (Object(util__WEBPACK_IMPORTED_MODULE_7__["isNullOrUndefined"])(valueMappinng) === true) {
                valueMappinng = new _model_DipValueMappingModel__WEBPACK_IMPORTED_MODULE_3__["DipValueMappingModel"];
            }
            this._valueMapping = valueMappinng;
            this.srcVmcs = valueMappinng.srcVmColumnModelList;
            this.tarVmcs = [valueMappinng.tarVmColumnModel];
            console.log('this.ValueMapping:', this.valueMapping);
        },
        enumerable: true,
        configurable: true
    });
    ValueMappingBaseInfoComponent.prototype.ngOnInit = function () {
    };
    ValueMappingBaseInfoComponent.prototype.getState = function () {
        var state = this.stateControllorService.getState();
        return state;
    };
    ValueMappingBaseInfoComponent.prototype.addVmColumn = function () {
        var _this = this;
        this.dipValueMappingService.getGuid().subscribe(function (guid) {
            var srcVmColumn = new _model_DipVmColumnModel__WEBPACK_IMPORTED_MODULE_4__["DipVmColumnModel"]();
            srcVmColumn.vmId = _this.valueMapping.id;
            srcVmColumn.id = guid;
            var code = _this.getSrcColCode();
            if (Object(util__WEBPACK_IMPORTED_MODULE_7__["isNullOrUndefined"])(code) === false) {
                srcVmColumn.code = code;
                srcVmColumn.direction = 1;
                srcVmColumn.editMode = 0;
                srcVmColumn.dataType = 0;
                srcVmColumn.helpColumn = 0;
                _this.srcVmColGridComponent.addVmColumn(srcVmColumn);
            }
            else {
                alert('值映射源列最多10列');
            }
        });
    };
    ValueMappingBaseInfoComponent.prototype.removeVmColumn = function () {
        this.srcVmColGridComponent.removeVmColumn();
    };
    ValueMappingBaseInfoComponent.prototype.closeEditor = function () {
        this.srcVmColGridComponent.kSrcGrid.closeCell();
        this.srcVmColGridComponent.kSrcGrid.cancelCell();
        this.tarVmColGridComponent.tarGrid.closeCell();
        this.tarVmColGridComponent.tarGrid.cancelCell();
    };
    ValueMappingBaseInfoComponent.prototype.getSrcColCode = function () {
        var code = 'SRCCOL';
        // let num = 1;
        for (var index = 1; index <= 10; index++) {
            var len = index.toString().length;
            if (len < 2) {
                code += '0' + index.toString();
            }
            else {
                code += index.toString();
            }
            if (this.isCantainedSrccode(code) === true) {
                code = 'SRCCOL';
            }
            else {
                return code;
            }
        }
        return null;
    };
    ValueMappingBaseInfoComponent.prototype.isCantainedSrccode = function (code) {
        var index = this.srcVmColGridComponent.gridData.findIndex(function (vmc) { return vmc.code === code; });
        if (index > -1) {
            return true;
        }
        index = this.dipValueMappingService.valueMappingEditModel.vmColumnModelAddList
            .findIndex(function (vmc) { return vmc.code === code; });
        if (index > -1) {
            return true;
        }
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_vmcolumn_vm_src_column_component__WEBPACK_IMPORTED_MODULE_5__["VmSrcColumnComponent"]),
        __metadata("design:type", _vmcolumn_vm_src_column_component__WEBPACK_IMPORTED_MODULE_5__["VmSrcColumnComponent"])
    ], ValueMappingBaseInfoComponent.prototype, "srcVmColGridComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_vmcolumn_vm_tar_column_component__WEBPACK_IMPORTED_MODULE_0__["VmTarColumnComponent"]),
        __metadata("design:type", _vmcolumn_vm_tar_column_component__WEBPACK_IMPORTED_MODULE_0__["VmTarColumnComponent"])
    ], ValueMappingBaseInfoComponent.prototype, "tarVmColGridComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", _model_DipValueMappingModel__WEBPACK_IMPORTED_MODULE_3__["DipValueMappingModel"]),
        __metadata("design:paramtypes", [_model_DipValueMappingModel__WEBPACK_IMPORTED_MODULE_3__["DipValueMappingModel"]])
    ], ValueMappingBaseInfoComponent.prototype, "valueMapping", null);
    ValueMappingBaseInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'valueMapping-baseInfo',
            template: __webpack_require__(/*! ./valueMapping-baseInfo.component.html */ "./src/app/valuemapping-definition/baseinfo/valueMapping-baseInfo.component.html")
        }),
        __metadata("design:paramtypes", [_Service_stateControllor_service__WEBPACK_IMPORTED_MODULE_2__["StateControllorService"], _service_dipvaluemappingservice_service__WEBPACK_IMPORTED_MODULE_6__["DipValueMappingModelService"]])
    ], ValueMappingBaseInfoComponent);
    return ValueMappingBaseInfoComponent;
}());



/***/ }),

/***/ "./src/app/valuemapping-definition/model/DipValueMappingModel.ts":
/*!***********************************************************************!*\
  !*** ./src/app/valuemapping-definition/model/DipValueMappingModel.ts ***!
  \***********************************************************************/
/*! exports provided: DipValueMappingModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DipValueMappingModel", function() { return DipValueMappingModel; });
/* harmony import */ var _DipVmColumnModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DipVmColumnModel */ "./src/app/valuemapping-definition/model/DipVmColumnModel.ts");

var DipValueMappingModel = /** @class */ (function () {
    function DipValueMappingModel() {
        this.isExact = true;
        this.accessibility = true;
        this.defaultStrategy = 0;
        this.defaultValue = '';
        this.isBatchMapping = true;
        this.tarVmColumnModel = new _DipVmColumnModel__WEBPACK_IMPORTED_MODULE_0__["DipVmColumnModel"];
        this.srcVmColumnModelList = new Array();
    }
    return DipValueMappingModel;
}());

// const enum defaultStrategyType {
//   /// <summary>
//   /// 异常终止
//   /// </summary>
//   Exception = 0,
//   /// <summary>
//   /// 目标列默认值
//   /// </summary>
//   TarColumnValue = 1,
//   /// <summary>
//   /// 空值
//   /// </summary>
//   Ignore = 2,
//   /// <summary>
//   /// 源值
//   /// </summary>
//   SouceValue = 3,
//   /// <summary>
//   /// 缺省值
//   /// </summary>
//   DefaultValue = 4,
//   /// <summary>
//   /// 提示警告
//   /// </summary>
//   Warning = 5
// }


/***/ }),

/***/ "./src/app/valuemapping-definition/model/DipVmColumnModel.ts":
/*!*******************************************************************!*\
  !*** ./src/app/valuemapping-definition/model/DipVmColumnModel.ts ***!
  \*******************************************************************/
/*! exports provided: DipVmColumnModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DipVmColumnModel", function() { return DipVmColumnModel; });
var DipVmColumnModel = /** @class */ (function () {
    function DipVmColumnModel() {
        this.dataType = 0;
        this.editMode = 0;
        this.direction = 0;
        this.helpColumn = 0;
    }
    return DipVmColumnModel;
}());

// /// <summary>
// /// 数据类型
// /// </summary>
// const enum VmDataType {
//   /// <summary>
//   /// 字符串
//   /// </summary>
//   String = 0,
//   /// <summary>
//   /// 文本
//   /// </summary>
//   Text = 1,
//   /// <summary>
//   /// 数字
//   /// </summary>
//   Integer = 2,
//   /// <summary>
//   /// 货币
//   /// </summary>
//   Decimal = 3,
//   /// <summary>
//   /// bool类型
//   /// </summary>
//   Boolean = 4,
//   /// <summary>
//   /// 日期
//   /// </summary>
//   Date = 5,
//   /// <summary>
//   /// 日期时间类型
//   /// </summary>
//   DateTime = 6,
//   /// <summary>
//   /// 二进制类型
//   /// </summary>
//   Binary = 7,
// }
// /// <summary>
// /// 编辑类型：手工、智能帮助
// /// </summary>
// const enum EditType {
//   /// <summary>
//   /// 手工
//   /// </summary>
//   Input = 0,
//   /// <summary>
//   /// 智能帮助参照
//   /// </summary>
//   SmartHelp = 1,
// }
// /// <summary>
// /// 是源列还是目标列
// /// </summary>
// const enum VmColumnType {
//   /// <summary>
//   /// 源列
//   /// </summary>
//   Source = 1,
//   /// <summary>
//   /// 目标列
//   /// </summary>
//   Target = 2
// }
// /// <summary>
// /// 帮助列
// /// 分为内码列/编号列/名称列
// /// </summary>
// const enum HelpColumnType {
//   /// <summary>
//   /// 内码列
//   /// </summary>
//   IDColumn = 0,
//   /// <summary>
//   /// 编号列
//   /// </summary>
//   CodeColumn = 1,
//   /// <summary>
//   /// 名称列
//   /// </summary>
//   NameColumn = 2
// }


/***/ }),

/***/ "./src/app/valuemapping-definition/model/ValueMappingEditModel.ts":
/*!************************************************************************!*\
  !*** ./src/app/valuemapping-definition/model/ValueMappingEditModel.ts ***!
  \************************************************************************/
/*! exports provided: ValueMappingEditModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueMappingEditModel", function() { return ValueMappingEditModel; });
var ValueMappingEditModel = /** @class */ (function () {
    function ValueMappingEditModel() {
        this.vmColumnModelAddList = new Array();
        this.vmColumnModelEditList = new Array();
        this.deleteVmColumns = new Array();
    }
    return ValueMappingEditModel;
}());



/***/ }),

/***/ "./src/app/valuemapping-definition/service/dipvaluemappingservice.service.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/valuemapping-definition/service/dipvaluemappingservice.service.ts ***!
  \***********************************************************************************/
/*! exports provided: DipValueMappingModelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DipValueMappingModelService", function() { return DipValueMappingModelService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs-compat/_esm5/observable/of.js");
/* harmony import */ var _model_ValueMappingEditModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/ValueMappingEditModel */ "./src/app/valuemapping-definition/model/ValueMappingEditModel.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CREATE_ACTION = 'dipValueMapping';
var UPDATE_ACTION = 'dipValueMapping';
var REMOVE_ACTION = 'dipValueMapping';
var RESET_ACTION = 'dipValueMapping';
var START_ACTION = 'dipValueMappingList';
// const url = '/api/runtime/dip/v1.0/valuemapping/';
// http://localhost:5000
var url = '/api/dev/dip/v1.0/valuemapping/';
var DipValueMappingModelService = /** @class */ (function () {
    function DipValueMappingModelService(http) {
        this.http = http;
        this.valueMappingEditModel = new _model_ValueMappingEditModel__WEBPACK_IMPORTED_MODULE_4__["ValueMappingEditModel"];
    }
    // private headers = new HttpHeaders({
    //  'Content-Type': 'application/json',
    //  'Authorization': 'my-auth-token'
    // });
    DipValueMappingModelService.prototype.getselectDipVmModel = function () {
        return this.selectDipVmModel;
    };
    DipValueMappingModelService.prototype.getGuid = function () {
        return this.http.get(url + 'guid');
    };
    DipValueMappingModelService.prototype.getDipValueMappingModelList = function () {
        var _this = this;
        return this.http.get(url + START_ACTION)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (vmlist) { return _this.vmList = vmlist; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('getDipValueMappingModelList')));
    };
    DipValueMappingModelService.prototype.addDipValueMappingModel = function (valueMappingModel) {
        return this.http.post(url + CREATE_ACTION, valueMappingModel)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (vmmodel) { return console.log('增加', vmmodel); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('addDipValueMappingModel')));
    };
    DipValueMappingModelService.prototype.updateDipValueMappingModel = function (vmEditModel) {
        return this.http.put(url + UPDATE_ACTION, vmEditModel)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return console.log('更新值映射'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('updateDipValueMappingModel')));
    };
    /** DELETE: delete the DipValueMappingModel from the server */
    DipValueMappingModelService.prototype.deleteDipValueMappingModel = function (vmid) {
        // TODO vmid != null
        var deleteUrl = url + REMOVE_ACTION;
        return this.http.delete(deleteUrl + '/' + vmid);
    };
    DipValueMappingModelService.prototype.getDipValueMappingModel = function (id) {
        // TODO vmid != null
        var getUrl = url + RESET_ACTION;
        return this.http.get(getUrl + '/' + id);
    };
    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
    DipValueMappingModelService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    DipValueMappingModelService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DipValueMappingModelService);
    return DipValueMappingModelService;
}());



/***/ }),

/***/ "./src/app/valuemapping-definition/validator/valuemapping-validator.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/valuemapping-definition/validator/valuemapping-validator.ts ***!
  \*****************************************************************************/
/*! exports provided: ValueMappingValidator, CheckValueMapping, CheckDipVmColumn, CheckVmColumnListRepeat, CheckValueMappingListRepeat, CheckCode, CheckName, IsEmptyValidator, CodeValidate, NameValidate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueMappingValidator", function() { return ValueMappingValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckValueMapping", function() { return CheckValueMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckDipVmColumn", function() { return CheckDipVmColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckVmColumnListRepeat", function() { return CheckVmColumnListRepeat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckValueMappingListRepeat", function() { return CheckValueMappingListRepeat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckCode", function() { return CheckCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckName", function() { return CheckName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsEmptyValidator", function() { return IsEmptyValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeValidate", function() { return CodeValidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameValidate", function() { return NameValidate; });
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _progress_kendo_angular_grid_dist_es2015_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @progress/kendo-angular-grid/dist/es2015/utils */ "./node_modules/@progress/kendo-angular-grid/dist/es2015/utils.js");


var ValueMappingValidator = /** @class */ (function () {
    function ValueMappingValidator() {
    }
    return ValueMappingValidator;
}());

/**
 * CheckValueMapping
 */
function CheckValueMapping(valueMapping) {
    // 值映射定义内码不能为空
    if (IsEmptyValidator(valueMapping.id)) {
        alert('值映射内码为空');
        return false;
    }
    // 值映射定义编号不能为空
    if (IsEmptyValidator(valueMapping.code)) {
        alert('值映射编号为空');
        return false;
    }
    // 值映射定义名称不能为空
    if (IsEmptyValidator(valueMapping.name)) {
        alert('值映射名称为空');
        return false;
    }
    // 值映射定义源列值缺省值不能为空
    if (valueMapping.defaultStrategy === 3 && IsEmptyValidator(valueMapping.defaultValue)) {
        alert('值映射定义源列值缺省值不能为空!');
        return false;
    }
    // 值映射定义缺省值不能为空
    if (valueMapping.defaultStrategy === 4 && IsEmptyValidator(valueMapping.defaultValue)) {
        alert('值映射定义缺省值不能为空!');
        return false;
    }
    // 值映射定义编号超长
    if (valueMapping.code.length > 32) {
        alert('值映射定义遍号不能超过32位!');
        return false;
    }
    // 值映射定义名称超长
    if (valueMapping.name.length > 64) {
        alert('值映射定义名称不能超过64位!');
        return false;
    }
    // 值映射缺省值超长
    if (IsEmptyValidator(valueMapping.defaultValue) === false && valueMapping.defaultValue.length > 64) {
        alert('值映射定义缺省值不能超过64位!');
        return false;
    }
    // 值映射定义编号存在非法字符
    if (CodeValidate(valueMapping.code) === false) {
        alert('值映射定义编号存在非法字符!');
        return false;
    }
    // 值映射定义名称存在非法字符
    if (NameValidate(valueMapping.name) === false) {
        alert('值映射定义名称存在非法字符!');
        return false;
    }
    return true;
}
/// <summary>
/// 值映射列目标列参数校验(非空校验,超长校验,非法校验)
/// </summary>
/// <param name="vmColumn"></param>
/// <returns></returns>
function CheckDipVmColumn(vmColumn) {
    // 值映射列内码不能为空
    if (IsEmptyValidator(vmColumn.id)) {
        alert('值映射列内码不能为空!');
        return false;
    }
    // 值映射列数据列名不能为空
    if (IsEmptyValidator(vmColumn.colText)) {
        alert('值映射列数据列名不能为空!');
        return false;
    }
    // 值映射列数据列名超长
    if (vmColumn.colText.length > 64) {
        alert('值映射列数据列名不能超过64位!');
        return false;
    }
    // 值映射列数据列名存在非法字符
    if (NameValidate(vmColumn.colText) === false) {
        alert('值映射列数据列名存在非法字符!');
        return false;
    }
    return true;
}
/// <summary>
/// 值映射列源列列表ColText重复性校验,(非空校验,超长校验,非法校验)
/// </summary>
/// <param name="vmColumnList"></param>
function CheckVmColumnListRepeat(vmColumnList) {
    var _loop_1 = function (key) {
        if (vmColumnList.hasOwnProperty(key)) {
            var vmColumn_1 = vmColumnList[key];
            if (IsEmptyValidator(vmColumn_1.vmId)) {
                alert('值映射列值映射定义内码vmid为空!');
                return { value: false };
            }
            // 值映射列数据列名不能为空
            if (IsEmptyValidator(vmColumn_1.colText)) {
                alert('值映射列数据列名不能为空!');
                return { value: false };
            }
            // 值映射列数据列名超长
            if (vmColumn_1.colText.length > 64) {
                alert('值映射列数据列名不能超过64位!');
                return { value: false };
            }
            // 值映射列数据列名存在非法字符
            if (NameValidate(vmColumn_1.colText) === false) {
                alert('值映射列数据列名存在非法字符!');
                return { value: false };
            }
            var count = vmColumnList.filter(function (vmc) { return vmc.colText === vmColumn_1.colText; }).length;
            if (count > 1) {
                alert('值映射列编号为' + vmColumn_1.code + '重复!');
                return { value: false };
            }
        }
    };
    for (var key in vmColumnList) {
        var state_1 = _loop_1(key);
        if (typeof state_1 === "object")
            return state_1.value;
    }
    return true;
}
/// 值映射列列表ColText重复性校验
function CheckValueMappingListRepeat(valuemappingList) {
    var _loop_2 = function (key) {
        if (valuemappingList.hasOwnProperty(key)) {
            var valuemapping_1 = valuemappingList[key];
            if (IsEmptyValidator(valuemapping_1.id)) {
                alert('值映射定义内码id为空!');
                return { value: false };
            }
            var codeCount = valuemappingList.filter(function (vm) { return vm.code === valuemapping_1.code; }).length;
            if (codeCount > 1) {
                alert('值映射定义编号为' + valuemapping_1.code + '重复!');
                return { value: false };
            }
            var nameCount = valuemappingList.filter(function (vm) { return vm.name === valuemapping_1.name; }).length;
            if (nameCount > 1) {
                alert('值映射定义名称为' + valuemapping_1.name + '重复!');
                return { value: false };
            }
        }
    };
    for (var key in valuemappingList) {
        var state_2 = _loop_2(key);
        if (typeof state_2 === "object")
            return state_2.value;
    }
    return true;
}
function CheckCode(code) {
    if (Object(util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(code) || Object(_progress_kendo_angular_grid_dist_es2015_utils__WEBPACK_IMPORTED_MODULE_1__["isNullOrEmptyString"])(code)) {
        alert('编号不能为空');
        return false;
    }
    if (code.length > 32) {
        alert('编号长度不能超过32位');
        return false;
    }
    return true;
}
function CheckName(name) {
    if (Object(util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(name) || Object(_progress_kendo_angular_grid_dist_es2015_utils__WEBPACK_IMPORTED_MODULE_1__["isNullOrEmptyString"])(name)) {
        alert('名称不能为空');
        return false;
    }
    if (name.length > 64) {
        alert('名称长度不能超过64位');
        return false;
    }
    return true;
}
function IsEmptyValidator(name) {
    if (Object(util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(name) || Object(_progress_kendo_angular_grid_dist_es2015_utils__WEBPACK_IMPORTED_MODULE_1__["isNullOrEmptyString"])(name)) {
        return true;
    }
    return false;
}
/// <summary>
/// 编号校验(仅支持英文数字下划线)
/// </summary>
/// <param name="code"></param>
/// <returns></returns>
function CodeValidate(code) {
    var reg = new RegExp('^[a-zA-Z0-9_]+$');
    var arr = code.match(reg);
    if (arr == null) {
        return false;
    }
    if (arr.length === 1) {
        return true;
    }
    else {
        return false;
    }
}
/// <summary>
/// 名称校验(仅支持中英文数字下划线)
/// </summary>
/// <param name="name"></param>
/// <returns></returns>
function NameValidate(name) {
    var reg = new RegExp('^[a-zA-Z0-9\u2E80-\u9FFF_]+$');
    var arr = name.match(reg);
    if (arr == null) {
        return false;
    }
    if (arr.length === 1) {
        return true;
    }
    else {
        return false;
    }
}


/***/ }),

/***/ "./src/app/valuemapping-definition/valueMapping-grid.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/valuemapping-definition/valueMapping-grid.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*#vp-grid {*/\r\n  /*width:30%;*/\r\n  /*height:100%;*/\r\n  /*float:left;*/\r\n  /*margin:0;*/\r\n  /*}*/\r\n  /*#vp-vpinfo{*/\r\n  /*width:68%;*/\r\n  /*height:100%;*/\r\n  /*float:right;*/\r\n  /*margin:0;*/\r\n  /*}*/\r\n  /*#vp-baseInfo {*/\r\n  /*height:36%;*/\r\n  /*!*background-color:#0033CC;*!*/\r\n  /*margin:0;*/\r\n  /*}*/\r\n  /*#vp-setting {*/\r\n  /*height:60%;*/\r\n  /*!*background-color: transparent;*!*/\r\n  /*margin:0;*/\r\n  /*}*/\r\n"

/***/ }),

/***/ "./src/app/valuemapping-definition/valueMapping-grid.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/valuemapping-definition/valueMapping-grid.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-body\" style=\"float:right;width: 80%;height: 100px;\">\r\n  <h2 style=\"float:left;width: 20%;\">值映射定义</h2>\r\n  <p style=\"float:right;width: 58%;max-width: 350px;margin-top: 27px;\">\r\n    <small>\r\n      <button kendoButton class=\"btn btn-small\" (click)=\"addHandler()\" [disabled]=\"!btnState\">新增</button>\r\n      <button kendoButton class=\"btn btn-small\" type=\"button\" (click)=\"editHandler()\" [disabled]=\"!btnState\">编辑\r\n      </button>\r\n      <button kendoButton class=\"btn btn-small\" type=\"button\" (click)=\"removeHandler()\" [disabled]=\"!btnState\">删除\r\n      </button>\r\n      <button kendoButton class=\"btn btn-small\" type=\"button\" (click)=\"saveHandler()\" [disabled]=\"!!btnState\">保存\r\n      </button>\r\n      <button kendoButton class=\"btn btn-small\" type=\"button\" (click)=\"cancelHandler()\" [disabled]=\"!!btnState\">取消\r\n      </button>\r\n    </small>\r\n  </p>\r\n</div>\r\n\r\n<div>\r\n  <div id=\"vp-grid\" style=\"float:left;width: 22%;\">\r\n    <form novalidate #myForm=\"ngForm\">\r\n      <kendo-grid #grid [data]=\"data\" [selectable]=\"{enabled: true, mode: 'single'}\" style=\"height: 100%;\" [kendoGridSelectBy]=\"\"\r\n        [selectedKeys]=\"mySelection\" (selectedKeysChange)=\"onSelectedKeysChange($event)\">\r\n        <kendo-grid-column field=\"id\" title=\"id\" hidden=\"hidden\">\r\n        </kendo-grid-column>\r\n        <kendo-grid-column field=\"code\" title=\"编号\" width=\"100\" disabled>\r\n        </kendo-grid-column>\r\n        <kendo-grid-column field=\"name\" title=\"名称\" width=\"100\" disabled>\r\n        </kendo-grid-column>\r\n      </kendo-grid>\r\n    </form>\r\n  </div>\r\n  <div id=\"vp-vpinfo\" style=\"float:right;width: 60%;\">\r\n    <valueMapping-baseInfo [valueMapping]=\"selectedValueMapping\"></valueMapping-baseInfo>\r\n  </div>\r\n</div>\r\n\r\n<!-- [scrollable]=\"'virtual'\"  -->\r\n"

/***/ }),

/***/ "./src/app/valuemapping-definition/valueMapping-grid.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/valuemapping-definition/valueMapping-grid.component.ts ***!
  \************************************************************************/
/*! exports provided: ValueMappingGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueMappingGridComponent", function() { return ValueMappingGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Service_stateControllor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Service/stateControllor.service */ "./src/app/valuemapping-definition/Service/stateControllor.service.ts");
/* harmony import */ var _service_dipvaluemappingservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/dipvaluemappingservice.service */ "./src/app/valuemapping-definition/service/dipvaluemappingservice.service.ts");
/* harmony import */ var _model_DipValueMappingModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./model/DipValueMappingModel */ "./src/app/valuemapping-definition/model/DipValueMappingModel.ts");
/* harmony import */ var _model_DipVmColumnModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./model/DipVmColumnModel */ "./src/app/valuemapping-definition/model/DipVmColumnModel.ts");
/* harmony import */ var _baseinfo_valueMapping_baseInfo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./baseinfo/valueMapping-baseInfo.component */ "./src/app/valuemapping-definition/baseinfo/valueMapping-baseInfo.component.ts");
/* harmony import */ var _model_ValueMappingEditModel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./model/ValueMappingEditModel */ "./src/app/valuemapping-definition/model/ValueMappingEditModel.ts");
/* harmony import */ var _validator_valuemapping_validator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./validator/valuemapping-validator */ "./src/app/valuemapping-definition/validator/valuemapping-validator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ValueMappingGridComponent = /** @class */ (function () {
    function ValueMappingGridComponent(dipValueMappingService, stateControllorService) {
        this.dipValueMappingService = dipValueMappingService;
        this.stateControllorService = stateControllorService;
        this.btnState = true;
        this.mySelection = [0];
        this.editedRowIndex = 0;
    }
    ValueMappingGridComponent.prototype.ngAfterViewInit = function () {
        console.log(this.kGrid);
    };
    ValueMappingGridComponent.prototype.ngOnInit = function () {
        this.getValueMappingData();
    };
    ValueMappingGridComponent.prototype.changeDisabled = function () {
        this.btnState = this.stateControllorService.changeState();
    };
    ValueMappingGridComponent.prototype.onSelectedKeysChange = function (e) {
        var _this = this;
        console.log(this.data);
        console.log('mySelection:' + this.mySelection);
        console.log('e:' + e);
        var vm1 = this.kGrid.data[e];
        this.dipValueMappingService.getDipValueMappingModel(vm1.id).subscribe(function (vmModel) {
            vm1 = vmModel;
            _this.selectedValueMapping = vm1;
            console.log('vm1', vm1);
        });
        console.log(vm1);
    };
    ValueMappingGridComponent.prototype.getValueMappingData = function () {
        var _this = this;
        this.dipValueMappingService.getDipValueMappingModelList()
            .subscribe(function (vmlist) {
            _this.data = vmlist;
            if (vmlist.length === 0) {
                _this.mySelection = [];
            }
            else {
                _this.mySelection = [0];
                console.log('this.data', _this.data);
                _this.getValueMapping(_this.data[0].id);
            }
        });
    };
    ValueMappingGridComponent.prototype.getValueMapping = function (vmid) {
        var _this = this;
        this.dipValueMappingService.getDipValueMappingModel(vmid)
            .subscribe(function (vm) {
            _this.selectedValueMapping = vm;
        });
    };
    ValueMappingGridComponent.prototype.saveValueMapping = function () {
        var _this = this;
        this.vmBaseinfoComponent.closeEditor();
        console.log('saveValueMapping', this.selectedValueMapping);
        console.log('this.isNew', this.isNew);
        if (this.checkSelectValueMapping() === false) {
            this.getValueMapping(this.selectedValueMapping.id);
        }
        else {
            if (this.isNew === true) {
                this.dipValueMappingService.addDipValueMappingModel(this.selectedValueMapping)
                    .subscribe(function (vm) {
                    console.log(vm);
                    _this.selectedValueMapping = vm;
                    console.log(_this.mySelection);
                    var rowIndex = _this.mySelection[0];
                    _this.kGrid.closeRow(rowIndex);
                    // this.getValueMappingData();
                    console.log(_this.kGrid.data[rowIndex]);
                });
            }
            else {
                console.log('2222222222', this.dipValueMappingService.valueMappingEditModel);
                this.dipValueMappingService.updateDipValueMappingModel(this.dipValueMappingService.valueMappingEditModel).subscribe(function (vm) {
                    _this.dipValueMappingService.valueMappingEditModel = new _model_ValueMappingEditModel__WEBPACK_IMPORTED_MODULE_8__["ValueMappingEditModel"];
                    console.log(_this.mySelection);
                    var rowIndex = _this.mySelection[0];
                    _this.kGrid.closeRow(rowIndex);
                    // this.getValueMappingData();
                    console.log(_this.kGrid.data[rowIndex]);
                });
            }
        }
        this.dipValueMappingService.valueMappingEditModel = new _model_ValueMappingEditModel__WEBPACK_IMPORTED_MODULE_8__["ValueMappingEditModel"];
    };
    ValueMappingGridComponent.prototype.checkSelectValueMapping = function () {
        if (Object(_validator_valuemapping_validator__WEBPACK_IMPORTED_MODULE_9__["CheckValueMapping"])(this.selectedValueMapping) === false) {
            return false;
        }
        if (Object(util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.selectedValueMapping.srcVmColumnModelList) || this.selectedValueMapping.srcVmColumnModelList.length === 0) {
            alert('值映射列源列至少有一列');
            return false;
        }
        if (Object(_validator_valuemapping_validator__WEBPACK_IMPORTED_MODULE_9__["CheckValueMappingListRepeat"])(this.data) === false) {
            return false;
        }
        if (Object(_validator_valuemapping_validator__WEBPACK_IMPORTED_MODULE_9__["CheckDipVmColumn"])(this.selectedValueMapping.tarVmColumnModel) === false) {
            return false;
        }
        if (Object(_validator_valuemapping_validator__WEBPACK_IMPORTED_MODULE_9__["CheckVmColumnListRepeat"])(this.selectedValueMapping.srcVmColumnModelList) === false) {
            return false;
        }
        return true;
    };
    ValueMappingGridComponent.prototype.addHandler = function () {
        var _this = this;
        this.changeDisabled();
        this.dipValueMappingService.getGuid().subscribe(function (guid) {
            _this.dipValueMappingService.getGuid().subscribe(function (targuid) {
                _this.dipValueMappingService.getGuid().subscribe(function (srcguid) {
                    console.log('addHandler');
                    _this.isNew = true;
                    console.log('sender:', _this.kGrid);
                    var vm = _this.getAddValueMapping(guid);
                    var tarVmColumn = _this.getTarVmColumn(targuid);
                    tarVmColumn.vmId = guid;
                    vm.tarVmColumnModel = tarVmColumn;
                    var srcVmColumn = _this.getSrcVmColumn(srcguid);
                    srcVmColumn.vmId = guid;
                    vm.srcVmColumnModelList = [srcVmColumn];
                    _this.selectedValueMapping = vm;
                    var arr = [vm];
                    _this.data = arr.concat(_this.data);
                    console.log(_this.mySelection, '****', _this.data);
                    console.log('addHandler');
                });
            });
        });
    };
    ValueMappingGridComponent.prototype.getAddValueMapping = function (id) {
        var vm = new _model_DipValueMappingModel__WEBPACK_IMPORTED_MODULE_5__["DipValueMappingModel"]();
        vm.id = id;
        console.log('editedRowIndex', this.editedRowIndex);
        this.closeEditor(this.kGrid);
        console.log(vm);
        this.kGrid.addRow(vm);
        console.log(vm);
        return vm;
    };
    ValueMappingGridComponent.prototype.getTarVmColumn = function (id) {
        var tarVmColumn = new _model_DipVmColumnModel__WEBPACK_IMPORTED_MODULE_6__["DipVmColumnModel"]();
        tarVmColumn.id = id;
        tarVmColumn.code = 'TARCOL';
        tarVmColumn.direction = 2;
        tarVmColumn.editMode = 0;
        tarVmColumn.dataType = 0;
        tarVmColumn.helpColumn = 0;
        return tarVmColumn;
    };
    ValueMappingGridComponent.prototype.getSrcVmColumn = function (id) {
        var srcVmColumn = new _model_DipVmColumnModel__WEBPACK_IMPORTED_MODULE_6__["DipVmColumnModel"]();
        srcVmColumn.id = id;
        srcVmColumn.code = 'SRCCOL01';
        srcVmColumn.direction = 1;
        srcVmColumn.editMode = 0;
        srcVmColumn.dataType = 0;
        srcVmColumn.helpColumn = 0;
        return srcVmColumn;
    };
    ValueMappingGridComponent.prototype.editHandler = function () {
        var _this = this;
        this.changeDisabled();
        console.log('editHandler');
        this.isNew = false;
        console.log('myselection', this.mySelection);
        console.log('selectedMapping', this.selectedValueMapping);
        this.editedRowIndex = this.mySelection[0];
        this.dipValueMappingService.getDipValueMappingModel(this.selectedValueMapping.id)
            .subscribe(function (model) {
            _this.selectedValueMapping = model;
            // TODO 值映射定义编辑处理
            _this.dipValueMappingService.valueMappingEditModel.valueMappingModel = _this.selectedValueMapping;
        });
        console.log('editHandler');
    };
    ValueMappingGridComponent.prototype.cancelHandler = function () {
        this.changeDisabled();
        this.kGrid.cancelCell();
        this.kGrid.closeRow();
        console.log(this.selectedValueMapping);
        if (this.isNew === true) {
            this.data.splice(0, 1);
            if (this.data.length > 0) {
                this.mySelection = [0];
                this.getValueMapping(this.data[0].id);
            }
            else {
                this.mySelection = [];
                this.selectedValueMapping = new _model_DipValueMappingModel__WEBPACK_IMPORTED_MODULE_5__["DipValueMappingModel"];
            }
        }
        else {
            if (Object(util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.selectedValueMapping) === false && Object(util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.selectedValueMapping.id) === false) {
                this.getValueMapping(this.selectedValueMapping.id);
            }
        }
        console.log('cancelHandler');
        this.dipValueMappingService.valueMappingEditModel = new _model_ValueMappingEditModel__WEBPACK_IMPORTED_MODULE_8__["ValueMappingEditModel"];
    };
    ValueMappingGridComponent.prototype.saveHandler = function () {
        this.changeDisabled();
        console.log('saveHandler');
        this.saveValueMapping();
    };
    ValueMappingGridComponent.prototype.removeHandler = function () {
        console.log('remove');
        console.log(this.selectedValueMapping);
        // console.log('dataitem', dataItem);
        this.deleteValueMapping(this.selectedValueMapping.id);
    };
    ValueMappingGridComponent.prototype.deleteValueMapping = function (id) {
        var _this = this;
        this.dipValueMappingService.deleteDipValueMappingModel(id)
            .subscribe(function (value) {
            console.log(value);
            _this.getValueMappingData();
        });
    };
    ValueMappingGridComponent.prototype.closeEditor = function (grid, rowIndex) {
        if (rowIndex === void 0) { rowIndex = this.editedRowIndex; }
        grid.closeRow(rowIndex);
        // this.editService.resetItem(this.editedProduct);
        var vm = this.selectedValueMapping;
        console.log('vm', vm);
        this.editedRowIndex = undefined;
    };
    ValueMappingGridComponent.prototype.getDisabledState = function () {
        return this.stateControllorService.getState();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('grid'),
        __metadata("design:type", _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_1__["GridComponent"])
    ], ValueMappingGridComponent.prototype, "kGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_baseinfo_valueMapping_baseInfo_component__WEBPACK_IMPORTED_MODULE_7__["ValueMappingBaseInfoComponent"]),
        __metadata("design:type", _baseinfo_valueMapping_baseInfo_component__WEBPACK_IMPORTED_MODULE_7__["ValueMappingBaseInfoComponent"])
    ], ValueMappingGridComponent.prototype, "vmBaseinfoComponent", void 0);
    ValueMappingGridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'valueMapping-grid',
            template: __webpack_require__(/*! ./valueMapping-grid.component.html */ "./src/app/valuemapping-definition/valueMapping-grid.component.html"),
            styles: [__webpack_require__(/*! ./valueMapping-grid.component.css */ "./src/app/valuemapping-definition/valueMapping-grid.component.css")],
            providers: [_service_dipvaluemappingservice_service__WEBPACK_IMPORTED_MODULE_4__["DipValueMappingModelService"], _Service_stateControllor_service__WEBPACK_IMPORTED_MODULE_3__["StateControllorService"]]
        }),
        __metadata("design:paramtypes", [_service_dipvaluemappingservice_service__WEBPACK_IMPORTED_MODULE_4__["DipValueMappingModelService"],
            _Service_stateControllor_service__WEBPACK_IMPORTED_MODULE_3__["StateControllorService"]])
    ], ValueMappingGridComponent);
    return ValueMappingGridComponent;
}());



/***/ }),

/***/ "./src/app/valuemapping-definition/vmcolumn/vm-src-column.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/valuemapping-definition/vmcolumn/vm-src-column.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label>源列设置</label>\r\n<form novalidate #myForm=\"ngForm\">\r\n<kendo-grid #srcGrid\r\n            [data]=\"gridData\"\r\n            [resizable]=\"true\"\r\n            [selectable]=\"{enabled: true, mode: 'single'}\"\r\n            [kendoGridSelectBy]=\"\"\r\n            [selectedKeys]=\"mySelection\"\r\n            (selectedKeysChange)=\"onSelectedKeysChange($event)\"\r\n            (cellClick)=\"cellClickHandler($event)\"\r\n            (cellClose)=\"cellCloseHandler($event)\">\r\n  <kendo-grid-column field=\"code\" title=\"编号\" disabled >\r\n  </kendo-grid-column>\r\n  <kendo-grid-column field=\"colText\" title=\"数据列名\">\r\n  </kendo-grid-column>\r\n  <kendo-grid-column field=\"dataType\" title=\"数据类型\">\r\n  </kendo-grid-column>\r\n  <kendo-grid-column field=\"editMode\" title=\"编辑类型\">\r\n  </kendo-grid-column>\r\n  <kendo-grid-column field=\"helpId\" title=\"智能帮助\">\r\n  </kendo-grid-column>\r\n  <kendo-grid-column field=\"helpFilter\" title=\"过滤条件\">\r\n  </kendo-grid-column>\r\n  <kendo-grid-column field=\"groupFilter\" title=\"分组过滤条件\">\r\n  </kendo-grid-column>\r\n  <kendo-grid-column field=\"helpColumn\" title=\"关联列\">\r\n  </kendo-grid-column>\r\n</kendo-grid>\r\n</form>\r\n\r\n"

/***/ }),

/***/ "./src/app/valuemapping-definition/vmcolumn/vm-src-column.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/valuemapping-definition/vmcolumn/vm-src-column.component.ts ***!
  \*****************************************************************************/
/*! exports provided: VmSrcColumnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VmSrcColumnComponent", function() { return VmSrcColumnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_dipvaluemappingservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/dipvaluemappingservice.service */ "./src/app/valuemapping-definition/service/dipvaluemappingservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VmSrcColumnComponent = /** @class */ (function () {
    function VmSrcColumnComponent(formBuilder, dipValueMappingService) {
        this.formBuilder = formBuilder;
        this.dipValueMappingService = dipValueMappingService;
        this.editedRowIndex = 0;
        this.mySelection = [];
        // console.log('vmid==' + this.vmid);
    }
    Object.defineProperty(VmSrcColumnComponent.prototype, "srcValueMappingColumns", {
        get: function () {
            return this._srcValueMappingColumns;
        },
        set: function (srcValueMappingColumns) {
            this._srcValueMappingColumns = srcValueMappingColumns;
            console.log('src----', this._srcValueMappingColumns);
            this.gridData = this.srcValueMappingColumns;
            this.tempData = this.srcValueMappingColumns;
            if (Object(util__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(this.gridData) === false && this.gridData.length > 0) {
                this.selectedValueMappingColumn = this.gridData[0];
                this.mySelection = [0];
            }
            // this.getValueMappingSrcColumnList();
        },
        enumerable: true,
        configurable: true
    });
    VmSrcColumnComponent.prototype.ngOnInit = function () {
        // this.getValueMappingSrcColumnList();
    };
    VmSrcColumnComponent.prototype.ngAfterViewInit = function () {
        console.log(this.kSrcGrid);
    };
    VmSrcColumnComponent.prototype.getValueMappingSrcColumnList = function () {
        //  this.valueMappingColumnService.getDepValueMappingSrcColumnList(this.vmid).subscribe(value => this.gridData = value);
    };
    VmSrcColumnComponent.prototype.onSelectedKeysChange = function (e) {
        console.log(this.gridData);
        console.log('e:', e);
        var vmc1 = this.kSrcGrid.data[e];
        this.editedRowIndex = e;
        this.selectedValueMappingColumn = vmc1;
        console.log(vmc1);
    };
    VmSrcColumnComponent.prototype.addVmColumn = function (vmc) {
        console.log('addVmcolumn');
        console.log(vmc);
        // this.kSrcGrid.addRow(vmc);
        this.selectedValueMappingColumn = vmc;
        var index = this.dipValueMappingService.valueMappingEditModel.vmColumnModelAddList
            .findIndex(function (vmc1) { return vmc1.id === vmc.id; });
        if (index > -1) {
            this.dipValueMappingService.valueMappingEditModel.vmColumnModelAddList.splice(index, 1);
        }
        else {
            this.dipValueMappingService.valueMappingEditModel.vmColumnModelAddList.push(vmc);
        }
        console.log('addthis.selectedValueMappingColumn', this.selectedValueMappingColumn);
        // this.tempData.push(vmc);
        this.gridData.push(vmc);
        console.log(this.editedRowIndex);
        console.log('addVmcolumn');
    };
    VmSrcColumnComponent.prototype.removeVmColumn = function () {
        if (this.gridData !== null && this.gridData.length > 0) {
            var selectVmcIndex = this.mySelection[0];
            var vmc_1 = this.gridData[selectVmcIndex];
            var addindex = this.dipValueMappingService.valueMappingEditModel.vmColumnModelAddList
                .findIndex(function (vmc1) { return vmc1.id === vmc_1.id; });
            if (addindex > -1) {
                this.dipValueMappingService.valueMappingEditModel.vmColumnModelAddList.splice(addindex, 1);
            }
            else {
                this.dipValueMappingService.valueMappingEditModel.deleteVmColumns.push(this.selectedValueMappingColumn.id);
            }
            var editIndex = this.dipValueMappingService.valueMappingEditModel.vmColumnModelEditList
                .findIndex(function (vmc1) { return vmc1.id === vmc_1.id; });
            if (editIndex > -1) {
                this.dipValueMappingService.valueMappingEditModel.vmColumnModelEditList.splice(editIndex, 1);
            }
            this.gridData.splice(selectVmcIndex, 1);
            if (this.gridData.length === selectVmcIndex) {
                this.mySelection = [selectVmcIndex - 1];
            }
        }
        else {
            alert('无删除数据');
        }
    };
    VmSrcColumnComponent.prototype.cellClickHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, columnIndex = _a.columnIndex, dataItem = _a.dataItem, isEdited = _a.isEdited;
        if (columnIndex === 0) {
            return;
        }
        if (!isEdited) {
            var fromGroup = this.createFormGroup(dataItem);
            this.kSrcGrid.editCell(rowIndex, columnIndex, fromGroup);
        }
    };
    VmSrcColumnComponent.prototype.cellCloseHandler = function (args) {
        var formGroup = args.formGroup, dataItem = args.dataItem;
        var index = this.dipValueMappingService.valueMappingEditModel.vmColumnModelAddList
            .findIndex(function (vmc1) { return vmc1.id === dataItem.id; });
        if (index > -1) {
            var addVmColumn = formGroup.value;
            addVmColumn.vmId = this.vmid;
            Object.assign(dataItem, addVmColumn);
            addVmColumn.vmId = this.vmid;
            this.dipValueMappingService.valueMappingEditModel.vmColumnModelAddList.splice(index, 1);
            this.dipValueMappingService.valueMappingEditModel.vmColumnModelAddList.push(addVmColumn);
            console.log('addVmColumn', addVmColumn);
        }
        else {
            if (!formGroup.valid) {
                // prevent closing the edited cell if there are invalid values.
                args.preventDefault();
            }
            else if (formGroup.dirty) {
                var editVmColumn = formGroup.value;
                Object.assign(dataItem, editVmColumn);
                var editindex = this.dipValueMappingService.valueMappingEditModel.vmColumnModelEditList
                    .findIndex(function (vmc) { return vmc.id === formGroup.value.id; });
                if (editindex > -1) {
                    this.dipValueMappingService.valueMappingEditModel.vmColumnModelEditList.splice(editindex, 1);
                }
                this.dipValueMappingService.valueMappingEditModel.vmColumnModelEditList.push(formGroup.value);
            }
        }
        var num = this.gridData.findIndex(function (vmc) { return vmc.id === dataItem.id; });
        this.kSrcGrid.data[num] = dataItem;
        this.kSrcGrid.closeCell();
        this.kSrcGrid.cancelCell();
    };
    VmSrcColumnComponent.prototype.createFormGroup = function (dataItem) {
        return this.formBuilder.group({
            'id': dataItem.id,
            'vmId': dataItem.vmId,
            'code': dataItem.code,
            'colText': dataItem.colText,
            'dataType': dataItem.dataType,
            'editMode': dataItem.editMode,
            'helpId': dataItem.helpId,
            'helpCode': dataItem.helpCode,
            'direction': dataItem.direction,
            'helpColumn': dataItem.helpColumn,
            'helpFilter': dataItem.helpFilter,
            'groupFilter': dataItem.groupFilter
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('srcGrid'),
        __metadata("design:type", _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_2__["GridComponent"])
    ], VmSrcColumnComponent.prototype, "kSrcGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], VmSrcColumnComponent.prototype, "srcValueMappingColumns", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], VmSrcColumnComponent.prototype, "vmid", void 0);
    VmSrcColumnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vm-src-grid',
            template: __webpack_require__(/*! ./vm-src-column.component.html */ "./src/app/valuemapping-definition/vmcolumn/vm-src-column.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _service_dipvaluemappingservice_service__WEBPACK_IMPORTED_MODULE_4__["DipValueMappingModelService"]])
    ], VmSrcColumnComponent);
    return VmSrcColumnComponent;
}());



/***/ }),

/***/ "./src/app/valuemapping-definition/vmcolumn/vm-tar-column.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/valuemapping-definition/vmcolumn/vm-tar-column.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label>目标列设置</label>\r\n<kendo-grid #tarGrid [data]=\"gridData\" [resizable]=\"true\" [resizable]=\"true\" [selectable]=\"{enabled: true, mode: 'single'}\"\r\n  [kendoGridSelectBy]=\"\" [selectedKeys]=\"mySelection\" (cellClick)=\"cellClickHandler($event)\" (cellClose)=\"cellCloseHandler($event)\">\r\n<kendo-grid-column field=\"code\" title=\"编号\" disabled >\r\n  </kendo-grid-column>\r\n  <kendo-grid-column field=\"colText\" title=\"数据列名\">\r\n  </kendo-grid-column>\r\n  <kendo-grid-column field=\"dataType\" title=\"数据类型\">\r\n  </kendo-grid-column>\r\n  <kendo-grid-column field=\"editMode\" title=\"编辑类型\">\r\n  </kendo-grid-column>\r\n  <kendo-grid-column field=\"helpId\" title=\"智能帮助\">\r\n  </kendo-grid-column>\r\n  <kendo-grid-column field=\"helpFilter\" title=\"过滤条件\">\r\n  </kendo-grid-column>\r\n  <kendo-grid-column field=\"groupFilter\" title=\"分组过滤条件\">\r\n  </kendo-grid-column>\r\n  <kendo-grid-column field=\"helpColumn\" title=\"关联列\">\r\n  </kendo-grid-column>\r\n</kendo-grid>\r\n"

/***/ }),

/***/ "./src/app/valuemapping-definition/vmcolumn/vm-tar-column.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/valuemapping-definition/vmcolumn/vm-tar-column.component.ts ***!
  \*****************************************************************************/
/*! exports provided: VmTarColumnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VmTarColumnComponent", function() { return VmTarColumnComponent; });
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_dipvaluemappingservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/dipvaluemappingservice.service */ "./src/app/valuemapping-definition/service/dipvaluemappingservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VmTarColumnComponent = /** @class */ (function () {
    function VmTarColumnComponent(formBuilder, dipValueMappingService) {
        this.formBuilder = formBuilder;
        this.dipValueMappingService = dipValueMappingService;
        this.mySelection = [0];
    }
    Object.defineProperty(VmTarColumnComponent.prototype, "tarValueMappingColumns", {
        get: function () {
            return this._tarValueMappingColumns;
        },
        set: function (tarValueMappingColumns) {
            this._tarValueMappingColumns = tarValueMappingColumns;
            console.log('tar----' + this._tarValueMappingColumns);
            this.gridData = this.tarValueMappingColumns;
            // this.getValueMappingSrcColumnList();
        },
        enumerable: true,
        configurable: true
    });
    VmTarColumnComponent.prototype.ngOnInit = function () {
    };
    VmTarColumnComponent.prototype.cellClickHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, columnIndex = _a.columnIndex, dataItem = _a.dataItem, isEdited = _a.isEdited;
        if (!isEdited) {
            sender.editCell(rowIndex, columnIndex, this.createFormGroup(dataItem));
        }
    };
    // 单元格失去焦点
    VmTarColumnComponent.prototype.cellCloseHandler = function (args) {
        var formGroup = args.formGroup, dataItem = args.dataItem;
        console.log(dataItem);
        console.log(formGroup.value);
        Object.assign(dataItem, formGroup.value);
        this.gridData[0] = formGroup.value;
        console.log(formGroup.value);
        var index = this.dipValueMappingService.valueMappingEditModel.vmColumnModelEditList
            .findIndex(function (vmc) { return vmc.id === formGroup.value.id; });
        if (index > -1) {
            this.dipValueMappingService.valueMappingEditModel.vmColumnModelEditList.splice(index, 1);
        }
        this.dipValueMappingService.valueMappingEditModel.vmColumnModelEditList.push(formGroup.value);
        // this.tarGrid.closeCell();
        // this.tarGrid.cancelCell();
    };
    VmTarColumnComponent.prototype.createFormGroup = function (dataItem) {
        return this.formBuilder.group({
            'id': dataItem.id,
            'vmId': dataItem.vmId,
            'code': dataItem.code,
            'colText': dataItem.colText,
            'dataType': dataItem.dataType,
            'editMode': dataItem.editMode,
            'helpId': dataItem.helpId,
            'helpCode': dataItem.helpCode,
            'direction': dataItem.direction,
            'helpColumn': dataItem.helpColumn,
            'helpFilter': dataItem.helpFilter,
            'groupFilter': dataItem.groupFilter
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tarGrid'),
        __metadata("design:type", _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_0__["GridComponent"])
    ], VmTarColumnComponent.prototype, "tarGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], VmTarColumnComponent.prototype, "tarValueMappingColumns", null);
    VmTarColumnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vm-tar-grid',
            template: __webpack_require__(/*! ./vm-tar-column.component.html */ "./src/app/valuemapping-definition/vmcolumn/vm-tar-column.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _service_dipvaluemappingservice_service__WEBPACK_IMPORTED_MODULE_3__["DipValueMappingModelService"]])
    ], VmTarColumnComponent);
    return VmTarColumnComponent;
}());



/***/ }),

/***/ "./src/app/vmsetting/model/vmsetting-editmodel.model.ts":
/*!**************************************************************!*\
  !*** ./src/app/vmsetting/model/vmsetting-editmodel.model.ts ***!
  \**************************************************************/
/*! exports provided: VmSettingEditModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VmSettingEditModel", function() { return VmSettingEditModel; });
var VmSettingEditModel = /** @class */ (function () {
    function VmSettingEditModel() {
        this.vmSettingAddList = new Array();
        this.vmSettingEditList = new Array();
        this.vmSettingDeleteList = new Array();
    }
    return VmSettingEditModel;
}());



/***/ }),

/***/ "./src/app/vmsetting/model/vmsetting.model.ts":
/*!****************************************************!*\
  !*** ./src/app/vmsetting/model/vmsetting.model.ts ***!
  \****************************************************/
/*! exports provided: DipVmSettingModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DipVmSettingModel", function() { return DipVmSettingModel; });
var url = 'http://localhost:5000/api/runtime/dip/v1.0/valuemapping/setting/';
// const url = 'http://localhost:22771/valueMapping/';
// 获取值映射设置列表getVmValueLists/vmid
var getVmValueLists = 'getVmValueLists/';
// 获取值映射设置列名 getVmSettingColName/vmid
var getVmSettingColName = 'getVmSettingColName/';
// 更新值映射设置信息 body
var updateVmSetting = 'updateVmSetting';
var DipVmSettingModel = /** @class */ (function () {
    function DipVmSettingModel() {
        /// <summary>
        /// 值映射设置内码
        /// </summary>
        this.id = '';
        /// <summary>
        /// 值映射定义内码
        /// </summary>
        this.vmid = '';
        /// <summary>
        /// 值映射源列01
        /// </summary>
        this.srccol01 = '';
        /// <summary>
        /// 值映射源列02
        /// </summary>
        this.srccol02 = '';
        /// <summary>
        /// 值映射源列03
        /// </summary>
        this.srccol03 = '';
        /// <summary>
        /// 值映射源列04
        /// </summary>
        this.srccol04 = '';
        /// <summary>
        /// 值映射源列05
        /// </summary>
        this.srccol05 = '';
        /// <summary>
        /// 值映射源列06
        /// </summary>
        this.srccol06 = '';
        /// <summary>
        /// 值映射源列07
        /// </summary>
        this.srccol07 = '';
        /// <summary>
        /// 值映射源列08
        /// </summary>
        this.srccol08 = '';
        /// <summary>
        /// 值映射源列09
        /// </summary>
        this.srccol09 = '';
        /// <summary>
        /// 值映射源列10
        /// </summary>
        this.srccol10 = '';
        /// <summary>
        /// 值映射模糊匹配表达式
        /// </summary>
        this.srccolexpression = '';
        /// <summary>
        /// 值映射设置目标值
        /// </summary>
        this.tarcol = '';
    }
    return DipVmSettingModel;
}());



/***/ }),

/***/ "./src/app/vmsetting/service/valuemapping.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/vmsetting/service/valuemapping.service.ts ***!
  \***********************************************************/
/*! exports provided: DipValueMappingModelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DipValueMappingModelService", function() { return DipValueMappingModelService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var url = '/api/dev/dip/v1.0/valuemapping/'; // http://localhost:5000
var getDipValueMappingList = 'dipValueMappingList';
var DipValueMappingModelService = /** @class */ (function () {
    function DipValueMappingModelService(http) {
        this.http = http;
    }
    // 获取值映射定义信息
    DipValueMappingModelService.prototype.getDipValueMappingModelList = function () {
        return this.http.get(url + getDipValueMappingList);
    };
    // Guid生成
    DipValueMappingModelService.prototype.getGuid = function () {
        return this.http.get(url + 'guid');
    };
    DipValueMappingModelService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DipValueMappingModelService);
    return DipValueMappingModelService;
}());



/***/ }),

/***/ "./src/app/vmsetting/service/vmsetting.service.ts":
/*!********************************************************!*\
  !*** ./src/app/vmsetting/service/vmsetting.service.ts ***!
  \********************************************************/
/*! exports provided: DipVmSettingModelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DipVmSettingModelService", function() { return DipVmSettingModelService; });
/* harmony import */ var _model_vmsetting_editmodel_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../model/vmsetting-editmodel.model */ "./src/app/vmsetting/model/vmsetting-editmodel.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var url = '/api/dev/dip/v1.0/valuemapping/setting/';
// 'http://localhost:5000';
// 获取值映射设置列表getVmValueLists/vmid
var getVmValueLists = 'vmValueList/';
// 获取值映射设置列名 getVmSettingColName/vmid
var getVmSettingColName = 'vmSettingColName/';
// 更新值映射设置信息 body
var updateVmSetting = 'vmSetting';
var DipVmSettingModelService = /** @class */ (function () {
    function DipVmSettingModelService(http) {
        this.http = http;
        this.vmsettingEditModel = new _model_vmsetting_editmodel_model__WEBPACK_IMPORTED_MODULE_0__["VmSettingEditModel"]();
        this.vmSettingData = new Array();
    }
    // 获取值映射设置信息
    DipVmSettingModelService.prototype.getVmSettingList = function (vmid) {
        // TODO vmid != null
        return this.http.get(url + getVmValueLists + vmid);
    };
    // 获取值映射设置列名
    DipVmSettingModelService.prototype.getVmSettingColName = function (vmid) {
        // TODO vmid != null
        return this.http.get(url + getVmSettingColName + vmid);
    };
    // 更新值映射设置信息
    DipVmSettingModelService.prototype.updateVmSetting = function (vmSettingEditModel) {
        console.log('updateVmSetting', vmSettingEditModel);
        return this.http.put(url + updateVmSetting, vmSettingEditModel);
    };
    DipVmSettingModelService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DipVmSettingModelService);
    return DipVmSettingModelService;
}());



/***/ }),

/***/ "./src/app/vmsetting/vmsetting-validator.ts":
/*!**************************************************!*\
  !*** ./src/app/vmsetting/vmsetting-validator.ts ***!
  \**************************************************/
/*! exports provided: CheckVmSettingListRepeat, VmSettingValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckVmSettingListRepeat", function() { return CheckVmSettingListRepeat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VmSettingValidator", function() { return VmSettingValidator; });
/* harmony import */ var _progress_kendo_angular_grid_dist_es_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @progress/kendo-angular-grid/dist/es/utils */ "./node_modules/@progress/kendo-angular-grid/dist/es/utils.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_1__);


function CheckVmSettingListRepeat(vmValueList) {
    var vmid = null;
    if (vmValueList != null && vmValueList.length > 0) {
        vmid = vmValueList[0].vmid;
        if (Object(util__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(vmid) || Object(_progress_kendo_angular_grid_dist_es_utils__WEBPACK_IMPORTED_MODULE_0__["isNullOrEmptyString"])(vmid)) {
            alert('值映射设置信息的值映射定义内码为空!');
            return false;
        }
    }
    var _loop_1 = function (key) {
        if (vmValueList.hasOwnProperty(key)) {
            var element_1 = vmValueList[key];
            var count = vmValueList.filter(function (vms) {
                return CompareSrccol(element_1, vms);
            }).length;
            if (count > 1) {
                alert('值映射设置源列重复!');
                return { value: false };
            }
        }
    };
    for (var key in vmValueList) {
        var state_1 = _loop_1(key);
        if (typeof state_1 === "object")
            return state_1.value;
    }
    return true;
}
function CompareSrccol(newvms, vms) {
    if (newvms.vmid !== vms.vmid) {
        return false;
    }
    if (newvms.srccol01 !== vms.srccol01) {
        return false;
    }
    if (newvms.srccol02 !== vms.srccol02) {
        return false;
    }
    if (newvms.srccol03 !== vms.srccol03) {
        return false;
    }
    if (newvms.srccol04 !== vms.srccol04) {
        return false;
    }
    if (newvms.srccol05 !== vms.srccol05) {
        return false;
    }
    if (newvms.srccol06 !== vms.srccol06) {
        return false;
    }
    if (newvms.srccol07 !== vms.srccol07) {
        return false;
    }
    if (newvms.srccol08 !== vms.srccol08) {
        return false;
    }
    if (newvms.srccol09 !== vms.srccol09) {
        return false;
    }
    if (newvms.srccol10 !== vms.srccol10) {
        return false;
    }
    if (newvms.srccolexpression !== vms.srccolexpression) {
        return false;
    }
    return true;
}
var VmSettingValidator = /** @class */ (function () {
    function VmSettingValidator() {
    }
    return VmSettingValidator;
}());



/***/ }),

/***/ "./src/app/vmsetting/vmsetting.component.css":
/*!***************************************************!*\
  !*** ./src/app/vmsetting/vmsetting.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/vmsetting/vmsetting.component.html":
/*!****************************************************!*\
  !*** ./src/app/vmsetting/vmsetting.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"position: relative;height: 100%;\">\n  <div style=\"float:left;width: 20%;height:90px\">\n    <h2>值映射设置</h2>\n  </div>\n<div style=\"float:right;width: 58%;height:90px;padding-top: 27px;\">\n    <button kendoButton style=\"float:right;margin: 3px;\" [primary]=\"true\" (click)=\"cancelHandler()\">\n      取消\n    </button>\n    <button kendoButton style=\"float:right;margin: 3px;\" [primary]=\"true\" (click)=\"saveVmSettingHandler()\">\n      保存\n    </button>\n    <button kendoButton style=\"float:right;margin: 3px;\" [primary]=\"true\" (click)=\"removeVmSettingHandler()\">\n      删除行\n    </button>\n    <button kendoButton style=\"float:right;margin: 3px\" [primary]=\"true\" (click)=\"addVmSettingHandler()\">\n      新增行\n    </button>\n    <!-- <button kendoButton [primary]=\"true\" (click)=\"navigateTo('system')\">\n      <i class=\"material-icons align-middle\" style=\"font-size:18px\">undo</i> 关闭\n    </button> -->\n\n  </div>\n</div>\n<div style=\"position: relative;width: 100%;height: 100%;\">\n  <div style=\"float:left;width:22%;height: 100%;\">\n    <kendo-grid [data]=\"vmdata\" [selectable]=\"true\" [kendoGridSelectBy]=\"\" [selectedKeys]=\"mySelection\" (selectedKeysChange)=\"onSelectedKeysChange($event)\">\n      <kendo-grid-column field=\"code\" title=\"编号\">\n      </kendo-grid-column>\n      <kendo-grid-column field=\"name\" title=\"名称\">\n      </kendo-grid-column>\n    </kendo-grid>\n  </div>\n  <div style=\"float:right;width: 60%;height: 100%;\">\n\n    <kendo-grid #vmsGrid [data]=\"vmsettingdata\" [pageable]=\"true\" [pageSize]=\"10\" [selectable]=\"true\" [kendoGridSelectBy]=\"\"\n      [selectedKeys]=\"vmsettingSelection\" (cellClick)=\"cellClickHandler($event)\" (cellClose)=\"cellCloseHandler($event)\">\n      <kendo-grid-column *ngFor=\"let item of colnameList\" field=\"{{item.field}}\" title=\"{{item.title}}\">\n      </kendo-grid-column>\n    </kendo-grid>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/vmsetting/vmsetting.component.ts":
/*!**************************************************!*\
  !*** ./src/app/vmsetting/vmsetting.component.ts ***!
  \**************************************************/
/*! exports provided: VmsettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VmsettingComponent", function() { return VmsettingComponent; });
/* harmony import */ var _vmsetting_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vmsetting-validator */ "./src/app/vmsetting/vmsetting-validator.ts");
/* harmony import */ var _model_vmsetting_editmodel_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/vmsetting-editmodel.model */ "./src/app/vmsetting/model/vmsetting-editmodel.model.ts");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _model_vmsetting_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./model/vmsetting.model */ "./src/app/vmsetting/model/vmsetting.model.ts");
/* harmony import */ var _service_valuemapping_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service/valuemapping.service */ "./src/app/vmsetting/service/valuemapping.service.ts");
/* harmony import */ var _service_vmsetting_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/vmsetting.service */ "./src/app/vmsetting/service/vmsetting.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _progress_kendo_angular_grid_dist_es_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @progress/kendo-angular-grid/dist/es/utils */ "./node_modules/@progress/kendo-angular-grid/dist/es/utils.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var VmsettingComponent = /** @class */ (function () {
    function VmsettingComponent(httpClient, formBuilder, vmservice, vmsettingservice) {
        this.httpClient = httpClient;
        this.formBuilder = formBuilder;
        this.vmservice = vmservice;
        this.vmsettingservice = vmsettingservice;
        this.mySelection = [];
        this.vmsettingSelection = [];
    }
    VmsettingComponent.prototype.ngOnInit = function () {
        console.log('loadvm开始');
        // 界面初始化
        this.getValueMappings();
    };
    // 单元格点击编辑
    VmsettingComponent.prototype.cellClickHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, columnIndex = _a.columnIndex, dataItem = _a.dataItem, isEdited = _a.isEdited;
        if (!isEdited) {
            sender.editCell(rowIndex, columnIndex, this.createFormGroup(dataItem));
        }
    };
    // 单元格编译失去焦点
    VmsettingComponent.prototype.cellCloseHandler = function (args) {
        var formGroup = args.formGroup, dataItem = args.dataItem;
        // console.log('formGroup', formGroup);
        // console.log('dataItem', dataItem);
        console.log(this.vmsettingSelection);
        // 增加行处理
        var index = this.vmsettingservice.vmsettingEditModel.vmSettingAddList
            .findIndex(function (vmc1) { return vmc1.id === dataItem.id; });
        if (index > -1) {
            var addVmSetting = formGroup.value;
            Object.assign(dataItem, addVmSetting);
            addVmSetting.vmid = this.selectedValueMapping.id;
            this.vmsettingservice.vmsettingEditModel.vmSettingAddList.splice(index, 1);
            this.vmsettingservice.vmsettingEditModel.vmSettingAddList.push(addVmSetting);
        }
        else {
            // 编辑行处理
            if (!formGroup.valid) {
                args.preventDefault();
            }
            else if (formGroup.dirty) {
                console.log(dataItem);
                var editVmSetting_1 = formGroup.value;
                Object.assign(dataItem, editVmSetting_1);
                console.log('editVmSetting' + editVmSetting_1);
                var editindex = this.vmsettingservice.vmsettingEditModel.vmSettingEditList
                    .findIndex(function (vmsetting) { return vmsetting.id === editVmSetting_1.id; });
                if (editindex > -1) {
                    this.vmsettingservice.vmsettingEditModel.vmSettingEditList.splice(editindex, 1);
                }
                this.vmsettingservice.vmsettingEditModel.vmSettingEditList.push(editVmSetting_1);
            }
        }
        // 保存值映射设置数据
        var num = this.vmsettingdata.findIndex(function (vmsetting) { return vmsetting.id === dataItem.id; });
        this.vmsGrid.data[num] = dataItem;
        console.log('cellCloseHandler', this.vmsettingSelection);
    };
    // 值映射定义切换事件
    VmsettingComponent.prototype.onSelectedKeysChange = function (e) {
        console.log(this.vmdata);
        console.log('mySelection:' + this.mySelection);
        console.log('e:' + e);
        var vm = this.vmdata[e];
        this.selectedValueMapping = vm;
        console.log(vm);
        this.vmsettingSelection = [];
        this.vmsettingservice.vmsettingEditModel = new _model_vmsetting_editmodel_model__WEBPACK_IMPORTED_MODULE_1__["VmSettingEditModel"];
        this.getVmSettingColName(vm.id);
        this.getVmSettingList(vm.id);
    };
    // 增加行
    VmsettingComponent.prototype.addVmSettingHandler = function () {
        var _this = this;
        this.vmservice.getGuid()
            .subscribe(function (guid) {
            var vmsetting = new _model_vmsetting_model__WEBPACK_IMPORTED_MODULE_6__["DipVmSettingModel"]();
            vmsetting.id = guid;
            vmsetting.vmid = _this.selectedValueMapping.id;
            console.log(vmsetting);
            _this.addVmSetting(vmsetting);
        });
    };
    // 删除行
    VmsettingComponent.prototype.removeVmSettingHandler = function () {
        console.log(this.vmsettingSelection);
        if (this.vmsettingdata != null && this.vmsettingdata.length > 0) {
            var selectVmsIndex = this.vmsettingSelection[0];
            var vms_1 = this.vmsettingdata[selectVmsIndex];
            var addindex = this.vmsettingservice.vmsettingEditModel.vmSettingAddList
                .findIndex(function (vmc1) { return vmc1.id === vms_1.id; });
            if (addindex > -1) {
                this.vmsettingservice.vmsettingEditModel.vmSettingAddList.splice(addindex, 1);
            }
            else {
                this.vmsettingservice.vmsettingEditModel.vmSettingDeleteList.push(vms_1.id);
            }
            var editIndex = this.vmsettingservice.vmsettingEditModel.vmSettingEditList
                .findIndex(function (vmc1) { return vmc1.id === vms_1.id; });
            if (editIndex > -1) {
                this.vmsettingservice.vmsettingEditModel.vmSettingEditList.splice(editIndex, 1);
            }
            this.vmsettingdata.splice(selectVmsIndex, 1);
            if (this.vmsettingdata.length === selectVmsIndex) {
                this.vmsettingSelection = [selectVmsIndex - 1];
            }
        }
        else {
            alert('无删除数据');
        }
    };
    // 保存值映射设置
    VmsettingComponent.prototype.saveVmSettingHandler = function () {
        var _this = this;
        this.vmsGrid.closeCell();
        this.vmsGrid.cancelCell();
        var checkResult = this.checkVmSettingData();
        if (checkResult === false) {
            this.getVmSettingList(this.selectedValueMapping.id);
            return;
        }
        else {
            var isRepeat = Object(_vmsetting_validator__WEBPACK_IMPORTED_MODULE_0__["CheckVmSettingListRepeat"])(this.vmsettingdata);
            console.log('isrepeat', isRepeat);
            if (isRepeat === false) {
                this.getVmSettingList(this.selectedValueMapping.id);
                return;
            }
            console.log('saveVmSettingHandler', this.vmsettingservice.vmsettingEditModel);
            this.vmsettingservice.updateVmSetting(this.vmsettingservice.vmsettingEditModel)
                .subscribe(function () {
                _this.vmsettingservice.vmsettingEditModel = new _model_vmsetting_editmodel_model__WEBPACK_IMPORTED_MODULE_1__["VmSettingEditModel"]();
                // this.getValueMappings();
                alert('保存成功');
            });
        }
    };
    // 取消编辑值映射设置
    VmsettingComponent.prototype.cancelHandler = function () {
        this.vmsGrid.cancelCell();
        this.vmsGrid.closeRow();
        console.log(this.vmsettingdata);
        console.log(this.selectedValueMapping);
        if (Object(util__WEBPACK_IMPORTED_MODULE_9__["isNullOrUndefined"])(this.selectedValueMapping) === false && Object(util__WEBPACK_IMPORTED_MODULE_9__["isNullOrUndefined"])(this.selectedValueMapping.id) === false) {
            this.getVmSettingList(this.selectedValueMapping.id);
        }
    };
    // 单双行颜色
    VmsettingComponent.prototype.rowCallback = function (context) {
        var isEven = context.index % 2 === 0;
        return {
            even: isEven,
            odd: !isEven
        };
    };
    /*
    **方法
    */
    // 获取值映射定义列表信息
    VmsettingComponent.prototype.getValueMappings = function () {
        var _this = this;
        console.log();
        this.vmservice.getDipValueMappingModelList()
            .subscribe(function (context) {
            console.log('valuemappingdata', context);
            _this.vmdata = context;
            if (context.length > 0) {
                console.log(context[0]);
                _this.selectedValueMapping = context[0];
                _this.mySelection = [0];
                _this.getVmSettingColName(context[0].id);
                _this.getVmSettingList(context[0].id);
            }
            else {
                _this.selectedValueMapping = undefined;
                _this.mySelection = [];
                // TODO 隐藏工具栏和grid 不可用
            }
        });
    };
    // 获取值映射设置列名
    VmsettingComponent.prototype.getVmSettingColName = function (vmid) {
        var _this = this;
        this.vmsettingservice.getVmSettingColName(vmid)
            .subscribe(function (context) {
            console.log('dict', context);
            _this.colnameList = context;
        });
    };
    // 获取值映射设置信息
    VmsettingComponent.prototype.getVmSettingList = function (vmid) {
        var _this = this;
        this.vmsettingservice.getVmSettingList(vmid)
            .subscribe(function (context) {
            console.log('vmsettinglist', context);
            _this.vmsettingdata = context;
            _this.vmsettingservice.vmSettingData = context;
            if (context != null && context.length > 0) {
                if (_this.vmsettingSelection.length > 0) {
                    var index = _this.vmsettingSelection[0];
                    _this.vmsettingSelection = [index];
                }
                else {
                    _this.vmsettingSelection = [0];
                }
            }
            console.log(_this.vmsettingservice.vmSettingData);
        });
    };
    // 增加值映射设置数据
    VmsettingComponent.prototype.addVmSetting = function (vmsetting) {
        console.log('addVmcolumn');
        console.log(vmsetting);
        var index = this.vmsettingservice.vmsettingEditModel.vmSettingAddList
            .findIndex(function (vmc1) { return vmc1.id === vmsetting.id; });
        if (index > -1) {
            this.vmsettingservice.vmsettingEditModel.vmSettingAddList.splice(index, 1);
        }
        else {
            this.vmsettingservice.vmsettingEditModel.vmSettingAddList.push(vmsetting);
        }
        console.log(this.vmsettingservice.vmSettingData);
        this.vmsettingdata.push(vmsetting);
        this.vmsettingSelection = [this.vmsettingdata.length - 1];
        console.log('vmsettingdata', this.vmsettingdata);
        console.log('addVmcolumn');
        console.log(this.vmsettingservice.vmSettingData);
    };
    // 值映射设置表单信息
    VmsettingComponent.prototype.createFormGroup = function (dataItem) {
        return this.formBuilder.group({
            'id': dataItem.id,
            'vmid': dataItem.vmid,
            'srccol01': dataItem.srccol01,
            'srccol02': dataItem.srccol02,
            'srccol03': dataItem.srccol03,
            'srccol04': dataItem.srccol04,
            'srccol05': dataItem.srccol05,
            'srccol06': dataItem.srccol06,
            'srccol07': dataItem.srccol07,
            'srccol08': dataItem.srccol08,
            'srccol09': dataItem.srccol09,
            'srccol10': dataItem.srccol10,
            'srccolexpression': dataItem.srccolexpression,
            'tarcol': dataItem.tarcol
        });
    };
    // 值映射设置空值校验
    VmsettingComponent.prototype.checkVmSettingData = function () {
        var checkresult = true;
        for (var index = 0; index < this.vmsettingdata.length; index++) {
            var vmsetting = this.vmsettingdata[index];
            console.log(vmsetting);
            for (var key in this.colnameList) {
                if (this.colnameList.hasOwnProperty(key)) {
                    var dict = this.colnameList[key];
                    switch (dict.field) {
                        case 'srccol01':
                            checkresult = this.checkVmSettingColumn(vmsetting.srccol01, index, dict.title);
                            if (checkresult === false) {
                                return checkresult;
                            }
                            break;
                        case 'srccol02':
                            checkresult = this.checkVmSettingColumn(vmsetting.srccol02, index, dict.title);
                            if (checkresult === false) {
                                return checkresult;
                            }
                            break;
                        case 'srccol03':
                            checkresult = this.checkVmSettingColumn(vmsetting.srccol03, index, dict.title);
                            if (checkresult === false) {
                                return checkresult;
                            }
                            break;
                        case 'srccol04':
                            checkresult = this.checkVmSettingColumn(vmsetting.srccol04, index, dict.title);
                            if (checkresult === false) {
                                return checkresult;
                            }
                            break;
                        case 'srccol05':
                            checkresult = this.checkVmSettingColumn(vmsetting.srccol05, index, dict.title);
                            if (checkresult === false) {
                                return checkresult;
                            }
                            break;
                        case 'srccol06':
                            checkresult = this.checkVmSettingColumn(vmsetting.srccol06, index, dict.title);
                            if (checkresult === false) {
                                return checkresult;
                            }
                            break;
                        case 'srccol07':
                            checkresult = this.checkVmSettingColumn(vmsetting.srccol07, index, dict.title);
                            if (checkresult === false) {
                                return checkresult;
                            }
                            break;
                        case 'srccol08':
                            checkresult = this.checkVmSettingColumn(vmsetting.srccol08, index, dict.title);
                            if (checkresult === false) {
                                return checkresult;
                            }
                            break;
                        case 'srccol09':
                            checkresult = this.checkVmSettingColumn(vmsetting.srccol09, index, dict.title);
                            if (checkresult === false) {
                                return checkresult;
                            }
                            break;
                        case 'srccol10':
                            checkresult = this.checkVmSettingColumn(vmsetting.srccol10, index, dict.title);
                            if (checkresult === false) {
                                return checkresult;
                            }
                            break;
                        case 'srccolexpression':
                            checkresult = this.checkVmSettingColumn(vmsetting.srccolexpression, index, dict.title);
                            if (checkresult === false) {
                                return checkresult;
                            }
                            break;
                        case 'tarcol':
                            checkresult = this.checkVmSettingColumn(vmsetting.tarcol, index, dict.title);
                            if (checkresult === false) {
                                return checkresult;
                            }
                            break;
                        default:
                            break;
                    }
                }
            }
        }
        return checkresult;
    };
    // 值映射列空值校验
    VmsettingComponent.prototype.checkVmSettingColumn = function (colvalue, index, title) {
        if (Object(util__WEBPACK_IMPORTED_MODULE_9__["isNullOrUndefined"])(colvalue) || Object(_progress_kendo_angular_grid_dist_es_utils__WEBPACK_IMPORTED_MODULE_10__["isNullOrEmptyString"])(colvalue)) {
            alert('第' + (index + 1) + '行' + title + '为空!');
            return false;
        }
        else if (colvalue.length >= 50) {
            alert('第' + (index + 1) + '行' + title + '长度超过50!');
            return false;
        }
        else {
            return true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('vmsGrid'),
        __metadata("design:type", _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_2__["GridComponent"])
    ], VmsettingComponent.prototype, "vmsGrid", void 0);
    VmsettingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-vmsetting',
            template: __webpack_require__(/*! ./vmsetting.component.html */ "./src/app/vmsetting/vmsetting.component.html"),
            styles: [__webpack_require__(/*! ./vmsetting.component.css */ "./src/app/vmsetting/vmsetting.component.css")],
            providers: [_service_valuemapping_service__WEBPACK_IMPORTED_MODULE_7__["DipValueMappingModelService"], _service_vmsetting_service__WEBPACK_IMPORTED_MODULE_8__["DipVmSettingModelService"]]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _service_valuemapping_service__WEBPACK_IMPORTED_MODULE_7__["DipValueMappingModelService"],
            _service_vmsetting_service__WEBPACK_IMPORTED_MODULE_8__["DipVmSettingModelService"]])
    ], VmsettingComponent);
    return VmsettingComponent;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);
// .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! H:\VS 2017\AngularCode\ValueMapping\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map