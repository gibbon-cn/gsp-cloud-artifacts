webpackJsonp(["task-had-done.module"],{

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

/***/ "./src/app/modules/task-had-done/had-list/had-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/task-had-done/had-list/had-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex mb-3\">\r\n  <div style=\"padding-top: 10px\">\r\n    <img src=\"/platform/runtime/wf/web/assets/img/task.png\" style=\"width:64px;height:64px;\" class=\"rounded\">\r\n    <h3 class=\"d-inline pl-3\">{{pageTitle}}</h3>\r\n  </div>\r\n\r\n  <!-- <app-task-list-toolbar *ngIf=\"this.taskList.comRef\" [bizTypeId]=\"_bizTypeId\" [enable]=\"!selectedWorkitem\"  (btnClickEvt)=\"onApproveClick($event)\"></app-task-list-toolbar> -->\r\n  <!-- <app-plugin-container class=\"d-flex mb-3\" [componentRef]=\"this.taskList.comRef\"></app-plugin-container> -->\r\n</div>\r\n\r\n<!-- 列表区域 -->\r\n<div class=\"d-flex flex-column h-200\">\r\n  <kendo-grid *ngIf=\"columns\" class=\"h-200\" [data]=\"gridView\" [resizable]=\"true\" [selectable]=\"selectableSettings\"\r\n    (selectionChange)=\"onSelectionChange($event)\" [pageable]=\"true\" [pageSize]=\"pageSize\" [skip]=\"skip\" (pageChange)=\"pageChange($event)\">\r\n    <kendo-grid-column *ngFor=\"let column of columns\" [field]=\"column.targetCode\" [title]=\"column.title\" [width]=\"column.width\"\r\n      [hidden]=\"!column.visiable\"></kendo-grid-column>\r\n  </kendo-grid>\r\n</div>\r\n<!-- Loading -->\r\n<!-- <div class=\"k-i-loading\" *ngIf=\"this.workspace.isLoading\"></div> -->\r\n<!-- <app-task-dialog (btnClickEvt)=\"onExcute($event)\"></app-task-dialog> -->"

/***/ }),

/***/ "./src/app/modules/task-had-done/had-list/had-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HadListComponent", function() { return HadListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gsp_sys_rtf_common__ = __webpack_require__("./node_modules/@gsp-sys/rtf-common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gsp_sys_rtf_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__gsp_sys_rtf_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__taskcenter_task_list_task_list_component__ = __webpack_require__("./src/app/modules/taskcenter/task-list/task-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__taskcenter_taskcenter_service__ = __webpack_require__("./src/app/modules/taskcenter/taskcenter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__taskcenter_taskList__ = __webpack_require__("./src/app/modules/taskcenter/taskList.ts");
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





var HadListComponent = /** @class */ (function (_super) {
    __extends(HadListComponent, _super);
    function HadListComponent(taskService, frameworkSvc, taskList) {
        var _this = _super.call(this, taskService, frameworkSvc, taskList) || this;
        _this.taskService = taskService;
        _this.frameworkSvc = frameworkSvc;
        _this.taskList = taskList;
        return _this;
    }
    // ngOnInit() {
    //   super.ngOnInit();
    // }
    /**
     * 获取绑定列表数据
     */
    HadListComponent.prototype.getToDoList = function () {
        var _this = this;
        var filter = '';
        if (this.bizTypeId) {
            filter = "CategoryId eq '" + this.bizTypeId + "' and State eq 5";
        }
        else {
            return;
        }
        this.taskService.fetchTaskList(this.skip, this.pageSize, filter)
            .subscribe(function (result) {
            // result.value.map((e) => this.taskService.toLowCase(e));
            _this.todoList = result.value;
            _this.gridView = {
                data: _this.todoList,
                total: result['@odata.count']
            };
        });
    };
    HadListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-had-list',
            template: __webpack_require__("./src/app/modules/task-had-done/had-list/had-list.component.html"),
            styles: [__webpack_require__("./src/app/modules/task-had-done/had-list/had-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__taskcenter_taskcenter_service__["TaskCenterService"],
            __WEBPACK_IMPORTED_MODULE_1__gsp_sys_rtf_common__["FrameworkService"],
            __WEBPACK_IMPORTED_MODULE_4__taskcenter_taskList__["TaskList"]])
    ], HadListComponent);
    return HadListComponent;
}(__WEBPACK_IMPORTED_MODULE_2__taskcenter_task_list_task_list_component__["TaskListComponent"]));



/***/ }),

/***/ "./src/app/modules/task-had-done/task-had-done.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskHadDoneModule", function() { return TaskHadDoneModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progress_kendo_angular_buttons__ = __webpack_require__("./node_modules/@progress/kendo-angular-buttons/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_grid__ = __webpack_require__("./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_treeview__ = __webpack_require__("./node_modules/@progress/kendo-angular-treeview/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_inputs__ = __webpack_require__("./node_modules/@progress/kendo-angular-inputs/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_label__ = __webpack_require__("./node_modules/@progress/kendo-angular-label/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_layout__ = __webpack_require__("./node_modules/@progress/kendo-angular-layout/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__progress_kendo_angular_dropdowns__ = __webpack_require__("./node_modules/@progress/kendo-angular-dropdowns/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__progress_kendo_angular_dialog__ = __webpack_require__("./node_modules/@progress/kendo-angular-dialog/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__taskcenter_index__ = __webpack_require__("./src/app/modules/taskcenter/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__task_had_done_task_had_done_component__ = __webpack_require__("./src/app/modules/task-had-done/task-had-done/task-had-done.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__task_had_done_routes__ = __webpack_require__("./src/app/modules/task-had-done/task-had-done.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__had_list_had_list_component__ = __webpack_require__("./src/app/modules/task-had-done/had-list/had-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__task_had_nav_task_had_nav_component__ = __webpack_require__("./src/app/modules/task-had-done/task-had-nav/task-had-nav.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var TaskHadDoneModule = /** @class */ (function () {
    function TaskHadDoneModule() {
    }
    TaskHadDoneModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__progress_kendo_angular_buttons__["ButtonsModule"],
                __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_grid__["GridModule"],
                __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_inputs__["InputsModule"],
                __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_label__["LabelModule"],
                __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_layout__["LayoutModule"],
                __WEBPACK_IMPORTED_MODULE_9__progress_kendo_angular_dialog__["WindowModule"],
                __WEBPACK_IMPORTED_MODULE_8__progress_kendo_angular_dropdowns__["DropDownsModule"],
                __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_treeview__["TreeViewModule"],
                __WEBPACK_IMPORTED_MODULE_10__taskcenter_index__["TaskcenterModule"],
                __WEBPACK_IMPORTED_MODULE_12__task_had_done_routes__["TaskHadDoneRoots"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__task_had_done_task_had_done_component__["TaskHadDoneComponent"],
                __WEBPACK_IMPORTED_MODULE_13__had_list_had_list_component__["HadListComponent"],
                __WEBPACK_IMPORTED_MODULE_14__task_had_nav_task_had_nav_component__["TaskHadNavComponent"]
            ],
            entryComponents: [],
            providers: []
        })
    ], TaskHadDoneModule);
    return TaskHadDoneModule;
}());

//# sourceMappingURL=task-had-done.module.js.map

/***/ }),

/***/ "./src/app/modules/task-had-done/task-had-done.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskHadDoneRoots", function() { return TaskHadDoneRoots; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__task_had_done_task_had_done_component__ = __webpack_require__("./src/app/modules/task-had-done/task-had-done/task-had-done.component.ts");


var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__task_had_done_task_had_done_component__["TaskHadDoneComponent"] },
];
var TaskHadDoneRoots = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/modules/task-had-done/task-had-done/task-had-done.component.css":
/***/ (function(module, exports) {

module.exports = ".sidebar {\r\n    padding: 0;\r\n    -webkit-box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\r\n            box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\r\n}"

/***/ }),

/***/ "./src/app/modules/task-had-done/task-had-done/task-had-done.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid d-flex flex-row g-main\">\r\n  <div class=\"d-flex flex-md-nowrap row flex-fill\">\r\n    <div class=\"col-md-3 d-flex d-none d-md-block sidebar\">\r\n      \r\n      <app-task-had-nav (selectedBizTypeIdChange)=\"onSelectedBizTypeIdChange($event)\"></app-task-had-nav>\r\n    </div>\r\n    <div class=\"col-md-9 d-flex\">\r\n      <div class=\"container-fluid d-flex h-100 flex-column flex-fill\">\r\n        <div>\r\n          <app-had-list [bizTypeId]=\"selectedBizTypeId\" [pageTitle]=\"selectNodeName\"></app-had-list>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/task-had-done/task-had-done/task-had-done.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskHadDoneComponent", function() { return TaskHadDoneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__taskcenter_task_main_task_main_component__ = __webpack_require__("./src/app/modules/taskcenter/task-main/task-main.component.ts");
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


var TaskHadDoneComponent = /** @class */ (function (_super) {
    __extends(TaskHadDoneComponent, _super);
    // selectedBizTypeId: string;
    // selectNodeName: string;
    // showFlowList = false;
    function TaskHadDoneComponent(compiler, injector) {
        return _super.call(this, compiler, injector) || this;
    }
    TaskHadDoneComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-task-had-done',
            template: __webpack_require__("./src/app/modules/task-had-done/task-had-done/task-had-done.component.html"),
            styles: [__webpack_require__("./src/app/modules/task-had-done/task-had-done/task-had-done.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Compiler"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], TaskHadDoneComponent);
    return TaskHadDoneComponent;
}(__WEBPACK_IMPORTED_MODULE_1__taskcenter_task_main_task_main_component__["TaskMainComponent"]));



/***/ }),

/***/ "./src/app/modules/task-had-done/task-had-nav/task-had-nav.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/task-had-done/task-had-nav/task-had-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-sticky\">\r\n  <kendo-treeview [nodes]=\"navSour\" textField=\"text\" [hasChildren]=\"hasChildren\" [children]=\"fetchChildren\"\r\n    kendoTreeViewExpandable kendoTreeViewHierarchyBinding kendoTreeViewSelectable [expandedKeys]=\"expandedKeys\"\r\n    [(selectedKeys)]=\"selectedKeys\" (selectionChange)=\"handleSelection($event)\">\r\n    <ng-template kendoTreeViewNodeTemplate let-dataItem>\r\n      {{dataItem.text}}<span *ngIf=\"!!dataItem.count\">({{dataItem.count}})</span>\r\n    </ng-template>\r\n  </kendo-treeview>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/task-had-done/task-had-nav/task-had-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskHadNavComponent", function() { return TaskHadNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__taskcenter_task_nav_task_nav_component__ = __webpack_require__("./src/app/modules/taskcenter/task-nav/task-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__taskcenter_taskcenter_service__ = __webpack_require__("./src/app/modules/taskcenter/taskcenter.service.ts");
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



var TaskHadNavComponent = /** @class */ (function (_super) {
    __extends(TaskHadNavComponent, _super);
    function TaskHadNavComponent(taskService) {
        var _this = _super.call(this, taskService) || this;
        _this.taskService = taskService;
        return _this;
    }
    TaskHadNavComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    TaskHadNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-task-had-nav',
            template: __webpack_require__("./src/app/modules/task-had-done/task-had-nav/task-had-nav.component.html"),
            styles: [__webpack_require__("./src/app/modules/task-had-done/task-had-nav/task-had-nav.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__taskcenter_taskcenter_service__["TaskCenterService"]])
    ], TaskHadNavComponent);
    return TaskHadNavComponent;
}(__WEBPACK_IMPORTED_MODULE_1__taskcenter_task_nav_task_nav_component__["TaskNavComponent"]));



/***/ }),

/***/ "./src/app/modules/taskcenter/eventbus/event-bus-proxy.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventBusProxy", function() { return EventBusProxy; });
var EventBusProxy = /** @class */ (function () {
    function EventBusProxy(eventBus, hostType, eventTokenValueProvider) {
        this.eventBus = eventBus;
        this.hostType = hostType;
        this.eventTokenValueProvider = eventTokenValueProvider;
    }
    EventBusProxy.prototype.post = function (eventName, data) {
        this.eventBus.post(this.hostType, this.eventTokenValueProvider(), eventName, data);
    };
    return EventBusProxy;
}());



/***/ }),

/***/ "./src/app/modules/taskcenter/eventbus/event-bus.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventBus", function() { return EventBus; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event_bus_proxy__ = __webpack_require__("./src/app/modules/taskcenter/eventbus/event-bus-proxy.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_pipe__ = __webpack_require__("./src/app/modules/taskcenter/eventbus/event-pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventBus = /** @class */ (function () {
    function EventBus() {
        this.proxyMap = new Map();
        this.eventMap = new Map();
    }
    EventBus.prototype.getProxy = function (ownerType, eventTokenValueProvider) {
        var ownerName = ownerType.constructor.name;
        if (!this.proxyMap.has(ownerName)) {
            this.proxyMap.set(ownerName, new __WEBPACK_IMPORTED_MODULE_1__event_bus_proxy__["EventBusProxy"](this, ownerType, eventTokenValueProvider));
        }
        return this.proxyMap.get(ownerName);
    };
    // 发送事件，通知订阅者接收消息。
    EventBus.prototype.post = function (emitterType, tokenValue, eventName, eventArgs) {
        var eventPipeList = this.eventMap.get(eventName);
        if (!eventPipeList) {
            return;
        }
        for (var _i = 0, eventPipeList_1 = eventPipeList; _i < eventPipeList_1.length; _i++) {
            var eventPipe = eventPipeList_1[_i];
            if (eventPipe.matchEmitterToken(emitterType.name, tokenValue)) {
                eventPipe.post(eventArgs);
                eventPipe.unSubscribeForOnce();
            }
        }
    };
    // 订阅事件
    EventBus.prototype.on = function (target, tokenValue, eventName, caller, handler) {
        return this.getEventPipe(eventName, target, tokenValue).subscribe(handler, caller);
    };
    // 订阅一次。接收到一次消息之后自动取消订阅
    EventBus.prototype.once = function (target, tokenValue, eventName, caller, handler) {
        return this.getEventPipe(eventName, target, tokenValue).subscribeOnce(handler, caller);
    };
    EventBus.prototype.getEventPipe = function (eventName, target, tokenValue) {
        var eventPipeList = this.eventMap.get(eventName);
        if (!eventPipeList) {
            eventPipeList = new Array();
            this.eventMap.set(eventName, eventPipeList);
        }
        var eventPipe = eventPipeList.find(function (item) { return item.examByTargetToken(target, tokenValue); });
        if (!eventPipe) {
            eventPipe = new __WEBPACK_IMPORTED_MODULE_2__event_pipe__["EventPipe"](eventName, tokenValue, target, eventPipeList);
        }
        return eventPipe;
    };
    EventBus = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], EventBus);
    return EventBus;
}());



/***/ }),

/***/ "./src/app/modules/taskcenter/eventbus/event-pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPipe", function() { return EventPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);

var EventPipe = /** @class */ (function () {
    function EventPipe(name, tokenValue, emitter, parentEventPipeList) {
        this.name = name;
        this.tokenValue = tokenValue;
        this.emitter = emitter;
        this.parentEventPipeList = parentEventPipeList;
        this.eventSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        this.subscriptionMap = new Map();
        this.onceSubscriptionMap = new Map();
        if (this.parentEventPipeList) {
            this.parentEventPipeList.push(this);
        }
    }
    EventPipe.prototype.post = function (data) {
        this.eventSubject.next(data);
    };
    EventPipe.prototype.subscribe = function (eventHandler, caller) {
        var subscription = this.eventSubject.subscribe(function (value) { return eventHandler.call(caller, value); });
        this.subscriptionMap.set(caller, subscription);
        return this;
    };
    EventPipe.prototype.subscribeOnce = function (eventHandler, caller) {
        var subscription = this.eventSubject.subscribe(function (value) { return eventHandler.call(caller, value); });
        this.onceSubscriptionMap.set(caller, subscription);
        return this;
    };
    EventPipe.prototype.unSubscribe = function (subscriber) {
        var subscription = this.subscriptionMap.get(subscriber);
        if (subscription) {
            subscription.unsubscribe();
            subscription = null;
            this.subscriptionMap.delete(subscriber);
        }
        else {
            subscription = this.onceSubscriptionMap.get(subscriber);
            if (subscription) {
                subscription.unsubscribe();
                subscription = null;
                this.onceSubscriptionMap.delete(subscriber);
            }
        }
    };
    // 注销使用once方法注册的订阅。
    EventPipe.prototype.unSubscribeForOnce = function () {
        this.onceSubscriptionMap.values()
            .next(function (subscription) { return subscription.unsubscribe(); });
        this.onceSubscriptionMap.clear();
    };
    EventPipe.prototype.matchEmitterToken = function (emitter, tokenValue) {
        if (this.emitter && emitter && this.emitter !== emitter) {
            return false;
        }
        if (this.tokenValue && tokenValue && this.tokenValue !== tokenValue) {
            return false;
        }
        return true;
    };
    EventPipe.prototype.examByTargetToken = function (target, tokenValue) {
        if ((!this.emitter && !!target) || (!!this.emitter && this.emitter.constructor.name !== target)) {
            return false;
        }
        if (this.tokenValue !== tokenValue) {
            return false;
        }
        return true;
    };
    EventPipe.prototype.dispose = function (subscriber) {
        var _this = this;
        this.unSubscribe(subscriber);
        if (this.subscriptionMap.size === 0 && this.parentEventPipeList) {
            var location_1 = this.parentEventPipeList.findIndex(function (item) { return item === _this; });
            if (location_1 !== -1) {
                this.parentEventPipeList.splice(location_1, 1);
            }
        }
    };
    return EventPipe;
}());



/***/ }),

/***/ "./src/app/modules/taskcenter/eventbus/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event_bus__ = __webpack_require__("./src/app/modules/taskcenter/eventbus/event-bus.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "EventBus", function() { return __WEBPACK_IMPORTED_MODULE_0__event_bus__["EventBus"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event_bus_proxy__ = __webpack_require__("./src/app/modules/taskcenter/eventbus/event-bus-proxy.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_pipe__ = __webpack_require__("./src/app/modules/taskcenter/eventbus/event-pipe.ts");
/* unused harmony namespace reexport */





/***/ }),

/***/ "./src/app/modules/taskcenter/form-query/form-query.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/taskcenter/form-query/form-query.component.html":
/***/ (function(module, exports) {

module.exports = "<div _ngcontent-c23=\"\" class=\"pt-2 mb-2\">\n  <div _ngcontent-c23=\"\" class=\"row pt-2 mb-2\">\n    <div _ngcontent-c23=\"\" class=\"col-sm-12 col-md-3 pt-2\">\n      <h1 _ngcontent-c23=\"\" class=\"h4 d-inline-block\">\n        <span _ngcontent-c23=\"\" class=\"g-pointer\">列表</span>/订单</h1>\n      <p _ngcontent-c23=\"\" class=\"text-muted h6 contract-subtitle\"></p>\n    </div>\n    <div _ngcontent-c23=\"\" class=\"col-sm-12 col-md-9\">\n      <div _ngcontent-c23=\"\" class=\"pr-2 text-right\">\n        <div _ngcontent-c23=\"\" class=\"btn-group mr-1\">\n          <button _ngcontent-c23=\"\" class=\"btn btn-sm btn-primary\" type=\"button\">办理 </button>\n          <!-- <button _ngcontent-c23=\"\" class=\"btn btn-primary btn-sm dropdown-toggle dropdown-toggle-split\" type=\"button\"></button>\n          <div _ngcontent-c23=\"\" class=\"dropdown-menu\" style=\"right:0;left:auto;\" ng-reflect-klass=\"dropdown-menu\" ng-reflect-ng-class=\"[object Object]\">\n            <a _ngcontent-c23=\"\" class=\"dropdown-item\">制单</a>\n            <a _ngcontent-c23=\"\" class=\"dropdown-item\">参照</a>\n          </div> -->\n        </div>\n        <!-- <div _ngcontent-c23=\"\" class=\"btn-group mr-1\">\n          <button _ngcontent-c23=\"\" class=\"btn btn-sm \" style=\"background:#e3e4e4!important\" type=\"button\">\n            编辑</button>\n          <button _ngcontent-c23=\"\" class=\"btn  btn-sm dropdown-toggle dropdown-toggle-split\" style=\"background:#e3e4e4!important\"\n            type=\"button\"></button>\n          <div _ngcontent-c23=\"\" class=\"dropdown-menu\" style=\"right:0;left:auto;\" ng-reflect-klass=\"dropdown-menu\" ng-reflect-ng-class=\"[object Object]\">\n            <a _ngcontent-c23=\"\" class=\"dropdown-item\">编辑</a>\n            <a _ngcontent-c23=\"\" class=\"dropdown-item\">编辑销售信息</a>\n            <a _ngcontent-c23=\"\" class=\"dropdown-item\">保存</a>\n            <a _ngcontent-c23=\"\" class=\"dropdown-item\">删除</a>\n            <a _ngcontent-c23=\"\" class=\"dropdown-item\">取消</a>\n            <div _ngcontent-c23=\"\" class=\"dropdown-divider\"></div>\n            <a _ngcontent-c23=\"\" class=\"dropdown-item\">提交审批</a>\n            <a _ngcontent-c23=\"\" class=\"dropdown-item\">取消提交</a>\n            <a _ngcontent-c23=\"\" class=\"dropdown-item\">取消审批</a>\n            <a _ngcontent-c23=\"\" class=\"dropdown-item\">审批日志</a>\n          </div>\n        </div> -->\n        <!-- <div _ngcontent-c23=\"\" class=\"btn-group mr-1\">\n          <button _ngcontent-c23=\"\" class=\"btn btn-sm\">交货安排</button>\n          <button _ngcontent-c23=\"\" class=\"btn btn-sm  dropdown-toggle dropdown-toggle-split\" type=\"button\"></button>\n          <div _ngcontent-c23=\"\" class=\"dropdown-menu gw-menu-dropdown\" style=\"right:0;left:auto;\" ng-reflect-klass=\"dropdown-menu gw-menu-dropdown\"\n            ng-reflect-ng-class=\"[object Object]\">\n            <a _ngcontent-c23=\"\" class=\"dropdown-item\">交货安排</a>\n            <a _ngcontent-c23=\"\" class=\"dropdown-item\">调整发货组织</a>\n            <a _ngcontent-c23=\"\" class=\"dropdown-item\">交货计划</a>\n            <a _ngcontent-c23=\"\" class=\"dropdown-item\">订单预留</a>\n            <div _ngcontent-c23=\"\" class=\"dropdown-divider\"></div>\n            <a _ngcontent-c23=\"\" class=\"dropdown-item\">生成交货单</a>\n            <a _ngcontent-c23=\"\" class=\"dropdown-item\">生成出入库单</a>\n            <div _ngcontent-c23=\"\" class=\"dropdown-divider\"></div>\n            <a _ngcontent-c23=\"\" class=\"dropdown-item\">调整工厂</a>\n            <a _ngcontent-c23=\"\" class=\"dropdown-item\">生成生产计划</a>\n            <a _ngcontent-c23=\"\" class=\"dropdown-item\">生成生产订单</a>\n            <div _ngcontent-c23=\"\" class=\"dropdown-divider\"></div>\n            <a _ngcontent-c23=\"\" class=\"dropdown-item\">生成物料需求计划</a>\n            <a _ngcontent-c23=\"\" class=\"dropdown-item\">生成委外申请</a>\n          </div>\n        </div>\n        <div _ngcontent-c23=\"\" class=\"btn-group mr-1\">\n          <button _ngcontent-c23=\"\" class=\"btn btn-sm\">调整结算组织</button>\n          <button _ngcontent-c23=\"\" class=\"btn btn-sm  dropdown-toggle dropdown-toggle-split\" type=\"button\"></button>\n          <div _ngcontent-c23=\"\" class=\"dropdown-menu gw-menu-dropdown\" style=\"right:0;left:auto;\" ng-reflect-klass=\"dropdown-menu gw-menu-dropdown\"\n            ng-reflect-ng-class=\"[object Object]\">\n            <a _ngcontent-c23=\"\" class=\"dropdown-item\">调整结算组织</a>\n            <a _ngcontent-c23=\"\" class=\"dropdown-item\">维护收款账期</a>\n            <a _ngcontent-c23=\"\" class=\"dropdown-item\">生成开票申请</a>\n            <a _ngcontent-c23=\"\" class=\"dropdown-item\">生成销售发票</a>\n            <a _ngcontent-c23=\"\" class=\"dropdown-item\">订单预留</a>\n            <div _ngcontent-c23=\"\" class=\"dropdown-divider\"></div>\n            <a _ngcontent-c23=\"\" class=\"dropdown-item\">生成收款通知</a>\n            <a _ngcontent-c23=\"\" class=\"dropdown-item\">生成收款单</a>\n            <a _ngcontent-c23=\"\" class=\"dropdown-item\">核销收款单</a>\n          </div>\n        </div>\n        <button _ngcontent-c23=\"\" class=\"btn btn-sm  mr-1\" style=\"background:#e3e4e4!important\">关闭</button> -->\n      </div>\n      <!--bindings={\n        \"ng-reflect-ng-if\": \"[object Object]\"\n      }-->\n      <div _ngcontent-c23=\"\" class=\"row pt-2 ng-star-inserted\">\n        <div _ngcontent-c23=\"\" class=\"col-sm-7 col-md-4 text-truncate\">\n          <p _ngcontent-c23=\"\" class=\"pb-2 m-0\">\n            <span _ngcontent-c23=\"\" class=\"text-muted mr-2\">客户</span>大润发超市</p>\n          <p _ngcontent-c23=\"\" class=\"pb-2 m-0\">\n            <span _ngcontent-c23=\"\" class=\"text-muted mr-2\">联系电话</span>15066151234</p>\n          <p _ngcontent-c23=\"\" class=\"pb-2 m-0\">\n            <span _ngcontent-c23=\"\" class=\"text-muted mr-2\">项目</span>XXXXX</p>\n        </div>\n        <div _ngcontent-c23=\"\" class=\"col-md-4 d-none d-md-block\">\n          <p _ngcontent-c23=\"\" class=\"pb-2 m-0\">\n            <span _ngcontent-c23=\"\" class=\"text-muted mr-2\">客户采购单号</span>XXXX</p>\n          <p _ngcontent-c23=\"\" class=\"pb-2 m-0\">\n            <span _ngcontent-c23=\"\" class=\"text-muted mr-2\">信用证号</span>FB0004</p>\n          <p _ngcontent-c23=\"\" class=\"pb-2 m-0\">\n            <span _ngcontent-c23=\"\" class=\"text-muted mr-2\">销售渠道</span>XXXXX</p>\n        </div>\n        <div _ngcontent-c23=\"\" class=\"col-sm-5 col-md-2 text-center\">\n          <p _ngcontent-c23=\"\" class=\"h5 pt-2 color-primary\">3560</p>\n          <p _ngcontent-c23=\"\" class=\"pb-2 m-0\">\n            <span _ngcontent-c23=\"\" class=\"text-muted\">收现款金额</span>\n          </p>\n        </div>\n        <div _ngcontent-c23=\"\" class=\"col-md-2 text-center d-none d-lg-block text-center\">\n          <p _ngcontent-c23=\"\" class=\"h5 pt-2 color-primary\">345200</p>\n          <p _ngcontent-c23=\"\" class=\"pb-2 m-0\">\n            <span _ngcontent-c23=\"\" class=\"text-muted\">销售总额</span>\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div _ngcontent-c23=\"\" class=\"flex-auto\" id=\"attachmentParent\" style=\"overflow-y:auto;\">\n  <kendo-tabstrip _ngcontent-c23=\"\" class=\"ng-tns-c24-0 k-widget k-tabstrip k-floatwrap k-tabstrip-top k-header\" dir=\"ltr\">\n    <ul class=\"k-reset k-tabstrip-items\" role=\"tablist\" tabindex=\"0\">\n      <!--bindings={\n        \"ng-reflect-ng-for-of\": \"[object Object],[object Object\"\n      }-->\n      <li role=\"tab\" class=\"ng-tns-c24-0 k-item k-state-default k-state-active ng-star-inserted\" id=\"k-tabstrip-tab-0\" aria-selected=\"true\">\n        <span class=\"k-link\">单据信息\n          <!--bindings={\n        \"ng-reflect-ng-template-outlet\": null\n      }-->\n        </span>\n      </li>\n      <li role=\"tab\" class=\"ng-tns-c24-0 k-item k-state-default ng-star-inserted\" id=\"k-tabstrip-tab-1\">\n        <span class=\"k-link\">销售信息\n          <!--bindings={\n        \"ng-reflect-ng-template-outlet\": null\n      }-->\n        </span>\n      </li>\n      <li role=\"tab\" class=\"ng-tns-c24-0 k-item k-state-default ng-star-inserted\" id=\"k-tabstrip-tab-2\">\n        <span class=\"k-link\">附件管理\n          <!--bindings={\n        \"ng-reflect-ng-template-outlet\": null\n      }-->\n        </span>\n      </li>\n      <li role=\"tab\" class=\"ng-tns-c24-0 k-item k-state-default ng-star-inserted\" id=\"k-tabstrip-tab-3\">\n        <span class=\"k-link\">历史记录\n          <!--bindings={\n        \"ng-reflect-ng-template-outlet\": null\n      }-->\n        </span>\n      </li>\n    </ul>\n    <!--bindings={\n        \"ng-reflect-ng-for-of\": \"[object Object],[object Object\"\n      }-->\n    <!--bindings={\n        \"ng-reflect-ng-if\": \"true\"\n      }-->\n    <div role=\"tabpanel\" class=\"ng-tns-c24-0 k-content k-state-active ng-trigger ng-trigger-state ng-star-inserted\" ng-reflect-ng-class=\"k-content k-state-active\"\n      id=\"k-tabstrip-tabpanel-0\" aria-hidden=\"false\" aria-expanded=\"true\" aria-labelledby=\"k-tabstrip-tab-0\">\n      <!--bindings={\n        \"ng-reflect-ng-template-outlet\": \"[object Object]\"\n      }-->\n      <!--bindings={\n        \"ng-reflect-ng-if\": \"[object Object]\"\n      }-->\n      <form _ngcontent-c23=\"\" class=\"k-form p-2 ng-untouched ng-pristine ng-valid ng-star-inserted\" novalidate=\"\">\n        <div _ngcontent-c23=\"\" class=\"row\">\n          <div _ngcontent-c23=\"\" class=\"col-sm-12 col-md-6 pb-1\">\n            <fieldset _ngcontent-c23=\"\">\n              <legend _ngcontent-c23=\"\">客户相关</legend>\n              <label _ngcontent-c23=\"\" class=\"k-form-field\">\n                <span _ngcontent-c23=\"\">客户 </span>\n                <div _ngcontent-c23=\"\" class=\"d-flex\">\n                  <input _ngcontent-c23=\"\" class=\"k-textbox w-100 gw-form-control-plaintext ng-untouched ng-pristine ng-valid\" name=\"kh\" ng-reflect-klass=\"k-textbox w-100\"\n                    ng-reflect-ng-class=\"[object Object]\" ng-reflect-name=\"kh\" ng-reflect-model=\"大润发超市\" readonly=\"\">\n                  <button _ngcontent-c23=\"\" class=\"k-button k-bare d-none\" type=\"button\" ng-reflect-klass=\"k-button k-bare\" ng-reflect-ng-class=\"[object Object]\">\n                    <i _ngcontent-c23=\"\" class=\"material-icons align-middle\" style=\" font-size: 18px;\">featured_play_list</i>\n                  </button>\n                </div>\n              </label>\n              <label _ngcontent-c23=\"\" class=\"k-form-field\">\n                <span _ngcontent-c23=\"\">客户别名\n                  <span _ngcontent-c23=\"\" class=\"k-required\">*</span>\n                </span>\n                <input _ngcontent-c23=\"\" class=\"k-textbox w-100 gw-form-control-plaintext ng-untouched ng-pristine ng-valid\" name=\"khbm\"\n                  placeholder=\"\" ng-reflect-klass=\"k-textbox w-100\" ng-reflect-ng-class=\"[object Object]\" ng-reflect-name=\"khbm\"\n                  ng-reflect-model=\"大润发\" readonly=\"\">\n\n              </label>\n              <label _ngcontent-c23=\"\" class=\"k-form-field\">\n                <span _ngcontent-c23=\"\">联系电话\n                  <span _ngcontent-c23=\"\" class=\"k-required\">*</span>\n                </span>\n                <input _ngcontent-c23=\"\" class=\"k-textbox w-100 gw-form-control-plaintext ng-untouched ng-pristine ng-valid\" name=\"lxdh\"\n                  placeholder=\"\" ng-reflect-klass=\"k-textbox w-100\" ng-reflect-ng-class=\"[object Object]\" ng-reflect-name=\"lxdh\"\n                  ng-reflect-model=\"15066151234\" readonly=\"\">\n              </label>\n              <label _ngcontent-c23=\"\" class=\"k-form-field\">\n                <span _ngcontent-c23=\"\">客户采购单号 </span>\n                <input _ngcontent-c23=\"\" class=\"k-textbox w-100 gw-form-control-plaintext ng-untouched ng-pristine ng-valid\" name=\"khcgdh\"\n                  placeholder=\"\" ng-reflect-klass=\"k-textbox w-100\" ng-reflect-ng-class=\"[object Object]\" ng-reflect-name=\"khcgdh\"\n                  ng-reflect-model=\"XXXX\" readonly=\"\">\n              </label>\n              <label _ngcontent-c23=\"\" class=\"k-form-field\">\n                <span _ngcontent-c23=\"\">部门 </span>\n                <div _ngcontent-c23=\"\" class=\"d-flex\">\n                  <input _ngcontent-c23=\"\" class=\"k-textbox py-1 px-2 w-100 gw-form-control-plaintext ng-untouched ng-pristine ng-valid\" name=\"BM\"\n                    ng-reflect-klass=\"k-textbox py-1 px-2 w-100\" ng-reflect-ng-class=\"[object Object]\" ng-reflect-name=\"BM\"\n                    ng-reflect-model=\"食品零售部\" readonly=\"\">\n                  <button _ngcontent-c23=\"\" class=\"k-button k-bare d-none\" type=\"button\" ng-reflect-klass=\"k-button k-bare\" ng-reflect-ng-class=\"[object Object]\">\n                    <i _ngcontent-c23=\"\" class=\"material-icons align-middle\" style=\" font-size: 18px;\">filter_none</i>\n                  </button>\n                </div>\n              </label>\n              <label _ngcontent-c23=\"\" class=\"k-form-field\">\n                <span _ngcontent-c23=\"\">业务员 </span>\n                <div _ngcontent-c23=\"\" class=\"d-flex\">\n                  <input _ngcontent-c23=\"\" class=\"k-textbox py-1 px-2 w-100 gw-form-control-plaintext ng-untouched ng-pristine ng-valid\" name=\"YWY\"\n                    ng-reflect-klass=\"k-textbox py-1 px-2 w-100\" ng-reflect-ng-class=\"[object Object]\" ng-reflect-name=\"YWY\"\n                    ng-reflect-model=\"聂风\" readonly=\"\">\n                  <button _ngcontent-c23=\"\" class=\"k-button k-bare d-none\" type=\"button\" ng-reflect-klass=\"k-button k-bare\" ng-reflect-ng-class=\"[object Object]\">\n                    <i _ngcontent-c23=\"\" class=\"material-icons align-middle\" style=\" font-size: 18px;\">filter_none</i>\n                  </button>\n                </div>\n              </label>\n            </fieldset>\n          </div>\n          <div _ngcontent-c23=\"\" class=\"col-sm-12 col-md-6 pb-1\">\n            <fieldset _ngcontent-c23=\"\">\n              <legend _ngcontent-c23=\"\">单据相关</legend>\n              <label _ngcontent-c23=\"\" class=\"k-form-field\">\n                <span _ngcontent-c23=\"\">单据编号 </span>\n                <input _ngcontent-c23=\"\" class=\"k-textbox py-1 px-2 w-100 gw-form-control-plaintext ng-untouched ng-pristine ng-valid\" name=\"DJBH\"\n                  ng-reflect-klass=\"k-textbox py-1 px-2 w-100\" ng-reflect-ng-class=\"[object Object]\" ng-reflect-name=\"DJBH\"\n                  ng-reflect-model=\"SQ201805010002\" readonly=\"\">\n              </label>\n              <label _ngcontent-c23=\"\" class=\"k-form-field\">\n                <span _ngcontent-c23=\"\">业务类型 </span>\n                <div _ngcontent-c23=\"\" class=\"d-flex\">\n                  <input _ngcontent-c23=\"\" class=\"k-textbox py-1 px-2 w-100 gw-form-control-plaintext ng-untouched ng-pristine ng-valid\" name=\"YWLX\"\n                    ng-reflect-klass=\"k-textbox py-1 px-2 w-100\" ng-reflect-ng-class=\"[object Object]\" ng-reflect-name=\"YWLX\"\n                    ng-reflect-model=\"XXXXX\" readonly=\"\">\n                  <button _ngcontent-c23=\"\" class=\"k-button k-bare d-none\" type=\"button\" ng-reflect-klass=\"k-button k-bare\" ng-reflect-ng-class=\"[object Object]\">\n                    <i _ngcontent-c23=\"\" class=\"material-icons align-middle\" style=\" font-size: 18px;\">filter_none</i>\n                  </button>\n                </div>\n              </label>\n              <label _ngcontent-c23=\"\" class=\"k-form-field\">\n                <span _ngcontent-c23=\"\">业务日期 </span>\n                <input _ngcontent-c23=\"\" class=\"k-textbox py-1 px-2 gw-form-control-plaintext ng-untouched ng-pristine ng-valid\" name=\"YWRQ\"\n                  ng-reflect-klass=\"k-textbox py-1 px-2\" ng-reflect-ng-class=\"[object Object]\" ng-reflect-name=\"YWRQ\" ng-reflect-model=\"2018-05-06\"\n                  readonly=\"\">\n              </label>\n              <label _ngcontent-c23=\"\" class=\"k-form-field\">\n                <span _ngcontent-c23=\"\">币种 </span>\n                <input _ngcontent-c23=\"\" class=\"k-textbox py-1 px-2 gw-form-control-plaintext ng-untouched ng-pristine ng-valid\" name=\"BZ\"\n                  ng-reflect-klass=\"k-textbox py-1 px-2\" ng-reflect-ng-class=\"[object Object]\" ng-reflect-name=\"BZ\" ng-reflect-model=\"人民币\"\n                  readonly=\"\">\n              </label>\n              <label _ngcontent-c23=\"\" class=\"k-form-field\">\n                <span _ngcontent-c23=\"\">汇率</span>\n                <kendo-numerictextbox _ngcontent-c23=\"\" name=\"HL\" class=\"form-control form-control-sm gw-form-control-plaintext k-widget k-numerictextbox ng-untouched ng-pristine ng-valid\"\n                  ng-reflect-klass=\"form-control form-control-sm\" ng-reflect-ng-class=\"[object Object]\" ng-reflect-name=\"HL\"\n                  dir=\"ltr\">\n                  <span class=\"k-numeric-wrap\">\n                    <input autocomplete=\"off\" autocorrect=\"off\" class=\"k-input k-formatted-value\" role=\"spinbutton\" ng-reflect-events=\"[object Object]\"\n                      id=\"61dd1030-1593-ab96-2362-b57cdf1c4a7b\" title=\"\" tabindex=\"0\">\n\n                    <span class=\"k-select ng-star-inserted\" ng-reflect-events=\"[object Object]\">\n                      <span class=\"k-link k-link-increase\" aria-label=\"Increase value\" title=\"Increase value\">\n                        <span class=\"k-icon k-i-arrow-n\"></span>\n                      </span>\n                      <span class=\"k-link k-link-decrease\" aria-label=\"Decrease value\" title=\"Decrease value\">\n                        <span class=\"k-icon k-i-arrow-s\"></span>\n                      </span>\n                    </span>\n                  </span>\n                </kendo-numerictextbox>\n              </label>\n            </fieldset>\n          </div>\n\n        </div>\n\n      </form>\n\n    </div>\n  </kendo-tabstrip>\n\n  <kendo-tabstrip _ngcontent-c23=\"\" class=\"ng-tns-c24-2 k-widget k-tabstrip k-floatwrap k-tabstrip-top k-header ng-star-inserted\"\n    dir=\"ltr\">\n    <ul class=\"k-reset k-tabstrip-items\" role=\"tablist\" tabindex=\"0\">\n      <li role=\"tab\" class=\"ng-tns-c24-2 k-item k-state-default k-state-active ng-star-inserted\" id=\"k-tabstrip-tab-0\" aria-selected=\"true\">\n        <span class=\"k-link\">基本信息\n        </span>\n      </li>\n      <li role=\"tab\" class=\"ng-tns-c24-2 k-item k-state-default ng-star-inserted\" id=\"k-tabstrip-tab-1\">\n        <span class=\"k-link\">交货信息\n        </span>\n      </li>\n      <li role=\"tab\" class=\"ng-tns-c24-2 k-item k-state-default ng-star-inserted\" id=\"k-tabstrip-tab-2\">\n        <span class=\"k-link\">结算信息\n\n        </span>\n      </li>\n      <li role=\"tab\" class=\"ng-tns-c24-2 k-item k-state-default ng-star-inserted\" id=\"k-tabstrip-tab-3\">\n        <span class=\"k-link\">执行情况\n        </span>\n      </li>\n    </ul>\n\n    <div role=\"tabpanel\" class=\"ng-tns-c24-2 k-content k-state-active ng-trigger ng-trigger-state ng-star-inserted\" ng-reflect-ng-class=\"k-content k-state-active\"\n      id=\"k-tabstrip-tabpanel-0\" aria-hidden=\"false\" aria-expanded=\"true\" aria-labelledby=\"k-tabstrip-tab-0\">\n\n      <div _ngcontent-c23=\"\" class=\"sub-grid-toolbar mx-0 mb-2 ng-star-inserted\" style=\"\">\n        <ul _ngcontent-c23=\"\" class=\"sgt-menu-bar clearfix m-0 p-0\">\n          <li _ngcontent-c23=\"\" class=\"sgt-menu-item\">\n            <span _ngcontent-c23=\"\" class=\"item-text\">新增</span>\n          </li>\n          <li _ngcontent-c23=\"\" class=\"sgt-menu-item\">\n            <span _ngcontent-c23=\"\" class=\"item-text\">删除</span>\n          </li>\n          <li _ngcontent-c23=\"\" class=\"sgt-menu-item\">\n            <span _ngcontent-c23=\"\" class=\"item-text\">复制</span>\n          </li>\n          <li _ngcontent-c23=\"\" class=\"sgt-menu-item\">\n            <span _ngcontent-c23=\"\" class=\"item-text\">配置</span>\n          </li>\n          <li _ngcontent-c23=\"\" class=\"sgt-menu-item\">\n            <span _ngcontent-c23=\"\" class=\"item-text\">重新配置</span>\n          </li>\n        </ul>\n      </div>\n      <div _ngcontent-c23=\"\" class=\"w-100 ng-star-inserted\" style=\"overflow-x: auto;\">\n        <table _ngcontent-c23=\"\" class=\"table table-bordered table-hover table-striped\">\n          <thead _ngcontent-c23=\"\">\n            <tr _ngcontent-c23=\"\" class=\"bg-light text-center\">\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">行号</td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">物料编号</td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">物料名称</td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">物料描述</td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">物料特征</td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">物料别名</td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">客户物料编号</td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">主数量</td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">主单位</td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">折前主单价</td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">主单价</td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">辅数量</td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">辅单位</td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">折前辅单价</td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">辅单价</td>\n            </tr>\n          </thead>\n          <tbody _ngcontent-c23=\"\" class=\"ng-star-inserted\">\n            <tr _ngcontent-c23=\"\" class=\"ng-star-inserted\">\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">1</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">WL0001</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">XXXX</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">XXXXXX</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">WLTZ</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">XXXXX</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">XXXXXX</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">3</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">吨</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">230</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">180</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">2</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">立方</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">176</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">154</div>\n              </td>\n            </tr>\n            <tr _ngcontent-c23=\"\" class=\"ng-star-inserted\">\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">2</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">WL0001</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">XXXX</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">XXXXXX</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">WLTZ</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">XXXXX</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">XXXXXX</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">3</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">吨</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">230</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">180</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">2</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">立方</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">176</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">154</div>\n              </td>\n            </tr>\n            <tr _ngcontent-c23=\"\" class=\"ng-star-inserted\">\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">3</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">WL0001</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">XXXX</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">XXXXXX</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">WLTZ</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">XXXXX</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">XXXXXX</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">3</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">吨</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">230</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">180</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">2</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">立方</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">176</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">154</div>\n              </td>\n            </tr>\n            <tr _ngcontent-c23=\"\" class=\"ng-star-inserted\">\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">4</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">WL0001</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">XXXX</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">XXXXXX</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">WLTZ</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">XXXXX</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">XXXXXX</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">3</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">吨</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">230</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">180</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">2</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">立方</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">176</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">154</div>\n              </td>\n            </tr>\n            <tr _ngcontent-c23=\"\" class=\"ng-star-inserted\">\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">5</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">WL0001</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">XXXX</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">XXXXXX</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">WLTZ</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">XXXXX</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">XXXXXX</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">3</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">吨</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">230</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">180</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">2</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">立方</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">176</div>\n              </td>\n              <td _ngcontent-c23=\"\" class=\"g-grid-cell p-1\">\n                <div _ngcontent-c23=\"\" class=\"text-nowrap\">154</div>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </kendo-tabstrip>\n</div>"

/***/ }),

/***/ "./src/app/modules/taskcenter/form-query/form-query.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormQueryComponent", function() { return FormQueryComponent; });
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

var FormQueryComponent = /** @class */ (function () {
    function FormQueryComponent(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.currentAdIndex = -1;
    }
    FormQueryComponent.prototype.ngOnInit = function () {
        // this.loadComponent();
    };
    FormQueryComponent.prototype.ngOnDestroy = function () {
        // clearInterval(this.interval);
    };
    FormQueryComponent.prototype.loadComponent = function () {
        var adItem = this.forms[this.currentAdIndex];
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
        // const viewContainerRef = this.formHost.viewContainerRef;
        // viewContainerRef.clear();
        // const componentRef = viewContainerRef.createComponent(componentFactory);
        // (<FormDirective>componentRef.instance).data = adItem.data;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FormQueryComponent.prototype, "forms", void 0);
    FormQueryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-form-query',
            template: __webpack_require__("./src/app/modules/taskcenter/form-query/form-query.component.html"),
            styles: [__webpack_require__("./src/app/modules/taskcenter/form-query/form-query.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]])
    ], FormQueryComponent);
    return FormQueryComponent;
}());



/***/ }),

/***/ "./src/app/modules/taskcenter/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__taskcenter_module__ = __webpack_require__("./src/app/modules/taskcenter/taskcenter.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TaskcenterModule", function() { return __WEBPACK_IMPORTED_MODULE_0__taskcenter_module__["TaskcenterModule"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__task_list_task_list_component__ = __webpack_require__("./src/app/modules/taskcenter/task-list/task-list.component.ts");
/* unused harmony reexport TaskListComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_main_task_main_component__ = __webpack_require__("./src/app/modules/taskcenter/task-main/task-main.component.ts");
/* unused harmony reexport TaskMainComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__task_nav_task_nav_component__ = __webpack_require__("./src/app/modules/taskcenter/task-nav/task-nav.component.ts");
/* unused harmony reexport TaskNavComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__task_list_toolbar_task_list_toolbar_component__ = __webpack_require__("./src/app/modules/taskcenter/task-list-toolbar/task-list-toolbar.component.ts");
/* unused harmony reexport TaskListToolbarComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__task_detail_task_detail_component__ = __webpack_require__("./src/app/modules/taskcenter/task-detail/task-detail.component.ts");
/* unused harmony reexport TaskDetailComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__task_dialog_task_dialog_component__ = __webpack_require__("./src/app/modules/taskcenter/task-dialog/task-dialog.component.ts");
/* unused harmony reexport TaskDialogComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__task_flowchart_task_flowchart_component__ = __webpack_require__("./src/app/modules/taskcenter/task-flowchart/task-flowchart.component.ts");
/* unused harmony reexport TaskFlowchartComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__eventbus_index__ = __webpack_require__("./src/app/modules/taskcenter/eventbus/index.ts");
/* unused harmony reexport EventBusProxy */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__plugin_container_plugin_container_component__ = __webpack_require__("./src/app/modules/taskcenter/plugin-container/plugin-container.component.ts");
/* unused harmony reexport PluginContainerComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__taskList__ = __webpack_require__("./src/app/modules/taskcenter/taskList.ts");
/* unused harmony reexport TaskList */













/***/ }),

/***/ "./src/app/modules/taskcenter/plugin-container/plugin-container.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n}\r\n"

/***/ }),

/***/ "./src/app/modules/taskcenter/plugin-container/plugin-container.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container #pluginContainer></ng-container>\r\n"

/***/ }),

/***/ "./src/app/modules/taskcenter/plugin-container/plugin-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluginContainerComponent", function() { return PluginContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__eventbus_event_bus__ = __webpack_require__("./src/app/modules/taskcenter/eventbus/event-bus.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PluginContainerComponent = /** @class */ (function () {
    function PluginContainerComponent(
        // private workspace: Workspace,
        eventBus, compiler, injector) {
        this.eventBus = eventBus;
        this.compiler = compiler;
        this.injector = injector;
        this.loaded = false;
    }
    PluginContainerComponent.prototype.ngOnInit = function () {
        console.log('plugin container init');
        // if (this.tabIndex !== undefined && this.tabIndex !== null) {
        //   const eventBusProxy = this.workspace.eventBus2.getProxy(PluginContainerComponent, () => this.constructor.name);
        //   setTimeout(() => {
        //     eventBusProxy.post('ActiveTabs', {area: 'main', index: this.tabIndex});
        //   });
        // }
    };
    PluginContainerComponent.prototype.ngOnChanges = function () {
        this.container.clear();
        if (this.componentRef && this.componentRef.hostView && !this.componentRef.hostView.destroyed) {
            this.container.insert(this.componentRef.hostView);
        }
    };
    PluginContainerComponent.prototype.setComRef = function (com) {
        this.container.clear();
        if (this.componentRef) {
            this.container.insert(this.componentRef.hostView);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('pluginContainer', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"])
    ], PluginContainerComponent.prototype, "container", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentRef"])
    ], PluginContainerComponent.prototype, "componentRef", void 0);
    PluginContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-plugin-container',
            template: __webpack_require__("./src/app/modules/taskcenter/plugin-container/plugin-container.component.html"),
            styles: [__webpack_require__("./src/app/modules/taskcenter/plugin-container/plugin-container.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__eventbus_event_bus__["EventBus"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Compiler"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], PluginContainerComponent);
    return PluginContainerComponent;
}());



/***/ }),

/***/ "./src/app/modules/taskcenter/task-detail/task-detail.component.css":
/***/ (function(module, exports) {

module.exports = ".sidebar {\r\n    padding: 0;\r\n    -webkit-box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\r\n    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\r\n}"

/***/ }),

/***/ "./src/app/modules/taskcenter/task-detail/task-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid d-flex flex-row g-main\">\r\n  <div class=\"d-flex flex-md-nowrap row flex-fill\">\r\n  <!-- 联查单据页面 -->\r\n    <div class=\"col-md-9 d-flex\">\r\n      <div class=\"container-fluid d-flex h-100 flex-column flex-fill\">\r\n        <!-- 联查部件 -->\r\n        <app-form-query ></app-form-query>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"operator===1\" class=\"col-md-3 d-flex d-none d-md-block sidebar m-au\">\r\n      <!-- 审批区域 -->\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-md-12 pb-1\">\r\n          <label class=\"k-form-field\" for=\"description\">\r\n            <span>审批结论</span><br />\r\n            <input type=\"radio\" id=\"r1\" name=\"rg\" class=\"k-radio\" checked />\r\n            <label class=\"k-radio-label\" for=\"r1\">通过</label>\r\n            <br />\r\n            <input type=\"radio\" id=\"r2\" name=\"rg\" class=\"k-radio\" />\r\n            <label class=\"k-radio-label\" for=\"r2\">不通过</label>\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-md-12 pb-1\">\r\n          <label class=\"k-form-field\" for=\"description\">\r\n            <span>审批意见</span><br />\r\n            <textarea kendoTextArea class=\"form-control\" placeholder=\"请输入审批意见\" name=\"description\"></textarea>\r\n            <!-- [(ngModel)]=\"toEditBeEvent&&toEditBeEvent.description\" -->\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <button type=\"button\" class=\"btn btn-primary btn-lg\" (click)=\"submit()\">提交</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/taskcenter/task-detail/task-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDetailComponent", function() { return TaskDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__taskcenter_service__ = __webpack_require__("./src/app/modules/taskcenter/taskcenter.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskDetailComponent = /** @class */ (function () {
    function TaskDetailComponent(taskService, router, route) {
        this.taskService = taskService;
        this.router = router;
        this.route = route;
        this.operator = +this.route.snapshot.paramMap.get('operator');
    }
    TaskDetailComponent.prototype.ngOnInit = function () {
    };
    TaskDetailComponent.prototype.submit = function () {
        this.taskService.excuteTask('', '');
        window.history.go(-1);
    };
    TaskDetailComponent.prototype.navigateTo = function (url) {
        this.router.navigate([url]);
    };
    TaskDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-task-detail',
            template: __webpack_require__("./src/app/modules/taskcenter/task-detail/task-detail.component.html"),
            styles: [__webpack_require__("./src/app/modules/taskcenter/task-detail/task-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__taskcenter_service__["TaskCenterService"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]])
    ], TaskDetailComponent);
    return TaskDetailComponent;
}());



/***/ }),

/***/ "./src/app/modules/taskcenter/task-dialog/task-dialog.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/taskcenter/task-dialog/task-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<kendo-window *ngIf=\"active\" (close)=\"cancel()\" title=\"审批\" [resizable]=\"false\" [minWidth]=\"250\" [width]=\"400\">\r\n\r\n  <div class=\"flex-auto d-flex \" style=\"position:relative; padding-top: 10px\">\r\n    <form class=\"k-form\">\r\n      <!-- <div *ngIf=\"operator===2\" class=\"row\">\r\n        <div class=\"col-sm-12 col-md-12 pb-1\">\r\n          <label class=\"k-form-field\" for=\"description\">\r\n            <span>审批结论</span>\r\n            <input type=\"radio\" id=\"r1\" name=\"rg\" class=\"k-radio\" checked />\r\n            <label class=\"k-radio-label\" for=\"r1\">通过</label>\r\n            <br />\r\n            <input type=\"radio\" id=\"r2\" name=\"rg\" class=\"k-radio\" />\r\n            <label class=\"k-radio-label\" for=\"r2\">不通过</label>\r\n          </label>\r\n        </div>\r\n      </div> -->\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-md-12 pb-1\">\r\n          <label class=\"k-form-field\" for=\"description\">\r\n            <span>审批意见</span>\r\n            <textarea kendoTextArea class=\"form-control\" placeholder=\"请输入审批意见\" name=\"description\" ></textarea>\r\n            <!-- [(ngModel)]=\"toEditBeEvent&&toEditBeEvent.description\" -->\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <!-- <div *ngIf=\"operator===3\" class=\"row\">\r\n        <div class=\"col-sm-12 col-md-12 pb-1\">\r\n          <label class=\"k-form-field\" for=\"description\">\r\n            <span>驳回到上一级</span>\r\n            <kendo-dropdownlist [data]=\"source\" [filterable]=\"true\" >\r\n            </kendo-dropdownlist>\r\n          </label>\r\n        </div>\r\n      </div> -->\r\n      </form>\r\n  </div>\r\n\r\n  <div class=\"text-center\" style=\"padding-top: 10px;padding-bottom: 5px\">\r\n    <button class=\"btn btn-sm  mr-2  btn-primary \" style=\"font-size: 13px;line-height: 1.2;\" (click)=\"submit()\">确定</button>\r\n    <button class=\"btn btn-sm mr-2\" style=\"background:#e3e4e4 !important;font-size: 13px;line-height: 1.2;\" (click)=\"cancel()\">取消</button>\r\n  </div>\r\n</kendo-window>"

/***/ }),

/***/ "./src/app/modules/taskcenter/task-dialog/task-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDialogComponent", function() { return TaskDialogComponent; });
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

var TaskDialogComponent = /** @class */ (function () {
    function TaskDialogComponent() {
        this.active = false;
        this.btnClickEvt = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TaskDialogComponent.prototype.ngOnInit = function () {
    };
    TaskDialogComponent.prototype.load = function (op) {
        this.operator = op;
        this.active = !this.active;
    };
    /**
     * 执行审批
     */
    TaskDialogComponent.prototype.submit = function () {
        // 默认是审批通过
        var executeType = 'Circulate';
        if (this.operator === 1) {
            executeType = 'Terminate';
        }
        if (this.operator === 2) {
            executeType = 'Reject';
        }
        this.btnClickEvt.emit(executeType);
        this.active = false;
    };
    TaskDialogComponent.prototype.cancel = function () {
        this.active = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TaskDialogComponent.prototype, "btnClickEvt", void 0);
    TaskDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-task-dialog',
            template: __webpack_require__("./src/app/modules/taskcenter/task-dialog/task-dialog.component.html"),
            styles: [__webpack_require__("./src/app/modules/taskcenter/task-dialog/task-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TaskDialogComponent);
    return TaskDialogComponent;
}());



/***/ }),

/***/ "./src/app/modules/taskcenter/task-flowchart/task-flowchart.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/taskcenter/task-flowchart/task-flowchart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid d-flex flex-row g-main\">\r\n<img src=\"/platform/runtime/wf/web/assets/img/flwochart.png\" class=\"img-fluid flex-fill\">\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/taskcenter/task-flowchart/task-flowchart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskFlowchartComponent", function() { return TaskFlowchartComponent; });
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

var TaskFlowchartComponent = /** @class */ (function () {
    function TaskFlowchartComponent() {
    }
    TaskFlowchartComponent.prototype.ngOnInit = function () {
    };
    TaskFlowchartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-task-flowchart',
            template: __webpack_require__("./src/app/modules/taskcenter/task-flowchart/task-flowchart.component.html"),
            styles: [__webpack_require__("./src/app/modules/taskcenter/task-flowchart/task-flowchart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TaskFlowchartComponent);
    return TaskFlowchartComponent;
}());



/***/ }),

/***/ "./src/app/modules/taskcenter/task-list-toolbar/task-list-toolbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/taskcenter/task-list-toolbar/task-list-toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- 审批类任务 -->\r\n<div *ngIf=\"_bizTypeId=='travel00010001'\" class=\"mx-right\" style=\"padding-top: 10px\">\r\n  <button kendoButton [disabled]=\"enable\" [primary]=\"true\" (click)=\"onApproveClick(0)\">\r\n    <i class=\"material-icons align-middle\" style=\"font-size:18px\">beenhere</i> 通过\r\n  </button>\r\n  <button kendoButton [disabled]=\"enable\" (click)=\"onApproveClick(1)\">\r\n    <i class=\"material-icons align-middle\" style=\"font-size:18px\">beenhere</i> 不通过\r\n  </button>\r\n  <button kendoButton [disabled]=\"enable\" (click)=\"onApproveClick(2)\">\r\n    <i class=\"material-icons align-middle\" style=\"font-size:18px\">reply</i> 驳回到上一级\r\n  </button>\r\n  <button kendoButton [disabled]=\"enable\" routerLink=\"detail/1\">\r\n    <i class=\"material-icons align-middle\" style=\"font-size:18px\">open_in_new</i> 查看\r\n  </button>\r\n  <!-- <button kendoButton [disabled]=\"enable\" (click)=\"onApproveClick(3)\">\r\n    <i class=\"material-icons align-middle\" style=\"font-size:18px\">add</i> 批量审批\r\n  </button> -->\r\n  <button kendoButton [primary]=\"false\" routerLink=\"flowchart\">\r\n    <i class=\"material-icons align-middle\" style=\"font-size:18px\">view_module</i> 查看流程图\r\n  </button>\r\n  <button kendoButton (click)=\"onRefresh(5)\">\r\n    <i class=\"material-icons align-middle\" style=\"font-size:18px\">refresh</i> 刷新\r\n  </button>\r\n</div>\r\n<!-- 工作流类任务 -->\r\n<div *ngIf=\"_bizTypeId==='travel00010002'\" class=\"mx-right\" style=\"padding-top: 10px\">\r\n  <button kendoButton (click)=\"onApproveClick(1)\">\r\n    提单\r\n  </button>\r\n  <button kendoButton routerLink=\"detail/2\">\r\n    办理\r\n  </button>\r\n  <button kendoButton routerLink=\"detail/2\">\r\n    <i class=\"material-icons align-middle\" style=\"font-size:18px\">view_headline</i> 查看单据\r\n  </button>\r\n  <button kendoButton (click)=\"onRefresh\">\r\n    查看影像\r\n  </button>\r\n  <button kendoButton (click)=\"onRefresh\">\r\n    <i class=\"material-icons align-middle\" style=\"font-size:18px\">history</i> 状态日志变更记录\r\n  </button>\r\n</div>\r\n<!-- 非流程类任务 -->\r\n<!--<div *ngIf=\"bizTypeId==='hr1'\" class=\"mx-right\" style=\"padding-top: 10px\">\r\n  <button kendoButton [primary]=\"true\" routerLink=\"detail\">\r\n    <i class=\"material-icons align-middle\" style=\"font-size:18px\">open_in_new</i> 打开\r\n  </button>\r\n</div>-->\r\n\r\n<!-- <div #toolbarContainer class=\"mx-right\" style=\"padding-top:10px\">\r\n</div>  -->"

/***/ }),

/***/ "./src/app/modules/taskcenter/task-list-toolbar/task-list-toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskListToolbarComponent", function() { return TaskListToolbarComponent; });
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

var TaskListToolbarComponent = /** @class */ (function () {
    // @ViewChild('toolbarContainer', { read: ViewContainerRef })
    // container: ViewContainerRef;
    function TaskListToolbarComponent() {
        this.btnClickEvt = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    Object.defineProperty(TaskListToolbarComponent.prototype, "bizTypeId", {
        get: function () {
            return this._bizTypeId;
        },
        set: function (name) {
            this._bizTypeId = name;
        },
        enumerable: true,
        configurable: true
    });
    TaskListToolbarComponent.prototype.ngOnInit = function () {
    };
    TaskListToolbarComponent.prototype.onApproveClick = function (v) {
        this.btnClickEvt.emit(v);
    };
    // 回调刷新列表
    TaskListToolbarComponent.prototype.onRefresh = function (v) {
        this.btnClickEvt.emit(v);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], TaskListToolbarComponent.prototype, "enable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], TaskListToolbarComponent.prototype, "bizTypeId", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TaskListToolbarComponent.prototype, "btnClickEvt", void 0);
    TaskListToolbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-task-list-toolbar',
            template: __webpack_require__("./src/app/modules/taskcenter/task-list-toolbar/task-list-toolbar.component.html"),
            styles: [__webpack_require__("./src/app/modules/taskcenter/task-list-toolbar/task-list-toolbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TaskListToolbarComponent);
    return TaskListToolbarComponent;
}());



/***/ }),

/***/ "./src/app/modules/taskcenter/task-list/task-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/taskcenter/task-list/task-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex mb-3\">\r\n  <div style=\"padding-top: 10px\">\r\n    <img src=\"/platform/runtime/wf/web/assets/img/task.png\" style=\"width:64px;height:64px;\" class=\"rounded\">\r\n    <h3 class=\"d-inline pl-3\">{{pageTitle}}</h3>\r\n  </div>\r\n  <div class=\"mx-auto\"></div>\r\n  <app-task-list-toolbar  [bizTypeId]=\"_bizTypeId\" [enable]=\"!selectedWorkitem\"  (btnClickEvt)=\"onApproveClick($event)\"></app-task-list-toolbar>\r\n  <!-- <app-plugin-container *ngIf=\"this.taskList.comRef\" class=\"d-flex mb-3\"  [componentRef]=\"this.taskList.comRef\"></app-plugin-container> -->\r\n</div>\r\n\r\n<!-- 列表区域 -->\r\n<div class=\"d-flex flex-column h-200\">\r\n  <kendo-grid *ngIf=\"columns\" class=\"h-200\" [data]=\"gridView\" [resizable]=\"true\"\r\n  [selectable]=\"selectableSettings\" (selectionChange)=\"onSelectionChange($event)\"\r\n  [pageable]=\"true\" [pageSize]=\"pageSize\" [skip]=\"skip\" (pageChange)=\"pageChange($event)\">\r\n    <kendo-grid-column *ngFor=\"let column of columns\" \r\n    [field]=\"column.targetCode\" \r\n    [title]=\"column.title\"\r\n    [width]=\"column.width\" \r\n    [hidden]=\"!column.visiable\"\r\n    ></kendo-grid-column>\r\n  </kendo-grid>\r\n</div>\r\n<!-- Loading -->\r\n<!-- <div class=\"k-i-loading\" *ngIf=\"this.workspace.isLoading\"></div> -->\r\n<app-task-dialog  (btnClickEvt)=\"onExcute($event)\"></app-task-dialog>"

/***/ }),

/***/ "./src/app/modules/taskcenter/task-list/task-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskListComponent", function() { return TaskListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__taskcenter_service__ = __webpack_require__("./src/app/modules/taskcenter/taskcenter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_dialog_task_dialog_component__ = __webpack_require__("./src/app/modules/taskcenter/task-dialog/task-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gsp_sys_rtf_common__ = __webpack_require__("./node_modules/@gsp-sys/rtf-common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gsp_sys_rtf_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__gsp_sys_rtf_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__taskList__ = __webpack_require__("./src/app/modules/taskcenter/taskList.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__plugin_container_plugin_container_component__ = __webpack_require__("./src/app/modules/taskcenter/plugin-container/plugin-container.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TaskListComponent = /** @class */ (function () {
    function TaskListComponent(taskService, frameworkSvc, taskList) {
        this.taskService = taskService;
        this.frameworkSvc = frameworkSvc;
        this.taskList = taskList;
        this.todoList = [];
        // private pageIndex = 1;
        this.pageSize = 20;
        this.skip = 0;
        this.enable = true;
        this.selectableSettings = {
            enabled: true,
            mode: 'multiple'
        };
    }
    Object.defineProperty(TaskListComponent.prototype, "bizTypeId", {
        get: function () { return this._bizTypeId; },
        set: function (name) {
            var _this = this;
            this._bizTypeId = (name && name.trim());
            if (!this._bizTypeId) {
                return;
            }
            this.taskService.fetchTaskConfig(this._bizTypeId).subscribe(function (result) {
                if (result.fields) {
                    _this.columns = result.fields;
                    _this.getToDoList();
                }
                else {
                    alert('没有显示列配置！');
                }
                // if (result.actions) {
                //   const toolbarPath = result.actions[0].path;
                //   this.taskList.lazyLoad(toolbarPath, null)
                //     .then((re) => alert(re));
                // } else {
                //   console.log(this._bizTypeId + '没有配置工具栏');
                // }
            });
            // 暂时写死了审批的工具扩展链接
            // this.taskList.lazyLoad('/platform/runtime/wf/web/wf-toolbar.module#
            // ./src/app / modules / wf - toolbar / wf - toolbar.module.js#WfToolbarModule', null)
            //  .then((re) => alert(re));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TaskListComponent.prototype, "pageTitle", {
        get: function () { return this._title; },
        set: function (title) {
            this._title = title;
        },
        enumerable: true,
        configurable: true
    });
    TaskListComponent.prototype.ngOnInit = function () {
    };
    /**
     * 获取绑定列表数据
     */
    TaskListComponent.prototype.getToDoList = function () {
        var _this = this;
        var filter = '';
        if (this.bizTypeId) {
            filter = "CategoryId eq '" + this.bizTypeId + "' and State eq 2";
        }
        else {
            return;
        }
        this.taskService.fetchTaskList(this.skip, this.pageSize, filter)
            .subscribe(function (result) {
            // result.value.map((e) => this.taskService.toLowCase(e));
            _this.todoList = result.value;
            _this.gridView = {
                data: _this.todoList,
                total: result['@odata.count']
            };
        });
    };
    // 分页
    TaskListComponent.prototype.pageChange = function (event) {
        this.skip = event.skip;
        this.getToDoList();
    };
    /**
     * 列表选择
     * @param event 选中事件
     */
    TaskListComponent.prototype.onSelectionChange = function (event) {
        this.enable = false;
        if (event.selected) {
            this.selectedWorkitem = event.selectedRows[0].dataItem;
        }
        else {
            this.selectedWorkitem = null;
        }
    };
    /**
     *  显示弹窗
     */
    TaskListComponent.prototype.onApproveClick = function (action) {
        if (action === 3) {
            this.onRefresh();
        }
        else {
            this.approveDialog.load(action);
        }
    };
    /**
     *  刷新
     */
    TaskListComponent.prototype.onRefresh = function () {
        this.getToDoList();
    };
    /**
     * 打开审批联查界面
     * @param operator 联查、审批操作 1 带审批区域
     */
    TaskListComponent.prototype.navigate = function (operator) {
        // TODO改用GSPFuncService
        this.frameworkSvc.openFuncByUrl('', '');
        // this.router.navigateByUrl('detail/' + operator);
    };
    TaskListComponent.prototype.onExcute = function (approveType) {
        var _this = this;
        this.taskService.excuteTask(this.selectedWorkitem.Id, approveType)
            .subscribe(function () {
            _this.selectedWorkitem = null;
            _this.onRefresh();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__task_dialog_task_dialog_component__["TaskDialogComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__task_dialog_task_dialog_component__["TaskDialogComponent"])
    ], TaskListComponent.prototype, "approveDialog", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__plugin_container_plugin_container_component__["PluginContainerComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__plugin_container_plugin_container_component__["PluginContainerComponent"])
    ], TaskListComponent.prototype, "pluginContainer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], TaskListComponent.prototype, "bizTypeId", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], TaskListComponent.prototype, "pageTitle", null);
    TaskListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-task-list',
            template: __webpack_require__("./src/app/modules/taskcenter/task-list/task-list.component.html"),
            styles: [__webpack_require__("./src/app/modules/taskcenter/task-list/task-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__taskcenter_service__["TaskCenterService"],
            __WEBPACK_IMPORTED_MODULE_3__gsp_sys_rtf_common__["FrameworkService"],
            __WEBPACK_IMPORTED_MODULE_4__taskList__["TaskList"]])
    ], TaskListComponent);
    return TaskListComponent;
}());



/***/ }),

/***/ "./src/app/modules/taskcenter/task-main/task-main.component.css":
/***/ (function(module, exports) {

module.exports = ".sidebar {\r\n    padding: 0;\r\n    -webkit-box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\r\n            box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\r\n}"

/***/ }),

/***/ "./src/app/modules/taskcenter/task-main/task-main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid d-flex flex-row g-main\">\r\n  <div class=\"d-flex flex-md-nowrap row flex-fill\">\r\n    <div class=\"col-md-3 d-flex d-none d-md-block sidebar\">\r\n      <!-- 导航部件 -->\r\n      <app-task-nav (selectedBizTypeIdChange)=\"onSelectedBizTypeIdChange($event)\"></app-task-nav>\r\n    </div>\r\n    <div class=\"col-md-9 d-flex\">\r\n      <div class=\"container-fluid d-flex h-100 flex-column flex-fill\">\r\n        <!-- 任务列表部件 -->\r\n        <div >\r\n          <app-task-list [bizTypeId]=\"selectedBizTypeId\" [pageTitle]=\"selectNodeName\"></app-task-list>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/taskcenter/task-main/task-main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskMainComponent", function() { return TaskMainComponent; });
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

var TaskMainComponent = /** @class */ (function () {
    function TaskMainComponent(compiler, injector) {
        this.showFlowList = false;
    }
    TaskMainComponent.prototype.ngOnInit = function () {
    };
    TaskMainComponent.prototype.onSelectedBizTypeIdChange = function (noteItem) {
        this.selectedBizTypeId = noteItem.id;
        if (!!noteItem.id) {
            this.selectNodeName = noteItem.text;
        }
        // this.showFlowList = this.selectedBizTypeId === 'workflowlist' ? true : false;
    };
    TaskMainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-taskmain',
            template: __webpack_require__("./src/app/modules/taskcenter/task-main/task-main.component.html"),
            styles: [__webpack_require__("./src/app/modules/taskcenter/task-main/task-main.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Compiler"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], TaskMainComponent);
    return TaskMainComponent;
}());



/***/ }),

/***/ "./src/app/modules/taskcenter/task-nav/task-nav.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/taskcenter/task-nav/task-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-sticky\">\r\n  <kendo-treeview [nodes]=\"navSour\" textField=\"text\" [hasChildren]=\"hasChildren\" [children]=\"fetchChildren\" kendoTreeViewExpandable\r\n   kendoTreeViewHierarchyBinding kendoTreeViewSelectable\r\n  [expandedKeys]=\"expandedKeys\"  [(selectedKeys)]=\"selectedKeys\"\r\n     (selectionChange)=\"handleSelection($event)\">\r\n      <ng-template kendoTreeViewNodeTemplate let-dataItem>\r\n        {{dataItem.text}}<span *ngIf=\"!!dataItem.count\">({{dataItem.count}})</span>\r\n      </ng-template>\r\n  </kendo-treeview>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/taskcenter/task-nav/task-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskNavComponent", function() { return TaskNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__taskcenter_service__ = __webpack_require__("./src/app/modules/taskcenter/taskcenter.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskNavComponent = /** @class */ (function () {
    function TaskNavComponent(taskService) {
        this.taskService = taskService;
        this.selectedBizTypeIdChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.expandedKeys = ['0', '1', '2'];
        this.selectedKeys = ['0_0'];
        // private data = of(NavDatas.result);
        this.hasChildren = function (item) { return item.items && item.items.length > 0; };
        this.fetchChildren = function (item) { return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["of"])(item.items); };
    }
    TaskNavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskService.fetchTaskCategories()
            .subscribe(function (result) {
            result.value.map(function (e) { return _this.taskService.toLowCase(e); }); // OData改造暂时存在属性首字母不能转换的问题，兼容处理
            // 组织树格式数据
            var bindData = _this.convertTreeData(result.value);
            _this.navSour = bindData;
            _this.selectedBizTypeIdChange.emit(bindData[0].items[0]);
        });
        // this.data.subscribe(val => {
        //   this.navSour = val;
        //   this.selectedBizTypeIdChange.emit(val[0].items[0]);
        // });
    };
    TaskNavComponent.prototype.toLowCase = function (jsonObj) {
        if (typeof (jsonObj) === 'object') {
            for (var _i = 0, _a = Object.keys(jsonObj); _i < _a.length; _i++) {
                var key = _a[_i];
                jsonObj[key.substring(0, 1).toLowerCase() + key.substring(1)] = jsonObj[key];
                delete (jsonObj[key]);
            }
        }
        return jsonObj;
    };
    /**
     * 导航树选中节点变更
     * @param param0 TreeItem
     */
    TaskNavComponent.prototype.handleSelection = function (_a) {
        var index = _a.index, dataItem = _a.dataItem;
        this.selectedKeys = [index];
        this.selectedBizTypeIdChange.emit(dataItem);
    };
    TaskNavComponent.prototype.convertTreeData = function (rows) {
        var treeVM = [];
        // get the top level nodes
        rows.forEach(function (item) {
            if (!rows.find(function (r) { return r.id !== item.id && r.id === item.parentId; })) {
                treeVM.push({
                    id: item.id,
                    text: item.name,
                    parentId: '',
                    count: 0,
                    items: [],
                    value: item
                });
            }
        });
        treeVM.sort(function (x, y) { return x.value.sortId > y.value.sortId ? 1 : -1; });
        var toDo = [];
        for (var i = 0; i < treeVM.length; i++) {
            toDo.push(treeVM[i]);
        }
        while (toDo.length) {
            var node = toDo.shift(); // the parent node
            // get the children nodes
            for (var i = 0; i < rows.length; i++) {
                var item = rows[i];
                if (item.id !== node.id && item.parentId === node.id) {
                    var child = {
                        id: item.id,
                        text: item.name,
                        parentId: node.id,
                        count: 0,
                        items: [],
                        value: item
                    };
                    node.items.push(child);
                    toDo.push(child);
                }
            }
            node.items.sort(function (x, y) { return x.value.sortId > y.value.sortId ? 1 : -1; });
        }
        return treeVM;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TaskNavComponent.prototype, "selectedBizTypeIdChange", void 0);
    TaskNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-task-nav',
            template: __webpack_require__("./src/app/modules/taskcenter/task-nav/task-nav.component.html"),
            styles: [__webpack_require__("./src/app/modules/taskcenter/task-nav/task-nav.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__taskcenter_service__["TaskCenterService"]])
    ], TaskNavComponent);
    return TaskNavComponent;
}());



/***/ }),

/***/ "./src/app/modules/taskcenter/taskList.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskList", function() { return TaskList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__eventbus__ = __webpack_require__("./src/app/modules/taskcenter/eventbus/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskList = /** @class */ (function () {
    function TaskList(eventBus, compiler, injector) {
        this.eventBus = eventBus;
        this.compiler = compiler;
        this.injector = injector;
        // this.eventBus.on(null, null, '', this, () => return void;)
    }
    TaskList.prototype.lazyLoad = function (url, openCommand) {
        var _this = this;
        if (!url) {
            return Promise.resolve();
        }
        var moduleName, exportName;
        _a = url.split('#'), moduleName = _a[0], exportName = _a[2];
        // 如果未指定导出模块，默认使用default.
        if (!exportName) {
            exportName = 'default';
        }
        // 异步加载模块
        return __webpack_require__("./src/$$_lazy_require_resource lazy recursive")(url)
            .then(function (module) { return module[exportName]; })
            .then(function (type) {
            var compiled = _this.compiler.compileModuleAndAllComponentsSync(type);
            var moduleInstance = compiled.ngModuleFactory.create(_this.injector);
            var pkg = moduleInstance.instance.getPackage();
            // pkg
            // pkg.id = id;
            // pkg.data = metadata;
            // this._packages.set(id, { title: metadata.name, data: metadata, pkg: pkg });
            // this.packageManager.setPackage(pkg, {});
            pkg.activate({});
        });
        var _a;
    };
    TaskList.prototype.openModalPanel = function (panelName, state) {
        // this.configService.getPluginsConfig().subscribe((pluginConfig) => {
        //   if (!pluginConfig[panelName]) {
        //     return;
        //   }
        //   const pluginUrl = pluginConfig[panelName];
        //   let moduleName: string, exportName: string;
        //   [moduleName, , exportName] = pluginUrl.split('#');
        //   // 如果未指定导出模块，默认使用default.
        //   if (!exportName) {
        //     exportName = 'default';
        //   }
        //   // 异步加载模块
        //   lazyRequire(pluginUrl)
        //     .then((module: any) => module[exportName])
        //     // .then((type: any) => this.checkNotEmpty(type, moduleName, exportName))
        //     .then((type: any) => {
        //       const compiled = this.compiler.compileModuleAndAllComponentsSync(type);
        //       const moduleInstance = compiled.ngModuleFactory.create(this.injector);
        //       const pkg = (<PackageModule>moduleInstance.instance).getPackage();
        //       pkg.id = moduleName;
        //       pkg.data = panelName;
        //       pkg.activate(state ? state : {});
        //     });
        // });
    };
    TaskList.prototype.setCompoment = function (com) {
        this.comRef = com;
    };
    TaskList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__eventbus__["EventBus"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Compiler"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], TaskList);
    return TaskList;
}());



/***/ }),

/***/ "./src/app/modules/taskcenter/taskcenter.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskcenterModule", function() { return TaskcenterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_buttons__ = __webpack_require__("./node_modules/@progress/kendo-angular-buttons/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_grid__ = __webpack_require__("./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_treeview__ = __webpack_require__("./node_modules/@progress/kendo-angular-treeview/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_inputs__ = __webpack_require__("./node_modules/@progress/kendo-angular-inputs/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__progress_kendo_angular_label__ = __webpack_require__("./node_modules/@progress/kendo-angular-label/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__progress_kendo_angular_layout__ = __webpack_require__("./node_modules/@progress/kendo-angular-layout/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__progress_kendo_angular_dropdowns__ = __webpack_require__("./node_modules/@progress/kendo-angular-dropdowns/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__progress_kendo_angular_dialog__ = __webpack_require__("./node_modules/@progress/kendo-angular-dialog/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__taskcenter_service__ = __webpack_require__("./src/app/modules/taskcenter/taskcenter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__task_main_task_main_component__ = __webpack_require__("./src/app/modules/taskcenter/task-main/task-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__task_list_task_list_component__ = __webpack_require__("./src/app/modules/taskcenter/task-list/task-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__task_nav_task_nav_component__ = __webpack_require__("./src/app/modules/taskcenter/task-nav/task-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__task_detail_task_detail_component__ = __webpack_require__("./src/app/modules/taskcenter/task-detail/task-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__task_dialog_task_dialog_component__ = __webpack_require__("./src/app/modules/taskcenter/task-dialog/task-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__task_flowchart_task_flowchart_component__ = __webpack_require__("./src/app/modules/taskcenter/task-flowchart/task-flowchart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__form_query_form_query_component__ = __webpack_require__("./src/app/modules/taskcenter/form-query/form-query.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__task_list_toolbar_task_list_toolbar_component__ = __webpack_require__("./src/app/modules/taskcenter/task-list-toolbar/task-list-toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__plugin_container_plugin_container_component__ = __webpack_require__("./src/app/modules/taskcenter/plugin-container/plugin-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__taskcenter_routes__ = __webpack_require__("./src/app/modules/taskcenter/taskcenter.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__eventbus_event_bus__ = __webpack_require__("./src/app/modules/taskcenter/eventbus/event-bus.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__taskList__ = __webpack_require__("./src/app/modules/taskcenter/taskList.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var TaskcenterModule = /** @class */ (function () {
    function TaskcenterModule() {
    }
    TaskcenterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                // BrowserModule,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["RouterModule"],
                __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_buttons__["ButtonsModule"],
                __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_grid__["GridModule"],
                __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_inputs__["InputsModule"],
                __WEBPACK_IMPORTED_MODULE_8__progress_kendo_angular_label__["LabelModule"],
                __WEBPACK_IMPORTED_MODULE_9__progress_kendo_angular_layout__["LayoutModule"],
                __WEBPACK_IMPORTED_MODULE_11__progress_kendo_angular_dialog__["WindowModule"],
                __WEBPACK_IMPORTED_MODULE_10__progress_kendo_angular_dropdowns__["DropDownsModule"],
                __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_treeview__["TreeViewModule"],
                __WEBPACK_IMPORTED_MODULE_22__taskcenter_routes__["TaskcenterRoots"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__task_main_task_main_component__["TaskMainComponent"],
                __WEBPACK_IMPORTED_MODULE_14__task_list_task_list_component__["TaskListComponent"],
                __WEBPACK_IMPORTED_MODULE_15__task_nav_task_nav_component__["TaskNavComponent"],
                __WEBPACK_IMPORTED_MODULE_16__task_detail_task_detail_component__["TaskDetailComponent"],
                __WEBPACK_IMPORTED_MODULE_17__task_dialog_task_dialog_component__["TaskDialogComponent"],
                __WEBPACK_IMPORTED_MODULE_19__form_query_form_query_component__["FormQueryComponent"],
                __WEBPACK_IMPORTED_MODULE_18__task_flowchart_task_flowchart_component__["TaskFlowchartComponent"],
                __WEBPACK_IMPORTED_MODULE_20__task_list_toolbar_task_list_toolbar_component__["TaskListToolbarComponent"],
                __WEBPACK_IMPORTED_MODULE_21__plugin_container_plugin_container_component__["PluginContainerComponent"]
            ],
            entryComponents: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__taskcenter_service__["TaskCenterService"],
                __WEBPACK_IMPORTED_MODULE_24__taskList__["TaskList"],
                __WEBPACK_IMPORTED_MODULE_23__eventbus_event_bus__["EventBus"]
            ],
        })
    ], TaskcenterModule);
    return TaskcenterModule;
}());



/***/ }),

/***/ "./src/app/modules/taskcenter/taskcenter.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskcenterRoots", function() { return TaskcenterRoots; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__task_detail_task_detail_component__ = __webpack_require__("./src/app/modules/taskcenter/task-detail/task-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_flowchart_task_flowchart_component__ = __webpack_require__("./src/app/modules/taskcenter/task-flowchart/task-flowchart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__form_query_form_query_component__ = __webpack_require__("./src/app/modules/taskcenter/form-query/form-query.component.ts");




var routes = [
    // { path: '', component: TaskMainComponent },
    { path: 'detail/:operator', component: __WEBPACK_IMPORTED_MODULE_1__task_detail_task_detail_component__["TaskDetailComponent"] },
    { path: 'flowchart', component: __WEBPACK_IMPORTED_MODULE_2__task_flowchart_task_flowchart_component__["TaskFlowchartComponent"] },
    { path: 'formquery', component: __WEBPACK_IMPORTED_MODULE_3__form_query_form_query_component__["FormQueryComponent"] }
];
var TaskcenterRoots = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/modules/taskcenter/taskcenter.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskCenterService", function() { return TaskCenterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
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



// import { ListData } from './assets/mockData';
var TaskCenterService = /** @class */ (function () {
    function TaskCenterService(http) {
        this.http = http;
        this.TASK_CATTEGORY = '/api/runtime/wf/v1.0/taskcategories';
        this.TASK_LIST = '/api/runtime/wf/v1.0/GSPTaskInfos';
        if (!__WEBPACK_IMPORTED_MODULE_1__environments_environment__["environment"].production) {
            var host = 'http://localhost:5000';
            this.TASK_LIST = host + this.TASK_LIST;
            this.TASK_CATTEGORY = host + this.TASK_CATTEGORY;
        }
    }
    /**
     * 查询任务分类
     */
    TaskCenterService.prototype.fetchTaskCategories = function () {
        var requestUrl = this.TASK_CATTEGORY;
        return this.http.get(requestUrl);
    };
    /**
     * 查询任务列表
     * @param skip skip
     * @param top top
     * @param filter filter
     */
    TaskCenterService.prototype.fetchTaskList = function (skip, top, filter) {
        var requestUrl = this.TASK_LIST + '?$skip=' + skip + '&$top=' + top + '&$orderby=StartTime&$count=true&$filter=' + filter;
        return this.http.get(requestUrl);
    };
    /**
     * 查询任务配置
     * @param categoryId categoryId
     */
    TaskCenterService.prototype.fetchTaskConfig = function (categoryId) {
        var requestUrl = "/api/runtime/wf/v1.0/taskconfigs/categoryId/" + categoryId;
        return this.http.get(requestUrl);
    };
    TaskCenterService.prototype.excuteTask = function (taskId, circulationType) {
        var url = "/api/runtime/wf/v1.0/Complete";
        var options = {
            completeContext: {
                TaskId: taskId,
                CirculationType: circulationType
            }
        };
        return this.http.post(url, options);
    };
    /**
     * 转换
     * @param jsonObj Object
     */
    TaskCenterService.prototype.toUpperCase = function (jsonObj) {
        if (typeof (jsonObj) === 'object') {
            for (var _i = 0, _a = Object.keys(jsonObj); _i < _a.length; _i++) {
                var key = _a[_i];
                jsonObj[key.substring(0, 1).toUpperCase() + key.substring(1)] = jsonObj[key];
                delete (jsonObj[key]);
            }
        }
        return jsonObj;
    };
    TaskCenterService.prototype.toLowCase = function (jsonObj) {
        if (typeof (jsonObj) === 'object') {
            for (var _i = 0, _a = Object.keys(jsonObj); _i < _a.length; _i++) {
                var key = _a[_i];
                jsonObj[key.substring(0, 1).toLowerCase() + key.substring(1)] = jsonObj[key];
                delete (jsonObj[key]);
            }
        }
        return jsonObj;
    };
    TaskCenterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__gsp_sys_rtf_common__["HttpService"]])
    ], TaskCenterService);
    return TaskCenterService;
}());



/***/ })

},[],["angular","rtf","progress","rxjs"],["angular","rtf","progress","rxjs"]);
//# sourceMappingURL=task-had-done.module.chunk.js.map