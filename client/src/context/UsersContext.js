import React, { useState, createContext } from "react"

export const UsersContext = createContext()

// create context provider component - this will make sure that all the components will have access to the list of all our users
// so we don't need to pass props anywhere
export const UsersContextProvider = props => {
	// create an array that stores the list of all the users that we fetch from the backend
	// setRestaurants is the function that will update the list of users
	const [users, setUsers] = useState([])
	return (
		// as value we will have a key:value pair: we pass an object that has the property called users and we pass our users array into this property
		// we also need to pass setUsers function, which will update the list of users
		<UsersContext.Provider value={{users: users, setUsers}}>
			{props.children}
		</UsersContext.Provider>
	)
}

// we import this context provider component in the App