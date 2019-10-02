import React, { useContext } from 'react'
import Context from 'context'
const Home = (props) => {
	const state = useContext(Context)
	console.log(props.id)
	return (
		<div className="homeContainer">
			Home
		</div>
	)
    
}

export default Home