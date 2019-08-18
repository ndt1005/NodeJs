var http = require('http')
var file = require('fs')

var server = http.createServer((req, res) => {
    console.log("User request link: " + req.url);

    if (req.url === '/home' || req.url === '/') {
        res.writeHead(200, { 'ContentType': 'text/html' });
        file.createReadStream(__dirname + '/LS19index.html', 'utf8').pipe(res);
    } else if (req.url === '/login') {
        res.writeHead(200, { 'ContentType': 'text/html' });
        file.createReadStream(__dirname + '/LS19login.html', 'utf8').pipe(res);
    } else if (req.url === '/register') {
        res.writeHead(200, { 'ContentType': 'application/json' });
        var register = {
            Username: 'admin',
            Password: 'admin'
        }
        res.end(JSON.stringify(register));
    } else if (req.url === '/404') {
        res.writeHead(404, { 'ContentType': 'text/html' });
        file.createReadStream(__dirname + '/LS19404.html', 'utf8').pipe(res);
    }

});

server.listen(3333, '127.0.1.10');
console.log('Running port 3333');