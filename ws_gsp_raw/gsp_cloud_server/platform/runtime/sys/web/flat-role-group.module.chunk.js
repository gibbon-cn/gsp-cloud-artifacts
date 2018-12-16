webpackJsonp(["flat-role-group.module"],{

/***/ "./src/app/modules/flat-role-groups/app/flat-func-tree-bindingdata.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatFuncTreeBindingdata", function() { return FlatFuncTreeBindingdata; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain__ = __webpack_require__("./src/app/modules/flat-role-groups/domain/index.ts");
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



var FlatFuncTreeBindingdata = /** @class */ (function (_super) {
    __extends(FlatFuncTreeBindingdata, _super);
    function FlatFuncTreeBindingdata(injector) {
        return _super.call(this, injector) || this;
    }
    FlatFuncTreeBindingdata = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgBindingData"])({
            entity: __WEBPACK_IMPORTED_MODULE_2__domain__["FlatFuncEntity"],
            repository: __WEBPACK_IMPORTED_MODULE_2__domain__["FlatFuncTreeRepository"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], FlatFuncTreeBindingdata);
    return FlatFuncTreeBindingdata;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["BindingData"]));



/***/ }),

/***/ "./src/app/modules/flat-role-groups/app/flat-func-tree-form.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatFuncTreeForm", function() { return FlatFuncTreeForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__flat_func_tree_bindingdata__ = __webpack_require__("./src/app/modules/flat-role-groups/app/flat-func-tree-bindingdata.ts");
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




var FlatFuncTreeForm = /** @class */ (function (_super) {
    __extends(FlatFuncTreeForm, _super);
    function FlatFuncTreeForm(injector) {
        return _super.call(this, injector) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'id',
            binding: 'FID'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], FlatFuncTreeForm.prototype, "FID", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'code',
            binding: 'FCode'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], FlatFuncTreeForm.prototype, "FCode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'name',
            binding: 'FName'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], FlatFuncTreeForm.prototype, "FName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'path',
            binding: 'FPath'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], FlatFuncTreeForm.prototype, "FPath", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'layer',
            binding: 'FLayer'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], FlatFuncTreeForm.prototype, "FLayer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'isDetail',
            binding: 'FIsdetail'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], FlatFuncTreeForm.prototype, "FIsdetail", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'sortOrder',
            binding: 'FSortorder'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], FlatFuncTreeForm.prototype, "FSortorder", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'sysInit',
            binding: 'FSysinit'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], FlatFuncTreeForm.prototype, "FSysinit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'note',
            binding: 'FNote'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], FlatFuncTreeForm.prototype, "FNote", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'parentId',
            binding: 'FParentid'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], FlatFuncTreeForm.prototype, "FParentid", void 0);
    FlatFuncTreeForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgForm"])({
            bindingData: __WEBPACK_IMPORTED_MODULE_3__flat_func_tree_bindingdata__["FlatFuncTreeBindingdata"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], FlatFuncTreeForm);
    return FlatFuncTreeForm;
}(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["Form"]));



/***/ }),

/***/ "./src/app/modules/flat-role-groups/app/flat-func-tree-statemachine.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatFuncTreeStatemachine", function() { return FlatFuncTreeStatemachine; });
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


var FlatFuncTreeStatemachine = /** @class */ (function (_super) {
    __extends(FlatFuncTreeStatemachine, _super);
    function FlatFuncTreeStatemachine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgState"])({ initialState: true }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__farris_devkit__["State"])
    ], FlatFuncTreeStatemachine.prototype, "viewState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgState"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__farris_devkit__["State"])
    ], FlatFuncTreeStatemachine.prototype, "addState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgState"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__farris_devkit__["State"])
    ], FlatFuncTreeStatemachine.prototype, "editState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'viewState'; }
        }),
        __metadata("design:type", Boolean)
    ], FlatFuncTreeStatemachine.prototype, "canAdd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'viewState'; }
        }),
        __metadata("design:type", Boolean)
    ], FlatFuncTreeStatemachine.prototype, "canEdit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'addState' || context.state === 'editState'; }
        }),
        __metadata("design:type", Boolean)
    ], FlatFuncTreeStatemachine.prototype, "canCancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'viewState'; }
        }),
        __metadata("design:type", Boolean)
    ], FlatFuncTreeStatemachine.prototype, "canDelete", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'addState' || context.state === 'editState'; }
        }),
        __metadata("design:type", Boolean)
    ], FlatFuncTreeStatemachine.prototype, "canSave", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'viewState'; }
        }),
        __metadata("design:type", Boolean)
    ], FlatFuncTreeStatemachine.prototype, "canSwitch", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'addState' || context.state === 'editState'; }
        }),
        __metadata("design:type", Boolean)
    ], FlatFuncTreeStatemachine.prototype, "canInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgAction"])({ transitTo: 'addState' }),
        __metadata("design:type", Function)
    ], FlatFuncTreeStatemachine.prototype, "add", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgAction"])({ transitTo: 'editState' }),
        __metadata("design:type", Function)
    ], FlatFuncTreeStatemachine.prototype, "edit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgAction"])({ transitTo: 'viewState' }),
        __metadata("design:type", Function)
    ], FlatFuncTreeStatemachine.prototype, "view", void 0);
    FlatFuncTreeStatemachine = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgStatemachine"])()
    ], FlatFuncTreeStatemachine);
    return FlatFuncTreeStatemachine;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["StateMachine"]));



/***/ }),

/***/ "./src/app/modules/flat-role-groups/app/flat-func-tree-uistate.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatFuncTreeUistate", function() { return FlatFuncTreeUistate; });
var FlatFuncTreeUistate = /** @class */ (function () {
    function FlatFuncTreeUistate() {
    }
    return FlatFuncTreeUistate;
}());



/***/ }),

/***/ "./src/app/modules/flat-role-groups/app/flat-func-tree-viewmodel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatFuncTreeViewmodel", function() { return FlatFuncTreeViewmodel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flat_func_tree_bindingdata__ = __webpack_require__("./src/app/modules/flat-role-groups/app/flat-func-tree-bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__flat_func_tree_form__ = __webpack_require__("./src/app/modules/flat-role-groups/app/flat-func-tree-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__flat_func_tree_statemachine__ = __webpack_require__("./src/app/modules/flat-role-groups/app/flat-func-tree-statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__flat_func_tree_uistate__ = __webpack_require__("./src/app/modules/flat-role-groups/app/flat-func-tree-uistate.ts");
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
var FlatFuncTreeViewmodel = /** @class */ (function (_super) {
    __extends(FlatFuncTreeViewmodel, _super);
    /**
     * 构造函数
     */
    function FlatFuncTreeViewmodel(injector) {
        var _this = _super.call(this, injector) || this;
        _this.uiState = _this.injector.get(__WEBPACK_IMPORTED_MODULE_5__flat_func_tree_uistate__["FlatFuncTreeUistate"]);
        return _this;
    }
    /**
     * 表单加载
     */
    FlatFuncTreeViewmodel.prototype.formLoad = function () { };
    /**
     * 新增子级
     */
    FlatFuncTreeViewmodel.prototype.addchild = function () { };
    /**
     * 新增平级
     */
    FlatFuncTreeViewmodel.prototype.additem = function () { };
    /**
     * 编辑
     */
    FlatFuncTreeViewmodel.prototype.edit = function () { };
    /**
     * 删除
     */
    FlatFuncTreeViewmodel.prototype.remove = function () { };
    /**
     * 保存
     */
    FlatFuncTreeViewmodel.prototype.save = function () { };
    /**
     * 取消
     */
    FlatFuncTreeViewmodel.prototype.cancel = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'formLoad'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FlatFuncTreeViewmodel.prototype, "formLoad", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'addchild'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FlatFuncTreeViewmodel.prototype, "addchild", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'additem'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FlatFuncTreeViewmodel.prototype, "additem", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'edit'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FlatFuncTreeViewmodel.prototype, "edit", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'remove'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FlatFuncTreeViewmodel.prototype, "remove", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'save'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FlatFuncTreeViewmodel.prototype, "save", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'cancel'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FlatFuncTreeViewmodel.prototype, "cancel", null);
    FlatFuncTreeViewmodel = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgViewModel"])({
            children: [],
            binding: __WEBPACK_IMPORTED_MODULE_2__flat_func_tree_bindingdata__["FlatFuncTreeBindingdata"],
            form: __WEBPACK_IMPORTED_MODULE_3__flat_func_tree_form__["FlatFuncTreeForm"],
            stateMachine: __WEBPACK_IMPORTED_MODULE_4__flat_func_tree_statemachine__["FlatFuncTreeStatemachine"],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], FlatFuncTreeViewmodel);
    return FlatFuncTreeViewmodel;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["ViewModel"]));



/***/ }),

/***/ "./src/app/modules/flat-role-groups/app/handler/flat-add-child.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatAddChildHandler", function() { return FlatAddChildHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain__ = __webpack_require__("./src/app/modules/flat-role-groups/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__flat_func_tree_statemachine__ = __webpack_require__("./src/app/modules/flat-role-groups/app/flat-func-tree-statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__flat_func_tree_uistate__ = __webpack_require__("./src/app/modules/flat-role-groups/app/flat-func-tree-uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_data_util__ = __webpack_require__("./src/app/modules/shared/data-util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__flat_func_tree_bindingdata__ = __webpack_require__("./src/app/modules/flat-role-groups/app/flat-func-tree-bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__domain_flat_func_tree_repository__ = __webpack_require__("./src/app/modules/flat-role-groups/domain/flat-func-tree-repository.ts");
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









var FlatAddChildHandler = /** @class */ (function (_super) {
    __extends(FlatAddChildHandler, _super);
    function FlatAddChildHandler(dataService, uiState, stateMachine, repository, bindingData) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.uiState = uiState;
        _this.stateMachine = stateMachine;
        _this.repository = repository;
        _this.bindingData = bindingData;
        return _this;
    }
    FlatAddChildHandler.prototype.schedule = function () {
        var _this = this;
        // 数据加载
        this.addTask('addchild', function () {
            _this.uiState.action = 'add';
            var item = _this.bindingData.list.currentItem;
            var data = {
                id: __WEBPACK_IMPORTED_MODULE_5__shared_data_util__["DataUtil"].createNM(),
                code: '',
                name: '',
                parentId: item['FID'],
                layer: Number(item['FLayer']) + 1,
                isDetail: true
            };
            var newEntity = Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["EntityFactory"])(__WEBPACK_IMPORTED_MODULE_2__domain__["FlatFuncEntity"], data);
            _this.repository.addEntity(newEntity);
        });
        // 状态迁移
        this.addTask('transitState', function () {
            _this.stateMachine['edit']();
        });
    };
    FlatAddChildHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'addchild'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__domain__["FlatFuncService"],
            __WEBPACK_IMPORTED_MODULE_4__flat_func_tree_uistate__["FlatFuncTreeUistate"],
            __WEBPACK_IMPORTED_MODULE_3__flat_func_tree_statemachine__["FlatFuncTreeStatemachine"],
            __WEBPACK_IMPORTED_MODULE_7__domain_flat_func_tree_repository__["FlatFuncTreeRepository"],
            __WEBPACK_IMPORTED_MODULE_6__flat_func_tree_bindingdata__["FlatFuncTreeBindingdata"]])
    ], FlatAddChildHandler);
    return FlatAddChildHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/flat-role-groups/app/handler/flat-add-item.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatAddItemHandler", function() { return FlatAddItemHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain__ = __webpack_require__("./src/app/modules/flat-role-groups/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__flat_func_tree_statemachine__ = __webpack_require__("./src/app/modules/flat-role-groups/app/flat-func-tree-statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__flat_func_tree_uistate__ = __webpack_require__("./src/app/modules/flat-role-groups/app/flat-func-tree-uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_data_util__ = __webpack_require__("./src/app/modules/shared/data-util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__flat_func_tree_bindingdata__ = __webpack_require__("./src/app/modules/flat-role-groups/app/flat-func-tree-bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__domain_flat_func_tree_repository__ = __webpack_require__("./src/app/modules/flat-role-groups/domain/flat-func-tree-repository.ts");
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









var FlatAddItemHandler = /** @class */ (function (_super) {
    __extends(FlatAddItemHandler, _super);
    function FlatAddItemHandler(dataService, uiState, stateMachine, repository, bindingData) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.uiState = uiState;
        _this.stateMachine = stateMachine;
        _this.repository = repository;
        _this.bindingData = bindingData;
        return _this;
    }
    FlatAddItemHandler.prototype.schedule = function () {
        var _this = this;
        // 数据加载
        this.addTask('additem', function () {
            _this.uiState.action = 'add';
            var item = _this.bindingData.list.currentItem;
            // data必须与实体绑定数据大小写一致
            var data = {
                id: __WEBPACK_IMPORTED_MODULE_5__shared_data_util__["DataUtil"].createNM(),
                code: '',
                name: '',
                layer: item['FLayer'] || 1,
                isdDetail: true,
                parentId: item['FParentid']
            };
            var newEntity = Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["EntityFactory"])(__WEBPACK_IMPORTED_MODULE_2__domain__["FlatFuncEntity"], data);
            _this.repository.addEntity(newEntity);
        });
        // 状态迁移
        this.addTask('transitState', function () {
            _this.stateMachine['edit']();
        });
    };
    FlatAddItemHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'additem'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__domain__["FlatFuncService"],
            __WEBPACK_IMPORTED_MODULE_4__flat_func_tree_uistate__["FlatFuncTreeUistate"],
            __WEBPACK_IMPORTED_MODULE_3__flat_func_tree_statemachine__["FlatFuncTreeStatemachine"],
            __WEBPACK_IMPORTED_MODULE_7__domain_flat_func_tree_repository__["FlatFuncTreeRepository"],
            __WEBPACK_IMPORTED_MODULE_6__flat_func_tree_bindingdata__["FlatFuncTreeBindingdata"]])
    ], FlatAddItemHandler);
    return FlatAddItemHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/flat-role-groups/app/handler/flat-cancle.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatCancleHandler", function() { return FlatCancleHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain__ = __webpack_require__("./src/app/modules/flat-role-groups/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__flat_func_tree_statemachine__ = __webpack_require__("./src/app/modules/flat-role-groups/app/flat-func-tree-statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__flat_func_tree_uistate__ = __webpack_require__("./src/app/modules/flat-role-groups/app/flat-func-tree-uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__flat_func_tree_bindingdata__ = __webpack_require__("./src/app/modules/flat-role-groups/app/flat-func-tree-bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__domain_flat_func_tree_repository__ = __webpack_require__("./src/app/modules/flat-role-groups/domain/flat-func-tree-repository.ts");
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







var FlatCancleHandler = /** @class */ (function (_super) {
    __extends(FlatCancleHandler, _super);
    function FlatCancleHandler(dataService, repository, bindingData, stateMachine, uiState) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.repository = repository;
        _this.bindingData = bindingData;
        _this.stateMachine = stateMachine;
        _this.uiState = uiState;
        return _this;
    }
    FlatCancleHandler.prototype.schedule = function () {
        var _this = this;
        // 数据加载
        this.addTask('cancel', function () {
            if (_this.uiState.action !== 'add')
                return;
            var id = _this.bindingData.list.currentId;
            _this.repository.removeEntityById(id.toString());
            _this.uiState.action = 'camcel';
        });
        // 状态迁移
        this.addTask('transitState', function () {
            _this.stateMachine['view']();
        });
    };
    FlatCancleHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'cancel'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__domain__["FlatFuncService"],
            __WEBPACK_IMPORTED_MODULE_6__domain_flat_func_tree_repository__["FlatFuncTreeRepository"],
            __WEBPACK_IMPORTED_MODULE_5__flat_func_tree_bindingdata__["FlatFuncTreeBindingdata"],
            __WEBPACK_IMPORTED_MODULE_3__flat_func_tree_statemachine__["FlatFuncTreeStatemachine"],
            __WEBPACK_IMPORTED_MODULE_4__flat_func_tree_uistate__["FlatFuncTreeUistate"]])
    ], FlatCancleHandler);
    return FlatCancleHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/flat-role-groups/app/handler/flat-edit.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatEditHandler", function() { return FlatEditHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain__ = __webpack_require__("./src/app/modules/flat-role-groups/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__flat_func_tree_statemachine__ = __webpack_require__("./src/app/modules/flat-role-groups/app/flat-func-tree-statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__flat_func_tree_uistate__ = __webpack_require__("./src/app/modules/flat-role-groups/app/flat-func-tree-uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__flat_func_tree_bindingdata__ = __webpack_require__("./src/app/modules/flat-role-groups/app/flat-func-tree-bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__domain_flat_func_tree_repository__ = __webpack_require__("./src/app/modules/flat-role-groups/domain/flat-func-tree-repository.ts");
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







var FlatEditHandler = /** @class */ (function (_super) {
    __extends(FlatEditHandler, _super);
    function FlatEditHandler(dataService, repository, uiState, bindingData, stateMachine) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.repository = repository;
        _this.uiState = uiState;
        _this.bindingData = bindingData;
        _this.stateMachine = stateMachine;
        return _this;
    }
    FlatEditHandler.prototype.schedule = function () {
        var _this = this;
        // 状态迁移
        this.addTask('transitState', function () {
            _this.uiState.action = 'edit';
            _this.stateMachine['edit']();
        });
    };
    FlatEditHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'edit'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__domain__["FlatFuncService"],
            __WEBPACK_IMPORTED_MODULE_6__domain_flat_func_tree_repository__["FlatFuncTreeRepository"],
            __WEBPACK_IMPORTED_MODULE_4__flat_func_tree_uistate__["FlatFuncTreeUistate"],
            __WEBPACK_IMPORTED_MODULE_5__flat_func_tree_bindingdata__["FlatFuncTreeBindingdata"],
            __WEBPACK_IMPORTED_MODULE_3__flat_func_tree_statemachine__["FlatFuncTreeStatemachine"]])
    ], FlatEditHandler);
    return FlatEditHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/flat-role-groups/app/handler/flat-form-load.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatFormLoadHandler", function() { return FlatFormLoadHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain__ = __webpack_require__("./src/app/modules/flat-role-groups/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__flat_func_tree_statemachine__ = __webpack_require__("./src/app/modules/flat-role-groups/app/flat-func-tree-statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__flat_func_tree_uistate__ = __webpack_require__("./src/app/modules/flat-role-groups/app/flat-func-tree-uistate.ts");
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





var FlatFormLoadHandler = /** @class */ (function (_super) {
    __extends(FlatFormLoadHandler, _super);
    function FlatFormLoadHandler(dataService, uiState, stateMachine) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.uiState = uiState;
        _this.stateMachine = stateMachine;
        return _this;
    }
    FlatFormLoadHandler.prototype.schedule = function () {
        var _this = this;
        // 数据加载
        this.addTask('loadData', function () {
            _this.uiState.action = 'load';
            _this.dataService.getdata();
        });
        // 状态迁移
        this.addTask('transitState', function () {
            var action = _this.uiState.action;
            _this.stateMachine['view']();
        });
    };
    FlatFormLoadHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'formLoad'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__domain__["FlatFuncService"],
            __WEBPACK_IMPORTED_MODULE_4__flat_func_tree_uistate__["FlatFuncTreeUistate"],
            __WEBPACK_IMPORTED_MODULE_3__flat_func_tree_statemachine__["FlatFuncTreeStatemachine"]])
    ], FlatFormLoadHandler);
    return FlatFormLoadHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/flat-role-groups/app/handler/flat-remove.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatRemoveHandler", function() { return FlatRemoveHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain__ = __webpack_require__("./src/app/modules/flat-role-groups/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__flat_func_tree_statemachine__ = __webpack_require__("./src/app/modules/flat-role-groups/app/flat-func-tree-statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__flat_func_tree_uistate__ = __webpack_require__("./src/app/modules/flat-role-groups/app/flat-func-tree-uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__flat_func_tree_bindingdata__ = __webpack_require__("./src/app/modules/flat-role-groups/app/flat-func-tree-bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__domain_flat_func_tree_repository__ = __webpack_require__("./src/app/modules/flat-role-groups/domain/flat-func-tree-repository.ts");
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







var FlatRemoveHandler = /** @class */ (function (_super) {
    __extends(FlatRemoveHandler, _super);
    function FlatRemoveHandler(dataService, repository, bindingData, stateMachine, uiState) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.repository = repository;
        _this.bindingData = bindingData;
        _this.stateMachine = stateMachine;
        _this.uiState = uiState;
        return _this;
    }
    FlatRemoveHandler.prototype.schedule = function () {
        var _this = this;
        // 数据加载
        this.addTask('remove', function () {
            var fid = _this.bindingData['FID'];
            _this.dataService.remove(fid);
            _this.uiState.action = 'remove';
        });
        // 状态迁移
        this.addTask('transitState', function () {
            _this.stateMachine['view']();
        });
    };
    FlatRemoveHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'remove'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__domain__["FlatFuncService"],
            __WEBPACK_IMPORTED_MODULE_6__domain_flat_func_tree_repository__["FlatFuncTreeRepository"],
            __WEBPACK_IMPORTED_MODULE_5__flat_func_tree_bindingdata__["FlatFuncTreeBindingdata"],
            __WEBPACK_IMPORTED_MODULE_3__flat_func_tree_statemachine__["FlatFuncTreeStatemachine"],
            __WEBPACK_IMPORTED_MODULE_4__flat_func_tree_uistate__["FlatFuncTreeUistate"]])
    ], FlatRemoveHandler);
    return FlatRemoveHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/flat-role-groups/app/handler/flat-save.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatSaveHandler", function() { return FlatSaveHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain__ = __webpack_require__("./src/app/modules/flat-role-groups/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__flat_func_tree_statemachine__ = __webpack_require__("./src/app/modules/flat-role-groups/app/flat-func-tree-statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__flat_func_tree_uistate__ = __webpack_require__("./src/app/modules/flat-role-groups/app/flat-func-tree-uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__flat_func_tree_bindingdata__ = __webpack_require__("./src/app/modules/flat-role-groups/app/flat-func-tree-bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__domain_flat_func_tree_repository__ = __webpack_require__("./src/app/modules/flat-role-groups/domain/flat-func-tree-repository.ts");
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







var FlatSaveHandler = /** @class */ (function (_super) {
    __extends(FlatSaveHandler, _super);
    function FlatSaveHandler(dataService, repository, bindingData, uiState, stateMachine) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.repository = repository;
        _this.bindingData = bindingData;
        _this.uiState = uiState;
        _this.stateMachine = stateMachine;
        return _this;
    }
    FlatSaveHandler.prototype.schedule = function () {
        var _this = this;
        // 数据加载
        this.addTask('save', function () {
            var item = _this.bindingData.list.currentItem;
            console.log('savedata = ' + JSON.stringify(_this.bindingData.list.toJSON()));
            _this.dataService.save(item);
            console.log('savedata = ' + JSON.stringify(_this.bindingData.list.toJSON()));
            _this.uiState.action = 'save';
        });
        // 状态迁移
        this.addTask('transitState', function () {
            _this.stateMachine['view']();
        });
    };
    FlatSaveHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'save'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__domain__["FlatFuncService"],
            __WEBPACK_IMPORTED_MODULE_6__domain_flat_func_tree_repository__["FlatFuncTreeRepository"],
            __WEBPACK_IMPORTED_MODULE_5__flat_func_tree_bindingdata__["FlatFuncTreeBindingdata"],
            __WEBPACK_IMPORTED_MODULE_4__flat_func_tree_uistate__["FlatFuncTreeUistate"],
            __WEBPACK_IMPORTED_MODULE_3__flat_func_tree_statemachine__["FlatFuncTreeStatemachine"]])
    ], FlatSaveHandler);
    return FlatSaveHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/flat-role-groups/app/handler/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commandHandlers", function() { return commandHandlers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__flat_form_load_handler__ = __webpack_require__("./src/app/modules/flat-role-groups/app/handler/flat-form-load.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flat_remove_handler__ = __webpack_require__("./src/app/modules/flat-role-groups/app/handler/flat-remove.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flat_save_handler__ = __webpack_require__("./src/app/modules/flat-role-groups/app/handler/flat-save.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__flat_add_item_handler__ = __webpack_require__("./src/app/modules/flat-role-groups/app/handler/flat-add-item.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__flat_add_child_handler__ = __webpack_require__("./src/app/modules/flat-role-groups/app/handler/flat-add-child.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__flat_cancle_handler__ = __webpack_require__("./src/app/modules/flat-role-groups/app/handler/flat-cancle.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__flat_edit_handler__ = __webpack_require__("./src/app/modules/flat-role-groups/app/handler/flat-edit.handler.ts");







var commandHandlers = [
    __WEBPACK_IMPORTED_MODULE_0__flat_form_load_handler__["FlatFormLoadHandler"],
    __WEBPACK_IMPORTED_MODULE_1__flat_remove_handler__["FlatRemoveHandler"],
    __WEBPACK_IMPORTED_MODULE_2__flat_save_handler__["FlatSaveHandler"],
    __WEBPACK_IMPORTED_MODULE_3__flat_add_item_handler__["FlatAddItemHandler"],
    __WEBPACK_IMPORTED_MODULE_4__flat_add_child_handler__["FlatAddChildHandler"],
    __WEBPACK_IMPORTED_MODULE_5__flat_cancle_handler__["FlatCancleHandler"],
    __WEBPACK_IMPORTED_MODULE_6__flat_edit_handler__["FlatEditHandler"]
];



/***/ }),

/***/ "./src/app/modules/flat-role-groups/app/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_PROVIDERS", function() { return APP_PROVIDERS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__flat_func_tree_bindingdata__ = __webpack_require__("./src/app/modules/flat-role-groups/app/flat-func-tree-bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flat_func_tree_form__ = __webpack_require__("./src/app/modules/flat-role-groups/app/flat-func-tree-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flat_func_tree_statemachine__ = __webpack_require__("./src/app/modules/flat-role-groups/app/flat-func-tree-statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__flat_func_tree_viewmodel__ = __webpack_require__("./src/app/modules/flat-role-groups/app/flat-func-tree-viewmodel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__flat_func_tree_uistate__ = __webpack_require__("./src/app/modules/flat-role-groups/app/flat-func-tree-uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__handler__ = __webpack_require__("./src/app/modules/flat-role-groups/app/handler/index.ts");
/* unused harmony reexport FlatFuncTreeBindingdata */
/* unused harmony reexport FlatFuncTreeForm */
/* unused harmony reexport FlatFuncTreeStatemachine */
/* unused harmony reexport FlatFuncTreeViewmodel */
/* unused harmony reexport FlatFuncTreeUistate */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "commandHandlers", function() { return __WEBPACK_IMPORTED_MODULE_5__handler__["commandHandlers"]; });






var APP_PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_0__flat_func_tree_bindingdata__["FlatFuncTreeBindingdata"],
    __WEBPACK_IMPORTED_MODULE_1__flat_func_tree_form__["FlatFuncTreeForm"],
    __WEBPACK_IMPORTED_MODULE_2__flat_func_tree_statemachine__["FlatFuncTreeStatemachine"],
    __WEBPACK_IMPORTED_MODULE_3__flat_func_tree_viewmodel__["FlatFuncTreeViewmodel"],
    __WEBPACK_IMPORTED_MODULE_4__flat_func_tree_uistate__["FlatFuncTreeUistate"]
];



/***/ }),

/***/ "./src/app/modules/flat-role-groups/domain/entities/flat-func.entity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatFuncEntity", function() { return FlatFuncEntity; });
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
 * 客户实体
 */
var FlatFuncEntity = /** @class */ (function (_super) {
    __extends(FlatFuncEntity, _super);
    function FlatFuncEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])({
            dataField: 'id',
            primary: true
        }),
        __metadata("design:type", String)
    ], FlatFuncEntity.prototype, "FID", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])({
            dataField: 'code'
        }),
        __metadata("design:type", String)
    ], FlatFuncEntity.prototype, "FCode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])({
            dataField: 'name'
        }),
        __metadata("design:type", String)
    ], FlatFuncEntity.prototype, "FName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])({
            dataField: 'path'
        }),
        __metadata("design:type", String)
    ], FlatFuncEntity.prototype, "FPath", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])({
            dataField: 'layer'
        }),
        __metadata("design:type", String)
    ], FlatFuncEntity.prototype, "FLayer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])({
            dataField: 'isDetail'
        }),
        __metadata("design:type", Boolean)
    ], FlatFuncEntity.prototype, "FIsdetail", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])({
            dataField: 'sortOrder'
        }),
        __metadata("design:type", String)
    ], FlatFuncEntity.prototype, "FSortorder", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])({
            dataField: 'sysInit'
        }),
        __metadata("design:type", String)
    ], FlatFuncEntity.prototype, "FSysinit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])({
            dataField: 'note'
        }),
        __metadata("design:type", String)
    ], FlatFuncEntity.prototype, "FNote", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])({
            dataField: 'parentId',
        }),
        __metadata("design:type", String)
    ], FlatFuncEntity.prototype, "FParentid", void 0);
    return FlatFuncEntity;
}(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["Entity"]));



/***/ }),

/***/ "./src/app/modules/flat-role-groups/domain/flat-func-tree-datastorage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatFuncTreeDatastorage", function() { return FlatFuncTreeDatastorage; });
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


var FlatFuncTreeDatastorage = /** @class */ (function (_super) {
    __extends(FlatFuncTreeDatastorage, _super);
    function FlatFuncTreeDatastorage() {
        return _super.call(this) || this;
    }
    FlatFuncTreeDatastorage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FlatFuncTreeDatastorage);
    return FlatFuncTreeDatastorage;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["MemoryStorage"]));



/***/ }),

/***/ "./src/app/modules/flat-role-groups/domain/flat-func-tree-repository.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatFuncTreeRepository", function() { return FlatFuncTreeRepository; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_flat_func_entity__ = __webpack_require__("./src/app/modules/flat-role-groups/domain/entities/flat-func.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__flat_func_tree_datastorage__ = __webpack_require__("./src/app/modules/flat-role-groups/domain/flat-func-tree-datastorage.ts");
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




var FlatFuncTreeRepository = /** @class */ (function (_super) {
    __extends(FlatFuncTreeRepository, _super);
    function FlatFuncTreeRepository(injector) {
        return _super.call(this, injector) || this;
    }
    FlatFuncTreeRepository = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRepository"])({
            from: __WEBPACK_IMPORTED_MODULE_3__flat_func_tree_datastorage__["FlatFuncTreeDatastorage"],
            entityType: __WEBPACK_IMPORTED_MODULE_2__entities_flat_func_entity__["FlatFuncEntity"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], FlatFuncTreeRepository);
    return FlatFuncTreeRepository;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["Repository"]));



/***/ }),

/***/ "./src/app/modules/flat-role-groups/domain/flat-func.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatFuncService", function() { return FlatFuncService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flat_func_tree_datastorage__ = __webpack_require__("./src/app/modules/flat-role-groups/domain/flat-func-tree-datastorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flat_func_tree_repository__ = __webpack_require__("./src/app/modules/flat-role-groups/domain/flat-func-tree-repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FlatFuncService = /** @class */ (function () {
    function FlatFuncService(reposity, datastorage, rest) {
        this.reposity = reposity;
        this.datastorage = datastorage;
        this.rest = rest;
        this.url = '/api/runtime/sys/v1.0/rolegroups';
    }
    FlatFuncService.prototype.getdata = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["HttpHeaders"]().set('SessionId', this.sessionid);
        return this.rest.get(this.url + "/" + 'all', null, { headers: headers }).subscribe(function (res) {
            if (res instanceof Array) {
                res.forEach(function (item) {
                    if (item.parentId === '0') {
                        item.parentId = undefined;
                    }
                });
                _this.datastorage.load(res);
            }
            else {
                if (res.parentId === '0') {
                    res.parentId = undefined;
                }
                _this.datastorage.load([res]);
            }
        });
    };
    /**
     * 保存
     */
    FlatFuncService.prototype.save = function (item) {
        //todo:此处争取顺序应该是先httpservice 更新服务端，然后客户端重新load
        var _this = this;
        var entities = this.reposity.getAllEntities();
        entities.forEach(function (element) {
            if (element.FID === item.FID) {
                element.FCode = item.FCode;
                element.FIsdetail = item.FIsdetail;
                element.FLayer = item.FLayer;
                element.FName = item.FName;
                element.FNote = item.FNote;
                element.FParentid = item.FParentid;
                element.FPath = item.FPath;
                element.FSortorder = item.FSortorder;
                element.FSysinit = item.FSysinit;
                _this.postdata = _this.convert2json(item);
            }
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["HttpHeaders"]().set('SessionId', this.sessionid);
        this.rest.post(this.url, this.postdata, null, { headers: headers }).subscribe(function (res) {
            //this.getdata();
        }, function (error) {
            alert(error.error.Message);
        });
    };
    ;
    /**
     * 删除并重新加载
     */
    FlatFuncService.prototype.remove = function (id) {
        var _this = this;
        // todo:此处争取顺序应该是先httpservice 更新服务端，然后客户端重新load
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["HttpHeaders"]().set('SessionId', this.sessionid);
        this.rest.delete(this.url + "/" + id, null, { headers: headers }).subscribe(function (res) {
            _this.reposity.removeEntityById(id);
        });
    };
    ;
    FlatFuncService.prototype.convert2json = function (item) {
        var data = {
            Id: item.FID,
            Code: item.FCode,
            Name: item.FName,
            Path: item.FPath || '',
            ParentId: item.FParentid || '0',
            Layer: item.FLayer || 1,
            Note: item.FNote,
            IsDetail: item.FIsdetail,
            Creator: ''
        };
        return data;
    };
    FlatFuncService.prototype.clonefunction = function (item) {
    };
    FlatFuncService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__flat_func_tree_repository__["FlatFuncTreeRepository"],
            __WEBPACK_IMPORTED_MODULE_1__flat_func_tree_datastorage__["FlatFuncTreeDatastorage"],
            __WEBPACK_IMPORTED_MODULE_4__farris_devkit__["RestfulService"]])
    ], FlatFuncService);
    return FlatFuncService;
}());



/***/ }),

/***/ "./src/app/modules/flat-role-groups/domain/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAIN_PROVIDERS", function() { return DOMAIN_PROVIDERS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entities_flat_func_entity__ = __webpack_require__("./src/app/modules/flat-role-groups/domain/entities/flat-func.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flat_func_tree_datastorage__ = __webpack_require__("./src/app/modules/flat-role-groups/domain/flat-func-tree-datastorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flat_func_tree_repository__ = __webpack_require__("./src/app/modules/flat-role-groups/domain/flat-func-tree-repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__flat_func_service__ = __webpack_require__("./src/app/modules/flat-role-groups/domain/flat-func.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FlatFuncEntity", function() { return __WEBPACK_IMPORTED_MODULE_0__entities_flat_func_entity__["FlatFuncEntity"]; });
/* unused harmony reexport FlatFuncTreeDatastorage */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FlatFuncTreeRepository", function() { return __WEBPACK_IMPORTED_MODULE_2__flat_func_tree_repository__["FlatFuncTreeRepository"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FlatFuncService", function() { return __WEBPACK_IMPORTED_MODULE_3__flat_func_service__["FlatFuncService"]; });




var DOMAIN_PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_1__flat_func_tree_datastorage__["FlatFuncTreeDatastorage"],
    __WEBPACK_IMPORTED_MODULE_2__flat_func_tree_repository__["FlatFuncTreeRepository"],
    __WEBPACK_IMPORTED_MODULE_3__flat_func_service__["FlatFuncService"],
];



/***/ }),

/***/ "./src/app/modules/flat-role-groups/flat-function-tree.component.css":
/***/ (function(module, exports) {

module.exports = ".k-icon.my-custom-icon-class:before {\r\n        content: \"\\\\e13a\";\r\n     }"

/***/ }),

/***/ "./src/app/modules/flat-role-groups/flat-function-tree.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pt-2 mb-2\"> \n    <div class=\"pr-2 text-left\">\n                <button type=\"button\" (click)= \"viewmodel.additem()\" [disabled]=\"!viewmodel.stateMachine.canAdd\"  class=\"btn btn-sm btn-default\">新增同级 </button>\n                <button type=\"button\" (click)= \"viewmodel.addchild()\" [disabled]=\"!viewmodel.stateMachine.canAdd\"  class=\"btn btn-sm btn-default\">新增子级 </button>\n                <button type=\"button\"  [disabled]=\"!viewmodel.stateMachine.canEdit\"  (click)= \"viewmodel.edit()\"  class=\"btn btn-sm btn-default\">编辑 </button>\n                <button type=\"button\"   [disabled]=\"!viewmodel.stateMachine.canCancel\" (click)= \"viewmodel.cancel()\" class=\"btn btn-sm btn-default\">取消 </button>\n                <button type=\"button\"  [disabled]=\"!viewmodel.stateMachine.canSave\" (click)= \"viewmodel.save()\" class=\"btn btn-sm btn-default\">保存 </button>\n                <button type=\"button\"  [disabled]=\"!viewmodel.stateMachine.canDelete\"  (click)= \"viewmodel.remove()\" class=\"btn btn-sm btn-default\">删除 </button>\n    </div>\n\n    <div class=\"functioninfos\" style=\"height: 1300px\">\n    <kendo-splitter orientation=\"horizontal\" style=\"height: 100%;\">\n        <kendo-splitter-pane [collapsible]=\"true\"  size=\"30%\" min = \"20%\" max =\"70%\">\n            <!--工具栏了 BEGIN-->\n            <div class=\"row pt-2 mb-2\">\n                <div class=\"col-md-12 col-lg-12 funcinfo-col\">\n                    <h2>功能组分组</h2>\n                    <div class=\"card\" >\n                            <!--tree -->\n                        <div class=\"col-xs-12 col-sm-12 col-md-3 col-lg-3 \">                  \n                            <kendo-treeview style=\"width:500px\"  [nodes]=\"data\" textField=\"FName\" kendoTreeViewExpandable  kendoTreeViewFlatDataBinding  idField=\"FID\"  parentIdField=\"FParentid\" (selectionChange)=\"handleSelection($event)\" > </kendo-treeview>                  \n                        </div>\n                        <!--tree end -->\n                    </div>\n                </div>\n            </div>\n        </kendo-splitter-pane>\n        <kendo-splitter-pane   [resizable]=\"true\" style=\"height: 1300px;\">\n            <kendo-tabstrip >\n                <kendo-tabstrip-tab [title]=\"'基本信息'\" [selected]=\"true\" style=\"height : 1300px\">\n                    <ng-template kendoTabContent style=\"height : 1300px\">\n                        <!--info  -->\n                        <div class=\"row funcinfo-wrapper\">\n                            <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 funcinfo-col\">                        \n                                <div class=\"card col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                                    <div class=\"card-block \">\n                                        <form class=\"k-form\" [formGroup]=\"viewmodel.form\"  >\n                                            <label class=\"k-form-field\">\n                                                <span>内码 </span>\n                                                <input formControlName=\"id\" disabled=\"false\" class=\"k-textbox w-100\" />\n                                            </label>\n                                            <label class=\"k-form-field\">\n                                                <span>编号 </span>\n                                                <input class=\"k-textbox\" [readonly]=\"!viewmodel.stateMachine.canInput\" formControlName=\"code\"  />\n                                            </label>\n                                            <label class=\"k-form-field\">\n                                                <span>名称</span>\n                                                <input class=\"k-textbox\" [readonly]=\"!viewmodel.stateMachine.canInput\" formControlName=\"name\"/>\n                                            </label>\n                                            <label class=\"k-form-field\">\n                                                <span>描述</span>\n                                                <input class=\"k-textbox\" [readonly]=\"!viewmodel.stateMachine.canInput\" formControlName=\"note\"  />\n                                            </label>                                                        \n                                        </form>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </ng-template>\n                </kendo-tabstrip-tab>\n                <!-- <kendo-tabstrip-tab [title]=\"'高级信息'\" [selected]=\"true\" style=\"height : 100%\">\n                        <ng-template kendoTabContent >\n                            <div class=\"row funcinfo-wrapper\">\n                                <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 funcinfo-col\">                        \n                                    <div class=\"card col-xs-12 col-sm-12 col-md-12 col-lg-12\" >\n                                        <div class=\"card-block \">\n                                            <form class=\"k-form\" [formGroup]=\"viewmodel.form\"  >\n                                                <div class=\"k-form-field\">\n                                                    <input type=\"checkbox\" id=\"ch1\" class=\"k-checkbox\" [checked] = \"isworkstation\" >\n                                                    <label class=\"k-checkbox-label\" for=\"ch1\">发布为菜单</label>\n                                                \n                                                    <input type=\"checkbox\" id=\"ch2\" class=\"k-checkbox\" [checked] = \"viewmodel.form.FIsWorkStation.value\">\n                                                    <label class=\"k-checkbox-label\" for=\"ch2\">发布为联查</label>\n                                                \n                                                    <input type=\"checkbox\" id=\"ch3\" class=\"k-checkbox\">\n                                                    <label class=\"k-checkbox-label\" for=\"ch3\">发布为工作中心</label>\n                                                </div>\n                                                <fieldset>\n                                                    <legend>调用信息</legend>\n\n                                                    <label class=\"k-form-field\">\n                                                        <span>url </span>\n                                                        <input class=\"k-textbox w-100\" [disabled]=\"viewmodel.stateMachine.canInput\" formControlName=\"invokingtype\"/>\n                                                    </label>      \n                                                    <label class=\"k-form-field\">\n                                                            <span>path </span>\n                                                            <input  class=\"k-textbox w-100\" [disabled]=\"viewmodel.stateMachine.canInput\" formControlName=\"name\"/>\n                                                        </label>                                                    \n                                                </fieldset>\n                                            </form>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </ng-template>\n                    </kendo-tabstrip-tab> -->\n            </kendo-tabstrip> \n        </kendo-splitter-pane>\n</kendo-splitter>\n</div>\n        <!--info end -->\n</div>\n"

/***/ }),

/***/ "./src/app/modules/flat-role-groups/flat-function-tree.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatFunctionTreeComponent", function() { return FlatFunctionTreeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_flat_func_tree_viewmodel__ = __webpack_require__("./src/app/modules/flat-role-groups/app/flat-func-tree-viewmodel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__domain__ = __webpack_require__("./src/app/modules/flat-role-groups/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gsp_sys_rtf_common__ = __webpack_require__("./node_modules/@gsp-sys/rtf-common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gsp_sys_rtf_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__gsp_sys_rtf_common__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FlatFunctionTreeComponent = /** @class */ (function () {
    function FlatFunctionTreeComponent(viewmodel, route, dataService, frmService) {
        this.viewmodel = viewmodel;
        this.route = route;
        this.dataService = dataService;
        this.frmService = frmService;
    }
    FlatFunctionTreeComponent.prototype.fetchChildren = function (node) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["of"])(node.items);
    };
    FlatFunctionTreeComponent.prototype.hasChildren = function (node) {
        return node.items && node.items.length > 0;
    };
    FlatFunctionTreeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            if (params.has('funcid')) {
                var funcid = params.get('funcid');
                _this.dataService.sessionid = _this.frmService.getSession(funcid);
            }
        });
        this.viewmodel.bindingData.changes.subscribe(function (changes) {
            console.log("changetype =" + changes.type);
            if (changes.type === __WEBPACK_IMPORTED_MODULE_3__farris_devkit__["ChangeType"].SelectionChanged)
                return;
            _this.data = _this.viewmodel.bindingData.list.toJSON();
            console.log(JSON.stringify(_this.data));
        });
        this.viewmodel.form.valueChanges.subscribe(function (changes) {
            console.log("changetype =" + changes.type);
            _this.data = _this.viewmodel.bindingData.list.toJSON();
            console.log(JSON.stringify(_this.data));
        });
        this.viewmodel.formLoad();
        this.isworkstation = false;
    };
    FlatFunctionTreeComponent.prototype.handleSelection = function (_a) {
        var dataItem = _a.dataItem;
        this.isworkstation = dataItem.FIsWorkStation;
        this.viewmodel.bindingData.list.setCurrentId(dataItem.FID);
    };
    FlatFunctionTreeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-function-tree',
            template: __webpack_require__("./src/app/modules/flat-role-groups/flat-function-tree.component.html"),
            styles: [__webpack_require__("./src/app/modules/flat-role-groups/flat-function-tree.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_flat_func_tree_viewmodel__["FlatFuncTreeViewmodel"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_5__domain__["FlatFuncService"],
            __WEBPACK_IMPORTED_MODULE_6__gsp_sys_rtf_common__["FrameworkService"]])
    ], FlatFunctionTreeComponent);
    return FlatFunctionTreeComponent;
}());



/***/ }),

/***/ "./src/app/modules/flat-role-groups/flat-function-tree.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatFuncTreeRoutingModule", function() { return FlatFuncTreeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flat_function_tree_component__ = __webpack_require__("./src/app/modules/flat-role-groups/flat-function-tree.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__flat_function_tree_component__["FlatFunctionTreeComponent"] }
];
var FlatFuncTreeRoutingModule = /** @class */ (function () {
    function FlatFuncTreeRoutingModule() {
    }
    FlatFuncTreeRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
            ]
        })
    ], FlatFuncTreeRoutingModule);
    return FlatFuncTreeRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/flat-role-groups/flat-role-group.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatRoleGroupTreeModule", function() { return FlatRoleGroupTreeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flat_function_tree_component__ = __webpack_require__("./src/app/modules/flat-role-groups/flat-function-tree.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__flat_function_tree_routing_module__ = __webpack_require__("./src/app/modules/flat-role-groups/flat-function-tree.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_treeview__ = __webpack_require__("./node_modules/@progress/kendo-angular-treeview/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_layout__ = __webpack_require__("./node_modules/@progress/kendo-angular-layout/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__domain_flat_func_service__ = __webpack_require__("./src/app/modules/flat-role-groups/domain/flat-func.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__domain__ = __webpack_require__("./src/app/modules/flat-role-groups/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app__ = __webpack_require__("./src/app/modules/flat-role-groups/app/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var FlatRoleGroupTreeModule = /** @class */ (function () {
    function FlatRoleGroupTreeModule() {
    }
    FlatRoleGroupTreeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__flat_function_tree_routing_module__["FlatFuncTreeRoutingModule"],
                __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_treeview__["TreeViewModule"],
                __WEBPACK_IMPORTED_MODULE_6__farris_devkit__["CommandModule"].setup(__WEBPACK_IMPORTED_MODULE_10__app__["commandHandlers"], []),
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_layout__["LayoutModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__flat_function_tree_component__["FlatFunctionTreeComponent"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__domain_flat_func_service__["FlatFuncService"],
                __WEBPACK_IMPORTED_MODULE_9__domain__["DOMAIN_PROVIDERS"],
                __WEBPACK_IMPORTED_MODULE_10__app__["APP_PROVIDERS"],
                __WEBPACK_IMPORTED_MODULE_10__app__["commandHandlers"],
                __WEBPACK_IMPORTED_MODULE_6__farris_devkit__["RestfulService"]
            ]
        })
    ], FlatRoleGroupTreeModule);
    return FlatRoleGroupTreeModule;
}());

//# sourceMappingURL=flat-role-group.module.js.map

/***/ }),

/***/ "./src/app/modules/shared/data-util.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataUtil", function() { return DataUtil; });
var DataUtil = /** @class */ (function () {
    function DataUtil() {
    }
    /**
     * 创建内码
     */
    DataUtil.createNM = function () {
        // const S4 = function() {
        //     return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        // };
        // return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4());
        return '' + Math.round(Math.random() * 10000);
    };
    /**
     * 创建编号
     */
    DataUtil.createBH = function (prefix) {
        var d = new Date();
        return "" + prefix + d.getFullYear() + d.getMonth() + d.getDate() + d.getHours() + d.getMinutes() + d.getSeconds();
    };
    return DataUtil;
}());



/***/ })

},[],["angular","farris","rtf","progress","rxjs"],["angular","farris","rtf","progress","rxjs"]);
//# sourceMappingURL=flat-role-group.module.chunk.js.map