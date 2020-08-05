import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import firebase from 'firebase/app';
import { storage } from "./firebase/firebase"

class App extends Component {

  fileSlectedHandler = event => {
    // Create a root reference
    var storageRef = firebase.storage().ref();
    var selectedFiles = event.target.files;

    for(let i = 0; i < selectedFiles.length; i++)
    {
      try{
      storageRef.child('images/' + selectedFiles[i].name).put(selectedFiles[i])
          .then(snapshot => {
              console.log('Uploaded.' + i);
        });
      }
      catch{
        console.log('File not uploaded.')
      }
    }
}

  render(){
    return (
      <div className="App">
        <input type="file" multiple onChange={this.fileSlectedHandler}/>
      </div>
    );


  }
}

export default App;
