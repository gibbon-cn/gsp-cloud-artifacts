const path = require("path");
const { NamedChunksPlugin, NamedModulesPlugin } = require('webpack');
const { LibChunkPlugin, LibReferencePlugin } = require('@farris/lazy-require');
module.exports = {
  resolve: {
    extensions: [".js", ".ts"]
  },
  entry: {
    rxjs: ['./reference/rxjs/rxjs.ref.ts']
  },
  output: {
    path: path.join(process.cwd(), "dist"),
    filename: "[name].chunk.js"
  },
  plugins: [
    new LibChunkPlugin({
      path: path.join(process.cwd(), "dist", "[name]_manifest.json"),
      name: "rxjs"
    }),
    new LibReferencePlugin({
      buildTarget: 'Lib',
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
