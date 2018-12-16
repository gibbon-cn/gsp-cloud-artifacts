webpackJsonp(["authfield.module"],{

/***/ "./src/app/modules/authfield/app/authfield-bindingdata.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthFieldBindingdata", function() { return AuthFieldBindingdata; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain__ = __webpack_require__("./src/app/modules/authfield/domain/index.ts");
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



var AuthFieldBindingdata = /** @class */ (function (_super) {
    __extends(AuthFieldBindingdata, _super);
    function AuthFieldBindingdata(injector) {
        return _super.call(this, injector) || this;
    }
    AuthFieldBindingdata = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgBindingData"])({
            entity: __WEBPACK_IMPORTED_MODULE_2__domain__["AuthFieldEntity"],
            repository: __WEBPACK_IMPORTED_MODULE_2__domain__["AuthFieldRepository"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], AuthFieldBindingdata);
    return AuthFieldBindingdata;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["BindingData"]));



/***/ }),

/***/ "./src/app/modules/authfield/app/authfield-form.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthFieldForm", function() { return AuthFieldForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authfield_bindingdata__ = __webpack_require__("./src/app/modules/authfield/app/authfield-bindingdata.ts");
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




var AuthFieldForm = /** @class */ (function (_super) {
    __extends(AuthFieldForm, _super);
    function AuthFieldForm(injector) {
        return _super.call(this, injector) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'id',
            binding: 'id'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], AuthFieldForm.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'code',
            binding: 'code'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], AuthFieldForm.prototype, "code", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'name',
            binding: 'name'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], AuthFieldForm.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'dataSourceId',
            binding: 'dataSourceId'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], AuthFieldForm.prototype, "dataSourceId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'dataSource',
            binding: 'dataFetcher.dataSource'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], AuthFieldForm.prototype, "dataSource", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'datakey',
            binding: 'dataFetcher.key'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], AuthFieldForm.prototype, "datakey", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'dataFetcher',
            binding: 'dataFetcher'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], AuthFieldForm.prototype, "dataFetcher", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'listElements',
            binding: 'dataFetcher.listElements'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], AuthFieldForm.prototype, "listElements", void 0);
    AuthFieldForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgForm"])({
            bindingData: __WEBPACK_IMPORTED_MODULE_3__authfield_bindingdata__["AuthFieldBindingdata"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], AuthFieldForm);
    return AuthFieldForm;
}(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["Form"]));



/***/ }),

/***/ "./src/app/modules/authfield/app/authfield-statemachine.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthFieldStatemachine", function() { return AuthFieldStatemachine; });
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


var AuthFieldStatemachine = /** @class */ (function (_super) {
    __extends(AuthFieldStatemachine, _super);
    function AuthFieldStatemachine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgState"])({ initialState: true }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__farris_devkit__["State"])
    ], AuthFieldStatemachine.prototype, "viewState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgState"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__farris_devkit__["State"])
    ], AuthFieldStatemachine.prototype, "addState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgState"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__farris_devkit__["State"])
    ], AuthFieldStatemachine.prototype, "editState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'viewState'; }
        }),
        __metadata("design:type", Boolean)
    ], AuthFieldStatemachine.prototype, "canAdd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'viewState'; }
        }),
        __metadata("design:type", Boolean)
    ], AuthFieldStatemachine.prototype, "canEdit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'addState' || context.state === 'editState'; }
        }),
        __metadata("design:type", Boolean)
    ], AuthFieldStatemachine.prototype, "canCancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'viewState'; }
        }),
        __metadata("design:type", Boolean)
    ], AuthFieldStatemachine.prototype, "canDelete", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'addState' || context.state === 'editState'; }
        }),
        __metadata("design:type", Boolean)
    ], AuthFieldStatemachine.prototype, "canSave", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'viewState'; }
        }),
        __metadata("design:type", Boolean)
    ], AuthFieldStatemachine.prototype, "canSwitch", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'addState' || context.state === 'editState'; }
        }),
        __metadata("design:type", Boolean)
    ], AuthFieldStatemachine.prototype, "canInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgAction"])({ transitTo: 'addState' }),
        __metadata("design:type", Function)
    ], AuthFieldStatemachine.prototype, "add", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgAction"])({ transitTo: 'editState' }),
        __metadata("design:type", Function)
    ], AuthFieldStatemachine.prototype, "edit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgAction"])({ transitTo: 'viewState' }),
        __metadata("design:type", Function)
    ], AuthFieldStatemachine.prototype, "view", void 0);
    AuthFieldStatemachine = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgStatemachine"])()
    ], AuthFieldStatemachine);
    return AuthFieldStatemachine;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["StateMachine"]));



/***/ }),

/***/ "./src/app/modules/authfield/app/authfield-uistate.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthFieldUistate", function() { return AuthFieldUistate; });
var AuthFieldUistate = /** @class */ (function () {
    function AuthFieldUistate() {
        /** 设置帮助的状态值*/
        this.posRoleHelpFlag = false;
        /**当前界面上内码 */
        this.curPosIdList = [];
        /** 设置帮助的状态值*/
        this.keyRoleHelpFlag = false;
        /**当前界面上内码 */
        this.curKeyIdList = [];
        /** 设置帮助的状态值*/
        this.mulkeyRoleHelpFlag = false;
        /**当前界面上内码 */
        this.curMulkeyIdList = [];
        //是否可编辑
        this.isedit = '';
    }
    return AuthFieldUistate;
}());



/***/ }),

/***/ "./src/app/modules/authfield/app/authfield-viewmodel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthFieldViewmodel", function() { return AuthFieldViewmodel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authfield_uistate__ = __webpack_require__("./src/app/modules/authfield/app/authfield-uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authfield_bindingdata__ = __webpack_require__("./src/app/modules/authfield/app/authfield-bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authfield_form__ = __webpack_require__("./src/app/modules/authfield/app/authfield-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__authfield_statemachine__ = __webpack_require__("./src/app/modules/authfield/app/authfield-statemachine.ts");
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
var AuthFieldViewmodel = /** @class */ (function (_super) {
    __extends(AuthFieldViewmodel, _super);
    /**
     * 构造函数
     */
    function AuthFieldViewmodel(injector) {
        var _this = _super.call(this, injector) || this;
        _this.uiState = _this.injector.get(__WEBPACK_IMPORTED_MODULE_2__authfield_uistate__["AuthFieldUistate"]);
        return _this;
    }
    /**
     * 表单加载
     */
    AuthFieldViewmodel.prototype.formLoad = function () { };
    /**
     * 新增子级
     */
    AuthFieldViewmodel.prototype.addchild = function () { };
    /**
    * 新行权限
    */
    AuthFieldViewmodel.prototype.add = function () { };
    /**
     * 新增平级
     */
    AuthFieldViewmodel.prototype.additem = function () { };
    /**
     * 编辑
     */
    AuthFieldViewmodel.prototype.edit = function () { };
    /**
     * 删除
     */
    AuthFieldViewmodel.prototype.remove = function () { };
    /**
     * 保存
     */
    AuthFieldViewmodel.prototype.save = function () { };
    /**
     * 取消
     */
    AuthFieldViewmodel.prototype.cancel = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'formLoad'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AuthFieldViewmodel.prototype, "formLoad", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'addchild'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AuthFieldViewmodel.prototype, "addchild", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'add'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AuthFieldViewmodel.prototype, "add", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'additem'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AuthFieldViewmodel.prototype, "additem", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'edit'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AuthFieldViewmodel.prototype, "edit", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'remove'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AuthFieldViewmodel.prototype, "remove", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'save'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AuthFieldViewmodel.prototype, "save", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'cancel'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AuthFieldViewmodel.prototype, "cancel", null);
    AuthFieldViewmodel = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgViewModel"])({
            children: [],
            binding: __WEBPACK_IMPORTED_MODULE_3__authfield_bindingdata__["AuthFieldBindingdata"],
            form: __WEBPACK_IMPORTED_MODULE_4__authfield_form__["AuthFieldForm"],
            stateMachine: __WEBPACK_IMPORTED_MODULE_5__authfield_statemachine__["AuthFieldStatemachine"],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], AuthFieldViewmodel);
    return AuthFieldViewmodel;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["ViewModel"]));



/***/ }),

/***/ "./src/app/modules/authfield/app/handler/add-child.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddChildHandler", function() { return AddChildHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authfield_uistate__ = __webpack_require__("./src/app/modules/authfield/app/authfield-uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__domain__ = __webpack_require__("./src/app/modules/authfield/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common__ = __webpack_require__("./src/app/modules/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__authfield_statemachine__ = __webpack_require__("./src/app/modules/authfield/app/authfield-statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__authfield_bindingdata__ = __webpack_require__("./src/app/modules/authfield/app/authfield-bindingdata.ts");
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







var AddChildHandler = /** @class */ (function (_super) {
    __extends(AddChildHandler, _super);
    function AddChildHandler(dataService, uiState, stateMachine, repository, bindingData, sessionmanager) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.uiState = uiState;
        _this.stateMachine = stateMachine;
        _this.repository = repository;
        _this.bindingData = bindingData;
        _this.sessionmanager = sessionmanager;
        return _this;
    }
    AddChildHandler.prototype.schedule = function () {
        var _this = this;
        // 数据加载
        this.addTask('addchild', function () {
            _this.uiState.action = 'add';
            var item = _this.bindingData.list.currentItem;
            if (item['isDetail'] === true) {
                alert('行权限不允许添加分组！');
                return;
            }
            else {
                var data = {
                    farrisid: _this.sessionmanager.getGuid36(),
                    id: '',
                    name: '',
                    code: '',
                    isDetail: false,
                    parentId: item['id'],
                    path: '',
                    dataSourceId: '',
                    dataFetcher: {
                        key: '',
                        dataSource: ''
                    },
                    aoFetcherType: 0,
                    type: 0
                };
                var newEntity = Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["EntityFactory"])(__WEBPACK_IMPORTED_MODULE_3__domain__["AuthFieldEntity"], data);
                _this.repository.addEntity(newEntity);
                _this.uiState.isedit = '';
            }
        });
        // 状态迁移
        // this.addTask('transitState', () => {
        //   this.stateMachine['add']();
        // });
    };
    AddChildHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'addchild'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__domain__["AuthFieldService"],
            __WEBPACK_IMPORTED_MODULE_2__authfield_uistate__["AuthFieldUistate"],
            __WEBPACK_IMPORTED_MODULE_5__authfield_statemachine__["AuthFieldStatemachine"],
            __WEBPACK_IMPORTED_MODULE_3__domain__["AuthFieldRepository"],
            __WEBPACK_IMPORTED_MODULE_6__authfield_bindingdata__["AuthFieldBindingdata"],
            __WEBPACK_IMPORTED_MODULE_4__common__["SysManagerUtil"]])
    ], AddChildHandler);
    return AddChildHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/authfield/app/handler/add-item.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemHandler", function() { return AddItemHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authfield_bindingdata__ = __webpack_require__("./src/app/modules/authfield/app/authfield-bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__domain__ = __webpack_require__("./src/app/modules/authfield/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common__ = __webpack_require__("./src/app/modules/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__authfield_uistate__ = __webpack_require__("./src/app/modules/authfield/app/authfield-uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__authfield_statemachine__ = __webpack_require__("./src/app/modules/authfield/app/authfield-statemachine.ts");
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







var AddItemHandler = /** @class */ (function (_super) {
    __extends(AddItemHandler, _super);
    function AddItemHandler(dataService, uiState, stateMachine, repository, bindingData, sessionmanager) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.uiState = uiState;
        _this.stateMachine = stateMachine;
        _this.repository = repository;
        _this.bindingData = bindingData;
        _this.sessionmanager = sessionmanager;
        return _this;
    }
    AddItemHandler.prototype.schedule = function () {
        var _this = this;
        // 数据加载
        this.addTask('additem', function () {
            _this.uiState.action = 'add';
            var item = _this.bindingData.list.currentItem;
            var data = {
                id: _this.sessionmanager.getGuid36(),
                code: '',
                name: '',
                isDetail: false,
                parentId: '',
                path: ''
            };
            var newEntity = Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["EntityFactory"])(__WEBPACK_IMPORTED_MODULE_3__domain__["AuthFieldEntity"], data);
            _this.repository.addEntity(newEntity);
        });
        // 状态迁移
        // this.addTask('transitState', () => {
        //   this.stateMachine['add']();
        // });
    };
    AddItemHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'additem'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__domain__["AuthFieldService"],
            __WEBPACK_IMPORTED_MODULE_5__authfield_uistate__["AuthFieldUistate"],
            __WEBPACK_IMPORTED_MODULE_6__authfield_statemachine__["AuthFieldStatemachine"],
            __WEBPACK_IMPORTED_MODULE_3__domain__["AuthFieldRepository"],
            __WEBPACK_IMPORTED_MODULE_2__authfield_bindingdata__["AuthFieldBindingdata"],
            __WEBPACK_IMPORTED_MODULE_4__common__["SysManagerUtil"]])
    ], AddItemHandler);
    return AddItemHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/authfield/app/handler/add.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddHandler", function() { return AddHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authfield_uistate__ = __webpack_require__("./src/app/modules/authfield/app/authfield-uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__domain_authfield_service__ = __webpack_require__("./src/app/modules/authfield/domain/authfield.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_util_sys_manager_util__ = __webpack_require__("./src/app/modules/common/util/sys-manager-util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__domain_authfield_repository__ = __webpack_require__("./src/app/modules/authfield/domain/authfield-repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__domain_entities_authfield_entity__ = __webpack_require__("./src/app/modules/authfield/domain/entities/authfield.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__authfield_statemachine__ = __webpack_require__("./src/app/modules/authfield/app/authfield-statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__authfield_bindingdata__ = __webpack_require__("./src/app/modules/authfield/app/authfield-bindingdata.ts");
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









var AddHandler = /** @class */ (function (_super) {
    __extends(AddHandler, _super);
    function AddHandler(dataService, uiState, stateMachine, repository, bindingData, sessionmanager) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.uiState = uiState;
        _this.stateMachine = stateMachine;
        _this.repository = repository;
        _this.bindingData = bindingData;
        _this.sessionmanager = sessionmanager;
        return _this;
    }
    AddHandler.prototype.schedule = function () {
        var _this = this;
        // 数据加载
        this.addTask('add', function () {
            _this.uiState.action = 'add';
            var item = _this.bindingData.list.currentItem;
            var data = {};
            if (item['isDetail'] === true) {
                data = {
                    farrisid: _this.sessionmanager.getGuid36(),
                    id: '',
                    name: '',
                    code: '',
                    isDetail: true,
                    parentId: item['parentId'],
                    path: '',
                    dataSourceId: '',
                    dataFetcher: {
                        key: '',
                        dataSource: '',
                        listElements: [],
                    },
                    aoFetcherType: 1,
                    type: 1
                };
            }
            else {
                data = {
                    farrisid: _this.sessionmanager.getGuid36(),
                    id: '',
                    name: '',
                    code: '',
                    isDetail: true,
                    parentId: item['id'],
                    path: '',
                    dataSourceId: '',
                    dataFetcher: {
                        key: '',
                        dataSource: '',
                        listElements: [],
                    },
                    aoFetcherType: 1,
                    type: 1
                };
            }
            var newEntity = Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["EntityFactory"])(__WEBPACK_IMPORTED_MODULE_6__domain_entities_authfield_entity__["AuthFieldEntity"], data);
            _this.repository.addEntity(newEntity);
            document.getElementById('page2').style.display = '';
            _this.uiState.isedit = '';
        });
        // 状态迁移
        // this.addTask('transitState', () => {
        //     this.stateMachine['add']();
        // });
    };
    AddHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'add'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__domain_authfield_service__["AuthFieldService"],
            __WEBPACK_IMPORTED_MODULE_2__authfield_uistate__["AuthFieldUistate"],
            __WEBPACK_IMPORTED_MODULE_7__authfield_statemachine__["AuthFieldStatemachine"],
            __WEBPACK_IMPORTED_MODULE_5__domain_authfield_repository__["AuthFieldRepository"],
            __WEBPACK_IMPORTED_MODULE_8__authfield_bindingdata__["AuthFieldBindingdata"],
            __WEBPACK_IMPORTED_MODULE_4__common_util_sys_manager_util__["SysManagerUtil"]])
    ], AddHandler);
    return AddHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/authfield/app/handler/form-load.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLoadHandler", function() { return FormLoadHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_authfield_service__ = __webpack_require__("./src/app/modules/authfield/domain/authfield.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authfield_uistate__ = __webpack_require__("./src/app/modules/authfield/app/authfield-uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authfield_statemachine__ = __webpack_require__("./src/app/modules/authfield/app/authfield-statemachine.ts");
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
            _this.uiState.action = 'edit';
            _this.dataService.getdata();
        });
        // 状态迁移
        // this.addTask('transitState', () => {
        //   this.stateMachine['edit']();
        // });
    };
    FormLoadHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'formLoad'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__domain_authfield_service__["AuthFieldService"],
            __WEBPACK_IMPORTED_MODULE_3__authfield_uistate__["AuthFieldUistate"],
            __WEBPACK_IMPORTED_MODULE_4__authfield_statemachine__["AuthFieldStatemachine"]])
    ], FormLoadHandler);
    return FormLoadHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/authfield/app/handler/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commandHandlers", function() { return commandHandlers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__form_load_handler__ = __webpack_require__("./src/app/modules/authfield/app/handler/form-load.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__remove_handler__ = __webpack_require__("./src/app/modules/authfield/app/handler/remove.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__save_handler__ = __webpack_require__("./src/app/modules/authfield/app/handler/save.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_item_handler__ = __webpack_require__("./src/app/modules/authfield/app/handler/add-item.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_child_handler__ = __webpack_require__("./src/app/modules/authfield/app/handler/add-child.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_handler__ = __webpack_require__("./src/app/modules/authfield/app/handler/add.handler.ts");






var commandHandlers = [
    __WEBPACK_IMPORTED_MODULE_0__form_load_handler__["FormLoadHandler"],
    __WEBPACK_IMPORTED_MODULE_1__remove_handler__["RemoveHandler"],
    __WEBPACK_IMPORTED_MODULE_2__save_handler__["SaveHandler"],
    __WEBPACK_IMPORTED_MODULE_3__add_item_handler__["AddItemHandler"],
    __WEBPACK_IMPORTED_MODULE_4__add_child_handler__["AddChildHandler"],
    __WEBPACK_IMPORTED_MODULE_5__add_handler__["AddHandler"]
];



/***/ }),

/***/ "./src/app/modules/authfield/app/handler/remove.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveHandler", function() { return RemoveHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain__ = __webpack_require__("./src/app/modules/authfield/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authfield_bindingdata__ = __webpack_require__("./src/app/modules/authfield/app/authfield-bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authfield_statemachine__ = __webpack_require__("./src/app/modules/authfield/app/authfield-statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__authfield_uistate__ = __webpack_require__("./src/app/modules/authfield/app/authfield-uistate.ts");
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






var RemoveHandler = /** @class */ (function (_super) {
    __extends(RemoveHandler, _super);
    function RemoveHandler(dataService, repository, bindingData, stateMachine, uiState) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.repository = repository;
        _this.bindingData = bindingData;
        _this.stateMachine = stateMachine;
        _this.uiState = uiState;
        return _this;
    }
    RemoveHandler.prototype.schedule = function () {
        var _this = this;
        // 数据加载
        this.addTask('remove', function () {
            var fid = _this.bindingData['id'];
            _this.dataService.remove(fid);
            _this.uiState.action = 'edit';
        });
        // 状态迁移
        // this.addTask('transitState', () => {
        //   this.stateMachine['view']();
        // });
    };
    RemoveHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'remove'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__domain__["AuthFieldService"],
            __WEBPACK_IMPORTED_MODULE_2__domain__["AuthFieldRepository"],
            __WEBPACK_IMPORTED_MODULE_3__authfield_bindingdata__["AuthFieldBindingdata"],
            __WEBPACK_IMPORTED_MODULE_4__authfield_statemachine__["AuthFieldStatemachine"],
            __WEBPACK_IMPORTED_MODULE_5__authfield_uistate__["AuthFieldUistate"]])
    ], RemoveHandler);
    return RemoveHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/authfield/app/handler/save.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveHandler", function() { return SaveHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_authfield_service__ = __webpack_require__("./src/app/modules/authfield/domain/authfield.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authfield_bindingdata__ = __webpack_require__("./src/app/modules/authfield/app/authfield-bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authfield_uistate__ = __webpack_require__("./src/app/modules/authfield/app/authfield-uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__authfield_statemachine__ = __webpack_require__("./src/app/modules/authfield/app/authfield-statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__domain_authfield_repository__ = __webpack_require__("./src/app/modules/authfield/domain/authfield-repository.ts");
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







var SaveHandler = /** @class */ (function (_super) {
    __extends(SaveHandler, _super);
    function SaveHandler(dataService, repository, bindingData, uiState, stateMachine) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.repository = repository;
        _this.bindingData = bindingData;
        _this.uiState = uiState;
        _this.stateMachine = stateMachine;
        return _this;
    }
    SaveHandler.prototype.schedule = function () {
        var _this = this;
        // 数据加载
        this.addTask('save', function () {
            var item = _this.bindingData.list.currentItem;
            _this.dataService.save(item);
            _this.uiState.isedit = 'true';
        });
        // 状态迁移
        // this.addTask('transitState', () => {
        //   this.stateMachine['view']();
        // });
    };
    SaveHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'save'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__domain_authfield_service__["AuthFieldService"],
            __WEBPACK_IMPORTED_MODULE_6__domain_authfield_repository__["AuthFieldRepository"],
            __WEBPACK_IMPORTED_MODULE_3__authfield_bindingdata__["AuthFieldBindingdata"],
            __WEBPACK_IMPORTED_MODULE_4__authfield_uistate__["AuthFieldUistate"],
            __WEBPACK_IMPORTED_MODULE_5__authfield_statemachine__["AuthFieldStatemachine"]])
    ], SaveHandler);
    return SaveHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/authfield/app/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_PROVIDERS", function() { return APP_PROVIDERS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authfield_bindingdata__ = __webpack_require__("./src/app/modules/authfield/app/authfield-bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authfield_form__ = __webpack_require__("./src/app/modules/authfield/app/authfield-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authfield_statemachine__ = __webpack_require__("./src/app/modules/authfield/app/authfield-statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authfield_viewmodel__ = __webpack_require__("./src/app/modules/authfield/app/authfield-viewmodel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authfield_uistate__ = __webpack_require__("./src/app/modules/authfield/app/authfield-uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__handler__ = __webpack_require__("./src/app/modules/authfield/app/handler/index.ts");
/* unused harmony reexport AuthFieldBindingdata */
/* unused harmony reexport AuthFieldForm */
/* unused harmony reexport AuthFieldStatemachine */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AuthFieldViewmodel", function() { return __WEBPACK_IMPORTED_MODULE_3__authfield_viewmodel__["AuthFieldViewmodel"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AuthFieldUistate", function() { return __WEBPACK_IMPORTED_MODULE_4__authfield_uistate__["AuthFieldUistate"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "commandHandlers", function() { return __WEBPACK_IMPORTED_MODULE_5__handler__["commandHandlers"]; });






var APP_PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_0__authfield_bindingdata__["AuthFieldBindingdata"],
    __WEBPACK_IMPORTED_MODULE_1__authfield_form__["AuthFieldForm"],
    __WEBPACK_IMPORTED_MODULE_2__authfield_statemachine__["AuthFieldStatemachine"],
    __WEBPACK_IMPORTED_MODULE_3__authfield_viewmodel__["AuthFieldViewmodel"],
    __WEBPACK_IMPORTED_MODULE_4__authfield_uistate__["AuthFieldUistate"]
];



/***/ }),

/***/ "./src/app/modules/authfield/authfield.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/authfield/authfield.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex g-main\" style=\" overflow-y:auto; overflow-x:auto;width:100%; height:100%;\">\n    <div class=\"col\">\n        <div class=\"d-flex flex-row  g-main px-2\" style=\"overflow:auto;\">\n            <div class=\"col\">\n                <div class=\"d-flex flex-column g-main\">\n                    <div class=\"pt-2 mb-2\">\n                        <div class=\"row pt-2 mb-2\">\n                            <div class=\"col-sm-12 col-md-3 pt-2\">\n                                <h1 class=\"h4 d-inline-block\">权限字段维护</h1>\n                                <div class=\"card\">\n                                    <div class=\"col-xs-12 col-sm-12 col-md-3 col-lg-3 \">\n                                        <kendo-treeview style=\"width:200px\" [nodes]=\"data\" textField=\"name\" kendoTreeViewExpandable kendoTreeViewFlatDataBinding\n                                            idField=\"id\" parentIdField=\"parentId\" (selectionChange)=\"handleSelection($event)\">\n                                        </kendo-treeview>\n                                    </div>\n                                </div>\n                            </div>\n\n\n                            <div class=\"col-sm-12 col-md-9\">\n                                <div class=\"pr-2 text-right\">\n                                    <!-- <button type=\"button\" (click)=\"viewmodel.additem()\" class=\"btn btn-sm btn-default\">新增分组 </button> -->\n                                    <button type=\"button\" (click)=\"viewmodel.addchild()\" class=\"btn btn-sm btn-default\">新增子分组 </button>\n                                    <button type=\"button\" (click)=\"viewmodel.add()\" class=\"btn btn-sm btn-default\">新增行权限 </button>\n                                    <button type=\"button\" (click)=\"viewmodel.remove()\" class=\"btn btn-sm btn-default\">删除 </button>\n                                    <button type=\"button\" (click)=\"viewmodel.save()\" class=\"btn btn-sm btn-default\">保存</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div style=\"position:absolute;margin-left:330px;margin-top:55px;\">\n                        <kendo-tabstrip>\n                            <kendo-tabstrip-tab [title]=\"'基本信息'\" [selected]=\"true\">\n                                <ng-template kendoTabContent>\n                                    <form class=\"k-form p-2\" [formGroup]=\"viewmodel.form\">\n                                        <div class=\"row\" style=\"width:950px\">\n                                            <div class=\"col-sm-12 col-md-6 pb-1\">\n                                                <label class=\"k-form-field\">\n                                                    <span>权限标识* </span>\n                                                    <div class=\"d-flex\">\n                                                        <input formControlName=\"id\" class=\"k-textbox w-100\" [readonly]=\"this.viewmodel.uiState.isedit\" />\n                                                    </div>\n                                                </label>\n                                                <label class=\"k-form-field\">\n                                                    <span>权限名称* </span>\n                                                    <div class=\"d-flex\">\n                                                        <input formControlName=\"name\" class=\"k-textbox w-100\" />\n                                                    </div>\n                                                </label>\n                                            </div>\n                                            <div class=\"col-sm-12 col-md-6 pb-1\">\n                                                <label class=\"k-form-field\">\n                                                    <span>权限编号* </span>\n                                                    <div class=\"d-flex\">\n                                                        <input formControlName=\"code\" class=\"k-textbox w-100\" />\n                                                    </div>\n                                                </label>\n                                            </div>\n                                        </div>\n                                    </form>\n                                </ng-template>\n                            </kendo-tabstrip-tab>\n                        </kendo-tabstrip>\n\n                        <ng-container>\n                            <kendo-tabstrip id=\"page2\">\n                                <kendo-tabstrip-tab [title]=\"'取数定义'\" [selected]=\"true\">\n                                    <ng-template kendoTabContent>\n                                        <form class=\"k-form p-2\" [formGroup]=\"viewmodel.form\">\n                                            <label class=\"k-form-field\">\n                                                <span style=\"margin-left:10px\">数据源</span>\n                                                <div class=\"d-flex\">\n                                                    <input formControlName=\"dataSourceId\" class=\"k-textbox\" style=\"width:430px;margin-left:10px\" placeholder=\"请选择数据源\" disabled=\"disabled\">\n                                                    <button class=\"k-button k-bare\" type=\"button\" (click)=\"setdata()\">\n                                                        <i class=\"material-icons align-middle\" style=\" font-size: 20px;\">filter_none</i>\n                                                    </button>\n                                                </div>\n                                            </label>\n                                            <label class=\"k-form-field\">\n                                                <span style=\"margin-left:10px\">取数列</span>\n                                                <div class=\"d-flex\">\n                                                    <input formControlName=\"datakey\" class=\"k-textbox\" style=\"width:430px;margin-left:10px\" placeholder=\"请选择取数列\" disabled=\"disabled\">\n                                                    <button class=\"k-button k-bare\" type=\"button\" (click)=\"setkey()\">\n                                                        <i class=\"material-icons align-middle\" style=\" font-size: 20px;\">filter_none</i>\n                                                    </button>\n                                                </div>\n                                            </label>\n                                        </form>\n                                        <div class=\"container-fluid\">\n                                            <div class=\"row\">\n                                                <div class=\"col-12\">\n                                                    <div class=\"mt-1\">\n                                                        <button type=\"button\" [disabled]=\"false\" class=\"btn btn-sm btn-default\" (click)=\"setmulkey()\">添加展示列</button>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"row mt-2\">\n                                                <div class=\"col-12\">\n                                                    <kendo-grid [class]=\"'flex-auto'\" [kendoGridSelectBy]=\"'id'\" [selectable]=\"this.selectableSettings\" [kendoGridBinding]=\"this.viewmodel.uiState.list\">>\n                                                        <kendo-grid-column field=\"name\" title=\"列名\" width=\"40%\"></kendo-grid-column>\n                                                        <kendo-grid-column field=\"description\" title=\"列描述\" width=\"60%\"></kendo-grid-column>\n                                                    </kendo-grid>\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                        <!-- 帮助 -->\n                                        <app-list-help [title]=\"'数据源帮助'\" [initSelectedKeys]=\"this.viewmodel.uiState.curPosIdList\" [isShow]=\"this.viewmodel.uiState.posRoleHelpFlag\"\n                                            (selectedAfterOk)=\"afterPosSelected($event)\"></app-list-help>\n                                        <app-key-help [title]=\"'取数列帮助'\" [initSelectedKeys]=\"this.viewmodel.uiState.curKeyIdList\" [isShow]=\"this.viewmodel.uiState.keyRoleHelpFlag\"\n                                            (selectedAfterOk)=\"afterKeySelected($event)\"></app-key-help>\n                                        <app-mulkey-help [title]=\"'展示列帮助'\" [initSelectedKeys]=\"this.viewmodel.uiState.curMulkeyIdList\" [isShow]=\"this.viewmodel.uiState.mulkeyRoleHelpFlag\"\n                                            (selectedAfterOk)=\"afterMulkeySelected($event)\"></app-mulkey-help>\n                                    </ng-template>\n                                </kendo-tabstrip-tab>\n                            </kendo-tabstrip>\n                        </ng-container>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/modules/authfield/authfield.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthFieldComponent", function() { return AuthFieldComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app__ = __webpack_require__("./src/app/modules/authfield/app/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gsp_sys_rtf_common__ = __webpack_require__("./node_modules/@gsp-sys/rtf-common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gsp_sys_rtf_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__gsp_sys_rtf_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common__ = __webpack_require__("./src/app/modules/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__domain_authfield_repository__ = __webpack_require__("./src/app/modules/authfield/domain/authfield-repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__domain__ = __webpack_require__("./src/app/modules/authfield/domain/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AuthFieldComponent = /** @class */ (function () {
    function AuthFieldComponent(viewmodel, route, currentSession, frmService, uiState, repos, authFieldService) {
        this.viewmodel = viewmodel;
        this.route = route;
        this.currentSession = currentSession;
        this.frmService = frmService;
        this.uiState = uiState;
        this.repos = repos;
        this.authFieldService = authFieldService;
    }
    AuthFieldComponent.prototype.fetchChildren = function (node) {
        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])(node.items);
    };
    AuthFieldComponent.prototype.hasChildren = function (node) {
        return node.items && node.items.length > 0;
    };
    AuthFieldComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            if (params.has('funcid')) {
                _this.currentSession.funcId = params.get('funcid');
                console.log('sessionId:' + _this.currentSession.getSessionId());
            }
        });
        this.viewmodel.formLoad();
        this.viewmodel.bindingData.changes.subscribe(function (changes) {
            console.log("changetype =" + changes.type);
            if (changes.type === __WEBPACK_IMPORTED_MODULE_3__farris_devkit__["ChangeType"].SelectionChanged)
                return;
            if (changes.type === __WEBPACK_IMPORTED_MODULE_3__farris_devkit__["ChangeType"].ValueChanged)
                return;
            var a = changes;
            _this.data = _this.viewmodel.bindingData.list.toJSON();
            console.log(JSON.stringify(_this.data));
            // 根节点隐藏
            document.getElementById('page2').style.display = 'none';
            if (changes.type === __WEBPACK_IMPORTED_MODULE_3__farris_devkit__["ChangeType"].Load || changes.type === __WEBPACK_IMPORTED_MODULE_3__farris_devkit__["ChangeType"].Remove)
                _this.uiState.isedit = 'true';
            if (changes.type === __WEBPACK_IMPORTED_MODULE_3__farris_devkit__["ChangeType"].Append)
                _this.uiState.isedit = '';
        });
    };
    //切换其他分组
    AuthFieldComponent.prototype.handleSelection = function (_a) {
        var _this = this;
        var dataItem = _a.dataItem;
        var config = dataItem.FInvokingConfig;
        console.log(config);
        this.viewmodel.bindingData.list.setCurrentId(dataItem.id);
        this.currentid = dataItem.id;
        this.itemid = this.repos.getEntityById(this.currentid).dataSourceId;
        this.viewmodel.bindingData.list.setCurrentId(dataItem.id);
        //帮助获取数据源
        this.viewmodel.uiState.curPosIdList = [];
        this.viewmodel.uiState.curPosIdList.push(this.itemid);
        //帮助获取取数列
        this.viewmodel.uiState.curKeyIdList = [];
        this.authFieldService.getKeyDatabaseObject(this.itemid)
            .subscribe(function (result) {
            for (var i = 0; i < result.columns.length; i++) {
                if (result.columns[i].name == _this.repos.getEntityById(_this.currentid).dataFetcher.key)
                    _this.viewmodel.uiState.curKeyIdList.push(result.columns[i].id);
            }
        });
        //获取展示列
        this.viewmodel.uiState.curMulkeyIdList = [];
        this.listelement = this.repos.getEntityById(this.currentid).dataFetcher.listElements;
        var k = 0;
        this.authFieldService.getKeyDatabaseObject(this.itemid).subscribe(function (result) {
            for (var i = 0; i < _this.listelement.length; i++) {
                for (var j = 0; j < result.columns.length; j++) {
                    if (result.columns[j].name == _this.listelement[i]) {
                        _this.listelement[k] = result.columns[j];
                        _this.viewmodel.uiState.curMulkeyIdList.push(result.columns[j].id);
                        ++k;
                    }
                }
            }
            return _this.listelement;
        });
        this.uiState.list = this.listelement;
        if (dataItem.isDetail === false) {
            // 根节点隐藏
            document.getElementById('page2').style.display = 'none';
        }
        else {
            // 子节点显示
            document.getElementById('page2').style.display = '';
        }
        this.uiState.isedit = 'true';
    };
    AuthFieldComponent.prototype.setdata = function () {
        this.uiState.posRoleHelpFlag = !this.uiState.posRoleHelpFlag;
    };
    AuthFieldComponent.prototype.setkey = function () {
        this.uiState.keyRoleHelpFlag = !this.uiState.keyRoleHelpFlag;
    };
    AuthFieldComponent.prototype.setmulkey = function () {
        this.uiState.mulkeyRoleHelpFlag = !this.uiState.mulkeyRoleHelpFlag;
    };
    //数据源
    AuthFieldComponent.prototype.afterPosSelected = function (args) {
        var _this = this;
        // 更新值
        this.uiState.curPosIdList = [];
        this.uiState.curKeyIdList = [];
        this.uiState.curMulkeyIdList = [];
        __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].from(args).subscribe(function (item) {
            if (item['id'] == _this.itemid) {
                return;
            }
            _this.viewmodel.uiState.curPosIdList.push(item['id']);
            if (_this.uiState.action === 'edit') {
                _this.repos.getEntityById(_this.currentid).dataSourceId
                    = _this.repos.getEntityById(_this.currentid).dataFetcher.dataSource
                        = item['id'];
            }
            if (_this.uiState.action === 'add') {
                _this.viewmodel.form.dataSourceId.setValue(item['id']);
                _this.viewmodel.form.dataSource.setValue(item['id']);
            }
            _this.itemid = item['id'];
            _this.repos.getEntityById(_this.currentid).dataFetcher.key = '';
            _this.uiState.list = [];
        });
    };
    //取数列
    AuthFieldComponent.prototype.afterKeySelected = function (args) {
        var _this = this;
        this.viewmodel.uiState.curKeyIdList = [];
        // 更新值
        if (this.uiState.action === 'edit') {
            var dataitem_1 = this.repos.getEntityById(this.currentid);
            __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].from(args).subscribe(function (item) {
                dataitem_1.dataFetcher.key = item['name'];
                _this.viewmodel.uiState.curKeyIdList.push(item['id']);
            });
        }
        if (this.uiState.action === 'add') {
            __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].from(args).subscribe(function (item) {
                _this.viewmodel.form.datakey.setValue(item['name']);
                _this.viewmodel.uiState.curKeyIdList.push(item['id']);
            });
        }
    };
    //展示列
    AuthFieldComponent.prototype.afterMulkeySelected = function (args) {
        this.viewmodel.uiState.curMulkeyIdList = [];
        this.repos.getEntityById(this.currentid).dataFetcher.listElements = [];
        this.uiState.list = args;
        for (var i = 0; i < args.length; i++) {
            this.repos.getEntityById(this.currentid).dataFetcher.listElements[i]
                = args[i].name;
            this.viewmodel.uiState.curMulkeyIdList.push(args[i].id);
        }
    };
    AuthFieldComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-authfield',
            template: __webpack_require__("./src/app/modules/authfield/authfield.component.html"),
            styles: [__webpack_require__("./src/app/modules/authfield/authfield.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__app__["AuthFieldViewmodel"],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_7__common__["SysManagerUtil"],
            __WEBPACK_IMPORTED_MODULE_6__gsp_sys_rtf_common__["FrameworkService"],
            __WEBPACK_IMPORTED_MODULE_4__app__["AuthFieldUistate"],
            __WEBPACK_IMPORTED_MODULE_8__domain_authfield_repository__["AuthFieldRepository"],
            __WEBPACK_IMPORTED_MODULE_9__domain__["AuthFieldService"]])
    ], AuthFieldComponent);
    return AuthFieldComponent;
}());



/***/ }),

/***/ "./src/app/modules/authfield/authfield.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthFieldModule", function() { return AuthFieldModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progress_kendo_angular_treeview__ = __webpack_require__("./node_modules/@progress/kendo-angular-treeview/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_layout__ = __webpack_require__("./node_modules/@progress/kendo-angular-layout/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_grid__ = __webpack_require__("./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_dateinputs__ = __webpack_require__("./node_modules/@progress/kendo-angular-dateinputs/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__domain_index__ = __webpack_require__("./src/app/modules/authfield/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_index__ = __webpack_require__("./src/app/modules/authfield/app/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__domain_authfield_service__ = __webpack_require__("./src/app/modules/authfield/domain/authfield.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__authfield_component__ = __webpack_require__("./src/app/modules/authfield/authfield.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__authfield_routing_module__ = __webpack_require__("./src/app/modules/authfield/authfield.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__common__ = __webpack_require__("./src/app/modules/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__help_list_help_list_help_component__ = __webpack_require__("./src/app/modules/authfield/help/list-help/list-help.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__help_key_help_key_help_component__ = __webpack_require__("./src/app/modules/authfield/help/key-help/key-help.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__help_mulkey_help_mulkey_help_component__ = __webpack_require__("./src/app/modules/authfield/help/mulkey-help/mulkey-help.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AuthFieldModule = /** @class */ (function () {
    function AuthFieldModule() {
    }
    AuthFieldModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__progress_kendo_angular_treeview__["TreeViewModule"],
                __WEBPACK_IMPORTED_MODULE_6__farris_devkit__["CommandModule"].setup(__WEBPACK_IMPORTED_MODULE_9__app_index__["commandHandlers"], []),
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_layout__["LayoutModule"],
                __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_grid__["GridModule"],
                __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_dateinputs__["DateInputsModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_12__authfield_routing_module__["AuthFieldRoutingModule"],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__authfield_component__["AuthFieldComponent"],
                __WEBPACK_IMPORTED_MODULE_14__help_list_help_list_help_component__["ListHelpComponent"],
                __WEBPACK_IMPORTED_MODULE_15__help_key_help_key_help_component__["KeyHelpComponent"],
                __WEBPACK_IMPORTED_MODULE_16__help_mulkey_help_mulkey_help_component__["MulkeyHelpComponent"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__domain_authfield_service__["AuthFieldService"],
                __WEBPACK_IMPORTED_MODULE_8__domain_index__["DOMAIN_PROVIDERS"],
                __WEBPACK_IMPORTED_MODULE_9__app_index__["APP_PROVIDERS"],
                __WEBPACK_IMPORTED_MODULE_9__app_index__["commandHandlers"],
                __WEBPACK_IMPORTED_MODULE_6__farris_devkit__["RestfulService"],
                __WEBPACK_IMPORTED_MODULE_13__common__["SysManagerUtil"]
            ]
        })
    ], AuthFieldModule);
    return AuthFieldModule;
}());

//# sourceMappingURL=authfield.module.js.map

/***/ }),

/***/ "./src/app/modules/authfield/authfield.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthFieldRoutingModule", function() { return AuthFieldRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authfield_component__ = __webpack_require__("./src/app/modules/authfield/authfield.component.ts");


var routes = [
    { path: 'authfield', component: __WEBPACK_IMPORTED_MODULE_1__authfield_component__["AuthFieldComponent"] },
    { path: '', redirectTo: 'authfield', pathMatch: 'full' },
    { path: '**', redirectTo: 'authfield' }
];
var AuthFieldRoutingModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/modules/authfield/domain/authfield-datastorage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthFieldDatastorage", function() { return AuthFieldDatastorage; });
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


var AuthFieldDatastorage = /** @class */ (function (_super) {
    __extends(AuthFieldDatastorage, _super);
    function AuthFieldDatastorage() {
        return _super.call(this) || this;
    }
    AuthFieldDatastorage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AuthFieldDatastorage);
    return AuthFieldDatastorage;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["MemoryStorage"]));



/***/ }),

/***/ "./src/app/modules/authfield/domain/authfield-repository.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthFieldRepository", function() { return AuthFieldRepository; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authfield_datastorage__ = __webpack_require__("./src/app/modules/authfield/domain/authfield-datastorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_authfield_entity__ = __webpack_require__("./src/app/modules/authfield/domain/entities/authfield.entity.ts");
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




var AuthFieldRepository = /** @class */ (function (_super) {
    __extends(AuthFieldRepository, _super);
    function AuthFieldRepository(injector) {
        return _super.call(this, injector) || this;
    }
    AuthFieldRepository = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRepository"])({
            from: __WEBPACK_IMPORTED_MODULE_2__authfield_datastorage__["AuthFieldDatastorage"],
            entityType: __WEBPACK_IMPORTED_MODULE_3__entities_authfield_entity__["AuthFieldEntity"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], AuthFieldRepository);
    return AuthFieldRepository;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["Repository"]));



/***/ }),

/***/ "./src/app/modules/authfield/domain/authfield.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthFieldService", function() { return AuthFieldService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authfield_repository__ = __webpack_require__("./src/app/modules/authfield/domain/authfield-repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authfield_datastorage__ = __webpack_require__("./src/app/modules/authfield/domain/authfield-datastorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common__ = __webpack_require__("./src/app/modules/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_authfield_uistate__ = __webpack_require__("./src/app/modules/authfield/app/authfield-uistate.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthFieldService = /** @class */ (function () {
    function AuthFieldService(reposity, datastorage, rest, sessionmanager, uiState) {
        this.reposity = reposity;
        this.datastorage = datastorage;
        this.rest = rest;
        this.sessionmanager = sessionmanager;
        this.uiState = uiState;
        this.url = '/api/runtime/sys/v1.0/authFields';
        this.databaseurl = '/api/runtime/sys/v1.0/database-objects';
        this.flag = 0;
    }
    AuthFieldService.prototype.getdata = function () {
        var _this = this;
        this.rest.get(this.url, null, this.sessionmanager.getHeader()).subscribe(function (result) {
            console.log(result);
            result.forEach(function (element) {
                if (element.parentId === '') {
                    element.parentId = undefined;
                }
            });
            result.forEach(function (value) {
                value.farrisid = value.id;
            });
            _this.datastorage.load(result);
        });
    };
    /**
     * 保存
     */
    AuthFieldService.prototype.save = function (item) {
        var _this = this;
        if (!item.code || !item.name) {
            alert('基本信息不能为空，请填写完整！');
            return;
        }
        if (this.uiState.action === 'add') {
            var elements = [];
            for (var i = 0; i < this.uiState.list.length; i++) {
                elements[i] = this.uiState.list[i].name;
                item.dataFetcher.listElements.push(elements[i]);
            }
            this.rest.post(this.url, item, null, this.sessionmanager.getHeader()).subscribe(function () {
                _this.getdata();
                alert('保存成功！');
                _this.uiState.action = 'edit';
            });
        }
        if (this.uiState.action === 'edit') {
            this.reposity.getEntityById(item.id).dataFetcher.listElements = [];
            for (var i = 0; i < this.uiState.list.length; i++) {
                this.reposity.getEntityById(item.id).dataFetcher.listElements[i]
                    = this.uiState.list[i].name;
            }
            var data = {
                id: item.id,
                name: item.name,
                code: item.code,
                isDetail: item.isDetail,
                parentId: item.parentId,
                path: item.path,
                creator: "admin",
                createdtime: "2018-09-14 14:32:56.270271",
                dataSourceId: item.dataSourceId,
                dataFetcher: this.reposity.getEntityById(item.id).dataFetcher.data,
                aoFetcherType: item.aoFetcherType,
                type: item.type
            };
            this.rest.put(this.url, data, null, this.sessionmanager.getHeader()).subscribe(function () {
                _this.getdata();
                alert('保存成功！');
                _this.uiState.action = 'edit';
            });
        }
        else
            return;
    };
    ;
    /**
     * 删除并重新加载
     */
    AuthFieldService.prototype.remove = function (id) {
        var _this = this;
        this.rest.delete(this.url + '/' + id, null, this.sessionmanager.getHeader()).subscribe(function () {
            _this.getdata();
            alert('删除成功');
        });
    };
    AuthFieldService.prototype.getAllDatabaseObject = function () {
        return this.rest.get(this.databaseurl, null, this.sessionmanager.getHeader());
    };
    AuthFieldService.prototype.getKeyDatabaseObject = function (id) {
        return this.rest.get(this.databaseurl + '/' + id, null, this.sessionmanager.getHeader());
    };
    AuthFieldService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__authfield_repository__["AuthFieldRepository"],
            __WEBPACK_IMPORTED_MODULE_3__authfield_datastorage__["AuthFieldDatastorage"],
            __WEBPACK_IMPORTED_MODULE_1__farris_devkit__["RestfulService"],
            __WEBPACK_IMPORTED_MODULE_4__common__["SysManagerUtil"],
            __WEBPACK_IMPORTED_MODULE_5__app_authfield_uistate__["AuthFieldUistate"]])
    ], AuthFieldService);
    return AuthFieldService;
}());



/***/ }),

/***/ "./src/app/modules/authfield/domain/entities/authfield-datafetcher.entity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFetcherEntity", function() { return DataFetcherEntity; });
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

var DataFetcherEntity = /** @class */ (function (_super) {
    __extends(DataFetcherEntity, _super);
    function DataFetcherEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(true),
        __metadata("design:type", String)
    ], DataFetcherEntity.prototype, "dataSource", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], DataFetcherEntity.prototype, "key", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", Array)
    ], DataFetcherEntity.prototype, "listElements", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], DataFetcherEntity.prototype, "dataSourceType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", Object)
    ], DataFetcherEntity.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], DataFetcherEntity.prototype, "filter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", Object)
    ], DataFetcherEntity.prototype, "hierarchicalType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], DataFetcherEntity.prototype, "hierarchicalInfo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], DataFetcherEntity.prototype, "variantCode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", Object)
    ], DataFetcherEntity.prototype, "sortCondition", void 0);
    return DataFetcherEntity;
}(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["Entity"]));



/***/ }),

/***/ "./src/app/modules/authfield/domain/entities/authfield.entity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthFieldEntity", function() { return AuthFieldEntity; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authfield_datafetcher_entity__ = __webpack_require__("./src/app/modules/authfield/domain/entities/authfield-datafetcher.entity.ts");
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


var AuthFieldEntity = /** @class */ (function (_super) {
    __extends(AuthFieldEntity, _super);
    function AuthFieldEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(true),
        __metadata("design:type", String)
    ], AuthFieldEntity.prototype, "farrisid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], AuthFieldEntity.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], AuthFieldEntity.prototype, "code", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], AuthFieldEntity.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], AuthFieldEntity.prototype, "path", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", Boolean)
    ], AuthFieldEntity.prototype, "isDetail", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], AuthFieldEntity.prototype, "parentId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], AuthFieldEntity.prototype, "dataSourceId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgObject"])(__WEBPACK_IMPORTED_MODULE_1__authfield_datafetcher_entity__["DataFetcherEntity"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__authfield_datafetcher_entity__["DataFetcherEntity"])
    ], AuthFieldEntity.prototype, "dataFetcher", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", Object)
    ], AuthFieldEntity.prototype, "aoFetcherType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", Object)
    ], AuthFieldEntity.prototype, "type", void 0);
    return AuthFieldEntity;
}(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["Entity"]));



/***/ }),

/***/ "./src/app/modules/authfield/domain/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAIN_PROVIDERS", function() { return DOMAIN_PROVIDERS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authfield_datastorage__ = __webpack_require__("./src/app/modules/authfield/domain/authfield-datastorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authfield_repository__ = __webpack_require__("./src/app/modules/authfield/domain/authfield-repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authfield_service__ = __webpack_require__("./src/app/modules/authfield/domain/authfield.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_authfield_entity__ = __webpack_require__("./src/app/modules/authfield/domain/entities/authfield.entity.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AuthFieldEntity", function() { return __WEBPACK_IMPORTED_MODULE_3__entities_authfield_entity__["AuthFieldEntity"]; });
/* unused harmony reexport AuthFieldDatastorage */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AuthFieldRepository", function() { return __WEBPACK_IMPORTED_MODULE_1__authfield_repository__["AuthFieldRepository"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AuthFieldService", function() { return __WEBPACK_IMPORTED_MODULE_2__authfield_service__["AuthFieldService"]; });




var DOMAIN_PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_0__authfield_datastorage__["AuthFieldDatastorage"],
    __WEBPACK_IMPORTED_MODULE_1__authfield_repository__["AuthFieldRepository"],
    __WEBPACK_IMPORTED_MODULE_2__authfield_service__["AuthFieldService"],
];



/***/ }),

/***/ "./src/app/modules/authfield/help/key-help/key-help.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/authfield/help/key-help/key-help.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" [ngClass]=\"{'show d-block':isShow}\">\n  <div class=\"modal-dialog modal-dialog-centered gw-page-dialog\" style=\"font-size: 13px;max-width:40%;\">\n    <div class=\"modal-content\" style=\"width:100%;height:500px;\">\n      <div class=\"modal-header\">\n        <div class=\"clearfix p-2\">\n          <h6 class=\"modal-title float-right\">{{title}}</h6>\n          <button class=\"close\" (click)=\"isShow=false\">\n            <span>×</span>\n          </button>\n        </div>\n      </div>\n      <div class=\"modal-body\">\n        <kendo-grid [class]=\"'flex-auto'\" [selectable]=\"selectableSettings\" [kendoGridSelectBy]=\"'id'\" [selectedKeys]=\"curSelectedKeys\"\n          [kendoGridBinding]=\"data\" [height]=\"350\">\n          <kendo-grid-checkbox-column width=\"10%\"></kendo-grid-checkbox-column>\n          <kendo-grid-column field=\"name\" title=\"名称\" width=\"40%\"></kendo-grid-column>\n          <kendo-grid-column field=\"description\" title=\"描述\" width=\"50%\"></kendo-grid-column>\n        </kendo-grid>\n      </div>\n      <div class=\"modal-footer\">\n        <!--\n        <div pr-2 text-left class=\"col-xs-3\">\n          <span>全选</span>\n          <input type=\"checkbox\" style=\"zoom:120%;\" id=\"checkAllData\" name=\"checkAllData\" [checked]=\"true\">\n        </div>\n        -->\n        <div text-right p-2 class=\"col-xs-9\">\n          <button class=\"btn btn-sm  mr-2  btn-primary \" [disabled]=\"\" style=\"font-size: 13px;line-height: 1.2;\"\n            (click)=\"btnOk()\">确定</button>\n          <button class=\"btn btn-sm mr-2\" style=\"background:#e3e4e4!important;font-size: 13px;line-height: 1.2;\"\n            (click)=\"isShow=false\">取消</button>\n        </div>\n      </div>\n    </div>\n\n  </div>\n  <!-- /.modal-dialog -->\n</div>\n"

/***/ }),

/***/ "./src/app/modules/authfield/help/key-help/key-help.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyHelpComponent", function() { return KeyHelpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain__ = __webpack_require__("./src/app/modules/authfield/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authfield_component__ = __webpack_require__("./src/app/modules/authfield/authfield.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var KeyHelpComponent = /** @class */ (function () {
    function KeyHelpComponent(authFieldService, authfieldcomp) {
        this.authFieldService = authFieldService;
        this.authfieldcomp = authfieldcomp;
        /**帮助标题 */
        this.title = '帮助';
        /**输出事件 */
        this.selectedAfterOk = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        // 多选模式
        this.selectableSettings = {
            checkboxOnly: true,
            mode: 'single',
            enabled: true
        };
    }
    KeyHelpComponent.prototype.ngOnInit = function () {
    };
    /**输入属性变化后 */
    KeyHelpComponent.prototype.ngOnChanges = function (changes) {
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
            this.authFieldService.getKeyDatabaseObject(this.authfieldcomp.itemid)
                .subscribe(function (result) {
                _this.data = result.columns;
                _this.curSelectedKeys = [];
                if (_this.initSelectedKeys) {
                    _this.initSelectedKeys.map(function (item) { return _this.curSelectedKeys.push(item); });
                }
            }, function (error) {
                console.log('获取数据源失败！');
                console.log(error);
            });
        }
    };
    /**帮助确定按钮 */
    KeyHelpComponent.prototype.btnOk = function () {
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
    KeyHelpComponent.prototype.showDialog = function () {
        this.isShow = true;
    };
    KeyHelpComponent.prototype.closeDialog = function () {
        this.isShow = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], KeyHelpComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], KeyHelpComponent.prototype, "isShow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], KeyHelpComponent.prototype, "initSelectedKeys", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], KeyHelpComponent.prototype, "selectedAfterOk", void 0);
    KeyHelpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-key-help',
            template: __webpack_require__("./src/app/modules/authfield/help/key-help/key-help.component.html"),
            styles: [__webpack_require__("./src/app/modules/authfield/help/key-help/key-help.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__domain__["AuthFieldService"],
            __WEBPACK_IMPORTED_MODULE_3__authfield_component__["AuthFieldComponent"]])
    ], KeyHelpComponent);
    return KeyHelpComponent;
}());



/***/ }),

/***/ "./src/app/modules/authfield/help/list-help/list-help.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/authfield/help/list-help/list-help.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" [ngClass]=\"{'show d-block':isShow}\">\n  <div class=\"modal-dialog modal-dialog-centered gw-page-dialog\" style=\"font-size: 13px;max-width:40%;\">\n    <div class=\"modal-content\" style=\"width:100%;height:500px;\">\n      <div class=\"modal-header\">\n        <div class=\"clearfix p-2\">\n          <h6 class=\"modal-title float-right\">{{title}}</h6>\n          <button class=\"close\" (click)=\"isShow=false\">\n            <span>×</span>\n          </button>\n        </div>\n      </div>\n      <div class=\"modal-body\">\n        <kendo-grid [class]=\"'flex-auto'\" [selectable]=\"selectableSettings\" [kendoGridSelectBy]=\"'id'\" [selectedKeys]=\"curSelectedKeys\"\n          [kendoGridBinding]=\"data\" [height]=\"350\">\n          <kendo-grid-checkbox-column width=\"10%\"></kendo-grid-checkbox-column>\n          <kendo-grid-column field=\"code\" title=\"编号\" width=\"40%\"></kendo-grid-column>\n          <kendo-grid-column field=\"name\" title=\"名称\" width=\"50%\"></kendo-grid-column>\n        </kendo-grid>\n      </div>\n      <div class=\"modal-footer\">\n        <!--\n        <div pr-2 text-left class=\"col-xs-3\">\n          <span>全选</span>\n          <input type=\"checkbox\" style=\"zoom:120%;\" id=\"checkAllData\" name=\"checkAllData\" [checked]=\"true\">\n        </div>\n        -->\n        <div text-right p-2 class=\"col-xs-9\">\n          <button class=\"btn btn-sm  mr-2  btn-primary \" [disabled]=\"\" style=\"font-size: 13px;line-height: 1.2;\"\n            (click)=\"btnOk()\">确定</button>\n          <button class=\"btn btn-sm mr-2\" style=\"background:#e3e4e4!important;font-size: 13px;line-height: 1.2;\"\n            (click)=\"isShow=false\">取消</button>\n        </div>\n      </div>\n    </div>\n\n  </div>\n  <!-- /.modal-dialog -->\n</div>\n"

/***/ }),

/***/ "./src/app/modules/authfield/help/list-help/list-help.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListHelpComponent", function() { return ListHelpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain__ = __webpack_require__("./src/app/modules/authfield/domain/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListHelpComponent = /** @class */ (function () {
    function ListHelpComponent(authFieldService) {
        this.authFieldService = authFieldService;
        /**帮助标题 */
        this.title = '帮助';
        /**输出事件 */
        this.selectedAfterOk = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        // 多选模式
        this.selectableSettings = {
            checkboxOnly: true,
            mode: 'single',
            enabled: true
        };
    }
    ListHelpComponent.prototype.ngOnInit = function () {
    };
    /**输入属性变化后 */
    ListHelpComponent.prototype.ngOnChanges = function (changes) {
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
            this.authFieldService.getAllDatabaseObject()
                .subscribe(function (result) {
                _this.data = result;
                _this.curSelectedKeys = [];
                if (_this.initSelectedKeys) {
                    _this.initSelectedKeys.map(function (item) { return _this.curSelectedKeys.push(item); });
                }
            }, function (error) {
                console.log('获取数据源失败！');
                console.log(error);
            });
        }
    };
    /**帮助确定按钮 */
    ListHelpComponent.prototype.btnOk = function () {
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
    ListHelpComponent.prototype.showDialog = function () {
        this.isShow = true;
    };
    ListHelpComponent.prototype.closeDialog = function () {
        this.isShow = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ListHelpComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ListHelpComponent.prototype, "isShow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ListHelpComponent.prototype, "initSelectedKeys", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ListHelpComponent.prototype, "selectedAfterOk", void 0);
    ListHelpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-list-help',
            template: __webpack_require__("./src/app/modules/authfield/help/list-help/list-help.component.html"),
            styles: [__webpack_require__("./src/app/modules/authfield/help/list-help/list-help.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__domain__["AuthFieldService"]])
    ], ListHelpComponent);
    return ListHelpComponent;
}());



/***/ }),

/***/ "./src/app/modules/authfield/help/mulkey-help/mulkey-help.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/authfield/help/mulkey-help/mulkey-help.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" [ngClass]=\"{'show d-block':isShow}\">\n  <div class=\"modal-dialog modal-dialog-centered gw-page-dialog\" style=\"font-size: 13px;max-width:40%;\">\n    <div class=\"modal-content\" style=\"width:100%;height:500px;\">\n      <div class=\"modal-header\">\n        <div class=\"clearfix p-2\">\n          <h6 class=\"modal-title float-right\">{{title}}</h6>\n          <button class=\"close\" (click)=\"isShow=false\">\n            <span>×</span>\n          </button>\n        </div>\n      </div>\n      <div class=\"modal-body\">\n        <kendo-grid [class]=\"'flex-auto'\" [selectable]=\"selectableSettings\" [kendoGridSelectBy]=\"'id'\" [selectedKeys]=\"curSelectedKeys\"\n          [kendoGridBinding]=\"data\" [height]=\"350\">\n          <kendo-grid-checkbox-column width=\"10%\"></kendo-grid-checkbox-column>\n          <kendo-grid-column field=\"name\" title=\"名称\" width=\"40%\"></kendo-grid-column>\n          <kendo-grid-column field=\"description\" title=\"描述\" width=\"50%\"></kendo-grid-column>\n        </kendo-grid>\n      </div>\n      <div class=\"modal-footer\">\n        <!--\n        <div pr-2 text-left class=\"col-xs-3\">\n          <span>全选</span>\n          <input type=\"checkbox\" style=\"zoom:120%;\" id=\"checkAllData\" name=\"checkAllData\" [checked]=\"true\">\n        </div>\n        -->\n        <div text-right p-2 class=\"col-xs-9\">\n          <button class=\"btn btn-sm  mr-2  btn-primary \" [disabled]=\"\" style=\"font-size: 13px;line-height: 1.2;\"\n            (click)=\"btnOk()\">确定</button>\n          <button class=\"btn btn-sm mr-2\" style=\"background:#e3e4e4!important;font-size: 13px;line-height: 1.2;\"\n            (click)=\"isShow=false\">取消</button>\n        </div>\n      </div>\n    </div>\n\n  </div>\n  <!-- /.modal-dialog -->\n</div>\n"

/***/ }),

/***/ "./src/app/modules/authfield/help/mulkey-help/mulkey-help.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MulkeyHelpComponent", function() { return MulkeyHelpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain__ = __webpack_require__("./src/app/modules/authfield/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authfield_component__ = __webpack_require__("./src/app/modules/authfield/authfield.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MulkeyHelpComponent = /** @class */ (function () {
    function MulkeyHelpComponent(authFieldService, authfieldcomp) {
        this.authFieldService = authFieldService;
        this.authfieldcomp = authfieldcomp;
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
    MulkeyHelpComponent.prototype.ngOnInit = function () {
    };
    /**输入属性变化后 */
    MulkeyHelpComponent.prototype.ngOnChanges = function (changes) {
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
            this.authFieldService.getKeyDatabaseObject(this.authfieldcomp.itemid)
                .subscribe(function (result) {
                _this.data = result.columns;
                _this.curSelectedKeys = [];
                if (_this.initSelectedKeys) {
                    _this.initSelectedKeys.map(function (item) { return _this.curSelectedKeys.push(item); });
                }
            }, function (error) {
                console.log('获取数据源失败！');
                console.log(error);
            });
        }
    };
    /**帮助确定按钮 */
    MulkeyHelpComponent.prototype.btnOk = function () {
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
    MulkeyHelpComponent.prototype.showDialog = function () {
        this.isShow = true;
    };
    MulkeyHelpComponent.prototype.closeDialog = function () {
        this.isShow = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MulkeyHelpComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], MulkeyHelpComponent.prototype, "isShow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], MulkeyHelpComponent.prototype, "initSelectedKeys", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], MulkeyHelpComponent.prototype, "selectedAfterOk", void 0);
    MulkeyHelpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-mulkey-help',
            template: __webpack_require__("./src/app/modules/authfield/help/mulkey-help/mulkey-help.component.html"),
            styles: [__webpack_require__("./src/app/modules/authfield/help/mulkey-help/mulkey-help.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__domain__["AuthFieldService"],
            __WEBPACK_IMPORTED_MODULE_3__authfield_component__["AuthFieldComponent"]])
    ], MulkeyHelpComponent);
    return MulkeyHelpComponent;
}());



/***/ }),

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



/***/ })

},[],["angular","farris","rtf","progress","rxjs"],["angular","farris","rtf","progress","rxjs"]);
//# sourceMappingURL=authfield.module.chunk.js.map