import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Simple from './Simple'
//import AuthComponent from './AuthComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Simple/>
        {/* <AuthComponent/> */}
        
      </div>
    );
  }
}

export default App;
