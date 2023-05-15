const BlogDetails = (props) => {
    return (
        <>
            <div className="">
                <h1 className=" text-center text-2xl text-gray-400 font-bold">{props.bloggDetails?.title}</h1>
                <img className="w-full mt-6 rounded shadow" src={props.bloggDetails?.imgURL} alt={props.bloggDetails?.title}/>
                <p className="text-sm mt-6 text-gray-700">{props.bloggDetails?.intro}</p>
                <p className="mt-4 text-gray-700 ">{props.bloggDetails?.description}</p>
            </div>
        </>
    )
}

export default BlogDetails;