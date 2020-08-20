import React, {useState} from 'react';
import axios from 'axios';

const WikiSearch = () => {

    let reqUrl = `http://localhost:8181/readWikiByName/`;
    let wikiPage = `Test`;

    // search state
    const[wiki, setWiki] = useState(wikiPage);
    
    let configGet = {
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        responseType: 'json'
        };

    const handleWikiTitleChange = (event) => {       
        this.setWiki(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.get(reqUrl + wiki, configGet)
          .then(res => {
            console.log(res.data);
          })
      }

    return (
       <> 
      <div className="App" style={{flexDirection: "row-reserve"}}>
          <p>Search</p>
          <form onSubmit={handleSubmit}>
            <section>
                    <label for="wikiName">By Title<br></br></label>
                    <input type="text" id="wikiName" name="title" placeholder="Looking for title..." value={this.state.title} onChange={handleWikiTitleChange}></input>
            </section>
            <button type="submit">Submit</button>
          </form>
      </div>
      </>
    );
}

export default WikiSearch;