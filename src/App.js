import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Simple from './Simple'
import {pushRotate as Menu} from 'react-burger-menu';
//import AuthComponent from './AuthComponent';

class App extends Component {
  showSettings(event) {
    event.preventDefault();

  }

  render() {
    return (

      <div className="App" id="outer-container">


        <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>
            <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
          </Menu>
        <main id="page-wrap">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            
          </header>
          <Simple/>
        </main>
        {/* <AuthComponent/> */}
        
      </div>
    );
  }
}

export default App;
