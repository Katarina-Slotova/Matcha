import { createSlice } from '@reduxjs/toolkit'
// import userService from '../services/users'

const cookieSlice = createSlice({
  name: 'cookies',
  initialState: 'user',
  reducers: {
    setCookie(state, action) {
      return action.payload
    },
    removeCookie(state, action) {
      return 'user'
    },
  },
})

export const { setCookie, removeCookie } = cookieSlice.actions

// export const initializeUsers = () => {
//   return async (dispatch) => {
//     const users = await userService.getAll()
//     dispatch(setUsers(users))
//   }
// }

export default cookieSlice.reducer

// const [cookies, setCookie, removeCookie] = useCookies(['user'])
