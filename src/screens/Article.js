import {useParams} from "react-router-dom";
import React from 'react'
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Article from "../components/Article";
import img from "../assets/images/linux.png";
import ethical_hacking from "../assets/images/ethical_hacking.jpeg";
import programmation from "../assets/images/programmation.jpg";
import security from "../assets/images/security.jpg";
import cloud from "../assets/images/cloud.png";
import {useNavigate} from "react-router-dom";



import Challenge from "../components/Challenge";

import {useState,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {selectPublications,setPublications} from "../slices";
import {get_publications} from "../functions";

const ArticleContent=()=>{
	const {id}=useParams();
	const publications=useSelector(selectPublications);
	const [data,set_data]=useState(null);
	const [article,set_article]=useState(null);
	
	const dispatch=useDispatch();
	useEffect(()=>{
		if(publications==null){
			get_publications(dispatch,setPublications,"publication");
			return;
		}
		const res1=publications?.filter((item)=>{
			return item?.id!=id;
		})
		set_data(res1);
		//set_data(publications);
		const res=publications?.filter((item)=>{
			return item?.id==id;
		})
		if(res?.length>0){
			set_article(res[0])
		}
	},[publications,id])
	
	
	
	
	const navigate=useNavigate();
	const go_to_article=(article)=>{
		const {id}=article;
		navigate("/article/id="+id);
	}
	
	return(
		<div>
			 <Nav />
			<div className="min-h-64 flex" style={{minHeight:"calc(100vh - 200px)"}}>
				<div className="" style={{width:200}}>
					{
						data?.map((item)=>{
							return <Article key={item?.id} article={item} click={go_to_article} single_page={true} />
						})
					}
				</div>
				<div className="border flex-1 mr-4 border-r-0 border-t-0 border-b-0 pl-2">
				<h1 className="text-xl font-bold">{article?.title?.rendered}</h1>
				<p className="text-blue-600 text-sm">{article?.acf?.duration} minutes de lecture</p>
				{article?.acf?.description}
				</div>
			
			</div>
			<Footer />
		</div>
	)
}

export default ArticleContent;