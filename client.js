var http = require('http')

// 用于请求的选项
var options = {
    host: 'localhost',
    port: '8080',
    path: '/index.html'  
};

var callback = function(response){
    var body=''

    response.on('data' , function(chunk){
        body+=chunk
    })

    response.on('end', function(){
        console.log(body)
    })

    response.on('error', function(error){
        console.log(error.track)
    })

}

var req = http.request(options, callback);
req.end();