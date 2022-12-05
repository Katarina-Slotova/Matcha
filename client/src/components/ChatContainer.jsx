import { Button } from 'react-bootstrap'
import MatchesDisplay from './MatchesDisplay'
import ChatDisplay from './ChatDisplay'

const ChatContainer = () => {
	return (
		<div className="chat-container">

			<div>
				<Button className="col btn btn-pink-moon option">Matches</Button>
				<Button className="col btn btn-pink-moon option">Open Chat</Button>
			</div>

			<MatchesDisplay />

			<ChatDisplay />
		</div>
	)
}

export default ChatContainer