import img from "../assets/images/linux.png";

const Article=({article,click,single_page})=>{
	return(
		<div className={`article  flex gap-2 flex-1 cursor-pointer hover:opacity-60 ${single_page==true ? 'items-center mb-4 ml-1 mt-1':''} `} onClick={click.bind(this,article)}>
			<div>
				<img src={article?.image}  className={` ${single_page==true ? 'w-10 h-10':'w-24 h-24'}  rounded-md `} style={{objectFit:"cover"}}/>
			</div>
			<div className="flex-1">
				<h1 className={`${single_page==true ? 'text-xs':'text-sm'} font-semibold hover:text-blue-600`}>{article?.title}</h1>
					{single_page==true ? null :<p className="text-xs text-gray-600">{article?.resume}</p>}
				{single_page==true ? null :<p className="text-xs mt-2 text-blue-500">{article?.duration} minutes de lecture</p>}
			</div>
		</div>
	)
}

export default Article;