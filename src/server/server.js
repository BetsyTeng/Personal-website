

import Main from './../application/Main';
import ReactDOMServer  from 'react-dom/server';
import React from 'react';
import nodeSass from 'node-sass';
const express = require('express');
const compression = require('compression');
const {minify} = require('html-minifier');

const server = express();
const path = require('path');

server
    .disable('x-powered-by')//在express中删除x-powered-by
    .use(compression())//压缩gzip
     .use(express.static((__dirname + '/public')))//Serve static content for the app from the “public” directory in the application directory
    // .use(express.logger())//logger日志
    .set('views',__dirname+'/views')//设置模板路径，取views变量里的 './views'
    .set('view engine', 'ejs')
    .get('/',function(req,res){
        res.render('index',{title:'index',render:ReactDOMServer.renderToString(<Main/>)},function(err,html){
            fetch("/students.json")
            .then(
                function(response){
                    if(response.status!==200){
                        console.log("存在一个问题，状态码为："+response.status);
                        return;
                    }
                    response.json().then(function(data){
                        res.send(minify(html)) 
                    });
                }
            )
            .catch(function(err){
                console.log("Fetch错误:"+err);
            });
            
        })
    });

    server.get('/detail/:id',function(req,res){
        var _render = 'xx' ;
        res.render('details',{title:'detail',render:ReactDOMServer.renderToString(<Main/>),metas:[]},function(err,html){
            res.send(minify(html))
        })
    });
    
    module.exports = server;