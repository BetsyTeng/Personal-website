process.env.NODE_ENV = "development";

const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const config = require("./index");
const baseConfig = require("./webpack.base");
const path = require("path");
// require('babel-register');

const { host, port } = config.server;
const webpackConfigDev = {
  ...baseConfig,
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  entry: [
    `webpack-hot-middleware/client?path=http://${host}:${port}`,
    `${config.client}/index.js`
  ],
  output: {
    ...baseConfig.output
  },
  devServer: {
    contentBase: config.client,
    historyApiFallback: true,
    hot: false, //关闭热点
    inline: true, //开启页面刷新
    host: host,
    port: port
  },
  plugins: [
    // “If you are using the CLI, the webpack process will not exit with an error code by enabling this plugin.”
    // https://github.com/webpack/docs/wiki/list-of-plugins#noerrorsplugin
    new webpack.NoEmitOnErrorsPlugin(),
    // https://webpack.github.io/docs/hot-module-replacement-with-webpack.html
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      title: "index",
      template: `${config.client}/index.html`,
      filename: `${config.dist}/index.html`,
      // inject: 'body',
      // chunks:['main','vendor'],
      chunksSortMode: "dependency"
    }),
    // // NODE_ENV should be production so that modules do not perform certain development checks
    new webpack.DefinePlugin({
      //定义环境变量为开发环境
      "process.env.NODE_ENV": JSON.stringify("development")
    })
  ]
  // https://github.com/chentsulin/webpack-target-electron-renderer#how-this-module-works
};

module.exports = webpackConfigDev;
