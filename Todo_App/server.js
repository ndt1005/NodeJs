const express = require('express');
const todoController = require('./todoController');

const app = express();

//setup template engine (ejs)
app.set('view engine', 'ejs');

//static file
app.use("/temp", express.static('assets'));

//fire controller
todoController(app);

//listen port
app.listen(3333);
console.log('Server is running on port 3333');

