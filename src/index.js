import 'babel-polyfill';
import express from 'express';
import crawler from './crawler';
import path from 'path';
import mongoose from 'mongoose';

const app = express();
const PORT = 3000;

mongoose.connect("mongodb://mongo:27017")

const sarc_data = (req, res) => res.send(crawler());
const listen_handler = () => console.log(`Running at: ${PORT}`);

app.get('/sarc', sarc_data);
app.listen(PORT, listen_handler)
