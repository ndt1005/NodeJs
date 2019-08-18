var libFs = require('fs');

//read file sync
console.log('Start');
//var readText = libFs.readFileSync('LS09Text.txt', 'utf8');

// read file async
var readText = libFs.readFile('LS09Text.txt', 'utf8', function(err, data) {
    if(true) console.log('True' + data);
    else console.log('False');
})
console.log('implement');
//console.log(readText);

// var writeText = libFs.writeFileSync('LS09TestWrite', readText);

console.log('End.')