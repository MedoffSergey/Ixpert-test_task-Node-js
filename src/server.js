  //Подключение модулей
const express = require('express');
const path = require ('path');
const pug = require('pug');

//init app
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');    // указываем используемый шаблонизатор HTML кода


//добовляет файлы которые на компьютере для загрузки если они имеются
app.use(express.static(path.join(__dirname, 'public')));

//Главная страница
app.get('/', function (req, res) {
    res.render('index', { title: 'Hello'}); //рендерим файл index.pug
});

//запускаем сервер
app.listen(5984, function () {
    console.log ('Отслеживаем порт: 5984!');
});
