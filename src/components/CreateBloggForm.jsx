import { useState } from "react";

const CreateBloggForm = (props) => {
  const [title, setTitle] = useState(props.blogg?.title || '');
  const [intro, setIntro] = useState(props.blogg?.intro || '');
  const [content, setContent] = useState(props.blogg?.description || '');
  const [imgURL, setImgURL] = useState(props.blogg?.imgURL || '');
  return (
    <div>
      <h1 className="font-bold text-2xl"> Blogg Details Form</h1>
      <br></br>
      <div className="text-xl ">
        <label className="font-bold ">Title</label>
        <br />
        <input
          className="mb-4 p-2 w-full border border-gray-500 rounded-md"
          placeholder="Enter a Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
        <br />
        <label className="font-bold">Intro</label>
        <br />
        <textarea
          className="mb-4 p-2 w-full border border-gray-500 rounded-md"
          placeholder="Enter Intro"
          value={intro}
          onChange={(e) => {
            setIntro(e.target.value);
          }}
        ></textarea>
        <br />
        <label className="font-bold">Content</label>
        <br />
        <textarea
          className="mb-4 p-2 w-full border border-gray-500 rounded-md"
          placeholder="Enter Content"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        ></textarea>
        <br />
        <label className="font-bold">Image URL</label>
        <br />
        <input
          className="mb-4 p-2 w-full border border-gray-500 rounded-md"
          placeholder="Enter Image URL"
          value={imgURL}
          onChange={(e) => {
            setImgURL(e.target.value);
          }}
        ></input>
        <br />

        <div className="mt-4 float-right">
          <button className="p-2 text-gray border border-gray-400 rounded-xl hover:bg-gray-200"
          onClick={props.onCloseForm}>
            Cancel
          </button>

          <button
            className="ml-2 p-2 text-white bg-green-700 border-black rounded-xl hover:bg-green-500"
            onClick={() => {
            if(props.blogg){
              props.setBloggs(prev => prev.map((ele,i)=>{
                if(i===props.editBloggIndex){
                  return {date:new Date(),title,description:content,intro,imgURL} 
                } 
                return ele
              }))
            } else {
            props.setBloggs(prev=>[{date:new Date(),title,description:content,intro,imgURL},...prev])}
            props.onCloseForm()
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBloggForm;
