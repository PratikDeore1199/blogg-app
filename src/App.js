
import { useState } from "react";
import Blogs from "./components/Blogs";
import Modal from "./components/Modal";
import CreateBloggForm from "./components/CreateBloggForm";

function App() {
  const [bloggs, setBloggs]=useState([])
  const [showCreateModal, setShowCreateModal]=useState(false);
 /* const showModal =()=>{
    setShowCreateModal(true)
  }*/
  return (
  
  <div className="m-20">
     <button  onClick={()=>{
     setShowCreateModal(true)
    }} className="bg-blue-700 text-black hover:bg-red-600 rounded-lg p-1 mb-2">Create Blogg</button>
    <Blogs bloggs={bloggs}/>
    <Modal show={showCreateModal} onClose={()=>{setShowCreateModal(false)
    }}><CreateBloggForm setBloggs={setBloggs}/></Modal>
    
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
