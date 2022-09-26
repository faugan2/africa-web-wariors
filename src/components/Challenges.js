import img from "../assets/images/rubon189.svg";
import img2 from "../assets/images/rubon203.svg";
import img3 from "../assets/images/rubon17.svg";
import img4 from "../assets/images/rubon182.svg";
import img5 from "../assets/images/rubon16.svg";
import img6 from "../assets/images/rubon208.svg";
import img7 from "../assets/images/rubon69.svg";
import img8 from "../assets/images/rubon18.svg";
import img9 from "../assets/images/rubon67.svg";

import {useNavigate} from "react-router-dom";

import Challenge from "./Challenge";

const Challenges=()=>{
	const navigate=useNavigate();
	const data=[
	{id:1,name:"Scripting",total_challenges:5,icon:img},
	{id:2,name:"Système",total_challenges:2,icon:img2},
	{id:3,name:"programmation",total_challenges:12,icon:img3},
	{id:4,name:"Réseau",total_challenges:12,icon:img4},
	{id:5,name:"Web",total_challenges:12,icon:img5},
	{id:6,name:"Forensic",total_challenges:12,icon:img6},
	{id:7,name:"Craking",total_challenges:12,icon:img7},
	{id:8,name:"Cryptanalyse",total_challenges:12,icon:img8},
	{id:9,name:"Stéganographie",total_challenges:12,icon:img9},
	]
	
	const go_to_challenge=(challenge)=>{
		const {id,name}=challenge;
		navigate("/challenges/name="+name);
	}
	return(
		<div className="bg-blue-100 flex-1 mr-2 text-xs">
			<div className="bg-blue-600 p-1">
				<h2 className="text-white text-sm">Relevez les défis et emportez des <a href="" className="underline">prix</a></h2>
			</div>
			
			<div className="p-1">
				<h1 className="font-semibold mb-2">Plus de 150 challenges sont mis à votre disposition pour vous entrainer au hacking.</h1>

			<p>Entrainez-vous sur des challenges de sécurité et de hacking. Forensic, cracking, web, cryptanalyse, réseau, programmation,scripting, etc. Pour chaque challenge, vous avez la possibilité de :</p>
			
			<ol className="m-2 p-2 list-disc">
				<li>consulter des ressources associées au sujet traité par le challenge ;</li>
				<li>consulter les solutions / proposer une solution, une fois le challenge validé ;</li>
				<li>demander de l’aide sur le forum.</li>
			</ol>
			 
			 <div className="grid grid-cols-3 gap-4 ">
			 {
				 data?.map((item)=>{
					 return(
						<Challenge challenge={item} key={item.id} click={go_to_challenge} />
					 )
				 })
			 }
			 </div>
			 
			</div>
		</div>
	)
}

export default Challenges;