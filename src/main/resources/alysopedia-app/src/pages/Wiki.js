
import React from 'react';
import logo from '../images/logo.svg';
import './Wiki.js';
import Navigation from '../components/Navigation';
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

const Wiki = () => {
  return (
    <div className="Wiki">
        <Navigation />

        <div style={{marginLeft:250 + 'px'}}>
            <header className="App-header">
              <h1 id='wikiName'>Wiki Name</h1>
              <h2 id='wikiCategory'>Category</h2>
              <p id='wikiBody'>Wiki bodyyyyyyyyyyyyyyyy</p>
            </header>
        </div>
        
    </div>
  );

}

export default Wiki;
