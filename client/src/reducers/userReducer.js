import { createSlice } from '@reduxjs/toolkit'
import userService from '../services/users'

const userSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    setUsers(state, action) {
      return action.payload
    },
    setUser(state, action) {
      return action.payload
    },
  },
})

export const { setUsers, setUser } = userSlice.actions

export const initializeUsers = () => {
  return async (dispatch) => {
    const users = await userService.getAll()
    dispatch(setUsers(users))
  }
}

export const getUser = (userId) => {
  return async (dispatch) => {
    const user = await userService.getUser(userId)
    dispatch(setUser(user))
  }
}

export default userSlice.reducer

// const getUser = async () => {
//   try {
//     const results = await axios.get('http://localhost:3005/user', {
//       params: { userId },
//     })
//     setUser(results.data)
//   } catch (err) {
//     console.log(err)
//   }
// }
