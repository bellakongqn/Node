var express = require("express")
var bodyParser = require("body-parser")
var cookieParser = require("cookie-parser")
var logger = require("morgan")
var fs = require('fs')

var urlencodedParser = bodyParser.urlencoded({extended: false});

var app = express()
app.use(cookieParser('secret'))

app.get('/express.html', function (req, res) {
    res.sendFile( __dirname + "/" + "express.html" );
})

app.get('/', function (req, res) {
    res.send('hello, world!');
});
// POST /login 中获取URL编码的请求体  表单
app.post('/process_post', urlencodedParser, function(req, res){
    console.log(req.body,'req.body')
    if(!req.body) return res.sendStatus(400);
    res.send('welcome, ' + req.body.first_name);
})

app.use(function (req, res, next) {
    console.log('req.signedCookies.nick',req.signedCookies.nick); // chyingp
    next();
  });
  
  app.use(function (req, res, next) {  
    // 传入第三个参数 {signed: true}，表示要对cookie进行摘要计算
  //   设置cookie
    res.cookie('nick', 'chyingp', {signed: true});
    res.end('ok');
  });

  var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'});
  app.use(logger('combined', {stream: accessLogStream}));

  app.listen(8081, function () {
    console.log('Server running at http://127.0.0.1:8081/');   
})


