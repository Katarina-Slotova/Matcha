import React from "react"
import { Container, Nav, Navbar, Button, Form } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavigationBar = () => {
	return (
		<div>
			<Navbar className="justify-content-center" collapseOnSelect bg="black" variant="dark" expand="sm" sticky="top">
				<Container fluid>
					<Navbar.Brand><a href="/home"><img src="matcha-logo-dark.png" width="30" height="30" className="d-inline-block align-top" alt="matcha-logo"></img></a></Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav"/>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="m-auto d-flex align-items-center w-100">
							<LinkContainer to="/home">
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
							<Nav.Item className="ms-md-auto d-none d-md-block">
								<FontAwesomeIcon icon="fa-duotone fa-bell" />
							</Nav.Item>
							<Form className="mx-3 d-flex">
								<Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
								<Button variant="outline-info">Search</Button>
							</Form>
							<Nav.Item className="mx-3 d-none d-md-block">
								<Navbar.Text className="fs-6">User's Name Here</Navbar.Text>
							</Nav.Item>
							<Button size="sm" variant="secondary" onClick={"#"}>
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