var express = require('express');
var fs = require('fs');
var logger = require('morgan');
 
var app = express();
 
// create a write stream (in append mode) 
var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'});
 
// setup the logger 
app.use(logger('combined', {stream: accessLogStream}));
 
app.get('/', function (req, res) {
    res.send('hello, world!');
});

app.listen(8081, function () {
    console.log('Server running at http://127.0.0.1:8081/');   
})