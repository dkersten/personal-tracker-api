const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: 'personal_tracker_api',
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
})

// get all activities
const getActivities = (req, res) => {
  pool.query('SELECT * FROM activities ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
}

// get all activities for the past 7 days
const getActivitiesWeek = (req, res) => {
  pool.query("SELECT * FROM activities WHERE date > current_date - interval '7 days'", (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
}

// get all activities for the current month
const getActivitiesMonth = (req, res) => {
  pool.query("SELECT * FROM activities WHERE date >= date_trunc('month', CURRENT_DATE)", (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
}

// get all activities for the last nth month
const getActivitiesNthMonth = (req, res) => {

}

// get all activities for a particular date
const getActivitiesDay = (req, res) => {
  const date = req.params.date
  
  pool.query("SELECT * FROM activities WHERE (date = $1)", [date], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
}

// get individual activity (by id)
const getActivity = (req, res) => {
  const id = parseInt(req.params.id)

  pool.query('SELECT * FROM activities WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
}

// add new activity
const createActivity = (req, res) => {
  const { category, name, date, description } = req.body

  pool.query('INSERT INTO activities (category, name, date, description) VALUES ($1, $2, $3, $4)', [category, name, date, description], (error, results) => {
      if (error) {
        throw error
      }
      res.status(201).send(`Activity added`)
    })
}

  module.exports = {
      getActivities,
      getActivitiesWeek,
      getActivitiesMonth,
      getActivity,
      createActivity,
      getActivitiesDay,
      getActivitiesNthMonth
  }