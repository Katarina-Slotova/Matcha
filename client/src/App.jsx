import React, {useState} from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./routes/Home"
import Landing from "./routes/Landing"
import Matches from "./routes/Matches"
import Profile from "./routes/Profile"
import UserSettings from "./routes/UserSettings"
import Login from "./routes/Login"
import Signup from "./routes/Signup"
import { UsersContextProvider } from './context/UsersContext'
import './styles.css'
import Dashboard from "./routes/Dashboard"

const App = () => {
	const [user, setUser] = useState(null)
	const [message, setMessage] = useState(null)

	const login = (user) => {
		setUser(user)
		setMessage(`welcome ${user}`)
		setTimeout(() => {
			setMessage(null)
		}, 5000)
	}

	return (
		<UsersContextProvider>
			<div>
				<Router>
					<Routes>
						<Route path="/" element={<Landing />}></Route>
						<Route path="/home" element={<Home />}></Route>
						<Route path="/matches" element={<Matches />}></Route>
						<Route path="/profile" element={<Profile />}></Route>
						<Route path="/settings" element={<UserSettings />}></Route>
						<Route path="/login" element={<Login onLogin={login}/>}></Route>
						<Route path="/signup" element={<Signup />}></Route>
						<Route path="/dashboard" element={<Dashboard />}></Route>
					</Routes>
				</Router>
			</div>
		</UsersContextProvider>
	)
}

export default App