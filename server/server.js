require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const db = require('./db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// we need to use cors middleware in order for our server and client side to be able to communicate properly
// client and server is each running on its own domain
// having a different port means it is already a different domain and two domains cannot communicate by default
// that prevents passing requests from client to server
// cors middleware fixes this problem
app.use(cors())

// use this middleware in order to have access to body & convert the data sent in the request itnto a JS object
app.use(express.json())

// Access home page with route handler
app.get('/users', async (req, res) => {
  try {
    const results = await db.query('SELECT * FROM users') // returns a promise
    // console.log(results)
    res.status(200).json({
      status: 'success',
      results: results.rows.length,
      // structure response to the frontend using "data" -- frontend knows to look for "data" field in the payload, where all the data is stored
      data: {
        // results: results.rows,
        users: results.rows,
      },
    })
  } catch (err) {
    console.log(err)
  }
})

// Access home page with route handler
app.get('/dashboard', async (req, res) => {
  try {
    const results = await db.query('SELECT * FROM users WHERE id===') // returns a promise
    console.log(results)
    res.status(200).json({
      status: 'success',
      results: results.rows.length,
      // structure response to the frontend using "data" -- frontend knows to look for "data" field in the payload, where all the data is stored
      data: {
        results: results.rows,
      },
    })
  } catch (err) {
    console.log(err)
  }
})

// Find all the users that correspond to the gender interest of the user currently logged in
app.get('/gendered-users', async (req, res) => {
  try {
    // always use parameterized queries (queries with $ as placeholder and passing variables in an array to it) in order to prevent SQL injections
    //console.log(req)
    const results = await db.query(
      'SELECT * FROM users WHERE gender_identity = $1',
      [req.query.gender]
    )
    res.status(200).json({
      status: 'success',
      results: results.rows.length,
      data: {
        users: results.rows,
      },
    })
  } catch (err) {
    console.log(err)
  }
})

// Find one specific user with route handler
app.get('/user', async (req, res) => {
  try {
    // always use parameterized queries (queries with $ as placeholder and passing variables in an array to it) in order to prevent SQL injections
    const results = await db.query('SELECT * FROM users WHERE id = $1', [
      req.query.userId,
    ])
    res.status(200).json({
      status: 'success',
      data: {
        user: results.rows[0],
      },
    })
  } catch (err) {
    console.log(err)
  }
})

// create user with route handler
// the info sent in the requst will be saved in "body" & converted to JS object -- for that, we need to use middleware express.json() => see the top of the file; without this middleware, the body would be undefined
app.post('/signup', async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10)
  const sanitizedEmail = req.body.email.toLowerCase()

  console.log(req.body)

  try {
    // !!!!!!!!!!! CHECKING IF EMAIL/USERNAME ALREADY EXISTS DOES NOT WORK !!!!!!!!!!
    /* 				const check = await db.query("SELECT * FROM users WHERE email = $1 OR username = $2", [sanitizedEmail, req.body.username])
			if (check) {
				return res.status(409)
							.send('This username or email already exists.') // check is not working
			}
*/
    const results = await db.query(
      'INSERT INTO users (firstname, lastname, username, age, gender_identity, gender_interest, bio, city, country, password, email) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) returning *', // changed the token in the Table to null for now, before we assign an actual automatically generated token
      [
        req.body.firstname,
        req.body.lastname,
        req.body.username,
        req.body.age,
        req.body.gender_identity,
        req.body.gender_interest,
        req.body.bio,
        req.body.city,
        req.body.country,
        hashedPassword,
        sanitizedEmail,
      ]
    )

    const token = jwt.sign(results.rows[0], sanitizedEmail, {
      expiresIn: 60 * 24,
    })

    console.log(results)
    res.status(201).json({
      token,
      status: 'success',
      id: results.rows[0].id,
      data: {
        user: results.rows[0],
      },
    })
  } catch (err) {
    console.log(err)
  }
})

app.post('/login', async (req, res) => {
  const sanitizedEmail = req.body.email.toLowerCase()

  try {
    const results = await db.query('SELECT * FROM users WHERE email = $1', [
      sanitizedEmail,
    ])
    console.log(results)
    if (
      results &&
      (await bcrypt.compare(req.body.password, results.rows[0].password))
    ) {
      const token = jwt.sign(results.rows[0], sanitizedEmail, {
        expiresIn: 60 * 24,
      })
      res.status(201).json({
        token,
        status: 'success',
        id: results.rows[0].id,
      })
    }
    res.status(400).send('Invalid login credentials.') // !!!!!!!!!! this is not working, not being displayed !!!!!!!!!!!!!
  } catch (err) {
    console.log(err)
  }
})

app.put('/settings', async (req, res) => {
  console.log(req.body)
  const formData = req.body.formData
  const hashedPassword = await bcrypt.hash(formData.password, 10)
  const sanitizedEmail = formData.email.toLowerCase()

  try {
    const results = await db.query(
      'UPDATE users SET firstname = $1, lastname = $2, username = $3, age = $4, gender_identity = $5, gender_interest = $6, bio = $7, city = $8, country = $9, password = $10, email = $11 WHERE id = $12 returning *',
      [
        formData.first_name,
        formData.last_name,
        formData.user_name,
        formData.age,
        formData.gender_identity,
        formData.gender_interest,
        formData.bio,
        formData.city,
        formData.country,
        hashedPassword,
        sanitizedEmail,
        formData.id,
      ]
    )
    console.log(results)
    res.status(200).json({
      status: 'success',
      data: {
        user: results.rows[0],
      },
    })
  } catch (err) {
    console.log(err)
  }
})

app.delete('/users/:id', async (req, res) => {
  try {
    const results = await db.query('DELETE FROM users WHERE id = $1', [
      req.params.id,
    ])
    res.status(204).json({
      status: 'success',
    })
  } catch (err) {
    console.log(err)
  }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}.`)
})
