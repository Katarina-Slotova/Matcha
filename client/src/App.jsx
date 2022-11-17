import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./routes/Home"
import User from "./routes/Profile"
import UserSettings from "./routes/UserSettings"

const App = () => {
	return (
		<div>
			<Router>
				<Routes>
					<Route path="/home" element={<Home />}></Route>
					<Route path="/profile" element={<User />}></Route>
					<Route path="/matches" element={<UserSettings />}></Route>
					<Route path="/settings" element={<UserSettings />}></Route>
				</Routes>
			</Router>
		</div>
	)
}

export default App