// import express from 'express'
// import compression from 'compresstion'
// import {minify} from 'html-minifier'

// import React from 'react'
// import Main from './application/Main';
// import ReactDOM from 'react-dom';
const express = require('express');
const compression = require('compression');
const {minify} = require('html-minifier');
const React = require('react');
// const Main = require('./../application/Main');
const ReactDOM = require('react-dom');
const server = express();
const path = require('path');

// var _x = ReactDOM.hydrate(<div />,document.getElementById('root'));
// const __dirname  = path.resolve()
server
    .disable('x-powered-by')//在express中删除x-powered-by
    .use(compression())//压缩gzip
     .use(express.static((__dirname + '/public')))//Serve static content for the app from the “public” directory in the application directory
    // .use(express.logger())//logger日志
    .set('views',__dirname+'/views')//设置模板路径，取views变量里的 './views'
    .set('view engine', 'ejs')
    .get('/',function(req,res){
        var _render = '<div>xxxxxssssxxxxxxx</div>';
        res.render('index',{title:'index',render:_render},function(err,html){
            res.send(minify(html)) 
        })
    });

    server.get('/detail/:id',function(req,res){
        var _render = 'xx' ;
        res.render('details',{title:'detail',render:_render,metas:[]},function(err,html){
            res.send(minify(html))
        })
    });
    
    module.exports = server;