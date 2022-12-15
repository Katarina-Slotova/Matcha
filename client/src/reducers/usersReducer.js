import { createSlice } from '@reduxjs/toolkit'
import userService from '../services/users'

const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    setUsers(state, action) {
      return action.payload
    },
  },
})

export const { setUsers } = usersSlice.actions

export const initializeUsers = () => {
  return async (dispatch) => {
    const users = await userService.getAll()
    dispatch(setUsers(users))
  }
}

export default usersSlice.reducer

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
