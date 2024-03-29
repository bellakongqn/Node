var express = require('express');
var app = express();
var fs = require('fs')
var util = require('util')
var bodyParser = require('body-parser');
var multer  = require('multer');
var cookieParser = require('cookie-parser')

app.use(multer({ dest: '/tmp/'}).array('image'));
app.use(cookieParser())
 
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use('/public', express.static('public'));
app.get('/', function(req,res){
    res.send('Hello World');
    console.log("Cookies: " + util.inspect(req.cookies));
})
app.get('/del_user', function (req, res) {
    console.log("/del_user 响应 DELETE 请求");
    res.send('删除页面');
 })

app.get('/form.html', function (req, res) {
    res.sendFile( __dirname + "/" + "form.html" );
})
app.get('/express.html', function (req, res) {
    res.sendFile( __dirname + "/" + "express.html" );
 })

 app.get('/process_get', function (req, res) {
 
    // 输出 JSON 格式
    var response = {
        "first_name":req.query.first_name,
        "last_name":req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
 })

 app.post('/process_post', urlencodedParser, function (req, res) {
 
    // 输出 JSON 格式
    var response = {
        "first_name":req.body.first_name,
        "last_name":req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
 })

 app.post('/file_upload', function (req, res) {
 
   console.log(req.files[0]);  // 上传的文件信息
 
   var des_file = __dirname + "/" + req.files[0].originalname;
   fs.readFile( req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
         if( err ){
              console.log( err );
         }else{
               response = {
                   message:'File uploaded successfully', 
                   filename:req.files[0].originalname
              };
          }
          console.log( response );
          res.end( JSON.stringify( response ) );
       });
   });
})
  
  

app.listen(8081, function () {
    console.log('Server running at http://127.0.0.1:8081/');   
})