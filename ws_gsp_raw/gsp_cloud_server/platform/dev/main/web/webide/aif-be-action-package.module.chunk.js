webpackJsonp(["aif-be-action-package.module"],{

/***/ "./src/packages/aif-be-action/aif-be-action-package.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AifBeActionPackageModule", function() { return AifBeActionPackageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_ide_devkit__ = __webpack_require__("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_ide_devkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__farris_ide_devkit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gsp_lcm_metadata_selector__ = __webpack_require__("./node_modules/@gsp-lcm/metadata-selector/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gsp_lcm_metadata_selector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__gsp_lcm_metadata_selector__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__package__ = __webpack_require__("./src/packages/aif-be-action/package.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_aif_be_action_module__ = __webpack_require__("./src/packages/aif-be-action/views/aif-be-action.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
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







var AifBeActionPackageModule = (function (_super) {
    __extends(AifBeActionPackageModule, _super);
    function AifBeActionPackageModule(cfr, injector) {
        var _this = _super.call(this) || this;
        _this.cfr = cfr;
        _this.injector = injector;
        return _this;
    }
    AifBeActionPackageModule.prototype.initPackage = function (gsp) {
        this.package = new __WEBPACK_IMPORTED_MODULE_4__package__["AifBeActionPackage"](gsp, this.cfr, this.injector);
    };
    AifBeActionPackageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_5__views_aif_be_action_module__["AifBeActionModule"],
                __WEBPACK_IMPORTED_MODULE_3__gsp_lcm_metadata_selector__["GSPMetadataServiceModule"].forRoot(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["environment"].SERVER_IP)
            ],
            providers: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], AifBeActionPackageModule);
    return AifBeActionPackageModule;
}(__WEBPACK_IMPORTED_MODULE_2__farris_ide_devkit__["PackageModule"]));

//# sourceMappingURL=aif-be-action-package.module.js.map

/***/ }),

/***/ "./src/packages/aif-be-action/package.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AifBeActionPackage", function() { return AifBeActionPackage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__ = __webpack_require__("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views__ = __webpack_require__("./src/packages/aif-be-action/views/index.ts");
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


var AifBeActionPackage = (function (_super) {
    __extends(AifBeActionPackage, _super);
    function AifBeActionPackage(gsp, cfr, injector) {
        var _this = _super.call(this, gsp) || this;
        _this.cfr = cfr;
        _this.injector = injector;
        return _this;
    }
    AifBeActionPackage.prototype.activate = function (state) {
        var _this = this;
        this.gsp.workspace.addOpener(function (uri) { return _this.openBeAction(uri); });
    };
    AifBeActionPackage.prototype.openBeAction = function (uri) {
        if (uri.endsWith('.aifac')) {
            var pkgView_1 = new __WEBPACK_IMPORTED_MODULE_1__views__["AifBeActionPackageView"]({}, this.cfr, this.injector);
            var currentElement = pkgView_1.getElement().instance;
            currentElement.metadataUri = uri;
            return {
                getTitle: function () { return uri.substring(uri.lastIndexOf('/') + 1); },
                getElement: function () { return pkgView_1.getElement(); }
            };
        }
    };
    return AifBeActionPackage;
}(__WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__["Package"]));



/***/ }),

/***/ "./src/packages/aif-be-action/views/BizActionType.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BizActionType", function() { return BizActionType; });
var BizActionType;
(function (BizActionType) {
    BizActionType[BizActionType["Creation"] = 1] = "Creation";
    BizActionType[BizActionType["Writeback"] = 2] = "Writeback";
})(BizActionType || (BizActionType = {}));


/***/ }),

/***/ "./src/packages/aif-be-action/views/aif-be-action-designer/aif-be-action-designer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n}\r\n\r\n#bemain .k-content {\r\n    padding: 0 !important;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n}\r\n\r\n.calc-rules.createNav {\r\n    background: #e8edf2;\r\n    height: 40px;\r\n}\r\n\r\n.calc-rules.createNav .stepTitle {\r\n    padding: 0px 10px;\r\n    color: #666666;\r\n    line-height: 40px;\r\n    cursor: pointer;\r\n    font-size: 0.875rem;\r\n}\r\n\r\n.calc-rules.createNav .stepTitle.active {\r\n    color: #FFFFFF;\r\n    background-color: #0072c6 !important;\r\n}\r\n\r\n.calc-rules.createNav .stepTitle:not(:first-child).active {\r\n    margin-left: -17px;\r\n    padding-left: 25px;\r\n}\r\n\r\n.calc-rules.createNav .stepTitle.disable {\r\n    color: #cdcdcf;\r\n}\r\n\r\n.calc-rules .triangle_border_right {\r\n    width: 0;\r\n    height: 0;\r\n    border-width: 20px 0 20px 18px;\r\n    border-style: solid;\r\n    border-color: transparent transparent transparent #cccccc;\r\n    position: relative;\r\n}\r\n\r\n.calc-rules .triangle_border_right span {\r\n    display: block;\r\n    width: 0;\r\n    height: 0;\r\n    border-width: 20px 0px 20px 18px;\r\n    border-style: solid;\r\n    border-color: transparent transparent transparent #e8edf2;\r\n    position: absolute;\r\n    top: -20px;\r\n    left: -20px;\r\n}\r\n\r\n.calc-rules .triangle_border_right.active {\r\n    width: 0;\r\n    height: 0;\r\n    border-width: 20px 0 20px 20px;\r\n    border-color: transparent transparent transparent #e8edf2;\r\n}\r\n\r\n.calc-rules .triangle_border_right.active span {\r\n    border-width: 20px 0 20px 20px;\r\n    border-color: transparent transparent transparent #0072c6;\r\n}\r\n\r\n#beFrameObjTab {\r\n    position: absolute;\r\n    top: 3em;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n\r\n#beFrameBeTab {\r\n    position: absolute;\r\n    top: 0em;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n\r\n.aifHeader{\r\n    background-color:#C0C0C0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/aif-be-action/views/aif-be-action-designer/aif-be-action-designer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-column\" style=\"flex:1;\">\r\n  <div class=\"border-bottom\">\r\n    <button kendoButton [look]=\"'bare'\" (click)=\"saveMetadata()\">保存</button>\r\n    <button kendoButton [look]=\"'bare'\" (click)=\"publishMetadata()\">发布</button>\r\n    <button kendoButton [look]=\"'bare'\" (click)=\"unPublishMetadata()\">撤销发布</button>\r\n  </div>\r\n\r\n  <div>\r\n    <h5 class=\"float-left aifHeader\">业务动作</h5>\r\n  </div>\r\n\r\n  <div class=\"flex-auto\" style=\"overflow-y:auto;\" id=\"attachmentParent\">\r\n    <form class=\"k-form\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-md-6 pb-1\">\r\n          <label class=\"k-form-field\" for=\"id\">\r\n            <span>\r\n              编号\r\n              <span style=\"color:red\">*</span>\r\n            </span>\r\n            <input kendoTextBox class='k-textbox w-100' [readonly]=\"disabled?'readonly':''\" required placeholder=\"\" name=\"id\" [(ngModel)]=\"toDesignerBeAction&&toDesignerBeAction.Id\"\r\n              #ID=\"ngModel\">\r\n            <div [hidden]=\"ID.valid || ID.pristine\" class=\"alert-danger\">\r\n              \"编号\"不能为空\r\n            </div>\r\n          </label>\r\n\r\n          <label class=\"k-form-field \" for=\"name\">\r\n            <span>名称</span>\r\n            <input class=\"k-textbox w-100\" placeholder=\"\" name=\"name\" [(ngModel)]=\"toDesignerBeAction&&toDesignerBeAction.Name\">\r\n          </label>\r\n\r\n          <label class=\"k-form-field \" for=\"bizActionType\">\r\n            <span>\r\n              业务动作类型\r\n              <span style=\"color:red\">*</span>\r\n            </span>\r\n            <kendo-dropdownlist [data]=\"bizActionTypes\" [class]=\"'w-100'\" textField=\"text\" valueField=\"value\" [(ngModel)]=\"selectedContext\"\r\n              [ngModelOptions]=\"{standalone: true}\" (valueChange)=\"valueChange($event)\">\r\n            </kendo-dropdownlist>\r\n          </label>\r\n\r\n          <label class=\"k-form-field\" for=\"BeActionAgentComponentId\">\r\n            <span> 业务动作代理构件ID </span>\r\n            <div class=\"d-flex\" (mouseenter)=\"setClearBeActionAgentComponentIdable(true)\" (mouseleave)=\"setClearBeActionAgentComponentIdable(false)\">\r\n              <span style=\"opacity: 1; width: 100%; position: relative;\">\r\n                <input class=\"k-textbox w-100\" readonly placeholder=\"\" name=\"BeActionAgentComponentId\" [(ngModel)]=\"toDesignerBeAction&&toDesignerBeAction.BeActionAgentComponentId\"\r\n                  #BeActionAgentComponentId=\"ngModel\">\r\n                <span *ngIf=\"clearBeActionAgentComponentIdable\" style=\"position: absolute; right: 4px; top: 2px; color:red;font-weight: bold\"\r\n                  (click)=\"clearBeActionAgentComponentId()\">x</span>\r\n              </span>\r\n\r\n              <button class=\"k-button k-bare\" type=\"button\" (click)=\"selectMetadata('CommonComponent')\">\r\n                <i class=\"material-icons align-middle\" style=\" font-size: 18px;\">filter_none</i>\r\n              </button>\r\n            </div>\r\n          </label>\r\n        </div>\r\n\r\n        <div class=\"col-sm-12 col-md-6 pb-1\">\r\n          <label class=\"k-form-field \" for=\"beMetadataID\">\r\n            <span>\r\n              BE元数据ID\r\n              <span style=\"color:red\">*</span>\r\n            </span>\r\n            <div class=\"d-flex\" (mouseenter)=\"setClearBeMetadataIDable(true)\" (mouseleave)=\"setClearBeMetadataIDable(false)\">\r\n              <span style=\"opacity: 1; width: 100%; position: relative;\">\r\n                <input class=\"k-textbox w-100\" readonly required placeholder=\"\" name=\"beMetadataID\" [(ngModel)]=\"toDesignerBeAction&&toDesignerBeAction.BeMetadataID\"\r\n                  #BeMetadataID=\"ngModel\">\r\n                <span *ngIf=\"clearBeMetadataIDable\" style=\"position: absolute; right: 4px; top: 2px; color:red;font-weight: bold\" (click)=\"clearbeMetadata()\">x</span>\r\n              </span>\r\n\r\n              <button class=\"k-button k-bare\" type=\"button\" (click)=\"selectMetadata('GSPBusinessEntity')\">\r\n                <i class=\"material-icons align-middle\" style=\" font-size: 18px;\">filter_none</i>\r\n              </button>\r\n            </div>\r\n            <div [hidden]=\"BeMetadataID.valid || BeMetadataID.pristine\" class=\"alert-danger\">\r\n              \"BE元数据ID\"不能为空\r\n            </div>\r\n          </label>\r\n\r\n          <label class=\"k-form-field\" for=\"beType\">\r\n            <span>\r\n              BE类型\r\n              <span style=\"color:red\">*</span>\r\n            </span>\r\n            <input class=\"k-textbox w-100\" readonly required placeholder=\"\" name=\"beType\" [(ngModel)]=\"toDesignerBeAction&&toDesignerBeAction.BeType\"\r\n              #BeType=\"ngModel\">\r\n            <div [hidden]=\"BeType.valid || BeType.pristine\" class=\"alert-danger\">\r\n              \"BE类型\"不能为空\r\n            </div>\r\n          </label>\r\n\r\n          <label class=\"k-form-field\" for=\"beMetadataPackageName\">\r\n            <span>\r\n              BE元数据包名称\r\n              <span style=\"color:red\">*</span>\r\n            </span>\r\n            <input class=\"k-textbox w-100\" readonly required placeholder=\"\" name=\"beMetadataPackageName\" [(ngModel)]=\"toDesignerBeAction&&toDesignerBeAction.BeMetadataPackageName\"\r\n              #BeMetadataPackageName=\"ngModel\">\r\n            <div [hidden]=\"BeMetadataPackageName.valid || BeMetadataPackageName.pristine\" class=\"alert-danger\">\r\n              \"BE元数据包名称\"不能为空\r\n            </div>\r\n          </label>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-12 pb-1\">\r\n          <label class=\"k-form-field\" for=\"description\">\r\n            <span>描述</span>\r\n            <textarea kendoTextArea class=\"form-control\" placeholder=\"\" name=\"description\" [(ngModel)]=\"toDesignerBeAction&&toDesignerBeAction.Description\"></textarea>\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/packages/aif-be-action/views/aif-be-action-designer/aif-be-action-designer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AifBeActionDesignerComponent", function() { return AifBeActionDesignerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit_services__ = __webpack_require__("./node_modules/@farris/ide-devkit/services/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit_services___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit_services__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_ui__ = __webpack_require__("./node_modules/@farris/ui/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__farris_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gsp_lcm_metadata_selector__ = __webpack_require__("./node_modules/@gsp-lcm/metadata-selector/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gsp_lcm_metadata_selector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__gsp_lcm_metadata_selector__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__aif_be_action_entity__ = __webpack_require__("./src/packages/aif-be-action/views/aif-be-action-entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__aif_be_action_service__ = __webpack_require__("./src/packages/aif-be-action/views/aif-be-action.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__BizActionType__ = __webpack_require__("./src/packages/aif-be-action/views/BizActionType.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AifBeActionDesignerComponent = (function () {
    function AifBeActionDesignerComponent(lcmService, cache, beActionService, modalService, resolver, injector) {
        this.lcmService = lcmService;
        this.cache = cache;
        this.beActionService = beActionService;
        this.modalService = modalService;
        this.resolver = resolver;
        this.injector = injector;
        this.bizActionTypes = new Array();
        this.selectedContext = { value: null, text: null };
        this.disabled = false;
        this.title = 'app';
        this.clearBeActionAgentComponentIdable = false;
        this.clearBeMetadataIDable = false;
    }
    Object.defineProperty(AifBeActionDesignerComponent.prototype, "metadataUri", {
        set: function (metadataUri) {
            this._metadataUri = metadataUri;
        },
        enumerable: true,
        configurable: true
    });
    AifBeActionDesignerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var fullname = this._metadataUri.substring(this._metadataUri.lastIndexOf('/') + 1);
        var path = this._metadataUri.substring(1, this._metadataUri.lastIndexOf('/'));
        this.lcmService.LoadMetadata(fullname, path).subscribe(function (data) {
            _this.metadataDto = data;
            _this.loadMetadata(_this.metadataDto);
            _this.bizActionTypes.push({ value: 'Creation', text: 'Creation' });
            _this.bizActionTypes.push({ value: 'Writeback', text: 'Writeback' });
            if (_this.toDesignerBeAction && _this.toDesignerBeAction.BizActionType) {
                if (_this.toDesignerBeAction.BizActionType == __WEBPACK_IMPORTED_MODULE_6__BizActionType__["BizActionType"].Creation) {
                    _this.selectedContext = _this.bizActionTypes[0];
                }
                else if (_this.toDesignerBeAction.BizActionType == __WEBPACK_IMPORTED_MODULE_6__BizActionType__["BizActionType"].Writeback) {
                    _this.selectedContext = _this.bizActionTypes[1];
                }
            }
            else {
                _this.selectedContext = _this.bizActionTypes[0];
            }
        }, function (error) {
            alert("加载元数据失败。");
        });
    };
    AifBeActionDesignerComponent.prototype.saveMetadata = function () {
        this.saveMetadataService().subscribe(function () {
            alert("保存成功");
        }, function (error) {
            alert("保存失败");
        });
    };
    AifBeActionDesignerComponent.prototype.saveMetadataService = function () {
        this.toDesignerBeAction.BizActionType = this.selectedContext.value;
        var beAction = JSON.stringify(this.toDesignerBeAction);
        var entity = {};
        entity.Entity = beAction;
        this.metadataDto.content = JSON.stringify(entity);
        return this.lcmService.SaveMetadata(this.metadataDto, this.cache.get("sessionId"));
    };
    AifBeActionDesignerComponent.prototype.publishMetadata = function () {
        var _this = this;
        this.saveMetadataService().subscribe(function () {
            _this.lcmService.GetProjectInfo(_this.metadataDto.relativePath).subscribe(function (data) {
                _this.toDesignerBeAction.MetadataID = _this.metadataDto.id;
                _this.toDesignerBeAction.MetadataPackageName = data.metadataPackageInfo.name;
                _this.lcmService.GetGspProjInfo(data.projectPath).subscribe(function (data) {
                    _this.toDesignerBeAction.SuName = data.serviceUnitCode;
                    _this.beActionService.publishBeAction(_this.toDesignerBeAction).subscribe(function () {
                        alert("发布成功。");
                        _this.disabled = true;
                    }, function (error) {
                        var errorString = error.error ? error.error.Message : error.statusText;
                        alert("发布失败。\n" + errorString);
                    });
                });
            });
        });
    };
    AifBeActionDesignerComponent.prototype.unPublishMetadata = function () {
        var _this = this;
        this.beActionService.unPublishBeAction(this.metadataDto.id).subscribe(function () {
            alert("撤销发布成功。");
            _this.disabled = false;
        }, function (error) {
            var errorString = error.error ? error.error.Message : error.statusText;
            alert("撤销发布失败。\n" + errorString);
        });
    };
    AifBeActionDesignerComponent.prototype.loadMetadata = function (dto) {
        var _this = this;
        this.metadataDto = dto;
        if (this.metadataDto.content && this.metadataDto.content != "") {
            var entity = JSON.parse(this.metadataDto.content);
            if (entity.Entity != "null") {
                this.toDesignerBeAction = JSON.parse(entity.Entity);
                if (this.toDesignerBeAction.Name == null) {
                    this.toDesignerBeAction.Name = this.metadataDto.name;
                }
            }
            else {
                this.toDesignerBeAction = new __WEBPACK_IMPORTED_MODULE_4__aif_be_action_entity__["AifBeActionEntity"]();
                this.toDesignerBeAction.Name = this.metadataDto.name;
            }
            this.beActionService.isBeActionPublished(this.metadataDto.id).subscribe(function (data) {
                _this.disabled = data.value;
            });
        }
    };
    AifBeActionDesignerComponent.prototype.selectMetadata = function (typeName) {
        var _this = this;
        var compFactory = this.resolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_3__gsp_lcm_metadata_selector__["SelectMetadataComponent"]);
        var compRef = compFactory.create(this.injector);
        compRef.instance.metadataPath = this.metadataDto.relativePath;
        compRef.instance.typeName = typeName;
        compRef.instance.selectedMetadata.subscribe(function ($event) {
            if (typeName == "GSPBusinessEntity") {
                _this.toDesignerBeAction.BeMetadataID = $event.metadata.id;
                _this.toDesignerBeAction.BeType = $event.metadata.code;
                _this.toDesignerBeAction.BeMetadataPackageName = $event.packageHeader.name;
            }
            else if (typeName == "CommonComponent") {
                _this.toDesignerBeAction.BeActionAgentComponentId = $event.metadata.id;
            }
        });
        var modalConfig = {
            title: '元数据选择',
            width: 882,
            height: 573,
            showButtons: false
        };
        var dialog = this.modalService.show(compRef, modalConfig);
        compRef.instance.closeModalEmitter.subscribe(function ($event) {
            dialog.close();
        });
    };
    AifBeActionDesignerComponent.prototype.valueChange = function (value) {
        if (value == "Creation") {
            this.selectedContext = this.bizActionTypes[0];
        }
        else if (value == "Writeback") {
            this.selectedContext = this.bizActionTypes[1];
        }
    };
    AifBeActionDesignerComponent.prototype.clearBeActionAgentComponentId = function () {
        this.toDesignerBeAction.BeActionAgentComponentId = null;
    };
    AifBeActionDesignerComponent.prototype.clearbeMetadata = function () {
        this.toDesignerBeAction.BeMetadataID = null;
        this.toDesignerBeAction.BeType = null;
        this.toDesignerBeAction.BeMetadataPackageName = null;
    };
    AifBeActionDesignerComponent.prototype.setClearBeActionAgentComponentIdable = function (display) {
        if (this.toDesignerBeAction.BeActionAgentComponentId != null) {
            this.clearBeActionAgentComponentIdable = display;
        }
        else {
            this.clearBeActionAgentComponentIdable = false;
        }
    };
    AifBeActionDesignerComponent.prototype.setClearBeMetadataIDable = function (display) {
        if (this.toDesignerBeAction.BeMetadataID != null) {
            this.clearBeMetadataIDable = display;
        }
        else {
            this.clearBeMetadataIDable = false;
        }
    };
    AifBeActionDesignerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-aif-be-action-designer',
            template: __webpack_require__("./src/packages/aif-be-action/views/aif-be-action-designer/aif-be-action-designer.component.html"),
            styles: [__webpack_require__("./src/packages/aif-be-action/views/aif-be-action-designer/aif-be-action-designer.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__aif_be_action_service__["AifBeActionService"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__gsp_lcm_metadata_selector__["GSPMetadataService"], __WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit_services__["CacheService"], __WEBPACK_IMPORTED_MODULE_5__aif_be_action_service__["AifBeActionService"],
            __WEBPACK_IMPORTED_MODULE_2__farris_ui__["BsModalService"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], AifBeActionDesignerComponent);
    return AifBeActionDesignerComponent;
}());



/***/ }),

/***/ "./src/packages/aif-be-action/views/aif-be-action-entity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AifBeActionEntity", function() { return AifBeActionEntity; });
var AifBeActionEntity = (function () {
    function AifBeActionEntity() {
    }
    return AifBeActionEntity;
}());



/***/ }),

/***/ "./src/packages/aif-be-action/views/aif-be-action.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AifBeActionModule", function() { return AifBeActionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_buttons__ = __webpack_require__("./node_modules/@progress/kendo-angular-buttons/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_grid__ = __webpack_require__("./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_dialog__ = __webpack_require__("./node_modules/@progress/kendo-angular-dialog/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_dropdowns__ = __webpack_require__("./node_modules/@progress/kendo-angular-dropdowns/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__farris_ide_devkit_services__ = __webpack_require__("./node_modules/@farris/ide-devkit/services/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__farris_ide_devkit_services___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__farris_ide_devkit_services__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__farris_ui__ = __webpack_require__("./node_modules/@farris/ui/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__farris_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__farris_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__gsp_lcm_metadata_selector__ = __webpack_require__("./node_modules/@gsp-lcm/metadata-selector/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__gsp_lcm_metadata_selector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__gsp_lcm_metadata_selector__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__aif_be_action_designer_aif_be_action_designer_component__ = __webpack_require__("./src/packages/aif-be-action/views/aif-be-action-designer/aif-be-action-designer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AifBeActionModule = (function () {
    function AifBeActionModule() {
    }
    AifBeActionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["HttpClientModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_buttons__["ButtonsModule"],
                __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_grid__["GridModule"],
                __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_dialog__["WindowModule"],
                __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_dialog__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_dropdowns__["DropDownsModule"],
                __WEBPACK_IMPORTED_MODULE_8__farris_ide_devkit_services__["GSPHttpModule"],
                __WEBPACK_IMPORTED_MODULE_9__farris_ui__["FarrisDialogModule"],
                __WEBPACK_IMPORTED_MODULE_10__gsp_lcm_metadata_selector__["MetadataSelectModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_11__aif_be_action_designer_aif_be_action_designer_component__["AifBeActionDesignerComponent"]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_11__aif_be_action_designer_aif_be_action_designer_component__["AifBeActionDesignerComponent"]]
        })
    ], AifBeActionModule);
    return AifBeActionModule;
}());



/***/ }),

/***/ "./src/packages/aif-be-action/views/aif-be-action.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AifBeActionService", function() { return AifBeActionService; });
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


var AifBeActionService = (function () {
    function AifBeActionService(http) {
        this.http = http;
        this.baseUrl = '/api/dev/sys/v1.0/BeActionEntities';
    }
    AifBeActionService.prototype.publishBeAction = function (item) {
        return this.http.post(this.baseUrl, item);
    };
    AifBeActionService.prototype.unPublishBeAction = function (metadataId) {
        var param = {
            "parameters": metadataId
        };
        var url = " " + this.baseUrl + "/UnPublishBeAction";
        return this.http.post(url, param);
    };
    AifBeActionService.prototype.isBeActionPublished = function (metadataId) {
        var url = " " + this.baseUrl + "/IsPublished(metadataId='" + metadataId + "')";
        return this.http.get(url);
    };
    AifBeActionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit_services__["HttpService"]])
    ], AifBeActionService);
    return AifBeActionService;
}());



/***/ }),

/***/ "./src/packages/aif-be-action/views/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AifBeActionPackageView", function() { return AifBeActionPackageView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__ = __webpack_require__("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aif_be_action_designer_aif_be_action_designer_component__ = __webpack_require__("./src/packages/aif-be-action/views/aif-be-action-designer/aif-be-action-designer.component.ts");
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


var AifBeActionPackageView = (function (_super) {
    __extends(AifBeActionPackageView, _super);
    function AifBeActionPackageView(serializedState, cfr, injector) {
        var _this = _super.call(this, serializedState) || this;
        _this.cfr = cfr;
        _this.injector = injector;
        var componentFactory = _this.cfr.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_1__aif_be_action_designer_aif_be_action_designer_component__["AifBeActionDesignerComponent"]);
        _this.element = componentFactory.create(_this.injector);
        return _this;
    }
    return AifBeActionPackageView;
}(__WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__["PackageView"]));



/***/ })

},[]);
//# sourceMappingURL=aif-be-action-package.module.chunk.js.map