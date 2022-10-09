const get_publications=async (dispatch,setPublication,root)=>{
	const res=await fetch("https://assitchape.com/a2w-admin/wp-json/wp/v2/"+root);
	const data=await res.json();
	dispatch(setPublication(data))
	console.log(data);
}


export {get_publications};