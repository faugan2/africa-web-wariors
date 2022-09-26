import Article from "./Article";
import img from "../assets/images/linux.png";
import ethical_hacking from "../assets/images/ethical_hacking.jpeg";
import programmation from "../assets/images/programmation.jpg";
import security from "../assets/images/security.jpg";
import cloud from "../assets/images/cloud.png";


const Articles=()=>{
	const data=[
	{id:1,title:"Titre de la publication",image:img,resume:"resumé de la publication lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem...",duration:5},
	{id:2,title:"Titre de la publication",image:ethical_hacking,resume:"resumé de la publication lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem...",duration:5},
	{id:3,title:"Titre de la publication",image:programmation,resume:"resumé de la publication lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem...",duration:5},
	{id:4,title:"Titre de la publication",image:security,resume:"resumé de la publication lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem...",duration:5},
	{id:5,title:"Titre de la publication",image:cloud,resume:"resumé de la publication lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem...",duration:5},
	]
	return(
		<div className="border  border-b-0 border-l-0 border-r-0  mt-2 mb-2">
			<h1 className="text-lg font-semibold m-2 mt-0 ">Nos publications</h1>
			<div className="grid grid-cols-4 gap-4 m-2">
			{
				data?.map((item)=>{
					return <Article key={item?.id} article={item}/>
				})
			}
				
			</div>
		</div>
	)
}

export default Articles;