webpackJsonp(["user-manager.module"],{

/***/ "./src/app/modules/common/entity/result-package.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultPackage", function() { return ResultPackage; });
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

var ResultPackage = /** @class */ (function () {
    function ResultPackage() {
        this.removingResults = new Array();
        this.addingResults = new Array();
    }
    ResultPackage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
        /**二元关系实体增量包 */
        ,
        __metadata("design:paramtypes", [])
    ], ResultPackage);
    return ResultPackage;
}());



/***/ }),

/***/ "./src/app/modules/common/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_sys_manager_util__ = __webpack_require__("./src/app/modules/common/util/sys-manager-util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entity_result_package__ = __webpack_require__("./src/app/modules/common/entity/result-package.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SysManagerUtil", function() { return __WEBPACK_IMPORTED_MODULE_0__util_sys_manager_util__["SysManagerUtil"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ResultPackage", function() { return __WEBPACK_IMPORTED_MODULE_1__entity_result_package__["ResultPackage"]; });

// import { GSPPositionEntity } from './entity/gspposition.entity';




/***/ }),

/***/ "./src/app/modules/common/util/sys-manager-util.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SysManagerUtil", function() { return SysManagerUtil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gsp_sys_rtf_common__ = __webpack_require__("./node_modules/@gsp-sys/rtf-common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gsp_sys_rtf_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__gsp_sys_rtf_common__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * 系统管理相关session、webapi等公用方法
 */
var SysManagerUtil = /** @class */ (function () {
    function SysManagerUtil(sessionCache) {
        this.sessionCache = sessionCache;
        this.isView = false;
        var apiPath = '/api/runtime/sys/v1.0';
        this.userWebApi = apiPath + '/users';
        this.userPositionWebApi = apiPath + '/user-position';
        this.sysOrgWebApi = apiPath + '/sysOrgs';
        this.positionWebApi = apiPath + '/positions';
        this.roleWebApi = apiPath + '/roles';
        this.positionRoleWebApi = apiPath + '/position-role';
        this.operationWebApi = apiPath + '/funcOperations';
    }
    /**
     * 获取用户维护当前模块的路由地址
     */
    SysManagerUtil.prototype.getUserManageRouter = function () {
        // user-manager是在数据库里配置的
        var frameWorkUrl = '/main/user-manager/' + this.funcId + '/users';
        return frameWorkUrl;
    };
    /**
     * 获取岗位维护当前模块的路由地址
     */
    SysManagerUtil.prototype.getPositionManagerRouter = function () {
        // user-manager是在数据库里配置的
        var frameWorkUrl = '/main/position-manager/' + this.funcId + '/positions';
        return frameWorkUrl;
    };
    SysManagerUtil.prototype.getRoleManagerRouter = function () {
        var frameWorkUrl = '/main/role-manager/' + this.funcId + '/';
        return frameWorkUrl;
    };
    /**
     * 构造Header
     */
    SysManagerUtil.prototype.getHeader = function () {
        this.sessionId = this.getSessionId();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpHeaders"]().set('SessionId', this.sessionId);
        // 此处key必须是headers
        return { headers: headers };
    };
    /**
     * 获取当前用户的sessionId
     */
    SysManagerUtil.prototype.getSessionId = function () {
        return this.sessionCache.get('session');
    };
    /**Guid生成 */
    SysManagerUtil.prototype.getGuid36 = function () {
        function S4() {
            // tslint:disable-next-line:no-bitwise
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        }
        return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4());
    };
    SysManagerUtil = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__gsp_sys_rtf_common__["CacheService"]])
    ], SysManagerUtil);
    return SysManagerUtil;
}());



/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-detail/app/gspuser-detail-app.index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERDETAIL_APP_PROVIDERS", function() { return USERDETAIL_APP_PROVIDERS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gspuser_detail_bindingdata__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/app/gspuser-detail.bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gspuser_detail_form__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/app/gspuser-detail.form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gspuser_detail_statemachine__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/app/gspuser-detail.statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gspuser_detail_viewmodel__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/app/gspuser-detail.viewmodel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gspuser_detail_uistate__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/app/gspuser-detail.uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__handlers_user_detail_hander_index__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/app/handlers/user-detail.hander.index.ts");
/* unused harmony reexport GSPUserDetailBindingData */
/* unused harmony reexport GSPUserDetailForm */
/* unused harmony reexport GSPUserDetailStateMachine */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GSPUserDetailViewModel", function() { return __WEBPACK_IMPORTED_MODULE_3__gspuser_detail_viewmodel__["GSPUserDetailViewModel"]; });
/* unused harmony reexport GSPUserDetailUIState */
/* unused harmony reexport userDetailCommandHandlers */






var USERDETAIL_APP_PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_0__gspuser_detail_bindingdata__["GSPUserDetailBindingData"],
    __WEBPACK_IMPORTED_MODULE_1__gspuser_detail_form__["GSPUserDetailForm"],
    __WEBPACK_IMPORTED_MODULE_2__gspuser_detail_statemachine__["GSPUserDetailStateMachine"],
    __WEBPACK_IMPORTED_MODULE_3__gspuser_detail_viewmodel__["GSPUserDetailViewModel"],
    __WEBPACK_IMPORTED_MODULE_4__gspuser_detail_uistate__["GSPUserDetailUIState"]
];
// 导出



/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-detail/app/gspuser-detail.bindingdata.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPUserDetailBindingData", function() { return GSPUserDetailBindingData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_gspuser_detail_domain_index__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/domain/gspuser-detail-domain.index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * 用户详情绑定数据
 */
var GSPUserDetailBindingData = /** @class */ (function (_super) {
    __extends(GSPUserDetailBindingData, _super);
    function GSPUserDetailBindingData(injector) {
        return _super.call(this, injector) || this;
    }
    GSPUserDetailBindingData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgBindingData"])({
            entity: __WEBPACK_IMPORTED_MODULE_2__domain_gspuser_detail_domain_index__["GSPUserDetailEntity"],
            repository: __WEBPACK_IMPORTED_MODULE_2__domain_gspuser_detail_domain_index__["GSPUserDetailRepository"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], GSPUserDetailBindingData);
    return GSPUserDetailBindingData;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["BindingData"]));



/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-detail/app/gspuser-detail.form.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPUserDetailForm", function() { return GSPUserDetailForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gspuser_detail_bindingdata__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/app/gspuser-detail.bindingdata.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * 用户详情页面
 */
var GSPUserDetailForm = /** @class */ (function (_super) {
    __extends(GSPUserDetailForm, _super);
    function GSPUserDetailForm(injector) {
        return _super.call(this, injector) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'UserCode',
            binding: 'code'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], GSPUserDetailForm.prototype, "UserCode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'UserName',
            binding: 'name'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], GSPUserDetailForm.prototype, "UserName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'UserOrgName',
            binding: 'sysOrgName'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], GSPUserDetailForm.prototype, "UserOrgName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'UserGroupName',
            binding: 'userGroup'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], GSPUserDetailForm.prototype, "UserGroupName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'UserType',
            binding: 'typeName'
        }),
        __metadata("design:type", Number)
    ], GSPUserDetailForm.prototype, "UserType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'UserNote',
            binding: 'note'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], GSPUserDetailForm.prototype, "UserNote", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'UserPassWord',
            binding: 'passWord'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], GSPUserDetailForm.prototype, "UserPassWord", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'UserEmail',
            binding: 'userExtend.email'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], GSPUserDetailForm.prototype, "UserEmail", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'UserPhone',
            binding: 'userExtend.phone'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], GSPUserDetailForm.prototype, "UserPhone", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'UserMobilePhone',
            binding: 'userExtend.mobilePhone'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], GSPUserDetailForm.prototype, "UserMobilePhone", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'UserWeChat',
            binding: 'userExtend.weChat'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], GSPUserDetailForm.prototype, "UserWeChat", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'UserQQ',
            binding: 'userExtend.qq'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], GSPUserDetailForm.prototype, "UserQQ", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'UserAddress',
            binding: 'userExtend.address'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], GSPUserDetailForm.prototype, "UserAddress", void 0);
    GSPUserDetailForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgForm"])({
            bindingData: __WEBPACK_IMPORTED_MODULE_3__gspuser_detail_bindingdata__["GSPUserDetailBindingData"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], GSPUserDetailForm);
    return GSPUserDetailForm;
}(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["Form"]));



/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-detail/app/gspuser-detail.statemachine.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPUserDetailStateMachine", function() { return GSPUserDetailStateMachine; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GSPUserDetailStateMachine = /** @class */ (function (_super) {
    __extends(GSPUserDetailStateMachine, _super);
    function GSPUserDetailStateMachine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgState"])({ initialState: true }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__farris_devkit__["State"])
    ], GSPUserDetailStateMachine.prototype, "viewState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgState"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__farris_devkit__["State"])
    ], GSPUserDetailStateMachine.prototype, "addState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgState"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__farris_devkit__["State"])
    ], GSPUserDetailStateMachine.prototype, "editState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'viewState'; }
        }),
        __metadata("design:type", Boolean)
    ], GSPUserDetailStateMachine.prototype, "canAdd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'viewState'; }
        }),
        __metadata("design:type", Boolean)
    ], GSPUserDetailStateMachine.prototype, "canEdit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'addState' || context.state === 'editState'; }
        }),
        __metadata("design:type", Boolean)
    ], GSPUserDetailStateMachine.prototype, "canCancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'addState' || context.state === 'editState'; }
        }),
        __metadata("design:type", Boolean)
    ], GSPUserDetailStateMachine.prototype, "canSave", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'addState' || context.state === 'editState'; }
        }),
        __metadata("design:type", Boolean)
    ], GSPUserDetailStateMachine.prototype, "canInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'editState'; }
        }),
        __metadata("design:type", Boolean)
    ], GSPUserDetailStateMachine.prototype, "canStrictEdit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgAction"])({ transitTo: 'addState' }),
        __metadata("design:type", Function)
    ], GSPUserDetailStateMachine.prototype, "add", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgAction"])({ transitTo: 'editState' }),
        __metadata("design:type", Function)
    ], GSPUserDetailStateMachine.prototype, "edit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgAction"])({ transitTo: 'viewState' }),
        __metadata("design:type", Function)
    ], GSPUserDetailStateMachine.prototype, "view", void 0);
    GSPUserDetailStateMachine = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgStatemachine"])()
    ], GSPUserDetailStateMachine);
    return GSPUserDetailStateMachine;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["StateMachine"]));



/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-detail/app/gspuser-detail.uistate.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPUserDetailUIState", function() { return GSPUserDetailUIState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * 用户详情界面缓存状态
 */
var GSPUserDetailUIState = /** @class */ (function () {
    function GSPUserDetailUIState() {
        /**需要保存用户和岗位 */
        this.needSaveUserPos = false;
        /**系统组织帮助 */
        this.showSysOrgHelpFlag = false;
    }
    GSPUserDetailUIState = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], GSPUserDetailUIState);
    return GSPUserDetailUIState;
}());



/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-detail/app/gspuser-detail.viewmodel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPUserDetailViewModel", function() { return GSPUserDetailViewModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gspuser_detail_bindingdata__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/app/gspuser-detail.bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gspuser_detail_form__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/app/gspuser-detail.form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gspuser_detail_statemachine__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/app/gspuser-detail.statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gspuser_detail_uistate__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/app/gspuser-detail.uistate.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * 用户详情视图模型
 */
var GSPUserDetailViewModel = /** @class */ (function (_super) {
    __extends(GSPUserDetailViewModel, _super);
    /**
     * 构造函数
     */
    function GSPUserDetailViewModel(injector) {
        var _this = _super.call(this, injector) || this;
        _this.uiState = _this.injector.get(__WEBPACK_IMPORTED_MODULE_5__gspuser_detail_uistate__["GSPUserDetailUIState"]);
        return _this;
    }
    /**
     * 详情页面加载
     */
    GSPUserDetailViewModel.prototype.formLoad = function () { };
    /**
     * 新增
     */
    GSPUserDetailViewModel.prototype.add = function () { };
    /**
     * 编辑
     */
    GSPUserDetailViewModel.prototype.edit = function () { };
    /**
     * 保存
     */
    GSPUserDetailViewModel.prototype.save = function () { };
    /**
     * 取消
     */
    GSPUserDetailViewModel.prototype.cancel = function () { };
    /**
     * 关闭
     */
    GSPUserDetailViewModel.prototype.close = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'userDetailFormLoad'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GSPUserDetailViewModel.prototype, "formLoad", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'userDetailAdd'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GSPUserDetailViewModel.prototype, "add", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'userDetailEdit'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GSPUserDetailViewModel.prototype, "edit", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'userDetailSave'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GSPUserDetailViewModel.prototype, "save", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'userDetailCancel'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GSPUserDetailViewModel.prototype, "cancel", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'userDetailClose'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GSPUserDetailViewModel.prototype, "close", null);
    GSPUserDetailViewModel = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgViewModel"])({
            children: [],
            binding: __WEBPACK_IMPORTED_MODULE_2__gspuser_detail_bindingdata__["GSPUserDetailBindingData"],
            form: __WEBPACK_IMPORTED_MODULE_3__gspuser_detail_form__["GSPUserDetailForm"],
            stateMachine: __WEBPACK_IMPORTED_MODULE_4__gspuser_detail_statemachine__["GSPUserDetailStateMachine"],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], GSPUserDetailViewModel);
    return GSPUserDetailViewModel;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["ViewModel"]));



/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-detail/app/handlers/user-detail-add.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailAddHandler", function() { return UserDetailAddHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gspuser_detail_statemachine__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/app/gspuser-detail.statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__userpassword_domain_userpassword_dataservice__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/userpassword/domain/userpassword.dataservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_util_sys_manager_util__ = __webpack_require__("./src/app/modules/common/util/sys-manager-util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gspuser_detail_uistate__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/app/gspuser-detail.uistate.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * 用户添加
 */
var UserDetailAddHandler = /** @class */ (function (_super) {
    __extends(UserDetailAddHandler, _super);
    function UserDetailAddHandler(router, stateMachine, userManagerSession, pwdService, userDetailUIState) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.stateMachine = stateMachine;
        _this.userManagerSession = userManagerSession;
        _this.pwdService = pwdService;
        _this.userDetailUIState = userDetailUIState;
        return _this;
    }
    UserDetailAddHandler.prototype.schedule = function () {
        var _this = this;
        this.addTask('add', function () {
            var addDetailUrl = _this.userManagerSession.getUserManageRouter() + '/new';
            _this.router.navigate([addDetailUrl, { action: 'add' }]);
            _this.userDetailUIState.dataId = 'new';
        });
        // 切换状态
        this.addTask('transitState', function () {
            _this.stateMachine['add']();
            _this.pwdService.clearPwd();
            _this.userManagerSession.isView = false;
        });
    };
    UserDetailAddHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgCommandHandler"])({
            commandName: 'userDetailAdd'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_3__gspuser_detail_statemachine__["GSPUserDetailStateMachine"],
            __WEBPACK_IMPORTED_MODULE_5__common_util_sys_manager_util__["SysManagerUtil"],
            __WEBPACK_IMPORTED_MODULE_4__userpassword_domain_userpassword_dataservice__["UserPasswordDataService"],
            __WEBPACK_IMPORTED_MODULE_6__gspuser_detail_uistate__["GSPUserDetailUIState"]])
    ], UserDetailAddHandler);
    return UserDetailAddHandler;
}(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-detail/app/handlers/user-detail-cancel.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailCancelHandler", function() { return UserDetailCancelHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gspuser_detail_statemachine__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/app/gspuser-detail.statemachine.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * 界面取消
 */
var UserDetailCancelHandler = /** @class */ (function (_super) {
    __extends(UserDetailCancelHandler, _super);
    function UserDetailCancelHandler(stateMachine) {
        var _this = _super.call(this) || this;
        _this.stateMachine = stateMachine;
        return _this;
    }
    UserDetailCancelHandler.prototype.schedule = function () {
        var _this = this;
        this.addTask('cancel', function () {
            // TODO:撤销变更操作
            console.log('取消');
        });
        // 状态迁移
        this.addTask('transitState', function () {
            _this.stateMachine['view']();
        });
    };
    UserDetailCancelHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'userDetailCancel'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__gspuser_detail_statemachine__["GSPUserDetailStateMachine"]])
    ], UserDetailCancelHandler);
    return UserDetailCancelHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-detail/app/handlers/user-detail-close.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailCloseHandler", function() { return UserDetailCloseHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__userpassword_domain_userpassword_dataservice__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/userpassword/domain/userpassword.dataservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_util_sys_manager_util__ = __webpack_require__("./src/app/modules/common/util/sys-manager-util.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserDetailCloseHandler = /** @class */ (function (_super) {
    __extends(UserDetailCloseHandler, _super);
    function UserDetailCloseHandler(router, userManager, pwdService) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.userManager = userManager;
        _this.pwdService = pwdService;
        return _this;
    }
    /**
     * 关闭回列表页
     */
    UserDetailCloseHandler.prototype.schedule = function () {
        var _this = this;
        this.addTask('close', function () {
            var userListPath = _this.userManager.getUserManageRouter();
            _this.router.navigateByUrl(userListPath);
            _this.pwdService.clearPwd();
        });
    };
    UserDetailCloseHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgCommandHandler"])({
            commandName: 'userDetailClose'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_4__common_util_sys_manager_util__["SysManagerUtil"],
            __WEBPACK_IMPORTED_MODULE_3__userpassword_domain_userpassword_dataservice__["UserPasswordDataService"]])
    ], UserDetailCloseHandler);
    return UserDetailCloseHandler;
}(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-detail/app/handlers/user-detail-edit.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailEditHandler", function() { return UserDetailEditHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gspuser_detail_statemachine__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/app/gspuser-detail.statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_util_sys_manager_util__ = __webpack_require__("./src/app/modules/common/util/sys-manager-util.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * 用户详情编辑
 */
var UserDetailEditHandler = /** @class */ (function (_super) {
    __extends(UserDetailEditHandler, _super);
    function UserDetailEditHandler(stateMachine, userSession) {
        var _this = _super.call(this) || this;
        _this.stateMachine = stateMachine;
        _this.userSession = userSession;
        return _this;
    }
    UserDetailEditHandler.prototype.schedule = function () {
        var _this = this;
        this.addTask('transitState', function () {
            _this.stateMachine['edit']();
            _this.userSession.isView = false;
        });
    };
    UserDetailEditHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'userDetailEdit'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__gspuser_detail_statemachine__["GSPUserDetailStateMachine"],
            __WEBPACK_IMPORTED_MODULE_3__common_util_sys_manager_util__["SysManagerUtil"]])
    ], UserDetailEditHandler);
    return UserDetailEditHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-detail/app/handlers/user-detail-form-load.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailFormLoadHandler", function() { return UserDetailFormLoadHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__domain_gspuser_detail_datastorage__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/domain/gspuser-detail.datastorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__domain_gspuser_detail_domain_index__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/domain/gspuser-detail-domain.index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gspuser_detail_statemachine__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/app/gspuser-detail.statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gspuser_detail_uistate__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/app/gspuser-detail.uistate.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * 用户详情页面加载
 */
var UserDetailFormLoadHandler = /** @class */ (function (_super) {
    __extends(UserDetailFormLoadHandler, _super);
    function UserDetailFormLoadHandler(userDetailService, userDetailStore, uiState, stateMachine) {
        var _this = _super.call(this) || this;
        _this.userDetailService = userDetailService;
        _this.userDetailStore = userDetailStore;
        _this.uiState = uiState;
        _this.stateMachine = stateMachine;
        return _this;
    }
    /**新增或者编辑 */
    UserDetailFormLoadHandler.prototype.schedule = function () {
        var _this = this;
        this.addTask('loadData', function () {
            // 新增或者
            var dataId = _this.uiState.dataId;
            // 新增
            if (dataId === 'new') {
                _this.userDetailService.getNewEmptyUser()
                    .subscribe(function (result) {
                    _this.userDetailStore.load(result);
                    _this.uiState.dataId = result[0]['id'];
                });
            }
            else {
                _this.userDetailService.getUserById(dataId)
                    .subscribe(function (result) {
                    // load方法里为数组,如果单个实体不返回数组那么手工拼成数组
                    if (result[0]['id'] === undefined || result[0]['id'] === null || result[0]['id'] === '') {
                        alert("\u7CFB\u7EDF\u4E2D\u4E0D\u5B58\u5728id=" + dataId + "\u7684\u7528\u6237");
                        return;
                    }
                    _this.userDetailStore.load(result);
                    console.log(result);
                });
            }
        });
        // 状态迁移
        this.addTask('transitState', function () {
            var action = _this.uiState.action;
            _this.stateMachine[action]();
        });
    };
    UserDetailFormLoadHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgCommandHandler"])({
            commandName: 'userDetailFormLoad'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__domain_gspuser_detail_domain_index__["GSPUserDetailDataService"],
            __WEBPACK_IMPORTED_MODULE_0__domain_gspuser_detail_datastorage__["GSPUserDetailDataStorage"],
            __WEBPACK_IMPORTED_MODULE_5__gspuser_detail_uistate__["GSPUserDetailUIState"],
            __WEBPACK_IMPORTED_MODULE_4__gspuser_detail_statemachine__["GSPUserDetailStateMachine"]])
    ], UserDetailFormLoadHandler);
    return UserDetailFormLoadHandler;
}(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-detail/app/handlers/user-detail-save.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailSaveHandler", function() { return UserDetailSaveHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__domain_gspuser_detail_datastorage__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/domain/gspuser-detail.datastorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__domain_gspuser_detail_domain_index__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/domain/gspuser-detail-domain.index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gspuser_detail_statemachine__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/app/gspuser-detail.statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__userpassword_domain_userpassword_dataservice__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/userpassword/domain/userpassword.dataservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gspuser_detail_uistate__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/app/gspuser-detail.uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_position_domain__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/user-position/domain/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * 用户详情页面保存
 */
var UserDetailSaveHandler = /** @class */ (function (_super) {
    __extends(UserDetailSaveHandler, _super);
    function UserDetailSaveHandler(userDetailService, userDetailRep, userDetailStore, stateMachine, pwdService, userDetailUIState, userPosService) {
        var _this = _super.call(this) || this;
        _this.userDetailService = userDetailService;
        _this.userDetailRep = userDetailRep;
        _this.userDetailStore = userDetailStore;
        _this.stateMachine = stateMachine;
        _this.pwdService = pwdService;
        _this.userDetailUIState = userDetailUIState;
        _this.userPosService = userPosService;
        return _this;
    }
    UserDetailSaveHandler.prototype.schedule = function () {
        var _this = this;
        this.addTask('save', function () {
            var entities = _this.userDetailRep.getAllEntities();
            var newUser = entities[0];
            // newUser.sysOrgId = '001';
            newUser.userGroup = 'admin';
            console.log(newUser.data);
            if (_this.stateMachine.context.state === 'addState') {
                _this.saveAddUser(newUser);
            }
            else {
                _this.saveEditUser(newUser);
            }
        });
    };
    UserDetailSaveHandler.prototype.saveAddUser = function (user) {
        var _this = this;
        var pwdErrorMsg = this.pwdService.checkPwdForAdd();
        if (pwdErrorMsg !== '') {
            alert(pwdErrorMsg);
            return;
        }
        this.userDetailService.post(user.data)
            .subscribe(function (userId) {
            // 新增成功后会返回一个用户的内码，务必修改当前状态的用户内码，因为新增成功之前是new
            _this.userDetailUIState.dataId = userId;
            // 重新获取用户刷新界面
            _this.userDetailService.getUserById(userId)
                .subscribe(function (result) {
                return _this.userDetailStore.load(result);
            });
            // 新增密码
            _this.pwdService.add(userId);
            // 是否需要保存用户和岗位关系
            if (_this.userDetailUIState.needSaveUserPos) {
                _this.userPosService.modifyPosByUser().subscribe(function () { });
            }
            // 新增之后应该进入查看状态
            _this.stateMachine['edit']();
            alert('用户保存成功!');
        }, function (error) {
            console.log(error);
            alert(error.error.Message);
        });
    };
    UserDetailSaveHandler.prototype.saveEditUser = function (user) {
        var _this = this;
        var pwdErrorMsg = this.pwdService.checkPwdForEdit();
        if (pwdErrorMsg !== '' && pwdErrorMsg !== 'unchanged') {
            alert(pwdErrorMsg);
            return;
        }
        this.userDetailService.put(user.data)
            .subscribe(function () {
            // 未修改密码
            if (pwdErrorMsg === 'unchanged') {
            }
            else {
                // 修改用户密码
                _this.pwdService.edit(user.id);
            }
            // 是否需要保存用户和岗位关系
            if (_this.userDetailUIState.needSaveUserPos) {
                _this.userPosService.modifyPosByUser().subscribe(function () { });
            }
            _this.stateMachine['edit']();
            alert('用户保存成功!');
        }, function (error) {
            console.log(error);
            alert(error.error.Message);
        });
    };
    UserDetailSaveHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgCommandHandler"])({
            commandName: 'userDetailSave',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__domain_gspuser_detail_domain_index__["GSPUserDetailDataService"],
            __WEBPACK_IMPORTED_MODULE_3__domain_gspuser_detail_domain_index__["GSPUserDetailRepository"],
            __WEBPACK_IMPORTED_MODULE_0__domain_gspuser_detail_datastorage__["GSPUserDetailDataStorage"],
            __WEBPACK_IMPORTED_MODULE_4__gspuser_detail_statemachine__["GSPUserDetailStateMachine"],
            __WEBPACK_IMPORTED_MODULE_5__userpassword_domain_userpassword_dataservice__["UserPasswordDataService"],
            __WEBPACK_IMPORTED_MODULE_6__gspuser_detail_uistate__["GSPUserDetailUIState"],
            __WEBPACK_IMPORTED_MODULE_7__user_position_domain__["GSPUserPositionService"]])
    ], UserDetailSaveHandler);
    return UserDetailSaveHandler;
}(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-detail/app/handlers/user-detail.hander.index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export userDetailCommandHandlers */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_detail_form_load_handler__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/app/handlers/user-detail-form-load.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_detail_save_handler__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/app/handlers/user-detail-save.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_detail_cancel_handler__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/app/handlers/user-detail-cancel.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_detail_close_handler__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/app/handlers/user-detail-close.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_detail_add_handler__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/app/handlers/user-detail-add.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_detail_edit_handler__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/app/handlers/user-detail-edit.handler.ts");






// 用户详情页面命令
var userDetailCommandHandlers = [
    __WEBPACK_IMPORTED_MODULE_0__user_detail_form_load_handler__["UserDetailFormLoadHandler"],
    __WEBPACK_IMPORTED_MODULE_1__user_detail_save_handler__["UserDetailSaveHandler"],
    __WEBPACK_IMPORTED_MODULE_3__user_detail_close_handler__["UserDetailCloseHandler"],
    __WEBPACK_IMPORTED_MODULE_5__user_detail_edit_handler__["UserDetailEditHandler"],
    __WEBPACK_IMPORTED_MODULE_4__user_detail_add_handler__["UserDetailAddHandler"],
    __WEBPACK_IMPORTED_MODULE_2__user_detail_cancel_handler__["UserDetailCancelHandler"],
];


/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-detail/domain/entities/gspuser-detail.entity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPUserDetailEntity", function() { return GSPUserDetailEntity; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gspuser_extend_entity__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/domain/entities/gspuser-extend.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * 用户详情实体
 */
var GSPUserDetailEntity = /** @class */ (function (_super) {
    __extends(GSPUserDetailEntity, _super);
    function GSPUserDetailEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgField"])({
            primary: true,
            dataField: 'id'
        }),
        __metadata("design:type", String)
    ], GSPUserDetailEntity.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], GSPUserDetailEntity.prototype, "code", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], GSPUserDetailEntity.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], GSPUserDetailEntity.prototype, "sysOrgId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], GSPUserDetailEntity.prototype, "sysOrgName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], GSPUserDetailEntity.prototype, "userGroup", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], GSPUserDetailEntity.prototype, "groupName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], GSPUserDetailEntity.prototype, "typeName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], GSPUserDetailEntity.prototype, "note", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], GSPUserDetailEntity.prototype, "passWord", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgObject"])(__WEBPACK_IMPORTED_MODULE_0__gspuser_extend_entity__["GSPUserExtendEntity"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__gspuser_extend_entity__["GSPUserExtendEntity"])
    ], GSPUserDetailEntity.prototype, "userExtend", void 0);
    return GSPUserDetailEntity;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["Entity"]));



/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-detail/domain/entities/gspuser-extend.entity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPUserExtendEntity", function() { return GSPUserExtendEntity; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * 用户扩展实体
 */
var GSPUserExtendEntity = /** @class */ (function (_super) {
    __extends(GSPUserExtendEntity, _super);
    function GSPUserExtendEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(true),
        __metadata("design:type", String)
    ], GSPUserExtendEntity.prototype, "userId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], GSPUserExtendEntity.prototype, "email", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], GSPUserExtendEntity.prototype, "mobilePhone", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], GSPUserExtendEntity.prototype, "phone", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], GSPUserExtendEntity.prototype, "qq", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], GSPUserExtendEntity.prototype, "weChat", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], GSPUserExtendEntity.prototype, "address", void 0);
    return GSPUserExtendEntity;
}(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["Entity"]));



/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-detail/domain/gspuser-detail-domain.index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERDETAIL_DOMAIN_PROVIDERS", function() { return USERDETAIL_DOMAIN_PROVIDERS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entities_gspuser_detail_entity__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/domain/entities/gspuser-detail.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gspuser_detail_datastorage__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/domain/gspuser-detail.datastorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gspuser_detail_repository__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/domain/gspuser-detail.repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gspuser_detail_dataservice__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/domain/gspuser-detail.dataservice.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GSPUserDetailEntity", function() { return __WEBPACK_IMPORTED_MODULE_0__entities_gspuser_detail_entity__["GSPUserDetailEntity"]; });
/* unused harmony reexport GSPUserDetailDataStorage */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GSPUserDetailRepository", function() { return __WEBPACK_IMPORTED_MODULE_2__gspuser_detail_repository__["GSPUserDetailRepository"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GSPUserDetailDataService", function() { return __WEBPACK_IMPORTED_MODULE_3__gspuser_detail_dataservice__["GSPUserDetailDataService"]; });




// 详情页面服务提供
var USERDETAIL_DOMAIN_PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_1__gspuser_detail_datastorage__["GSPUserDetailDataStorage"],
    __WEBPACK_IMPORTED_MODULE_2__gspuser_detail_repository__["GSPUserDetailRepository"],
    __WEBPACK_IMPORTED_MODULE_3__gspuser_detail_dataservice__["GSPUserDetailDataService"],
];
/**
 * 导出的类和仓库，服务，存储
 */



/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-detail/domain/gspuser-detail.dataservice.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPUserDetailDataService", function() { return GSPUserDetailDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_util_sys_manager_util__ = __webpack_require__("./src/app/modules/common/util/sys-manager-util.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * 用户详情信息restful服务
 */
var GSPUserDetailDataService = /** @class */ (function () {
    function GSPUserDetailDataService(rest, userManagerSession) {
        this.rest = rest;
        this.userManagerSession = userManagerSession;
    }
    /**
     * 根据用户内码返回用户详情数据
     * @param dataId 需要加载的单个数据
     */
    GSPUserDetailDataService.prototype.getUserById = function (dataId) {
        var headers = this.userManagerSession.getHeader();
        return this.rest.get(this.userManagerSession.userWebApi + "/" + dataId, null, headers);
    };
    /**绑定界面获取一个新的数据 */
    GSPUserDetailDataService.prototype.getNewEmptyUser = function () {
        // 后端识别的返回一个空用户
        return this.getUserById('new');
    };
    /**
     * 新增，保存
     */
    GSPUserDetailDataService.prototype.post = function (data) {
        var postUrl = this.userManagerSession.userWebApi;
        return this.rest.post(postUrl, data, null, this.userManagerSession.getHeader());
    };
    /**
     * 编辑，保存
     */
    GSPUserDetailDataService.prototype.put = function (data) {
        var putUrl = this.userManagerSession.userWebApi;
        return this.rest.put(putUrl, data, null, this.userManagerSession.getHeader());
    };
    GSPUserDetailDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["RestfulService"],
            __WEBPACK_IMPORTED_MODULE_2__common_util_sys_manager_util__["SysManagerUtil"]])
    ], GSPUserDetailDataService);
    return GSPUserDetailDataService;
}());



/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-detail/domain/gspuser-detail.datastorage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPUserDetailDataStorage", function() { return GSPUserDetailDataStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * 用户详情存储
 */
var GSPUserDetailDataStorage = /** @class */ (function (_super) {
    __extends(GSPUserDetailDataStorage, _super);
    function GSPUserDetailDataStorage() {
        return _super.call(this) || this;
    }
    GSPUserDetailDataStorage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], GSPUserDetailDataStorage);
    return GSPUserDetailDataStorage;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["MemoryStorage"]));



/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-detail/domain/gspuser-detail.repository.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPUserDetailRepository", function() { return GSPUserDetailRepository; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_gspuser_detail_entity__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/domain/entities/gspuser-detail.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gspuser_detail_datastorage__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/domain/gspuser-detail.datastorage.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * 用户详情页数据仓储层
 */
var GSPUserDetailRepository = /** @class */ (function (_super) {
    __extends(GSPUserDetailRepository, _super);
    function GSPUserDetailRepository(injector) {
        return _super.call(this, injector) || this;
    }
    GSPUserDetailRepository = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRepository"])({
            from: __WEBPACK_IMPORTED_MODULE_3__gspuser_detail_datastorage__["GSPUserDetailDataStorage"],
            entityType: __WEBPACK_IMPORTED_MODULE_2__entities_gspuser_detail_entity__["GSPUserDetailEntity"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], GSPUserDetailRepository);
    return GSPUserDetailRepository;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["Repository"]));



/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-detail/gspuser-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex g-main\">\r\n  <div class=\"col\">\r\n    <div class=\"d-flex flex-row  g-main px-1\" style=\"overflow:hidden;\">\r\n      <div class=\"col\">\r\n        <div class=\"d-flex flex-column g-main\">\r\n          <!--工具栏了 BEGIN-->\r\n          <div class=\"pt-2 mb-2\">\r\n            <div class=\"row pt-2 mb-2\">\r\n              <div class=\"col-sm-12 col-md-3\">\r\n                <h1 class=\"h4 d-inline-block\">用户详情</h1>\r\n              </div>\r\n              <div class=\"col-sm-12 col-md-9\">\r\n                <div class=\"pr-2 text-right\">\r\n                  <button type=\"button\" (click)=\"viewModel.add()\" [disabled]=\"!viewModel.stateMachine.canAdd\" class=\"btn btn-sm btn-default\">新增\r\n                  </button>\r\n                  <button type=\"button\" (click)=\"viewModel.edit()\" [disabled]=\"!viewModel.stateMachine.canEdit\" class=\"btn btn-sm btn-default\">编辑\r\n                  </button>\r\n                  <!--\r\n                  <button type=\"button\" (click)=\"viewModel.cancel()\" [disabled]=\"!viewModel.stateMachine.canCancel\" class=\"btn btn-sm btn-default\">取消 </button>\r\n                  -->\r\n                  <button type=\"button\" (click)=\"saveUser()\" [disabled]=\"!viewModel.stateMachine.canSave\" class=\"btn btn-sm btn-default\">保存\r\n                  </button>\r\n                  <button type=\"button\" (click)=\"viewModel.close()\" class=\"btn btn-sm btn-default mr-1\">关闭</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!--工具栏 END-->\r\n          <div class=\"flex-auto\" style=\"overflow-y:auto;\">\r\n            <!--表头 BEGIN-->\r\n            <form class=\"k-form p-1\" [formGroup]=\"viewModel.form\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-12 col-md-6 pb-1\">\r\n                  <label class=\"k-form-field\">\r\n                    <span>用户编号*</span>\r\n                    <div class=\"d-flex\">\r\n                      <input type=\"text\" formControlName=\"UserCode\" [readOnly]=\"!viewModel.stateMachine.canInput\" class=\"k-textbox w-100\" />\r\n                    </div>\r\n                  </label>\r\n                  <label class=\"k-form-field\">\r\n                    <span>用户名称*</span>\r\n                    <input formControlName=\"UserName\" [readOnly]=\"!viewModel.stateMachine.canInput\" class=\"k-textbox w-100\" />\r\n                  </label>\r\n                  <label class=\"k-form-field\">\r\n                    <span>系统组织*</span>\r\n                    <div class=\"d-flex\">\r\n                      <input formControlName=\"UserOrgName\" [readOnly]=\"true\" class=\"k-textbox w-100\" />\r\n                      <button [disabled]=\"!viewModel.stateMachine.canInput\" class=\"k-button k-bare\" type=\"button\"\r\n                        (click)=\"showSysOrgHelp()\">\r\n                        <i class=\"material-icons align-middle\" style=\" font-size: 18px;\">filter_none</i>\r\n                      </button>\r\n                      <app-sys-org-help [isShow]=\"viewModel.uiState.showSysOrgHelpFlag\" [title]=\"'系统组织帮助'\"\r\n                        (selectedAfterOk)=\"afterSelectedSysOrg($event)\">\r\n                      </app-sys-org-help>\r\n                    </div>\r\n                  </label>\r\n                  <label class=\"k-form-field\">\r\n                      <span>描述</span>\r\n                      <textarea [readOnly]=\"!viewModel.stateMachine.canInput\"\r\n                      formControlName=\"UserNote\"\r\n                      kendoTextArea rows=\"2\" class=\"k-textarea w-100\"></textarea>\r\n                    </label>\r\n                    <!--\r\n                      <label class=\"k-form-field\">\r\n                    <span>用户分组</span>\r\n                    <input formControlName=\"UserGroupName\" [readOnly]=\"!viewModel.stateMachine.canInput\" class=\"k-textbox w-100\" />\r\n                  </label>\r\n                    -->\r\n                  <!--\r\n                  <label class=\"k-form-field\">\r\n                    <span>用户类型</span>\r\n                    <input formControlName=\"UserTypeName\" [readOnly]=\"!viewModel.stateMachine.canInput\" class=\"k-textbox w-100\" />\r\n                  </label>\r\n                -->\r\n                </div>\r\n                <div class=\"col-sm-12 col-md-6 pb-1\">\r\n                  <label class=\"k-form-image\">\r\n                  </label>\r\n                </div>\r\n                <!--\r\n                <div class=\"col-sm-12 col-md-12\">\r\n                  <label class=\"k-form-field\">\r\n                    <span>描述</span>\r\n                    <textarea kendoTextArea rows=\"1\" class=\"k-textarea w-100\"></textarea>\r\n                  </label>\r\n                </div>\r\n              -->\r\n              </div>\r\n            </form>\r\n            <!--表头 END-->\r\n            <!--表体 BEGIN-->\r\n            <ng-container>\r\n              <kendo-tabstrip>\r\n                <kendo-tabstrip-tab [title]=\"'认证信息'\" [selected]=\"true\">\r\n                  <ng-template kendoTabContent>\r\n                    <app-user-password [userId]='this.userSession.curUserId' [isView]='this.userSession.isView'></app-user-password>\r\n                  </ng-template>\r\n                </kendo-tabstrip-tab>\r\n                <kendo-tabstrip-tab [title]=\"'个人信息'\" >\r\n                  <ng-template kendoTabContent>\r\n                    <form class=\"k-form p-1\" [formGroup]=\"viewModel.form\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-sm-12 col-md-6 pb-1\">\r\n                          <label class=\"k-form-field\">\r\n                            <span>邮箱</span>\r\n                            <div class=\"d-flex\">\r\n                              <input type=\"text\" formControlName=\"UserEmail\" [readOnly]=\"!viewModel.stateMachine.canInput\"\r\n                                class=\"k-textbox w-100\" />\r\n                            </div>\r\n                          </label>\r\n                          <label class=\"k-form-field\">\r\n                            <span>移动电话</span>\r\n                            <div class=\"d-flex\">\r\n                              <input formControlName=\"UserMobilePhone\" [readOnly]=\"!viewModel.stateMachine.canInput\"\r\n                                class=\"k-textbox w-100\" />\r\n                            </div>\r\n                          </label>\r\n                          <label class=\"k-form-field\">\r\n                            <span>QQ</span>\r\n                            <div class=\"d-flex\"><input formControlName=\"UserQQ\" [readOnly]=\"!viewModel.stateMachine.canInput\"\r\n                                class=\"k-textbox w-100\" />\r\n                            </div>\r\n                          </label>\r\n                        </div>\r\n                        <div class=\"col-sm-12 col-md-6 pb-1\">\r\n                          <label class=\"k-form-field\">\r\n                            <span>固定电话</span>\r\n                            <div class=\"d-flex\">\r\n                              <input type=\"text\" formControlName=\"UserPhone\" [readOnly]=\"!viewModel.stateMachine.canInput\"\r\n                                class=\"k-textbox w-100\" />\r\n                            </div>\r\n                          </label>\r\n                          <label class=\"k-form-field\">\r\n                            <span>微信</span>\r\n                            <div class=\"d-flex\"><input formControlName=\"UserWeChat\" [readOnly]=\"!viewModel.stateMachine.canInput\"\r\n                                class=\"k-textbox w-100\" /></div>\r\n                          </label>\r\n                          <label class=\"k-form-field\">\r\n                            <span>地址</span>\r\n                            <div class=\"d-flex\"><input formControlName=\"UserAddress\" [readOnly]=\"!viewModel.stateMachine.canInput\"\r\n                                class=\"k-textbox w-100\" /></div>\r\n                          </label>\r\n                        </div>\r\n                      </div>\r\n                    </form>\r\n                  </ng-template>\r\n                </kendo-tabstrip-tab>\r\n                <!--\r\n                <kendo-tabstrip-tab [title]=\"'登陆限制'\">\r\n                </kendo-tabstrip-tab>\r\n              -->\r\n                <kendo-tabstrip-tab [title]=\"'授权岗位'\">\r\n                  <ng-template kendoTabContent>\r\n                    <app-user-position [curUserId]=\"this.viewModel.uiState.dataId\"></app-user-position>\r\n                  </ng-template>\r\n                </kendo-tabstrip-tab>\r\n              </kendo-tabstrip>\r\n            </ng-container>\r\n            <!--表体 END-->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-detail/gspuser-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPUserDetailComponent", function() { return GSPUserDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__domain_gspuser_detail_repository__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/domain/gspuser-detail.repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_gspuser_detail_app_index__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/app/gspuser-detail-app.index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_util_sys_manager_util__ = __webpack_require__("./src/app/modules/common/util/sys-manager-util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_position_user_position_component__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/user-position/user-position.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GSPUserDetailComponent = /** @class */ (function () {
    // 要注入ActivatedRoute服务，因为要从路由中解析参数
    function GSPUserDetailComponent(viewModel, userDetailRep, route, userSession) {
        this.viewModel = viewModel;
        this.userDetailRep = userDetailRep;
        this.route = route;
        this.userSession = userSession;
    }
    GSPUserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            // 路由过来的参数和表单状态赋值给当前表单状态，更新按钮状态
            _this.viewModel.uiState.dataId = params.get('id');
            _this.userSession.curUserId = params.get('id');
            var curAction = params.get('action');
            _this.viewModel.uiState.action = curAction;
            // 设定用户密码的UI状态
            if (curAction === 'view') {
                _this.userSession.isView = true;
            }
            else {
                _this.userSession.isView = false;
            }
            _this.viewModel.formLoad();
        });
    };
    /**保存用户 */
    GSPUserDetailComponent.prototype.saveUser = function () {
        // 页面上的保存用户,这个地方估计是异步的
        this.viewModel.uiState.needSaveUserPos = false;
        // 必须有加载的情况下,才能保存用户岗位关系
        if (this.userPosChild) {
            this.viewModel.uiState.needSaveUserPos = true;
        }
        this.viewModel.save();
    };
    /**弹出组织树帮助 */
    GSPUserDetailComponent.prototype.showSysOrgHelp = function () {
        // 组织弹出帮助
        this.viewModel.uiState.showSysOrgHelpFlag = !this.viewModel.uiState.showSysOrgHelpFlag;
    };
    /**组织切换后 */
    GSPUserDetailComponent.prototype.afterSelectedSysOrg = function (data) {
        var curUserDetail = this.userDetailRep.getAllEntities()[0];
        curUserDetail.sysOrgId = data.id;
        curUserDetail.sysOrgName = data.name;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__user_position_user_position_component__["UserPositionComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__user_position_user_position_component__["UserPositionComponent"])
    ], GSPUserDetailComponent.prototype, "userPosChild", void 0);
    GSPUserDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-gspuser-detail',
            template: __webpack_require__("./src/app/modules/user-manager/gspuser-detail/gspuser-detail.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__app_gspuser_detail_app_index__["GSPUserDetailViewModel"],
            __WEBPACK_IMPORTED_MODULE_0__domain_gspuser_detail_repository__["GSPUserDetailRepository"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_4__common_util_sys_manager_util__["SysManagerUtil"]])
    ], GSPUserDetailComponent);
    return GSPUserDetailComponent;
}());



/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-detail/help/list-help/pos-help.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-detail/help/list-help/pos-help.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" [ngClass]=\"{'show d-block':isShow}\">\n  <div class=\"modal-dialog modal-dialog-centered gw-page-dialog\" style=\"font-size: 13px;max-width:40%;\">\n    <div class=\"modal-content\" style=\"width:100%;height:500px;\">\n      <div class=\"modal-header\">\n        <div class=\"clearfix p-2\">\n          <h6 class=\"modal-title float-left\">{{title}}</h6>\n          <button class=\"close\" (click)=\"isShow=false\">\n            <span>×</span>\n          </button>\n        </div>\n      </div>\n      <div class=\"modal-body\">\n        <kendo-grid [class]=\"'flex-auto'\" [selectable]=\"selectableSettings\" [kendoGridSelectBy]=\"'id'\" [selectedKeys]=\"curSelectedKeys\"\n          [kendoGridBinding]=\"data\" [height]=\"350\">\n          <kendo-grid-checkbox-column width=\"10%\"></kendo-grid-checkbox-column>\n          <kendo-grid-column field=\"code\" title=\"编号\" width=\"40%\"></kendo-grid-column>\n          <kendo-grid-column field=\"name\" title=\"名称\" width=\"50%\"></kendo-grid-column>\n        </kendo-grid>\n      </div>\n      <div class=\"modal-footer\">\n        <!--\n        <div pr-2 text-left class=\"col-xs-3\">\n          <span>全选</span>\n          <input type=\"checkbox\" style=\"zoom:120%;\" id=\"checkAllData\" name=\"checkAllData\" [checked]=\"true\">\n        </div>\n        -->\n        <div text-right p-2 class=\"col-xs-9\">\n          <button class=\"btn btn-sm  mr-2  btn-primary \" [disabled]=\"\" style=\"font-size: 13px;line-height: 1.2;\"\n            (click)=\"btnOk()\">确定</button>\n          <button class=\"btn btn-sm mr-2\" style=\"background:#e3e4e4!important;font-size: 13px;line-height: 1.2;\"\n            (click)=\"isShow=false\">取消</button>\n        </div>\n      </div>\n    </div>\n\n  </div>\n  <!-- /.modal-dialog -->\n</div>\n"

/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-detail/help/list-help/pos-help.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosHelpComponent", function() { return PosHelpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_position_domain__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/user-position/domain/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PosHelpComponent = /** @class */ (function () {
    function PosHelpComponent(userPosService) {
        this.userPosService = userPosService;
        /**帮助标题 */
        this.title = '帮助';
        /**输出事件 */
        this.selectedAfterOk = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        // 多选模式
        this.selectableSettings = {
            checkboxOnly: true,
            mode: 'multiple',
            enabled: true
        };
    }
    PosHelpComponent.prototype.ngOnInit = function () {
    };
    /**输入属性变化后 */
    PosHelpComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        // 只有显示属性变化后才能起作用
        if (changes['isShow']) {
            // 第一次加载页面的时候,会有第一次变化
            if (changes.isShow.firstChange) {
                // 首次进来不取数、不显示
                this.isShow = false;
                return;
            }
            // 按钮触发进来
            this.isShow = true;
            // 服务端获取数据
            this.userPosService.getAllPositions()
                .subscribe(function (result) {
                _this.data = result;
                _this.curSelectedKeys = [];
                if (_this.initSelectedKeys) {
                    _this.initSelectedKeys.map(function (item) { return _this.curSelectedKeys.push(item); });
                }
            }, function (error) {
                console.log('用户授权岗位时获取岗位列表失败');
                console.log(error);
            });
        }
    };
    /**帮助确定按钮 */
    PosHelpComponent.prototype.btnOk = function () {
        var _this = this;
        this.closeDialog();
        // 根据选中行获取实体数据
        var selectPosEntity = [];
        __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].from(this.curSelectedKeys)
            .map(function (item) { return _this.data.find(function (pos) { return pos['id'] === item; }); })
            .subscribe(function (item) { return selectPosEntity.push(item); });
        // 发射当前选中数据
        this.selectedAfterOk.next(selectPosEntity);
    };
    PosHelpComponent.prototype.showDialog = function () {
        this.isShow = true;
    };
    PosHelpComponent.prototype.closeDialog = function () {
        this.isShow = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PosHelpComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], PosHelpComponent.prototype, "isShow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], PosHelpComponent.prototype, "initSelectedKeys", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], PosHelpComponent.prototype, "selectedAfterOk", void 0);
    PosHelpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pos-help',
            template: __webpack_require__("./src/app/modules/user-manager/gspuser-detail/help/list-help/pos-help.component.html"),
            styles: [__webpack_require__("./src/app/modules/user-manager/gspuser-detail/help/list-help/pos-help.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__user_position_domain__["GSPUserPositionService"]])
    ], PosHelpComponent);
    return PosHelpComponent;
}());



/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-detail/help/sys-org-help.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-detail/help/sys-org-help.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" [ngClass]=\"{'show d-block':isShow}\">\n  <div class=\"modal-dialog modal-dialog-centered gw-page-dialog\" style=\"font-size: 13px;max-width:40%;\">\n    <div class=\"modal-content\" style=\"width:100%;height:500px;\">\n      <div class=\"modal-header\">\n        <div class=\"clearfix p-2\">\n          <h6 class=\"modal-title float-left\">{{title}}</h6>\n          <button class=\"close\" (click)=\"isShow=false\">\n            <span>×</span>\n          </button>\n        </div>\n      </div>\n      <div class=\"modal-body\">\n        <kendo-treeview \n        [nodes]=\"this.data\"\n        textField=\"name\"\n        idField=\"id\"\n        parentIdField=\"parentId\"\n        kendoTreeViewExpandable\n        kendoTreeViewFlatDataBinding\n        kendoTreeViewSelectable\n        [selectBy]=\"'id'\"\n        [(selectedKeys)]=\"curSelectedKeys\"\n        ></kendo-treeview>\n      </div>\n      <div class=\"modal-footer\">\n        <!--\n        <div pr-2 text-left class=\"col-xs-3\">\n          <span>全选</span>\n          <input type=\"checkbox\" style=\"zoom:120%;\" id=\"checkAllData\" name=\"checkAllData\" [checked]=\"true\">\n        </div>\n        -->\n        <div text-right p-2 class=\"col-xs-9\">\n          <button class=\"btn btn-sm  mr-2  btn-primary \" [disabled]=\"\" style=\"font-size: 13px;line-height: 1.2;\"\n            (click)=\"btnOk()\">确定</button>\n          <button class=\"btn btn-sm mr-2\" style=\"background:#e3e4e4!important;font-size: 13px;line-height: 1.2;\"\n            (click)=\"isShow=false\">取消</button>\n        </div>\n      </div>\n    </div>\n\n  </div>\n  <!-- /.modal-dialog -->\n</div>\n"

/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-detail/help/sys-org-help.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SysOrgHelpComponent", function() { return SysOrgHelpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sys_org_tree_domain__ = __webpack_require__("./src/app/modules/user-manager/sys-org-tree/domain/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SysOrgHelpComponent = /** @class */ (function () {
    function SysOrgHelpComponent(sysOrgService) {
        this.sysOrgService = sysOrgService;
        /**帮助标题 */
        this.title = '帮助';
        /**输出事件 */
        this.selectedAfterOk = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        // 单选模式
        this.selectableSettings = {
            checkboxOnly: true,
            mode: 'single',
            enabled: true
        };
    }
    SysOrgHelpComponent.prototype.ngOnInit = function () {
    };
    /**输入属性变化后 */
    SysOrgHelpComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        // 只有显示属性变化后才能起作用
        if (changes['isShow']) {
            // 第一次加载页面的时候,会有第一次变化
            if (changes.isShow.firstChange) {
                // 首次进来不取数、不显示
                this.isShow = false;
                return;
            }
            // 按钮触发进来
            this.isShow = true;
            // 服务端获取数据
            this.sysOrgService.getAllSysOrgs()
                .subscribe(function (result) {
                _this.data = result;
                _this.curSelectedKeys = [];
                if (_this.initSelectedKeys) {
                    _this.initSelectedKeys.map(function (item) { return _this.curSelectedKeys.push(item); });
                }
            }, function (error) {
                console.log('获取系统组织时帮助出错');
                console.log(error);
            });
        }
    };
    /**帮助确定按钮 */
    SysOrgHelpComponent.prototype.btnOk = function () {
        var _this = this;
        this.closeDialog();
        // 根据选中行获取实体数据
        if (this.curSelectedKeys === null || this.curSelectedKeys.length === 0) {
            // 无选择不触发事件
            return;
        }
        var sysOrg = this.data.find(function (pos) { return pos['id'] === _this.curSelectedKeys[0]; });
        // 发射当前选中数据
        this.selectedAfterOk.next(sysOrg);
    };
    SysOrgHelpComponent.prototype.showDialog = function () {
        this.isShow = true;
    };
    SysOrgHelpComponent.prototype.closeDialog = function () {
        this.isShow = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SysOrgHelpComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], SysOrgHelpComponent.prototype, "isShow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], SysOrgHelpComponent.prototype, "initSelectedKeys", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], SysOrgHelpComponent.prototype, "selectedAfterOk", void 0);
    SysOrgHelpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sys-org-help',
            template: __webpack_require__("./src/app/modules/user-manager/gspuser-detail/help/sys-org-help.component.html"),
            styles: [__webpack_require__("./src/app/modules/user-manager/gspuser-detail/help/sys-org-help.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__sys_org_tree_domain__["GSPSysOrgDataService"]])
    ], SysOrgHelpComponent);
    return SysOrgHelpComponent;
}());



/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-detail/user-position/app/handlers/user-position.add.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserPosition", function() { return AddUserPosition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_position_uistate__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/user-position/app/user-position.uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__domain_gspposition_repository__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/user-position/domain/gspposition.repository.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * 用户岗位详情页面新增
 */
var AddUserPosition = /** @class */ (function (_super) {
    __extends(AddUserPosition, _super);
    function AddUserPosition(userPosUIState, userPosRep) {
        var _this = _super.call(this) || this;
        _this.userPosUIState = userPosUIState;
        _this.userPosRep = userPosRep;
        return _this;
    }
    // TODO: 需要展开
    AddUserPosition.prototype.schedule = function () {
        var _this = this;
        this.addTask('add', function () {
            // 打开帮助
            _this.userPosUIState.userPosHelpFlag = !_this.userPosUIState.userPosHelpFlag;
            var curPosList = _this.userPosRep.getAllEntities();
            console.log(curPosList);
        });
    };
    AddUserPosition = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'addUserPos'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__user_position_uistate__["GSPUserPositionUIState"],
            __WEBPACK_IMPORTED_MODULE_3__domain_gspposition_repository__["GSPUserPositionRepository"]])
    ], AddUserPosition);
    return AddUserPosition;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-detail/user-position/app/handlers/user-position.delete.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteUserPosition", function() { return DeleteUserPosition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_gspposition_dataservice__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/user-position/domain/gspposition.dataservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__domain_gspposition_repository__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/user-position/domain/gspposition.repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_position_uistate__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/user-position/app/user-position.uistate.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * 用户岗位详情页面新增
 */
var DeleteUserPosition = /** @class */ (function (_super) {
    __extends(DeleteUserPosition, _super);
    function DeleteUserPosition(dataService, userPosUIState, userPosRep) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.userPosUIState = userPosUIState;
        _this.userPosRep = userPosRep;
        return _this;
    }
    // TODO: 需要展开
    DeleteUserPosition.prototype.schedule = function () {
        var _this = this;
        this.addTask('delete', function () {
            // 无选择数据
            if (_this.userPosUIState.selectPosList === null
                || _this.userPosUIState.selectPosList.length === 0) {
                alert('请选择需要删除的数据');
                return;
            }
            if (_this.userPosRep.getAllEntities().length === 0) {
                alert('没有需要删除的数据');
                return;
            }
            var curSelectPosId = _this.userPosUIState.selectPosList[0];
            // 根据用户内码获取分配的岗位
            _this.userPosRep.removeEntityById(curSelectPosId);
            // 删除后界面上选择数据为空
            _this.userPosUIState.selectPosList = [];
        });
    };
    DeleteUserPosition = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'deleteUserPos'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__domain_gspposition_dataservice__["GSPUserPositionService"],
            __WEBPACK_IMPORTED_MODULE_4__user_position_uistate__["GSPUserPositionUIState"],
            __WEBPACK_IMPORTED_MODULE_3__domain_gspposition_repository__["GSPUserPositionRepository"]])
    ], DeleteUserPosition);
    return DeleteUserPosition;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-detail/user-position/app/handlers/user-position.formload.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPositionFormLoadHandler", function() { return UserPositionFormLoadHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_gspposition_dataservice__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/user-position/domain/gspposition.dataservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_gspuser_detail_uistate__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/app/gspuser-detail.uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__domain_gspposition_datastorage__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/user-position/domain/gspposition.datastorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_position_uistate__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/user-position/app/user-position.uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_from__ = __webpack_require__("./node_modules/rxjs/add/observable/from.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_from__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * 用户岗位详情页面加载
 */
var UserPositionFormLoadHandler = /** @class */ (function (_super) {
    __extends(UserPositionFormLoadHandler, _super);
    function UserPositionFormLoadHandler(dataService, posStore, userDetailState, userPosState) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.posStore = posStore;
        _this.userDetailState = userDetailState;
        _this.userPosState = userPosState;
        return _this;
    }
    UserPositionFormLoadHandler.prototype.schedule = function () {
        var _this = this;
        this.addTask('loadData', function () {
            // 根据用户内码获取分配的岗位
            var dataId = _this.userDetailState.dataId;
            _this.dataService.getPositionsByUserId(dataId).subscribe(function (result) {
                _this.posStore.load(result);
                // 清空数据，然后备份,用于最后保存时的对比比较
                _this.userPosState.posIdBackUpList = [];
                // 子组件输入属性绑定值，连动当前界面和岗位帮助选择数据
                _this.userPosState.curPosIdList = [];
                __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].from(result)
                    .map(function (item) { return item['id']; })
                    .subscribe(function (item) {
                    _this.userPosState.posIdBackUpList.push(item);
                    _this.userPosState.curPosIdList.push(item);
                });
            });
        });
    };
    UserPositionFormLoadHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'userPosFormLoad'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__domain_gspposition_dataservice__["GSPUserPositionService"],
            __WEBPACK_IMPORTED_MODULE_4__domain_gspposition_datastorage__["GSPPositionDataStorage"],
            __WEBPACK_IMPORTED_MODULE_3__app_gspuser_detail_uistate__["GSPUserDetailUIState"],
            __WEBPACK_IMPORTED_MODULE_5__user_position_uistate__["GSPUserPositionUIState"]])
    ], UserPositionFormLoadHandler);
    return UserPositionFormLoadHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-detail/user-position/app/handlers/user-position.save.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveUserPosition", function() { return SaveUserPosition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_gspposition_dataservice__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/user-position/domain/gspposition.dataservice.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * 用户岗位详情页面加载--暂时废弃
 */
var SaveUserPosition = /** @class */ (function (_super) {
    __extends(SaveUserPosition, _super);
    function SaveUserPosition(dataService) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        return _this;
    }
    SaveUserPosition.prototype.schedule = function () {
        var _this = this;
        this.addTask('save', function () {
            // 根据用户内码获取分配的岗位
            _this.dataService.modifyPosByUser().subscribe(
            // 成功之后刷新备份列表
            function (result) {
                alert('用户授权岗位保存成功');
            }, function (error) {
                console.log(error);
                console.log('用户授权岗位失败');
            });
        });
    };
    SaveUserPosition = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'saveUserPos'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__domain_gspposition_dataservice__["GSPUserPositionService"]])
    ], SaveUserPosition);
    return SaveUserPosition;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-detail/user-position/app/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userPos_App_Providers", function() { return userPos_App_Providers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__handlers_user_position_save_handler__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/user-position/app/handlers/user-position.save.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__handlers_user_position_delete_handler__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/user-position/app/handlers/user-position.delete.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__handlers_user_position_add_handler__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/user-position/app/handlers/user-position.add.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__handlers_user_position_formload_handler__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/user-position/app/handlers/user-position.formload.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_position_bindingdata__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/user-position/app/user-position.bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_position_viewmodel__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/user-position/app/user-position.viewmodel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_position_uistate__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/user-position/app/user-position.uistate.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UserPositionFormLoadHandler", function() { return __WEBPACK_IMPORTED_MODULE_3__handlers_user_position_formload_handler__["UserPositionFormLoadHandler"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserPosition", function() { return __WEBPACK_IMPORTED_MODULE_2__handlers_user_position_add_handler__["AddUserPosition"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteUserPosition", function() { return __WEBPACK_IMPORTED_MODULE_1__handlers_user_position_delete_handler__["DeleteUserPosition"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SaveUserPosition", function() { return __WEBPACK_IMPORTED_MODULE_0__handlers_user_position_save_handler__["SaveUserPosition"]; });
/* unused harmony reexport GSPPositionBindingData */
/* unused harmony reexport GSPUserPositionViewModel */







var userPos_App_Providers = [
    __WEBPACK_IMPORTED_MODULE_6__user_position_uistate__["GSPUserPositionUIState"],
    __WEBPACK_IMPORTED_MODULE_4__user_position_bindingdata__["GSPPositionBindingData"],
    __WEBPACK_IMPORTED_MODULE_5__user_position_viewmodel__["GSPUserPositionViewModel"]
];
// 导出用户和岗位APP域所有成员



/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-detail/user-position/app/user-position.bindingdata.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPPositionBindingData", function() { return GSPPositionBindingData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_gspposition_repository__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/user-position/domain/gspposition.repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__domain_gspposition_entity__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/user-position/domain/gspposition.entity.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * 岗位详情绑定数据
 */
var GSPPositionBindingData = /** @class */ (function (_super) {
    __extends(GSPPositionBindingData, _super);
    function GSPPositionBindingData(injector) {
        return _super.call(this, injector) || this;
    }
    GSPPositionBindingData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgBindingData"])({
            entity: __WEBPACK_IMPORTED_MODULE_3__domain_gspposition_entity__["GSPPositionEntity"],
            repository: __WEBPACK_IMPORTED_MODULE_2__domain_gspposition_repository__["GSPUserPositionRepository"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], GSPPositionBindingData);
    return GSPPositionBindingData;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["BindingData"]));



/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-detail/user-position/app/user-position.uistate.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPUserPositionUIState", function() { return GSPUserPositionUIState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * 用户岗位组件UI状态
 */
var GSPUserPositionUIState = /** @class */ (function () {
    function GSPUserPositionUIState() {
        /** 选择的岗位列表，用于在界面上删除时的单行选择*/
        this.selectPosList = [];
        /**第一次岗位列表备份 */
        this.posIdBackUpList = [];
        /**当前界面上岗位内码 */
        this.curPosIdList = [];
        /** 设置用户岗位帮助的状态值*/
        this.userPosHelpFlag = false;
    }
    GSPUserPositionUIState = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], GSPUserPositionUIState);
    return GSPUserPositionUIState;
}());



/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-detail/user-position/app/user-position.viewmodel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPUserPositionViewModel", function() { return GSPUserPositionViewModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_position_bindingdata__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/user-position/app/user-position.bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_position_uistate__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/user-position/app/user-position.uistate.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * 用户和岗位关系详情视图模型
 */
var GSPUserPositionViewModel = /** @class */ (function (_super) {
    __extends(GSPUserPositionViewModel, _super);
    /**
     * 构造函数
     */
    function GSPUserPositionViewModel(injector) {
        var _this = _super.call(this, injector) || this;
        _this.uiState = _this.injector.get(__WEBPACK_IMPORTED_MODULE_3__user_position_uistate__["GSPUserPositionUIState"]);
        return _this;
    }
    /**
     * 用户和岗位关系加载
     */
    GSPUserPositionViewModel.prototype.formLoad = function () { };
    /**新增用户岗位关系 */
    GSPUserPositionViewModel.prototype.addUserPos = function () { };
    /**删除用户岗位关系 */
    GSPUserPositionViewModel.prototype.deleteUserPos = function () { };
    /**保存用户岗位关系 */
    GSPUserPositionViewModel.prototype.saveUserPos = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgCommand"])({
            name: 'userPosFormLoad'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GSPUserPositionViewModel.prototype, "formLoad", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgCommand"])({
            name: 'addUserPos'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GSPUserPositionViewModel.prototype, "addUserPos", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgCommand"])({
            name: 'deleteUserPos'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GSPUserPositionViewModel.prototype, "deleteUserPos", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgCommand"])({
            name: 'saveUserPos'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GSPUserPositionViewModel.prototype, "saveUserPos", null);
    GSPUserPositionViewModel = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgViewModel"])({
            children: [],
            binding: __WEBPACK_IMPORTED_MODULE_0__user_position_bindingdata__["GSPPositionBindingData"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injector"]])
    ], GSPUserPositionViewModel);
    return GSPUserPositionViewModel;
}(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["ViewModel"]));



/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-detail/user-position/domain/gspposition.dataservice.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPUserPositionService", function() { return GSPUserPositionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_util_sys_manager_util__ = __webpack_require__("./src/app/modules/common/util/sys-manager-util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common__ = __webpack_require__("./src/app/modules/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_user_position_uistate__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/user-position/app/user-position.uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gspposition_repository__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/user-position/domain/gspposition.repository.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**用户岗位关联关系获取岗位数据 */
var GSPUserPositionService = /** @class */ (function () {
    function GSPUserPositionService(rest, sessionUtil, userPosState, userPosRep) {
        this.rest = rest;
        this.sessionUtil = sessionUtil;
        this.userPosState = userPosState;
        this.userPosRep = userPosRep;
    }
    /**根据用户内码获取分配的岗位 */
    GSPUserPositionService.prototype.getPositionsByUserId = function (userId) {
        var headers = this.sessionUtil.getHeader();
        var getPosByUserUrl = this.sessionUtil.userPositionWebApi + '/users/' + userId + '/positions';
        return this.rest.get(getPosByUserUrl, null, headers);
    };
    /**修改用户和岗位的关联关系 */
    GSPUserPositionService.prototype.modifyPosByUser = function () {
        var _this = this;
        // 根据用户内码获取分配的岗位
        var userId = this.userPosState.curUserId;
        var curPosIdList = this.userPosRep.getAllEntities().map(function (item) { return item.id; });
        var posIdBackUpList = this.userPosState.posIdBackUpList;
        // 获取新增和删除的
        var addList = curPosIdList.filter(function (item) { return posIdBackUpList.indexOf(item) < 0; });
        var removeList = posIdBackUpList.filter(function (item) { return curPosIdList.indexOf(item) < 0; });
        var userPosPkg = new __WEBPACK_IMPORTED_MODULE_4__common__["ResultPackage"]();
        userPosPkg.ownerId = userId;
        userPosPkg.addingResults = addList;
        userPosPkg.removingResults = removeList;
        if (addList.length === 0 && removeList.length === 0) {
            // 无变化
            return new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) { return observer.next(); });
        }
        console.log('add');
        console.log(addList);
        console.log('remove');
        console.log(removeList);
        var headers = this.sessionUtil.getHeader();
        var userPosWebUrl = this.sessionUtil.userPositionWebApi;
        var queryParams = {
            subjectType: 'user',
            objectType: 'position'
        };
        return this.rest.post(userPosWebUrl, userPosPkg, queryParams, headers)
            .map(function (item) {
            _this.userPosState.posIdBackUpList = curPosIdList;
            return item;
        });
    };
    /**获取所有岗位 */
    GSPUserPositionService.prototype.getAllPositions = function () {
        var headers = this.sessionUtil.getHeader();
        var posUrl = this.sessionUtil.positionWebApi + '/all';
        return this.rest.get(posUrl, null, headers);
    };
    GSPUserPositionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["RestfulService"],
            __WEBPACK_IMPORTED_MODULE_0__common_util_sys_manager_util__["SysManagerUtil"],
            __WEBPACK_IMPORTED_MODULE_5__app_user_position_uistate__["GSPUserPositionUIState"],
            __WEBPACK_IMPORTED_MODULE_6__gspposition_repository__["GSPUserPositionRepository"]])
    ], GSPUserPositionService);
    return GSPUserPositionService;
}());



/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-detail/user-position/domain/gspposition.datastorage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPPositionDataStorage", function() { return GSPPositionDataStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * 岗位列表数据存储
 */
var GSPPositionDataStorage = /** @class */ (function (_super) {
    __extends(GSPPositionDataStorage, _super);
    function GSPPositionDataStorage() {
        return _super.call(this) || this;
    }
    GSPPositionDataStorage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], GSPPositionDataStorage);
    return GSPPositionDataStorage;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["MemoryStorage"]));



/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-detail/user-position/domain/gspposition.entity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPPositionEntity", function() { return GSPPositionEntity; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * 岗位关系实体
 */
var GSPPositionEntity = /** @class */ (function (_super) {
    __extends(GSPPositionEntity, _super);
    function GSPPositionEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(true),
        __metadata("design:type", String)
    ], GSPPositionEntity.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], GSPPositionEntity.prototype, "code", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], GSPPositionEntity.prototype, "name", void 0);
    return GSPPositionEntity;
}(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["Entity"]));



/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-detail/user-position/domain/gspposition.repository.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPUserPositionRepository", function() { return GSPUserPositionRepository; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gspposition_datastorage__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/user-position/domain/gspposition.datastorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gspposition_entity__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/user-position/domain/gspposition.entity.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * 岗位仓库持久化层
 */
var GSPUserPositionRepository = /** @class */ (function (_super) {
    __extends(GSPUserPositionRepository, _super);
    function GSPUserPositionRepository(injector) {
        return _super.call(this, injector) || this;
    }
    GSPUserPositionRepository = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRepository"])({
            from: __WEBPACK_IMPORTED_MODULE_2__gspposition_datastorage__["GSPPositionDataStorage"],
            entityType: __WEBPACK_IMPORTED_MODULE_3__gspposition_entity__["GSPPositionEntity"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], GSPUserPositionRepository);
    return GSPUserPositionRepository;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["Repository"]));



/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-detail/user-position/domain/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userPos_Domain_Providers", function() { return userPos_Domain_Providers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gspposition_datastorage__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/user-position/domain/gspposition.datastorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gspposition_repository__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/user-position/domain/gspposition.repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gspposition_dataservice__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/user-position/domain/gspposition.dataservice.ts");
/* unused harmony reexport GSPPositionDataStorage */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GSPUserPositionRepository", function() { return __WEBPACK_IMPORTED_MODULE_1__gspposition_repository__["GSPUserPositionRepository"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GSPUserPositionService", function() { return __WEBPACK_IMPORTED_MODULE_2__gspposition_dataservice__["GSPUserPositionService"]; });



// 用户岗位相关服务
var userPos_Domain_Providers = [
    __WEBPACK_IMPORTED_MODULE_0__gspposition_datastorage__["GSPPositionDataStorage"],
    __WEBPACK_IMPORTED_MODULE_1__gspposition_repository__["GSPUserPositionRepository"],
    __WEBPACK_IMPORTED_MODULE_2__gspposition_dataservice__["GSPUserPositionService"]
];
// 导出Domain域所有成员



/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-detail/user-position/user-position.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-detail/user-position/user-position.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"mt-1\">\r\n        <button type=\"button\" \r\n        [disabled]=\"!this.userDetailVm.stateMachine.canSave\"\r\n        (click)=\"this.userPosVm.addUserPos()\" \r\n        class=\"btn btn-sm btn-default\">授权岗位</button>\r\n        <button type=\"button\" \r\n        [disabled]=\"!this.userDetailVm.stateMachine.canSave\"\r\n        (click)=\"this.userPosVm.saveUserPos()\"\r\n         class=\"btn btn-sm btn-default\">保存</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row mt-2\">\r\n    <div class=\"col-12\">\r\n      <kendo-grid\r\n       [kendoGridSelectBy]=\"'id'\" \r\n       [selectable]=\"this.selectableSettings\"\r\n       [selectedKeys] = \"this.userPosVm.uiState.selectPosList\"\r\n       [kendoGridBinding]=\"this.userPosVm.bindingData.list\">\r\n        <kendo-grid-column field=\"code\" title=\"岗位编号\" width=\"40%\"></kendo-grid-column>\r\n        <kendo-grid-column field=\"name\" title=\"岗位名称\" width=\"60%\"></kendo-grid-column>\r\n      </kendo-grid>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-pos-help \r\n[title]=\"'岗位帮助'\"\r\n[initSelectedKeys]=\"this.userPosVm.uiState.curPosIdList\"\r\n[isShow]=\"this.userPosVm.uiState.userPosHelpFlag\"\r\n(selectedAfterOk)=\"afterPosSelected($event)\"></app-pos-help>\r\n"

/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-detail/user-position/user-position.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPositionComponent", function() { return UserPositionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_user_position_viewmodel__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/user-position/app/user-position.viewmodel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/user-position/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_gspuser_detail_viewmodel__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/app/gspuser-detail.viewmodel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__domain_gspposition_entity__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/user-position/domain/gspposition.entity.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * 用户岗位关系列表
 */
var UserPositionComponent = /** @class */ (function () {
    function UserPositionComponent(userPosVm, userDetailVm, posRep) {
        this.userPosVm = userPosVm;
        this.userDetailVm = userDetailVm;
        this.posRep = posRep;
        // 单选效果
        this.selectableSettings = {
            checkboxOnly: true,
            mode: 'single'
        };
    }
    UserPositionComponent.prototype.ngOnInit = function () {
    };
    /**输入属性变化后 */
    UserPositionComponent.prototype.ngOnChanges = function (changes) {
        // 加载数据
        this.userPosVm.uiState.selectPosList = [];
        this.userPosVm.uiState.curUserId = this.curUserId;
        this.userPosVm.formLoad();
    };
    /** 授权岗位的时候回调函数*/
    UserPositionComponent.prototype.afterPosSelected = function (args) {
        var _this = this;
        // 更新值
        var newPosEntityList = [];
        this.userPosVm.uiState.curPosIdList = [];
        __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].from(args).subscribe(function (item) {
            newPosEntityList.push(new __WEBPACK_IMPORTED_MODULE_5__domain_gspposition_entity__["GSPPositionEntity"](item));
            _this.userPosVm.uiState.curPosIdList.push(item['id']);
        });
        this.posRep.clear();
        this.posRep.addEntities(newPosEntityList);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], UserPositionComponent.prototype, "curUserId", void 0);
    UserPositionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-user-position',
            template: __webpack_require__("./src/app/modules/user-manager/gspuser-detail/user-position/user-position.component.html"),
            styles: [__webpack_require__("./src/app/modules/user-manager/gspuser-detail/user-position/user-position.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__app_user_position_viewmodel__["GSPUserPositionViewModel"],
            __WEBPACK_IMPORTED_MODULE_4__app_gspuser_detail_viewmodel__["GSPUserDetailViewModel"],
            __WEBPACK_IMPORTED_MODULE_2__domain__["GSPUserPositionRepository"]])
    ], UserPositionComponent);
    return UserPositionComponent;
}());



/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-detail/userpassword/domain/password.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPassWord", function() { return UserPassWord; });
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

var UserPassWord = /** @class */ (function () {
    function UserPassWord() {
        this.isPwdHasLoad = false;
    }
    UserPassWord = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UserPassWord);
    return UserPassWord;
}());



/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-detail/userpassword/domain/userpassword.dataservice.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPasswordDataService", function() { return UserPasswordDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__password__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/userpassword/domain/password.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_util_sys_manager_util__ = __webpack_require__("./src/app/modules/common/util/sys-manager-util.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserPasswordDataService = /** @class */ (function () {
    function UserPasswordDataService(rest, userManagerSession, pwd) {
        this.rest = rest;
        this.userManagerSession = userManagerSession;
        this.pwd = pwd;
        this.url = '/api/runtime/sys/v1.0/authenitems';
        this.accounturl = '/api/runtime/sys/v1.0/accounts';
    }
    // 加载
    UserPasswordDataService.prototype.formload = function (userId) {
        var _this = this;
        if (userId === 'new') {
            return;
        }
        this.rest.get(this.url + '/' + userId, null, this.userManagerSession.getHeader()).subscribe(function (result) {
            console.log(result);
            _this.pwd.oldPwd = result.password;
            _this.pwd.newPwd = result.password;
            _this.pwd.enSurePwd = result.password;
            _this.pwd.pwdInfo = result;
        });
    };
    // 新增
    UserPasswordDataService.prototype.add = function (userId) {
        var _this = this;
        var autheninfo = {
            'Id': userId,
            'UserId': userId,
            'AccountId': userId,
            'Password': this.pwd.newPwd,
            'TenantId': 10000,
            'ValidTime': '9999',
            'IsNextModifyPassword': 0
        };
        var accountinfo = {
            'Id': userId,
            'UserId': userId,
            'AccountId': userId,
            'TenantId': 10000,
            'AuthenStrategyName': '用户名密码认证',
            'AuthenStrategyId': '1'
        };
        this.rest.post(this.accounturl, accountinfo, null, this.userManagerSession.getHeader())
            .subscribe(function (addResult) {
            _this.rest.post(_this.url, autheninfo, null, _this.userManagerSession.getHeader())
                .subscribe(function (result) {
                // 为了保持状态
                _this.pwd.oldPwd = _this.pwd.newPwd;
            }, function (error) {
                console.log(error);
            });
        }, function (error) {
            console.log(error);
        });
    };
    // 修改
    UserPasswordDataService.prototype.edit = function (userId) {
        var _this = this;
        this.pwd.pwdInfo['password'] = this.pwd.newPwd;
        this.rest.put(this.url, this.pwd.pwdInfo, null, this.userManagerSession.getHeader())
            .subscribe(function () {
            _this.pwd.oldPwd = _this.pwd.newPwd;
        }, function (error) {
            console.log(error);
        });
        return true;
    };
    /**用户父组件新增的 */
    UserPasswordDataService.prototype.clearPwd = function () {
        this.pwd.oldPwd = '';
        this.pwd.newPwd = '';
        this.pwd.enSurePwd = '';
        this.pwd.isPwdHasLoad = false;
    };
    /**密码校验 用于新增*/
    UserPasswordDataService.prototype.checkPwdForAdd = function () {
        if (this.pwd.newPwd === undefined || this.pwd.newPwd === '' || this.pwd.enSurePwd === '') {
            return '密码不能为空';
        }
        if (this.pwd.newPwd !== this.pwd.enSurePwd) {
            return '密码不一致';
        }
        if (this.pwd.newPwd.length < 6) {
            return '密码不符合安全策略';
        }
        return '';
    };
    /**密码校验用户编辑 */
    UserPasswordDataService.prototype.checkPwdForEdit = function () {
        // 密码不改变的情况下
        if (this.pwd.isPwdHasLoad === false) {
            return 'unchanged';
        }
        else {
            if (this.pwd.oldPwd === this.pwd.newPwd && this.pwd.oldPwd === this.pwd.enSurePwd) {
                return 'unchanged';
            }
        }
        return this.checkPwdForAdd();
    };
    UserPasswordDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["RestfulService"],
            __WEBPACK_IMPORTED_MODULE_3__common_util_sys_manager_util__["SysManagerUtil"],
            __WEBPACK_IMPORTED_MODULE_2__password__["UserPassWord"]])
    ], UserPasswordDataService);
    return UserPasswordDataService;
}());



/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-detail/userpassword/userpassword.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"pl-2 pt-2\">\r\n        <span>认证策略</span>\r\n        <div class=\"pt-1\">\r\n            <select style=\"width:25%\" class=\"custom-select w-10\" [(ngModel)]='curAuthenStrategy' [disabled]='isView'>\r\n                <option *ngFor=\"let item of authenstrategies\" [value]=\"item\">{{item}}</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    <form class=\"k-form p-2\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12 col-md-6 pb-1\">\r\n                <label class=\"k-form-field\">\r\n                    <span>密码 </span>\r\n                    <div class=\"d-flex\">\r\n                        <input type='password' [disabled]='isView'  [(ngModel)]='pwd.newPwd' [ngModelOptions]=\"{standalone: true}\" class=\"k-textbox w-100\">\r\n                    </div>\r\n                </label>\r\n                <label class=\"k-form-field\">\r\n                    <span>确认密码 </span>\r\n                    <div class=\"d-flex\">\r\n                        <input type='password' [disabled]='isView'  [(ngModel)]='pwd.enSurePwd' [ngModelOptions]=\" {standalone: true}\r\n                            \" class=\"k-textbox w-100 \" />\r\n                    </div>\r\n                </label>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-detail/userpassword/userpassword.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPasswordComponent", function() { return UserPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__domain_userpassword_dataservice__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/userpassword/domain/userpassword.dataservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_password__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/userpassword/domain/password.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * 用户名密码认证组件
 */
var UserPasswordComponent = /** @class */ (function () {
    function UserPasswordComponent(service, pwd) {
        this.service = service;
        this.pwd = pwd;
    }
    UserPasswordComponent.prototype.ngOnInit = function () {
        // 用户名密码的Tab页面加载了
        this.pwd.isPwdHasLoad = true;
        this.authenstrategies = ['用户名密码认证'];
        this.curAuthenStrategy = this.authenstrategies[0];
        this.service.formload(this.userId);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], UserPasswordComponent.prototype, "isView", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], UserPasswordComponent.prototype, "userId", void 0);
    UserPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-password',
            template: __webpack_require__("./src/app/modules/user-manager/gspuser-detail/userpassword/userpassword.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__domain_userpassword_dataservice__["UserPasswordDataService"],
            __WEBPACK_IMPORTED_MODULE_2__domain_password__["UserPassWord"]])
    ], UserPasswordComponent);
    return UserPasswordComponent;
}());



/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-list/app/gspuser-list.bindingdata.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPUserListBindingData", function() { return GSPUserListBindingData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_user_list_domain_index__ = __webpack_require__("./src/app/modules/user-manager/gspuser-list/domain/user-list-domain.index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * 用户列表绑定数据
 */
var GSPUserListBindingData = /** @class */ (function (_super) {
    __extends(GSPUserListBindingData, _super);
    function GSPUserListBindingData(injector) {
        return _super.call(this, injector) || this;
    }
    GSPUserListBindingData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgBindingData"])({
            entity: __WEBPACK_IMPORTED_MODULE_2__domain_user_list_domain_index__["GSPUserListEntity"],
            repository: __WEBPACK_IMPORTED_MODULE_2__domain_user_list_domain_index__["GSPUserListRepository"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], GSPUserListBindingData);
    return GSPUserListBindingData;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["BindingData"]));



/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-list/app/gspuser-list.form.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPUserListForm", function() { return GSPUserListForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GSPUserListForm = /** @class */ (function (_super) {
    __extends(GSPUserListForm, _super);
    /**
     * 构造函数
     * @param injector 注入器
     */
    function GSPUserListForm(injector) {
        return _super.call(this, injector) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'userSearch',
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], GSPUserListForm.prototype, "userSearch", void 0);
    GSPUserListForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgForm"])({
            bindingData: null
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], GSPUserListForm);
    return GSPUserListForm;
}(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["Form"]));



/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-list/app/gspuser-list.statemachine.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPUserListStateMachine", function() { return GSPUserListStateMachine; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GSPUserListStateMachine = /** @class */ (function (_super) {
    __extends(GSPUserListStateMachine, _super);
    function GSPUserListStateMachine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgState"])({ initialState: true }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__farris_devkit__["State"])
    ], GSPUserListStateMachine.prototype, "init", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'init'; }
        }),
        __metadata("design:type", Boolean)
    ], GSPUserListStateMachine.prototype, "canAdd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'init'; }
        }),
        __metadata("design:type", Boolean)
    ], GSPUserListStateMachine.prototype, "canEdit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'init'; }
        }),
        __metadata("design:type", Boolean)
    ], GSPUserListStateMachine.prototype, "canRemove", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'init'; }
        }),
        __metadata("design:type", Boolean)
    ], GSPUserListStateMachine.prototype, "canView", void 0);
    GSPUserListStateMachine = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgStatemachine"])()
    ], GSPUserListStateMachine);
    return GSPUserListStateMachine;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["StateMachine"]));



/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-list/app/gspuser-list.uistate.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPUserListUIState", function() { return GSPUserListUIState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * 用户列表UI状态
 */
var GSPUserListUIState = /** @class */ (function () {
    function GSPUserListUIState() {
        /**
         * 选中的行
         */
        this.selectedIds = [];
    }
    GSPUserListUIState = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], GSPUserListUIState);
    return GSPUserListUIState;
}());



/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-list/app/gspuser-list.viewmodel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPUserListViewModel", function() { return GSPUserListViewModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gspuser_list_bindingdata__ = __webpack_require__("./src/app/modules/user-manager/gspuser-list/app/gspuser-list.bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gspuser_list_form__ = __webpack_require__("./src/app/modules/user-manager/gspuser-list/app/gspuser-list.form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gspuser_list_statemachine__ = __webpack_require__("./src/app/modules/user-manager/gspuser-list/app/gspuser-list.statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gspuser_list_uistate__ = __webpack_require__("./src/app/modules/user-manager/gspuser-list/app/gspuser-list.uistate.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * 用户列表视图模型
 */
var GSPUserListViewModel = /** @class */ (function (_super) {
    __extends(GSPUserListViewModel, _super);
    /**
     * 构造函数--UI状态
     */
    function GSPUserListViewModel(injector) {
        var _this = _super.call(this, injector) || this;
        _this.uiState = _this.injector.get(__WEBPACK_IMPORTED_MODULE_5__gspuser_list_uistate__["GSPUserListUIState"]);
        return _this;
    }
    /**
     * 表单加载
     */
    GSPUserListViewModel.prototype.formLoad = function () { };
    /**
     * 搜索
     */
    GSPUserListViewModel.prototype.search = function () { };
    /**
     * 新增--附带参数，命令为route，action为add
     */
    GSPUserListViewModel.prototype.add = function () { };
    /**
     * 编辑--附带参数，命令为route，action为edit
     */
    GSPUserListViewModel.prototype.edit = function () { };
    /**
     * 查看--附带参数，命令为route，action为view
     */
    GSPUserListViewModel.prototype.view = function () { };
    /**
     * 删除
     */
    GSPUserListViewModel.prototype.remove = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'userListFormLoad'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GSPUserListViewModel.prototype, "formLoad", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'userListSearch'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GSPUserListViewModel.prototype, "search", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'userListRoute',
            params: {
                action: 'add'
            }
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GSPUserListViewModel.prototype, "add", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'userListRoute',
            params: {
                action: 'edit'
            }
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GSPUserListViewModel.prototype, "edit", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'userListRoute',
            params: {
                action: 'view'
            }
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GSPUserListViewModel.prototype, "view", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'userListRemove',
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GSPUserListViewModel.prototype, "remove", null);
    GSPUserListViewModel = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgViewModel"])({
            children: [],
            binding: __WEBPACK_IMPORTED_MODULE_2__gspuser_list_bindingdata__["GSPUserListBindingData"],
            form: __WEBPACK_IMPORTED_MODULE_3__gspuser_list_form__["GSPUserListForm"],
            stateMachine: __WEBPACK_IMPORTED_MODULE_4__gspuser_list_statemachine__["GSPUserListStateMachine"],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], GSPUserListViewModel);
    return GSPUserListViewModel;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["ViewModel"]));



/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-list/app/handlers/user-list-form-load.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListFormLoadHandler", function() { return UserListFormLoadHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_user_list_domain_index__ = __webpack_require__("./src/app/modules/user-manager/gspuser-list/domain/user-list-domain.index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * 用户列表获取数据
 */
var UserListFormLoadHandler = /** @class */ (function (_super) {
    __extends(UserListFormLoadHandler, _super);
    function UserListFormLoadHandler(dataService) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        return _this;
    }
    UserListFormLoadHandler.prototype.schedule = function () {
        var _this = this;
        this.addTask('loadData', function () {
            _this.dataService.getAllUsers();
        });
    };
    UserListFormLoadHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'userListFormLoad'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__domain_user_list_domain_index__["GSPUserListDataService"]])
    ], UserListFormLoadHandler);
    return UserListFormLoadHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-list/app/handlers/user-list-remove.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListRemoveHandler", function() { return UserListRemoveHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_user_list_domain_index__ = __webpack_require__("./src/app/modules/user-manager/gspuser-list/domain/user-list-domain.index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gspuser_list_uistate__ = __webpack_require__("./src/app/modules/user-manager/gspuser-list/app/gspuser-list.uistate.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * 用户列表界面删除操作
 */
var UserListRemoveHandler = /** @class */ (function (_super) {
    __extends(UserListRemoveHandler, _super);
    // 注入UI状态和取数服务
    function UserListRemoveHandler(dataService, uiState, userListRep) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.uiState = uiState;
        _this.userListRep = userListRep;
        return _this;
    }
    UserListRemoveHandler.prototype.schedule = function () {
        var _this = this;
        // 删除选中行前检查
        this.addTask('remove', function () {
            if (_this.uiState.selectedIds.length === 0) {
                alert('请选择要删除的用户');
                return;
            }
            var deleteId = _this.uiState.selectedIds[0];
            _this.dataService.remove(deleteId).subscribe(function (result) {
                // 删除成功后界面数据刷新
                _this.userListRep.removeEntityById(deleteId);
            }, function (error) {
                console.log(error);
                console.log('删除用户失败');
            });
        });
    };
    UserListRemoveHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'userListRemove'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__domain_user_list_domain_index__["GSPUserListDataService"],
            __WEBPACK_IMPORTED_MODULE_3__gspuser_list_uistate__["GSPUserListUIState"],
            __WEBPACK_IMPORTED_MODULE_2__domain_user_list_domain_index__["GSPUserListRepository"]])
    ], UserListRemoveHandler);
    return UserListRemoveHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-list/app/handlers/user-list-route.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListRouteHandler", function() { return UserListRouteHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gspuser_list_uistate__ = __webpack_require__("./src/app/modules/user-manager/gspuser-list/app/gspuser-list.uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_util_sys_manager_util__ = __webpack_require__("./src/app/modules/common/util/sys-manager-util.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * 用户列表查看、编辑、新增操作-路由到详情页面
 */
var UserListRouteHandler = /** @class */ (function (_super) {
    __extends(UserListRouteHandler, _super);
    function UserListRouteHandler(router, uistate, session) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.uistate = uistate;
        _this.session = session;
        return _this;
    }
    UserListRouteHandler.prototype.schedule = function () {
        var _this = this;
        this.addTask('route', function (lastResult, context) {
            var command = context.command;
            var action = command.params.action;
            // 目前界面上是单选
            var selectId = _this.uistate.selectedIds[0];
            // 如果为新增路径中拼入new;如果为编辑或者查看获取id，然后附加上动作进入卡片页面进行处理
            var curUserId = (action === 'add') ? 'new' : selectId;
            if (action === 'view' || action === 'edit') {
                if (curUserId == null || curUserId.length === 0) {
                    alert('请选择对应的用户');
                    return;
                }
            }
            // 路由到详情页,密码组件非只读
            if (action === 'add') {
                _this.session.isView = false;
            }
            var userRouter = _this.session.getUserManageRouter();
            _this.router.navigate([userRouter, curUserId, { action: action }]);
        });
    };
    UserListRouteHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_3__farris_devkit__["NgCommandHandler"])({
            commandName: 'userListRoute'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_0__gspuser_list_uistate__["GSPUserListUIState"],
            __WEBPACK_IMPORTED_MODULE_4__common_util_sys_manager_util__["SysManagerUtil"]])
    ], UserListRouteHandler);
    return UserListRouteHandler;
}(__WEBPACK_IMPORTED_MODULE_3__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-list/app/handlers/user-list-search.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListSearchHandler", function() { return UserListSearchHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_user_list_domain_index__ = __webpack_require__("./src/app/modules/user-manager/gspuser-list/domain/user-list-domain.index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gspuser_list_form__ = __webpack_require__("./src/app/modules/user-manager/gspuser-list/app/gspuser-list.form.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * 用户列表根据起始日期搜索
 */
var UserListSearchHandler = /** @class */ (function (_super) {
    __extends(UserListSearchHandler, _super);
    function UserListSearchHandler(dataService, form) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.form = form;
        return _this;
    }
    // 根据编号或者姓名搜索
    UserListSearchHandler.prototype.schedule = function () {
        var _this = this;
        this.addTask('loadData', function () {
            // 空值不搜索
            var userCodeOrName = _this.form.userSearch.value;
            if (userCodeOrName == null || userCodeOrName.length === 0) {
                _this.dataService.getAllUsers();
            }
            else {
                _this.dataService.getUsersByCodeOrName(userCodeOrName);
            }
        });
    };
    UserListSearchHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'userListSearch'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__domain_user_list_domain_index__["GSPUserListDataService"],
            __WEBPACK_IMPORTED_MODULE_3__gspuser_list_form__["GSPUserListForm"]])
    ], UserListSearchHandler);
    return UserListSearchHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-list/app/user-list-app.index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allCommandHandlers", function() { return allCommandHandlers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERLIST_APP_PROVIDERS", function() { return USERLIST_APP_PROVIDERS; });
/* unused harmony export userListCommandHandlers */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gspuser_list_bindingdata__ = __webpack_require__("./src/app/modules/user-manager/gspuser-list/app/gspuser-list.bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gspuser_list_form__ = __webpack_require__("./src/app/modules/user-manager/gspuser-list/app/gspuser-list.form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gspuser_list_statemachine__ = __webpack_require__("./src/app/modules/user-manager/gspuser-list/app/gspuser-list.statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gspuser_list_uistate__ = __webpack_require__("./src/app/modules/user-manager/gspuser-list/app/gspuser-list.uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gspuser_list_viewmodel__ = __webpack_require__("./src/app/modules/user-manager/gspuser-list/app/gspuser-list.viewmodel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__handlers_user_list_form_load_handler__ = __webpack_require__("./src/app/modules/user-manager/gspuser-list/app/handlers/user-list-form-load.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__handlers_user_list_search_handler__ = __webpack_require__("./src/app/modules/user-manager/gspuser-list/app/handlers/user-list-search.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__handlers_user_list_route_handler__ = __webpack_require__("./src/app/modules/user-manager/gspuser-list/app/handlers/user-list-route.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__handlers_user_list_remove_handler__ = __webpack_require__("./src/app/modules/user-manager/gspuser-list/app/handlers/user-list-remove.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__gspuser_detail_app_handlers_user_detail_form_load_handler__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/app/handlers/user-detail-form-load.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__gspuser_detail_app_handlers_user_detail_save_handler__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/app/handlers/user-detail-save.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__gspuser_detail_app_handlers_user_detail_edit_handler__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/app/handlers/user-detail-edit.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__gspuser_detail_app_handlers_user_detail_close_handler__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/app/handlers/user-detail-close.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__gspuser_detail_app_handlers_user_detail_add_handler__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/app/handlers/user-detail-add.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__gspuser_detail_app_handlers_user_detail_cancel_handler__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/app/handlers/user-detail-cancel.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__gspuser_detail_user_position_app__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/user-position/app/index.ts");
/* unused harmony reexport GSPUserListBindingData */
/* unused harmony reexport GSPUserListForm */
/* unused harmony reexport GSPUserListStateMachine */
/* unused harmony reexport GSPUserListUIState */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GSPUserListViewModel", function() { return __WEBPACK_IMPORTED_MODULE_4__gspuser_list_viewmodel__["GSPUserListViewModel"]; });





// Handlers











// 命令-列表按钮
var userListCommandHandlers = [
    __WEBPACK_IMPORTED_MODULE_5__handlers_user_list_form_load_handler__["UserListFormLoadHandler"],
    __WEBPACK_IMPORTED_MODULE_6__handlers_user_list_search_handler__["UserListSearchHandler"],
    __WEBPACK_IMPORTED_MODULE_7__handlers_user_list_route_handler__["UserListRouteHandler"],
    __WEBPACK_IMPORTED_MODULE_8__handlers_user_list_remove_handler__["UserListRemoveHandler"]
];
/**用户列表所有的命令行 */
var allCommandHandlers = [
    // 用户列表
    __WEBPACK_IMPORTED_MODULE_5__handlers_user_list_form_load_handler__["UserListFormLoadHandler"],
    __WEBPACK_IMPORTED_MODULE_6__handlers_user_list_search_handler__["UserListSearchHandler"],
    __WEBPACK_IMPORTED_MODULE_7__handlers_user_list_route_handler__["UserListRouteHandler"],
    __WEBPACK_IMPORTED_MODULE_8__handlers_user_list_remove_handler__["UserListRemoveHandler"],
    // 用户详情
    __WEBPACK_IMPORTED_MODULE_9__gspuser_detail_app_handlers_user_detail_form_load_handler__["UserDetailFormLoadHandler"],
    __WEBPACK_IMPORTED_MODULE_10__gspuser_detail_app_handlers_user_detail_save_handler__["UserDetailSaveHandler"],
    __WEBPACK_IMPORTED_MODULE_12__gspuser_detail_app_handlers_user_detail_close_handler__["UserDetailCloseHandler"],
    __WEBPACK_IMPORTED_MODULE_11__gspuser_detail_app_handlers_user_detail_edit_handler__["UserDetailEditHandler"],
    __WEBPACK_IMPORTED_MODULE_13__gspuser_detail_app_handlers_user_detail_add_handler__["UserDetailAddHandler"],
    __WEBPACK_IMPORTED_MODULE_14__gspuser_detail_app_handlers_user_detail_cancel_handler__["UserDetailCancelHandler"],
    // 用户详情-用户岗位
    __WEBPACK_IMPORTED_MODULE_15__gspuser_detail_user_position_app__["UserPositionFormLoadHandler"],
    __WEBPACK_IMPORTED_MODULE_15__gspuser_detail_user_position_app__["AddUserPosition"],
    __WEBPACK_IMPORTED_MODULE_15__gspuser_detail_user_position_app__["DeleteUserPosition"],
    __WEBPACK_IMPORTED_MODULE_15__gspuser_detail_user_position_app__["SaveUserPosition"]
];
// 列表依赖注入提供者
var USERLIST_APP_PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_0__gspuser_list_bindingdata__["GSPUserListBindingData"],
    __WEBPACK_IMPORTED_MODULE_1__gspuser_list_form__["GSPUserListForm"],
    __WEBPACK_IMPORTED_MODULE_2__gspuser_list_statemachine__["GSPUserListStateMachine"],
    __WEBPACK_IMPORTED_MODULE_3__gspuser_list_uistate__["GSPUserListUIState"],
    __WEBPACK_IMPORTED_MODULE_4__gspuser_list_viewmodel__["GSPUserListViewModel"]
];



/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-list/domain/entities/gspuser-list.entity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPUserListEntity", function() { return GSPUserListEntity; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * 用户列表实体
 */
var GSPUserListEntity = /** @class */ (function (_super) {
    __extends(GSPUserListEntity, _super);
    function GSPUserListEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])({
            primary: true,
            dataField: 'id'
        }),
        __metadata("design:type", String)
    ], GSPUserListEntity.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], GSPUserListEntity.prototype, "code", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], GSPUserListEntity.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", Number)
    ], GSPUserListEntity.prototype, "userType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], GSPUserListEntity.prototype, "sysOrgId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], GSPUserListEntity.prototype, "sysOrgCode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], GSPUserListEntity.prototype, "sysOrgName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], GSPUserListEntity.prototype, "creatorName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], GSPUserListEntity.prototype, "note", void 0);
    return GSPUserListEntity;
}(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["Entity"]));



/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-list/domain/gspuser-list.dataservice.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPUserListDataService", function() { return GSPUserListDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_util_sys_manager_util__ = __webpack_require__("./src/app/modules/common/util/sys-manager-util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gspuser_list_datastorage__ = __webpack_require__("./src/app/modules/user-manager/gspuser-list/domain/gspuser-list.datastorage.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * 所有的用户列表数据获取走这里，获取所有，删除，搜索
 */
var GSPUserListDataService = /** @class */ (function () {
    /**
     * 依赖注入
     */
    function GSPUserListDataService(rest, dataStorage, userSession) {
        this.rest = rest;
        this.dataStorage = dataStorage;
        this.userSession = userSession;
    }
    /**
     * 加载所有用户列表数据
     */
    GSPUserListDataService.prototype.getAllUsers = function () {
        var _this = this;
        var allUsersUrl = this.userSession.userWebApi + "/all";
        var headers = this.userSession.getHeader();
        this.rest.get(allUsersUrl, null, headers).subscribe(function (result) {
            _this.dataStorage.load(result);
        }, function (error) {
            console.log(error);
            console.log('获取用户列表失败');
        });
    };
    /**
     * 根据用户编号或者姓名搜索用户
     * @param codeOrName 用户编号或者姓名
     */
    GSPUserListDataService.prototype.getUsersByCodeOrName = function (codeOrName) {
        var filter = { 'userCodeOrName': codeOrName };
        this.getUserByFilter(filter, '根据编号或者名称获取用户出错');
    };
    /**
     * 根据系统组织获取用户列表
     * @param sysOrg 系统组织内码
     */
    GSPUserListDataService.prototype.getUsersBySysOrg = function (sysOrg) {
        var filter = { 'sysOrgId': sysOrg };
        this.getUserByFilter(filter, '根据系统组织获取用户出错');
    };
    /**
     * 根据过滤条件获取用户
     * @param filter 查询参数
     * @param errorMsg 错误提示
     */
    GSPUserListDataService.prototype.getUserByFilter = function (filter, errorMsg) {
        var _this = this;
        var userUrl = this.userSession.userWebApi;
        var headers = this.userSession.getHeader();
        this.rest.get(userUrl, filter, headers).subscribe(function (result) {
            _this.dataStorage.load(result);
        }, function (error) {
            console.log(error);
            console.log(errorMsg);
        });
    };
    /**
     * 删除一个用户
     */
    GSPUserListDataService.prototype.remove = function (id) {
        var headers = this.userSession.getHeader();
        var deleteUrl = this.userSession.userWebApi + "/" + id;
        return this.rest.delete(deleteUrl, null, headers);
    };
    GSPUserListDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["RestfulService"],
            __WEBPACK_IMPORTED_MODULE_3__gspuser_list_datastorage__["GSPUserListDataStorage"],
            __WEBPACK_IMPORTED_MODULE_0__common_util_sys_manager_util__["SysManagerUtil"]])
    ], GSPUserListDataService);
    return GSPUserListDataService;
}());



/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-list/domain/gspuser-list.datastorage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPUserListDataStorage", function() { return GSPUserListDataStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * 用户列表数据存储
 */
var GSPUserListDataStorage = /** @class */ (function (_super) {
    __extends(GSPUserListDataStorage, _super);
    function GSPUserListDataStorage() {
        return _super.call(this) || this;
    }
    GSPUserListDataStorage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], GSPUserListDataStorage);
    return GSPUserListDataStorage;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["MemoryStorage"]));



/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-list/domain/gspuser-list.repository.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPUserListRepository", function() { return GSPUserListRepository; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_gspuser_list_entity__ = __webpack_require__("./src/app/modules/user-manager/gspuser-list/domain/entities/gspuser-list.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gspuser_list_datastorage__ = __webpack_require__("./src/app/modules/user-manager/gspuser-list/domain/gspuser-list.datastorage.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * 用户列表仓库持久化层
 */
var GSPUserListRepository = /** @class */ (function (_super) {
    __extends(GSPUserListRepository, _super);
    function GSPUserListRepository(injector) {
        return _super.call(this, injector) || this;
    }
    GSPUserListRepository = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRepository"])({
            from: __WEBPACK_IMPORTED_MODULE_3__gspuser_list_datastorage__["GSPUserListDataStorage"],
            entityType: __WEBPACK_IMPORTED_MODULE_2__entities_gspuser_list_entity__["GSPUserListEntity"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], GSPUserListRepository);
    return GSPUserListRepository;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["Repository"]));



/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-list/domain/user-list-domain.index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERLIST_DOMAIN_PROVIDERS", function() { return USERLIST_DOMAIN_PROVIDERS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entities_gspuser_list_entity__ = __webpack_require__("./src/app/modules/user-manager/gspuser-list/domain/entities/gspuser-list.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gspuser_list_datastorage__ = __webpack_require__("./src/app/modules/user-manager/gspuser-list/domain/gspuser-list.datastorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gspuser_list_repository__ = __webpack_require__("./src/app/modules/user-manager/gspuser-list/domain/gspuser-list.repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gspuser_list_dataservice__ = __webpack_require__("./src/app/modules/user-manager/gspuser-list/domain/gspuser-list.dataservice.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GSPUserListEntity", function() { return __WEBPACK_IMPORTED_MODULE_0__entities_gspuser_list_entity__["GSPUserListEntity"]; });
/* unused harmony reexport GSPUserListDataStorage */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GSPUserListRepository", function() { return __WEBPACK_IMPORTED_MODULE_2__gspuser_list_repository__["GSPUserListRepository"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GSPUserListDataService", function() { return __WEBPACK_IMPORTED_MODULE_3__gspuser_list_dataservice__["GSPUserListDataService"]; });




// domain域服务提供者
var USERLIST_DOMAIN_PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_1__gspuser_list_datastorage__["GSPUserListDataStorage"],
    __WEBPACK_IMPORTED_MODULE_2__gspuser_list_repository__["GSPUserListRepository"],
    __WEBPACK_IMPORTED_MODULE_3__gspuser_list_dataservice__["GSPUserListDataService"],
];
// 列表需要导出实体以及依赖注入



/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-list/gspuser-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex g-main\">\r\n    <!--系统组织和分组导航-->\r\n    <div class=\"col-xs-3 col-sm-3 col-md-3 col-lg-3\">\r\n      <div class=\"pt-5 mb-2\">\r\n        <ng-container>\r\n          <kendo-tabstrip>\r\n            <kendo-tabstrip-tab [title]=\"'系统组织'\" [selected]=\"true\">\r\n              <ng-template kendoTabContent>\r\n                <app-sys-org-tree></app-sys-org-tree>\r\n              </ng-template>\r\n            </kendo-tabstrip-tab>\r\n            \r\n          </kendo-tabstrip>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n    <!--用户列表-->\r\n    <div class=\"col-xs-9 col-sm-9 col-md-9 col-lg-9\">\r\n        <div class=\"d-flex flex-column g-main\">\r\n          <!--标题-->\r\n          <div class=\"clearfix pt-2 mb-2  mr-3\">\r\n              <h1 class=\"h4 d-inline-block\">用户列表</h1>\r\n              <div class=\"float-right\">\r\n                <button class=\"btn btn-sm btn-primary\" (click)=\"viewModel.add()\">新增</button>\r\n                <button class=\"btn btn-sm btn-default\" (click)=\"viewModel.edit()\">编辑</button>\r\n                <button class=\"btn btn-sm btn-default\" (click)=\"viewModel.view()\">查看</button>\r\n                <button class=\"btn btn-sm btn-default\" (click)=\"viewModel.remove()\">删除</button>\r\n              </div>\r\n          </div>\r\n          <!--搜索框-->\r\n          <div class=\"clearfix mb-2\">\r\n              <form [formGroup]=\"viewModel.form\">\r\n                <div class=\"form-inline\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"k-form-field\">\r\n                      <span>条件搜索:</span>\r\n                    </label>\r\n                    <div class=\"k-form-field mx-3\">\r\n                      <input formControlName=\"userSearch\" placeholder=\"输入用户编号或者名称\" />\r\n                    </div>\r\n                  </div>\r\n                  <div>\r\n                    <button class=\"mr-1 k-button\" (click)=\"viewModel.search()\">\r\n                      <i class=\"material-icons align-middle\" style=\"font-size: 18px;\">搜索</i>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n          </div>\r\n          <!--用户列表信息-->\r\n          <div class=\"flex-auto d-flex mr-3\" style=\"position:relative;\">\r\n            <kendo-grid \r\n            [pageable]=\"pageSetting\"\r\n            [pageSize]=\"20\"\r\n            [class]=\"'flex-auto'\"\r\n             [selectable]=\"selectableSettings\" [kendoGridBinding]=\"userList\"\r\n              [kendoGridSelectBy]=\"'id'\" [selectedKeys]=\"viewModel.uiState.selectedIds\">\r\n              <kendo-grid-checkbox-column width=\"5%\"></kendo-grid-checkbox-column>\r\n              <kendo-grid-column field=\"code\" title=\"用户编号\" width=\"15%\"></kendo-grid-column>\r\n              <kendo-grid-column field=\"name\" title=\"用户名称\" width=\"20%\"></kendo-grid-column>\r\n              <kendo-grid-column field=\"sysOrgName\" title=\"系统组织\" width=\"20%\"></kendo-grid-column>\r\n              <kendo-grid-column field=\"creatorName\" title=\"创建人\" width=\"20%\"></kendo-grid-column>\r\n              <kendo-grid-column field=\"note\" title=\"描述\" width=\"20%\"></kendo-grid-column>\r\n            </kendo-grid>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/modules/user-manager/gspuser-list/gspuser-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPUserListComponent", function() { return GSPUserListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_user_list_app_index__ = __webpack_require__("./src/app/modules/user-manager/gspuser-list/app/user-list-app.index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_util_sys_manager_util__ = __webpack_require__("./src/app/modules/common/util/sys-manager-util.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GSPUserListComponent = /** @class */ (function () {
    function GSPUserListComponent(viewModel, route, currentSession) {
        this.viewModel = viewModel;
        this.route = route;
        this.currentSession = currentSession;
    }
    GSPUserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // 清空搜索框和选中行
        this.viewModel.form.userSearch.setValue('');
        this.viewModel.uiState.selectedIds = [];
        // 框架路由进来的时候获取到funcid
        this.route.paramMap.subscribe(function (params) {
            if (params.has('funcid')) {
                _this.currentSession.funcId = params.get('funcid');
            }
        });
        this.viewModel.bindingData.changes.subscribe(function (result) {
            _this.userList = _this.viewModel.bindingData.list.toJSON();
        });
        this.viewModel.formLoad();
        // 分页模式
        this.pageSetting = {
            buttonCount: 5,
            info: false,
            pageSizes: true,
            previousNext: true
        };
        // 单选
        this.selectableSettings = {
            checkboxOnly: true,
            mode: 'single',
            enabled: true
        };
    };
    GSPUserListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-gspuser-list',
            template: __webpack_require__("./src/app/modules/user-manager/gspuser-list/gspuser-list.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_user_list_app_index__["GSPUserListViewModel"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_3__common_util_sys_manager_util__["SysManagerUtil"]])
    ], GSPUserListComponent);
    return GSPUserListComponent;
}());



/***/ }),

/***/ "./src/app/modules/user-manager/sys-org-tree/domain/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sysOrgProvider", function() { return sysOrgProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sys_org_dataservice__ = __webpack_require__("./src/app/modules/user-manager/sys-org-tree/domain/sys-org.dataservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sys_org_datastorage__ = __webpack_require__("./src/app/modules/user-manager/sys-org-tree/domain/sys-org.datastorage.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GSPSysOrgDataService", function() { return __WEBPACK_IMPORTED_MODULE_0__sys_org_dataservice__["GSPSysOrgDataService"]; });


var sysOrgProvider = [
    __WEBPACK_IMPORTED_MODULE_1__sys_org_datastorage__["GSPSysOrgDataStorage"],
    __WEBPACK_IMPORTED_MODULE_0__sys_org_dataservice__["GSPSysOrgDataService"]
];



/***/ }),

/***/ "./src/app/modules/user-manager/sys-org-tree/domain/sys-org.dataservice.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPSysOrgDataService", function() { return GSPSysOrgDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_util_sys_manager_util__ = __webpack_require__("./src/app/modules/common/util/sys-manager-util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gspuser_list_domain_gspuser_list_dataservice__ = __webpack_require__("./src/app/modules/user-manager/gspuser-list/domain/gspuser-list.dataservice.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * 系统组织restful服务
 */
var GSPSysOrgDataService = /** @class */ (function () {
    function GSPSysOrgDataService(rest, userListService, userSession) {
        this.rest = rest;
        this.userListService = userListService;
        this.userSession = userSession;
    }
    /**
     * 根据组织内码获取用户数据
     * @param dataId 组织内码
     */
    GSPSysOrgDataService.prototype.getUsersWhenOrgChanged = function (dataId) {
        if (dataId !== '') {
            this.userListService.getUsersBySysOrg(dataId);
        }
        else {
            // 获取所有用户
            this.userListService.getAllUsers();
        }
    };
    /**
     * 获取所有系统组织
     */
    GSPSysOrgDataService.prototype.getAllSysOrgs = function () {
        var allSysOrgsUrl = this.userSession.sysOrgWebApi + "/all";
        var headers = this.userSession.getHeader();
        return this.rest.get(allSysOrgsUrl, null, headers).map(function (result) {
            var data = result.map(function (sysOrg) {
                if (sysOrg.layer === 1 && sysOrg.parentId === '') {
                    sysOrg.parentId = undefined;
                }
                return sysOrg;
            });
            return data;
        });
    };
    GSPSysOrgDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["RestfulService"],
            __WEBPACK_IMPORTED_MODULE_3__gspuser_list_domain_gspuser_list_dataservice__["GSPUserListDataService"],
            __WEBPACK_IMPORTED_MODULE_0__common_util_sys_manager_util__["SysManagerUtil"]])
    ], GSPSysOrgDataService);
    return GSPSysOrgDataService;
}());



/***/ }),

/***/ "./src/app/modules/user-manager/sys-org-tree/domain/sys-org.datastorage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPSysOrgDataStorage", function() { return GSPSysOrgDataStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * 系统组织数据存储
 */
var GSPSysOrgDataStorage = /** @class */ (function (_super) {
    __extends(GSPSysOrgDataStorage, _super);
    function GSPSysOrgDataStorage() {
        return _super.call(this) || this;
    }
    GSPSysOrgDataStorage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], GSPSysOrgDataStorage);
    return GSPSysOrgDataStorage;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["MemoryStorage"]));



/***/ }),

/***/ "./src/app/modules/user-manager/sys-org-tree/sys-org-tree.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/user-manager/sys-org-tree/sys-org-tree.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n      <kendo-treeview \r\n      [nodes]=\"this.sysOrgs\"\r\n      textField=\"name\"\r\n      idField=\"id\"\r\n      parentIdField=\"parentId\"\r\n      kendoTreeViewExpandable\r\n      kendoTreeViewFlatDataBinding\r\n      kendoTreeViewSelectable\r\n      [selectBy]=\"'id'\"\r\n      [(selectedKeys)]=\"selectKeys\"\r\n      (selectionChange)=\"selectChange($event)\"\r\n      ></kendo-treeview>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/user-manager/sys-org-tree/sys-org-tree.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SysOrgTreeComponent", function() { return SysOrgTreeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__domain_sys_org_dataservice__ = __webpack_require__("./src/app/modules/user-manager/sys-org-tree/domain/sys-org.dataservice.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * 系统组织组件
 */
var SysOrgTreeComponent = /** @class */ (function () {
    function SysOrgTreeComponent(sysOrgService) {
        this.sysOrgService = sysOrgService;
        /**组织树上选择的主键 */
        this.selectKeys = [];
    }
    SysOrgTreeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sysOrgService.getAllSysOrgs().subscribe(function (result) {
            _this.sysOrgs = result;
            console.log(result);
        }, function (error) { console.log('获取系统组织列表失败'); });
    };
    /**
     * 组织树选择后出发事件，需要自己处理值是否变化
     * @param event 事件参数
     */
    SysOrgTreeComponent.prototype.selectChange = function (event) {
        // 当前选中行的内码
        var curSysOrgId = event.dataItem.id;
        // 首次选择
        if (this.selectKeys == null || this.selectKeys.length === 0) {
            this.sysOrgService.getUsersWhenOrgChanged(curSysOrgId);
        }
        else {
            // 这个事件里还不会对selectedkeys数组赋值，是上一个状态的
            var lastSysOrgId = this.selectKeys[0];
            // 变化的情况下触发
            if (curSysOrgId !== lastSysOrgId) {
                this.sysOrgService.getUsersWhenOrgChanged(curSysOrgId);
            }
        }
    };
    SysOrgTreeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sys-org-tree',
            template: __webpack_require__("./src/app/modules/user-manager/sys-org-tree/sys-org-tree.component.html"),
            styles: [__webpack_require__("./src/app/modules/user-manager/sys-org-tree/sys-org-tree.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__domain_sys_org_dataservice__["GSPSysOrgDataService"]])
    ], SysOrgTreeComponent);
    return SysOrgTreeComponent;
}());



/***/ }),

/***/ "./src/app/modules/user-manager/user-manager.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPUserManagerModule", function() { return GSPUserManagerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_grid__ = __webpack_require__("./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_treeview__ = __webpack_require__("./node_modules/@progress/kendo-angular-treeview/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gspuser_list_domain_user_list_domain_index__ = __webpack_require__("./src/app/modules/user-manager/gspuser-list/domain/user-list-domain.index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__gspuser_list_app_user_list_app_index__ = __webpack_require__("./src/app/modules/user-manager/gspuser-list/app/user-list-app.index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__gspuser_detail_domain_gspuser_detail_domain_index__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/domain/gspuser-detail-domain.index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__gspuser_detail_app_gspuser_detail_app_index__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/app/gspuser-detail-app.index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_manager_route_module__ = __webpack_require__("./src/app/modules/user-manager/user-manager.route.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__gspuser_list_gspuser_list_component__ = __webpack_require__("./src/app/modules/user-manager/gspuser-list/gspuser-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__gspuser_detail_gspuser_detail_component__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/gspuser-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__sys_org_tree_sys_org_tree_component__ = __webpack_require__("./src/app/modules/user-manager/sys-org-tree/sys-org-tree.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__gspuser_detail_user_position_user_position_component__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/user-position/user-position.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__sys_org_tree_domain__ = __webpack_require__("./src/app/modules/user-manager/sys-org-tree/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__gspuser_detail_userpassword_userpassword_component__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/userpassword/userpassword.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__gspuser_detail_userpassword_domain_userpassword_dataservice__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/userpassword/domain/userpassword.dataservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__progress_kendo_angular_layout__ = __webpack_require__("./node_modules/@progress/kendo-angular-layout/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__gspuser_detail_userpassword_domain_password__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/userpassword/domain/password.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__gspuser_detail_user_position_domain__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/user-position/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__gspuser_detail_user_position_app__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/user-position/app/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__common__ = __webpack_require__("./src/app/modules/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__gspuser_detail_help_list_help_pos_help_component__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/help/list-help/pos-help.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__gspuser_detail_help_sys_org_help_component__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/help/sys-org-help.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






/**用户列表 */


/**用户详情 */


/**路由 */



/**系统组织导航 */






// import { KendoBindingModule } from '@farris/kendo-binding';



// import { SysCommonModule } from '../common/sys-common.module';



var GSPUserManagerModule = /** @class */ (function () {
    function GSPUserManagerModule() {
    }
    GSPUserManagerModule.prototype.constrctor = function () {
    };
    GSPUserManagerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__gspuser_list_gspuser_list_component__["GSPUserListComponent"],
                __WEBPACK_IMPORTED_MODULE_12__gspuser_detail_gspuser_detail_component__["GSPUserDetailComponent"],
                __WEBPACK_IMPORTED_MODULE_13__sys_org_tree_sys_org_tree_component__["SysOrgTreeComponent"],
                __WEBPACK_IMPORTED_MODULE_14__gspuser_detail_user_position_user_position_component__["UserPositionComponent"],
                __WEBPACK_IMPORTED_MODULE_16__gspuser_detail_userpassword_userpassword_component__["UserPasswordComponent"],
                __WEBPACK_IMPORTED_MODULE_23__gspuser_detail_help_list_help_pos_help_component__["PosHelpComponent"],
                __WEBPACK_IMPORTED_MODULE_24__gspuser_detail_help_sys_org_help_component__["SysOrgHelpComponent"]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                /**Kendo-Start */
                __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_grid__["GridModule"],
                // DateInputsModule,
                __WEBPACK_IMPORTED_MODULE_18__progress_kendo_angular_layout__["LayoutModule"],
                __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_treeview__["TreeViewModule"],
                /**Kendo-End */
                // KendoBindingModule,
                __WEBPACK_IMPORTED_MODULE_10__user_manager_route_module__["GSPUserManagerRoutingModule"],
                /**命令(列表+详情) */
                __WEBPACK_IMPORTED_MODULE_5__farris_devkit__["CommandModule"].setup(__WEBPACK_IMPORTED_MODULE_7__gspuser_list_app_user_list_app_index__["allCommandHandlers"], []),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__farris_devkit__["RestfulService"],
                __WEBPACK_IMPORTED_MODULE_6__gspuser_list_domain_user_list_domain_index__["USERLIST_DOMAIN_PROVIDERS"],
                __WEBPACK_IMPORTED_MODULE_7__gspuser_list_app_user_list_app_index__["USERLIST_APP_PROVIDERS"],
                __WEBPACK_IMPORTED_MODULE_8__gspuser_detail_domain_gspuser_detail_domain_index__["USERDETAIL_DOMAIN_PROVIDERS"],
                __WEBPACK_IMPORTED_MODULE_9__gspuser_detail_app_gspuser_detail_app_index__["USERDETAIL_APP_PROVIDERS"],
                __WEBPACK_IMPORTED_MODULE_15__sys_org_tree_domain__["sysOrgProvider"],
                // 密码添加
                __WEBPACK_IMPORTED_MODULE_17__gspuser_detail_userpassword_domain_userpassword_dataservice__["UserPasswordDataService"],
                __WEBPACK_IMPORTED_MODULE_16__gspuser_detail_userpassword_userpassword_component__["UserPasswordComponent"],
                __WEBPACK_IMPORTED_MODULE_19__gspuser_detail_userpassword_domain_password__["UserPassWord"],
                // 用户和岗位关联关系
                __WEBPACK_IMPORTED_MODULE_20__gspuser_detail_user_position_domain__["userPos_Domain_Providers"],
                __WEBPACK_IMPORTED_MODULE_21__gspuser_detail_user_position_app__["userPos_App_Providers"],
                __WEBPACK_IMPORTED_MODULE_23__gspuser_detail_help_list_help_pos_help_component__["PosHelpComponent"],
                __WEBPACK_IMPORTED_MODULE_22__common__["SysManagerUtil"]
            ]
        })
    ], GSPUserManagerModule);
    return GSPUserManagerModule;
}());

//# sourceMappingURL=user-manager.module.js.map

/***/ }),

/***/ "./src/app/modules/user-manager/user-manager.route.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPUserManagerRoutingModule", function() { return GSPUserManagerRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gspuser_list_gspuser_list_component__ = __webpack_require__("./src/app/modules/user-manager/gspuser-list/gspuser-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gspuser_detail_gspuser_detail_component__ = __webpack_require__("./src/app/modules/user-manager/gspuser-detail/gspuser-detail.component.ts");



var routes = [
    /**列表页面 */
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_1__gspuser_list_gspuser_list_component__["GSPUserListComponent"] },
    /**详情页面 */
    { path: 'users/:id', component: __WEBPACK_IMPORTED_MODULE_2__gspuser_detail_gspuser_detail_component__["GSPUserDetailComponent"] },
    { path: '', redirectTo: 'users', pathMatch: 'full' },
    // { path: '/:ssid', component: GSPUserListComponent },
    { path: '**', redirectTo: 'users' }
];
/**
 * 用户管理路由模块
 */
/*
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class GSPUserManagerRoutingModule {}
*/
var GSPUserManagerRoutingModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes);


/***/ })

},[],["angular","farris","rtf","progress","rxjs"],["angular","farris","rtf","progress","rxjs"]);
//# sourceMappingURL=user-manager.module.chunk.js.map