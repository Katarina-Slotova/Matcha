import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const ChatInput = () => {
	const [textArea, setTextArea] = useState('')

	const handleChange = (e) => {
		const value = e.target.value
		setTextArea(value)
	}

	return (
		<div className="chat-input">
			<Form>
				<Form.Control as="textarea" rows={3} value={textArea} onChange={handleChange}/> 
				<Button className="col btn btn-pink-moon option" type='submit'>Submit</Button>
			</Form>
		</div>
	)
}

export default ChatInput