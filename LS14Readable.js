var file = require('fs');

var readStream = file.createReadStream(__dirname + '/LS14Data.txt', {encoding: 'utf8'});
var writeSream = file.createWriteStream(__dirname + '/LS14Result.txt');

readStream.on('data', function (chunk) {
    console.log('Read stream: ');
    writeSream.write(chunk);
})

readStream.on('end', () => {
    console.log('Streaming finished.')
})