import React from 'react';
import logo from './logo.svg';
import './App.css';


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
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <nav class="w3-sidebar w3-bar-block w3-white w3-collapse w3-top" style={{width:250 + 'px'}} id="mySidebar">
        <div class="w3-container w3-display-container w3-padding-16">
          <i onclick="w3_close()" class="fa fa-remove w3-hide-large w3-button w3-display-topright"></i>
          <h3 class="w3-wide"><b>LOGO</b></h3>
        </div>


        <div class="shopping-list"></div>

        <a href="#footer" class="w3-bar-item w3-button w3-padding">Contact</a> 
        <a href="javascript:void(0)" class="w3-bar-item w3-button w3-padding" onclick="document.getElementById('newsletter').style.display='block'">Newsletter</a> 
        <a href="#footer"  class="w3-bar-item w3-button w3-padding">Subscribe</a>
      </nav>
    </div>
  );
}

export default App;
