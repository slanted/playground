const path = require('path');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {
  entry: "./src/index", // string | object | array
  // Here the application starts executing
  // and webpack starts bundling
  devtool:'source-map',
  output: {
    // options related to how webpack emits results

    path: path.resolve(__dirname, "dist"), // string
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)

    filename: "bundle.js" // string
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules\/(?!(@polymer)\/).*/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }]
  },
    resolve: {
        symlinks: false,
        modules: [path.resolve('node_modules')],
    },
    plugins: [new BundleAnalyzerPlugin({
        analyzerPort: 9999
    })]
}
