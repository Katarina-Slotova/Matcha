import React from "react"
import Footer from "../components/Footer"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import NavigationBar from "../components/Navbar"

const Profile = () => {
	const navigate = useNavigate()

	const navigateUserSettings = () => {
		navigate('/settings')
	}

	return (
		<div>
			<NavigationBar />
			<div style={{padding: "10px"}}>
				<Button className="col btn btn-purple-moon btn-lg" onClick={navigateUserSettings}>Modify my information</Button>
			</div>
		<hr />
		<Footer />
		</div>
	)
}

export default Profile