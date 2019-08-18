const express = require('express');
const file = require('fs')
const app = express();

app.get('/', (req, res) => {
    file.createReadStream(__dirname + '/LS19index.html', 'utf8').pipe(res);
});

app.get('/contact/:userID/:content', (req, res) => {
    res.send("Customer's ID: " + req.params.userID + ' content: ' + req.params.content);
});


app.listen(3333);