import React from "react"
import NavigationBar from "../components/Navbar"
import Footer from "../components/Footer"
import UserCard from "../components/UserCard"

const Home = () => {
	return (
		<div>
			<NavigationBar />
			<UserCard />
			<UserCard />
			<Footer />
		</div>
	)
}

export default Home