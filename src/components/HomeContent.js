import React from 'react'
import hacking from "../assets/images/hacking.jpg";
import Seminaire from "./Seminaire";
import Challenges from "./Challenges";
import Articles from "./Articles";
export default function HomeContent() {
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
			Devenez <a href="" className="text-blue-600">penTester</a> en suivant notre <a href="" className="text-blue-600">programme</a> conçu pour vous permettre de maitriser et 
			réussir  vos <a href="" className="text-blue-600">missions de test de pénétration</a>.
		</p>
        <button className="text-blue-600 border p-2 mt-2 text-sm font-semibold rounded-md hover:opacity-80 border-blue-600 hover:opacity-60" >Commencez gratuitement</button>
		</div>
		
		<Challenges />
    </div>
	<Articles />
	</div>
  )
}
