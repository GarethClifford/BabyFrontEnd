import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

makeBabyName = () => {
   var data = {
    lengthOfName:document.getElementById('lengthOfName').value,
    nameStartingWith:document.getElementById('startOfName').value
  }
  var name;
  axios.post('http://localhost:8081/names/addName', data).then((response) => {
    console.log(response.data.actualName);
document.getElementById('contentOfDiv').innerHTML = 'Baby has been created, your baby is called: <br/>' + response.data.actualName;
  });

}


  render() {
    return (

      <div className="App">
        <header className="App-header">
        Please enter the length of the name you would like
        <br/>
        <input type='number' id='lengthOfName' placeholder='Length of name' className ="form-control" style={{width:'150px'}}/>
        Please enter what you would like the start of the name to be
        <br/>
        <input type = 'text' id='startOfName' placeholder='Start of name' className ="form-control" style={{width:'150px'}}/>
        <button className="btn btn-success" onClick={this.makeBabyName}>Create baby</button>
        <div id='contentOfDiv'></div>
        </header>
      </div>
    );
  }
}

export default App;
