webpackJsonp(["nuget-package.module"],{

/***/ "./src/packages/nuget-wizard/nuget-package.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NugetWizardPackageModule", function() { return NugetWizardPackageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__package__ = __webpack_require__("./src/packages/nuget-wizard/package.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_packageselect_packageselect_component__ = __webpack_require__("./src/packages/nuget-wizard/views/packageselect/packageselect.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_packagelist_packagelist_component__ = __webpack_require__("./src/packages/nuget-wizard/views/packagelist/packagelist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_installedpackagelist_installedpackagelist_component__ = __webpack_require__("./src/packages/nuget-wizard/views/installedpackagelist/installedpackagelist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_packagetab_packagetab_component__ = __webpack_require__("./src/packages/nuget-wizard/views/packagetab/packagetab.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__progress_kendo_angular_treeview__ = __webpack_require__("./node_modules/@progress/kendo-angular-treeview/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__progress_kendo_angular_grid__ = __webpack_require__("./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__farris_ide_devkit__ = __webpack_require__("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__farris_ide_devkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__farris_ide_devkit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__progress_kendo_angular_inputs__ = __webpack_require__("./node_modules/@progress/kendo-angular-inputs/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__gsp_lcm_metadata_selector__ = __webpack_require__("./node_modules/@gsp-lcm/metadata-selector/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__gsp_lcm_metadata_selector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__gsp_lcm_metadata_selector__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__progress_kendo_angular_layout__ = __webpack_require__("./node_modules/@progress/kendo-angular-layout/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__nuget_service__ = __webpack_require__("./src/packages/nuget-wizard/nuget.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__progress_kendo_angular_dropdowns__ = __webpack_require__("./node_modules/@progress/kendo-angular-dropdowns/dist/es/index.js");
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

















var NugetWizardPackageModule = (function (_super) {
    __extends(NugetWizardPackageModule, _super);
    function NugetWizardPackageModule(cfr, injector) {
        var _this = _super.call(this) || this;
        _this.cfr = cfr;
        _this.injector = injector;
        return _this;
    }
    NugetWizardPackageModule.prototype.initPackage = function (gsp) {
        this.package = new __WEBPACK_IMPORTED_MODULE_1__package__["NugetWizardPackage"](gsp, this.cfr, this.injector);
    };
    NugetWizardPackageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_10__farris_ide_devkit__["PopoverModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_12__gsp_lcm_metadata_selector__["GSPMetadataServiceModule"].forRoot(__WEBPACK_IMPORTED_MODULE_13__environments_environment__["environment"].SERVER_IP),
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_8__progress_kendo_angular_treeview__["TreeViewModule"],
                __WEBPACK_IMPORTED_MODULE_9__progress_kendo_angular_grid__["GridModule"],
                __WEBPACK_IMPORTED_MODULE_11__progress_kendo_angular_inputs__["InputsModule"],
                __WEBPACK_IMPORTED_MODULE_14__progress_kendo_angular_layout__["LayoutModule"],
                __WEBPACK_IMPORTED_MODULE_16__progress_kendo_angular_dropdowns__["DropDownsModule"]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__views_packageselect_packageselect_component__["PackageSelectComponent"]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__views_packageselect_packageselect_component__["PackageSelectComponent"], __WEBPACK_IMPORTED_MODULE_3__views_packagelist_packagelist_component__["PackagelistComponent"], __WEBPACK_IMPORTED_MODULE_4__views_installedpackagelist_installedpackagelist_component__["InstalledPackagelistComponent"], __WEBPACK_IMPORTED_MODULE_5__views_packagetab_packagetab_component__["PackagetabComponent"]],
            providers: [__WEBPACK_IMPORTED_MODULE_15__nuget_service__["NugetService"]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__views_packageselect_packageselect_component__["PackageSelectComponent"], __WEBPACK_IMPORTED_MODULE_3__views_packagelist_packagelist_component__["PackagelistComponent"], __WEBPACK_IMPORTED_MODULE_4__views_installedpackagelist_installedpackagelist_component__["InstalledPackagelistComponent"], __WEBPACK_IMPORTED_MODULE_5__views_packagetab_packagetab_component__["PackagetabComponent"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], NugetWizardPackageModule);
    return NugetWizardPackageModule;
}(__WEBPACK_IMPORTED_MODULE_10__farris_ide_devkit__["PackageModule"]));

//# sourceMappingURL=nuget-package.module.js.map

/***/ }),

/***/ "./src/packages/nuget-wizard/nuget.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NugetService", function() { return NugetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SERVER_IP = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["environment"].SERVER_IP;
var NugetService = (function () {
    function NugetService(http) {
        this.http = http;
        // SERVER_IP = 'https://repos.iec.io/repository/nuget-gsp/'; // 临时写死，后期需要读配置文件获取包源
        // SERVER_IP = 'https://localhost:80';
        this.NugetPackage_Base_Path = '/api/dev/main/v1.0/nuget-packages';
        this.Base_Path = '/lcm/nuget/';
        this.packageList = [];
        // tslint:disable-next-line:member-ordering
        this.installedPackageList = [];
    }
    NugetService.prototype.addPackage = function (pack) {
        this.packageList.push(pack);
    };
    NugetService.prototype.clearPackage = function () {
        this.packageList = [];
    };
    NugetService.prototype.addInstalledPackage = function (pack) {
        this.installedPackageList.push(pack);
    };
    NugetService.prototype.clearInstalledPackage = function () {
        this.installedPackageList = [];
    };
    // 获取包源中元数据包的个数
    NugetService.prototype.getNumberOfPackages = function () {
        var url = SERVER_IP + this.NugetPackage_Base_Path + '/total';
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["map"])(function (res) { return res.json(); }));
    };
    // 获取所有的元数据包
    NugetService.prototype.getPackageList = function (filter) {
        // tslint:disable-next-line:max-line-length
        var url = SERVER_IP + this.NugetPackage_Base_Path + '?filter=' + filter;
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["map"])(function (res) { return res.json(); }));
    };
    // 获取单个包的所有版本
    NugetService.prototype.getVersionsOfSinglePackage = function (packName) {
        var url = SERVER_IP + this.NugetPackage_Base_Path + '/single?packName=' + packName;
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["map"])(function (res) { return res.json(); }));
    };
    // 安装nuget
    NugetService.prototype.installPackage = function (projPath, name, version) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'as');
        headers.append('Access-Control-Allow-Origin', '*');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({
            params: {},
            headers: headers
        });
        var url = SERVER_IP + this.NugetPackage_Base_Path + '?projPath=' + projPath + '&name=' + name + '&version=' + version;
        return this.http.put(url, null, options);
    };
    // 卸载nuget
    NugetService.prototype.unInstallPackage = function (projPath, name) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'as');
        headers.append('Access-Control-Allow-Origin', '*');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({
            params: {},
            headers: headers
        });
        var url = SERVER_IP + this.NugetPackage_Base_Path + '?projPath=' + projPath + '&packName=' + name;
        return this.http.patch(url, null, options);
    };
    // 推送nuget包
    NugetService.prototype.pushPackage = function (projPath) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'as');
        headers.append('Access-Control-Allow-Origin', '*');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({
            params: {},
            headers: headers
        });
        var url = SERVER_IP + this.NugetPackage_Base_Path + '?projPath=' + projPath;
        return this.http.post(url, null, options);
    };
    NugetService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
    ], NugetService);
    return NugetService;
}());



/***/ }),

/***/ "./src/packages/nuget-wizard/package.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NugetWizardPackage", function() { return NugetWizardPackage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__ = __webpack_require__("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views__ = __webpack_require__("./src/packages/nuget-wizard/views/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_packageselect_packageselect_component__ = __webpack_require__("./src/packages/nuget-wizard/views/packageselect/packageselect.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nuget_service__ = __webpack_require__("./src/packages/nuget-wizard/nuget.service.ts");
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




var NugetWizardPackage = (function (_super) {
    __extends(NugetWizardPackage, _super);
    function NugetWizardPackage(gsp, cfr, injector) {
        var _this = _super.call(this, gsp) || this;
        _this.cfr = cfr;
        _this.injector = injector;
        _this.nugetService = _this.injector.get(__WEBPACK_IMPORTED_MODULE_3__nuget_service__["NugetService"]);
        return _this;
    }
    NugetWizardPackage.prototype.activate = function (state) {
        var _this = this;
        this.gsp.eventBus.on(null, null, 'Command:metadataPackageManager', this, function () { return _this.showModal(); });
        this.gsp.eventBus.on(null, null, 'Command:metadataPackagePush', this, function () { return _this.push(); });
    };
    NugetWizardPackage.prototype.showModal = function () {
        var _this = this;
        this.gsp.eventBus.requestFor('FileTreePanelPackage', 'projectCreate', 'AccessFileTree', { action: '6' }, function (nodeInfo) {
            if (nodeInfo.nodeType === 'project') {
                var packageViewT = new __WEBPACK_IMPORTED_MODULE_1__views__["NugetWizardPackageView"]({}, _this.cfr, _this.injector);
                var title = '元数据包管理器';
                var comp = packageViewT.getElement().instance;
                comp.projRelativePath = nodeInfo.nodePath;
                var modalPanel_1 = _this.gsp.workspace.addModalPanel({ item: {
                        element: packageViewT.getElement(),
                        modalOptions: {
                            title: title,
                            width: 876,
                            height: 589,
                        }
                    } });
                comp.closeModalEmitter.subscribe(function () { return modalPanel_1.destroy(); });
            }
        });
    };
    NugetWizardPackage.prototype.getComponent = function () {
        return __WEBPACK_IMPORTED_MODULE_2__views_packageselect_packageselect_component__["PackageSelectComponent"];
    };
    NugetWizardPackage.prototype.push = function () {
        var _this = this;
        this.gsp.eventBus.requestFor('FileTreePanelPackage', 'projectCreate', 'AccessFileTree', { action: '6' }, function (nodeInfo) {
            console.log(nodeInfo);
            if (nodeInfo.nodeType === 'project' || nodeInfo.nodeType === 'folder') {
                _this.nugetService.pushPackage(nodeInfo.nodePath.substring(1)).subscribe(function (data) {
                    console.log(data);
                    alert('推送成功！');
                }, function (error) {
                    alert('推送失败！');
                });
            }
        });
    };
    return NugetWizardPackage;
}(__WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__["Package"]));



/***/ }),

/***/ "./src/packages/nuget-wizard/views/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NugetWizardPackageView", function() { return NugetWizardPackageView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__ = __webpack_require__("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__packageselect_packageselect_component__ = __webpack_require__("./src/packages/nuget-wizard/views/packageselect/packageselect.component.ts");
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


var NugetWizardPackageView = (function (_super) {
    __extends(NugetWizardPackageView, _super);
    function NugetWizardPackageView(serializedState, cfr, injector) {
        var _this = _super.call(this, serializedState) || this;
        _this.cfr = cfr;
        _this.injector = injector;
        _this.element = cfr.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_1__packageselect_packageselect_component__["PackageSelectComponent"]).create(injector);
        return _this;
    }
    return NugetWizardPackageView;
}(__WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__["PackageView"]));



/***/ }),

/***/ "./src/packages/nuget-wizard/views/installedpackagelist/installedpackagelist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* .templateSelector {\r\n    width: 580px;\r\n    height: 450px;\r\n    border: 0.5px solid #ddd;\r\n  }\r\n  \r\n  .templateDescription {\r\n    width: 200px;\r\n    height: 450px;\r\n    border: 0.5px solid #ddd;\r\n  }\r\n  \r\n  .templateInfo {\r\n    display: flex;\r\n  } */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/nuget-wizard/views/installedpackagelist/installedpackagelist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"templateInfo\">\r\n  <div class=\"templateSelector\">\r\n    <kendo-grid [data]=\"data\" \r\n                [height]=\"449\" \r\n                [selectable]=\"selectableSetting\" \r\n                (selectionChange)=onSelectionChange($event)\r\n                [filterable]=\"true\">\r\n      <kendo-grid-column field=\"name\" title=\"\" width=\"200\">\r\n      </kendo-grid-column>\r\n    </kendo-grid>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/packages/nuget-wizard/views/installedpackagelist/installedpackagelist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstalledPackagelistComponent", function() { return InstalledPackagelistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nuget_service__ = __webpack_require__("./src/packages/nuget-wizard/nuget.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InstalledPackagelistComponent = (function () {
    function InstalledPackagelistComponent(nugetService) {
        this.nugetService = nugetService;
        this.packageSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.selectableSetting = { mode: 'single', checkboxOnly: false };
    }
    InstalledPackagelistComponent.prototype.ngOnInit = function () {
        this.data = this.nugetService.installedPackageList;
    };
    InstalledPackagelistComponent.prototype.refreshPackList = function () {
        this.data = this.nugetService.installedPackageList;
    };
    InstalledPackagelistComponent.prototype.onSelectionChange = function (event) {
        console.log(event);
        this.nugetService.selectedPackage = event.selectedRows[0].dataItem;
        // event.selectedRows[0].dataItem.name
        this.packageSelected.emit(event.selectedRows[0].dataItem);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], InstalledPackagelistComponent.prototype, "packageSelected", void 0);
    InstalledPackagelistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-installedpackagelist',
            template: __webpack_require__("./src/packages/nuget-wizard/views/installedpackagelist/installedpackagelist.component.html"),
            styles: [__webpack_require__("./src/packages/nuget-wizard/views/installedpackagelist/installedpackagelist.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nuget_service__["NugetService"]])
    ], InstalledPackagelistComponent);
    return InstalledPackagelistComponent;
}());



/***/ }),

/***/ "./src/packages/nuget-wizard/views/packagelist/packagelist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* .templateSelector {\r\n    width: 580px;\r\n    height: 450px;\r\n    border: 0.5px solid #ddd;\r\n  }\r\n  \r\n  .templateDescription {\r\n    width: 200px;\r\n    height: 450px;\r\n    border: 0.5px solid #ddd;\r\n  }\r\n  \r\n  .templateInfo {\r\n    display: flex;\r\n  } */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/nuget-wizard/views/packagelist/packagelist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"templateInfo\">\r\n  <div class=\"templateSelector\">\r\n    <kendo-grid [data]=\"gridView\" \r\n                [height]=\"449\" \r\n                [selectable]=\"selectableSetting\" \r\n                (selectionChange)=onSelectionChange($event)\r\n                [skip]=\"skip\"\r\n                [pageSize]=\"pageSize\"\r\n                [pageable]=\"true\"\r\n                [filterable]=\"true\"\r\n                [filter]=\"filter\"\r\n                (filterChange)=\"filterChange($event)\"\r\n                (pageChange)=\"pageChange($event)\">\r\n      <kendo-grid-column field=\"name\" title=\"\" width=\"200\">\r\n      </kendo-grid-column>\r\n    </kendo-grid>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/packages/nuget-wizard/views/packagelist/packagelist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackagelistComponent", function() { return PackagelistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nuget_service__ = __webpack_require__("./src/packages/nuget-wizard/nuget.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PackagelistComponent = (function () {
    function PackagelistComponent(nugetService) {
        this.nugetService = nugetService;
        this.pageSize = 10;
        this.skip = 0;
        this.packageSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.selectableSetting = { mode: 'single', checkboxOnly: false };
    }
    PackagelistComponent.prototype.ngOnInit = function () {
        this.gridView = {
            data: this.nugetService.packageList,
            total: this.nugetService.totalNum
        };
    };
    PackagelistComponent.prototype.refreshPackList = function () {
        this.gridView = {
            // data: this.nugetService.packageList.slice(this.skip, this.skip + this.pageSize),
            data: this.nugetService.packageList,
            total: this.nugetService.totalNum
        };
    };
    PackagelistComponent.prototype.refreshPackListOfFilter = function () {
        this.gridView = {
            // data: this.nugetService.packageList.slice(this.skip, this.skip + this.pageSize),
            data: this.nugetService.packageList.slice(this.skip, this.skip + this.pageSize),
            total: this.nugetService.packageList.length
        };
    };
    PackagelistComponent.prototype.onSelectionChange = function (event) {
        console.log(event);
        this.nugetService.selectedPackage = event.selectedRows[0].dataItem;
        this.packageSelected.emit(event.selectedRows[0].dataItem);
    };
    PackagelistComponent.prototype.pageChange = function (event) {
        this.skip = event.skip;
        if (this.filter === undefined || this.filter.filters.length === 0) {
            this.getPackList(this.skip);
            this.refreshPackList();
        }
        else {
            this.refreshPackListOfFilter();
        }
    };
    PackagelistComponent.prototype.filterChange = function (filter) {
        this.filter = filter;
        if (filter.filters.length !== 0) {
            var filterDesc = filter.filters[0];
            if (filterDesc.value) {
                var inputText = filterDesc.value;
                if (!inputText) {
                    this.getPackList(0);
                }
                else {
                    this.getPackList(inputText);
                }
            }
        }
        else {
            this.getPackList(0);
        }
    };
    PackagelistComponent.prototype.getPackList = function (filter) {
        var _this = this;
        // 调用获取所有的接口
        this.nugetService.getPackageList(filter).subscribe(function (item) {
            console.log(item);
            // 清缓存
            _this.nugetService.clearPackage();
            // 将获取的数据添加到列表
            if (item) {
                item.forEach(function (pack) {
                    // const groupStr = pack.split(',');
                    _this.nugetService.packageList.push({ 'name': pack.packageName,
                        'version': pack.packageVersion,
                        'description': pack.description,
                        'author': pack.authors,
                        'publishDate': pack.publishDate,
                        'refPacks': pack.refPackages
                    });
                });
                // 刷新列表
                if (_this.filter === undefined || _this.filter.filters.length === 0) {
                    _this.refreshPackList();
                }
                else {
                    _this.refreshPackListOfFilter();
                }
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], PackagelistComponent.prototype, "packageSelected", void 0);
    PackagelistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-packagelist',
            template: __webpack_require__("./src/packages/nuget-wizard/views/packagelist/packagelist.component.html"),
            styles: [__webpack_require__("./src/packages/nuget-wizard/views/packagelist/packagelist.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nuget_service__["NugetService"]])
    ], PackagelistComponent);
    return PackagelistComponent;
}());



/***/ }),

/***/ "./src/packages/nuget-wizard/views/packageselect/packageselect.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* \r\n.templateBlock\r\n{\r\n    height: 289px;\r\n    display: flex;\r\n}\r\n\r\n.infoBlock {\r\n  width: 100%;\r\n  height: 270px;\r\n  min-width: 400px;\r\n}\r\n\r\n.fileNameSpace,\r\n.fileCode,\r\n.fileName,\r\n.fileBiz,\r\n.fileLocation {\r\n    display: block;\r\n    align-items: center;\r\n    margin-top: 0.1rem;\r\n}\r\n\r\n.k-textbox.form-control {\r\n    height: 30px;\r\n}\r\n.kendo-textbox-container {\r\n    width: 100%;\r\n}\r\n\r\n.infoBlock label\r\n{\r\n    width: 100px;\r\n}\r\n\r\n.frameInfo\r\n{\r\n    display: inline-block;\r\n    margin-bottom: 0rem;\r\n}\r\n\r\n.titleMetadata  \r\n{\r\n    padding-left: 10px;\r\n    font-weight: bold;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    font-size: 0.8rem;\r\n}\r\n */\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/nuget-wizard/views/packageselect/packageselect.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-body\">\r\n  <div class=\"templateBlock\">\r\n    <app-packagetab [projRelativePath]=\"projRelativePath\"></app-packagetab>\r\n  </div>\r\n</div>\r\n<ng-template #btn>\r\n  <!-- <button type=\"button\" class=\"btn btn-outline-primary btn-sm px-3 mx-2\" (click)=\"Install()\">确定</button>\r\n  <button type=\"button\" class=\"btn btn-outline-secondary btn-sm px-3 mx-2\" (click)=\"hideModal()\">取消</button> -->\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/packages/nuget-wizard/views/packageselect/packageselect.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageSelectComponent", function() { return PackageSelectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nuget_service__ = __webpack_require__("./src/packages/nuget-wizard/nuget.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PackageSelectComponent = (function () {
    function PackageSelectComponent(nugetService) {
        this.nugetService = nugetService;
        this.closeModalEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    PackageSelectComponent.prototype.ngOnInit = function () {
    };
    PackageSelectComponent.prototype.hideModal = function () {
        this.closeModalEmitter.emit();
    };
    PackageSelectComponent.prototype.Install = function () {
        // const selectedPack = this.nugetService.selectedPackage;
        // const projPath = this.projRelativePath.substring(1);
        // this.nugetService.installPackage(projPath, selectedPack).subscribe(data => {
        //   console.log(data);
        //   this.closeModalEmitter.emit();
        //   alert('安装成功');
        // });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('btn'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], PackageSelectComponent.prototype, "btns", void 0);
    PackageSelectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-packageselect',
            template: __webpack_require__("./src/packages/nuget-wizard/views/packageselect/packageselect.component.html"),
            styles: [__webpack_require__("./src/packages/nuget-wizard/views/packageselect/packageselect.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nuget_service__["NugetService"]])
    ], PackageSelectComponent);
    return PackageSelectComponent;
}());



/***/ }),

/***/ "./src/packages/nuget-wizard/views/packagetab/packagetab.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  .installedPack {\r\n    display:inline;\r\n  }\r\n\r\n  #installedVersion {\r\n    width: 173px;\r\n  }\r\n\r\n  #installedButton {\r\n    margin-right: 5px;\r\n  }\r\n\r\n  .installedPackVersion {\r\n    margin-left: 5px;\r\n  }\r\n\r\n  .packageVersion {\r\n    padding-top: 5px;\r\n  }\r\n\r\n  .packDescription {\r\n    padding-top: 10px;\r\n    padding-left: 5px;\r\n  }\r\n\r\n  #packVersion {\r\n    display:inline;\r\n  }\r\n\r\n  .packageCommon {\r\n    padding-top: 15px;\r\n    padding-left: 5px;\r\n  }\r\n\r\n  .packageInfoandAction {\r\n    overflow: auto;\r\n    height: 450px;\r\n  }\r\n\r\n  .marginCommon {\r\n    padding-left: 5px;\r\n    padding-top: 5px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/nuget-wizard/views/packagetab/packagetab.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"templateInfo\">\r\n  <div class=\"templateSelector\">\r\n    <kendo-tabstrip (tabSelect)=\"onTabSelect($event)\">\r\n      <kendo-tabstrip-tab [title]=\"'浏览'\">\r\n        <ng-template kendoTabContent>\r\n          <!-- <div class=\"col-xs-12 col-sm-12 d-flex flex-column\" style=\"flex: 1 1 auto;margin-top: 1px;\"> -->\r\n            <kendo-splitter class=\"d-flex \" style=\"flex: 1 1 auto;margin-top: 2px\" orientation=\"horizontal\">\r\n                <kendo-splitter-pane class=\"d-flex \" [collapsible]=\"true\" size=\"60%\" style=\"height: auto\">\r\n                  <!-- 下面的这个class没什么作用 -->\r\n                  <div class=\"packageInfoandAction\" style=\"margin-top: 1px; padding-right: 1px;padding-left: 1px;\">\r\n                    <app-packagelist (packageSelected)=\"onPackageSelected($event)\" #packList></app-packagelist>\r\n                  </div>\r\n                </kendo-splitter-pane>\r\n                <kendo-splitter-pane class=\"d-flex\" style=\"height: auto\">\r\n                  <div *ngIf=\"isPanelShown\" class=\"packageInfoandAction\">\r\n                    <div class=\"marginCommon\">\r\n                      <h1 class=\"panel-title\" style=\"font-size: 1rem;\">\r\n                        {{package}}\r\n                      </h1>\r\n                    </div>\r\n                    <div class=\"marginCommon\">\r\n                        <label style=\"width: 40px;\">版本:</label>\r\n                        <!-- <button npackageInstall (click)=\"intallNpackage()\"> -->\r\n                            <span class=\"packVersion\">\r\n                              <kendo-combobox [data]=\"versionList\" \r\n                                              [allowCustom]=\"allowCustom\"\r\n                                              [(ngModel)]=\"selectedItem\">\r\n                              </kendo-combobox>\r\n                            </span>\r\n                          <!-- 安装</button> -->\r\n                          <button type=\"button\" class=\"btn btn-outline-primary btn-sm px-3 mx-2\" (click)=\"Install()\">安装</button>\r\n                    </div>\r\n                        <div class=\"packDescription\">\r\n                          <label style=\"width: 40px;\">描述:</label>\r\n                           <h1 class=\"panel-title\" style=\"font-size: 0.9rem;\">\r\n                              {{description}}\r\n                          </h1>\r\n                      </div>  \r\n                      <div class=\"packageCommon\">\r\n                          <label id=\"packVersion\" style=\"width: 40px;\">版本:\r\n                              {{latestVersion}}\r\n                          </label>\r\n                      </div> \r\n                      <div class=\"packageCommon\">\r\n                          <label id=\"packVersion\" style=\"width: 40px;\">作者:\r\n                              {{author}}\r\n                          </label>\r\n                      </div>  \r\n                      <div class=\"packageCommon\">\r\n                          <label id=\"packVersion\" style=\"width: 40px;\">发布日期:\r\n                              {{publishDate}}\r\n                          </label>\r\n                      </div>   \r\n                      <div class=\"packageCommon\">\r\n                          <label id=\"packVersion\" style=\"width: 40px;\">依赖项:\r\n                            <label *ngFor=\"let refPack of refPacks\">{{refPack}}</label>\r\n                          </label>\r\n                      </div>               \r\n                  </div>\r\n                </kendo-splitter-pane>\r\n            </kendo-splitter>\r\n          <!-- </div> -->\r\n        </ng-template>\r\n      </kendo-tabstrip-tab>\r\n\r\n      <kendo-tabstrip-tab [title]=\"'已安装'\">\r\n        <ng-template kendoTabContent>\r\n          <!-- <div class=\"col-xs-12 col-sm-12 d-flex flex-column\" style=\"flex: 1 1 auto;margin-top: 1px;\"> -->\r\n            <kendo-splitter class=\"d-flex \" style=\"flex: 1 1 auto;margin-top: 2px\" orientation=\"horizontal\">\r\n                <kendo-splitter-pane class=\"d-flex \" [collapsible]=\"true\" size=\"60%\" style=\"height: auto\">\r\n                  <!-- 下面的这个class没什么作用 -->\r\n                  <div class=\"col-xs-12 col-sm-12 d-flex flex-column\" style=\"margin-top: 1px; padding-right: 1px;padding-left: 1px;\">\r\n                    <app-installedpackagelist (packageSelected)=\"onSelectedInstalledPack($event)\" #installedpackList></app-installedpackagelist>\r\n                  </div>\r\n                </kendo-splitter-pane>\r\n                <kendo-splitter-pane class=\"d-flex\" style=\"height: auto\">\r\n                  <div *ngIf=\"isInstalledPanelShown\" class=\"packageInfoandAction\">\r\n                    <div class=\"marginCommon\">\r\n                      <h1 class=\"panel-title\" style=\"font-size: 1rem;\">\r\n                        {{installedPackage}}\r\n                      </h1>\r\n                    </div>\r\n                    <div class=\"marginCommon\">\r\n                      <label class=\"installedPack\" style=\"width: 40px;\">已安装:</label>\r\n                      <!-- <button npackageInstall (click)=\"intallNpackage()\"> -->\r\n                          <span class=\"packVersion\">\r\n                            <input id=\"installedVersion\" class=\"form-control textInput\" type=\"text\" kendoTextBox [(ngModel)]=\"installedVersion\" />\r\n                          </span>\r\n                        <!-- 安装</button> -->\r\n                        <button id=\"installedButton\" type=\"button\" class=\"btn btn-outline-primary btn-sm px-3 mx-2\" (click)=\"unInstall()\">卸载</button>\r\n                  </div>\r\n                    <div class=\"marginCommon\">\r\n                        <label style=\"width: 40px;\">版本:</label>\r\n                        <!-- <button npackageInstall (click)=\"intallNpackage()\"> -->\r\n                            <span class=\"installedPackVersion\">\r\n                              <kendo-combobox [data]=\"installedVersionList\" \r\n                                              [allowCustom]=\"allowCustom\"\r\n                                              [(ngModel)]=\"installedSelectedItem\">\r\n                              </kendo-combobox>\r\n                            </span>\r\n                          <!-- 安装</button> -->\r\n                          <button id=\"installedButton\" type=\"button\" class=\"btn btn-outline-primary btn-sm px-3 mx-2\" (click)=\"update()\">更新</button>\r\n                    </div>\r\n                    <div class=\"packDescription\">\r\n                        <label style=\"width: 40px;\">描述:</label>\r\n                         <h1 class=\"panel-title\" style=\"font-size: 0.9rem;\">\r\n                            {{installedDescription}}\r\n                        </h1>\r\n                    </div>  \r\n                    <div class=\"packageCommon\">\r\n                        <label id=\"packVersion\" style=\"width: 40px;\">版本:\r\n                            {{installedLatestVersion}}\r\n                        </label>\r\n                    </div> \r\n                    <div class=\"packageCommon\">\r\n                        <label id=\"packVersion\" style=\"width: 40px;\">作者:\r\n                            {{installedAuthor}}\r\n                        </label>\r\n                    </div>  \r\n                    <div class=\"packageCommon\">\r\n                        <label id=\"packVersion\" style=\"width: 40px;\">发布日期:\r\n                            {{installedPublishDate}}\r\n                        </label>\r\n                    </div>   \r\n                    <div class=\"packageCommon\">\r\n                        <label id=\"packVersion\" style=\"width: 40px;\">依赖项:\r\n                          <label *ngFor=\"let refPack of installedRefPacks\">{{refPack}}</label>\r\n                        </label>\r\n                    </div>             \r\n                  </div>\r\n                </kendo-splitter-pane>\r\n            </kendo-splitter>\r\n          <!-- </div> -->\r\n        </ng-template>\r\n      </kendo-tabstrip-tab>\r\n      <!-- <kendo-tabstrip-tab [title]=\"'更新'\">\r\n        <ng-template kendoTabContent>\r\n            <app-packagelist></app-packagelist>\r\n        </ng-template>\r\n      </kendo-tabstrip-tab> -->\r\n    </kendo-tabstrip>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/packages/nuget-wizard/views/packagetab/packagetab.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackagetabComponent", function() { return PackagetabComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nuget_service__ = __webpack_require__("./src/packages/nuget-wizard/nuget.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__packagelist_packagelist_component__ = __webpack_require__("./src/packages/nuget-wizard/views/packagelist/packagelist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__installedpackagelist_installedpackagelist_component__ = __webpack_require__("./src/packages/nuget-wizard/views/installedpackagelist/installedpackagelist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gsp_lcm_metadata_selector__ = __webpack_require__("./node_modules/@gsp-lcm/metadata-selector/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gsp_lcm_metadata_selector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__gsp_lcm_metadata_selector__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PackagetabComponent = (function () {
    function PackagetabComponent(nugetService, metadataservice) {
        this.nugetService = nugetService;
        this.metadataservice = metadataservice;
        this.allowCustom = true;
        this.nameVerMapping = [];
    }
    PackagetabComponent.prototype.ngOnInit = function () {
        this.isPanelShown = false;
        this.isInstalledPanelShown = false;
    };
    PackagetabComponent.prototype.onTabSelect = function (data) {
        var _this = this;
        if (data.index === 0) {
            // 首先获取包源中元数据包的个数
            this.nugetService.getNumberOfPackages().subscribe(function (item) {
                _this.nugetService.totalNum = item;
                // 列出源上的nuget包
                _this.getAllPackList();
            });
        }
        else if (data.index === 1) {
            // 列出已安装的nuget包
            this.getInstalledPackList();
        }
        // else if (data.index === 2) {
        //   // 列出所有需要更新的元数据包
        // }
    };
    PackagetabComponent.prototype.onPackageSelected = function (data) {
        var _this = this;
        this.isPanelShown = true;
        if (data) {
            this.package = data.name;
        }
        this.versionList = [];
        // 获取选中包的所有版本信息
        this.nugetService.getVersionsOfSinglePackage(data.name).subscribe(function (item) {
            if (item) {
                item.forEach(function (pack) {
                    _this.versionList.push(pack.packageVersion);
                });
                _this.selectedItem = _this.versionList[0];
            }
        });
        // 给其他信息赋值
        this.description = this.nugetService.selectedPackage.description;
        this.author = this.nugetService.selectedPackage.author;
        this.latestVersion = this.nugetService.selectedPackage.version;
        this.publishDate = this.nugetService.selectedPackage.publishDate;
        this.refPacks = this.nugetService.selectedPackage.refPacks;
    };
    PackagetabComponent.prototype.onSelectedInstalledPack = function (data) {
        var _this = this;
        this.isInstalledPanelShown = true;
        if (data) {
            this.installedPackage = data.name;
        }
        this.installedVersionList = [];
        if (this.nameVerMapping) {
            this.nameVerMapping.forEach(function (item) {
                var mapping = item.name.split(',');
                if (data.name === mapping[0]) {
                    _this.installedVersion = mapping[1];
                }
            });
        }
        // 获取选中包的所有版本信息
        this.nugetService.getVersionsOfSinglePackage(data.name).subscribe(function (item) {
            if (item) {
                item.forEach(function (pack) {
                    _this.installedVersionList.push(pack.packageVersion);
                    _this.installedDescription = pack.description;
                    _this.installedAuthor = pack.authors;
                    _this.installedLatestVersion = pack.packageVersion;
                    _this.installedPublishDate = pack.publishDate;
                    _this.installedRefPacks = pack.refPackages;
                });
                _this.installedSelectedItem = _this.installedVersionList[0];
            }
            else {
                _this.installedSelectedItem = '';
                _this.installedDescription = '';
                _this.installedAuthor = '';
                _this.installedLatestVersion = '';
                _this.installedPublishDate = '';
                _this.installedRefPacks = [];
            }
        });
    };
    PackagetabComponent.prototype.Install = function () {
        var selectedPackName = this.nugetService.selectedPackage;
        var selectedPackVersion = this.selectedItem;
        var projPath = this.projRelativePath.substring(1);
        this.nugetService.installPackage(projPath, selectedPackName.name, selectedPackVersion).subscribe(function (data) {
            console.log(data);
            alert('安装成功');
        }, function (error) {
            alert('安装失败');
        });
    };
    PackagetabComponent.prototype.update = function () {
        var _this = this;
        var selectedPackName = this.nugetService.selectedPackage;
        var selectedPackVersion = this.installedSelectedItem;
        var projPath = this.projRelativePath.substring(1);
        this.nugetService.installPackage(projPath, selectedPackName.name, selectedPackVersion).subscribe(function (data) {
            console.log(data);
            alert('更新成功');
            _this.installedVersion = selectedPackVersion;
        }, function (error) {
            alert('更新失败');
        });
    };
    PackagetabComponent.prototype.unInstall = function () {
        var _this = this;
        var selectedPackName = this.nugetService.selectedPackage;
        var projPath = this.projRelativePath.substring(1);
        this.nugetService.unInstallPackage(projPath, selectedPackName.name).subscribe(function (data) {
            console.log(data);
            alert('卸载成功');
            _this.getInstalledPackList();
        }, function (error) {
            alert('卸载失败');
        });
    };
    PackagetabComponent.prototype.getAllPackList = function () {
        var _this = this;
        // 调用获取所有的接口
        this.nugetService.getPackageList(0).subscribe(function (item) {
            console.log(item);
            // 清缓存
            _this.nugetService.clearPackage();
            // 将获取的数据添加到列表
            if (item) {
                item.forEach(function (pack) {
                    // const groupStr = pack.split(',');
                    _this.nugetService.packageList.push({ 'name': pack.packageName,
                        'version': pack.packageVersion,
                        'description': pack.description,
                        'author': pack.authors,
                        'publishDate': pack.publishDate,
                        'refPacks': pack.refPackages
                    });
                });
                // 刷新列表
                _this.packList.refreshPackList();
            }
        });
    };
    PackagetabComponent.prototype.getInstalledPackList = function () {
        var _this = this;
        // 清缓存
        this.nugetService.clearInstalledPackage();
        // 解析当前工程，并对比服务端版本
        this.metadataservice.GetProjectInfo(this.projRelativePath.substring(1)).subscribe(function (proj) {
            var refs = proj.metadataPackageRefs;
            if (refs) {
                refs.forEach(function (ref) {
                    _this.nugetService.installedPackageList.push({ 'name': ref.name });
                    _this.nameVerMapping.push({ 'name': ref.name + ',' + ref.version.versionString });
                });
                // 刷新列表
                _this.installedpackList.refreshPackList();
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PackagetabComponent.prototype, "projRelativePath", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('packList'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__packagelist_packagelist_component__["PackagelistComponent"])
    ], PackagetabComponent.prototype, "packList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('installedpackList'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__installedpackagelist_installedpackagelist_component__["InstalledPackagelistComponent"])
    ], PackagetabComponent.prototype, "installedpackList", void 0);
    PackagetabComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-packagetab',
            template: __webpack_require__("./src/packages/nuget-wizard/views/packagetab/packagetab.component.html"),
            styles: [__webpack_require__("./src/packages/nuget-wizard/views/packagetab/packagetab.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nuget_service__["NugetService"], __WEBPACK_IMPORTED_MODULE_4__gsp_lcm_metadata_selector__["GSPMetadataService"]])
    ], PackagetabComponent);
    return PackagetabComponent;
}());



/***/ })

},[]);
//# sourceMappingURL=nuget-package.module.chunk.js.map