var fs = require("fs");

// stream读取
var data = ""

var readStream = fs.createReadStream('input.txt')

readStream.setEncoding('UTF8')

readStream.on('data' ,function(chunk ){
    data+=chunk
})

readStream.on('end',function(){
    console.log(data)
})

readStream.on('error', function(err){
    console.log(err.stack);
})

console.log('执行结束')

// 直接读取
fs.readFile('input.txt',function(err,data){
    if (err){
        console.log(err.stack);
        return;
     }
     console.log(data.toString());
})

console.log('执行结束1')