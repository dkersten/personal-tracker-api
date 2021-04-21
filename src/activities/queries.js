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
  pool.query("SELECT * FROM activities WHERE date > current_date - interval '7 days' ORDER BY date ASC", (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
}

// get all activities for the current month
const getActivitiesMonth = (req, res) => {
  pool.query("SELECT * FROM activities WHERE date >= date_trunc('month', CURRENT_DATE) ORDER BY date ASC", (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
}

// get all activities for the last nth month (this needs work to DRY up)
// const getActivitiesNthMonth = (req, res) => {
//   const monthNum = req.params.month

//   console.dir(monthNum)

//   pool.query("SELECT * FROM activities WHERE date >= date_trunc('month', current_date - interval '2 month') and date < date_trunc('month', current_date - interval '1 month')", (error, results) => {
//     if (error) {
//       throw error
//     }
//     res.status(200).json(results.rows)
//   })
// }

const getActivitiesMonth1 = (req, res) => {
  pool.query("SELECT * FROM activities WHERE date >= date_trunc('month', current_date - interval '1 month') and date < date_trunc('month', current_date) ORDER BY date ASC", (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
}

const getActivitiesMonth2 = (req, res) => {
  pool.query("SELECT * FROM activities WHERE date >= date_trunc('month', current_date - interval '2 month') and date < date_trunc('month', current_date - interval '1 month') ORDER BY date ASC", (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
}

const getActivitiesMonth3 = (req, res) => {
  pool.query("SELECT * FROM activities WHERE date >= date_trunc('month', current_date - interval '3 month') and date < date_trunc('month', current_date - interval '2 month') ORDER BY date ASC", (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
}

const getActivitiesMonth4 = (req, res) => {
  pool.query("SELECT * FROM activities WHERE date >= date_trunc('month', current_date - interval '4 month') and date < date_trunc('month', current_date - interval '3 month') ORDER BY date ASC", (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
}

const getActivitiesMonth5 = (req, res) => {
  pool.query("SELECT * FROM activities WHERE date >= date_trunc('month', current_date - interval '5 month') and date < date_trunc('month', current_date - interval '4 month') ORDER BY date ASC", (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
}

const getActivitiesMonth6 = (req, res) => {
  pool.query("SELECT * FROM activities WHERE date >= date_trunc('month', current_date - interval '6 month') and date < date_trunc('month', current_date - interval '5 month') ORDER BY date ASC", (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
}

const getActivitiesMonth7 = (req, res) => {
  pool.query("SELECT * FROM activities WHERE date >= date_trunc('month', current_date - interval '7 month') and date < date_trunc('month', current_date - interval '6 month') ORDER BY date ASC", (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
}

const getActivitiesMonth8 = (req, res) => {
  pool.query("SELECT * FROM activities WHERE date >= date_trunc('month', current_date - interval '8 month') and date < date_trunc('month', current_date - interval '7 month') ORDER BY date ASC", (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
}

const getActivitiesMonth9 = (req, res) => {
  pool.query("SELECT * FROM activities WHERE date >= date_trunc('month', current_date - interval '9 month') and date < date_trunc('month', current_date - interval '8 month') ORDER BY date ASC", (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
}

const getActivitiesMonth10 = (req, res) => {
  pool.query("SELECT * FROM activities WHERE date >= date_trunc('month', current_date - interval '10 month') and date < date_trunc('month', current_date - interval '9 month') ORDER BY date ASC", (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
}

const getActivitiesMonth11 = (req, res) => {
  pool.query("SELECT * FROM activities WHERE date >= date_trunc('month', current_date - interval '11 month') and date < date_trunc('month', current_date - interval '10 month') ORDER BY date ASC", (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
}

const getActivitiesMonth12 = (req, res) => {
  pool.query("SELECT * FROM activities WHERE date >= date_trunc('month', current_date - interval '12 month') and date < date_trunc('month', current_date - interval '11 month') ORDER BY date ASC", (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
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
      // getActivitiesNthMonth,
      getActivitiesMonth1,
      getActivitiesMonth2,
      getActivitiesMonth3,
      getActivitiesMonth4,
      getActivitiesMonth5,
      getActivitiesMonth6,
      getActivitiesMonth7,
      getActivitiesMonth8,
      getActivitiesMonth9,
      getActivitiesMonth10,
      getActivitiesMonth11,
      getActivitiesMonth12
  }