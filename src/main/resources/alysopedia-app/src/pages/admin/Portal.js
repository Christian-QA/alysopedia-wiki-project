import React from 'react';
import axios from 'axios';
import Navigation from '../../components/Navigation';

function postWiki() {
    let name = document.getElementById("wikiName").value;
    let category = document.getElementById("wikiCategory").value;
    let body = document.getElementById("wikiBody").value;

    axios({
        method: 'post',
        url: 'http://localhost:8181/addWiki',
        data: `{
            "title" : "${name}",
            "category" : "${category}",
            "author" : "Chris",
            "body" : "${body}"
        }`,
        headers: {'Content-Type': 'application/json'} 
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}

const portal = () => {
    return (
    <div className="portal">
        <Navigation />

        <div style={{marginLeft:250 + 'px'}}>
            <article className="App-article">
                <h1>Admin Portal</h1>
                <h3>Import new wiki documents using the fields below</h3>
                <section>
                    <label for="wikiName">Title</label>
                    <input type="text" id="wikiName" name="wikiName" placeholder="Put title here..."></input>
                    <label for="wikiCategory">Category</label>
                    <input type="text" id="wikiCategory" name="wikiCategory" placeholder="Put category here..."></input>
                    <label for="wikiBody">Body</label>
                    <input type="text" id="wikiBody" name="wikiBody" placeholder="Put body here..."></input>
                    <button onclick={postWiki}>Submit</button>.
                </section>
            </article>
        </div>
        
    </div>
    );
}

export default portal;