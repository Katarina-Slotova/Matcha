import { configureStore } from '@reduxjs/toolkit'

import usersReducer from './reducers/userReducer'
// import cookieReducer from './reducers/cookieReducer'
// import anecdotesReducer from './reducers/anecdoteReducer'
// import notificationReducer from './reducers/notificationReducer'
// import filterReducer from './reducers/filterReducer'

const store = configureStore({
  reducer: {
    // cookies: cookieReducer,
    users: usersReducer,
    // anecdotes: anecdotesReducer,
    // notifications: notificationReducer,
    // filters: filterReducer,
  },
})

export default store
