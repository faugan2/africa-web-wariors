const Challenge=({challenge,click})=>{
	return(
		<div className="cursor-pointer hover:opacity-60" onClick={click.bind(this,challenge)}>
			<div className="flex gap-2 items-center">
				<img src={challenge?.icon} className="w-8 h-8"/>
				<div>
					<h2 className="font-semibold text-sm">{challenge?.name}</h2>
					<p className="text-gray-700">{challenge?.total_challenges} épreuves</p>
				</div>
			</div>
			
		</div>
	)
}

export default Challenge;