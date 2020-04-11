import React, { useContext } from 'react'
import Context from 'Contexts/global'
const Home = (props) => {
	const globalState = useContext(Context)
	return (
		<div className="homeContainer">
			Home
		</div>
	)
    
}

export default Home