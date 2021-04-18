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
// app.get('/activities/month/:month', dbActivity.getActivitiesNthMonth)

// non DRY --> figure a way out to use SQL arguements
// month - 1
app.get('activities/month/1', dbActivity.getActivitiesMonth1)
// month - 2
app.get('activities/month/2', dbActivity.getActivitiesMonth2)
// month - 3
app.get('activities/month/3', dbActivity.getActivitiesMonth3)
// month - 4
app.get('activities/month/4', dbActivity.getActivitiesMonth4)
// month - 5
app.get('activities/month/5', dbActivity.getActivitiesMonth5)
// month - 6
app.get('activities/month/6', dbActivity.getActivitiesMonth6)
// month - 7
app.get('activities/month/7', dbActivity.getActivitiesMonth7)
// month - 8
app.get('activities/month/8', dbActivity.getActivitiesMonth8)
// month - 9
app.get('activities/month/9', dbActivity.getActivitiesMonth9)
// month - 10
app.get('activities/month/10', dbActivity.getActivitiesMonth10)
// month - 11
app.get('activities/month/11', dbActivity.getActivitiesMonth11)
// month - 12
app.get('activities/month/12', dbActivity.getActivitiesMonth12)

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