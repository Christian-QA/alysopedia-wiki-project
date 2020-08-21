
import React, {useState} from 'react';
import './Wiki.js';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import axios from 'axios';
import Article from '../components/Article';
import logo from '../images/logo.svg';
import WikiSearch from '../components/WikiSearch.jsx';

const Wiki = () => {

    const reqUrl = `http://localhost:8181/readWikiByName/`;
    //page to retrieve - currently default to Test
    let wikiPage = `Test`;

    // States
    const[data, setData] = useState([]);
    const[title, setTitle] = useState(`Title`);
    const[catagory, setCatagory] = useState(`Catagory`);
    const[body, setBody] = useState(`Body`);
    // search bar state (used in WikiSearch.jsx)
    const[wiki, setWiki] = useState(wikiPage);
   
    // request for data
    let configGet = {
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    responseType: 'json'
    };

    const handleWikiTitleChange = (event) => {       
        // need to include a conditional event that replaces ' ' with '%20' in event.target.value for url
        setWiki(event.target.value);
       console.log(wiki);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        searchWiki();
      }

    const searchWiki = () => {
        axios.get(reqUrl + wiki, configGet)
            .then(response => {
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

// change this?
window.addEventListener("load", searchWiki);

// wiki page display - as long as data returned is empty page will be 'loading' - have default
// wiki.active controls display of <Contents /> and wiki.table controls display of <SideSummary />
  return (
    <div className="Wiki">
        <Navigation />

        <div style={{marginLeft:250 + 'px'}}>
            <WikiSearch
            wikiTitle={wiki}
            onWikiTitleChange={handleWikiTitleChange}
            onSubmit={handleSubmit} />
            {
                Array.isArray(data) && data.length > 0 ?
                <Article 
                    title={title}
                    subtitleText={catagory}
                    body={body}
                    wiki={
                        {
                        active: true,
                        table: true
                        }
                    }
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
