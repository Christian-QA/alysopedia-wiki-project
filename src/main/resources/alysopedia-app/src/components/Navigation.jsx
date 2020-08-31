import React from 'react';
// import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
//import WikiSearch from './WikiSearch';
//import axios from 'axios';

//    // For WikiSearch.jsx
//    const reqUrl = `http://localhost:8181/readWikiByCategory/`;
//    //pages to retrieve - currently default to Test
//    let wikiDefaultSearch = `Test`;

//    // request for data
//    let configGet = {
//    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
//    responseType: 'json'
//    };

//    const[wikiSearch, setWikiSearch] = useState(wikiDefaultSearch);

//    const handleWikiSearchChange = (event) => {       
//    setWikiSearch(event.target.value);
//    console.log(wikiSearch);
//    }

//    const handleSearchSubmit = (event) => {
//    event.preventDefault();
//    searchWiki();
//    }

//    const searchWiki = () => {
//       axios.get(reqUrl + wikiSearch, configGet)
//           .then(response => {
//              // redirect to /Wiki or /WikiLanding
//              // send data for display
//               let data = response.data;
//             //   setData(data);
              
//             //   setTitle(response.data[0].title);
//             //   setCatagory(response.data[0].category);
//             //   setBody(response.data[0].body);
//             //   //set to response once feature added
//             //   setWiki({
//             //       contents: false,
//             //       table: false
//             //       });

//               console.log(data);
//           })
//           .catch(function (error) {
//               console.log(error);
//           });
//   }
 
const Navigation = () => {
    return (
    <>
      <div className="navigation">
         <nav className="w3-sidebar w3-bar-block w3-white w3-collapse w3-top" style={{width:250 + 'px'}} id="mySidebar">
            <div className="w3-container w3-display-container w3-padding-16">
               <NavLink className="w3-wide" to="/"><b>Logo</b></NavLink>
            </div>
            {/* <WikiSearch
            label="Search by Category: "
            wikiSearch={wikiSearch}
            onSearchChange={handleWikiSearchChange}
            onSubmit={handleSearchSubmit}/> */}
            <NavLink className="w3-bar-item w3-button w3-padding" to="/Wiki">Wiki</NavLink>
            <NavLink className="w3-bar-item w3-button w3-padding" to="/About">About</NavLink>
            <NavLink className="w3-bar-item w3-button w3-padding" to="/Admin">Portal</NavLink>
            <NavLink className="w3-bar-item w3-button w3-padding" to="/Contact">Contact</NavLink>
         </nav>
      </div>
   </>
    );
}
 
export default Navigation;