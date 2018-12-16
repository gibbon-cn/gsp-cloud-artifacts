webpackJsonp(["aif-be-creation-rule-package.module"],{

/***/ "./src/packages/aif-be-creation-rule/aif-be-creation-rule-package.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AifBeCreationRulePackageModule", function() { return AifBeCreationRulePackageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_ide_devkit__ = __webpack_require__("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_ide_devkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__farris_ide_devkit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gsp_lcm_metadata_selector__ = __webpack_require__("./node_modules/@gsp-lcm/metadata-selector/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gsp_lcm_metadata_selector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__gsp_lcm_metadata_selector__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__package__ = __webpack_require__("./src/packages/aif-be-creation-rule/package.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_aif_be_creation_rule_module__ = __webpack_require__("./src/packages/aif-be-creation-rule/views/aif-be-creation-rule.module.ts");
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







var AifBeCreationRulePackageModule = (function (_super) {
    __extends(AifBeCreationRulePackageModule, _super);
    function AifBeCreationRulePackageModule(cfr, injector) {
        var _this = _super.call(this) || this;
        _this.cfr = cfr;
        _this.injector = injector;
        return _this;
    }
    AifBeCreationRulePackageModule.prototype.initPackage = function (gsp) {
        this.package = new __WEBPACK_IMPORTED_MODULE_4__package__["AifBeCreationRulePackage"](gsp, this.cfr, this.injector);
    };
    AifBeCreationRulePackageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_5__views_aif_be_creation_rule_module__["AifBeCreationRuleModule"],
                __WEBPACK_IMPORTED_MODULE_3__gsp_lcm_metadata_selector__["GSPMetadataServiceModule"].forRoot(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["environment"].SERVER_IP)
            ],
            providers: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], AifBeCreationRulePackageModule);
    return AifBeCreationRulePackageModule;
}(__WEBPACK_IMPORTED_MODULE_2__farris_ide_devkit__["PackageModule"]));

//# sourceMappingURL=aif-be-creation-rule-package.module.js.map

/***/ }),

/***/ "./src/packages/aif-be-creation-rule/package.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AifBeCreationRulePackage", function() { return AifBeCreationRulePackage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__ = __webpack_require__("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views__ = __webpack_require__("./src/packages/aif-be-creation-rule/views/index.ts");
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


var AifBeCreationRulePackage = (function (_super) {
    __extends(AifBeCreationRulePackage, _super);
    function AifBeCreationRulePackage(gsp, cfr, injector) {
        var _this = _super.call(this, gsp) || this;
        _this.cfr = cfr;
        _this.injector = injector;
        return _this;
    }
    AifBeCreationRulePackage.prototype.activate = function (state) {
        var _this = this;
        this.gsp.workspace.addOpener(function (uri) { return _this.openBeCreationRule(uri); });
    };
    AifBeCreationRulePackage.prototype.openBeCreationRule = function (uri) {
        if (uri.endsWith('.aifcr')) {
            var pkgView_1 = new __WEBPACK_IMPORTED_MODULE_1__views__["AifBeCreationRulePackageView"]({}, this.cfr, this.injector);
            var currentElement = pkgView_1.getElement().instance;
            currentElement.metadataUri = uri;
            // 这里需要处理uri，title应返回元数据名称，
            return {
                getTitle: function () { return uri.substring(uri.lastIndexOf('/') + 1); },
                getElement: function () { return pkgView_1.getElement(); }
            };
        }
    };
    return AifBeCreationRulePackage;
}(__WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__["Package"]));



/***/ }),

/***/ "./src/packages/aif-be-creation-rule/views/aif-be-creation-rule-designer/aif-be-creation-rule-designer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n}\r\n\r\n#bemain .k-content {\r\n    padding: 0 !important;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n}\r\n\r\n.calc-rules.createNav {\r\n    background: #e8edf2;\r\n    height: 40px;\r\n}\r\n\r\n.calc-rules.createNav .stepTitle {\r\n    padding: 0px 10px;\r\n    color: #666666;\r\n    line-height: 40px;\r\n    cursor: pointer;\r\n    font-size: 0.875rem;\r\n}\r\n\r\n.calc-rules.createNav .stepTitle.active {\r\n    color: #FFFFFF;\r\n    background-color: #0072c6 !important;\r\n}\r\n\r\n.calc-rules.createNav .stepTitle:not(:first-child).active {\r\n    margin-left: -17px;\r\n    padding-left: 25px;\r\n}\r\n\r\n.calc-rules.createNav .stepTitle.disable {\r\n    color: #cdcdcf;\r\n}\r\n\r\n.calc-rules .triangle_border_right {\r\n    width: 0;\r\n    height: 0;\r\n    border-width: 20px 0 20px 18px;\r\n    border-style: solid;\r\n    border-color: transparent transparent transparent #cccccc;\r\n    position: relative;\r\n}\r\n\r\n.calc-rules .triangle_border_right span {\r\n    display: block;\r\n    width: 0;\r\n    height: 0;\r\n    border-width: 20px 0px 20px 18px;\r\n    border-style: solid;\r\n    border-color: transparent transparent transparent #e8edf2;\r\n    position: absolute;\r\n    top: -20px;\r\n    left: -20px;\r\n}\r\n\r\n.calc-rules .triangle_border_right.active {\r\n    width: 0;\r\n    height: 0;\r\n    border-width: 20px 0 20px 20px;\r\n    border-color: transparent transparent transparent #e8edf2;\r\n}\r\n\r\n.calc-rules .triangle_border_right.active span {\r\n    border-width: 20px 0 20px 20px;\r\n    border-color: transparent transparent transparent #0072c6;\r\n}\r\n\r\n#beFrameObjTab {\r\n    position: absolute;\r\n    top: 3em;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n\r\n#beFrameBeTab {\r\n    position: absolute;\r\n    top: 0em;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n\r\n.aifHeader{\r\n    background-color:#C0C0C0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/aif-be-creation-rule/views/aif-be-creation-rule-designer/aif-be-creation-rule-designer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-column\" style=\"flex:1;\">\r\n  <div class=\"border-bottom\">\r\n    <button kendoButton [look]=\"'bare'\" (click)=\"saveMetadata()\">保存</button>\r\n    <button kendoButton [look]=\"'bare'\" (click)=\"publishMetadata()\">发布</button>\r\n    <button kendoButton [look]=\"'bare'\" (click)=\"unPublishMetadata()\">撤销发布</button>\r\n  </div>\r\n\r\n  <div>\r\n    <h5 class=\"float-left aifHeader\">生单规则</h5>\r\n  </div>\r\n\r\n  <div class=\"flex-auto\" style=\"overflow-y:auto;\" id=\"attachmentParent\">\r\n    <form class=\"k-form\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-md-6 pb-1\">\r\n          <label class=\"k-form-field\" for=\"id\">\r\n            <span>\r\n              ID\r\n              <span style=\"color:red\">*</span>\r\n            </span>\r\n            <input class=\"k-textbox w-100\" readonly required placeholder=\"\" name=\"id\" [(ngModel)]=\"toDesignerBeCreationRule&&toDesignerBeCreationRule.Id\"\r\n              #ID=\"ngModel\">\r\n            <div [hidden]=\"ID.valid || ID.pristine\" class=\"alert-danger\">\r\n              \"ID\"不能为空\r\n            </div>\r\n          </label>\r\n\r\n          <label class=\"k-form-field \" for=\"name\">\r\n            <span>名称</span>\r\n            <input class=\"k-textbox w-100\" placeholder=\"\" name=\"name\" [(ngModel)]=\"toDesignerBeCreationRule&&toDesignerBeCreationRule.Name\">\r\n          </label>\r\n\r\n          <label class=\"k-form-field\" for=\"isEnabled\">\r\n            <div class=\"d-flex mr-5\">\r\n              <br/>\r\n              <input type=\"checkbox\" id=\"isEnabled\" class=\"k-checkbox\" name=\"isEnabled\" [(ngModel)]=\"toDesignerBeCreationRule&&toDesignerBeCreationRule.IsEnabled\">\r\n              <label class=\"k-checkbox-label\" for=\"isEnabled\">是否启用</label>\r\n              <br/>\r\n            </div>\r\n          </label>\r\n\r\n          <label class=\"k-form-field\" for=\"mappingRuleId\">\r\n            <span>\r\n              映射规则ID\r\n              <span style=\"color:red\">*</span>\r\n            </span>\r\n            <div class=\"d-flex\" (mouseenter)=\"setClearMappingRuleIdable(true)\" (mouseleave)=\"setClearMappingRuleIdable(false)\">\r\n              <span style=\"opacity: 1; width: 100%; position: relative;\">\r\n                <input class=\"k-textbox w-100\" readonly required placeholder=\"\" name=\"mappingRuleId\" [(ngModel)]=\"toDesignerBeCreationRule&&toDesignerBeCreationRule.MappingRuleId\"\r\n                  #MappingRuleId=\"ngModel\">\r\n                <span *ngIf=\"clearMappingRuleIdable\" style=\"position: absolute; right: 4px; top: 2px; color:red;font-weight: bold\" (click)=\"clearMappingRuleId()\">x</span>\r\n              </span>\r\n\r\n              <button class=\"k-button k-bare\" type=\"button\" (click)=\"selectMetadata('MappingRule')\">\r\n                <i class=\"material-icons align-middle\" style=\" font-size: 18px;\">filter_none</i>\r\n              </button>\r\n            </div>\r\n\r\n            <div [hidden]=\"MappingRuleId.valid || MappingRuleId.pristine\" class=\"alert-danger\">\r\n              \"映射规则ID\"不能为空\r\n            </div>\r\n          </label>\r\n\r\n          <label class=\"k-form-field\" for=\"targetURI\">\r\n            <span>目标页面地址</span>\r\n            <input class=\"k-textbox w-100\" placeholder=\"\" name=\"targetURI\" [(ngModel)]=\"toDesignerBeCreationRule&&toDesignerBeCreationRule.TargetURI\">\r\n          </label>\r\n\r\n          <label class=\"k-form-field\" for=\"description\">\r\n            <span>描述</span>\r\n            <textarea kendoTextArea class=\"form-control\" placeholder=\"\" name=\"description\" [(ngModel)]=\"toDesignerBeCreationRule&&toDesignerBeCreationRule.Description\"></textarea>\r\n          </label>\r\n        </div>\r\n\r\n        <div class=\"col-sm-12 col-md-6 pb-1\">\r\n          <label class=\"k-form-field \" for=\"sourceBeMetadataID\">\r\n            <span>\r\n              来源BE元数据ID\r\n              <span style=\"color:red\">*</span>\r\n            </span>\r\n\r\n            <div class=\"d-flex\" (mouseenter)=\"setClearSourceBeMetadataIdable(true)\" (mouseleave)=\"setClearSourceBeMetadataIdable(false)\">\r\n              <span style=\"opacity: 1; width: 100%; position: relative;\">\r\n                <input class=\"k-textbox w-100\" readonly required placeholder=\"\" name=\"sourceBeMetadataID\" [(ngModel)]=\"toDesignerBeCreationRule&&toDesignerBeCreationRule.SourceBeMetadataID\"\r\n                  #SourceBeMetadataID=\"ngModel\">\r\n                <span *ngIf=\"clearSourceBeMetadataIdable\" style=\"position: absolute; right: 4px; top: 2px; color:red;font-weight: bold\" (click)=\"clearSourceBeMetadataId()\">x</span>\r\n              </span>\r\n\r\n              <button class=\"k-button k-bare\" type=\"button\" (click)=\"selectMetadata('GSPBusinessEntity',true)\">\r\n                <i class=\"material-icons align-middle\" style=\" font-size: 18px;\">filter_none</i>\r\n              </button>\r\n            </div>\r\n\r\n            <div [hidden]=\"SourceBeMetadataID.valid || SourceBeMetadataID.pristine\" class=\"alert-danger\">\r\n              \"来源BE元数据ID\"不能为空\r\n            </div>\r\n          </label>\r\n\r\n          <label class=\"k-form-field\" for=\"sourceBeType\">\r\n            <span>\r\n              来源BE类型\r\n              <span style=\"color:red\">*</span>\r\n            </span>\r\n            <input class=\"k-textbox w-100\" readonly required placeholder=\"\" name=\"sourceBeType\" [(ngModel)]=\"toDesignerBeCreationRule&&toDesignerBeCreationRule.SourceBeType\"\r\n              #SourceBeType=\"ngModel\">\r\n            <div [hidden]=\"SourceBeType.valid || SourceBeType.pristine\" class=\"alert-danger\">\r\n              \"来源BE类型\"不能为空\r\n            </div>\r\n          </label>\r\n\r\n          <label class=\"k-form-field\" for=\"sourceBeName\">\r\n            <span>\r\n              来源BE名称\r\n              <span style=\"color:red\">*</span>\r\n            </span>\r\n            <input class=\"k-textbox w-100\" readonly required placeholder=\"\" name=\"sourceBeName\" [(ngModel)]=\"toDesignerBeCreationRule&&toDesignerBeCreationRule.SourceBeName\"\r\n              #SourceBeName=\"ngModel\">\r\n            <div [hidden]=\"SourceBeName.valid || SourceBeName.pristine\" class=\"alert-danger\">\r\n              \"来源BE名称\"不能为空\r\n            </div>\r\n          </label>\r\n\r\n          <label class=\"k-form-field\" for=\"sourceBeMetadataPackageName\">\r\n            <span>\r\n              来源BE元数据包名称\r\n              <span style=\"color:red\">*</span>\r\n            </span>\r\n            <input class=\"k-textbox w-100\" readonly required placeholder=\"\" name=\"sourceBeMetadataPackageName\" [(ngModel)]=\"toDesignerBeCreationRule&&toDesignerBeCreationRule.SourceBeMetadataPackageName\"\r\n              #SourceBeMetadataPackageName=\"ngModel\">\r\n            <div [hidden]=\"SourceBeMetadataPackageName.valid || SourceBeMetadataPackageName.pristine\" class=\"alert-danger\">\r\n              \"来源BE元数据包名称\"不能为空\r\n            </div>\r\n          </label>\r\n\r\n          <label class=\"k-form-field \" for=\"targetBeMetadataID\">\r\n            <span>\r\n              目标BE元数据ID\r\n              <span style=\"color:red\">*</span>\r\n            </span>\r\n\r\n            <div class=\"d-flex\" (mouseenter)=\"setClearTargetBeMetadataIdable(true)\" (mouseleave)=\"setClearTargetBeMetadataIdable(false)\">\r\n              <span style=\"opacity: 1; width: 100%; position: relative;\">\r\n                <input class=\"k-textbox w-100\" readonly required placeholder=\"\" name=\"targetBeMetadataID\" [(ngModel)]=\"toDesignerBeCreationRule&&toDesignerBeCreationRule.TargetBeMetadataID\"\r\n                  #TargetBeMetadataID=\"ngModel\">\r\n                <span *ngIf=\"clearTargetBeMetadataIdable\" style=\"position: absolute; right: 4px; top: 2px; color:red;font-weight: bold\" (click)=\"clearTargetBeMetadataId()\">x</span>\r\n              </span>\r\n\r\n              <button class=\"k-button k-bare\" type=\"button\" (click)=\"selectMetadata('GSPBusinessEntity',false)\">\r\n                <i class=\"material-icons align-middle\" style=\" font-size: 18px;\">filter_none</i>\r\n              </button>\r\n            </div>\r\n\r\n            <div [hidden]=\"TargetBeMetadataID.valid || TargetBeMetadataID.pristine\" class=\"alert-danger\">\r\n              \"目标BE元数据ID\"不能为空\r\n            </div>\r\n          </label>\r\n\r\n          <label class=\"k-form-field\" for=\"targetBeType\">\r\n            <span>\r\n              目标BE类型\r\n              <span style=\"color:red\">*</span>\r\n            </span>\r\n            <input class=\"k-textbox w-100\" readonly required placeholder=\"\" name=\"targetBeType\" [(ngModel)]=\"toDesignerBeCreationRule&&toDesignerBeCreationRule.TargetBeType\"\r\n              #TargetBeType=\"ngModel\">\r\n            <div [hidden]=\"TargetBeType.valid || TargetBeType.pristine\" class=\"alert-danger\">\r\n              \"目标BE类型\"不能为空\r\n            </div>\r\n          </label>\r\n\r\n          <label class=\"k-form-field\" for=\"targetBeName\">\r\n            <span>\r\n              目标BE名称\r\n              <span style=\"color:red\">*</span>\r\n            </span>\r\n            <input class=\"k-textbox w-100\" readonly required placeholder=\"\" name=\"targetBeName\" [(ngModel)]=\"toDesignerBeCreationRule&&toDesignerBeCreationRule.TargetBeName\"\r\n              #TargetBeName=\"ngModel\">\r\n            <div [hidden]=\"TargetBeName.valid || TargetBeName.pristine\" class=\"alert-danger\">\r\n              \"目标BE名称\"不能为空\r\n            </div>\r\n          </label>\r\n\r\n          <label class=\"k-form-field\" for=\"targetBeMetadataPackageName\">\r\n            <span>\r\n              目标BE元数据包名称\r\n              <span style=\"color:red\">*</span>\r\n            </span>\r\n            <input class=\"k-textbox w-100\" readonly required placeholder=\"\" name=\"targetBeMetadataPackageName\" [(ngModel)]=\"toDesignerBeCreationRule&&toDesignerBeCreationRule.TargetBeMetadataPackageName\"\r\n              #TargetBeMetadataPackageName=\"ngModel\">\r\n            <div [hidden]=\"TargetBeMetadataPackageName.valid || TargetBeMetadataPackageName.pristine\" class=\"alert-danger\">\r\n              \"目标BE元数据包名称\"不能为空\r\n            </div>\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/packages/aif-be-creation-rule/views/aif-be-creation-rule-designer/aif-be-creation-rule-designer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AifBeCreationRuleDesignerComponent", function() { return AifBeCreationRuleDesignerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit_services__ = __webpack_require__("./node_modules/@farris/ide-devkit/services/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit_services___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit_services__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_ui__ = __webpack_require__("./node_modules/@farris/ui/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__farris_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gsp_lcm_metadata_selector__ = __webpack_require__("./node_modules/@gsp-lcm/metadata-selector/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gsp_lcm_metadata_selector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__gsp_lcm_metadata_selector__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__aif_be_creation_rule_entity__ = __webpack_require__("./src/packages/aif-be-creation-rule/views/aif-be-creation-rule-entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__aif_be_creation_rule_service__ = __webpack_require__("./src/packages/aif-be-creation-rule/views/aif-be-creation-rule.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { GSPBusinessEntity } from '@gsp-bef/gsp-be-metadata';



var AifBeCreationRuleDesignerComponent = (function () {
    function AifBeCreationRuleDesignerComponent(lcmService, cache, beCreationRuleService, modalService, resolver, injector) {
        this.lcmService = lcmService;
        this.cache = cache;
        this.beCreationRuleService = beCreationRuleService;
        this.modalService = modalService;
        this.resolver = resolver;
        this.injector = injector;
        this.title = 'app';
        this.clearMappingRuleIdable = false;
        this.clearSourceBeMetadataIdable = false;
        this.clearTargetBeMetadataIdable = false;
    }
    Object.defineProperty(AifBeCreationRuleDesignerComponent.prototype, "metadataUri", {
        set: function (metadataUri) {
            var _this = this;
            this._metadataUri = metadataUri;
            var fullname = this._metadataUri.substring(this._metadataUri.lastIndexOf('/') + 1);
            var path = this._metadataUri.substring(1, this._metadataUri.lastIndexOf('/'));
            this.lcmService.LoadMetadata(fullname, path).subscribe(function (data) {
                _this.metadataDto = data;
                _this.loadMetadata(_this.metadataDto);
            }, function (error) {
                alert("加载元数据失败。");
            });
        },
        enumerable: true,
        configurable: true
    });
    AifBeCreationRuleDesignerComponent.prototype.ngOnInit = function () {
    };
    AifBeCreationRuleDesignerComponent.prototype.saveMetadata = function () {
        this.saveMetadataService().subscribe(function () {
            alert("保存成功");
        }, function (error) {
            alert("保存失败");
        });
    };
    AifBeCreationRuleDesignerComponent.prototype.saveMetadataService = function () {
        var beCreationRule = JSON.stringify(this.toDesignerBeCreationRule);
        var entity = {};
        entity.Entity = beCreationRule;
        this.metadataDto.content = JSON.stringify(entity);
        return this.lcmService.SaveMetadata(this.metadataDto, this.cache.get("sessionId"));
    };
    AifBeCreationRuleDesignerComponent.prototype.publishMetadata = function () {
        var _this = this;
        this.saveMetadataService().subscribe(function () {
            _this.lcmService.GetProjectInfo(_this.metadataDto.relativePath).subscribe(function (data) {
                _this.toDesignerBeCreationRule.MetadataID = _this.metadataDto.id;
                _this.toDesignerBeCreationRule.MetadataPackageName = data.metadataPackageInfo.name;
                _this.lcmService.GetGspProjInfo(data.projectPath).subscribe(function (data) {
                    _this.toDesignerBeCreationRule.SuName = data.serviceUnitCode;
                    _this.beCreationRuleService.publishBeCreationRule(_this.toDesignerBeCreationRule).subscribe(function () {
                        alert("发布成功");
                    }, function (error) {
                        var errorString = error.error ? error.error.Message : error.statusText;
                        alert("发布失败。\n" + errorString);
                    });
                });
            });
        });
    };
    AifBeCreationRuleDesignerComponent.prototype.unPublishMetadata = function () {
        this.beCreationRuleService.unPublishBeCreationRule(this.metadataDto.id).subscribe(function () {
            alert("撤销发布成功");
        }, function (error) {
            var errorString = error.error ? error.error.Message : error.statusText;
            alert("撤销发布失败。\n" + errorString);
        });
    };
    AifBeCreationRuleDesignerComponent.prototype.loadMetadata = function (dto) {
        this.metadataDto = dto;
        if (this.metadataDto.content && this.metadataDto.content != "") {
            var entity = JSON.parse(this.metadataDto.content);
            if (entity.Entity != "null") {
                this.toDesignerBeCreationRule = JSON.parse(entity.Entity);
            }
            else {
                this.toDesignerBeCreationRule = new __WEBPACK_IMPORTED_MODULE_4__aif_be_creation_rule_entity__["AifBeCreationRuleEntity"]();
            }
            if (this.toDesignerBeCreationRule.Id == null) {
                this.toDesignerBeCreationRule.Id = this.metadataDto.id;
                this.toDesignerBeCreationRule.IsEnabled = true;
                this.toDesignerBeCreationRule.Name = this.metadataDto.name;
            }
        }
    };
    AifBeCreationRuleDesignerComponent.prototype.selectMetadata = function (typeName, isSourceBe) {
        var _this = this;
        var compFactory = this.resolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_3__gsp_lcm_metadata_selector__["SelectMetadataComponent"]);
        var compRef = compFactory.create(this.injector);
        compRef.instance.metadataPath = this.metadataDto.relativePath;
        compRef.instance.typeName = typeName;
        compRef.instance.selectedMetadata.subscribe(function ($event) {
            if (typeName == 'MappingRule') {
                _this.toDesignerBeCreationRule.MappingRuleId = JSON.parse($event.metadata.content).ID;
            }
            else if (typeName == 'GSPBusinessEntity' && isSourceBe == true) {
                _this.toDesignerBeCreationRule.SourceBeMetadataID = $event.metadata.id;
                _this.toDesignerBeCreationRule.SourceBeType = $event.metadata.code;
                _this.toDesignerBeCreationRule.SourceBeMetadataPackageName = $event.packageHeader.name;
                var businessEntity = JSON.parse($event.metadata.content);
                _this.toDesignerBeCreationRule.SourceBeName = businessEntity.MainObject.Name;
            }
            else if (typeName == 'GSPBusinessEntity' && isSourceBe == false) {
                _this.toDesignerBeCreationRule.TargetBeMetadataID = $event.metadata.id;
                _this.toDesignerBeCreationRule.TargetBeType = $event.metadata.code;
                _this.toDesignerBeCreationRule.TargetBeMetadataPackageName = $event.packageHeader.name;
                var businessEntity = JSON.parse($event.metadata.content);
                _this.toDesignerBeCreationRule.TargetBeName = businessEntity.MainObject.Name;
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
    AifBeCreationRuleDesignerComponent.prototype.clearMappingRuleId = function () {
        this.toDesignerBeCreationRule.MappingRuleId = null;
    };
    AifBeCreationRuleDesignerComponent.prototype.clearSourceBeMetadataId = function () {
        this.toDesignerBeCreationRule.SourceBeMetadataID = null;
        this.toDesignerBeCreationRule.SourceBeType = null;
        this.toDesignerBeCreationRule.SourceBeName = null;
        this.toDesignerBeCreationRule.SourceBeMetadataPackageName = null;
    };
    AifBeCreationRuleDesignerComponent.prototype.clearTargetBeMetadataId = function () {
        this.toDesignerBeCreationRule.TargetBeMetadataID = null;
        this.toDesignerBeCreationRule.TargetBeType = null;
        this.toDesignerBeCreationRule.TargetBeName = null;
        this.toDesignerBeCreationRule.TargetBeMetadataPackageName = null;
    };
    AifBeCreationRuleDesignerComponent.prototype.setClearMappingRuleIdable = function (display) {
        if (this.toDesignerBeCreationRule.MappingRuleId != null) {
            this.clearMappingRuleIdable = display;
        }
        else {
            this.clearMappingRuleIdable = false;
        }
    };
    AifBeCreationRuleDesignerComponent.prototype.setClearSourceBeMetadataIdable = function (display) {
        if (this.toDesignerBeCreationRule.SourceBeMetadataID != null) {
            this.clearSourceBeMetadataIdable = display;
        }
        else {
            this.clearSourceBeMetadataIdable = false;
        }
    };
    AifBeCreationRuleDesignerComponent.prototype.setClearTargetBeMetadataIdable = function (display) {
        if (this.toDesignerBeCreationRule.TargetBeMetadataID != null) {
            this.clearTargetBeMetadataIdable = display;
        }
        else {
            this.clearTargetBeMetadataIdable = false;
        }
    };
    AifBeCreationRuleDesignerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-aif-be-creation-rule-designer',
            template: __webpack_require__("./src/packages/aif-be-creation-rule/views/aif-be-creation-rule-designer/aif-be-creation-rule-designer.component.html"),
            styles: [__webpack_require__("./src/packages/aif-be-creation-rule/views/aif-be-creation-rule-designer/aif-be-creation-rule-designer.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__aif_be_creation_rule_service__["AifBeCreationRuleService"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__gsp_lcm_metadata_selector__["GSPMetadataService"], __WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit_services__["CacheService"], __WEBPACK_IMPORTED_MODULE_5__aif_be_creation_rule_service__["AifBeCreationRuleService"],
            __WEBPACK_IMPORTED_MODULE_2__farris_ui__["BsModalService"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], AifBeCreationRuleDesignerComponent);
    return AifBeCreationRuleDesignerComponent;
}());



/***/ }),

/***/ "./src/packages/aif-be-creation-rule/views/aif-be-creation-rule-entity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AifBeCreationRuleEntity", function() { return AifBeCreationRuleEntity; });
var AifBeCreationRuleEntity = (function () {
    function AifBeCreationRuleEntity() {
    }
    return AifBeCreationRuleEntity;
}());



/***/ }),

/***/ "./src/packages/aif-be-creation-rule/views/aif-be-creation-rule.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AifBeCreationRuleModule", function() { return AifBeCreationRuleModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_grid__ = __webpack_require__("./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_buttons__ = __webpack_require__("./node_modules/@progress/kendo-angular-buttons/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_dialog__ = __webpack_require__("./node_modules/@progress/kendo-angular-dialog/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_dropdowns__ = __webpack_require__("./node_modules/@progress/kendo-angular-dropdowns/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__farris_ide_devkit_services__ = __webpack_require__("./node_modules/@farris/ide-devkit/services/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__farris_ide_devkit_services___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__farris_ide_devkit_services__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__farris_ui__ = __webpack_require__("./node_modules/@farris/ui/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__farris_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__farris_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__gsp_lcm_metadata_selector__ = __webpack_require__("./node_modules/@gsp-lcm/metadata-selector/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__gsp_lcm_metadata_selector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__gsp_lcm_metadata_selector__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__aif_be_creation_rule_designer_aif_be_creation_rule_designer_component__ = __webpack_require__("./src/packages/aif-be-creation-rule/views/aif-be-creation-rule-designer/aif-be-creation-rule-designer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AifBeCreationRuleModule = (function () {
    function AifBeCreationRuleModule() {
    }
    AifBeCreationRuleModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["HttpClientModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_grid__["GridModule"],
                __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_buttons__["ButtonsModule"],
                __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_dialog__["WindowModule"],
                __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_dialog__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_dropdowns__["DropDownsModule"],
                __WEBPACK_IMPORTED_MODULE_8__farris_ide_devkit_services__["GSPHttpModule"],
                __WEBPACK_IMPORTED_MODULE_9__farris_ui__["FarrisDialogModule"],
                __WEBPACK_IMPORTED_MODULE_10__gsp_lcm_metadata_selector__["MetadataSelectModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_11__aif_be_creation_rule_designer_aif_be_creation_rule_designer_component__["AifBeCreationRuleDesignerComponent"]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_11__aif_be_creation_rule_designer_aif_be_creation_rule_designer_component__["AifBeCreationRuleDesignerComponent"]]
        })
    ], AifBeCreationRuleModule);
    return AifBeCreationRuleModule;
}());



/***/ }),

/***/ "./src/packages/aif-be-creation-rule/views/aif-be-creation-rule.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AifBeCreationRuleService", function() { return AifBeCreationRuleService; });
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


var AifBeCreationRuleService = (function () {
    function AifBeCreationRuleService(http) {
        this.http = http;
        this.baseUrl = '/api/dev/sys/v1.0/BeCreationRuleEntities';
    }
    AifBeCreationRuleService.prototype.publishBeCreationRule = function (item) {
        return this.http.post(this.baseUrl, item);
    };
    AifBeCreationRuleService.prototype.unPublishBeCreationRule = function (metadataId) {
        var param = {
            "parameters": metadataId
        };
        var url = " " + this.baseUrl + "/UnPublishBeCreationRule";
        return this.http.post(url, param);
    };
    AifBeCreationRuleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit_services__["HttpService"]])
    ], AifBeCreationRuleService);
    return AifBeCreationRuleService;
}());



/***/ }),

/***/ "./src/packages/aif-be-creation-rule/views/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AifBeCreationRulePackageView", function() { return AifBeCreationRulePackageView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__ = __webpack_require__("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aif_be_creation_rule_designer_aif_be_creation_rule_designer_component__ = __webpack_require__("./src/packages/aif-be-creation-rule/views/aif-be-creation-rule-designer/aif-be-creation-rule-designer.component.ts");
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


var AifBeCreationRulePackageView = (function (_super) {
    __extends(AifBeCreationRulePackageView, _super);
    function AifBeCreationRulePackageView(serializedState, cfr, injector) {
        var _this = _super.call(this, serializedState) || this;
        _this.cfr = cfr;
        _this.injector = injector;
        var componentFactory = _this.cfr.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_1__aif_be_creation_rule_designer_aif_be_creation_rule_designer_component__["AifBeCreationRuleDesignerComponent"]);
        _this.element = componentFactory.create(_this.injector);
        return _this;
    }
    return AifBeCreationRulePackageView;
}(__WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__["PackageView"]));



/***/ })

},[]);
//# sourceMappingURL=aif-be-creation-rule-package.module.chunk.js.map