import TinderCard from 'react-tinder-card'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState, useEffect } from 'react'
import ChatContainer from '../components/ChatContainer'
import NavigationBar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios'
import { useCookies } from 'react-cookie'

const db = [
	{
	  name: 'Richard Hendricks',
	  url: 'woman.jpg'
	},
	{
	  name: 'Erlich Bachman',
	  url: 'woman.jpg'
	},
	{
	  name: 'Monica Hall',
	  url: 'woman.jpg'
	},
	{
	  name: 'Jared Dunn',
	  url: 'woman.jpg'
	},
	{
	  name: 'Dinesh Chugtai',
	  url: 'woman.jpg'
	}
]

const Dashboard = () => {
	const [user, setUser] = useState()
	const [lastDirection, setLastDirection] = useState()
	const [cookies, setCookie, removeCookie] = useCookies(['user'])
	const [genderedUsers, setGenderedUsers] = useState()
	
	const userId = cookies.UserId
	const getUser = async () => {
		try {
			const results = await axios.get('http://localhost:3005/user', {
				params: { userId }
			})
			console.log(results.data)
			setUser(results.data)
		}
		catch (err) {
			console.log(err)
		}
	}
	
	const getUsersByGender = async () => {
		try {	
			const results = await axios.get('http://localhost:3005/gendered-users', {
				params: { gender: 'man' }
			})
			console.log("This is gendered users", results.data)
			setGenderedUsers(results.data.users)
		}
		catch (err) {
			console.log(err)
		}
	}

	// every time user changes, this function will be called
	useEffect(() => {
		getUser()
		getUsersByGender()
	//}, [user, genderedUsers])
	}, [])

/* 	console.log('id', userId)
	console.log('user', user)
	console.log('selected users', genderedUsers) */

	const characters = db
	
	const updateMatches = async (matchedUserId) => {
		try {
			await axios.post('http://localhost:3005/addmatch', {
				userId, 
				matchedUserId
			})
		} catch (err) {
			console.log(err)
		}
	} 

	const swiped = (direction, swipedUserId ) => {
		if(direction === 'right'){
			updateMatches(swipedUserId)
		}
		setLastDirection(direction)
	}
  
	const outOfFrame = (name) => {
	  console.log(name + ' left the screen!')
	}

	return (
		<>
			{ user && genderedUsers ? <NavigationBar user={user} /> : <p></p> }
			<div className="dashboard">
				<ChatContainer />
				<div className="swipe-container">
				<div className='like-info'>
							{lastDirection ? <p>You liked this user! Check out your matches for more info.</p> : <p></p>}
						</div>
					<div className="card-container">
						{user && genderedUsers ? genderedUsers.map((character) =>
							<TinderCard key={character.username} onSwipe={(dir) => swiped(dir, character.id)} onCardLeftScreen={() => outOfFrame(character.username)}>
								<div>
									<ListGroup className="list-group-flush user-info">
								<div style={{ backgroundImage: 'url(' + character.image + ')' }} className='user-card'>
									<h3>{character.username}</h3>
								</div>
										{/* <ListGroup.Item><Card.Link className='link' href="/profile">User's Name</Card.Link></ListGroup.Item> */}
										<ListGroup.Item>Location</ListGroup.Item>
										<ListGroup.Item>Interests</ListGroup.Item>
										<ListGroup.Item>Hashtags</ListGroup.Item>
										<ListGroup.Item>Fame rate</ListGroup.Item>
									</ListGroup>
								</div>
							</TinderCard>			
						) : <p></p>}
					</div>
				</div>
			</div>
			{/* <hr/> */}
			{/* <Footer /> */}
		</>
	)
}

export default Dashboard