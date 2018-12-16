webpackJsonp(["sgpackage.module"],{

/***/ "./node_modules/@progress/kendo-angular-grid/dist/es2015/utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_merge__ = __webpack_require__("./node_modules/rxjs/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__);



/**
 * @hidden
 */
const isPresent = (value) => value !== null && value !== undefined;
/* harmony export (immutable) */ __webpack_exports__["isPresent"] = isPresent;

/**
 * @hidden
 */
const isBlank = (value) => value === null || value === undefined;
/* harmony export (immutable) */ __webpack_exports__["isBlank"] = isBlank;

/**
 * @hidden
 */
const isArray = (value) => Array.isArray(value);
/* harmony export (immutable) */ __webpack_exports__["isArray"] = isArray;

/**
 * @hidden
 */
const isTruthy = (value) => !!value;
/* harmony export (immutable) */ __webpack_exports__["isTruthy"] = isTruthy;

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
/* harmony export (immutable) */ __webpack_exports__["isChanged"] = isChanged;

/**
 * @hidden
 */
const anyChanged = (propertyNames, changes, skipFirstChange = true) => propertyNames.some(name => isChanged(name, changes, skipFirstChange));
/* harmony export (immutable) */ __webpack_exports__["anyChanged"] = anyChanged;

/**
 * @hidden
 */
const observe = (list) => Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_merge__["merge"])(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])(list), list.changes);
/* harmony export (immutable) */ __webpack_exports__["observe"] = observe;

/**
 * @hidden
 */
const isUniversal = () => typeof document === 'undefined';
/* harmony export (immutable) */ __webpack_exports__["isUniversal"] = isUniversal;

/**
 * @hidden
 */
const extractFormat = (format) => {
    if (!isNullOrEmptyString(format) && format.startsWith('{0:')) {
        return format.slice(3, format.length - 1);
    }
    return format;
};
/* harmony export (immutable) */ __webpack_exports__["extractFormat"] = extractFormat;

/**
 * @hidden
 */
const not = (fn) => (...args) => !fn.apply(null, args);
/* harmony export (immutable) */ __webpack_exports__["not"] = not;

/**
 * @hidden
 */
const or = (...conditions) => (value) => conditions.reduce((acc, x) => acc || x(value), false);
/* harmony export (immutable) */ __webpack_exports__["or"] = or;

/**
 * @hidden
 */
const and = (...conditions) => (value) => conditions.reduce((acc, x) => acc && x(value), true);
/* harmony export (immutable) */ __webpack_exports__["and"] = and;

/**
 * @hidden
 */
const Skip = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]("Skip");
/* harmony export (immutable) */ __webpack_exports__["Skip"] = Skip;
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
/* harmony export (immutable) */ __webpack_exports__["guid"] = guid;



/***/ }),

/***/ "./node_modules/@progress/kendo-angular-toolbar/dist/es/common/keys.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Keys", function() { return Keys; });
/**
 * @hidden
 */
var Keys;
(function (Keys) {
    Keys[Keys["backspace"] = 8] = "backspace";
    Keys[Keys["tab"] = 9] = "tab";
    Keys[Keys["enter"] = 13] = "enter";
    Keys[Keys["shift"] = 16] = "shift";
    Keys[Keys["ctrl"] = 17] = "ctrl";
    Keys[Keys["alt"] = 18] = "alt";
    Keys[Keys["pause/break"] = 19] = "pause/break";
    Keys[Keys["caps lock"] = 20] = "caps lock";
    Keys[Keys["esc"] = 27] = "esc";
    Keys[Keys["space"] = 32] = "space";
    Keys[Keys["page up"] = 33] = "page up";
    Keys[Keys["page down"] = 34] = "page down";
    Keys[Keys["end"] = 35] = "end";
    Keys[Keys["home"] = 36] = "home";
    Keys[Keys["left"] = 37] = "left";
    Keys[Keys["up"] = 38] = "up";
    Keys[Keys["right"] = 39] = "right";
    Keys[Keys["down"] = 40] = "down";
    Keys[Keys["insert"] = 45] = "insert";
    Keys[Keys["delete"] = 46] = "delete";
    Keys[Keys["command"] = 91] = "command";
    Keys[Keys["left command"] = 91] = "left command";
    Keys[Keys["right command"] = 93] = "right command";
    Keys[Keys["numpad *"] = 106] = "numpad *";
    Keys[Keys["numpad +"] = 107] = "numpad +";
    Keys[Keys["numpad -"] = 109] = "numpad -";
    Keys[Keys["numpad ."] = 110] = "numpad .";
    Keys[Keys["numpad /"] = 111] = "numpad /";
    Keys[Keys["num lock"] = 144] = "num lock";
    Keys[Keys["scroll lock"] = 145] = "scroll lock";
    Keys[Keys["my computer"] = 182] = "my computer";
    Keys[Keys["my calculator"] = 183] = "my calculator";
    Keys[Keys[";"] = 186] = ";";
    Keys[Keys["="] = 187] = "=";
    Keys[Keys[","] = 188] = ",";
    Keys[Keys["-"] = 189] = "-";
    Keys[Keys["."] = 190] = ".";
    Keys[Keys["/"] = 191] = "/";
    Keys[Keys["`"] = 192] = "`";
    Keys[Keys["["] = 219] = "[";
    Keys[Keys["\\"] = 220] = "\\";
    Keys[Keys["]"] = 221] = "]";
    Keys[Keys["'"] = 222] = "'";
})(Keys || (Keys = {}));


/***/ }),

/***/ "./node_modules/@progress/kendo-angular-toolbar/dist/es/common/preventable-event.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreventableEvent", function() { return PreventableEvent; });
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



/***/ }),

/***/ "./node_modules/@progress/kendo-angular-toolbar/dist/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main__ = __webpack_require__("./node_modules/@progress/kendo-angular-toolbar/dist/es/main.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "ToolBarModule", function() { return __WEBPACK_IMPORTED_MODULE_0__main__["ToolBarModule"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navigation_service__ = __webpack_require__("./node_modules/@progress/kendo-angular-toolbar/dist/es/navigation.service.js");
/* unused harmony reexport ɵb */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__refresh_service__ = __webpack_require__("./node_modules/@progress/kendo-angular-toolbar/dist/es/refresh.service.js");
/* unused harmony reexport ɵa */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__renderer_component__ = __webpack_require__("./node_modules/@progress/kendo-angular-toolbar/dist/es/renderer.component.js");
/* unused harmony reexport ɵc */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__renderer_service__ = __webpack_require__("./node_modules/@progress/kendo-angular-toolbar/dist/es/renderer.service.js");
/* unused harmony reexport ɵd */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tools_toolbar_buttonlist_component__ = __webpack_require__("./node_modules/@progress/kendo-angular-toolbar/dist/es/tools/toolbar-buttonlist.component.js");
/* unused harmony reexport ɵe */
/**
 * Generated bundle index. Do not edit.
 */








/***/ }),

/***/ "./node_modules/@progress/kendo-angular-toolbar/dist/es/main.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toolbar_component__ = __webpack_require__("./node_modules/@progress/kendo-angular-toolbar/dist/es/toolbar.component.js");
/* unused harmony reexport ToolBarComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools_toolbar_tool_component__ = __webpack_require__("./node_modules/@progress/kendo-angular-toolbar/dist/es/tools/toolbar-tool.component.js");
/* unused harmony reexport ToolBarToolComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tools_toolbar_button_component__ = __webpack_require__("./node_modules/@progress/kendo-angular-toolbar/dist/es/tools/toolbar-button.component.js");
/* unused harmony reexport ToolBarButtonComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tools_toolbar_buttongroup_component__ = __webpack_require__("./node_modules/@progress/kendo-angular-toolbar/dist/es/tools/toolbar-buttongroup.component.js");
/* unused harmony reexport ToolBarButtonGroupComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tools_toolbar_dropdownbutton_component__ = __webpack_require__("./node_modules/@progress/kendo-angular-toolbar/dist/es/tools/toolbar-dropdownbutton.component.js");
/* unused harmony reexport ToolBarDropDownButtonComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tools_toolbar_splitbutton_component__ = __webpack_require__("./node_modules/@progress/kendo-angular-toolbar/dist/es/tools/toolbar-splitbutton.component.js");
/* unused harmony reexport ToolBarSplitButtonComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tools_toolbar_separator_component__ = __webpack_require__("./node_modules/@progress/kendo-angular-toolbar/dist/es/tools/toolbar-separator.component.js");
/* unused harmony reexport ToolBarSeparatorComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__toolbar_module__ = __webpack_require__("./node_modules/@progress/kendo-angular-toolbar/dist/es/toolbar.module.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ToolBarModule", function() { return __WEBPACK_IMPORTED_MODULE_7__toolbar_module__["ToolBarModule"]; });










/***/ }),

/***/ "./node_modules/@progress/kendo-angular-toolbar/dist/es/navigation.service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationService", function() { return NavigationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__("./node_modules/@progress/kendo-angular-toolbar/dist/es/util.js");


/**
 * @hidden
 */
var NavigationService = /** @class */ (function () {
    function NavigationService() {
        this.keydown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isPopupFocused = false;
        this.tools = [];
        this.isFocusLocked = false;
        this.isOverflowButtonFocused = false;
    }
    NavigationService.prototype.register = function (t) {
        this.tools.push(t);
    };
    NavigationService.prototype.unregister = function (t) {
        this.tools.splice(this.tools.indexOf(t), 1);
    };
    NavigationService.prototype.moveFocusToToolBar = function () {
        this.isPopupFocused = false;
        this.focusOverflowButton();
    };
    NavigationService.prototype.moveFocusToPopup = function () {
        this.isPopupFocused = true;
    };
    NavigationService.prototype.focus = function (tool, focusLast) {
        var _this = this;
        this.focused = tool;
        this.tools.filter(function (t) { return t !== _this.focused; }).forEach(function (t) { return t.navigationService.defocus(); });
        this.isOverflowButtonFocused = false;
        tool.navigationService.focus(focusLast);
    };
    NavigationService.prototype.focusOverflowButton = function () {
        this.isOverflowButtonFocused = true;
        this.overflowButton.nativeElement.focus();
    };
    NavigationService.prototype.focusFirst = function () {
        if (this.isFocusLocked) {
            return;
        }
        var tool = this.tools.find(function (t) {
            if (t.navigationService.canFocus()) {
                return true;
            }
            else {
                return false;
            }
        });
        if (tool) {
            this.focus(tool);
        }
    };
    NavigationService.prototype.focusPrev = function (index) {
        // if (this.focused && this.focused.hasNextFocusableSibling()) {
        //     this.focused.focusPrevSibling();
        //     return;
        // }
        if (!Object(__WEBPACK_IMPORTED_MODULE_1__util__["isPresent"])(index)) {
            if (this.isOverflowButtonFocused) {
                index = this.tools.length - 1;
            }
            else {
                index = this.tools.indexOf(this.focused) - 1;
            }
        }
        if (this.isFocusLocked || !this.tools.length || index < 0) {
            return;
        }
        var tool = this.tools[index];
        if (tool.navigationService.canFocus()) {
            this.focus(tool, true);
        }
        else {
            this.focusPrev(index - 1);
        }
    };
    NavigationService.prototype.focusNext = function (index) {
        // if (this.focused && this.focused.hasNextFocusableSibling()) {
        //     this.focused.focusNextSibling();
        //     return;
        // }
        var overflowButtonIsVisible = this.overflowButton && this.overflowButton.nativeElement.style.visibility === "visible";
        if (!Object(__WEBPACK_IMPORTED_MODULE_1__util__["isPresent"])(index)) {
            index = this.tools.indexOf(this.focused) + 1;
        }
        if (index >= this.tools.length && overflowButtonIsVisible && !this.isOverflowButtonFocused) {
            this.focusOverflowButton();
        }
        if (this.isFocusLocked || !this.tools.length || index >= this.tools.length) {
            return;
        }
        var tool = this.tools[index];
        if (tool.navigationService.canFocus()) {
            this.focus(tool);
        }
        else {
            this.focusNext(index + 1);
        }
    };
    NavigationService.prototype.lock = function () {
        this.isFocusLocked = true;
    };
    NavigationService.prototype.unlock = function () {
        this.isFocusLocked = false;
    };
    NavigationService.prototype.focusEnter = function () {
        //TODO
        // if (this.focused.hasFocusableChild()) {
        //     this.isFocusLocked = true;
        //     this.focused.focusInside();
        // }
    };
    NavigationService.prototype.focusLeave = function () {
        //TODO
        // if (this.isFocusLocked) {
        //     this.isFocusLocked = false;
        //     this.focus(this.focused);
        // }
    };
    NavigationService.prototype.defocus = function (t) {
        t.navigationService.defocus();
    };
    NavigationService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    NavigationService.ctorParameters = function () { return []; };
    return NavigationService;
}());



/***/ }),

/***/ "./node_modules/@progress/kendo-angular-toolbar/dist/es/navigation/buttongroup-navigation.service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonGroupNavigationService", function() { return ButtonGroupNavigationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_keys__ = __webpack_require__("./node_modules/@progress/kendo-angular-toolbar/dist/es/common/keys.js");


/**
 * @hidden
 */
var ButtonGroupNavigationService = /** @class */ (function () {
    function ButtonGroupNavigationService() {
    }
    Object.defineProperty(ButtonGroupNavigationService.prototype, "toolbarNavigation", {
        get: function () {
            return this._navigationService;
        },
        set: function (service) {
            this._navigationService = service;
            if (this.keydownSubscription) {
                this.keydownSubscription.unsubscribe();
            }
            this.keydownSubscription = this._navigationService.keydown.subscribe(this.onKeydown.bind(this));
        },
        enumerable: true,
        configurable: true
    });
    ButtonGroupNavigationService.prototype.ngOnDestroy = function () {
        if (this.keydownSubscription) {
            this.keydownSubscription.unsubscribe();
        }
    };
    ButtonGroupNavigationService.prototype.register = function (rendererService, location) {
        if (location === "toolbar") {
            this.toolbarRenderer = rendererService;
        }
        else {
            this.overflowRenderer = rendererService;
        }
    };
    ButtonGroupNavigationService.prototype.canFocus = function () {
        return true;
    };
    ButtonGroupNavigationService.prototype.focus = function (focusPrev) {
        var buttons = this.buttons();
        var button = focusPrev ? buttons[buttons.length - 1] : buttons[0];
        this.toolbarNavigation.lock();
        this.renderer().setAttribute(button, "tabindex", "0");
        button.focus();
        this.current = button;
        this.isActive = true;
    };
    ButtonGroupNavigationService.prototype.defocus = function () {
        var _this = this;
        var buttons = this.buttons();
        buttons.forEach(function (button) {
            _this.renderer().setAttribute(button, "tabindex", "-1");
            if (_this.hasFocus(button)) {
                button.blur();
            }
        });
        this.current = undefined;
        this.isActive = false;
    };
    ButtonGroupNavigationService.prototype.hasFocus = function (element) {
        return document.activeElement !== element;
    };
    ButtonGroupNavigationService.prototype.buttons = function () {
        return Array.prototype.slice.call(this.renderer().querySelectorAll(".k-button"));
    };
    ButtonGroupNavigationService.prototype.renderer = function () {
        return this.toolbarNavigation.isPopupFocused ? this.overflowRenderer : this.toolbarRenderer;
    };
    ButtonGroupNavigationService.prototype.onKeydown = function (event) {
        if (!this.isActive) {
            return;
        }
        if (event.keyCode === __WEBPACK_IMPORTED_MODULE_1__common_keys__["Keys"].left) {
            if (this.buttons().indexOf(this.current) === 0) {
                this.toolbarNavigation.unlock();
                this.toolbarNavigation.focusPrev();
            }
        }
        if (event.keyCode === __WEBPACK_IMPORTED_MODULE_1__common_keys__["Keys"].right) {
            if (this.buttons().indexOf(this.current) === this.buttons().length - 1) {
                this.toolbarNavigation.unlock();
                this.toolbarNavigation.focusNext();
            }
        }
        this.current = this.buttons().find(function (button) {
            return button.tabIndex === 0;
        });
    };
    ButtonGroupNavigationService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    ButtonGroupNavigationService.ctorParameters = function () { return []; };
    return ButtonGroupNavigationService;
}());



/***/ }),

/***/ "./node_modules/@progress/kendo-angular-toolbar/dist/es/navigation/single-focusable-navigation.service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleFocusableNavigationService", function() { return SingleFocusableNavigationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__("./node_modules/@progress/kendo-angular-toolbar/dist/es/util.js");


/**
 * @hidden
 */
var SingleFocusableNavigationService = /** @class */ (function () {
    function SingleFocusableNavigationService() {
    }
    SingleFocusableNavigationService.prototype.register = function (rendererService, location) {
        if (location === "toolbar") {
            this.toolbarRenderer = rendererService;
        }
        else {
            this.overflowRenderer = rendererService;
        }
    };
    SingleFocusableNavigationService.prototype.canFocus = function () {
        var element = this.findFocusable();
        return element && element.offsetParent && !this.hasFocus(element) && !element.disabled;
    };
    SingleFocusableNavigationService.prototype.focus = function () {
        if (this.canFocus()) {
            var element = this.findFocusable();
            this.setAttribute(element, "tabindex", "0");
            element.focus();
        }
    };
    SingleFocusableNavigationService.prototype.defocus = function () {
        var element = this.findFocusable();
        if (element) {
            this.setAttribute(element, "tabindex", "-1");
            if (this.hasFocus(element)) {
                element.blur();
            }
        }
    };
    SingleFocusableNavigationService.prototype.hasFocus = function (element) {
        return document.activeElement !== element && Object(__WEBPACK_IMPORTED_MODULE_1__util__["closest"])(document.activeElement, function (e) { return e === element; });
    };
    SingleFocusableNavigationService.prototype.findFocusable = function () {
        return this.toolbarNavigation.isPopupFocused ? this.overflowRenderer.findFocusable() : this.toolbarRenderer.findFocusable();
    };
    SingleFocusableNavigationService.prototype.setAttribute = function (element, attr, value) {
        if (this.toolbarNavigation.isPopupFocused) {
            this.overflowRenderer.setAttribute(element, attr, value);
        }
        else {
            this.toolbarRenderer.setAttribute(element, attr, value);
        }
    };
    SingleFocusableNavigationService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    SingleFocusableNavigationService.ctorParameters = function () { return []; };
    return SingleFocusableNavigationService;
}());



/***/ }),

/***/ "./node_modules/@progress/kendo-angular-toolbar/dist/es/navigation/tool-navigation.service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolNavigationService", function() { return ToolNavigationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

/**
 * @hidden
 */
var ToolNavigationService = /** @class */ (function () {
    function ToolNavigationService() {
    }
    ToolNavigationService.prototype.register = function (rendererService, location) {
        if (location === 'toolbar') {
            this.toolbarRenderer = rendererService;
        }
        else {
            this.overflowRenderer = rendererService;
        }
    };
    ToolNavigationService.prototype.canFocus = function () {
        return false;
    };
    ToolNavigationService.prototype.focus = function () { };
    ToolNavigationService.prototype.defocus = function () { };
    ToolNavigationService.prototype.hasFocus = function () {
        return false;
    };
    ToolNavigationService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    ToolNavigationService.ctorParameters = function () { return []; };
    return ToolNavigationService;
}());



/***/ }),

/***/ "./node_modules/@progress/kendo-angular-toolbar/dist/es/refresh.service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefreshService", function() { return RefreshService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

/**
 * @hidden
 */
var RefreshService = /** @class */ (function () {
    function RefreshService() {
        this.onRefresh = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    RefreshService.prototype.refresh = function (tool) {
        this.onRefresh.emit(tool);
    };
    RefreshService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    RefreshService.ctorParameters = function () { return []; };
    return RefreshService;
}());



/***/ }),

/***/ "./node_modules/@progress/kendo-angular-toolbar/dist/es/renderer.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolBarRendererComponent", function() { return ToolBarRendererComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__("./node_modules/@progress/kendo-angular-toolbar/dist/es/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tools_toolbar_separator_component__ = __webpack_require__("./node_modules/@progress/kendo-angular-toolbar/dist/es/tools/toolbar-separator.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__refresh_service__ = __webpack_require__("./node_modules/@progress/kendo-angular-toolbar/dist/es/refresh.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navigation_service__ = __webpack_require__("./node_modules/@progress/kendo-angular-toolbar/dist/es/navigation.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__renderer_service__ = __webpack_require__("./node_modules/@progress/kendo-angular-toolbar/dist/es/renderer.service.js");






/**
 * @hidden
 */
var ToolBarRendererComponent = /** @class */ (function () {
    function ToolBarRendererComponent(element, renderer, rendererService, refreshService, navigationService) {
        var _this = this;
        this.element = element;
        this.renderer = renderer;
        this.rendererService = rendererService;
        this.refreshService = refreshService;
        this.navigationService = navigationService;
        this.rendererService.element = element;
        this.rendererService.renderer = this;
        this.refreshSubscription = this.refreshService.onRefresh.subscribe(function (tool) {
            if (_this.tool === tool) {
                _this.refresh();
            }
        });
    }
    Object.defineProperty(ToolBarRendererComponent.prototype, "className", {
        get: function () {
            return this.tool instanceof __WEBPACK_IMPORTED_MODULE_2__tools_toolbar_separator_component__["ToolBarSeparatorComponent"];
        },
        enumerable: true,
        configurable: true
    });
    ToolBarRendererComponent.prototype.onFocus = function () {
        this.navigationService.focused = this.tool;
    };
    ToolBarRendererComponent.prototype.ngOnInit = function () {
        if (this.resizable) {
            if (this.location === "toolbar") {
                this.template = this.tool.toolbarTemplate;
                this.renderer.setStyle(this.element.nativeElement, "visibility", "hidden");
                this.renderer.setStyle(this.element.nativeElement, "display", "none");
            }
            else {
                this.template = this.tool.popupTemplate;
                this.renderer.setStyle(this.element.nativeElement, "display", "none");
            }
        }
        else {
            this.tool.overflows = false;
            this.template = this.tool.toolbarTemplate;
            this.renderer.setStyle(this.element.nativeElement, "visibility", "display");
            this.renderer.setStyle(this.element.nativeElement, "display", "inline-block");
        }
        this.navigationService.register(this.tool);
        this.tool.navigationService.register(this.rendererService, this.location);
        this.tool.navigationService.toolbarNavigation = this.navigationService;
    };
    ToolBarRendererComponent.prototype.ngOnDestroy = function () {
        this.navigationService.unregister(this.tool);
        this.refreshSubscription.unsubscribe();
    };
    ToolBarRendererComponent.prototype.ngAfterViewInit = function () {
        // this.focusableElement = this.rendererService.findFocusable();
        if (this.resizable) {
            this.refresh();
        }
    };
    Object.defineProperty(ToolBarRendererComponent.prototype, "width", {
        /**
         * @hidden
         */
        get: function () {
            return this.tool.overflows ? 0 : Object(__WEBPACK_IMPORTED_MODULE_1__util__["outerWidth"])(this.element.nativeElement);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     */
    ToolBarRendererComponent.prototype.isDisplayed = function () {
        return this.element.nativeElement.style.display !== "none";
    };
    /**
     * @hidden
     */
    ToolBarRendererComponent.prototype.refresh = function () {
        if (this.resizable) {
            if (this.location === "toolbar") {
                this.renderer.setStyle(this.element.nativeElement, "visibility", this.tool.visibility);
                this.renderer.setStyle(this.element.nativeElement, "display", this.tool.toolbarDisplay);
            }
            else {
                this.renderer.setStyle(this.element.nativeElement, "display", this.tool.overflowDisplay);
            }
        }
    };
    /**
     * @hidden
     */
    ToolBarRendererComponent.prototype.setAttribute = function (element, attr, value) {
        this.renderer.setAttribute(element, attr, value);
    };
    ToolBarRendererComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    exportAs: 'kendoToolBarRenderer',
                    providers: [__WEBPACK_IMPORTED_MODULE_5__renderer_service__["RendererService"]],
                    selector: 'kendo-toolbar-renderer',
                    template: "\n        <ng-container *ngIf=\"location === 'toolbar'\">\n            <ng-template [ngTemplateOutlet]=\"template\"></ng-template>\n        </ng-container>\n        <ng-container *ngIf=\"location === 'overflow'\">\n            <li class=\"k-item\">\n                <ng-template [ngTemplateOutlet]=\"template\"></ng-template>\n            </li>\n        </ng-container>\n    "
                },] },
    ];
    /** @nocollapse */
    ToolBarRendererComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
        { type: __WEBPACK_IMPORTED_MODULE_5__renderer_service__["RendererService"], },
        { type: __WEBPACK_IMPORTED_MODULE_3__refresh_service__["RefreshService"], },
        { type: __WEBPACK_IMPORTED_MODULE_4__navigation_service__["NavigationService"], },
    ]; };
    ToolBarRendererComponent.propDecorators = {
        'tool': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'location': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'resizable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'className': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ["class.k-separator",] },],
        'onFocus': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ["focusin",] },],
    };
    return ToolBarRendererComponent;
}());



/***/ }),

/***/ "./node_modules/@progress/kendo-angular-toolbar/dist/es/renderer.service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RendererService", function() { return RendererService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__("./node_modules/@progress/kendo-angular-toolbar/dist/es/util.js");


/**
 * @hidden
 */
var RendererService = /** @class */ (function () {
    function RendererService() {
    }
    RendererService.prototype.getElement = function () {
        return this.element.nativeElement;
    };
    RendererService.prototype.querySelector = function (selector) {
        return this.element.nativeElement.querySelector(selector);
    };
    RendererService.prototype.querySelectorAll = function (selector) {
        return this.element.nativeElement.querySelectorAll(selector);
    };
    RendererService.prototype.findFocusable = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_1__util__["findFocusable"])(this.element.nativeElement, false);
    };
    RendererService.prototype.findFocusableChild = function (element) {
        if (!element) {
            element = this.findFocusable();
        }
        return Object(__WEBPACK_IMPORTED_MODULE_1__util__["findFocusableChild"])(element, false);
    };
    RendererService.prototype.findNextFocusableSibling = function (element) {
        if (!element) {
            element = this.findFocusable();
        }
        return Object(__WEBPACK_IMPORTED_MODULE_1__util__["findFocusableSibling"])(element, false);
    };
    RendererService.prototype.findPrevFocusableSibling = function (element) {
        if (!element) {
            element = this.findFocusable();
        }
        return Object(__WEBPACK_IMPORTED_MODULE_1__util__["findFocusableSibling"])(element, false, true);
    };
    RendererService.prototype.setAttribute = function (element, attr, value) {
        this.renderer.setAttribute(element, attr, value);
    };
    RendererService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    RendererService.ctorParameters = function () { return []; };
    return RendererService;
}());



/***/ }),

/***/ "./node_modules/@progress/kendo-angular-toolbar/dist/es/toolbar.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolBarComponent", function() { return ToolBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_popup__ = __webpack_require__("./node_modules/@progress/kendo-angular-popup/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progress_kendo_angular_l10n__ = __webpack_require__("./node_modules/@progress/kendo-angular-l10n/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__refresh_service__ = __webpack_require__("./node_modules/@progress/kendo-angular-toolbar/dist/es/refresh.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navigation_service__ = __webpack_require__("./node_modules/@progress/kendo-angular-toolbar/dist/es/navigation.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tools_toolbar_tool_component__ = __webpack_require__("./node_modules/@progress/kendo-angular-toolbar/dist/es/tools/toolbar-tool.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util__ = __webpack_require__("./node_modules/@progress/kendo-angular-toolbar/dist/es/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_keys__ = __webpack_require__("./node_modules/@progress/kendo-angular-toolbar/dist/es/common/keys.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_preventable_event__ = __webpack_require__("./node_modules/@progress/kendo-angular-toolbar/dist/es/common/preventable-event.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__renderer_component__ = __webpack_require__("./node_modules/@progress/kendo-angular-toolbar/dist/es/renderer.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_operators_filter__ = __webpack_require__("./node_modules/rxjs/operators/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_operators_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_operators_filter__);











/**
 * Represents the Kendo UI ToolBar component for Angular.
 */
var ToolBarComponent = /** @class */ (function () {
    function ToolBarComponent(localization, popupService, refreshService, navigationService, element, cdr) {
        this.localization = localization;
        this.popupService = popupService;
        this.refreshService = refreshService;
        this.navigationService = navigationService;
        this.element = element;
        this.cdr = cdr;
        /**
         * @hidden
         */
        this.resizable = false;
        /**
         * Specifies the [`tabindex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of the ToolBar.
         */
        this.tabindex = 0;
        /**
         * @hidden
         */
        this.open = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * @hidden
         */
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._popupSettings = { animate: true };
        this.direction = localization.rtl ? 'rtl' : 'ltr';
    }
    Object.defineProperty(ToolBarComponent.prototype, "popupSettings", {
        get: function () {
            return this._popupSettings;
        },
        /**
         * Configures the popup of the DropDownList.
         *
         * The available options are:
         * - `animate: Boolean`&mdash;Controls the popup animation. By default, the open and close animations are enabled.
         * - `popupClass: String`&mdash;Specifies a list of CSS classes that are used to style the popup.
         */
        set: function (settings) {
            this._popupSettings = Object.assign({}, { animate: true }, settings);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToolBarComponent.prototype, "tabIndex", {
        get: function () {
            return this.tabindex;
        },
        /**
         * @hidden
         */
        set: function (tabIndex) {
            this.tabindex = tabIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToolBarComponent.prototype, "appendTo", {
        get: function () {
            var appendTo = this.popupSettings.appendTo;
            if (!appendTo || appendTo === "root") {
                return undefined;
            }
            return appendTo === "component" ? this.container : appendTo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToolBarComponent.prototype, "popupOpen", {
        get: function () {
            return this._open;
        },
        set: function (open) {
            if (this.popupOpen === open) {
                return;
            }
            var eventArgs = new __WEBPACK_IMPORTED_MODULE_8__common_preventable_event__["PreventableEvent"]();
            if (open) {
                this.open.emit(eventArgs);
            }
            else {
                this.close.emit(eventArgs);
            }
            if (eventArgs.isDefaultPrevented()) {
                return;
            }
            this.toggle(open);
        },
        enumerable: true,
        configurable: true
    });
    ToolBarComponent.prototype.onFocus = function () {
        var focused = this.navigationService.focused;
        if (focused) {
            this.navigationService.focus(focused);
            return;
        }
        this.navigationService.focusFirst();
    };
    ToolBarComponent.prototype.onKeyDown = function (event) {
        var prev = this.direction === "ltr" ? event.keyCode === __WEBPACK_IMPORTED_MODULE_7__common_keys__["Keys"].left : event.keyCode === __WEBPACK_IMPORTED_MODULE_7__common_keys__["Keys"].right;
        var next = this.direction === "ltr" ? event.keyCode === __WEBPACK_IMPORTED_MODULE_7__common_keys__["Keys"].right : event.keyCode === __WEBPACK_IMPORTED_MODULE_7__common_keys__["Keys"].left;
        if (prev) {
            event.preventDefault();
            this.navigationService.focusPrev();
        }
        if (next) {
            event.preventDefault();
            this.navigationService.focusNext();
        }
        if (event.keyCode === __WEBPACK_IMPORTED_MODULE_7__common_keys__["Keys"].tab) {
            this.element.nativeElement.blur();
        }
        this.navigationService.keydown.emit(event);
    };
    Object.defineProperty(ToolBarComponent.prototype, "getTabIndex", {
        get: function () {
            return this.tabindex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToolBarComponent.prototype, "getRole", {
        get: function () {
            return "toolbar";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToolBarComponent.prototype, "getDir", {
        get: function () {
            return this.direction;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToolBarComponent.prototype, "className", {
        get: function () {
            return "k-widget k-toolbar";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToolBarComponent.prototype, "resizableClass", {
        get: function () {
            return this.resizable;
        },
        enumerable: true,
        configurable: true
    });
    ToolBarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.resizable) {
            this.resizeSubscription = this.resizeSensor.resize
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_10_rxjs_operators_filter__["filter"])(function () { return _this.resizable; }))
                .subscribe(this.onResize.bind(this));
            this.resizeSensor.resize.emit();
            this.navigationService.overflowButton = this.overflowButton;
        }
    };
    ToolBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.localizationChangesSubscription = this.localization
            .changes.subscribe(function (_a) {
            var rtl = _a.rtl;
            return _this.direction = rtl ? 'rtl' : 'ltr';
        });
    };
    ToolBarComponent.prototype.ngOnDestroy = function () {
        if (this.resizeSubscription) {
            this.resizeSubscription.unsubscribe();
        }
        if (this.localizationChangesSubscription) {
            this.localizationChangesSubscription.unsubscribe();
        }
    };
    ToolBarComponent.prototype.showPopup = function () {
        this.popupOpen = !this.popupOpen;
    };
    ToolBarComponent.prototype.toggle = function (popupOpen) {
        var _this = this;
        this._open = (popupOpen !== undefined) ? popupOpen : !this.popupOpen;
        if (this.popupRef) {
            this.popupRef.close();
            this.popupRef = null;
        }
        if (this.popupOpen) {
            this.popupRef = this.popupService.open({
                anchor: this.overflowButton,
                content: this.popupTemplate,
                appendTo: this.appendTo,
                animate: this.popupSettings.animate,
                popupClass: this.popupSettings.popupClass,
                positionMode: "absolute"
            });
            this.popupRef.popupOpen.subscribe(this.onPopupOpen.bind(this));
            this.popupRef.popupClose.subscribe(this.onPopupClose.bind(this));
            this.popupRef.popupAnchorViewportLeave.subscribe(function () { return _this.popupOpen = false; });
        }
    };
    ToolBarComponent.prototype.onResize = function () {
        this.toggle(false);
        var containerWidth = Object(__WEBPACK_IMPORTED_MODULE_6__util__["innerWidth"])(this.element.nativeElement) - this.overflowAnchorWidth;
        this.shrink(containerWidth, this.childrenWidth);
        this.stretch(containerWidth, this.childrenWidth);
        this.cdr.detectChanges();
        this.resizeSensor.acceptSize();
    };
    ToolBarComponent.prototype.onPopupOpen = function () {
        this.navigationService.moveFocusToPopup();
    };
    ToolBarComponent.prototype.onPopupClose = function () {
        this.navigationService.moveFocusToToolBar();
    };
    Object.defineProperty(ToolBarComponent.prototype, "displayAnchor", {
        get: function () {
            return this.overflowTools.length ? "visible" : "hidden";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToolBarComponent.prototype, "overflowAnchorWidth", {
        get: function () {
            if (!this.resizable) {
                return 0;
            }
            if (!this.cachedOverflowAnchorWidth) {
                this.cachedOverflowAnchorWidth = Object(__WEBPACK_IMPORTED_MODULE_6__util__["outerWidth"])(this.overflowButton.nativeElement);
            }
            return this.cachedOverflowAnchorWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToolBarComponent.prototype, "childrenWidth", {
        get: function () {
            var width = 0;
            this.renderedTools.forEach(function (container) {
                width += container.width;
            });
            width += this.overflowAnchorWidth;
            return Math.ceil(width);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToolBarComponent.prototype, "visibleTools", {
        get: function () {
            return this.allTools.filter(function (tool) {
                return tool.overflows === false;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToolBarComponent.prototype, "overflowTools", {
        get: function () {
            return this.allTools.filter(function (tool) {
                return tool.overflows === true;
            });
        },
        enumerable: true,
        configurable: true
    });
    ToolBarComponent.prototype.shrink = function (containerWidth, childrenWidth) {
        var width;
        if (containerWidth < childrenWidth) {
            for (var i = this.visibleTools.length - 1; i >= 0; i--) {
                if (containerWidth > childrenWidth) {
                    break;
                }
                else {
                    width = this.hideLastVisibleTool();
                    childrenWidth -= width;
                }
            }
        }
    };
    ToolBarComponent.prototype.stretch = function (containerWidth, childrenWidth) {
        var width;
        if (containerWidth > childrenWidth) {
            for (var i = this.overflowTools.length - 1; i >= 0; i--) {
                width = this.showFirstHiddenTool(containerWidth, childrenWidth);
                if (width) {
                    childrenWidth += width;
                }
                else {
                    break;
                }
            }
        }
    };
    ToolBarComponent.prototype.hideLastVisibleTool = function () {
        var tool = this.visibleTools[this.visibleTools.length - 1];
        var renderedElement = this.renderedTools.find(function (r) {
            return r.tool === tool;
        });
        var width = renderedElement.width;
        tool.overflows = true;
        this.refreshService.refresh(tool);
        return width;
    };
    ToolBarComponent.prototype.showFirstHiddenTool = function (containerWidth, childrenWidth) {
        var tool = this.overflowTools[0];
        var renderedElement = this.renderedTools.find(function (r) {
            return r.tool === tool;
        });
        tool.overflows = false;
        tool.visibility = "hidden";
        this.refreshService.refresh(tool);
        if (containerWidth > childrenWidth + renderedElement.width) {
            tool.visibility = "visible";
            this.refreshService.refresh(tool);
        }
        else {
            tool.overflows = true;
            this.refreshService.refresh(tool);
        }
        return renderedElement.width; //returns 0 if `overflows` is true
    };
    ToolBarComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    exportAs: 'kendoToolBar',
                    providers: [
                        __WEBPACK_IMPORTED_MODULE_3__refresh_service__["RefreshService"],
                        __WEBPACK_IMPORTED_MODULE_4__navigation_service__["NavigationService"],
                        __WEBPACK_IMPORTED_MODULE_2__progress_kendo_angular_l10n__["LocalizationService"],
                        {
                            provide: __WEBPACK_IMPORTED_MODULE_2__progress_kendo_angular_l10n__["L10N_PREFIX"],
                            useValue: 'kendo.toolbar'
                        }
                    ],
                    selector: 'kendo-toolbar',
                    template: "\n        <ng-container *ngFor=\"let tool of allTools; let index = index;\">\n            <kendo-toolbar-renderer [location]=\"'toolbar'\" [resizable]=\"resizable\" [tool]=\"tool\"></kendo-toolbar-renderer>\n        </ng-container>\n        <button #overflowButton\n            tabindex=\"-1\" *ngIf=\"resizable\" [style.visibility]=\"displayAnchor\" class=\"k-overflow-anchor k-button\" (click)=\"showPopup()\">\n            <span class=\"k-icon k-i-more-vertical\"></span>\n        </button>\n        <ng-template #popupTemplate>\n            <ul class=\"k-overflow-container k-list-container k-reset\">\n                <ng-container *ngFor=\"let tool of allTools; let index = index;\">\n                    <kendo-toolbar-renderer [location]=\"'overflow'\" [resizable]=\"resizable\" [tool]=\"tool\"></kendo-toolbar-renderer>\n                </ng-container>\n            </ul>\n        </ng-template>\n        <ng-container #container></ng-container>\n        <kendo-resize-sensor *ngIf=\"resizable\" [rateLimit]=\"1000\" #resizeSensor></kendo-resize-sensor>\n    "
                },] },
    ];
    /** @nocollapse */
    ToolBarComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__progress_kendo_angular_l10n__["LocalizationService"], },
        { type: __WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_popup__["PopupService"], },
        { type: __WEBPACK_IMPORTED_MODULE_3__refresh_service__["RefreshService"], },
        { type: __WEBPACK_IMPORTED_MODULE_4__navigation_service__["NavigationService"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
    ]; };
    ToolBarComponent.propDecorators = {
        'resizable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'popupSettings': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'tabindex': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'tabIndex': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ["tabIndex",] },],
        'open': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'close': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'allTools': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"], args: [__WEBPACK_IMPORTED_MODULE_5__tools_toolbar_tool_component__["ToolBarToolComponent"],] },],
        'overflowButton': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: ["overflowButton",] },],
        'popupTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: ["popupTemplate",] },],
        'resizeSensor': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: ["resizeSensor",] },],
        'container': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: ["container", { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] },] },],
        'renderedTools': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"], args: [__WEBPACK_IMPORTED_MODULE_9__renderer_component__["ToolBarRendererComponent"],] },],
        'onFocus': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ["focus",] },],
        'onKeyDown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ["keydown", ["$event"],] },],
        'getTabIndex': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ["attr.tabindex",] },],
        'getRole': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ["attr.role",] },],
        'getDir': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ["attr.dir",] },],
        'className': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ["class",] },],
        'resizableClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ["class.k-toolbar-resizable",] },],
    };
    return ToolBarComponent;
}());



/***/ }),

/***/ "./node_modules/@progress/kendo-angular-toolbar/dist/es/toolbar.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolBarModule", function() { return ToolBarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progress_kendo_angular_buttons__ = __webpack_require__("./node_modules/@progress/kendo-angular-buttons/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_popup__ = __webpack_require__("./node_modules/@progress/kendo-angular-popup/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_resize_sensor__ = __webpack_require__("./node_modules/@progress/kendo-angular-resize-sensor/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__toolbar_component__ = __webpack_require__("./node_modules/@progress/kendo-angular-toolbar/dist/es/toolbar.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tools_toolbar_tool_component__ = __webpack_require__("./node_modules/@progress/kendo-angular-toolbar/dist/es/tools/toolbar-tool.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tools_toolbar_button_component__ = __webpack_require__("./node_modules/@progress/kendo-angular-toolbar/dist/es/tools/toolbar-button.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tools_toolbar_buttongroup_component__ = __webpack_require__("./node_modules/@progress/kendo-angular-toolbar/dist/es/tools/toolbar-buttongroup.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tools_toolbar_dropdownbutton_component__ = __webpack_require__("./node_modules/@progress/kendo-angular-toolbar/dist/es/tools/toolbar-dropdownbutton.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tools_toolbar_splitbutton_component__ = __webpack_require__("./node_modules/@progress/kendo-angular-toolbar/dist/es/tools/toolbar-splitbutton.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__tools_toolbar_separator_component__ = __webpack_require__("./node_modules/@progress/kendo-angular-toolbar/dist/es/tools/toolbar-separator.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__renderer_component__ = __webpack_require__("./node_modules/@progress/kendo-angular-toolbar/dist/es/renderer.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__tools_toolbar_buttonlist_component__ = __webpack_require__("./node_modules/@progress/kendo-angular-toolbar/dist/es/tools/toolbar-buttonlist.component.js");














var TOOLBAR_TOOLS = [
    __WEBPACK_IMPORTED_MODULE_6__tools_toolbar_tool_component__["ToolBarToolComponent"],
    __WEBPACK_IMPORTED_MODULE_7__tools_toolbar_button_component__["ToolBarButtonComponent"],
    __WEBPACK_IMPORTED_MODULE_8__tools_toolbar_buttongroup_component__["ToolBarButtonGroupComponent"],
    __WEBPACK_IMPORTED_MODULE_9__tools_toolbar_dropdownbutton_component__["ToolBarDropDownButtonComponent"],
    __WEBPACK_IMPORTED_MODULE_10__tools_toolbar_splitbutton_component__["ToolBarSplitButtonComponent"],
    __WEBPACK_IMPORTED_MODULE_11__tools_toolbar_separator_component__["ToolBarSeparatorComponent"]
];
var TOOLBAR_COMMON = [
    __WEBPACK_IMPORTED_MODULE_12__renderer_component__["ToolBarRendererComponent"],
    __WEBPACK_IMPORTED_MODULE_13__tools_toolbar_buttonlist_component__["ToolBarButtonListComponent"]
];
/**
 * # ToolBar Module
 *
 * Represents the [NgModule](https://angular.io/docs/ts/latest/guide/ngmodule.html) definition for the ToolBar component.
 * The package exports:
 * - `ToolBarComponent`&mdash;The ToolBarComponent class.
 * - `ToolBarToolComponent`&mdash;The base Tool component class.
 * - `ToolBarButtonComponent`&mdash;The Button Tool component class.
 * - `ToolBarButtonGroupComponent`&mdash;The ButtonGroup Tool component class.
 * - `ToolBarDropDownButtonComponent`&mdash;The DropDownButton Tool component class.
 * - `ToolBarSplitButtonComponent`&mdash;The SplitButton Tool component class.
 * - `ToolBarSeparatorComponent`&mdash;The Separator Tool component class.
 *
 */
var ToolBarModule = /** @class */ (function () {
    function ToolBarModule() {
    }
    ToolBarModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    declarations: [__WEBPACK_IMPORTED_MODULE_5__toolbar_component__["ToolBarComponent"], TOOLBAR_TOOLS, TOOLBAR_COMMON],
                    exports: [__WEBPACK_IMPORTED_MODULE_5__toolbar_component__["ToolBarComponent"], TOOLBAR_TOOLS],
                    imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__progress_kendo_angular_buttons__["ButtonsModule"], __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_popup__["PopupModule"], __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_resize_sensor__["ResizeSensorModule"]]
                },] },
    ];
    /** @nocollapse */
    ToolBarModule.ctorParameters = function () { return []; };
    return ToolBarModule;
}());



/***/ }),

/***/ "./node_modules/@progress/kendo-angular-toolbar/dist/es/tools/toolbar-button.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export display */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolBarButtonComponent", function() { return ToolBarButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toolbar_tool_component__ = __webpack_require__("./node_modules/@progress/kendo-angular-toolbar/dist/es/tools/toolbar-tool.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__("./node_modules/@progress/kendo-angular-toolbar/dist/es/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navigation_single_focusable_navigation_service__ = __webpack_require__("./node_modules/@progress/kendo-angular-toolbar/dist/es/navigation/single-focusable-navigation.service.js");





/**
 * @hidden
 */
var display = function (property, displayMode, overflows) {
    switch (displayMode) {
        case "toolbar":
            return overflows ? undefined : property;
        case "overflow":
            return overflows ? property : undefined;
        default:
            return property;
    }
};
/**
 * Represents the Kendo UI ToolBar Button for Angular.
 */
var ToolBarButtonComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](ToolBarButtonComponent, _super);
    function ToolBarButtonComponent() {
        var _this = _super.call(this) || this;
        /**
         * @hidden
         */
        _this.showText = "both";
        /**
         * Provides visual styling that indicates if the Button is active.
         * By default, `togglable` is set to `false`.
         */
        _this.togglable = false;
        /**
         * Adds visual weight to the Button and makes it primary.
         */
        _this.primary = false;
        /**
         * Changes the visual appearance by using alternative styling options.
         * The available values are:
         * * `bare`
         * * `flat`
         * * `outline`
         */
        _this.look = "default";
        /**
         * Sets the selected state of the Button.
         */
        _this.selected = false;
        /**
         * @hidden
         */
        _this.showIcon = "both";
        /**
         * Fires each time the Button is clicked.
         */
        _this.click = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        /**
         * Fires each time the selected state of a Toggle Button is changed.
         * The event argument is the new selected state (Boolean).
         */
        _this.selectedChange = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        _this.internalState = { selected: undefined };
        _this.navigationService = new __WEBPACK_IMPORTED_MODULE_4__navigation_single_focusable_navigation_service__["SingleFocusableNavigationService"]();
        return _this;
    }
    Object.defineProperty(ToolBarButtonComponent.prototype, "text", {
        get: function () {
            return display(this._text, this.showText, this.overflows);
        },
        /**
         * Specifies the text of the Button.
         */
        set: function (text) {
            this._text = text;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToolBarButtonComponent.prototype, "icon", {
        get: function () {
            return display(this._icon, this.showIcon, this.overflows);
        },
        /**
         * Defines the name for an existing icon in a Kendo UI theme.
         * The icon is rendered inside the Button by a `span.k-icon` element.
         */
        set: function (icon) {
            this._icon = icon;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToolBarButtonComponent.prototype, "iconClass", {
        get: function () {
            return display(this._iconClass, this.showIcon, this.overflows);
        },
        /**
         * Defines a CSS class&mdash;or multiple classes separated by spaces&mdash;
         * which are applied to a `span` element inside the Button. Allows the usage of custom icons.
         */
        set: function (iconClass) {
            this._iconClass = iconClass;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToolBarButtonComponent.prototype, "imageUrl", {
        get: function () {
            return display(this._imageUrl, this.showIcon, this.overflows);
        },
        /**
         * Defines a URL which is used for an `img` element inside the Button.
         * The URL can be relative or absolute. If relative, it is evaluated with relation to the web page URL.
         */
        set: function (imageUrl) {
            this._imageUrl = imageUrl;
        },
        enumerable: true,
        configurable: true
    });
    ToolBarButtonComponent.prototype.ngOnChanges = function (changes) {
        if (Object(__WEBPACK_IMPORTED_MODULE_3__util__["isChanged"])("selected", changes)) {
            this.internalState.selected = this.selected;
        }
    };
    ToolBarButtonComponent.prototype.selectedChangeHandler = function (state) {
        this.internalState.selected = state;
        this.selectedChange.emit(state);
    };
    ToolBarButtonComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"], args: [{
                    exportAs: 'kendoToolBarButton',
                    // tslint:disable-next-line:no-forward-ref
                    providers: [{ provide: __WEBPACK_IMPORTED_MODULE_2__toolbar_tool_component__["ToolBarToolComponent"], useExisting: Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return ToolBarButtonComponent; }) }],
                    selector: 'kendo-toolbar-button',
                    template: "\n        <ng-template #toolbarTemplate>\n            <button tabindex=\"-1\" kendoButton kendoToolBarFocusable\n                [disabled]=\"disabled\"\n                [togglable]=\"togglable\"\n                [primary]=\"primary\"\n                [selected]=\"internalState.selected\"\n                [icon]=\"icon\"\n                [iconClass]=\"iconClass\"\n                [imageUrl]=\"imageUrl\"\n                [look]=\"look\"\n                (click)=\"click.emit($event)\"\n                (selectedChange)=\"selectedChangeHandler($event)\">\n                {{ text }}\n            </button>\n        </ng-template>\n        <ng-template #popupTemplate>\n            <button tabindex=\"-1\" kendoButton\n                class=\"k-overflow-button\"\n                [disabled]=\"disabled\"\n                [togglable]=\"togglable\"\n                [primary]=\"primary\"\n                [selected]=\"internalState.selected\"\n                [icon]=\"icon\"\n                [iconClass]=\"iconClass\"\n                [imageUrl]=\"imageUrl\"\n                [look]=\"look\"\n                (click)=\"click.emit($event)\"\n                (selectedChange)=\"selectedChangeHandler($event)\">\n                {{ text }}\n            </button>\n        </ng-template>\n    "
                },] },
    ];
    /** @nocollapse */
    ToolBarButtonComponent.ctorParameters = function () { return []; };
    ToolBarButtonComponent.propDecorators = {
        'text': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'showText': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'togglable': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'primary': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'look': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'selected': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'icon': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'iconClass': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'imageUrl': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'showIcon': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'click': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"] },],
        'selectedChange': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"] },],
        'toolbarTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"], args: ["toolbarTemplate",] },],
        'popupTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"], args: ["popupTemplate",] },],
    };
    return ToolBarButtonComponent;
}(__WEBPACK_IMPORTED_MODULE_2__toolbar_tool_component__["ToolBarToolComponent"]));



/***/ }),

/***/ "./node_modules/@progress/kendo-angular-toolbar/dist/es/tools/toolbar-buttongroup.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolBarButtonGroupComponent", function() { return ToolBarButtonGroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toolbar_tool_component__ = __webpack_require__("./node_modules/@progress/kendo-angular-toolbar/dist/es/tools/toolbar-tool.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toolbar_button_component__ = __webpack_require__("./node_modules/@progress/kendo-angular-toolbar/dist/es/tools/toolbar-button.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navigation_buttongroup_navigation_service__ = __webpack_require__("./node_modules/@progress/kendo-angular-toolbar/dist/es/navigation/buttongroup-navigation.service.js");





/**
 * Represents the Kendo UI Toolbar button tool for Angular.
 */
var ToolBarButtonGroupComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](ToolBarButtonGroupComponent, _super);
    function ToolBarButtonGroupComponent() {
        var _this = _super.call(this) || this;
        /**
         * By default, the selection mode of the ButtonGroup is set to `multiple`.
         */
        _this.selection = "multiple";
        /**
         * Changes the visual appearance by using alternative styling options.
         * The available values are:
         * * `bare`
         * * `flat`
         * * `outline`
         *
         * The `look` property of the ButtonGroup takes precedence over the `look` property
         * of the individual buttons that are part of the group.
         */
        _this.look = "default";
        _this.navigationService = new __WEBPACK_IMPORTED_MODULE_4__navigation_buttongroup_navigation_service__["ButtonGroupNavigationService"]();
        return _this;
    }
    ToolBarButtonGroupComponent.prototype.selectedChangeHandler = function (state, button) {
        button.selected = state;
        button.selectedChange.emit(state);
    };
    ToolBarButtonGroupComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"], args: [{
                    exportAs: 'kendoToolBarButtonGroup',
                    // tslint:disable-next-line:no-forward-ref
                    providers: [{ provide: __WEBPACK_IMPORTED_MODULE_2__toolbar_tool_component__["ToolBarToolComponent"], useExisting: Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return ToolBarButtonGroupComponent; }) }],
                    selector: 'kendo-toolbar-buttongroup',
                    template: "\n        <ng-template #toolbarTemplate>\n            <kendo-buttongroup\n                [tabIndex]=\"tabIndex\"\n                [selection]=\"selection\"\n                [disabled]=\"disabled\"\n                [look]=\"look\"\n                [width]=\"width\">\n                <button kendoButton kendoToolbarFocusable\n                    *ngFor=\"let button of buttons\"\n                    [disabled]=\"button.disabled\"\n                    [togglable]=\"button.togglable\"\n                    [primary]=\"button.primary\"\n                    [selected]=\"button.selected\"\n                    [icon]=\"button.icon\"\n                    [iconClass]=\"button.iconClass\"\n                    [imageUrl]=\"button.imageUrl\"\n                    (click)=\"button.click.emit($event)\"\n                    (selectedChange)=\"selectedChangeHandler($event, button)\">\n                    {{ button.text }}\n                </button>\n            </kendo-buttongroup>\n        </ng-template>\n        <ng-template #popupTemplate>\n            <kendo-buttongroup\n                class=\"k-overflow-button\"\n                [tabIndex]=\"tabIndex\"\n                [disabled]=\"disabled\"\n                [look]=\"look\"\n                [width]=\"width\">\n                <button kendoButton\n                    class=\"k-overflow-button\"\n                    *ngFor=\"let button of buttons\"\n                    [disabled]=\"button.disabled\"\n                    [togglable]=\"button.togglable\"\n                    [primary]=\"button.primary\"\n                    [selected]=\"button.selected\"\n                    [icon]=\"button.icon\"\n                    [iconClass]=\"button.iconClass\"\n                    [imageUrl]=\"button.imageUrl\"\n                    (click)=\"button.click.emit($event)\"\n                    (selectedChange)=\"selectedChangeHandler($event, button)\">\n                    {{ button.text }}\n                </button>\n            </kendo-buttongroup>\n        </ng-template>\n    "
                },] },
    ];
    /** @nocollapse */
    ToolBarButtonGroupComponent.ctorParameters = function () { return []; };
    ToolBarButtonGroupComponent.propDecorators = {
        'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'selection': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'width': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'look': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'toolbarTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"], args: ["toolbarTemplate",] },],
        'popupTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"], args: ["popupTemplate",] },],
        'buttons': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ContentChildren"], args: [Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return __WEBPACK_IMPORTED_MODULE_3__toolbar_button_component__["ToolBarButtonComponent"]; }),] },],
    };
    return ToolBarButtonGroupComponent;
}(__WEBPACK_IMPORTED_MODULE_2__toolbar_tool_component__["ToolBarToolComponent"]));



/***/ }),

/***/ "./node_modules/@progress/kendo-angular-toolbar/dist/es/tools/toolbar-buttonlist.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolBarButtonListComponent", function() { return ToolBarButtonListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toolbar_tool_component__ = __webpack_require__("./node_modules/@progress/kendo-angular-toolbar/dist/es/tools/toolbar-tool.component.js");



/**
 * @hidden
 */
var ToolBarButtonListComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](ToolBarButtonListComponent, _super);
    function ToolBarButtonListComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.itemClick = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        return _this;
    }
    ToolBarButtonListComponent.prototype.getText = function (dataItem) {
        if (dataItem) {
            return this.textField ? dataItem[this.textField] : dataItem.text || dataItem;
        }
        return undefined;
    };
    ToolBarButtonListComponent.prototype.onClick = function (item) {
        if (item.click) {
            item.click();
        }
        this.itemClick.emit(this.data.indexOf(item));
    };
    ToolBarButtonListComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"], args: [{
                    selector: 'kendo-toolbar-buttonlist',
                    template: "\n        <button tabindex=\"-1\" kendoButton\n            class=\"k-overflow-button\"\n            *ngFor=\"let item of data\"\n            [disabled]=\"item.disabled\"\n            [icon]=\"item.icon\"\n            [iconClass]=\"item.iconClass\"\n            [imageUrl]=\"item.imageUrl\"\n            (click)=\"onClick(item)\">\n            {{ getText(item) }}\n        </button>\n    "
                },] },
    ];
    /** @nocollapse */
    ToolBarButtonListComponent.ctorParameters = function () { return []; };
    ToolBarButtonListComponent.propDecorators = {
        'data': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'textField': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'itemClick': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"] },],
    };
    return ToolBarButtonListComponent;
}(__WEBPACK_IMPORTED_MODULE_2__toolbar_tool_component__["ToolBarToolComponent"]));



/***/ }),

/***/ "./node_modules/@progress/kendo-angular-toolbar/dist/es/tools/toolbar-dropdownbutton.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolBarDropDownButtonComponent", function() { return ToolBarDropDownButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toolbar_tool_component__ = __webpack_require__("./node_modules/@progress/kendo-angular-toolbar/dist/es/tools/toolbar-tool.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navigation_single_focusable_navigation_service__ = __webpack_require__("./node_modules/@progress/kendo-angular-toolbar/dist/es/navigation/single-focusable-navigation.service.js");




/**
 * Represents the Kendo UI ToolBar Button for Angular.
 */
var ToolBarDropDownButtonComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](ToolBarDropDownButtonComponent, _super);
    function ToolBarDropDownButtonComponent() {
        var _this = _super.call(this) || this;
        /**
         * Sets the text of the DropDownButton.
         */
        _this.text = "";
        /**
         * Defines an icon that will be rendered next to the button text.
         */
        _this.icon = "";
        /**
         * Defines an icon with a custom CSS class that ill be rendered next to the button text.
         */
        _this.iconClass = "";
        /**
         * Defines the location of an image that will be displayed next to the button text.
         */
        _this.imageUrl = "";
        /**
         * Sets the data item field that represents the item text.
         * If the data contains only primitive values, do not define it.
         */
        _this.textField = "text";
        /**
         * Fires each time the user clicks a drop-down list item.
         * The event data contains the data item that is bound to the clicked list item.
         */
        _this.itemClick = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        _this._popupSettings = { animate: true, popupClass: "" };
        _this.navigationService = new __WEBPACK_IMPORTED_MODULE_3__navigation_single_focusable_navigation_service__["SingleFocusableNavigationService"]();
        return _this;
    }
    Object.defineProperty(ToolBarDropDownButtonComponent.prototype, "popupSettings", {
        get: function () {
            return this._popupSettings;
        },
        /**
         * Configures the popup of the DropDownButton.
         *
         * The available options are:
         * - `animate:Boolean`&mdash;Controls the popup animation. By default, the open and close animations are enabled.
         * - `popupClass:String`&mdash;Specifies a list of CSS classes that are used to style the popup.
         */
        set: function (settings) {
            this._popupSettings = Object.assign({ animate: true, popupClass: "" }, settings);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToolBarDropDownButtonComponent.prototype, "data", {
        get: function () {
            if (!this._data) {
                this.data = [];
            }
            return this._data;
        },
        /**
         * Sets the data of the DropDownButton.
         *
         * > The data has to be provided in an array-like list.
         */
        set: function (data) {
            this._data = data || [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToolBarDropDownButtonComponent.prototype, "listData", {
        /**
         * @hidden
         */
        get: function () {
            var mainButtonSettings = (_a = {},
                _a[this.textField] = this.text,
                _a.icon = this.icon,
                _a.iconClass = this.iconClass,
                _a.imageUrl = this.imageUrl,
                _a.disabled = this.disabled,
                _a.tabIndex = this.tabIndex,
                _a);
            return [mainButtonSettings].concat(this.data);
            var _a;
        },
        enumerable: true,
        configurable: true
    });
    ToolBarDropDownButtonComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"], args: [{
                    exportAs: 'kendoToolBarDropDownButton',
                    // tslint:disable-next-line:no-forward-ref
                    providers: [{ provide: __WEBPACK_IMPORTED_MODULE_2__toolbar_tool_component__["ToolBarToolComponent"], useExisting: Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return ToolBarDropDownButtonComponent; }) }],
                    selector: 'kendo-toolbar-dropdownbutton',
                    template: "\n        <ng-template #toolbarTemplate>\n            <kendo-dropdownbutton\n                [icon]=\"icon\"\n                [iconClass]=\"iconClass\"\n                [imageUrl]=\"imageUrl\"\n                [disabled]=\"disabled\"\n                [tabIndex]=\"tabIndex\"\n                [data]=\"data\"\n                [textField]=\"textField\"\n                (itemClick)=\"itemClick.emit($event)\">\n                {{ text }}\n            </kendo-dropdownbutton>\n        </ng-template>\n        <ng-template #popupTemplate>\n            <kendo-toolbar-buttonlist\n                [data]=\"listData\"\n                [textField]=\"textField\"\n                (itemClick)=\"itemClick.emit($event)\">\n            </kendo-toolbar-buttonlist>\n        </ng-template>\n    "
                },] },
    ];
    /** @nocollapse */
    ToolBarDropDownButtonComponent.ctorParameters = function () { return []; };
    ToolBarDropDownButtonComponent.propDecorators = {
        'text': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'icon': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'iconClass': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'imageUrl': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'popupSettings': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'textField': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'data': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'itemClick': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"] },],
        'toolbarTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"], args: ["toolbarTemplate",] },],
        'popupTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"], args: ["popupTemplate",] },],
        'dropdownButton': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"], args: ["dropdownButton", { read: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"] },] },],
    };
    return ToolBarDropDownButtonComponent;
}(__WEBPACK_IMPORTED_MODULE_2__toolbar_tool_component__["ToolBarToolComponent"]));



/***/ }),

/***/ "./node_modules/@progress/kendo-angular-toolbar/dist/es/tools/toolbar-separator.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolBarSeparatorComponent", function() { return ToolBarSeparatorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toolbar_tool_component__ = __webpack_require__("./node_modules/@progress/kendo-angular-toolbar/dist/es/tools/toolbar-tool.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navigation_tool_navigation_service__ = __webpack_require__("./node_modules/@progress/kendo-angular-toolbar/dist/es/navigation/tool-navigation.service.js");




/**
 * Represents the Kendo UI ToolBar Separator for Angular.
 */
var ToolBarSeparatorComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](ToolBarSeparatorComponent, _super);
    function ToolBarSeparatorComponent() {
        var _this = _super.call(this) || this;
        _this.navigationService = new __WEBPACK_IMPORTED_MODULE_3__navigation_tool_navigation_service__["ToolNavigationService"]();
        return _this;
    }
    ToolBarSeparatorComponent.prototype.ngAfterViewInit = function () {
        if (!this.popupTemplate) {
            this.popupTemplate = this.toolbarTemplate;
        }
    };
    ToolBarSeparatorComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"], args: [{
                    exportAs: 'kendoToolBarSeparator',
                    // tslint:disable-next-line:no-forward-ref
                    providers: [{ provide: __WEBPACK_IMPORTED_MODULE_2__toolbar_tool_component__["ToolBarToolComponent"], useExisting: Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return ToolBarSeparatorComponent; }) }],
                    selector: 'kendo-toolbar-separator',
                    template: "\n        <ng-template #toolbarTemplate>\n        </ng-template>\n    "
                },] },
    ];
    /** @nocollapse */
    ToolBarSeparatorComponent.ctorParameters = function () { return []; };
    ToolBarSeparatorComponent.propDecorators = {
        'toolbarTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"], args: ["toolbarTemplate",] },],
        'popupTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"], args: ["popupTemplate",] },],
        'separator': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"], args: ["separator",] },],
    };
    return ToolBarSeparatorComponent;
}(__WEBPACK_IMPORTED_MODULE_2__toolbar_tool_component__["ToolBarToolComponent"]));



/***/ }),

/***/ "./node_modules/@progress/kendo-angular-toolbar/dist/es/tools/toolbar-splitbutton.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolBarSplitButtonComponent", function() { return ToolBarSplitButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toolbar_tool_component__ = __webpack_require__("./node_modules/@progress/kendo-angular-toolbar/dist/es/tools/toolbar-tool.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navigation_single_focusable_navigation_service__ = __webpack_require__("./node_modules/@progress/kendo-angular-toolbar/dist/es/navigation/single-focusable-navigation.service.js");




/**
 * Represents the Kendo UI ToolBar button tool for Angular.
 */
var ToolBarSplitButtonComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](ToolBarSplitButtonComponent, _super);
    function ToolBarSplitButtonComponent() {
        var _this = _super.call(this) || this;
        /**
         * Sets the text of the SplitButton.
         */
        _this.text = "";
        /**
         * Defines the icon that will be rendered next to the button text.
         */
        _this.icon = "";
        /**
         * Defines an icon with a custom CSS class that will be rendered next to the button text.
         */
        _this.iconClass = "";
        /**
         * Defines the location of an image that will be displayed next to the button text.
         */
        _this.imageUrl = "";
        /**
         * Configures the text field of the button-list popup.
         */
        _this.textField = "text";
        /**
         * Fires each time the user clicks the main button.
         */
        _this.buttonClick = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        /**
         * Fires each time the user clicks the drop-down list.
         * The event data contains the data item that is bound to the clicked list item.
         */
        _this.itemClick = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        _this._popupSettings = { animate: true, popupClass: "" };
        _this.navigationService = new __WEBPACK_IMPORTED_MODULE_3__navigation_single_focusable_navigation_service__["SingleFocusableNavigationService"]();
        return _this;
    }
    Object.defineProperty(ToolBarSplitButtonComponent.prototype, "popupSettings", {
        get: function () {
            if (!this._popupSettings) {
                this._popupSettings = { animate: true, popupClass: "" };
            }
            return this._popupSettings;
        },
        /**
         * Configures the popup of the SplitButton.
         *
         * The available options are:
         * - `animate:Boolean`&mdash;Controls the popup animation. By default, the open and close animations are enabled.
         * - `popupClass:String`&mdash;Specifies a list of CSS classes that are used to style the popup.
         */
        set: function (value) {
            this._popupSettings = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToolBarSplitButtonComponent.prototype, "data", {
        get: function () {
            if (!this._data) {
                this.data = [];
            }
            return this._data;
        },
        /**
         * Sets the data of the SplitButton.
         *
         * > The data has to be provided in an array-like list.
         */
        set: function (data) {
            this._data = data || [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToolBarSplitButtonComponent.prototype, "listData", {
        /**
         * @hidden
         */
        get: function () {
            var mainButtonSettings = (_a = {},
                _a[this.textField] = this.text,
                _a.icon = this.icon,
                _a.iconClass = this.iconClass,
                _a.imageUrl = this.imageUrl,
                _a.disabled = this.disabled,
                _a.tabIndex = this.tabIndex,
                _a);
            var listData = this.data.slice(0);
            listData.unshift(mainButtonSettings);
            return listData;
            var _a;
        },
        enumerable: true,
        configurable: true
    });
    ToolBarSplitButtonComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"], args: [{
                    exportAs: 'kendoToolBarSplitButton',
                    // tslint:disable-next-line:no-forward-ref
                    providers: [{ provide: __WEBPACK_IMPORTED_MODULE_2__toolbar_tool_component__["ToolBarToolComponent"], useExisting: Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return ToolBarSplitButtonComponent; }) }],
                    selector: 'kendo-toolbar-splitbutton',
                    template: "\n        <ng-template #toolbarTemplate>\n            <kendo-splitbutton\n                [data]=\"data\"\n                [text]=\"text\"\n                [icon]=\"icon\"\n                [iconClass]=\"iconClass\"\n                [imageUrl]=\"imageUrl\"\n                [disabled]=\"disabled\"\n                [tabIndex]=\"tabIndex\"\n                [textField]=\"textField\"\n                (buttonClick)=\"buttonClick.emit($event)\"\n                (itemClick)=\"itemClick.emit($event)\">\n            </kendo-splitbutton>\n        </ng-template>\n        <ng-template #popupTemplate>\n            <kendo-toolbar-buttonlist\n                [data]=\"listData\"\n                [textField]=\"textField\"\n                (itemClick)=\"itemClick.emit($event)\">\n            </kendo-toolbar-buttonlist>\n        </ng-template>\n    "
                },] },
    ];
    /** @nocollapse */
    ToolBarSplitButtonComponent.ctorParameters = function () { return []; };
    ToolBarSplitButtonComponent.propDecorators = {
        'text': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'icon': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'iconClass': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'imageUrl': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'popupSettings': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'textField': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'data': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'buttonClick': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"] },],
        'itemClick': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"] },],
        'toolbarTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"], args: ["toolbarTemplate",] },],
        'popupTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"], args: ["popupTemplate",] },],
        'splitButton': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"], args: ["splitButton", { read: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"] },] },],
    };
    return ToolBarSplitButtonComponent;
}(__WEBPACK_IMPORTED_MODULE_2__toolbar_tool_component__["ToolBarToolComponent"]));



/***/ }),

/***/ "./node_modules/@progress/kendo-angular-toolbar/dist/es/tools/toolbar-tool.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolBarToolComponent", function() { return ToolBarToolComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navigation_tool_navigation_service__ = __webpack_require__("./node_modules/@progress/kendo-angular-toolbar/dist/es/navigation/tool-navigation.service.js");


/**
 * Represents the Base ToolBar Tool Component for Angular.
 * Extend this class to create custom tools.
 */
var ToolBarToolComponent = /** @class */ (function () {
    function ToolBarToolComponent() {
        this.tabIndex = -1; //Focus movement inside the toolbar is managed using roving tabindex.
        this.overflows = true;
        if (!this.navigationService) {
            this.navigationService = new __WEBPACK_IMPORTED_MODULE_1__navigation_tool_navigation_service__["ToolNavigationService"]();
        }
    }
    Object.defineProperty(ToolBarToolComponent.prototype, "toolbarDisplay", {
        get: function () {
            return this.overflows ? "none" : "inline-block";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToolBarToolComponent.prototype, "overflowDisplay", {
        get: function () {
            return this.overflows ? "block" : "none";
        },
        enumerable: true,
        configurable: true
    });
    ToolBarToolComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'toolbar-tool',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    ToolBarToolComponent.ctorParameters = function () { return []; };
    return ToolBarToolComponent;
}());



/***/ }),

/***/ "./node_modules/@progress/kendo-angular-toolbar/dist/es/util.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["outerWidth"] = outerWidth;
/* harmony export (immutable) */ __webpack_exports__["innerWidth"] = innerWidth;
/* unused harmony export outerHeight */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return closest; });
/* unused harmony export isVisible */
/* unused harmony export findElement */
/* unused harmony export isFocusable */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findFocusable", function() { return findFocusable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findFocusableChild", function() { return findFocusableChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findFocusableSibling", function() { return findFocusableSibling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPresent", function() { return isPresent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isChanged", function() { return isChanged; });
/**
 * @hidden
 */
var focusableRegex = /^(?:a|input|select|textarea|button|object)$/i;
/**
 * @hidden
 */
function outerWidth(element) {
    var width = element.offsetWidth;
    var style = getComputedStyle(element);
    width += (parseFloat(style.marginLeft) || 0 + parseFloat(style.marginRight) || 0);
    return width;
}
/**
 * @hidden
 */
function innerWidth(element) {
    var width = element.offsetWidth;
    var style = getComputedStyle(element);
    width -= (parseFloat(style.paddingLeft) || 0 + parseFloat(style.borderLeftWidth) || 0);
    width -= (parseFloat(style.paddingRight) || 0 + parseFloat(style.borderRightWidth) || 0);
    return width;
}
/**
 * @hidden
 */
function outerHeight(element) {
    var width = element.offsetHeight;
    var style = getComputedStyle(element);
    width += (parseFloat(style.marginTop) || 0 + parseFloat(style.marginBottom) || 0);
    return width;
}
/**
 * @hidden
 */
var closest = function (node, predicate) {
    while (node && !predicate(node)) {
        node = node.parentNode;
    }
    return node;
};
/**
 * @hidden
 */
var isVisible = function (element) {
    var rect = element.getBoundingClientRect();
    var hasSize = rect.width > 0 && rect.height > 0;
    var hasPosition = rect.x !== 0 && rect.y !== 0;
    // Elements can have zero size due to styling, but they should still count as visible.
    // For example, the selection checkbox has no size, but is made visible through styling.
    return (hasSize || hasPosition) && window.getComputedStyle(element).visibility !== 'hidden';
};
/**
 * @hidden
 */
var findElement = function (node, predicate, matchSelf) {
    if (matchSelf === void 0) { matchSelf = true; }
    if (!node) {
        return;
    }
    if (matchSelf && predicate(node)) {
        return node;
    }
    node = node.firstChild;
    while (node) {
        if (node.nodeType === 1) {
            var element = findElement(node, predicate);
            if (element) {
                return element;
            }
        }
        node = node.nextSibling;
    }
};
/**
 * @hidden
 */
var isFocusable = function (element, checkVisibility) {
    if (checkVisibility === void 0) { checkVisibility = true; }
    if (element.tagName) {
        var tagName = element.tagName.toLowerCase();
        var tabIndex = element.getAttribute('tabIndex');
        var focusable = tabIndex !== null;
        if (focusableRegex.test(tagName)) {
            focusable = !element.disabled;
        }
        return focusable && (!checkVisibility || isVisible(element));
    }
    return false;
};
/**
 * @hidden
 */
var findFocusable = function (element, checkVisibility) {
    if (checkVisibility === void 0) { checkVisibility = true; }
    return findElement(element, function (node) { return isFocusable(node, checkVisibility); });
};
/**
 * @hidden
 */
var findFocusableChild = function (element, checkVisibility) {
    if (checkVisibility === void 0) { checkVisibility = true; }
    return findElement(element, function (node) { return isFocusable(node, checkVisibility); }, false);
};
/**
 * @hidden
 */
var findFocusableSibling = function (element, checkVisibility, reverse) {
    if (checkVisibility === void 0) { checkVisibility = true; }
    var node = reverse ? element.prevSibling : element.nextSibling;
    while (node) {
        if (node.nodeType === 1) {
            var result = findElement(node, function (el) { return isFocusable(el, checkVisibility); });
            if (result) {
                return result;
            }
        }
        node = reverse ? node.prevSibling : node.nextSibling;
    }
};
/**
 * @hidden
 */
var isPresent = function (value) { return value !== null && value !== undefined; };
/**
 * @hidden
 */
var isChanged = function (propertyName, changes) { return (changes[propertyName] && !changes[propertyName].isFirstChange() &&
    changes[propertyName].previousValue !== changes[propertyName].currentValue); };


/***/ }),

/***/ "./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CLIPBOARD_SERVICE_PROVIDER_FACTORY */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardService", function() { return ClipboardService; });
/* unused harmony export CLIPBOARD_SERVICE_PROVIDER */
/* unused harmony export ClipboardDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardModule", function() { return ClipboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_window_token__ = __webpack_require__("./node_modules/ngx-window-token/fesm5/ngx-window-token.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ClipboardService = /** @class */ (function () {
    function ClipboardService(document, window) {
        this.document = document;
        this.window = window;
    }
    Object.defineProperty(ClipboardService.prototype, "isSupported", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this.document.queryCommandSupported && !!this.document.queryCommandSupported('copy');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} element
     * @return {?}
     */
    ClipboardService.prototype.isTargetValid = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
            if (element.hasAttribute('disabled')) {
                throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
            }
            return true;
        }
        throw new Error('Target should be input or textarea');
    };
    /**
     * copyFromInputElement
     * @param {?} targetElm
     * @return {?}
     */
    ClipboardService.prototype.copyFromInputElement = /**
     * copyFromInputElement
     * @param {?} targetElm
     * @return {?}
     */
    function (targetElm) {
        try {
            this.selectTarget(targetElm);
            /** @type {?} */
            var re = this.copyText();
            this.clearSelection(targetElm, this.window);
            return re && this.isCopySuccessInIE11();
        }
        catch (error) {
            return false;
        }
    };
    // this is for IE11 return true even if copy fail
    /**
     * @return {?}
     */
    ClipboardService.prototype.isCopySuccessInIE11 = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var clipboardData = this.window['clipboardData'];
        if (clipboardData && clipboardData.getData) {
            if (!clipboardData.getData('Text')) {
                return false;
            }
        }
        return true;
    };
    /**
     * Creates a fake textarea element, sets its value from `text` property,
     * and makes a selection on it.
     * @param {?} content
     * @param {?=} container
     * @return {?}
     */
    ClipboardService.prototype.copyFromContent = /**
     * Creates a fake textarea element, sets its value from `text` property,
     * and makes a selection on it.
     * @param {?} content
     * @param {?=} container
     * @return {?}
     */
    function (content, container) {
        if (container === void 0) { container = this.window.document.body; }
        // check if the temp textarea is still belong the current container.
        // In case we have multiple places using ngx-clipboard, one is in a modal using container but the other one is not.
        if (this.tempTextArea && !container.contains(this.tempTextArea)) {
            this.destroy(this.tempTextArea.parentElement);
        }
        if (!this.tempTextArea) {
            this.tempTextArea = this.createTempTextArea(this.document, this.window);
            try {
                container.appendChild(this.tempTextArea);
            }
            catch (error) {
                throw new Error('Container should be a Dom element');
            }
        }
        this.tempTextArea.value = content;
        return this.copyFromInputElement(this.tempTextArea);
    };
    /**
     * @param {?=} container
     * @return {?}
     */
    ClipboardService.prototype.destroy = /**
     * @param {?=} container
     * @return {?}
     */
    function (container) {
        if (container === void 0) { container = this.window.document.body; }
        if (this.tempTextArea) {
            container.removeChild(this.tempTextArea);
            // removeChild doesn't remove the reference from memory
            this.tempTextArea = undefined;
        }
    };
    /**
     * @param {?} inputElement
     * @return {?}
     */
    ClipboardService.prototype.selectTarget = /**
     * @param {?} inputElement
     * @return {?}
     */
    function (inputElement) {
        inputElement.select();
        inputElement.setSelectionRange(0, inputElement.value.length);
        return inputElement.value.length;
    };
    /**
     * @return {?}
     */
    ClipboardService.prototype.copyText = /**
     * @return {?}
     */
    function () {
        return this.document.execCommand('copy');
    };
    /**
     * @param {?} inputElement
     * @param {?} window
     * @return {?}
     */
    ClipboardService.prototype.clearSelection = /**
     * @param {?} inputElement
     * @param {?} window
     * @return {?}
     */
    function (inputElement, window) {
        // tslint:disable-next-line:no-unused-expression
        inputElement && inputElement.blur();
        window.getSelection().removeAllRanges();
    };
    /**
     * @param {?} doc
     * @param {?} window
     * @return {?}
     */
    ClipboardService.prototype.createTempTextArea = /**
     * @param {?} doc
     * @param {?} window
     * @return {?}
     */
    function (doc, window) {
        /** @type {?} */
        var isRTL = doc.documentElement.getAttribute('dir') === 'rtl';
        /** @type {?} */
        var ta;
        ta = doc.createElement('textarea');
        // Prevent zooming on iOS
        ta.style.fontSize = '12pt';
        // Reset box model
        ta.style.border = '0';
        ta.style.padding = '0';
        ta.style.margin = '0';
        // Move element out of screen horizontally
        ta.style.position = 'absolute';
        ta.style[isRTL ? 'right' : 'left'] = '-9999px';
        /** @type {?} */
        var yPosition = window.pageYOffset || doc.documentElement.scrollTop;
        ta.style.top = yPosition + 'px';
        ta.setAttribute('readonly', '');
        return ta;
    };
    ClipboardService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    ClipboardService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DOCUMENT"],] }] },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_2_ngx_window_token__["WINDOW"],] }] }
    ]; };
    return ClipboardService;
}());
/**
 * @param {?} doc
 * @param {?} win
 * @param {?} parentDispatcher
 * @return {?}
 */
function CLIPBOARD_SERVICE_PROVIDER_FACTORY(doc, win, parentDispatcher) {
    return parentDispatcher || new ClipboardService(doc, win);
}
/** @type {?} */
var CLIPBOARD_SERVICE_PROVIDER = {
    deps: [/** @type {?} */ (__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DOCUMENT"]), /** @type {?} */ (__WEBPACK_IMPORTED_MODULE_2_ngx_window_token__["WINDOW"]), [new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"](), new __WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"](), ClipboardService]],
    provide: ClipboardService,
    useFactory: CLIPBOARD_SERVICE_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ClipboardDirective = /** @class */ (function () {
    function ClipboardDirective(clipboardSrv) {
        this.clipboardSrv = clipboardSrv;
        this.cbOnSuccess = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.cbOnError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    ClipboardDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    ClipboardDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.clipboardSrv.destroy(this.container);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ClipboardDirective.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.clipboardSrv.isSupported) {
            this.handleResult(false, undefined);
        }
        else if (this.targetElm && this.clipboardSrv.isTargetValid(this.targetElm)) {
            this.handleResult(this.clipboardSrv.copyFromInputElement(this.targetElm), this.targetElm.value);
        }
        else if (this.cbContent) {
            this.handleResult(this.clipboardSrv.copyFromContent(this.cbContent, this.container), this.cbContent);
        }
    };
    /**
     * Fires an event based on the copy operation result.
     * @param {?} succeeded
     * @param {?} copiedContent
     * @return {?}
     */
    ClipboardDirective.prototype.handleResult = /**
     * Fires an event based on the copy operation result.
     * @param {?} succeeded
     * @param {?} copiedContent
     * @return {?}
     */
    function (succeeded, copiedContent) {
        if (succeeded) {
            this.cbOnSuccess.emit({ isSuccess: true, content: copiedContent });
        }
        else {
            this.cbOnError.emit({ isSuccess: false });
        }
    };
    ClipboardDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: '[ngxClipboard]'
                },] },
    ];
    /** @nocollapse */
    ClipboardDirective.ctorParameters = function () { return [
        { type: ClipboardService }
    ]; };
    ClipboardDirective.propDecorators = {
        targetElm: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngxClipboard',] }],
        container: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] }],
        cbContent: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] }],
        cbOnSuccess: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] }],
        cbOnError: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] }],
        onClick: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['click', ['$event.target'],] }]
    };
    return ClipboardDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ClipboardModule = /** @class */ (function () {
    function ClipboardModule() {
    }
    ClipboardModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2_ngx_window_token__["NgxWindowTokenModule"]],
                    // tslint:disable-next-line:object-literal-sort-keys
                    declarations: [ClipboardDirective],
                    exports: [ClipboardDirective],
                    providers: [CLIPBOARD_SERVICE_PROVIDER]
                },] },
    ];
    return ClipboardModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNsaXBib2FyZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWNsaXBib2FyZC9saWIvbmd4LWNsaXBib2FyZC5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtY2xpcGJvYXJkL2xpYi9uZ3gtY2xpcGJvYXJkLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LWNsaXBib2FyZC9saWIvbmd4LWNsaXBib2FyZC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IFdJTkRPVyB9IGZyb20gJ25neC13aW5kb3ctdG9rZW4nO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ2xpcGJvYXJkU2VydmljZSB7XHJcbiAgICBwcml2YXRlIHRlbXBUZXh0QXJlYTogSFRNTFRleHRBcmVhRWxlbWVudCB8IHVuZGVmaW5lZDtcclxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIHB1YmxpYyBkb2N1bWVudDogYW55LCBASW5qZWN0KFdJTkRPVykgcHJpdmF0ZSB3aW5kb3c6IGFueSkge31cclxuICAgIHB1YmxpYyBnZXQgaXNTdXBwb3J0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5kb2N1bWVudC5xdWVyeUNvbW1hbmRTdXBwb3J0ZWQgJiYgISF0aGlzLmRvY3VtZW50LnF1ZXJ5Q29tbWFuZFN1cHBvcnRlZCgnY29weScpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc1RhcmdldFZhbGlkKGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50IHx8IGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MVGV4dEFyZWFFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFwidGFyZ2V0XCIgYXR0cmlidXRlLiBQbGVhc2UgdXNlIFwicmVhZG9ubHlcIiBpbnN0ZWFkIG9mIFwiZGlzYWJsZWRcIiBhdHRyaWJ1dGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUYXJnZXQgc2hvdWxkIGJlIGlucHV0IG9yIHRleHRhcmVhJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjb3B5RnJvbUlucHV0RWxlbWVudFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29weUZyb21JbnB1dEVsZW1lbnQodGFyZ2V0RWxtOiBIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFRleHRBcmVhRWxlbWVudCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0VGFyZ2V0KHRhcmdldEVsbSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlID0gdGhpcy5jb3B5VGV4dCgpO1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyU2VsZWN0aW9uKHRhcmdldEVsbSwgdGhpcy53aW5kb3cpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmUgJiYgdGhpcy5pc0NvcHlTdWNjZXNzSW5JRTExKCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB0aGlzIGlzIGZvciBJRTExIHJldHVybiB0cnVlIGV2ZW4gaWYgY29weSBmYWlsXHJcbiAgICBpc0NvcHlTdWNjZXNzSW5JRTExKCkge1xyXG4gICAgICAgIGNvbnN0IGNsaXBib2FyZERhdGEgPSB0aGlzLndpbmRvd1snY2xpcGJvYXJkRGF0YSddO1xyXG4gICAgICAgIGlmIChjbGlwYm9hcmREYXRhICYmIGNsaXBib2FyZERhdGEuZ2V0RGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoIWNsaXBib2FyZERhdGEuZ2V0RGF0YSgnVGV4dCcpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgZmFrZSB0ZXh0YXJlYSBlbGVtZW50LCBzZXRzIGl0cyB2YWx1ZSBmcm9tIGB0ZXh0YCBwcm9wZXJ0eSxcclxuICAgICAqIGFuZCBtYWtlcyBhIHNlbGVjdGlvbiBvbiBpdC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvcHlGcm9tQ29udGVudChjb250ZW50OiBzdHJpbmcsIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQgPSB0aGlzLndpbmRvdy5kb2N1bWVudC5ib2R5KSB7XHJcbiAgICAgICAgLy8gY2hlY2sgaWYgdGhlIHRlbXAgdGV4dGFyZWEgaXMgc3RpbGwgYmVsb25nIHRoZSBjdXJyZW50IGNvbnRhaW5lci5cclxuICAgICAgICAvLyBJbiBjYXNlIHdlIGhhdmUgbXVsdGlwbGUgcGxhY2VzIHVzaW5nIG5neC1jbGlwYm9hcmQsIG9uZSBpcyBpbiBhIG1vZGFsIHVzaW5nIGNvbnRhaW5lciBidXQgdGhlIG90aGVyIG9uZSBpcyBub3QuXHJcbiAgICAgICAgaWYgKHRoaXMudGVtcFRleHRBcmVhICYmICFjb250YWluZXIuY29udGFpbnModGhpcy50ZW1wVGV4dEFyZWEpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSh0aGlzLnRlbXBUZXh0QXJlYS5wYXJlbnRFbGVtZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy50ZW1wVGV4dEFyZWEpIHtcclxuICAgICAgICAgICAgdGhpcy50ZW1wVGV4dEFyZWEgPSB0aGlzLmNyZWF0ZVRlbXBUZXh0QXJlYSh0aGlzLmRvY3VtZW50LCB0aGlzLndpbmRvdyk7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50ZW1wVGV4dEFyZWEpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb250YWluZXIgc2hvdWxkIGJlIGEgRG9tIGVsZW1lbnQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRlbXBUZXh0QXJlYS52YWx1ZSA9IGNvbnRlbnQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29weUZyb21JbnB1dEVsZW1lbnQodGhpcy50ZW1wVGV4dEFyZWEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJlbW92ZSB0ZW1wb3JhcnkgdGV4dGFyZWEgaWYgYW55XHJcbiAgICBwdWJsaWMgZGVzdHJveShjb250YWluZXI6IEhUTUxFbGVtZW50ID0gdGhpcy53aW5kb3cuZG9jdW1lbnQuYm9keSkge1xyXG4gICAgICAgIGlmICh0aGlzLnRlbXBUZXh0QXJlYSkge1xyXG4gICAgICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy50ZW1wVGV4dEFyZWEpO1xyXG4gICAgICAgICAgICAvLyByZW1vdmVDaGlsZCBkb2Vzbid0IHJlbW92ZSB0aGUgcmVmZXJlbmNlIGZyb20gbWVtb3J5XHJcbiAgICAgICAgICAgIHRoaXMudGVtcFRleHRBcmVhID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBzZWxlY3QgdGhlIHRhcmdldCBodG1sIGlucHV0IGVsZW1lbnRcclxuICAgIHByaXZhdGUgc2VsZWN0VGFyZ2V0KGlucHV0RWxlbWVudDogSFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQpOiBudW1iZXIgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIGlucHV0RWxlbWVudC5zZWxlY3QoKTtcclxuICAgICAgICBpbnB1dEVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgaW5wdXRFbGVtZW50LnZhbHVlLmxlbmd0aCk7XHJcbiAgICAgICAgcmV0dXJuIGlucHV0RWxlbWVudC52YWx1ZS5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb3B5VGV4dCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xyXG4gICAgfVxyXG4gICAgLy8gUmVtb3ZlcyBjdXJyZW50IHNlbGVjdGlvbiBhbmQgZm9jdXMgZnJvbSBgdGFyZ2V0YCBlbGVtZW50LlxyXG4gICAgcHJpdmF0ZSBjbGVhclNlbGVjdGlvbihpbnB1dEVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50LCB3aW5kb3c6IFdpbmRvdykge1xyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby11bnVzZWQtZXhwcmVzc2lvblxyXG4gICAgICAgIGlucHV0RWxlbWVudCAmJiBpbnB1dEVsZW1lbnQuYmx1cigpO1xyXG4gICAgICAgIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjcmVhdGUgYSBmYWtlIHRleHRhcmVhIGZvciBjb3B5IGNvbW1hbmRcclxuICAgIHByaXZhdGUgY3JlYXRlVGVtcFRleHRBcmVhKGRvYzogRG9jdW1lbnQsIHdpbmRvdzogV2luZG93KTogSFRNTFRleHRBcmVhRWxlbWVudCB7XHJcbiAgICAgICAgY29uc3QgaXNSVEwgPSBkb2MuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGlyJykgPT09ICdydGwnO1xyXG4gICAgICAgIGxldCB0YTogSFRNTFRleHRBcmVhRWxlbWVudDtcclxuICAgICAgICB0YSA9IGRvYy5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgICAgIC8vIFByZXZlbnQgem9vbWluZyBvbiBpT1NcclxuICAgICAgICB0YS5zdHlsZS5mb250U2l6ZSA9ICcxMnB0JztcclxuICAgICAgICAvLyBSZXNldCBib3ggbW9kZWxcclxuICAgICAgICB0YS5zdHlsZS5ib3JkZXIgPSAnMCc7XHJcbiAgICAgICAgdGEuc3R5bGUucGFkZGluZyA9ICcwJztcclxuICAgICAgICB0YS5zdHlsZS5tYXJnaW4gPSAnMCc7XHJcbiAgICAgICAgLy8gTW92ZSBlbGVtZW50IG91dCBvZiBzY3JlZW4gaG9yaXpvbnRhbGx5XHJcbiAgICAgICAgdGEuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgIHRhLnN0eWxlW2lzUlRMID8gJ3JpZ2h0JyA6ICdsZWZ0J10gPSAnLTk5OTlweCc7XHJcbiAgICAgICAgLy8gTW92ZSBlbGVtZW50IHRvIHRoZSBzYW1lIHBvc2l0aW9uIHZlcnRpY2FsbHlcclxuICAgICAgICBjb25zdCB5UG9zaXRpb24gPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jLmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcbiAgICAgICAgdGEuc3R5bGUudG9wID0geVBvc2l0aW9uICsgJ3B4JztcclxuICAgICAgICB0YS5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJycpO1xyXG4gICAgICAgIHJldHVybiB0YTtcclxuICAgIH1cclxufVxyXG4vLyB0aGlzIHBhdHRlcm4gaXMgbWVudGlvbmVkIGluIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzEzODU0IGluICM0M1xyXG5leHBvcnQgZnVuY3Rpb24gQ0xJUEJPQVJEX1NFUlZJQ0VfUFJPVklERVJfRkFDVE9SWShkb2M6IERvY3VtZW50LCB3aW46IFdpbmRvdywgcGFyZW50RGlzcGF0Y2hlcjogQ2xpcGJvYXJkU2VydmljZSkge1xyXG4gICAgcmV0dXJuIHBhcmVudERpc3BhdGNoZXIgfHwgbmV3IENsaXBib2FyZFNlcnZpY2UoZG9jLCB3aW4pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ0xJUEJPQVJEX1NFUlZJQ0VfUFJPVklERVIgPSB7XHJcbiAgICBkZXBzOiBbRE9DVU1FTlQgYXMgSW5qZWN0aW9uVG9rZW48RG9jdW1lbnQ+LCBXSU5ET1cgYXMgSW5qZWN0aW9uVG9rZW48V2luZG93PiwgW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgQ2xpcGJvYXJkU2VydmljZV1dLFxyXG4gICAgcHJvdmlkZTogQ2xpcGJvYXJkU2VydmljZSxcclxuICAgIHVzZUZhY3Rvcnk6IENMSVBCT0FSRF9TRVJWSUNFX1BST1ZJREVSX0ZBQ1RPUllcclxufTtcclxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IENsaXBib2FyZFNlcnZpY2UgfSBmcm9tICcuL25neC1jbGlwYm9hcmQuc2VydmljZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcclxuICAgIHNlbGVjdG9yOiAnW25neENsaXBib2FyZF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbGlwYm9hcmREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXHJcbiAgICBASW5wdXQoJ25neENsaXBib2FyZCcpXHJcbiAgICBwdWJsaWMgdGFyZ2V0RWxtOiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgQElucHV0KClcclxuICAgIHB1YmxpYyBjb250YWluZXI6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHB1YmxpYyBjYkNvbnRlbnQ6IHN0cmluZztcclxuXHJcbiAgICBAT3V0cHV0KClcclxuICAgIHB1YmxpYyBjYk9uU3VjY2VzczogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgICBAT3V0cHV0KClcclxuICAgIHB1YmxpYyBjYk9uRXJyb3I6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNsaXBib2FyZFNydjogQ2xpcGJvYXJkU2VydmljZSkge31cclxuXHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHlcclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHt9XHJcblxyXG4gICAgcHVibGljIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuY2xpcGJvYXJkU3J2LmRlc3Ryb3kodGhpcy5jb250YWluZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQudGFyZ2V0J10pXHJcbiAgICBwdWJsaWMgb25DbGljayhldmVudDogRXZlbnQpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2xpcGJvYXJkU3J2LmlzU3VwcG9ydGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUmVzdWx0KGZhbHNlLCB1bmRlZmluZWQpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50YXJnZXRFbG0gJiYgdGhpcy5jbGlwYm9hcmRTcnYuaXNUYXJnZXRWYWxpZCh0aGlzLnRhcmdldEVsbSkpIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVSZXN1bHQodGhpcy5jbGlwYm9hcmRTcnYuY29weUZyb21JbnB1dEVsZW1lbnQodGhpcy50YXJnZXRFbG0pLCB0aGlzLnRhcmdldEVsbS52YWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNiQ29udGVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVJlc3VsdCh0aGlzLmNsaXBib2FyZFNydi5jb3B5RnJvbUNvbnRlbnQodGhpcy5jYkNvbnRlbnQsIHRoaXMuY29udGFpbmVyKSwgdGhpcy5jYkNvbnRlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZpcmVzIGFuIGV2ZW50IGJhc2VkIG9uIHRoZSBjb3B5IG9wZXJhdGlvbiByZXN1bHQuXHJcbiAgICAgKiBAcGFyYW0gc3VjY2VlZGVkXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaGFuZGxlUmVzdWx0KHN1Y2NlZWRlZDogYm9vbGVhbiwgY29waWVkQ29udGVudDogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaWYgKHN1Y2NlZWRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmNiT25TdWNjZXNzLmVtaXQoeyBpc1N1Y2Nlc3M6IHRydWUsIGNvbnRlbnQ6IGNvcGllZENvbnRlbnQgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jYk9uRXJyb3IuZW1pdCh7IGlzU3VjY2VzczogZmFsc2UgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENsaXBib2FyZERpcmVjdGl2ZSB9IGZyb20gJy4vbmd4LWNsaXBib2FyZC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ0xJUEJPQVJEX1NFUlZJQ0VfUFJPVklERVIgfSBmcm9tICcuL25neC1jbGlwYm9hcmQuc2VydmljZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neFdpbmRvd1Rva2VuTW9kdWxlIH0gZnJvbSAnbmd4LXdpbmRvdy10b2tlbic7XG5leHBvcnQgKiBmcm9tICcuL25neC1jbGlwYm9hcmQuZGlyZWN0aXZlJztcbmV4cG9ydCAqIGZyb20gJy4vbmd4LWNsaXBib2FyZC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTmd4V2luZG93VG9rZW5Nb2R1bGVdLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG4gIGRlY2xhcmF0aW9uczogW0NsaXBib2FyZERpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtDbGlwYm9hcmREaXJlY3RpdmVdLFxuICBwcm92aWRlcnM6IFtDTElQQk9BUkRfU0VSVklDRV9QUk9WSURFUl1cbn0pXG5leHBvcnQgY2xhc3MgQ2xpcGJvYXJkTW9kdWxlIHt9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7SUFPSSwwQkFBcUMsUUFBYSxFQUEwQixNQUFXO1FBQWxELGFBQVEsR0FBUixRQUFRLENBQUs7UUFBMEIsV0FBTSxHQUFOLE1BQU0sQ0FBSztLQUFJOzBCQUNoRix5Q0FBVzs7Ozs7WUFDbEIsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7Ozs7Ozs7O0lBRzNGLHdDQUFhOzs7O2NBQUMsT0FBK0M7UUFDaEUsSUFBSSxPQUFPLFlBQVksZ0JBQWdCLElBQUksT0FBTyxZQUFZLG1CQUFtQixFQUFFO1lBQy9FLElBQUksT0FBTyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxtRkFBbUYsQ0FBQyxDQUFDO2FBQ3hHO1lBQ0QsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUNELE1BQU0sSUFBSSxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQzs7Ozs7OztJQU1uRCwrQ0FBb0I7Ozs7O2NBQUMsU0FBaUQ7UUFDekUsSUFBSTtZQUNBLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7O1lBQzdCLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUMsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7U0FDM0M7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNaLE9BQU8sS0FBSyxDQUFDO1NBQ2hCOzs7Ozs7SUFJTCw4Q0FBbUI7OztJQUFuQjs7UUFDSSxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ25ELElBQUksYUFBYSxJQUFJLGFBQWEsQ0FBQyxPQUFPLEVBQUU7WUFDeEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ2hDLE9BQU8sS0FBSyxDQUFDO2FBQ2hCO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQztLQUNmOzs7Ozs7OztJQU1NLDBDQUFlOzs7Ozs7O2NBQUMsT0FBZSxFQUFFLFNBQWtEO1FBQWxELDBCQUFBLEVBQUEsWUFBeUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSTs7O1FBR3RGLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQzdELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNqRDtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3hFLElBQUk7Z0JBQ0EsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDNUM7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixNQUFNLElBQUksS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7YUFDeEQ7U0FDSjtRQUNELElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUNsQyxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Ozs7OztJQUlqRCxrQ0FBTzs7OztjQUFDLFNBQWtEO1FBQWxELDBCQUFBLEVBQUEsWUFBeUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSTtRQUM3RCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDbkIsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7O1lBRXpDLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO1NBQ2pDOzs7Ozs7SUFJRyx1Q0FBWTs7OztjQUFDLFlBQW9EO1FBQ3JFLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN0QixZQUFZLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0QsT0FBTyxZQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQzs7Ozs7SUFHN0IsbUNBQVE7Ozs7UUFDWixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDOzs7Ozs7O0lBR3JDLHlDQUFjOzs7OztjQUFDLFlBQW9ELEVBQUUsTUFBYzs7UUFFdkYsWUFBWSxJQUFJLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUMsZUFBZSxFQUFFLENBQUM7Ozs7Ozs7SUFJcEMsNkNBQWtCOzs7OztjQUFDLEdBQWEsRUFBRSxNQUFjOztRQUNwRCxJQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLENBQUM7O1FBQ2hFLElBQUksRUFBRSxDQUFzQjtRQUM1QixFQUFFLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQzs7UUFFbkMsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDOztRQUUzQixFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDdEIsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ3ZCLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQzs7UUFFdEIsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO1FBQy9CLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLE9BQU8sR0FBRyxNQUFNLENBQUMsR0FBRyxTQUFTLENBQUM7O1FBRS9DLElBQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxXQUFXLElBQUksR0FBRyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUM7UUFDdEUsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQztRQUNoQyxFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNoQyxPQUFPLEVBQUUsQ0FBQzs7O2dCQTlHakIsVUFBVTs7OztnREFHTSxNQUFNLFNBQUMsUUFBUTtnREFBeUIsTUFBTSxTQUFDLE1BQU07OzJCQVB0RTs7Ozs7Ozs7QUFzSEEsNENBQW1ELEdBQWEsRUFBRSxHQUFXLEVBQUUsZ0JBQWtDO0lBQzdHLE9BQU8sZ0JBQWdCLElBQUksSUFBSSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7Q0FDN0Q7O0FBRUQsSUFBYSwwQkFBMEIsR0FBRztJQUN0QyxJQUFJLEVBQUUsbUJBQUMsUUFBb0MscUJBQUUsTUFBZ0MsR0FBRSxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2xJLE9BQU8sRUFBRSxnQkFBZ0I7SUFDekIsVUFBVSxFQUFFLGtDQUFrQztDQUNqRDs7Ozs7O0FDOUhEO0lBdUJJLDRCQUFvQixZQUE4QjtRQUE5QixpQkFBWSxHQUFaLFlBQVksQ0FBa0I7MkJBSlYsSUFBSSxZQUFZLEVBQU87eUJBR3pCLElBQUksWUFBWSxFQUFPO0tBQ1A7Ozs7SUFHL0MscUNBQVE7Ozs7Ozs7SUFFUix3Q0FBVzs7OztRQUNkLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzs7Ozs7O0lBSXZDLG9DQUFPOzs7O0lBRGQsVUFDZSxLQUFZO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRTtZQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztTQUN2QzthQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDMUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25HO2FBQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3hHO0tBQ0o7Ozs7Ozs7SUFNTyx5Q0FBWTs7Ozs7O2NBQUMsU0FBa0IsRUFBRSxhQUFpQztRQUN0RSxJQUFJLFNBQVMsRUFBRTtZQUNYLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQztTQUN0RTthQUFNO1lBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUM3Qzs7O2dCQWhEUixTQUFTLFNBQUM7O29CQUVQLFFBQVEsRUFBRSxnQkFBZ0I7aUJBQzdCOzs7O2dCQUxRLGdCQUFnQjs7OzRCQVFwQixLQUFLLFNBQUMsY0FBYzs0QkFFcEIsS0FBSzs0QkFHTCxLQUFLOzhCQUdMLE1BQU07NEJBR04sTUFBTTswQkFXTixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDOzs2QkFoQzVDOzs7Ozs7O0FDQUE7Ozs7Z0JBUUMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxvQkFBb0IsQ0FBQzs7b0JBRTdDLFlBQVksRUFBRSxDQUFDLGtCQUFrQixDQUFDO29CQUNsQyxPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztvQkFDN0IsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7aUJBQ3hDOzswQkFkRDs7Ozs7Ozs7Ozs7Ozs7OyJ9

/***/ }),

/***/ "./node_modules/ngx-window-token/fesm5/ngx-window-token.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW", function() { return WINDOW; });
/* unused harmony export _window */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxWindowTokenModule", function() { return NgxWindowTokenModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ WINDOW = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('WindowToken');
/**
 * @return {?}
 */
function _window() {
    return window;
}
var NgxWindowTokenModule = /** @class */ (function () {
    function NgxWindowTokenModule() {
    }
    NgxWindowTokenModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    providers: [{
                            provide: WINDOW,
                            useFactory: _window
                        }]
                },] },
    ];
    return NgxWindowTokenModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXdpbmRvdy10b2tlbi5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LXdpbmRvdy10b2tlbi9saWIvbmd4LXdpbmRvdy10b2tlbi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBXSU5ET1cgPSBuZXcgSW5qZWN0aW9uVG9rZW48V2luZG93PignV2luZG93VG9rZW4nKTtcblxuZXhwb3J0IGZ1bmN0aW9uIF93aW5kb3coKTogV2luZG93IHtcbiAgICByZXR1cm4gd2luZG93O1xufVxuXG5ATmdNb2R1bGUoe1xuICAgIHByb3ZpZGVyczogW3tcbiAgICAgICAgcHJvdmlkZTogV0lORE9XLFxuICAgICAgICB1c2VGYWN0b3J5OiBfd2luZG93XG4gICAgfV1cbn0pXG5leHBvcnQgY2xhc3MgTmd4V2luZG93VG9rZW5Nb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEscUJBR2EsTUFBTSxHQUFHLElBQUksY0FBYyxDQUFTLGFBQWEsQ0FBQyxDQUFDOzs7O0FBRWhFO0lBQ0ksT0FBTyxNQUFNLENBQUM7Q0FDakI7Ozs7O2dCQUVBLFFBQVEsU0FBQztvQkFDTixTQUFTLEVBQUUsQ0FBQzs0QkFDUixPQUFPLEVBQUUsTUFBTTs0QkFDZixVQUFVLEVBQUUsT0FBTzt5QkFDdEIsQ0FBQztpQkFDTDs7K0JBZEQ7Ozs7Ozs7Ozs7Ozs7OzsifQ==

/***/ }),

/***/ "./src/packages/sgdesigner-wizard/package.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SgDesignerPackage", function() { return SgDesignerPackage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views__ = __webpack_require__("./src/packages/sgdesigner-wizard/views/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit__ = __webpack_require__("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit__);
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


var SgDesignerPackage = (function (_super) {
    __extends(SgDesignerPackage, _super);
    function SgDesignerPackage(gsp, cfr, injector) {
        var _this = _super.call(this, gsp) || this;
        _this.cfr = cfr;
        _this.injector = injector;
        return _this;
    }
    SgDesignerPackage.prototype.activate = function (state) {
        var _this = this;
        this.gsp.workspace.addOpener(function (uri) { return _this.openSg(uri); });
    };
    SgDesignerPackage.prototype.openSg = function (uri) {
        if (uri.endsWith('.eapi')) {
            var pkgView_1 = new __WEBPACK_IMPORTED_MODULE_0__views__["SgDesignerPackageView"]({}, this.cfr, this.injector);
            var currentElement = pkgView_1.getElement().instance;
            currentElement.metadataUri = uri;
            // 这里需要处理uri，title应返回元数据名称，
            var fileName_1 = uri.substring(uri.lastIndexOf('/') + 1);
            return {
                getTitle: function () { return fileName_1; },
                getElement: function () { return pkgView_1.getElement(); }
            };
        }
    };
    return SgDesignerPackage;
}(__WEBPACK_IMPORTED_MODULE_1__farris_ide_devkit__["Package"]));



/***/ }),

/***/ "./src/packages/sgdesigner-wizard/sgpackage.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SgDesignerPackageModule", function() { return SgDesignerPackageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__package__ = __webpack_require__("./src/packages/sgdesigner-wizard/package.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_sgdesigner_sg_module__ = __webpack_require__("./src/packages/sgdesigner-wizard/views/sgdesigner/sg.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_sgdesigner_apiservice_eventBusService__ = __webpack_require__("./src/packages/sgdesigner-wizard/views/sgdesigner/apiservice/eventBusService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_sgdesigner_apiservice_apiservice__ = __webpack_require__("./src/packages/sgdesigner-wizard/views/sgdesigner/apiservice/apiservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__farris_ide_devkit__ = __webpack_require__("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__farris_ide_devkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__farris_ide_devkit__);
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







var SgDesignerPackageModule = (function (_super) {
    __extends(SgDesignerPackageModule, _super);
    function SgDesignerPackageModule(cfr, injector) {
        var _this = _super.call(this) || this;
        _this.cfr = cfr;
        _this.injector = injector;
        return _this;
    }
    SgDesignerPackageModule.prototype.initPackage = function (gsp) {
        this.package = new __WEBPACK_IMPORTED_MODULE_1__package__["SgDesignerPackage"](gsp, this.cfr, this.injector);
    };
    SgDesignerPackageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__views_sgdesigner_sg_module__["SgDesignerModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__views_sgdesigner_apiservice_eventBusService__["EventBusService"], __WEBPACK_IMPORTED_MODULE_5__views_sgdesigner_apiservice_apiservice__["ApiService"]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], SgDesignerPackageModule);
    return SgDesignerPackageModule;
}(__WEBPACK_IMPORTED_MODULE_6__farris_ide_devkit__["PackageModule"]));

//# sourceMappingURL=sgpackage.module.js.map

/***/ }),

/***/ "./src/packages/sgdesigner-wizard/views/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SgDesignerPackageView", function() { return SgDesignerPackageView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sgdesigner_sg_component__ = __webpack_require__("./src/packages/sgdesigner-wizard/views/sgdesigner/sg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sgdesigner_sg_module__ = __webpack_require__("./src/packages/sgdesigner-wizard/views/sgdesigner/sg.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_ide_devkit__ = __webpack_require__("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_ide_devkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__farris_ide_devkit__);
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



var SgDesignerPackageView = (function (_super) {
    __extends(SgDesignerPackageView, _super);
    function SgDesignerPackageView(serializedState, cfr, injector) {
        var _this = _super.call(this, serializedState) || this;
        _this.cfr = cfr;
        _this.injector = injector;
        var componentFactory = _this.cfr.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_0__sgdesigner_sg_component__["SgDesignerComponent"]);
        var moduleRef = _this.injector.get(__WEBPACK_IMPORTED_MODULE_1__sgdesigner_sg_module__["SgDesignerModule"]);
        console.log(moduleRef);
        _this.element = componentFactory.create(_this.injector);
        return _this;
    }
    return SgDesignerPackageView;
}(__WEBPACK_IMPORTED_MODULE_2__farris_ide_devkit__["PackageView"]));



/***/ }),

/***/ "./src/packages/sgdesigner-wizard/views/sgdesigner/apiBaseInfo/apibaseinfo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-column\" style=\"flex:1 1 auto;\">\r\n    <div class=\"col-xs-12 col-sm-12\" style=\"margin-top: 10px;\">\r\n        <div class=\"panel-heading\">\r\n            <h6 class=\"panel-title\" style=\"font-size: 0.9rem;\">\r\n                基本信息\r\n            </h6>\r\n        </div>\r\n        <div class=\"card\" style=\"background-color: #f6f6f6;\">\r\n            <div class=\"card-block\">\r\n                <form class=\"k-form\" style=\"padding: 12px 16px 8px 16px;\">\r\n                    <form class=\"k-form-inline\" style=\"padding: 2px;height: 36px;\">\r\n                        <div class=\"k-form-field\" style=\"height: 36px;\">\r\n                            <label style=\"width: 5%;min-width: 95px;\">服务ID</label>\r\n                            <input style=\"width: 45%;\" class=\"k-textbox\" readonly=\"readonly\" [(ngModel)]=\"apimetadata.id\" name=\"apimetadataid\"\r\n                            />\r\n                            <label style=\"width: 5%;min-width: 95px\">服务编号</label>\r\n                            <input style=\"width: 45%;\" class=\"k-textbox\" readonly=\"readonly\" [(ngModel)]=\"apimetadata.code\" name=\"apimetadatacode\"\r\n                            />\r\n                        </div>\r\n                    </form>\r\n                    <form class=\"k-form-inline\" style=\"padding: 2px;height: 36px;\">\r\n                        <div class=\"k-form-field\"  style=\"height: 36px;\">\r\n                            <label style=\"width: 5%;min-width: 95px;\">服务名称</label>\r\n                            <input style=\"width: 45%;\" class=\"k-textbox\" [(ngModel)]=\"apimetadata.name\" name=\"apimetadataname\" />\r\n                            <label style=\"width: 5%;min-width: 95px;\">业务对象</label>\r\n                            <input style=\"width: 45%;\" class=\"k-textbox\" [(ngModel)]=\"apimetadata.bizObject\" name=\"apimetadatabizObject\"\r\n                            />\r\n                           \r\n                        </div>\r\n                    </form>\r\n                    <form class=\"k-form-inline\" style=\"padding: 2px;height: 36px;\">\r\n                        <div class=\"k-form-field\"  style=\"height: 36px;\">\r\n                            <label style=\"width: 5%;min-width: 95px;\">关键应用</label>\r\n                            <input style=\"width: 45%;\" class=\"k-textbox\"  [(ngModel)]=\"apimetadata.criticalApplication\" name=\"apimetadatacriticalApplication\"\r\n                            />\r\n                            <label style=\"width: 5%;min-width: 95px;\">服务单元</label>\r\n                            <input style=\"width: 45%;\" class=\"k-textbox\" [(ngModel)]=\"apimetadata.serviceUnit\" name=\"apimetadataserviceUnit\"\r\n                            />\r\n                        </div>\r\n                    </form>\r\n                    <form class=\"k-form-inline\" style=\"padding: 2px;height: 36px;\">\r\n                        <div class=\"k-form-field\"  style=\"height: 36px;\">\r\n                            <label style=\"width: 5%;min-width: 95px;\">服务版本</label>\r\n                            <input style=\"width: 45%;\" class=\"k-textbox\" [(ngModel)]=\"apimetadata.version\" name=\"apimetadataversion\"\r\n                            />\r\n                            <label style=\"width: 5%;min-width: 95px;\">基路径</label>\r\n                            <input style=\"width: 45%;\" class=\"k-textbox\" [(ngModel)]=\"apimetadata.routeUrl\" name=\"apimetadatarouteUrl\"\r\n                            />\r\n                        </div>\r\n                    </form>\r\n                    \r\n                    <form class=\"k-form-inline\" style=\"padding: 2px;height: 36px;\">\r\n                        <div class=\"k-form-field\"  style=\"height: 36px;\">\r\n                            <label style=\"width: 5%;min-width: 95px;\">服务描述</label>\r\n                            <input style=\"width: 45%;min-width: 200px;\" class=\"k-textbox\" [(ngModel)]=\"apimetadata.description\" name=\"apimetadatadescription\"\r\n                            />\r\n                        </div>\r\n                    </form>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"d-flex col-xs-12 col-sm-12 d-flex flex-column\" style=\"margin-top: 10px;flex:1 1 auto\">\r\n        <div class=\"panel-heading\">\r\n            <h6 class=\"panel-title\" style=\"font-size: 0.9rem;\">\r\n                服务模型\r\n            </h6>\r\n        </div>\r\n        <div class=\"card\" class=\"d-flex flex-column\" style=\"flex:1 1 auto;\">\r\n            <div class=\"card-block\" class=\"d-flex flex-column\" style=\"flex:1 1 auto;\">\r\n                <kendo-grid class=\"d-flex flex-column\" style=\"flex:1 1 auto;min-height: 150px\" [data]=\"apimetadata.models\" [selectable]=\"{enabled: true, checkboxOnly: false,mode:'multiple' }\"\r\n                    [kendoGridSelectBy]=\"'id'\" (selectedKeysChange)=\"onSelectedKeysChange($event)\" [selectedKeys]=\"selectedIds\" >\r\n                    <ng-template kendoGridToolbarTemplate>\r\n                        <button kendoGridAddCommand (click)=\"addServiceModel()\">\r\n                            <span class=\"k-icon k-i-plus\"></span>新增</button>\r\n                        <button kendoGridAddCommand (click)=\"deleteServiceModelList()\">\r\n                            <span class=\"k-icon k-i-delete\"></span>删除</button>\r\n                    </ng-template>\r\n                    <kendo-grid-checkbox-column width=\"40\">\r\n                        <ng-template kendoGridHeaderTemplate>\r\n                            <input class=\"k-checkbox\" id=\"selectAllCheckboxId\" kendoGridSelectAllCheckbox [state]=\"selectAllState\" (selectAllChange)=\"onSelectAllChange($event)\"\r\n                            />\r\n                            <label class=\"k-checkbox-label\" for=\"selectAllCheckboxId\"></label>\r\n                        </ng-template>\r\n                    </kendo-grid-checkbox-column>\r\n                    <kendo-grid-column field=\"code\" title=\"模型编号\"></kendo-grid-column>\r\n                    <kendo-grid-column field=\"name\" title=\"模型名称\"></kendo-grid-column>\r\n                    <kendo-grid-column field=\"modelId\" title=\"模型ID\"></kendo-grid-column>\r\n                    <kendo-grid-column title=\"模型类型\" width=\"100\">\r\n                        <ng-template kendoGridCellTemplate let-dataItem>\r\n                            {{getServiceModelTypeName(dataItem)}}\r\n                        </ng-template>\r\n                    </kendo-grid-column>\r\n                    <ng-template kendoGridCellTemplate>\r\n                        <button kendoGridEditCommand [primary]=\"true\">Edit</button>\r\n                        <button kendoGridRemoveCommand>Delete</button>\r\n                    </ng-template>\r\n                </kendo-grid>\r\n\r\n                <kendo-grid-edit-form [newSgModel]=\"newSgModel\" [apimetadata]=\"apimetadataClone\" (save)=\"saveHandler($event)\">\r\n                </kendo-grid-edit-form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/packages/sgdesigner-wizard/views/sgdesigner/apiBaseInfo/apibaseinfo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiBaseInfoComponent", function() { return ApiBaseInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sgmetadata_sgMetadata__ = __webpack_require__("./src/packages/sgdesigner-wizard/views/sgdesigner/sgmetadata/sgMetadata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apiservice_apiservice__ = __webpack_require__("./src/packages/sgdesigner-wizard/views/sgdesigner/apiservice/apiservice.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiBaseInfoComponent = (function () {
    function ApiBaseInfoComponent(apiService) {
        this.apiService = apiService;
        this.title = 'apibaseinfo';
        this.selectedServiceModelList = []; //已选择的服务模型
        this.selectedIds = [];
        this.selectAllState = 'unchecked';
    }
    //增加服务模型
    ApiBaseInfoComponent.prototype.addServiceModel = function () {
        this.newSgModel = new __WEBPACK_IMPORTED_MODULE_1__sgmetadata_sgMetadata__["SgModel"]();
        this.apimetadataClone = Object.assign({}, this.apimetadata);
    };
    //获取选择项事件
    ApiBaseInfoComponent.prototype.onSelectedKeysChange = function (e) {
        var _this = this;
        this.selectedServiceModelList = [];
        var len = this.selectedIds.length;
        if (len > 0) {
            this.selectedIds.forEach(function (id) {
                if (_this.apimetadata.models && _this.apimetadata.models.length > 0) {
                    var tempIndex = _this.apimetadata.models.findIndex(function (value) { return value.id == id; });
                    if (tempIndex != (-1)) {
                        _this.selectedServiceModelList.push(_this.apimetadata.models[tempIndex]);
                    }
                }
            });
        }
        if (len === 0) {
            this.selectAllState = 'unchecked';
        }
        else if (len > 0 && len < this.apimetadata.models.length) {
            this.selectAllState = 'indeterminate';
        }
        else {
            this.selectAllState = 'checked';
        }
    };
    //全选框事件
    ApiBaseInfoComponent.prototype.onSelectAllChange = function (checkedState) {
        if (checkedState === 'checked') {
            this.selectedIds = this.apimetadata.models.map(function (item) { return item.id; });
            this.selectAllState = 'checked';
        }
        else {
            this.selectedIds = [];
            this.selectAllState = 'unchecked';
        }
    };
    //删除服务模型
    ApiBaseInfoComponent.prototype.deleteServiceModelList = function () {
        var _this = this;
        if (!this.selectedServiceModelList || this.selectedServiceModelList.length <= 0) {
            alert('请选择需要删除的服务模型。');
            return;
        }
        // let validResultDict = this.deleteServiceModelCheck();
        // if (validResultDict.key == 'true') {
        //   alert(validResultDict.value);
        //   return;
        // }
        this.selectedServiceModelList.forEach(function (element) {
            _this.apiService.deleteSpecifiedElement(_this.apimetadata.models, element);
            _this.apiService.deleteSpecifiedElement(_this.selectedIds, element.id);
        });
        this.selectedServiceModelList = [];
        this.selectAllState = "unchecked";
    };
    //保存事件处理
    ApiBaseInfoComponent.prototype.saveHandler = function (sgModel) {
        if (!this.apimetadata.models) {
            this.apimetadata.models = [];
        }
        var tempModel = {};
        tempModel.id = sgModel.modelId;
        tempModel.code = sgModel.code;
        tempModel.name = sgModel.name;
        tempModel.modelId = sgModel.modelId;
        tempModel.modelType = sgModel.modelType;
        this.apimetadata.models.push(tempModel);
    };
    //服务模型名称赋值
    ApiBaseInfoComponent.prototype.getServiceModelTypeName = function (dataItem) {
        if (dataItem.modelType == __WEBPACK_IMPORTED_MODULE_1__sgmetadata_sgMetadata__["SgModelType"].VO) {
            dataItem.modelTypeName = 'VO';
        }
        else if (dataItem.modelType == __WEBPACK_IMPORTED_MODULE_1__sgmetadata_sgMetadata__["SgModelType"].Dto) {
            dataItem.modelTypeName = 'Dto';
        }
        return dataItem.modelTypeName;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__sgmetadata_sgMetadata__["SgMetadata"])
    ], ApiBaseInfoComponent.prototype, "apimetadata", void 0);
    ApiBaseInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-apibaseinfo',
            template: __webpack_require__("./src/packages/sgdesigner-wizard/views/sgdesigner/apiBaseInfo/apibaseinfo.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__apiservice_apiservice__["ApiService"]])
    ], ApiBaseInfoComponent);
    return ApiBaseInfoComponent;
}());



/***/ }),

/***/ "./src/packages/sgdesigner-wizard/views/sgdesigner/apiBaseInfo/apibaseinfomodal/apibaseinfodialog.component.html":
/***/ (function(module, exports) {

module.exports = "<kendo-dialog *ngIf=\"active\" (close)=\"closeForm()\">\r\n    <kendo-dialog-titlebar>\r\n        新增服务模型\r\n    </kendo-dialog-titlebar>\r\n    <form class=\"k-form\" style=\"padding: 0px;\">\r\n        <form class=\"k-form-inline\" style=\"padding: 0px;\">\r\n            <div class=\"k-form-field\" style=\"margin-bottom: 0.4em;\">\r\n                <span style=\"width: 5%;min-width: 75px;\">模型ID</span>\r\n                <input type=\"text\" class=\"k-textbox\" style=\"width: 95%\" name=\"sgmodelId\" [(ngModel)]=\"newSgModel.modelId\" />\r\n            </div>\r\n        </form>\r\n        <form class=\"k-form-inline\" style=\"padding: 0px;\">\r\n            <div class=\"k-form-field\" style=\"margin-bottom: 0.4em;\">\r\n                <span style=\"width: 5%;min-width: 75px;\">模型编号</span>\r\n                <input type=\"text\" class=\"k-textbox\" style=\"width: 95%\" name=\"sgmodelcode\" [(ngModel)]=\"newSgModel.code\" />\r\n            </div>\r\n        </form>\r\n        <form class=\"k-form-inline\" style=\"padding: 0px;\">\r\n            <div class=\"k-form-field\" style=\"margin-bottom: 0.4em;\">\r\n                <span style=\"width: 5%;min-width: 75px;\">模型名称</span>\r\n                <input type=\"text\" class=\"k-textbox\" style=\"width: 95%\" name=\"sgmodelname\" [(ngModel)]=\"newSgModel.name\" />\r\n            </div>\r\n        </form>\r\n        <form class=\"k-form-inline\" style=\"padding: 0px;\">\r\n            <div class=\"k-form-field\" style=\"margin-bottom: 0.4em;\">\r\n                <span style=\"width: 5%;min-width: 75px;\">模型类型</span>\r\n                <kendo-dropdownlist [data]=\"modelType\" class=\"dropListWidth\" style=\"width: 95%;max-width: 95%;\" textField=\"text\" valueField=\"value\"\r\n                    [valuePrimitive]=\"true\" [(ngModel)]=\"newSgModel.modelType\" name=\"sgModelModelType\">\r\n                </kendo-dropdownlist>\r\n            </div>\r\n        </form>\r\n    </form>\r\n    <kendo-dialog-actions>\r\n        <button class=\"k-button\" (click)=\"closeForm()\">取消</button>\r\n        <button class=\"k-button k-primary\" (click)=\"onSave($event)\">确定</button>\r\n    </kendo-dialog-actions>\r\n</kendo-dialog>"

/***/ }),

/***/ "./src/packages/sgdesigner-wizard/views/sgdesigner/apiBaseInfo/apibaseinfomodal/apibaseinfodialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SgModelModalComponent", function() { return SgModelModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sgmetadata_sgMetadata__ = __webpack_require__("./src/packages/sgdesigner-wizard/views/sgdesigner/sgmetadata/sgMetadata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progress_kendo_angular_grid_dist_es2015_utils__ = __webpack_require__("./node_modules/@progress/kendo-angular-grid/dist/es2015/utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_util__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SgModelModalComponent = (function () {
    function SgModelModalComponent() {
        this.active = false;
        this.modelType = [
            { text: "VM", value: 0 },
            { text: "Dto", value: 1 }
        ];
        this.save = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SgModelModalComponent.prototype.ngOnChanges = function (changes) {
        if (this.newSgModel != undefined) {
            this.active = true;
        }
    };
    SgModelModalComponent.prototype.onSave = function (e) {
        if (Object(__WEBPACK_IMPORTED_MODULE_2__progress_kendo_angular_grid_dist_es2015_utils__["isNullOrEmptyString"])(this.newSgModel.modelId) || Object(__WEBPACK_IMPORTED_MODULE_3_util__["isNullOrUndefined"])(this.newSgModel.modelId)) {
            alert("请输入模型ID");
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_2__progress_kendo_angular_grid_dist_es2015_utils__["isNullOrEmptyString"])(this.newSgModel.code) || Object(__WEBPACK_IMPORTED_MODULE_3_util__["isNullOrUndefined"])(this.newSgModel.code)) {
            alert("请输入模型编号");
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_2__progress_kendo_angular_grid_dist_es2015_utils__["isNullOrEmptyString"])(this.newSgModel.name) || Object(__WEBPACK_IMPORTED_MODULE_3_util__["isNullOrUndefined"])(this.newSgModel.name)) {
            alert("请输入模型名称");
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_3_util__["isNullOrUndefined"])(this.newSgModel.modelType)) {
            alert("请输入模型类型");
            return;
        }
        var validResultDict = this.serviceModelCheck();
        if (validResultDict.key == "false") {
            alert(validResultDict.value);
            return;
        }
        this.save.emit(this.newSgModel);
        this.newSgModel = undefined;
        this.active = false;
    };
    SgModelModalComponent.prototype.onCancel = function (e) {
        e.preventDefault();
        this.closeForm();
    };
    SgModelModalComponent.prototype.closeForm = function () {
        this.active = false;
    };
    SgModelModalComponent.prototype.serviceModelCheck = function () {
        var _this = this;
        var validResultDict = {};
        var refTemp = false;
        if (this.apimetadata && this.apimetadata.models && this.apimetadata.models.length > 0) {
            var tempIndex = this.apimetadata.models.findIndex(function (value) { return value.modelId == _this.newSgModel.modelId; });
            if (tempIndex != (-1)) {
                validResultDict.key = "false";
                validResultDict.value = "服务模型" + this.newSgModel.code + "已存在。";
                return validResultDict;
            }
            var tempIndex1 = this.apimetadata.models.findIndex(function (value) { return value.code == _this.newSgModel.code; });
            if (tempIndex1 != (-1)) {
                validResultDict.key = "false";
                validResultDict.value = "服务模型" + this.newSgModel.code + "编号重复。";
                return validResultDict;
            }
        }
        if (refTemp == false) {
            validResultDict.key = "true";
            validResultDict.value = "";
        }
        return validResultDict;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__sgmetadata_sgMetadata__["SgModel"])
    ], SgModelModalComponent.prototype, "newSgModel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__sgmetadata_sgMetadata__["SgMetadata"])
    ], SgModelModalComponent.prototype, "apimetadata", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], SgModelModalComponent.prototype, "save", void 0);
    SgModelModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'kendo-grid-edit-form',
            styles: [
                'input[type=text] { width: 100%; }'
            ],
            template: __webpack_require__("./src/packages/sgdesigner-wizard/views/sgdesigner/apiBaseInfo/apibaseinfomodal/apibaseinfodialog.component.html")
        })
    ], SgModelModalComponent);
    return SgModelModalComponent;
}());



/***/ }),

/***/ "./src/packages/sgdesigner-wizard/views/sgdesigner/apiservice/apiservice.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
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

var ApiService = (function () {
    function ApiService() {
    }
    //Guid生成Id
    ApiService.prototype.getGuid = function () {
        return (this.s4() + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + this.s4() + this.s4());
    };
    ApiService.prototype.s4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    //删除指定元素
    ApiService.prototype.deleteSpecifiedElement = function (inputArray, element) {
        var tempIndex = inputArray.findIndex(function (value) { return value == element; });
        if (tempIndex != (-1)) {
            inputArray.splice(tempIndex, 1);
        }
    };
    //获取选择项列表
    ApiService.prototype.getSelectedList = function (value, input, inputArray) {
        if (value == true) {
            inputArray.push(input);
        }
        else {
            var tempIndex = inputArray.findIndex(function (value) { return value == input; });
            if (tempIndex != (-1)) {
                inputArray.splice(tempIndex, 1);
            }
        }
    };
    //根据id替换指定元素
    ApiService.prototype.replaceSpecifiedElementById = function (inputArray, element) {
        var tempIndex = inputArray.findIndex(function (value) { return value.id == element.id; });
        if (tempIndex != (-1)) {
            inputArray.splice(tempIndex, 1, element);
        }
    };
    //根据Id删除指定元素
    ApiService.prototype.deleteSpecifiedElementById = function (inputArray, element) {
        var tempIndex = inputArray.findIndex(function (value) { return value.id == element.id; });
        if (tempIndex != (-1)) {
            inputArray.splice(tempIndex, 1);
        }
    };
    //json串解析
    ApiService.prototype.GetCamelParse = function (jsonObj) {
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
    ApiService.prototype.ConvertToCamel = function (input) {
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
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/packages/sgdesigner-wizard/views/sgdesigner/apiservice/eventBusService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventBusService", function() { return EventBusService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EventBusService = (function () {
    function EventBusService() {
        this.eventbus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    EventBusService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], EventBusService);
    return EventBusService;
}());



/***/ }),

/***/ "./src/packages/sgdesigner-wizard/views/sgdesigner/commonobject/global.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "host", function() { return host; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("./src/environments/environment.ts");

// export const host:string="http://localhost:5000";
var host = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["environment"].SERVER_IP;


/***/ }),

/***/ "./src/packages/sgdesigner-wizard/views/sgdesigner/servicedefine/modal/paramedit.component.html":
/***/ (function(module, exports) {

module.exports = "<div >\r\n    <form class=\"k-form\" style=\"padding: 0rem;\">\r\n        <form class=\"k-form-inline\" style=\"padding: 0rem;\">\r\n            <div class=\"k-form-field\" style=\"margin-bottom: 0.4em;\">\r\n                <span style=\"width: 5%;min-width: 75px;\">参数编号</span>\r\n                <input type=\"text\" class=\"k-textbox\" name=\"paramCode\" [(ngModel)]=\"serviceParameter.code\" />\r\n            </div>\r\n        </form>\r\n        <form class=\"k-form-inline\" style=\"padding: 0rem;\">\r\n            <div class=\"k-form-field\" style=\"margin-bottom: 0.4em;\">\r\n                <span style=\"width: 5%;min-width: 75px;\">参数名称</span>\r\n                <input type=\"text\" class=\"k-textbox\" name=\"paramName\" [(ngModel)]=\"serviceParameter.name\" />\r\n            </div>\r\n        </form>\r\n        <form class=\"k-form-inline\" style=\"padding: 0rem;\">\r\n            <div class=\"k-form-field\" style=\"margin-bottom: 0.4em;\">\r\n                <span style=\"width: 5%;min-width: 75px;\">参数类型</span>\r\n                <input type=\"text\" class=\"k-textbox\" name=\"paramType\" readonly=\"readonly\" [(ngModel)]=\"serviceParameter.modelName\" />\r\n            </div>\r\n        </form>\r\n        <form class=\"k-form-inline\" style=\"padding: 0rem;\">\r\n            <div class=\"k-form-field\" style=\"margin-bottom: 0.4em;\">\r\n                <span style=\"width: 5%;min-width: 75px;\">是否列表</span>\r\n                <input type=\"text\" class=\"k-textbox\" name=\"paramType\" readonly=\"readonly\" [(ngModel)]=\"serviceParameter.isCollection\" />\r\n            </div>\r\n        </form>\r\n        \r\n        <form class=\"k-form-inline\" style=\"padding: 0rem;\">\r\n            <div class=\"k-form-field\" style=\"margin-bottom: 0.4em;\">\r\n                <span style=\"width: 5%;min-width: 75px;\">返回值</span>\r\n                <input type=\"text\" class=\"k-textbox\" name=\"paramType\" readonly=\"readonly\" [(ngModel)]=\"serviceParameter.isRetVal\" />\r\n            </div>\r\n        </form>\r\n        <form class=\"k-form-inline\" style=\"padding: 0rem;\">\r\n            <div class=\"k-form-field\" style=\"margin-bottom: 0.4em;\">\r\n                <span style=\"width: 5%;min-width: 75px;\">是否必须</span>\r\n                <kendo-dropdownlist [data]=\"status\" style=\"width: 95%;\" [(ngModel)]=\"serviceParameter.isRequired\" name=\"paramIsRequired\">\r\n                </kendo-dropdownlist>\r\n            </div>\r\n        </form>\r\n        <form class=\"k-form-inline\" style=\"padding: 0rem;\">\r\n            <div class=\"k-form-field\" style=\"margin-bottom: 0.4em;\">\r\n                <span style=\"width: 5%;min-width: 75px;\">参数位置</span>\r\n                <kendo-dropdownlist [data]=\"paramsPosition\" style=\"width: 95%;\" [(ngModel)]=\"serviceParameter.in\" name=\"paramIn\">\r\n                </kendo-dropdownlist>\r\n            </div>\r\n        </form>\r\n        <form class=\"k-form-inline\" style=\"padding: 0rem;\">\r\n            <div class=\"k-form-field\" style=\"margin-bottom: 0.4em;\">\r\n                <span style=\"width: 5%;min-width: 75px;\">参数描述</span>\r\n                <input type=\"text\" class=\"k-textbox\" name=\"paramDescription\" [(ngModel)]=\"serviceParameter.description\" />\r\n            </div>\r\n        </form>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "./src/packages/sgdesigner-wizard/views/sgdesigner/servicedefine/modal/paramedit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParamEditDialogComponent", function() { return ParamEditDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sgmetadata_sgMetadata__ = __webpack_require__("./src/packages/sgdesigner-wizard/views/sgdesigner/sgmetadata/sgMetadata.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ParamEditDialogComponent = (function () {
    function ParamEditDialogComponent() {
        this.status = [true, false];
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__sgmetadata_sgMetadata__["ServiceParameter"])
    ], ParamEditDialogComponent.prototype, "serviceParameter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ParamEditDialogComponent.prototype, "paramsPosition", void 0);
    ParamEditDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'kendo-grid-editwebapioperation-form',
            template: __webpack_require__("./src/packages/sgdesigner-wizard/views/sgdesigner/servicedefine/modal/paramedit.component.html")
        })
    ], ParamEditDialogComponent);
    return ParamEditDialogComponent;
}());



/***/ }),

/***/ "./src/packages/sgdesigner-wizard/views/sgdesigner/servicedefine/modal/resourceopselection.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <kendo-grid [data]=\"opSummaryList\"  [height]=\"330\" [selectable]=\"{enabled: true, checkboxOnly: false,mode:'multiple' }\"\r\n    [kendoGridSelectBy]=\"'id'\" (selectedKeysChange)=\"onSelectedKeysChange($event)\" [selectedKeys]=\"selectedIds\">\r\n        <kendo-grid-checkbox-column width=\"40\">\r\n            <ng-template kendoGridHeaderTemplate>\r\n                <input class=\"k-checkbox\"  id=\"selectAllCheckboxId\" kendoGridSelectAllCheckbox\r\n                [state]=\"selectAllState\" (selectAllChange)=\"onSelectAllChange($event)\"/>\r\n                <label class=\"k-checkbox-label\" for=\"selectAllCheckboxId\"></label>\r\n            </ng-template>\r\n        </kendo-grid-checkbox-column>\r\n        <kendo-grid-column field=\"code\" title=\"操作编号\"></kendo-grid-column>\r\n        <kendo-grid-column field=\"name\" title=\"操作名称\"></kendo-grid-column>\r\n    </kendo-grid>\r\n</div>\r\n"

/***/ }),

/***/ "./src/packages/sgdesigner-wizard/views/sgdesigner/servicedefine/modal/resourceopselection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceOpSelectionComponent", function() { return ResourceOpSelectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sgmetadata_sgMetadata__ = __webpack_require__("./src/packages/sgdesigner-wizard/views/sgdesigner/sgmetadata/sgMetadata.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResourceOpSelectionComponent = (function () {
    function ResourceOpSelectionComponent() {
        this.selectedOpSummaryList = []; //选取的资源定义中的操作列表
        this.selectedIds = [];
        this.selectAllState = 'unchecked';
        this.opSelectionConfirm = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ResourceOpSelectionComponent.prototype.onSelectedKeysChange = function (e) {
        var _this = this;
        this.selectedOpSummaryList = [];
        var len = this.selectedIds.length;
        if (len > 0) {
            this.selectedIds.forEach(function (element) {
                var tempIndex = _this.opSummaryList.findIndex(function (value) { return value.id == element; });
                if (tempIndex != (-1)) {
                    _this.selectedOpSummaryList.push(_this.opSummaryList[tempIndex]);
                }
            });
        }
        if (len === 0) {
            this.selectAllState = 'unchecked';
        }
        else if (len > 0 && len < this.opSummaryList.length) {
            this.selectAllState = 'indeterminate';
        }
        else {
            this.selectAllState = 'checked';
        }
    };
    ResourceOpSelectionComponent.prototype.onSelectAllChange = function (checkedState) {
        if (checkedState === 'checked') {
            this.selectedIds = this.opSummaryList.map(function (item) { return item.id; });
            this.selectAllState = 'checked';
        }
        else {
            this.selectedIds = [];
            this.selectAllState = 'unchecked';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ResourceOpSelectionComponent.prototype, "opSummaryList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__sgmetadata_sgMetadata__["SgMetadata"])
    ], ResourceOpSelectionComponent.prototype, "apimetadata", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ResourceOpSelectionComponent.prototype, "opSelectionConfirm", void 0);
    ResourceOpSelectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'kendo-grid-resourceopselection-form',
            template: __webpack_require__("./src/packages/sgdesigner-wizard/views/sgdesigner/servicedefine/modal/resourceopselection.component.html")
        })
    ], ResourceOpSelectionComponent);
    return ResourceOpSelectionComponent;
}());



/***/ }),

/***/ "./src/packages/sgdesigner-wizard/views/sgdesigner/servicedefine/modal/resourceselection.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <form class=\"k-form-inline\" style=\"padding: 0px;\">\r\n        <div class=\"k-form-field\" style=\"margin-bottom: 0.4em;\">\r\n            <span style=\"width: 5%;min-width: 75px;\">资源类型</span>\r\n            <kendo-dropdownlist [data]=\"resourceTypeList\" style=\"width: 95%;\" [(ngModel)]=\"selectedResourceType\" name=\"selectedResType\">\r\n            </kendo-dropdownlist>\r\n        </div>\r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/packages/sgdesigner-wizard/views/sgdesigner/servicedefine/modal/resourceselection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceTypeSelectionComponent", function() { return ResourceTypeSelectionComponent; });
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

var ResourceTypeSelectionComponent = (function () {
    function ResourceTypeSelectionComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ResourceTypeSelectionComponent.prototype, "resourceTypeList", void 0);
    ResourceTypeSelectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-resourceselection',
            template: __webpack_require__("./src/packages/sgdesigner-wizard/views/sgdesigner/servicedefine/modal/resourceselection.component.html")
        })
    ], ResourceTypeSelectionComponent);
    return ResourceTypeSelectionComponent;
}());



/***/ }),

/***/ "./src/packages/sgdesigner-wizard/views/sgdesigner/servicedefine/servicedefine.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-column\" style=\"flex: 1 1 auto;\">\r\n    <div class=\"col-xs-12 col-sm-12\" style=\"margin-top:4px;\">\r\n        <div class=\"panel-heading\">\r\n            <h6 class=\"panel-title\" style=\"font-size: 0.9rem;\">\r\n                资源信息\r\n                <button kendoButton style=\"margin-left: 10px\" (click)=\"selectResourceType()\" [disabled]=\"isExistResource\" [icon]=\"'folder'\">选择资源</button>\r\n                <button kendoButton (click)=\"clearServiceDefine()\"> <span class=\"k-icon k-i-delete\"></span>删除资源</button>\r\n            </h6>\r\n        </div>\r\n        <div class=\"card\" style=\"background-color: #f6f6f6;\">\r\n            <div class=\"card-block\">\r\n                <form class=\"k-form\" style=\"padding: 4px;\">\r\n                    <form class=\"k-form-inline\" style=\"padding: 2px;height: 36px;\">\r\n                        <div class=\"k-form-field\">\r\n                            <label style=\"width: 5%;min-width: 95px;\">资源类型</label>\r\n                            <input style=\"width: 15%;\" class=\"k-textbox\" readonly=\"readonly\" [(ngModel)]=\"apimetadata.service.resourceType\"\r\n                                name=\"resourceType\" />\r\n                            <label style=\"width: 5%;min-width: 95px;\">资源编号</label>\r\n                            <input style=\"width: 15%;\" class=\"k-textbox\" readonly=\"readonly\" [(ngModel)]=\"apimetadata.service.resourceCode\"\r\n                                name=\"resourceCode\" />\r\n                            <label style=\"width: 5%;min-width: 95px;\">资源名称</label>\r\n                            <input style=\"width: 15%;\" class=\"k-textbox\" readonly=\"readonly\" [(ngModel)]=\"apimetadata.service.resourceName\"\r\n                                name=\"resourceName\" />\r\n                            <button kendoButton style=\"margin-left: 6px;margin-right: 6px\" (click)=\"openResource()\" [icon]=\"'folder'\">打开资源</button>\r\n                        </div>\r\n                    </form>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-xs-12 col-sm-12 d-flex flex-column\" style=\"flex: 1 1 auto;margin-top: 4px;\">\r\n        <kendo-splitter class=\"d-flex \" style=\"flex: 1 1 auto;margin-top: 6px\" orientation=\"horizontal\">\r\n            <kendo-splitter-pane class=\"d-flex \" [collapsible]=\"true\" size=\"30%\" style=\"height: auto\">\r\n                <div class=\"col-xs-12 col-sm-12 d-flex flex-column\" style=\"margin-top: 10px; padding-right: 6px;padding-left: 6px;\">\r\n                    <div class=\"panel-heading\">\r\n                        <h6 class=\"panel-title\" style=\"font-size: 0.9rem;\">\r\n                            服务操作\r\n                        </h6>\r\n                    </div>\r\n                    <div class=\"card\" class=\"d-flex\" style=\"flex:1 1 auto;\">\r\n                        <div class=\"card-block d-flex\" style=\"flex:1 1 auto;\">\r\n                            <kendo-grid class=\"d-flex\" style=\"flex:1 1 auto;min-height: 150px\" [data]=\"apimetadata.service.operations\" [selectable]=\"{enabled: true, checkboxOnly: false,mode:'multiple' }\"\r\n                                [kendoGridSelectBy]=\"'id'\" (selectedKeysChange)=\"onSelectedServiceOpChange($event)\" [selectedKeys]=\"selectedServiceOpIds\"\r\n                                (cellClick)=\"getCurrentOperation($event)\" [rowSelected]=\"isRowSelected\">\r\n                                <ng-template kendoGridToolbarTemplate>\r\n                                    <button kendoGridAddCommand (click)=\"addServiceOperation()\">\r\n                                        <span class=\"k-icon k-i-plus\"></span>新增</button>\r\n                                    <button kendoGridAddCommand (click)=\"deleteServiceOpList()\">\r\n                                        <span class=\"k-icon k-i-delete\"></span>删除</button>\r\n                                </ng-template>\r\n                                <kendo-grid-checkbox-column width=\"40\">\r\n                                    <ng-template kendoGridHeaderTemplate>\r\n                                        <input class=\"k-checkbox\" id=\"selectAllCheckboxServiceOpId\" kendoGridSelectAllCheckbox [state]=\"selectAllServiceOpState\"\r\n                                            (selectAllChange)=\"onSelectAllServiceOpChange($event)\" />\r\n                                        <label class=\"k-checkbox-label\" for=\"selectAllCheckboxServiceOpId\"></label>\r\n                                    </ng-template>\r\n                                </kendo-grid-checkbox-column>\r\n                                <kendo-grid-column field=\"code\" title=\"操作编号\"></kendo-grid-column>\r\n                                <kendo-grid-column field=\"name\" title=\"操作名称\"></kendo-grid-column>\r\n                            </kendo-grid>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </kendo-splitter-pane>\r\n\r\n            <kendo-splitter-pane class=\"d-flex\" style=\"height: auto\">\r\n                <div class=\"col-xs-12 col-sm-12 d-flex flex-column\" style=\"margin-top: 10px;padding-right: 6px;padding-left: 6px;\">\r\n                    <div class=\"panel-heading\">\r\n                        <h6 class=\"panel-title\" style=\"font-size: 0.9rem;\">\r\n                            操作信息\r\n                        </h6>\r\n                    </div>\r\n                    <div class=\"card\" style=\"background-color: #f6f6f6;min-height: 165px\">\r\n                        <div class=\"card-block\" style=\"min-height: 165px\">\r\n                            <form class=\"k-form\" style=\"padding: 10px 6px 6px 6px;\">\r\n                                <form class=\"k-form-inline\" style=\"padding: 2px;height: 38px\">\r\n                                    <div class=\"k-form-field\">\r\n                                        <label style=\"width: 5%;min-width: 95px;\">操作编号</label>\r\n                                        <input style=\"width: 45%;\" class=\"k-textbox\" readonly=\"readonly\" [(ngModel)]=\"currentServiceOperation.code\" name=\"serviceOpCode\"\r\n                                        />\r\n                                        <label style=\"width: 5%;min-width: 95px;\">操作名称</label>\r\n                                        <input style=\"width: 45%;\" class=\"k-textbox\" readonly=\"readonly\" [(ngModel)]=\"currentServiceOperation.name\" name=\"serviceOpName\"\r\n                                        />\r\n                                    </div>\r\n                                </form>\r\n                                <form class=\"k-form-inline\" style=\"padding: 2px;height: 38px\">\r\n                                    <div class=\"k-form-field\">\r\n                                        <span style=\"width: 5%;min-width: 95px;\">事务类型</span>\r\n                                        <kendo-dropdownlist [data]=\"transfItems\" style=\"width: 45%;background-color: #ffff;\" textField=\"text\" valueField=\"value\"\r\n                                            [valuePrimitive]=\"true\" [(ngModel)]=\"currentServiceOperation.transactionOption\" name=\"serviceOpTransactionOption\">\r\n                                        </kendo-dropdownlist>\r\n                                        <span style=\"width: 5%;min-width: 95px;\">Http方法</span>\r\n                                        <kendo-dropdownlist [data]=\"httpmethods\" style=\"width: 45%;background-color: #ffff;\"  [(ngModel)]=\"currentServiceOperation.httpMethod\" name=\"serviceOpHttpMethod\">\r\n                                    </kendo-dropdownlist>\r\n                                    </div>\r\n                                </form>\r\n                                <form class=\"k-form-inline\" style=\"padding: 2px;height: 38px\">\r\n                                    <div class=\"k-form-field\">\r\n                                        <span style=\"width: 5%;min-width: 95px;\">请求路径</span>\r\n                                        <input style=\"width: 45%;\" class=\"k-textbox\" [(ngModel)]=\"currentServiceOperation.template\" (input)=\"modifyOpTemplate($event)\" name=\"serviceOpTemplate\"\r\n                                        />\r\n                                        <span style=\"width: 5%;min-width: 95px;\" readonly=\"readonly\">是否过时</span>\r\n                                        <kendo-dropdownlist [data]=\"status\" style=\"width: 45%;\" [(ngModel)]= \"currentServiceOperation.isDeprecated\" name=\"servciceOpIsDeprecated\">\r\n                                        </kendo-dropdownlist>\r\n                                    </div>\r\n                                </form>\r\n                                <form class=\"k-form-inline\" style=\"padding: 2px;height: 38px\">\r\n                                    <div class=\"k-form-field\">\r\n                                        <span style=\"width: 5%;min-width: 95px;\">URI</span>\r\n                                        <input style=\"width: 95%;\" readonly=\"readonly\" [value]=\"currentServiceOperationUrl\" type=\"text\" #inputTarget  class=\"k-textbox\"/>\r\n                                        <!-- <pre  style=\"width: 95%;user-select: text;height: 30px;\"  id=currentServiceOperationUrl  class=\"k-textbox\"  name=\"currentServiceOperationUrl\" >{{currentServiceOperationUrl}}</pre> -->\r\n                                        <button kendoButton style=\"margin-left: 6px;\"  [ngxClipboard]=\"inputTarget\" (click)=\"copyUri()\" >复制</button>\r\n                                    </div>\r\n                                </form>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"panel-heading\" style=\"margin-top:10px\">\r\n                        <h6 class=\"panel-title\" style=\"font-size: 0.9rem;\">\r\n                            参数列表\r\n                        </h6>\r\n                    </div>\r\n                    <div class=\"card\" class=\"d-flex flex-column\" style=\"flex:1 1 auto\">\r\n                        <div class=\"card-block\" class=\"d-flex flex-column\" style=\"flex:1 1 auto;\">\r\n                            <kendo-grid class=\"d-flex flex-column\" style=\"flex:1 1 auto;min-height: 120px\" \r\n                            [data]=\"currentServiceParamList\" [selectable]=\"{enabled: true, checkboxOnly: false,mode:'multiple' }\"\r\n                                [kendoGridSelectBy]=\"'id'\"  [selectedKeys]=\"selectedServiceParamIds\"\r\n                                [rowSelected]=\"isRowParamSelected\" (cellClick)=\"cellClickHandler($event)\">\r\n                                <kendo-grid-column field=\"code\" title=\"编号\"></kendo-grid-column>\r\n                                <kendo-grid-column field=\"name\" title=\"名称\"></kendo-grid-column>\r\n                                <kendo-grid-column field=\"modelName\" title=\"类型\"></kendo-grid-column>\r\n                                <kendo-grid-column field=\"isRequired\" title=\"是否必须\"></kendo-grid-column>\r\n                                <kendo-grid-column field=\"in\" title=\"位置\"></kendo-grid-column>\r\n                                <kendo-grid-column field=\"description\" title=\"描述\"></kendo-grid-column>\r\n                                <kendo-grid-column title=\"编辑\" width=\"80\">\r\n                                    <ng-template kendoGridCellTemplate let-dataItem>\r\n                                        <button kendoGridEditCommand [primary]=\"true\" (click)=\"editParamList(dataItem)\">编辑</button>\r\n                                    </ng-template>\r\n                                </kendo-grid-column>\r\n                            </kendo-grid>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </kendo-splitter-pane>\r\n        </kendo-splitter>\r\n    </div>\r\n</div>\r\n\r\n<div kendoDialogContainer></div>\r\n\r\n<!-- <app-select-metadata [triggerShowWindow]=\"showMetadataSelectDialog\" [typeName]=\"selectedMetadataType\" (currentBeMetadata)=\"getCurrentSelectMetadata($event)\"></app-select-metadata> -->"

/***/ }),

/***/ "./src/packages/sgdesigner-wizard/views/sgdesigner/servicedefine/servicedefine.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceDefineComponent", function() { return ServiceDefineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sgmetadata_sgMetadata__ = __webpack_require__("./src/packages/sgdesigner-wizard/views/sgdesigner/sgmetadata/sgMetadata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apiservice_apiservice__ = __webpack_require__("./src/packages/sgdesigner-wizard/views/sgdesigner/apiservice/apiservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_dialog__ = __webpack_require__("./node_modules/@progress/kendo-angular-dialog/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_resourceselection_component__ = __webpack_require__("./src/packages/sgdesigner-wizard/views/sgdesigner/servicedefine/modal/resourceselection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_grid_dist_es2015_utils__ = __webpack_require__("./node_modules/@progress/kendo-angular-grid/dist/es2015/utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__commonobject_global__ = __webpack_require__("./src/packages/sgdesigner-wizard/views/sgdesigner/commonobject/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modal_resourceopselection_component__ = __webpack_require__("./src/packages/sgdesigner-wizard/views/sgdesigner/servicedefine/modal/resourceopselection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modal_paramedit_component__ = __webpack_require__("./src/packages/sgdesigner-wizard/views/sgdesigner/servicedefine/modal/paramedit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__reference_metadata_metadata_ref__ = __webpack_require__("./reference/metadata/metadata.ref.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__reference_farris_farris_ui_ref__ = __webpack_require__("./reference/farris/farris.ui.ref.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_clipboard__ = __webpack_require__("./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var ServiceDefineComponent = (function () {
    function ServiceDefineComponent(apiService, dialogService, http, metadataService, modalService, resolver, injector, elementRef, _clipboardService) {
        var _this = this;
        this.apiService = apiService;
        this.dialogService = dialogService;
        this.http = http;
        this.metadataService = metadataService;
        this.modalService = modalService;
        this.resolver = resolver;
        this.injector = injector;
        this.elementRef = elementRef;
        this._clipboardService = _clipboardService;
        this.selectedServiceOpParamList = []; //选中的参数集合
        this.currentServiceParamList = []; //当前服务参数列表（在服务参数列表中展示）
        this.selectedServiceOpList = []; //选取的服务操作列表
        this.currentServiceOperation = {}; //当前选中的服务操作
        this.isRowSelected = function (e) { return _this.selectedServiceOpIds.indexOf(e.dataItem.id) >= 0; };
        this.isRowParamSelected = function (e) { return _this.selectedServiceParamIds.indexOf(e.dataItem.id) >= 0; };
        this.selectedServiceOpIds = [];
        this.selectAllServiceOpState = 'unchecked';
        this.selectedServiceParamIds = [];
        this.paramsPosition = ['Body', 'Header', 'Path', 'Query'];
        this.paramsPositionWithoutBody = ['Header', 'Path', 'Query'];
        this.httpmethods = ['GET', 'POST', 'DELETE', 'PATCH', 'PUT'];
        this.status = [true, false];
        this.transfItems = [
            { text: "RequiresNew", value: 0 },
            { text: "Required", value: 1 },
            { text: "NotSupport", value: 2 }
        ];
        this.showMetadataSelectDialog = false;
        this.isExistResource = false;
        this.dialogService.open;
    }
    ServiceDefineComponent.prototype.ngOnInit = function () {
        if (!this.apimetadata.service) {
            this.apimetadata.service = {};
            this.apimetadata.service.operations = [];
        }
        if (!this.apimetadata.service.id) {
            this.apimetadata.service.id = this.apiService.getGuid();
        }
        if (!this.apimetadata.service.operations) {
            this.apimetadata.service.operations = [];
        }
        if (this.apimetadata.service.resourceId) {
            this.isExistResource = true;
        }
        this.currentServiceOperation = this.apimetadata.service.operations.length > 0 ? this.apimetadata.service.operations[0] : {};
        if (this.apimetadata.service.operations.length > 0) {
            this.currentServiceParamList = this.apimetadata.service.operations[0].parameters;
            this.selectedServiceOpIds = [];
            this.selectedServiceOpIds.push(this.apimetadata.service.operations[0].id);
            if (this.apimetadata.service.operations.length == 1) {
                this.selectAllServiceOpState = 'checked';
            }
            if (this.apimetadata.service.operations.length > 1) {
                this.selectAllServiceOpState = 'indeterminate';
            }
            this.selectedServiceOpList = [];
            this.selectedServiceOpList.push(this.apimetadata.service.operations[0]);
        }
        this.getUri(this.currentServiceOperation);
    };
    //选择资源类型
    ServiceDefineComponent.prototype.selectResourceType = function () {
        var _this = this;
        if (!Object(__WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_grid_dist_es2015_utils__["isNullOrEmptyString"])(this.apimetadata.service.resourceId) && !Object(__WEBPACK_IMPORTED_MODULE_5_util__["isNullOrUndefined"])(this.apimetadata.service.resourceId)) {
            alert("资源已存在，请先删除资源或直接在服务操作中增加资源。");
            return;
        }
        var dialogRef = this.dialogService.open({
            title: '选择资源类型',
            content: __WEBPACK_IMPORTED_MODULE_4__modal_resourceselection_component__["ResourceTypeSelectionComponent"],
            actions: [
                { text: '关闭' },
                { text: '确认', primary: true }
            ],
            width: 400
        });
        var resIntance = dialogRef.content.instance;
        resIntance.resourceTypeList = this.resourceTypeList;
        var actionEmitter = dialogRef.dialog.instance.action;
        dialogRef.dialog.instance.action = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        var sub = dialogRef.dialog.instance.action.subscribe(function (action) {
            var selectedResourceType = dialogRef.content.instance.selectedResourceType;
            if (action.text == "确认") {
                if (!Object(__WEBPACK_IMPORTED_MODULE_5_util__["isNullOrUndefined"])(selectedResourceType) || !Object(__WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_grid_dist_es2015_utils__["isNullOrEmptyString"])(selectedResourceType)) {
                    actionEmitter.emit(action);
                }
                else {
                    alert("请选择资源类型。");
                }
            }
            else {
                actionEmitter.emit(action);
            }
        });
        dialogRef.result.subscribe(function (dialogResult) {
            sub.unsubscribe();
            if (!(dialogResult instanceof __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_dialog__["DialogCloseResult"])) {
                var actionName = dialogResult.text;
                if (actionName == "确认") {
                    _this.selectedResourceType = dialogRef.content.instance.selectedResourceType;
                    _this.openMetadataSelect();
                }
            }
        });
    };
    ServiceDefineComponent.prototype.openMetadataSelect = function () {
        var _this = this;
        var compFactory = this.resolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_11__reference_metadata_metadata_ref__["SelectMetadataComponent"]);
        var compRef = compFactory.create(this.injector);
        compRef.instance.metadataPath = this.metadataDto.relativePath;
        if (this.selectedResourceType == "VO") {
            compRef.instance.typeName = "GSPViewModel";
        }
        else {
            alert("该类型暂不支持。");
            return;
        }
        compRef.instance.selectedMetadata.subscribe(function ($event) {
            var selectedMetadata = $event;
            _this.getSelectedMetadataMethods(selectedMetadata);
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
    // 获取当前选择元数据的方法列表
    ServiceDefineComponent.prototype.getSelectedMetadataMethods = function (selectedMetadata) {
        if (!selectedMetadata || !selectedMetadata.metadata.id) {
            alert("请选择资源元数据。");
            return;
        }
        var relativePath = selectedMetadata.metadata.relativePath;
        var fileName = selectedMetadata.metadata.fileName;
        var combinationResourceInfo = encodeURIComponent(fileName + "#" + relativePath);
        this.addOperations(this.selectedResourceType, combinationResourceInfo);
    };
    //增加操作，直接资源中增加或者操作列表中追加
    ServiceDefineComponent.prototype.addOperations = function (resourceType, combinationResourceInfo) {
        var _this = this;
        debugger;
        var url = __WEBPACK_IMPORTED_MODULE_8__commonobject_global__["host"] + "/api/dev/main/v1.0/sg/resources/operations/?resourceType=" + resourceType + "&resourceId=" + combinationResourceInfo;
        this.http.get(url).toPromise().then(function (response) {
            if (response.status == 200) {
                var summaryList = response.json();
                var dialogRef_1 = _this.dialogService.open({
                    title: '选择资源操作',
                    content: __WEBPACK_IMPORTED_MODULE_9__modal_resourceopselection_component__["ResourceOpSelectionComponent"],
                    actions: [
                        { text: '关闭' },
                        { text: '确认', primary: true }
                    ],
                    width: 550
                });
                var resOpSelectionInstance = dialogRef_1.content.instance;
                resOpSelectionInstance.opSummaryList = summaryList;
                resOpSelectionInstance.apimetadata = _this.apimetadata;
                var actionEmitter_1 = dialogRef_1.dialog.instance.action;
                dialogRef_1.dialog.instance.action = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
                var sub_1 = dialogRef_1.dialog.instance.action.subscribe(function (action) {
                    if (action.text == "确认") {
                        var selectedOpSummaryList_1 = dialogRef_1.content.instance.selectedOpSummaryList;
                        if (selectedOpSummaryList_1.length <= 0) {
                            alert("请选择资源操作。");
                            return;
                        }
                        var isExistSameOperation = false;
                        if (_this.apimetadata.service && _this.apimetadata.service.operations.length > 0) {
                            var _loop_1 = function (i) {
                                if (isExistSameOperation == false) {
                                    var tempIndex = _this.apimetadata.service.operations.findIndex(function (vaue) { return vaue.resourceOpId == selectedOpSummaryList_1[i].id; });
                                    if (tempIndex != (-1)) {
                                        alert("服务操作" + _this.apimetadata.service.operations[tempIndex].code + "已存在。");
                                        isExistSameOperation = true;
                                        return { value: void 0 };
                                    }
                                }
                            };
                            for (var i = 0; i < selectedOpSummaryList_1.length; i++) {
                                var state_1 = _loop_1(i);
                                if (typeof state_1 === "object")
                                    return state_1.value;
                            }
                        }
                        if (isExistSameOperation == false) {
                            actionEmitter_1.emit(action);
                        }
                    }
                    else if (action.text == "关闭") {
                        actionEmitter_1.emit(action);
                    }
                });
                dialogRef_1.result.subscribe(function (dialogResult) {
                    sub_1.unsubscribe();
                    if (!(dialogResult instanceof __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_dialog__["DialogCloseResult"])) {
                        var actionName = dialogResult.text;
                        if (actionName == "确认") {
                            _this.getResourceInfo(resourceType, combinationResourceInfo);
                            _this.opSelectionConfirmHandler(dialogRef_1.content.instance.selectedOpSummaryList, resourceType, combinationResourceInfo);
                        }
                    }
                });
            }
        });
    };
    //获取选择的资源操作的信息
    ServiceDefineComponent.prototype.getResourceInfo = function (resourceType, combinationResourceInfo) {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_8__commonobject_global__["host"] + "/api/dev/main/v1.0/sg/resources/?resourceType=" + this.selectedResourceType + "&resourceId=" + combinationResourceInfo;
        this.http.get(url).toPromise().then(function (response) {
            if (response.status == 200) {
                var summaryInfo = response.json();
                if (!_this.apimetadata.service) {
                    _this.apimetadata.service = {};
                }
                _this.apimetadata.service.resourceType = resourceType;
                _this.apimetadata.service.resourceId = summaryInfo.id;
                _this.apimetadata.service.resourceCode = summaryInfo.code;
                _this.apimetadata.service.resourceName = summaryInfo.name;
                _this.apimetadata.service.resourcePath = decodeURIComponent(combinationResourceInfo).substring(decodeURIComponent(combinationResourceInfo).lastIndexOf('#') + 1);
            }
        });
    };
    //获取选择后的操作
    ServiceDefineComponent.prototype.opSelectionConfirmHandler = function (selectedSummaryList, resourceType, combinationResourceInfo) {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_8__commonobject_global__["host"] + "/api/dev/main/v1.0/sg/resources/operations?resourceType=" + resourceType + "&resourceId=" + combinationResourceInfo;
        var i = 0;
        var opIdListStr = "";
        selectedSummaryList.forEach(function (element) {
            if (i == 0) {
                opIdListStr = encodeURIComponent(element.id);
                i++;
            }
            else {
                opIdListStr = opIdListStr + "," + encodeURIComponent(element.id);
                i++;
            }
        });
        if (opIdListStr != "") {
            url = url + "&opIdListstr=" + opIdListStr;
        }
        this.http.get(url).toPromise().then(function (response) {
            if (response.status == 200) {
                var operations = response.json();
                _this.updateResDefineList(operations);
                _this.getServiceModelParam(operations);
                _this.isExistResource = true;
            }
        });
    };
    //更新操作列表
    ServiceDefineComponent.prototype.updateResDefineList = function (operations) {
        var _this = this;
        if (!this.apimetadata.service || !this.apimetadata.service.operations) {
            this.apimetadata.service.operations = [];
        }
        operations.forEach(function (element) {
            _this.apimetadata.service.operations.push(element);
        });
        var length = this.apimetadata.service.operations.length;
        this.currentServiceOperation = this.apimetadata.service.operations[length - 1];
        this.getUri(this.currentServiceOperation);
        this.currentServiceParamList = this.currentServiceOperation.parameters;
        this.resetServiceSelection(this.currentServiceOperation.id);
        this.selectedServiceOpList = [];
        this.selectedServiceOpList.push(this.apimetadata.service.operations[length - 1]);
        if (this.selectedServiceOpIds.length < this.apimetadata.service.operations.length) {
            this.selectAllServiceOpState = 'indeterminate';
        }
        else if (this.selectedServiceOpIds.length == this.apimetadata.service.operations.length) {
            this.selectAllServiceOpState = 'checked';
        }
    };
    //根据资源定义自动添加所依赖的服务模型，基本类型不含其中
    ServiceDefineComponent.prototype.getServiceModelParam = function (operations) {
        var _this = this;
        operations.forEach(function (element) {
            element.parameters.forEach(function (element1) {
                if (!element1.isBasicType) {
                    if (!_this.apimetadata.models) {
                        _this.apimetadata.models = [];
                    }
                    if (_this.apimetadata.models.length <= 0) {
                        var temmModel = {};
                        temmModel.id = _this.apiService.getGuid();
                        temmModel.code = element1.modelName;
                        temmModel.name = element1.modelName;
                        temmModel.modelId = element1.modelId;
                        if (_this.selectedResourceType == "VO") {
                            if (temmModel.modelId.indexOf("#") != (-1)) {
                                temmModel.modelType = __WEBPACK_IMPORTED_MODULE_1__sgmetadata_sgMetadata__["SgModelType"].Dto;
                            }
                            else {
                                temmModel.modelType = __WEBPACK_IMPORTED_MODULE_1__sgmetadata_sgMetadata__["SgModelType"].VO;
                            }
                        }
                        _this.apimetadata.models.push(temmModel);
                    }
                    else {
                        var tempIndex = _this.apimetadata.models.findIndex(function (value) { return value.modelId == element1.modelId; });
                        if (tempIndex == (-1)) {
                            var temmModel = {};
                            temmModel.id = _this.apiService.getGuid();
                            temmModel.code = element1.modelName;
                            temmModel.name = element1.modelName;
                            temmModel.modelId = element1.modelId;
                            if (_this.selectedResourceType == "VO") {
                                if (temmModel.modelId.indexOf("#") != (-1)) {
                                    temmModel.modelType = __WEBPACK_IMPORTED_MODULE_1__sgmetadata_sgMetadata__["SgModelType"].Dto;
                                }
                                else {
                                    temmModel.modelType = __WEBPACK_IMPORTED_MODULE_1__sgmetadata_sgMetadata__["SgModelType"].VO;
                                }
                            }
                            _this.apimetadata.models.push(temmModel);
                        }
                    }
                }
            });
        });
    };
    //编辑参数信息
    ServiceDefineComponent.prototype.editParamList = function (param) {
        var _this = this;
        this.resetServiceParamSelection(param);
        var dialogRef = this.dialogService.open({
            title: '选择资源操作',
            content: __WEBPACK_IMPORTED_MODULE_10__modal_paramedit_component__["ParamEditDialogComponent"],
            actions: [
                { text: '取消' },
                { text: '确认', primary: true }
            ],
            width: 400
        });
        var instance = dialogRef.content.instance;
        instance.serviceParameter = Object.assign({}, param);
        if (this.currentServiceOperation.httpMethod == 'GET' || this.currentServiceOperation.httpMethod == "DELETE") {
            instance.paramsPosition = this.paramsPositionWithoutBody;
        }
        else {
            instance.paramsPosition = this.paramsPosition;
        }
        var actionEmitter = dialogRef.dialog.instance.action;
        dialogRef.dialog.instance.action = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        var sub = dialogRef.dialog.instance.action.subscribe(function (action) {
            if (action.text == "确认") {
                var modifiedParam_1 = dialogRef.content.instance.serviceParameter;
                var tempIndex = _this.currentServiceParamList.findIndex(function (value) { return value.id != modifiedParam_1.id && value.code == modifiedParam_1.code; });
                if (tempIndex != (-1)) {
                    alert("参数编号" + modifiedParam_1.code + "已存在。");
                    return;
                }
                actionEmitter.emit(action);
            }
            else if (action.text == "取消") {
                actionEmitter.emit(action);
            }
        });
        dialogRef.result.subscribe(function (dialogResult) {
            sub.unsubscribe();
            if (!(dialogResult instanceof __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_dialog__["DialogCloseResult"])) {
                var actionName = dialogResult.text;
                if (actionName == "确认") {
                    var modifiedParam = dialogRef.content.instance.serviceParameter;
                    _this.apiService.replaceSpecifiedElementById(_this.currentServiceOperation.parameters, modifiedParam);
                }
            }
        });
    };
    //增加服务操作
    ServiceDefineComponent.prototype.addServiceOperation = function () {
        if (Object(__WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_grid_dist_es2015_utils__["isNullOrEmptyString"])(this.apimetadata.service.resourceId) || Object(__WEBPACK_IMPORTED_MODULE_5_util__["isNullOrUndefined"])(this.apimetadata.service.resourceId)) {
            alert("请先选择资源。");
            return;
        }
        var relativePath = this.apimetadata.service.resourcePath;
        var fileName = '';
        if (this.apimetadata.service.resourceType == 'VO') {
            fileName = this.apimetadata.service.resourceCode + '.vo';
        }
        else {
            alert('不支持的资源类型。');
            return;
        }
        var combinationResourceInfo = encodeURIComponent(fileName + "#" + relativePath);
        this.addOperations(this.apimetadata.service.resourceType, combinationResourceInfo);
    };
    //重置服务操作参数选择项
    ServiceDefineComponent.prototype.resetServiceParamSelection = function (dataTtem) {
        this.selectedServiceParamIds = [];
        this.selectedServiceParamIds.push(dataTtem.id);
    };
    //重置服务操作选择项
    ServiceDefineComponent.prototype.resetServiceSelection = function (input) {
        this.selectedServiceOpIds = [];
        this.selectedServiceOpIds.push(input);
    };
    //清空服务定义
    ServiceDefineComponent.prototype.clearServiceDefine = function () {
        this.apimetadata.service = {};
        this.apimetadata.service.operations = [];
        this.apimetadata.models = [];
        this.currentServiceOperation = {};
        this.currentServiceParamList = {};
        this.selectAllServiceOpState = "unchecked";
        this.currentServiceOperation.httpMethod = null;
        this.currentServiceOperation.transactionOption = null;
        this.isExistResource = false;
        this.currentServiceOperationUrl = '';
    };
    //删除选中的服务操作
    ServiceDefineComponent.prototype.deleteServiceOpList = function () {
        var _this = this;
        if (!this.selectedServiceOpList || this.selectedServiceOpList.length <= 0) {
            alert("请选择需要删除的操作。");
            return;
        }
        if (this.selectedServiceOpList && this.selectedServiceOpList.length > 0) {
            this.selectedServiceOpList.forEach(function (element) {
                _this.apiService.deleteSpecifiedElement(_this.apimetadata.service.operations, element);
                _this.apiService.deleteSpecifiedElement(_this.selectedServiceOpIds, element.id);
            });
        }
        this.selectedServiceOpList = [];
        this.currentServiceParamList = [];
        if (this.apimetadata.service.operations && this.apimetadata.service.operations.length > 0) {
            this.apimetadata.service.operations[0].parameters.forEach(function (element) {
                _this.currentServiceParamList.push(element);
            });
            this.currentServiceOperation = this.apimetadata.service.operations[0];
            this.getUri(this.currentServiceOperation);
        }
        else {
            this.currentServiceParamList = [];
            this.currentServiceOperation = {};
            this.currentServiceOperationUrl = '';
        }
        this.selectAllServiceOpState = 'unchecked';
    };
    //修改服务参数
    ServiceDefineComponent.prototype.modifyParamHandler = function (param) {
        //id不存在表示新增
        if (!param.id) {
            if (!this.currentServiceOperation.parameters || this.currentServiceOperation.parameters.length <= 0) {
                this.currentServiceOperation.parameters = [];
            }
            param.id = this.apiService.getGuid();
            this.currentServiceOperation.parameters.push(param);
            this.currentServiceParamList = this.currentServiceOperation.parameters;
        }
        else {
            this.currentServiceOpParam = Object.assign({}, param);
            this.apiService.replaceSpecifiedElementById(this.currentServiceOperation.parameters, this.currentServiceOpParam);
        }
    };
    //获取当前选中的服务操作，同时刷新当前选中操作的参数列表
    ServiceDefineComponent.prototype.getCurrentOperation = function (_a) {
        var dataItem = _a.dataItem;
        //this.resetServiceSelection(dataItem);
        var serviceOp = dataItem;
        this.currentServiceOperation = {};
        this.currentServiceOperation = serviceOp;
        this.currentServiceParamList = [];
        this.currentServiceParamList = serviceOp.parameters;
        this.selectedServiceParamIds = [];
        this.getUri(this.currentServiceOperation);
    };
    //获取服务操作选择项事件
    ServiceDefineComponent.prototype.onSelectedServiceOpChange = function (e) {
        var _this = this;
        this.selectedServiceOpList = [];
        var len = this.selectedServiceOpIds.length;
        if (len > 0) {
            this.selectedServiceOpIds.forEach(function (id) {
                if (_this.apimetadata.service && _this.apimetadata.service.operations && _this.apimetadata.service.operations.length > 0) {
                    var tempIndex = _this.apimetadata.service.operations.findIndex(function (value) { return value.id == id; });
                    if (tempIndex != (-1)) {
                        _this.selectedServiceOpList.push(_this.apimetadata.service.operations[tempIndex]);
                    }
                }
            });
        }
        if (len === 0) {
            this.selectAllServiceOpState = 'unchecked';
        }
        else if (len > 0 && len < this.apimetadata.service.operations.length) {
            this.selectAllServiceOpState = 'indeterminate';
        }
        else {
            this.selectAllServiceOpState = 'checked';
        }
    };
    //服务操作全选框事件
    ServiceDefineComponent.prototype.onSelectAllServiceOpChange = function (checkedState) {
        if (checkedState === 'checked') {
            this.selectedServiceOpIds = this.apimetadata.service.operations.map(function (item) { return item.id; });
            this.selectAllServiceOpState = 'checked';
        }
        else {
            this.selectedServiceOpIds = [];
            this.selectAllServiceOpState = 'unchecked';
        }
    };
    //服务参数cellClick
    ServiceDefineComponent.prototype.cellClickHandler = function (_a) {
        var dataItem = _a.dataItem;
        this.resetServiceParamSelection(dataItem);
    };
    ServiceDefineComponent.prototype.getUri = function (operation) {
        if (operation && !Object(__WEBPACK_IMPORTED_MODULE_5_util__["isNullOrUndefined"])(operation.id)) {
            this.getOperaionUri(operation);
        }
    };
    ServiceDefineComponent.prototype.modifyOpTemplate = function () {
        this.getOperaionUri(this.currentServiceOperation);
    };
    ServiceDefineComponent.prototype.getOperaionUri = function (operation) {
        var appName = this.apimetadata.criticalApplication;
        var unitName = this.apimetadata.serviceUnit;
        var routeUrlName = this.apimetadata.routeUrl;
        var version = this.apimetadata.version;
        if (Object(__WEBPACK_IMPORTED_MODULE_5_util__["isNullOrUndefined"])(appName) || Object(__WEBPACK_IMPORTED_MODULE_5_util__["isNullOrUndefined"])(unitName) || Object(__WEBPACK_IMPORTED_MODULE_5_util__["isNullOrUndefined"])(routeUrlName) || Object(__WEBPACK_IMPORTED_MODULE_5_util__["isNullOrUndefined"])(version)) {
            return '';
        }
        var baseRoute = "api/" + appName + "/" + unitName + "/v" + version + "/" + routeUrlName;
        this.currentServiceOperationUrl = baseRoute;
        if (operation) {
            if (operation.template != '无' && !Object(__WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_grid_dist_es2015_utils__["isNullOrEmptyString"])(operation.template) && !Object(__WEBPACK_IMPORTED_MODULE_5_util__["isNullOrUndefined"])(operation.template))
                if (operation.template.startsWith('/')) {
                    this.currentServiceOperationUrl = this.currentServiceOperationUrl + ("" + operation.template);
                }
                else {
                    this.currentServiceOperationUrl = this.currentServiceOperationUrl + ("/" + operation.template);
                }
        }
        return this.currentServiceOperationUrl;
    };
    //复制Uri
    ServiceDefineComponent.prototype.copyUri = function () {
        this._clipboardService.copyFromContent(this.currentServiceOperationUrl);
        alert("复制成功！");
    };
    //打开资源
    ServiceDefineComponent.prototype.openResource = function () {
        alert("暂未开发，后续开发实现直接链接到对应资源的UI界面");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__sgmetadata_sgMetadata__["SgMetadata"])
    ], ServiceDefineComponent.prototype, "apimetadata", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ServiceDefineComponent.prototype, "resourceTypeList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_11__reference_metadata_metadata_ref__["MetadataDto"])
    ], ServiceDefineComponent.prototype, "metadataDto", void 0);
    ServiceDefineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-servicedefine',
            template: __webpack_require__("./src/packages/sgdesigner-wizard/views/sgdesigner/servicedefine/servicedefine.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__apiservice_apiservice__["ApiService"], __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_dialog__["DialogService"], __WEBPACK_IMPORTED_MODULE_7__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_11__reference_metadata_metadata_ref__["GSPMetadataService"],
            __WEBPACK_IMPORTED_MODULE_12__reference_farris_farris_ui_ref__["BsModalService"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_13_ngx_clipboard__["ClipboardService"]])
    ], ServiceDefineComponent);
    return ServiceDefineComponent;
}());



/***/ }),

/***/ "./src/packages/sgdesigner-wizard/views/sgdesigner/sg.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n}\r\n\r\n#bemain .k-content {\r\n    padding: 0 !important;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n}\r\n\r\n.calc-rules.createNav {\r\n    background: #e8edf2;\r\n    height: 40px;\r\n}\r\n\r\n.calc-rules.createNav .stepTitle {\r\n    padding: 0px 10px;\r\n    color: #666666;\r\n    line-height: 40px;\r\n    cursor: pointer;\r\n    font-size: 0.875rem;\r\n}\r\n\r\n.calc-rules.createNav .stepTitle.active {\r\n    color: #FFFFFF;\r\n    background-color: #0072c6 !important;\r\n}\r\n\r\n.calc-rules.createNav .stepTitle:not(:first-child).active {\r\n    margin-left: -17px;\r\n    padding-left: 25px;\r\n}\r\n\r\n.calc-rules.createNav .stepTitle.disable {\r\n    color: #cdcdcf;\r\n}\r\n\r\n.calc-rules .triangle_border_right {\r\n    width: 0;\r\n    height: 0;\r\n    border-width: 20px 0 20px 18px;\r\n    border-style: solid;\r\n    border-color: transparent transparent transparent #cccccc;\r\n    position: relative;\r\n}\r\n\r\n.calc-rules .triangle_border_right span {\r\n    display: block;\r\n    width: 0;\r\n    height: 0;\r\n    border-width: 20px 0px 20px 18px;\r\n    border-style: solid;\r\n    border-color: transparent transparent transparent #e8edf2;\r\n    position: absolute;\r\n    top: -20px;\r\n    left: -20px;\r\n}\r\n\r\n.calc-rules .triangle_border_right.active {\r\n    width: 0;\r\n    height: 0;\r\n    border-width: 20px 0 20px 20px;\r\n    border-color: transparent transparent transparent #e8edf2;\r\n}\r\n\r\n.calc-rules .triangle_border_right.active span {\r\n    border-width: 20px 0 20px 20px;\r\n    border-color: transparent transparent transparent #0072c6;\r\n}\r\n\r\n.api-flex {\r\n    display: -webkit-box !important;\r\n    display: -ms-flexbox !important;\r\n    display: flex !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/sgdesigner-wizard/views/sgdesigner/sg.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-column\" style=\"flex:1 1 auto;\">\r\n    <div class=\"border-bottom\" style=\"background: #f3f3f3;\">\r\n        <button kendoButton [look]=\"'bare'\" (click)=\"saveApiMetadata()\"><span class=\"k-icon k-i-save\"></span>  保存</button>\r\n        <button kendoButton [look]=\"'bare'\" (click)=\"getApiDocument()\"><span class=\"k-icon k-i-hyperlink-open-sm\"></span>  发布新版本</button>\r\n        <button kendoButton [look]=\"'bare'\" (click)=\"getApiDocument()\" ><span class=\"k-icon k-i-dictionary-add\"></span>  Rest开发文档</button>\r\n        <button kendoButton [look]=\"'bare'\" (click)=\"getApiDocument()\"><span class=\"k-icon k-i-launch\" style=\"margin-right: 2px\"></span>  导出API文档</button>\r\n    </div>\r\n    <div id=\"bemain\" class=\"d-flex flex-column\" style=\" flex: 1 1 auto; display: flex; flex-direction: column;\">\r\n        <kendo-tabstrip class=\"d-flex\" style=\"flex: 1;\">\r\n            <kendo-tabstrip-tab [title]=\"'基本信息'\" [selected]=\"true\" class=\"d-flex flex-column\" style=\" flex: 1 1 auto; display: flex;\"><span class=\"k-icon k-i-launch\" style=\"margin-right: 2px\"></span>\r\n                <ng-template kendoTabContent  class=\"d-flex flex-column\" style=\" flex: 1 1 auto; display: flex;\">\r\n                    <app-apibaseinfo class=\"d-flex flex-column\" style=\" flex: 1 1 auto; display: flex; \" [(apimetadata)]=\"apimetadata\"></app-apibaseinfo>\r\n                </ng-template>\r\n            </kendo-tabstrip-tab>\r\n            <kendo-tabstrip-tab class=\"d-flex flex-column\" style=\"flex:1 1 auto;\" [title]=\"'服务定义'\">\r\n                <ng-template kendoTabContent>\r\n                    <app-servicedefine class=\"d-flex flex-column\" style=\"flex:1 1 auto;\" [metadataDto]=\"metadataDto\" [(resourceTypeList)]=\"resourceTypeList\" [(apimetadata)]=\"apimetadata\"></app-servicedefine>\r\n                </ng-template>\r\n            </kendo-tabstrip-tab>\r\n        </kendo-tabstrip>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/packages/sgdesigner-wizard/views/sgdesigner/sg.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SgDesignerComponent", function() { return SgDesignerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sgmetadata_sgMetadata__ = __webpack_require__("./src/packages/sgdesigner-wizard/views/sgdesigner/sgmetadata/sgMetadata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gsp_lcm_metadata_selector__ = __webpack_require__("./node_modules/@gsp-lcm/metadata-selector/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gsp_lcm_metadata_selector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__gsp_lcm_metadata_selector__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__commonobject_global__ = __webpack_require__("./src/packages/sgdesigner-wizard/views/sgdesigner/commonobject/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_grid_dist_es2015_utils__ = __webpack_require__("./node_modules/@progress/kendo-angular-grid/dist/es2015/utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reference_farris_farris_idedevkit_ref__ = __webpack_require__("./reference/farris/farris.idedevkit.ref.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__apiservice_apiservice__ = __webpack_require__("./src/packages/sgdesigner-wizard/views/sgdesigner/apiservice/apiservice.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SgDesignerComponent = (function () {
    function SgDesignerComponent(http, metadataService, cache, apiService) {
        this.http = http;
        this.metadataService = metadataService;
        this.cache = cache;
        this.apiService = apiService;
        this.resourceTypeList = []; //资源类型列表
    }
    Object.defineProperty(SgDesignerComponent.prototype, "metadataUri", {
        set: function (metadataUri) {
            var _this = this;
            this._metadataUri = metadataUri;
            // todo: 通过元数据服务获取元数据内容
            var fileName = metadataUri.substring(metadataUri.lastIndexOf('/') + 1);
            var filePath = metadataUri.substring(1, metadataUri.lastIndexOf('/'));
            this.metadataService.LoadMetadata(fileName, filePath).subscribe(function (value) {
                _this.metadataContent = value;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SgDesignerComponent.prototype, "metadataContent", {
        set: function (metadataContent) {
            this.loadSgMetadata(metadataContent);
        },
        enumerable: true,
        configurable: true
    });
    SgDesignerComponent.prototype.ngOnInit = function () {
        this.apimetadata = new __WEBPACK_IMPORTED_MODULE_2__sgmetadata_sgMetadata__["SgMetadata"]();
        this.getResourceTypeList();
    };
    //获取资源类型列表
    SgDesignerComponent.prototype.getResourceTypeList = function () {
        var _this = this;
        if (this.resourceTypeList.length > 0) {
            return;
        }
        if (this.resourceTypeList.length == 0) {
            var url = __WEBPACK_IMPORTED_MODULE_5__commonobject_global__["host"] + "/api/dev/main/v1.0/sg/resource-types";
            this.http.get(url).toPromise().then(function (response) {
                if (response.json()) {
                    _this.resourceTypeList = response.json();
                }
            });
        }
    };
    //加载SG元数据
    SgDesignerComponent.prototype.loadSgMetadata = function (dto) {
        this.metadataDto = dto;
        if (dto.content && dto.content != "") {
            var jsonObj = JSON.parse(dto.content);
            this.apiService.GetCamelParse(jsonObj);
            this.apimetadata = jsonObj;
            if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.apimetadata.code)) {
                this.apimetadata.code = dto.code;
            }
            if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.apimetadata.name)) {
                this.apimetadata.name = dto.name;
            }
            if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.apimetadata.version)) {
                this.apimetadata.version = '1.0';
            }
            if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.apimetadata.bizObject)) {
                this.apimetadata.bizObject = dto.bizobjectID;
            }
        }
    };
    //保存Api元数据
    SgDesignerComponent.prototype.saveApiMetadata = function () {
        var result = this.httpMethodNullCheck(this.apimetadata);
        if (result.key == "false") {
            alert(result.value);
            return;
        }
        var pathCheck = this.pathCheck(this.apimetadata);
        if (pathCheck.key == "false") {
            alert(pathCheck.value);
            return;
        }
        var stringcontent = JSON.stringify(this.apimetadata);
        this.metadataDto.content = stringcontent;
        var sessionId = this.cache.get('sessionId');
        this.metadataService.SaveMetadata(this.metadataDto, sessionId).subscribe(function (response) {
            if (response.status == 200) {
                alert("保存成功！");
            }
            else {
                alert("保存失败!");
            }
        });
        // let content = {
        //   "ID": this.metadataDto.id,
        //   "NameSpace": this.metadataDto.nameSpace,
        //   "Name": this.metadataDto.name,
        //   "Type": this.metadataDto.type,
        //   "BizobjectID": this.metadataDto.bizobjectID,
        //   "RelativePath": this.metadataDto.relativePath,
        //   "ExtendProperty": this.metadataDto.extendProperty,
        //   "Content": this.metadataDto.content
        // }
        // let headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // headers.append('Authorization', 'as');
        // headers.append('Access-Control-Allow-Origin', '*');
        // const options = new RequestOptions({
        //   headers: headers
        // });
        // let url = host + "/api/dev/main/v1.0/metadatas";
        // this.http.put(url, content, options).toPromise().then(response => {
        //   if (response.status == 200) {
        //     alert("保存成功！");
        //   }
        //   else {
        //     alert("保存失败！");
        //   }
        // })
    };
    //获取REST开发文档
    SgDesignerComponent.prototype.getApiDocument = function () {
        alert('暂未开发。');
        // let relativePath=this.metadataDto.relativePath;
        // let metadataId=this.metadataDto.id;
        // let url= host + "/api/dev/main/v1.0/sg/apidocuments?relativePath="+relativePath+"&metadataId="+metadataId+"&serverIp="+host;
        // this.http.get(url).toPromise().then(response=>{
        //    if(response.status==200){
        //      alert("aaa");
        //    }
        //    else{
        //     alert("bbb");
        //    }
        // })
    };
    SgDesignerComponent.prototype.httpMethodNullCheck = function (metadata) {
        var validResultDict = {};
        var tempStatus = false;
        if (this.apimetadata.service && this.apimetadata.service.operations && this.apimetadata.service.operations.length > 0) {
            this.apimetadata.service.operations.forEach(function (operation) {
                if (tempStatus == false) {
                    if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(operation.httpMethod) || Object(__WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_grid_dist_es2015_utils__["isNullOrEmptyString"])(operation.httpMethod)) {
                        validResultDict.key = "false";
                        validResultDict.value = "服务操作" + operation.code + "的HttpMethod不能为空。";
                        tempStatus = true;
                    }
                }
            });
        }
        if (tempStatus == false) {
            validResultDict.key = "true";
            validResultDict.value = "";
        }
        return validResultDict;
    };
    SgDesignerComponent.prototype.pathCheck = function (metadata) {
        var validResultDict = {};
        var tempStatus = false;
        if (this.apimetadata.service && this.apimetadata.service.operations && this.apimetadata.service.operations.length > 0) {
            this.apimetadata.service.operations.forEach(function (operation) {
                if (tempStatus == false) {
                    if (operation && operation.parameters && operation.parameters.length > 0) {
                        operation.parameters.forEach(function (param) {
                            if (param.in == "Path") {
                                var index = operation.template.indexOf("{" + param.code + "}");
                                if (index == -1) {
                                    validResultDict.key = "false";
                                    validResultDict.value = "请在服务操作" + operation.code + "的请求路径中添加{" + param.code + "}请求参数";
                                    tempStatus = true;
                                }
                            }
                        });
                    }
                }
            });
        }
        if (tempStatus == false) {
            validResultDict.key = "true";
            validResultDict.value = "";
        }
        return validResultDict;
    };
    SgDesignerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-api',
            template: __webpack_require__("./src/packages/sgdesigner-wizard/views/sgdesigner/sg.component.html"),
            styles: [__webpack_require__("./src/packages/sgdesigner-wizard/views/sgdesigner/sg.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_3__gsp_lcm_metadata_selector__["GSPMetadataService"], __WEBPACK_IMPORTED_MODULE_7__reference_farris_farris_idedevkit_ref__["CacheService"], __WEBPACK_IMPORTED_MODULE_8__apiservice_apiservice__["ApiService"]])
    ], SgDesignerComponent);
    return SgDesignerComponent;
}());



/***/ }),

/***/ "./src/packages/sgdesigner-wizard/views/sgdesigner/sg.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SgDesignerModule", function() { return SgDesignerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apiBaseInfo_apibaseinfo_component__ = __webpack_require__("./src/packages/sgdesigner-wizard/views/sgdesigner/apiBaseInfo/apibaseinfo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sg_component__ = __webpack_require__("./src/packages/sgdesigner-wizard/views/sgdesigner/sg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_toolbar__ = __webpack_require__("./node_modules/@progress/kendo-angular-toolbar/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_buttons__ = __webpack_require__("./node_modules/@progress/kendo-angular-buttons/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_layout__ = __webpack_require__("./node_modules/@progress/kendo-angular-layout/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__progress_kendo_angular_treeview__ = __webpack_require__("./node_modules/@progress/kendo-angular-treeview/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__progress_kendo_angular_grid__ = __webpack_require__("./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__progress_kendo_angular_dialog__ = __webpack_require__("./node_modules/@progress/kendo-angular-dialog/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__progress_kendo_angular_inputs__ = __webpack_require__("./node_modules/@progress/kendo-angular-inputs/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__progress_kendo_angular_dropdowns__ = __webpack_require__("./node_modules/@progress/kendo-angular-dropdowns/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__progress_kendo_angular_popup__ = __webpack_require__("./node_modules/@progress/kendo-angular-popup/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__apiBaseInfo_apibaseinfomodal_apibaseinfodialog_component__ = __webpack_require__("./src/packages/sgdesigner-wizard/views/sgdesigner/apiBaseInfo/apibaseinfomodal/apibaseinfodialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__servicedefine_servicedefine_component__ = __webpack_require__("./src/packages/sgdesigner-wizard/views/sgdesigner/servicedefine/servicedefine.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__servicedefine_modal_resourceselection_component__ = __webpack_require__("./src/packages/sgdesigner-wizard/views/sgdesigner/servicedefine/modal/resourceselection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__servicedefine_modal_resourceopselection_component__ = __webpack_require__("./src/packages/sgdesigner-wizard/views/sgdesigner/servicedefine/modal/resourceopselection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__servicedefine_modal_paramedit_component__ = __webpack_require__("./src/packages/sgdesigner-wizard/views/sgdesigner/servicedefine/modal/paramedit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__reference_metadata_metadata_ref__ = __webpack_require__("./reference/metadata/metadata.ref.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__reference_farris_farris_ui_ref__ = __webpack_require__("./reference/farris/farris.ui.ref.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ngx_clipboard__ = __webpack_require__("./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var SgDesignerModule = (function () {
    function SgDesignerModule() {
    }
    SgDesignerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__sg_component__["SgDesignerComponent"],
                __WEBPACK_IMPORTED_MODULE_2__apiBaseInfo_apibaseinfo_component__["ApiBaseInfoComponent"],
                __WEBPACK_IMPORTED_MODULE_15__servicedefine_servicedefine_component__["ServiceDefineComponent"],
                __WEBPACK_IMPORTED_MODULE_14__apiBaseInfo_apibaseinfomodal_apibaseinfodialog_component__["SgModelModalComponent"],
                __WEBPACK_IMPORTED_MODULE_18__servicedefine_modal_paramedit_component__["ParamEditDialogComponent"],
                __WEBPACK_IMPORTED_MODULE_16__servicedefine_modal_resourceselection_component__["ResourceTypeSelectionComponent"],
                __WEBPACK_IMPORTED_MODULE_17__servicedefine_modal_resourceopselection_component__["ResourceOpSelectionComponent"]
            ],
            imports: [
                // BrowserModule,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"],
                // HttpModule,
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_toolbar__["ToolBarModule"],
                __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_buttons__["ButtonsModule"],
                __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_buttons__["ButtonGroupModule"],
                __WEBPACK_IMPORTED_MODULE_10__progress_kendo_angular_dialog__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_11__progress_kendo_angular_inputs__["InputsModule"],
                __WEBPACK_IMPORTED_MODULE_12__progress_kendo_angular_dropdowns__["DropDownListModule"],
                __WEBPACK_IMPORTED_MODULE_13__progress_kendo_angular_popup__["PopupModule"],
                __WEBPACK_IMPORTED_MODULE_8__progress_kendo_angular_treeview__["TreeViewModule"],
                __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_layout__["LayoutModule"],
                __WEBPACK_IMPORTED_MODULE_9__progress_kendo_angular_grid__["GridModule"],
                __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_layout__["LayoutModule"],
                __WEBPACK_IMPORTED_MODULE_21__reference_farris_farris_ui_ref__["FarrisDialogModule"],
                __WEBPACK_IMPORTED_MODULE_19__reference_metadata_metadata_ref__["MetadataSelectModule"],
                __WEBPACK_IMPORTED_MODULE_22_ngx_clipboard__["ClipboardModule"],
                __WEBPACK_IMPORTED_MODULE_19__reference_metadata_metadata_ref__["GSPMetadataServiceModule"].forRoot(__WEBPACK_IMPORTED_MODULE_20__environments_environment__["environment"].SERVER_IP)
            ],
            providers: [],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_16__servicedefine_modal_resourceselection_component__["ResourceTypeSelectionComponent"], __WEBPACK_IMPORTED_MODULE_17__servicedefine_modal_resourceopselection_component__["ResourceOpSelectionComponent"], __WEBPACK_IMPORTED_MODULE_18__servicedefine_modal_paramedit_component__["ParamEditDialogComponent"]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__sg_component__["SgDesignerComponent"]]
        })
    ], SgDesignerModule);
    return SgDesignerModule;
}());



/***/ }),

/***/ "./src/packages/sgdesigner-wizard/views/sgdesigner/sgmetadata/sgMetadata.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SgMetadata", function() { return SgMetadata; });
/* unused harmony export ServiceDefine */
/* unused harmony export ServiceOperation */
/* unused harmony export AssemblyInfo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceParameter", function() { return ServiceParameter; });
/* unused harmony export TransactionOption */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SgModel", function() { return SgModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SgModelType", function() { return SgModelType; });
/* unused harmony export ResourceSummary */
var SgMetadata = (function () {
    function SgMetadata() {
    }
    return SgMetadata;
}());

var ServiceDefine = (function () {
    function ServiceDefine() {
    }
    return ServiceDefine;
}());

var ServiceOperation = (function () {
    function ServiceOperation() {
    }
    return ServiceOperation;
}());

var AssemblyInfo = (function () {
    function AssemblyInfo() {
    }
    return AssemblyInfo;
}());

var ServiceParameter = (function () {
    function ServiceParameter() {
    }
    return ServiceParameter;
}());

var TransactionOption;
(function (TransactionOption) {
    TransactionOption[TransactionOption["requiresNew"] = 0] = "requiresNew";
    TransactionOption[TransactionOption["required"] = 1] = "required";
    TransactionOption[TransactionOption["notSupport"] = 2] = "notSupport";
})(TransactionOption || (TransactionOption = {}));
var SgModel = (function () {
    function SgModel() {
    }
    return SgModel;
}());

var SgModelType;
(function (SgModelType) {
    SgModelType[SgModelType["VO"] = 0] = "VO";
    SgModelType[SgModelType["Dto"] = 1] = "Dto";
})(SgModelType || (SgModelType = {}));
var ResourceSummary = (function () {
    function ResourceSummary() {
    }
    return ResourceSummary;
}());



/***/ })

},[],["farris","metadata"],["farris","metadata"]);
//# sourceMappingURL=sgpackage.module.chunk.js.map