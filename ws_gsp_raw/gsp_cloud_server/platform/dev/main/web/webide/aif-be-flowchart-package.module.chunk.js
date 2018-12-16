webpackJsonp(["aif-be-flowchart-package.module"],{

/***/ "./src/packages/aif-be-flowchart/aif-be-flowchart-package.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AifBeFlowchartPackageModule", function() { return AifBeFlowchartPackageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_ide_devkit__ = __webpack_require__("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_ide_devkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__farris_ide_devkit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gsp_lcm_metadata_selector__ = __webpack_require__("./node_modules/@gsp-lcm/metadata-selector/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gsp_lcm_metadata_selector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__gsp_lcm_metadata_selector__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_framework_directives_tabs__ = __webpack_require__("./src/app/framework/directives/tabs/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_aif_be_flowchart_designer_module__ = __webpack_require__("./src/packages/aif-be-flowchart/views/aif-be-flowchart-designer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7____ = __webpack_require__("./src/packages/aif-be-flowchart/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__farris_ui__ = __webpack_require__("./node_modules/@farris/ui/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__farris_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__farris_ui__);
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









var AifBeFlowchartPackageModule = (function (_super) {
    __extends(AifBeFlowchartPackageModule, _super);
    function AifBeFlowchartPackageModule(cfr, injector) {
        var _this = _super.call(this) || this;
        _this.cfr = cfr;
        _this.injector = injector;
        return _this;
    }
    AifBeFlowchartPackageModule.prototype.initPackage = function (gsp) {
        this.package = new __WEBPACK_IMPORTED_MODULE_7____["AifBeFlowchartPackage"](gsp, this.cfr, this.injector);
    };
    AifBeFlowchartPackageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_6__views_aif_be_flowchart_designer_module__["AifBeFlowchartDesignerModule"],
                __WEBPACK_IMPORTED_MODULE_3__gsp_lcm_metadata_selector__["GSPMetadataServiceModule"].forRoot(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["environment"].SERVER_IP),
                __WEBPACK_IMPORTED_MODULE_3__gsp_lcm_metadata_selector__["MetadataSelectModule"],
                __WEBPACK_IMPORTED_MODULE_8__farris_ui__["FarrisDialogModule"],
            ],
            providers: [
                // ComponentFactoryResolver
                __WEBPACK_IMPORTED_MODULE_5__app_framework_directives_tabs__["TabsComponent"]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], AifBeFlowchartPackageModule);
    return AifBeFlowchartPackageModule;
}(__WEBPACK_IMPORTED_MODULE_2__farris_ide_devkit__["PackageModule"]));

//# sourceMappingURL=aif-be-flowchart-package.module.js.map

/***/ }),

/***/ "./src/packages/aif-be-flowchart/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__package__ = __webpack_require__("./src/packages/aif-be-flowchart/package.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "AifBeFlowchartPackage", function() { return __WEBPACK_IMPORTED_MODULE_0__package__["AifBeFlowchartPackage"]; });



/***/ }),

/***/ "./src/packages/aif-be-flowchart/package.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AifBeFlowchartPackage", function() { return AifBeFlowchartPackage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__ = __webpack_require__("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views__ = __webpack_require__("./src/packages/aif-be-flowchart/views/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_aif_be_flowchart_aif_be_flowchart_designer_component__ = __webpack_require__("./src/packages/aif-be-flowchart/views/aif-be-flowchart/aif-be-flowchart-designer.component.ts");
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



var AifBeFlowchartPackage = (function (_super) {
    __extends(AifBeFlowchartPackage, _super);
    // private pkgView:AifBeFlowchartPackageView;
    function AifBeFlowchartPackage(gsp, cfr, injector) {
        var _this = _super.call(this, gsp) || this;
        _this.cfr = cfr;
        _this.injector = injector;
        return _this;
    }
    AifBeFlowchartPackage.prototype.activate = function (state) {
        //this.gsp.eventBus.on(WorkspaceComponent.name, 'Workspace', 'tabHidding', AifBeFlowchartPackageView, this.onMainTabsSelecting);
        var _this = this;
        this.gsp.workspace.addOpener(function (uri) {
            //this.gsp.workspace.getCenter().getActivePane().onWillRemoveItem((item)=>this.onTabWillRemove(item));
            _this.gsp.workspace.getCenter().getActivePane().onDidChangeActiveItem(function (item) { return _this.onTabDidChange(item); });
            return _this.openAifBeFlowchart(uri);
        });
    };
    AifBeFlowchartPackage.prototype.openAifBeFlowchart = function (uri) {
        if (uri.endsWith('.aifbf')) {
            var pkgView_1 = new __WEBPACK_IMPORTED_MODULE_1__views__["AifBeFlowchartPackageView"]({}, this.cfr, this.injector);
            var currentElement = pkgView_1.getElement().instance;
            currentElement.metadataUri = uri;
            // 这里需要处理uri，title应返回元数据名称，
            return {
                getTitle: function () { return uri.substring(uri.lastIndexOf('/') + 1); },
                getElement: function () { return pkgView_1.getElement(); }
            };
        }
    };
    AifBeFlowchartPackage.prototype.onTabDidChange = function (item) {
        if (item == null) {
            return;
        }
        //console.log(item.getElement());
        // alert(beFlowchartDesignerComponent.metadataUri);
        //console.log((item.getElement().instance as AifBeFlowchartDesignerComponent).metadataUri);
        if (item.getElement().instance instanceof __WEBPACK_IMPORTED_MODULE_2__views_aif_be_flowchart_aif_be_flowchart_designer_component__["AifBeFlowchartDesignerComponent"]) {
            console.log("这是AifBeFlowchartDesignerComponent的实例");
            var aifBeFlowchartDesignerComponent = item.getElement().instance;
            if (aifBeFlowchartDesignerComponent.myParentPageMessageFunct != window['myParentPageMessageFunct']) {
                //aifBeFlowchartDesignerComponent.propertyPanel.collapse();
                aifBeFlowchartDesignerComponent.initPropertyPanel();
                aifBeFlowchartDesignerComponent.addMessageListener();
            }
        }
    };
    AifBeFlowchartPackage.prototype.onTabWillRemove = function (item) {
        //alert(item.getTitle());
    };
    AifBeFlowchartPackage.prototype.onMainTabsSelecting = function (item) {
        if (item.getElement().instance instanceof __WEBPACK_IMPORTED_MODULE_2__views_aif_be_flowchart_aif_be_flowchart_designer_component__["AifBeFlowchartDesignerComponent"]) {
            var currentElement = item.getElement().instance;
            if (currentElement.changed == true) {
                //debugger;
                // if(confirm("是否保存？")){
                console.log("自动保存");
                try {
                    var latestContent = currentElement.iframe.nativeElement.contentWindow.aifGetBpmnModel();
                    currentElement.metadataDto.content = latestContent;
                    currentElement.metadataContent = currentElement.metadataDto;
                    currentElement.lcmService.SaveMetadata(currentElement.metadataDto, currentElement.cache.get("sessionId")).subscribe(function () {
                        console.log("自动保存成功");
                    }, function (error) {
                        console.error("自动保存失败");
                        console.error(error);
                    });
                    //目前问题：调用下面方法发送消息后由于新的消息监听器刚注册完毕，导致消息存储出新打开的元数据中
                    //currentElement.iframe.nativeElement.contentWindow.aifAutoSave();
                    //throw "error";
                    //currentElement.iframe.nativeElement.contentWindow.postMessage("#save_request#",POST_MESSAGE_TARGET);
                }
                catch (error) {
                    console.error("自动保存失败");
                    console.error(error);
                }
                // }else{
                // }
            }
        }
    };
    return AifBeFlowchartPackage;
}(__WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__["Package"]));



/***/ }),

/***/ "./src/packages/aif-be-flowchart/pipe/SafePipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
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
* safe管道
* 将url转换为angular 中 iframe可以识别的安全url链接
*
* @export
* @class SafePipe
* @implements {PipeTransform}
*/
var SafePipe = (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    //Angular 2 中提供的 DomSanitizer 服务，可以让url变得安全
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: "safe"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"]])
    ], SafePipe);
    return SafePipe;
}());



/***/ }),

/***/ "./src/packages/aif-be-flowchart/views/aif-be-flowchart-designer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AifBeFlowchartDesignerModule", function() { return AifBeFlowchartDesignerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progress_kendo_angular_buttons__ = __webpack_require__("./node_modules/@progress/kendo-angular-buttons/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_inputs__ = __webpack_require__("./node_modules/@progress/kendo-angular-inputs/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_grid__ = __webpack_require__("./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_dialog__ = __webpack_require__("./node_modules/@progress/kendo-angular-dialog/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_dropdowns__ = __webpack_require__("./node_modules/@progress/kendo-angular-dropdowns/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__progress_kendo_angular_popup__ = __webpack_require__("./node_modules/@progress/kendo-angular-popup/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__progress_kendo_angular_treeview__ = __webpack_require__("./node_modules/@progress/kendo-angular-treeview/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__progress_kendo_angular_layout__ = __webpack_require__("./node_modules/@progress/kendo-angular-layout/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__farris_ide_devkit__ = __webpack_require__("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__farris_ide_devkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__farris_ide_devkit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pipe_SafePipe__ = __webpack_require__("./src/packages/aif-be-flowchart/pipe/SafePipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__aif_be_flowchart_aif_be_flowchart_designer_component__ = __webpack_require__("./src/packages/aif-be-flowchart/views/aif-be-flowchart/aif-be-flowchart-designer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__aif_be_flowchart_property_selector_property_selector_property_selector_component__ = __webpack_require__("./src/packages/aif-be-flowchart/views/aif-be-flowchart-property-selector/property-selector/property-selector.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__gsp_lcm_metadata_selector__ = __webpack_require__("./node_modules/@gsp-lcm/metadata-selector/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__gsp_lcm_metadata_selector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__gsp_lcm_metadata_selector__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__farris_ide_devkit_services__ = __webpack_require__("./node_modules/@farris/ide-devkit/services/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__farris_ide_devkit_services___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__farris_ide_devkit_services__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AifBeFlowchartDesignerModule = (function () {
    function AifBeFlowchartDesignerModule() {
    }
    AifBeFlowchartDesignerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                // 元数据选择界面
                //MetadataModule,
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_grid__["GridModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__progress_kendo_angular_buttons__["ButtonsModule"],
                __WEBPACK_IMPORTED_MODULE_2__progress_kendo_angular_buttons__["ButtonGroupModule"],
                __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_dialog__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_inputs__["InputsModule"],
                __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_dropdowns__["DropDownListModule"],
                __WEBPACK_IMPORTED_MODULE_8__progress_kendo_angular_popup__["PopupModule"],
                __WEBPACK_IMPORTED_MODULE_9__progress_kendo_angular_treeview__["TreeViewModule"],
                __WEBPACK_IMPORTED_MODULE_10__progress_kendo_angular_layout__["LayoutModule"],
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_10__progress_kendo_angular_layout__["SplitterModule"],
                __WEBPACK_IMPORTED_MODULE_12__farris_ide_devkit__["PropertyPanelModule"],
                __WEBPACK_IMPORTED_MODULE_16__gsp_lcm_metadata_selector__["MetadataSelectModule"],
                __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["HttpClientModule"],
                __WEBPACK_IMPORTED_MODULE_18__farris_ide_devkit_services__["GSPHttpModule"],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_14__aif_be_flowchart_aif_be_flowchart_designer_component__["AifBeFlowchartDesignerComponent"], __WEBPACK_IMPORTED_MODULE_13__pipe_SafePipe__["SafePipe"], __WEBPACK_IMPORTED_MODULE_15__aif_be_flowchart_property_selector_property_selector_property_selector_component__["PropertySelectorComponent"]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_14__aif_be_flowchart_aif_be_flowchart_designer_component__["AifBeFlowchartDesignerComponent"], __WEBPACK_IMPORTED_MODULE_15__aif_be_flowchart_property_selector_property_selector_property_selector_component__["PropertySelectorComponent"]]
        })
    ], AifBeFlowchartDesignerModule);
    return AifBeFlowchartDesignerModule;
}());



/***/ }),

/***/ "./src/packages/aif-be-flowchart/views/aif-be-flowchart-property-selector/property-selector/property-selector.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".templateBlock {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n\r\n.infoBlock {\r\n    width: 100%;\r\n    min-width: 400px;\r\n}\r\n\r\n.infoBlock label {\r\n    width: 50px;\r\n}\r\n\r\n.templateSelector {\r\n    width: 600px;\r\n    height: 450px;\r\n    border: 0.5px solid #ddd;\r\n}\r\n\r\n.templateDescription {\r\n    width: 200px;\r\n    height: 450px;\r\n    border: 0.5px solid #ddd;\r\n}\r\n\r\n.templateInfo {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/aif-be-flowchart/views/aif-be-flowchart-property-selector/property-selector/property-selector.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- \r\nbizobjectID: \"salesorder\"\r\ncode: \"salesorder\"\r\ncontent: \"{\"ID\":\"bfe1b263-a5c5-498b-8619-e89e0741fd84\",\"Code\":\"salesorder\",\"Name\":\"salesorder\",\"IsVirtual\":false,\"EntityType\":\"\",\"ExtendNodeList\":[{\"GSPBusinessEntity\":\"<GSPBusinessEntity ComponentAssemblyName=\\\"Inspur.GS.BPM.SD.salesorder\\\" DataLockType=\\\"PessimisticLocking\\\" Category=\\\"DependentBusinessEntity\\\" DependentEntityId=\\\"\\\" DependentEntityName=\\\"\\\" DependentEntityPackageName=\\\"\\\" IsUsingTimeStamp=\\\"False\\\"><MainObject ID=\\\"460155bd-ab44-43a6-8c48-911925366275\\\"><DeterminationList /><ValidationList /><ActionList /><ElementList><Element RequiredCheckOccasion=\\\"All\\\" ID=\\\"7d6b6e3d-78fb-47a6-ba3f-c57bce9acf29\\\" /></ElementList></MainObject><MgrActionList><InternalOperation ID=\\\"m_6xIwJwoUy7qzsuZ6_S5A\\\" OperationId=\\\"\\\" OperationName=\\\"\\\" /><InternalOperation ID=\\\"Tji_dbrLtEKQlOLRpOJj9Q\\\" OperationId=\\\"\\\" OperationName=\\\"\\\" /><InternalOperation ID=\\\"fQbpcO7bIEGoRdTZZIyrag\\\" OperationId=\\\"\\\" OperationName=\\\"\\\" /><InternalOperation ID=\\\"8Wna6KaBQEOHpRJfmGMBYQ\\\" OperationId=\\\"\\\" OperationName=\\\"\\\" /><InternalOperation ID=\\\"9sEsnADPFkCRK6ZBC0OwiA\\\" OperationId=\\\"\\\" OperationName=\\\"\\\" /></MgrActionList></GSPBusinessEntity>\"}],\"PrimayKeyID\":\"ID\",\"GeneratingAssembly\":\"Inspur.GS.BPM.SD.salesorder\",\"FkConstraints\":[],\"MainObject\":{\"ContainElements\":[{\"ID\":\"7d6b6e3d-78fb-47a6-ba3f-c57bce9acf29\",\"Code\":\"ID\",\"Name\":\"ID\",\"LabelID\":\"ID\",\"ObjectType\":\"None\",\"MDataType\":\"String\",\"BillCodeConfig\":{\"CanBillCode\":true,\"BillCodeID\":\"\",\"BillCodeName\":\"\",\"CodeGenerateType\":0,\"CodeGenerateOccasion\":0},\"DefaultValue\":\"\",\"DefaultValueType\":0,\"Length\":36,\"Precision\":0,\"ChildAssociations\":[],\"ContainEnumValues\":[],\"ColumnID\":\"\",\"IsVirtual\":false,\"IsRequire\":true,\"Readonly\":false,\"IsRefElement\":false,\"RefElementID\":\"\",\"IsCustomItem\":false,\"IsMultiLanguage\":false,\"IsRef\":false,\"BelongModelID\":\"\",\"IsUdt\":false,\"UdtPkgName\":\"\",\"UdtID\":\"\",\"UdtName\":\"\",\"CalculationExpress\":null,\"ValidationExpress\":null,\"RequiredCheckOccasion\":\"All\"}],\"ContainChildObjects\":[],\"ID\":\"460155bd-ab44-43a6-8c48-911925366275\",\"Code\":\"salesorder\",\"Name\":\"salesorder\",\"ObjectType\":0,\"RefObjectName\":\"\",\"LogicDelete\":false,\"ColumnGenerateID\":{\"ElementID\":\"7d6b6e3d-78fb-47a6-ba3f-c57bce9acf29\",\"GernerateType\":\"Guid\"},\"ContainConstraints\":[],\"OrderbyCondition\":\"\",\"FilterCondition\":\"\",\"ModifiedDateElementID\":\"\",\"CreatorElementID\":\"\",\"CreatedDateElementID\":\"\",\"ModifierElementID\":\"\",\"RecordDelData\":false,\"IsReadOnly\":false,\"IsVirtual\":false,\"BelongModelID\":\"\",\"HirarchyInfo\":{\"PathGenerateType\":0,\"PathLength\":4},\"Keys\":[],\"IsRef\":false,\"StateElementID\":\"\",\"Determinations\":[],\"Validations\":[],\"BizActions\":[{\"ID\":\"aD73GrGaKEiA7N9jsPxIOQ\",\"Code\":\"Delete\",\"Name\":\"内置删除操作\",\"Description\":null,\"ComponentId\":null,\"ComponentName\":null,\"ComponentPkgName\":null,\"IsVisible\":false,\"BelongModelID\":null,\"IsRef\":false,\"IsGenerateComponent\":false,\"CurentAuthType\":0,\"OpIdList\":[],\"Parameters\":[]},{\"ID\":\"tf9MVINdJ0yhUrsJgfcvBA\",\"Code\":\"Modify\",\"Name\":\"内置修改操作\",\"Description\":null,\"ComponentId\":null,\"ComponentName\":null,\"ComponentPkgName\":null,\"IsVisible\":false,\"BelongModelID\":null,\"IsRef\":false,\"IsGenerateComponent\":false,\"CurentAuthType\":0,\"OpIdList\":[],\"Parameters\":[]},{\"ID\":\"cJwzDlFfa0uz4rChlTEd4g\",\"Code\":\"Retrieve\",\"Name\":\"内置检索操作\",\"Description\":null,\"ComponentId\":null,\"ComponentName\":null,\"ComponentPkgName\":null,\"IsVisible\":false,\"BelongModelID\":null,\"IsRef\":false,\"IsGenerateComponent\":false,\"CurentAuthType\":0,\"OpIdList\":[],\"Parameters\":[]}],\"AuthFieldInfos\":[]},\"ComponentAssemblyName\":\"Inspur.GS.BPM.SD.salesorder\",\"Category\":1,\"DataLockType\":0,\"ExtendType\":\"GSPBusinessEntity\",\"DependentEntityId\":\"\",\"DependentEntityName\":\"\",\"IsUsingTimeStamp\":false,\"DependentEntityPackageName\":\"\",\"Authorizations\":[],\"BizMgrActions\":[{\"ID\":\"m_6xIwJwoUy7qzsuZ6_S5A\",\"Code\":\"Query\",\"Name\":\"内置查询操作\",\"Description\":null,\"ComponentId\":null,\"ComponentName\":null,\"ComponentPkgName\":null,\"IsVisible\":false,\"BelongModelID\":null,\"IsRef\":false,\"IsGenerateComponent\":false,\"CurentAuthType\":0,\"OpIdList\":[],\"Parameters\":[],\"FuncOperationID\":\"\",\"FuncOperationName\":\"\"},{\"ID\":\"Tji_dbrLtEKQlOLRpOJj9Q\",\"Code\":\"RetrieveDefault\",\"Name\":\"内置新增操作\",\"Description\":null,\"ComponentId\":null,\"ComponentName\":null,\"ComponentPkgName\":null,\"IsVisible\":false,\"BelongModelID\":null,\"IsRef\":false,\"IsGenerateComponent\":false,\"CurentAuthType\":0,\"OpIdList\":[],\"Parameters\":[],\"FuncOperationID\":\"\",\"FuncOperationName\":\"\"},{\"ID\":\"fQbpcO7bIEGoRdTZZIyrag\",\"Code\":\"Retrieve\",\"Name\":\"内置检索操作\",\"Description\":null,\"ComponentId\":null,\"ComponentName\":null,\"ComponentPkgName\":null,\"IsVisible\":false,\"BelongModelID\":null,\"IsRef\":false,\"IsGenerateComponent\":false,\"CurentAuthType\":0,\"OpIdList\":[],\"Parameters\":[],\"FuncOperationID\":\"\",\"FuncOperationName\":\"\"},{\"ID\":\"8Wna6KaBQEOHpRJfmGMBYQ\",\"Code\":\"Modify\",\"Name\":\"内置修改操作\",\"Description\":null,\"ComponentId\":null,\"ComponentName\":null,\"ComponentPkgName\":null,\"IsVisible\":false,\"BelongModelID\":null,\"IsRef\":false,\"IsGenerateComponent\":false,\"CurentAuthType\":0,\"OpIdList\":[],\"Parameters\":[],\"FuncOperationID\":\"\",\"FuncOperationName\":\"\"},{\"ID\":\"9sEsnADPFkCRK6ZBC0OwiA\",\"Code\":\"Delete\",\"Name\":\"内置删除操作\",\"Description\":null,\"ComponentId\":null,\"ComponentName\":null,\"ComponentPkgName\":null,\"IsVisible\":false,\"BelongModelID\":null,\"IsRef\":false,\"IsGenerateComponent\":false,\"CurentAuthType\":0,\"OpIdList\":[],\"Parameters\":[],\"FuncOperationID\":\"\",\"FuncOperationName\":\"\"}]}\"\r\nextendProperty: \"\"\r\nfileName: \"salesorder.be\"\r\nid: \"bfe1b263-a5c5-498b-8619-e89e0741fd84\"\r\nname: \"salesorder\"\r\nnameSpace: \"Inspur.GS.BPM.SD.salesorder\"\r\nrelativePath: \"bo-salesorder-bpmn-demo/be\"\r\ntype: \"GSPBusinessEntity\"\r\n -->\r\n\r\n<div *ngIf=\"typeName=='GSPBusinessEntity'\">\r\n  <table class=\"table table-striped table-bordered\">\r\n    <tr>\r\n      <th>属性名</th>\r\n      <th>值</th>\r\n    </tr>\r\n    <tr>\r\n      <td>元数据ID</td>\r\n      <td>{{value?value.Id:\"\"}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>名称</td>\r\n      <td>{{value?value.BeName:\"\"}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>编号</td>\r\n      <td>{{value?value.BeType:\"\"}}</td>\r\n    </tr>\r\n    <!-- \r\n    <tr>\r\n      <td>类型</td>\r\n      <td>{{value?value.type:\"\"}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>命名空间</td>\r\n      <td>{{value?value.nameSpace:\"\"}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>业务对象</td>\r\n      <td>{{value?value.bizobjectID:\"\"}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>文件名</td>\r\n      <td>{{value?value.fileName:\"\"}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>相对路径</td>\r\n      <td>{{value?value.relativePath:\"\"}}</td>\r\n    </tr> -->\r\n  </table>\r\n</div>\r\n<div *ngIf=\"typeName!='AifBeWritebackProcess'&&typeName!='GSPBusinessEntity'\">\r\n    <table class=\"table table-striped table-bordered\">\r\n        <tr>\r\n          <th>属性名</th>\r\n          <th>值</th>\r\n        </tr>\r\n        <!-- <tr>\r\n          <td>元数据ID</td>\r\n          <td>{{value?value.id:\"\"}}</td>\r\n        </tr> -->\r\n        <tr>\r\n            <td>流程元素ID</td>\r\n            <td>{{value?value.Id:\"\"}}</td>\r\n          </tr>\r\n        <!-- <tr>\r\n          <td>编号</td>\r\n          <td>{{value?value.code:\"\"}}</td>\r\n        </tr> -->\r\n        <tr>\r\n          <td>名称</td>\r\n          <td>{{value?value.Name:\"\"}}</td>\r\n        </tr>\r\n        <!-- <tr>\r\n          <td>类型</td>\r\n          <td>{{value?value.type:\"\"}}</td>\r\n        </tr>\r\n        <tr>\r\n          <td>命名空间</td>\r\n          <td>{{value?value.nameSpace:\"\"}}</td>\r\n        </tr>\r\n        <tr>\r\n          <td>业务对象</td>\r\n          <td>{{value?value.bizobjectID:\"\"}}</td>\r\n        </tr>\r\n        <tr>\r\n          <td>文件名</td>\r\n          <td>{{value?value.fileName:\"\"}}</td>\r\n        </tr>\r\n        <tr>\r\n          <td>相对路径</td>\r\n          <td>{{value?value.relativePath:\"\"}}</td>\r\n        </tr> -->\r\n      </table>\r\n  <!-- <table class=\"table table-striped table-bordered\">\r\n    <tr>\r\n      <th>属性名</th>\r\n      <th>值</th>\r\n    </tr>\r\n    <tr>\r\n      <td>Id</td>\r\n      <td>{{value}}</td>\r\n    </tr>\r\n    </table> -->\r\n</div>\r\n<div *ngIf=\"typeName=='AifBeWritebackProcess'\">\r\n  <table class=\"table table-striped table-bordered\">\r\n    <!-- <tr>\r\n      <th>Id</th>\r\n      <th>操作</th>\r\n    </tr>\r\n    <tr *ngFor=\"let item of value\">\r\n      <td>{{item}}</td>\r\n      <td><button class=\"btn btn-danger btn-xs\" (click)=\"deleteValueItem($event.srcElement)\">删除</button></td>\r\n    </tr> -->\r\n    <tr>\r\n      <!-- <th>元数据文件ID</th> -->\r\n      <th>回写流程ID</th>\r\n      <!-- <th>编号</th> -->\r\n      <th>名称</th>\r\n      <!-- <th>类型</th> -->\r\n      <!-- <th>命名空间</th> -->\r\n      <!-- <th>业务对象</th> -->\r\n      <!-- <th>文件名</th> -->\r\n      <!-- <th>相对路径</th> -->\r\n      <th>操作</th>\r\n    </tr>\r\n    <tbody *ngIf=\"value!=null\">\r\n      <tr *ngFor=\"let item of value\">\r\n        <!-- <td>{{item.MetadataID}}</td> -->\r\n        <td>{{item.Id}}</td>\r\n        <!-- <td>{{item.code}}</td> -->\r\n        <td>{{item.Name}}</td>\r\n        <!-- <td>{{item.type}}</td> -->\r\n        <!-- <td>{{item.nameSpace}}</td> -->\r\n        <!-- <td>{{item.bizobjectID}}</td> -->\r\n        <!-- <td>{{item.fileName}}</td> -->\r\n        <!-- <td>{{item.relativePath}}</td> -->\r\n        <td><button class=\"btn btn-danger btn-xs\" (click)=\"deleteValueItem($event.srcElement)\">删除</button></td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n<ng-template #iconSelectFooter>\r\n  <div class=\"btns\" *ngIf=\"typeName!='AifBeWritebackProcess'\">\r\n    <button type=\"button\" class=\"btn btn-outline-primary btn-sm px-3\" (click)=\"selectMetadata()\">浏览</button>\r\n    <button type=\"button\" class=\"btn btn-outline-primary btn-sm px-3\" (click)=\"clickOK()\">确定</button>\r\n    <button type=\"button\" class=\"btn btn-outline-secondary btn-sm px-3\" (click)=\"clickCancel()\">取消</button>\r\n  </div>\r\n  <div class=\"btns\" *ngIf=\"typeName=='AifBeWritebackProcess'\">\r\n    <button type=\"button\" class=\"btn btn-outline-primary btn-sm px-3\" (click)=\"selectMetadata()\">添加</button>\r\n    <button type=\"button\" class=\"btn btn-outline-primary btn-sm px-3\" (click)=\"clickOK()\">确定</button>\r\n    <button type=\"button\" class=\"btn btn-outline-secondary btn-sm px-3\" (click)=\"clickCancel()\">取消</button>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/packages/aif-be-flowchart/views/aif-be-flowchart-property-selector/property-selector/property-selector.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertySelectorComponent", function() { return PropertySelectorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyConverter", function() { return PropertyConverter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gsp_lcm_metadata_selector__ = __webpack_require__("./node_modules/@gsp-lcm/metadata-selector/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gsp_lcm_metadata_selector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__gsp_lcm_metadata_selector__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gsp_lcm_metadata_selector_metadata_metadata_select_metadata_service__ = __webpack_require__("./node_modules/@gsp-lcm/metadata-selector/metadata/metadata-select/metadata.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gsp_lcm_metadata_selector_metadata_metadata_select_metadata_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__gsp_lcm_metadata_selector_metadata_metadata_select_metadata_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__farris_ui__ = __webpack_require__("./node_modules/@farris/ui/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__farris_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__farris_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__farris_ide_devkit_services__ = __webpack_require__("./node_modules/@farris/ide-devkit/services/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__farris_ide_devkit_services___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__farris_ide_devkit_services__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PropertySelectorComponent = (function () {
    function PropertySelectorComponent(metadataService, gspMetadataSerive, bsModalService, cacheService, cfr, injector) {
        this.metadataService = metadataService;
        this.gspMetadataSerive = gspMetadataSerive;
        this.bsModalService = bsModalService;
        this.cacheService = cacheService;
        this.cfr = cfr;
        this.injector = injector;
        this.closeModal = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.valueFlag = false;
        this.modalConfig = {
            title: '元数据信息',
            width: 800,
            height: 400
        };
        this._editorParams = {};
    }
    PropertySelectorComponent.prototype.ngOnInit = function () {
    };
    PropertySelectorComponent.prototype.ngOnChanges = function (changes) {
    };
    PropertySelectorComponent.prototype.ngAfterViewInit = function () {
    };
    Object.defineProperty(PropertySelectorComponent.prototype, "editorParams", {
        get: function () {
            return this._editorParams;
        },
        set: function (editorParams) {
            this._editorParams = editorParams;
            this.typeName = editorParams.typeName;
            this.metadataPath = editorParams.metadataPath;
            this.classifier = editorParams.classifier;
            this.actualValue = editorParams.actualValue;
            //如果含有多个元数据id
            if (this.typeName == "AifBeWritebackProcess") {
                this.value = [];
                for (var _i = 0, _a = JSON.parse(this.editorParams.propertyData[this.editorParams.propertyID]); _i < _a.length; _i++) {
                    var writebackProcess = _a[_i];
                    this.value.push({
                        Id: writebackProcess.ProcessId,
                        MetadataID: writebackProcess.ProcessMetadataID,
                        Name: writebackProcess.ProcessName
                    });
                    // this.gspMetadataSerive.GetRefMetadata(this.metadataPath,writebackProcess.ProcessMetadataID,this.cacheService.get("sessionId")).subscribe((item)=>{
                    //   console.log(item);
                    //   this.value.push(item);
                    // },
                    // (error)=>{
                    //   console.error(error);
                    // });
                }
            }
            else if (this.typeName == 'GSPBusinessEntity') {
                // this.gspMetadataSerive.GetRefMetadata(this.metadataPath, this.editorParams.propertyData.BeMetadataID, this.cacheService.get("sessionId")).subscribe(
                //   (data) => {
                //     console.log(data);
                //     this.value = data;
                //   }
                // );
                this.value = {
                    Id: this.editorParams.propertyData.BeMetadataID,
                    BeName: this.editorParams.propertyData.BeName,
                    BeType: this.editorParams.propertyData.BeType
                };
            }
            else if (this.typeName == 'AifBeCreationRule') {
                // this.gspMetadataSerive.GetRefMetadata(this.editorParams.metadataPath,this.editorParams.metadataId,this.cacheService.get("sessionId")).subscribe(
                //   (data)=>{
                //     console.log(data);
                //     this.value=data;
                //   }
                // );
                this.value = {
                    Id: this.editorParams.propertyData.CreationRuleId,
                    Name: this.editorParams.propertyData.RuleName,
                    MetadataID: this.editorParams.propertyData.RuleMetadataID,
                };
            }
            else if (this.typeName == 'AifBeCreationProcess') {
                this.value = {
                    Id: this.editorParams.propertyData.CreationProcessId,
                    Name: this.editorParams.propertyData.ProcessName,
                    MetadataID: this.editorParams.propertyData.ProcessName,
                };
            }
        },
        enumerable: true,
        configurable: true
    });
    PropertySelectorComponent.prototype.addValue = function (item) {
        if (Array.isArray(this.value)) {
            this.value.push(item.metadata);
        }
    };
    PropertySelectorComponent.prototype.clickOK = function () {
        if (this.typeName == 'AifBeWritebackProcess') {
            var result = [];
            for (var _i = 0, _a = this.value; _i < _a.length; _i++) {
                var item = _a[_i];
                // let temp=JSON.parse(JSON.parse(item.content).Entity);
                var temp = item;
                result.push({
                    ClrTypeID: "aif.Flowchart.WritebackProcess",
                    MexTag: "aif.Flowchart.WritebackProcess",
                    ProcessId: temp.Id,
                    ProcessName: temp.Name,
                    ProcessMetadataID: temp.MetadataID
                });
            }
            this.editorParams.propertyData[this.editorParams.propertyID] = JSON.stringify(result);
            this.closeModal.emit(JSON.stringify(result));
        }
        else if (this.typeName == 'GSPBusinessEntity') {
            var result = {};
            result.BeMetadataID = this.value.Id;
            result.BeName = this.value.BeName;
            result.BeType = this.value.BeType;
            result.typeName = this.editorParams.typeName;
            this.editorParams.propertyData.BeMetadataID = this.value.Id;
            this.editorParams.propertyData.BeName = this.value.BeName;
            this.editorParams.propertyData.BeType = this.value.BeType;
            this.closeModal.emit(result);
        }
        else if (this.typeName == 'AifBeCreationProcess') {
            // let obj=this.getFlowElement(this.value);
            // this.editorParams.propertyData.ProcessName=obj.Name;
            // this.editorParams.propertyData.ProcessMetadataID=obj.MetadataID;
            // let result:any={};
            // result.ProcessMetadataID=this.value.id;
            // result.ProcessName=obj.Name;
            // result.typeName=this.typeName;
            // result.CreationProcessId=obj.Id;
            var result = {};
            this.editorParams.propertyData.ProcessName = this.value.Name;
            this.editorParams.propertyData.CreationProcessId = this.value.Id;
            this.editorParams.propertyData.ProcessMetadataID = this.value.MetadataID;
            result.CreationProcessId = this.value.Id;
            result.ProcessName = this.value.Name;
            result.typeName = this.typeName;
            result.ProcessMetadataID = this.value.MetadataID;
            this.closeModal.emit(result);
        }
        else if (this.typeName == 'AifBeCreationRule') {
            // let obj=this.getFlowElement(this.value);
            // this.editorParams.propertyData.RuleName=obj.Name;
            // this.editorParams.propertyData.RuleMetadataID=obj.MetadataID;
            // let result:any={};
            // result.RuleMetadataID=this.value.id;
            // result.RuleName=obj.Name;
            // result.typeName=this.typeName;
            // result.CreationRuleId=obj.Id;
            var result = {};
            this.editorParams.propertyData.RuleName = this.value.Name;
            this.editorParams.propertyData.CreationRuleId = this.value.Id;
            this.editorParams.propertyData.RuleMetadataID = this.value.MetadataID;
            result.CreationRuleId = this.value.Id;
            result.RuleName = this.value.Name;
            result.typeName = this.typeName;
            result.RuleMetadataID = this.value.MetadataID;
            this.closeModal.emit(result);
        }
    };
    PropertySelectorComponent.prototype.clickCancel = function () {
        this.closeModal.emit();
    };
    PropertySelectorComponent.prototype.selectMetadata = function () {
        var _this = this;
        // 
        var selectMetadataComponentFactory = this.cfr.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_1__gsp_lcm_metadata_selector__["SelectMetadataComponent"]);
        var selectMetadataComponentRef = selectMetadataComponentFactory.create(this.injector);
        selectMetadataComponentRef.instance.typeName = this.editorParams.typeName;
        selectMetadataComponentRef.instance.metadataPath = this.editorParams.metadataPath;
        selectMetadataComponentRef.instance.classifier = this.editorParams.classifier;
        selectMetadataComponentRef.instance.selectedMetadata.subscribe(function ($event) {
            console.log($event);
            if (_this.typeName == 'AifBeWritebackProcess') {
                var temp = JSON.parse(JSON.parse($event.metadata.content).Entity);
                _this.value.push({
                    Id: temp.Id,
                    MetadataID: temp.MetadataID,
                    Name: temp.Name
                });
            }
            else if (_this.typeName == 'GSPBusinessEntity') {
                _this.value = {
                    Id: $event.metadata.id,
                    BeName: $event.metadata.name,
                    BeType: $event.metadata.code
                };
            }
            else {
                var temp = JSON.parse(JSON.parse($event.metadata.content).Entity);
                _this.value = {
                    Id: temp.Id,
                    MetadataID: temp.MetadataID,
                    Name: temp.Name
                };
            }
        });
        var dialog = this.bsModalService.show(selectMetadataComponentRef, {
            title: '元数据选择',
            width: 882,
            height: 573,
            showButtons: false
        });
        selectMetadataComponentRef.instance.closeModalEmitter.subscribe(function ($event) {
            dialog.close();
        });
    };
    PropertySelectorComponent.prototype.deleteValueItem = function (obj) {
        // 
        console.log("删除项");
        if (Array.isArray(this.value) == false) {
            return;
        }
        var metadataID = obj.parentElement.parentElement.getElementsByTagName("td")[0].innerText;
        for (var i = 0; i < this.value.length; i++) {
            if (this.value[i].MetadataID == metadataID) {
                this.value.splice(i, 1);
                break;
            }
            // if (this.value[i].id == metadataId) {
            //   this.value.splice(i, 1);
            //   break;
            // }
        }
        console.log(this.value);
    };
    PropertySelectorComponent.prototype.getFlowElement = function (value) {
        return value && typeof value == 'object' ? JSON.parse(JSON.parse(value.content).Entity) : null;
    };
    PropertySelectorComponent.prototype.getFlowElementId = function (value) {
        return value && typeof value == 'object' ? JSON.parse(JSON.parse(value.content).Entity).Id : "";
    };
    PropertySelectorComponent.prototype.test = function () {
        return "hello";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], PropertySelectorComponent.prototype, "closeModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PropertySelectorComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('iconSelectFooter'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], PropertySelectorComponent.prototype, "modalFooter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("selectMetadataComponentContainer", { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"])
    ], PropertySelectorComponent.prototype, "selectMetadataComponentContainer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("editorParams")
        //public editorParams: any = {};
        ,
        __metadata("design:type", Object)
    ], PropertySelectorComponent.prototype, "_editorParams", void 0);
    PropertySelectorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-property-selector',
            template: __webpack_require__("./src/packages/aif-be-flowchart/views/aif-be-flowchart-property-selector/property-selector/property-selector.component.html"),
            styles: [__webpack_require__("./src/packages/aif-be-flowchart/views/aif-be-flowchart-property-selector/property-selector/property-selector.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__gsp_lcm_metadata_selector_metadata_metadata_select_metadata_service__["MetadataService"],
            __WEBPACK_IMPORTED_MODULE_1__gsp_lcm_metadata_selector__["GSPMetadataService"],
            __WEBPACK_IMPORTED_MODULE_3__farris_ui__["BsModalService"],
            __WEBPACK_IMPORTED_MODULE_4__farris_ide_devkit_services__["CacheService"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], PropertySelectorComponent);
    return PropertySelectorComponent;
}());

var PropertyConverter = (function () {
    function PropertyConverter() {
    }
    PropertyConverter.prototype.convertTo = function (data) {
        if (!data) {
            return "";
        }
        //debugger;
        if (typeof data == 'string') {
            if (data.startsWith("[") && data.endsWith("]")) {
                var temp = JSON.parse(data);
                var str = "";
                for (var _i = 0, _a = JSON.parse(data); _i < _a.length; _i++) {
                    var item = _a[_i];
                    str = str + item.ProcessName + ",";
                }
                return str.length > 0 ? str.substr(0, str.length - 1) : "";
            }
            return data;
        }
        else if (typeof data == 'object') {
            if (Array.isArray(data)) {
                var s = "";
                for (var _b = 0, data_1 = data; _b < data_1.length; _b++) {
                    var item = data_1[_b];
                    s = s + item.ProcessName + ",";
                }
                return s.substr(0, s.length - 1);
            }
            if (data.typeName == 'AifBeCreationProcess') {
                return data.ProcessName;
            }
            else if (data.typeName == 'GSPBusinessEntity') {
                return data.BeName;
            }
            else if (data.typeName == 'AifBeCreationRule') {
                return data.RuleName;
            }
        }
    };
    return PropertyConverter;
}());



/***/ }),

/***/ "./src/packages/aif-be-flowchart/views/aif-be-flowchart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AifBeFlowchartService", function() { return AifBeFlowchartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit_services__ = __webpack_require__("./node_modules/@farris/ide-devkit/services/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit_services___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit_services__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AifBeFlowchartService = (function () {
    function AifBeFlowchartService(http) {
        this.http = http;
        this.baseUrl = '/api/dev/sys/v1.0';
    }
    AifBeFlowchartService.prototype.publishFlowchartEntity = function (metadataDto, metadataPackageName, suName) {
        var content = {
            "BpmnModel": metadataDto.content,
            "MetadataId": metadataDto.id,
            "MetadataPackageName": metadataPackageName,
            "SuName": suName,
        };
        var param = {
            "flowchartContent": content
        };
        return this.http.post(this.baseUrl + "/PublishBeFlowchartEntity", param);
    };
    AifBeFlowchartService.prototype.unPublishFlowchartEntity = function (metadataId) {
        var param = {
            "parameters": metadataId
        };
        var url = " " + this.baseUrl + "/UnPublishBeFlowchartEntity";
        return this.http.post(url, param);
    };
    AifBeFlowchartService.prototype.findPublishedBeFlowchartEntities = function (key) {
        return this.http.get(this.baseUrl + "/BeFlowchartEntities/" + key);
    };
    AifBeFlowchartService.prototype.isBeFlowchartPublished = function (metadataId) {
        var url = " " + this.baseUrl + "/BeFlowchartEntities/IsPublished(metadataId='" + metadataId + "')";
        return this.http.get(url);
    };
    AifBeFlowchartService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit_services__["HttpService"]])
    ], AifBeFlowchartService);
    return AifBeFlowchartService;
}());



/***/ }),

/***/ "./src/packages/aif-be-flowchart/views/aif-be-flowchart/aif-be-flowchart-designer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n}\r\n\r\n#bemain * {\r\n    padding: 0 !important;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n}\r\n\r\n.bpmn-designer{\r\n    height: 100%;\r\n    min-height: 400px;\r\n    /* height: -webkit-fill-available;  */\r\n    /* min-width: 550px; */\r\n    width: 100%;\r\n    /* width: -webkit-fill-available; */\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/aif-be-flowchart/views/aif-be-flowchart/aif-be-flowchart-designer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-column\" style=\"flex:1 1 auto;\">\r\n  <!-- <div>\r\n    <input type=\"text\" onblur=\"alert(1111);return false;\">\r\n  </div> -->\r\n  <div id=\"bpmnmain\" class=\"d-flex flex-column\" style=\" flex: 1 1 auto; display:flex!important;flex-direction: row!important\">\r\n    <kendo-splitter-pane [collapsible]=\"false\" size=\"100%\">\r\n      <!-- <iframe #iframe class=\"bpmn-designer\" src=\"http://localhost:53266/index.html\" frameborder=\"0\"> -->\r\n      <!-- <iframe #iframe class=\"bpmn-designer\" src=\"http://localhost:10202/wwwroot/index.html\" (beforeunload)=\"beforeunload($event)\" onreadystatechange=\"alert('test')\" frameborder=\"0\" (load)=\"sendMetadataMessage(this)\" (readystatechange)=\"sendMetadataMessage(this)\"> -->\r\n        <!-- <iframe #iframe class=\"bpmn-designer\" [src]=\"getTarget()|safe\" frameborder=\"0\" (load)=\"sendMetadataMessage(this)\" (readystatechange)=\"sendMetadataMessage(this)\">       -->\r\n        <iframe #iframe class=\"bpmn-designer\" src=\"./assets/bpmneditor/index.html\" frameborder=\"0\" (load)=\"sendMetadataMessage(this)\" (readystatechange)=\"sendMetadataMessage(this)\">\r\n\r\n      </iframe>\r\n    </kendo-splitter-pane>\r\n    <kendo-splitter-pane [collapsible]=\"true\">\r\n      <app-property-panel #propertyPanel [(propertyConfig)]=\"propertyConfig\" [(propertyData)]=\"propertyData\" [width]=\"200\"\r\n        [showCloseBtn]=\"false\" (propertyChanged)=\"test($event)\"></app-property-panel>\r\n    </kendo-splitter-pane>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/packages/aif-be-flowchart/views/aif-be-flowchart/aif-be-flowchart-designer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export POST_MESSAGE_SOURCE */
/* unused harmony export POST_MESSAGE_TARGET */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AifBeFlowchartDesignerComponent", function() { return AifBeFlowchartDesignerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit_services__ = __webpack_require__("./node_modules/@farris/ide-devkit/services/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit_services___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit_services__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gsp_lcm_metadata_selector__ = __webpack_require__("./node_modules/@gsp-lcm/metadata-selector/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gsp_lcm_metadata_selector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__gsp_lcm_metadata_selector__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__farris_ide_devkit__ = __webpack_require__("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__farris_ide_devkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__farris_ide_devkit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__aif_be_flowchart_property_selector_property_selector_property_selector_component__ = __webpack_require__("./src/packages/aif-be-flowchart/views/aif-be-flowchart-property-selector/property-selector/property-selector.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gsp_lcm_metadata_selector_metadata_metadata_select_metadata_service__ = __webpack_require__("./node_modules/@gsp-lcm/metadata-selector/metadata/metadata-select/metadata.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gsp_lcm_metadata_selector_metadata_metadata_select_metadata_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__gsp_lcm_metadata_selector_metadata_metadata_select_metadata_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__aif_be_flowchart_service__ = __webpack_require__("./src/packages/aif-be-flowchart/views/aif-be-flowchart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//export const POST_MESSAGE_TARGET="http://localhost:53266/index.html";
//export const POST_MESSAGE_SOURCE="http://localhost:5000/platform/dev/main/web/webide/index.html";
// export const POST_MESSAGE_TARGET = "http://localhost:10202/wwwroot/index.html";
// export const POST_MESSAGE_SOURCE = "http://localhost:42000/";
var POST_MESSAGE_SOURCE = window.document.location.href;
var POST_MESSAGE_TARGET = window.document.location.href;
// export const POST_MESSAGE_TARGET = window.document.location.href.substring(0, window.document.location.href.search("webide")+6) + "/bpmneditor/index.html";
var AifBeFlowchartDesignerComponent = (function () {
    function AifBeFlowchartDesignerComponent(lcmService, cache, sanitizer, cfr, injector, modalService, metadataService, aifBeFlowchartService) {
        this.lcmService = lcmService;
        this.cache = cache;
        this.sanitizer = sanitizer;
        this.cfr = cfr;
        this.injector = injector;
        this.modalService = modalService;
        this.metadataService = metadataService;
        this.aifBeFlowchartService = aifBeFlowchartService;
        this.propertyConfig = [];
        this.propertyData = {};
        this.title = 'app';
        this.resourceTypeList = []; //资源类型列表
        this.changed = false;
        console.log("构造函数....");
        this.addMessageListener();
        // console.log(this.iframe);
    }
    Object.defineProperty(AifBeFlowchartDesignerComponent.prototype, "metadataContent", {
        set: function (metadataContent) {
            this._metadataContent = metadataContent;
            this.loadMetadata(metadataContent);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AifBeFlowchartDesignerComponent.prototype, "metadataUri", {
        get: function () {
            return this._metadataUri;
        },
        set: function (metadataUri) {
            var _this = this;
            this._metadataUri = metadataUri;
            // todo: 通过元数据服务获取元数据内容
            ///////
            var fullname = this._metadataUri.substring(this._metadataUri.lastIndexOf('/') + 1);
            var path = this._metadataUri.substring(1, this._metadataUri.lastIndexOf('/'));
            this.lcmService.LoadMetadata(fullname, path).subscribe(function (data) {
                _this.metadataDto = data;
                _this.loadMetadata(_this.metadataDto);
            }, function (error) {
                alert("加载元数据失败");
            });
        },
        enumerable: true,
        configurable: true
    });
    AifBeFlowchartDesignerComponent.prototype.ngOnInit = function () {
        console.log("ngOnInit");
        this.initPropertyPanel();
        // console.log(this.iframe);
    };
    AifBeFlowchartDesignerComponent.prototype.ngAfterViewInit = function () {
        console.log("ngAfterViewInit");
        //this.addMessageListener();
        //console.log(this.iframe.nativeElement.contentWindow==window);
    };
    AifBeFlowchartDesignerComponent.prototype.ngAfterContentInit = function () {
        console.log("ngAfterContentInit");
    };
    AifBeFlowchartDesignerComponent.prototype.ngAfterViewChecked = function () {
        // console.log("ngAfterViewChecked");
    };
    AifBeFlowchartDesignerComponent.prototype.ngOnDestroy = function () {
        console.log("ngOnDestroy");
        //confirm("确定要离开页面？");
        // console.log(window['myParentPageMessageFunct']);
    };
    //iframe加载完成后向grapheditor发送消息
    AifBeFlowchartDesignerComponent.prototype.sendMetadataMessage = function (obj) {
        // console.log("添加iframe监听器测试");
        // console.log(this.iframe);
        // this.iframe.nativeElement.onclose=function(){
        //   console.log(1111);
        //   return "1111";
        // };
        // this.iframe.nativeElement.contentDocument.onclose=function(){
        //   console.log(2222);
        //   return "2222";
        // };
        // console.log(this.iframe);
        // console.log("添加结束");
        if (obj.readyState) {
            console.log("ie 浏览器，支持onreadystatechange事件");
            if (obj.readyState === "complete" || obj.readyState === "loaded") {
                //代码能执行到这里说明已经载入成功完毕了
                this.sendOpenMetadataMessage();
            }
            //要清除掉事件
            console.log("清除事件");
            obj.detachEvent("onreadystatechange", arguments.callee);
        }
        else {
            console.log("支持onload事件");
            this.sendOpenMetadataMessage();
            // console.log("清除事件");
            // (obj as HTMLElement).removeEventListener("onload",this.sendMetadataMessage);
        }
    };
    AifBeFlowchartDesignerComponent.prototype.sendOpenMetadataMessage = function () {
        var _this = this;
        setTimeout(function () {
            console.log("延时器");
            var iframeWindow = _this.iframe.nativeElement.contentWindow;
            iframeWindow.postMessage("#open#" + _this._metadataContent, POST_MESSAGE_TARGET);
            console.log("打开元数据消息已发送.....");
        }, 1000);
    };
    AifBeFlowchartDesignerComponent.prototype.beforeunload = function (obj) {
        //alert(obj);
    };
    AifBeFlowchartDesignerComponent.prototype.unload = function (obj) {
        //alert("unload");
    };
    AifBeFlowchartDesignerComponent.prototype.beforedeactivate = function () {
        //alert("beforedeactivate");
    };
    AifBeFlowchartDesignerComponent.prototype.test = function ($event) {
        console.log($event);
    };
    AifBeFlowchartDesignerComponent.prototype.getTarget = function () {
        console.log(POST_MESSAGE_TARGET);
        return POST_MESSAGE_TARGET;
    };
    AifBeFlowchartDesignerComponent.prototype.initPropertyPanel = function () {
        var _this = this;
        console.log("初始化父页面" + this._metadataUri + "属性框容器");
        // this.propertyContainer.remove();
        this.propertyData = {};
        this.propertyConfig = [];
        // this.propertyPanel.collapse();
        this.propertyPanel.width = 60;
        this.propertyPanel.showCloseBtn = false;
        // this.propertyPanel.expand();
        //this.propertyPanel.propertyValueChanged(this.propertyData);
        this.propertyPanel.propertyChanged.subscribe(function (data) { return _this.propertyDataChanged(data); });
        // this.propertyService.initPropertyContainer(this.propertyContainer);
    };
    AifBeFlowchartDesignerComponent.prototype.propertyDataChanged = function (data) {
        //console.log(JSON.stringify(data));
        //debugger;
        if (typeof (data.propertyValue) == 'string') {
            // if(data.propertyValue==='empty'){
            //   (this.propertyData[data.propertyID] as string)="";
            //   data.propertyValue="";
            // }
            this.propertyData[data.propertyID] = data.propertyValue;
            this.sendMessage(this.createMessage(data));
        }
        else if (typeof (data.propertyValue) == 'object') {
            if (Array.isArray(data.propertyValue)) {
                var str = "";
                for (var _i = 0, _a = data.propertyValue; _i < _a.length; _i++) {
                    var item = _a[_i];
                    str = str + item + ",";
                }
                str = str.length > 0 ? str.substr(0, str.length - 1) : "";
                data.propertyValue = str;
                this.propertyData[data.propertyID] = str;
                this.sendMessage(this.createMessage(data));
            }
            else {
                for (var i in data.propertyValue) {
                    if (i == 'typeName') {
                        continue;
                    }
                    // this.propertyData[i]=data.propertyValue[i];
                    this.sendMessage(this.createMessage({
                        propertyID: i,
                        propertyValue: data.propertyValue[i]
                    }));
                }
            }
        }
    };
    //添加消息监听器，实现webide与grapheditor交互
    AifBeFlowchartDesignerComponent.prototype.addMessageListener = function () {
        var _this = this;
        if (window.addEventListener != undefined) {
            if (window['myParentPageMessageFunct']) {
                // console.log("不删除父页面已有监听器");
                console.log("删除父页面" + this._metadataUri + "已有消息监听器");
                window.removeEventListener("message", window['myParentPageMessageFunct'], false);
            }
            console.log("为父页面" + this._metadataUri + "添加新的消息监听器");
            var funct = function (event) {
                console.log("父页面" + _this._metadataUri + "收到" + event.origin + "消息......");
                console.log(event.data);
                //判断消息是否来自于指定源地址
                if (POST_MESSAGE_TARGET.search(event.origin) != -1) {
                    if (typeof event.data == 'string') {
                        var message = event.data;
                        //保存元数据，消息字符串以#save#开头作为命令标识
                        if (message.startsWith('#save#')) {
                            console.log("文件保存操作");
                            var content = event.data.substr(6);
                            _this._metadataContent = content;
                            _this.metadataDto.content = content;
                            _this.saveMetadata();
                            _this.changed = false;
                        }
                        else if (message.startsWith('#show#')) {
                            //显示属性框，消息字符串以#show#开头作为命令标识
                            console.log("属性框更新操作");
                            //更新属性框
                            _this.setPropertyConfig(JSON.parse(message.substr(6)));
                            _this.changed = true;
                        }
                        else if (message.startsWith('#publish#')) {
                            //发布元数据，消息字符串以#publish#开头作为命令标识
                            console.log("元数据发布操作");
                            var content = event.data.substr(9);
                            _this._metadataContent = content;
                            _this.metadataDto.content = content;
                            //发布元数据
                            _this.publishMetadata();
                            _this.changed = false;
                        }
                        else if (message.startsWith('#unpublish#')) {
                            //发布元数据，消息字符串以#unpublish#开头作为命令标识
                            console.log("元数据撤销发布操作");
                            var content = event.data.substr(11);
                            _this._metadataContent = content;
                            _this.metadataDto.content = content;
                            //撤销发布元数据
                            _this.unpublishMetadata();
                            _this.changed = true;
                        }
                    }
                    else {
                        console.log("未能识别的消息命令");
                    }
                }
            };
            window['myParentPageMessageFunct'] = funct;
            this.myParentPageMessageFunct = funct;
            window.addEventListener('message', funct, false);
        }
        else {
        }
    };
    /**
     * 父子页面规定好传输json数据格式
     * 示例:
     * {
     *      propertyConfig:[
     *          usualPropertyConfig,
     *          customPropertyConfig
     *      ],
     *
     *      propertyData:{
     *          k1:v1,
     *          k2:v2,
     *          ...
     *      }
     * }
     *
     * @param obj
     */
    AifBeFlowchartDesignerComponent.prototype.setPropertyConfig = function (obj) {
        //更新属性框数据与配置
        this.propertyData = obj['propertyData'];
        this.propertyConfig = this.convertToPropertyConfig(obj['propertyConfig']);
        if (this.propertyData.hasOwnProperty("Key")) {
            console.log("check whether published");
            this.setProcessKeyReadonly();
        }
        // this.propertyPanel.propertyValueChanged(this.propertyData);
        // 
        this.showPropertiesPanel();
    };
    //将obj['propertyConfig']转化为ElementPropertyConfig[]
    AifBeFlowchartDesignerComponent.prototype.convertToPropertyConfig = function (obj) {
        var propertyConfig = [];
        for (var _i = 0, obj_1 = obj; _i < obj_1.length; _i++) {
            var element = obj_1[_i];
            var elementPropertyConfig = new __WEBPACK_IMPORTED_MODULE_3__farris_ide_devkit__["ElementPropertyConfig"]();
            elementPropertyConfig.categoryId = element['categoryId'];
            elementPropertyConfig.categoryName = element['categoryName'];
            elementPropertyConfig.setPropertyRelates = element['setPropertyRelates'] != undefined ? element['setPropertyRelates'] : undefined;
            elementPropertyConfig.properties = element['properties'] ? this.convertToPropertyEntity(element['properties']) : [];
            propertyConfig.push(elementPropertyConfig);
        }
        // obj.forEach(element => {
        // });
        return propertyConfig;
    };
    //将element['properties']转化为PropertyEntity[]
    AifBeFlowchartDesignerComponent.prototype.convertToPropertyEntity = function (obj) {
        var properties = [];
        for (var _i = 0, obj_2 = obj; _i < obj_2.length; _i++) {
            var item = obj_2[_i];
            var property = new __WEBPACK_IMPORTED_MODULE_3__farris_ide_devkit__["PropertyEntity"]();
            for (var i in item) {
                property[i] = item[i];
            }
            if (property.propertyType == "modal") {
                // property.propertyType = "string";
                property.editor = __WEBPACK_IMPORTED_MODULE_5__aif_be_flowchart_property_selector_property_selector_property_selector_component__["PropertySelectorComponent"];
                property.converter = new __WEBPACK_IMPORTED_MODULE_5__aif_be_flowchart_property_selector_property_selector_property_selector_component__["PropertyConverter"]();
                property.editorParams = {
                    metadataPath: this.metadataDto.relativePath,
                    metadataId: this.propertyData['RuleMetadataID'] || this.propertyData['ProcessMetadataID'],
                    typeName: this.judgeTypeName(property.propertyID),
                    actualValue: this.propertyData[property.propertyID],
                    propertyID: property.propertyID,
                    propertyData: this.propertyData,
                };
                if (property.propertyID === 'BeType') {
                    property.editorParams['BeMetadataPackageName'] = this.propertyData['BeMetadataPackageName'];
                    property.editorParams['BeMetadataID'] = this.propertyData['BeMetadataID'];
                }
            }
            properties.push(property);
        }
        // obj.forEach((item) => {
        // });
        return properties;
    };
    //创建并显示属性框
    AifBeFlowchartDesignerComponent.prototype.showPropertiesPanel = function () {
        // this.propertyPanel.expand();
        return false; // 防止冒泡
    };
    //构造属性修改时父页面与子页面之间传递消息
    AifBeFlowchartDesignerComponent.prototype.createMessage = function (data) {
        var msg = {};
        //需携带唯一id使子页面确定是哪一元素
        msg['id'] = this.propertyData['id'];
        //修改内容的key和value
        msg['propertyID'] = data['propertyID'];
        msg['propertyValue'] = data['propertyValue'];
        return JSON.stringify(msg);
    };
    //向子页面发送修改消息
    AifBeFlowchartDesignerComponent.prototype.sendMessage = function (data) {
        var iframeWindow = this.iframe.nativeElement.contentWindow;
        iframeWindow.postMessage(data, POST_MESSAGE_TARGET);
        this.changed = true;
    };
    /**
     *
     * @param dto 加载元数据
     */
    AifBeFlowchartDesignerComponent.prototype.loadMetadata = function (dto) {
        this.metadataDto = dto;
        if (this.metadataDto.content && this.metadataDto.content != "") {
            this._metadataContent = dto.content;
        }
    };
    /**
     * 保存元数据
     */
    AifBeFlowchartDesignerComponent.prototype.saveMetadata = function () {
        var _this = this;
        this.saveMetadataService().subscribe(function () {
            alert("保存成功");
            _this.changed = false;
        }, function (error) {
            alert("保存失败!\n");
        });
    };
    AifBeFlowchartDesignerComponent.prototype.saveMetadataService = function () {
        return this.lcmService.SaveMetadata(this.metadataDto, this.cache.get("sessionId"));
    };
    AifBeFlowchartDesignerComponent.prototype.publishMetadata = function () {
        var _this = this;
        this.saveMetadataService().subscribe(function () {
            _this.lcmService.GetProjectInfo(_this.metadataDto.relativePath).subscribe(function (projectInfo) {
                _this.lcmService.GetGspProjInfo(projectInfo.projectPath).subscribe(function (gspProjctInfo) {
                    _this.aifBeFlowchartService.publishFlowchartEntity(_this.metadataDto, projectInfo.metadataPackageInfo.name, gspProjctInfo.serviceUnitCode).subscribe(function () {
                        alert("发布成功");
                        _this.updateProcessKeyReadonly(true);
                    }, function (error) {
                        alert("发布失败!\n" + error.error.Message);
                        _this.updateProcessKeyReadonly(false);
                    });
                });
            });
        }, function (error) {
            alert("发布失败!\n");
        });
    };
    AifBeFlowchartDesignerComponent.prototype.unpublishMetadata = function () {
        var _this = this;
        // this.lcmService.GetProjectInfo(this.metadataDto.relativePath).subscribe(projectInfo => {
        // this.lcmService.GetGspProjInfo(projectInfo.projectPath).subscribe(gspProjctInfo => {
        this.aifBeFlowchartService.unPublishFlowchartEntity(this.metadataDto.id).subscribe(function () {
            alert("撤销发布成功");
            _this.updateProcessKeyReadonly(false);
        }, function (error) {
            _this.updateProcessKeyReadonly(true);
            var errorString = error.error ? error.error.Message : error.statusText;
            alert("撤销发布失败。\n" + errorString);
        });
        // });
        // });
    };
    AifBeFlowchartDesignerComponent.prototype.judgeTypeName = function (propertyID) {
        switch (propertyID) {
            case "CreationProcessId":
            case "ProcessName":
            case "ProcessMetadataID":
                return "AifBeCreationProcess";
            case "CreationRuleId":
            case "RuleName":
            case "RuleMetadataID":
                return "AifBeCreationRule";
            case "BeType":
            case "BeName":
                return "GSPBusinessEntity";
            case "extensionElements":
                return "AifBeWritebackProcess";
            default:
                return "";
        }
    };
    AifBeFlowchartDesignerComponent.prototype.setProcessKeyReadonly = function () {
        var _this = this;
        this.aifBeFlowchartService.isBeFlowchartPublished(this.metadataDto.id).subscribe(function (data) {
            if (data.value == false) {
                _this.updateProcessKeyReadonly(false);
            }
            else {
                _this.updateProcessKeyReadonly(true);
            }
        });
    };
    AifBeFlowchartDesignerComponent.prototype.updateProcessKeyReadonly = function (newValue) {
        this.propertyConfig.forEach(function (config) {
            if (config.categoryId === "property") {
                config.properties.forEach(function (entity) {
                    if (entity.propertyID === "Key") {
                        entity.readonly = newValue;
                        return;
                    }
                });
                return;
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('propertyPanel'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__farris_ide_devkit__["PropertyPanelComponent"])
    ], AifBeFlowchartDesignerComponent.prototype, "propertyPanel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("iframe"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], AifBeFlowchartDesignerComponent.prototype, "iframe", void 0);
    AifBeFlowchartDesignerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-aif-be-flowchart-designer',
            template: __webpack_require__("./src/packages/aif-be-flowchart/views/aif-be-flowchart/aif-be-flowchart-designer.component.html"),
            styles: [__webpack_require__("./src/packages/aif-be-flowchart/views/aif-be-flowchart/aif-be-flowchart-designer.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_7__aif_be_flowchart_service__["AifBeFlowchartService"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__gsp_lcm_metadata_selector__["GSPMetadataService"],
            __WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit_services__["CacheService"],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["DomSanitizer"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"],
            __WEBPACK_IMPORTED_MODULE_3__farris_ide_devkit__["BsModalService"],
            __WEBPACK_IMPORTED_MODULE_6__gsp_lcm_metadata_selector_metadata_metadata_select_metadata_service__["MetadataService"],
            __WEBPACK_IMPORTED_MODULE_7__aif_be_flowchart_service__["AifBeFlowchartService"]])
    ], AifBeFlowchartDesignerComponent);
    return AifBeFlowchartDesignerComponent;
}());



/***/ }),

/***/ "./src/packages/aif-be-flowchart/views/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AifBeFlowchartPackageView", function() { return AifBeFlowchartPackageView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__ = __webpack_require__("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aif_be_flowchart_aif_be_flowchart_designer_component__ = __webpack_require__("./src/packages/aif-be-flowchart/views/aif-be-flowchart/aif-be-flowchart-designer.component.ts");
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


var AifBeFlowchartPackageView = (function (_super) {
    __extends(AifBeFlowchartPackageView, _super);
    function AifBeFlowchartPackageView(serializedState, cfr, injector) {
        var _this = _super.call(this, serializedState) || this;
        _this.cfr = cfr;
        _this.injector = injector;
        var componentFactory = _this.cfr.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_1__aif_be_flowchart_aif_be_flowchart_designer_component__["AifBeFlowchartDesignerComponent"]);
        _this.element = componentFactory.create(_this.injector);
        return _this;
    }
    return AifBeFlowchartPackageView;
}(__WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__["PackageView"]));



/***/ })

},[]);
//# sourceMappingURL=aif-be-flowchart-package.module.chunk.js.map