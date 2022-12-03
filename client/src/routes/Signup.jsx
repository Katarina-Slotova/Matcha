import React, { useState } from "react"
import Footer from "../components/Footer"
import { useNavigate } from "react-router-dom"
import { Form, FormControl, FormLabel } from "react-bootstrap"


const Signup = () => {
	const navigate = useNavigate()
	const [username, setUsername] = useState(null)
	const [email, setEmail] = useState(null)
	const [password, setPassword] = useState(null)
	const [confirmPassword, setConfirmPassword] = useState(null)
	const [firstName, setFirstName] = useState(null)
	const [lastName, setLastName] = useState(null)
	const [age, setAge] = useState(null)
	const [city, setCity] = useState(null)
	const [country, setCountry] = useState(null)
	const [error, setError] = useState(null)

	const onSubmit = (event) => {
		event.preventDefault()
		try {
			if (password !== confirmPassword) {
				setError('Passwords do not match!') 
			}
			console.log('make post req to db')
		} catch (error) {
			console.log(error) 
		}
		navigate('/home')
	}

	return (
		<div class="gradient-custom">
			<h1 class="text-light landing-heading">Create an account</h1>
			<section class="vh-100">
				<div class="container py-6 h-50">
					<div class="row justify-content-center align-items-center h-100">
						<div class="col-12 col-lg-9 col-xl-7">
							<div class="card shadow-2-strong card-registration">
								<div class="card-body p-4 p-md-5 settings">
									<h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
									<Form onSubmit={onSubmit}>
									<section style={{width: "100%"}}>
										<div class="row">
											<div>
												<div class="form-outline">
													<FormLabel class="form-label" for="user_name">Username</FormLabel>
													<FormControl type="text" id="user-name" name="user_name" class="form-control form-control-lg" value="" onChange={(e) => setUsername(e.target.value)} required/>
												</div>
											</div>

											<div>
												<div class="form-outline">
													<FormLabel class="form-label" for="email">Email</FormLabel>
													<FormControl type="email" id="email" name="email" class="form-control form-control-lg" value="" onChange={(e) => setEmail(e.target.value)} required/>
												</div>
											</div>
										</div>


										<div class="row">
											<div>
												<div class="form-outline">
													<FormLabel class="form-label" for="password">Password</FormLabel>
													<FormControl type="password" id="passowrd" name="password" class="form-control form-control-lg" value="" onChange={(e) => setPassword(e.target.value)} required/>
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
													<FormControl type="text" id="first-name" name="first_name" class="form-control form-control-lg" value="" onChange={(e) => setFirstName(e.target.value)} required/>
												</div>
											</div>

											<div>
												<div class="form-outline">
													<FormLabel class="form-label" for="last_name">Last Name</FormLabel>
													<FormControl type="text" id="last-name" name="last_name" class="form-control form-control-lg" value="" onChange={(e) => setLastName(e.target.value)} required/>
												</div>
											</div>
										</div>

										<div class="row">
											<div>
												<div class="form-outline datepicker w-100">
													<FormLabel for="age" class="form-label">Age</FormLabel>
													<FormControl type="text" id="age" name="age" class="form-control form-control-lg" value="" onChange={(e) => setAge(e.target.value)} required/>
												</div>
											</div>
											<div>
												<FormLabel for="gender" class="form-label">Gender</FormLabel>
												<div className="multiple-input-container">
													<input type="radio" id="man-gender-identity" name="gender_identity" value="man" onChange={'#'} checked={false} required />
													<FormLabel for="gender" class="form-label">Man</FormLabel>
													<input type="radio" id="woman-gender-identity" name="gender_identity" value="woman" onChange={'#'} checked={false} required />
													<FormLabel for="gender" class="form-label">Woman</FormLabel>
													<input type="radio" id="other-gender-identity" name="gender_identity" value="other" onChange={'#'} checked={false} required />
													<FormLabel for="gender" class="form-label">Other</FormLabel>
												</div>
												{/* <select class="form-select" style={{height: "48px"}}>
													<option value="1" disabled>Choose gender</option>
													<option value="2">Female</option>
													<option value="3">Male</option>
													<option value="4">Other</option>
												</select>	 */}
											</div>
										</div>

										<div class="row">
											<div>
												<div class="form-outline">
													<FormLabel class="form-label" for="city">City</FormLabel>
													<FormControl type="text" name="city" class="form-control form-control-lg" value="" onChange={(e) => setCity(e.target.value)} required/>
												</div>
											</div>
											<div>
												<div class="form-outline">
													<FormLabel class="form-label" for="country">Country</FormLabel>
													<FormControl type="text" name="country" class="form-control form-control-lg" value="" onChange={(e) => setCountry(e.target.value)} required/>
												</div>
											</div>
										</div>

										<div class="row">
											{/* <FormLabel for="interest" class="form-label select-label">I am interested in</FormLabel>
												<div class="col-12">
													<select class="form-select">
														<option value="1" disabled>Choose option</option>
														<option value="2">Men</option>
														<option value="3">Women</option>
														<option value="4">Both</option>
													</select> 
											*/}
											<FormLabel for="gender-interest" class="form-label">Show Me</FormLabel>
												<div className="multiple-input-container">
													<input type="radio" id="man-gender-interest" name="gender_interest" value="man" onChange={'#'} checked={false} required />
													<FormLabel for="man-gender-interest" class="form-label">Men</FormLabel>
													<input type="radio" id="woman-gender-interest" name="gender_interest" value="woman" onChange={'#'} checked={false} required />
													<FormLabel for="man-gender-interest" class="form-label">Women</FormLabel>
													<input type="radio" id="everyone-gender-interest" name="gender_interest" value="everyone" onChange={'#'} checked={false} required /> 
													<FormLabel for="more-gender-interest" class="form-label">Everyone</FormLabel>
												</div>
										</div>

										<div class="mt-4 pt-2">
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