import React, { useState } from "react"
import Footer from "../components/Footer"
import { useNavigate } from "react-router-dom"
import { Form, FormControl, FormLabel } from "react-bootstrap"
import axios from 'axios' 


const Signup = () => {
	const navigate = useNavigate()
/* 	const [username, setUsername] = useState(null)
	const [email, setEmail] = useState(null)
	const [password, setPassword] = useState(null)
	const [confirmPassword, setConfirmPassword] = useState(null)
	const [firstName, setFirstName] = useState(null)
	const [lastName, setLastName] = useState(null)
	const [age, setAge] = useState(null)
	const [city, setCity] = useState(null)
	const [country, setCountry] = useState(null) */
	const [confirmPassword, setConfirmPassword] = useState()
	const [formData, setFormData] = useState({
		first_name: '',
		last_name: '',
		user_name: '',
		age: '',
		gender_identity: 'man',
		gender_interest: 'everyone',
		city: '',
		country: '',
		password: '',
		email: ''
	})
	const [error, setError] = useState(null)

	const handleChange = (e) => {
		// get the value and name from the inputs
		const value = e.target.value
		const name = e.target.name
		
		setFormData((prevState) => ({
			// get the whole previous State
			...prevState,
			// update the values by searching for the names
			[name]: value
		}))
	}

	console.log(formData)

	const onSubmit = async (e) => {
		e.preventDefault()
		try {
			if (formData.password !== confirmPassword) {
				setError('Passwords do not match!') 
				return
			}

			const response = await axios.post('http://localhost:3005/signup', {
				firstname: formData.first_name,
				lastname: formData.last_name, 
				username: formData.user_name, 
				age: formData.age, 
				gender_identity: formData.gender_identity, 
				gender_interest: formData.gender_interest,
				city: formData.city, 
				country: formData.country, 
				password: formData.password, 
				email: formData.email
			})
			console.log(response)
			if (response.status ===  201) {
				navigate('/dashboard') 
			}

		} catch (error) {
			console.log(error) 
		}
	}

	return (
		<div className="gradient-custom">
			<h1 className="text-light landing-heading">Create an account</h1>
			<section className="vh-100">
				<div className="container py-6 h-50">
					<div className="row justify-content-center align-items-center h-100">
						<div className="col-12 col-lg-9 col-xl-7">
							<div className="card shadow-2-strong card-registration">
								<div className="card-body p-4 p-md-5 settings">
									<h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
									<Form onSubmit={onSubmit}>
									<section style={{width: "100%"}}>
										<div className="row">
											<div>
												<div className="form-outline">
													<FormLabel className="form-label" htmlFor="user_name">Username</FormLabel>
													<FormControl type="text" id="user-name" name="user_name" className="form-control form-control-lg" value={formData.user_name} onChange={handleChange} required/>
												</div>
											</div>

											<div>
												<div className="form-outline">
													<FormLabel className="form-label" htmlFor="email">Email</FormLabel>
													<FormControl type="email" id="email" name="email" className="form-control form-control-lg" value={formData.email} onChange={handleChange} required/>
												</div>
											</div>
										</div>


										<div className="row">
											<div>
												<div className="form-outline">
													<FormLabel className="form-label" htmlFor="password">Password</FormLabel>
													<FormControl type="password" id="passowrd" name="password" className="form-control form-control-lg" value={formData.password} onChange={handleChange} required/>
												</div>
											</div>

											<div>
												<div className="form-outline">
													<FormLabel className="form-label" htmlFor="password">Repeat Password</FormLabel>
													<FormControl type="password" id="password-check" name="password-check" className="form-control form-control-lg" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
												</div>
											</div>
										</div>

										<div className="row">
											<div>
												<div className="form-outline">
													<FormLabel className="form-label" htmlFor="first_name">First Name</FormLabel>
													<FormControl type="text" id="first-name" name="first_name" className="form-control form-control-lg" value={formData.first_name} onChange={handleChange} required/>
												</div>
											</div>

											<div>
												<div className="form-outline">
													<FormLabel className="form-label" htmlFor="last_name">Last Name</FormLabel>
													<FormControl type="text" id="last-name" name="last_name" className="form-control form-control-lg" value={formData.last_name} onChange={handleChange} required/>
												</div>
											</div>
										</div>

										<div className="row">
											<div>
												<div className="form-outline datepicker w-100">
													<FormLabel htmlFor="age" className="form-label">Age</FormLabel>
													<FormControl type="text" id="age" name="age" className="form-control form-control-lg" value={formData.age} onChange={handleChange} required/>
												</div>
											</div>
											<div>
												<FormLabel htmlFor="gender-identity" className="form-label">Gender</FormLabel>
												<div className="multiple-input-container">
													<FormControl type="radio" id="man-gender-identity" name="gender_identity" value="man" checked={formData.gender_identity === 'man'} onChange={handleChange} />
													<FormLabel htmlFor="man-gender-identity" className="form-label">Man</FormLabel>
													<FormControl type="radio" id="woman-gender-identity" name="gender_identity" value="woman" checked={formData.gender_identity === 'woman'} onChange={handleChange} />
													<FormLabel htmlFor="woman-gender-identity" className="form-label">Woman</FormLabel>
													<FormControl type="radio" id="other-gender-identity" name="gender_identity" value="other" checked={formData.gender_identity === 'other'} onChange={handleChange} />
													<FormLabel htmlFor="other-gender-identity" className="form-label">Other</FormLabel>
												</div>
											</div>
										</div>

										<div className="row">
											<div>
												<div className="form-outline">
													<FormLabel className="form-label" htmlFor="city">City</FormLabel>
													<FormControl type="text" name="city" className="form-control form-control-lg" value={formData.city} onChange={handleChange} required/>
												</div>
											</div>
											<div>
												<div className="form-outline">
													<FormLabel className="form-label" htmlFor="country">Country</FormLabel>
													<FormControl type="text" name="country" className="form-control form-control-lg" value={formData.country} onChange={handleChange} required/>
												</div>
											</div>
										</div>

										<div className="row">
											<FormLabel htmlFor="gender-interest" className="form-label">Show Me</FormLabel>
												<div className="multiple-input-container">
													<FormControl type="radio" id="man-gender-interest" name="gender_interest" value="man" checked={formData.gender_interest === 'man'} onChange={handleChange} />
													<FormLabel htmlFor="man-gender-interest" className="form-label">Men</FormLabel>
													<FormControl type="radio" id="woman-gender-interest" name="gender_interest" value="woman" checked={formData.gender_interest === 'woman'} onChange={handleChange} />
													<FormLabel htmlFor="woman-gender-interest" className="form-label">Women</FormLabel>
													<FormControl type="radio" id="everyone-gender-interest" name="gender_interest" value="everyone" checked={formData.gender_interest === 'everyone'} onChange={handleChange} /> 
													<FormLabel htmlFor="everyone-gender-interest" className="form-label">Everyone</FormLabel>
												</div>
										</div>

										<div className="mt-4 pt-2">
											<input className="col btn btn-purple-moon btn-lg" type="submit" value="Submit" />
										</div>
									</section>
								</Form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<hr />
			<Footer />
		</div>
	)
}

export default Signup