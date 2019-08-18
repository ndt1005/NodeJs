testExport = require('./LS7Module');

console.log("This is app.js ");

console.log(testExport.count('abc', 'abc', 'abc'));
console.log(testExport.hello());
console.log(testExport.sum(10, 20));