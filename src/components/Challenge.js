const Challenge=({challenge,click})=>{
	const total_challenges=Math.round(Math.random()*10);
	return(
		<div className="cursor-pointer hover:opacity-60" onClick={click.bind(this,challenge)}>
			<div className="flex gap-2 items-center">
				<img src={challenge?.acf?.image?.url} className="w-8 h-8"/>
				<div>
					<h2 className="font-semibold text-sm">{challenge?.title?.rendered}</h2>
					<p className="text-gray-700">{total_challenges} épreuves</p>
				</div>
			</div>
			
		</div>
	)
}

export default Challenge;