import React from 'react'
import { useAppContext } from './hooks'
import { setUsername } from '../state/actions'

function SetUsername(){	
	const { state: {username}, dispatch } = useAppContext()

	const updateUser = e => {
		dispatch(setUsername(e.target.value))
	}

	return (
		<div>
			<h3>Username</h3>
			<input onChange={updateUser} value={username} />
		</div>
	)
}

export default SetUsername