import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AppComponent } from './app.component';
import { GetrouteconfigService } from './service/getrouteconfig/getrouteconfig.service';
import { PolyfillsComponent } from './polyfills/polyfills.component';

declare var lazyRequire: any;

@NgModule({
  declarations: [
    AppComponent,
    PolyfillsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([{path: '', component: PolyfillsComponent}])
  ],
  providers: [GetrouteconfigService],
  bootstrap: [AppComponent]
})
export class AppModule {
  private readonly routerMap: Map<string, string> = new Map<string, string>([
    // ['/salesorder', 'sales-order.module#./src/app/modules/sales-order/sales-order.module.js#SalesOrderModule'],
    // ['/saleorderlist', 'saleorderlist.module#./src/app/modules/saleorderlist/saleorderlist.module.js#SaleOrderListModule']
    // ['/salesorder', 'sales-order.module#./src/app/modules/sales-order/sales-order.module.ngfactory.js#SalesOrderModuleNgFactory'],
    // ['/saleorderlist', 'saleorderlist.module#./src/app/modules/saleorderlist/saleorderlist.module.ngfactory.js#SaleOrderListModuleNgFactory'],
    // ['/actions', 'saleorder.module#./src/app/modules/saleorder/saleorder.module.ngfactory.js#SaleOrderModuleNgFactory']
  ]);

  constructor(private router: Router, private s: GetrouteconfigService) {
    // 截获路由事件
    router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe((event: NavigationStart) => {
      // 读取当前路由Url地址
      const routerUrl = event.url;
      // 判断是否拦截当前路由
      if (window.hasOwnProperty('route_config') && window['route_config'][event.url]) { // this.routerMap.has(routerUrl)
        // 读取异步路由资源模块url地址
        const moduleUrl = window['route_config'][event.url]; // this.routerMap.get(routerUrl);
        // 截取导航路径，导航路径为url地址去掉第一个字符'/'
        const navigationPath = routerUrl.substr(1, routerUrl.length - 1);
        // 读取顶级路由配置对象集合
        const routerConfigs = this.router.config;
        // 如果未配置此url地址路由，则创建异步路由配置，并记录到路由配置集合
        if (!routerConfigs.find(routerConfig => routerConfig.path === navigationPath)) {
          routerConfigs.push({
            path: navigationPath,
            // 定义异步路由方法，调用loadModule加载异步路由模块。
            loadChildren: () => this.loadModule(moduleUrl)
          });
          // 重置路由配置
          this.router.resetConfig(routerConfigs);
        }
      }
    });
  }
  /**
   * 加载异步路由模块
   * @param url 异步路由资源模块url地址
   */
  loadModule(url: string) {
    // 截取异步路由资源模块url地址，获取模块加载信息。
    // tslint:disable-next-line:prefer-const
    let [moduleName, moduleKey, exportName] = url.split('#');
    // 如果未指定导出模块，默认使用default。
    if (exportName === undefined) {
      exportName = 'default';
    }
    // 异步加载资源模块
    return lazyRequire(url)
      .then((module: any) => {
        return module[exportName];
      })
      .then((type: any) => {
        if (!type) {
          throw new Error(`Cannot find '${exportName}' in '${moduleName}'`);
        }
        return type;
      });
  }
}

