webpackJsonp(["position.module"],{

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

/***/ "./src/app/modules/position/position-detail/app/handlers/add.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddHandler", function() { return AddHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__position_detail_statemachine__ = __webpack_require__("./src/app/modules/position/position-detail/app/position-detail.statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__position_detail_uistate__ = __webpack_require__("./src/app/modules/position/position-detail/app/position-detail.uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__position_detail_bindingdata__ = __webpack_require__("./src/app/modules/position/position-detail/app/position-detail.bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__domain_position_detail_repository__ = __webpack_require__("./src/app/modules/position/position-detail/domain/position-detail.repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__domain_entities_gspposition_entity__ = __webpack_require__("./src/app/modules/position/position-detail/domain/entities/gspposition.entity.ts");
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
    function AddHandler(router, stateMachine, uiState, repository, bindingData) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.stateMachine = stateMachine;
        _this.uiState = uiState;
        _this.repository = repository;
        _this.bindingData = bindingData;
        return _this;
    }
    AddHandler.prototype.schedule = function () {
        var _this = this;
        this.addTask('add', function () {
            _this.uiState.action = 'add';
            //this.router.navigate(['positions', { action: 'add' }]);
            var item = _this.bindingData.list.currentItem;
            var newEntity = Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["EntityFactory"])(__WEBPACK_IMPORTED_MODULE_7__domain_entities_gspposition_entity__["GSPPosition"], item);
            _this.repository.addEntity(newEntity);
        });
        this.addTask('transitState', function () {
            _this.stateMachine['add']();
        });
    };
    AddHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgCommandHandler"])({
            commandName: 'add'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_3__position_detail_statemachine__["PositionDetailStateMachine"],
            __WEBPACK_IMPORTED_MODULE_4__position_detail_uistate__["PositionDetailUIState"],
            __WEBPACK_IMPORTED_MODULE_6__domain_position_detail_repository__["PositionDetailRepository"],
            __WEBPACK_IMPORTED_MODULE_5__position_detail_bindingdata__["PositionDetailBindingData"]])
    ], AddHandler);
    return AddHandler;
}(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/position/position-detail/app/handlers/cancel.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelHandler", function() { return CancelHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__position_detail_statemachine__ = __webpack_require__("./src/app/modules/position/position-detail/app/position-detail.statemachine.ts");
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



var CancelHandler = /** @class */ (function (_super) {
    __extends(CancelHandler, _super);
    function CancelHandler(stateMachine) {
        var _this = _super.call(this) || this;
        _this.stateMachine = stateMachine;
        return _this;
    }
    CancelHandler.prototype.schedule = function () {
        var _this = this;
        this.addTask('cancel', function () {
            console.log('取消');
            // 撤销变更操作
        });
        // 状态迁移
        this.addTask('transitState', function () {
            _this.stateMachine['view']();
        });
    };
    CancelHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'cancel'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__position_detail_statemachine__["PositionDetailStateMachine"]])
    ], CancelHandler);
    return CancelHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/position/position-detail/app/handlers/close.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseHandler", function() { return CloseHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common__ = __webpack_require__("./src/app/modules/common/index.ts");
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




var CloseHandler = /** @class */ (function (_super) {
    __extends(CloseHandler, _super);
    function CloseHandler(router, posUtil) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.posUtil = posUtil;
        return _this;
    }
    CloseHandler.prototype.schedule = function () {
        var _this = this;
        this.addTask('close', function () {
            var posUrl = _this.posUtil.getPositionManagerRouter();
            _this.router.navigate([posUrl]);
        });
    };
    CloseHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgCommandHandler"])({
            commandName: 'close'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_3__common__["SysManagerUtil"]])
    ], CloseHandler);
    return CloseHandler;
}(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/position/position-detail/app/handlers/edit.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditHandler", function() { return EditHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__position_detail_statemachine__ = __webpack_require__("./src/app/modules/position/position-detail/app/position-detail.statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__position_detail_uistate__ = __webpack_require__("./src/app/modules/position/position-detail/app/position-detail.uistate.ts");
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




var EditHandler = /** @class */ (function (_super) {
    __extends(EditHandler, _super);
    function EditHandler(uiState, stateMachine) {
        var _this = _super.call(this) || this;
        _this.uiState = uiState;
        _this.stateMachine = stateMachine;
        return _this;
    }
    EditHandler.prototype.schedule = function () {
        var _this = this;
        this.addTask('transitState', function () {
            _this.uiState.action = 'edit';
            _this.stateMachine['edit']();
        });
    };
    EditHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'edit'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__position_detail_uistate__["PositionDetailUIState"],
            __WEBPACK_IMPORTED_MODULE_2__position_detail_statemachine__["PositionDetailStateMachine"]])
    ], EditHandler);
    return EditHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/position/position-detail/app/handlers/form-load.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLoadHandler", function() { return FormLoadHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__position_detail_uistate__ = __webpack_require__("./src/app/modules/position/position-detail/app/position-detail.uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__position_detail_statemachine__ = __webpack_require__("./src/app/modules/position/position-detail/app/position-detail.statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__domain_position_detail_dataservice__ = __webpack_require__("./src/app/modules/position/position-detail/domain/position-detail.dataservice.ts");
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
            var dataId = _this.uiState.dataId;
            if (dataId === 'new') {
                _this.dataService.loadNewData();
            }
            else {
                _this.dataService.loadData(dataId);
            }
        });
        // 状态迁移
        this.addTask('transitState', function () {
            var action = _this.uiState.action;
            _this.stateMachine[action]();
        });
    };
    FormLoadHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'formLoad'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__domain_position_detail_dataservice__["PositionDetailDataService"],
            __WEBPACK_IMPORTED_MODULE_2__position_detail_uistate__["PositionDetailUIState"],
            __WEBPACK_IMPORTED_MODULE_3__position_detail_statemachine__["PositionDetailStateMachine"]])
    ], FormLoadHandler);
    return FormLoadHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/position/position-detail/app/handlers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export commandHandlers */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__form_load_handler__ = __webpack_require__("./src/app/modules/position/position-detail/app/handlers/form-load.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__save_handler__ = __webpack_require__("./src/app/modules/position/position-detail/app/handlers/save.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cancel_handler__ = __webpack_require__("./src/app/modules/position/position-detail/app/handlers/cancel.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__close_handler__ = __webpack_require__("./src/app/modules/position/position-detail/app/handlers/close.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_handler__ = __webpack_require__("./src/app/modules/position/position-detail/app/handlers/add.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_handler__ = __webpack_require__("./src/app/modules/position/position-detail/app/handlers/edit.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__remove_item_handler__ = __webpack_require__("./src/app/modules/position/position-detail/app/handlers/remove-item.handler.ts");







var commandHandlers = [
    __WEBPACK_IMPORTED_MODULE_0__form_load_handler__["FormLoadHandler"], __WEBPACK_IMPORTED_MODULE_1__save_handler__["SaveHandler"], __WEBPACK_IMPORTED_MODULE_3__close_handler__["CloseHandler"],
    __WEBPACK_IMPORTED_MODULE_5__edit_handler__["EditHandler"], __WEBPACK_IMPORTED_MODULE_4__add_handler__["AddHandler"], __WEBPACK_IMPORTED_MODULE_2__cancel_handler__["CancelHandler"],
    __WEBPACK_IMPORTED_MODULE_6__remove_item_handler__["RemoveItemHandler"]
];



/***/ }),

/***/ "./src/app/modules/position/position-detail/app/handlers/remove-item.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveItemHandler", function() { return RemoveItemHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain__ = __webpack_require__("./src/app/modules/position/position-detail/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__position_detail_bindingdata__ = __webpack_require__("./src/app/modules/position/position-detail/app/position-detail.bindingdata.ts");
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




var RemoveItemHandler = /** @class */ (function (_super) {
    __extends(RemoveItemHandler, _super);
    function RemoveItemHandler(repository, bindingData) {
        var _this = _super.call(this) || this;
        _this.repository = repository;
        _this.bindingData = bindingData;
        return _this;
    }
    RemoveItemHandler.prototype.schedule = function () {
        var _this = this;
        this.addTask('removeItem', function (lastResult, context) {
            // 输入处理
            var command = context.command;
            var listPath = command.params.listPath;
            var dataId = _this.bindingData['DDNM'];
            var positionEntity = _this.repository.getEntityById(dataId);
            if (listPath === 'Role') {
                _this.addRole(positionEntity.Roles);
            }
            else if (listPath === 'User') {
                _this.addUser(positionEntity.Users);
            }
        });
    };
    RemoveItemHandler.prototype.addRole = function (roleEntityList) {
        var roleId = this.bindingData['Role'].currentId;
        roleEntityList.remove(roleId);
    };
    RemoveItemHandler.prototype.addUser = function (jhEntityList) {
        var userId = this.bindingData['User'].currentId;
        jhEntityList.remove(userId);
    };
    RemoveItemHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'removeItem'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__domain__["PositionDetailRepository"],
            __WEBPACK_IMPORTED_MODULE_3__position_detail_bindingdata__["PositionDetailBindingData"]])
    ], RemoveItemHandler);
    return RemoveItemHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/position/position-detail/app/handlers/save.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveHandler", function() { return SaveHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain__ = __webpack_require__("./src/app/modules/position/position-detail/domain/index.ts");
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
    function SaveHandler(dataService) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        return _this;
    }
    SaveHandler.prototype.schedule = function () {
        var _this = this;
        this.addTask('save', function () {
            _this.dataService.save();
        });
    };
    SaveHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'save'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__domain__["PositionDetailDataService"]])
    ], SaveHandler);
    return SaveHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/position/position-detail/app/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POS_DETAIL_APP_PROVIDERS", function() { return POS_DETAIL_APP_PROVIDERS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__handlers__ = __webpack_require__("./src/app/modules/position/position-detail/app/handlers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__position_detail_bindingdata__ = __webpack_require__("./src/app/modules/position/position-detail/app/position-detail.bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__position_detail_statemachine__ = __webpack_require__("./src/app/modules/position/position-detail/app/position-detail.statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__position_detail_viewmodel__ = __webpack_require__("./src/app/modules/position/position-detail/app/position-detail.viewmodel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__position_detail_uistate__ = __webpack_require__("./src/app/modules/position/position-detail/app/position-detail.uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__position_detail_form__ = __webpack_require__("./src/app/modules/position/position-detail/app/position-detail.form.ts");
/* unused harmony reexport PositionDetailBindingData */
/* unused harmony reexport PositionRoleForm */
/* unused harmony reexport PositionDetailForm */
/* unused harmony reexport PositionUserForm */
/* unused harmony reexport PositionDetailStateMachine */
/* unused harmony reexport PositionDetailViewModel */
/* unused harmony reexport PositionDetailUIState */
/* unused harmony reexport commandHandlers */






var POS_DETAIL_APP_PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_1__position_detail_bindingdata__["PositionDetailBindingData"],
    __WEBPACK_IMPORTED_MODULE_5__position_detail_form__["PositionRoleForm"], __WEBPACK_IMPORTED_MODULE_5__position_detail_form__["PositionDetailForm"], __WEBPACK_IMPORTED_MODULE_5__position_detail_form__["PositionUserForm"],
    __WEBPACK_IMPORTED_MODULE_2__position_detail_statemachine__["PositionDetailStateMachine"],
    __WEBPACK_IMPORTED_MODULE_3__position_detail_viewmodel__["PositionDetailViewModel"],
    __WEBPACK_IMPORTED_MODULE_4__position_detail_uistate__["PositionDetailUIState"]
];



/***/ }),

/***/ "./src/app/modules/position/position-detail/app/position-detail.bindingdata.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionDetailBindingData", function() { return PositionDetailBindingData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain__ = __webpack_require__("./src/app/modules/position/position-detail/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__domain_position_detail_repository__ = __webpack_require__("./src/app/modules/position/position-detail/domain/position-detail.repository.ts");
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




var PositionDetailBindingData = /** @class */ (function (_super) {
    __extends(PositionDetailBindingData, _super);
    function PositionDetailBindingData(injector) {
        return _super.call(this, injector) || this;
    }
    PositionDetailBindingData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgBindingData"])({
            entity: __WEBPACK_IMPORTED_MODULE_2__domain__["GSPPosition"],
            repository: __WEBPACK_IMPORTED_MODULE_3__domain_position_detail_repository__["PositionDetailRepository"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], PositionDetailBindingData);
    return PositionDetailBindingData;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["BindingData"]));



/***/ }),

/***/ "./src/app/modules/position/position-detail/app/position-detail.form.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionRoleForm", function() { return PositionRoleForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionUserForm", function() { return PositionUserForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionDetailForm", function() { return PositionDetailForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__position_detail_bindingdata__ = __webpack_require__("./src/app/modules/position/position-detail/app/position-detail.bindingdata.ts");
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




var PositionRoleForm = /** @class */ (function (_super) {
    __extends(PositionRoleForm, _super);
    function PositionRoleForm(injector) {
        return _super.call(this, injector) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'id',
            binding: 'Roles.id'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], PositionRoleForm.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'Code',
            binding: 'Roles.Code'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], PositionRoleForm.prototype, "Code", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'Name',
            binding: 'Roles.Name'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], PositionRoleForm.prototype, "Name", void 0);
    PositionRoleForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgForm"])({
            bindingData: __WEBPACK_IMPORTED_MODULE_3__position_detail_bindingdata__["PositionDetailBindingData"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], PositionRoleForm);
    return PositionRoleForm;
}(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["Form"]));

var PositionUserForm = /** @class */ (function (_super) {
    __extends(PositionUserForm, _super);
    function PositionUserForm(injector) {
        return _super.call(this, injector) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'id',
            binding: 'Users.id'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], PositionUserForm.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'Code',
            binding: 'Users.Code'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], PositionUserForm.prototype, "Code", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'Name',
            binding: 'Users.Name'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], PositionUserForm.prototype, "Name", void 0);
    PositionUserForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgForm"])({
            bindingData: __WEBPACK_IMPORTED_MODULE_3__position_detail_bindingdata__["PositionDetailBindingData"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], PositionUserForm);
    return PositionUserForm;
}(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["Form"]));

var PositionDetailForm = /** @class */ (function (_super) {
    __extends(PositionDetailForm, _super);
    function PositionDetailForm(injector) {
        return _super.call(this, injector) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'id',
            binding: 'id'
        }),
        __metadata("design:type", String)
    ], PositionDetailForm.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'Creator',
            binding: 'creator'
        }),
        __metadata("design:type", String)
    ], PositionDetailForm.prototype, "Creator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'Code',
            binding: 'code'
        }),
        __metadata("design:type", String)
    ], PositionDetailForm.prototype, "Code", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'Name',
            binding: 'name'
        }),
        __metadata("design:type", String)
    ], PositionDetailForm.prototype, "Name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'Note',
            binding: 'note'
        }),
        __metadata("design:type", String)
    ], PositionDetailForm.prototype, "Note", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'PosGroup',
            binding: 'posGroup'
        }),
        __metadata("design:type", String)
    ], PositionDetailForm.prototype, "PosGroup", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'PosGroupName',
            binding: 'PosGroupName'
        }),
        __metadata("design:type", String)
    ], PositionDetailForm.prototype, "PosGroupName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'PosType',
            binding: 'posType'
        }),
        __metadata("design:type", String)
    ], PositionDetailForm.prototype, "PosType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'PosTypeName',
            binding: 'PosTypeName'
        }),
        __metadata("design:type", String)
    ], PositionDetailForm.prototype, "PosTypeName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgChildForm"])({
            name: 'PositionRoleForm',
            formType: PositionRoleForm
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__farris_devkit__["Form"])
    ], PositionDetailForm.prototype, "PositionRoleForm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgChildForm"])({
            name: 'PositionUserForm',
            formType: PositionUserForm
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__farris_devkit__["Form"])
    ], PositionDetailForm.prototype, "PositionUserForm", void 0);
    PositionDetailForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgForm"])({
            bindingData: __WEBPACK_IMPORTED_MODULE_3__position_detail_bindingdata__["PositionDetailBindingData"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], PositionDetailForm);
    return PositionDetailForm;
}(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["Form"]));



/***/ }),

/***/ "./src/app/modules/position/position-detail/app/position-detail.statemachine.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionDetailStateMachine", function() { return PositionDetailStateMachine; });
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


var PositionDetailStateMachine = /** @class */ (function (_super) {
    __extends(PositionDetailStateMachine, _super);
    function PositionDetailStateMachine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgState"])({ initialState: true }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__farris_devkit__["State"])
    ], PositionDetailStateMachine.prototype, "viewState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgState"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__farris_devkit__["State"])
    ], PositionDetailStateMachine.prototype, "addState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgState"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__farris_devkit__["State"])
    ], PositionDetailStateMachine.prototype, "editState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'viewState'; }
        }),
        __metadata("design:type", Boolean)
    ], PositionDetailStateMachine.prototype, "canAdd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'viewState'; }
        }),
        __metadata("design:type", Boolean)
    ], PositionDetailStateMachine.prototype, "canEdit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'addState' || context.state === 'editState'; }
        }),
        __metadata("design:type", Boolean)
    ], PositionDetailStateMachine.prototype, "canCancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'addState' || context.state === 'editState'; }
        }),
        __metadata("design:type", Boolean)
    ], PositionDetailStateMachine.prototype, "canSave", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'viewState'; }
        }),
        __metadata("design:type", Boolean)
    ], PositionDetailStateMachine.prototype, "canSwitch", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'addState' || context.state === 'editState'; }
        }),
        __metadata("design:type", Boolean)
    ], PositionDetailStateMachine.prototype, "canInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgAction"])({ transitTo: 'addState' }),
        __metadata("design:type", Function)
    ], PositionDetailStateMachine.prototype, "add", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgAction"])({ transitTo: 'editState' }),
        __metadata("design:type", Function)
    ], PositionDetailStateMachine.prototype, "edit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgAction"])({ transitTo: 'viewState' }),
        __metadata("design:type", Function)
    ], PositionDetailStateMachine.prototype, "view", void 0);
    PositionDetailStateMachine = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgStatemachine"])()
    ], PositionDetailStateMachine);
    return PositionDetailStateMachine;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["StateMachine"]));



/***/ }),

/***/ "./src/app/modules/position/position-detail/app/position-detail.uistate.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionDetailUIState", function() { return PositionDetailUIState; });
/**
 * 岗位详情页面UI状态变量
 */
var PositionDetailUIState = /** @class */ (function () {
    function PositionDetailUIState() {
        /**
         * 是否需要保存岗位和功能组关系
         */
        this.needSavePosRole = false;
    }
    return PositionDetailUIState;
}());



/***/ }),

/***/ "./src/app/modules/position/position-detail/app/position-detail.viewmodel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionDetailViewModel", function() { return PositionDetailViewModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__position_detail_bindingdata__ = __webpack_require__("./src/app/modules/position/position-detail/app/position-detail.bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__position_detail_form__ = __webpack_require__("./src/app/modules/position/position-detail/app/position-detail.form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__position_detail_statemachine__ = __webpack_require__("./src/app/modules/position/position-detail/app/position-detail.statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__position_detail_uistate__ = __webpack_require__("./src/app/modules/position/position-detail/app/position-detail.uistate.ts");
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
var PositionDetailViewModel = /** @class */ (function (_super) {
    __extends(PositionDetailViewModel, _super);
    /**
     * 构造函数
     */
    function PositionDetailViewModel(injector) {
        var _this = _super.call(this, injector) || this;
        _this.uiState = _this.injector.get(__WEBPACK_IMPORTED_MODULE_5__position_detail_uistate__["PositionDetailUIState"]);
        return _this;
    }
    // ----------------------------------------
    // 主表操作
    // ----------------------------------------
    /**
     * 表单加载
     */
    PositionDetailViewModel.prototype.formLoad = function () { };
    /**
     * 新增
     */
    PositionDetailViewModel.prototype.add = function () { };
    /**
     * 编辑
     */
    PositionDetailViewModel.prototype.edit = function () { };
    /**
     * 保存
     */
    PositionDetailViewModel.prototype.save = function () { };
    /**
     * 取消
     */
    PositionDetailViewModel.prototype.cancel = function () { };
    /**
     * 关闭
     */
    PositionDetailViewModel.prototype.close = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'formLoad'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PositionDetailViewModel.prototype, "formLoad", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'add'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PositionDetailViewModel.prototype, "add", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'edit'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PositionDetailViewModel.prototype, "edit", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'save'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PositionDetailViewModel.prototype, "save", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'cancel'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PositionDetailViewModel.prototype, "cancel", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'close'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PositionDetailViewModel.prototype, "close", null);
    PositionDetailViewModel = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgViewModel"])({
            children: [],
            binding: __WEBPACK_IMPORTED_MODULE_2__position_detail_bindingdata__["PositionDetailBindingData"],
            form: __WEBPACK_IMPORTED_MODULE_3__position_detail_form__["PositionDetailForm"],
            stateMachine: __WEBPACK_IMPORTED_MODULE_4__position_detail_statemachine__["PositionDetailStateMachine"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], PositionDetailViewModel);
    return PositionDetailViewModel;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["ViewModel"]));



/***/ }),

/***/ "./src/app/modules/position/position-detail/domain/entities/gspposition.entity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPPosition", function() { return GSPPosition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gsprole_entity__ = __webpack_require__("./src/app/modules/position/position-detail/domain/entities/gsprole.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gspuser_entity__ = __webpack_require__("./src/app/modules/position/position-detail/domain/entities/gspuser.entity.ts");
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
 * 岗位实体
 */
var GSPPosition = /** @class */ (function (_super) {
    __extends(GSPPosition, _super);
    function GSPPosition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(true),
        __metadata("design:type", String)
    ], GSPPosition.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], GSPPosition.prototype, "code", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], GSPPosition.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], GSPPosition.prototype, "note", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], GSPPosition.prototype, "posType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], GSPPosition.prototype, "posGroup", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], GSPPosition.prototype, "creatorName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], GSPPosition.prototype, "creator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], GSPPosition.prototype, "createdTime", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], GSPPosition.prototype, "lastModifier", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], GSPPosition.prototype, "lastModifiedTime", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgList"])({
            dataField: 'Roles',
            type: __WEBPACK_IMPORTED_MODULE_1__gsprole_entity__["GSPRole"]
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__farris_devkit__["EntityList"])
    ], GSPPosition.prototype, "Roles", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgList"])({
            dataField: 'Users',
            type: __WEBPACK_IMPORTED_MODULE_2__gspuser_entity__["GSPUser"]
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__farris_devkit__["EntityList"])
    ], GSPPosition.prototype, "Users", void 0);
    return GSPPosition;
}(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["Entity"]));



/***/ }),

/***/ "./src/app/modules/position/position-detail/domain/entities/gsprole.entity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPRole", function() { return GSPRole; });
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
 * 功能组
 */
var GSPRole = /** @class */ (function (_super) {
    __extends(GSPRole, _super);
    function GSPRole() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(true),
        __metadata("design:type", String)
    ], GSPRole.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], GSPRole.prototype, "Code", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], GSPRole.prototype, "Name", void 0);
    return GSPRole;
}(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["Entity"]));



/***/ }),

/***/ "./src/app/modules/position/position-detail/domain/entities/gspuser.entity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPUser", function() { return GSPUser; });
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
 * 用户
 */
var GSPUser = /** @class */ (function (_super) {
    __extends(GSPUser, _super);
    function GSPUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(true),
        __metadata("design:type", String)
    ], GSPUser.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(true),
        __metadata("design:type", String)
    ], GSPUser.prototype, "Code", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], GSPUser.prototype, "Name", void 0);
    return GSPUser;
}(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["Entity"]));



/***/ }),

/***/ "./src/app/modules/position/position-detail/domain/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POS_DETAIL_DOMAIN_PROVIDERS", function() { return POS_DETAIL_DOMAIN_PROVIDERS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entities_gspuser_entity__ = __webpack_require__("./src/app/modules/position/position-detail/domain/entities/gspuser.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_gsprole_entity__ = __webpack_require__("./src/app/modules/position/position-detail/domain/entities/gsprole.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_gspposition_entity__ = __webpack_require__("./src/app/modules/position/position-detail/domain/entities/gspposition.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__position_detail_datastorage__ = __webpack_require__("./src/app/modules/position/position-detail/domain/position-detail.datastorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__position_detail_repository__ = __webpack_require__("./src/app/modules/position/position-detail/domain/position-detail.repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__position_detail_dataservice__ = __webpack_require__("./src/app/modules/position/position-detail/domain/position-detail.dataservice.ts");
/* unused harmony reexport GSPUser */
/* unused harmony reexport GSPRole */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GSPPosition", function() { return __WEBPACK_IMPORTED_MODULE_2__entities_gspposition_entity__["GSPPosition"]; });
/* unused harmony reexport PositionDetailDataStorage */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PositionDetailRepository", function() { return __WEBPACK_IMPORTED_MODULE_4__position_detail_repository__["PositionDetailRepository"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PositionDetailDataService", function() { return __WEBPACK_IMPORTED_MODULE_5__position_detail_dataservice__["PositionDetailDataService"]; });






var POS_DETAIL_DOMAIN_PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_3__position_detail_datastorage__["PositionDetailDataStorage"],
    __WEBPACK_IMPORTED_MODULE_4__position_detail_repository__["PositionDetailRepository"],
    __WEBPACK_IMPORTED_MODULE_5__position_detail_dataservice__["PositionDetailDataService"],
];



/***/ }),

/***/ "./src/app/modules/position/position-detail/domain/position-detail.dataservice.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionDetailDataService", function() { return PositionDetailDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__position_detail_datastorage__ = __webpack_require__("./src/app/modules/position/position-detail/domain/position-detail.datastorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common__ = __webpack_require__("./src/app/modules/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_position_detail_uistate__ = __webpack_require__("./src/app/modules/position/position-detail/app/position-detail.uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_position_detail_statemachine__ = __webpack_require__("./src/app/modules/position/position-detail/app/position-detail.statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__position_detail_repository__ = __webpack_require__("./src/app/modules/position/position-detail/domain/position-detail.repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__position_role_domain__ = __webpack_require__("./src/app/modules/position/position-detail/position-role/domain/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PositionDetailDataService = /** @class */ (function () {
    function PositionDetailDataService(rest, positionDetailStore, posSession, posUIState, posStateMachine, posDetailRep, posRoleService) {
        this.rest = rest;
        this.positionDetailStore = positionDetailStore;
        this.posSession = posSession;
        this.posUIState = posUIState;
        this.posStateMachine = posStateMachine;
        this.posDetailRep = posDetailRep;
        this.posRoleService = posRoleService;
    }
    /**
     * 加载数据
     * @param dataId
     */
    PositionDetailDataService.prototype.loadData = function (dataId) {
        var _this = this;
        var url = this.posSession.positionWebApi;
        var headers = this.posSession.getHeader();
        return this.rest.get(url + "/" + dataId, null, headers).subscribe(function (result) {
            console.log(result);
            // 返回是否是个列表
            _this.positionDetailStore.load(result);
        });
    };
    /**
     * 从服务端返回一个guid
     */
    PositionDetailDataService.prototype.loadNewData = function () {
        var _this = this;
        this.positionDetailStore.clear();
        var url = this.posSession.positionWebApi;
        var headers = this.posSession.getHeader();
        this.rest.get(url + '/new', null, headers).subscribe(function (result) {
            _this.posUIState.dataId = result[0]['id'];
            _this.positionDetailStore.load(result);
        });
    };
    /**
     * 保存
     */
    PositionDetailDataService.prototype.save = function () {
        var newPos = this.posDetailRep.getAllEntities()[0];
        // 分组的默认值先如下处理
        newPos.posGroup = 'admin';
        if (this.posStateMachine.context.state === 'addState') {
            this.saveAddPos(newPos);
        }
        else {
            this.saveEditPos(newPos);
        }
    };
    PositionDetailDataService.prototype.saveAddPos = function (pos) {
        var _this = this;
        var posUrl = this.posSession.positionWebApi;
        var headers = this.posSession.getHeader();
        this.rest.post(posUrl, pos.data, null, headers)
            .subscribe(function (result) {
            // 这个地方必须要重新load一下，否则再去编辑的时候一些字段没有值服务端校验出错
            _this.loadData(result);
            // 需要同步岗位和功能组
            if (_this.posUIState.needSavePosRole) {
                _this.posRoleService.modifyRoleByPosition()
                    .subscribe(function () { });
            }
            // 保存后应该走编辑状态
            _this.posStateMachine['edit']();
            alert('岗位保存成功');
        }, function (error) {
            alert(error.error.Message);
        });
    };
    /**
     * 保存变更集
     */
    PositionDetailDataService.prototype.saveEditPos = function (pos) {
        var _this = this;
        var url = this.posSession.positionWebApi;
        var headers = this.posSession.getHeader();
        this.rest.put(url, pos.data, null, headers).subscribe(function (result) {
            if (_this.posUIState.needSavePosRole) {
                _this.posRoleService.modifyRoleByPosition()
                    .subscribe(function () { });
            }
            _this.posStateMachine['edit']();
            alert('岗位保存成功');
        }, function (error) {
            alert(error.error.Message);
        });
    };
    PositionDetailDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["RestfulService"],
            __WEBPACK_IMPORTED_MODULE_2__position_detail_datastorage__["PositionDetailDataStorage"],
            __WEBPACK_IMPORTED_MODULE_3__common__["SysManagerUtil"],
            __WEBPACK_IMPORTED_MODULE_4__app_position_detail_uistate__["PositionDetailUIState"],
            __WEBPACK_IMPORTED_MODULE_5__app_position_detail_statemachine__["PositionDetailStateMachine"],
            __WEBPACK_IMPORTED_MODULE_6__position_detail_repository__["PositionDetailRepository"],
            __WEBPACK_IMPORTED_MODULE_7__position_role_domain__["GSPPosRoleService"]])
    ], PositionDetailDataService);
    return PositionDetailDataService;
}());



/***/ }),

/***/ "./src/app/modules/position/position-detail/domain/position-detail.datastorage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionDetailDataStorage", function() { return PositionDetailDataStorage; });
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


var PositionDetailDataStorage = /** @class */ (function (_super) {
    __extends(PositionDetailDataStorage, _super);
    function PositionDetailDataStorage() {
        return _super.call(this) || this;
    }
    PositionDetailDataStorage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], PositionDetailDataStorage);
    return PositionDetailDataStorage;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["MemoryStorage"]));



/***/ }),

/***/ "./src/app/modules/position/position-detail/domain/position-detail.repository.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionDetailRepository", function() { return PositionDetailRepository; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_gspposition_entity__ = __webpack_require__("./src/app/modules/position/position-detail/domain/entities/gspposition.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__position_detail_datastorage__ = __webpack_require__("./src/app/modules/position/position-detail/domain/position-detail.datastorage.ts");
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




var PositionDetailRepository = /** @class */ (function (_super) {
    __extends(PositionDetailRepository, _super);
    function PositionDetailRepository(injector) {
        return _super.call(this, injector) || this;
    }
    PositionDetailRepository = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRepository"])({
            from: __WEBPACK_IMPORTED_MODULE_3__position_detail_datastorage__["PositionDetailDataStorage"],
            entityType: __WEBPACK_IMPORTED_MODULE_2__entities_gspposition_entity__["GSPPosition"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], PositionDetailRepository);
    return PositionDetailRepository;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["Repository"]));



/***/ }),

/***/ "./src/app/modules/position/position-detail/position-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex g-main\">\r\n  <div class=\"col\">\r\n    <div class=\"d-flex flex-row  g-main px-2\" style=\"overflow:hidden;\">\r\n      <div class=\"col\">\r\n        <div class=\"d-flex flex-column g-main\">\r\n\r\n          <!--工具栏了 BEGIN-->\r\n          <div class=\"pt-2 mb-2\">\r\n            <div class=\"row pt-2 mb-2\">\r\n              <div class=\"col-sm-12 col-md-3 pt-2\">\r\n                <h1 class=\"h4 d-inline-block\">岗位详情</h1>\r\n              </div>\r\n              <div class=\"col-sm-12 col-md-9\">\r\n                <div class=\"pr-2 text-right\">\r\n                  <button type=\"button\" (click)=\"viewModel.add()\" [disabled]=\"!viewModel.stateMachine.canAdd\" class=\"btn btn-sm btn-default\">新增 </button>\r\n                  <button type=\"button\" (click)=\"viewModel.edit()\" [disabled]=\"!viewModel.stateMachine.canEdit\" class=\"btn btn-sm btn-default\">编辑 </button>\r\n                  <button type=\"button\" (click)=\"savePosInfo()\" [disabled]=\"!viewModel.stateMachine.canSave\" class=\"btn btn-sm btn-default\">保存 </button>\r\n                  <button type=\"button\" (click)=\"viewModel.close()\" class=\"btn btn-sm btn-default mr-1\">关闭</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!--工具栏了 END-->\r\n\r\n          <div class=\"flex-auto\" style=\"overflow-y:auto;\" id=\"attachmentParent\">\r\n            <!--表头 BEGIN-->\r\n            <kendo-tabstrip>\r\n              <kendo-tabstrip-tab [title]=\"'岗位信息'\" [selected]=\"true\">\r\n                <ng-template kendoTabContent>\r\n                  <form class=\"k-form p-2\" [formGroup]=\"viewModel.form\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12 col-md-6 pb-1\">\r\n                        <label class=\"k-form-field\">\r\n                          <span>岗位编号* </span>\r\n                          <div class=\"d-flex\">\r\n                            <input formControlName=\"Code\" [disabled]=\"!viewModel.stateMachine.canInput\" class=\"k-textbox w-100\" />\r\n                          </div>\r\n                        </label>\r\n                        <label class=\"k-form-field\">\r\n                          <span>岗位名称* </span>\r\n                          <input formControlName=\"Name\" [disabled]=\"!viewModel.stateMachine.canInput\" class=\"k-textbox w-100\" />\r\n                        </label>\r\n                        <label class=\"k-form-field\">\r\n                            <span>描述 </span>\r\n                            <textarea formControlName=\"Note\" rows=2 [disabled]=\"!viewModel.stateMachine.canInput\" class=\"k-textarea w-100\" ></textarea>\r\n                          </label>\r\n                      </div>\r\n                    </div>\r\n                  </form>\r\n                </ng-template>\r\n              </kendo-tabstrip-tab>\r\n            </kendo-tabstrip>\r\n            <!--表头 END-->\r\n\r\n            <!--表体 BEGIN-->\r\n            <ng-container>\r\n              <kendo-tabstrip>\r\n              <kendo-tabstrip-tab [title]=\"'授权功能组'\" [selected]=\"true\">\r\n                  <ng-template kendoTabContent>\r\n                      <app-pos-role [curPosId]=\"this.viewModel.uiState.dataId\"></app-pos-role>\r\n                  </ng-template>\r\n                </kendo-tabstrip-tab>\r\n              </kendo-tabstrip>\r\n            </ng-container>\r\n            <!--表体 END-->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/position/position-detail/position-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionDetailComponent", function() { return PositionDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_position_detail_viewmodel__ = __webpack_require__("./src/app/modules/position/position-detail/app/position-detail.viewmodel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__position_role_pos_role_component__ = __webpack_require__("./src/app/modules/position/position-detail/position-role/pos-role.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PositionDetailComponent = /** @class */ (function () {
    function PositionDetailComponent(viewModel, route) {
        this.viewModel = viewModel;
        this.route = route;
    }
    PositionDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // TODO:
        // 1、路由应该有统一的封装；
        // 2、无法直接给Command传递参数，所以先将dataId写入中间层，再在CommandHandler中获取，过于麻烦；
        // 3、CommandHandler没有返回值，switchMap这种操作符，无法起到应有的作用，所以暂时不用。
        this.route.paramMap.subscribe(function (params) {
            _this.viewModel.uiState.dataId = params.get('id');
            _this.viewModel.uiState.action = params.get('action');
            _this.viewModel.formLoad();
        });
    };
    /**
     * 保存岗位和岗位授权的功能组信息
     */
    PositionDetailComponent.prototype.savePosInfo = function () {
        // 先还原
        this.viewModel.uiState.needSavePosRole = false;
        if (this.posRoleChild) {
            this.viewModel.uiState.needSavePosRole = true;
        }
        this.viewModel.save();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__position_role_pos_role_component__["PosRoleComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__position_role_pos_role_component__["PosRoleComponent"])
    ], PositionDetailComponent.prototype, "posRoleChild", void 0);
    PositionDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-position-detail',
            template: __webpack_require__("./src/app/modules/position/position-detail/position-detail.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_position_detail_viewmodel__["PositionDetailViewModel"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]])
    ], PositionDetailComponent);
    return PositionDetailComponent;
}());



/***/ }),

/***/ "./src/app/modules/position/position-detail/position-role/app/gsp-pos-role.bindingdata.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPPosRoleBindingData", function() { return GSPPosRoleBindingData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain__ = __webpack_require__("./src/app/modules/position/position-detail/position-role/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__domain_gsprole_entity__ = __webpack_require__("./src/app/modules/position/position-detail/position-role/domain/gsprole.entity.ts");
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
 * 功能组详情绑定数据
 */
var GSPPosRoleBindingData = /** @class */ (function (_super) {
    __extends(GSPPosRoleBindingData, _super);
    function GSPPosRoleBindingData(injector) {
        return _super.call(this, injector) || this;
    }
    GSPPosRoleBindingData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgBindingData"])({
            entity: __WEBPACK_IMPORTED_MODULE_3__domain_gsprole_entity__["GSPRoleEntity"],
            repository: __WEBPACK_IMPORTED_MODULE_2__domain__["GSPPosRoleRepository"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], GSPPosRoleBindingData);
    return GSPPosRoleBindingData;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["BindingData"]));



/***/ }),

/***/ "./src/app/modules/position/position-detail/position-role/app/gsp-pos-role.uistate.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPPosRoleUIState", function() { return GSPPosRoleUIState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * 岗位功能组组件UI状态
 */
var GSPPosRoleUIState = /** @class */ (function () {
    function GSPPosRoleUIState() {
        /** 选择的功能组列表，用于在界面上删除时的单行选择*/
        this.selectRoleList = [];
        /**第一次功能组列表备份 */
        this.roleIdBackUpList = [];
        /**当前界面上功能组内码 */
        this.curRoleIdList = [];
        /** 设置岗位功能组帮助的状态值*/
        this.posRoleHelpFlag = false;
    }
    GSPPosRoleUIState = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], GSPPosRoleUIState);
    return GSPPosRoleUIState;
}());



/***/ }),

/***/ "./src/app/modules/position/position-detail/position-role/app/gsp-pos-role.viewmodel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPPosRoleViewModel", function() { return GSPPosRoleViewModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gsp_pos_role_bindingdata__ = __webpack_require__("./src/app/modules/position/position-detail/position-role/app/gsp-pos-role.bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gsp_pos_role_uistate__ = __webpack_require__("./src/app/modules/position/position-detail/position-role/app/gsp-pos-role.uistate.ts");
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
 * 岗位和功能组关系详情视图模型
 */
var GSPPosRoleViewModel = /** @class */ (function (_super) {
    __extends(GSPPosRoleViewModel, _super);
    /**
     * 构造函数
     */
    function GSPPosRoleViewModel(injector) {
        var _this = _super.call(this, injector) || this;
        _this.uiState = _this.injector.get(__WEBPACK_IMPORTED_MODULE_3__gsp_pos_role_uistate__["GSPPosRoleUIState"]);
        return _this;
    }
    /**
     * 岗位和功能组关系加载
     */
    GSPPosRoleViewModel.prototype.formLoad = function () { };
    /**设置岗位功能组关系 */
    GSPPosRoleViewModel.prototype.setPosRole = function () { };
    /**保存岗位功能组关系 */
    GSPPosRoleViewModel.prototype.savePosRole = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'posRoleFormLoad'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GSPPosRoleViewModel.prototype, "formLoad", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'setPosRole'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GSPPosRoleViewModel.prototype, "setPosRole", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'savePosRole'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GSPPosRoleViewModel.prototype, "savePosRole", null);
    GSPPosRoleViewModel = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgViewModel"])({
            children: [],
            binding: __WEBPACK_IMPORTED_MODULE_2__gsp_pos_role_bindingdata__["GSPPosRoleBindingData"],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], GSPPosRoleViewModel);
    return GSPPosRoleViewModel;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["ViewModel"]));



/***/ }),

/***/ "./src/app/modules/position/position-detail/position-role/app/handlers/gsp-pos-role.formload.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLoadPosRoleHandler", function() { return FormLoadPosRoleHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_from__ = __webpack_require__("./node_modules/rxjs/add/observable/from.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__domain__ = __webpack_require__("./src/app/modules/position/position-detail/position-role/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gsp_pos_role_uistate__ = __webpack_require__("./src/app/modules/position/position-detail/position-role/app/gsp-pos-role.uistate.ts");
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
 * 岗位功能组详情页面加载
 */
var FormLoadPosRoleHandler = /** @class */ (function (_super) {
    __extends(FormLoadPosRoleHandler, _super);
    function FormLoadPosRoleHandler(posRoleService, posRoleStore, posRoleState) {
        var _this = _super.call(this) || this;
        _this.posRoleService = posRoleService;
        _this.posRoleStore = posRoleStore;
        _this.posRoleState = posRoleState;
        return _this;
    }
    FormLoadPosRoleHandler.prototype.schedule = function () {
        var _this = this;
        this.addTask('loadData', function () {
            // 根据用户内码获取分配的岗位
            var dataId = _this.posRoleState.curPositionId;
            _this.posRoleService.getRolesByPosId(dataId).subscribe(function (result) {
                // 加载数据
                _this.posRoleStore.load(result);
                // 清空数据，然后备份,用于最后保存时的对比比较
                _this.posRoleState.roleIdBackUpList = [];
                // 子组件输入属性绑定值，连动当前界面和功能组帮助选择数据
                _this.posRoleState.curRoleIdList = [];
                __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].from(result)
                    .map(function (item) { return item['id']; })
                    .subscribe(function (item) {
                    _this.posRoleState.roleIdBackUpList.push(item);
                    _this.posRoleState.curRoleIdList.push(item);
                });
            });
        });
    };
    FormLoadPosRoleHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'posRoleFormLoad'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__domain__["GSPPosRoleService"],
            __WEBPACK_IMPORTED_MODULE_4__domain__["GSPPosRoleDataStorage"],
            __WEBPACK_IMPORTED_MODULE_5__gsp_pos_role_uistate__["GSPPosRoleUIState"]])
    ], FormLoadPosRoleHandler);
    return FormLoadPosRoleHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/position/position-detail/position-role/app/handlers/gsp-pos-role.save.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavePosRoleHandler", function() { return SavePosRoleHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain__ = __webpack_require__("./src/app/modules/position/position-detail/position-role/domain/index.ts");
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
 * 岗位功能组详情页面保存
 */
var SavePosRoleHandler = /** @class */ (function (_super) {
    __extends(SavePosRoleHandler, _super);
    function SavePosRoleHandler(posRoleService) {
        var _this = _super.call(this) || this;
        _this.posRoleService = posRoleService;
        return _this;
    }
    SavePosRoleHandler.prototype.schedule = function () {
        var _this = this;
        this.addTask('save', function () {
            _this.posRoleService.modifyRoleByPosition().subscribe(function (result) {
                alert('岗位授权功能组保存成功');
            }, function (error) {
                console.log(error);
                console.log('岗位授权功能组失败');
            });
        });
    };
    SavePosRoleHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'savePosRole'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__domain__["GSPPosRoleService"]])
    ], SavePosRoleHandler);
    return SavePosRoleHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/position/position-detail/position-role/app/handlers/gsp-pos-role.set.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetPosRoleHandler", function() { return SetPosRoleHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__domain_gsp_pos_role_repository__ = __webpack_require__("./src/app/modules/position/position-detail/position-role/domain/gsp-pos-role.repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gsp_pos_role_uistate__ = __webpack_require__("./src/app/modules/position/position-detail/position-role/app/gsp-pos-role.uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
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
 * 功能组岗位详情页面新增
 */
var SetPosRoleHandler = /** @class */ (function (_super) {
    __extends(SetPosRoleHandler, _super);
    function SetPosRoleHandler(posRoleUIState, posRoleRep) {
        var _this = _super.call(this) || this;
        _this.posRoleUIState = posRoleUIState;
        _this.posRoleRep = posRoleRep;
        return _this;
    }
    // TODO: 需要展开
    SetPosRoleHandler.prototype.schedule = function () {
        var _this = this;
        this.addTask('add', function () {
            // 打开帮助
            _this.posRoleUIState.posRoleHelpFlag = !_this.posRoleUIState.posRoleHelpFlag;
            var curRoleList = _this.posRoleRep.getAllEntities();
            console.log(curRoleList);
        });
    };
    SetPosRoleHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_3__farris_devkit__["NgCommandHandler"])({
            commandName: 'setPosRole'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__gsp_pos_role_uistate__["GSPPosRoleUIState"],
            __WEBPACK_IMPORTED_MODULE_0__domain_gsp_pos_role_repository__["GSPPosRoleRepository"]])
    ], SetPosRoleHandler);
    return SetPosRoleHandler;
}(__WEBPACK_IMPORTED_MODULE_3__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/position/position-detail/position-role/app/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "posRole_App_Providers", function() { return posRole_App_Providers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__handlers_gsp_pos_role_save_handler__ = __webpack_require__("./src/app/modules/position/position-detail/position-role/app/handlers/gsp-pos-role.save.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__handlers_gsp_pos_role_set_handler__ = __webpack_require__("./src/app/modules/position/position-detail/position-role/app/handlers/gsp-pos-role.set.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__handlers_gsp_pos_role_formload_handler__ = __webpack_require__("./src/app/modules/position/position-detail/position-role/app/handlers/gsp-pos-role.formload.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gsp_pos_role_uistate__ = __webpack_require__("./src/app/modules/position/position-detail/position-role/app/gsp-pos-role.uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gsp_pos_role_bindingdata__ = __webpack_require__("./src/app/modules/position/position-detail/position-role/app/gsp-pos-role.bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gsp_pos_role_viewmodel__ = __webpack_require__("./src/app/modules/position/position-detail/position-role/app/gsp-pos-role.viewmodel.ts");
/* unused harmony reexport FormLoadPosRoleHandler */
/* unused harmony reexport SetPosRoleHandler */
/* unused harmony reexport SavePosRoleHandler */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GSPPosRoleUIState", function() { return __WEBPACK_IMPORTED_MODULE_3__gsp_pos_role_uistate__["GSPPosRoleUIState"]; });
/* unused harmony reexport GSPPosRoleBindingData */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GSPPosRoleViewModel", function() { return __WEBPACK_IMPORTED_MODULE_5__gsp_pos_role_viewmodel__["GSPPosRoleViewModel"]; });






var posRole_App_Providers = [
    __WEBPACK_IMPORTED_MODULE_3__gsp_pos_role_uistate__["GSPPosRoleUIState"],
    __WEBPACK_IMPORTED_MODULE_4__gsp_pos_role_bindingdata__["GSPPosRoleBindingData"],
    __WEBPACK_IMPORTED_MODULE_5__gsp_pos_role_viewmodel__["GSPPosRoleViewModel"]
];
// 导出用户和岗位APP域所有成员



/***/ }),

/***/ "./src/app/modules/position/position-detail/position-role/domain/gsp-pos-role.dataservice.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPPosRoleService", function() { return GSPPosRoleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_util_sys_manager_util__ = __webpack_require__("./src/app/modules/common/util/sys-manager-util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_gsp_pos_role_uistate__ = __webpack_require__("./src/app/modules/position/position-detail/position-role/app/gsp-pos-role.uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gsp_pos_role_repository__ = __webpack_require__("./src/app/modules/position/position-detail/position-role/domain/gsp-pos-role.repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common__ = __webpack_require__("./src/app/modules/common/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**功能组岗位关联关系获取功能组数据 */
var GSPPosRoleService = /** @class */ (function () {
    function GSPPosRoleService(rest, posRoleState, sessionUtil, posRoleRep) {
        this.rest = rest;
        this.posRoleState = posRoleState;
        this.sessionUtil = sessionUtil;
        this.posRoleRep = posRoleRep;
    }
    /**根据岗位内码获取分配的功能组 */
    GSPPosRoleService.prototype.getRolesByPosId = function (posId) {
        var headers = this.sessionUtil.getHeader();
        var getRoleByUserUrl = this.sessionUtil.positionRoleWebApi + '/positions/' + posId + '/roles';
        return this.rest.get(getRoleByUserUrl, null, headers);
    };
    /**修改功能组和岗位的关联关系 */
    GSPPosRoleService.prototype.modifyRoleByPosition = function () {
        var _this = this;
        var posId = this.posRoleState.curPositionId;
        var curRoleIdList = this.posRoleRep.getAllEntities().map(function (item) { return item.id; });
        var roleIdBackUpList = this.posRoleState.roleIdBackUpList;
        // 获取新增和删除的,这个地方需要新增一个可观察者对象
        var addList = curRoleIdList.filter(function (item) { return roleIdBackUpList.indexOf(item) < 0; });
        var removeList = roleIdBackUpList.filter(function (item) { return curRoleIdList.indexOf(item) < 0; });
        var posRolePkg = new __WEBPACK_IMPORTED_MODULE_6__common__["ResultPackage"]();
        posRolePkg.ownerId = posId;
        posRolePkg.addingResults = addList;
        posRolePkg.removingResults = removeList;
        // 无需走请求
        if (addList.length === 0 && removeList.length === 0) {
            return new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) { return observer.next(); });
        }
        console.log('add');
        console.log(addList);
        console.log('remove');
        console.log(removeList);
        var headers = this.sessionUtil.getHeader();
        var posRoleWebUrl = this.sessionUtil.positionRoleWebApi;
        var queryParams = {
            subjectType: 'position',
            objectType: 'role'
        };
        return this.rest.post(posRoleWebUrl, posRolePkg, queryParams, headers)
            .map(function (item) {
            _this.posRoleState.roleIdBackUpList = curRoleIdList;
            return item;
        });
    };
    /**获取所有功能组 */
    GSPPosRoleService.prototype.getAllRoles = function () {
        var headers = this.sessionUtil.getHeader();
        var roleUrl = this.sessionUtil.roleWebApi + '/all';
        return this.rest.get(roleUrl, null, headers);
    };
    GSPPosRoleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["RestfulService"],
            __WEBPACK_IMPORTED_MODULE_4__app_gsp_pos_role_uistate__["GSPPosRoleUIState"],
            __WEBPACK_IMPORTED_MODULE_0__common_util_sys_manager_util__["SysManagerUtil"],
            __WEBPACK_IMPORTED_MODULE_5__gsp_pos_role_repository__["GSPPosRoleRepository"]])
    ], GSPPosRoleService);
    return GSPPosRoleService;
}());



/***/ }),

/***/ "./src/app/modules/position/position-detail/position-role/domain/gsp-pos-role.datastorage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPPosRoleDataStorage", function() { return GSPPosRoleDataStorage; });
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
 * 功能组列表数据存储
 */
var GSPPosRoleDataStorage = /** @class */ (function (_super) {
    __extends(GSPPosRoleDataStorage, _super);
    function GSPPosRoleDataStorage() {
        return _super.call(this) || this;
    }
    GSPPosRoleDataStorage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], GSPPosRoleDataStorage);
    return GSPPosRoleDataStorage;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["MemoryStorage"]));



/***/ }),

/***/ "./src/app/modules/position/position-detail/position-role/domain/gsp-pos-role.repository.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPPosRoleRepository", function() { return GSPPosRoleRepository; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gsp_pos_role_datastorage__ = __webpack_require__("./src/app/modules/position/position-detail/position-role/domain/gsp-pos-role.datastorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gsprole_entity__ = __webpack_require__("./src/app/modules/position/position-detail/position-role/domain/gsprole.entity.ts");
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
 * 功能组仓库持久化层
 */
var GSPPosRoleRepository = /** @class */ (function (_super) {
    __extends(GSPPosRoleRepository, _super);
    function GSPPosRoleRepository(injector) {
        return _super.call(this, injector) || this;
    }
    GSPPosRoleRepository = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRepository"])({
            from: __WEBPACK_IMPORTED_MODULE_2__gsp_pos_role_datastorage__["GSPPosRoleDataStorage"],
            entityType: __WEBPACK_IMPORTED_MODULE_3__gsprole_entity__["GSPRoleEntity"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], GSPPosRoleRepository);
    return GSPPosRoleRepository;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["Repository"]));



/***/ }),

/***/ "./src/app/modules/position/position-detail/position-role/domain/gsprole.entity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPRoleEntity", function() { return GSPRoleEntity; });
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
 * 功能组关系实体
 */
var GSPRoleEntity = /** @class */ (function (_super) {
    __extends(GSPRoleEntity, _super);
    function GSPRoleEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(true),
        __metadata("design:type", String)
    ], GSPRoleEntity.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], GSPRoleEntity.prototype, "code", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], GSPRoleEntity.prototype, "name", void 0);
    return GSPRoleEntity;
}(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["Entity"]));



/***/ }),

/***/ "./src/app/modules/position/position-detail/position-role/domain/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "posRole_Domain_Providers", function() { return posRole_Domain_Providers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gsp_pos_role_datastorage__ = __webpack_require__("./src/app/modules/position/position-detail/position-role/domain/gsp-pos-role.datastorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gsp_pos_role_repository__ = __webpack_require__("./src/app/modules/position/position-detail/position-role/domain/gsp-pos-role.repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gsp_pos_role_dataservice__ = __webpack_require__("./src/app/modules/position/position-detail/position-role/domain/gsp-pos-role.dataservice.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GSPPosRoleDataStorage", function() { return __WEBPACK_IMPORTED_MODULE_0__gsp_pos_role_datastorage__["GSPPosRoleDataStorage"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GSPPosRoleRepository", function() { return __WEBPACK_IMPORTED_MODULE_1__gsp_pos_role_repository__["GSPPosRoleRepository"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GSPPosRoleService", function() { return __WEBPACK_IMPORTED_MODULE_2__gsp_pos_role_dataservice__["GSPPosRoleService"]; });



// 功能组岗位相关服务
var posRole_Domain_Providers = [
    __WEBPACK_IMPORTED_MODULE_0__gsp_pos_role_datastorage__["GSPPosRoleDataStorage"],
    __WEBPACK_IMPORTED_MODULE_1__gsp_pos_role_repository__["GSPPosRoleRepository"],
    __WEBPACK_IMPORTED_MODULE_2__gsp_pos_role_dataservice__["GSPPosRoleService"],
];
// 导出Domain域所有成员



/***/ }),

/***/ "./src/app/modules/position/position-detail/position-role/list-help/list-help.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/position/position-detail/position-role/list-help/list-help.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" [ngClass]=\"{'show d-block':isShow}\">\r\n  <div class=\"modal-dialog modal-dialog-centered gw-page-dialog\" style=\"font-size: 13px;max-width:40%;\">\r\n    <div class=\"modal-content\" style=\"width:100%;height:500px;\">\r\n      <div class=\"modal-header\">\r\n        <div class=\"clearfix p-2\">\r\n          <h6 class=\"modal-title float-left\">{{title}}</h6>\r\n          <button class=\"close\" (click)=\"isShow=false\">\r\n            <span>×</span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <kendo-grid [class]=\"'flex-auto'\" [selectable]=\"selectableSettings\" [kendoGridSelectBy]=\"'id'\" [selectedKeys]=\"curSelectedKeys\"\r\n          [kendoGridBinding]=\"data\" [height]=\"350\">\r\n          <kendo-grid-checkbox-column width=\"10%\"></kendo-grid-checkbox-column>\r\n          <kendo-grid-column field=\"code\" title=\"编号\" width=\"40%\"></kendo-grid-column>\r\n          <kendo-grid-column field=\"name\" title=\"名称\" width=\"50%\"></kendo-grid-column>\r\n        </kendo-grid>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <!--\r\n        <div pr-2 text-left class=\"col-xs-3\">\r\n          <span>全选</span>\r\n          <input type=\"checkbox\" style=\"zoom:120%;\" id=\"checkAllData\" name=\"checkAllData\" [checked]=\"true\">\r\n        </div>\r\n        -->\r\n        <div text-right p-2 class=\"col-xs-9\">\r\n          <button class=\"btn btn-sm  mr-2  btn-primary \" [disabled]=\"\" style=\"font-size: 13px;line-height: 1.2;\"\r\n            (click)=\"btnOk()\">确定</button>\r\n          <button class=\"btn btn-sm mr-2\" style=\"background:#e3e4e4!important;font-size: 13px;line-height: 1.2;\"\r\n            (click)=\"isShow=false\">取消</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <!-- /.modal-dialog -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/position/position-detail/position-role/list-help/list-help.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListHelpComponent", function() { return ListHelpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__position_role_domain__ = __webpack_require__("./src/app/modules/position/position-detail/position-role/domain/index.ts");
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
    function ListHelpComponent(posRoleService) {
        this.posRoleService = posRoleService;
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
            this.posRoleService.getAllRoles()
                .subscribe(function (result) {
                _this.data = result;
                _this.curSelectedKeys = [];
                if (_this.initSelectedKeys) {
                    _this.initSelectedKeys.map(function (item) { return _this.curSelectedKeys.push(item); });
                }
            }, function (error) {
                console.log('岗位授权功能组时获取功能组列表失败');
                console.log(error);
            });
        }
    };
    /**帮助确定按钮 */
    ListHelpComponent.prototype.btnOk = function () {
        var _this = this;
        this.closeDialog();
        // 根据选中行获取实体数据
        var selectRoleEntity = [];
        __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].from(this.curSelectedKeys)
            .map(function (item) { return _this.data.find(function (pos) { return pos['id'] === item; }); })
            .subscribe(function (item) { return selectRoleEntity.push(item); });
        // 发射当前选中数据
        this.selectedAfterOk.next(selectRoleEntity);
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
            template: __webpack_require__("./src/app/modules/position/position-detail/position-role/list-help/list-help.component.html"),
            styles: [__webpack_require__("./src/app/modules/position/position-detail/position-role/list-help/list-help.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__position_role_domain__["GSPPosRoleService"]])
    ], ListHelpComponent);
    return ListHelpComponent;
}());



/***/ }),

/***/ "./src/app/modules/position/position-detail/position-role/pos-role.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/position/position-detail/position-role/pos-role.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"mt-1\">\r\n        <button type=\"button\" \r\n        [disabled]=\"false\"\r\n        (click)=\"this.posRoleVm.setPosRole()\" \r\n        class=\"btn btn-sm btn-default\">设置功能组</button>\r\n        <button type=\"button\" \r\n        [disabled]=\"false\"\r\n        (click)=\"this.posRoleVm.savePosRole()\"\r\n         class=\"btn btn-sm btn-default\">保存</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row mt-2\">\r\n    <div class=\"col-12\">\r\n      <kendo-grid\r\n       [kendoGridSelectBy]=\"'id'\" \r\n       [selectable]=\"this.selectableSettings\"\r\n       [selectedKeys] = \"this.posRoleVm.uiState.selectRoleList\"\r\n       [kendoGridBinding]=\"this.posRoleVm.bindingData.list\">\r\n        <kendo-grid-column field=\"code\" title=\"功能组编号\" width=\"40%\"></kendo-grid-column>\r\n        <kendo-grid-column field=\"name\" title=\"功能组名称\" width=\"60%\"></kendo-grid-column>\r\n      </kendo-grid>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-list-help \r\n[title]=\"'功能组帮助'\" \r\n[initSelectedKeys]=\"this.posRoleVm.uiState.curRoleIdList\"\r\n[isShow]=\"this.posRoleVm.uiState.posRoleHelpFlag\"\r\n(selectedAfterOk)=\"afterRoleSelected($event)\"></app-list-help>\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/position/position-detail/position-role/pos-role.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosRoleComponent", function() { return PosRoleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app__ = __webpack_require__("./src/app/modules/position/position-detail/position-role/app/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__domain__ = __webpack_require__("./src/app/modules/position/position-detail/position-role/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__domain_gsprole_entity__ = __webpack_require__("./src/app/modules/position/position-detail/position-role/domain/gsprole.entity.ts");
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
 * 功能组岗位关系列表
 */
var PosRoleComponent = /** @class */ (function () {
    function PosRoleComponent(posRoleVm, posRoleState, posRoleRep) {
        this.posRoleVm = posRoleVm;
        this.posRoleState = posRoleState;
        this.posRoleRep = posRoleRep;
        this.selectableSettings = {
            checkboxOnly: true,
            mode: 'single'
        };
    }
    PosRoleComponent.prototype.ngOnInit = function () {
    };
    PosRoleComponent.prototype.ngOnChanges = function (changes) {
        // 加载数据
        this.posRoleVm.uiState.selectRoleList = [];
        // 一定要给复制
        this.posRoleState.curPositionId = this.curPosId;
        // TODO: 这个地方目前只有一个问题，输入属性触发变化，但是用不上
        this.posRoleVm.formLoad();
    };
    /** 授权功能组的时候回调函数*/
    PosRoleComponent.prototype.afterRoleSelected = function (args) {
        var _this = this;
        // 更新值
        var newRoleEntityList = [];
        this.posRoleVm.uiState.curRoleIdList = [];
        __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].from(args).subscribe(function (item) {
            newRoleEntityList.push(new __WEBPACK_IMPORTED_MODULE_4__domain_gsprole_entity__["GSPRoleEntity"](item));
            _this.posRoleVm.uiState.curRoleIdList.push(item['id']);
        });
        this.posRoleRep.clear();
        this.posRoleRep.addEntities(newRoleEntityList);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PosRoleComponent.prototype, "curPosId", void 0);
    PosRoleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pos-role',
            template: __webpack_require__("./src/app/modules/position/position-detail/position-role/pos-role.component.html"),
            styles: [__webpack_require__("./src/app/modules/position/position-detail/position-role/pos-role.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app__["GSPPosRoleViewModel"],
            __WEBPACK_IMPORTED_MODULE_2__app__["GSPPosRoleUIState"],
            __WEBPACK_IMPORTED_MODULE_3__domain__["GSPPosRoleRepository"]])
    ], PosRoleComponent);
    return PosRoleComponent;
}());



/***/ }),

/***/ "./src/app/modules/position/position-list/app/handlers/authassign.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthAssignHandler", function() { return AuthAssignHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__position_list_bindingdata__ = __webpack_require__("./src/app/modules/position/position-list/app/position-list.bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common__ = __webpack_require__("./src/app/modules/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__position_list_uistate__ = __webpack_require__("./src/app/modules/position/position-list/app/position-list.uistate.ts");
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






var AuthAssignHandler = /** @class */ (function (_super) {
    __extends(AuthAssignHandler, _super);
    function AuthAssignHandler(router, bindingData, sessionService, uistate) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.bindingData = bindingData;
        _this.sessionService = sessionService;
        _this.uistate = uistate;
        return _this;
    }
    AuthAssignHandler.prototype.schedule = function () {
        var _this = this;
        this.addTask('route', function (lastResult, context) {
            var command = context.command;
            var action = command.params.action;
            var posId = _this.uistate.selectedIds[0];
            if (posId == null || posId.length === 0) {
                alert('请选择对应的岗位');
                return;
            }
            var url = '/main/authassign/' + _this.sessionService.funcId;
            _this.router.navigate([url, { action: action, type: '1', ownerId: posId }]);
        });
    };
    AuthAssignHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgCommandHandler"])({
            commandName: 'authassign'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_3__position_list_bindingdata__["PositionListBindingData"],
            __WEBPACK_IMPORTED_MODULE_4__common__["SysManagerUtil"],
            __WEBPACK_IMPORTED_MODULE_5__position_list_uistate__["PositionListUIState"]])
    ], AuthAssignHandler);
    return AuthAssignHandler;
}(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/position/position-list/app/handlers/form-load.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosListFormLoadHandler", function() { return PosListFormLoadHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_position_list_dataservice__ = __webpack_require__("./src/app/modules/position/position-list/domain/position-list.dataservice.ts");
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



var PosListFormLoadHandler = /** @class */ (function (_super) {
    __extends(PosListFormLoadHandler, _super);
    function PosListFormLoadHandler(dataService) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        return _this;
    }
    PosListFormLoadHandler.prototype.schedule = function () {
        var _this = this;
        this.addTask('loadData', function () {
            _this.dataService.loadData();
        });
    };
    PosListFormLoadHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'posListFormLoad'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__domain_position_list_dataservice__["PositionListDataService"]])
    ], PosListFormLoadHandler);
    return PosListFormLoadHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/position/position-list/app/handlers/remove.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosListRemoveHandler", function() { return PosListRemoveHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_position_list_dataservice__ = __webpack_require__("./src/app/modules/position/position-list/domain/position-list.dataservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__position_list_uistate__ = __webpack_require__("./src/app/modules/position/position-list/app/position-list.uistate.ts");
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




var PosListRemoveHandler = /** @class */ (function (_super) {
    __extends(PosListRemoveHandler, _super);
    function PosListRemoveHandler(dataService, uiState) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.uiState = uiState;
        return _this;
    }
    PosListRemoveHandler.prototype.schedule = function () {
        var _this = this;
        // 删除选中
        this.addTask('remove', function () {
            var dataIds = _this.uiState.selectedIds;
            if (dataIds.length === 0) {
                alert('请选择要删除的岗位');
            }
            _this.dataService.remove(dataIds);
        });
    };
    PosListRemoveHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'posListRemove'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__domain_position_list_dataservice__["PositionListDataService"],
            __WEBPACK_IMPORTED_MODULE_3__position_list_uistate__["PositionListUIState"]])
    ], PosListRemoveHandler);
    return PosListRemoveHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/position/position-list/app/handlers/route.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosListRouteHandler", function() { return PosListRouteHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__position_list_bindingdata__ = __webpack_require__("./src/app/modules/position/position-list/app/position-list.bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common__ = __webpack_require__("./src/app/modules/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__position_list_uistate__ = __webpack_require__("./src/app/modules/position/position-list/app/position-list.uistate.ts");
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






var PosListRouteHandler = /** @class */ (function (_super) {
    __extends(PosListRouteHandler, _super);
    function PosListRouteHandler(router, bindingData, posUtil, uistate) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.bindingData = bindingData;
        _this.posUtil = posUtil;
        _this.uistate = uistate;
        return _this;
    }
    PosListRouteHandler.prototype.schedule = function () {
        var _this = this;
        this.addTask('route', function (lastResult, context) {
            var command = context.command;
            var action = command.params.action;
            var selectId = _this.uistate.selectedIds[0];
            var posId = (action === 'add') ? 'new' : selectId;
            if (action === 'view' || action === 'edit') {
                if (posId == null || posId.length === 0) {
                    alert('请选择对应的岗位');
                    return;
                }
            }
            var posUrl = _this.posUtil.getPositionManagerRouter();
            _this.router.navigate([posUrl, posId, { action: action }]);
        });
    };
    PosListRouteHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgCommandHandler"])({
            commandName: 'posListRoute'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_3__position_list_bindingdata__["PositionListBindingData"],
            __WEBPACK_IMPORTED_MODULE_4__common__["SysManagerUtil"],
            __WEBPACK_IMPORTED_MODULE_5__position_list_uistate__["PositionListUIState"]])
    ], PosListRouteHandler);
    return PosListRouteHandler;
}(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/position/position-list/app/handlers/search.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosListSearchHandler", function() { return PosListSearchHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__position_list_form__ = __webpack_require__("./src/app/modules/position/position-list/app/position-list.form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__domain_position_list_dataservice__ = __webpack_require__("./src/app/modules/position/position-list/domain/position-list.dataservice.ts");
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




var PosListSearchHandler = /** @class */ (function (_super) {
    __extends(PosListSearchHandler, _super);
    function PosListSearchHandler(dataService, form) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.form = form;
        return _this;
    }
    PosListSearchHandler.prototype.schedule = function () {
        var _this = this;
        this.addTask('loadData', function () {
            var begin = '';
            var end = '';
            _this.dataService.search(begin, end);
        });
    };
    PosListSearchHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'posListSearch'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__domain_position_list_dataservice__["PositionListDataService"],
            __WEBPACK_IMPORTED_MODULE_2__position_list_form__["PositionListForm"]])
    ], PosListSearchHandler);
    return PosListSearchHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/position/position-list/app/position-list.bindingdata.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionListBindingData", function() { return PositionListBindingData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_postition_list_repository__ = __webpack_require__("./src/app/modules/position/position-list/domain/postition-list.repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__domain_entities_gspposition_entity__ = __webpack_require__("./src/app/modules/position/position-list/domain/entities/gspposition.entity.ts");
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
 * 岗位列表BindingData
 */
var PositionListBindingData = /** @class */ (function (_super) {
    __extends(PositionListBindingData, _super);
    function PositionListBindingData(injector) {
        return _super.call(this, injector) || this;
    }
    PositionListBindingData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgBindingData"])({
            entity: __WEBPACK_IMPORTED_MODULE_3__domain_entities_gspposition_entity__["GSPPosition"],
            repository: __WEBPACK_IMPORTED_MODULE_2__domain_postition_list_repository__["PositionListRepository"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], PositionListBindingData);
    return PositionListBindingData;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["BindingData"]));



/***/ }),

/***/ "./src/app/modules/position/position-list/app/position-list.form.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionListForm", function() { return PositionListForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__position_list_bindingdata__ = __webpack_require__("./src/app/modules/position/position-list/app/position-list.bindingdata.ts");
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




var PositionListForm = /** @class */ (function (_super) {
    __extends(PositionListForm, _super);
    function PositionListForm(injector) {
        return _super.call(this, injector) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'begin',
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], PositionListForm.prototype, "begin", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'end',
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], PositionListForm.prototype, "end", void 0);
    PositionListForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgForm"])({
            bindingData: __WEBPACK_IMPORTED_MODULE_3__position_list_bindingdata__["PositionListBindingData"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], PositionListForm);
    return PositionListForm;
}(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["Form"]));



/***/ }),

/***/ "./src/app/modules/position/position-list/app/position-list.statemachine.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionListStateMachine", function() { return PositionListStateMachine; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
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


var PositionListStateMachine = /** @class */ (function (_super) {
    __extends(PositionListStateMachine, _super);
    function PositionListStateMachine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgState"])({
            initialState: true
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__farris_devkit__["State"])
    ], PositionListStateMachine.prototype, "init", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'init'; }
        }),
        __metadata("design:type", Boolean)
    ], PositionListStateMachine.prototype, "canAdd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'init'; }
        }),
        __metadata("design:type", Boolean)
    ], PositionListStateMachine.prototype, "canEdit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'init'; }
        }),
        __metadata("design:type", Boolean)
    ], PositionListStateMachine.prototype, "canRemove", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'init'; }
        }),
        __metadata("design:type", Boolean)
    ], PositionListStateMachine.prototype, "canView", void 0);
    PositionListStateMachine = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgStatemachine"])()
    ], PositionListStateMachine);
    return PositionListStateMachine;
}(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["StateMachine"]));



/***/ }),

/***/ "./src/app/modules/position/position-list/app/position-list.uistate.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionListUIState", function() { return PositionListUIState; });
/**
 * UI状态
 */
var PositionListUIState = /** @class */ (function () {
    function PositionListUIState() {
        /**
         * 选中的行
         */
        this.selectedIds = [];
    }
    return PositionListUIState;
}());



/***/ }),

/***/ "./src/app/modules/position/position-list/app/position-list.viewmodel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionListViewModel", function() { return PositionListViewModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__position_list_bindingdata__ = __webpack_require__("./src/app/modules/position/position-list/app/position-list.bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__position_list_form__ = __webpack_require__("./src/app/modules/position/position-list/app/position-list.form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__position_list_statemachine__ = __webpack_require__("./src/app/modules/position/position-list/app/position-list.statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__position_list_uistate__ = __webpack_require__("./src/app/modules/position/position-list/app/position-list.uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
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
 * 岗位视图层
 */
var PositionListViewModel = /** @class */ (function (_super) {
    __extends(PositionListViewModel, _super);
    /**
     * 构造函数
     */
    function PositionListViewModel(injector) {
        var _this = _super.call(this, injector) || this;
        _this.uiState = _this.injector.get(__WEBPACK_IMPORTED_MODULE_4__position_list_uistate__["PositionListUIState"]);
        return _this;
    }
    /**
     * 表单加载
     */
    PositionListViewModel.prototype.formLoad = function () { };
    /**
     * 搜索
    */
    PositionListViewModel.prototype.search = function () { };
    /**
     * 新增
     */
    PositionListViewModel.prototype.add = function () { };
    /**
     * 编辑
     */
    PositionListViewModel.prototype.edit = function () { };
    /**
     * 查看
     */
    PositionListViewModel.prototype.view = function () { };
    /**
     * 删除
     */
    PositionListViewModel.prototype.remove = function () { };
    /**
   * 分配数据权限
   */
    PositionListViewModel.prototype.authassign = function () { };
    /**
    * 查看数据权限
    */
    PositionListViewModel.prototype.authview = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__farris_devkit__["NgCommand"])({
            name: 'posListFormLoad'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PositionListViewModel.prototype, "formLoad", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__farris_devkit__["NgCommand"])({
            name: 'posListSearch'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PositionListViewModel.prototype, "search", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__farris_devkit__["NgCommand"])({
            name: 'posListRoute',
            params: {
                action: 'add'
            }
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PositionListViewModel.prototype, "add", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__farris_devkit__["NgCommand"])({
            name: 'posListRoute',
            params: {
                action: 'edit'
            }
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PositionListViewModel.prototype, "edit", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__farris_devkit__["NgCommand"])({
            name: 'posListRoute',
            params: {
                action: 'view'
            }
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PositionListViewModel.prototype, "view", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__farris_devkit__["NgCommand"])({
            name: 'posListRemove',
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PositionListViewModel.prototype, "remove", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__farris_devkit__["NgCommand"])({
            name: 'authassign',
            params: {
                action: 'edit'
            }
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PositionListViewModel.prototype, "authassign", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__farris_devkit__["NgCommand"])({
            name: 'authassign',
            params: {
                action: 'view'
            }
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PositionListViewModel.prototype, "authview", null);
    PositionListViewModel = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_3__farris_devkit__["NgViewModel"])({
            children: [],
            binding: __WEBPACK_IMPORTED_MODULE_0__position_list_bindingdata__["PositionListBindingData"],
            form: __WEBPACK_IMPORTED_MODULE_1__position_list_form__["PositionListForm"],
            stateMachine: __WEBPACK_IMPORTED_MODULE_2__position_list_statemachine__["PositionListStateMachine"],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_core__["Injector"]])
    ], PositionListViewModel);
    return PositionListViewModel;
}(__WEBPACK_IMPORTED_MODULE_3__farris_devkit__["ViewModel"]));



/***/ }),

/***/ "./src/app/modules/position/position-list/domain/entities/gspposition.entity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPPosition", function() { return GSPPosition; });
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
 * 岗位实体
 */
var GSPPosition = /** @class */ (function (_super) {
    __extends(GSPPosition, _super);
    function GSPPosition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(true),
        __metadata("design:type", String)
    ], GSPPosition.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], GSPPosition.prototype, "code", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], GSPPosition.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], GSPPosition.prototype, "posType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], GSPPosition.prototype, "posGroupName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], GSPPosition.prototype, "creator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], GSPPosition.prototype, "creatorName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], GSPPosition.prototype, "createdTime", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], GSPPosition.prototype, "note", void 0);
    return GSPPosition;
}(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["Entity"]));



/***/ }),

/***/ "./src/app/modules/position/position-list/domain/position-list.dataservice.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionListDataService", function() { return PositionListDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__position_list_datastorage__ = __webpack_require__("./src/app/modules/position/position-list/domain/position-list.datastorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common__ = __webpack_require__("./src/app/modules/common/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PositionListDataService = /** @class */ (function () {
    function PositionListDataService(rest, dataStorage, posSession) {
        this.rest = rest;
        this.dataStorage = dataStorage;
        this.posSession = posSession;
    }
    /**
     * 加载岗位列表
     */
    PositionListDataService.prototype.loadData = function () {
        var _this = this;
        var posUrl = this.posSession.positionWebApi;
        var headers = this.posSession.getHeader();
        this.rest.get(posUrl + '/all', null, headers).subscribe(function (result) {
            _this.dataStorage.load(result);
        });
    };
    /**
    * 搜索岗位
    */
    PositionListDataService.prototype.search = function (begin, end) {
    };
    /**
     * 删除
     */
    PositionListDataService.prototype.remove = function (ids) {
        var _this = this;
        var deleteId = ids[0];
        var posUrl = this.posSession.positionWebApi;
        var headers = this.posSession.getHeader();
        this.rest.delete(posUrl + "/" + deleteId, null, headers).subscribe(function (result) {
            _this.loadData();
        }, function (error) { console.log('删除岗位时出错'); });
    };
    PositionListDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["RestfulService"],
            __WEBPACK_IMPORTED_MODULE_1__position_list_datastorage__["PositionListDataStorage"],
            __WEBPACK_IMPORTED_MODULE_3__common__["SysManagerUtil"]])
    ], PositionListDataService);
    return PositionListDataService;
}());



/***/ }),

/***/ "./src/app/modules/position/position-list/domain/position-list.datastorage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionListDataStorage", function() { return PositionListDataStorage; });
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


/**岗位列表storage */
var PositionListDataStorage = /** @class */ (function (_super) {
    __extends(PositionListDataStorage, _super);
    function PositionListDataStorage() {
        return _super.call(this) || this;
    }
    PositionListDataStorage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], PositionListDataStorage);
    return PositionListDataStorage;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["MemoryStorage"]));



/***/ }),

/***/ "./src/app/modules/position/position-list/domain/postition-list.repository.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionListRepository", function() { return PositionListRepository; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__position_list_datastorage__ = __webpack_require__("./src/app/modules/position/position-list/domain/position-list.datastorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_gspposition_entity__ = __webpack_require__("./src/app/modules/position/position-list/domain/entities/gspposition.entity.ts");
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
 * 岗位列表持久化
 */
var PositionListRepository = /** @class */ (function (_super) {
    __extends(PositionListRepository, _super);
    function PositionListRepository(injector) {
        return _super.call(this, injector) || this;
    }
    PositionListRepository = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRepository"])({
            from: __WEBPACK_IMPORTED_MODULE_2__position_list_datastorage__["PositionListDataStorage"],
            entityType: __WEBPACK_IMPORTED_MODULE_3__entities_gspposition_entity__["GSPPosition"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], PositionListRepository);
    return PositionListRepository;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["Repository"]));



/***/ }),

/***/ "./src/app/modules/position/position-list/position-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex g-main\">\r\n  <div class=\"col\">\r\n    <div class=\"d-flex flex-row  g-main px-2\" style=\"overflow:hidden;\">\r\n      <div class=\"col\">\r\n        <div class=\"d-flex flex-column g-main\">\r\n          <div class=\"pt-2 mb-2\">\r\n            <div class=\"row pt-2 mb-2\">\r\n              <div class=\"col-sm-12 col-md-3 pt-2\">\r\n                <h1 class=\"h4 d-inline-block\">岗位列表</h1>\r\n              </div>\r\n              <div class=\"col-sm-12 col-md-9\">\r\n                <div class=\"pr-2 text-right\">\r\n                  <button class=\"btn btn-sm btn-primary\" (click)=\"viewModel.add()\">新增</button>\r\n                  <button class=\"btn btn-sm btn-default\" (click)=\"viewModel.edit()\">编辑</button>\r\n                  <button class=\"btn btn-sm btn-default\" (click)=\"viewModel.remove()\">删除</button>\r\n                  <button class=\"btn btn-sm btn-default\" (click)=\"viewModel.authassign()\">数据权限</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"flex-auto d-flex \" style=\"position:relative;\">\r\n            <kendo-grid [class]=\"'flex-auto'\" [selectable]=\"selectableSettings\" [kendoGridSelectBy]=\"'id'\"\r\n              [selectedKeys]=\"viewModel.uiState.selectedIds\" [kendoGridBinding]=\"viewModel.bindingData.list\">\r\n              <kendo-grid-checkbox-column width=\"5%\"></kendo-grid-checkbox-column>\r\n              <kendo-grid-column field=\"code\" title=\"岗位编号\" width=\"20%\"></kendo-grid-column>\r\n              <kendo-grid-column field=\"name\" title=\"岗位名称\" width=\"30%\"></kendo-grid-column>\r\n              <kendo-grid-column field=\"creatorName\" title=\"创建人\" width=\"25%\"></kendo-grid-column>\r\n              <kendo-grid-column field=\"note\" title=\"描述\" width=\"25%\"></kendo-grid-column>\r\n            </kendo-grid>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/position/position-list/position-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionListComponent", function() { return PositionListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__position_list_index__ = __webpack_require__("./src/app/modules/position/position-list/position-list.index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common__ = __webpack_require__("./src/app/modules/common/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PositionListComponent = /** @class */ (function () {
    function PositionListComponent(viewModel, route, currentSession) {
        this.viewModel = viewModel;
        this.route = route;
        this.currentSession = currentSession;
        this.selectedMode = 'single';
        this.selectableSettings = {
            checkboxOnly: true,
            mode: this.selectedMode
        };
    }
    PositionListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // 框架路由进来的时候获取到funcid
        this.route.paramMap.subscribe(function (params) {
            if (params.has('funcid')) {
                _this.currentSession.funcId = params.get('funcid');
            }
        });
        // 清空选项
        this.viewModel.uiState.selectedIds = [];
        this.viewModel.formLoad();
    };
    PositionListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-position-list',
            template: __webpack_require__("./src/app/modules/position/position-list/position-list.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__position_list_index__["PositionListViewModel"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_3__common__["SysManagerUtil"]])
    ], PositionListComponent);
    return PositionListComponent;
}());



/***/ }),

/***/ "./src/app/modules/position/position-list/position-list.index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POSLIST_APP_PROVIDERS", function() { return POSLIST_APP_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commandHandlers", function() { return commandHandlers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POSLIST_DOMAIN_PROVIDERS", function() { return POSLIST_DOMAIN_PROVIDERS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_handlers_form_load_handler__ = __webpack_require__("./src/app/modules/position/position-list/app/handlers/form-load.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_handlers_search_handler__ = __webpack_require__("./src/app/modules/position/position-list/app/handlers/search.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_handlers_route_handler__ = __webpack_require__("./src/app/modules/position/position-list/app/handlers/route.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_handlers_remove_handler__ = __webpack_require__("./src/app/modules/position/position-list/app/handlers/remove.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_handlers_authassign_handler__ = __webpack_require__("./src/app/modules/position/position-list/app/handlers/authassign.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_position_list_bindingdata__ = __webpack_require__("./src/app/modules/position/position-list/app/position-list.bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_position_list_form__ = __webpack_require__("./src/app/modules/position/position-list/app/position-list.form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_position_list_statemachine__ = __webpack_require__("./src/app/modules/position/position-list/app/position-list.statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_position_list_viewmodel__ = __webpack_require__("./src/app/modules/position/position-list/app/position-list.viewmodel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_position_list_uistate__ = __webpack_require__("./src/app/modules/position/position-list/app/position-list.uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__domain_position_list_datastorage__ = __webpack_require__("./src/app/modules/position/position-list/domain/position-list.datastorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__domain_postition_list_repository__ = __webpack_require__("./src/app/modules/position/position-list/domain/postition-list.repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__domain_position_list_dataservice__ = __webpack_require__("./src/app/modules/position/position-list/domain/position-list.dataservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__domain_entities_gspposition_entity__ = __webpack_require__("./src/app/modules/position/position-list/domain/entities/gspposition.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__position_detail_app_handlers_form_load_handler__ = __webpack_require__("./src/app/modules/position/position-detail/app/handlers/form-load.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__position_detail_app_handlers_save_handler__ = __webpack_require__("./src/app/modules/position/position-detail/app/handlers/save.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__position_detail_app_handlers_add_handler__ = __webpack_require__("./src/app/modules/position/position-detail/app/handlers/add.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__position_detail_app_handlers_edit_handler__ = __webpack_require__("./src/app/modules/position/position-detail/app/handlers/edit.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__position_detail_app_handlers_cancel_handler__ = __webpack_require__("./src/app/modules/position/position-detail/app/handlers/cancel.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__position_detail_app_handlers_close_handler__ = __webpack_require__("./src/app/modules/position/position-detail/app/handlers/close.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__position_detail_position_role_app_handlers_gsp_pos_role_formload_handler__ = __webpack_require__("./src/app/modules/position/position-detail/position-role/app/handlers/gsp-pos-role.formload.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__position_detail_position_role_app_handlers_gsp_pos_role_save_handler__ = __webpack_require__("./src/app/modules/position/position-detail/position-role/app/handlers/gsp-pos-role.save.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__position_detail_position_role_app_handlers_gsp_pos_role_set_handler__ = __webpack_require__("./src/app/modules/position/position-detail/position-role/app/handlers/gsp-pos-role.set.handler.ts");
/* unused harmony reexport PositionListBindingData */
/* unused harmony reexport PositionListForm */
/* unused harmony reexport PositionListStateMachine */
/* unused harmony reexport PositionListUIState */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PositionListViewModel", function() { return __WEBPACK_IMPORTED_MODULE_8__app_position_list_viewmodel__["PositionListViewModel"]; });
/* unused harmony reexport GSPPosition */
/* unused harmony reexport PositionListDataStorage */
/* unused harmony reexport PositionListRepository */
/* unused harmony reexport PositionListDataService */























/**
 * 列表命令+详情命令
 */
var commandHandlers = [
    __WEBPACK_IMPORTED_MODULE_0__app_handlers_form_load_handler__["PosListFormLoadHandler"],
    __WEBPACK_IMPORTED_MODULE_1__app_handlers_search_handler__["PosListSearchHandler"],
    __WEBPACK_IMPORTED_MODULE_2__app_handlers_route_handler__["PosListRouteHandler"],
    __WEBPACK_IMPORTED_MODULE_3__app_handlers_remove_handler__["PosListRemoveHandler"],
    __WEBPACK_IMPORTED_MODULE_14__position_detail_app_handlers_form_load_handler__["FormLoadHandler"],
    __WEBPACK_IMPORTED_MODULE_15__position_detail_app_handlers_save_handler__["SaveHandler"],
    __WEBPACK_IMPORTED_MODULE_16__position_detail_app_handlers_add_handler__["AddHandler"],
    __WEBPACK_IMPORTED_MODULE_17__position_detail_app_handlers_edit_handler__["EditHandler"],
    __WEBPACK_IMPORTED_MODULE_18__position_detail_app_handlers_cancel_handler__["CancelHandler"],
    __WEBPACK_IMPORTED_MODULE_19__position_detail_app_handlers_close_handler__["CloseHandler"],
    __WEBPACK_IMPORTED_MODULE_4__app_handlers_authassign_handler__["AuthAssignHandler"],
    __WEBPACK_IMPORTED_MODULE_20__position_detail_position_role_app_handlers_gsp_pos_role_formload_handler__["FormLoadPosRoleHandler"],
    __WEBPACK_IMPORTED_MODULE_21__position_detail_position_role_app_handlers_gsp_pos_role_save_handler__["SavePosRoleHandler"],
    __WEBPACK_IMPORTED_MODULE_22__position_detail_position_role_app_handlers_gsp_pos_role_set_handler__["SetPosRoleHandler"]
];
// Providers
var POSLIST_APP_PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_5__app_position_list_bindingdata__["PositionListBindingData"],
    __WEBPACK_IMPORTED_MODULE_6__app_position_list_form__["PositionListForm"],
    __WEBPACK_IMPORTED_MODULE_7__app_position_list_statemachine__["PositionListStateMachine"],
    __WEBPACK_IMPORTED_MODULE_9__app_position_list_uistate__["PositionListUIState"],
    __WEBPACK_IMPORTED_MODULE_8__app_position_list_viewmodel__["PositionListViewModel"]
];
// 导出成员

var POSLIST_DOMAIN_PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_10__domain_position_list_datastorage__["PositionListDataStorage"],
    __WEBPACK_IMPORTED_MODULE_11__domain_postition_list_repository__["PositionListRepository"],
    __WEBPACK_IMPORTED_MODULE_12__domain_position_list_dataservice__["PositionListDataService"]
];



/***/ }),

/***/ "./src/app/modules/position/position.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionModule", function() { return PositionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__position_list_position_list_component__ = __webpack_require__("./src/app/modules/position/position-list/position-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_grid__ = __webpack_require__("./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_dateinputs__ = __webpack_require__("./node_modules/@progress/kendo-angular-dateinputs/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__position_list_position_list_index__ = __webpack_require__("./src/app/modules/position/position-list/position-list.index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__position_detail_position_detail_component__ = __webpack_require__("./src/app/modules/position/position-detail/position-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__position_route_module__ = __webpack_require__("./src/app/modules/position/position.route.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__progress_kendo_angular_layout__ = __webpack_require__("./node_modules/@progress/kendo-angular-layout/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common__ = __webpack_require__("./src/app/modules/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__position_detail_domain__ = __webpack_require__("./src/app/modules/position/position-detail/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__position_detail_app__ = __webpack_require__("./src/app/modules/position/position-detail/app/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__position_detail_position_role_pos_role_component__ = __webpack_require__("./src/app/modules/position/position-detail/position-role/pos-role.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__position_detail_position_role_list_help_list_help_component__ = __webpack_require__("./src/app/modules/position/position-detail/position-role/list-help/list-help.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__position_detail_position_role_domain__ = __webpack_require__("./src/app/modules/position/position-detail/position-role/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__position_detail_position_role_app__ = __webpack_require__("./src/app/modules/position/position-detail/position-role/app/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var PositionModule = /** @class */ (function () {
    function PositionModule() {
    }
    PositionModule.prototype.constctor = function () {
    };
    PositionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__position_list_position_list_component__["PositionListComponent"],
                __WEBPACK_IMPORTED_MODULE_8__position_detail_position_detail_component__["PositionDetailComponent"],
                __WEBPACK_IMPORTED_MODULE_14__position_detail_position_role_pos_role_component__["PosRoleComponent"],
                __WEBPACK_IMPORTED_MODULE_15__position_detail_position_role_list_help_list_help_component__["ListHelpComponent"]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_grid__["GridModule"],
                __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_dateinputs__["DateInputModule"],
                __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_dateinputs__["DatePickerModule"],
                __WEBPACK_IMPORTED_MODULE_10__progress_kendo_angular_layout__["LayoutModule"],
                __WEBPACK_IMPORTED_MODULE_9__position_route_module__["PositionRoutingModule"],
                __WEBPACK_IMPORTED_MODULE_3__farris_devkit__["CommandModule"].setup(__WEBPACK_IMPORTED_MODULE_7__position_list_position_list_index__["commandHandlers"], []),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__farris_devkit__["RestfulService"],
                __WEBPACK_IMPORTED_MODULE_7__position_list_position_list_index__["POSLIST_DOMAIN_PROVIDERS"],
                __WEBPACK_IMPORTED_MODULE_7__position_list_position_list_index__["POSLIST_APP_PROVIDERS"],
                __WEBPACK_IMPORTED_MODULE_12__position_detail_domain__["POS_DETAIL_DOMAIN_PROVIDERS"],
                __WEBPACK_IMPORTED_MODULE_13__position_detail_app__["POS_DETAIL_APP_PROVIDERS"],
                __WEBPACK_IMPORTED_MODULE_16__position_detail_position_role_domain__["posRole_Domain_Providers"],
                __WEBPACK_IMPORTED_MODULE_17__position_detail_position_role_app__["posRole_App_Providers"],
                __WEBPACK_IMPORTED_MODULE_11__common__["SysManagerUtil"]
            ]
        })
    ], PositionModule);
    return PositionModule;
}());

//# sourceMappingURL=position.module.js.map

/***/ }),

/***/ "./src/app/modules/position/position.route.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionRoutingModule", function() { return PositionRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__position_detail_position_detail_component__ = __webpack_require__("./src/app/modules/position/position-detail/position-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__position_list_position_list_component__ = __webpack_require__("./src/app/modules/position/position-list/position-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'positions', component: __WEBPACK_IMPORTED_MODULE_3__position_list_position_list_component__["PositionListComponent"] },
    { path: 'positions/:id', component: __WEBPACK_IMPORTED_MODULE_0__position_detail_position_detail_component__["PositionDetailComponent"] },
    /**其他路由输入 */
    { path: '', redirectTo: 'positions', pathMatch: 'full' },
    { path: '**', redirectTo: 'positions' }
];
var PositionRoutingModule = /** @class */ (function () {
    function PositionRoutingModule() {
    }
    PositionRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"]
            ]
        })
    ], PositionRoutingModule);
    return PositionRoutingModule;
}());



/***/ })

},[],["angular","farris","rtf","progress","rxjs"],["angular","farris","rtf","progress","rxjs"]);
//# sourceMappingURL=position.module.chunk.js.map