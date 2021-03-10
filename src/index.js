const express = require('express')
const bodyParser = require('body-parser')
const { Pool } = require('pg')
const db = require('./queries.js')
require('dotenv').config()
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
    response.json({ stuff: 'This is just static stuff' })
})

app.get('/activities', db.getActivities)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})