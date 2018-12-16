const path = require("path");
const { NamedChunksPlugin, NamedModulesPlugin } = require('webpack');
const { LibChunkPlugin, LibReferencePlugin } = require('@farris/lazy-require');
module.exports = {
  resolve: {
    extensions: [".js", ".ts"]
  },
  entry: {
    angular: [
      './reference/angular/angular.animations.ref.ts',
      './reference/angular/angular.core.ref.ts',
      './reference/angular/angular.common.ref.ts',
      './reference/angular/angular.common.http.ref.ts',
      './reference/angular/angular.form.ref.ts',
      './reference/angular/angular.platform_browser.ref.ts',
      './reference/angular/angular.router.ref.ts'
    ]
  },
  output: {
    path: path.join(process.cwd(), "dist"),
    filename: "[name].chunk.js"
  },
  plugins: [
    new LibChunkPlugin({
      path: path.join(process.cwd(), "dist", "[name]_manifest.json"),
      name: "angular"
    }),
    new LibReferencePlugin({
      buildTarget: 'Lib',
      reference: [
        ['rxjs', 'dist/rxjs_manifest.json']
      ],
      excludes: [
        "./node_modules/webpack/buildin/global.js",
        "./node_modules/tslib/tslib.es6.js"
      ],
      tsConfigPath: "./tsconfig.json",
    }),
    new NamedChunksPlugin(),
    new NamedModulesPlugin()
  ]
};
