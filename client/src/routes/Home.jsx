import React, { useEffect, useContext } from "react"
import Matcha from "../apis/Matcha"
import NavigationBar from "../components/Navbar"
import Footer from "../components/Footer"
import UserCard from "../components/UserCard"
import { UsersContext } from "../context/UsersContext"

const Home = (props) => {
	const {users, setUsers} = useContext(UsersContext)
	// fetch data from db as soon as this component mounts onto the screen --> with useEffet hook
	// run the hook only when we mount the component for the first time and nto every time the component re-renders, that will result in a loop
	// by passing an empty dependency array as the second parameter to useEffect, we will avoid re-rendering
	// useEffect will have to deal with asynchronus code --> therefore we need to use await with try/catch, like in the backend
	useEffect(() => {
		//Effect callbacks are synchronous to prevent race conditions. Put the async function inside:
		const fetchData = async () => {
			try {
				// make an api call to the backend
				// this will just grab the url we have specified in the apis folder and add /home at the end
				const response = await Matcha.get("/home")
				setUsers(response.data.data.users) // not sure about the users part yet, depends how we set up the db
				console.log(response)
			} catch (err) {}
		}

		fetchData()
	}, [])
	// all the data that useEffect returns must be saved somewhere --> that is why we have context api --> useContext for that

	return (
		<div>
			<NavigationBar />
			{/* Potentially, there is a chance that we are unable to retrieve data quick enough.
			That means that our app would try to render out users that does not exist
			To fix that, we can add "users &&" condition, so that the code is run only if users exists, 
			i.e. if we successfully fetched the data from backend */}
			{users && users.map(user => {
				return (
					// remember to pass a key prop, otherwise the console will show an error
					<UserCard key={user.id}/>
				)
			})}
			<UserCard />
			<UserCard />
			<Footer />
		</div>
	)
}

export default Home