import {useParams} from "react-router-dom";
import React from 'react'
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import {useDispatch,useSelector} from "react-redux";
import {setModal} from "../slices";

const Training=()=>{
	const {course}=useParams();
	const dispatch=useDispatch();
	const data=[
		{
			title:"Titre 1",
			data:[
				{id:1,title:"titre du chapitre",content:"content",note:"notes"},
				{id:2,title:"titre du chapitre",content:"content",note:"notes"},
				{id:3,title:"titre du chapitre",content:"content",note:"notes"},
				{id:4,title:"titre du chapitre",content:"content",note:"notes"},
				{id:5,title:"titre du chapitre",content:"content",note:"notes"},
			]
		},
		{
			title:"Titre 2",
			data:[
				{id:1,title:"titre du chapitre",content:"content",note:"notes"},
				{id:2,title:"titre du chapitre",content:"content",note:"notes"},
				{id:3,title:"titre du chapitre",content:"content",note:"notes"},
				{id:4,title:"titre du chapitre",content:"content",note:"notes"},
				{id:5,title:"titre du chapitre",content:"content",note:"notes"},
			]
		},
		{
			title:"Titre 3",
			data:[
				{id:1,title:"titre du chapitre",content:"content",note:"notes"},
				{id:2,title:"titre du chapitre",content:"content",note:"notes"},
				{id:3,title:"titre du chapitre",content:"content",note:"notes"},
				{id:4,title:"titre du chapitre",content:"content",note:"notes"},
				{id:5,title:"titre du chapitre",content:"content",note:"notes"},
			]
		}
		
	]
	
	const take_quiz=()=>{
		dispatch(setModal(2))
	}
	
	return(
		<div>
			 <Nav />
				<div className="min-h-64">
					<h1 className="font-bold text-blue-600 text-center">{course}</h1>
					<div className="flex gap-4">
						<div className=" w-60 ml-2">
						{
							data?.map((item,i)=>{
								return(
									<div key={i}>
										<h1 className="font-bold">{item?.title}</h1>
										<ol className="p-2 list-disc ml-4">
										{
											item?.data?.map((item2,j)=>{
												return(
													<li key={`${i}${j}`} className="hover:bg-gray-50 cursor-pointer">
														<a className="text-xs ">{item2.title}</a>
													</li>
												);
											})
										}
										</ol>
									</div>
								);
							})
						}
						</div>
						<div className="flex-1 border border-red-900" style={{minHeight:"calc(100vh - 200px)"}}>
							<div className="bg-gray-700">
								<h1 className="p-1 text-white">titre en cours</h1>
							</div>
							<div>
								content
							</div>
						</div>
						<div className="border border-r-0 border-l-0" style={{width:350}}>
							<div className="bg-gray-700">
								<h1 className="p-1 text-white">Notes Importantes</h1>
							</div>
							<div>
							
							<div className="mt-1">
								<h2 className="text-sm font-semibold underline text-black">A savoir sur ce chapitre</h2>
								<p className="text-xs">
									Un petit resume sur le chapitre, ce qu'il faut avoir en tete en lisant ce chapitre, ou les pré-requis à avoir
								</p>
							</div>
							
								<div className="mt-4">
									<h2 className="text-sm font-semibold underline text-black">Liens & documents utiles</h2>
									<ol className="ml-4">
										<li><a href="#" className="text-gray-600 text-xs">lien 1</a></li>
										<li><a href="#" className="text-gray-600 text-xs">lien 2</a></li>
										<li><a href="#" className="text-gray-600 text-xs">lien 3</a></li>
										<li><a href="#" className="text-gray-600 text-xs">lien 4</a></li>
									</ol>
								</div>
								
								{/*<div className="mt-1">
									<h2 className="text-sm font-semibold underline text-black">Vidéo</h2>
									<div className="mr-2">
										<iframe  height="180" style={{width:"100%"}} src="https://www.youtube.com/embed/S9ZJGHfej0k" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
									</div>
								</div>*/}
								
								
								<div className="mt-4">
									<h2 className="text-sm font-semibold underline text-black">Quiz</h2>
									<p className="text-xs">Un Quiz est disponible pour vous permettre de tester votre niveau de compréhension sur ce chapitre</p>
									<h2 className="text-xs font-semibold  text-blue-600" onClick={take_quiz}>Passer le Quiz</h2>
									
								</div>
								
								
								<div className="mt-4">
									<h2 className="text-sm font-semibold underline text-black">Projet à rendre</h2>
									<p className="text-xs">Veuillez consulter, traiter et rendre ce projet avant le 31/12/2022</p>
									<div className="flex justify-between mr-2">
										<h2 className="text-xs font-semibold  text-blue-600 cursor-pointer" onClick={take_quiz}>Détails du projet</h2>
										<h2 className="text-xs font-semibold  text-blue-600 cursor-pointer" onClick={take_quiz}>Votre réponse</h2>
									</div>
									
									
								</div>
								
							</div>
						</div>
					</div>
				</div>
			<Footer />
		</div>
	)
}

export default Training;