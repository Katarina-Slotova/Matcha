import React from "react"
import { Container, Nav, Navbar, Button, Form, NavDropdown } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { useNavigate } from "react-router-dom"
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavigationBar = () => {

	const navigate = useNavigate()

	const navigateLanding = () => {
		navigate('/')
	}

	return (
		<div>
			<Navbar className="justify-content-center" collapseOnSelect bg="black" variant="dark" expand="sm" sticky="top">
				<Container fluid>
					<Navbar.Brand><a href="/home"><img src="matcha-logo-dark.png" width="30" height="30" className="d-inline-block align-top" alt="matcha-logo"></img></a></Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav"/>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="m-auto d-flex align-items-center w-100">
							<LinkContainer to="/dashboard">
								<Nav.Link>Home</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/matches">
								<Nav.Link>Matches</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/profile">
								<Nav.Link>Profile</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/settings">
								<Nav.Link>Settings</Nav.Link>
							</LinkContainer>
							<NavDropdown title={<i class="fas fa-bell"></i>} menuVariant="dark" id="basic-nav-dropdown">
								<NavDropdown.Item class="dropdown-item text-wrap" target="_blank" rel="nofollow">
									<p class="small text-uppercase mb-2">21/11/2022</p>
									<p>You have a new match!</p>
								</NavDropdown.Item>
								<NavDropdown.Item class="dropdown-item text-wrap" target="_blank" rel="nofollow">
									<p class="small text-uppercase mb-2">21/11/2022</p>
									<p>You have a new match!</p>
								</NavDropdown.Item>
							</NavDropdown>
							<Nav.Item className="ms-md-auto d-none d-md-block"></Nav.Item>
							<Form className="mx-3 d-flex">
								{/* <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" /> */}
								<Button className="col btn btn-pink-moon" onClick={"#"}>Search</Button>
							</Form>
							<Nav.Item className="mx-3 d-none d-md-block">
								<Navbar.Text className="fs-6">Show Username</Navbar.Text>
							</Nav.Item>
							<Button size="sm" variant="secondary" onClick={navigateLanding}>
								Log out
							</Button>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	)
}

export default NavigationBar

{/* <Nav.Item>
<span id="navbarNotificationCounter" class="badge rounded-pill badge-notification bg-danger" alt="Notifications" style={{color: "rgb(255, 255, 255) !important;"}}>2</span>
</Nav.Item> */}