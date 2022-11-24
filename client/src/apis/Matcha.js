import axios from 'axios'

// create an axios instance
export default axios.create({
	baseURL: "http://localhost:3000"
})