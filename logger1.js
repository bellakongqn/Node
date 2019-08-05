var FileStreamRotator = require('file-stream-rotator');
var express = require('express');
var fs = require('fs');
var logger = require('morgan');
 
var app = express();
var logDirectory = __dirname + '/log';
 
// ensure log directory exists 
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
 
// create a rotating write stream 
var accessLogStream = FileStreamRotator.getStream({
    date_format: 'YYYYMMDD',
    filename: logDirectory + '/%DATE%.log',
    frequency: 'daily',
    verbose: false
});
 
// setup the logger 
app.use(logger('combined', {stream: accessLogStream}));
 
app.get('/', function (req, res) {
    res.send('hello, world!');
});

app.listen(8081, function () {
    console.log('Server running at http://127.0.0.1:8081/');   
})