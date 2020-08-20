
import React, {useState} from 'react';
import './Wiki.js';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import axios from 'axios';
import Article from '../components/Article';
import SideSummary from '../components/wiki/Side-Summary';
import logo from '../images/logo.svg';

const Wiki = () => {

    //states
    const[data, setData] = useState([]);
    const[title, setTitle] = useState(`Title`);
    const[catagory, setCatagory] = useState(`Catagory`);
    const[body, setBody] = useState(`Body`);

    //page to retrieve
    let reqUrl = `http://localhost:8181/readWikiByName/Test`;

// request for data
    let configGet = {
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    responseType: 'json'
    };

const searchWiki = () => {
    
    axios.get(reqUrl, configGet)
        .then(function (response) {
            let data = response.data;
            setData(data);
            
            setTitle(response.data[0].title);
            setCatagory(response.data[0].category);
            setBody(response.data[0].body);

            console.log(data);
            console.log(title);
            console.log(catagory);
            console.log(body);
        })
        .catch(function (error) {
            console.log(error);
        });
}

window.addEventListener("load", searchWiki);

// wiki page display - as long as data returned is empty page will be 'loading'
  return (
    <div className="Wiki">
        <Navigation />

        <div style={{marginLeft:250 + 'px'}}>
            {
                Array.isArray(data) && data.length > 0 ?
                <Article 
                    title={title}
                    subtitleText={catagory}
                    body={body}
                />
            : <div>
                <h1>Wiki data is loading...</h1> <img src={logo} className="App-logo" alt="logo" />
              </div>
            }
            <SideSummary />
            <Footer />
        </div>
        
    </div>
  );

}

export default Wiki;
