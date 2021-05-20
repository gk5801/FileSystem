import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import React from 'react';
import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader';
import './App.css';
function App() {
  return (
    <div 
     className="App" >
      <h2 align="center"><u>DRAG & DROP FILE UPLOAD</u> </h2>
      <div >
        <Dropzone
            styles={{
            dropzone: { height: '200px' ,width: '50%', overflow: 'auto', border: '2px dashed black', background: 'white' },
            inputLabelWithFiles: { margin: '20px 3%' }
          }}
          accept="image/*,audio/*,video/*,document/*,png/*"/>
      </div>
     <div>
        <button type="submit" class="btn btn-primary center">UPLOAD</button>
    </div>
    </div>
  );
}

export default App;