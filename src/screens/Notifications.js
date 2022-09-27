import {useParams} from "react-router-dom";
import React from 'react'
import Nav from "../components/Nav";
import Footer from "../components/Footer";
const Notifications=()=>{
	
	return(
		<div>
			 <Nav />
			<div className="min-h-64" style={{minHeight:"calc(100vh - 200px)"}}>
			my notifications
			</div>
			<Footer />
		</div>
	)
}

export default Notifications;