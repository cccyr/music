/*
* @Author: chenyaru
* @Date:   2017-03-03 09:36:19
* @Last Modified by:   chenyaru
* @Last Modified time: 2017-03-03 15:19:29
*/

'use strict';
var http = require('http')
var server = http.createServer()
var fs = require('fs')
var path = require('path')
var mime = require('mime')
var template = require('art-template')
var myData = [
    {
        "id": 1,
        "title": "富士山下",
        "singer": "陈奕迅",
        "music": "陈奕迅 - 富士山下.mp3",
        "poster": "陈奕迅.jpg"
    },
    {
        "id": 2,
        "title": "石头记",
        "singer": "达明一派",
        "music": "达明一派 - 石头记.mp3",
        "poster": "达明一派.jpg"
    },
    {
        "id": 3,
        "title": "青城山下白素贞",
        "singer": "好妹妹乐队",
        "music": "好妹妹乐队 - 青城山下白素贞.mp3",
        "poster": "好妹妹乐队.jpg"
    },
    {
        "id": 4,
        "title": "友情岁月",
        "singer": "黄耀明",
        "music": "黄耀明 - 友情岁月.mp3",
        "poster": "黄耀明.jpg"
    },
    {
        "id": 5,
        "title": "梦里水乡",
        "singer": "江珊",
        "music": "江珊 - 梦里水乡.mp3",
        "poster": "江珊.jpg"
    },
    {
        "id": 6,
        "title": "Blowing In The Wind",
        "singer": "南方二重唱",
        "music": "南方二重唱 - Blowing In The Wind.mp3",
        "poster": "南方二重唱.jpg"
    },
    {
        "id": 7,
        "title": "女儿情",
        "singer": "万晓利",
        "music": "万晓利 - 女儿情.mp3",
        "poster": "万晓利.jpg"
    },
    {
        "id": 8,
        "title": "王馨平",
        "singer": "别问我是谁",
        "music": "王馨平 - 别问我是谁.mp3",
        "poster": "王馨平.jpg"
    },
    {
        "id": 9,
        "title": "五环之歌",
        "singer": "岳云鹏",
        "music": "岳云鹏,MC Hotdog - 五环之歌.mp3",
        "poster": "岳云鹏.jpg"
    }
]

server.on('request',function(req,res){
    var url = decodeURI(req.url)
    var method = req.method.toLowerCase()
    if (url==='/'&&method==='get') {
        // res.write('首页')
        // res.end()
        // fs.readFile(path.join(__dirname,'view/index.ejs'),function(err,data){
        //     if (err)throw err;
        //     res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
        //     res.end(data);
        // })
        var data = {list:myData}
        var html = template(__dirname+'/views/index',data)
        res.writeHead(200,{'Content-Type':'text/html;charset=utf8'})
        res.write(html)
        res.end()
    }else if (url==='/add'&&method==='get') {
        // res.write('添加音乐页面')
        // res.end()
        fs.readFile(path.join(__dirname,'views/add.html'),function(err,data){
            if (err)throw err;
            res.writeHead(200,{
                'Content-Type':'text/html;charset=utf8'
            })
            res.end(data)
        })
    }else if (url==='/add'&&method==='post') {
        res.write('添加音乐表单提交处理')
        res.end()
    }else if (url==='/edit'&&method==='get') {
        // res.write('编辑音乐页面')
        // res.end()
        fs.readFile(path.join(__dirname,'views/edit.html'),function(err,data){
            if (err)throw err;
            res.writeHead(200,{
                'Content-Type':'text/html;charset=utf8'
            })
            res.end(data)
        })
    }else if (url==='/edit'&&method==='post') {
        res.write('处理编辑的表单处理')
        res.end()
    }else if (url==='/delete'&&method==='get') {
        res.write('删除音乐页面')
        res.end()
    }else if ((url.startsWith('/uploads')||(url.startsWith('/statics')))&&method==='get') {
        fs.readFile(path.join(__dirname,url),function(err,data){
            if (err)throw err;
            res.writeHead(200,{
                'Content-Type':mime.lookup(url)
            })
            res.end(data)
        })
    }
})
server.listen(3000,'127.0.0.1',function(){
    console.log('服务器创建成功，监听端口3000')
})