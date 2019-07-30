function say(word) {
    console.log(word);
}

function execute(someFunction, value) {
    someFunction(value);
}

// 函数
execute(say, "Hello");

// 匿名函数
execute(function(word){ console.log(word) }, "world");