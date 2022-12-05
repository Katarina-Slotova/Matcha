import React, { useState } from "react"
import Footer from "../components/Footer"
import NavigationBar from "../components/Navbar"
import UploadImage from "../components/UploadImage"
import { useNavigate } from "react-router-dom"
import { Form, FormControl, FormLabel } from "react-bootstrap"

const UserSettings = () => {
	const navigate = useNavigate()
/* 	const [username, setUsername] = useState(null)
	const [email, setEmail] = useState(null)
	const [password, setPassword] = useState(null)
	const [confirmPassword, setConfirmPassword] = useState(null)
	const [firstName, setFirstName] = useState(null)
	const [lastName, setLastName] = useState(null)
	const [age, setAge] = useState(null)
	const [city, setCity] = useState(null)
	const [country, setCountry] = useState(null)
	const [bio, setBio] = useState(null) */
	const [confirmPassword, setConfirmPassword] = useState(null)
	const [formData, setFormData] = useState({
		id: '',
		first_name: '',
		last_name: '',
		user_name: '',
		image: '',
		age: '',
		gender: '',
		gender_interest: '',
		bio: '',
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

	const onSubmit = (event) => {
		event.preventDefault()
		try {
			if (formData.password !== confirmPassword) {
				setError('Passwords do not match!') 
			}
			console.log('make post req to db')
		} catch (error) {
			console.log(error) 
		}
		navigate('/profile')
	}

	return (
		<div>
			<NavigationBar />
			<div class="container py-6 h-50">
				<div class="row justify-content-center align-items-center h-100">
					<div class="col-12 col-lg-9 col-xl-12">
						<div class="card-registration">
							<div class="card-body p-4 p-md-5 settings">
								<h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Modify My Information</h3>
								<Form onSubmit={onSubmit}>
									<section>
										<div class="row">
											<div>
												<div class="form-outline">
													<FormLabel class="form-label" for="user_name">Username</FormLabel>
													<FormControl type="text" id="user-name" name="user_name" class="form-control form-control-lg" value="" onChange={handleChange} required/>
												</div>
											</div>

											<div>
												<div class="form-outline">
													<FormLabel class="form-label" for="email">Email</FormLabel>
													<FormControl type="email" id="email" name="email" class="form-control form-control-lg" value="" onChange={handleChange} required/>
												</div>
											</div>
										</div>


										<div class="row">
											<div>
												<div class="form-outline">
													<FormLabel class="form-label" for="password">Password</FormLabel>
													<FormControl type="password" id="passowrd" name="password" class="form-control form-control-lg" value="" onChange={handleChange} required/>
												</div>
											</div>

											<div>
												<div class="form-outline">
													<FormLabel class="form-label" for="password">Repeat Password</FormLabel>
													<FormControl type="password" id="password-check" name="password-check" class="form-control form-control-lg" value="" onChange={(e) => setConfirmPassword(e.target.value)} required/>
												</div>
											</div>
										</div>

										<div class="row">
											<div>
												<div class="form-outline">
													<FormLabel class="form-label" for="first_name">First Name</FormLabel>
													<FormControl type="text" id="first-name" name="first_name" class="form-control form-control-lg" value="" onChange={handleChange} required/>
												</div>
											</div>

											<div>
												<div class="form-outline">
													<FormLabel class="form-label" for="last_name">Last Name</FormLabel>
													<FormControl type="text" id="last-name" name="last_name" class="form-control form-control-lg" value="" onChange={handleChange} required/>
												</div>
											</div>
										</div>

										<div class="row">
											<div>
												<div class="form-outline datepicker w-100">
													<FormLabel for="age" class="form-label">Age</FormLabel>
													<FormControl type="text" id="age" name="age" class="form-control form-control-lg" value="" onChange={handleChange} required/>
												</div>
											</div>
											<div>
												<FormLabel for="gender" class="form-label">Gender</FormLabel>
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

										<div class="row">
											<div>
												<div class="form-outline">
													<FormLabel class="form-label" for="city">City</FormLabel>
													<FormControl type="text" name="city" class="form-control form-control-lg" value="" onChange={handleChange} required/>
												</div>
											</div>
											<div>
												<div class="form-outline">
													<FormLabel class="form-label" for="country">Country</FormLabel>
													<FormControl type="text" name="country" class="form-control form-control-lg" value="" onChange={handleChange} required/>
												</div>
											</div>
										</div>

										<div class="row">
											<FormLabel for="gender-interest" class="form-label">Show Me</FormLabel>
												<div className="multiple-input-container">
												<FormControl type="radio" id="man-gender-interest" name="gender_interest" value="man" checked={formData.gender_interest === 'man'} onChange={handleChange} />
													<FormLabel htmlFor="man-gender-interest" className="form-label">Men</FormLabel>
													<FormControl type="radio" id="woman-gender-interest" name="gender_interest" value="woman" checked={formData.gender_interest === 'woman'} onChange={handleChange} />
													<FormLabel htmlFor="woman-gender-interest" className="form-label">Women</FormLabel>
													<FormControl type="radio" id="everyone-gender-interest" name="gender_interest" value="everyone" checked={formData.gender_interest === 'everyone'} onChange={handleChange} /> 
													<FormLabel htmlFor="everyone-gender-interest" className="form-label">Everyone</FormLabel>
												</div>
										</div>

										<div class="row">
												<div class="form-outline">
													<FormLabel class="form-label" for="about">About me</FormLabel>
													<FormControl type="text" id="about" name="about" class="form-control form-control-lg" placeholder="I like long walks..." value="" onChange={handleChange} required/>
												</div>
										</div>

										<div class="mt-4 pt-2">
											<input className="col btn btn-purple-moon btn-lg" type="submit" value="Submit" />
										</div>
									</section>

									<section>
										<div>
											<FormLabel class="form-label" for="image">Profile photo</FormLabel>
											{/* <input type="image" id="image" name="image" onChange={handleChange} required/> */}
											<UploadImage />
										</div>
										<div className="photo-container">
											<img src={formData.image} alt="profile-img" />
										</div>
									</section>
								</Form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<hr />
			<Footer />
		</div>
	)
}

export default UserSettings