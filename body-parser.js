var express = require('express');
var bodyParser = require('body-parser');

var app = new express();

//创建application/json解析
var jsonParser = bodyParser.json();

//创建application/x-www-form-urlencoded
var urlencodedParser = bodyParser.urlencoded({extended: false});

app.get('/express.html', function (req, res) {
    res.sendFile( __dirname + "/" + "express.html" );
})
// POST /login 中获取URL编码的请求体  表单
app.post('/process_post', urlencodedParser, function(req, res){
    console.log(req.body,'req.body')
    if(!req.body) return res.sendStatus(400);
    res.send('welcome, ' + req.body.first_name);
})

// req body:[Object: null prototype] { first_name: '111', last_name: '111' } 'req.body'


//POST /api/users 获取JSON编码的请求体
//     {
//         "name": "wang",
//         "password": "123456"
//     }

app.post('/api/users', jsonParser, function(req,res){
    console.log(req.body,'req.body')
    if(!req.body) return res.sendStatus(400);
     res.send('welcome, ' + req.body.first_name);
})

// req.body { name: 'wang', password: '123456' }


app.listen(8081, function () {
    console.log('Server running at http://127.0.0.1:8081/');   
})