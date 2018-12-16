webpackJsonp(["aif-be-creation-process.module"],{

/***/ "./src/app/modules/aif-be-creation-process/Guid.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Guid", function() { return Guid; });
var Guid = /** @class */ (function () {
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

/***/ "./src/app/modules/aif-be-creation-process/aif-be-creation-process-edit/aif-be-creation-process-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/aif-be-creation-process/aif-be-creation-process-edit/aif-be-creation-process-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex g-main\">\r\n  <div class=\"col\">\r\n    <div class=\"d-flex flex-row  g-main px-2\" style=\"overflow:hidden;\">\r\n      <div class=\"col\">\r\n        <div class=\"d-flex flex-column g-main\">\r\n          <div class=\"pt-2 mb-2\">\r\n            <div class=\"row pt-2 mb-2\">\r\n              <div class=\"col-sm-12 col-md-12\">\r\n                <div class=\"d-relative\">\r\n                  <img class=\"float-left\" src=\"/platform/dev/main/web/bpm/assets/img/analytics-49.png\" width=\"64\" height=\"64\">\r\n                  <h3 class=\"float-left\">生单流程</h3>\r\n                </div>\r\n                <div class=\"pr-2 text-right\">\r\n                  <div class=\"btn-group mr-1\">\r\n                    <!-- <button class=\"btn btn-sm btn-primary\" (click)='saveBeCreationProcess()'> 保存 </button> -->\r\n                    <button class=\"btn btn-sm ml-2 btn-default\" (click)='closeWindow()'>返回列表</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"flex-auto\" style=\"overflow-y:auto;\" id=\"attachmentParent\">\r\n            <form class=\"k-form\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-12 col-md-6 pb-1\">\r\n                  <label class=\"k-form-field\" for=\"id\">\r\n                    <span>ID</span>\r\n                    <input class=\"k-textbox w-100\" readonly placeholder=\"\" name=\"id\" [(ngModel)]=\"toEditBeCreationProcess&&toEditBeCreationProcess.Id\">\r\n                  </label>\r\n\r\n                  <label class=\"k-form-field \" for=\"name\">\r\n                    <span>名称</span>\r\n                    <input class=\"k-textbox w-100\" readonly placeholder=\"\" name=\"name\" [(ngModel)]=\"toEditBeCreationProcess&&toEditBeCreationProcess.Name\">\r\n                  </label>\r\n\r\n                  <label class=\"k-form-field\" for=\"isEnabled\">\r\n                    <div class=\"d-flex mr-5\">\r\n                      <input type=\"checkbox\" id=\"isEnabled\" [disabled]=\"true\" class=\"k-checkbox\" name=\"isEnabled\" [(ngModel)]=\"toEditBeCreationProcess&&toEditBeCreationProcess.IsEnabled\">\r\n                      <label class=\"k-checkbox-label\" for=\"isEnabled\">是否启用</label>\r\n                    </div>\r\n                  </label>\r\n\r\n                  <label class=\"k-form-field\" for=\"beCreationRuleId\">\r\n                    <div class=\"d-flex\">\r\n                      <span>生单规则ID</span>\r\n                      <input class=\"k-textbox w-100\" readonly placeholder=\"\" name=\"beCreationRuleId\" [(ngModel)]=\"toEditBeCreationProcess&&toEditBeCreationProcess.BeCreationRuleId\">\r\n                    </div>\r\n                  </label>\r\n\r\n                  <label class=\"k-form-field\" for=\"description\">\r\n                    <span>描述</span>\r\n                    <textarea kendoTextArea class=\"form-control\" readonly placeholder=\"\" name=\"description\" [(ngModel)]=\"toEditBeCreationProcess&&toEditBeCreationProcess.Description\"></textarea>\r\n                  </label>\r\n                </div>\r\n\r\n                <div class=\"col-sm-12 col-md-6 pb-1\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"k-form-field\" for=\"sourceBeType\">\r\n                      <span>来源BE类型</span>\r\n                      <input class=\"k-textbox w-100\" readonly placeholder=\"\" name=\"sourceBeType\" [(ngModel)]=\"toEditBeCreationProcess&&toEditBeCreationProcess.SourceBeType\">\r\n                    </label>\r\n\r\n                    <label class=\"k-form-field \" for=\"beEventId\">\r\n                      <span>来源业务事件编号</span>\r\n                      <input class=\"k-textbox w-100\" readonly placeholder=\"\" name=\"beEventId\" [(ngModel)]=\"toEditBeCreationProcess&&toEditBeCreationProcess.BeEventId\">\r\n                    </label>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"k-form-field\" for=\"targetBeType\">\r\n                      <span>目标BE类型</span>\r\n                      <input class=\"k-textbox w-100\" readonly placeholder=\"\" name=\"targetBeType\" [(ngModel)]=\"toEditBeCreationProcess&&toEditBeCreationProcess.TargetBeType\">\r\n                    </label>\r\n\r\n                    <label class=\"k-form-field \" for=\"beActionId\">\r\n                      <span>目标业务动作编号</span>\r\n                      <input class=\"k-textbox w-100\" readonly placeholder=\"\" name=\"beActionId\" [(ngModel)]=\"toEditBeCreationProcess&&toEditBeCreationProcess.BeActionId\">\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/aif-be-creation-process/aif-be-creation-process-edit/aif-be-creation-process-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AifBeCreationProcessEditComponent", function() { return AifBeCreationProcessEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gsp_sys_rtf_common__ = __webpack_require__("./node_modules/@gsp-sys/rtf-common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gsp_sys_rtf_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__gsp_sys_rtf_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__aif_be_creation_process_entity__ = __webpack_require__("./src/app/modules/aif-be-creation-process/aif-be-creation-process-entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_aif_be_creation_process_service__ = __webpack_require__("./src/app/modules/aif-be-creation-process/service/aif-be-creation-process.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Guid__ = __webpack_require__("./src/app/modules/aif-be-creation-process/Guid.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AifBeCreationProcessEditComponent = /** @class */ (function () {
    function AifBeCreationProcessEditComponent(router, activatedRoute, beCreationProcessService, frmService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.beCreationProcessService = beCreationProcessService;
        this.frmService = frmService;
        this.disabled = false;
        this.isNewAdd = true;
    }
    AifBeCreationProcessEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (params) {
            if (params.has('funcid')) {
                _this.funcid = params.get('funcid');
                _this.sessionId = _this.frmService.getSession(_this.funcid);
            }
        });
        this.activatedRoute.queryParams.subscribe(function (params) {
            if (params['funcParam']) {
                _this.disabled = true;
                _this.isNewAdd = false;
                _this.beCreationProcessService.getBeCreationProcess(params['funcParam']).subscribe(function (data) { return _this.toEditBeCreationProcess = data; });
            }
            else {
                _this.disabled = false;
                _this.isNewAdd = true;
                _this.toEditBeCreationProcess = new __WEBPACK_IMPORTED_MODULE_3__aif_be_creation_process_entity__["AifBeCreationProcessEntity"]();
                _this.toEditBeCreationProcess.Id = __WEBPACK_IMPORTED_MODULE_5__Guid__["Guid"].newGuid();
            }
        });
    };
    AifBeCreationProcessEditComponent.prototype.closeWindow = function () {
        this.frmService.openFunc(this.funcid, 'beCreationProcess', this.sessionId, false);
    };
    AifBeCreationProcessEditComponent.prototype.saveBeCreationProcess = function () {
        var _this = this;
        if (this.isNewAdd == true) {
            this.beCreationProcessService.addBeCreationProcess(this.toEditBeCreationProcess).subscribe(function () {
                _this.frmService.openFunc(_this.funcid, 'beCreationProcess', _this.sessionId, false);
                alert("新增成功");
            });
        }
        else {
            this.beCreationProcessService.editBeCreationProcess(this.toEditBeCreationProcess).subscribe(function () {
                _this.frmService.openFunc(_this.funcid, 'beCreationProcess', _this.sessionId, false);
                alert("修改成功");
            });
        }
    };
    AifBeCreationProcessEditComponent.prototype.beEventConsult = function () {
        alert("Be事件参照界面");
    };
    AifBeCreationProcessEditComponent.prototype.beActionConsult = function () {
        alert("Be动作参照界面");
    };
    AifBeCreationProcessEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-aif-be-creation-process-edit',
            template: __webpack_require__("./src/app/modules/aif-be-creation-process/aif-be-creation-process-edit/aif-be-creation-process-edit.component.html"),
            styles: [__webpack_require__("./src/app/modules/aif-be-creation-process/aif-be-creation-process-edit/aif-be-creation-process-edit.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__service_aif_be_creation_process_service__["AifBeCreationProcessService"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_4__service_aif_be_creation_process_service__["AifBeCreationProcessService"],
            __WEBPACK_IMPORTED_MODULE_2__gsp_sys_rtf_common__["FrameworkService"]])
    ], AifBeCreationProcessEditComponent);
    return AifBeCreationProcessEditComponent;
}());



/***/ }),

/***/ "./src/app/modules/aif-be-creation-process/aif-be-creation-process-entity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AifBeCreationProcessEntity", function() { return AifBeCreationProcessEntity; });
var AifBeCreationProcessEntity = /** @class */ (function () {
    function AifBeCreationProcessEntity() {
    }
    return AifBeCreationProcessEntity;
}());



/***/ }),

/***/ "./src/app/modules/aif-be-creation-process/aif-be-creation-process-manager/aif-be-creation-process-manager.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    height: 100%;\r\n  }"

/***/ }),

/***/ "./src/app/modules/aif-be-creation-process/aif-be-creation-process-manager/aif-be-creation-process-manager.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex g-main\">\r\n  <div class=\"col\">\r\n    <div class=\"g-main d-flex flex-column px-2\">\r\n      <div class=\"pt-2 mb-2 clearfix\">\r\n        <!--页面操作按钮 ————————————————开始-->\r\n        <div class=\"float-right pr-2\">\r\n          <!-- <button class=\"btn btn-sm btn-primary\" (click)='addBeCreationProcess()'> 新建 </button>\r\n          <button class=\"btn btn-sm ml-2 btn-default\" [disabled]=\"disabledState\" (click)='editBeCreationProcess()'>编辑 </button>\r\n          <button class=\"btn btn-sm ml-2 btn-default\" [disabled]=\"disabledState\" (click)=\"deleteBeCreationProcesses()\">删除 </button> -->\r\n          <button class=\"btn btn-sm ml-2 btn-default\" [disabled]=\"disabledState\" (click)='viewData()'> 查看 </button>\r\n          <button class=\"btn btn-sm ml-2 btn-default\" (click)='loadItems()'> 刷新 </button>\r\n        </div>\r\n        <!--页面操作按钮 ————————————————结束-->\r\n        <div class=\"d-relative\">\r\n          <img class=\"float-left\" src=\"/platform/dev/main/web/bpm/assets/img/analytics-49.png\" width=\"64\" height=\"64\">\r\n          <h3 class=\"float-left\">生单流程</h3>\r\n        </div>\r\n      </div>\r\n      <!--工具栏 ————————————开始 -->\r\n      <!-- <div class=\"text-right mb-1 pr-2 position-relative clearfix\">\r\n     \r\n        <div class=\"mr-auto float-left position-relative\">\r\n          <div class=\"form-inline\">\r\n            <div class=\" k-form-field mx-2\">\r\n              <kendo-dropdownlist [data]=\"searchContext\" textField=\"text\" valueField=\"value\" [(ngModel)]=\"selectedSearchContext\">\r\n              </kendo-dropdownlist>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <div class=\" k-form-field mx-2\">\r\n                <kendo-dropdownlist [data]=\"searchCondition\" textField=\"text\" valueField=\"value\" [(ngModel)]=\"selectedSearchCondtion\">\r\n                </kendo-dropdownlist>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <div class=\" k-form-field mx-2\">\r\n                <input class=\"k-textbox w-100\">\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <button class=\"p-0 mr-1 k-button\">\r\n                <i class=\"material-icons align-middle\">search</i>\r\n              </button>\r\n              <span class=\"p-0 mr-1 k-button k-bare\" (click)=\"demo()\">\r\n                <i class=\"material-icons align-middle\" style=\" font-size: 18px;\">filter_none</i>\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      \r\n      </div> -->\r\n      <!--工具栏 ————————————结束 -->\r\n      <div class=\"flex-auto d-flex \" style=\"position:relative;\">\r\n        <kendo-grid [data]=\"gridData\" class=\"flex-auto\" [resizable]=\"true\" [pageable]=\"true\" [selectable]=\"selectableSettings\" [skip]=\"skip\"\r\n          [pageSize]=\"pageSize\" (pageChange)=\"pageChange($event)\" [selectable]=\"selectableSettings\" [kendoGridSelectBy]=\"'Id'\"\r\n          [selectedKeys]=\"selectedBeCreationProcessKeys\" (selectedKeysChange)=\"selectedKeysChange()\">\r\n          <!-- <kendo-grid-checkbox-column [width]=\"30\"></kendo-grid-checkbox-column> -->\r\n          <kendo-grid-column field=\"Id\" title=\"ID\"></kendo-grid-column>\r\n          <kendo-grid-column field=\"Name\" title=\"名称\"></kendo-grid-column>\r\n          <kendo-grid-column field=\"IsEnabled\" title=\"是否启用\"></kendo-grid-column>\r\n          <kendo-grid-column field=\"BeCreationRuleId\" title=\"生单规则ID\"></kendo-grid-column>\r\n          <kendo-grid-column field=\"SourceBeType\" title=\"来源BE类型\"></kendo-grid-column>\r\n          <kendo-grid-column field=\"BeEventId\" title=\"来源业务事件编号\"></kendo-grid-column>\r\n          <kendo-grid-column field=\"TargetBeType\" title=\"目标BE类型\"></kendo-grid-column>\r\n          <kendo-grid-column field=\"BeActionId\" title=\"目标业务动作编号\"></kendo-grid-column>\r\n          <kendo-grid-column field=\"Description\" title=\"描述\"></kendo-grid-column>\r\n        </kendo-grid>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"deletePromptBoxOpened\">\r\n  <kendo-dialog title=\"警告\" (close)=\"cancelDelete()\" [minWidth]=\"250\" [width]=\"450\">\r\n    <p style=\"margin: 30px; text-align: center;\">确实要删除该条数据吗?</p>\r\n    <kendo-dialog-actions>\r\n      <button kendoButton (click)=\"cancelDelete()\">取消</button>\r\n      <button kendoButton (click)=\"submitDelete()\" primary=\"true\">确定</button>\r\n    </kendo-dialog-actions>\r\n  </kendo-dialog>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/aif-be-creation-process/aif-be-creation-process-manager/aif-be-creation-process-manager.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AifBeCreationProcessManagerComponent", function() { return AifBeCreationProcessManagerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gsp_sys_rtf_common__ = __webpack_require__("./node_modules/@gsp-sys/rtf-common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gsp_sys_rtf_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__gsp_sys_rtf_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_aif_be_creation_process_service__ = __webpack_require__("./src/app/modules/aif-be-creation-process/service/aif-be-creation-process.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AifBeCreationProcessManagerComponent = /** @class */ (function () {
    function AifBeCreationProcessManagerComponent(router, activatedRoute, beCreationProcessService, frmService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.beCreationProcessService = beCreationProcessService;
        this.frmService = frmService;
        this.skip = 0;
        this.pageSize = 50;
        this.selectedMode = 'multiple';
        this.checkboxOnly = false;
        this.selectedBeCreationProcessKeys = new Array();
        this.disabledState = true;
        this.deletePromptBoxOpened = false;
        this.beCreationProcessDatas = new Array();
        this.searchContext = [
            { value: '', text: '请选择' },
            { value: 'beCreationProcessName', text: 'Be事件名称' },
            { value: 'beMetadata', text: 'Be元数据' }
        ];
        this.selectedSearchContext = this.searchContext[0];
        this.searchCondition = [
            { value: '', text: '请选择' },
            { value: 'include', text: '包含' },
            { value: 'equal', text: '等于' }
        ];
        this.selectedSearchCondtion = this.searchCondition[0];
        this.selectableSettings = {
            checkboxOnly: this.checkboxOnly,
            mode: this.selectedMode
        };
    }
    AifBeCreationProcessManagerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (params) {
            if (params.has('funcid')) {
                _this.funcid = params.get('funcid');
                _this.sessionId = _this.frmService.getSession(_this.funcid);
            }
        });
        this.loadItems();
    };
    AifBeCreationProcessManagerComponent.prototype.pageChange = function (event) {
        this.skip = event.skip;
        this.loadItems();
    };
    AifBeCreationProcessManagerComponent.prototype.selectedKeysChange = function () {
        if (this.selectedBeCreationProcessKeys.length > 0) {
            this.disabledState = false;
        }
        else {
            this.disabledState = true;
        }
    };
    AifBeCreationProcessManagerComponent.prototype.loadItems = function () {
        var _this = this;
        this.beCreationProcessService.getBeCreationProcesses().subscribe(function (resultData) {
            _this.beCreationProcessDatas = resultData.value;
            if (_this.beCreationProcessDatas != null) {
                _this.gridData = {
                    data: _this.beCreationProcessDatas.slice(_this.skip, _this.skip + _this.pageSize),
                    total: _this.beCreationProcessDatas.length
                };
            }
            else {
                _this.gridData = null;
            }
        });
    };
    AifBeCreationProcessManagerComponent.prototype.viewData = function () {
        this.frmService.openFunc(this.funcid, "beCreationProcess/" + this.funcid + "/viewBeCreationProcessForm", this.sessionId, false, this.selectedBeCreationProcessKeys ? this.selectedBeCreationProcessKeys[0] : null);
    };
    AifBeCreationProcessManagerComponent.prototype.addBeCreationProcess = function () {
        this.frmService.openFunc(this.funcid, "beCreationProcess/" + this.funcid + "/editBeCreationProcessForm", this.sessionId, false);
    };
    AifBeCreationProcessManagerComponent.prototype.editBeCreationProcess = function () {
        if (this.selectedBeCreationProcessKeys.length > 1) {
            alert("每次只能修改一条数据");
        }
        else {
            this.frmService.openFunc(this.funcid, "beCreationProcess/" + this.funcid + "/editBeCreationProcessForm", this.sessionId, false, this.selectedBeCreationProcessKeys ? this.selectedBeCreationProcessKeys[0] : null);
        }
    };
    AifBeCreationProcessManagerComponent.prototype.submitDelete = function () {
        var _this = this;
        this.deletePromptBoxOpened = false;
        this.beCreationProcessService.deleteBeCreationProcess(this.selectedBeCreationProcessKeys[0]).subscribe(function () {
            _this.loadItems();
            _this.selectedBeCreationProcessKeys = new Array();
            alert("删除成功");
        });
    };
    AifBeCreationProcessManagerComponent.prototype.cancelDelete = function () {
        this.deletePromptBoxOpened = false;
    };
    AifBeCreationProcessManagerComponent.prototype.deleteBeCreationProcesses = function () {
        this.deletePromptBoxOpened = true;
    };
    AifBeCreationProcessManagerComponent.prototype.demo = function () {
        alert("搜索方案窗口");
    };
    AifBeCreationProcessManagerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-aif-be-creation-process-manager',
            template: __webpack_require__("./src/app/modules/aif-be-creation-process/aif-be-creation-process-manager/aif-be-creation-process-manager.component.html"),
            styles: [__webpack_require__("./src/app/modules/aif-be-creation-process/aif-be-creation-process-manager/aif-be-creation-process-manager.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__service_aif_be_creation_process_service__["AifBeCreationProcessService"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_3__service_aif_be_creation_process_service__["AifBeCreationProcessService"],
            __WEBPACK_IMPORTED_MODULE_2__gsp_sys_rtf_common__["FrameworkService"]])
    ], AifBeCreationProcessManagerComponent);
    return AifBeCreationProcessManagerComponent;
}());



/***/ }),

/***/ "./src/app/modules/aif-be-creation-process/aif-be-creation-process.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AifBeCreationProcessModule", function() { return AifBeCreationProcessModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_buttons__ = __webpack_require__("./node_modules/@progress/kendo-angular-buttons/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_grid__ = __webpack_require__("./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_dialog__ = __webpack_require__("./node_modules/@progress/kendo-angular-dialog/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_dropdowns__ = __webpack_require__("./node_modules/@progress/kendo-angular-dropdowns/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__aif_be_creation_process_routes__ = __webpack_require__("./src/app/modules/aif-be-creation-process/aif-be-creation-process.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__aif_be_creation_process_manager_aif_be_creation_process_manager_component__ = __webpack_require__("./src/app/modules/aif-be-creation-process/aif-be-creation-process-manager/aif-be-creation-process-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__aif_be_creation_process_edit_aif_be_creation_process_edit_component__ = __webpack_require__("./src/app/modules/aif-be-creation-process/aif-be-creation-process-edit/aif-be-creation-process-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AifBeCreationProcessModule = /** @class */ (function () {
    function AifBeCreationProcessModule() {
    }
    AifBeCreationProcessModule = __decorate([
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
                __WEBPACK_IMPORTED_MODULE_8__aif_be_creation_process_routes__["AifBeCreationProcessRoots"],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_9__aif_be_creation_process_manager_aif_be_creation_process_manager_component__["AifBeCreationProcessManagerComponent"], __WEBPACK_IMPORTED_MODULE_10__aif_be_creation_process_edit_aif_be_creation_process_edit_component__["AifBeCreationProcessEditComponent"]],
        })
    ], AifBeCreationProcessModule);
    return AifBeCreationProcessModule;
}());

//# sourceMappingURL=aif-be-creation-process.module.js.map

/***/ }),

/***/ "./src/app/modules/aif-be-creation-process/aif-be-creation-process.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AifBeCreationProcessRoots", function() { return AifBeCreationProcessRoots; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aif_be_creation_process_manager_aif_be_creation_process_manager_component__ = __webpack_require__("./src/app/modules/aif-be-creation-process/aif-be-creation-process-manager/aif-be-creation-process-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aif_be_creation_process_edit_aif_be_creation_process_edit_component__ = __webpack_require__("./src/app/modules/aif-be-creation-process/aif-be-creation-process-edit/aif-be-creation-process-edit.component.ts");



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__aif_be_creation_process_manager_aif_be_creation_process_manager_component__["AifBeCreationProcessManagerComponent"] },
    { path: 'viewBeCreationProcessForm/:funcid', component: __WEBPACK_IMPORTED_MODULE_2__aif_be_creation_process_edit_aif_be_creation_process_edit_component__["AifBeCreationProcessEditComponent"] }
];
var AifBeCreationProcessRoots = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/modules/aif-be-creation-process/service/aif-be-creation-process.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AifBeCreationProcessService", function() { return AifBeCreationProcessService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gsp_sys_rtf_common__ = __webpack_require__("./node_modules/@gsp-sys/rtf-common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gsp_sys_rtf_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__gsp_sys_rtf_common__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AifBeCreationProcessService = /** @class */ (function () {
    function AifBeCreationProcessService(http) {
        this.http = http;
        this.baseUrl = '/api/dev/sys/v1.0/BeCreationProcessEntities';
    }
    AifBeCreationProcessService.prototype.getBeCreationProcess = function (beCreationProcessKey) {
        var url = " " + this.baseUrl + "/" + beCreationProcessKey;
        return this.http.get(url);
    };
    AifBeCreationProcessService.prototype.getBeCreationProcesses = function () {
        return this.http.get(this.baseUrl);
    };
    AifBeCreationProcessService.prototype.addBeCreationProcess = function (item) {
        return this.http.post(this.baseUrl, item);
    };
    AifBeCreationProcessService.prototype.editBeCreationProcess = function (item) {
        var url = this.baseUrl + "/" + item.Id;
        return this.http.put(url, item);
    };
    AifBeCreationProcessService.prototype.deleteBeCreationProcess = function (beCreationProcessKey) {
        var url = " " + this.baseUrl + "/" + beCreationProcessKey;
        return this.http.delete(url, null);
    };
    AifBeCreationProcessService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__gsp_sys_rtf_common__["HttpService"]])
    ], AifBeCreationProcessService);
    return AifBeCreationProcessService;
}());



/***/ })

},[],["progress"],["progress"]);
//# sourceMappingURL=aif-be-creation-process.module.chunk.js.map