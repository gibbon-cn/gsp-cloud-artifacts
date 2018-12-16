webpackJsonp(["ssologin.module","login.module"],{
/***/"./src/app/login/component/login/login.component.css":
/***/function(e,t,n){t=e.exports=n("./node_modules/css-loader/lib/css-base.js")(false);
// imports
// module
t.push([e.i,'.login-logo-name {\r\n    /* color: #e6e6e6; */\r\n    font-size: 140px;\r\n    font-weight: 800;\r\n    letter-spacing: -10px;\r\n}\r\n.middle-box  {\r\n    width: 300px;\r\n    max-width: 400px;\r\n    z-index: 100;\r\n    margin: 0 auto;\r\n    padding-top: 40px;\r\n}\r\n\r\n.more-sign h6 {\r\n    position: relative;\r\n    margin: 0 0 10px;\r\n    font-size: 16px;\r\n    color: #b5b5b5;\r\n    text-align: center;\r\n    line-height: 24px;\r\n}\r\n\r\n.more-sign h6:before {\r\n    left: 30px\r\n}\r\n\r\n.more-sign h6:after,.more-sign h6:before {\r\n    content: "";\r\n    border-top: 1px solid #b5b5b5;\r\n    display: block;\r\n    position: absolute;\r\n    width: 80px;\r\n    top: 10px;\r\n}\r\n.auth-login-area{\r\n  border:1px solid #ddd;\r\n}\r\n\r\n\r\n',""]);
// exports
/*** EXPORTS FROM exports-loader ***/e.exports=e.exports.toString();
/***/},
/***/"./src/app/login/component/login/login.component.html":
/***/function(e,t){e.exports='<div class="auth-form-container">\r\n  <div class="row m-0">\r\n    <div class="col-12 col-md-6 p-0 d-flex login-log-container">\r\n      <div class="login-logo align-self-center position-relative">\r\n        <h1  [ngClass]=\'{"logo-en":languageType=="en"}\'>{{languageText[languageType]["logoText"]}}</h1>\r\n        </div>\r\n    </div>\r\n    <div class="col-12 col-md-6 p-0">\r\n      <section class=" login-section">\r\n          <form class="login-form" action="#" [formGroup]="myForm">  \r\n           <h2>{{languageText[languageType]["loginText"]}}</h2>\r\n              <div class="login-lg-area">\r\n                <span class="login-lg-text mr-2">Language / 语言</span>\r\n                <div class="btn-group login-lg-dropdown">\r\n                    <button type="button" class="btn p-0 m-0 bg-transparent dropdown-toggle" (click)=\'languageDropdown=true;\'>\r\n                      <span class="login-lg" [ngClass]=\'{"lg-zh-cn":languageType=="zh-CHS","lg-en":languageType=="en"}\'></span>\r\n                    </button>\r\n                    <div class="dropdown-menu p-1" [ngClass]=\'{"d-block":languageDropdown}\' (mouseleave)=\'languageDropdown=false;\'>\r\n                      <a class="dropdown-item border-bottom px-3" (click)=\'changeLanguage("zh-CHS")\'>\r\n                          <span class="login-lg lg-zh-cn align-middle mr-2"></span>中文\r\n                      </a>\r\n                      <a class="dropdown-item px-3" (click)=\'changeLanguage("en")\'>\r\n                          <span class="login-lg lg-en align-middle mr-2"></span>EngLish\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n              </div>\r\n              <select class="custom-select w-100" formControlName="Tenant" [(ngModel)] = \'curtTenantId\'>\r\n                  <option *ngFor="let item of tenants" [value]="item.id">{{item.name}}</option>\r\n              </select> \r\n              <input type="text" class="form-control" placeholder=\'{{languageText[languageType]["nameRemind"]}}\' autocomplete="off" required   id="userName" name="userName" [formControl]="myForm.get(\'userName\')" />\r\n              <input type="password" class="form-control" placeholder=\'{{languageText[languageType]["passwordRemind"]}}\' autocomplete="off" required   id="passWord" name="passWord" [formControl]="myForm.get(\'passWord\')" />       \r\n              <div class="clearfix">\r\n                  <div class="form-check float-left remember-info">\r\n                      <input class="form-check-input" type="checkbox" value="" id="rememberInfo">\r\n                      <label class="form-check-label p-0" for="rememberInfo">{{languageText[languageType]["rememberInfo"]}}</label>\r\n                    </div>\r\n                  <a class="float-right">{{languageText[languageType]["recoverPassword"]}}</a>\r\n              </div>\r\n              \r\n              <div class="form-actions">\r\n                <button type="button" class="btn btn-login block w-100" (click)="handleLogin()">{{languageText[languageType]["loginBtn"]}}</button>              \r\n                <p class="text-center btn-regist">\r\n                    <a href="">{{languageText[languageType]["regist"]}}</a>\r\n                </p>\r\n                <label>------------------ {{languageText[languageType]["inspurId"]}}------------------</label>\r\n                <p class="text-center btn-regist">\r\n                  <a href="{{redirectUri}}">\r\n                    <img src="assets/img/InspurId.png" width="32" height="32">\r\n                  </a>\r\n                </p>\r\n                <div  *ngIf="errorMessage" class="alert alert-warning p-1  login-tips">\r\n                   {{languageText[languageType]["errorRemind"]}}\r\n                </div>\r\n                \r\n              </div>\r\n            </form>\r\n      </section>\r\n    </div>\r\n  </div>\r\n</div>\r\n'
/***/},
/***/"./src/app/login/component/login/login.component.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"LoginComponent",function(){return c});
/* harmony import */var o=n("./node_modules/@angular/core/esm5/core.js");
/* harmony import */var r=n("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */var i=n("./src/app/login/services/auth.service.ts");var s=this&&this.__decorate||function(e,t,n,o){var r=arguments.length,i=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)if(s=e[a])i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i;return r>3&&i&&Object.defineProperty(t,n,i),i};var a=this&&this.__metadata||function(e,t){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(e,t)};var c=function(){function e(e,t){this.fb=e;
// 是否显示下拉
this.languageDropdown=false;this.languageType="zh-CHS";this.languageText={"zh-CHS":{logoText:"企业数字化创新云平台",loginText:"登录",loginBtn:"登录",rememberInfo:"记录登录信息",recoverPassword:"找回密码",nameRemind:"请输入用户或者邮箱",passwordRemind:"请输入密码",regist:"注册",errorRemind:"用户名或密码错误",tenantlst:["浪潮集团","鲁能集团","铁塔公司"],inspurId:"合作网站账号登录",domainPath:"请输入域名"},en:{logoText:"Cloud Platform for Digtal Business",loginText:"Log On",loginBtn:"Logon",rememberInfo:"Remember me",recoverPassword:"Forget password?",nameRemind:"User Name or Email",passwordRemind:"Password",regist:"Register",errorRemind:"Wrong user name or password",tenantlst:["Inspur","luneng","tieta"],inspurId:"Partner Website Login",domainPath:"DomainPath"}};this.submitted=new o["EventEmitter"];this.myForm=this.fb.group({language:["zh-CHS",r["Validators"].required],userName:["",r["Validators"].required],passWord:["",r["Validators"].required],Tenant:[this.curtTenantId,r["Validators"].required]});this.authenService=t}Object.defineProperty(e.prototype,"pending",{set:function(e){if(typeof e==="boolean"&&e===true){this.myForm.disable()}else{this.myForm.enable()}},enumerable:true,configurable:true});e.prototype.ngOnInit=function(){var e=this;this.authenService.GetSupportedLanguage().subscribe(function(t){e.languages=t;e.curLanguage=e.languages.find(function(e){return e.code==="zh-CHS"});console.log("languages ="+t)});this.authenService.GetTenantList().subscribe(function(t){e.tenants=t;console.log("tenant ="+t);e.curTenant=e.tenants[0];e.curtTenantId=e.curTenant["id"]});this.authenService.GetClientSecurity().subscribe(function(t){e.clientId=t.ClientId;var n=window.location.host;e.redirectUri="https://id.inspuronline.com/oauth2.0/authorize?response_type=code\n        &client_id=' + this.clientId + '&redirect_uri=http://' + uri + '/api/runtime/sys/v1.0/Authentication/InspurIdClient";console.log(t)});
// this.tenants = this.languageText[this.languageType]['tenantlst'];
// this.curTenant = this.tenants[0];
};e.prototype.handleLogin=function(){this.myForm.value.language=this.curLanguage["code"];if(this.myForm.valid){this.submitted.emit(this.myForm.value)}};e.prototype.test=function(){console.log("mouseout")};e.prototype.changeLanguage=function(e){switch(e){case"zh-CHS":this.curLanguage=this.languages.find(function(e){return e["code"]==="zh-CHS"});break;case"en":this.curLanguage=this.languages.find(function(e){return e["code"]==="en"});break}this.changeTenant(this.curLanguage["code"]);this.myForm.value.language=this.curLanguage["code"];this.languageType=e;this.languageDropdown=false};e.prototype.changeTenant=function(e){var t=this;this.authenService.Geti18nTenant(e).subscribe(function(e){t.tenants=e;console.log("tenant ="+e);t.curTenant=t.tenants[0];t.curtTenantId=t.curTenant["id"]})};s([Object(o["Input"])(),a("design:type",Boolean),a("design:paramtypes",[Boolean])],e.prototype,"pending",null);s([Object(o["Input"])(),a("design:type",Object)],e.prototype,"errorMessage",void 0);s([Object(o["Output"])(),a("design:type",Object)],e.prototype,"submitted",void 0);e=s([Object(o["Component"])({selector:"app-login",template:n("./src/app/login/component/login/login.component.html"),styles:[n("./src/app/login/component/login/login.component.css")]}),a("design:paramtypes",[r["FormBuilder"],i["AuthService"]])],e);return e}();
/***/},
/***/"./src/app/login/containers/login/login.container.component.css":
/***/function(e,t,n){t=e.exports=n("./node_modules/css-loader/lib/css-base.js")(false);
// imports
// module
t.push([e.i,"",""]);
// exports
/*** EXPORTS FROM exports-loader ***/e.exports=e.exports.toString();
/***/},
/***/"./src/app/login/containers/login/login.container.component.html":
/***/function(e,t){e.exports='<app-login\r\n  (submitted)="onSubmit($event)"\r\n  [pending]="pending"\r\n  [errorMessage]="error">\r\n</app-login>\r\n'
/***/},
/***/"./src/app/login/containers/login/login.container.component.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"LoginContainerComponent",function(){return c});
/* harmony import */var o=n("./node_modules/@angular/core/esm5/core.js");
/* harmony import */var r=n("./src/app/login/services/auth.service.ts");
/* harmony import */var i=n("./node_modules/@angular/router/esm5/router.js");var s=this&&this.__decorate||function(e,t,n,o){var r=arguments.length,i=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)if(s=e[a])i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i;return r>3&&i&&Object.defineProperty(t,n,i),i};var a=this&&this.__metadata||function(e,t){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(e,t)};var c=function(){function e(e,t){this.auth=e;this.router=t;this.outputValue=new o["EventEmitter"]}e.prototype.ngOnInit=function(){};e.prototype.onSubmit=function(e){var t=this;this.pending=true;this.error=null;this.auth.Login(e).subscribe(function(e){if(e){t.outputValue.emit(true);t.router.navigate(["home"])}},function(e){t.pending=false;t.error=e;t.router.navigate(["/login"])})};s([Object(o["Output"])(),a("design:type",Object)],e.prototype,"outputValue",void 0);e=s([Object(o["Component"])({selector:"app-login-container",template:n("./src/app/login/containers/login/login.container.component.html"),styles:[n("./src/app/login/containers/login/login.container.component.css")]}),a("design:paramtypes",[r["AuthService"],i["Router"]])],e);return e}();
/***/},
/***/"./src/app/login/login.module.ts":
/***/function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});
/* harmony export (binding) */n.d(t,"LoginModule",function(){return d});
/* harmony import */var o=n("./node_modules/@angular/core/esm5/core.js");
/* harmony import */var r=n("./node_modules/@angular/common/esm5/common.js");
/* harmony import */var i=n("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */var s=n("./src/app/login/component/login/login.component.ts");
/* harmony import */var a=n("./src/app/login/containers/login/login.container.component.ts");
/* harmony import */var c=n("./src/app/login/login.route.ts");
/* harmony import */var l=n("./src/app/login/services/auth.service.ts");
/* harmony import */var u=n("./node_modules/@angular/common/esm5/http.js");
/* harmony import */var p=n("./src/app/login/services/http.service.ts");var g=this&&this.__decorate||function(e,t,n,o){var r=arguments.length,i=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)if(s=e[a])i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i;return r>3&&i&&Object.defineProperty(t,n,i),i};var d=function(){function e(){}t=e;e.forRoot=function(){return{ngModule:t,providers:[l["AuthService"],p["HttpService"]]}};e=t=g([Object(o["NgModule"])({imports:[r["CommonModule"],i["FormsModule"],i["ReactiveFormsModule"],c["LoginRootingModule"],u["HttpClientModule"]],declarations:[s["LoginComponent"],a["LoginContainerComponent"]],exports:[a["LoginContainerComponent"]],providers:[l["AuthService"],p["HttpService"]]})],e);return e;var t}();
/***/},
/***/"./src/app/login/login.route.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"LoginRootingModule",function(){return c});
/* harmony import */var o=n("./node_modules/@angular/core/esm5/core.js");
/* harmony import */var r=n("./node_modules/@angular/router/esm5/router.js");
/* harmony import */var i=n("./src/app/login/containers/login/login.container.component.ts");var s=this&&this.__decorate||function(e,t,n,o){var r=arguments.length,i=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)if(s=e[a])i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i;return r>3&&i&&Object.defineProperty(t,n,i),i};var a=[{path:"",component:i["LoginContainerComponent"]}];var c=function(){function e(){}e=s([Object(o["NgModule"])({imports:[r["RouterModule"].forChild(a)],exports:[r["RouterModule"]]})],e);return e}();
/***/},
/***/"./src/app/login/services/auth.service.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"AuthService",function(){return h});
/* harmony import */var o=n("./node_modules/@angular/core/esm5/core.js");
/* harmony import */var r=n("./node_modules/rxjs/observable/of.js");
/* harmony import */var i=n.n(r);
/* harmony import */var s=n("./node_modules/rxjs/operators.js");
/* harmony import */var a=n.n(s);
/* harmony import */var c=n("./src/environments/environment.ts");
/* harmony import */var l=n("./node_modules/rxjs/add/operator/map.js");
/* harmony import */var u=n.n(l);
/* harmony import */var p=n("./src/app/login/services/http.service.ts");
/* harmony import */var g=n("./node_modules/@farris/ide-devkit/services/index.js");
/* harmony import */var d=n.n(g);var f=this&&this.__decorate||function(e,t,n,o){var r=arguments.length,i=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)if(s=e[a])i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i;return r>3&&i&&Object.defineProperty(t,n,i),i};var m=this&&this.__metadata||function(e,t){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(e,t)};var h=function(){function e(e,t){this.http=e;this.cache=t;this.API_PATH="/api/runtime/sys/v1.0/Authentication/inspurId";this.Api_Language="/api/runtime/sys/v1.0/login-infos?infoType=supportedLanguage";this.Api_Token="/api/runtime/sys/v1.0/login-states/ExternalLoginWithToken";this.Api_UserLogin="/api/runtime/sys/v1.0/login-states/UserLogin";this.Api_TenantList="/api/runtime/sys/v1.0/login-infos?infoType=tenants";this.Api_AutehTypeList="/api/runtime/sys/v1.0/login-infos?infoType=authenTypes";this.Api_ClientSecurity="/api/runtime/sys/v1.0/Authentication/InspurIDInfo";this.Api_i18nTenant="/api/runtime/sys/v1.0/login-infos?infoType=i18nTenants";if(!c["environment"].production){this.API_PATH="http://localhost:5000/api/runtime/sys/v1.0/login-states/ExternalLogin";this.Api_UserLogin="http://localhost:5000/api/runtime/sys/v1.0/login-states/UserLogin";this.API_PATH="http://localhost:5000/api/runtime/sys/v1.0/Authentication/inspurId";//认证登录分离模式
this.Api_Language="http://localhost:5000/api/runtime/sys/v1.0/login-infos?infoType=supportedLanguage";this.Api_Token="http://localhost:5000/api/runtime/sys/v1.0/login-states/ExternalLoginWithToken";this.Api_TenantList="http://localhost:5000/api/runtime/sys/v1.0/login-infos?infoType=tenants";this.Api_AutehTypeList="http://localhost:5000/api/runtime/sys/v1.0/login-infos?infoType=authenTypes";this.Api_ClientSecurity="http://localhost:5000/api/runtime/sys/v1.0/Authentication/InspurIDInfo";this.Api_i18nTenant="http://localhost:5000/api/runtime/sys/v1.0/login-infos?infoType=i18nTenants"}}
//二级域名不跳转的登录模式
e.prototype.Login=function(e){var t=this;
// 也可以根据环境变量，再开发环境下获取本地的JSON,跳过验证
return this.http.post(this.Api_UserLogin,e).pipe(Object(s["exhaustMap"])(function(e){t.cache.set("sessionId",e["sessionId"]);t.cache.set("languageCode",e["lanCode"]);return Object(r["of"])(true);
//.catch(error => of(error));
}))};e.prototype.LoginWithToken=function(){return Object(r["of"])(true)};e.prototype.GetSupportedLanguage=function(){return this.http.get(this.Api_Language)};e.prototype.GetTenantList=function(){return this.http.get(this.Api_TenantList)};e.prototype.GetAuthenTypeList=function(){return this.http.get(this.Api_AutehTypeList)};e.prototype.GetClientSecurity=function(){return this.http.get(this.Api_ClientSecurity)};e.prototype.Geti18nTenant=function(e){var t=this.Api_i18nTenant+"&&languagecode="+e;return this.http.get(t)};e=f([Object(o["Injectable"])(),m("design:paramtypes",[p["HttpService"],g["CacheService"]])],e);return e}();
/***/},
/***/"./src/app/login/services/http.service.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"HttpService",function(){return p});
/* harmony import */var o=n("./node_modules/@angular/core/esm5/core.js");
/* harmony import */var r=n("./node_modules/@angular/common/esm5/http.js");
/* harmony import */var i=n("./node_modules/@farris/ide-devkit/services/index.js");
/* harmony import */var s=n.n(i);
/* harmony import */var a=n("./node_modules/rxjs/operators.js");
/* harmony import */var c=n.n(a);var l=this&&this.__decorate||function(e,t,n,o){var r=arguments.length,i=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)if(s=e[a])i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i;return r>3&&i&&Object.defineProperty(t,n,i),i};var u=this&&this.__metadata||function(e,t){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(e,t)};var p=function(){function e(e,t){this.http=e;this.cache=t}e.prototype.get=function(e){return this.request("Get",e,this.setHeader({}))};e.prototype.post=function(e,t){return this.request("Post",e,this.setHeader({body:t}))};e.prototype.put=function(e,t){return this.request("Put",e,this.setHeader({body:t}))};e.prototype.delete=function(e,t){return this.request("Delete",e,this.setHeader({body:t}))};e.prototype.patch=function(e,t){return this.request("Patch",e,this.setHeader({body:t}))};e.prototype.setHeader=function(e){e.headers={"Content-Type":"application/json","Access-Control-Allow-Origin":"*"};if(this.cache.exists("session")&&this.cache.get("session")){e.headers["SessionId"]=this.cache.get("session")}return e};e.prototype.request=function(e,t,n){if(n.body){if(typeof n.body!=="string"){n.body=JSON.stringify(n.body)}}return this.http.request(e,t,n).pipe(Object(a["map"])(function(e){console.log(e);return e}))};e=l([Object(o["Injectable"])(),u("design:paramtypes",[r["HttpClient"],i["CacheService"]])],e);return e}();
/***/},
/***/"./src/app/ssologin/component/ssologin/ssologin.component.css":
/***/function(e,t,n){t=e.exports=n("./node_modules/css-loader/lib/css-base.js")(false);
// imports
// module
t.push([e.i,"",""]);
// exports
/*** EXPORTS FROM exports-loader ***/e.exports=e.exports.toString();
/***/},
/***/"./src/app/ssologin/component/ssologin/ssologin.component.html":
/***/function(e,t){e.exports="<p>\r\n  正在登录请稍候......\r\n</p>\r\n"
/***/},
/***/"./src/app/ssologin/component/ssologin/ssologin.component.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"SsologinComponent",function(){return u});
/* harmony import */var o=n("./node_modules/@angular/core/esm5/core.js");
/* harmony import */var r=n("./node_modules/@angular/router/esm5/router.js");
/* harmony import */var i=n("./src/app/login/services/auth.service.ts");
/* harmony import */var s=n("./node_modules/@farris/ide-devkit/services/index.js");
/* harmony import */var a=n.n(s);var c=this&&this.__decorate||function(e,t,n,o){var r=arguments.length,i=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)if(s=e[a])i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i;return r>3&&i&&Object.defineProperty(t,n,i),i};var l=this&&this.__metadata||function(e,t){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(e,t)};var u=function(){function e(e,t,n,o){this.auth=e;this.router=t;this.cache=n;this.route=o}e.prototype.ngOnInit=function(){var e=this;
//单点过来以查询参数的形式获取
this.route.queryParamMap.subscribe(function(t){if(t.has("ssid")){e.ssid=t.get("ssid");e.cache.set("sessionId",e.ssid);e.auth.LoginWithToken().subscribe(function(t){if(t){e.router.navigate(["home"])}},function(e){})}else{e.router.navigate(["login"])}})};e=c([Object(o["Component"])({selector:"app-ssologin",template:n("./src/app/ssologin/component/ssologin/ssologin.component.html"),styles:[n("./src/app/ssologin/component/ssologin/ssologin.component.css")]}),l("design:paramtypes",[i["AuthService"],r["Router"],s["CacheService"],r["ActivatedRoute"]])],e);return e}();
/***/},
/***/"./src/app/ssologin/ssologin.module.ts":
/***/function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});
/* harmony export (binding) */n.d(t,"SsologinModule",function(){return l});
/* harmony import */var o=n("./node_modules/@angular/core/esm5/core.js");
/* harmony import */var r=n("./node_modules/@angular/common/esm5/common.js");
/* harmony import */var i=n("./src/app/ssologin/component/ssologin/ssologin.component.ts");
/* harmony import */var s=n("./src/app/ssologin/ssoroute.module.ts");
/* harmony import */var a=n("./src/app/login/login.module.ts");var c=this&&this.__decorate||function(e,t,n,o){var r=arguments.length,i=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)if(s=e[a])i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i;return r>3&&i&&Object.defineProperty(t,n,i),i};var l=function(){function e(){}e=c([Object(o["NgModule"])({imports:[r["CommonModule"],s["SsorouteModule"],a["LoginModule"].forRoot()],declarations:[i["SsologinComponent"]]})],e);return e}();
/***/},
/***/"./src/app/ssologin/ssoroute.module.ts":
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"SsorouteModule",function(){return c});
/* harmony import */var o=n("./node_modules/@angular/core/esm5/core.js");
/* harmony import */var r=n("./node_modules/@angular/router/esm5/router.js");
/* harmony import */var i=n("./src/app/ssologin/component/ssologin/ssologin.component.ts");var s=this&&this.__decorate||function(e,t,n,o){var r=arguments.length,i=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)if(s=e[a])i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i;return r>3&&i&&Object.defineProperty(t,n,i),i};var a=[{path:"token/:id",component:i["SsologinComponent"]},{path:"",component:i["SsologinComponent"]}];var c=function(){function e(){}e=s([Object(o["NgModule"])({imports:[r["RouterModule"].forChild(a)],exports:[r["RouterModule"]]})],e);return e}();
/***/}},["rxjs"]);