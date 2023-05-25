const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./queries.js');
const port = 3000;
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
// Добавил путь к шаблонам ejs
app.set('view engine', 'ejs');
app.set('views', __dirname + '/public/');
app.use(express.static(__dirname + '/public'));

/*
 Добавли маршрутизацию страниц
 / - означает главную, там форма для заполнения
 /matches страница на которой будут отображаться результаты совпадений
 */
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/form/index.html');
});


app.post('/matches', db.getPetByParam);

// app.get('/matches', function (req, res) {
//     res.sendFile(__dirname + '/public/matches/index.html');
// });



app.listen(port, () =>{
    console.log(`App running on port:${port}`);
});