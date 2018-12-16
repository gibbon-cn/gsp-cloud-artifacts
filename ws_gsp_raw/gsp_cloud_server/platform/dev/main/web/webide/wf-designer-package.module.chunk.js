webpackJsonp(["wf-designer-package.module"],{

/***/ "./src/packages/wfdesigner-frame/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__package__ = __webpack_require__("./src/packages/wfdesigner-frame/package.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "WFDesignerPackage", function() { return __WEBPACK_IMPORTED_MODULE_0__package__["WFDesignerPackage"]; });
/**
 * Created by Zhang Zhichao on 2018/8/7.
 */



/***/ }),

/***/ "./src/packages/wfdesigner-frame/package.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WFDesignerPackage", function() { return WFDesignerPackage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__ = __webpack_require__("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views__ = __webpack_require__("./src/packages/wfdesigner-frame/views/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_wf_designer_frame_wf_designer_frame_component__ = __webpack_require__("./src/packages/wfdesigner-frame/views/wf-designer-frame/wf-designer-frame.component.ts");
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



var WFDesignerPackage = (function (_super) {
    __extends(WFDesignerPackage, _super);
    function WFDesignerPackage(gsp, cfr, injector) {
        var _this = _super.call(this, gsp) || this;
        _this.cfr = cfr;
        _this.injector = injector;
        return _this;
    }
    WFDesignerPackage.prototype.activate = function (state) {
        //   if (!this.packageView) {
        //     this.packageView = new WFDesignerPackageView(state, this.cfr, this.injector);
        //     this.workspace.addMainPanel({id: this.id, title: this.data.name, item: this.packageView.getElement()});
        var _this = this;
        //     const currentElement = this.packageView.getElement().instance as WFDesignerFrameComponent;
        //     if (currentElement) {
        //        currentElement.metadataContent = this.data;
        //     }
        //   }
        //   this.workspace.activePackage(this);
        // }
        this.gsp.workspace.addOpener(function (uri) {
            var center = _this.gsp.workspace.getCenter().getActivePane();
            center.onDidChangeActiveItem(function (item) { return _this.onTabChange(item); });
            return _this.openWFdesigner(uri);
        });
    };
    WFDesignerPackage.prototype.openWFdesigner = function (uri) {
        if (uri.endsWith('.wf')) {
            var pkgView_1 = new __WEBPACK_IMPORTED_MODULE_1__views__["WFDesignerPackageView"]({}, this.cfr, this.injector);
            var currentElement = pkgView_1.getElement().instance;
            currentElement.metadataUri = uri;
            // 这里需要处理uri，title应返回元数据名称，
            return {
                getTitle: function () { return uri.substring(uri.lastIndexOf('/') + 1); },
                getElement: function () { return pkgView_1.getElement(); }
            };
        }
    };
    WFDesignerPackage.prototype.onTabChange = function (item) {
        if (item == null) {
            return;
        }
        // console.log(item.getElement());
        // alert(beFlowchartDesignerComponent.metadataUri);
        if (item.getElement().instance instanceof __WEBPACK_IMPORTED_MODULE_2__views_wf_designer_frame_wf_designer_frame_component__["WFDesignerFrameComponent"]) {
            // console.log('这是的实例');
            var wfDesignerFrameComponent = item.getElement().instance;
            // if (wfDesignerFrameComponent.myParentPageMessageFunct != window['myParentPageMessageFunct']) {
            //   wfDesignerFrameComponent.initPropertyPanel();
            //   wfDesignerFrameComponent.addMessageListener();
            // }
        }
    };
    return WFDesignerPackage;
}(__WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__["Package"]));



/***/ }),

/***/ "./src/packages/wfdesigner-frame/service/WFPropertyService.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WFDesignerPropertyService", function() { return WFDesignerPropertyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit__ = __webpack_require__("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WFDesignerPropertyService = (function () {
    function WFDesignerPropertyService(componentFactoryResolvor) {
        this.componentFactoryResolvor = componentFactoryResolvor;
    }
    WFDesignerPropertyService.prototype.initPropertyContainer = function (container) {
        this.container = container;
    };
    WFDesignerPropertyService.prototype.createPropertyPanel = function (propertyConfig, propertyData) {
        this.container.clear();
        var itemPanel = this.componentFactoryResolvor.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit__["PropertyPanelComponent"]);
        var propertyRef = this.container.createComponent(itemPanel);
        propertyRef.instance.propertyConfig = propertyConfig;
        propertyRef.instance.propertyData = propertyData;
        return propertyRef.instance;
    };
    WFDesignerPropertyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]])
    ], WFDesignerPropertyService);
    return WFDesignerPropertyService;
}());



/***/ }),

/***/ "./src/packages/wfdesigner-frame/service/wfPublish.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WFPublishService", function() { return WFPublishService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublishOperatorType", function() { return PublishOperatorType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__farris_ide_devkit_services__ = __webpack_require__("./node_modules/@farris/ide-devkit/services/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__farris_ide_devkit_services___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__farris_ide_devkit_services__);
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
 * 流程发布服务
 */
var WFPublishService = (function () {
    function WFPublishService(http, cache) {
        this.http = http;
        this.cache = cache;
        this.currentUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["environment"].lcmUrl;
        this.sessonId = this.cache.get('sessionId');
    }
    /**
        * 发布流程定义
         * @param metadataID 元数据ID
         * @param packageName 元数据包名称
         * @param operation 流程发布操作
         */
    WFPublishService.prototype.publish = function (content, operation) {
        var publisData = {
            'procContent': content
        };
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({
                'Content-Type': 'application/json',
                'SessionId': this.sessonId
            })
        };
        var jitUrl = this.currentUrl + "api/runtime/wf/v1.0/ProcDefs/Deploy";
        return this.http.post(jitUrl, JSON.stringify(publisData), httpOptions);
    };
    WFPublishService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_3__farris_ide_devkit_services__["CacheService"]])
    ], WFPublishService);
    return WFPublishService;
}());

/**
 * 流程发布
 */
var PublishOperatorType;
(function (PublishOperatorType) {
    // 发布并禁用以前的流程
    PublishOperatorType[PublishOperatorType["PublicAndDisablePre"] = 1] = "PublicAndDisablePre";
    // 发布不禁用之前版本的流程
    PublishOperatorType[PublishOperatorType["PublishOnly"] = 2] = "PublishOnly";
    // 发布不生效
    PublishOperatorType[PublishOperatorType["PublishButNotUse"] = 3] = "PublishButNotUse";
})(PublishOperatorType || (PublishOperatorType = {}));


/***/ }),

/***/ "./src/packages/wfdesigner-frame/util/Utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Util", function() { return Util; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Util = (function () {
    function Util() {
    }
    Util.prototype.newGuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            // noinspection TsLint
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    Util = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], Util);
    return Util;
}());



/***/ }),

/***/ "./src/packages/wfdesigner-frame/views/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WFDesignerPackageView", function() { return WFDesignerPackageView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__ = __webpack_require__("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wf_designer_frame_wf_designer_frame_component__ = __webpack_require__("./src/packages/wfdesigner-frame/views/wf-designer-frame/wf-designer-frame.component.ts");
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


/**
 * Created by Zhang Zhichao on 2018/8/7.
 */
var WFDesignerPackageView = (function (_super) {
    __extends(WFDesignerPackageView, _super);
    function WFDesignerPackageView(serializedState, cfr, injector) {
        var _this = _super.call(this, serializedState) || this;
        _this.cfr = cfr;
        _this.injector = injector;
        var componentFactory = _this.cfr.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_1__wf_designer_frame_wf_designer_frame_component__["WFDesignerFrameComponent"]);
        _this.element = componentFactory.create(_this.injector);
        return _this;
    }
    return WFDesignerPackageView;
}(__WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__["PackageView"]));



/***/ }),

/***/ "./src/packages/wfdesigner-frame/views/wf-designer-frame/wf-designer-frame.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n}\r\n\r\n#bemain * {\r\n    padding: 0 !important;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n}\r\n\r\n.bpmn-designer{\r\n    height: 100%;\r\n    min-height: 400px;\r\n    /* height: -webkit-fill-available;  */\r\n    /* min-width: 550px; */\r\n    width: 100%;\r\n    /* width: -webkit-fill-available; */\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/wfdesigner-frame/views/wf-designer-frame/wf-designer-frame.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-column\" style=\"flex:1 1 auto;\">\r\n    <div id=\"bpmnmain\" class=\"d-flex flex-column\" style=\" flex: 1 1 auto; display:flex!important;flex-direction: row!important\">\r\n        <kendo-splitter-pane [collapsible]=\"false\" size=\"100%\">\r\n            <!-- <iframe #iframe class=\"bpmn-designer\" src=\"http://localhost:53266/index.html\" frameborder=\"0\"> -->\r\n            <iframe #iframe class=\"bpmn-designer\" [src]=\"srcUrl\" frameborder=\"0\" (load)=\"sendMetadataMessage(this)\" (readystatechange)=\"sendMetadataMessage(this)\">\r\n\r\n            </iframe>\r\n        </kendo-splitter-pane>\r\n        <kendo-splitter-pane [collapsible]=\"true\">\r\n            <!-- <button id=\"btn-update-cell\" (click)=\"test()\" style=\"display: none;\">更新</button> -->\r\n            <ng-container #propertyPanel></ng-container>\r\n            <!-- <div #propertyPanel></div> -->\r\n            <!-- <app-property-panel [(propertyConfig)]=\"propertyConfig\" [(propertyData)]=\"propertyData\"></app-property-panel> -->\r\n            <!-- <button (click)=\"test()\">Test</button> -->\r\n        </kendo-splitter-pane>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/packages/wfdesigner-frame/views/wf-designer-frame/wf-designer-frame.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export POST_MESSAGE_SOURCE */
/* unused harmony export POST_MESSAGE_TARGET */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WFDesignerFrameComponent", function() { return WFDesignerFrameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit__ = __webpack_require__("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_WFPropertyService_service__ = __webpack_require__("./src/packages/wfdesigner-frame/service/WFPropertyService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gsp_lcm_metadata_selector__ = __webpack_require__("./node_modules/@gsp-lcm/metadata-selector/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gsp_lcm_metadata_selector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__gsp_lcm_metadata_selector__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_Utils__ = __webpack_require__("./src/packages/wfdesigner-frame/util/Utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__farris_ide_devkit_services__ = __webpack_require__("./node_modules/@farris/ide-devkit/services/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__farris_ide_devkit_services___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__farris_ide_devkit_services__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_wfPublish_service__ = __webpack_require__("./src/packages/wfdesigner-frame/service/wfPublish.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var POST_MESSAGE_SOURCE = window.document.location.origin + '/platform/dev/main/web/wf/wwwroot/index.html';
var POST_MESSAGE_TARGET = window.document.location.origin + '/platform/dev/main/web/wf/wwwroot/index.html';
// const POST_MESSAGE_TARGET = 'http://localhost:10202/wwwroot/index.html';
// const POST_MESSAGE_SOURCE = 'http://localhost:42000/';
var WFDesignerFrameComponent = (function () {
    function WFDesignerFrameComponent(el, propertyService, lcmService, sanitizer, publishService, util, cache) {
        this.el = el;
        this.propertyService = propertyService;
        this.lcmService = lcmService;
        this.sanitizer = sanitizer;
        this.publishService = publishService;
        this.util = util;
        this.cache = cache;
        this.propertyConfig = [];
        this.propertyData = {};
        this.addMessageListener();
        this.iframeId = util.newGuid();
        // 修改iframe的url
        this.srcUrl = this.sanitizer.bypassSecurityTrustResourceUrl(POST_MESSAGE_TARGET + '?id=' + this.iframeId);
    }
    Object.defineProperty(WFDesignerFrameComponent.prototype, "metadataContent", {
        set: function (metadataContent) {
            this._metadataContent = metadataContent;
            this.loadMetadata(metadataContent);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WFDesignerFrameComponent.prototype, "metadataUri", {
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
            });
        },
        enumerable: true,
        configurable: true
    });
    WFDesignerFrameComponent.prototype.ngOnInit = function () {
        this.propertyService.initPropertyContainer(this.propertyContainer);
    };
    // ngAfterViewInit(): void {
    // }
    // ngAfterContentInit(): void {
    // }
    // iframe加载完成后向grapheditor发送消息
    WFDesignerFrameComponent.prototype.sendMetadataMessage = function (obj) {
        var _this = this;
        if (obj.readyState && obj.readyState !== 'complete') {
            return;
        }
        else {
            // alert('页面加载完成');
            setTimeout(function () {
                console.log('延时器');
                var iframeWindow = _this.iframe.nativeElement.contentWindow;
                iframeWindow.postMessage([_this.iframeId, '#open#' + _this._metadataContent], POST_MESSAGE_TARGET);
                console.log('metadata消息已发送.....');
            }, 1000);
        }
    };
    WFDesignerFrameComponent.prototype.addMessageListener = function () {
        var _this = this;
        window.addEventListener('message', function (event) {
            console.log('父页面收到' + event.origin + '消息......');
            if (POST_MESSAGE_TARGET.search(event.origin) !== -1 && event.data[0] === _this.iframeId) {
                if (typeof event.data[1] === 'string' && event.data[1].startsWith('#save#')) {
                    console.log('文件保存操作');
                    var content = event.data[1].substr(6);
                    _this._metadataContent = content;
                    _this.metadataDto.content = content;
                    _this.saveMetadata();
                    return;
                }
                if (typeof event.data[1] === 'string' && event.data[1].startsWith('#release#')) {
                    console.log(event.data[1].substr(9));
                    _this._metadataContent = event.data[1].substr(9);
                    _this.metadataDto.content = event.data[1].substr(9);
                    _this.publishProcess(_this._metadataContent, __WEBPACK_IMPORTED_MODULE_7__service_wfPublish_service__["PublishOperatorType"].PublicAndDisablePre);
                    return;
                }
                _this.setPropertyConfig(event.data[1]);
            }
        }, false);
    };
    /**
     * 父子页面规定好传输json数据格式{'geomtry': {k0:v0,k1:v1,...},'property': {k0:v0,k1:v1,...}}
     * @param obj
     */
    WFDesignerFrameComponent.prototype.setPropertyConfig = function (obj) {
        // 更新属性框数据与配置
        this.propertyConfig = this.convertToPropertyConfig(obj['propertyConfig']);
        this.propertyData = obj['propertyData'];
        this.showPropertiesPanel();
    };
    // 将obj['propertyConfig']转化为ElementPropertyConfig[]
    WFDesignerFrameComponent.prototype.convertToPropertyConfig = function (obj) {
        var _this = this;
        var propertyConfig = [];
        if (obj) {
            obj.forEach(function (element) {
                var elementPropertyConfig = new __WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit__["ElementPropertyConfig"]();
                elementPropertyConfig.categoryId = element['categoryId'];
                elementPropertyConfig.categoryName = element['categoryName'];
                elementPropertyConfig.setPropertyRelates = element['setPropertyRelates'] !== undefined ? element['setPropertyRelates'] : undefined;
                elementPropertyConfig.properties = element['properties'] ? _this.convertToPropertyEntity(element['properties']) : [];
                propertyConfig.push(elementPropertyConfig);
            });
        }
        return propertyConfig;
    };
    // 将element['properties']转化为PropertyEntity[]
    WFDesignerFrameComponent.prototype.convertToPropertyEntity = function (obj) {
        var properties = [];
        obj.forEach(function (item) {
            var property = new __WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit__["PropertyEntity"]();
            for (var i in item) {
                property[i] = item[i];
            }
            properties.push(property);
        });
        return properties;
    };
    WFDesignerFrameComponent.prototype.showPropertiesPanel = function () {
        var _this = this;
        var propertyPanel = this.propertyService.createPropertyPanel(this.propertyConfig, this.propertyData);
        // propertyPanel.propertyValueChanged(this.propertyData);
        propertyPanel.propertyChanged.subscribe(function (data) {
            // console.log(JSON.stringify(data));
            _this.sendMessage(_this.createMessage(data));
        });
        return false; // 防止冒泡
    };
    // 构造属性修改时父页面与子页面之间传递消息
    WFDesignerFrameComponent.prototype.createMessage = function (data) {
        var msg = {};
        // 需携带唯一id使子页面确定是哪一元素
        msg['id'] = this.propertyData['id'];
        // 修改内容的key和value
        msg['propertyID'] = data['propertyID'];
        msg['propertyValue'] = data['propertyValue'];
        return JSON.stringify(msg);
    };
    // 向子页面发送修改消息
    WFDesignerFrameComponent.prototype.sendMessage = function (data) {
        var iframeWindow = this.iframe.nativeElement.contentWindow;
        iframeWindow.postMessage([this.iframeId, data], POST_MESSAGE_TARGET);
    };
    /**
     *
     * @param dto 加载元数据
     */
    WFDesignerFrameComponent.prototype.loadMetadata = function (dto) {
        // debugger;
        // HttpUrlConst.currentPath = dto.relativePath;
        this.metadataDto = dto;
        if (this.metadataDto.content && this.metadataDto.content !== '') {
            this._metadataContent = dto.content;
        }
    };
    /**
     * 保存元数据
     */
    WFDesignerFrameComponent.prototype.saveMetadata = function () {
        this.saveMetadataService().subscribe(function (data) {
            alert('保存成功');
        });
    };
    WFDesignerFrameComponent.prototype.saveMetadataService = function () {
        return this.lcmService.SaveMetadata(this.metadataDto, this.cache.get('sessionId'));
    };
    WFDesignerFrameComponent.prototype.publishProcess = function (content, publishOption) {
        this.publishService.publish(content, publishOption).subscribe(function (data) {
            alert('发布成功');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('propertyPanel', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"])
    ], WFDesignerFrameComponent.prototype, "propertyContainer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('iframe'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], WFDesignerFrameComponent.prototype, "iframe", void 0);
    WFDesignerFrameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-wf-designer-frame',
            template: __webpack_require__("./src/packages/wfdesigner-frame/views/wf-designer-frame/wf-designer-frame.component.html"),
            styles: [__webpack_require__("./src/packages/wfdesigner-frame/views/wf-designer-frame/wf-designer-frame.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__service_WFPropertyService_service__["WFDesignerPropertyService"], __WEBPACK_IMPORTED_MODULE_7__service_wfPublish_service__["WFPublishService"], __WEBPACK_IMPORTED_MODULE_4__util_Utils__["Util"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_2__service_WFPropertyService_service__["WFDesignerPropertyService"],
            __WEBPACK_IMPORTED_MODULE_3__gsp_lcm_metadata_selector__["GSPMetadataService"], __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["DomSanitizer"],
            __WEBPACK_IMPORTED_MODULE_7__service_wfPublish_service__["WFPublishService"], __WEBPACK_IMPORTED_MODULE_4__util_Utils__["Util"], __WEBPACK_IMPORTED_MODULE_5__farris_ide_devkit_services__["CacheService"]])
    ], WFDesignerFrameComponent);
    return WFDesignerFrameComponent;
}());



/***/ }),

/***/ "./src/packages/wfdesigner-frame/views/wf-designer-frame/wf-designer-frame.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WFDesignerFrameModule", function() { return WFDesignerFrameModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wf_designer_frame_component__ = __webpack_require__("./src/packages/wfdesigner-frame/views/wf-designer-frame/wf-designer-frame.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_layout__ = __webpack_require__("./node_modules/@progress/kendo-angular-layout/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_treeview__ = __webpack_require__("./node_modules/@progress/kendo-angular-treeview/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_popup__ = __webpack_require__("./node_modules/@progress/kendo-angular-popup/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_dropdowns__ = __webpack_require__("./node_modules/@progress/kendo-angular-dropdowns/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_inputs__ = __webpack_require__("./node_modules/@progress/kendo-angular-inputs/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__ = __webpack_require__("./node_modules/primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__progress_kendo_angular_buttons__ = __webpack_require__("./node_modules/@progress/kendo-angular-buttons/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__farris_ide_devkit__ = __webpack_require__("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__farris_ide_devkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__farris_ide_devkit__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// import { GridModule } from '@progress/kendo-angular-grid/dist/es2015/grid.module';

// import { AuthorizationModule } from '../../../bedesigner-frame/views/bedesigner-frame/refModule/authorization/authorization.module';


var WFDesignerFrameModule = (function () {
    function WFDesignerFrameModule() {
    }
    WFDesignerFrameModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_11__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__wf_designer_frame_component__["WFDesignerFrameComponent"],
            ],
            imports: [
                // 元数据选择界面
                // MetadataModule,
                // AuthorizationModule,
                __WEBPACK_IMPORTED_MODULE_10__angular_common__["CommonModule"],
                // HttpClientModule,
                // HttpClientJsonpModule,
                // GridModule,
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_9__progress_kendo_angular_buttons__["ButtonsModule"],
                __WEBPACK_IMPORTED_MODULE_9__progress_kendo_angular_buttons__["ButtonGroupModule"],
                __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_inputs__["InputsModule"],
                __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_dropdowns__["DropDownListModule"],
                __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_popup__["PopupModule"],
                __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_treeview__["TreeViewModule"],
                __WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_layout__["LayoutModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_layout__["SplitterModule"],
                __WEBPACK_IMPORTED_MODULE_12__farris_ide_devkit__["PropertyPanelModule"]
            ],
            providers: [],
            exports: [__WEBPACK_IMPORTED_MODULE_0__wf_designer_frame_component__["WFDesignerFrameComponent"]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_0__wf_designer_frame_component__["WFDesignerFrameComponent"]]
        })
    ], WFDesignerFrameModule);
    return WFDesignerFrameModule;
}());



/***/ }),

/***/ "./src/packages/wfdesigner-frame/wf-designer-package.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WFDesignerPackageModule", function() { return WFDesignerPackageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_wf_designer_frame_wf_designer_frame_module__ = __webpack_require__("./src/packages/wfdesigner-frame/views/wf-designer-frame/wf-designer-frame.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_ide_devkit__ = __webpack_require__("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_ide_devkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__farris_ide_devkit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3____ = __webpack_require__("./src/packages/wfdesigner-frame/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
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





var WFDesignerPackageModule = (function (_super) {
    __extends(WFDesignerPackageModule, _super);
    function WFDesignerPackageModule(cfr, injector) {
        var _this = _super.call(this) || this;
        _this.cfr = cfr;
        _this.injector = injector;
        return _this;
    }
    WFDesignerPackageModule.prototype.initPackage = function (gsp) {
        this.package = new __WEBPACK_IMPORTED_MODULE_3____["WFDesignerPackage"](gsp, this.cfr, this.injector);
    };
    WFDesignerPackageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__views_wf_designer_frame_wf_designer_frame_module__["WFDesignerFrameModule"],
                __WEBPACK_IMPORTED_MODULE_2__farris_ide_devkit__["PropertyPanelModule"],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"],
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], WFDesignerPackageModule);
    return WFDesignerPackageModule;
}(__WEBPACK_IMPORTED_MODULE_2__farris_ide_devkit__["PackageModule"]));

//# sourceMappingURL=wf-designer-package.module.js.map

/***/ })

},[]);
//# sourceMappingURL=wf-designer-package.module.chunk.js.map