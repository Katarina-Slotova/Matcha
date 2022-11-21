import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./routes/Home"
import Landing from "./routes/Landing"
import Matches from "./routes/Matches"
import Profile from "./routes/Profile"
import UserSettings from "./routes/UserSettings"
import Login from "./routes/Login"
import Signup from "./routes/Signup"
import './styles.css'

const App = () => {
	return (
		<div>
			<Router>
				<Routes>
					<Route path="/" element={<Landing />}></Route>
					<Route path="/home" element={<Home />}></Route>
					<Route path="/matches" element={<Matches />}></Route>
					<Route path="/profile" element={<Profile />}></Route>
					<Route path="/settings" element={<UserSettings />}></Route>
					<Route path="/login" element={<Login />}></Route>
					<Route path="/signup" element={<Signup />}></Route>
				</Routes>
			</Router>
		</div>
	)
}

export default App