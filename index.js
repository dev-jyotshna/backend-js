require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
    res.send('dev-jyotshna')
})
app.get('/login', (req, res) => {
    res.send('<h1>please login</h1>')
})
app.get('/home', (req, res) => {
    res.send('<h2> Got the home response</h2>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})