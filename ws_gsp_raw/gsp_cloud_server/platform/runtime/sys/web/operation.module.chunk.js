webpackJsonp(["operation.module"],{

/***/ "./src/app/modules/common/entity/result-package.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ResultPackage */
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
/* unused harmony reexport ResultPackage */

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

/***/ "./src/app/modules/operation/business/app/bizobject-bindingdata.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BizobjectBindingdata", function() { return BizobjectBindingdata; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain__ = __webpack_require__("./src/app/modules/operation/business/domain/index.ts");
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



var BizobjectBindingdata = /** @class */ (function (_super) {
    __extends(BizobjectBindingdata, _super);
    function BizobjectBindingdata(injector) {
        return _super.call(this, injector) || this;
    }
    BizobjectBindingdata = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgBindingData"])({
            entity: __WEBPACK_IMPORTED_MODULE_2__domain__["BizobjectEntity"],
            repository: __WEBPACK_IMPORTED_MODULE_2__domain__["BizobjectRepository"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], BizobjectBindingdata);
    return BizobjectBindingdata;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["BindingData"]));



/***/ }),

/***/ "./src/app/modules/operation/business/app/bizobject-form.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BizobjectForm", function() { return BizobjectForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bizobject_bindingdata__ = __webpack_require__("./src/app/modules/operation/business/app/bizobject-bindingdata.ts");
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




var BizobjectForm = /** @class */ (function (_super) {
    __extends(BizobjectForm, _super);
    function BizobjectForm(injector) {
        return _super.call(this, injector) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'id',
            binding: 'id'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], BizobjectForm.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'code',
            binding: 'code'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], BizobjectForm.prototype, "code", void 0);
    BizobjectForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgForm"])({
            bindingData: __WEBPACK_IMPORTED_MODULE_3__bizobject_bindingdata__["BizobjectBindingdata"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], BizobjectForm);
    return BizobjectForm;
}(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["Form"]));



/***/ }),

/***/ "./src/app/modules/operation/business/app/bizobject-statemachine.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BizobjectStatemachine", function() { return BizobjectStatemachine; });
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


var BizobjectStatemachine = /** @class */ (function (_super) {
    __extends(BizobjectStatemachine, _super);
    function BizobjectStatemachine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgState"])({ initialState: true }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__farris_devkit__["State"])
    ], BizobjectStatemachine.prototype, "viewState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgState"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__farris_devkit__["State"])
    ], BizobjectStatemachine.prototype, "addState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgState"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__farris_devkit__["State"])
    ], BizobjectStatemachine.prototype, "editState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'viewState'; }
        }),
        __metadata("design:type", Boolean)
    ], BizobjectStatemachine.prototype, "canAdd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'viewState'; }
        }),
        __metadata("design:type", Boolean)
    ], BizobjectStatemachine.prototype, "canEdit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'addState' || context.state === 'editState'; }
        }),
        __metadata("design:type", Boolean)
    ], BizobjectStatemachine.prototype, "canCancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'viewState'; }
        }),
        __metadata("design:type", Boolean)
    ], BizobjectStatemachine.prototype, "canDelete", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'addState' || context.state === 'editState'; }
        }),
        __metadata("design:type", Boolean)
    ], BizobjectStatemachine.prototype, "canSave", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'viewState'; }
        }),
        __metadata("design:type", Boolean)
    ], BizobjectStatemachine.prototype, "canSwitch", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'addState' || context.state === 'editState'; }
        }),
        __metadata("design:type", Boolean)
    ], BizobjectStatemachine.prototype, "canInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgAction"])({ transitTo: 'addState' }),
        __metadata("design:type", Function)
    ], BizobjectStatemachine.prototype, "add", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgAction"])({ transitTo: 'editState' }),
        __metadata("design:type", Function)
    ], BizobjectStatemachine.prototype, "edit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgAction"])({ transitTo: 'viewState' }),
        __metadata("design:type", Function)
    ], BizobjectStatemachine.prototype, "view", void 0);
    BizobjectStatemachine = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgStatemachine"])()
    ], BizobjectStatemachine);
    return BizobjectStatemachine;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["StateMachine"]));



/***/ }),

/***/ "./src/app/modules/operation/business/app/bizobject-uistate.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BizobjectUistate", function() { return BizobjectUistate; });
var BizobjectUistate = /** @class */ (function () {
    function BizobjectUistate() {
    }
    return BizobjectUistate;
}());



/***/ }),

/***/ "./src/app/modules/operation/business/app/bizobject-viewmodel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BizobjectViewmodel", function() { return BizobjectViewmodel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bizobject_uistate__ = __webpack_require__("./src/app/modules/operation/business/app/bizobject-uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bizobject_bindingdata__ = __webpack_require__("./src/app/modules/operation/business/app/bizobject-bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bizobject_form__ = __webpack_require__("./src/app/modules/operation/business/app/bizobject-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bizobject_statemachine__ = __webpack_require__("./src/app/modules/operation/business/app/bizobject-statemachine.ts");
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
 * 视图模型
 */
var BizobjectViewmodel = /** @class */ (function (_super) {
    __extends(BizobjectViewmodel, _super);
    /**
     * 构造函数
     */
    function BizobjectViewmodel(injector) {
        var _this = _super.call(this, injector) || this;
        _this.uiState = _this.injector.get(__WEBPACK_IMPORTED_MODULE_2__bizobject_uistate__["BizobjectUistate"]);
        return _this;
    }
    /**
     * 表单加载
     */
    BizobjectViewmodel.prototype.formLoad = function () { };
    /**
    * 新增
    */
    BizobjectViewmodel.prototype.add = function () { };
    /**
     * 编辑
     */
    BizobjectViewmodel.prototype.edit = function () { };
    /**
     * 删除
     */
    BizobjectViewmodel.prototype.remove = function () { };
    /**
     * 保存
     */
    BizobjectViewmodel.prototype.save = function () { };
    /**
     * 取消
     */
    BizobjectViewmodel.prototype.cancel = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'formLoad'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BizobjectViewmodel.prototype, "formLoad", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'add'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BizobjectViewmodel.prototype, "add", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'edit'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BizobjectViewmodel.prototype, "edit", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'remove'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BizobjectViewmodel.prototype, "remove", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'save'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BizobjectViewmodel.prototype, "save", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'cancel'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BizobjectViewmodel.prototype, "cancel", null);
    BizobjectViewmodel = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgViewModel"])({
            children: [],
            binding: __WEBPACK_IMPORTED_MODULE_3__bizobject_bindingdata__["BizobjectBindingdata"],
            form: __WEBPACK_IMPORTED_MODULE_4__bizobject_form__["BizobjectForm"],
            stateMachine: __WEBPACK_IMPORTED_MODULE_5__bizobject_statemachine__["BizobjectStatemachine"],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], BizobjectViewmodel);
    return BizobjectViewmodel;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["ViewModel"]));



/***/ }),

/***/ "./src/app/modules/operation/business/app/handler/form-load.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLoadHandler", function() { return FormLoadHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain__ = __webpack_require__("./src/app/modules/operation/business/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bizobject_uistate__ = __webpack_require__("./src/app/modules/operation/business/app/bizobject-uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bizobject_statemachine__ = __webpack_require__("./src/app/modules/operation/business/app/bizobject-statemachine.ts");
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





var FormLoadHandler = /** @class */ (function (_super) {
    __extends(FormLoadHandler, _super);
    function FormLoadHandler(dataService, uiState, stateMachine) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.uiState = uiState;
        _this.stateMachine = stateMachine;
        return _this;
    }
    FormLoadHandler.prototype.schedule = function () {
        var _this = this;
        // 数据加载
        this.addTask('loadData', function () {
            _this.uiState.action = 'load';
            _this.dataService.getdata();
        });
    };
    FormLoadHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'formLoad'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__domain__["BizobjectService"],
            __WEBPACK_IMPORTED_MODULE_3__bizobject_uistate__["BizobjectUistate"],
            __WEBPACK_IMPORTED_MODULE_4__bizobject_statemachine__["BizobjectStatemachine"]])
    ], FormLoadHandler);
    return FormLoadHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/operation/business/app/handler/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commandHandlers", function() { return commandHandlers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__form_load_handler__ = __webpack_require__("./src/app/modules/operation/business/app/handler/form-load.handler.ts");

var commandHandlers = [
    __WEBPACK_IMPORTED_MODULE_0__form_load_handler__["FormLoadHandler"],
];



/***/ }),

/***/ "./src/app/modules/operation/business/app/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_PROVIDERS", function() { return APP_PROVIDERS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bizobject_bindingdata__ = __webpack_require__("./src/app/modules/operation/business/app/bizobject-bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bizobject_form__ = __webpack_require__("./src/app/modules/operation/business/app/bizobject-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bizobject_statemachine__ = __webpack_require__("./src/app/modules/operation/business/app/bizobject-statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bizobject_viewmodel__ = __webpack_require__("./src/app/modules/operation/business/app/bizobject-viewmodel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bizobject_uistate__ = __webpack_require__("./src/app/modules/operation/business/app/bizobject-uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__handler__ = __webpack_require__("./src/app/modules/operation/business/app/handler/index.ts");
/* unused harmony reexport BizobjectBindingdata */
/* unused harmony reexport BizobjectForm */
/* unused harmony reexport BizobjectStatemachine */
/* unused harmony reexport BizobjectViewmodel */
/* unused harmony reexport BizobjectUistate */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "commandHandlers", function() { return __WEBPACK_IMPORTED_MODULE_5__handler__["commandHandlers"]; });






var APP_PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_0__bizobject_bindingdata__["BizobjectBindingdata"],
    __WEBPACK_IMPORTED_MODULE_1__bizobject_form__["BizobjectForm"],
    __WEBPACK_IMPORTED_MODULE_2__bizobject_statemachine__["BizobjectStatemachine"],
    __WEBPACK_IMPORTED_MODULE_3__bizobject_viewmodel__["BizobjectViewmodel"],
    __WEBPACK_IMPORTED_MODULE_4__bizobject_uistate__["BizobjectUistate"]
];



/***/ }),

/***/ "./src/app/modules/operation/business/bizobject.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/operation/business/bizobject.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pt-2 pl-2\">\r\n  <h2 class=\"h4 d-inline-block\">业务对象导航</h2>\r\n  <div class=\"card\">\r\n    <kendo-treeview [nodes]=\"data\" textField=\"name\" kendoTreeViewExpandable kendoTreeViewFlatDataBinding idField=\"id\"\r\n      parentIdField=\"parentID\" kendoTreeViewSelectable [selectBy]=\"'id'\" [(selectedKeys)]=\"this.selectKeys\"\r\n      (selectionChange)=\"selectChange($event)\">\r\n    </kendo-treeview>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/operation/business/bizobject.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BizobjectComponent", function() { return BizobjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__domain__ = __webpack_require__("./src/app/modules/operation/business/domain/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BizobjectComponent = /** @class */ (function () {
    function BizobjectComponent(viewmodel) {
        this.viewmodel = viewmodel;
        this.selectKeys = [];
        this.businessChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    BizobjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.viewmodel.getdata().subscribe(function (result) {
            console.log(result);
            result.forEach(function (element) {
                if (element.parentId === null) {
                    element.parentId = undefined;
                }
            });
            _this.data = result;
        });
    };
    /**选中行改变后触发事件 */
    BizobjectComponent.prototype.selectChange = function (args) {
        var curBusId = args.dataItem.id;
        // 首次触发
        if (this.selectKeys == null || this.selectKeys.length === 0) {
            this.businessChanged.emit(curBusId);
        }
        else {
            // 这个事件里还不会对selectedkeys数组赋值，是上一个状态的
            var lastBusId = this.selectKeys[0];
            // 变化的情况下触发
            if (lastBusId !== curBusId) {
                this.businessChanged.emit(curBusId);
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], BizobjectComponent.prototype, "businessChanged", void 0);
    BizobjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bizobject',
            template: __webpack_require__("./src/app/modules/operation/business/bizobject.component.html"),
            styles: [__webpack_require__("./src/app/modules/operation/business/bizobject.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__domain__["BizobjectService"]])
    ], BizobjectComponent);
    return BizobjectComponent;
}());



/***/ }),

/***/ "./src/app/modules/operation/business/bizobject.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BizobjectModule", function() { return BizobjectModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progress_kendo_angular_treeview__ = __webpack_require__("./node_modules/@progress/kendo-angular-treeview/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_layout__ = __webpack_require__("./node_modules/@progress/kendo-angular-layout/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_grid__ = __webpack_require__("./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__domain_index__ = __webpack_require__("./src/app/modules/operation/business/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_index__ = __webpack_require__("./src/app/modules/operation/business/app/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__domain_bizobject_service__ = __webpack_require__("./src/app/modules/operation/business/domain/bizobject.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__bizobject_component__ = __webpack_require__("./src/app/modules/operation/business/bizobject.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var BizobjectModule = /** @class */ (function () {
    function BizobjectModule() {
    }
    BizobjectModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__progress_kendo_angular_treeview__["TreeViewModule"],
                __WEBPACK_IMPORTED_MODULE_5__farris_devkit__["CommandModule"].setup(__WEBPACK_IMPORTED_MODULE_8__app_index__["commandHandlers"], []),
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_layout__["LayoutModule"],
                __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_grid__["GridModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["ReactiveFormsModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__bizobject_component__["BizobjectComponent"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__domain_bizobject_service__["BizobjectService"],
                __WEBPACK_IMPORTED_MODULE_7__domain_index__["DOMAIN_PROVIDERS"],
                __WEBPACK_IMPORTED_MODULE_8__app_index__["APP_PROVIDERS"],
                __WEBPACK_IMPORTED_MODULE_8__app_index__["commandHandlers"],
                __WEBPACK_IMPORTED_MODULE_5__farris_devkit__["RestfulService"]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_10__bizobject_component__["BizobjectComponent"]]
        })
    ], BizobjectModule);
    return BizobjectModule;
}());



/***/ }),

/***/ "./src/app/modules/operation/business/domain/bizobject-datastorage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BizobjectDatastorage", function() { return BizobjectDatastorage; });
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


var BizobjectDatastorage = /** @class */ (function (_super) {
    __extends(BizobjectDatastorage, _super);
    function BizobjectDatastorage() {
        return _super.call(this) || this;
    }
    BizobjectDatastorage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], BizobjectDatastorage);
    return BizobjectDatastorage;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["MemoryStorage"]));



/***/ }),

/***/ "./src/app/modules/operation/business/domain/bizobject-repository.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BizobjectRepository", function() { return BizobjectRepository; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bizobject_datastorage__ = __webpack_require__("./src/app/modules/operation/business/domain/bizobject-datastorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_bizobject_entity__ = __webpack_require__("./src/app/modules/operation/business/domain/entities/bizobject.entity.ts");
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




var BizobjectRepository = /** @class */ (function (_super) {
    __extends(BizobjectRepository, _super);
    function BizobjectRepository(injector) {
        return _super.call(this, injector) || this;
    }
    BizobjectRepository = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRepository"])({
            from: __WEBPACK_IMPORTED_MODULE_2__bizobject_datastorage__["BizobjectDatastorage"],
            entityType: __WEBPACK_IMPORTED_MODULE_3__entities_bizobject_entity__["BizobjectEntity"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], BizobjectRepository);
    return BizobjectRepository;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["Repository"]));



/***/ }),

/***/ "./src/app/modules/operation/business/domain/bizobject.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BizobjectService", function() { return BizobjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bizobject_repository__ = __webpack_require__("./src/app/modules/operation/business/domain/bizobject-repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bizobject_datastorage__ = __webpack_require__("./src/app/modules/operation/business/domain/bizobject-datastorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common__ = __webpack_require__("./src/app/modules/common/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BizobjectService = /** @class */ (function () {
    function BizobjectService(reposity, datastorage, rest, sessionmanager) {
        this.reposity = reposity;
        this.datastorage = datastorage;
        this.rest = rest;
        this.sessionmanager = sessionmanager;
        this.url = '/api/dev/main/v1.0/business-objects';
    }
    BizobjectService.prototype.getdata = function () {
        return this.rest.get(this.url, null, this.sessionmanager.getHeader());
    };
    BizobjectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__bizobject_repository__["BizobjectRepository"],
            __WEBPACK_IMPORTED_MODULE_3__bizobject_datastorage__["BizobjectDatastorage"],
            __WEBPACK_IMPORTED_MODULE_1__farris_devkit__["RestfulService"],
            __WEBPACK_IMPORTED_MODULE_4__common__["SysManagerUtil"]])
    ], BizobjectService);
    return BizobjectService;
}());



/***/ }),

/***/ "./src/app/modules/operation/business/domain/entities/bizobject.entity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BizobjectEntity", function() { return BizobjectEntity; });
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

var BizobjectEntity = /** @class */ (function (_super) {
    __extends(BizobjectEntity, _super);
    function BizobjectEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(true),
        __metadata("design:type", String)
    ], BizobjectEntity.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], BizobjectEntity.prototype, "code", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], BizobjectEntity.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", Boolean)
    ], BizobjectEntity.prototype, "isDetail", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], BizobjectEntity.prototype, "parentID", void 0);
    return BizobjectEntity;
}(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["Entity"]));



/***/ }),

/***/ "./src/app/modules/operation/business/domain/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAIN_PROVIDERS", function() { return DOMAIN_PROVIDERS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bizobject_datastorage__ = __webpack_require__("./src/app/modules/operation/business/domain/bizobject-datastorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bizobject_repository__ = __webpack_require__("./src/app/modules/operation/business/domain/bizobject-repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bizobject_service__ = __webpack_require__("./src/app/modules/operation/business/domain/bizobject.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_bizobject_entity__ = __webpack_require__("./src/app/modules/operation/business/domain/entities/bizobject.entity.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BizobjectEntity", function() { return __WEBPACK_IMPORTED_MODULE_3__entities_bizobject_entity__["BizobjectEntity"]; });
/* unused harmony reexport BizobjectDatastorage */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BizobjectRepository", function() { return __WEBPACK_IMPORTED_MODULE_1__bizobject_repository__["BizobjectRepository"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BizobjectService", function() { return __WEBPACK_IMPORTED_MODULE_2__bizobject_service__["BizobjectService"]; });




var DOMAIN_PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_0__bizobject_datastorage__["BizobjectDatastorage"],
    __WEBPACK_IMPORTED_MODULE_1__bizobject_repository__["BizobjectRepository"],
    __WEBPACK_IMPORTED_MODULE_2__bizobject_service__["BizobjectService"],
];



/***/ }),

/***/ "./src/app/modules/operation/operation-tree/app/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationTreeAppProvider", function() { return OperationTreeAppProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operation_tree_bingdata__ = __webpack_require__("./src/app/modules/operation/operation-tree/app/operation-tree-bingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operation_tree_viewmodel__ = __webpack_require__("./src/app/modules/operation/operation-tree/app/operation-tree-viewmodel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__operation_tree_uistate__ = __webpack_require__("./src/app/modules/operation/operation-tree/app/operation-tree.uistate.ts");
/* unused harmony reexport OperationTreeBindingdata */
/* unused harmony reexport OperationTreeViewmodel */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "OperationTreeUIState", function() { return __WEBPACK_IMPORTED_MODULE_2__operation_tree_uistate__["OperationTreeUIState"]; });



var OperationTreeAppProvider = [
    __WEBPACK_IMPORTED_MODULE_0__operation_tree_bingdata__["OperationTreeBindingdata"],
    __WEBPACK_IMPORTED_MODULE_1__operation_tree_viewmodel__["OperationTreeViewmodel"],
    __WEBPACK_IMPORTED_MODULE_2__operation_tree_uistate__["OperationTreeUIState"]
];



/***/ }),

/***/ "./src/app/modules/operation/operation-tree/app/operation-tree-bingdata.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationTreeBindingdata", function() { return OperationTreeBindingdata; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_operation_entity__ = __webpack_require__("./src/app/modules/operation/operation-tree/domain/operation.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__domain_operation_tree_repository__ = __webpack_require__("./src/app/modules/operation/operation-tree/domain/operation-tree-repository.ts");
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




var OperationTreeBindingdata = /** @class */ (function (_super) {
    __extends(OperationTreeBindingdata, _super);
    function OperationTreeBindingdata(injector) {
        return _super.call(this, injector) || this;
    }
    OperationTreeBindingdata = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgBindingData"])({
            entity: __WEBPACK_IMPORTED_MODULE_2__domain_operation_entity__["OperationEntity"],
            repository: __WEBPACK_IMPORTED_MODULE_3__domain_operation_tree_repository__["OperationTreeRepository"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], OperationTreeBindingdata);
    return OperationTreeBindingdata;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["BindingData"]));



/***/ }),

/***/ "./src/app/modules/operation/operation-tree/app/operation-tree-viewmodel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationTreeViewmodel", function() { return OperationTreeViewmodel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__operation_tree_bingdata__ = __webpack_require__("./src/app/modules/operation/operation-tree/app/operation-tree-bingdata.ts");
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
 * 视图模型
 */
var OperationTreeViewmodel = /** @class */ (function (_super) {
    __extends(OperationTreeViewmodel, _super);
    /**
     * 构造函数
     */
    function OperationTreeViewmodel(injector) {
        return _super.call(this, injector) || this;
    }
    OperationTreeViewmodel = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgViewModel"])({
            children: [],
            binding: __WEBPACK_IMPORTED_MODULE_2__operation_tree_bingdata__["OperationTreeBindingdata"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], OperationTreeViewmodel);
    return OperationTreeViewmodel;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["ViewModel"]));



/***/ }),

/***/ "./src/app/modules/operation/operation-tree/app/operation-tree.uistate.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationTreeUIState", function() { return OperationTreeUIState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * 功能操作界面状态
 */
var OperationTreeUIState = /** @class */ (function () {
    function OperationTreeUIState() {
        /**
         * 表单动作，默认为编辑
         */
        this.action = 'edit';
        /**
         * 新增时是否新增明细，默认为false
         */
        this.isAddOperationGroup = false;
    }
    OperationTreeUIState = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], OperationTreeUIState);
    return OperationTreeUIState;
}());



/***/ }),

/***/ "./src/app/modules/operation/operation-tree/domain/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationTreeDomainProvider", function() { return OperationTreeDomainProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operation_tree_datastorage__ = __webpack_require__("./src/app/modules/operation/operation-tree/domain/operation-tree-datastorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operation_tree_repository__ = __webpack_require__("./src/app/modules/operation/operation-tree/domain/operation-tree-repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__operation_service__ = __webpack_require__("./src/app/modules/operation/operation-tree/domain/operation.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "OperationService", function() { return __WEBPACK_IMPORTED_MODULE_2__operation_service__["OperationService"]; });
/* unused harmony reexport OperationTreeRepository */
/* unused harmony reexport OperationTreeDataStorage */



var OperationTreeDomainProvider = [
    __WEBPACK_IMPORTED_MODULE_0__operation_tree_datastorage__["OperationTreeDataStorage"],
    __WEBPACK_IMPORTED_MODULE_1__operation_tree_repository__["OperationTreeRepository"],
    __WEBPACK_IMPORTED_MODULE_2__operation_service__["OperationService"]
];



/***/ }),

/***/ "./src/app/modules/operation/operation-tree/domain/operation-tree-datastorage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationTreeDataStorage", function() { return OperationTreeDataStorage; });
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


var OperationTreeDataStorage = /** @class */ (function (_super) {
    __extends(OperationTreeDataStorage, _super);
    function OperationTreeDataStorage() {
        return _super.call(this) || this;
    }
    OperationTreeDataStorage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], OperationTreeDataStorage);
    return OperationTreeDataStorage;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["MemoryStorage"]));



/***/ }),

/***/ "./src/app/modules/operation/operation-tree/domain/operation-tree-repository.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationTreeRepository", function() { return OperationTreeRepository; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__operation_entity__ = __webpack_require__("./src/app/modules/operation/operation-tree/domain/operation.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__operation_tree_datastorage__ = __webpack_require__("./src/app/modules/operation/operation-tree/domain/operation-tree-datastorage.ts");
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




var OperationTreeRepository = /** @class */ (function (_super) {
    __extends(OperationTreeRepository, _super);
    function OperationTreeRepository(injector) {
        return _super.call(this, injector) || this;
    }
    OperationTreeRepository = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRepository"])({
            from: __WEBPACK_IMPORTED_MODULE_3__operation_tree_datastorage__["OperationTreeDataStorage"],
            entityType: __WEBPACK_IMPORTED_MODULE_2__operation_entity__["OperationEntity"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], OperationTreeRepository);
    return OperationTreeRepository;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["Repository"]));



/***/ }),

/***/ "./src/app/modules/operation/operation-tree/domain/operation.entity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationEntity", function() { return OperationEntity; });
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
 * 操作实体
 */
var OperationEntity = /** @class */ (function (_super) {
    __extends(OperationEntity, _super);
    function OperationEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])({
            primary: true
        }),
        __metadata("design:type", String)
    ], OperationEntity.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", Number)
    ], OperationEntity.prototype, "parentId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], OperationEntity.prototype, "code", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], OperationEntity.prototype, "businessId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], OperationEntity.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], OperationEntity.prototype, "note", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", Number)
    ], OperationEntity.prototype, "type", void 0);
    return OperationEntity;
}(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["Entity"]));



/***/ }),

/***/ "./src/app/modules/operation/operation-tree/domain/operation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationService", function() { return OperationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common__ = __webpack_require__("./src/app/modules/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__operation_tree_datastorage__ = __webpack_require__("./src/app/modules/operation/operation-tree/domain/operation-tree-datastorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__operation_detail_domain__ = __webpack_require__("./src/app/modules/operation/operation-tree/operation-detail/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app__ = __webpack_require__("./src/app/modules/operation/operation-tree/app/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**功能操作的取数服务 */
var OperationService = /** @class */ (function () {
    function OperationService(rest, sysUtil, opTreeStore, opDetailStore, opDetailRep, opTreeState) {
        this.rest = rest;
        this.sysUtil = sysUtil;
        this.opTreeStore = opTreeStore;
        this.opDetailStore = opDetailStore;
        this.opDetailRep = opDetailRep;
        this.opTreeState = opTreeState;
    }
    /**
     * 新增一个业务操作,用于功能操作详情页面
     */
    OperationService.prototype.addOperation = function (data) {
        this.opDetailStore.load([data]);
    };
    /**
     * 删除一个业务操作
     * @param deleteOpId 待删除的业务操作内码
     */
    OperationService.prototype.deleteOperationById = function (deleteOpId) {
        var headers = this.sysUtil.getHeader();
        var operationUrl = this.sysUtil.operationWebApi + '/' + deleteOpId;
        return this.rest.delete(operationUrl, null, headers);
    };
    /**
     * 保存一个业务操作
     */
    OperationService.prototype.saveOperation = function () {
        var curOp = this.opDetailRep.getAllEntities()[0];
        console.log(curOp.data);
        var headers = this.sysUtil.getHeader();
        var operationUrl = this.sysUtil.operationWebApi;
        // 新增
        if (this.opTreeState.action === 'add') {
            return this.rest.post(operationUrl, curOp.data, null, headers);
        }
        // 编辑
        if (this.opTreeState.action === 'edit') {
            return this.rest.put(operationUrl, curOp.data, null, headers);
        }
    };
    /**
     * 根据功能操作内码获取完整的功能操作实体
     * @param operationId 功能操作的内码
     */
    OperationService.prototype.getOperationById = function (operationId) {
        var _this = this;
        var headers = this.sysUtil.getHeader();
        var operationUrl = this.sysUtil.operationWebApi + '/' + operationId;
        this.rest.get(operationUrl, null, headers)
            .map(function (item) {
            item['farrisId'] = _this.sysUtil.getGuid36();
            return item;
        })
            .subscribe(function (result) {
            console.log(result);
            _this.opDetailStore.load([result]);
        }, function (error) {
            alert(error.error.Message);
            console.log(error);
        });
    };
    /**
     * 根据业务对象获取相应的业务操作列表
     * @param busId 业务对象内码
     */
    OperationService.prototype.getOperationsByBusId = function (busId) {
        var _this = this;
        // 先清空
        this.opTreeStore.clear();
        var operationUrl = this.sysUtil.operationWebApi + '/business/' + busId;
        var headers = this.sysUtil.getHeader();
        this.rest.get(operationUrl, null, headers).map(function (result) {
            var operationList = result.map(function (item) {
                if (item.parentId === null || item.parentId === '') {
                    item.parentId = undefined;
                }
                return item;
            });
            return operationList;
        }).subscribe(function (result) {
            _this.opTreeStore.load(result);
        }, function (error) {
            alert(error.error.Message);
            console.log(error);
        });
    };
    OperationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["RestfulService"],
            __WEBPACK_IMPORTED_MODULE_2__common__["SysManagerUtil"],
            __WEBPACK_IMPORTED_MODULE_3__operation_tree_datastorage__["OperationTreeDataStorage"],
            __WEBPACK_IMPORTED_MODULE_4__operation_detail_domain__["OperationDetailDataStorage"],
            __WEBPACK_IMPORTED_MODULE_4__operation_detail_domain__["OperationDetailRepository"],
            __WEBPACK_IMPORTED_MODULE_5__app__["OperationTreeUIState"]])
    ], OperationService);
    return OperationService;
}());



/***/ }),

/***/ "./src/app/modules/operation/operation-tree/operation-detail/app/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationDetailAppProvider", function() { return OperationDetailAppProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operation_detail_viewmodel__ = __webpack_require__("./src/app/modules/operation/operation-tree/operation-detail/app/operation-detail-viewmodel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operation_detail_bingdata__ = __webpack_require__("./src/app/modules/operation/operation-tree/operation-detail/app/operation-detail-bingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__operation_detail_form__ = __webpack_require__("./src/app/modules/operation/operation-tree/operation-detail/app/operation-detail.form.ts");
/* unused harmony reexport OperationDetailBindingdata */
/* unused harmony reexport OperationDetailViewmodel */
/* unused harmony reexport OperationDetailForm */



var OperationDetailAppProvider = [
    __WEBPACK_IMPORTED_MODULE_1__operation_detail_bingdata__["OperationDetailBindingdata"],
    __WEBPACK_IMPORTED_MODULE_2__operation_detail_form__["OperationDetailForm"],
    __WEBPACK_IMPORTED_MODULE_0__operation_detail_viewmodel__["OperationDetailViewmodel"],
];



/***/ }),

/***/ "./src/app/modules/operation/operation-tree/operation-detail/app/operation-detail-bingdata.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationDetailBindingdata", function() { return OperationDetailBindingdata; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_operation_detail_repository__ = __webpack_require__("./src/app/modules/operation/operation-tree/operation-detail/domain/operation-detail-repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__domain_operation_detail_entity__ = __webpack_require__("./src/app/modules/operation/operation-tree/operation-detail/domain/operation-detail.entity.ts");
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




var OperationDetailBindingdata = /** @class */ (function (_super) {
    __extends(OperationDetailBindingdata, _super);
    function OperationDetailBindingdata(injector) {
        return _super.call(this, injector) || this;
    }
    OperationDetailBindingdata = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgBindingData"])({
            entity: __WEBPACK_IMPORTED_MODULE_3__domain_operation_detail_entity__["OperationDetailEntity"],
            repository: __WEBPACK_IMPORTED_MODULE_2__domain_operation_detail_repository__["OperationDetailRepository"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], OperationDetailBindingdata);
    return OperationDetailBindingdata;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["BindingData"]));



/***/ }),

/***/ "./src/app/modules/operation/operation-tree/operation-detail/app/operation-detail-viewmodel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationDetailViewmodel", function() { return OperationDetailViewmodel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__operation_detail_bingdata__ = __webpack_require__("./src/app/modules/operation/operation-tree/operation-detail/app/operation-detail-bingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__operation_detail_form__ = __webpack_require__("./src/app/modules/operation/operation-tree/operation-detail/app/operation-detail.form.ts");
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
 * 视图模型
 */
var OperationDetailViewmodel = /** @class */ (function (_super) {
    __extends(OperationDetailViewmodel, _super);
    /**
     * 构造函数
     */
    function OperationDetailViewmodel(injector) {
        return _super.call(this, injector) || this;
    }
    OperationDetailViewmodel = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgViewModel"])({
            children: [],
            binding: __WEBPACK_IMPORTED_MODULE_2__operation_detail_bingdata__["OperationDetailBindingdata"],
            form: __WEBPACK_IMPORTED_MODULE_3__operation_detail_form__["OperationDetailForm"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], OperationDetailViewmodel);
    return OperationDetailViewmodel;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["ViewModel"]));



/***/ }),

/***/ "./src/app/modules/operation/operation-tree/operation-detail/app/operation-detail.form.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationDetailForm", function() { return OperationDetailForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__operation_detail_bingdata__ = __webpack_require__("./src/app/modules/operation/operation-tree/operation-detail/app/operation-detail-bingdata.ts");
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
 * 功能操作详情表单
 */
var OperationDetailForm = /** @class */ (function (_super) {
    __extends(OperationDetailForm, _super);
    function OperationDetailForm(injector) {
        return _super.call(this, injector) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'id',
            binding: 'id'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], OperationDetailForm.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'code',
            binding: 'code'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], OperationDetailForm.prototype, "code", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'name',
            binding: 'name'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], OperationDetailForm.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'note',
            binding: 'note'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], OperationDetailForm.prototype, "note", void 0);
    OperationDetailForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgForm"])({
            bindingData: __WEBPACK_IMPORTED_MODULE_3__operation_detail_bingdata__["OperationDetailBindingdata"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], OperationDetailForm);
    return OperationDetailForm;
}(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["Form"]));



/***/ }),

/***/ "./src/app/modules/operation/operation-tree/operation-detail/domain/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationDetailDomainProvider", function() { return OperationDetailDomainProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operation_detail_datastorage__ = __webpack_require__("./src/app/modules/operation/operation-tree/operation-detail/domain/operation-detail-datastorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operation_detail_repository__ = __webpack_require__("./src/app/modules/operation/operation-tree/operation-detail/domain/operation-detail-repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__operation_detail_entity__ = __webpack_require__("./src/app/modules/operation/operation-tree/operation-detail/domain/operation-detail.entity.ts");
/* unused harmony reexport OperationDetailEntity */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "OperationDetailRepository", function() { return __WEBPACK_IMPORTED_MODULE_1__operation_detail_repository__["OperationDetailRepository"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "OperationDetailDataStorage", function() { return __WEBPACK_IMPORTED_MODULE_0__operation_detail_datastorage__["OperationDetailDataStorage"]; });



var OperationDetailDomainProvider = [
    __WEBPACK_IMPORTED_MODULE_0__operation_detail_datastorage__["OperationDetailDataStorage"],
    __WEBPACK_IMPORTED_MODULE_1__operation_detail_repository__["OperationDetailRepository"],
];



/***/ }),

/***/ "./src/app/modules/operation/operation-tree/operation-detail/domain/operation-detail-datastorage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationDetailDataStorage", function() { return OperationDetailDataStorage; });
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


var OperationDetailDataStorage = /** @class */ (function (_super) {
    __extends(OperationDetailDataStorage, _super);
    function OperationDetailDataStorage() {
        return _super.call(this) || this;
    }
    OperationDetailDataStorage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], OperationDetailDataStorage);
    return OperationDetailDataStorage;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["MemoryStorage"]));



/***/ }),

/***/ "./src/app/modules/operation/operation-tree/operation-detail/domain/operation-detail-repository.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationDetailRepository", function() { return OperationDetailRepository; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__operation_detail_datastorage__ = __webpack_require__("./src/app/modules/operation/operation-tree/operation-detail/domain/operation-detail-datastorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__operation_detail_entity__ = __webpack_require__("./src/app/modules/operation/operation-tree/operation-detail/domain/operation-detail.entity.ts");
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




var OperationDetailRepository = /** @class */ (function (_super) {
    __extends(OperationDetailRepository, _super);
    function OperationDetailRepository(injector) {
        return _super.call(this, injector) || this;
    }
    OperationDetailRepository = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRepository"])({
            from: __WEBPACK_IMPORTED_MODULE_2__operation_detail_datastorage__["OperationDetailDataStorage"],
            entityType: __WEBPACK_IMPORTED_MODULE_3__operation_detail_entity__["OperationDetailEntity"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], OperationDetailRepository);
    return OperationDetailRepository;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["Repository"]));



/***/ }),

/***/ "./src/app/modules/operation/operation-tree/operation-detail/domain/operation-detail.entity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationDetailEntity", function() { return OperationDetailEntity; });
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
 * 操作实体
 */
var OperationDetailEntity = /** @class */ (function (_super) {
    __extends(OperationDetailEntity, _super);
    function OperationDetailEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])({
            primary: true
        }),
        __metadata("design:type", String)
    ], OperationDetailEntity.prototype, "farrisId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], OperationDetailEntity.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", Number)
    ], OperationDetailEntity.prototype, "parentId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], OperationDetailEntity.prototype, "code", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], OperationDetailEntity.prototype, "businessId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], OperationDetailEntity.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], OperationDetailEntity.prototype, "note", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", Number)
    ], OperationDetailEntity.prototype, "type", void 0);
    return OperationDetailEntity;
}(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["Entity"]));



/***/ }),

/***/ "./src/app/modules/operation/operation-tree/operation-detail/operation-datail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationDetailComponent", function() { return OperationDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_util_sys_manager_util__ = __webpack_require__("./src/app/modules/common/util/sys-manager-util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_operation_detail_viewmodel__ = __webpack_require__("./src/app/modules/operation/operation-tree/operation-detail/app/operation-detail-viewmodel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__domain__ = __webpack_require__("./src/app/modules/operation/operation-tree/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app__ = __webpack_require__("./src/app/modules/operation/operation-tree/app/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OperationDetailComponent = /** @class */ (function () {
    function OperationDetailComponent(opDetailVm, opService, opTreeState, sysUtil) {
        this.opDetailVm = opDetailVm;
        this.opService = opService;
        this.opTreeState = opTreeState;
        this.sysUtil = sysUtil;
        this.selectKeys = [];
        this.canEditId = false;
    }
    OperationDetailComponent.prototype.ngOnInit = function () {
    };
    OperationDetailComponent.prototype.ngOnChanges = function (changes) {
        // 加载数据
        if (changes['operationId']) {
            // 新增的，区分明细和分组
            if (this.opTreeState.action === 'add') {
                var op = {
                    // Farris UI的主键策略
                    farrisId: this.sysUtil.getGuid36(),
                    id: this.operationId,
                    businessId: this.opTreeState.curBusId
                };
                // 新增时允许修改内码
                this.canEditId = true;
                if (this.opTreeState.isAddOperationGroup) {
                    op['type'] = 0;
                }
                else {
                    op['type'] = 1;
                    op['parentId'] = this.opTreeState.parentId;
                }
                this.opService.addOperation(op);
            }
            // 编辑
            if (this.opTreeState.action === 'edit') {
                this.canEditId = false;
                this.opService.getOperationById(this.operationId);
            }
        }
    };
    /** */
    OperationDetailComponent.prototype.addOpGroup = function () { };
    OperationDetailComponent.prototype.addOpDetail = function () { };
    OperationDetailComponent.prototype.deleteOpDetail = function (opId) { };
    OperationDetailComponent.prototype.modifyOpDetail = function (operation) { };
    OperationDetailComponent.prototype.getOperationById = function (opId) { };
    OperationDetailComponent.prototype.whenSelect = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], OperationDetailComponent.prototype, "operationId", void 0);
    OperationDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-operation-detail',
            template: __webpack_require__("./src/app/modules/operation/operation-tree/operation-detail/operation-detail.component.html"),
            styles: [__webpack_require__("./src/app/modules/operation/operation-tree/operation-detail/operation-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_operation_detail_viewmodel__["OperationDetailViewmodel"],
            __WEBPACK_IMPORTED_MODULE_3__domain__["OperationService"],
            __WEBPACK_IMPORTED_MODULE_4__app__["OperationTreeUIState"],
            __WEBPACK_IMPORTED_MODULE_0__common_util_sys_manager_util__["SysManagerUtil"]])
    ], OperationDetailComponent);
    return OperationDetailComponent;
}());



/***/ }),

/***/ "./src/app/modules/operation/operation-tree/operation-detail/operation-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/operation/operation-tree/operation-detail/operation-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"k-form p-2\" [formGroup]=\"opDetailVm.form\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12 col-md-6 pb-1\">\r\n        <label class=\"k-form-field\">\r\n            <span>标识 </span>\r\n            <div class=\"d-flex\">\r\n              <input formControlName=\"id\"  class=\"k-textbox w-100\" [readOnly]=\"!this.canEditId\"/>\r\n            </div>\r\n          </label>\r\n      <label class=\"k-form-field\">\r\n        <span>编号 </span>\r\n        <div class=\"d-flex\">\r\n          <input formControlName=\"code\" class=\"k-textbox w-100\" />\r\n        </div>\r\n      </label>\r\n      <label class=\"k-form-field\">\r\n          <span>名称 </span>\r\n          <div class=\"d-flex\">\r\n            <input formControlName=\"name\" class=\"k-textbox py-1 px-2 w-100\" />\r\n          </div>\r\n        </label>\r\n        <label class=\"k-form-field\">\r\n          <span>描述 </span>\r\n          <div class=\"d-flex\">\r\n          <textarea kendoTextArea formControlName=\"note\" rows=\"2\" class=\"k-textarea w-100\"></textarea>\r\n          </div>\r\n        </label>\r\n    </div>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "./src/app/modules/operation/operation-tree/operation-tree.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/operation/operation-tree/operation-tree.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-column g-main pt-2 mb-2 mr-2\">\r\n  <div class=\"clearfix\">\r\n    <h1 class=\"h4 d-inline-block\">功能操作</h1>\r\n    <div class=\"float-right\">\r\n      <button class=\"btn btn-sm btn-default\" (click)=\"addOpGroup()\">新增功能分组</button>\r\n      <button class=\"btn btn-sm btn-default\" (click)=\"addOpDetail()\">新增功能操作</button>\r\n      <button class=\"btn btn-sm btn-default\" (click)=\"deleteOpDetail()\">删除</button>\r\n      <button class=\"btn btn-sm btn-default\" (click)=\"saveOpDetail()\">保存</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"flex-auto d-flex\">\r\n    <kendo-splitter orientation=\"vertical\">\r\n      <kendo-splitter-pane style=\"height: 40%;\">\r\n          <kendo-treeview [nodes]=\"this.operationTreeList\" textField=\"name\" idField=\"id\" parentIdField=\"parentId\"\r\n            kendoTreeViewExpandable kendoTreeViewFlatDataBinding kendoTreeViewSelectable [selectBy]=\"'id'\"\r\n            [expandBy]=\"'id'\"\r\n            [expandedKeys]=\"expandKeys\"\r\n            \r\n            [(selectedKeys)]=\"selectKeys\" (selectionChange)=\"selectOpChanged($event)\">\r\n          </kendo-treeview>\r\n      </kendo-splitter-pane>\r\n      <kendo-splitter-pane style=\"height: 60%;\">\r\n        <div *ngIf=\"isOperationSelected\">\r\n          <app-operation-detail [operationId]=\"this.curSelectedOpId\"></app-operation-detail>\r\n        </div>\r\n      </kendo-splitter-pane>\r\n    </kendo-splitter>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/operation/operation-tree/operation-tree.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationTreeComponent", function() { return OperationTreeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_operation_tree_viewmodel__ = __webpack_require__("./src/app/modules/operation/operation-tree/app/operation-tree-viewmodel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain__ = __webpack_require__("./src/app/modules/operation/operation-tree/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common__ = __webpack_require__("./src/app/modules/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app__ = __webpack_require__("./src/app/modules/operation/operation-tree/app/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__operation_detail_operation_datail_component__ = __webpack_require__("./src/app/modules/operation/operation-tree/operation-detail/operation-datail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OperationTreeComponent = /** @class */ (function () {
    function OperationTreeComponent(opTreeVm, opService, sysUtil, opTreeState) {
        this.opTreeVm = opTreeVm;
        this.opService = opService;
        this.sysUtil = sysUtil;
        this.opTreeState = opTreeState;
        this.isOperationSelected = false;
        this.selectKeys = [];
        this.expandKeys = [];
    }
    OperationTreeComponent.prototype.ngOnInit = function () {
        this.expandKeys = [];
    };
    /**
     * 新增分组信息
     */
    OperationTreeComponent.prototype.addOpGroup = function () {
        if (!this.curBusId) {
            alert('新增功能分组时需要请选择隶属的业务对象！');
            return;
        }
        // 新增的时候加载详情页面,务必初始化为new
        this.isOperationSelected = true;
        // getGuid36（）仅仅为了触发进入详情页面,加载详情页面的时候主要是按照UI对象处理逻辑
        this.opTreeState.action = 'add';
        this.opTreeState.isAddOperationGroup = true;
        this.opTreeState.curBusId = this.curBusId;
        this.curSelectedOpId = this.sysUtil.getGuid36();
    };
    /**
     * 新增明细信息
     */
    OperationTreeComponent.prototype.addOpDetail = function () {
        // 业务对象下是否有数据
        if (this.operationTreeList == null || this.operationTreeList.length === 0) {
            alert('当前业务对象下没有功能分组，请先新增功能分组！');
            return;
        }
        // 是否选中了相应的业务操作数据
        if (this.selectKeys === null || this.selectKeys.length === 0) {
            alert('请选择需要新增功能操作的功能分组！');
            return;
        }
        // 选中的是否为功能分组信息
        var curOpId = this.selectKeys[0];
        var curOpEntity = this.opTreeVm.bindingData.list.findById(curOpId);
        if (curOpEntity['type'] === 1) {
            alert('功能操作下不允许添加功能操作！');
            return;
        }
        this.isOperationSelected = true;
        // getGuid36（）仅仅为了触发进入详情页面,加载详情页面的时候主要是按照UI对象处理逻辑
        this.opTreeState.action = 'add';
        this.opTreeState.isAddOperationGroup = false;
        this.opTreeState.curBusId = this.curBusId;
        this.opTreeState.parentId = curOpId;
        this.curSelectedOpId = this.sysUtil.getGuid36();
    };
    OperationTreeComponent.prototype.deleteOpDetail = function () {
        var _this = this;
        if (this.selectKeys === null || this.selectKeys.length === 0) {
            alert('请选择需要删除的功能操作！');
            return;
        }
        var curOpId = this.selectKeys[0];
        var curOpEntity = this.opTreeVm.bindingData.list.findById(curOpId);
        // 如果不含有下级，应该可删，需要判断是否有下级
        if (curOpEntity['type'] === 0) {
            var hasChildren = this.opTreeVm.bindingData.list.toJSON().find(function (item) { return item.parentId === curOpId; });
            if (hasChildren) {
                alert('功能分组下有操作信息不允许删除!');
                return;
            }
        }
        this.opService.deleteOperationById(curOpId).subscribe(function (result) {
            // 删除成功后刷新主界面,删除后定位问题
            _this.opService.getOperationsByBusId(_this.curBusId);
            // 把详情页面关闭
            _this.isOperationSelected = false;
        }, function (error) {
            console.log(error);
            console.log('删除业务操作时出错');
        });
    };
    /**保存一个业务操作 */
    OperationTreeComponent.prototype.saveOpDetail = function () {
        var _this = this;
        // 未加载无需保存
        if (!this.opDetailCom) {
            return;
        }
        this.opService.saveOperation()
            .subscribe(function (result) {
            console.log(result);
            // 新增或者编辑成功后刷新主界面
            _this.opService.getOperationsByBusId(_this.curBusId);
            // 新增的时候，选择内码导航
            if (_this.opTreeState.action === 'add') {
                var newOpId = result['id'];
                var parentId = result['parentId'];
                _this.selectKeys = [newOpId];
                if (parentId && parentId !== '') {
                    if (_this.expandKeys.includes(parentId) === false) {
                        _this.expandKeys.push(parentId);
                    }
                }
            }
            // 进入编辑状态，且不可编辑内码
            _this.opDetailCom.canEditId = false;
            _this.opTreeState.action = 'edit';
            alert('保存成功');
        }, function (error) {
            alert(error.error.Message);
            console.log(error);
        });
    };
    /**
     * 业务操作选择变化后
     * @param args 业务操作参数
     */
    OperationTreeComponent.prototype.selectOpChanged = function (args) {
        // 先打开详情页面
        this.isOperationSelected = true;
        var curOpId = args.dataItem.id;
        var isEmitDetail = false;
        // 首次触发
        if (this.selectKeys == null || this.selectKeys.length === 0) {
            // 触发详情页重新获取数据
            isEmitDetail = true;
        }
        else {
            // 这个事件里还不会对selectedkeys数组赋值，是上一个状态的
            var lastOpId = this.selectKeys[0];
            // 变化的情况下触发
            if (curOpId !== lastOpId) {
                isEmitDetail = true;
            }
        }
        // 需要触发详情页面
        if (isEmitDetail) {
            // 进入编辑
            this.opTreeState.action = 'edit';
            this.curSelectedOpId = curOpId;
        }
    };
    /**
     * 当外界业务对象改变后，需要加载指定的业务操作列表
     * @param busId 业务对象内码
     */
    OperationTreeComponent.prototype.loadOperationsByBusId = function (busId) {
        var _this = this;
        // 属性赋值
        this.curBusId = busId;
        // 状态清空
        this.isOperationSelected = false;
        this.selectKeys = [];
        // 这个地方会load递增，但是界面上的数据不会多次刷新
        this.opTreeVm.bindingData.changes.filter(function (item) { return item.type === 'Load'; }).subscribe(function (result) {
            _this.operationTreeList = _this.opTreeVm.bindingData.list.toJSON();
        });
        this.opService.getOperationsByBusId(busId);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__operation_detail_operation_datail_component__["OperationDetailComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__operation_detail_operation_datail_component__["OperationDetailComponent"])
    ], OperationTreeComponent.prototype, "opDetailCom", void 0);
    OperationTreeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-operation-tree',
            template: __webpack_require__("./src/app/modules/operation/operation-tree/operation-tree.component.html"),
            styles: [__webpack_require__("./src/app/modules/operation/operation-tree/operation-tree.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_operation_tree_viewmodel__["OperationTreeViewmodel"],
            __WEBPACK_IMPORTED_MODULE_2__domain__["OperationService"],
            __WEBPACK_IMPORTED_MODULE_3__common__["SysManagerUtil"],
            __WEBPACK_IMPORTED_MODULE_4__app__["OperationTreeUIState"]])
    ], OperationTreeComponent);
    return OperationTreeComponent;
}());



/***/ }),

/***/ "./src/app/modules/operation/operation.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/operation/operation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex g-main\">\r\n      <div class=\"col-4\">\r\n        <app-bizobject (businessChanged)=\"whenBusChanged($event)\"></app-bizobject>\r\n      </div>\r\n    <div class=\"col-8\">\r\n      <app-operation-tree></app-operation-tree>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/modules/operation/operation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationComponent", function() { return OperationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operation_tree_operation_tree_component__ = __webpack_require__("./src/app/modules/operation/operation-tree/operation-tree.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OperationComponent = /** @class */ (function () {
    function OperationComponent() {
    }
    OperationComponent.prototype.ngOnInit = function () {
    };
    OperationComponent.prototype.whenBusChanged = function (busId) {
        this.operationTree.loadOperationsByBusId(busId);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__operation_tree_operation_tree_component__["OperationTreeComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__operation_tree_operation_tree_component__["OperationTreeComponent"])
    ], OperationComponent.prototype, "operationTree", void 0);
    OperationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-operation',
            template: __webpack_require__("./src/app/modules/operation/operation.component.html"),
            styles: [__webpack_require__("./src/app/modules/operation/operation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OperationComponent);
    return OperationComponent;
}());



/***/ }),

/***/ "./src/app/modules/operation/operation.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPOperationModule", function() { return GSPOperationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_grid__ = __webpack_require__("./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_treeview__ = __webpack_require__("./node_modules/@progress/kendo-angular-treeview/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common__ = __webpack_require__("./src/app/modules/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__operation_component__ = __webpack_require__("./src/app/modules/operation/operation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__operation_tree_operation_tree_component__ = __webpack_require__("./src/app/modules/operation/operation-tree/operation-tree.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__operation_router_module__ = __webpack_require__("./src/app/modules/operation/operation.router.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__business_bizobject_module__ = __webpack_require__("./src/app/modules/operation/business/bizobject.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__operation_tree_domain__ = __webpack_require__("./src/app/modules/operation/operation-tree/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__operation_tree_app__ = __webpack_require__("./src/app/modules/operation/operation-tree/app/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__operation_tree_operation_detail_operation_datail_component__ = __webpack_require__("./src/app/modules/operation/operation-tree/operation-detail/operation-datail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__operation_tree_operation_detail_domain__ = __webpack_require__("./src/app/modules/operation/operation-tree/operation-detail/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__operation_tree_operation_detail_app__ = __webpack_require__("./src/app/modules/operation/operation-tree/operation-detail/app/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__progress_kendo_angular_layout__ = __webpack_require__("./node_modules/@progress/kendo-angular-layout/dist/es/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var GSPOperationModule = /** @class */ (function () {
    function GSPOperationModule() {
    }
    GSPOperationModule.prototype.constrctor = function () {
    };
    GSPOperationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__operation_component__["OperationComponent"],
                __WEBPACK_IMPORTED_MODULE_8__operation_tree_operation_tree_component__["OperationTreeComponent"],
                __WEBPACK_IMPORTED_MODULE_13__operation_tree_operation_detail_operation_datail_component__["OperationDetailComponent"]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_grid__["GridModule"],
                __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_treeview__["TreeViewModule"],
                __WEBPACK_IMPORTED_MODULE_16__progress_kendo_angular_layout__["LayoutModule"],
                __WEBPACK_IMPORTED_MODULE_9__operation_router_module__["OperationRoutingModule"],
                __WEBPACK_IMPORTED_MODULE_10__business_bizobject_module__["BizobjectModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__farris_devkit__["RestfulService"],
                __WEBPACK_IMPORTED_MODULE_6__common__["SysManagerUtil"],
                __WEBPACK_IMPORTED_MODULE_11__operation_tree_domain__["OperationTreeDomainProvider"],
                __WEBPACK_IMPORTED_MODULE_12__operation_tree_app__["OperationTreeAppProvider"],
                __WEBPACK_IMPORTED_MODULE_14__operation_tree_operation_detail_domain__["OperationDetailDomainProvider"],
                __WEBPACK_IMPORTED_MODULE_15__operation_tree_operation_detail_app__["OperationDetailAppProvider"],
            ]
        })
    ], GSPOperationModule);
    return GSPOperationModule;
}());

//# sourceMappingURL=operation.module.js.map

/***/ }),

/***/ "./src/app/modules/operation/operation.router.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationRoutingModule", function() { return OperationRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operation_component__ = __webpack_require__("./src/app/modules/operation/operation.component.ts");


var routes = [
    { path: 'operations', component: __WEBPACK_IMPORTED_MODULE_1__operation_component__["OperationComponent"] },
    { path: '', redirectTo: 'operations', pathMatch: 'full' },
    { path: '**', redirectTo: 'operations' }
];
var OperationRoutingModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes);


/***/ })

},[],["angular","farris","rtf","progress","rxjs"],["angular","farris","rtf","progress","rxjs"]);
//# sourceMappingURL=operation.module.chunk.js.map