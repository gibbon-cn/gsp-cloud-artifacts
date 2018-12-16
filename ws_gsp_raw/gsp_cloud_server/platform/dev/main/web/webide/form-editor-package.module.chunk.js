webpackJsonp(["form-editor-package.module"],{

/***/ "./src/packages/form-editor-package/components/collection/dg-grid/dg-grid.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n    display: block;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/form-editor-package/components/collection/dg-grid/dg-grid.component.html":
/***/ (function(module, exports) {

module.exports = "<kendo-grid [height]=\"300\" [pageable]=\"grid.pagination?true:false\" [pageSize]=\"grid.pagination?grid.pagination.pageSize:0\" [id]=\"grid.id\">\r\n  <kendo-grid-column *ngFor=\"let column of grid.fields\" [id]=\"column.id\" [title]=\"column.caption\" [field]=\"column.dataField\" [width]=\"column.size && column.size.width\"></kendo-grid-column>\r\n</kendo-grid>"

/***/ }),

/***/ "./src/packages/form-editor-package/components/collection/dg-grid/dg-grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DgGridComponent", function() { return DgGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_form_service__ = __webpack_require__("./src/packages/form-editor-package/service/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_control_tree_service__ = __webpack_require__("./src/packages/form-editor-package/service/control-tree.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_viewmodel_service__ = __webpack_require__("./src/packages/form-editor-package/service/viewmodel.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DgGridComponent = (function () {
    function DgGridComponent(el, renderer, formService, viewModelService, controlTreeService) {
        this.el = el;
        this.renderer = renderer;
        this.formService = formService;
        this.viewModelService = viewModelService;
        this.controlTreeService = controlTreeService;
        // super(el, renderer, formService, controlTreeService);
    }
    DgGridComponent.prototype.onClick = function ($event) {
        if ($event) {
            $event.stopPropagation();
        }
        var elements = document.getElementsByClassName('dgComponentSelected');
        if (elements && elements.length > 0) {
            elements[0].classList.remove('dgComponentSelected');
        }
        if ($event && $event.target.className.startsWith('k-header')) {
            var colIndex = $event.target.attributes['aria-colindex'].value;
            var fieldData = this.grid.fields[colIndex - 1];
            this.formService.createPropertyPanel(fieldData);
            $event.target.classList.add('dgComponentSelected');
        }
        else {
            this.showProperty();
            if ($event) {
                this.triggerTreeFocus();
            }
            this.renderer.setElementClass(this.el.nativeElement, 'dgComponentSelected', true);
        }
    };
    DgGridComponent.prototype.ngOnInit = function () {
        if (!this.grid) {
            return;
        }
        var appearance = this.grid['appearance'];
        if (appearance && appearance.class) {
            this.renderer.setElementClass(this.el.nativeElement, appearance.class, true);
        }
    };
    /**
       * 触发属性面板展示
       */
    DgGridComponent.prototype.showProperty = function () {
        var treeData = this.viewModelService.getChildVMTree(this.grid.dataSource);
        this.formService.createGridPropertyPanel(this.grid, treeData);
        return false;
    };
    /**
     * 触发控件树focus
     */
    DgGridComponent.prototype.triggerTreeFocus = function () {
        this.controlTreeService.triggerTreeFocus.next(this.grid.id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DgGridComponent.prototype, "grid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DgGridComponent.prototype, "onClick", null);
    DgGridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dg-grid',
            template: __webpack_require__("./src/packages/form-editor-package/components/collection/dg-grid/dg-grid.component.html"),
            styles: [__webpack_require__("./src/packages/form-editor-package/components/collection/dg-grid/dg-grid.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], __WEBPACK_IMPORTED_MODULE_1__service_form_service__["FormService"],
            __WEBPACK_IMPORTED_MODULE_3__service_viewmodel_service__["ViewModelService"], __WEBPACK_IMPORTED_MODULE_2__service_control_tree_service__["ControlTreeService"]])
    ], DgGridComponent);
    return DgGridComponent;
}());



/***/ }),

/***/ "./src/packages/form-editor-package/components/collection/dg-list-view/dg-list-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/form-editor-package/components/collection/dg-list-view/dg-list-view.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  dg-list-view works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/packages/form-editor-package/components/collection/dg-list-view/dg-list-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DgListViewComponent", function() { return DgListViewComponent; });
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

var DgListViewComponent = (function () {
    function DgListViewComponent() {
    }
    DgListViewComponent.prototype.ngOnInit = function () {
    };
    DgListViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dg-list-view',
            template: __webpack_require__("./src/packages/form-editor-package/components/collection/dg-list-view/dg-list-view.component.html"),
            styles: [__webpack_require__("./src/packages/form-editor-package/components/collection/dg-list-view/dg-list-view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DgListViewComponent);
    return DgListViewComponent;
}());



/***/ }),

/***/ "./src/packages/form-editor-package/components/collection/dg-tree-grid/dg-tree-grid.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n    display: block;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/form-editor-package/components/collection/dg-tree-grid/dg-tree-grid.component.html":
/***/ (function(module, exports) {

module.exports = "<farris-treetable [columns]=\"grid.fields\">\r\n  <ng-template farrisTemplate=\"header\" let-columns>\r\n    <tr>\r\n      <th *ngFor=\"let col of columns\">\r\n        {{col.caption}}\r\n      </th>\r\n    </tr>\r\n  </ng-template>\r\n  <!-- <ng-template farrisTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\">\r\n    <tr [selectRow]=\"rowNode\">\r\n      <td *ngFor=\"let col of columns; let i = index\">\r\n        <farris-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"></farris-treeTableToggler>\r\n        {{rowData[col.field]}}\r\n      </td>\r\n    </tr>\r\n  </ng-template> -->\r\n</farris-treetable>"

/***/ }),

/***/ "./src/packages/form-editor-package/components/collection/dg-tree-grid/dg-tree-grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DgTreeGridComponent", function() { return DgTreeGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dg_basic_dg_basic_component__ = __webpack_require__("./src/packages/form-editor-package/components/dg-basic/dg-basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_form_service__ = __webpack_require__("./src/packages/form-editor-package/service/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_control_tree_service__ = __webpack_require__("./src/packages/form-editor-package/service/control-tree.service.ts");
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




var DgTreeGridComponent = (function (_super) {
    __extends(DgTreeGridComponent, _super);
    function DgTreeGridComponent(el, renderer, formService, controlTreeService) {
        var _this = _super.call(this, el, renderer, formService, controlTreeService) || this;
        _this.el = el;
        _this.renderer = renderer;
        _this.formService = formService;
        _this.controlTreeService = controlTreeService;
        return _this;
    }
    DgTreeGridComponent.prototype.ngOnInit = function () {
        if (!this.grid) {
            return;
        }
        var appearance = this.grid.appearance;
        if (appearance) {
            if (appearance.class) {
                this.renderer.setElementClass(this.el.nativeElement, appearance.class, true);
            }
        }
    };
    /**
       * 触发属性面板展示
     */
    DgTreeGridComponent.prototype.showProperty = function () {
        this.formService.createPropertyPanel(this.grid);
        return false;
    };
    /**
     * 触发控件树focus
     */
    DgTreeGridComponent.prototype.triggerTreeFocus = function () {
        this.controlTreeService.triggerTreeFocus.next(this.grid.id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DgTreeGridComponent.prototype, "grid", void 0);
    DgTreeGridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dg-tree-grid',
            template: __webpack_require__("./src/packages/form-editor-package/components/collection/dg-tree-grid/dg-tree-grid.component.html"),
            styles: [__webpack_require__("./src/packages/form-editor-package/components/collection/dg-tree-grid/dg-tree-grid.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_2__service_form_service__["FormService"], __WEBPACK_IMPORTED_MODULE_3__service_control_tree_service__["ControlTreeService"]])
    ], DgTreeGridComponent);
    return DgTreeGridComponent;
}(__WEBPACK_IMPORTED_MODULE_1__dg_basic_dg_basic_component__["DgBasicComponent"]));



/***/ }),

/***/ "./src/packages/form-editor-package/components/collection/dg-tree-view/dg-tree-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/form-editor-package/components/collection/dg-tree-view/dg-tree-view.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  dg-tree-view works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/packages/form-editor-package/components/collection/dg-tree-view/dg-tree-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DgTreeViewComponent", function() { return DgTreeViewComponent; });
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

var DgTreeViewComponent = (function () {
    function DgTreeViewComponent() {
    }
    DgTreeViewComponent.prototype.ngOnInit = function () {
    };
    DgTreeViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dg-tree-view',
            template: __webpack_require__("./src/packages/form-editor-package/components/collection/dg-tree-view/dg-tree-view.component.html"),
            styles: [__webpack_require__("./src/packages/form-editor-package/components/collection/dg-tree-view/dg-tree-view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DgTreeViewComponent);
    return DgTreeViewComponent;
}());



/***/ }),

/***/ "./src/packages/form-editor-package/components/command/dg-button-group/dg-button-group.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/form-editor-package/components/command/dg-button-group/dg-button-group.component.html":
/***/ (function(module, exports) {

module.exports = "<dg-wrapper [template]=\"buttonGroup.contents\"></dg-wrapper>"

/***/ }),

/***/ "./src/packages/form-editor-package/components/command/dg-button-group/dg-button-group.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DgButtonGroupComponent", function() { return DgButtonGroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_form_service__ = __webpack_require__("./src/packages/form-editor-package/service/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_control_tree_service__ = __webpack_require__("./src/packages/form-editor-package/service/control-tree.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dg_basic_dg_basic_component__ = __webpack_require__("./src/packages/form-editor-package/components/dg-basic/dg-basic.component.ts");
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




var DgButtonGroupComponent = (function (_super) {
    __extends(DgButtonGroupComponent, _super);
    function DgButtonGroupComponent(el, renderer, formService, controlTreeService) {
        var _this = _super.call(this, el, renderer, formService, controlTreeService) || this;
        _this.el = el;
        _this.renderer = renderer;
        _this.formService = formService;
        _this.controlTreeService = controlTreeService;
        return _this;
    }
    DgButtonGroupComponent.prototype.ngOnInit = function () {
        if (!this.buttonGroup) {
            return;
        }
        var appearance = this.buttonGroup['appearance'];
        if (appearance && appearance.class) {
            this.renderer.setElementClass(this.el.nativeElement, appearance.class, true);
        }
    };
    /**
     * 触发属性面板展示
     */
    DgButtonGroupComponent.prototype.showProperty = function () {
        this.formService.createPropertyPanel(this.buttonGroup);
        return false;
    };
    /**
     * 触发控件树focus
     */
    DgButtonGroupComponent.prototype.triggerTreeFocus = function () {
        this.controlTreeService.triggerTreeFocus.next(this.buttonGroup.id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DgButtonGroupComponent.prototype, "buttonGroup", void 0);
    DgButtonGroupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dg-button-group',
            template: __webpack_require__("./src/packages/form-editor-package/components/command/dg-button-group/dg-button-group.component.html"),
            styles: [__webpack_require__("./src/packages/form-editor-package/components/command/dg-button-group/dg-button-group.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_1__service_form_service__["FormService"], __WEBPACK_IMPORTED_MODULE_2__service_control_tree_service__["ControlTreeService"]])
    ], DgButtonGroupComponent);
    return DgButtonGroupComponent;
}(__WEBPACK_IMPORTED_MODULE_3__dg_basic_dg_basic_component__["DgBasicComponent"]));



/***/ }),

/***/ "./src/packages/form-editor-package/components/command/dg-button/dg-button.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/form-editor-package/components/command/dg-button/dg-button.component.html":
/***/ (function(module, exports) {

module.exports = "<button kendoButton [id]=\"button.id\">{{button.text}}</button>"

/***/ }),

/***/ "./src/packages/form-editor-package/components/command/dg-button/dg-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DgButtonComponent", function() { return DgButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_form_service__ = __webpack_require__("./src/packages/form-editor-package/service/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_control_tree_service__ = __webpack_require__("./src/packages/form-editor-package/service/control-tree.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dg_basic_dg_basic_component__ = __webpack_require__("./src/packages/form-editor-package/components/dg-basic/dg-basic.component.ts");
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





var DgButtonComponent = (function (_super) {
    __extends(DgButtonComponent, _super);
    function DgButtonComponent(el, renderer, formService, controlTreeService) {
        var _this = _super.call(this, el, renderer, formService, controlTreeService) || this;
        _this.el = el;
        _this.renderer = renderer;
        _this.formService = formService;
        _this.controlTreeService = controlTreeService;
        return _this;
    }
    DgButtonComponent.prototype.ngOnInit = function () {
        if (!this.button) {
            return;
        }
        var appearance = this.button['appearance'];
        if (appearance && appearance.class) {
            this.renderer.setElementClass(this.el.nativeElement, appearance.class, true);
        }
    };
    /**
     * 触发属性面板展示
     */
    DgButtonComponent.prototype.showProperty = function () {
        this.formService.createPropertyPanel(this.button);
        return false;
    };
    /**
     * 触发控件树focus
     */
    DgButtonComponent.prototype.triggerTreeFocus = function () {
        this.controlTreeService.triggerTreeFocus.next(this.button.id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DgButtonComponent.prototype, "button", void 0);
    DgButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dg-button',
            template: __webpack_require__("./src/packages/form-editor-package/components/command/dg-button/dg-button.component.html"),
            styles: [__webpack_require__("./src/packages/form-editor-package/components/command/dg-button/dg-button.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_1__service_form_service__["FormService"], __WEBPACK_IMPORTED_MODULE_2__service_control_tree_service__["ControlTreeService"]])
    ], DgButtonComponent);
    return DgButtonComponent;
}(__WEBPACK_IMPORTED_MODULE_3__dg_basic_dg_basic_component__["DgBasicComponent"]));



/***/ }),

/***/ "./src/packages/form-editor-package/components/container/dg-container/dg-container.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n    display: block;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/form-editor-package/components/container/dg-container/dg-container.component.html":
/***/ (function(module, exports) {

module.exports = "<dg-wrapper [template]=\"options.contents\"></dg-wrapper>"

/***/ }),

/***/ "./src/packages/form-editor-package/components/container/dg-container/dg-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DgContainerComponent", function() { return DgContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_form_service__ = __webpack_require__("./src/packages/form-editor-package/service/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dg_basic_dg_basic_component__ = __webpack_require__("./src/packages/form-editor-package/components/dg-basic/dg-basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_control_tree_service__ = __webpack_require__("./src/packages/form-editor-package/service/control-tree.service.ts");
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





var DgContainerComponent = (function (_super) {
    __extends(DgContainerComponent, _super);
    function DgContainerComponent(el, renderer, formService, controlTreeService) {
        var _this = _super.call(this, el, renderer, formService, controlTreeService) || this;
        _this.el = el;
        _this.renderer = renderer;
        _this.formService = formService;
        _this.controlTreeService = controlTreeService;
        return _this;
    }
    DgContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.options) {
            return;
        }
        var appearance = this.options['appearance'];
        if (appearance && appearance.class) {
            appearance.class.split(' ').forEach(function (className) {
                _this.renderer.setElementClass(_this.el.nativeElement, className, true);
            });
        }
    };
    /**
      * 触发属性面板展示
      */
    DgContainerComponent.prototype.showProperty = function () {
        this.formService.createPropertyPanel(this.options);
        return false;
    };
    /**
     * 触发控件树focus
     */
    DgContainerComponent.prototype.triggerTreeFocus = function () {
        this.controlTreeService.triggerTreeFocus.next(this.options.id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DgContainerComponent.prototype, "options", void 0);
    DgContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dg-container',
            template: __webpack_require__("./src/packages/form-editor-package/components/container/dg-container/dg-container.component.html"),
            styles: [__webpack_require__("./src/packages/form-editor-package/components/container/dg-container/dg-container.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_1__service_form_service__["FormService"], __WEBPACK_IMPORTED_MODULE_3__service_control_tree_service__["ControlTreeService"]])
    ], DgContainerComponent);
    return DgContainerComponent;
}(__WEBPACK_IMPORTED_MODULE_2__dg_basic_dg_basic_component__["DgBasicComponent"]));



/***/ }),

/***/ "./src/packages/form-editor-package/components/container/dg-panel/dg-panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n    display: inline-block;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/form-editor-package/components/container/dg-panel/dg-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"title\">{{panel.title}}</div>\r\n<dg-wrapper [template]=\"panel.contents\"></dg-wrapper> -->\r\n\r\n<farris-panel-item [fold]=\"false\" [title]=\"panel.title\" [width]=\"panel.size.width+'px'\" [height]=\"panel.size.height+'px'\">\r\n    <ng-template #headTempl>\r\n        <div [innerHTML]=\"panel.headerTemplate\"> </div>\r\n    </ng-template>\r\n    <ng-template #contentTempl>\r\n        <div [innerHTML]=\"panel.contentTemplate\"> </div>\r\n    </ng-template>\r\n    <!-- <ng-template #toolTempl>\r\n        <kendo-buttongroup>\r\n            <button kendoButton [icon]=\"'bold'\">Bold</button>\r\n            <button kendoButton [icon]=\"'italic'\">Italic</button>\r\n            <button kendoButton [icon]=\"'underline'\">Underline</button>\r\n        </kendo-buttongroup>\r\n    </ng-template> -->\r\n</farris-panel-item>"

/***/ }),

/***/ "./src/packages/form-editor-package/components/container/dg-panel/dg-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DgPanelComponent", function() { return DgPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_form_service__ = __webpack_require__("./src/packages/form-editor-package/service/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dg_basic_dg_basic_component__ = __webpack_require__("./src/packages/form-editor-package/components/dg-basic/dg-basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_control_tree_service__ = __webpack_require__("./src/packages/form-editor-package/service/control-tree.service.ts");
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




var DgPanelComponent = (function (_super) {
    __extends(DgPanelComponent, _super);
    function DgPanelComponent(el, renderer, formService, controlTreeService) {
        var _this = _super.call(this, el, renderer, formService, controlTreeService) || this;
        _this.el = el;
        _this.renderer = renderer;
        _this.formService = formService;
        _this.controlTreeService = controlTreeService;
        return _this;
    }
    DgPanelComponent.prototype.ngOnInit = function () {
        if (!this.panel) {
            return;
        }
        var appearance = this.panel.appearance;
        if (appearance) {
            if (appearance.class) {
                this.renderer.setElementClass(this.el.nativeElement, appearance.class, true);
            }
        }
    };
    /**
       * 触发属性面板展示
     */
    DgPanelComponent.prototype.showProperty = function () {
        this.formService.createPropertyPanel(this.panel);
        return false;
    };
    /**
     * 触发控件树focus
     */
    DgPanelComponent.prototype.triggerTreeFocus = function () {
        this.controlTreeService.triggerTreeFocus.next(this.panel.id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DgPanelComponent.prototype, "panel", void 0);
    DgPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dg-panel',
            template: __webpack_require__("./src/packages/form-editor-package/components/container/dg-panel/dg-panel.component.html"),
            styles: [__webpack_require__("./src/packages/form-editor-package/components/container/dg-panel/dg-panel.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_1__service_form_service__["FormService"], __WEBPACK_IMPORTED_MODULE_3__service_control_tree_service__["ControlTreeService"]])
    ], DgPanelComponent);
    return DgPanelComponent;
}(__WEBPACK_IMPORTED_MODULE_2__dg_basic_dg_basic_component__["DgBasicComponent"]));



/***/ }),

/***/ "./src/packages/form-editor-package/components/container/dg-tab/dg-tab.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n    display: block;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/form-editor-package/components/container/dg-tab/dg-tab.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"tab.contents\">\r\n  <farris-tabs [showTooltips]=\"'false'\" [showDropDown]=\"'false'\">\r\n    <farris-tab *ngFor=\"let item of tab.contents.elements\" [title]=\"item.title\" [id]=\"item.id\" [removeable]=\"false\">\r\n      <ng-template #content>\r\n        <dg-wrapper [template]=\"item.contents\"></dg-wrapper>\r\n      </ng-template>\r\n    </farris-tab>\r\n  </farris-tabs>\r\n</ng-container>"

/***/ }),

/***/ "./src/packages/form-editor-package/components/container/dg-tab/dg-tab.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DgTabComponent", function() { return DgTabComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_form_service__ = __webpack_require__("./src/packages/form-editor-package/service/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_control_tree_service__ = __webpack_require__("./src/packages/form-editor-package/service/control-tree.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dg_basic_dg_basic_component__ = __webpack_require__("./src/packages/form-editor-package/components/dg-basic/dg-basic.component.ts");
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





var DgTabComponent = (function (_super) {
    __extends(DgTabComponent, _super);
    function DgTabComponent(el, renderer, formService, controlTreeService) {
        var _this = _super.call(this, el, renderer, formService, controlTreeService) || this;
        _this.el = el;
        _this.renderer = renderer;
        _this.formService = formService;
        _this.controlTreeService = controlTreeService;
        return _this;
    }
    DgTabComponent.prototype.ngOnInit = function () { };
    /**
       * 触发属性面板展示
     */
    DgTabComponent.prototype.showProperty = function () {
        this.formService.createPropertyPanel(this.tab);
        return false;
    };
    /**
     * 触发控件树focus
     */
    DgTabComponent.prototype.triggerTreeFocus = function () {
        this.controlTreeService.triggerTreeFocus.next(this.tab.id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DgTabComponent.prototype, "tab", void 0);
    DgTabComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dg-tab',
            template: __webpack_require__("./src/packages/form-editor-package/components/container/dg-tab/dg-tab.component.html"),
            styles: [__webpack_require__("./src/packages/form-editor-package/components/container/dg-tab/dg-tab.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_1__service_form_service__["FormService"], __WEBPACK_IMPORTED_MODULE_2__service_control_tree_service__["ControlTreeService"]])
    ], DgTabComponent);
    return DgTabComponent;
}(__WEBPACK_IMPORTED_MODULE_3__dg_basic_dg_basic_component__["DgBasicComponent"]));



/***/ }),

/***/ "./src/packages/form-editor-package/components/control-map.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "controlMap", function() { return controlMap; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dg_label_dg_label_component__ = __webpack_require__("./src/packages/form-editor-package/components/dg-label/dg-label.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__input_dg_numeric_text_box_dg_numeric_text_box_component__ = __webpack_require__("./src/packages/form-editor-package/components/input/dg-numeric-text-box/dg-numeric-text-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__input_dg_text_box_dg_text_box_component__ = __webpack_require__("./src/packages/form-editor-package/components/input/dg-text-box/dg-text-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__input_dg_date_box_dg_date_box_component__ = __webpack_require__("./src/packages/form-editor-package/components/input/dg-date-box/dg-date-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__input_dg_time_box_dg_time_box_component__ = __webpack_require__("./src/packages/form-editor-package/components/input/dg-time-box/dg-time-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__input_dg_multi_text_box_dg_multi_text_box_component__ = __webpack_require__("./src/packages/form-editor-package/components/input/dg-multi-text-box/dg-multi-text-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__input_dg_lookup_edit_dg_lookup_edit_component__ = __webpack_require__("./src/packages/form-editor-package/components/input/dg-lookup-edit/dg-lookup-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__input_dg_smart_lookup_edit_dg_smart_lookup_edit_component__ = __webpack_require__("./src/packages/form-editor-package/components/input/dg-smart-lookup-edit/dg-smart-lookup-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__input_dg_switch_dg_switch_component__ = __webpack_require__("./src/packages/form-editor-package/components/input/dg-switch/dg-switch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__input_dg_radio_group_dg_radio_group_component__ = __webpack_require__("./src/packages/form-editor-package/components/input/dg-radio-group/dg-radio-group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__input_dg_check_box_dg_check_box_component__ = __webpack_require__("./src/packages/form-editor-package/components/input/dg-check-box/dg-check-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__input_dg_check_group_dg_check_group_component__ = __webpack_require__("./src/packages/form-editor-package/components/input/dg-check-group/dg-check-group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__input_dg_select_dg_select_component__ = __webpack_require__("./src/packages/form-editor-package/components/input/dg-select/dg-select.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__input_dg_radio_dg_radio_component__ = __webpack_require__("./src/packages/form-editor-package/components/input/dg-radio/dg-radio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__command_dg_button_dg_button_component__ = __webpack_require__("./src/packages/form-editor-package/components/command/dg-button/dg-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__command_dg_button_group_dg_button_group_component__ = __webpack_require__("./src/packages/form-editor-package/components/command/dg-button-group/dg-button-group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__collection_dg_grid_dg_grid_component__ = __webpack_require__("./src/packages/form-editor-package/components/collection/dg-grid/dg-grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__container_dg_container_dg_container_component__ = __webpack_require__("./src/packages/form-editor-package/components/container/dg-container/dg-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__container_dg_tab_dg_tab_component__ = __webpack_require__("./src/packages/form-editor-package/components/container/dg-tab/dg-tab.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__container_dg_panel_dg_panel_component__ = __webpack_require__("./src/packages/form-editor-package/components/container/dg-panel/dg-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__layout_dg_flex_layout_dg_flex_layout_component__ = __webpack_require__("./src/packages/form-editor-package/components/layout/dg-flex-layout/dg-flex-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__layout_dg_response_layout_dg_response_layout_component__ = __webpack_require__("./src/packages/form-editor-package/components/layout/dg-response-layout/dg-response-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__collection_dg_tree_grid_dg_tree_grid_component__ = __webpack_require__("./src/packages/form-editor-package/components/collection/dg-tree-grid/dg-tree-grid.component.ts");























var controlMap = {
    'Tab': {
        type: __WEBPACK_IMPORTED_MODULE_18__container_dg_tab_dg_tab_component__["DgTabComponent"],
        processor: function (componentRef, element) {
            componentRef.instance.tab = element;
        }
    },
    'Button': {
        type: __WEBPACK_IMPORTED_MODULE_14__command_dg_button_dg_button_component__["DgButtonComponent"],
        processor: function (componentRef, element) {
            componentRef.instance.button = element;
        }
    },
    'ButtonGroup': {
        type: __WEBPACK_IMPORTED_MODULE_15__command_dg_button_group_dg_button_group_component__["DgButtonGroupComponent"],
        processor: function (componentRef, element) {
            componentRef.instance.buttonGroup = element;
        }
    },
    'ToolBar': {
        type: __WEBPACK_IMPORTED_MODULE_15__command_dg_button_group_dg_button_group_component__["DgButtonGroupComponent"],
        processor: function (componentRef, element) {
            componentRef.instance.buttonGroup = element;
        }
    },
    'ContentContainer': {
        type: __WEBPACK_IMPORTED_MODULE_17__container_dg_container_dg_container_component__["DgContainerComponent"],
        processor: function (componentRef, element) {
            componentRef.instance.options = element;
        }
    },
    'DisplayField': {
        type: __WEBPACK_IMPORTED_MODULE_0__dg_label_dg_label_component__["DgLabelComponent"],
        processor: function (componentRef, element) {
            componentRef.instance.field = element;
        }
    },
    'TextBox': {
        type: __WEBPACK_IMPORTED_MODULE_2__input_dg_text_box_dg_text_box_component__["DgTextBoxComponent"],
        processor: function (componentRef, element) {
            componentRef.instance.field = element;
        }
    },
    'LookupEdit': {
        type: __WEBPACK_IMPORTED_MODULE_6__input_dg_lookup_edit_dg_lookup_edit_component__["DgLookupEditComponent"],
        processor: function (componentRef, element) {
            componentRef.instance.field = element;
        }
    },
    'SmartLookupEdit': {
        type: __WEBPACK_IMPORTED_MODULE_7__input_dg_smart_lookup_edit_dg_smart_lookup_edit_component__["DgSmartLookupEditComponent"],
        processor: function (componentRef, element) {
            componentRef.instance.field = element;
        }
    },
    'NumericBox': {
        type: __WEBPACK_IMPORTED_MODULE_1__input_dg_numeric_text_box_dg_numeric_text_box_component__["DgNumericTextBoxComponent"],
        processor: function (componentRef, element) {
            componentRef.instance.field = element;
        }
    },
    'DataGrid': {
        type: __WEBPACK_IMPORTED_MODULE_16__collection_dg_grid_dg_grid_component__["DgGridComponent"],
        processor: function (componentRef, element) {
            componentRef.instance.grid = element;
        }
    },
    'Panel': {
        type: __WEBPACK_IMPORTED_MODULE_19__container_dg_panel_dg_panel_component__["DgPanelComponent"],
        processor: function (componentRef, element) {
            componentRef.instance.panel = element;
        }
    },
    'Module': {
        type: __WEBPACK_IMPORTED_MODULE_17__container_dg_container_dg_container_component__["DgContainerComponent"],
        processor: function (componentRef, element) {
            componentRef.instance.options = element;
        }
    },
    'DateBox': {
        type: __WEBPACK_IMPORTED_MODULE_3__input_dg_date_box_dg_date_box_component__["DgDateBoxComponent"],
        processor: function (componentRef, element) {
            componentRef.instance.field = element;
        }
    },
    'TimeBox': {
        type: __WEBPACK_IMPORTED_MODULE_4__input_dg_time_box_dg_time_box_component__["DgTimeBoxComponent"],
        processor: function (componentRef, element) {
            componentRef.instance.field = element;
        }
    },
    'MultiTextBox': {
        type: __WEBPACK_IMPORTED_MODULE_5__input_dg_multi_text_box_dg_multi_text_box_component__["DgMultiTextBoxComponent"],
        processor: function (componentRef, element) {
            componentRef.instance.field = element;
        }
    },
    'Switch': {
        type: __WEBPACK_IMPORTED_MODULE_8__input_dg_switch_dg_switch_component__["DgSwitchComponent"],
        processor: function (componentRef, element) {
            componentRef.instance.field = element;
        }
    },
    'Radio': {
        type: __WEBPACK_IMPORTED_MODULE_13__input_dg_radio_dg_radio_component__["DgRadioComponent"],
        processor: function (componentRef, element) {
            componentRef.instance.field = element;
        }
    },
    'RadioGroup': {
        type: __WEBPACK_IMPORTED_MODULE_9__input_dg_radio_group_dg_radio_group_component__["DgRadioGroupComponent"],
        processor: function (componentRef, element) {
            componentRef.instance.field = element;
        }
    },
    'CheckBox': {
        type: __WEBPACK_IMPORTED_MODULE_10__input_dg_check_box_dg_check_box_component__["DgCheckBoxComponent"],
        processor: function (componentRef, element) {
            componentRef.instance.field = element;
        }
    },
    'CheckGroup': {
        type: __WEBPACK_IMPORTED_MODULE_11__input_dg_check_group_dg_check_group_component__["DgCheckGroupComponent"],
        processor: function (componentRef, element) {
            componentRef.instance.field = element;
        }
    },
    'Select': {
        type: __WEBPACK_IMPORTED_MODULE_12__input_dg_select_dg_select_component__["DgSelectComponent"],
        processor: function (componentRef, element) {
            componentRef.instance.field = element;
        }
    },
    'FlexLayout': {
        type: __WEBPACK_IMPORTED_MODULE_20__layout_dg_flex_layout_dg_flex_layout_component__["DgFlexLayoutComponent"],
        processor: function (componentRef, element) {
            componentRef.instance.flex = element;
        }
    },
    'ResponseLayout': {
        type: __WEBPACK_IMPORTED_MODULE_21__layout_dg_response_layout_dg_response_layout_component__["DgResponseLayoutComponent"],
        processor: function (componentRef, element) {
            componentRef.instance.response = element;
        }
    },
    'TreeGrid': {
        type: __WEBPACK_IMPORTED_MODULE_22__collection_dg_tree_grid_dg_tree_grid_component__["DgTreeGridComponent"],
        processor: function (componentRef, element) {
            componentRef.instance.grid = element;
        }
    }
};


/***/ }),

/***/ "./src/packages/form-editor-package/components/dg-basic/dg-basic.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/form-editor-package/components/dg-basic/dg-basic.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  dg-basic works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/packages/form-editor-package/components/dg-basic/dg-basic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DgBasicComponent", function() { return DgBasicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_control_tree_service__ = __webpack_require__("./src/packages/form-editor-package/service/control-tree.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_form_service__ = __webpack_require__("./src/packages/form-editor-package/service/form.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DgBasicComponent = (function () {
    function DgBasicComponent(el, renderer, formService, controlTreeService) {
        this.el = el;
        this.renderer = renderer;
        this.formService = formService;
        this.controlTreeService = controlTreeService;
    }
    // 边框样式
    DgBasicComponent.prototype.onClick = function ($event) {
        if ($event) {
            $event.stopPropagation();
        }
        var elements = document.getElementsByClassName('dgComponentSelected');
        if (elements && elements.length > 0) {
            elements[0].classList.remove('dgComponentSelected');
        }
        this.renderer.setElementClass(this.el.nativeElement, 'dgComponentSelected', true);
        this.showProperty();
        if ($event) {
            this.triggerTreeFocus();
        }
    };
    DgBasicComponent.prototype.ngOnInit = function () {
    };
    /**
       * 触发属性面板展示
       */
    DgBasicComponent.prototype.showProperty = function () {
    };
    /**
     * 触发控件树focus
     */
    DgBasicComponent.prototype.triggerTreeFocus = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DgBasicComponent.prototype, "onClick", null);
    DgBasicComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dg-basic',
            template: __webpack_require__("./src/packages/form-editor-package/components/dg-basic/dg-basic.component.html"),
            styles: [__webpack_require__("./src/packages/form-editor-package/components/dg-basic/dg-basic.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], __WEBPACK_IMPORTED_MODULE_2__service_form_service__["FormService"],
            __WEBPACK_IMPORTED_MODULE_1__service_control_tree_service__["ControlTreeService"]])
    ], DgBasicComponent);
    return DgBasicComponent;
}());



/***/ }),

/***/ "./src/packages/form-editor-package/components/dg-label/dg-label.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n    display: inline-block;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/form-editor-package/components/dg-label/dg-label.component.html":
/***/ (function(module, exports) {

module.exports = "<label  >\r\n    <span>{{field.title}} </span>\r\n</label>"

/***/ }),

/***/ "./src/packages/form-editor-package/components/dg-label/dg-label.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DgLabelComponent", function() { return DgLabelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dg_basic_dg_basic_component__ = __webpack_require__("./src/packages/form-editor-package/components/dg-basic/dg-basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_control_tree_service__ = __webpack_require__("./src/packages/form-editor-package/service/control-tree.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_form_service__ = __webpack_require__("./src/packages/form-editor-package/service/form.service.ts");
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





var DgLabelComponent = (function (_super) {
    __extends(DgLabelComponent, _super);
    function DgLabelComponent(el, renderer, formService, controlTreeService) {
        var _this = _super.call(this, el, renderer, formService, controlTreeService) || this;
        _this.el = el;
        _this.renderer = renderer;
        _this.formService = formService;
        _this.controlTreeService = controlTreeService;
        return _this;
    }
    DgLabelComponent.prototype.ngOnInit = function () {
        if (!this.field) {
            return;
        }
        var font = this.field['font'];
        if (font && font.color) {
            this.renderer.setElementStyle(this.el.nativeElement, 'color', font.color);
        }
        if (font && font.size) {
            this.renderer.setElementStyle(this.el.nativeElement, 'font-size', font.size);
        }
        var appearance = this.field['appearance'];
        if (appearance && appearance.class) {
            this.renderer.setElementClass(this.el.nativeElement, appearance.class, true);
        }
    };
    /**
       * 触发属性面板展示
       */
    DgLabelComponent.prototype.showProperty = function () {
        this.formService.createPropertyPanel(this.field);
        return false;
    };
    /**
     * 触发控件树focus
     */
    DgLabelComponent.prototype.triggerTreeFocus = function () {
        this.controlTreeService.triggerTreeFocus.next(this.field.id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DgLabelComponent.prototype, "field", void 0);
    DgLabelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dg-label',
            template: __webpack_require__("./src/packages/form-editor-package/components/dg-label/dg-label.component.html"),
            styles: [__webpack_require__("./src/packages/form-editor-package/components/dg-label/dg-label.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_3__service_form_service__["FormService"], __WEBPACK_IMPORTED_MODULE_2__service_control_tree_service__["ControlTreeService"]])
    ], DgLabelComponent);
    return DgLabelComponent;
}(__WEBPACK_IMPORTED_MODULE_1__dg_basic_dg_basic_component__["DgBasicComponent"]));



/***/ }),

/***/ "./src/packages/form-editor-package/components/dg-wrapper/dg-wrapper.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n    width: 100%;\r\n    display: inherit;\r\n    -ms-flex-direction: inherit;\r\n        flex-direction: inherit;\r\n    -ms-flex-pack: inherit;\r\n        justify-content: inherit;\r\n    -ms-flex-align: inherit;\r\n        align-items: inherit;\r\n    -ms-flex-wrap: inherit;\r\n        flex-wrap: inherit;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/form-editor-package/components/dg-wrapper/dg-wrapper.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container #dgwrapper></ng-container>\r\n"

/***/ }),

/***/ "./src/packages/form-editor-package/components/dg-wrapper/dg-wrapper.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DgWrapperComponent", function() { return DgWrapperComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entity_entity__ = __webpack_require__("./src/packages/form-editor-package/entity/entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__control_map__ = __webpack_require__("./src/packages/form-editor-package/components/control-map.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DgWrapperComponent = (function () {
    function DgWrapperComponent(viewContainerRef, componentFactoryResolver) {
        this.viewContainerRef = viewContainerRef;
        this.componentFactoryResolver = componentFactoryResolver;
    }
    DgWrapperComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.template && this.template.elements) {
            this.template.elements.forEach(function (element) { return _this.appendElement(element); });
            this.template.elementAppended.subscribe(function (element) {
                _this.appendElement(element);
            });
            this.template.elementRemoved.subscribe(function (index) {
                _this.removeElement(index);
            });
        }
    };
    DgWrapperComponent.prototype.appendElement = function (element) {
        var elementType = element.type;
        if (__WEBPACK_IMPORTED_MODULE_2__control_map__["controlMap"][elementType]) {
            var componentType = __WEBPACK_IMPORTED_MODULE_2__control_map__["controlMap"][elementType].type;
            var componentProcessor = __WEBPACK_IMPORTED_MODULE_2__control_map__["controlMap"][elementType].processor;
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
            var componentRef_1 = this.dgWrapper.createComponent(componentFactory);
            if (componentProcessor) {
                componentProcessor(componentRef_1, element);
                if (element.elementFocused && componentRef_1.instance.onClick) {
                    element.elementFocused.subscribe(function ($event) {
                        componentRef_1.instance.onClick();
                    });
                }
            }
        }
    };
    DgWrapperComponent.prototype.removeElement = function (index) {
        this.dgWrapper.remove(index);
    };
    /**
     * 重新绘制表单时先清空原表单
     */
    DgWrapperComponent.prototype.clearForm = function () {
        this.dgWrapper.clear();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__entity_entity__["DesignElementCollection"])
    ], DgWrapperComponent.prototype, "template", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dgwrapper', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"])
    ], DgWrapperComponent.prototype, "dgWrapper", void 0);
    DgWrapperComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dg-wrapper',
            template: __webpack_require__("./src/packages/form-editor-package/components/dg-wrapper/dg-wrapper.component.html"),
            styles: [__webpack_require__("./src/packages/form-editor-package/components/dg-wrapper/dg-wrapper.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]])
    ], DgWrapperComponent);
    return DgWrapperComponent;
}());



/***/ }),

/***/ "./src/packages/form-editor-package/components/input/dg-check-box/dg-check-box.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n    display: inline-block;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/form-editor-package/components/input/dg-check-box/dg-check-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"farris-group-wrap\">\r\n  <div class=\"form-group farris-form-group\">\r\n    <!-- <label for=\"inputPassword3\" class=\"col-form-label\">\r\n      <span class=\"farris-label-text\">{{field.title}}</span>\r\n    </label> -->\r\n    <div class=\"farris-input-wrap\">\r\n      <input type=\"checkbox\" class=\"k-checkbox\" [checked]=\"field.checked\" onclick=\"return false;\">\r\n      <label class=\"k-checkbox-label\">{{field.title}}</label>\r\n      <div class=\"farris-feedback valid-feedback\">\r\n        设置符合规则\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/packages/form-editor-package/components/input/dg-check-box/dg-check-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DgCheckBoxComponent", function() { return DgCheckBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dg_basic_dg_basic_component__ = __webpack_require__("./src/packages/form-editor-package/components/dg-basic/dg-basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_form_service__ = __webpack_require__("./src/packages/form-editor-package/service/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_control_tree_service__ = __webpack_require__("./src/packages/form-editor-package/service/control-tree.service.ts");
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




var DgCheckBoxComponent = (function (_super) {
    __extends(DgCheckBoxComponent, _super);
    function DgCheckBoxComponent(el, renderer, formService, controlTreeService) {
        var _this = _super.call(this, el, renderer, formService, controlTreeService) || this;
        _this.el = el;
        _this.renderer = renderer;
        _this.formService = formService;
        _this.controlTreeService = controlTreeService;
        return _this;
    }
    DgCheckBoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.field) {
            return;
        }
        var appearance = this.field['appearance'];
        if (appearance && appearance.class) {
            appearance.class.split(' ').forEach(function (className) {
                _this.renderer.setElementClass(_this.el.nativeElement, className, true);
            });
        }
    };
    /**
      * 触发属性面板展示
    */
    DgCheckBoxComponent.prototype.showProperty = function () {
        this.formService.createPropertyPanel(this.field);
        return false;
    };
    /**
     * 触发控件树focus
     */
    DgCheckBoxComponent.prototype.triggerTreeFocus = function () {
        this.controlTreeService.triggerTreeFocus.next(this.field.id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DgCheckBoxComponent.prototype, "field", void 0);
    DgCheckBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dg-check-box',
            template: __webpack_require__("./src/packages/form-editor-package/components/input/dg-check-box/dg-check-box.component.html"),
            styles: [__webpack_require__("./src/packages/form-editor-package/components/input/dg-check-box/dg-check-box.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_2__service_form_service__["FormService"], __WEBPACK_IMPORTED_MODULE_3__service_control_tree_service__["ControlTreeService"]])
    ], DgCheckBoxComponent);
    return DgCheckBoxComponent;
}(__WEBPACK_IMPORTED_MODULE_1__dg_basic_dg_basic_component__["DgBasicComponent"]));



/***/ }),

/***/ "./src/packages/form-editor-package/components/input/dg-check-group/dg-check-group.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n    display: inline-block;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/form-editor-package/components/input/dg-check-group/dg-check-group.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"farris-group-wrap\">\r\n  <div class=\"form-group farris-form-group\">\r\n    <!-- <label for=\"inputPassword3\" class=\"col-form-label\">\r\n        <span class=\"farris-label-text\">{{field.title}}</span>\r\n      </label> -->\r\n    <div class=\"farris-input-wrap\">\r\n      <dg-wrapper [template]=\"field.contents\"></dg-wrapper>\r\n      <div class=\"farris-feedback valid-feedback\">\r\n        设置符合规则\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/packages/form-editor-package/components/input/dg-check-group/dg-check-group.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DgCheckGroupComponent", function() { return DgCheckGroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dg_basic_dg_basic_component__ = __webpack_require__("./src/packages/form-editor-package/components/dg-basic/dg-basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_form_service__ = __webpack_require__("./src/packages/form-editor-package/service/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_control_tree_service__ = __webpack_require__("./src/packages/form-editor-package/service/control-tree.service.ts");
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




var DgCheckGroupComponent = (function (_super) {
    __extends(DgCheckGroupComponent, _super);
    function DgCheckGroupComponent(el, renderer, formService, controlTreeService) {
        var _this = _super.call(this, el, renderer, formService, controlTreeService) || this;
        _this.el = el;
        _this.renderer = renderer;
        _this.formService = formService;
        _this.controlTreeService = controlTreeService;
        return _this;
    }
    DgCheckGroupComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.field) {
            return;
        }
        var appearance = this.field['appearance'];
        if (appearance && appearance.class) {
            appearance.class.split(' ').forEach(function (className) {
                _this.renderer.setElementClass(_this.el.nativeElement, className, true);
            });
        }
    };
    /**
      * 触发属性面板展示
    */
    DgCheckGroupComponent.prototype.showProperty = function () {
        this.formService.createPropertyPanel(this.field);
        return false;
    };
    /**
     * 触发控件树focus
     */
    DgCheckGroupComponent.prototype.triggerTreeFocus = function () {
        this.controlTreeService.triggerTreeFocus.next(this.field.id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DgCheckGroupComponent.prototype, "field", void 0);
    DgCheckGroupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dg-check-group',
            template: __webpack_require__("./src/packages/form-editor-package/components/input/dg-check-group/dg-check-group.component.html"),
            styles: [__webpack_require__("./src/packages/form-editor-package/components/input/dg-check-group/dg-check-group.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_2__service_form_service__["FormService"], __WEBPACK_IMPORTED_MODULE_3__service_control_tree_service__["ControlTreeService"]])
    ], DgCheckGroupComponent);
    return DgCheckGroupComponent;
}(__WEBPACK_IMPORTED_MODULE_1__dg_basic_dg_basic_component__["DgBasicComponent"]));



/***/ }),

/***/ "./src/packages/form-editor-package/components/input/dg-date-box/dg-date-box.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n    display: inline-block;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/form-editor-package/components/input/dg-date-box/dg-date-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"farris-group-wrap\">\r\n  <div class=\"form-group farris-form-group\">\r\n    <label class=\"col-form-label\">\r\n      <span class=\"farris-label-text\">{{field.title}}</span>\r\n      <span class=\"farris-label-info text-danger\" *ngIf=\"field.require\">*</span>\r\n    </label>\r\n    <div class=\"farris-input-wrap\">\r\n      <kendo-datepicker [readonly]=\"true\" class=\"form-control\"  >\r\n      </kendo-datepicker>\r\n      <div class=\"farris-feedback valid-feedback\">\r\n        设置符合规则\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/packages/form-editor-package/components/input/dg-date-box/dg-date-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DgDateBoxComponent", function() { return DgDateBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_form_service__ = __webpack_require__("./src/packages/form-editor-package/service/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_control_tree_service__ = __webpack_require__("./src/packages/form-editor-package/service/control-tree.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dg_basic_dg_basic_component__ = __webpack_require__("./src/packages/form-editor-package/components/dg-basic/dg-basic.component.ts");
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




var DgDateBoxComponent = (function (_super) {
    __extends(DgDateBoxComponent, _super);
    function DgDateBoxComponent(el, renderer, formService, controlTreeService) {
        var _this = _super.call(this, el, renderer, formService, controlTreeService) || this;
        _this.el = el;
        _this.renderer = renderer;
        _this.formService = formService;
        _this.controlTreeService = controlTreeService;
        return _this;
    }
    DgDateBoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.field) {
            return;
        }
        var appearance = this.field['appearance'];
        if (appearance && appearance.class) {
            appearance.class.split(' ').forEach(function (className) {
                _this.renderer.setElementClass(_this.el.nativeElement, className, true);
            });
        }
    };
    /**
      * 触发属性面板展示
    */
    DgDateBoxComponent.prototype.showProperty = function () {
        this.formService.createPropertyPanel(this.field);
        return false;
    };
    /**
     * 触发控件树focus
     */
    DgDateBoxComponent.prototype.triggerTreeFocus = function () {
        this.controlTreeService.triggerTreeFocus.next(this.field.id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DgDateBoxComponent.prototype, "field", void 0);
    DgDateBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dg-date-box',
            template: __webpack_require__("./src/packages/form-editor-package/components/input/dg-date-box/dg-date-box.component.html"),
            styles: [__webpack_require__("./src/packages/form-editor-package/components/input/dg-date-box/dg-date-box.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_1__service_form_service__["FormService"], __WEBPACK_IMPORTED_MODULE_2__service_control_tree_service__["ControlTreeService"]])
    ], DgDateBoxComponent);
    return DgDateBoxComponent;
}(__WEBPACK_IMPORTED_MODULE_3__dg_basic_dg_basic_component__["DgBasicComponent"]));



/***/ }),

/***/ "./src/packages/form-editor-package/components/input/dg-lookup-edit/dg-lookup-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n    display: inline-block;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/form-editor-package/components/input/dg-lookup-edit/dg-lookup-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"farris-group-wrap\">\r\n  <div class=\"form-group farris-form-group\">\r\n    <label class=\"col-form-label\">\r\n      <span class=\"farris-label-text\">{{field.title}}</span>\r\n      <span class=\"farris-label-info text-danger\" *ngIf=\"field.require\">*</span>\r\n    </label>\r\n    <div class=\"farris-input-wrap\">\r\n      <farris-lookup [disabled]='true'> </farris-lookup>\r\n      <div class=\"farris-feedback valid-feedback\">\r\n        设置符合规则\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/packages/form-editor-package/components/input/dg-lookup-edit/dg-lookup-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DgLookupEditComponent", function() { return DgLookupEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dg_basic_dg_basic_component__ = __webpack_require__("./src/packages/form-editor-package/components/dg-basic/dg-basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_form_service__ = __webpack_require__("./src/packages/form-editor-package/service/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_control_tree_service__ = __webpack_require__("./src/packages/form-editor-package/service/control-tree.service.ts");
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




var DgLookupEditComponent = (function (_super) {
    __extends(DgLookupEditComponent, _super);
    function DgLookupEditComponent(el, renderer, formService, controlTreeService) {
        var _this = _super.call(this, el, renderer, formService, controlTreeService) || this;
        _this.el = el;
        _this.renderer = renderer;
        _this.formService = formService;
        _this.controlTreeService = controlTreeService;
        return _this;
    }
    DgLookupEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.field) {
            return;
        }
        var appearance = this.field['appearance'];
        if (appearance && appearance.class) {
            appearance.class.split(' ').forEach(function (className) {
                _this.renderer.setElementClass(_this.el.nativeElement, className, true);
            });
        }
    };
    /**
      * 触发属性面板展示
    */
    DgLookupEditComponent.prototype.showProperty = function () {
        this.formService.createPropertyPanel(this.field);
        return false;
    };
    /**
     * 触发控件树focus
     */
    DgLookupEditComponent.prototype.triggerTreeFocus = function () {
        this.controlTreeService.triggerTreeFocus.next(this.field.id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DgLookupEditComponent.prototype, "field", void 0);
    DgLookupEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dg-lookup-edit',
            template: __webpack_require__("./src/packages/form-editor-package/components/input/dg-lookup-edit/dg-lookup-edit.component.html"),
            styles: [__webpack_require__("./src/packages/form-editor-package/components/input/dg-lookup-edit/dg-lookup-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_2__service_form_service__["FormService"], __WEBPACK_IMPORTED_MODULE_3__service_control_tree_service__["ControlTreeService"]])
    ], DgLookupEditComponent);
    return DgLookupEditComponent;
}(__WEBPACK_IMPORTED_MODULE_1__dg_basic_dg_basic_component__["DgBasicComponent"]));



/***/ }),

/***/ "./src/packages/form-editor-package/components/input/dg-multi-text-box/dg-multi-text-box.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n    display: inline-block;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/form-editor-package/components/input/dg-multi-text-box/dg-multi-text-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"farris-group-wrap\">\r\n  <div class=\"form-group farris-form-group\">\r\n    <label [for]=\"field.id\" class=\"col-form-label\">\r\n      <span class=\"farris-label-text\">{{field.title}}</span>\r\n      <span class=\"farris-label-info text-danger\" *ngIf=\"field.require\">*</span>\r\n    </label>\r\n    <div class=\"farris-input-wrap\">\r\n      <textarea kendoTextArea [value]=\"field.value\" readonly class=\"form-control\"></textarea>\r\n      <div class=\"farris-feedback valid-feedback\">\r\n        设置符合规则\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/packages/form-editor-package/components/input/dg-multi-text-box/dg-multi-text-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DgMultiTextBoxComponent", function() { return DgMultiTextBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dg_basic_dg_basic_component__ = __webpack_require__("./src/packages/form-editor-package/components/dg-basic/dg-basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_form_service__ = __webpack_require__("./src/packages/form-editor-package/service/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_control_tree_service__ = __webpack_require__("./src/packages/form-editor-package/service/control-tree.service.ts");
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




var DgMultiTextBoxComponent = (function (_super) {
    __extends(DgMultiTextBoxComponent, _super);
    function DgMultiTextBoxComponent(el, renderer, formService, controlTreeService) {
        var _this = _super.call(this, el, renderer, formService, controlTreeService) || this;
        _this.el = el;
        _this.renderer = renderer;
        _this.formService = formService;
        _this.controlTreeService = controlTreeService;
        return _this;
    }
    DgMultiTextBoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.field) {
            return;
        }
        var appearance = this.field['appearance'];
        if (appearance && appearance.class) {
            appearance.class.split(' ').forEach(function (className) {
                _this.renderer.setElementClass(_this.el.nativeElement, className, true);
            });
        }
    };
    /**
       * 触发属性面板展示
     */
    DgMultiTextBoxComponent.prototype.showProperty = function () {
        this.formService.createPropertyPanel(this.field);
        return false;
    };
    /**
     * 触发控件树focus
     */
    DgMultiTextBoxComponent.prototype.triggerTreeFocus = function () {
        this.controlTreeService.triggerTreeFocus.next(this.field.id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DgMultiTextBoxComponent.prototype, "field", void 0);
    DgMultiTextBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dg-multi-text-box',
            template: __webpack_require__("./src/packages/form-editor-package/components/input/dg-multi-text-box/dg-multi-text-box.component.html"),
            styles: [__webpack_require__("./src/packages/form-editor-package/components/input/dg-multi-text-box/dg-multi-text-box.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_2__service_form_service__["FormService"], __WEBPACK_IMPORTED_MODULE_3__service_control_tree_service__["ControlTreeService"]])
    ], DgMultiTextBoxComponent);
    return DgMultiTextBoxComponent;
}(__WEBPACK_IMPORTED_MODULE_1__dg_basic_dg_basic_component__["DgBasicComponent"]));



/***/ }),

/***/ "./src/packages/form-editor-package/components/input/dg-numeric-text-box/dg-numeric-text-box.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n    display: inline-block;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/form-editor-package/components/input/dg-numeric-text-box/dg-numeric-text-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"farris-group-wrap\">\r\n  <div class=\"form-group farris-form-group\">\r\n    <label class=\"col-form-label\">\r\n      <span class=\"farris-label-text\">{{field.title}}</span>\r\n      <span class=\"farris-label-info text-danger\" *ngIf=\"field.require\">*</span>\r\n    </label>\r\n    <span class=\"farris-label-info text-danger\" *ngIf=\"field.require\">*</span>\r\n    <div class=\"farris-input-wrap\">\r\n      <kendo-numerictextbox class=\"form-control k-widget k-numerictextbox\" [readonly]=\"true\">\r\n      </kendo-numerictextbox>\r\n      <div class=\"farris-feedback valid-feedback\">\r\n        设置符合规则\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/packages/form-editor-package/components/input/dg-numeric-text-box/dg-numeric-text-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DgNumericTextBoxComponent", function() { return DgNumericTextBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_form_service__ = __webpack_require__("./src/packages/form-editor-package/service/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dg_basic_dg_basic_component__ = __webpack_require__("./src/packages/form-editor-package/components/dg-basic/dg-basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_control_tree_service__ = __webpack_require__("./src/packages/form-editor-package/service/control-tree.service.ts");
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





var DgNumericTextBoxComponent = (function (_super) {
    __extends(DgNumericTextBoxComponent, _super);
    function DgNumericTextBoxComponent(el, renderer, formService, controlTreeService) {
        var _this = _super.call(this, el, renderer, formService, controlTreeService) || this;
        _this.el = el;
        _this.renderer = renderer;
        _this.formService = formService;
        _this.controlTreeService = controlTreeService;
        return _this;
    }
    DgNumericTextBoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.field) {
            return;
        }
        var appearance = this.field['appearance'];
        if (appearance && appearance.class) {
            appearance.class.split(' ').forEach(function (className) {
                _this.renderer.setElementClass(_this.el.nativeElement, className, true);
            });
        }
    };
    /**
      * 触发属性面板展示
    */
    DgNumericTextBoxComponent.prototype.showProperty = function () {
        this.formService.createPropertyPanel(this.field);
        return false;
    };
    /**
     * 触发控件树focus
     */
    DgNumericTextBoxComponent.prototype.triggerTreeFocus = function () {
        this.controlTreeService.triggerTreeFocus.next(this.field.id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DgNumericTextBoxComponent.prototype, "field", void 0);
    DgNumericTextBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dg-numeric-text-box',
            template: __webpack_require__("./src/packages/form-editor-package/components/input/dg-numeric-text-box/dg-numeric-text-box.component.html"),
            styles: [__webpack_require__("./src/packages/form-editor-package/components/input/dg-numeric-text-box/dg-numeric-text-box.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_1__service_form_service__["FormService"], __WEBPACK_IMPORTED_MODULE_3__service_control_tree_service__["ControlTreeService"]])
    ], DgNumericTextBoxComponent);
    return DgNumericTextBoxComponent;
}(__WEBPACK_IMPORTED_MODULE_2__dg_basic_dg_basic_component__["DgBasicComponent"]));



/***/ }),

/***/ "./src/packages/form-editor-package/components/input/dg-radio-group/dg-radio-group.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n    display: inline-block;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/form-editor-package/components/input/dg-radio-group/dg-radio-group.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"farris-group-wrap\">\r\n  <div class=\"form-group farris-form-group\">\r\n    <!-- <label for=\"inputPassword3\" class=\"col-form-label\">\r\n          <span class=\"farris-label-text\">{{field.title}}</span>\r\n        </label> -->\r\n    <div class=\"farris-input-wrap\">\r\n      <dg-wrapper [template]=\"field.contents\"></dg-wrapper>\r\n      <div class=\"farris-feedback valid-feedback\">\r\n        设置符合规则\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/packages/form-editor-package/components/input/dg-radio-group/dg-radio-group.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DgRadioGroupComponent", function() { return DgRadioGroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dg_basic_dg_basic_component__ = __webpack_require__("./src/packages/form-editor-package/components/dg-basic/dg-basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_form_service__ = __webpack_require__("./src/packages/form-editor-package/service/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_control_tree_service__ = __webpack_require__("./src/packages/form-editor-package/service/control-tree.service.ts");
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




var DgRadioGroupComponent = (function (_super) {
    __extends(DgRadioGroupComponent, _super);
    function DgRadioGroupComponent(el, renderer, formService, controlTreeService) {
        var _this = _super.call(this, el, renderer, formService, controlTreeService) || this;
        _this.el = el;
        _this.renderer = renderer;
        _this.formService = formService;
        _this.controlTreeService = controlTreeService;
        return _this;
    }
    DgRadioGroupComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.field) {
            return;
        }
        var appearance = this.field['appearance'];
        if (appearance && appearance.class) {
            appearance.class.split(' ').forEach(function (className) {
                _this.renderer.setElementClass(_this.el.nativeElement, className, true);
            });
        }
    };
    /**
      * 触发属性面板展示
    */
    DgRadioGroupComponent.prototype.showProperty = function () {
        this.formService.createPropertyPanel(this.field);
        return false;
    };
    /**
     * 触发控件树focus
     */
    DgRadioGroupComponent.prototype.triggerTreeFocus = function () {
        this.controlTreeService.triggerTreeFocus.next(this.field.id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DgRadioGroupComponent.prototype, "field", void 0);
    DgRadioGroupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dg-radio-group',
            template: __webpack_require__("./src/packages/form-editor-package/components/input/dg-radio-group/dg-radio-group.component.html"),
            styles: [__webpack_require__("./src/packages/form-editor-package/components/input/dg-radio-group/dg-radio-group.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_2__service_form_service__["FormService"], __WEBPACK_IMPORTED_MODULE_3__service_control_tree_service__["ControlTreeService"]])
    ], DgRadioGroupComponent);
    return DgRadioGroupComponent;
}(__WEBPACK_IMPORTED_MODULE_1__dg_basic_dg_basic_component__["DgBasicComponent"]));



/***/ }),

/***/ "./src/packages/form-editor-package/components/input/dg-radio/dg-radio.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/form-editor-package/components/input/dg-radio/dg-radio.component.html":
/***/ (function(module, exports) {

module.exports = "<input type=\"radio\" [id]=\"field.id\" class=\"k-radio\" [checked]=\"field.checked\">\r\n<label class=\"k-radio-label\" [for]=\"field.id\">{{field.title}}</label>"

/***/ }),

/***/ "./src/packages/form-editor-package/components/input/dg-radio/dg-radio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DgRadioComponent", function() { return DgRadioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dg_basic_dg_basic_component__ = __webpack_require__("./src/packages/form-editor-package/components/dg-basic/dg-basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_form_service__ = __webpack_require__("./src/packages/form-editor-package/service/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_control_tree_service__ = __webpack_require__("./src/packages/form-editor-package/service/control-tree.service.ts");
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




var DgRadioComponent = (function (_super) {
    __extends(DgRadioComponent, _super);
    function DgRadioComponent(el, renderer, formService, controlTreeService) {
        var _this = _super.call(this, el, renderer, formService, controlTreeService) || this;
        _this.el = el;
        _this.renderer = renderer;
        _this.formService = formService;
        _this.controlTreeService = controlTreeService;
        return _this;
    }
    DgRadioComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.field) {
            return;
        }
        var appearance = this.field['appearance'];
        if (appearance && appearance.class) {
            appearance.class.split(' ').forEach(function (className) {
                _this.renderer.setElementClass(_this.el.nativeElement, className, true);
            });
        }
    };
    /**
      * 触发属性面板展示
    */
    DgRadioComponent.prototype.showProperty = function () {
        this.formService.createPropertyPanel(this.field);
        return false;
    };
    /**
     * 触发控件树focus
     */
    DgRadioComponent.prototype.triggerTreeFocus = function () {
        this.controlTreeService.triggerTreeFocus.next(this.field.id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DgRadioComponent.prototype, "field", void 0);
    DgRadioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dg-radio',
            template: __webpack_require__("./src/packages/form-editor-package/components/input/dg-radio/dg-radio.component.html"),
            styles: [__webpack_require__("./src/packages/form-editor-package/components/input/dg-radio/dg-radio.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_2__service_form_service__["FormService"], __WEBPACK_IMPORTED_MODULE_3__service_control_tree_service__["ControlTreeService"]])
    ], DgRadioComponent);
    return DgRadioComponent;
}(__WEBPACK_IMPORTED_MODULE_1__dg_basic_dg_basic_component__["DgBasicComponent"]));



/***/ }),

/***/ "./src/packages/form-editor-package/components/input/dg-select/dg-select.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n    display: inline-block;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/form-editor-package/components/input/dg-select/dg-select.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"farris-group-wrap\">\r\n  <div class=\"form-group farris-form-group\">\r\n    <label for=\"inputPassword3\" class=\"col-form-label\">\r\n      <span class=\"farris-label-text\">{{field.title}}</span>\r\n      <span class=\"farris-label-info text-danger\" *ngIf=\"field.require\">*</span>\r\n    </label>\r\n    <div class=\"farris-input-wrap\">\r\n      <select class=\"form-control\" [value]=\"field.value\" onclick=\"return false;\">\r\n        <!-- <option *ngFor=\"let option of field.contents\">{{field.title}}</option> -->\r\n      </select>\r\n      <div class=\"farris-feedback valid-feedback\">\r\n        设置符合规则\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/packages/form-editor-package/components/input/dg-select/dg-select.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DgSelectComponent", function() { return DgSelectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dg_basic_dg_basic_component__ = __webpack_require__("./src/packages/form-editor-package/components/dg-basic/dg-basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_form_service__ = __webpack_require__("./src/packages/form-editor-package/service/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_control_tree_service__ = __webpack_require__("./src/packages/form-editor-package/service/control-tree.service.ts");
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




var DgSelectComponent = (function (_super) {
    __extends(DgSelectComponent, _super);
    function DgSelectComponent(el, renderer, formService, controlTreeService) {
        var _this = _super.call(this, el, renderer, formService, controlTreeService) || this;
        _this.el = el;
        _this.renderer = renderer;
        _this.formService = formService;
        _this.controlTreeService = controlTreeService;
        return _this;
    }
    DgSelectComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.field) {
            return;
        }
        var appearance = this.field['appearance'];
        if (appearance && appearance.class) {
            appearance.class.split(' ').forEach(function (className) {
                _this.renderer.setElementClass(_this.el.nativeElement, className, true);
            });
        }
    };
    /**
      * 触发属性面板展示
    */
    DgSelectComponent.prototype.showProperty = function () {
        this.formService.createPropertyPanel(this.field);
        return false;
    };
    /**
     * 触发控件树focus
     */
    DgSelectComponent.prototype.triggerTreeFocus = function () {
        this.controlTreeService.triggerTreeFocus.next(this.field.id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DgSelectComponent.prototype, "field", void 0);
    DgSelectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dg-select',
            template: __webpack_require__("./src/packages/form-editor-package/components/input/dg-select/dg-select.component.html"),
            styles: [__webpack_require__("./src/packages/form-editor-package/components/input/dg-select/dg-select.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_2__service_form_service__["FormService"], __WEBPACK_IMPORTED_MODULE_3__service_control_tree_service__["ControlTreeService"]])
    ], DgSelectComponent);
    return DgSelectComponent;
}(__WEBPACK_IMPORTED_MODULE_1__dg_basic_dg_basic_component__["DgBasicComponent"]));



/***/ }),

/***/ "./src/packages/form-editor-package/components/input/dg-smart-lookup-edit/dg-smart-lookup-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n    display: inline-block;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/form-editor-package/components/input/dg-smart-lookup-edit/dg-smart-lookup-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"farris-group-wrap\">\r\n  <div class=\"form-group farris-form-group\">\r\n    <label class=\"col-form-label\" for=\"hpinput01\">\r\n      <span class=\"farris-label-text\">{{field.title}}</span>\r\n      <span class=\"farris-label-info text-danger\" *ngIf=\"field.require\">*</span>\r\n    </label>\r\n    <div class=\"farris-input-wrap\">\r\n      <farris-lookup [disabled]='true'> </farris-lookup>\r\n      <div class=\"farris-feedback valid-feedback\">\r\n        设置符合规则\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/packages/form-editor-package/components/input/dg-smart-lookup-edit/dg-smart-lookup-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DgSmartLookupEditComponent", function() { return DgSmartLookupEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dg_basic_dg_basic_component__ = __webpack_require__("./src/packages/form-editor-package/components/dg-basic/dg-basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_form_service__ = __webpack_require__("./src/packages/form-editor-package/service/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_control_tree_service__ = __webpack_require__("./src/packages/form-editor-package/service/control-tree.service.ts");
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




var DgSmartLookupEditComponent = (function (_super) {
    __extends(DgSmartLookupEditComponent, _super);
    function DgSmartLookupEditComponent(el, renderer, formService, controlTreeService) {
        var _this = _super.call(this, el, renderer, formService, controlTreeService) || this;
        _this.el = el;
        _this.renderer = renderer;
        _this.formService = formService;
        _this.controlTreeService = controlTreeService;
        return _this;
    }
    DgSmartLookupEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.field) {
            return;
        }
        var appearance = this.field['appearance'];
        if (appearance && appearance.class) {
            appearance.class.split(' ').forEach(function (className) {
                _this.renderer.setElementClass(_this.el.nativeElement, className, true);
            });
        }
    };
    /**
      * 触发属性面板展示
    */
    DgSmartLookupEditComponent.prototype.showProperty = function () {
        this.formService.createPropertyPanel(this.field);
        return false;
    };
    /**
     * 触发控件树focus
     */
    DgSmartLookupEditComponent.prototype.triggerTreeFocus = function () {
        this.controlTreeService.triggerTreeFocus.next(this.field.id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DgSmartLookupEditComponent.prototype, "field", void 0);
    DgSmartLookupEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dg-smart-lookup-edit',
            template: __webpack_require__("./src/packages/form-editor-package/components/input/dg-smart-lookup-edit/dg-smart-lookup-edit.component.html"),
            styles: [__webpack_require__("./src/packages/form-editor-package/components/input/dg-smart-lookup-edit/dg-smart-lookup-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_2__service_form_service__["FormService"], __WEBPACK_IMPORTED_MODULE_3__service_control_tree_service__["ControlTreeService"]])
    ], DgSmartLookupEditComponent);
    return DgSmartLookupEditComponent;
}(__WEBPACK_IMPORTED_MODULE_1__dg_basic_dg_basic_component__["DgBasicComponent"]));



/***/ }),

/***/ "./src/packages/form-editor-package/components/input/dg-switch/dg-switch.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n    display: inline-block;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/form-editor-package/components/input/dg-switch/dg-switch.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"farris-group-wrap\">\r\n  <div class=\"form-group farris-form-group\">\r\n    <label for=\"inputPassword3\" class=\"col-form-label\">\r\n      <span class=\"farris-label-text\">{{field.title}}</span>\r\n    </label>\r\n    <div class=\"farris-input-wrap\">\r\n      <kendo-switch [(ngModel)]=\"field.checked\" [readonly]=\"true\"></kendo-switch>\r\n      <div class=\"farris-feedback valid-feedback\">\r\n        设置符合规则\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/packages/form-editor-package/components/input/dg-switch/dg-switch.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DgSwitchComponent", function() { return DgSwitchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dg_basic_dg_basic_component__ = __webpack_require__("./src/packages/form-editor-package/components/dg-basic/dg-basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_form_service__ = __webpack_require__("./src/packages/form-editor-package/service/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_control_tree_service__ = __webpack_require__("./src/packages/form-editor-package/service/control-tree.service.ts");
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




var DgSwitchComponent = (function (_super) {
    __extends(DgSwitchComponent, _super);
    function DgSwitchComponent(el, renderer, formService, controlTreeService) {
        var _this = _super.call(this, el, renderer, formService, controlTreeService) || this;
        _this.el = el;
        _this.renderer = renderer;
        _this.formService = formService;
        _this.controlTreeService = controlTreeService;
        return _this;
    }
    DgSwitchComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.field) {
            return;
        }
        var appearance = this.field['appearance'];
        if (appearance && appearance.class) {
            appearance.class.split(' ').forEach(function (className) {
                _this.renderer.setElementClass(_this.el.nativeElement, className, true);
            });
        }
    };
    /**
      * 触发属性面板展示
    */
    DgSwitchComponent.prototype.showProperty = function () {
        this.formService.createPropertyPanel(this.field);
        return false;
    };
    /**
     * 触发控件树focus
     */
    DgSwitchComponent.prototype.triggerTreeFocus = function () {
        this.controlTreeService.triggerTreeFocus.next(this.field.id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DgSwitchComponent.prototype, "field", void 0);
    DgSwitchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dg-switch',
            template: __webpack_require__("./src/packages/form-editor-package/components/input/dg-switch/dg-switch.component.html"),
            styles: [__webpack_require__("./src/packages/form-editor-package/components/input/dg-switch/dg-switch.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_2__service_form_service__["FormService"], __WEBPACK_IMPORTED_MODULE_3__service_control_tree_service__["ControlTreeService"]])
    ], DgSwitchComponent);
    return DgSwitchComponent;
}(__WEBPACK_IMPORTED_MODULE_1__dg_basic_dg_basic_component__["DgBasicComponent"]));



/***/ }),

/***/ "./src/packages/form-editor-package/components/input/dg-text-box/dg-text-box.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n    display: inline-block;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/form-editor-package/components/input/dg-text-box/dg-text-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"farris-group-wrap\">\r\n  <div class=\"form-group farris-form-group\">\r\n    <label [for]=\"field.id\" class=\"col-form-label\">\r\n      <span class=\"farris-label-text\">{{field.title}}</span>\r\n      <span class=\"farris-label-info text-danger\" *ngIf=\"field.require\">*</span>\r\n    </label>\r\n    <div class=\"farris-input-wrap\">\r\n      <input type=\"input\" class=\"form-control\" [id]=\"field.id\" [value]=\"field.value||''\" [placeholder]=\"field.placeHolder\"\r\n        readonly>\r\n      <div class=\"farris-feedback valid-feedback\">\r\n        设置符合规则\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/packages/form-editor-package/components/input/dg-text-box/dg-text-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DgTextBoxComponent", function() { return DgTextBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_form_service__ = __webpack_require__("./src/packages/form-editor-package/service/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dg_basic_dg_basic_component__ = __webpack_require__("./src/packages/form-editor-package/components/dg-basic/dg-basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_control_tree_service__ = __webpack_require__("./src/packages/form-editor-package/service/control-tree.service.ts");
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





var DgTextBoxComponent = (function (_super) {
    __extends(DgTextBoxComponent, _super);
    function DgTextBoxComponent(el, renderer, formService, controlTreeService) {
        var _this = _super.call(this, el, renderer, formService, controlTreeService) || this;
        _this.el = el;
        _this.renderer = renderer;
        _this.formService = formService;
        _this.controlTreeService = controlTreeService;
        return _this;
    }
    DgTextBoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.field) {
            return;
        }
        var appearance = this.field['appearance'];
        if (appearance && appearance.class) {
            appearance.class.split(' ').forEach(function (className) {
                _this.renderer.setElementClass(_this.el.nativeElement, className, true);
            });
        }
    };
    /**
       * 触发属性面板展示
     */
    DgTextBoxComponent.prototype.showProperty = function () {
        this.formService.createPropertyPanel(this.field);
        return false;
    };
    /**
     * 触发控件树focus
     */
    DgTextBoxComponent.prototype.triggerTreeFocus = function () {
        this.controlTreeService.triggerTreeFocus.next(this.field.id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DgTextBoxComponent.prototype, "field", void 0);
    DgTextBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dg-text-box',
            template: __webpack_require__("./src/packages/form-editor-package/components/input/dg-text-box/dg-text-box.component.html"),
            styles: [__webpack_require__("./src/packages/form-editor-package/components/input/dg-text-box/dg-text-box.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], __WEBPACK_IMPORTED_MODULE_1__service_form_service__["FormService"],
            __WEBPACK_IMPORTED_MODULE_3__service_control_tree_service__["ControlTreeService"]])
    ], DgTextBoxComponent);
    return DgTextBoxComponent;
}(__WEBPACK_IMPORTED_MODULE_2__dg_basic_dg_basic_component__["DgBasicComponent"]));



/***/ }),

/***/ "./src/packages/form-editor-package/components/input/dg-time-box/dg-time-box.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n    display: inline-block;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/form-editor-package/components/input/dg-time-box/dg-time-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"farris-group-wrap\">\r\n  <div class=\"form-group farris-form-group\">\r\n    <label [for]=\"field.id\" class=\"col-form-label\">\r\n      <span class=\"farris-label-text\">{{field.title}}</span>\r\n      <span class=\"farris-label-info text-danger\" *ngIf=\"field.require\">*</span>\r\n    </label>\r\n    <div class=\"farris-input-wrap\">\r\n      <kendo-timepicker class=\"form-control\" [readonly]=\"true\"></kendo-timepicker>\r\n      <div class=\"farris-feedback valid-feedback\">\r\n        设置符合规则\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/packages/form-editor-package/components/input/dg-time-box/dg-time-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DgTimeBoxComponent", function() { return DgTimeBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dg_basic_dg_basic_component__ = __webpack_require__("./src/packages/form-editor-package/components/dg-basic/dg-basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_form_service__ = __webpack_require__("./src/packages/form-editor-package/service/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_control_tree_service__ = __webpack_require__("./src/packages/form-editor-package/service/control-tree.service.ts");
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




var DgTimeBoxComponent = (function (_super) {
    __extends(DgTimeBoxComponent, _super);
    function DgTimeBoxComponent(el, renderer, formService, controlTreeService) {
        var _this = _super.call(this, el, renderer, formService, controlTreeService) || this;
        _this.el = el;
        _this.renderer = renderer;
        _this.formService = formService;
        _this.controlTreeService = controlTreeService;
        return _this;
    }
    DgTimeBoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.field) {
            return;
        }
        var appearance = this.field['appearance'];
        if (appearance && appearance.class) {
            appearance.class.split(' ').forEach(function (className) {
                _this.renderer.setElementClass(_this.el.nativeElement, className, true);
            });
        }
    };
    /**
      * 触发属性面板展示
    */
    DgTimeBoxComponent.prototype.showProperty = function () {
        this.formService.createPropertyPanel(this.field);
        return false;
    };
    /**
     * 触发控件树focus
     */
    DgTimeBoxComponent.prototype.triggerTreeFocus = function () {
        this.controlTreeService.triggerTreeFocus.next(this.field.id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DgTimeBoxComponent.prototype, "field", void 0);
    DgTimeBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dg-time-box',
            template: __webpack_require__("./src/packages/form-editor-package/components/input/dg-time-box/dg-time-box.component.html"),
            styles: [__webpack_require__("./src/packages/form-editor-package/components/input/dg-time-box/dg-time-box.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_2__service_form_service__["FormService"], __WEBPACK_IMPORTED_MODULE_3__service_control_tree_service__["ControlTreeService"]])
    ], DgTimeBoxComponent);
    return DgTimeBoxComponent;
}(__WEBPACK_IMPORTED_MODULE_1__dg_basic_dg_basic_component__["DgBasicComponent"]));



/***/ }),

/***/ "./src/packages/form-editor-package/components/layout/dg-flex-layout/dg-flex-layout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n    display: block;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/form-editor-package/components/layout/dg-flex-layout/dg-flex-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<div farris-flex  [direction]=\"flex.direction\" [fill]=\"flex.fill\" [width]=\"flex.size.width\"\r\n  [height]=\"flex.size.height\" [justify]=\"flex.justify\" [align]=\"flex.align\">\r\n  <dg-wrapper [template]=\"flex.contents\"></dg-wrapper>\r\n</div>"

/***/ }),

/***/ "./src/packages/form-editor-package/components/layout/dg-flex-layout/dg-flex-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DgFlexLayoutComponent", function() { return DgFlexLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_form_service__ = __webpack_require__("./src/packages/form-editor-package/service/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_control_tree_service__ = __webpack_require__("./src/packages/form-editor-package/service/control-tree.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dg_basic_dg_basic_component__ = __webpack_require__("./src/packages/form-editor-package/components/dg-basic/dg-basic.component.ts");
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




var DgFlexLayoutComponent = (function (_super) {
    __extends(DgFlexLayoutComponent, _super);
    function DgFlexLayoutComponent(el, renderer, formService, controlTreeService) {
        var _this = _super.call(this, el, renderer, formService, controlTreeService) || this;
        _this.el = el;
        _this.renderer = renderer;
        _this.formService = formService;
        _this.controlTreeService = controlTreeService;
        return _this;
    }
    DgFlexLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.flex) {
            return;
        }
        var appearance = this.flex['appearance'];
        if (appearance && appearance.class) {
            appearance.class.split(' ').forEach(function (className) {
                _this.renderer.setElementClass(_this.el.nativeElement, className, true);
            });
        }
    };
    /**
      * 触发属性面板展示
      */
    DgFlexLayoutComponent.prototype.showProperty = function () {
        this.formService.createPropertyPanel(this.flex);
        return false;
    };
    /**
     * 触发控件树focus
     */
    DgFlexLayoutComponent.prototype.triggerTreeFocus = function () {
        this.controlTreeService.triggerTreeFocus.next(this.flex.id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DgFlexLayoutComponent.prototype, "flex", void 0);
    DgFlexLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dg-flex-layout',
            template: __webpack_require__("./src/packages/form-editor-package/components/layout/dg-flex-layout/dg-flex-layout.component.html"),
            styles: [__webpack_require__("./src/packages/form-editor-package/components/layout/dg-flex-layout/dg-flex-layout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_1__service_form_service__["FormService"], __WEBPACK_IMPORTED_MODULE_2__service_control_tree_service__["ControlTreeService"]])
    ], DgFlexLayoutComponent);
    return DgFlexLayoutComponent;
}(__WEBPACK_IMPORTED_MODULE_3__dg_basic_dg_basic_component__["DgBasicComponent"]));



/***/ }),

/***/ "./src/packages/form-editor-package/components/layout/dg-response-layout/dg-response-layout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n    display: block;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/form-editor-package/components/layout/dg-response-layout/dg-response-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<div farris-row [justify]=\"response.justify\">\r\n  <dg-wrapper [template]=\"response.contents\"></dg-wrapper>\r\n</div>"

/***/ }),

/***/ "./src/packages/form-editor-package/components/layout/dg-response-layout/dg-response-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DgResponseLayoutComponent", function() { return DgResponseLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dg_basic_dg_basic_component__ = __webpack_require__("./src/packages/form-editor-package/components/dg-basic/dg-basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_form_service__ = __webpack_require__("./src/packages/form-editor-package/service/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_control_tree_service__ = __webpack_require__("./src/packages/form-editor-package/service/control-tree.service.ts");
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




var DgResponseLayoutComponent = (function (_super) {
    __extends(DgResponseLayoutComponent, _super);
    function DgResponseLayoutComponent(el, renderer, formService, controlTreeService) {
        var _this = _super.call(this, el, renderer, formService, controlTreeService) || this;
        _this.el = el;
        _this.renderer = renderer;
        _this.formService = formService;
        _this.controlTreeService = controlTreeService;
        return _this;
    }
    DgResponseLayoutComponent.prototype.ngOnInit = function () {
        if (!this.response) {
            return;
        }
        var appearance = this.response.appearance;
        if (appearance) {
            if (appearance.class) {
                this.renderer.setElementClass(this.el.nativeElement, appearance.class, true);
            }
        }
    };
    /**
       * 触发属性面板展示
     */
    DgResponseLayoutComponent.prototype.showProperty = function () {
        this.formService.createPropertyPanel(this.response);
        return false;
    };
    /**
     * 触发控件树focus
     */
    DgResponseLayoutComponent.prototype.triggerTreeFocus = function () {
        this.controlTreeService.triggerTreeFocus.next(this.response.id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DgResponseLayoutComponent.prototype, "response", void 0);
    DgResponseLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dg-response-layout',
            template: __webpack_require__("./src/packages/form-editor-package/components/layout/dg-response-layout/dg-response-layout.component.html"),
            styles: [__webpack_require__("./src/packages/form-editor-package/components/layout/dg-response-layout/dg-response-layout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_2__service_form_service__["FormService"], __WEBPACK_IMPORTED_MODULE_3__service_control_tree_service__["ControlTreeService"]])
    ], DgResponseLayoutComponent);
    return DgResponseLayoutComponent;
}(__WEBPACK_IMPORTED_MODULE_1__dg_basic_dg_basic_component__["DgBasicComponent"]));



/***/ }),

/***/ "./src/packages/form-editor-package/entity/entity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignElementCollection", function() { return DesignElementCollection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);

var DesignElementCollection = (function () {
    function DesignElementCollection(elements) {
        this.elements = elements;
        this.elementAppended = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        this.elementRemoved = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
    }
    DesignElementCollection.prototype.append = function (element) {
        this.elements.push(element);
        this.elementAppended.next(element);
    };
    DesignElementCollection.prototype.remove = function (index) {
        this.elements.splice(index, 1);
        this.elementRemoved.next(index);
    };
    return DesignElementCollection;
}());



/***/ }),

/***/ "./src/packages/form-editor-package/form-editor-package.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormEditorPackageModule", function() { return FormEditorPackageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__package__ = __webpack_require__("./src/packages/form-editor-package/package.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_form_editor_form_editor_component__ = __webpack_require__("./src/packages/form-editor-package/views/form-editor/form-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_demo_icon_select_editor_icon_select_editor_component__ = __webpack_require__("./src/packages/form-editor-package/views/demo/icon-select-editor/icon-select-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_buttons__ = __webpack_require__("./node_modules/@progress/kendo-angular-buttons/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_dateinputs__ = __webpack_require__("./node_modules/@progress/kendo-angular-dateinputs/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__progress_kendo_angular_dropdowns__ = __webpack_require__("./node_modules/@progress/kendo-angular-dropdowns/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__progress_kendo_angular_grid__ = __webpack_require__("./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__progress_kendo_angular_inputs__ = __webpack_require__("./node_modules/@progress/kendo-angular-inputs/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__progress_kendo_angular_layout__ = __webpack_require__("./node_modules/@progress/kendo-angular-layout/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__progress_kendo_angular_treeview__ = __webpack_require__("./node_modules/@progress/kendo-angular-treeview/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__farris_ide_devkit__ = __webpack_require__("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__farris_ide_devkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__farris_ide_devkit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__farris_ui__ = __webpack_require__("./node_modules/@farris/ui/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__farris_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__farris_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__gsp_lcm_metadata_selector__ = __webpack_require__("./node_modules/@gsp-lcm/metadata-selector/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__gsp_lcm_metadata_selector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__gsp_lcm_metadata_selector__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_dg_wrapper_dg_wrapper_component__ = __webpack_require__("./src/packages/form-editor-package/components/dg-wrapper/dg-wrapper.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_input_dg_numeric_text_box_dg_numeric_text_box_component__ = __webpack_require__("./src/packages/form-editor-package/components/input/dg-numeric-text-box/dg-numeric-text-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_dg_label_dg_label_component__ = __webpack_require__("./src/packages/form-editor-package/components/dg-label/dg-label.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_input_dg_text_box_dg_text_box_component__ = __webpack_require__("./src/packages/form-editor-package/components/input/dg-text-box/dg-text-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_dg_basic_dg_basic_component__ = __webpack_require__("./src/packages/form-editor-package/components/dg-basic/dg-basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__views_demo_grid_field_editor_grid_field_editor_component__ = __webpack_require__("./src/packages/form-editor-package/views/demo/grid-field-editor/grid-field-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_input_dg_multi_text_box_dg_multi_text_box_component__ = __webpack_require__("./src/packages/form-editor-package/components/input/dg-multi-text-box/dg-multi-text-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_input_dg_date_box_dg_date_box_component__ = __webpack_require__("./src/packages/form-editor-package/components/input/dg-date-box/dg-date-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_input_dg_time_box_dg_time_box_component__ = __webpack_require__("./src/packages/form-editor-package/components/input/dg-time-box/dg-time-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_input_dg_radio_group_dg_radio_group_component__ = __webpack_require__("./src/packages/form-editor-package/components/input/dg-radio-group/dg-radio-group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_input_dg_select_dg_select_component__ = __webpack_require__("./src/packages/form-editor-package/components/input/dg-select/dg-select.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_input_dg_lookup_edit_dg_lookup_edit_component__ = __webpack_require__("./src/packages/form-editor-package/components/input/dg-lookup-edit/dg-lookup-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_input_dg_smart_lookup_edit_dg_smart_lookup_edit_component__ = __webpack_require__("./src/packages/form-editor-package/components/input/dg-smart-lookup-edit/dg-smart-lookup-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_input_dg_check_box_dg_check_box_component__ = __webpack_require__("./src/packages/form-editor-package/components/input/dg-check-box/dg-check-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_input_dg_check_group_dg_check_group_component__ = __webpack_require__("./src/packages/form-editor-package/components/input/dg-check-group/dg-check-group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_input_dg_switch_dg_switch_component__ = __webpack_require__("./src/packages/form-editor-package/components/input/dg-switch/dg-switch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_input_dg_radio_dg_radio_component__ = __webpack_require__("./src/packages/form-editor-package/components/input/dg-radio/dg-radio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_command_dg_button_dg_button_component__ = __webpack_require__("./src/packages/form-editor-package/components/command/dg-button/dg-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_command_dg_button_group_dg_button_group_component__ = __webpack_require__("./src/packages/form-editor-package/components/command/dg-button-group/dg-button-group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_collection_dg_grid_dg_grid_component__ = __webpack_require__("./src/packages/form-editor-package/components/collection/dg-grid/dg-grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_collection_dg_list_view_dg_list_view_component__ = __webpack_require__("./src/packages/form-editor-package/components/collection/dg-list-view/dg-list-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_collection_dg_tree_grid_dg_tree_grid_component__ = __webpack_require__("./src/packages/form-editor-package/components/collection/dg-tree-grid/dg-tree-grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_collection_dg_tree_view_dg_tree_view_component__ = __webpack_require__("./src/packages/form-editor-package/components/collection/dg-tree-view/dg-tree-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_container_dg_container_dg_container_component__ = __webpack_require__("./src/packages/form-editor-package/components/container/dg-container/dg-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_container_dg_tab_dg_tab_component__ = __webpack_require__("./src/packages/form-editor-package/components/container/dg-tab/dg-tab.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__components_container_dg_panel_dg_panel_component__ = __webpack_require__("./src/packages/form-editor-package/components/container/dg-panel/dg-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__components_layout_dg_flex_layout_dg_flex_layout_component__ = __webpack_require__("./src/packages/form-editor-package/components/layout/dg-flex-layout/dg-flex-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__components_layout_dg_response_layout_dg_response_layout_component__ = __webpack_require__("./src/packages/form-editor-package/components/layout/dg-response-layout/dg-response-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__views_tabs_form_designer_panels_form_control_tree_control_tree_panel_control_tree_panel_component__ = __webpack_require__("./src/packages/form-editor-package/views/tabs/form-designer/panels/form-control-tree/control-tree-panel/control-tree-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__views_tabs_form_designer_panels_form_control_tree_context_menu_context_menu_component__ = __webpack_require__("./src/packages/form-editor-package/views/tabs/form-designer/panels/form-control-tree/context-menu/context-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__views_tabs_form_designer_panels_control_box_control_box_component__ = __webpack_require__("./src/packages/form-editor-package/views/tabs/form-designer/panels/control-box/control-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__views_tabs_view_model_designer_command_designer_command_designer_module__ = __webpack_require__("./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/command-designer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__views_tabs_form_designer_form_designer_form_designer_component__ = __webpack_require__("./src/packages/form-editor-package/views/tabs/form-designer/form-designer/form-designer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__views_tabs_view_model_designer_view_model_designer_view_model_designer_component__ = __webpack_require__("./src/packages/form-editor-package/views/tabs/view-model-designer/view-model-designer/view-model-designer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__views_tabs_component_designer_component_designer_component__ = __webpack_require__("./src/packages/form-editor-package/views/tabs/component-designer/component-designer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__views_tabs_view_model_designer_field_manager_field_manager_component__ = __webpack_require__("./src/packages/form-editor-package/views/tabs/view-model-designer/field-manager/field-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__views_tabs_view_model_designer_select_vm_fields_select_vm_fields_component__ = __webpack_require__("./src/packages/form-editor-package/views/tabs/view-model-designer/select-vm-fields/select-vm-fields.component.ts");
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















































// tslint:disable-next-line:max-line-length









var monacoConfig = {
    baseUrl: 'assets',
    defaultOptions: { scrollBeyondLastLine: false },
    onMonacoLoad: function () {
        // console.log('moncaco: ' + (<any>window).monaco);
    }
};
var FormEditorPackageModule = (function (_super) {
    __extends(FormEditorPackageModule, _super);
    function FormEditorPackageModule(cfr, injector) {
        var _this = _super.call(this) || this;
        _this.cfr = cfr;
        _this.injector = injector;
        return _this;
    }
    FormEditorPackageModule.prototype.initPackage = function (gsp) {
        this.package = new __WEBPACK_IMPORTED_MODULE_3__package__["FormEditorPackage"](gsp, this.cfr, this.injector);
    };
    FormEditorPackageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__views_form_editor_form_editor_component__["FormEditorComponent"], __WEBPACK_IMPORTED_MODULE_17__components_dg_wrapper_dg_wrapper_component__["DgWrapperComponent"], __WEBPACK_IMPORTED_MODULE_21__components_dg_basic_dg_basic_component__["DgBasicComponent"], __WEBPACK_IMPORTED_MODULE_53__views_tabs_view_model_designer_select_vm_fields_select_vm_fields_component__["SelectVmFieldsComponent"],
                __WEBPACK_IMPORTED_MODULE_19__components_dg_label_dg_label_component__["DgLabelComponent"],
                __WEBPACK_IMPORTED_MODULE_40__components_container_dg_container_dg_container_component__["DgContainerComponent"], __WEBPACK_IMPORTED_MODULE_41__components_container_dg_tab_dg_tab_component__["DgTabComponent"], __WEBPACK_IMPORTED_MODULE_42__components_container_dg_panel_dg_panel_component__["DgPanelComponent"],
                __WEBPACK_IMPORTED_MODULE_34__components_command_dg_button_dg_button_component__["DgButtonComponent"], __WEBPACK_IMPORTED_MODULE_35__components_command_dg_button_group_dg_button_group_component__["DgButtonGroupComponent"],
                __WEBPACK_IMPORTED_MODULE_43__components_layout_dg_flex_layout_dg_flex_layout_component__["DgFlexLayoutComponent"], __WEBPACK_IMPORTED_MODULE_44__components_layout_dg_response_layout_dg_response_layout_component__["DgResponseLayoutComponent"],
                __WEBPACK_IMPORTED_MODULE_36__components_collection_dg_grid_dg_grid_component__["DgGridComponent"], __WEBPACK_IMPORTED_MODULE_37__components_collection_dg_list_view_dg_list_view_component__["DgListViewComponent"], __WEBPACK_IMPORTED_MODULE_38__components_collection_dg_tree_grid_dg_tree_grid_component__["DgTreeGridComponent"], __WEBPACK_IMPORTED_MODULE_39__components_collection_dg_tree_view_dg_tree_view_component__["DgTreeViewComponent"],
                // 输入类
                __WEBPACK_IMPORTED_MODULE_20__components_input_dg_text_box_dg_text_box_component__["DgTextBoxComponent"], __WEBPACK_IMPORTED_MODULE_18__components_input_dg_numeric_text_box_dg_numeric_text_box_component__["DgNumericTextBoxComponent"],
                __WEBPACK_IMPORTED_MODULE_28__components_input_dg_lookup_edit_dg_lookup_edit_component__["DgLookupEditComponent"], __WEBPACK_IMPORTED_MODULE_29__components_input_dg_smart_lookup_edit_dg_smart_lookup_edit_component__["DgSmartLookupEditComponent"],
                __WEBPACK_IMPORTED_MODULE_30__components_input_dg_check_box_dg_check_box_component__["DgCheckBoxComponent"], __WEBPACK_IMPORTED_MODULE_31__components_input_dg_check_group_dg_check_group_component__["DgCheckGroupComponent"],
                __WEBPACK_IMPORTED_MODULE_33__components_input_dg_radio_dg_radio_component__["DgRadioComponent"], __WEBPACK_IMPORTED_MODULE_26__components_input_dg_radio_group_dg_radio_group_component__["DgRadioGroupComponent"], __WEBPACK_IMPORTED_MODULE_27__components_input_dg_select_dg_select_component__["DgSelectComponent"], __WEBPACK_IMPORTED_MODULE_32__components_input_dg_switch_dg_switch_component__["DgSwitchComponent"],
                __WEBPACK_IMPORTED_MODULE_24__components_input_dg_date_box_dg_date_box_component__["DgDateBoxComponent"], __WEBPACK_IMPORTED_MODULE_25__components_input_dg_time_box_dg_time_box_component__["DgTimeBoxComponent"], __WEBPACK_IMPORTED_MODULE_23__components_input_dg_multi_text_box_dg_multi_text_box_component__["DgMultiTextBoxComponent"],
                __WEBPACK_IMPORTED_MODULE_45__views_tabs_form_designer_panels_form_control_tree_control_tree_panel_control_tree_panel_component__["ControlTreePanelComponent"], __WEBPACK_IMPORTED_MODULE_46__views_tabs_form_designer_panels_form_control_tree_context_menu_context_menu_component__["ContextMenuComponent"], __WEBPACK_IMPORTED_MODULE_47__views_tabs_form_designer_panels_control_box_control_box_component__["ControlBoxComponent"],
                __WEBPACK_IMPORTED_MODULE_50__views_tabs_view_model_designer_view_model_designer_view_model_designer_component__["ViewModelDesignerComponent"], __WEBPACK_IMPORTED_MODULE_49__views_tabs_form_designer_form_designer_form_designer_component__["FormDesignerComponent"], __WEBPACK_IMPORTED_MODULE_51__views_tabs_component_designer_component_designer_component__["ComponentDesignerComponent"],
                __WEBPACK_IMPORTED_MODULE_52__views_tabs_view_model_designer_field_manager_field_manager_component__["FieldManagerComponent"],
                __WEBPACK_IMPORTED_MODULE_5__views_demo_icon_select_editor_icon_select_editor_component__["IconSelectEditorComponent"],
                __WEBPACK_IMPORTED_MODULE_22__views_demo_grid_field_editor_grid_field_editor_component__["GridFieldEditorComponent"],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_13__farris_ide_devkit__["AngularMonacoEditorModule"].forRoot(monacoConfig),
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_buttons__["ButtonsModule"],
                __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_dateinputs__["DateInputsModule"],
                __WEBPACK_IMPORTED_MODULE_8__progress_kendo_angular_dropdowns__["DropDownsModule"], __WEBPACK_IMPORTED_MODULE_8__progress_kendo_angular_dropdowns__["DropDownListModule"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_9__progress_kendo_angular_grid__["GridModule"],
                __WEBPACK_IMPORTED_MODULE_10__progress_kendo_angular_inputs__["InputsModule"],
                __WEBPACK_IMPORTED_MODULE_11__progress_kendo_angular_layout__["LayoutModule"],
                __WEBPACK_IMPORTED_MODULE_13__farris_ide_devkit__["ShContextMenuModule"],
                __WEBPACK_IMPORTED_MODULE_13__farris_ide_devkit__["TreeModule"],
                __WEBPACK_IMPORTED_MODULE_13__farris_ide_devkit__["PropertyPanelModule"],
                __WEBPACK_IMPORTED_MODULE_14__farris_ui__["PerfectScrollbarModule"],
                __WEBPACK_IMPORTED_MODULE_15__gsp_lcm_metadata_selector__["GSPMetadataServiceModule"].forRoot(__WEBPACK_IMPORTED_MODULE_16__environments_environment__["environment"].SERVER_IP),
                __WEBPACK_IMPORTED_MODULE_12__progress_kendo_angular_treeview__["TreeViewModule"],
                __WEBPACK_IMPORTED_MODULE_14__farris_ui__["NotifyModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_14__farris_ui__["LookupModule"],
                __WEBPACK_IMPORTED_MODULE_14__farris_ui__["FarrisScrollTabsModule"],
                __WEBPACK_IMPORTED_MODULE_48__views_tabs_view_model_designer_command_designer_command_designer_module__["CommandDesignerModule"],
                __WEBPACK_IMPORTED_MODULE_14__farris_ui__["FarrisPanelModule"],
                __WEBPACK_IMPORTED_MODULE_14__farris_ui__["FlexLayoutMoudle"],
                __WEBPACK_IMPORTED_MODULE_14__farris_ui__["FarrisResponsiveModule"],
                __WEBPACK_IMPORTED_MODULE_14__farris_ui__["TreeTableModule"],
                __WEBPACK_IMPORTED_MODULE_14__farris_ui__["LoadingModule"].forRoot({
                    message: '加载中，请稍后...'
                }),
                __WEBPACK_IMPORTED_MODULE_14__farris_ui__["FarrisDialogModule"]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_4__views_form_editor_form_editor_component__["FormEditorComponent"], __WEBPACK_IMPORTED_MODULE_21__components_dg_basic_dg_basic_component__["DgBasicComponent"], __WEBPACK_IMPORTED_MODULE_53__views_tabs_view_model_designer_select_vm_fields_select_vm_fields_component__["SelectVmFieldsComponent"],
                __WEBPACK_IMPORTED_MODULE_19__components_dg_label_dg_label_component__["DgLabelComponent"],
                __WEBPACK_IMPORTED_MODULE_46__views_tabs_form_designer_panels_form_control_tree_context_menu_context_menu_component__["ContextMenuComponent"], __WEBPACK_IMPORTED_MODULE_5__views_demo_icon_select_editor_icon_select_editor_component__["IconSelectEditorComponent"], __WEBPACK_IMPORTED_MODULE_22__views_demo_grid_field_editor_grid_field_editor_component__["GridFieldEditorComponent"],
                __WEBPACK_IMPORTED_MODULE_40__components_container_dg_container_dg_container_component__["DgContainerComponent"], __WEBPACK_IMPORTED_MODULE_41__components_container_dg_tab_dg_tab_component__["DgTabComponent"], __WEBPACK_IMPORTED_MODULE_42__components_container_dg_panel_dg_panel_component__["DgPanelComponent"],
                __WEBPACK_IMPORTED_MODULE_43__components_layout_dg_flex_layout_dg_flex_layout_component__["DgFlexLayoutComponent"], __WEBPACK_IMPORTED_MODULE_44__components_layout_dg_response_layout_dg_response_layout_component__["DgResponseLayoutComponent"],
                __WEBPACK_IMPORTED_MODULE_36__components_collection_dg_grid_dg_grid_component__["DgGridComponent"], __WEBPACK_IMPORTED_MODULE_37__components_collection_dg_list_view_dg_list_view_component__["DgListViewComponent"], __WEBPACK_IMPORTED_MODULE_38__components_collection_dg_tree_grid_dg_tree_grid_component__["DgTreeGridComponent"], __WEBPACK_IMPORTED_MODULE_39__components_collection_dg_tree_view_dg_tree_view_component__["DgTreeViewComponent"],
                __WEBPACK_IMPORTED_MODULE_35__components_command_dg_button_group_dg_button_group_component__["DgButtonGroupComponent"], __WEBPACK_IMPORTED_MODULE_34__components_command_dg_button_dg_button_component__["DgButtonComponent"],
                __WEBPACK_IMPORTED_MODULE_20__components_input_dg_text_box_dg_text_box_component__["DgTextBoxComponent"], __WEBPACK_IMPORTED_MODULE_18__components_input_dg_numeric_text_box_dg_numeric_text_box_component__["DgNumericTextBoxComponent"],
                __WEBPACK_IMPORTED_MODULE_28__components_input_dg_lookup_edit_dg_lookup_edit_component__["DgLookupEditComponent"], __WEBPACK_IMPORTED_MODULE_29__components_input_dg_smart_lookup_edit_dg_smart_lookup_edit_component__["DgSmartLookupEditComponent"],
                __WEBPACK_IMPORTED_MODULE_30__components_input_dg_check_box_dg_check_box_component__["DgCheckBoxComponent"], __WEBPACK_IMPORTED_MODULE_31__components_input_dg_check_group_dg_check_group_component__["DgCheckGroupComponent"],
                __WEBPACK_IMPORTED_MODULE_33__components_input_dg_radio_dg_radio_component__["DgRadioComponent"], __WEBPACK_IMPORTED_MODULE_26__components_input_dg_radio_group_dg_radio_group_component__["DgRadioGroupComponent"], __WEBPACK_IMPORTED_MODULE_27__components_input_dg_select_dg_select_component__["DgSelectComponent"], __WEBPACK_IMPORTED_MODULE_32__components_input_dg_switch_dg_switch_component__["DgSwitchComponent"],
                __WEBPACK_IMPORTED_MODULE_24__components_input_dg_date_box_dg_date_box_component__["DgDateBoxComponent"], __WEBPACK_IMPORTED_MODULE_25__components_input_dg_time_box_dg_time_box_component__["DgTimeBoxComponent"], __WEBPACK_IMPORTED_MODULE_23__components_input_dg_multi_text_box_dg_multi_text_box_component__["DgMultiTextBoxComponent"],
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], FormEditorPackageModule);
    return FormEditorPackageModule;
}(__WEBPACK_IMPORTED_MODULE_13__farris_ide_devkit__["PackageModule"]));

//# sourceMappingURL=form-editor-package.module.js.map

/***/ }),

/***/ "./src/packages/form-editor-package/package.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormEditorPackage", function() { return FormEditorPackage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__ = __webpack_require__("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_form_editor_package_view__ = __webpack_require__("./src/packages/form-editor-package/views/form-editor-package-view.ts");
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


var FormEditorPackage = (function (_super) {
    __extends(FormEditorPackage, _super);
    function FormEditorPackage(gsp, cfr, injector) {
        var _this = _super.call(this, gsp) || this;
        _this.cfr = cfr;
        _this.injector = injector;
        return _this;
    }
    FormEditorPackage.prototype.activate = function () {
        var _this = this;
        this.gsp.workspace.addOpener(function (uri) { return _this.openFormEditor(uri); });
    };
    FormEditorPackage.prototype.deactivate = function () {
    };
    FormEditorPackage.prototype.openFormEditor = function (uri) {
        if (uri.endsWith('.webdev')) {
            var pkgView_1 = new __WEBPACK_IMPORTED_MODULE_1__views_form_editor_package_view__["FormEditorPackageView"]({}, this.cfr, this.injector);
            var currentElement = pkgView_1.getElement().instance;
            currentElement.metadataUri = uri;
            return {
                getTitle: function () { return '表单设计器-' + uri.slice(uri.lastIndexOf('/') + 1); },
                getElement: function () { return pkgView_1.getElement(); }
            };
        }
    };
    return FormEditorPackage;
}(__WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__["Package"]));



/***/ }),

/***/ "./src/packages/form-editor-package/service/control-tree.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlTreeService", function() { return ControlTreeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_tabs_form_designer_panels_form_control_tree_context_menu_context_menu_component__ = __webpack_require__("./src/packages/form-editor-package/views/tabs/form-designer/panels/form-control-tree/context-menu/context-menu.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ControlTreeService = (function () {
    function ControlTreeService(http) {
        this.http = http;
        this.triggerTreeFocus = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"](); // 外部（表单编辑器）触发树节点的focus事件
    }
    /**
     * 新增树节点
     * @param parentNode 父节点
     * @param metadata 新增控件的元数据
     */
    ControlTreeService.prototype.addNode = function (parentNode, metadata) {
        var nodeObject = {
            id: metadata.id,
            name: metadata.type,
            rawElement: metadata,
            rawParentElement: parentNode.rawElement.contents,
            rawParentId: parentNode.rawElement.id,
            children: [],
            hasRightClickMenu: true,
            rightClickMenuComponent: __WEBPACK_IMPORTED_MODULE_3__views_tabs_form_designer_panels_form_control_tree_context_menu_context_menu_component__["ContextMenuComponent"]
        };
        parentNode.treeModel.createAndAddTreeNode(nodeObject, parentNode);
    };
    /**
     * 删除树节点
     * @param node
     */
    ControlTreeService.prototype.deleteNode = function (node) {
        node.treeModel.removeTreeNode(node);
    };
    /**
     * 表单对象映射为树结构
     * @param formData 表单Dg对象
     */
    ControlTreeService.prototype.mappingFormData2Tree = function (formData) {
        if (!formData) {
            return;
        }
        return this.recursionElements(formData, '');
    };
    ControlTreeService.prototype.recursionElements = function (elementCollection, parentId) {
        var _this = this;
        var nodeObjectList = [];
        var elements = elementCollection.elements;
        elements.forEach(function (element) {
            var isLeaf = true, nodeRefObject;
            if (element.contents) {
                isLeaf = false;
                nodeRefObject = _this.recursionElements(element.contents, element.id);
            }
            var nodeObject = {
                id: element.id,
                name: element.type,
                rawElement: element,
                rawParentElement: elementCollection,
                rawParentId: parentId,
                children: isLeaf ? [] : nodeRefObject,
                hasRightClickMenu: true,
                rightClickMenuComponent: __WEBPACK_IMPORTED_MODULE_3__views_tabs_form_designer_panels_form_control_tree_context_menu_context_menu_component__["ContextMenuComponent"],
                isExpanded: true
            };
            nodeObjectList.push(nodeObject);
        });
        return nodeObjectList;
    };
    ControlTreeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpClient"]])
    ], ControlTreeService);
    return ControlTreeService;
}());



/***/ }),

/***/ "./src/packages/form-editor-package/service/control.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlService", function() { return ControlService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ControlService = (function () {
    function ControlService(http) {
        this.http = http;
    }
    /**
     * 获取控件元数据(dom结构)
     */
    ControlService.prototype.getControlMetaData = function (type) {
        switch (type) {
            case 'TextBox': {
                return {
                    'id': 'TextBox1',
                    'type': 'TextBox',
                    'appearance': null,
                    'border': null,
                    'font': null,
                    'margin': null,
                    'padding': null,
                    'size': null,
                    'binding': null,
                    'title': 'TextBox1',
                    'readonly': false,
                    'require': true,
                    'disable': false,
                    'placeHolder': '',
                    'format': null,
                    'validation': null,
                    'defaultValue': '',
                    'value': null,
                    'maxLength': null
                };
            }
            case 'Button': {
                return {
                    'id': 'button1',
                    'type': 'Button',
                    'appearance': null,
                    'border': null,
                    'font': null,
                    'margin': null,
                    'padding': null,
                    'size': null,
                    'disable': false,
                    'icon': null,
                    'iconPosition': null,
                    'seperate': true,
                    'text': 'Button1',
                    'textAligment': 'center',
                    'click': null,
                    'template': null
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
        }
    };
    /**
     * 获取控件列表
     * @param type
     */
    ControlService.prototype.getControlList = function (controlName) {
        var subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
        this.http.get('assets/mock-data/controlList.json').subscribe(function (data) {
            if (data && data.length > 0 && controlName) {
                data.forEach(function (element) {
                    element.items = Object(__WEBPACK_IMPORTED_MODULE_3_lodash__["filter"])(element.items, function (o) { return o.name.includes(controlName); });
                });
            }
            subject.next(data);
        });
        return subject;
    };
    ControlService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpClient"]])
    ], ControlService);
    return ControlService;
}());



/***/ }),

/***/ "./src/packages/form-editor-package/service/form.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormService", function() { return FormService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entity_entity__ = __webpack_require__("./src/packages/form-editor-package/entity/entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gsp_lcm_metadata_selector__ = __webpack_require__("./node_modules/@gsp-lcm/metadata-selector/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gsp_lcm_metadata_selector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__gsp_lcm_metadata_selector__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_demo_grid_field_editor_grid_field_editor_component__ = __webpack_require__("./src/packages/form-editor-package/views/demo/grid-field-editor/grid-field-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__farris_ide_devkit__ = __webpack_require__("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__farris_ide_devkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__farris_ide_devkit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_demo_icon_select_editor_icon_select_editor_component__ = __webpack_require__("./src/packages/form-editor-package/views/demo/icon-select-editor/icon-select-editor.component.ts");
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








var FormService = (function () {
    function FormService(http, metadataService, componentFactoryResolvor) {
        this.http = http;
        this.metadataService = metadataService;
        this.componentFactoryResolvor = componentFactoryResolvor;
        this._domDgMap = new Map(); // 保存每层dom节点
    }
    Object.defineProperty(FormService.prototype, "domDgMap", {
        get: function () {
            return this._domDgMap;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 获取表单DOM描述并转化为DgElement描述
     */
    FormService.prototype.getFormData = function (metadataUri) {
        var _this = this;
        var result = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
        var uri = metadataUri.replace(/\\/g, '/');
        var fileName = uri.substring(uri.lastIndexOf('/') + 1);
        var filePath = uri.substring(1, uri.lastIndexOf('/'));
        this.metadataService.LoadMetadata(fileName, filePath).subscribe(function (data) {
            _this._metadataDto = data;
            var metadataContent = JSON.parse(data.content);
            var domJson = JSON.parse(metadataContent.Contents);
            result.next(domJson);
        });
        return result;
    };
    /**
     * 表单DOM转化为DgElement描述
     * @param domJson
     */
    FormService.prototype.mappingDom2DgForm = function (domJson) {
        var module = domJson.module;
        var components = module.components, rootElement = __rest(module, ["components"]);
        var componentElements = this.recursiveDOM(components);
        if (componentElements) {
            rootElement.contents = new __WEBPACK_IMPORTED_MODULE_3__entity_entity__["DesignElementCollection"](componentElements);
        }
        rootElement.elementFocused = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
        var dgElementCollection = new __WEBPACK_IMPORTED_MODULE_3__entity_entity__["DesignElementCollection"]([rootElement]);
        this._domDgMap.set(rootElement.id, domJson);
        return dgElementCollection;
    };
    FormService.prototype.recursiveDOM = function (domElements) {
        var _this = this;
        if (!domElements || domElements.length === 0) {
            return [];
        }
        var dgElements = [];
        domElements.forEach(function (domElement) {
            var contents = domElement.contents, elementInfo = __rest(domElement, ["contents"]);
            if (contents) {
                var childDgElements = _this.recursiveDOM(contents);
                elementInfo.contents = new __WEBPACK_IMPORTED_MODULE_3__entity_entity__["DesignElementCollection"](childDgElements);
            }
            elementInfo.elementFocused = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
            dgElements.push(elementInfo);
            _this.domDgMap.set(elementInfo.id, domElement);
        });
        return dgElements;
    };
    /**
     * 保存表单：表单对象映射为DOM，并保存元数据
     * @param dgForm
     */
    // saveFormData(dgForm: DesignElementCollection): Observable<any> {
    // const domJson = this.mappingForm2Json(dgForm);
    FormService.prototype.saveFormData = function (domJson) {
        var metadataContent = JSON.parse(this._metadataDto.content);
        metadataContent.Contents = JSON.stringify(domJson);
        this._metadataDto.content = JSON.stringify(metadataContent);
        return this.metadataService.SaveMetadata(this._metadataDto, '');
    };
    FormService.prototype.mappingForm2Json = function (dgForm) {
        if (!dgForm.elements || dgForm.elements.length === 0) {
            return null;
        }
        var rootDomJson = { module: {} };
        var rootModuleElement = dgForm.elements[0]; // 默认module 只有一个
        var contents = rootModuleElement.contents, elementFocused = rootModuleElement.elementFocused, rootModule = __rest(rootModuleElement, ["contents", "elementFocused"]);
        var childcomponents = this.recursiveDgContents(contents);
        rootModule.components = childcomponents;
        rootDomJson.module = rootModule;
        return rootDomJson;
    };
    FormService.prototype.recursiveDgContents = function (dgContents) {
        var _this = this;
        if (!dgContents.elements || dgContents.elements.length === 0) {
            return null;
        }
        var childJsonList = [];
        dgContents.elements.forEach(function (element) {
            var contents = element.contents, elementFocused = element.elementFocused, childJson = __rest(element, ["contents", "elementFocused"]);
            if (contents) {
                var childcontents = _this.recursiveDgContents(contents);
                childJson['contents'] = childcontents;
            }
            childJsonList.push(childJson);
        });
        return childJsonList;
    };
    /**
     * 新增控件
     * @param element 父节点
     * @param metadata 新增控件的元数据
     */
    FormService.prototype.addControl = function (element, dgMetadata) {
        if (!element) {
            return;
        }
        var elementFocused = dgMetadata.elementFocused, metadata = __rest(dgMetadata, ["elementFocused"]);
        // 触发map 和domjson修改
        this._domDgMap.set(metadata.id, metadata);
        this._domDgMap.get(element.id).contents.push(metadata);
        // 触发formData 修改
        element.contents.append(dgMetadata);
    };
    /**
     * 删除控件
     */
    FormService.prototype.deleteControl = function (nodeData) {
        var parentElement = nodeData.rawParentElement, deleteElement = nodeData.rawElement, parentElementId = nodeData.rawParentId;
        // 触发formData 修改
        if (parentElement) {
            var elements = parentElement.elements;
            for (var index = 0; index < elements.length; index++) {
                var element = elements[index];
                if (element.id === deleteElement.id) {
                    parentElement.remove(index);
                    break;
                }
            }
        }
        // 触发map 和domjson修改
        if (parentElementId) {
            var parentDom = this._domDgMap.get(parentElementId);
            for (var index = 0; index < parentDom.contents.length; index++) {
                if (parentDom.contents[index].id === deleteElement.id) {
                    parentDom.contents.splice(index, 1);
                    this._domDgMap.delete(deleteElement.id);
                    break;
                }
            }
        }
    };
    FormService.prototype.runForm = function (url) {
        return this.http.get(url);
    };
    /**
     * 初始化属性面板
     * @param container
     */
    FormService.prototype.initPropertyContainer = function (container) {
        this.propertyContainer = container;
    };
    /**
     * 触发展示属性面板
     * @param propertyData
     */
    FormService.prototype.createPropertyPanel = function (propertyData) {
        var _this = this;
        if (!propertyData || !propertyData.type) {
            return;
        }
        var propertyConfig = this.getProperConfig(propertyData);
        if (!propertyConfig) {
            return;
        }
        this.propertyContainer.clear();
        var itemPanel = this.componentFactoryResolvor.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_6__farris_ide_devkit__["PropertyPanelComponent"]);
        var propertyRef = this.propertyContainer.createComponent(itemPanel);
        propertyRef.instance.propertyConfig = propertyConfig;
        propertyRef.instance.propertyData = propertyData;
        propertyRef.instance.width = 300;
        propertyRef.instance.propertyChanged.subscribe(function (data) {
            _this.setDomDgMap(propertyData.id, data);
        });
    };
    FormService.prototype.setDomDgMap = function (id, changeObject) {
        var domJson = this._domDgMap.get(id);
        domJson[changeObject.propertyID] = changeObject.propertyValue;
    };
    /**
     * 组装属性配置（mock）
     */
    FormService.prototype.createGridPropertyPanel = function (propertyData, treeData) {
        if (!propertyData || !propertyData.type) {
            return;
        }
        var propertyConfig = [
            {
                categoryId: 'usual',
                categoryName: '常规',
                properties: [{
                        propertyID: 'id',
                        propertyName: '标识',
                        propertyType: 'string',
                        visible: true,
                        readonly: true
                    }, {
                        propertyID: 'caption',
                        propertyName: '标题',
                        propertyType: 'string',
                        visible: true
                    }, {
                        propertyID: 'fields',
                        propertyName: '列',
                        propertyType: 'modal',
                        editor: __WEBPACK_IMPORTED_MODULE_5__views_demo_grid_field_editor_grid_field_editor_component__["GridFieldEditorComponent"],
                        editorParams: {
                            treeData: treeData
                        },
                        visible: true,
                        converter: new GridFieldConverter()
                    }, {
                        propertyID: 'appearance',
                        propertyName: 'appearance',
                        propertyType: 'modal',
                        visible: true
                    }, {
                        propertyID: 'border',
                        propertyName: '边线',
                        propertyType: 'modal',
                        visible: true
                    }, {
                        propertyID: 'font',
                        propertyName: '字体',
                        propertyType: 'modal',
                        visible: true
                    }, {
                        propertyID: 'margin',
                        propertyName: '外边距',
                        propertyType: 'modal',
                        visible: true
                    }, {
                        propertyID: 'padding',
                        propertyName: '内边距',
                        propertyType: 'modal',
                        visible: true
                    }, {
                        propertyID: 'size',
                        propertyName: '大小',
                        propertyType: 'modal',
                        visible: true
                    }
                ]
            }
        ];
        this.propertyContainer.clear();
        var itemPanel = this.componentFactoryResolvor.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_6__farris_ide_devkit__["PropertyPanelComponent"]);
        var propertyRef = this.propertyContainer.createComponent(itemPanel);
        propertyRef.instance.propertyConfig = propertyConfig;
        propertyRef.instance.propertyData = propertyData;
        propertyRef.instance.width = 300;
    };
    /**
     * 组装属性配置（mock）
     */
    FormService.prototype.getProperConfig = function (formObject) {
        var _this = this;
        if (!formObject) {
            return null;
        }
        var properties = [];
        Object.keys(formObject).forEach(function (key) {
            var property = _this.getPropertyByKey(key);
            if (property) {
                properties.push(property);
            }
        });
        var Config = [
            {
                categoryId: 'usual',
                categoryName: '常规',
                properties: properties
            },
            {
                categoryId: 'commands',
                categoryName: '事件',
                properties: []
            }
        ];
        return Config;
    };
    FormService.prototype.getPropertyByKey = function (key) {
        var propertyDic = {
            id: {
                propertyID: 'id',
                propertyName: '标识',
                propertyType: 'string',
                visible: true,
                readonly: true
            },
            placeHolder: {
                propertyID: 'placeHolder',
                propertyName: 'Placeholder',
                propertyType: 'string',
                visible: true
            },
            caption: {
                propertyID: 'caption',
                propertyName: '标题',
                propertyType: 'string',
                visible: true
            },
            fields: {
                propertyID: 'fields',
                propertyName: '列',
                propertyType: 'modal',
                editor: __WEBPACK_IMPORTED_MODULE_5__views_demo_grid_field_editor_grid_field_editor_component__["GridFieldEditorComponent"],
                editorParams: {
                    treeData: {}
                },
                visible: true
            },
            appearance: {
                propertyID: 'appearance',
                propertyName: 'appearance',
                propertyType: 'modal',
                visible: true
            },
            border: {
                propertyID: 'border',
                propertyName: '边线',
                propertyType: 'modal',
                visible: true
            },
            font: {
                propertyID: 'font',
                propertyName: '字体',
                propertyType: 'modal',
                visible: true
            },
            margin: {
                propertyID: 'margin',
                propertyName: '外边距',
                propertyType: 'modal',
                visible: true
            },
            padding: {
                propertyID: 'padding',
                propertyName: '内边距',
                propertyType: 'modal',
                visible: true
            },
            size: {
                propertyID: 'size',
                propertyName: '大小',
                propertyType: 'modal',
                visible: true
            },
            icon: {
                propertyID: 'icon',
                propertyName: '图标',
                propertyType: 'modal',
                visible: true,
                editor: __WEBPACK_IMPORTED_MODULE_7__views_demo_icon_select_editor_icon_select_editor_component__["IconSelectEditorComponent"]
            },
            binding: {
                propertyID: 'binding',
                propertyName: '绑定',
                propertyType: 'modal',
                visible: true
            },
            title: {
                propertyID: 'title',
                propertyName: '标签',
                propertyType: 'string',
                visible: true
            },
            readonly: {
                propertyID: 'readonly',
                propertyName: '是否只读',
                propertyType: 'boolean',
                visible: true
            },
            require: {
                propertyID: 'require',
                propertyName: '是否必填',
                propertyType: 'boolean',
                visible: true
            },
            disable: {
                propertyID: 'disable',
                propertyName: '是否不可用',
                propertyType: 'boolean',
                visible: true
            },
            format: {
                propertyID: 'format',
                propertyName: '格式',
                propertyType: 'modal',
                visible: true
            },
            validation: {
                propertyID: 'validation',
                propertyName: '校验',
                propertyType: 'modal',
                visible: true
            },
            defaultValue: {
                propertyID: 'defaultValue',
                propertyName: '默认值',
                propertyType: 'string',
                visible: true
            },
            value: {
                propertyID: 'value',
                propertyName: '取值',
                propertyType: 'string',
                visible: true
            },
            maxLength: {
                propertyID: 'maxLength',
                propertyName: '取值最大长度',
                propertyType: 'number',
                precision: 0,
                min: 3,
                max: 10,
                visible: true
            },
            text: {
                propertyID: 'text',
                propertyName: '文本',
                propertyType: 'string',
                visible: true
            },
            numberValue: {
                propertyID: 'numberValue',
                propertyName: '取值',
                propertyType: 'number',
                precision: '3',
                min: 3,
                max: 10,
                visible: true
            }
        };
        return propertyDic[key];
    };
    FormService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpClient"], __WEBPACK_IMPORTED_MODULE_4__gsp_lcm_metadata_selector__["GSPMetadataService"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]])
    ], FormService);
    return FormService;
}());

var GridFieldConverter = (function () {
    function GridFieldConverter() {
    }
    GridFieldConverter.prototype.convertTo = function (data) {
        return '共 ' + data.length + ' 列';
    };
    return GridFieldConverter;
}());


/***/ }),

/***/ "./src/packages/form-editor-package/service/viewmodel.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewModelService", function() { return ViewModelService; });
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


var ViewModelService = (function () {
    function ViewModelService() {
    }
    /**
    * 获取模型tables树，schemas映射为treeView的数据格式
    */
    ViewModelService.prototype.getVMTree = function (domJson) {
        var schemas = domJson.module.schemas;
        if (!schemas || schemas.length === 0) {
            return;
        }
        var rootObject = {
            id: 'rootViewModel',
            name: '视图模型',
            code: '',
            isExpanded: true,
            children: []
        };
        rootObject.children.push(this.getTablesTree(schemas[0]));
        this._vmTreeData = [rootObject];
        return [rootObject];
    };
    ViewModelService.prototype.getTablesTree = function (dataModel) {
        var _this = this;
        var rootObject = {
            id: dataModel['id'],
            name: dataModel['name'],
            code: dataModel['code'],
            isExpanded: true,
            children: []
        };
        var childFields = dataModel['children']; // 子表
        if (childFields && Object.keys(childFields).length > 0) {
            Object.keys(childFields).forEach(function (childField) {
                var childNode = _this.getTablesTree(childFields[childField]);
                rootObject.children.push(childNode);
            });
        }
        return rootObject;
    };
    /**
    * 将模型映射为treeView的数据格式
    */
    ViewModelService.prototype.getViewModelTree = function (domJson) {
        var schemas = domJson.module.schemas;
        if (!schemas || schemas.length === 0) {
            return;
        }
        var rootObject = this.mappingDgVM2Tree(schemas[0]); // 目前只有一个对象
        this._vmTreeData = [rootObject];
        return [rootObject];
    };
    /**
     * 将DgViewModel映射为kendo-treeview格式
     */
    ViewModelService.prototype.mappingDgVM2Tree = function (dataModel) {
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
    * 获取子表的tree(暂时按一层子表处理，目前用于卡片模板的列编辑器)
    */
    ViewModelService.prototype.getChildVMTree = function (dataSource) {
        var sourceList = dataSource.split('.');
        if (sourceList.length === 1) {
            return this._vmTreeData;
        }
        var children = this._vmTreeData[0].Children;
        if (!children || children.length === 0) {
            return {};
        }
        var childTreeList = Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["find"])(children, function (o) { return o.Name === '子表' && o.Code === ''; });
        var childTree = Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["find"])(childTreeList.Children, function (o) { return o.Code === sourceList[1]; });
        return [childTree];
    };
    ViewModelService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ViewModelService);
    return ViewModelService;
}());



/***/ }),

/***/ "./src/packages/form-editor-package/util/Guid.ts":
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

/***/ "./src/packages/form-editor-package/views/demo/grid-field-editor/grid-field-editor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".selectGridFields {\r\n    overflow: hidden;\r\n}\r\n\r\n.selectGridFields .keyDescription {\r\n    color: #a09e9e\r\n}\r\n\r\n.selectGridFields .treeView {\r\n    -ms-flex: 1;\r\n        flex: 1;\r\n    overflow: auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/form-editor-package/views/demo/grid-field-editor/grid-field-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"selectGridFields p-3 d-flex flex-column h-100 smallKendoTree\">\r\n  <div class=\"mb-2\">请选择需要展示在列表中的字段</div>\r\n  <div class=\"treeView\">\r\n    <kendo-treeview [nodes]=\"treeData\" kendoTreeViewExpandable [expandedKeys]=\"expandedKeys\" [kendoTreeViewCheckable]=\"checkableSettings\"\r\n      [(checkedKeys)]=\"checkedKeys\" [checkBy]=\"'labelID'\" [isChecked]=\"isChecked\" [children]=\"children\" [hasChildren]=\"hasChildren\"\r\n      (checkedChange)=\"handleChecking($event)\">\r\n      <ng-template kendoTreeViewNodeTemplate let-dataItem>\r\n        <!-- <span [ngClass]=\"iconClass(dataItem)\"></span> -->\r\n        {{dataItem.Name}}<span *ngIf=\"dataItem.Code\" class=\"keyDescription\">({{dataItem.Code}})</span>\r\n      </ng-template>\r\n    </kendo-treeview>\r\n  </div>\r\n</div>\r\n<ng-template #gridFieldFooter>\r\n  <div class=\"btns\">\r\n    <button type=\"button\" class=\"btn btn-outline-secondary btn-sm px-3\" (click)=\"clickCancel()\">取消</button>\r\n    <button type=\"button\" class=\"btn btn-outline-primary btn-sm px-3\" (click)=\"clickOK()\">确定</button>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/packages/form-editor-package/views/demo/grid-field-editor/grid-field-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridFieldEditorComponent", function() { return GridFieldEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_control_service__ = __webpack_require__("./src/packages/form-editor-package/service/control.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GridFieldEditorComponent = (function () {
    function GridFieldEditorComponent(controlService) {
        var _this = this;
        this.controlService = controlService;
        this.closeModal = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.editorParams = {};
        this.modalConfig = {
            title: '列编辑器',
            width: 900,
            height: 500
        };
        this.checkedKeys = [];
        this.treeData = [];
        this.treekeyNameMap = {};
        this.expandedKeys = ['0'];
        this.children = function (dataItem) { return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["of"])(dataItem.Children); };
        this.hasChildren = function (dataItem) { return !!dataItem.Children; };
        this.isExpanded = function (dataItem, index) {
            return true;
        };
        this.isChecked = function (dataItem, index) {
            if (_this.containsItem(dataItem)) {
                return 'checked';
            }
            if (_this.isIndeterminate(dataItem.Children)) {
                return 'indeterminate';
            }
            return 'none';
        };
    }
    Object.defineProperty(GridFieldEditorComponent.prototype, "checkableSettings", {
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
    GridFieldEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.editorParams) {
            return;
        }
        this.treeData = this.editorParams['treeData'];
        // 勾选的标识为lableID
        if (this.value && this.value.length > -1) {
            this.value.forEach(function (field) {
                _this.checkedKeys.push(field.dataField);
            });
        }
    };
    GridFieldEditorComponent.prototype.containsItem = function (item) {
        return this.checkedKeys.indexOf(item['labelID']) > -1;
    };
    GridFieldEditorComponent.prototype.isIndeterminate = function (items) {
        if (items === void 0) { items = []; }
        var idx = 0;
        var item;
        while (item = items[idx]) {
            if (this.isIndeterminate(item.Children) || this.containsItem(item)) {
                return true;
            }
            idx += 1;
        }
        return false;
    };
    // 树节点点击事件，记录key-name，方便添加节点时获取name
    GridFieldEditorComponent.prototype.handleChecking = function ($event) {
        console.log('记录check', $event);
        var dataItem = $event.item.dataItem;
        this.treekeyNameMap[dataItem.labelID] = dataItem.Name;
    };
    GridFieldEditorComponent.prototype.clickOK = function () {
        var _this = this;
        // 识别选中的labelID,组织列数组
        console.log(this.checkedKeys);
        if (this.checkedKeys.length === 0) {
            alert('请选择字段');
            return;
        }
        this.checkedKeys.forEach(function (labelID) {
            var field = Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["find"])(_this.value, function (o) { return o.dataField === labelID; });
            if (!field && labelID !== _this.treeData[0].labelID) {
                field = _this.controlService.getControlMetaData('GridField');
                field.id = 'gridField_' + labelID;
                field.dataField = labelID;
                field.caption = _this.treekeyNameMap[labelID];
                _this.value.push(field);
            }
        });
        // 判断是否有字段删除
        for (var i = 0; i < this.value.length; i++) {
            var field = this.value[i];
            if (this.checkedKeys.indexOf(field.dataField) < 0) {
                this.value.splice(i, 1);
                i--;
            }
        }
        this.closeModal.emit(this.value);
    };
    GridFieldEditorComponent.prototype.clickCancel = function () {
        this.closeModal.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], GridFieldEditorComponent.prototype, "closeModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], GridFieldEditorComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], GridFieldEditorComponent.prototype, "editorParams", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('gridFieldFooter'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], GridFieldEditorComponent.prototype, "modalFooter", void 0);
    GridFieldEditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-grid-field-editor',
            template: __webpack_require__("./src/packages/form-editor-package/views/demo/grid-field-editor/grid-field-editor.component.html"),
            styles: [__webpack_require__("./src/packages/form-editor-package/views/demo/grid-field-editor/grid-field-editor.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__service_control_service__["ControlService"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__service_control_service__["ControlService"]])
    ], GridFieldEditorComponent);
    return GridFieldEditorComponent;
}());



/***/ }),

/***/ "./src/packages/form-editor-package/views/demo/icon-select-editor/icon-select-editor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/form-editor-package/views/demo/icon-select-editor/icon-select-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <input type=\"radio\" [(ngModel)]=\"value\" value=\"icon1\"> icon1\r\n  <input type=\"radio\" [(ngModel)]=\"value\" value=\"icon2\"> icon2\r\n</div>\r\n\r\n<ng-template #iconSelectFooter>\r\n  <div class=\"btns\">\r\n    <button type=\"button\" class=\"btn btn-outline-secondary btn-sm px-3\" (click)=\"clickCancel()\">取消</button>\r\n    <button type=\"button\" class=\"btn btn-outline-primary btn-sm px-3\" (click)=\"clickOK()\">确定</button>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/packages/form-editor-package/views/demo/icon-select-editor/icon-select-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconSelectEditorComponent", function() { return IconSelectEditorComponent; });
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

var IconSelectEditorComponent = (function () {
    function IconSelectEditorComponent() {
        this.closeModal = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.modalConfig = {
            title: '选择图标',
            width: 800,
            height: 400
        };
    }
    IconSelectEditorComponent.prototype.clickOK = function () {
        this.closeModal.emit(this.value);
    };
    IconSelectEditorComponent.prototype.clickCancel = function () {
        this.closeModal.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], IconSelectEditorComponent.prototype, "closeModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], IconSelectEditorComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('iconSelectFooter'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], IconSelectEditorComponent.prototype, "modalFooter", void 0);
    IconSelectEditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-icon-select-editor',
            template: __webpack_require__("./src/packages/form-editor-package/views/demo/icon-select-editor/icon-select-editor.component.html"),
            styles: [__webpack_require__("./src/packages/form-editor-package/views/demo/icon-select-editor/icon-select-editor.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IconSelectEditorComponent);
    return IconSelectEditorComponent;
}());



/***/ }),

/***/ "./src/packages/form-editor-package/views/form-editor-package-view.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormEditorPackageView", function() { return FormEditorPackageView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__ = __webpack_require__("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form_editor_form_editor_component__ = __webpack_require__("./src/packages/form-editor-package/views/form-editor/form-editor.component.ts");
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


var FormEditorPackageView = (function (_super) {
    __extends(FormEditorPackageView, _super);
    function FormEditorPackageView(serializedState, cfr, injector) {
        var _this = _super.call(this, serializedState) || this;
        _this.cfr = cfr;
        _this.injector = injector;
        var componentFactory = _this.cfr.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_1__form_editor_form_editor_component__["FormEditorComponent"]);
        _this.element = componentFactory.create(_this.injector);
        return _this;
    }
    return FormEditorPackageView;
}(__WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__["PackageView"]));



/***/ }),

/***/ "./src/packages/form-editor-package/views/form-editor/form-editor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n    width: 100%;\r\n}\r\n\r\n.formEditor {\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\n.formEditor .toolbar {\r\n    color: #346187;\r\n    font-size: 13px;\r\n    background: #F3F3F3;\r\n}\r\n\r\n.formEditor .toolbar .devicePanel {\r\n    border: 1px solid #a4aeb7;\r\n    border-radius: 4px;\r\n}\r\n\r\n.formEditor .toolbar .device {\r\n    padding: 1px 10px;\r\n}\r\n\r\n.formEditor .toolbar .device img {\r\n    width: 15px;\r\n}\r\n\r\n.formEditor .toolbar span, .formEditor .toolbar .device {\r\n    cursor: pointer;\r\n}\r\n\r\n.formEditor .toolbar .device.active {\r\n    background: #346187;\r\n}\r\n\r\n.formEditor .toolbar .disable {\r\n    color: #9ca5ad;\r\n}\r\n\r\n/******************tab页签****************/\r\n\r\n.formEditor .tab-panel {\r\n    background-color: #F3F3F3;\r\n    height: 35px;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    padding-left: 8px;\r\n    overflow: hidden;\r\n    line-height: 30px;\r\n    text-align: right;\r\n    white-space: nowrap;\r\n    -ms-flex-pack: justify;\r\n        justify-content: space-between;\r\n}\r\n\r\n.formEditor .tab-panel .tab-container {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    margin: 0 auto;\r\n    padding: 0;\r\n    width: 100%;\r\n}\r\n\r\n.formEditor .tab-panel .tab-container .tab-item {\r\n    font-size: 12px;\r\n    text-transform: uppercase;\r\n    padding: 2px 16px 3px;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    cursor: pointer;\r\n    transition: transform 50ms ease;\r\n    position: relative;\r\n}\r\n\r\n.formEditor .tab-panel .tab-container .tab-item .tab-label {\r\n    color: #99B0C3;\r\n    text-decoration: none;\r\n    background-color: transparent;\r\n}\r\n\r\n.formEditor .tab-panel .tab-container .tab-item.checked .tab-label {\r\n    color: #346187;\r\n    border-bottom: 1px solid #346187;\r\n}\r\n\r\n/******************tab页签 end****************/\r\n\r\n.formEditor .mainContent {\r\n    overflow: auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/form-editor-package/views/form-editor/form-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"formEditor d-flex flex-column\">\r\n  <div class=\"toolbar px-3 py-2 border\">\r\n    <div class=\"d-flex\">\r\n      <span class=\"mr-4\" (click)=\"saveForm()\">保存</span>\r\n      <span class=\"mr-4 disable\">另存为</span>\r\n      <span class=\"mr-4 disable\">撤销</span>\r\n      <span class=\"mr-4 disable\">签入</span>\r\n      <span class=\"mr-4 disable\">签出</span>\r\n      <span class=\"mr-4\" (click)=\"runForm()\">运行 </span>\r\n      <span class=\"mr-4 disable\">发布</span>\r\n    </div>\r\n  </div>\r\n  <!-- <router-outlet (activate)=\"onRouteActivate($event)\" name=\"aux\"></router-outlet>\r\n  <a [routerLink]=\"[{ outlets: { aux: 'form-designer' } }]\">ffff</a>\r\n  <common-routes [datas]=\"tabs\" (modeSelectEvent)=\"modeSelectEvent($event)\"></common-routes> -->\r\n\r\n\r\n  <div class=\"mainContent h-100\">\r\n    <ng-container *ngIf=\"editorTab==='formDesigner'\">\r\n      <form-designer [(domJson)]=\"domJson\"></form-designer>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"editorTab==='viewModelDesigner'\">\r\n      <view-model-designer [(domJson)]=\"domJson\"></view-model-designer>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"editorTab==='componentDesigner'\">\r\n      <component-designer></component-designer>\r\n    </ng-container>\r\n  </div>\r\n\r\n  <div class=\"tab-panel border-top\">\r\n    <ul class=\"tab-container\">\r\n      <li class=\"tab-item\" [class.checked]=\"editorTab==='formDesigner'\" (click)=\"changeEditorBar('formDesigner')\">\r\n        <a class=\"tab-label\">界面设计</a>\r\n      </li>\r\n      <li class=\"tab-item\" [class.checked]=\"editorTab==='viewModelDesigner'\" (click)=\"changeEditorBar('viewModelDesigner')\">\r\n        <a class=\"tab-label\">视图模型</a>\r\n      </li>\r\n      <li class=\"tab-item\" [class.checked]=\"editorTab==='componentDesigner'\" (click)=\"changeEditorBar('componentDesigner')\">\r\n        <a class=\"tab-label\">构件代码</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n\r\n<farris-notify-container></farris-notify-container>"

/***/ }),

/***/ "./src/packages/form-editor-package/views/form-editor/form-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormEditorComponent", function() { return FormEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_form_service__ = __webpack_require__("./src/packages/form-editor-package/service/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_control_tree_service__ = __webpack_require__("./src/packages/form-editor-package/service/control-tree.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__farris_ui__ = __webpack_require__("./node_modules/@farris/ui/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__farris_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__farris_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_form_designer_form_designer_form_designer_component__ = __webpack_require__("./src/packages/form-editor-package/views/tabs/form-designer/form-designer/form-designer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_viewmodel_service__ = __webpack_require__("./src/packages/form-editor-package/service/viewmodel.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FormEditorComponent = (function () {
    function FormEditorComponent(formService, controlTreeService, notifyService, loadingService) {
        this.formService = formService;
        this.controlTreeService = controlTreeService;
        this.notifyService = notifyService;
        this.loadingService = loadingService;
        this.editorTab = 'formDesigner';
    }
    Object.defineProperty(FormEditorComponent.prototype, "metadataUri", {
        set: function (metadataUri) {
            var _this = this;
            this.formService.getFormData(metadataUri).subscribe(function (domJson) {
                _this.domJson = domJson;
                _this._metadataUri = metadataUri;
            });
        },
        enumerable: true,
        configurable: true
    });
    FormEditorComponent.prototype.ngOnInit = function () {
    };
    FormEditorComponent.prototype.changeEditorBar = function (key) {
        this.editorTab = key;
    };
    /**
     * 保存表单
     */
    FormEditorComponent.prototype.saveForm = function () {
        var _this = this;
        // console.log(this.formData);
        this.formDesigner.saveForm();
        this.formService.saveFormData(this.domJson).subscribe(function () {
            _this.notifyService.success({
                title: '系统提示', msg: '保存表单成功！', timeout: 3000
            });
        }, function (error) {
            _this.notifyService.error({
                title: '系统提示', msg: '保存表单失败！', timeout: 3000
            });
        });
    };
    /**
     * 运行：先保存再运行
     */
    FormEditorComponent.prototype.runForm = function () {
        var _this = this;
        this.formDesigner.saveForm();
        this.formService.saveFormData(this.domJson).subscribe(function () {
            var uri = _this._metadataUri.replace(/\\/g, '/');
            var fileName = uri.substring(uri.lastIndexOf('/') + 1);
            var filePath = uri.substring(1, uri.lastIndexOf('/'));
            var url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["environment"].SERVER_IP + '/api/dev/main/v1.0/jitanalysis/jit?metaDataFileName=' + fileName
                + '&metaDataFilePath=' + filePath;
            var loading = _this.loadingService.show({ container: 'body' });
            _this.formService.runForm(url).subscribe(function (data) {
                if (data) {
                    window.open(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["environment"].SERVER_IP + '/platform/dev/main/web/webidedebug/dist/index.html');
                }
                loading.close();
            }, function (error) {
                loading.close();
                _this.notifyService.error({
                    title: '系统提示', msg: '表单运行失败！', timeout: 3000
                });
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__tabs_form_designer_form_designer_form_designer_component__["FormDesignerComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__tabs_form_designer_form_designer_form_designer_component__["FormDesignerComponent"])
    ], FormEditorComponent.prototype, "formDesigner", void 0);
    FormEditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'webide-form-editor',
            template: __webpack_require__("./src/packages/form-editor-package/views/form-editor/form-editor.component.html"),
            styles: [__webpack_require__("./src/packages/form-editor-package/views/form-editor/form-editor.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__service_form_service__["FormService"], __WEBPACK_IMPORTED_MODULE_2__service_control_tree_service__["ControlTreeService"], __WEBPACK_IMPORTED_MODULE_3__farris_ui__["NotifyService"], __WEBPACK_IMPORTED_MODULE_6__service_viewmodel_service__["ViewModelService"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_form_service__["FormService"], __WEBPACK_IMPORTED_MODULE_2__service_control_tree_service__["ControlTreeService"],
            __WEBPACK_IMPORTED_MODULE_3__farris_ui__["NotifyService"], __WEBPACK_IMPORTED_MODULE_3__farris_ui__["LoadingService"]])
    ], FormEditorComponent);
    return FormEditorComponent;
}());



/***/ }),

/***/ "./src/packages/form-editor-package/views/tabs/component-designer/component-designer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/form-editor-package/views/tabs/component-designer/component-designer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <p>\r\n  component-designer works!\r\n</p> -->\r\n"

/***/ }),

/***/ "./src/packages/form-editor-package/views/tabs/component-designer/component-designer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentDesignerComponent", function() { return ComponentDesignerComponent; });
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

var ComponentDesignerComponent = (function () {
    function ComponentDesignerComponent() {
    }
    ComponentDesignerComponent.prototype.ngOnInit = function () {
    };
    ComponentDesignerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'component-designer',
            template: __webpack_require__("./src/packages/form-editor-package/views/tabs/component-designer/component-designer.component.html"),
            styles: [__webpack_require__("./src/packages/form-editor-package/views/tabs/component-designer/component-designer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ComponentDesignerComponent);
    return ComponentDesignerComponent;
}());



/***/ }),

/***/ "./src/packages/form-editor-package/views/tabs/form-designer/form-designer/form-designer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n    height: 100%;\r\n}\r\n\r\n.formDesigner .leftBar {\r\n    min-width: 260px;\r\n    background: #F3F3F3;\r\n    height: 100%;\r\n}\r\n\r\n/******************tab页签****************/\r\n\r\n.formDesigner .tab-panel {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    overflow: hidden;\r\n    line-height: 30px;\r\n    min-height: 35px;\r\n    text-align: right;\r\n    white-space: nowrap;\r\n    -ms-flex-pack: justify;\r\n        justify-content: space-between;\r\n}\r\n\r\n.formDesigner .tab-panel .tab-container {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    margin: 0 auto;\r\n    padding: 0;\r\n    width: 100%;\r\n}\r\n\r\n.formDesigner .tab-panel .tab-container .tab-item {\r\n    font-size: 12px;\r\n    text-transform: uppercase;\r\n    padding: 2px 16px 3px;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    cursor: pointer;\r\n    transition: transform 50ms ease;\r\n    position: relative;\r\n}\r\n\r\n.formDesigner .tab-panel .tab-container .tab-item .tab-label {\r\n    color: #99B0C3;\r\n    text-decoration: none;\r\n    background-color: transparent;\r\n}\r\n\r\n.formDesigner .tab-panel .tab-container .tab-item.checked .tab-label {\r\n    color: #346187;\r\n    border-bottom: 1px solid #346187;\r\n}\r\n\r\n/******************tab页签 end****************/\r\n\r\n.formDesigner .leftBar .tab-content {\r\n    display: block;\r\n    height: 100%;\r\n    overflow: auto;\r\n}\r\n\r\n.formDesigner .editorDiv {\r\n    overflow: auto;\r\n    min-width: 1000px;\r\n}\r\n\r\n.formDesigner .tab-panel {\r\n    background-color: #F3F3F3;\r\n}\r\n\r\n.formDesigner .mainPanel {\r\n    overflow: auto;\r\n}\r\n\r\n\r\n.formDesigner .designerCodePanel .customMonacoEditor {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    left: 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/form-editor-package/views/tabs/form-designer/form-designer/form-designer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"formDesigner d-flex h-100\">\r\n  <div class=\"leftBar border-right d-flex flex-column\">\r\n    <div class=\"tab-panel\">\r\n      <ul class=\"tab-container\">\r\n        <li class=\"tab-item\" [class.checked]=\"leftTabActive==='controlTree'\" (click)=\"changeLeftBar('controlTree')\">\r\n          <a class=\"tab-label\">表单控件树</a>\r\n        </li>\r\n        <li class=\"tab-item\" [class.checked]=\"leftTabActive==='controllist'\" (click)=\"changeLeftBar('controllist')\">\r\n          <a class=\"tab-label\">控件工具箱</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"tab-content flex-fill\">\r\n      <perfect-scrollbar>\r\n        <div [style.display]=\"leftTabActive==='controlTree'?'block':'none'\" class=\"position-relative\">\r\n          <app-control-tree-panel [formData]=\"formData\" (refreshCodeEditor)=\"refreshCodeEditor($event)\"></app-control-tree-panel>\r\n        </div>\r\n        <div [style.display]=\"leftTabActive==='controllist'?'block':'none'\" style=\"width:260px\">\r\n          <app-control-box></app-control-box>\r\n        </div>\r\n      </perfect-scrollbar>\r\n    </div>\r\n  </div>\r\n  <div class=\"mainPanel w-100 h-100 d-flex flex-column\">\r\n    <perfect-scrollbar>\r\n      <div class=\"editorDiv flex-fill\" [style.display]=\"bottomTabActive==='formDesignerTab'?'block':'none'\">\r\n        <dg-wrapper [template]=\"formData\"></dg-wrapper>\r\n      </div>\r\n      <div class=\"designerCodePanel flex-fill\" *ngIf=\"bottomTabActive==='codeEditorTab'\">\r\n        <angular-monaco-editor class=\"customMonacoEditor\" [options]=\"codeEditorOptions\" [(ngModel)]=\"designerCode\"></angular-monaco-editor>\r\n      </div>\r\n\r\n    </perfect-scrollbar>\r\n\r\n    <div class=\"tab-panel\">\r\n      <ul class=\"tab-container\">\r\n        <li class=\"tab-item\" [class.checked]=\"bottomTabActive==='formDesignerTab'\" (click)=\"changeBottomBar('formDesignerTab')\">\r\n          <a class=\"tab-label\">可视化设计器</a>\r\n        </li>\r\n        <li class=\"tab-item\" [class.checked]=\"bottomTabActive==='codeEditorTab'\" (click)=\"changeBottomBar('codeEditorTab')\">\r\n          <a class=\"tab-label\">代码编辑器</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div [style.display]=\"bottomTabActive==='formDesignerTab'?'block':'none'\">\r\n    <ng-container #propertyPanel></ng-container>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/packages/form-editor-package/views/tabs/form-designer/form-designer/form-designer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDesignerComponent", function() { return FormDesignerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_form_service__ = __webpack_require__("./src/packages/form-editor-package/service/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_control_tree_service__ = __webpack_require__("./src/packages/form-editor-package/service/control-tree.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_dg_wrapper_dg_wrapper_component__ = __webpack_require__("./src/packages/form-editor-package/components/dg-wrapper/dg-wrapper.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_viewmodel_service__ = __webpack_require__("./src/packages/form-editor-package/service/viewmodel.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FormDesignerComponent = (function () {
    function FormDesignerComponent(formService, controlTreeService, viewModelService) {
        this.formService = formService;
        this.controlTreeService = controlTreeService;
        this.viewModelService = viewModelService;
        this.vmTreeData = [];
        this.commandData = {};
        this.leftTabActive = 'controlTree';
        this.bottomTabActive = 'formDesignerTab';
        this.designerCode = '';
        this.codeEditorOptions = {
            theme: 'vs-dark',
            language: 'json',
            formatOnType: true
        };
    }
    FormDesignerComponent.prototype.ngOnInit = function () {
        this.formService.initPropertyContainer(this.propertyContainer);
    };
    FormDesignerComponent.prototype.ngOnChanges = function () {
        if (this.domJson) {
            this.refreshFormAndTree();
            this.designerCode = JSON.stringify(this.domJson);
        }
    };
    FormDesignerComponent.prototype.changeLeftBar = function (key) {
        this.leftTabActive = key;
    };
    FormDesignerComponent.prototype.changeBottomBar = function (key) {
        if (key === 'codeEditorTab') {
            this.getLatestCodeDom();
        }
        if (this.bottomTabActive === 'codeEditorTab' && key !== 'codeEditorTab') {
            this.saveFormCodeEditor();
        }
        this.bottomTabActive = key;
    };
    FormDesignerComponent.prototype.refreshFormAndTree = function () {
        var _this = this;
        this.formData = this.formService.mappingDom2DgForm(this.domJson);
        this.vmTreeData = this.viewModelService.getViewModelTree(this.domJson);
        // 重新focus树节点
        if (this.focusedElementNode) {
            setTimeout(function () {
                _this.controlTreeService.triggerTreeFocus.next(_this.focusedElementNode.id);
            });
        }
    };
    FormDesignerComponent.prototype.refreshCodeEditor = function ($event) {
        // console.log($event);
        this.focusedElementNode = $event;
        // 获取Map中的dom结构
        this.focusedDomJson = this.formService.domDgMap.get($event.id);
        this.designerCode = JSON.stringify(this.focusedDomJson);
    };
    FormDesignerComponent.prototype.getLatestCodeDom = function () {
        if (this.focusedElementNode && this.focusedDomJson) {
            this.designerCode = JSON.stringify(this.focusedDomJson);
        }
        else {
            this.designerCode = JSON.stringify(this.domJson);
        }
    };
    FormDesignerComponent.prototype.saveFormCodeEditor = function () {
        // TODO  校验数据
        if (!this.designerCode) {
            return;
        }
        // 修改domDgMap，重新刷新form和控件树
        var newDomJson = JSON.parse(this.designerCode);
        if (this.focusedElementNode) {
            var oldDomJson = this.formService.domDgMap.get(this.focusedElementNode.id);
            Object(__WEBPACK_IMPORTED_MODULE_4_lodash__["assign"])(oldDomJson, newDomJson);
        }
        else {
            Object(__WEBPACK_IMPORTED_MODULE_4_lodash__["assign"])(this.domJson, newDomJson);
        }
        this.formWrapper.clearForm();
        this.refreshFormAndTree();
    };
    /**
     * 保存，主要解决在代码编辑器视图中修改dom后直接点保存的场景
     */
    FormDesignerComponent.prototype.saveForm = function () {
        if (this.bottomTabActive === 'codeEditorTab') {
            this.saveFormCodeEditor();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FormDesignerComponent.prototype, "domJson", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('propertyPanel', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"])
    ], FormDesignerComponent.prototype, "propertyContainer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__components_dg_wrapper_dg_wrapper_component__["DgWrapperComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__components_dg_wrapper_dg_wrapper_component__["DgWrapperComponent"])
    ], FormDesignerComponent.prototype, "formWrapper", void 0);
    FormDesignerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'form-designer',
            template: __webpack_require__("./src/packages/form-editor-package/views/tabs/form-designer/form-designer/form-designer.component.html"),
            styles: [__webpack_require__("./src/packages/form-editor-package/views/tabs/form-designer/form-designer/form-designer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_form_service__["FormService"], __WEBPACK_IMPORTED_MODULE_2__service_control_tree_service__["ControlTreeService"],
            __WEBPACK_IMPORTED_MODULE_5__service_viewmodel_service__["ViewModelService"]])
    ], FormDesignerComponent);
    return FormDesignerComponent;
}());



/***/ }),

/***/ "./src/packages/form-editor-package/views/tabs/form-designer/panels/control-box/control-box.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".controlBox {\r\n    font-size: 13px !important;\r\n}\r\n\r\n.controlBox .controlPanel {\r\n    width: 33%;\r\n    height: 55px;\r\n    text-align: center;\r\n    margin: 5px 0;\r\n    font-size: 13px;\r\n}\r\n\r\n.controlBox .controlPanel .controlIcon {\r\n    width: 75%;\r\n    height: 75%;\r\n    background-repeat: no-repeat;\r\n    margin: 0 auto;\r\n    background-position: center;\r\n    background-size: 33px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/form-editor-package/views/tabs/form-designer/panels/control-box/control-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"controlBox\">\r\n  <kendo-panelbar [expandMode]=\"kendoConfig.expandMode\">\r\n\r\n    <kendo-panelbar-item [title]=\"category.name\" [expanded]=\"true\" *ngFor=\"let category of controlList\">\r\n      <ng-template kendoPanelBarContent>\r\n        <div class=\"d-flex flex-wrap\" style=\"margin:-10px\">\r\n          <div *ngFor=\"let control of category.items\" class=\"controlPanel\">\r\n            <div class=\"controlIcon\" [ngClass]=\"control.type\"></div>\r\n            {{control.name}}\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n\r\n    </kendo-panelbar-item>\r\n\r\n\r\n  </kendo-panelbar>\r\n</div>"

/***/ }),

/***/ "./src/packages/form-editor-package/views/tabs/form-designer/panels/control-box/control-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlBoxComponent", function() { return ControlBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_control_service__ = __webpack_require__("./src/packages/form-editor-package/service/control.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ControlBoxComponent = (function () {
    function ControlBoxComponent(controlService) {
        this.controlService = controlService;
        this.controlList = [];
        this.kendoConfig = {
            expandMode: 2
        };
    }
    ControlBoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.controlService.getControlList('').subscribe(function (data) {
            _this.controlList = data;
        });
    };
    ControlBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-control-box',
            template: __webpack_require__("./src/packages/form-editor-package/views/tabs/form-designer/panels/control-box/control-box.component.html"),
            styles: [__webpack_require__("./src/packages/form-editor-package/views/tabs/form-designer/panels/control-box/control-box.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__service_control_service__["ControlService"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_control_service__["ControlService"]])
    ], ControlBoxComponent);
    return ControlBoxComponent;
}());



/***/ }),

/***/ "./src/packages/form-editor-package/views/tabs/form-designer/panels/form-control-tree/context-menu/context-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/form-editor-package/views/tabs/form-designer/panels/form-control-tree/context-menu/context-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='tree-node-content' [shAttachMenu]=\"menu\" [shMenuData]=\"nodeData\" >\r\n  <span>{{ nodeData.name }}</span>\r\n</div>\r\n<!-- [style.width]=\"contentWidth + 'px'\" -->\r\n<sh-context-menu #menu>\r\n  <!-- <ng-template shContextMenuItem let-item [subMenu]=\"subMenu\" [visible]=\"!addMenuDisable\"> -->\r\n  <ng-template shContextMenuItem let-item [visible]=\"!addMenuDisable\" (click)=\"addMenuClicked($event)\">\r\n    <div>\r\n      新增控件\r\n    </div>\r\n  </ng-template>\r\n  <ng-template shContextMenuItem let-item (click)=\"deleteMenuClicked($event)\" [visible]=\"true\">\r\n    <div>\r\n      删除控件\r\n    </div>\r\n  </ng-template>\r\n</sh-context-menu>"

/***/ }),

/***/ "./src/packages/form-editor-package/views/tabs/form-designer/panels/form-control-tree/context-menu/context-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuComponent", function() { return ContextMenuComponent; });
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

var ContextMenuComponent = (function () {
    function ContextMenuComponent(el) {
        this.el = el;
        this.rightMenuClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.addMenuDisable = false; // 新增控件是否置灰
        this.contentWidth = 0;
    }
    ContextMenuComponent.prototype.ngOnInit = function () {
        if (this.nodeData && this.nodeData.rawElement) {
            this.addMenuDisable = this.nodeData.rawElement.type === 'ContentContainer' ? false : true;
        }
        this.initContentWidth();
    };
    /**
     * 删除控件
     */
    ContextMenuComponent.prototype.deleteMenuClicked = function (event) {
        event.menuId = 'deleteControl';
        this.rightMenuClicked.emit(event);
    };
    ContextMenuComponent.prototype.addMenuClicked = function (event) {
        if (this.addMenuDisable) {
            return;
        }
        event.menuId = 'addControl';
        this.rightMenuClicked.emit(event);
    };
    // 树节点选中的宽度效果
    ContextMenuComponent.prototype.initContentWidth = function () {
        var offset_left = this.el.nativeElement.offsetLeft;
        if (this.el.nativeElement.offsetParent) {
            var containerWidth = this.el.nativeElement.offsetParent.clientWidth - 20;
            this.contentWidth = containerWidth - offset_left;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ContextMenuComponent.prototype, "nodeData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ContextMenuComponent.prototype, "rightMenuClicked", void 0);
    ContextMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-context-menu',
            template: __webpack_require__("./src/packages/form-editor-package/views/tabs/form-designer/panels/form-control-tree/context-menu/context-menu.component.html"),
            styles: [__webpack_require__("./src/packages/form-editor-package/views/tabs/form-designer/panels/form-control-tree/context-menu/context-menu.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], ContextMenuComponent);
    return ContextMenuComponent;
}());



/***/ }),

/***/ "./src/packages/form-editor-package/views/tabs/form-designer/panels/form-control-tree/control-tree-panel/control-tree-panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".control-select-header {\r\n    padding: 0 10px;\r\n    color: #0c73b5;\r\n    border-bottom: 1px solid #d9d9d9;\r\n    line-height: 50px;\r\n    text-align: center;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.control-select-header .closeIcon {\r\n    cursor: pointer;\r\n    color: #666;\r\n    position: absolute;\r\n    right: 10px;\r\n    font-size: 20px;\r\n}\r\n\r\n.control-select-body {\r\n    padding: 15px 10px;\r\n    font-size: 0.875rem;\r\n    color: #333333;\r\n    line-height: 2rem;\r\n}\r\n\r\n.control-select-body .form-control {\r\n    font-size: 0.875rem;\r\n}\r\n\r\n.control-select-body .fa-search {\r\n    position: absolute;\r\n    right: 11px;\r\n    top: 10px;\r\n    color: grey;\r\n}\r\n\r\n.control-select-body .controlItem {\r\n    cursor: pointer\r\n}\r\n\r\n.control-select-body .controlIcon {\r\n    background-size: 26px;\r\n    width: 26px;\r\n    height: 26px;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    margin-right: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/form-editor-package/views/tabs/form-designer/panels/form-control-tree/control-tree-panel/control-tree-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<ng2tree [nodes]=\"treeNodes\" [focused]=\"true\" [options]=\"treeConfig\" (onRightMenuClicked)=\"onRightMenuClicked($event)\"\r\n    (onFocus)=\"focusFormControl($event)\"></ng2tree>\r\n\r\n\r\n<ng-template #addControlModal>\r\n    <div class=\"control-select-body  d-flex flex-column h-100\">\r\n        <div class=\"position-relative\">\r\n            <input class=\"form-control mb-2\" autocomplete=\"off\" [(ngModel)]=\"searchName\" (ngModelChange)=\"searchControl()\">\r\n            <i class=\"fa fa-search\"></i>\r\n        </div>\r\n        <perfect-scrollbar>\r\n            <div class=\"border p-2\">\r\n                <div *ngFor=\"let category of controlList\">\r\n                    <div *ngFor=\"let control of  category.items\" class=\"controlItem\" (click)=\"addControl(control.type)\">\r\n                        <div class=\"controlIcon\" [ngClass]=\"control.type\"></div>\r\n                        {{control.name}}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </perfect-scrollbar>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/packages/form-editor-package/views/tabs/form-designer/panels/form-control-tree/control-tree-panel/control-tree-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlTreePanelComponent", function() { return ControlTreePanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit_components_ng2tree_common__ = __webpack_require__("./node_modules/@farris/ide-devkit/components/ng2tree-common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit_components_ng2tree_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit_components_ng2tree_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_ui__ = __webpack_require__("./node_modules/@farris/ui/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__farris_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entity_entity__ = __webpack_require__("./src/packages/form-editor-package/entity/entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_form_service__ = __webpack_require__("./src/packages/form-editor-package/service/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_control_tree_service__ = __webpack_require__("./src/packages/form-editor-package/service/control-tree.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_control_service__ = __webpack_require__("./src/packages/form-editor-package/service/control.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ControlTreePanelComponent = (function () {
    function ControlTreePanelComponent(controlService, formService, controlTreeService, modalService) {
        this.controlService = controlService;
        this.formService = formService;
        this.controlTreeService = controlTreeService;
        this.modalService = modalService;
        this.treeNodes = []; // 树json数据
        this.treeConfig = {
            allowDrag: true,
            hasCustomContextMenu: true
        };
        this.controlList = []; // 可添加的控件列表
        this.searchName = ''; // 搜索控件内容
        this.refreshCodeEditor = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ControlTreePanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.controlTreeService.triggerTreeFocus.subscribe(function (elementId) {
            _this.treeComponent.searchAndLocationNodeById(elementId);
        });
    };
    ControlTreePanelComponent.prototype.ngOnChanges = function () {
        // 表单对象映射为树结构
        this.treeNodes = this.controlTreeService.mappingFormData2Tree(this.formData);
    };
    /**
     *  点击右键菜单项
     */
    ControlTreePanelComponent.prototype.onRightMenuClicked = function ($event) {
        var _this = this;
        var menuId = $event.rawEvent.menuId;
        if (menuId === 'deleteControl') {
            this.deleteControl($event.node);
        }
        else if (menuId === 'addControl') {
            this.searchName = '';
            this.controlService.getControlList(this.searchName).subscribe(function (data) {
                _this.controlList = data;
            });
            this.addParentNode = $event.node;
            this.controlModal = this.modalService.show(this.addControlModal, {
                title: '选择控件',
                width: 600,
                height: 400,
                showButtons: false
            });
        }
    };
    /**
     * 删除控件
     * @param node
     */
    ControlTreePanelComponent.prototype.deleteControl = function (node) {
        // 删除树节点
        this.controlTreeService.deleteNode(node);
        // 修改表单json结构
        this.formService.deleteControl(node.data);
    };
    /**
     * 新增控件
     * @param type 控件类型
     */
    ControlTreePanelComponent.prototype.addControl = function (type) {
        // 获取控件元数据
        var metadata = this.controlService.getControlMetaData(type);
        var dgMetadata = Object(__WEBPACK_IMPORTED_MODULE_7_lodash__["cloneDeep"])(metadata);
        dgMetadata['elementFocused'] = new __WEBPACK_IMPORTED_MODULE_8_rxjs__["Subject"]();
        // 修改表单json结构: rawElement是表单对象的引用，append方法会触发formData 同步修改
        this.formService.addControl(this.addParentNode.data.rawElement, dgMetadata);
        // 增加树节点
        this.controlTreeService.addNode(this.addParentNode, dgMetadata);
        this.controlModal.close();
    };
    /**
     * 点击树节点后focus表单控件
     * @param $event
     */
    ControlTreePanelComponent.prototype.focusFormControl = function ($event) {
        var rawElement = $event.node.rawElement;
        if (rawElement && rawElement.elementFocused) {
            rawElement.elementFocused.next();
            this.refreshCodeEditor.emit(rawElement);
        }
    };
    /**
     * 按名称搜索控件
     */
    ControlTreePanelComponent.prototype.searchControl = function () {
        var _this = this;
        this.controlService.getControlList(this.searchName).subscribe(function (data) {
            _this.controlList = data;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__entity_entity__["DesignElementCollection"])
    ], ControlTreePanelComponent.prototype, "formData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit_components_ng2tree_common__["TreeComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit_components_ng2tree_common__["TreeComponent"])
    ], ControlTreePanelComponent.prototype, "treeComponent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('addControlModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], ControlTreePanelComponent.prototype, "addControlModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ControlTreePanelComponent.prototype, "refreshCodeEditor", void 0);
    ControlTreePanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-control-tree-panel',
            template: __webpack_require__("./src/packages/form-editor-package/views/tabs/form-designer/panels/form-control-tree/control-tree-panel/control-tree-panel.component.html"),
            styles: [__webpack_require__("./src/packages/form-editor-package/views/tabs/form-designer/panels/form-control-tree/control-tree-panel/control-tree-panel.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_6__service_control_service__["ControlService"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__service_control_service__["ControlService"], __WEBPACK_IMPORTED_MODULE_4__service_form_service__["FormService"],
            __WEBPACK_IMPORTED_MODULE_5__service_control_tree_service__["ControlTreeService"], __WEBPACK_IMPORTED_MODULE_2__farris_ui__["BsModalService"]])
    ], ControlTreePanelComponent);
    return ControlTreePanelComponent;
}());



/***/ }),

/***/ "./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/command-designer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandDesignerModule", function() { return CommandDesignerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__command_editor_command_editor_component__ = __webpack_require__("./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/command-editor/command-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_editable_grid_module__ = __webpack_require__("./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/grid/editable-grid.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_router_task_router_designer_component__ = __webpack_require__("./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/task-router/task-router-designer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__task_flow_task_flow_component__ = __webpack_require__("./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/task-flow/task-flow.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__task_designer_task_designer_component__ = __webpack_require__("./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/task-designer/task-designer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_grid__ = __webpack_require__("./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__farris_ide_devkit__ = __webpack_require__("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__farris_ide_devkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__farris_ide_devkit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__progress_kendo_angular_layout__ = __webpack_require__("./node_modules/@progress/kendo-angular-layout/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__progress_kendo_angular_inputs__ = __webpack_require__("./node_modules/@progress/kendo-angular-inputs/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__progress_kendo_angular_treeview__ = __webpack_require__("./node_modules/@progress/kendo-angular-treeview/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__serializer__ = __webpack_require__("./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/serializer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__container_easy_container_service__ = __webpack_require__("./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/container/easy-container.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__command_designer_command_designer_component__ = __webpack_require__("./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/command-designer/command-designer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__property_panel_command_property_component__ = __webpack_require__("./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/property-panel/command-property.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__property_panel_task_property_component__ = __webpack_require__("./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/property-panel/task-property.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__command_editor_command_editor_helper__ = __webpack_require__("./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/command-editor/command-editor.helper.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











// import { TreeTableModule } from '@farris/ui';








var CommandDesignerModule = (function () {
    function CommandDesignerModule() {
    }
    CommandDesignerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_11__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_15__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_grid__["GridModule"],
                __WEBPACK_IMPORTED_MODULE_7__farris_ide_devkit__["NgbTabsetModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8__progress_kendo_angular_layout__["LayoutModule"],
                __WEBPACK_IMPORTED_MODULE_8__progress_kendo_angular_layout__["PanelBarModule"],
                __WEBPACK_IMPORTED_MODULE_9__progress_kendo_angular_inputs__["InputsModule"],
                __WEBPACK_IMPORTED_MODULE_10__progress_kendo_angular_treeview__["TreeViewModule"],
                // TreeTableModule,
                __WEBPACK_IMPORTED_MODULE_7__farris_ide_devkit__["TreeModule"],
                __WEBPACK_IMPORTED_MODULE_1__grid_editable_grid_module__["EditableGridModule"].forRoot()
            ],
            declarations: [
                // CommandListComponent,
                __WEBPACK_IMPORTED_MODULE_14__command_designer_command_designer_component__["CommandDesignerComponent"],
                __WEBPACK_IMPORTED_MODULE_3__task_flow_task_flow_component__["TaskFlowComponent"],
                __WEBPACK_IMPORTED_MODULE_4__task_designer_task_designer_component__["TaskDesignerComponent"],
                __WEBPACK_IMPORTED_MODULE_2__task_router_task_router_designer_component__["TaskRouterDesignerComponent"],
                // CommandComponent,
                __WEBPACK_IMPORTED_MODULE_0__command_editor_command_editor_component__["CommandEditorComponent"],
                __WEBPACK_IMPORTED_MODULE_16__property_panel_command_property_component__["CommandPropertyComponent"],
                __WEBPACK_IMPORTED_MODULE_17__property_panel_task_property_component__["TaskPropertyComponent"]
            ],
            exports: [
                /*CommandListComponent, */ __WEBPACK_IMPORTED_MODULE_14__command_designer_command_designer_component__["CommandDesignerComponent"], __WEBPACK_IMPORTED_MODULE_3__task_flow_task_flow_component__["TaskFlowComponent"], __WEBPACK_IMPORTED_MODULE_4__task_designer_task_designer_component__["TaskDesignerComponent"],
                __WEBPACK_IMPORTED_MODULE_2__task_router_task_router_designer_component__["TaskRouterDesignerComponent"], /*CommandComponent,*/ __WEBPACK_IMPORTED_MODULE_0__command_editor_command_editor_component__["CommandEditorComponent"], __WEBPACK_IMPORTED_MODULE_16__property_panel_command_property_component__["CommandPropertyComponent"], __WEBPACK_IMPORTED_MODULE_17__property_panel_task_property_component__["TaskPropertyComponent"]
            ],
            providers: [
                // CommandManager,
                __WEBPACK_IMPORTED_MODULE_12__serializer__["Serializer"],
                __WEBPACK_IMPORTED_MODULE_13__container_easy_container_service__["EasyContainerService"],
                __WEBPACK_IMPORTED_MODULE_18__command_editor_command_editor_helper__["CommandEditorHelper"]
            ],
            entryComponents: []
        })
    ], CommandDesignerModule);
    return CommandDesignerModule;
}());



/***/ }),

/***/ "./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/command-designer/command-designer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".command-info {\r\n  padding: 3px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/command-designer/command-designer.component.html":
/***/ (function(module, exports) {

module.exports = "<ngb-tabset>\r\n  <ngb-tab title=\"基础信息\">\r\n    <!-- 基础信息页面内容 -->\r\n    <ng-template ngbTabContent>\r\n      <div class=\"command-info\">\r\n        <!-- 编号名称 -->\r\n        <!-- <table> -->\r\n        <!-- <tbody> -->\r\n        <!-- <tr> -->\r\n        <!-- <td style=\"display: flex\"> -->\r\n        <!-- <kendo-textbox-container floatingLabel=\"编号\"> -->\r\n        <!-- <input kendoTextBox /> -->\r\n        <!-- </kendo-textbox-container> -->\r\n        <!-- </td> -->\r\n        <!-- <td> -->\r\n        <!-- <kendo-textbox-container floatingLabel=\"名称\"> -->\r\n        <!-- <input kendoTextBox [(ngModel)]=\"content.name\" /> -->\r\n        <!-- </kendo-textbox-container> -->\r\n        <!-- </td> -->\r\n        <!-- </tr> -->\r\n        <!-- <tr> -->\r\n        <!-- <td colspan=\"2\"> -->\r\n        <!-- <kendo-textbox-container floatingLabel=\"描述信息\"> -->\r\n        <!-- <input kendoTextBox [(ngModel)]=\"content.description\" /> -->\r\n        <!-- </kendo-textbox-container> -->\r\n        <!-- </td> -->\r\n        <!-- </tr> -->\r\n        <!-- </tbody> -->\r\n        <!-- </table> -->\r\n\r\n        <div>\r\n          <div>\r\n            <label>名称</label>\r\n          </div>\r\n          <input kendoTextBox class=\"form-control\" [(ngModel)]=\"content.name\" />\r\n          <div>\r\n            <label>描述信息</label>\r\n          </div>\r\n          <input kendoTextBox class=\"form-control\" [(ngModel)]=\"content.description\" />\r\n        </div>\r\n\r\n        <!-- 参数定义 -->\r\n        <div style=\"padding-top: 20px\">\r\n          <!-- <div> -->\r\n          <!-- <button (click)=\"addParam()\" style=\"float: right\">增加参数</button> -->\r\n          <!-- <button (click)=\"removeParam()\" style=\"float: right\">删除参数</button> -->\r\n          <!-- </div> -->\r\n          <!-- <div> -->\r\n          <!-- <kendo-grid [kendoGridBinding]=\"content.params\"> -->\r\n          <!-- <kendo-grid-column *ngFor=\"let column of paramColumns\" field=\"{{column.field}}\" title=\"{{column.title}}\" filter=\"{{column.type}}\"></kendo-grid-column> -->\r\n          <!-- <kendo-grid-column [width]=\"50\"> -->\r\n          <!-- <ng-template kendoGridCellTemplate let-dataItem> -->\r\n          <!-- <div (click)=\"editCommand(dataItem)\" style=\"cursor:hand\"> -->\r\n          <!-- <embed src=\"../../../assets/icons/edit.svg\" width=\"30\" height=\"30\" type=\"image/svg+xml\" (click)=\"editCommand(dataItem)\" style=\"cursor:hand\" -->\r\n          <!-- /> -->\r\n          <!-- </div> -->\r\n          <!-- </ng-template> -->\r\n          <!-- </kendo-grid-column> -->\r\n          <!-- </kendo-grid> -->\r\n          <!-- </div> -->\r\n\r\n          <app-editable-grid [data]=\"content.paramDesc\" [columns]=\"paramColumns\" [dealRow]=\"true\"></app-editable-grid>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n  </ngb-tab>\r\n  <ngb-tab title=\"流程设计\">\r\n    <!-- 流程图内容 -->\r\n    <ng-template ngbTabContent>\r\n\r\n      <div>\r\n        <app-task-flow [tasks]=\"content.tasks\" (taskNodeSelected)=\"handleTaskSelection($event)\" (taskNodeBlur)=\"handleTaskUnselect()\"></app-task-flow>\r\n      </div>\r\n      <div>\r\n        <button (click)=\"edit()\">编辑任务</button>\r\n      </div>\r\n      <div>\r\n        <button (click)=\"addTask(false)\">任务前新增</button>\r\n      </div>\r\n      <div>\r\n        <button (click)=\"addTaskAfter()\">任务后新增</button>\r\n      </div>\r\n      <div>\r\n        <button (click)=\"replace()\">替换任务</button>\r\n      </div>\r\n      <div>\r\n        <button (click)=\"removeTask()\">删除任务</button>\r\n      </div>\r\n    </ng-template>\r\n  </ngb-tab>\r\n</ngb-tabset>\r\n<!-- <div class=\"form-footer\"> -->\r\n  <!-- <button (click)=\"clickOk()\">确定</button> -->\r\n  <!-- <button (click)=\"clickCancel()\">取消</button> -->\r\n<!-- </div> -->\r\n"

/***/ }),

/***/ "./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/command-designer/command-designer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandDesignerComponent", function() { return CommandDesignerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__container_easy_container_service__ = __webpack_require__("./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/container/easy-container.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entity_command_object__ = __webpack_require__("./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/entity/command-object.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommandDesignerComponent = (function () {
    function CommandDesignerComponent(easyContainer) {
        this.easyContainer = easyContainer;
        this.params = [];
        this.paramColumns = [
            {
                field: 'name',
                title: '参数名称',
                type: 'text'
            }, {
                field: 'type',
                title: '参数类型',
                type: 'text'
            }, {
                field: 'required',
                title: '必填',
                type: 'boolean'
            }, {
                field: 'description',
                title: '说明',
                type: 'text'
            }
        ];
    }
    CommandDesignerComponent.prototype.clickOk = function () {
        //
    };
    CommandDesignerComponent.prototype.clickCancel = function () {
        //
    };
    CommandDesignerComponent.prototype.handleTaskSelection = function (_a) {
        var dataItem = _a.dataItem;
        // console.log(dataItem.name);
        this._selectedTask = dataItem;
    };
    CommandDesignerComponent.prototype.handleTaskUnselect = function () {
        // console.log('blur');
        // this._lastSelectedTask = this._selectedTask;
        // this._selectedTask = void 0;
    };
    CommandDesignerComponent.prototype.addParam = function () {
        this.content.paramDesc.push({ name: '', value: '', description: '' });
    };
    CommandDesignerComponent.prototype.removeParam = function () {
    };
    CommandDesignerComponent.prototype.addTaskAfter = function () {
        var currentNodeIndex = this.getCurrentTaskIndex();
        // this.content.tasks.splice(currentNodeIndex + 1, 0, { name: 'newTask' });
        var tasks = this.content.tasks;
        for (var i = tasks.length - 1; i > currentNodeIndex; i--) {
            tasks[i + 1] = tasks[i];
        }
        setTimeout(function () {
            tasks[currentNodeIndex + 1] = new __WEBPACK_IMPORTED_MODULE_2__entity_command_object__["Task"]();
        });
        setTimeout(function () {
            // tasks[currentNodeIndex + 1] = { name: 'newTask' };
        });
    };
    CommandDesignerComponent.prototype.addTaskBefore = function () {
        var currentNodeIndex = this.getCurrentTaskIndex();
        if (currentNodeIndex < 0) {
            currentNodeIndex = 0;
        }
        // this.content.tasks.splice(currentNodeIndex + 1, 0, { name: 'newTask' });
        var tasks = this.content.tasks;
        for (var i = tasks.length - 1; i >= currentNodeIndex; i--) {
            tasks[i + 1] = tasks[i];
        }
        setTimeout(function () {
            tasks[currentNodeIndex] = new __WEBPACK_IMPORTED_MODULE_2__entity_command_object__["Task"]();
        });
        setTimeout(function () {
            // tasks[currentNodeIndex] = { name: 'newTask' };
        });
    };
    CommandDesignerComponent.prototype.removeTask = function () {
        // todo: 删除任务节点  confirm first?
        var position = this.getCurrentTaskIndex();
        this.content.tasks.splice(position, 1);
    };
    CommandDesignerComponent.prototype.edit = function () {
        var testTaskData = {
            code: 'loadData',
            name: '加载数据',
            service: 'DataService',
            method: 'loadData',
            params: [],
            extendable: ['before', 'after', 'replace']
        };
        if (!this._selectedTask) {
            console.error('没有选中任务节点，不能编辑');
            return;
        }
        // this._selectedTask = this._lastSelectedTask;
        this.easyContainer.show('task-designer', { title: '编辑任务', contentData: this._selectedTask });
        // this.easyContainer.observeEditing((data) => { console.log(data); });
    };
    CommandDesignerComponent.prototype.replace = function () {
        var _this = this;
        if (!this._selectedTask) {
            console.error('没有选中任务节点，不能替换');
            return;
        }
        var newTask = new __WEBPACK_IMPORTED_MODULE_2__entity_command_object__["Task"]();
        this.easyContainer.show('task-designer', { title: '编辑任务', contentData: newTask }, function (data) { return _this._taskReplacedCallback(data); });
    };
    CommandDesignerComponent.prototype.addTask = function (addAfter) {
        var _this = this;
        if (!this._selectedTask) {
            console.error('没有选中任务节点，不能新增');
            return;
        }
        var newTask = new __WEBPACK_IMPORTED_MODULE_2__entity_command_object__["Task"]();
        this.easyContainer.show('task-designer', { title: '编辑任务', contentData: newTask }, function (data) { return _this._taskAddedCallback(data, addAfter); });
    };
    CommandDesignerComponent.prototype._taskChangedCallback = function (data) {
        // console.log(data);
        Object.assign(this._selectedTask, data);
    };
    CommandDesignerComponent.prototype._taskReplacedCallback = function (data) {
        Object.assign(this._selectedTask, data);
    };
    CommandDesignerComponent.prototype._taskAddedCallback = function (data, addAfter) {
        var currentNodeIndex = this.getCurrentTaskIndex();
        var position = addAfter ? currentNodeIndex + 1 : currentNodeIndex < 0 ? 0 : currentNodeIndex;
        var tasks = this.content.tasks;
        for (var i = tasks.length - 1; i >= position; i--) {
            tasks[i + 1] = tasks[i];
        }
        tasks[position] = data;
    };
    // 暂时只支持获取第一层次的节点位置
    CommandDesignerComponent.prototype.getCurrentTaskIndex = function () {
        var _this = this;
        return this.content.tasks.findIndex(function (item) { return item === _this._selectedTask; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__entity_command_object__["CommandHandler"])
    ], CommandDesignerComponent.prototype, "content", void 0);
    CommandDesignerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-command-designer',
            template: __webpack_require__("./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/command-designer/command-designer.component.html"),
            styles: [__webpack_require__("./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/command-designer/command-designer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__container_easy_container_service__["EasyContainerService"]])
    ], CommandDesignerComponent);
    return CommandDesignerComponent;
}());



/***/ }),

/***/ "./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/command-editor/command-editor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".property-panel {\r\n  margin: 5px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/command-editor/command-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- 分三列 -->\r\n<kendo-splitter style=\"height: 100%;\">\r\n  <!-- left -->\r\n  <kendo-splitter-pane #left size=\"200px\" min=\"150px\" max=\"200px\">\r\n    <div class=\"pane-content\">\r\n      <kendo-panelbar [expandMode]=\"1\" [height]=\"left.element.nativeElement.clientHeight-3+'px'\">\r\n        <kendo-panelbar-item [title]=\"'服务'\" [expanded]=\"true\">\r\n          <ng-template kendoPanelBarContent>\r\n            <!-- <kendo-treeview -->\r\n            <!-- [nodes]=\"services\" -->\r\n            <!-- [textField]=\"'name'\" -->\r\n            <!-- kendoTreeViewHierarchyBinding -->\r\n            <!-- childrenField=\"methods\" -->\r\n            <!-- kendoTreeViewExpandable -->\r\n            <!-- kendoTreeViewSelectable -->\r\n            <!-- ></kendo-treeview> -->\r\n            <ng2tree [nodes]=\"services\" [focused]=\"true\" [options]=\"treeConfig\" (onDoubleClick)=\"serviceMethodDblClicked($event)\"></ng2tree>\r\n          </ng-template>\r\n        </kendo-panelbar-item>\r\n        <kendo-panelbar-item [title]=\"'内置命令'\">\r\n          <ng-template kendoPanelBarContent>玩命开发中...\r\n\r\n          </ng-template>\r\n        </kendo-panelbar-item>\r\n      </kendo-panelbar>\r\n    </div>\r\n  </kendo-splitter-pane>\r\n  <kendo-splitter-pane>\r\n    <kendo-splitter>\r\n      <!-- center -->\r\n      <kendo-splitter-pane min=\"300px\" size=\"40%\" [collapsible]=\"false\">\r\n        <div class=\"pane-content\">\r\n          <div *ngIf=\"!selectedTask\">\r\n            <button kendobutton (click)=\"addCommand()\">添加命令</button>\r\n            <button kendobutton (click)=\"removeCommand()\">删除命令</button>\r\n          </div>\r\n          <div *ngIf=\"selectedTask\">\r\n            <button kendobutton (click)=\"addTask()\">添加任务</button>\r\n            <button kendobutton (click)=\"removeTask()\">删除任务</button>\r\n          </div>\r\n          <kendo-panelbar (stateChange)=\"centerStateChange($event)\" [items]=\"items\" [selectable]=\"false\">\r\n            <!-- <kendo-panelbar-item *ngFor=\"let item of commands.commandList\" [title]=\"item.name\"> -->\r\n            <!-- <ng-template kendoPanelBarContent> -->\r\n            <!-- <div> -->\r\n            <!-- <app-task-flow [tasks]=\"item.handler.tasks\" (taskNodeSelected)=\"handleTaskSelection($event)\" (taskNodeBlur)=\"handleTaskUnselect($event)\"></app-task-flow> -->\r\n            <!-- </div> -->\r\n            <!-- </ng-template> -->\r\n            <!-- </kendo-panelbar-item> -->\r\n            <ng-template kendoPanelBarItemTemplate let-dataItem>\r\n              <div class=\"custom-template\">\r\n                <app-task-flow [tasks]=\"getTasks(dataItem)\" (taskNodeSelected)=\"handleTaskSelection($event, dataItem)\"\r\n                  (taskNodeBlur)=\"handleTaskUnselect($event)\"></app-task-flow>\r\n              </div>\r\n              <!-- <button (click)=\"click($event)\">aaa</button> -->\r\n            </ng-template>\r\n          </kendo-panelbar>\r\n        </div>\r\n      </kendo-splitter-pane>\r\n      <kendo-splitter-pane>\r\n        <!-- <div class=\"pane-content\"> -->\r\n        <!-- <button (click)=\"click()\">add</button> -->\r\n        <!-- </div> -->\r\n        <div *ngIf=\"selectedCommand\" class=\"property-panel\">\r\n          <app-command-property [command]=\"selectedCommand\"></app-command-property>\r\n        </div>\r\n        <div *ngIf=\"selectedTask\" class=\"property-panel\">\r\n          <app-task-property [task]=\"selectedTask\"></app-task-property>\r\n        </div>\r\n      </kendo-splitter-pane>\r\n    </kendo-splitter>\r\n  </kendo-splitter-pane>\r\n\r\n</kendo-splitter>\r\n"

/***/ }),

/***/ "./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/command-editor/command-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandEditorComponent", function() { return CommandEditorComponent; });
/* unused harmony export services */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__command_editor_helper__ = __webpack_require__("./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/command-editor/command-editor.helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entity_command_object__ = __webpack_require__("./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/entity/command-object.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_layout__ = __webpack_require__("./node_modules/@progress/kendo-angular-layout/dist/es/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommandEditorComponent = (function () {
    function CommandEditorComponent(editorHelper) {
        this.editorHelper = editorHelper;
        this.services = services;
        // for resizing
        this.panelHeight = 600;
        this.items = [];
        // this.commands = manager.getCommands();
    }
    /**
     * 从Command对象获取Handler
     * 暂时一个Command对应一个Handler，直接取数组中的第一个元素，后面可能会增加特殊处理
     */
    CommandEditorComponent.prototype.getHandler = function (command) {
        return command.handlers[0];
    };
    CommandEditorComponent.prototype.ngOnChanges = function (changes) {
        /* if (changes['co']) */
        // this.items = this.commands.
    };
    CommandEditorComponent.prototype.ngAfterViewInit = function () {
        this.panelHeight = this.left.element.nativeElement.clientHeight;
        if (this.commandData) {
            this.commands = new __WEBPACK_IMPORTED_MODULE_1__entity_command_object__["CommandList"](this.commandData);
            this.items = this.commands.commandList.map(function (item) { return ({ title: item.name, content: item }); });
        }
    };
    CommandEditorComponent.prototype.click = function (data) {
        console.log(data);
        this.items.push({ title: '3', content: '3' });
    };
    CommandEditorComponent.prototype.centerStateChange = function (data) {
        var focusedEvent = data.filter(function (item) { return item.focused === true; })[0];
        this.selectedCommand = focusedEvent.content;
        this.selectedTask = void 0;
        this._commandForSelectedTask = void 0;
    };
    CommandEditorComponent.prototype.serviceMethodDblClicked = function (data) {
        var task = new __WEBPACK_IMPORTED_MODULE_1__entity_command_object__["Task"]();
        console.log(data);
        task.name = data.node.data.name;
        this.editorHelper.addTask(task, this.getHandler(this.selectedCommand));
    };
    CommandEditorComponent.prototype.getTasks = function (dataItem) {
        var handler = this.getHandler(dataItem.content);
        // console.log(handler);
        if (!handler) {
            throw Error('没有找到对应的CommandHandler');
        }
        return handler.tasks;
    };
    CommandEditorComponent.prototype.handleTaskSelection = function (_a, barItemData) {
        var dataItem = _a.dataItem;
        console.log(barItemData);
        this.selectedTask = dataItem;
        this.selectedCommand = void 0;
        this._commandForSelectedTask = barItemData.content;
        // console.log(this.panelBarItems);
    };
    CommandEditorComponent.prototype.handleTaskUnselect = function (data) {
        // console.log('blur');
        // this._lastSelectedTask = this._selectedTask;
        if (this.selectedTask) {
            // this.selectedTask = void 0;
        }
    };
    CommandEditorComponent.prototype.addCommand = function () {
        //
    };
    CommandEditorComponent.prototype.removeCommand = function () {
        //
    };
    CommandEditorComponent.prototype.addTask = function () {
        //
    };
    CommandEditorComponent.prototype.removeTask = function () {
        //
    };
    /**
     * 保存command的修改
     * 把Command对象保存成JSON数据
     */
    CommandEditorComponent.prototype.save = function () {
        this.commands.toJson();
    };
    CommandEditorComponent.prototype._createHandlerName = function (commandName) {
        var firstLetter = commandName.substr(0, 1);
        var remainLetter = commandName.substr(1, commandName.length - 1);
        return firstLetter.toUpperCase() + remainLetter + 'Handler';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CommandEditorComponent.prototype, "commandData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])('left'),
        __metadata("design:type", Object)
    ], CommandEditorComponent.prototype, "left", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_layout__["PanelBarItemComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["QueryList"])
    ], CommandEditorComponent.prototype, "panelBarItems", void 0);
    CommandEditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-command-editor',
            template: __webpack_require__("./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/command-editor/command-editor.component.html"),
            styles: [__webpack_require__("./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/command-editor/command-editor.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__command_editor_helper__["CommandEditorHelper"]])
    ], CommandEditorComponent);
    return CommandEditorComponent;
}());

var services = [{
        id: 'SaleOrderListService',
        name: 'SaleOrderListService',
        children: [
            { id: 'load', name: 'load' },
            { id: 'remove', name: 'remove' },
            { name: 'route', id: 'route' },
            { name: 'search', id: 'search' }
        ]
    }];


/***/ }),

/***/ "./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/command-editor/command-editor.helper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandEditorHelper", function() { return CommandEditorHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CommandEditorHelper = (function () {
    function CommandEditorHelper() {
    }
    CommandEditorHelper.prototype.addTask = function (task, target) {
        target.tasks.unshift(task);
    };
    CommandEditorHelper = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], CommandEditorHelper);
    return CommandEditorHelper;
}());



/***/ }),

/***/ "./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/container/easy-container.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EasyContainerService", function() { return EasyContainerService; });
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
/**
 * 绘制一个容器，可以将指定的template内容放入，根据先后顺序，只显示最后一次放入的内容。
 * 内部记录放入的顺序，关闭最后一次放入的数据自动显示上一次的内容。
 * -----!
 */

// import { CommandListComponent } from '../command-list/command-list.component';
// import { CommandContainerComponent } from './command-container.component';
var EasyContainerService = (function () {
    ///////////////////
    function EasyContainerService(injector) {
        this.injector = injector;
        this._viewHistory = new Array();
        this._templates = new Map();
        this._valueEmitters = new Array();
        this.title = '';
        this._cfr = this.injector.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]);
        this._applicationRef = this.injector.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"]);
        // 构造时先创造出容器
        // const componentFactory = this._cfr.resolveComponentFactory(CommandContainerComponent);
        // this._componentRef = componentFactory.create(this.injector);
        // this._applicationRef.attachView(this._componentRef.hostView);
        // this._containerRef = (<CommandContainerComponent>this._componentRef.instance).container;
    }
    EasyContainerService.prototype.setContainer = function (container) {
        this._containerRef = container;
    };
    EasyContainerService.prototype.attachTemplate = function (template, name) {
        this._templates.set(name, template);
    };
    // 按钮方法
    EasyContainerService.prototype.clickOk = function () {
        if (this._currentComponent) {
            this._currentComponent.clickOk();
        }
    };
    EasyContainerService.prototype.clickCancel = function () {
        if (this._currentComponent) {
            this._currentComponent.clickCancel();
        }
    };
    EasyContainerService.prototype.show = function (name, data, callback) {
        var _this = this;
        this._checkContainerExist();
        // 显示新的视图
        var content = this._templates.get(name);
        if (!content) {
            console.warn('试图显示的模板名称没有添加到服务中。');
            return;
        }
        this._originData = data.contentData;
        // 深复制编辑的数据
        // this._contentData = this._originData ? JSON.parse(JSON.stringify(this._originData)) : undefined;
        var clone = new this._originData.constructor();
        this._contentData = Object.assign(clone, this._originData);
        switch (name) {
            case 'command-list':
                this.commandListContent = this._contentData;
                break;
            case 'command-designer':
                this.commandDesignerContent = this._contentData;
                break;
            case 'task-designer':
                this.taskDesignerContent = this._contentData;
                break;
            default:
                break;
        }
        this._valueChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._subscriptions = new Array();
        if (callback) {
            this._subscriptions.push(this._valueChanged.subscribe(callback));
        }
        setTimeout(function () {
            // 如果有正在显示的视图，需要先隐藏
            if (_this._viewHistory && _this._viewHistory.length) {
                _this._containerRef.detach();
                _this._currentComponent = void 0;
            }
            var activated = _this._containerRef.createEmbeddedView(content);
            _this._currentComponent = activated.rootNodes[0];
            _this.title = data.title;
            _this._viewHistory.push({
                name: name,
                contentData: _this._contentData,
                originData: _this._originData,
                emitter: _this._valueChanged,
                subscriptions: _this._subscriptions
            });
            // this._componentRef.changeDetectorRef.markForCheck();
        });
    };
    EasyContainerService.prototype.showPrevious = function () {
        if (this._viewHistory.length === 1) {
            console.error('历史记录为空，无法显示上一界面。');
            console.log('==============输出结果==============');
            return;
        }
        // 历史记录里清除上次记录
        var removed = this._viewHistory.pop();
        // 释放subscription
        for (var _i = 0, _a = removed.subscriptions; _i < _a.length; _i++) {
            var subscription = _a[_i];
            subscription.unsubscribe();
        }
        removed.emitter = null;
        var previous = this._viewHistory[this._viewHistory.length - 1];
        this._contentData = previous.contentData;
        this._originData = previous.originData;
        this._valueChanged = previous.emitter;
        this._innerShow(previous.name, false);
    };
    EasyContainerService.prototype.confirmToPrevious = function () {
        // Object.assign(this._editingData, )
        var data = this._contentData;
        this._valueChanged.emit(data);
        Object.assign(this._originData, this._contentData);
        this.showPrevious();
    };
    EasyContainerService.prototype.observeEditing = function (callback) {
        var subscription = this._valueChanged.subscribe(function (data) {
            callback(data);
            subscription.unsubscribe();
        });
        this._viewHistory[this._viewHistory.length - 1].subscriptions.push(subscription);
    };
    /**
     * 展示一个界面
     * name: 需要打开的界面的名称
     * isNew：表示是否是新打开一个界面，还是回退到之前的界面。
     */
    EasyContainerService.prototype._innerShow = function (name, isNew) {
        var _this = this;
        this._checkContainerExist();
        // 显示新的视图
        var content = this._templates.get(name);
        if (!content) {
            console.warn('试图显示的模板名称没有添加到服务中。');
            return;
        }
        setTimeout(function () {
            // 如果有正在显示的界面需要先隐藏
            if (_this._viewHistory && _this._viewHistory.length) {
                _this._containerRef.detach();
            }
            var activated = _this._containerRef.createEmbeddedView(content);
            // this._containerRef.insert()
            // this.title = title;
            if (isNew) {
                _this._viewHistory.push({
                    name: name,
                    contentData: _this._contentData,
                    emitter: _this._valueChanged,
                    subscriptions: new Array()
                });
            }
            // this._componentRef.changeDetectorRef.markForCheck();
        });
    };
    // private _getContentViewRef(content: TemplateRef<any>): ViewRef {
    //   const viewRef = content.createEmbeddedView({});
    //   this._applicationRef.attachView(viewRef);
    //   return viewRef;
    // }
    EasyContainerService.prototype._checkContainerExist = function () {
        if (!this._containerRef) {
            throw Error('CommandContainer没有完成初始化，无法完成show方法。');
        }
    };
    EasyContainerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], EasyContainerService);
    return EasyContainerService;
}());



/***/ }),

/***/ "./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/entity/command-object.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Service */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandHandler", function() { return CommandHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Command", function() { return Command; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandList", function() { return CommandList; });
// export class Method {
//   name: string;
//   paramsDesc: Array<{name: string, value: string, description: string}>;
//   constructor() {
//     this.name = name;
//   }
// }
var Service = (function () {
    function Service(serviceJson) {
        this.methods = new Map();
        if (!serviceJson) {
            this.name = '';
            this.alias = '';
            this.path = '';
            return;
        }
        this.name = serviceJson.name;
        this.alias = serviceJson.alias;
        this.path = serviceJson.path;
    }
    Service.prototype.toJson = function () {
        return {
            'name': this.name,
            'alias': this.alias,
            'path': this.path
        };
    };
    return Service;
}());

var Task = (function () {
    function Task(jsonObj, services) {
        if (!jsonObj || !services) {
            this.name = '';
            this.method = '';
            this.service = new Service();
            this.servicePath = '';
            this.params = [];
            return;
        }
        this.name = jsonObj.name;
        this.method = jsonObj.methodName;
        this.params = new Array();
        for (var _i = 0, _a = jsonObj.params; _i < _a.length; _i++) {
            var param = _a[_i];
            this.params.push(Object.assign({}, param));
        }
        this.service = services.get(jsonObj.service);
        // if (this.service.getMethod()) // todo: 从构件获取服务名方法名，建立method对象。
    }
    // static parse(jsonObj: any): Task {
    //   const task = new Task();
    //   task.name = jsonObj.name;
    //   task.method = jsonObj.methodName;
    //   task.service = jsonObj.serviceName;
    //   task.params = new Array<any>();
    //   for (const param of jsonObj.params) {
    //     task.params.push(param);
    //   }
    //   return task;
    // }
    Task.prototype.toJson = function () {
        var taskJson = {
            'name': this.name,
            'serviceName': this.service,
            'methodName': this.method,
            'params': []
        };
        for (var _i = 0, _a = this.params; _i < _a.length; _i++) {
            var param = _a[_i];
            taskJson.params.push(param);
        }
        return taskJson;
    };
    return Task;
}());

var CommandHandler = (function () {
    function CommandHandler(handlerJsonObj, _services) {
        this._services = _services;
        this.name = handlerJsonObj.name;
        this.commandName = handlerJsonObj.commandName;
        this.tasks = new Array();
        for (var _i = 0, _a = handlerJsonObj.tasks; _i < _a.length; _i++) {
            var taskJsonObj = _a[_i];
            var task = new Task(taskJsonObj, _services);
            this.tasks.push(task);
        }
        this.paramDesc = new Array();
        if (!handlerJsonObj.paramsDesc) {
            return;
        }
        for (var _b = 0, _c = handlerJsonObj.paramsDesc; _b < _c.length; _b++) {
            var paramDesc = _c[_b];
            this.paramDesc.push(Object.assign({}, paramDesc));
        }
    }
    CommandHandler.prototype.toJson = function () {
        // name / command
        var commandJson = {
            'name': this.name,
            'commandName': this.commandName,
            'services': [],
            'tasks': []
        };
        var _loop_1 = function (task) {
            commandJson.tasks.push(task.toJson());
            if (!commandJson.services.find(function (item) { return item.name === task.service && item.path === task.servicePath; })) {
                commandJson.services.push({ name: task.service, path: task.servicePath });
            }
        };
        // task & service summary
        for (var _i = 0, _a = this.tasks; _i < _a.length; _i++) {
            var task = _a[_i];
            _loop_1(task);
        }
        return commandJson;
    };
    CommandHandler.prototype.clone = function () {
        var jsonObj = this.toJson();
        var handler = new CommandHandler(jsonObj, this._services);
        return handler;
    };
    return CommandHandler;
}());

var Command = (function () {
    function Command(jsonObj, handlers) {
        this.name = jsonObj.name;
        // command.commandHandler = jsonObj.commandHandler;
        this.params = new Array();
        if (jsonObj.params) {
            for (var _i = 0, _a = jsonObj.params; _i < _a.length; _i++) {
                var param = _a[_i];
                this.params.push(Object.assign({}, param));
            }
        }
        this.handlers = new Array();
        for (var _b = 0, _c = jsonObj.commandHandlers; _b < _c.length; _b++) {
            var handlerJsonObj = _c[_b];
            this.handlers.push(handlers.get(handlerJsonObj.name));
        }
    }
    Command.prototype.toJson = function () {
        var commandJson = {
            'name': this.name,
            'commandHandlers': [this.handlers[0].name],
            'params': []
        };
        for (var _i = 0, _a = this.params; _i < _a.length; _i++) {
            var param = _a[_i];
            commandJson.params.push(Object.assign({}, param));
        }
    };
    return Command;
}());

// export class CommandHandlers {
//   private _handlers = new Map<string, CommandHandler>();
//   constructor(jsonObj: any) {
//     this.name = jsonObj.name;
//     this.
//   }
//   toJson(): any {
//     const commandSummaryJson = {'commandHandlers': [], 'commandDescriptions': []};
//     for (const handler of this.getHandlerList()) {
//       commandSummaryJson.commandHandlers.push(handler.toJson());
//       // description
//       const commandDescJson = {
//         'commandHandler': handler.name,
//         'parmas': []
//       };
//       for (const param of handler.paramDesc) {
//         commandDescJson.parmas.push(param);
//       }
//     }
//     return commandSummaryJson;
//   }
//   addHandler(handler: CommandHandler) {
//     if (!this._handlers.has(handler.name)) {
//       this._handlers.set(handler.name, handler);
//     }
//   }
//   getHandlerList(): Array<CommandHandler> {
//     const handlerList = new Array<CommandHandler>();
//     this._handlers.forEach((item) => handlerList.push(item));
//     return handlerList;
//   }
//   get(name: string): CommandHandler {
//     return this._handlers.get(name);
//   }
//   get handlerList() {
//     return this.getHandlerList();
//   }
// }
var CommandList = (function () {
    function CommandList(jsonObj) {
        this._services = new Map();
        this._commandList = new Array();
        this._handlerList = new Map();
        this._parse(jsonObj);
    }
    CommandList.prototype.toJson = function () {
        var serviceListJson = [];
        this._services.forEach(function (item) { return serviceListJson.push(item.toJson()); });
        var handlersJson = [];
        this._handlerList.forEach(function (item) { return handlersJson.push(item.toJson()); });
        var commandsJson = [];
        this._commandList.forEach(function (item) { return commandsJson.push(item.toJson()); });
        return {
            'serviceList': serviceListJson,
            'commandHandlers': handlersJson,
            'commands': commandsJson
        };
    };
    CommandList.prototype._parse = function (jsonObj) {
        if (!jsonObj.commandHandlers || !jsonObj.commands) {
            console.error('命令对象信息不完整，无法解析。');
            return null;
        }
        for (var _i = 0, _a = jsonObj.serviceList; _i < _a.length; _i++) {
            var serviceJson = _a[_i];
            this._services.set(serviceJson.alias, new Service(serviceJson));
        }
        for (var _b = 0, _c = jsonObj.commandHandlers; _b < _c.length; _b++) {
            var handlerJson = _c[_b];
            this._handlerList.set(handlerJson.commandName, new CommandHandler(handlerJson, this._services));
        }
        for (var _d = 0, _e = jsonObj.commands; _d < _e.length; _d++) {
            var commandJson = _e[_d];
            var command = new Command(commandJson, this._handlerList);
            this.commandList.push(command);
        }
    };
    CommandList.prototype.addCommand = function (command) {
        this._commandList.push(command);
        for (var _i = 0, _a = command.handlers; _i < _a.length; _i++) {
            var handler = _a[_i];
            if (!this._handlerList.get(handler.name)) {
                this._handlerList.set(handler.name, handler);
            }
        }
    };
    Object.defineProperty(CommandList.prototype, "commandList", {
        get: function () {
            return this._commandList;
        },
        enumerable: true,
        configurable: true
    });
    CommandList.prototype.createCommandFromHandler = function (name, handler) {
        var newHandler = handler.clone();
        newHandler.name = this._generateHandlerName(handler.name);
        this._handlerList.set(newHandler.name, newHandler);
        var commandJson = {
            'name': name,
            'commandHandlers': [newHandler.name],
            'params': []
        };
        var command = new Command(commandJson, this._handlerList);
        return command;
    };
    CommandList.prototype._generateHandlerName = function (name) {
        name = this._getHandlerOriginName(name);
        var i = 1;
        var newName = '';
        while (true) {
            newName = name + i;
            if (!this._handlerList.get(newName)) {
                break;
            }
            ++i;
        }
        return newName;
    };
    CommandList.prototype._getHandlerOriginName = function (name) {
        if (this._handlerList.get(name)) {
            // 已使用，先找出原始名
            if (name.length <= 1) {
                throw Error('生成Handler名称出错，名称长度不大于1且在Handler列表中已存在。');
            }
            name = name.slice(0, name.length - 2);
            // 如果序号增长到两位数字，需要递归调用一次，直到出错或者是没有被使用的原始handler名称。
            return this._getHandlerOriginName(name);
        }
        return name;
    };
    return CommandList;
}());



/***/ }),

/***/ "./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/grid/edit.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditService", function() { return EditService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
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



var itemIndex = function (item, data) {
    for (var idx = 0; idx < data.length; idx++) {
        if (data[idx].ProductID === item.ProductID) {
            return idx;
        }
    }
    return -1;
};
var cloneData = function (data) { return data.map(function (item) { return Object.assign({}, item); }); };
var EditService = (function (_super) {
    __extends(EditService, _super);
    function EditService() {
        var _this = _super.call(this, []) || this;
        _this.data = [];
        _this.originalData = [];
        _this.createdItems = [];
        _this.updatedItems = [];
        _this.deletedItems = [];
        return _this;
    }
    EditService.prototype.read = function (data) {
        if (this.data.length && this.data === data) {
            return _super.prototype.next.call(this, this.data);
        }
        // this.fetch()
        //   .subscribe(data => {
        this.data = data;
        this.originalData = cloneData(data);
        _super.prototype.next.call(this, data);
        // });
    };
    EditService.prototype.create = function (item) {
        this.createdItems.push(item);
        this.data.push(item);
        _super.prototype.next.call(this, this.data);
    };
    EditService.prototype.addRow = function () {
        console.log('addRow');
    };
    EditService.prototype.update = function (item) {
        if (!this.isNew(item)) {
            var index = itemIndex(item, this.updatedItems);
            if (index !== -1) {
                this.updatedItems.splice(index, 1, item);
            }
            else {
                this.updatedItems.push(item);
            }
        }
        else {
            var index = this.createdItems.indexOf(item);
            this.createdItems.splice(index, 1, item);
        }
    };
    EditService.prototype.remove = function (item) {
        var index = itemIndex(item, this.data);
        this.data.splice(index, 1);
        index = itemIndex(item, this.createdItems);
        if (index >= 0) {
            this.createdItems.splice(index, 1);
        }
        else {
            this.deletedItems.push(item);
        }
        index = itemIndex(item, this.updatedItems);
        if (index >= 0) {
            this.updatedItems.splice(index, 1);
        }
        _super.prototype.next.call(this, this.data);
    };
    EditService.prototype.isNew = function (item) {
        return this.createdItems.indexOf(item) >= 0;
    };
    EditService.prototype.hasChanges = function () {
        return Boolean(this.deletedItems.length || this.updatedItems.length || this.createdItems.length);
    };
    EditService.prototype.saveChanges = function () {
        if (!this.hasChanges()) {
            return;
        }
        // const completed = [];
        // if (this.deletedItems.length) {
        //   completed.push(this.fetch(REMOVE_ACTION, this.deletedItems));
        // }
        // if (this.updatedItems.length) {
        //   completed.push(this.fetch(UPDATE_ACTION, this.updatedItems));
        // }
        // if (this.createdItems.length) {
        //   completed.push(this.fetch(CREATE_ACTION, this.createdItems));
        // }
        // this.reset();
        // zip(...completed).subscribe(() => this.read());
        // todo: 实现保存数据
        var data = this.data;
        this.reset();
        this.data = data;
        this.originalData = cloneData(data);
        return Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_observable_of__["of"])(cloneData(data));
    };
    EditService.prototype.cancelChanges = function () {
        this.reset();
        this.data = this.originalData;
        this.originalData = cloneData(this.originalData);
        _super.prototype.next.call(this, this.data);
    };
    EditService.prototype.assignValues = function (target, source) {
        Object.assign(target, source);
    };
    EditService.prototype.reset = function () {
        this.data = [];
        this.deletedItems = [];
        this.updatedItems = [];
        this.createdItems = [];
    };
    EditService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], EditService);
    return EditService;
}(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]));



/***/ }),

/***/ "./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/grid/editable-grid.component.html":
/***/ (function(module, exports) {

module.exports = "<kendo-grid #grid [data]=\"view | async\" (dataStateChange)=\"onStateChange($event)\" (cellClick)=\"cellClickHandler($event)\"\r\n  (cellClose)=\"cellCloseHandler($event)\" (cancel)=\"cancelHandler($event)\" (save)=\"saveHandler($event)\" (remove)=\"removeHandler($event)\"\r\n  (add)=\"addHandler($event)\" [navigable]=\"true\">\r\n  <ng-template kendoGridToolbarTemplate *ngIf=\"dealRow\">\r\n    <button kendoGridAddCommand>新增</button>\r\n    <!-- <button class='k-button' [disabled]=\"!editService.hasChanges()\" (click)=\"saveChanges(grid);\">Save Changes</button> -->\r\n    <!-- <button class='k-button' [disabled]=\"!editService.hasChanges()\" (click)=\"cancelChanges(grid);\">Cancel Changes</button> -->\r\n  </ng-template>\r\n\r\n  <div *ngFor=\"let column of columns\">\r\n    <kendo-grid-column field=\"{{column.field}}\" [title]=\"column.title\" [editor]=\"column.type\"></kendo-grid-column>\r\n  </div>\r\n  <kendo-grid-command-column title=\"command\" width=\"50\" *ngIf=\"dealRow\">\r\n    <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\r\n      <button kendoGridRemoveCommand>删除</button>\r\n      <button kendoGridSaveCommand>保存</button>\r\n      <button kendoGridCancelCommand>取消</button>\r\n    </ng-template>\r\n  </kendo-grid-command-column>\r\n</kendo-grid>\r\n"

/***/ }),

/***/ "./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/grid/editable-grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditableGridComponent", function() { return EditableGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_service__ = __webpack_require__("./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/grid/edit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_kendo_data_query__ = __webpack_require__("./node_modules/@progress/kendo-data-query/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__ = __webpack_require__("./node_modules/rxjs/operators/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { EditService } from '@progress/kendo-angular-grid/dist/es2015/editing/edit.service';
var EditableGridComponent = (function () {
    function EditableGridComponent(formBuilder, editService) {
        this.formBuilder = formBuilder;
        this.editService = editService;
        this.save = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.changes = {};
    }
    EditableGridComponent.prototype.ngOnInit = function () {
        this.view = this.editService.pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__["map"])(function (data) { return Object(__WEBPACK_IMPORTED_MODULE_3__progress_kendo_data_query__["process"])(data, {}); }));
        this.editService.read(this.data);
    };
    EditableGridComponent.prototype.ngOnChanges = function (changes) {
        if (changes['data']) {
            this.editService.read(this.data);
        }
    };
    // public onStateChange(state: State) {
    //     this.gridState = state;
    //     this.editService.read();
    // }
    EditableGridComponent.prototype.cellClickHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, columnIndex = _a.columnIndex, dataItem = _a.dataItem, isEdited = _a.isEdited;
        if (!isEdited) {
            sender.editCell(rowIndex, columnIndex, this.createFormGroup(dataItem));
        }
    };
    EditableGridComponent.prototype.cellCloseHandler = function (args) {
        var formGroup = args.formGroup, dataItem = args.dataItem;
        if (!formGroup.valid) {
            // prevent closing the edited cell if there are invalid values.
            args.preventDefault();
        }
        else if (formGroup.dirty) {
            this.editService.assignValues(dataItem, formGroup.value);
            this.editService.update(dataItem);
            this.saveChanges(args.sender);
        }
    };
    EditableGridComponent.prototype.addHandler = function (_a) {
        var sender = _a.sender;
        var formGroup = this.createFormGroup({});
        sender.addRow(formGroup);
    };
    EditableGridComponent.prototype.cancelHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex;
        sender.closeRow(rowIndex);
    };
    EditableGridComponent.prototype.saveHandler = function (_a) {
        var sender = _a.sender, formGroup = _a.formGroup, rowIndex = _a.rowIndex;
        if (formGroup.valid) {
            this.editService.create(formGroup.value);
            sender.closeRow(rowIndex);
            this.saveChanges(sender);
        }
    };
    EditableGridComponent.prototype.removeHandler = function (_a) {
        var sender = _a.sender, dataItem = _a.dataItem;
        this.editService.remove(dataItem);
        sender.cancelCell();
        this.saveChanges(sender);
    };
    EditableGridComponent.prototype.saveChanges = function (grid) {
        var _this = this;
        grid.closeCell();
        grid.cancelCell();
        this.editService.saveChanges().subscribe(function (data) { return _this.save.emit(data); });
    };
    EditableGridComponent.prototype.cancelChanges = function (grid) {
        grid.cancelCell();
        this.editService.cancelChanges();
    };
    EditableGridComponent.prototype.createFormGroup = function (dataItem) {
        // return this.formBuilder.group({
        //   'ProductID': dataItem.ProductID,
        //   'ProductName': [dataItem.ProductName, Validators.required],
        //   'UnitPrice': dataItem.UnitPrice,
        //   'UnitsInStock': [dataItem.UnitsInStock, Validators.compose([Validators.required, Validators.pattern('^[0-9]{1,3}')])],
        //   'Discontinued': dataItem.Discontinued
        // });
        var obj = {};
        for (var _i = 0, _a = this.columns; _i < _a.length; _i++) {
            var column = _a[_i];
            if (column.readonly) {
                continue;
            }
            obj[column.field] = dataItem[column.field];
        }
        return this.formBuilder.group(obj);
    };
    EditableGridComponent.prototype.inCellEditing = function () {
        var _this = this;
        return function (args) { return _this.createFormGroup(args); };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], EditableGridComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], EditableGridComponent.prototype, "columns", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], EditableGridComponent.prototype, "dealRow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], EditableGridComponent.prototype, "save", void 0);
    EditableGridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-editable-grid',
            template: __webpack_require__("./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/grid/editable-grid.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__edit_service__["EditService"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_2__edit_service__["EditService"]])
    ], EditableGridComponent);
    return EditableGridComponent;
}());



/***/ }),

/***/ "./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/grid/editable-grid.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditableGridModule", function() { return EditableGridModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editable_grid_component__ = __webpack_require__("./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/grid/editable-grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progress_kendo_angular_grid__ = __webpack_require__("./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { EditService } from '@progress/kendo-angular-grid/dist/es2015/editing/edit.service';



var EditableGridModule = (function () {
    function EditableGridModule() {
    }
    EditableGridModule_1 = EditableGridModule;
    EditableGridModule.forRoot = function () {
        return {
            ngModule: EditableGridModule_1,
            providers: []
        };
    };
    EditableGridModule = EditableGridModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__progress_kendo_angular_grid__["GridModule"], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["HttpClientModule"], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["HttpClientJsonpModule"]],
            declarations: [__WEBPACK_IMPORTED_MODULE_0__editable_grid_component__["EditableGridComponent"]],
            providers: [],
            exports: [__WEBPACK_IMPORTED_MODULE_0__editable_grid_component__["EditableGridComponent"]]
        })
    ], EditableGridModule);
    return EditableGridModule;
    var EditableGridModule_1;
}());



/***/ }),

/***/ "./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/property-panel/command-property.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".param-grid {\r\n  margin-top: 20px;\r\n}\r\n\r\n.input-kit {\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.input-kit label {\r\n  margin-bottom: 0.25rem;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/property-panel/command-property.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"input-kit\">\r\n  <label>名称</label>\r\n  <div><input kendoTextBox [(ngModel)]=\"command.name\"/></div>\r\n</div>\r\n<div class=\"input-kit\">\r\n  <label>说明</label>\r\n  <div><input kendoTextBox [(ngModel)]=\"command.description\"/></div>\r\n</div>\r\n<div class=\"param-grid\">\r\n  <app-editable-grid [data]=\"command.params\" [columns]=\"paramColumns\" [dealRow]=\"false\"></app-editable-grid>\r\n</div>"

/***/ }),

/***/ "./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/property-panel/command-property.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandPropertyComponent", function() { return CommandPropertyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entity_command_object__ = __webpack_require__("./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/entity/command-object.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommandPropertyComponent = (function () {
    function CommandPropertyComponent() {
        this.paramColumns = [
            {
                field: 'name',
                title: '参数名称',
                type: 'text',
                readonly: true
            }, {
                field: 'value',
                title: '参数值',
                type: 'text'
            }, {
                field: 'description',
                title: '说明',
                type: 'text',
                readonly: true
            }
        ];
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__entity_command_object__["Command"])
    ], CommandPropertyComponent.prototype, "command", void 0);
    CommandPropertyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-command-property',
            template: __webpack_require__("./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/property-panel/command-property.component.html"),
            styles: [__webpack_require__("./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/property-panel/command-property.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CommandPropertyComponent);
    return CommandPropertyComponent;
}());



/***/ }),

/***/ "./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/property-panel/task-property.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".param-grid {\r\n  margin-top: 20px;\r\n}\r\n\r\n.input-kit {\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.input-kit label {\r\n  margin-bottom: 0.25rem;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/property-panel/task-property.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"input-kit\">\r\n  <label>名称</label>\r\n  <div><input kendoTextBox [(ngModel)]=\"task.name\"/></div>\r\n</div>\r\n<div class=\"input-kit\">\r\n  <label>方法名称</label>\r\n  <div><input kendoTextBox [(ngModel)]=\"task.method\" /></div>\r\n  <!-- <div><input kendoTextBox [(ngModel)]=\"task.method\" disabled/></div> -->\r\n</div>\r\n<div class=\"input-kit\">\r\n  <label>服务名称</label>\r\n  <div><input kendoTextBox [(ngModel)]=\"task.service.name\" /></div>\r\n  <!-- <div><input kendoTextBox [(ngModel)]=\"task.service.name\" disabled/></div> -->\r\n</div>\r\n<div class=\"input-kit\">\r\n  <label>服务路径</label>\r\n  <div><input kendoTextBox [(ngModel)]=\"task.service.path\" /></div>\r\n  <!-- <div><input kendoTextBox [(ngModel)]=\"task.service.path\" disabled/></div> -->\r\n</div>\r\n<div class=\"param-grid\">\r\n  <app-editable-grid [data]=\"task.params\" [columns]=\"paramColumns\" [dealRow]=\"true\"></app-editable-grid>\r\n</div>\r\n"

/***/ }),

/***/ "./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/property-panel/task-property.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskPropertyComponent", function() { return TaskPropertyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entity_command_object__ = __webpack_require__("./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/entity/command-object.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskPropertyComponent = (function () {
    function TaskPropertyComponent() {
        this.paramColumns = [
            {
                field: 'name',
                title: '参数名称',
                type: 'text',
                readonly: false
            }, {
                field: 'value',
                title: '参数值',
                type: 'text'
            } /*, {
              field: 'description',
              title: '说明',
              type: 'text',
              readonly: true
            }*/
        ];
    }
    TaskPropertyComponent.prototype.ngOnChanges = function () {
        this.paramsData = { rows: this.task ? this.task.params : [] };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__entity_command_object__["Task"])
    ], TaskPropertyComponent.prototype, "task", void 0);
    TaskPropertyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-task-property',
            template: __webpack_require__("./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/property-panel/task-property.component.html"),
            styles: [__webpack_require__("./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/property-panel/task-property.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TaskPropertyComponent);
    return TaskPropertyComponent;
}());



/***/ }),

/***/ "./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/serializer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Serializer", function() { return Serializer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//// <reference path='./collections.d.ts' />

var Serializer = (function () {
    function Serializer() {
    }
    Serializer.prototype.serializeActionList = function (actionList) {
        return null;
    };
    // deserializeActionList(xml: string): any {
    //   return {
    //     'actions': [
    //       {
    //         'name': 'formLoad1',
    //         'command': 'formLoad',
    //         'params': [
    //           { 'name': 'dataId' },
    //           { 'value': '1' }
    //         ]
    //       },
    //       {
    //         'name': 'formLoad2',
    //         'command': 'formLoad',
    //         'params': [
    //           { 'name': 'dataId' },
    //           { 'value': '2' }
    //         ]
    //       }
    //     ],
    //     'commands': [
    //       {
    //         'name': 'formLoad',
    //         'description': '表单加载',
    //         'tasks': [
    //           {
    //             'name': 'loadData',
    //             'serviceName': 'DataAccessService',
    //             'methodName': 'loadData',
    //             'params': [
    //               { 'name': 'dataId' },
    //               { 'value': '1' }
    //             ]
    //           },
    //           {
    //             'name': 'showSuccess',
    //             'serviceName': 'MessagesService',
    //             'methodName': 'showSuccess',
    //             'params': []
    //           }
    //         ]
    //       },
    //       {
    //         'name': 'formLoad',
    //         'description': '表单加载',
    //         'params': [],
    //         'tasks': [
    //           {
    //             'name': 'loadData',
    //             'serviceName': 'DataAccessService',
    //             'methodName': 'loadData',
    //             'params': [
    //               { 'name': 'dataId' },
    //               { 'value': '1' }
    //             ]
    //           },
    //           {
    //             'name': 'showSuccess',
    //             'serviceName': 'MessagesService',
    //             'methodName': 'showSuccess',
    //             'params': []
    //           }
    //         ]
    //       }
    //     ]
    //   };
    // }
    Serializer.prototype.deserializeActionList = function (xml) {
        return {
            'commandHandlers': [{
                    'name': 'FormLoadHandler',
                    'commandName': 'formLoad',
                    'services': [{
                            'name': 'SaleOrderListService',
                            'path': '../../service'
                        }],
                    'tasks': [{
                            'name': 'loadData',
                            'serviceName': 'SaleOrderListService',
                            'methodName': 'load',
                            'params': []
                        }]
                }, {
                    'name': 'RemoveHandler',
                    'commandName': 'remove',
                    'services': [{
                            'name': 'SaleOrderListService',
                            'path': '../../service'
                        }],
                    'tasks': [{
                            'name': 'remove',
                            'serviceName': 'SaleOrderListService',
                            'methodName': 'remove',
                            'params': []
                        }]
                }, {
                    'name': 'RouteHandler',
                    'commandName': 'route',
                    'services': [{
                            'name': 'SaleOrderListService',
                            'path': '../../service'
                        }],
                    'tasks': [{
                            'name': 'route',
                            'serviceName': 'SaleOrderListService',
                            'methodName': 'route',
                            'params': [{
                                    'name': 'action',
                                    'value': 'context.command.params.action',
                                    'description': ''
                                }]
                        }]
                }, {
                    'name': 'SearchHandler',
                    'commandName': 'search',
                    'services': [{
                            'name': 'SaleOrderListService',
                            'path': '../../service'
                        }],
                    'tasks': [{
                            'name': 'loadData',
                            'serviceName': 'SaleOrderListService',
                            'methodName': 'search',
                            'params': []
                        }]
                }],
            'commandDescriptions': [{
                    'commandHandler': 'FormLoadHandler',
                    'params': []
                }, {
                    'commandHandler': 'SearchHandler',
                    'params': []
                }, {
                    'commandHandler': 'RouteHandler',
                    'params': [{
                            'name': 'action',
                            'type': 'string'
                        }]
                }, {
                    'commandHandler': 'RemoveHandler',
                    'params': []
                }],
            'commands': [{
                    'name': 'formLoad',
                    'commandHandler': 'FormLoadHandler'
                }, {
                    'name': 'search',
                    'commandHandler': 'SearchHandler'
                }, {
                    'name': 'add',
                    'commandHandler': 'RouteHandler',
                    'params': [{
                            'name': 'action',
                            'value': 'add'
                        }]
                }, {
                    'name': 'edit',
                    'commandHandler': 'RouteHandler',
                    'params': [{
                            'name': 'action',
                            'value': 'edit'
                        }]
                }, {
                    'name': 'view',
                    'commandHandler': 'RouteHandler',
                    'params': [{
                            'name': 'action',
                            'value': 'view'
                        }]
                }, {
                    'name': 'remove',
                    'commandHandler': 'RemoveHandler'
                }]
        };
    };
    Serializer = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], Serializer);
    return Serializer;
}());



/***/ }),

/***/ "./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/task-designer/task-designer.component.html":
/***/ (function(module, exports) {

module.exports = "<table>\r\n  <tbody>\r\n    <tr>\r\n      <td>\r\n        <div><label>编号</label></div>\r\n        <div><input kendoTextBox/></div>\r\n      </td>\r\n      <td>\r\n        <div><label>名称</label></div>\r\n        <div><input kendoTextBox [(ngModel)]=\"content.name\" /></div>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td>\r\n        <div><label>服务</label></div>\r\n        <div><input kendoTextBox [(ngModel)]=\"content.service\" /></div>\r\n      </td>\r\n      <td>\r\n        <div><label>方法</label></div>\r\n        <div><input kendoTextBox [(ngModel)]=\"content.method\" /></div>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n\r\n\r\n<div style=\"padding-top: 20px\">\r\n  <!-- <kendo-grid [kendoGridBinding]=\"content.params\"> -->\r\n    <!-- <kendo-grid-column *ngFor=\"let column of paramColumns\" field=\"{{column.field}}\" title=\"{{column.title}}\" filter=\"{{column.type}}\"></kendo-grid-column> -->\r\n  <!-- </kendo-grid> -->\r\n  <app-editable-grid [data]=\"content.params\" [columns]=\"paramColumns\" [dealRow]=\"false\"></app-editable-grid>\r\n</div>\r\n\r\n<div><input type=\"checkbox\">可执行前扩展</div>\r\n<div><input type=\"checkbox\">可执行后扩展</div>\r\n<div><input type=\"checkbox\">可替换节点</div>\r\n\r\n<!-- <div style=\"float:right\"> -->\r\n<!-- 确定、取消按钮 -->\r\n<!-- <button kendoButton primary (click)=\"confirm()\">确定</button> -->\r\n<!-- <button kendoButton (click)=\"cancel()\">取消</button> -->\r\n<!-- </div> -->\r\n<!-- <div class=\"form-footer\"> -->\r\n  <!-- <button (click)=\"easyContainer.clickOk()\">确定</button> -->\r\n  <!-- <button (click)=\"easyContainer.clickCancel()\">取消</button> -->\r\n<!-- </div> -->\r\n"

/***/ }),

/***/ "./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/task-designer/task-designer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDesignerComponent", function() { return TaskDesignerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__container_easy_container_service__ = __webpack_require__("./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/container/easy-container.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entity_command_object__ = __webpack_require__("./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/entity/command-object.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskDesignerComponent = (function () {
    function TaskDesignerComponent(easyContainer) {
        this.easyContainer = easyContainer;
        this.paramColumns = [
            {
                field: 'name',
                title: '参数名称',
                type: 'text',
                readonly: true
            }, {
                field: 'value',
                title: '参数值',
                type: 'text'
            }, {
                field: 'description',
                title: '说明',
                type: 'text',
                readonly: true
            }
        ];
    }
    TaskDesignerComponent.prototype.ngOnInit = function () {
        // this.task = this.
    };
    TaskDesignerComponent.prototype.clickOk = function () {
        //
    };
    TaskDesignerComponent.prototype.clickCancel = function () {
        //
    };
    TaskDesignerComponent.prototype.confirm = function () {
        // this.content.name = '加载数据11111';
        this.easyContainer.confirmToPrevious();
    };
    TaskDesignerComponent.prototype.cancel = function () {
        this.easyContainer.showPrevious();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__entity_command_object__["Task"])
    ], TaskDesignerComponent.prototype, "content", void 0);
    TaskDesignerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-task-designer',
            template: __webpack_require__("./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/task-designer/task-designer.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__container_easy_container_service__["EasyContainerService"]])
    ], TaskDesignerComponent);
    return TaskDesignerComponent;
}());



/***/ }),

/***/ "./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/task-flow/task-flow.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <kendo-treeview\r\n      [nodes]=\"tasks\"\r\n      [textField]=\"'name'\"\r\n      kendoTreeViewHierarchyBinding\r\n      childrenField=\"routerTasks\"\r\n      (selectionChange)=\"handleTaskSelection($event)\"\r\n      (blur)=\"handleTaskUnselect($event)\">\r\n  </kendo-treeview>\r\n</div>\r\n\r\n<!-- <div> -->\r\n  <!-- <button (click)=\"operateTasks('AddBefore')\">AddBefore</button> -->\r\n  <!-- <button (click)=\"operateTasks('AddAfter')\">AddAfter</button> -->\r\n  <!-- <button (click)=\"operateTasks('Remove')\">Remove</button> -->\r\n<!-- </div> -->"

/***/ }),

/***/ "./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/task-flow/task-flow.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ViewType */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskFlowComponent", function() { return TaskFlowComponent; });
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

// 区分两种视图：开发和扩展。开发视图允许任意调整任务流，扩展视图只允许在指定位置进行扩展。
var ViewType;
(function (ViewType) {
    ViewType[ViewType["dev"] = 0] = "dev";
    ViewType[ViewType["ext"] = 1] = "ext";
    ViewType[ViewType["show"] = 2] = "show";
})(ViewType || (ViewType = {}));
var TaskFlowComponent = (function () {
    function TaskFlowComponent() {
        this.shownTasks = { name: '开始' };
        this.taskNodeSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.taskNodeBlur = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.operateTasks = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        // 首先提供扩展视图
        this.viewtype = ViewType.ext;
    }
    TaskFlowComponent.prototype.ngOnInit = function () {
        // this._prependStartNode();
    };
    TaskFlowComponent.prototype.handleTaskSelection = function (data) {
        this.taskNodeSelected.emit(data);
    };
    TaskFlowComponent.prototype.handleTaskUnselect = function (data) {
        this.taskNodeBlur.emit(data);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], TaskFlowComponent.prototype, "tasks", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], TaskFlowComponent.prototype, "viewtype", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TaskFlowComponent.prototype, "taskNodeSelected", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TaskFlowComponent.prototype, "taskNodeBlur", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TaskFlowComponent.prototype, "operateTasks", void 0);
    TaskFlowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-task-flow',
            template: __webpack_require__("./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/task-flow/task-flow.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], TaskFlowComponent);
    return TaskFlowComponent;
}());



/***/ }),

/***/ "./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/task-router/task-router-designer.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/task-router/task-router-designer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskRouterDesignerComponent", function() { return TaskRouterDesignerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TaskRouterDesignerComponent = (function () {
    function TaskRouterDesignerComponent() {
    }
    TaskRouterDesignerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-router-designer',
            template: __webpack_require__("./src/packages/form-editor-package/views/tabs/view-model-designer/command-designer/task-router/task-router-designer.component.html")
        })
    ], TaskRouterDesignerComponent);
    return TaskRouterDesignerComponent;
}());



/***/ }),

/***/ "./src/packages/form-editor-package/views/tabs/view-model-designer/entity/GSPElementDataType.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GSPElementDataType */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPElementDataTypes", function() { return GSPElementDataTypes; });
/**
 * 字段数据类型
 * @author wangjiegj<wangjiegj@inspur.com>
 */
/**
 * 字段数据类型
 */
var GSPElementDataType;
(function (GSPElementDataType) {
    /**
     * 文本
     */
    GSPElementDataType["String"] = "String";
    /**
     * 备注
     */
    GSPElementDataType["Text"] = "Text";
    /**
     * 整数
     */
    GSPElementDataType["Integer"] = "Integer";
    /**
     * 浮点数
     */
    GSPElementDataType["Decimal"] = "Decimal";
    /**
     * 布尔型
     */
    GSPElementDataType["Boolean"] = "Boolean";
    /**
     * 日期型
     */
    GSPElementDataType["Date"] = "Date";
    /**
     * 日期时间型
     */
    GSPElementDataType["DateTime"] = "DateTime";
    /**
     * 二进制
     */
    GSPElementDataType["Binary"] = "Binary";
})(GSPElementDataType || (GSPElementDataType = {}));

var GSPElementDataTypes = [
    {
        text: '文本', value: GSPElementDataType.String, canChangeLength: true,
        canChangePresicion: false, length: 36, precision: 0
    },
    {
        text: '备注', value: GSPElementDataType.Text, canChangeLength: false,
        canChangePresicion: false, length: 0, precision: 0
    },
    {
        text: '整数', value: GSPElementDataType.Integer, canChangeLength: false,
        canChangePresicion: false, length: 0, precision: 0
    },
    {
        text: '浮点数字', value: GSPElementDataType.Decimal, canChangeLength: true,
        canChangePresicion: true, length: 18, precision: 0
    },
    {
        text: '布尔型', value: GSPElementDataType.Boolean, canChangeLength: false,
        canChangePresicion: false, length: 1, precision: 0
    },
    {
        text: '日期', value: GSPElementDataType.Date, canChangeLength: false,
        canChangePresicion: false, length: 0, precision: 0
    },
    {
        text: '时间', value: GSPElementDataType.DateTime, canChangeLength: false,
        canChangePresicion: false, length: 0, precision: 0
    },
    {
        text: '二进制', value: GSPElementDataType.Binary, canChangeLength: false,
        canChangePresicion: false, length: 0, precision: 0
    },
    {
        text: '业务字段', value: 'UnifiedDataType', canChangeLength: true,
        canChangePresicion: true, length: 36, precision: 0
    },
];


/***/ }),

/***/ "./src/packages/form-editor-package/views/tabs/view-model-designer/entity/field.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VMField", function() { return VMField; });
var VMField = (function () {
    function VMField() {
        this.code = '';
        this.name = '';
        this.labelID = '';
        this.primary = false;
        this.dataType = 'string';
        this.defaultValue = '';
        this.require = false;
        this.extendProperty = '';
    }
    return VMField;
}());



/***/ }),

/***/ "./src/packages/form-editor-package/views/tabs/view-model-designer/field-manager/field-manager.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fieldManager {\r\n    position: absolute;\r\n    top: 42px;\r\n    bottom: 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/form-editor-package/views/tabs/view-model-designer/field-manager/field-manager.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"fieldManager d-flex\">\n  <kendo-grid #grid style=\"height: 100%;width:100%\" [data]=\"fieldList\" [selectable]=\"true\" [kendoGridSelectBy]=\"'id'\"\n    [selectedKeys]=\"eleSelection\" (cellClick)=\"cellClickHandler($event)\" (cellClose)=\"cellCloseHandler($event)\"\n    (cancel)=\"rowCloseHandler($event)\">\n    <ng-template kendoGridToolbarTemplate>\n      <button class=\"k-button\" (click)=\"addVMFields()\">添加字段</button>\n      <button class=\"k-button\" (click)=\"addVirtualElement()\">添加虚拟字段</button>\n      <button class=\"k-button\" (click)=\"removeSelectedElement()\">移除字段</button>\n      <button class=\"k-button\">添加分组</button>\n      <button class=\"k-button\">解除分组</button>\n      <button class=\"k-button\" (click)=\"moveUp()\">上移</button>\n      <button class=\"k-button\" (click)=\"moveDown()\">下移</button>\n    </ng-template>\n    <kendo-grid-column field=\"id\" title=\"字段编号\"> </kendo-grid-column>\n    <kendo-grid-column field=\"code\" title=\"字段编号\"> </kendo-grid-column>\n    <kendo-grid-column field=\"name\" title=\"显示名称\"> </kendo-grid-column>\n    <kendo-grid-column field=\"dataType\" title=\"类型\">\n      <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\" let-formGroup=\"formGroup\">\n        <kendo-dropdownlist [data]=\"dataTypes\" [textField]=\"'text'\" [valueField]=\"'value'\" [value]=\"selectedValue\"\n          [valuePrimitive]=\"true\" [formControl]=\"formGroup.get('dataType')\">\n        </kendo-dropdownlist>\n      </ng-template>\n    </kendo-grid-column>\n    <kendo-grid-column field=\"defaultValue\" title=\"默认值\"> </kendo-grid-column>\n    <kendo-grid-column field=\"require\" title=\"必填\" width=\"100\" editor=\"boolean\">\n      <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\" let-formGroup=\"formGroup\">\n        <div class=\"farris-group-wrap\">\n          <div class=\"form-group farris-form-group\">\n            <div class=\"farris-input-wrap\">\n              <input type=\"checkbox\" class=\"k-checkbox\" [checked]=\"dataItem.require\">\n              <label class=\"k-checkbox-label\"> </label>\n            </div>\n          </div>\n        </div>\n      </ng-template>\n    </kendo-grid-column>\n    <kendo-grid-column field=\"extendProperty\" title=\"属性\"> </kendo-grid-column>\n  </kendo-grid>\n\n  <div [style.display]=\"showPropertyPanel?'block':'none'\">\n    <ng-container #propertyPanel></ng-container>\n  </div>\n</div>"

/***/ }),

/***/ "./src/packages/form-editor-package/views/tabs/view-model-designer/field-manager/field-manager.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldManagerComponent", function() { return FieldManagerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid__ = __webpack_require__("./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fields_mock__ = __webpack_require__("./src/packages/form-editor-package/views/tabs/view-model-designer/field-manager/fields-mock.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entity_field__ = __webpack_require__("./src/packages/form-editor-package/views/tabs/view-model-designer/entity/field.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entity_GSPElementDataType__ = __webpack_require__("./src/packages/form-editor-package/views/tabs/view-model-designer/entity/GSPElementDataType.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_Guid__ = __webpack_require__("./src/packages/form-editor-package/util/Guid.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__select_vm_fields_select_vm_fields_component__ = __webpack_require__("./src/packages/form-editor-package/views/tabs/view-model-designer/select-vm-fields/select-vm-fields.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__farris_ui__ = __webpack_require__("./node_modules/@farris/ui/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__farris_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__farris_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__farris_ide_devkit__ = __webpack_require__("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__farris_ide_devkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__farris_ide_devkit__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var FieldManagerComponent = (function () {
    function FieldManagerComponent(formBuilder, renderer, resolver, modalService, injector) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.renderer = renderer;
        this.resolver = resolver;
        this.modalService = modalService;
        this.injector = injector;
        this.fieldList = __WEBPACK_IMPORTED_MODULE_3__fields_mock__["fieldsMock"];
        this.dataTypes = __WEBPACK_IMPORTED_MODULE_5__entity_GSPElementDataType__["GSPElementDataTypes"];
        this.eleSelection = [];
        this.isNewRow = false;
        this.showPropertyPanel = false;
        this.hasClass = function (el, className) { return new RegExp(className).test(el.className); };
        this.isChildOf = function (el, className) {
            while (el && el.parentElement) {
                if (_this.hasClass(el.parentElement, className)) {
                    return true;
                }
                el = el.parentElement;
            }
            return false;
        };
    }
    FieldManagerComponent.prototype.ngOnInit = function () {
        // 获取已选的VM字段
        var _this = this;
        // 表格失去焦点时，保存新增行
        this.renderer.listen('document', 'click', function (_a) {
            var target = _a.target;
            if (!_this.isChildOf(target, 'k-grid') && _this.isNewRow) {
                _this.saveNewRow();
            }
        });
    };
    /**
     * 单击触发编辑单元格
     */
    FieldManagerComponent.prototype.cellClickHandler = function (args) {
        var sender = args.sender, rowIndex = args.rowIndex, columnIndex = args.columnIndex, column = args.column, dataItem = args.dataItem, isEdited = args.isEdited;
        var propertyName = column.field;
        // 保存新增行
        if (this.isNewRow && !this.saveNewRow()) {
            return;
        }
        // TODO 判断是否是VM带出的字段？
        // 根据字段类型判断编辑方式：属性列在属性面板中编辑
        switch (propertyName) {
            // case 'code': {
            //   return;
            // }
            case 'extendProperty':
                this.triggerPropertyPanel(dataItem);
                this.showPropertyPanel = true;
                return;
            default:
                if (!isEdited) {
                    this.editedRowIndex = rowIndex;
                    this.formGroup = this.createFormGroup(dataItem);
                    sender.editCell(rowIndex, columnIndex, this.formGroup);
                    // sender.editRow(rowIndex, this.formGroup);
                    this.eleSelection = [dataItem.id];
                    this.showPropertyPanel = false;
                    return;
                }
        }
    };
    /**
     * 单元格编辑结束
     */
    FieldManagerComponent.prototype.cellCloseHandler = function (args) {
        var formGroup = args.formGroup, dataItem = args.dataItem, column = args.column;
        var propertyName = column.field;
        if (!formGroup.controls[propertyName].valid) {
            args.preventDefault();
        }
        else if (formGroup.dirty) {
            var newValue = formGroup.value[propertyName];
            var selectedRow = this.fieldList.find(function (field) { return field.id === dataItem.id; });
            selectedRow[propertyName] = newValue;
        }
    };
    FieldManagerComponent.prototype.createFormGroup = function (dataItem) {
        return this.formBuilder.group({
            'id': dataItem.id,
            'code': [dataItem.code || '', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            'name': [dataItem.name || '', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            'dataType': dataItem.dataType,
            'defaultValue': dataItem.defaultValue,
            'require': dataItem.require,
            'extendProperty': dataItem.extendProperty
        });
    };
    /**
     * 新增虚拟字段
     */
    FieldManagerComponent.prototype.addVirtualElement = function () {
        if (!this.saveNewRow()) {
            return;
        }
        this.closeEditor();
        var newField = new __WEBPACK_IMPORTED_MODULE_4__entity_field__["VMField"]();
        newField.id = __WEBPACK_IMPORTED_MODULE_6__util_Guid__["Guid"].newGuid();
        this.fieldList.push(newField);
        this.editedRowIndex = this.fieldList.length - 1;
        this.formGroup = this.createFormGroup(newField);
        this.grid.editRow(this.editedRowIndex, this.formGroup);
        this.isNewRow = true;
        this.eleSelection = [newField.id];
        this.showPropertyPanel = true;
    };
    /**
    * 保存新增行
    */
    FieldManagerComponent.prototype.saveNewRow = function () {
        var _this = this;
        if (!this.formGroup) {
            return true;
        }
        if (!this.formGroup.valid) {
            return false;
        }
        var editedField = this.fieldList.find(function (field) { return field.id === _this.formGroup.value.id; });
        Object.assign(editedField, this.formGroup.value);
        this.isNewRow = false;
        this.closeEditor();
        return true;
    };
    /**
     * 删除选中行
     */
    FieldManagerComponent.prototype.removeSelectedElement = function () {
        if (this.eleSelection.length === 0) {
            alert('请先选中要删除的字段。');
        }
        else {
            var _loop_1 = function () {
                var id = this_1.eleSelection.pop();
                // if (this.canRemove(id)) {
                //   this.viewObject.elements.removeByID(id);
                // }
                var index = this_1.fieldList.findIndex(function (field) { return field.id === id; });
                this_1.fieldList.splice(index, 1);
            };
            var this_1 = this;
            while (this.eleSelection.length !== 0) {
                _loop_1();
            }
            this.isNewRow = this.isNewRow ? false : this.isNewRow;
            this.closeEditor();
        }
    };
    FieldManagerComponent.prototype.closeEditor = function () {
        this.grid.closeRow(this.editedRowIndex);
        // this.isNew = false;
        this.editedRowIndex = undefined;
        this.formGroup = undefined;
    };
    FieldManagerComponent.prototype.addVMFields = function () {
        var _this = this;
        var compFactory = this.resolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_7__select_vm_fields_select_vm_fields_component__["SelectVmFieldsComponent"]);
        var compRef = compFactory.create(this.injector);
        var fieldIdList = this.fieldList.map(function (field) { return field.id; });
        compRef.instance.excludeFields = fieldIdList;
        var modalConfig = {
            title: '选择视图模型字段',
            width: 850,
            height: 550,
            showButtons: true,
            buttons: compRef.instance.modalFooter
        };
        var dialog = this.modalService.show(compRef, modalConfig);
        compRef.instance.closeModal.subscribe(function () {
            dialog.close();
        });
        compRef.instance.addFields.subscribe(function (selectedFields) {
            if (selectedFields.length > 0) {
                (_a = _this.fieldList).push.apply(_a, selectedFields);
            }
            dialog.close();
            var _a;
        });
    };
    /**
     * 上移
     */
    FieldManagerComponent.prototype.moveUp = function () {
        var _this = this;
        if (!this.eleSelection || this.eleSelection.length === 0) {
            alert('请选选择要移动的字段');
        }
        var index = this.fieldList.findIndex(function (field) { return field.id === _this.eleSelection[0]; });
        if (index < 1) {
            return;
        }
        var ele = this.fieldList[index];
        this.fieldList.splice(index, 1);
        this.fieldList.splice(index - 1, 0, ele);
    };
    /*
    * 下移
    */
    FieldManagerComponent.prototype.moveDown = function () {
        var _this = this;
        if (!this.eleSelection || this.eleSelection.length === 0) {
            alert('请选选择要移动的字段');
        }
        var index = this.fieldList.findIndex(function (field) { return field.id === _this.eleSelection[0]; });
        if (index === this.fieldList.length - 1) {
            return;
        }
        var ele = this.fieldList[index];
        this.fieldList.splice(index, 1);
        this.fieldList.splice(index + 1, 0, ele);
    };
    /**
     * 触发展示属性面板
     */
    FieldManagerComponent.prototype.triggerPropertyPanel = function (dataItem) {
        var propertyData = {};
        var extendStr = dataItem.extendProperty;
        if (extendStr) {
            propertyData = JSON.parse(extendStr);
        }
        var propertyConfig = this.getPropertyConfig(propertyData);
        this.propertyContainer.clear();
        var itemPanel = this.resolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_9__farris_ide_devkit__["PropertyPanelComponent"]);
        var propertyRef = this.propertyContainer.createComponent(itemPanel);
        propertyRef.instance.propertyConfig = propertyConfig;
        propertyRef.instance.propertyData = propertyData;
        propertyRef.instance.width = 300;
        propertyRef.instance.propertyChanged.subscribe(function (changeObject) {
            propertyData[changeObject.propertyID] = changeObject.propertyValue;
            dataItem.extendProperty = JSON.stringify(propertyData);
        });
    };
    FieldManagerComponent.prototype.getPropertyConfig = function (propertyData) {
        var properties = [{
                propertyID: 'extend1',
                propertyName: '属性1',
                propertyType: 'string',
                visible: true
            }, {
                propertyID: 'extend2',
                propertyName: '属性2',
                propertyType: 'string',
                visible: true
            }];
        Object.keys(propertyData).forEach(function (element) {
        });
        var config = [
            {
                categoryId: 'extendProperty',
                categoryName: '扩展属性',
                properties: properties
            }
        ];
        return config;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid__["GridComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid__["GridComponent"])
    ], FieldManagerComponent.prototype, "grid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('propertyPanel', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"])
    ], FieldManagerComponent.prototype, "propertyContainer", void 0);
    FieldManagerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-field-manager',
            template: __webpack_require__("./src/packages/form-editor-package/views/tabs/view-model-designer/field-manager/field-manager.component.html"),
            styles: [__webpack_require__("./src/packages/form-editor-package/views/tabs/view-model-designer/field-manager/field-manager.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], __WEBPACK_IMPORTED_MODULE_8__farris_ui__["BsModalService"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], FieldManagerComponent);
    return FieldManagerComponent;
}());



/***/ }),

/***/ "./src/packages/form-editor-package/views/tabs/view-model-designer/field-manager/fields-mock.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fieldsMock", function() { return fieldsMock; });
var fieldsMock = [
    {
        id: '4b94d3cd-ad96-4fcd-8ce7-d9de701a416a',
        dataType: 'string',
        defaultValue: '',
        name: 'ID',
        primary: true,
        code: 'ID',
        labelID: 'ID',
        require: true,
        extendProperty: ''
    },
    {
        id: 'dc951547-ae6d-401a-a4ed-0db6315adf79',
        dataType: 'string',
        defaultValue: '',
        name: '订单编号',
        primary: false,
        code: 'Code',
        labelID: 'Code',
        require: true,
        extendProperty: ''
    },
    {
        id: 'f80641d3-959f-4ee8-b9b8-431b7ef1681a',
        dataType: 'Date',
        defaultValue: '',
        name: '订单日期',
        primary: false,
        code: 'PlaceDate',
        labelID: 'PlaceDate',
        require: false,
        extendProperty: "{\"extend1\":\"aaa\",\"extend2\":\"bbb\"}"
    }
];


/***/ }),

/***/ "./src/packages/form-editor-package/views/tabs/view-model-designer/select-vm-fields/fields-mock.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fieldsMock", function() { return fieldsMock; });
var fieldsMock = [
    {
        id: '4b94d3cd-ad96-4fcd-8ce7-d9de701a416a',
        dataType: 'string',
        defaultValue: '',
        name: 'ID',
        primary: true,
        code: 'ID',
        labelID: 'ID',
        require: true,
        extendProperty: ''
    },
    {
        id: 'dc951547-ae6d-401a-a4ed-0db6315adf79',
        dataType: 'string',
        defaultValue: '',
        name: '订单编号',
        primary: false,
        code: 'Code',
        labelID: 'Code',
        require: true,
        extendProperty: ''
    },
    {
        id: 'f80641d3-959f-4ee8-b9b8-431b7ef1681a',
        dataType: 'Date',
        defaultValue: '',
        name: '订单日期',
        primary: false,
        code: 'PlaceDate',
        labelID: 'PlaceDate',
        require: false,
        extendProperty: ''
    },
    {
        id: 'd4ddaaed-6d62-467a-9501-2a93c0e5cd58',
        dataType: 'string',
        defaultValue: '',
        name: '销售组织',
        primary: false,
        code: 'SalesOrg',
        labelID: 'SalesOrg',
        require: false,
        extendProperty: ''
    }
];


/***/ }),

/***/ "./src/packages/form-editor-package/views/tabs/view-model-designer/select-vm-fields/select-vm-fields.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/form-editor-package/views/tabs/view-model-designer/select-vm-fields/select-vm-fields.component.html":
/***/ (function(module, exports) {

module.exports = "<kendo-grid #grid style=\"height: 100%;\" [data]=\"elements\" [selectable]=\"selectableSettings\" [kendoGridSelectBy]=\"'id'\"\n  [selectedKeys]=\"eleSelection\">\n\n  <kendo-grid-checkbox-column width=\"60\" resizable=\"false\">\n  </kendo-grid-checkbox-column>\n\n  <kendo-grid-column field=\"code\" title=\"字段编号\"></kendo-grid-column>\n  <kendo-grid-column field=\"name\" title=\"字段名称\"> </kendo-grid-column>\n</kendo-grid>\n\n<ng-template #modalFooter>\n  <div class=\"btns\">\n    <button type=\"button\" class=\"btn btn-outline-secondary btn-sm px-3\" (click)=\"clickCancel()\">取消</button>\n    <button type=\"button\" class=\"btn btn-outline-primary btn-sm px-3\" (click)=\"clickOK()\">确定</button>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/packages/form-editor-package/views/tabs/view-model-designer/select-vm-fields/select-vm-fields.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectVmFieldsComponent", function() { return SelectVmFieldsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fields_mock__ = __webpack_require__("./src/packages/form-editor-package/views/tabs/view-model-designer/select-vm-fields/fields-mock.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SelectVmFieldsComponent = (function () {
    function SelectVmFieldsComponent() {
        this.excludeFields = [];
        this.closeModal = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.addFields = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.selectableSettings = {
            mode: 'multiple',
            checkboxOnly: true
        };
        this.elements = [];
        this.eleSelection = []; // 选中的字段ID
    }
    SelectVmFieldsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // 查询VM所有字段
        this.elements = __WEBPACK_IMPORTED_MODULE_1__fields_mock__["fieldsMock"];
        this.elements = this.elements.filter(function (field) { return !_this.excludeFields.includes(field.id); });
    };
    SelectVmFieldsComponent.prototype.clickOK = function () {
        var _this = this;
        var selectedFields = this.elements.filter(function (field) { return _this.eleSelection.includes(field.id); });
        this.addFields.next(selectedFields);
    };
    SelectVmFieldsComponent.prototype.clickCancel = function () {
        this.closeModal.next();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SelectVmFieldsComponent.prototype, "excludeFields", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SelectVmFieldsComponent.prototype, "closeModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SelectVmFieldsComponent.prototype, "addFields", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalFooter'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], SelectVmFieldsComponent.prototype, "modalFooter", void 0);
    SelectVmFieldsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-select-vm-fields',
            template: __webpack_require__("./src/packages/form-editor-package/views/tabs/view-model-designer/select-vm-fields/select-vm-fields.component.html"),
            styles: [__webpack_require__("./src/packages/form-editor-package/views/tabs/view-model-designer/select-vm-fields/select-vm-fields.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SelectVmFieldsComponent);
    return SelectVmFieldsComponent;
}());



/***/ }),

/***/ "./src/packages/form-editor-package/views/tabs/view-model-designer/view-model-designer/view-model-designer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n    height: inherit;\r\n}\r\n\r\n.vmDesigner {\r\n    font-size: 13px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/form-editor-package/views/tabs/view-model-designer/view-model-designer/view-model-designer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <kendo-splitter style=\"height: inherit;\" class=\"vmDesigner\">\r\n  <kendo-splitter-pane size=\"150px\" min=\"150px\">\r\n    <div class=\"pane-content\">\r\n      <ng2tree [nodes]=\"vmTableTree\" [focused]=\"true\" (onFocus)=\"focusVMNode($event)\"></ng2tree>\r\n    </div>\r\n  </kendo-splitter-pane>\r\n\r\n  <kendo-splitter-pane>\r\n    <div class=\"pane-content px-2 py-1\">\r\n      <farris-tabs [showTooltips]=\"'false'\" [showDropDown]=\"'false'\">\r\n        <farris-tab [title]=\"'字段'\" [id]=\"'vmFields'\" [removeable]=\"false\" class=\"my-2\">\r\n          <ng-template #content>\r\n            <app-field-manager></app-field-manager>\r\n          </ng-template>\r\n        </farris-tab>\r\n        <farris-tab [title]=\"'动作'\" [id]=\"'vmActions'\" [removeable]=\"false\">\r\n          <ng-template #content>\r\n            <div>动作</div>\r\n          </ng-template>\r\n        </farris-tab>\r\n      </farris-tabs>\r\n    </div>\r\n  </kendo-splitter-pane>\r\n</kendo-splitter> -->\r\n"

/***/ }),

/***/ "./src/packages/form-editor-package/views/tabs/view-model-designer/view-model-designer/view-model-designer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewModelDesignerComponent", function() { return ViewModelDesignerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_viewmodel_service__ = __webpack_require__("./src/packages/form-editor-package/service/viewmodel.service.ts");
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
    function ViewModelDesignerComponent(viewModelService) {
        this.viewModelService = viewModelService;
        this.vmTableTree = [];
    }
    ViewModelDesignerComponent.prototype.ngOnInit = function () {
        this.vmTableTree = this.viewModelService.getVMTree(this.domJson);
    };
    ViewModelDesignerComponent.prototype.focusVMNode = function ($event) {
        console.log($event);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ViewModelDesignerComponent.prototype, "domJson", void 0);
    ViewModelDesignerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'view-model-designer',
            template: __webpack_require__("./src/packages/form-editor-package/views/tabs/view-model-designer/view-model-designer/view-model-designer.component.html"),
            styles: [__webpack_require__("./src/packages/form-editor-package/views/tabs/view-model-designer/view-model-designer/view-model-designer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_viewmodel_service__["ViewModelService"]])
    ], ViewModelDesignerComponent);
    return ViewModelDesignerComponent;
}());



/***/ })

},[],["rxjs"],["rxjs"]);
//# sourceMappingURL=form-editor-package.module.chunk.js.map