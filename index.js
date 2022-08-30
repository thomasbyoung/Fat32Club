const express = require('express')
const app = express()
const port = 3000

const path = require('path');

const person = require('./Person')

app.use(express.static('html'))

//app.get('/', (req, res) => {
 // res.send('Hello World!')
//})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})