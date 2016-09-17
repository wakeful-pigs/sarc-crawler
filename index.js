const crawler = require('./crawler');
const express = require('express');
const path    = require('path');
const app = express();
const PORT = 3000;

const root_handler = (req, res) => res.render('index', {title: 'Sarc Crawler'});

let listen_handler = () => console.log(`Running at: ${PORT}`);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.get('/', root_handler);
app.listen(PORT, listen_handler)
