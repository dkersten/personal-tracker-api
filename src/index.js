const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { Pool } = require('pg')
const dbActivity = require('./activities/queries.js')
require('dotenv').config()
const app = express()
const port = 3001

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(cors())

app.get('/', (request, response) => {
    response.json({ stuff: 'This is just static stuff' })
})

app.get('/activities', dbActivity.getActivities)
app.get('/activities/:id', dbActivity.getActivity)
app.post('/activities', dbActivity.createActivity)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})