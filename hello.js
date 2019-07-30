// 只导出方法
// exports.world =  function(){
//     console.log('Hello World');
// }

// 导出整个对象

function Hello() { 
    var name; 
    this.setName = function(thyName) { 
        name = thyName; 
    }; 
    this.sayHello = function() { 
        console.log('Hello ' + name); 
    }; 
}; 

module.exports = Hello;

