require('babel-polyfill');
import 'babel-polyfill';
import express from 'express';
import crawler from './crawler';
import path from 'path';

const app = express();
const PORT = 3000;

const sarc_data = (req, res) => res.send(crawler());
const listen_handler = () => console.log(`Running at: ${PORT}`);

app.get('/sarc', sarc_data);
app.listen(PORT, listen_handler)
