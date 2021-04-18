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

///////// GET requests

// get all activities
app.get('/activities', dbActivity.getActivities)

// get all activities for the past 7 days
app.get('/activities/week', dbActivity.getActivitiesWeek)

// get all activities for the current month
app.get('/activities/month', dbActivity.getActivitiesMonth)

// get all activities for the last nth month
app.get('activities/month/:month', dbActivity.getActivitiesNthMonth)

// get all activities for a particular date
app.get('/activities/date/:date', dbActivity.getActivitiesDay)

// get individual activity (by id)
app.get('/activities/:id', dbActivity.getActivity)

///////// POST requests

// add new activity
app.post('/activities', dbActivity.createActivity)


app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})