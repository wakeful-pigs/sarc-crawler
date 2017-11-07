import 'babel-polyfill'
import express from 'express'
import crawler from './crawler'
import path from 'path'
import mongoose from 'mongoose'

const app = express()
const PORT = 3000

// mongoose.connect("mongodb://mongo:27017")

const sarcData = async (req, res) => {
  let data = await crawler()
  res.send(data)
}
const listenHandler = () => console.log(`Running at: ${PORT}`)

app.get('/sarc', sarcData)
app.listen(PORT, listenHandler)
