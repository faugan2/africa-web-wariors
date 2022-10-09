import {useState} from "react";
import {setModal} from "../slices";


import {useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {selectSeminaires,setSeminaires} from "../slices";
import {get_publications} from "../functions";

const Seminaire=()=>{
	const [open_modal,set_open_modal]=useState(false)
	const [modal_content,set_modal_content]=useState(null);
	const [data,set_data]=useState(null);
	
	const semainaires=useSelector(selectSeminaires);
	
	useEffect(()=>{
		if(semainaires==null){
			get_publications(dispatch,setSeminaires,"seminaires")
			return;
		}
		const res=semainaires;
		set_data(res[0]);
		
		
	},[semainaires])
	
	const dispatch=useDispatch();
	const show_modal=()=>{
		dispatch(setModal(1))
	}
	
	
	
	
	return (
	<div className="flex-1 p-1 border border-l-0 border-t-0 border-b-0 ml-2">
		<h3 className="text-2xl font-semibold ">{data?.title?.rendered}</h3>
		<div>
		{data?.acf?.description}
		</div>
		
		<div className="text-xs mt-2 mb-2">
			Cliquez <a  onClick={show_modal} target="_blank" className="text-blue-600 cursor-pointer">ici</a> pour acceder à l'apercu de ce que nous allons créer lors de ce séminaire. Le programme de déroulement du séminaire est consultable <a onClick={show_modal} target="_blank" className="text-blue-600 cursor-pointer">ici</a>.
		</div>
		
		<div className="flex flex-col items-start ">
			<p className="text-xs">
				<span>Lieu : </span>
				<span>{data?.acf?.lieu}</span>
			</p>
			
			<p className="text-xs">
				<span>Date : </span>
				<span>{data?.acf?.date}</span>
			</p>
			
			<p className="text-xs">
				<span>Participation : </span>
				<span>{data?.acf?.participation} CFA</span>
			</p>
			
			<p className="text-xs">
				<span>Bonus : </span>
				<a  onClick={show_modal} className="text-blue-600 cursor-pointer">{data?.acf?.bonus}</a>
			</p>
			
		</div>
		<div className="flex items-center justify-start mt-2">
			<button className="text-sm   border-blue-600 text-blue-600 font-semibold rounded-md hover:opacity-50" onClick={show_modal}>Reservez une place</button>
		</div>
		
		
		
	</div>
	)
}

export default Seminaire;