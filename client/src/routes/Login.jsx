import React from "react"
import Footer from "../components/Footer"

const loginUser = () => {
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
									<form action="">
										<div class="row">
											<div class="col-md-6 mb-4">
												<div class="form-outline">
													<input type="text" id="firstName" class="form-control form-control-lg" required/>
													<label class="form-label" for="firstName">Username</label>
												</div>
											</div>

											<div class="col-md-6 mb-4">
												<div class="form-outline">
													<input type="text" id="lastName" class="form-control form-control-lg" required/>
													<label class="form-label" for="lastName">Email</label>
												</div>
											</div>
										</div>


										<div class="row">
											<div class="col-md-6 mb-4">
												<div class="form-outline">
													<input type="text" id="firstName" class="form-control form-control-lg" required/>
													<label class="form-label" for="firstName">Password</label>
												</div>
											</div>
										</div>

										<div class="mt-4 pt-2">
											<input class="btn btn-primary btn-lg" type="submit" value="Login" />
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

export default loginUser