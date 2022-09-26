const Challenge=({challenge:{icon,name,total_challenges}})=>{
	return(
		<div className="cursor-pointer hover:opacity-60">
			<div className="flex gap-2 items-center">
				<img src={icon} className="w-8 h-8"/>
				<div>
					<h2 className="font-semibold text-sm">{name}</h2>
					<p className="text-gray-700">{total_challenges} épreuves</p>
				</div>
			</div>
			
		</div>
	)
}

export default Challenge;