import React from 'react';

const portal = () => {
    return (
    <div className="portal">
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
                    <input type="button" value="Submit" id="postWikiButton"></input>
                    <script src="/Submit.js"></script>
                </section>
            </article>
        </div>
    </div>
    );
}
 
export default portal;