const { Pool } = require('pg')

// Pool does the connecting to the postrges db
// pools will use environment variables for connection information
// no need to specify anything in the object in Pool as long as the enames of env variables are not changed; it knows automatically what vars to look for in .env file
/* const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: 'matcha',
	password: '123456',
	port: 5432,
}) */

const pool = new Pool()

module.exports = {
  query: (text, params) => pool.query(text, params),
}