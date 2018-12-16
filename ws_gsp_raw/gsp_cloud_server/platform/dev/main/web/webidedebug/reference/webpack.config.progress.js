const path = require("path");
const { NamedChunksPlugin, NamedModulesPlugin } = require('webpack');
const { LibChunkPlugin, LibReferencePlugin } = require('@farris/lazy-require');
module.exports = {
  resolve: {
    extensions: [".js", ".ts"]
  },
  entry: {
    progress: [
      "./reference/progress/kendo.ref",
      "./reference/progress/progress.button.ref",
      "./reference/progress/progress.data.ref",
      "./reference/progress/progress.datainputs.ref",
      "./reference/progress/progress.drawing.ref",
      "./reference/progress/progress.dropdowns.ref",
      "./reference/progress/progress.excel.export.ref",
      "./reference/progress/progress.file.saver.ref",
      "./reference/progress/progress.grid.ref",
      "./reference/progress/progress.inputs.ref",
      "./reference/progress/progress.intl.ref",
      "./reference/progress/progress.l10n.ref",
      "./reference/progress/progress.layout.ref",
      "./reference/progress/progress.ooxml.ref",
      "./reference/progress/progress.pdf.export.ref",
      "./reference/progress/progress.popup.common.ref",
      "./reference/progress/progress.popup.ref",
      "./reference/progress/progress.resize.sensor.ref"
    ]
  },
  output: {
    path: path.join(process.cwd(), "dist"),
    filename: "[name].chunk.js"
  },
  plugins: [
    new LibChunkPlugin({
      path: path.join(process.cwd(), "dist", "[name]_manifest.json"),
      name: "progress"
    }),
    new LibReferencePlugin({
      buildTarget: 'Lib',
      reference: [
        ['rxjs', 'dist/rxjs_manifest.json'],
        ['angular', 'dist/angular_manifest.json']
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
