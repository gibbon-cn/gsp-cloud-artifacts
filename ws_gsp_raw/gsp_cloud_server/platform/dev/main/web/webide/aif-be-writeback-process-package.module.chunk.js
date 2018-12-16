webpackJsonp(["aif-be-writeback-process-package.module"],{

/***/ "./src/packages/aif-be-writeback-process/aif-be-writeback-process-package.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AifBeWritebackProcessPackageModule", function() { return AifBeWritebackProcessPackageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_ide_devkit__ = __webpack_require__("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_ide_devkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__farris_ide_devkit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gsp_lcm_metadata_selector__ = __webpack_require__("./node_modules/@gsp-lcm/metadata-selector/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gsp_lcm_metadata_selector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__gsp_lcm_metadata_selector__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__package__ = __webpack_require__("./src/packages/aif-be-writeback-process/package.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_aif_be_writeback_process_module__ = __webpack_require__("./src/packages/aif-be-writeback-process/views/aif-be-writeback-process.module.ts");
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







var AifBeWritebackProcessPackageModule = (function (_super) {
    __extends(AifBeWritebackProcessPackageModule, _super);
    function AifBeWritebackProcessPackageModule(cfr, injector) {
        var _this = _super.call(this) || this;
        _this.cfr = cfr;
        _this.injector = injector;
        return _this;
    }
    AifBeWritebackProcessPackageModule.prototype.initPackage = function (gsp) {
        this.package = new __WEBPACK_IMPORTED_MODULE_4__package__["AifBeWritebackProcessPackage"](gsp, this.cfr, this.injector);
    };
    AifBeWritebackProcessPackageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_5__views_aif_be_writeback_process_module__["AifBeWritebackProcessEntity"],
                __WEBPACK_IMPORTED_MODULE_3__gsp_lcm_metadata_selector__["GSPMetadataServiceModule"].forRoot(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["environment"].SERVER_IP)
            ],
            providers: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], AifBeWritebackProcessPackageModule);
    return AifBeWritebackProcessPackageModule;
}(__WEBPACK_IMPORTED_MODULE_2__farris_ide_devkit__["PackageModule"]));

//# sourceMappingURL=aif-be-writeback-process-package.module.js.map

/***/ }),

/***/ "./src/packages/aif-be-writeback-process/package.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AifBeWritebackProcessPackage", function() { return AifBeWritebackProcessPackage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__ = __webpack_require__("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views__ = __webpack_require__("./src/packages/aif-be-writeback-process/views/index.ts");
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


var AifBeWritebackProcessPackage = (function (_super) {
    __extends(AifBeWritebackProcessPackage, _super);
    function AifBeWritebackProcessPackage(gsp, cfr, injector) {
        var _this = _super.call(this, gsp) || this;
        _this.cfr = cfr;
        _this.injector = injector;
        return _this;
    }
    AifBeWritebackProcessPackage.prototype.activate = function (state) {
        var _this = this;
        this.gsp.workspace.addOpener(function (uri) { return _this.openBeWritebackProcess(uri); });
    };
    AifBeWritebackProcessPackage.prototype.openBeWritebackProcess = function (uri) {
        if (uri.endsWith('.aifwp')) {
            var pkgView_1 = new __WEBPACK_IMPORTED_MODULE_1__views__["AifBeWritebackProcessPackageView"]({}, this.cfr, this.injector);
            var currentElement = pkgView_1.getElement().instance;
            currentElement.metadataUri = uri;
            return {
                getTitle: function () { return uri.substring(uri.lastIndexOf('/') + 1); },
                getElement: function () { return pkgView_1.getElement(); }
            };
        }
    };
    return AifBeWritebackProcessPackage;
}(__WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__["Package"]));



/***/ }),

/***/ "./src/packages/aif-be-writeback-process/views/aif-be-writeback-process-designer/aif-be-writeback-process-designer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n}\r\n\r\n#bemain .k-content {\r\n    padding: 0 !important;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n}\r\n\r\n.calc-rules.createNav {\r\n    background: #e8edf2;\r\n    height: 40px;\r\n}\r\n\r\n.calc-rules.createNav .stepTitle {\r\n    padding: 0px 10px;\r\n    color: #666666;\r\n    line-height: 40px;\r\n    cursor: pointer;\r\n    font-size: 0.875rem;\r\n}\r\n\r\n.calc-rules.createNav .stepTitle.active {\r\n    color: #FFFFFF;\r\n    background-color: #0072c6 !important;\r\n}\r\n\r\n.calc-rules.createNav .stepTitle:not(:first-child).active {\r\n    margin-left: -17px;\r\n    padding-left: 25px;\r\n}\r\n\r\n.calc-rules.createNav .stepTitle.disable {\r\n    color: #cdcdcf;\r\n}\r\n\r\n.calc-rules .triangle_border_right {\r\n    width: 0;\r\n    height: 0;\r\n    border-width: 20px 0 20px 18px;\r\n    border-style: solid;\r\n    border-color: transparent transparent transparent #cccccc;\r\n    position: relative;\r\n}\r\n\r\n.calc-rules .triangle_border_right span {\r\n    display: block;\r\n    width: 0;\r\n    height: 0;\r\n    border-width: 20px 0px 20px 18px;\r\n    border-style: solid;\r\n    border-color: transparent transparent transparent #e8edf2;\r\n    position: absolute;\r\n    top: -20px;\r\n    left: -20px;\r\n}\r\n\r\n.calc-rules .triangle_border_right.active {\r\n    width: 0;\r\n    height: 0;\r\n    border-width: 20px 0 20px 20px;\r\n    border-color: transparent transparent transparent #e8edf2;\r\n}\r\n\r\n.calc-rules .triangle_border_right.active span {\r\n    border-width: 20px 0 20px 20px;\r\n    border-color: transparent transparent transparent #0072c6;\r\n}\r\n\r\n#beFrameObjTab {\r\n    position: absolute;\r\n    top: 3em;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n\r\n#beFrameBeTab {\r\n    position: absolute;\r\n    top: 0em;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n\r\n.aifHeader{\r\n    background-color:#C0C0C0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/aif-be-writeback-process/views/aif-be-writeback-process-designer/aif-be-writeback-process-designer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-column\" style=\"flex:1;\">\r\n  <div class=\"border-bottom\">\r\n    <button kendoButton [look]=\"'bare'\" (click)=\"saveMetadata()\">保存</button>\r\n    <button kendoButton [look]=\"'bare'\" (click)=\"publishMetadata()\">发布</button>\r\n    <button kendoButton [look]=\"'bare'\" (click)=\"unPublishMetadata()\">撤销发布</button>\r\n  </div>\r\n\r\n  <div>\r\n    <h5 class=\"float-left aifHeader\">回写流程</h5>\r\n  </div>\r\n\r\n  <div class=\"flex-auto\" style=\"overflow-y:auto;\" id=\"attachmentParent\">\r\n    <form class=\"k-form\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-md-6 pb-1\">\r\n          <label class=\"k-form-field\" for=\"id\">\r\n            <span>\r\n              ID\r\n              <span style=\"color:red\">*</span>\r\n            </span>\r\n            <input class=\"k-textbox w-100\" readonly required placeholder=\"\" name=\"id\" [(ngModel)]=\"toDesignerBeWritebackProcess&&toDesignerBeWritebackProcess.Id\"\r\n              #ID=\"ngModel\">\r\n            <div [hidden]=\"ID.valid || ID.pristine\" class=\"alert-danger\">\r\n              \"ID\"不能为空\r\n            </div>\r\n          </label>\r\n\r\n          <label class=\"k-form-field \" for=\"name\">\r\n            <span>名称</span>\r\n            <input class=\"k-textbox w-100\" placeholder=\"\" name=\"name\" [(ngModel)]=\"toDesignerBeWritebackProcess&&toDesignerBeWritebackProcess.Name\">\r\n          </label>\r\n\r\n          <label class=\"k-form-field\" for=\"isEnabled\">\r\n            <div class=\"d-flex mr-5\">\r\n              <br/>\r\n              <input type=\"checkbox\" id=\"isEnabled\" class=\"k-checkbox\" name=\"isEnabled\" [(ngModel)]=\"toDesignerBeWritebackProcess&&toDesignerBeWritebackProcess.IsEnabled\">\r\n              <label class=\"k-checkbox-label\" for=\"isEnabled\">是否启用</label>\r\n              <br/>\r\n            </div>\r\n          </label>\r\n\r\n          <label class=\"k-form-field\" for=\"beWritebackRuleId\">\r\n            <span>\r\n              回写规则ID\r\n              <span style=\"color:red\">*</span>\r\n            </span>\r\n            <div class=\"d-flex\" (mouseenter)=\"setClearBeWritebackRuleIdable(true)\" (mouseleave)=\"setClearBeWritebackRuleIdable(false)\">\r\n              <span style=\"opacity: 1; width: 100%; position: relative;\">\r\n                <input class=\"k-textbox w-100\" readonly required placeholder=\"\" name=\"beWritebackRuleId\" [(ngModel)]=\"toDesignerBeWritebackProcess&&toDesignerBeWritebackProcess.BeWritebackRuleId\"\r\n                  #BeWritebackRuleId=\"ngModel\">\r\n                <span *ngIf=\"clearBeWritebackRuleIdable\" style=\"position: absolute; right: 4px; top: 2px; color:red;font-weight: bold\" (click)=\"clearBeWritebackRuleId()\">x</span>\r\n              </span>\r\n\r\n              <button class=\"k-button k-bare\" type=\"button\" (click)=\"selectMetadata('AifBeWritebackRule')\">\r\n                <i class=\"material-icons align-middle\" style=\" font-size: 18px;\">filter_none</i>\r\n              </button>\r\n            </div>\r\n\r\n            <div [hidden]=\"BeWritebackRuleId.valid || BeWritebackRuleId.pristine\" class=\"alert-danger\">\r\n              \"回写规则ID\"不能为空\r\n            </div>\r\n          </label>\r\n\r\n          <label class=\"k-form-field\" for=\"description\">\r\n            <span>描述</span>\r\n            <textarea kendoTextArea class=\"form-control\" placeholder=\"\" name=\"description\" [(ngModel)]=\"toDesignerBeWritebackProcess&&toDesignerBeWritebackProcess.Description\"></textarea>\r\n          </label>\r\n        </div>\r\n\r\n        <div class=\"col-sm-12 col-md-6 pb-1\">\r\n          <label class=\"k-form-field\" for=\"sourceBeType\">\r\n            <span>\r\n              来源BE类型\r\n              <span style=\"color:red\">*</span>\r\n            </span>\r\n            <div class=\"d-flex\" (mouseenter)=\"setClearSourceBeTypeable(true)\" (mouseleave)=\"setClearSourceBeTypeable(false)\">\r\n              <span style=\"opacity: 1; width: 100%; position: relative;\">\r\n                <input class=\"k-textbox w-100\" readonly required placeholder=\"\" name=\"sourceBeType\" [(ngModel)]=\"toDesignerBeWritebackProcess&&toDesignerBeWritebackProcess.SourceBeType\"\r\n                  #SourceBeType=\"ngModel\">\r\n                <span *ngIf=\"clearSourceBeTypeable\" style=\"position: absolute; right: 4px; top: 2px; color:red;font-weight: bold\" (click)=\"clearSourceBeType()\">x</span>\r\n              </span>\r\n\r\n              <button class=\"k-button k-bare\" type=\"button\" (click)=\"selectMetadata('GSPBusinessEntity',true)\">\r\n                <i class=\"material-icons align-middle\" style=\" font-size: 18px;\">filter_none</i>\r\n              </button>\r\n            </div>\r\n\r\n            <div [hidden]=\"SourceBeType.valid || SourceBeType.pristine\" class=\"alert-danger\">\r\n              \"来源BE类型\"不能为空\r\n            </div>\r\n          </label>\r\n\r\n          <label class=\"k-form-field \" for=\"beEventId\">\r\n            <span>\r\n              来源业务事件编号\r\n              <span style=\"color:red\">*</span>\r\n            </span>\r\n            <div class=\"d-flex\" (mouseenter)=\"setClearBeEventIdable(true)\" (mouseleave)=\"setClearBeEventIdable(false)\">\r\n              <span style=\"opacity: 1; width: 100%; position: relative;\">\r\n                <input class=\"k-textbox w-100\" readonly required placeholder=\"\" name=\"beEventId\" [(ngModel)]=\"toDesignerBeWritebackProcess&&toDesignerBeWritebackProcess.BeEventId\"\r\n                  #BeEventId=\"ngModel\">\r\n                <span *ngIf=\"clearBeEventIdable\" style=\"position: absolute; right: 4px; top: 2px; color:red;font-weight: bold\" (click)=\"clearBeEventId()\">x</span>\r\n              </span>\r\n\r\n              <button class=\"k-button k-bare\" type=\"button\" (click)=\"selectMetadata('AifBeEvent')\">\r\n                <i class=\"material-icons align-middle\" style=\" font-size: 18px;\">filter_none</i>\r\n              </button>\r\n            </div>\r\n\r\n            <div [hidden]=\"BeEventId.valid || BeEventId.pristine\" class=\"alert-danger\">\r\n              \"来源业务事件编号\"不能为空\r\n            </div>\r\n          </label>\r\n\r\n          <label class=\"k-form-field\" for=\"targetBeType\">\r\n            <span>\r\n              目标BE类型\r\n              <span style=\"color:red\">*</span>\r\n            </span>\r\n            <div class=\"d-flex\" (mouseenter)=\"setClearTargetBeTypeable(true)\" (mouseleave)=\"setClearTargetBeTypeable(false)\">\r\n              <span style=\"opacity: 1; width: 100%; position: relative;\">\r\n                <input class=\"k-textbox w-100\" readonly required placeholder=\"\" name=\"targetBeType\" [(ngModel)]=\"toDesignerBeWritebackProcess&&toDesignerBeWritebackProcess.TargetBeType\"\r\n                  #TargetBeType=\"ngModel\">\r\n                <span *ngIf=\"clearTargetBeTypeable\" style=\"position: absolute; right: 4px; top: 2px; color:red;font-weight: bold\" (click)=\"clearTargetBeType()\">x</span>\r\n              </span>\r\n\r\n              <button class=\"k-button k-bare\" type=\"button\" (click)=\"selectMetadata('GSPBusinessEntity',false)\">\r\n                <i class=\"material-icons align-middle\" style=\" font-size: 18px;\">filter_none</i>\r\n              </button>\r\n            </div>\r\n\r\n            <div [hidden]=\"TargetBeType.valid || TargetBeType.pristine\" class=\"alert-danger\">\r\n              \"目标BE类型\"不能为空\r\n            </div>\r\n          </label>\r\n\r\n          <label class=\"k-form-field \" for=\"beActionId\">\r\n            <span>\r\n              目标业务动作编号\r\n              <span style=\"color:red\">*</span>\r\n            </span>\r\n            <div class=\"d-flex\" (mouseenter)=\"setClearBeActionIdable(true)\" (mouseleave)=\"setClearBeActionIdable(false)\">\r\n              <span style=\"opacity: 1; width: 100%; position: relative;\">\r\n                <input class=\"k-textbox w-100\" readonly required placeholder=\"\" name=\"beActionId\" [(ngModel)]=\"toDesignerBeWritebackProcess&&toDesignerBeWritebackProcess.BeActionId\"\r\n                  #BeActionId=\"ngModel\">\r\n                <span *ngIf=\"clearBeActionIdable\" style=\"position: absolute; right: 4px; top: 2px; color:red;font-weight: bold\" (click)=\"clearBeActionId()\">x</span>\r\n              </span>\r\n\r\n              <button class=\"k-button k-bare\" type=\"button\" (click)=\"selectMetadata('AifBeAction')\">\r\n                <i class=\"material-icons align-middle\" style=\" font-size: 18px;\">filter_none</i>\r\n              </button>\r\n            </div>\r\n\r\n            <div [hidden]=\"BeActionId.valid || BeActionId.pristine\" class=\"alert-danger\">\r\n              \"目标业务动作编号\"不能为空\r\n            </div>\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/packages/aif-be-writeback-process/views/aif-be-writeback-process-designer/aif-be-writeback-process-designer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AifBeWritebackProcessDesignerComponent", function() { return AifBeWritebackProcessDesignerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit_services__ = __webpack_require__("./node_modules/@farris/ide-devkit/services/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit_services___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit_services__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_ui__ = __webpack_require__("./node_modules/@farris/ui/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__farris_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gsp_lcm_metadata_selector__ = __webpack_require__("./node_modules/@gsp-lcm/metadata-selector/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gsp_lcm_metadata_selector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__gsp_lcm_metadata_selector__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__aif_be_writeback_process_entity__ = __webpack_require__("./src/packages/aif-be-writeback-process/views/aif-be-writeback-process-entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__aif_be_writeback_process_service__ = __webpack_require__("./src/packages/aif-be-writeback-process/views/aif-be-writeback-process.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AifBeWritebackProcessDesignerComponent = (function () {
    function AifBeWritebackProcessDesignerComponent(lcmService, cache, beWritebackProcessService, modalService, resolver, injector) {
        this.lcmService = lcmService;
        this.cache = cache;
        this.beWritebackProcessService = beWritebackProcessService;
        this.modalService = modalService;
        this.resolver = resolver;
        this.injector = injector;
        this.title = 'app';
        this.clearBeWritebackRuleIdable = false;
        this.clearSourceBeTypeable = false;
        this.clearBeEventIdable = false;
        this.clearTargetBeTypeable = false;
        this.clearBeActionIdable = false;
    }
    Object.defineProperty(AifBeWritebackProcessDesignerComponent.prototype, "metadataUri", {
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
    AifBeWritebackProcessDesignerComponent.prototype.ngOnInit = function () {
    };
    AifBeWritebackProcessDesignerComponent.prototype.saveMetadata = function () {
        this.saveMetadataService().subscribe(function () {
            alert("保存成功");
        }, function (error) {
            alert("保存失败");
        });
    };
    AifBeWritebackProcessDesignerComponent.prototype.saveMetadataService = function () {
        var beWritebackProcess = JSON.stringify(this.toDesignerBeWritebackProcess);
        var entity = {};
        entity.Entity = beWritebackProcess;
        this.metadataDto.content = JSON.stringify(entity);
        return this.lcmService.SaveMetadata(this.metadataDto, this.cache.get("sessionId"));
    };
    AifBeWritebackProcessDesignerComponent.prototype.publishMetadata = function () {
        var _this = this;
        this.saveMetadataService().subscribe(function () {
            _this.lcmService.GetProjectInfo(_this.metadataDto.relativePath).subscribe(function (data) {
                _this.toDesignerBeWritebackProcess.MetadataID = _this.metadataDto.id;
                _this.toDesignerBeWritebackProcess.MetadataPackageName = data.metadataPackageInfo.name;
                _this.lcmService.GetGspProjInfo(data.projectPath).subscribe(function (data) {
                    _this.toDesignerBeWritebackProcess.SuName = data.serviceUnitCode;
                    _this.beWritebackProcessService.publishBeWritebackProcess(_this.toDesignerBeWritebackProcess).subscribe(function () {
                        alert("发布成功");
                    }, function (error) {
                        var errorString = error.error ? error.error.Message : error.statusText;
                        alert("发布失败。\n" + errorString);
                    });
                });
            });
        });
    };
    AifBeWritebackProcessDesignerComponent.prototype.unPublishMetadata = function () {
        this.beWritebackProcessService.unPublishBeWritebackProcess(this.metadataDto.id).subscribe(function () {
            alert("撤销发布成功");
        }, function (error) {
            var errorString = error.error ? error.error.Message : error.statusText;
            alert("撤销发布失败。\n" + errorString);
        });
    };
    AifBeWritebackProcessDesignerComponent.prototype.loadMetadata = function (dto) {
        this.metadataDto = dto;
        if (this.metadataDto.content && this.metadataDto.content != "") {
            var entity = JSON.parse(this.metadataDto.content);
            if (entity.Entity != "null") {
                this.toDesignerBeWritebackProcess = JSON.parse(entity.Entity);
            }
            else {
                this.toDesignerBeWritebackProcess = new __WEBPACK_IMPORTED_MODULE_4__aif_be_writeback_process_entity__["AifBeWritebackProcessEntity"]();
            }
            if (this.toDesignerBeWritebackProcess.Id == null) {
                this.toDesignerBeWritebackProcess.Id = this.metadataDto.id;
                this.toDesignerBeWritebackProcess.IsEnabled = true;
                this.toDesignerBeWritebackProcess.Name = this.metadataDto.name;
            }
        }
    };
    AifBeWritebackProcessDesignerComponent.prototype.selectMetadata = function (typeName, isSourceBe) {
        var _this = this;
        var compFactory = this.resolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_3__gsp_lcm_metadata_selector__["SelectMetadataComponent"]);
        var compRef = compFactory.create(this.injector);
        compRef.instance.metadataPath = this.metadataDto.relativePath;
        compRef.instance.typeName = typeName;
        compRef.instance.selectedMetadata.subscribe(function ($event) {
            if (typeName == 'AifBeEvent') {
                var beEventEntity = JSON.parse($event.metadata.content);
                _this.toDesignerBeWritebackProcess.BeEventId = JSON.parse(beEventEntity.Entity).Id;
            }
            else if (typeName == 'AifBeAction') {
                var beActionEntity = JSON.parse($event.metadata.content);
                _this.toDesignerBeWritebackProcess.BeActionId = JSON.parse(beActionEntity.Entity).Id;
            }
            else if (typeName == 'AifBeWritebackRule') {
                var beCreationRuleEntity = JSON.parse($event.metadata.content);
                _this.toDesignerBeWritebackProcess.BeWritebackRuleId = JSON.parse(beCreationRuleEntity.Entity).Id;
            }
            else if (typeName == 'GSPBusinessEntity' && isSourceBe == true) {
                _this.toDesignerBeWritebackProcess.SourceBeType = $event.metadata.code;
            }
            else if (typeName == 'GSPBusinessEntity' && isSourceBe == false) {
                _this.toDesignerBeWritebackProcess.TargetBeType = $event.metadata.code;
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
    AifBeWritebackProcessDesignerComponent.prototype.clearBeWritebackRuleId = function () {
        this.toDesignerBeWritebackProcess.BeWritebackRuleId = null;
    };
    AifBeWritebackProcessDesignerComponent.prototype.clearSourceBeType = function () {
        this.toDesignerBeWritebackProcess.SourceBeType = null;
    };
    AifBeWritebackProcessDesignerComponent.prototype.clearBeEventId = function () {
        this.toDesignerBeWritebackProcess.BeEventId = null;
    };
    AifBeWritebackProcessDesignerComponent.prototype.clearTargetBeType = function () {
        this.toDesignerBeWritebackProcess.TargetBeType = null;
    };
    AifBeWritebackProcessDesignerComponent.prototype.clearBeActionId = function () {
        this.toDesignerBeWritebackProcess.BeActionId = null;
    };
    AifBeWritebackProcessDesignerComponent.prototype.setClearBeWritebackRuleIdable = function (display) {
        if (this.toDesignerBeWritebackProcess.BeWritebackRuleId != null) {
            this.clearBeWritebackRuleIdable = display;
        }
        else {
            this.clearBeWritebackRuleIdable = false;
        }
    };
    AifBeWritebackProcessDesignerComponent.prototype.setClearSourceBeTypeable = function (display) {
        if (this.toDesignerBeWritebackProcess.SourceBeType != null) {
            this.clearSourceBeTypeable = display;
        }
        else {
            this.clearSourceBeTypeable = false;
        }
    };
    AifBeWritebackProcessDesignerComponent.prototype.setClearBeEventIdable = function (display) {
        if (this.toDesignerBeWritebackProcess.BeEventId != null) {
            this.clearBeEventIdable = display;
        }
        else {
            this.clearBeEventIdable = false;
        }
    };
    AifBeWritebackProcessDesignerComponent.prototype.setClearTargetBeTypeable = function (display) {
        if (this.toDesignerBeWritebackProcess.TargetBeType != null) {
            this.clearTargetBeTypeable = display;
        }
        else {
            this.clearTargetBeTypeable = false;
        }
    };
    AifBeWritebackProcessDesignerComponent.prototype.setClearBeActionIdable = function (display) {
        if (this.toDesignerBeWritebackProcess.BeActionId != null) {
            this.clearBeActionIdable = display;
        }
        else {
            this.clearBeActionIdable = false;
        }
    };
    AifBeWritebackProcessDesignerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-aif-be-writeback-process-designer',
            template: __webpack_require__("./src/packages/aif-be-writeback-process/views/aif-be-writeback-process-designer/aif-be-writeback-process-designer.component.html"),
            styles: [__webpack_require__("./src/packages/aif-be-writeback-process/views/aif-be-writeback-process-designer/aif-be-writeback-process-designer.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__aif_be_writeback_process_service__["AifBeWritebackProcessService"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__gsp_lcm_metadata_selector__["GSPMetadataService"], __WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit_services__["CacheService"], __WEBPACK_IMPORTED_MODULE_5__aif_be_writeback_process_service__["AifBeWritebackProcessService"],
            __WEBPACK_IMPORTED_MODULE_2__farris_ui__["BsModalService"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], AifBeWritebackProcessDesignerComponent);
    return AifBeWritebackProcessDesignerComponent;
}());



/***/ }),

/***/ "./src/packages/aif-be-writeback-process/views/aif-be-writeback-process-entity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AifBeWritebackProcessEntity", function() { return AifBeWritebackProcessEntity; });
var AifBeWritebackProcessEntity = (function () {
    function AifBeWritebackProcessEntity() {
    }
    return AifBeWritebackProcessEntity;
}());



/***/ }),

/***/ "./src/packages/aif-be-writeback-process/views/aif-be-writeback-process.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AifBeWritebackProcessEntity", function() { return AifBeWritebackProcessEntity; });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__aif_be_writeback_process_designer_aif_be_writeback_process_designer_component__ = __webpack_require__("./src/packages/aif-be-writeback-process/views/aif-be-writeback-process-designer/aif-be-writeback-process-designer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AifBeWritebackProcessEntity = (function () {
    function AifBeWritebackProcessEntity() {
    }
    AifBeWritebackProcessEntity = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["HttpClientModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_buttons__["ButtonsModule"],
                __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_grid__["GridModule"],
                __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_dialog__["WindowModule"],
                __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_dialog__["DialogsModule"],
                __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_dropdowns__["DropDownsModule"],
                __WEBPACK_IMPORTED_MODULE_8__farris_ide_devkit_services__["GSPHttpModule"],
                __WEBPACK_IMPORTED_MODULE_9__farris_ui__["FarrisDialogModule"],
                __WEBPACK_IMPORTED_MODULE_10__gsp_lcm_metadata_selector__["MetadataSelectModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_11__aif_be_writeback_process_designer_aif_be_writeback_process_designer_component__["AifBeWritebackProcessDesignerComponent"]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_11__aif_be_writeback_process_designer_aif_be_writeback_process_designer_component__["AifBeWritebackProcessDesignerComponent"]]
        })
    ], AifBeWritebackProcessEntity);
    return AifBeWritebackProcessEntity;
}());



/***/ }),

/***/ "./src/packages/aif-be-writeback-process/views/aif-be-writeback-process.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AifBeWritebackProcessService", function() { return AifBeWritebackProcessService; });
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


var AifBeWritebackProcessService = (function () {
    function AifBeWritebackProcessService(http) {
        this.http = http;
        this.baseUrl = '/api/dev/sys/v1.0/BeWritebackProcessEntities';
    }
    AifBeWritebackProcessService.prototype.publishBeWritebackProcess = function (item) {
        return this.http.post(this.baseUrl, item);
    };
    AifBeWritebackProcessService.prototype.unPublishBeWritebackProcess = function (metadataId) {
        var param = {
            "parameters": metadataId
        };
        var url = " " + this.baseUrl + "/UnPublishBeWritebackProcess";
        return this.http.post(url, param);
    };
    AifBeWritebackProcessService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit_services__["HttpService"]])
    ], AifBeWritebackProcessService);
    return AifBeWritebackProcessService;
}());



/***/ }),

/***/ "./src/packages/aif-be-writeback-process/views/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AifBeWritebackProcessPackageView", function() { return AifBeWritebackProcessPackageView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__ = __webpack_require__("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aif_be_writeback_process_designer_aif_be_writeback_process_designer_component__ = __webpack_require__("./src/packages/aif-be-writeback-process/views/aif-be-writeback-process-designer/aif-be-writeback-process-designer.component.ts");
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


var AifBeWritebackProcessPackageView = (function (_super) {
    __extends(AifBeWritebackProcessPackageView, _super);
    function AifBeWritebackProcessPackageView(serializedState, cfr, injector) {
        var _this = _super.call(this, serializedState) || this;
        _this.cfr = cfr;
        _this.injector = injector;
        var componentFactory = _this.cfr.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_1__aif_be_writeback_process_designer_aif_be_writeback_process_designer_component__["AifBeWritebackProcessDesignerComponent"]);
        _this.element = componentFactory.create(_this.injector);
        return _this;
    }
    return AifBeWritebackProcessPackageView;
}(__WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__["PackageView"]));



/***/ })

},[]);
//# sourceMappingURL=aif-be-writeback-process-package.module.chunk.js.map