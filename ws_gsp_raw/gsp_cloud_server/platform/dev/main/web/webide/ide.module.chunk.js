webpackJsonp(["ide.module"],{
/***/"./src/$$_lazy_require_resource lazy recursive":
/***/function(e,t,n,o){function i(e){var t=e.split("#");var o=t[0];var i=t[1];if(!o){return Promise.reject(new Error("FilePath can not be empty."))}if(!i){return Promise.reject(new Error("Module name can not be empty."))}var r=function(){return i};return n.lazy(o).then(function(){return n(r())})}i.id="./src/$$_lazy_require_resource lazy recursive";e.exports=i;
/***/},
/***/"./src/app/components/ide-code-editor/ide-code-editor.component.css":
/***/function(e,t,n){t=e.exports=n("./node_modules/css-loader/lib/css-base.js")(false);
// imports
// module
t.push([e.i,":host {\n  display: -webkit-box !important;\n  display: -ms-flexbox !important;\n  display: flex !important;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}",""]);
// exports
/*** EXPORTS FROM exports-loader ***/e.exports=e.exports.toString();
/***/},
/***/"./src/app/components/ide-code-editor/ide-code-editor.component.html":
/***/function(e,t){e.exports='\x3c!--<ngx-monaco-editor [options]="editorOptions" [(ngModel)]="code"></ngx-monaco-editor>--\x3e\n'
/***/},
/***/"./src/app/components/ide-code-editor/ide-code-editor.component.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"IdeCodeEditorComponent",function(){return s});
/* harmony import */var o=n("./node_modules/@angular/core/esm5/core.js");var i=this&&this.__decorate||function(e,t,n,o){var i=arguments.length,r=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)if(s=e[a])r=(i<3?s(r):i>3?s(t,n,r):s(t,n))||r;return i>3&&r&&Object.defineProperty(t,n,r),r};var r=this&&this.__metadata||function(e,t){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(e,t)};var s=function(){function e(){this.editorOptions={theme:"vs-dark",language:"javascript"};this.code='function x() {\nconsole.log("Hello world!");\n}'}e.prototype.ngOnInit=function(){};e=i([Object(o["Component"])({selector:"app-ide-code-editor",template:n("./src/app/components/ide-code-editor/ide-code-editor.component.html"),styles:[n("./src/app/components/ide-code-editor/ide-code-editor.component.css")]}),r("design:paramtypes",[])],e);return e}();
/***/},
/***/"./src/app/components/ide-common.module.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"IDECommonModule",function(){return c});
/* harmony import */var o=n("./node_modules/@angular/core/esm5/core.js");
/* harmony import */var i=n("./src/app/ide-dev-kit/plugin-container/plugin-container.component.ts");
/* harmony import */var r=n("./src/app/components/idecontentwrapper/idecontentwrapper.component.ts");
/* harmony import */var s=n("./src/app/components/ide-property-editor/ide-property-editor.component.ts");var a=this&&this.__decorate||function(e,t,n,o){var i=arguments.length,r=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)if(s=e[a])r=(i<3?s(r):i>3?s(t,n,r):s(t,n))||r;return i>3&&r&&Object.defineProperty(t,n,r),r};var c=function(){function e(){}e=a([Object(o["NgModule"])({declarations:[r["IdecontentwrapperComponent"],s["IdePropertyEditorComponent"],i["PluginContainerComponent"]],exports:[r["IdecontentwrapperComponent"],i["PluginContainerComponent"]]})],e);return e}();
/***/},
/***/"./src/app/components/ide-property-editor/ide-property-editor.component.css":
/***/function(e,t,n){t=e.exports=n("./node_modules/css-loader/lib/css-base.js")(false);
// imports
// module
t.push([e.i,"",""]);
// exports
/*** EXPORTS FROM exports-loader ***/e.exports=e.exports.toString();
/***/},
/***/"./src/app/components/ide-property-editor/ide-property-editor.component.html":
/***/function(e,t){e.exports="<p>\n  ide-property-editor works!\n</p>\n"
/***/},
/***/"./src/app/components/ide-property-editor/ide-property-editor.component.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"IdePropertyEditorComponent",function(){return s});
/* harmony import */var o=n("./node_modules/@angular/core/esm5/core.js");var i=this&&this.__decorate||function(e,t,n,o){var i=arguments.length,r=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)if(s=e[a])r=(i<3?s(r):i>3?s(t,n,r):s(t,n))||r;return i>3&&r&&Object.defineProperty(t,n,r),r};var r=this&&this.__metadata||function(e,t){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(e,t)};var s=function(){function e(){}e.prototype.ngOnInit=function(){};e=i([Object(o["Component"])({selector:"app-ide-property-editor",template:n("./src/app/components/ide-property-editor/ide-property-editor.component.html"),styles:[n("./src/app/components/ide-property-editor/ide-property-editor.component.css")]}),r("design:paramtypes",[])],e);return e}();
/***/},
/***/"./src/app/components/idecontent/idecontent.component.css":
/***/function(e,t,n){t=e.exports=n("./node_modules/css-loader/lib/css-base.js")(false);
// imports
// module
t.push([e.i,":host {\n  display: -webkit-box !important;\n  display: -ms-flexbox !important;\n  display: flex !important;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}",""]);
// exports
/*** EXPORTS FROM exports-loader ***/e.exports=e.exports.toString();
/***/},
/***/"./src/app/components/idecontent/idecontent.component.html":
/***/function(e,t){e.exports='<app-idecontrolpanel style="width:240px;"></app-idecontrolpanel>\n<div style="flex:1;"></div>\n<app-idepropertypanel style="width:240px;"></app-idepropertypanel>\n'
/***/},
/***/"./src/app/components/idecontent/idecontent.component.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"IdecontentComponent",function(){return s});
/* harmony import */var o=n("./node_modules/@angular/core/esm5/core.js");var i=this&&this.__decorate||function(e,t,n,o){var i=arguments.length,r=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)if(s=e[a])r=(i<3?s(r):i>3?s(t,n,r):s(t,n))||r;return i>3&&r&&Object.defineProperty(t,n,r),r};var r=this&&this.__metadata||function(e,t){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(e,t)};var s=function(){function e(){}e.prototype.ngOnInit=function(){};e=i([Object(o["Component"])({selector:"app-idecontent",template:n("./src/app/components/idecontent/idecontent.component.html"),styles:[n("./src/app/components/idecontent/idecontent.component.css")]}),r("design:paramtypes",[])],e);return e}();
/***/},
/***/"./src/app/components/idecontentwrapper/idecontentwrapper.component.css":
/***/function(e,t,n){t=e.exports=n("./node_modules/css-loader/lib/css-base.js")(false);
// imports
// module
t.push([e.i,":host {\n  display: -webkit-box !important;\n  display: -ms-flexbox !important;\n  display: flex !important;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n",""]);
// exports
/*** EXPORTS FROM exports-loader ***/e.exports=e.exports.toString();
/***/},
/***/"./src/app/components/idecontentwrapper/idecontentwrapper.component.html":
/***/function(e,t){e.exports="<div #idewrapper></div>"
/***/},
/***/"./src/app/components/idecontentwrapper/idecontentwrapper.component.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"IdecontentwrapperComponent",function(){return c});
/* harmony import */var o=n("./node_modules/@angular/core/esm5/core.js");
/* harmony import */var i=n("./src/app/components/idecontent/idecontent.component.ts");
/* harmony import */var r=n("./src/app/components/ide-code-editor/ide-code-editor.component.ts");var s=this&&this.__decorate||function(e,t,n,o){var i=arguments.length,r=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)if(s=e[a])r=(i<3?s(r):i>3?s(t,n,r):s(t,n))||r;return i>3&&r&&Object.defineProperty(t,n,r),r};var a=this&&this.__metadata||function(e,t){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(e,t)};var c=function(){function e(e,t){this.componentFactoryResolver=e;this.viewContainerRef=t}e.prototype.ngOnChanges=function(){var e;if(this.contentUri){switch(this.contentUri){case"editor":e=this.componentFactoryResolver.resolveComponentFactory(r["IdeCodeEditorComponent"]);break;case"designer":e=this.componentFactoryResolver.resolveComponentFactory(i["IdecontentComponent"]);break;default:throw new Error("未识别的类型"+this.contentUri)}}if(this.content){e=this.componentFactoryResolver.resolveComponentFactory(this.content)}var t=this.ideWrapper;t.clear();if(e){var n=t.createComponent(e)}};s([Object(o["Input"])(),a("design:type",String)],e.prototype,"contentUri",void 0);s([Object(o["Input"])(),a("design:type",o["Type"])],e.prototype,"content",void 0);s([Object(o["ViewChild"])("idewrapper",{read:o["ViewContainerRef"]}),a("design:type",Object)],e.prototype,"ideWrapper",void 0);e=s([Object(o["Component"])({selector:"app-idecontentwrapper",template:n("./src/app/components/idecontentwrapper/idecontentwrapper.component.html"),styles:[n("./src/app/components/idecontentwrapper/idecontentwrapper.component.css")]}),a("design:paramtypes",[o["ComponentFactoryResolver"],o["ViewContainerRef"]])],e);return e}();
/***/},
/***/"./src/app/components/idecontroloutline/idecontroloutline.component.css":
/***/function(e,t,n){t=e.exports=n("./node_modules/css-loader/lib/css-base.js")(false);
// imports
// module
t.push([e.i,"",""]);
// exports
/*** EXPORTS FROM exports-loader ***/e.exports=e.exports.toString();
/***/},
/***/"./src/app/components/idecontroloutline/idecontroloutline.component.html":
/***/function(e,t){e.exports="<p>\n  idecontroloutline works!\n</p>\n"
/***/},
/***/"./src/app/components/idecontroloutline/idecontroloutline.component.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"IdecontroloutlineComponent",function(){return s});
/* harmony import */var o=n("./node_modules/@angular/core/esm5/core.js");var i=this&&this.__decorate||function(e,t,n,o){var i=arguments.length,r=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)if(s=e[a])r=(i<3?s(r):i>3?s(t,n,r):s(t,n))||r;return i>3&&r&&Object.defineProperty(t,n,r),r};var r=this&&this.__metadata||function(e,t){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(e,t)};var s=function(){function e(){}e.prototype.ngOnInit=function(){};e=i([Object(o["Component"])({selector:"app-idecontroloutline",template:n("./src/app/components/idecontroloutline/idecontroloutline.component.html"),styles:[n("./src/app/components/idecontroloutline/idecontroloutline.component.css")]}),r("design:paramtypes",[])],e);return e}();
/***/},
/***/"./src/app/components/idecontrolpanel/idecontrolpanel.component.css":
/***/function(e,t,n){t=e.exports=n("./node_modules/css-loader/lib/css-base.js")(false);
// imports
// module
t.push([e.i,":host {\n  overflow-y: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n",""]);
// exports
/*** EXPORTS FROM exports-loader ***/e.exports=e.exports.toString();
/***/},
/***/"./src/app/components/idecontrolpanel/idecontrolpanel.component.html":
/***/function(e,t){e.exports="\x3c!--<ngb-tabset>--\x3e\n  \x3c!--<ngb-tab>--\x3e\n    \x3c!--<ng-template ngbTabTitle>--\x3e\n      \x3c!--Controls--\x3e\n    \x3c!--</ng-template>--\x3e\n    \x3c!--<ng-template ngbTabContent>--\x3e\n      \x3c!--<app-idecontroltoolbox></app-idecontroltoolbox>--\x3e\n    \x3c!--</ng-template>--\x3e\n  \x3c!--</ngb-tab>--\x3e\n  \x3c!--<ngb-tab>--\x3e\n    \x3c!--<ng-template ngbTabTitle>--\x3e\n      \x3c!--Outline--\x3e\n    \x3c!--</ng-template>--\x3e\n    \x3c!--<ng-template ngbTabContent>--\x3e\n    \x3c!--&lt;!&ndash;</ng-template>&ndash;&gt;--\x3e\n  \x3c!--</ngb-tab>--\x3e\n\x3c!--</ngb-tabset>--\x3e\n"
/***/},
/***/"./src/app/components/idecontrolpanel/idecontrolpanel.component.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"IdecontrolpanelComponent",function(){return s});
/* harmony import */var o=n("./node_modules/@angular/core/esm5/core.js");var i=this&&this.__decorate||function(e,t,n,o){var i=arguments.length,r=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)if(s=e[a])r=(i<3?s(r):i>3?s(t,n,r):s(t,n))||r;return i>3&&r&&Object.defineProperty(t,n,r),r};var r=this&&this.__metadata||function(e,t){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(e,t)};var s=function(){function e(){}e.prototype.ngOnInit=function(){};e=i([Object(o["Component"])({selector:"app-idecontrolpanel",template:n("./src/app/components/idecontrolpanel/idecontrolpanel.component.html"),styles:[n("./src/app/components/idecontrolpanel/idecontrolpanel.component.css")]}),r("design:paramtypes",[])],e);return e}();
/***/},
/***/"./src/app/components/idecontroltoolbox/idecontroltoolbox.component.css":
/***/function(e,t,n){t=e.exports=n("./node_modules/css-loader/lib/css-base.js")(false);
// imports
// module
t.push([e.i,":host {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow-y: auto;\n}\n",""]);
// exports
/*** EXPORTS FROM exports-loader ***/e.exports=e.exports.toString();
/***/},
/***/"./src/app/components/idecontroltoolbox/idecontroltoolbox.component.html":
/***/function(e,t){e.exports='\x3c!--<ngb-accordion class="web-ide-control-panel" #acc="ngbAccordion" activeIds="ngb-panel-0">--\x3e\n  \x3c!--<ngb-panel id="ngb-panel-0" title="Simple">--\x3e\n    \x3c!--<ng-template ngbPanelContent>--\x3e\n      \x3c!--<div class="list-group">--\x3e\n        \x3c!--<a href="#" class="list-group-item list-group-item-action">--\x3e\n          \x3c!--<i class="control-icon fa fa-paint-brush"></i>--\x3e\n          \x3c!--<span>brush</span>--\x3e\n        \x3c!--</a>--\x3e\n        \x3c!--<a href="#" class="list-group-item list-group-item-action">--\x3e\n          \x3c!--<i class="control-icon fa fa-paint-brush"></i>--\x3e\n          \x3c!--<span>brush</span>--\x3e\n        \x3c!--</a>--\x3e\n        \x3c!--<a href="#" class="list-group-item list-group-item-action">--\x3e\n          \x3c!--<i class="control-icon fa fa-paint-brush"></i>--\x3e\n          \x3c!--<span>brush</span>--\x3e\n        \x3c!--</a>--\x3e\n        \x3c!--<a href="#" class="list-group-item list-group-item-action">--\x3e\n          \x3c!--<i class="control-icon fa fa-paint-brush"></i>--\x3e\n          \x3c!--<span>brush</span>--\x3e\n        \x3c!--</a>--\x3e\n        \x3c!--<a href="#" class="list-group-item list-group-item-action">--\x3e\n          \x3c!--<i class="control-icon fa fa-paint-brush"></i>--\x3e\n          \x3c!--<span>brush</span>--\x3e\n        \x3c!--</a>--\x3e\n        \x3c!--<a href="#" class="list-group-item list-group-item-action">--\x3e\n          \x3c!--<i class="control-icon fa fa-paint-brush"></i>--\x3e\n          \x3c!--<span>brush</span>--\x3e\n        \x3c!--</a>--\x3e\n        \x3c!--<a href="#" class="list-group-item list-group-item-action">--\x3e\n          \x3c!--<i class="control-icon fa fa-paint-brush"></i>--\x3e\n          \x3c!--<span>brush</span>--\x3e\n        \x3c!--</a>--\x3e\n        \x3c!--<a href="#" class="list-group-item list-group-item-action">--\x3e\n          \x3c!--<i class="control-icon fa fa-paint-brush"></i>--\x3e\n          \x3c!--<span>brush</span>--\x3e\n        \x3c!--</a>--\x3e\n        \x3c!--<a href="#" class="list-group-item list-group-item-action">--\x3e\n          \x3c!--<i class="control-icon fa fa-paint-brush"></i>--\x3e\n          \x3c!--<span>brush</span>--\x3e\n        \x3c!--</a>--\x3e\n        \x3c!--<a href="#" class="list-group-item list-group-item-action">--\x3e\n          \x3c!--<i class="control-icon fa fa-paint-brush"></i>--\x3e\n          \x3c!--<span>brush</span>--\x3e\n        \x3c!--</a>--\x3e\n      \x3c!--</div>--\x3e\n    \x3c!--</ng-template>--\x3e\n  \x3c!--</ngb-panel>--\x3e\n  \x3c!--<ngb-panel>--\x3e\n    \x3c!--<ng-template ngbPanelTitle>--\x3e\n      \x3c!--<span>&#9733;--\x3e\n        \x3c!--<b>Fancy</b> title &#9733;</span>--\x3e\n    \x3c!--</ng-template>--\x3e\n    \x3c!--<ng-template ngbPanelContent>--\x3e\n        \x3c!--<div class="list-group">--\x3e\n            \x3c!--<a href="#" class="list-group-item list-group-item-action">--\x3e\n              \x3c!--<i class="control-icon fa fa-paint-brush"></i>--\x3e\n              \x3c!--<span>brush</span>--\x3e\n            \x3c!--</a>--\x3e\n            \x3c!--<a href="#" class="list-group-item list-group-item-action">--\x3e\n              \x3c!--<i class="control-icon fa fa-paint-brush"></i>--\x3e\n              \x3c!--<span>brush</span>--\x3e\n            \x3c!--</a>--\x3e\n            \x3c!--<a href="#" class="list-group-item list-group-item-action">--\x3e\n              \x3c!--<i class="control-icon fa fa-paint-brush"></i>--\x3e\n              \x3c!--<span>brush</span>--\x3e\n            \x3c!--</a>--\x3e\n            \x3c!--<a href="#" class="list-group-item list-group-item-action">--\x3e\n              \x3c!--<i class="control-icon fa fa-paint-brush"></i>--\x3e\n              \x3c!--<span>brush</span>--\x3e\n            \x3c!--</a>--\x3e\n            \x3c!--<a href="#" class="list-group-item list-group-item-action">--\x3e\n              \x3c!--<i class="control-icon fa fa-paint-brush"></i>--\x3e\n              \x3c!--<span>brush</span>--\x3e\n            \x3c!--</a>--\x3e\n            \x3c!--<a href="#" class="list-group-item list-group-item-action">--\x3e\n              \x3c!--<i class="control-icon fa fa-paint-brush"></i>--\x3e\n              \x3c!--<span>brush</span>--\x3e\n            \x3c!--</a>--\x3e\n            \x3c!--<a href="#" class="list-group-item list-group-item-action">--\x3e\n              \x3c!--<i class="control-icon fa fa-paint-brush"></i>--\x3e\n              \x3c!--<span>brush</span>--\x3e\n            \x3c!--</a>--\x3e\n            \x3c!--<a href="#" class="list-group-item list-group-item-action">--\x3e\n              \x3c!--<i class="control-icon fa fa-paint-brush"></i>--\x3e\n              \x3c!--<span>brush</span>--\x3e\n            \x3c!--</a>--\x3e\n            \x3c!--<a href="#" class="list-group-item list-group-item-action">--\x3e\n              \x3c!--<i class="control-icon fa fa-paint-brush"></i>--\x3e\n              \x3c!--<span>brush</span>--\x3e\n            \x3c!--</a>--\x3e\n            \x3c!--<a href="#" class="list-group-item list-group-item-action">--\x3e\n              \x3c!--<i class="control-icon fa fa-paint-brush"></i>--\x3e\n              \x3c!--<span>brush</span>--\x3e\n            \x3c!--</a>--\x3e\n          \x3c!--</div>--\x3e\n    \x3c!--</ng-template>--\x3e\n  \x3c!--</ngb-panel>--\x3e\n  \x3c!--<ngb-panel title="Disabled">--\x3e\n    \x3c!--<ng-template ngbPanelContent>--\x3e\n        \x3c!--<div class="list-group">--\x3e\n            \x3c!--<a href="#" class="list-group-item list-group-item-action">--\x3e\n              \x3c!--<i class="control-icon fa fa-paint-brush"></i>--\x3e\n              \x3c!--<span>brush</span>--\x3e\n            \x3c!--</a>--\x3e\n            \x3c!--<a href="#" class="list-group-item list-group-item-action">--\x3e\n              \x3c!--<i class="control-icon fa fa-paint-brush"></i>--\x3e\n              \x3c!--<span>brush</span>--\x3e\n            \x3c!--</a>--\x3e\n            \x3c!--<a href="#" class="list-group-item list-group-item-action">--\x3e\n              \x3c!--<i class="control-icon fa fa-paint-brush"></i>--\x3e\n              \x3c!--<span>brush</span>--\x3e\n            \x3c!--</a>--\x3e\n            \x3c!--<a href="#" class="list-group-item list-group-item-action">--\x3e\n              \x3c!--<i class="control-icon fa fa-paint-brush"></i>--\x3e\n              \x3c!--<span>brush</span>--\x3e\n            \x3c!--</a>--\x3e\n            \x3c!--<a href="#" class="list-group-item list-group-item-action">--\x3e\n              \x3c!--<i class="control-icon fa fa-paint-brush"></i>--\x3e\n              \x3c!--<span>brush</span>--\x3e\n            \x3c!--</a>--\x3e\n            \x3c!--<a href="#" class="list-group-item list-group-item-action">--\x3e\n              \x3c!--<i class="control-icon fa fa-paint-brush"></i>--\x3e\n              \x3c!--<span>brush</span>--\x3e\n            \x3c!--</a>--\x3e\n            \x3c!--<a href="#" class="list-group-item list-group-item-action">--\x3e\n              \x3c!--<i class="control-icon fa fa-paint-brush"></i>--\x3e\n              \x3c!--<span>brush</span>--\x3e\n            \x3c!--</a>--\x3e\n            \x3c!--<a href="#" class="list-group-item list-group-item-action">--\x3e\n              \x3c!--<i class="control-icon fa fa-paint-brush"></i>--\x3e\n              \x3c!--<span>brush</span>--\x3e\n            \x3c!--</a>--\x3e\n            \x3c!--<a href="#" class="list-group-item list-group-item-action">--\x3e\n              \x3c!--<i class="control-icon fa fa-paint-brush"></i>--\x3e\n              \x3c!--<span>brush</span>--\x3e\n            \x3c!--</a>--\x3e\n            \x3c!--<a href="#" class="list-group-item list-group-item-action">--\x3e\n              \x3c!--<i class="control-icon fa fa-paint-brush"></i>--\x3e\n              \x3c!--<span>brush</span>--\x3e\n            \x3c!--</a>--\x3e\n          \x3c!--</div>--\x3e\n    \x3c!--</ng-template>--\x3e\n  \x3c!--</ngb-panel>--\x3e\n\x3c!--</ngb-accordion>--\x3e\n'
/***/},
/***/"./src/app/components/idecontroltoolbox/idecontroltoolbox.component.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"IdecontroltoolboxComponent",function(){return s});
/* harmony import */var o=n("./node_modules/@angular/core/esm5/core.js");var i=this&&this.__decorate||function(e,t,n,o){var i=arguments.length,r=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)if(s=e[a])r=(i<3?s(r):i>3?s(t,n,r):s(t,n))||r;return i>3&&r&&Object.defineProperty(t,n,r),r};var r=this&&this.__metadata||function(e,t){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(e,t)};var s=function(){function e(){}e.prototype.ngOnInit=function(){};e=i([Object(o["Component"])({selector:"app-idecontroltoolbox",template:n("./src/app/components/idecontroltoolbox/idecontroltoolbox.component.html"),styles:[n("./src/app/components/idecontroltoolbox/idecontroltoolbox.component.css")]}),r("design:paramtypes",[])],e);return e}();
/***/},
/***/"./src/app/components/idepropertypanel/idepropertypanel.component.css":
/***/function(e,t,n){t=e.exports=n("./node_modules/css-loader/lib/css-base.js")(false);
// imports
// module
t.push([e.i,":host {\n  overflow-y: auto;\n}\n",""]);
// exports
/*** EXPORTS FROM exports-loader ***/e.exports=e.exports.toString();
/***/},
/***/"./src/app/components/idepropertypanel/idepropertypanel.component.html":
/***/function(e,t){e.exports='\x3c!--<ngb-accordion class="web-ide-property-grid" #acc="ngbAccordion" activeIds="ngb-panel-0">--\x3e\n  \x3c!--<ngb-panel title="Simple">--\x3e\n    \x3c!--<ng-template ngbPanelContent>--\x3e\n      \x3c!--<div class="form-group">--\x3e\n        \x3c!--<label for="exampleInputEmail1">Email address</label>--\x3e\n        \x3c!--<div class="input-group">--\x3e\n          \x3c!--<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">--\x3e\n          \x3c!--<div class="input-group-append">--\x3e\n            \x3c!--<button class="btn btn-outline-secondary" type="button">--\x3e\n              \x3c!--<i class="fa fa-clone"></i>--\x3e\n            \x3c!--</button>--\x3e\n          \x3c!--</div>--\x3e\n        \x3c!--</div>--\x3e\n      \x3c!--</div>--\x3e\n      \x3c!--<div class="form-group">--\x3e\n        \x3c!--<label for="exampleInputPassword1">Password</label>--\x3e\n        \x3c!--<div class="input-group">--\x3e\n          \x3c!--<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">--\x3e\n          \x3c!--<div class="input-group-append">--\x3e\n            \x3c!--<button class="btn btn-outline-secondary" type="button">--\x3e\n              \x3c!--<i class="fa fa-clone"></i>--\x3e\n            \x3c!--</button>--\x3e\n          \x3c!--</div>--\x3e\n        \x3c!--</div>--\x3e\n      \x3c!--</div>--\x3e\n    \x3c!--</ng-template>--\x3e\n  \x3c!--</ngb-panel>--\x3e\n  \x3c!--<ngb-panel>--\x3e\n    \x3c!--<ng-template ngbPanelTitle>--\x3e\n      \x3c!--<span>&#9733;--\x3e\n        \x3c!--<b>Fancy</b> title &#9733;</span>--\x3e\n    \x3c!--</ng-template>--\x3e\n    \x3c!--<ng-template ngbPanelContent>--\x3e\n    \x3c!--</ng-template>--\x3e\n  \x3c!--</ngb-panel>--\x3e\n  \x3c!--<ngb-panel title="Disabled">--\x3e\n    \x3c!--<ng-template ngbPanelContent>--\x3e\n    \x3c!--</ng-template>--\x3e\n  \x3c!--</ngb-panel>--\x3e\n  \x3c!--&lt;!&ndash; <ngb-panel *ngFor="let group of groups" title="group.title">--\x3e\n    \x3c!--<ng-template ngbPanelContent>--\x3e\n      \x3c!--<app-ide-property-editor *ngFor="let editor of group.editors" [editor]="editor"></app-ide-property-editor>--\x3e\n    \x3c!--</ng-template>--\x3e\n  \x3c!--</ngb-panel> &ndash;&gt;--\x3e\n\x3c!--</ngb-accordion>--\x3e\n'
/***/},
/***/"./src/app/components/idepropertypanel/idepropertypanel.component.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"IdepropertypanelComponent",function(){return s});
/* harmony import */var o=n("./node_modules/@angular/core/esm5/core.js");var i=this&&this.__decorate||function(e,t,n,o){var i=arguments.length,r=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)if(s=e[a])r=(i<3?s(r):i>3?s(t,n,r):s(t,n))||r;return i>3&&r&&Object.defineProperty(t,n,r),r};var r=this&&this.__metadata||function(e,t){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(e,t)};var s=function(){function e(){this.groups=[{title:"基本属性",editors:[{type:"",label:""},{type:"",label:""}]}]}e.prototype.ngOnInit=function(){};e=i([Object(o["Component"])({selector:"app-idepropertypanel",template:n("./src/app/components/idepropertypanel/idepropertypanel.component.html"),styles:[n("./src/app/components/idepropertypanel/idepropertypanel.component.css")]}),r("design:paramtypes",[])],e);return e}();
/***/},
/***/"./src/app/components/perfect-scorll/perfect-scrollbar.component.css":
/***/function(e,t,n){t=e.exports=n("./node_modules/css-loader/lib/css-base.js")(false);
// imports
// module
t.push([e.i,"/*\n * Container style\n */\n .ps {\n  overflow: hidden !important;\n  overflow-anchor: none;\n  -ms-overflow-style: none;\n  touch-action: auto;\n  -ms-touch-action: auto; }\n\n/*\n * Scrollbar rail styles\n */\n.ps__rail-x {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  height: 15px;\n  /* there must be 'bottom' or 'top' for ps__rail-x */\n  bottom: 0px;\n  /* please don't change 'position' */\n  position: absolute; }\n\n.ps__rail-y {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  width: 15px;\n  /* there must be 'right' or 'left' for ps__rail-y */\n  right: 0;\n  /* please don't change 'position' */\n  position: absolute; }\n\n.ps--active-x > .ps__rail-x,\n.ps--active-y > .ps__rail-y {\n  display: block;\n  background-color: transparent; }\n\n.ps:hover > .ps__rail-x,\n.ps:hover > .ps__rail-y,\n.ps--focus > .ps__rail-x,\n.ps--focus > .ps__rail-y,\n.ps--scrolling-x > .ps__rail-x,\n.ps--scrolling-y > .ps__rail-y {\n  opacity: 0.6; }\n\n.ps__rail-x:hover,\n.ps__rail-y:hover,\n.ps__rail-x:focus,\n.ps__rail-y:focus {\n  background-color: #eee;\n  opacity: 0.9; }\n\n/*\n * Scrollbar thumb styles\n */\n.ps__thumb-x {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, height .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, height .2s ease-in-out;\n  height: 6px;\n  /* there must be 'bottom' for ps__thumb-x */\n  bottom: 2px;\n  /* please don't change 'position' */\n  position: absolute; }\n\n.ps__thumb-y {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, width .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, width .2s ease-in-out;\n  width: 6px;\n  /* there must be 'right' for ps__thumb-y */\n  right: 2px;\n  /* please don't change 'position' */\n  position: absolute; }\n\n.ps__rail-x:hover > .ps__thumb-x,\n.ps__rail-x:focus > .ps__thumb-x {\n  background-color: #999;\n  height: 11px; }\n\n.ps__rail-y:hover > .ps__thumb-y,\n.ps__rail-y:focus > .ps__thumb-y {\n  background-color: #999;\n  width: 11px; }\n\n/* MS supports */\n@supports (-ms-overflow-style: none) {\n  .ps {\n    overflow: auto !important; } }\n\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n  .ps {\n    overflow: auto !important; } }\n\n/*\n  TODO: Remove important flags after this bug if fixed:\n  https://github.com/angular/flex-layout/issues/381\n*/\nperfect-scrollbar {\n  position: relative;\n  display: block;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  /* stylelint-disable */\n  /* stylelint-enable */ }\n  perfect-scrollbar[hidden] {\n    display: none; }\n  perfect-scrollbar[fxflex] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -webkit-box-orient: column;\n    -webkit-box-direction: column;\n    height: auto;\n    min-width: 0;\n    min-height: 0; }\n    perfect-scrollbar[fxflex] > .ps {\n      flex: 1 1 auto;\n      -ms-flex: 1 1 auto;\n      -webkit-box-flex: 1;\n      width: auto;\n      height: auto;\n      min-width: 0;\n      min-height: 0; }\n  perfect-scrollbar[fxlayout] > .ps,\n  perfect-scrollbar[fxlayout] > .ps > .ps-content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    flex: 1 1 auto;\n    -ms-flex: 1 1 auto;\n    -webkit-box-flex: 1;\n    align-item: inherit;\n    place-content: inherit;\n    -webkit-box-pack: inherit;\n    -webkit-box-align: inherit;\n    -ms-flex-direction: inherit;\n        flex-direction: inherit;\n    -webkit-box-orient: inherit;\n    -webkit-box-direction: inherit;\n    width: 100%;\n    height: 100%; }\n  perfect-scrollbar[fxlayout=\"row\"] > .ps,\n  perfect-scrollbar[fxlayout=\"row\"] > .ps > .ps-content {\n    -ms-flex-direction: row !important;\n        flex-direction: row !important;\n    -webkit-box-orient: row !important;\n    -webkit-box-direction: row !important; }\n  perfect-scrollbar[fxlayout=\"column\"] > .ps,\n  perfect-scrollbar[fxlayout=\"column\"] > .ps > .ps-content {\n    -ms-flex-direction: column !important;\n        flex-direction: column !important;\n    -webkit-box-orient: column !important;\n    -webkit-box-direction: column !important; }\n  perfect-scrollbar > .ps {\n    position: static;\n    display: block;\n    width: inherit;\n    height: inherit;\n    max-width: inherit;\n    max-height: inherit; }\n    perfect-scrollbar > .ps > .ps-overlay {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      display: block;\n      overflow: hidden;\n      pointer-events: none; }\n      perfect-scrollbar > .ps > .ps-overlay .ps-indicator-top,\n      perfect-scrollbar > .ps > .ps-overlay .ps-indicator-left,\n      perfect-scrollbar > .ps > .ps-overlay .ps-indicator-right,\n      perfect-scrollbar > .ps > .ps-overlay .ps-indicator-bottom {\n        position: absolute;\n        opacity: 0;\n        transition: opacity 300ms ease-in-out; }\n      perfect-scrollbar > .ps > .ps-overlay .ps-indicator-top,\n      perfect-scrollbar > .ps > .ps-overlay .ps-indicator-bottom {\n        left: 0;\n        min-width: 100%;\n        min-height: 24px; }\n      perfect-scrollbar > .ps > .ps-overlay .ps-indicator-left,\n      perfect-scrollbar > .ps > .ps-overlay .ps-indicator-right {\n        top: 0;\n        min-width: 24px;\n        min-height: 100%; }\n      perfect-scrollbar > .ps > .ps-overlay .ps-indicator-top {\n        top: 0; }\n      perfect-scrollbar > .ps > .ps-overlay .ps-indicator-left {\n        left: 0; }\n      perfect-scrollbar > .ps > .ps-overlay .ps-indicator-right {\n        right: 0; }\n      perfect-scrollbar > .ps > .ps-overlay .ps-indicator-bottom {\n        bottom: 0; }\n    perfect-scrollbar > .ps.ps--active-y > .ps__rail-y {\n      top: 0 !important;\n      right: 0 !important;\n      left: auto !important;\n      width: 10px;\n      cursor: default;\n      transition: width 200ms linear, opacity 200ms linear, background-color 200ms linear; }\n      perfect-scrollbar > .ps.ps--active-y > .ps__rail-y:hover {\n        width: 15px; }\n    perfect-scrollbar > .ps.ps--active-x > .ps__rail-x {\n      top: auto !important;\n      bottom: 0 !important;\n      left: 0 !important;\n      height: 10px;\n      cursor: default;\n      transition: height 200ms linear, opacity 200ms linear, background-color 200ms linear; }\n      perfect-scrollbar > .ps.ps--active-x > .ps__rail-x:hover {\n        height: 15px; }\n    perfect-scrollbar > .ps.ps--active-x.ps--active-y > .ps__rail-y {\n      margin: 0 0 10px; }\n    perfect-scrollbar > .ps.ps--active-x.ps--active-y > .ps__rail-x {\n      margin: 0 10px 0 0; }\n    perfect-scrollbar > .ps.ps--scrolling-y > .ps__rail-y {\n      opacity: 0.9;\n      background-color: #eee; }\n    perfect-scrollbar > .ps.ps--scrolling-x > .ps__rail-x {\n      opacity: 0.9;\n      background-color: #eee; }\n  perfect-scrollbar.ps-show-always > .ps.ps--active-y > .ps__rail-y {\n    opacity: 0.6; }\n  perfect-scrollbar.ps-show-always > .ps.ps--active-x > .ps__rail-x {\n    opacity: 0.6; }\n  perfect-scrollbar.ps-show-active > .ps.ps--active-y > .ps-overlay:not(.ps-at-top) .ps-indicator-top {\n    opacity: 1;\n    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%); }\n  perfect-scrollbar.ps-show-active > .ps.ps--active-y > .ps-overlay:not(.ps-at-bottom) .ps-indicator-bottom {\n    opacity: 1;\n    background: linear-gradient(to top, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%); }\n  perfect-scrollbar.ps-show-active > .ps.ps--active-x > .ps-overlay:not(.ps-at-left) .ps-indicator-left {\n    opacity: 1;\n    background: linear-gradient(to right, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%); }\n  perfect-scrollbar.ps-show-active > .ps.ps--active-x > .ps-overlay:not(.ps-at-right) .ps-indicator-right {\n    opacity: 1;\n    background: linear-gradient(to left, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%); }\n  perfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-y > .ps-overlay.ps-at-top .ps-indicator-top {\n    background: linear-gradient(to bottom, rgba(170, 170, 170, 0.5) 0%, rgba(170, 170, 170, 0) 100%); }\n    perfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-y > .ps-overlay.ps-at-top .ps-indicator-top.ps-indicator-show {\n      opacity: 1; }\n  perfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-y > .ps-overlay.ps-at-bottom .ps-indicator-bottom {\n    background: linear-gradient(to top, rgba(170, 170, 170, 0.5) 0%, rgba(170, 170, 170, 0) 100%); }\n    perfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-y > .ps-overlay.ps-at-bottom .ps-indicator-bottom.ps-indicator-show {\n      opacity: 1; }\n  perfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-x > .ps-overlay.ps-at-left .ps-indicator-left {\n    background: linear-gradient(to right, rgba(170, 170, 170, 0.5) 0%, rgba(170, 170, 170, 0) 100%); }\n    perfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-x > .ps-overlay.ps-at-left .ps-indicator-left.ps-indicator-show {\n      opacity: 1; }\n  perfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-x > .ps-overlay.ps-at-right .ps-indicator-right {\n    background: linear-gradient(to left, rgba(170, 170, 170, 0.5) 0%, rgba(170, 170, 170, 0) 100%); }\n    perfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-x > .ps-overlay.ps-at-right .ps-indicator-right.ps-indicator-show {\n      opacity: 1; }",""]);
// exports
/*** EXPORTS FROM exports-loader ***/e.exports=e.exports.toString();
/***/},
/***/"./src/app/components/perfect-scorll/perfect-scrollbar.component.html":
/***/function(e,t){e.exports='<div style="position: static;" [class.ps]="usePSClass" [perfectScrollbar]="config" [disabled]="disabled">\n  <div class="ps-content">\n    <ng-content></ng-content>\n  </div>\n\n  <div *ngIf="scrollIndicators" class="ps-overlay" [class.ps-at-top]="states.top" [class.ps-at-left]="states.left" [class.ps-at-right]="states.right" [class.ps-at-bottom]="states.bottom">\n    <div class="ps-indicator-top" [class.ps-indicator-show]="indicatorY && interaction"></div>\n    <div class="ps-indicator-left" [class.ps-indicator-show]="indicatorX && interaction"></div>\n    <div class="ps-indicator-right" [class.ps-indicator-show]="indicatorX && interaction"></div>\n    <div class="ps-indicator-bottom" [class.ps-indicator-show]="indicatorY && interaction"></div>\n  </div>\n</div>\n'
/***/},
/***/"./src/app/components/perfect-scorll/perfect-scrollbar.component.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"PerfectScrollbarComponent",function(){return b});
/* harmony import */var o=n("./node_modules/rxjs/Subject.js");
/* harmony import */var i=n.n(o);
/* harmony import */var r=n("./node_modules/rxjs/observable/fromEvent.js");
/* harmony import */var s=n.n(r);
/* harmony import */var a=n("./node_modules/rxjs/operators.js");
/* harmony import */var c=n.n(a);
/* harmony import */var p=n("./node_modules/rxjs/observable/merge.js");
/* harmony import */var l=n.n(p);
/* harmony import */var d=n("./node_modules/@angular/core/esm5/core.js");
/* harmony import */var u=n("./node_modules/@angular/common/esm5/common.js");
/* harmony import */var f=n("./src/app/components/perfect-scorll/perfect-scrollbar.directive.ts");
/* harmony import */var h=n("./src/app/components/perfect-scorll/perfect-scrollbar.interfaces.ts");var m=this&&this.__decorate||function(e,t,n,o){var i=arguments.length,r=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)if(s=e[a])r=(i<3?s(r):i>3?s(t,n,r):s(t,n))||r;return i>3&&r&&Object.defineProperty(t,n,r),r};var v=this&&this.__metadata||function(e,t){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(e,t)};var g=this&&this.__param||function(e,t){return function(n,o){t(n,o,e)}};var b=function(){function e(e,t,n){this.zone=e;this.cdRef=t;this.platformId=n;this.states={};this.indicatorX=false;this.indicatorY=false;this.interaction=false;this.scrollPositionX=0;this.scrollPositionY=0;this.scrollDirectionX=0;this.scrollDirectionY=0;this.usePropagationX=false;this.usePropagationY=false;this.allowPropagationX=false;this.allowPropagationY=false;this.stateTimeout=null;this.ngDestroy=new o["Subject"];this.stateUpdate=new o["Subject"];this.disabled=false;this.usePSClass=true;this.autoPropagation=false;this.scrollIndicators=false;this.psScrollY=new d["EventEmitter"];this.psScrollX=new d["EventEmitter"];this.psScrollUp=new d["EventEmitter"];this.psScrollDown=new d["EventEmitter"];this.psScrollLeft=new d["EventEmitter"];this.psScrollRight=new d["EventEmitter"];this.psYReachEnd=new d["EventEmitter"];this.psYReachStart=new d["EventEmitter"];this.psXReachEnd=new d["EventEmitter"];this.psXReachStart=new d["EventEmitter"]}e.prototype.ngOnInit=function(){var e=this;if(Object(u["isPlatformBrowser"])(this.platformId)){this.stateUpdate.pipe(Object(a["takeUntil"])(this.ngDestroy),Object(a["distinctUntilChanged"])(function(t,n){return t===n&&!e.stateTimeout})).subscribe(function(t){if(e.stateTimeout&&typeof window!=="undefined"){window.clearTimeout(e.stateTimeout);e.stateTimeout=null}if(t==="x"||t==="y"){e.interaction=false;if(t==="x"){e.indicatorX=false;e.states.left=false;e.states.right=false;if(e.autoPropagation&&e.usePropagationX){e.allowPropagationX=false}}else if(t==="y"){e.indicatorY=false;e.states.top=false;e.states.bottom=false;if(e.autoPropagation&&e.usePropagationY){e.allowPropagationY=false}}}else{if(t==="left"||t==="right"){e.states.left=false;e.states.right=false;e.states[t]=true;if(e.autoPropagation&&e.usePropagationX){e.indicatorX=true}}else if(t==="top"||t==="bottom"){e.states.top=false;e.states.bottom=false;e.states[t]=true;if(e.autoPropagation&&e.usePropagationY){e.indicatorY=true}}if(e.autoPropagation&&typeof window!=="undefined"){e.stateTimeout=window.setTimeout(function(){e.indicatorX=false;e.indicatorY=false;e.stateTimeout=null;if(e.interaction&&(e.states.left||e.states.right)){e.allowPropagationX=true}if(e.interaction&&(e.states.top||e.states.bottom)){e.allowPropagationY=true}e.cdRef.markForCheck()},500)}}e.cdRef.markForCheck();e.cdRef.detectChanges()});this.zone.runOutsideAngular(function(){if(e.directiveRef){var t=e.directiveRef.elementRef.nativeElement;Object(r["fromEvent"])(t,"wheel").pipe(Object(a["takeUntil"])(e.ngDestroy)).subscribe(function(t){if(!e.disabled&&e.autoPropagation){var n=t.deltaX;var o=t.deltaY;e.checkPropagation(t,n,o)}});Object(r["fromEvent"])(t,"touchmove").pipe(Object(a["takeUntil"])(e.ngDestroy)).subscribe(function(t){if(!e.disabled&&e.autoPropagation){var n=t.touches[0].clientX;var o=t.touches[0].clientY;var i=n-e.scrollPositionX;var r=o-e.scrollPositionY;e.checkPropagation(t,i,r);e.scrollPositionX=n;e.scrollPositionY=o}});Object(p["merge"])(Object(r["fromEvent"])(t,"ps-scroll-x").pipe(Object(a["map"])(function(e){return e.state="x"})),Object(r["fromEvent"])(t,"ps-scroll-y").pipe(Object(a["map"])(function(e){return e.state="y"})),Object(r["fromEvent"])(t,"ps-x-reach-end").pipe(Object(a["map"])(function(e){return e.state="right"})),Object(r["fromEvent"])(t,"ps-y-reach-end").pipe(Object(a["map"])(function(e){return e.state="bottom"})),Object(r["fromEvent"])(t,"ps-x-reach-start").pipe(Object(a["map"])(function(e){return e.state="left"})),Object(r["fromEvent"])(t,"ps-y-reach-start").pipe(Object(a["map"])(function(e){return e.state="top"}))).pipe(Object(a["takeUntil"])(e.ngDestroy)).subscribe(function(t){if(!e.disabled&&(e.autoPropagation||e.scrollIndicators)){e.stateUpdate.next(t.state)}})}});window.setTimeout(function(){h["PerfectScrollbarEvents"].forEach(function(t){if(e.directiveRef){e.directiveRef[t]=e[t]}})},0)}};e.prototype.ngOnDestroy=function(){if(Object(u["isPlatformBrowser"])(this.platformId)){this.ngDestroy.next();this.ngDestroy.unsubscribe();if(this.stateTimeout&&typeof window!=="undefined"){window.clearTimeout(this.stateTimeout)}}};e.prototype.ngDoCheck=function(){if(Object(u["isPlatformBrowser"])(this.platformId)){if(!this.disabled&&this.autoPropagation&&this.directiveRef){var e=this.directiveRef.elementRef.nativeElement;this.usePropagationX=e.classList.contains("ps--active-x");this.usePropagationY=e.classList.contains("ps--active-y")}}};e.prototype.checkPropagation=function(e,t,n){this.interaction=true;var o=t<0?-1:1;var i=n<0?-1:1;if(this.usePropagationX&&this.usePropagationY||this.usePropagationX&&(!this.allowPropagationX||this.scrollDirectionX!==o)||this.usePropagationY&&(!this.allowPropagationY||this.scrollDirectionY!==i)){e.preventDefault();e.stopPropagation()}if(!!t){this.scrollDirectionX=o}if(!!n){this.scrollDirectionY=i}this.stateUpdate.next("interaction");this.cdRef.detectChanges()};m([Object(d["Input"])(),v("design:type",Object)],e.prototype,"disabled",void 0);m([Object(d["Input"])(),v("design:type",Object)],e.prototype,"usePSClass",void 0);m([Object(d["HostBinding"])("class.ps-show-limits"),Object(d["Input"])(),v("design:type",Object)],e.prototype,"autoPropagation",void 0);m([Object(d["HostBinding"])("class.ps-show-active"),Object(d["Input"])(),v("design:type",Object)],e.prototype,"scrollIndicators",void 0);m([Object(d["Input"])(),v("design:type",Object)],e.prototype,"config",void 0);m([Object(d["Output"])(),v("design:type",d["EventEmitter"])],e.prototype,"psScrollY",void 0);m([Object(d["Output"])(),v("design:type",d["EventEmitter"])],e.prototype,"psScrollX",void 0);m([Object(d["Output"])(),v("design:type",d["EventEmitter"])],e.prototype,"psScrollUp",void 0);m([Object(d["Output"])(),v("design:type",d["EventEmitter"])],e.prototype,"psScrollDown",void 0);m([Object(d["Output"])(),v("design:type",d["EventEmitter"])],e.prototype,"psScrollLeft",void 0);m([Object(d["Output"])(),v("design:type",d["EventEmitter"])],e.prototype,"psScrollRight",void 0);m([Object(d["Output"])(),v("design:type",d["EventEmitter"])],e.prototype,"psYReachEnd",void 0);m([Object(d["Output"])(),v("design:type",d["EventEmitter"])],e.prototype,"psYReachStart",void 0);m([Object(d["Output"])(),v("design:type",d["EventEmitter"])],e.prototype,"psXReachEnd",void 0);m([Object(d["Output"])(),v("design:type",d["EventEmitter"])],e.prototype,"psXReachStart",void 0);m([Object(d["ViewChild"])(f["PerfectScrollbarDirective"]),v("design:type",f["PerfectScrollbarDirective"])],e.prototype,"directiveRef",void 0);e=m([Object(d["Component"])({selector:"perfect-scrollbar",exportAs:"ngxPerfectScrollbar",template:n("./src/app/components/perfect-scorll/perfect-scrollbar.component.html"),styles:[n("./src/app/components/perfect-scorll/perfect-scrollbar.component.css")],encapsulation:d["ViewEncapsulation"].None}),g(2,Object(d["Inject"])(d["PLATFORM_ID"])),v("design:paramtypes",[d["NgZone"],d["ChangeDetectorRef"],Object])],e);return e}();
/***/},
/***/"./src/app/components/perfect-scorll/perfect-scrollbar.directive.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"PerfectScrollbarDirective",function(){return g});
/* harmony import */var o=n("./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
/* harmony import */var i=n("./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js");
/* harmony import */var r=n("./node_modules/rxjs/Subject.js");
/* harmony import */var s=n.n(r);
/* harmony import */var a=n("./node_modules/rxjs/observable/fromEvent.js");
/* harmony import */var c=n.n(a);
/* harmony import */var p=n("./node_modules/rxjs/operators.js");
/* harmony import */var l=n.n(p);
/* harmony import */var d=n("./node_modules/@angular/core/esm5/core.js");
/* harmony import */var u=n("./node_modules/@angular/common/esm5/common.js");
/* harmony import */var f=n("./src/app/components/perfect-scorll/perfect-scrollbar.interfaces.ts");var h=this&&this.__decorate||function(e,t,n,o){var i=arguments.length,r=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)if(s=e[a])r=(i<3?s(r):i>3?s(t,n,r):s(t,n))||r;return i>3&&r&&Object.defineProperty(t,n,r),r};var m=this&&this.__metadata||function(e,t){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(e,t)};var v=this&&this.__param||function(e,t){return function(n,o){t(n,o,e)}};var g=function(){function e(e,t,n,o,i){this.zone=e;this.differs=t;this.elementRef=n;this.platformId=o;this.defaults=i;this.instance=null;this.ro=null;this.timeout=null;this.animation=null;this.configDiff=null;this.ngDestroy=new r["Subject"];this.disabled=false;this.psScrollY=new d["EventEmitter"];this.psScrollX=new d["EventEmitter"];this.psScrollUp=new d["EventEmitter"];this.psScrollDown=new d["EventEmitter"];this.psScrollLeft=new d["EventEmitter"];this.psScrollRight=new d["EventEmitter"];this.psYReachEnd=new d["EventEmitter"];this.psYReachStart=new d["EventEmitter"];this.psXReachEnd=new d["EventEmitter"];this.psXReachStart=new d["EventEmitter"]}e.prototype.ngOnInit=function(){var e=this;if(!this.disabled&&Object(u["isPlatformBrowser"])(this.platformId)){var t=new f["PerfectScrollbarConfig"](this.defaults);t.assign(this.config);// Custom configuration
this.zone.runOutsideAngular(function(){e.instance=new o["default"](e.elementRef.nativeElement,t)});if(!this.configDiff){this.configDiff=this.differs.find(this.config||{}).create();this.configDiff.diff(this.config||{})}this.zone.runOutsideAngular(function(){e.ro=new i["default"](function(t,n){e.update()});if(e.elementRef.nativeElement.children[0]){e.ro.observe(e.elementRef.nativeElement.children[0])}e.ro.observe(e.elementRef.nativeElement)});this.zone.runOutsideAngular(function(){f["PerfectScrollbarEvents"].forEach(function(t){var n=t.replace(/([A-Z])/g,function(e){return"-"+e.toLowerCase()});Object(a["fromEvent"])(e.elementRef.nativeElement,n).pipe(Object(p["debounceTime"])(20),Object(p["takeUntil"])(e.ngDestroy)).subscribe(function(n){e[t].emit(n)})})})}};e.prototype.ngOnDestroy=function(){var e=this;if(Object(u["isPlatformBrowser"])(this.platformId)){this.ngDestroy.next();this.ngDestroy.complete();if(this.ro){this.ro.disconnect()}if(this.timeout&&typeof window!=="undefined"){window.clearTimeout(this.timeout)}this.zone.runOutsideAngular(function(){if(e.instance){e.instance.destroy()}});this.instance=null}};e.prototype.ngDoCheck=function(){if(!this.disabled&&this.configDiff&&Object(u["isPlatformBrowser"])(this.platformId)){var e=this.configDiff.diff(this.config||{});if(e){this.ngOnDestroy();this.ngOnInit()}}};e.prototype.ngOnChanges=function(e){if(e["disabled"]&&!e["disabled"].isFirstChange()&&Object(u["isPlatformBrowser"])(this.platformId)){if(e["disabled"].currentValue!==e["disabled"].previousValue){if(e["disabled"].currentValue===true){this.ngOnDestroy()}else if(e["disabled"].currentValue===false){this.ngOnInit()}}}};e.prototype.ps=function(){return this.instance};e.prototype.update=function(){var e=this;if(typeof window!=="undefined"){if(this.timeout){window.clearTimeout(this.timeout)}this.timeout=window.setTimeout(function(){if(!e.disabled&&e.configDiff){try{e.zone.runOutsideAngular(function(){if(e.instance){e.instance.update()}})}catch(e){
// Update can be finished after destroy so catch errors
}}},0)}};e.prototype.geometry=function(e){if(e===void 0){e="scroll"}return new f["Geometry"](this.elementRef.nativeElement[e+"Left"],this.elementRef.nativeElement[e+"Top"],this.elementRef.nativeElement[e+"Width"],this.elementRef.nativeElement[e+"Height"])};e.prototype.position=function(e){if(e===void 0){e=false}if(!e&&this.instance){return new f["Position"](this.instance.reach.x||0,this.instance.reach.y||0)}else{return new f["Position"](this.elementRef.nativeElement.scrollLeft,this.elementRef.nativeElement.scrollTop)}};e.prototype.scrollable=function(e){if(e===void 0){e="any"}var t=this.elementRef.nativeElement;if(e==="any"){return t.classList.contains("ps--active-x")||t.classList.contains("ps--active-y")}else if(e==="both"){return t.classList.contains("ps--active-x")&&t.classList.contains("ps--active-y")}else{return t.classList.contains("ps--active-"+e)}};e.prototype.scrollTo=function(e,t,n){if(!this.disabled){if(t==null&&n==null){this.animateScrolling("scrollTop",e,n)}else{if(e!=null){this.animateScrolling("scrollLeft",e,n)}if(t!=null){this.animateScrolling("scrollTop",t,n)}}}};e.prototype.scrollToX=function(e,t){this.animateScrolling("scrollLeft",e,t)};e.prototype.scrollToY=function(e,t){this.animateScrolling("scrollTop",e,t)};e.prototype.scrollToTop=function(e,t){this.animateScrolling("scrollTop",e||0,t)};e.prototype.scrollToLeft=function(e,t){this.animateScrolling("scrollLeft",e||0,t)};e.prototype.scrollToRight=function(e,t){var n=this.elementRef.nativeElement.scrollWidth-this.elementRef.nativeElement.clientWidth;this.animateScrolling("scrollLeft",n-(e||0),t)};e.prototype.scrollToBottom=function(e,t){var n=this.elementRef.nativeElement.scrollHeight-this.elementRef.nativeElement.clientHeight;this.animateScrolling("scrollTop",n-(e||0),t)};e.prototype.scrollToElement=function(e,t,n){var o=this.elementRef.nativeElement.querySelector(e);if(o){var i=o.getBoundingClientRect();var r=this.elementRef.nativeElement.getBoundingClientRect();if(this.elementRef.nativeElement.classList.contains("ps--active-x")){var s=this.elementRef.nativeElement["scrollLeft"];var a=i.left-r.left+s;this.animateScrolling("scrollLeft",a+(t||0),n)}if(this.elementRef.nativeElement.classList.contains("ps--active-y")){var s=this.elementRef.nativeElement["scrollTop"];var a=i.top-r.top+s;this.animateScrolling("scrollTop",a+(t||0),n)}}};e.prototype.animateScrolling=function(e,t,n){var o=this;if(this.animation){window.cancelAnimationFrame(this.animation);this.animation=null}if(!n||typeof window==="undefined"){var i=this.elementRef.nativeElement[e];this.elementRef.nativeElement[e]=t}else if(t!==this.elementRef.nativeElement[e]){var r=0;var s=0;var a=performance.now();var c=this.elementRef.nativeElement[e];var p=(c-t)/2;var l=function(i){s+=Math.PI/(n/(i-a));r=Math.round(t+p+p*Math.cos(s));
// Only continue animation if scroll position has not changed
if(o.elementRef.nativeElement[e]===c){if(s>=Math.PI){o.animateScrolling(e,t,0)}else{o.elementRef.nativeElement[e]=r;
// On a zoomed out page the resulting offset may differ
c=o.elementRef.nativeElement[e];a=i;o.animation=window.requestAnimationFrame(l)}}};window.requestAnimationFrame(l)}};h([Object(d["Input"])(),m("design:type",Object)],e.prototype,"disabled",void 0);h([Object(d["Input"])("perfectScrollbar"),m("design:type",Object)],e.prototype,"config",void 0);h([Object(d["Output"])(),m("design:type",d["EventEmitter"])],e.prototype,"psScrollY",void 0);h([Object(d["Output"])(),m("design:type",d["EventEmitter"])],e.prototype,"psScrollX",void 0);h([Object(d["Output"])(),m("design:type",d["EventEmitter"])],e.prototype,"psScrollUp",void 0);h([Object(d["Output"])(),m("design:type",d["EventEmitter"])],e.prototype,"psScrollDown",void 0);h([Object(d["Output"])(),m("design:type",d["EventEmitter"])],e.prototype,"psScrollLeft",void 0);h([Object(d["Output"])(),m("design:type",d["EventEmitter"])],e.prototype,"psScrollRight",void 0);h([Object(d["Output"])(),m("design:type",d["EventEmitter"])],e.prototype,"psYReachEnd",void 0);h([Object(d["Output"])(),m("design:type",d["EventEmitter"])],e.prototype,"psYReachStart",void 0);h([Object(d["Output"])(),m("design:type",d["EventEmitter"])],e.prototype,"psXReachEnd",void 0);h([Object(d["Output"])(),m("design:type",d["EventEmitter"])],e.prototype,"psXReachStart",void 0);e=h([Object(d["Directive"])({selector:"[perfectScrollbar]",exportAs:"ngxPerfectScrollbar"}),v(3,Object(d["Inject"])(d["PLATFORM_ID"])),v(4,Object(d["Optional"])()),v(4,Object(d["Inject"])(f["PERFECT_SCROLLBAR_CONFIG"])),m("design:paramtypes",[d["NgZone"],d["KeyValueDiffers"],d["ElementRef"],Object,Object])],e);return e}();
/***/},
/***/"./src/app/components/perfect-scorll/perfect-scrollbar.interfaces.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"PERFECT_SCROLLBAR_CONFIG",function(){return i});
/* harmony export (binding) */n.d(t,"Geometry",function(){return r});
/* harmony export (binding) */n.d(t,"Position",function(){return s});
/* harmony export (binding) */n.d(t,"PerfectScrollbarEvents",function(){return a});
/* harmony export (binding) */n.d(t,"PerfectScrollbarConfig",function(){return c});
/* harmony import */var o=n("./node_modules/@angular/core/esm5/core.js");var i=new o["InjectionToken"]("PERFECT_SCROLLBAR_CONFIG");var r=function(){function e(e,t,n,o){this.x=e;this.y=t;this.w=n;this.h=o}return e}();var s=function(){function e(e,t){this.x=e;this.y=t}return e}();var a=["psScrollY","psScrollX","psScrollUp","psScrollDown","psScrollLeft","psScrollRight","psYReachEnd","psYReachStart","psXReachEnd","psXReachStart"];var c=function(){function e(e){if(e===void 0){e={}}this.assign(e)}e.prototype.assign=function(e){if(e===void 0){e={}}for(var t in e){this[t]=e[t]}};return e}();
/***/},
/***/"./src/app/components/perfect-scorll/perfect-scrollbar.module.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"PerfectScrollbarModule",function(){return c});
/* harmony import */var o=n("./node_modules/@angular/core/esm5/core.js");
/* harmony import */var i=n("./node_modules/@angular/common/esm5/common.js");
/* harmony import */var r=n("./src/app/components/perfect-scorll/perfect-scrollbar.component.ts");
/* harmony import */var s=n("./src/app/components/perfect-scorll/perfect-scrollbar.directive.ts");var a=this&&this.__decorate||function(e,t,n,o){var i=arguments.length,r=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)if(s=e[a])r=(i<3?s(r):i>3?s(t,n,r):s(t,n))||r;return i>3&&r&&Object.defineProperty(t,n,r),r};var c=function(){function e(){}e=a([Object(o["NgModule"])({imports:[i["CommonModule"]],declarations:[r["PerfectScrollbarComponent"],s["PerfectScrollbarDirective"]],exports:[i["CommonModule"],r["PerfectScrollbarComponent"],s["PerfectScrollbarDirective"]]})],e);return e}();
/***/},
/***/"./src/app/framework/directives/angular-draggable.directive.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"AngularDraggableDirective",function(){return a});
/* harmony import */var o=n("./node_modules/@angular/core/esm5/core.js");
/* harmony import */var i=n("./src/app/framework/directives/models/position.ts");var r=this&&this.__decorate||function(e,t,n,o){var i=arguments.length,r=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)if(s=e[a])r=(i<3?s(r):i>3?s(t,n,r):s(t,n))||r;return i>3&&r&&Object.defineProperty(t,n,r),r};var s=this&&this.__metadata||function(e,t){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(e,t)};var a=function(){function e(e,t){this.el=e;this.renderer=t;this.allowDrag=true;this.moving=false;this.orignal=null;this.oldTrans=new i["Position"](0,0);this.tempTrans=new i["Position"](0,0);this.oldZIndex="";this.oldPosition="";this._zIndex="";this.needTransform=false;this.started=new o["EventEmitter"];this.stopped=new o["EventEmitter"];this.edge=new o["EventEmitter"];
/** List of allowed out of bounds edges **/this.outOfBounds={top:false,right:false,bottom:false,left:false};
/** Round the position to nearest grid */this.gridSize=1;
/** Whether to limit the element stay in the bounds */this.inBounds=false;
/** Whether the element should use it's previous drag position on a new drag event. */this.trackPosition=true;
/** Input css scale transform of element so translations are correct */this.scale=1;
/** Whether to prevent default event */this.preventDefaultEvent=false;
/** Set initial position by offsets */this.position={x:0,y:0};this.maxWidth=0;this.maxHeight=0;this.minWidth=0;this.minHeight=0;
/** Emit position offsets when moving */this.movingOffset=new o["EventEmitter"];
/** Emit position offsets when put back */this.endOffset=new o["EventEmitter"]}Object.defineProperty(e.prototype,"zIndex",{
/** Set z-index when not dragging */
set:function(e){this.renderer.setStyle(this.el.nativeElement,"z-index",e);this._zIndex=e},enumerable:true,configurable:true});Object.defineProperty(e.prototype,"ngDraggable",{set:function(e){if(e!==undefined&&e!==null&&e!==""){this.allowDrag=!!e;var t=this.handle?this.handle:this.el.nativeElement;if(this.allowDrag){this.renderer.addClass(t,"ng-draggable")}else{this.renderer.removeClass(t,"ng-draggable")}}},enumerable:true,configurable:true});e.prototype.ngOnInit=function(){if(this.allowDrag){var e=this.handle?this.handle:this.el.nativeElement;this.renderer.addClass(e,"ng-draggable")}this.resetPosition()};e.prototype.ngOnChanges=function(e){if(e["position"]&&!e["position"].isFirstChange()){var t=e["position"].currentValue;if(!this.moving){if(i["Position"].isIPosition(t)){this.oldTrans.set(t)}else{this.oldTrans.reset()}this.transform()}else{this.needTransform=true}}};e.prototype.resetPosition=function(){if(i["Position"].isIPosition(this.position)){this.oldTrans.set(this.position)}else{this.oldTrans.reset()}this.tempTrans.reset();this.transform()};e.prototype.moveTo=function(e){if(this.orignal){e.subtract(this.orignal);this.tempTrans.set(e);this.transform();if(this.bounds){this.edge.emit(this.boundsCheck())}this.movingOffset.emit({x:this.tempTrans.x+this.oldTrans.x,y:this.tempTrans.y+this.oldTrans.y})}};e.prototype.transform=function(){var e=this.tempTrans.x+this.oldTrans.x;var t=this.tempTrans.y+this.oldTrans.y;
// Snap to grid: by grid size
if(this.gridSize>1){e=Math.round(e/this.gridSize)*this.gridSize;t=Math.round(t/this.gridSize)*this.gridSize}var n="translate("+e+"px, "+t+"px)";if(this.scale!==1){n+=" scale("+this.scale+")"}this.renderer.setStyle(this.el.nativeElement,"transform",n);this.renderer.setStyle(this.el.nativeElement,"-webkit-transform",n);this.renderer.setStyle(this.el.nativeElement,"-ms-transform",n);this.renderer.setStyle(this.el.nativeElement,"-moz-transform",n);this.renderer.setStyle(this.el.nativeElement,"-o-transform",n)};e.prototype.pickUp=function(){
// get old z-index:
this.oldZIndex=this.el.nativeElement.style.zIndex?this.el.nativeElement.style.zIndex:"";if(window){this.oldZIndex=window.getComputedStyle(this.el.nativeElement,null).getPropertyValue("z-index")}if(this.zIndexMoving){this.renderer.setStyle(this.el.nativeElement,"z-index",this.zIndexMoving)}if(!this.moving){this.started.emit(this.el.nativeElement);this.moving=true}};e.prototype.boundsCheck=function(){if(this.bounds){var e=this.bounds.getBoundingClientRect();var t=this.el.nativeElement.getBoundingClientRect();var n=e.right,o=e.left;if(this.region){switch(this.region){case"west":n=n-(this.bounds.clientWidth-this.maxWidth);o=o+this.minWidth;break;case"east":n=n-this.minWidth;o=o+(this.bounds.clientWidth-this.maxWidth);break}}var i={top:this.outOfBounds.top?true:e.top<t.top,right:this.outOfBounds.right?true:n>t.right,bottom:this.outOfBounds.bottom?true:e.bottom>t.bottom,left:this.outOfBounds.left?true:o<t.left};if(this.inBounds){if(!i.top){this.tempTrans.y-=t.top-e.top}if(!i.bottom){this.tempTrans.y-=t.bottom-e.bottom}if(!i.right){this.tempTrans.x-=t.right-n}if(!i.left){this.tempTrans.x-=t.left-o}this.transform()}return i}};e.prototype.putBack=function(){if(this._zIndex){this.renderer.setStyle(this.el.nativeElement,"z-index",this._zIndex)}else if(this.zIndexMoving){if(this.oldZIndex){this.renderer.setStyle(this.el.nativeElement,"z-index",this.oldZIndex)}else{this.el.nativeElement.style.removeProperty("z-index")}}if(this.moving){this.stopped.emit(this.el.nativeElement);if(this.needTransform){if(i["Position"].isIPosition(this.position)){this.oldTrans.set(this.position)}else{this.oldTrans.reset()}this.transform();this.needTransform=false}if(this.bounds){this.edge.emit(this.boundsCheck())}this.moving=false;this.endOffset.emit({x:this.tempTrans.x+this.oldTrans.x,y:this.tempTrans.y+this.oldTrans.y});if(this.trackPosition){this.oldTrans.add(this.tempTrans)}this.tempTrans.reset();if(!this.trackPosition){this.transform()}}};e.prototype.checkHandleTarget=function(e,t){
// Checks if the target is the element clicked, then checks each child element of element as well
// Ignores button clicks
// Ignore elements of type button
if(t.tagName==="BUTTON"){return false}
// If the target was found, return true (handle was found)
if(t===e){return true}
// Recursively iterate this elements children
for(var n in t.children){if(t.children.hasOwnProperty(n)){if(this.checkHandleTarget(e,t.children[n])){return true}}}
// Handle was not found in this lineage
// Note: return false is ignore unless it is the parent element
return false};e.prototype.onMouseDown=function(e){
// 1. skip right click;
if(e instanceof MouseEvent&&e.button===2){return}
// 2. if handle is set, the element can only be moved by handle
var t=e.target||e.srcElement;if(this.handle!==undefined&&!this.checkHandleTarget(t,this.handle)){return}if(this.preventDefaultEvent){e.stopPropagation();e.preventDefault()}this.orignal=i["Position"].fromEvent(e);this.pickUp();this.renderer.setStyle(t,"background","#495057")};e.prototype.onMouseLeave=function(e){this.putBack();this.renderer.removeStyle(this.el.nativeElement,"background")};e.prototype.onMouseMove=function(e){if(this.moving&&this.allowDrag){if(this.preventDefaultEvent){e.stopPropagation();e.preventDefault()}this.moveTo(i["Position"].fromEvent(e))}};r([Object(o["Output"])(),s("design:type",Object)],e.prototype,"started",void 0);r([Object(o["Output"])(),s("design:type",Object)],e.prototype,"stopped",void 0);r([Object(o["Output"])(),s("design:type",Object)],e.prototype,"edge",void 0);r([Object(o["Input"])(),s("design:type",HTMLElement)],e.prototype,"handle",void 0);r([Object(o["Input"])(),s("design:type",HTMLElement)],e.prototype,"bounds",void 0);r([Object(o["Input"])(),s("design:type",Object)],e.prototype,"outOfBounds",void 0);r([Object(o["Input"])(),s("design:type",Object)],e.prototype,"gridSize",void 0);r([Object(o["Input"])(),s("design:type",String)],e.prototype,"zIndexMoving",void 0);r([Object(o["Input"])(),s("design:type",String),s("design:paramtypes",[String])],e.prototype,"zIndex",null);r([Object(o["Input"])(),s("design:type",Object)],e.prototype,"inBounds",void 0);r([Object(o["Input"])(),s("design:type",Object)],e.prototype,"trackPosition",void 0);r([Object(o["Input"])(),s("design:type",Object)],e.prototype,"scale",void 0);r([Object(o["Input"])(),s("design:type",Object)],e.prototype,"preventDefaultEvent",void 0);r([Object(o["Input"])(),s("design:type",Object)],e.prototype,"position",void 0);r([Object(o["Input"])(),s("design:type",Object)],e.prototype,"maxWidth",void 0);r([Object(o["Input"])(),s("design:type",Object)],e.prototype,"maxHeight",void 0);r([Object(o["Input"])(),s("design:type",Object)],e.prototype,"minWidth",void 0);r([Object(o["Input"])(),s("design:type",Object)],e.prototype,"minHeight",void 0);r([Object(o["Input"])(),s("design:type",String)],e.prototype,"region",void 0);r([Object(o["Output"])(),s("design:type",Object)],e.prototype,"movingOffset",void 0);r([Object(o["Output"])(),s("design:type",Object)],e.prototype,"endOffset",void 0);r([Object(o["Input"])(),s("design:type",Object),s("design:paramtypes",[Object])],e.prototype,"ngDraggable",null);r([Object(o["HostListener"])("mousedown",["$event"]),Object(o["HostListener"])("touchstart",["$event"]),s("design:type",Function),s("design:paramtypes",[Object]),s("design:returntype",void 0)],e.prototype,"onMouseDown",null);r([Object(o["HostListener"])("document:mouseup",["$event"]),Object(o["HostListener"])("document:mouseleave",["$event"]),Object(o["HostListener"])("document:touchend",["$event"]),Object(o["HostListener"])("document:touchcancel",["$event"]),s("design:type",Function),s("design:paramtypes",[Object]),s("design:returntype",void 0)],e.prototype,"onMouseLeave",null);r([Object(o["HostListener"])("document:mousemove",["$event"]),Object(o["HostListener"])("document:touchmove",["$event"]),s("design:type",Function),s("design:paramtypes",[Object]),s("design:returntype",void 0)],e.prototype,"onMouseMove",null);e=r([Object(o["Directive"])({selector:"[ngDraggable]",exportAs:"ngDraggable"}),s("design:paramtypes",[o["ElementRef"],o["Renderer2"]])],e);return e}();
/***/},
/***/"./src/app/framework/directives/angular-resizeable.directive.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"AngularResizableDirective",function(){return p});
/* harmony import */var o=n("./node_modules/@angular/core/esm5/core.js");
/* harmony import */var i=n("./src/app/framework/directives/widgets/resize-handle.ts");
/* harmony import */var r=n("./src/app/framework/directives/models/position.ts");
/* harmony import */var s=n("./src/app/framework/directives/models/size.ts");var a=this&&this.__decorate||function(e,t,n,o){var i=arguments.length,r=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)if(s=e[a])r=(i<3?s(r):i>3?s(t,n,r):s(t,n))||r;return i>3&&r&&Object.defineProperty(t,n,r),r};var c=this&&this.__metadata||function(e,t){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(e,t)};var p=function(){function e(e,t){this.el=e;this.renderer=t;this._resizable=true;this._handles={};this._handleType=[];this._handleResizing=null;this._origMousePos=null;
/** Original Size and Position */this._origSize=null;this._origPos=null;
/** Current Size and Position */this._currSize=null;this._currPos=null;
/** Initial Size and Position */this._initSize=null;this._initPos=null;
/**
         * Which handles can be used for resizing.
         * @example
         * [rzHandles] = ''n,e,s,w,se,ne,sw,nw''
         * equals to: [rzHandles] = ''all''
         *
         * */this.rzHandles="e,s,se";
/** emitted when start resizing */this.rzStart=new o["EventEmitter"];
/** emitted when start resizing */this.rzResizing=new o["EventEmitter"];
/** emitted when stop resizing */this.rzStop=new o["EventEmitter"]}Object.defineProperty(e.prototype,"ngResizable",{
/** Disables the resizable if set to false. */
set:function(e){if(e!==undefined&&e!==null&&e!==""){this._resizable=!!e;this.updateResizable()}},enumerable:true,configurable:true});e.prototype.ngOnChanges=function(e){if(e["rzHandles"]&&!e["rzHandles"].isFirstChange()){this.updateResizable()}};e.prototype.ngOnInit=function(){this.updateResizable()};e.prototype.ngOnDestroy=function(){this.removeHandles()};e.prototype.ngAfterViewInit=function(){var e=this.el.nativeElement;this._initSize=s["Size"].getCurrent(e);this._initPos=r["Position"].getCurrent(e);this._currSize=s["Size"].copy(this._initSize);this._currPos=r["Position"].copy(this._initPos)};
/** A method to reset size */e.prototype.resetSize=function(){this._currSize=s["Size"].copy(this._initSize);this._currPos=r["Position"].copy(this._initPos);this.doResize()};
/** A method to reset size */e.prototype.getStatus=function(){if(!this._currPos||!this._currSize){return null}return{size:{width:this._currSize.width,height:this._currSize.height},position:{top:this._currPos.y,left:this._currPos.x}}};e.prototype.updateResizable=function(){var e=this.el.nativeElement;
// clear handles:
this.renderer.removeClass(e,"ng-resizable");this.removeHandles();
// create new ones:
if(this._resizable){this.renderer.addClass(e,"ng-resizable");this.createHandles()}};
/** Use it to create handle divs */e.prototype.createHandles=function(){if(!this.rzHandles){return}var e;if(typeof this.rzHandles==="string"){if(this.rzHandles==="all"){e=["n","e","s","w","ne","se","nw","sw"]}else{e=this.rzHandles.replace(/ /g,"").toLowerCase().split(",")}for(var t=0,n=e;t<n.length;t++){var o=n[t];
// default handle theme: ng-resizable-$type.
var i=this.createHandleByType(o,"ng-resizable-"+o);if(i){this._handleType.push(o);this._handles[o]=i}}}else{e=Object.keys(this.rzHandles);for(var r=0,s=e;r<s.length;r++){var o=s[r];
// custom handle theme.
var i=this.createHandleByType(o,this.rzHandles[o]);if(i){this._handleType.push(o);this._handles[o]=i}}}};
/** Use it to create a handle */e.prototype.createHandleByType=function(e,t){var n=this.el.nativeElement;if(!e.match(/^(se|sw|ne|nw|n|e|s|w)$/)){console.error("Invalid handle type:",e);return null}return new i["ResizeHandle"](n,this.renderer,e,t,this.onMouseDown.bind(this))};e.prototype.removeHandles=function(){for(var e=0,t=this._handleType;e<t.length;e++){var n=t[e];this._handles[n].dispose()}this._handleType=[];this._handles={}};e.prototype.onMouseDown=function(e,t){
// skip right click;
if(e instanceof MouseEvent&&e.button===2){return}
// prevent default events
e.stopPropagation();e.preventDefault();if(!this._handleResizing){var n=this.el.nativeElement;this._origMousePos=r["Position"].fromEvent(e);this._origSize=s["Size"].getCurrent(n);this._origPos=r["Position"].getCurrent(n);// x: left, y: top
this._currSize=s["Size"].copy(this._origSize);this._currPos=r["Position"].copy(this._origPos);this.startResize(t)}};e.prototype.onMouseLeave=function(){if(this._handleResizing){this.stopResize();this._origMousePos=null;this._origSize=null;this._origPos=null}};e.prototype.onMouseMove=function(e){if(this._handleResizing&&this._resizable&&this._origMousePos&&this._origPos&&this._origSize){this.resizeTo(r["Position"].fromEvent(e));this.onResizing()}};e.prototype.startResize=function(e){this._handleResizing=e;this.rzStart.emit(this.getResizingEvent())};e.prototype.stopResize=function(){this.rzStop.emit(this.getResizingEvent());this._handleResizing=null};e.prototype.onResizing=function(){this.rzResizing.emit(this.getResizingEvent())};e.prototype.getResizingEvent=function(){return{host:this.el.nativeElement,handle:this._handleResizing?this._handleResizing.el:null,size:{width:this._currSize.width,height:this._currSize.height},position:{top:this._currPos.y,left:this._currPos.x}}};e.prototype.resizeTo=function(e){e.subtract(this._origMousePos);if(this._handleResizing.type.match(/n/)){
// n, ne, nw
this._currSize.height=this._origSize.height-e.y;this._currPos.y=this._origPos.y+e.y}else if(this._handleResizing.type.match(/s/)){
// s, se, sw
this._currSize.height=this._origSize.height+e.y}if(this._handleResizing.type.match(/e/)){
// e, ne, se
this._currSize.width=this._origSize.width+e.x}else if(this._handleResizing.type.match(/w/)){
// w, nw, sw
this._currSize.width=this._origSize.width-e.x;this._currPos.x=this._origPos.x+e.x}this.doResize()};e.prototype.doResize=function(){var e=this.el.nativeElement;this.renderer.setStyle(e,"height",this._currSize.height+"px");this.renderer.setStyle(e,"width",this._currSize.width+"px");this.renderer.setStyle(e,"left",this._currPos.x+"px");this.renderer.setStyle(e,"top",this._currPos.y+"px")};a([Object(o["Input"])(),c("design:type",Object),c("design:paramtypes",[Object])],e.prototype,"ngResizable",null);a([Object(o["Input"])(),c("design:type",Object)],e.prototype,"rzHandles",void 0);a([Object(o["Output"])(),c("design:type",Object)],e.prototype,"rzStart",void 0);a([Object(o["Output"])(),c("design:type",Object)],e.prototype,"rzResizing",void 0);a([Object(o["Output"])(),c("design:type",Object)],e.prototype,"rzStop",void 0);a([Object(o["HostListener"])("document:mouseup"),Object(o["HostListener"])("document:mouseleave"),Object(o["HostListener"])("document:touchend"),Object(o["HostListener"])("document:touchcancel"),c("design:type",Function),c("design:paramtypes",[]),c("design:returntype",void 0)],e.prototype,"onMouseLeave",null);a([Object(o["HostListener"])("document:mousemove",["$event"]),Object(o["HostListener"])("document:touchmove",["$event"]),c("design:type",Function),c("design:paramtypes",[Object]),c("design:returntype",void 0)],e.prototype,"onMouseMove",null);e=a([Object(o["Directive"])({selector:"[ngResizable]",exportAs:"ngResizable"}),c("design:paramtypes",[o["ElementRef"],o["Renderer2"]])],e);return e}();
/***/},
/***/"./src/app/framework/directives/auto_height.directive.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"AutoHeightDirective",function(){return a});
/* harmony import */var o=n("./node_modules/@angular/core/esm5/core.js");
/* harmony import */var i=n("./src/app/framework/services/window.service.ts");var r=this&&this.__decorate||function(e,t,n,o){var i=arguments.length,r=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)if(s=e[a])r=(i<3?s(r):i>3?s(t,n,r):s(t,n))||r;return i>3&&r&&Object.defineProperty(t,n,r),r};var s=this&&this.__metadata||function(e,t){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(e,t)};var a=function(){function e(e){this.winSer=e;this.windowResize=new o["EventEmitter"];this.position={top:0,bottom:0}}e.prototype.ngOnInit=function(){this.height=this.getRealHeight(this.winSer.size.height)};e.prototype.ngOnChanges=function(e){
// console.log(changes['position'].currentValue);
// this.position = Object.assign({top: 0, bottom: 0}, changes['position'].currentValue);
// console.log(this.position);
// this.height = this.getRealHeight(window.innerHeight);
};e.prototype.ngAfterViewInit=function(){
// console.log('AH');
};Object.defineProperty(e.prototype,"containerHeight",{get:function(){return Number.parseInt(this.height.replace("px",""))},enumerable:true,configurable:true});e.prototype.onWindowResize=function(e){this.height=this.getRealHeight(e.target.innerHeight);this.windowResize.emit(this.containerHeight)};e.prototype.getRealHeight=function(e){return e+(this.position.top||0)+(this.position.bottom||0)+"px"};r([Object(o["HostBinding"])("style.height"),s("design:type",String)],e.prototype,"height",void 0);r([Object(o["Input"])(),s("design:type",Object)],e.prototype,"position",void 0);r([Object(o["Output"])(),s("design:type",Object)],e.prototype,"windowResize",void 0);r([Object(o["HostListener"])("window:resize",["$event"]),s("design:type",Function),s("design:paramtypes",[Object]),s("design:returntype",void 0)],e.prototype,"onWindowResize",null);e=r([Object(o["Directive"])({selector:"[autoHeight]",exportAs:"autoHeight"}),s("design:paramtypes",[i["WindowService"]])],e);return e}();
/***/},
/***/"./src/app/framework/directives/dynamic-component/dynamic-component.component.css":
/***/function(e,t,n){t=e.exports=n("./node_modules/css-loader/lib/css-base.js")(false);
// imports
// module
t.push([e.i,"",""]);
// exports
/*** EXPORTS FROM exports-loader ***/e.exports=e.exports.toString();
/***/},
/***/"./src/app/framework/directives/dynamic-component/dynamic-component.component.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"DynamicComponent",function(){return s});
/* harmony import */var o=n("./node_modules/@angular/core/esm5/core.js");var i=this&&this.__decorate||function(e,t,n,o){var i=arguments.length,r=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)if(s=e[a])r=(i<3?s(r):i>3?s(t,n,r):s(t,n))||r;return i>3&&r&&Object.defineProperty(t,n,r),r};var r=this&&this.__metadata||function(e,t){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(e,t)};var s=function(){function e(e){this.resolver=e;this.views=[]}e.prototype.loadComponent=function(){var e=this.resolver.resolveComponentFactory(this.componentName);if(this.compRef){this.compRef.destroy()}this.compRef=this.container.createComponent(e);// 创建组件
};e.prototype.ngOnInit=function(){};e.prototype.ngAfterContentInit=function(){};e.prototype.ngOnChanges=function(e){if(!e.componentName.isFirstChange()){this.clear();this.loadComponent()}};e.prototype.ngAfterViewInit=function(){var e=this;setTimeout(function(){return e.loadComponent()})};e.prototype.ngOnDestroy=function(){if(this.compRef){this.compRef.destroy()}};e.prototype.clear=function(){this.container.clear()};i([Object(o["ViewChild"])("container",{read:o["ViewContainerRef"]}),r("design:type",o["ViewContainerRef"])],e.prototype,"container",void 0);i([Object(o["Input"])(),r("design:type",Object)],e.prototype,"componentName",void 0);e=i([Object(o["Component"])({selector:"app-dynamic-component",template:"<ng-container #container></ng-container>",styles:[n("./src/app/framework/directives/dynamic-component/dynamic-component.component.css")]}),r("design:paramtypes",[o["ComponentFactoryResolver"]])],e);return e}();
/***/},
/***/"./src/app/framework/directives/models/position.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"Position",function(){return o});var o=function(){function e(e,t){this.x=e;this.y=t}e.fromEvent=function(t){if(t instanceof MouseEvent){return new e(t.clientX,t.clientY)}else{return new e(t.changedTouches[0].clientX,t.changedTouches[0].clientY)}};e.isIPosition=function(e){return!!e&&"x"in e&&"y"in e};e.getCurrent=function(t){var n=new e(0,0);if(window){var o=window.getComputedStyle(t);if(o){n.x=parseInt(o.getPropertyValue("left"),10);n.y=parseInt(o.getPropertyValue("top"),10)}return n}else{console.error("Not Supported!");return null}};e.copy=function(t){return new e(0,0).set(t)};e.prototype.add=function(e){this.x+=e.x;this.y+=e.y;return this};e.prototype.subtract=function(e){this.x-=e.x;this.y-=e.y;return this};e.prototype.reset=function(){this.x=0;this.y=0;return this};e.prototype.set=function(e){this.x=e.x;this.y=e.y;return this};return e}();
/***/},
/***/"./src/app/framework/directives/models/size.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"Size",function(){return o});var o=function(){function e(e,t){this.width=e;this.height=t}e.getCurrent=function(t){var n=new e(0,0);if(window){var o=window.getComputedStyle(t);if(o){n.width=parseInt(o.getPropertyValue("width"),10);n.height=parseInt(o.getPropertyValue("height"),10)}return n}else{console.error("Not Supported!");return null}};e.copy=function(t){return new e(0,0).set(t)};e.prototype.set=function(e){this.width=e.width;this.height=e.height;return this};return e}();
/***/},
/***/"./src/app/framework/directives/split/number-array.pipe.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"NumberToArray",function(){return r});
/* harmony import */var o=n("./node_modules/@angular/core/esm5/core.js");var i=this&&this.__decorate||function(e,t,n,o){var i=arguments.length,r=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)if(s=e[a])r=(i<3?s(r):i>3?s(t,n,r):s(t,n))||r;return i>3&&r&&Object.defineProperty(t,n,r),r};var r=function(){function e(){}e.prototype.transform=function(e,t){var n=[];for(var o=0;o<e;o++){n.push(o)}return n};e=i([Object(o["Pipe"])({name:"Number2Array"})],e);return e}();
/***/},
/***/"./src/app/framework/directives/split/panel/panel.component.css":
/***/function(e,t,n){t=e.exports=n("./node_modules/css-loader/lib/css-base.js")(false);
// imports
// module
t.push([e.i,"",""]);
// exports
/*** EXPORTS FROM exports-loader ***/e.exports=e.exports.toString();
/***/},
/***/"./src/app/framework/directives/split/panel/panel.component.html":
/***/function(e,t){e.exports='<div >\n  <div class="title"></div>\n\n  <div class="content">\n    <ng-content></ng-content>\n  </div>\n\n</div>\n\n\n\n<div ngDraggable [region]="\'west\'" [inBounds]="true" (movingOffset)="onMoving($event)"\n    [ngClass]="direction" style="width: 4px;" ></div>'
/***/},
/***/"./src/app/framework/directives/split/panel/panel.component.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"PanelComponent",function(){return s});
/* harmony import */var o=n("./node_modules/@angular/core/esm5/core.js");var i=this&&this.__decorate||function(e,t,n,o){var i=arguments.length,r=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)if(s=e[a])r=(i<3?s(r):i>3?s(t,n,r):s(t,n))||r;return i>3&&r&&Object.defineProperty(t,n,r),r};var r=this&&this.__metadata||function(e,t){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(e,t)};var s=function(){function e(){}e.prototype.ngOnInit=function(){};e.prototype.onMoving=function(e){};i([Object(o["Input"])(),r("design:type",String)],e.prototype,"title",void 0);i([Object(o["Input"])(),r("design:type",Number)],e.prototype,"height",void 0);i([Object(o["Input"])(),r("design:type",Number)],e.prototype,"width",void 0);i([Object(o["Input"])(),r("design:type",String)],e.prototype,"direction",void 0);e=i([Object(o["Component"])({selector:"app-panel",template:n("./src/app/framework/directives/split/panel/panel.component.html"),styles:[n("./src/app/framework/directives/split/panel/panel.component.css")]}),r("design:paramtypes",[])],e);return e}();
/***/},
/***/"./src/app/framework/directives/split/split.component.css":
/***/function(e,t,n){t=e.exports=n("./node_modules/css-loader/lib/css-base.js")(false);
// imports
// module
t.push([e.i,"",""]);
// exports
/*** EXPORTS FROM exports-loader ***/e.exports=e.exports.toString();
/***/},
/***/"./src/app/framework/directives/split/split.component.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"SplitComponent",function(){return s});
/* harmony import */var o=n("./node_modules/@angular/core/esm5/core.js");var i=this&&this.__decorate||function(e,t,n,o){var i=arguments.length,r=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)if(s=e[a])r=(i<3?s(r):i>3?s(t,n,r):s(t,n))||r;return i>3&&r&&Object.defineProperty(t,n,r),r};var r=this&&this.__metadata||function(e,t){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(e,t)};var s=function(){function e(){
/** 类型 row(行) | column(列) */
this.type="row";
/** 分隔的数量， 至少为2列或2行 */this.amount=2}e.prototype.ngOnInit=function(){};i([Object(o["Input"])(),r("design:type",String)],e.prototype,"type",void 0);i([Object(o["Input"])(),r("design:type",Object)],e.prototype,"amount",void 0);e=i([Object(o["Component"])({selector:"app-split",template:"./split.component.html",styles:[n("./src/app/framework/directives/split/split.component.css")]}),r("design:paramtypes",[])],e);return e}();
/***/},
/***/"./src/app/framework/directives/tabs/index.ts":
/***/function(e,t,n){"use strict";
/* harmony import */var o=n("./src/app/framework/directives/tabs/tab.ts");
/* unused harmony namespace reexport */
/* harmony import */var i=n("./src/app/framework/directives/tabs/tabs.component.ts");
/* harmony namespace reexport (by used) */n.d(t,"TabsComponent",function(){return i["TabsComponent"]});
/***/},
/***/"./src/app/framework/directives/tabs/tab.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"Tab",function(){return o});var o=function(){function e(e,t,n,o){if(o===void 0){o=true}
/** 是否启用关闭功能 */this.removable=true;this.title=t;this.compRef=n;this.removable=o;this.id=e}Object.defineProperty(e.prototype,"icon",{
/** 根据标题的后缀获取对应的图标 */
get:function(){if(this.title){if(this.title.split(".").length>1){var e=this.title.split(".")[1];return e}}return"file"},enumerable:true,configurable:true});return e}();
/***/},
/***/"./src/app/framework/directives/tabs/tabs.component.html":
/***/function(e,t){e.exports='<div tabScroll  class="workbench-tabs">\n    \n    <div #tabLabelBox style="flex:1;position: static; overflow: hidden;">\n        <perfect-scrollbar [config]="{suppressScrollY: true}">\n            <ul  #tablist class="nav" [ngClass]="classMap" (click)="$event.preventDefault()">\n                <li *ngFor="let tabz of tabs" [ngClass]="[\'nav-item\', \'tab-label\', tabz.customClass || \'\']" [class.active]="tabz.active" [class.disabled]="tabz.disabled">\n                    <a href="javascript:void(0);" class="nav-link" [attr.id]="tabz.id ? tabz.id + \'-link\' : \'\'" [class.active]="tabz.active"\n                        [class.disabled]="tabz.disabled" (click)="onSelectingTab(tabz)" [title]="tabz.id">\n                        <span [ngClass]="[\'icon\', \'file\', tabz.icon || \'\']">{{ tabz.title }}</span>\n                        <span *ngIf="tabz.removable" (click)="$event.preventDefault(); onRemovingTab(tabz);" class="bs-remove-tab"></span>\n                    </a>\n                </li>\n            </ul>\n        </perfect-scrollbar>\n    </div>\n\n    <div class="editor-actions">\n        <div class="monaco-toolbar">\n            <div class="monaco-action-bar animated">\n                <ng-container [ngTemplateOutlet]="actionsRef"></ng-container>\n            </div>\n        </div>\n    </div>\n\n\n\n</div>\n<div class="tab-content" [style.height]="height + \'px\'" style="overflow: auto">\n    \x3c!-- <app-dynamic-component [componentName] = "currentTab?.componentName" ></app-dynamic-component> --\x3e\n    \x3c!-- <perfect-scrollbar> --\x3e\n        <ng-container #tabContent></ng-container>\n    \x3c!-- </perfect-scrollbar> --\x3e\n</div>'
/***/},
/***/"./src/app/framework/directives/tabs/tabs.component.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"TabsComponent",function(){return a});
/* harmony import */var o=n("./node_modules/@angular/core/esm5/core.js");
/* harmony import */var i=n("./src/app/components/perfect-scorll/perfect-scrollbar.component.ts");var r=this&&this.__decorate||function(e,t,n,o){var i=arguments.length,r=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)if(s=e[a])r=(i<3?s(r):i>3?s(t,n,r):s(t,n))||r;return i>3&&r&&Object.defineProperty(t,n,r),r};var s=this&&this.__metadata||function(e,t){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(e,t)};var a=function(){function e(e,t){this.renderer=e;this.viewContainerRef=t;this.selecting=new o["EventEmitter"];this.selected=new o["EventEmitter"];this.unselected=new o["EventEmitter"];this.removing=new o["EventEmitter"];this.removed=new o["EventEmitter"];this.clazz=true;
// tabs: Tab[] = [];
this.tabs=new Array;this.classMap={};
// this.workspaceManager.setMainTabsComponent(this);
}Object.defineProperty(e.prototype,"currentTab",{get:function(){if(this.tabs.length){return this.tabs.find(function(e){return e.active})}return undefined},enumerable:true,configurable:true});e.prototype.ngOnDestroy=function(){this.isDestroyed=true};e.prototype.ngAfterContentInit=function(){};e.prototype.addTab=function(e,t){var n=this;this.tabs.push(e);
// tab.active = this.tabs.length === 1 && typeof tab.active === 'undefined';
if(t){this.selectTab(e)}setTimeout(function(){n.ps.directiveRef.update();n.ps.directiveRef.scrollToRight()})};e.prototype.removeTab=function(e,t){if(t===void 0){t={reselect:true,emit:true}}var n=this.tabs.indexOf(e);if(n===-1||this.isDestroyed){return}
// Select a new tab if the tab to be removed is selected and not destroyed
if(e.active){this.content.clear();if(t.reselect&&this.hasAvailableTabs(n)){var o=this.getClosestTabIndex(n);this.selectTab(this.tabs[o])}}if(t.emit){this.removed.emit(e)}this.tabs.splice(n,1);
// if (!this.currentTab) {
//   this.dynamicComp.clear();
// }
};e.prototype.getClosestTabIndex=function(e){var t=this.tabs.length;if(!t){return-1}for(var n=1;n<=t;n+=1){var o=e-n;var i=e+n;if(this.tabs[o]){return o}if(this.tabs[i]){return i}}return-1};e.prototype.hasAvailableTabs=function(e){var t=this.tabs.length;if(!t){return false}for(var n=0;n<t;n+=1){if(n!==e){return true}}return false};e.prototype.findAndSelectTab=function(e){var t=this.tabs.find(function(t){return t.id===e});if(t){this.selectTab(t)}return!!t};e.prototype.selectTab=function(e){var t=this;if(this.currentTab){this.currentTab.active=false;this.unselected.emit(this.currentTab)}e.active=true;this.selected.emit(e);this.setContent(e.compRef);
// TODO: 移动tabs 中的滚动条到合适位置，将当前的tab 显示粗来。
setTimeout(function(){return t.setTabPosition()})};e.prototype.setTabPosition=function(){var e=this;var t=this.tabs.findIndex(function(t){return t===e.currentTab});if(t>-1){var n=this.tabsEl.nativeElement.querySelectorAll("li")[t];this.ps.directiveRef.scrollToLeft(n.offsetLeft)}};e.prototype.setContent=function(e){this.content.detach();
// this.content.clear();
this.content.insert(e.hostView)};e.prototype.onSelectingTab=function(e,t){this.selecting.emit(e);if(t){this.selectTab(e)}};e.prototype.onRemovingTab=function(e,t){this.removing.emit(e);if(t){this.removeTab(e)}};r([Object(o["Input"])(),s("design:type",o["TemplateRef"])],e.prototype,"actionsRef",void 0);r([Object(o["Input"])(),s("design:type",Number)],e.prototype,"height",void 0);r([Object(o["ViewChild"])("tabContent",{read:o["ViewContainerRef"]}),s("design:type",o["ViewContainerRef"])],e.prototype,"content",void 0);r([Object(o["ViewChild"])("tablist"),s("design:type",o["ElementRef"])],e.prototype,"tabsEl",void 0);r([Object(o["ViewChild"])(i["PerfectScrollbarComponent"]),s("design:type",i["PerfectScrollbarComponent"])],e.prototype,"ps",void 0);r([Object(o["HostBinding"])("class.tab-container"),s("design:type",Object)],e.prototype,"clazz",void 0);r([Object(o["Input"])(),s("design:type",Object)],e.prototype,"tabs",void 0);e=r([Object(o["Component"])({selector:"app-tabs",template:n("./src/app/framework/directives/tabs/tabs.component.html")}),s("design:paramtypes",[o["Renderer2"],o["ViewContainerRef"]])],e);return e}();
/***/},
/***/"./src/app/framework/directives/widgets/resize-handle.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"ResizeHandle",function(){return o});var o=function(){function e(e,t,n,o,i){var r=this;this.parent=e;this.renderer=t;this.type=n;this.css=o;this.onMouseDown=i;
// generate handle div
var s=t.createElement("div");t.addClass(s,"ng-resizable-handle");t.addClass(s,o);
// add default diagonal for se handle
if(n==="se"){t.addClass(s,"ng-resizable-diagonal")}
// append div to parent
if(this.parent){e.appendChild(s)}
// create and register event listener
this._onResize=function(e){i(e,r)};s.addEventListener("mousedown",this._onResize);s.addEventListener("touchstart",this._onResize);
// done
this._handle=s}e.prototype.dispose=function(){this._handle.removeEventListener("mousedown",this._onResize);this._handle.removeEventListener("touchstart",this._onResize);if(this.parent){this.parent.removeChild(this._handle)}this._handle=null;this._onResize=null};Object.defineProperty(e.prototype,"el",{get:function(){return this._handle},enumerable:true,configurable:true});return e}();
/***/},
/***/"./src/app/framework/layout/layout.module.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"LayoutModule",function(){return C});
/* harmony import */var o=n("./node_modules/@angular/common/esm5/common.js");
/* harmony import */var i=n("./node_modules/@angular/core/esm5/core.js");
/* harmony import */var r=n("./src/app/components/ide-common.module.ts");
/* harmony import */var s=n("./src/app/components/perfect-scorll/perfect-scrollbar.module.ts");
/* harmony import */var a=n("./src/app/framework/directives/angular-draggable.directive.ts");
/* harmony import */var c=n("./src/app/framework/directives/angular-resizeable.directive.ts");
/* harmony import */var p=n("./src/app/framework/directives/auto_height.directive.ts");
/* harmony import */var l=n("./src/app/framework/directives/dynamic-component/dynamic-component.component.ts");
/* harmony import */var d=n("./src/app/framework/directives/split/number-array.pipe.ts");
/* harmony import */var u=n("./src/app/framework/directives/split/panel/panel.component.ts");
/* harmony import */var f=n("./src/app/framework/directives/split/split.component.ts");
/* harmony import */var h=n("./src/app/framework/directives/tabs/index.ts");
/* harmony import */var m=n("./src/app/framework/services/window.service.ts");
/* harmony import */var v=n("./src/app/framework/layout/main/main.component.ts");
/* harmony import */var g=n("./src/app/framework/layout/property-panel/property-panel.component.ts");
/* harmony import */var b=n("./src/app/framework/layout/sidebar/sidebar.component.ts");
/* harmony import */var x=n("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */var y=n.n(x);
/* harmony import */var w=n("./src/app/framework/layout/status-bar/status-bar.component.ts");
/* harmony import */var j=n("./src/app/framework/layout/terminal/terminal.component.ts");
/* harmony import */var O=n("./src/app/framework/layout/top-menu/navbar/navbar.component.ts");
/* harmony import */var R=n("./src/app/framework/layout/top-menu/top-menu.component.ts");var _=this&&this.__decorate||function(e,t,n,o){var i=arguments.length,r=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)if(s=e[a])r=(i<3?s(r):i>3?s(t,n,r):s(t,n))||r;return i>3&&r&&Object.defineProperty(t,n,r),r};
// import { TestComponent } from '../test-comp/test.component';
// import { Test2Component } from '../test-comp/test2.component';
var C=function(){function e(){}e=_([Object(i["NgModule"])({imports:[o["CommonModule"],s["PerfectScrollbarModule"],x["BsDropdownModule"].forRoot(),x["NavbarModule"],r["IDECommonModule"]],declarations:[R["TopMenuComponent"],O["NavbarComponent"],v["MainComponent"],p["AutoHeightDirective"],b["SidebarComponent"],j["TerminalComponent"],a["AngularDraggableDirective"],c["AngularResizableDirective"],g["PropertyPanelComponent"],l["DynamicComponent"],h["TabsComponent"],d["NumberToArray"],f["SplitComponent"],u["PanelComponent"],w["StatusBarComponent"]],exports:[R["TopMenuComponent"],v["MainComponent"],p["AutoHeightDirective"],w["StatusBarComponent"]],providers:[m["WindowService"]],
// todo: entryComponent for test open tabs, remove it after metadata opened.
entryComponents:[w["StatusBarComponent"],R["TopMenuComponent"]]})],e);return e}();
/***/},
/***/"./src/app/framework/layout/main/main.component.css":
/***/function(e,t,n){t=e.exports=n("./node_modules/css-loader/lib/css-base.js")(false);
// imports
// module
t.push([e.i,"",""]);
// exports
/*** EXPORTS FROM exports-loader ***/e.exports=e.exports.toString();
/***/},
/***/"./src/app/framework/layout/main/main.component.html":
/***/function(e,t){e.exports='<div #workbenchEl #workbench="autoHeight" class="workbench" autoHeight [position]="{top: -32, bottom: -22}">\n\n  <app-sidebar [bounds]="workbenchEl" [height]="workbench.containerHeight" [width]="400" (resizing)="leftResizing($event)" ></app-sidebar>\n\n\n  <div #designArea id="designArea" [style.height]="(workbench.containerHeight) + \'px\'" class="workbench-center">\n    <div #main [style.height]="tabsContainerHeight + \'px\'">\n      <app-tabs [actionsRef]="actions" [height] = " tabsContainerHeight - 35 ">\n          <ng-template #actions>\n            <ul class="actions-container" role="toolbar" aria-label="编辑器操作">\n                <li class="action-item" >\n                    <a class="action-label icon icon-full-screen" role="button" title="最大化" tabindex="0"></a>\n                </li>\n                <li class="action-item" >\n                    <a class="action-label icon icon-more" role="button" title="更多" tabindex="0"></a>\n                </li>\n            </ul>\n          </ng-template>\n      </app-tabs>\n    </div>\n\n    <app-terminal [bounds]="designArea" [top]="tabsContainerHeight" [height]="200" (resizing)="bottomResizing($event)" [width]="centerWidth"></app-terminal>\n  </div>\n\n  \x3c!--<app-property-panel [bounds]="workbenchEl" [height]="workbench.containerHeight" [width]="300" (resizing)="rightResizing($event)"></app-property-panel>--\x3e\n\n</div>\n'
/***/},
/***/"./src/app/framework/layout/main/main.component.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"MainComponent",function(){return u});
/* harmony import */var o=n("./node_modules/@angular/core/esm5/core.js");
/* harmony import */var i=n("./src/app/framework/services/window.service.ts");
/* harmony import */var r=n("./src/app/framework/layout/sidebar/sidebar.component.ts");
/* harmony import */var s=n("./src/app/framework/layout/terminal/terminal.component.ts");
/* harmony import */var a=n("./src/app/framework/directives/tabs/index.ts");
/* harmony import */var c=n("./src/app/workspace/workspace.manager.ts");
/* harmony import */var p=n("./src/app/framework/directives/auto_height.directive.ts");var l=this&&this.__decorate||function(e,t,n,o){var i=arguments.length,r=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)if(s=e[a])r=(i<3?s(r):i>3?s(t,n,r):s(t,n))||r;return i>3&&r&&Object.defineProperty(t,n,r),r};var d=this&&this.__metadata||function(e,t){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(e,t)};var u=function(){function e(e,t,n,o){this.elementRef=e;this.winSer=t;this.componentFactoryResolver=n;this.injector=o;this.workSpaceMgr=this.injector.get(c["WorkspaceManager"])}e.prototype.ngOnInit=function(){var e=this;this.activitybar=this.elementRef.nativeElement.firstElementChild;setTimeout(function(){e.centerWidth=e.winSer.size.width-e.sidebar.width;e.centerArea.nativeElement.style.width=e.centerWidth+"px";e.sidebar.draggable.maxWidth=e.winSer.size.width-212;e.sidebar.draggable.minWidth=240;
// this.propertyPanel.draggable.maxWidth = this.winSer.size.width - this.sidebar.width - 212;
// this.propertyPanel.draggable.minWidth = 240;
e.tabsContainerHeight=e.container.containerHeight-200});this.tabsComp.selected.subscribe(function(e){return console.log("select: "+e.title)});this.tabsComp.unselected.subscribe(function(e){if(e){
// console.log(`unselect: ${tab.title}`);
}});this.onMainTabRemove=this.tabsComp.removed;this.tabsComp.removed.subscribe(function(e){
// console.log(`removed: ${tab.title}`);
});this.container.windowResize.subscribe(function(t){e.tabsContainerHeight=t-e.terminal.height})};e.prototype.ngAfterContentInit=function(){};e.prototype.ngAfterViewInit=function(){var e=this;setTimeout(function(){e.terminal.collapse()})};e.prototype.addNewTab=function(e){var t="新建工作区 - "+this.tabsComp.tabs.length;
// const testFactory = this.componentFactoryResolver.resolveComponentFactory(component);
// const test = testFactory.create(this.injector);
// this.tabsComp.addTab(new Tab(id, title, component));
};e.prototype.addMainTab=function(e,t){this.tabsComp.addTab(e,t)};e.prototype.removeMainTab=function(e){var t=this.tabsComp.tabs.find(function(t){return t.id===e});if(t){this.tabsComp.removeTab(t,{reselect:false,emit:true})}};e.prototype.findAndSelectMainTab=function(e){return this.tabsComp.findAndSelectTab(e)};e.prototype.selectMainTab=function(e){return this.tabsComp.selectTab(e)};e.prototype.windowResize=function(){var e=this.winSer.size;this.centerWidth=e.width-this.sidebar.width;this.centerArea.nativeElement.style.width=this.centerWidth+"px";this.winSer.onResize.emit({width:this.centerWidth,height:e.height-32})};e.prototype.leftResizing=function(e){var t=e.left;var n=this.winSer.size;if(e.target===window){t=this.sidebar.width}this.centerWidth=n.width-t;this.centerArea.nativeElement.style.width=this.centerWidth+"px";this.centerArea.nativeElement.style.left=t+"px";this.resetMaxWidth();this.workSpaceMgr.leftSidebarResize.emit(e.target)};e.prototype.resetMaxWidth=function(){
// this.propertyPanel.draggable.maxWidth = this.winSer.size.width - this.sidebar.width - 212;
this.sidebar.draggable.maxWidth=this.winSer.size.width-212};e.prototype.rightResizing=function(e){this.centerWidth=this.winSer.size.width-this.sidebar.width-e.right;this.centerArea.nativeElement.style.width=this.centerWidth+"px";this.resetMaxWidth()};e.prototype.bottomResizing=function(e){this.tabsContainerHeight=this.container.containerHeight-e.height};e.prototype.closeTab=function(e){if(e){this.tabsComp.removeTab(e)}else{this.tabsComp.removeTab(this.tabsComp.currentTab)}};l([Object(o["ViewChild"])("designArea"),d("design:type",o["ElementRef"])],e.prototype,"centerArea",void 0);l([Object(o["ViewChild"])("main"),d("design:type",o["ElementRef"])],e.prototype,"main",void 0);l([Object(o["ViewChild"])(r["SidebarComponent"]),d("design:type",r["SidebarComponent"])],e.prototype,"sidebar",void 0);l([Object(o["ViewChild"])(s["TerminalComponent"]),d("design:type",s["TerminalComponent"])],e.prototype,"terminal",void 0);l([Object(o["ViewChild"])(a["TabsComponent"]),d("design:type",a["TabsComponent"])],e.prototype,"tabsComp",void 0);l([Object(o["ViewChild"])("workbench"),d("design:type",p["AutoHeightDirective"])],e.prototype,"container",void 0);l([Object(o["Input"])(),d("design:type",Object)],e.prototype,"panels",void 0);l([Object(o["HostListener"])("window:resize",["$event"]),d("design:type",Function),d("design:paramtypes",[]),d("design:returntype",void 0)],e.prototype,"windowResize",null);e=l([Object(o["Component"])({selector:"app-main",template:n("./src/app/framework/layout/main/main.component.html"),styles:[n("./src/app/framework/layout/main/main.component.css")]}),d("design:paramtypes",[o["ElementRef"],i["WindowService"],o["ComponentFactoryResolver"],o["Injector"]])],e);return e}();
/***/},
/***/"./src/app/framework/layout/property-panel/property-panel.component.css":
/***/function(e,t,n){t=e.exports=n("./node_modules/css-loader/lib/css-base.js")(false);
// imports
// module
t.push([e.i,"",""]);
// exports
/*** EXPORTS FROM exports-loader ***/e.exports=e.exports.toString();
/***/},
/***/"./src/app/framework/layout/property-panel/property-panel.component.html":
/***/function(e,t){e.exports='<div #east class="property panel" [style.height]="height + \'px\'">\n\n    <div class="title">\n        <div class="title-label">\n            <span title="属性">属性面板</span>\n        </div>\n        <div class="title-actions">\n            <div class="monaco-toolbar">\n                <div class="monaco-action-bar animated">\n                    <ul class="actions-container" role="toolbar" aria-label="属性面板">\n                        <li class="action-item">\n                            <a class="action-label icon collapse-property" title="全部折叠"></a>\n                        </li>\n                        <li class="action-item" (click)="collapse()">\n                            <a class="action-label icon hide-panel" title="关闭"></a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div #propertyPanel class="panel-body" style="overflow:auto;" [style.height]="(height - 35) + \'px\'">\n            <perfect-scrollbar [config]="{suppressScrollX: true}">\n                \x3c!-- <ul class="property-grid">\n                    <li *ngFor="let group of properties">\n                        <span  [class]="group.status === \'closed\' ? \'group-label collapse\': \'group-label expand\' " (click)="changeStatus(group)">{{ group.groupName }}</span>\n\n                        <table [style.width]="width - 30 + \'px\'" class="table" [style.display]="group.status === \'open\'?\'table\':\'none\'">\n                            <tbody>\n                                <tr *ngFor="let pro of group.propertyList">\n                                    <td [style.width]="propertyTitleWidth + \'px\'">{{pro.title}}</td>\n                                    <td>\n                                        <input type="text" style="width: 100%">\n                                    </td>\n                                </tr>\n                                \n                            </tbody>\n                        </table>\n                    </li>\n                </ul> --\x3e\n                <ng-container #content></ng-container>\n            </perfect-scrollbar>\n        \n\n        <div id="property-grid-bar" ngDraggable [bounds]="propertyPanel" [inBounds]="true"  (movingOffset)="resizePropertyWidth($event)"\n            class="monaco-sash vertical" [style.height]="(height - 35) + \'px\'" style="width: 4px;" [style.left]="initDragbarLeft + \'px\' "></div>\n\n    </div>\n</div>\n\n\n\n<div #panelDrag = "ngDraggable" ngDraggable [region]="\'east\'" [bounds]="bounds" [inBounds]="true" (movingOffset)="onMoving($event)" \n    class="monaco-sash vertical" [style.height]="height + \'px\'" style="width: 4px;" [style.left]="initBarPosition + \'px\' "></div>'
/***/},
/***/"./src/app/framework/layout/property-panel/property-panel.component.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"PropertyPanelComponent",function(){return c});
/* harmony import */var o=n("./node_modules/@angular/core/esm5/core.js");
/* harmony import */var i=n("./src/app/framework/services/window.service.ts");
/* harmony import */var r=n("./src/app/framework/directives/angular-draggable.directive.ts");var s=this&&this.__decorate||function(e,t,n,o){var i=arguments.length,r=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)if(s=e[a])r=(i<3?s(r):i>3?s(t,n,r):s(t,n))||r;return i>3&&r&&Object.defineProperty(t,n,r),r};var a=this&&this.__metadata||function(e,t){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(e,t)};var c=function(){
// properties = [{
//   groupName: 'Form表单', propertyList: [
//     { title: '按钮', code: 'button', editor: { type: 'textbox' } },
//     { title: '复选框', code: 'checkbox', editor: { type: 'checkbox' } },
//     { title: '复选框列表', code: 'checkboxlist' },
//     { title: '单选框', code: 'radiobutton' },
//     { title: '文本框', code: 'textbox' },
//     { title: '多行文本框', code: 'textarea' },
//     { title: '树控件', code: 'treeview' },
//     { title: '下拉框', code: 'combobox' },
//     { title: '颜色选择器', code: 'colordialog' },
//     { title: '日期选择框', code: 'datetimepicker' },
//   ], status: 'open'
// },
// {
//   groupName: '布局容器', propertyList: [
//     { title: '按钮', code: 'button' },
//     { title: '复选框', code: 'checkbox' },
//     { title: '复选框列表', code: 'checkboxlist' },
//     { title: '单选框', code: 'radiobutton' },
//     { title: '文本框', code: 'textbox' },
//     { title: '多行文本框', code: 'textarea' },
//     { title: '树控件', code: 'treeview' },
//     { title: '下拉框', code: 'combobox' },
//     { title: '颜色选择器', code: 'colordialog' },
//     { title: '日期选择框', code: 'datetimepicker' },
//   ], status: 'open'
// },
// {
//   groupName: '数据列表', propertyList: [
//     { title: '按钮', code: 'button' },
//     { title: '复选框', code: 'checkbox' },
//     { title: '复选框列表', code: 'checkboxlist' },
//     { title: '单选框', code: 'radiobutton' },
//     { title: '文本框', code: 'textbox' },
//     { title: '多行文本框', code: 'textarea' },
//     { title: '树控件', code: 'treeview' },
//     { title: '下拉框', code: 'combobox' },
//     { title: '颜色选择器', code: 'colordialog' },
//     { title: '日期选择框', code: 'datetimepicker' },
//   ], status: 'open'
// },
// {
//   groupName: '导航菜单', propertyList: [
//     { title: '按钮', code: 'button' },
//     { title: '复选框', code: 'checkbox' },
//     { title: '复选框列表', code: 'checkboxlist' },
//     { title: '单选框', code: 'radiobutton' },
//     { title: '文本框', code: 'textbox' },
//     { title: '多行文本框', code: 'textarea' },
//     { title: '树控件', code: 'treeview' },
//     { title: '下拉框', code: 'combobox' },
//     { title: '颜色选择器', code: 'colordialog' },
//     { title: '日期选择框', code: 'datetimepicker' },
//   ], status: 'open'
// }];
function e(e){this.winSer=e;this.width=200;this.resizing=new o["EventEmitter"];this.initBarPosition=0;this.propertyTitleWidth=100;this.initDragbarLeft=this.propertyTitleWidth+30;this.isOpen=true;this.properties=[]}e.prototype.ngOnInit=function(){var e=this;this.originalWidth=this.width;this.initBarPosition=this.winSer.size.width-this.width;this.winSer.onResize.subscribe(function(t){e.initBarPosition=t.width-e.width;e.originalWidth=e.width;e.draggable.resetPosition()});this.collapse()};e.prototype.ngOnChanges=function(e){if(e["width"]&&!e["width"].isFirstChange()){this.eastDiv.nativeElement.style.width=e["width"].currentValue+"px"}};e.prototype.onMoving=function(e){this.width=this.originalWidth-e.x;this.eastDiv.nativeElement.style.width=this.width+"px";this.resizing.emit({right:this.width,target:this})};e.prototype.changeStatus=function(e){if(e.status==="open"){e.status="closed"}else{e.status="open"}};e.prototype.resizePropertyWidth=function(e){this.propertyTitleWidth=this.initDragbarLeft-30+e.x};
// 展开面板
e.prototype.expand=function(){if(!this.isOpen){this.isOpen=true;this.width=this.originalWidth=this.currentWidth;this.draggable.minWidth=240;this.updateContainerWidth();this.resizing.emit({right:this.width})}};
// 隐藏面板
e.prototype.collapse=function(){if(this.isOpen){
// 记录当前的尺寸
this.currentWidth=this.width;this.isOpen=false;this.width=0;this.originalWidth=0;this.draggable.minWidth=0;this.draggable.resetPosition();this.updateContainerWidth();this.resizing.emit({right:this.width})}};e.prototype.updateContainerWidth=function(){this.eastDiv.nativeElement.style.width=this.width+"px"};e.prototype.setContent=function(e){this.content.clear();this.content.insert(e.hostView);this.expand()};s([Object(o["Input"])(),a("design:type",Object)],e.prototype,"width",void 0);s([Object(o["Input"])(),a("design:type",Number)],e.prototype,"height",void 0);s([Object(o["Input"])(),a("design:type",HTMLDivElement)],e.prototype,"bounds",void 0);s([Object(o["ViewChild"])("east"),a("design:type",o["ElementRef"])],e.prototype,"eastDiv",void 0);s([Object(o["Output"])(),a("design:type",Object)],e.prototype,"resizing",void 0);s([Object(o["ViewChild"])("panelDrag"),a("design:type",r["AngularDraggableDirective"])],e.prototype,"draggable",void 0);s([Object(o["ViewChild"])("content",{read:o["ViewContainerRef"]}),a("design:type",o["ViewContainerRef"])],e.prototype,"content",void 0);e=s([Object(o["Component"])({selector:"app-property-panel",template:n("./src/app/framework/layout/property-panel/property-panel.component.html"),styles:[n("./src/app/framework/layout/property-panel/property-panel.component.css")]}),a("design:paramtypes",[i["WindowService"]])],e);return e}();
/***/},
/***/"./src/app/framework/layout/sidebar/sidebar.component.css":
/***/function(e,t,n){t=e.exports=n("./node_modules/css-loader/lib/css-base.js")(false);
// imports
// module
t.push([e.i,"",""]);
// exports
/*** EXPORTS FROM exports-loader ***/e.exports=e.exports.toString();
/***/},
/***/"./src/app/framework/layout/sidebar/sidebar.component.html":
/***/function(e,t){e.exports='<div id="workbench.parts.activitybar" class="activitybar" [style.height]="height + \'px\'">\n  \x3c!-- autoHeight [position]="{top: -56}" --\x3e\n  <div class="content" [style.height]="height + \'px\'">\n    <div class="composite-bar">\n      <div class="monaco-action-bar vertical">\n        <ul class="actions-container" role="toolbar" aria-label="活动视图切换器">\n          <li (click)="selectTas(0)" class="action-item" [class.checked]="isActiveTab(0)" role="button" draggable="true"\n              tabindex="0"\n              title="资源管理器">\n            <a class="action-label explore" title="资源管理器"></a>\n          </li>\n          <li (click)="selectTas(1)" [class.checked]="isActiveTab(1)" class="action-item" role="button" draggable="true"\n              tabindex="0"\n              title="Git">\n            <a class="action-label toolbox"></a>\n          </li>\n          <li (click)="selectTas(2)" [class.checked]="isActiveTab(2)" class="action-item" role="button" draggable="true"\n              tabindex="0"\n              title="调试 (Ctrl+Shift+D)">\n            <a class="action-label debug"></a>\n          </li>\n          <li (click)="selectTas(3)" [class.checked]="isActiveTab(3)" class="action-item" role="button" draggable="true"\n              tabindex="0"\n              title="扩展 (Ctrl+Shift+X)">\n            <a class="action-label extensions"></a>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=""></div>\n  </div>\n</div>\n\n<div class="sidebar panel" [style.width]="width - 50 + \'px\'" [style.height]="height + \'px\'" #sidebar>\n\n  \x3c!-- <div *ngIf="currentTabIndex === 0">\n    <div class="title">\n      <div class="title-label">\n        <span title="资源管理器 (Ctrl+Shift+E)">资源管理器</span>\n      </div>\n      <div class="title-actions">\n        <div class="monaco-toolbar">\n          <div class="monaco-action-bar animated">\n            <ul class="actions-container" role="toolbar" aria-label="资源管理器 操作">\n              <li class="action-item">\n                <a class="action-label icon new-file" role="button" tabindex="0" title="新建文件"></a>\n              </li>\n              <li class="action-item">\n                <a class="action-label icon new-folder" role="button" tabindex="0" title="新建文件夹"></a>\n              </li>\n              <li class="action-item">\n                <a class="action-label icon refresh-explorer" role="button" tabindex="0" title="刷新"></a>\n              </li>\n              <li class="action-item">\n                <a class="action-label icon collapse-explorer" role="button" tabindex="0" title="全部折叠"></a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n    <div style="overflow:auto;padding-bottom: 10px;" autoHeight [position]="{ top: -90 }">\n      <perfect-scrollbar [config]="{suppressScrollX: true}">\n        <img src="../../../assets/imgs/file_explorer.png">\n      </perfect-scrollbar>\n    </div>\n  </div> --\x3e\n\n  \x3c!-- 工具箱 --\x3e\n  \x3c!-- <div *ngIf="currentTabIndex === 1" class="panel">\n    <div class="title">\n      <div class="title-label">\n        <span title="工具箱">工具箱</span>\n      </div>\n    </div>\n\n\n    <div style="overflow:auto; padding-bottom: 10px;" autoHeight [position]="{ top: -90 }">\n      <perfect-scrollbar [config]="{suppressScrollX: true}">\n        <ul class="toolbox">\n          <li *ngFor="let group of ctrls;let i=index;">\n            <a [class]="group.status === \'closed\' ? \'icon group collapse\': \'icon group expand\' " (click)="changeStatus(group)">{{group.groupName}}</a>\n            <ul *ngIf="group.status === \'open\'">\n              <li>\n                <a class="icon cursor">指针</a>\n              </li>\n              <li *ngFor="let ctrl of group.controls">\n                <a class="icon {{ctrl.code}}">{{ctrl.title}}</a>\n              </li>\n\n            </ul>\n          </li>\n        </ul>\n      </perfect-scrollbar>\n    </div>\n\n  </div> --\x3e\n\n\n  <div *ngFor="let panel of panels let i=index" class="sidebar-content {{i === currentTabIndex ? \'active\' : \'\'}}">\n    <div class="title">\n      <div class="title-label">\n        <span title="{{panel.title}}">{{panel.title}}</span>\n      </div>\n    </div>\n    <div style="overflow:hidden;padding: 5px 0px 0 10px;" [style.height]="(height -35) + \'px\'">\n      <perfect-scrollbar [config]="{suppressScrollX: true}">\n        \x3c!--<app-idecontentwrapper [content]="panel.content"></app-idecontentwrapper>--\x3e\n        <ng-container #panelContainer></ng-container>\n      </perfect-scrollbar>\n    </div>\n  </div>\n</div>\n\n\n<div ngDraggable [bounds]="bounds" [region]="\'west\'" [inBounds]="true" (movingOffset)="onMoving($event)"\n     (endOffset)="onEndOffset($event)"\n     class="monaco-sash vertical" [style.height]="height + \'px\'" style="width: 4px;"\n     [style.left]="originalWidth + \'px\' "></div>\n'
/***/},
/***/"./src/app/framework/layout/sidebar/sidebar.component.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"SidebarComponent",function(){return a});
/* harmony import */var o=n("./node_modules/@angular/core/esm5/core.js");
/* harmony import */var i=n("./src/app/framework/directives/angular-draggable.directive.ts");var r=this&&this.__decorate||function(e,t,n,o){var i=arguments.length,r=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)if(s=e[a])r=(i<3?s(r):i>3?s(t,n,r):s(t,n))||r;return i>3&&r&&Object.defineProperty(t,n,r),r};var s=this&&this.__metadata||function(e,t){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(e,t)};var a=function(){function e(e,t){this.el=e;this.render=t;this.resizing=new o["EventEmitter"];this.currentTabIndex=0;this.isOpen=true;this.panels=[{title:"explorer"},{title:"git"}]}e.prototype.ngOnInit=function(){
// this.originalWidth = this.sidebarEl.nativeElement.clientWidth;
// console.log(`原始宽度：${this.originalWidth}`);
this.originalWidth=this.width};e.prototype.onMoving=function(e){this.isOpen=true;this.width=this.originalWidth+e.x;this.resizing.emit({left:this.width,target:this})};e.prototype.onEndOffset=function(e){};e.prototype.selectTas=function(e){if(this.currentTabIndex!==e){this.currentTabIndex=e;if(!this.isOpen){this.expand()}}else{if(this.isOpen){
// 隐藏面板
this.collapse()}else{this.expand()}}};
// 展开面板
e.prototype.expand=function(){this.isOpen=true;this.width=this.originalWidth=this.currentWidth;this.draggable.minWidth=240;this.resizing.emit({left:this.width,target:this})};
// 隐藏面板
e.prototype.collapse=function(){
// 记录当前的尺寸
this.currentWidth=this.width;this.isOpen=false;this.width=50;this.originalWidth=50;this.draggable.minWidth=0;this.draggable.resetPosition();this.resizing.emit({left:this.width,target:this})};e.prototype.isActiveTab=function(e){return this.currentTabIndex===e};e.prototype.changeStatus=function(e){if(e.status==="open"){e.status="closed"}else{e.status="open"}};e.prototype.loadPanel=function(e,t){var n;switch(e){case"文件":n=0;break;case"Git":n=1;break;default:return}var o=this.panelContainers.find(function(e,t,o){return t===n});if(o){o.clear();o.insert(t.hostView)}};r([Object(o["ViewChild"])("sidebar"),s("design:type",o["ElementRef"])],e.prototype,"sidebarEl",void 0);r([Object(o["Input"])(),s("design:type",HTMLDivElement)],e.prototype,"bounds",void 0);r([Object(o["Input"])(),s("design:type",Number)],e.prototype,"width",void 0);r([Object(o["Input"])(),s("design:type",Number)],e.prototype,"height",void 0);r([Object(o["Output"])(),s("design:type",o["EventEmitter"])],e.prototype,"resizing",void 0);r([Object(o["ViewChild"])(i["AngularDraggableDirective"]),s("design:type",i["AngularDraggableDirective"])],e.prototype,"draggable",void 0);r([Object(o["ViewChildren"])("panelContainer",{read:o["ViewContainerRef"]}),s("design:type",o["QueryList"])],e.prototype,"panelContainers",void 0);e=r([Object(o["Component"])({selector:"app-sidebar",template:n("./src/app/framework/layout/sidebar/sidebar.component.html"),styles:[n("./src/app/framework/layout/sidebar/sidebar.component.css")]}),s("design:paramtypes",[o["ElementRef"],o["Renderer2"]])],e);return e}();
/***/},
/***/"./src/app/framework/layout/status-bar/status-bar.component.css":
/***/function(e,t,n){t=e.exports=n("./node_modules/css-loader/lib/css-base.js")(false);
// imports
// module
t.push([e.i,"",""]);
// exports
/*** EXPORTS FROM exports-loader ***/e.exports=e.exports.toString();
/***/},
/***/"./src/app/framework/layout/status-bar/status-bar.component.html":
/***/function(e,t){e.exports='<div class="statusbar">\n  <div class="statusbar-item" style="padding-left: 10px">\n     签入成功！\n  </div>\n  <div class="statusbar-item right">\n    行 3, 列 9\n  </div>\n</div>'
/***/},
/***/"./src/app/framework/layout/status-bar/status-bar.component.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"StatusBarComponent",function(){return s});
/* harmony import */var o=n("./node_modules/@angular/core/esm5/core.js");var i=this&&this.__decorate||function(e,t,n,o){var i=arguments.length,r=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)if(s=e[a])r=(i<3?s(r):i>3?s(t,n,r):s(t,n))||r;return i>3&&r&&Object.defineProperty(t,n,r),r};var r=this&&this.__metadata||function(e,t){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(e,t)};var s=function(){function e(){}e.prototype.ngOnInit=function(){};e=i([Object(o["Component"])({selector:"app-status-bar",template:n("./src/app/framework/layout/status-bar/status-bar.component.html"),styles:[n("./src/app/framework/layout/status-bar/status-bar.component.css")]}),r("design:paramtypes",[])],e);return e}();
/***/},
/***/"./src/app/framework/layout/terminal/terminal.component.css":
/***/function(e,t,n){t=e.exports=n("./node_modules/css-loader/lib/css-base.js")(false);
// imports
// module
t.push([e.i,"",""]);
// exports
/*** EXPORTS FROM exports-loader ***/e.exports=e.exports.toString();
/***/},
/***/"./src/app/framework/layout/terminal/terminal.component.html":
/***/function(e,t){e.exports='<div class="part panel terminal" id="workbench.parts.terminal" role="complementary" style="\nright: 0px;\nbottom: 0px;\nleft: 0px;\nposition: absolute;" [ngStyle]="style">\n\n  <div class="title">\n    <div class="composite-bar">\n      <div class="monaco-action-bar">\n        <ul class="actions-container">\n          <li class="action-item checked">\n            <a class="action-label">终端</a>\n          </li>\n          <li class="action-item">\n            <a class="action-label">输出</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class="title-actions">\n      <div class="monaco-action-bar">\n        <ul class="actions-container">\n          <li class="action-item">\n            <a class="action-label icon chevron-up"></a>\n          </li>\n          <li class="action-item"  (click)="collapse()">\n            <a class="action-label icon hide-panel"></a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n\n\n<div ngDraggable *ngIf="isOpen" [bounds]="bounds" [region]="\'south\'" [inBounds]="true" (movingOffset)="onMoving($event)" #horizontalBar\n  class="monaco-sash horizontal" style="height: 4px; left:0px; width: 100%;" [style.top]="originalTop"></div>'
/***/},
/***/"./src/app/framework/layout/terminal/terminal.component.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"TerminalComponent",function(){return c});
/* harmony import */var o=n("./node_modules/@angular/core/esm5/core.js");
/* harmony import */var i=n("./src/app/framework/directives/angular-draggable.directive.ts");
/* harmony import */var r=n("./src/app/framework/services/window.service.ts");var s=this&&this.__decorate||function(e,t,n,o){var i=arguments.length,r=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)if(s=e[a])r=(i<3?s(r):i>3?s(t,n,r):s(t,n))||r;return i>3&&r&&Object.defineProperty(t,n,r),r};var a=this&&this.__metadata||function(e,t){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(e,t)};var c=function(){function e(e){var t=this;this.injector=e;this.resizing=new o["EventEmitter"];this.style={};this.isOpen=true;this.windowService=this.injector.get(r["WindowService"]);this.windowService.onResize.subscribe(function(e){t.style.top=e.height-t.height-22+"px";t.originalTop=t.style.top;t.originalHeight=t.height;t.originalWidth=t.width;if(t.isOpen){t.horizontalBar.resetPosition()}})}e.prototype.ngOnInit=function(){var e=this;this.originalHeight=this.height;this.originalWidth=this.width;this.style={height:this.height+"px",width:this.width+"px",top:this.top+"px"};setTimeout(function(){e.originalTop=e.top+"px";e.style.top=e.originalTop;e.collapse()})};e.prototype.ngOnChanges=function(e){if(e["width"]&&!e["width"].isFirstChange()){this.style=Object.assign(this.style,{width:this.width+"px"});this.originalWidth=this.width}};e.prototype.ngAfterViewInit=function(){};e.prototype.onMoving=function(e){this.height=this.originalHeight-e.y;this.width=this.originalWidth-e.x;this.style={width:this.width+"px",height:this.height+"px"};this.resizing.emit({height:this.height,target:this})};e.prototype.collapse=function(){if(this.isOpen){this.currentHeight=this.height;this.isOpen=false;this.height=0;this.horizontalBar.minHeight=0;this.style={width:this.width+"px",height:this.height+"px",top:this.bounds.clientHeight-this.height+"px"};
// this.originalTop = this.style.top;
this.horizontalBar.resetPosition();this.resizing.emit({height:this.height,target:this})}};e.prototype.expand=function(){if(!this.isOpen){this.height=this.currentHeight;this.isOpen=true;this.horizontalBar.minHeight=140;this.style={width:this.width+"px",height:this.height+"px",top:this.bounds.clientHeight-this.height+"px"};this.resizing.emit({height:this.height,target:this})}};s([Object(o["Input"])(),a("design:type",HTMLDivElement)],e.prototype,"bounds",void 0);s([Object(o["Input"])(),a("design:type",Number)],e.prototype,"width",void 0);s([Object(o["Input"])(),a("design:type",Number)],e.prototype,"height",void 0);s([Object(o["Input"])(),a("design:type",Number)],e.prototype,"top",void 0);s([Object(o["ViewChild"])(i["AngularDraggableDirective"]),a("design:type",i["AngularDraggableDirective"])],e.prototype,"horizontalBar",void 0);s([Object(o["Output"])(),a("design:type",Object)],e.prototype,"resizing",void 0);e=s([Object(o["Component"])({selector:"app-terminal",template:n("./src/app/framework/layout/terminal/terminal.component.html"),styles:[n("./src/app/framework/layout/terminal/terminal.component.css")]}),a("design:paramtypes",[o["Injector"]])],e);return e}();
/***/},
/***/"./src/app/framework/layout/top-menu/navbar/menu.ts":
/***/function(e,t,n){"use strict";
/* unused harmony export Divider */
/* unused harmony export MenuItem */
/* unused harmony export Lvl3MenuItem */
/* unused harmony export Lvl2MenuItem */
/* unused harmony export Lvl1MenuItem */
/* harmony export (binding) */n.d(t,"Menu",function(){return p});var o=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)if(t.hasOwnProperty(n))e[n]=t[n]};return function(t,n){e(t,n);function o(){this.constructor=t}t.prototype=n===null?Object.create(n):(o.prototype=n.prototype,new o)}}();var i=function(){function e(){this.id="divider"}return e}();var r=function(){function e(){}return e}();var s=function(e){o(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t}(r);var a=function(e){o(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t}(r);var c=function(e){o(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t}(r);var p=function(){function e(){}return e}();
/***/},
/***/"./src/app/framework/layout/top-menu/navbar/navbar.component.css":
/***/function(e,t,n){t=e.exports=n("./node_modules/css-loader/lib/css-base.js")(false);
// imports
// module
t.push([e.i,"/*.submenu {*/\n  /*position: relative;*/\n  /*!*display: inline-block;*!*/\n/*}*/\n/*.dropdown-menu.popup-menu {*/\n  /*position: absolute;*/\n  /*left: 0px;*/\n  /*top: 0px;*/\n/*}*/\n\n/*.nav-item :hover {*/\n  /*background: #f2f2f0;*/\n  /*box-shadow: 0px 1px 3px rgba(34, 25, 25, 0.2);*/\n/*}*/\n\n.dropdown-menu {\n  border-radius: 0px;\n  padding-top: 0px;\n  padding-bottom: 2px;\n  margin-top: 0;\n}\n.web-ide-menu-bar .dropdown-item,\n.submenu .dropdown-item  {\n    line-height: 20px;\n}\n\n.dropdown-item:hover, .dropdown-item:focus {\n  background-color: transparent;\n}\n\n.nav-item.show .nav-link {\n  background-color: #000000;\n}\n\n.dropdown-menu.submenu {\n  margin-top:0;\n}\n\n.dropdown-item.haschild {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cdefs%3E%3Cstyle%3E.icon-canvas-transparent,.icon-vs-out{fill:%23252526}.icon-canvas-transparent{opacity:0}.icon-vs-action-green{fill:%23000000}%3C/style%3E%3C/defs%3E%3Ctitle%3Econtinue%3C/title%3E%3Cpath class='icon-canvas-transparent' d='M16 0v16H0V0z' id='canvas'/%3E%3Cpath class='icon-vs-action-green' d='M4 1.5v13L12.667 8 4 1.5z' id='iconBg'/%3E%3C/svg%3E\");\n  background-size: 8px;\n  background-position: right center;\n  background-repeat: no-repeat;\n}\n\nul.dropdown-menu li {\n  padding-right: 5px;\n}\n\nul.dropdown-menu li:hover {\n  background-color: #ededed\n}\n",""]);
// exports
/*** EXPORTS FROM exports-loader ***/e.exports=e.exports.toString();
/***/},
/***/"./src/app/framework/layout/top-menu/navbar/navbar.component.html":
/***/function(e,t){e.exports='<div class="collapse navbar-collapse" id="navbarSupportedContent" style="display: -webkit-box !important;\n  display: -ms-flexbox !important;\n  display: flex !important;\n  -ms-flex-preferred-size: auto;\n  flex-basis: auto;">\n\n  <ul class="web-ide-menu-bar navbar-nav mr-auto" navbar>\n    <li class="nav-item dropdown" [dropdown]="1" *ngFor="let l1MenuItem of menuConfig.items">\n      <a dropdownButton class="nav-link" href="javascript:;" [isDisabled]="l1MenuItem.disabled">{{l1MenuItem.label}}</a>\n      <ng-container *ngIf="l1MenuItem.submenu">\n        <ul *dropdownMenu class="dropdown-menu">\n          <ng-container *ngFor="let l2MenuItem of l1MenuItem.submenu">\n            <ng-container *ngIf="l2MenuItem.label">\n              <li *ngIf="l2MenuItem.submenu" role="menuitem" [dropdown]="2" placement="top right" container="body">\n                <a dropdownButton class="dropdown-item" [class.haschild]="l2MenuItem.submenu" href="javascript:;" isDisabled="{{l2MenuItem.disabled}}">{{l2MenuItem.label}}</a>\n                <ul *dropdownMenu class="dropdown-menu submenu">\n                  <li *ngFor="let l3MenuItem of l2MenuItem.submenu">\n                    <a class="dropdown-item" href="javascript:;" *ngIf="l3MenuItem.label" dropdownItem="{{l3MenuItem.command}}"  [isDisabled]="l3MenuItem.disabled">{{l3MenuItem.label}}</a>\n                    <div class="dropdown-divider" *ngIf="l3MenuItem.id===\'divider\'"></div>\n                  </li>\n                </ul>\n              </li>\n              <li *ngIf="!l2MenuItem.submenu">\n                <a class="dropdown-item" dropdownItem="{{l2MenuItem.command}}" href="javascript:;" [isDisabled]="l2MenuItem.disabled">{{l2MenuItem.label}}</a>\n              </li>\n            </ng-container>\n            <li *ngIf="l2MenuItem.id===\'divider\'"><div class="dropdown-divider"></div></li>\n          </ng-container>\n\n        </ul>\n      </ng-container>\n    </li>\n  </ul>\n\n\n  \x3c!--<ul class="web-ide-menu-bar navbar-nav mr-auto">--\x3e\n    \x3c!--<li class="nav-item dropdown" dropdown>--\x3e\n      \x3c!--<a dropdownToggle class="nav-link" href="#">文件</a>--\x3e\n      \x3c!--<div *dropdownMenu class="dropdown-menu">--\x3e\n        \x3c!--<div dropdown container="body" class="submenu">--\x3e\n          \x3c!--<a class="dropdown-item" href="#" dropdownToggle>新建文件</a>--\x3e\n          \x3c!--<div *dropdownMenu class="dropdown-menu popup-menu">--\x3e\n            \x3c!--<a class="dropdown-item" href="#">新建ts文件</a>--\x3e\n          \x3c!--</div>--\x3e\n        \x3c!--</div>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">新建窗口</a>--\x3e\n        \x3c!--<div class="dropdown-divider"></div>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">打开文件</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">打开文件夹</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">打开工作区</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">打开最近的文件</a>--\x3e\n        \x3c!--<div class="dropdown-divider"></div>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">将文件添加到工作区</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">将工作区另存为</a>--\x3e\n        \x3c!--<div class="dropdown-divider"></div>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">保存</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">另存为</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">全部保存</a>--\x3e\n        \x3c!--<div class="dropdown-divider"></div>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">自动保存</a>--\x3e\n        \x3c!--<div class="dropdown-divider"></div>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">首选项</a>--\x3e\n        \x3c!--<div class="dropdown-divider"></div>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">还原文件</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">关闭编辑器</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">关闭文件夹</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">关闭窗口</a>--\x3e\n        \x3c!--<div class="dropdown-divider"></div>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">退出</a>--\x3e\n      \x3c!--</div>--\x3e\n    \x3c!--</li>--\x3e\n    \x3c!--<li class="nav-item dropdown" dropdown>--\x3e\n      \x3c!--<a dropdownToggle class="nav-link" href="#">编辑</a>--\x3e\n      \x3c!--<div *dropdownMenu class="dropdown-menu">--\x3e\n        \x3c!--<a class="dropdown-item" href="#">撤销</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">恢复</a>--\x3e\n        \x3c!--<div class="dropdown-divider"></div>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">剪切</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">复制</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">粘贴</a>--\x3e\n        \x3c!--<div class="dropdown-divider"></div>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">查找</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">替换</a>--\x3e\n        \x3c!--<div class="dropdown-divider"></div>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">在文件中查找</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">在文件中替换</a>--\x3e\n        \x3c!--<div class="dropdown-divider"></div>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">切换行注释</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">切换块注释</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">Emmet展开缩写</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">Emmet...</a>--\x3e\n      \x3c!--</div>--\x3e\n    \x3c!--</li>--\x3e\n    \x3c!--<li class="nav-item dropdown" dropdown>--\x3e\n      \x3c!--<a dropdownToggle class="nav-link" href="#">选择</a>--\x3e\n      \x3c!--<div *dropdownMenu class="dropdown-menu">--\x3e\n        \x3c!--<a class="dropdown-item" href="#">全选</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">展开选定的内容</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">缩小选定的范围</a>--\x3e\n        \x3c!--<div class="dropdown-divider"></div>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">向上复制一行</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">向下复制一行</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">向上移动一行</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">向下移动一行</a>--\x3e\n        \x3c!--<div class="dropdown-divider"></div>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">切换为"Ctrl+单击"进行多光标功能</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">在上面添加光标</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">在下面添加光标</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">在行尾添加光标</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">添加下一个匹配项</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">添加上一个匹配项</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">选择所有匹配项</a>--\x3e\n      \x3c!--</div>--\x3e\n    \x3c!--</li>--\x3e\n    \x3c!--<li class="nav-item dropdown" dropdown>--\x3e\n      \x3c!--<a dropdownToggle class="nav-link" href="#">查看</a>--\x3e\n      \x3c!--<div *dropdownMenu class="dropdown-menu">--\x3e\n        \x3c!--<a class="dropdown-item" href="#">命令面板...</a>--\x3e\n        \x3c!--<div class="dropdown-divider"></div>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">资源管理器</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">搜索</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">源代码管理器</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">调试</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">扩展</a>--\x3e\n        \x3c!--<div class="dropdown-divider"></div>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">输出</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">问题</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">调试控制台</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">集成终端</a>--\x3e\n        \x3c!--<div class="dropdown-divider"></div>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">切换全屏</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">切换Zen模式</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">切换菜单栏</a>--\x3e\n        \x3c!--<div class="dropdown-divider"></div>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">拆分编辑器</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">切换编辑器组布局</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">向右移动侧边栏</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">切换侧边栏</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">切换面板</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">隐藏状态栏</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">隐藏活动栏</a>--\x3e\n        \x3c!--<div class="dropdown-divider"></div>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">切换自动换行</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">切换小地图</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">切换呈现空格</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">切换控制字符</a>--\x3e\n        \x3c!--<div class="dropdown-divider"></div>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">放大</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">缩小</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">重置缩放</a>--\x3e\n      \x3c!--</div>--\x3e\n    \x3c!--</li>--\x3e\n    \x3c!--<li class="nav-item dropdown" dropdown>--\x3e\n      \x3c!--<a dropdownToggle class="nav-link" href="#">转到</a>--\x3e\n      \x3c!--<div *dropdownMenu class="dropdown-menu">--\x3e\n        \x3c!--<a class="dropdown-item" href="#">后退</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">前进</a>--\x3e\n        \x3c!--<div class="dropdown-divider"></div>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">切换编辑器</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">切换组</a>--\x3e\n        \x3c!--<div class="dropdown-divider"></div>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">转到文件</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">转到文件中的符号</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">转到工作区中的符号</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">转到定义</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">转到类型定义</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">转到实现</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">转到行...</a>--\x3e\n      \x3c!--</div>--\x3e\n    \x3c!--</li>--\x3e\n    \x3c!--<li class="nav-item dropdown" dropdown>--\x3e\n      \x3c!--<a dropdownToggle class="nav-link" href="#">调试</a>--\x3e\n      \x3c!--<div *dropdownMenu class="dropdown-menu">--\x3e\n        \x3c!--<a class="dropdown-item" href="#">启动调试</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">非调试启动</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">停止调试</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">重启调试</a>--\x3e\n        \x3c!--<div class="dropdown-divider"></div>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">打开配置</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">添加配置</a>--\x3e\n        \x3c!--<div class="dropdown-divider"></div>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">单步跳过</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">单步执行</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">单步跳出</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">继续</a>--\x3e\n        \x3c!--<div class="dropdown-divider"></div>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">切换断点</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">新建断点</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">启用所有断点</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">禁用所有断点</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">删除所有断点</a>--\x3e\n        \x3c!--<div class="dropdown-divider"></div>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">安装其他调试器</a>--\x3e\n      \x3c!--</div>--\x3e\n    \x3c!--</li>--\x3e\n    \x3c!--<li class="nav-item dropdown" dropdown>--\x3e\n      \x3c!--<a dropdownToggle class="nav-link" href="#">任务</a>--\x3e\n      \x3c!--<div *dropdownMenu class="dropdown-menu">--\x3e\n        \x3c!--<a class="dropdown-item" href="#">运行任务</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">运行生成任务</a>--\x3e\n        \x3c!--<div class="dropdown-divider"></div>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">中止任务</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">重启正在运行的任务</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">显示正在运行的任务</a>--\x3e\n        \x3c!--<div class="dropdown-divider"></div>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">配置任务</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">配置默认生成任务</a>--\x3e\n      \x3c!--</div>--\x3e\n    \x3c!--</li>--\x3e\n    \x3c!--<li class="nav-item dropdown" dropdown>--\x3e\n      \x3c!--<a dropdownToggle class="nav-link" href="#">帮助</a>--\x3e\n      \x3c!--<div *dropdownMenu class="dropdown-menu">--\x3e\n        \x3c!--<a class="dropdown-item" href="#">欢迎使用</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">交互式演练场</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">文档</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">发行说明</a>--\x3e\n        \x3c!--<div class="dropdown-divider"></div>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">快捷键参考</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">介绍性视频</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">演示与技巧</a>--\x3e\n        \x3c!--<div class="dropdown-divider"></div>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">在Twitter上加入我们</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">搜索功能请求</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">使用英文报告问题</a>--\x3e\n        \x3c!--<div class="dropdown-divider"></div>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">查看许可证</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">隐私声明</a>--\x3e\n        \x3c!--<div class="dropdown-divider"></div>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">切换开发人员工具</a>--\x3e\n        \x3c!--<div class="dropdown-divider"></div>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">检查更新</a>--\x3e\n        \x3c!--<div class="dropdown-divider"></div>--\x3e\n        \x3c!--<a class="dropdown-item" href="#">关于</a>--\x3e\n      \x3c!--</div>--\x3e\n    \x3c!--</li>--\x3e\n  \x3c!--</ul>--\x3e\n\n  \x3c!--<ul class="web-ide-menu-bar navbar-nav mr-auto" navbar>--\x3e\n    \x3c!--<li class="nav-item dropdown" [dropdown]="1">--\x3e\n      \x3c!--<a dropdownButton class="nav-link" href="#">文件</a>--\x3e\n      \x3c!--<ul *dropdownMenu class="dropdown-menu">--\x3e\n        \x3c!--<li [dropdown]="2" container="body" placement="top right" class="submenu">--\x3e\n          \x3c!--<a class="dropdown-item" href="#" dropdownButton>新建文件</a>--\x3e\n          \x3c!--<ul *dropdownMenu class="dropdown-menu submenu popup-menu">--\x3e\n            \x3c!--<a class="dropdown-item" href="#" dropdownItem="newtsfile">新建ts文件</a>--\x3e\n          \x3c!--</ul>--\x3e\n        \x3c!--</li>--\x3e\n        \x3c!--<li ><a class="dropdown-item" href="#" dropdownItem="newWindow">新建窗口</a></li>--\x3e\n        \x3c!--<li><div class="dropdown-divider"></div></li>--\x3e\n        \x3c!--<li><a class="dropdown-item" href="#">打开文件</a></li>--\x3e\n      \x3c!--</ul>--\x3e\n    \x3c!--</li>--\x3e\n    \x3c!--<li class="nav-item dropdown" dropdown>--\x3e\n      \x3c!--<a dropdownButton class="nav-link" href="#">编辑</a>--\x3e\n      \x3c!--<div *dropdownMenu class="dropdown-menu">--\x3e\n        \x3c!--<a class="dropdown-item" href="#" dropdownItem="undo" [isDisabled]="true">撤销</a>--\x3e\n        \x3c!--<a class="dropdown-item" href="#" dropdownItem="redo">恢复</a>--\x3e\n      \x3c!--</div>--\x3e\n    \x3c!--</li>--\x3e\n  \x3c!--</ul>--\x3e\n</div>\n'
/***/},
/***/"./src/app/framework/layout/top-menu/navbar/navbar.component.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"NavbarComponent",function(){return p});
/* harmony import */var o=n("./node_modules/@angular/core/esm5/core.js");
/* harmony import */var i=n("./src/app/framework/layout/top-menu/navbar/menu.ts");
/* harmony import */var r=n("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */var s=n.n(r);var a=this&&this.__decorate||function(e,t,n,o){var i=arguments.length,r=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)if(s=e[a])r=(i<3?s(r):i>3?s(t,n,r):s(t,n))||r;return i>3&&r&&Object.defineProperty(t,n,r),r};var c=this&&this.__metadata||function(e,t){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(e,t)};var p=function(){function e(){this.clicked=new o["EventEmitter"]}e.prototype.ngAfterViewInit=function(){var e=this;if(this.navbar){this.itemClickSubscription=this.navbar.onItemClick.subscribe(function(t){return e.itemClick(t)})}};e.prototype.ngOnDestroy=function(){this.itemClickSubscription.unsubscribe()};e.prototype.itemClick=function(e){if(!e){return false}this.clicked.emit(e)};a([Object(o["ViewChild"])(r["NavbarDirective"]),c("design:type",r["NavbarDirective"])],e.prototype,"navbar",void 0);a([Object(o["Input"])(),c("design:type",i["Menu"])],e.prototype,"menuConfig",void 0);a([Object(o["Output"])(),c("design:type",Object)],e.prototype,"clicked",void 0);e=a([Object(o["Component"])({selector:"app-navbar",template:n("./src/app/framework/layout/top-menu/navbar/navbar.component.html"),styles:[n("./src/app/framework/layout/top-menu/navbar/navbar.component.css")]}),c("design:paramtypes",[])],e);return e}();
/***/},
/***/"./src/app/framework/layout/top-menu/navbar/navbarConfigMock.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"menus",function(){return o});
/* unused harmony export NavbarConfigMock */var o={"context-menu":{"atom-text-editor":[{label:"Toggle sagipackage",command:"sagipackage:toggle"}]},menu:[{label:"工程",submenu:[{label:"新建前端工程",command:"newFrontProject"},{label:"新建后端工程",command:"newProject"},{label:"导入工程",command:"newProjectImport"},{label:"删除工程",command:"deleteProject"},{label:"元数据包管理器",command:"metadataPackageManager"}]},{label:"文件",submenu:[{label:"新建目录",command:"newFolder"},{label:"删除目录",command:"deleteFolder"}]},{label:"元数据",submenu:[{label:"新建元数据",command:"newMetadata"},{label:"删除元数据",command:"deleteMetadata"},{label:"打包",command:"pack"},{label:"推送",command:"metadataPackagePush"}]},{label:"编辑",submenu:[{label:"撤销",command:"undo"},{label:"恢复",command:"redo"},{label:"查找",submenu:[{label:"查找",command:"find"},{label:"替换",command:"replace"}]}]},{label:"新建",submenu:[{label:"新建数据库对象",command:"newDbo"}]}]};var i=function(){function e(){}
// constructor() {}
e.prototype.getMenusConfig=function(){return o.menu};return e}();
/***/},
/***/"./src/app/framework/layout/top-menu/top-menu.component.css":
/***/function(e,t,n){t=e.exports=n("./node_modules/css-loader/lib/css-base.js")(false);
// imports
// module
t.push([e.i,"",""]);
// exports
/*** EXPORTS FROM exports-loader ***/e.exports=e.exports.toString();
/***/},
/***/"./src/app/framework/layout/top-menu/top-menu.component.html":
/***/function(e,t){e.exports='<nav class="navbar navbar-light" style=" padding-top: 0;padding-bottom: 0; padding-left: 5px">\n  \x3c!-- <a class="navbar-brand logo"> </a> --\x3e\n\n  <div class="left-menu">\n    \x3c!--<ul class="menus" style="display: inline-block">--\x3e\n    \x3c!--<li class="nav-item">--\x3e\n    \x3c!--<a class="nav-link" href="#">文件</a>--\x3e\n    \x3c!--</li>--\x3e\n    \x3c!--<li class="nav-item">--\x3e\n    \x3c!--<a class="nav-link" href="#">编辑</a>--\x3e\n    \x3c!--</li>--\x3e\n\n    \x3c!--</ul>--\x3e\n    \x3c!--<app-plugin-container [componentRef]="navbarContent"></app-plugin-container>--\x3e\n    <app-navbar [menuConfig]="menuConfig"></app-navbar>\n  </div>\n\n  <ul class="nav justify-content-end" style="flex:1">\n    \x3c!-- <li class="nav-item">\n      <a class="nav-link active" href="#">Active</a>\n    </li>\n    <li class="nav-item">\n      <a class="nav-link" href="#">Link</a>\n    </li>\n    <li class="nav-item">\n      <a class="nav-link" href="#">Link</a>\n    </li> --\x3e\n    \x3c!-- <li class="nav-item">\n      <a class="nav-link userinfo">\n         <img class="rounded-circle" alt="头像" style="width: 40px; height: 40px;" src="assets/imgs/8.jpg">\n        <span style="margin-left: 5px;">Lucas Huang</span>\n      </a>\n    </li> --\x3e\n  </ul>\n</nav>\n'
/***/},
/***/"./src/app/framework/layout/top-menu/top-menu.component.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"TopMenuComponent",function(){return c});
/* harmony import */var o=n("./node_modules/@angular/core/esm5/core.js");
/* harmony import */var i=n("./src/app/framework/layout/top-menu/navbar/navbarConfigMock.ts");
/* harmony import */var r=n("./src/app/framework/layout/top-menu/navbar/navbar.component.ts");var s=this&&this.__decorate||function(e,t,n,o){var i=arguments.length,r=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)if(s=e[a])r=(i<3?s(r):i>3?s(t,n,r):s(t,n))||r;return i>3&&r&&Object.defineProperty(t,n,r),r};var a=this&&this.__metadata||function(e,t){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(e,t)};var c=function(){function e(){this.menuConfig={items:[]};this.menuConfig={items:i["menus"].menu}}e.prototype.ngOnInit=function(){this.navbarClicked=this.navbarComp.clicked};s([Object(o["ViewChild"])(r["NavbarComponent"]),a("design:type",r["NavbarComponent"])],e.prototype,"navbarComp",void 0);s([Object(o["Input"])(),a("design:type",o["ComponentRef"])],e.prototype,"navbarContent",void 0);e=s([Object(o["Component"])({selector:"app-top-menu",template:n("./src/app/framework/layout/top-menu/top-menu.component.html"),styles:[n("./src/app/framework/layout/top-menu/top-menu.component.css")]}),a("design:paramtypes",[])],e);return e}();
/***/},
/***/"./src/app/framework/services/package-manager.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"PackageManager",function(){return s});
/* harmony import */var o=n("./node_modules/@angular/core/esm5/core.js");var i=this&&this.__decorate||function(e,t,n,o){var i=arguments.length,r=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)if(s=e[a])r=(i<3?s(r):i>3?s(t,n,r):s(t,n))||r;return i>3&&r&&Object.defineProperty(t,n,r),r};var r=this&&this.__metadata||function(e,t){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(e,t)};var s=function(){function e(){this.packages=new Map}e.prototype.activePackage=function(e){var t=this.packages.get(e);if(t){t.pack.activate(t.state)}};e.prototype.setPackage=function(e,t){this.packages.set(e.id,{pack:e,state:t})};e=i([Object(o["Injectable"])(),r("design:paramtypes",[])],e);return e}();
/***/},
/***/"./src/app/framework/services/plugin-loader.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"PluginLoader",function(){return i});
/* harmony import */var o=n("./node_modules/@angular/core/esm5/core.js");var i=function(){function e(e,t){this.gsp=e;this.injector=t;this.cfr=t.get(o["ComponentFactoryResolver"])}e.prototype.loadSidebar=function(){
// const fileTreePanelPackage = new FileTreePanelPackage(this.gsp, this.cfr, this.injector);
// fileTreePanelPackage.activate({});
// const controlTreePanelPackage = new ControlTreePanelPackage(this.workspace, 'controlTreePanelPackage');
// controlTreePanelPackage.activate({});
// let toolboxPackage = new ControlToolboxPackage(this.workspace);
// // this.leftTabs.push(toolboxPackage);
// toolboxPackage.activate({});
// const gitpanelPackage = new GitPanelPackage(this.workspace, this.cfr, this.injector);
// gitpanelPackage.id = 'gitpanelPackage';
// gitpanelPackage.activate({});
};e.prototype.loadNavbar=function(){
// const navbarPackage = new NavbarPackage(this.gsp, this.cfr, this.injector);
// navbarPackage.id = 'navbarPackage';
// navbarPackage.activate({});
};e.prototype.foo=function(){};return e}();
/***/},
/***/"./src/app/framework/services/window.service.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"WindowService",function(){return i});
/* harmony import */var o=n("./node_modules/@angular/core/esm5/core.js");var i=function(){function e(){this.onResize=new o["EventEmitter"];this.resize()}e.prototype.resize=function(){this.winSize={width:window.innerWidth,height:window.innerHeight}};Object.defineProperty(e.prototype,"size",{get:function(){this.resize();return this.winSize},enumerable:true,configurable:true});return e}();
/***/},
/***/"./src/app/ide-dev-kit/main-panel/main-panel.component.css":
/***/function(e,t,n){t=e.exports=n("./node_modules/css-loader/lib/css-base.js")(false);
// imports
// module
t.push([e.i,":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n",""]);
// exports
/*** EXPORTS FROM exports-loader ***/e.exports=e.exports.toString();
/***/},
/***/"./src/app/ide-dev-kit/main-panel/main-panel.component.html":
/***/function(e,t){e.exports='\x3c!--<button routerLink="/editor">test</button>--\x3e\n\x3c!--<router-outlet></router-outlet>--\x3e\n\x3c!-- <div #panelContainer></div> --\x3e\n\x3c!-- <div [innerHtml]="data"></div> --\x3e\n'
/***/},
/***/"./src/app/ide-dev-kit/main-panel/main-panel.component.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"MainPanelComponent",function(){return c});
/* harmony import */var o=n("./node_modules/@angular/core/esm5/core.js");
/* harmony import */var i=n("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */var r=n.n(i);var s=this&&this.__decorate||function(e,t,n,o){var i=arguments.length,r=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)if(s=e[a])r=(i<3?s(r):i>3?s(t,n,r):s(t,n))||r;return i>3&&r&&Object.defineProperty(t,n,r),r};var a=this&&this.__metadata||function(e,t){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(e,t)};var c=function(){function e(e,t,n){this.compiler=e;this.injector=t;this.eb=n;
// this.data = '';
// this.eb.subscribe('GitFileItemComponent', 'c10001', 'file-diff', this, (data: any) => {
//   this.data = data.toString();
// });
// this.eb.getProxy(this, () => this.constructor.name).register(['aaa']); // 这话什么意思？
console.log("main panel component init ======================")}e.prototype.ngOnInit=function(){this.createComponent()};e.prototype.createComponent=function(){var e=this;if(!this.id){throw new Error("未指定插件id或id为空。")}
// let url = "editorPackage.module#./src/app/metadata-editor-demo/package.module.ts#MetadataEditorPackageModule";
var t,o;i=this.url.split("#"),t=i[0],o=i[2];
// 如果未指定导出模块，默认使用default.
if(!o){o="default"}
// 异步加载模块
n("./src/$$_lazy_require_resource lazy recursive")(this.url).then(function(e){return e[o]}).then(function(n){return e.checkNotEmpty(n,t,o)}).then(function(e){
// const compiled = this.compiler.compileModuleAndAllComponentsSync(type);
// const moduleInstance = compiled.ngModuleFactory.create(this.injector);
// const pkg = (<PackageModule>moduleInstance.instance).getPackage(this.workspace, moduleName);
// const componentType = pkg.getComponent();
// const componentFactory = compiled.componentFactories.find(
//   (compFactory: ComponentFactory<any>) => compFactory.componentType === componentType);
// const comp = this.dmRoom.createComponent(componentFactory, undefined, moduleInstance.injector, undefined, moduleInstance);
//
// // 测试使用组件工厂创建组件实例之后再放入ViewContainer中
// // let componentRef = componentFactory.create(moduleInstance.injector, undefined, undefined, moduleInstance);
// // this.dmRoom.insert(componentRef.hostView);
// // pkg.activate({});
//
// // if ((<IDesignerComponent>(comp.instance)).metadataContent != undefined){
// (<IDesignerComponent>comp.instance).metadataContent = this.metadataContent;
// // }
// this.workspace.setPackages(this.id, pkg);
// // debugger;
});var i};e.prototype.checkNotEmpty=function(e,t,n){if(!e){throw new Error("Cannot find '"+n+"' in '"+t+"'")}return e};s([Object(o["ViewChild"])("panelContainer",{read:o["ViewContainerRef"]}),a("design:type",o["ViewContainerRef"])],e.prototype,"dmRoom",void 0);s([Object(o["Input"])(),a("design:type",Object)],e.prototype,"url",void 0);s([Object(o["Input"])(),a("design:type",Object)],e.prototype,"id",void 0);s([Object(o["Input"])(),a("design:type",Object)],e.prototype,"metadataContent",void 0);e=s([Object(o["Component"])({selector:"app-main-panel",template:n("./src/app/ide-dev-kit/main-panel/main-panel.component.html"),styles:[n("./src/app/ide-dev-kit/main-panel/main-panel.component.css")]}),a("design:paramtypes",[o["Compiler"],o["Injector"],i["EventBus"]])],e);return e}();
/***/},
/***/"./src/app/ide-dev-kit/main-panel/main-panel.module.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"MainPanelModule",function(){return a});
/* harmony import */var o=n("./node_modules/@angular/core/esm5/core.js");
/* harmony import */var i=n("./src/app/ide-dev-kit/main-panel/main-panel.component.ts");var r=this&&this.__decorate||function(e,t,n,o){var i=arguments.length,r=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)if(s=e[a])r=(i<3?s(r):i>3?s(t,n,r):s(t,n))||r;return i>3&&r&&Object.defineProperty(t,n,r),r};var s=this&&this.__metadata||function(e,t){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(e,t)};
// declare var lazyRequire: any;
var a=function(){
// private readonly routerMap: Map<string, string> = new Map<string, string>([
//   ['/editor', 'editor.module#./src/app/metadata-editor-demo/metadata-editor-demo.module.ts#MetadataEditorDemoModule']
// ]);
function e(){
// router.events
//   .filter(event => event instanceof  NavigationStart)
//   .subscribe((event: NavigationStart) => {
//     // 读取当前路由Url地址
//     const routerUrl = event.url;
//     // 判断是否拦截当前路由
//     if (this.routerMap.has(routerUrl)) {
//       // 读取异步路由资源模块url地址
//       const moduleUrl = this.routerMap.get(routerUrl);
//       // 截取导航路径，导航路径为url地址去掉第一个字符'/'
//       const navigationPath = routerUrl.substr(1, routerUrl.length - 1);
//       // 读取顶级路由配置对象集合
//       const routerConfigs = this.router.config;
//       // 如果未配置此url地址路由，则创建异步路由配置，并记录到路由配置集合
//       if (!routerConfigs.find(routerConfig => routerConfig.path === navigationPath)) {
//         routerConfigs.push({
//           path: navigationPath,
//           // 定义异步路由方法，调用loadModule加载异步路由模块。
//           loadChildren: () => this.loadModule(moduleUrl)
//         });
//         // 重置路由配置
//         this.router.resetConfig(routerConfigs);
//       }
//     }
//   });
}
/**
     * 加载异步路由模块
     */e.prototype.loadModule=function(e){
// 截取异步路由资源模块url地址，获取模块加载信息。
// tslint:disable-next-line:prefer-const
// let [moduleName, moduleKey, exportName] = url.split('#');
// // 如果未指定导出模块，默认使用default。
// if (exportName === undefined) {
//   exportName = 'default';
// }
// // 异步加载资源模块
// return lazyRequire(url)
//   .then((module: any) => module[exportName])
//   .then((type: any) => this.checkNotEmpty(type, moduleName, exportName))
//   .then((type: any) => this.compiler.compileModuleAsync(type));
};e.prototype.checkNotEmpty=function(e,t,n){
// if (!value) {
//   throw new Error(`Cannot find '${exportName}' in '${modulePath}'`);
// }
// return value;
};e.prototype.test=function(e){
// this.compiler.comp
};e=r([Object(o["NgModule"])({
// imports: [
//
// ],
declarations:[i["MainPanelComponent"]],exports:[i["MainPanelComponent"]]}),s("design:paramtypes",[])],e);return e}();
/***/},
/***/"./src/app/ide-dev-kit/plugin-container/plugin-container.component.css":
/***/function(e,t,n){t=e.exports=n("./node_modules/css-loader/lib/css-base.js")(false);
// imports
// module
t.push([e.i,":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n",""]);
// exports
/*** EXPORTS FROM exports-loader ***/e.exports=e.exports.toString();
/***/},
/***/"./src/app/ide-dev-kit/plugin-container/plugin-container.component.html":
/***/function(e,t){e.exports="<ng-container #pluginContainer></ng-container>\n"
/***/},
/***/"./src/app/ide-dev-kit/plugin-container/plugin-container.component.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"PluginContainerComponent",function(){return p});
/* harmony import */var o=n("./node_modules/@angular/core/esm5/core.js");
/* harmony import */var i=n("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */var r=n.n(i);
/* harmony import */var s=n("./src/app/services/config.service.ts");var a=this&&this.__decorate||function(e,t,n,o){var i=arguments.length,r=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)if(s=e[a])r=(i<3?s(r):i>3?s(t,n,r):s(t,n))||r;return i>3&&r&&Object.defineProperty(t,n,r),r};var c=this&&this.__metadata||function(e,t){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(e,t)};var p=function(){function e(e,t,n,o){this.configService=e;this.eventBus=t;this.compiler=n;this.injector=o;this.loaded=false;this.gsp=null}t=e;e.prototype.ngOnInit=function(){var e=this;console.log("plugin container init");if(this.tabIndex!==undefined&&this.tabIndex!==null){var n=this.gsp.eventBus.getProxy(t,function(){return e.constructor.name});setTimeout(function(){n.post("ActiveTabs",{area:"main",index:e.tabIndex})})}};e.prototype.ngOnChanges=function(){this.container.clear();if(this.componentRef){this.container.insert(this.componentRef.hostView)}};a([Object(o["ViewChild"])("pluginContainer",{read:o["ViewContainerRef"]}),c("design:type",o["ViewContainerRef"])],e.prototype,"container",void 0);a([Object(o["Input"])(),c("design:type",String)],e.prototype,"id",void 0);a([Object(o["Input"])(),c("design:type",String)],e.prototype,"pluginType",void 0);a([Object(o["Input"])(),c("design:type",o["ComponentRef"])],e.prototype,"componentRef",void 0);a([Object(o["Input"])(),c("design:type",Number)],e.prototype,"tabIndex",void 0);e=t=a([Object(o["Component"])({selector:"app-plugin-container",template:n("./src/app/ide-dev-kit/plugin-container/plugin-container.component.html"),styles:[n("./src/app/ide-dev-kit/plugin-container/plugin-container.component.css")]}),c("design:paramtypes",[s["ConfigService"],i["EventBus"],o["Compiler"],o["Injector"]])],e);return e;var t}();
/***/},
/***/"./src/app/ide.module.ts":
/***/function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});
/* harmony export (binding) */n.d(t,"IDEModule",function(){return D});
/* harmony import */var o=n("./src/environments/environment.ts");
/* harmony import */var i=n("./node_modules/@angular/core/esm5/core.js");
/* harmony import */var r=n("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */var s=n("./node_modules/@angular/common/esm5/http.js");
/* harmony import */var a=n("./node_modules/@progress/kendo-angular-layout/dist/es/index.js");
/* harmony import */var c=n("./src/app/framework/services/package-manager.ts");
/* harmony import */var p=n("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */var l=n.n(p);
/* harmony import */var d=n("./src/app/components/idecontent/idecontent.component.ts");
/* harmony import */var u=n("./src/app/components/idepropertypanel/idepropertypanel.component.ts");
/* harmony import */var f=n("./src/app/components/idecontrolpanel/idecontrolpanel.component.ts");
/* harmony import */var h=n("./src/app/components/idecontroltoolbox/idecontroltoolbox.component.ts");
/* harmony import */var m=n("./src/app/components/idecontroloutline/idecontroloutline.component.ts");
/* harmony import */var v=n("./src/app/components/idecontentwrapper/idecontentwrapper.component.ts");
/* harmony import */var g=n("./src/app/components/ide-code-editor/ide-code-editor.component.ts");
/* harmony import */var b=n("./src/app/workspace/workspace.component.ts");
/* harmony import */var x=n("./src/app/ide-dev-kit/main-panel/main-panel.module.ts");
/* harmony import */var y=n("./src/app/services/config.service.ts");
/* harmony import */var w=n("./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */var j=n("./node_modules/@angular/http/esm5/http.js");
/* harmony import */var O=n("./src/app/workspace/workspace.manager.ts");
/* harmony import */var R=n("./src/app/components/ide-common.module.ts");
/* harmony import */var _=n("./src/app/framework/layout/layout.module.ts");
/* harmony import */var C=n("./node_modules/@farris/ui/container/modal/index.js");
/* harmony import */var k=n.n(C);
/* harmony import */var P=n("./src/app/workspace/test.component.ts");
/* harmony import */var E=n("./src/app/workspace/test.modal-container.component.ts");
/* harmony import */var S=n("./src/app/ide.routes.ts");
/* harmony import */var I=n("./node_modules/@gsp-lcm/metadata-selector/index.js");
/* harmony import */var z=n.n(I);var T=this&&this.__decorate||function(e,t,n,o){var i=arguments.length,r=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)if(s=e[a])r=(i<3?s(r):i>3?s(t,n,r):s(t,n))||r;return i>3&&r&&Object.defineProperty(t,n,r),r};
// const monacoConfig: NgxMonacoEditorConfig = {
//   baseUrl: 'assets',
//   defaultOptions: { scrollBeyondLastLine: false },
//   onMonacoLoad: () => { console.log((<any>window).monaco); }
// };
var M=o["environment"].SERVER_IP;var D=function(){function e(){}e=T([Object(i["NgModule"])({declarations:[d["IdecontentComponent"],u["IdepropertypanelComponent"],f["IdecontrolpanelComponent"],h["IdecontroltoolboxComponent"],m["IdecontroloutlineComponent"],g["IdeCodeEditorComponent"],b["WorkspaceComponent"],P["TestComponent"],E["ModalContainerComponent"]],imports:[r["FormsModule"],s["HttpClientModule"],a["LayoutModule"],x["MainPanelModule"],p["ModalModule"].forRoot(),w["GridModule"],j["HttpModule"],_["LayoutModule"],R["IDECommonModule"],
// CacheModule.forRoot(),
C["FarrisDialogModule"],S["IDERootingModule"],I["GSPMetadataServiceModule"].forRoot(M)],providers:[y["ConfigService"],s["HttpClient"],c["PackageManager"],O["WorkspaceManager"]],bootstrap:[b["WorkspaceComponent"]],entryComponents:[d["IdecontentComponent"],g["IdeCodeEditorComponent"],v["IdecontentwrapperComponent"],E["ModalContainerComponent"]]})],e);return e}();
/***/},
/***/"./src/app/ide.routes.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"IDERootingModule",function(){return c});
/* harmony import */var o=n("./src/app/workspace/workspace.component.ts");
/* harmony import */var i=n("./node_modules/@angular/router/esm5/router.js");
/* harmony import */var r=n("./node_modules/@angular/core/esm5/core.js");var s=this&&this.__decorate||function(e,t,n,o){var i=arguments.length,r=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)if(s=e[a])r=(i<3?s(r):i>3?s(t,n,r):s(t,n))||r;return i>3&&r&&Object.defineProperty(t,n,r),r};var a=[{path:"",component:o["WorkspaceComponent"]}];var c=function(){function e(){}e=s([Object(r["NgModule"])({imports:[i["RouterModule"].forChild(a)],exports:[i["RouterModule"]]})],e);return e}();
/***/},
/***/"./src/app/services/config.service.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"ConfigService",function(){return p});
/* harmony import */var o=n("./node_modules/@angular/core/esm5/core.js");
/* harmony import */var i=n("./node_modules/@angular/common/esm5/http.js");
/* harmony import */var r=n("./node_modules/rxjs/ReplaySubject.js");
/* harmony import */var s=n.n(r);var a=this&&this.__decorate||function(e,t,n,o){var i=arguments.length,r=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)if(s=e[a])r=(i<3?s(r):i>3?s(t,n,r):s(t,n))||r;return i>3&&r&&Object.defineProperty(t,n,r),r};var c=this&&this.__metadata||function(e,t){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(e,t)};var p=function(){function e(e){var t=this;this.http=e;this.pluginConfig=new r["ReplaySubject"];this.http.get("assets/config/plugins.json").subscribe(function(e){t.pluginConfig.next(e)})}e.prototype.getPluginsConfig=function(){return this.pluginConfig};e=a([Object(o["Injectable"])(),c("design:paramtypes",[i["HttpClient"]])],e);return e}();
/***/},
/***/"./src/app/workspace/test.component.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"TestComponent",function(){return d});
/* harmony import */var o=n("./node_modules/@angular/core/esm5/core.js");
/* harmony import */var i=n("./node_modules/@farris/ui/container/modal/index.js");
/* harmony import */var r=n.n(i);
/* harmony import */var s=n("./src/app/workspace/test.modal-container.component.ts");
/* harmony import */var a=n("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */var c=n.n(a);var p=this&&this.__decorate||function(e,t,n,o){var i=arguments.length,r=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)if(s=e[a])r=(i<3?s(r):i>3?s(t,n,r):s(t,n))||r;return i>3&&r&&Object.defineProperty(t,n,r),r};var l=this&&this.__metadata||function(e,t){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(e,t)};var d=function(){function e(e,t,n){this.dialogService=e;this.cfr=t;this.injector=n}e.prototype.show=function(){
// const test = this.dialogService.show(ModalContainerComponent, {
//   title: 'hello', width: 300, height: 400,
//   initialState: {content: 'abcdefg'}
// });
// this.messager.info('abc');
var e=this.cfr.resolveComponentFactory(s["ModalContainerComponent"]).create(this.injector);var t={getElement:function(){return e}};this.gsp.workspace.addModalPanel({item:t})};p([Object(o["Input"])(),l("design:type",a["GSP"])],e.prototype,"gsp",void 0);e=p([Object(o["Component"])({template:'\n    <button (click)="show()">click</button>\n    <farris-dialog #dlg></farris-dialog>\n  ',selector:"app-test"}),l("design:paramtypes",[i["BsModalService"],o["ComponentFactoryResolver"],o["Injector"]])],e);return e}();
/***/},
/***/"./src/app/workspace/test.modal-container.component.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"ModalContainerComponent",function(){return s});
/* harmony import */var o=n("./node_modules/@angular/core/esm5/core.js");var i=this&&this.__decorate||function(e,t,n,o){var i=arguments.length,r=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)if(s=e[a])r=(i<3?s(r):i>3?s(t,n,r):s(t,n))||r;return i>3&&r&&Object.defineProperty(t,n,r),r};var r=this&&this.__metadata||function(e,t){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(e,t)};var s=function(){function e(){this.content=""}e=i([Object(o["Component"])({template:"\n    <div>{{content}}</div>\n  "}),r("design:paramtypes",[])],e);return e}();
/***/},
/***/"./src/app/workspace/workspace.component.css":
/***/function(e,t,n){t=e.exports=n("./node_modules/css-loader/lib/css-base.js")(false);
// imports
// module
t.push([e.i,"/*:host {*/\n  /*display: flex !important;*/\n  /*flex: 1;*/\n  /*flex-direction: column;*/\n  /*height: calc(100vh);*/\n  /*overflow: hidden;*/\n/*}*/\n\n/*.workspace {*/\n  /*flex: 1;*/\n  /*height: calc(100vh - 30vh);*/\n/*}*/\n\n/*.pane-content {*/\n  /*padding: 3px 0 0;*/\n  /*flex: 1;*/\n/*}*/\n\n/*.pane-content > .k-tabstrip{*/\n  /*flex: 1;*/\n/*}*/\n\n/*h3 {*/\n  /*font-size: 1.2em;*/\n  /*margin: 10px 0;*/\n  /*padding: 0;*/\n/*}*/\n\n/*p {*/\n  /*margin: 0;*/\n  /*padding: 0;*/\n/*}*/\n\n.k-i-loading {\n  position: absolute;;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  font-size: 64px;\n  background-color: rgba(0, 0, 0, .3);\n  color: #2a91fa;\n}\n",""]);
// exports
/*** EXPORTS FROM exports-loader ***/e.exports=e.exports.toString();
/***/},
/***/"./src/app/workspace/workspace.component.html":
/***/function(e,t){e.exports='<app-top-menu [navbarContent]="headerPanel"></app-top-menu>\n\n<app-main></app-main>\n\n<app-status-bar></app-status-bar>\n\n\x3c!--<div class="k-i-loading" *ngIf="this.workspace.isLoading"></div>--\x3e'
/***/},
/***/"./src/app/workspace/workspace.component.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"WorkspaceComponent",function(){return m});
/* harmony import */var o=n("./node_modules/@angular/core/esm5/core.js");
/* harmony import */var i=n("./src/app/framework/directives/tabs/tab.ts");
/* harmony import */var r=n("./src/app/workspace/workspace.manager.ts");
/* harmony import */var s=n("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */var a=n.n(s);
/* harmony import */var c=n("./src/app/framework/services/plugin-loader.ts");
/* harmony import */var p=n("./src/app/framework/layout/top-menu/top-menu.component.ts");
/* harmony import */var l=n("./src/app/framework/layout/main/main.component.ts");
/* harmony import */var d=n("./node_modules/@farris/ui/container/modal/index.js");
/* harmony import */var u=n.n(d);var f=this&&this.__decorate||function(e,t,n,o){var i=arguments.length,r=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)if(s=e[a])r=(i<3?s(r):i>3?s(t,n,r):s(t,n))||r;return i>3&&r&&Object.defineProperty(t,n,r),r};var h=this&&this.__metadata||function(e,t){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(e,t)};var m=function(){function e(e){this.injector=e;this.gsp=new s["GSP"];this.pluginLoader=new c["PluginLoader"](this.gsp,this.injector);this.manager=this.injector.get(r["WorkspaceManager"]);this.manager.initWorkspace(this.gsp);this.modalService=this.injector.get(d["BsModalService"])}t=e;e.prototype.ngOnInit=function(){this.bindViewToGSPEnvironment()};e.prototype.ngAfterViewInit=function(){var e=this;this.test();setTimeout(function(){e.pluginLoader.loadSidebar();e.pluginLoader.loadNavbar();e.observeMenu()})};e.prototype.bindViewToGSPEnvironment=function(){var e=this;
// center
var t=this.gsp.workspace.getCenter().getActivePane();t.onDidAddItem(function(t){var n=t.item;return e.onCenterItemAdded(n)});t.onDoingChangeActiveItem(function(t){return e.onCenterActiveItemChanging(t)});t.onDidChangeActiveItem(function(t){return e.onCenterActiveItemChanged(t)});t.onDidRemoveItem(function(t){var n=t.item;return e.onCenterItemRemoved(n)});this.mainComp.tabsComp.selecting.subscribe(function(t){return e.onMainTabsSelecting(t)});this.mainComp.tabsComp.removing.subscribe(function(t){return e.onMainTabsRemoving(t)});
// left
var n=this.gsp.workspace.getLeftDock().getActivePane();
// leftDock.observeActiveItem((item) => this.onLeftViewChanged(item));
n.onDidAddItem(function(t){var n=t.item;return e.onLeftTabsAdded(n)});
// modal
var o=this.gsp.workspace.getPanelContainer("modal");o.onDidAddPanel(function(t){var n=t.panel;return e.onModalPanelAdded(n)})};e.prototype.onCenterActiveChanged=function(e){if(e==null){return}var t=this.mainComp.tabsComp.content;t.detach();t.insert(this.gsp.views.getView(e).hostView)};e.prototype.onCenterItemAdded=function(e){if(e==null){return}var t=new i["Tab"](e.getURI&&e.getURI()||e.getUri&&e.getUri(),e.getTitle(),e.getElement());t.item=e;this.mainComp.addMainTab(t,false)};e.prototype.onCenterActiveItemChanging=function(e){if(e==null){return}
// 通知tab页将要被隐藏
// const item = mainPane.getActiveItem();
var n=e.getURI&&e.getURI()||e.getUri&&e.getUri();this.gsp.eventBus.post(t,"Workspace","tabHidding",e);
// console.log('tab changing: ' + uri);
};e.prototype.onCenterActiveItemChanged=function(e){if(e==null){return}var t=this.gsp.workspace.getCenter().getActivePane().getItems().indexOf(e);this.mainComp.findAndSelectMainTab(e.getURI&&e.getURI()||e.getUri&&e.getUri())};e.prototype.onCenterItemRemoved=function(e){if(e==null){return}var t=e.getURI&&e.getURI()||e.getUri&&e.getUri();this.mainComp.removeMainTab(t)};e.prototype.onMainTabsSelecting=function(e){var t=this.gsp.workspace.getCenter().getActivePane();
// const selectedItem = mainPane.itemForURI(tab.id);
t.activateItemForURI(e.id)};e.prototype.onMainTabsRemoving=function(e){var t=this.gsp.workspace.getCenter().getActivePane();t.removeItem(e.item,false)};e.prototype.onLeftTabsAdded=function(e){if(e==null){return}var t=this.mainComp.sidebar.loadPanel(e.getTitle(),this.gsp.views.getView(e))};e.prototype.onModalPanelAdded=function(e){if(e==null){return}var t=e.getItem();var n=t&&(t.element||t.getElement&&t.getElement());if(n){var o=this.modalService.show(n,t.modalOptions||{});e.onDidDestroy(function(){return o.close()})}};
/**
     * 监听菜单
     * 相应菜单的点击事件。
     */e.prototype.observeMenu=function(){var e=this;this.topMenuComp.navbarClicked.subscribe(function(t){return e.runCommand(t)})};
/**
     * 注册命令
     * 首先查找命令是否对应了插件，如果有插件，先加载插件然后发送事件。
     * 没有插件直接发送事件。
     */e.prototype.registerCommand=function(){};e.prototype.runCommand=function(e){
// todo: gsp需持有一份命令的注册表，在第一次执行命令时先下载该命令相关的插件，下载完毕之后抛出对应事件。
// btw， 考虑下载插件时使用loading面板
// 打开页面时下载插件，执行命令时直接抛出事件。
this.gsp.eventBus.post(t,"workspace.component","Command:"+e,null)};e.prototype.test=function(){
// const comp = (<ComponentFactoryResolver>this.injector.get(ComponentFactoryResolver))
//   .resolveComponentFactory(StatusBarComponent).create(this.injector);
// const item = {
//   getTitle: () => 'test',
//   getURI: () => '123.test',
//   element: comp
// }
// this.gsp.workspace.open(item);
//
// const comp2 = (<ComponentFactoryResolver>this.injector.get(ComponentFactoryResolver))
//   .resolveComponentFactory(TopMenuComponent).create(this.injector);
// const item2 = {
//   getTitle: () => 'test2',
//   getURI: () => '1234.test',
//   element: comp2
// }
// this.gsp.workspace.open(item2);
};f([Object(o["ViewChild"])(l["MainComponent"]),h("design:type",l["MainComponent"])],e.prototype,"mainComp",void 0);f([Object(o["ViewChild"])(p["TopMenuComponent"]),h("design:type",p["TopMenuComponent"])],e.prototype,"topMenuComp",void 0);e=t=f([Object(o["Component"])({selector:"app-workspace",template:n("./src/app/workspace/workspace.component.html"),styles:[n("./src/app/workspace/workspace.component.css")]}),h("design:paramtypes",[o["Injector"]])],e);return e;var t}();
/***/},
/***/"./src/app/workspace/workspace.manager.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"WorkspaceManager",function(){return a});
/* harmony import */var o=n("./src/app/services/config.service.ts");
/* harmony import */var i=n("./node_modules/@angular/core/esm5/core.js");var r=this&&this.__decorate||function(e,t,n,o){var i=arguments.length,r=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)if(s=e[a])r=(i<3?s(r):i>3?s(t,n,r):s(t,n))||r;return i>3&&r&&Object.defineProperty(t,n,r),r};var s=this&&this.__metadata||function(e,t){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(e,t)};var a=function(){function e(e){this.injector=e;this.leftSidebarResize=new i["EventEmitter"];this.compiler=this.injector.get(i["Compiler"])}e.prototype.initWorkspace=function(e){var t=this;this.gsp=e;
// const sgDesignerUrl = 'sgpackage.module#./src/packages/sgdesigner-wizard/sgpackage.module.ngfactory.js#SgDesignerPackageModuleNgFactory';
// this.activateLazyPackage(sgDesignerUrl);
// const projectWizardUrl = 'project-package.module#./src/packages/project-wizard/project-package.module.ngfactory.js#ProjectWizardPackageModuleNgFactory';
// this.activateLazyPackage(projectWizardUrl);
// const formCreateWizardUrl = 'form-create-wizard-package.module#./src/packages/form-create-wizard-package/form-create-wizard-package.module.ngfactory.js#FormCreateWizardPackageModuleNgFactory';
// this.activateLazyPackage(formCreateWizardUrl);
// const formEditorUrl = 'form-editor-package.module#./src/packages/form-editor-package/form-editor-package.module.ngfactory.js#FormEditorPackageModuleNgFactory';
// this.activateLazyPackage(formEditorUrl);
var n=this.injector.get(o["ConfigService"]);n.getPluginsConfig().subscribe(function(e){return t.loadPlugin(e)})};e.prototype.loadPlugin=function(e){for(var t=0,n=e.openers;t<n.length;t++){var o=n[t];this.activateLazyPackage(o.url)}for(var i=0,r=e.panels;i<r.length;i++){var s=r[i];this.activateLazyPackage(s.url)}};
//
// setMainTabsComponent(tabs: TabsComponent) {
//   this.mainTabsComponent = tabs;
// }
//
// setMainPanelContent(compRef: ComponentRef<any>) {
//   this.mainTabsComponent.setContent(compRef);
// }
//
// addMainTab(tab: Tab, active: Boolean) {
//   if (this.mainComponent) {
//     this.mainComponent.addMainTab(tab, active);
//   }
// }
//
// findAndSelectMainTab(id: string) {
//   return this.mainComponent.findAndSelectMainTab(id);
// }
//
// loadNavbar(compRef: ComponentRef<any>) {
//   this.topMenuComponent.navbarContent = compRef;
// }
e.prototype.activateLazyPackage=function(e){var t=this;
// this.loadLazyModule(url).then((moduleFactory: NgModuleFactory<any>) => { // AoT
this.loadLazyModule(e).then(function(e){var n=t.compiler.compileModuleSync(e);var o=n.create(t.injector);var i=o.instance.getPackage(t.gsp);i.activate({})})};e.prototype.loadLazyModule=function(e){if(!e){return Promise.reject("url为空，加载异步模块失败")}var t=e.split("#"),o=t[2];
// 如果未指定导出模块，默认使用default.
if(!o){o="default"}
// 异步加载模块
return n("./src/$$_lazy_require_resource lazy recursive")(e).then(function(e){return e[o]})};e=r([Object(i["Injectable"])(),s("design:paramtypes",[i["Injector"]])],e);return e}();
/***/}},["farris","rxjs","libcore"]);