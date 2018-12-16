webpackJsonp(["form-create-wizard-package.module"],{

/***/ "./src/packages/form-create-wizard-package/form-create-wizard-package.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormCreateWizardPackageModule", function() { return FormCreateWizardPackageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_form_create_wizard_form_create_wizard_component__ = __webpack_require__("./src/packages/form-create-wizard-package/views/form-create-wizard/form-create-wizard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__package__ = __webpack_require__("./src/packages/form-create-wizard-package/package.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__farris_ide_devkit__ = __webpack_require__("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__farris_ide_devkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__farris_ide_devkit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_inputs__ = __webpack_require__("./node_modules/@progress/kendo-angular-inputs/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_dropdowns__ = __webpack_require__("./node_modules/@progress/kendo-angular-dropdowns/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_data_model_select__ = __webpack_require__("./src/packages/form-create-wizard-package/views/data-model-select/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__farris_ui__ = __webpack_require__("./node_modules/@farris/ui/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__farris_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__farris_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__gsp_lcm_metadata_selector__ = __webpack_require__("./node_modules/@gsp-lcm/metadata-selector/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__gsp_lcm_metadata_selector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__gsp_lcm_metadata_selector__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__views_form_basic_info_form_basic_info_component__ = __webpack_require__("./src/packages/form-create-wizard-package/views/form-basic-info/form-basic-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__views_select_be_fields_select_be_fields_component__ = __webpack_require__("./src/packages/form-create-wizard-package/views/select-be-fields/select-be-fields.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__views_form_template_select_form_template_select_component__ = __webpack_require__("./src/packages/form-create-wizard-package/views/form-template-select/form-template-select.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__views_wizard_wizard_component__ = __webpack_require__("./src/packages/form-create-wizard-package/views/wizard/wizard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__views_form_confirm_form_confirm_component__ = __webpack_require__("./src/packages/form-create-wizard-package/views/form-confirm/form-confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__progress_kendo_angular_treeview__ = __webpack_require__("./node_modules/@progress/kendo-angular-treeview/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__views_select_be_actions_select_be_actions_component__ = __webpack_require__("./src/packages/form-create-wizard-package/views/select-be-actions/select-be-actions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__progress_kendo_angular_grid__ = __webpack_require__("./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__views_select_show_fields_select_show_fields_component__ = __webpack_require__("./src/packages/form-create-wizard-package/views/select-show-fields/select-show-fields.component.ts");
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





















var FormCreateWizardPackageModule = (function (_super) {
    __extends(FormCreateWizardPackageModule, _super);
    function FormCreateWizardPackageModule(cfr, injector) {
        var _this = _super.call(this) || this;
        _this.cfr = cfr;
        _this.injector = injector;
        return _this;
    }
    FormCreateWizardPackageModule.prototype.initPackage = function (gsp) {
        this.package = new __WEBPACK_IMPORTED_MODULE_4__package__["FormCreateWizardPackage"](gsp, this.cfr, this.injector);
    };
    FormCreateWizardPackageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__views_form_create_wizard_form_create_wizard_component__["FormCreateWizardComponent"],
                __WEBPACK_IMPORTED_MODULE_8__views_data_model_select__["DataModelSelectComponent"],
                __WEBPACK_IMPORTED_MODULE_12__views_form_basic_info_form_basic_info_component__["FormBasicInfoComponent"],
                __WEBPACK_IMPORTED_MODULE_13__views_select_be_fields_select_be_fields_component__["SelectBeFieldsComponent"],
                __WEBPACK_IMPORTED_MODULE_18__views_select_be_actions_select_be_actions_component__["SelectBeActionsComponent"],
                __WEBPACK_IMPORTED_MODULE_14__views_form_template_select_form_template_select_component__["FormTemplateSelectComponent"],
                __WEBPACK_IMPORTED_MODULE_15__views_wizard_wizard_component__["WizardComponent"],
                __WEBPACK_IMPORTED_MODULE_16__views_form_confirm_form_confirm_component__["FormConfirmComponent"],
                __WEBPACK_IMPORTED_MODULE_20__views_select_show_fields_select_show_fields_component__["SelectShowFieldsComponent"]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_9__farris_ui__["PerfectScrollbarModule"],
                __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_inputs__["InputsModule"],
                __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_dropdowns__["DropDownsModule"],
                __WEBPACK_IMPORTED_MODULE_5__farris_ide_devkit__["PopoverModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__gsp_lcm_metadata_selector__["GSPMetadataServiceModule"].forRoot(__WEBPACK_IMPORTED_MODULE_11__environments_environment__["environment"].SERVER_IP),
                __WEBPACK_IMPORTED_MODULE_10__gsp_lcm_metadata_selector__["MetadataSelectModule"],
                __WEBPACK_IMPORTED_MODULE_9__farris_ui__["FarrisDialogModule"],
                __WEBPACK_IMPORTED_MODULE_17__progress_kendo_angular_treeview__["TreeViewModule"],
                __WEBPACK_IMPORTED_MODULE_19__progress_kendo_angular_grid__["GridModule"]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_3__views_form_create_wizard_form_create_wizard_component__["FormCreateWizardComponent"], __WEBPACK_IMPORTED_MODULE_12__views_form_basic_info_form_basic_info_component__["FormBasicInfoComponent"], __WEBPACK_IMPORTED_MODULE_18__views_select_be_actions_select_be_actions_component__["SelectBeActionsComponent"],
                __WEBPACK_IMPORTED_MODULE_13__views_select_be_fields_select_be_fields_component__["SelectBeFieldsComponent"], __WEBPACK_IMPORTED_MODULE_14__views_form_template_select_form_template_select_component__["FormTemplateSelectComponent"], __WEBPACK_IMPORTED_MODULE_8__views_data_model_select__["DataModelSelectComponent"], __WEBPACK_IMPORTED_MODULE_16__views_form_confirm_form_confirm_component__["FormConfirmComponent"], __WEBPACK_IMPORTED_MODULE_20__views_select_show_fields_select_show_fields_component__["SelectShowFieldsComponent"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], FormCreateWizardPackageModule);
    return FormCreateWizardPackageModule;
}(__WEBPACK_IMPORTED_MODULE_5__farris_ide_devkit__["PackageModule"]));

//# sourceMappingURL=form-create-wizard-package.module.js.map

/***/ }),

/***/ "./src/packages/form-create-wizard-package/package.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormCreateWizardPackage", function() { return FormCreateWizardPackage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__ = __webpack_require__("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_form_create_wizard_form_create_wizard_component__ = __webpack_require__("./src/packages/form-create-wizard-package/views/form-create-wizard/form-create-wizard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_form_create_wizard_package_view__ = __webpack_require__("./src/packages/form-create-wizard-package/views/form-create-wizard-package-view.ts");
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



var FormCreateWizardPackage = (function (_super) {
    __extends(FormCreateWizardPackage, _super);
    function FormCreateWizardPackage(gsp, cfr, injector) {
        var _this = _super.call(this, gsp) || this;
        _this.cfr = cfr;
        _this.injector = injector;
        return _this;
    }
    FormCreateWizardPackage.prototype.activate = function (state) {
        var _this = this;
        this.gsp.eventBus.on(null, null, 'Command:openMetadataGuide:WebDevMetadata', this, function (data) { return _this.showModal(state, data); });
    };
    FormCreateWizardPackage.prototype.getComponent = function () {
        return __WEBPACK_IMPORTED_MODULE_1__views_form_create_wizard_form_create_wizard_component__["FormCreateWizardComponent"];
    };
    FormCreateWizardPackage.prototype.showModal = function (state, data) {
        var _this = this;
        var packageView = new __WEBPACK_IMPORTED_MODULE_2__views_form_create_wizard_package_view__["FormCreateWizardPackageView"](state, this.cfr, this.injector);
        var comp = packageView.getElement().instance;
        comp.metadataDto = data;
        var modalPanel = this.gsp.workspace.addModalPanel({
            item: {
                element: packageView.getElement(),
                modalOptions: {
                    title: '新建表单',
                    width: 1000,
                    height: 520,
                    showButtons: false
                }
            }
        });
        comp.modalClosed.subscribe(function () { return modalPanel.destroy(); });
        // 向导点击完成-表单创建事件
        comp.createFormEvent.subscribe(function (formData) {
            _this.gsp.workspace.open(formData);
        });
    };
    return FormCreateWizardPackage;
}(__WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__["Package"]));



/***/ }),

/***/ "./src/packages/form-create-wizard-package/services/form-create-wizard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormCreateWizardService", function() { return FormCreateWizardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gsp_lcm_metadata_selector__ = __webpack_require__("./node_modules/@gsp-lcm/metadata-selector/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gsp_lcm_metadata_selector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__gsp_lcm_metadata_selector__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FormCreateWizardService = (function () {
    function FormCreateWizardService(http, metadataService) {
        this.http = http;
        this.metadataService = metadataService;
    }
    /**
     * mock 获取表单模板
     */
    FormCreateWizardService.prototype.getTemplateList = function (categoryKey, templateName) {
        var subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.http.get('assets/mock-data/templateListData.json').subscribe(function (data) {
            if (categoryKey) {
                data = Object(__WEBPACK_IMPORTED_MODULE_5_lodash__["filter"])(data, function (o) { return o.category === categoryKey; });
            }
            if (templateName) {
                data = Object(__WEBPACK_IMPORTED_MODULE_5_lodash__["filter"])(data, function (o) { return o.templateName.includes(templateName); });
            }
            subject.next(data);
        });
        return subject;
    };
    /**
     * mock 获取视图模型列表
    */
    FormCreateWizardService.prototype.queryViewModelList = function () {
        return this.http.get('assets/mock-data/viewModelListData.json');
    };
    /**
     * 获取模板分类
     */
    FormCreateWizardService.prototype.queryTemplateCatetory = function () {
        return [{
                key: '', value: '全部'
            }, {
                key: 'list', value: '列表'
            }, {
                key: 'card', value: '卡片'
            }, {
                key: 'listcard', value: '列卡'
            }];
    };
    /**
     * 保存创建的表单
     */
    FormCreateWizardService.prototype.saveForm = function (domJson, basicInfo) {
        var _this = this;
        var result = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.metadataService.InitializeMetadataEntity(basicInfo).subscribe(function (initResult) {
            var initContent = JSON.parse(initResult.content);
            initContent.Contents = JSON.stringify(domJson);
            initResult.content = JSON.stringify(initContent);
            _this.metadataService.CreateMetadata(initResult).subscribe(function () {
                result.next({
                    code: 'success',
                    message: '新建表单成功！'
                });
            }, function (error) {
                result.next({
                    code: 'error',
                    message: '新建表单失败！' + (error.message || '')
                });
            });
        }, function (error) {
            result.next({
                code: 'error',
                message: '新建表单失败！' + (error.message || '')
            });
        });
        return result;
    };
    /**
   * 解析BE实体结构(字段)
   */
    FormCreateWizardService.prototype.getBeMainObject = function (beMetadata) {
        if (!beMetadata || !beMetadata.metadata) {
            return;
        }
        var metadataContent = JSON.parse(beMetadata.metadata.content);
        return metadataContent.MainObject;
    };
    /**
     * 根据选中的BE字段和beActions筛选beMetadata，并调用API转换为VM
     */
    FormCreateWizardService.prototype.parseBeFields2VM = function (beMetadata, selectedBeFields, selectedBeActions) {
        if (!beMetadata || !beMetadata.metadata) {
            return;
        }
        var metadataContent = JSON.parse(beMetadata.metadata.content);
        // 选择的动作列表
        metadataContent.BizMgrActions = selectedBeActions;
        // 选择的字段列表
        metadataContent.MainObject = this.getBeMainObjectByIds(metadataContent.MainObject, selectedBeFields);
        console.log('选中的metadata：', beMetadata);
        beMetadata.metadata.content = JSON.stringify(metadataContent);
        // 调用API 生成VM
        var url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["environment"].SERVER_IP + '/api/dev/main/v1.0/viewmodel/convertBizEntity';
        var convertBeInfo = {
            bizEntityJson: beMetadata.metadata.content,
            bePkgName: beMetadata.packageHeader.name,
            beId: beMetadata.metadata.id
        };
        return this.http.put(url, convertBeInfo);
    };
    /**
    * 视图模型解析为DgViewModel结构
    */
    FormCreateWizardService.prototype.parseViewModel = function (viewModel) {
        if (!viewModel) {
            return;
        }
        // 表字段
        var dataModel = this.parseElements(viewModel['MainObject']);
        return dataModel;
    };
    /**
     * 解析表字段结构
     * @param mainObject
     */
    FormCreateWizardService.prototype.parseElements = function (mainObject) {
        var _this = this;
        var dataModel = {
            id: mainObject.ID,
            code: mainObject.Code,
            name: mainObject.Name,
            fields: {},
            children: {}
        };
        var fieldList = {};
        var elements = mainObject.ContainElements;
        elements.forEach(function (element) {
            var itemCode = element.Code;
            var itemObject;
            itemObject = {
                id: element.ID,
                dataType: _this.adpterDataType(element.MDataType),
                defaultValue: element.DefaultValue,
                name: element.Name,
                primary: false,
                code: element.Code,
                labelID: element.LabelID
            };
            if (element.ID === mainObject.ColumnGenerateID.ElementID) {
                itemObject.primary = true;
            }
            fieldList[itemCode] = itemObject;
            // const idElement = mainObject.IDElement;
            // if (idElement && fieldList[idElement.Code]) {
            //     fieldList[idElement.Code].primary = true;
            // }
            // 枚举值
            if (element.ContainEnumValues && element.ContainEnumValues.length > 0) {
                itemObject.enumValues = element.ContainEnumValues;
            }
            // 关联表
            if (element.ChildAssociations.length > 0 && element.ChildAssociations[0].RefElementCollection) {
                itemObject.refObject = {
                    id: element.ChildAssociations[0].RefModelID,
                    code: element.ChildAssociations[0].RefModelCode,
                    name: element.ChildAssociations[0].RefModelName,
                    fields: {}
                };
                element.ChildAssociations[0].RefElementCollection.forEach(function (association) {
                    var assName = association.Code;
                    var assObject;
                    assObject = {
                        id: association.ID,
                        dataType: _this.adpterDataType(association.MDataType),
                        defaultValue: association.DefaultValue,
                        name: association.Name,
                        primary: false,
                        code: association.Code,
                        labelID: association.LabelID
                    };
                    itemObject.refObject.fields[assName] = assObject;
                });
            }
        });
        // 子表
        var ContainChildObjects = mainObject.ContainChildObjects;
        if (ContainChildObjects && ContainChildObjects.length > 0) {
            ContainChildObjects.forEach(function (element) {
                var childElement = _this.parseElements(element);
                dataModel.children[element.Code] = childElement;
            });
        }
        dataModel.fields = fieldList;
        return dataModel;
    };
    /**
    * 将DgViewModel映射为kendo-treeview格式
    */
    FormCreateWizardService.prototype.mappingDgVM2Tree = function (dataModel) {
        var _this = this;
        var rootObject = {
            ID: dataModel['id'],
            Name: dataModel['name'],
            Code: dataModel['code'],
            labelID: dataModel['code'],
            Children: []
        };
        var fields = dataModel['fields'];
        Object.keys(fields).forEach(function (key) {
            var isLeaf = true;
            // 关联表
            var refObject = fields[key].refObject;
            var nodeRefObject;
            if (refObject) {
                nodeRefObject = _this.mappingDgVM2Tree(refObject);
                isLeaf = false;
            }
            var nodeObject = {
                ID: fields[key].id,
                Name: fields[key].name || '',
                Code: key,
                labelID: fields[key].labelID
            };
            if (!isLeaf) {
                nodeObject['Children'] = [nodeRefObject];
            }
            rootObject.Children.push(nodeObject);
        });
        // 子表
        var childFields = dataModel['children'];
        if (childFields && Object.keys(childFields).length > 0) {
            var childRoot_1 = {
                ID: '',
                Name: '子表',
                Code: '',
                labelID: ''
            };
            if (Object.keys(childFields).length > 0) {
                childRoot_1['Children'] = [];
                Object.keys(childFields).forEach(function (childField) {
                    var childObject = _this.mappingDgVM2Tree(childFields[childField]);
                    childRoot_1['Children'].push(childObject);
                });
            }
            rootObject.Children.push(childRoot_1);
        }
        return rootObject;
    };
    /**
     * 根据字段ID筛选元数据主对象
     */
    FormCreateWizardService.prototype.getBeMainObjectByIds = function (mainObject, selectedBeFields) {
        var beFields = [];
        Object.keys(selectedBeFields).forEach(function (tableCode) {
            if (selectedBeFields[tableCode].length > 0) {
                beFields = beFields.concat(selectedBeFields[tableCode]);
            }
        });
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
        // 子表
        var containChildObjects = mainObject.ContainChildObjects;
        for (var i = 0; i < containChildObjects.length; i++) {
            var childObject = containChildObjects[i];
            childObject = this.getBeMainObjectByIds(childObject, beFields);
            if (childObject.ContainElements.length === 0 && childObject.ContainChildObjects.length === 0) {
                // 未选中子表字段和子子表字段
                containChildObjects.splice(i, 1);
                i--;
            }
        }
        return mainObject;
    };
    /**
     * 适配VM数据类型-JIT数据类型
     */
    FormCreateWizardService.prototype.adpterDataType = function (dataType) {
        switch (dataType) {
            case 'String':
            case 'Text':
                return 'string';
            case 'Bool':
            case 'bool':
                return 'boolean';
            case 'Decimal':
                return 'number';
        }
        return dataType;
    };
    /**
     * 获取元数据
     */
    FormCreateWizardService.prototype.getMetadataByType = function (metadataType) {
        switch (metadataType) {
            case 'DataGrid': {
                return {
                    'id': 'DataGrid1',
                    'type': 'DataGrid',
                    'appearance': null,
                    'border': null,
                    'font': null,
                    'margin': null,
                    'padding': null,
                    'size': null,
                    'dataSource': null,
                    'fields': [],
                    'focusedItem': null,
                    'focusedIndex': null,
                    'pagination': null,
                    'identifyField': null,
                    'multiSelect': null,
                    'selectable': null,
                    'itemTemplate': null,
                    'toolBar': null,
                    'sortable': false,
                    'sort': null,
                    'summary': null,
                    'groupable': null,
                    'group': null
                };
            }
            case 'GridField': {
                return {
                    'id': 'col1',
                    'type': 'GridField',
                    'appearance': null,
                    'border': null,
                    'font': null,
                    'margin': null,
                    'padding': null,
                    'size': null,
                    'binding': null,
                    'dataField': '',
                    'displayTemplate': null,
                    'caption': '',
                    'captionTemplate': null,
                    'editor': null,
                    'readonly': false,
                    'require': false,
                    'draggable': false,
                    'frozen': false,
                    'sortable': false,
                    'sortOrder': null,
                    'resizeable': true
                };
            }
            case 'string': {
                return {
                    'id': 'textBox1',
                    'type': 'TextBox',
                    'appearance': null,
                    'border': null,
                    'font': null,
                    'margin': null,
                    'padding': null,
                    'size': null,
                    'binding': null,
                    'title': '',
                    'readonly': false,
                    'require': false,
                    'disable': false,
                    'placeHolder': '',
                    'format': null,
                    'validation': null,
                    'defaultValue': '',
                    'value': null,
                    'maxLength': null
                };
            }
            case 'number': {
                return {
                    'id': 'numericBox1',
                    'type': 'NumericBox',
                    'appearance': null,
                    'border': null,
                    'font': null,
                    'margin': null,
                    'padding': null,
                    'size': null,
                    'binding': null,
                    'title': '',
                    'readonly': false,
                    'require': false,
                    'disable': false,
                    'placeHolder': '',
                    'format': null,
                    'validation': null,
                    'defaultValue': null,
                    'value': null,
                    'maxValue': null,
                    'minValue': 0,
                    'spin': null,
                    'step': 1
                };
            }
            case 'Date': {
                return {
                    'id': 'date1',
                    'type': 'DateBox',
                    'appearance': null,
                    'border': null,
                    'font': null,
                    'margin': null,
                    'padding': null,
                    'size': null,
                    'binding': null,
                    'title': '',
                    'readonly': false,
                    'require': false,
                    'disable': false,
                    'placeHolder': '',
                    'format': null,
                    'validation': null,
                    'defaultValue': null,
                    'value': null,
                    'maxValue': null,
                    'minValue': 0,
                    'spin': null,
                    'step': 1
                };
            }
            case 'tabPage': {
                return {
                    'id': 'tabpage1',
                    'type': 'TabPage',
                    'appearance': null,
                    'border': null,
                    'font': null,
                    'margin': null,
                    'padding': null,
                    'size': null,
                    'contentTemplate': null,
                    'headerTemplate': null,
                    'title': '',
                    'contents': []
                };
            }
        }
    };
    FormCreateWizardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["HttpClient"], __WEBPACK_IMPORTED_MODULE_2__gsp_lcm_metadata_selector__["GSPMetadataService"]])
    ], FormCreateWizardService);
    return FormCreateWizardService;
}());



/***/ }),

/***/ "./src/packages/form-create-wizard-package/views/data-model-select/data-model-select.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modelSelect {\r\n    padding: 10px 15px;\r\n    font-size: 0.875rem;\r\n    color: #333333;\r\n    line-height: 2rem;\r\n}\r\n\r\n.modelSelect .div-fill {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n}\r\n\r\n.modelSelect .sourcePanel {\r\n    padding: 0 15px;\r\n    width: 220px;\r\n}\r\n\r\n.modelSelect .sourcePanel .sourceItem, .modelSelect .viewModel {\r\n    cursor: pointer;\r\n}\r\n\r\n.modelSelect .sourcePanel .sourceItem:hover, .modelSelect .viewModel:hover {\r\n    background-color: rgba(105, 118, 127, 0.15);\r\n}\r\n\r\n.modelSelect .sourcePanel .sourceItem.active {\r\n    color: #ffffff;\r\n    background-color: #416b8e;\r\n}\r\n\r\n.modelSelect .sourcePanel .sourceItem.disable {\r\n    color: #9b9b9e\r\n}\r\n\r\n.modelSelect .viewModelList {\r\n    overflow: auto;\r\n}\r\n\r\n.modelSelect .viewModel.active {\r\n    background-color: #007cc0;\r\n    color: #ffffff;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/form-create-wizard-package/views/data-model-select/data-model-select.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex modelSelect h-100\">\r\n  <div class=\"sourcePanel\">\r\n    <div class=\"mb-2 pl-3\">数据来源</div>\r\n    <div class=\"d-flex flex-column border\">\r\n      <!-- <div class=\"sourceItem px-3 py-1 border-bottom\" [class.active]=\"data.dataModel.selectedModelSource==='viewModel'\" (click)=\"changeModelSource('viewModel')\">选择视图模型</div> -->\r\n      <div class=\"sourceItem px-3 py-1 border-bottom\" [class.active]=\"data.dataModel.selectedModelSource==='beEntity'\" (click)=\"changeModelSource('beEntity')\">选择BE实体</div>\r\n      <div class=\"sourceItem px-3 py-1 border-bottom disable\" [class.active]=\"data.dataModel.selectedModelSource==='manual'\">手工录入</div>\r\n      <div class=\"sourceItem px-3 py-1 border-bottom disable\">OpenAPI3.0</div>\r\n      <div class=\"sourceItem px-3 py-1 border-bottom disable\">OData</div>\r\n      <div class=\"sourceItem px-3 py-1 border-bottom disable\">WebService</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"div-fill pl-3\">\r\n    <!-- <div *ngIf=\"data.dataModel.selectedModelSource==='viewModel'\" class=\"d-flex flex-column h-100\">\r\n      <div class=\"mb-2\">请从以下视图模型中选择一项</div>\r\n      <div class=\"viewModelList border div-fill\">\r\n        <div *ngFor=\"let viewModel of viewModelList\" class=\"px-3 py-1 border-bottom viewModel\" [class.active]=\"viewModel.ID===data.dataModel.selectedViewModel.ID\"\r\n          (click)=\"changeViewModel(viewModel)\">{{viewModel.Name}}</div>\r\n      </div>\r\n\r\n    </div> -->\r\n    <div *ngIf=\"data.dataModel.selectedModelSource==='beEntity'\">\r\n      <div class=\"mb-2\">请选择BE<span class=\"k-required\">*</span></div>\r\n      <form class=\"validation-beEntity mb-2\" novalidate>\r\n        <div class=\"custom-file\">\r\n          <input class=\"custom-file-input\" [(ngModel)]=\"data.dataModel.beMetadata\" name=\"beEntity\" required hidden>\r\n          <!-- <input type=\"file\" class=\"custom-file-input\" accept=\"application/json\"> -->\r\n          <label class=\"custom-file-label\" (click)=\"openMetadataSelect()\" *ngIf=\"!data.dataModel.beMetadata || !data.dataModel.beMetadata.metadata\"></label>\r\n          <label class=\"custom-file-label\" (click)=\"openMetadataSelect()\" *ngIf=\"data.dataModel.beMetadata && data.dataModel.beMetadata.metadata\">\r\n            {{data.dataModel.beMetadata.metadata.fileName}}</label>\r\n                  </div>\r\n      </form>\r\n      <div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"data.dataModel.selectedModelSource==='manual'\">\r\n      <div class=\"mb-2\">请选择本地视图模型.json文件<span class=\"k-required\">*</span></div>\r\n      <form class=\"validation-manual mb-2\" novalidate>\r\n        <div class=\"custom-file\">\r\n          <input class=\"custom-file-input\" [(ngModel)]=\"data.dataModel.modelUpload.fileName\" name=\"formName\" required hidden>\r\n          <input type=\"file\" class=\"custom-file-input\" accept=\"application/json\" (change)=\"getUpload($event)\">\r\n          <label class=\"custom-file-label\" *ngIf=\"!data.dataModel.modelUpload.fileName\">Choose file...</label>\r\n          <label class=\"custom-file-label\" *ngIf=\"data.dataModel.modelUpload.fileName\">{{data.dataModel.modelUpload.fileName}}</label>\r\n\r\n          <div class=\"invalid-feedback\">请选择文件</div>\r\n        </div>\r\n      </form>\r\n      <div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/packages/form-create-wizard-package/views/data-model-select/data-model-select.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataModelSelectComponent", function() { return DataModelSelectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_model_service__ = __webpack_require__("./src/packages/form-create-wizard-package/views/data-model-select/services/data-model-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gsp_lcm_metadata_selector__ = __webpack_require__("./node_modules/@gsp-lcm/metadata-selector/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gsp_lcm_metadata_selector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__gsp_lcm_metadata_selector__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__farris_ui__ = __webpack_require__("./node_modules/@farris/ui/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__farris_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__farris_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_form_create_wizard_service__ = __webpack_require__("./src/packages/form-create-wizard-package/services/form-create-wizard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DataModelSelectComponent = (function () {
    function DataModelSelectComponent(dataModelService, formCreateService, resolver, modalService, injector) {
        var _this = this;
        this.dataModelService = dataModelService;
        this.formCreateService = formCreateService;
        this.resolver = resolver;
        this.modalService = modalService;
        this.injector = injector;
        this.viewModelList = []; // 视图模型列表
        this.changeStep = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.validation = function () {
            if (_this.data.dataModel.selectedModelSource === 'viewModel' && !_this.data.dataModel.selectedViewModel) {
                return false;
            }
            else if (_this.data.dataModel.selectedModelSource === 'manual') {
                return _this.checkFormRequired('validation-manual');
            }
            else if (_this.data.dataModel.selectedModelSource === 'beEntity') {
                return _this.checkFormRequired('validation-beEntity');
            }
            return true;
        };
        this.clickNextStep = function () {
            if (_this.data.dataModel.selectedModelSource === 'viewModel') {
                _this.data.dataModel.dgViewModel = _this.formCreateService.parseViewModel(_this.data.dataModel.selectedViewModel);
            }
            // const subject = new Subject<any>();
            // subject.n;
            return true;
        };
    }
    DataModelSelectComponent.prototype.ngOnInit = function () {
        if (!this.data.dataModel.selectedModelSource) {
            this.data.dataModel.selectedModelSource = 'beEntity';
        }
        if (this.data.dataModel.selectedModelSource === 'viewModel') {
            this.queryViewModelList();
        }
    };
    /**
       * 查询当前环境下所有的视图模型
       */
    DataModelSelectComponent.prototype.queryViewModelList = function () {
        var _this = this;
        this.dataModelService.queryViewModelList().subscribe(function (data) {
            _this.viewModelList = data || [];
            // 当前未选中视图模型 ---> 默认选择第一个
            if ((!_this.data.dataModel.selectedViewModel || Object.keys(_this.data.dataModel.selectedViewModel).length === 0) &&
                _this.viewModelList.length > 0) {
                _this.data.dataModel.selectedViewModel = _this.viewModelList[0];
            }
        });
    };
    /**
    * 切换数据来源
    */
    DataModelSelectComponent.prototype.changeModelSource = function (source) {
        if (this.data.dataModel.selectedModelSource === 'beEntity' && source !== 'beEntity') {
            this.changeStep.emit([{
                    stepId: 'selectDataModel',
                    nextStep: 'selectShowFields'
                }, {
                    stepId: 'selectBeFields',
                    show: false
                },
                {
                    stepId: 'selectBeActions',
                    show: false
                }]);
        }
        this.data.dataModel.selectedModelSource = source;
        if (source === 'viewModel') {
            // 查询视图模型列表
            this.queryViewModelList();
        }
        else if (source === 'beEntity') {
            this.changeStep.emit([{
                    stepId: 'selectDataModel',
                    nextStep: 'selectBeFields'
                }, {
                    stepId: 'selectBeFields',
                    show: true
                }, {
                    stepId: 'selectBeActions',
                    show: true,
                    nextStep: 'selectShowFields'
                }]);
        }
    };
    /**
    * 切换视图模型
    * @param viewModel
    */
    DataModelSelectComponent.prototype.changeViewModel = function (viewModel) {
        this.data.dataModel.selectedViewModel = viewModel;
    };
    /**
     * 选择BE元数据
     */
    DataModelSelectComponent.prototype.openMetadataSelect = function () {
        var _this = this;
        var compFactory = this.resolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_2__gsp_lcm_metadata_selector__["SelectMetadataComponent"]);
        var compRef = compFactory.create(this.injector);
        compRef.instance.metadataPath = this.data.basicInfo.relativePath;
        compRef.instance.typeName = 'GSPBusinessEntity';
        compRef.instance.selectedMetadata.subscribe(function ($event) {
            if (!$event || !$event.metadata) {
                return;
            }
            _this.data.dataModel.beMetadata = $event;
            _this.data.dataModel.selectedBeMetadata = Object(__WEBPACK_IMPORTED_MODULE_4_lodash__["cloneDeep"])($event);
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
    DataModelSelectComponent.prototype.checkFormRequired = function (className) {
        var self = this;
        var forms;
        forms = document.getElementsByClassName(className);
        if (forms && forms.length > 0) {
            var form = forms[0];
            var flag = false;
            if (form.checkValidity()) {
                flag = true;
            }
            form.classList.add('was-validated');
            return flag;
        }
        else {
            return true;
        }
    };
    /**
     * 数据模型本地上传
     * @param event
     */
    DataModelSelectComponent.prototype.getUpload = function (event) {
        if (event.target.files[0]) {
            var file = event.target.files[0];
            if (file.type !== 'application/json') {
                return;
            }
            this.data.dataModel.selectedViewModel.fileName = file.name;
            var self_1 = this;
            var reader_1 = new FileReader();
            reader_1.readAsText(file);
            reader_1.onload = function () {
                var resObject = JSON.parse((reader_1.result));
                // console.log('文件内容:', resObject);
                self_1.data.dataModel.selectedViewModel.fileContent = resObject;
            };
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DataModelSelectComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], DataModelSelectComponent.prototype, "changeStep", void 0);
    DataModelSelectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'webide-data-model-select',
            template: __webpack_require__("./src/packages/form-create-wizard-package/views/data-model-select/data-model-select.component.html"),
            styles: [__webpack_require__("./src/packages/form-create-wizard-package/views/data-model-select/data-model-select.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_data_model_service__["DataModelService"], __WEBPACK_IMPORTED_MODULE_5__services_form_create_wizard_service__["FormCreateWizardService"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_model_service__["DataModelService"], __WEBPACK_IMPORTED_MODULE_5__services_form_create_wizard_service__["FormCreateWizardService"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], __WEBPACK_IMPORTED_MODULE_3__farris_ui__["BsModalService"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], DataModelSelectComponent);
    return DataModelSelectComponent;
}());



/***/ }),

/***/ "./src/packages/form-create-wizard-package/views/data-model-select/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_model_select_component__ = __webpack_require__("./src/packages/form-create-wizard-package/views/data-model-select/data-model-select.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DataModelSelectComponent", function() { return __WEBPACK_IMPORTED_MODULE_0__data_model_select_component__["DataModelSelectComponent"]; });



/***/ }),

/***/ "./src/packages/form-create-wizard-package/views/data-model-select/services/data-model-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataModelService", function() { return DataModelService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataModelService = (function () {
    function DataModelService(http) {
        this.http = http;
    }
    /**
     * mock 获取视图模型列表
    */
    DataModelService.prototype.queryViewModelList = function () {
        return this.http.get('assets/mock-data/viewModelListData.json');
    };
    DataModelService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpClient"]])
    ], DataModelService);
    return DataModelService;
}());



/***/ }),

/***/ "./src/packages/form-create-wizard-package/views/form-basic-info/form-basic-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".basicInfo input.invalidCode {\r\n    color: #f31700;\r\n    border-color: rgba(243, 23, 0, .5);\r\n}\r\n\r\n.basicInfo input.invalidCode:focus {\r\n    border-color: #f31700;\r\n    box-shadow: 0 0 0 2px rgba(243, 23, 0, .25);\r\n}\r\n\r\n.basicInfo div.invalidCode {\r\n    display: block;\r\n    width: 100%;\r\n    margin-top: .25rem;\r\n    font-size: 80%;\r\n    color: #dc3545;\r\n}\r\n\r\n.basicInfo .questionBtn {\r\n    position: absolute;\r\n    right: 15px;\r\n    top: 35px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/form-create-wizard-package/views/form-basic-info/form-basic-info.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"validation-basic k-form basicInfo\" novalidate>\r\n  <label class=\"k-form-field mb-2 position-relative\">\r\n    <span>表单编号<span class=\"k-required\">*</span></span>\r\n    <input class=\"k-textbox form-control\" [class.invalidCode]=\"!isFormCodeValid\" [(ngModel)]=\"data.formCode\" name=\"formCode\"\r\n      required autocomplete=\"off\" (ngModelChange)=\"checkFormCode()\" />\r\n    <button type=\"button\" class=\"k-button k-bare questionBtn\" triggers=\"mouseenter:mouseleave\" popover=\"表单编号，同时是表单元数据文件名称，仅允许使用字母数字下划线，遵守Pascal命名规范，如SalesOrder\"\r\n      container=\"body\">\r\n      <i class=\"fa fa-question-circle\"></i>\r\n    </button>\r\n    <div class=\"invalidCode\" *ngIf=\"!isFormCodeValid\">\r\n      必填，仅允许使用字母数字下划线，遵守Pascal命名规范，如SalesOrder.\r\n    </div>\r\n  </label>\r\n  <label class=\"k-form-field mb-2  position-relative\">\r\n    <span>表单名称<span class=\"k-required\">*</span></span>\r\n    <input class=\"k-textbox form-control\" [(ngModel)]=\"data.formName\" name=\"formName\" required autocomplete=\"off\" />\r\n    <button type=\"button\" class=\"k-button k-bare questionBtn\" triggers=\"mouseenter:mouseleave\" popover=\"表单名称，表单元数据的附加描述，可以使用中文，但是不能包含非法字符\"\r\n      container=\"body\">\r\n      <i class=\"fa fa-question-circle\"></i>\r\n    </button>\r\n  </label>\r\n\r\n  <label class=\"k-form-field mb-2\">\r\n    <span>保存路径<span class=\"k-required\">*</span></span>\r\n    <div class=\"input-group mb-2\">\r\n      <input kendoTextBox class='form-control' [(ngModel)]=\"data.path\" name=\"formPath\" readonly required autocomplete=\"off\" />\r\n      <div class=\"input-group-append\">\r\n        <button class=\"btn btn-outline-secondary\" type=\"button\"> 选择路径 </button>\r\n      </div>\r\n    </div>\r\n  </label>\r\n</form>\r\n\r\n<!-- \r\n\r\n\r\n<div class=\"farris-group-wrap\">\r\n  <div class=\"form-group farris-form-group\">\r\n    <label   class=\"col-form-label\">\r\n      <span class=\"farris-label-text\">类型</span>\r\n      <small class=\"farris-label-info text-muted\">提示信息</small>\r\n    </label>\r\n    <div class=\"farris-input-wrap\">\r\n      <select class=\"form-control is-invalid\">\r\n        <option selected=\"\">股份公司</option>\r\n        <option>国有单位</option>\r\n        <option>个人</option>\r\n      </select>\r\n      <div class=\"farris-feedback invalid-feedback\">\r\n        设置不符合规则\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div> -->"

/***/ }),

/***/ "./src/packages/form-create-wizard-package/views/form-basic-info/form-basic-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBasicInfoComponent", function() { return FormBasicInfoComponent; });
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

var FormBasicInfoComponent = (function () {
    function FormBasicInfoComponent() {
        var _this = this;
        this.isFormCodeValid = true;
        this.validation = function () {
            var self = _this;
            var forms;
            forms = document.getElementsByClassName('validation-basic');
            if (forms && forms.length > 0) {
                var form = forms[0];
                var flag = false;
                if (form.checkValidity() && _this.isFormCodeValid) {
                    flag = true;
                }
                form.classList.add('was-validated');
                return flag;
            }
            else {
                return true;
            }
        };
    }
    FormBasicInfoComponent.prototype.ngOnInit = function () { };
    FormBasicInfoComponent.prototype.checkFormCode = function () {
        var reg2 = new RegExp('^[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*$');
        if (!reg2.test(this.data.formCode)) {
            this.isFormCodeValid = false;
        }
        else {
            this.isFormCodeValid = true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FormBasicInfoComponent.prototype, "data", void 0);
    FormBasicInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-form-basic-info',
            template: __webpack_require__("./src/packages/form-create-wizard-package/views/form-basic-info/form-basic-info.component.html"),
            styles: [__webpack_require__("./src/packages/form-create-wizard-package/views/form-basic-info/form-basic-info.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FormBasicInfoComponent);
    return FormBasicInfoComponent;
}());



/***/ }),

/***/ "./src/packages/form-create-wizard-package/views/form-confirm/form-confirm.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/form-create-wizard-package/views/form-confirm/form-confirm.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"p-3\"> 确认完成创建</div>"

/***/ }),

/***/ "./src/packages/form-create-wizard-package/views/form-confirm/form-confirm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormConfirmComponent", function() { return FormConfirmComponent; });
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

var FormConfirmComponent = (function () {
    function FormConfirmComponent() {
    }
    FormConfirmComponent.prototype.ngOnInit = function () {
    };
    FormConfirmComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-form-confirm',
            template: __webpack_require__("./src/packages/form-create-wizard-package/views/form-confirm/form-confirm.component.html"),
            styles: [__webpack_require__("./src/packages/form-create-wizard-package/views/form-confirm/form-confirm.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FormConfirmComponent);
    return FormConfirmComponent;
}());



/***/ }),

/***/ "./src/packages/form-create-wizard-package/views/form-create-wizard-package-view.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormCreateWizardPackageView", function() { return FormCreateWizardPackageView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__ = __webpack_require__("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form_create_wizard_form_create_wizard_component__ = __webpack_require__("./src/packages/form-create-wizard-package/views/form-create-wizard/form-create-wizard.component.ts");
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


var FormCreateWizardPackageView = (function (_super) {
    __extends(FormCreateWizardPackageView, _super);
    function FormCreateWizardPackageView(serializedState, cfr, injector) {
        var _this = _super.call(this, serializedState) || this;
        _this.cfr = cfr;
        _this.injector = injector;
        _this.element = cfr.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_1__form_create_wizard_form_create_wizard_component__["FormCreateWizardComponent"]).create(injector);
        return _this;
    }
    return FormCreateWizardPackageView;
}(__WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__["PackageView"]));



/***/ }),

/***/ "./src/packages/form-create-wizard-package/views/form-create-wizard/form-create-wizard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".formcreateWizard .createNav {\r\n    background: #e8edf2;\r\n    height: 40px;\r\n    margin-top: -10px;\r\n    margin-left: -5px;\r\n}\r\n\r\n.formcreateWizard .createNav .stepTitle {\r\n    padding: 0px 10px;\r\n    color: #666666;\r\n    line-height: 40px;\r\n    cursor: pointer;\r\n    font-size: 0.875rem;\r\n}\r\n\r\n.formcreateWizard .createNav .stepTitle.active {\r\n    color: #FFFFFF;\r\n    background-color: #346180 !important;\r\n}\r\n\r\n.formcreateWizard .createNav .stepTitle:not(:first-child).active {\r\n    margin-left: -17px;\r\n    padding-left: 25px;\r\n}\r\n\r\n.formcreateWizard .createNav .stepTitle.disable {\r\n    color: #cdcdcf;\r\n}\r\n\r\n.formcreateWizard .triangle_border_right {\r\n    width: 0;\r\n    height: 0;\r\n    border-width: 20px 0 20px 18px;\r\n    border-style: solid;\r\n    border-color: transparent transparent transparent #cccccc;\r\n    position: relative;\r\n}\r\n\r\n.formcreateWizard .triangle_border_right span {\r\n    display: block;\r\n    width: 0;\r\n    height: 0;\r\n    border-width: 20px 0px 20px 18px;\r\n    border-style: solid;\r\n    border-color: transparent transparent transparent #e8edf2;\r\n    position: absolute;\r\n    top: -20px;\r\n    left: -20px;\r\n}\r\n\r\n.formcreateWizard .triangle_border_right.active {\r\n    width: 0;\r\n    height: 0;\r\n    border-width: 20px 0 20px 20px;\r\n    border-color: transparent transparent transparent #e8edf2;\r\n}\r\n\r\n.formcreateWizard .triangle_border_right.active span {\r\n    border-width: 20px 0 20px 20px;\r\n    border-color: transparent transparent transparent #346180;\r\n}\r\n\r\n.formcreateWizard .modalBody {\r\n    background-color: #ffffff;\r\n    font-size: 0.875rem;\r\n    color: #333333;\r\n    line-height: 2rem;\r\n    height: 400px;\r\n    overflow: auto;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n}\r\n\r\n.formcreateWizard .modalBody .form-control {\r\n    font-size: 0.875rem;\r\n}\r\n\r\n.formcreateWizard .modalBody input.invalidCode {\r\n    color: #f31700;\r\n    border-color: rgba(243, 23, 0, .5);\r\n}\r\n\r\n.formcreateWizard .modalBody input.invalidCode:focus {\r\n    border-color: #f31700;\r\n    box-shadow: 0 0 0 2px rgba(243, 23, 0, .25);\r\n}\r\n\r\n.formcreateWizard .modalBody div.invalidCode {\r\n    display: block;\r\n    width: 100%;\r\n    margin-top: .25rem;\r\n    font-size: 80%;\r\n    color: #dc3545;\r\n}\r\n\r\n.formcreateWizard .modalBody .questionBtn {\r\n    position: absolute;\r\n    right: 15px;\r\n    top: 35px;\r\n}\r\n\r\n.formcreateWizard .modalBody .div-fill {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n}\r\n\r\n.formcreateWizard .modalBody .selectTpl .tmpList {\r\n    overflow: auto;\r\n}\r\n\r\n.formcreateWizard .modalBody .selectTpl .tmpList .media.active {\r\n    background: #d9d9d9;\r\n}\r\n\r\n.formcreateWizard .modalBody .selectTpl .tmpList img {\r\n    max-width: 100px;\r\n}\r\n\r\n.formcreateWizard .modalBody .rightDetail {\r\n    overflow: auto;\r\n}\r\n\r\n.formcreateWizard .modalBody .fa-search {\r\n    position: absolute;\r\n    right: 8px;\r\n    top: 43px;\r\n    color: grey;\r\n}\r\n\r\n.formcreateWizard .modelSelect .sourcePanel {\r\n    padding: 0 15px;\r\n    width: 220px;\r\n}\r\n\r\n.formcreateWizard .modelSelect .sourcePanel .sourceItem, .formcreateWizard .modelSelect .viewModel {\r\n    cursor: pointer;\r\n}\r\n\r\n.formcreateWizard .modelSelect .sourcePanel .sourceItem:hover, .formcreateWizard .modelSelect .viewModel:hover {\r\n    background-color: rgba(105, 118, 127, 0.15);\r\n}\r\n\r\n.formcreateWizard .modelSelect .sourcePanel .sourceItem.active {\r\n    color: #ffffff;\r\n    background-color: #416b8e;\r\n}\r\n\r\n.formcreateWizard .modelSelect .sourcePanel .sourceItem.disable {\r\n    color: #9b9b9e\r\n}\r\n\r\n.formcreateWizard .modelSelect .viewModelList {\r\n    overflow: auto;\r\n}\r\n\r\n.formcreateWizard .modelSelect .viewModel.active {\r\n    background-color: #007cc0;\r\n    color: #ffffff;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/form-create-wizard-package/views/form-create-wizard/form-create-wizard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-wizard [steps]=\"steps\" (clickCancelBtn)=\"clickCloseModal()\" (clickFinishBtn)=\"clickFinishBtn()\"></app-wizard>"

/***/ }),

/***/ "./src/packages/form-create-wizard-package/views/form-create-wizard/form-create-wizard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormCreateWizardComponent", function() { return FormCreateWizardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_model_select__ = __webpack_require__("./src/packages/form-create-wizard-package/views/data-model-select/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_form_create_wizard_service__ = __webpack_require__("./src/packages/form-create-wizard-package/services/form-create-wizard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__form_template_select_form_template_select_component__ = __webpack_require__("./src/packages/form-create-wizard-package/views/form-template-select/form-template-select.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__select_be_fields_select_be_fields_component__ = __webpack_require__("./src/packages/form-create-wizard-package/views/select-be-fields/select-be-fields.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__form_confirm_form_confirm_component__ = __webpack_require__("./src/packages/form-create-wizard-package/views/form-confirm/form-confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__select_be_actions_select_be_actions_component__ = __webpack_require__("./src/packages/form-create-wizard-package/views/select-be-actions/select-be-actions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__select_show_fields_select_show_fields_component__ = __webpack_require__("./src/packages/form-create-wizard-package/views/select-show-fields/select-show-fields.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FormCreateWizardComponent = (function () {
    function FormCreateWizardComponent(formCreateService) {
        this.formCreateService = formCreateService;
        this.modalClosed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.createFormEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.formInfo = {
            basicInfo: {},
            templateInfo: {
                selectedTplCategory: '',
                selectedTpl: null
            },
            dataModel: {
                selectedModelSource: '',
                selectedViewModel: null,
                modelUpload: {
                    fileName: '',
                    fileContent: {}
                },
                beMetadata: null,
                selectedBeFields: {},
                selectedBeActions: [],
                selectedBeMetadata: null,
                dgViewModel: null
            },
            showFields: {
                card_selected: {},
                list_selected: [],
                listcard_selected: {
                    showFieldsInGrid: {},
                    showFieldsInCard: {}
                }
            }
        };
        this.steps = [
            {
                stepId: 'selectTemplate',
                title: '选择表单模板',
                component: __WEBPACK_IMPORTED_MODULE_3__form_template_select_form_template_select_component__["FormTemplateSelectComponent"],
                data: this.formInfo.templateInfo,
                show: true,
                nextStep: 'selectDataModel',
                showFinishBtn: false,
                showCancelBtn: true,
                showLastStepBtn: false,
                showNextStepBtn: true
            },
            {
                stepId: 'selectDataModel',
                title: '选择数据模型',
                component: __WEBPACK_IMPORTED_MODULE_1__data_model_select__["DataModelSelectComponent"],
                data: this.formInfo,
                nextStep: 'selectBeFields',
                show: true,
                showFinishBtn: false,
                showCancelBtn: true,
                showLastStepBtn: true,
                showNextStepBtn: true
            },
            {
                stepId: 'selectBeFields',
                title: '选择BE字段',
                component: __WEBPACK_IMPORTED_MODULE_4__select_be_fields_select_be_fields_component__["SelectBeFieldsComponent"],
                data: this.formInfo.dataModel,
                show: true,
                nextStep: 'selectBeActions',
                showFinishBtn: false,
                showCancelBtn: true,
                showLastStepBtn: true,
                showNextStepBtn: true
            }, {
                stepId: 'selectBeActions',
                title: '选择BE动作',
                component: __WEBPACK_IMPORTED_MODULE_6__select_be_actions_select_be_actions_component__["SelectBeActionsComponent"],
                data: this.formInfo.dataModel,
                show: true,
                nextStep: 'selectShowFields',
                showFinishBtn: false,
                showCancelBtn: true,
                showLastStepBtn: true,
                showNextStepBtn: true
            },
            {
                stepId: 'selectShowFields',
                title: '选择表单展示字段',
                component: __WEBPACK_IMPORTED_MODULE_7__select_show_fields_select_show_fields_component__["SelectShowFieldsComponent"],
                data: this.formInfo,
                nextStep: 'formConfirm',
                show: true,
                showFinishBtn: false,
                showCancelBtn: true,
                showLastStepBtn: true,
                showNextStepBtn: true
            },
            {
                stepId: 'formConfirm',
                title: '确认完成',
                component: __WEBPACK_IMPORTED_MODULE_5__form_confirm_form_confirm_component__["FormConfirmComponent"],
                data: {},
                show: true,
                nextStep: '',
                showFinishBtn: true,
                showCancelBtn: true,
                showLastStepBtn: true,
                showNextStepBtn: false
            }
        ];
    }
    Object.defineProperty(FormCreateWizardComponent.prototype, "metadataDto", {
        set: function (metadataDto) {
            this._metadata = metadataDto;
            this.formInfo.basicInfo = metadataDto;
        },
        enumerable: true,
        configurable: true
    });
    FormCreateWizardComponent.prototype.ngOnInit = function () {
    };
    /**
     * 关闭模态框
     */
    FormCreateWizardComponent.prototype.clickCloseModal = function () {
        this.modalClosed.emit();
    };
    /**
     * 点击完成
     */
    FormCreateWizardComponent.prototype.clickFinishBtn = function () {
        var _this = this;
        console.log(this.formInfo);
        this.modalClosed.emit();
        var domJson = this.formInfo.templateInfo.selectedTpl.domJson;
        // 覆盖表单模板code/name信息
        domJson.module.id = domJson.module.code = this._metadata.code;
        domJson.module.name = domJson.module.caption = this._metadata.name;
        domJson.module.creationDate = '2018-08-30 10:56:00';
        // 获取、解析VM并保存到表单DOM
        var vm = this.formInfo.dataModel.dgViewModel;
        domJson.module.schemas = [vm];
        // 调用元数据保存服务
        this.formCreateService.saveForm(domJson, this._metadata).subscribe(function (result) {
            if (result.code === 'success') {
                _this.createFormEvent.emit('/' + _this._metadata.relativePath + '/' + _this._metadata.fileName); // 发送创建表单事件,参数为元数据路径
                _this.clickCloseModal();
            }
            else {
                alert(result.message);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], FormCreateWizardComponent.prototype, "createFormEvent", void 0);
    FormCreateWizardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'webide-form-create-wizard',
            template: __webpack_require__("./src/packages/form-create-wizard-package/views/form-create-wizard/form-create-wizard.component.html"),
            styles: [__webpack_require__("./src/packages/form-create-wizard-package/views/form-create-wizard/form-create-wizard.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_form_create_wizard_service__["FormCreateWizardService"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_form_create_wizard_service__["FormCreateWizardService"]])
    ], FormCreateWizardComponent);
    return FormCreateWizardComponent;
}());



/***/ }),

/***/ "./src/packages/form-create-wizard-package/views/form-template-select/form-template-select.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host .div-fill {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n}\r\n\r\n.selectTpl {\r\n    padding: 10px 15px;\r\n    font-size: 0.875rem;\r\n    color: #333333;\r\n    line-height: 2rem;\r\n    height: 100%;\r\n    overflow: auto;\r\n}\r\n\r\n.selectTpl .tmpList {\r\n    overflow: auto;\r\n}\r\n\r\n.selectTpl .tmpList .media.active {\r\n    background: #d9d9d9;\r\n}\r\n\r\n.selectTpl .tmpList img {\r\n    max-width: 100px;\r\n}\r\n \r\n.fa-search {\r\n    position: absolute;\r\n    right: 8px;\r\n    top: 43px;\r\n    color: grey;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/form-create-wizard-package/views/form-template-select/form-template-select.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex div-fill selectTpl\">\r\n  <div class=\"w-50 d-flex flex-column\">\r\n    <div class=\"searchPanel mb-2 d-flex position-relative\">\r\n      <div class=\"w-50 pr-2\">\r\n        <div>分类</div>\r\n        <kendo-dropdownlist class='w-100' [data]=\"tplCategories\" textField=\"value\" valueField=\"key\" [valuePrimitive]=\"true\" [(ngModel)]=\"data.selectedTplCategory\" (ngModelChange)=\"changeTplCategory()\">\r\n        </kendo-dropdownlist>\r\n\r\n      </div>\r\n      <div class=\"w-50\">\r\n        <div>搜索</div>\r\n        <input kendoTextBox class='w-100 pr-3' [(ngModel)]=\"searchName\" (keyup)=\"searchTemplate()\"/>\r\n        <i class=\"fa fa-search\"></i>\r\n      </div>\r\n    </div>\r\n    <div class=\"tmpList div-fill\">\r\n      <perfect-scrollbar [config]=\"{suppressScrollX: true}\">\r\n        <div class=\"media p-2\" *ngFor=\"let template of tplList\" [class.active]=\"data.selectedTpl.templateID===template.templateID\"\r\n          (click)=\"changeSelectTpl(template)\">\r\n          <img class=\"mr-3 border\" [src]=\"template.templatePic\" alt=\"\">\r\n          <div class=\"media-body\">\r\n            <div class=\"ml-0\">{{template.templateID}}</div>\r\n            <div class=\"ml-0\">{{template.templateName}}</div>\r\n          </div>\r\n        </div>\r\n      </perfect-scrollbar>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"w-50 pl-2 h-100 rightDetail\" *ngIf=\"data.selectedTpl\">\r\n    <perfect-scrollbar [config]=\"{suppressScrollX: true}\">\r\n      <img class=\"w-100 border mb-2\" [src]=\"data.selectedTpl.templatePic\" />\r\n      <div>模板描述： {{data.selectedTpl.templateDescription}}</div>\r\n    </perfect-scrollbar>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/packages/form-create-wizard-package/views/form-template-select/form-template-select.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormTemplateSelectComponent", function() { return FormTemplateSelectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_form_create_wizard_service__ = __webpack_require__("./src/packages/form-create-wizard-package/services/form-create-wizard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormTemplateSelectComponent = (function () {
    function FormTemplateSelectComponent(formCreateService) {
        this.formCreateService = formCreateService;
        this.tplCategories = []; // 模板分类
        this.tplList = []; // 表单模板列表
        this.searchName = '';
    }
    FormTemplateSelectComponent.prototype.ngOnInit = function () {
        this.tplCategories = this.formCreateService.queryTemplateCatetory();
        this.data.selectedTplCategory = this.tplCategories[0].key;
        this.searchTemplate();
    };
    FormTemplateSelectComponent.prototype.changeSelectTpl = function (template) {
        this.data.selectedTpl = template;
    };
    FormTemplateSelectComponent.prototype.searchTemplate = function () {
        var _this = this;
        this.formCreateService.getTemplateList(this.data.selectedTplCategory, this.searchName).subscribe(function (data) {
            _this.tplList = data || [];
            if (!_this.data.selectedTpl) {
                _this.data.selectedTpl = _this.tplList.length > 0 ? _this.tplList[0] : '';
            }
        });
    };
    FormTemplateSelectComponent.prototype.changeTplCategory = function () {
        this.searchTemplate();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FormTemplateSelectComponent.prototype, "data", void 0);
    FormTemplateSelectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-form-template-select',
            template: __webpack_require__("./src/packages/form-create-wizard-package/views/form-template-select/form-template-select.component.html"),
            styles: [__webpack_require__("./src/packages/form-create-wizard-package/views/form-template-select/form-template-select.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_form_create_wizard_service__["FormCreateWizardService"]])
    ], FormTemplateSelectComponent);
    return FormTemplateSelectComponent;
}());



/***/ }),

/***/ "./src/packages/form-create-wizard-package/views/select-be-actions/select-be-actions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/form-create-wizard-package/views/select-be-actions/select-be-actions.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"selectBeActions p-3\">\r\n  <div class=\"mb-2\">请选择功能需要的动作</div>\r\n  <kendo-grid [data]=\"actionList\" [height]=\"330\">\r\n    <!-- <kendo-grid-checkbox-column [width]=\"100\"></kendo-grid-checkbox-column> -->\r\n    <kendo-grid-column width=\"100\">\r\n      <ng-template kendoGridCellTemplate let-dataItem>\r\n        <div *ngIf=\"presetActionList.indexOf(dataItem.ID)>=0\">\r\n          <input type=\"checkbox\" [id]=\"dataItem.ID\" class=\"k-checkbox\" checked=\"checked\" disabled>\r\n          <label class=\"k-checkbox-label\" [for]=\"dataItem.ID\"> </label>\r\n        </div>\r\n        <div *ngIf=\"presetActionList.indexOf(dataItem.ID) < 0\">\r\n          <input type=\"checkbox\" [id]=\"dataItem.ID\" class=\"k-checkbox\" [checked]=\"selectedIdList.indexOf(dataItem.ID)>=0\" (click)=\"changeCheckbox(dataItem.ID)\">\r\n          <label class=\"k-checkbox-label\" [for]=\"dataItem.ID\"> </label>\r\n        </div>\r\n      </ng-template>\r\n    </kendo-grid-column>\r\n    <kendo-grid-column field=\"Code\" title=\"编号\" [width]=\"300\"></kendo-grid-column>\r\n    <kendo-grid-column field=\"Name\" title=\"名称\"></kendo-grid-column>\r\n    <kendo-grid-column field=\"Description\" title=\"描述\"></kendo-grid-column>\r\n  </kendo-grid>\r\n\r\n</div>"

/***/ }),

/***/ "./src/packages/form-create-wizard-package/views/select-be-actions/select-be-actions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectBeActionsComponent", function() { return SelectBeActionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_form_create_wizard_service__ = __webpack_require__("./src/packages/form-create-wizard-package/services/form-create-wizard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SelectBeActionsComponent = (function () {
    function SelectBeActionsComponent(formCreateService) {
        var _this = this;
        this.formCreateService = formCreateService;
        this.actionList = [];
        this.selectedIdList = [];
        // 预置的默认动作
        // private deleteMgrActionId = '9sEsnADPFkCRK6ZBC0OwiA';
        // private modifyMgrActionId = '8Wna6KaBQEOHpRJfmGMBYQ';
        // private queryMgrActionId = 'm_6xIwJwoUy7qzsuZ6_S5A';
        // private retrieveDefaultMgrActionId = 'Tji_dbrLtEKQlOLRpOJj9Q';
        // private retrieveMgrActionId = 'fQbpcO7bIEGoRdTZZIyrag';
        this.presetActionList = ['9sEsnADPFkCRK6ZBC0OwiA', '8Wna6KaBQEOHpRJfmGMBYQ', 'm_6xIwJwoUy7qzsuZ6_S5A',
            'Tji_dbrLtEKQlOLRpOJj9Q', 'fQbpcO7bIEGoRdTZZIyrag'];
        this.selectableSettings = {
            checkboxOnly: true,
            mode: 'multiple'
        };
        this.clickNextStep = function () {
            var subject = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Subject"]();
            // this.data.selectedBeActions = filter(self.actionList, function (o) {
            //   return findIndex(self.selectedIdList, function (id) { return id === o.ID; }) >= 0;
            // });
            // 选中的BE元数据字段和动作 映射为VM
            _this.data.selectedBeMetadata = Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["cloneDeep"])(_this.data.beMetadata);
            _this.formCreateService.parseBeFields2VM(_this.data.selectedBeMetadata, _this.data.selectedBeFields, _this.data.selectedBeActions).subscribe(function (result) {
                if (result) {
                    _this.data.dgViewModel = _this.formCreateService.parseViewModel(result);
                    console.log('生成的dgVM：', _this.data.dgViewModel);
                    subject.next(true);
                }
            });
            return subject;
        };
    }
    SelectBeActionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.data && this.data.beMetadata) {
            var beMetadata = this.data.beMetadata;
            var content = JSON.parse(beMetadata.metadata.content);
            this.actionList = content.BizMgrActions;
            if (this.data.selectedBeActions.length === 0) {
                this.selectedIdList = Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["cloneDeep"])(this.presetActionList);
            }
            else {
                this.data.selectedBeActions.forEach(function (action) {
                    _this.selectedIdList.push(action.ID);
                });
            }
        }
    };
    SelectBeActionsComponent.prototype.changeCheckbox = function (ID) {
        var index = this.selectedIdList.indexOf(ID);
        if (index >= 0) {
            this.selectedIdList.splice(index, 1);
        }
        else {
            this.selectedIdList.push(ID);
        }
        var self = this;
        this.data.selectedBeActions = Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["filter"])(self.actionList, function (o) {
            return Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["findIndex"])(self.selectedIdList, function (id) { return id === o.ID; }) >= 0;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SelectBeActionsComponent.prototype, "data", void 0);
    SelectBeActionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-select-be-actions',
            template: __webpack_require__("./src/packages/form-create-wizard-package/views/select-be-actions/select-be-actions.component.html"),
            styles: [__webpack_require__("./src/packages/form-create-wizard-package/views/select-be-actions/select-be-actions.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_form_create_wizard_service__["FormCreateWizardService"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_form_create_wizard_service__["FormCreateWizardService"]])
    ], SelectBeActionsComponent);
    return SelectBeActionsComponent;
}());



/***/ }),

/***/ "./src/packages/form-create-wizard-package/views/select-be-fields/select-be-fields.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".selectBeFields {\r\n    overflow: hidden;\r\n}\r\n\r\n.selectBeFields .fa-search {\r\n    position: absolute;\r\n    right: 20px;\r\n    top: 8px;\r\n    font-size: 15px;\r\n}\r\n\r\n/* .selectBeFields .keyDescription {\r\n    color: #a09e9e\r\n} */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/form-create-wizard-package/views/select-be-fields/select-be-fields.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"selectBeFields p-3 d-flex flex-column h-100\">\r\n    <div class=\"mb-2\">请选择功能需要的字段</div>\r\n    <div class=\"d-flex\">\r\n        <div class=\"treeView mr-2 smallKendoTree\">\r\n            <!-- <perfect-scrollbar> -->\r\n            <kendo-treeview [nodes]=\"treeData\" kendoTreeViewExpandable [expandedKeys]=\"expandedKeys\" [children]=\"children\"\r\n                [hasChildren]=\"hasChildren\" kendoTreeViewSelectable [selectedKeys]=\"selectedTreeKeys\" [selectBy]=\"'Code'\"\r\n                (selectionChange)=\"handleTreeSelection($event)\">\r\n                <ng-template kendoTreeViewNodeTemplate let-dataItem>\r\n                    <span class=\"px-2\">{{dataItem.Name}}</span>\r\n                </ng-template>\r\n            </kendo-treeview>\r\n            <!-- </perfect-scrollbar> -->\r\n        </div>\r\n        <div>\r\n            <!-- <kendo-grid [data]=\"gridData[selectedTreeKey]\" [selectable]=\"selectableSettings\" [height]=\"380\"\r\n                [kendoGridSelectBy]=\"'ID'\" [selectedKeys]=\"grid_selected[selectedTreeKey]\">\r\n                <kendo-grid-checkbox-column [width]=\"80\" showSelectAll=\"true\" title=\"显示\"></kendo-grid-checkbox-column>\r\n                <kendo-grid-column field=\"Code\" title=\"字段编号\"></kendo-grid-column>\r\n                <kendo-grid-column field=\"LabelID\" title=\"lableID\"></kendo-grid-column>\r\n                <kendo-grid-column field=\"Name\" title=\"字段名称\"></kendo-grid-column>\r\n                <kendo-grid-column field=\"MDataType\" title=\"字段类型\"></kendo-grid-column>\r\n            </kendo-grid> -->\r\n            <kendo-grid [data]=\"gridData[selectedTreeKey]\" [height]=\"340\">\r\n                <kendo-grid-column width=\"100\" title=\"选择\">\r\n                    <ng-template kendoGridCellTemplate let-dataItem>\r\n                        <div *ngIf=\"readonlyFields.indexOf(dataItem.ID)>=0\">\r\n                            <input type=\"checkbox\" [id]=\"dataItem.ID\" class=\"k-checkbox\" checked=\"checked\" disabled>\r\n                            <label class=\"k-checkbox-label\" [for]=\"dataItem.ID\"> </label>\r\n                        </div>\r\n                        <div *ngIf=\"readonlyFields.indexOf(dataItem.ID)<0\">\r\n                            <input type=\"checkbox\" [id]=\"dataItem.ID\" class=\"k-checkbox\" [checked]=\"grid_selected[selectedTreeKey].indexOf(dataItem.ID)>=0\"\r\n                                (click)=\"changeCheckbox(dataItem.ID)\">\r\n                            <label class=\"k-checkbox-label\" [for]=\"dataItem.ID\"> </label>\r\n                        </div>\r\n                    </ng-template>\r\n                </kendo-grid-column>\r\n                <kendo-grid-column field=\"Code\" title=\"字段编号\"></kendo-grid-column>\r\n                <kendo-grid-column field=\"LabelID\" title=\"lableID\"></kendo-grid-column>\r\n                <kendo-grid-column field=\"Name\" title=\"字段名称\"></kendo-grid-column>\r\n                <kendo-grid-column field=\"MDataType\" title=\"字段类型\"></kendo-grid-column>\r\n            </kendo-grid>\r\n        </div>\r\n\r\n    </div>"

/***/ }),

/***/ "./src/packages/form-create-wizard-package/views/select-be-fields/select-be-fields.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectBeFieldsComponent", function() { return SelectBeFieldsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_form_create_wizard_service__ = __webpack_require__("./src/packages/form-create-wizard-package/services/form-create-wizard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};



var SelectBeFieldsComponent = (function () {
    function SelectBeFieldsComponent(formCreateService) {
        var _this = this;
        this.formCreateService = formCreateService;
        this.checkedKeys = [];
        this.treeData = [];
        this.gridData = [];
        this.selectedTreeKeys = [];
        this.selectedTreeKey = '';
        this.grid_selected = {};
        this.treeTables = [];
        this.readonlyFields = []; // 不可取消勾选的字段
        this.expandedKeys = ['0'];
        this.selectableSettings = {
            checkboxOnly: true,
            mode: 'multiple'
        };
        this.children = function (dataItem) { return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])(dataItem.Children); };
        this.hasChildren = function (dataItem) { return !!dataItem.Children; };
        /**
         * 点击下一步前汇总数据
         */
        this.clickNextStep = function () {
            var isSelected = false;
            Object.keys(_this.grid_selected).forEach(function (tableCode) {
                if (_this.grid_selected[tableCode].length > 0) {
                    isSelected = true;
                    return;
                }
            });
            if (!isSelected) {
                alert('请选择字段');
                return false;
            }
            _this.data.selectedBeFields = _this.grid_selected;
            return true;
        };
    }
    Object.defineProperty(SelectBeFieldsComponent.prototype, "checkableSettings", {
        get: function () {
            return {
                checkChildren: true,
                checkParents: true,
                enabled: true,
                mode: 'multiple'
            };
        },
        enumerable: true,
        configurable: true
    });
    SelectBeFieldsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var beMetadata = this.data.beMetadata;
        if (!beMetadata) {
            return;
        }
        this.grid_selected = this.data.selectedBeFields;
        var mainObject = this.formCreateService.getBeMainObject(beMetadata);
        this.treeData = this.getTablesTree(mainObject);
        this.selectedTreeKey = this.treeData[0].Code;
        this.selectedTreeKeys = [this.selectedTreeKey];
        // 筛除不在当前mainObject的grid_selected
        Object.keys(this.grid_selected).forEach(function (tableCode) {
            if (_this.treeTables.indexOf(tableCode) < 0) {
                delete _this.grid_selected[tableCode];
            }
        });
    };
    /**
     * 组装左侧树
     */
    SelectBeFieldsComponent.prototype.getTablesTree = function (mainObject) {
        var _this = this;
        var ContainChildObjects = mainObject.ContainChildObjects, ColumnGenerateID = mainObject.ColumnGenerateID, Keys = mainObject.Keys, parentTable = __rest(mainObject, ["ContainChildObjects", "ColumnGenerateID", "Keys"]);
        this.treeTables.push(parentTable.Code);
        this.gridData[parentTable.Code] = this.getGridFields(parentTable.ContainElements);
        if (!this.grid_selected[parentTable.Code]) {
            this.grid_selected[parentTable.Code] = [];
            // 默认选中所有字段
            this.gridData[parentTable.Code].forEach(function (element) {
                _this.grid_selected[parentTable.Code].push(element.ID);
            });
        }
        if (ContainChildObjects && ContainChildObjects.length > 0) {
            parentTable['Children'] = [];
            ContainChildObjects.forEach(function (child) {
                var childTree = _this.getTablesTree(child);
                parentTable['Children'] = parentTable['Children'].concat(childTree);
            });
        }
        // 判断主键
        if (ColumnGenerateID) {
            this.readonlyFields.push(ColumnGenerateID.ElementID);
        }
        // 判断主从表的关联字段
        if (Keys && Keys.length > 0) {
            Keys.forEach(function (key) {
                _this.readonlyFields.push(key.SourceElement);
            });
        }
        return [parentTable];
    };
    /**
     * 获取各表字段
     * @param fields
     */
    SelectBeFieldsComponent.prototype.getGridFields = function (fields) {
        var gridData = [];
        if (fields && fields.length > 0) {
            fields.forEach(function (field) {
                var ChildAssociations = field.ChildAssociations, fieldObject = __rest(field, ["ChildAssociations"]);
                gridData.push(fieldObject);
                if (ChildAssociations && ChildAssociations.length > 0) {
                    ChildAssociations.forEach(function (child) {
                        gridData = gridData.concat(child.RefElementCollection);
                    });
                }
            });
        }
        return gridData;
    };
    SelectBeFieldsComponent.prototype.handleTreeSelection = function (event) {
        var curCode = event.dataItem.Code;
        this.selectedTreeKeys = [curCode];
        this.selectedTreeKey = curCode;
    };
    SelectBeFieldsComponent.prototype.changeCheckbox = function (ID) {
        var index = this.grid_selected[this.selectedTreeKey].indexOf(ID);
        if (index >= 0) {
            this.grid_selected[this.selectedTreeKey].splice(index, 1);
        }
        else {
            this.grid_selected[this.selectedTreeKey].push(ID);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SelectBeFieldsComponent.prototype, "data", void 0);
    SelectBeFieldsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-select-be-fields',
            template: __webpack_require__("./src/packages/form-create-wizard-package/views/select-be-fields/select-be-fields.component.html"),
            styles: [__webpack_require__("./src/packages/form-create-wizard-package/views/select-be-fields/select-be-fields.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_form_create_wizard_service__["FormCreateWizardService"]])
    ], SelectBeFieldsComponent);
    return SelectBeFieldsComponent;
}());



/***/ }),

/***/ "./src/packages/form-create-wizard-package/views/select-show-fields/select-show-fields.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/form-create-wizard-package/views/select-show-fields/select-show-fields.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"selectShowFields p-3\">\r\n  <div class=\"mb-2\" *ngIf=\"selectedTpl && selectedTpl.category==='card'\">请选择卡片模板需要显示的字段</div>\r\n  <div class=\"mb-2\" *ngIf=\"selectedTpl && selectedTpl.category==='list'\">请选择列表模板需要显示的字段</div>\r\n  <div class=\"mb-2\" *ngIf=\"selectedTpl && selectedTpl.category==='listcard'\">请选择列表-卡片模板需要显示的字段</div>\r\n  <div class=\"d-flex\">\r\n    <div class=\"treeView mr-2 smallKendoTree\" *ngIf=\"selectedTpl && selectedTpl.category==='card'\">\r\n      <perfect-scrollbar>\r\n        <kendo-treeview [nodes]=\"treeData\" kendoTreeViewExpandable [expandedKeys]=\"expandedKeys\" [children]=\"children\" [hasChildren]=\"hasChildren\"\r\n          kendoTreeViewSelectable [selectedKeys]=\"selectedTreeKeys\" [selectBy]=\"'code'\" (selectionChange)=\"handleTreeSelection($event)\">\r\n          <ng-template kendoTreeViewNodeTemplate let-dataItem>\r\n            <span class=\"px-2\">{{dataItem.name}}</span>\r\n          </ng-template>\r\n        </kendo-treeview>\r\n      </perfect-scrollbar>\r\n    </div>\r\n    <div *ngIf=\"selectedTpl && selectedTpl.category ==='card'\">\r\n      <kendo-grid [data]=\"cardGridData[selectedTreeKey]\" [selectable]=\"selectableSettings\" [height]=\"330\" [kendoGridSelectBy]=\"'labelID'\" [selectedKeys]=\"card_selected[selectedTreeKey]\">\r\n        <kendo-grid-checkbox-column [width]=\"80\" showSelectAll=\"true\" title=\"显示\"></kendo-grid-checkbox-column>\r\n        <kendo-grid-column field=\"code\" title=\"字段编号\"></kendo-grid-column>\r\n        <kendo-grid-column field=\"labelID\" title=\"lableID\"></kendo-grid-column>\r\n        <kendo-grid-column field=\"name\" title=\"字段名称\"></kendo-grid-column>\r\n        <kendo-grid-column field=\"dataType\" title=\"字段类型\"></kendo-grid-column>\r\n      </kendo-grid>\r\n    </div>\r\n\r\n    <div *ngIf=\"selectedTpl && selectedTpl.category ==='list'\">\r\n      <kendo-grid [data]=\"gridData\" [selectable]=\"selectableSettings\" [height]=\"330\" [kendoGridSelectBy]=\"'labelID'\" [selectedKeys]=\"list_selected\">\r\n        <kendo-grid-checkbox-column [width]=\"80\" showSelectAll=\"true\" title=\"显示\"></kendo-grid-checkbox-column>\r\n        <kendo-grid-column field=\"code\" title=\"字段编号\"></kendo-grid-column>\r\n        <kendo-grid-column field=\"labelID\" title=\"lableID\"></kendo-grid-column>\r\n        <kendo-grid-column field=\"name\" title=\"字段名称\"></kendo-grid-column>\r\n        <kendo-grid-column field=\"dataType\" title=\"字段类型\"></kendo-grid-column>\r\n      </kendo-grid>\r\n    </div>\r\n\r\n    <div *ngIf=\"selectedTpl && selectedTpl.category ==='listcard'\">\r\n      <kendo-grid [data]=\"gridData\" [height]=\"330\">\r\n        <kendo-grid-column title=\"显示在列表中\" [width]=\"120\">\r\n          <ng-template kendoGridCellTemplate let-dataItem>\r\n            <input type=\"checkbox\" class=\"k-checkbox\" [id]=\"dataItem.id+'_list'\" [(ngModel)]=\"listcard_selected.showFieldsInGrid[dataItem.labelID]\" />\r\n            <label class=\"k-checkbox-label\" [for]=\"dataItem.id+'_list'\"> </label>\r\n          </ng-template>\r\n        </kendo-grid-column>\r\n        <kendo-grid-column title=\"显示在编辑区\" [width]=\"120\">\r\n          <ng-template kendoGridCellTemplate let-dataItem>\r\n            <input type=\"checkbox\" class=\"k-checkbox\" [id]=\"dataItem.id+'_card'\" [(ngModel)]=\"listcard_selected.showFieldsInCard[dataItem.labelID]\" />\r\n            <label class=\"k-checkbox-label\" [for]=\"dataItem.id+'_card'\"> </label>\r\n          </ng-template>\r\n        </kendo-grid-column>\r\n        <kendo-grid-column field=\"code\" title=\"字段编号\"></kendo-grid-column>\r\n        <kendo-grid-column field=\"labelID\" title=\"lableID\"></kendo-grid-column>\r\n        <kendo-grid-column field=\"name\" title=\"字段名称\"></kendo-grid-column>\r\n        <kendo-grid-column field=\"dataType\" title=\"字段类型\"></kendo-grid-column>\r\n      </kendo-grid>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/packages/form-create-wizard-package/views/select-show-fields/select-show-fields.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectShowFieldsComponent", function() { return SelectShowFieldsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_form_create_wizard_service__ = __webpack_require__("./src/packages/form-create-wizard-package/services/form-create-wizard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};




var SelectShowFieldsComponent = (function () {
    function SelectShowFieldsComponent(formCreateService) {
        var _this = this;
        this.formCreateService = formCreateService;
        this.treeData = []; // 左树
        this.expandedKeys = ['0'];
        this.selectedTreeKeys = [];
        this.selectedTreeKey = '';
        this.fieldsMap = {};
        this.cardGridData = {};
        this.gridData = [];
        this.card_selected = {}; // 卡片模型 选中的字段
        this.list_selected = []; // 列表模型 选中的字段
        this.listcard_selected = {
            showFieldsInGrid: {},
            showFieldsInCard: {}
        };
        this.mainTable = ''; // 记录主表code
        this.selectableSettings = {
            checkboxOnly: true,
            mode: 'multiple'
        };
        this.children = function (dataItem) { return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["of"])(dataItem.Children); };
        this.hasChildren = function (dataItem) { return !!dataItem.Children; };
        this.clickNextStep = function () {
            if (_this.selectedTpl.category === 'card') {
                return _this.addFields2CardTpl();
            }
            else if (_this.selectedTpl.category === 'list') {
                if (_this.list_selected.length === 0) {
                    alert('请选择字段');
                    return false;
                }
                return _this.addFields2ListTpl();
            }
            else if (_this.selectedTpl.category === 'listcard') {
                return _this.addFields2ListCardTpl();
            }
        };
    }
    SelectShowFieldsComponent.prototype.ngOnInit = function () {
        this.selectedTpl = this.data.templateInfo.selectedTpl;
        var dgViewModel = this.data.dataModel.dgViewModel;
        this.card_selected = this.data.showFields.card_selected;
        this.list_selected = this.data.showFields.list_selected;
        this.listcard_selected = this.data.showFields.listcard_selected;
        if (this.selectedTpl.category === 'card') {
            // 卡片模板 ： 选主从表字段，左树右列表
            if (!dgViewModel) {
                return;
            }
            this.treeData = this.getTablesTree(dgViewModel);
            var mainTableCode = this.treeData[0].code;
            this.mainTable = this.selectedTreeKey = mainTableCode;
            this.selectedTreeKeys.push(mainTableCode);
            this.checkCardFieldsInGrid();
        }
        else if (this.selectedTpl.category === 'list') {
            // 列表模板： 只选主表字段
            var mainFieldsObject = dgViewModel.fields;
            this.mainTable = dgViewModel.code;
            this.gridData = this.getGridFields(mainFieldsObject);
            this.list_selected = this.checkFieldsInGridData(this.list_selected, this.gridData);
        }
        else if (this.selectedTpl.category === 'listcard') {
            // 列卡模板： 只选主表字段
            var mainFieldsObject = dgViewModel.fields;
            this.mainTable = dgViewModel.code;
            this.gridData = this.getGridFields(mainFieldsObject);
            this.listcard_selected.showFieldsInGrid = this.checkObjectFieldsInGrid(this.listcard_selected.showFieldsInGrid, this.gridData);
            this.listcard_selected.showFieldsInCard = this.checkObjectFieldsInGrid(this.listcard_selected.showFieldsInCard, this.gridData);
        }
    };
    SelectShowFieldsComponent.prototype.getTablesTree = function (viewModel) {
        var _this = this;
        var children = viewModel.children, parentTable = __rest(viewModel, ["children"]);
        this.fieldsMap[parentTable.code] = parentTable;
        this.cardGridData[parentTable.code] = this.getGridFields(parentTable.fields);
        if (!this.card_selected[parentTable.code]) {
            this.card_selected[parentTable.code] = [];
            // 默认选中所有字段(ID类除外)
            this.cardGridData[parentTable.code].forEach(function (field) {
                if (!field.code.includes('ID')) {
                    _this.card_selected[parentTable.code].push(field.labelID);
                }
            });
        }
        if (children && Object.keys(children).length > 0) {
            parentTable['Children'] = [];
            Object.keys(children).forEach(function (child) {
                var childTree = _this.getTablesTree(children[child]);
                parentTable['Children'] = parentTable['Children'].concat(childTree);
            });
        }
        return [parentTable];
    };
    SelectShowFieldsComponent.prototype.getGridFields = function (fieldsObject) {
        var gridData = [];
        if (fieldsObject && Object.keys(fieldsObject).length > 0) {
            Object.keys(fieldsObject).forEach(function (fieldCode) {
                var _a = fieldsObject[fieldCode], refObject = _a.refObject, field = __rest(_a, ["refObject"]);
                gridData.push(field);
                if (refObject && refObject.fields && Object.keys(refObject.fields).length > 0) {
                    Object.keys(refObject.fields).forEach(function (refFieldCode) {
                        gridData.push(refObject.fields[refFieldCode]);
                    });
                }
            });
        }
        return gridData;
    };
    SelectShowFieldsComponent.prototype.handleTreeSelection = function (event) {
        var curCode = event.dataItem.code;
        this.selectedTreeKeys = [curCode];
        this.selectedTreeKey = curCode;
    };
    /**
     * 将字段添加到列表模型
     */
    SelectShowFieldsComponent.prototype.addFields2ListTpl = function () {
        var _this = this;
        var domJson = this.selectedTpl.domJson;
        if (!domJson) {
            return false;
        }
        // 获取dom中表格对象
        var contentContainer = domJson.module.components.length > 0 && domJson.module.components[0];
        var gridContainer = Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["find"])(contentContainer.contents, function (o) { return o.id === 'gridContainer'; });
        var dataGrid = gridContainer && gridContainer.contents.length > 0 && gridContainer.contents[0];
        // 插入表格字段
        dataGrid.fields = [];
        this.list_selected.forEach(function (labelID) {
            var selectedField = Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["find"])(_this.gridData, function (o) { return o.labelID === labelID; });
            if (!selectedField) {
                return;
            }
            var gridFieldMetadata = _this.formCreateService.getMetadataByType('GridField');
            gridFieldMetadata['id'] = 'grid_' + selectedField.labelID;
            gridFieldMetadata['dataField'] = selectedField.labelID;
            gridFieldMetadata['caption'] = selectedField.name;
            dataGrid.dataSource = _this.mainTable;
            dataGrid.id = 'dataGrid_' + _this.mainTable;
            dataGrid.fields.push(gridFieldMetadata);
        });
        return true;
    };
    /**
     * 将字段添加到卡片模型
     */
    SelectShowFieldsComponent.prototype.addFields2CardTpl = function () {
        var _this = this;
        var domJson = this.selectedTpl.domJson;
        if (!domJson) {
            return false;
        }
        // 获取dom中主表展示区和tab展示区
        var pageContainer = domJson.module.components.length > 0 && domJson.module.components[0];
        var mainContainer = Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["find"])(pageContainer.contents, function (o) { return o.id === 'mainContainer'; });
        var mainContents = mainContainer && mainContainer.contents;
        var tabContainer = Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["find"])(pageContainer.contents, function (o) { return o.id === 'childTab'; });
        mainContents.length = 0;
        tabContainer.contents = [];
        var headerContainer = Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["find"])(pageContainer.contents, function (o) { return o.id === 'pageHeader'; });
        if (headerContainer) {
            headerContainer.contents[0].title = this.data.basicInfo.name;
        }
        var tableCodes = Object.keys(this.card_selected);
        if (!tableCodes || tableCodes.length === 0) {
            return true;
        }
        tableCodes.forEach(function (tableCode) {
            var selectedFieldLables = _this.card_selected[tableCode];
            if (!selectedFieldLables || selectedFieldLables.length === 0) {
                return;
            }
            if (tableCode === _this.mainTable && selectedFieldLables && selectedFieldLables.length > 0) {
                // 主表插入展示区域
                selectedFieldLables.forEach(function (labelID) {
                    var selectedField = Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["find"])(_this.cardGridData[tableCode], function (o) { return o.labelID === labelID; });
                    if (!selectedField) {
                        return;
                    }
                    var fieldMetadata = _this.formCreateService.getMetadataByType(selectedField.dataType);
                    if (fieldMetadata) {
                        fieldMetadata['id'] = 'card_' + selectedField.labelID;
                        fieldMetadata['title'] = selectedField.name;
                        fieldMetadata['appearance'] = { class: 'col-md-4' };
                        mainContents.push(fieldMetadata);
                    }
                });
            }
            else {
                // 从表插入tab区域（目前只支持主从结构，主从从结构都展示在tab页上）
                var tabPage = _this.formCreateService.getMetadataByType('tabPage');
                if (tabPage) {
                    tabPage['id'] = 'tabPage_' + tableCode;
                    tabPage['title'] = _this.fieldsMap[tableCode].name;
                    var dataGrid_1 = _this.formCreateService.getMetadataByType('DataGrid');
                    selectedFieldLables.forEach(function (labelID) {
                        var selectedField = Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["find"])(_this.cardGridData[tableCode], function (o) { return o.labelID === labelID; });
                        if (!selectedField) {
                            return;
                        }
                        var gridFieldMetadata = _this.formCreateService.getMetadataByType('GridField');
                        if (gridFieldMetadata) {
                            gridFieldMetadata['id'] = 'gridField_' + selectedField.labelID;
                            gridFieldMetadata['dataField'] = selectedField.labelID;
                            gridFieldMetadata['caption'] = selectedField.name;
                            dataGrid_1['fields'].push(gridFieldMetadata);
                        }
                    });
                    dataGrid_1['id'] = 'dataGrid_' + tableCode;
                    dataGrid_1['appearance'] = { class: 'my-2' };
                    dataGrid_1['dataSource'] = _this.mainTable + '.' + tableCode;
                    tabPage['contents'].push(dataGrid_1);
                    if (tabPage['contents'].length > 0) {
                        tabContainer.contents.push(tabPage);
                    }
                }
            }
        });
        return true;
    };
    /**
     * 将字段添加到列表-卡片模型
     */
    SelectShowFieldsComponent.prototype.addFields2ListCardTpl = function () {
        var _this = this;
        var domJson = this.selectedTpl.domJson;
        if (!domJson) {
            return false;
        }
        // 获取dom中表格对象
        var pageContainer = domJson.module.components.length > 0 && domJson.module.components[0];
        var gridCardContainer = Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["find"])(pageContainer.contents, function (o) { return o.id === 'gridCardContainer'; });
        var dataGrid = gridCardContainer && gridCardContainer.contents.length > 0 && gridCardContainer.contents[0];
        // 插入表格字段
        dataGrid.fields = [];
        var showFieldsInGrid = this.listcard_selected.showFieldsInGrid;
        Object.keys(showFieldsInGrid).forEach(function (labelID) {
            if (!showFieldsInGrid[labelID]) {
                return;
            }
            var selectedField = Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["find"])(_this.gridData, function (o) { return o.labelID === labelID; });
            if (!selectedField) {
                return;
            }
            var gridFieldMetadata = _this.formCreateService.getMetadataByType('GridField');
            if (gridFieldMetadata) {
                gridFieldMetadata['id'] = 'gridField_' + selectedField.labelID;
                gridFieldMetadata['dataField'] = selectedField.labelID;
                gridFieldMetadata['caption'] = selectedField.name;
                dataGrid.id = 'dataGrid_' + _this.mainTable;
                dataGrid.fields.push(gridFieldMetadata);
                dataGrid.dataSource = _this.mainTable;
            }
        });
        // 插入右侧卡片字段
        var showFieldsInCard = this.listcard_selected.showFieldsInCard;
        var cardPanel = gridCardContainer && gridCardContainer.contents.length > 0 && gridCardContainer.contents[1];
        cardPanel.contents = [];
        Object.keys(showFieldsInCard).forEach(function (labelID) {
            if (!showFieldsInCard[labelID]) {
                return;
            }
            var selectedField = Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["find"])(_this.gridData, function (o) { return o.labelID === labelID; });
            if (!selectedField) {
                return;
            }
            var fieldMetadata = _this.formCreateService.getMetadataByType(selectedField.dataType);
            if (fieldMetadata) {
                fieldMetadata['id'] = 'card_' + selectedField.labelID;
                fieldMetadata['title'] = selectedField.name;
                cardPanel.contents.push(fieldMetadata);
            }
        });
        return true;
    };
    /**
     * 判断选中的字段是否还在当前列表中(卡片模板)
     */
    SelectShowFieldsComponent.prototype.checkCardFieldsInGrid = function () {
        var _this = this;
        if (!this.card_selected || Object.keys(this.card_selected).length === 0) {
            return {};
        }
        Object.keys(this.card_selected).forEach(function (tableCode) {
            var curFieldList = _this.cardGridData[tableCode];
            if (!curFieldList) {
                delete _this.card_selected[tableCode];
            }
            else {
                var curFieldCodeList_1 = [];
                curFieldList.forEach(function (field) {
                    curFieldCodeList_1.push(field.labelID);
                });
                _this.card_selected[tableCode] = Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["filter"])(_this.card_selected[tableCode], function (o) { return curFieldCodeList_1.indexOf(o) >= 0; });
            }
        });
    };
    /**
     * 判断选中的字段是否还在当前列表中(列表模板)
     */
    SelectShowFieldsComponent.prototype.checkFieldsInGridData = function (selected, gridData) {
        if (!selected) {
            return [];
        }
        var _loop_1 = function (i) {
            var labelID = selected[i];
            var index = Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["findIndex"])(gridData, function (o) { return o.labelID === labelID; });
            if (index < 0) {
                selected.splice(i, 1);
                i--;
            }
            out_i_1 = i;
        };
        var out_i_1;
        for (var i = 0; i < selected.length; i++) {
            _loop_1(i);
            i = out_i_1;
        }
        return selected;
    };
    /**
     * 判断选中的字段是否还在当前列表中(列卡模板)
     */
    SelectShowFieldsComponent.prototype.checkObjectFieldsInGrid = function (selected, gridData) {
        if (!selected) {
            return {};
        }
        var labelList = Object.keys(selected);
        var _loop_2 = function (i) {
            var labelID = labelList[i];
            var labelIndex = Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["findIndex"])(gridData, function (o) { return o.labelID === labelID; });
            if (labelIndex < 0) {
                selected[labelID] = false;
            }
        };
        for (var i = 0; i < labelList.length; i++) {
            _loop_2(i);
        }
        return selected;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SelectShowFieldsComponent.prototype, "data", void 0);
    SelectShowFieldsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-select-show-fields',
            template: __webpack_require__("./src/packages/form-create-wizard-package/views/select-show-fields/select-show-fields.component.html"),
            styles: [__webpack_require__("./src/packages/form-create-wizard-package/views/select-show-fields/select-show-fields.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_form_create_wizard_service__["FormCreateWizardService"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_form_create_wizard_service__["FormCreateWizardService"]])
    ], SelectShowFieldsComponent);
    return SelectShowFieldsComponent;
}());



/***/ }),

/***/ "./src/packages/form-create-wizard-package/views/wizard/wizard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n\r\n.stepWizard {\r\n    height: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n}\r\n\r\n.stepWizard .createNav {\r\n    background: #e8edf2;\r\n    height: 40px;\r\n    overflow: hidden;\r\n}\r\n\r\n.stepWizard .createNav .stepTitle {\r\n    padding: 0px 10px;\r\n    color: #666666;\r\n    line-height: 40px;\r\n    cursor: pointer;\r\n    font-size: 0.875rem;\r\n}\r\n\r\n.stepWizard .createNav .step.active .stepTitle {\r\n    color: #FFFFFF;\r\n    background-color: #346180 !important;\r\n}\r\n\r\n.stepWizard .createNav .step:not(:first-child).active .stepTitle {\r\n    margin-left: -17px;\r\n    padding-left: 25px;\r\n}\r\n\r\n.stepWizard .createNav .stepTitle.disable {\r\n    color: #cdcdcf;\r\n}\r\n\r\n.stepWizard .createNav .step .triangle_border_right {\r\n    width: 0;\r\n    height: 0;\r\n    border-width: 20px 0 20px 18px;\r\n    border-style: solid;\r\n    border-color: transparent transparent transparent #cccccc;\r\n    position: relative;\r\n}\r\n\r\n.stepWizard .createNav .step .triangle_border_right span {\r\n    display: block;\r\n    width: 0;\r\n    height: 0;\r\n    border-width: 20px 0px 20px 18px;\r\n    border-style: solid;\r\n    border-color: transparent transparent transparent #e8edf2;\r\n    position: absolute;\r\n    top: -20px;\r\n    left: -20px;\r\n}\r\n\r\n.stepWizard .createNav .step.active .triangle_border_right {\r\n    width: 0;\r\n    height: 0;\r\n    border-width: 20px 0 20px 20px;\r\n    border-color: transparent transparent transparent #e8edf2;\r\n}\r\n\r\n.stepWizard .createNav .step.active .triangle_border_right span {\r\n    border-width: 20px 0 20px 20px;\r\n    border-color: transparent transparent transparent #346180 !important;\r\n}\r\n\r\n.stepWizard .content {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n    overflow: auto;\r\n    font-size: 0.875rem;\r\n}\r\n\r\n.stepWizard .content .ps-content {\r\n    width: inherit;\r\n    height: inherit;\r\n}\r\n\r\n.stepWizard .footBtns {\r\n    width: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    -webkit-box-pack: end;\r\n    -ms-flex-pack: end;\r\n    justify-content: flex-end;\r\n    padding: 10px 1rem;\r\n    background: #F4F4F4;\r\n    border-top: 1px solid #dddddd;\r\n}\r\n\r\n/* .stepWizard .createNav .step.finished .stepTitle {\r\n    color: #FFFFFF;\r\n    background-color: #397439;\r\n}\r\n\r\n.stepWizard .createNav .step.finished .triangle_border_right span {\r\n    border-color: transparent transparent transparent #397439;\r\n}\r\n\r\n.stepWizard .createNav .step:not(:first-child).finished .stepTitle {\r\n    margin-left: -17px;\r\n    padding-left: 25px;\r\n} */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/form-create-wizard-package/views/wizard/wizard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"stepWizard\">\r\n  <div class=\"createNav d-flex flex-wrap\" *ngIf=\"steps.length>2\">\r\n    <div *ngFor=\"let step of steps\" class=\"d-flex step\" [class.active]=\"curStep.stepId===step.stepId\">\r\n      <div class=\"d-flex\" *ngIf=\"step.show\" (click)=\"jumpStep(step)\">\r\n        <div class=\"stepTitle\">{{step.title}}</div>\r\n        <div class=\"triangle_border_right\">\r\n          <span></span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"content\">\r\n    <perfect-scrollbar [config]=\"{suppressScrollX: true}\">\r\n      <ng-container #stepContainer></ng-container>\r\n    </perfect-scrollbar>\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"footBtns\">\r\n    <button type=\"button\" class=\"btn btn-outline-secondary btn-sm px-3 mx-2\" *ngIf=\"curStep.showCancelBtn\" (click)=\"clickCancel()\">取消</button>\r\n    <button type=\"button\" class=\"btn btn-outline-primary btn-sm px-3 mx-2\" *ngIf=\"curStep.showLastStepBtn\" (click)=\"lastStep()\"\r\n      type=\"submit\">上一步</button>\r\n    <button type=\"button\" class=\"btn btn-outline-primary btn-sm px-3 mx-2\" *ngIf=\"curStep.showNextStepBtn\" (click)=\"nextStep()\"\r\n      type=\"submit\">下一步</button>\r\n    <button type=\"button\" class=\"btn btn-outline-primary btn-sm px-3 mx-2\" *ngIf=\"curStep.showFinishBtn\" (click)=\"finishWizard()\">完成</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/packages/form-create-wizard-package/views/wizard/wizard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardComponent", function() { return WizardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WizardComponent = (function () {
    function WizardComponent(viewContainerRef, componentFactoryResolver) {
        this.viewContainerRef = viewContainerRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.clickCancelBtn = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.clickFinishBtn = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.title = '';
        this.steps = [];
        this.curStepIndex = 0;
    }
    WizardComponent.prototype.ngOnInit = function () {
        if (this.steps && this.steps.length > 0) {
            this.curStep = this.steps[this.curStepIndex];
            this.createStepComponent(this.steps[this.curStepIndex]);
        }
    };
    WizardComponent.prototype.createStepComponent = function (step) {
        var _this = this;
        this.stepContainer.clear();
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(step.component);
        this.curComponentRef = this.stepContainer.createComponent(componentFactory);
        this.curComponentRef.instance.data = step.data;
        // 新增步骤
        if (this.curComponentRef.instance.addStep) {
            this.curComponentRef.instance.addStep.subscribe(function (stepList) {
                var curIndex = Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["findIndex"])(_this.steps, _this.curStep);
                (_a = _this.steps).splice.apply(_a, [curIndex + 1, 0].concat(stepList));
                _this.curStep.nextStep = stepList[0].stepId;
                _this.curStep.showFinishBtn = false;
                _this.curStep.showNextStepBtn = true;
                var _a;
            });
        }
        // 删除步骤
        if (this.curComponentRef.instance.removeStep) {
            this.curComponentRef.instance.removeStep.subscribe(function (data) {
                Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["merge"])(_this.curStep, data.curStep);
                data.removeSteps.forEach(function (removeStep) {
                    var index = Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["findIndex"])(_this.steps, removeStep);
                    _this.steps.splice(index, 1);
                });
            });
        }
        // 变更步骤
        if (this.curComponentRef.instance.changeStep) {
            this.curComponentRef.instance.changeStep.subscribe(function (stepList) {
                stepList.forEach(function (changeStep) {
                    var oldStep = Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["find"])(_this.steps, function (s) { return s.stepId === changeStep.stepId; });
                    Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["merge"])(oldStep, changeStep);
                });
            });
        }
    };
    WizardComponent.prototype.jumpStep = function (nextStep) {
        // 判断跳转方向
        if (nextStep === this.curStep) {
            return;
        }
        var nextIndex = Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["findIndex"])(this.steps, function (s) { return s.stepId === nextStep.stepId; });
        if (nextIndex === this.curStepIndex) {
            return;
        }
        if (nextIndex < this.curStepIndex) {
            this.curStep = nextStep;
            this.curStepIndex = nextIndex;
            this.createStepComponent(nextStep);
            return;
        }
        if (nextStep.stepId === this.curStep.nextStep) {
            this.nextStep();
            return;
        }
        //  else if (this.finishedSteps.indexOf(nextStep.stepId) > -1) { // 已完成的后续步骤
        //   this.curStep = nextStep;
        //   this.curStepIndex = nextIndex;
        //   this.createStepComponent(nextStep);
        // }
    };
    /**
      * 点击上一步
      */
    WizardComponent.prototype.lastStep = function () {
        var self = this;
        this.curStepIndex = Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["findIndex"])(this.steps, function (s) { return s.nextStep === self.curStep.stepId; });
        this.curStep = this.steps[this.curStepIndex];
        this.createStepComponent(this.curStep);
    };
    /**
     * 点击下一步
     */
    WizardComponent.prototype.nextStep = function () {
        var _this = this;
        // 校验
        var validationFunc = this.curComponentRef.instance.validation;
        if (validationFunc && typeof (validationFunc) === 'function') {
            var result = validationFunc();
            if (!result) {
                return;
            }
        }
        // 执行各Component定义的nextStepClick事件
        var clickNextStep = this.curComponentRef.instance.clickNextStep;
        if (clickNextStep && typeof (clickNextStep) === 'function') {
            var result = clickNextStep(); // 返回值接收boolean或observable类型
            if (typeof (result) === 'boolean') {
                this.moveToNextStep(result);
            }
            else {
                result.subscribe(function (data) {
                    _this.moveToNextStep(data);
                });
            }
        }
        else {
            this.moveToNextStep(true);
        }
    };
    WizardComponent.prototype.moveToNextStep = function (data) {
        if (!data) {
            return;
        }
        var curStep = this.curStep;
        if (curStep.nextStep === '') {
            return;
        }
        // this.finishedSteps.push(curStep.stepId);
        this.curStepIndex = Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["findIndex"])(this.steps, function (s) { return s.stepId === curStep.nextStep; });
        this.curStep = this.steps[this.curStepIndex];
        this.createStepComponent(this.curStep);
    };
    /**
     * 取消
     */
    WizardComponent.prototype.clickCancel = function () {
        this.clickCancelBtn.emit();
    };
    /**
     * 完成
     */
    WizardComponent.prototype.finishWizard = function () {
        var validationFunc = this.curComponentRef.instance.validation;
        if (validationFunc && typeof (validationFunc) === 'function') {
            var result = validationFunc();
            if (!result) {
                return;
            }
        }
        this.clickFinishBtn.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], WizardComponent.prototype, "clickCancelBtn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], WizardComponent.prototype, "clickFinishBtn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], WizardComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], WizardComponent.prototype, "steps", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('stepContainer', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"])
    ], WizardComponent.prototype, "stepContainer", void 0);
    WizardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-wizard',
            template: __webpack_require__("./src/packages/form-create-wizard-package/views/wizard/wizard.component.html"),
            styles: [__webpack_require__("./src/packages/form-create-wizard-package/views/wizard/wizard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]])
    ], WizardComponent);
    return WizardComponent;
}());



/***/ })

},[],["rxjs"],["rxjs"]);
//# sourceMappingURL=form-create-wizard-package.module.chunk.js.map