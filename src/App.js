
import { useState } from "react";
import Blogs from "./components/Blogs";
import Modal from "./components/Modal";
import CreateBloggForm from "./components/CreateBloggForm";
import BlogDetails from "./components/BloggDetails";

function App() {
  const [bloggs, setBloggs]=useState([])
  const [showCreateModal, setShowCreateModal]=useState(false);
  const [bloggIndex, setBloggIndex]=useState(-1)
  const showModal =()=>{
    setShowCreateModal(true)
  }

  const closeModal=()=>{
    setShowCreateModal(false)
  }
  return (
  
  <div className="m-20">
    <div className="flex justify-between items-center">
      <div>      
        <h1 className="text-4xl text-gray-600 font-extrabold">BLOGG</h1>
        <p className="text-sm text-gray-400 mt-2 "> Do you enjoy reading blogs? Go and enjoy</p>
      </div> 
       <button  onClick={()=>{
          showModal(true)
          }} className=" max-h-12 bg-green-600 p-2  text-white hover:bg-blue-600 float-right shadow rounded ">Create Blogg
        </button>
    </div>
    <hr className="mt-6"/>
    <Blogs bloggs={bloggs} setBloggIndex={setBloggIndex} />
    <Modal show={showCreateModal} onClose={()=>{setShowCreateModal(false)
    }}><CreateBloggForm setBloggs={setBloggs} onCloseForm={closeModal}/></Modal>
    <Modal show={bloggIndex > -1}
    onClose={()=>{
      setBloggIndex(-1)
      }}>
        <BlogDetails bloggDetails={bloggs[bloggIndex]}/>
    </Modal>
  </div>
  );
}

export default App;
/**
 * blogg details
 * create blogg form
 * view blogg
 * submit button
 * input
 */
