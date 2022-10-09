import Article from "./Article";
import img from "../assets/images/linux.png";
import ethical_hacking from "../assets/images/ethical_hacking.jpeg";
import programmation from "../assets/images/programmation.jpg";
import security from "../assets/images/security.jpg";
import cloud from "../assets/images/cloud.png";
import {useNavigate} from "react-router-dom";
import {useState,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {selectPublications,setPublications} from "../slices";
import {get_publications} from "../functions";
const Articles=()=>{
	const publications=useSelector(selectPublications);
	const [data,set_data]=useState(null);
	
	const dispatch=useDispatch();
	useEffect(()=>{
		if(publications==null){
			get_publications(dispatch,setPublications,"publication");
			return;
		}
		set_data(publications);
	},[publications])
	
	/*const data=[
	{id:1,title:"Titre de la publication",image:img,resume:"resumé de la publication lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem...",duration:5},
	{id:2,title:"Titre de la publication",image:ethical_hacking,resume:"resumé de la publication lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem...",duration:5},
	{id:3,title:"Titre de la publication",image:programmation,resume:"resumé de la publication lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem...",duration:5},
	{id:4,title:"Titre de la publication",image:security,resume:"resumé de la publication lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem...",duration:5},
	{id:5,title:"Titre de la publication",image:cloud,resume:"resumé de la publication lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem...",duration:5},
	]*/
	
	const navigate=useNavigate();
	const go_to_article=(article)=>{
		const {id}=article;
		navigate("/article/id="+id);
	}
	return(
		<div className=" mt-10 mb-10">
			<h1 className="text-3xl font-semibold m-2 mt-0 text-center">Nos publications</h1>
			<div className="grid grid-cols-4 gap-4 m-2">
			{
				data?.map((item)=>{
					return <Article key={item?.id} article={item} click={go_to_article} />
				})
			}
				
			</div>
		</div>
	)
}

export default Articles;