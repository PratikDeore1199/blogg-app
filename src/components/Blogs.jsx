import BloggCard from "./BloggCard"
const Blogs=(props)=>{
    return (
    <div className=" mt-6 grid grid-cols-2 gap-12">
        {props.bloggs.map((blogg,i) => {
            
              return  <BloggCard key={i} date={blogg.date} title={blogg.title} intro={blogg.intro}></BloggCard>
            
        })}

    </div>
  
    );
};
export default Blogs;
