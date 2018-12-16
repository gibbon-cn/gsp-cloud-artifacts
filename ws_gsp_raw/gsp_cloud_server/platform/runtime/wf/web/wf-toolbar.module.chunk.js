webpackJsonp(["wf-toolbar.module"],{

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

/***/ "./src/app/modules/taskcenter/toolbar.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolBar", function() { return ToolBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolBarView", function() { return ToolBarView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolBarModule", function() { return ToolBarModule; });
var ToolBar = /** @class */ (function () {
    function ToolBar(taskList) {
        this.taskList = taskList;
        // this.toolBarId = workspace.util.newGuid();
    }
    Object.defineProperty(ToolBar.prototype, "id", {
        get: function () {
            return this.toolBarId;
        },
        set: function (value) {
            this.toolBarId = value;
        },
        enumerable: true,
        configurable: true
    });
    ToolBar.prototype.activate = function (state) {
        this.toolBarView = new ToolBarView(state);
    };
    return ToolBar;
}());

var ToolBarView = /** @class */ (function () {
    function ToolBarView(serializedState) {
    }
    ToolBarView.prototype.getElement = function () {
        return this.element;
    };
    ToolBarView.prototype.serialize = function () {
    };
    return ToolBarView;
}());

var ToolBarModule = /** @class */ (function () {
    function ToolBarModule(taskList) {
        this.taskList = taskList;
    }
    ToolBarModule.prototype.getPackage = function () {
        if (!this.toolbar) {
            this.initPackage();
        }
        return this.toolbar;
    };
    ToolBarModule.prototype.initPackage = function () {
        this.toolbar = new ToolBar(this.taskList);
    };
    return ToolBarModule;
}());



/***/ }),

/***/ "./src/app/modules/wf-toolbar/todo-toolbar/todo-toolbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/wf-toolbar/todo-toolbar/todo-toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mx-auto\"></div>\r\n<div class=\"mx-right\" style=\"padding-top: 10px\">\r\n  <button kendoButton [disabled]=\"enable\" [primary]=\"true\" (click)=\"onApproveClick(0)\">\r\n    <i class=\"material-icons align-middle\" style=\"font-size:18px\">beenhere</i> 通过\r\n  </button>\r\n  <button kendoButton [disabled]=\"enable\" (click)=\"onApproveClick(1)\">\r\n    <i class=\"material-icons align-middle\" style=\"font-size:18px\">beenhere</i> 不通过\r\n  </button>\r\n  <button kendoButton [disabled]=\"enable\" (click)=\"onApproveClick(2)\">\r\n    <i class=\"material-icons align-middle\" style=\"font-size:18px\">reply</i> 驳回至\r\n  </button>\r\n  <button kendoButton [disabled]=\"enable\" routerLink=\"detail/1\">\r\n    <i class=\"material-icons align-middle\" style=\"font-size:18px\">open_in_new</i> 查看\r\n  </button>\r\n  <!--<button kendoButton [disabled]=\"enable\" (click)=\"onApproveClick(2)\">\r\n    <i class=\"material-icons align-middle\" style=\"font-size:18px\">add</i> 批量审批\r\n  </button>\r\n  <button kendoButton [primary]=\"false\" routerLink=\"flowchart\">\r\n    <i class=\"material-icons align-middle\" style=\"font-size:18px\">view_module</i> 查看流程图\r\n  </button>\r\n  <button kendoButton (click)=\"onRefresh()\">\r\n    <i class=\"material-icons align-middle\" style=\"font-size:18px\">refresh</i> 刷新\r\n  </button> -->\r\n</div>"

/***/ }),

/***/ "./src/app/modules/wf-toolbar/todo-toolbar/todo-toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoToolbarComponent", function() { return TodoToolbarComponent; });
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

var TodoToolbarComponent = /** @class */ (function () {
    // @ViewChild('toolbarContainer', { read: ViewContainerRef })
    // container: ViewContainerRef;
    function TodoToolbarComponent() {
        this.enable = true;
        this.btnClickEvt = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    Object.defineProperty(TodoToolbarComponent.prototype, "bizTypeId", {
        get: function () {
            return this._bizTypeId;
        },
        set: function (name) {
            this._bizTypeId = name;
        },
        enumerable: true,
        configurable: true
    });
    TodoToolbarComponent.prototype.ngOnInit = function () {
    };
    TodoToolbarComponent.prototype.onApproveClick = function (v) {
        this.btnClickEvt.emit(v);
    };
    // 回调刷新列表
    TodoToolbarComponent.prototype.onRefresh = function () {
        alert('onRefresh');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], TodoToolbarComponent.prototype, "bizTypeId", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TodoToolbarComponent.prototype, "btnClickEvt", void 0);
    TodoToolbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-todo-toolbar',
            template: __webpack_require__("./src/app/modules/wf-toolbar/todo-toolbar/todo-toolbar.component.html"),
            styles: [__webpack_require__("./src/app/modules/wf-toolbar/todo-toolbar/todo-toolbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TodoToolbarComponent);
    return TodoToolbarComponent;
}());



/***/ }),

/***/ "./src/app/modules/wf-toolbar/todoToolBar.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoToolBar", function() { return TodoToolBar; });
/* unused harmony export TodoToolBarView */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__taskcenter_toolbar__ = __webpack_require__("./src/app/modules/taskcenter/toolbar.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo_toolbar_todo_toolbar_component__ = __webpack_require__("./src/app/modules/wf-toolbar/todo-toolbar/todo-toolbar.component.ts");
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


var TodoToolBar = /** @class */ (function (_super) {
    __extends(TodoToolBar, _super);
    function TodoToolBar(taskList, cfr, injector) {
        var _this = _super.call(this, taskList) || this;
        _this.cfr = cfr;
        _this.injector = injector;
        return _this;
    }
    TodoToolBar.prototype.activate = function (state) {
        if (!this.toolBarView) {
            this.toolBarView = new TodoToolBarView(state, this.cfr, this.injector);
            // 通过设置构件引用展示View
            this.taskList.setCompoment(this.toolBarView.getElement());
            var currentElement = this.toolBarView.getElement().instance;
            // TODO 传递参数
            if (currentElement) {
                // currentElement.databaseObject = this.data;
            }
        }
        // this.taskList.activePackage(this);
    };
    return TodoToolBar;
}(__WEBPACK_IMPORTED_MODULE_0__taskcenter_toolbar__["ToolBar"]));

var TodoToolBarView = /** @class */ (function (_super) {
    __extends(TodoToolBarView, _super);
    function TodoToolBarView(serializedState, cfr, injector) {
        var _this = _super.call(this, serializedState) || this;
        _this.cfr = cfr;
        _this.injector = injector;
        var componentFactory = _this.cfr.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_1__todo_toolbar_todo_toolbar_component__["TodoToolbarComponent"]);
        _this.element = componentFactory.create(_this.injector);
        return _this;
    }
    return TodoToolBarView;
}(__WEBPACK_IMPORTED_MODULE_0__taskcenter_toolbar__["ToolBarView"]));



/***/ }),

/***/ "./src/app/modules/wf-toolbar/wf-toolbar.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WfToolbarModule", function() { return WfToolbarModule; });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__todo_toolbar_todo_toolbar_component__ = __webpack_require__("./src/app/modules/wf-toolbar/todo-toolbar/todo-toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__taskcenter_toolbar__ = __webpack_require__("./src/app/modules/taskcenter/toolbar.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__todoToolBar__ = __webpack_require__("./src/app/modules/wf-toolbar/todoToolBar.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__taskcenter_taskList__ = __webpack_require__("./src/app/modules/taskcenter/taskList.ts");
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














var WfToolbarModule = /** @class */ (function (_super) {
    __extends(WfToolbarModule, _super);
    function WfToolbarModule(cfr, injector, taskList) {
        var _this = _super.call(this, taskList) || this;
        _this.cfr = cfr;
        _this.injector = injector;
        return _this;
    }
    WfToolbarModule.prototype.initPackage = function () {
        this.toolbar = new __WEBPACK_IMPORTED_MODULE_12__todoToolBar__["TodoToolBar"](this.taskList, this.cfr, this.injector);
    };
    WfToolbarModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__progress_kendo_angular_buttons__["ButtonsModule"],
                __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_grid__["GridModule"],
                __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_treeview__["TreeViewModule"],
                __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_inputs__["InputsModule"],
                __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_label__["LabelModule"],
                __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_layout__["LayoutModule"],
                __WEBPACK_IMPORTED_MODULE_8__progress_kendo_angular_dropdowns__["DropDownsModule"],
                __WEBPACK_IMPORTED_MODULE_9__progress_kendo_angular_dialog__["WindowModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__todo_toolbar_todo_toolbar_component__["TodoToolbarComponent"]
            ],
            providers: [],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_10__todo_toolbar_todo_toolbar_component__["TodoToolbarComponent"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"],
            __WEBPACK_IMPORTED_MODULE_13__taskcenter_taskList__["TaskList"]])
    ], WfToolbarModule);
    return WfToolbarModule;
}(__WEBPACK_IMPORTED_MODULE_11__taskcenter_toolbar__["ToolBarModule"]));

//# sourceMappingURL=wf-toolbar.module.js.map

/***/ })

},[],["angular","progress","rxjs"],["angular","progress","rxjs"]);
//# sourceMappingURL=wf-toolbar.module.chunk.js.map