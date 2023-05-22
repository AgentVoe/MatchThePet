const express = require('express');
const bodyParser = require('body-parser');
const mime = require('mime');
const app = express();
const db = require('./queries.js');
const port = 3000;
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

/*
 Добавли маршрутизацию страниц
 / - означает главную, там форма для заполнения
 /matches страница на которой будут отображаться результаты совпадений
 */
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/form/index.html');
});


app.post('/matches', function(req, res) {
    res.sendFile(__dirname + '/public/matches/index.html');
    res.send('Hi');
});

// app.get('/pets', db.getPets);
// app.get('/pets/:care', db.getPetByParam);
app.listen(port, () =>{
    console.log(`App running on port:${port}`);
});