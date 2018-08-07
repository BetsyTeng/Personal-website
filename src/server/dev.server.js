

process.env.NODE_ENV='development';

import Main from './../application/Main.server';
import ReactDOMServer  from 'react-dom/server';
import React from 'react';

const express = require('express');
const compression = require('compression');
const {minify} = require('html-minifier');

const renderPage = require('../application/Main.server').renderPage;

const server = express();
const path = require('path');

const webpack = require('webpack');
const webpackConfig = require("../../config/webpack.dev");
const compiler = webpack(webpackConfig);

const webpackDevMiddleware = require('webpack-dev-middleware')(
    compiler,
    {
        noInfo:true,
        publicPath:webpackConfig.output.publicPath
    });

server
    .disable('x-powered-by')//在express中删除x-powered-by
    .use(compression())//压缩gzip
    .use(express.static((__dirname + '/public')))//Serve static content for the app from the “public” directory in the application directory
    .use(webpackDevMiddleware)
    .use(require('webpack-hot-middleware')(compiler,{
        log:console.log,
        path:'/__webpack_hmr',
        heartbeat:10*1000
    }))
    .set('views',__dirname+'/views')//设置模板路径，取views变量里的 './views'
    .set('view engine', 'ejs')
    .get('*',function(req,res){
        return renderPage(req, res);
    });
    module.exports = server;