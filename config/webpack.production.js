const path = require('path');
const webpack = require('webpack');
const MinifyPlugin = require("babel-minify-webpack-plugin");
const config = require("./index");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const baseConfig = require('./webpack.base');
const webpackConfigProduction =  {
    ...baseConfig,
    devtool:false,
    mode: 'production',
    entry:[
        `${config.client}/index.js`,
    ],
    output:{
        path:config.dist,
        filename:'[name].[hash].js',
    },
    plugins:[
        // https://github.com/webpack/webpack/issues/2545
        // Use babel-minify-webpack-plugin minify code
        new MinifyPlugin(),

        // https://webpack.github.io/docs/list-of-plugins.html#occurrenceorderplugin
        // https://github.com/webpack/webpack/issues/864
        new webpack.optimize.OccurrenceOrderPlugin(),
        
        // NODE_ENV should be production so that modules do not perform certain development checks
        new webpack.DefinePlugin({
            DEBUG:false,
            'process.env.NODE_ENV':JSON.stringify('production')
        }),

        new CopyWebpackPlugin([
            {
                from:`${config.server}/**/*`,
                to:config.dist,
            },
            {
                from:`${config.assets}/**/*`,
                to:`${config.dist}`,
            },
            {
                from:path.resolve(__dirname,'../package.json'),
                to:config.dist,
            },
        ]),
    ],

    // https://github.com/chentsulin/webpack-target-electron-renderer#how-this-module-works
    target:'electron-renderer'
}
module.exports = webpackConfigProduction;