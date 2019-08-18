const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const urlAnalysis = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');
app.use('/assets', express.static('stuff'));

app.get('/', (req, res) => {
    res.render("LS28Index");
});

app.get('/register', (req, res) => {
    res.render('LS28register');
});

app.get('/login', (req, res) => {
    res.render('LS28Login');
});

app.get('/contact', (req, res) => {
    res.render('LS28Contact');
});

app.post('/contact', urlAnalysis, (req, res) => {
    console.log(req.body);
    res.render('LS28Sucess', { data: req.body });
});
app.listen(3333);