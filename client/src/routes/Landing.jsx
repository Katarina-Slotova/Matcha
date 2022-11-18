import React from "react"
import { Button } from "react-bootstrap"
import '../styles.css'

const Landing = () => {
	return (
		<div className="page-holder align-items-center py-4 bg-gray-100 vh-100" style={{background: "black"}}>
			<div className="container">
				<h1 class="text-light landing-heading">Find your perfect match with us!</h1>
        		<div className="row align-items-center">
					<div className="col-lg-6 col-xl-5 ms-xl-auto px-lg-4 text-center text-primary">
						<div style={{padding: "10px"}}>
							<Button size="lg" variant="outline-danger" onClick={"#"}>Log in</Button>
						</div>
						<div style={{padding: "10px"}}>
							<Button size="lg" variant="danger" onClick={"#"}>Sign up</Button>
						</div>
					</div>
					<div className="col-lg-6 col-xl-5 ms-xl-auto px-lg-4 text-center text-primary"><img className="img-landing img-fluid mb-4" width="350" height="350" src="matcha-logo-dark.png" alt="matcha-logo" style={{transform: "rotate(10deg)"}}></img></div>
 				</div>
			</div>
		</div>
	)
}

export default Landing