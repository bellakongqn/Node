const http = require('http')
const fs = require('fs')
const  url = require('url')
 
// 目标：访问/index 显示主页，访问/about 显示关于页面
// 两个页面有相同的layout

const pageHeader = fs.readFileSync('./header.tmpl', {encoding: 'utf8'})
const pageFooter = fs.readFileSync('./footer.tmpl', {encoding: 'utf8'})

const server = http.createServer((request, response) => {
  const currenturl = request.url
  const pathname = url.parse(currenturl).pathname
  
  // 主页
  if (pathname === '/index') {
    const content = '<h2>这里是首页，大家好！</h2>'

    response.end(pageHeader + content + pageFooter)
  }

  if (pathname === '/about') {
    const content = '<h2>关于我们；为人类的使命做出贡献！</h2>'

    response.end(pageHeader + content + pageFooter)
  }
  response.end('hello world')
})

server.listen(8080)
console.log('app is running at http://127.0.0.1:8080')