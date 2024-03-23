import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import axios from "axios";


const About = () => {
  const [files, setFiles] = useState(null);
  const [progress, setProgress] = useState({ started: false, pc: 0});
  const [ msg, setMsg] = useState(null);

  function handleUpload() {
    if(!files) {
      setMsg("No file selected");
      return;
    }
      
      
      const fd = new FormData();
      fd.append('file', files);

      setMsg("Uploading........");
      setProgress(prevState => {
        return {...prevState, started: true}
      });
      axios.post('http://localhost:80/myPortifolioApi/files/save', fd, {
        onUploadProgress: (ProgressEvent) => { setProgress(prevState => {
          return {...prevState, pc: ProgressEvent.progress*100}
        })},
        // headers: {
        //   "Custom-Header": "value",
        // }

      })
      .then (res => {
        setMsg("Upload sucessful");
        console.log(res.data);
      })

        .catch(err => {
          setMsg("Upload failed");
          console.error(err);
      });
   
  }

  
  return (
    <div className="h-screen">
      <div> 
        <Navbar />
      </div>

      <div className='pt-32'>
        <h1 className='text-xl'>Uploading File demo</h1>


          {/* <input type='text' name='username' placeholder='username' onChange = {handleChange}/> */}

          <input type='file' name='file' onChange = { (e) => { setFiles(e.target.files)}} multiple/><br /><br />

          <button type='submit' name='submit' onClick={handleUpload} className='bg-blue-400'>UPLOAD</button>

          { progress.started && <progress max={100} value={progress.pc}></progress>}
          { msg && <span> {msg} </span>}
        
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
