var util = require('util'); 

// util.inherits 继承
function Base() { 
    this.name = 'base'; 
    this.base = 1991; 
    this.sayHello = function() { 
    console.log('Hello ' + this.name); 
    }; 
} 
Base.prototype.showName = function(){
    console.log(this.name)
}
function Sub(){
    this.name='sub'
}

util.inherits(Sub, Base)

var objBase = new Base(); 
objBase.showName(); 
objBase.sayHello(); 
console.log(objBase);

var objSub = new Sub(); 
objSub.showName(); 
// objSub.sayHello(); inherits 不可以继承原型方法
console.log(objSub); 


// util.inspect 将对象转换成字符串
function Person() { 
    this.name = 'bella'; 
    this.toString = function() { 
    return this.name; 
    }; 
} 
var obj = new Person(); 
console.log(util.inspect(obj)); 
console.log(util.inspect(obj, true)); 

// util.isArray(object) 是否为数组
console.log(util.isArray([]),'isArray')
console.log(util.isArray({}),'isArray')

// util.isRegExp(object) 是否为正则

console.log(util.isRegExp(/some regexp/),'isRegExp')
console.log(util.isRegExp(new RegExp()),'isRegExp')

// util.isDate(object)

console.log(util.isDate(new Date()),'isDate')
console.log(util.isDate(Date()),'isDate')

// util.isError(object)

console.log(util.isError(new Error()),'isError')