import React from "react"
import Footer from "../components/Footer"
import { useNavigate } from "react-router-dom"
import { Form, FormControl, FormGroup, FormLabel } from "react-bootstrap"

const Login = () => {
	const navigate = useNavigate()

	const onSubmit = (event) => {
		event.preventDefault()
		//props.onLogin('mluukkai')
		/* calling navigate('/') causes the browser's url to change to / and the application renders the corresponding component Home */
		navigate('/home')
	}

	return (
		<div class="gradient-custom">
			<h1 class="text-light landing-heading">Log in to your account</h1>
			<section class="vh-100">
				<div class="container py-6 h-50">
					<div class="row justify-content-center align-items-center h-100">
						<div class="col-12 col-lg-9 col-xl-7">
							<div class="card shadow-2-strong card-registration">
								<div class="card-body p-4 p-md-5">
									<h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Login Form</h3>
									<Form onSubmit={onSubmit}>
										<div class="row">
											<div class="col-md-6 mb-4">
												<FormControl type="text" id="firstName" class="form-control form-control-lg" required/>
												<FormLabel class="form-label" for="firstName">Username</FormLabel>
											</div>

											<div class="col-md-6 mb-4">
												<FormControl type="email" id="lastName" class="form-control form-control-lg" required/>
												<FormLabel class="form-label" for="lastName">Email</FormLabel>
											</div>
										</div>

										<div class="row">
											<div class="col-md-6 mb-4">
												<FormControl type="password" id="firstName" class="form-control form-control-lg" required/>
												<FormLabel class="form-label" for="firstName">Password</FormLabel>
											</div>
										</div>

										<div class="mt-4 pt-2">
											<input class="col btn btn-purple-moon btn-lg" type="submit" value="Login" />
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

export default Login