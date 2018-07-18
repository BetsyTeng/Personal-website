// import path from 'path';
// import config from './index';
const path = require('path');
const config = require('./index');
// export default 
const webpackConfigBase = {
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            // loader: 'babel-loader?cacheDirectory=true',
            exclude: /node_modules/,
            use: "babel-loader"
        },
        { test: /\.css$/, use: ['style-loader', 'css-loader'] },//去掉'postcss-loader',否则无法用多个css
        {
            test: /\.scss$/,
            use: [
                { loader: 'style-loader' },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                        modules: true,
                        url:false,
                        camelCase: 'dashesOnly',
                        localIdentName: '[local]--[hash:base64:5]'
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true,
                        config: {
                            path: 'postcss.config.js' // 这个得在项目根目录创建此文件
                        }
                    }
                },
                {
                    loader: 'sass-loader',
                    options: { sourceMap: true }
                }
            ]
        },
        {
            test: /\.(png|jpg|jpeg|gif)$/,
            loader: 'url-loader?limit=8192&name=./static/img/[hash].[ext]',
        },
        {
            test: /\.(eot|woff|woff2|ttf)([?]?.*)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    name: 'fonts/[name].[ext]',
                },
            }],
        },
        {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            use: [{
                loader: 'url-loader',
                options: {
                    mimetype: 'images/svg+xml',
                }
            }],
            include: /node_modules/,
        }
    ]
    },
    output: {//classnames
        path: config.dist,
        publicPath: '/',
        filename: '[name].[hash].js'
    },
    resolve: {
        extensions: [".scss", '.js', 'jsx'],
        alias: {
            ui: path.join(config.client, 'js/ui/'),
            utils: path.join(config.client, 'js/utils'),
            components: path.join(config.client, 'js/components'),
            stores: path.join(config.client, 'js/stores'),
        },
    }
}

module.exports = webpackConfigBase;