import React,{useState,useEffect} from 'react'
import hacking from "../assets/images/hacking.jpg";
import linux from "../assets/images/linux.png";
import ethical_hacking from "../assets/images/ethical_hacking.jpeg";

import Seminaire from "./Seminaire";
import Challenges from "./Challenges";
import Certifications from "./Certifications";
import Articles from "./Articles";
import {useDispatch} from "react-redux";
import {setModal} from "../slices";

import {useNavigate} from "react-router-dom";

export default function HomeContent() {
	const [index,set_index]=useState(1);
	
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
        {index==0 &&<div className="flex flex-col items-center cursor-pointer hover:opacity-80">
            <img src={hacking} className="w-64 rounded-md bg-black h-54" style={{width:200,height:180,objectFit:"contain"}}/>
            <p className="text-lg font-semibold">Effectuez des tests d'intrusions</p>
        </div>}
		{index==1 &&<div className="flex flex-col items-center cursor-pointer hover:opacity-80">
            <img src={linux} className="w-64 rounded-md bg-black h-54" style={{width:200,height:180,objectFit:"contain"}} />
            <p className="text-lg font-semibold">Trouvez des failles dans les systèmes</p>
        </div>}
		
		{index==2 &&<div className="flex flex-col items-center cursor-pointer hover:opacity-80">
            <img src={ethical_hacking} className="w-64 rounded-md bg-black h-54" style={{width:200,height:180,objectFit:"contain"}} />
            <p className="text-lg font-semibold">Exploitez les failles</p>
        </div>}
        <div>
            <button onClick={()=>set_index(0)}><ion-icon name={`${index==0 ? 'ellipse':'ellipse-outline'}`}></ion-icon></button>
             <button onClick={()=>set_index(1)}><ion-icon name={`${index==1 ? 'ellipse':'ellipse-outline'}`}></ion-icon></button>
             <button onClick={()=>set_index(2)}><ion-icon name={`${index==2 ? 'ellipse':'ellipse-outline'}`}></ion-icon></button>
        </div>
		<p className="text-xs m-2">
			Devenez <a onClick={show_modal} className="text-blue-600">penTester</a> en suivant notre <a onClick={show_modal} className="text-blue-600">programme</a> conçu pour vous permettre de maitriser et 
			réussir  vos <a onClick={show_modal} className="text-blue-600">missions de test de pénétration</a>.
		</p>
        <button className="text-blue-600 border p-2 mt-2 text-sm font-semibold rounded-md hover:opacity-80 border-blue-600 hover:opacity-60" onClick={go_to_course}>Commencez gratuitement</button>
		</div>
		
		
		
		<Challenges />
    </div>
	<Certifications />
	<Articles />
	</div>
  )
}
