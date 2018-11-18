//-------读文件-------
// var fs = require('fs');
// fs.readFile('test.txt', function(err, data){
//     if(err) 
//         throw err;
//     console.log(data);
// });

// var fs = require('fs');
// var data = fs.readFileSync('test.txt', {encoding: "UTF-8"});
// console.log(data);


//-------写文件-------
// var fs = require('fs');
// fs.writeFile("foo.txt", "hello nodesssss", {flag:"w", encoding:"utf-8"},
// function(err){
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("success");
// });


// //-------使用stat获取文件状态-------
// var fs = require("fs");
// fs.stat("foo.txt", function(err, result){
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(result);
// })


// //-------获取目录下的文件-------
// var fs = require("fs");
// function getAllFileFromPath(path){
//     fs.readdir(path, function(err, res){
//         for(var subPath of res){
//             //这里使用同步而非异步
//             var statObj = fs.statSync(path + "/" + subPath);
//             if(statObj.isDirectory()){  //判断是否为目录
//                 console.log("Dir:", subPath);
//                 //如果是文件夹 递归获取子目录的文件列表
//                 getAllFileFromPath(path + "/" + subPath);
//             }else{
//                 console.log("File:", subPath);
//             }
//         }
//     })
// }
// getAllFileFromPath("/Users/yangleilei/Desktop/node-file");

// var http = require("http");
// var server = http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end("hello node");
// });

// server.on("connection", function(req, res){
//     console.log("connect");
// })
// server.on("reqiest", function(req, res){
//     console.log("reqiest");
// });
// server.listen(3000);

// var http = require('http');
// server = http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type':'text/plain'});
//     res.end('hello yll\n');
// });
// server.listen(8000, '127.0.0.1');
// console.log("server running at 127.0.0.1:8000");


//---------第一个 Express 框架实例--------
// //express_demo.js 文件
// var express = require('express');
// var app = express();
 
// app.get('/', function (req, res) {
//    res.send('Hello World');
// })
 
// var server = app.listen(8081, function () {
 
//   var host = server.address().address
//   var port = server.address().port
 
//   console.log("应用实例，访问地址为 http://%s:%s", host, port)
// })


// var express = require('express');
// var app = express();
// //  主页输出 "Hello World"
// app.get('/', function (req, res) {
//    console.log("主页 GET 请求");
//    res.send('Hello GET');
// })
// //  POST 请求
// app.post('/', function (req, res) {
//    console.log("主页 POST 请求");
//    res.send('Hello POST');
// })
// //  /del_user 页面响应
// app.get('/del_user', function (req, res) {
//    console.log("/del_user 响应 DELETE 请求");
//    res.send('删除页面');
// })
// //  /list_user 页面 GET 请求
// app.get('/list_user', function (req, res) {
//    console.log("/list_user GET 请求");
//    res.send('用户列表页面');
// })
// // 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
// app.get('/ab*cd', function(req, res) {   
//    console.log("/ab*cd GET 请求");
//    res.send('正则匹配');
// })
// var server = app.listen(8081, function () {
//   var host = server.address().address
//   var port = server.address().port
//   console.log("应用实例，访问地址为 http://%s:%s", host, port)
// })

var mysql  = require('mysql');  
 
var connection = mysql.createConnection({     
  host     : 'localhost',       
  user     : 'root',              
  password : 'yangleilei',       
  port: '3306',                   
  database: 'test' 
}); 
 
connection.connect();
 
var  sql = 'SELECT * FROM websites';
//查
connection.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
 
       console.log('--------------------------SELECT----------------------------');
       console.log(result);
       console.log('------------------------------------------------------------\n\n');  
});
 
connection.end();