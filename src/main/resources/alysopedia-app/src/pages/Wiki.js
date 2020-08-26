
import React, {useState} from 'react';
import './Wiki.js';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import axios from 'axios';
import Article from '../components/Article';
import logo from '../images/logo.svg';
import WikiSearch from '../components/WikiSearch.jsx';

const Wiki = () => {

    const reqUrl = `http://localhost:8182/readWikiByName/`;
    //page to retrieve - currently default to Test
    let wikiPage = `Test`;

    // request for data
    let configGet = {
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    responseType: 'json'
    };

    // States - manage default display
    const[data, setData] = useState([]);
    const[title, setTitle] = useState(`Title`);
    const[catagory, setCatagory] = useState(`Catagory`);
    const[body, setBody] = useState(`Body`);
    // if set to 'true' a contents page & side summary table will be displayed
    // wiki.contents controls display of <Contents /> and wiki.table controls display of <SideSummary />
    const[wiki, setWiki] = useState(
        {
        contents: false,
        table: false
        });
    // search bar state (used in WikiSearch.jsx)
    const[wikiPageTitle, setWikiPageTitle] = useState(wikiPage);

    const handleWikiTitleChange = (event) => {       
        setWikiPageTitle(event.target.value);
        console.log(wikiPageTitle);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        searchWiki();
      }

    const searchWiki = () => {
        axios.get(reqUrl + wikiPageTitle, configGet)
            .then(response => {
                let data = response.data;
                setData(data);
                
                setTitle(response.data[0].title);
                setCatagory(response.data[0].category);
                setBody(response.data[0].body);
                //set to response once feature added
                setWiki({
                    contents: false,
                    table: false
                    });

                console.log(data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

// change this?
window.addEventListener("load", searchWiki);

// wiki page display - as long as data returned is empty page will be 'loading' - have default page
  return (
    <div className="Wiki">
        <Navigation />

        <div style={{marginLeft:250 + 'px'}}>
            <br></br>
            <WikiSearch
            wikiTitle={wikiPageTitle}
            onWikiTitleChange={handleWikiTitleChange}
            onSubmit={handleSubmit} />
            {
                Array.isArray(data) && data.length > 0 ?
                <Article 
                    title={title}
                    subtitleText={catagory}
                    body={body}
                    wiki={wiki}
                />
            : <div className="App-header">
                <h1>Wiki data is loading...</h1> <img src={logo} className="App-logo" alt="logo" />
              </div>
            }
            <Footer />
        </div>
    </div>
  );

}

export default Wiki;
