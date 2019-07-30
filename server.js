var http = require('http');
//  require 指令来载入 http 模块
// 匿名函数
http.createServer(function (request, response) {
    // http.createServer() 方法创建服务器
    response.writeHead(200, {'Content-Type': 'text/plain'});
    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain Content-Type来表示具体请求中的媒体类型信息
    var deviceAgent = request.headers["user-agent"].toLowerCase();
    var agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/);
    if(agentID){
        response.end('Hello PHONE\n');
    }else{
        response.end('Hello PC\n');
 
    }
    
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');