import React, {useState} from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Landing from "./routes/Landing"
import Matches from "./routes/Matches"
import Profile from "./routes/Profile"
import UserSettings from "./routes/UserSettings"
import Login from "./routes/Login"
import Signup from "./routes/Signup"
import { UsersContextProvider } from './context/UsersContext'
import './styles.css'
import Dashboard from "./routes/Dashboard"
import { useCookies } from 'react-cookie'

const App = () => {
	const [user, setUser] = useState(null)
	const [message, setMessage] = useState(null)
	const [cookies, setCookie, removeCookie] = useCookies(['user'])
	const authToken = cookies.AuthToken

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
						{authToken && <Route path="/dashboard" element={<Dashboard />}></Route>}
						{authToken && <Route path="/matches" element={<Matches />}></Route>}
						{authToken && <Route path="/profile" element={<Profile />}></Route>}
						{authToken && <Route path="/settings" element={<UserSettings />}></Route>}
						<Route path="/login" element={<Login onLogin={login}/>}></Route>
						<Route path="/signup" element={<Signup />}></Route>
					</Routes>
				</Router>
			</div>
		</UsersContextProvider>
	)
}

export default App