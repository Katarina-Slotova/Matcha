import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function UserCard() {
	return (
		<Container>
			<Card className='me-auto ms-auto align-self-center' style={{ width: '30vw', margin: '30px' }}>
			<Card.Img variant="top" src="dog.png" />
			<Card.Body>
				<Card.Title>
					<Card.Link className='link' href="/profile">User's Name</Card.Link>
				</Card.Title>
				<Card.Text>
					User's Bio
				</Card.Text>
			</Card.Body>
			<ListGroup className="list-group-flush">
				<ListGroup.Item>Location</ListGroup.Item>
				<ListGroup.Item>Interests</ListGroup.Item>
				<ListGroup.Item>Hashtags</ListGroup.Item>
				<ListGroup.Item>Fame rate</ListGroup.Item>
			</ListGroup>
			</Card>

		</Container>
	);
}

export default UserCard;