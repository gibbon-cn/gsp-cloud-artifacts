webpackJsonp(["rspackage.module"],{

/***/ "./node_modules/@progress/kendo-angular-upload/dist/es/dropzone.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropZoneDirective", function() { return DropZoneDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__upload_service__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/upload.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validation_util__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/validation-util.js");




/**
 * @hidden
 */
var DropZoneDirective = /** @class */ (function () {
    function DropZoneDirective(element, uploadService, _ngZone, renderer) {
        var _this = this;
        this.element = element;
        this.uploadService = uploadService;
        this._ngZone = _ngZone;
        this.renderer = renderer;
        this.hideIntervalDocument = null;
        this.hideIntervalElement = null;
        this.state = {
            active: "k-dropzone k-dropzone-active",
            hovered: "k-dropzone k-dropzone-active k-dropzone-hovered",
            inactive: "k-dropzone"
        };
        this.element = element;
        this.setClasses(this.state.inactive);
        if (!__WEBPACK_IMPORTED_MODULE_2__util__["default"].isDocumentAvailable()) {
            return;
        }
        this._ngZone.runOutsideAngular(function () {
            _this.unsubscribeDocumentDragEnter = _this.renderer.listen('document', 'dragenter', function () { return _this.onDocumentDragEnter(); });
            _this.unsubscribeDocumentDragOver = _this.renderer.listen('document', 'dragover', function () { return _this.onDocumentDragOver(); });
        });
    }
    DropZoneDirective.prototype.ngOnDestroy = function () {
        var _this = this;
        this._ngZone.runOutsideAngular(function () {
            if (_this.unsubscribeDocumentDragEnter) {
                _this.unsubscribeDocumentDragEnter();
            }
            if (_this.unsubscribeDocumentDragOver) {
                _this.unsubscribeDocumentDragOver();
            }
        });
    };
    /**
     * @hidden
     */
    DropZoneDirective.prototype.onDocumentDragEnter = function () {
        var _this = this;
        if (this.lastDragElement) {
            if (this.calculateTimeDiff(this.lastDragElement) > 100) {
                this.setClasses(this.state.active);
            }
        }
        else {
            this.setClasses(this.state.active);
        }
        this.lastDragDocument = new Date();
        if (!this.hideIntervalDocument) {
            this.hideIntervalDocument = setInterval(function () {
                if (_this.calculateTimeDiff(_this.lastDragDocument) < 100) {
                    return;
                }
                _this.setClasses(_this.state.inactive);
                clearInterval(_this.hideIntervalDocument);
                _this.hideIntervalDocument = null;
            }, 100);
        }
        return false;
    };
    /**
     * @hidden
     */
    DropZoneDirective.prototype.onDocumentDragOver = function () {
        this.lastDragDocument = new Date();
        return false;
    };
    /**
     * @hidden
     */
    DropZoneDirective.prototype.onElementDragEnterListener = function () {
        var _this = this;
        this.setClasses(this.state.hovered);
        this.lastDragElement = new Date();
        if (!this.hideIntervalElement) {
            this.hideIntervalElement = setInterval(function () {
                if (_this.calculateTimeDiff(_this.lastDragElement) < 100) {
                    return;
                }
                if (_this.lastDrop) {
                    var diff = _this.calculateTimeDiff(_this.lastDrop);
                    _this.setClasses(diff > 200 ? _this.state.active : _this.state.inactive);
                }
                else {
                    _this.setClasses(_this.state.active);
                }
                clearInterval(_this.hideIntervalElement);
                _this.hideIntervalElement = null;
            }, 100);
        }
        return false;
    };
    /**
     * @hidden
     */
    DropZoneDirective.prototype.onElementDragOverListener = function () {
        this.lastDragElement = new Date();
        return false;
    };
    /**
     * @hidden
     */
    DropZoneDirective.prototype.onDropListener = function (event) {
        this.lastDrop = new Date();
        var droppedFiles = event.dataTransfer.files;
        if (droppedFiles.length > 0 && !this.disabled) {
            var files = __WEBPACK_IMPORTED_MODULE_2__util__["default"].getAllFileInfo(droppedFiles);
            files = __WEBPACK_IMPORTED_MODULE_2__util__["default"].assignGuidToFiles(files, !this.async.batch);
            if (!this.multiple) {
                files.splice(1, files.length - 1);
                this.uploadService.clearFiles();
            }
            __WEBPACK_IMPORTED_MODULE_3__validation_util__["default"].validateFiles(files, this.restrictions);
            this.uploadService.addFiles(files, this.async);
        }
        return false;
    };
    DropZoneDirective.prototype.calculateTimeDiff = function (prevEvent) {
        return new Date().getTime() - prevEvent.getTime();
    };
    DropZoneDirective.prototype.setClasses = function (classes) {
        if (!this.disabled) {
            this.element.nativeElement.className = classes;
        }
    };
    Object.defineProperty(DropZoneDirective.prototype, "initialClassName", {
        /**
         * @hidden
         */
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    DropZoneDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[kendoUploadDropzone]'
                },] },
    ];
    /** @nocollapse */
    DropZoneDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_1__upload_service__["UploadService"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
    ]; };
    DropZoneDirective.propDecorators = {
        'async': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'multiple': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'restrictions': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'onElementDragEnterListener': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['dragenter',] },],
        'onElementDragOverListener': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['dragover',] },],
        'onDropListener': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['drop', ['$event'],] },],
        'initialClassName': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.k-dropzone',] },],
    };
    return DropZoneDirective;
}());



/***/ }),

/***/ "./node_modules/@progress/kendo-angular-upload/dist/es/file-info.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileState", function() { return FileState; });
/**
 * Lists the possible states of a file.
 */
var FileState;
(function (FileState) {
    /**
     * The file upload process has failed.
     */
    FileState[FileState["Failed"] = 0] = "Failed";
    /**
     * An initially selected fake file without a set state.
     */
    FileState[FileState["Initial"] = 1] = "Initial";
    /**
     * The file is selected.
     */
    FileState[FileState["Selected"] = 2] = "Selected";
    /**
     * The file is successfully uploaded.
     */
    FileState[FileState["Uploaded"] = 3] = "Uploaded";
    /**
     * The file is in the process of uploading.
     */
    FileState[FileState["Uploading"] = 4] = "Uploading";
})(FileState || (FileState = {}));


/***/ }),

/***/ "./node_modules/@progress/kendo-angular-upload/dist/es/file-list-item-action-button.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileListItemActionButtonComponent", function() { return FileListItemActionButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__file_info__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/file-info.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__upload_service__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/upload.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_l10n__ = __webpack_require__("./node_modules/@progress/kendo-angular-l10n/dist/es/index.js");




/**
 * @hidden
 */
var FileListItemActionButtonComponent = /** @class */ (function () {
    function FileListItemActionButtonComponent(uploadService, localization) {
        this.uploadService = uploadService;
        this.localization = localization;
        this.retryFocused = false;
        this.actionFocused = false;
    }
    FileListItemActionButtonComponent.prototype.setButtonClasses = function (type) {
        return {
            'k-button k-upload-action': true,
            'k-state-focused': (this.actionFocused && type === 'action') ||
                (this.retryFocused && type === 'retry')
        };
    };
    FileListItemActionButtonComponent.prototype.setActionButtonClasses = function (file) {
        /* tslint:disable:object-literal-sort-keys */
        return {
            'k-icon': true,
            'k-cancel k-i-deny': file.state === __WEBPACK_IMPORTED_MODULE_1__file_info__["FileState"].Uploading,
            'k-delete k-i-x': file.state !== __WEBPACK_IMPORTED_MODULE_1__file_info__["FileState"].Uploading
        };
    };
    FileListItemActionButtonComponent.prototype.setActionButtonTitle = function (file) {
        if (file.state === __WEBPACK_IMPORTED_MODULE_1__file_info__["FileState"].Uploading) {
            return this.localization.get('cancel');
        }
        return this.localization.get('remove');
    };
    FileListItemActionButtonComponent.prototype.setRetryButtonTitle = function () {
        return this.localization.get('retry');
    };
    FileListItemActionButtonComponent.prototype.onFocus = function (type) {
        if (type === 'retry') {
            this.retryFocused = true;
        }
        if (type === 'action') {
            this.actionFocused = true;
        }
    };
    FileListItemActionButtonComponent.prototype.onBlur = function (type) {
        if (type === 'retry') {
            this.retryFocused = false;
        }
        if (type === 'action') {
            this.actionFocused = false;
        }
    };
    FileListItemActionButtonComponent.prototype.onClick = function (uid, type, _event) {
        var element = (type === 'retry') ? this.retryButton : this.actionButton;
        var classes = element.nativeElement.className.split(" ");
        if (this.disabled) {
            return;
        }
        if (classes.indexOf('k-delete') >= 0) {
            this.uploadService.removeFiles(uid, this.async);
        }
        else if (classes.indexOf('k-cancel') >= 0) {
            this.uploadService.cancelFiles(uid);
        }
        else if (classes.indexOf('k-retry') >= 0) {
            this.uploadService.retryFiles(uid, this.async);
        }
    };
    FileListItemActionButtonComponent.prototype.isVisible = function (file, type) {
        if (type === 'retry') {
            return file.state === __WEBPACK_IMPORTED_MODULE_1__file_info__["FileState"].Failed ? true : false;
        }
        if (type === 'progress') {
            return file.state === __WEBPACK_IMPORTED_MODULE_1__file_info__["FileState"].Uploading;
        }
        if ((file.state === __WEBPACK_IMPORTED_MODULE_1__file_info__["FileState"].Uploaded || file.state === __WEBPACK_IMPORTED_MODULE_1__file_info__["FileState"].Initial) && !this.async.removeUrl) {
            return false;
        }
        return true;
    };
    FileListItemActionButtonComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'kendo-upload-file-list-item-action-button',
                    template: "\n      <strong class=\"k-upload-status\">\n        <span class=\"k-upload-pct\" *ngIf=\"isVisible(file, 'progress')\">{{progress}}%</span>\n        <button type=\"button\"\n          *ngIf=\"isVisible(file, 'retry')\"\n          [attr.tabIndex]=\"-1\"\n          [ngClass]=\"setButtonClasses('retry')\"\n          (focus)=\"onFocus('retry')\"\n          (blur)=\"onBlur('retry')\"\n          (click)=\"onClick(file.uid, 'retry', $event)\">\n          <span #retryButton\n            [attr.aria-label]=\"setRetryButtonTitle()\"\n            [attr.title]=\"setRetryButtonTitle()\"\n            class=\"k-icon k-retry k-i-refresh-sm\">\n          </span>\n        </button>\n        <button type=\"button\"\n          *ngIf=\"isVisible(file, 'action')\"\n          [attr.tabIndex]=\"-1\"\n          [ngClass]=\"setButtonClasses('action')\"\n          (focus)=\"onFocus('action')\"\n          (blur)=\"onBlur('action')\"\n          (click)=\"onClick(file.uid, 'action', $event)\">\n          <span #actionButton\n            [attr.aria-label]='setActionButtonTitle(file)'\n            [attr.title]='setActionButtonTitle(file)'\n            [ngClass]='setActionButtonClasses(file)'>\n          </span>\n        </button>\n      </strong>\n    "
                },] },
    ];
    /** @nocollapse */
    FileListItemActionButtonComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__upload_service__["UploadService"], },
        { type: __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_l10n__["LocalizationService"], },
    ]; };
    FileListItemActionButtonComponent.propDecorators = {
        'file': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'async': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'progress': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'retryButton': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: ["retryButton",] },],
        'actionButton': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: ["actionButton",] },],
    };
    return FileListItemActionButtonComponent;
}());



/***/ }),

/***/ "./node_modules/@progress/kendo-angular-upload/dist/es/file-list-item-base.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileListItemBase", function() { return FileListItemBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/util.js");

/**
 * @hidden
 */
var FileListItemBase = /** @class */ (function () {
    function FileListItemBase(uploadService) {
        this.uploadService = uploadService;
        this.progressComplete = 0;
    }
    FileListItemBase.prototype.subscribeUploadProgress = function (uploadProgressHandler) {
        this.uploadProgressSubscription = this.uploadService.uploadProgressEvent.subscribe(uploadProgressHandler);
    };
    FileListItemBase.prototype.fileHasValidationErrors = function (file) {
        return __WEBPACK_IMPORTED_MODULE_0__util__["default"].fileHasValidationErrors(file);
    };
    FileListItemBase.prototype.filesHaveValidationErrors = function (files) {
        return __WEBPACK_IMPORTED_MODULE_0__util__["default"].filesHaveValidationErrors(files);
    };
    FileListItemBase.prototype.ngOnDestroy = function () {
        this.uploadProgressSubscription.unsubscribe();
    };
    FileListItemBase.prototype.getFileValidationMessage = function (file) {
        var validationMessage;
        if (file.validationErrors && file.validationErrors.length > 0) {
            validationMessage = this.localization.get(file.validationErrors[0]);
        }
        return validationMessage;
    };
    FileListItemBase.prototype.getInvalidFilesMessage = function () {
        return this.localization.get('invalidFiles');
    };
    FileListItemBase.prototype.getTotalFilesSizeMessage = function (files) {
        return __WEBPACK_IMPORTED_MODULE_0__util__["default"].getTotalFilesSizeMessage(files);
    };
    return FileListItemBase;
}());



/***/ }),

/***/ "./node_modules/@progress/kendo-angular-upload/dist/es/file-list-item.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileListItemDirective", function() { return FileListItemDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__file_info__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/file-info.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navigation_service__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/navigation.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/util.js");




/**
 * @hidden
 */
var FileListItemDirective = /** @class */ (function () {
    function FileListItemDirective(el, navigationService) {
        this.navigationService = navigationService;
        this.fileClass = true;
        this.focused = false;
        this.element = el;
    }
    FileListItemDirective.prototype.focus = function () {
        this.element.nativeElement.focus();
    };
    Object.defineProperty(FileListItemDirective.prototype, "uidAttribute", {
        get: function () {
            return this.files[0].uid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileListItemDirective.prototype, "tabIndex", {
        get: function () {
            return "-1";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileListItemDirective.prototype, "kFileError", {
        get: function () {
            return this.files[0].state === __WEBPACK_IMPORTED_MODULE_1__file_info__["FileState"].Failed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileListItemDirective.prototype, "kFileInvalid", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_3__util__["default"].filesHaveValidationErrors(this.files);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileListItemDirective.prototype, "kFileProgress", {
        get: function () {
            return this.files[0].state === __WEBPACK_IMPORTED_MODULE_1__file_info__["FileState"].Uploading;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileListItemDirective.prototype, "kFileSuccess", {
        get: function () {
            return this.files[0].state === __WEBPACK_IMPORTED_MODULE_1__file_info__["FileState"].Uploaded ||
                this.files[0].state === __WEBPACK_IMPORTED_MODULE_1__file_info__["FileState"].Initial;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileListItemDirective.prototype, "kStateFocused", {
        get: function () {
            return this.focused;
        },
        enumerable: true,
        configurable: true
    });
    FileListItemDirective.prototype.onFocus = function () {
        this.focused = true;
    };
    FileListItemDirective.prototype.onBlur = function () {
        this.focused = false;
    };
    FileListItemDirective.prototype.onClick = function (event) {
        event.preventDefault();
        if (!__WEBPACK_IMPORTED_MODULE_3__util__["default"].isFocusable(event.target) && !__WEBPACK_IMPORTED_MODULE_3__util__["default"].hasClasses(event.target, __WEBPACK_IMPORTED_MODULE_3__util__["default"].IGNORE_TARGET_CLASSSES)) {
            this.navigationService.focusedIndex = this.index;
        }
    };
    FileListItemDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[kendoUploadFileListItem]'
                },] },
    ];
    /** @nocollapse */
    FileListItemDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_2__navigation_service__["NavigationService"], },
    ]; };
    FileListItemDirective.propDecorators = {
        'files': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'index': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'fileClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.k-file',] },],
        'uidAttribute': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['attr.data-uid',] },],
        'tabIndex': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['attr.tabIndex',] },],
        'kFileError': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.k-file-error',] },],
        'kFileInvalid': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.k-file-invalid',] },],
        'kFileProgress': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.k-file-progress',] },],
        'kFileSuccess': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.k-file-success',] },],
        'kStateFocused': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.k-state-focused',] },],
        'onFocus': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ["focus",] },],
        'onBlur': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ["blur",] },],
        'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['click', ['$event'],] },],
    };
    return FileListItemDirective;
}());



/***/ }),

/***/ "./node_modules/@progress/kendo-angular-upload/dist/es/file-list-multiple-items.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileListMultipleItemsComponent", function() { return FileListMultipleItemsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__file_info__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/file-info.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__file_list_item_base__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/file-list-item-base.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_l10n__ = __webpack_require__("./node_modules/@progress/kendo-angular-l10n/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__upload_service__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/upload.service.js");







/**
 * @hidden
 */
var FileListMultipleItemsComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](FileListMultipleItemsComponent, _super);
    function FileListMultipleItemsComponent(localization, uploadService) {
        var _this = _super.call(this, uploadService) || this;
        _this.localization = localization;
        _this.subscribeUploadProgress(function (args) {
            if (args.files[0].uid === _this.files[0].uid) {
                _this.progressComplete = args.percentComplete;
            }
        });
        return _this;
    }
    /**
     * @hidden
     */
    FileListMultipleItemsComponent.prototype.setFileNameClasses = function (file) {
        return {
            "k-file-name": true,
            "k-file-name-invalid": _super.prototype.fileHasValidationErrors.call(this, file)
        };
    };
    Object.defineProperty(FileListMultipleItemsComponent.prototype, "showProgress", {
        /**
         * @hidden
         */
        get: function () {
            return (this.files[0].state === __WEBPACK_IMPORTED_MODULE_3__file_info__["FileState"].Uploading) ? 'active' : 'inactive';
        },
        enumerable: true,
        configurable: true
    });
    FileListMultipleItemsComponent.prototype.ngOnInit = function () {
        this.filesHaveErrors = _super.prototype.filesHaveValidationErrors.call(this, this.files);
    };
    FileListMultipleItemsComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"], args: [{
                    animations: [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["trigger"])('progressState', [
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["state"])('active', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["style"])({ opacity: 1 })),
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["state"])('inactive', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["style"])({ opacity: 0 })),
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["transition"])('void => active', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["style"])({ opacity: 0 })),
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["transition"])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["style"])({ opacity: 1 })),
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["transition"])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["animate"])('1s 2s ease-out'))
                        ])
                    ],
                    selector: 'kendo-upload-file-list-multiple-items',
                    template: "\n      <span class=\"k-progress\" [style.width]=\"progressComplete + '%'\" [@progressState]=\"showProgress\"></span>\n      <span *ngIf=\"!filesHaveErrors\" class=\"k-multiple-files-extension-wrapper\">\n        <span class=\"k-file-state\"></span>\n      </span>\n      <span *ngIf=\"filesHaveErrors\" class=\"k-multiple-files-invalid-extension-wrapper\">\n        <span class='k-file-invalid-icon'>!</span>\n        <span class=\"k-file-state\"></span>\n      </span>\n      <span class=\"k-file-name-size-wrapper\">\n        <span *ngFor=\"let file of files\" [ngClass]=\"setFileNameClasses(file)\" [title]=\"file.name\">{{file.name}}</span>\n        <span *ngIf=\"!filesHaveErrors\"\n              class=\"k-file-information\">Total: {{ files.length }} files, {{ getTotalFilesSizeMessage(files) }}</span>\n        <span *ngIf=\"filesHaveErrors\" class=\"k-file-validation-message\">{{ getInvalidFilesMessage() }}</span>\n      </span>\n      <kendo-upload-file-list-item-action-button\n        [file]='files[0]'\n        [disabled]='disabled'\n        [async]='async'\n        [progress]='progressComplete'>\n      </kendo-upload-file-list-item-action-button>\n    "
                },] },
    ];
    /** @nocollapse */
    FileListMultipleItemsComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_l10n__["LocalizationService"], },
        { type: __WEBPACK_IMPORTED_MODULE_6__upload_service__["UploadService"], },
    ]; };
    FileListMultipleItemsComponent.propDecorators = {
        'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'files': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'async': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
    };
    return FileListMultipleItemsComponent;
}(__WEBPACK_IMPORTED_MODULE_4__file_list_item_base__["FileListItemBase"]));



/***/ }),

/***/ "./node_modules/@progress/kendo-angular-upload/dist/es/file-list-single-item.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileListSingleItemComponent", function() { return FileListSingleItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__file_info__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/file-info.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__file_list_item_base__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/file-list-item-base.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_l10n__ = __webpack_require__("./node_modules/@progress/kendo-angular-l10n/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__upload_service__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/upload.service.js");







/**
 * @hidden
 */
var FileListSingleItemComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](FileListSingleItemComponent, _super);
    function FileListSingleItemComponent(localization, uploadService) {
        var _this = _super.call(this, uploadService) || this;
        _this.localization = localization;
        _this.subscribeUploadProgress(function (args) {
            if (args.files[0].uid === _this.file.uid) {
                _this.progressComplete = args.percentComplete;
            }
        });
        return _this;
    }
    /**
     * @hidden
     */
    FileListSingleItemComponent.prototype.textFor = function (key) {
        return this.localization.get(key);
    };
    /**
     * @hidden
     */
    FileListSingleItemComponent.prototype.getFileExtension = function (file) {
        return file.extension ? file.extension.substring(1) : '';
    };
    Object.defineProperty(FileListSingleItemComponent.prototype, "showProgress", {
        /**
         * @hidden
         */
        get: function () {
            return (this.file.state === __WEBPACK_IMPORTED_MODULE_3__file_info__["FileState"].Uploading) ? 'active' : 'inactive';
        },
        enumerable: true,
        configurable: true
    });
    FileListSingleItemComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"], args: [{
                    animations: [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["trigger"])('progressState', [
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["state"])('active', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["style"])({ opacity: 1 })),
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["state"])('inactive', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["style"])({ opacity: 0 })),
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["transition"])('void => active', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["style"])({ opacity: 0 })),
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["transition"])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["style"])({ opacity: 1 })),
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["transition"])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["animate"])('1s 2s ease-out'))
                        ])
                    ],
                    selector: 'kendo-upload-file-list-single-item',
                    template: "\n      <span class=\"k-progress\" [style.width]=\"progressComplete + '%'\" [@progressState]=\"showProgress\"></span>\n      <ng-template [ngIf]='file.validationErrors && file.validationErrors.length > 0'>\n        <span class=\"k-file-invalid-extension-wrapper\">\n          <span class=\"k-file-invalid-icon\">!</span>\n          <span class=\"k-file-state\"></span>\n        </span>\n        <span class=\"k-file-name-size-wrapper\">\n          <span class=\"k-file-name k-file-name-invalid\" [title]=\"file.name\">{{ file.name }}</span>\n          <span class=\"k-file-validation-message\">{{ getFileValidationMessage(file) }}</span>\n        </span>\n      </ng-template>\n      <ng-template [ngIf]='!file.validationErrors || file.validationErrors.length === 0'>\n        <span class=\"k-file-extension-wrapper\">\n          <span class=\"k-file-extension\">{{ getFileExtension(file) }}</span>\n          <span class=\"k-file-state\"></span>\n        </span>\n        <span class=\"k-file-name-size-wrapper\">\n          <span class=\"k-file-name\" [title]=\"file.name\">{{ file.name }}</span>\n          <span class=\"k-file-size\">{{ getTotalFilesSizeMessage([file]) }}</span>\n        </span>\n      </ng-template>\n      <kendo-upload-file-list-item-action-button\n        [file]='file'\n        [disabled]='disabled'\n        [async]='async'\n        [progress]='progressComplete'>\n      </kendo-upload-file-list-item-action-button>\n    "
                },] },
    ];
    /** @nocollapse */
    FileListSingleItemComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_l10n__["LocalizationService"], },
        { type: __WEBPACK_IMPORTED_MODULE_6__upload_service__["UploadService"], },
    ]; };
    FileListSingleItemComponent.propDecorators = {
        'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'file': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'async': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
    };
    return FileListSingleItemComponent;
}(__WEBPACK_IMPORTED_MODULE_4__file_list_item_base__["FileListItemBase"]));



/***/ }),

/***/ "./node_modules/@progress/kendo-angular-upload/dist/es/file-list.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileListComponent", function() { return FileListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__file_info__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/file-info.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__file_list_item__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/file-list-item.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navigation_service__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/navigation.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__upload_service__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/upload.service.js");
/* tslint:disable:component-selector */





/**
 * @hidden
 */
var FileListComponent = /** @class */ (function () {
    function FileListComponent(uploadService, navigation) {
        this.uploadService = uploadService;
        this.navigation = navigation;
        this.onItemFocus();
        this.onItemAction();
    }
    FileListComponent.prototype.onItemFocus = function () {
        var _this = this;
        this.focusSubscription = this.navigation.onFileFocus.subscribe(function (index) {
            _this.fileListItems.toArray()[index].focus();
        });
    };
    FileListComponent.prototype.onItemAction = function () {
        var _this = this;
        this.actionSubscription = this.navigation.onFileAction.subscribe(function (key) {
            _this.itemActionHandler(key);
        });
    };
    FileListComponent.prototype.itemActionHandler = function (key) {
        var index = this.navigation.focusedIndex;
        var item = this.fileListItems.toArray()[index];
        var uid = item.uidAttribute;
        var files = this.uploadService.files.get(uid);
        if (key === __WEBPACK_IMPORTED_MODULE_3__navigation_service__["Keys"].esc && files[0].state === __WEBPACK_IMPORTED_MODULE_1__file_info__["FileState"].Uploading) {
            this.uploadService.cancelFiles(uid);
            this.navigation.focusSelectButton();
            return;
        }
        if (key === __WEBPACK_IMPORTED_MODULE_3__navigation_service__["Keys"].enter && files[0].state === __WEBPACK_IMPORTED_MODULE_1__file_info__["FileState"].Failed) {
            this.uploadService.retryFiles(uid, this.async);
            return;
        }
        if (key === __WEBPACK_IMPORTED_MODULE_3__navigation_service__["Keys"].delete) {
            if (files[0].state === __WEBPACK_IMPORTED_MODULE_1__file_info__["FileState"].Uploading) {
                this.uploadService.cancelFiles(uid);
            }
            else if (this.hasDelete(item)) {
                this.uploadService.removeFiles(uid, this.async);
            }
            this.navigation.focusSelectButton();
        }
    };
    FileListComponent.prototype.hasDelete = function (item) {
        return item.element.nativeElement.getElementsByClassName('k-delete').length > 0;
    };
    FileListComponent.prototype.ngOnDestroy = function () {
        this.focusSubscription.unsubscribe();
        this.actionSubscription.unsubscribe();
    };
    FileListComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: '[kendo-upload-file-list]',
                    template: "\n    <ng-template ngFor\n      [ngForOf]=\"fileList\"\n      let-files\n      let-index=\"index\">\n      <li kendoUploadFileListItem [files]='files' [index]='index'>\n          <kendo-upload-file-list-single-item\n            class='k-file-single'\n            *ngIf='files.length === 1 && !fileTemplate'\n            [disabled]='disabled'\n            [file]='files[0]'\n            [async]='async'>\n          </kendo-upload-file-list-single-item>\n          <kendo-upload-file-list-multiple-items\n            class='k-file-multiple'\n            *ngIf='files.length > 1 && !fileTemplate'\n            [disabled]='disabled'\n            [files]='files'\n            [async]='async'>\n          </kendo-upload-file-list-multiple-items>\n          <ng-template *ngIf=\"fileTemplate\"\n              [templateContext]=\"{\n                templateRef: fileTemplate.templateRef,\n                state: files[0].state,\n                $implicit: files\n              }\"></ng-template>\n      </li>\n    </ng-template>\n    "
                },] },
    ];
    /** @nocollapse */
    FileListComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_4__upload_service__["UploadService"], },
        { type: __WEBPACK_IMPORTED_MODULE_3__navigation_service__["NavigationService"], },
    ]; };
    FileListComponent.propDecorators = {
        'async': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'fileList': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'fileTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'fileListItems': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"], args: [__WEBPACK_IMPORTED_MODULE_2__file_list_item__["FileListItemDirective"],] },],
    };
    return FileListComponent;
}());



/***/ }),

/***/ "./node_modules/@progress/kendo-angular-upload/dist/es/file-map.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileMap", function() { return FileMap; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__file_info__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/file-info.js");

/**
 * @hidden
 */
var FileMap = /** @class */ (function () {
    function FileMap() {
        this._files = {};
    }
    FileMap.prototype.add = function (file) {
        var uid = file.uid;
        if (this.has(uid)) {
            if (file.validationErrors && file.validationErrors.length > 0) {
                this._files[uid].unshift(file);
            }
            else {
                this._files[uid].push(file);
            }
        }
        else {
            this._files[uid] = [file];
        }
    };
    FileMap.prototype.remove = function (uid) {
        if (this.has(uid)) {
            this._files[uid] = null;
            delete this._files[uid];
        }
    };
    FileMap.prototype.clear = function () {
        var allFiles = this._files;
        for (var uid in allFiles) {
            if (allFiles.hasOwnProperty(uid)) {
                for (var _i = 0, _a = allFiles[uid]; _i < _a.length; _i++) {
                    var file = _a[_i];
                    if (file.httpSubscription) {
                        file.httpSubscription.unsubscribe();
                    }
                }
                allFiles[uid] = null;
                delete allFiles[uid];
            }
        }
    };
    FileMap.prototype.has = function (uid) {
        return uid in this._files;
    };
    FileMap.prototype.get = function (uid) {
        return this._files[uid];
    };
    FileMap.prototype.setFilesState = function (files, state) {
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            this.get(file.uid).forEach(function (f) {
                f.state = state;
            });
        }
    };
    Object.defineProperty(FileMap.prototype, "count", {
        get: function () {
            return Object.getOwnPropertyNames(this._files).length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileMap.prototype, "files", {
        get: function () {
            var initial = this._files;
            var transformed = [];
            for (var uid in initial) {
                if (initial.hasOwnProperty(uid)) {
                    transformed.push(initial[uid]);
                }
            }
            return transformed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileMap.prototype, "filesFlat", {
        get: function () {
            var initial = this._files;
            var transformed = [];
            for (var uid in initial) {
                if (initial.hasOwnProperty(uid)) {
                    var current = initial[uid];
                    current.forEach(function (file) {
                        transformed.push(file);
                    });
                }
            }
            return transformed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileMap.prototype, "filesToUpload", {
        get: function () {
            var files = this._files;
            var notUploaded = [];
            for (var uid in files) {
                if (files.hasOwnProperty(uid)) {
                    var currentFiles = files[uid];
                    var currentFilesValid = true;
                    for (var _i = 0, currentFiles_1 = currentFiles; _i < currentFiles_1.length; _i++) {
                        var file = currentFiles_1[_i];
                        if (file.state !== __WEBPACK_IMPORTED_MODULE_0__file_info__["FileState"].Selected ||
                            (file.validationErrors && file.validationErrors.length > 0)) {
                            currentFilesValid = false;
                        }
                    }
                    if (currentFilesValid) {
                        notUploaded.push(currentFiles);
                    }
                }
            }
            return notUploaded;
        },
        enumerable: true,
        configurable: true
    });
    FileMap.prototype.hasFileWithState = function (fileStates) {
        var files = this._files;
        for (var uid in files) {
            if (files.hasOwnProperty(uid)) {
                var currentFiles = files[uid];
                for (var _i = 0, currentFiles_2 = currentFiles; _i < currentFiles_2.length; _i++) {
                    var file = currentFiles_2[_i];
                    if (fileStates.indexOf(file.state) >= 0) {
                        return true;
                    }
                }
            }
        }
        return false;
    };
    return FileMap;
}());



/***/ }),

/***/ "./node_modules/@progress/kendo-angular-upload/dist/es/file-select.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileSelectDirective", function() { return FileSelectDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__upload_service__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/upload.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navigation_service__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/navigation.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validation_util__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/validation-util.js");





/**
 * @hidden
 */
var FileSelectDirective = /** @class */ (function () {
    function FileSelectDirective(uploadService, navigation, el) {
        this.uploadService = uploadService;
        this.navigation = navigation;
        this.type = "file";
        this.autocomplete = "off";
        this.tabIndex = -1;
        this.element = el;
    }
    Object.defineProperty(FileSelectDirective.prototype, "nameAttribute", {
        get: function () {
            return this.async.saveField;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileSelectDirective.prototype, "multipleAttribute", {
        get: function () {
            return this.multiple ? "multiple" : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileSelectDirective.prototype, "dirAttribute", {
        get: function () {
            return this.dir;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileSelectDirective.prototype, "disabledAttribute", {
        get: function () {
            return this.disabled ? "true" : null;
        },
        enumerable: true,
        configurable: true
    });
    FileSelectDirective.prototype.onInputChange = function (event) {
        var _this = this;
        var ua = navigator.userAgent;
        var chrome = /(chrome)[ \/]([\w.]+)/i;
        var safari = /(webkit)[ \/]([\w.]+)/i;
        var selectedFiles = __WEBPACK_IMPORTED_MODULE_3__util__["default"].inputFiles(event.target);
        selectedFiles = __WEBPACK_IMPORTED_MODULE_3__util__["default"].assignGuidToFiles(selectedFiles, !this.async.batch);
        __WEBPACK_IMPORTED_MODULE_4__validation_util__["default"].validateFiles(selectedFiles, this.restrictions);
        if (!this.multiple) {
            this.uploadService.clearFiles();
        }
        this.uploadService.addFiles(selectedFiles, this.async);
        /*
        Chrome and Internet Explorer do not trigger a `change` event
        when a file with the same name is selected a number of consecutive times.
        As a workaround, clear the input value after handling the file.
        */
        var native = this.element.nativeElement;
        if (!(!ua.match(chrome) && ua.match(safari))) {
            native.type = "";
            native.type = "file";
        }
        setTimeout(function () {
            _this.navigation.focusedIndex = -1;
        });
    };
    FileSelectDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[kendoFileSelect]'
                },] },
    ];
    /** @nocollapse */
    FileSelectDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__upload_service__["UploadService"], },
        { type: __WEBPACK_IMPORTED_MODULE_2__navigation_service__["NavigationService"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    ]; };
    FileSelectDirective.propDecorators = {
        'async': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'dir': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'multiple': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'restrictions': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'type': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ["attr.type",] },],
        'autocomplete': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ["attr.autocomplete",] },],
        'tabIndex': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ["attr.tabIndex",] },],
        'nameAttribute': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ["attr.name",] },],
        'multipleAttribute': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ["attr.multiple",] },],
        'dirAttribute': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ["attr.dir",] },],
        'disabledAttribute': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ["attr.disabled",] },],
        'onInputChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ["change", ["$event"],] },],
    };
    return FileSelectDirective;
}());



/***/ }),

/***/ "./node_modules/@progress/kendo-angular-upload/dist/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/main.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "UploadModule", function() { return __WEBPACK_IMPORTED_MODULE_0__main__["UploadModule"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__file_list_item__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/file-list-item.js");
/* unused harmony reexport ɵe */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__file_list_item_base__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/file-list-item-base.js");
/* unused harmony reexport ɵg */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__localization_localized_messages_directive__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/localization/localized-messages.directive.js");
/* unused harmony reexport ɵh */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__localization_messages__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/localization/messages.js");
/* unused harmony reexport ɵc */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navigation_service__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/navigation.service.js");
/* unused harmony reexport ɵf */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__upload_events__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/upload-events.js");
/* unused harmony reexport ɵb */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__upload_component__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/upload.component.js");
/* unused harmony reexport ɵa */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__upload_service__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/upload.service.js");
/* unused harmony reexport ɵd */
/**
 * Generated bundle index. Do not edit.
 */











/***/ }),

/***/ "./node_modules/@progress/kendo-angular-upload/dist/es/localization/custom-messages.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomMessagesComponent", function() { return CustomMessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messages__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/localization/messages.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_l10n__ = __webpack_require__("./node_modules/@progress/kendo-angular-l10n/dist/es/index.js");




/**
 * Custom component messages override default component messages.
 */
var CustomMessagesComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](CustomMessagesComponent, _super);
    function CustomMessagesComponent(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        return _this;
    }
    Object.defineProperty(CustomMessagesComponent.prototype, "override", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    CustomMessagesComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"], args: [{
                    providers: [
                        {
                            provide: __WEBPACK_IMPORTED_MODULE_2__messages__["Messages"],
                            useExisting: Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return CustomMessagesComponent; }) // tslint:disable-line:no-forward-ref
                        }
                    ],
                    selector: 'kendo-upload-messages',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    CustomMessagesComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_l10n__["LocalizationService"], },
    ]; };
    return CustomMessagesComponent;
}(__WEBPACK_IMPORTED_MODULE_2__messages__["Messages"]));



/***/ }),

/***/ "./node_modules/@progress/kendo-angular-upload/dist/es/localization/localized-messages.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalizedMessagesDirective", function() { return LocalizedMessagesDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messages__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/localization/messages.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_l10n__ = __webpack_require__("./node_modules/@progress/kendo-angular-l10n/dist/es/index.js");




/**
 * @hidden
 */
var LocalizedMessagesDirective = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](LocalizedMessagesDirective, _super);
    function LocalizedMessagesDirective(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        return _this;
    }
    LocalizedMessagesDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{
                    providers: [
                        {
                            provide: __WEBPACK_IMPORTED_MODULE_2__messages__["Messages"],
                            useExisting: Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return LocalizedMessagesDirective; }) // tslint:disable-line:no-forward-ref
                        }
                    ],
                    selector: '[kendoUploadLocalizedMessages]'
                },] },
    ];
    /** @nocollapse */
    LocalizedMessagesDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_l10n__["LocalizationService"], },
    ]; };
    return LocalizedMessagesDirective;
}(__WEBPACK_IMPORTED_MODULE_2__messages__["Messages"]));



/***/ }),

/***/ "./node_modules/@progress/kendo-angular-upload/dist/es/localization/messages.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Messages", function() { return Messages; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progress_kendo_angular_l10n__ = __webpack_require__("./node_modules/@progress/kendo-angular-l10n/dist/es/index.js");



/**
 * @hidden
 */
var Messages = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](Messages, _super);
    function Messages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Messages.propDecorators = {
        'cancel': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'clearSelectedFiles': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'dropFilesHere': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'headerStatusUploaded': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'headerStatusUploading': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'invalidFileExtension': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'invalidFiles': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'invalidMaxFileSize': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'invalidMinFileSize': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'remove': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'retry': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'select': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'uploadSelectedFiles': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
    };
    return Messages;
}(__WEBPACK_IMPORTED_MODULE_2__progress_kendo_angular_l10n__["ComponentMessages"]));



/***/ }),

/***/ "./node_modules/@progress/kendo-angular-upload/dist/es/main.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__upload_module__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/upload.module.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UploadModule", function() { return __WEBPACK_IMPORTED_MODULE_0__upload_module__["UploadModule"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__upload_component__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/upload.component.js");
/* unused harmony reexport UploadComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__file_select_directive__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/file-select.directive.js");
/* unused harmony reexport FileSelectDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__file_list_component__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/file-list.component.js");
/* unused harmony reexport FileListComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__file_list_single_item_component__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/file-list-single-item.component.js");
/* unused harmony reexport FileListSingleItemComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__file_list_item_action_button_component__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/file-list-item-action-button.component.js");
/* unused harmony reexport FileListItemActionButtonComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__file_list_multiple_items_component__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/file-list-multiple-items.component.js");
/* unused harmony reexport FileListMultipleItemsComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__templates_file_template_directive__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/templates/file-template.directive.js");
/* unused harmony reexport FileTemplateDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__templates_template_context_directive__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/templates/template-context.directive.js");
/* unused harmony reexport TemplateContextDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__upload_status_total_component__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/upload-status-total.component.js");
/* unused harmony reexport UploadStatusTotalComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__upload_action_buttons_component__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/upload-action-buttons.component.js");
/* unused harmony reexport UploadActionButtonsComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__file_info__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/file-info.js");
/* unused harmony reexport FileState */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dropzone_directive__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/dropzone.directive.js");
/* unused harmony reexport DropZoneDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__localization_custom_messages_component__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/localization/custom-messages.component.js");
/* unused harmony reexport CustomMessagesComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__upload_events__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/upload-events.js");
/* unused harmony reexport CancelEvent */
/* unused harmony reexport ClearEvent */
/* unused harmony reexport ErrorEvent */
/* unused harmony reexport RemoveEvent */
/* unused harmony reexport SelectEvent */
/* unused harmony reexport SuccessEvent */
/* unused harmony reexport UploadEvent */
/* unused harmony reexport UploadProgressEvent */

















/***/ }),

/***/ "./node_modules/@progress/kendo-angular-upload/dist/es/navigation.service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Keys", function() { return Keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationService", function() { return NavigationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__upload_service__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/upload.service.js");


/**
 * @hidden
 */
var Keys;
(function (Keys) {
    Keys[Keys["esc"] = 27] = "esc";
    Keys[Keys["tab"] = 9] = "tab";
    Keys[Keys["enter"] = 13] = "enter";
    Keys[Keys["space"] = 32] = "space";
    Keys[Keys["shift"] = 16] = "shift";
    Keys[Keys["delete"] = 46] = "delete";
    Keys[Keys["left"] = 37] = "left";
    Keys[Keys["up"] = 38] = "up";
    Keys[Keys["right"] = 39] = "right";
    Keys[Keys["down"] = 40] = "down";
})(Keys || (Keys = {}));
/**
 * @hidden
 */
var NavigationService = /** @class */ (function () {
    function NavigationService(uploadService) {
        this.uploadService = uploadService;
        this.onActionButtonAction = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onActionButtonFocus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onFileAction = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onFileFocus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onTab = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onWrapperFocus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onSelectButtonFocus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.actionButtonsVisible = false;
        this.focused = false;
        this._focusedIndex = -1;
    }
    NavigationService.prototype.action = function (event) {
        var key = event.keyCode;
        return this.keyBindings[key];
    };
    NavigationService.prototype.process = function (event) {
        var handler = this.action(event);
        if (handler) {
            handler(event.shiftKey);
        }
    };
    NavigationService.prototype.computeKeys = function (direction) {
        var _this = this;
        this.keyBindings = (_a = {},
            _a[Keys.enter] = function () { return _this.handleEnter(); },
            _a[Keys.esc] = function () { return _this.handleEscape(); },
            _a[Keys.delete] = function () { return _this.handleDelete(); },
            _a[Keys.tab] = function (shifted) { return _this.handleTab(shifted); },
            _a[Keys.up] = function () { return _this.handleUp(); },
            _a[Keys.down] = function () { return _this.handleDown(); },
            _a[this.invertKeys(direction, Keys.left, Keys.right)] = function () { return _this.handleLeft(); },
            _a[this.invertKeys(direction, Keys.right, Keys.left)] = function () { return _this.handleRight(); },
            _a);
        var _a;
    };
    NavigationService.prototype.invertKeys = function (direction, original, inverted) {
        return direction === 'rtl' ? inverted : original;
    };
    NavigationService.prototype.focusSelectButton = function () {
        this.focused = true;
        this._focusedIndex = -1;
        this.onSelectButtonFocus.emit();
    };
    NavigationService.prototype.handleEnter = function () {
        if (this.lastIndex >= 0) {
            if (this.focusedIndex <= this.lastFileIndex) {
                this.onFileAction.emit(Keys.enter);
                return;
            }
            if (this.actionButtonsVisible && this.focusedIndex <= this.lastIndex) {
                this.onActionButtonAction.emit(this.focusedIndex < this.lastIndex ? "clear" : "upload");
            }
        }
    };
    NavigationService.prototype.handleDelete = function () {
        if (this.focusedIndex >= 0 && this.focusedIndex <= this.lastFileIndex) {
            this.onFileAction.emit(Keys.delete);
        }
    };
    NavigationService.prototype.handleEscape = function () {
        if (this.focusedIndex >= 0 && this.focusedIndex <= this.lastFileIndex) {
            this.onFileAction.emit(Keys.esc);
        }
    };
    NavigationService.prototype.handleLeft = function () {
        if (this.actionButtonsVisible && this.focusedIndex === this.lastIndex) {
            this.focusedIndex -= 1;
            this.onActionButtonFocus.emit("clear");
        }
    };
    NavigationService.prototype.handleRight = function () {
        if (this.actionButtonsVisible && this.focusedIndex === this.lastIndex - 1) {
            this.focusedIndex += 1;
            this.onActionButtonFocus.emit("upload");
        }
    };
    NavigationService.prototype.handleTab = function (shifted) {
        if (this.focusedIndex >= 0 && shifted) {
            this.focusedIndex = -1;
            return;
        }
        this.onTab.emit();
    };
    NavigationService.prototype.handleDown = function () {
        if (this.lastIndex >= 0 && this.focusedIndex < this.lastIndex) {
            if (this.focusedIndex < this.lastFileIndex) {
                this.focusedIndex += 1;
                this.onFileFocus.emit(this.focusedIndex);
                return;
            }
            if (this.actionButtonsVisible && this.focusedIndex === this.lastFileIndex) {
                this.focusedIndex += 1;
                this.onActionButtonFocus.emit("clear");
            }
        }
    };
    NavigationService.prototype.handleUp = function () {
        if (this.lastIndex >= 0 && this.focusedIndex > -1) {
            this.focusedIndex -= 1;
            if (this.focusedIndex === -1) {
                this.onSelectButtonFocus.emit();
                return;
            }
            if (this.focusedIndex <= this.lastFileIndex) {
                this.onFileFocus.emit(this.focusedIndex);
                return;
            }
            if (this.actionButtonsVisible && this.focusedIndex <= this.lastIndex) {
                this.focusedIndex = this.lastFileIndex;
                this.onFileFocus.emit(this.focusedIndex);
            }
        }
    };
    Object.defineProperty(NavigationService.prototype, "focusedIndex", {
        get: function () {
            return this._focusedIndex;
        },
        set: function (index) {
            if (!this.focused) {
                this.onWrapperFocus.emit();
            }
            this._focusedIndex = index;
            this.focused = true;
            if (this._focusedIndex >= 0 && this._focusedIndex <= this.lastFileIndex) {
                this.onFileFocus.emit(index);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigationService.prototype, "lastFileIndex", {
        get: function () {
            return this.actionButtonsVisible ? this.lastIndex - 2 : this.lastIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigationService.prototype, "lastIndex", {
        get: function () {
            var fileCount = this.uploadService.files.count;
            return this.actionButtonsVisible ? fileCount + 1 : fileCount - 1;
        },
        enumerable: true,
        configurable: true
    });
    NavigationService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    NavigationService.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__upload_service__["UploadService"], },
    ]; };
    return NavigationService;
}());



/***/ }),

/***/ "./node_modules/@progress/kendo-angular-upload/dist/es/templates/file-template.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileTemplateDirective", function() { return FileTemplateDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

/**
 * Used to customize the rendering of the files in the list ([see example]({% slug templates_upload %})).
 */
var FileTemplateDirective = /** @class */ (function () {
    function FileTemplateDirective(templateRef) {
        this.templateRef = templateRef;
    }
    FileTemplateDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[kendoUploadFileTemplate]' // tslint:disable-line:directive-selector-prefix
                },] },
    ];
    /** @nocollapse */
    FileTemplateDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"], },
    ]; };
    return FileTemplateDirective;
}());



/***/ }),

/***/ "./node_modules/@progress/kendo-angular-upload/dist/es/templates/template-context.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateContextDirective", function() { return TemplateContextDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

/**
 * @hidden
 */
var TemplateContextDirective = /** @class */ (function () {
    function TemplateContextDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    Object.defineProperty(TemplateContextDirective.prototype, "templateContext", {
        set: function (context) {
            if (this.insertedViewRef) {
                this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.insertedViewRef));
                this.insertedViewRef = undefined;
            }
            if (context.templateRef) {
                this.insertedViewRef = this.viewContainerRef.createEmbeddedView(context.templateRef, context);
            }
        },
        enumerable: true,
        configurable: true
    });
    TemplateContextDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[templateContext]' // tslint:disable-line:directive-selector
                },] },
    ];
    /** @nocollapse */
    TemplateContextDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
    ]; };
    TemplateContextDirective.propDecorators = {
        'templateContext': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return TemplateContextDirective;
}());



/***/ }),

/***/ "./node_modules/@progress/kendo-angular-upload/dist/es/upload-action-buttons.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadActionButtonsComponent", function() { return UploadActionButtonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__upload_service__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/upload.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progress_kendo_angular_l10n__ = __webpack_require__("./node_modules/@progress/kendo-angular-l10n/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navigation_service__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/navigation.service.js");




/**
 * @hidden
 */
var UploadActionButtonsComponent = /** @class */ (function () {
    function UploadActionButtonsComponent(uploadService, localization, navigation) {
        this.uploadService = uploadService;
        this.localization = localization;
        this.navigation = navigation;
        this.onAction();
        this.onFocus();
    }
    UploadActionButtonsComponent.prototype.onAction = function () {
        var _this = this;
        this.actionSubscription = this.navigation.onActionButtonAction.subscribe(function (button) {
            if (button === "clear") {
                _this.clearFiles();
            }
            else {
                _this.performUpload();
            }
            _this.navigation.focusSelectButton();
        });
    };
    UploadActionButtonsComponent.prototype.onFocus = function () {
        var _this = this;
        this.focusSubscription = this.navigation.onActionButtonFocus.subscribe(function (button) {
            _this.focusButton(button);
        });
    };
    UploadActionButtonsComponent.prototype.focusButton = function (button) {
        var el = (button === "clear") ? this.clearButton : this.uploadButton;
        el.nativeElement.focus();
    };
    UploadActionButtonsComponent.prototype.ngOnDestroy = function () {
        this.actionSubscription.unsubscribe();
        this.focusSubscription.unsubscribe();
    };
    UploadActionButtonsComponent.prototype.performUpload = function (_event) {
        if (!this.disabled) {
            this.uploadService.uploadFiles(this.async);
        }
    };
    UploadActionButtonsComponent.prototype.clearFiles = function (_event) {
        if (!this.disabled) {
            this.uploadService.clearFiles();
        }
    };
    UploadActionButtonsComponent.prototype.textFor = function (key) {
        return this.localization.get(key);
    };
    Object.defineProperty(UploadActionButtonsComponent.prototype, "className", {
        get: function () {
            return 'k-action-buttons';
        },
        enumerable: true,
        configurable: true
    });
    UploadActionButtonsComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'kendo-upload-action-buttons',
                    template: "\n        <button #clearButton type=\"button\" class=\"k-button k-clear-selected\"\n            [attr.tabIndex]=\"-1\"\n            (click)=\"clearFiles($event)\">\n                {{textFor('clearSelectedFiles')}}\n        </button>\n        <button #uploadButton type=\"button\" class=\"k-button k-primary k-upload-selected\"\n            [attr.tabIndex]=\"-1\"\n            (click)=\"performUpload($event)\">\n                {{textFor('uploadSelectedFiles')}}\n        </button>\n    "
                },] },
    ];
    /** @nocollapse */
    UploadActionButtonsComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__upload_service__["UploadService"], },
        { type: __WEBPACK_IMPORTED_MODULE_2__progress_kendo_angular_l10n__["LocalizationService"], },
        { type: __WEBPACK_IMPORTED_MODULE_3__navigation_service__["NavigationService"], },
    ]; };
    UploadActionButtonsComponent.propDecorators = {
        'async': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'fileList': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'clearButton': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: ['clearButton',] },],
        'uploadButton': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: ['uploadButton',] },],
        'className': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class',] },],
    };
    return UploadActionButtonsComponent;
}());



/***/ }),

/***/ "./node_modules/@progress/kendo-angular-upload/dist/es/upload-events.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PreventableEvent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelEvent", function() { return CancelEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearEvent", function() { return ClearEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorEvent", function() { return ErrorEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveEvent", function() { return RemoveEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectEvent", function() { return SelectEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessEvent", function() { return SuccessEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadEvent", function() { return UploadEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadProgressEvent", function() { return UploadProgressEvent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");

/**
 * @hidden
 */
var PreventableEvent = /** @class */ (function () {
    function PreventableEvent() {
        this.prevented = false;
    }
    /**
     * Prevents the default action for a specified event.
     * In this way, the source component suppresses the built-in behavior that follows the event.
     */
    PreventableEvent.prototype.preventDefault = function () {
        this.prevented = true;
    };
    /**
     * If the event is prevented by any of its subscribers, returns `true`.
     *
     * @returns `true` if the default action was prevented. Otherwise, returns `false`.
     */
    PreventableEvent.prototype.isDefaultPrevented = function () {
        return this.prevented;
    };
    return PreventableEvent;
}());

/**
 * Fires when the user cancels the process of uploading a file or a batch of files.
 *
 * ```ts-no-run
 *  @Component({
 *    selector: 'my-upload',
 *    template: `
 *    <p>Click the <span class='k-icon k-i-cancel'></span> icon during upload to trigger the event</p>
 *    <kendo-upload
 *      [saveUrl]="uploadSaveUrl"
 *      [removeUrl]="uploadRemoveUrl"
 *      (cancel)="cancelEventHandler($event)">
 *    </kendo-upload>
 *    `
 *  })
 *  export class UploadComponent {
 *    uploadSaveUrl = 'saveUrl'; // should represent an actual API endpoint
 *    uploadRemoveUrl = 'removeUrl'; // should represent an actual API endpoint
 *
 *    cancelEventHandler(e: CancelEvent) {
 *      console.log('Canceling file upload', e.files);
 *    }
 *  }
 * ```
 *
 * Arguments for the `cancel` event:
 */
var CancelEvent = /** @class */ (function () {
    /**
     * Constructs the event arguments for the `cancel` event.
     * @param files - The list of the files that were going to be uploaded.
     */
    function CancelEvent(files) {
        this.files = files;
    }
    return CancelEvent;
}());

/**
 * Fires when the **Clear** button is clicked. At this point, the selected files are about to be cleared.
 *
 * ```ts-no-run
 *  @Component({
 *    selector: 'my-upload',
 *    template: `
 *    <kendo-upload
 *      [autoUpload]="false"
 *      [saveUrl]="uploadSaveUrl"
 *      [removeUrl]="uploadRemoveUrl"
 *      (clear)="clearEventHandler($event)">
 *    </kendo-upload>
 *    `
 *  })
 *  export class UploadComponent {
 *    uploadSaveUrl = 'saveUrl'; // should represent an actual API endpoint
 *    uploadRemoveUrl = 'removeUrl'; // should represent an actual API endpoint
 *
 *    clearEventHandler(e: ClearEvent) {
 *      console.log('Clearing the file upload');
 *    }
 *  }
 * ```
 *
 */
var ClearEvent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](ClearEvent, _super);
    /**
     * Constructs the event arguments for the `clear` event.
     */
    function ClearEvent() {
        return _super.call(this) || this;
    }
    return ClearEvent;
}(PreventableEvent));

/**
 * Fires when an `upload` or `remove` operation fails.
 *
 * ```ts-no-run
 *  @Component({
 *    selector: 'my-upload',
 *    template: `
 *    <kendo-upload
 *      [saveUrl]="uploadSaveUrl"
 *      [removeUrl]="uploadRemoveUrl"
 *      (error)="errorEventHandler($event)">
 *    </kendo-upload>
 *    `
 *  })
 *  export class UploadComponent {
 *    uploadSaveUrl = 'saveUrl'; // should represent an actual API endpoint
 *    uploadRemoveUrl = 'removeUrl'; // should represent an actual API endpoint
 *
 *    errorEventHandler(e: ErrorEvent) {
 *      console.log('An error occurred');
 *    }
 *  }
 * ```
 *
 * Arguments for the `error` event:
 */
var ErrorEvent = /** @class */ (function () {
    /**
     * Constructs the event arguments for the `error` event.
     *
     * @param files - The list of the files that failed to be uploaded or removed.
     * @param operation - The operation type (`upload` or `remove`).
     * @param response - The response object returned by the server.
     */
    function ErrorEvent(files, operation, response) {
        this.files = files;
        this.operation = operation;
        this.response = response;
    }
    return ErrorEvent;
}());

/**
 * Fires when an uploaded or selected file will be removed. If you cancel the event, the removal is prevented.
 *
 * ```ts-no-run
 *  @Component({
 *    selector: 'my-upload',
 *    template: `
 *    <kendo-upload
 *      [saveUrl]="uploadSaveUrl"
 *      [removeUrl]="uploadRemoveUrl"
 *      (remove)="removeEventHandler($event)">
 *    </kendo-upload>
 *    `
 *  })
 *  export class UploadComponent {
 *    uploadSaveUrl = 'saveUrl'; // should represent an actual API endpoint
 *    uploadRemoveUrl = 'removeUrl'; // should represent an actual API endpoint
 *
 *    removeEventHandler(e: RemoveEvent) {
 *      console.log('Removing a file');
 *    }
 *  }
 * ```
 *
 * Arguments for the `remove` event:
 */
var RemoveEvent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](RemoveEvent, _super);
    /**
     * Constructs the event arguments for the `remove` event.
     * @param files - The list of the files that will be removed.
     * @param headers - The headers of the request.
     */
    function RemoveEvent(files, headers) {
        var _this = _super.call(this) || this;
        _this.files = files;
        _this.headers = headers;
        return _this;
    }
    return RemoveEvent;
}(PreventableEvent));

/**
 * Fires when the user selects a file or multiple files for upload. If you cancel the event, the selection is prevented.
 *
 * ```ts-no-run
 *  @Component({
 *    selector: 'my-upload',
 *    template: `
 *    <kendo-upload
 *      [saveUrl]="uploadSaveUrl"
 *      [removeUrl]="uploadRemoveUrl"
 *      (select)="selectEventHandler($event)">
 *    </kendo-upload>
 *    `
 *  })
 *  export class UploadComponent {
 *    uploadSaveUrl = 'saveUrl'; // should represent an actual API endpoint
 *    uploadRemoveUrl = 'removeUrl'; // should represent an actual API endpoint
 *
 *    selectEventHandler(e: SelectEvent) {
 *      console.log('File selected');
 *    }
 *  }
 * ```
 *
 * Arguments for the `select` event:
 */
var SelectEvent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](SelectEvent, _super);
    /**
     * Constructs the event arguments for the `select` event.
     * @param files - The list of the selected files.
     */
    function SelectEvent(files) {
        var _this = _super.call(this) || this;
        _this.files = files;
        return _this;
    }
    return SelectEvent;
}(PreventableEvent));

/**
 * Fires when the selected files are successfully uploaded or removed.
 *
 * ```ts-no-run
 *  @Component({
 *    selector: 'my-upload',
 *    template: `
 *    <kendo-upload
 *      [saveUrl]="uploadSaveUrl"
 *      [removeUrl]="uploadRemoveUrl"
 *      (success)="successEventHandler($event)">
 *    </kendo-upload>
 *    `
 *  })
 *  export class UploadComponent {
 *    uploadSaveUrl = 'saveUrl'; // should represent an actual API endpoint
 *    uploadRemoveUrl = 'removeUrl'; // should represent an actual API endpoint
 *
 *    successEventHandler(e: SuccessEvent) {
 *      console.log('The ' + e.operation + ' was successful!');
 *    }
 *  }
 * ```
 *
 * Arguments for the `success` event:
 */
var SuccessEvent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](SuccessEvent, _super);
    /**
     * Constructs the event arguments for the `success` event.
     * @param files - The list of the files that were uploaded or removed.
     * @param operation - The operation type (`upload` or `remove`).
     * @param response - The response object returned by the server.
     */
    function SuccessEvent(files, operation, response) {
        var _this = _super.call(this) || this;
        _this.files = files;
        _this.operation = operation;
        _this.response = response;
        return _this;
    }
    return SuccessEvent;
}(PreventableEvent));

/**
 * Fires when one or more files will be uploaded. If you cancel the event, the upload is prevented.
 * You can add headers to the request.
 *
 * ```ts-no-run
 *  @Component({
 *    selector: 'my-upload',
 *    template: `
 *    <kendo-upload
 *      [saveUrl]="uploadSaveUrl"
 *      [removeUrl]="uploadRemoveUrl"
 *      (upload)="uploadEventHandler($event)">
 *    </kendo-upload>
 *    `
 *  })
 *  export class UploadComponent {
 *    uploadSaveUrl = 'saveUrl'; // should represent an actual API endpoint
 *    uploadRemoveUrl = 'removeUrl'; // should represent an actual API endpoint
 *
 *    uploadEventHandler(e: UploadEvent) {
 *      e.headers = e.headers.append('X-Foo', 'Bar');
 *    }
 *  }
 * ```
 *
 * Arguments for the `upload` event:
 */
var UploadEvent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](UploadEvent, _super);
    /**
     * Constructs the event arguments for the `upload` event.
     * @param files - The list of the files that will be uploaded.
     * @param headers - The headers of the request.
     */
    function UploadEvent(files, headers) {
        var _this = _super.call(this) || this;
        _this.files = files;
        _this.headers = headers;
        return _this;
    }
    return UploadEvent;
}(PreventableEvent));

/**
 * Fires while the files are being upload.
 *
 * ```ts-no-run
 *  @Component({
 *    selector: 'my-upload',
 *    template: `
 *    <kendo-upload
 *      [saveUrl]="uploadSaveUrl"
 *      [removeUrl]="uploadRemoveUrl"
 *      (uploadProgress)="uploadProgressEventHandler($event)">
 *    </kendo-upload>
 *    `
 *  })
 *  export class UploadComponent {
 *    uploadSaveUrl = 'saveUrl'; // should represent an actual API endpoint
 *    uploadRemoveUrl = 'removeUrl'; // should represent an actual API endpoint
 *
 *    uploadProgressEventHandler(e: UploadProgressEvent) {
 *      console.log(e.files[0].name + ' is ' + e.percentComplete + ' uploaded');
 *    }
 *  }
 * ```
 *
 * Arguments for the `uploadprogress` event:
 */
var UploadProgressEvent = /** @class */ (function () {
    /**
     * Constructs the event arguments for the `uploadprogress` event.
     * @param files - The list of files that are being uploaded.
     * @param percentComplete - The portion that has been uploaded.
     */
    function UploadProgressEvent(files, percentComplete) {
        this.files = files;
        this.percentComplete = percentComplete;
    }
    return UploadProgressEvent;
}());



/***/ }),

/***/ "./node_modules/@progress/kendo-angular-upload/dist/es/upload-status-total.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadStatusTotalComponent", function() { return UploadStatusTotalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__file_info__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/file-info.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progress_kendo_angular_l10n__ = __webpack_require__("./node_modules/@progress/kendo-angular-l10n/dist/es/index.js");



/**
 * @hidden
 */
var UploadStatusTotalComponent = /** @class */ (function () {
    function UploadStatusTotalComponent(localization) {
        this.localization = localization;
    }
    UploadStatusTotalComponent.prototype.ngDoCheck = function () {
        var currentlyUploading = this.fileList.hasFileWithState([__WEBPACK_IMPORTED_MODULE_1__file_info__["FileState"].Uploading]);
        if (this.isUploading !== currentlyUploading) {
            this.isUploading = currentlyUploading;
            this.isFailed = this.fileList.hasFileWithState([__WEBPACK_IMPORTED_MODULE_1__file_info__["FileState"].Failed]);
            this.statusText = this.isUploading ? this.localization.get('headerStatusUploading')
                : this.localization.get('headerStatusUploaded');
        }
    };
    /**
     * @hidden
     */
    UploadStatusTotalComponent.prototype.setStatusClasses = function () {
        return {
            "k-i-checkmark": !this.isUploading && !this.isFailed,
            "k-i-exception": !this.isUploading && this.isFailed,
            "k-i-loading": this.isUploading,
            "k-icon": true
        };
    };
    UploadStatusTotalComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'kendo-upload-status-total',
                    template: "\n        <strong\n          class=\"k-upload-status k-upload-status-total\">\n          <span [ngClass]=\"setStatusClasses()\"></span>\n          {{statusText}}\n        </strong>\n    "
                },] },
    ];
    /** @nocollapse */
    UploadStatusTotalComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__progress_kendo_angular_l10n__["LocalizationService"], },
    ]; };
    UploadStatusTotalComponent.propDecorators = {
        'fileList': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return UploadStatusTotalComponent;
}());



/***/ }),

/***/ "./node_modules/@progress/kendo-angular-upload/dist/es/upload.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export UPLOAD_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_fromEvent__ = __webpack_require__("./node_modules/rxjs/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_fromEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_filter__ = __webpack_require__("./node_modules/rxjs/operators/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_merge__ = __webpack_require__("./node_modules/rxjs/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__upload_service__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/upload.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__file_info__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/file-info.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__templates_file_template_directive__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/templates/file-template.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__navigation_service__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/navigation.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__progress_kendo_angular_l10n__ = __webpack_require__("./node_modules/@progress/kendo-angular-l10n/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__util__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/util.js");
/* tslint:disable: no-use-before-declare */












/**
 * @hidden
 */
var UPLOAD_VALUE_ACCESSOR = {
    multi: true,
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return UploadComponent; })
};
/**
 * Represents the Kendo UI Upload component for Angular.
 */
var UploadComponent = /** @class */ (function () {
    function UploadComponent(uploadService, localization, navigation, _ngZone, wrapper) {
        var _this = this;
        this.uploadService = uploadService;
        this.localization = localization;
        this.navigation = navigation;
        this._ngZone = _ngZone;
        /**
         * Enables the selection of multiple files.
         * If set to `false`, only one file can be selected at a time.
         */
        this.multiple = true;
        /**
         * Disables the Upload. The default value is `false`.
         */
        this.disabled = false;
        /**
         * Toggles the visibility of the file list.
         */
        this.showFileList = true;
        /**
         * Specifies the [`tabIndex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of the component.
         */
        this.tabIndex = 0;
        /**
         * @hidden
         */
        this.focusableId = "k-" + __WEBPACK_IMPORTED_MODULE_11__util__["default"].guid();
        /**
         * Fires when the user navigates outside the component.
         */
        this.blur = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Fires when the upload is canceled while in progress.
         */
        this.cancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Fires when the file list is about to be cleared. If prevented, the files will not be cleared.
         */
        this.clear = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Fires when all active uploads are completed either successfully or with errors.
         */
        this.complete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Fires when an `upload` or `remove` operation has failed.
         */
        this.error = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Fires when the component is focused.
         */
        this.focus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Fires when an uploaded file is about to be removed. If prevented, the files will remain in the list.
         */
        this.remove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Fires when files are selected. If prevented, the selected files will not be added to the list.
         */
        this.select = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Fires when an `upload` or `remove` operation is successfully completed.
         */
        this.success = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Fires when one or more files are about to be uploaded. If prevented, the files will neither be uploaded, nor added to the file list.
         */
        this.upload = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Fires when one or more files are being uploaded.
         */
        this.uploadProgress = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Fires when the value of the component has changed as a result of a successful `upload`, `remove` or `clear` operation.
         */
        this.valueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * @hidden
         */
        this.async = {
            autoUpload: true,
            batch: false,
            removeField: "fileNames",
            removeHeaders: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["HttpHeaders"](),
            removeMethod: "POST",
            removeUrl: "",
            responseType: "json",
            saveField: "files",
            saveHeaders: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["HttpHeaders"](),
            saveMethod: "POST",
            saveUrl: "",
            withCredentials: true
        };
        /**
         * @hidden
         */
        this._restrictions = {
            allowedExtensions: [],
            maxFileSize: 0,
            minFileSize: 0
        };
        this.onTouchedCallback = function (_) { };
        this.onChangeCallback = function (_) { };
        this.fileList = this.uploadService.files;
        this.localizationChangeSubscription = localization.changes.subscribe(function (_a) {
            var rtl = _a.rtl;
            _this.direction = rtl ? 'rtl' : 'ltr';
            _this.navigation.computeKeys(_this.direction);
        });
        this.direction = localization.rtl ? 'rtl' : 'ltr';
        this.navigation.computeKeys(this.direction);
        this.wrapper = wrapper.nativeElement;
        this.subscribeBlur();
        this.subscribeFocus();
        this.onCancel();
        this.onChange();
        this.onClear();
        this.onComplete();
        this.onError();
        this.onRemove();
        this.onSelect();
        this.onSuccess();
        this.onUpload();
        this.onUploadProgress();
    }
    Object.defineProperty(UploadComponent.prototype, "autoUpload", {
        get: function () { return this.async.autoUpload; },
        /**
         * By default, the selected files are immediately uploaded. To change this behavior, set `autoUpload` to `false`.
         */
        set: function (autoUpload) { this.async.autoUpload = autoUpload; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UploadComponent.prototype, "batch", {
        get: function () { return this.async.batch; },
        /**
         * When enabled, all files in the selection are uploaded in one request.
         * Any files that are selected one after the other are uploaded in separate requests.
         */
        set: function (batch) { this.async.batch = batch; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UploadComponent.prototype, "withCredentials", {
        get: function () { return this.async.withCredentials; },
        /**
         * Configures whether credentials (cookies, headers) will be sent for cross-site requests.
         * The default values is `true`.
         * Setting `withCredentials` has no effect on same-site requests.
         * To add credentials to the request, use the `saveHeaders` or `removeHeaders` property,
         * or the [`upload`]({% slug api_upload_uploadevent %}) event.
         */
        set: function (withCredentials) { this.async.withCredentials = withCredentials; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UploadComponent.prototype, "saveField", {
        get: function () { return this.async.saveField; },
        /**
         * Sets the [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) key which contains the files submitted to `saveUrl`.
         * The default value is `files`.
         */
        set: function (saveField) { this.async.saveField = saveField; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UploadComponent.prototype, "saveHeaders", {
        get: function () { return this.async.saveHeaders; },
        /**
         * Configures the [`HttpHeaders`](https://angular.io/api/common/http/HttpHeaders)
         * that are attached to each upload request.
         */
        set: function (saveHeaders) { this.async.saveHeaders = saveHeaders; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UploadComponent.prototype, "saveMethod", {
        get: function () { return this.async.saveMethod; },
        /**
         * Sets the [`RequestMethod`](https://angular.io/docs/ts/latest/api/http/index/RequestMethod-enum.html) of the upload request.
         * The default value is `POST`.
         */
        set: function (saveMethod) { this.async.saveMethod = saveMethod; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UploadComponent.prototype, "saveUrl", {
        get: function () { return this.async.saveUrl; },
        /**
         * Sets the URL of the endpoint for the upload request.
         * The request [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) key is named after the `saveField` property.
         * It contains the list of files to be uploaded.
         */
        set: function (saveUrl) { this.async.saveUrl = saveUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UploadComponent.prototype, "responseType", {
        get: function () { return this.async.responseType; },
        /**
         * Sets the expected [`response type`](https://angular.io/api/common/http/HttpRequest#responseType) of the server.
         * It is used to parse the response appropriately.
         * The default value is `json`.
         */
        set: function (responseType) { this.async.responseType = responseType; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UploadComponent.prototype, "removeField", {
        get: function () { return this.async.removeField; },
        /**
         * Sets the [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) key
         * which contains the list of file names that are submitted to `removeUrl`.
         * The default value is `fileNames`.
         */
        set: function (removeField) { this.async.removeField = removeField; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UploadComponent.prototype, "removeHeaders", {
        get: function () { return this.async.removeHeaders; },
        /**
         * Configures the [`HttpHeaders`](https://angular.io/api/common/http/HttpHeaders)
         * that are attached to each `remove` request.
         */
        set: function (removeHeaders) { this.async.removeHeaders = removeHeaders; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UploadComponent.prototype, "removeMethod", {
        get: function () { return this.async.removeMethod; },
        /**
         * Sets the [`RequestMethod`](https://angular.io/docs/ts/latest/api/http/index/RequestMethod-enum.html) of the `remove` request.
         * The default value is `POST`.
         */
        set: function (removeMethod) { this.async.removeMethod = removeMethod; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UploadComponent.prototype, "removeUrl", {
        get: function () { return this.async.removeUrl; },
        /**
         * Sets the URL of the endpoint for the `remove` request.
         * The [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) request key is named after the `removeField` property.
         * It contains the list of file names which will be removed.
         */
        set: function (removeUrl) { this.async.removeUrl = removeUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UploadComponent.prototype, "restrictions", {
        get: function () {
            return this._restrictions;
        },
        /**
         * Sets the restrictions for selected files. For more information,
         * refer to the API documentation on [`FileRestrictions`]({% slug api_upload_filerestrictions %}).
         */
        set: function (restrictions) {
            var parsedRestrictions = Object.assign({}, this._restrictions, restrictions);
            this._restrictions = parsedRestrictions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UploadComponent.prototype, "dir", {
        get: function () {
            return this.direction;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UploadComponent.prototype, "hostDefaultClasses", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UploadComponent.prototype, "hostDisabledClass", {
        get: function () {
            return this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    UploadComponent.prototype.ngOnDestroy = function () {
        this.fileList.clear();
        if (this.blurSubscription) {
            this.blurSubscription.unsubscribe();
        }
        if (this.wrapperFocusSubscription) {
            this.wrapperFocusSubscription.unsubscribe();
        }
        if (this.selectButtonFocusSubscription) {
            this.selectButtonFocusSubscription.unsubscribe();
        }
        if (this.cancelSubscription) {
            this.cancelSubscription.unsubscribe();
        }
        if (this.changeSubscription) {
            this.changeSubscription.unsubscribe();
        }
        if (this.clearSubscription) {
            this.clearSubscription.unsubscribe();
        }
        if (this.completeSubscription) {
            this.completeSubscription.unsubscribe();
        }
        if (this.errorSubscription) {
            this.errorSubscription.unsubscribe();
        }
        if (this.removeSubscription) {
            this.removeSubscription.unsubscribe();
        }
        if (this.selectSubscription) {
            this.selectSubscription.unsubscribe();
        }
        if (this.successSubscription) {
            this.successSubscription.unsubscribe();
        }
        if (this.successSubscription) {
            this.uploadSubscription.unsubscribe();
        }
        if (this.uploadProgressSubscription) {
            this.uploadProgressSubscription.unsubscribe();
        }
        if (this.localizationChangeSubscription) {
            this.localizationChangeSubscription.unsubscribe();
        }
    };
    /**
     * @hidden
     */
    UploadComponent.prototype.handleKeydown = function (event) {
        if (this.disabled) {
            return;
        }
        if ((event.keyCode === __WEBPACK_IMPORTED_MODULE_9__navigation_service__["Keys"].enter || event.keyCode === __WEBPACK_IMPORTED_MODULE_9__navigation_service__["Keys"].space) &&
            event.target === this.fileSelectButton.nativeElement) {
            event.preventDefault();
            this.fileSelect.nativeElement.click();
            return;
        }
        if (__WEBPACK_IMPORTED_MODULE_11__util__["default"].hasClasses(event.target, __WEBPACK_IMPORTED_MODULE_11__util__["default"].UPLOAD_CLASSES) ||
            (!__WEBPACK_IMPORTED_MODULE_11__util__["default"].isFocusable(event.target) && !__WEBPACK_IMPORTED_MODULE_11__util__["default"].hasClasses(event.target, __WEBPACK_IMPORTED_MODULE_11__util__["default"].IGNORE_TARGET_CLASSSES))) {
            this.navigation.process(event);
        }
    };
    /**
     * @hidden
     */
    UploadComponent.prototype.writeValue = function (newValue) {
        var isValid = true;
        if (newValue instanceof Array) {
            newValue.forEach(function (file) {
                if (!__WEBPACK_IMPORTED_MODULE_11__util__["default"].validateInitialFileInfo(file)) {
                    isValid = false;
                }
            });
            if (isValid) {
                this.uploadService.addInitialFiles(newValue);
            }
        }
    };
    /**
     * @hidden
     */
    UploadComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    /**
     * @hidden
     */
    UploadComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    /**
     * @hidden
     */
    UploadComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    /**
     * @hidden
     */
    UploadComponent.prototype.setSelectButtonClasses = function () {
        return {
            "k-button": true,
            "k-state-focused": this.fileSelectButton.nativeElement.focused,
            "k-upload-button": true
        };
    };
    /**
     * @hidden
     */
    UploadComponent.prototype.setSelectButtonTabIndex = function () {
        return this.disabled ? undefined : this.tabIndex;
    };
    /**
     * @hidden
     */
    UploadComponent.prototype.onFileSelectButtonFocus = function (_event) {
        if (!this.navigation.focused) {
            this.navigation.focusedIndex = -1;
        }
    };
    /**
     * @hidden
     */
    UploadComponent.prototype.showActionButtons = function () {
        var areVisible = this.fileList.filesToUpload.length > 0 && !this.async.autoUpload;
        this.navigation.actionButtonsVisible = areVisible;
        return areVisible;
    };
    /**
     * @hidden
     */
    UploadComponent.prototype.showTotalStatus = function () {
        var states = [
            __WEBPACK_IMPORTED_MODULE_7__file_info__["FileState"].Uploaded,
            __WEBPACK_IMPORTED_MODULE_7__file_info__["FileState"].Uploading,
            __WEBPACK_IMPORTED_MODULE_7__file_info__["FileState"].Failed
        ];
        if (this.fileList.count === 0) {
            return false;
        }
        if (this.fileList.hasFileWithState(states)) {
            return true;
        }
        return false;
    };
    /**
     * @hidden
     */
    UploadComponent.prototype.textFor = function (key) {
        return this.localization.get(key);
    };
    /**
     * Focuses the underlying input element.
     */
    UploadComponent.prototype.focusComponent = function () {
        var _this = this;
        setTimeout(function () {
            _this.fileSelectButton.nativeElement.focus();
        });
    };
    /**
     * Blurs the Upload if it was previously focused.
     */
    UploadComponent.prototype.blurComponent = function () {
        if (this.navigation.focused) {
            this.navigation.focused = false;
            document.activeElement.blur();
            this.blur.emit();
        }
    };
    /**
     * Triggers the removal of a file or a batch of files.
     * @param uid - The `uid` of the file or a batch of files that will be removed.
     */
    UploadComponent.prototype.removeFilesByUid = function (uid) {
        this.uploadService.removeFiles(uid, this.async);
    };
    /**
     * Triggers another upload attempt of an unsuccessfully uploaded file or a batch of files.
     * @param uid - The `uid` of the file or a batch of files to be retried.
     */
    UploadComponent.prototype.retryUploadByUid = function (uid) {
        this.uploadService.retryFiles(uid, this.async);
    };
    /**
     * Cancels the upload of a file or a batch of files.
     * @param uid - The `uid` of the file or a batch of files that will be canceled.
     */
    UploadComponent.prototype.cancelUploadByUid = function (uid) {
        this.uploadService.cancelFiles(uid);
    };
    /**
     * Uploads the currently selected files which pass the set restrictions.
     */
    UploadComponent.prototype.uploadFiles = function () {
        if (this.fileList.filesToUpload.length) {
            this.uploadService.uploadFiles(this.async);
        }
    };
    UploadComponent.prototype.subscribeBlur = function () {
        var _this = this;
        if (!__WEBPACK_IMPORTED_MODULE_11__util__["default"].isDocumentAvailable()) {
            return;
        }
        this._ngZone.runOutsideAngular(function () {
            _this.documentClick = Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_fromEvent__["fromEvent"])(document, 'click').pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_filter__["filter"])(function (event) {
                return !(_this.wrapper !== event.target && _this.wrapper.contains(event.target));
            }));
            _this.blurSubscription = Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_merge__["merge"])(_this.documentClick, _this.navigation.onTab).subscribe(function () { return _this._ngZone.run(function () {
                if (_this.navigation.focused) {
                    _this.navigation.focused = false;
                    _this.onTouchedCallback();
                    _this.blur.emit();
                }
            }); });
        });
    };
    UploadComponent.prototype.subscribeFocus = function () {
        var _this = this;
        this.wrapperFocusSubscription = this.navigation.onWrapperFocus.subscribe(function () {
            _this.focus.emit();
        });
        this.selectButtonFocusSubscription = this.navigation.onSelectButtonFocus.subscribe(function () {
            _this.fileSelectButton.nativeElement.focus();
        });
    };
    UploadComponent.prototype.onCancel = function () {
        var _this = this;
        this.cancelSubscription = this.uploadService.cancelEvent.subscribe(function (args) {
            _this.cancel.emit(args);
        });
    };
    UploadComponent.prototype.onChange = function () {
        var _this = this;
        this.changeSubscription = this.uploadService.changeEvent.subscribe(function (files) {
            _this.onChangeCallback(files);
            _this.valueChange.emit(files);
        });
    };
    UploadComponent.prototype.onClear = function () {
        var _this = this;
        this.clearSubscription = this.uploadService.clearEvent.subscribe(function (args) {
            _this.clear.emit(args);
        });
    };
    UploadComponent.prototype.onComplete = function () {
        var _this = this;
        this.completeSubscription = this.uploadService.completeEvent.subscribe(function () {
            _this.complete.emit();
        });
    };
    UploadComponent.prototype.onError = function () {
        var _this = this;
        this.errorSubscription = this.uploadService.errorEvent.subscribe(function (args) {
            _this.error.emit(args);
        });
    };
    UploadComponent.prototype.onRemove = function () {
        var _this = this;
        this.removeSubscription = this.uploadService.removeEvent.subscribe(function (args) {
            _this.remove.emit(args);
        });
    };
    UploadComponent.prototype.onSelect = function () {
        var _this = this;
        this.selectSubscription = this.uploadService.selectEvent.subscribe(function (args) {
            _this.select.emit(args);
        });
    };
    UploadComponent.prototype.onSuccess = function () {
        var _this = this;
        this.successSubscription = this.uploadService.successEvent.subscribe(function (args) {
            _this.success.emit(args);
        });
    };
    UploadComponent.prototype.onUpload = function () {
        var _this = this;
        this.uploadSubscription = this.uploadService.uploadEvent.subscribe(function (args) {
            _this.upload.emit(args);
        });
    };
    UploadComponent.prototype.onUploadProgress = function () {
        var _this = this;
        this.uploadProgressSubscription = this.uploadService.uploadProgressEvent.subscribe(function (args) {
            _this.uploadProgress.emit(args);
        });
    };
    UploadComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    exportAs: 'kendoUpload',
                    providers: [
                        __WEBPACK_IMPORTED_MODULE_10__progress_kendo_angular_l10n__["LocalizationService"],
                        __WEBPACK_IMPORTED_MODULE_9__navigation_service__["NavigationService"],
                        __WEBPACK_IMPORTED_MODULE_6__upload_service__["UploadService"],
                        UPLOAD_VALUE_ACCESSOR,
                        {
                            provide: __WEBPACK_IMPORTED_MODULE_10__progress_kendo_angular_l10n__["L10N_PREFIX"],
                            useValue: 'kendo.upload'
                        }
                    ],
                    selector: 'kendo-upload',
                    template: "\n    <ng-container kendoUploadLocalizedMessages\n      i18n-cancel=\"kendo.upload.cancel|The text for the Cancel button\"\n      cancel=\"Cancel\"\n\n      i18n-clearSelectedFiles=\"kendo.upload.clearSelectedFiles|The text for the Clear button\"\n      clearSelectedFiles=\"Clear\"\n\n      i18n-dropFilesHere=\"kendo.upload.dropFilesHere|The drop zone hint\"\n      dropFilesHere=\"Drop files here to upload\"\n\n      i18n-headerStatusUploaded=\"kendo.upload.headerStatusUploaded|The header status message after file upload completion\"\n      headerStatusUploaded=\"Done\"\n\n      i18n-headerStatusUploading=\"kendo.upload.headerStatusUploading|The header status message during file upload\"\n      headerStatusUploading=\"Uploading...\"\n\n      i18n-invalidFileExtension=\"kendo.upload.invalidFileExtension|The text for the invalid allowed extensions restriction message\"\n      invalidFileExtension=\"File type not allowed.\"\n\n      i18n-invalidFiles=\"kendo.upload.invalidFiles|The text for the invalid files message\"\n      invalidFiles=\"Invalid file(s). Please check file upload requirements.\"\n\n      i18n-invalidMaxFileSize=\"kendo.upload.invalidMaxFileSize|The text for the invalid max file size restriction message\"\n      invalidMaxFileSize=\"File size too large.\"\n\n      i18n-invalidMinFileSize=\"kendo.upload.invalidMinFileSize|The text for the invalid min file size restriction message\"\n      invalidMinFileSize=\"File size too small.\"\n\n      i18n-remove=\"kendo.upload.remove|The text for the Remove button\"\n      remove=\"Remove\"\n\n      i18n-retry=\"kendo.upload.retry|The text for the Retry button\"\n      retry=\"Retry\"\n\n      i18n-select=\"kendo.upload.select|The text for the Select button\"\n      select=\"Select files...\"\n\n      i18n-uploadSelectedFiles=\"kendo.upload.uploadSelectedFiles|The text for the Upload files button\"\n      uploadSelectedFiles=\"Upload\"\n    >\n    </ng-container>\n    <div kendoUploadDropzone\n      [async]=\"async\"\n      [restrictions]=\"restrictions\"\n      [multiple]=\"multiple\"\n      [disabled]=\"disabled\">\n        <div role=\"button\" #fileSelectButton\n             [id]=\"focusableId\"\n             [ngClass]='setSelectButtonClasses()'\n             [attr.aria-label]=\"textFor('select')\"\n             [attr.tabIndex]=\"setSelectButtonTabIndex()\"\n             (focus)=\"onFileSelectButtonFocus($event)\">\n          <input #fileSelect kendoFileSelect\n            [async]=\"async\"\n            [attr.accept]=\"accept ? accept : null\"\n            [dir]=\"direction\"\n            [restrictions]=\"restrictions\"\n            [multiple]=\"multiple\"\n            [disabled]=\"disabled\" />\n          <span>{{textFor('select')}}</span>\n        </div>\n        <div class=\"k-dropzone-hint\">{{textFor('dropFilesHere')}}</div>\n        <kendo-upload-status-total\n          *ngIf=\"showTotalStatus()\"\n          [fileList]=\"fileList\">\n        </kendo-upload-status-total>\n    </div>\n    <ul kendo-upload-file-list\n        class=\"k-upload-files k-reset\"\n        *ngIf=\"showFileList && fileList.count > 0\"\n        [async]=\"async\"\n        [disabled]=\"disabled\"\n        [fileList]=\"fileList.files\"\n        [fileTemplate]=\"fileTemplate\">\n    </ul>\n    <kendo-upload-action-buttons\n      *ngIf=\"showActionButtons()\"\n      [async]=\"async\"\n      [disabled]=\"disabled\"\n      [fileList]=\"fileList\">\n    </kendo-upload-action-buttons>\n  "
                },] },
    ];
    /** @nocollapse */
    UploadComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_6__upload_service__["UploadService"], },
        { type: __WEBPACK_IMPORTED_MODULE_10__progress_kendo_angular_l10n__["LocalizationService"], },
        { type: __WEBPACK_IMPORTED_MODULE_9__navigation_service__["NavigationService"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    ]; };
    UploadComponent.propDecorators = {
        'autoUpload': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'batch': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'withCredentials': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'saveField': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'saveHeaders': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'saveMethod': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'saveUrl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'responseType': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'removeField': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'removeHeaders': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'removeMethod': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'removeUrl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'multiple': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'showFileList': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'tabIndex': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'accept': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'restrictions': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'focusableId': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'fileTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"], args: [__WEBPACK_IMPORTED_MODULE_8__templates_file_template_directive__["FileTemplateDirective"],] },],
        'fileSelect': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: ['fileSelect',] },],
        'fileSelectButton': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: ['fileSelectButton',] },],
        'blur': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'cancel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'clear': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'complete': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'error': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'focus': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'remove': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'select': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'success': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'upload': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'uploadProgress': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'valueChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'dir': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['attr.dir',] },],
        'hostDefaultClasses': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.k-widget',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.k-upload',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.k-header',] },],
        'hostDisabledClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.k-state-disabled',] },],
        'handleKeydown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['keydown', ['$event'],] },],
    };
    return UploadComponent;
}());



/***/ }),

/***/ "./node_modules/@progress/kendo-angular-upload/dist/es/upload.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadModule", function() { return UploadModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__upload_component__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/upload.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dropzone_directive__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/dropzone.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__file_list_component__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/file-list.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__file_list_item__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/file-list-item.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__file_list_single_item_component__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/file-list-single-item.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__file_list_multiple_items_component__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/file-list-multiple-items.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__file_list_item_action_button_component__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/file-list-item-action-button.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__templates_file_template_directive__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/templates/file-template.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__file_select_directive__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/file-select.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__upload_action_buttons_component__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/upload-action-buttons.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__upload_status_total_component__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/upload-status-total.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__templates_template_context_directive__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/templates/template-context.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__localization_localized_messages_directive__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/localization/localized-messages.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__localization_custom_messages_component__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/localization/custom-messages.component.js");
















var declarations = [
    __WEBPACK_IMPORTED_MODULE_15__localization_custom_messages_component__["CustomMessagesComponent"],
    __WEBPACK_IMPORTED_MODULE_3__dropzone_directive__["DropZoneDirective"],
    __WEBPACK_IMPORTED_MODULE_4__file_list_component__["FileListComponent"],
    __WEBPACK_IMPORTED_MODULE_5__file_list_item__["FileListItemDirective"],
    __WEBPACK_IMPORTED_MODULE_8__file_list_item_action_button_component__["FileListItemActionButtonComponent"],
    __WEBPACK_IMPORTED_MODULE_7__file_list_multiple_items_component__["FileListMultipleItemsComponent"],
    __WEBPACK_IMPORTED_MODULE_6__file_list_single_item_component__["FileListSingleItemComponent"],
    __WEBPACK_IMPORTED_MODULE_10__file_select_directive__["FileSelectDirective"],
    __WEBPACK_IMPORTED_MODULE_9__templates_file_template_directive__["FileTemplateDirective"],
    __WEBPACK_IMPORTED_MODULE_14__localization_localized_messages_directive__["LocalizedMessagesDirective"],
    __WEBPACK_IMPORTED_MODULE_13__templates_template_context_directive__["TemplateContextDirective"],
    __WEBPACK_IMPORTED_MODULE_2__upload_component__["UploadComponent"],
    __WEBPACK_IMPORTED_MODULE_11__upload_action_buttons_component__["UploadActionButtonsComponent"],
    __WEBPACK_IMPORTED_MODULE_12__upload_status_total_component__["UploadStatusTotalComponent"]
];
/**
 * Represents the [NgModule](https://angular.io/docs/ts/latest/guide/ngmodule.html) definition for the Upload component.
 */
var UploadModule = /** @class */ (function () {
    function UploadModule() {
    }
    UploadModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    declarations: [declarations],
                    exports: [__WEBPACK_IMPORTED_MODULE_2__upload_component__["UploadComponent"], __WEBPACK_IMPORTED_MODULE_9__templates_file_template_directive__["FileTemplateDirective"], __WEBPACK_IMPORTED_MODULE_15__localization_custom_messages_component__["CustomMessagesComponent"]],
                    imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]]
                },] },
    ];
    /** @nocollapse */
    UploadModule.ctorParameters = function () { return []; };
    return UploadModule;
}());



/***/ }),

/***/ "./node_modules/@progress/kendo-angular-upload/dist/es/upload.service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__file_info__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/file-info.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__file_map__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/file-map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__upload_events__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/upload-events.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/util.js");






/**
 * @hidden
 */
var UploadService = /** @class */ (function () {
    function UploadService(http) {
        this.http = http;
        this.cancelEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.clearEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.completeEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.errorEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.removeEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.selectEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.successEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.uploadEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.uploadProgressEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        // Required for the `ControlValueAccessor` integration
        this.changeEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.fileList = new __WEBPACK_IMPORTED_MODULE_2__file_map__["FileMap"]();
    }
    Object.defineProperty(UploadService.prototype, "files", {
        get: function () {
            return this.fileList;
        },
        enumerable: true,
        configurable: true
    });
    UploadService.prototype.onChange = function () {
        var files = this.fileList.filesFlat.filter(function (file) {
            return file.state === __WEBPACK_IMPORTED_MODULE_1__file_info__["FileState"].Initial ||
                file.state === __WEBPACK_IMPORTED_MODULE_1__file_info__["FileState"].Uploaded;
        });
        this.changeEvent.emit(files.length > 0 ? files : null);
    };
    UploadService.prototype.addFiles = function (files, async) {
        var selectEventArgs = new __WEBPACK_IMPORTED_MODULE_4__upload_events__["SelectEvent"](files);
        this.selectEvent.emit(selectEventArgs);
        if (!selectEventArgs.isDefaultPrevented()) {
            for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                var file = files_1[_i];
                this.fileList.add(file);
            }
            if (async.autoUpload) {
                this.uploadFiles(async);
            }
        }
    };
    UploadService.prototype.addInitialFiles = function (initialFiles) {
        var _this = this;
        this.fileList.clear();
        initialFiles.forEach(function (file) {
            var fakeFile = __WEBPACK_IMPORTED_MODULE_5__util__["default"].getInitialFileInfo(file);
            _this.fileList.add(fakeFile);
        });
    };
    UploadService.prototype.removeFiles = function (uid, async) {
        var removedFiles = this.fileList.get(uid);
        // Clone the Headers so that the default ones are not overridden
        var removeEventArgs = new __WEBPACK_IMPORTED_MODULE_4__upload_events__["RemoveEvent"](removedFiles, this.cloneRequestHeaders(async.removeHeaders));
        this.removeEvent.emit(removeEventArgs);
        if (!removeEventArgs.isDefaultPrevented()) {
            if (removedFiles[0].state === __WEBPACK_IMPORTED_MODULE_1__file_info__["FileState"].Uploaded ||
                removedFiles[0].state === __WEBPACK_IMPORTED_MODULE_1__file_info__["FileState"].Initial) {
                this.performRemove(removedFiles, async, removeEventArgs);
            }
            else {
                this.fileList.remove(uid);
            }
        }
    };
    UploadService.prototype.cancelFiles = function (uid) {
        var canceledFiles = this.fileList.get(uid);
        var cancelEventArgs = new __WEBPACK_IMPORTED_MODULE_4__upload_events__["CancelEvent"](canceledFiles);
        this.cancelEvent.emit(cancelEventArgs);
        for (var _i = 0, canceledFiles_1 = canceledFiles; _i < canceledFiles_1.length; _i++) {
            var file = canceledFiles_1[_i];
            if (file.httpSubscription) {
                file.httpSubscription.unsubscribe();
            }
        }
        this.fileList.remove(uid);
    };
    UploadService.prototype.clearFiles = function () {
        var clearEventArgs = new __WEBPACK_IMPORTED_MODULE_4__upload_events__["ClearEvent"]();
        this.clearEvent.emit(clearEventArgs);
        if (!clearEventArgs.isDefaultPrevented()) {
            var triggerChange = this.fileList.hasFileWithState([__WEBPACK_IMPORTED_MODULE_1__file_info__["FileState"].Initial, __WEBPACK_IMPORTED_MODULE_1__file_info__["FileState"].Uploaded]);
            this.fileList.clear();
            if (triggerChange) {
                this.onChange();
            }
        }
    };
    UploadService.prototype.uploadFiles = function (async) {
        var allFilesToUpload = this.fileList.filesToUpload;
        this._uploadFiles(allFilesToUpload, async);
    };
    UploadService.prototype.retryFiles = function (uid, async) {
        var filesToRetry = [this.fileList.get(uid)];
        this._uploadFiles(filesToRetry, async);
    };
    UploadService.prototype._uploadFiles = function (allFiles, async) {
        var _loop_1 = function (filesToUpload) {
            // Clone the Headers so that the default ones are not overridden
            var uploadEventArgs = new __WEBPACK_IMPORTED_MODULE_4__upload_events__["UploadEvent"](filesToUpload, this_1.cloneRequestHeaders(async.saveHeaders));
            this_1.uploadEvent.emit(uploadEventArgs);
            if (!uploadEventArgs.isDefaultPrevented()) {
                this_1.fileList.setFilesState(filesToUpload, __WEBPACK_IMPORTED_MODULE_1__file_info__["FileState"].Uploading);
                var httpSubcription_1 = this_1.performUpload(filesToUpload, async, uploadEventArgs);
                filesToUpload.forEach(function (file) {
                    file.httpSubscription = httpSubcription_1;
                });
            }
            else {
                this_1.fileList.remove(filesToUpload[0].uid);
            }
        };
        var this_1 = this;
        for (var _i = 0, allFiles_1 = allFiles; _i < allFiles_1.length; _i++) {
            var filesToUpload = allFiles_1[_i];
            _loop_1(filesToUpload);
        }
    };
    UploadService.prototype.performRemove = function (files, async, removeEventArgs) {
        var _this = this;
        var fileNames = files.map(function (file) {
            return file.name;
        });
        var formData = this.populateRemoveFormData(fileNames, async.removeField, removeEventArgs.data);
        var options = this.populateRequestOptions(async, removeEventArgs.headers);
        var removeRequest = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["HttpRequest"](async.removeMethod, async.removeUrl, formData, options);
        this.http.request(removeRequest)
            .subscribe(function (success) {
            _this.onSuccess(success, files, "remove");
        }, function (error) {
            _this.onError(error, files, "remove");
        });
    };
    UploadService.prototype.performUpload = function (files, async, uploadEventArgs) {
        var _this = this;
        var formData = this.populateUploadFormData(files, async.saveField, uploadEventArgs.data);
        var options = this.populateRequestOptions(async, uploadEventArgs.headers);
        var uploadRequest = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["HttpRequest"](async.saveMethod, async.saveUrl, formData, options);
        var httpSubscription = this.http.request(uploadRequest)
            .subscribe(function (event) {
            if (event.type === __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["HttpEventType"].UploadProgress) {
                _this.onProgress(event, files);
            }
            else if (event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["HttpResponse"]) {
                _this.onSuccess(event, files, "upload");
                _this.checkAllComplete();
            }
        }, function (error) {
            _this.onError(error, files, "upload");
            _this.checkAllComplete();
        });
        return httpSubscription;
    };
    UploadService.prototype.onSuccess = function (successResponse, files, operation) {
        var successArgs = new __WEBPACK_IMPORTED_MODULE_4__upload_events__["SuccessEvent"](files, operation, successResponse);
        this.successEvent.emit(successArgs);
        if (operation === "upload") {
            this.fileList.setFilesState(files, successArgs.isDefaultPrevented() ? __WEBPACK_IMPORTED_MODULE_1__file_info__["FileState"].Failed : __WEBPACK_IMPORTED_MODULE_1__file_info__["FileState"].Uploaded);
        }
        else {
            if (!successArgs.isDefaultPrevented()) {
                this.fileList.remove(files[0].uid);
            }
        }
        if (!successArgs.isDefaultPrevented()) {
            this.onChange();
        }
    };
    UploadService.prototype.onError = function (errorResponse, files, operation) {
        var errorArgs = new __WEBPACK_IMPORTED_MODULE_4__upload_events__["ErrorEvent"](files, operation, errorResponse);
        this.errorEvent.emit(errorArgs);
        if (operation === "upload") {
            this.fileList.setFilesState(files, __WEBPACK_IMPORTED_MODULE_1__file_info__["FileState"].Failed);
        }
    };
    UploadService.prototype.onProgress = function (event, files) {
        var percentComplete = Math.round(100 * event.loaded / event.total);
        var progressArgs = new __WEBPACK_IMPORTED_MODULE_4__upload_events__["UploadProgressEvent"](files, percentComplete < 100 ? percentComplete : 100);
        this.uploadProgressEvent.emit(progressArgs);
    };
    UploadService.prototype.checkAllComplete = function () {
        if (!this.fileList.hasFileWithState([__WEBPACK_IMPORTED_MODULE_1__file_info__["FileState"].Selected, __WEBPACK_IMPORTED_MODULE_1__file_info__["FileState"].Uploading])) {
            this.completeEvent.emit();
        }
    };
    UploadService.prototype.cloneRequestHeaders = function (headers) {
        var cloned = {};
        headers.keys().forEach(function (key) {
            cloned[key] = headers.get(key);
        });
        return new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["HttpHeaders"](cloned);
    };
    UploadService.prototype.populateRequestOptions = function (async, headers) {
        return {
            headers: headers,
            reportProgress: true,
            responseType: async.responseType,
            withCredentials: async.withCredentials
        };
    };
    UploadService.prototype.populateUploadFormData = function (files, saveField, clientData) {
        var data = new FormData();
        this.populateClientFormData(data, clientData);
        for (var _i = 0, files_2 = files; _i < files_2.length; _i++) {
            var file = files_2[_i];
            data.append(saveField, file.rawFile);
        }
        return data;
    };
    UploadService.prototype.populateRemoveFormData = function (fileNames, removeField, clientData) {
        var data = new FormData();
        this.populateClientFormData(data, clientData);
        for (var _i = 0, fileNames_1 = fileNames; _i < fileNames_1.length; _i++) {
            var fileName = fileNames_1[_i];
            data.append(removeField, fileName);
        }
        return data;
    };
    UploadService.prototype.populateClientFormData = function (data, clientData) {
        for (var key in clientData) {
            if (clientData.hasOwnProperty(key)) {
                data.append(key, clientData[key]);
            }
        }
    };
    UploadService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    UploadService.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["HttpClient"], },
    ]; };
    return UploadService;
}());



/***/ }),

/***/ "./node_modules/@progress/kendo-angular-upload/dist/es/util.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__file_info__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/file-info.js");
/* tslint:disable: no-bitwise */

var guid = function () {
    var id = "";
    var i;
    var random;
    for (i = 0; i < 32; i++) {
        random = Math.random() * 16 | 0;
        if (i === 8 || i === 12 || i === 16 || i === 20) {
            id += "-";
        }
        id += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16);
    }
    return id;
};
var getTotalFilesSizeMessage = function (files) {
    var totalSize = 0;
    var i;
    if (typeof files[0].size === "number") {
        for (i = 0; i < files.length; i++) {
            if (files[i].size) {
                totalSize += files[i].size;
            }
        }
    }
    else {
        return "";
    }
    totalSize /= 1024;
    if (totalSize < 1024) {
        return totalSize.toFixed(2) + " KB";
    }
    else {
        return (totalSize / 1024).toFixed(2) + " MB";
    }
};
var stripPath = function (name) {
    var slashIndex = name.lastIndexOf("\\");
    return (slashIndex !== -1) ? name.substr(slashIndex + 1) : name;
};
var getFileExtension = function (fileName) {
    var rFileExtension = /\.([^\.]+)$/;
    var matches = fileName.match(rFileExtension);
    return matches ? matches[0] : "";
};
var ampRegExp = /&/g;
var ltRegExp = /</g;
var quoteRegExp = /"/g;
var aposRegExp = /'/g;
var gtRegExp = />/g;
var htmlEncode = function (value) {
    return ("" + value).replace(ampRegExp, "&amp;")
        .replace(ltRegExp, "&lt;")
        .replace(gtRegExp, "&gt;")
        .replace(quoteRegExp, "&quot;")
        .replace(aposRegExp, "&#39;");
};
var validateInitialFileInfo = function (file) {
    if (file instanceof Object && file.hasOwnProperty("name")) {
        return true;
    }
    return false;
};
var getInitialFileInfo = function (fakeFile) {
    fakeFile.extension = fakeFile.extension || getFileExtension(fakeFile.name);
    fakeFile.name = htmlEncode(fakeFile.name);
    fakeFile.size = fakeFile.size || 0;
    if (!fakeFile.hasOwnProperty("state")) {
        fakeFile.state = __WEBPACK_IMPORTED_MODULE_0__file_info__["FileState"].Initial;
    }
    if (!fakeFile.hasOwnProperty("uid")) {
        fakeFile.uid = guid();
    }
    return fakeFile;
};
var getFileInfo = function (rawFile) {
    var fileName = rawFile.name;
    var fileSize = rawFile.size;
    return {
        extension: getFileExtension(fileName),
        name: htmlEncode(fileName),
        rawFile: rawFile,
        size: fileSize,
        state: __WEBPACK_IMPORTED_MODULE_0__file_info__["FileState"].Selected
    };
};
var getAllFileInfo = function (rawFiles) {
    var allFileInfo = new Array();
    var i;
    for (i = 0; i < rawFiles.length; i++) {
        allFileInfo.push(getFileInfo(rawFiles[i]));
    }
    return allFileInfo;
};
var fileHasValidationErrors = function (file) {
    if (file.validationErrors && file.validationErrors.length > 0) {
        return true;
    }
    return false;
};
var filesHaveValidationErrors = function (files) {
    for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
        var file = files_1[_i];
        if (fileHasValidationErrors(file)) {
            return true;
        }
    }
    return false;
};
var inputFiles = function (input) {
    if (input.files) {
        return getAllFileInfo(input.files);
    }
    else {
        //Required for testing
        var fileNames = input.value.split("|").map(function (file, index) {
            var fileName = file.trim();
            return {
                extension: getFileExtension(fileName),
                name: stripPath(fileName),
                rawFile: null,
                size: (index + 1) * 1000,
                state: __WEBPACK_IMPORTED_MODULE_0__file_info__["FileState"].Selected
            };
        });
        return fileNames;
    }
};
var assignGuidToFiles = function (files, isUnique) {
    var uid = guid();
    return files.map(function (file) {
        file.uid = isUnique ? guid() : uid;
        return file;
    });
};
var supportsFormData = function () {
    return typeof (FormData) !== "undefined";
};
var userAgent = function () {
    return navigator.userAgent;
};
var isDocumentAvailable = function () {
    return typeof document !== 'undefined';
};
var focusableRegex = /^(?:a|input|select|textarea|button|object)$/i;
var IGNORE_TARGET_CLASSSES = 'k-icon k-select k-input';
var UPLOAD_CLASSES = 'k-upload-button k-clear-selected k-upload-selected k-upload-action';
var isVisible = function (element) {
    var rect = element.getBoundingClientRect();
    return !!(rect.width && rect.height) && window.getComputedStyle(element).visibility !== 'hidden';
};
var toClassList = function (classNames) { return String(classNames).trim().split(' '); };
var hasClasses = function (element, classNames) {
    var namesList = toClassList(classNames);
    return Boolean(toClassList(element.className).find(function (className) { return namesList.indexOf(className) >= 0; }));
};
var isFocusable = function (element, checkVisibility) {
    if (checkVisibility === void 0) { checkVisibility = true; }
    if (element.tagName) {
        var tagName = element.tagName.toLowerCase();
        var tabIndex = element.getAttribute('tabIndex');
        var validTabIndex = tabIndex !== null && !isNaN(tabIndex) && tabIndex > -1;
        var focusable = false;
        if (focusableRegex.test(tagName)) {
            focusable = !element.disabled;
        }
        else {
            focusable = validTabIndex;
        }
        return focusable && (!checkVisibility || isVisible(element));
    }
    return false;
};
/* harmony default export */ __webpack_exports__["default"] = ({
    IGNORE_TARGET_CLASSSES: IGNORE_TARGET_CLASSSES,
    UPLOAD_CLASSES: UPLOAD_CLASSES,
    assignGuidToFiles: assignGuidToFiles,
    fileHasValidationErrors: fileHasValidationErrors,
    filesHaveValidationErrors: filesHaveValidationErrors,
    getAllFileInfo: getAllFileInfo,
    getInitialFileInfo: getInitialFileInfo,
    getTotalFilesSizeMessage: getTotalFilesSizeMessage,
    guid: guid,
    hasClasses: hasClasses,
    inputFiles: inputFiles,
    isDocumentAvailable: isDocumentAvailable,
    isFocusable: isFocusable,
    supportsFormData: supportsFormData,
    userAgent: userAgent,
    validateInitialFileInfo: validateInitialFileInfo
});


/***/ }),

/***/ "./node_modules/@progress/kendo-angular-upload/dist/es/validation-util.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var INVALIDMAXFILESIZE = "invalidMaxFileSize";
var INVALIDMINFILESIZE = "invalidMinFileSize";
var INVALIDFILEEXTENSION = "invalidFileExtension";
var validateFileExtension = function (file, allowedExtensions) {
    if (allowedExtensions.length > 0) {
        if (allowedExtensions.indexOf(file.extension.toLowerCase()) < 0) {
            file.validationErrors = file.validationErrors || [];
            if (file.validationErrors.indexOf(INVALIDFILEEXTENSION) < 0) {
                file.validationErrors.push(INVALIDFILEEXTENSION);
            }
        }
    }
};
var validateFileSize = function (file, minFileSize, maxFileSize) {
    if (minFileSize !== 0 && file.size < minFileSize) {
        file.validationErrors = file.validationErrors || [];
        if (file.validationErrors.indexOf(INVALIDMINFILESIZE) < 0) {
            file.validationErrors.push(INVALIDMINFILESIZE);
        }
    }
    if (maxFileSize !== 0 && file.size > maxFileSize) {
        file.validationErrors = file.validationErrors || [];
        if (file.validationErrors.indexOf(INVALIDMAXFILESIZE) < 0) {
            file.validationErrors.push(INVALIDMAXFILESIZE);
        }
    }
};
var parseAllowedExtensions = function (extensions) {
    var allowedExtensions = extensions.map(function (ext) {
        var parsedExt = (ext.substring(0, 1) === ".") ? ext : ("." + ext);
        return parsedExt.toLowerCase();
    });
    return allowedExtensions;
};
var validateFiles = function (files, restrictionInfo) {
    var allowedExtensions = parseAllowedExtensions(restrictionInfo.allowedExtensions);
    var maxFileSize = restrictionInfo.maxFileSize;
    var minFileSize = restrictionInfo.minFileSize;
    var i;
    for (i = 0; i < files.length; i++) {
        validateFileExtension(files[i], allowedExtensions);
        validateFileSize(files[i], minFileSize, maxFileSize);
    }
};
/* harmony default export */ __webpack_exports__["default"] = ({
    validateFiles: validateFiles
});


/***/ }),

/***/ "./src/packages/resource-metadata-designer/package.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceMetadataPackage", function() { return ResourceMetadataPackage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__ = __webpack_require__("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views__ = __webpack_require__("./src/packages/resource-metadata-designer/views/index.ts");
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


var ResourceMetadataPackage = (function (_super) {
    __extends(ResourceMetadataPackage, _super);
    function ResourceMetadataPackage(gsp, cfr, injector) {
        var _this = _super.call(this, gsp) || this;
        _this.cfr = cfr;
        _this.injector = injector;
        return _this;
    }
    ResourceMetadataPackage.prototype.activate = function (state) {
        var _this = this;
        this.gsp.workspace.addOpener(function (uri) { return _this.openRs(uri); });
        // if (!this.packageView) {
        //   this.packageView = new SgDesignerPackageView(state, this.cfr, this.injector);
        //   this.gsp.workspace.addMainPanel({id: this.id,title:this.data.name, item: this.packageView.getElement()});
        //   const currentElement = this.packageView.getElement().instance as SgDesignerComponent;
        //   if (currentElement) {
        //     currentElement.metadataContent = this.data;
        //   }
        // }
        // this.workspace.activePackage(this);
    };
    ResourceMetadataPackage.prototype.openRs = function (uri) {
        if (uri.endsWith('.rs')) {
            var pkgView_1 = new __WEBPACK_IMPORTED_MODULE_1__views__["ResourceMetadataPackageView"]({}, this.cfr, this.injector);
            var currentElement = pkgView_1.getElement().instance;
            currentElement.metadataUri = uri;
            return {
                getTitle: function () { return uri; },
                getElement: function () { return pkgView_1.getElement(); }
            };
        }
    };
    /**
     * 新建元数据
     */
    ResourceMetadataPackage.prototype.createMetadata = function (data) {
        this.gsp.eventBus.post(ResourceMetadataPackage, this.id, 'Command:CreateMetadata', data);
    };
    return ResourceMetadataPackage;
}(__WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__["Package"]));



/***/ }),

/***/ "./src/packages/resource-metadata-designer/rspackage.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceMetadataPackageModule", function() { return ResourceMetadataPackageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit__ = __webpack_require__("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__package__ = __webpack_require__("./src/packages/resource-metadata-designer/package.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_resourcemetadatadesigner_resourcemetadata_module__ = __webpack_require__("./src/packages/resource-metadata-designer/views/resourcemetadatadesigner/resourcemetadata.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_resourcemetadatadesigner_textgrid_textresources_service__ = __webpack_require__("./src/packages/resource-metadata-designer/views/resourcemetadatadesigner/textgrid/textresources.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_resourcemetadatadesigner_birgrid_bitresources_service__ = __webpack_require__("./src/packages/resource-metadata-designer/views/resourcemetadatadesigner/birgrid/bitresources.service.ts");
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







var ResourceMetadataPackageModule = (function (_super) {
    __extends(ResourceMetadataPackageModule, _super);
    function ResourceMetadataPackageModule(cfr, injector) {
        var _this = _super.call(this) || this;
        _this.cfr = cfr;
        _this.injector = injector;
        return _this;
    }
    ResourceMetadataPackageModule.prototype.initPackage = function (gsp) {
        this.package = new __WEBPACK_IMPORTED_MODULE_2__package__["ResourceMetadataPackage"](gsp, this.cfr, this.injector);
    };
    ResourceMetadataPackageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__views_resourcemetadatadesigner_resourcemetadata_module__["ResourceMetadataModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__views_resourcemetadatadesigner_textgrid_textresources_service__["TextResourcesService"], __WEBPACK_IMPORTED_MODULE_6__views_resourcemetadatadesigner_birgrid_bitresources_service__["BitresourcesService"]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], ResourceMetadataPackageModule);
    return ResourceMetadataPackageModule;
}(__WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit__["PackageModule"]));

//# sourceMappingURL=rspackage.module.js.map

/***/ }),

/***/ "./src/packages/resource-metadata-designer/views/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceMetadataPackageView", function() { return ResourceMetadataPackageView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resourcemetadatadesigner_resourcemetadata_component__ = __webpack_require__("./src/packages/resource-metadata-designer/views/resourcemetadatadesigner/resourcemetadata.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit__ = __webpack_require__("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resourcemetadatadesigner_resourcemetadata_module__ = __webpack_require__("./src/packages/resource-metadata-designer/views/resourcemetadatadesigner/resourcemetadata.module.ts");
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



var ResourceMetadataPackageView = (function (_super) {
    __extends(ResourceMetadataPackageView, _super);
    function ResourceMetadataPackageView(serializedState, cfr, injector) {
        var _this = _super.call(this, serializedState) || this;
        _this.cfr = cfr;
        _this.injector = injector;
        var componentFactory = _this.cfr.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_0__resourcemetadatadesigner_resourcemetadata_component__["ResourceMetadataComponent"]);
        var moduleRef = _this.injector.get(__WEBPACK_IMPORTED_MODULE_2__resourcemetadatadesigner_resourcemetadata_module__["ResourceMetadataModule"]);
        console.log(moduleRef);
        _this.element = componentFactory.create(_this.injector);
        return _this;
    }
    return ResourceMetadataPackageView;
}(__WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit__["PackageView"]));



/***/ }),

/***/ "./src/packages/resource-metadata-designer/views/resourcemetadatadesigner/baseinfo/baseinfo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/resource-metadata-designer/views/resourcemetadatadesigner/baseinfo/baseinfo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-column\" style=\"flex:1 1 auto;\">\n  \n    <div class=\"card\" style=\"background-color: #f6f6f6;\">\n          \n                <form class=\"k-form\" style=\"padding: 10px 16px 10px 16px;width: 100%;\" >\n                    <form class=\"k-form-inline\" style=\"padding: 0px;height: 36px;\">\n                        <div class=\"k-form-field\" style=\"height: 36px;\">\n                            <label style=\"width: 15%;min-width: 95px\">资源编号</label>\n                            <input style=\"width: 75%;\" class=\"k-textbox\" readonly=\"readonly\" [(ngModel)]=\"currentViewModel.code\" name=\"code\" />\n                        </div>\n                    </form>\n                    <form class=\"k-form-inline\" style=\"padding: 2px;height: 36px;\">\n                        <div class=\"k-form-field\"  style=\"height: 36px;\">\n                            <label style=\"width: 15%;min-width: 95px;\">资源名称</label>\n                            <input style=\"width: 75%;\" class=\"k-textbox\" readonly=\"readonly\" [(ngModel)]=\"currentViewModel.name\" name=\"name\"/>                 \n                        </div>\n                    </form>\n                                      \n                    <form class=\"k-form-inline\" style=\"padding: 2px;height: 36px;\">\n                        <div class=\"k-form-field\"  style=\"height: 36px;\">\n                            <label style=\"width: 15%;min-width: 95px;\">业务对象</label>\n                            <input style=\"width: 75%;\" class=\"k-textbox\" readonly=\"readonly\" [(ngModel)]=\"currentViewModel.bizObject\"  name=\"bizobject\"/>\n                        </div>\n                    </form>\n                    <form class=\"k-form-inline\" style=\"padding: 2px;height: 36px;\">\n                            <div class=\"k-form-field\"  style=\"height: 36px;\">\n                                <label style=\"width: 15%;min-width: 95px;\">创建时间</label>\n                                <input style=\"width: 75%;\" class=\"k-textbox\" readonly=\"readonly\" [(ngModel)]=\"currentViewModel.lastModifiedTime\" name=\"lastmodifiedtime\"/>\n                            </div>\n                    </form>\n                </form>\n           \n    </div>\n</div>"

/***/ }),

/***/ "./src/packages/resource-metadata-designer/views/resourcemetadatadesigner/baseinfo/baseinfo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseinfoComponent", function() { return BaseinfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resourcemetadata_resourcemetadata__ = __webpack_require__("./src/packages/resource-metadata-designer/views/resourcemetadatadesigner/resourcemetadata/resourcemetadata.ts");
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



var BaseinfoComponent = (function () {
    function BaseinfoComponent(formBuilder) {
        this.formBuilder = formBuilder;
    }
    BaseinfoComponent.prototype.ngOnchange = function () {
    };
    BaseinfoComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__resourcemetadata_resourcemetadata__["ResourceMetadata"])
    ], BaseinfoComponent.prototype, "currentViewModel", void 0);
    BaseinfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-baseinfo',
            template: __webpack_require__("./src/packages/resource-metadata-designer/views/resourcemetadatadesigner/baseinfo/baseinfo.component.html"),
            styles: [__webpack_require__("./src/packages/resource-metadata-designer/views/resourcemetadatadesigner/baseinfo/baseinfo.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]])
    ], BaseinfoComponent);
    return BaseinfoComponent;
}());



/***/ }),

/***/ "./src/packages/resource-metadata-designer/views/resourcemetadatadesigner/birgrid/birgrid.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".preform{\r\n    background-size: contain;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/resource-metadata-designer/views/resourcemetadatadesigner/birgrid/birgrid.component.html":
/***/ (function(module, exports) {

module.exports = "\n<kendo-grid id=\"bitGrid\"\n(cellClick)=\"cellClickHandler($event)\"\n[groupable]=\"false\"\n[group]=\"groups\"\n(groupChange)=\"groupChange($event)\"\n[data]=\"gridData\"\n[height]=\"200\" \n(add)=\"addHandler()\"\n(remove)=\"removeHandler($event)\"\n[navigable]=\"true\">\n<ng-template kendoGridToolbarTemplate>\n    <button kendoGridAddCommand [icon]=\"'plus-outline'\">新增二进制资源</button>       \n</ng-template>\n    <kendo-grid-column field=\"id\" title=\"资源编号\" width=\"70%\" [headerStyle]=\"{'text-align': 'center'}\" [style]=\"{'text-align':'center'}\">\n    </kendo-grid-column>\n  <kendo-grid-command-column title=\"\" width=\"15%\" [style]=\"{'text-align':'center'}\">\n        <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\n        <button kendoButton id=\"loadfile\" value=\"导入图片\" (click) = \"loadFile()\" [icon]=\"'download'\">导入图片</button>\n        <input  type=\"file\" value=\"导入图片文件\" id=\"upload\" (change)= \"fileUploadonselect()\" style=\"display:none\" accept=\"image/*\"/>\n        </ng-template>\n  </kendo-grid-command-column>\n  <kendo-grid-command-column title=\"\" width=\"15%\" [style]=\"{'text-align':'center'}\">\n      <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\n          <button kendoGridRemoveCommand type=\"button\" [icon]=\"'delete'\">删除资源</button>\n      </ng-template>\n  </kendo-grid-command-column>\n</kendo-grid>\n<div id=\"result\" class=\"preform\" name=\"result\" style=\"width: 100%;text-align: center;\"></div>  \n"

/***/ }),

/***/ "./src/packages/resource-metadata-designer/views/resourcemetadatadesigner/birgrid/birgrid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirgridComponent", function() { return BirgridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progress_kendo_angular_grid__ = __webpack_require__("./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_kendo_data_query__ = __webpack_require__("./node_modules/@progress/kendo-data-query/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bitresources_service__ = __webpack_require__("./src/packages/resource-metadata-designer/views/resourcemetadatadesigner/birgrid/bitresources.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__resourcemetadata_resourcemetadata__ = __webpack_require__("./src/packages/resource-metadata-designer/views/resourcemetadatadesigner/resourcemetadata/resourcemetadata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_util__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var createFormGroup = function (dataItem) { return new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormGroup"]({
    'bitId': new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormControl"](dataItem.bitId),
    'id': new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormControl"](dataItem.id),
    'value': new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormControl"](dataItem.value)
}); };
var matches = function (el, selector) { return (el.matches || el.msMatchesSelector).call(el, selector); };
var BirgridComponent = (function () {
    function BirgridComponent(service, renderer) {
        this.service = service;
        this.renderer = renderer;
        this.groups = [];
        this.bitresourceitem = [];
        this.checkbitelement = true;
        this.change = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.bitmetadatas = [{
                bitId: 1,
                id: '',
                value: ''
            }];
        this.data = [];
    }
    BirgridComponent.prototype.ngOnInit = function () {
        if (this.currentViewModel.imageResources.length != 0) {
            var igridData = this.currentViewModel.imageResources;
            for (var i = 0; i < igridData.length; i++) {
                this.data[i] = { bitId: i + 1, id: '', value: '' };
                this.data[i].id = igridData[i].id;
                this.data[i].value = igridData[i].value;
            }
            this.gridData = this.data;
        }
        else {
            this.gridData = this.bitmetadatas;
            this.data = this.bitmetadatas;
        }
        if (!Object(__WEBPACK_IMPORTED_MODULE_6_util__["isNullOrUndefined"])(this.gridData[0].value)) {
            var results = document.getElementById("result");
            results.innerHTML = '<img src="' + this.gridData[0].value + '" alt="" />';
        }
        this.docClickSubscription = this.renderer.listen('document', 'click', this.onDocumentClick.bind(this));
    };
    BirgridComponent.prototype.ngOnDestroy = function () {
        this.docClickSubscription();
        this.saveCurrentViewModel();
        this.change.emit(this.currentViewModel);
    };
    BirgridComponent.prototype.addHandler = function () {
        this.closeEditor();
        this.formGroup = createFormGroup({
            'id': '',
            'value': ''
        });
        this.isNew = true;
        this.grid.addRow(this.formGroup);
    };
    BirgridComponent.prototype.removeHandler = function (dataItem) {
        // this.grid.;
        this.service.remove(dataItem, this.data);
        var results = document.getElementById("result");
        results.innerHTML = '<img src="' + "test" + '" alt="" />';
    };
    BirgridComponent.prototype.cellClickHandler = function (_a) {
        var isEdited = _a.isEdited, dataItem = _a.dataItem, rowIndex = _a.rowIndex;
        if (isEdited || (this.formGroup && !this.formGroup.valid)) {
            return;
        }
        this.saveCurrent();
        this.formGroup = createFormGroup(dataItem);
        this.editedRowIndex = rowIndex;
        if (!Object(__WEBPACK_IMPORTED_MODULE_6_util__["isNullOrUndefined"])(dataItem.value)) {
            var results = document.getElementById("result");
            results.innerHTML = '<img src="' + dataItem.value + '" alt="" />';
        }
        else {
            var results = document.getElementById("result");
            results.innerHTML = '<img src="' + "test" + '" alt="" />';
        }
        this.grid.editRow(rowIndex, this.formGroup);
    };
    BirgridComponent.prototype.cancelHandler = function () {
        this.closeEditor();
    };
    BirgridComponent.prototype.groupChange = function (groups) {
        this.groups = groups;
        this.gridData = Object(__WEBPACK_IMPORTED_MODULE_3__progress_kendo_data_query__["groupBy"])(this.service.bitresources(), this.groups);
    };
    BirgridComponent.prototype.closeEditor = function () {
        this.grid.closeRow(this.editedRowIndex);
        this.isNew = false;
        this.editedRowIndex = undefined;
        this.formGroup = undefined;
    };
    BirgridComponent.prototype.onDocumentClick = function (e) {
        if (this.formGroup && this.formGroup.valid &&
            !matches(e.target, '#bitGrid tbody *, #bitGrid .k-grid-toolbar .k-button')) {
            this.saveCurrent();
        }
    };
    BirgridComponent.prototype.saveCurrent = function () {
        if (this.formGroup) {
            if (!Object(__WEBPACK_IMPORTED_MODULE_6_util__["isNullOrUndefined"])(this.Info)) {
                this.formGroup.value.value = this.Info;
                this.Info = null;
            }
            this.service.save(this.formGroup.value, this.isNew, this.data);
            this.closeEditor();
        }
    };
    BirgridComponent.prototype.fileUploadonselect = function () {
        var uploadsFile = document.getElementById("upload");
        var file = uploadsFile.files[0];
        var self = this;
        var reader = new FileReader(); //这是核心！！读取操作都是由它完成的
        reader.readAsDataURL(file);
        reader.onload = function () {
            var results = document.getElementById("result");
            results.innerHTML = '<img src="' + this.result + '" alt=""/>';
            self.Info = this.result.toString();
        };
        this.Info = self.Info;
    };
    BirgridComponent.prototype.saveCurrentViewModel = function () {
        var bititem = this.data;
        this.currentViewModel.imageResources = [];
        for (var i = 0; i < bititem.length; i++) {
            if (this.checkTextElement(bititem[i], this.currentViewModel)) {
                this.bitresourceitem[i] = { id: '', value: '', resourceType: __WEBPACK_IMPORTED_MODULE_5__resourcemetadata_resourcemetadata__["ResourceType"].BinaryFile };
                this.bitresourceitem[i].id = bititem[i].id;
                this.bitresourceitem[i].value = bititem[i].value;
                this.currentViewModel.imageResources.push(this.bitresourceitem[i]);
            }
            else {
                this.currentViewModel.imageResources.find(function (x) { return (x.id == bititem[i].id); }).value = bititem[i].value;
            }
        }
    };
    BirgridComponent.prototype.checkTextElement = function (element, resourcecontent) {
        for (var i = 0; i < resourcecontent.imageResources.length; i++) {
            if (resourcecontent.imageResources[i].id == element.id) {
                this.checkbitelement = false;
                break;
            }
            else
                this.checkbitelement = true;
        }
        return this.checkbitelement;
    };
    BirgridComponent.prototype.loadFile = function () {
        var resulta = document.getElementById("upload");
        resulta.click();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__progress_kendo_angular_grid__["GridComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__progress_kendo_angular_grid__["GridComponent"])
    ], BirgridComponent.prototype, "grid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__resourcemetadata_resourcemetadata__["ResourceMetadata"])
    ], BirgridComponent.prototype, "currentViewModel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], BirgridComponent.prototype, "change", void 0);
    BirgridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-birgrid',
            template: __webpack_require__("./src/packages/resource-metadata-designer/views/resourcemetadatadesigner/birgrid/birgrid.component.html"),
            styles: [__webpack_require__("./src/packages/resource-metadata-designer/views/resourcemetadatadesigner/birgrid/birgrid.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__bitresources_service__["BitresourcesService"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"]])
    ], BirgridComponent);
    return BirgridComponent;
}());



/***/ }),

/***/ "./src/packages/resource-metadata-designer/views/resourcemetadatadesigner/birgrid/bitresources.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitresourcesService", function() { return BitresourcesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BitresourcesService = (function () {
    function BitresourcesService() {
        this.bitmetadatas = [{
                bitId: 1,
                id: '',
                value: ''
            }];
    }
    // private data: any[] = bitresources;
    // private counter: number = bitresources.length;
    BitresourcesService.prototype.bitresources = function () {
        return this.bitmetadatas;
    };
    BitresourcesService.prototype.remove = function (bitresource, data) {
        var index = data.findIndex(function (obj) { return obj.bitId === bitresource.dataItem.bitId; });
        data.splice(index, 1);
        for (var i = index; i <= data.length - 1; i++) {
            data[i].bitId--;
        }
    };
    BitresourcesService.prototype.save = function (bitresource, isNew, data) {
        if (isNew) {
            bitresource.bitId = data.length + 1;
            data.push(bitresource);
        }
        else {
            Object.assign(data.find(function (obj) { return obj.bitId === bitresource.bitId; }), bitresource);
        }
    };
    BitresourcesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], BitresourcesService);
    return BitresourcesService;
}());



/***/ }),

/***/ "./src/packages/resource-metadata-designer/views/resourcemetadatadesigner/resourcemetadata.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "kendo-tabstrip p {\r\n    margin: 0;\r\n    padding: 8px;\r\n}\r\nkendo-splitter { margin: 20px 0 0; }\r\n h3 { font-size: 1.2em; padding: 10px; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/resource-metadata-designer/views/resourcemetadatadesigner/resourcemetadata.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div style=\"background: #f3f3f3;width: 920px;\">\r\n        <button kendoButton [look]=\"'bare'\" (click)=\"onSave()\" [icon]=\"'save'\">保存</button>\r\n        <button kendoButton [look]=\"'bare'\" (click)=\"onLoad()\" [icon]=\"'download'\">导入资源</button>\r\n        <input  type=\"file\" value=\"\" id=\"uploads\" (change)= \"fileUploadonselect()\" style=\"display:none\" accept=\".rs\"/>\r\n    </div>\r\n    \r\n       <div>\r\n          <kendo-tabstrip>\r\n              <kendo-tabstrip-tab [title]=\"'基本信息'\" [selected]=\"true\" style=\" flex: 1 1 auto; display: flex;\">\r\n                <ng-template kendoTabContent>\r\n                 <div>\r\n                 <app-baseinfo style=\" flex: 1 1 auto; display: flex; \" [(currentViewModel)]=\"resourcemodel\"></app-baseinfo>\r\n                 </div>\r\n                </ng-template>\r\n              </kendo-tabstrip-tab>\r\n              <kendo-tabstrip-tab [title]=\"'资源项'\" >\r\n                <ng-template kendoTabContent>\r\n                    <kendo-splitter orientation=\"horizontal\" style=\"height: 500px;\">\r\n                        <kendo-splitter-pane size=\"15%\"> \r\n                           <div>                        \r\n                                  <button kendoButton style=\"width: 99%;height:40px\" (click)=\"onSelectText()\" [look]=\"'flat'\" [primary]=\"true\">文本资源</button>\r\n                           </div>\r\n                           <div>\r\n                                  <button kendoButton style=\"width: 99%;height:40px\" (click)=\"onSelectBiry()\" [look]=\"'flat'\" [primary]=\"true\">二进制资源</button>\r\n                           </div> \r\n                        </kendo-splitter-pane>\r\n                        <kendo-splitter-pane> \r\n                          <div *ngIf = selectedResource>\r\n                            <app-textgrid [(currentViewModel)]=\"resourcemodel\" (change)=\"textChange($event)\"></app-textgrid>\r\n                          </div>\r\n                          <div *ngIf = !selectedResource>  \r\n                            <app-birgrid [(currentViewModel)]=\"resourcemodel\" (change)=\"bitChange($event)\"></app-birgrid>\r\n                          </div>         \r\n                        </kendo-splitter-pane>                     \r\n                      </kendo-splitter>              \r\n                </ng-template>\r\n              </kendo-tabstrip-tab>           \r\n            </kendo-tabstrip>\r\n        </div>        \r\n  </div>\r\n  \r\n  \r\n"

/***/ }),

/***/ "./src/packages/resource-metadata-designer/views/resourcemetadatadesigner/resourcemetadata.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceMetadataComponent", function() { return ResourceMetadataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resourcemetadata_resourcemetadata__ = __webpack_require__("./src/packages/resource-metadata-designer/views/resourcemetadatadesigner/resourcemetadata/resourcemetadata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gsp_lcm_metadata_selector__ = __webpack_require__("./node_modules/@gsp-lcm/metadata-selector/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gsp_lcm_metadata_selector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__gsp_lcm_metadata_selector__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__textgrid_textgrid_component__ = __webpack_require__("./src/packages/resource-metadata-designer/views/resourcemetadatadesigner/textgrid/textgrid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__birgrid_birgrid_component__ = __webpack_require__("./src/packages/resource-metadata-designer/views/resourcemetadatadesigner/birgrid/birgrid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__farris_ide_devkit_services__ = __webpack_require__("./node_modules/@farris/ide-devkit/services/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__farris_ide_devkit_services___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__farris_ide_devkit_services__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { HttpUrlConst } from '../../../bedesigner-frame/views/bedesigner-frame/util/be-reference';



var ResourceMetadataComponent = (function () {
    function ResourceMetadataComponent(lcmService, cache) {
        this.lcmService = lcmService;
        this.cache = cache;
        this.textresourceitem = [];
        this.bitresourceitem = [];
        this.resourcecontent = {
            code: '',
            name: '',
            bizObject: '',
            lastModifiedTime: '',
            stringResources: this.textresourceitem,
            imageResources: this.bitresourceitem
        };
        this.resourcemetadataDto = {
            id: '',
            nameSpace: '',
            code: '',
            name: '',
            fileName: '',
            type: '',
            bizobjectID: '',
            relativePath: '',
            extendProperty: '',
            content: ''
        };
        this.selectedResource = true;
        this.checktextelement = true;
        this.checkbitelement = true;
        this.resourcemodel = {
            code: '',
            name: '',
            bizObject: '',
            lastModifiedTime: '',
            stringResources: this.textresourceitem,
            imageResources: this.bitresourceitem
        };
        this.resourceTypeList = []; //资源类型列表
    }
    Object.defineProperty(ResourceMetadataComponent.prototype, "metadataUri", {
        set: function (metadataUri) {
            var _this = this;
            var filename = metadataUri.substring(metadataUri.lastIndexOf('/') + 1);
            var filepath = metadataUri.substring(1, metadataUri.lastIndexOf('/'));
            this.lcmService.LoadMetadata(filename, filepath).subscribe(function (data) {
                _this.dto = data;
                _this.loadRs(_this.dto);
            });
            // todo: 通过元数据服务获取元数据内容
            ///////
            //const name = metadataUri.slice(metadataUri.lastIndexOf('/'));
            //const dto = new MetadataDto('', '', '', name, '', 'rs', '', '', '', '{"Code":"","Name":"","BizObject":"","StringResources":[],"ImageResources":[],"LastModifiedTime":""}');
        },
        enumerable: true,
        configurable: true
    });
    ResourceMetadataComponent.prototype.textChange = function ($event) {
        this.resourcemodel.stringResources = $event.stringResources;
    };
    ResourceMetadataComponent.prototype.bitChange = function ($event) {
        this.resourcemodel.imageResources = $event.imageResources;
    };
    ResourceMetadataComponent.prototype.onSelectText = function () {
        this.selectedResource = true;
    };
    ResourceMetadataComponent.prototype.onSelectBiry = function () {
        this.selectedResource = false;
    };
    Object.defineProperty(ResourceMetadataComponent.prototype, "metadataContent", {
        set: function (metadataContent) {
            this.loadRs(metadataContent);
        },
        enumerable: true,
        configurable: true
    });
    ResourceMetadataComponent.prototype.loadRs = function (dto) {
        if (Object(__WEBPACK_IMPORTED_MODULE_3_util__["isNullOrUndefined"])(dto) || Object(__WEBPACK_IMPORTED_MODULE_3_util__["isNullOrUndefined"])(dto.content)) {
            this.resourcemodel = null;
            this.resourcemodel = null;
            return;
        }
        var temp = JSON.parse(dto.content);
        this.GetCamelParse(temp);
        this.resourcemodel = temp;
        this.resourcemetadataDto = dto;
    };
    //json串解析
    ResourceMetadataComponent.prototype.GetCamelParse = function (jsonObj) {
        for (var key in jsonObj) {
            if (typeof (jsonObj[key]) === "object") {
                this.GetCamelParse(jsonObj[key]);
            }
            var temp = jsonObj[key];
            delete (jsonObj[key]);
            jsonObj[this.ConvertToCamel(key)] = temp;
        }
    };
    //字符串转换为Camel
    ResourceMetadataComponent.prototype.ConvertToCamel = function (input) {
        if (input.length > 0) {
            var len = input.length;
            var strTemp = ""; //新字符串
            for (var i = 0; i < len; i++) {
                if (i == 0) {
                    strTemp += input[i].toLowerCase(); //第一个
                }
                else {
                    strTemp += input[i];
                }
            }
            return strTemp;
        }
    };
    //json串解析
    ResourceMetadataComponent.prototype.GetUnCamelParse = function (jsonObj) {
        for (var key in jsonObj) {
            if (typeof (jsonObj[key]) === "object") {
                this.GetUnCamelParse(jsonObj[key]);
            }
            var temp = jsonObj[key];
            delete (jsonObj[key]);
            jsonObj[this.ConvertToUncamel(key)] = temp;
        }
    };
    //字符串反转换Camel
    ResourceMetadataComponent.prototype.ConvertToUncamel = function (input) {
        if (input.length > 0) {
            var len = input.length;
            var strTemp = ""; //新字符串
            for (var i = 0; i < len; i++) {
                if (i == 0) {
                    strTemp += input[i].toUpperCase(); //第一个
                }
                else {
                    strTemp += input[i];
                }
            }
            return strTemp;
        }
    };
    ResourceMetadataComponent.prototype.onSave = function () {
        var tmpone = JSON.parse(this.resourcemetadataDto.content);
        this.GetCamelParse(tmpone);
        this.resourcecontent = tmpone;
        if (!Object(__WEBPACK_IMPORTED_MODULE_3_util__["isNullOrUndefined"])(this.childtext)) {
            this.resourcecontent.stringResources = [];
            var textitem = this.childtext.data;
            for (var i = 0; i < textitem.length; i++) {
                if (this.checkTextElement(textitem[i], this.resourcecontent)) {
                    this.textresourceitem[i] = { id: '', value: '', resourceType: __WEBPACK_IMPORTED_MODULE_1__resourcemetadata_resourcemetadata__["ResourceType"].TextFile };
                    this.textresourceitem[i].id = textitem[i].id;
                    this.textresourceitem[i].value = textitem[i].value;
                }
                ;
                this.resourcecontent.stringResources.push(this.textresourceitem[i]);
            }
        }
        else {
            this.resourcecontent.stringResources = this.resourcemodel.stringResources;
        }
        if (!Object(__WEBPACK_IMPORTED_MODULE_3_util__["isNullOrUndefined"])(this.childbit)) {
            this.resourcecontent.imageResources = [];
            var bititem = this.childbit.data;
            for (var i = 0; i < bititem.length; i++) {
                if (this.checkBitElement(bititem[i], this.resourcecontent)) {
                    this.bitresourceitem[i] = { id: '', value: '', resourceType: __WEBPACK_IMPORTED_MODULE_1__resourcemetadata_resourcemetadata__["ResourceType"].BinaryFile };
                    this.bitresourceitem[i].id = bititem[i].id;
                    this.bitresourceitem[i].value = bititem[i].value;
                }
                ;
                this.resourcecontent.imageResources.push(this.bitresourceitem[i]);
            }
            ;
        }
        else {
            this.resourcecontent.imageResources = this.resourcemodel.imageResources;
        }
        this.GetUnCamelParse(this.resourcecontent);
        var stringcontent = JSON.stringify(this.resourcecontent);
        this.resourcemetadataDto.content = stringcontent;
        var sessionId = this.cache.get('sessionId');
        this.lcmService.SaveMetadata(this.resourcemetadataDto, sessionId).subscribe(function () {
            alert('保存成功');
        }, function () {
            alert('保存失败');
        });
        this.GetCamelParse(this.resourcecontent);
    };
    ResourceMetadataComponent.prototype.checkTextElement = function (element, resourcecontent) {
        for (var i = 0; i < resourcecontent.stringResources.length; i++) {
            if (resourcecontent.stringResources[i].id == element.id) {
                this.checktextelement = false;
                break;
            }
            else
                this.checktextelement = true;
        }
        return this.checktextelement;
    };
    ResourceMetadataComponent.prototype.checkBitElement = function (element, resourcecontent) {
        for (var i = 0; i < resourcecontent.imageResources.length; i++) {
            if (resourcecontent.imageResources[i].id == element.id) {
                this.checkbitelement = false;
                break;
            }
            else
                this.checkbitelement = true;
        }
        return this.checkbitelement;
    };
    ResourceMetadataComponent.prototype.onLoad = function () {
        var results = document.getElementById("uploads");
        results.click();
    };
    ResourceMetadataComponent.prototype.fileUploadonselect = function () {
        var uploadsFile = document.getElementById("uploads");
        var file = uploadsFile.files[0];
        var self = this;
        var reader = new FileReader();
        reader.readAsBinaryString(file);
        reader.onload = function () {
            var resultInfo = JSON.parse(this.result.toString());
            var contentInfo = JSON.parse(resultInfo.Content);
            self.GetCamelParse(contentInfo);
            self.resourcemodel.stringResources = contentInfo.stringResources;
            self.resourcemodel.imageResources = contentInfo.imageResources;
        };
        this.resourcemodel.stringResources = self.resourcemodel.stringResources;
        this.resourcemodel.imageResources = self.resourcemodel.imageResources;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__textgrid_textgrid_component__["TextgridComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__textgrid_textgrid_component__["TextgridComponent"])
    ], ResourceMetadataComponent.prototype, "childtext", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__birgrid_birgrid_component__["BirgridComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__birgrid_birgrid_component__["BirgridComponent"])
    ], ResourceMetadataComponent.prototype, "childbit", void 0);
    ResourceMetadataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-resourcemetadata',
            template: __webpack_require__("./src/packages/resource-metadata-designer/views/resourcemetadatadesigner/resourcemetadata.component.html"),
            styles: [__webpack_require__("./src/packages/resource-metadata-designer/views/resourcemetadatadesigner/resourcemetadata.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__gsp_lcm_metadata_selector__["GSPMetadataService"], __WEBPACK_IMPORTED_MODULE_6__farris_ide_devkit_services__["CacheService"]])
    ], ResourceMetadataComponent);
    return ResourceMetadataComponent;
}());



/***/ }),

/***/ "./src/packages/resource-metadata-designer/views/resourcemetadatadesigner/resourcemetadata.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceMetadataModule", function() { return ResourceMetadataModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_buttons__ = __webpack_require__("./node_modules/@progress/kendo-angular-buttons/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resourcemetadata_component__ = __webpack_require__("./src/packages/resource-metadata-designer/views/resourcemetadatadesigner/resourcemetadata.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_layout__ = __webpack_require__("./node_modules/@progress/kendo-angular-layout/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_grid__ = __webpack_require__("./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_upload__ = __webpack_require__("./node_modules/@progress/kendo-angular-upload/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__baseinfo_baseinfo_component__ = __webpack_require__("./src/packages/resource-metadata-designer/views/resourcemetadatadesigner/baseinfo/baseinfo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__textgrid_textgrid_component__ = __webpack_require__("./src/packages/resource-metadata-designer/views/resourcemetadatadesigner/textgrid/textgrid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__textgrid_textresources_service__ = __webpack_require__("./src/packages/resource-metadata-designer/views/resourcemetadatadesigner/textgrid/textresources.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__birgrid_bitresources_service__ = __webpack_require__("./src/packages/resource-metadata-designer/views/resourcemetadatadesigner/birgrid/bitresources.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__birgrid_birgrid_component__ = __webpack_require__("./src/packages/resource-metadata-designer/views/resourcemetadatadesigner/birgrid/birgrid.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var ResourceMetadataModule = (function () {
    function ResourceMetadataModule() {
    }
    ResourceMetadataModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__resourcemetadata_component__["ResourceMetadataComponent"],
                __WEBPACK_IMPORTED_MODULE_7__baseinfo_baseinfo_component__["BaseinfoComponent"],
                __WEBPACK_IMPORTED_MODULE_10__textgrid_textgrid_component__["TextgridComponent"],
                __WEBPACK_IMPORTED_MODULE_13__birgrid_birgrid_component__["BirgridComponent"]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_9__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_buttons__["ButtonsModule"],
                __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_layout__["LayoutModule"],
                __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_grid__["GridModule"],
                __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_upload__["UploadModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["HttpClientModule"],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["FormsModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__textgrid_textresources_service__["TextResourcesService"], __WEBPACK_IMPORTED_MODULE_12__birgrid_bitresources_service__["BitresourcesService"]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__resourcemetadata_component__["ResourceMetadataComponent"]]
        })
    ], ResourceMetadataModule);
    return ResourceMetadataModule;
}());



/***/ }),

/***/ "./src/packages/resource-metadata-designer/views/resourcemetadatadesigner/resourcemetadata/resourcemetadata.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceMetadata", function() { return ResourceMetadata; });
/* unused harmony export TextResourceItem */
/* unused harmony export BinaryResourceItem */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceType", function() { return ResourceType; });
/* unused harmony export TextItem */
/* unused harmony export BitItem */
var ResourceMetadata = (function () {
    function ResourceMetadata() {
    }
    return ResourceMetadata;
}());

var TextResourceItem = (function () {
    function TextResourceItem() {
    }
    return TextResourceItem;
}());

var BinaryResourceItem = (function () {
    function BinaryResourceItem() {
    }
    return BinaryResourceItem;
}());

var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["TextFile"] = 0] = "TextFile";
    ResourceType[ResourceType["BinaryFile"] = 1] = "BinaryFile";
})(ResourceType || (ResourceType = {}));
var TextItem = (function () {
    function TextItem() {
    }
    return TextItem;
}());

var BitItem = (function () {
    function BitItem() {
    }
    return BitItem;
}());



/***/ }),

/***/ "./src/packages/resource-metadata-designer/views/resourcemetadatadesigner/textgrid/textgrid.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/resource-metadata-designer/views/resourcemetadatadesigner/textgrid/textgrid.component.html":
/***/ (function(module, exports) {

module.exports = "<kendo-grid id=\"textGrid\"\n(cellClick)=\"cellClickHandler($event)\"\n[groupable]=\"false\"\n[group]=\"groups\"\n(groupChange)=\"groupChange($event)\"\n[data]=\"gridData\"\n[height]=\"500\" \n(add)=\"addHandler()\"\n(remove)=\"removeHandler($event)\"\n[navigable]=\"true\">\n    <ng-template kendoGridToolbarTemplate>\n        <button kendoGridAddCommand [icon]=\"'plus-outline'\">新增文本资源</button>       \n    </ng-template>\n\n    <kendo-grid-column field=\"id\" title=\"资源编号\" width=\"85\"  [headerStyle]=\"{'text-align': 'center'}\"  [style]=\"{'text-align':'center'}\">             \n    </kendo-grid-column>\n    <kendo-grid-column field=\"value\" title=\"资源文本\"  width=\"150\" [headerStyle]=\"{'text-align': 'center'}\" [style]=\"{'text-align':'center'}\">\n    </kendo-grid-column>\n    <kendo-grid-command-column title=\"\" width=\"40\" [style]=\"{'text-align':'center'}\">\n        <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\n            <button kendoGridRemoveCommand type=\"button\" [icon]=\"'delete'\">删除资源</button>\n        </ng-template>\n    </kendo-grid-command-column>\n</kendo-grid>"

/***/ }),

/***/ "./src/packages/resource-metadata-designer/views/resourcemetadatadesigner/textgrid/textgrid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextgridComponent", function() { return TextgridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progress_kendo_angular_grid__ = __webpack_require__("./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_kendo_data_query__ = __webpack_require__("./node_modules/@progress/kendo-data-query/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__textresources_service__ = __webpack_require__("./src/packages/resource-metadata-designer/views/resourcemetadatadesigner/textgrid/textresources.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__resourcemetadata_resourcemetadata__ = __webpack_require__("./src/packages/resource-metadata-designer/views/resourcemetadatadesigner/resourcemetadata/resourcemetadata.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var createFormGroup = function (dataItem) { return new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
    'textId': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](dataItem.textId),
    'id': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](dataItem.id),
    'value': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](dataItem.value)
}); };
var matches = function (el, selector) { return (el.matches || el.msMatchesSelector).call(el, selector); };
var TextgridComponent = (function () {
    function TextgridComponent(service, renderer) {
        this.service = service;
        this.renderer = renderer;
        this.groups = [];
        this.checktextelement = true;
        this.textresourceitem = [];
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.textmetadatas = [{
                textId: 1,
                id: '',
                value: ''
            }];
        this.data = [];
    }
    TextgridComponent.prototype.ngOnInit = function () {
        if (this.currentViewModel.stringResources.length != 0) {
            var igridData = this.currentViewModel.stringResources;
            for (var i = 0; i < igridData.length; i++) {
                this.data[i] = { textId: i + 1, id: '', value: '' };
                this.data[i].id = igridData[i].id;
                this.data[i].value = igridData[i].value;
            }
            this.gridData = this.data;
        }
        else {
            this.gridData = this.textmetadatas;
            this.data = this.textmetadatas;
        }
        this.docClickSubscription = this.renderer.listen('document', 'click', this.onDocumentClick.bind(this));
    };
    TextgridComponent.prototype.ngOnDestroy = function () {
        this.docClickSubscription();
        this.saveCurrentViewModel();
        this.change.emit(this.currentViewModel);
    };
    TextgridComponent.prototype.addHandler = function () {
        this.closeEditor();
        this.formGroup = createFormGroup({
            'id': '',
            'value': ''
        });
        this.isNew = true;
        this.grid.addRow(this.formGroup);
    };
    TextgridComponent.prototype.removeHandler = function (dataItem) {
        this.service.remove(dataItem, this.data);
    };
    TextgridComponent.prototype.cellClickHandler = function (_a) {
        var isEdited = _a.isEdited, dataItem = _a.dataItem, rowIndex = _a.rowIndex;
        if (isEdited || (this.formGroup && !this.formGroup.valid)) {
            return;
        }
        this.saveCurrent();
        this.formGroup = createFormGroup(dataItem);
        this.editedRowIndex = rowIndex;
        this.grid.editRow(rowIndex, this.formGroup);
    };
    TextgridComponent.prototype.cancelHandler = function () {
        this.closeEditor();
    };
    TextgridComponent.prototype.groupChange = function (groups) {
        debugger;
        this.groups = groups;
        this.gridData = Object(__WEBPACK_IMPORTED_MODULE_3__progress_kendo_data_query__["groupBy"])(this.service.textresources(), this.groups);
    };
    TextgridComponent.prototype.closeEditor = function () {
        this.grid.closeRow(this.editedRowIndex);
        this.isNew = false;
        this.editedRowIndex = undefined;
        this.formGroup = undefined;
    };
    TextgridComponent.prototype.onDocumentClick = function (e) {
        if (this.formGroup && this.formGroup.valid &&
            !matches(e.target, '#textGrid tbody *, #textGrid .k-grid-toolbar .k-button')) {
            this.saveCurrent();
        }
    };
    TextgridComponent.prototype.saveCurrent = function () {
        if (this.formGroup) {
            this.service.save(this.formGroup.value, this.isNew, this.data);
            this.closeEditor();
        }
    };
    TextgridComponent.prototype.saveCurrentViewModel = function () {
        var textitem = this.data;
        this.currentViewModel.stringResources = [];
        for (var i = 0; i < textitem.length; i++) {
            if (this.checkTextElement(textitem[i], this.currentViewModel)) {
                this.textresourceitem[i] = { id: '', value: '', resourceType: __WEBPACK_IMPORTED_MODULE_5__resourcemetadata_resourcemetadata__["ResourceType"].TextFile };
                this.textresourceitem[i].id = textitem[i].id;
                this.textresourceitem[i].value = textitem[i].value;
                this.currentViewModel.stringResources.push(this.textresourceitem[i]);
            }
            else {
                this.currentViewModel.stringResources.find(function (x) { return (x.id == textitem[i].id); }).value = textitem[i].value;
            }
        }
    };
    TextgridComponent.prototype.checkTextElement = function (element, resourcecontent) {
        for (var i = 0; i < resourcecontent.stringResources.length; i++) {
            if (resourcecontent.stringResources[i].id == element.id) {
                this.checktextelement = false;
                break;
            }
            else
                this.checktextelement = true;
        }
        return this.checktextelement;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__progress_kendo_angular_grid__["GridComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__progress_kendo_angular_grid__["GridComponent"])
    ], TextgridComponent.prototype, "grid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__resourcemetadata_resourcemetadata__["ResourceMetadata"])
    ], TextgridComponent.prototype, "currentViewModel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TextgridComponent.prototype, "change", void 0);
    TextgridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-textgrid',
            template: __webpack_require__("./src/packages/resource-metadata-designer/views/resourcemetadatadesigner/textgrid/textgrid.component.html"),
            styles: [__webpack_require__("./src/packages/resource-metadata-designer/views/resourcemetadatadesigner/textgrid/textgrid.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__textresources_service__["TextResourcesService"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]])
    ], TextgridComponent);
    return TextgridComponent;
}());



/***/ }),

/***/ "./src/packages/resource-metadata-designer/views/resourcemetadatadesigner/textgrid/textresources.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextResourcesService", function() { return TextResourcesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TextResourcesService = (function () {
    function TextResourcesService() {
        this.textmetadatas = [{
                textId: 1,
                id: '',
                value: ''
            }];
    }
    TextResourcesService.prototype.textresources = function () {
        return this.textmetadatas;
    };
    TextResourcesService.prototype.remove = function (textresource, data) {
        var index = data.findIndex(function (obj) { return obj.textId === textresource.dataItem.textId; });
        data.splice(index, 1);
        for (var i = index; i <= data.length - 1; i++) {
            data[i].textId--;
        }
    };
    TextResourcesService.prototype.save = function (textresource, isNew, data) {
        if (isNew) {
            textresource.textId = data.length + 1;
            data.push(textresource);
        }
        else {
            Object.assign(data.find(function (_a) {
                var textId = _a.textId;
                return textId === textresource.textId;
            }), textresource);
        }
    };
    TextResourcesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], TextResourcesService);
    return TextResourcesService;
}());



/***/ })

},[]);
//# sourceMappingURL=rspackage.module.chunk.js.map