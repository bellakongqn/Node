var fs = require("fs");

var data = '嘻嘻嘻嘻嘻嘻嘻';

var writeStream = fs.createWriteStream('output.txt')

writeStream.write(data,'UTF8')

writeStream.end()

writeStream.on('finish', function(){
    console.log('写入完成')
})

writeStream.on('err',function(err){
    console.log(err.track)
})

console.log('执行结束')