import img from "../assets/images/hacking.jpg";
import {useNavigate} from "react-router-dom";

const Certifications=()=>{
	const data=[
	{id:1,title:"A2W Developpeur Web Certifié",image:img},
	{id:2,title:"A2W Developpeur Mobile Certifié",image:img},
	{id:3,title:"A2W Desktop App Certifié",image:img},
	{id:4,title:"A2W Hackeur Ethique Certifié",image:img},
	]
	const navigate=useNavigate();
	
	const go_to_certification=(certification)=>{
		navigate("/certification/id="+certification?.id);
	}
	return(
		<div className="ml-4 mr-4 mt-10 mb-10">
		<h1 className="text-3xl font-bold text-center"> Certification A2W </h1>
		<p className="text-center text-xl mb-4 font-semibold text-gray-600">Montrez vos compétences et prouvez votre capacité dans différents domaines avec les certifications A2W.</p>
		<div className=" grid grid-cols-4 gap-4 ">
		{
			data?.map((item)=>{
				return(
					<div className="cursor-pointer hover:opacity-80" onClick={go_to_certification.bind(this,item)} key={item?.id}>
						<img src={item?.image} style={{width:"100%",height:180}}/>
						<h1 className="text-center font-bold text-red-600">{item?.title}</h1>
					</div>
				)
			})
		}
		</div>
		</div>
	)
}

export default Certifications;