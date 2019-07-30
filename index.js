var server = require("./servreRouter");
var router = require("./router");
 
server.start(router.route);
console.log( __filename );
console.log( __dirname );