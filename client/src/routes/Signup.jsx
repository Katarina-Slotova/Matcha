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
								<div class="card-body p-4 p-md-5">
									<h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
									<Form onSubmit={onSubmit}>
										<div class="row">
											<div class="col-md-6 mb-4">
												<div class="form-outline">
													<FormLabel class="form-label" for="userName">Username</FormLabel>
													<FormControl type="text" id="userName" class="form-control form-control-lg" onChange={(e) => setUsername(e.target.value)} required/>
												</div>
											</div>

											<div class="col-md-6 mb-4">
												<div class="form-outline">
													<FormLabel class="form-label" for="email">Email</FormLabel>
													<FormControl type="email" id="email" class="form-control form-control-lg" onChange={(e) => setEmail(e.target.value)} required/>
												</div>
											</div>
										</div>


										<div class="row">
											<div class="col-md-6 mb-4">
												<div class="form-outline">
													<FormLabel class="form-label" for="password">Password</FormLabel>
													<FormControl type="password" id="password" class="form-control form-control-lg" onChange={(e) => setPassword(e.target.value)} required/>
												</div>
											</div>

											<div class="col-md-6 mb-4">
												<div class="form-outline">
													<FormLabel class="form-label" for="password-check">Repeat Password</FormLabel>
													<FormControl type="password" id="password-check" class="form-control form-control-lg" onChange={(e) => setConfirmPassword(e.target.value)} required/>
												</div>
											</div>
										</div>

										<div class="row">
											<div class="col-md-6 mb-4">
												<div class="form-outline">
													<FormLabel class="form-label" for="firstname">First Name</FormLabel>
													<FormControl type="text" id="firstname" class="form-control form-control-lg" onChange={(e) => setFirstName(e.target.value)} required/>
												</div>
											</div>

											<div class="col-md-6 mb-4">
												<div class="form-outline">
													<FormLabel class="form-label" for="lastname">Last Name</FormLabel>
													<FormControl type="text" id="lastname" class="form-control form-control-lg" onChange={(e) => setLastName(e.target.value)} required/>
												</div>
											</div>
										</div>

										<div class="row">
											<div class="col-md-6 mb-4 d-flex align-items-center">
												<div class="form-outline datepicker w-100">
													<FormLabel for="age" class="form-label">Age</FormLabel>
													<FormControl type="text" id="age" class="form-control form-control-lg" onChange={(e) => setAge(e.target.value)} required/>
												</div>
											</div>
											<div class="col-md-6 mb-4">
											<FormLabel for="gender" class="form-label">Gender</FormLabel>
												<select class="form-select" style={{height: "48px"}}>
													<option value="1" disabled>Choose gender</option>
													<option value="2">Female</option>
													<option value="3">Male</option>
													<option value="4">Other</option>
												</select>	
											</div>
										</div>

										<div class="row">
											<div class="col-md-6 mb-4 pb-2">
												<div class="form-outline">
													<FormLabel class="form-label" for="city">City</FormLabel>
													<FormControl type="text" id="city" class="form-control form-control-lg" onChange={(e) => setCity(e.target.value)} required/>
												</div>
											</div>
											<div class="col-md-6 mb-4 pb-2">
												<div class="form-outline">
													<FormLabel class="form-label" for="country">Country</FormLabel>
													<FormControl type="text" id="country" class="form-control form-control-lg" onChange={(e) => setCountry(e.target.value)} required/>
												</div>
											</div>
										</div>

										<div class="row">
											<FormLabel for="interest" class="form-label select-label">I am interested in</FormLabel>
											<div class="col-12">
												<select class="form-select">
													<option value="1" disabled>Choose option</option>
													<option value="2">Men</option>
													<option value="3">Women</option>
													<option value="4">Both</option>
												</select>
											</div>
										</div>

										<div class="mt-4 pt-2">
											<input className="col btn btn-purple-moon btn-lg" type="submit" value="Submit" />
										</div>
									</Form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	)
}

export default Signup