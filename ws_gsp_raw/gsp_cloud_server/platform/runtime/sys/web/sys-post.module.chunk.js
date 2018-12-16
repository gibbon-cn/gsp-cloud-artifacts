webpackJsonp(["sys-post.module"],{

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



/***/ }),

/***/ "./src/app/modules/sys-post/app/handler/add-child.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddChildHandler", function() { return AddChildHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_data_util__ = __webpack_require__("./src/app/modules/shared/data-util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__domain__ = __webpack_require__("./src/app/modules/sys-post/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sys_post_uistate__ = __webpack_require__("./src/app/modules/sys-post/app/sys-post-uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sys_post_statemachine__ = __webpack_require__("./src/app/modules/sys-post/app/sys-post-statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sys_post_bindingdata__ = __webpack_require__("./src/app/modules/sys-post/app/sys-post-bindingdata.ts");
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
    function AddChildHandler(dataService, uiState, stateMachine, repository, bindingData) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.uiState = uiState;
        _this.stateMachine = stateMachine;
        _this.repository = repository;
        _this.bindingData = bindingData;
        return _this;
    }
    AddChildHandler.prototype.schedule = function () {
        var _this = this;
        // 数据加载
        this.addTask('addchild', function () {
            _this.uiState.action = 'add';
            var item = _this.bindingData.list.currentItem;
            var data = {
                id: __WEBPACK_IMPORTED_MODULE_2__shared_data_util__["DataUtil"].createNM(),
                code: '',
                name: '',
                parentId: item['ID'],
                layer: Number(item['Layer']) + 1,
                isDetail: true
            };
            var newEntity = Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["EntityFactory"])(__WEBPACK_IMPORTED_MODULE_3__domain__["SysPosEntity"], data);
            _this.repository.addEntity(newEntity);
        });
        // 状态迁移
        this.addTask('transitState', function () {
            _this.stateMachine['edit']();
        });
    };
    AddChildHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'addchild'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__domain__["SysPosDataService"],
            __WEBPACK_IMPORTED_MODULE_4__sys_post_uistate__["SysPosUistate"],
            __WEBPACK_IMPORTED_MODULE_5__sys_post_statemachine__["SysPosStatemachine"],
            __WEBPACK_IMPORTED_MODULE_3__domain__["SysPosRepository"],
            __WEBPACK_IMPORTED_MODULE_6__sys_post_bindingdata__["SysPosBindingdata"]])
    ], AddChildHandler);
    return AddChildHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/sys-post/app/handler/add-item.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemHandler", function() { return AddItemHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_data_util__ = __webpack_require__("./src/app/modules/shared/data-util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__domain__ = __webpack_require__("./src/app/modules/sys-post/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sys_post_uistate__ = __webpack_require__("./src/app/modules/sys-post/app/sys-post-uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sys_post_statemachine__ = __webpack_require__("./src/app/modules/sys-post/app/sys-post-statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sys_post_bindingdata__ = __webpack_require__("./src/app/modules/sys-post/app/sys-post-bindingdata.ts");
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
    function AddItemHandler(uiState, stateMachine, repository, bindingData) {
        var _this = _super.call(this) || this;
        _this.uiState = uiState;
        _this.stateMachine = stateMachine;
        _this.repository = repository;
        _this.bindingData = bindingData;
        return _this;
    }
    AddItemHandler.prototype.schedule = function () {
        var _this = this;
        // 数据加载
        this.addTask('additem', function () {
            _this.uiState.action = 'add';
            var item = _this.bindingData.list.currentItem;
            // data必须与实体绑定数据大小写一致
            var data = {
                id: __WEBPACK_IMPORTED_MODULE_2__shared_data_util__["DataUtil"].createNM(),
                code: '',
                name: '',
                layer: item['Layer'] || 1,
                isDetail: true,
                parentId: item['Parentid']
            };
            var newEntity = Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["EntityFactory"])(__WEBPACK_IMPORTED_MODULE_3__domain__["SysPosEntity"], data);
            _this.repository.addEntity(newEntity);
        });
        // 状态迁移
        this.addTask('transitState', function () {
            _this.stateMachine['edit']();
        });
    };
    AddItemHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'additem'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__sys_post_uistate__["SysPosUistate"],
            __WEBPACK_IMPORTED_MODULE_5__sys_post_statemachine__["SysPosStatemachine"],
            __WEBPACK_IMPORTED_MODULE_3__domain__["SysPosRepository"],
            __WEBPACK_IMPORTED_MODULE_6__sys_post_bindingdata__["SysPosBindingdata"]])
    ], AddItemHandler);
    return AddItemHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/sys-post/app/handler/cancle.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancleHandler", function() { return CancleHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain__ = __webpack_require__("./src/app/modules/sys-post/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sys_post_uistate__ = __webpack_require__("./src/app/modules/sys-post/app/sys-post-uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sys_post_statemachine__ = __webpack_require__("./src/app/modules/sys-post/app/sys-post-statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sys_post_bindingdata__ = __webpack_require__("./src/app/modules/sys-post/app/sys-post-bindingdata.ts");
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






var CancleHandler = /** @class */ (function (_super) {
    __extends(CancleHandler, _super);
    function CancleHandler(repository, bindingData, stateMachine, uiState) {
        var _this = _super.call(this) || this;
        _this.repository = repository;
        _this.bindingData = bindingData;
        _this.stateMachine = stateMachine;
        _this.uiState = uiState;
        return _this;
    }
    CancleHandler.prototype.schedule = function () {
        var _this = this;
        // 数据加载
        this.addTask('cancel', function () {
            if (_this.uiState.action !== 'add') {
                return;
            }
            var id = _this.bindingData.list.currentId;
            _this.repository.removeEntityById(id.toString());
            _this.uiState.action = 'camcel';
        });
        // 状态迁移
        this.addTask('transitState', function () {
            _this.stateMachine['view']();
        });
    };
    CancleHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'cancel'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__domain__["SysPosRepository"],
            __WEBPACK_IMPORTED_MODULE_5__sys_post_bindingdata__["SysPosBindingdata"],
            __WEBPACK_IMPORTED_MODULE_4__sys_post_statemachine__["SysPosStatemachine"],
            __WEBPACK_IMPORTED_MODULE_3__sys_post_uistate__["SysPosUistate"]])
    ], CancleHandler);
    return CancleHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/sys-post/app/handler/edit.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditHandler", function() { return EditHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sys_post_uistate__ = __webpack_require__("./src/app/modules/sys-post/app/sys-post-uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sys_post_statemachine__ = __webpack_require__("./src/app/modules/sys-post/app/sys-post-statemachine.ts");
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
        // 状态迁移
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__sys_post_uistate__["SysPosUistate"],
            __WEBPACK_IMPORTED_MODULE_3__sys_post_statemachine__["SysPosStatemachine"]])
    ], EditHandler);
    return EditHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/sys-post/app/handler/form-load.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLoadHandler", function() { return FormLoadHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain__ = __webpack_require__("./src/app/modules/sys-post/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sys_post_uistate__ = __webpack_require__("./src/app/modules/sys-post/app/sys-post-uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sys_post_statemachine__ = __webpack_require__("./src/app/modules/sys-post/app/sys-post-statemachine.ts");
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
        // 状态迁移
        this.addTask('transitState', function () {
            var action = _this.uiState.action;
            _this.stateMachine['view']();
        });
    };
    FormLoadHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'formLoad'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__domain__["SysPosDataService"],
            __WEBPACK_IMPORTED_MODULE_3__sys_post_uistate__["SysPosUistate"],
            __WEBPACK_IMPORTED_MODULE_4__sys_post_statemachine__["SysPosStatemachine"]])
    ], FormLoadHandler);
    return FormLoadHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/sys-post/app/handler/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commandHandlers", function() { return commandHandlers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__form_load_handler__ = __webpack_require__("./src/app/modules/sys-post/app/handler/form-load.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__remove_handler__ = __webpack_require__("./src/app/modules/sys-post/app/handler/remove.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__save_handler__ = __webpack_require__("./src/app/modules/sys-post/app/handler/save.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_item_handler__ = __webpack_require__("./src/app/modules/sys-post/app/handler/add-item.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_handler__ = __webpack_require__("./src/app/modules/sys-post/app/handler/edit.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cancle_handler__ = __webpack_require__("./src/app/modules/sys-post/app/handler/cancle.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_child_handler__ = __webpack_require__("./src/app/modules/sys-post/app/handler/add-child.handler.ts");







var commandHandlers = [
    __WEBPACK_IMPORTED_MODULE_0__form_load_handler__["FormLoadHandler"],
    __WEBPACK_IMPORTED_MODULE_1__remove_handler__["RemoveHandler"],
    __WEBPACK_IMPORTED_MODULE_2__save_handler__["SaveHandler"],
    __WEBPACK_IMPORTED_MODULE_3__add_item_handler__["AddItemHandler"],
    __WEBPACK_IMPORTED_MODULE_6__add_child_handler__["AddChildHandler"],
    __WEBPACK_IMPORTED_MODULE_5__cancle_handler__["CancleHandler"],
    __WEBPACK_IMPORTED_MODULE_4__edit_handler__["EditHandler"]
];



/***/ }),

/***/ "./src/app/modules/sys-post/app/handler/remove.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveHandler", function() { return RemoveHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain__ = __webpack_require__("./src/app/modules/sys-post/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sys_post_bindingdata__ = __webpack_require__("./src/app/modules/sys-post/app/sys-post-bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sys_post_statemachine__ = __webpack_require__("./src/app/modules/sys-post/app/sys-post-statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sys_post_uistate__ = __webpack_require__("./src/app/modules/sys-post/app/sys-post-uistate.ts");
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
    function RemoveHandler(dataService, bindingData, stateMachine, uiState) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.bindingData = bindingData;
        _this.stateMachine = stateMachine;
        _this.uiState = uiState;
        return _this;
    }
    RemoveHandler.prototype.schedule = function () {
        var _this = this;
        // 数据加载
        this.addTask('remove', function () {
            var id = _this.bindingData['ID'];
            _this.dataService.remove(id);
            _this.uiState.action = 'remove';
        });
        // 状态迁移
        this.addTask('transitState', function () {
            _this.stateMachine['view']();
        });
    };
    RemoveHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'remove'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__domain__["SysPosDataService"],
            __WEBPACK_IMPORTED_MODULE_3__sys_post_bindingdata__["SysPosBindingdata"],
            __WEBPACK_IMPORTED_MODULE_4__sys_post_statemachine__["SysPosStatemachine"],
            __WEBPACK_IMPORTED_MODULE_5__sys_post_uistate__["SysPosUistate"]])
    ], RemoveHandler);
    return RemoveHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/sys-post/app/handler/save.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveHandler", function() { return SaveHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain__ = __webpack_require__("./src/app/modules/sys-post/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sys_post_bindingdata__ = __webpack_require__("./src/app/modules/sys-post/app/sys-post-bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sys_post_statemachine__ = __webpack_require__("./src/app/modules/sys-post/app/sys-post-statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sys_post_uistate__ = __webpack_require__("./src/app/modules/sys-post/app/sys-post-uistate.ts");
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
    function SaveHandler(dataService, bindingData, uiState, stateMachine) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
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
            _this.uiState.action = 'save';
        });
        // 状态迁移
        this.addTask('transitState', function () {
            _this.stateMachine['view']();
        });
    };
    SaveHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'save'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__domain__["SysPosDataService"],
            __WEBPACK_IMPORTED_MODULE_3__sys_post_bindingdata__["SysPosBindingdata"],
            __WEBPACK_IMPORTED_MODULE_5__sys_post_uistate__["SysPosUistate"],
            __WEBPACK_IMPORTED_MODULE_4__sys_post_statemachine__["SysPosStatemachine"]])
    ], SaveHandler);
    return SaveHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/sys-post/app/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_PROVIDERS", function() { return APP_PROVIDERS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sys_post_bindingdata__ = __webpack_require__("./src/app/modules/sys-post/app/sys-post-bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sys_post_form__ = __webpack_require__("./src/app/modules/sys-post/app/sys-post-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sys_post_statemachine__ = __webpack_require__("./src/app/modules/sys-post/app/sys-post-statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sys_post_viewmodel__ = __webpack_require__("./src/app/modules/sys-post/app/sys-post-viewmodel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sys_post_uistate__ = __webpack_require__("./src/app/modules/sys-post/app/sys-post-uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__handler__ = __webpack_require__("./src/app/modules/sys-post/app/handler/index.ts");
/* unused harmony reexport SysPosBindingdata */
/* unused harmony reexport SysPosForm */
/* unused harmony reexport SysPosStatemachine */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SysPosViewmodel", function() { return __WEBPACK_IMPORTED_MODULE_3__sys_post_viewmodel__["SysPosViewmodel"]; });
/* unused harmony reexport SysPosUistate */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "commandHandlers", function() { return __WEBPACK_IMPORTED_MODULE_5__handler__["commandHandlers"]; });






var APP_PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_0__sys_post_bindingdata__["SysPosBindingdata"],
    __WEBPACK_IMPORTED_MODULE_1__sys_post_form__["SysPosForm"],
    __WEBPACK_IMPORTED_MODULE_2__sys_post_statemachine__["SysPosStatemachine"],
    __WEBPACK_IMPORTED_MODULE_3__sys_post_viewmodel__["SysPosViewmodel"],
    __WEBPACK_IMPORTED_MODULE_4__sys_post_uistate__["SysPosUistate"]
];



/***/ }),

/***/ "./src/app/modules/sys-post/app/sys-post-bindingdata.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SysPosBindingdata", function() { return SysPosBindingdata; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain__ = __webpack_require__("./src/app/modules/sys-post/domain/index.ts");
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



var SysPosBindingdata = /** @class */ (function (_super) {
    __extends(SysPosBindingdata, _super);
    function SysPosBindingdata(injector) {
        return _super.call(this, injector) || this;
    }
    SysPosBindingdata = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgBindingData"])({
            entity: __WEBPACK_IMPORTED_MODULE_2__domain__["SysPosEntity"],
            repository: __WEBPACK_IMPORTED_MODULE_2__domain__["SysPosRepository"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], SysPosBindingdata);
    return SysPosBindingdata;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["BindingData"]));



/***/ }),

/***/ "./src/app/modules/sys-post/app/sys-post-form.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SysPosForm", function() { return SysPosForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sys_post_bindingdata__ = __webpack_require__("./src/app/modules/sys-post/app/sys-post-bindingdata.ts");
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




var SysPosForm = /** @class */ (function (_super) {
    __extends(SysPosForm, _super);
    function SysPosForm(injector) {
        return _super.call(this, injector) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'id',
            binding: 'ID'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], SysPosForm.prototype, "FID", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'code',
            binding: 'Code'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], SysPosForm.prototype, "FCode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'name',
            binding: 'Name'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], SysPosForm.prototype, "FName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'path',
            binding: 'Path'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], SysPosForm.prototype, "FPath", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'layer',
            binding: 'Layer'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], SysPosForm.prototype, "FLayer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'isDetail',
            binding: 'Isdetail'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], SysPosForm.prototype, "FIsdetail", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'sortOrder',
            binding: 'Sortorder'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], SysPosForm.prototype, "FSortorder", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'sysInit',
            binding: 'Sysinit'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], SysPosForm.prototype, "FSysinit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'note',
            binding: 'Note'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], SysPosForm.prototype, "FNote", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'parentid',
            binding: 'Parentid'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], SysPosForm.prototype, "FParentid", void 0);
    SysPosForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgForm"])({
            bindingData: __WEBPACK_IMPORTED_MODULE_3__sys_post_bindingdata__["SysPosBindingdata"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], SysPosForm);
    return SysPosForm;
}(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["Form"]));



/***/ }),

/***/ "./src/app/modules/sys-post/app/sys-post-statemachine.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SysPosStatemachine", function() { return SysPosStatemachine; });
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


var SysPosStatemachine = /** @class */ (function (_super) {
    __extends(SysPosStatemachine, _super);
    function SysPosStatemachine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgState"])({ initialState: true }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__farris_devkit__["State"])
    ], SysPosStatemachine.prototype, "viewState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgState"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__farris_devkit__["State"])
    ], SysPosStatemachine.prototype, "addState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgState"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__farris_devkit__["State"])
    ], SysPosStatemachine.prototype, "editState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'viewState'; }
        }),
        __metadata("design:type", Boolean)
    ], SysPosStatemachine.prototype, "canAdd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'viewState'; }
        }),
        __metadata("design:type", Boolean)
    ], SysPosStatemachine.prototype, "canEdit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'addState' || context.state === 'editState'; }
        }),
        __metadata("design:type", Boolean)
    ], SysPosStatemachine.prototype, "canCancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'viewState'; }
        }),
        __metadata("design:type", Boolean)
    ], SysPosStatemachine.prototype, "canDelete", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'addState' || context.state === 'editState'; }
        }),
        __metadata("design:type", Boolean)
    ], SysPosStatemachine.prototype, "canSave", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'viewState'; }
        }),
        __metadata("design:type", Boolean)
    ], SysPosStatemachine.prototype, "canSwitch", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'addState' || context.state === 'editState'; }
        }),
        __metadata("design:type", Boolean)
    ], SysPosStatemachine.prototype, "canInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgAction"])({ transitTo: 'addState' }),
        __metadata("design:type", Function)
    ], SysPosStatemachine.prototype, "add", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgAction"])({ transitTo: 'editState' }),
        __metadata("design:type", Function)
    ], SysPosStatemachine.prototype, "edit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgAction"])({ transitTo: 'viewState' }),
        __metadata("design:type", Function)
    ], SysPosStatemachine.prototype, "view", void 0);
    SysPosStatemachine = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgStatemachine"])()
    ], SysPosStatemachine);
    return SysPosStatemachine;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["StateMachine"]));



/***/ }),

/***/ "./src/app/modules/sys-post/app/sys-post-uistate.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SysPosUistate", function() { return SysPosUistate; });
var SysPosUistate = /** @class */ (function () {
    function SysPosUistate() {
    }
    return SysPosUistate;
}());



/***/ }),

/***/ "./src/app/modules/sys-post/app/sys-post-viewmodel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SysPosViewmodel", function() { return SysPosViewmodel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sys_post_bindingdata__ = __webpack_require__("./src/app/modules/sys-post/app/sys-post-bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sys_post_form__ = __webpack_require__("./src/app/modules/sys-post/app/sys-post-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sys_post_statemachine__ = __webpack_require__("./src/app/modules/sys-post/app/sys-post-statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sys_post_uistate__ = __webpack_require__("./src/app/modules/sys-post/app/sys-post-uistate.ts");
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
var SysPosViewmodel = /** @class */ (function (_super) {
    __extends(SysPosViewmodel, _super);
    /**
     * 构造函数
     */
    function SysPosViewmodel(injector) {
        var _this = _super.call(this, injector) || this;
        _this.uiState = _this.injector.get(__WEBPACK_IMPORTED_MODULE_5__sys_post_uistate__["SysPosUistate"]);
        return _this;
    }
    /**
     * 表单加载
     */
    SysPosViewmodel.prototype.formLoad = function () { };
    /**
     * 新增子级
     */
    SysPosViewmodel.prototype.addchild = function () { };
    /**
     * 新增平级
     */
    SysPosViewmodel.prototype.additem = function () { };
    /**
     * 编辑
     */
    SysPosViewmodel.prototype.edit = function () { };
    /**
     * 删除
     */
    SysPosViewmodel.prototype.remove = function () { };
    /**
     * 保存
     */
    SysPosViewmodel.prototype.save = function () { };
    /**
     * 取消
     */
    SysPosViewmodel.prototype.cancel = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'formLoad'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SysPosViewmodel.prototype, "formLoad", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'addchild'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SysPosViewmodel.prototype, "addchild", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'additem'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SysPosViewmodel.prototype, "additem", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'edit'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SysPosViewmodel.prototype, "edit", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'remove'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SysPosViewmodel.prototype, "remove", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'save'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SysPosViewmodel.prototype, "save", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'cancel'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SysPosViewmodel.prototype, "cancel", null);
    SysPosViewmodel = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgViewModel"])({
            children: [],
            binding: __WEBPACK_IMPORTED_MODULE_2__sys_post_bindingdata__["SysPosBindingdata"],
            form: __WEBPACK_IMPORTED_MODULE_3__sys_post_form__["SysPosForm"],
            stateMachine: __WEBPACK_IMPORTED_MODULE_4__sys_post_statemachine__["SysPosStatemachine"],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], SysPosViewmodel);
    return SysPosViewmodel;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["ViewModel"]));



/***/ }),

/***/ "./src/app/modules/sys-post/domain/entities/sys-post.entity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SysPosEntity", function() { return SysPosEntity; });
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
var SysPosEntity = /** @class */ (function (_super) {
    __extends(SysPosEntity, _super);
    function SysPosEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])({
            dataField: 'id',
            primary: true
        }),
        __metadata("design:type", String)
    ], SysPosEntity.prototype, "ID", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])({
            dataField: 'code'
        }),
        __metadata("design:type", String)
    ], SysPosEntity.prototype, "Code", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])({
            dataField: 'name'
        }),
        __metadata("design:type", String)
    ], SysPosEntity.prototype, "Name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])({
            dataField: 'path'
        }),
        __metadata("design:type", String)
    ], SysPosEntity.prototype, "Path", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])({
            dataField: 'layer'
        }),
        __metadata("design:type", String)
    ], SysPosEntity.prototype, "Layer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])({
            dataField: 'isDetail'
        }),
        __metadata("design:type", Boolean)
    ], SysPosEntity.prototype, "Isdetail", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])({
            dataField: 'sortOrder'
        }),
        __metadata("design:type", String)
    ], SysPosEntity.prototype, "Sortorder", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])({
            dataField: 'sysInit'
        }),
        __metadata("design:type", String)
    ], SysPosEntity.prototype, "SysInit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])({
            dataField: 'note'
        }),
        __metadata("design:type", String)
    ], SysPosEntity.prototype, "Note", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])({
            dataField: 'parentId',
        }),
        __metadata("design:type", String)
    ], SysPosEntity.prototype, "Parentid", void 0);
    return SysPosEntity;
}(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["Entity"]));



/***/ }),

/***/ "./src/app/modules/sys-post/domain/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAIN_PROVIDERS", function() { return DOMAIN_PROVIDERS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sys_post_datastorage__ = __webpack_require__("./src/app/modules/sys-post/domain/sys-post.datastorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sys_post_dataservice__ = __webpack_require__("./src/app/modules/sys-post/domain/sys-post.dataservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sys_post_repository__ = __webpack_require__("./src/app/modules/sys-post/domain/sys-post.repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_sys_post_entity__ = __webpack_require__("./src/app/modules/sys-post/domain/entities/sys-post.entity.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SysPosEntity", function() { return __WEBPACK_IMPORTED_MODULE_3__entities_sys_post_entity__["SysPosEntity"]; });
/* unused harmony reexport SysPosDatastorage */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SysPosRepository", function() { return __WEBPACK_IMPORTED_MODULE_2__sys_post_repository__["SysPosRepository"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SysPosDataService", function() { return __WEBPACK_IMPORTED_MODULE_1__sys_post_dataservice__["SysPosDataService"]; });




var DOMAIN_PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_0__sys_post_datastorage__["SysPosDatastorage"],
    __WEBPACK_IMPORTED_MODULE_1__sys_post_dataservice__["SysPosDataService"],
    __WEBPACK_IMPORTED_MODULE_2__sys_post_repository__["SysPosRepository"],
];



/***/ }),

/***/ "./src/app/modules/sys-post/domain/sys-post.dataservice.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SysPosDataService", function() { return SysPosDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sys_post_repository__ = __webpack_require__("./src/app/modules/sys-post/domain/sys-post.repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sys_post_datastorage__ = __webpack_require__("./src/app/modules/sys-post/domain/sys-post.datastorage.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SysPosDataService = /** @class */ (function () {
    function SysPosDataService(reposity, datastorage, rest) {
        this.reposity = reposity;
        this.datastorage = datastorage;
        this.rest = rest;
        this.url = '/api/runtime/sys/v1.0/posgroups';
    }
    SysPosDataService.prototype.getdata = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpHeaders"]().set('SessionId', this.sessionid);
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
    SysPosDataService.prototype.save = function (item) {
        var _this = this;
        // todo:此处争取顺序应该是先httpservice 更新服务端，然后客户端重新load
        var entities = this.reposity.getAllEntities();
        entities.forEach(function (element) {
            if (element.ID === item.ID) {
                element.Code = item.Code;
                element.Isdetail = item.Isdetail;
                element.Layer = item.Layer;
                element.Name = item.Name;
                element.Note = item.Note;
                element.Parentid = item.Parentid;
                element.Path = item.Path;
                element.Sortorder = item.Sortorder;
                element.SysInit = item.SysInit;
                _this.postdata = _this.convert2json(item);
            }
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpHeaders"]().set('SessionId', this.sessionid);
        this.rest.post(this.url, this.postdata, null, { headers: headers }).subscribe(function (res) { });
    };
    /**
     * 删除并重新加载
     */
    SysPosDataService.prototype.remove = function (id) {
        var _this = this;
        // todo:此处争取顺序应该是先httpservice 更新服务端，然后客户端重新load
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpHeaders"]().set('SessionId', this.sessionid);
        this.rest.delete(this.url + "/" + id, null, { headers: headers }).subscribe(function (res) {
            _this.reposity.removeEntityById(id);
        });
    };
    SysPosDataService.prototype.convert2json = function (item) {
        var data = {
            Id: item.ID,
            Code: item.Code,
            Name: item.Name,
            Path: item.Path || '',
            ParentId: item.Parentid || '0',
            Layer: item.Layer || 1,
            Note: item.Note,
            IsDetail: item.Isdetail || true,
            Creator: ''
        };
        return data;
    };
    SysPosDataService.prototype.clonefunction = function (item) {
    };
    SysPosDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__sys_post_repository__["SysPosRepository"],
            __WEBPACK_IMPORTED_MODULE_4__sys_post_datastorage__["SysPosDatastorage"],
            __WEBPACK_IMPORTED_MODULE_2__farris_devkit__["RestfulService"]])
    ], SysPosDataService);
    return SysPosDataService;
}());



/***/ }),

/***/ "./src/app/modules/sys-post/domain/sys-post.datastorage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SysPosDatastorage", function() { return SysPosDatastorage; });
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


var SysPosDatastorage = /** @class */ (function (_super) {
    __extends(SysPosDatastorage, _super);
    function SysPosDatastorage() {
        return _super.call(this) || this;
    }
    SysPosDatastorage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SysPosDatastorage);
    return SysPosDatastorage;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["MemoryStorage"]));



/***/ }),

/***/ "./src/app/modules/sys-post/domain/sys-post.repository.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SysPosRepository", function() { return SysPosRepository; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sys_post_datastorage__ = __webpack_require__("./src/app/modules/sys-post/domain/sys-post.datastorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_sys_post_entity__ = __webpack_require__("./src/app/modules/sys-post/domain/entities/sys-post.entity.ts");
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




var SysPosRepository = /** @class */ (function (_super) {
    __extends(SysPosRepository, _super);
    function SysPosRepository(injector) {
        return _super.call(this, injector) || this;
    }
    SysPosRepository = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRepository"])({
            from: __WEBPACK_IMPORTED_MODULE_2__sys_post_datastorage__["SysPosDatastorage"],
            entityType: __WEBPACK_IMPORTED_MODULE_3__entities_sys_post_entity__["SysPosEntity"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], SysPosRepository);
    return SysPosRepository;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["Repository"]));



/***/ }),

/***/ "./src/app/modules/sys-post/sys-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SysPostComponent", function() { return SysPostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app__ = __webpack_require__("./src/app/modules/sys-post/app/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain__ = __webpack_require__("./src/app/modules/sys-post/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gsp_sys_rtf_common__ = __webpack_require__("./node_modules/@gsp-sys/rtf-common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gsp_sys_rtf_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__gsp_sys_rtf_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SysPostComponent = /** @class */ (function () {
    function SysPostComponent(viewmodel, route, postDataservice, frmService) {
        this.viewmodel = viewmodel;
        this.route = route;
        this.postDataservice = postDataservice;
        this.frmService = frmService;
    }
    SysPostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            if (params.has('funcid')) {
                var funcid = params.get('funcid');
                _this.postDataservice.sessionid = _this.frmService.getSession(funcid);
            }
        });
        this.viewmodel.bindingData.changes.subscribe(function (changes) {
            console.log('changetype =' + changes.type);
            if (changes.type === __WEBPACK_IMPORTED_MODULE_5__farris_devkit__["ChangeType"].SelectionChanged) {
                return;
            }
            _this.data = _this.viewmodel.bindingData.list.toJSON();
        });
        this.viewmodel.form.valueChanges.subscribe(function (changes) {
            console.log('changetype =' + changes.type);
            _this.data = _this.viewmodel.bindingData.list.toJSON();
            console.log(JSON.stringify(_this.data));
        });
        this.viewmodel.formLoad();
    };
    SysPostComponent.prototype.handleSelection = function (_a) {
        var dataItem = _a.dataItem;
        this.viewmodel.bindingData.list.setCurrentId(dataItem.ID);
    };
    SysPostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sys-post',
            template: __webpack_require__("./src/app/modules/sys-post/sys-post.coponent.html"),
            styles: [__webpack_require__("./src/app/modules/sys-post/sys-post.coponent.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app__["SysPosViewmodel"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_2__domain__["SysPosDataService"],
            __WEBPACK_IMPORTED_MODULE_3__gsp_sys_rtf_common__["FrameworkService"]])
    ], SysPostComponent);
    return SysPostComponent;
}());



/***/ }),

/***/ "./src/app/modules/sys-post/sys-post.coponent.css":
/***/ (function(module, exports) {

module.exports = ".k-icon.my-custom-icon-class:before {\r\n    content: \"\\\\e13a\";\r\n }"

/***/ }),

/***/ "./src/app/modules/sys-post/sys-post.coponent.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pt-2 mb-2\"> \r\n    <div class=\"pr-2 text-left\">\r\n                <button type=\"button\" (click)= \"viewmodel.additem()\" [disabled]=\"!viewmodel.stateMachine.canAdd\"  class=\"btn btn-sm btn-default\">新增同级 </button>\r\n                <button type=\"button\" (click)= \"viewmodel.addchild()\" [disabled]=\"!viewmodel.stateMachine.canAdd\"  class=\"btn btn-sm btn-default\">新增子级 </button>\r\n                <button type=\"button\"  [disabled]=\"!viewmodel.stateMachine.canEdit\"  (click)= \"viewmodel.edit()\"  class=\"btn btn-sm btn-default\">编辑 </button>\r\n                <button type=\"button\"   [disabled]=\"!viewmodel.stateMachine.canCancel\" (click)= \"viewmodel.cancel()\" class=\"btn btn-sm btn-default\">取消 </button>\r\n                <button type=\"button\"  [disabled]=\"!viewmodel.stateMachine.canSave\" (click)= \"viewmodel.save()\" class=\"btn btn-sm btn-default\">保存 </button>\r\n                <button type=\"button\"  [disabled]=\"!viewmodel.stateMachine.canDelete\"  (click)= \"viewmodel.remove()\" class=\"btn btn-sm btn-default\">删除 </button>\r\n    </div>\r\n\r\n    <div class=\"functioninfos\" style=\"height: 1300px\">\r\n    <kendo-splitter orientation=\"horizontal\" style=\"height: 100%;\">\r\n        <kendo-splitter-pane [collapsible]=\"true\"  size=\"30%\" min = \"20%\" max =\"70%\">\r\n            <!--工具栏了 BEGIN-->\r\n            <div class=\"row pt-2 mb-2\">\r\n                <div class=\"col-md-12 col-lg-12 funcinfo-col\">\r\n                    <h2>岗位分组</h2>\r\n                    <div class=\"card\" >\r\n                            <!--tree -->\r\n                        <div class=\"col-xs-12 col-sm-12 col-md-3 col-lg-3 \">                  \r\n                            <kendo-treeview style=\"width:500px\"  [nodes]=\"data\" textField=\"Name\" kendoTreeViewExpandable  kendoTreeViewFlatDataBinding  idField=\"ID\"  parentIdField=\"Parentid\" (selectionChange)=\"handleSelection($event)\" > </kendo-treeview>                  \r\n                        </div>\r\n                        <!--tree end -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </kendo-splitter-pane>\r\n        <kendo-splitter-pane   [resizable]=\"true\" style=\"height: 1300px;\">\r\n            <kendo-tabstrip >\r\n                <kendo-tabstrip-tab [title]=\"'基本信息'\" [selected]=\"true\" style=\"height : 1300px\">\r\n                    <ng-template kendoTabContent style=\"height : 1300px\">\r\n                        <!--info  -->\r\n                        <div class=\"row funcinfo-wrapper\">\r\n                            <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 funcinfo-col\">                        \r\n                                <div class=\"card col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n                                    <div class=\"card-block \">\r\n                                        <form class=\"k-form\" [formGroup]=\"viewmodel.form\"  >\r\n                                            <label class=\"k-form-field\">\r\n                                                <span>内码 </span>\r\n                                                <input formControlName=\"id\" disabled=\"false\" class=\"k-textbox w-100\" />\r\n                                            </label>\r\n                                            <label class=\"k-form-field\">\r\n                                                <span>编号 </span>\r\n                                                <input class=\"k-textbox\" [readonly]=\"!viewmodel.stateMachine.canInput\" formControlName=\"code\"  />\r\n                                            </label>\r\n                                            <label class=\"k-form-field\">\r\n                                                <span>名称</span>\r\n                                                <input class=\"k-textbox\" [readonly]=\"!viewmodel.stateMachine.canInput\" formControlName=\"name\"/>\r\n                                            </label>\r\n                                            <label class=\"k-form-field\">\r\n                                                <span>描述</span>\r\n                                                <input class=\"k-textbox\" [readonly]=\"!viewmodel.stateMachine.canInput\" formControlName=\"note\"  />\r\n                                            </label>                                                        \r\n                                        </form>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </ng-template>\r\n                </kendo-tabstrip-tab>\r\n                <!-- <kendo-tabstrip-tab [title]=\"'高级信息'\" [selected]=\"true\" style=\"height : 100%\">\r\n                        <ng-template kendoTabContent >\r\n                            <div class=\"row funcinfo-wrapper\">\r\n                                <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 funcinfo-col\">                        \r\n                                    <div class=\"card col-xs-12 col-sm-12 col-md-12 col-lg-12\" >\r\n                                        <div class=\"card-block \">\r\n                                            <form class=\"k-form\" [formGroup]=\"viewmodel.form\"  >\r\n                                                <div class=\"k-form-field\">\r\n                                                    <input type=\"checkbox\" id=\"ch1\" class=\"k-checkbox\" [checked] = \"isworkstation\" >\r\n                                                    <label class=\"k-checkbox-label\" for=\"ch1\">发布为菜单</label>\r\n                                                \r\n                                                    <input type=\"checkbox\" id=\"ch2\" class=\"k-checkbox\" [checked] = \"viewmodel.form.FIsWorkStation.value\">\r\n                                                    <label class=\"k-checkbox-label\" for=\"ch2\">发布为联查</label>\r\n                                                \r\n                                                    <input type=\"checkbox\" id=\"ch3\" class=\"k-checkbox\">\r\n                                                    <label class=\"k-checkbox-label\" for=\"ch3\">发布为工作中心</label>\r\n                                                </div>\r\n                                                <fieldset>\r\n                                                    <legend>调用信息</legend>\r\n\r\n                                                    <label class=\"k-form-field\">\r\n                                                        <span>url </span>\r\n                                                        <input class=\"k-textbox w-100\" [disabled]=\"viewmodel.stateMachine.canInput\" formControlName=\"invokingtype\"/>\r\n                                                    </label>      \r\n                                                    <label class=\"k-form-field\">\r\n                                                            <span>path </span>\r\n                                                            <input  class=\"k-textbox w-100\" [disabled]=\"viewmodel.stateMachine.canInput\" formControlName=\"name\"/>\r\n                                                        </label>                                                    \r\n                                                </fieldset>\r\n                                            </form>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </ng-template>\r\n                    </kendo-tabstrip-tab> -->\r\n            </kendo-tabstrip> \r\n        </kendo-splitter-pane>\r\n</kendo-splitter>\r\n</div>\r\n        <!--info end -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/sys-post/sys-post.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SysPostModule", function() { return SysPostModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sys_post_component__ = __webpack_require__("./src/app/modules/sys-post/sys-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sys_post_routing_module__ = __webpack_require__("./src/app/modules/sys-post/sys-post.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__domain__ = __webpack_require__("./src/app/modules/sys-post/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_treeview__ = __webpack_require__("./node_modules/@progress/kendo-angular-treeview/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_layout__ = __webpack_require__("./node_modules/@progress/kendo-angular-layout/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app__ = __webpack_require__("./src/app/modules/sys-post/app/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var SysPostModule = /** @class */ (function () {
    function SysPostModule() {
    }
    SysPostModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__sys_post_component__["SysPostComponent"]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__sys_post_routing_module__["SysPostRoutingModule"],
                __WEBPACK_IMPORTED_MODULE_2__sys_post_routing_module__["SysPostRoutingModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_treeview__["TreeViewModule"],
                // CommandModule.setup(commandHandlers, []),
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_layout__["LayoutModule"],
                __WEBPACK_IMPORTED_MODULE_4__farris_devkit__["CommandModule"].setup(__WEBPACK_IMPORTED_MODULE_9__app__["commandHandlers"], []),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__domain__["DOMAIN_PROVIDERS"],
                __WEBPACK_IMPORTED_MODULE_4__farris_devkit__["RestfulService"],
                __WEBPACK_IMPORTED_MODULE_9__app__["APP_PROVIDERS"],
                __WEBPACK_IMPORTED_MODULE_9__app__["commandHandlers"]
            ]
        })
    ], SysPostModule);
    return SysPostModule;
}());

//# sourceMappingURL=sys-post.module.js.map

/***/ }),

/***/ "./src/app/modules/sys-post/sys-post.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SysPostRoutingModule", function() { return SysPostRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sys_post_component__ = __webpack_require__("./src/app/modules/sys-post/sys-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__sys_post_component__["SysPostComponent"] }
];
var SysPostRoutingModule = /** @class */ (function () {
    function SysPostRoutingModule() {
    }
    SysPostRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"]
            ]
        })
    ], SysPostRoutingModule);
    return SysPostRoutingModule;
}());



/***/ })

},[],["angular","farris","rtf","progress","rxjs"],["angular","farris","rtf","progress","rxjs"]);
//# sourceMappingURL=sys-post.module.chunk.js.map