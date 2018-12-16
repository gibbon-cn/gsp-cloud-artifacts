webpackJsonp(["todo.module"],{

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

/***/ "./src/app/modules/todo/approval/approval.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    height: 100%;\r\n  }"

/***/ }),

/***/ "./src/app/modules/todo/approval/approval.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <nav aria-label=\"breadcrumb\" role=\"navigation\">\r\n  <ol class=\"breadcrumb\">\r\n    <li class=\"breadcrumb-item\">\r\n      <a>首页</a>\r\n    </li>\r\n    <li class=\"breadcrumb-item active\">待办任务</li>\r\n  </ol>\r\n</nav> -->\r\n<div class=\"container-fluid d-flex h-100 flex-column\">\r\n  <div class=\"d-flex pb-3\">\r\n    <div style=\"padding-top: 10px\">\r\n      <img src=\"./assets/img/analytics-42.png\" style=\"width:64px;height:64px;\" class=\"rounded\">\r\n      <h4 class=\"d-inline pl-3\">\r\n        <a (click)=\"navigateTo('main/todo')\" class=\"g-pointer\">任务中心</a> / 审批</h4>\r\n    </div>\r\n    <div class=\"mx-auto\"></div>\r\n    <div class=\"mx-right\" style=\"padding-top: 10px\">\r\n      <button kendoButton [primary]=\"true\" (click)=\"approval('','Circulate')\">\r\n        <i class=\"material-icons align-middle\" style=\"font-size:18px\" >add</i> {{circulateBtn}}\r\n      </button>\r\n      <button kendoButton [hidden]=\"rejectBtn\" (click)=\"approval('','Reject')\">\r\n        <i class=\"material-icons align-middle\" style=\"font-size:18px\">edit</i> 驳回\r\n      </button>\r\n      <button kendoButton [hidden]=\"AddPreParticipantBtn\" (click)=\"AddPreParticipant()\">\r\n        <i class=\"material-icons align-middle\" style=\"font-size:18px\">edit</i> 加签\r\n      </button>\r\n      <button kendoButton (click)=\"approval('','Terminate')\">\r\n        <span class=\"k-icon k-i-cancel\" style=\"font-size:18px\"></span> 终止流程\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"d-flex h-100\">\r\n    <div class=\"w-100\" style=\"overflow-y:auto;\">\r\n      <kendo-tabstrip class=\"w-100\">\r\n        <kendo-tabstrip-tab [title]=\"'基本信息'\" [selected]=\"true\">\r\n          <ng-template kendoTabContent>\r\n            <div class=\"d-flex\">\r\n              <form class=\"k-form col-12\" style=\"max-width:800px;\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-12\">\r\n                    <label class=\"k-form-field\">\r\n                      <span>任务名称\r\n                        <span class=\"k-required\">*</span>\r\n                      </span>\r\n                      <input class=\"k-textbox\" placeholder=\"任务简述\" [value]=\"name\"/>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-6 \">  \r\n                      <label class=\"k-form-field\">\r\n                        <span>审批结论\r\n                          <span class=\"k-required\">*</span>\r\n                        </span>\r\n                        <kendo-combobox [data]=\"SPYLList\" [value]=\"'通过'\">\r\n                        </kendo-combobox>\r\n                      </label>\r\n                      <label class=\"k-form-field\">\r\n                        <span>审批意见\r\n                          <span class=\"k-required\">*</span>\r\n                        </span>\r\n                        <input class=\"k-textbox\" placeholder=\"请输入审批意见\" />\r\n                      </label>\r\n                  </div>\r\n                  <div class=\"col-6 \">\r\n                      <label class=\"k-form-field\">\r\n                        <span>提交人\r\n                          <span class=\"k-required\">*</span>\r\n                        </span>\r\n                        <input class=\"k-textbox\"  [value]=\"submitter\"/>\r\n                      </label>\r\n                      <label class=\"k-form-field\">\r\n                        <span>提交时间\r\n                          <span class=\"k-required\">*</span>\r\n                        </span>\r\n                        <input class=\"k-textbox\" [value]=\"startedDate\" />\r\n                      </label>\r\n                  </div>\r\n                  <div class=\"col-6 \">\r\n                    <label class=\"k-form-field\">\r\n                      <span>加签列表\r\n                      </span>\r\n                      <kendo-multiselect [data]=\"listItems\" [(ngModel)]=\"dropdownValue\" [ngModelOptions]=\"{standalone: true}\"></kendo-multiselect>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </ng-template>\r\n        </kendo-tabstrip-tab>\r\n      </kendo-tabstrip>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/todo/approval/approval.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovalComponent", function() { return ApprovalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo_service__ = __webpack_require__("./src/app/modules/todo/todo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { Subscription } from '../../../../library/rxjs.lib';

//import { switchMap } from '../../../../library/rxjs.lib';
var ApprovalComponent = /** @class */ (function () {
    function ApprovalComponent(todoService, actRoute, router) {
        // this.subscription=this.todoService.getSelectedRow().(value=>{
        //   console.log(value);
        //   this.workitemName=value.name;
        // })
        // this.workitem = this.todoService.cache["currentItem"];
        var _this = this;
        this.todoService = todoService;
        this.actRoute = actRoute;
        this.router = router;
        this.rejectBtn = false;
        this.AddPreParticipantBtn = false;
        //subscription: Subscription;
        this.SPYLList = [
            '通过', '不通过'
        ];
        this.listItems = ['lizhichao', 'wangjiazhao', 'zhoulijie', 'taoshunhang'];
        // this.todoService.cache = {};
        this.actRoute.queryParams.subscribe(function (params) {
            _this.name = params['name'];
            _this.submitter = params['creator'];
            _this.startedDate = params['startedDate'];
            _this.workitemID = params['id'];
            _this.actDefID = params['activityDefinitionId'];
            if (_this.actDefID == "startEvent") {
                _this.circulateBtn = "重新提交";
                _this.rejectBtn = true;
                _this.isStartAct = true;
            }
            else {
                _this.circulateBtn = "审批";
                _this.rejectBtn = false;
                _this.isStartAct = false;
            }
        });
        //this.name= this.route.snapshot.params['id'];
    }
    ApprovalComponent.prototype.ngOnInit = function () {
    };
    ApprovalComponent.prototype.ngOnDestroy = function () {
        //this.subscription.unsubscribe();
    };
    ApprovalComponent.prototype.approval = function (workitemID, circulationType) {
        var _this = this;
        this.todoService.approval(this.workitemID, circulationType).subscribe(function (value) {
            if (value.taskId != null && value.taskId != "") {
                var message = "";
                switch (circulationType) {
                    case "Circulate":
                        message = _this.isStartAct ? "重新提交成功！" : "审批成功，工作项ID为：" + value.taskId;
                        alert(message);
                        break;
                    case "Reject":
                        alert("已成功驳回！");
                        break;
                    case "Terminate":
                        message = _this.isStartAct ? "放弃重新提交，流程终止！" : "流程终止！";
                        alert(message);
                        break;
                    default:
                        break;
                }
                _this.router.navigateByUrl('main/todo');
            }
        });
    };
    ApprovalComponent.prototype.AddPreParticipant = function () {
        var _this = this;
        this.todoService.AddPreParticipant(this.workitemID, this.dropdownValue).subscribe(function (value) {
            alert("加签成功，当前工作项id为：" + value.taskId);
            _this.router.navigateByUrl('main/todo');
        });
    };
    ApprovalComponent.prototype.navigateTo = function (url) {
        if (url) {
            this.router.navigateByUrl(url);
        }
    };
    ApprovalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-approval',
            template: __webpack_require__("./src/app/modules/todo/approval/approval.component.html"),
            styles: [__webpack_require__("./src/app/modules/todo/approval/approval.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__todo_service__["TodoService"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
    ], ApprovalComponent);
    return ApprovalComponent;
}());



/***/ }),

/***/ "./src/app/modules/todo/todo.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoModule", function() { return TodoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_buttons__ = __webpack_require__("./node_modules/@progress/kendo-angular-buttons/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_grid__ = __webpack_require__("./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_inputs__ = __webpack_require__("./node_modules/@progress/kendo-angular-inputs/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_label__ = __webpack_require__("./node_modules/@progress/kendo-angular-label/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__progress_kendo_angular_layout__ = __webpack_require__("./node_modules/@progress/kendo-angular-layout/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__progress_kendo_angular_dropdowns__ = __webpack_require__("./node_modules/@progress/kendo-angular-dropdowns/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__progress_kendo_angular_dialog__ = __webpack_require__("./node_modules/@progress/kendo-angular-dialog/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__todo_routes__ = __webpack_require__("./src/app/modules/todo/todo.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__todo_todo_component__ = __webpack_require__("./src/app/modules/todo/todo/todo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__tododetail_tododetail_component__ = __webpack_require__("./src/app/modules/todo/tododetail/tododetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__approval_approval_component__ = __webpack_require__("./src/app/modules/todo/approval/approval.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__todo_service__ = __webpack_require__("./src/app/modules/todo/todo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var TodoModule = /** @class */ (function () {
    function TodoModule() {
    }
    TodoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["RouterModule"],
                __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_buttons__["ButtonsModule"],
                __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_grid__["GridModule"],
                __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_inputs__["InputsModule"],
                __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_label__["LabelModule"],
                __WEBPACK_IMPORTED_MODULE_8__progress_kendo_angular_layout__["LayoutModule"],
                __WEBPACK_IMPORTED_MODULE_10__progress_kendo_angular_dialog__["WindowModule"],
                __WEBPACK_IMPORTED_MODULE_9__progress_kendo_angular_dropdowns__["DropDownsModule"],
                // DatePickerModule,
                // StateMachineModule,
                // DirectiveModule,
                __WEBPACK_IMPORTED_MODULE_11__todo_routes__["TodoRoots"],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_12__todo_todo_component__["TodoComponent"], __WEBPACK_IMPORTED_MODULE_13__tododetail_tododetail_component__["TodoDetailComponent"], __WEBPACK_IMPORTED_MODULE_14__approval_approval_component__["ApprovalComponent"]],
            //declarations: [TodoComponent],
            entryComponents: [],
            providers: [__WEBPACK_IMPORTED_MODULE_15__todo_service__["TodoService"]]
        })
    ], TodoModule);
    return TodoModule;
}());

//# sourceMappingURL=todo.module.js.map

/***/ }),

/***/ "./src/app/modules/todo/todo.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoRoots", function() { return TodoRoots; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo_todo_component__ = __webpack_require__("./src/app/modules/todo/todo/todo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tododetail_tododetail_component__ = __webpack_require__("./src/app/modules/todo/tododetail/tododetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__approval_approval_component__ = __webpack_require__("./src/app/modules/todo/approval/approval.component.ts");




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__todo_todo_component__["TodoComponent"] },
    { path: 'details', component: __WEBPACK_IMPORTED_MODULE_2__tododetail_tododetail_component__["TodoDetailComponent"] },
    { path: 'approval', component: __WEBPACK_IMPORTED_MODULE_3__approval_approval_component__["ApprovalComponent"] }
];
var TodoRoots = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/modules/todo/todo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gsp_sys_rtf_common_common_shared_services_httpservice_http_service__ = __webpack_require__("./node_modules/@gsp-sys/rtf-common/common-shared/services/httpservice/http.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gsp_sys_rtf_common_common_shared_services_httpservice_http_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__gsp_sys_rtf_common_common_shared_services_httpservice_http_service__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoService = /** @class */ (function () {
    function TodoService(http) {
        this.http = http;
        this.heroesUrl = '/api/runtime/wf/v1.0';
        // private heroesUrl ='http://localhost:5000/api/runtime/wf/v1.0'
        // private subject: Subject<WorktitemInfo> = new Subject<WorktitemInfo>();
        // private subject: Subject<any> = new Subject<any>();
        this.cache = {};
    }
    TodoService.prototype.getToDoList = function (index, size) {
        var url = this.heroesUrl + "/workitem/tasks?pageIndex=" + index + "&pageSize=" + size;
        return this.http.get(url);
        // return this.http.request('get',url);
    };
    TodoService.prototype.startWorkflow = function (procDefKey, procInsName, procInsSchema, bizID, description) {
        var url = this.heroesUrl + "/wfrt/startWorkflowByKey/" + procDefKey;
        // 改用框架封装的httpservice，暂时屏蔽
        // const httpOptions = {
        //   headers: new HttpHeaders({
        //     'Content-Type':  'application/json',
        //     'Access-Control-Allow-Origin': '*'
        //   })
        // };
        return this.http.post(url, {
            'ProcessInstanceName': procInsName,
            'Description': description,
            'bizId': bizID,
            'paras': procInsSchema
        });
    };
    TodoService.prototype.approval = function (workitemID, circulationType) {
        var url = this.heroesUrl + "/wfrt/complete/" + workitemID;
        // const httpOptions = {
        //   headers: new HttpHeaders({
        //     'Content-Type':  'application/json',
        //     'Access-Control-Allow-Origin': '*'
        //   })
        // };
        return this.http.post(url, { 'CirculationType': circulationType });
    };
    TodoService.prototype.AddPreParticipant = function (workitemID, participantList) {
        var url = this.heroesUrl + "/wfrt/AddPreParticipant/" + workitemID;
        return this.http.post(url, participantList);
    };
    TodoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__gsp_sys_rtf_common_common_shared_services_httpservice_http_service__["HttpService"]])
    ], TodoService);
    return TodoService;
}());



/***/ }),

/***/ "./src/app/modules/todo/todo/todo.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  height: 100%;\r\n}"

/***/ }),

/***/ "./src/app/modules/todo/todo/todo.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <nav aria-label=\"breadcrumb\" role=\"navigation\">\r\n    <ol class=\"breadcrumb\">\r\n      <li class=\"breadcrumb-item\">\r\n        <a routerLink=\"/main\">首页</a>\r\n      </li>\r\n      <li class=\"breadcrumb-item active\">任务中心</li>\r\n    </ol>\r\n  </nav> -->\r\n  <div class=\"container-fluid d-flex h-100 flex-column\">\r\n    <div class=\"d-flex mb-3\">\r\n      <div style=\"width:200px; padding-top: 10px\">\r\n        <img src=\"./assets/img/analytics-96.png\" style=\"width:64px;height:64px;\" class=\"rounded\">\r\n        <h3 class=\"d-inline pl-3\">任务中心</h3>\r\n      </div>\r\n      <div class=\"mx-auto\"></div>\r\n      <div class=\"mx-right\" style=\"padding-top: 10px\">\r\n        <button kendoButton [primary]=\"true\" routerLink=\"details\">\r\n          <i class=\"material-icons align-middle\" style=\"font-size:18px\">add</i> 启动流程\r\n        </button>\r\n        <button kendoButton [routerLink]=\"['approval']\" [queryParams]=\"selectedWorkitem\" [disabled]=\"enable\">\r\n          <i class=\"material-icons align-middle\" style=\"font-size:18px\">edit</i> 审批\r\n        </button>\r\n        <button kendoButton [disabled]=\"enable\">\r\n          <i class=\"material-icons align-middle\" style=\"font-size:18px\">delete</i> 删除\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"d-flex mb-2\" style=\"height:36px;\">\r\n      <div class=\"mr-auto\"></div>\r\n      <button kendoButton class=\"p-0 mr-1\" style=\"width:28px;height:28px;\">\r\n        <i class=\"material-icons align-middle\">view_compact</i>\r\n      </button>\r\n      <button kendoButton class=\"p-0 mr-1\" style=\"width:28px;height:28px;\">\r\n        <i class=\"material-icons align-middle\">view_comfy</i>\r\n      </button>\r\n      <button kendoButton class=\"p-0 mr-1\" style=\"width:28px;height:28px;\">\r\n        <i class=\"material-icons align-middle\">view_list</i>\r\n      </button>\r\n      <button kendoButton class=\"p-0 mr-1\" style=\"width:28px;height:28px;\">\r\n        <i class=\"material-icons align-middle\">event_note</i>\r\n      </button>\r\n      <button kendoButton class=\"p-0 mr-1\" style=\"width:28px;height:28px;\">\r\n        <i class=\"material-icons align-middle\">show_chart</i>\r\n      </button>\r\n    </div>\r\n    <div class=\"d-flex flex-column h-100\">\r\n      <kendo-grid class=\"h-100\" [data]=\"gridView\" [resizable]=\"true\" [pageable]=\"true\" \r\n      [pageSize]=\"pageSize\" [selectable]=\"selectableSettings\" [skip]=\"skip\" (pageChange)=\"pageChange($event)\" \r\n      (selectionChange)=\"OnSelectionChange($event)\" >\r\n        <kendo-grid-column field=\"id\" title=\"ID\" [hidden]=\"true\"></kendo-grid-column>\r\n        <kendo-grid-column field=\"ActivityDefinitionId\" title=\"ActivityDefinitionId\" [hidden]=\"true\"></kendo-grid-column>\r\n        <kendo-grid-column field=\"name\" title=\"名称\" ></kendo-grid-column>\r\n        <kendo-grid-column field=\"participant\" title=\"参与者\"></kendo-grid-column>\r\n        <kendo-grid-column field=\"state\" title=\"状态\"></kendo-grid-column>\r\n        <kendo-grid-column field=\"creator\" title=\"发起人\"></kendo-grid-column>\r\n        <kendo-grid-column field=\"startedDate\" title=\"开始日期\" ></kendo-grid-column>\r\n        <kendo-grid-column field=\"completedDate\" title=\"完成日期\"></kendo-grid-column>\r\n\r\n      </kendo-grid>\r\n    </div>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/modules/todo/todo/todo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo_service__ = __webpack_require__("./src/app/modules/todo/todo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__telerik_kendo_intl__ = __webpack_require__("./node_modules/@telerik/kendo-intl/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import {WorktitemInfo} from './task';


var TodoComponent = /** @class */ (function () {
    function TodoComponent(todoService, router, actRoute) {
        this.todoService = todoService;
        this.router = router;
        this.actRoute = actRoute;
        this.todoList = new Array();
        this.pageIndex = 1;
        this.pageSize = 10;
        this.skip = 0;
        this.enable = true;
        this.selectableSettings = {
            enabled: true,
            mode: 'single'
        };
        //this.todoViewModule=new ToDoViewModel();
    }
    // navigateTTo(){
    //   this.actRoute.queryParams=this.selectedWorkitem;
    //   this.router.navigateByUrl('main/todo/approval');
    // }
    TodoComponent.prototype.getToDoList = function () {
        var _this = this;
        this.todoService.getToDoList(this.skip / this.pageSize + 1, this.pageSize)
            .subscribe(function (value) {
            console.log(value);
            _this.todoList = value.result;
            _this.todoList.forEach(function (element) {
                element.startedDate = Object(__WEBPACK_IMPORTED_MODULE_2__telerik_kendo_intl__["formatDate"])(new Date(element.startedDate), "yyyy/MM/dd HH:mm:ss");
                element.completedDate = Object(__WEBPACK_IMPORTED_MODULE_2__telerik_kendo_intl__["formatDate"])(new Date(element.completedDate), "yyyy/MM/dd HH:mm:ss");
            });
            _this.gridView = {
                data: _this.todoList,
                total: value.totalCount
            };
        });
    };
    TodoComponent.prototype.pageChange = function (event) {
        this.skip = event.skip;
        this.getToDoList();
    };
    TodoComponent.prototype.OnSelectionChange = function (event) {
        this.enable = false;
        if (event.selected) {
            this.selectedWorkitem = event.selectedRows[0].dataItem;
            //this.todoService.cache["currentItem"] = this.selectedWorkitem;
            //this.todoService.setSelectedRow(event.selectedRows[0].dataItem);
        }
    };
    TodoComponent.prototype.ngOnInit = function () {
        this.getToDoList();
    };
    TodoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-todo',
            template: __webpack_require__("./src/app/modules/todo/todo/todo.component.html"),
            styles: [__webpack_require__("./src/app/modules/todo/todo/todo.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__todo_service__["TodoService"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"]])
    ], TodoComponent);
    return TodoComponent;
}());



/***/ }),

/***/ "./src/app/modules/todo/tododetail/tododetail.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  height: 100%;\r\n}"

/***/ }),

/***/ "./src/app/modules/todo/tododetail/tododetail.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <nav aria-label=\"breadcrumb\" role=\"navigation\">\r\n    <ol class=\"breadcrumb\">\r\n      <li class=\"breadcrumb-item\">\r\n        <a>首页</a>\r\n      </li>\r\n      <li class=\"breadcrumb-item active\">任务中心</li>\r\n    </ol>\r\n  </nav> -->\r\n  <div class=\"container-fluid d-flex h-100 flex-column\">\r\n    <div class=\"d-flex pb-3\">\r\n      <div style=\"padding-top: 10px\">\r\n        <img src=\"./assets/img/analytics-98.png\" style=\"width:64px;height:64px;\" class=\"rounded\">\r\n        <h4 class=\"d-inline pl-3\">\r\n          <a (click)=\"navigateTo('main/todo')\" class=\"g-pointer\">任务中心</a> / 启动流程</h4>\r\n      </div>\r\n      <div class=\"mx-auto\"></div>\r\n      <div class=\"mx-right\" style=\"padding-top: 10px\">\r\n        <button kendoButton [primary]=\"true\" (click)=\"startWorkflow()\">\r\n          <i class=\"material-icons align-middle\" style=\"font-size:18px\">add</i> 提交审批\r\n        </button>\r\n        <button kendoButton>\r\n          <i class=\"material-icons align-middle\" style=\"font-size:18px\">undo</i> 取消\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"d-flex h-100\">\r\n      <div class=\"w-100\" style=\"overflow-y:auto;\">\r\n        <kendo-tabstrip class=\"w-100\">\r\n          <kendo-tabstrip-tab [title]=\"'基本信息'\" [selected]=\"true\">\r\n            <ng-template kendoTabContent>\r\n              <div class=\"d-flex\">\r\n                <form class=\"k-form col-12\" style=\"max-width:800px;\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-12\">\r\n                      <label class=\"k-form-field\">\r\n                        <span>流程定义key\r\n                          <span class=\"k-required\">*</span>\r\n                        </span>\r\n                        <input #procDefKeyInput class=\"k-textbox\" placeholder=\"请输入流程定义key值\" \r\n                        (keyup.enter)=\"updateProcDefKey(procDefKeyInput.value)\" (blur)=\"updateProcDefKey(procDefKeyInput.value)\"/>\r\n                      </label>\r\n                      <label class=\"k-form-field\">\r\n                        <span>流程实例名称\r\n                          <span class=\"k-required\">*</span>\r\n                        </span>\r\n                        <input #procInsNameInput class=\"k-textbox\" placeholder=\"请输入流程实例名称\" \r\n                        (keyup.enter)=\"updateProcInsName(procInsNameInput.value)\" (blur)=\"updateProcInsName(procInsNameInput.value)\"/>\r\n                      </label>\r\n                      <label class=\"k-form-field\">\r\n                        <span>参数列表\r\n                          <span class=\"k-required\">*</span>\r\n                        </span>\r\n                        <input #procInsSchema class=\"k-textbox\" placeholder=\"请输入流程实例Schema\" \r\n                        (keyup.enter)=\"updateProcInsSchema(procInsSchema.value)\" (blur)=\"updateProcInsSchema(procInsSchema.value)\"/>\r\n                      </label>\r\n                      <label class=\"k-form-field\">\r\n                        <span>描述\r\n                        </span>\r\n                        <input #description class=\"k-textbox\" placeholder=\"请输入描述\" \r\n                        (keyup.enter)=\"updateDescription(description.value)\" (blur)=\"updateDescription(description.value)\"/>\r\n                      </label>\r\n                    </div>\r\n                  </div>\r\n                  <!-- <div class=\"row\">\r\n                    <div class=\"col-6 \">  \r\n                        <label class=\"k-form-field\">\r\n                          <span>业务流程\r\n                            <span class=\"k-required\">*</span>\r\n                          </span>\r\n                          <input #bizIDInput class=\"k-textbox\" placeholder=\"请输入业务流程ID\" \r\n                          (keyup.enter)=\"updateBizID(bizIDInput.value)\" (blur)=\"updateBizID(bizIDInput.value)\"/>\r\n                        </label>\r\n                    </div> -->\r\n                    <!-- <div class=\"col-6 \">\r\n                        <label class=\"k-form-field\">\r\n                          <span>状态\r\n                            <span class=\"k-required\">*</span>\r\n                          </span>\r\n                          <input class=\"k-textbox\" placeholder=\"任务当前状态\" />\r\n                        </label>\r\n                        <label class=\"k-form-field\">\r\n                          <span>优先级\r\n                            <span class=\"k-required\">*</span>\r\n                          </span>\r\n                          <input class=\"k-textbox\" placeholder=\"任务优先级\" />\r\n                        </label>\r\n                    </div> \r\n                  </div>-->\r\n                </form>\r\n              </div>\r\n            </ng-template>\r\n          </kendo-tabstrip-tab>\r\n        </kendo-tabstrip>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/modules/todo/tododetail/tododetail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoDetailComponent", function() { return TodoDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo_service__ = __webpack_require__("./src/app/modules/todo/todo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoDetailComponent = /** @class */ (function () {
    function TodoDetailComponent(todoService, router) {
        this.todoService = todoService;
        this.router = router;
        this.opened = false;
    }
    TodoDetailComponent.prototype.close = function () {
        this.opened = false;
    };
    TodoDetailComponent.prototype.open = function () {
        this.opened = true;
    };
    TodoDetailComponent.prototype.ngOnInit = function () {
    };
    TodoDetailComponent.prototype.updateProcInsName = function (value) { this.procInsName = value; };
    TodoDetailComponent.prototype.updateBizID = function (value) { this.bizID = value; };
    TodoDetailComponent.prototype.updateDescription = function (value) { this.description = value; };
    TodoDetailComponent.prototype.updateProcDefKey = function (value) { this.procDefKey = value; };
    TodoDetailComponent.prototype.updateProcInsSchema = function (value) { this.procInsSchema = value; };
    TodoDetailComponent.prototype.startWorkflow = function () {
        var para = JSON.parse(this.procInsSchema);
        this.todoService.startWorkflow(this.procDefKey, this.procInsName, para, this.bizID, this.description).subscribe(function (value) {
            if (value.processInstanceId != null && value.processInstanceId != "") {
                alert("启动流程成功，流程实例ID为：" + value.processInstanceId);
            }
        });
    };
    TodoDetailComponent.prototype.navigateTo = function (url) {
        if (url) {
            this.router.navigateByUrl(url);
        }
    };
    TodoDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tododetail',
            template: __webpack_require__("./src/app/modules/todo/tododetail/tododetail.component.html"),
            styles: [__webpack_require__("./src/app/modules/todo/tododetail/tododetail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__todo_service__["TodoService"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
    ], TodoDetailComponent);
    return TodoDetailComponent;
}());



/***/ })

},[],["angular","rtf","progress","rxjs"],["angular","rtf","progress","rxjs"]);
//# sourceMappingURL=todo.module.chunk.js.map