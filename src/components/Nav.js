import React from 'react'
import logo from "../assets/images/favicon.png";
import {Link,useNavigate} from "react-router-dom";
export default function Nav() {
	const navigate=useNavigate();
	const go_to_home=()=>{
		navigate("/home");
	}
	
	const submit_form=(e)=>{
		e.preventDefault();
		navigate("/search");
	}
  return (
    <div className="flex justify-between pt-2 pb-2 border border-l-0 border-r-0 border-t-0 border-b-0 items-center bg-black mb-2">
        <div className="ml-4 flex items-center gap-1 cursor-pointer" onClick={go_to_home}>
            <img src={logo}  className="w-12 h-12 rounded-full border bg-gray-300" />
            <h2 className="text-lg font-semibold text-white">Academy</h2>
        </div>
        <form className="bg-gray-50 p-2 flex items-center rounded-md" onSubmit={submit_form} >
           <input type="text" placeholder='Rechercher' 
           className="bg-transparent outline-none text-sm w-60 text-gray-700"
			
		   />
           <ion-icon name="search-outline" style={{color:"gray"}}></ion-icon>
        </form>
        <div className="mr-4">
            <ul className="flex items-center gap-4">
                <li className="text-white text-sm font-semibold">
                    <Link to="/auth" >Console</Link>
                </li>
                <li className="text-white text-sm font-semibold  w-10 h-12 flex justify-center items-center hover:opacity-50">
                    <Link to="/notifications" ><ion-icon name="notifications-outline" size="small"></ion-icon></Link>
                </li>

                <li className="text-white text-sm font-semibold  w-10 flex justify-center h-12 items-center hover:opacity-50">
                    <Link to="/profile" ><ion-icon name="person-outline" size="small"></ion-icon></Link>
                </li>
            </ul>
        </div>
    </div>
  )
}
