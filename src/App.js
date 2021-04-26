import React, { useState } from 'react';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';

function App() {
    
    const [selectedImg, setSelectedImg] = useState(null); //for the modal

  return (
    <div className="App">
      <Title/>
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg}/>
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>} {/* if an image is selected from ImageGrid then show the modal(enlarged image)*/ }
    </div>
  );
}

export default App;
