webpackJsonp(["folder-package.module"],{
/***/"./src/packages/folder-wizard/folder-package.module.js":
/***/function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});
/* harmony export (binding) */r.d(t,"FolderWizardPackageModule",function(){return y});
/* harmony import */var n=r("./node_modules/@angular/core/esm5/core.js");
/* harmony import */var o=r("./src/packages/folder-wizard/package.ts");
/* harmony import */var a=r("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */var i=r.n(a);
/* harmony import */var s=r("./node_modules/@angular/common/esm5/common.js");
/* harmony import */var c=r("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */var l=r("./node_modules/@progress/kendo-angular-treeview/dist/es/index.js");
/* harmony import */var d=r("./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */var f=r("./src/packages/folder-wizard/views/folder/folder.component.ts");
/* harmony import */var p=r("./node_modules/@gsp-lcm/metadata-selector/index.js");
/* harmony import */var u=r.n(p);
/* harmony import */var m=r("./src/environments/environment.ts");var v=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var g=this&&this.__decorate||function(e,t,r,n){var o=arguments.length,a=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,i;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)if(i=e[s])a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a;return o>3&&a&&Object.defineProperty(t,r,a),a};var h=this&&this.__metadata||function(e,t){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(e,t)};var y=function(e){v(t,e);function t(t,r){var n=e.call(this)||this;n.cfr=t;n.injector=r;return n}t.prototype.initPackage=function(e){this.package=new o["FolderWizardPackage"](e,this.cfr,this.injector)};t=g([Object(n["NgModule"])({imports:[s["CommonModule"],c["FormsModule"],l["TreeViewModule"],d["GridModule"],p["GSPMetadataServiceModule"].forRoot(m["environment"].SERVER_IP)],exports:[f["FolderComponent"]],declarations:[f["FolderComponent"]],providers:[],entryComponents:[f["FolderComponent"]]}),h("design:paramtypes",[n["ComponentFactoryResolver"],n["Injector"]])],t);return t}(a["PackageModule"]);
//# sourceMappingURL=folder-package.module.js.map
/***/},
/***/"./src/packages/folder-wizard/package.ts":
/***/function(e,t,r){"use strict";
/* harmony export (binding) */r.d(t,"FolderWizardPackage",function(){return d});
/* harmony import */var n=r("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */var o=r.n(n);
/* harmony import */var a=r("./src/packages/folder-wizard/views/index.ts");
/* harmony import */var i=r("./src/packages/folder-wizard/views/folder/folder.component.ts");
/* harmony import */var s=r("./node_modules/@gsp-lcm/metadata-selector/index.js");
/* harmony import */var c=r.n(s);var l=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var d=function(e){l(t,e);function t(t,r,n){var o=e.call(this,t)||this;o.cfr=r;o.injector=n;o.metadataService=o.injector.get(s["GSPMetadataService"]);return o}t.prototype.activate=function(e){var t=this;this.gsp.eventBus.on(null,null,"Command:newFolder",this,function(){return t.showModal()});this.gsp.eventBus.on(null,null,"Command:deleteFolder",this,function(){return t.deleteFolder()})};t.prototype.showModal=function(){var e=this;var t=new a["FolderWizardPackageView"]({},this.cfr,this.injector);var r="新建文件夹";var n=t.getElement().instance;this.gsp.eventBus.requestFor("FileTreePanelPackage","folderCreate","AccessFileTree",{action:"6"},function(e){if(!e.nodePath){return}if(e.nodeType==="folder"||e.nodeType==="project"){n.path=e.nodePath}else if(e.nodeType==="file"){var t=e.nodePath.replace(/\\/g,"/");n.path=t.substring(0,t.lastIndexOf("/"))}else{console.log("unknowed type");alert("请选择合适的存放目录！");return}});n.createFolderSuccess.subscribe(function(t){e.addNewTreeNode(t)});var o=this.gsp.workspace.addModalPanel({item:{element:t.getElement(),modalOptions:{title:r,width:320,height:150,buttons:n.btns}}});n.closeModalEmitter.subscribe(function(){return o.destroy()})};t.prototype.getComponent=function(){return i["FolderComponent"]};t.prototype.refreshTree=function(){this.gsp.eventBus.requestFor("FileTreePanelPackage","folderCreate","AccessFileTree",{action:"5"},function(){console.log("event has been deal done")})};t.prototype.addNewTreeNode=function(e){console.log(e);this.gsp.eventBus.requestFor("FileTreePanelPackage","projectCreate","AccessFileTree",e,function(){console.log("event has been deal done")})};t.prototype.deleteFileTree=function(){this.gsp.eventBus.requestFor("FileTreePanelPackage","projectCreate","AccessFileTree",{action:"4"},function(){console.log("event has been deal done")})};t.prototype.deleteFolder=function(){var e=this;this.gsp.eventBus.requestFor("FileTreePanelPackage","projectCreate","AccessFileTree",{action:"6"},function(t){console.log(t);if(t.nodeType==="folder"){e.metadataService.DeleteMetadataOrDir(t.nodePath.substring(1)).subscribe(function(t){alert("删除成功");
// 删除树节点
e.deleteFileTree()},function(e){alert("删除失败")})}else{alert("请选择目录再删除！")}})};return t}(n["Package"]);
/***/},
/***/"./src/packages/folder-wizard/views/folder/folder.component.css":
/***/function(e,t,r){t=e.exports=r("./node_modules/css-loader/lib/css-base.js")(false);
// imports
// module
t.push([e.i,"\r\n.templateBlock\r\n{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n\r\n.infoBlock {\r\n    margin: 5px;\r\n}\r\n\r\n.form-control {\r\n    margin-top: 20px;\r\n}\r\n\r\n.frameInfo {\r\n    margin: 5px;\r\n}\r\n\r\n.fileName {\r\n    display: block;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    margin-top: 0.1rem;\r\n}\r\n\r\n.infoBlock label\r\n{\r\n    width: 85px;\r\n}\r\n\r\n.k-textbox.form-control {\r\n    height: 25px;\r\n}\r\n.kendo-textbox-container {\r\n    width: 100%;\r\n}\r\n\r\n",""]);
// exports
/*** EXPORTS FROM exports-loader ***/e.exports=e.exports.toString();
/***/},
/***/"./src/packages/folder-wizard/views/folder/folder.component.html":
/***/function(e,t){e.exports='<div class="modal-body">\r\n  <div class="infoBlock">\r\n    <div class="fileName">\r\n        \x3c!-- <div class="title">\r\n            <label class="frameInfo">名称</label>\r\n          </div> --\x3e\r\n        <input id="fileName" class="form-control textInput" type="text" kendoTextBox [(ngModel)]="name" #fileName="ngModel" />\r\n      <div [hidden]="fileName.valid || fileName.pristine" class="alert-danger">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<ng-template #btn>\r\n  <button type="button" class="btn btn-outline-primary btn-sm px-3 mx-2" (click)="CreateDir()">确定</button>\r\n  <button type="button" class="btn btn-outline-secondary btn-sm px-3 mx-2" (click)="hideModal()">取消</button>\r\n</ng-template>\r\n'
/***/},
/***/"./src/packages/folder-wizard/views/folder/folder.component.ts":
/***/function(e,t,r){"use strict";
/* harmony export (binding) */r.d(t,"FolderComponent",function(){return c});
/* harmony import */var n=r("./node_modules/@angular/core/esm5/core.js");
/* harmony import */var o=r("./node_modules/@gsp-lcm/metadata-selector/index.js");
/* harmony import */var a=r.n(o);var i=this&&this.__decorate||function(e,t,r,n){var o=arguments.length,a=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,i;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)if(i=e[s])a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a;return o>3&&a&&Object.defineProperty(t,r,a),a};var s=this&&this.__metadata||function(e,t){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(e,t)};var c=function(){function e(e){this.metadataService=e;this.closeModalEmitter=new n["EventEmitter"];this.createFolderSuccess=new n["EventEmitter"]}e.prototype.ngOnInit=function(){};e.prototype.hideModal=function(){this.closeModalEmitter.emit()};
// 生成文件夹
e.prototype.CreateDir=function(){var e=this;var t=this.name;var r=this.path;if(!t){alert("文件夹名称不能为空！");return}if(!r){alert("请选择合适的存放目录！");return}this.closeModalEmitter.emit();this.metadataService.CreateDir(r,t).subscribe(function(r){
// this.treeModel.addFolderNode(result.json().name, result.json().path);
// this.treeModel.addFolderNode(this.name);
alert("新建成功！");e.createFolderSuccess.emit({action:"1",node:{nodeID:t,nodeName:t,nodePath:e.path+"/"+t,nodeType:"folder"}})},function(e){alert("新建失败！")});this.name=""};i([Object(n["ViewChild"])("btn"),s("design:type",n["TemplateRef"])],e.prototype,"btns",void 0);e=i([Object(n["Component"])({selector:"app-folder",template:r("./src/packages/folder-wizard/views/folder/folder.component.html"),styles:[r("./src/packages/folder-wizard/views/folder/folder.component.css")]}),s("design:paramtypes",[o["GSPMetadataService"]])],e);return e}();
/***/},
/***/"./src/packages/folder-wizard/views/index.ts":
/***/function(e,t,r){"use strict";
/* harmony export (binding) */r.d(t,"FolderWizardPackageView",function(){return s});
/* harmony import */var n=r("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */var o=r.n(n);
/* harmony import */var a=r("./src/packages/folder-wizard/views/folder/folder.component.ts");var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var s=function(e){i(t,e);function t(t,r,n){var o=e.call(this,t)||this;o.cfr=r;o.injector=n;o.element=r.resolveComponentFactory(a["FolderComponent"]).create(n);return o}return t}(n["PackageView"]);
/***/}},[]);