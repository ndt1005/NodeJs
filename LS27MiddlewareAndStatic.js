const express = require('express')

const app = express();

app.set('view engine', 'ejs');
app.use('/assets',express.static('stuff'));
app.get('/', (req, res) => {
    res.render("LS27Index");
});

app.get('/register', (req, res) => {
    res.render('LS27register');
});

app.get('/login', (req,res) =>{
    res.render('LS27Login');
});

app.listen(3333);