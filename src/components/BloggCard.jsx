
const BloggCard=(props)=>{
    return (
    <div>
        <p className="text-xs text-gray-400">{props.date.toString()}</p>
        <h2 className="text-lg font-bold">{props.title}</h2>
        <p className="text-gray-500 text-sm">{props.intro}</p>  
        <button className="text-blue-700 rounded-lg hover:text-red-600 mt-2 p-1 bg-black">Read More</button>  
    </div>
);
}
export default BloggCard;