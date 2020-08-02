
import React from 'react';
import logo from '../images/logo.svg';
import './Wiki.js';
import axios from 'axios';

let configGet = {
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    responseType: 'json'
};

const searchWiki = () => {
    let wikiTitle = document.getElementById('wikiName')
    
    axios.get(`http://localhost:8181/readWikiByName/Test`, configGet)
        .then(function (response) {
            let titleArr = response.data[0].title;

            document.querySelector('#wikiName').innerHTML = response.data[0].title;
            document.querySelector('#wikiCategory').innerHTML = response.data[0].category;
            document.querySelector('#wikiBody').innerHTML = response.data[0].body;
            console.log(response.data);
            console.log(titleArr);

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
    <div className="Wiki">
        <nav className="w3-sidebar w3-bar-block w3-white w3-collapse w3-top" style={{width:250 + 'px'}} id="mySidebar">
            <div className="w3-container w3-display-container w3-padding-16">
            <i onClick="w3_close()" className="fa fa-remove w3-hide-large w3-button w3-display-topright"></i>
            <a href="/" className="w3-wide"><b>Logo</b></a>
            </div>
            <div className="shopping-list"></div>

            <a href="#footer" className="w3-bar-item w3-button w3-padding">Contact</a> 
            <a href="javascript:void(0)" className="w3-bar-item w3-button w3-padding" onClick="document.getElementById('newsletter').style.display='block'">Newsletter</a> 
            <a href="/About" className="w3-bar-item w3-button w3-padding">About</a>
        </nav>
        <div>
            <header className="App-header">
              <h1 id='wikiName'></h1>
              <h2 id='wikiCategory'></h2>
              <p id='wikiBody'></p>
            </header>
        </div>
    </div>
  );

}

export default Wiki;
