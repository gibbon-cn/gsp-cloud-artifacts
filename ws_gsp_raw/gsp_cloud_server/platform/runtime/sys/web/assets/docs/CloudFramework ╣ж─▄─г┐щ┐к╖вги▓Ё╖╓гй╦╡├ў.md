### CloudFramework 功能模块开发（拆分）说明 v0.1

1. 下载 farris-scaffold 脚手架工程。
2. 参照 farris-scaffold 工程下 <u>src/app/modules/full-sales-order</u> 模块，将自己开发的功能模块放入scaffold 工程中。
3. 打开 webpack.config.js 文件，搜索【`app/modules/full-sales-order/full-sales-order.module.ts`】，将此路径替换成自己功能模块的路径。
4. 在scaffold 工程中运行功能模块进行调试。如果无需调试可以直接执行 `npm run build:all`之后进入下一步。 修改 <u>src/app/app.module.js</u> 文件中 **routerMap** 变量，根据自己的模块替换字符串，其中 key 值与下述 routerLink 属性一致， value 值与模块的路径、GSPFunc配置中的路径一致，否则运行期将找不到模块。修改 <u>src/app/app.component.html</u> 文件中 <button> 标签 **routerLink** 属性，按上述的值。执行 `npm run build:all`  ，生成工程依赖的Reference。执行 `npm start` 调试功能模块。
5. 功能模块完成修改调试之后，执行`npm run build:prod`，将dist目录下生成的功能模块的js文件提交到提交目录，不要提交其他公共库及main模块的文件。
6. 如果拆分的功能模块引用了 CloudFramework 下的公共组件，需要暂时将公共组件的代码先复制一份到功能模块中，取消对 CloudFramework 的依赖。
7. 对于提供给各功能模块使用的公共服务，需要放入 npm 包中， Framework 和 功能模块从 npm 包导入之后使用。

