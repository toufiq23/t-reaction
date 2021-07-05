import React, { useState } from "react";
import { useAppContext } from "./hooks";
import { newMessage } from '../state/actions'

function PublishMessage(){

	const { state: { username }, pubsub: { publish } } = useAppContext();
	const [text, setText] = useState('');

	const updateText = e => {
		setText(e.target.value)
		console.log('setText', setText);
	}
	const handleKeyPress = e => {
		if(e.key === "Enter"){
			return publishMessage()
		}
	}

	const publishMessage = () => {
		publish(newMessage({ text, username }))
	}

	return(
		<div>
			<h2>Got something to say?</h2>
			<input
				type= 'text'
				name=''
				value= {text}
				onChange={updateText}
				onKeyPress={handleKeyPress}
			/>
			{' '}
			<button onClick={publishMessage}>Publish it!</button>
		</div>
	)
}

export default PublishMessage