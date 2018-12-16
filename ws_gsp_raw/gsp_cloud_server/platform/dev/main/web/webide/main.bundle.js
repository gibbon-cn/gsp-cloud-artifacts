webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ide.module": [
		"./src/app/ide.module.ts",
		"ide.module"
	],
	"./login/login.module": [
		"./src/app/login/login.module.ts",
		"login.module"
	],
	"./ssologin/ssologin.module": [
		"./src/app/ssologin/ssologin.module.ts",
		"ssologin.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n\r\n\r\n\r\n<!-- <app-selectbusinessobject></app-selectbusinessobject>\r\n\r\n<nav class=\"navbar navbar-expand-sm py-0\">\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\" style=\"display: -webkit-box !important;\r\n  display: -ms-flexbox !important;\r\n  display: flex !important;\r\n  -ms-flex-preferred-size: auto;\r\n  flex-basis: auto;\">\r\n    <ul class=\"web-ide-menu-bar navbar-nav mr-auto\">\r\n      <li class=\"nav-item dropdown\" dropdown> \r\n        <a dropdownToggle class=\"nav-link\" href=\"#\">文件</a>\r\n        <div *dropdownMenu class=\"dropdown-menu\">\r\n          <a class=\"dropdown-item\" href=\"#\">新建文件</a>\r\n          <a class=\"dropdown-item\" href=\"#\">新建窗口</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"#\">打开文件</a>\r\n          <a class=\"dropdown-item\" href=\"#\">打开文件夹</a>\r\n          <a class=\"dropdown-item\" href=\"#\">打开工作区</a>\r\n          <a class=\"dropdown-item\" href=\"#\">打开最近的文件</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"#\">将文件添加到工作区</a>\r\n          <a class=\"dropdown-item\" href=\"#\">将工作区另存为</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"#\">保存</a>\r\n          <a class=\"dropdown-item\" href=\"#\">另存为</a>\r\n          <a class=\"dropdown-item\" href=\"#\">全部保存</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"#\">自动保存</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"#\">首选项</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"#\">还原文件</a>\r\n          <a class=\"dropdown-item\" href=\"#\">关闭编辑器</a>\r\n          <a class=\"dropdown-item\" href=\"#\">关闭文件夹</a>\r\n          <a class=\"dropdown-item\" href=\"#\">关闭窗口</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"#\">退出</a>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item dropdown\" dropdown>\r\n        <a dropdownToggle class=\"nav-link\" href=\"#\">编辑</a>\r\n        <div *dropdownMenu class=\"dropdown-menu\">\r\n          <a class=\"dropdown-item\" href=\"#\">撤销</a>\r\n          <a class=\"dropdown-item\" href=\"#\">恢复</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"#\">剪切</a>\r\n          <a class=\"dropdown-item\" href=\"#\">复制</a>\r\n          <a class=\"dropdown-item\" href=\"#\">粘贴</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"#\">查找</a>\r\n          <a class=\"dropdown-item\" href=\"#\">替换</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"#\">在文件中查找</a>\r\n          <a class=\"dropdown-item\" href=\"#\">在文件中替换</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"#\">切换行注释</a>\r\n          <a class=\"dropdown-item\" href=\"#\">切换块注释</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Emmet展开缩写</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Emmet...</a>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item dropdown\" dropdown>\r\n        <a dropdownToggle class=\"nav-link\" href=\"#\">选择</a>\r\n        <div *dropdownMenu class=\"dropdown-menu\">\r\n          <a class=\"dropdown-item\" href=\"#\">全选</a>\r\n          <a class=\"dropdown-item\" href=\"#\">展开选定的内容</a>\r\n          <a class=\"dropdown-item\" href=\"#\">缩小选定的范围</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"#\">向上复制一行</a>\r\n          <a class=\"dropdown-item\" href=\"#\">向下复制一行</a>\r\n          <a class=\"dropdown-item\" href=\"#\">向上移动一行</a>\r\n          <a class=\"dropdown-item\" href=\"#\">向下移动一行</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"#\">切换为\"Ctrl+单击\"进行多光标功能</a>\r\n          <a class=\"dropdown-item\" href=\"#\">在上面添加光标</a>\r\n          <a class=\"dropdown-item\" href=\"#\">在下面添加光标</a>\r\n          <a class=\"dropdown-item\" href=\"#\">在行尾添加光标</a>\r\n          <a class=\"dropdown-item\" href=\"#\">添加下一个匹配项</a>\r\n          <a class=\"dropdown-item\" href=\"#\">添加上一个匹配项</a>\r\n          <a class=\"dropdown-item\" href=\"#\">选择所有匹配项</a>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item dropdown\" dropdown>\r\n        <a dropdownToggle class=\"nav-link\" href=\"#\">查看</a>\r\n        <div *dropdownMenu class=\"dropdown-menu\">\r\n          <a class=\"dropdown-item\" href=\"#\">命令面板...</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"#\">资源管理器</a>\r\n          <a class=\"dropdown-item\" href=\"#\">搜索</a>\r\n          <a class=\"dropdown-item\" href=\"#\">源代码管理器</a>\r\n          <a class=\"dropdown-item\" href=\"#\">调试</a>\r\n          <a class=\"dropdown-item\" href=\"#\">扩展</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"#\">输出</a>\r\n          <a class=\"dropdown-item\" href=\"#\">问题</a>\r\n          <a class=\"dropdown-item\" href=\"#\">调试控制台</a>\r\n          <a class=\"dropdown-item\" href=\"#\">集成终端</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"#\">切换全屏</a>\r\n          <a class=\"dropdown-item\" href=\"#\">切换Zen模式</a>\r\n          <a class=\"dropdown-item\" href=\"#\">切换菜单栏</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"#\">拆分编辑器</a>\r\n          <a class=\"dropdown-item\" href=\"#\">切换编辑器组布局</a>\r\n          <a class=\"dropdown-item\" href=\"#\">向右移动侧边栏</a>\r\n          <a class=\"dropdown-item\" href=\"#\">切换侧边栏</a>\r\n          <a class=\"dropdown-item\" href=\"#\">切换面板</a>\r\n          <a class=\"dropdown-item\" href=\"#\">隐藏状态栏</a>\r\n          <a class=\"dropdown-item\" href=\"#\">隐藏活动栏</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"#\">切换自动换行</a>\r\n          <a class=\"dropdown-item\" href=\"#\">切换小地图</a>\r\n          <a class=\"dropdown-item\" href=\"#\">切换呈现空格</a>\r\n          <a class=\"dropdown-item\" href=\"#\">切换控制字符</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"#\">放大</a>\r\n          <a class=\"dropdown-item\" href=\"#\">缩小</a>\r\n          <a class=\"dropdown-item\" href=\"#\">重置缩放</a>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item dropdown\" dropdown>\r\n        <a dropdownToggle class=\"nav-link\" href=\"#\">转到</a>\r\n        <div *dropdownMenu class=\"dropdown-menu\">\r\n          <a class=\"dropdown-item\" href=\"#\">后退</a>\r\n          <a class=\"dropdown-item\" href=\"#\">前进</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"#\">切换编辑器</a>\r\n          <a class=\"dropdown-item\" href=\"#\">切换组</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"#\">转到文件</a>\r\n          <a class=\"dropdown-item\" href=\"#\">转到文件中的符号</a>\r\n          <a class=\"dropdown-item\" href=\"#\">转到工作区中的符号</a>\r\n          <a class=\"dropdown-item\" href=\"#\">转到定义</a>\r\n          <a class=\"dropdown-item\" href=\"#\">转到类型定义</a>\r\n          <a class=\"dropdown-item\" href=\"#\">转到实现</a>\r\n          <a class=\"dropdown-item\" href=\"#\">转到行...</a>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item dropdown\" dropdown>\r\n        <a dropdownToggle class=\"nav-link\" href=\"#\">调试</a>\r\n        <div *dropdownMenu class=\"dropdown-menu\">\r\n          <a class=\"dropdown-item\" href=\"#\">启动调试</a>\r\n          <a class=\"dropdown-item\" href=\"#\">非调试启动</a>\r\n          <a class=\"dropdown-item\" href=\"#\">停止调试</a>\r\n          <a class=\"dropdown-item\" href=\"#\">重启调试</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"#\">打开配置</a>\r\n          <a class=\"dropdown-item\" href=\"#\">添加配置</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"#\">单步跳过</a>\r\n          <a class=\"dropdown-item\" href=\"#\">单步执行</a>\r\n          <a class=\"dropdown-item\" href=\"#\">单步跳出</a>\r\n          <a class=\"dropdown-item\" href=\"#\">继续</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"#\">切换断点</a>\r\n          <a class=\"dropdown-item\" href=\"#\">新建断点</a>\r\n          <a class=\"dropdown-item\" href=\"#\">启用所有断点</a>\r\n          <a class=\"dropdown-item\" href=\"#\">禁用所有断点</a>\r\n          <a class=\"dropdown-item\" href=\"#\">删除所有断点</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"#\">安装其他调试器</a>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item dropdown\" dropdown>\r\n        <a dropdownToggle class=\"nav-link\" href=\"#\">任务</a>\r\n        <div *dropdownMenu class=\"dropdown-menu\">\r\n          <a class=\"dropdown-item\" href=\"#\">运行任务</a>\r\n          <a class=\"dropdown-item\" href=\"#\">运行生成任务</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"#\">中止任务</a>\r\n          <a class=\"dropdown-item\" href=\"#\">重启正在运行的任务</a>\r\n          <a class=\"dropdown-item\" href=\"#\">显示正在运行的任务</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"#\">配置任务</a>\r\n          <a class=\"dropdown-item\" href=\"#\">配置默认生成任务</a>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item dropdown\" dropdown>\r\n        <a dropdownToggle class=\"nav-link\" href=\"#\">帮助</a>\r\n        <div *dropdownMenu class=\"dropdown-menu\">\r\n          <a class=\"dropdown-item\" href=\"#\">欢迎使用</a>\r\n          <a class=\"dropdown-item\" href=\"#\">交互式演练场</a>\r\n          <a class=\"dropdown-item\" href=\"#\">文档</a>\r\n          <a class=\"dropdown-item\" href=\"#\">发行说明</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"#\">快捷键参考</a>\r\n          <a class=\"dropdown-item\" href=\"#\">介绍性视频</a>\r\n          <a class=\"dropdown-item\" href=\"#\">演示与技巧</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"#\">在Twitter上加入我们</a>\r\n          <a class=\"dropdown-item\" href=\"#\">搜索功能请求</a>\r\n          <a class=\"dropdown-item\" href=\"#\">使用英文报告问题</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"#\">查看许可证</a>\r\n          <a class=\"dropdown-item\" href=\"#\">隐私声明</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"#\">切换开发人员工具</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"#\">检查更新</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"#\">关于</a>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n<div class=\"d-flex\" style=\"height: calc(100vh - 30px);\">\r\n  <div class=\"left-panel-container d-flex\" [style.width.px]=\"leftPanelWidth\">\r\n    <ngb-navtabset type=\"pills\" [orientation]=\"currentOrientation\" (tabChange)=\"onTabChanged($event)\">\r\n      <ngb-navtab>\r\n        <ng-template ngbNavTabTitle>\r\n          <i class=\"material-icons\">content_copy</i>\r\n        </ng-template>\r\n        <ng-template ngbNavTabContent>\r\n          <button class=\"btn\" (click)=\"addEditorTab()\">addEditorTab</button>\r\n          <button class=\"btn\" (click)=\"addDesignerTab()\">addDesignerTab</button>\r\n          <button class=\"btn\" (click)=\"closeLast()\">closeLast</button>\r\n        </ng-template>\r\n      </ngb-navtab>\r\n      <ngb-navtab>\r\n        <ng-template ngbNavTabTitle>\r\n          <i class=\"material-icons\">search</i>\r\n        </ng-template>\r\n        <ng-template ngbNavTabContent>\r\n        </ng-template>\r\n      </ngb-navtab>\r\n      <ngb-navtab>\r\n        <ng-template ngbNavTabTitle>\r\n          <i class=\"fa fa-code-fork\"></i>\r\n        </ng-template>\r\n        <ng-template ngbNavTabContent>\r\n        </ng-template>\r\n      </ngb-navtab>\r\n    </ngb-navtabset>\r\n    <div sash class=\"web-ide-sash-vertical\" [(panelWidth)]=\"leftPanelWidth\" (widthChanged)=\"onLeftPanelWidthChanged($event)\"></div>\r\n  </div>\r\n  <div class=\"main d-flex\">\r\n    <!- <ngb-tabset>\r\n      <ngb-tab>\r\n        <ng-template ngbTabTitle>\r\n          Hello World\r\n        </ng-template>\r\n        <ng-template ngbTabContent>\r\n          <ngx-monaco-editor [options]=\"editorOptions\" [(ngModel)]=\"code\"></ngx-monaco-editor>\r\n        </ng-template>\r\n      </ngb-tab>\r\n      <ngb-tab>\r\n        <ng-template ngbTabTitle>\r\n          Hello World\r\n        </ng-template>\r\n        <ng-template ngbTabContent>\r\n          <app-idecontent></app-idecontent>\r\n        </ng-template>\r\n      </ngb-tab>\r\n      <ngb-tab>\r\n        <ng-template ngbTabTitle>\r\n          Hello World\r\n        </ng-template>\r\n        <ng-template ngbTabContent>\r\n        </ng-template>\r\n      </ngb-tab>\r\n    </ngb-tabset> ->\r\n    <ngb-tabset>\r\n      <ngb-tab *ngFor=\"let tab of tabs\">\r\n        <ng-template ngbTabTitle>\r\n          {{tab.title}}\r\n        </ng-template>\r\n        <ng-template ngbTabContent>\r\n          <app-idecontentwrapper [contentUri]=\"tab.uri\"></app-idecontentwrapper>\r\n        </ng-template>\r\n      </ngb-tab>\r\n    </ngb-tabset>\r\n  </div>\r\n  <!- <div class=\"right-panel-container\"></div> ->\r\n</div> -->\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("./src/app/app.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__farris_ide_devkit_services__ = __webpack_require__("./node_modules/@farris/ide-devkit/services/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__farris_ide_devkit_services___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__farris_ide_devkit_services__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gsp_lcm_metadata_selector__ = __webpack_require__("./node_modules/@gsp-lcm/metadata-selector/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gsp_lcm_metadata_selector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__gsp_lcm_metadata_selector__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["BrowserAnimationsModule"],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["AppRoutingModule"],
                __WEBPACK_IMPORTED_MODULE_5__farris_ide_devkit_services__["CacheModule"].forRoot()
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__app_component__["AppComponent"]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1__app_component__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    { path: 'login', loadChildren: './login/login.module#LoginModule', data: { title: 'Login' } },
    { path: 'home', loadChildren: './ide.module#IDEModule', data: { title: 'home' } },
    // { path: 'userinfo', loadChildren: ''}
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'ssologin', loadChildren: './ssologin/ssologin.module#SsologinModule', data: { title: 'SsoLogin' } }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forRoot(routes, { useHash: true, enableTracing: false })
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// https://www.codercto.com/a/7019.html
// ng serve --environment prod 或
// ng build --environment prod
var environment = {
    production: true,
    // url of production api
    lcmUrl: '/',
    SERVER_IP: ''
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




// import { GSP } from '@farris/ide-devkit';
if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["environment"].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
// export const gsp = new GSP();
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["platformBrowserDynamic"])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0],["angular","farris","metadata","libcore","rxjs","progress"]);
//# sourceMappingURL=main.bundle.js.map