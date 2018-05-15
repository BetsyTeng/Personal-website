// ,
// plugins:[
//     new webpack.optimize.CommonsChunkPlugin({
//         name: 'vendor', // Specify the common bundle's name.
//         minChunks: Infinity,//为Infinity 仅仅创建公共组件块，不会把任何modules打包进去。
//     }),
// ]
// import webpack from 'webpack';
// import config from './index';
// import baseConfig from './webpack.config.base';

const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const config = require("./index");
const baseConfig = require('./webpack.base');
const path = require('path');

const {host,port} = config.server;
//; --exec babel-node --presets es2015,stage-2
const webpackConfigDev = {
    ...baseConfig,
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    entry:[
        `webpack-hot-middleware/client?path=http://${host}:${port}`,
        `${config.client}/index.js`,
    ],
    output:{
        ...baseConfig.output,
        publicPath:`http://${host}:${port}/dist/`,
    },
    devServer: {
        // 
        contentBase: config.client,
        historyApiFallback: true,
        hot: false,//关闭热点
        inline: true,//开启页面刷新
        host: host,
        port: port,
        // proxy:[
        //     {
        //         context:content,
        //         target:"http://192.168.1.17:8080/",
        //         changeOrigin:true,
        //         secure:false
        //     }
        // ]
        // stats: { colors: true },
    },
    plugins: [
        // “If you are using the CLI, the webpack process will not exit with an error code by enabling this plugin.”
        // https://github.com/webpack/docs/wiki/list-of-plugins#noerrorsplugin
        new webpack.NoEmitOnErrorsPlugin(),
        // https://webpack.github.io/docs/hot-module-replacement-with-webpack.html
        new webpack.HotModuleReplacementPlugin(),
        new HTMLWebpackPlugin({
            title: 'index',
            filename:`${config.dist}/index.html`,
            template:`${config.client}/index.html`,
            inject: 'body',
            chunksSortMode: 'dependency'
        }),
        // // NODE_ENV should be production so that modules do not perform certain development checks
        new webpack.DefinePlugin({//定义环境变量为开发环境
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
    ],
    // https://github.com/chentsulin/webpack-target-electron-renderer#how-this-module-works
    target: 'electron-renderer'
}

module.exports = webpackConfigDev;