import axios from 'axios'
// import Matcha from '../apis/Matcha'

const baseUrl = 'http://localhost:3005/users'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  // const response = await Matcha.get(baseUrl)
  // const response = await Matcha.get('/users')
  // console.log(`in getAll users there is response.data:`)
  // console.log(response.data.data.users)
  // console.log(`versus response:`)
  // console.log(response)
  return response.data.users
}

const getUser = async (userId) => {
  // const response = await axios.get(`${baseUrl}/:id`)
  const response = await axios.get(`${baseUrl}/${userId}`)
  // const response = await Matcha.get(baseUrl)
  // const response = await Matcha.get('/users')
  // console.log(`in getUser users.js there is response: ${response}`)
  // console.log(`in getUser it is: ${response.data.user[0].firstname}`)
  // console.log(response.data.data.users)
  // console.log(`versus response:`)
  // console.log(response)
  return response.data.user[0]
}

// const createNew = async (content) => {
//   const object = { content, votes: 0 }
//   const response = await axios.post(baseUrl, object)
//   return response.data
// }

// const voteId = async (anecdote) => {
//   const voteUrl = `${baseUrl}/${anecdote.id}`
//   const votedAnecdote = {
//     ...anecdote,
//     votes: anecdote.votes + 1,
//   }
//   const response = await axios.put(voteUrl, votedAnecdote)
//   return response.data
// }

// module.exports = {

export default {
  getAll,
  getUser,
}
