import {useParams} from "react-router-dom";
import React from 'react'
import Nav from "../components/Nav";
import Footer from "../components/Footer";
const Certification=()=>{
	
	return(
		<div>
			 <Nav />
			<div className="min-h-64" style={{minHeight:"calc(100vh - 200px)"}}>
				<div className="flex gap-4 mr-4 ml-4" >
					<div style={{width:400}} className="border">certi image template</div>
					<div className="border flex-1" style={{minHeight:350}}>
					cert programme
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Certification;