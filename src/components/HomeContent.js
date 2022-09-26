import React from 'react'
import hacking from "../assets/images/hacking.jpg";
import Seminaire from "./Seminaire";
import Challenges from "./Challenges";
import Articles from "./Articles";
import {useDispatch} from "react-redux";
import {setModal} from "../slices";

import {useNavigate} from "react-router-dom";

export default function HomeContent() {
	const dispatch=useDispatch();
	const navigate=useNavigate();
	const show_modal=()=>{
		dispatch(setModal(2))
	}
	
	const go_to_course=()=>{
		navigate("/training/course=hacking");
	}
	
  return (
  <div>
    <div className="flex  justify-between">
		<Seminaire />
		<div className="w-1/4 flex flex-col items-center" >
        <div className="flex flex-col items-center cursor-pointer hover:opacity-80">
            <img src={hacking} className="w-64 rounded-md bg-gray-300" />
            <p className="text-lg font-semibold">CyberSécurité</p>
        </div>
        <div>
            <ion-icon name="ellipse"></ion-icon>
            <ion-icon name="ellipse-outline"></ion-icon>
            <ion-icon name="ellipse-outline"></ion-icon>
        </div>
		<p className="text-xs m-2">
			Devenez <a onClick={show_modal} className="text-blue-600">penTester</a> en suivant notre <a onClick={show_modal} className="text-blue-600">programme</a> conçu pour vous permettre de maitriser et 
			réussir  vos <a onClick={show_modal} className="text-blue-600">missions de test de pénétration</a>.
		</p>
        <button className="text-blue-600 border p-2 mt-2 text-sm font-semibold rounded-md hover:opacity-80 border-blue-600 hover:opacity-60" onClick={go_to_course}>Commencez gratuitement</button>
		</div>
		
		<Challenges />
    </div>
	<Articles />
	</div>
  )
}
