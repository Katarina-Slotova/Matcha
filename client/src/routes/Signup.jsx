import React from "react"
import Footer from "../components/Footer"

const createUser = () => {
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
									<form action="">
										<div class="row">
											<div class="col-md-6 mb-4">
												<div class="form-outline">
													<label class="form-label" for="userName">Username</label>
													<input type="text" id="userName" class="form-control form-control-lg" required/>
												</div>
											</div>

											<div class="col-md-6 mb-4">
												<div class="form-outline">
													<label class="form-label" for="emailAddress">Email</label>
													<input type="email" id="emailAddress" class="form-control form-control-lg" required/>
												</div>
											</div>
										</div>


										<div class="row">
											<div class="col-md-6 mb-4">
												<div class="form-outline">
													<label class="form-label" for="firstName">Password</label>
													<input type="password" id="firstName" class="form-control form-control-lg" required/>
												</div>
											</div>

											<div class="col-md-6 mb-4">
												<div class="form-outline">
													<label class="form-label" for="firstName">Repeat Password</label>
													<input type="password" id="firstName" class="form-control form-control-lg" required/>
												</div>
											</div>
										</div>

										<div class="row">
											<div class="col-md-6 mb-4">
												<div class="form-outline">
													<label class="form-label" for="firstName">First Name</label>
													<input type="text" id="firstName" class="form-control form-control-lg" required/>
												</div>
											</div>

											<div class="col-md-6 mb-4">
												<div class="form-outline">
													<label class="form-label" for="lastName">Last Name</label>
													<input type="text" id="lastName" class="form-control form-control-lg" required/>
												</div>
											</div>
										</div>

										<div class="row">
											<div class="col-md-6 mb-4 d-flex align-items-center">
												<div class="form-outline datepicker w-100">
													<label for="age" class="form-label">Age</label>
													<input type="text" class="form-control form-control-lg" id="age" required/>
												</div>
											</div>
											<div class="col-md-6 mb-4">
											<label for="age" class="form-label">Gender</label>
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
													<label class="form-label" for="city">City</label>
													<input type="text" id="city" class="form-control form-control-lg" required/>
												</div>
											</div>
											<div class="col-md-6 mb-4 pb-2">
												<div class="form-outline">
													<label class="form-label" for="country">Country</label>
													<input type="text" id="country" class="form-control form-control-lg" required/>
												</div>
											</div>
										</div>

										<div class="row">
											<label class="form-label select-label">I am interested in</label>
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
											<input class="btn btn-primary btn-lg" type="submit" value="Submit" />
										</div>
									</form>
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

export default createUser