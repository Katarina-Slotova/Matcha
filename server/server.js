require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const db = require('./db')

// we need to use cors middleware in order for our server and client side to be able to communicate properly
// client and server is each running on its own domain 
// having a different port means it is already a different domain and two domains cannot communicate by default
// that prevents passing requests from client to server
// cors middleware fixes this problem
app.use(cors())

// use this middleware in order to have access to body & convert the data sent in the request itnto a JS object
app.use(express.json())

// Access home page with route handler
app.get("/home", async (req, res) => {
	try {
		const results = await db.query("SELECT * FROM users") // returns a promise
		console.log(results)
		res.status(200).json({
			status: "success",
			// results: results.rows.length,
			// structure response to the frontend using "data" -- frontend knows to look for "data" field in the payload, where all the data is stored 
			data: {
				// results: results.rows,
				users: [
					{
						id: 1,
						firstname: "Kata",
						surname: "Mata", 
						username: "SuperUser",
						image: 'hedgehog.jpg',
						age: "2236",
						gender: "hedgehog",
						sexual_orient: 'bisexual',
						bio: "best hedgehog ever",
						location: "your local forest",
					},
					{
						id: 2,
						firstname: "Bobo",
						surname: "Robo", 
						username: "LesserUser",
						image: 'snake.jpg',
						age: "12",
						gender: "snake",
						sexual_orient: 'bisexual',
						bio: "super scared of badass killer hedgehog",
						location: "your local forest",
					}
				]
			},
		})
	} catch (err) {
		console.log(err)
	}
})

// Find one specific user with route handler
app.get("/users/:id", async (req, res) => {
	console.log(req.params.id)
	try {
		// always use parameterized queries (queries with $ as placeholder and passing variables in an array to it) in order to prevent SQL injections
		const results = await db.query("SELECT * FROM users WHERE id = $1", [req.params.id])
		//console.log(user.rows[0])
		res.status(200).json({
			status: "success",
			data: [
				// user: results.rows[0]
				{
					id: 2,
					firstname: "Bobo",
					surname: "Robo", 
					username: "LesserUser",
					image: 'snake.jpg',
					age: "12",
					gender: "snake",
					sexual_orient: 'bisexual',
					bio: "super scared of badass killer hedgehog",
					location: "your local forest",
				}
			]
		})
	} catch (err) {
		console.log(err)
	}
})


// create user with route handler
// the info sent in the requst will be saved in "body" & converted to JS object -- for that, we need to use middleware express.json() => see the top of the file; without this middleware, the body would be undefined
app.post("/signup", async (req, res) => {
	console.log(req.body)
	try {
		const results = await db.query("INSERT INTO users (firstname, lastname, username, email, city, country, password, image, age, gender, bio) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) returning *", // change the token in the Table to null for now, before we assign an actual automatically generated token
		[ 
			req.body.firstname, req.body.surname, req.body.username, req.body.email, req.body.password, req.body.image, req.body.age, req.body.gender, req.body.sexual_orient, req.body.bio, req.body.location
		])
		console.log(results)
		res.status(201).json({
			status: "success",
			data: {
				// user: results.rows[0]
				id: 3,
				firstname: "Ferocious",
				surname: "Cupcake", 
				username: "SweetNSour",
				email: "wishfor@cupcake.io", 
				password: "eat_your_veggies_I_mean_cupcakes",
				image: 'cupcake.jpg',
				age: "18",
				gender: "cupcake",
				location: "your local bakery"
/* 				actual_location: "your wildest dreams",
				token: "sdjfvvfhsjlslslslsdls", 
				INSERT INTO users (id, firstname, lastname, username, email, city, country, password, image, age, gender, bio, token) VALUES (1, 'Ferocious', 'Cupcake', 'SweetNSour', 'wishfor@cupcake.io', 'Bakeria', 'Wonderland', 'eat_your_veggies_I_mean_cupcakes', 'cupcake.jpg', 18, 'cupcake', 'too sweet to handle', 'kzsgdfksvzvbd');
*/
			}
		})
	} catch (err) {
		console.log(err)
	}
})

app.put("/users/:id", async (req, res) => {
	console.log(req.params.id)
	console.log(req.body)
	try {
		const results = await db.query("INSERT INTO users SET firstname = $1, surname = $2, username = $3, email = $4, password = $5, image = $6, age = $7, gender = $8, sexual_orient = $9, bio = $10, location = $11 WHERE id = $12 returning *", [
			req.body.firstname, req.body.surname, req.body.username, req.body.email, req.body.password, req.body.image, req.body.age, req.body.gender, req.body.sexual_orient, req.body.bio, req.body.location, req.body.id
		])
		console.log(results)
		res.status(200).json({
			status: "success",
			data: {
				// user: results.rows[0]
				firstname: "Bobo",
				surname: "Robo", 
				username: "LesserUser",
				email: "scaredof@cupcake.io", 
				password: "ban_all_cupcakes",
				image: 'snake.jpg',
				age: "12",
				gender: "snake",
				sexual_orient: 'bisexual',
				bio: "super scared of badass killer hedgehog",
				location: "extinct, slaughtered by badass hedgehog",
			}
		})
	} catch (err) {
		console.log(err)
	}
})

app.delete("/users/:id", async (req, res) => {
	try {
		const results = await db.query("DELETE FROM users WHERE id = $1", [req.params.id])
		res.status(204).json({
			status: "success"
		})
	} catch (err) {
		console.log(err)
	}
})

const PORT = process.env.PORT || 3001
app.listen(
	PORT, () => {
		console.log(`Server is up and running on port ${PORT}.`)
	}
)