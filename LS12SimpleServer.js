var http =  require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Run completely.')
});

server.listen(3333, '127.0.1.10');
console.log('Server is running on port 3333');