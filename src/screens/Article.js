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


const ArticleContent=()=>{
	const {id}=useParams();
	const data=[
	{id:1,title:"Titre de la publication",image:img,resume:"resumé de la publication lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem...",duration:5},
	{id:2,title:"Titre de la publication",image:ethical_hacking,resume:"resumé de la publication lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem...",duration:5},
	{id:3,title:"Titre de la publication",image:programmation,resume:"resumé de la publication lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem...",duration:5},
	{id:4,title:"Titre de la publication",image:security,resume:"resumé de la publication lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem...",duration:5},
	{id:5,title:"Titre de la publication",image:cloud,resume:"resumé de la publication lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem...",duration:5},
	]
	
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
					Article to {id}
				</div>
			
			</div>
			<Footer />
		</div>
	)
}

export default ArticleContent;