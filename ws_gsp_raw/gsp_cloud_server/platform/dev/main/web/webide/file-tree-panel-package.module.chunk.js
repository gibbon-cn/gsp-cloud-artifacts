webpackJsonp(["file-tree-panel-package.module"],{
/***/"./src/packages/file-tree-panel-package/constants/events.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"TREE_EVENTS",function(){return r});var r={onToggle:"onToggle",onActiveChanged:"onActiveChanged",onActivate:"onActivate",onDeactivate:"onDeactivate",onFocus:"onFocus",onBlur:"onBlur",onDoubleClick:"onDoubleClick",onContextMenu:"onContextMenu"};
/***/},
/***/"./src/packages/file-tree-panel-package/constants/keys.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"KEYS",function(){return r});
// keys used in the angular tree component
var r={LEFT:37,UP:38,RIGHT:39,DOWN:40,ENTER:13,SPACE:32};
/***/},
/***/"./src/packages/file-tree-panel-package/constants/metadata.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"METADATA_TYPE",function(){return r});
// keys used in the angular tree component
var r={PROJECT:"project",FOLDER:"folder",FILE:"file"};
/***/},
/***/"./src/packages/file-tree-panel-package/directives/tree-node-content.directive.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"TreeNodeContentDirective",function(){return i});
/* harmony import */var r=n("./node_modules/@angular/core/esm5/core.js");var o=this&&this.__decorate||function(e,t,n,r){var o=arguments.length,l=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")l=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)if(i=e[a])l=(o<3?i(l):o>3?i(t,n,l):i(t,n))||l;return o>3&&l&&Object.defineProperty(t,n,l),l};var l=this&&this.__metadata||function(e,t){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(e,t)};
// 定义辅助指令TreeNodeContent，用来在模板中标记插入点
var i=function(){
// 依赖注入ViewContainerRef，获取对容器视图的访问权限
function e(e){this.viewContainerRef=e}e=o([Object(r["Directive"])({selector:"[treeNodeContent-host]"}),l("design:paramtypes",[r["ViewContainerRef"]])],e);return e}();
/***/},
/***/"./src/packages/file-tree-panel-package/file-tree-panel-package.module.js":
/***/function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});
/* harmony export (binding) */n.d(t,"FileTreePanelPackageModule",function(){return F});
/* harmony import */var r=n("./node_modules/@angular/core/esm5/core.js");
/* harmony import */var o=n("./node_modules/@angular/common/esm5/common.js");
/* harmony import */var l=n("./src/packages/file-tree-panel-package/views/tree/tree.component.ts");
/* harmony import */var i=n("./src/packages/file-tree-panel-package/views/treenode/treenode.component.ts");
/* harmony import */var a=n("./src/packages/file-tree-panel-package/views/tree-node-content/tree-node-content.component.ts");
/* harmony import */var s=n("./src/packages/file-tree-panel-package/directives/tree-node-content.directive.ts");
/* harmony import */var c=n("./src/packages/file-tree-panel-package/views/file-tree-panel/file-tree-panel.component.ts");
/* harmony import */var p=n("./src/packages/file-tree-panel-package/models/tree-model.ts");
/* harmony import */var d=n("./src/packages/file-tree-panel-package/services/file-tree-data.service.ts");
/* harmony import */var u=n("./src/packages/file-tree-panel-package/services/git-data.service.ts");
/* harmony import */var C=n("./src/packages/file-tree-panel-package/views/file-tree-panel/file-tree-panel.state.ts");
/* harmony import */var f=n("./src/packages/file-tree-panel-package/views/file-tree-panel/file-tree-panel.service.ts");
/* harmony import */var h=n("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */var m=n.n(h);
/* harmony import */var v=n("./src/packages/file-tree-panel-package/package.ts");var g=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)if(t.hasOwnProperty(n))e[n]=t[n]};return function(t,n){e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();var y=this&&this.__decorate||function(e,t,n,r){var o=arguments.length,l=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")l=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)if(i=e[a])l=(o<3?i(l):o>3?i(t,n,l):i(t,n))||l;return o>3&&l&&Object.defineProperty(t,n,l),l};var E=this&&this.__metadata||function(e,t){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(e,t)};var F=function(e){g(t,e);function t(t,n){var r=e.call(this)||this;r.cfr=t;r.injector=n;return r}t.prototype.initPackage=function(e){this.package=new v["FileTreePanelPackage"](e,this.cfr,this.injector)};t=y([Object(r["NgModule"])({declarations:[l["TreeComponent"],i["TreenodeComponent"],a["TreeNodeContentComponent"],s["TreeNodeContentDirective"],c["FileTreePanelComponent"]],imports:[h["BsDropdownModule"].forRoot(),o["CommonModule"]],exports:[],providers:[f["FileTreePanelService"],u["GitDataService"],p["TreeModel"],d["FileTreeDataService"],C["FileTreePanelState"]],entryComponents:[c["FileTreePanelComponent"],a["TreeNodeContentComponent"]]}),E("design:paramtypes",[r["ComponentFactoryResolver"],r["Injector"]])],t);return t}(h["PackageModule"]);
//# sourceMappingURL=file-tree-panel-package.module.js.map
/***/},
/***/"./src/packages/file-tree-panel-package/models/tree-model.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"TreeModel",function(){return C});
/* harmony import */var r=n("./node_modules/@angular/core/esm5/core.js");
/* harmony import */var o=n("./src/packages/file-tree-panel-package/models/tree-node.ts");
/* harmony import */var l=n("./src/packages/file-tree-panel-package/models/tree-options.ts");
/* harmony import */var i=n("./src/packages/file-tree-panel-package/constants/events.ts");
/* harmony import */var a=n("./src/packages/file-tree-panel-package/constants/metadata.ts");
/* harmony import */var s=n("./node_modules/lodash/lodash.js");
/* harmony import */var c=n.n(s);
/* harmony import */var p=n("./src/packages/file-tree-panel-package/services/file-tree-data.service.ts");var d=this&&this.__decorate||function(e,t,n,r){var o=arguments.length,l=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")l=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)if(i=e[a])l=(o<3?i(l):o>3?i(t,n,l):i(t,n))||l;return o>3&&l&&Object.defineProperty(t,n,l),l};var u=this&&this.__metadata||function(e,t){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(e,t)};var C=function(){
// 注入文件树数据服务
function e(e){this.fileTreeDataService=e;
// focused Node may be not actived
// actived Node must be focused
this.focusedNode=null;// be chosen node
this.activeNode=null;// be chosen and actived node
this.previousLeafNode=null;// temporarily storage previous focused node
this.isChanged=false;// flag of the tree's structure
this.eventNames=Object.keys(i["TREE_EVENTS"]);// events used in tree.component
}t=e;Object.defineProperty(e.prototype,"FocusedNode",{get:function(){return this.focusedNode},enumerable:true,configurable:true});Object.defineProperty(e.prototype,"treeNodeContentComponent",{get:function(){return this._treeNodeContentComponent},enumerable:true,configurable:true});
/**
     * 构建模型树
     * @param param0
     */e.prototype.setData=function(e){var t=this;var n=e.nodes,r=e.options,i=e.events;this.options=new l["TreeOptions"](r);var a=new o["TreeNode"]({isVirtualRoot:true},null,this);this.roots=n&&n.map(function(e){return new o["TreeNode"](e,a,t)});
// console.log(this.roots);
a.childrenField=this.roots;this._loadTreeNodeContentComponent();this.events=i};
// 刷新树: 展示最近一次操作的叶节点
e.prototype.refresh=function(){if(this.focusedNode&&!this.focusedNode.hasChildren){return}if(this.previousLeafNode==null){return}
// this.locatedFileTreeNode(this.previousLeafNode);
};
// 定位指定树节点(假定模型上已存在该节点，尽量保证方法的单一职责)
// locatedFileTreeNode(needLocatedNode: TreeNode){
//     if(needLocatedNode == null){
//         return;
//     }
//     let parentNode = needLocatedNode.parent;
//     while( parentNode != null){
//         parentNode.isExpanded = true;
//         parentNode = parentNode.parent;
//     }
//     this.focusedNode = needLocatedNode;
// }
// 定位指定树节点
// 模拟手动打开一个节点的过程
// locatedFileTreeNode(needLocatedNode: TreeNode){
//     if(needLocatedNode == null){
//         return;
//     }
//     let parents = this.getParentsInPath(needLocatedNode);
//     let locatedNodeparent: TreeNode = first(parents);
//     while(parents.length > 0){
//         let tempParent = parents.pop();
//         tempParent.isExpanded = true;
//         this.dynamicLoadChildren(tempParent, 1, true);
//     }
//     this.focusedNode = locatedNodeparent;
//     // this.focusedNode = needLocatedNode;
//     // let index = locatedNodeparent.childrenField.indexOf(needLocatedNode);
//     // if(index < 0)
//     // {
//     //     // this.focusedNode = locatedNodeparent.getFirstChild();
//     // }else{
//     //     this.focusedNode = locatedNodeparent.childrenField[index];
//     // }
// }
e.prototype.getParentsInPath=function(e){var t=[];if(e==null){return null}var n=e.parent;while(n!=null){t.push(n);n=n.parent}return t};
// todo: 全部折叠
// 遍历树，折叠每一个节点
e.prototype.collapseAll=function(){};
/**
     * 从服务器端获取指定节点的子节点数据
     * @param parentNodePath 父节点全路径名，当父节点为空时，表示获取根节点的子节点
     * @param depth 深度，默认是 1
     * @param includeFiles 是否包含文件，默认为false
     */e.prototype.getChildrenData=function(e,t,n,r){var l=this;if(n===void 0){n=1}if(r===void 0){r=false}this.fileTreeDataService.getChildrenData(t,true,n,r).subscribe(function(t){
// console.log("childrenData:after " + data);
var n=t&&t.map(function(t){return new o["TreeNode"](t,e,l)});
// console.log("localRoots: " + localRoots);
e.childrenField=n;// set属性
})};
/**
     * 从服务器端获取当前节点的子节点数据，并将其加载到模型上
     * @param parentNode 父节点
     * @param depth 深度，默认是 1
     * @param includeFiles 是否包含文件，默认为false
     */e.prototype.dynamicLoadChildren=function(e,t,n){if(t===void 0){t=1}if(n===void 0){n=false}
// 获取当前节点指定深度的子节点
if(e==null){return}if(a["METADATA_TYPE"].FILE===e.fileTypeField){return}
// 如果已存在children则清空（以应对折叠状态下，文件树操作）
if(e.childrenField!=null&&e.childrenField.length>0){e.childrenField=[]}var r=e.pathField;this.getChildrenData(e,r,t,n);
// console.log("childrenData:before ");
};
/**
     * 向当前文件树的focusedNode增加子节点
     * @param fileNodeID 节点ID
     * @param fileName 节点名称（带文件后缀）
     * @param relativePath 相对路径
     */e.prototype.addFileTreeNode=function(e,t,n,r){if(e==null){return}switch(e){case a["METADATA_TYPE"].FILE:this.addFileNode(t,n,r);break;case a["METADATA_TYPE"].FOLDER:this.addFolderNode(t,n,r);break;case a["METADATA_TYPE"].PROJECT:this.addProjectNode(t,n,r);break;default:break}};
/**
     * 向当前文件树的focusedNode增加文件类型子节点
     * TODO:
     * @param fileNodeID 节点ID
     * @param fileName 节点名称（带文件后缀）
     * @param relativePath 相对路径
     */e.prototype.addFileNode=function(e,t,n){if(e.length<0||t.length<0){
// console.log("Node ID or Node name is null or empty");
return}
// console.log(fileNodeID);
var r=this;if(r==null||r.focusedNode==null){return}if(r.focusedNode.isFile){return}
// console.log('FocusedNode is:' + self.focusedNode);
var l=new o["TreeNode"](null,r.focusedNode,r);
// todo:向树节点增加ID
// addedNode[self.options.idField] = fileNodeID;
l[r.options.displayField]=t;l[r.options.fileTypeField]=a["METADATA_TYPE"].FILE;// 定义节点的类型
l[r.options.pathField]=n;r.addTreeNode(l,r.focusedNode);r.previousLeafNode=l;console.log("Added a File Node")};
// 新建文件夹(当前仅支持指定父节点的文件夹)
e.prototype.addFolderNode=function(e,t,n){var r=this;var l=new o["TreeNode"](null,r.focusedNode,r);
// todo:向树节点增加ID
// addedNode[self.options.idField] = folderNodeID;
l[r.options.displayField]=t;l[r.options.fileTypeField]=a["METADATA_TYPE"].FOLDER;// 定义节点的类型
l[r.options.pathField]=n;r.addTreeNode(l,r.focusedNode);r.previousLeafNode=l;console.log("Added a folder Node")};
// 新建工程
e.prototype.addProjectNode=function(e,t,n){var r=this;var l=new o["TreeNode"](null,null,r);
// todo:向树节点增加ID
// addedNode[self.options.idField] = projectNodeID;
l[r.options.displayField]=t;l[r.options.fileTypeField]=a["METADATA_TYPE"].PROJECT;// 节点的类型
l[r.options.pathField]=n;r.addTreeNode(l,r.focusedNode);r.previousLeafNode=l;console.log("Added a Project Node")};
// 向指定树节点增加子节点并写入服务器
e.prototype.addTreeNodeToServer=function(e,t){var n=this;if(e==null){console.log("Please pick a node as parent node for adding child.");return}if(t==null){console.log("Added child node is null.");return}if(e.fileTypeField===a["METADATA_TYPE"].FILE){console.log("File can not add child node.");return}
// 将数据写入服务器，并修改树上的数据
this.fileTreeDataService.addFileChild(e.pathField,t.displayField).subscribe(function(){n.addTreeNode(t,e)},function(){console.log("Error: Add File Failed!")})};e.prototype.addTreeNode=function(e,t){if(e==null){return}if(t==null){this.roots.push(e);return}var n=t.childrenField;if(Object(s["indexOf"])(n,e)<0){
// 将对象数据追加到数组中
n.push(e)}};e.prototype.removeFileTreeFocusedNode=function(){this._removeFocusedNode()};
// 移除指定文件节点
e.prototype.removeFileNode=function(){this._removeFocusedNode()};
// 移除指定文件夹节点
e.prototype.removeFolderNode=function(){this._removeFocusedNode()};
// 移除指定工程节点
e.prototype.removeProjectNode=function(){this._removeFocusedNode()};
// 移除focused节点
e.prototype._removeFocusedNode=function(){if(this==null||this.focusedNode==null){return}var e=this;
// console.log("remove node:", self.focusedNode);
e.removeTreeNode(e.focusedNode.parent,e.focusedNode);e.focusedNode=null};
// 移除指定树节点的子节点
e.prototype.removeTreeNode=function(e,t){if(e==null){var n=this.roots.indexOf(t);this.roots.splice(n,1);// 移除数组中某一指定节点
return}
// 从数组中移除元素
if(e&&this.options&&this.options.childrenField&&e.childrenField){var n=e.childrenField.indexOf(t);e.childrenField.splice(n,1);// 移除数组中某一指定节点
}};
// 从服务器端移除指定树节点的子节点
e.prototype.removeTreeNodeFromServer=function(e,t){var n=this;if(e==null){console.log("Please pick a node as parent node for removing child.");return}if(t==null){console.log("removing child Node is null.");return}if(t.fileTypeField===a["METADATA_TYPE"].PROJECT||t.fileTypeField===a["METADATA_TYPE"].FOLDER){console.log("removing node is not a file");return}
// 将数据通过异步的方式写入到后端
this.fileTreeDataService.removeFileChild(e.pathField,t.displayField).subscribe(function(){n.removeTreeNode(e,t)})};
// if treeNodeTemplate is a component - use it,
// otherwise - it's a template, so wrap it with an AdHoc component
e.prototype._loadTreeNodeContentComponent=function(){this._treeNodeContentComponent=this.options.treeNodeTemplate;if(typeof this._treeNodeContentComponent==="string"){
// this._treeNodeContentComponent = this._createAdHocComponent(this._treeNodeContentComponent);
}};Object.defineProperty(e.prototype,"isFocused",{
// _createAdHocComponent(templateStr) {
//     @Component({
//         selector: 'TreeNodeTemplate',
//         template: templateStr
//     })
//     class AdHocTreeNodeTemplateComponent {
//         @Input() node: TreeNode;
//     }
//     return AdHocTreeNodeTemplateComponent;
// }
get:function(){return t.focusedTree===this},enumerable:true,configurable:true});e.prototype.setFocus=function(e){t.focusedTree=e?this:null};e.prototype.getFirstRoot=function(){return Object(s["first"])(this.roots)};e.prototype.getLastRoot=function(){return Object(s["last"])(this.roots)};e.prototype.getFocusedNode=function(){return this.focusedNode};e.prototype.focusNextNode=function(){
// console.log('focuseOnNextNode');
var e=this.focusedNode;var t=e?e.findNextNode():this.getFirstRoot();this._focusedNode(t)};e.prototype.focusPreviousNode=function(){
// console.log('focusPreviousNode');
var e=this.focusedNode;var t=e?e.findPreviousNode():this.getLastRoot();this._focusedNode(t)};e.prototype.focusDrillUp=function(){
// console.log('focusDrillUpNode');
var e=this.focusedNode;var t=e&&e.realParent;this._focusedNode(t)};e.prototype.focusDrillDown=function(){
// console.log('focusDrillDownNode');
var e=this.focusedNode;var t=e&&e.getFirstChild();this._focusedNode(t)};e.prototype._focusedNode=function(e){if(e==null){return}e.focus()};
// emit the event
e.prototype.fireEvent=function(e){
// https://stackoverflow.com/questions/35840576/differencse-between-eventemitter-next-and-eventemitter-emit-in-angular-2
//  abandon next() function, begin to use emit() function
// this.events[event.eventName].next(event);
// this.events[event.eventName].emit(event,alert(event.eventName));//发射事件，并传递事件的对象
this.events[e.eventName].emit(e);if(i["TREE_EVENTS"].onBlur===e.eventName){if(!e.node.hasChildren){this.previousLeafNode=e.node}}};e.focusedTree=null;e=t=d([Object(r["Injectable"])(),u("design:paramtypes",[p["FileTreeDataService"]])],e);return e;var t}();
/***/},
/***/"./src/packages/file-tree-panel-package/models/tree-node-content-item.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"TreeNodeContentItem",function(){return r});var r=function(){function e(e,t){this.component=e;this.displayData=t}return e}();
/***/},
/***/"./src/packages/file-tree-panel-package/models/tree-node-data.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"TreeNodeData",function(){return r});var r=function(){function e(){this.children=[];// 数组在声明时，还需赋默认值
}return e}();
/***/},
/***/"./src/packages/file-tree-panel-package/models/tree-node.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"TreeNode",function(){return l});
/* harmony import */var r=n("./src/packages/file-tree-panel-package/constants/events.ts");
/* harmony import */var o=n("./src/packages/file-tree-panel-package/constants/metadata.ts");var l=function(){
/**
     * 构建树模型
     * @param data
     * @param parent
     * @param treeModel
     * @param fileTreeDataService
     */
function e(t,n,r){if(n===void 0){n=null}var o=this;this._isExpanded=false;// flag of Expand or Collapse
this.isVirtualRoot=false;this._isActive=false;this.preventToggle=false;this.delay=200;
// 用于将对象可枚举属性的值复制到目标对象，并返回目标对象。
// 如果目标对象中的属性具有相同的键，则属性将被源中的属性覆盖。
Object.assign(this,t,{parent:n,treeModel:r});this.treeModel=r;this.parent=n;this.level=this.parent?this.parent.level+1:0;this.childrenField=this.childrenField.map(function(t){return new e(t,o,r)})}Object.defineProperty(e.prototype,"isExpanded",{get:function(){return this._isExpanded}// 写法更简洁，更人性化
,set:function(e){this._isExpanded=true},enumerable:true,configurable:true});Object.defineProperty(e.prototype,"isCollapsed",{get:function(){return!this._isExpanded},enumerable:true,configurable:true});Object.defineProperty(e.prototype,"isActive",{get:function(){return this._isActive},enumerable:true,configurable:true});Object.defineProperty(e.prototype,"options",{
// Proxy of treeModel
get:function(){return this.treeModel.options},enumerable:true,configurable:true});e.prototype.fireEvent=function(e){this.treeModel.fireEvent(e)};Object.defineProperty(e.prototype,"childrenField",{get:function(){return this[this.options.childrenField]||[]},set:function(e){this[this.options.childrenField]=e},enumerable:true,configurable:true});Object.defineProperty(e.prototype,"displayField",{get:function(){return this[this.options.displayField]},enumerable:true,configurable:true});Object.defineProperty(e.prototype,"pathField",{get:function(){return this[this.options.pathField]},enumerable:true,configurable:true});Object.defineProperty(e.prototype,"fileTypeField",{get:function(){return this[this.options.fileTypeField]},enumerable:true,configurable:true});Object.defineProperty(e.prototype,"treeNodeTemplate",{get:function(){return this[this.options.treeNodeTemplate]},enumerable:true,configurable:true});Object.defineProperty(e.prototype,"isRoot",{get:function(){return this.parent.isVirtualRoot},enumerable:true,configurable:true});Object.defineProperty(e.prototype,"realParent",{get:function(){return this.isRoot?null:this.parent},enumerable:true,configurable:true});Object.defineProperty(e.prototype,"isLeaf",{get:function(){return!this.childrenField.length},enumerable:true,configurable:true});Object.defineProperty(e.prototype,"hasChildren",{get:function(){return!this.isFile||!this.isLeaf},enumerable:true,configurable:true});Object.defineProperty(e.prototype,"isFocused",{get:function(){return this.treeModel.focusedNode===this},enumerable:true,configurable:true});Object.defineProperty(e.prototype,"isProject",{get:function(){return this.fileTypeField===o["METADATA_TYPE"].PROJECT},enumerable:true,configurable:true});Object.defineProperty(e.prototype,"isFolder",{get:function(){return this.fileTypeField===o["METADATA_TYPE"].FOLDER},enumerable:true,configurable:true});Object.defineProperty(e.prototype,"isFile",{get:function(){return this.fileTypeField===o["METADATA_TYPE"].FILE},enumerable:true,configurable:true});Object.defineProperty(e.prototype,"fileNodeType",{get:function(){var e=null;switch(this.fileTypeField){case o["METADATA_TYPE"].PROJECT:e="project";// 工程
break;case o["METADATA_TYPE"].FOLDER:e="folder";// 文件夹
break;default:// 默认是文件，返回具体的文件后缀
e="file-";var t=this.getFileSuffix(this.displayField);if(t==null){e+="default"}else{e+=t}break}return e},enumerable:true,configurable:true});
/**
     * 获取文件后缀名
     * @param fileName 文件名
     */e.prototype.getFileSuffix=function(e){if(undefined===e||null===e||e.length<=0){return null}var t;var n=e.split(".");switch(n.length){case 0:case 1:t=null;break;default:t=n[n.length-1];break}return t};e.prototype.getFirstChild=function(){return this.childrenField&&this.childrenField[0]};e.prototype.getLastChild=function(){return this.childrenField&&this.childrenField[this.childrenField.length-1]};e.prototype._getIndexInParent=function(){return this.parent&&this.parent.childrenField.indexOf(this)};e.prototype.findAdjacentSibling=function(e){var t=this._getIndexInParent();return this.parent&&this.parent.childrenField[t+e]};e.prototype.findNextSibling=function(){return this.findAdjacentSibling(+1)};e.prototype.findPreviousSibling=function(){return this.findAdjacentSibling(-1)};e.prototype.findNextNode=function(e){if(e===void 0){e=true}return e&&this.isExpanded&&this.getFirstChild()||this.findNextSibling()||this.parent&&this.parent.findNextNode(false)};e.prototype.findPreviousNode=function(){var e=this.findPreviousSibling();if(!e){return this.realParent}return e.isCollapsed?e:e.getLastChild()};
// 切换方法
// 切换节点的折叠（Collapsed）与扩展（Expanded）状态
e.prototype.toggle=function(e){var t=this;var n=this;n.timerToggle=setTimeout(function(){
// click 事件的处理
if(!t.preventToggle){n._isExpanded=!n.isExpanded;
// focus时，触发load Children操作
if(n.isExpanded&&n.hasChildren){n.treeModel.dynamicLoadChildren(n,1,true)}n.fireEvent({eventName:r["TREE_EVENTS"].onToggle,node:n,isExpanded:n.isExpanded})}t.preventToggle=false},n.delay)};e.prototype._activate=function(){this._isActive=true;
// https://blog.csdn.net/qq_34645412/article/details/77823501
this.fireEvent({eventName:r["TREE_EVENTS"].onActivate,node:this});this.focus()};e.prototype._deactivate=function(){this._isActive=false;this.fireEvent({eventName:r["TREE_EVENTS"].onDeactivate,node:this})};e.prototype.toggleActivated=function(e){if(this.isActive){this._deactivate();this.treeModel.activeNode=null}else{if(this.treeModel.activeNode){this.treeModel.activeNode._deactivate()}this._activate();this.treeModel.activeNode=this}this.fireEvent({eventName:r["TREE_EVENTS"].onActiveChanged,node:this,isActive:this.isActive})};e.prototype.focus=function(){var e=this.treeModel.focusedNode;this.treeModel.focusedNode=this;if(e){this.fireEvent({eventName:r["TREE_EVENTS"].onBlur,node:e})}this.fireEvent({eventName:r["TREE_EVENTS"].onFocus,node:this})};e.prototype.blur=function(){var e=this.treeModel.focusedNode;this.treeModel.focusedNode=null;if(e){this.fireEvent({eventName:r["TREE_EVENTS"].onBlur,node:this})}};
// 双击事件
e.prototype.doublClick=function(e){
// 在双击时，屏蔽产生的单击事件
clearTimeout(this.timerToggle);this.preventToggle=true;if(this.isFile||!this.hasChildren){this.fireEvent({eventName:r["TREE_EVENTS"].onDoubleClick,node:this,rawEvent:e})}};
// 右键快捷菜单
e.prototype.contextMenu=function(e){if(this.options.hasCustomContextMenu){e.preventDefault()}this.fireEvent({eventName:r["TREE_EVENTS"].onContextMenu,node:this,rawEvent:e})};
// 新增节点
e.prototype.addTreeNode=function(e){if(this.isFile){console.log("Can not add treeNode to a file node");return}this.treeModel.addTreeNodeToServer(this,e)};
// 删除节点
e.prototype.removeTreeNode=function(e){};return e}();
/***/},
/***/"./src/packages/file-tree-panel-package/models/tree-options.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"TreeOptions",function(){return l});
/* harmony import */var r=n("./node_modules/lodash/lodash.js");
/* harmony import */var o=n.n(r);var l=function(){function e(e){if(e===void 0){e={}}this.childrenField="children";this.displayField="name";this.fileTypeField="type";// 文件类型字段：project、folder、file
this.pathField="path";// 基于根目录的全路径名
this.treeNodeTemplate="{{ node.displayField }}";// 插值表达式
this.hasCustomContextMenu=false;// 快捷菜单
Object(r["extend"])(this,e)}return e}();
/***/},
/***/"./src/packages/file-tree-panel-package/package.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"FileTreePanelPackage",function(){return d});
/* harmony import */var r=n("./src/packages/file-tree-panel-package/views/index.ts");
/* harmony import */var o=n("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */var l=n.n(o);
/* harmony import */var i=n("./src/packages/file-tree-panel-package/views/file-tree-panel/file-tree-panel.state.ts");
/* harmony import */var a=n("./src/packages/file-tree-panel-package/views/file-tree-panel/file-tree-panel.service.ts");
/* harmony import */var s=n("./src/packages/file-tree-panel-package/views/file-tree-panel/file-tree-panel.component.ts");var c=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)if(t.hasOwnProperty(n))e[n]=t[n]};return function(t,n){e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();var p="filetree";var d=function(e){c(t,e);function t(t,n,r){var o=e.call(this,t)||this;o.cfr=n;o.injector=r;return o}t.prototype.activate=function(e){var t=this;this.packageView=new r["FileTreePanelPackageView"](e.fileTreePanelPackageViewState,this.cfr,this.injector);this.layoutPanel=this.gsp.workspace.getLeftDock().getActivePane().addItem({id:p,getTitle:function(){return"文件"},getElement:function(){return t.packageView.getElement()}},{});
// 处理file-tree-panel上的事件
this.fileTreePanelState=this.injector.get(i["FileTreePanelState"]);this.fileTreePanelState.fileTreeNodeDoubleClick.subscribe(function(e){return t.fileNodeDblClicked(e)});this.fileTreePanelState.fileTreeNodeFocused.subscribe(function(e){return t.fileNodeFocused(e)});this.fileTreePanelState.currentGitReposity.subscribe(function(e){return t.sendCurrentGitReposity(e)});this.fileTreePanelState.currentGitBranch.subscribe(function(e){return t.sendCurrentGitBranch(e)});this.fileTreePanelService=this.injector.get(a["FileTreePanelService"]);
// 处理file-tree-panel 对外提供的接口
this.gsp.eventBus.responseOn("FileTreePanelPackage","AccessFileTree",function(e){return t.accessFileTree(e)});
// 调用 file-tree-panel 对外提供的接口
// requestFor(target: string, tokenValue: string, requestName: string,
//  requestValue: any, success: (any) => any, fail?: (string) => any): void;
// this.gsp.eventBus.requestFor('FileTreePanelPackage', null,
//  'AccessFileTree', {action: '5'},(responseData) => this.successAccessedfileTree(responseData));
// this.gsp.eventBus.requestFor('FileTreePanelPackage', null,
//  'AccessFileTree', {action: '6'},(responseData) => this.successAccessedfileTree(responseData));
var n={action:"1",node:{nodeID:"1",nodeName:"foo.ts",nodeType:"file",nodePath:"/"}};this.gsp.eventBus.requestFor("FileTreePanelPackage",null,"AccessFileTree",n,function(e){return t.successAccessedfileTree(e)})};t.prototype.successAccessedfileTree=function(e){
// console.log('Response Data from the file tree component is:' + responseData);
};t.prototype.accessFileTree=function(e){if(e==null){return}
// this.fileTreePanelState.fileTreeAccess.emit(request);
// this.fileTreePanelService.fireEvent({ eventName: FILE_TREE_PANEL_EVENTS.onFileTreeAccess, requestData: request });
var t=this.packageView.getElement().instance;return t.processRequest(e)};t.prototype.deactivate=function(){this.packageView.destroy();console.log("file tree panel package is deactivated")};t.prototype.serialize=function(){return{fileTreePackageViewState:this.packageView.serialize()}};t.prototype.toggle=function(){};t.prototype.getComponent=function(){return s["FileTreePanelComponent"]};t.prototype.fileNodeDblClicked=function(e){
// this.gsp.eventBus.post(FileTreePanelPackage, this.constructor.name, 'FileNodeDblClicked', data);
this.gsp.workspace.open(e.path)};t.prototype.fileNodeFocused=function(e){this.gsp.eventBus.post(t,this.constructor.name,"FocusedNodePathInfo",e)};t.prototype.sendCurrentGitReposity=function(e){this.gsp.eventBus.post("FileTreePanelPackage",this.constructor.name,"CurrentGitReposity",e)};t.prototype.sendCurrentGitBranch=function(e){this.gsp.eventBus.post("FileTreePanelPackage",this.constructor.name,"CurrentGitBranch",e)};return t}(o["Package"]);
/***/},
/***/"./src/packages/file-tree-panel-package/services/TreeDataAdapter.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"TreeDataAdapter",function(){return o});
/* harmony import */var r=n("./src/packages/file-tree-panel-package/models/tree-node-data.ts");var o=function(){
// https://stackoverflow.com/questions/42396804/how-to-write-a-service-constructor-that-requires-parameters-in-angular-2
function e(e){this.sourceServerTreeData=e}
/**
     * 对服务器端数据进行适配，获取构建文件树所需数据（服务器树结构不同，数据适配方式也不同）
     * @example
      {
        "node":{
          "name":"/",
          "type":"folder",
        }
        children: {
          "node":{
            "name":"/",
            "type":"folder",
          }
          children:{}
        }
      }
      => (适配)
      {
        "node":{
          "name":"/",
          "type":"folder",
          "children": {
            "node":{
              "name":"/",
              "type":"folder",
              children:{}
            }
          }
        }
      }
     */e.prototype.getAdaptedServerData=function(e){var t=this;if(e===void 0){e=this.sourceServerTreeData}if(e==null){return null}
// ServeTreerData2LocalFileTreeData
var n=new r["TreeNodeData"];n.name=e&&e["node"]&&e["node"]["name"];n.type=e&&e["node"]&&e["node"]["type"];n.path=e&&e["node"]&&e["node"]["path"];if(e["children"]==null||e["children"].length<=0){return n;// 回归条件
}e.children.forEach(function(e){var r=t.getAdaptedServerData(e);// 递归触发时机
n.children.push(r)});return n;// 最终返回值
};
/**
     * 对前端文件树数据进行适配，以返回给服务器
     */e.prototype.getAdaptedClientData=function(e){};return e}();
/***/},
/***/"./src/packages/file-tree-panel-package/services/TreeDataReorganizer.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"TreeDataReorganizer",function(){return a});
/* harmony import */var r=n("./src/packages/file-tree-panel-package/constants/metadata.ts");
/* harmony import */var o=n("./node_modules/lodash/lodash.js");
/* harmony import */var l=n.n(o);
/* harmony import */var i=n("./src/packages/file-tree-panel-package/services/tree.constant.ts");
/**
 * 数据重组器，对现有数据根据选用模式进行重组
 */var a=function(){function e(){}e.prototype.reorganizeTreeData=function(e){var t=this;if(null===e){return}var n=e.children;var l=[];n.forEach(function(e){if(e.type!==r["METADATA_TYPE"].FILE){return}if(!t.isParentNode(e)){return}var o=t.searchSameNameNodes(e,n);if(o==null||o.length<=0){return}e.children=o;l=l.concat(o)});
// 移除重复添加的节点
if(l.length<=0){return}Object(o["remove"])(n,function(e){return l.includes(e)})};
/**
     * 根据制定规则，检测节点是否可作为父节点
     * @param node 待检测节点
     */e.prototype.isParentNode=function(e){var t=false;var n=e.name;if(n.split(".").length===2){
// 遍历规则，满足一条规则即表示其为parent node
for(var r=0,o=i["NODE_REORGANIZER_RULE"].AttachRule;r<o.length;r++){var l=o[r];if(n.includes(l.parentNode.suffix)){t=true;break}}}return t};
/**
     * 获取parent节点的文件名
     * @param nodeFullName 文件全名
     */e.prototype.getParentName=function(e){if(this.isUndefinedOrNullOrEmpty(e)){return null}return e.split(".")[0]};
/**
     * 获取child节点的文件名
     * @param nodeFullName 文件全名
     */e.prototype.getChildName=function(e,t){if(this.isUndefinedOrNullOrEmpty(e)){return null}if(this.isUndefinedOrNullOrEmpty(t)){return null}
// 从既有规则中找到匹配规则，并获取文件名
var n=null;for(var r=0,o=i["NODE_REORGANIZER_RULE"].AttachRule;r<o.length;r++){var l=o[r];if(t===l.parentNode.suffix){var a=e.split(l.childrenNode.splitter);if(a.length>1){n=a[0];break}}}return n};
/**
     * 在数组中根据名称查找成员
     */e.prototype.searchSameNameNodes=function(e,t){var n=this;var r=this.getParentName(e.name);if(null===r){return null}var o=this.getNodeSuffix(e.name);if(null===o){return null}var l=[];t.forEach(function(t){var a=n.getChildName(t.name,o);if(!(t===e)){
// 遍历规则，满足一条规则则将其视为同名节点
for(var s=0,c=i["NODE_REORGANIZER_RULE"].AttachRule;s<c.length;s++){var p=c[s];if(r===a&&o===p.parentNode.suffix){l.push(t);break}}}});return l};
/**
     * 获取节点的后缀名
     * @param fileFullName 节点全名
     */e.prototype.getNodeSuffix=function(e){if(this.isUndefinedOrNullOrEmpty(e)){return null}var t=e.split(".").length;return e.split(".")[t-1]};
/**
     * 判断字符串是否 undefined 或 null 或 empty
     * @param str 字符串
     */e.prototype.isUndefinedOrNullOrEmpty=function(e){if(undefined===e||null===e||e.length<=0){return true}return false};return e}();
/***/},
/***/"./src/packages/file-tree-panel-package/services/file-tree-data.service.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"FileTreeDataService",function(){return v});
/* harmony import */var r=n("./node_modules/@angular/core/esm5/core.js");
/* harmony import */var o=n("./node_modules/@angular/common/esm5/http.js");
/* harmony import */var l=n("./node_modules/rxjs/Subject.js");
/* harmony import */var i=n.n(l);
/* harmony import */var a=n("./src/packages/file-tree-panel-package/services/TreeDataAdapter.ts");
/* harmony import */var s=n("./src/packages/file-tree-panel-package/services/mockData.ts");
/* harmony import */var c=n("./src/environments/environment.ts");
/* harmony import */var p=n("./src/packages/file-tree-panel-package/services/TreeDataReorganizer.ts");var d=this&&this.__decorate||function(e,t,n,r){var o=arguments.length,l=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")l=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)if(i=e[a])l=(o<3?i(l):o>3?i(t,n,l):i(t,n))||l;return o>3&&l&&Object.defineProperty(t,n,l),l};var u=this&&this.__metadata||function(e,t){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(e,t)};
// 向url中输入参数时，尽量不想去关心是否需要添加斜线，
// 所以在构造url静态字段时，还需统一斜线添加位置。
// 相比在末尾添加斜线，在头部添加斜线可减少对整体url正确性的思考，
// 而将工作重心放在路径参数的设置上
// access environment.SERVER_IP
var C=c["environment"].SERVER_IP;var f="/api/dev/main/v1.0/project";var h="/tree";var m="/file";var v=function(){
// TypeScript 构造器语法同时定义参数和属性。
// TypeScript's constructor syntax for declaring parameters and properties simultaneously.
// 注入Http服务
function e(e){this.http=e}
/**
     * 异步获取服务器端文件树父节点的子节点数据
     * @param parentNodePath 父节点全路径名称，默认为空，表示根节点
     * @param rebuildFlag 重组数据，默认为false
     * @param depth 设置获取深度，默认为 1
     * @param includeFiles 是否包含文件，默认为false
     */e.prototype.getChildrenData=function(e,t,n,r){if(e===void 0){e=""}if(t===void 0){t=false}if(n===void 0){n=1}if(r===void 0){r=false}var o=this.http;var i=this.getChildrenDataUrl(e,n,r);var s=new l["Subject"];o.get(i).subscribe(function(e){
// todo: 过滤数据
// 获取数据后，对数据进行适配
var n=new a["TreeDataAdapter"](e);var r=n.getAdaptedServerData();
// 已适配数据处理
if(r!=null){if(t){var o=new p["TreeDataReorganizer"];o.reorganizeTreeData(r)}s.next(r.children)}});return s};
/**
     * 使用mock方式构造服务器端数据（离线条件下使用），并返回文件树父节点的子节点数据
     */e.prototype.getChildrenDataWithMock=function(){
// 使用Mock数据
var e=s["SERVER_RESPONSE_RESULT"];var t=[];
// 获取数据后，对数据进行适配
var n=new a["TreeDataAdapter"](e);var r=n.getAdaptedServerData();
// 构建树所需数据
if(t!=null&&r!=null){t=r.children}return t};e.prototype.addFileChild=function(e,t){var n=this.http;var r=this.addFileDataUrl(e,t);return n.post(r,null)};e.prototype.removeFileChild=function(e,t){var n=this.http;var r=this.removeFileDataUrl(e,t);return n.delete(r,{})};e.prototype.addFile=function(){};e.prototype.updateFile=function(){};e.prototype.addFolder=function(){};e.prototype.addProject=function(){};
// 10.24.19.140:5000/api/dev/main/v1.0/project/{parentwspath}
e.prototype.removeFileDataUrl=function(e,t){var n=this.getRootNodeUrl();
// parentNodePath必须存在（不支持在根目录下创建file：只能创建Project）
if(e===null||e.length===0||t.length===0){return null}n+=e+"/"+t;return n};
// 10.24.19.140:5000/api/dev/main/v1.0/project/file/{parentwspath}?name=fileName
e.prototype.addFileDataUrl=function(e,t){var n=this.getRootNodeUrl()+m;
// parentNodePath必须存在（不支持在根目录下创建file：只能创建Project）
if(e===null||e.length===0){return null}n+=e;n+="?name="+t;return n};
/**
     * 获取父节点的子节点数据（需要和服务器端对接，服务器暴露方法不同，封装的url形式也会不同）
     * @param parentNodePath 父节点全路径名称
     * @param depth 设置获取深度，默认为 1
     * @param includeFiles 是否包含文件，默认为false
     */e.prototype.getChildrenDataUrl=function(e,t,n){if(t===void 0){t=1}if(n===void 0){n=false}var r=this.getRootNodeUrl()+h;
// 判断parentNodeName字符串是否为空（在js中比较安全的写法）
if(e.length!==0){r+=e}r+="?depth="+t+"&includeFiles="+n;return r};
/**
     * 获取根节点url
     */e.prototype.getRootNodeUrl=function(){return C+f};e=d([Object(r["Injectable"])(),u("design:paramtypes",[o["HttpClient"]])],e);return e}();
/***/},
/***/"./src/packages/file-tree-panel-package/services/git-data.service.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"GitDataService",function(){return y});
/* unused harmony export BranchData */
/* harmony import */var r=n("./node_modules/@angular/core/esm5/core.js");
/* harmony import */var o=n("./node_modules/@angular/common/esm5/http.js");
/* harmony import */var l=n("./node_modules/rxjs/Subject.js");
/* harmony import */var i=n.n(l);
/* harmony import */var a=n("./node_modules/rxjs/observable/of.js");
/* harmony import */var s=n.n(a);
/* harmony import */var c=n("./node_modules/rxjs/operators.js");
/* harmony import */var p=n.n(c);
/* harmony import */var d=n("./src/environments/environment.ts");var u=this&&this.__decorate||function(e,t,n,r){var o=arguments.length,l=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")l=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)if(i=e[a])l=(o<3?i(l):o>3?i(t,n,l):i(t,n))||l;return o>3&&l&&Object.defineProperty(t,n,l),l};var C=this&&this.__metadata||function(e,t){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(e,t)};
// access environment.SERVER_IP
var f=d["environment"].SERVER_IP;var h="/api/dev/main/v1.0/git";var m="/addr";var v="/branch";var g="/checkout";var y=function(){
// 注入Http服务
function e(e){this.http=e;this.messages=[]}
/**
     * 获取指定路径的git仓库路径，逐级向上查找，没有则返回空
     */e.prototype.getGitAddress=function(e){if(e===void 0){e=""}var t=this.http;var n=this.getGitAddrUrl(e);var r=new l["Subject"];t.get(n,{responseType:"text"}).subscribe(function(e){
// 获取git仓库的路径信息
r.next(e.toString())});return r};
/**
     * checkout命令
     * git checkout branchName
     * @param projectPath
     * @param branchName
     * @param createNewBranch
     * @param chosenfiles
     * @param forceRecoverFile
     */e.prototype.postGitCheckout=function(e,t,n,r,o){if(n===void 0){n=false}if(r===void 0){r=[]}if(o===void 0){o=false}var l=this.getGitCheckoutUrl(e);var i={name:t,createnew:n,files:r,force:o};return this._postGitCommand(l,i)};
/**
     * 获取Git branch数据
     * @param projectPath 工程所在路径
     */e.prototype.getGitBranchData=function(e){var t=this;if(e===void 0){e=""}var n=this.http;var r=this.getGitBranchUrl(e);var o=new l["Subject"];n.get(r).subscribe(function(e){var n=t.getAdaptedGitBranchData(e);if(n.length>0){o.next(n)}});return o};e.prototype.getAdaptedGitBranchData=function(e){var t=[];if(e&&e.length>0){e.forEach(function(e){var n=new E(e);t.push(n)})}return t};e.prototype._postGitCommand=function(e,t){var n=this.http;return n.post(e,t).pipe(Object(c["catchError"])(this.handleError("postGitCommand",e)))};e.prototype.add=function(e){this.messages.push(e)};e.prototype.clear=function(){this.messages=[]};
/**
     * Returns a function that handles Http operation failures.
     * This error handler lets the app continue to run as if no error occurred.
     * @param serviceName = name of the data service that attempted the operation
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */e.prototype.handleError=function(e,t,n){var r=this;if(e===void 0){e=""}if(t===void 0){t="operation"}if(n===void 0){n={}}return function(o){
// TODO: send the error to remote logging infrastructure
console.error(o);// log to console instead
var l=o.error instanceof ErrorEvent?o.error.message:"server returned code "+o.status+' with body "'+o.error+'"';
// TODO: better job of transforming error for user consumption
r.add(e+": "+t+" failed: "+l);
// Let the app keep running by returning a safe result.
return Object(a["of"])(n)}};
/**
     * get git checkout web api
     * @param projectPath
     */e.prototype.getGitCheckoutUrl=function(e){return this._getGitBaseUrl(e,g)};
/**
     * get git branch web api
     * @param projectPath
     * @param listMode
     */e.prototype.getGitBranchUrl=function(e,t){if(t===void 0){t="0"}var n=this._getGitBaseUrl(e,v);return n+="&listMode="+t};
/**
     * get git addr web api
     * @param currentRelativePath
     */e.prototype.getGitAddrUrl=function(e){var t=e.replace(/\\/g,"/");var n=f+h+m;if(t.length<=0){return}n+="?wsPath="+t;return n};e.prototype._getGitBaseUrl=function(e,t){var n=f+h+t;if(e.length<=0){return}n+="?projectPath="+e;return n};e=u([Object(r["Injectable"])(),C("design:paramtypes",[o["HttpClient"]])],e);return e}();var E=function(){function e(e){var t=e.name,n=e.displayName,r=e.active,o=e.remote;this._fullName=t;this._displayName=n;this._activeBranch=r;this._remoteBranch=o}Object.defineProperty(e.prototype,"fullName",{get:function(){return this._fullName},enumerable:true,configurable:true});Object.defineProperty(e.prototype,"displayName",{get:function(){return this._displayName},enumerable:true,configurable:true});Object.defineProperty(e.prototype,"active",{get:function(){return this._activeBranch},enumerable:true,configurable:true});Object.defineProperty(e.prototype,"remote",{get:function(){return this._remoteBranch},enumerable:true,configurable:true});return e}();
/***/},
/***/"./src/packages/file-tree-panel-package/services/mockData.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"SERVER_RESPONSE_RESULT",function(){return r});var r={node:{name:"/",type:"folder",project:null,path:"/",attributes:null,modified:"0001-01-01T00:00:00",contentLength:0,projectConfig:null,links:[{href:"/project/children/",rel:"children",method:"GET",produces:"application/json",consumes:null,parameters:null,requestBody:null},{href:"/project/tree/",rel:"tree",method:"GET",produces:"application/json",consumes:null,parameters:null,requestBody:null},{href:"/project/",rel:"delete",method:"DELETE",produces:null,consumes:null,parameters:null,requestBody:null}]},children:[{node:{name:"asasdasd",type:"project",project:"/asasdasd",path:"/asasdasd",attributes:null,modified:"0001-01-01T00:00:00",contentLength:0,projectConfig:{name:"/asasdasd",path:"/asasdasd",description:"",type:"blank",mixins:[],attributes:{},problems:[{code:11,message:"No project configured in workspace /asasdasd"}],source:{type:null,location:null,parameters:null},links:null},links:[{href:"/project/children/asasdasd",rel:"children",method:"GET",produces:"application/json",consumes:null,parameters:null,requestBody:null},{href:"/project/tree/asasdasd",rel:"tree",method:"GET",produces:"application/json",consumes:null,parameters:null,requestBody:null},{href:"/project/asasdasd",rel:"delete",method:"DELETE",produces:null,consumes:null,parameters:null,requestBody:null}]},children:[]},{node:{name:"asdasdasd",type:"project",project:"/asdasdasd",path:"/asdasdasd",attributes:null,modified:"0001-01-01T00:00:00",contentLength:0,projectConfig:{name:"/asdasdasd",path:"/asdasdasd",description:"",type:"blank",mixins:[],attributes:{},problems:[{code:11,message:"No project configured in workspace /asdasdasd"}],source:{type:null,location:null,parameters:null},links:null},links:[{href:"/project/children/asdasdasd",rel:"children",method:"GET",produces:"application/json",consumes:null,parameters:null,requestBody:null},{href:"/project/tree/asdasdasd",rel:"tree",method:"GET",produces:"application/json",consumes:null,parameters:null,requestBody:null},{href:"/project/asdasdasd",rel:"delete",method:"DELETE",produces:null,consumes:null,parameters:null,requestBody:null}]},children:[]},{node:{name:"assa",type:"project",project:"/assa",path:"/assa",attributes:null,modified:"0001-01-01T00:00:00",contentLength:0,projectConfig:{name:"/assa",path:"/assa",description:"",type:"blank",mixins:[],attributes:{},problems:[{code:11,message:"No project configured in workspace /assa"}],source:{type:null,location:null,parameters:null},links:null},links:[{href:"/project/children/assa",rel:"children",method:"GET",produces:"application/json",consumes:null,parameters:null,requestBody:null},{href:"/project/tree/assa",rel:"tree",method:"GET",produces:"application/json",consumes:null,parameters:null,requestBody:null},{href:"/project/assa",rel:"delete",method:"DELETE",produces:null,consumes:null,parameters:null,requestBody:null}]},children:[]},{node:{name:"BE",type:"project",project:"/BE",path:"/BE",attributes:null,modified:"0001-01-01T00:00:00",contentLength:0,projectConfig:{name:"/BE",path:"/BE",description:"",type:"blank",mixins:[],attributes:{},problems:[{code:11,message:"No project configured in workspace /BE"}],source:{type:null,location:null,parameters:null},links:null},links:[{href:"/project/children/BE",rel:"children",method:"GET",produces:"application/json",consumes:null,parameters:null,requestBody:null},{href:"/project/tree/BE",rel:"tree",method:"GET",produces:"application/json",consumes:null,parameters:null,requestBody:null},{href:"/project/BE",rel:"delete",method:"DELETE",produces:null,consumes:null,parameters:null,requestBody:null}]},children:[{node:{name:"Inspur.Gsp.Lcm",type:"folder",project:"/BE",path:"/BE\\Inspur.Gsp.Lcm",attributes:null,modified:"0001-01-01T00:00:00",contentLength:0,projectConfig:null,links:[{href:"/project/children/BE\\Inspur.Gsp.Lcm",rel:"children",method:"GET",produces:"application/json",consumes:null,parameters:null,requestBody:null},{href:"/project/tree/BE\\Inspur.Gsp.Lcm",rel:"tree",method:"GET",produces:"application/json",consumes:null,parameters:null,requestBody:null},{href:"/project/BE\\Inspur.Gsp.Lcm",rel:"delete",method:"DELETE",produces:null,consumes:null,parameters:null,requestBody:null}]},children:[{node:{name:"Form",type:"folder",project:"/BE",path:"/BE\\Inspur.Gsp.Lcm\\Form",attributes:null,modified:"0001-01-01T00:00:00",contentLength:0,projectConfig:null,links:[{href:"/project/children/BE\\Inspur.Gsp.Lcm\\Form",rel:"children",method:"GET",produces:"application/json",consumes:null,parameters:null,requestBody:null},{href:"/project/tree/BE\\Inspur.Gsp.Lcm\\Form",rel:"tree",method:"GET",produces:"application/json",consumes:null,parameters:null,requestBody:null},{href:"/project/BE\\Inspur.Gsp.Lcm\\Form",rel:"delete",method:"DELETE",produces:null,consumes:null,parameters:null,requestBody:null}]},children:[]}]}]},{node:{name:"LCM",type:"project",project:"/LCM",path:"/LCM",attributes:null,modified:"0001-01-01T00:00:00",contentLength:0,projectConfig:{name:"/LCM",path:"/LCM",description:"",type:"blank",mixins:[],attributes:{},problems:[{code:11,message:"No project configured in workspace /LCM"}],source:{type:null,location:null,parameters:null},links:null},links:[{href:"/project/children/LCM",rel:"children",method:"GET",produces:"application/json",consumes:null,parameters:null,requestBody:null},{href:"/project/tree/LCM",rel:"tree",method:"GET",produces:"application/json",consumes:null,parameters:null,requestBody:null},{href:"/project/LCM",rel:"delete",method:"DELETE",produces:null,consumes:null,parameters:null,requestBody:null}]},children:[{node:{name:"青春A",type:"folder",project:"/LCM",path:"/LCM\\青春A",attributes:null,modified:"0001-01-01T00:00:00",contentLength:0,projectConfig:null,links:[{href:"/project/children/LCM\\青春A",rel:"children",method:"GET",produces:"application/json",consumes:null,parameters:null,requestBody:null},{href:"/project/tree/LCM\\青春A",rel:"tree",method:"GET",produces:"application/json",consumes:null,parameters:null,requestBody:null},{href:"/project/LCM\\青春A",rel:"delete",method:"DELETE",produces:null,consumes:null,parameters:null,requestBody:null}]},children:[{node:{name:"F发的",type:"folder",project:"/LCM",path:"/LCM\\青春A\\F发的",attributes:null,modified:"0001-01-01T00:00:00",contentLength:0,projectConfig:null,links:[{href:"/project/children/LCM\\青春A\\F发的",rel:"children",method:"GET",produces:"application/json",consumes:null,parameters:null,requestBody:null},{href:"/project/tree/LCM\\青春A\\F发的",rel:"tree",method:"GET",produces:"application/json",consumes:null,parameters:null,requestBody:null},{href:"/project/LCM\\青春A\\F发的",rel:"delete",method:"DELETE",produces:null,consumes:null,parameters:null,requestBody:null}]},children:[]},{node:{name:"inspur.gsp.lcm",type:"folder",project:"/LCM",path:"/LCM\\青春A\\inspur.gsp.lcm",attributes:null,modified:"0001-01-01T00:00:00",contentLength:0,projectConfig:null,links:[{href:"/project/children/LCM\\青春A\\inspur.gsp.lcm",rel:"children",method:"GET",produces:"application/json",consumes:null,parameters:null,requestBody:null},{href:"/project/tree/LCM\\青春A\\inspur.gsp.lcm",rel:"tree",method:"GET",produces:"application/json",consumes:null,parameters:null,requestBody:null},{href:"/project/LCM\\青春A\\inspur.gsp.lcm",rel:"delete",method:"DELETE",produces:null,consumes:null,parameters:null,requestBody:null}]},children:[]}]}]},{node:{name:"Metadata",type:"project",project:"/Metadata",path:"/Metadata",attributes:null,modified:"0001-01-01T00:00:00",contentLength:0,projectConfig:{name:"/Metadata",path:"/Metadata",description:"",type:"blank",mixins:[],attributes:{},problems:[{code:11,message:"No project configured in workspace /Metadata"}],source:{type:null,location:null,parameters:null},links:null},links:[{href:"/project/children/Metadata",rel:"children",method:"GET",produces:"application/json",consumes:null,parameters:null,requestBody:null},{href:"/project/tree/Metadata",rel:"tree",method:"GET",produces:"application/json",consumes:null,parameters:null,requestBody:null},{href:"/project/Metadata",rel:"delete",method:"DELETE",produces:null,consumes:null,parameters:null,requestBody:null}]},children:[{node:{name:"inspur.gsp.cmd",type:"folder",project:"/Metadata",path:"/Metadata\\inspur.gsp.cmd",attributes:null,modified:"0001-01-01T00:00:00",contentLength:0,projectConfig:null,links:[{href:"/project/children/Metadata\\inspur.gsp.cmd",rel:"children",method:"GET",produces:"application/json",consumes:null,parameters:null,requestBody:null},{href:"/project/tree/Metadata\\inspur.gsp.cmd",rel:"tree",method:"GET",produces:"application/json",consumes:null,parameters:null,requestBody:null},{href:"/project/Metadata\\inspur.gsp.cmd",rel:"delete",method:"DELETE",produces:null,consumes:null,parameters:null,requestBody:null}]},children:[]},{node:{name:"Inspur.Gsp.Lcm",type:"folder",project:"/Metadata",path:"/Metadata\\Inspur.Gsp.Lcm",attributes:null,modified:"0001-01-01T00:00:00",contentLength:0,projectConfig:null,links:[{href:"/project/children/Metadata\\Inspur.Gsp.Lcm",rel:"children",method:"GET",produces:"application/json",consumes:null,parameters:null,requestBody:null},{href:"/project/tree/Metadata\\Inspur.Gsp.Lcm",rel:"tree",method:"GET",produces:"application/json",consumes:null,parameters:null,requestBody:null},{href:"/project/Metadata\\Inspur.Gsp.Lcm",rel:"delete",method:"DELETE",produces:null,consumes:null,parameters:null,requestBody:null}]},children:[{node:{name:"BE",type:"folder",project:"/Metadata",path:"/Metadata\\Inspur.Gsp.Lcm\\BE",attributes:null,modified:"0001-01-01T00:00:00",contentLength:0,projectConfig:null,links:[{href:"/project/children/Metadata\\Inspur.Gsp.Lcm\\BE",rel:"children",method:"GET",produces:"application/json",consumes:null,parameters:null,requestBody:null},{href:"/project/tree/Metadata\\Inspur.Gsp.Lcm\\BE",rel:"tree",method:"GET",produces:"application/json",consumes:null,parameters:null,requestBody:null},{href:"/project/Metadata\\Inspur.Gsp.Lcm\\BE",rel:"delete",method:"DELETE",produces:null,consumes:null,parameters:null,requestBody:null}]},children:[]}]}]},{node:{name:"mybe",type:"project",project:"/mybe",path:"/mybe",attributes:null,modified:"0001-01-01T00:00:00",contentLength:0,projectConfig:{name:"/mybe",path:"/mybe",description:"",type:"blank",mixins:[],attributes:{},problems:[{code:11,message:"No project configured in workspace /mybe"}],source:{type:null,location:null,parameters:null},links:null},links:[{href:"/project/children/mybe",rel:"children",method:"GET",produces:"application/json",consumes:null,parameters:null,requestBody:null},{href:"/project/tree/mybe",rel:"tree",method:"GET",produces:"application/json",consumes:null,parameters:null,requestBody:null},{href:"/project/mybe",rel:"delete",method:"DELETE",produces:null,consumes:null,parameters:null,requestBody:null}]},children:[{node:{name:"beProject",type:"folder",project:"/mybe",path:"/mybe\\beProject",attributes:null,modified:"0001-01-01T00:00:00",contentLength:0,projectConfig:null,links:[{href:"/project/children/mybe\\beProject",rel:"children",method:"GET",produces:"application/json",consumes:null,parameters:null,requestBody:null},{href:"/project/tree/mybe\\beProject",rel:"tree",method:"GET",produces:"application/json",consumes:null,parameters:null,requestBody:null},{href:"/project/mybe\\beProject",rel:"delete",method:"DELETE",produces:null,consumes:null,parameters:null,requestBody:null}]},children:[]}]},{node:{name:"test1222",type:"project",project:"/test1222",path:"/test1222",attributes:null,modified:"0001-01-01T00:00:00",contentLength:0,projectConfig:{name:"/test1222",path:"/test1222",description:"",type:"blank",mixins:[],attributes:{},problems:[{code:11,message:"No project configured in workspace /test1222"}],source:{type:null,location:null,parameters:null},links:null},links:[{href:"/project/children/test1222",rel:"children",method:"GET",produces:"application/json",consumes:null,parameters:null,requestBody:null},{href:"/project/tree/test1222",rel:"tree",method:"GET",produces:"application/json",consumes:null,parameters:null,requestBody:null},{href:"/project/test1222",rel:"delete",method:"DELETE",produces:null,consumes:null,parameters:null,requestBody:null}]},children:[{node:{name:"myproject",type:"folder",project:"/test1222",path:"/test1222\\myproject",attributes:null,modified:"0001-01-01T00:00:00",contentLength:0,projectConfig:null,links:[{href:"/project/children/test1222\\myproject",rel:"children",method:"GET",produces:"application/json",consumes:null,parameters:null,requestBody:null},{href:"/project/tree/test1222\\myproject",rel:"tree",method:"GET",produces:"application/json",consumes:null,parameters:null,requestBody:null},{href:"/project/test1222\\myproject",rel:"delete",method:"DELETE",produces:null,consumes:null,parameters:null,requestBody:null}]},children:[{node:{name:"Inspur.Gsp.Lcm",type:"folder",project:"/test1222",path:"/test1222\\myproject\\Inspur.Gsp.Lcm",attributes:null,modified:"0001-01-01T00:00:00",contentLength:0,projectConfig:null,links:[{href:"/project/children/test1222\\myproject\\Inspur.Gsp.Lcm",rel:"children",method:"GET",produces:"application/json",consumes:null,parameters:null,requestBody:null},{href:"/project/tree/test1222\\myproject\\Inspur.Gsp.Lcm",rel:"tree",method:"GET",produces:"application/json",consumes:null,parameters:null,requestBody:null},{href:"/project/test1222\\myproject\\Inspur.Gsp.Lcm",rel:"delete",method:"DELETE",produces:null,consumes:null,parameters:null,requestBody:null}]},children:[{node:{name:"Form",type:"folder",project:"/test1222",path:"/test1222\\myproject\\Inspur.Gsp.Lcm\\Form",attributes:null,modified:"0001-01-01T00:00:00",contentLength:0,projectConfig:null,links:[{href:"/project/children/test1222\\myproject\\Inspur.Gsp.Lcm\\Form",rel:"children",method:"GET",produces:"application/json",consumes:null,parameters:null,requestBody:null},{href:"/project/tree/test1222\\myproject\\Inspur.Gsp.Lcm\\Form",rel:"tree",method:"GET",produces:"application/json",consumes:null,parameters:null,requestBody:null},{href:"/project/test1222\\myproject\\Inspur.Gsp.Lcm\\Form",rel:"delete",method:"DELETE",produces:null,consumes:null,parameters:null,requestBody:null}]},children:null}]},{node:{name:"myproj2",type:"folder",project:"/test1222",path:"/test1222\\myproject\\myproj2",attributes:null,modified:"0001-01-01T00:00:00",contentLength:0,projectConfig:null,links:[{href:"/project/children/test1222\\myproject\\myproj2",rel:"children",method:"GET",produces:"application/json",consumes:null,parameters:null,requestBody:null},{href:"/project/tree/test1222\\myproject\\myproj2",rel:"tree",method:"GET",produces:"application/json",consumes:null,parameters:null,requestBody:null},{href:"/project/test1222\\myproject\\myproj2",rel:"delete",method:"DELETE",produces:null,consumes:null,parameters:null,requestBody:null}]},children:[{node:{name:"test",type:"folder",project:"/test1222",path:"/test1222\\myproject\\myproj2\\test",attributes:null,modified:"0001-01-01T00:00:00",contentLength:0,projectConfig:null,links:[{href:"/project/children/test1222\\myproject\\myproj2\\test",rel:"children",method:"GET",produces:"application/json",consumes:null,parameters:null,requestBody:null},{href:"/project/tree/test1222\\myproject\\myproj2\\test",rel:"tree",method:"GET",produces:"application/json",consumes:null,parameters:null,requestBody:null},{href:"/project/test1222\\myproject\\myproj2\\test",rel:"delete",method:"DELETE",produces:null,consumes:null,parameters:null,requestBody:null}]},children:null}]}]},{node:{name:"青春A",type:"folder",project:"/test1222",path:"/test1222\\青春A",attributes:null,modified:"0001-01-01T00:00:00",contentLength:0,projectConfig:null,links:[{href:"/project/children/test1222\\青春A",rel:"children",method:"GET",produces:"application/json",consumes:null,parameters:null,requestBody:null},{href:"/project/tree/test1222\\青春A",rel:"tree",method:"GET",produces:"application/json",consumes:null,parameters:null,requestBody:null},{href:"/project/test1222\\青春A",rel:"delete",method:"DELETE",produces:null,consumes:null,parameters:null,requestBody:null}]},children:[{node:{name:"F发的",type:"folder",project:"/test1222",path:"/test1222\\青春A\\F发的",attributes:null,modified:"0001-01-01T00:00:00",contentLength:0,projectConfig:null,links:[{href:"/project/children/test1222\\青春A\\F发的",rel:"children",method:"GET",produces:"application/json",consumes:null,parameters:null,requestBody:null},{href:"/project/tree/test1222\\青春A\\F发的",rel:"tree",method:"GET",produces:"application/json",consumes:null,parameters:null,requestBody:null},{href:"/project/test1222\\青春A\\F发的",rel:"delete",method:"DELETE",produces:null,consumes:null,parameters:null,requestBody:null}]},children:[{node:{name:"范德萨发",type:"folder",project:"/test1222",path:"/test1222\\青春A\\F发的\\范德萨发",attributes:null,modified:"0001-01-01T00:00:00",contentLength:0,projectConfig:null,links:[{href:"/project/children/test1222\\青春A\\F发的\\范德萨发",rel:"children",method:"GET",produces:"application/json",consumes:null,parameters:null,requestBody:null},{href:"/project/tree/test1222\\青春A\\F发的\\范德萨发",rel:"tree",method:"GET",produces:"application/json",consumes:null,parameters:null,requestBody:null},{href:"/project/test1222\\青春A\\F发的\\范德萨发",rel:"delete",method:"DELETE",produces:null,consumes:null,parameters:null,requestBody:null}]},children:null}]}]}]}]};
/***/},
/***/"./src/packages/file-tree-panel-package/services/tree.constant.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"NODE_REORGANIZER_RULE",function(){return r});
/**
 * 节点重组规则
 */var r={
// 同名节点隶属规则
AttachRule:[{
// 节点名称类型划分:
// a 和 b
// a.x 和 b.x //仅考虑这种场景
// a.b.x 和 a.c.x
// ...
// 唯一确定parent node: 节点名称 + 后缀
// 分隔符为'.'，分割后长度为2，节点后缀为'hlp'，节点名称仅取分隔数组的第0个元素
parentNode:{suffix:"hlp"},
// 和parent同名的children node
// 分隔符为'.'或'_'，节点名称仅取分隔数组的第0个元素
childrenNode:{splitter:"_"}},{parentNode:{suffix:"hlp"},childrenNode:{splitter:"."}},{parentNode:{suffix:"cs"},childrenNode:{splitter:"."}}]};
/***/},
/***/"./src/packages/file-tree-panel-package/views/file-tree-panel/file-tree-panel.component.css":
/***/function(e,t,n){t=e.exports=n("./node_modules/css-loader/lib/css-base.js")(false);
// imports
// module
t.push([e.i,".filetreepanel {\n  overflow: hidden;\n    \n  cursor: pointer;\n  -webkit-user-select: none;   /* Chrome/Safari/Opera */\n  -ms-user-select: none;       /* IE/Edge */\n  -moz-user-select: none;\n       user-select: none;          /* non-prefixed version, currently not supported by any browser */\n  white-space: nowrap;\n}\n\n.menu {\n  display: inline-block;\n  -webkit-user-select: none;   /* Chrome/Safari/Opera */\n  -ms-user-select: none;       /* IE/Edge */\n  -moz-user-select: none;\n       user-select: none;           /* non-prefixed version, currently not supported by any browser */\n}\n\n.filetreepanel .filetreepanel-header{\n  background-color: #f6f6f6;\n}\n\n.filetreepanel .filetreepanel-header .header-label{\n  display: inline-block;\n}\n\n.filetreepanel .filetreepanel-header .header-icon{\n  float: right;\n}\n\n.filetreepanel .filetreepanel-header .header-icon .demo-icon {\n  margin-right: 13px;\n}\n\n/* .filetreepanel .filetreepanel-content{\n\n} */\n\n.filetreepanel .filetreepanel-tailer{\n  \n  /* position: absolute;\n  bottom: 1px;\n  left: 1px;\n  right: 3px; */\n\n  background-color: #f6f6f6;  \n}\n\n.filetreepanel .filetreepanel-tailer .tailer-label{\n  display: inline-block;\n}\n\n.filetreepanel .filetreepanel-tailer .tailer-icon{\n  float: right;\n}\n\n.filetreepanel .filetreepanel-tailer .tailer-icon .demo-icon {\n  margin-right: 13px;\n}\n\n.dropdown-menu {\n  bottom: auto;\n  \n  font-size: 0.8rem;\n}",""]);
// exports
/*** EXPORTS FROM exports-loader ***/e.exports=e.exports.toString();
/***/},
/***/"./src/packages/file-tree-panel-package/views/file-tree-panel/file-tree-panel.component.html":
/***/function(e,t){e.exports='<div class="filetreepanel">\n\n    <div class="filetreepanel-header">\n        <div class="header-label"><label>资源管理器</label></div>\n        <div class="header-icon cursor-pointer">\n            <i class="demo-icon icon-cw" (click)="refresh()"></i>\n        </div>\n    </div>\n    \n    <app-tree class="filetreepanel-content"\n        [nodes]="projectsData"\n        [focused]="true"\n        (onToggle)="toggleEventHandler($event)"\n        (onActivate)="activateEventHandler($event)"\n        (onDeactivate)="deactivateEventHandler($event)"\n        (onActiveChanged)="activeChangedEventHandler($event)"\n        (onFocus)="focusEventHandler($event)"\n        (onBlur)="blurEventHandler($event)"\n        (onDoubleClick)="doubleClickEventHandler($event)"\n        (onContextMenu)="contextMenuEventHandler($event)"\n    ></app-tree>\n    \n    <div class="filetreepanel-tailer">\n        <div class="tailer-label">\n            <label *ngIf="!currentGitProject" id="choose-git-project">请选择包含Git仓库的工程</label>\n            <label *ngIf="currentGitProject" id="chosen-git-project">仓库{{currentGitProject}}：\n                <label *ngIf="!chosenBranch" id="no-chosen-git-branch">未选择分支或不包含分支</label>\n                <label *ngIf="chosenBranch" id="chosen-git-branch">当前分支:{{chosenBranch.displayName}}</label>\n            </label>\n        </div>\n    \n        <div class="tailer-icon cursor-pointer">    \n            <div class="btn-group" dropdown [dropup]="true">\n                <i class="demo-icon icon-ellipsis" dropdownToggle aria-controls="dropdown-dropup" (click)="fetchGitBranchData()"></i>\n                <ul id="dropdown-dropup" *dropdownMenu class="dropdown-menu dropdown-menu-right"\n                    role="menu" aria-labelledby="button-dropup">\n                  \x3c!-- <li role="menuitem" (click)="gitCheckout()"><a class="dropdown-item" href="#">branch1</a></li>\n                  <li role="menuitem"><a class="dropdown-item" href="#">Another action</a></li>\n                  <li role="menuitem"><a class="dropdown-item" href="#">Something else here</a></li> --\x3e\n                  \n                 <li role="menuitem"\n                    *ngFor="let localBranch of localBranches"\n                    (click)="gitCheckoutLocalBranch(localBranch.displayName)"\n                    ><a class="dropdown-item">{{localBranch.displayName}}</a>\n                 </li> \n    \n                  <li class="divider dropdown-divider"></li>\n                  <li role="menuitem"\n                    *ngFor="let remoteBranch of remoteBranches"\n                    (click)="gitCheckoutRemoteBranch(remoteBranch.displayName)"\n                    ><a class="dropdown-item">{{remoteBranch.displayName}}</a>\n                  </li>\n    \n                </ul>\n            </div>\n    \n        </div>\n    </div>\n\n</div>'
/***/},
/***/"./src/packages/file-tree-panel-package/views/file-tree-panel/file-tree-panel.component.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"FileTreePanelComponent",function(){return C});
/* harmony import */var r=n("./node_modules/@angular/core/esm5/core.js");
/* harmony import */var o=n("./node_modules/rxjs/Subject.js");
/* harmony import */var l=n.n(o);
/* harmony import */var i=n("./src/packages/file-tree-panel-package/services/file-tree-data.service.ts");
/* harmony import */var a=n("./src/packages/file-tree-panel-package/services/git-data.service.ts");
/* harmony import */var s=n("./src/packages/file-tree-panel-package/views/file-tree-panel/file-tree-panel.state.ts");
/* harmony import */var c=n("./src/packages/file-tree-panel-package/views/file-tree-panel/file-tree-panel.service.ts");
/* harmony import */var p=n("./src/packages/file-tree-panel-package/views/file-tree-panel/file-tree-panel.options.ts");var d=this&&this.__decorate||function(e,t,n,r){var o=arguments.length,l=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")l=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)if(i=e[a])l=(o<3?i(l):o>3?i(t,n,l):i(t,n))||l;return o>3&&l&&Object.defineProperty(t,n,l),l};var u=this&&this.__metadata||function(e,t){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(e,t)};
// import { Workspace } from '../../../../workspace/workspace';
var C=function(){
/**
     * 构造函数，注入依赖的服务
     * @param fileTreeDataService 注入文件树数据获取服务，以获取数据
     * @param fileTreePanelState 注入工作区服务，以与工作区交互
     * @param gitDataService 注入git数据服务，以与git服务交互
     */
function e(e,t,n,r){this.fileTreePanelService=e;this.fileTreeDataService=t;this.fileTreePanelState=n;this.gitDataService=r;this.options=new p["FileTreePanelOptions"];this.currentGitProject="";this.localBranches=[];this.remoteBranches=[];
// 自定义事件处理器
this.toggleEventHandler=function(e){
// console.log($event);
};this.deactivateEventHandler=function(e){
// console.log($event);
};this.activeChangedEventHandler=function(e){
// console.log($event);
};this.blurEventHandler=function(e){
// console.log($event);
};this.contextMenuEventHandler=function(e){
// console.log('ContextMenu:Show ContextMenu');
};var o=this;
// 获取数据
o.getInitFileTreeData(false);
// // 初始化自定义事件，并绑定事件处理器
// fileTreePanelService.eventNames.forEach((name) => {
//   // 自定义事件
//   self[name] = new EventEmitter();
//   const eventPair = pick(self, name);
//   fileTreePanelService.addEvent(eventPair);
//   // // 绑定事件处理器
//   // switch(name){
//   //   case FILE_TREE_PANEL_EVENTS.onFileTreeAccess:
//   //     self[name].subscribe((data) => this.processRequest(data));//
//   //     break;
//   //   default:
//   //     break;
//   //   }
// })
}e.prototype.processRequest=function(e){if(e==null){return}var t=null;var n=e[this.options.actionField];switch(n){case p["ACTION"].createFileTreeNode:t=this.createFileTreeNode(e);break;case p["ACTION"].retrieveFileTreeNode:t=this.retrieveFileTreeNode(e);break;case p["ACTION"].updateFileTreeNode:t=this.updateFileTreeNode(e);break;case p["ACTION"].deleteFileTreeNode:t=this.deleteFileTreeNode(e);break;case p["ACTION"].refreshFileTree:t=this.refreshFileTree(e);break;case p["ACTION"].getFocusedFileTreeNode:t=this.getFocusedFileTreeNode(e);break;default:break}return t};e.prototype.createFileTreeNode=function(e){var t=e.node;var n=t.nodeID;var r=t.nodeName;var o=t.nodeType;var l=t.nodePath;this.fileTreePanelService.treeModel.addFileTreeNode(o,n,r,l);return true};e.prototype.deleteFileTreeNode=function(e){this.fileTreePanelService.treeModel.removeFileTreeFocusedNode()};
// todo:补充节点更新方法
e.prototype.updateFileTreeNode=function(e){};
// todo:补充节点查找方法
e.prototype.retrieveFileTreeNode=function(e){};
// 刷新文件树
// todo: 支持局部加载
e.prototype.refreshFileTree=function(e){this.getInitFileTreeData()};
// 获取文件树节点
e.prototype.getFocusedFileTreeNode=function(e){var t={nodeID:"",nodeName:"",nodeType:"",nodePath:""};var n=this.fileTreePanelService.treeModel.FocusedNode;if(n==null){return t}
// focusedNodeInfo.nodeID = focusedNode.idField
t.nodeName=n.displayField;t.nodeType=n.fileTypeField;t.nodePath=n.pathField;return t};
/**
     * 获取根目录树
     * @param isMockedData 是否选用mock数据
     */e.prototype.getInitFileTreeData=function(e){var t=this;if(e===void 0){e=false}if(e){this.projectsData=this.fileTreeDataService.getChildrenDataWithMock();return}this.fileTreeDataService.getChildrenData("",true).subscribe(function(e){t.projectsData=e})};e.prototype.activateEventHandler=function(e){
// 在TreeNode Actived时，传递treeNode info
// [EventBus使用]3.通过EventBusProxy实例，向指定事件发送数据
// this.ebproxy.post('FileTreeNodeActived', $event.node);
this.fileTreePanelState.fileTreeNodeActived.emit(e.node)};e.prototype.focusEventHandler=function(e){
// console.log($event);
this.fileTreePanelState.fileTreeNodeFocused.emit(e.node.pathField);
// 选中节点时，更新git信息
this.updateCurrentGitInfo()};
// 双击不同的文件，打开不同的设计器。如双击.BE文件，打开BE设计器
e.prototype.doubleClickEventHandler=function(e){
// console.log('DoubleClick:Open the File\'s Editor');
// [EventBus2使用]2.通过EventBusProxy实例，向指定事件发送数据
// this.ebproxy2 && this.ebproxy2.post('FileTreeNodeDoubleClick', $event.node);
this.fileTreePanelState.fileTreeNodeDoubleClick.emit(e.node)};e.prototype.ngOnInit=function(){
// [EventBus使用]1.创建EventBusProxy实例
// this.ebproxy = this.workspace.eventBus.getProxy(this, () => 'FileTreePanelPackage');
// [EventBus使用]2.使用EventBusProxy，注册event
// this.ebproxy.register(['FileTreeNodeActived']);
// [EventBus2使用]1.创建EventBusProxy实例
// this.ebproxy2 = this.workspace.eventBus2.getProxy(FileTreePanelPackage, () => 'FileTreePanelPackage');
};
// 刷新功能
e.prototype.refresh=function(){
// this.fileTreePanelService.treeModel.refresh();
// 刷新整棵树
this.refreshFileTree(null);
// todo: 刷新文件树的指定目录
};
// todo: 全部折叠
e.prototype.collapseAll=function(){this.fileTreePanelService.treeModel.collapseAll()};
// 获取git branch数据
e.prototype.fetchGitBranchData=function(){var e=this;var t=this;if(t.currentGitProject===""){
// 清空已有历史记录
t.remoteBranches=[];t.localBranches=[];
// console.log('Please choose a project with git repository');
return}t.gitDataService.getGitBranchData(t.currentGitProject).subscribe(function(n){var r=n;t.remoteBranches=[];t.localBranches=[];r.forEach(function(n){if(n.remote){t.remoteBranches.push(n)}else{t.localBranches.push(n);if(n.active){t.chosenBranch=n;
// 发射当前 Git Branch displayName
// console.log('Emit Current Git Branch');
t.fileTreePanelState.currentGitBranch.emit(e.chosenBranch.displayName)}}});
// console.log(' Already got branch list from server');
})};e.prototype.gitCheckoutLocalBranch=function(e){this._gitCheckout(e,false)};e.prototype.gitCheckoutRemoteBranch=function(e){var t=e.substring(e.indexOf("/")+1,e.length);if(t.length<0){return}
// 检查远程分支对应的本地分支是否已存在
var n=false;this.localBranches.forEach(function(e){if(e.displayName===t){n=true}});if(n){return}this._gitCheckout(t,false)};e.prototype._gitCheckout=function(e,t){if(t===void 0){t=false}var n=this;
// 分支切换
n.gitDataService.postGitCheckout(this.currentGitProject,e,t).subscribe(function(e){n.fetchGitBranchData();
// console.log('checkout branch:' + branchName);
},function(t){console.error("checkout branch:"+e+"failed")})};
// 更新当前gitProject，并获取分支信息
e.prototype.updateCurrentGitInfo=function(){var e=this;var t=this;t.currentGitProject="";// 每切换一次分支，都重新初始化相关数据
t.remoteBranches=[];t.localBranches=[];t.getGitProjectPath().subscribe(function(n){t.currentGitProject=n;
// 发射当前Git仓库信息
// console.log('Emit Current Git Reposity');
t.fileTreePanelState.currentGitReposity.emit(e.currentGitProject);
// 获取分支信息
t.fetchGitBranchData()},function(e){console.log("Error in get Current Git Reposity:"+e)})};
// 获取当前选中节点的最近git仓库的path
e.prototype.getGitProjectPath=function(){var e=this;
// 调用服务获取最近git仓库的path
var t=e.fileTreePanelService.treeModel.focusedNode.pathField;var n=new o["Subject"];e.gitDataService.getGitAddress(t).subscribe(function(e){var t=e.replace(/\\/g,"/");if(t===""){console.log("Current Project does not have a git depository")}n.next(t)});return n};e=d([Object(r["Component"])({selector:"app-file-tree-panel",template:n("./src/packages/file-tree-panel-package/views/file-tree-panel/file-tree-panel.component.html"),styles:[n("./src/packages/file-tree-panel-package/views/file-tree-panel/file-tree-panel.component.css")]}),u("design:paramtypes",[c["FileTreePanelService"],i["FileTreeDataService"],s["FileTreePanelState"],a["GitDataService"]])],e);return e}();
/***/},
/***/"./src/packages/file-tree-panel-package/views/file-tree-panel/file-tree-panel.options.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"FileTreePanelOptions",function(){return l});
/* harmony export (binding) */n.d(t,"ACTION",function(){return i});
/* harmony import */var r=n("./node_modules/lodash/lodash.js");
/* harmony import */var o=n.n(r);var l=function(){function e(e){if(e===void 0){e={}}this.actionField="action";this.displayField="name";this.fileTypeField="type";this.pathField="path";Object(r["extend"])(this,e)}return e}();
// todo: 迁移到独立的常量文件中
var i={
// 增加树节点
createFileTreeNode:"1",
// 查询树节点
retrieveFileTreeNode:"2",
// 更新树节点
updateFileTreeNode:"3",
// 删除树节点
deleteFileTreeNode:"4",
// 刷新树
refreshFileTree:"5",
// 获取当前选中节点
getFocusedFileTreeNode:"6"};
/***/},
/***/"./src/packages/file-tree-panel-package/views/file-tree-panel/file-tree-panel.service.ts":
/***/function(e,t,n){"use strict";
/* unused harmony export FILE_TREE_PANEL_EVENTS */
/* harmony export (binding) */n.d(t,"FileTreePanelService",function(){return p});
/* harmony import */var r=n("./node_modules/@angular/core/esm5/core.js");
/* harmony import */var o=n("./node_modules/lodash/lodash.js");
/* harmony import */var l=n.n(o);
/* harmony import */var i=n("./src/packages/file-tree-panel-package/models/tree-model.ts");var a=this&&this.__decorate||function(e,t,n,r){var o=arguments.length,l=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")l=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)if(i=e[a])l=(o<3?i(l):o>3?i(t,n,l):i(t,n))||l;return o>3&&l&&Object.defineProperty(t,n,l),l};var s=this&&this.__metadata||function(e,t){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(e,t)};
// todo:file-tree组件从file-tree-panel组件拆分后，将其迁移到独立的文件
var c={onFileTreeAccess:"onFileTreeAccess"};var p=function(){
/**
     * 构造函数，注入依赖的服务
     * @param treeModel 注入文件树服务，以与文件树交互
     */
function e(e){this.treeModel=e;this.eventNames=Object.keys(c);this.events={};// 使用事件
}
/**
     * 设置启用事件
     * @param  事件
     */e.prototype.addEvent=function(e){Object(o["assign"])(this.events,e);console.log(this.events)};e=a([Object(r["Injectable"])(),s("design:paramtypes",[i["TreeModel"]])],e);return e}();
/***/},
/***/"./src/packages/file-tree-panel-package/views/file-tree-panel/file-tree-panel.state.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"FileTreePanelState",function(){return l});
/* harmony import */var r=n("./node_modules/@angular/core/esm5/core.js");var o=this&&this.__decorate||function(e,t,n,r){var o=arguments.length,l=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")l=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)if(i=e[a])l=(o<3?i(l):o>3?i(t,n,l):i(t,n))||l;return o>3&&l&&Object.defineProperty(t,n,l),l};var l=function(){function e(){this.fileTreeNodeActived=new r["EventEmitter"];this.fileTreeNodeDoubleClick=new r["EventEmitter"];this.fileTreeNodeFocused=new r["EventEmitter"];this.fileTreeAccess=new r["EventEmitter"];this.currentGitReposity=new r["EventEmitter"];this.currentGitBranch=new r["EventEmitter"]}e=o([Object(r["Injectable"])()],e);return e}();
/***/},
/***/"./src/packages/file-tree-panel-package/views/index.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"FileTreePanelPackageView",function(){return a});
/* harmony import */var r=n("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */var o=n.n(r);
/* harmony import */var l=n("./src/packages/file-tree-panel-package/views/file-tree-panel/file-tree-panel.component.ts");var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)if(t.hasOwnProperty(n))e[n]=t[n]};return function(t,n){e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();var a=function(e){i(t,e);function t(t,n,r){var o=e.call(this,t)||this;o.cfr=n;o.injector=r;o.element=o.cfr.resolveComponentFactory(l["FileTreePanelComponent"]).create(o.injector);return o}t.prototype.serialize=function(){};t.prototype.destroy=function(){};return t}(r["PackageView"]);
/***/},
/***/"./src/packages/file-tree-panel-package/views/tree-node-content/tree-node-content.component.css":
/***/function(e,t,n){t=e.exports=n("./node_modules/css-loader/lib/css-base.js")(false);
// imports
// module
t.push([e.i,".tree-node-content:hover {\n    background:rgb(168, 218, 167);\n}\n.tree-node-content {\n    display: inline-block;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    vertical-align: middle;\n}",""]);
// exports
/*** EXPORTS FROM exports-loader ***/e.exports=e.exports.toString();
/***/},
/***/"./src/packages/file-tree-panel-package/views/tree-node-content/tree-node-content.component.html":
/***/function(e,t){e.exports="<div class='tree-node-content' title=\"{{ displayData }}\" [style.width]=\"contentWidth + 'px'\">\n  {{ displayData }}\n</div>"
/***/},
/***/"./src/packages/file-tree-panel-package/views/tree-node-content/tree-node-content.component.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"TreeNodeContentComponent",function(){return a});
/* harmony import */var r=n("./node_modules/@angular/core/esm5/core.js");
/* harmony import */var o=n("./src/app/workspace/workspace.manager.ts");var l=this&&this.__decorate||function(e,t,n,r){var o=arguments.length,l=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")l=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)if(i=e[a])l=(o<3?i(l):o>3?i(t,n,l):i(t,n))||l;return o>3&&l&&Object.defineProperty(t,n,l),l};var i=this&&this.__metadata||function(e,t){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(e,t)};var a=function(){function e(e,t){var n=this;this.el=e;this.injector=t;this.contentWidth=0;this.injector.get(o["WorkspaceManager"]).leftSidebarResize.subscribe(function(e){if(e.isOpen){n.initContentWidth()}})}e.prototype.ngOnInit=function(){this.initContentWidth()};e.prototype.initContentWidth=function(){var e=this.el.nativeElement.offsetLeft;
// const realWidth = el.nativeElement.scrollWidth;
if(this.el.nativeElement.offsetParent){var t=this.el.nativeElement.offsetParent.clientWidth-20;this.contentWidth=t-e}};l([Object(r["Input"])(),i("design:type",Object)],e.prototype,"displayData",void 0);e=l([Object(r["Component"])({selector:"app-tree-node-content",template:n("./src/packages/file-tree-panel-package/views/tree-node-content/tree-node-content.component.html"),styles:[n("./src/packages/file-tree-panel-package/views/tree-node-content/tree-node-content.component.css")]}),i("design:paramtypes",[r["ElementRef"],r["Injector"]])],e);return e}();
/***/},
/***/"./src/packages/file-tree-panel-package/views/tree/tree.component.css":
/***/function(e,t,n){t=e.exports=n("./node_modules/css-loader/lib/css-base.js")(false);
// imports
// module
t.push([e.i,".tree {\n  display: inline-block;\n  cursor: pointer;\n  -webkit-user-select: none;   /* Chrome/Safari/Opera */\n  -ms-user-select: none;       /* IE/Edge */\n  -moz-user-select: none;\n       user-select: none;          /* non-prefixed version, currently not supported by any browser */\n  white-space: nowrap;\n  overflow: hidden;\n}",""]);
// exports
/*** EXPORTS FROM exports-loader ***/e.exports=e.exports.toString();
/***/},
/***/"./src/packages/file-tree-panel-package/views/tree/tree.component.html":
/***/function(e,t){e.exports='<div class="tree">\n    <app-treenode class="tree-node"\n      (click)="treeModel.setFocus(true)"\n      *ngFor="let child of treeModel.roots"\n      [node]="child">\n      </app-treenode>\n</div>'
/***/},
/***/"./src/packages/file-tree-panel-package/views/tree/tree.component.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"TreeComponent",function(){return d});
/* harmony import */var r=n("./node_modules/@angular/core/esm5/core.js");
/* harmony import */var o=n("./src/packages/file-tree-panel-package/models/tree-model.ts");
/* harmony import */var l=n("./src/packages/file-tree-panel-package/models/tree-options.ts");
/* harmony import */var i=n("./src/packages/file-tree-panel-package/constants/keys.ts");
/* harmony import */var a=n("./node_modules/lodash/lodash.js");
/* harmony import */var s=n.n(a);var c=this&&this.__decorate||function(e,t,n,r){var o=arguments.length,l=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")l=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)if(i=e[a])l=(o<3?i(l):o>3?i(t,n,l):i(t,n))||l;return o>3&&l&&Object.defineProperty(t,n,l),l};var p=this&&this.__metadata||function(e,t){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(e,t)};
// 将lodash安装到node-modules中，实现按需引入
// import { GitDataService, BranchData} from '../../../git-panel-package/services/git-data.service';
// 约定使用下划线表示lodash，就像用$表示jQuery一样
// 1.require关键字不被识别：
// https://stackoverflow.com/questions/31173738/typescript-getting-error-ts2304-cannot-find-name-require
// declare var require: any
// const _ = require('lodash');
// 2.安装lodash的es版本：
// (1) $>npm i lodash-es
// (2) $>npm install --save @types/lodash
var d=function(){function e(e){var t=this;this.treeModel=e;e.eventNames.forEach(function(e){return t[e]=new r["EventEmitter"]});// customEventName -> new EventEmitter()
// 订阅“元数据新建”事件(设计不合理)
// this.eventBus.subscribeByEventName('CreateMetadata', this, (data) => this.treeModel.addFileTreeNode(data));
}Object.defineProperty(e.prototype,"nodes",{set:function(e){},enumerable:true,configurable:true});Object.defineProperty(e.prototype,"options",{set:function(e){},enumerable:true,configurable:true});Object.defineProperty(e.prototype,"focused",{set:function(e){this.treeModel.setFocus(e);
// console.log('focused on the tree');
},enumerable:true,configurable:true});e.prototype.ngOnChanges=function(e){
// console.log('nodes:',changes.nodes);
// console.log('currentValue:',changes.nodes.currentValue);
this.treeModel.setData({nodes:e.nodes&&e.nodes.currentValue,options:e.options&&e.options.currentValue,events:Object(a["pick"])(this,this.treeModel.eventNames)})};
// 优先使用HostListener装饰器绑定事件，而不是使用Directive或Component的host元数据
// When binging events to Directive or Component, Angular suggests to prefer to HostListener decorator,
// rather than host metadata.
e.prototype.onKeydown=function(e){
// alert('Pressed a key');
var t=this.treeModel.focusedNode;if(!this.treeModel.isFocused){return}if(Object(a["includes"])([i["KEYS"].DOWN,i["KEYS"].UP,i["KEYS"].LEFT,i["KEYS"].RIGHT,i["KEYS"].ENTER,i["KEYS"].SPACE],e.keyCode)){e.preventDefault();// 取消事件的默认动作，实现仅对includes键响应
}switch(e.keyCode){case i["KEYS"].DOWN:return this.treeModel.focusNextNode();case i["KEYS"].UP:return this.treeModel.focusPreviousNode();case i["KEYS"].LEFT:
// alert('Focus Drill Up');
if(t.isExpanded){t.toggle()}else{this.treeModel.focusDrillUp()}return;case i["KEYS"].RIGHT:
// alert('Focus Drill Down');
if(t.isCollapsed){t.toggle()}else{this.treeModel.focusDrillDown()}return;case i["KEYS"].ENTER:case i["KEYS"].SPACE:
// alert('Enter or Space key.');
return t&&t.toggleActivated()}};e.prototype.onMousedown=function(e){
// alert('click');
var t=e.target.closest("app-tree");// 判断当前dom树上下文中是否包含树组件
if(!t){this.treeModel.setFocus(false)}};c([Object(r["Input"])(),p("design:type",Array),p("design:paramtypes",[Array])],e.prototype,"nodes",null);c([Object(r["Input"])(),p("design:type",l["TreeOptions"]),p("design:paramtypes",[l["TreeOptions"]])],e.prototype,"options",null);c([Object(r["Input"])(),p("design:type",Boolean),p("design:paramtypes",[Boolean])],e.prototype,"focused",null);c([Object(r["Output"])(),p("design:type",Object)],e.prototype,"onToggle",void 0);c([Object(r["Output"])(),p("design:type",Object)],e.prototype,"onActiveChanged",void 0);c([Object(r["Output"])(),p("design:type",Object)],e.prototype,"onActivate",void 0);c([Object(r["Output"])(),p("design:type",Object)],e.prototype,"onDeactivate",void 0);c([Object(r["Output"])(),p("design:type",Object)],e.prototype,"onFocus",void 0);c([Object(r["Output"])(),p("design:type",Object)],e.prototype,"onBlur",void 0);c([Object(r["Output"])(),p("design:type",Object)],e.prototype,"onDoubleClick",void 0);c([Object(r["Output"])(),p("design:type",Object)],e.prototype,"onContextMenu",void 0);c([Object(r["HostListener"])("body: keydown",["$event"]),p("design:type",Function),p("design:paramtypes",[Object]),p("design:returntype",void 0)],e.prototype,"onKeydown",null);c([Object(r["HostListener"])("body: mousedown",["$event"]),p("design:type",Function),p("design:paramtypes",[Object]),p("design:returntype",void 0)],e.prototype,"onMousedown",null);e=c([Object(r["Component"])({selector:"app-tree",template:n("./src/packages/file-tree-panel-package/views/tree/tree.component.html"),styles:[n("./src/packages/file-tree-panel-package/views/tree/tree.component.css")]}),p("design:paramtypes",[o["TreeModel"]])],e);return e}();
/***/},
/***/"./src/packages/file-tree-panel-package/views/treenode/treenode.component.css":
/***/function(e,t,n){t=e.exports=n("./node_modules/css-loader/lib/css-base.js")(false);
// imports
// module
t.push([e.i,'.tree-children { padding-left: 20px }\n.node-content-wrapper {\n  display: inline-block;\n  padding: 2px 5px;\n  border-radius: 2px;\n  transition: background-color .15s,box-shadow .15s;\n  white-space: nowrap;\n}\n.tree-node-active > .node-content-wrapper { background: #beebff }\n.tree-node-active.tree-node-focused > .node-content-wrapper { background: rgb(93, 176, 231) }\n.tree-node-focused > .node-content-wrapper { background: #e7f4f9 }\n.node-content-wrapper:hover { background: #f7fbff }\n.tree-node-active > .node-content-wrapper, .tree-node-focused > .node-content-wrapper, .node-content-wrapper:hover { box-shadow: inset 0 0 1px #999; }\n\n.tree-node-expanded  .toggle-children { \n    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\'%3E%3Cpath fill=\'%23646465\' d=\'M11 10H5.344L11 4.414V10z\'/%3E%3C/svg%3E");\n   }\n.tree-node-collapsed .toggle-children { \nbackground-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\'%3E%3Cpath fill=\'%23646465\' d=\'M6 4v8l4-4-4-4zm1 2.414L8.586 8 7 9.586V6.414z\'/%3E%3C/svg%3E");\n}\n.toggle-children {\n    height: 16px;\n    width: 16px;\n    background-size: 16px;\n    display: inline-block;\n    position: relative;\n    background-repeat: no-repeat;\n    background-position: center;\n    right: -6px;\n    top: 4px;\n    overflow: hidden;\n}\n\n.toggle-node-project, .toggle-node-folder, .toggle-node-file {\n    height: 18px;\n    width: 18px;\n    background-size: contain;\n    display: inline-block;\n    position: relative;\n    background-repeat: no-repeat;\n    background-position: center;\n    vertical-align: bottom;\n    background-image: url("data:image/svg+xml,%3Csvg viewBox%3D%220 0 32 32%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath d%3D%22m20.75 2h-16.4v28h23.3v-21zm4.6 25.7h-18.6v-23.4h11.7v7h7v16.4z%22 fill%3D%22%23c5c5c5%22%2F%3E%3C%2Fsvg%3E");\n}\n.toggle-children-placeholder {\n    display: inline-block;\n    height: 10px;\n    width: 10px;\n    position: relative;\n    top: 1px;\n}\n\n.tree-node-icon{\n    width: 1rem;\n}\n\n.node-type-project {\n    background-image: url("data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 16 16%22%3E%3Cstyle%3E.st0%7Bfill%3A%23f6f6f6%7D.st1%7Bfill%3A%23424242%7D.st2%7Bfill%3A%23f0eff1%7D%3C%2Fstyle%3E%3Cpath class%3D%22st0%22 d%3D%22M16 15H0V1h16v14z%22 id%3D%22outline%22%2F%3E%3Cpath class%3D%22st1%22 d%3D%22M1 2v12h14V2H1zm13 11H2V5h12v8zM9 6H3v5h4v1h6V7H9V6zm-2 4H4V8h3v2zm5-1v2H8V9h4z%22 id%3D%22icon_x5F_bg%22%2F%3E%3Cpath class%3D%22st2%22 d%3D%22M4 8h3v2H4V8zm10-3v8H2V5h12zm-1 2H9V6H3v5h4v1h6V7zM8 9v2h4V9H8z%22 id%3D%22icon_x5F_fg%22%2F%3E%3C%2Fsvg%3E");\n}\n\n.node-type-folder {\n    background-image: url("data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 32 32%22%3E%3Ctitle%3Edefault_folder%3C%2Ftitle%3E%3Cpath d%3D%22M27.5%2C5.5H18.2L16.1%2C9.7H4.4V26.5H29.6V5.5Zm0%2C4.2H19.3l1.1-2.1h7.1Z%22 style%3D%22fill%3A%23c09553%22%2F%3E%3C%2Fsvg%3E");\n}\n\n.node-type-file-default {\n    background-image: url("data:image/svg+xml,%3Csvg viewBox%3D%220 0 32 32%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath d%3D%22m20.75 2h-16.4v28h23.3v-21zm4.6 25.7h-18.6v-23.4h11.7v7h7v16.4z%22 fill%3D%22%23c5c5c5%22%2F%3E%3C%2Fsvg%3E");\n}\n\n.node-type-file-ts {\n    background-image: url("data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 32 32%22%3E%3Ctitle%3Efile_type_typescript%3C%2Ftitle%3E%3Cpath d%3D%22M23.827%2C8.243A4.424%2C4.424%2C0%2C0%2C1%2C26.05%2C9.524a5.853%2C5.853%2C0%2C0%2C1%2C.852%2C1.143c.011.045-1.534%2C1.083-2.471%2C1.662-.034.023-.169-.124-.322-.35a2.014%2C2.014%2C0%2C0%2C0-1.67-1c-1.077-.074-1.771.49-1.766%2C1.433a1.3%2C1.3%2C0%2C0%2C0%2C.153.666c.237.49.677.784%2C2.059%2C1.383%2C2.544%2C1.095%2C3.636%2C1.817%2C4.31%2C2.843a5.158%2C5.158%2C0%2C0%2C1%2C.416%2C4.333%2C4.764%2C4.764%2C0%2C0%2C1-3.932%2C2.815%2C10.9%2C10.9%2C0%2C0%2C1-2.708-.028%2C6.531%2C6.531%2C0%2C0%2C1-3.616-1.884%2C6.278%2C6.278%2C0%2C0%2C1-.926-1.371%2C2.655%2C2.655%2C0%2C0%2C1%2C.327-.208c.158-.09.756-.434%2C1.32-.761L19.1%2C19.6l.214.312a4.771%2C4.771%2C0%2C0%2C0%2C1.35%2C1.292%2C3.3%2C3.3%2C0%2C0%2C0%2C3.458-.175%2C1.545%2C1.545%2C0%2C0%2C0%2C.2-1.974c-.276-.395-.84-.727-2.443-1.422a8.8%2C8.8%2C0%2C0%2C1-3.349-2.055%2C4.687%2C4.687%2C0%2C0%2C1-.976-1.777%2C7.116%2C7.116%2C0%2C0%2C1-.062-2.268%2C4.332%2C4.332%2C0%2C0%2C1%2C3.644-3.374A9%2C9%2C0%2C0%2C1%2C23.827%2C8.243ZM15.484%2C9.726l.011%2C1.454h-4.63V24.328H7.6V11.183H2.97V9.755A13.986%2C13.986%2C0%2C0%2C1%2C3.01%2C8.289c.017-.023%2C2.832-.034%2C6.245-.028l6.211.017Z%22 style%3D%22fill%3A%23007acc%22%2F%3E%3C%2Fsvg%3E");\n}\n\n.node-type-file-sln {\n    background-image: url("data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 32 32%22%3E%3Ctitle%3Efile_type_sln%3C%2Ftitle%3E%3Cpolygon points%3D%2223.128 30 11.77 18.955 4.94 24.157 2.333 22.845 2.333 9.175 4.949 7.851 11.786 13.053 23.127 2 29.667 4.618 29.667 27.382 23.128 30%22 style%3D%22fill%3A%23fff%22%2F%3E%3Cpath d%3D%22M28.675%2C5.289%2C23.358%2C3.161%2C11.866%2C14.36%2C4.842%2C9.016l-1.516.767V22.235l1.507.758%2C7.016-5.344%2C11.51%2C11.19%2C5.317-2.128V5.289ZM5.591%2C18.928V13.081l3.252%2C2.9L5.591%2C18.928ZM16%2C15.986l6.495-4.86v9.756l-6.5-4.9H16Z%22 style%3D%22fill%3A%2368217a%22%2F%3E%3C%2Fsvg%3E");\n}\n\n.node-type-file-csproj {\n    background-image: url("data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 32 32%22%3E%3Ctitle%3Efile_type_csproj%3C%2Ftitle%3E%3Cpath d%3D%22M29.821%2C4.321%2C24.023%2C2%2C11.493%2C14.212%2C3.833%2C8.385l-1.654.837V22.8l1.644.827%2C7.65-5.827L24.023%2C30l5.8-2.321V4.321ZM4.65%2C19.192V12.818L8.2%2C15.985ZM16%2C15.985l7.082-5.3V21.324l-7.092-5.339Z%22 style%3D%22fill%3A%2368217a%22%2F%3E%3Cpolygon points%3D%2215.995 15.985 23.077 10.686 23.077 21.324 15.985 15.985 15.995 15.985%22 style%3D%22fill%3A%23fff%22%2F%3E%3Cpolygon points%3D%224.65 19.192 4.65 12.818 8.196 15.985 4.65 19.192%22 style%3D%22fill%3A%23fff%22%2F%3E%3Cpolygon points%3D%2230.089 28.175 21.345 28.174 21.345 26.259 19.43 26.257 19.43 17.516 21.344 17.517 21.342 15.604 30.087 15.604 30.087 17.519 32.001 17.519 31.999 21.346 32 21.346 32 26.261 30.088 26.261 30.089 28.175%22 style%3D%22fill%3A%23efeef0%22%2F%3E%3Cpath d%3D%22M15.527%2C32A7.159%2C7.159%2C0%2C0%2C1%2C10%2C29.758a8.1%2C8.1%2C0%2C0%2C1-2-5.683%2C8.56%2C8.56%2C0%2C0%2C1%2C2.213-6.063A7.608%2C7.608%2C0%2C0%2C1%2C16%2C15.6a9.836%2C9.836%2C0%2C0%2C1%2C3.558.581l.956.372v6.56l-2.3-1.458a3.6%2C3.6%2C0%2C0%2C0-1.989-.544%2C2.117%2C2.117%2C0%2C0%2C0-1.672.662%2C2.957%2C2.957%2C0%2C0%2C0-.658%2C2.091%2C2.877%2C2.877%2C0%2C0%2C0%2C.615%2C2%2C1.9%2C1.9%2C0%2C0%2C0%2C1.562.614%2C3.968%2C3.968%2C0%2C0%2C0%2C2.153-.6l2.292-1.426v6.28l-.815.419A9.144%2C9.144%2C0%2C0%2C1%2C15.527%2C32Z%22 style%3D%22fill%3A%23efeef0%22%2F%3E%3Cpath d%3D%22M22.844%2C17.1h1.915v1.915h1.914V17.1h1.914v1.915H30.5v1.914H28.587v1.913H30.5V24.76H28.587v1.914H26.673V24.762l-1.912%2C0%2C0%2C1.914H22.845V24.761l-1.915%2C0V22.844h1.915V20.935H20.93V19.017h1.915Zm1.915%2C5.744h1.914V20.932H24.759Z%22 style%3D%22fill%3A%23368832%22%2F%3E%3Cpath d%3D%22M19.017%2C29.81a7.65%2C7.65%2C0%2C0%2C1-3.49.686%2C5.7%2C5.7%2C0%2C0%2C1-4.417-1.752A6.629%2C6.629%2C0%2C0%2C1%2C9.5%2C24.076a7.077%2C7.077%2C0%2C0%2C1%2C1.809-5.039A6.136%2C6.136%2C0%2C0%2C1%2C16%2C17.1a8.329%2C8.329%2C0%2C0%2C1%2C3.013.479v2.809a5.108%2C5.108%2C0%2C0%2C0-2.792-.777%2C3.6%2C3.6%2C0%2C0%2C0-2.775%2C1.147%2C4.409%2C4.409%2C0%2C0%2C0-1.055%2C3.107%2C4.331%2C4.331%2C0%2C0%2C0%2C1%2C2.994%2C3.413%2C3.413%2C0%2C0%2C0%2C2.681%2C1.115%2C5.466%2C5.466%2C0%2C0%2C0%2C2.945-.831Z%22 style%3D%22fill%3A%23368832%22%2F%3E%3C%2Fsvg%3E");\n}\n\n.node-type-file-cs {\n    background-image: url("data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 32 32%22%3E%3Ctitle%3Efile_type_csharp%3C%2Ftitle%3E%3Cpath d%3D%22M19.792%2C7.071h2.553V9.624H24.9V7.071h2.552V9.624H30v2.552h-2.55v2.551H30V17.28H27.449v2.552H24.9v-2.55l-2.55%2C0%2C0%2C2.552H19.793v-2.55l-2.553%2C0V14.725h2.553V12.179H17.24V9.622h2.554Zm2.553%2C7.658H24.9V12.176H22.345Z%22 style%3D%22fill%3A%23368832%22%2F%3E%3Cpath d%3D%22M14.689%2C24.013a10.2%2C10.2%2C0%2C0%2C1-4.653.915%2C7.6%2C7.6%2C0%2C0%2C1-5.89-2.336A8.839%2C8.839%2C0%2C0%2C1%2C2%2C16.367%2C9.436%2C9.436%2C0%2C0%2C1%2C4.412%2C9.648a8.181%2C8.181%2C0%2C0%2C1%2C6.259-2.577%2C11.1%2C11.1%2C0%2C0%2C1%2C4.018.638v3.745a6.81%2C6.81%2C0%2C0%2C0-3.723-1.036%2C4.793%2C4.793%2C0%2C0%2C0-3.7%2C1.529%2C5.879%2C5.879%2C0%2C0%2C0-1.407%2C4.142%2C5.774%2C5.774%2C0%2C0%2C0%2C1.328%2C3.992%2C4.551%2C4.551%2C0%2C0%2C0%2C3.575%2C1.487%2C7.288%2C7.288%2C0%2C0%2C0%2C3.927-1.108Z%22 style%3D%22fill%3A%23368832%22%2F%3E%3C%2Fsvg%3E");\n}\n\n.node-type-file-be {\n    background-image: url("data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 32 32%22%3E%3Ctitle%3Efile_type_sql%3C%2Ftitle%3E%3Cpath d%3D%22M8.562%2C15.256A21.159%2C21.159%2C0%2C0%2C0%2C16%2C16.449a21.159%2C21.159%2C0%2C0%2C0%2C7.438-1.194c1.864-.727%2C2.525-1.535%2C2.525-2V9.7a10.357%2C10.357%2C0%2C0%2C1-2.084%2C1.076A22.293%2C22.293%2C0%2C0%2C1%2C16%2C12.078a22.36%2C22.36%2C0%2C0%2C1-7.879-1.3A10.28%2C10.28%2C0%2C0%2C1%2C6.037%2C9.7v3.55C6.037%2C13.724%2C6.7%2C14.528%2C8.562%2C15.256Z%22 style%3D%22fill%3A%23ffda44%22%2F%3E%3Cpath d%3D%22M8.562%2C21.961a15.611%2C15.611%2C0%2C0%2C0%2C2.6.741A24.9%2C24.9%2C0%2C0%2C0%2C16%2C23.155a24.9%2C24.9%2C0%2C0%2C0%2C4.838-.452%2C15.614%2C15.614%2C0%2C0%2C0%2C2.6-.741c1.864-.727%2C2.525-1.535%2C2.525-2v-3.39a10.706%2C10.706%2C0%2C0%2C1-1.692.825A23.49%2C23.49%2C0%2C0%2C1%2C16%2C18.74a23.49%2C23.49%2C0%2C0%2C1-8.271-1.348%2C10.829%2C10.829%2C0%2C0%2C1-1.692-.825V19.96C6.037%2C20.426%2C6.7%2C21.231%2C8.562%2C21.961Z%22 style%3D%22fill%3A%23ffda44%22%2F%3E%3Cpath d%3D%22M16%2C30c5.5%2C0%2C9.963-1.744%2C9.963-3.894V23.269a10.5%2C10.5%2C0%2C0%2C1-1.535.762l-.157.063A23.487%2C23.487%2C0%2C0%2C1%2C16%2C25.445a23.422%2C23.422%2C0%2C0%2C1-8.271-1.351c-.054-.02-.106-.043-.157-.063a10.5%2C10.5%2C0%2C0%2C1-1.535-.762v2.837C6.037%2C28.256%2C10.5%2C30%2C16%2C30Z%22 style%3D%22fill%3A%23ffda44%22%2F%3E%3Cellipse cx%3D%2216%22 cy%3D%225.894%22 rx%3D%229.963%22 ry%3D%223.894%22 style%3D%22fill%3A%23ffda44%22%2F%3E%3C%2Fsvg%3E");\n}\n\n.node-type-file-dbo {\n    background-image: url("data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 32 32%22%3E%3Ctitle%3Efile_type_db%3C%2Ftitle%3E%3Cpath d%3D%22M8.562%2C15.256A21.159%2C21.159%2C0%2C0%2C0%2C16%2C16.449a21.159%2C21.159%2C0%2C0%2C0%2C7.438-1.194c1.864-.727%2C2.525-1.535%2C2.525-2V9.7a10.357%2C10.357%2C0%2C0%2C1-2.084%2C1.076A22.293%2C22.293%2C0%2C0%2C1%2C16%2C12.078a22.36%2C22.36%2C0%2C0%2C1-7.879-1.3A10.28%2C10.28%2C0%2C0%2C1%2C6.037%2C9.7v3.55C6.037%2C13.724%2C6.7%2C14.528%2C8.562%2C15.256Z%22 style%3D%22fill%3A%23c4c7ce%22%2F%3E%3Cpath d%3D%22M8.562%2C21.961a15.611%2C15.611%2C0%2C0%2C0%2C2.6.741A24.9%2C24.9%2C0%2C0%2C0%2C16%2C23.155a24.9%2C24.9%2C0%2C0%2C0%2C4.838-.452%2C15.614%2C15.614%2C0%2C0%2C0%2C2.6-.741c1.864-.727%2C2.525-1.535%2C2.525-2v-3.39a10.706%2C10.706%2C0%2C0%2C1-1.692.825A23.49%2C23.49%2C0%2C0%2C1%2C16%2C18.74a23.49%2C23.49%2C0%2C0%2C1-8.271-1.348%2C10.829%2C10.829%2C0%2C0%2C1-1.692-.825V19.96C6.037%2C20.426%2C6.7%2C21.231%2C8.562%2C21.961Z%22 style%3D%22fill%3A%23c4c7ce%22%2F%3E%3Cpath d%3D%22M16%2C30c5.5%2C0%2C9.963-1.744%2C9.963-3.894V23.269a10.5%2C10.5%2C0%2C0%2C1-1.535.762l-.157.063A23.487%2C23.487%2C0%2C0%2C1%2C16%2C25.445a23.422%2C23.422%2C0%2C0%2C1-8.271-1.351c-.054-.02-.106-.043-.157-.063a10.5%2C10.5%2C0%2C0%2C1-1.535-.762v2.837C6.037%2C28.256%2C10.5%2C30%2C16%2C30Z%22 style%3D%22fill%3A%23c4c7ce%22%2F%3E%3Cellipse cx%3D%2216%22 cy%3D%225.894%22 rx%3D%229.963%22 ry%3D%223.894%22 style%3D%22fill%3A%23c4c7ce%22%2F%3E%3C%2Fsvg%3E");\n}\n\n.node-type-file-cmp {\n    background-image: url("data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 32 32%22%3E%3Ctitle%3Efile_type_csharp%3C%2Ftitle%3E%3Cpath d%3D%22M19.792%2C7.071h2.553V9.624H24.9V7.071h2.552V9.624H30v2.552h-2.55v2.551H30V17.28H27.449v2.552H24.9v-2.55l-2.55%2C0%2C0%2C2.552H19.793v-2.55l-2.553%2C0V14.725h2.553V12.179H17.24V9.622h2.554Zm2.553%2C7.658H24.9V12.176H22.345Z%22 style%3D%22fill%3A%23368832%22%2F%3E%3Cpath d%3D%22M14.689%2C24.013a10.2%2C10.2%2C0%2C0%2C1-4.653.915%2C7.6%2C7.6%2C0%2C0%2C1-5.89-2.336A8.839%2C8.839%2C0%2C0%2C1%2C2%2C16.367%2C9.436%2C9.436%2C0%2C0%2C1%2C4.412%2C9.648a8.181%2C8.181%2C0%2C0%2C1%2C6.259-2.577%2C11.1%2C11.1%2C0%2C0%2C1%2C4.018.638v3.745a6.81%2C6.81%2C0%2C0%2C0-3.723-1.036%2C4.793%2C4.793%2C0%2C0%2C0-3.7%2C1.529%2C5.879%2C5.879%2C0%2C0%2C0-1.407%2C4.142%2C5.774%2C5.774%2C0%2C0%2C0%2C1.328%2C3.992%2C4.551%2C4.551%2C0%2C0%2C0%2C3.575%2C1.487%2C7.288%2C7.288%2C0%2C0%2C0%2C3.927-1.108Z%22 style%3D%22fill%3A%23368832%22%2F%3E%3C%2Fsvg%3E");\n}\n\n.node-type-file-vm {\n    background-image: url("data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 32 32%22%3E%3Ctitle%3Efile_type_light_yaml%3C%2Ftitle%3E%3Cpath d%3D%22M2%2C12.218c.755%2C0%2C1.51-.008%2C2.264%2C0l.053.038Q5.7%2C13.638%2C7.078%2C15.014c.891-.906%2C1.8-1.794%2C2.7-2.7.053-.052.11-.113.192-.1.608%2C0%2C1.215%2C0%2C1.823%2C0a1.4%2C1.4%2C0%2C0%2C1%2C.353.019c-.7.67-1.377%2C1.369-2.069%2C2.05L5.545%2C18.8c-.331.324-.648.663-.989.975-.754.022-1.511.007-2.266.007%2C1.223-1.209%2C2.431-2.433%2C3.658-3.637C4.627%2C14.841%2C3.318%2C13.525%2C2%2C12.218Z%22 style%3D%22fill%3A%23fbc02d%22%2F%3E%3Cpath d%3D%22M12.7%2C12.218c.613%2C0%2C1.226%2C0%2C1.839%2C0q0%2C3.783%2C0%2C7.566c-.611%2C0-1.222.012-1.832-.008%2C0-1.664%2C0-3.329%2C0-4.994-1.6%2C1.607-3.209%2C3.2-4.811%2C4.8-.089.08-.166.217-.305.194-.824-.006-1.649%2C0-2.474%2C0Q8.916%2C16%2C12.7%2C12.218Z%22 style%3D%22fill%3A%23fbc02d%22%2F%3E%3Cpath d%3D%22M14.958%2C12.22c.47-.009.939%2C0%2C1.409%2C0%2C.836.853%2C1.69%2C1.689%2C2.536%2C2.532q1.268-1.267%2C2.539-2.532.7%2C0%2C1.4%2C0-.008%2C3.784%2C0%2C7.567c-.471%2C0-.943.006-1.414%2C0q.008-2.387%2C0-4.773c-.844.843-1.676%2C1.7-2.526%2C2.536-.856-.835-1.687-1.695-2.532-2.541%2C0%2C1.594-.006%2C3.188.006%2C4.781-.472%2C0-.943.005-1.415%2C0Q14.958%2C16%2C14.958%2C12.22Z%22 style%3D%22fill%3A%23fbc02d%22%2F%3E%3Cpath d%3D%22M23.259%2C12.217c.472%2C0%2C.944-.007%2C1.416%2C0q-.007%2C3.083%2C0%2C6.166c1.26%2C0%2C2.521%2C0%2C3.782%2C0%2C.063.006.144-.012.191.045.448.454.907.9%2C1.353%2C1.354q-3.371.007-6.741%2C0Q23.267%2C16%2C23.259%2C12.217Z%22 style%3D%22fill%3A%23fbc02d%22%2F%3E%3C%2Fsvg%3E");\n}\n\n.node-type-file-vo {\n    background-image: url("data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 32 32%22%3E%3Ctitle%3Efile_type_light_yaml%3C%2Ftitle%3E%3Cpath d%3D%22M2%2C12.218c.755%2C0%2C1.51-.008%2C2.264%2C0l.053.038Q5.7%2C13.638%2C7.078%2C15.014c.891-.906%2C1.8-1.794%2C2.7-2.7.053-.052.11-.113.192-.1.608%2C0%2C1.215%2C0%2C1.823%2C0a1.4%2C1.4%2C0%2C0%2C1%2C.353.019c-.7.67-1.377%2C1.369-2.069%2C2.05L5.545%2C18.8c-.331.324-.648.663-.989.975-.754.022-1.511.007-2.266.007%2C1.223-1.209%2C2.431-2.433%2C3.658-3.637C4.627%2C14.841%2C3.318%2C13.525%2C2%2C12.218Z%22 style%3D%22fill%3A%23fbc02d%22%2F%3E%3Cpath d%3D%22M12.7%2C12.218c.613%2C0%2C1.226%2C0%2C1.839%2C0q0%2C3.783%2C0%2C7.566c-.611%2C0-1.222.012-1.832-.008%2C0-1.664%2C0-3.329%2C0-4.994-1.6%2C1.607-3.209%2C3.2-4.811%2C4.8-.089.08-.166.217-.305.194-.824-.006-1.649%2C0-2.474%2C0Q8.916%2C16%2C12.7%2C12.218Z%22 style%3D%22fill%3A%23fbc02d%22%2F%3E%3Cpath d%3D%22M14.958%2C12.22c.47-.009.939%2C0%2C1.409%2C0%2C.836.853%2C1.69%2C1.689%2C2.536%2C2.532q1.268-1.267%2C2.539-2.532.7%2C0%2C1.4%2C0-.008%2C3.784%2C0%2C7.567c-.471%2C0-.943.006-1.414%2C0q.008-2.387%2C0-4.773c-.844.843-1.676%2C1.7-2.526%2C2.536-.856-.835-1.687-1.695-2.532-2.541%2C0%2C1.594-.006%2C3.188.006%2C4.781-.472%2C0-.943.005-1.415%2C0Q14.958%2C16%2C14.958%2C12.22Z%22 style%3D%22fill%3A%23fbc02d%22%2F%3E%3Cpath d%3D%22M23.259%2C12.217c.472%2C0%2C.944-.007%2C1.416%2C0q-.007%2C3.083%2C0%2C6.166c1.26%2C0%2C2.521%2C0%2C3.782%2C0%2C.063.006.144-.012.191.045.448.454.907.9%2C1.353%2C1.354q-3.371.007-6.741%2C0Q23.267%2C16%2C23.259%2C12.217Z%22 style%3D%22fill%3A%23fbc02d%22%2F%3E%3C%2Fsvg%3E");\n}\n\n.node-type-file-api {\n    background-image: url("data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 viewBox%3D%220 0 32 32%22%3E%3Cdefs%3E%3CradialGradient id%3D%22a%22 cx%3D%2222.737%22 cy%3D%2222.737%22 r%3D%223.628%22 gradientTransform%3D%22translate(-4.708 41.626) rotate(-81.5) scale(1 1.071)%22 gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop offset%3D%220%22 stop-color%3D%22%23bedcdc%22%2F%3E%3Cstop offset%3D%220.5%22 stop-color%3D%22%238e9e9e%22 stop-opacity%3D%220.74%22%2F%3E%3Cstop offset%3D%221%22 stop-color%3D%22%23404f5c%22 stop-opacity%3D%220.84%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient id%3D%22b%22 cx%3D%2211.336%22 cy%3D%2211.336%22 r%3D%225.201%22 gradientTransform%3D%22translate(-2.347 20.753) rotate(-81.5) scale(1 1.071)%22 xlink%3Ahref%3D%22%23a%22%2F%3E%3C%2Fdefs%3E%3Ctitle%3Efile_type_bat%3C%2Ftitle%3E%3Cpolygon points%3D%2224.811 27.318 27.215 24.914 28.417 27.318 27.215 28.52 24.811 27.318%22 style%3D%22fill%3Asilver%22%2F%3E%3Cpolygon points%3D%2220.964 27.443 24.365 27.443 23.515 29.993 21.815 29.993 20.964 27.443%22 style%3D%22fill%3Asilver%22%2F%3E%3Cpolygon points%3D%2218.157 24.811 20.561 27.215 18.157 28.417 16.954 27.215 18.157 24.811%22 style%3D%22fill%3Asilver%22%2F%3E%3Cpolygon points%3D%2218.032 20.964 18.032 24.365 15.482 23.515 15.482 21.815 18.032 20.964%22 style%3D%22fill%3Asilver%22%2F%3E%3Cpolygon points%3D%2220.664 18.157 18.26 20.561 17.058 18.157 18.26 16.954 20.664 18.157%22 style%3D%22fill%3Asilver%22%2F%3E%3Cpolygon points%3D%2224.51 18.032 21.11 18.032 21.96 15.482 23.66 15.482 24.51 18.032%22 style%3D%22fill%3Asilver%22%2F%3E%3Cpolygon points%3D%2227.318 20.664 24.914 18.26 27.318 17.058 28.52 18.26 27.318 20.664%22 style%3D%22fill%3Asilver%22%2F%3E%3Cpolygon points%3D%2227.443 24.51 27.443 21.11 29.993 21.96 29.993 23.66 27.443 24.51%22 style%3D%22fill%3Asilver%22%2F%3E%3Cpath d%3D%22M27.776%2C22.737A5.039%2C5.039%2C0%2C1%2C1%2C26.3%2C19.175%2C5.023%2C5.023%2C0%2C0%2C1%2C27.776%2C22.737Zm-5.039-1.9a1.9%2C1.9%2C0%2C1%2C0%2C1.344.557A1.894%2C1.894%2C0%2C0%2C0%2C22.737%2C20.837Z%22 style%3D%22fill%3Asilver%22%2F%3E%3Cpath d%3D%22M22.656%2C18.074A4.664%2C4.664%2C0%2C1%2C0%2C27.4%2C22.656%2C4.664%2C4.664%2C0%2C0%2C0%2C22.656%2C18.074Zm.15%2C8.61a3.947%2C3.947%2C0%2C1%2C1%2C3.877-4.015A3.947%2C3.947%2C0%2C0%2C1%2C22.806%2C26.684Z%22 style%3D%22fill%3A%23a9a9a9%22%2F%3E%3Cpath d%3D%22M22.674%2C19.11a3.628%2C3.628%2C0%2C1%2C0%2C3.69%2C3.564A3.628%2C3.628%2C0%2C0%2C0%2C22.674%2C19.11Zm.1%2C5.7A2.073%2C2.073%2C0%2C1%2C1%2C24.811%2C22.7%2C2.073%2C2.073%2C0%2C0%2C1%2C22.774%2C24.81Z%22 style%3D%22fill%3Aurl(%23a)%22%2F%3E%3Cpath d%3D%22M22.7%2C20.665A2.073%2C2.073%2C0%2C1%2C0%2C24.81%2C22.7%2C2.073%2C2.073%2C0%2C0%2C0%2C22.7%2C20.665Zm.067%2C3.826a1.754%2C1.754%2C0%2C1%2C1%2C1.723-1.784A1.754%2C1.754%2C0%2C0%2C1%2C22.768%2C24.491Z%22 style%3D%22fill%3A%23a9a9a9%22%2F%3E%3Cpolygon points%3D%226.563 16.976 8.838 18.238 7.374 19.806 6.009 19.049 6.563 16.976%22 style%3D%22fill%3Asilver%22%2F%3E%3Cpolygon points%3D%224.382 13.834 5.722 16.064 3.67 16.69 2.866 15.352 4.382 13.834%22 style%3D%22fill%3Asilver%22%2F%3E%3Cpolygon points%3D%224.065 10.023 4.11 12.624 2.02 12.14 1.993 10.579 4.065 10.023%22 style%3D%22fill%3Asilver%22%2F%3E%3Cpolygon points%3D%225.696 6.563 4.434 8.838 2.866 7.374 3.623 6.009 5.696 6.563%22 style%3D%22fill%3Asilver%22%2F%3E%3Cpolygon points%3D%228.838 4.382 6.608 5.722 5.982 3.67 7.32 2.866 8.838 4.382%22 style%3D%22fill%3Asilver%22%2F%3E%3Cpolygon points%3D%2212.65 4.065 10.048 4.11 10.532 2.02 12.093 1.993 12.65 4.065%22 style%3D%22fill%3Asilver%22%2F%3E%3Cpolygon points%3D%2216.109 5.696 13.834 4.434 15.298 2.866 16.663 3.623 16.109 5.696%22 style%3D%22fill%3Asilver%22%2F%3E%3Cpolygon points%3D%2218.29 8.838 16.95 6.608 19.002 5.982 19.806 7.32 18.29 8.838%22 style%3D%22fill%3Asilver%22%2F%3E%3Cpolygon points%3D%2218.607 12.65 18.562 10.048 20.652 10.532 20.679 12.093 18.607 12.65%22 style%3D%22fill%3Asilver%22%2F%3E%3Cpolygon points%3D%2216.976 16.109 18.238 13.834 19.806 15.298 19.049 16.663 16.976 16.109%22 style%3D%22fill%3Asilver%22%2F%3E%3Cpolygon points%3D%2213.834 18.29 16.064 16.95 16.69 19.002 15.352 19.806 13.834 18.29%22 style%3D%22fill%3Asilver%22%2F%3E%3Cpolygon points%3D%2210.023 18.607 12.624 18.562 12.14 20.652 10.579 20.679 10.023 18.607%22 style%3D%22fill%3Asilver%22%2F%3E%3Cpath d%3D%22M11.467%2C18.831a7.5%2C7.5%2C0%2C1%2C1%2C5.261-2.288A7.473%2C7.473%2C0%2C0%2C1%2C11.467%2C18.831Zm2.682-7.544a2.814%2C2.814%2C0%2C1%2C0-.789%2C2A2.8%2C2.8%2C0%2C0%2C0%2C14.149%2C11.287Z%22 style%3D%22fill%3Asilver%22%2F%3E%3Cpath d%3D%22M11.218%2C4.6a6.737%2C6.737%2C0%2C1%2C0%2C6.854%2C6.619A6.737%2C6.737%2C0%2C0%2C0%2C11.218%2C4.6Zm.217%2C12.436a5.7%2C5.7%2C0%2C1%2C1%2C5.6-5.8A5.7%2C5.7%2C0%2C0%2C1%2C11.436%2C17.036Z%22 style%3D%22fill%3A%23a9a9a9%22%2F%3E%3Cpath d%3D%22M11.245%2C6.136a5.2%2C5.2%2C0%2C1%2C0%2C5.29%2C5.109A5.2%2C5.2%2C0%2C0%2C0%2C11.245%2C6.136Zm.14%2C8.036a2.837%2C2.837%2C0%2C1%2C1%2C2.787-2.886A2.837%2C2.837%2C0%2C0%2C1%2C11.386%2C14.172Z%22 style%3D%22fill%3Aurl(%23b)%22%2F%3E%3Cpath d%3D%22M11.282%2C8.227a3.109%2C3.109%2C0%2C1%2C0%2C3.163%2C3.055A3.109%2C3.109%2C0%2C0%2C0%2C11.282%2C8.227Zm.1%2C5.74a2.631%2C2.631%2C0%2C1%2C1%2C2.585-2.677A2.631%2C2.631%2C0%2C0%2C1%2C11.382%2C13.967Z%22 style%3D%22fill%3A%23a9a9a9%22%2F%3E%3C%2Fsvg%3E");\n}\n\n.node-type-file-json {\n    background-image: url("data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 32 32%22%3E%3Ctitle%3Efile_type_json%3C%2Ftitle%3E%3Cpath d%3D%22M4.014%2C14.976a2.51%2C2.51%2C0%2C0%2C0%2C1.567-.518A2.377%2C2.377%2C0%2C0%2C0%2C6.386%2C13.1%2C15.261%2C15.261%2C0%2C0%2C0%2C6.6%2C10.156q.012-2.085.075-2.747a5.236%2C5.236%2C0%2C0%2C1%2C.418-1.686%2C3.025%2C3.025%2C0%2C0%2C1%2C.755-1.018A3.046%2C3.046%2C0%2C0%2C1%2C9%2C4.125%2C6.762%2C6.762%2C0%2C0%2C1%2C10.544%2C4h.7V5.96h-.387a2.338%2C2.338%2C0%2C0%2C0-1.723.468A3.4%2C3.4%2C0%2C0%2C0%2C8.709%2C8.52a36.054%2C36.054%2C0%2C0%2C1-.137%2C4.133%2C4.734%2C4.734%2C0%2C0%2C1-.768%2C2.06A4.567%2C4.567%2C0%2C0%2C1%2C6.1%2C16a3.809%2C3.809%2C0%2C0%2C1%2C1.992%2C1.754%2C8.861%2C8.861%2C0%2C0%2C1%2C.618%2C3.865q0%2C2.435.05%2C2.9A1.755%2C1.755%2C0%2C0%2C0%2C9.264%2C25.7a2.639%2C2.639%2C0%2C0%2C0%2C1.592.337h.387V28h-.7a5.655%2C5.655%2C0%2C0%2C1-1.773-.2%2C2.97%2C2.97%2C0%2C0%2C1-1.324-.93%2C3.353%2C3.353%2C0%2C0%2C1-.681-1.63A24.175%2C24.175%2C0%2C0%2C1%2C6.6%2C22.006%2C16.469%2C16.469%2C0%2C0%2C0%2C6.386%2C18.9a2.408%2C2.408%2C0%2C0%2C0-.805-1.361%2C2.489%2C2.489%2C0%2C0%2C0-1.567-.524Z%22 style%3D%22fill%3A%23f5de19%22%2F%3E%3Cpath d%3D%22M27.986%2C17.011a2.489%2C2.489%2C0%2C0%2C0-1.567.524%2C2.408%2C2.408%2C0%2C0%2C0-.805%2C1.361%2C16.469%2C16.469%2C0%2C0%2C0-.212%2C3.109%2C24.175%2C24.175%2C0%2C0%2C1-.169%2C3.234%2C3.353%2C3.353%2C0%2C0%2C1-.681%2C1.63%2C2.97%2C2.97%2C0%2C0%2C1-1.324.93%2C5.655%2C5.655%2C0%2C0%2C1-1.773.2h-.7V26.04h.387a2.639%2C2.639%2C0%2C0%2C0%2C1.592-.337%2C1.755%2C1.755%2C0%2C0%2C0%2C.506-1.186q.05-.462.05-2.9a8.861%2C8.861%2C0%2C0%2C1%2C.618-3.865A3.809%2C3.809%2C0%2C0%2C1%2C25.9%2C16a4.567%2C4.567%2C0%2C0%2C1-1.7-1.286%2C4.734%2C4.734%2C0%2C0%2C1-.768-2.06%2C36.054%2C36.054%2C0%2C0%2C1-.137-4.133%2C3.4%2C3.4%2C0%2C0%2C0-.425-2.092%2C2.338%2C2.338%2C0%2C0%2C0-1.723-.468h-.387V4h.7A6.762%2C6.762%2C0%2C0%2C1%2C23%2C4.125a3.046%2C3.046%2C0%2C0%2C1%2C1.149.581%2C3.025%2C3.025%2C0%2C0%2C1%2C.755%2C1.018%2C5.236%2C5.236%2C0%2C0%2C1%2C.418%2C1.686q.062.662.075%2C2.747a15.261%2C15.261%2C0%2C0%2C0%2C.212%2C2.947%2C2.377%2C2.377%2C0%2C0%2C0%2C.805%2C1.355%2C2.51%2C2.51%2C0%2C0%2C0%2C1.567.518Z%22 style%3D%22fill%3A%23f5de19%22%2F%3E%3C%2Fsvg%3E");\n}\n\n.node-type-file-webdev {\n    background-image: url("data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 16 16%22%3E%3Cstyle%3E.st0%7Bopacity%3A0%7D.st0%2C.st1%7Bfill%3A%23f6f6f6%7D.st2%7Bfill%3A%230095d7%7D.st3%7Bfill%3A%23424242%7D.st4%7Bfill%3A%23f0eff1%7D%3C%2Fstyle%3E%3Cg id%3D%22outline%22%3E%3Cpath class%3D%22st0%22 d%3D%22M0 0h16v16H0z%22%2F%3E%3Cpath class%3D%22st1%22 d%3D%22M12.023 0H5.964C5.012 0 4 .701 4 2v6.586l-4 4v.828L2.586 16h6.828l2-2h2.551c1.442 0 2.007-1.175 2.035-2V3.552L12.023 0z%22%2F%3E%3C%2Fg%3E%3Cg id%3D%22icon_x5F_bg%22%3E%3Ccircle class%3D%22st2%22 cx%3D%226.042%22 cy%3D%2213%22 r%3D%222%22%2F%3E%3Cpath class%3D%22st3%22 d%3D%22M9 11v1l1 1-1 1v1l2-2-2-2zm-6 4v-1l-1-1 1-1v-1l-2 2 2 2z%22%2F%3E%3Cpath class%3D%22st3%22 d%3D%22M11.641 1H5.964S5 1 5 2v7h1V2h5v3h3v7h-2v1h1.965c1 0 1.035-1 1.035-1V4l-3.359-3z%22%2F%3E%3C%2Fg%3E%3Cpath class%3D%22st4%22 d%3D%22M11 5V2H6v8h2V8.586L11.414 12H14V5z%22 id%3D%22icon_x5F_fg%22%2F%3E%3C%2Fsvg%3E");\n}\n\n.node-type-file-hlp {\n    background-image: url("data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 16 16%22%3E%3Cstyle%3E.icon-vs-out%7Bfill%3A%23f6f6f6%7D.icon-vs-bg%7Bfill%3A%23424242%7D.icon-vs-fg%7Bfill%3A%23f0eff1%7D.icon-vs-action-orange%7Bfill%3A%23c27d1a%7D.st0%7Bfill%3A%23f6f6f6%7D.st1%7Bfill%3A%23f0eff1%7D.st2%7Bfill%3A%23c27d1a%7D%3C%2Fstyle%3E%3Cpath class%3D%22st0%22 d%3D%22M0 0h16v16H0z%22 id%3D%22outline%22%2F%3E%3Cg id%3D%22iconBg%22%3E%3Cpath class%3D%22icon-vs-out%22 d%3D%22M0 0h16v16H0z%22%2F%3E%3Cpath class%3D%22icon-vs-bg%22 d%3D%22M1 1v14h14V1H1zm13 13H2V4h12v10zM7 9H3V8h4v1zm0-3H3V5h4v1z%22%2F%3E%3Cpath class%3D%22st1%22 d%3D%22M9 9h3v1H9z%22%2F%3E%3C%2Fg%3E%3Cg id%3D%22colorImportance%22%3E%3Cpath class%3D%22st2%22 d%3D%22M11 12h2v1h-2z%22%2F%3E%3Cpath class%3D%22icon-vs-action-orange%22 d%3D%22M8 12h2v1H8v-1zm5-7H8v2h5V5zm0 6H8V8h5v3zm-1-2H9v1h3V9z%22%2F%3E%3C%2Fg%3E%3Cpath class%3D%22icon-vs-fg%22 d%3D%22M14 14H2V4h12v10zm-1-9H8v2h5V5zm0 3H8v3h5V8zM7 5H3v1h4V5zm0 3H3v1h4V8zm6 4h-2v1h2v-1zm-3 0H8v1h2v-1z%22 id%3D%22iconFg%22%2F%3E%3C%2Fsvg%3E");\n}\n.node-type-file-wcm {\n    background-image: url("data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 16 16%22%3E%3Cstyle%3E.icon-vs-out%7Bfill%3A%23f6f6f6%7D.icon-vs-bg%7Bfill%3A%23424242%7D.icon-vs-fg%7Bfill%3A%23f0eff1%7D.icon-vs-action-orange%7Bfill%3A%23c27d1a%7D.st0%7Bfill%3A%23f6f6f6%7D.st1%7Bfill%3A%23f0eff1%7D.st2%7Bfill%3A%23c27d1a%7D%3C%2Fstyle%3E%3Cpath class%3D%22st0%22 d%3D%22M0 0h16v16H0z%22 id%3D%22outline%22%2F%3E%3Cg id%3D%22iconBg%22%3E%3Cpath class%3D%22icon-vs-out%22 d%3D%22M0 0h16v16H0z%22%2F%3E%3Cpath class%3D%22icon-vs-bg%22 d%3D%22M1 1v14h14V1H1zm13 13H2V4h12v10zM7 9H3V8h4v1zm0-3H3V5h4v1z%22%2F%3E%3Cpath class%3D%22st1%22 d%3D%22M9 9h3v1H9z%22%2F%3E%3C%2Fg%3E%3Cg id%3D%22colorImportance%22%3E%3Cpath class%3D%22st2%22 d%3D%22M11 12h2v1h-2z%22%2F%3E%3Cpath class%3D%22icon-vs-action-orange%22 d%3D%22M8 12h2v1H8v-1zm5-7H8v2h5V5zm0 6H8V8h5v3zm-1-2H9v1h3V9z%22%2F%3E%3C%2Fg%3E%3Cpath class%3D%22icon-vs-fg%22 d%3D%22M14 14H2V4h12v10zm-1-9H8v2h5V5zm0 3H8v3h5V8zM7 5H3v1h4V5zm0 3H3v1h4V8zm6 4h-2v1h2v-1zm-3 0H8v1h2v-1z%22 id%3D%22iconFg%22%2F%3E%3C%2Fsvg%3E");\n}',""]);
// exports
/*** EXPORTS FROM exports-loader ***/e.exports=e.exports.toString();
/***/},
/***/"./src/packages/file-tree-panel-package/views/treenode/treenode.component.html":
/***/function(e,t){e.exports='<div class="tree-node tree-node-level-{{ node.level }}"\n[class.tree-node-expanded]="node.isExpanded && node.hasChildren"\n[class.tree-node-collapsed]="node.isCollapsed && node.hasChildren"\n[class.tree-node-leaf]="node.isLeaf"\n[class.tree-node-active]="node.isActive"\n[class.tree-node-focused]="node.isFocused">\n\n<span\n  *ngIf="node.hasChildren"\n  class="toggle-children"\n  (click)="node.toggle($event)"\n  >\n</span>\n<span\n  *ngIf="!node.hasChildren"\n  class="toggle-children-placeholder">\n</span>\n\n\x3c!-- 绑定事件对应处理器 --\x3e\n<div class="node-content-wrapper" \n  (click)="node.toggleActivated($event)"\n  (click)="node.toggle($event)"\n  (dblclick)="node.doublClick($event)"\n  (contextmenu)="node.contextMenu($event)"\n  >\n  <div \n    class = "node-type-{{node.fileNodeType}}"\n    [class.toggle-node-project] = "node.isProject"\n    [class.toggle-node-folder] = "node.isFolder"\n    [class.toggle-node-file] = "node.isFile"\n    ></div>\n  \x3c!-- 设置动态组件的锚点 --\x3e\n  <ng-template treeNodeContent-host></ng-template> \n</div>\n\n<div class="tree-children" [hidden]="node.isCollapsed">\n  <app-treenode\n    *ngFor="let child of node.childrenField"\n    [node]="child">\n  </app-treenode>\n</div>\n</div>'
/***/},
/***/"./src/packages/file-tree-panel-package/views/treenode/treenode.component.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"TreenodeComponent",function(){return p});
/* harmony import */var r=n("./node_modules/@angular/core/esm5/core.js");
/* harmony import */var o=n("./src/packages/file-tree-panel-package/models/tree-node.ts");
/* harmony import */var l=n("./src/packages/file-tree-panel-package/directives/tree-node-content.directive.ts");
/* harmony import */var i=n("./src/packages/file-tree-panel-package/models/tree-node-content-item.ts");
/* harmony import */var a=n("./src/packages/file-tree-panel-package/views/tree-node-content/tree-node-content.component.ts");var s=this&&this.__decorate||function(e,t,n,r){var o=arguments.length,l=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")l=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)if(i=e[a])l=(o<3?i(l):o>3?i(t,n,l):i(t,n))||l;return o>3&&l&&Object.defineProperty(t,n,l),l};var c=this&&this.__metadata||function(e,t){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(e,t)};var p=function(){function e(e,t){this.componentFactoryResolver=e}e.prototype.ngOnInit=function(){this._loadTreeNodeContent()};
// 解决使用动态组件出现ExpressionChangedAfterItHasBeenCheckedError问题：
// https://github.com/angular/angular/issues/17572
e.prototype._loadTreeNodeContent=function(){
// 使用Item从逻辑上将TreeNodeContentComponent和data关联起来
// 如何使用自定义StringTemplate还是个问题: 没能解决
var e=new i["TreeNodeContentItem"](a["TreeNodeContentComponent"],this.node.displayField);
// 使用 ComponentFactoryResolver 来为每个具体的组件解析出一个 ComponentFactory
// 然后 ComponentFactory 会为每一个组件创建一个实例
var t=this.componentFactoryResolver.resolveComponentFactory(e.component);var n=this.treeNodeContentHost.viewContainerRef;n.clear();var r=n.createComponent(t);
// 传入数据
r.instance.displayData=e.displayData};s([Object(r["Input"])(),c("design:type",o["TreeNode"])],e.prototype,"node",void 0);s([Object(r["ViewChild"])(l["TreeNodeContentDirective"]),c("design:type",l["TreeNodeContentDirective"])],e.prototype,"treeNodeContentHost",void 0);e=s([Object(r["Component"])({selector:"app-treenode",template:n("./src/packages/file-tree-panel-package/views/treenode/treenode.component.html"),styles:[n("./src/packages/file-tree-panel-package/views/treenode/treenode.component.css")]}),c("design:paramtypes",[r["ComponentFactoryResolver"],r["ViewContainerRef"]])],e);return e}();
/***/}},[]);