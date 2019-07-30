var fs = require('fs')

var readable = fs.createReadStream('input.txt')

var writable = fs.createWriteStream('output.txt')

readable.pipe(writable)

// 讲input.txt文件写入output.txt

console.log('结束')