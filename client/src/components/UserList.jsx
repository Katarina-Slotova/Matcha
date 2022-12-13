import { useSelector, useDispatch } from 'react-redux'
// import { voteAnecdote } from './../reducers/anecdoteReducer'
// import { setNotification } from '../reducers/notificationReducer'

const UserList = () => {
  const dispatch = useDispatch()
  const users = useSelector(({ users }) => users)
  // const filters = useSelector(({ filters }) => filters)

  var sortedList = [...users]
  // sortedList.sort((a, b) => b.votes - a.votes)

  // if (filters.length > 0) {
  //   const filteredList = sortedList.filter((a) =>
  //     a.content.toLowerCase().includes(filters.toLowerCase())
  //   )
  //   sortedList = filteredList
  // }
  // sortedList.sort((a, b) => b.votes - a.votes)
  return (
    <div>
      {sortedList.map((user) => (
        <div key={user.id}>
          <div>name: {user.firstname}</div>
          {/* <div>
            has {user.votes}
            <button
              onClick={() => {
                dispatch(voteAnecdote(user))
                dispatch(setNotification(`you voted '${user.content}'`, 5))
              }}
            >
              vote
            </button>
          </div> */}
        </div>
      ))}
    </div>
  )
}

export default UserList
