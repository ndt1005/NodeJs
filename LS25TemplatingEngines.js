const express = require('express')

var app = express();

app.set('view engine', 'ejs');

app.get('/', (req,res) =>{
    res.sendFile(__dirname + '/LS19Index.html', 'utf8');
});

app.get('/register/:userID', (req, res) => {
    var infor = {
        name: 'Zaka',
        age: 23,
        email: 'zaka304@gmail.com',
        hobbies: ['play game', 'sleep', 'play sport'],
    }
    res.render('register', {id: req.params.userID,information: infor});
});


app.listen(3333);