webpackJsonp(["state-machine.module"],{

/***/ "./src/packages/state-machine/package.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateMachinePackage", function() { return StateMachinePackage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state_machine_state_machine_package_view__ = __webpack_require__("./src/packages/state-machine/state_machine/state_machine_package_view.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit__ = __webpack_require__("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit__);
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


var StateMachinePackage = (function (_super) {
    __extends(StateMachinePackage, _super);
    function StateMachinePackage(gsp, cfr, injector) {
        var _this = _super.call(this, gsp) || this;
        _this.cfr = cfr;
        _this.injector = injector;
        return _this;
    }
    StateMachinePackage.prototype.activate = function (state) {
        var _this = this;
        this.gsp.workspace.addOpener(function (uri) {
            return _this.openStateMachine(uri);
        });
    };
    StateMachinePackage.prototype.openStateMachine = function (uri) {
        if (uri.endsWith('.wsm')) {
            var packageView_1 = new __WEBPACK_IMPORTED_MODULE_0__state_machine_state_machine_package_view__["StateMachinePackageView"]({}, this.cfr, this.injector);
            // tslint:disable-next-line:no-unused-expression
            packageView_1.getElement().instance.uri = uri;
            return {
                getTitle: function () { return '状态机元数据 - ' + uri.slice(uri.lastIndexOf('/') + 1); },
                getElement: function () { return packageView_1.getElement(); }
            };
        }
    };
    return StateMachinePackage;
}(__WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit__["Package"]));



/***/ }),

/***/ "./src/packages/state-machine/state-machine.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateMachinModule", function() { return StateMachinModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state_machine_state_machine_component__ = __webpack_require__("./src/packages/state-machine/state_machine/state_machine.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__package__ = __webpack_require__("./src/packages/state-machine/package.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_ide_devkit__ = __webpack_require__("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_ide_devkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__farris_ide_devkit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
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






var monacoConfig = {
    baseUrl: './assets',
    defaultOptions: { scrollBeyondLastLine: false },
    onMonacoLoad: function () {
    }
};
var StateMachinModule = (function (_super) {
    __extends(StateMachinModule, _super);
    function StateMachinModule(cfr, injector) {
        var _this = _super.call(this) || this;
        _this.cfr = cfr;
        _this.injector = injector;
        return _this;
    }
    StateMachinModule.prototype.initPackage = function (gsp) {
        this.package = new __WEBPACK_IMPORTED_MODULE_1__package__["StateMachinePackage"](gsp, this.cfr, this.injector);
        // throw new Error('Method not implemented.');
    };
    StateMachinModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__farris_ide_devkit__["AngularMonacoEditorModule"].forRoot(monacoConfig)
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_0__state_machine_state_machine_component__["StateMachineComponent"]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_0__state_machine_state_machine_component__["StateMachineComponent"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_core__["ComponentFactoryResolver"], __WEBPACK_IMPORTED_MODULE_5__angular_core__["Injector"]])
    ], StateMachinModule);
    return StateMachinModule;
}(__WEBPACK_IMPORTED_MODULE_2__farris_ide_devkit__["PackageModule"]));

//# sourceMappingURL=state-machine.module.js.map

/***/ }),

/***/ "./src/packages/state-machine/state_machine/state_machine.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* .controlMatadataEditorContainer {\r\n  display: block;\r\n  position: absolute;\r\n  top: 65px;\r\n  bottom: 0px;\r\n  left: 0px;\r\n  right: 0px;\r\n}\r\n\r\n \r\n.controlMatadataEditorContainer .controlMatadataEditor {\r\n  height: calc(100vh - 0px);\r\n} */\r\n\r\n.controlMatadataEditorContainer .controlMatadataEditor {\r\n  position: absolute;\r\n  top: 65px;\r\n  bottom: 0px;\r\n  left: 0px;\r\n  right: 0px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/state-machine/state_machine/state_machine.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"k-button k-outline k-state-active\" (click)=\"saveForm()\">Save</button>\r\n<div class=\"controlMatadataEditorContainer\">\r\n    <angular-monaco-editor [options]=\"options\" class=\"controlMatadataEditor\" [(ngModel)]=\"content\" (onInit)=\"onInitHandler($event)\"></angular-monaco-editor>\r\n</div>"

/***/ }),

/***/ "./src/packages/state-machine/state_machine/state_machine.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateMachineComponent", function() { return StateMachineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gsp_lcm_metadata_selector__ = __webpack_require__("./node_modules/@gsp-lcm/metadata-selector/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gsp_lcm_metadata_selector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__gsp_lcm_metadata_selector__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_ide_devkit_services_cache__ = __webpack_require__("./node_modules/@farris/ide-devkit/services/cache/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_ide_devkit_services_cache___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__farris_ide_devkit_services_cache__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StateMachineComponent = (function () {
    function StateMachineComponent(metadataService, cache) {
        this.metadataService = metadataService;
        this.cache = cache;
        this.options = {
            theme: 'vs-dark',
            language: 'json'
        };
        this.sessionId = this.cache.get('sessionId');
    }
    Object.defineProperty(StateMachineComponent.prototype, "uri", {
        /**
         * Getter uri
         * @return {string}
         */
        get: function () {
            return this._uri;
        },
        /**
         * Setter uri
         * @param {string} value
         */
        set: function (value) {
            this._uri = value;
            var arr = value.split('\/');
            var path = '\/projects';
            for (var i = 1; i < arr.length - 1; i++) {
                path = path + '\/' + arr[i];
            }
            this.getMetadata(arr[arr.length - 1], path);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 保存修改后的控件元数据
     */
    StateMachineComponent.prototype.saveForm = function () {
        this.metadataDto.content = this.content;
        this.metadataService.SaveMetadata(this.metadataDto, this.sessionId).subscribe(function (data) {
            alert('保存成功！');
        }, function (error) {
            alert('保存失败！');
        });
    };
    /**
     * 获取元数据信息
     */
    StateMachineComponent.prototype.getMetadata = function (fullname, path) {
        var _this = this;
        this.metadataService.LoadMetadata(fullname, path).subscribe(function (data) {
            _this.metadataDto = data;
            _this.content = data.content;
        });
    };
    /**
     * 代码编辑器自动格式化
     * @param event 打开编辑器事件
     */
    StateMachineComponent.prototype.onInitHandler = function (event) {
        setTimeout(function () {
            event.editor.getAction('editor.action.formatDocument').run().then(null);
        }, 200);
    };
    StateMachineComponent.prototype.ngOnInit = function () {
    };
    StateMachineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-state_machine',
            template: __webpack_require__("./src/packages/state-machine/state_machine/state_machine.component.html"),
            styles: [__webpack_require__("./src/packages/state-machine/state_machine/state_machine.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__gsp_lcm_metadata_selector__["GSPMetadataService"], __WEBPACK_IMPORTED_MODULE_2__farris_ide_devkit_services_cache__["CacheService"]])
    ], StateMachineComponent);
    return StateMachineComponent;
}());



/***/ }),

/***/ "./src/packages/state-machine/state_machine/state_machine_package_view.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateMachinePackageView", function() { return StateMachinePackageView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state_machine_component__ = __webpack_require__("./src/packages/state-machine/state_machine/state_machine.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit__ = __webpack_require__("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit__);
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


var StateMachinePackageView = (function (_super) {
    __extends(StateMachinePackageView, _super);
    function StateMachinePackageView(serializedState, cfr, injector) {
        var _this = _super.call(this, serializedState) || this;
        _this.cfr = cfr;
        _this.injector = injector;
        var factory = _this.cfr.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_0__state_machine_component__["StateMachineComponent"]);
        _this.element = factory.create(_this.injector);
        return _this;
    }
    return StateMachinePackageView;
}(__WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit__["PackageView"]));



/***/ })

},[]);
//# sourceMappingURL=state-machine.module.chunk.js.map