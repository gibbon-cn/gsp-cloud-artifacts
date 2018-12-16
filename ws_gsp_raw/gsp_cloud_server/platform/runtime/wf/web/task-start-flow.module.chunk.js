webpackJsonp(["task-start-flow.module"],{

/***/ "./node_modules/@progress/kendo-angular-label/dist/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main__ = __webpack_require__("./node_modules/@progress/kendo-angular-label/dist/es/main.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "LabelModule", function() { return __WEBPACK_IMPORTED_MODULE_0__main__["LabelModule"]; });
/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ "./node_modules/@progress/kendo-angular-label/dist/es/label.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelDirective", function() { return LabelDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var isDocumentAvailable = function () {
    return typeof document !== 'undefined' && !!document.body;
};
/**
 * Represents the [Kendo UI Label directive for Angular]({% slug overview_label %}).
 * The Label associates a focusable Angular component or an HTML element
 * with a `label` tag by using the `[for]` property binding.
 *
 * To associate a component by using the `label` element, either:
 * * Set the `[for]` property binding to a
 * [template reference variable](https://angular.io/docs/ts/latest/guide/template-syntax.html#!#ref-vars), or
 * * Set the `[for]` property binding to an `id` HTML string value.
 *
 * @example
 * ```ts
 * _@Component({
 * selector: 'my-app',
 * template: `
 *  <div class="row example-wrapper" style="min-height: 450px;">
 *    <div class="col-xs-12 col-md-6 example-col">
 *      <label [for]="datepicker">DatePicker: </label>
 *      <kendo-datepicker #datepicker></kendo-datepicker>
 *    </div>
 *
 *    <div class="col-xs-12 col-md-6 example-col">
 *      <label [for]="'input'">Input: </label>
 *      <input id="input" />
 *    </div>
 *  </div>
 * `
 * })
 * class AppComponent { }
 * ```
 */
var LabelDirective = /** @class */ (function () {
    function LabelDirective() {
    }
    Object.defineProperty(LabelDirective.prototype, "labelFor", {
        get: function () {
            if (typeof this.for === 'string') {
                return this.for;
            }
            if (!isDocumentAvailable()) {
                return null;
            }
            var component = this.getFocusableComponent() || {};
            return component.focusableId || component.id || null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     */
    LabelDirective.prototype.handleClick = function () {
        var component = this.getFocusableComponent();
        if (!component) {
            return;
        }
        if (component.focusComponent) {
            component.focusComponent();
        }
        if (component.focus) {
            component.focus();
        }
    };
    LabelDirective.prototype.getFocusableComponent = function () {
        var target = this.for;
        if (target) {
            var focusableComponent = target;
            var hasFocus = focusableComponent.focus !== undefined;
            var hasFocusComponent = focusableComponent.focusComponent !== undefined;
            if (hasFocus || hasFocusComponent) {
                return target;
            }
            if (isDocumentAvailable() && typeof target === 'string') {
                return document.querySelector("[id='" + target + "']");
            }
        }
        return null;
    };
    LabelDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: 'label[for]' //tslint:disable-line:directive-selector
                },] },
    ];
    /** @nocollapse */
    LabelDirective.ctorParameters = function () { return []; };
    LabelDirective.propDecorators = {
        'for': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'labelFor': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['attr.for',] },],
        'handleClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['click',] },],
    };
    return LabelDirective;
}());



/***/ }),

/***/ "./node_modules/@progress/kendo-angular-label/dist/es/label.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelModule", function() { return LabelModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__label_directive__ = __webpack_require__("./node_modules/@progress/kendo-angular-label/dist/es/label.directive.js");


var COMPONENT_DIRECTIVES = [__WEBPACK_IMPORTED_MODULE_1__label_directive__["LabelDirective"]];
/**
 * The exported package module.
 *
 * The package exports:
 * - `LabelDirective`&mdash;The Label directive class.
 *
 * @example
 *
 * ```ts-no-run
 * // Import the Label module
 * import { LabelModule } from '@progress/kendo-angular-label';
 *
 * // The browser platform with a compiler
 * import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
 *
 * import { NgModule } from '@angular/core';
 *
 * // Import the app component
 * import { AppComponent } from './app.component';
 *
 * // Define the app module
 * _@NgModule({
 *     declarations: [AppComponent], // declare app component
 *     imports:      [BrowserModule, LabelModule], // import Label module
 *     bootstrap:    [AppComponent]
 * })
 * export class AppModule {}
 *
 * // Compile and launch the module
 * platformBrowserDynamic().bootstrapModule(AppModule);
 *
 * ```
 */
var LabelModule = /** @class */ (function () {
    function LabelModule() {
    }
    LabelModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    declarations: [COMPONENT_DIRECTIVES],
                    exports: [COMPONENT_DIRECTIVES]
                },] },
    ];
    /** @nocollapse */
    LabelModule.ctorParameters = function () { return []; };
    return LabelModule;
}());



/***/ }),

/***/ "./node_modules/@progress/kendo-angular-label/dist/es/main.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__label_directive__ = __webpack_require__("./node_modules/@progress/kendo-angular-label/dist/es/label.directive.js");
/* unused harmony reexport LabelDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__label_module__ = __webpack_require__("./node_modules/@progress/kendo-angular-label/dist/es/label.module.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "LabelModule", function() { return __WEBPACK_IMPORTED_MODULE_1__label_module__["LabelModule"]; });




/***/ }),

/***/ "./src/app/modules/task-start-flow/assets/mock.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOCKPROCESSLIST", function() { return MOCKPROCESSLIST; });
var MOCKPROCESSLIST = {
    'value': [{
            'key': 'Expense',
            'firstDimension': '1001',
            'secondDimension': 'Mobile',
            'name': '差旅费报销流程',
            'description': '差旅费报销流程'
        }]
};


/***/ }),

/***/ "./src/app/modules/task-start-flow/flow-list/flow-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/task-start-flow/flow-list/flow-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid d-flex h-100 flex-column\">\r\n  <div class=\"d-flex mb-3\">\r\n    <div style=\"width:200px; padding-top: 10px\">\r\n      <img src=\"/platform/runtime/wf/web/assets/img/task.png\" style=\"width:64px;height:64px;\" class=\"rounded\">\r\n      <h3 class=\"d-inline pl-3\">启动流程</h3>\r\n    </div>\r\n    <div class=\"mx-auto\"></div>\r\n    <div class=\"mx-right\" style=\"padding-top: 10px\">\r\n      <button kendoButton [primary]=\"true\" (click)=\"startFlow()\">\r\n        <i class=\"material-icons align-middle\" style=\"font-size:18px\">add</i>启动流程\r\n      </button>\r\n      <!-- <button kendoButton [disabled]=\"enable\">\r\n        <i class=\"material-icons align-middle\" style=\"font-size:18px\">delete</i> 删除\r\n      </button> -->\r\n    </div>\r\n  </div>\r\n \r\n  <div class=\"d-flex flex-column h-100\">\r\n    <kendo-grid class=\"h-100\" [selectable]=\"selectableSettings\" [data]=\"gridView\" [resizable]=\"true\" (selectionChange)=\"onSelectionChange($event)\">\r\n      <kendo-grid-column field=\"name\" title=\"名称\"></kendo-grid-column>\r\n      <kendo-grid-column field=\"key\" title=\"业务类型编号\" [hidden]=\"true\"></kendo-grid-column>\r\n      <kendo-grid-column field=\"firstDimension\" title=\"第一维度\"></kendo-grid-column>\r\n      <kendo-grid-column field=\"secondDimension\" title=\"第二维度\"></kendo-grid-column>\r\n      <kendo-grid-column field=\"description\" title=\"描述\"></kendo-grid-column>\r\n    </kendo-grid>\r\n  </div>\r\n</div>\r\n<app-start-flow #startFlowDialog></app-start-flow>"

/***/ }),

/***/ "./src/app/modules/task-start-flow/flow-list/flow-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowListComponent", function() { return FlowListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__start_flow_service__ = __webpack_require__("./src/app/modules/task-start-flow/start-flow.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__start_flow_start_flow_component__ = __webpack_require__("./src/app/modules/task-start-flow/start-flow/start-flow.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FlowListComponent = /** @class */ (function () {
    function FlowListComponent(startService) {
        this.startService = startService;
        this.selectableSettings = {
            enabled: true,
            mode: 'multiple'
        };
    }
    FlowListComponent.prototype.ngOnInit = function () {
        this.getFlowList();
    };
    FlowListComponent.prototype.startFlow = function () {
        var _this = this;
        if (!this.selectedItem) {
            alert('请选择要启动的流程！');
            return;
        }
        this.startService.fetchAssignFlow(this.selectedItem.key, this.selectedItem.firstDimension, this.selectedItem.secondDimension)
            .subscribe(function (result) {
            if (result.value.length < 1) {
                alert('没有能启动的流程定义，请先发布！');
            }
            _this.startProcessDlg.show(result.value[0].Id);
        });
    };
    /**
     * 列表选择
     * @param event 选中事件
     */
    FlowListComponent.prototype.onSelectionChange = function (event) {
        if (event.selected) {
            this.selectedItem = event.selectedRows[0].dataItem;
        }
        else {
            this.selectedItem = null;
        }
    };
    /**
     * 获取流程列表
     */
    FlowListComponent.prototype.getFlowList = function () {
        var _this = this;
        this.startService.fetchFlowList().subscribe(function (result) {
            _this.gridView = {
                data: result.value,
                total: result.value.length
            };
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__start_flow_start_flow_component__["StartFlowComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__start_flow_start_flow_component__["StartFlowComponent"])
    ], FlowListComponent.prototype, "startProcessDlg", void 0);
    FlowListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-flow-list',
            template: __webpack_require__("./src/app/modules/task-start-flow/flow-list/flow-list.component.html"),
            styles: [__webpack_require__("./src/app/modules/task-start-flow/flow-list/flow-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__start_flow_service__["StartFlowService"]])
    ], FlowListComponent);
    return FlowListComponent;
}());



/***/ }),

/***/ "./src/app/modules/task-start-flow/start-flow.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartFlowService", function() { return StartFlowService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gsp_sys_rtf_common__ = __webpack_require__("./node_modules/@gsp-sys/rtf-common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gsp_sys_rtf_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__gsp_sys_rtf_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_mock__ = __webpack_require__("./src/app/modules/task-start-flow/assets/mock.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StartFlowService = /** @class */ (function () {
    function StartFlowService(http) {
        this.http = http;
        if (!__WEBPACK_IMPORTED_MODULE_1__environments_environment__["environment"].production) {
            var host = 'http://localhost:5000';
        }
    }
    StartFlowService.prototype.fetchFlowList = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_4__assets_mock__["MOCKPROCESSLIST"]);
    };
    StartFlowService.prototype.fetchAssignFlow = function (key, firstDe, secondDe) {
        var url = "/api/runtime/wf/v1.0/ProcDefs/AssignedProcDefs(bizDefKey='" + key + "',dimension1='" + firstDe + "',dimension2='" + secondDe + "')";
        return this.http.get(url);
    };
    StartFlowService.prototype.fetchInputVariables = function (proDefId) {
        var url = "/api/runtime/wf/v1.0/ProcDefs/InputVariables(procDefId='" + proDefId + "')";
        return this.http.get(url);
    };
    /**
     * 启动流程
     * @param procDefId procDefId
     * @param procInsName procInsName
     * @param bizID bizId
     * @param description description
     * @param params params
     */
    StartFlowService.prototype.startWorkflow = function (procDefId, procInsName, bizID, description, params) {
        var url = '/api/runtime/wf/v1.0/StartProcess';
        var options = {
            startContext: {
                ProcessDefId: procDefId,
                ProcessInstanceName: procInsName,
                Description: description,
                BizInstId: bizID,
                LastProcessInstanceId: '',
                Params: params
            }
        };
        return this.http.post(url, options);
    };
    StartFlowService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__gsp_sys_rtf_common__["HttpService"]])
    ], StartFlowService);
    return StartFlowService;
}());



/***/ }),

/***/ "./src/app/modules/task-start-flow/start-flow/start-flow.component.css":
/***/ (function(module, exports) {

module.exports = "#description{\r\n    width: 100%;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/task-start-flow/start-flow/start-flow.component.html":
/***/ (function(module, exports) {

module.exports = "<kendo-window *ngIf=\"active\" (close)=\"cancel()\" title=\"启动流程\" [resizable]=\"false\" [minWidth]=\"250\" [width]=\"400\">\r\n  <div class=\"flex-auto d-flex \" style=\"position:relative; padding-top: 10px\">\r\n    <form class=\"k-form col-12\" style=\"max-width:800px;\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <label class=\"k-form-field\">\r\n            <span>流程实例名称\r\n              <span class=\"k-required\">*</span>\r\n            </span>\r\n            <input #procInsNameInput required class=\"k-textbox\" placeholder=\"请输入流程实例名称\" \r\n            (keyup.enter)=\"updateProcInsName(procInsNameInput.value)\"\r\n            (blur)=\"updateProcInsName(procInsNameInput.value)\" />\r\n            <div *ngIf=\"procInsNameInput.invalid && (procInsNameInput.dirty || procInsNameInput.touched)\" class=\"alert alert-danger\">\r\n              <div *ngIf=\"procInsNameInput.errors.required\">\r\n                流程实例名称不能为空。\r\n              </div>\r\n            </div>\r\n          </label>\r\n          <!-- <label class=\"k-form-field\">\r\n            <span>业务单据内码\r\n              <span class=\"k-required\">*</span>\r\n            </span>\r\n            <input #bizIdInput required class=\"k-textbox\" placeholder=\"请输入业务单据内码\" \r\n            (keyup.enter)=\"updateBizId(bizIdInput.value)\"\r\n            (blur)=\"updateBizId(bizIdInput.value)\" />\r\n            <div *ngIf=\"bizIdInput.invalid && (bizIdInput.dirty || bizIdInput.touched)\" class=\"alert alert-danger\">\r\n              <div *ngIf=\"bizIdInput.errors.required\">\r\n                业务单据内码不能为空。\r\n              </div>\r\n            </div>\r\n          </label> -->\r\n          \r\n          <label class=\"k-form-field\">\r\n            <span>流程备注\r\n            </span>\r\n            <textarea id=\"description\" #description kendoTextArea placeholder=\"请输入描述\"\r\n            (keyup.enter)=\"updateDescription(description.value)\"\r\n            (blur)=\"updateDescription(description.value)\"></textarea>\r\n            <!-- <input #description class=\"k-textbox\" \r\n            \" /> -->\r\n          </label>\r\n          <!-- <label class=\"k-form-field\">\r\n            <span>参数列表\r\n              <span class=\"k-required\">*</span>\r\n            </span>\r\n            <input #procInsSchema class=\"k-textbox\" placeholder=\"请输入流程实例Schema\" (keyup.enter)=\"updateProcInsSchema(procInsSchema.value)\"\r\n              (blur)=\"updateProcInsSchema(procInsSchema.value)\" />\r\n          </label> -->\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n  <div class=\"text-center\" style=\"padding-top: 10px;padding-bottom: 5px\">\r\n    <button class=\"btn btn-sm  mr-2  btn-primary \" style=\"font-size: 13px;line-height: 1.2;\" (click)=\"submit()\">确定</button>\r\n    <button class=\"btn btn-sm mr-2\" style=\"background:#e3e4e4 !important;font-size: 13px;line-height: 1.2;\" (click)=\"cancel()\">取消</button>\r\n  </div>\r\n</kendo-window>"

/***/ }),

/***/ "./src/app/modules/task-start-flow/start-flow/start-flow.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartFlowComponent", function() { return StartFlowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__start_flow_service__ = __webpack_require__("./src/app/modules/task-start-flow/start-flow.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StartFlowComponent = /** @class */ (function () {
    function StartFlowComponent(startService) {
        this.startService = startService;
        this.bizID = this.guid();
        this.active = false;
    }
    StartFlowComponent.prototype.ngOnInit = function () {
    };
    StartFlowComponent.prototype.updateProcInsName = function (value) {
        this.procInsName = value;
    };
    StartFlowComponent.prototype.updateDescription = function (value) {
        this.description = value;
    };
    StartFlowComponent.prototype.updateBizId = function (value) {
        this.bizID = value;
    };
    StartFlowComponent.prototype.guid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            // tslint:disable-next-line:no-bitwise
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    StartFlowComponent.prototype.show = function (procDefId) {
        if (this.active) {
            return;
        }
        this.active = true;
        this.procDefId = procDefId;
        this.startService.fetchInputVariables(this.procDefId).subscribe(function (re) {
            if (re) {
                // TODO 后续要支持传参的提交审批
            }
        });
    };
    StartFlowComponent.prototype.cancel = function () {
        this.active = false;
    };
    // 提交审批
    StartFlowComponent.prototype.submit = function () {
        var _this = this;
        this.startService.startWorkflow(this.procDefId, this.procInsName, this.bizID, this.description, [])
            .subscribe(function (re) {
            _this.active = false;
            alert('启动成功！');
        });
    };
    StartFlowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-start-flow',
            template: __webpack_require__("./src/app/modules/task-start-flow/start-flow/start-flow.component.html"),
            styles: [__webpack_require__("./src/app/modules/task-start-flow/start-flow/start-flow.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__start_flow_service__["StartFlowService"]])
    ], StartFlowComponent);
    return StartFlowComponent;
}());



/***/ }),

/***/ "./src/app/modules/task-start-flow/task-start-flow.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskStartFlowModule", function() { return TaskStartFlowModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__task_start_flow_routes__ = __webpack_require__("./src/app/modules/task-start-flow/task-start-flow.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__flow_list_flow_list_component__ = __webpack_require__("./src/app/modules/task-start-flow/flow-list/flow-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__start_flow_start_flow_component__ = __webpack_require__("./src/app/modules/task-start-flow/start-flow/start-flow.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__start_flow_service__ = __webpack_require__("./src/app/modules/task-start-flow/start-flow.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_buttons__ = __webpack_require__("./node_modules/@progress/kendo-angular-buttons/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__progress_kendo_angular_grid__ = __webpack_require__("./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__progress_kendo_angular_inputs__ = __webpack_require__("./node_modules/@progress/kendo-angular-inputs/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__progress_kendo_angular_label__ = __webpack_require__("./node_modules/@progress/kendo-angular-label/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__progress_kendo_angular_layout__ = __webpack_require__("./node_modules/@progress/kendo-angular-layout/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__progress_kendo_angular_dropdowns__ = __webpack_require__("./node_modules/@progress/kendo-angular-dropdowns/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__progress_kendo_angular_dialog__ = __webpack_require__("./node_modules/@progress/kendo-angular-dialog/dist/es/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var TaskStartFlowModule = /** @class */ (function () {
    function TaskStartFlowModule() {
    }
    TaskStartFlowModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__task_start_flow_routes__["TaskStartFlowRoots"],
                __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_buttons__["ButtonsModule"],
                __WEBPACK_IMPORTED_MODULE_8__progress_kendo_angular_grid__["GridModule"],
                __WEBPACK_IMPORTED_MODULE_9__progress_kendo_angular_inputs__["InputsModule"],
                __WEBPACK_IMPORTED_MODULE_10__progress_kendo_angular_label__["LabelModule"],
                __WEBPACK_IMPORTED_MODULE_11__progress_kendo_angular_layout__["LayoutModule"],
                __WEBPACK_IMPORTED_MODULE_12__progress_kendo_angular_dropdowns__["DropDownsModule"],
                __WEBPACK_IMPORTED_MODULE_13__progress_kendo_angular_dialog__["WindowModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__flow_list_flow_list_component__["FlowListComponent"],
                __WEBPACK_IMPORTED_MODULE_5__start_flow_start_flow_component__["StartFlowComponent"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__start_flow_service__["StartFlowService"]
            ]
        })
    ], TaskStartFlowModule);
    return TaskStartFlowModule;
}());

//# sourceMappingURL=task-start-flow.module.js.map

/***/ }),

/***/ "./src/app/modules/task-start-flow/task-start-flow.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskStartFlowRoots", function() { return TaskStartFlowRoots; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flow_list_flow_list_component__ = __webpack_require__("./src/app/modules/task-start-flow/flow-list/flow-list.component.ts");


var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__flow_list_flow_list_component__["FlowListComponent"] },
];
var TaskStartFlowRoots = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes);


/***/ })

},[],["angular","rtf","progress","rxjs"],["angular","rtf","progress","rxjs"]);
//# sourceMappingURL=task-start-flow.module.chunk.js.map