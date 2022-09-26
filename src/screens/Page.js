import {useParams} from "react-router-dom";
import React from 'react'
import Nav from "../components/Nav";
import Footer from "../components/Footer";
const Page=()=>{
	const {name}=useParams();
	
	return(
		<div>
			 <Nav />
			<div className="min-h-64" style={{minHeight:"calc(100vh - 200px)"}}>
			page to {name}
			</div>
			<Footer />
		</div>
	)
}

export default Page;