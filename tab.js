var http = require('http');
var fs = require('fs');
var url = require('url');
var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <!-- <link href="./index.css" rel="stylesheet" type="text/css" /> -->
    <style>
        a{
            display: inline-block;
            border: 1px solid #dcdcdc;
            width: 60px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            text-decoration: none;
            color: #000000;
            border-radius: 5px;
        }
        a:nth-child(2){
            margin-left: -5px;
        }
        #footer{
            text-align: center;
        }
        
    </style>

</head>
<body>
    <div>
        <a href="./tab1.html" id="about" onclick="myFunction(about)">关于</a>
        <a href="./tab2.html" id="user">设置</a>
    </div>
    <div id="container">
        wsw
    </div>
    <div id="footer">
            Made with ❤ Always
    </div>
    <script src="./tab.js"></script>
</body>
</html>`);

var container = dom.window.document.querySelector("#container"); // "Hello world"
 
 
// 创建服务器
http.createServer( function (request, response) {  
   // 解析请求，包括文件名
   var pathname = url.parse(request.url).pathname;
   
   console.log("Request for " + pathname + " received.");
   
   fs.readFile(pathname.substr(1), function (err, data) {
      if (err) {
         console.log(err);
         response.writeHead(404, {'Content-Type': 'text/html'});
      }else{             
         response.writeHead(200, {'Content-Type': 'text/html'});    
         container.innerHTML= response.write(data.toString());       
      }
      response.end();
   });   
}).listen(8080);
 
// 控制台会输出以下信息
console.log('Server running at http://127.0.0.1:8080/tab.html');