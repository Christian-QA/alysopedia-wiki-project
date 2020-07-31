import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Wiki.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="./Wiki.js"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <nav className="w3-sidebar w3-bar-block w3-white w3-collapse w3-top" style={{width:250 + 'px'}} id="mySidebar">
        <div className="w3-container w3-display-container w3-padding-16">
          <i onClick="w3_close()" className="fa fa-remove w3-hide-large w3-button w3-display-topright"></i>
          <h3 className="w3-wide"><b>LOGO</b></h3>
        </div>

        <div className="shopping-list"></div>

        <a href="#footer" className="w3-bar-item w3-button w3-padding">Contact</a> 
        <a href="javascript:void(0)" className="w3-bar-item w3-button w3-padding" onClick="document.getElementById('newsletter').style.display='block'">Newsletter</a> 
        <a href="#footer"  className="w3-bar-item w3-button w3-padding">Subscribe</a>
      </nav>
    </div>
  );
}

export default App;
