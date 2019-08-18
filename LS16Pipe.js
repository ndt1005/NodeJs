var http = require('http');
var file = require('fs');




var server =  http.createServer((req, res) => {
    res.writeHead(200, 'Text/plain');
    var readStream = file.createReadStream(__dirname + '/LS14Data.txt', 'utf8');
    readStream.pipe(res);
}); 

server.listen(3333, '127.0.1.10');
console.log('Running on port 3333');