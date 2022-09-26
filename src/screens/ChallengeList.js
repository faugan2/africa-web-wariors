import {useParams} from "react-router-dom";
import React,{useEffect,useState} from 'react'
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import img from "../assets/images/rubon189.svg";
import img2 from "../assets/images/rubon203.svg";
import img3 from "../assets/images/rubon17.svg";
import img4 from "../assets/images/rubon182.svg";
import img5 from "../assets/images/rubon16.svg";
import img6 from "../assets/images/rubon208.svg";
import img7 from "../assets/images/rubon69.svg";
import img8 from "../assets/images/rubon18.svg";
import img9 from "../assets/images/rubon67.svg";
import Challenge from "../components/Challenge";
import {useNavigate,Link} from "react-router-dom";

const ChallengeList=()=>{
	const {name}=useParams();
	const [challenge,set_challenge]=useState(null);
	
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
	
	useEffect(()=>{
		const res=data?.filter((item)=>{
			return item?.name==name;
		})
		if(res?.length>0){
			set_challenge(res[0])
		}
	},[name])
	const navigate=useNavigate();
	
	const go_to_challenge=(challenge)=>{
		const {id,name}=challenge;
		navigate("/challenges/name="+name);
	}
	
	
	return(
		<div>
			 <Nav />
			<div className="min-h-64 flex gap-4  mr-4" style={{minHeight:"calc(100vh - 200px)"}}>
				<div className="bg-gray-100" style={{width:180}}>
					<div>
					{
						data?.map((item)=>{
							return(
								<div key={item.id} className="mt-4 ml-1">
									<Challenge challenge={item}  click={go_to_challenge} />
								</div>
							)
						})
					}
					</div>
				</div>
					
				<div className="flex-1 mt-4">
					<div>
						<div className="flex items-center gap-4">
							<img src={challenge?.icon} className="w-12 h-12"/>
							<h1 className="text-2xl font-semibold">{challenge?.name}</h1>
						</div>
						
						<div className="mt-2 text-sm">
							Details sur cette catégorie de challenge Details sur cette catégorie de challenge
							Details sur cette catégorie de challenge Details sur cette catégorie de challenge
							Details sur cette catégorie de challengeDetails sur cette catégorie de challenge
							Details sur cette catégorie de challengeDetails sur cette catégorie de challenge
							Details sur cette catégorie de challenge Details sur cette catégorie de challenge
						</div>
					</div>
					
					<div className="mt-8 mb-8">
						<h2 className="text-2xl font-semibold mb-2"><span className="text-blue-600">{challenge?.total_challenges}</span> Challenges</h2>
						<div>
							<table border={1} style={{width:"100%"}} className="border">
								<tr className="text-sm font-bold">
									<td align="center" width="5%">N°</td>
									<td align="center">Nom</td>
									<td width="15%" align="center">Validations</td>
									<td width="10%" align="center">Points</td>
									<td width="10%" align="center">Difficulté</td>
									<td width="10%" align="center">Note</td>
									<td width="10%" align="center">Solution</td>
									<td width="10%" align="center">Date</td>
								</tr>
								
								{
									new Array(10).fill(Math.random()).map((item,i)=>{
										return(
											<tr key={i} className={`border h-10 hover:opacity-60  ${i%2==0 ? 'bg-gray-100':''}`}>
												<td align="center">{i+1}</td>
												<td align="center" className="text-xs cursor-pointer">name {Math.random()}</td>
												<td  align="center" className="flex justify-center gap-4 text-xs items-center">
													<span>{Math.round(Math.random()*100)}%</span>
													<span title="Qui a validé?">{Math.round(Math.random()*1000)}</span>
												</td>
												<td align="center" className="text-xs">{Math.round(Math.random()*10)}</td>
												<td align="center" className="text-xs">Simple</td>
												<td align="center" className="text-xs">Simple</td>
												<td align="center" className="text-xs">Simple</td>
												<td align="center" className="text-xs">Simple</td>
											</tr>
										)
									})
								}
							</table>
						</div>
					</div>
					
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default ChallengeList;