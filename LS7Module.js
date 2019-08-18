//Function Express
var count = function (array) {
    return 'There are ' + array.length + ' elements';
}

var hello = function () {
    console.log("say hello");
}

var sum = function (a, b) {
    return a + b;
}

//export module

// way 1:
// module.exports.count = count;
// module.exports.hello = hello;
// module.exports.sum = sum;

//way 2:
module.exports = {
    count: count,
    hello: hello,
    sum: sum,
}