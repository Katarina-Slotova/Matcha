import { useSelector } from 'react-redux'
// import { voteAnecdote } from './../reducers/anecdoteReducer'
// import { setNotification } from '../reducers/notificationReducer'
import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
// import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

const UserList = () => {
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
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  return (
    <div>
      {sortedList.map((user) => (
        <TinderCard
          key={user.firstname}
          onSwipe={(dir) => swiped(dir, user.firstname)}
          onCardLeftScreen={() => outOfFrame(user.firstname)}
        >
          <div>
            <ListGroup className="list-group-flush user-info">
              <div
                style={{
                  backgroundImage: 'url(' + user.image + ')',
                }}
                className="user-card"
              >
                <h3>{user.firstname}</h3>
              </div>

              <ListGroup.Item>
                Location: {user.city}, {user.country}
              </ListGroup.Item>
              <ListGroup.Item>Interests: Harvesting souls</ListGroup.Item>
              <ListGroup.Item>Bio: {user.bio}</ListGroup.Item>
              <ListGroup.Item>Fame rate: {user.fame}</ListGroup.Item>
            </ListGroup>
          </div>
        </TinderCard>
      ))}
    </div>
  )
}

export default UserList
