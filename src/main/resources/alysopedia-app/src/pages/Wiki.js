
import React from 'react';
import logo from '../logo.svg';
import './Wiki.js';
import axios from 'axios';

let configGet = {
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    responseType: 'json'
};

const searchWiki = () => {
    axios.get(`http://localhost:8181/findAllWiki`, configGet)
        .then(function (response) {
            let titleArr = response.data;
            console.log(response.data);

        })
        .catch(function (error) {
            console.log(error);
        });
}
window.addEventListener("load", searchWiki);

/*
function AppWiki() {
  return (
    <div className="AppWiki">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>fgretsgrdthdrtyfjhtgy
        </p>
      </header>
      <nav className="w3-sidebar w3-bar-block w3-white w3-collapse w3-top" style={{width:250 + 'px'}} id="mySidebar">
        <div className="w3-container w3-display-container w3-padding-16">
          <i onClick="w3_close()" className="fa fa-remove w3-hide-large w3-button w3-display-topright"></i>
          <h3 className="w3-wide" ahref=".\App.js"><b>LOGO</b></h3>
        </div>

        <div className="shopping-list"></div>

        <a href="#footer" className="w3-bar-item w3-button w3-padding">Contact</a> 
        <a href="javascript:void(0)" className="w3-bar-item w3-button w3-padding" onClick="document.getElementById('newsletter').style.display='block'">Newsletter</a> 
        <a href="#footer"  className="w3-bar-item w3-button w3-padding">Subscribe</a>
      </nav>
    </div>
  );
}
*/

const Wiki = () => {
  return (
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
  );

}


export default Wiki;
