webpackJsonp(["sys-organization.module"],{

/***/ "./src/app/modules/sys-organization/app/handler/organization-addchild.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgAddChildHandler", function() { return OrgAddChildHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sys_organization_statemachine__ = __webpack_require__("./src/app/modules/sys-organization/app/sys-organization.statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__domain__ = __webpack_require__("./src/app/modules/sys-organization/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sys_organization_bindingdata__ = __webpack_require__("./src/app/modules/sys-organization/app/sys-organization.bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_data_util__ = __webpack_require__("./src/app/modules/sys-organization/shared/data-util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sys_organization_uistate__ = __webpack_require__("./src/app/modules/sys-organization/app/sys-organization-uistate.ts");
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







var OrgAddChildHandler = /** @class */ (function (_super) {
    __extends(OrgAddChildHandler, _super);
    function OrgAddChildHandler(uiState, stateMachine, repository, bindingData) {
        var _this = _super.call(this) || this;
        _this.uiState = uiState;
        _this.stateMachine = stateMachine;
        _this.repository = repository;
        _this.bindingData = bindingData;
        return _this;
    }
    OrgAddChildHandler.prototype.schedule = function () {
        var _this = this;
        this.addTask('addchild', function () {
            _this.uiState.action = 'add';
            var item = _this.bindingData.list.currentItem;
            var data = {
                id: __WEBPACK_IMPORTED_MODULE_5__shared_data_util__["DataUtil"].createNM(),
                code: '',
                name: '',
                parentId: item['Id'],
                layer: item['Layer'] + 1
            };
            var newEntity = Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["EntityFactory"])(__WEBPACK_IMPORTED_MODULE_3__domain__["OrgnizationEntity"], data);
            _this.repository.addEntity(newEntity);
            _this.stateMachine['edit']();
        });
    };
    OrgAddChildHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'addchild'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__sys_organization_uistate__["OrganizationUistate"],
            __WEBPACK_IMPORTED_MODULE_2__sys_organization_statemachine__["OrganizationStateMachine"],
            __WEBPACK_IMPORTED_MODULE_3__domain__["OrganizationRepository"],
            __WEBPACK_IMPORTED_MODULE_4__sys_organization_bindingdata__["OrganizationBindingData"]])
    ], OrgAddChildHandler);
    return OrgAddChildHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/sys-organization/app/handler/organization-additem.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgAdditemHandler", function() { return OrgAdditemHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sys_organization_statemachine__ = __webpack_require__("./src/app/modules/sys-organization/app/sys-organization.statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__domain__ = __webpack_require__("./src/app/modules/sys-organization/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_data_util__ = __webpack_require__("./src/app/modules/sys-organization/shared/data-util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sys_organization_uistate__ = __webpack_require__("./src/app/modules/sys-organization/app/sys-organization-uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sys_organization_bindingdata__ = __webpack_require__("./src/app/modules/sys-organization/app/sys-organization.bindingdata.ts");
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







var OrgAdditemHandler = /** @class */ (function (_super) {
    __extends(OrgAdditemHandler, _super);
    function OrgAdditemHandler(uiState, stateMachine, repository, bindingData) {
        var _this = _super.call(this) || this;
        _this.uiState = uiState;
        _this.stateMachine = stateMachine;
        _this.repository = repository;
        _this.bindingData = bindingData;
        return _this;
    }
    OrgAdditemHandler.prototype.schedule = function () {
        var _this = this;
        this.addTask('additem', function () {
            _this.uiState.action = 'add';
            var item = _this.bindingData.list.currentItem;
            var data = {
                id: __WEBPACK_IMPORTED_MODULE_4__shared_data_util__["DataUtil"].createNM(),
                code: '',
                name: '',
                parentId: item['ParentId'],
                layer: item['Layer'],
                path: ''
            };
            var newEntity = Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["EntityFactory"])(__WEBPACK_IMPORTED_MODULE_3__domain__["OrgnizationEntity"], data);
            _this.repository.addEntity(newEntity);
            _this.stateMachine['edit']();
        });
    };
    OrgAdditemHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'additem'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__sys_organization_uistate__["OrganizationUistate"],
            __WEBPACK_IMPORTED_MODULE_2__sys_organization_statemachine__["OrganizationStateMachine"],
            __WEBPACK_IMPORTED_MODULE_3__domain__["OrganizationRepository"],
            __WEBPACK_IMPORTED_MODULE_6__sys_organization_bindingdata__["OrganizationBindingData"]])
    ], OrgAdditemHandler);
    return OrgAdditemHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/sys-organization/app/handler/organization-cancle.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgCancleHandler", function() { return OrgCancleHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain__ = __webpack_require__("./src/app/modules/sys-organization/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sys_organization_statemachine__ = __webpack_require__("./src/app/modules/sys-organization/app/sys-organization.statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sys_organization_bindingdata__ = __webpack_require__("./src/app/modules/sys-organization/app/sys-organization.bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sys_organization_uistate__ = __webpack_require__("./src/app/modules/sys-organization/app/sys-organization-uistate.ts");
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






var OrgCancleHandler = /** @class */ (function (_super) {
    __extends(OrgCancleHandler, _super);
    function OrgCancleHandler(repository, bindingData, stateMachine, uiState) {
        var _this = _super.call(this) || this;
        _this.repository = repository;
        _this.bindingData = bindingData;
        _this.stateMachine = stateMachine;
        _this.uiState = uiState;
        return _this;
    }
    OrgCancleHandler.prototype.schedule = function () {
        var _this = this;
        this.addTask('cancle', function () {
            _this.stateMachine['view']();
            if (_this.uiState.action !== 'add') {
                return;
            }
            var id = _this.bindingData.list.currentId;
            _this.repository.removeEntityById(id.toString());
            _this.uiState.action = 'cancle';
        });
    };
    OrgCancleHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'cancle'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__domain__["OrganizationRepository"],
            __WEBPACK_IMPORTED_MODULE_4__sys_organization_bindingdata__["OrganizationBindingData"],
            __WEBPACK_IMPORTED_MODULE_3__sys_organization_statemachine__["OrganizationStateMachine"],
            __WEBPACK_IMPORTED_MODULE_5__sys_organization_uistate__["OrganizationUistate"]])
    ], OrgCancleHandler);
    return OrgCancleHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/sys-organization/app/handler/organization-edit.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgEditHandler", function() { return OrgEditHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sys_organization_uistate__ = __webpack_require__("./src/app/modules/sys-organization/app/sys-organization-uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sys_organization_statemachine__ = __webpack_require__("./src/app/modules/sys-organization/app/sys-organization.statemachine.ts");
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




var OrgEditHandler = /** @class */ (function (_super) {
    __extends(OrgEditHandler, _super);
    function OrgEditHandler(uiState, stateMachine) {
        var _this = _super.call(this) || this;
        _this.uiState = uiState;
        _this.stateMachine = stateMachine;
        return _this;
    }
    OrgEditHandler.prototype.schedule = function () {
        var _this = this;
        this.addTask('tranState', function () {
            _this.uiState.action = 'edit';
            _this.stateMachine['edit']();
        });
    };
    OrgEditHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'edit'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__sys_organization_uistate__["OrganizationUistate"],
            __WEBPACK_IMPORTED_MODULE_3__sys_organization_statemachine__["OrganizationStateMachine"]])
    ], OrgEditHandler);
    return OrgEditHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/sys-organization/app/handler/organization-formload.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgFormLoadHandler", function() { return OrgFormLoadHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain__ = __webpack_require__("./src/app/modules/sys-organization/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sys_organization_uistate__ = __webpack_require__("./src/app/modules/sys-organization/app/sys-organization-uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sys_organization_statemachine__ = __webpack_require__("./src/app/modules/sys-organization/app/sys-organization.statemachine.ts");
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





var OrgFormLoadHandler = /** @class */ (function (_super) {
    __extends(OrgFormLoadHandler, _super);
    function OrgFormLoadHandler(dataService, uiState, stateMachine) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.uiState = uiState;
        _this.stateMachine = stateMachine;
        return _this;
    }
    OrgFormLoadHandler.prototype.schedule = function () {
        var _this = this;
        // 数据加载
        this.addTask('loadData', function () {
            _this.uiState.action = 'load';
            _this.dataService.loadData();
        });
    };
    OrgFormLoadHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'formLoad'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__domain__["OrganizationDataServcie"],
            __WEBPACK_IMPORTED_MODULE_3__sys_organization_uistate__["OrganizationUistate"],
            __WEBPACK_IMPORTED_MODULE_4__sys_organization_statemachine__["OrganizationStateMachine"]])
    ], OrgFormLoadHandler);
    return OrgFormLoadHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/sys-organization/app/handler/organization-remove.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgRemoveHandler", function() { return OrgRemoveHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sys_organization_bindingdata__ = __webpack_require__("./src/app/modules/sys-organization/app/sys-organization.bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sys_organization_uistate__ = __webpack_require__("./src/app/modules/sys-organization/app/sys-organization-uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sys_organization_statemachine__ = __webpack_require__("./src/app/modules/sys-organization/app/sys-organization.statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__domain__ = __webpack_require__("./src/app/modules/sys-organization/domain/index.ts");
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






var OrgRemoveHandler = /** @class */ (function (_super) {
    __extends(OrgRemoveHandler, _super);
    function OrgRemoveHandler(bindingData, uiState, stateMachine, dataService) {
        var _this = _super.call(this) || this;
        _this.bindingData = bindingData;
        _this.uiState = uiState;
        _this.stateMachine = stateMachine;
        _this.dataService = dataService;
        return _this;
    }
    OrgRemoveHandler.prototype.schedule = function () {
        var _this = this;
        this.addTask('remove', function () {
            var id = _this.bindingData['Id'];
            _this.uiState.action = 'remove';
            _this.dataService.remove(id);
            _this.stateMachine['view']();
        });
    };
    OrgRemoveHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'remove'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__sys_organization_bindingdata__["OrganizationBindingData"],
            __WEBPACK_IMPORTED_MODULE_3__sys_organization_uistate__["OrganizationUistate"],
            __WEBPACK_IMPORTED_MODULE_4__sys_organization_statemachine__["OrganizationStateMachine"],
            __WEBPACK_IMPORTED_MODULE_5__domain__["OrganizationDataServcie"]])
    ], OrgRemoveHandler);
    return OrgRemoveHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/sys-organization/app/handler/organization-save.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgSaveHandler", function() { return OrgSaveHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain__ = __webpack_require__("./src/app/modules/sys-organization/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sys_organization_bindingdata__ = __webpack_require__("./src/app/modules/sys-organization/app/sys-organization.bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sys_organization_statemachine__ = __webpack_require__("./src/app/modules/sys-organization/app/sys-organization.statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sys_organization_uistate__ = __webpack_require__("./src/app/modules/sys-organization/app/sys-organization-uistate.ts");
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






var OrgSaveHandler = /** @class */ (function (_super) {
    __extends(OrgSaveHandler, _super);
    function OrgSaveHandler(dataService, bindingData, uiState, stateMachine) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.bindingData = bindingData;
        _this.uiState = uiState;
        _this.stateMachine = stateMachine;
        return _this;
    }
    OrgSaveHandler.prototype.schedule = function () {
        var _this = this;
        this.addTask('save', function () {
            var item = _this.bindingData.list.currentItem;
            if (!item['Name']) {
                alert('组织名称不能为空!');
                return;
            }
            if (!item['Code']) {
                alert('组织编号不能为空!');
                return;
            }
            if (_this.uiState.action == 'edit') {
                _this.dataService.savePut(item);
            }
            else {
                _this.dataService.savePost(item);
            }
            _this.uiState.action = 'save';
            _this.stateMachine['view']();
        });
    };
    OrgSaveHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'save'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__domain__["OrganizationDataServcie"],
            __WEBPACK_IMPORTED_MODULE_3__sys_organization_bindingdata__["OrganizationBindingData"],
            __WEBPACK_IMPORTED_MODULE_5__sys_organization_uistate__["OrganizationUistate"],
            __WEBPACK_IMPORTED_MODULE_4__sys_organization_statemachine__["OrganizationStateMachine"]])
    ], OrgSaveHandler);
    return OrgSaveHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/sys-organization/app/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_PROVIDERS", function() { return APP_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commandHandler", function() { return commandHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__handler_organization_formload__ = __webpack_require__("./src/app/modules/sys-organization/app/handler/organization-formload.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sys_organization_bindingdata__ = __webpack_require__("./src/app/modules/sys-organization/app/sys-organization.bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sys_organization_form__ = __webpack_require__("./src/app/modules/sys-organization/app/sys-organization-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sys_organization_statemachine__ = __webpack_require__("./src/app/modules/sys-organization/app/sys-organization.statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sys_organization_uistate__ = __webpack_require__("./src/app/modules/sys-organization/app/sys-organization-uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sys_organization_viewmodel__ = __webpack_require__("./src/app/modules/sys-organization/app/sys-organization-viewmodel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__handler_organization_additem__ = __webpack_require__("./src/app/modules/sys-organization/app/handler/organization-additem.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__handler_organization_save__ = __webpack_require__("./src/app/modules/sys-organization/app/handler/organization-save.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__handler_organization_addchild__ = __webpack_require__("./src/app/modules/sys-organization/app/handler/organization-addchild.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__handler_organization_cancle__ = __webpack_require__("./src/app/modules/sys-organization/app/handler/organization-cancle.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__handler_organization_edit__ = __webpack_require__("./src/app/modules/sys-organization/app/handler/organization-edit.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__handler_organization_remove__ = __webpack_require__("./src/app/modules/sys-organization/app/handler/organization-remove.ts");
/* unused harmony reexport OrganizationBindingData */
/* unused harmony reexport OrganizationForm */
/* unused harmony reexport OrganizationStateMachine */
/* unused harmony reexport OrganizationUistate */
/* unused harmony reexport OrganizationViewModel */












//Handler
var commandHandler = [__WEBPACK_IMPORTED_MODULE_0__handler_organization_formload__["OrgFormLoadHandler"],
    __WEBPACK_IMPORTED_MODULE_6__handler_organization_additem__["OrgAdditemHandler"],
    __WEBPACK_IMPORTED_MODULE_7__handler_organization_save__["OrgSaveHandler"],
    __WEBPACK_IMPORTED_MODULE_8__handler_organization_addchild__["OrgAddChildHandler"],
    __WEBPACK_IMPORTED_MODULE_9__handler_organization_cancle__["OrgCancleHandler"],
    __WEBPACK_IMPORTED_MODULE_10__handler_organization_edit__["OrgEditHandler"],
    __WEBPACK_IMPORTED_MODULE_11__handler_organization_remove__["OrgRemoveHandler"]
];
//Providers
var APP_PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_1__sys_organization_bindingdata__["OrganizationBindingData"],
    __WEBPACK_IMPORTED_MODULE_2__sys_organization_form__["OrganizationForm"],
    __WEBPACK_IMPORTED_MODULE_3__sys_organization_statemachine__["OrganizationStateMachine"],
    __WEBPACK_IMPORTED_MODULE_4__sys_organization_uistate__["OrganizationUistate"],
    __WEBPACK_IMPORTED_MODULE_5__sys_organization_viewmodel__["OrganizationViewModel"]
];



/***/ }),

/***/ "./src/app/modules/sys-organization/app/sys-organization-form.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationForm", function() { return OrganizationForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sys_organization_bindingdata__ = __webpack_require__("./src/app/modules/sys-organization/app/sys-organization.bindingdata.ts");
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




var OrganizationForm = /** @class */ (function (_super) {
    __extends(OrganizationForm, _super);
    function OrganizationForm(injector) {
        return _super.call(this, injector) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'Id',
            binding: 'Id'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], OrganizationForm.prototype, "Id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'ParentId',
            binding: 'ParentId'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], OrganizationForm.prototype, "ParentId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'code',
            binding: 'Code'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], OrganizationForm.prototype, "Code", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'name',
            binding: 'Name'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], OrganizationForm.prototype, "Name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'path',
            binding: 'Path'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], OrganizationForm.prototype, "Path", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'layer',
            binding: 'Layer'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], OrganizationForm.prototype, "Layer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'isdetail',
            binding: 'IsDetail'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], OrganizationForm.prototype, "IsDetail", void 0);
    OrganizationForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgForm"])({
            bindingData: __WEBPACK_IMPORTED_MODULE_3__sys_organization_bindingdata__["OrganizationBindingData"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], OrganizationForm);
    return OrganizationForm;
}(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["Form"]));



/***/ }),

/***/ "./src/app/modules/sys-organization/app/sys-organization-uistate.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationUistate", function() { return OrganizationUistate; });
var OrganizationUistate = /** @class */ (function () {
    function OrganizationUistate() {
    }
    return OrganizationUistate;
}());



/***/ }),

/***/ "./src/app/modules/sys-organization/app/sys-organization-viewmodel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationViewModel", function() { return OrganizationViewModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sys_organization_bindingdata__ = __webpack_require__("./src/app/modules/sys-organization/app/sys-organization.bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sys_organization_form__ = __webpack_require__("./src/app/modules/sys-organization/app/sys-organization-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sys_organization_statemachine__ = __webpack_require__("./src/app/modules/sys-organization/app/sys-organization.statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sys_organization_uistate__ = __webpack_require__("./src/app/modules/sys-organization/app/sys-organization-uistate.ts");
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






var OrganizationViewModel = /** @class */ (function (_super) {
    __extends(OrganizationViewModel, _super);
    function OrganizationViewModel(injector) {
        var _this = _super.call(this, injector) || this;
        _this.uiState = _this.injector.get(__WEBPACK_IMPORTED_MODULE_5__sys_organization_uistate__["OrganizationUistate"]);
        return _this;
    }
    /**
 * 表单加载
 */
    OrganizationViewModel.prototype.formLoad = function () { };
    /**
     * 新增子级
     */
    OrganizationViewModel.prototype.addchild = function () { };
    /**
     * 新增平级
     */
    OrganizationViewModel.prototype.additem = function () { };
    /**
     * 编辑
     */
    OrganizationViewModel.prototype.edit = function () { };
    /**
     * 删除
     */
    OrganizationViewModel.prototype.remove = function () { };
    /**
     * 保存
     */
    OrganizationViewModel.prototype.save = function () { };
    /**
     * 取消
     */
    OrganizationViewModel.prototype.cancel = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'formLoad'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], OrganizationViewModel.prototype, "formLoad", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'addchild'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], OrganizationViewModel.prototype, "addchild", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'additem'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], OrganizationViewModel.prototype, "additem", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'edit'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], OrganizationViewModel.prototype, "edit", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'remove'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], OrganizationViewModel.prototype, "remove", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'save'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], OrganizationViewModel.prototype, "save", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'cancle'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], OrganizationViewModel.prototype, "cancel", null);
    OrganizationViewModel = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgViewModel"])({
            children: [],
            binding: __WEBPACK_IMPORTED_MODULE_2__sys_organization_bindingdata__["OrganizationBindingData"],
            form: __WEBPACK_IMPORTED_MODULE_3__sys_organization_form__["OrganizationForm"],
            stateMachine: __WEBPACK_IMPORTED_MODULE_4__sys_organization_statemachine__["OrganizationStateMachine"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], OrganizationViewModel);
    return OrganizationViewModel;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["ViewModel"]));



/***/ }),

/***/ "./src/app/modules/sys-organization/app/sys-organization.bindingdata.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationBindingData", function() { return OrganizationBindingData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain__ = __webpack_require__("./src/app/modules/sys-organization/domain/index.ts");
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



/*
*bindingdata是实体集合的影射，与entity双向通信，ui与实体间的一个管道
*/
var OrganizationBindingData = /** @class */ (function (_super) {
    __extends(OrganizationBindingData, _super);
    function OrganizationBindingData(injector) {
        return _super.call(this, injector) || this;
    }
    OrganizationBindingData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgBindingData"])({
            entity: __WEBPACK_IMPORTED_MODULE_2__domain__["OrgnizationEntity"],
            repository: __WEBPACK_IMPORTED_MODULE_2__domain__["OrganizationRepository"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], OrganizationBindingData);
    return OrganizationBindingData;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["BindingData"]));



/***/ }),

/***/ "./src/app/modules/sys-organization/app/sys-organization.statemachine.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationStateMachine", function() { return OrganizationStateMachine; });
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


var OrganizationStateMachine = /** @class */ (function (_super) {
    __extends(OrganizationStateMachine, _super);
    function OrganizationStateMachine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgState"])({ initialState: true }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__farris_devkit__["State"])
    ], OrganizationStateMachine.prototype, "viewState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgState"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__farris_devkit__["State"])
    ], OrganizationStateMachine.prototype, "addState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgState"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__farris_devkit__["State"])
    ], OrganizationStateMachine.prototype, "editState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'viewState'; }
        }),
        __metadata("design:type", Boolean)
    ], OrganizationStateMachine.prototype, "canAdd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'viewState'; }
        }),
        __metadata("design:type", Boolean)
    ], OrganizationStateMachine.prototype, "canEdit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'addState' || context.state === 'editState'; }
        }),
        __metadata("design:type", Boolean)
    ], OrganizationStateMachine.prototype, "canCancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'viewState'; }
        }),
        __metadata("design:type", Boolean)
    ], OrganizationStateMachine.prototype, "canDelete", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'addState' || context.state === 'editState'; }
        }),
        __metadata("design:type", Boolean)
    ], OrganizationStateMachine.prototype, "canSave", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'viewState'; }
        }),
        __metadata("design:type", Boolean)
    ], OrganizationStateMachine.prototype, "canSwitch", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'addState' || context.state === 'editState'; }
        }),
        __metadata("design:type", Boolean)
    ], OrganizationStateMachine.prototype, "canInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgAction"])({ transitTo: 'addState' }),
        __metadata("design:type", Function)
    ], OrganizationStateMachine.prototype, "add", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgAction"])({ transitTo: 'editState' }),
        __metadata("design:type", Function)
    ], OrganizationStateMachine.prototype, "edit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgAction"])({ transitTo: 'viewState' }),
        __metadata("design:type", Function)
    ], OrganizationStateMachine.prototype, "view", void 0);
    OrganizationStateMachine = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgStatemachine"])()
    ], OrganizationStateMachine);
    return OrganizationStateMachine;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["StateMachine"]));



/***/ }),

/***/ "./src/app/modules/sys-organization/domain/entities/organization.entity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgnizationEntity", function() { return OrgnizationEntity; });
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

//定义此实体与服务端实体对应
var OrgnizationEntity = /** @class */ (function (_super) {
    __extends(OrgnizationEntity, _super);
    function OrgnizationEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])({
            dataField: 'id',
            primary: true
        }),
        __metadata("design:type", String)
    ], OrgnizationEntity.prototype, "Id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])({
            dataField: 'code'
        }),
        __metadata("design:type", String)
    ], OrgnizationEntity.prototype, "Code", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])({
            dataField: 'name'
        }),
        __metadata("design:type", String)
    ], OrgnizationEntity.prototype, "Name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])({
            dataField: 'parentId'
        }),
        __metadata("design:type", String)
    ], OrgnizationEntity.prototype, "ParentId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])({
            dataField: 'path'
        }),
        __metadata("design:type", String)
    ], OrgnizationEntity.prototype, "Path", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])({
            dataField: 'layer'
        }),
        __metadata("design:type", Number)
    ], OrgnizationEntity.prototype, "Layer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])({
            dataField: 'isDetail'
        }),
        __metadata("design:type", Boolean)
    ], OrgnizationEntity.prototype, "IsDetail", void 0);
    return OrgnizationEntity;
}(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["Entity"]));



/***/ }),

/***/ "./src/app/modules/sys-organization/domain/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAIN_PROVIDERS", function() { return DOMAIN_PROVIDERS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sys_organization_datastorage__ = __webpack_require__("./src/app/modules/sys-organization/domain/sys-organization-datastorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sys_organization_repository__ = __webpack_require__("./src/app/modules/sys-organization/domain/sys-organization-repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sys_organization_dataservice__ = __webpack_require__("./src/app/modules/sys-organization/domain/sys-organization-dataservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_organization_entity__ = __webpack_require__("./src/app/modules/sys-organization/domain/entities/organization.entity.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "OrgnizationEntity", function() { return __WEBPACK_IMPORTED_MODULE_3__entities_organization_entity__["OrgnizationEntity"]; });
/* unused harmony reexport OrganizationDataStorage */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationRepository", function() { return __WEBPACK_IMPORTED_MODULE_1__sys_organization_repository__["OrganizationRepository"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationDataServcie", function() { return __WEBPACK_IMPORTED_MODULE_2__sys_organization_dataservice__["OrganizationDataServcie"]; });




//归集当前子模块中的服务，injectabal 可注入的那些
var DOMAIN_PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_0__sys_organization_datastorage__["OrganizationDataStorage"],
    __WEBPACK_IMPORTED_MODULE_1__sys_organization_repository__["OrganizationRepository"],
    __WEBPACK_IMPORTED_MODULE_2__sys_organization_dataservice__["OrganizationDataServcie"]
];
//当前子模块中暴露出一些对外可用的东西

/**
 * DOMAIN 中定义了一些实体，及实体取数与相关映射的服务
 */ 


/***/ }),

/***/ "./src/app/modules/sys-organization/domain/sys-organization-dataservice.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationDataServcie", function() { return OrganizationDataServcie; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sys_organization_datastorage__ = __webpack_require__("./src/app/modules/sys-organization/domain/sys-organization-datastorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sys_organization_repository__ = __webpack_require__("./src/app/modules/sys-organization/domain/sys-organization-repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_data_util__ = __webpack_require__("./src/app/modules/sys-organization/shared/data-util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrganizationDataServcie = /** @class */ (function () {
    function OrganizationDataServcie(rest, orgDataStore, repository) {
        this.rest = rest;
        this.orgDataStore = orgDataStore;
        this.repository = repository;
        this.url = '/api/runtime/sys/v1.0/sysOrgs';
    }
    OrganizationDataServcie.prototype.loadData = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["HttpHeaders"]().set("SessionId", this.sessionId);
        return this.rest.get(this.url + "/" + 'all', null, { headers: headers }).subscribe(function (org) {
            if (org instanceof Array) {
                org.forEach(function (item) {
                    if (item.parentId === "") {
                        item.parentId = undefined;
                    }
                });
                _this.orgDataStore.load(org);
            }
            else {
                _this.orgDataStore.load([org]);
            }
        });
    };
    OrganizationDataServcie.prototype.addNewData = function (parentId) {
        var data = {
            id: __WEBPACK_IMPORTED_MODULE_4__shared_data_util__["DataUtil"].createNM(),
            code: '',
            name: '',
            parentId: parentId,
            path: ''
        };
        //const newEntity = EntityFactory<OrgnizationEntity>(OrgnizationEntity, data);
        this.orgDataStore.addItem([data]);
    };
    OrganizationDataServcie.prototype.remove = function (id) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["HttpHeaders"]().set("SessionId", this.sessionId);
        //todo http请求先从服务端remove 然后datastore重新load
        this.rest.delete(this.url + "/" + id, null, { headers: headers }).subscribe(function (res) {
            _this.repository.removeEntityById(id);
        });
    };
    /**
  * 保存
  */
    OrganizationDataServcie.prototype.savePost = function (data) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["HttpHeaders"]().set("SessionId", this.sessionId);
        var entities = this.repository.getAllEntities();
        entities.forEach(function (element) {
            if (element.Id === data.Id) {
                element.Code = data.Code;
                element.Name = data.Name;
                element.ParentId = data.ParentId;
                element.Path = data.Path;
                var postRes = _this.convert2Json(data);
                _this.rest.post(_this.url, postRes, null, { headers: headers }).subscribe(function (res) {
                    //this.loadData();
                }, function (error) {
                    alert(error.error.Message);
                });
            }
        });
    };
    OrganizationDataServcie.prototype.savePut = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["HttpHeaders"]().set("SessionId", this.sessionId);
        var dataBody = this.convert2Json(data);
        this.rest.put(this.url, dataBody, null, { headers: headers }).subscribe(function (res) { });
    };
    /**
     * 保存变更集
     */
    OrganizationDataServcie.prototype.saveChanges = function (changes) {
        console.log('变更集保存成功');
    };
    OrganizationDataServcie.prototype.convert2Json = function (item) {
        var result = {
            id: item.Id,
            code: item.Code,
            name: item.Name,
            parentId: item.ParentId || '',
            path: item.Path,
            layer: item.Layer
        };
        return result;
    };
    OrganizationDataServcie = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["RestfulService"],
            __WEBPACK_IMPORTED_MODULE_2__sys_organization_datastorage__["OrganizationDataStorage"],
            __WEBPACK_IMPORTED_MODULE_3__sys_organization_repository__["OrganizationRepository"]])
    ], OrganizationDataServcie);
    return OrganizationDataServcie;
}());



/***/ }),

/***/ "./src/app/modules/sys-organization/domain/sys-organization-datastorage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationDataStorage", function() { return OrganizationDataStorage; });
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


//服务端取回的实体数据存放在此
var OrganizationDataStorage = /** @class */ (function (_super) {
    __extends(OrganizationDataStorage, _super);
    function OrganizationDataStorage() {
        return _super.call(this) || this;
    }
    OrganizationDataStorage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], OrganizationDataStorage);
    return OrganizationDataStorage;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["MemoryStorage"]));



/***/ }),

/***/ "./src/app/modules/sys-organization/domain/sys-organization-repository.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationRepository", function() { return OrganizationRepository; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sys_organization_datastorage__ = __webpack_require__("./src/app/modules/sys-organization/domain/sys-organization-datastorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_organization_entity__ = __webpack_require__("./src/app/modules/sys-organization/domain/entities/organization.entity.ts");
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




//将本地存放的数据与相应实体建立映射关系
var OrganizationRepository = /** @class */ (function (_super) {
    __extends(OrganizationRepository, _super);
    function OrganizationRepository(injector) {
        return _super.call(this, injector) || this;
    }
    OrganizationRepository = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRepository"])({
            from: __WEBPACK_IMPORTED_MODULE_2__sys_organization_datastorage__["OrganizationDataStorage"],
            entityType: __WEBPACK_IMPORTED_MODULE_3__entities_organization_entity__["OrgnizationEntity"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], OrganizationRepository);
    return OrganizationRepository;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["Repository"]));



/***/ }),

/***/ "./src/app/modules/sys-organization/shared/data-util.ts":
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



/***/ }),

/***/ "./src/app/modules/sys-organization/sys-organization-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SysOrganizationRoutingModule", function() { return SysOrganizationRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sys_organization_component__ = __webpack_require__("./src/app/modules/sys-organization/sys-organization.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//添加路由定义
var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__sys_organization_component__["SysOrganizationComponent"] }
];
var SysOrganizationRoutingModule = /** @class */ (function () {
    function SysOrganizationRoutingModule() {
    }
    SysOrganizationRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes) //引入路由监听
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"] //导出路由模块，因此配置此路由的模块下的组件，可以用此路由的相关命令
            ]
        })
    ], SysOrganizationRoutingModule);
    return SysOrganizationRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/sys-organization/sys-organization.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/sys-organization/sys-organization.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pt-2 mb-2\"> \r\n    <div class=\"pr-2 text-left\">\r\n                <button type=\"button\" (click)= \"viewmodel.additem()\" [disabled]=\"!viewmodel.stateMachine.canAdd\"  class=\"btn btn-sm btn-default\">新增同级 </button>\r\n                <button type=\"button\" (click)= \"viewmodel.addchild()\" [disabled]=\"!viewmodel.stateMachine.canAdd\"  class=\"btn btn-sm btn-default\">新增子级 </button>\r\n                <button type=\"button\"  [disabled]=\"!viewmodel.stateMachine.canEdit\"  (click)= \"viewmodel.edit()\"  class=\"btn btn-sm btn-default\">编辑 </button>\r\n                <button type=\"button\"   [disabled]=\"!viewmodel.stateMachine.canCancel\" (click)= \"viewmodel.cancel()\" class=\"btn btn-sm btn-default\">取消 </button>\r\n                <button type=\"button\"  [disabled]=\"!viewmodel.stateMachine.canSave\" (click)= \"viewmodel.save()\" class=\"btn btn-sm btn-default\">保存 </button>\r\n                <button type=\"button\"  [disabled]=\"!viewmodel.stateMachine.canDelete\"  (click)= \"viewmodel.remove()\" class=\"btn btn-sm btn-default\">删除 </button>\r\n    </div>\r\n\r\n    <div class=\"functioninfos\" style=\"height: 1300px\">\r\n    <kendo-splitter orientation=\"horizontal\" style=\"height: 100%;\">\r\n        <kendo-splitter-pane [collapsible]=\"true\"  size=\"30%\" min = \"20%\" max =\"70%\">\r\n            <!--工具栏了 BEGIN-->\r\n            <div class=\"row pt-2 mb-2\">\r\n                <div class=\"col-md-12 col-lg-12 funcinfo-col\">\r\n                    <h2>系统组织</h2>\r\n                    <div class=\"card\" >\r\n                            <!--tree -->\r\n                        <div class=\"col-xs-12 col-sm-12 col-md-3 col-lg-3 \">                  \r\n                            <kendo-treeview style=\"width:500px\"  [nodes]=\"data\" textField=\"Name\" kendoTreeViewExpandable  kendoTreeViewFlatDataBinding  idField=\"Id\"  parentIdField=\"ParentId\" (selectionChange)=\"handleSelection($event)\" > </kendo-treeview>                  \r\n                        </div>\r\n                        <!--tree end -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </kendo-splitter-pane>\r\n        <kendo-splitter-pane   [resizable]=\"true\" style=\"height: 1300px;\">\r\n            <kendo-tabstrip >\r\n                <kendo-tabstrip-tab [title]=\"'基本信息'\" [selected]=\"true\" style=\"height : 1300px\">\r\n                    <ng-template kendoTabContent style=\"height : 1300px\">\r\n                        <!--info  -->\r\n                        <div class=\"row funcinfo-wrapper\">\r\n                            <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 funcinfo-col\">                        \r\n                                <div class=\"card col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n                                    <div class=\"card-block \">\r\n                                        <form class=\"k-form\" [formGroup]=\"viewmodel.form\"  >\r\n                                            <label class=\"k-form-field\">\r\n                                                <span>内码 </span>\r\n                                                <input formControlName=\"Id\" disabled=\"false\" class=\"k-textbox w-100\" />\r\n                                            </label>\r\n                                            <label class=\"k-form-field\">\r\n                                                <span>编号 </span>\r\n                                                <input class=\"k-textbox\" [readonly]=\"!viewmodel.stateMachine.canInput\" formControlName=\"code\" required = 'true'/>\r\n                                            </label>\r\n                                            <label class=\"k-form-field\">\r\n                                                <span>名称</span>\r\n                                                <input class=\"k-textbox\" [readonly]=\"!viewmodel.stateMachine.canInput\" formControlName=\"name\" required = 'true'/>\r\n                                            </label>                                                        \r\n                                        </form>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </ng-template>\r\n                </kendo-tabstrip-tab>\r\n                \r\n            </kendo-tabstrip> \r\n        </kendo-splitter-pane>\r\n</kendo-splitter>\r\n</div>\r\n        <!--info end -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/sys-organization/sys-organization.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SysOrganizationComponent", function() { return SysOrganizationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_sys_organization_viewmodel__ = __webpack_require__("./src/app/modules/sys-organization/app/sys-organization-viewmodel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__domain__ = __webpack_require__("./src/app/modules/sys-organization/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gsp_sys_rtf_common__ = __webpack_require__("./node_modules/@gsp-sys/rtf-common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gsp_sys_rtf_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__gsp_sys_rtf_common__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SysOrganizationComponent = /** @class */ (function () {
    function SysOrganizationComponent(viewmodel, route, orgDataService, frmService) {
        this.viewmodel = viewmodel;
        this.route = route;
        this.orgDataService = orgDataService;
        this.frmService = frmService;
    }
    SysOrganizationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            if (params.has('funcid')) {
                var funcid = params.get('funcid');
                _this.orgDataService.sessionId = _this.frmService.getSession(funcid);
            }
        });
        this.viewmodel.bindingData.changes.subscribe(function (changes) {
            console.log("changetype =" + changes.type);
            if (changes.type === __WEBPACK_IMPORTED_MODULE_2__farris_devkit__["ChangeType"].SelectionChanged)
                return;
            _this.data = _this.viewmodel.bindingData.list.toJSON();
        });
        this.viewmodel.form.valueChanges.subscribe(function (changes) {
            console.log("changetype =" + changes.type);
            _this.data = _this.viewmodel.bindingData.list.toJSON();
            console.log(JSON.stringify(_this.data));
        });
        this.viewmodel.formLoad();
    };
    SysOrganizationComponent.prototype.handleSelection = function (_a) {
        var dataItem = _a.dataItem;
        this.viewmodel.bindingData.list.setCurrentId(dataItem.Id);
    };
    SysOrganizationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sys-organization',
            template: __webpack_require__("./src/app/modules/sys-organization/sys-organization.component.html"),
            styles: [__webpack_require__("./src/app/modules/sys-organization/sys-organization.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_sys_organization_viewmodel__["OrganizationViewModel"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_4__domain__["OrganizationDataServcie"],
            __WEBPACK_IMPORTED_MODULE_5__gsp_sys_rtf_common__["FrameworkService"]])
    ], SysOrganizationComponent);
    return SysOrganizationComponent;
}());



/***/ }),

/***/ "./src/app/modules/sys-organization/sys-organization.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SysOrganizationModule", function() { return SysOrganizationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sys_organization_component__ = __webpack_require__("./src/app/modules/sys-organization/sys-organization.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sys_organization_routing_module__ = __webpack_require__("./src/app/modules/sys-organization/sys-organization-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sys_organization_domain_index__ = __webpack_require__("./src/app/modules/sys-organization/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_treeview__ = __webpack_require__("./node_modules/@progress/kendo-angular-treeview/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_layout__ = __webpack_require__("./node_modules/@progress/kendo-angular-layout/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sys_organization_app_index__ = __webpack_require__("./src/app/modules/sys-organization/app/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var SysOrganizationModule = /** @class */ (function () {
    function SysOrganizationModule() {
    }
    SysOrganizationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_treeview__["TreeViewModule"],
                __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_layout__["LayoutModule"],
                __WEBPACK_IMPORTED_MODULE_3__sys_organization_routing_module__["SysOrganizationRoutingModule"],
                __WEBPACK_IMPORTED_MODULE_4__farris_devkit__["CommandModule"].setup(__WEBPACK_IMPORTED_MODULE_8__sys_organization_app_index__["commandHandler"], []),
                //FormsModule,
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["ReactiveFormsModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__farris_devkit__["RestfulService"],
                __WEBPACK_IMPORTED_MODULE_5__sys_organization_domain_index__["DOMAIN_PROVIDERS"],
                __WEBPACK_IMPORTED_MODULE_8__sys_organization_app_index__["APP_PROVIDERS"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__sys_organization_component__["SysOrganizationComponent"]]
        })
    ], SysOrganizationModule);
    return SysOrganizationModule;
}());

//# sourceMappingURL=sys-organization.module.js.map

/***/ })

},[],["angular","farris","rtf","progress","rxjs"],["angular","farris","rtf","progress","rxjs"]);
//# sourceMappingURL=sys-organization.module.chunk.js.map