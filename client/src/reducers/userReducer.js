import { createSlice } from '@reduxjs/toolkit'
import userService from '../services/users'

const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    setUser(state, action) {
      return (state = action.payload)
    },
  },
})

export const { setUser } = userSlice.actions

// export const initializeUsers = () => {
//   return async (dispatch) => {
//     const users = await userService.getAll()
//     dispatch(setUsers(users))
//   }
// }

export const initializeUser = (userId) => {
  return async (dispatch) => {
    const user = await userService.getUser(userId)
    dispatch(setUser(user))
  }
}

// export const checkLogin = (userId) => {
//   return async (dispatch) => {
//     const user = await userService.getUser(userId)
//     dispatch(setUser(user))
//   }
// }

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
