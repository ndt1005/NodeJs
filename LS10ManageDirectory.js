var libFs = require('fs');


//remove file by unlinkSync()
// libFs.unlinkSync('LS09TestWrite');


//create directory and remove directory
// libFs.rmdirSync('folder');

//create public folder and copy content of LS90Text.txt to result.txt
libFs.mkdir('public', function(err, data) {
    libFs.readFile('LS09Text.txt', 'utf8', function(err, data) {
        libFs.writeFileSync('./public/result.txt', data);
    });
});