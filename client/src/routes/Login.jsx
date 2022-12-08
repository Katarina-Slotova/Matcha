import React, { useState } from "react"
import Footer from "../components/Footer"
import { useNavigate } from "react-router-dom"
import { Form, FormControl, FormLabel } from "react-bootstrap"
import axios from 'axios'
import { useCookies } from 'react-cookie'

const Login = ({ setToken }) => {
	const navigate = useNavigate()
	const [email, setEmail] = useState()
	const [password, setPassword] = useState()
	const [error, setError] = useState(null)
	const [cookie, setCookie, removeCookie] = useCookies(['user'])

	const onSubmit = async (event) => {
		event.preventDefault()
		try {
			const response = await axios.post('http://localhost:3005/login', {
				email,
				password
			})
			console.log(response)
			
			setCookie('AuthToken', response.data.token)
			setCookie('UserId', response.data.id)

			if (response.status ===  201) {
				navigate('/dashboard') 
			}

		} catch (error) {
			console.log(error) 
		}
	}

	return (
		<div className="gradient-custom">
			<h1 className="text-light landing-heading">Log in to your account</h1>
			<section className="vh-100">
				<div className="container py-6 h-50">
					<div className="row justify-content-center align-items-center h-100">
						<div className="col-12 col-lg-9 col-xl-7">
							<div className="card shadow-2-strong card-registration">
								<div className="card-body p-4 p-md-5">
									<h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Login Form</h3>
									<Form onSubmit={onSubmit}>
										<div className="row">
											<div className="col-md-6 mb-4">
												<FormControl type="email" id="email" className="form-control form-control-lg" onChange={(e) => setEmail(e.target.value)} required/>
												<FormLabel className="form-label" for="email">Email</FormLabel>
											</div>
										</div>

										<div class="row">
											<div class="col-md-6 mb-4">
												<FormControl type="password" id="password" className="form-control form-control-lg" onChange={(e) => setPassword(e.target.value)} required/>
												<FormLabel className="form-label" for="password">Password</FormLabel>
											</div>
										</div>

										<div class="mt-4 pt-2">
											<input className="col btn btn-purple-moon btn-lg" type="submit" value="Login" />
										</div>
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

export default Login