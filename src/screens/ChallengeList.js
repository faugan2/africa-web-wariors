import {useParams} from "react-router-dom";
import React from 'react'
import Nav from "../components/Nav";
import Footer from "../components/Footer";
const ChallengeList=()=>{
	const {name}=useParams();
	
	return(
		<div>
			 <Nav />
			<div className="min-h-64" style={{minHeight:"calc(100vh - 200px)"}}>
			ChallengeList to {name}
			</div>
			<Footer />
		</div>
	)
}

export default ChallengeList;