import React from "react"
import { Container, Nav, Navbar, Button } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {

	return (
		<div>
		<Navbar collapseOnSelect bg="dark" variant="dark" expand="sm" sticky="top">
			<Container fluid>
				<Navbar.Brand href="/home">Matcha</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav"/>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto d-flex align-items-center w-100">
						<LinkContainer to="/home">
							<Nav.Link>Home</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/profile">
							<Nav.Link>Profile</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/matches">
							<Nav.Link>Matches</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/settings">
							<Nav.Link>Settings</Nav.Link>
						</LinkContainer>
						<Nav.Item className="ms-md-auto d-none d-md-block">
							<FontAwesomeIcon icon="fa-duotone fa-bell" />
						</Nav.Item>
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

export default Header