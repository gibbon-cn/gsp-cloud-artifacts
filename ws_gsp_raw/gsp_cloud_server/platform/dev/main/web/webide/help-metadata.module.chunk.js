webpackJsonp(["help-metadata.module"],{

/***/ "./src/packages/help-metadata/help-metadata.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpMetadataModule", function() { return HelpMetadataModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__farris_ide_devkit__ = __webpack_require__("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__farris_ide_devkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__farris_ide_devkit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__package__ = __webpack_require__("./src/packages/help-metadata/package.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_guide_help_meatadata_guid_component__ = __webpack_require__("./src/packages/help-metadata/views/guide/help-meatadata-guid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_guide_setps_step1_selectDisplayType_component__ = __webpack_require__("./src/packages/help-metadata/views/guide/setps/step1.selectDisplayType.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_guide_setps_step4_displayColumns_component__ = __webpack_require__("./src/packages/help-metadata/views/guide/setps/step4.displayColumns.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_guide_setps_step3_basicInfoSetting_component__ = __webpack_require__("./src/packages/help-metadata/views/guide/setps/step3.basicInfoSetting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_guide_setps_step2_selectDataSource_component__ = __webpack_require__("./src/packages/help-metadata/views/guide/setps/step2.selectDataSource.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__farris_ui__ = __webpack_require__("./node_modules/@farris/ui/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__farris_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__farris_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__views_guide_custom_lookup_component__ = __webpack_require__("./src/packages/help-metadata/views/guide/custom-lookup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__gsp_lcm_metadata_selector__ = __webpack_require__("./node_modules/@gsp-lcm/metadata-selector/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__gsp_lcm_metadata_selector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__gsp_lcm_metadata_selector__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__service_helpmetadata_service__ = __webpack_require__("./src/packages/help-metadata/service/helpmetadata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__views_designer_help_metadata_designer_component__ = __webpack_require__("./src/packages/help-metadata/views/designer/help-metadata-designer.component.ts");
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
 * @Author: Lucas.Huang（疯狂秀才）
 * @Date: 2018-09-28 18:58:11
 * @Last Modified by: Lucas.Huang（疯狂秀才）
 * @Last Modified time: 2018-10-01 10:58:21
 */




// import {  } from '@farris/ide-devkit/components/wizard';












var monacoConfig = {
    baseUrl: './assets',
    defaultOptions: { scrollBeyondLastLine: false },
    onMonacoLoad: function () { }
};
var HelpMetadataModule = (function (_super) {
    __extends(HelpMetadataModule, _super);
    function HelpMetadataModule(cfr, inject) {
        var _this = _super.call(this) || this;
        _this.cfr = cfr;
        _this.inject = inject;
        return _this;
    }
    HelpMetadataModule.prototype.initPackage = function (gsp) {
        this.package = new __WEBPACK_IMPORTED_MODULE_4__package__["HelpDesignerPackage"](gsp, this.cfr, this.inject);
    };
    HelpMetadataModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__farris_ide_devkit__["WizardModule"],
                __WEBPACK_IMPORTED_MODULE_10__farris_ui__["LookupModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_12__gsp_lcm_metadata_selector__["GSPMetadataServiceModule"].forRoot(__WEBPACK_IMPORTED_MODULE_13__environments_environment__["environment"].SERVER_IP),
                __WEBPACK_IMPORTED_MODULE_12__gsp_lcm_metadata_selector__["MetadataSelectModule"],
                __WEBPACK_IMPORTED_MODULE_10__farris_ui__["PerfectScrollbarModule"],
                __WEBPACK_IMPORTED_MODULE_10__farris_ui__["MessagerModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__farris_ui__["LoadingModule"].forRoot({
                    message: 'Loading...'
                }),
                __WEBPACK_IMPORTED_MODULE_3__farris_ide_devkit__["AngularMonacoEditorModule"].forRoot(monacoConfig),
                __WEBPACK_IMPORTED_MODULE_10__farris_ui__["NotifyModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__farris_ui__["TreeTableModule"],
                __WEBPACK_IMPORTED_MODULE_3__farris_ide_devkit__["PropertyPanelModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__views_guide_help_meatadata_guid_component__["HelpMetadataGuidComponent"],
                __WEBPACK_IMPORTED_MODULE_6__views_guide_setps_step1_selectDisplayType_component__["SelectDisplayTypeComponent"],
                __WEBPACK_IMPORTED_MODULE_9__views_guide_setps_step2_selectDataSource_component__["SelectDataSourceComponent"],
                __WEBPACK_IMPORTED_MODULE_8__views_guide_setps_step3_basicInfoSetting_component__["BasicInfoSettingComponent"],
                __WEBPACK_IMPORTED_MODULE_7__views_guide_setps_step4_displayColumns_component__["DisplayColumnsComponent"],
                __WEBPACK_IMPORTED_MODULE_11__views_guide_custom_lookup_component__["CustomLookupComponent"],
                __WEBPACK_IMPORTED_MODULE_15__views_designer_help_metadata_designer_component__["HelpMetadataDesignerComponent"]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__views_guide_help_meatadata_guid_component__["HelpMetadataGuidComponent"],
                __WEBPACK_IMPORTED_MODULE_6__views_guide_setps_step1_selectDisplayType_component__["SelectDisplayTypeComponent"],
                __WEBPACK_IMPORTED_MODULE_9__views_guide_setps_step2_selectDataSource_component__["SelectDataSourceComponent"],
                __WEBPACK_IMPORTED_MODULE_8__views_guide_setps_step3_basicInfoSetting_component__["BasicInfoSettingComponent"],
                __WEBPACK_IMPORTED_MODULE_7__views_guide_setps_step4_displayColumns_component__["DisplayColumnsComponent"],
                __WEBPACK_IMPORTED_MODULE_11__views_guide_custom_lookup_component__["CustomLookupComponent"],
                __WEBPACK_IMPORTED_MODULE_15__views_designer_help_metadata_designer_component__["HelpMetadataDesignerComponent"]
            ],
            exports: [],
            providers: [__WEBPACK_IMPORTED_MODULE_14__service_helpmetadata_service__["HelpMetaDataService"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_core__["ComponentFactoryResolver"], __WEBPACK_IMPORTED_MODULE_2__angular_core__["Injector"]])
    ], HelpMetadataModule);
    return HelpMetadataModule;
}(__WEBPACK_IMPORTED_MODULE_3__farris_ide_devkit__["PackageModule"]));

//# sourceMappingURL=help-metadata.module.js.map

/***/ }),

/***/ "./src/packages/help-metadata/package.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpDesignerPackage", function() { return HelpDesignerPackage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types_help_metadata_defaultvalue__ = __webpack_require__("./src/packages/help-metadata/types/help-metadata.defaultvalue.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit__ = __webpack_require__("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views__ = __webpack_require__("./src/packages/help-metadata/views/index.ts");
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



var HelpDesignerPackage = (function (_super) {
    __extends(HelpDesignerPackage, _super);
    function HelpDesignerPackage(gsp, cfr, injector) {
        var _this = _super.call(this, gsp) || this;
        _this.cfr = cfr;
        _this.injector = injector;
        return _this;
    }
    HelpDesignerPackage.prototype.activate = function (state) {
        var _this = this;
        this.gsp.workspace.addOpener(function (uri) { return _this.openHelpDesigner(uri); });
        this.gsp.eventBus.on(null, null, 'Command:openMetadataGuide:HelpMetadata', this, function (data) { return _this.openHelpGuid(state, data); });
    };
    /**
     * 打开帮助设计器向导
     * @param state
     * @param data
     */
    HelpDesignerPackage.prototype.openHelpGuid = function (state, data) {
        var packageView1 = new __WEBPACK_IMPORTED_MODULE_2__views__["HelpMetadataGuidePackageView"](state, this.cfr, this.injector);
        var element1 = packageView1.getElement();
        var guide = element1.instance;
        guide.metadata.metadata = data;
        guide.metadata.beMetadata = {};
        guide.metadata.helpMetadata = Object.assign({}, __WEBPACK_IMPORTED_MODULE_0__types_help_metadata_defaultvalue__["helpMeatadataDefault"], {
            code: data.code,
            name: data.name
        });
        this.showGuidDialog(element1);
    };
    HelpDesignerPackage.prototype.showGuidDialog = function (el) {
        var _this = this;
        var dialog = this.gsp.workspace.addModalPanel({
            item: {
                element: el,
                modalOptions: {
                    title: '帮助定义向导',
                    width: 800,
                    height: 700,
                    showButtons: false,
                    resizable: false,
                    enableScroll: false,
                    showMaxButton: false
                }
            }
        });
        var comp = el.instance;
        comp.modalClosed.subscribe(function () { return dialog.destroy(); });
        comp.finished.subscribe(function (url) {
            _this.refreshTree(url);
        });
    };
    HelpDesignerPackage.prototype.refreshTree = function (url) {
        var _this = this;
        var nodeInfo = {
            action: '1',
            node: {
                nodeID: '1',
                nodeName: url.substr(url.lastIndexOf('/') + 1),
                nodeType: 'file',
                nodePath: url // 节点路径    /bo-
                // customData: 'foo1'    // 自定义数据，支持增加并使用自定义数据
            }
        };
        this.gsp.eventBus.requestFor('FileTreePanelPackage', null, 'AccessFileTree', nodeInfo, function (responseData) { return _this.gsp.workspace.open(url); });
    };
    HelpDesignerPackage.prototype.openHelpDesigner = function (uri) {
        if (uri.endsWith('.hlp')) {
            var pkgView_1 = new __WEBPACK_IMPORTED_MODULE_2__views__["HelpMetadataDesignerPackageView"]({}, this.cfr, this.injector);
            var currentElement = pkgView_1.getElement()
                .instance;
            currentElement.uri = uri;
            // 这里需要处理uri，title应返回元数据名称，
            return {
                getTitle: function () { return '帮助定义 - ' + uri.slice(uri.lastIndexOf('/') + 1); },
                getElement: function () { return pkgView_1.getElement(); }
            };
        }
    };
    return HelpDesignerPackage;
}(__WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit__["Package"]));



/***/ }),

/***/ "./src/packages/help-metadata/service/helpmetadata.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpMetaDataService", function() { return HelpMetaDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gsp_lcm_metadata_selector__ = __webpack_require__("./node_modules/@gsp-lcm/metadata-selector/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gsp_lcm_metadata_selector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__gsp_lcm_metadata_selector__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__farris_ide_devkit_services__ = __webpack_require__("./node_modules/@farris/ide-devkit/services/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__farris_ide_devkit_services___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__farris_ide_devkit_services__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
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
* @Author: Lucas.Huang（疯狂秀才）
* @Date: 2018-09-28 09:55:57
 * @Last Modified by: Lucas.Huang（疯狂秀才）
 * @Last Modified time: 2018-10-10 15:25:37
*/






var HelpMetaDataService = (function () {
    function HelpMetaDataService(cache, metadataService, http) {
        this.cache = cache;
        this.metadataService = metadataService;
        this.http = http;
        this.sessionId = this.cache.get('sessionId');
    }
    HelpMetaDataService.prototype.createMetadata = function (metadata, content) {
        var _this = this;
        return this.metadataService.InitializeMetadataEntity(metadata).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["switchMap"])(function (res2) {
            console.log(res2);
            if (res2.type === 'HelpMetadata') {
                content.Id = JSON.parse(res2.content).Id;
            }
            else {
                // 将VO id 同步到元数据的ID
                res2.id = content.ID;
            }
            res2.content = JSON.stringify(content);
            return _this.metadataService.CreateMetadata(res2);
        }));
    };
    HelpMetaDataService.prototype.createHelpMetadata = function (guide, helpContent) {
        var _this = this;
        return this.parseBeFields2VM(guide.beMetadata, guide.selectedFields, '').pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["switchMap"])(function (vmcontent) {
            console.log('vm-content:', vmcontent);
            var vmMetadata = Object.assign({}, guide.metadata);
            var vmcode = guide.metadata.fileName;
            vmMetadata.fileName = vmcode.replace('.', '_') + '.vm';
            vmMetadata.code = vmMetadata.code + '_hlp';
            vmMetadata.name = vmMetadata.name + '_ViewModel';
            vmMetadata.type = 'GSPViewModel';
            vmcontent.Code = vmMetadata.code;
            vmcontent.Name = vmMetadata.name;
            helpContent.dataSource.uri = vmMetadata.relativePath + "/" + vmMetadata.fileName;
            helpContent.dataSource.vmCode = vmcontent.Code;
            // 生成帮助VM
            return _this.createMetadata(vmMetadata, vmcontent);
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["switchMap"])(function (res) {
            if (res.statusText === 'OK') {
                // 保存帮助元数据
                return _this.createMetadata(guide.metadata, helpContent).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["switchMap"])(function (r) {
                    if (r.statusText === 'OK') {
                        return _this.buildHelpVmDll(helpContent.dataSource.uri);
                    }
                }));
            }
        }));
    };
    HelpMetaDataService.prototype.save = function (metadata) {
        var _this = this;
        return this.metadataService.SaveMetadata(metadata, this.sessionId).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["switchMap"])(function (r) {
            if (r.ok) {
                var uri = JSON.parse(metadata.content).DataSource.Uri;
                return _this.buildHelpVmDll(uri);
            }
        }));
    };
    HelpMetaDataService.prototype.buildHelpVmDll = function (vmFullPath) {
        var url = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["environment"].SERVER_IP + '/api/dev/main/v1.0/lookup/publish';
        return this.http.post(url, '"' + vmFullPath + '"', {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpHeaders"]({ 'Content-Type': 'text/json' })
        });
    };
    /**
    * 根据选中的BE字段和beActions筛选beMetadata，并调用API转换为VM
    */
    HelpMetaDataService.prototype.parseBeFields2VM = function (beMetadata, selectedBeFields, selectedBeActions) {
        if (!beMetadata || !beMetadata.metadata) {
            return;
        }
        var metadataContent = JSON.parse(beMetadata.metadata.content);
        // 选择的动作列表
        metadataContent.BizMgrActions = selectedBeActions || [];
        // 选择的字段列表
        metadataContent.MainObject = this.getBeMainObjectByIds(metadataContent.MainObject, selectedBeFields);
        beMetadata.metadata.content = JSON.stringify(metadataContent);
        // 调用API 生成VM
        var url = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["environment"].SERVER_IP + '/api/dev/main/v1.0/viewmodel/convertBizEntity';
        var convertBeInfo = {
            bizEntityJson: beMetadata.metadata.content,
            bePkgName: beMetadata.packageHeader.name,
            beId: beMetadata.metadata.id
        };
        return this.http.put(url, convertBeInfo);
    };
    /**
     * 根据字段ID筛选元数据主对象
     */
    HelpMetaDataService.prototype.getBeMainObjectByIds = function (mainObject, selectedBeFields) {
        var beFields = selectedBeFields.map(function (field) {
            return field['ID'];
        });
        var primaryFieldID = mainObject.ColumnGenerateID.ElementID;
        if (beFields.indexOf(primaryFieldID) === -1) {
            beFields.push(primaryFieldID);
        }
        var containElements = mainObject.ContainElements;
        var _loop_1 = function (i) {
            var element = containElements[i];
            if (element.ChildAssociations.length === 0) {
                if (beFields.indexOf(element.ID) < 0) {
                    containElements.splice(i, 1);
                    i--;
                    return out_i_1 = i, "continue";
                }
            }
            else {
                element.ChildAssociations.forEach(function (child) {
                    var refElementCollection = child.RefElementCollection;
                    var isSelected = false;
                    for (var refIndex = 0; refIndex < refElementCollection.length; refIndex++) {
                        var refElement = refElementCollection[refIndex];
                        if (beFields.indexOf(refElement.ID) < 0) {
                            refElementCollection.splice(refIndex, 1);
                            refIndex--;
                        }
                        else {
                            isSelected = true; // 关联表字段选中
                        }
                    }
                    if (!isSelected) {
                        containElements.splice(i, 1);
                        i--;
                    }
                });
            }
            out_i_1 = i;
        };
        var out_i_1;
        // 主表
        for (var i = 0; i < containElements.length; i++) {
            _loop_1(i);
            i = out_i_1;
        }
        // // 子表
        // const containChildObjects = mainObject.ContainChildObjects;
        // for (let i = 0; i < containChildObjects.length; i++) {
        //     let childObject = containChildObjects[i];
        //     childObject = this.getBeMainObjectByIds(childObject, beFields);
        //     if (childObject.ContainElements.length === 0 && childObject.ContainChildObjects.length === 0) {
        //         // 未选中子表字段和子子表字段
        //         containChildObjects.splice(i, 1);
        //         i--;
        //     }
        // }
        return mainObject;
    };
    HelpMetaDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__farris_ide_devkit_services__["CacheService"],
            __WEBPACK_IMPORTED_MODULE_3__gsp_lcm_metadata_selector__["GSPMetadataService"],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpClient"]])
    ], HelpMetaDataService);
    return HelpMetaDataService;
}());



/***/ }),

/***/ "./src/packages/help-metadata/types/help-metadata.defaultvalue.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "helpMeatadataDefault", function() { return helpMeatadataDefault; });
/*
 * @Author: Lucas.Huang（疯狂秀才）
 * @Date: 2018-09-28 16:08:02
 * @Last Modified by: Lucas.Huang（疯狂秀才）
 * @Last Modified time: 2018-10-01 10:17:19
 */
var helpMeatadataDefault = {
    dataSource: {
        sourceType: 'BE',
        pageInfo: {
            enablePager: true,
            pageSize: 20,
            pageList: [10, 20, 30, 50]
        }
    },
    displayType: 'List'
};


/***/ }),

/***/ "./src/packages/help-metadata/views/designer/help-metadata-designer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpMetadataDesignerComponent", function() { return HelpMetadataDesignerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gsp_lcm_metadata_selector__ = __webpack_require__("./node_modules/@gsp-lcm/metadata-selector/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gsp_lcm_metadata_selector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__gsp_lcm_metadata_selector__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_ide_devkit_services__ = __webpack_require__("./node_modules/@farris/ide-devkit/services/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_ide_devkit_services___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__farris_ide_devkit_services__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__farris_ui__ = __webpack_require__("./node_modules/@farris/ui/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__farris_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__farris_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__farris_ide_devkit__ = __webpack_require__("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__farris_ide_devkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__farris_ide_devkit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_helpmetadata_service__ = __webpack_require__("./src/packages/help-metadata/service/helpmetadata.service.ts");
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
 * @Author: Lucas.Huang（疯狂秀才）
 * @Date: 2018-09-28 19:46:16
 * @Last Modified by: Lucas.Huang（疯狂秀才）
 * @Last Modified time: 2018-10-20 11:00:49
 */






var HelpMetadataDesignerComponent = (function () {
    function HelpMetadataDesignerComponent(metadataService, cache, notify, helpService, loadingSer) {
        this.metadataService = metadataService;
        this.cache = cache;
        this.notify = notify;
        this.helpService = helpService;
        this.loadingSer = loadingSer;
        this.cls = 'd-flex flex-fill flex-column';
        this.currentTabIndex = 1;
        this.options = {
            theme: 'vs',
            language: 'json',
            minimap: {
                enabled: true // 小地图
            }
        };
        this.sessionId = this.cache.get('sessionId');
    }
    Object.defineProperty(HelpMetadataDesignerComponent.prototype, "uri", {
        get: function () {
            return this._uri;
        },
        set: function (val) {
            this._uri = val;
            var fileName = val.substr(val.lastIndexOf('/') + 1);
            var path = '/projects' + val.substring(0, val.lastIndexOf('/'));
            this.getMetadata(fileName, path);
        },
        enumerable: true,
        configurable: true
    });
    HelpMetadataDesignerComponent.prototype.ngOnInit = function () {
    };
    /**
     * 获取元数据信息
     */
    HelpMetadataDesignerComponent.prototype.getMetadata = function (fullname, path) {
        var _this = this;
        this.metadataService.LoadMetadata(fullname, path).subscribe(function (data) {
            _this.metadataDto = data;
            _this.content = data.content;
        });
    };
    /**
   * 保存修改后的控件元数据
   */
    HelpMetadataDesignerComponent.prototype.saveForm = function () {
        var _this = this;
        this.metadataDto.content = this.content;
        var loading = this.loadingSer.show();
        this.helpService.save(this.metadataDto).subscribe(function (data) {
            loading.close();
            if (data.success) {
                _this.notify.success('保存成功');
            }
        }, function (error) {
            loading.close();
            _this.notify.error('保存失败！');
        });
    };
    HelpMetadataDesignerComponent.prototype.onInitHandler = function (event) {
        var _this = this;
        this.editorInstance = event.editor;
        setTimeout(function () {
            _this.editorInstance.getAction('editor.action.formatDocument').run();
        }, 200);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class'),
        __metadata("design:type", Object)
    ], HelpMetadataDesignerComponent.prototype, "cls", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('codeEditor'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__farris_ide_devkit__["AngularMonacoEditorComponent"])
    ], HelpMetadataDesignerComponent.prototype, "codeEditor", void 0);
    HelpMetadataDesignerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'lookup-designer',
            template: "\n\n        <nav class=\"navbar navbar-expand-lg bg-light\">\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveForm()\">Save</button>\n        </nav>\n\n        <div class=\"d-flex flex-fill\" style=\"overflow:hidden\">\n            <ng-container *ngIf=\"currentTabIndex === 0\">\n\n                <div class=\"flex-fill\">\n                    <div style=\"background:url(assets/imgs/building.png) no-repeat; height: 200px;\n                    background-size: 200px;\n                    background-position: center top;\n                    opacity: 0.5;\">\n                        <h1 style=\"text-align: center; padding-top: 200px; margin-top: 100px;\">\u6B63\u5728\u7814\u53D1\u4E2D...</h1>\n                    </div>\n                </div>\n\n\n                <app-property-panel [(propertyConfig)]=\"propertyConfig\" [width]=\"300\"\n                    [(propertyData)]=\"propertyData\" [showCloseBtn]=\"false\">\n                </app-property-panel>\n\n            </ng-container>\n            <ng-container *ngIf=\"currentTabIndex === 1\">\n                <angular-monaco-editor #codeEditor class=\"controlMatadataEditor\" style=\"width:100%\"\n                    [options]=\"options\"  [(ngModel)]=\"content\"  (onInit)=\"onInitHandler($event)\"></angular-monaco-editor>\n            </ng-container>\n        </div>\n\n        <div style=\"background: #f8f9fa; height: 32px; line-height: 32px;\" class=\"d-flex\">\n                <div style=\"margin-left: 10px;\" class=\"tab-item\" [class.active]=\"currentTabIndex === 0\"\n                        (click)=\" currentTabIndex = 0 \">\u5E2E\u52A9\u5B9A\u4E49</div>\n                <div class=\"tab-item\" [class.active]=\"currentTabIndex === 1\" (click)=\" currentTabIndex = 1 \">\u5143\u6570\u636E\u4EE3\u7801</div>\n        </div>\n    ",
            styles: [
                "\n        .active {\n            background: white;\n            color: blue;\n            cursor: default;\n            border-top: 2px solid blue;\n        }\n\n        .tab-item {\n            padding: 0 15px 0 15px;\n        }\n\n        .tab-item:not(.active):hover{\n            background: #ededed;\n            color: #404040;\n            cursor:pointer\n        }\n\n        .controlMatadataEditor {\n            height: calc(100vh - 180px);\n        }\n    "
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__gsp_lcm_metadata_selector__["GSPMetadataService"],
            __WEBPACK_IMPORTED_MODULE_2__farris_ide_devkit_services__["CacheService"],
            __WEBPACK_IMPORTED_MODULE_3__farris_ui__["NotifyService"],
            __WEBPACK_IMPORTED_MODULE_5__service_helpmetadata_service__["HelpMetaDataService"],
            __WEBPACK_IMPORTED_MODULE_3__farris_ui__["LoadingService"]])
    ], HelpMetadataDesignerComponent);
    return HelpMetadataDesignerComponent;
}());



/***/ }),

/***/ "./src/packages/help-metadata/views/guide/css/css.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".display-type {\r\n    list-style: none; padding: 0;     margin: 0;\r\n }\r\n\r\n .display-type li {\r\n     width: 125px;\r\n     height: 125px;\r\n     float: left;\r\n     margin-left: 20px;\r\n     margin-bottom: 20px;\r\n     text-align: center;\r\n     background-color: #f5f5f5;\r\n     border-radius: 10px;\r\n    cursor: pointer;\r\n }\r\n\r\n .display-type li.selected {\r\n    box-shadow: 0px 0px 20px #000cff;\r\n }\r\n\r\n .display-type li.disabled {\r\n    opacity: 0.3;\r\n    background-color: #d5d5d5!important;\r\n }\r\n\r\n .display-type li:hover:not(.disabled) {\r\n    box-shadow: 0px 0px 20px #000cff;\r\n }\r\n\r\n .display-type-image {\r\n    height: 100px;\r\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAl4AAAB4CAYAAAAjS/yEAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE4LTA5LTI1VDEwOjAxOjM2KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE4LTA5LTI1VDEwOjAxOjM2KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOC0wOS0yNVQxMDowMTozNiswODowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozMWJiMGQ3NS1jZDE2LTlkNDMtODBiNi1kYmZiYTMxNjNkYmEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4Mjc2ZmUxYy1kNDg2LTRjNDMtODA3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');\r\n    background-position: 0 -4px;\r\n    background-repeat: no-repeat;\r\n }\r\n\r\n .tree-list {\r\n    background-position: -120px -4px;\r\n }\r\n\r\n .double-list {\r\n    background-position: -360px -4px;\r\n }\r\n\r\n .left-tree_right-list {\r\n    background-position: -240px -4px;\r\n }\r\n\r\n .custom {\r\n    background-position: -480px -4px;\r\n }\r\n\r\n .custom-control-label::before {\r\n     background-color: #d4e9ff;\r\n }\r\n\r\n :host .container {\r\n    height: 100%;\r\n    padding: 20px;\r\n    padding-top: 40px;\r\n }\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/help-metadata/views/guide/css/step4.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.icon {\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: 26px;\r\n    height: 30px;\r\n    margin-bottom: 10px;\r\n}\r\n.right {\r\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 16 16%22%3E%3Cstyle%3E.icon-canvas-transparent%7Bopacity%3A0%3Bfill%3A%23f6f6f6%7D.icon-vs-bg%7Bfill%3A%23424242%7D.icon-vs-out%7Bfill%3A%23f6f6f6%7D%3C%2Fstyle%3E%3Cpath class%3D%22icon-canvas-transparent%22 d%3D%22M16 16H0V0h16v16z%22 id%3D%22canvas%22%2F%3E%3Cpath class%3D%22icon-vs-out%22 d%3D%22M6.391 13.694L3.916 11.22 7.135 8 3.916 4.78l2.475-2.475L12.084 8l-5.693 5.694z%22 id%3D%22outline%22%2F%3E%3Cg id%3D%22iconBg%22%3E%3Cpath class%3D%22icon-vs-bg%22 d%3D%22M6.39 12.28l-1.06-1.06L8.549 8 5.33 4.78l1.06-1.06L10.67 8l-4.28 4.28z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\r\n}\r\n.right-all {\r\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 16 16%22 enable-background%3D%22new 0 0 16 16%22%3E%3Cstyle type%3D%22text%2Fcss%22%3E.icon-canvas-transparent%7Bopacity%3A0%3Bfill%3A%23F6F6F6%3B%7D .icon-vs-out%7Bfill%3A%23F6F6F6%3B%7D .icon-vs-bg%7Bfill%3A%23424242%3B%7D%3C%2Fstyle%3E%3Cpath class%3D%22icon-canvas-transparent%22 d%3D%22M0 0h16v16h-16v-16z%22 id%3D%22canvas%22%2F%3E%3Cpath class%3D%22icon-vs-out%22 d%3D%22M5 7.684l-2.58-2.58 2.121-2.121 2.018 2.017h.34l2.018-2.018 5.017 5.018-5.018 5.018-2.018-2.018h-.34l-2.018 2.018-2.12-2.122 2.58-2.58v-.632z%22 id%3D%22outline%22%2F%3E%3Cpath class%3D%22icon-vs-bg%22 d%3D%22M3.834 10.896l2.896-2.896-2.896-2.897.707-.707 3.604 3.604-3.604 3.604-.707-.708zm5.082.708l3.604-3.604-3.604-3.604-.707.707 2.896 2.897-2.896 2.896.707.708z%22 id%3D%22iconBg%22%2F%3E%3C%2Fsvg%3E\");\r\n}\r\n.left {\r\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 16 16%22%3E%3Cstyle%3E.icon-canvas-transparent%7Bopacity%3A0%3Bfill%3A%23f6f6f6%7D.icon-vs-bg%7Bfill%3A%23424242%7D.icon-vs-out%7Bfill%3A%23f6f6f6%7D%3C%2Fstyle%3E%3Cpath class%3D%22icon-canvas-transparent%22 d%3D%22M0 0h16v16H0V0z%22 id%3D%22canvas%22%2F%3E%3Cpath class%3D%22icon-vs-out%22 d%3D%22M9.609 2.306l2.475 2.475L8.865 8l3.219 3.22-2.475 2.475L3.916 8l5.693-5.694z%22 id%3D%22outline%22%2F%3E%3Cg id%3D%22iconBg%22%3E%3Cpath class%3D%22icon-vs-bg%22 d%3D%22M9.61 3.72l1.06 1.06L7.451 8l3.22 3.22-1.061 1.06L5.33 8l4.28-4.28z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\r\n}\r\n\r\n.left-all{\r\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 16 16%22 enable-background%3D%22new 0 0 16 16%22%3E%3Cstyle type%3D%22text%2Fcss%22%3E.icon-canvas-transparent%7Bopacity%3A0%3Bfill%3A%23F6F6F6%3B%7D .icon-vs-out%7Bfill%3A%23F6F6F6%3B%7D .icon-vs-bg%7Bfill%3A%23424242%3B%7D%3C%2Fstyle%3E%3Cpath class%3D%22icon-canvas-transparent%22 d%3D%22M16 16h-16v-16h16v16z%22 id%3D%22canvas%22%2F%3E%3Cpath class%3D%22icon-vs-out%22 d%3D%22M11 8.316l2.58 2.58-2.121 2.121-2.018-2.017h-.34l-2.018 2.018-5.017-5.018 5.018-5.018 2.018 2.018h.34l2.018-2.018 2.121 2.121-2.581 2.581v.632z%22 id%3D%22outline%22%2F%3E%3Cpath class%3D%22icon-vs-bg%22 d%3D%22M11.459 11.604l-3.604-3.604 3.604-3.604.707.707-2.896 2.897 2.896 2.897-.707.707zm-3.668-.708l-2.896-2.896 2.897-2.897-.708-.707-3.604 3.604 3.604 3.604.707-.708z%22 id%3D%22iconBg%22%2F%3E%3C%2Fsvg%3E\");\r\n}\r\n\r\n.up {\r\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22%3E%3Cstyle type%3D%22text%2Fcss%22%3E.icon-canvas-transparent%7Bopacity%3A0%3Bfill%3A%23F6F6F6%3B%7D .icon-vs-out%7Bfill%3A%23F6F6F6%3B%7D .icon-vs-bg%7Bfill%3A%23424242%3B%7D%3C%2Fstyle%3E%3Cpath class%3D%22icon-canvas-transparent%22 d%3D%22M16 16h-16v-16h16v16z%22 id%3D%22canvas%22%2F%3E%3Cpath class%3D%22icon-vs-out%22 d%3D%22M1.586 11l6.414-6.414 6.414 6.414h-12.828z%22 id%3D%22outline%22%2F%3E%3Cpath class%3D%22icon-vs-bg%22 d%3D%22M12 10h-8l4-4 4 4z%22 id%3D%22iconBg%22%2F%3E%3C%2Fsvg%3E\");\r\n}\r\n\r\n.down {\r\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 16 16%22%3E%3Cstyle%3E.icon-canvas-transparent%7Bopacity%3A0%3Bfill%3A%23f6f6f6%7D.icon-vs-out%7Bfill%3A%23f6f6f6%7D.icon-vs-bg%7Bfill%3A%23424242%7D%3C%2Fstyle%3E%3Cpath class%3D%22icon-canvas-transparent%22 d%3D%22M16 16H0V0h16v16z%22 id%3D%22canvas%22%2F%3E%3Cpath class%3D%22icon-vs-out%22 d%3D%22M1.586 5h12.828L8 11.414 1.586 5z%22 id%3D%22outline%22%2F%3E%3Cg id%3D%22iconBg%22%3E%3Cpath class%3D%22icon-vs-bg%22 d%3D%22M8 10L4 6h8l-4 4z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\r\n}\r\n\r\n.end {\r\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgAgMAAACf9p+rAAAACVBMVEUAAAAzMzMyMjIH2j3VAAAAA3RSTlMA/4CE6rqMAAAAc0lEQVR4Ae3NoQ0CUBAFQXLuCrmSHkFSCk1cvySo0QQB5I9dsZfjDXk54YTPhQ2uhAluhA7uhAoeTtaFxoXahSoutC40LtQuVHGhdaFxoXahigutC40LtQtVXGhdaFyoXajiQutC40LtQuXivyT63XB8iycdcJ0OPAoNRAAAAABJRU5ErkJggg==');\r\n}\r\n\r\n.top {\r\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgAgMAAACf9p+rAAAACVBMVEUAAAAzMzMyMjIH2j3VAAAAA3RSTlMA/4CE6rqMAAAAd0lEQVR4Ae3ToQ2AABAEwQ+OQijpCJJSaIJ+sRNAYYDk154YddV9sMT+NrzRsBXRuBbRtBTRPhdBJCASCYhEAiKRiEiISEREIiISEZE4IxAiEiISIhJXBEJEQkRCREJEQkTiDoEQkRCREJEQkQAxT9NDD8+Gb9YdVAydDo2xY38AAAAASUVORK5CYII=');\r\n}\r\n\r\n:host fieldset { height: 550px; }\r\n\r\n:host .v-center {\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n}\r\n.columns-box {\r\n    height: 510px; padding: 0; border: 1px solid #d0d0d0;\r\n }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/help-metadata/views/guide/custom-lookup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomLookupComponent", function() { return CustomLookupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_ui__ = __webpack_require__("./node_modules/@farris/ui/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__farris_ui__);
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


var CustomLookupComponent = (function (_super) {
    __extends(CustomLookupComponent, _super);
    function CustomLookupComponent(injector, modalService, el) {
        var _this = _super.call(this, injector, el) || this;
        _this.modalService = modalService;
        _this.el = el;
        _this.text = '';
        _this.openDialog = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        return _this;
    }
    CustomLookupComponent.prototype.showDialog = function () {
        if (!this.disabled) {
            this.openDialog.emit();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CustomLookupComponent.prototype, "text", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], CustomLookupComponent.prototype, "openDialog", void 0);
    CustomLookupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'custom-lookup',
            template: "\n    <div class=\"input-group\">\n        <input class=\"form-control\" [value]=\"text\" [disabled]=\"disabled\"/>\n        <div class=\"input-group-append\">\n            <span class=\"f-select input-group-text\"  (click)=\"showDialog()\">\n                <i class=\"f-icon f-icon-lookup\"></i>\n            </span>\n        </div>\n    </div>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_0__farris_ui__["BsModalService"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"]])
    ], CustomLookupComponent);
    return CustomLookupComponent;
}(__WEBPACK_IMPORTED_MODULE_0__farris_ui__["LookupComponent"]));



/***/ }),

/***/ "./src/packages/help-metadata/views/guide/help-meatadata-guid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpMetadataGuidComponent", function() { return HelpMetadataGuidComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__step__ = __webpack_require__("./src/packages/help-metadata/views/guide/step.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setps_step4_displayColumns_component__ = __webpack_require__("./src/packages/help-metadata/views/guide/setps/step4.displayColumns.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__setps_step3_basicInfoSetting_component__ = __webpack_require__("./src/packages/help-metadata/views/guide/setps/step3.basicInfoSetting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__setps_step2_selectDataSource_component__ = __webpack_require__("./src/packages/help-metadata/views/guide/setps/step2.selectDataSource.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__setps_step1_selectDisplayType_component__ = __webpack_require__("./src/packages/help-metadata/views/guide/setps/step1.selectDisplayType.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_helpmetadata_service__ = __webpack_require__("./src/packages/help-metadata/service/helpmetadata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__farris_ui__ = __webpack_require__("./node_modules/@farris/ui/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__farris_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__farris_ui__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HelpMetadataGuidComponent = (function () {
    function HelpMetadataGuidComponent(helpSer, loadingSer, notify) {
        this.helpSer = helpSer;
        this.loadingSer = loadingSer;
        this.notify = notify;
        this._metadata = {};
        this.steps = [];
        this.modalClosed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.finished = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.initSteps();
    }
    Object.defineProperty(HelpMetadataGuidComponent.prototype, "metadata", {
        get: function () {
            return this._metadata;
        },
        set: function (data) {
            this._metadata = data;
            if (data.beMetadata.content) {
                this._metadata.beMetadata.content = JSON.parse(data.beMetadata.content);
            }
        },
        enumerable: true,
        configurable: true
    });
    HelpMetadataGuidComponent.prototype.initSteps = function () {
        var step1 = new __WEBPACK_IMPORTED_MODULE_1__step__["Step"]({
            stepId: 'selectHelpType',
            title: '帮助类型',
            component: __WEBPACK_IMPORTED_MODULE_5__setps_step1_selectDisplayType_component__["SelectDisplayTypeComponent"],
            data: this.metadata,
            show: true,
            nextStep: 'selectDataSource',
            showFinishBtn: false,
            showCancelBtn: true,
            showLastStepBtn: false,
            showNextStepBtn: true
        });
        this.steps.push(step1);
        var step2 = new __WEBPACK_IMPORTED_MODULE_1__step__["Step"]({
            stepId: 'selectDataSource',
            title: '选择数据源',
            component: __WEBPACK_IMPORTED_MODULE_4__setps_step2_selectDataSource_component__["SelectDataSourceComponent"],
            data: this.metadata,
            show: true,
            nextStep: 'setBasicInfo',
            showFinishBtn: false,
            showCancelBtn: true,
            showLastStepBtn: true,
            showNextStepBtn: true
        });
        this.steps.push(step2);
        var step3 = new __WEBPACK_IMPORTED_MODULE_1__step__["Step"]({
            stepId: 'setBasicInfo',
            title: '基本信息',
            component: __WEBPACK_IMPORTED_MODULE_3__setps_step3_basicInfoSetting_component__["BasicInfoSettingComponent"],
            data: this.metadata,
            show: true,
            nextStep: 'setDisplayColumns',
            showFinishBtn: false,
            showCancelBtn: true,
            showLastStepBtn: true,
            showNextStepBtn: true
        });
        this.steps.push(step3);
        var step4 = new __WEBPACK_IMPORTED_MODULE_1__step__["Step"]({
            stepId: 'setDisplayColumns',
            title: '显示列设置',
            component: __WEBPACK_IMPORTED_MODULE_2__setps_step4_displayColumns_component__["DisplayColumnsComponent"],
            data: this.metadata,
            show: true,
            nextStep: '',
            showFinishBtn: true,
            showCancelBtn: true,
            showLastStepBtn: true,
            showNextStepBtn: false
        });
        this.steps.push(step4);
    };
    HelpMetadataGuidComponent.prototype.closeModal = function () {
        this.modalClosed.emit();
    };
    HelpMetadataGuidComponent.prototype.finshGuide = function () {
        var _this = this;
        // console.log(this.metadata);
        var help = this.metadata.metadata;
        var content = this.metadata.helpMetadata;
        var loading = this.loadingSer.show();
        this.helpSer.createHelpMetadata(this.metadata, content).subscribe(function (v) {
            loading.close();
            if (v.success) {
                _this.notify.success('帮助元数据创建成功。');
                _this.closeModal();
                _this.finished.emit('/' + help.relativePath + '/' + help.fileName);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], HelpMetadataGuidComponent.prototype, "modalClosed", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], HelpMetadataGuidComponent.prototype, "finished", void 0);
    HelpMetadataGuidComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "\n\n    <app-wizard [steps]=\"steps\" (clickCancelBtn)=\"closeModal()\" (clickFinishBtn)=\"finshGuide()\"></app-wizard>\n\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__service_helpmetadata_service__["HelpMetaDataService"], __WEBPACK_IMPORTED_MODULE_7__farris_ui__["LoadingService"], __WEBPACK_IMPORTED_MODULE_7__farris_ui__["NotifyService"]])
    ], HelpMetadataGuidComponent);
    return HelpMetadataGuidComponent;
}());



/***/ }),

/***/ "./src/packages/help-metadata/views/guide/setps/step1.selectDisplayType.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectDisplayTypeComponent", function() { return SelectDisplayTypeComponent; });
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

var SelectDisplayTypeComponent = (function () {
    function SelectDisplayTypeComponent() {
        var _this = this;
        this.displayTypes = [
            { id: 'list', code: 'List', title: '简单列表', isSelected: true, disabled: false },
            { id: 'tree-list', code: 'TreeList', title: '树列表', isSelected: false, disabled: false },
            { id: 'double-list', code: 'DoubleList', title: '双列表', isSelected: false, disabled: true },
            { id: 'left-tree_right-list', code: 'LeftTreeRightList', title: '左树右列表', isSelected: false, disabled: true },
            { id: 'custom', title: '自定义表单', code: 'CustomForm', isSelected: false, disabled: true }
        ];
        this.validation = function () {
            return _this.data.helpMetadata.displayType;
        };
    }
    SelectDisplayTypeComponent.prototype.ngOnInit = function () {
        if (!this.data.helpMetadata) {
            this.data.helpMetadata = {};
        }
        this.initData();
    };
    SelectDisplayTypeComponent.prototype.initData = function () {
        var _this = this;
        if (this.data && this.data.helpMetadata) {
            if (this.data.helpMetadata.displayType) {
                this.displayTypes = this.displayTypes.map(function (item) {
                    item.isSelected = false;
                    if (item.code === _this.data.helpMetadata.displayType) {
                        item.isSelected = true;
                    }
                    return item;
                });
            }
        }
        else {
            this.data.helpMetadata.displayType = 'List';
        }
    };
    SelectDisplayTypeComponent.prototype.selected = function (event, data) {
        if (!data.disabled) {
            this.displayTypes = this.displayTypes.map(function (item) {
                item.isSelected = false;
                return item;
            });
            if (!data.isSelected) {
                data.isSelected = true;
                this.data.helpMetadata.displayType = data.code;
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SelectDisplayTypeComponent.prototype, "data", void 0);
    SelectDisplayTypeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'stpe1-displaytype',
            template: "\n        <div class=\"container\">\n            <ul class=\"display-type\" style=\"list-style: none;\">\n                <li  *ngFor=\"let d of displayTypes\"\n                    [class.selected]=\"d.isSelected\" [class.disabled]=\"d.disabled\"\n                    (click)=\"selected($event, d)\">\n                    <div class=\"display-type-image\" [ngClass]=\"d.id\">\n                    </div>\n\n                    <div class=\"custom-control custom-radio custom-control-inline\">\n                        <input type=\"radio\" id=\"{{d.id}}\" name=\"displayType\" class=\"custom-control-input\"\n                         [checked]=\"d.isSelected\" [disabled]=\"d.disabled\">\n                        <label class=\"custom-control-label\" for=\"{{d.id}}\">{{ d.disabled ? '\u5F00\u53D1\u4E2D':  d.title }}</label>\n                    </div>\n                </li>\n            </ul>\n        </div>\n    ",
            styles: [__webpack_require__("./src/packages/help-metadata/views/guide/css/css.css")]
        })
    ], SelectDisplayTypeComponent);
    return SelectDisplayTypeComponent;
}());



/***/ }),

/***/ "./src/packages/help-metadata/views/guide/setps/step2.selectDataSource.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectDataSourceComponent", function() { return SelectDataSourceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_ui__ = __webpack_require__("./node_modules/@farris/ui/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__farris_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gsp_lcm_metadata_selector__ = __webpack_require__("./node_modules/@gsp-lcm/metadata-selector/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gsp_lcm_metadata_selector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__gsp_lcm_metadata_selector__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SelectDataSourceComponent = (function () {
    // displayText = '';
    function SelectDataSourceComponent(modalService, resolver, injector, notify) {
        var _this = this;
        this.modalService = modalService;
        this.resolver = resolver;
        this.injector = injector;
        this.notify = notify;
        this.sourceTypeList = [
            { value: 'BE', title: 'BE' }
            // { value: 'VM', title: 'View Model' },
            // { value: 'ODATA', title: 'ODATA' },
            // { value: 'WEBAPI', title: 'WebApi' },
            // { value: 'WEBSERVICE', title: 'Web Service' },
        ];
        this.validation = function () {
            if (_this.beMetadata && _this.beMetadata.id) {
                return true;
            }
            else {
                _this.notify.warning('请选择BE实体');
                return false;
            }
        };
    }
    Object.defineProperty(SelectDataSourceComponent.prototype, "beMetadata", {
        get: function () {
            if (this.data.beMetadata) {
                return this.data.beMetadata.metadata;
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    SelectDataSourceComponent.prototype.ngOnInit = function () {
        console.log(this.data);
    };
    SelectDataSourceComponent.prototype.open = function () {
        var _this = this;
        var compFactory = this.resolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_2__gsp_lcm_metadata_selector__["SelectMetadataComponent"]);
        var compRef = compFactory.create(this.injector);
        compRef.instance.metadataPath = this.data.metadata.relativePath;
        compRef.instance.typeName = 'GSPBusinessEntity';
        compRef.instance.selectedMetadata.subscribe(function ($event) {
            if (!$event || !$event.metadata) {
                return;
            }
            // this.displayText = $event.metadata.name;
            _this.data.beMetadata = $event;
            // TODO: 清空第3 第4步中的相关数据
            _this.data.helpMetadata.idField = '';
            _this.data.helpMetadata.textField = '';
            _this.data.helpMetadata.valueField = '';
            if (_this.data.helpMetadata.dataSource) {
                _this.data.helpMetadata.dataSource.columns = [];
                _this.data.selectedFields = [];
            }
            console.log('beMetadata:', $event);
        });
        var modalConfig = {
            title: '元数据选择',
            width: 870,
            height: 565,
            showButtons: false
        };
        var dialog = this.modalService.show(compRef, modalConfig);
        compRef.instance.closeModalEmitter.subscribe(function (data) {
            dialog.close();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SelectDataSourceComponent.prototype, "data", void 0);
    SelectDataSourceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            template: "\n        <form style=\"padding:20px; padding-top: 40px\">\n            <div class=\"form-group\">\n                <label for=\"dataSourceType\">\u9009\u62E9\u6570\u636E\u6E90\u7C7B\u578B</label>\n                <select class=\"form-control\" id=\"dataSourceType\"\n                    name=\"sourceType\" [(ngModel)]=\"data.helpMetadata.dataSource.sourceType\">\n                    <option *ngFor=\"let st of sourceTypeList\" [value]=\"st.value\"\n                        [selected]=\"st.value === data.helpMetadata.dataSource.sourceType\">{{st.title}}</option>\n                </select>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"exampleFormControlInput1\">\u9009\u62E9\u5B9E\u4F53</label>\n                <custom-lookup (openDialog)=\"open()\" [text]=\"beMetadata?.name || ''\"></custom-lookup>\n            </div>\n        </form>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__farris_ui__["BsModalService"],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["ComponentFactoryResolver"],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injector"],
            __WEBPACK_IMPORTED_MODULE_0__farris_ui__["NotifyService"]])
    ], SelectDataSourceComponent);
    return SelectDataSourceComponent;
}());



/***/ }),

/***/ "./src/packages/help-metadata/views/guide/setps/step3.basicInfoSetting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicInfoSettingComponent", function() { return BasicInfoSettingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BasicInfoSettingComponent = (function () {
    function BasicInfoSettingComponent() {
        var _this = this;
        this.data = {};
        this.helpDictPicked = function (rowData) {
            if (!_this.data.selectedFields.find(function (n) { return n['ID'] === rowData['ID']; })) {
                _this.data.selectedFields.push(rowData);
            }
            return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["of"])(true);
        };
        this.validation = function () {
            _this.markControlTouched();
            return _this.frm.valid;
        };
    }
    Object.defineProperty(BasicInfoSettingComponent.prototype, "beMetadataContent", {
        get: function () {
            if (this.data && this.data.beMetadata) {
                if (this.data.beMetadata.metadata.content) {
                    return JSON.parse(this.data.beMetadata.metadata.content);
                }
                return null;
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasicInfoSettingComponent.prototype, "lookupGridOpts", {
        get: function () {
            return {
                columns: [
                    { field: 'Code', title: '编号', width: 100 },
                    { field: 'Name', title: '名称', width: 100 }
                ],
                pagination: false,
                idField: 'ID',
                items: this.beMetadataContent.MainObject.ContainElements.map(function (col) {
                    return {
                        ID: col.ID,
                        Code: col.Code,
                        Name: col.Name,
                        LabelID: col.LabelID
                    };
                }),
                singleSelect: true
            };
        },
        enumerable: true,
        configurable: true
    });
    BasicInfoSettingComponent.prototype.ngOnChanges = function (changes) {
        // console.log(changes.data);
    };
    BasicInfoSettingComponent.prototype.markControlTouched = function () {
        Object.values(this.frm.controls).forEach(function (ctrl) {
            ctrl.markAsTouched();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], BasicInfoSettingComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('frm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NgForm"])
    ], BasicInfoSettingComponent.prototype, "frm", void 0);
    BasicInfoSettingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "\n        <form #frm=\"ngForm\" style=\"padding: 20px;\" >\n            <div class=\"form-row\">\n                <div class=\"form-group col-md-6\">\n                    <label for=\"txtHelpCode\">\u5E2E\u52A9\u7F16\u53F7</label>\n                    <input type=\"text\" class=\"form-control\" id=\"txtHelpCode\" name=\"code\"\n                        [(ngModel)]=\"data.helpMetadata.code\" placeholder=\"\" required>\n                </div>\n                <div class=\"form-group col-md-6\">\n                    <label for=\"txtHelpName\">\u5E2E\u52A9\u540D\u79F0</label>\n                    <input type=\"text\" class=\"form-control\" id=\"txtHelpName\" placeholder=\"\"\n                        name=\"name\" [(ngModel)]=\"data.helpMetadata.name\" required>\n                </div>\n            </div>\n            <div class=\"form-row\">\n                <div class=\"form-group col-md-6\">\n                    <label for=\"txtHelpTitle\">\u5E2E\u52A9\u663E\u793A\u6807\u9898</label>\n                    <input type=\"text\" class=\"form-control\" id=\"txtHelpTitle\" placeholder=\"\"\n                        name=\"title\" [(ngModel)]=\"data.helpMetadata.title\" required>\n                </div>\n                <div class=\"form-group col-md-6\">\n                    <label for=\"inputPassword4\">\u6807\u8BC6\u5B57\u6BB5</label>\n                    <farris-lookup-grid name=\"idField\"\n                    [(ngModel)]=\"data.helpMetadata.idField\"\n\n                    [columns]=\"lookupGridOpts.columns\"\n                    [pagination]=\"false\"\n                    [items]=\"lookupGridOpts.items\"\n                    [idField]=\"'ID'\"\n\n                    [textField]= \"'Name'\"\n                    [valueField]=\"'Code'\"\n                    [dictPicked]=\"helpDictPicked\" required></farris-lookup-grid>\n                </div>\n            </div>\n            <div class=\"form-row\">\n                <div class=\"form-group col-md-6\">\n                    <label for=\"inputEmail4\">Text \u5B57\u6BB5</label>\n                    <farris-lookup-grid name=\"textField\"\n                    [(ngModel)]=\"data.helpMetadata.textField\"\n\n                    [columns]=\"lookupGridOpts.columns\"\n                    [pagination]=\"false\"\n                    [items]=\"lookupGridOpts.items\"\n                    [idField]=\"'ID'\"\n\n                    [textField]= \"'Name'\"\n                    [valueField]=\"'Code'\"\n                    [dictPicked]=\"helpDictPicked\" required></farris-lookup-grid>\n                </div>\n                <div class=\"form-group col-md-6\">\n                    <label for=\"inputPassword4\">Value \u5B57\u6BB5</label>\n                    <farris-lookup-grid name=\"valueField\"\n                    [(ngModel)]=\"data.helpMetadata.valueField\"\n\n                    [columns]=\"lookupGridOpts.columns\"\n                    [pagination]=\"false\"\n                    [items]=\"lookupGridOpts.items\"\n                    [idField]=\"'ID'\"\n\n\n                    [textField]= \"'Name'\"\n                    [valueField]=\"'Code'\"\n                    [dictPicked]=\"helpDictPicked\" required></farris-lookup-grid>\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"inputAddress\">\u8FC7\u6EE4\u6761\u4EF6</label>\n                <custom-lookup [disabled]=\"true\"></custom-lookup>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"inputAddress\">\u6392\u5E8F</label>\n                <custom-lookup  [disabled]=\"true\"></custom-lookup>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"inputAddress\">\u5E2E\u52A9\u63CF\u8FF0\u4FE1\u606F</label>\n                <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\"\n                name=\"description\" [(ngModel)]=\"data.helpMetadata.description\">\n                </textarea>\n            </div>\n        </form>\n    ",
            styles: [
                ".form-control.ng-invalid.ng-touched { border-color: #ff0303}"
            ]
        })
    ], BasicInfoSettingComponent);
    return BasicInfoSettingComponent;
}());



/***/ }),

/***/ "./src/packages/help-metadata/views/guide/setps/step4.displayColumns.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayColumnsComponent", function() { return DisplayColumnsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_ui__ = __webpack_require__("./node_modules/@farris/ui/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__farris_ui__);
/*
* @Author: Lucas.Huang（疯狂秀才）
* @Date: 2018-09-27 21:32:38
 * @Last Modified by: Lucas.Huang（疯狂秀才））
 * @Last Modified time: 2018-10-03 16:43:166
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SELECT_MOVE_COLUMN_MESSAGE = '请选择要移动显示的列。';
var DisplayColumnsComponent = (function () {
    function DisplayColumnsComponent(mesagerSer, notify) {
        var _this = this;
        this.mesagerSer = mesagerSer;
        this.notify = notify;
        this.idField = 'ID';
        // 显示列
        this.selectedColumns = [];
        // 右侧选中的列
        this.rightCheckeds = {};
        // 左侧树
        this.sourceColumnsTreeData = [];
        this.validation = function () {
            if (_this.selectedColumns.length) {
                return true;
            }
            else {
                _this.notify.warning('请选择要显示的列。');
                return false;
            }
        };
    }
    Object.defineProperty(DisplayColumnsComponent.prototype, "leftCheckeds", {
        // 左侧选中的列
        get: function () {
            if (this.sourceTree.selections) {
                return this.sourceTree.selections.map(function (n) {
                    return n.data;
                });
            }
            else {
                return [];
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayColumnsComponent.prototype, "elements", {
        get: function () {
            return JSON.parse(this.data.beMetadata.metadata.content).MainObject.ContainElements;
        },
        enumerable: true,
        configurable: true
    });
    // getColumns(): any[] {
    //     if (this.data && this.data.beMetadata) {
    //         return this.elements.map(col => {
    //             return {
    //                 ID: col.ID,
    //                 Code: col.Code,
    //                 Name: col.Name,
    //                 LabelID: col.LabelID
    //             };
    //         });
    //     }
    // }
    DisplayColumnsComponent.prototype._updateHelpMetadata = function () {
        this.data.helpMetadata.dataSource = this.data.helpMetadata.dataSource || {};
        if (this.selectedColumns.length) {
            this.data.helpMetadata.dataSource.columns = this.selectedColumns.map(function (col) {
                return {
                    field: col.Code,
                    title: col.Name,
                    width: 100
                };
            });
        }
        else {
            this.data.helpMetadata.dataSource.columns = [];
        }
        this.data.selectedFields = this.selectedColumns;
    };
    DisplayColumnsComponent.prototype.ngOnInit = function () {
        // this.columns = this.getColumns();
        this.sourceColumnsTreeData = this.convert2TreeNodes(this.elements);
        this.selectedColumns = this.data.selectedFields || [];
        if (this.selectedColumns.length) {
            this._updateHelpMetadata();
        }
    };
    DisplayColumnsComponent.prototype.isChecked = function (col, direction) {
        if (direction === 'l') {
            return this.leftCheckeds[col['ID']] !== undefined;
        }
        else {
            return this.rightCheckeds[col['ID']] !== undefined;
        }
    };
    DisplayColumnsComponent.prototype.canChecked = function (col) {
        if (this.selectedColumns.length === 0) {
            return true;
        }
        // return this.selectedColumns.indexOf(col) === -1;
        return this.selectedColumns.findIndex(function (c) { return c['ID'] === col['ID']; }) === -1;
    };
    // leftColumnChecked(col) {
    //     if (this.canChecked(col)) {
    //         if (this.isChecked(col, 'l')) {
    //             delete this.leftCheckeds[col['ID']];
    //         } else {
    //             this.leftCheckeds[col['ID']] = col;
    //         }
    //     }
    // }
    DisplayColumnsComponent.prototype.hasCheckeds = function (side) {
        if (side === 'l') {
            return this.leftCheckeds.length > 0;
        }
        else {
            return Object.keys(this.rightCheckeds).length > 0;
        }
    };
    DisplayColumnsComponent.prototype.rightColumnChecked = function (col) {
        if (this.isChecked(col, 'r')) {
            this.rightCheckeds = {};
            return;
        }
        else {
            this.rightCheckeds = {};
            this.rightCheckeds[col['ID']] = col;
        }
    };
    //#region 左右移动
    /** 右移 */
    DisplayColumnsComponent.prototype.moveToRight = function () {
        var _this = this;
        if (this.hasCheckeds('l')) {
            this.leftCheckeds.forEach(function (col) {
                if (_this.selectedColumns.indexOf(col) === -1) {
                    _this.selectedColumns.push(col);
                }
            });
            this.clearSelections();
            this._updateHelpMetadata();
        }
        else {
            this.mesagerSer.warning('请选择要显示的列。');
        }
    };
    DisplayColumnsComponent.prototype.clearSelections = function () {
        this.sourceTree.selectedRow = undefined;
        this.sourceTree.clearSelections();
    };
    /** 全部右移 */
    DisplayColumnsComponent.prototype.moveAllToRight = function () {
        var _this = this;
        this.convertTreeNodes2PlainObject(this.sourceColumnsTreeData).filter(function (col) {
            return _this.selectedColumns.indexOf(col.data) === -1;
        }).forEach(function (col) {
            _this.selectedColumns.push(col.data);
        });
        this._updateHelpMetadata();
        // this.leftCheckeds = {};
        this.clearSelections();
    };
    /** 左移 */
    DisplayColumnsComponent.prototype.moveToLeft = function () {
        var _this = this;
        if (this.hasCheckeds('r')) {
            this.selectedColumns = this.selectedColumns.filter(function (v) {
                return Object.values(_this.rightCheckeds).indexOf(v) === -1;
            });
            this._updateHelpMetadata();
            this.rightCheckeds = {};
        }
        else {
            this.mesagerSer.warning('请选择要取消显示的列。');
        }
    };
    /** 全部左移 */
    DisplayColumnsComponent.prototype.moveAllToLeft = function () {
        this.selectedColumns = [];
        this._updateHelpMetadata();
    };
    //#endregion
    //#region 上下移动显示列顺序
    DisplayColumnsComponent.prototype._getSelectColumnInfo = function () {
        if (this.hasCheckeds('r')) {
            var cols_1 = Object.values(this.rightCheckeds);
            var index = this.selectedColumns.findIndex(function (c) { return c === cols_1[0]; });
            return {
                cols: cols_1, index: index
            };
        }
        return null;
    };
    /** 置顶 */
    DisplayColumnsComponent.prototype.moveTop = function () {
        var obj = this._getSelectColumnInfo();
        if (obj) {
            this.selectedColumns.unshift(this.selectedColumns[obj.index]);
            this.selectedColumns.splice(obj.index + 1, 1);
            this._updateHelpMetadata();
        }
        else {
            this.mesagerSer.warning(SELECT_MOVE_COLUMN_MESSAGE);
        }
    };
    /** 上移 */
    DisplayColumnsComponent.prototype.moveUp = function () {
        if (this.hasCheckeds('r')) {
            var obj = this._getSelectColumnInfo();
            if (obj) {
                var len = obj.cols.length;
                var index = obj.index;
                if (index !== 0) {
                    var tempArr = this.selectedColumns.splice(index, len);
                    (_a = this.selectedColumns).splice.apply(_a, [index - 1, 0].concat(tempArr));
                }
                this._updateHelpMetadata();
            }
        }
        else {
            this.mesagerSer.warning(SELECT_MOVE_COLUMN_MESSAGE);
        }
        var _a;
    };
    /** 下移 */
    DisplayColumnsComponent.prototype.moveDown = function () {
        if (this.hasCheckeds('r')) {
            var obj = this._getSelectColumnInfo();
            if (obj) {
                var len = this.selectedColumns.length;
                var index = obj.index;
                if (index === 0 || index !== len - 1) {
                    var tempArr = this.selectedColumns.splice(index, 1);
                    (_a = this.selectedColumns).splice.apply(_a, [index + 1, 0].concat(tempArr));
                }
                this._updateHelpMetadata();
            }
        }
        else {
            this.mesagerSer.warning(SELECT_MOVE_COLUMN_MESSAGE);
        }
        var _a;
    };
    /** 置底 */
    DisplayColumnsComponent.prototype.moveBottom = function () {
        var obj = this._getSelectColumnInfo();
        if (obj) {
            this.selectedColumns.push(obj.cols[0]);
            this.selectedColumns.splice(obj.index, 1);
            this._updateHelpMetadata();
        }
        else {
            this.mesagerSer.warning(SELECT_MOVE_COLUMN_MESSAGE);
        }
    };
    //#endregion
    DisplayColumnsComponent.prototype.convert2TreeNodes = function (data) {
        var _this = this;
        if (data.length) {
            // const nodes = data.filter((v) => v.ChildAssociations.length === );
            return data.map(function (n) {
                var node = {
                    data: n,
                    children: []
                };
                if (n.ChildAssociations.length) {
                    node.children = _this.convert2TreeNodes(n.ChildAssociations[0].RefElementCollection);
                }
                return node;
            });
        }
        return [];
    };
    DisplayColumnsComponent.prototype.convertTreeNodes2PlainObject = function (nodes, r) {
        var _this = this;
        if (r === void 0) { r = []; }
        if (nodes) {
            nodes.forEach(function (n) {
                r.push(n);
                if (n.children) {
                    _this.convertTreeNodes2PlainObject(n.children, r);
                }
            });
        }
        return r;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DisplayColumnsComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('tt'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__farris_ui__["TreeTableComponent"])
    ], DisplayColumnsComponent.prototype, "sourceTree", void 0);
    DisplayColumnsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "\n    <div class=\"row\" style=\"padding: 10px 30px;\">\n        <div class=\"col-6\">\n            <div class=\"row\">\n                <div class=\"col-10\">\n                    <fieldset>\n                        <legend>\u53EF\u9009\u5217\uFF1A</legend>\n                        <div class=\"container columns-box\">\n                        <!--\n                            <perfect-scrollbar [config]=\"{}\">\n                                <ul class=\"list-group list-group-flush\" style=\"margin: 0 15px\">\n                                    <li  class=\"list-group-item\" *ngFor=\"let col of columns\">\n                                        <div class=\"custom-control custom-checkbox  custom-control-inline\">\n                                            <input type=\"checkbox\" class=\"custom-control-input\" [checked]=\"isChecked(col, 'l')\"\n                                                                        [disabled]=\"!canChecked(col)\">\n                                            <label class=\"custom-control-label\" (click)=\"leftColumnChecked(col)\">\n                                                {{ col.Name }} [{{ col.Code }}]\n                                            </label>\n                                        </div>\n                                    </li>\n                                </ul>\n                            </perfect-scrollbar>\n                            -->\n                            <perfect-scrollbar [config]=\"{}\">\n                                <farris-treetable #tt [data]=\"sourceColumnsTreeData\" [idField]=\"idField\"\n                                    [singleSelect]=\"false\" [showIcon]=\"false\"\n                                    [showFilterBar]=\"false\"\n                                    [checkOnSelect]=\"true\">\n                                    <ng-template farrisTemplate=\"body\" let-rowNode let-rowData=\"rowData\" >\n                                        <tr #row=\"row\" [selectRow]=\"rowNode\" [dblclick]=\"true\" [selectRowDisabled]=\"!canChecked(rowData)\">\n                                            <td style=\"border: 0\" [style.color]=\"row.selectRowDisabled? '#a6a6a6': '#333'\">\n                                                <farris-treeTableToggler [disabled]=\"!canChecked(rowData)\"\n                                                                [rowNode]=\"rowNode\"></farris-treeTableToggler>\n                                                {{rowData['Name']}} [{{ rowData['LabelID'] }}]\n                                            </td>\n                                        </tr>\n                                    </ng-template>\n                                </farris-treetable>\n                            </perfect-scrollbar>\n                        </div>\n                    </fieldset>\n                </div>\n                <div class=\"col-2 v-center\">\n                    <button title=\"\u53F3\u79FB\" class=\"btn btn-outline-light icon right\" type=\"button\" (click)=\"moveToRight()\"></button>\n                    <button title=\"\u5168\u90E8\u53F3\u79FB\" class=\"btn btn-outline-light icon right-all\" type=\"button\" (click)=\"moveAllToRight()\"></button>\n                    <button title=\"\u5DE6\u79FB\" class=\"btn btn-outline-light icon left\" type=\"button\" (click)=\"moveToLeft()\"></button>\n                    <button title=\"\u5168\u90E8\u5DE6\u79FB\" class=\"btn btn-outline-light icon left-all\" type=\"button\" (click)=\"moveAllToLeft()\"></button>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-6\">\n            <div class=\"row\">\n                <div class=\"col-10\">\n                    <fieldset>\n                        <legend>\u5DF2\u9009\u5217\uFF1A</legend>\n                        <div class=\"container columns-box\">\n                            <perfect-scrollbar [config]=\"{}\">\n                                <ul class=\"list-group list-group-flush\"  style=\"margin: 0 15px\">\n                                    <li class=\"list-group-item\" (click)=\"rightColumnChecked(col)\"\n                                        *ngFor=\"let col of selectedColumns\" [class.active]=\"isChecked(col, 'r')\">\n                                        {{ col.Name }} [{{ col.LabelID }}]\n                                    </li>\n                                </ul>\n                            </perfect-scrollbar>\n                        </div>\n                    </fieldset>\n                </div>\n                <div class=\"col-2 v-center\">\n                    <button title=\"\u7F6E\u9876\" type=\"button\" class=\"btn btn-outline-light icon top\" (click)=\"moveTop()\"></button>\n                    <button title=\"\u4E0A\u79FB\" type=\"button\" class=\"btn btn-outline-light icon up\" (click)=\"moveUp()\"></button>\n                    <button title=\"\u4E0B\u79FB\" type=\"button\" class=\"btn btn-outline-light icon down\" (click)=\"moveDown()\"></button>\n                    <button title=\"\u7F6E\u5E95\" type=\"button\" class=\"btn btn-outline-light icon end\" (click)=\"moveBottom()\"></button>\n                </div>\n            </div>\n        </div>\n    </div>\n    ",
            styles: [__webpack_require__("./src/packages/help-metadata/views/guide/css/step4.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__farris_ui__["MessagerService"], __WEBPACK_IMPORTED_MODULE_1__farris_ui__["NotifyService"]])
    ], DisplayColumnsComponent);
    return DisplayColumnsComponent;
}());



/***/ }),

/***/ "./src/packages/help-metadata/views/guide/step.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step", function() { return Step; });
var Step = (function () {
    function Step(initData) {
        /**
         * 是否启用
         */
        this.show = true;
        this.disabledNextBtn = false;
        if (initData) {
            this._data = initData;
            this.initProperty();
        }
    }
    Step.prototype.initProperty = function () {
        var _this = this;
        Object.keys(this._data).forEach(function (key) {
            _this[key] = _this._data[key];
        });
    };
    return Step;
}());



/***/ }),

/***/ "./src/packages/help-metadata/views/help-metadata-desginer.packageview.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpMetadataDesignerPackageView", function() { return HelpMetadataDesignerPackageView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__ = __webpack_require__("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__designer_help_metadata_designer_component__ = __webpack_require__("./src/packages/help-metadata/views/designer/help-metadata-designer.component.ts");
/*
 * @Author: Lucas.Huang（疯狂秀才）
 * @Date: 2018-09-28 17:24:44
 * @Last Modified by:   Lucas.Huang（疯狂秀才）
 * @Last Modified time: 2018-09-28 17:24:44
 */
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


var HelpMetadataDesignerPackageView = (function (_super) {
    __extends(HelpMetadataDesignerPackageView, _super);
    function HelpMetadataDesignerPackageView(state, cfr, injector) {
        var _this = _super.call(this, state) || this;
        _this.cfr = cfr;
        _this.injector = injector;
        var componentFactory = _this.cfr.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_1__designer_help_metadata_designer_component__["HelpMetadataDesignerComponent"]);
        _this.element = componentFactory.create(_this.injector);
        return _this;
    }
    return HelpMetadataDesignerPackageView;
}(__WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__["PackageView"]));



/***/ }),

/***/ "./src/packages/help-metadata/views/help-metadata-guide.packageview.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpMetadataGuidePackageView", function() { return HelpMetadataGuidePackageView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__ = __webpack_require__("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__guide_help_meatadata_guid_component__ = __webpack_require__("./src/packages/help-metadata/views/guide/help-meatadata-guid.component.ts");
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


var HelpMetadataGuidePackageView = (function (_super) {
    __extends(HelpMetadataGuidePackageView, _super);
    function HelpMetadataGuidePackageView(state, cfr, injector) {
        var _this = _super.call(this, state) || this;
        _this.cfr = cfr;
        _this.injector = injector;
        var componentFactory = _this.cfr.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_1__guide_help_meatadata_guid_component__["HelpMetadataGuidComponent"]);
        _this.element = componentFactory.create(_this.injector);
        return _this;
    }
    return HelpMetadataGuidePackageView;
}(__WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__["PackageView"]));



/***/ }),

/***/ "./src/packages/help-metadata/views/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__help_metadata_desginer_packageview__ = __webpack_require__("./src/packages/help-metadata/views/help-metadata-desginer.packageview.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "HelpMetadataDesignerPackageView", function() { return __WEBPACK_IMPORTED_MODULE_0__help_metadata_desginer_packageview__["HelpMetadataDesignerPackageView"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__help_metadata_guide_packageview__ = __webpack_require__("./src/packages/help-metadata/views/help-metadata-guide.packageview.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "HelpMetadataGuidePackageView", function() { return __WEBPACK_IMPORTED_MODULE_1__help_metadata_guide_packageview__["HelpMetadataGuidePackageView"]; });




/***/ })

},[]);
//# sourceMappingURL=help-metadata.module.chunk.js.map