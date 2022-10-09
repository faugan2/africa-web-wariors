import img from "../assets/images/rubon189.svg";
import img2 from "../assets/images/rubon203.svg";
import img3 from "../assets/images/rubon17.svg";
import img4 from "../assets/images/rubon182.svg";
import img5 from "../assets/images/rubon16.svg";
import img6 from "../assets/images/rubon208.svg";
import img7 from "../assets/images/rubon69.svg";
import img8 from "../assets/images/rubon18.svg";
import img9 from "../assets/images/rubon67.svg";

import {useNavigate,Link} from "react-router-dom";

import {useEffect,useState} from "react";
import {useSelector,useDispatch} from "react-redux";
import {selectDefiBanner,setDefiBanner,selectChallengeTypes,setChallengeTypes} from "../slices";
import {get_publications} from "../functions";

import Challenge from "./Challenge";

const Challenges=()=>{
	const navigate=useNavigate();
	const dispatch=useDispatch();
	const db=useSelector(selectDefiBanner)
	const ct=useSelector(selectChallengeTypes);
	
	const [defi_banner,set_defi_banner]=useState(null);
	const [data,set_data]=useState(null);
	
	useEffect(()=>{
		if(db==null){
			get_publications(dispatch,setDefiBanner,"defis_banner");
			return;
		}
		const res=db[0] ?? null;
		set_defi_banner(res);
	},[db])
	
	useEffect(()=>{
		if(ct==null){
			get_publications(dispatch,setChallengeTypes,"challenge_type");
			return;
		}
		set_data(ct);
	},[ct])
	
	
	const go_to_challenge=(challenge)=>{
		const {id,name}=challenge;
		navigate("/challenges/name="+id);
	}
	return(
		<div className="bg-blue-100 flex-1 mr-2 text-xs">
			<div className="bg-blue-600 p-1">
				<h2 className="text-white text-sm">Relevez les défis et emportez des <Link to="/page/name=price" className="underline">prix</Link></h2>
			</div>
			
			<div className="p-1">
				<div>
				{defi_banner?.acf?.text}
				</div>
			 
			 <div className="grid grid-cols-3 gap-4 mt-4">
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