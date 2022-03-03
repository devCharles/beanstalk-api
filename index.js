
require('dotenv').config()
const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.json({
    message: 'API in beanstalk'
  })
})

app.get('/hola', (req, res) => {
  res.json({
    message: 'hola endpoint'
  })
})

app.get('/env', (req, res) => {
  res.json({
    env: process.env
  })
})

app.listen(port, () => {
  console.log('Server running in port: ', port)
})
