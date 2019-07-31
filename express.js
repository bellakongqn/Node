var express = require('express');
var app = express();

app.get('/', function(req,res){
    res.send('Hello World');
})
app.get('/del_user', function (req, res) {
    console.log("/del_user 响应 DELETE 请求");
    res.send('删除页面');
 }) 

app.listen(8081, function () {
    console.log('Server running at http://127.0.0.1:8081/');   
})