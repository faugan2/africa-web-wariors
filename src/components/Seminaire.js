const Seminaire=()=>{
	return (
	<div className="flex-1 p-1 border border-l-0 border-t-0 border-b-0 ml-2">
		<h3 className="text-lg font-semibold ">Séminaire : Création du clone de Facebook</h3>
		<p className="text-sm">
			Lors de ce séminaire, nous allons reconstruire l'application facebook avec les technologies suivantes:
		</p>
		<div className="text-xs mt-2 font-semibold">
			<ol className="list-disc ml-4">
				<li className="p-0.5">ReactJS</li>
				<li className="p-0.5">Tailwinds CSS</li>
				<li className="p-0.5">Firebase</li>
				<li className="p-0.5">Redux</li>
			</ol>
		</div>
		
		<div className="text-xs mt-2 mb-2">
			Cliquez <a href='' target="_blank" className="text-blue-600">ici</a> pour acceder à l'apercu de ce que nous allons créer lors de ce séminaire. Le programme de déroulement du séminaire est consultable <a href="" target="_blank" className="text-blue-600">ici</a>.
		</div>
		
		<div className="flex flex-col items-start ">
			<p className="text-xs">
				<span>Lieu : </span>
				<span>Lomé</span>
			</p>
			
			<p className="text-xs">
				<span>Date : </span>
				<span>5 au 7 Jan 2023 de 8h à 13h  </span>
			</p>
			
			<p className="text-xs">
				<span>Participation : </span>
				<span>5 000 CFA</span>
			</p>
			
			<p className="text-xs">
				<span>Bonus : </span>
				<a href="" className="text-blue-600">2 livres offerts</a>
			</p>
			
		</div>
		<div className="flex items-center justify-start mt-2">
			<button className="text-sm   border-blue-600 text-blue-600 font-semibold rounded-md hover:opacity-50">Reservez une place</button>
		</div>
		
	</div>
	)
}

export default Seminaire;