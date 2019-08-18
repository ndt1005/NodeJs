var http = require('http')

var server = http.createServer((req, res) => {
    res.writeHead(200, {'ContentType': 'application/json'});
    var person = {
        Name: 'Thinh Nguyen',
        Age: '23',
        Job: 'Dev',
        Hometown: 'Dong Nai'
    };
    res.end(JSON.stringify(person));
});

server.listen(3333,'127.0.1.10');
console.log('Running port 3333');

