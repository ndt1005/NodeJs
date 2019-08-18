const bodyParser = require('body-parser');

var urlEncodedParser = bodyParser.urlencoded({extended: false});

var data = [
    {item:'go to school'},
    {item:'go to movie'},
    {item:'go out'},
]

module.exports = function (app) {

    //show todo
    app.get('/todo', (req, res) => {
        res.render('todo', {todos: data});
    });

    //fill infor todo
    app.post('/todo', urlEncodedParser,(req, res) => {
        data.push(req.body);
        //return json type, remain part "urlEncodedParser" resolve
        res.json(data);
    });

    //remove todo
    app.delete('todo', (req, res) => {

    });
}

