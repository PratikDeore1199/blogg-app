
import { useState } from "react";
import Blogs from "./components/Blogs";
import Modal from "./components/Modal";

function App() {
  const [showCreateModal, setShowCreateModal]=useState(false)
  return (
  <div className="m-6">
    <Blogs></Blogs>
    <Modal show={showCreateModal} onClose={()=>{setShowCreateModal(false)
    }}><Blogs></Blogs></Modal>
    <button  onClick={()=>{
     setShowCreateModal(true)
    }}>create</button>
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
