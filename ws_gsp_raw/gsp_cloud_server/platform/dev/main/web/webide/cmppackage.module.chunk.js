webpackJsonp(["cmppackage.module"],{

/***/ "./node_modules/@progress/kendo-angular-grid/dist/es2015/utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_merge__ = __webpack_require__("./node_modules/rxjs/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__);



/**
 * @hidden
 */
const isPresent = (value) => value !== null && value !== undefined;
/* unused harmony export isPresent */

/**
 * @hidden
 */
const isBlank = (value) => value === null || value === undefined;
/* unused harmony export isBlank */

/**
 * @hidden
 */
const isArray = (value) => Array.isArray(value);
/* unused harmony export isArray */

/**
 * @hidden
 */
const isTruthy = (value) => !!value;
/* unused harmony export isTruthy */

/**
 * @hidden
 */
const isNullOrEmptyString = (value) => isBlank(value) || (value.trim && value.trim().length === 0);
/* harmony export (immutable) */ __webpack_exports__["isNullOrEmptyString"] = isNullOrEmptyString;

/**
 * @hidden
 */
const isChanged = (propertyName, changes, skipFirstChange = true) => (changes[propertyName] && (!changes[propertyName].isFirstChange() || !skipFirstChange) &&
    changes[propertyName].previousValue !== changes[propertyName].currentValue);
/* unused harmony export isChanged */

/**
 * @hidden
 */
const anyChanged = (propertyNames, changes, skipFirstChange = true) => propertyNames.some(name => isChanged(name, changes, skipFirstChange));
/* unused harmony export anyChanged */

/**
 * @hidden
 */
const observe = (list) => Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_merge__["merge"])(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])(list), list.changes);
/* unused harmony export observe */

/**
 * @hidden
 */
const isUniversal = () => typeof document === 'undefined';
/* unused harmony export isUniversal */

/**
 * @hidden
 */
const extractFormat = (format) => {
    if (!isNullOrEmptyString(format) && format.startsWith('{0:')) {
        return format.slice(3, format.length - 1);
    }
    return format;
};
/* unused harmony export extractFormat */

/**
 * @hidden
 */
const not = (fn) => (...args) => !fn.apply(null, args);
/* unused harmony export not */

/**
 * @hidden
 */
const or = (...conditions) => (value) => conditions.reduce((acc, x) => acc || x(value), false);
/* unused harmony export or */

/**
 * @hidden
 */
const and = (...conditions) => (value) => conditions.reduce((acc, x) => acc && x(value), true);
/* unused harmony export and */

/**
 * @hidden
 */
const Skip = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]("Skip");
/* unused harmony export Skip */
 // tslint:disable-line:variable-name
/**
 * @hidden
 */
const guid = () => {
    let id = "";
    let i;
    let random;
    for (i = 0; i < 32; i++) {
        random = Math.random() * 16 | 0; // tslint:disable-line:no-bitwise
        if (i === 8 || i === 12 || i === 16 || i === 20) {
            id += "-";
        }
        // tslint:disable-next-line:no-bitwise
        id += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16);
    }
    return id;
};
/* unused harmony export guid */



/***/ }),

/***/ "./src/packages/cmpdesigner-frame/cmppackage.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmpDesignerPackageModule", function() { return CmpDesignerPackageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit__ = __webpack_require__("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__package__ = __webpack_require__("./src/packages/cmpdesigner-frame/package.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_cmp_designer_frame_cmp_designer_frame_module__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/cmp-designer-frame.module.ts");
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





var CmpDesignerPackageModule = (function (_super) {
    __extends(CmpDesignerPackageModule, _super);
    function CmpDesignerPackageModule(cfr, injector) {
        var _this = _super.call(this) || this;
        _this.cfr = cfr;
        _this.injector = injector;
        return _this;
    }
    CmpDesignerPackageModule.prototype.initPackage = function (gsp) {
        this.package = new __WEBPACK_IMPORTED_MODULE_2__package__["CmpDesignerPackage"](gsp, this.cfr, this.injector);
    };
    CmpDesignerPackageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__views_cmp_designer_frame_cmp_designer_frame_module__["CmpDesignerFrameModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"]
            ],
            providers: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], CmpDesignerPackageModule);
    return CmpDesignerPackageModule;
}(__WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit__["PackageModule"]));

//# sourceMappingURL=cmppackage.module.js.map

/***/ }),

/***/ "./src/packages/cmpdesigner-frame/package.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmpDesignerPackage", function() { return CmpDesignerPackage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__ = __webpack_require__("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/index.ts");
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


var CmpDesignerPackage = (function (_super) {
    __extends(CmpDesignerPackage, _super);
    function CmpDesignerPackage(gsp, cfr, injector) {
        var _this = _super.call(this, gsp) || this;
        _this.cfr = cfr;
        _this.injector = injector;
        return _this;
    }
    CmpDesignerPackage.prototype.activate = function (state) {
        var _this = this;
        this.gsp.workspace.addOpener(function (uri) { return _this.openCmp(uri); });
    };
    /**
     * 打开构件设计器
     * @param uri URI路径
     */
    CmpDesignerPackage.prototype.openCmp = function (uri) {
        if (uri.endsWith('.beCmp') || uri.endsWith('.beMgrCmp') || uri.endsWith('.beDtmCmp')
            || uri.endsWith('.beValCmp') || uri.endsWith('.vmCmp') || uri.endsWith('.udtValCmp') || uri.endsWith('.udtDtmCmp')) {
            var pkgView_1 = new __WEBPACK_IMPORTED_MODULE_1__views__["CmpDesignerPackageView"]({}, this.cfr, this.injector);
            var currentElement_1 = pkgView_1.getElement().instance;
            currentElement_1.metadataUri = uri;
            // 这里需要处理uri，title应返回元数据名称，
            return {
                getTitle: function () { return currentElement_1.getFileNameFromUri(uri); },
                getElement: function () { return pkgView_1.getElement(); }
            };
        }
    };
    return CmpDesignerPackage;
}(__WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__["Package"]));



/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/cmp-designer-frame.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/cmp-designer-frame.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-column\" style=\"flex:1;\">\r\n    <div class=\"border-bottom\">\r\n        <button kendoButton [look]=\"'bare'\" (click)=\"saveMetadata()\">保存</button>\r\n        <button kendoButton [look]=\"'bare'\" (click)=\"reloadMetadata()\">撤销</button>\r\n        <!-- <button kendoButton [look]=\"'bare'\" (click)=\"publishCmp()\">发布</button> -->\r\n    </div>\r\n    <div *ngIf=\"component\" id=\"component\" class=\"d-flex\" style=\"flex:1;\">\r\n        <app-component-factory [component]=\"component\"></app-component-factory>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/cmp-designer-frame.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmpDesignerFrameComponent", function() { return CmpDesignerFrameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_cmp_reference__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/cmp-reference.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_libs_GspComponent_src_CmpMetadataContent__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/CmpMetadataContent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_libs_const_src_CmpTypeConst__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/const/src/CmpTypeConst.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_cmp_publish_service__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/cmp-publish.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_libs_GspComponent_src_BEComponent_BEValidation__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/BEComponent/BEValidation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_libs_GspComponent_src_BEMgrComponent_BEMgrValidation__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/BEMgrComponent/BEMgrValidation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_libs_GspComponent_src_DeterminationComponent_DtmValidation__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/DeterminationComponent/DtmValidation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_libs_GspComponent_src_ValidationComponent_VldValidation__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/ValidationComponent/VldValidation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__service_libs_GspComponent_src_VMComponent_VMValidation__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/VMComponent/VMValidation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__farris_ide_devkit_services__ = __webpack_require__("./node_modules/@farris/ide-devkit/services/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__farris_ide_devkit_services___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__farris_ide_devkit_services__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__service_libs_GspComponent_src_UDTDtmComponent_UDTDtmValidation__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/UDTDtmComponent/UDTDtmValidation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__service_libs_GspComponent_src_UDTValidComponent_UDTValidValidation__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/UDTValidComponent/UDTValidValidation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var CmpDesignerFrameComponent = (function () {
    function CmpDesignerFrameComponent(lcmService, cmpPublishService, cache) {
        this.lcmService = lcmService;
        this.cmpPublishService = cmpPublishService;
        this.cache = cache;
        this.sessionId = this.cache.get('sessionId');
        /**
         * 异常堆栈窗口是否显示
         */
        this.showErrorStackWindow = false;
        this.errorToken = '#GSPCmpError#';
    }
    CmpDesignerFrameComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(CmpDesignerFrameComponent.prototype, "metadataUri", {
        /**
         * 根据传入的uri加载构件元数据
         */
        set: function (uri) {
            var _this = this;
            var fileName = this.getFileNameFromUri(uri);
            var path = this.getPathFromUri(uri);
            this.lcmService.LoadMetadata(fileName, path).subscribe(function (data) {
                _this._metadataContent = data;
                _this.loadCmp(data);
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 截取文件名
     * @param uri
     */
    CmpDesignerFrameComponent.prototype.getFileNameFromUri = function (uri) {
        var s = uri.split('/');
        return s[s.length - 1];
    };
    /**
     * 截取地址
     * @param uri
     */
    CmpDesignerFrameComponent.prototype.getPathFromUri = function (uri) {
        return uri.substring(1, uri.lastIndexOf('/'));
    };
    Object.defineProperty(CmpDesignerFrameComponent.prototype, "metadataContent", {
        /**
         * Set构件元数据
         */
        set: function (metadataContent) {
            this._metadataContent = metadataContent;
            this.loadCmp(metadataContent);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 加载构件元数据信息到构件设计器
     * @param dto 从构件元数据中读取到的构件元数据信息
     */
    CmpDesignerFrameComponent.prototype.loadCmp = function (dto) {
        // 校验
        if (Object(__WEBPACK_IMPORTED_MODULE_2_util__["isNullOrUndefined"])(dto) || Object(__WEBPACK_IMPORTED_MODULE_2_util__["isNullOrUndefined"])(dto.content)) {
            this.clearData();
            return;
        }
        __WEBPACK_IMPORTED_MODULE_1__service_cmp_reference__["HttpUrlConst"].currentPath = dto.relativePath;
        this.cmpMetadataContent = new __WEBPACK_IMPORTED_MODULE_3__service_libs_GspComponent_src_CmpMetadataContent__["CmpMetadataContent"]();
        this.cmpMetadataContent.Content = JSON.parse(dto.content);
        this.cmpMetadataContent.Type = this.cmpMetadataContent.Content.ComponentType;
        switch (this.cmpMetadataContent.Type) {
            case __WEBPACK_IMPORTED_MODULE_4__service_libs_const_src_CmpTypeConst__["CmpTypeConst"].BEMgrCmpType:
                this.component = this.cmpMetadataContent.Content;
                break;
            case __WEBPACK_IMPORTED_MODULE_4__service_libs_const_src_CmpTypeConst__["CmpTypeConst"].BECmpType:
                this.component = this.cmpMetadataContent.Content;
                break;
            case __WEBPACK_IMPORTED_MODULE_4__service_libs_const_src_CmpTypeConst__["CmpTypeConst"].DeterminationCmpType:
                this.component = this.cmpMetadataContent.Content;
                break;
            case __WEBPACK_IMPORTED_MODULE_4__service_libs_const_src_CmpTypeConst__["CmpTypeConst"].ValidationCmpType:
                this.component = this.cmpMetadataContent.Content;
                break;
            case __WEBPACK_IMPORTED_MODULE_4__service_libs_const_src_CmpTypeConst__["CmpTypeConst"].VMCmpType:
                this.component = this.cmpMetadataContent.Content;
                break;
            case __WEBPACK_IMPORTED_MODULE_4__service_libs_const_src_CmpTypeConst__["CmpTypeConst"].UDTValidCmpType:
                this.component = this.cmpMetadataContent.Content;
                break;
            case __WEBPACK_IMPORTED_MODULE_4__service_libs_const_src_CmpTypeConst__["CmpTypeConst"].UDTDtmCmpType:
                this.component = this.cmpMetadataContent.Content;
                break;
            default:
                alert('当前打开的文件不属于BE构件，其错误的BE构件类型：' + this.cmpMetadataContent.Type);
        }
    };
    CmpDesignerFrameComponent.prototype.clearData = function () {
        this.component = null;
    };
    /**
     * 保存元数据
     */
    CmpDesignerFrameComponent.prototype.saveMetadata = function () {
        var _this = this;
        // 保存前校验
        if (!this.validateBeforeSave(this.component)) {
            return;
        }
        console.log('保存的构件元数据如下：');
        console.log(this.component);
        var dto = this._metadataContent;
        this.cmpMetadataContent.Content = this.component;
        dto.content = JSON.stringify(this.cmpMetadataContent.Content);
        this.lcmService.SaveMetadata(dto, this.sessionId).subscribe(function (saveResponse) {
            // 保存后需要主动再次加载，因为在保存前事件中赋值了构件和dbo相关的信息，通过加载可以获取最新be
            _this.lcmService.LoadMetadata(dto.fileName, dto.relativePath).subscribe(function (data) {
                _this.loadCmp(data);
                alert('保存成功');
            });
        }, function (error) {
            var head = '保存失败。';
            var errorString = (error.text ? error.text() : error.text);
            _this.handleErrorString(head, errorString);
        });
    };
    CmpDesignerFrameComponent.prototype.validateBeforeSave = function (saveCmp) {
        var curCmp;
        switch (saveCmp.ComponentType) {
            case __WEBPACK_IMPORTED_MODULE_4__service_libs_const_src_CmpTypeConst__["CmpTypeConst"].BEMgrCmpType:
                curCmp = saveCmp;
                if (!__WEBPACK_IMPORTED_MODULE_7__service_libs_GspComponent_src_BEMgrComponent_BEMgrValidation__["BEMgrValidation"].ValidateBeforeSave(curCmp)) {
                    return false;
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_4__service_libs_const_src_CmpTypeConst__["CmpTypeConst"].BECmpType:
                curCmp = saveCmp;
                if (!__WEBPACK_IMPORTED_MODULE_6__service_libs_GspComponent_src_BEComponent_BEValidation__["BEValidation"].ValidateBeforeSave(curCmp)) {
                    return false;
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_4__service_libs_const_src_CmpTypeConst__["CmpTypeConst"].DeterminationCmpType:
                curCmp = saveCmp;
                if (!__WEBPACK_IMPORTED_MODULE_8__service_libs_GspComponent_src_DeterminationComponent_DtmValidation__["DtmValidation"].ValidateBeforeSave(curCmp)) {
                    return false;
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_4__service_libs_const_src_CmpTypeConst__["CmpTypeConst"].ValidationCmpType:
                curCmp = saveCmp;
                if (!__WEBPACK_IMPORTED_MODULE_9__service_libs_GspComponent_src_ValidationComponent_VldValidation__["VldValidation"].ValidateBeforeSave(curCmp)) {
                    return false;
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_4__service_libs_const_src_CmpTypeConst__["CmpTypeConst"].VMCmpType:
                curCmp = saveCmp;
                if (!__WEBPACK_IMPORTED_MODULE_10__service_libs_GspComponent_src_VMComponent_VMValidation__["VMValidation"].ValidateBeforeSave(curCmp)) {
                    return false;
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_4__service_libs_const_src_CmpTypeConst__["CmpTypeConst"].UDTValidCmpType:
                curCmp = saveCmp;
                if (!__WEBPACK_IMPORTED_MODULE_13__service_libs_GspComponent_src_UDTValidComponent_UDTValidValidation__["UDTValidValidation"].ValidateBeforeSave(curCmp)) {
                    return false;
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_4__service_libs_const_src_CmpTypeConst__["CmpTypeConst"].UDTDtmCmpType:
                curCmp = saveCmp;
                if (!__WEBPACK_IMPORTED_MODULE_12__service_libs_GspComponent_src_UDTDtmComponent_UDTDtmValidation__["UDTDtmValidation"].ValidateBeforeSave(curCmp)) {
                    return false;
                }
                break;
        }
        return true;
    };
    /**
     * 撤销修改
     */
    CmpDesignerFrameComponent.prototype.reloadMetadata = function () {
        var _this = this;
        this.lcmService.LoadMetadata(this._metadataContent.fileName, this._metadataContent.relativePath).subscribe(function (data) {
            _this.loadCmp(data);
            alert('撤销成功');
        }, function (error) {
            var head = '撤销失败。';
            var errorString = (error.text ? error.text() : error.text);
            _this.handleErrorString(head, errorString);
        });
    };
    CmpDesignerFrameComponent.prototype.publishCmp = function () {
        var _this = this;
        this.cmpPublishService.publishBizEntity(this._metadataContent.fileName, this._metadataContent.relativePath).subscribe(function (data) {
            // 发布后需要主动再次加载，因为在发布时中赋值了构件相关的信息，通过加载可以获取最新udt
            _this.lcmService.LoadMetadata(_this._metadataContent.fileName, _this._metadataContent.relativePath).subscribe(function (loadData) {
                // 因保存并同步后生成cmp元数据，需要刷新文件树
                // this.treeModel.refresh();
                _this.loadCmp(loadData);
                alert('发布成功。');
            });
        }, function (error) {
            var head = '发布失败。';
            var errorString = (error.text ? error.text() : error.text);
            _this.handleErrorString(head, errorString);
        });
    };
    //#region 异常堆栈窗口
    /**
     * 显示异常堆栈
     */
    CmpDesignerFrameComponent.prototype.showErrorStack = function (errorHead, errorMessage) {
        this.errorStackHead = errorHead;
        this.errorStack = errorMessage;
        this.showErrorStackWindow = !this.showErrorStackWindow;
    };
    /**
     * 异常处理
     * @param head
     * @param errorString
     */
    CmpDesignerFrameComponent.prototype.handleErrorString = function (head, errorString) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_2_util__["isNullOrUndefined"])(errorString) && errorString.includes(this.errorToken)) {
            var strings = errorString.split(this.errorToken);
            var errorMessage = strings[1];
            this.showErrorStack(head, errorMessage);
        }
        else {
            this.showErrorStack(head, errorString);
        }
    };
    CmpDesignerFrameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cmp-designer-frame',
            template: __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/cmp-designer-frame.component.html"),
            styles: [__webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/cmp-designer-frame.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__service_cmp_reference__["GSPMetadataService"], __WEBPACK_IMPORTED_MODULE_5__service_cmp_publish_service__["CmpPublishService"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_cmp_reference__["GSPMetadataService"], __WEBPACK_IMPORTED_MODULE_5__service_cmp_publish_service__["CmpPublishService"], __WEBPACK_IMPORTED_MODULE_11__farris_ide_devkit_services__["CacheService"]])
    ], CmpDesignerFrameComponent);
    return CmpDesignerFrameComponent;
}());



/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/cmp-designer-frame.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmpDesignerFrameModule", function() { return CmpDesignerFrameModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_component_service__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/component.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_factory_component_factory_module__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component-factory/component-factory.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cmp_designer_frame_component__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/cmp-designer-frame.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_buttons__ = __webpack_require__("./node_modules/@progress/kendo-angular-buttons/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CmpDesignerFrameModule = (function () {
    function CmpDesignerFrameModule() {
    }
    CmpDesignerFrameModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__cmp_designer_frame_component__["CmpDesignerFrameComponent"]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__component_factory_component_factory_module__["ComponentFactoryModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_buttons__["ButtonsModule"],
                __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_buttons__["ButtonGroupModule"],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_1__service_component_service__["ComponentService"]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__cmp_designer_frame_component__["CmpDesignerFrameComponent"]]
        })
    ], CmpDesignerFrameModule);
    return CmpDesignerFrameModule;
}());



/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component-designer/be-mgr-designer/be-mgr-designer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component-designer/be-mgr-designer/be-mgr-designer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\" style=\"margin-bottom: 10px;\" id=\"resourceInfobox\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row-fluid\">\r\n            <div class=\"span12\">\r\n                <form class=\"form-horizontal\" role=\"form\">\r\n                    <div *ngIf=\"component\">\r\n                        <app-basicinfocard [component]=\"component\"></app-basicinfocard>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<kendo-tabstrip #tab style=\"flex: 1; width: 100%; height: 300px;\">\r\n    <kendo-tabstrip-tab [selected]=\"true\" [title]=\"tabNameParaInfo\">\r\n        <ng-template kendoTabContent>\r\n            <app-methodparam-list [compType]=\"component.ComponentType\" [parameters]=\"component.BEMgrMethod.BEMgrParams\"></app-methodparam-list>\r\n        </ng-template>\r\n    </kendo-tabstrip-tab>\r\n    <kendo-tabstrip-tab [title]=\"tabNameReturnValue\">\r\n        <ng-template kendoTabContent>\r\n            <app-return-info-card [returnValue]=\"component.BEMgrMethod.ReturnValue\"></app-return-info-card>\r\n        </ng-template>\r\n    </kendo-tabstrip-tab>\r\n</kendo-tabstrip>"

/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component-designer/be-mgr-designer/be-mgr-designer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeMgrDesignerComponent", function() { return BeMgrDesignerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_libs__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BeMgrDesignerComponent = (function () {
    function BeMgrDesignerComponent() {
        this.tabNameParaInfo = '参数信息';
        this.tabNameReturnValue = '返回值信息';
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__service_libs__["BEMgrComponent"])
    ], BeMgrDesignerComponent.prototype, "component", void 0);
    BeMgrDesignerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-be-mgr-designer',
            template: __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component-designer/be-mgr-designer/be-mgr-designer.component.html"),
            styles: [__webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component-designer/be-mgr-designer/be-mgr-designer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BeMgrDesignerComponent);
    return BeMgrDesignerComponent;
}());



/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component-designer/biz-entity-designer/biz-entity-designer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component-designer/biz-entity-designer/biz-entity-designer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\" style=\"margin-bottom: 10px;\" id=\"resourceInfobox\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row-fluid\">\r\n            <div class=\"span12\">\r\n                <form class=\"form-horizontal\" role=\"form\">\r\n                    <div *ngIf=\"component\">\r\n                        <app-basicinfocard [component]=\"component\"></app-basicinfocard>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<kendo-tabstrip #tab style=\"flex: 1;\">\r\n    <kendo-tabstrip-tab [selected]=\"true\" [title]=\"tabNameParaInfo\">\r\n        <ng-template kendoTabContent>\r\n            <app-methodparam-list [compType]=\"component.ComponentType\" [parameters]=\"component.BEMethod.BEParams\"></app-methodparam-list>\r\n        </ng-template>\r\n    </kendo-tabstrip-tab>\r\n    <kendo-tabstrip-tab [title]=\"tabNameReturnValue\">\r\n        <ng-template kendoTabContent>\r\n            <app-return-info-card [returnValue]=\"component.BEMethod.ReturnValue\"></app-return-info-card>\r\n        </ng-template>\r\n    </kendo-tabstrip-tab>\r\n</kendo-tabstrip>"

/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component-designer/biz-entity-designer/biz-entity-designer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BizEntityDesignerComponent", function() { return BizEntityDesignerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_libs__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BizEntityDesignerComponent = (function () {
    function BizEntityDesignerComponent() {
        this.tabNameParaInfo = '参数信息';
        this.tabNameReturnValue = '返回值信息';
    }
    BizEntityDesignerComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__service_libs__["BEComponent"])
    ], BizEntityDesignerComponent.prototype, "component", void 0);
    BizEntityDesignerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-biz-entity-designer',
            template: __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component-designer/biz-entity-designer/biz-entity-designer.component.html"),
            styles: [__webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component-designer/biz-entity-designer/biz-entity-designer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BizEntityDesignerComponent);
    return BizEntityDesignerComponent;
}());



/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component-designer/determination-designer/determination-designer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component-designer/determination-designer/determination-designer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\" style=\"margin-bottom: 10px;\" id=\"resourceInfobox\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row-fluid\">\r\n            <div class=\"span12\">\r\n                <form class=\"form-horizontal\" role=\"form\">\r\n                    <div *ngIf=\"component\">\r\n                        <app-basicinfocard [component]=\"component\"></app-basicinfocard>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component-designer/determination-designer/determination-designer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeterminationDesignerComponent", function() { return DeterminationDesignerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_libs__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeterminationDesignerComponent = (function () {
    function DeterminationDesignerComponent() {
    }
    DeterminationDesignerComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__service_libs__["DeterminationComponent"])
    ], DeterminationDesignerComponent.prototype, "component", void 0);
    DeterminationDesignerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-determination-designer',
            template: __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component-designer/determination-designer/determination-designer.component.html"),
            styles: [__webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component-designer/determination-designer/determination-designer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DeterminationDesignerComponent);
    return DeterminationDesignerComponent;
}());



/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component-designer/udt-dtm-designer/udt-dtm-designer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component-designer/udt-dtm-designer/udt-dtm-designer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\" style=\"margin-bottom: 10px;\" id=\"resourceInfobox\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row-fluid\">\r\n            <div class=\"span12\">\r\n                <form class=\"form-horizontal\" role=\"form\">\r\n                    <div *ngIf=\"component\">\r\n                        <app-basicinfocard [component]=\"component\"></app-basicinfocard>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component-designer/udt-dtm-designer/udt-dtm-designer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UdtDtmDesignerComponent", function() { return UdtDtmDesignerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_libs_GspComponent_src_UDTDtmComponent_UDTDtmComponent__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/UDTDtmComponent/UDTDtmComponent.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UdtDtmDesignerComponent = (function () {
    function UdtDtmDesignerComponent() {
    }
    UdtDtmDesignerComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__service_libs_GspComponent_src_UDTDtmComponent_UDTDtmComponent__["UDTDtmComponent"])
    ], UdtDtmDesignerComponent.prototype, "component", void 0);
    UdtDtmDesignerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-udt-dtm-designer',
            template: __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component-designer/udt-dtm-designer/udt-dtm-designer.component.html"),
            styles: [__webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component-designer/udt-dtm-designer/udt-dtm-designer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UdtDtmDesignerComponent);
    return UdtDtmDesignerComponent;
}());



/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component-designer/udt-valid-designer/udt-valid-designer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component-designer/udt-valid-designer/udt-valid-designer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\" style=\"margin-bottom: 10px;\" id=\"resourceInfobox\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row-fluid\">\r\n            <div class=\"span12\">\r\n                <form class=\"form-horizontal\" role=\"form\">\r\n                    <div *ngIf=\"component\">\r\n                        <app-basicinfocard [component]=\"component\"></app-basicinfocard>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component-designer/udt-valid-designer/udt-valid-designer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UdtValidDesignerComponent", function() { return UdtValidDesignerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_libs_GspComponent_src_UDTValidComponent_UDTValidComponent__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/UDTValidComponent/UDTValidComponent.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UdtValidDesignerComponent = (function () {
    function UdtValidDesignerComponent() {
    }
    UdtValidDesignerComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__service_libs_GspComponent_src_UDTValidComponent_UDTValidComponent__["UDTValidComponent"])
    ], UdtValidDesignerComponent.prototype, "component", void 0);
    UdtValidDesignerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-udt-valid-designer',
            template: __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component-designer/udt-valid-designer/udt-valid-designer.component.html"),
            styles: [__webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component-designer/udt-valid-designer/udt-valid-designer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UdtValidDesignerComponent);
    return UdtValidDesignerComponent;
}());



/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component-designer/validation-designer/validation-designer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component-designer/validation-designer/validation-designer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\" style=\"margin-bottom: 10px;\" id=\"resourceInfobox\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row-fluid\">\r\n            <div class=\"span12\">\r\n                <form class=\"form-horizontal\" role=\"form\">\r\n                    <div *ngIf=\"component\">\r\n                        <app-basicinfocard [component]=\"component\"></app-basicinfocard>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component-designer/validation-designer/validation-designer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationDesignerComponent", function() { return ValidationDesignerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_libs__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ValidationDesignerComponent = (function () {
    function ValidationDesignerComponent() {
    }
    ValidationDesignerComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__service_libs__["ValidationComponent"])
    ], ValidationDesignerComponent.prototype, "component", void 0);
    ValidationDesignerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-validation-designer',
            template: __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component-designer/validation-designer/validation-designer.component.html"),
            styles: [__webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component-designer/validation-designer/validation-designer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ValidationDesignerComponent);
    return ValidationDesignerComponent;
}());



/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component-designer/view-model-designer/view-model-designer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component-designer/view-model-designer/view-model-designer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\" style=\"margin-bottom: 10px;\" id=\"resourceInfobox\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row-fluid\">\r\n            <div class=\"span12\">\r\n                <form class=\"form-horizontal\" role=\"form\">\r\n                    <div *ngIf=\"component\">\r\n                        <app-basicinfocard [component]=\"component\"></app-basicinfocard>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<kendo-tabstrip #tab style=\"flex: 1;\">\r\n    <kendo-tabstrip-tab [selected]=\"true\" [title]=\"tabNameParaInfo\">\r\n        <ng-template kendoTabContent>\r\n            <app-methodparam-list [compType]=\"component.ComponentType\" [parameters]=\"component.VMMethod.VMParams\"></app-methodparam-list>\r\n        </ng-template>\r\n    </kendo-tabstrip-tab>\r\n    <kendo-tabstrip-tab [title]=\"tabNameReturnValue\">\r\n        <ng-template kendoTabContent>\r\n            <app-return-info-card [returnValue]=\"component.VMMethod.ReturnValue\"></app-return-info-card>\r\n        </ng-template>\r\n    </kendo-tabstrip-tab>\r\n</kendo-tabstrip>"

/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component-designer/view-model-designer/view-model-designer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewModelDesignerComponent", function() { return ViewModelDesignerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_libs__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewModelDesignerComponent = (function () {
    function ViewModelDesignerComponent() {
        this.tabNameParaInfo = '参数信息';
        this.tabNameReturnValue = '返回值信息';
    }
    ViewModelDesignerComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__service_libs__["VMComponent"])
    ], ViewModelDesignerComponent.prototype, "component", void 0);
    ViewModelDesignerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view-model-designer',
            template: __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component-designer/view-model-designer/view-model-designer.component.html"),
            styles: [__webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component-designer/view-model-designer/view-model-designer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ViewModelDesignerComponent);
    return ViewModelDesignerComponent;
}());



/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component-factory/component-factory.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h3 {\r\n    background-color: #465c71;\r\n    padding: 10px;\r\n    color: #ffff;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component-factory/component-factory.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isBe\">\r\n    <app-biz-entity-designer [component]=\"component\"></app-biz-entity-designer>\r\n</div>\r\n<div *ngIf=\"isBeMgr\">\r\n    <app-be-mgr-designer [component]=\"component\"></app-be-mgr-designer>\r\n</div>\r\n<div *ngIf=\"isDetermination\">\r\n    <app-determination-designer [component]=\"component\"></app-determination-designer>\r\n</div>\r\n<div *ngIf=\"isValidation\">\r\n    <app-validation-designer [component]=\"component\"></app-validation-designer>\r\n</div>\r\n<div *ngIf=\"isViewModel\">\r\n    <app-view-model-designer [component]=\"component\"></app-view-model-designer>\r\n</div>\r\n<div *ngIf=\"isUdtValid\">\r\n    <app-udt-valid-designer [component]=\"component\"></app-udt-valid-designer>\r\n</div>\r\n<div *ngIf=\"isUdtDtm\">\r\n    <app-udt-dtm-designer [component]=\"component\"></app-udt-dtm-designer>\r\n</div>"

/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component-factory/component-factory.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentFactoryComponent", function() { return ComponentFactoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_libs__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_util__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComponentFactoryComponent = (function () {
    function ComponentFactoryComponent() {
    }
    ComponentFactoryComponent.prototype.ngOnInit = function () {
        this.load();
    };
    ComponentFactoryComponent.prototype.ngOnChanges = function (change) {
        // if (isNullOrUndefined(change.component.previousValue) && !isNullOrUndefined(change.component.currentValue)) {
        // 先前没值，现在有值
        this.load();
        // }
        // else {
        //   // 1、先前有值；2、当前无值
        //   this.refresh();
        // }
    };
    ComponentFactoryComponent.prototype.load = function () {
        if (Object(__WEBPACK_IMPORTED_MODULE_2_util__["isNullOrUndefined"])(this.component)) {
            return;
        }
        switch (this.component.ComponentType) {
            case 'BEComponent':
                this.isBe = true;
                break;
            case 'BEMgrComponent':
                this.isBeMgr = true;
                break;
            case 'ValidationComponent':
                this.isValidation = true;
                break;
            case 'DeterminationComponent':
                this.isDetermination = true;
                break;
            case 'VMComponent':
                this.isViewModel = true;
                break;
            case 'UDTValidComponent':
                this.isUdtValid = true;
                break;
            case 'UDTDtmComponent':
                this.isUdtDtm = true;
                break;
            default:
                alert('当前打开的文件不属于BE构件，其错误的BE构件类型为' + this.component.ComponentType + '，请检查！');
                break;
        }
    };
    ComponentFactoryComponent.prototype.refresh = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__service_libs__["GSPComponent"])
    ], ComponentFactoryComponent.prototype, "component", void 0);
    ComponentFactoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-component-factory',
            template: __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component-factory/component-factory.component.html"),
            styles: [__webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component-factory/component-factory.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ComponentFactoryComponent);
    return ComponentFactoryComponent;
}());



/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component-factory/component-factory.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentFactoryModule", function() { return ComponentFactoryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progress_kendo_angular_grid__ = __webpack_require__("./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_dropdowns__ = __webpack_require__("./node_modules/@progress/kendo-angular-dropdowns/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_factory_component__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component-factory/component-factory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_basicinfo_card_basicinfocard_component__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component/basicinfo-card/basicinfocard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_methodparam_list_methodparam_list_component__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component/methodparam-list/methodparam-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component_return_info_card_return_info_card_component__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component/return-info-card/return-info-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__component_designer_biz_entity_designer_biz_entity_designer_component__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component-designer/biz-entity-designer/biz-entity-designer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__component_designer_be_mgr_designer_be_mgr_designer_component__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component-designer/be-mgr-designer/be-mgr-designer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__component_designer_determination_designer_determination_designer_component__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component-designer/determination-designer/determination-designer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__component_designer_validation_designer_validation_designer_component__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component-designer/validation-designer/validation-designer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__component_designer_view_model_designer_view_model_designer_component__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component-designer/view-model-designer/view-model-designer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__service_cmp_publish_service__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/cmp-publish.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__progress_kendo_angular_layout__ = __webpack_require__("./node_modules/@progress/kendo-angular-layout/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__component_designer_udt_valid_designer_udt_valid_designer_component__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component-designer/udt-valid-designer/udt-valid-designer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__component_designer_udt_dtm_designer_udt_dtm_designer_component__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component-designer/udt-dtm-designer/udt-dtm-designer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



















var ComponentFactoryModule = (function () {
    function ComponentFactoryModule() {
    }
    ComponentFactoryModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__component_factory_component__["ComponentFactoryComponent"],
                __WEBPACK_IMPORTED_MODULE_5__component_basicinfo_card_basicinfocard_component__["BasicinfocardComponent"],
                __WEBPACK_IMPORTED_MODULE_6__component_methodparam_list_methodparam_list_component__["MethodparamListComponent"],
                __WEBPACK_IMPORTED_MODULE_7__component_return_info_card_return_info_card_component__["ReturnInfoCardComponent"],
                __WEBPACK_IMPORTED_MODULE_8__component_designer_biz_entity_designer_biz_entity_designer_component__["BizEntityDesignerComponent"],
                __WEBPACK_IMPORTED_MODULE_9__component_designer_be_mgr_designer_be_mgr_designer_component__["BeMgrDesignerComponent"],
                __WEBPACK_IMPORTED_MODULE_10__component_designer_determination_designer_determination_designer_component__["DeterminationDesignerComponent"],
                __WEBPACK_IMPORTED_MODULE_11__component_designer_validation_designer_validation_designer_component__["ValidationDesignerComponent"],
                __WEBPACK_IMPORTED_MODULE_12__component_designer_view_model_designer_view_model_designer_component__["ViewModelDesignerComponent"],
                __WEBPACK_IMPORTED_MODULE_16__component_designer_udt_valid_designer_udt_valid_designer_component__["UdtValidDesignerComponent"],
                __WEBPACK_IMPORTED_MODULE_17__component_designer_udt_dtm_designer_udt_dtm_designer_component__["UdtDtmDesignerComponent"]
            ],
            imports: [
                // BrowserModule,
                __WEBPACK_IMPORTED_MODULE_13__angular_common__["CommonModule"],
                // BrowserAnimationsModule,
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__progress_kendo_angular_grid__["GridModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_dropdowns__["DropDownListModule"],
                __WEBPACK_IMPORTED_MODULE_15__progress_kendo_angular_layout__["LayoutModule"],
                __WEBPACK_IMPORTED_MODULE_15__progress_kendo_angular_layout__["SplitterModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_14__service_cmp_publish_service__["CmpPublishService"]],
            exports: [__WEBPACK_IMPORTED_MODULE_4__component_factory_component__["ComponentFactoryComponent"]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_4__component_factory_component__["ComponentFactoryComponent"]]
        })
    ], ComponentFactoryModule);
    return ComponentFactoryModule;
}());



/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component/basicinfo-card/basicinfocard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component/basicinfo-card/basicinfocard.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isOnlyCard\">\r\n    <div class=\"card\" style=\"width: 950px; padding:0;border:0\">\r\n        <form class=\"k-form\" role=\"form\">\r\n            <div class=\"form-group\">\r\n                <label for=\"compCode\" class=\"col-sm-2 control-label\">构件编号：</label>\r\n                <div class=\"col-sm-9\">\r\n                    <input [(ngModel)]=\"component.ComponentCode\" class=\"form-control\" id=\"compCode\" name=\"compCode\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"compName\" class=\"col-sm-2 control-label\">构件名称：</label>\r\n                <div class=\"col-sm-9\">\r\n                    <input [(ngModel)]=\"component.ComponentName\" class=\"form-control\" id=\"compName\" name=\"compName\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"Assembly\" class=\"col-sm-2 control-label\">程序集名称：</label>\r\n                <div class=\"col-sm-9\">\r\n                    <input [(ngModel)]=\"cmpMethod.Assembly\" class=\"form-control\" id=\"Assembly\" name=\"Assembly\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"ClassName\" class=\"col-sm-2 control-label\">类名称：</label>\r\n                <div class=\"col-sm-9\">\r\n                    <input [(ngModel)]=\"cmpMethod.ClassName\" class=\"form-control\" id=\"ClassName\" name=\"ClassName\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"Description\" class=\"col-sm-2 control-label\">构件描述：</label>\r\n                <div class=\"col-sm-9\">\r\n                    <textarea [(ngModel)]=\"component.ComponentDescription\" class=\"form-control\" id=\"Description\" rows=\"3\" name=\"Description\"></textarea>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"!isOnlyCard\">\r\n    <!-- <div class=\"d-flex flex-column\" style=\"flex:1; height: 100%\">\r\n        <form class=\"p-1\">\r\n            <div class=\"mb-2\" style=\" display: inline-block; width: 300px;\">\r\n                <label class=\"mr-2\" for=\"compCode\">构件编号： </label>\r\n                <input [(ngModel)]=\"component.ComponentCode\" class=\"k-textbox\" name=\"compCode\" />\r\n            </div>\r\n            <div class=\"mb-2\" style=\"display: inline-block; width: 300px;\">\r\n                <label class=\"mr-2\" for=\"compName\">构件名称： </label>\r\n                <input [(ngModel)]=\"component.ComponentName\" class=\"k-textbox\" name=\"compName\" />\r\n            </div>\r\n            <div class=\"mb-2\" style=\"display: inline-block; width: 300px;\">\r\n                <label class=\"mr-2\" for=\"Assembly\">程序集名称： </label>\r\n                <input [(ngModel)]=\"cmpMethod.Assembly\" class=\"k-textbox\" name=\"Assembly\" />\r\n            </div>\r\n            <div class=\"mb-2\" style=\"display: inline-block; width: 300px;\">\r\n                <label class=\"mr-2\" for=\"ClassName\">类名称：&nbsp;&nbsp;&nbsp;&nbsp; </label>\r\n                <input [(ngModel)]=\"cmpMethod.ClassName\" class=\"k-textbox\" name=\"ClassName\" />\r\n            </div>\r\n            <div class=\"mb-2\" style=\"display: inline-block; width: 300px;\">\r\n                <label class=\"mr-2\" for=\"Description\">构件描述： </label>\r\n                <input [(ngModel)]=\"component.ComponentDescription\" class=\"k-textbox\" name=\"Description\">\r\n            </div>\r\n        </form>\r\n    </div> -->\r\n    <div class=\"card\" style=\"width: 950px; padding:0;border:0\">\r\n        <form class=\"k-form\" role=\"form\">\r\n            <div class=\"mb-2\" style=\" display: inline-block; width: 400px;\">\r\n                <label class=\"mr-2\" for=\"compCode\">构件编号： </label>\r\n                <input [(ngModel)]=\"component.ComponentCode\" style=\"width: 100%;\" class=\"k-textbox\" name=\"compCode\" />\r\n            </div>\r\n            <div class=\"mb-2\" style=\" display: inline-block; width: 400px;\">\r\n                <label class=\"mr-2\" for=\"compName\">构件名称： </label>\r\n                <input [(ngModel)]=\"component.ComponentName\" style=\"width: 100%;\" class=\"k-textbox\" name=\"compName\" />\r\n            </div>\r\n            <div class=\"mb-2\" style=\" display: inline-block; width: 400px;\">\r\n                <label class=\"mr-2\" for=\"Assembly\">程序集名称： </label>\r\n                <input [(ngModel)]=\"cmpMethod.Assembly\" style=\"width: 100%;\" class=\"k-textbox\" name=\"Assembly\" />\r\n            </div>\r\n            <div class=\"mb-2\" style=\" display: inline-block; width: 400px;\">\r\n                <label class=\"mr-2\" for=\"ClassName\">类名称： </label>\r\n                <input [(ngModel)]=\"cmpMethod.ClassName\" style=\"width: 100%;\" class=\"k-textbox\" name=\"ClassName\" />\r\n            </div>\r\n            <div class=\"mb-2\" style=\" display: inline-block; width: 804px; \">\r\n                <label class=\"mr-2\" for=\"Description\">构件描述： </label>\r\n                <input [(ngModel)]=\"component.ComponentDescription\" style=\"width: 100%; \" class=\"k-textbox\" name=\"Description\" />\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component/basicinfo-card/basicinfocard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicinfocardComponent", function() { return BasicinfocardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_libs__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BasicinfocardComponent = (function () {
    function BasicinfocardComponent() {
        this.isOnlyCard = false;
    }
    BasicinfocardComponent.prototype.ngOnChanges = function (changes) {
        // if (isNullOrUndefined(changes.component.previousValue) && !isNullOrUndefined(changes.component.currentValue)) {
        //   // 先前没值，现在有值
        // }
        this.load();
    };
    BasicinfocardComponent.prototype.load = function () {
        switch (this.component.ComponentType) {
            case 'BEComponent':
                this.cmpMethod = this.component.BEMethod;
                this.isOnlyCard = false;
                break;
            case 'BEMgrComponent':
                this.cmpMethod = this.component.BEMgrMethod;
                this.isOnlyCard = false;
                break;
            case 'ValidationComponent':
                this.cmpMethod = this.component.ValidationMethod;
                this.isOnlyCard = true;
                break;
            case 'DeterminationComponent':
                this.cmpMethod = this.component.DeterminationMethod;
                this.isOnlyCard = true;
                break;
            case 'VMComponent':
                this.cmpMethod = this.component.VMMethod;
                this.isOnlyCard = false;
                break;
            case 'UDTValidComponent':
                this.cmpMethod = this.component.UDTValidMethod;
                this.isOnlyCard = true;
                break;
            case 'UDTDtmComponent':
                this.cmpMethod = this.component.UDTDtmMethod;
                this.isOnlyCard = true;
                break;
            default:
                alert('当前加载构件的构件类型异常，构件类型为：' + this.component.ComponentType + '，请检查！');
                break;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__service_libs__["GSPComponent"])
    ], BasicinfocardComponent.prototype, "component", void 0);
    BasicinfocardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-basicinfocard',
            template: __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component/basicinfo-card/basicinfocard.component.html"),
            styles: [__webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component/basicinfo-card/basicinfocard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicinfocardComponent);
    return BasicinfocardComponent;
}());



/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component/methodparam-list/methodparam-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component/methodparam-list/methodparam-list.component.html":
/***/ (function(module, exports) {

module.exports = "<kendo-grid [data]=\"parameters\" style=\"flex: 1;height: 100%;\" (add)=\"addHandler($event)\" (remove)=\"removeHandler()\" (cellClick)=\"cellClickHandler($event)\" (cellClose)=\"cellCloseHandler($event)\" [kendoGridSelectBy]=\"'ID'\">\r\n    <ng-template kendoGridToolbarTemplate>\r\n        <button kendoGridAddCommand>新增参数</button>\r\n        <button (click)=\"removeHandler()\" class=\"k-button\">删除参数</button>\r\n    </ng-template>\r\n    <kendo-grid-column field=\"ParamCode\" title=\"参数编号\" width=\"200\">\r\n    </kendo-grid-column>\r\n    <kendo-grid-column field=\"ParamName\" title=\"参数名称\" width=\"200\">\r\n    </kendo-grid-column>\r\n    <kendo-grid-column field=\"ParameterType\" title=\"参数类型\" width=\"115\">\r\n        <ng-template kendoGridCellTemplate let-dataItem>\r\n            {{getParamType(dataItem.ParameterType)}}\r\n        </ng-template>\r\n        <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\" let-column=\"column\" let-formGroup=\"formGroup\">\r\n            <kendo-dropdownlist [data]=\"paramTypes\" [textField]=\"'text'\" [valueField]=\"'value'\" [value]=\"selectedValue\" [valuePrimitive]=\"true\" [formControl]=\"formGroup.get('ParameterType')\">\r\n            </kendo-dropdownlist>\r\n        </ng-template>\r\n    </kendo-grid-column>\r\n    <kendo-grid-column field=\"Assembly\" title=\"程序集名称\">\r\n        <ng-template kendoGridCellTemplate let-dataItem>\r\n            {{GetParamAssemblyDisplay(dataItem)}}\r\n        </ng-template>\r\n    </kendo-grid-column>\r\n    <kendo-grid-column field=\"ClassName\" title=\"类名称\">\r\n        <ng-template kendoGridCellTemplate let-dataItem>\r\n            {{GetParamClassNameDisplay(dataItem)}}\r\n        </ng-template>\r\n    </kendo-grid-column>\r\n    <kendo-grid-column field=\"ParamDescription\" title=\"描述\"></kendo-grid-column>\r\n</kendo-grid>"

/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component/methodparam-list/methodparam-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MethodparamListComponent", function() { return MethodparamListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_libs__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_libs_GspComponent_src_enum_ParameterMode__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/enum/ParameterMode.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_libs_GspComponent_src_enum_ParameterType__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/enum/ParameterType.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MethodparamListComponent = (function () {
    function MethodparamListComponent(formBuilder) {
        this.formBuilder = formBuilder;
        /** 枚举类：参数模型 */
        this.paramModes = __WEBPACK_IMPORTED_MODULE_3__service_libs_GspComponent_src_enum_ParameterMode__["ParameterModes"];
        /** 枚举类：参数类型 */
        this.paramTypes = __WEBPACK_IMPORTED_MODULE_4__service_libs_GspComponent_src_enum_ParameterType__["ParameterTypes"];
    }
    MethodparamListComponent.prototype.ngOnInit = function () {
    };
    MethodparamListComponent.prototype.ngOnChanges = function (changes) {
    };
    /**
     * 获取参数模式值
     */
    MethodparamListComponent.prototype.getParamMode = function (mode) {
        return this.paramModes.find(function (item) { return item.value === mode; }).text;
    };
    /**
     * 获取参数类型值
     */
    MethodparamListComponent.prototype.getParamType = function (type) {
        return this.paramTypes.find(function (item) { return item.value === type; }).text;
    };
    MethodparamListComponent.prototype.GetParamAssemblyDisplay = function (dataItem) {
        if (dataItem.ParameterType === __WEBPACK_IMPORTED_MODULE_4__service_libs_GspComponent_src_enum_ParameterType__["ParameterType"].Custom) {
            return dataItem.Assembly;
        }
        else {
            return this.paramTypes.find(function (item) { return item.value === dataItem.ParameterType; }).assembly;
        }
    };
    MethodparamListComponent.prototype.GetParamClassNameDisplay = function (dataItem) {
        if (dataItem.ParameterType === __WEBPACK_IMPORTED_MODULE_4__service_libs_GspComponent_src_enum_ParameterType__["ParameterType"].Custom) {
            return dataItem.ClassName;
        }
        else {
            return this.paramTypes.find(function (item) { return item.value === dataItem.ParameterType; }).className;
        }
    };
    //#region 按钮操作
    /**
     * 按钮操作：新增参数
     * @param sender The `GridComponent` instance
     */
    MethodparamListComponent.prototype.addHandler = function (_a) {
        var sender = _a.sender;
        var newParamRow = this.createNewParameter();
        this.paramGroup = this.createParamFormGroup(newParamRow);
        this.parameters.push(this.paramGroup.value); // 用于在最后一行新增
        this.editedRowIndex = this.parameters.length - 1; // 定位到最后一行
        this.parameters[this.editedRowIndex].Assembly = this.getParamAssembly(newParamRow.ParameterType);
        this.parameters[this.editedRowIndex].ClassName = this.getParamClassName(newParamRow.ParameterType);
        sender.editCell(this.editedRowIndex, 0, this.paramGroup); // 使新增行的第一列的单元格设为焦点
    };
    /**
     * 创建一条构件方法的新参数
     */
    MethodparamListComponent.prototype.createNewParameter = function () {
        var newParam = this.initCompParameter();
        newParam.ID = __WEBPACK_IMPORTED_MODULE_2__service_libs__["Guid"].newGuid();
        newParam.Mode = __WEBPACK_IMPORTED_MODULE_3__service_libs_GspComponent_src_enum_ParameterMode__["ParameterMode"].IN;
        var stringType = __WEBPACK_IMPORTED_MODULE_4__service_libs_GspComponent_src_enum_ParameterType__["ParameterType"].String;
        newParam.ParameterType = stringType;
        newParam.Assembly = this.getParamAssembly(stringType);
        newParam.ClassName = this.getParamClassName(stringType);
        return newParam;
    };
    /**
     * 根据构件类型初始化构件参数
     */
    MethodparamListComponent.prototype.initCompParameter = function () {
        switch (this.compType) {
            case 'BEComponent':
                return new __WEBPACK_IMPORTED_MODULE_2__service_libs__["BEMethodParameter"]();
            case 'BEMgrComponent':
                return new __WEBPACK_IMPORTED_MODULE_2__service_libs__["BEMgrMethodParameter"]();
            case 'ValidationComponent':
                return new __WEBPACK_IMPORTED_MODULE_2__service_libs__["ValidationParameter"]();
            case 'DeterminationComponent':
                return new __WEBPACK_IMPORTED_MODULE_2__service_libs__["DeterminationParameter"]();
            case 'VMComponent':
                return new __WEBPACK_IMPORTED_MODULE_2__service_libs__["VMMethodParameter"]();
            default:
                throw new Error('当前新建构件方法参数类型为：' + this.compType + '，请检查！');
        }
    };
    /**
     * 获取参数类型对应的程序集名
     * @param type 参数类型
     */
    MethodparamListComponent.prototype.getParamAssembly = function (type) {
        if (type === __WEBPACK_IMPORTED_MODULE_4__service_libs_GspComponent_src_enum_ParameterType__["ParameterType"].Custom) {
            return '';
        }
        else {
            return this.paramTypes.find(function (item) { return item.value === type; }).assembly;
        }
    };
    /**
     * 获取参数类型对应的类名
     * @param type 参数类型
     */
    MethodparamListComponent.prototype.getParamClassName = function (type) {
        if (type === __WEBPACK_IMPORTED_MODULE_4__service_libs_GspComponent_src_enum_ParameterType__["ParameterType"].Custom) {
            return '';
        }
        else {
            return this.paramTypes.find(function (item) { return item.value === type; }).className;
        }
    };
    /**
     * 创建一个参数数据的载体，用于在列表控件中操作
     * @param dataItem 当前参数数据
     */
    MethodparamListComponent.prototype.createParamFormGroup = function (dataItem) {
        if (dataItem.ParameterType === __WEBPACK_IMPORTED_MODULE_4__service_libs_GspComponent_src_enum_ParameterType__["ParameterType"].Custom) {
            return this.formBuilder.group({
                'ID': [dataItem.ID, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                'ParamCode': [dataItem.ParamCode, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                'ParamName': [dataItem.ParamName, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                'Mode': [dataItem.Mode, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                'ParameterType': [dataItem.ParameterType, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                'Assembly': [dataItem.Assembly, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                'ClassName': [dataItem.ClassName, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                'ParamDescription': dataItem.ParamDescription,
            });
        }
        else {
            return this.formBuilder.group({
                'ID': [dataItem.ID, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                'ParamCode': [dataItem.ParamCode, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                'ParamName': [dataItem.ParamName, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                'Mode': [dataItem.Mode, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                'ParameterType': [dataItem.ParameterType, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                'ParamDescription': dataItem.ParamDescription,
            });
        }
    };
    /**
     * 按钮操作：删除选中的参数
     * @param sender The `GridComponent` instance
     */
    MethodparamListComponent.prototype.removeHandler = function () {
        if (this.editedRowIndex === undefined) {
            alert('请先选中要删除的参数行！');
        }
        else {
            this.parameters.splice(this.editedRowIndex, 1); // 删除指定参数行数据
        }
    };
    //#endregion 按钮操作
    //#region  单元格事件
    /**
     * 鼠标点击事件：使列表的单元格处于焦点状态时的处理（只点击列表cell时触发）
     * @param sender The `GridComponent` instance
     * @param rowIndex 当前处于焦点的单元格所在行号
     * @param columnIndex 当前处于焦点的单元格所在列号
     */
    MethodparamListComponent.prototype.cellClickHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, columnIndex = _a.columnIndex;
        this.editedRowIndex = rowIndex;
        // 获取当前焦点单元格所在的当前参数数据
        var dataItem = this.parameters[rowIndex];
        this.paramGroup = this.createParamFormGroup(dataItem);
        // 在编辑模式下，将焦点放置到指定单元格
        sender.editCell(rowIndex, columnIndex, this.paramGroup);
    };
    /**
     * 事件：焦点离开处于当前列表单元格时进行的操作
     * 1、保证当前单元格中编辑的数据被保存
     * @param param0 当前处于焦点的列表cell的数据和状态
     */
    MethodparamListComponent.prototype.cellCloseHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, column = _a.column;
        // dirty:脏数据，UI界面已经修改当前数据
        if (this.paramGroup && this.paramGroup.dirty) {
            // 获取当前单元格的值
            var curCellValue = this.paramGroup.value[column.field];
            switch (column.field) {
                case 'ParamCode':
                    this.parameters[rowIndex].ParamCode = curCellValue;
                    break;
                case 'ParamName':
                    this.parameters[rowIndex].ParamName = curCellValue;
                    break;
                case 'Mode':
                    this.parameters[rowIndex].Mode = curCellValue;
                    break;
                case 'ParameterType':
                    this.parameters[rowIndex].ParameterType = curCellValue;
                    this.parameters[rowIndex].Assembly = this.paramGroup.value['Assembly'] = this.getParamAssembly(curCellValue);
                    this.parameters[rowIndex].ClassName = this.paramGroup.value['ClassName'] = this.getParamClassName(curCellValue);
                    break;
                case 'Assembly':
                    this.parameters[rowIndex].Assembly = curCellValue;
                    break;
                case 'ClassName':
                    this.parameters[rowIndex].ClassName = curCellValue;
                    break;
                case 'ParamDescription':
                    this.parameters[rowIndex].ParamDescription = curCellValue;
                    break;
            }
        }
        // 关闭当前单元格，清空信息
        this.clearEditInfo(sender);
    };
    /**
     * 关闭编辑状态
     * @param grid 列表控件
     */
    MethodparamListComponent.prototype.clearEditInfo = function (grid) {
        grid.closeCell();
        this.editedRowIndex = undefined;
        this.paramGroup = undefined;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], MethodparamListComponent.prototype, "compType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], MethodparamListComponent.prototype, "parameters", void 0);
    MethodparamListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-methodparam-list',
            template: __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component/methodparam-list/methodparam-list.component.html"),
            styles: [__webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component/methodparam-list/methodparam-list.component.css")]
        })
        /**
         * 组件：方法参数列表
         */
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]])
    ], MethodparamListComponent);
    return MethodparamListComponent;
}());



/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component/return-info-card/return-info-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component/return-info-card/return-info-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"width: 950px; padding:0;border:0\">\r\n    <form class=\"k-form\" role=\"form\" [formGroup]=\"formGroup\">\r\n        <div class=\"mt-2 mb-2\">\r\n            <input #useChoose class=\"k-checkbox\" id=\"IsUseReturnType\" type=\"checkbox\" checked=\"checked\" formControlName=\"IsUseReturnType\" />\r\n            <label class=\"k-checkbox-label\" for=\"IsUseReturnType\">启用返回值</label>\r\n        </div>\r\n        <div class=\"mb-2\" style=\" display: inline-block; width: 804px;\">\r\n            <label class=\"mr-2\" for=\"ParameterType\">返回值类型 </label>\r\n            <kendo-dropdownlist class=\"kendo-dropdownlist\" style=\"width:100%;\" #typeChoose [data]=\"paramTypes\" [textField]=\"'text'\" [valueField]=\"'value'\" [valuePrimitive]=\"true\" formControlName=\"ParameterType\" (selectionChange)=\"selectType($event)\">\r\n            </kendo-dropdownlist>\r\n            <!-- <select #typeChoose [selectedIndex]=\"selectedIndex\" class=\"k-textbox\" style=\"width:100%;\" id=\"ParameterType\" (change)=\"selectType($event.target.selectedIndex)\" [disabled]=\"!useChoose.checked\" formControlName=\"ParameterType\">\r\n                <option *ngFor=\"let type of paramTypes\">{{type.text}}</option>\r\n            </select> -->\r\n        </div>\r\n        <div class=\"mb-2\" style=\" display: inline-block; width: 400px;\">\r\n            <label class=\"mr-2\" for=\"Assembly\">程序集名称 </label>\r\n            <input class=\"k-textbox\" style=\"width:100%;\" formControlName=\"Assembly\" [readonly]=\"!(useChoose.checked && isCustomType)\" />\r\n            <!-- <input [(ngModel)]=\"returnValue.Assembly\" class=\"k-textbox\" style=\"width:100%;\" id=\"Assembly\" name=\"Assembly\" [disabled]=\"!useChoose.checked\" [readonly]=\"!(typeChoose.selectedIndex === 7)\" formControlName=\"Assembly\" />\r\n            <script type=\"text/javascript\" language=\"JavaScript\" #ngIf=\"useChoose.checked === true\">\r\n                document.getElementById('Assembly').disabled = false;\r\n            </script> -->\r\n        </div>\r\n        <div class=\"mb-2\" style=\" display: inline-block; width: 400px;\">\r\n            <label class=\"mr-2\" for=\"ClassName\">类名称 </label>\r\n            <input class=\"k-textbox\" style=\"width:100%;\" formControlName=\"ClassName\" [readonly]=\"!(useChoose.checked && isCustomType)\" />\r\n            <!-- <input [(ngModel)]=\"returnValue.ClassName\" class=\"k-textbox\" style=\"width:100%;\" id=\"ClassName\" name=\"ClassName\" [disabled]=\"!useChoose.checked\" [readonly]=\"!(typeChoose.selectedIndex === 7)\" formControlName=\"ClassName\" /> -->\r\n        </div>\r\n        <div class=\"mb-2\" style=\" display: inline-block; width: 804px; \">\r\n            <label class=\"mr-2\" for=\"ParamDescription\">描述 </label>\r\n            <input class=\"k-textbox\" style=\"width:100%;\" formControlName=\"ParamDescription\" [readonly]=\"!useChoose.checked\" />\r\n            <!-- <input [(ngModel)]=\"returnValue.ParamDescription\" class=\"k-textbox\" style=\"width:100%;\" id=\"ParamDescription\" name=\"ParamDescription\" [disabled]=\"!useChoose.checked\" formControlName=\"ParamDescription\" /> -->\r\n        </div>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component/return-info-card/return-info-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnInfoCardComponent", function() { return ReturnInfoCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_libs_GspComponent_src_enum_ParameterType__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/enum/ParameterType.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_libs__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_util__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReturnInfoCardComponent = (function () {
    function ReturnInfoCardComponent(formBuilder) {
        this.formBuilder = formBuilder;
        /**
         * 返回值参数类型
         */
        this.paramTypes = __WEBPACK_IMPORTED_MODULE_1__service_libs_GspComponent_src_enum_ParameterType__["ParameterTypes"];
        /**
         * 返回值类型Index，默认是String类型
         */
        this.selectedIndex = 0;
    }
    ReturnInfoCardComponent.prototype.ngOnInit = function () {
        this.load();
    };
    ReturnInfoCardComponent.prototype.ngOnChanges = function (changes) {
        this.refresh();
    };
    ReturnInfoCardComponent.prototype.ngOnDestroy = function () {
        this.unsubscribeFormGroupValueChanges();
    };
    /**
     * 加载
     */
    ReturnInfoCardComponent.prototype.load = function () {
        this.createForm();
        this.refresh();
    };
    /**
     * 刷新
     */
    ReturnInfoCardComponent.prototype.refresh = function () {
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.returnValue)) {
            this.createNewVoidReturnType();
        }
        this.unsubscribeFormGroupValueChanges();
        this.enableFormGroup();
        this.setFormValue(this.returnValue);
        this.subscribeFormGroupValueChanges();
    };
    ReturnInfoCardComponent.prototype.createNewVoidReturnType = function () {
        var orginId = this.returnValue.ID;
        var voidReturnValue = new __WEBPACK_IMPORTED_MODULE_2__service_libs__["VoidReturnType"]();
        Object.assign(this.returnValue, voidReturnValue);
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(orginId)) {
            orginId = __WEBPACK_IMPORTED_MODULE_2__service_libs__["Guid"].newGuid();
        }
        this.returnValue.ID = orginId;
    };
    ReturnInfoCardComponent.prototype.createNewReturnType = function () {
        var orginId = this.returnValue.ID;
        var returnVal = new __WEBPACK_IMPORTED_MODULE_2__service_libs__["ReturnValue"]();
        Object.assign(this.returnValue, returnVal);
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(orginId)) {
            orginId = __WEBPACK_IMPORTED_MODULE_2__service_libs__["Guid"].newGuid();
        }
        this.returnValue.ID = orginId;
        var stringType = __WEBPACK_IMPORTED_MODULE_1__service_libs_GspComponent_src_enum_ParameterType__["ParameterType"].String;
        this.returnValue.ParameterType = stringType;
        this.returnValue.ClassName = this.getClassName(stringType);
        this.returnValue.Assembly = this.getAssembly(stringType);
        return this.returnValue;
    };
    /**
     * 使表单可编辑
     */
    ReturnInfoCardComponent.prototype.enableFormGroup = function () {
        // this.unsubscribeFormGroupValueChanges();
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.formGroup)) {
            this.createForm();
        }
        this.formGroup.enable();
        // this.subscribeFormGroupValueChanges();
    };
    /**
     * 初始化表单
     */
    ReturnInfoCardComponent.prototype.createForm = function () {
        this.formGroup = this.formBuilder.group({
            IsUseReturnType: false,
            Assembly: '',
            ClassName: '',
            ParamDescription: '',
            ParameterType: ''
        });
    };
    /**
     * 表单赋值
     * @param returnValue
     */
    ReturnInfoCardComponent.prototype.setFormValue = function (returnValue) {
        // this.unsubscribeFormGroupValueChanges();
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(returnValue)) {
            this.clearFormValue();
            return;
        }
        // 若为无返回值类型，也需要清空输入值
        if (!this.getIsUseReturnType(returnValue)) {
            this.clearFormValue();
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.formGroup)) {
            this.createForm();
        }
        this.formGroup.enable();
        if (returnValue.ParameterType !== __WEBPACK_IMPORTED_MODULE_1__service_libs_GspComponent_src_enum_ParameterType__["ParameterType"].Custom) {
            this.formGroup.patchValue({
                IsUseReturnType: this.getIsUseReturnType(returnValue),
                Assembly: this.GetParamAssemblyDisplay(returnValue),
                ClassName: this.GetParamClassNameDisplay(returnValue),
                ParamDescription: returnValue.ParamDescription || '',
                ParameterType: Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(returnValue.ParameterType) ? '' : returnValue.ParameterType
                // Tips:
                // 此处有关参数类型赋值，因为枚举值可能为0,0的时候进行或操作，会被判断为'否'，使用''，导致清空string选项
                // 正确的写法应该如上
            });
        }
        else {
            this.formGroup.patchValue({
                IsUseReturnType: this.getIsUseReturnType(returnValue),
                Assembly: returnValue.Assembly || '',
                ClassName: returnValue.ClassName || '',
                ParamDescription: returnValue.ParamDescription || '',
                ParameterType: Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(returnValue.ParameterType) ? '' : returnValue.ParameterType
            });
        }
        // this.subscribeFormGroupValueChanges();
    };
    /**
   * 表单清空
   */
    ReturnInfoCardComponent.prototype.clearFormValue = function () {
        // this.unsubscribeFormGroupValueChanges();
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.formGroup)) {
            this.createForm();
        }
        this.formGroup.patchValue({
            IsUseReturnType: false,
            ParameterType: '',
            Assembly: '',
            ClassName: '',
            ParamDescription: '',
        });
        // 相关控件不可编辑
        this.disableReturnInfoControls();
        // this.subscribeFormGroupValueChanges();
    };
    /**
     * 若为[无返回值]，则控件不可编辑
     */
    ReturnInfoCardComponent.prototype.disableReturnInfoControls = function () {
        this.formGroup.controls.ParameterType.disable();
        this.formGroup.controls.Assembly.disable();
        this.formGroup.controls.ClassName.disable();
        this.formGroup.controls.ParamDescription.disable();
    };
    /**
     * 判断是否为空返回值
     * @param returnValue
     */
    ReturnInfoCardComponent.prototype.getIsUseReturnType = function (returnValue) {
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(returnValue)) {
            return false;
        }
        if (returnValue.ClassName === 'Void' && returnValue.Assembly === 'mscorlib.dll') {
            return false;
        }
        else {
            return true;
        }
    };
    /**
     * 参数程序集名
     * @param dataItem
     */
    ReturnInfoCardComponent.prototype.GetParamAssemblyDisplay = function (dataItem) {
        if (dataItem.ParameterType === __WEBPACK_IMPORTED_MODULE_1__service_libs_GspComponent_src_enum_ParameterType__["ParameterType"].Custom) {
            return dataItem.Assembly;
        }
        else {
            return this.getAssembly(dataItem.ParameterType);
        }
    };
    /**
     * 参数类名
     * @param dataItem
     */
    ReturnInfoCardComponent.prototype.GetParamClassNameDisplay = function (dataItem) {
        if (dataItem.ParameterType === __WEBPACK_IMPORTED_MODULE_1__service_libs_GspComponent_src_enum_ParameterType__["ParameterType"].Custom) {
            return dataItem.ClassName;
        }
        else {
            return this.getClassName(dataItem.ParameterType);
        }
    };
    ReturnInfoCardComponent.prototype.getAssembly = function (type) {
        var paraType = this.paramTypes.find(function (item) { return item.value === type; });
        return paraType ? paraType.assembly : '';
    };
    ReturnInfoCardComponent.prototype.getClassName = function (type) {
        var paraType = this.paramTypes.find(function (item) { return item.value === type; });
        return paraType ? paraType.className : '';
    };
    /**
     * 返回值类型切换事件
     * @param selectedIndex 返回值类型集合中的索引
     */
    ReturnInfoCardComponent.prototype.selectType = function (_a) {
        var value = _a.value;
        // ④ 更改类型
        this.returnValue.ParameterType = value;
        this.returnValue.Assembly = this.getAssembly(value);
        this.returnValue.ClassName = this.getClassName(value);
        this.refresh();
    };
    Object.defineProperty(ReturnInfoCardComponent.prototype, "isCustomType", {
        /**
         * 判断是否为自定义类型
         * 是否将程序集名/类名输入框置为只读状态
         */
        get: function () {
            if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.returnValue)) {
                return false;
            }
            return this.returnValue.ParameterType === __WEBPACK_IMPORTED_MODULE_1__service_libs_GspComponent_src_enum_ParameterType__["ParameterType"].Custom;
        },
        enumerable: true,
        configurable: true
    });
    /**
       * 订阅表单值改变事件
       */
    ReturnInfoCardComponent.prototype.subscribeFormGroupValueChanges = function () {
        var _this = this;
        // ① 返回值是否为void
        var subscriptionIsUseReturnType = this.formGroup.controls.IsUseReturnType.valueChanges.subscribe(function (hasReturnType) {
            if (!hasReturnType) {
                _this.createNewVoidReturnType();
            }
            else {
                _this.createNewReturnType();
            }
            _this.refresh();
        });
        // ② assembly
        var subscriptionAssembly = this.formGroup.controls.Assembly.valueChanges.subscribe(function (assembly) {
            _this.returnValue.Assembly = assembly;
            _this.refresh();
        });
        // ③ className
        var subscriptionClassName = this.formGroup.controls.ClassName.valueChanges.subscribe(function (code) {
            _this.returnValue.ClassName = code;
            _this.refresh();
        });
        // ⑤ description
        var subscriptionDescription = this.formGroup.controls.ParamDescription.valueChanges.subscribe(function (description) {
            _this.returnValue.ParamDescription = description;
            _this.refresh();
        });
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.formGroupSubscriptions)) {
            this.formGroupSubscriptions = new Array();
        }
        this.formGroupSubscriptions.push(subscriptionIsUseReturnType);
        this.formGroupSubscriptions.push(subscriptionAssembly);
        this.formGroupSubscriptions.push(subscriptionClassName);
        this.formGroupSubscriptions.push(subscriptionDescription);
    };
    /**
     * 取消订阅表单值改变事件
     */
    ReturnInfoCardComponent.prototype.unsubscribeFormGroupValueChanges = function () {
        if (this.formGroupSubscriptions && this.formGroupSubscriptions.length > 0) {
            while (this.formGroupSubscriptions.length > 0) {
                var subscription = this.formGroupSubscriptions.pop();
                subscription.unsubscribe();
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__service_libs__["ReturnValue"])
    ], ReturnInfoCardComponent.prototype, "returnValue", void 0);
    ReturnInfoCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-return-info-card',
            template: __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component/return-info-card/return-info-card.component.html"),
            styles: [__webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/component/return-info-card/return-info-card.component.css")]
        })
        /**
         * 组件：返回值卡片
         */
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"]])
    ], ReturnInfoCardComponent);
    return ReturnInfoCardComponent;
}());



/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/cmp-publish.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmpPublishService", function() { return CmpPublishService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cmp_reference__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/cmp-reference.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { HttpUrlConst } from '../util/be-reference';
/**
 * be发布按钮服务
 */
var CmpPublishService = (function () {
    function CmpPublishService(http) {
        this.http = http;
        this.currentUrl = __WEBPACK_IMPORTED_MODULE_2__cmp_reference__["HttpUrlConst"].currentUrl;
    }
    /**
     * 发布webApi
     */
    CmpPublishService.prototype.publishBizEntity = function (fileName, path) {
        var jitData = new JitMetadataContent();
        jitData.name = fileName;
        jitData.path = path;
        // const jitUrl = `${this.currentUrl}` + `/api/dev/bef/v1.0/becodegenerate/publish`;
        var jitUrl = "" + this.currentUrl + "/api/dev/main/v1.0/udt/publish";
        return this.http.put(jitUrl, jitData);
    };
    CmpPublishService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], CmpPublishService);
    return CmpPublishService;
}());

/**
 * jit实体结构
 */
var JitMetadataContent = (function () {
    function JitMetadataContent() {
    }
    return JitMetadataContent;
}());


/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/cmp-reference.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpUrlConst", function() { return HttpUrlConst; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/index.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gsp_lcm_metadata_selector__ = __webpack_require__("./node_modules/@gsp-lcm/metadata-selector/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gsp_lcm_metadata_selector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__gsp_lcm_metadata_selector__);
/* unused harmony namespace reexport */
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__gsp_lcm_metadata_selector__, "GSPMetadataService")) __webpack_require__.d(__webpack_exports__, "GSPMetadataService", function() { return __WEBPACK_IMPORTED_MODULE_2__gsp_lcm_metadata_selector__["GSPMetadataService"]; });


// webIde

// export * from '@gsp-bef/gsp-be-metadata';

// export { MetadataSelectModule } from '@gsp-lcm/metadata-selector';
// export { HttpUrlConst, MetadataDto } from '../../../../bedesigner-frame/views/bedesigner-frame/util/be-reference';
var HttpUrlConst = (function () {
    function HttpUrlConst() {
    }
    HttpUrlConst.currentUrl = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["environment"].SERVER_IP;
    return HttpUrlConst;
}());



/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/component.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentService", function() { return ComponentService; });
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

var ComponentService = (function () {
    function ComponentService() {
    }
    ComponentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ComponentService);
    return ComponentService;
}());



/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_BaseEntity_CompMethod__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/BaseEntity/CompMethod.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_BaseEntity_CompParameter__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/BaseEntity/CompParameter.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_BaseEntity_GSPComponent__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/BaseEntity/GSPComponent.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "GSPComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__src_BaseEntity_GSPComponent__["GSPComponent"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_BaseEntity_ReturnValue__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/BaseEntity/ReturnValue.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "ReturnValue", function() { return __WEBPACK_IMPORTED_MODULE_3__src_BaseEntity_ReturnValue__["ReturnValue"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_BaseEntity_VoidReturnType__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/BaseEntity/VoidReturnType.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "VoidReturnType", function() { return __WEBPACK_IMPORTED_MODULE_4__src_BaseEntity_VoidReturnType__["VoidReturnType"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_BEComponent_BEComponent__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/BEComponent/BEComponent.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "BEComponent", function() { return __WEBPACK_IMPORTED_MODULE_5__src_BEComponent_BEComponent__["BEComponent"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_BEComponent_BEMethod__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/BEComponent/BEMethod.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_BEComponent_BEMethodParameter__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/BEComponent/BEMethodParameter.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "BEMethodParameter", function() { return __WEBPACK_IMPORTED_MODULE_7__src_BEComponent_BEMethodParameter__["BEMethodParameter"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_BEMgrComponent_BEMgrComponent__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/BEMgrComponent/BEMgrComponent.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "BEMgrComponent", function() { return __WEBPACK_IMPORTED_MODULE_8__src_BEMgrComponent_BEMgrComponent__["BEMgrComponent"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_BEMgrComponent_BEMgrMethod__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/BEMgrComponent/BEMgrMethod.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_BEMgrComponent_BEMgrMethodParameter__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/BEMgrComponent/BEMgrMethodParameter.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "BEMgrMethodParameter", function() { return __WEBPACK_IMPORTED_MODULE_10__src_BEMgrComponent_BEMgrMethodParameter__["BEMgrMethodParameter"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_DeterminationComponent_DeterminationComponent__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/DeterminationComponent/DeterminationComponent.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "DeterminationComponent", function() { return __WEBPACK_IMPORTED_MODULE_11__src_DeterminationComponent_DeterminationComponent__["DeterminationComponent"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_DeterminationComponent_DeterminationMethod__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/DeterminationComponent/DeterminationMethod.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_DeterminationComponent_DeterminationParameter__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/DeterminationComponent/DeterminationParameter.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "DeterminationParameter", function() { return __WEBPACK_IMPORTED_MODULE_13__src_DeterminationComponent_DeterminationParameter__["DeterminationParameter"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_CmpMetadataContent__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/CmpMetadataContent.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_Interface_ICompMethod__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/Interface/ICompMethod.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_Interface_ICompParameter__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/Interface/ICompParameter.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_Interface_IGSPComponent__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/Interface/IGSPComponent.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__src_ValidationComponent_ValidationComponent__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/ValidationComponent/ValidationComponent.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "ValidationComponent", function() { return __WEBPACK_IMPORTED_MODULE_18__src_ValidationComponent_ValidationComponent__["ValidationComponent"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__src_ValidationComponent_ValidationMethod__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/ValidationComponent/ValidationMethod.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__src_ValidationComponent_ValidationParameter__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/ValidationComponent/ValidationParameter.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "ValidationParameter", function() { return __WEBPACK_IMPORTED_MODULE_20__src_ValidationComponent_ValidationParameter__["ValidationParameter"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__src_VMComponent_VMComponent__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/VMComponent/VMComponent.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "VMComponent", function() { return __WEBPACK_IMPORTED_MODULE_21__src_VMComponent_VMComponent__["VMComponent"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__src_VMComponent_VMMethod__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/VMComponent/VMMethod.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__src_VMComponent_VMMethodParameter__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/VMComponent/VMMethodParameter.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "VMMethodParameter", function() { return __WEBPACK_IMPORTED_MODULE_23__src_VMComponent_VMMethodParameter__["VMMethodParameter"]; });















// export * from './src/Enum/ParameterMode';
// export * from './src/Enum/ParameterType';











/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/BEComponent/BEComponent.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BEComponent", function() { return BEComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaseEntity_GSPComponent__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/BaseEntity/GSPComponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BEMethod__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/BEComponent/BEMethod.ts");
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


var BEComponent = (function (_super) {
    __extends(BEComponent, _super);
    function BEComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ComponentType = 'BEComponent';
        return _this;
    }
    BEComponent.prototype.BEComponent = function () {
        this.BEMethod = this.Method = new __WEBPACK_IMPORTED_MODULE_1__BEMethod__["BEMethod"]();
    };
    return BEComponent;
}(__WEBPACK_IMPORTED_MODULE_0__BaseEntity_GSPComponent__["GSPComponent"]));



/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/BEComponent/BEMethod.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BEMethod", function() { return BEMethod; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaseEntity_CompMethod__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/BaseEntity/CompMethod.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BaseEntity_ReturnValue__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/BaseEntity/ReturnValue.ts");
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


var BEMethod = (function (_super) {
    __extends(BEMethod, _super);
    function BEMethod() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BEMethod.prototype.BEMethod = function () {
        this.ReturnValue = new __WEBPACK_IMPORTED_MODULE_1__BaseEntity_ReturnValue__["ReturnValue"]();
        this.BEParams = this.Parameters = new Array();
    };
    return BEMethod;
}(__WEBPACK_IMPORTED_MODULE_0__BaseEntity_CompMethod__["CompMethod"]));



/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/BEComponent/BEMethodParameter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BEMethodParameter", function() { return BEMethodParameter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaseEntity_CompParameter__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/BaseEntity/CompParameter.ts");
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

var BEMethodParameter = (function (_super) {
    __extends(BEMethodParameter, _super);
    function BEMethodParameter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BEMethodParameter;
}(__WEBPACK_IMPORTED_MODULE_0__BaseEntity_CompParameter__["CompParameter"]));



/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/BEComponent/BEValidation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BEValidation", function() { return BEValidation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid_dist_es2015_utils__ = __webpack_require__("./node_modules/@progress/kendo-angular-grid/dist/es2015/utils.js");


var BEValidation = (function () {
    function BEValidation() {
    }
    BEValidation.ValidateBeforeSave = function (component) {
        if (Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(component)) {
            alert('当前要保存的业务实体为null，请检查！');
            return false;
        }
        if (!this.ValidateBasicInfo(component)) {
            return false;
        }
        if (!this.ValidateParameterInfo(component.BEMethod)) {
            return false;
        }
        if (!this.ValidateReturnValueInfo(component.BEMethod.ReturnValue)) {
            return false;
        }
        return true;
    };
    BEValidation.ValidateBasicInfo = function (component) {
        if (Object(__WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid_dist_es2015_utils__["isNullOrEmptyString"])(component.ComponentCode)) {
            alert('当前要保存的业务实体的构件编号为空，请检查！');
            return false;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid_dist_es2015_utils__["isNullOrEmptyString"])(component.ComponentName)) {
            alert('当前要保存的业务实体的构件名称为空，请检查！');
            return false;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(component.BEMethod)) {
            alert('当前要保存的业务实体的方法为null，请检查！');
            return false;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid_dist_es2015_utils__["isNullOrEmptyString"])(component.BEMethod.Assembly)) {
            alert('当前要保存的业务实体的程序集为空，请检查！');
            return false;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid_dist_es2015_utils__["isNullOrEmptyString"])(component.BEMethod.ClassName)) {
            alert('当前要保存的业务实体的类名为空，请检查！');
            return false;
        }
        return true;
    };
    BEValidation.ValidateParameterInfo = function (method) {
        if (method.BEParams.length === 0) {
            return true;
        }
        var isErrorFlag = false;
        for (var rowIndex = 0; rowIndex < method.BEParams.length; rowIndex++) {
            var parameter = method.BEParams[rowIndex];
            if (Object(__WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid_dist_es2015_utils__["isNullOrEmptyString"])(parameter.ParamCode)) {
                alert('当前要保存的业务实体的方法中，第' + (rowIndex + 1) + '个参数的参数编号为空，请检查！');
                isErrorFlag = true;
                break;
            }
            if (Object(__WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid_dist_es2015_utils__["isNullOrEmptyString"])(parameter.ParamName)) {
                alert('当前要保存的业务实体的方法中，第' + (rowIndex + 1) + '个参数的参数名称为空，请检查！');
                isErrorFlag = true;
                break;
            }
            if (Object(__WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid_dist_es2015_utils__["isNullOrEmptyString"])(parameter.Assembly)) {
                alert('当前要保存的业务实体的方法中，第' + (rowIndex + 1) + '个参数的参数程序集为空，请检查！');
                isErrorFlag = true;
                break;
            }
            if (Object(__WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid_dist_es2015_utils__["isNullOrEmptyString"])(parameter.ClassName)) {
                alert('当前要保存的业务实体的方法中，第' + (rowIndex + 1) + '个参数的类名为空，请检查！');
                isErrorFlag = true;
                break;
            }
            var nextRowIndex = rowIndex + 1;
            for (var afterRowIndex = nextRowIndex; afterRowIndex < method.BEParams.length; afterRowIndex++) {
                var afterParameter = method.BEParams[afterRowIndex];
                if (parameter.ParamCode === afterParameter.ParamCode) {
                    alert('当前要保存的业务实体的方法中，第' + (rowIndex + 1) + '个参数的参数编号与第' + (afterRowIndex + 1) + '个参数的参数编号相同，请检查！');
                    isErrorFlag = true;
                    break;
                }
                if (parameter.ParamName === afterParameter.ParamName) {
                    alert('当前要保存的业务实体的方法中，第' + (rowIndex + 1) + '个参数的参数名称与第' + (afterRowIndex + 1) + '个参数的参数名称相同，请检查！');
                    isErrorFlag = true;
                    break;
                }
            }
        }
        if (isErrorFlag) {
            return false;
        }
        else {
            return true;
        }
    };
    BEValidation.ValidateReturnValueInfo = function (returnValue) {
        if (returnValue.ClassName === 'Void' && returnValue.Assembly === 'mscorlib.dll') {
            return true;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid_dist_es2015_utils__["isNullOrEmptyString"])(returnValue.Assembly)) {
            alert('当前要保存的业务实体的返回值的程序集为空，请检查！');
            return false;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid_dist_es2015_utils__["isNullOrEmptyString"])(returnValue.ClassName)) {
            alert('当前要保存的业务实体的返回值的类名为空，请检查！');
            return false;
        }
        return true;
    };
    return BEValidation;
}());



/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/BEMgrComponent/BEMgrComponent.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BEMgrComponent", function() { return BEMgrComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaseEntity_GSPComponent__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/BaseEntity/GSPComponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BEMgrMethod__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/BEMgrComponent/BEMgrMethod.ts");
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


var BEMgrComponent = (function (_super) {
    __extends(BEMgrComponent, _super);
    function BEMgrComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ComponentType = 'BEMgrComponent';
        return _this;
    }
    BEMgrComponent.prototype.BEMgrComponent = function () {
        this.BEMgrMethod = this.Method = new __WEBPACK_IMPORTED_MODULE_1__BEMgrMethod__["BEMgrMethod"]();
    };
    return BEMgrComponent;
}(__WEBPACK_IMPORTED_MODULE_0__BaseEntity_GSPComponent__["GSPComponent"]));



/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/BEMgrComponent/BEMgrMethod.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BEMgrMethod", function() { return BEMgrMethod; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaseEntity_CompMethod__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/BaseEntity/CompMethod.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BaseEntity_ReturnValue__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/BaseEntity/ReturnValue.ts");
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


var BEMgrMethod = (function (_super) {
    __extends(BEMgrMethod, _super);
    function BEMgrMethod() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BEMgrMethod.prototype.BEMgrMethod = function () {
        this.ReturnValue = new __WEBPACK_IMPORTED_MODULE_1__BaseEntity_ReturnValue__["ReturnValue"]();
        this.BEMgrParams = this.Parameters = new Array();
    };
    return BEMgrMethod;
}(__WEBPACK_IMPORTED_MODULE_0__BaseEntity_CompMethod__["CompMethod"]));



/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/BEMgrComponent/BEMgrMethodParameter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BEMgrMethodParameter", function() { return BEMgrMethodParameter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaseEntity_CompParameter__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/BaseEntity/CompParameter.ts");
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

var BEMgrMethodParameter = (function (_super) {
    __extends(BEMgrMethodParameter, _super);
    function BEMgrMethodParameter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BEMgrMethodParameter;
}(__WEBPACK_IMPORTED_MODULE_0__BaseEntity_CompParameter__["CompParameter"]));



/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/BEMgrComponent/BEMgrValidation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BEMgrValidation", function() { return BEMgrValidation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid_dist_es2015_utils__ = __webpack_require__("./node_modules/@progress/kendo-angular-grid/dist/es2015/utils.js");


var BEMgrValidation = (function () {
    function BEMgrValidation() {
    }
    BEMgrValidation.ValidateBeforeSave = function (component) {
        if (Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(component)) {
            alert('当前要保存的自定义构件实体为null，请检查！');
            return false;
        }
        if (!this.ValidateBasicInfo(component)) {
            return false;
        }
        if (!this.ValidateParameterInfo(component.BEMgrMethod)) {
            return false;
        }
        if (!this.ValidateReturnValueInfo(component.BEMgrMethod.ReturnValue)) {
            return false;
        }
        return true;
    };
    BEMgrValidation.ValidateBasicInfo = function (component) {
        if (Object(__WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid_dist_es2015_utils__["isNullOrEmptyString"])(component.ComponentCode)) {
            alert('当前要保存的自定义构件实体的构件编号为空，请检查！');
            return false;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid_dist_es2015_utils__["isNullOrEmptyString"])(component.ComponentName)) {
            alert('当前要保存的自定义构件实体的构件名称为空，请检查！');
            return false;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(component.BEMgrMethod)) {
            alert('当前要保存的自定义构件实体的方法为null，请检查！');
            return false;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid_dist_es2015_utils__["isNullOrEmptyString"])(component.BEMgrMethod.Assembly)) {
            alert('当前要保存的自定义构件实体的程序集为空，请检查！');
            return false;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid_dist_es2015_utils__["isNullOrEmptyString"])(component.BEMgrMethod.ClassName)) {
            alert('当前要保存的自定义构件实体的类名为空，请检查！');
            return false;
        }
        return true;
    };
    BEMgrValidation.ValidateParameterInfo = function (method) {
        if (method.BEMgrParams.length === 0) {
            return true;
        }
        var isErrorFlag = false;
        for (var rowIndex = 0; rowIndex < method.BEMgrParams.length; rowIndex++) {
            var parameter = method.BEMgrParams[rowIndex];
            if (Object(__WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid_dist_es2015_utils__["isNullOrEmptyString"])(parameter.ParamCode)) {
                alert('当前要保存的自定义构件实体的方法中，第' + (rowIndex + 1) + '个参数的参数编号为空，请检查！');
                isErrorFlag = true;
                break;
            }
            if (Object(__WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid_dist_es2015_utils__["isNullOrEmptyString"])(parameter.ParamName)) {
                alert('当前要保存的自定义构件实体的方法中，第' + (rowIndex + 1) + '个参数的参数名称为空，请检查！');
                isErrorFlag = true;
                break;
            }
            if (Object(__WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid_dist_es2015_utils__["isNullOrEmptyString"])(parameter.Assembly)) {
                alert('当前要保存的自定义构件实体的方法中，第' + (rowIndex + 1) + '个参数的参数程序集为空，请检查！');
                isErrorFlag = true;
                break;
            }
            if (Object(__WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid_dist_es2015_utils__["isNullOrEmptyString"])(parameter.ClassName)) {
                alert('当前要保存的自定义构件实体的方法中，第' + (rowIndex + 1) + '个参数的类名为空，请检查！');
                isErrorFlag = true;
                break;
            }
            var nextRowIndex = rowIndex + 1;
            for (var afterRowIndex = nextRowIndex; afterRowIndex < method.BEMgrParams.length; afterRowIndex++) {
                var afterParameter = method.BEMgrParams[afterRowIndex];
                if (parameter.ParamCode === afterParameter.ParamCode) {
                    alert('当前要保存的自定义构件实体的方法中，第' + (rowIndex + 1) + '个参数的参数编号与第' + (afterRowIndex + 1) + '个参数的参数编号相同，请检查！');
                    isErrorFlag = true;
                    break;
                }
                if (parameter.ParamName === afterParameter.ParamName) {
                    alert('当前要保存的自定义构件实体的方法中，第' + (rowIndex + 1) + '个参数的参数名称与第' + (afterRowIndex + 1) + '个参数的参数名称相同，请检查！');
                    isErrorFlag = true;
                    break;
                }
            }
        }
        if (isErrorFlag) {
            return false;
        }
        else {
            return true;
        }
    };
    BEMgrValidation.ValidateReturnValueInfo = function (returnValue) {
        if (returnValue.ClassName === 'Void' && returnValue.Assembly === 'mscorlib.dll') {
            return true;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid_dist_es2015_utils__["isNullOrEmptyString"])(returnValue.Assembly)) {
            alert('当前要保存的自定义构件实体的返回值的程序集为空，请检查！');
            return false;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid_dist_es2015_utils__["isNullOrEmptyString"])(returnValue.ClassName)) {
            alert('当前要保存的自定义构件实体的返回值的类名为空，请检查！');
            return false;
        }
        return true;
    };
    return BEMgrValidation;
}());



/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/BaseEntity/CompMethod.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompMethod", function() { return CompMethod; });
var CompMethod = (function () {
    function CompMethod() {
    }
    return CompMethod;
}());



/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/BaseEntity/CompParameter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompParameter", function() { return CompParameter; });
var CompParameter = (function () {
    function CompParameter() {
    }
    return CompParameter;
}());



/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/BaseEntity/GSPComponent.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPComponent", function() { return GSPComponent; });
var GSPComponent = (function () {
    function GSPComponent() {
    }
    return GSPComponent;
}());



/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/BaseEntity/ReturnValue.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnValue", function() { return ReturnValue; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CompParameter__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/BaseEntity/CompParameter.ts");
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

var ReturnValue = (function (_super) {
    __extends(ReturnValue, _super);
    function ReturnValue() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ParamCode = undefined;
        _this.ParamName = undefined;
        return _this;
    }
    return ReturnValue;
}(__WEBPACK_IMPORTED_MODULE_0__CompParameter__["CompParameter"]));



/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/BaseEntity/VoidReturnType.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoidReturnType", function() { return VoidReturnType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ReturnValue__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/BaseEntity/ReturnValue.ts");
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

var VoidReturnType = (function (_super) {
    __extends(VoidReturnType, _super);
    function VoidReturnType() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Assembly = 'mscorlib.dll';
        _this.ClassName = 'Void';
        return _this;
    }
    return VoidReturnType;
}(__WEBPACK_IMPORTED_MODULE_0__ReturnValue__["ReturnValue"]));



/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/CmpMetadataContent.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmpMetadataContent", function() { return CmpMetadataContent; });
/**
 * Be构件元数据的json序列化结构
 */
var CmpMetadataContent = (function () {
    function CmpMetadataContent() {
    }
    return CmpMetadataContent;
}());



/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/DeterminationComponent/DeterminationComponent.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeterminationComponent", function() { return DeterminationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaseEntity_GSPComponent__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/BaseEntity/GSPComponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DeterminationMethod__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/DeterminationComponent/DeterminationMethod.ts");
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


var DeterminationComponent = (function (_super) {
    __extends(DeterminationComponent, _super);
    function DeterminationComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ComponentType = 'DeterminationComponent';
        return _this;
    }
    DeterminationComponent.prototype.DeterminationComponent = function () {
        this.DeterminationMethod = this.Method = new __WEBPACK_IMPORTED_MODULE_1__DeterminationMethod__["DeterminationMethod"]();
    };
    return DeterminationComponent;
}(__WEBPACK_IMPORTED_MODULE_0__BaseEntity_GSPComponent__["GSPComponent"]));



/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/DeterminationComponent/DeterminationMethod.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeterminationMethod", function() { return DeterminationMethod; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaseEntity_CompMethod__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/BaseEntity/CompMethod.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BaseEntity_VoidReturnType__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/BaseEntity/VoidReturnType.ts");
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


var DeterminationMethod = (function (_super) {
    __extends(DeterminationMethod, _super);
    function DeterminationMethod() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeterminationMethod.prototype.DeterminationMethod = function () {
        this.ReturnValue = new __WEBPACK_IMPORTED_MODULE_1__BaseEntity_VoidReturnType__["VoidReturnType"]();
        this.DeterminationParams = this.Parameters = new Array();
    };
    return DeterminationMethod;
}(__WEBPACK_IMPORTED_MODULE_0__BaseEntity_CompMethod__["CompMethod"]));



/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/DeterminationComponent/DeterminationParameter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeterminationParameter", function() { return DeterminationParameter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaseEntity_CompParameter__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/BaseEntity/CompParameter.ts");
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

var DeterminationParameter = (function (_super) {
    __extends(DeterminationParameter, _super);
    function DeterminationParameter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DeterminationParameter;
}(__WEBPACK_IMPORTED_MODULE_0__BaseEntity_CompParameter__["CompParameter"]));



/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/DeterminationComponent/DtmValidation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtmValidation", function() { return DtmValidation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid_dist_es2015_utils__ = __webpack_require__("./node_modules/@progress/kendo-angular-grid/dist/es2015/utils.js");


var DtmValidation = (function () {
    function DtmValidation() {
    }
    DtmValidation.ValidateBeforeSave = function (component) {
        if (Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(component)) {
            alert('当前要保存的联动计算构件实体为null，请检查！');
            return false;
        }
        if (!this.ValidateBasicInfo(component)) {
            return false;
        }
        return true;
    };
    DtmValidation.ValidateBasicInfo = function (component) {
        if (Object(__WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid_dist_es2015_utils__["isNullOrEmptyString"])(component.ComponentCode)) {
            alert('当前要保存的联动计算构件实体的构件编号为空，请检查！');
            return false;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid_dist_es2015_utils__["isNullOrEmptyString"])(component.ComponentName)) {
            alert('当前要保存的联动计算构件实体的构件名称为空，请检查！');
            return false;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(component.DeterminationMethod)) {
            alert('当前要保存的联动计算构件实体的方法为null，请检查！');
            return false;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid_dist_es2015_utils__["isNullOrEmptyString"])(component.DeterminationMethod.Assembly)) {
            alert('当前要保存的联动计算构件实体的程序集为空，请检查！');
            return false;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid_dist_es2015_utils__["isNullOrEmptyString"])(component.DeterminationMethod.ClassName)) {
            alert('当前要保存的联动计算构件实体的类名为空，请检查！');
            return false;
        }
        return true;
    };
    return DtmValidation;
}());



/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/Interface/ICompMethod.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ICompMethod */
var ICompMethod = (function () {
    function ICompMethod() {
    }
    return ICompMethod;
}());



/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/Interface/ICompParameter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ICompParameter */
var ICompParameter = (function () {
    function ICompParameter() {
    }
    return ICompParameter;
}());



/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/Interface/IGSPComponent.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export IGSPComponent */
var IGSPComponent = (function () {
    function IGSPComponent() {
    }
    return IGSPComponent;
}());



/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/UDTDtmComponent/UDTDtmComponent.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UDTDtmComponent", function() { return UDTDtmComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaseEntity_GSPComponent__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/BaseEntity/GSPComponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UDTDtmMethod__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/UDTDtmComponent/UDTDtmMethod.ts");
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


var UDTDtmComponent = (function (_super) {
    __extends(UDTDtmComponent, _super);
    function UDTDtmComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ComponentType = 'UDTDtmMethod';
        return _this;
    }
    UDTDtmComponent.prototype.UDTDtmComponent = function () {
        this.UDTDtmMethod = this.Method = new __WEBPACK_IMPORTED_MODULE_1__UDTDtmMethod__["UDTDtmMethod"]();
    };
    return UDTDtmComponent;
}(__WEBPACK_IMPORTED_MODULE_0__BaseEntity_GSPComponent__["GSPComponent"]));



/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/UDTDtmComponent/UDTDtmMethod.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UDTDtmMethod", function() { return UDTDtmMethod; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaseEntity_CompMethod__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/BaseEntity/CompMethod.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BaseEntity_VoidReturnType__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/BaseEntity/VoidReturnType.ts");
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


var UDTDtmMethod = (function (_super) {
    __extends(UDTDtmMethod, _super);
    function UDTDtmMethod() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UDTDtmMethod.prototype.UDTDtmMethod = function () {
        this.ReturnValue = new __WEBPACK_IMPORTED_MODULE_1__BaseEntity_VoidReturnType__["VoidReturnType"]();
        this.UDTDtmParams = this.Parameters = new Array();
    };
    return UDTDtmMethod;
}(__WEBPACK_IMPORTED_MODULE_0__BaseEntity_CompMethod__["CompMethod"]));



/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/UDTDtmComponent/UDTDtmValidation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UDTDtmValidation", function() { return UDTDtmValidation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid_dist_es2015_utils__ = __webpack_require__("./node_modules/@progress/kendo-angular-grid/dist/es2015/utils.js");


var UDTDtmValidation = (function () {
    function UDTDtmValidation() {
    }
    UDTDtmValidation.ValidateBeforeSave = function (component) {
        if (Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(component)) {
            alert('当前要保存的业务字段联动规则构件实体为null，请检查！');
            return false;
        }
        if (!this.ValidateBasicInfo(component)) {
            return false;
        }
        return true;
    };
    UDTDtmValidation.ValidateBasicInfo = function (component) {
        if (Object(__WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid_dist_es2015_utils__["isNullOrEmptyString"])(component.ComponentCode)) {
            alert('当前要保存的业务字段联动规则构件实体的构件编号为空，请检查！');
            return false;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid_dist_es2015_utils__["isNullOrEmptyString"])(component.ComponentName)) {
            alert('当前要保存的业务字段联动规则构件实体的构件名称为空，请检查！');
            return false;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(component.UDTDtmMethod)) {
            alert('当前要保存的业务字段联动规则构件实体的方法为null，请检查！');
            return false;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid_dist_es2015_utils__["isNullOrEmptyString"])(component.UDTDtmMethod.Assembly)) {
            alert('当前要保存的业务字段联动规则构件实体的程序集为空，请检查！');
            return false;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid_dist_es2015_utils__["isNullOrEmptyString"])(component.UDTDtmMethod.ClassName)) {
            alert('当前要保存的业务字段联动规则构件实体的类名为空，请检查！');
            return false;
        }
        return true;
    };
    return UDTDtmValidation;
}());



/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/UDTValidComponent/UDTValidComponent.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UDTValidComponent", function() { return UDTValidComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaseEntity_GSPComponent__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/BaseEntity/GSPComponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UDTValidMethod__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/UDTValidComponent/UDTValidMethod.ts");
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


var UDTValidComponent = (function (_super) {
    __extends(UDTValidComponent, _super);
    function UDTValidComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ComponentType = 'UDTValidComponent';
        return _this;
    }
    UDTValidComponent.prototype.UDTValidComponent = function () {
        this.UDTValidMethod = this.Method = new __WEBPACK_IMPORTED_MODULE_1__UDTValidMethod__["UDTValidMethod"]();
    };
    return UDTValidComponent;
}(__WEBPACK_IMPORTED_MODULE_0__BaseEntity_GSPComponent__["GSPComponent"]));



/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/UDTValidComponent/UDTValidMethod.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UDTValidMethod", function() { return UDTValidMethod; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaseEntity_CompMethod__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/BaseEntity/CompMethod.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BaseEntity_VoidReturnType__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/BaseEntity/VoidReturnType.ts");
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


var UDTValidMethod = (function (_super) {
    __extends(UDTValidMethod, _super);
    function UDTValidMethod() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UDTValidMethod.prototype.UDTValidMethod = function () {
        this.ReturnValue = new __WEBPACK_IMPORTED_MODULE_1__BaseEntity_VoidReturnType__["VoidReturnType"]();
        this.UDTValidParams = this.Parameters = new Array();
    };
    return UDTValidMethod;
}(__WEBPACK_IMPORTED_MODULE_0__BaseEntity_CompMethod__["CompMethod"]));



/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/UDTValidComponent/UDTValidValidation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UDTValidValidation", function() { return UDTValidValidation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid_dist_es2015_utils__ = __webpack_require__("./node_modules/@progress/kendo-angular-grid/dist/es2015/utils.js");


var UDTValidValidation = (function () {
    function UDTValidValidation() {
    }
    UDTValidValidation.ValidateBeforeSave = function (component) {
        if (Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(component)) {
            alert('当前要保存的业务字段校验规则构件实体为null，请检查！');
            return false;
        }
        if (!this.ValidateBasicInfo(component)) {
            return false;
        }
        return true;
    };
    UDTValidValidation.ValidateBasicInfo = function (component) {
        if (Object(__WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid_dist_es2015_utils__["isNullOrEmptyString"])(component.ComponentCode)) {
            alert('当前要保存的业务字段校验规则构件实体的构件编号为空，请检查！');
            return false;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid_dist_es2015_utils__["isNullOrEmptyString"])(component.ComponentName)) {
            alert('当前要保存的业务字段校验规则构件实体的构件名称为空，请检查！');
            return false;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(component.UDTValidMethod)) {
            alert('当前要保存的业务字段校验规则构件实体的方法为null，请检查！');
            return false;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid_dist_es2015_utils__["isNullOrEmptyString"])(component.UDTValidMethod.Assembly)) {
            alert('当前要保存的业务字段校验规则构件实体的程序集为空，请检查！');
            return false;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid_dist_es2015_utils__["isNullOrEmptyString"])(component.UDTValidMethod.ClassName)) {
            alert('当前要保存的业务字段校验规则构件实体的类名为空，请检查！');
            return false;
        }
        return true;
    };
    return UDTValidValidation;
}());



/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/VMComponent/VMComponent.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VMComponent", function() { return VMComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaseEntity_GSPComponent__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/BaseEntity/GSPComponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VMMethod__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/VMComponent/VMMethod.ts");
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


var VMComponent = (function (_super) {
    __extends(VMComponent, _super);
    function VMComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ComponentType = 'VMComponent';
        return _this;
    }
    VMComponent.prototype.VMComponent = function () {
        this.VMMethod = this.Method = new __WEBPACK_IMPORTED_MODULE_1__VMMethod__["VMMethod"]();
    };
    return VMComponent;
}(__WEBPACK_IMPORTED_MODULE_0__BaseEntity_GSPComponent__["GSPComponent"]));



/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/VMComponent/VMMethod.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VMMethod", function() { return VMMethod; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaseEntity_CompMethod__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/BaseEntity/CompMethod.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BaseEntity_ReturnValue__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/BaseEntity/ReturnValue.ts");
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


var VMMethod = (function (_super) {
    __extends(VMMethod, _super);
    function VMMethod() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VMMethod.prototype.VMMethod = function () {
        this.ReturnValue = new __WEBPACK_IMPORTED_MODULE_1__BaseEntity_ReturnValue__["ReturnValue"]();
        this.VMParams = this.Parameters = new Array();
    };
    return VMMethod;
}(__WEBPACK_IMPORTED_MODULE_0__BaseEntity_CompMethod__["CompMethod"]));



/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/VMComponent/VMMethodParameter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VMMethodParameter", function() { return VMMethodParameter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaseEntity_CompParameter__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/BaseEntity/CompParameter.ts");
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

var VMMethodParameter = (function (_super) {
    __extends(VMMethodParameter, _super);
    function VMMethodParameter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return VMMethodParameter;
}(__WEBPACK_IMPORTED_MODULE_0__BaseEntity_CompParameter__["CompParameter"]));



/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/VMComponent/VMValidation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VMValidation", function() { return VMValidation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid_dist_es2015_utils__ = __webpack_require__("./node_modules/@progress/kendo-angular-grid/dist/es2015/utils.js");


var VMValidation = (function () {
    function VMValidation() {
    }
    VMValidation.ValidateBeforeSave = function (component) {
        if (Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(component)) {
            alert('当前要保存的VM构件实体为null，请检查！');
            return false;
        }
        if (!this.ValidateBasicInfo(component)) {
            return false;
        }
        if (!this.ValidateParameterInfo(component.VMMethod)) {
            return false;
        }
        if (!this.ValidateReturnValueInfo(component.VMMethod.ReturnValue)) {
            return false;
        }
        return true;
    };
    VMValidation.ValidateBasicInfo = function (component) {
        if (Object(__WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid_dist_es2015_utils__["isNullOrEmptyString"])(component.ComponentCode)) {
            alert('当前要保存的VM构件实体的构件编号为空，请检查！');
            return false;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid_dist_es2015_utils__["isNullOrEmptyString"])(component.ComponentName)) {
            alert('当前要保存的VM构件实体的构件名称为空，请检查！');
            return false;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(component.VMMethod)) {
            alert('当前要保存的VM构件实体的方法为null，请检查！');
            return false;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid_dist_es2015_utils__["isNullOrEmptyString"])(component.VMMethod.Assembly)) {
            alert('当前要保存的VM构件实体的程序集为空，请检查！');
            return false;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid_dist_es2015_utils__["isNullOrEmptyString"])(component.VMMethod.ClassName)) {
            alert('当前要保存的VM构件实体的类名为空，请检查！');
            return false;
        }
        return true;
    };
    VMValidation.ValidateParameterInfo = function (method) {
        if (method.VMParams.length === 0) {
            return true;
        }
        var isErrorFlag = false;
        for (var rowIndex = 0; rowIndex < method.VMParams.length; rowIndex++) {
            var parameter = method.VMParams[rowIndex];
            if (Object(__WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid_dist_es2015_utils__["isNullOrEmptyString"])(parameter.ParamCode)) {
                alert('当前要保存的VM构件实体的方法中，第' + (rowIndex + 1) + '个参数的参数编号为空，请检查！');
                isErrorFlag = true;
                break;
            }
            if (Object(__WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid_dist_es2015_utils__["isNullOrEmptyString"])(parameter.ParamName)) {
                alert('当前要保存的VM构件实体的方法中，第' + (rowIndex + 1) + '个参数的参数名称为空，请检查！');
                isErrorFlag = true;
                break;
            }
            if (Object(__WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid_dist_es2015_utils__["isNullOrEmptyString"])(parameter.Assembly)) {
                alert('当前要保存的VM构件实体的方法中，第' + (rowIndex + 1) + '个参数的参数程序集为空，请检查！');
                isErrorFlag = true;
                break;
            }
            if (Object(__WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid_dist_es2015_utils__["isNullOrEmptyString"])(parameter.ClassName)) {
                alert('当前要保存的VM构件实体的方法中，第' + (rowIndex + 1) + '个参数的类名为空，请检查！');
                isErrorFlag = true;
                break;
            }
            var nextRowIndex = rowIndex + 1;
            for (var afterRowIndex = nextRowIndex; afterRowIndex < method.VMParams.length; afterRowIndex++) {
                var afterParameter = method.VMParams[afterRowIndex];
                if (parameter.ParamCode === afterParameter.ParamCode) {
                    alert('当前要保存的VM构件实体的方法中，第' + (rowIndex + 1) + '个参数的参数编号与第' + (afterRowIndex + 1) + '个参数的参数编号相同，请检查！');
                    isErrorFlag = true;
                    break;
                }
                if (parameter.ParamName === afterParameter.ParamName) {
                    alert('当前要保存的VM构件实体的方法中，第' + (rowIndex + 1) + '个参数的参数名称与第' + (afterRowIndex + 1) + '个参数的参数名称相同，请检查！');
                    isErrorFlag = true;
                    break;
                }
            }
        }
        if (isErrorFlag) {
            return false;
        }
        else {
            return true;
        }
    };
    VMValidation.ValidateReturnValueInfo = function (returnValue) {
        if (returnValue.ClassName === 'Void' && returnValue.Assembly === 'mscorlib.dll') {
            return true;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid_dist_es2015_utils__["isNullOrEmptyString"])(returnValue.Assembly)) {
            alert('当前要保存的VM构件实体的返回值的程序集为空，请检查！');
            return false;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid_dist_es2015_utils__["isNullOrEmptyString"])(returnValue.ClassName)) {
            alert('当前要保存的VM构件实体的返回值的类名为空，请检查！');
            return false;
        }
        return true;
    };
    return VMValidation;
}());



/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/ValidationComponent/ValidationComponent.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationComponent", function() { return ValidationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaseEntity_GSPComponent__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/BaseEntity/GSPComponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ValidationMethod__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/ValidationComponent/ValidationMethod.ts");
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


var ValidationComponent = (function (_super) {
    __extends(ValidationComponent, _super);
    function ValidationComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ComponentType = 'ValidationComponent';
        return _this;
    }
    ValidationComponent.prototype.ValidationComponent = function () {
        this.ValidationMethod = this.Method = new __WEBPACK_IMPORTED_MODULE_1__ValidationMethod__["ValidationMethod"]();
    };
    return ValidationComponent;
}(__WEBPACK_IMPORTED_MODULE_0__BaseEntity_GSPComponent__["GSPComponent"]));



/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/ValidationComponent/ValidationMethod.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationMethod", function() { return ValidationMethod; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaseEntity_CompMethod__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/BaseEntity/CompMethod.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BaseEntity_VoidReturnType__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/BaseEntity/VoidReturnType.ts");
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


var ValidationMethod = (function (_super) {
    __extends(ValidationMethod, _super);
    function ValidationMethod() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ValidationMethod.prototype.ValidationMethod = function () {
        this.ReturnValue = new __WEBPACK_IMPORTED_MODULE_1__BaseEntity_VoidReturnType__["VoidReturnType"]();
        this.ValidationParams = this.Parameters = new Array();
    };
    return ValidationMethod;
}(__WEBPACK_IMPORTED_MODULE_0__BaseEntity_CompMethod__["CompMethod"]));



/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/ValidationComponent/ValidationParameter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationParameter", function() { return ValidationParameter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaseEntity_CompParameter__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/BaseEntity/CompParameter.ts");
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

var ValidationParameter = (function (_super) {
    __extends(ValidationParameter, _super);
    function ValidationParameter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ValidationParameter;
}(__WEBPACK_IMPORTED_MODULE_0__BaseEntity_CompParameter__["CompParameter"]));



/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/ValidationComponent/VldValidation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VldValidation", function() { return VldValidation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid_dist_es2015_utils__ = __webpack_require__("./node_modules/@progress/kendo-angular-grid/dist/es2015/utils.js");


var VldValidation = (function () {
    function VldValidation() {
    }
    VldValidation.ValidateBeforeSave = function (component) {
        if (Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(component)) {
            alert('当前要保存的校验规则构件实体为null，请检查！');
            return false;
        }
        if (!this.ValidateBasicInfo(component)) {
            return false;
        }
        return true;
    };
    VldValidation.ValidateBasicInfo = function (component) {
        if (Object(__WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid_dist_es2015_utils__["isNullOrEmptyString"])(component.ComponentCode)) {
            alert('当前要保存的校验规则构件实体的构件编号为空，请检查！');
            return false;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid_dist_es2015_utils__["isNullOrEmptyString"])(component.ComponentName)) {
            alert('当前要保存的校验规则构件实体的构件名称为空，请检查！');
            return false;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(component.ValidationMethod)) {
            alert('当前要保存的校验规则构件实体的方法为null，请检查！');
            return false;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid_dist_es2015_utils__["isNullOrEmptyString"])(component.ValidationMethod.Assembly)) {
            alert('当前要保存的校验规则构件实体的程序集为空，请检查！');
            return false;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid_dist_es2015_utils__["isNullOrEmptyString"])(component.ValidationMethod.ClassName)) {
            alert('当前要保存的校验规则构件实体的类名为空，请检查！');
            return false;
        }
        return true;
    };
    return VldValidation;
}());



/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/enum/ParameterMode.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParameterMode", function() { return ParameterMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParameterModes", function() { return ParameterModes; });
/**
 * 参数输入输出模式（现只支持IN）
 */
var ParameterMode;
(function (ParameterMode) {
    ParameterMode[ParameterMode["IN"] = 0] = "IN";
    // OUT,
    // INOUT
})(ParameterMode || (ParameterMode = {}));
var ParameterModes = [
    { text: 'IN', value: ParameterMode.IN }
    // { text: 'OUT', value: ParameterMode.OUT },
    // { text: 'INOUT', value: ParameterMode.INOUT }
];


/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/src/enum/ParameterType.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParameterType", function() { return ParameterType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParameterTypes", function() { return ParameterTypes; });
/**
 * 构件方法参数类型
 */
var ParameterType;
(function (ParameterType) {
    /**
     * 字符型
     */
    ParameterType[ParameterType["String"] = 0] = "String";
    /**
     * 布尔型
     */
    ParameterType[ParameterType["Boolean"] = 1] = "Boolean";
    /**
     * 整数
     */
    ParameterType[ParameterType["Integer"] = 2] = "Integer";
    /**
     * 浮点数
     */
    ParameterType[ParameterType["Float"] = 3] = "Float";
    /**
     * 双浮点
     */
    ParameterType[ParameterType["Double"] = 4] = "Double";
    /**
     * 时间
     */
    ParameterType[ParameterType["DateTime"] = 5] = "DateTime";
    /**
     * 对象类型
     */
    ParameterType[ParameterType["Object"] = 6] = "Object";
    /**
     * 自定义
     */
    ParameterType[ParameterType["Custom"] = 7] = "Custom";
})(ParameterType || (ParameterType = {}));
var ParameterTypes = [
    { index: 0, text: '字符串', value: ParameterType.String, assembly: 'mscorlib.dll', className: 'System.String' },
    { index: 1, text: '布尔型', value: ParameterType.Boolean, assembly: 'mscorlib.dll', className: 'System.Boolean' },
    { index: 2, text: '整数', value: ParameterType.Integer, assembly: 'mscorlib.dll', className: 'System.Int32' },
    { index: 3, text: '浮点数', value: ParameterType.Float, assembly: 'mscorlib.dll', className: 'System.Single' },
    { index: 4, text: '双浮点数', value: ParameterType.Double, assembly: 'mscorlib.dll', className: 'System.Double' },
    { index: 5, text: '时间类型', value: ParameterType.DateTime, assembly: 'mscorlib.dll', className: 'System.DateTime' },
    { index: 6, text: '对象类型', value: ParameterType.Object, assembly: 'mscorlib.dll', className: 'System.Object' },
    { index: 7, text: '自定义类型', value: ParameterType.Custom, assembly: '', className: '' },
];


/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/const/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_CmpTypeConst__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/const/src/CmpTypeConst.ts");
/* unused harmony namespace reexport */



/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/const/src/CmpTypeConst.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmpTypeConst", function() { return CmpTypeConst; });
var CmpTypeConst = (function () {
    function CmpTypeConst() {
    }
    CmpTypeConst.BECmpType = 'BEComponent';
    CmpTypeConst.BEMgrCmpType = 'BEMgrComponent';
    CmpTypeConst.DeterminationCmpType = 'DeterminationComponent';
    CmpTypeConst.ValidationCmpType = 'ValidationComponent';
    CmpTypeConst.VMCmpType = 'VMComponent';
    CmpTypeConst.UDTValidCmpType = 'UDTValidComponent';
    CmpTypeConst.UDTDtmCmpType = 'UDTDtmComponent';
    return CmpTypeConst;
}());



/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__const__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/const/index.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__GspComponent__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/GspComponent/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "BEComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__GspComponent__["BEComponent"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "BEMethodParameter", function() { return __WEBPACK_IMPORTED_MODULE_1__GspComponent__["BEMethodParameter"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "BEMgrComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__GspComponent__["BEMgrComponent"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "BEMgrMethodParameter", function() { return __WEBPACK_IMPORTED_MODULE_1__GspComponent__["BEMgrMethodParameter"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "DeterminationComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__GspComponent__["DeterminationComponent"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "DeterminationParameter", function() { return __WEBPACK_IMPORTED_MODULE_1__GspComponent__["DeterminationParameter"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "GSPComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__GspComponent__["GSPComponent"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "ReturnValue", function() { return __WEBPACK_IMPORTED_MODULE_1__GspComponent__["ReturnValue"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "VMComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__GspComponent__["VMComponent"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "VMMethodParameter", function() { return __WEBPACK_IMPORTED_MODULE_1__GspComponent__["VMMethodParameter"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "ValidationComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__GspComponent__["ValidationComponent"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "ValidationParameter", function() { return __WEBPACK_IMPORTED_MODULE_1__GspComponent__["ValidationParameter"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "VoidReturnType", function() { return __WEBPACK_IMPORTED_MODULE_1__GspComponent__["VoidReturnType"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_Guid__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/utils/Guid.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "Guid", function() { return __WEBPACK_IMPORTED_MODULE_2__utils_Guid__["Guid"]; });





/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/cmp-designer-frame/service/libs/utils/Guid.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Guid", function() { return Guid; });
var Guid = (function () {
    function Guid() {
    }
    Guid.newGuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            // tslint:disable-next-line:no-bitwise
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    return Guid;
}());



/***/ }),

/***/ "./src/packages/cmpdesigner-frame/views/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmpDesignerPackageView", function() { return CmpDesignerPackageView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__ = __webpack_require__("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cmp_designer_frame_cmp_designer_frame_module__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/cmp-designer-frame.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cmp_designer_frame_cmp_designer_frame_component__ = __webpack_require__("./src/packages/cmpdesigner-frame/views/cmp-designer-frame/cmp-designer-frame.component.ts");
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



var CmpDesignerPackageView = (function (_super) {
    __extends(CmpDesignerPackageView, _super);
    function CmpDesignerPackageView(serializedState, cfr, injector) {
        var _this = _super.call(this, serializedState) || this;
        _this.cfr = cfr;
        _this.injector = injector;
        var componentFactory = _this.cfr.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_2__cmp_designer_frame_cmp_designer_frame_component__["CmpDesignerFrameComponent"]);
        var moduleRef = _this.injector.get(__WEBPACK_IMPORTED_MODULE_1__cmp_designer_frame_cmp_designer_frame_module__["CmpDesignerFrameModule"]);
        console.log(moduleRef);
        _this.element = componentFactory.create(_this.injector);
        return _this;
    }
    return CmpDesignerPackageView;
}(__WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__["PackageView"]));



/***/ })

},[]);
//# sourceMappingURL=cmppackage.module.chunk.js.map