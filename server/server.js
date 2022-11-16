require('dotenv').config()
const express = require('express')
const app = express()

// use this middleware in order to have access to body & convert the data sent in the request itnto a JS object
app.use(express.json())

// Access home page with route handler
app.get("/home", (req, res) => {
	console.log("take user to home page")
	res.status(200).json({
		status: "success",
		// structure response to the frontend using "data" -- frontend knows to look for "data" field in the payload, where all the data is stored 
		data: {
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
})

// Find one specific user with route handler
app.get("/users/:id", (req, res) => {
	console.log("find this user")
	res.status(200).json({
		status: "success",
		data: [
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
})


// create user with route handler
// the info sent in the requst will be saved in "body" & converted to JS object -- for that, we need to use middleware express.json() => see the top of the file; without this middleware, the body would be undefined
app.post("/signup", (req, res) => {
	console.log(req.body)
	res.status(201).json({
		id: 3,
		firstname: "Ferocious",
		surname: "Cupcake", 
		username: "SweetNSour",
		image: 'cupcake.jpg',
		age: "18",
		gender: "cupcake",
		sexual_orient: 'bisexual',
		bio: "too sweet to handle",
		location: "your local bakery",
		actual_location: "your wildest dreams",
		password: "eat_your_veggies_I_mean_cupcakes",
		email: "wishfor@cupcake.io", 
		active: 1,
		token: "sdjfvvfhsjlslslslsdls",
		popularity: 123456789
	})
})

app.put("/users/:id", (req, res) => {
	console.log(req.params.id)
	console.log(req.body)
	res.status(200).json({
		firstname: "Bobo",
		surname: "Robo", 
		username: "LesserUser",
		image: 'snake.jpg',
		age: "12",
		gender: "snake",
		sexual_orient: 'bisexual',
		bio: "super scared of badass killer hedgehog",
		location: "your local forest",
	})
})

app.delete("/users/:id", (req, res) => {
	res.status(204).json({
		status: "success"
	})
})

const PORT = process.env.PORT || 3001
app.listen(
	PORT, () => {
		console.log(`Server is up and running on port ${PORT}.`)
	}
)